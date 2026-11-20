"use client";

import "@annotorious/openseadragon/annotorious-openseadragon.css";

import { fromWebAnnotations, toAnnotationPage, type Annotation, type DeepZoomImage, type Region } from "@rizer/domain";
import type { OpenSeadragonAnnotator } from "@annotorious/openseadragon";
import {
  ArrowDown,
  ArrowUp,
  Crosshair,
  Download,
  Home,
  Loader2,
  PenSquare,
  Plus,
  Redo2,
  Save,
  Trash2,
  Undo2,
  Upload,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import type OpenSeadragon from "openseadragon";
import { useEffect, useId, useReducer, useRef, useState } from "react";
import { toast } from "sonner";

import { Badge } from "@rizer/ui/components/badge";
import { Button } from "@rizer/ui/components/button";
import { Field, FieldGroup, FieldLabel } from "@rizer/ui/components/field";
import { Input } from "@rizer/ui/components/input";
import { Textarea } from "@rizer/ui/components/textarea";

import { useGuardedAction } from "@/shared/lib/use-guarded-action";
import { useUnsavedChangesWarning } from "@/shared/lib/use-unsaved-changes";

import { saveAnnotationsAction } from "../api/actions";
import { historyReducer, type Item, startHistory } from "../model/history";
import { pixelsToRegion, regionFromViewport, toAnnotoriousShape, type PixelRect } from "../model/region";

type Shape = { id: string; target: { selector: { geometry: PixelRect } } };

let counter = 0;
const tempId = () => `new_${Date.now().toString(36)}_${counter++}`;
/** 변경 시각(실행 취소 묶음 판단용). 이벤트 처리기에서만 부른다. */
const eventTime = () => Date.now();

/**
 * 딥줌 이미지 위에 사각형 주석을 그리고 설명을 단다.
 * - 마우스: "영역 그리기"를 켜고 끌어서 그린다. 그린 영역은 모서리를 끌어 고친다.
 * - 키보드: 뷰어에서 화살표·+/-로 움직인 뒤 "보이는 영역으로 추가"를 누르고, 목록에서 x·y·너비·높이를 숫자로 고친다.
 * - 실행 취소·다시 실행: 버튼이나 Ctrl(⌘)+Z, Ctrl(⌘)+Shift+Z(글 칸 안에서는 브라우저의 글자 실행 취소).
 * 저장은 목록 전체를 한 번에 보낸다. 편집기를 연 뒤 다른 곳에서 먼저 저장했으면 덮어쓰지 않는다(version, 낙관적 잠금).
 * 저장하지 않은 변경이 있으면 새로 고침·창 닫기·사이드바 이동 전에 묻는다.
 */
export function AnnotationEditor({
  artifactId,
  image,
  imageAlt,
  initial,
  version,
  readOnly,
}: {
  artifactId: string;
  image: DeepZoomImage;
  imageAlt: string;
  initial: Annotation[];
  /** 편집기가 읽은 주석 목록의 버전(낙관적 잠금 기준) */
  version: number;
  readOnly: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<OpenSeadragon.Viewer | null>(null);
  const annoRef = useRef<OpenSeadragonAnnotator | null>(null);
  const [ready, setReady] = useState(false);
  const [history, dispatch] = useReducer(historyReducer, initial, (list) =>
    startHistory(list.map((a) => ({ id: a.id, title: a.title, body: a.body, region: a.region }))),
  );
  const items = history.present;
  // 마지막으로 저장한(또는 처음 읽은) 목록. 지금 목록과 다르면 저장하지 않은 변경이 있다(실행 취소로 돌아오면 없음).
  const [saved, setSaved] = useState(() => JSON.stringify(items));
  const dirty = JSON.stringify(items) !== saved;
  const [selected, setSelected] = useState<string | null>(null);
  const [drawing, setDrawing] = useState(false);
  const { pending: saving, run: runSave } = useGuardedAction();
  const hintId = useId();
  const size = { width: image.width, height: image.height };
  // 다음 저장의 낙관적 잠금 기준. 편집기가 들고 있는 목록의 버전이라 저장에 성공했을 때만 서버가 돌려준 새 버전으로 바꾼다.
  // 화면을 다시 읽어도(저장 뒤 revalidatePath) 목록은 처음 읽은 것을 계속 고치므로 props의 새 버전을 따르지 않는다.
  // 따르면 그사이 다른 곳이 저장한 목록을 이 편집기의 예전 목록으로 덮어쓴다.
  const versionRef = useRef(version);
  useUnsavedChangesWarning(dirty && !readOnly);

  /** 목록을 바꾼다(실행 취소 기록에 남긴다). coalesce가 같은 변경은 1초 안이면 하나로 묶는다(글자 입력). */
  const apply = (update: (list: Item[]) => Item[], coalesce?: string) =>
    dispatch({ type: "apply", update, coalesce, at: eventTime() });
  /** Annotorious의 사각형을 목록과 맞춘다(실행 취소·가져오기처럼 목록을 통째로 바꿀 때). */
  const syncShapes = (list: Item[]) =>
    annoRef.current?.setAnnotations(list.map((i) => toAnnotoriousShape(i.id, i.region, size)) as never, true);

  // 뷰어와 Annotorious는 브라우저에서만 돈다. 한 번 만들고 화면을 떠날 때 정리한다.
  useEffect(() => {
    let disposed = false;
    const sizeAtMount = { width: image.width, height: image.height };
    (async () => {
      const [{ default: OSD }, { createOSDAnnotator, UserSelectAction }] = await Promise.all([
        import("openseadragon"),
        import("@annotorious/openseadragon"),
      ]);
      if (disposed || !containerRef.current) return;
      const viewer = OSD({
        element: containerRef.current,
        tileSources: image.dziUrl,
        crossOriginPolicy: "Anonymous",
        showNavigationControl: false,
        gestureSettingsMouse: { clickToZoom: false },
        maxZoomPixelRatio: 2,
        visibilityRatio: 0.5,
      });
      const anno = createOSDAnnotator(viewer, {
        drawingEnabled: false,
        userSelectAction: readOnly ? UserSelectAction.SELECT : UserSelectAction.EDIT,
        style: { fill: "#e11d48", fillOpacity: 0.15, stroke: "#e11d48", strokeWidth: 2 },
      });
      anno.setDrawingTool("rectangle");
      anno.setAnnotations(
        initial.map((a) => toAnnotoriousShape(a.id, a.region, sizeAtMount)) as never,
        true,
      );
      anno.on("createAnnotation", (created) => {
        const shape = created as unknown as Shape;
        const region = pixelsToRegion(shape.target.selector.geometry, sizeAtMount);
        dispatch({
          type: "apply",
          at: Date.now(),
          update: (list) => [...list, { id: shape.id, title: `새 주석 ${list.length + 1}`, body: "", region }],
        });
        setSelected(shape.id);
      });
      anno.on("updateAnnotation", (updated) => {
        const shape = updated as unknown as Shape;
        const region = pixelsToRegion(shape.target.selector.geometry, sizeAtMount);
        dispatch({ type: "apply", at: Date.now(), update: (list) => list.map((i) => (i.id === shape.id ? { ...i, region } : i)) });
      });
      anno.on("selectionChanged", (selection) => {
        setSelected((selection[0] as unknown as Shape | undefined)?.id ?? null);
      });
      viewerRef.current = viewer;
      annoRef.current = anno;
      setReady(true);
    })();
    return () => {
      disposed = true;
      annoRef.current?.destroy();
      viewerRef.current?.destroy();
      annoRef.current = null;
      viewerRef.current = null;
    };
    // 이미지가 바뀌면(새로 올림) 다시 만든다. 주석 목록은 처음 값만 쓴다.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [image.dziUrl]);

  const undo = () => {
    const target = history.past.at(-1);
    if (!target) return;
    dispatch({ type: "undo" });
    syncShapes(target);
    if (selected && !target.some((i) => i.id === selected)) setSelected(null);
  };
  const redo = () => {
    const target = history.future[0];
    if (!target) return;
    dispatch({ type: "redo" });
    syncShapes(target);
    if (selected && !target.some((i) => i.id === selected)) setSelected(null);
  };

  // Ctrl(⌘)+Z 실행 취소, Ctrl(⌘)+Shift+Z·Ctrl+Y 다시 실행. 글 칸 안에서는 브라우저의 글자 실행 취소를 그대로 둔다.
  useEffect(() => {
    if (readOnly) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (!(event.ctrlKey || event.metaKey) || event.altKey) return;
      if ((event.target as HTMLElement | null)?.closest?.("input, textarea, select, [contenteditable='true']")) return;
      const key = event.key.toLowerCase();
      if (key === "z" && !event.shiftKey) {
        event.preventDefault();
        undo();
      } else if ((key === "z" && event.shiftKey) || key === "y") {
        event.preventDefault();
        redo();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  const toggleDrawing = () => {
    const next = !drawing;
    annoRef.current?.setDrawingEnabled(next);
    setDrawing(next);
  };

  const focusItem = (id: string) => {
    setSelected(id);
    annoRef.current?.setSelected(id, !readOnly);
    annoRef.current?.fitBounds({ id }, { padding: 40 } as never);
  };

  const addFromViewport = () => {
    const viewer = viewerRef.current;
    if (!viewer) return;
    const rect = viewer.viewport.viewportToImageRectangle(viewer.viewport.getBounds());
    const region = regionFromViewport({ x: rect.x, y: rect.y, w: rect.width, h: rect.height }, size);
    const id = tempId();
    annoRef.current?.addAnnotation(toAnnotoriousShape(id, region, size) as never);
    apply((list) => [...list, { id, title: `새 주석 ${list.length + 1}`, body: "", region }]);
    setSelected(id);
  };

  /** 한 주석을 고친다. coalesce로 같은 칸의 연속 입력을 한 번의 실행 취소로 묶는다. */
  const update = (id: string, patch: Partial<Item>, coalesce?: string) => {
    apply((list) => list.map((i) => (i.id === id ? { ...i, ...patch } : i)), coalesce);
    if (patch.region) annoRef.current?.updateAnnotation(toAnnotoriousShape(id, patch.region, size) as never);
  };

  const remove = (id: string) => {
    annoRef.current?.removeAnnotation(id);
    apply((list) => list.filter((i) => i.id !== id));
    if (selected === id) setSelected(null);
  };

  const move = (index: number, delta: -1 | 1) => {
    apply((list) => {
      const next = [...list];
      const [item] = next.splice(index, 1);
      next.splice(index + delta, 0, item!);
      return next;
    });
  };

  /** W3C Web Annotation JSON 파일로 내려받는다. 읽기 전용 계정도 쓸 수 있다. */
  const exportJson = () => {
    const page = toAnnotationPage(
      items.map((i, order) => ({ ...i, order, artifactId })),
      image.dziUrl,
    );
    const url = URL.createObjectURL(new Blob([JSON.stringify(page, null, 2)], { type: "application/ld+json" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = `${artifactId}-annotations.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const fileRef = useRef<HTMLInputElement>(null);
  /** 파일의 주석으로 목록을 바꾼다. 저장을 눌러야 반영되므로, 잘못 가져와도 새로 고치면 되돌아간다. */
  const importJson = async (file: File | undefined) => {
    if (!file) return;
    try {
      const imported = fromWebAnnotations(JSON.parse(await file.text()), size).map((a) => ({ id: tempId(), ...a }));
      syncShapes(imported);
      apply(() => imported);
      setSelected(null);
      toast.success(`주석 ${imported.length}개를 가져왔습니다. 저장을 눌러야 반영됩니다.`);
    } catch (error) {
      toast.error(error instanceof SyntaxError ? "JSON 파일을 읽지 못했습니다." : error instanceof Error ? error.message : "가져오지 못했습니다.");
    } finally {
      if (fileRef.current) fileRef.current.value = "";
    }
  };

  // 저장이 실패해도(연결 끊김 등) 편집 중인 목록은 그대로 두고 알림만 띄운다.
  const save = () =>
    runSave(async () => {
      const snapshot = JSON.stringify(items);
      const payload = items.map((i, order) => ({
        id: i.id.startsWith("ann_") ? i.id : undefined,
        title: i.title,
        body: i.body,
        region: i.region,
        order,
      }));
      const result = await saveAnnotationsAction(artifactId, payload, versionRef.current);
      if (result.ok) {
        toast.success(result.message);
        if (result.version !== undefined) versionRef.current = result.version;
        setSaved(snapshot);
      } else toast.error(result.message);
    });

  const zoom = (factor: number) => viewerRef.current?.viewport.zoomBy(factor).applyConstraints();

  const regionField = (item: Item, key: keyof Region, label: string) => (
    <Field>
      <FieldLabel htmlFor={`${item.id}-${key}`} className="text-xs">
        {label}(%)
      </FieldLabel>
      <Input
        id={`${item.id}-${key}`}
        type="number"
        inputMode="decimal"
        min={0}
        max={100}
        step={0.1}
        value={item.region[key]}
        readOnly={readOnly}
        onChange={(e) => {
          const value = Number(e.target.value);
          if (Number.isFinite(value)) update(item.id, { region: { ...item.region, [key]: value } }, `region:${item.id}:${key}`);
        }}
      />
    </Field>
  );

  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_380px]">
      <section aria-label="이미지와 주석 영역" className="flex min-w-0 flex-col gap-2">
        <div role="toolbar" aria-label="뷰어 도구" className="flex flex-wrap items-center gap-2">
          {!readOnly && (
            <>
              <Button type="button" variant={drawing ? "default" : "outline"} size="sm" onClick={toggleDrawing} aria-pressed={drawing} disabled={!ready}>
                <PenSquare aria-hidden />
                영역 그리기
              </Button>
              <Button type="button" variant="outline" size="sm" onClick={addFromViewport} disabled={!ready}>
                <Crosshair aria-hidden />
                보이는 영역으로 추가
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                onClick={undo}
                disabled={history.past.length === 0}
                aria-label="실행 취소"
                aria-keyshortcuts="Control+Z Meta+Z"
                title="실행 취소 (Ctrl+Z)"
              >
                <Undo2 aria-hidden />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                onClick={redo}
                disabled={history.future.length === 0}
                aria-label="다시 실행"
                aria-keyshortcuts="Control+Shift+Z Meta+Shift+Z Control+Y"
                title="다시 실행 (Ctrl+Shift+Z)"
              >
                <Redo2 aria-hidden />
              </Button>
            </>
          )}
          <div className="ml-auto flex gap-1">
            <Button type="button" variant="ghost" size="icon-sm" onClick={() => zoom(1.5)} aria-label="확대" disabled={!ready}>
              <ZoomIn aria-hidden />
            </Button>
            <Button type="button" variant="ghost" size="icon-sm" onClick={() => zoom(1 / 1.5)} aria-label="축소" disabled={!ready}>
              <ZoomOut aria-hidden />
            </Button>
            <Button type="button" variant="ghost" size="icon-sm" onClick={() => viewerRef.current?.viewport.goHome()} aria-label="전체 보기" disabled={!ready}>
              <Home aria-hidden />
            </Button>
          </div>
        </div>
        {/* 뷰어 안에 초점을 받는 캔버스가 있어 role="img"를 쓰지 않는다(자식이 장식으로 바뀐다). 사진 설명은 글로 둔다. */}
        <p className="sr-only">사진: {imageAlt}</p>
        <div
          ref={containerRef}
          aria-describedby={hintId}
          className="relative h-[60vh] min-h-80 overflow-hidden rounded-lg border bg-neutral-900 lg:h-[calc(100vh-14rem)]"
          style={{ backgroundColor: image.dominantColor }}
        />
        <p id={hintId} className="text-xs text-muted-foreground">
          {drawing ? "이미지 위를 끌어 사각형을 그립니다. 다 그렸으면 '영역 그리기'를 다시 눌러 끕니다." : "끌어서 움직이고, 휠이나 두 손가락으로 확대합니다."}
        </p>
      </section>

      <section aria-labelledby="annotation-list-title" className="flex min-w-0 flex-col gap-3">
        <div className="flex items-center justify-between gap-2">
          <h2 id="annotation-list-title" className="font-semibold">
            주석 <Badge variant="secondary">{items.length}</Badge>
          </h2>
          {!readOnly && (
            <Button type="button" onClick={save} disabled={saving || !dirty}>
              {saving ? <Loader2 className="animate-spin" aria-hidden /> : <Save aria-hidden />}
              {dirty ? "저장" : "저장됨"}
            </Button>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          <Button type="button" variant="outline" size="sm" onClick={exportJson} disabled={items.length === 0}>
            <Download aria-hidden />
            JSON 내보내기
          </Button>
          {!readOnly && (
            <>
              <Button type="button" variant="outline" size="sm" onClick={() => fileRef.current?.click()}>
                <Upload aria-hidden />
                JSON 가져오기
              </Button>
              <input ref={fileRef} type="file" accept=".json,.jsonld,application/json,application/ld+json" hidden onChange={(e) => importJson(e.target.files?.[0])} />
            </>
          )}
        </div>
        {items.length === 0 && (
          <p className="rounded-lg border border-dashed p-6 text-center text-sm text-muted-foreground">
            아직 주석이 없습니다.{!readOnly && " 이미지에 영역을 그리거나 '보이는 영역으로 추가'를 눌러 시작하세요."}
          </p>
        )}
        <ol className="flex flex-col gap-2">
          {items.map((item, index) => {
            const open = selected === item.id;
            return (
              <li key={item.id} className={`rounded-lg border p-3 ${open ? "border-primary ring-2 ring-primary/20" : ""}`}>
                <div className="flex items-center gap-2">
                  <Button
                    type="button"
                    variant="ghost"
                    className="h-auto min-h-6 flex-1 justify-start px-1 text-left font-medium whitespace-normal"
                    onClick={() => focusItem(item.id)}
                    aria-expanded={open}
                    aria-controls={`${item.id}-panel`}
                  >
                    <span className="mr-1 text-muted-foreground tabular-nums">{index + 1}.</span>
                    {item.title || "(제목 없음)"}
                  </Button>
                  {!readOnly && (
                    <div className="flex shrink-0">
                      <Button type="button" variant="ghost" size="icon-sm" onClick={() => move(index, -1)} disabled={index === 0} aria-label={`${index + 1}번 주석을 위로`}>
                        <ArrowUp aria-hidden />
                      </Button>
                      <Button type="button" variant="ghost" size="icon-sm" onClick={() => move(index, 1)} disabled={index === items.length - 1} aria-label={`${index + 1}번 주석을 아래로`}>
                        <ArrowDown aria-hidden />
                      </Button>
                      <Button type="button" variant="ghost" size="icon-sm" onClick={() => remove(item.id)} aria-label={`${index + 1}번 주석 삭제`}>
                        <Trash2 aria-hidden />
                      </Button>
                    </div>
                  )}
                </div>
                <div id={`${item.id}-panel`} hidden={!open} className="mt-2">
                  <FieldGroup className="gap-3">
                    <Field>
                      <FieldLabel htmlFor={`${item.id}-title`}>제목</FieldLabel>
                      <Input id={`${item.id}-title`} value={item.title} readOnly={readOnly} maxLength={80} onChange={(e) => update(item.id, { title: e.target.value }, `title:${item.id}`)} />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor={`${item.id}-body`}>설명</FieldLabel>
                      <Textarea id={`${item.id}-body`} value={item.body} readOnly={readOnly} rows={4} maxLength={1200} onChange={(e) => update(item.id, { body: e.target.value }, `body:${item.id}`)} />
                    </Field>
                    <fieldset className="grid grid-cols-4 gap-2">
                      <legend className="mb-1 text-xs text-muted-foreground">영역(이미지 크기에 대한 백분율)</legend>
                      {regionField(item, "x", "왼쪽")}
                      {regionField(item, "y", "위")}
                      {regionField(item, "w", "너비")}
                      {regionField(item, "h", "높이")}
                    </fieldset>
                  </FieldGroup>
                </div>
              </li>
            );
          })}
        </ol>
        {!readOnly && items.length > 0 && (
          <Button type="button" variant="outline" onClick={addFromViewport} disabled={!ready} className="self-start">
            <Plus aria-hidden />
            주석 추가
          </Button>
        )}
      </section>
    </div>
  );
}
