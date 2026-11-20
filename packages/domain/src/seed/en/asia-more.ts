import type { EnArtifact } from "./types";

const n = (title: string, body: string) => ({ title, body });

/** 200점으로 늘리며 더한 인도·중국·일본·한국 유물의 영어 번역 */
export const EN_ASIA_MORE: Record<string, EnArtifact> = {
  brahmastra: {
    title: "Brahmastra",
    owner: "Drona, Arjuna, Ashwatthama, Rama",
    maker: "Brahma, the creator god",
    power: "Charged with a spell and loosed, it raises a fire terrible enough to set the sky ablaze and shake the earth.",
    firstRecord: "Mahabharata",
    summary: "The ultimate weapon, imbued with the power of the creator god Brahma. Once loosed, it was hard to call back.",
    story: `The brahmastra is a divine weapon imbued with the power of Brahma, the creator god. When a spell was breathed into an arrow or a blade of grass and it was loosed, a fire arose terrible enough to set the sky ablaze and shake the earth. So a teacher taught the spell only to his finest pupil.

As the great war of the Mahabharata neared its end, Ashwatthama, son of the teacher Drona, loosed a brahmastra at the Pandava brothers. Arjuna answered with the same weapon, and as the two were about to collide, sages fearing that the world would burn stood between them. Arjuna withdrew his weapon, but Ashwatthama did not know how to withdraw his, and turned its power against the unborn child of a Pandava woman. Krishna brought the child back to life, and Ashwatthama was stripped of the jewel in his forehead and cursed to wander for ages.

In the Ramayana, Rama pierced the chest of the demon king Ravana with the brahmastra he had received from the sage Agastya, and so ended the war.`,
    imageAlt: "Rama and Lakshmana Fighting Ravana, painted in the kingdom of Chamba in northern India about 1765. Within a red border, blue-skinned Rama draws his bow, and before him stands Ravana in red, with ten heads and twenty arms holding weapons.",
    annotations: [
      n("Rama drawing his bow", "Blue-skinned Rama aims an enchanted arrow. Rama pierced Ravana's chest with the brahmastra he had received from a sage."),
      n("Ten-headed Ravana", "Ravana, the demon king with ten heads and twenty arms. Each hand holds a weapon, and a donkey's head sits at the very top."),
      n("Lakshmana", "Behind him, holding a bow, is Rama's brother Lakshmana. This is a page from a series on the ten avatars of Vishnu painted in the kingdom of Chamba, northern India, about 1765."),
    ],
  },
  pinaka: {
    title: "Pinaka",
    owner: "Shiva, god of destruction, later the royal house of Mithila",
    maker: "Unknown",
    power: "A huge bow no one could lift. With it Shiva burned the three cities of the demons with a single arrow.",
    firstRecord: "Valmiki, Ramayana",
    summary: "Shiva's huge bow. Rama broke it while drawing it, and married Sita.",
    story: `Pinaka is the bow of Shiva, god of destruction. With it Shiva burned the three cities the demons had built in heaven, in the air and on earth with a single arrow, at the moment the three cities stood in a line, and he was called Destroyer of the Three Cities.

Shiva later entrusted the bow to the royal house of Mithila. According to the Ramayana, it was so heavy that it was carried on an eight-wheeled cart pulled by five thousand strong men. King Janaka of Mithila promised his daughter Sita to whoever could string the bow, but no king could even lift it.

The young prince Rama, who came to Mithila with his teacher, lifted the bow easily, strung it and drew it. At that moment the bow broke in the middle with a sound like thunder, and Rama married Sita. Parashurama, a devotee of Shiva, came in anger when he heard the news, but withdrew when he saw Rama draw even the bow of Vishnu.`,
    imageAlt: "A black-and-white photograph of a composite bow from Italy or Indo-Persia, about 1500. Unstrung, the bow curves deeply like a letter C, and both tips are carved as animal heads.",
    annotations: [
      n("Animal-head tip", "The tip of the bow is carved as an animal's head. This bow was made in Italy or Indo-Persia about 1500."),
      n("Grip", "The grip where the archer holds the bow. Wood, horn and sinew are glued in layers to give it spring."),
      n("Lower tip", "The lower tip is also shaped as an animal's head. Shiva's bow had to be pulled on a cart by five thousand men, but Rama lifted it easily and strung it."),
    ],
  },
  kaumodaki: {
    title: "Kaumodaki",
    owner: "Vishnu, god of preservation; Krishna",
    maker: "Unknown (given to Krishna by Varuna, god of the sea)",
    power: "When hurled, it smashes demons with a sound like thunder.",
    firstRecord: "Mahabharata",
    summary: "The mace Vishnu holds in one of his four hands. Varuna, god of the sea, gave it to Krishna in the Khandava forest.",
    story: `Vishnu is shown holding a conch, a discus, a mace and a lotus in his four hands. The mace is called Kaumodaki. Krishna, an avatar of Vishnu, also carried this mace.

According to the Mahabharata, Agni, god of fire, wanted to consume the Khandava forest, but Indra, who protected it, thwarted him every time with rain. When Krishna and Arjuna agreed to help Agni, Varuna, god of the sea, gave Arjuna the bow Gandiva and Krishna the mace Kaumodaki, and Agni gave Krishna the discus Sudarshana. When hurled, Kaumodaki smashed demons with a sound like thunder.

In Indian sculpture and painting, Kaumodaki sometimes stands beside Vishnu in the form of a woman, Gadadevi, "goddess of the mace."`,
    imageAlt: "An Indo-Persian steel mace (gada) of the seventeenth century. A ball-shaped fluted head sits at the end of a long, straight steel shaft, and the head and shaft are inlaid with gold designs here and there.",
    annotations: [
      n("Round head", "The ball-shaped head is fluted and decorated with gold. This is an Indo-Persian steel mace, or gada, of the seventeenth century."),
      n("Gold inlay", "Gold scrolls are inlaid where the shaft meets the head."),
      n("Long shaft", "A long, straight steel shaft. Vishnu's mace Kaumodaki smashed demons with a sound like thunder when hurled."),
    ],
  },
  panchajanya: {
    title: "Panchajanya",
    owner: "Vishnu, Krishna",
    maker: "Unknown (the conch in which the demon Panchajana lived under the sea)",
    power: "When blown, its sound shakes sky and earth and tears the hearts of the enemy.",
    firstRecord: "Mahabharata, Bhagavad Gita",
    summary: "The conch Krishna blew to open the battle of Kurukshetra. He won it from a demon under the sea.",
    story: `As boys, Krishna and his brother Balarama studied under the teacher Sandipani. When they finished and offered to repay him, the teacher asked for the return of his son, who had drowned in the sea. Krishna went down beneath the waves, defeated the demon Panchajana, who lived in a conch shell, and brought back the conch. Since the boy was in the realm of the dead, Krishna retrieved him from Yama, god of death, and returned him to his teacher.

That conch is Panchajanya, named after the demon. At the opening of the Bhagavad Gita, as the battle of Kurukshetra begins, Krishna blows Panchajanya and Arjuna blows Devadatta. The sound, it is said, echoed through sky and earth and tore the hearts of the enemy.

In Hinduism the conch is still blown to begin rituals. A conch that spirals to the right is especially rare and prized as belonging to Vishnu.`,
    imageAlt: "A ritual conch shell from the Khmer kingdom of Cambodia, twelfth century. The pointed conch is sheathed in carved bronze and stands on a three-legged stand decorated with serpent deities.",
    annotations: [
      n("Conch", "A conch blown at the start of rituals, sheathed in carved bronze. It comes from the twelfth-century Khmer kingdom of Cambodia and was probably used at the royal temple of Banteay Chhmar."),
      n("Hevajra", "The dancing Buddhist deity Hevajra is carved on the lower part."),
      n("Serpent stand", "A three-legged stand decorated with naga serpent deities. Krishna won the conch Panchajanya after defeating a demon under the sea."),
    ],
  },
  "pushpaka-vimana": {
    title: "Pushpaka Vimana",
    owner: "Kubera, god of wealth; the demon king Ravana; Rama",
    maker: "Vishwakarma, craftsman of the gods",
    power: "It flies wherever its master wishes, and however many ride it, there is always room for more.",
    firstRecord: "Valmiki, Ramayana",
    summary: "A heavenly chariot as beautiful as a flower. After defeating Ravana, Rama flew home to Ayodhya in it.",
    story: `Pushpaka is a heavenly chariot whose name means "flower." Vishwakarma, craftsman of the gods, built it for Brahma, the creator, and Brahma gave it to Kubera, god of wealth. Kubera's half-brother, the demon king Ravana, drove him out and seized the chariot along with the island of Lanka.

Pushpaka was like a golden palace shining like the sun, adorned with jeweled windows and banners. It flew wherever its master wished, and however many people rode in it, it is said, there was always room.

After Rama defeated Ravana, Ravana's brother Vibhishana gave Pushpaka to Rama. Rama flew to Ayodhya with Sita, Lakshmana, Hanuman and the monkey army, pointing out to Sita, one by one, the battlefields and forests they had passed. Diwali, India's festival of lights, is said to come from the lamps people lit to welcome Rama home that day.`,
    imageAlt: "A Ramayana painting from the Pahari region of northern India, about 1765: Enthroned Rama and Sita Receive Homage from Their Monkey and Bear Allies. Rama and Sita sit on a throne under a pink canopy, with monkeys and a bear at left and courtiers at right.",
    annotations: [
      n("Rama and Sita enthroned", "Rama and Sita sit on a throne under a pink canopy. After defeating Ravana, Rama returned to Ayodhya in the heavenly chariot Pushpaka."),
      n("Monkeys and bear", "The chiefs of the monkey and bear armies greet them with joined palms. This is a page from a Ramayana painted in the Pahari region of northern India about 1765."),
      n("Courtiers", "At right stand crowned figures and courtiers. However many rode in Pushpaka, it is said, there was always room."),
    ],
  },
  airavata: {
    title: "Airavata",
    owner: "Indra, king of the gods",
    maker: "Unknown (rose from the churning of the ocean of milk)",
    power: "With its trunk it draws up the waters of the underworld and sprays them into the clouds, so that Indra can send rain.",
    firstRecord: "Mahabharata",
    summary: "The white elephant Indra rides. It rose from the ocean of milk when the gods and demons churned it.",
    story: `To obtain amrita, the nectar of immortality, the gods and demons churned the ocean of milk, using Mount Mandara as the rod and Vasuki, king of serpents, as the rope. Treasures of every kind rose from the ocean, among them Airavata, a white elephant with four tusks. Indra, king of the gods, made the elephant his mount.

Airavata's name is understood to mean "born of the waters." According to legend, Airavata drew up the waters of the underworld with his long trunk and sprayed them into the clouds, and Indra sent rain from those clouds. He is also the elephant who guards the eastern sky.

Airavata was loved beyond India as well. In Thailand and Laos he was pictured as Erawan, a white elephant with three heads, and until 1975 the flag of the Kingdom of Laos bore a three-headed white elephant.`,
    imageAlt: "A sandstone elephant from the Champa kingdom of central Vietnam, about 900–950. The elephant stands with its ears spread wide and its trunk hanging down.",
    annotations: [
      n("Ears and head", "Ears spread wide and a rounded brow. This elephant was carved in sandstone at Tra Kieu in the Champa kingdom of central Vietnam about 900–950."),
      n("Hanging trunk", "A long, hanging trunk. Indra's elephant Airavata drew up the waters of the underworld with his trunk and sprayed them into the clouds."),
      n("Sturdy legs", "Thick forelegs. The people of Champa adopted Indian myth and art to adorn their temples."),
    ],
  },
  syamantaka: {
    title: "Syamantaka",
    owner: "Satrajit, Krishna",
    maker: "Surya, the sun god",
    power: "It produces gold every day, and the land where it is kept knows neither drought nor sickness.",
    firstRecord: "Harivamsa",
    summary: "The jewel the sun god gave to Satrajit. It produced gold every day, but suspicion and strife never ceased around it.",
    story: `Satrajit, a devotee of Surya, the sun god, received the jewel Syamantaka from the god. It shone like the sun, so that when he entered Dvaraka wearing it, people thought the sun god himself was coming. The jewel produced gold every day, and the land where it was kept knew neither drought nor sickness.

Satrajit's brother Prasena went hunting wearing the jewel and was killed by a lion; the lion was killed by Jambavan, king of the bears, and the jewel went into Jambavan's cave. People whispered that Krishna, who had coveted the jewel, had killed Prasena. To clear his name Krishna went into the forest, fought Jambavan for twenty-eight days and won back the jewel, and Jambavan, recognizing him as an avatar of Vishnu, gave him his daughter Jambavati in marriage.

Krishna returned the jewel to Satrajit, and the ashamed Satrajit gave his daughter Satyabhama to Krishna. But the strife over the jewel did not end, and Satrajit was killed by men who wanted it. In India there is still a saying that whoever looks at the moon on the night of the Ganesha festival will, like Krishna, be falsely accused.`,
    imageAlt: "Akrura and Kritavarma Flee Dvaraka, a page from the \"Large Basohli\" Bhagavata Purana painted in the Pahari region of northern India about 1760–65. Two men gallop on horseback across fields of overlapping green hills.",
    annotations: [
      n("Two fugitives", "Akrura and Kritavarma gallop out of Dvaraka. One of them carries the jewel Syamantaka, taken from King Satrajit."),
      n("Galloping horse", "A horse running with its forelegs outstretched. This is a page from a Bhagavata Purana painted in the Pahari region of northern India about 1760–65."),
      n("Overlapping hills", "Rounded hills and trees overlap. Syamantaka produced gold every day, but the strife around it never ended."),
    ],
  },
  "akshaya-patra": {
    title: "Akshaya Patra",
    owner: "The Pandava brothers and Draupadi",
    maker: "Surya, the sun god",
    power: "Every day, food flows from it without end until Draupadi has finished her meal.",
    firstRecord: "Mahabharata",
    summary: "The vessel the sun god gave the Pandava brothers when they were banished to the forest. Food never ran out until Draupadi had eaten.",
    story: `Having lost everything at a game of dice, the five Pandava brothers and their wife Draupadi had to live in the forest for twelve years. When they had no way to feed even the Brahmins who followed them, the eldest brother, Yudhishthira, prayed to Surya, the sun god. Surya sent down a copper vessel.

Every day, food came from this vessel without end until Draupadi had finished her meal. So it was called Akshaya Patra, "the inexhaustible vessel." Once Draupadi had eaten, no more came that day.

Some versions tell another story. Duryodhana, who hated the Pandavas, sent the irascible sage Durvasa and his disciples to them after Draupadi had eaten, and Draupadi turned to Krishna for help. Krishna ate a single leaf of greens stuck to the vessel, and the sage and his disciples, bathing in the river, all felt full and went away.`,
    imageAlt: "Draupadi Rescued from Abduction, a Mahabharata painting probably made at Bikaner in northern India about 1615. On a yellow ground two men grapple as if wrestling, with Draupadi behind them and onlookers standing at both sides.",
    annotations: [
      n("Draupadi", "The woman standing behind Bhima is Draupadi, wife of the five Pandava brothers. The sun god gave the Pandavas, living in the forest, a vessel from which food flowed without end."),
      n("Bhima and Jayadratha", "Bhima grapples with Jayadratha (in the orange loincloth), who tried to abduct Draupadi. This is a page from a Mahabharata painted at Bikaner, northern India, about 1615."),
      n("Onlookers", "At left, the Pandava brothers and attendants watch the fight. During the twelve years in the forest, food never ran out in the vessel until Draupadi had eaten."),
    ],
  },
  garuda: {
    title: "Garuda",
    owner: "Vishnu, god of preservation",
    maker: "Son of the sage Kashyapa and Vinata",
    power: "On wings no god could stop, he seized the nectar of immortality from heaven.",
    firstRecord: "Mahabharata",
    summary: "The king of birds, who carries Vishnu. To free his enslaved mother, he brought the nectar of immortality from heaven.",
    story: `Garuda's mother Vinata and Kadru, mother of serpents, made a wager on the color of the tail of the divine horse Uchchaihshravas. Kadru won by trickery, having her serpent children cling to the tail to make it look black, and Vinata became Kadru's slave. Garuda, who hatched from his egg blazing like fire, was told that the price of his mother's freedom was amrita, the nectar of immortality, from heaven.

Garuda flew to heaven, defeated the gods, passed an ever-spinning wheel of blades and two serpents breathing fire from their eyes, and seized the amrita. He did not drink a single drop, and Vishnu, seeing this, made him his mount. When Indra hurled his thunderbolt, Garuda let fall a single feather out of respect.

Garuda gave the amrita to the serpents and freed his mother, but while the serpents went to bathe, Indra took the amrita back. Licking the kusha grass where the vessel had stood, the serpents split their tongues in two, it is said. Garuda is the national emblem of Indonesia and Thailand today.`,
    imageAlt: "Vishnu Riding on Garuda, a schist sculpture from Bihar in eastern India, 300s CE. The crowned Vishnu sits astride Garuda, who has a human face and outspread wings, and tail feathers spread like rays behind his head.",
    annotations: [
      n("Vishnu", "The crowned Vishnu sits astride Garuda's shoulders. This sculpture was carved in schist in Bihar, eastern India, in the 300s."),
      n("Human-faced Garuda", "Garuda has a human face and wings spread wide. As the enemy of serpents, he wears a subdued serpent around his neck."),
      n("Rays of tail feathers", "Behind Vishnu's head, Garuda's tail feathers spread like rays. Because Garuda did not drink a drop of the nectar, he became Vishnu's mount."),
    ],
  },
  parashu: {
    title: "Axe of Parashurama",
    owner: "Parashurama, sixth avatar of Vishnu",
    maker: "Given by Shiva, god of destruction",
    power: "The axe given by Shiva. It cut off all the arms of a king who had a thousand.",
    firstRecord: "Mahabharata",
    summary: "The axe Shiva gave Parashurama. With it he swept away the warrior class twenty-one times.",
    story: `Parashurama, "Rama with the axe," is the sixth avatar of Vishnu. Born the son of the sage Jamadagni, he practiced austerities in devotion to Shiva, and Shiva gave him the sharp axe called parashu.

When Kartavirya Arjuna, the thousand-armed king of the Haihayas, carried off a sacred wish-granting cow from Jamadagni's hermitage, Parashurama pursued him with his axe, cut off all his thousand arms and killed him. When the king's sons killed Jamadagni in revenge, Parashurama swept the warrior class, the Kshatriyas, from the earth twenty-one times.

In the Mahabharata, Parashurama also appears as the teacher who trained Bhishma, Drona and Karna in the arts of war. There is a legend, too, that when he threw his axe into the sea, the sea drew back and land appeared, which became Kerala on India's west coast.`,
    imageAlt: "A steel battle axe from Sind, India, about 1800. A blade with a slanting edge sits at the end of a long, thin iron shaft, and the part joining the blade to the shaft is engraved with designs.",
    annotations: [
      n("Axe blade", "A steel blade with a slanting edge. This battle axe was made in Sind, India, about 1800."),
      n("Engraved collar", "The part joining the blade to the shaft is engraved. Parashurama fought the thousand-armed king with the axe Shiva had given him."),
      n("Thin shaft", "A long, thin steel shaft. There is also a legend that when Parashurama threw his axe into the sea, the sea drew back and land appeared."),
    ],
  },
  "houyis-bow": {
    title: "Yi's Red Bow",
    owner: "Yi the archer (Houyi)",
    maker: "Given by the heavenly emperor Di Jun",
    power: "A red bow strong enough to shoot suns out of the sky.",
    firstRecord: "Shan Hai Jing (Classic of Mountains and Seas)",
    summary: "The red bow the heavenly emperor gave Yi the archer. Yi shot down nine of the ten suns that had risen in the sky at once.",
    story: `In the time of Emperor Yao, ten suns rose in the sky at once. The ten suns were the sons of the heavenly emperor Di Jun and Xihe, who were supposed to rise one at a time, day by day. Crops and grass withered and burned, the people had nothing to eat, and all kinds of monsters appeared and preyed on them.

According to the Shan Hai Jing, the heavenly emperor Di Jun gave Yi the archer a red bow and white arrows to relieve the sufferings of the earth. The Huainanzi records that, at Yao's command, Yi shot down nine suns and killed the monsters, saving the people. Each time a sun fell, the three-legged crow that lived inside it fell dead too.

But the heavenly emperor, having lost his sons, would not take Yi back into heaven. Left on earth, Yi obtained the elixir of immortality from the Queen Mother of the West, but it fell into the hands of his wife Chang'e. Mencius records that Yi was finally killed by Feng Meng, his own pupil in archery.`,
    imageAlt: "An eight-lobed bronze mirror from the Tang dynasty, late seventh to early eighth century. Around the central knob, hunters on galloping horses aim their bows at fleeing animals, with flowers and butterflies in relief.",
    annotations: [
      n("Mounted hunter", "A hunter aims his bow from a galloping horse. This bronze mirror dates from the Tang dynasty, late seventh to early eighth century."),
      n("Animal-shaped knob", "The central knob, for threading a cord, is shaped like a crouching animal."),
      n("Lobed rim", "The rim is cut into eight petal-shaped lobes carved with butterflies and flowers. When ten suns rose in the sky, the archer Yi shot down nine of them with his red bow."),
    ],
  },
  "elixir-of-change": {
    title: "Chang'e's Elixir of Immortality",
    owner: "Chang'e, wife of Yi the archer",
    maker: "The Queen Mother of the West",
    power: "Whoever takes it does not die; the body grows light and floats up to the sky.",
    firstRecord: "Huainanzi",
    summary: "The elixir of immortality Yi obtained from the Queen Mother of the West. His wife Chang'e secretly took it and flew to the moon.",
    story: `Yi the archer went to the Queen Mother of the West on Mount Kunlun and obtained a medicine against death. But Yi's wife Chang'e secretly took the elixir and fled to the moon. The Huainanzi, compiled in 139 BCE, records it briefly: "Yi asked the Queen Mother of the West for the elixir of immortality, and Chang'e stole it and fled to the moon."

Zhang Heng of the Eastern Han said that Chang'e entrusted herself to the moon and became a toad, and later stories say she lives alone in the cold palace of the moon, the Guanghan Palace. On the moon live the Jade Rabbit, pounding the elixir of immortality, and Wu Gang, chopping at a cassia tree that grows back whole however often it is cut.

On the Mid-Autumn Festival, the fifteenth day of the eighth lunar month, Chinese people look at the moon and remember Chang'e. Since 2007 China has launched its lunar probes under the name Chang'e.`,
    imageAlt: "A bronze mirror with the Lunar Palace from the Jin dynasty, twelfth to thirteenth century. The back of the round mirror is cast in relief with a hall among clouds, a large tree, a bridge and waves, and standing figures, around a central knob.",
    annotations: [
      n("Palace of the moon", "The hall at upper left is the palace of the moon, the Guanghan Palace. This bronze mirror dates from the Jin dynasty, twelfth to thirteenth century."),
      n("Great tree", "At right a great tree spreads its branches. On the moon, they say, grows a cassia tree that grows back however often it is cut."),
      n("Figures and waves", "Below, figures stand with waves rolling beneath them. Chang'e secretly took the elixir her husband Yi had brought home and flew to the moon."),
    ],
  },
  "purple-gold-gourd": {
    title: "Purple-Gold Red Gourd",
    owner: "The Golden Horn and Silver Horn kings (servants of Laozi)",
    maker: "Laozi, the Supreme Old Lord (a vessel for elixirs)",
    power: "It sucks in anyone who answers when their name is called, and dissolves them within an hour and three quarters.",
    firstRecord: "Wu Cheng'en, Journey to the West",
    summary: "A gourd that sucks in whoever answers when called by name. Even Sun Wukong was trapped when he answered to a false name.",
    story: `As the monk Tang Sanzang and his companions passed Flat-Top Mountain, the Golden Horn and Silver Horn kings of Lotus Cave seized Sanzang. The two demon kings had five treasures, and the chief of them was a gourd of reddish gold, the Purple-Gold Red Gourd.

If someone's name was called with the gourd's mouth turned downward and he answered, he was sucked inside in an instant. With a talisman of the Supreme Old Lord stuck on the stopper, whoever was trapped inside would melt into liquid within an hour and three quarters. Sun Wukong answered, thinking he was safe because the name called was a false one, not "Sun Xingzhe" but "Zhe Xingsun," and he was trapped all the same.

Pretending to melt, Wukong slipped out and in turn called the Silver Horn King's name and trapped him in the gourd. The gourd turned out to be a vessel in which Laozi, the Supreme Old Lord, kept his elixirs, and the two demon kings were the boys who tended his furnace. Laozi appeared and took back his treasures and his servants.`,
    imageAlt: "A celadon gourd vase from the Qianlong reign of the Qing dynasty, 1736–95. Above a lobed round body rise a large central double-gourd neck and four smaller gourds, covered in a clear sea-green glaze.",
    annotations: [
      n("Gourd necks", "Four small gourds surround a large central gourd. This celadon vase was made in the Qianlong reign of the Qing dynasty, 1736–95."),
      n("Lobed body", "A round body lobed like petals, covered in a clear sea-green glaze."),
      n("Highest mouth", "The highest mouth. The Golden Horn King's gourd sucked in whoever answered when called by name and melted him away."),
    ],
  },
  "qiankun-ring": {
    title: "Qiankun Ring",
    owner: "Prince Nezha",
    maker: "Unknown (Nezha was born wearing it)",
    power: "Thrown, it flies to strike the enemy; dipped in the sea, it shakes the Dragon King's palace.",
    firstRecord: "Investiture of the Gods",
    summary: "The golden ring Nezha wore from birth. When he washed in the sea, the Dragon Palace shook, and he ended up fighting the Dragon King's son.",
    story: `The wife of Li Jing, a general at Chentang Pass, carried a child for three years and six months and then gave birth to a round ball of flesh. When Li Jing split it with his sword, a boy leaped out with a golden ring on his right arm and a red silk sash around his waist. The immortal Taiyi Zhenren came to be the boy's teacher and named him Nezha. The ring was called the Qiankun Ring, the sash the Huntian Sash.

One summer day when he was seven, Nezha was bathing in the Eastern Sea and rinsed the Huntian Sash in the water. The sea boiled red and the Dragon Palace shook. Nezha killed the yaksha who came out to see what was happening with the Qiankun Ring, and then struck down Ao Bing, the Dragon King's third son, who came after him.

When the furious Dragon King threatened to punish Li Jing's family, Nezha cut away his flesh and bones, returned them to his parents and took his own life. Taiyi Zhenren remade Nezha's body from lotus flowers and lotus roots and brought him back to life, giving him a fire-tipped spear and the Wind Fire Wheels.`,
    imageAlt: "A jade ring of the Eastern Zhou dynasty, third century BCE. One end of a round ring patterned like twisted cord rises as an open-mouthed dragon's head, and the ring crosses over itself like a knot below.",
    annotations: [
      n("Dragon head", "An open-mouthed dragon's head is carved at the end of the ring. This ring was carved from nephrite in the Eastern Zhou dynasty, third century BCE."),
      n("Twisted-cord pattern", "The body of the ring is carved like a twisted cord."),
      n("Knot", "Below, the ring crosses over itself like a knot. Nezha wore the golden Qiankun Ring on his arm from birth."),
    ],
  },
  "three-pointed-blade": {
    title: "Three-Pointed Double-Edged Blade",
    owner: "Erlang Shen, Yang Jian",
    maker: "Unknown",
    power: "A three-pronged blade. Even after more than three hundred rounds with Sun Wukong, it never gave way.",
    firstRecord: "Wu Cheng'en, Journey to the West",
    summary: "The weapon of Erlang Shen, the god with a third eye in his forehead. With it he captured Sun Wukong, who had thrown heaven into turmoil.",
    story: `Erlang Shen, Yang Jian, was the nephew of the Jade Emperor and had a third eye in his forehead that saw through everything. He carried the three-pointed double-edged blade and was accompanied by his heavenly hound, Xiaotian.

In Journey to the West, when none of the generals of heaven could capture Sun Wukong, who had thrown the heavenly palace into turmoil, the bodhisattva Guanyin recommended Erlang. Erlang and Wukong fought more than three hundred rounds with the blade and the golden-banded staff, and then a battle of transformations began. When Wukong became a sparrow, Erlang became a hawk; when Wukong became a fish, Erlang became a cormorant. Wukong turned himself into a temple and raised his tail as a flagpole, but Erlang saw through it.

At last the diamond ring hurled by Laozi struck Wukong on the head, the hound Xiaotian bit his leg, and Wukong was captured. From the Song dynasty on, paintings of "Searching the Mountains" showed Erlang leading his divine soldiers to hunt out the demons of the mountains, and Erlang is still worshiped as a god who tames waters and subdues demons.`,
    imageAlt: "A leaf, \"Searching the Mountains,\" from a thirteenth-century Southern Song ink album of Daoist and Buddhist subjects. In fine ink lines, divine soldiers capture mountain demons and beasts, hanging them from spears or leading them on ropes.",
    annotations: [
      n("Beast hung from a spear", "A divine soldier carries a captured beast hung from his spear. The scene seems to illustrate the story of Erlang leading divine soldiers to hunt the demons of the mountains."),
      n("Captive demon", "A ram-headed demon is led away on a rope. This is a leaf from an album that thirteenth-century Southern Song painters drew as models."),
      n("Soldier with a mace", "A divine soldier with hair rising like flames swings a mace. Even Sun Wukong, who threw heaven into turmoil, was finally captured by Erlang and his army."),
    ],
  },
  "zhang-guolaos-donkey": {
    title: "Zhang Guolao's Paper Donkey",
    owner: "Zhang Guolao, one of the Eight Immortals",
    maker: "Unknown",
    power: "It travels tens of thousands of li in a day; when resting it folds up like paper into a box, and a spray of water turns it back into a donkey.",
    firstRecord: "Zheng Chuhui, Minghuang Zalu",
    summary: "The white donkey the Daoist Zhang Guo rode. When resting, he folded it like paper and put it in a box.",
    story: `Zhang Guo was a Daoist who lived in seclusion on Mount Heng in the Tang dynasty and claimed to be several hundred years old. He always rode a white donkey that could travel tens of thousands of li in a day. When he rested, he folded the donkey up layer upon layer like paper and put it in a box, and when he wanted to ride, he sprayed it with a mouthful of water and it became a donkey again.

Emperor Xuanzong of Tang heard of him and summoned him to court. Before the emperor, Zhang Guo drank poisoned wine until his teeth turned black and then grew a new set of white teeth, among other marvels. Xuanzong gave him an official title and the name "Master of Penetrating Mystery," but he returned to the mountains.

Later Zhang Guo became one of the Eight Immortals and was called Zhang Guolao. He is often pictured as an old man riding his donkey backward, holding a fish drum, a musical instrument made of a bamboo tube.`,
    imageAlt: "The inside of a Qing porcelain dish of the Kangxi reign, 1662–1722, painted in colored enamels. On the white ground the old man Zhang Guolao, in green robes, stands beside a white donkey under the sun and red clouds, within a brocade-patterned border.",
    annotations: [
      n("Zhang Guolao", "The old man with a long beard is Zhang Guolao, one of the Eight Immortals. He displayed many marvels before Emperor Xuanzong of Tang."),
      n("White donkey", "The white donkey Zhang Guolao rode. When resting, he folded it like paper into a box, and a spray of water made it a donkey again."),
      n("Sun and red clouds", "The sun and red clouds float in the sky. This porcelain dish was painted in colored enamels in the Kangxi reign of the Qing dynasty, 1662–1722."),
    ],
  },
  "wooden-ox": {
    title: "Wooden Ox and Gliding Horse",
    owner: "Zhuge Liang, chancellor of Shu Han",
    maker: "Zhuge Liang",
    power: "Without eating or resting, it carries army provisions along steep plank roads.",
    firstRecord: "Chen Shou, Records of the Three Kingdoms, \"Biography of Zhuge Liang\"",
    summary: "The carts Zhuge Liang built to carry provisions over the rugged mountain roads of Shu. In the Romance of the Three Kingdoms they became mechanical oxen that stopped when their tongues were twisted.",
    story: `In 231, Zhuge Liang, chancellor of Shu Han, set out north to attack the state of Wei and built "wooden oxen" to carry his army's provisions. In his last northern campaign in 234, he moved provisions with "gliding horses." Chen Shou's Records of the Three Kingdoms notes this briefly, and in the fifth century Pei Songzhi, in his commentary, quoted Zhuge Liang's collected writings to give the size and construction of the wooden ox and gliding horse in detail.

The road north from Shu was a perilous route of plank roads built out from cliff faces. The wooden oxen and gliding horses carried provisions along it without eating or resting. Scholars today guess they were one-wheeled barrows or four-wheeled carts.

In the Romance of the Three Kingdoms they become mechanical oxen and horses. When Sima Yi captured a few and copied them for his own use, Zhuge Liang had his soldiers twist the tongues of the Wei army's oxen and horses. With their tongues twisted, the oxen and horses would not budge, and the Shu army hauled them away, provisions and all.`,
    imageAlt: "A black-and-white photograph of a Tang dynasty earthenware ox cart, seventh to eighth century. A horned ox is harnessed to the shafts, and behind it are a cart compartment with a rounded roof and a large wheel with close-set spokes.",
    annotations: [
      n("Ox", "An ox in a yoke pulls the cart. This earthenware ox cart was buried in a Tang dynasty tomb in the seventh to eighth century."),
      n("Large wheel", "A large wheel with close-set spokes. Some guess that Zhuge Liang's wooden ox was a one-wheeled barrow."),
      n("Roofed compartment", "A cart compartment with a rounded roof. The wooden oxen and gliding horses carried provisions along steep plank roads without eating or resting."),
    ],
  },
  heshibi: {
    title: "He Shi Bi",
    owner: "Bian He of Chu, later the states of Zhao and Qin",
    maker: "Unknown (an uncut jade found by Bian He on Mount Jing)",
    power: "The finest jade under heaven, for which the king of Qin offered fifteen cities.",
    firstRecord: "Han Feizi, \"Mr. He\"",
    summary: "The jade of Bian He, who lost both feet yet held to his uncut stone. Lin Xiangru risked his life to bring it back to Zhao.",
    story: `Bian He of Chu found a stone with jade inside on Mount Jing and presented it to King Li. When the jade carver said it was just a stone, the king cut off Bian He's left foot for deceiving his ruler. He presented it again to the next king, King Wu, and when he again heard it was only a stone, his right foot was cut off too.

When King Wen came to the throne, Bian He clasped the stone and wept at the foot of Mount Jing for three days and nights, until his tears ran out and he wept blood. When the king asked why, he answered that he grieved not for his lost feet, but because a precious jade was called a stone and an honest man was called a liar. When King Wen had the stone cut, a jade without equal under heaven emerged, and people called it "Mr. He's jade."

When He Shi Bi later came into the hands of Zhao, King Zhaoxiang of Qin offered fifteen cities for it. Lin Xiangru, sent as envoy, saw that Qin had no intention of giving up the cities, threatened to smash the jade together with his own head against a pillar, and finally sent the jade back to Zhao intact. The Korean word wanbyeok, "perfect," comes from this story. It is also said that the First Emperor of Qin carved the Heirloom Seal of the Realm from this jade.`,
    imageAlt: "A jade bi of the Warring States period, 475–221 BCE. A flat, pale-green jade disk with a round central hole is covered with a close-set grain pattern, crossed diagonally by a brown streak.",
    annotations: [
      n("Central hole", "A flat jade disk with a round hole in the center is called a bi. He Shi Bi was also such a jade bi. This one dates from the Warring States period, 475–221 BCE."),
      n("Grain pattern", "The surface is covered with raised dots like grains."),
      n("Brown streak", "A brown streak runs diagonally through the jade. Bian He lost both feet to kings who failed to recognize the precious jade hidden in the stone."),
    ],
  },
  "golden-kasaya": {
    title: "Brocade Kasaya",
    owner: "The monk Tang Sanzang",
    maker: "Unknown (passed to Emperor Taizong of Tang by the bodhisattva Guanyin)",
    power: "Whoever wears it will not fall into hell, and neither poisonous creatures, wild beasts nor demons can harm him.",
    firstRecord: "Wu Cheng'en, Journey to the West",
    summary: "The silk kasaya the bodhisattva Guanyin bestowed on Tang Sanzang. An old abbot who coveted it set fire to his own temple.",
    story: `In Journey to the West, the bodhisattva Guanyin came to Chang'an, the Tang capital, disguised as a shabby monk, and offered a silk kasaya and a nine-ringed staff for sale. Whoever wore this kasaya, the bodhisattva said, would not fall into hell, and neither poisonous creatures, wild beasts nor demons could harm him. Emperor Taizong of Tang bought them and gave them to Tang Sanzang, who was setting out for the West to bring back scriptures.

On their way, Sanzang and his companions stayed at a temple called Guanyin Chan Monastery. The old abbot, Elder Jinchi, two hundred and seventy years old, was blinded by greed for the kasaya and plotted to burn Sanzang and his companions to death and take it. Sun Wukong borrowed a fire-proof cover from heaven to protect Sanzang and, in turn, blew on the flames until the temple burned down.

Amid the confusion, a black bear demon from Black Wind Mountain, who had come to watch the fire, stole the kasaya. With the bodhisattva Guanyin's help, Wukong captured the bear demon and recovered the kasaya. The bear demon afterward became the guardian of the bodhisattva's mountain.`,
    imageAlt: "A Buddhist priest's ceremonial robe from the Ming dynasty, fifteenth century. Hundreds of small Buddhas are embroidered in gold and colored thread in compartments across a long red silk panel, with slightly larger Buddhas at the center and corners.",
    annotations: [
      n("Rows of Buddhas", "Small Buddhas are embroidered in compartments on the red silk ground. This is a robe a monk wore for ceremonies in the fifteenth-century Ming dynasty."),
      n("Larger Buddha", "In the upper center compartment, a slightly larger Buddha is embroidered."),
      n("Gold-thread border", "Buddhas and flowers embroidered in gold thread run along the border. The bodhisattva Guanyin bestowed a splendid silk kasaya like this on Tang Sanzang."),
    ],
  },
  "hetu-luoshu": {
    title: "Hetu and Luoshu",
    owner: "Fuxi and Yu the Great",
    maker: "Unknown (borne out of the waters by a dragon-horse and a tortoise)",
    power: "From the dot patterns on their backs came the eight trigrams and the nine great laws of government.",
    firstRecord: "Book of Changes, \"Xici\" (Great Treatise)",
    summary: "The chart and the writing carried out of the Yellow River by a dragon-horse and out of the Luo River by a tortoise. They became the origin of the eight trigrams and the magic square.",
    story: `The "Great Treatise" of the Book of Changes says, "The Yellow River brought forth a chart and the Luo River brought forth a writing, and the sages took them as models." According to legend, in the time of Fuxi a dragon-horse, with a dragon's head and a horse's body, rose from the Yellow River bearing a pattern of dots on its back. From this Hetu, "River Chart," Fuxi drew the eight trigrams.

When Yu the Great was taming the floods, a divine tortoise rose from the Luo River with another dot pattern on its shell. This is the Luoshu, "Luo Writing." From it, it is said, Yu established the nine great laws for governing the realm.

Song dynasty scholars drew the Hetu and Luoshu as diagrams of dots. The Luoshu arranges the numbers one to nine in a three-by-three grid so that every line adds up to fifteen: a magic square. The four trigrams on the Korean flag also come from Fuxi's eight trigrams.`,
    imageAlt: "A jade tortoise of the Ming dynasty, 1368–1644. A small tortoise carved from yellowish-green jade lies with its head raised, with brown markings here and there.",
    annotations: [
      n("Raised head", "The tortoise raises its head. In the time of Yu the Great, a divine tortoise rose from the Luo River bearing a dot pattern on its shell."),
      n("Shell", "The rounded shell. The Luoshu arranges the numbers one to nine in a three-by-three grid so that every line adds up to fifteen, a magic square."),
      n("Brown markings", "Brown markings run through the yellowish-green jade. This small tortoise was carved in jade in the Ming dynasty, 1368–1644."),
    ],
  },
  tamatebako: {
    title: "Tamatebako",
    owner: "The fisherman Urashima Taro",
    maker: "Otohime of the Dragon Palace",
    power: "As long as it stays closed it preserves youth, but opened, all the years that have passed fall upon you at once.",
    firstRecord: "Tango no Kuni Fudoki (fragment)",
    summary: "The box Otohime gave Urashima Taro as he left the Dragon Palace. When he opened the box he had been told not to open, he became a white-haired old man.",
    story: `The fisherman Urashima rescued a turtle that children were tormenting on the beach. In gratitude the turtle carried him on its back to the Dragon Palace under the sea, where Otohime entertained him lavishly. After three dreamlike years, Urashima began to long for his parents at home.

As he left, Otohime gave him a lacquered box, the tamatebako, and told him never to open it. When he got home the village was strange and he knew no one: three years in the Dragon Palace had been three hundred years on land. In despair Urashima opened the box, white smoke rose from it, and he instantly became a white-haired old man.

In the oldest version, recorded in the early-eighth-century Tango no Kuni Fudoki, Urashima follows a maiden who had appeared as a five-colored turtle to the land of the immortals across the sea. When he opens the box, her fragrant form flies away on the clouds, and he can never return.`,
    imageAlt: "A lacquered cosmetics box (tebako) of the Kamakura period, early fourteenth century. The round-cornered black box and its lid are decorated with golden chrysanthemums, and metal rings for a cord are fitted on the side.",
    annotations: [
      n("Chrysanthemums", "Chrysanthemums are drawn by sprinkling gold powder on black lacquer (maki-e). This cosmetics box dates from the Kamakura period, early fourteenth century."),
      n("Metal ring", "A cord threaded through the metal rings on the side tied the lid shut."),
      n("Lid", "The lid that covers the box. Otohime told Urashima never to open the box she gave him. When he opened it, he instantly became a white-haired old man."),
    ],
  },
  hagoromo: {
    title: "Hagoromo",
    owner: "A heavenly maiden",
    maker: "Unknown",
    power: "Wearing it, one can fly up and return to heaven.",
    firstRecord: "Tango no Kuni Fudoki (fragment)",
    summary: "A heavenly maiden's feather robe left by the water. The maiden, held captive by the one who hid it, flew back to heaven when she got it back.",
    story: `According to the Tango no Kuni Fudoki, long ago eight heavenly maidens came down to bathe in the Manai spring on the summit of Mount Hiji. An old couple secretly hid one maiden's feather robe, and without it she could not return to heaven and became their daughter. The sake she brewed cured any illness and the old couple grew rich, but after ten years or so they drove her out.

The most famous version is the Noh play Hagoromo. The fisherman Hakuryo finds a beautiful robe hanging on a pine in the pine grove of Miho. When a heavenly maiden appears and weeps that without it she cannot return to heaven, he says he will give it back if she shows him a heavenly dance. When he suspects she will fly away without dancing if he returns it first, she answers, "Doubt belongs to the human world; in heaven there is no deceit."

Ashamed, the fisherman returns the robe, and the maiden puts it on, dances and vanishes into the sky beyond Mount Fuji. Stories of capturing a heavenly maiden by hiding her feather robe are told all over the world, including the Korean tale "The Fairy and the Woodcutter."`,
    imageAlt: "A Noh costume, a choken, from the Edo period, about 1800–1850. The loosely woven reddish silk robe is spread out on a pole, woven in gold and colored threads with hanging wisteria and fans.",
    annotations: [
      n("Wisteria", "Hanging wisteria is woven in gold and colored threads. This Noh costume dates from the Edo period, about 1800–1850."),
      n("Fans", "Open fans are set among the flowers in gold."),
      n("Wide sleeves", "Wide sleeves hang from the shoulders. In the Noh play Hagoromo, the heavenly maiden dances wearing a sheer outer robe like this choken as her feather robe."),
    ],
  },
  "tide-jewels": {
    title: "Tide Jewels",
    owner: "Hoori (Yamasachihiko), the mountain god",
    maker: "Watatsumi, god of the sea",
    power: "One makes the tide rise; the other makes it ebb.",
    firstRecord: "Kojiki",
    summary: "The two jewels the sea god gave Hoori. With the flood-tide jewel and the ebb-tide jewel he subdued his brother.",
    story: `Hoderi, the elder brother, who fished the sea, and Hoori, the younger, who hunted in the mountains, exchanged their tools for a day. Hoori lost his brother's fishhook in the sea, and though he broke his own sword to make a thousand hooks for him, his brother refused them, demanding the original.

As Hoori wept on the shore, the god of sea paths helped him reach the palace of Watatsumi, god of the sea, where he married the god's daughter Toyotama-hime. Three years later, hearing his story, the sea god found the fishhook caught in the throat of a sea bream and gave him, along with it, the shiomitsu-tama, which makes the tide rise, and the shiofuru-tama, which makes it ebb.

When Hoori returned to land and his brother attacked him, he raised the waters with the flood-tide jewel and drowned his brother, and when his brother begged for his life, he drew the waters back with the ebb-tide jewel. His brother swore to serve him. The Kojiki records that Hoori's grandson was Jimmu, the first emperor.`,
    imageAlt: "Tide-Changing Jewel with Dragon, a decorative object of the Meiji period, early 1900s. A large crystal ball rests on a stand of rough waves wrought in silver and shakudo, a dragon twists among the waves, and another small crystal ball sits beside it.",
    annotations: [
      n("Large crystal ball", "A large crystal ball rests on the waves. This ornament, Tide-Changing Jewel with Dragon, was made in the Meiji period, early 1900s."),
      n("Small ball", "Beside it is another small ball. The sea god gave Hoori two jewels, one for the flood tide and one for the ebb."),
      n("Waves and dragon", "Rough waves and a dragon within them are wrought in silver and shakudo. Hoori drowned his brother with the flood-tide jewel and drew back the water with the ebb-tide jewel."),
    ],
  },
  "buddhas-stone-bowl": {
    title: "The Buddha's Stone Begging Bowl",
    owner: "The Buddha (in legend), Prince Ishitsukuri",
    maker: "Unknown",
    power: "The true bowl the Buddha used was said to give off a soft light.",
    firstRecord: "The Tale of the Bamboo Cutter",
    summary: "The first impossible task Princess Kaguya set her suitors. Prince Ishitsukuri brought an old bowl from a country temple and was found out.",
    story: `An old bamboo cutter found a girl no bigger than a finger inside a shining stalk of bamboo. In three months she grew into a beautiful young woman and was called Kaguya-hime, "the shining princess," and five nobles wooed her persistently. The princess told each of them she would marry him if he brought her a treasure not to be found in this world.

The task she set Prince Ishitsukuri was the Buddha's stone begging bowl, said to be in Tenjiku, that is, India. A legend says that when the Buddha attained enlightenment, the four heavenly kings each offered him a stone bowl, and the Buddha stacked the four into one. The true bowl was said to give off a soft light.

Not daring to go all the way to India, the prince waited about three years and then presented a soot-blackened old bowl from a mountain temple in Yamato, wrapped in a brocade bag. Seeing that it gave off no light at all, the princess sent it back, and the prince threw the bowl away at her gate and went on pleading. The Tale of the Bamboo Cutter jokes that a Japanese expression for shamelessness comes from this.`,
    imageAlt: "A gilt-bronze begging bowl from Heian-period Japan, around the tenth century. The outside of the round bowl, whose mouth curves slightly inward, is engraved with fine flowers and vines, and the gilding is worn in places.",
    annotations: [
      n("Inward-curving rim", "A round begging bowl whose mouth curves slightly inward. It was made of gilt bronze in the Heian period, around the tenth century."),
      n("Engraved scrolls", "Flowers and vines are engraved in fine lines all over the outside. The gilding is worn in places, showing the bronze."),
      n("Rounded lower body", "The rounded lower part. Prince Ishitsukuri passed off a soot-blackened bowl from a mountain temple as the Buddha's stone bowl, but it gave off no light and he was found out."),
    ],
  },
  "jeweled-branch-of-horai": {
    title: "Jeweled Branch of Mount Horai",
    owner: "Prince Kuramochi",
    maker: "Unknown (the prince had six craftsmen make a fake)",
    power: "A branch of the tree on the immortals' island in the eastern sea, with silver roots, a golden trunk and fruit of white jewels.",
    firstRecord: "The Tale of the Bamboo Cutter",
    summary: "Princess Kaguya's impossible task. Prince Kuramochi had craftsmen make a fake and was exposed by the craftsmen who came to collect their wages.",
    story: `Princess Kaguya asked Prince Kuramochi to bring her a branch of a tree said to grow on Mount Horai, the island of the immortals in the eastern sea. It was a tree with silver roots, a golden trunk and fruit of white jewels.

The crafty prince pretended to set sail and then went into hiding, gathered six skilled craftsmen and had them spend more than a thousand days making a branch that looked real. He presented it with a false tale of overcoming monsters and starvation at sea to reach Mount Horai, and the princess was left with no choice but to marry him.

Just then the craftsmen arrived, complaining that they had not yet been paid for their thousand days of work. With the lie exposed, the princess joyfully sent the branch back, and the prince vanished into the mountains in shame. Mount Horai is an island from Chinese tales of immortals, where the First Emperor of Qin is said to have sent Xu Fu to search for the elixir of immortality.`,
    imageAlt: "A long, narrow portable writing box from Edo-period Japan, nineteenth century. On gold lacquer sprinkled with gold flakes, Mount Horai, the island of the immortals, is raised in relief: a rocky peak soars in the middle, with round-leaved trees, tiled pavilions and rippling water.",
    annotations: [
      n("Peaks of Mount Horai", "The rocky peaks are raised in gold and silver lacquer so they soar upward. Mount Horai is the island of the immortals said to lie in the eastern sea."),
      n("Jewel-like trees", "Clusters of round leaves bulge like jewels. Prince Kuramochi had craftsmen make a fake of the branch from Mount Horai, with silver roots, a golden trunk and fruit of white jewels."),
      n("Pavilions by the water", "Tiled pavilions stand by the water. Inside, clouds, birds and water plants are painted, with a space for a tiny inkstone. The box was made in nineteenth-century Edo-period Japan."),
    ],
  },
  "fire-rat-robe": {
    title: "Robe of Fire-Rat Fur",
    owner: "Abe no Miushi, Minister of the Right",
    maker: "Unknown (obtained through the Tang merchant Wang Qing)",
    power: "Put into fire, it does not burn; rather, the dirt burns away and it comes out clean, it was said.",
    firstRecord: "The Tale of the Bamboo Cutter",
    summary: "A legendary fur robe said to come out of the fire cleaner than before. When Princess Kaguya put it in the fire to test it, it burned up.",
    story: `Princess Kaguya asked Abe no Miushi, Minister of the Right, to bring her a robe of fire-rat fur said to be found in Tang China. Old Chinese books told of cloth woven from the fur of rats that live in the mountains of fire in the south, which, when soiled, could be put in the fire and washed as if burned, coming out as good as new.

Abe, a very rich man, sent a great deal of gold to the Tang merchant Wang Qing and asked him to find the robe. Some time later Wang Qing sent a robe he said an Indian monk had brought, and asked for more gold. It was a beautiful robe whose dark-blue fur shone gold at the tips.

When Abe presented the robe, the princess said they should test whether it was genuine by putting it in the fire. The robe burned up in flames, and Abe went home with a face as green as a leaf. The cloth that people of old said could be washed in fire was probably cloth woven from asbestos, a mineral fiber.`,
    imageAlt: "A page from a hand-painted picture book of The Tale of the Bamboo Cutter made in Japan in the late seventeenth century. Between golden clouds a thatched house appears; on its veranda an old couple looks at a tiny child in a basket, and children play in the yard.",
    annotations: [
      n("Child in the basket", "The tiny child in the basket is Princess Kaguya, found inside a stalk of bamboo. In three months she grew into a beautiful young woman."),
      n("Old couple", "The old bamboo cutter and his wife look at the child. This hand-painted picture book of The Tale of the Bamboo Cutter was made in Japan in the late seventeenth century."),
      n("Golden clouds", "Clouds of gold leaf frame the scene above and below. The princess asked Minister Abe to bring her a robe of fire-rat fur that would not burn in fire."),
    ],
  },
  "elixir-of-kaguya": {
    title: "Princess Kaguya's Elixir of Immortality",
    owner: "Princess Kaguya, later the emperor",
    maker: "The people of the moon",
    power: "Whoever takes it does not die. The emperor had it burned on the mountain nearest to heaven.",
    firstRecord: "The Tale of the Bamboo Cutter",
    summary: "The elixir of immortality Princess Kaguya left when she returned to the moon. Refusing eternal life without her, the emperor had it burned on a mountaintop: Mount Fuji.",
    story: `Princess Kaguya was in truth a person of the moon. As the full moon of the eighth month drew near, she wept as she gazed at the moon and confessed that on that night the people of the moon would come for her. The emperor sent two thousand soldiers to guard the old man's house, but before the people of the moon, who came down from the sky riding on clouds, the soldiers could not even draw their bows.

Before she left, the princess wrote a letter to the emperor and left him, with it, a jar of the elixir of immortality the people of the moon had brought. When she put on the heavenly feather robe, she forgot all her earthly sorrows and rose into the sky.

Reading her letter, the emperor asked what use a medicine against death was if he could never see her again, and had the letter and the elixir burned on the summit of the mountain in Suruga nearest to heaven. Because a great many soldiers climbed it, the mountain came to be called Fuji, "rich in soldiers," and the smoke, they say, still rises into the clouds.`,
    imageAlt: "A lacquered medicine case (inro) of the Edo period, about 1785. A rooster is painted on the outside of the small case of stacked compartments, with a cord and a round cord bead above and tassels hanging below.",
    annotations: [
      n("Rooster", "A rooster is painted in gold lacquer on the outside of the stacked compartments of the medicine case (inro). It dates from the Edo period, about 1785."),
      n("Cord bead", "The bead (ojime) that tightens the cord. An inro was a small case for carrying medicine, hung from the sash."),
      n("Cord", "The cord from which the inro hangs. As she returned to the moon, Princess Kaguya left the emperor a jar of the elixir of immortality."),
    ],
  },
  higekiri: {
    title: "Higekiri",
    owner: "The Minamoto clan; the warrior Watanabe no Tsuna",
    maker: "Unknown (one of two swords made for Minamoto no Mitsunaka)",
    power: "Tested on a criminal, it cut cleanly through his beard and was named Beard-Cutter; after it cut off a demon's arm, it became Demon-Cutter.",
    firstRecord: "The Tale of the Heike, \"Book of Swords\"",
    summary: "The treasured sword of the Minamoto clan with which Watanabe no Tsuna cut off an oni's arm. From then on it was called Demon-Cutter.",
    story: `The Heian warrior Minamoto no Yorimitsu had four retainers called the Four Heavenly Kings. One night, as the foremost of them, Watanabe no Tsuna, crossed the Ichijo Modoribashi bridge in Kyoto, a beautiful woman asked him to escort her. When Tsuna put her on his horse, she turned into a terrible oni, seized his topknot and flew off toward Mount Atago.

Tsuna drew Higekiri, the treasured sword of the Minamoto at his waist, and cut off the oni's arm. The sword had been called Beard-Cutter because, when tested on a criminal, it cut cleanly even through his beard; after this it was called Demon-Cutter.

Tsuna kept the severed arm in a box and, on the advice of the yin-yang master Abe no Seimei, shut himself in for seven days. On the sixth night his foster mother came to visit and Tsuna let her in; asking to see the arm, she turned into the oni, snatched it and flew out through the smoke hole in the roof.`,
    imageAlt: "Nakamura Nakazo I as Watanabe no Tsuna, a color woodblock print by Katsukawa Shunzan, 1781. A kabuki actor in a red outer robe stands glaring, with the hilt of a long sword rising behind his shoulder.",
    annotations: [
      n("Actor's face", "The glaring kabuki actor Nakamura Nakazo I plays Watanabe no Tsuna. This is one sheet of a triptych printed by Katsukawa Shunzan in 1781."),
      n("Sword hilt", "The hilt of a long sword rises behind his shoulder. Tsuna cut off the oni's arm with Higekiri, the treasured sword of the Minamoto."),
      n("Red robe", "A large crest is printed on the red outer robe. The oni who lost its arm came disguised as Tsuna's foster mother and took the arm back."),
    ],
  },
  ikutachi: {
    title: "Ikutachi and Ikuyumiya",
    owner: "Okuninushi (Onamuji)",
    maker: "Unknown (possessions of Susanoo, god of the underworld)",
    power: "The great sword and bow of life. With them Okuninushi drove out his brother gods and founded a country.",
    firstRecord: "Kojiki",
    summary: "The sword and bow of life that Okuninushi stole from Susanoo, god of the underworld, as he fled. With them he founded a country.",
    story: `Okuninushi was first called Onamuji. His eighty jealous brother gods killed him twice, and, brought back to life at his mother's pleading, he fled from them to Susanoo in the underworld, Ne-no-kuni. There he and Susanoo's daughter Suseri-hime fell in love at first sight.

Susanoo made him sleep in a room swarming with snakes and in another full of centipedes and wasps, sent him to fetch an arrow shot into a field and then set the field on fire. Saved by a scarf Suseri-hime gave him and by a mouse, Onamuji, while Susanoo slept, tied the god's hair to the rafters, blocked the door with a great rock, took the great sword of life, Ikutachi, the bow and arrows of life, Ikuyumiya, and the heavenly koto, and fled with Suseri-hime.

The koto brushed against a tree and sounded, waking Susanoo, but at the edge of the underworld slope he shouted after them: "With that sword and bow, drive out your brothers and become Okuninushi." Onamuji did as he said, defeated his brother gods and founded a country.`,
    imageAlt: "A gilt-bronze sword pommel from Kofun-period Japan, sixth century. A phoenix head with a raised crest sits within a round ring, and below it extends the tang that fitted into the grip.",
    annotations: [
      n("Phoenix head", "A phoenix head with a raised crest is set inside the ring. This ornament capped the grip of a great sword in Kofun-period Japan, sixth century."),
      n("Ring", "A gilt-bronze ring. Ring-pommel great swords like this came to Japan from the Korean peninsula and were carried by kings and chieftains."),
      n("Tang", "The tang that fitted into the grip. Okuninushi fled from Susanoo, god of the underworld, carrying Ikutachi, the great sword of life."),
    ],
  },
  "miidera-bell": {
    title: "Bell of Mii-dera",
    owner: "Mii-dera (Onjo-ji) in Omi",
    maker: "Unknown (given to Fujiwara no Hidesato by the dragon god of Lake Biwa)",
    power: "A temple bell from the Dragon Palace. When the strongman Benkei dragged it away, it cried, they say, \"I want to go back.\"",
    firstRecord: "Taiheiki",
    summary: "The bell Tawara Toda is said to have brought back from the dragon god after defeating a giant centipede. It hangs at Mii-dera.",
    story: `According to the Taiheiki, as the warrior Fujiwara no Hidesato was about to cross the Seta bridge over Lake Biwa, a huge serpent lay across it. Hidesato calmly stepped over it, and that night a visitor came to him, saying he was the dragon god of the lake and was being tormented by the giant centipede of Mount Mikami, and begged for his help.

Hidesato shot arrows at the great centipede coiled around the mountain. His first arrows bounced off, but the last one pierced the centipede's head. In gratitude the dragon god took him to the Dragon Palace and gave him all kinds of treasures, among them a great temple bell. Hidesato offered the bell to Mii-dera. People called him Tawara Toda.

Later a story arose that the strongman Benkei dragged the bell to Mount Hiei, and when he struck it, it cried, "I want to go back, I want to go back," so he threw it into a ravine in anger. The evening bell of Mii-dera is counted among the Eight Views of Omi, the eight scenic sights of Lake Biwa.`,
    imageAlt: "Evening Bell at Mii Temple, from the Eight Views of Omi, a color woodblock print by Utagawa Hiroshige, late 1830s. The roofs of Mii-dera show among the trees of a green mountain on Lake Biwa, with sailboats and far mountains, and the title and a poem at the top.",
    annotations: [
      n("Title", "The title reads \"Evening Bell at Mii.\" This is a sheet from the Eight Views of Omi printed by Utagawa Hiroshige in the late 1830s."),
      n("Temple in the mountains", "The roofs of Mii-dera appear among the trees on the green mountainside. The temple keeps a bell said to have been brought back from the Dragon Palace by Tawara Toda."),
      n("Lake Biwa", "Lake Biwa with sailboats. Fujiwara no Hidesato shot down the giant centipede that had been tormenting the dragon god of the lake."),
    ],
  },
  "dokkaebi-club": {
    title: "Dokkaebi Club",
    owner: "Dokkaebi (goblins); Bangi of Silla",
    maker: "Dokkaebi",
    power: "Strike it, saying \"Out with gold!\", and whatever one wishes comes pouring out.",
    firstRecord: "Duan Chengshi, Youyang Zazu, \"Tale of Bangi\"",
    summary: "The goblins' club that pours out whatever one wishes when struck. It was first recorded in a ninth-century Tang book as the tale of Bangi, a man of Silla.",
    story: `"Out with gold, knock! Out with silver, knock!" The dokkaebi club is a treasure that pours out whatever one wishes when it is struck. A widely told tale says that when a kind woodcutter cracked a hazelnut, the startled goblins ran away and left their club behind, while a greedy neighbor who tried to copy him got a sound thrashing.

The oldest record of the tale is the story of Bangi, a man of Silla, in the Youyang Zazu, written by Duan Chengshi of Tang in the ninth century. Poor Bangi saw children in red clothes in the mountains striking a golden awl to bring out food and wine. When the children left the awl behind, Bangi took it home and became very rich.

His greedy younger brother imitated him and went into the mountains, but the children caught him. Calling him the thief who had stolen their awl, they stretched his nose out long like an elephant's trunk. The story of Bangi lives on in old tales of a kind man and a greedy one, such as "The Old Man with a Lump."`,
    imageAlt: "A jade ogre mask (taotie) ornament from the Warring States period of China, 475–221 BCE. On a pale-green jade plaque, scrolling lines in relief form the face of a horned monster.",
    annotations: [
      n("Curled horns", "Horns curling like whorls are carved at both upper sides. This jade ornament comes from the Warring States period of China, 475–221 BCE."),
      n("Scrolling face", "The scrolling lines in the middle form the eyes and nose of a beast's face. Such a beast face is called a taotie."),
      n("Divided lower edge", "The lower edge divides like a beast's legs. The patterns of the demon-face roof tiles that Koreans call \"dokkaebi faces\" are linked to beast faces like this."),
    ],
  },
  "jumongs-bow": {
    title: "Jumong's Bow",
    owner: "King Dongmyeong (Jumong), founder of Goguryeo",
    maker: "Jumong (made it himself at the age of seven)",
    power: "Every arrow hit its mark, so that \"jumong,\" meaning a fine archer, became his name.",
    firstRecord: "Book of Wei, \"Account of Goguryeo\"",
    summary: "The bow of Goguryeo's founder, who shot so well that his very name became \"Jumong.\" Fish and turtles made a bridge for him to cross.",
    story: `Sunlight shone on Yuhwa, daughter of the water god Habaek, who was confined in the palace of Buyeo, and she laid a great egg. When the king threw the egg to dogs and pigs they would not eat it; when he cast it on the road, oxen and horses stepped around it; when he left it in a field, birds covered it with their wings. The boy who hatched from the egg made his own bow and arrows at the age of seven, and every arrow hit its mark.

In the language of Buyeo a fine archer was called "jumong," and so the boy was named Jumong. The Chinese history Book of Wei, completed in 554, records this story as the founding legend of Goguryeo. The princes of Buyeo, jealous of Jumong's skill, plotted to kill him.

Fleeing south, Jumong came to a river with no bridge and cried, "I am the son of the sun and the grandson of Habaek," and fish and turtles rose up to form a bridge. When he had crossed, the bridge scattered, and his pursuers could not cross. Jumong came to Jolbon and founded Goguryeo.`,
    imageAlt: "A leather bow case, quiver and belt from Tibet or Mongolia, fifteenth to seventeenth century. A bow case and quiver of dark brown leather are fitted with round ornaments decorated in gold, joined by a belt.",
    annotations: [
      n("Bow case", "A leather case for carrying a bow at the waist, used by mounted archers of Tibet or Mongolia in the fifteenth to seventeenth century."),
      n("Quiver", "The quiver for arrows carries round ornaments decorated with gold. This was the gear of northern peoples who shot from horseback."),
      n("Belt", "The belt from which the bow case and quiver hang. In the language of Buyeo, a fine archer was called \"jumong.\""),
    ],
  },
  "suros-golden-box": {
    title: "King Suro's Golden Box",
    owner: "The nine chiefs of Garak; King Suro",
    maker: "Unknown (came down from heaven)",
    power: "A box let down from heaven on a purple cord. From the six golden eggs inside were born the kings of the six Gaya states.",
    firstRecord: "Iryeon, Samguk Yusa, \"Record of Garak\"",
    summary: "The golden box that came down from heaven onto Gujibong Peak. From a golden egg inside it was born King Suro of Garak.",
    story: `In the third month of the year 42, the nine chiefs of the land of Garak and several hundred people gathered on Gujibong Peak. A voice from heaven said, "I am coming down to found a kingdom here; dig the earth on the peak, sing and dance." The people danced, singing the "Gujiga": "Turtle, turtle, put out your head; if you do not, we will roast and eat you."

Then a purple cord came down from the sky and touched the ground, and at its end hung a golden box wrapped in red cloth. When they opened it, there were six golden eggs, round as the sun. The next morning all the eggs had hatched into boys, and the first to emerge became Suro, king of Garak. The other five, it is said, became kings of the five Gaya states.

This story is Iryeon's abridgment, in the Samguk Yusa, of the "Record of Garak" written by a local official of Geumgwan in the reign of King Munjong of Goryeo. King Suro later took as his queen Heo Hwang-ok, a princess from the land of Ayuta, who came across the sea in a ship with red sails.`,
    imageAlt: "A Goryeo bronze lidded bowl of the thirteenth century. A bowl covered by a rounded lid with a knob stands on a high foot, its surface coated with green patina.",
    annotations: [
      n("Knobbed lid", "A small knob tops the rounded lid. This is a Goryeo bronze lidded bowl of the thirteenth century."),
      n("Round body", "A vessel whose lid and body fit closely together is called a hap. The golden box from heaven held six golden eggs, round as the sun."),
      n("Foot", "A high foot evenly coated with green patina. The first boy to hatch from the eggs became Suro, king of Garak."),
    ],
  },
  "seonyeos-silk": {
    title: "Seo-nyeo's Silk",
    owner: "Seo-nyeo of Silla",
    maker: "Seo-nyeo",
    power: "When a sacrifice was offered to heaven with this silk, the lost light of Silla's sun and moon returned.",
    firstRecord: "Iryeon, Samguk Yusa, \"Yeono-rang and Seo-nyeo\"",
    summary: "The silk woven by Seo-nyeo, who crossed the sea to Japan. When a sacrifice was offered with it, Silla's sun and moon regained their light.",
    story: `In the fourth year of King Adalla of Silla (157), Yeono-rang, who lived on the shore of the East Sea, was gathering seaweed on a rock when the rock carried him across to Japan. The people there thought him an extraordinary man and made him their king. His wife Seo-nyeo, searching for him, saw his shoes on the rock and stepped onto it, and the same rock carried her to Japan, where she became queen.

Then in Silla the sun and moon lost their light. The official who watched the sun and moon reported that their essence had gone away to Japan. When the king sent envoys to bring the couple back, Yeono-rang said it was the will of heaven and he could not return, but he gave them fine silk woven by Seo-nyeo, saying that a sacrifice offered to heaven with it would suffice.

When the sacrifice was offered with the silk the envoys brought, the sun and moon shone again. The king kept the silk in the royal storehouse as a national treasure, named the storehouse Gwibigo, and called the place of the sacrifice Yeongil-hyeon, "the county that welcomes the sun." It is today's Yeongil Bay in Pohang, North Gyeongsang Province.`,
    imageAlt: "A Joseon bridal robe (hwarot) of the late nineteenth century. The red silk robe with outspread sleeves is lavishly embroidered with lotuses, peonies, birds and butterflies, with multicolored stripes on the sleeves and white cuffs at the ends.",
    annotations: [
      n("Floral embroidery", "Lotuses, peonies and butterflies are lavishly embroidered on red silk. This is a hwarot, a Joseon bridal robe of the late nineteenth century."),
      n("Striped sleeves", "The sleeves are pieced from silks of many colors in stripes (saekdong)."),
      n("Waves and rocks", "Waves and rocks are embroidered near the hem. When a sacrifice was offered to heaven with the fine silk Seo-nyeo had woven, Silla's sun and moon shone again."),
    ],
  },
  yangnyeosu: {
    title: "Princess Bari's Water of Life",
    owner: "Princess Bari (Baridegi)",
    maker: "Unknown (the healing spring of the far western realm at the end of the underworld)",
    power: "A healing water from the underworld that brings back the breath of the dead when poured into their mouths.",
    firstRecord: "Shamanic epic \"Princess Bari\"",
    summary: "The healing water fetched from the end of the underworld by Baridegi, the abandoned seventh princess. It brought her dead parents back to life.",
    story: `Long ago King Ogu had six daughters, and when the seventh was also a girl, he angrily put the baby in a jade box and cast it into the river. Because she was thrown away she was called Baridegi, Princess Bari. Saved by a turtle and an immortal, the child grew up in the care of an old couple by the sea.

Years later the king and queen fell mortally ill. A diviner said only the healing water of the far western realm could save them, but the six pampered daughters all made excuses and refused. Only Princess Bari set out for the parents who had abandoned her. Crossing rugged mountains and the hells, she met Mujangseung, who guarded the healing water at the end of the underworld, and only after years of drawing water, gathering firewood and tending the fire as he bade, marrying him and bearing seven sons, did she obtain the water.

Returning with the water and the flowers that revive bones and flesh, Princess Bari met her parents' funeral bier. When she restored their bones and flesh with the flowers and poured the water into their mouths, the king and queen breathed again. Princess Bari became the goddess who guides the souls of the dead to the other world, and her story is still sung at shamanic rituals for the dead.`,
    imageAlt: "A Goryeo celadon bottle of the twelfth to thirteenth century. A slender, long neck rises from the round body, which is incised with a floral design in fine lines.",
    annotations: [
      n("Long neck", "A slender, long neck. One side of the lip is pressed in to make pouring easy. This celadon bottle was made in Goryeo in the twelfth to thirteenth century."),
      n("Incised flowers", "A floral design is incised in fine lines on the body and covered with a bluish-green glaze."),
      n("Round body", "The round body that holds the water. Princess Bari revived her dead parents by pouring the healing water she had fetched from the end of the underworld into their mouths."),
    ],
  },
  "heungbus-gourds": {
    title: "Heungbu's Gourds",
    owner: "Heungbu and Nolbu",
    maker: "Unknown (seeds brought by a swallow)",
    power: "Sawn open, they pour out rice, money and silk. Gourds won through greed pour out misfortune.",
    firstRecord: "Song Man-jae, Gwanuhui",
    summary: "Gourds grown from a seed brought by the swallow whose leg was mended. From Heungbu's gourds came treasure; from Nolbu's, misfortune.",
    story: `Nolbu, the greedy elder brother, took everything their parents had left and drove his kind younger brother Heungbu out of the house. Heungbu and his children lived in a hut, barely able to get a meal. One spring Heungbu found a baby swallow whose leg had broken when it fell fleeing a snake; he bound the leg with care and let it fly away.

The next spring, when he planted the gourd seed the swallow brought him, gourds big enough to cover the roof grew. As he sawed them open, singing "Saw, saw, back and forth," out poured rice and money, silk, and carpenters who built him a house, one after another, and Heungbu became very rich.

Hearing of this, Nolbu broke a swallow's leg on purpose and then bound it up. When he sawed open the gourds grown from the seed the swallow brought, a band of beggars and goblins came out and carried off all his wealth, and from the last gourd poured filth. Heungbu gladly took in his penniless brother. In 1843, Song Man-jae included this story as "Bak Taryeong" in Gwanuhui, his verses on the twelve pansori.`,
    imageAlt: "A Goryeo gourd-shaped celadon ewer of the thirteenth century. The body looks like a small gourd set on a large one, with a short spout and a long curving handle, covered in a soft green glaze.",
    annotations: [
      n("Two gourds", "A gourd-shaped ewer that looks like a small gourd stacked on a large one. It is Goryeo celadon of the thirteenth century."),
      n("Handle", "A long handle curving down to the body."),
      n("Spout", "A short spout for pouring wine. When Heungbu sawed open his gourds, singing \"Saw, saw, back and forth,\" rice, money and silk came pouring out."),
    ],
  },
  "yuris-broken-sword": {
    title: "Yuri's Broken Sword",
    owner: "Yuri, second king of Goguryeo",
    maker: "Unknown (Jumong broke it in two and hid one half)",
    power: "Half of a sword broken in two. When fitted to the other half, blood flowed and the two became one sword again.",
    firstRecord: "Kim Bu-sik, Samguk Sagi",
    summary: "The piece of sword Jumong hid under a pine on a seven-cornered stone when he left. His son Yuri found it and met his father.",
    story: `Driven out by the princes of Buyeo and leaving for the south, Jumong told his pregnant wife, Lady Ye: "If you bear a son, tell him that I have hidden something under a pine on a seven-cornered stone. The child who finds it and brings it to me is my son."

Yuri, growing up without a father, broke a woman's water jar while shooting at birds and was cursed as a fatherless child. Hearing his father's words from his mother, Yuri searched every mountain valley but could not find a seven-cornered stone. One day, sitting on the floor of his house, he heard a sound between a pillar and its foundation stone. The pillar was pine, and the foundation stone had seven corners. Beneath it he found a piece of a broken sword.

Yuri took the piece to Goguryeo and presented it to his father, King Dongmyeong. When the king brought out the other piece he kept and fitted them together, blood flowed and they joined into a single sword. Overjoyed, the king made Yuri crown prince, and Yuri became the second king of Goguryeo.`,
    imageAlt: "A Joseon sword and scabbard of the sixteenth to nineteenth century. Beside a straight sword with a golden guard and a ring-pommeled grip lies a red-lacquered scabbard.",
    annotations: [
      n("Ring pommel", "A ring is fitted at the end of the grip. This is a Joseon sword of the sixteenth to nineteenth century."),
      n("Blade", "A straight, slender blade. When the piece Yuri brought was fitted to Jumong's piece, blood flowed and they joined into a single sword."),
      n("Red scabbard", "A red-lacquered scabbard fitted with a ring and strap for wearing at the waist. Yuri found the piece of sword beneath a pine pillar on a seven-cornered foundation stone."),
    ],
  },
  oryonggeo: {
    title: "Haemosu's Five-Dragon Chariot",
    owner: "Haemosu, son of the heavenly emperor",
    maker: "Unknown",
    power: "A chariot drawn by five dragons. In the morning it comes down to earth, and in the evening it returns to heaven.",
    firstRecord: "Yi Gyu-bo, \"Lay of King Dongmyeong\"",
    summary: "The chariot of five dragons in which Haemosu traveled between heaven and earth. He came down in the morning and rose to heaven in the evening.",
    story: `After reading the story of King Dongmyeong, founder of Goguryeo, in the Old History of the Three Kingdoms, Yi Gyu-bo of Goryeo composed the long narrative poem "Lay of King Dongmyeong" in 1193. It opens with Haemosu, son of the heavenly emperor, descending from the sky.

Haemosu came down in the Oryonggeo, a chariot drawn by five dragons. His hundred or more followers all rode white swans, colored clouds floated in the sky, and music sounded within the clouds. Haemosu wore a crown of crow feathers and at his waist a sword shining with dragon light. In the morning he came down to earth to attend to affairs of state, and in the evening he rose to heaven, so people called him the Heavenly King's Son.

Haemosu wished to take Yuhwa, daughter of the water god Habaek, as his wife. After he won a contest of transformations with Habaek, Habaek put the drunken Haemosu with Yuhwa into a leather palanquin and set it on the five-dragon chariot. Before the chariot left the water, Haemosu woke from his drunkenness, tore the leather with Yuhwa's golden hairpin and rose to heaven alone. The son born to Yuhwa, left behind, was Jumong.`,
    imageAlt: "A stoneware pedestal vessel shaped like a pair of chariot wheels from Gaya, fifth century. On a flaring pedestal stand a pair of spoked wheels, topped by two horn-shaped cups.",
    annotations: [
      n("Two cups", "Two horn-shaped cups stand on the chariot. This pedestal vessel was fired in Gaya in the fifth century."),
      n("Spoked wheel", "A chariot wheel with each spoke cut out individually. Haemosu traveled between heaven and earth in the Oryonggeo, a chariot drawn by five dragons."),
      n("Pedestal", "A pedestal that flares like a trumpet. The people of Gaya and Silla buried vessels shaped like chariots, boats and horses with the dead."),
    ],
  },
  "cheoyong-mask": {
    title: "Mask of Cheoyong",
    owner: "Cheoyong, son of the Dragon of the East Sea",
    maker: "Unknown",
    power: "Merely by posting a picture of Cheoyong's face, the spirit that spreads disease is kept from entering the house.",
    firstRecord: "Iryeon, Samguk Yusa",
    summary: "The face of Cheoyong, who drove off the spirit of pestilence with song and dance. The people of Silla posted his face on their gates to keep evil away.",
    story: `When King Heongang of Silla went out to Gaeunpo on the shore of the East Sea, clouds and fog suddenly rolled in and he lost his way. Told that it was the work of the Dragon of the East Sea, the king ordered a temple built for the dragon, and the fog cleared; the delighted dragon appeared with his seven sons and danced. One of them, Cheoyong, followed the king to the capital, received an official post and married a beautiful wife.

One night Cheoyong came home to find the spirit of pestilence lying beside his wife. Cheoyong sang a song beginning, "Under the bright moon of the capital, I roamed far into the night," danced and withdrew. Moved, the spirit knelt and swore that from then on he would not enter any house where he saw even a picture of Cheoyong's face.

From then on the people of Silla posted Cheoyong's face on their gates to drive away evil. The music treatise Akhak Gwebeom, compiled in 1493, pictures the Cheoyong mask with a red face and a samo hat adorned with peony flowers and peaches, and the Cheoyong dance is still performed as a court dance.`,
    imageAlt: "A Joseon wooden mask of an old man from the nineteenth century. The black-painted face is carved with a wrinkled brow, open eyes and a prominent nose, and a long beard of hair hangs from the chin.",
    annotations: [
      n("Wrinkled brow", "A mask of an old man with deep wrinkles carved in the brow. It was carved in wood in nineteenth-century Joseon."),
      n("Open eyes", "The eyes are cut through so the wearer can see. Cheoyong sang and danced and withdrew before the spirit of pestilence."),
      n("Long beard", "A long beard of hair hangs from the chin. The Cheoyong mask in the Akhak Gwebeom has a red face and a samo hat adorned with peonies and peaches."),
    ],
  },
  "kim-yusins-sword": {
    title: "Kim Yu-sin's Treasured Sword",
    owner: "Kim Yu-sin, great general of Silla",
    maker: "Unknown",
    power: "Starlight came down from heaven and filled it with divine power.",
    firstRecord: "Kim Bu-sik, Samguk Sagi",
    summary: "The sword that was filled with divine power when starlight came down as Kim Yu-sin prayed on Mount Yeolbak. He led the way in uniting the Three Kingdoms.",
    story: `At seventeen, seeing Goguryeo, Baekje and the Malgal invading his country, Kim Yu-sin of Silla resolved to drive out the enemy. He went alone into a stone cave on Jungak, purified himself and prayed, making a vow to heaven, and on the fourth day an old man named Nanseung appeared and taught him secret arts.

The next year, as the invasions of the neighboring countries grew fiercer, Kim Yu-sin went alone with his treasured sword into a deep valley of Mount Yeolbak, burned incense and prayed to heaven. On the third night, rays of light from two stars, Heo and Gak, came down brightly and touched the sword, and the sword trembled as if moving by itself. Heaven had filled the treasured sword with divine power.

Kim Yu-sin later became the great general of Silla and, with King Taejong Muyeol and King Munmu, led the way in overthrowing Baekje and Goguryeo and uniting the Three Kingdoms. The Samguk Sagi devotes three of its ten volumes of biographies to his life.`,
    imageAlt: "A Joseon sword and scabbard of the sixteenth to nineteenth century. Beside a straight sword with a grip and guard decorated in silver and gold lies a scabbard with silvery fittings.",
    annotations: [
      n("Decorated grip", "Silver scrolls decorate the grip and guard. This is a Joseon sword of the sixteenth to nineteenth century."),
      n("Straight blade", "A straight blade. When Kim Yu-sin prayed on Mount Yeolbak, starlight came down and filled his treasured sword with divine power."),
      n("Scabbard and rings", "A silver-decorated scabbard with two rings for wearing at the waist. Kim Yu-sin later led the way in uniting the Three Kingdoms."),
    ],
  },
};
