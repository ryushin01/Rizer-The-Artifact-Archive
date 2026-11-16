import { CircleAlert } from "lucide-react";

import { Alert, AlertDescription } from "@rizer/ui/components/alert";

/**
 * 폼 전체의 오류 안내. 알림 영역(role="alert")은 처음부터 두고 내용만 바꿔야 화면 낭독기가 읽으므로,
 * 메시지가 없을 때도 영역을 남긴다(display: none이면 접근성 트리에서 빠지므로 sr-only로 접어 둔다.
 * 절대 위치라 flex의 간격도 차지하지 않는다). 다시 마운트되는 폼(key) 바깥에 둔다.
 * 안쪽 Alert는 알림 역할을 겹치지 않게 뺀다.
 */
export function FormErrorAlert({ message }: { message?: string }) {
  return (
    <div role="alert" className={message ? undefined : "sr-only"}>
      {message && (
        <Alert variant="destructive" role={undefined}>
          <CircleAlert aria-hidden />
          <AlertDescription>{message}</AlertDescription>
        </Alert>
      )}
    </div>
  );
}
