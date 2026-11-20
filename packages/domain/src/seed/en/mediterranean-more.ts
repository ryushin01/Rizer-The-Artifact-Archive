import type { EnArtifact } from "./types";

const n = (title: string, body: string) => ({ title, body });

/** 200점으로 늘리며 더한 그리스·성서·이집트와 중동 유물의 영어 번역 */
export const EN_MEDITERRANEAN_MORE: Record<string, EnArtifact> = {
  "lyre-of-orpheus": {
    title: "Lyre of Orpheus",
    owner: "The poet Orpheus",
    maker: "First made by Hermes and handed down by Apollo (by tradition)",
    power: "When he plays, birds and beasts, trees and even stones follow, and the gods of the underworld are moved.",
    firstRecord: "Fragments of Simonides",
    summary: "When Orpheus played, beasts, trees and stones followed him. With his song he nearly brought his wife back from the underworld.",
    story: `Orpheus was the son of the Muse Calliope and is said to have received his lyre from Apollo. When he sang to the lyre, birds and fish gathered, and even trees and rocks moved after him. On the voyage of the Argo his song drowned out the song of the Sirens, so that the sailors passed by unharmed.

When his wife Eurydice died of a snakebite, Orpheus went down to the underworld with his lyre. Moved by his song, Hades and Persephone gave her back on condition that he not look back until they reached the world above. But just short of the exit he turned around, and Eurydice vanished back into the underworld.

Later Orpheus was torn apart by Thracian women who followed Dionysus. His head and lyre, thrown into a river, floated all the way to the island of Lesbos without ceasing to sing, and the lyre is said to have risen into the sky as the constellation Lyra.`,
    imageAlt: "Orpheus and Cerberus, carved in sandstone by Ferdinand Tietz near Bamberg, Germany, about 1765. A young Orpheus stands with his head thrown back, playing a stringed instrument, while Cerberus, the dog of the underworld, crouches at his feet.",
    annotations: [
      n("Stringed instrument", "The stringed instrument Orpheus holds against his chest. The eighteenth-century sculptor gave him an instrument of his own day instead of an ancient lyre."),
      n("Singing face", "A young man singing with his head thrown back. When he sang, birds and beasts, trees and stones moved after him."),
      n("Cerberus", "Crouching at his feet is Cerberus, the dog that guards the gates of the underworld. Even the gods of the underworld were moved by Orpheus's song."),
    ],
  },
  "bow-of-odysseus": {
    title: "Bow of Odysseus",
    owner: "Odysseus, king of Ithaca",
    maker: "Unknown (the bow of the archer Eurytus, given as a gift by his son Iphitus)",
    power: "No one but its master can string it.",
    firstRecord: "Homer, Odyssey",
    summary: "The bow no one but Odysseus could string. Returning after twenty years, he used it to defeat the suitors.",
    story: `Twenty years after Odysseus left for the Trojan War, his palace on Ithaca was overrun by men wooing his wife Penelope and wasting his wealth. Unable to hold out any longer, Penelope brought out her husband's bow and said she would marry the man who could string it and shoot an arrow through the holes of twelve axes at once.

Odysseus had received the bow in his youth from Iphitus, son of the great archer Eurytus, as a token of friendship. He treasured it so much that he did not take it to war but kept it at home. The suitors tried one after another, but none could even bend the bow to string it.

Odysseus, who had come home disguised as a beggar, offered to try. He strung the bow as easily as stringing a lyre, and when he plucked the string it sang like a swallow. His arrow passed through all twelve axes, and Odysseus revealed himself and turned the bow on the suitors.`,
    imageAlt: "An Ottoman Turkish composite bow of 1719–20 with two arrows. Unstrung, the bow curves deeply with its tips bent backward, and two long arrows stand beside it.",
    annotations: [
      n("Reflexed tips", "When unstrung, the tips bend sharply the other way. Made of wood, horn and sinew glued in layers, a composite bow takes great strength to string."),
      n("Grip", "The middle of the bow where the archer holds it is painted with designs. The bow was made in the Ottoman Empire in 1719–20."),
      n("Arrows", "Two of the forty arrows that came with the bow. Odysseus's arrow passed through the holes of twelve axes set in a row."),
    ],
  },
  "chariot-of-helios": {
    title: "Chariot of Helios",
    owner: "Helios, god of the sun",
    maker: "Hephaestus, god of the forge (Ovid)",
    power: "Drawn by four fire-breathing horses, it carries the sun across the sky every day.",
    firstRecord: "Homeric Hymn to Demeter",
    summary: "The chariot of fire Helios drove across the sky carrying the sun. When his son Phaethon drove it, the world nearly burned.",
    story: `Every day the sun god Helios rose at the eastern edge of the world in a golden chariot drawn by four horses, crossed the sky and went down into the western sea. The horses breathed fire from their nostrils, and at night Helios sailed back east on a golden cup across the river that encircles the world.

Helios's son Phaethon was mocked by his friends, who said he was not truly the son of the Sun. He went to his father, won a promise to grant him anything, and begged to drive the chariot for just one day. Helios tried to dissuade him, but he could not take back an oath sworn by the Styx, the river of the underworld.

The horses knew their master was not driving and ran wild off their course. When the chariot climbed too high the earth froze, and when it came too low the rivers dried and the land burned. Seeing that the world would burn up, Zeus struck Phaethon down with a thunderbolt. His sisters, weeping on the riverbank, turned into poplars, and their tears became amber.`,
    imageAlt: "An Athenian black-figure water jar (hydria) painted by the Antimenes Painter about 520 BCE. In the middle of the orange body, a chariot drawn by four horses is shown from the front, with a band of animals below.",
    annotations: [
      n("Four horses from the front", "A chariot drawn by four horses is painted as if seen from the front. Helios's chariot was also drawn by four fire-breathing horses."),
      n("Charioteer", "Between the horses, the charioteer standing in the chariot can be seen. The jar was painted in Athens by the artist known as the Antimenes Painter."),
      n("Animal frieze", "Animals march in a row in the lower band. The chariot Phaethon drove left its course and nearly set the earth on fire."),
    ],
  },
  palladium: {
    title: "Palladium",
    owner: "The people of Troy, later Rome",
    maker: "The goddess Athena (by tradition)",
    power: "As long as this statue remains within the walls, Troy will never fall.",
    firstRecord: "Little Iliad (Epic Cycle)",
    summary: "A small wooden image of Athena that fell from heaven. As long as it was inside the city, Troy would not fall.",
    story: `When Ilus, the founder of Troy, prayed for a sign of the gods' will, a small wooden statue fell from heaven in front of his tent. It was the Palladium, an image of the goddess Athena with a spear raised in her right hand and a distaff and spindle in her left. Some say Athena made it in memory of her young friend Pallas, whom she had killed by accident.

An oracle declared that Troy would never fall as long as this image stayed within its walls. In the tenth year of the war, the Trojan seer Helenus, captured by the Greeks, revealed this secret. Odysseus and Diomedes slipped into the city by night and stole the Palladium, and soon afterward the wooden horse passed through the gates.

The Romans believed that Aeneas had rescued the true Palladium from burning Troy and brought it to Italy. In Rome it was kept deep inside the Temple of Vesta, where the undying fire was guarded.`,
    imageAlt: "A Greek bronze statuette of Athena, about 460 BCE. The helmeted goddess in a long robe raises her right arm high, releasing an owl from her hand.",
    annotations: [
      n("Owl", "An owl is about to fly from her raised right hand. The owl is the bird of Athena, goddess of wisdom."),
      n("Helmet", "The helmeted head of the goddess. The Palladium is said to have been a small wooden image of Athena raising a spear in her right hand."),
      n("Long robe", "A robe (peplos) that falls straight from the shoulders to the feet. The Trojans believed Troy would not fall as long as the Palladium was inside the city."),
    ],
  },
  "trojan-horse": {
    title: "Trojan Horse",
    owner: "Odysseus and the Greek heroes",
    maker: "The carpenter Epeius (with Athena's help)",
    power: "A huge hollow wooden horse. The heroes hidden in its belly got inside the walls of Troy.",
    firstRecord: "Homer, Odyssey",
    summary: "The hollow wooden horse that ended the Trojan War. The heroes hidden in its belly opened the gates at night.",
    story: `After besieging Troy for ten years without victory, the Greeks devised a trick. The carpenter Epeius, with Athena's help, built a huge hollow wooden horse, and Odysseus and other heroes hid in its belly. The rest of the army pretended to sail away and hid behind a nearby island.

In the Odyssey, the Trojans drag the horse into the city and then argue over whether to cut open its belly, throw it from a cliff or keep it as an offering to the gods. Helen walks around the horse imitating the voices of the heroes' wives, but Odysseus stops the mouths of his comrades, who are about to leap out.

The Roman poet Virgil sang in the Aeneid that the priest Laocoon struck the horse with a spear, saying he feared the Greeks even when they bore gifts. That night the heroes came out of the horse and opened the gates, and Troy burned and fell.`,
    imageAlt: "The Trojan Horse, a painted enamel plaque from Limoges, France, about 1530–40. Before Troy, lined with walls and towers, people pull a huge white horse into the city; the plaque is set in a red velvet frame.",
    annotations: [
      n("White horse", "People drag a huge white horse into the city. This plaque is one of a series made in Limoges, France, about 1530–40, picturing scenes from the Aeneid in enamel."),
      n("City of Troy", "Above the city crowded with walls and towers, the word TROIA can be seen. That night the heroes who came out of the horse opened the gates."),
      n("Priam and Sinon", "Labels reading PRIAMVS and SINON float above the heads of the people at upper left. Deceived by the lies of the Greek Sinon, King Priam of Troy let the horse into the city."),
    ],
  },
  thyrsus: {
    title: "Thyrsus",
    owner: "Dionysus and the maenads",
    maker: "Unknown",
    power: "Strike a rock with it and water springs up; thrust it into the ground and wine gushes out.",
    firstRecord: "Euripides, Bacchae",
    summary: "The staff of Dionysus, a fennel stalk tipped with a pine cone and wound with ivy. When it struck the ground, wine sprang up.",
    story: `The thyrsus is a staff made from a giant fennel stalk tipped with a pine cone and wound with ivy. Dionysus, god of wine and revelry, and the women who followed him, the maenads, carried it as they roamed the mountains and fields.

In Euripides's Bacchae, the women of Thebes worship Dionysus on Mount Cithaeron. One woman strikes a rock with her thyrsus and clear water springs up; another plunges hers into the ground and wine gushes out. Scraping the earth with their fingertips they draw out milk, and honey drips from their thyrsi.

When villagers come to seize them, the women drive the men off by throwing their thyrsi. The men's spears cannot wound them, but the thyrsi wound the men. Pentheus, king of Thebes, who scorned Dionysus, disguises himself as a woman to spy on them and is torn apart by the maenads, led by his own mother.`,
    imageAlt: "An Athenian red-figure mixing bowl (column krater) painted by the Naples Painter about 450–430 BCE. On the black ground, two satyrs with horse tails chase two women carrying leafy staffs (thyrsi), shown in red.",
    annotations: [
      n("Maenad with thyrsus", "The woman on the right flees holding a leafy staff, the thyrsus. She is a maenad, a woman who follows Dionysus."),
      n("Satyr", "A satyr with a horse's tail chases a woman. Satyrs are spirits of the wild who follow Dionysus."),
      n("Thyrsus on the shoulder", "The woman on the left also carries a thyrsus on her shoulder. In the Bacchae, the maenads strike rocks with their thyrsi to bring forth water and pierce the ground to bring forth wine."),
    ],
  },
  "bag-of-winds": {
    title: "Bag of Aeolus",
    owner: "Aeolus, master of the winds; Odysseus",
    maker: "Aeolus (from the hide of a nine-year-old ox)",
    power: "It holds every violent wind, so that a ship sails home with only a fair breeze.",
    firstRecord: "Homer, Odyssey",
    summary: "An oxhide bag holding all the violent winds. With home in sight, the sailors opened it.",
    story: `Aeolus, master of the winds, lived on a floating island ringed with bronze walls. When Odysseus stopped there on his way home from Troy, Aeolus entertained him for a month and gave him a gift when he left: a bag made from the hide of a nine-year-old ox, in which he had bound all the violent winds, tied with a silver cord.

Outside the bag he left only the west wind, to carry the ship straight to Ithaca. They sailed for nine days and nights, and on the tenth, when they were so close that the fires of home were in sight, Odysseus, who had held the helm the whole time, fell asleep.

The sailors, thinking the bag must be full of gold and silver, secretly untied it. The imprisoned winds rushed out all at once, and the ship was driven back to Aeolus's island. Aeolus, declaring him a man hated by the gods, never helped him again.`,
    imageAlt: "An agate vessel (askos) of the Ptolemaic dynasty, 200–1 BCE. Agate with swirling brown and white bands is carved in the shape of a wineskin, with gold capping the slanted spout and the foot.",
    annotations: [
      n("Gold-capped spout", "The end of the slanted spout is capped with gold. The vessel dates from the Ptolemaic period, 200–1 BCE."),
      n("Banded agate", "It is carved from a single piece of agate with swirling brown and white bands. An askos is a vessel modeled on a leather wineskin."),
      n("Handle", "A loop handle is carved at the top. Aeolus shut all the violent winds in an oxhide bag and tied it with a silver cord."),
    ],
  },
  cornucopia: {
    title: "Cornucopia",
    owner: "Tyche, goddess of fortune; Plutus, god of wealth",
    maker: "Unknown (the horn of the goat Amalthea)",
    power: "Food and drink of every kind flow from it without end.",
    firstRecord: "Fragments of Anacreon",
    summary: "The horn of the goat that nursed the infant Zeus. It became the symbol of plenty, pouring out whatever one wishes without end.",
    story: `To hide him from his father Cronus, who swallowed his children, Rhea hid the newborn Zeus in a cave on Crete. The infant was nursed by the she-goat Amalthea. One day, while playing, Zeus broke off one of her horns, and from then on food and drink of every kind flowed from it without end.

There is another story. Heracles, wrestling the river god Achelous, who had turned himself into a bull, broke off one of his horns, and the water nymphs filled it with fruit and fragrant flowers. Ovid sang that by this horn Plenty became plentiful.

The horn overflowing with fruit and grain became the attribute of Tyche and Fortuna, goddesses of fortune, and of Plutus, god of wealth. The Latin name cornucopia, "horn of plenty," still lives on in harvest decorations and in the coats of arms of many countries.`,
    imageAlt: "Victory with Cornucopia, a Roman bronze chariot ornament of about 40–68 CE. The winged goddess soars upward with one arm raised above her head and the other holding a long horn of plenty.",
    annotations: [
      n("Horn of plenty", "The long horn resting on her arm is the cornucopia. Food of every kind flowed without end from the horn of Amalthea."),
      n("Wings", "Victoria, goddess of victory, with great wings on her back. This bronze ornament decorated a Roman chariot about 40–68 CE."),
      n("Flying drapery", "Her robe streams in the wind. The horn overflowing with fruit and grain came to be held by Fortuna, goddess of fortune, and by Victory."),
    ],
  },
  "wings-of-icarus": {
    title: "Wings of Daedalus and Icarus",
    owner: "Daedalus and his son Icarus",
    maker: "The master craftsman Daedalus",
    power: "Wings of feathers bound with thread and wax. Strapped to the arms, they let a person fly like a bird.",
    firstRecord: "Palaephatus, On Unbelievable Tales",
    summary: "The wings Daedalus, builder of the Labyrinth, made to escape Crete with his son. Icarus flew too close to the sun.",
    story: `Daedalus, the master craftsman of Athens, built a labyrinth for King Minos of Crete to imprison the Minotaur. But after Theseus escaped from it, Daedalus was imprisoned with his son Icarus for having shown the way out. Land and sea alike were in Minos's hands.

Daedalus reasoned that the sky alone was open. He laid out feathers from small to large, bound them in the middle with thread and at the ends with wax, and curved them like a bird's wings. Fitting the wings on his son, he warned him: fly too low and the sea spray will weigh your wings down; fly too high and the sun's heat will melt them; keep to the middle.

Drunk with the joy of flight, Icarus climbed higher and higher. The sun melted the wax, the feathers scattered, and he fell into the sea. That sea is called the Icarian Sea, and the island nearby Icaria. Daedalus reached Sicily alone.`,
    imageAlt: "Hendrick Goltzius's engraving Icarus, 1588. Within a round frame, a young man who has lost his wings falls headfirst with the sun behind him; far below, Daedalus flies small over the sea, and a Latin inscription runs around the border.",
    annotations: [
      n("Falling Icarus", "Icarus, who flew too close to the sun, falls headfirst. Hendrick Goltzius engraved this print in 1588 as part of the series The Four Disgracers."),
      n("Daedalus in the distance", "Far below, Daedalus flies over the sea on his wings. The father had told his son to fly neither too high nor too low, but in the middle."),
      n("Latin inscription", "The round border carries a Latin inscription meaning that knowledge is a gift of God, but one must keep within one's limits. The sea where Icarus fell is named the Icarian Sea after him."),
    ],
  },
  "golden-bough": {
    title: "The Golden Bough",
    owner: "Aeneas, hero of Troy",
    maker: "Unknown",
    power: "Whoever plucks it and carries it may enter the underworld alive and return.",
    firstRecord: "Virgil, Aeneid",
    summary: "The golden bough that must be plucked before a living man can enter the underworld. Aeneas found it by following two doves.",
    story: `Having reached Italy after the fall of Troy, Aeneas wished to meet his father Anchises in the underworld. The Sibyl of Cumae told him that a living man who wishes to enter the underworld must first pluck a golden bough hidden in a dark tree in the forest and offer it to Proserpina, queen of the dead. Only for one whom fate allows does the bough come away, and in its place a new golden bough soon grows.

As Aeneas stood helpless before the vast forest, two doves, the birds of his mother Venus, flew down before him. Following them, he found the gleaming golden bough in a tree beside Lake Avernus and plucked it.

At the river of the underworld the ferryman Charon barred the way, saying he could not carry the living, but at the sight of the golden bough he silently gave up his boat. Aeneas offered the bough at the threshold of the palace of the dead and met his father. In 1890 the British anthropologist James Frazer took the title of his book on myth and magic, The Golden Bough, from this story.`,
    imageAlt: "Aeneas and the Sibyl in the Underworld, painted in oil on copper by Jan Brueghel the Younger in the 1630s. In the middle of a dark underworld where flames shoot up, the helmeted Aeneas follows the Sibyl, who points the way, surrounded by monsters and shades.",
    annotations: [
      n("Aeneas and the Sibyl", "The helmeted Aeneas and the Sibyl, who points the way. Only after plucking the golden bough could Aeneas enter the underworld alive."),
      n("Burning underworld", "Flames of the underworld shoot up at upper right. On a small copper plate, Jan Brueghel the Younger painted every monster and punishment of the underworld in close detail."),
      n("Shades and monsters", "Naked shades and monsters swarm together. The ferryman Charon carried the living man across only after seeing the golden bough."),
    ],
  },
  "rod-of-moses": {
    title: "Rod of Moses",
    owner: "Moses and Aaron",
    maker: "Unknown",
    power: "Thrown down it becomes a serpent; stretched over the sea it parts the waters; struck against a rock it brings forth water.",
    firstRecord: "Book of Exodus",
    summary: "The rod with which Moses led the Israelites out of Egypt. It parted the Red Sea and drew water from the rock.",
    story: `While tending sheep in the land of Midian, Moses saw on Mount Horeb a bush that burned but was not consumed. God called him to lead the Israelites out of Egypt and asked what was in his hand. When Moses threw down his shepherd's staff it became a serpent, and when he caught it by the tail it became a staff again.

Before Pharaoh, the staff Aaron threw down became a serpent and swallowed the serpents of the Egyptian magicians. When Moses struck the Nile with the staff its water turned to blood, and ten plagues fell on Egypt. Standing at the Red Sea with the Egyptian army behind them, Moses raised his staff and stretched his hand over the sea, and the waters parted to open a dry path.

In the wilderness, when the people were thirsty, Moses struck a rock with his staff and water came out. In the Book of Numbers, Aaron's staff sprouted, blossomed and bore almonds overnight, and it was kept before the Ark of the Covenant.`,
    imageAlt: "A black-and-white photograph of the tapestry Moses Striking the Rock, woven in Florence, Italy, about 1650–57. In the center Moses strikes a rock with his rod as people gather around; at the top is a panel with a Latin inscription, and the sides are decorated with columns and cherubs.",
    annotations: [
      n("Moses with the rod", "The figure in the center stretching out his rod to strike the rock is Moses. Water gushed from the rock and saved the thirsty people."),
      n("Latin inscription", "The upper panel is woven with Latin meaning: let the heart of man, stubborn against God's kindness, blush before the rock that obeyed the blows of Moses."),
      n("Border decoration", "A border of columns and cherubs. This is one tapestry of a Life of Moses series woven in Florence after designs by Agostino Melissi."),
    ],
  },
  "jawbone-of-samson": {
    title: "Jawbone of Samson",
    owner: "Samson, judge of Israel",
    maker: "Unknown",
    power: "With the jawbone of a newly dead donkey he struck down a thousand Philistines.",
    firstRecord: "Book of Judges",
    summary: "The donkey's jawbone Samson snatched up from the ground. With it alone he struck down a thousand Philistines.",
    story: `Samson was a Nazirite, dedicated to God from birth, and as long as his hair was never cut, no one could match his strength. He tore apart a lion with his bare hands and set the Philistines' wheat fields on fire by tying torches to the tails of three hundred foxes.

When the Philistines invaded, the frightened men of Judah bound Samson with two new ropes and handed him over. At Lehi, as the Philistines rushed at him shouting, the ropes that bound him melted like flax burned in fire. Samson picked up the fresh jawbone of a donkey lying on the ground and with it struck down a thousand Philistines.

"With the jawbone of a donkey, heaps upon heaps; with the jawbone of a donkey I have slain a thousand men." So Samson sang, threw the jawbone away and named the place Jawbone Hill. When he was parched with thirst, God split open a hollow at Lehi and water came out.`,
    imageAlt: "Samson, an oil painting by Valentin de Boulogne, about 1630–31. A young man with curly hair sits wrapped in a red cloak, his chin resting on his hand, with a donkey's jawbone beneath his arm, looking out at the viewer.",
    annotations: [
      n("Donkey's jawbone", "Beneath his arm lies the jawbone of a donkey. With this jawbone alone, Samson struck down a thousand Philistines."),
      n("Thoughtful face", "Samson rests his chin on his hand, lost in thought. The French painter Valentin de Boulogne, who worked in Rome, painted it about 1630–31."),
      n("Red cloak", "A red cloak over his shoulders. Samson's strength came from his hair, which had never been cut."),
    ],
  },
  "davids-sling": {
    title: "Sling of David",
    owner: "David the shepherd (later king of Israel)",
    maker: "Unknown",
    power: "With one smooth stone chosen from a brook, it brought down the giant Goliath.",
    firstRecord: "First Book of Samuel",
    summary: "The sling with which the shepherd boy David felled the giant Goliath. A single stone sank into the giant's forehead.",
    story: `The armies of the Philistines and of Israel faced each other across the Valley of Elah. From the Philistine camp came the giant Goliath, six cubits and a span tall, in a bronze helmet and coat of scale armor, and for forty days, morning and evening, he challenged Israel to single combat, but no one dared to come forward.

The shepherd boy David, who had brought food to his brothers, came forward. King Saul put his own armor on him, but David took it off, saying he was not used to it, and took up his shepherd's staff and his sling, chose five smooth stones from the brook and put them in his bag. Goliath, seeing a boy coming at him with a stick, mocked him, asking whether he took him for a dog.

David cried, "You come to me with sword and spear, but I come in the name of the Lord of hosts," and slung a single stone. It sank into Goliath's forehead, and the giant fell face down on the ground. David drew Goliath's own sword and ended the fight.`,
    imageAlt: "David Triumphant over Goliath, a bronze plaquette by the Italian sculptor Moderno, about 1490–1510. The naked boy David stands with his sling hanging down, and Goliath's head and fallen body lie at his feet.",
    annotations: [
      n("Hanging sling", "The cord and pouch hanging from his hand are a sling. David brought down the giant with one smooth stone chosen from the brook."),
      n("Goliath's head", "The giant Goliath's head lies at David's feet. When the stone sank into Goliath's forehead and he fell, David finished him with the giant's own sword."),
      n("Fallen giant", "The headless body of the fallen giant. This small bronze plaquette was made by the Italian sculptor Moderno in the late fifteenth or early sixteenth century."),
    ],
  },
  nehushtan: {
    title: "Brazen Serpent",
    owner: "Moses, later the people of Jerusalem",
    maker: "Moses",
    power: "Whoever had been bitten by the fiery serpents lived when he looked at the bronze serpent on the pole.",
    firstRecord: "Book of Numbers",
    summary: "The bronze serpent Moses set on a pole in the wilderness. Anyone bitten by a snake who looked at it lived.",
    story: `Wandering in the wilderness, the Israelites complained against God and Moses that they had neither food nor water. Then fiery serpents appeared and bit the people, and many died. When the people repented, Moses prayed for them.

God told him to make a fiery serpent and set it on a pole. Moses made a serpent of bronze and set it on a pole, and whoever had been bitten lived when he looked at the bronze serpent. The Gospel of John recalls it: "As Moses lifted up the serpent in the wilderness, even so must the Son of Man be lifted up."

The bronze serpent remained in Jerusalem for centuries. According to the Book of Kings, when the people called it Nehushtan and burned incense before it, King Hezekiah of Judah broke it in pieces to put an end to idol worship.`,
    imageAlt: "Moses Praying to End the Serpents' Attack on the Israelites, painted in Allahabad in the Mughal Empire, 1602–4. On a hillside Moses prays with both hands raised, while below him people bitten by snakes fall or writhe.",
    annotations: [
      n("Praying Moses", "The old man praying to heaven with both hands raised is Moses. God told him to make a serpent of bronze and set it on a pole."),
      n("People bitten by snakes", "Below, people bitten by snakes fall and writhe. This is a page from the Mirror of Holiness, a book of Christian stories made in 1602–4 for the Mughal prince Salim."),
      n("Snakes", "Thin snakes slither among the people. Whoever had been bitten lived when he looked at the bronze serpent on the pole."),
    ],
  },
  "crown-of-thorns": {
    title: "Crown of Thorns",
    owner: "Jesus",
    maker: "Roman soldiers",
    power: "A crown woven to mock a king, yet every one of its thorns came to be venerated as a relic.",
    firstRecord: "Gospel of Mark",
    summary: "The crown of thorns Roman soldiers put on Jesus. King Louis IX of France built the Sainte-Chapelle to house it.",
    story: `According to the Gospel of Mark, the Roman soldiers who took Jesus clothed him in purple, wove a crown of thorns and put it on him. They saluted him, "Hail, King of the Jews!", struck his head with a reed and spat on him. It was a crown meant to mock a king.

The crown later became one of the most precious relics. There are records of pilgrims venerating it in Jerusalem in the early fifth century, and later it was kept in the imperial palace of Constantinople. In 1238, when Baldwin II, the impoverished emperor of the Latin Empire, pawned it to Venetian merchants, King Louis IX of France paid the debt and brought it to Paris.

Louis IX built the Sainte-Chapelle, enclosed in stained glass, within his palace to house the crown. Thorns taken from it were distributed among reliquaries all over Europe. The crown, kept in the Cathedral of Notre-Dame, was rescued from the flames of the 2019 fire.`,
    imageAlt: "The right wing of a diptych painted in tempera and gold on oak in Styria, Austria, about 1400. Above, two men press the crown of thorns onto the head of the seated Christ with crossed staves; below, Christ prays in the garden while his disciples sleep.",
    annotations: [
      n("Crown of thorns", "Christ sits wearing the crown of thorns and a red robe. The soldiers plaited a crown of thorns, put a reed in his hand and mocked him as King of the Jews."),
      n("Men with staves", "Two men on either side press the crown onto his head with crossed staves, a scene often painted in late medieval northern Europe. Louis IX of France built the Sainte-Chapelle in his Paris palace to house the crown of thorns."),
      n("Garden of Gethsemane", "The lower panel shows Christ praying in the Garden of Gethsemane on the night before his arrest, while his disciples sleep. It is the right wing of a diptych painted in Styria, Austria, about 1400."),
    ],
  },
  "true-cross": {
    title: "The True Cross",
    owner: "The church of Jerusalem, later many churches",
    maker: "Unknown",
    power: "When no one knew which was Christ's cross, it is said that a dying woman rose up when it touched her.",
    firstRecord: "Cyril of Jerusalem, Catechetical Lectures",
    summary: "The cross of Christ that Helena, mother of Emperor Constantine, is said to have found in Jerusalem. Its fragments were scattered to churches all over the world.",
    story: `In the fourth century, Bishop Cyril of Jerusalem wrote that the wood of the cross on which Christ was crucified had been divided into fragments and spread throughout the world. A little later, Bishop Ambrose of Milan told how Helena, mother of Emperor Constantine, had found that cross in Jerusalem.

According to legend, Helena dug at Golgotha and found three crosses. Since no one could tell which was Christ's, they touched each one to a dying woman, and the moment the third cross touched her, she rose up. On that spot Constantine built the Church of the Holy Sepulchre.

In 614 a Persian army took Jerusalem and carried off the cross, and the Byzantine emperor Heraclius brought it back in 630. Fragments of the cross were placed in cross-shaped reliquaries adorned with gold and gems and kept in churches throughout Europe.`,
    imageAlt: "A reliquary of the True Cross. A double-armed cross from the Kingdom of Jerusalem, about 1214, is set in a thirteenth-century gilt-silver panel from the Rhine-Meuse region, amid rows of almond shapes pierced with quatrefoils and within a Latin inscription.",
    annotations: [
      n("Double-armed cross", "A fragment of the True Cross is enshrined in the double-armed cross set in the center. The cross was made about 1214 in the Kingdom of Jerusalem, founded by the crusaders."),
      n("Quatrefoil openings", "Almond-shaped frames with quatrefoil openings are set in rows across the panel. The panel was made in the Rhine and Meuse region in the thirteenth century."),
      n("Inscribed border", "A Latin inscription in black niello runs along the border. The fragments of the cross Helena is said to have found were enshrined in caskets like this, adorned with gold and silver, all over Europe."),
    ],
  },
  "gifts-of-the-magi": {
    title: "Gifts of the Magi",
    owner: "The infant Jesus",
    maker: "The Magi from the East",
    power: "Gold was taken to signify a king, frankincense a god, and myrrh death.",
    firstRecord: "Gospel of Matthew",
    summary: "The gold, frankincense and myrrh that the Magi, following a star from the East, offered to the infant Jesus.",
    story: `According to the Gospel of Matthew, when Jesus was born, Magi from the East saw a star and came to Jerusalem asking where the child born king of the Jews was. King Herod asked them to let him know when they found the child. The star went ahead of the Magi and stopped over the place in Bethlehem where the child was.

The Magi bowed down before the child, opened their treasure chests and offered gold, frankincense and myrrh. In the second century, Irenaeus explained that gold befits a king, frankincense a god, and myrrh one who is to die. Warned in a dream not to return to Herod, the Magi went home by another road.

The Gospel does not say how many Magi there were, but because there were three gifts they came to be counted as three, and later they were pictured as kings. A sixth-century mosaic in Ravenna, Italy, names them Caspar, Melchior and Balthasar. Cologne Cathedral in Germany houses a great golden shrine said to contain their relics.`,
    imageAlt: "The Adoration of the Magi, painted by the Sienese artist Giovanni di Paolo about 1440–45. Before a stable the Virgin holds the infant Jesus on her lap, while a kneeling old king, two kings in golden robes and a mounted retinue have come to the child.",
    annotations: [
      n("King kissing the child's foot", "The oldest of the Magi kneels and kisses the foot of the infant Jesus. The Sienese painter Giovanni di Paolo painted this about 1440–45."),
      n("King removing his crown", "The second king bows and takes off his crown. The Magi offered the child gold, frankincense and myrrh."),
      n("Young king", "The youngest king, in golden robes, waits his turn. A sixth-century mosaic in Ravenna names the three Magi Caspar, Melchior and Balthasar."),
    ],
  },
  "golden-calf": {
    title: "The Golden Calf",
    owner: "The people of Israel in the wilderness",
    maker: "Aaron",
    power: "The idol the people worshiped as the god who had brought them out of Egypt.",
    firstRecord: "Book of Exodus",
    summary: "The calf Aaron cast from melted gold earrings while Moses was on the mountain. Moses ground it to powder.",
    story: `When Moses had been on Mount Sinai for forty days receiving the law from God and still did not come down, the people crowded around Aaron and asked him to make a god to go before them. Aaron collected the people's gold earrings, melted them and cast the image of a calf.

The people said, "These are your gods, O Israel, who brought you up out of the land of Egypt," offered sacrifices before the calf, and ate, drank and danced. Coming down from the mountain, Moses saw them and in his anger threw down the two stone tablets in his hands and broke them at the foot of the mountain.

Moses burned the golden calf, ground it to powder, scattered it on water and made the people drink it. The bull was an image of divine strength and fertility in ancient Egypt and Canaan. The Book of Kings records that King Jeroboam of northern Israel later set up golden calves at Bethel and Dan.`,
    imageAlt: "Bull Calf Polemount, a Sumerian basalt ornament of about 2700 BCE. A black calf lies with its legs folded and its head raised, with a twisted cord around its neck and body.",
    annotations: [
      n("Calf's head", "The calf's raised head. Sumerians carved it from hard basalt about 2700 BCE."),
      n("Twisted cord", "A twisted cord is wrapped around the neck and body. It seems to have been an ornament fixed to the top of a pole."),
      n("Folded legs", "The calf lies with its legs folded. Aaron melted the people's gold earrings and cast an image of a calf."),
    ],
  },
  "trumpets-of-jericho": {
    title: "Trumpets of Jericho",
    owner: "The priests of Israel",
    maker: "Unknown (rams' horns)",
    power: "Blown long on the seventh day after circling the city seven times, they brought down the walls of Jericho with the people's shout.",
    firstRecord: "Book of Joshua",
    summary: "The rams' horn trumpets the priests blew as they circled Jericho. On the last day, with a great shout, the walls fell.",
    story: `Joshua, who succeeded Moses, led the people of Israel across the Jordan to Jericho, the first city of the land of Canaan. Jericho shut its gates tight and let no one go in or out.

God told Joshua: for six days let the soldiers march around the city once a day, and let seven priests carrying seven rams' horn trumpets walk before the Ark. On the seventh day, march around the city seven times, and when the priests sound a long blast, let the people raise a great shout. They did so, and the walls of Jericho fell down.

A trumpet made from a ram's horn is called a shofar in Hebrew. The shofar is still blown in synagogues on Rosh Hashanah, the Jewish New Year, and at the end of Yom Kippur, the Day of Atonement.`,
    imageAlt: "A Jewish shofar (horn trumpet) of the eighteenth or nineteenth century. A long, slender, pale horn turns upward and widens at one end, where the rim is carved into teeth.",
    annotations: [
      n("Upturned bell", "The wide end where the sound comes out is turned upward and its rim carved like teeth. This shofar was used by a Jewish community in the eighteenth or nineteenth century."),
      n("Mouthpiece", "The narrow end where the player blows. On the seventh day, when the priests sounded a long blast on their shofars and the people shouted, the walls of Jericho fell."),
      n("Long body", "A long body shaped from an animal's horn. The shofar is still blown on the Jewish New Year and the Day of Atonement."),
    ],
  },
  "holy-ampulla": {
    title: "Holy Ampulla",
    owner: "The French royal house (Reims)",
    maker: "Unknown (brought from heaven by a dove)",
    power: "It held the oil with which French kings were anointed at their coronation, and it was said to refill itself after use.",
    firstRecord: "Hincmar of Reims, Life of Remigius",
    summary: "The flask of oil a dove is said to have brought from heaven at the baptism of Clovis. French kings were anointed with this oil at their coronations.",
    story: `On Christmas Day around 496, Clovis, king of the Franks, was baptized by Bishop Remigius at Reims. According to legend, the crowd was so dense that the cleric carrying the holy oil could not get through, so Remigius prayed, and a white dove came down from heaven carrying a small flask of oil.

After Hincmar, archbishop of Reims in the ninth century, wrote this story into his life of Remigius, the flask was kept in the Abbey of Saint-Remi in Reims. From then on French kings were crowned in Reims Cathedral after being anointed with chrism mixed with a drop of oil from this flask. The oil was said to refill itself after use.

In 1793, during the French Revolution, Ruhl, a member of the National Convention, smashed the flask in a square in Reims. A new flask holding fragments and oil that had been secretly saved was used at the coronation of Charles X in 1825, the last coronation in France.`,
    imageAlt: "Both faces of a pilgrim's ampulla from Palestine, about 600. The flat, round flask is made of a lead and tin alloy, stamped with the Crucifixion on the front and the Ascension on the back, with lettering running around the edges.",
    annotations: [
      n("Crucifixion on the front", "The front is stamped with the Crucifixion and encircled by Greek lettering. Pilgrims in the Holy Land carried holy oil home in small flasks like this around 600."),
      n("Ascension on the back", "The back is stamped with Christ rising to heaven. The flask was cast in an alloy of lead and tin."),
      n("Neck", "The narrow neck that held the oil. According to legend, on the day Clovis was baptized, a dove came down from heaven carrying a small flask of oil."),
    ],
  },
  "eye-of-horus": {
    title: "Eye of Horus",
    owner: "Horus, the falcon god",
    maker: "Restored by Thoth, god of wisdom",
    power: "An amulet that heals what is hurt and keeps the body whole.",
    firstRecord: "Pyramid Texts",
    summary: "The eye of Horus, torn out in his battle with Seth. Restored by Thoth, it became the most common protective amulet in Egypt.",
    story: `When Osiris was killed by his brother Seth, his son Horus, the falcon god, fought a long battle with Seth for his father's throne. During the fight Seth tore out Horus's eye and ripped it to pieces.

Thoth, god of wisdom, gathered the scattered pieces and restored the eye. The eye brought back to life in this way was called the wedjat, "the sound one." In the Pyramid Texts, Horus offers his recovered eye to his dead father Osiris to bring him back to life. The moon, which wanes and waxes again, was seen as the eye of Horus being hurt and healed.

The wedjat eye, drawn with a brow and the markings of a falcon's cheek, became the most common amulet in Egypt. The living wore it to ward off sickness and bad luck, and it was placed between the wrappings of mummies to keep the bodies of the dead whole.`,
    imageAlt: "A wedjat eye amulet from Egypt's Third Intermediate Period, about 1080–664 BCE. A white eye with a black pupil is inlaid in a sky-blue faience plaque, with a heavy brow above and the falcon's cheek markings worked in openwork below.",
    annotations: [
      n("Eye", "The eye is made of inlaid white and black stone. It is the wedjat, the eye of Horus torn out by Seth and restored by Thoth."),
      n("Brow", "A heavy brow with slanting lines runs above the eye. This amulet dates from Egypt's Third Intermediate Period, about 1080–664 BCE."),
      n("Openwork", "Below, the falcon's cheek markings and small figures are worked in openwork. Amulets like this were placed between the wrappings of mummies to keep the bodies of the dead whole."),
    ],
  },
  "tablet-of-destinies": {
    title: "Tablet of Destinies",
    owner: "Enlil, king of the gods, later Marduk",
    maker: "Unknown",
    power: "Whoever holds it decides the fates of gods, people and the world, and rules the universe.",
    firstRecord: "The Epic of Anzu (Old Babylonian version)",
    summary: "The tablet by which its holder decides the destiny of the universe. The monstrous bird Anzu stole it, and the war god Ninurta took it back.",
    story: `The people of Mesopotamia believed that the king of the gods held the Tablet of Destinies and with it decided the fates of gods, people and the world. In the Epic of Anzu the tablet belonged to Enlil, god of heaven and earth.

One day, while Enlil laid down his crown and the tablet to bathe, Anzu, the lion-headed eagle who kept his door, stole the tablet and flew off to the mountains. All the commands of the gods stopped, and arrows shot at Anzu, who held the tablet, turned back at a single word: "Reed, return to your canebrake." With the advice of Ea, god of wisdom, the war god Ninurta cut off Anzu's wings and recovered the tablet.

In the Babylonian creation epic Enuma Elish, Tiamat, goddess of the sea, gave the tablet to her champion Kingu. The young god Marduk defeated them, took the tablet, fastened it on his own breast and so became king of the gods.`,
    imageAlt: "A bronze tablet inscribed in cuneiform from Iran, about 850–750 BCE. A small tab rises from the top center of the dark, rectangular bronze plate, which is covered with incised cuneiform signs.",
    annotations: [
      n("Upper tab", "A small tab rises at the top. This bronze tablet was made in Iran about 850–750 BCE."),
      n("Incised cuneiform", "Cuneiform signs are incised into the bronze. The Mesopotamians believed that the fate of the world was written on the Tablet of Destinies held by the king of the gods."),
      n("Faded lower part", "The signs at the bottom are blurred under corrosion. The monstrous bird Anzu stole the tablet and fled to the mountains, but the war god Ninurta took it back."),
    ],
  },
  "plant-of-rejuvenation": {
    title: "Gilgamesh's Plant of Rejuvenation",
    owner: "Gilgamesh, king of Uruk",
    maker: "Unknown",
    power: "Eaten, it makes an old man young again.",
    firstRecord: "Epic of Gilgamesh (Standard Babylonian version)",
    summary: "The plant called \"the old man grows young\" that Gilgamesh dug up from under the water. While he bathed, a snake carried it off.",
    story: `When his friend Enkidu died, Gilgamesh, king of Uruk, terrified of death, set out in search of eternal life. At the end of the world he met Utnapishtim, who had survived the great flood and been granted immortality by the gods, but immortality could not be granted again.

As Gilgamesh was leaving empty-handed, Utnapishtim told him a secret: deep under the water grows a plant like a thornbush, and whoever eats it becomes young again. Gilgamesh tied heavy stones to his feet, sank to the bottom and dug up the plant, though its thorns pricked his hands. He named it "the old man grows young" and said he would take it home and give it to the old men to eat.

On the way back, while Gilgamesh was bathing in a cool spring, a snake smelled the plant, came up and carried it off, shedding its skin as it went. Gilgamesh sat down and wept. They say snakes shed their skins and are born anew because they ate that plant.`,
    imageAlt: "An Assyrian shell inlay plaque of the ninth to eighth century BCE, in the shape of a tree with pointed leaves fanning out at the top and a trunk with chevron markings running downward.",
    annotations: [
      n("Fanned leaves", "A tree with pointed leaves spread like a fan is carved in shell. Plaques like this decorated furniture in ninth- to eighth-century BCE Assyria."),
      n("Chevron trunk", "A trunk carved with chevrons. The Assyrians loved to carve such sacred trees on palace walls and furniture."),
      n("Side branch", "A short branch at the lower part. The plant Gilgamesh dug up from under the water is said to have been like a thornbush."),
    ],
  },
  sharur: {
    title: "Sharur",
    owner: "Ninurta, the Sumerian war god",
    maker: "Unknown",
    power: "It speaks, flies off on its own to spy on the enemy, and reports back to its master.",
    firstRecord: "Sumerian myth Lugal-e",
    summary: "The talking mace of the god Ninurta. It flew off on its own to spy on enemies and brought back counsel from the king of the gods.",
    story: `Ninurta, the Sumerian god of war, carried a mace called Sharur, meaning "smasher of multitudes." Sharur could speak, and it flew off on its own to spy on the enemy and came back to report to its master.

In Lugal-e, Sharur tells Ninurta that Asag, a monster born in the mountains, is ravaging the land with an army of stone warriors. When Ninurta is driven back in the first battle, Sharur flies to Enlil, king of the gods, and returns with his counsel, and Ninurta at last defeats Asag.

After the battle Ninurta piled up stones to make the mountains and gathered the waters flowing down from them into the Tigris to water the fields. He cursed the stones that had sided with Asag and blessed those that had sided with him, giving each kind of stone its use.`,
    imageAlt: "A pink limestone mace head from Predynastic Egypt, about 3650–3100 BCE. A face is carved on the front of the pear-shaped body, with a long nose, two drilled eyes and a thin mouth, and pierced knobs project from both sides.",
    annotations: [
      n("Face on the front", "Two eyes are drilled above a long nose, with a thin mouth incised below. Ninurta's mace Sharur could speak, flew off on its own to spy on the enemy and reported back to its master."),
      n("Side knobs", "Pierced knobs are carved on both sides of the body. The mace head is small: 4 cm high and 5.6 cm wide."),
      n("Pink limestone body", "Pink limestone is carved into a pear shape and polished smooth. It dates from Predynastic Egypt, about 3650–3100 BCE, and is among the very early real mace heads."),
    ],
  },
  "inannas-jewels": {
    title: "Seven Ornaments of Inanna",
    owner: "Inanna, queen of heaven",
    maker: "Unknown",
    power: "Seven ornaments holding the goddess's powers. With each one she removes, she loses her strength.",
    firstRecord: "Sumerian myth \"Inanna's Descent to the Underworld\"",
    summary: "The ornaments Inanna gave up one by one at each of seven gates on her way down to the underworld. At the last gate she lost all her power.",
    story: `Inanna, queen of heaven, decided to descend to the underworld ruled by her sister Ereshkigal. She put on seven divine powers: on her head the shugurra crown, at her neck small lapis lazuli beads, on her breast a double strand of beads, a breastplate, a gold ring on her hand, a lapis lazuli measuring rod and line in her hand, and a royal robe. She told her servant Ninshubur to seek help from the gods if she did not return in three days.

The underworld had seven gates. At each gate the gatekeeper Neti made her take off one ornament, and whenever Inanna asked why, he only answered, "Quiet, Inanna. The ways of the underworld are perfect." Passing the seventh gate, Inanna stood naked before Ereshkigal, and when the judges of the underworld fixed on her the eye of death, she became a corpse hung on a hook.

Hearing Ninshubur's plea, Enki, god of wisdom, fashioned two beings from the dirt under his fingernails and sent them with the food and water of life, and Inanna came back to life. But by the law of the underworld she had to give up someone to take her place, and she gave up her husband Dumuzi, who had not mourned for her.`,
    imageAlt: "A Sumerian headdress of about 2600–2500 BCE. Thin sheets of gold cut into leaf shapes hang in a row from a string of blue lapis lazuli and red carnelian beads.",
    annotations: [
      n("Gold leaves", "Thin sheet gold is cut into leaf shapes and hung on the string. This headdress came from the royal tombs of Ur in Sumer, about 2600–2500 BCE."),
      n("Lapis and carnelian", "Blue lapis lazuli and red carnelian beads are strung in alternation. Inanna, too, wore lapis lazuli beads at her neck when she went down to the underworld."),
      n("Crescent ornament", "A small crescent-shaped gold ornament at the end. At each of the seven gates of the underworld, Inanna had to take off one ornament."),
    ],
  },
  "jinni-bottle": {
    title: "The Jinni's Brass Bottle",
    owner: "A poor fisherman",
    maker: "King Solomon (who imprisoned and sealed the jinni)",
    power: "Sealed with Solomon's seal, it keeps the jinni inside from escaping.",
    firstRecord: "The oldest Arabic manuscript of The Thousand and One Nights",
    summary: "A brass bottle caught in a fisherman's net. When he opened the lid Solomon had sealed, a huge jinni rose out like smoke.",
    story: `A poor fisherman had resolved to cast his net only four times a day. One day his fourth cast brought up a heavy brass bottle. Its mouth was sealed with lead, stamped with the seal of King Solomon.

When the fisherman pried off the lead with his knife, smoke poured out of the bottle and reached the sky, then became a gigantic jinni. It was a jinni who had defied Solomon and been shut in the bottle and thrown into the sea. For the first hundred years, he said, he had sworn to make whoever freed him rich, but when no one came for centuries he changed his oath and swore to kill whoever freed him, and he told the fisherman to choose how he would die.

The fisherman, thinking fast, said he could not believe such a huge body had fitted into this little bottle. The angry jinni turned into smoke and went back into the bottle to show him, and the fisherman quickly shut the lid and sealed it again. In The Thousand and One Nights, this story becomes the first link in a chain of tales that follow.`,
    imageAlt: "An inlaid brass container from northern Iraq, about 1250–1350. A round box with a knobbed lid is inlaid with silver and gold in dense patterns, Arabic lettering and a seated figure, with clasps on both sides to lock the lid.",
    annotations: [
      n("Knobbed lid", "A ring knob tops the lid. The jinni's bottle had a lid sealed with lead and stamped with the seal of Solomon."),
      n("Seated figure", "In the round panel at the center, a cross-legged figure is inlaid in silver. This box was hammered from sheet brass in northern Iraq about 1250–1350."),
      n("Band of lettering", "Arabic lettering is inlaid in gold and silver in the band around the body. The jinni's bottle caught in the fisherman's net was also made of brass."),
    ],
  },
  "book-of-thoth": {
    title: "Book of Thoth",
    owner: "Prince Naneferkaptah, later Setne Khaemwaset",
    maker: "Thoth, god of wisdom",
    power: "Its first spell charms sky, earth and sea and reveals the speech of beasts; its second lets one see the gods even after death.",
    firstRecord: "Egyptian Demotic tale \"Setne I\"",
    summary: "A book of magic said to be written by Thoth, god of wisdom, himself. The princes who laid hands on it paid a heavy price.",
    story: `Setne Khaemwaset, son of Ramesses II, was a renowned scholar and magician. In search of a book of magic said to have been written by Thoth, god of wisdom, himself, he entered the tomb of the ancient prince Naneferkaptah at Memphis. Inside, the book was glowing, and the spirits of Naneferkaptah and his wife Ahwere stood in his way.

Ahwere told him the story. Naneferkaptah had taken the book from the middle of the river at Coptos, where it lay in nested boxes of iron, copper, wood, ivory and ebony, silver and gold, guarded by snakes and scorpions. Reading its first spell, one could charm the sky, the earth and the sea and understand the speech of birds, fish and beasts; reading the second, one could see the gods of the sun and moon even after death. But through the anger of Thoth, Ahwere and her son drowned in the river, and Naneferkaptah threw himself into the water.

Setne carried off the book after a contest at a board game, but only after suffering terrible things did he return it to the tomb. The story survives in Demotic script on a papyrus of about the third century BCE.`,
    imageAlt: "A wooden scribe's palette from Egypt's New Kingdom, about 1540–1186 BCE. One end of the long wooden plank has two round wells for mixing ink, and a slot for reed pens runs along the middle.",
    annotations: [
      n("Ink wells", "Two round wells for mixing black and red ink. Thoth, god of wisdom, presided over writing and records."),
      n("Pen slot", "A long slot for keeping reed pens. This palette was used by a scribe in New Kingdom Egypt, about 1540–1186 BCE."),
      n("Wooden plank", "A long plank of carved wood. The Book of Thoth lay in the middle of a river in nested boxes of iron, copper, wood, ivory and ebony, silver and gold."),
    ],
  },
  "derafsh-kaviani": {
    title: "Banner of Kaveh",
    owner: "Kaveh the blacksmith, later the kings of Iran",
    maker: "Kaveh the blacksmith (his leather apron)",
    power: "The banner that rallied the people against a tyrant. Those who fought beneath it were believed to win.",
    firstRecord: "Ferdowsi, Shahnameh",
    summary: "The leather apron of Kaveh the blacksmith, who rose against the tyrant Zahhak. Adorned with jewels, it became the banner of the Iranian kings.",
    story: `In the Shahnameh, two serpents grew from the shoulders of the tyrant Zahhak where a demon had kissed him. The serpents were calmed only by eating the brains of young men every day, and the people lost their sons one after another. Kaveh the blacksmith lost seventeen of his eighteen sons.

When even his last son was to be taken, Kaveh stormed into the palace and tore up the document declaring Zahhak just. He hung the leather apron he wore at his forge on the tip of a spear, held it high and went into the streets, and the people gathered beneath it. They went to Fereydun, a prince living in hiding, and overthrew Zahhak.

Fereydun adorned Kaveh's leather apron with silk and jewels and made it the royal banner. This "Banner of Kaveh" was kept by generations of Iranian kings, each adding more jewels, until, it is said, it was captured by the Arab army in 636 and cut into pieces.`,
    imageAlt: "A brass processional standard ('alam) of the late seventeenth to early eighteenth century. Below a top pointed like a spearhead, leaf-shaped blades spread out, and two dragons on either side curve around a round plaque pierced with lettering.",
    annotations: [
      n("Spear-shaped top", "A blade pointed like a spearhead rises at the top. This is a standard ('alam) carried high at the head of processions in the Islamic world in the late seventeenth or early eighteenth century."),
      n("Dragon heads", "Dragons rear their heads on both sides. Kaveh hung the leather apron from his forge on the tip of a spear, held it high and rallied the people."),
      n("Pierced lettering", "Lettering is pierced through the central round plaque. Adorned with jewels, Kaveh's apron became the banner of the Iranian kings for generations."),
    ],
  },
  "cup-of-jamshid": {
    title: "Cup of Jamshid",
    owner: "King Kay Khosrow (Shahnameh); in later poetry, King Jamshid",
    maker: "Unknown",
    power: "Look into the cup and everything happening in the seven heavens and the whole world is reflected in it.",
    firstRecord: "Ferdowsi, Shahnameh",
    summary: "A cup that reflects the whole world. With it King Kay Khosrow found the hero Bizhan imprisoned in a pit.",
    story: `The Iranian hero Bizhan fell in love with Manizheh, princess of Turan, and was caught by her father, King Afrasiyab of Turan, and thrown into a deep pit. Its mouth was blocked with a huge boulder. Bizhan's father Giv went to Kay Khosrow, king of Iran, and begged him in tears for help.

When Nowruz, the New Year, came, Kay Khosrow prayed to God and looked into a cup. In it the seven heavens and every land on earth were reflected. In the cup the king found Bizhan imprisoned in the pit in the land of Turan, and he sent the hero Rostam to rescue him.

In the Shahnameh this cup belongs to Kay Khosrow, but later Persian poets called it the cup of Jamshid, the ancient sage-king: the Jam-e Jam. The fourteenth-century poet Hafez sang, "For years my heart sought the cup of Jam from me, begging from strangers what it held itself."`,
    imageAlt: "The Wade Cup, a brass cup inlaid with silver from Seljuq Iran, about 1200–1221. The outside of the footed round bowl is densely inlaid in silver with Arabic letters ending in human heads and with horsemen.",
    annotations: [
      n("Letters with heads", "In the band below the rim, the ends of the Arabic letters turn into human heads. Such writing is called animated script."),
      n("Horsemen", "Horsemen and animals are inlaid in silver on the body. This brass cup was made in Iran under the Seljuqs about 1200–21."),
      n("Foot", "A wide, flaring foot. On New Year's Day, Kay Khosrow looked into his cup and found Bizhan imprisoned in a pit in the land of Turan."),
    ],
  },
  "simurgh-feather": {
    title: "Feather of the Simurgh",
    owner: "The hero Zal and his son Rostam",
    maker: "The Simurgh, a divine bird",
    power: "Burn it, and wherever you are, the Simurgh will fly to your aid.",
    firstRecord: "Ferdowsi, Shahnameh",
    summary: "A feather left by the Simurgh, the divine bird that raised the abandoned baby Zal. When it was burned, the Simurgh came.",
    story: `A son was born to the Iranian hero Sam, but the baby's hair was white like an old man's. Thinking him the child of a demon, Sam abandoned him on Mount Alborz. The Simurgh, a divine bird that nested on the summit, carried the baby off and raised him with her own young, and he grew into the gallant young Zal.

When the repentant Sam came looking for his son, the Simurgh gave Zal some of her feathers as she let him go. If trouble came, she told him, he should burn a feather and she would fly to help him at once. Later, when Zal's wife Rudabeh was near death in childbirth, Zal burned a feather. The Simurgh came and showed how to deliver the child by cutting open her belly and how to heal the wound, and the child so born was Rostam, the greatest hero of Iran.

When Rostam was gravely wounded fighting the invincible prince Esfandiyar, Zal burned a feather again. The Simurgh healed Rostam's wounds and told him to make an arrow from a tamarisk branch and shoot Esfandiyar in the eyes.`,
    imageAlt: "A page from a Shahnameh made in Iran about 1330–40, \"Zal in the Simurgh's Nest.\" Persian verses fill several columns at the top and right; a small painting at lower left shows the great red-headed Simurgh, the naked child Zal on a rocky mountain and two white animals.",
    annotations: [
      n("Simurgh", "A great bird with a red head and many-colored wings looks down at the child on the rocky mountain. The Simurgh carried the baby Zal, abandoned because he was born white-haired, to her nest and raised him."),
      n("Young Zal", "The naked child Zal stands on the mountaintop. The painting is tiny, 5.6 cm wide and 8.1 cm high. It was painted in Iran about 1330–40."),
      n("Text of the poem", "Ferdowsi's verses are written in several columns. Sending Zal back to his father, the Simurgh gave him her feather, saying she would come if he burned it in time of trouble."),
    ],
  },
};
