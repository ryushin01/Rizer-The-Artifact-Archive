import type { EnArtifact } from "./types";

const n = (title: string, body: string) => ({ title, body });

/** 300점으로 늘리며 더한 기사 전설·북유럽·켈트 유물의 영어 번역 */
export const EN_EUROPE_EXTRA: Record<string, EnArtifact> = {
  veillantif: {
    title: "Veillantif",
    owner: "Roland",
    maker: "Unknown",
    power: "Roland's warhorse, which carried him into the heart of the Saracen host.",
    firstRecord: "The Song of Roland",
    summary: "The warhorse Roland rode into his last battle at the pass of Roncevaux. Its name is read as 'the wakeful one.'",
    story: `In The Song of Roland every knight's sword and horse has a name. If Roland's sword is Durendal, the warhorse he rides is Veillantif. When the vast Saracen army pours into the pass of Roncevaux, Roland mounts Veillantif, ties a white pennon with golden fringes to his lance, and rides up and down before the Frankish knights to rouse them.

The name is read as coming from the Old French word for 'to be awake.' The poem sings again and again of Roland driving Veillantif through the enemy ranks and striking down their champions with Durendal. In the chansons de geste a horse was the knight's companion in his deeds.

The battle of Roncevaux rests on a real event of 778, when Charlemagne's rearguard was ambushed by Basques in the Pyrenees. In a poem written some three hundred years later the enemy became a Saracen army, and Roland and Veillantif became the model of a knight and horse who never gave ground.`,
    imageAlt: "A woodcut printed on blue-washed paper by the German artist Hans Burgkmair in 1508, Equestrian Portrait of the Emperor Maximilian. Under an arch, the emperor in armor and a plumed helmet rides a horse in a patterned caparison toward the left, with a double-headed eagle banner behind.",
    annotations: [
      n("Armored knight", "Maximilian I in a plumed helmet and plate armor. In this 1508 woodcut Hans Burgkmair presents knight and warhorse as one, like an ancient equestrian statue."),
      n("Caparisoned warhorse", "The horse wears a patterned caparison and steps forward with a raised foreleg. In the chansons de geste the horse was the knight's companion in his deeds, as Roland's warhorse Veillantif was."),
      n("The emperor's titles", "The Latin abbreviations at the top mean 'August Emperor Caesar Maximilian.' The double-headed eagle on the banner below is the arms of the Habsburg family."),
    ],
  },
  almace: {
    title: "Almace",
    owner: "Archbishop Turpin of Reims",
    maker: "Unknown",
    power: "With this sword the warrior-priest Turpin cut down Saracen after Saracen.",
    firstRecord: "The Song of Roland",
    summary: "The sword Archbishop Turpin of Reims wielded at Roncevaux. He fought with it until he fell.",
    story: `Turpin in The Song of Roland is both archbishop of Reims and a knight who bears a sword. At the pass of Roncevaux he has the knights confess their sins and blesses them, then spurs his own horse into the Saracen army. The sword he swings is Almace.

The poem tells how Turpin drew Almace and cut down one Saracen warrior after another. Pierced by lances all over his body, he did not stop fighting until he fell, and he gave a last blessing to the bodies of his fellow knights that Roland gathered before him.

The real Turpin was archbishop of Reims in the eighth century. In the twelfth century a Latin chronicle claiming to be his work, the Pseudo-Turpin Chronicle, spread the story of Charlemagne's Spanish campaigns across Europe.`,
    imageAlt: "A French double-edged sword of the thirteenth century. Below a disk-shaped pommel and a straight crossguard runs a long blade that tapers toward the point, darkened with age.",
    annotations: [
      n("Disk pommel", "A disk-shaped pommel at the end of the hilt keeps the hand from slipping and balances the sword. This is a thirteenth-century French sword."),
      n("Straight crossguard", "A straight crossguard sits between blade and grip. The knights of the chansons de geste fought with cross-shaped swords like this."),
      n("Double-edged blade", "A double-edged blade tapering to the point. Archbishop Turpin drew Almace and cut down one Saracen warrior after another."),
    ],
  },
  babieca: {
    title: "Babieca",
    owner: "El Cid (Rodrigo Díaz de Vivar)",
    maker: "Unknown",
    power: "Legend says that even after El Cid died, Babieca carried him out of the city gates and put the enemy to flight.",
    firstRecord: "The Poem of the Cid",
    summary: "El Cid's beloved warhorse. A legend tells that it carried the dead Cid out of the gates of Valencia.",
    story: `In The Poem of the Cid, after taking Valencia, El Cid welcomes his wife Jimena and their daughters by riding his warhorse Babieca before them. Babieca is a horse named together with the Cid's deeds, and this poem is the first to record its name.

Later chronicles and legends added more. When the Cid died in 1099, it is said, Jimena had his body armored and set on Babieca and sent out of the city gates, and the Moorish army, believing the Cid had returned alive, fled.

Legend also says Babieca let no one ride him after the Cid's death and was buried at the monastery of San Pedro de Cardeña near Burgos. The real El Cid was an eleventh-century Castilian knight who served Christian and Muslim kings alike.`,
    imageAlt: "Plate 11 of Francisco Goya's print series La Tauromaquia, El Cid Campeador Spearing Another Bull (1816 edition, printed 1876). A knight in a plumed helmet drives a lance down from the saddle while a bull charges the horse with lowered head.",
    annotations: [
      n("El Cid", "A knight in a plumed helmet thrusts a lance from the saddle. Goya included in his series on the history of bullfighting a tale that the medieval hero El Cid speared bulls."),
      n("Horse", "The horse twists away from the bull's horns. El Cid's horse Babieca is first named in The Poem of the Cid."),
      n("Charging bull", "A bull charges with lowered head. This is plate 11 of Francisco Goya's Tauromaquia, published in 1816; this impression was printed in 1876."),
    ],
  },
  balisarda: {
    title: "Balisarda",
    owner: "The knight Ruggiero",
    maker: "The sorceress Falerina",
    power: "Forged by magic, it could cut even enchanted armor and charmed things.",
    firstRecord: "Boiardo, Orlando Innamorato",
    summary: "A sword the sorceress Falerina forged to kill Orlando. It could cut even what was enchanted.",
    story: `In Boiardo's Orlando Innamorato, the sorceress Falerina forged a sword in her enchanted garden to kill the knight Orlando. Made by magic, it could cut through enchanted armor and charmed things. Its name was Balisarda.

Orlando broke the spells of the garden and won the sword, but it passed through several hands and became the sword of Ruggiero, a young knight on the Moorish side. In Ariosto's Orlando Furioso, Ruggiero fights battle after battle with it.

Ruggiero was portrayed as the ancestor of the Este family whom Ariosto served. The poet made the love of Ruggiero and the warrior maiden Bradamante a main thread of his story, singing the glory of the Este who ruled Ferrara.`,
    imageAlt: "A rapier made in Milan, Italy, about 1625–50. Below a wire-wrapped grip, curving iron bars and a pierced cup-shaped guard enclose the hand, and a long, slender blade extends below.",
    annotations: [
      n("Pommel and grip", "Below the round pommel, wire is wound around the grip so the hand will not slip."),
      n("Guard around the hand", "Curving bars and a pierced cup-shaped guard enclose the hand. This rapier was made in Milan about 1625–50."),
      n("Long, slender blade", "A long, slender blade suited to thrusting. Balisarda, forged by the sorceress Falerina, could cut even enchanted armor."),
    ],
  },
  "ring-of-angelica": {
    title: "Ring of Angelica",
    owner: "Angelica, princess of Cathay",
    maker: "Unknown",
    power: "Worn on the finger it made every enchantment fail; held in the mouth it made the wearer invisible.",
    firstRecord: "Boiardo, Orlando Innamorato",
    summary: "The ring of Angelica, princess of Cathay. Worn, it broke enchantments; held in the mouth, it made her invisible.",
    story: `Boiardo's tale begins when Angelica, princess of Cathay (China), appears at Charlemagne's court. Orlando, Rinaldo and the other knights all lose their hearts to her, and Angelica often flees from the knights who pursue her. Her protection is a magic ring.

On her finger, the ring made every enchantment fail; held in her mouth, it made her invisible. In Ariosto's Orlando Furioso the ring passes through the hands of the thief Brunello and the sorceress Melissa and is used to free Ruggiero from the castle of the wizard Atlante and the island of the sorceress Alcina.

In the end Angelica fell in love not with any famous knight but with Medoro, a wounded Moorish soldier she nursed, married him and left for home. At this news Orlando went mad, and that is the meaning of the title Orlando Furioso.`,
    imageAlt: "An engraving made about 1570 by the Italian brothers Giorgio and Teodoro Ghisi, Angelica and Medoro. Beneath dense trees the naked Angelica and Medoro embrace and carve their names on a tree trunk. A river and town appear at right.",
    annotations: [
      n("Names carved on the tree", "The names Angelica and Medoro are carved on the trunk. In Orlando Furioso the two carved each other's names on every tree and stone."),
      n("Angelica and Medoro", "Angelica and Medoro embrace. Angelica owned a ring that broke enchantments when worn and made her invisible when held in the mouth."),
      n("Distant landscape", "A river and a town spread out at right. This engraving was made about 1570 by the Italian brothers Giorgio and Teodoro Ghisi."),
    ],
  },
  "horn-of-astolfo": {
    title: "Horn of Astolfo",
    owner: "The English knight Astolfo",
    maker: "Unknown (given by the good fairy Logistilla)",
    power: "One blast made every man and beast that heard it flee in terror.",
    firstRecord: "Ariosto, Orlando Furioso",
    summary: "The horn the good fairy Logistilla gave Astolfo. Everything that heard it fled in fear.",
    story: `In Ariosto's Orlando Furioso, the English knight Astolfo is bewitched by the sorceress Alcina and turned into a myrtle tree before he is set free. Alcina's sister, the good fairy Logistilla, sends him home with two gifts: a book telling how to break enchantments, and a horn.

When the horn was blown, every man and beast that heard it was seized with terror and fled. With it Astolfo defeated the man-eating giant Caligorante, and he drove the Harpies that fouled the Ethiopian king's table all the way to the mouth of Hell.

Later Astolfo rode the hippogriff to the Earthly Paradise, then went up to the Moon in Elijah's chariot of fire and brought back the lost wits of the mad Orlando in a flask.`,
    imageAlt: "An ivory horn carved in southern Italy or Sicily in the twelfth century, the so-called Horn of Saint Blaise. Bands of animals and scrolls encircle the wide mouth and the narrow tip, and the middle is left smooth.",
    annotations: [
      n("Band at the mouth", "A band of animals and scrolls encircles the wide mouth. This ivory horn was carved in southern Italy or Sicily in the twelfth century."),
      n("Smooth body", "The middle is left plain to show the grain of the ivory. The horn the good fairy Logistilla gave Astolfo made men and beasts flee at its sound alone."),
      n("Band at the tip", "Another decorated band encircles the narrowing tip. The horn has come down under the name Horn of Saint Blaise."),
    ],
  },
  "lancelots-ring": {
    title: "Lancelot's Ring",
    owner: "Lancelot",
    maker: "The Lady of the Lake",
    power: "Looking into its stone showed whether an enchantment before him was false.",
    firstRecord: "Chrétien de Troyes, Lancelot, the Knight of the Cart",
    summary: "The ring the Lady of the Lake, who raised Lancelot, gave him. Looking into it dispelled enchantments.",
    story: `In Chrétien de Troyes' Lancelot, the Knight of the Cart, Lancelot sets out for the land of Gorre to rescue the abducted Queen Guinevere. On his finger is a ring given him by the Lady of the Lake, who raised him as a child. When he looked into its stone, anything enchanted showed its true nature.

The way into Gorre lay across a bridge made of a sword blade. Before Lancelot crossed it, gripping the blade with bare hands and feet, two lions seemed to wait at the far end. Once over, he looked into his ring, and the lions were nowhere to be seen.

In this story, where Lancelot even climbs into a prisoner's cart, a disgrace for a knight, to save the queen, the love of Guinevere and Lancelot is told in full for the first time. Chrétien said that Countess Marie of Champagne gave him the matter and meaning of the tale.`,
    imageAlt: "A side panel of an ivory casket made in France about 1330. Twisted columns divide it into scenes from knightly romances: at center left a knight fights a lion, at right Lancelot crosses a sword bridge over the waves, and at far right people watch from the battlements.",
    annotations: [
      n("Lancelot crossing the sword bridge", "Lancelot crosses a great blade laid over the waves. When he reached the other side and looked at the ring the Lady of the Lake had given him, the lions on the far bank vanished."),
      n("Gawain fighting the lion", "A knight with a sword faces a lion: Sir Gawain in the adventure of the Perilous Bed at the Castle of Marvels."),
      n("Watchers in the castle", "People watch the adventures from the battlements. This is a side panel of an ivory casket carved with knightly tales in France about 1330."),
    ],
  },
  "merlins-mirror": {
    title: "Merlin's Mirror",
    owner: "King Ryence of Deheubarth and his daughter Britomart",
    maker: "The wizard Merlin",
    power: "It showed in perfect sight whatever thing the world contained.",
    firstRecord: "Spenser, The Faerie Queene",
    summary: "A round mirror Merlin made for a king of Britain. It showed whatever one wished to see.",
    story: `In Book III of Edmund Spenser's The Faerie Queene, the wizard Merlin made a mirror as round as a glass globe for Ryence, king of Deheubarth (today South Wales). It showed whatever the world contained, so the king could know in advance what his enemies plotted.

The king's daughter Britomart looked into the mirror and saw a knight's image and fell in love. He was Artegall, the knight of Justice. With her old nurse Britomart sought out Merlin's cave to learn who the knight was, then put on armor and set out to find him.

Merlin prophesied that a line of British kings would descend from Britomart and Artegall. Britomart, the maiden knight of Chastity, is a figure who recalls Elizabeth I, to whom Spenser dedicated the poem.`,
    imageAlt: "A round bronze magic mirror made in Japan in the nineteenth century. The six characters of Namu Amida Butsu are raised down the center of the back. When light is reflected from the polished face, an image of the Buddha Amida appears in the reflection.",
    annotations: [
      n("Namu Amida Butsu", "The phrase Namu Amida Butsu is raised vertically down the center: the prayer of devotion to the Buddha Amida."),
      n("Mirror with a hidden image", "This is a magic mirror: when sunlight is reflected from its polished face, a hidden image of Amida appears in the reflected light. It was made in nineteenth-century Japan."),
      n("Round bronze mirror", "The whole round bronze mirror. In Spenser's poem, the mirror Merlin made was round as a glass globe and showed whatever the world contained."),
    ],
  },
  "balm-of-fierabras": {
    title: "Balm of Fierabras",
    owner: "The Saracen prince Fierabras",
    maker: "Unknown (said to be the balm used to embalm Christ's body)",
    power: "Drunk or applied, it healed any wound at once.",
    firstRecord: "Fierabras (chanson de geste)",
    summary: "The balm said to have embalmed the body of Christ. The Saracen prince Fierabras seized it in Rome.",
    story: `The hero of the twelfth-century French chanson de geste Fierabras is the giant Saracen prince Fierabras. Sacking Rome, he carried off the balm said to have been used to embalm the body of Jesus. Whoever drank it or put it on a wound was healed at once.

When Charlemagne's knight Oliver fought Fierabras in single combat, Fierabras healed his wounds with the balm as they fought. Only after Oliver seized the balm and threw it into the river could he win. Fierabras became a Christian and one of Charlemagne's knights.

The balm won fame again in Cervantes' Don Quixote. Don Quixote brewed his own 'balm of Fierabras' from oil, wine, salt and rosemary, drank it and was violently ill, and Sancho, who drank it too, fared even worse.`,
    imageAlt: "The front of a pilgrim's flask for holy oil, cast in tin and lead in Palestine about 600, in the early Byzantine period. Below a narrow neck, the flat round body bears the Crucifixion, with a Greek inscription around the edge.",
    annotations: [
      n("Narrow neck", "The narrow neck for holding and pouring oil. Pilgrims to the Holy Land about 600 carried oil from the holy places home in flasks of tin and lead like this."),
      n("The Crucifixion", "The Crucifixion fills the center of the body, and the Ascension is on the back. The balm Fierabras seized in Rome was said to have embalmed the body of Christ."),
      n("Inscription at the edge", "A Greek inscription runs around the edge. Such pilgrim flasks often bore words declaring that the oil came from the holy places of Christ."),
    ],
  },
  "shield-of-galahad": {
    title: "Shield of Galahad",
    owner: "Galahad",
    maker: "Josephus, son of Joseph of Arimathea (who drew the cross in his own blood)",
    power: "Anyone but Galahad who bore it came to harm.",
    firstRecord: "The Quest of the Holy Grail (Vulgate Cycle)",
    summary: "A white shield with a red cross. Only Galahad, who would find the Grail, could bear it safely.",
    story: `In The Quest of the Holy Grail, Galahad comes to a white abbey and hears of a shield no one may take away. King Bademagu, who took the white shield with its red cross before him, came back gravely wounded by a knight in white armor.

The White Knight told the shield's history. When Joseph of Arimathea came west bearing the vessel that held Christ's blood, Joseph's son Josephus drew a cross on the shield in his own blood for Evalach, king of Sarras. Josephus said that only the last knight of his lineage could bear it.

Galahad bore the shield through many adventures and at last, in Sarras, beheld the mysteries of the Grail and died. The Quest of the Holy Grail is one volume of the cycle of Arthurian prose romances written in France in the early thirteenth century.`,
    imageAlt: "A tall wooden shield made in Erfurt, Germany, in the early fourteenth century. A large wheel in silver foil is painted on the upper part of the red, leather-covered ground, and the paint has flaked in places with age.",
    annotations: [
      n("Silver wheel", "A large wheel is painted in silver foil on the red ground. The archbishops of Mainz, who ruled Erfurt, also bore a white wheel on red."),
      n("Standing shield", "A tall shield long enough to cover the body, of wood covered with leather and painted over gesso. Galahad's shield was white with a red cross."),
      n("Rivets", "The round rivets in the middle probably once held the grip and straps on the inside."),
    ],
  },
  balmung: {
    title: "Balmung",
    owner: "Siegfried, later Hagen and Kriemhild",
    maker: "Unknown (part of the Nibelung treasure)",
    power: "The Nibelung kings gave it as payment for dividing their treasure, and with it Siegfried cut down those kings and their giants.",
    firstRecord: "The Nibelungenlied",
    summary: "The sword Siegfried won with the Nibelung treasure. After his death it passed to his enemy Hagen.",
    story: `In the medieval German epic The Nibelungenlied, the young hero Siegfried is asked by Schilbung and Nibelung, two kings of the Nibelungs, to divide their treasure. As payment they give him the sword Balmung, but unhappy with their shares they turn on him. With Balmung Siegfried cuts down both kings and their men and takes the whole treasure.

He also took from the dwarf Alberich a cloak that made the wearer invisible. With Balmung, the treasure and a body hardened by bathing in dragon's blood, Siegfried became a hero no one could defeat. Only the spot between his shoulders, where a linden leaf had stuck as he bathed, could be wounded.

Siegfried was killed on a hunt by the spear of Hagen, who had learned his weakness. Hagen took Balmung too, but at the end of the poem Siegfried's wife Kriemhild seized the sword and struck off Hagen's head.`,
    imageAlt: "A sword probably made in Germany in the fifteenth century. Below a round pommel, a wood and leather grip and a straight crossguard, a long straight blade extends.",
    annotations: [
      n("Round pommel", "The round pommel at the end of the hilt. This sword was probably made in Germany in the fifteenth century."),
      n("Crossguard and grip", "Above the straight crossguard is a wooden grip wrapped in leather. In the Nibelungenlied, Siegfried felled the kings of the Nibelungs with Balmung."),
      n("Long blade", "A long, straight blade. After Siegfried's death his wife Kriemhild beheaded his enemy Hagen with this sword."),
    ],
  },
  svalinn: {
    title: "Svalinn",
    owner: "The sun (the goddess Sól)",
    maker: "Unknown",
    power: "It stands before the sun so that its fire does not burn the earth and sea.",
    firstRecord: "Poetic Edda, Grímnismál",
    summary: "The shield set before the sun. If it fell, mountains and sea would burn up.",
    story: `In Grímnismál in the Poetic Edda, Odin, disguised as Grímnir, sits bound between two fires and reveals the secrets of the world. One stanza sings of a shield called Svalinn, which stands before the shining goddess, the sun.

The poem says that if the shield fell from its place, mountains and sea would burn up. Its name is read as 'the cooling one': the shield screens the earth from the burning light of the sun as it crosses the sky.

According to Snorri Sturluson's Prose Edda, the sun is a chariot driven by the goddess Sól, and the wolf Sköll runs behind it. When the last days of Ragnarök come, the wolf will swallow the sun.`,
    imageAlt: "A round steel shield made in northern Italy about 1550–1600. Etched panels radiate like sunbeams from a pointed central boss, and rivets are set close together along the rope-like border.",
    annotations: [
      n("Central boss", "A pointed boss rises at the center. Like Svalinn, the shield that stands before the sun, a round shield resembles the sun."),
      n("Panels like sunbeams", "Etched panels radiate from the center like sunbeams. This steel shield was made in northern Italy about 1550–1600."),
      n("Rivets at the rim", "Rivets along the edge held the lining and grip inside."),
    ],
  },
  "freyrs-sword": {
    title: "Freyr's Sword",
    owner: "Freyr, god of plenty, later his servant Skírnir",
    maker: "Unknown",
    power: "When a wise man held it, it fought the giants by itself.",
    firstRecord: "Poetic Edda, Skírnismál",
    summary: "Freyr's sword that fought by itself. He gave it to his servant to win the giant's daughter Gerd.",
    story: `In Skírnismál in the Poetic Edda, Freyr, god of plenty, secretly sits on Odin's high seat Hlidskjalf, sees the beautiful Gerd in the land of the giants and falls in love. He asks his servant Skírnir to win her heart for him, and Skírnir asks for Freyr's sword as his price.

When a wise man held that sword, it fought the giants by itself. Skírnir took it, crossed the flames into the land of the giants and persuaded Gerd, who agreed to meet Freyr in the grove of Barri after nine nights.

Snorri's Prose Edda tells the cost of the bargain. Without his sword Freyr had to kill the giant Beli with a stag's antler, and at Ragnarök, facing the fire giant Surtr without his sword, he falls.`,
    imageAlt: "A fifteenth-century European steel sword. Below a round pommel is a crossguard with down-curved ends, and a long, straight blade tapers toward the point.",
    annotations: [
      n("Round pommel", "The round pommel at the end of the hilt draws the sword's weight toward the hand."),
      n("Down-curved crossguard", "The ends of the crossguard curve down to catch an opponent's blade. This fifteenth-century European sword descends from the straight, double-edged Viking sword of the ninth century."),
      n("Straight double-edged blade", "A straight double-edged blade for both cutting and thrusting. Freyr's sword fought the giants by itself when a wise man held it."),
    ],
  },
  "sifs-golden-hair": {
    title: "Sif's Golden Hair",
    owner: "Sif, wife of Thor",
    maker: "The sons of Ivaldi (dwarves)",
    power: "Set on her head, it took root and grew like real hair.",
    firstRecord: "Snorri Sturluson, Prose Edda",
    summary: "Hair the dwarves spun from gold to replace the hair Loki cut from Sif. It grew like real hair.",
    story: `According to Snorri Sturluson's Prose Edda, the trickster god Loki once cut off all the hair of Sif, Thor's wife. When the furious Thor threatened to break every bone in his body, Loki swore to go to the dwarves and have new hair made of gold.

The dwarves called the sons of Ivaldi spun hair from gold. Set on Sif's head, it took root and grew like real hair. At the same time the dwarves made Freyr's ship Skidbladnir and Odin's spear Gungnir.

Not stopping there, Loki bet the dwarf brothers Brokk and Eitri that they could not make better treasures. From that wager came Draupnir, Gullinbursti and Mjölnir. Some read Sif's golden hair as the ripe fields of grain.`,
    imageAlt: "A pair of gold earrings or hair ornaments from ancient Greece. Hollow gold tubes are coiled into spirals with a palmette at the center, and each end finishes in a ram's head.",
    annotations: [
      n("Ram's heads", "Each end of the coil finishes in a ram's head above an elaborate collar."),
      n("Palmette", "A double palmette is set at the center of the coil. The hollow gold tube was coiled without a visible seam."),
      n("Golden spiral", "The coiled gold tube looks like a lock of hair. The golden hair the dwarves made for Sif grew from her head like real hair."),
    ],
  },
  "freyjas-falcon-cloak": {
    title: "Freyja's Falcon Cloak",
    owner: "Freyja, goddess of love",
    maker: "Unknown",
    power: "Whoever put it on became a falcon and could fly.",
    firstRecord: "Poetic Edda, Þrymskviða",
    summary: "Freyja's feather cloak that turned its wearer into a falcon. Loki borrowed it to fly to the land of the giants.",
    story: `In Þrymskviða in the Poetic Edda, Thor wakes one morning to find his hammer Mjölnir gone. Loki borrows Freyja's falcon cloak, flies as a falcon to the land of the giants, and learns that the giant Thrym has buried the hammer deep in the earth. Thrym will return it only if he is given Freyja as his wife.

Freyja flew into a rage, and in the end Thor dressed as the bride, with Loki as his maid, and won back the hammer. In Snorri's Prose Edda too, Loki borrows this cloak to rescue the goddess Idun, carried off by the giant Thiazi.

Freyja is the goddess of love and magic, and she receives half of those who die in battle into her own hall. She rode in a chariot drawn by two cats.`,
    imageAlt: "White Falcon, a sixteenth-century Korean hanging scroll on silk from the Joseon dynasty. Beneath a flowering tree a white falcon perches on a rock with wings spread and head bowed, painted feather by feather, while the trees and grasses are drawn with free, calligraphic lines.",
    annotations: [
      n("White falcon", "A white falcon painted feather by feather. Whoever put on Freyja's cloak became a falcon and could fly."),
      n("Head and beak", "The falcon's bowed head and hooked beak. White gyrfalcons were also prized hunting birds sent from Iceland and Norway as gifts to the kings of Europe."),
      n("Flowering branches", "The flowering branches and grasses above are drawn with free, calligraphic lines, contrasting with the finely painted falcon. This is a sixteenth-century Korean painting."),
    ],
  },
  "beowulfs-mail": {
    title: "Beowulf's Byrnie",
    owner: "Beowulf, hero of the Geats",
    maker: "Wayland, the legendary smith",
    power: "It held even when Grendel's mother drove her blade down on him.",
    firstRecord: "Beowulf",
    summary: "The mail shirt Beowulf wore. Made by the legendary smith Wayland, it stopped even the blade of Grendel's mother.",
    story: `In the Old English epic Beowulf, Beowulf, hero of the Geats, crosses the sea to help the Danish king Hrothgar, tormented by the monster Grendel. The poem calls his armor 'the work of Weland,' meaning that the legendary smith Wayland made it.

After killing Grendel with his bare hands, Beowulf pursued Grendel's mother, who had come to avenge her son, into a cave beneath a lake. She pinned him down and drove her knife at him, but the close-linked mail turned the point. Beowulf killed her with a giant's sword that hung in the cave.

Beowulf survives in a single manuscript of about 1000. In 1731 a fire in the library that held it scorched its edges, but the poem survived.`,
    imageAlt: "A mail shirt probably made in Germany about 1400–1450. Steel and brass rings are linked one by one into a short-sleeved shirt fastened at the front with straps. In the photograph a helmet is placed above it.",
    annotations: [
      n("Linked rings", "Small iron rings are linked and riveted one by one. Until about 1350 European knights mostly wore mail like this."),
      n("Front fastenings", "The front closes with straps and buckles, which were added later."),
      n("Helmet", "A helmet shown with the mail shirt. Beowulf's mail held even when Grendel's mother drove her blade down on him."),
    ],
  },
  mimung: {
    title: "Mimung",
    owner: "The smith Velent, later his son Witege",
    maker: "The smith Velent (Wayland)",
    power: "So sharp it split even a tuft of wool drifting on the water.",
    firstRecord: "Þiðreks saga",
    summary: "The sword the smith Velent forged for a contest on which his life depended. It split a tuft of wool floating on the water.",
    story: `In Þiðreks saga, compiled in thirteenth-century Norway from German legends, appears the smith Velent (Wayland). He competes with the king's smith Amilias, and the loser is to forfeit his life. The sword Velent forges is Mimung.

To test the sword, Velent floated a tuft of wool down the river, and the wool split where it touched the blade. On the day of the contest Amilias sat wearing the armor and helmet he had made, and when Velent struck with Mimung, the blade cut through armor and man alike.

Mimung later passed to Velent's son Witege and was used in many battles in the tales of Dietrich of Bern.`,
    imageAlt: "A hand-and-a-half sword made in Germany about 1540–80. Below a conical pommel is a long sharkskin grip, with straight quillons extending to either side and rings enclosing the hand, and the double-edged blade continues below.",
    annotations: [
      n("Conical pommel", "The pommel is shaped like a cone. This hand-and-a-half sword was made in Germany about 1540–80."),
      n("Sharkskin grip", "A long grip of sharkskin over a wooden core, long enough to hold with both hands when needed, hence the name hand-and-a-half sword."),
      n("Quillons and rings", "Long straight quillons and rings enclose the hand. Mimung, forged by the smith Velent, split even a tuft of wool floating on the water."),
    ],
  },
  "nibelung-hoard": {
    title: "Nibelung Hoard",
    owner: "The kings of the Nibelungs, Siegfried, Kriemhild",
    maker: "Unknown",
    power: "So much gold and jewels that twelve wagons could not carry it in one trip; it brought strife and death to everyone who held it.",
    firstRecord: "The Nibelungenlied",
    summary: "The treasure Siegfried won from the Nibelungs. Hagen sank it in the Rhine, and no one ever found it.",
    story: `In The Nibelungenlied the Nibelung hoard was so vast that twelve wagons hauling for four days and nights could not carry it all. Siegfried won it by defeating the kings of the Nibelungs, and when he married Kriemhild it became her portion.

After Siegfried's death Kriemhild brought the treasure to Worms and gathered followers by giving it away. Fearing this, Hagen seized the treasure and sank it in the Rhine. Only Hagen and the kings he served knew where.

Later Kriemhild married Etzel, king of the Huns, and took her revenge by inviting the Burgundians to his court. The captured Hagen refused to tell where the treasure lay while his king lived, and its resting place was buried with him forever. Richard Wagner drew on this tradition for The Ring of the Nibelung.`,
    imageAlt: "Finale of the Rhinegold, a lithograph by the French artist Henri Fantin-Latour, 1877. Above, the gods rise through clouds; at lower left the Rhine maidens reach up from the waves. A bar of music and the title are written at the bottom.",
    annotations: [
      n("Rhine maidens", "At lower left, in the waves, the Rhine maidens lament and beg for their stolen gold. This is the final scene of Wagner's Das Rheingold."),
      n("Gods going to Valhalla", "Above, the gods ascend to their new fortress Valhalla. Wagner wove the tradition of the Nibelung hoard together with Norse myth in The Ring of the Nibelung."),
      n("Music and title", "A bar of music and the words Rheingold (R. Wagner) appear below. This lithograph was made by the French artist Henri Fantin-Latour in 1877."),
    ],
  },
  grani: {
    title: "Grani",
    owner: "Sigurd",
    maker: "Of the line of Sleipnir, Odin's horse",
    power: "He carried the dragon's gold and leaped the wall of fire with Sigurd on his back.",
    firstRecord: "Snorri Sturluson, Prose Edda",
    summary: "The horse Sigurd chose with Odin's help. He carried the dragon Fafnir's gold and leaped the wall of fire.",
    story: `In the Völsunga saga, young Sigurd goes to choose a horse and meets an old man with a long beard. The old man drives the horses into a river and tells him to choose the one that swims across. That horse was Grani, and the old man told Sigurd that Grani was of the line of Sleipnir, Odin's horse. The old man was Odin himself.

After killing the dragon Fafnir, Sigurd loaded its treasure on Grani's back. Later, in place of his brother-in-law Gunnar, Sigurd rode Grani through the wall of fire surrounding Brynhild's dwelling. Gunnar's horse shied at the flames, and Grani would not carry Gunnar.

When Sigurd died, the Poetic Edda says, Grani hung his head. Snorri's Prose Edda also records the poets' habit of calling gold 'Grani's burden.' Medieval carvings of Sigurd and Grani survive across Scandinavia, such as the portal of Hylestad church in Norway.`,
    imageAlt: "A bronze horse made in Germany in the 1630s or later. It stands squarely on four legs with its head slightly lowered, its mane and muscles smoothly finished.",
    annotations: [
      n("Horse's head", "The horse's head and mane, slightly lowered. This bronze horse was made in Germany in the 1630s or later."),
      n("Powerful body", "A deep chest and muscular body. It was once published as a model for an equestrian monument of Emperor Maximilian, but recent scholars question the connection."),
      n("Legs and hooves", "Four straight legs and hooves. Sigurd's horse Grani leaped the wall of fire to carry his master to Brynhild."),
    ],
  },
  eldhrimnir: {
    title: "Eldhrímnir",
    owner: "Andhrímnir, the cook of Valhalla",
    maker: "Unknown",
    power: "A boar was boiled in it every day to feed the warriors of Valhalla, and each evening the boar was alive again.",
    firstRecord: "Poetic Edda, Grímnismál",
    summary: "The cauldron of Odin's hall Valhalla. A boar was boiled in it every day for the warriors, and it came back to life.",
    story: `Grímnismál in the Poetic Edda sings of the kitchen of Odin's hall Valhalla. The cook Andhrímnir boils the boar Sæhrímnir in the cauldron Eldhrímnir, and few know that it is the best of meats.

Snorri Sturluson's Prose Edda adds an explanation. Valhalla holds countless warriors who died in battle, yet one boar feeds them all, for though it is boiled and eaten every day, each evening it is whole again.

By day the warriors fight one another, and in the evening they eat and drink together as they await Ragnarök. Odin, it is said, gives the meat before him to his wolves Geri and Freki and drinks only wine.`,
    imageAlt: "An Etruscan bronze cauldron of about 550 BCE. The round, deep body is covered with green patina, and an arched iron handle hangs from rings on either side.",
    annotations: [
      n("Iron handle", "An arched iron handle hung from rings so that it swings. This Etruscan bronze cauldron dates from about 550 BCE."),
      n("Bronze body", "A round cauldron of hammered bronze, covered with green patina over the centuries."),
      n("Handle ring", "A ring for the handle is fixed to the rim. In Valhalla's cauldron Eldhrímnir a boar was boiled every day, and every evening it was whole again."),
    ],
  },
  "horn-of-bran-galed": {
    title: "Horn of Brân Galed",
    owner: "Brân Galed of the North",
    maker: "Unknown",
    power: "Whatever drink one wished for was found in it.",
    firstRecord: "The Thirteen Treasures of the Island of Britain",
    summary: "One of the Thirteen Treasures of the Island of Britain. Whatever drink one wished for filled it.",
    story: `The Thirteen Treasures of the Island of Britain, preserved in fifteenth-century Welsh manuscripts, lists thirteen marvelous objects once owned by the heroes of old Britain. One of them is the horn of Brân Galed from the North: whatever drink one wished for was found in it.

'Galed' in Welsh means 'hard,' that is, stingy. The charm of the tale lies in a miser's horn that pours out drink without end.

Most of the Thirteen Treasures are said to have belonged to kings and heroes of northern Britain around the sixth century, the land the Welsh called the Old North. Later tradition says the wizard Merlin gathered all the treasures and took them to the House of Glass on Bardsey Island.`,
    imageAlt: "A glass drinking horn of about 575–625, probably Lombard. Reddish-brown feather patterns are worked into the clear glass and fine white threads are wound around it in a spiral; part of the wide rim is broken.",
    annotations: [
      n("Wide mouth", "The flaring mouth, partly broken at the rim. This glass drinking horn of about 575–625 is probably Lombard."),
      n("Reddish-brown feathering", "Reddish-brown trails of glass are combed into feather-like patterns within the clear glass."),
      n("Wound white threads", "Fine white glass threads are wound in a spiral. A horn could not be set down, so it had to be drained at once. The horn of Brân Galed held whatever drink one wished."),
    ],
  },
  "halter-of-clydno-eiddyn": {
    title: "Halter of Clydno Eiddyn",
    owner: "Clydno of Eiddyn (Edinburgh)",
    maker: "Unknown",
    power: "Fastened to a staple at the foot of his bed, it held whatever horse he wished for.",
    firstRecord: "The Thirteen Treasures of the Island of Britain",
    summary: "One of the Thirteen Treasures of the Island of Britain. Whatever horse one wished for would be found in this halter.",
    story: `The halter of Clydno Eiddyn, one of the Thirteen Treasures of the Island of Britain, was fastened to a staple at the foot of his bed. Whatever horse he wished for, that horse would be found in the halter.

Eiddyn refers to the region of present-day Edinburgh in Scotland. Clydno was a king of old Britain who ruled that land, and his name survives in the genealogies of the men of the Old North.

Horses were the most precious property of the old British warriors. The Welsh poem Y Gododdin, which mourns the warriors of Eiddyn who rode to the battle of Catraeth and nearly all fell, praises again and again the courage of horses and riders.`,
    imageAlt: "A horse bit made in Italy about 1580–1600. Curved iron bars, chains and rings for the reins form the bit, and gilt bronze bosses are set on each side.",
    annotations: [
      n("Gilt bronze bosses", "Gilt bronze bosses are fixed on either side of the bit. This Italian bit dates from about 1580–1600."),
      n("Curb chain", "The iron chain that passes under the horse's jaw. When the reins are pulled, it presses the jaw and halts even a powerful warhorse."),
      n("Rein ring", "The reins are tied to the ring at the bottom. The halter of Clydno Eiddyn held whatever horse one wished."),
    ],
  },
  "hamper-of-gwyddno": {
    title: "Hamper of Gwyddno Garanhir",
    owner: "Gwyddno Garanhir",
    maker: "Unknown",
    power: "Put in food for one person, and food for a hundred came out.",
    firstRecord: "The Thirteen Treasures of the Island of Britain",
    summary: "One of the Thirteen Treasures of the Island of Britain. Put in food for one, and food for a hundred came out.",
    story: `The hamper of Gwyddno Garanhir, one of the Thirteen Treasures of the Island of Britain, was a basket into which one put food for one person and from which, when opened, came food for a hundred.

'Garanhir' is a nickname meaning 'long-shank.' In Welsh legend Gwyddno ruled Cantre'r Gwaelod, a land now under the sea. The tale goes that its keeper of the dikes, drunk, failed to close the sluices, and the sea rushed in and drowned the kingdom.

His son Elffin drew a baby in a leather bag out of Gwyddno's salmon weir, and that baby grew up to be the poet Taliesin.`,
    imageAlt: "A silver fruit basket made in London, England, in 1729. The oval body is pierced with a lattice like woven wicker, with two twisted silver handles and a leaf-pattern rim.",
    annotations: [
      n("Twisted handle", "Handles of twisted silver are fixed on both sides."),
      n("Pierced like wickerwork", "The silver sheet is pierced to look like woven basketry. This silver fruit basket was made in London in 1729."),
      n("Rim decoration", "A border of leaves runs round the rim. Put food for one into the hamper of Gwyddno Garanhir and you took out food for a hundred."),
    ],
  },
  "whetstone-of-tudwal": {
    title: "Whetstone of Tudwal Tudglyd",
    owner: "Tudwal Tudglyd",
    maker: "Unknown",
    power: "If a brave man sharpened his sword on it, anyone it drew blood from would die; if a coward did, the sword would not cut at all.",
    firstRecord: "The Thirteen Treasures of the Island of Britain",
    summary: "One of the Thirteen Treasures of the Island of Britain. Sharpened by a brave man, a sword became deadly; by a coward, it went dull.",
    story: `The whetstone of Tudwal Tudglyd, one of the Thirteen Treasures of the Island of Britain, knew the heart of whoever sharpened a sword on it. If a brave man whetted his sword on it, anyone the sword drew blood from would surely die. If a coward whetted it, the sword would cut nothing.

Many of the Thirteen Treasures test the worth of their owners in this way, such as the cauldron of the giant Dyrnwch, which would not boil meat for a coward, and the coat of Padarn, which fitted only the well-born.

A whetstone never left a warrior's side, together with his sword. In the seventh-century royal burial at Sutton Hoo in England, a great whetstone carved with human faces at both ends was found like a royal scepter, showing that the whetstone could also be a symbol of authority.`,
    imageAlt: "A whetstone handle cast in bronze in Luristan, Iran, about 1100–900 BCE. An ibex stretches its long neck, its horns curving into a loop above its head, and the whetstone fitted into the socket below.",
    annotations: [
      n("Looping horns", "The ibex's horns curve round like a ring and meet above its head."),
      n("Ibex head", "An ibex head with large eyes and a beard. This whetstone handle was cast in bronze in Luristan, Iran, about 1100–900 BCE."),
      n("Socket for the stone", "The whetstone fitted into the socket below. Whetstones were especially important in Luristan, a center of bronze blades. Tudwal's whetstone made a brave man's sword deadly."),
    ],
  },
  "coat-of-padarn": {
    title: "Coat of Padarn Beisrudd",
    owner: "Padarn of the Red Coat",
    maker: "Unknown",
    power: "It fitted a man of noble blood perfectly and would not go on anyone else.",
    firstRecord: "The Thirteen Treasures of the Island of Britain",
    summary: "One of the Thirteen Treasures of the Island of Britain. It fitted the well-born perfectly and would not fit anyone else.",
    story: `The coat of Padarn Beisrudd, one of the Thirteen Treasures of the Island of Britain, judged its wearer. On a man of noble blood it fitted perfectly; on a churl it would not go on. 'Beisrudd' means 'red coat' in Welsh.

Padarn is recorded in the genealogies as a leader of northern Britain in the fourth century, under Roman rule. Some scholars think his red coat may have been a mark of Roman office.

A twelfth-century Life of the Welsh saint Padarn tells a similar story. When Arthur coveted the saint's tunic and tried to seize it, the earth opened and swallowed Arthur up to his chin, and he was released only after he begged forgiveness.`,
    imageAlt: "A mail cape, the so-called bishop's mantle, made in Germany or Switzerland about 1520–30. Riveted steel rings, some of brass, cover the shoulders and chest, with a stiff standing collar around the neck.",
    annotations: [
      n("Standing collar", "The collar around the neck is woven of denser rings to make it stiff."),
      n("Mail over the shoulders", "A mail cape covering the shoulders and chest. German mercenary foot soldiers favored these about 1500–1550, and they were called bishop's mantles."),
      n("Pointed hem", "The front hangs to a point. The coat of Padarn fitted a well-born man perfectly and would not go on anyone else."),
    ],
  },
  "chariot-of-morgan-mwynfawr": {
    title: "Chariot of Morgan Mwynfawr",
    owner: "Morgan Mwynfawr",
    maker: "Unknown",
    power: "Whoever sat in it and wished to be anywhere would be there at once.",
    firstRecord: "The Thirteen Treasures of the Island of Britain",
    summary: "One of the Thirteen Treasures of the Island of Britain. Whoever rode in it was carried at once wherever they wished.",
    story: `The chariot of Morgan Mwynfawr, one of the Thirteen Treasures of the Island of Britain, would carry whoever sat in it to wherever they wished to be, at once.

Morgan is said to have been an old king of southeastern Wales, and his epithet Mwynfawr is read as 'of great wealth.' There is also a story that the old name of southern Wales, Morgannwg (Glamorgan), comes from his name.

The wheeled chariot was the pride of the ancient Celtic warriors. The Roman Julius Caesar described in his Gallic War how British warriors drove their chariots across the battlefield and leaped down to fight.`,
    imageAlt: "A red-figure mixing bowl (calyx-krater) made in Lucania, southern Italy, about 400 BCE. In the center of the front, Medea flies up in a dragon-drawn chariot within a sunburst, with winged goddesses at the upper sides and fallen children on an altar below.",
    annotations: [
      n("Dragon chariot", "Within a sunburst the sorceress Medea soars away in a chariot drawn by two dragons. The sunburst recalls her grandfather, the sun god Helios."),
      n("Winged goddess", "Winged goddesses of vengeance watch from either side. The chariot of Morgan Mwynfawr also took whoever rode it wherever they wished in an instant."),
      n("Children on the altar", "At lower right the two children Medea killed lie on an altar. This vase was made in Lucania in southern Italy about 400 BCE and illustrates Euripides' tragedy Medea."),
    ],
  },
  "pair-dadeni": {
    title: "Cauldron of Rebirth",
    owner: "The giant king Bendigeidfran, later the Irish king Matholwch",
    maker: "Unknown (brought by a giant couple who came out of a lake in Ireland)",
    power: "Dead warriors put into it rose the next day to fight again, but they could not speak.",
    firstRecord: "The Four Branches of the Mabinogi, Branwen Daughter of Llŷr",
    summary: "A cauldron that brought dead warriors back to life. It turned the war between Britain and Ireland into a slaughter.",
    story: `In Branwen Daughter of Llŷr, one of the Four Branches of the Mabinogi, the giant king of Britain, Bendigeidfran, gives his sister Branwen in marriage to Matholwch, king of Ireland. When their half-brother Efnysien maims the Irish king's horses at the wedding feast and the two fall out, Bendigeidfran gives him the Cauldron of Rebirth as amends.

Dead warriors put into the cauldron rose the next day to fight again, but could not speak. When Britain learned that Branwen was being mistreated in Ireland and the two countries went to war, the Irish revived their dead with the cauldron.

It was Efnysien, the seed of the quarrel, who ended the fighting. He lay among the Irish dead pretending to be one of them and was thrown into the cauldron, where he stretched himself out and burst it into four pieces. His heart burst too.`,
    imageAlt: "A large bronze cauldron made by Greeks in Campania, southern Italy, in the fifth century BCE. A thick rim crowns the broad-shouldered, round-bottomed body, and green patina mottles the surface.",
    annotations: [
      n("Thick rim", "Grooves are cut around the thick rolled rim."),
      n("Round body", "A large round body of hammered bronze. This cauldron was made by Greeks in Campania in southern Italy in the fifth century BCE."),
      n("Green patina", "Green patina has mottled the surface over the centuries. Dead warriors put into the Cauldron of Rebirth rose the next day, but could not speak."),
    ],
  },
  "rhiannons-bag": {
    title: "Rhiannon's Bag",
    owner: "Rhiannon and Pwyll, prince of Dyfed",
    maker: "Unknown (given by Rhiannon)",
    power: "However much was put in, it was never full.",
    firstRecord: "The Four Branches of the Mabinogi, Pwyll Prince of Dyfed",
    summary: "A small bag Rhiannon gave Pwyll. Nothing could fill it, and it became a trap for her rival suitor.",
    story: `In Pwyll Prince of Dyfed, the first of the Four Branches of the Mabinogi, Pwyll agrees to marry the mysterious Rhiannon. But at the wedding feast a guest asks him to grant a wish, and when Pwyll carelessly promises anything, the guest asks for Rhiannon. He was Gwawl, to whom Rhiannon had been promised.

Rhiannon had Pwyll promise to hold another feast a year later and gave him a small bag. At that feast Pwyll appeared in rags and asked that the bag be filled with food, and however much was put in, it was never full.

Told that the bag would be full only when a noble landholder stepped into it with both feet and said 'Enough,' Gwawl climbed in, and Pwyll pulled the bag over him and tied it shut. Pwyll's men beat the bag in a game of 'badger in the bag,' and Gwawl gave up Rhiannon.`,
    imageAlt: "A reliquary bag of silk woven with gold thread, made in Spain, probably Almería, in the late 1100s–1300s. The long bag is densely woven with a lozenge pattern, crossed by a horizontal stripe, and its edges are frayed.",
    annotations: [
      n("Silk and gold", "Silk woven with gold thread in a lozenge pattern. The cloth, originally woven with lions, was probably made in Almería in Spain in the 1100s–1300s."),
      n("Horizontal stripe", "A striped band runs across the middle of the bag."),
      n("Frayed edges", "The edges have frayed and come unravelled. This bag was once kept inside a portable altar commissioned by Countess Gertrude of Brunswick. The bag Rhiannon gave Pwyll could never be filled."),
    ],
  },
  "mac-an-luin": {
    title: "Mac an Luin",
    owner: "Fionn mac Cumhaill, leader of the Fianna",
    maker: "The one-eyed smith Lon mac Liomtha",
    power: "With this sword Fionn defeated countless enemies and monsters.",
    firstRecord: "Duanaire Finn",
    summary: "The sword of Fionn mac Cumhaill, leader of the Fianna. Ballads say it was forged by the mysterious smith Lon.",
    story: `In the Gaelic tradition of Ireland and Scotland, Fionn mac Cumhaill is the hero who leads the warrior band of the Fianna. Duanaire Finn, compiled at Louvain in 1627, and other Gaelic ballads call his sword Mac an Luin.

One ballad tells how the warriors of the Fianna followed a strange one-eyed smith to his forge, and how that smith, Lon mac Liomtha, forged swords for them. Fionn's sword Mac an Luin is said to have been won then.

Fionn is also famous for the tale of the Salmon of Knowledge: he burned his thumb while cooking it and put the thumb in his mouth, and thereafter, by biting his thumb, he could know what was to come. In the eighteenth century he became known across Europe as Fingal in the 'Poems of Ossian' published by James Macpherson.`,
    imageAlt: "A basket-hilted sword made in Britain about 1720–40. A gilded iron basket lined with red cloth encloses the whole hand, and a straight blade continues below.",
    annotations: [
      n("Basket hilt", "A basket-shaped hilt that encloses the whole hand, of iron decorated with gold. This sword was made in Britain about 1720–40."),
      n("Oval plate", "The oval plate at the front of the hilt is also decorated. A red cloth lining protects the hand inside."),
      n("Straight blade", "A straight blade. The basket-hilted sword was famous as the sword of the Gaelic warriors of the Scottish Highlands. Mac an Luin is the sword of Fionn mac Cumhaill, hero of Gaelic tradition."),
    ],
  },
  "luin-of-celtchar": {
    title: "Lúin of Celtchar",
    owner: "Celtchar mac Uthechair, warrior of Ulster",
    maker: "Unknown",
    power: "When its lust for blood rose it blazed up of itself, and only a cauldron of dark poison could quench it.",
    firstRecord: "The Destruction of Da Derga's Hostel",
    summary: "The spear of Celtchar, warrior of Ulster. Before battle it blazed up of itself and had to be plunged into a cauldron of dark poison.",
    story: `The Irish tale The Destruction of Da Derga's Hostel, preserved in the Book of the Dun Cow, is told through raiders spying on the warriors inside the hostel where King Conaire lodges and describing them one by one. Among them is a spear carried by Dubthach of Ulster: the Lúin of Celtchar mac Uthechair.

When its lust for blood rose, the spear burst into sparks and raged of itself. So beside the warrior who held it stood a cauldron of dark poison, into which the spear had to be plunged to cool it. Otherwise, it was said, the spear would burn up its owner and the house.

The image of a burning spear kept in a cauldron resembles the spear Lugh obtains in The Fate of the Children of Tuireann, and some stories treat the two as one. Celtchar himself, it is said, later died when a single drop of venomous blood from a monstrous hound ran down his spear and struck him.`,
    imageAlt: "A parade spear probably made in Augsburg, Germany, about 1570–1600. The broad, leaf-shaped steel head is etched with ornament, with brass lugs on either side below it, and a woolen tassel hangs from the leather-strapped wooden shaft.",
    annotations: [
      n("Etched spearhead", "The broad leaf-shaped head is etched with the imperial Habsburg arms on one face and the Burgundian cross of Saint Andrew on the other."),
      n("Brass lugs", "The brass lugs projecting below the head keep the spear from going in too deep."),
      n("Tassel", "A woolen tassel hangs from the shaft. Officers of the imperial army carried parade spears like this about 1570–1600 as a sign of command. Celtchar's spear, the Lúin, blazed up by itself before battle."),
    ],
  },
};
