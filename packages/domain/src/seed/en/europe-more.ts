import type { EnArtifact } from "./types";

const n = (title: string, body: string) => ({ title, body });

/** 200점으로 늘리며 더한 기사 전설·북유럽·켈트 유물의 영어 번역 */
export const EN_EUROPE_MORE: Record<string, EnArtifact> = {
  olifant: {
    title: "Olifant",
    owner: "Roland, nephew of Charlemagne",
    maker: "Unknown",
    power: "When Roland blew it at the pass of Roncevaux, the sound reached Charlemagne's army thirty leagues away.",
    firstRecord: "The Song of Roland",
    summary: "The ivory horn Roland blew with his last breath. He blew it so hard that his temples burst.",
    story: `In 778, as Charlemagne's army returned from Spain, Roland commanded the rearguard at the pass of Roncevaux. When a vast Saracen army fell on them through the treachery of his stepfather Ganelon, his friend Oliver urged him three times to sound his horn and call back the king. Roland refused, saying it would be shameful to ask for help.

Only when nearly all the knights had fallen did Roland blow the olifant. He blew so hard that blood burst from his mouth and his temples split, and the sound carried to Charlemagne thirty leagues away. Ganelon held the king back, saying Roland was probably just hunting a hare.

Dying, Roland struck down an enemy who tried to take Durendal with the olifant, and the gold and crystal set in the horn broke away. Charlemagne later filled the horn with gold coins and laid it on the altar of Saint-Seurin in Bordeaux. "Olifant" is Old French for elephant, that is, ivory.`,
    imageAlt: "A South Italian ivory horn (oliphant) of the twelfth century. The long, curved elephant tusk is densely carved with roundels and animals, with metal bands for a strap at both ends.",
    annotations: [
      n("Narrow mouthpiece", "The narrow end where the player blows. Roland blew this horn so hard that blood burst from his mouth and his temples split."),
      n("Carved roundels", "The ivory surface is divided into round compartments carved with beasts and birds. Ivory horns carved like this in twelfth-century southern Italy are called oliphants."),
      n("Metal band", "The metal band at the end held a strap so the horn could hang from the shoulder. Dying, Roland struck an enemy with the horn, and its gold and crystal fell away."),
    ],
  },
  bayard: {
    title: "Bayard",
    owner: "The four sons of Aymon, Renaud de Montauban",
    maker: "Unknown (obtained by the enchanter Maugis)",
    power: "His back lengthens to fit his riders, so he can carry all four brothers at once and still outrun any horse.",
    firstRecord: "Renaut de Montauban (The Four Sons of Aymon)",
    summary: "The magic horse that carried the four sons of Aymon at once. Even Charlemagne could not kill him.",
    story: `Renaud de Montauban was the eldest of the four sons of Duke Aymon. During a game of chess with Charlemagne's nephew a quarrel broke out, and Renaud killed him with the chessboard; from then on the four brothers were hunted by the emperor. What protected them was Bayard, a horse found for them by their cousin, the enchanter Maugis.

Bayard's back grew longer to fit his riders, so he could carry all four brothers at once and still run faster than any horse. He understood human speech and could leap across a valley in a single bound. The "Bayard Rock" that towers beside the Meuse at Dinant in Belgium is said to have been split by his hoof as he leaped.

After a long war, Renaud gave Bayard to the emperor as the price of peace. Charlemagne had a millstone tied to Bayard's neck and threw him into the Meuse, but Bayard broke the stone with his hooves, swam ashore and fled into the Ardennes forest. They say he still runs somewhere in those woods.`,
    imageAlt: "A bronze horse made by the Florentine sculptor Giambologna around 1587–91. The dark brown horse walks with its head bowed and one foreleg and one hind leg raised, standing on an oval base.",
    annotations: [
      n("Bowed head", "The head is drawn in and bowed, with a neatly trimmed mane. Bayard was a clever horse that understood human speech."),
      n("Raised legs", "One foreleg and one hind leg are raised together in a trot. Bayard could carry the four brothers at once and still outrun any horse."),
      n("Flowing tail", "A long, flowing tail. Charlemagne threw Bayard into the river with a millstone around his neck, but he broke the stone, swam ashore and escaped into the Ardennes."),
    ],
  },
  "mambrinos-helmet": {
    title: "Helmet of Mambrino",
    owner: "Mambrino, a Moorish king; the knight Rinaldo; Don Quixote",
    maker: "Unknown",
    power: "A golden helmet that keeps its wearer from harm.",
    firstRecord: "Matteo Maria Boiardo, Orlando Innamorato",
    summary: "The golden helmet the knight Rinaldo won from a Moorish king. Don Quixote believed a barber's brass basin was this helmet.",
    story: `In Boiardo's Orlando Innamorato, the Moorish king Mambrino owns a golden helmet that keeps its wearer from harm. Charlemagne's knight Rinaldo defeats him and takes the helmet, and in Ariosto's Orlando Furioso it remains a treasure the knights covet.

What made the helmet most famous is Cervantes's Don Quixote, published in 1605. Seeing a barber riding a donkey with a brass basin on his head to keep off the rain, Don Quixote believes a knight in a golden helmet is approaching. He charges with his lance, drives off the barber and takes the basin.

Trying it on, Don Quixote declares that someone who did not know its worth must have melted down half of the helmet to sell and made the rest into something that looks like a barber's basin. However often Sancho Panza says it is a basin, he will not listen. Later, at an inn, the guests break into an uproar over whether it is a basin or a helmet.`,
    imageAlt: "An eighteenth-century European pewter barber's basin. The broad basin has a wavy rim, and one edge is scooped out in a curve to fit against a customer's neck.",
    annotations: [
      n("Neck notch", "One edge is scooped out in a curve. During a shave it fitted against the customer's neck to catch the lather. Don Quixote put a basin like this on his head and believed it was a golden helmet."),
      n("Wavy rim", "A broad rim that curves like waves. This is a pewter (tin alloy) basin used in eighteenth-century Europe."),
      n("Deep well", "The deep well that caught the lather. However often Sancho Panza said it was a basin, Don Quixote insisted someone had melted down half the helmet to make it."),
    ],
  },
  hippogriff: {
    title: "Hippogriff",
    owner: "The sorcerer Atlante; the knights Ruggiero and Astolfo",
    maker: "Born of a griffin father and a mare",
    power: "Spreads its wings and carries its rider across the sea to the ends of the earth, even to the Earthly Paradise.",
    firstRecord: "Ludovico Ariosto, Orlando Furioso",
    summary: "A flying beast born of a griffin and a mare. The knight Astolfo rode it all the way to the Earthly Paradise.",
    story: `The griffin was a beast that preyed on horses, so the Roman poet Virgil wrote "griffins shall mate with horses" to describe something impossible. In Orlando Furioso, Ariosto made that impossible beast real: the hippogriff, whose father was a griffin and whose mother was a mare.

Tamed by the sorcerer Atlante, the hippogriff carried the knight Ruggiero across the sea to the island of the witch Alcina. Ruggiero later swooped down on it to rescue Angelica, who had been offered to a sea monster.

The English knight Astolfo inherited the hippogriff and flew by way of Ethiopia to the Earthly Paradise at the top of the world. There he rode Elijah's chariot of fire up to the Moon and brought back the flask holding the wits of Orlando, who had gone mad.`,
    imageAlt: "The Griffin, an engraving by the German printmaker Martin Schongauer, about 1480–90. A winged beast stands in profile with a crested eagle's head, wings and taloned forelegs, and hind legs ending in hooves.",
    annotations: [
      n("Eagle head", "The front has a crested eagle's head, wings and talons. This is The Griffin, engraved by the German printmaker Martin Schongauer about 1480–90."),
      n("Hoofed hind legs", "The hind legs are drawn like a horse's, ending in hooves. Ariosto created the hippogriff, a beast born of a griffin father and a mare."),
      n("Monogram", "The letters M and S with a cross between them at the bottom are Schongauer's monogram. Tamed by the sorcerer Atlante, the hippogriff carried the knight Ruggiero across the sea to Alcina's island."),
    ],
  },
  "green-girdle": {
    title: "Gawain's Green Girdle",
    owner: "Sir Gawain",
    maker: "Unknown (given by Lady Bertilak)",
    power: "Whoever wears it, she said, cannot be slain by any blade on earth.",
    firstRecord: "Sir Gawain and the Green Knight",
    summary: "The green silk girdle the lady of the Green Knight's castle gave Gawain. She said it would keep him from death by any blade.",
    story: `At the height of the New Year feast in Camelot, a giant knight green from head to foot rode in with an axe and proposed a game. Anyone might strike his neck now, on condition that he receive the same blow a year and a day later. Gawain stepped forward and cut off his head, but the knight picked it up and rode away, saying he would wait at the Green Chapel.

The following year Gawain set out and stayed at a castle. For three days the lord's wife tried to seduce him, and on the last day she gave him a green silk girdle, saying that no one could kill the man who wore it. Gawain broke his promise to exchange all his day's winnings with the lord and hid the girdle.

At the Green Chapel the Green Knight twice stopped his axe, and on the third stroke only nicked Gawain's neck. He was the lord, Bertilak, and the small wound was the penalty for hiding the girdle. Ashamed, Gawain vowed to wear the girdle all his life, and Arthur's court resolved that everyone would wear a green band in his honor.`,
    imageAlt: "A lady's belt probably made in Siena, Italy, around 1375–1400. Silver plaques covered with translucent enamel are set along a narrow band of woven silver thread, with a gilt-silver buckle at the top.",
    annotations: [
      n("Buckle", "The gilt-silver buckle and strap end that fastened the belt. In late fourteenth-century Italy, ladies wore belts like this over their gowns."),
      n("Enamel plaques", "Small silver plaques are set along the band of silver thread. Their engraved designs show through a coat of translucent enamel."),
      n("Hanging end", "The end of the belt hung down after it was fastened at the waist. The lady untied her own girdle and gave it to Gawain, saying no one could kill its wearer."),
    ],
  },
  "love-potion": {
    title: "Love Potion of Tristan and Iseult",
    owner: "Tristan and Iseult",
    maker: "The queen of Ireland, Iseult's mother",
    power: "The two who drink it together fall into a love they can never escape.",
    firstRecord: "Twelfth-century French Tristan romances (Thomas and Beroul)",
    summary: "The love potion the queen of Ireland brewed for her daughter's wedding. Drinking it by mistake on board ship, Tristan and Iseult fell into an inescapable love.",
    story: `King Mark of Cornwall sent his nephew Tristan to Ireland to bring back the princess Iseult as his bride. The queen of Ireland, skilled in herbs, brewed a love potion for her daughter and her husband to drink together on their wedding night, so that they would live in love, and entrusted it to the maid Brangaine.

The voyage to Cornwall was hot. When Tristan and Iseult grew thirsty, a servant poured them the potion, thinking it was wine, and the two who shared the cup fell into a love they could never escape. In Beroul's story the potion's power lasts three years; in Thomas's it lasts for life.

Iseult became Mark's queen, but the love did not end. Far away in Brittany, Tristan, dying of a poisoned wound, waited for Iseult and died; Iseult arrived too late and died at his side. In 1865 the story was reborn as Wagner's music drama Tristan und Isolde.`,
    imageAlt: "A fifteenth-century German flask of green glass. Below a slender neck ringed with a collar, the body divides into several thin twisting tubes, and the base swells into a round bulb.",
    annotations: [
      n("Collared neck", "A ring-shaped collar circles the middle of the slender neck. This green glass flask was blown in fifteenth-century Germany."),
      n("Twisting tubes", "Several thin glass tubes twist between the upper and lower body. Flasks like this were made so the drink gurgled out little by little through the tubes."),
      n("Round base", "The round bulb that held the drink. On board ship, Tristan and Iseult shared the love potion, thinking it was wine."),
    ],
  },
  "excalibur-scabbard": {
    title: "Scabbard of Excalibur",
    owner: "King Arthur",
    maker: "The Lady of the Lake",
    power: "As long as one wears it, one loses no blood, however deep the wound.",
    firstRecord: "Suite du Merlin (Post-Vulgate cycle)",
    summary: "The scabbard the Lady of the Lake gave with Excalibur. Merlin said it was worth ten times more than the sword.",
    story: `When Arthur's sword broke in a fight with King Pellinore, Merlin took him to a lake. An arm clothed in white samite rose from the water holding a sword, and the Lady of the Lake gave that sword, Excalibur, to Arthur together with its scabbard.

Merlin asked whether he liked the sword or the scabbard better, and Arthur said the sword. Merlin told him the scabbard was worth more than ten swords, for as long as he kept it on him he would lose no blood, however deep his wounds.

Morgan le Fay, Arthur's half-sister, who hated him, stole Excalibur and the scabbard and gave them to her lover Accolon to fight Arthur. Arthur barely won back the sword, but Morgan stole the scabbard again and threw it deep into a lake. Without it, Arthur fell gravely wounded at the last battle of Camlann.`,
    imageAlt: "Fragment of a luxury dagger made by the Lombards around 600. Gold plaques and two gold bands, engraved with scrolls and animals, wrap the rusted, broken iron blade and scabbard.",
    annotations: [
      n("Gold plaque with animal", "The gold plaque along the edge of the scabbard is engraved with a coiling animal. It decorated a dagger of the Lombards, who founded a kingdom in northern Italy around 600."),
      n("Upper gold band", "A gold band that tightened the scabbard, edged with rows of gold granules and engraved with scrolls. It dates from the sixth century, the age in which Arthur is said to have lived."),
      n("Rusted iron", "The rusted iron is what remains of the blade and scabbard. Having lost his scabbard, Arthur fell gravely wounded at the last battle of Camlann."),
    ],
  },
  "round-table": {
    title: "The Round Table",
    owner: "King Arthur and the Knights of the Round Table",
    maker: "A Cornish carpenter (Layamon) or Merlin (Robert de Boron)",
    power: "With no high or low place, every knight seated around it sits as an equal.",
    firstRecord: "Wace, Roman de Brut",
    summary: "A round table made to end quarrels over precedence. The Siege Perilous was kept empty for the one knight who would achieve the Grail.",
    story: `In his Roman de Brut of 1155, the Norman poet Wace first wrote that Arthur had a round table made. It was a table at which no one sat higher or lower than anyone else, so that the barons would not quarrel over the place of honor. Some decades later Layamon added that after a quarrel over precedence at a Christmas feast turned bloody, a Cornish carpenter made a table that could seat sixteen hundred and still be carried about.

Robert de Boron told how Merlin made the Round Table for Arthur's father Uther. It was the third table, after the table of the Last Supper and the Grail table of Joseph of Arimathea, and it had an empty seat, the Siege Perilous, kept for the one knight who would achieve the Grail. Any unworthy man who sat there came to harm, and the seat finally went to Galahad.

In the great hall of Winchester Castle in England hangs an oak round table 5.5 meters across. It was made in the thirteenth century, and under Henry VIII it was painted with the Tudor rose and King Arthur on his throne.`,
    imageAlt: "Daniel Hopfer's etching Three Worthy Christians, about 1516. Charlemagne, King Arthur and Godfrey of Bouillon stand side by side in armor, with their names inscribed above.",
    annotations: [
      n("Inscribed names", "At the top are the German title \"Three Good Christians\" and the names of Emperor Carolus, King Artus and Duke Gotfrid."),
      n("King Arthur", "The figure in the middle is King Arthur. Medieval people counted him among the Nine Worthies, the greatest heroes in history."),
      n("Charlemagne", "The emperor on the left is Charlemagne. In 1155 Wace first wrote that Arthur had a round table made to end his knights' quarrels over precedence."),
    ],
  },
  "sword-of-the-strange-belt": {
    title: "Sword of the Strange Belt",
    owner: "Galahad",
    maker: "The sword of King David, remade by King Solomon",
    power: "Only one destined man may draw it; anyone else who does comes to harm.",
    firstRecord: "Queste del Saint Graal (Vulgate cycle)",
    summary: "King David's sword, carried on Solomon's ship to await the Grail knight. Perceval's sister wove a new belt for it from her own hair.",
    story: `In the Queste del Saint Graal, Galahad, Perceval and Bors follow Perceval's sister aboard a ship with no crew. King Solomon had launched it long ago for the last knight of his line. On a bed inside lay a sword drawn a hand's breadth from its scabbard.

It was the sword of Solomon's father, King David. Solomon made a new hilt and scabbard, but his queen hung it from a mean belt of hemp. On the scabbard was written that a maiden would one day replace the belt with something precious, together with a warning that anyone but the one destined man who drew the sword would come to harm.

Perceval's sister cut off her long hair and wove it with gold thread into a new belt. The knight who girded on the sword was Galahad. Until the belt was changed, people called it the Sword of the Strange Belt.`,
    imageAlt: "A French sword belt of the late eighteenth century. The white silk belt is embroidered with green and black flowers and set with spangles, and a U-shaped hanger for the scabbard hangs below.",
    annotations: [
      n("Belt fastening", "The fastening of the belt. In late eighteenth-century France, a belt like this was used to wear a sword at the waist."),
      n("Scabbard hanger", "The scabbard slid into the U-shaped hanger. Perceval's sister replaced the mean hemp belt with a new one woven from her own hair and gold thread."),
      n("Embroidery", "Flowers and vines are embroidered in green and black thread on white silk, edged with metallic thread and spangles."),
    ],
  },
  "ring-of-lunete": {
    title: "Ring of Lunete",
    owner: "The knight Yvain",
    maker: "Unknown (given by the maid Lunete)",
    power: "Turn the stone toward the palm and close the hand, and no one can see the wearer.",
    firstRecord: "Chretien de Troyes, Yvain, the Knight of the Lion",
    summary: "The ring the maid Lunete gave the knight Yvain. With the stone turned into the palm, he vanished from sight.",
    story: `Yvain, a knight of the Round Table, fought the knight who guarded a magic spring and dealt him a mortal wound. As he chased his fleeing enemy into the castle, iron portcullises came down before and behind him, and Yvain was trapped between the two gates.

He was saved by Lunete, a maid of the castle. Remembering that at Arthur's court only Yvain had treated her courteously, she gave him a ring. If he turned its stone toward his palm and closed his hand, no one could see him. The castle's people searched everywhere with clubs for their lord's killer, but they never found Yvain.

Watching from hiding, Yvain fell in love at first sight with the lord's widow, Laudine, and through Lunete's cleverness he married her. The same story survives in the Welsh Mabinogion as "Owain, or the Lady of the Fountain," where the maid who gives him the ring is called Luned.`,
    imageAlt: "A German gold ring of the tenth to eleventh century. A plaque with a flower in green cloisonne enamel crowns a tall stepped setting decorated with gold granules and small arches.",
    annotations: [
      n("Cloisonne flower", "Gold partitions on top of the ring are filled with green enamel to form a flower (cloisonne). Lunete's ring hid its wearer when the stone was turned toward the palm."),
      n("Stepped setting", "The setting rises in tiers of gold granulation and small arches. This gold ring was made in Germany in the tenth or eleventh century."),
      n("Hoop", "The hoop for the finger. Thanks to the ring, Yvain could stay hidden among the people searching the castle."),
    ],
  },
  gleipnir: {
    title: "Gleipnir",
    owner: "The Aesir",
    maker: "The dwarves of Svartalfheim",
    power: "Thin and soft as a silk ribbon, yet no strength can break it.",
    firstRecord: "Snorri Sturluson, Prose Edda",
    summary: "The fetter that bound the wolf Fenrir. Made of six things that no longer exist, it was as thin as silk.",
    story: `The gods raised Fenrir, the wolf born of Loki, in Asgard. As the wolf grew larger every day and every prophecy warned that he would bring disaster, the gods bound him with the chains Leyding and Dromi, but both times Fenrir snapped them at once.

Odin sent the messenger Skirnir to the dwarves. They made a fetter from six things: the sound of a cat's footfall, the beard of a woman, the roots of a mountain, the sinews of a bear, the breath of a fish and the spittle of a bird. That, Snorri wrote, is why those things no longer exist. Gleipnir, made in this way, was as thin and soft as a silk ribbon.

Suspecting a trick, Fenrir agreed to be bound only if someone put a hand in his mouth as a pledge. Tyr, the god of war, offered his right hand, and when the fetter would not loosen, the wolf bit it off. Fenrir stays bound like this until Ragnarok.`,
    imageAlt: "A fragment of a band woven of silk and gold thread in Sicily, Italy, at the end of the eleventh century. Fine stripes run along the long, narrow dark-brown band, whose edges are worn.",
    annotations: [
      n("Gold-thread stripes", "Silk and gold thread are woven together in tablet weaving, turning cards threaded with yarn. The band was woven in Sicily at the end of the eleventh century."),
      n("Worn edge", "It is worn and faded with age. The Normans who ruled Sicily at this time were descendants of the Vikings of the north."),
      n("Long, narrow band", "A long, narrow band. Gleipnir was thin and soft as a silk ribbon, yet even the wolf Fenrir could not break it."),
    ],
  },
  mistilteinn: {
    title: "Mistilteinn",
    owner: "The blind god Hod (guided by Loki)",
    maker: "Unknown (plucked by Loki)",
    power: "Pierced Baldr, whom everything in the world had sworn not to harm.",
    firstRecord: "Snorri Sturluson, Prose Edda",
    summary: "Everything swore not to harm Baldr, but one sprig of mistletoe, passed over as too young, killed him.",
    story: `When Baldr, the god of light, dreamed of his own death, his mother Frigg took an oath from everything in the world not to harm him. Fire and water, iron and stone, earth and trees, sicknesses, beasts and poisons all swore. For sport the gods threw stones and spears at Baldr, and he was not hurt at all.

Loki, disguised as a woman, learned the secret from Frigg: one sprig of mistletoe growing west of Valhalla had seemed too young to take the oath. Loki plucked it, put it into the hands of the god Hod, who was blind and could not join the game, and showed him where to throw.

The mistletoe pierced Baldr, and he fell dead on the spot. Snorri wrote that this was the greatest misfortune ever to befall gods and men. Mistilteinn means mistletoe in Old Norse, and Baldr's death was the first step toward Ragnarok.`,
    imageAlt: "Two arrows from sixteenth-century Turkey or Iran. Pointed steel arrowheads inlaid with gold scrolls are fixed to lacquered wooden shafts.",
    annotations: [
      n("Gold-inlaid arrowhead", "The steel head of the longer arrow is inlaid with gold scrolls. These arrows come from sixteenth-century Turkey or Iran."),
      n("Shorter arrowhead", "The other arrow has a slightly shorter head. Everything swore not to harm Baldr, but the mistletoe that seemed too young to take the oath pierced him."),
      n("Shaft", "A straight, lacquered wooden shaft. Loki plucked the mistletoe, put it into the hands of the blind god Hod and showed him where to throw."),
    ],
  },
  gullinbursti: {
    title: "Gullinbursti",
    owner: "Freyr, god of fertility",
    maker: "The dwarves Eitri and Brokk",
    power: "Runs through sky and sea faster than any horse, and its golden bristles light up the night.",
    firstRecord: "Snorri Sturluson, Prose Edda",
    summary: "A boar with golden bristles made by a dwarf at his forge. Its glow lit the darkness as it drew Freyr's chariot.",
    story: `As a prank, Loki cut off all the hair of the goddess Sif, and to escape Thor's anger he had dwarves make treasures for the gods. Then he bet his own head with the dwarf Brokk that Brokk's brother Eitri could make nothing as fine.

Eitri put a pigskin into the forge and told Brokk not to stop working the bellows until he took it out. Loki, turned into a fly, bit Brokk's hand, but Brokk kept pumping, and out of the forge came a boar with golden bristles. After it came the ring Draupnir and the hammer Mjolnir.

Gullinbursti means "golden bristles." The boar ran through sky and sea faster than any horse, and however dark the night, its bristles lit the way. Freyr rode to Baldr's funeral in a chariot drawn by this boar.`,
    imageAlt: "A bronze wild boar made in the late seventeenth century by the Florentine sculptor Giovanni Francesco Susini. With bristles raised along its neck, the boar sits on its haunches with its mouth open.",
    annotations: [
      n("Tusks", "Tusks show at the corners of the open mouth. This small bronze copies the ancient marble boar in the Uffizi in Florence."),
      n("Raised bristles", "Coarse bristles stand up from the neck along the spine. Gullinbursti's golden bristles lit the way on even the darkest night."),
      n("Folded hind legs", "The boar sits with its hind legs folded. Freyr rode to Baldr's funeral in a chariot drawn by Gullinbursti."),
    ],
  },
  grotti: {
    title: "Grotti",
    owner: "King Frodi of Denmark; the sea-king Mysing",
    maker: "Unknown",
    power: "Grinds out whatever the one who turns it wishes for.",
    firstRecord: "Snorri Sturluson, Prose Edda, \"Song of Grotti\"",
    summary: "A mill that ground out anything. It sank into the sea while grinding salt, and that, they say, is why the sea is salty.",
    story: `King Frodi of Denmark obtained Grotti, a mill that ground out whatever its turner wished. It was so heavy that no one could turn it, so the king bought two giantesses, Fenja and Menja, as slaves from Sweden and set them to grind gold, peace and happiness. In those days there were neither thieves nor strife in Denmark, and it was called the Peace of Frodi.

The king let the two rest only while the cuckoo was silent or while a single song was sung. Exhausted, the giantesses sang the "Song of Grotti" and this time ground out an army against the king. That night the sea-king Mysing attacked, killed Frodi and sailed away with the mill and the two women.

On board ship Mysing set them to grind salt. At midnight they asked whether they should stop, but he told them to grind on, and the ship, filling with salt, sank at last. Where the sea pours through the eye of the mill a whirlpool formed, and from then on the sea has been salty. In Korea, too, there is an old tale of a salt-grinding millstone that fell into the sea and made seawater salty.`,
    imageAlt: "A stone grinding table (metate) from Costa Rica, about 1000–1550. A jaguar head is carved at the front of the broad, four-legged table, and patterns are carved in relief around the table and on the legs.",
    annotations: [
      n("Jaguar head", "A jaguar head is carved at the front of the grinding table. People in Costa Rica used such stones to grind maize, and also in rituals."),
      n("Grinding surface", "Grain was placed on this surface and ground by pushing a hand stone across it. Grotti ground out whatever its turner wished."),
      n("Carved legs", "The four legs are carved with patterns. Grotti was so heavy that King Frodi bought two giantesses to turn it."),
    ],
  },
  "mead-of-poetry": {
    title: "Mead of Poetry",
    owner: "Odin",
    maker: "The dwarves Fjalar and Galar",
    power: "Whoever drinks it becomes a poet or a scholar.",
    firstRecord: "Snorri Sturluson, Prose Edda",
    summary: "Mead brewed from the blood of Kvasir, the wisest of men. Odin stole it from a giant in the shape of an eagle.",
    story: `When the Aesir and the Vanir ended their long war, they sealed the peace by spitting into a single vat. From that spittle came Kvasir, the wisest man in the world. The dwarves Fjalar and Galar killed him and mixed his blood with honey, and whoever drank it became a poet or a scholar.

The mead passed into the hands of the giant Suttung, who hid it deep inside a mountain under the guard of his daughter Gunnlod. Odin bored a hole through the rock with an auger and crept in as a snake. After three nights with Gunnlod he was allowed three sips, and with those three sips he emptied all three vessels of mead.

Odin flew back to Asgard as an eagle, and Suttung pursued him, also as an eagle. As Odin spat the mead into the vessels the gods set out, a few drops escaped behind him. Snorri wrote that those drops became the share of bad poets.`,
    imageAlt: "A German maple-wood double cup (mazer) of about 1530. Two round wooden cups are stacked one on the other, with gilt-silver mounts at the rims, the join and the foot, and a small handle at the side.",
    annotations: [
      n("Silver rim", "A petal-edged silver mount circles the lip of the upper cup. The cup was turned from maple wood in Germany about 1530."),
      n("Two stacked cups", "A double cup: the smaller cup sits upside down on the larger one like a lid, so that two people can share the drink."),
      n("Handle", "A small handle projecting to the side. Inside the giant's mountain, Odin emptied all three vessels of the mead of poetry in three sips."),
    ],
  },
  "idunns-apples": {
    title: "Idunn's Apples",
    owner: "The goddess Idunn",
    maker: "Unknown",
    power: "Eaten by the gods as they grow old, they make them young again.",
    firstRecord: "Snorri Sturluson, Prose Edda",
    summary: "Idunn's apples kept the gods young. When Idunn was carried off by a giant, the gods quickly grew old.",
    story: `The goddess Idunn kept apples in an ash-wood box. Whenever the gods began to grow old they ate these apples and became young again, and so they could keep their youth until Ragnarok.

One day Loki was caught by the giant Thjazi in the shape of an eagle, and to save his life he promised to bring Idunn out of Asgard. Telling her there were even finer apples in a forest, he lured her outside, and Thjazi snatched her away to the land of the giants. Without her apples the gods quickly turned gray and old.

When it came out that Loki was behind it, he borrowed the goddess Freyja's falcon cloak and flew to the land of the giants. He turned Idunn into a nut, carried her back in his claws, and Thjazi, chasing him as an eagle, fell when his wings caught fire in the flames the gods had lit on the walls.`,
    imageAlt: "A sixteenth-century silver-gilt pomander. Round scenes are engraved on its apple-like body, with a ring at the top and a base hung with small balls below.",
    annotations: [
      n("Ring", "A ring at the top so the pomander could be worn on the body. This silver scent container dates from the sixteenth century."),
      n("Apple-shaped body", "Scent was kept in the round body. The name pomander comes from an old French word meaning \"apple of amber.\" Idunn kept the apples that made the gods young again in an ash-wood box."),
      n("Base", "A base hung with small balls. Whenever they grew old, the gods ate Idunn's apples and became young again."),
    ],
  },
  naglfar: {
    title: "Naglfar",
    owner: "The giant Hrym",
    maker: "The nails of the dead",
    power: "On the day of Ragnarok it crosses the sea packed with giants who will fight the gods.",
    firstRecord: "Snorri Sturluson, Prose Edda",
    summary: "A huge ship built from the nails of the dead. On the day of Ragnarok it brings the giants.",
    story: `When Ragnarok, the last day of the gods, comes, the earth will shake and everything that was bound will break loose. The great serpent of Midgard will thrash its way onto land, the sea will flood the earth, and on those waves the huge ship Naglfar will rise. The giant Hrym will steer it, packed with giants who will fight the gods.

Naglfar is built from the nails of the dead. Snorri wrote that anyone who dies with uncut nails adds material to the ship, which gods and men wish to be finished as late as possible. So the nails of the dead should be trimmed.

The "Prophecy of the Seeress" in the Poetic Edda also sings that a ship comes from the east and Naglfar is loosed. According to Snorri, the best of ships is Skidbladnir, the ship of the gods, but the largest is Naglfar, which belongs to Muspell, the land of fire.`,
    imageAlt: "A wooden model boat from Middle Kingdom Egypt (about 2040–1648 BCE). The yellow-painted boat carries a mast and a long steering oar, several painted figures of sailors, and a jar and a basket.",
    annotations: [
      n("Steering oar", "The long oar at the stern steers the boat. On the day of Ragnarok, the giant Hrym will take Naglfar's helm."),
      n("Mast", "The mast and yard with the sail furled. Egyptians buried models of boats with the dead for the journey to the afterlife."),
      n("Sailors", "Rowers and cargo on board. Naglfar is a ship built from the nails of the dead, bringing giants to fight the gods."),
    ],
  },
  tanngrisnir: {
    title: "Thor's Goats",
    owner: "Thor, god of thunder",
    maker: "Unknown",
    power: "Eaten and their bones laid on their hides, they are blessed with Thor's hammer and live again the next day.",
    firstRecord: "Snorri Sturluson, Prose Edda",
    summary: "The two goats that draw Thor's chariot. Even when eaten, they come back to life the next day.",
    story: `Thor, the god of thunder, raced across the sky in a chariot drawn by two goats, Tanngrisnir, "teeth-barer," and Tanngnjost, "teeth-grinder." They say thunder rolls when Thor's chariot passes.

Once, traveling with Loki, Thor stayed the night at a farmer's house. He slaughtered and cooked the two goats and shared them with the farmer's family, telling them to throw all the bones onto the hides. But the farmer's son Thjalfi split a thighbone with his knife to get at the marrow.

The next morning Thor raised his hammer Mjolnir and blessed the hides, and the goats came back to life, but one of them was lame in a hind leg. Before the furious Thor, the farmer begged forgiveness and gave him his son Thjalfi and daughter Roskva, who from then on followed Thor as his servants.`,
    imageAlt: "A bronze nanny goat from Hellenistic Greece, late third century BCE. The goat, with horns curving back and a beard at its chin, stands on a white base with its long coat hanging down.",
    annotations: [
      n("Curved horns and beard", "Horns curving back and a beard at the chin. This bronze goat comes from Hellenistic Greece in the late third century BCE."),
      n("Hanging coat", "The long coat hanging from the body is modeled in waves. After eating the two goats, Thor had their bones gathered on the hides."),
      n("Legs", "The goat stands on slender legs. When Thor blessed them with his hammer the next day, one of the revived goats was lame in a hind leg."),
    ],
  },
  dainsleif: {
    title: "Dainsleif",
    owner: "King Hogni",
    maker: "The dwarf Dain",
    power: "Once drawn, it must kill before it is sheathed; it never misses, and its wounds never heal.",
    firstRecord: "Snorri Sturluson, Prose Edda",
    summary: "A sword that returns to its scabbard only after drawing blood. Because of it, a battle began that is fought again every day.",
    story: `When King Hedin carried off Hild, the daughter of King Hogni, Hogni pursued him with an army and caught up with him on the island of Hoy in Orkney. Hild offered her father a necklace as a token of peace, but Hogni answered that it was too late.

He said he had already drawn Dainsleif, the sword made by the dwarf Dain. Once drawn, this sword had to kill a man; it never missed, and no wound it made ever healed. The two armies fought until sunset and all fell.

That night Hild walked the battlefield and raised all the dead by magic. The next day they fought again, and the battle is said to repeat every day until Ragnarok. This endless battle is called the Battle of the Hjadnings.`,
    imageAlt: "An iron sword made by the Franks around 500–700. The straight, long double-edged blade lies vertically, rough with rust, and its grip no longer survives.",
    annotations: [
      n("Tang", "The narrow iron tang onto which the grip was fitted. The grip, made of wood or horn, has rotted away."),
      n("Rusted blade", "The broad, straight double-edged blade is rusted. This is a Frankish sword of about 500–700."),
      n("Tip", "The rounded point. Once Dainsleif was drawn, it had to kill a man before it could return to its scabbard."),
    ],
  },
  hlidskjalf: {
    title: "Hlidskjalf",
    owner: "Odin",
    maker: "Unknown",
    power: "Whoever sits in this seat sees everything that happens in the nine worlds.",
    firstRecord: "Snorri Sturluson, Prose Edda",
    summary: "Odin's high seat. From it the whole world could be seen.",
    story: `In Odin's hall Valaskjalf stands a high seat called Hlidskjalf. When Odin sat in it he could look down on all nine worlds, and nothing anyone did escaped him.

One day Freyr, the god of fertility, secretly climbed into the seat and saw the beautiful Gerd in the land of the giants, and he fell sick with longing. He sent his servant Skirnir to woo her for him and gave away his sword that fought by itself, and for that reason, at Ragnarok, he will fight bare-handed and fall.

In the "Lay of Grimnir" in the Poetic Edda, Odin and his wife Frigg sit side by side in this seat, looking down on the two princes they each raised and making a wager. And when Loki, who caused Baldr's death, hid as a salmon in a waterfall, it was from Hlidskjalf that Odin found his hiding place.`,
    imageAlt: "A child's throne made by Pierre-Marie Balny in Paris in 1822. The leather back of the gilded wooden chair is gold-tooled with a rooster in a laurel wreath and fleurs-de-lis, the crest is carved with cherubs, and the front legs are carved as winged beasts.",
    annotations: [
      n("Carved crest", "Cherubs are carved and gilded at the top of the back. This throne was made in Paris in 1822 for a child."),
      n("Rooster and wreath", "A rooster within a laurel wreath is tooled in gold on the leather back. Odin sat in the high seat Hlidskjalf and looked down on the nine worlds."),
      n("Winged-beast legs", "The front legs are carved as winged beasts. Freyr secretly climbed into Odin's seat and fell sick with longing at the sight of the giantess Gerd."),
    ],
  },
  "lia-fail": {
    title: "Lia Fail",
    owner: "The kings of Ireland (the Hill of Tara)",
    maker: "Unknown (brought by the Tuatha De Danann from Falias)",
    power: "It cries out aloud when the rightful king of Ireland stands upon it.",
    firstRecord: "Lebor Gabala Erenn (The Book of Invasions)",
    summary: "The Stone of Destiny, one of the four treasures of the Tuatha De Danann. It cried out when the rightful king of Ireland stood on it.",
    story: `The Tuatha De Danann came to Ireland bearing four treasures from four northern cities: from Gorias the spear of Lugh, from Findias the sword of Nuada, from Murias the cauldron of the Dagda, and from Falias the Lia Fail, the Stone of Destiny.

The Lia Fail cried out aloud when the rightful king of Ireland stood upon it. According to legend, the hero Cu Chulainn struck it with his sword when it would not acknowledge his protege Lugaid as king, and after that the stone fell silent. Only when Conn of the Hundred Battles stepped on it did it cry out once more.

Today a granite standing stone called the Lia Fail stands on the Hill of Tara in County Meath, Ireland. There is also a story that the Stone of Scone, on which the kings of Scotland sat to be crowned, was the Lia Fail.`,
    imageAlt: "A Celtic-style stone head from northern England under Roman rule, about 100–300. Large almond-shaped eyes, a straight nose and a thin, closed mouth are carved in red sandstone, with bulging locks of hair at both sides.",
    annotations: [
      n("Large eyes", "Large almond-shaped eyes are shallowly carved. This stone head was made by Celtic people in northern England under Roman rule, about 100–300."),
      n("Closed mouth", "A straight, closed mouth. The head was once painted red, and traces of the paint remain. The Lia Fail cried out when the rightful king of Ireland stood on it."),
      n("Locks of hair", "Bulging locks of hair at both sides. The Celts are said to have held the human head sacred and to have carved heads in stone."),
    ],
  },
  "harp-of-the-dagda": {
    title: "Harp of the Dagda",
    owner: "The Dagda, god of the Tuatha De Danann",
    maker: "Unknown",
    power: "It plays the three strains of weeping, laughter and sleep, and flies to its master's hands when called by name.",
    firstRecord: "The Second Battle of Mag Tuired",
    summary: "The harp the Dagda won back by calling its names. With the strains of sorrow, laughter and sleep he put the Fomorians to sleep.",
    story: `After the Tuatha De Danann defeated the Fomorians at the Second Battle of Mag Tuired, the fleeing Fomorians carried off the Dagda's harper and his harp. The Dagda, with Lugh and Ogma, followed them to the hall where they were feasting. The harp hung on the wall.

The Dagda had bound the music into the harp so that it would not sound until he called it. When he called out its names, "Come, Daur Da Blao; come, Coir Cetharchair; come, summer; come, winter," the harp leaped from the wall, killing nine men in its path, and came into its master's hands.

The Dagda played the three strains. At the strain of sorrow the women wept; at the strain of laughter the women and children laughed; at the strain of sleep all the Fomorians fell asleep, and the three gods escaped unharmed. The harp is also the national emblem of Ireland today.`,
    imageAlt: "A portable harp made by John Egan of Dublin, Ireland, in 1819. Many strings stretch between the gold-painted curved neck and the pillar, and the green soundbox is painted with gold leaves.",
    annotations: [
      n("Curved neck", "The curved neck set with a row of tuning pins. This portable harp was made in Ireland in 1819."),
      n("Strings", "The many strings. When the Dagda played the strains of sorrow, laughter and sleep, all the Fomorians fell asleep."),
      n("Green soundbox", "A soundbox painted with gold leaves on a green ground. The harp is also the national emblem of Ireland today."),
    ],
  },
  moralltach: {
    title: "Moralltach",
    owner: "Diarmuid, warrior of the Fianna",
    maker: "Unknown (the sword of the sea god Manannan)",
    power: "As its name, \"Great Fury,\" says, one stroke cuts through anything.",
    firstRecord: "The Pursuit of Diarmuid and Grainne",
    summary: "The sword of the sea god Manannan. Aengus, god of love, passed it to his foster son Diarmuid.",
    story: `Diarmuid was one of the foremost warriors of the Fianna, the war band of Ireland. Grainne, who was to marry the aging leader Fionn mac Cumhaill, fell in love with Diarmuid at the wedding feast and laid on him a binding vow (geis) to run away with her. Diarmuid had no choice but to flee with Grainne, and for years Fionn pursued them all over Ireland.

Diarmuid carried two swords and two spears: the great sword Moralltach ("Great Fury") and the small sword Beagalltach ("Little Fury"), the red spear Gae Dearg and the yellow spear Gae Buidhe. Moralltach was the sword that the sea god Manannan gave to Aengus, god of love, and Aengus passed on to his foster son Diarmuid.

Years later, reconciled with Fionn, Diarmuid went hunting a boar on Ben Bulben. Grainne told him to take Moralltach and the red spear, but he took only the small sword and the yellow spear. Gored by an enchanted boar, Diarmuid lost his life.`,
    imageAlt: "A European long sword of about 1400. Below a round pommel, a wire-bound grip and a cross-guard spreading to both sides, a long, straight double-edged blade extends.",
    annotations: [
      n("Round pommel", "A round, disk-shaped pommel. This is a European long sword of about 1400."),
      n("Cross-guard", "A cross-guard whose ends curve slightly toward the blade. Moralltach was the sword of the sea god Manannan."),
      n("Long blade", "A long blade that gradually tapers. Ignoring Grainne's advice, Diarmuid went hunting with his small sword instead of this great one."),
    ],
  },
  "crane-bag": {
    title: "The Crane Bag",
    owner: "The sea god Manannan, later Fionn mac Cumhaill",
    maker: "The sea god Manannan (from the skin of Aoife, a woman turned into a crane)",
    power: "When the sea is full, all the treasures of the gods appear in it; when the tide ebbs, it is empty.",
    firstRecord: "Duanaire Finn (The Poem Book of Finn)",
    summary: "Manannan's bag, made from the skin of a woman turned into a crane. It held all the treasures of the gods.",
    story: `Aoife loved Ilbrec, son of the sea god. Jealous of her, Iuchra turned Aoife into a crane by magic, and as a crane Aoife lived two hundred years in the house of Manannan, the sea god, before she died.

Manannan made a bag from her skin and put into it his most precious treasures: his own shirt and knife, the belt of Goibniu the smith god, the shears of the king of Scotland, the helmet of the king of the north, and a belt made from the back of a great whale. When the sea was full all those treasures could be seen, and when the tide ebbed the bag was empty.

The story comes from a poem in Duanaire Finn, compiled in the seventeenth century. The crane bag is said to have passed from Manannan to Lugh, god of light, and then to Fionn mac Cumhaill, leader of the war band.`,
    imageAlt: "A purse-shaped reliquary from the Upper Rhine region of Germany, about 1320. Gilded copper is densely set with rock crystal, glass and gems, and a blue roundel at the center carries the Virgin holding the Christ Child.",
    annotations: [
      n("Virgin and Child on blue", "On the blue ground of the central roundel, the Virgin holding the Child is applied in gold. This reliquary was made in the Upper Rhine region of Germany about 1320."),
      n("Set stones", "Polished rock crystal and gems are set all around. The sea god Manannan made a bag from the skin of a woman turned into a crane and kept the treasures of the gods in it."),
      n("Purse mouth", "The top is shaped like the mouth of a purse. This reliquary imitates the purses medieval people wore at the waist."),
    ],
  },
  enbarr: {
    title: "Enbarr",
    owner: "The sea god Manannan; Lugh, god of light",
    maker: "Unknown",
    power: "Runs faster than the spring wind over water and land alike, and no one on its back can be killed, it was said.",
    firstRecord: "The Fate of the Children of Tuireann",
    summary: "The horse of the sea god Manannan that runs over waves as if on land. Lugh, god of light, appeared before the king of the Tuatha De Danann riding it.",
    story: `Enbarr, "flowing mane," is the horse of the sea god Manannan. It ran faster than the cold spring wind, over water and land alike, and it is said that no one on its back was ever killed.

In "The Fate of the Children of Tuireann," Lugh, the god of light, borrowed Enbarr from Manannan and appeared on it before Nuada, king of the Tuatha De Danann. Equipped with Manannan's armor and sword as well, he struck down the envoys who had come to collect tribute for the Fomorians.

The three sons of Tuireann, as the price for killing Lugh's father, had to fetch treasures from the ends of the earth. When they asked to borrow Enbarr for the long journey, Lugh refused, saying he could not lend what was itself on loan, and gave them instead Manannan's boat, the "Wave-Sweeper," which crossed the sea by itself wherever its passengers wished.`,
    imageAlt: "The two faces of a gold coin (stater) of the Catuvellauni of Britain, about 20 BCE–10 CE. The obverse at left bears the letters TASCIOV RICON in a band; the reverse at right shows a horse carrying a warrior with a sword.",
    annotations: [
      n("Mounted warrior", "The reverse shows a warrior with a sword riding a galloping horse. This gold coin was struck by Tasciovanus, king of the Catuvellauni in Britain."),
      n("Inscribed letters", "The obverse is inscribed TASCIOV RICON. Ricon is thought to mean \"king\" in a Celtic language."),
      n("Outstretched legs", "The horse gallops with its legs outstretched. Enbarr, the horse of the sea god Manannan, ran faster than the spring wind over water and land alike."),
    ],
  },
  "cormacs-cup": {
    title: "Cormac's Cup of Truth",
    owner: "Cormac mac Airt, high king of Ireland",
    maker: "The sea god Manannan",
    power: "Three lies spoken over it break it into three pieces; three truths make it whole again.",
    firstRecord: "The Adventure of Cormac in the Land of Promise",
    summary: "The golden cup Manannan gave King Cormac. It broke at falsehood and became whole again at the truth.",
    story: `One morning on the ramparts of Tara, King Cormac met a strange warrior holding a silver branch. When its three golden apples shook, the sick and the wounded forgot their troubles and fell asleep. To get the branch Cormac gave away his wife, son and daughter, but he soon set out to find his family.

Passing through a mist, he came to a palace in the Land of Promise, where the master showed him a golden cup. If three lies were spoken before it, it broke into three pieces, and if three truths were spoken, it became whole again. The master mended the broken cup by telling the truth that Cormac's wife and daughter had seen no other man in the meantime.

The master was the sea god Manannan. He gave Cormac back his family and the silver branch, and the golden cup as well, telling him to use it to tell truth from falsehood. When Cormac died, it is said, the cup vanished with him.`,
    imageAlt: "A Hungarian gilt-silver chalice of about 1450–80. Below the golden bowl, the cup's base and stem are filled with green and white enamel flowers, and square gems are set in the knop and the foot.",
    annotations: [
      n("Golden bowl", "A wide, flaring golden bowl. Cormac's cup, which broke into three at three lies and became whole again at three truths, was also made of gold."),
      n("Enamel flowers", "On the base around the bowl, flowers are drawn in fine wire and filled with green and white enamel, the filigree enamel for which fifteenth-century Hungary was famous."),
      n("Jeweled foot", "Square gems are set around the foot. Manannan told Cormac to use this cup to tell truth from falsehood."),
    ],
  },
  "cauldron-of-ceridwen": {
    title: "Cauldron of Ceridwen",
    owner: "The witch Ceridwen",
    maker: "Ceridwen",
    power: "Boiled for a year and a day, its first three drops hold all the wisdom of the world.",
    firstRecord: "Elis Gruffydd's Chronicle, \"Tale of Taliesin\"",
    summary: "The cauldron in which Ceridwen brewed wisdom for her son. The boy who tasted three drops became the poet Taliesin.",
    story: `The witch Ceridwen had the ugliest son in the world, Morfran. To give him wisdom at least, she put herbs into a great cauldron and began to boil it for a year and a day. The first three drops to leap from the cauldron would hold all the wisdom of the world, and the rest would become poison.

The boy Gwion Bach was set to stir the cauldron. On the day the year was complete, three drops of the boiling brew splashed onto Gwion's thumb. He put the burning thumb in his mouth and at once knew everything in the world; the rest of the brew turned to poison, and the cauldron split in two.

Furious, Ceridwen chased the fleeing Gwion. He became a hare, a fish, a bird and a grain of wheat, and she became a greyhound, an otter, a hawk and a black hen, and at last she swallowed the grain. Nine months later the child was born again, put into a leather bag and thrown into the sea, and the man who found him cried "a radiant brow!", which gave Taliesin, the greatest poet of Wales, his name.`,
    imageAlt: "A ritual cauldron from Bronze Age Hungary, about 1000–900 BCE. A large looped handle in two strands rises above the round bronze body, and fine patterns are incised around the rim.",
    annotations: [
      n("Looped handle", "A large handle bent in two strands, so the cauldron could hang over a fire. This cauldron comes from Bronze Age Hungary, about 1000–900 BCE."),
      n("Handle attachment", "The handle hangs from fittings riveted to the body. Ceridwen boiled the brew of wisdom in her cauldron for a year and a day."),
      n("Round body", "A round body of hammered bronze. After three drops splashed onto Gwion's thumb, the rest of the brew turned to poison and the cauldron split in two."),
    ],
  },
  dyrnwyn: {
    title: "Dyrnwyn",
    owner: "Rhydderch Hael (Rhydderch the Generous)",
    maker: "Unknown",
    power: "When a man of noble birth draws it himself, flames blaze from hilt to point.",
    firstRecord: "The Thirteen Treasures of the Island of Britain",
    summary: "The sword of King Rhydderch, first of the Thirteen Treasures of the Island of Britain. When a worthy man drew it, the blade burst into flame.",
    story: `In Wales there survives "The Thirteen Treasures of the Island of Britain," a list of thirteen treasures of the old kingdoms of northern Britain. At its head stands Dyrnwyn, "white hilt," the sword of Rhydderch Hael, a sixth-century king of Strathclyde.

When a man of noble birth drew this sword himself, flames blazed from its hilt to its point. True to his name, "the Generous," Rhydderch gave the sword to anyone who asked for it, but because of those flames everyone who received it gave it back.

Later tradition says the wizard Merlin gathered all thirteen treasures and took them to a house of glass. Rhydderch was a real king, and his name also appears in the Merlin legends and in the life of Saint Kentigern.`,
    imageAlt: "A German two-handed sword of 1550–1600. Below a long grip, a cross-guard with rings spreads to both sides, and below it runs a long blade undulating like flames.",
    annotations: [
      n("Wavy blade", "The blade undulates like flames; such a blade is called a flame blade (flamberge). Dyrnwyn burst into flame from hilt to point when a worthy man drew it."),
      n("Small wings", "The small lugs projecting near the top of the blade caught an enemy's blade and protected the hand when gripping the blade below the guard."),
      n("Ringed guard", "A long cross-guard with rings on both sides. This is a German two-handed sword of the late sixteenth century."),
    ],
  },
  gwyddbwyll: {
    title: "Gwyddbwyll Board of Gwenddoleu",
    owner: "King Gwenddoleu",
    maker: "Unknown",
    power: "Set out the pieces, and they move by themselves and play the game.",
    firstRecord: "The Thirteen Treasures of the Island of Britain",
    summary: "Set silver pieces on its gold board, and they played by themselves. It is one of the Thirteen Treasures of the Island of Britain.",
    story: `Gwyddbwyll, "wood-sense," was a board game enjoyed by the medieval Welsh. According to "The Thirteen Treasures of the Island of Britain," King Gwenddoleu's board was made of gold and its pieces of silver, and once the pieces were set out they moved by themselves and played the game.

Gwenddoleu was a king of northern Britain who fell at the Battle of Arfderydd in 573. In Welsh tradition his poet, Myrddin, that is Merlin, went mad with grief at losing his lord and wandered in the forest.

Boards that play by themselves appear in other stories too. In "Peredur," Peredur finds a board in a castle on which the game plays by itself, and when the side he favors loses, he angrily throws the board into a lake. In "The Dream of Rhonabwy," Arthur and Owain play the game while their men and a flock of ravens fight.`,
    imageAlt: "An amber game board made in Konigsberg by Georg Schreiber in the seventeenth century. Inside the open box-shaped board, slices of red and yellow amber and ivory form the triangular points of backgammon.",
    annotations: [
      n("Triangular points", "The side with rows of long triangles is a backgammon board. When the board is folded shut, the outside becomes a chessboard."),
      n("Amber slices", "Red and yellow amber is cut thin and laid over gold foil so the light shines through. Seventeenth-century Konigsberg was famous for its Baltic amber work."),
      n("Folding hinge", "Folded in the middle, the board becomes a box for carrying the pieces. On Gwenddoleu's board, the pieces played the game by themselves once they were set out."),
    ],
  },
  "cloak-of-manannan": {
    title: "Cloak of Manannan",
    owner: "Manannan mac Lir, the sea god",
    maker: "Unknown",
    power: "Shaken between two people, it ensures they will never meet again in this world.",
    firstRecord: "The Wasting Sickness of Cu Chulainn",
    summary: "The sea god's cloak that keeps two people from ever meeting again. It parted Cu Chulainn and the fairy Fand forever.",
    story: `The hero Cu Chulainn, trying to shoot magical birds on a lake, was whipped by two women in a dream and lay sick for a year. The one who called him to the Otherworld was Fand, who had parted from her husband, the sea god Manannan. Cu Chulainn crossed into the Otherworld and fought on Fand's side, and the two fell in love.

When Cu Chulainn's wife Emer learned of it, she went to find Fand with fifty women armed with knives. But seeing how much Emer loved her husband, Fand withdrew of her own accord and said she would return to Manannan. Manannan came across the sea to take Fand away, and shook his cloak between Cu Chulainn and Fand.

Whoever Manannan shook his cloak between would never meet again in this world. When Cu Chulainn, having lost Fand, wandered the mountains in grief, the druids gave him and Emer a drink of forgetfulness so that they would forget it all.`,
    imageAlt: "A semicircular ecclesiastical cloak (cope) from late fifteenth-century Europe. Large pomegranates and flowers are woven in red velvet on a golden ground, and a gold-thread band is attached along the straight upper edge.",
    annotations: [
      n("Pomegranate pattern", "Leaving the golden ground showing between areas of red velvet, large pomegranates and flowers are woven in. This pattern was a favorite of fifteenth-century European silks."),
      n("Upper band", "A band woven with gold thread is attached along the straight edge that rests on the shoulders. The cope was fastened at the front and worn like a cloak."),
      n("Curved hem", "The hem forms a half circle when spread out. When the sea god Manannan shook his cloak between Cu Chulainn and Fand, the two could never meet again."),
    ],
  },
};
