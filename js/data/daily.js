/* デイリー配信リーディング
 * 毎朝の自動ルーチンがこのファイルを丸ごと上書き生成する（直近 7 日分を保持）。
 * days は日付降順。各 day = { date: "YYYY-MM-DD", passages: [readingPassages と同スキーマ + genre] }
 * このファイル以外は手書きデータであり、ルーチンは触らない。
 */
window.KE_DATA = window.KE_DATA || {};

KE_DATA.dailyReading = { days: [
    {
    date: "2026-11-23",
    passages: [
      {
        id: "d1123-1",
        title: "What Are Taxes and Why Do We Pay Them?",
        level: "★★☆",
        genre: "ビジネス",
        text: "Almost everyone, in almost every country, pays taxes. When you earn money from a job, a part of it goes to the government. When you buy something in a shop, a little extra is often added to the price. This money, collected by the government from its people and businesses, is called tax. But where does all this money go, and why do we have to pay it?\n\nThe simple answer is that taxes pay for the many things that we all share and use together. Think about the roads you travel on, the street lights at night, or the public parks where children play. Think about schools, hospitals, the police, and firefighters. These services are used by everyone, but they are very expensive to provide. No single person could pay for a hospital or a national road system alone.\n\nSo instead, everyone contributes a share through taxes, and the government uses this large pool of money to provide these services for the whole community. In this way, taxes are a kind of shared payment for a shared life.\n\nThere are different kinds of taxes. Some are taken from the money people earn. Others are added to things we buy. Governments also use taxes to help people in need, such as the elderly, the sick, or those without work.\n\nOf course, people often argue about how high taxes should be, and how the money should be spent. But the basic idea is simple and old: by pooling our money together, we can build and enjoy things that none of us could ever afford on our own.",
        summaryJa: "税金とは何か、なぜ払うのかについて。ほぼどの国でも、ほぼ誰もが税金を払う。仕事でお金を稼ぐと、その一部が政府へ行く。店で何か買うと、値段に少し上乗せされることが多い。政府が国民や企業から集めるこのお金を税という。だがこのお金はどこへ行き、なぜ払わねばならないのか。単純な答えは、税金が、私たちみなが共有し一緒に使う多くのものの費用を賄うということだ。通る道路、夜の街灯、子どもが遊ぶ公園を考えよう。学校、病院、警察、消防を考えよう。これらは誰もが使うが、提供するのに非常に費用がかかる。一人で病院や国の道路網を払える人はいない。だから代わりに、みなが税金で分担を出し、政府はこの大きな資金の集まりを使い、地域全体にこうしたサービスを提供する。税金は共有の暮らしへの共有の支払いの一種だ。税にはいろいろある。稼いだお金から取られるもの、買う物に加えられるものがある。政府は高齢者・病人・無職の人など困っている人を助けるのにも使う。税の高さや使い道で人々はよく議論する。だが基本の考えは単純で古い。お金を出し合えば、一人では決して賄えないものを築き楽しめる。",
        quiz: [
          { q: "What is tax?", options: ["Money collected by the government from people and businesses", "A kind of shop", "A private savings account"], answer: 0 },
          { q: "What do taxes mainly pay for?", options: ["Shared services like roads, schools, hospitals, and firefighters", "Only the government's holidays", "Nothing at all"], answer: 0 },
          { q: "What is the basic idea behind taxes?", options: ["By pooling money together, we can afford things no one could alone", "To make everyone poor", "To waste money on purpose"], answer: 0 }
        ]
      },
      {
        id: "d1123-2",
        title: "How Does a Microwave Oven Work?",
        level: "★★☆",
        genre: "テクノロジー",
        text: "A microwave oven can heat a bowl of soup or a plate of leftovers in just a minute or two, far faster than a normal oven. Even more strangely, it heats the food while the plate stays cool and the oven itself does not get hot. How can it cook food so quickly, seemingly from the inside, without any flame or glowing element?\n\nThe secret is a special kind of invisible energy wave, called a microwave. These waves are a bit like radio waves or the waves that carry light, but they have one very useful property: they are very good at giving their energy to water.\n\nAlmost all food contains water, hidden inside it. When you turn on a microwave oven, it fills the inside with these microwaves. The waves pass easily through the plate and into the food, where they reach the tiny particles of water.\n\nHere is the clever part. The microwaves make these water particles vibrate, shaking back and forth incredibly fast, millions of times a second. When any particles move and rub against each other like this, they create heat. So the water inside the food heats up, and this heat spreads through the whole dish, cooking it.\n\nThis explains the mysteries. The plate stays cooler because it usually contains little or no water, so the microwaves pass through it without heating it much. And the food heats quickly because the waves reach the water throughout the food, not just on the surface.\n\nSo a microwave oven cooks not with fire, but by shaking the water already hidden inside your food.",
        summaryJa: "電子レンジの仕組みについて。電子レンジはスープ一杯や残り物の皿を、普通のオーブンよりはるかに速く、ほんの一、二分で温められる。さらに不思議なことに、皿は冷たいまま、レンジ自体も熱くならずに食べ物を温める。炎も光る発熱体もないのに、なぜ内側からのように素早く調理できるのか。秘密はマイクロ波という特別な目に見えないエネルギーの波だ。この波は電波や光を運ぶ波に少し似ているが、とても有用な性質が一つある。水にエネルギーを与えるのが非常に得意なのだ。ほぼすべての食べ物は内部に水を隠し持つ。電子レンジを入れると、内部がこのマイクロ波で満たされる。波は皿を楽に通り抜けて食べ物に入り、水の小さな粒子に達する。ここが巧妙だ。マイクロ波はこの水の粒子を振動させ、毎秒何百万回も信じられないほど速く前後に揺らす。粒子が動いて互いにこすれ合うと熱が生じる。だから食べ物の中の水が熱くなり、この熱が皿全体に広がって調理する。皿が冷たいのは水をほとんど含まないからで、波はあまり熱さず通り抜ける。炎でなく、食べ物に隠れた水を揺らして調理するのだ。",
        quiz: [
          { q: "What are microwaves especially good at?", options: ["Giving their energy to water", "Making bright light", "Freezing food"], answer: 0 },
          { q: "How do microwaves heat the food?", options: ["They make the water particles vibrate fast, which creates heat", "They set the food on fire", "They blow hot air on it"], answer: 0 },
          { q: "Why does the plate stay cooler than the food?", options: ["It usually contains little or no water, so microwaves pass through it", "It is made of ice", "The food protects it"], answer: 0 }
        ]
      },
      {
        id: "d1123-3",
        title: "What Is World Heritage?",
        level: "★★★",
        genre: "世界情勢",
        text: "Scattered across our planet are some truly extraordinary places. There are ancient temples and pyramids built thousands of years ago, breathtaking mountains and forests, and historic city centres full of beautiful old buildings. Some of these places are so important and so special that they are considered to belong, in a sense, not just to one country, but to all of humanity. These are known as World Heritage sites.\n\nThe idea behind World Heritage is a hopeful one. It says that certain places are so valuable, either for their natural beauty or for their human history, that the whole world has a shared duty to protect them. The goal is to keep them safe, so that not only we, but also our children and their children far into the future, can see and enjoy them.\n\nAn international organisation keeps an official list of these special places. To be added to the list, a site must be judged to have outstanding value for all people. Famous examples include ancient wonders, great natural parks, and historic old towns from every part of the world.\n\nOnce a place is named a World Heritage site, countries agree to work together to protect it. This may mean guarding it from damage, helping to repair it, or supporting poorer nations that cannot afford to care for a treasure on their own.\n\nSo World Heritage is a beautiful example of global cooperation. It reflects the idea that the greatest treasures of our planet and our history are a gift shared by everyone, and a responsibility shared by all.",
        summaryJa: "世界遺産とは何かについて。惑星の各地に、実に並外れた場所が点在する。何千年も前に建てられた古代の寺院やピラミッド、息をのむ山や森、美しい古い建物に満ちた歴史的な市街地。こうした場所の一部はあまりに重要で特別なので、ある意味で一国だけでなく全人類に属すると見なされる。これが世界遺産だ。世界遺産の背後の考えは希望に満ちる。ある場所は、自然の美しさゆえ、あるいは人類の歴史ゆえにあまりに価値が高く、世界全体にそれを守る共有の務めがあるというのだ。目的はそれらを安全に保ち、私たちだけでなく、はるか未来の子や孫も見て楽しめるようにすることだ。ある国際機関がこうした特別な場所の公式の一覧を管理する。一覧に加わるには、全ての人にとって傑出した価値があると判断されねばならない。有名な例には、古代の驚異、大自然の公園、世界各地の歴史的な古い町がある。世界遺産に選ばれると、国々は協力して守ると合意する。損傷から守り、修復を助け、自力で守れない貧しい国を支えることもある。地球規模の協力の美しい例だ。",
        quiz: [
          { q: "What is the idea behind World Heritage?", options: ["Certain places are so valuable that the whole world should protect them", "Only rich people may visit them", "They should be sold to the highest bidder"], answer: 0 },
          { q: "Why might a place be named a World Heritage site?", options: ["For its outstanding natural beauty or human history", "Because it is new and modern", "Because it is cheap to build"], answer: 0 },
          { q: "What do countries agree to do for a World Heritage site?", options: ["Work together to protect it, even helping poorer nations", "Ignore it completely", "Hide it from everyone"], answer: 0 }
        ]
      },
      {
        id: "d1123-4",
        title: "Labor Thanksgiving Day: A Japanese Holiday",
        level: "★★☆",
        genre: "日本",
        text: "On the 23rd of November each year, Japan celebrates a national holiday called Labor Thanksgiving Day. On this day, people across the country have a day off from work and school. But it is more than just a day of rest. It is a day set aside to think about the value of work, and to feel grateful for the things that work produces.\n\nThe holiday has deep and ancient roots. For a very long time, around this time of year, Japan held a traditional harvest festival. This was a time to give thanks to nature for a good rice harvest, the food that would feed the people through the coming winter. The modern holiday grew out of this old tradition of gratitude.\n\nToday, the meaning has become broader. Labor Thanksgiving Day is about appreciating all kinds of work and the people who do it, from farmers and factory workers to doctors, teachers, and everyone whose effort helps society run. It is a day to recognise that the comfortable life we enjoy is built on the hard work of countless people.\n\nIn some schools, children make small gifts or draw pictures to thank the workers in their community, such as police officers, firefighters, or local shopkeepers.\n\nIn our busy modern lives, it is easy to take the work of others for granted. Labor Thanksgiving Day offers a gentle, yearly reminder to pause and feel thankful, not only for the food on our tables, but for the effort of all the people who help make our daily lives possible.",
        summaryJa: "勤労感謝の日、日本の祝日について。毎年十一月二十三日、日本は勤労感謝の日という国民の祝日を祝う。この日、全国の人々が仕事や学校を休む。だが単なる休みの日以上だ。働くことの価値を考え、働きが生み出すものに感謝するために設けられた日だ。この祝日には深く古い由来がある。非常に長い間、この時期に日本は伝統的な収穫祭を行った。良い米の収穫、来る冬の間人々を養う食べ物を自然に感謝する時だった。現代の祝日はこの古い感謝の伝統から生まれた。今日、意味はより広くなった。勤労感謝の日は、農家や工場労働者から医師、教師まで、努力が社会を動かすあらゆる種類の仕事とそれをする人々に感謝することだ。私たちの快適な生活が数えきれぬ人々の努力の上に築かれていると認める日だ。学校によっては、子どもが小さな贈り物を作ったり絵を描いたりして、警察官・消防士・地元の店主など地域の働く人に感謝する。忙しい現代の生活では他者の働きを当たり前に思いがちだ。勤労感謝の日は、立ち止まって感謝する穏やかな年に一度の機会を与えてくれる。",
        quiz: [
          { q: "What is Labor Thanksgiving Day about?", options: ["Thinking about the value of work and being grateful for what it produces", "A day only for shopping", "A day to do extra work"], answer: 0 },
          { q: "What are the holiday's ancient roots?", options: ["A traditional harvest festival giving thanks for a good rice harvest", "A famous battle", "The building of a castle"], answer: 0 },
          { q: "What do children in some schools do on this day?", options: ["Make gifts or draw pictures to thank community workers", "Stay up all night", "Refuse to go outside"], answer: 0 }
        ]
      },
      {
        id: "d1123-5",
        title: "Why Do We Have Fingerprints?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "Look closely at the tip of one of your fingers. You will see a pattern of tiny lines, curving into loops, arches, and swirls. These are your fingerprints. They are so familiar that we rarely think about them. Yet they hold two fascinating secrets: every person's fingerprints are unique, and scientists are still not completely certain why we have them at all.\n\nFirst, the uniqueness. The pattern of lines on your fingertips is yours alone. Even identical twins, who share the same genes, have slightly different fingerprints. This is because the patterns are shaped partly by tiny, random events before a baby is born. Because every set of fingerprints is different, they have long been used to identify people, for example in solving crimes.\n\nBut why do we have these ridged patterns in the first place? For a long time, the most popular idea was that fingerprints help us to grip. The theory was that the tiny ridges work like the tread on a car tyre, helping our fingers hold onto smooth or wet objects without slipping. This idea makes sense, though some scientists have questioned how much the ridges really help.\n\nAnother interesting idea is that the ridges make our fingertips more sensitive to touch. As a finger moves across a surface, the ridges may vibrate, helping tiny sensors in the skin feel fine details and textures more clearly.\n\nSo your fingerprints are both a unique signature, found on no one else in the world, and a small, clever tool, quietly helping you grip and feel the world around you.",
        summaryJa: "なぜ指紋があるのかについて。指先の一つをよく見てみよう。小さな線が曲がって輪や弓、渦を描く模様が見える。これが指紋だ。あまりに身近でめったに考えない。だが二つの魅力的な秘密を持つ。各人の指紋は唯一無二であること、そしてなぜ指紋があるのか科学者はまだ完全には確信していないことだ。まず唯一性。指先の線の模様はあなただけのものだ。同じ遺伝子を持つ一卵性双生児でさえ、指紋はわずかに異なる。模様が、赤ちゃんが生まれる前の小さく偶然の出来事に部分的に形づくられるからだ。どの指紋も違うので、長らく人の識別に、例えば犯罪の解決に使われてきた。だがそもそもなぜこの隆起した模様があるのか。長い間、最も有力な考えは、指紋が握るのを助けるというものだった。小さな隆起が車のタイヤの溝のように働き、滑らかな・濡れた物を滑らずつかむのを助けるという説だ。理にかなうが、隆起が本当にどれだけ助けるか疑う科学者もいる。もう一つの興味深い考えは、隆起が指先を触覚に敏感にするというものだ。指が面を動くと隆起が振動し、肌の小さなセンサーが細かな細部や質感をより鮮明に感じる助けになるのかもしれない。唯一の署名であり巧妙な道具だ。",
        quiz: [
          { q: "What is special about each person's fingerprints?", options: ["They are unique; even identical twins differ slightly", "They are all exactly the same", "They change every day"], answer: 0 },
          { q: "What was the most popular idea about why we have fingerprints?", options: ["The ridges help us grip smooth or wet objects, like a tyre's tread", "They make our hands bigger", "They store water"], answer: 0 },
          { q: "What is another interesting idea about the ridges?", options: ["They make our fingertips more sensitive to touch and texture", "They help us see", "They produce heat"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-11-22",
    passages: [
      {
        id: "d1122-1",
        title: "What Is a Brand?",
        level: "★★☆",
        genre: "ビジネス",
        text: "Imagine two pairs of shoes sitting side by side. They are made in a similar way and look almost the same. Yet one has a famous name and a well-known symbol on the side, and many people will happily pay much more for it. Why? The answer is one of the most powerful ideas in business: the brand.\n\nA brand is far more than just a company's name or logo. It is the whole identity of a company or product in people's minds. It includes the name, the symbol, the colours, and the style, but also something deeper: the feelings, memories, and promises that customers connect with it. A brand is, in a sense, the reputation of a product.\n\nA strong brand is extremely valuable. When people trust a brand, they feel confident about what they are buying, even before they try it. They expect a certain quality, and this trust makes them likely to choose that product again and again, and to recommend it to others.\n\nBuilding a good brand takes a long time and great care. A company must keep its promises, provide good products, and treat its customers well, year after year. Trust is slowly earned, but it can be quickly lost if a company disappoints its customers.\n\nThis is why companies protect their brands so carefully. A good brand is often worth more than the factories and machines a company owns.\n\nSo a brand is really a relationship of trust between a company and its customers. It is the quiet reason why, faced with two similar products, we so often reach for the name we know.",
        summaryJa: "ブランドとは何かについて。二足の靴が並んでいると想像しよう。似た作り方で、ほぼ同じに見える。だが一方には有名な名前とよく知られた記号が側面にあり、多くの人は喜んでずっと高く払う。なぜか。答えは商売で最も強力な考えの一つ、ブランドだ。ブランドは単なる会社の名前やロゴをはるかに超える。人々の心の中にある、会社や製品の全体的な独自性だ。名前・記号・色・様式を含むが、より深いもの、客がそれと結びつける感情・記憶・約束も含む。ある意味、製品の評判だ。強いブランドは非常に価値が高い。人はブランドを信頼すると、試す前でさえ買う物に自信を持てる。一定の品質を期待し、この信頼が何度もその製品を選ばせ、他人に勧めさせる。良いブランドを築くには長い時間と大きな注意が要る。会社は約束を守り、良い製品を提供し、客を大切に扱い続けねばならない。信頼はゆっくり得られるが、客を失望させれば素早く失われる。だから会社はブランドを慎重に守る。会社が持つ工場や機械より価値が高いことも多い。会社と客の信頼の関係だ。",
        quiz: [
          { q: "What is a brand?", options: ["The whole identity and reputation of a company or product in people's minds", "Only a company's phone number", "A kind of factory machine"], answer: 0 },
          { q: "Why is a strong brand valuable?", options: ["People trust it, so they feel confident and choose it again and again", "It makes products break faster", "It hides the product's name"], answer: 0 },
          { q: "How is a good brand built?", options: ["Slowly, by keeping promises and treating customers well year after year", "Instantly, with one advertisement", "By disappointing customers"], answer: 0 }
        ]
      },
      {
        id: "d1122-2",
        title: "How Does a Vacuum Cleaner Work?",
        level: "★★☆",
        genre: "テクノロジー",
        text: "A vacuum cleaner seems to perform a small miracle. You switch it on, move it across a dusty floor, and the dirt simply vanishes, sucked up and out of sight. It feels as though the machine is pulling the dust towards itself with some invisible force. In a way it is, and the secret lies in a simple but clever use of air.\n\nTo understand it, think about air pressure. The air all around us is constantly pushing on everything, in every direction. Normally we do not notice this, because the pushing is equal on all sides. A vacuum cleaner works by upsetting this balance.\n\nInside the machine is a fan, spun quickly by an electric motor. This fan pushes air out of the back of the vacuum cleaner. As air is pushed out, the space inside the machine is left with less air than before. This means the air pressure inside becomes lower than the normal air pressure outside.\n\nNow nature tries to fix the balance. The higher-pressure air outside rushes in to fill the low-pressure space inside, pushing its way through the only opening: the nozzle on the floor. This fast-moving stream of air rushes into the machine, and it carries loose dust and dirt along with it, just as a strong wind carries leaves.\n\nInside the vacuum cleaner, the air passes through a bag or a filter. This traps the dust, while letting the clean air flow on and out of the back.\n\nSo a vacuum cleaner does not really suck. It simply lowers the air pressure inside, and lets the pushing air of the whole world sweep the dust away.",
        summaryJa: "掃除機の仕組みについて。掃除機は小さな奇跡を行うように見える。スイッチを入れ、ほこりだらけの床の上を動かすと、汚れは単に消え、吸い込まれて見えなくなる。機械が目に見えない力でほこりを引き寄せているかのようだ。ある意味その通りで、秘密は空気の単純だが巧妙な利用にある。理解するには気圧を考えよう。周りの空気は常にあらゆるものをあらゆる方向に押している。普段気づかないのは、押す力が全方向で等しいからだ。掃除機はこの均衡を崩して働く。機械の中には、電動機で素早く回る羽根（ファン）がある。この羽根が空気を掃除機の後ろから押し出す。空気が押し出されると、機械の中は前より空気が少なくなる。つまり内部の気圧が外の普通の気圧より低くなる。すると自然が均衡を直そうとする。外の高い気圧の空気が、内部の低圧の空間を満たそうと勢いよく入り込み、唯一の開口部、床のノズルを通って押し入る。この速く動く空気の流れが機械へ突入し、強い風が葉を運ぶように、ゆるんだほこりや汚れを一緒に運ぶ。中で空気は袋やフィルターを通り、ほこりが捕らえられ、清浄な空気は後ろへ流れ出る。実は「吸う」のでなく、内部の気圧を下げるのだ。",
        quiz: [
          { q: "What does a vacuum cleaner's fan do?", options: ["It pushes air out of the back, lowering the air pressure inside", "It blows cold air on the floor", "It heats the dust"], answer: 0 },
          { q: "Why does air rush into the nozzle?", options: ["Higher-pressure air outside rushes in to fill the low-pressure space inside", "The dust pulls it in", "The floor pushes it"], answer: 0 },
          { q: "What traps the dust inside the machine?", options: ["A bag or a filter, while clean air flows out the back", "A magnet", "A small fire"], answer: 0 }
        ]
      },
      {
        id: "d1122-3",
        title: "What Is a Refugee?",
        level: "★★★",
        genre: "世界情勢",
        text: "Most people live their whole lives in or near the place where they were born. But sometimes, through no fault of their own, people are forced to leave their homes and even their countries, simply to survive. A person who is forced to flee their own country to escape serious danger is called a refugee.\n\nWhat makes someone a refugee is that they cannot safely stay at home. They may be fleeing a war that has destroyed their town, or they may be in danger because of who they are or what they believe. For such people, leaving is not a choice but a desperate necessity. They often must go quickly, carrying only what they can hold, leaving behind their homes, their jobs, and sometimes their families.\n\nThe journey of a refugee is usually very hard and dangerous. When they reach another country, they arrive with almost nothing, in a place where the language and customs may be strange to them. They need the most basic things: shelter, food, safety, and a chance to rebuild their lives.\n\nThis is why the world has agreed on an important idea: that refugees deserve protection and help. International organisations and many countries work to provide safe places to stay, food, and medical care. The hope is to give refugees a chance to live in safety until they can either return home or build a new life.\n\nBeing a refugee is not a choice, and it can happen to ordinary people anywhere, if their world suddenly falls apart. Helping them reflects a simple, shared belief: that everyone, everywhere, deserves to live in safety.",
        summaryJa: "難民とは何かについて。多くの人は生まれた場所やその近くで一生を過ごす。だが時に、自らの過失でなく、人々は生き延びるためだけに、家、さらには国を離れることを強いられる。深刻な危険から逃れるため自国から逃げざるを得ない人を難民という。難民たらしめるのは、安全に家にとどまれないことだ。町を破壊した戦争から逃げているかもしれず、何者であるか・何を信じるかゆえに危険にさらされているかもしれない。そうした人々にとって、去ることは選択でなく切実な必要だ。しばしば急いで、持てる物だけを携え、家・仕事・時に家族を後に残して行かねばならない。難民の旅はたいてい非常に厳しく危険だ。別の国に着くと、ほとんど何も持たず、言葉も習慣も馴染みのない場所に降り立つ。最も基本的なもの、住まい・食料・安全、そして生活を立て直す機会が要る。だから世界は重要な考えに合意した。難民は保護と助けに値するということだ。国際機関や多くの国が、安全な滞在先・食料・医療の提供に努める。難民が安全に暮らせるよう願ってのことだ。誰もがどこでも安全に生きるに値するという信念を映す。",
        quiz: [
          { q: "What is a refugee?", options: ["A person forced to flee their own country to escape serious danger", "A person on a holiday trip", "A kind of soldier"], answer: 0 },
          { q: "Why do refugees leave their homes?", options: ["It is a desperate necessity to survive, not a free choice", "They simply want a change of scene", "They are bored"], answer: 0 },
          { q: "What important idea has the world agreed on?", options: ["That refugees deserve protection and help", "That refugees should be ignored", "That no one should ever move"], answer: 0 }
        ]
      },
      {
        id: "d1122-4",
        title: "Geiko and Maiko: Keepers of Japanese Tradition",
        level: "★★☆",
        genre: "日本",
        text: "In the old streets of Kyoto, if you are lucky, you may catch a glimpse of a striking figure: a woman in a beautiful kimono, with an elegant hairstyle and graceful movements, walking quietly to an evening appointment. She is a geiko, or as she is more widely known outside Kyoto, a geisha. A geiko is a highly trained artist, a keeper of traditional Japanese arts.\n\nMany people misunderstand what a geiko is. She is, above all, a professional entertainer and artist, who has spent years mastering traditional skills. These skills include classical Japanese dance, playing traditional musical instruments, singing, and the gentle art of conversation. Her job is to bring beauty, culture, and a warm, refined atmosphere to the gatherings she attends.\n\nBecoming a geiko takes many years of dedicated training. A young woman who is still learning is called a maiko, an apprentice. A maiko can often be recognised by her especially colourful kimono and elaborate hairstyle. She lives and trains in a special house, learning her arts from older, experienced women, step by careful step.\n\nThis world is built on tradition, discipline, and respect. The arts that geiko and maiko perform have been passed down, almost unchanged, for hundreds of years.\n\nToday, there are far fewer geiko than in the past, which makes them even more precious. They are living keepers of a beautiful and ancient culture, carrying the refined arts of old Japan gracefully into the modern world, one careful step, one song, and one dance at a time.",
        summaryJa: "芸妓と舞妓、日本の伝統の担い手について。京都の古い街で、運が良ければ、印象的な姿を垣間見るかもしれない。美しい着物をまとい、優雅な髪型と上品な所作で、夕方のお座敷へ静かに歩く女性だ。彼女は芸妓、京都の外では芸者としてより広く知られる。芸妓は高度に訓練された芸術家で、日本の伝統芸能の担い手だ。多くの人は芸妓を誤解している。彼女は何より専門の芸人であり芸術家で、何年もかけて伝統の技を習得した人だ。その技には、古典日本舞踊、伝統楽器の演奏、歌、そして会話という穏やかな芸が含まれる。仕事は、出席する集まりに美・文化・温かく洗練された雰囲気をもたらすことだ。芸妓になるには何年もの熱心な修業が要る。まだ学んでいる若い女性は舞妓、見習いと呼ばれる。舞妓は特に色鮮やかな着物と凝った髪型でよく見分けられる。特別な置屋で暮らし修業し、年上の経験ある女性から一歩ずつ芸を学ぶ。この世界は伝統・規律・敬意の上に築かれる。芸は何百年もほぼ変わらず受け継がれてきた。今日、昔よりずっと少なく、一層貴重だ。古い日本の洗練された芸を現代へ優雅に運ぶ、生きた担い手だ。",
        quiz: [
          { q: "What is a geiko, above all?", options: ["A highly trained professional entertainer and artist of traditional arts", "A kind of cook", "A sports player"], answer: 0 },
          { q: "What skills does a geiko master?", options: ["Classical dance, traditional music, singing, and the art of conversation", "Flying planes", "Building houses"], answer: 0 },
          { q: "What is a 'maiko'?", options: ["An apprentice, a young woman still learning to become a geiko", "A retired geiko", "A type of kimono"], answer: 0 }
        ]
      },
      {
        id: "d1122-5",
        title: "Why Do We Get Goosebumps?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "It happens in a flash. A cold wind blows, or a piece of music gives you a thrill, and suddenly the skin on your arms is covered in tiny bumps, and the little hairs stand up on end. We call these goosebumps. They appear on their own, without us choosing them. But what are they, and why does our body make them?\n\nEach tiny bump forms around the root of a single hair. Attached to the base of every hair on your body is a very small muscle. When this muscle tightens, it pulls the hair upright and creates a little bump on the skin. When thousands of these tiny muscles tighten at once, your skin is covered in goosebumps.\n\nBut why does this happen? The surprising answer is that goosebumps are mostly a leftover from our distant ancestors, who were much hairier than we are today. For a furry animal, raising the hairs is very useful. In the cold, raised fur traps a thicker layer of warm air, like fluffing up a blanket, helping the animal stay warm. When facing an enemy, raised fur makes the animal look bigger and more frightening.\n\nHumans have kept this same reaction, even though we have lost most of our fur. So when you feel cold or afraid, your body still tries to fluff up a coat of fur that is no longer there.\n\nInterestingly, we also get goosebumps from strong emotions, like beautiful music or a powerful memory. So goosebumps are a curious little echo of our animal past, written quietly on our skin.",
        summaryJa: "なぜ鳥肌が立つのかについて。それは一瞬で起こる。冷たい風が吹く、あるいは音楽に感動すると、突然腕の肌が小さな粒で覆われ、細い毛が逆立つ。これを鳥肌という。自分で選ばずひとりでに現れる。だがこれは何で、なぜ体は作るのか。各小さな粒は一本の毛の根の周りにできる。体のすべての毛の根元には、とても小さな筋肉が付いている。この筋肉が縮むと毛を直立させ、肌に小さな粒を作る。何千ものこの小さな筋肉が一度に縮むと、肌は鳥肌で覆われる。だがなぜ起こるのか。意外な答えは、鳥肌が主に、今の私たちよりずっと毛深かった遠い祖先の名残だということだ。毛むくじゃらの動物にとって毛を立てるのはとても役立つ。寒さでは、立った毛が温かい空気の厚い層を閉じ込め、毛布をふくらませるように体を温める。敵に対しては、立った毛が体を大きく恐ろしく見せる。人間はほとんどの毛を失ったのに同じ反応を保っている。だから寒さや恐れを感じると、体はもうない毛皮をなおふくらませようとする。美しい音楽や強い記憶など強い感情でも鳥肌が立つ。動物だった過去の興味深い名残だ。",
        quiz: [
          { q: "What creates each goosebump?", options: ["A tiny muscle at the base of a hair tightening and pulling it upright", "A drop of water on the skin", "A small insect"], answer: 0 },
          { q: "Why do we get goosebumps, according to the passage?", options: ["It is mostly a leftover from our hairier ancestors", "To make us taller", "To clean the skin"], answer: 0 },
          { q: "How did raised fur help a furry animal?", options: ["It trapped warm air in the cold and made the animal look bigger to enemies", "It helped it swim", "It made it invisible"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-11-21",
    passages: [
      {
        id: "d1121-1",
        title: "What Makes a Good Negotiation?",
        level: "★★☆",
        genre: "ビジネス",
        text: "Whenever two people or groups want different things but need to reach an agreement, they must negotiate. A negotiation is simply a discussion aimed at reaching a deal that both sides can accept. It happens constantly in business, when agreeing on a price, a salary, or the terms of a contract. But it also happens in daily life, when deciding where to go on holiday with family or friends.\n\nMany people imagine that negotiation is a kind of battle, where one side wins and the other loses. But experts know that the best negotiations are not like this at all. The goal of a good negotiation is usually to find a solution where both sides feel they have gained something. This is sometimes called a win-win result.\n\nHow is this achieved? One key skill is listening. By truly understanding what the other side wants and why, you can often find a solution that works for everyone. Sometimes the other person's most important need is different from what you first assumed.\n\nAnother key is to be clear about your own goals, while staying respectful and calm. Good negotiators are firm about what they need, but they do not attack or insult the other person.\n\nPatience and creativity also help. Rushing often leads to a poor deal, while thinking of new options can unlock an agreement that first seemed impossible.\n\nSo good negotiation is not about defeating the other side. It is a skill of communication and problem-solving, a search for common ground. When it is done well, both sides walk away satisfied, and ready to work together again in the future.",
        summaryJa: "良い交渉とは何かについて。二人、または二つの集団が異なるものを望みつつ合意に達する必要があるとき、交渉せねばならない。交渉とは単に、双方が受け入れられる取り決めに達することを目指す話し合いだ。価格・給料・契約条件で合意するとき、商売で絶えず起こる。だが家族や友人と休暇の行き先を決めるときなど、日常生活でも起こる。多くの人は交渉を一方が勝ち他方が負ける戦いのように想像する。だが専門家は、最良の交渉はまったくそうでないと知っている。良い交渉の目的はたいてい、双方が何かを得たと感じる解決策を見つけることだ。時に「ウィンウィン」の結果と呼ばれる。どう達成するのか。鍵となる技能の一つは聞くことだ。相手が何を、なぜ望むかを真に理解すれば、皆にとって機能する解決策をしばしば見つけられる。相手の最も重要な必要が、最初の想定と違うこともある。もう一つの鍵は、敬意を保ち冷静でありつつ、自分の目標を明確にすることだ。良い交渉者は必要なことには毅然とするが、相手を攻撃も侮辱もしない。忍耐と創意も助ける。相手を打ち負かすことではない。共通点の探求だ。",
        quiz: [
          { q: "What is a negotiation?", options: ["A discussion aimed at reaching a deal both sides can accept", "A battle one side must win", "A kind of contract signed in secret"], answer: 0 },
          { q: "What is the goal of a good negotiation?", options: ["A 'win-win' result where both sides feel they have gained", "To defeat and insult the other side", "To make the other side lose everything"], answer: 0 },
          { q: "What is one key skill in negotiation?", options: ["Listening, to truly understand what the other side wants and why", "Shouting the loudest", "Refusing to speak at all"], answer: 0 }
        ]
      },
      {
        id: "d1121-2",
        title: "How Do Noise-Cancelling Headphones Work?",
        level: "★★☆",
        genre: "テクノロジー",
        text: "Imagine sitting on a noisy airplane, with the constant roar of the engines filling your ears. Now you put on a special pair of headphones, press a button, and suddenly, the roar fades away into near silence, even before any music plays. This almost magical trick is done by noise-cancelling headphones, and the science behind them is wonderfully clever.\n\nTo understand it, remember that sound travels as waves, a series of ups and downs moving through the air. The noise of an engine is a particular pattern of these waves. Here is the key idea: if you could create a second sound wave that is the exact opposite of the noise, the two waves would cancel each other out, leaving silence.\n\nThis is exactly what noise-cancelling headphones do. On the outside of the headphones is a tiny microphone, which constantly listens to the noise around you. A small computer inside instantly analyses this noise and creates a new sound wave that is its perfect opposite. Where the noise wave goes up, the new wave goes down, and the reverse.\n\nThis opposite wave is played into your ears through the headphones. When it meets the unwanted noise, the two waves collide and cancel out, so your ear hears almost nothing of the original sound. The roar of the engine simply disappears.\n\nThis clever method works best on steady, low sounds, like an engine or a fan. Sudden, sharp sounds, like a voice, are harder to cancel.\n\nSo noise-cancelling headphones do not block sound like earplugs. Instead, they fight sound with sound, using an opposite wave to create a pocket of calm.",
        summaryJa: "ノイズキャンセリングヘッドホンの仕組みについて。騒がしい飛行機に座り、絶え間ないエンジンの轟音が耳を満たすと想像しよう。そこで特別なヘッドホンを着け、ボタンを押すと、音楽が流れる前でさえ、突然轟音が消えてほぼ静寂になる。この魔法のような技はノイズキャンセリングヘッドホンによるもので、背後の科学は実に巧妙だ。理解するには、音が波、空気を進む上下の連なりとして伝わることを思い出そう。エンジンの騒音はこの波の特定の模様だ。鍵となる考えはこうだ。もし騒音とちょうど正反対の第二の音波を作れれば、二つの波は互いを打ち消し合い、静寂が残る。これこそノイズキャンセリングヘッドホンが行うことだ。ヘッドホンの外側に小さなマイクがあり、周りの騒音を絶えず聞く。中の小さなコンピューターが即座にこの騒音を分析し、その完全な反対の新しい音波を作る。騒音の波が上がる所で新しい波は下がり、逆も同じだ。この反対の波がヘッドホンから耳に流される。不要な騒音と出会うと二つの波がぶつかり打ち消し合い、耳は元の音をほぼ聞かない。エンジンのような一定で低い音に最もよく効く。耳栓のように遮るのでなく、音で音と戦うのだ。",
        quiz: [
          { q: "What is the key idea behind noise-cancelling?", options: ["Creating a sound wave that is the exact opposite of the noise, so they cancel out", "Playing very loud music over the noise", "Blocking the ears with plastic"], answer: 0 },
          { q: "What does the tiny microphone on the headphones do?", options: ["It constantly listens to the noise around you", "It plays music", "It measures temperature"], answer: 0 },
          { q: "What kind of sound does this method work best on?", options: ["Steady, low sounds like an engine or a fan", "Sudden, sharp sounds like a voice", "No sounds at all"], answer: 0 }
        ]
      },
      {
        id: "d1121-3",
        title: "What Is a Treaty?",
        level: "★★★",
        genre: "世界情勢",
        text: "When two or more countries want to agree on something important, they cannot simply shake hands and hope for the best. They need a serious, lasting, written promise that each side can trust. This formal, written agreement between nations is called a treaty, and treaties are one of the main tools that help keep the world running in an orderly way.\n\nA treaty is, in a sense, a contract between countries. Representatives from each nation discuss the details, often over a long time, until they reach an agreement everyone can accept. The terms are then written down carefully, and the leaders of each country formally sign and approve them. Once this is done, each country is expected to keep its promise.\n\nTreaties cover an enormous range of subjects. Some are peace treaties, officially ending a conflict between nations. Others are about trade, setting the rules for how countries buy and sell goods with each other. Many modern treaties deal with shared global problems, such as protecting the environment, banning dangerous weapons, or defending human rights.\n\nWhy do treaties matter so much? Because they allow countries to cooperate and to trust one another. A treaty turns a spoken promise into a clear, public commitment that other nations and the whole world can see.\n\nOf course, treaties are not always perfect. A country may break its promises, and there is no world police force to punish it. Yet most nations keep most treaties, because doing so builds trust and a good reputation. In this way, treaties quietly hold together much of the cooperation that our modern world depends upon.",
        summaryJa: "条約とは何かについて。二つ以上の国が何か重要なことで合意したいとき、単に握手してうまくいくよう願うわけにはいかない。各側が信頼できる、まじめで永続的な、書かれた約束が要る。この国家間の正式な書面の合意を条約といい、条約は世界を秩序立てて動かす主な道具の一つだ。条約はある意味、国同士の契約だ。各国の代表が、皆が受け入れられる合意に達するまで、しばしば長い時間をかけて細部を話し合う。その条件は丁寧に書き留められ、各国の指導者が正式に署名し承認する。これが済むと、各国は約束を守ると期待される。条約は実に幅広い主題を扱う。紛争を公式に終える平和条約もある。国同士の物の売買の規則を定める貿易のものもある。多くの現代の条約は、環境保護、危険な兵器の禁止、人権の擁護など、世界共通の問題を扱う。なぜ条約はそれほど大切なのか。国が協力し互いを信頼できるようにするからだ。条約は口約束を、他国や世界全体が見られる明確で公的な約束に変える。完璧ではなく破る国もあるが、多くの国は信頼と評判のため守る。現代世界の協力の多くを静かに支える。",
        quiz: [
          { q: "What is a treaty?", options: ["A formal, written agreement between nations", "A spoken promise with no record", "A kind of national flag"], answer: 0 },
          { q: "What is one subject that treaties can cover?", options: ["Peace, trade, the environment, or human rights", "Only the weather", "Only one person's opinion"], answer: 0 },
          { q: "Why do treaties matter so much?", options: ["They allow countries to cooperate and trust one another", "They make countries enemies", "They are never kept"], answer: 0 }
        ]
      },
      {
        id: "d1121-4",
        title: "Kadomatsu: Japan's New Year Decorations",
        level: "★★☆",
        genre: "日本",
        text: "If you visit Japan around the end of December, you will notice a special decoration appearing outside homes, shops, and offices. Standing on either side of many doorways is an arrangement of fresh green bamboo and pine, often tied neatly together. This is a kadomatsu, a traditional decoration made to welcome the New Year, the most important holiday in Japan.\n\nEach part of the kadomatsu carries meaning. The name itself means gate pine. Pine is used because it stays green all through the cold winter, and so it has long been a symbol of long life and strength. The bamboo, which grows quickly and straight, represents growth and honesty. Sometimes a sprig of plum blossom is added too, a hopeful sign of the coming spring.\n\nBut a kadomatsu is more than just a pretty decoration. According to old tradition, it has a special purpose: to welcome the gods of the New Year into the home. The fresh green plants are believed to act as a temporary resting place for these visiting spirits, inviting good fortune and blessings for the year ahead.\n\nFamilies usually put up their kadomatsu in the last days of December and take it down in early January. Because it is made of fresh, natural plants, a kadomatsu does not last long, which is part of its gentle beauty.\n\nSo a kadomatsu is a warm and hopeful sight. Placed carefully at the entrance, it quietly says to the New Year, and to everyone who passes by: you are welcome here, and we hope for good things to come.",
        summaryJa: "門松、日本の正月飾りについて。十二月の終わりごろ日本を訪れると、家や店、職場の外に特別な飾りが現れるのに気づく。多くの戸口の両脇に、新鮮な緑の竹と松を、しばしばきれいに束ねて立てた飾りがある。これが門松、日本で最も大切な祝日である正月を迎えるために作られる伝統的な飾りだ。門松の各部分に意味がある。名は「門の松」を意味する。松は寒い冬の間ずっと緑を保つので、長らく長寿と強さの象徴だ。速くまっすぐ育つ竹は成長と正直を表す。時に梅の花の小枝も添えられ、来る春の希望ある印となる。だが門松は美しい飾り以上のものだ。古い伝統によれば、特別な目的がある。正月の神々を家に迎えることだ。新鮮な緑の植物は、訪れる霊の一時的な依り代となり、来る年の幸運と恵みを招くと信じられる。家庭はたいてい十二月の末に門松を立て、一月初めに下ろす。新鮮な自然の植物でできているので長持ちせず、それも穏やかな美しさの一部だ。入り口に丁寧に置かれ、新年と道行く皆に静かに歓迎を告げる。",
        quiz: [
          { q: "What is a kadomatsu made of?", options: ["Fresh green bamboo and pine", "Metal and plastic", "Paper and glass"], answer: 0 },
          { q: "Why is pine used in a kadomatsu?", options: ["It stays green all winter, symbolising long life and strength", "It is the cheapest plant", "It smells bad to keep people away"], answer: 0 },
          { q: "According to tradition, what is the special purpose of a kadomatsu?", options: ["To welcome the gods of the New Year into the home", "To keep out all visitors", "To tell the time"], answer: 0 }
        ]
      },
      {
        id: "d1121-5",
        title: "How Do Snowflakes Form?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "On a cold winter day, millions of tiny snowflakes may drift down from the sky, covering the world in soft white. If you catch one on your glove and look closely, you may see something astonishing: a tiny, perfect, six-sided shape, more delicate and beautiful than anything a person could draw. But where do these lovely crystals come from, and how are they made?\n\nA snowflake begins its life high up in a cloud, where the air is freezing cold. Clouds are full of tiny drops of water and water vapour, which is water in the form of an invisible gas. When it is cold enough, this water vapour does not turn into a liquid drop. Instead, it freezes directly onto a tiny speck of dust, forming a minute crystal of ice.\n\nAs this tiny ice crystal moves through the cloud, more water vapour freezes onto it, and it slowly grows larger. Because of the way water molecules naturally join together when they freeze, the crystal always grows into a shape with six sides or six arms. This is why nearly every snowflake has six points.\n\nAs the snowflake travels, it passes through air of slightly different temperatures and wetness. These changing conditions shape its growing arms in countless ways. Since no two snowflakes follow exactly the same path, each one grows into a slightly different pattern. This is the origin of the famous idea that no two snowflakes are exactly alike.\n\nSo each snowflake is a tiny, frozen record of its own journey through the sky, a unique and beautiful work of nature, built from nothing but water and cold.",
        summaryJa: "雪の結晶はどうできるのかについて。寒い冬の日、何百万もの小さな雪片が空から舞い降り、世界を柔らかな白で覆うことがある。手袋の上で一つ捕らえてよく見ると、驚くべきものが見えるかもしれない。小さく完璧な六角形で、人が描けるどんなものより繊細で美しい。だがこの美しい結晶はどこから来て、どう作られるのか。雪片は、空気が凍えるほど冷たい雲の高い所で生を始める。雲は小さな水滴と水蒸気（目に見えない気体の形の水）で満ちている。十分冷たいと、この水蒸気は液体の滴にならない。代わりに小さなちりの粒に直接凍りつき、ごく小さな氷の結晶になる。この小さな氷の結晶が雲の中を動くうち、さらに水蒸気が凍りつき、ゆっくり大きくなる。水の分子が凍るとき自然に結びつく仕方のため、結晶は常に六辺か六本の腕を持つ形に育つ。だからほぼすべての雪片は六つの先端を持つ。雪片は進むうち、わずかに異なる温度と湿り気の空気を通る。この変わる条件が、育つ腕を無数の仕方で形づくる。同じ道を進む雪片は二つとないので、各々わずかに違う模様に育つ。これが「同じ雪片は二つとない」という有名な考えの由来だ。自分の空の旅の凍った記録だ。",
        quiz: [
          { q: "Where does a snowflake begin its life?", options: ["High up in a cloud, where the air is freezing cold", "In the warm ground", "Inside a river"], answer: 0 },
          { q: "Why does nearly every snowflake have six sides?", options: ["Of the way water molecules naturally join together when they freeze", "Someone cuts them that way", "By pure luck each time"], answer: 0 },
          { q: "Why is each snowflake slightly different?", options: ["No two follow exactly the same path through changing conditions", "They are all made in a factory", "They are actually all identical"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-11-20",
    passages: [
      {
        id: "d1120-1",
        title: "What Is Supply and Demand?",
        level: "★★☆",
        genre: "ビジネス",
        text: "Why does a bottle of water cost so little, while a diamond costs a fortune? Why do strawberries become cheaper in summer, and umbrellas sell out on a rainy day? Behind nearly every price in the world lies one of the most important ideas in all of economics: supply and demand.\n\nLet us start with demand. Demand simply means how much of something people want to buy. When many people want a product, we say demand is high. When few people want it, demand is low.\n\nSupply means how much of that product is available for sale. When there is a lot of it, supply is high. When it is rare or hard to make, supply is low.\n\nThe magic happens when these two forces meet, because together they shape the price. When demand is high but supply is low, the price tends to rise. Many buyers are competing for few goods, so sellers can charge more. This is why a rare painting or a ticket to a popular concert can be so expensive. On the other hand, when supply is high but demand is low, the price tends to fall. Sellers must lower prices to attract the few buyers who want their goods.\n\nPrices are always moving as these forces shift. A good harvest increases the supply of fruit, pushing prices down. A sudden craze increases demand for a toy, pushing prices up.\n\nSo supply and demand is a quiet, powerful dance happening behind every price tag. Understanding it helps explain why things cost what they do, all around us, every single day.",
        summaryJa: "需要と供給とは何かについて。なぜ水のボトルはこれほど安く、ダイヤモンドは大金がかかるのか。なぜイチゴは夏に安くなり、傘は雨の日に売り切れるのか。世界のほぼすべての価格の背後に、経済学で最も重要な考えの一つ、需要と供給がある。需要から始めよう。需要とは単に、人々がどれだけ買いたいかだ。多くの人が欲しければ需要が高いといい、少なければ低いという。供給とは、その製品がどれだけ売りに出ているかだ。たくさんあれば供給が高く、珍しく作りにくければ低い。魔法はこの二つの力が出会うときに起こる。共に価格を形づくるからだ。需要が高く供給が低いと、価格は上がる傾向がある。多くの買い手が少ない品を奪い合うので、売り手は高く付けられる。珍しい絵や人気コンサートの切符が高いのはこのためだ。逆に供給が高く需要が低いと、価格は下がる傾向がある。売り手は、欲しがる少数の買い手を引きつけるため値を下げねばならない。これらの力が動くと価格は常に動く。豊作は果物の供給を増やし値を下げ、突然の流行は玩具の需要を増やし値を上げる。すべての値札の裏の静かで力強い踊りだ。",
        quiz: [
          { q: "What does 'demand' mean?", options: ["How much of something people want to buy", "How heavy a product is", "The color of a product"], answer: 0 },
          { q: "What tends to happen when demand is high but supply is low?", options: ["The price tends to rise", "The price tends to fall to zero", "Nothing changes"], answer: 0 },
          { q: "Why can a rare painting be so expensive?", options: ["Many buyers compete for few goods, so sellers can charge more", "Paintings are always cheap", "No one wants it"], answer: 0 }
        ]
      },
      {
        id: "d1120-2",
        title: "How Does the Internet Work?",
        level: "★★☆",
        genre: "テクノロジー",
        text: "Every day, we use the internet to send messages, watch videos, and visit websites from all over the world. It feels like magic, as if all this information lives inside our own phone or computer. But in reality, the internet is something far more amazing: a vast network connecting millions of computers across the entire planet.\n\nAt its heart, the internet is simply a way for computers to talk to each other. The word itself means a network of networks. All around the world, computers are linked together by cables, including huge cables that run along the bottom of the oceans, and by wireless signals. This web of connections lets a computer in one country send information to a computer in another, in less than a second.\n\nBut how does the information travel? When you send something, such as a photo, it is not sent all in one piece. Instead, it is broken up into many tiny pieces called packets. Each packet travels separately across the network, perhaps even taking different routes, like cars finding their own way through a city. When all the packets arrive at the other end, the receiving computer puts them back together in the right order, and the photo appears, whole again.\n\nTo make sure packets reach the right place, every device on the internet has its own address, a unique number, so information can be sent exactly where it needs to go.\n\nSo the internet is not a single thing, but a giant, worldwide conversation between machines, constantly breaking information into pieces, sending it across the globe, and joining it back together, all in the blink of an eye.",
        summaryJa: "インターネットの仕組みについて。私たちは毎日、インターネットでメッセージを送り、動画を見て、世界中のウェブサイトを訪れる。まるで魔法のようで、この情報すべてが自分のスマホやパソコンの中にあるかのようだ。だが実際、インターネットはもっと驚くべきもの、惑星全体で何百万ものコンピューターをつなぐ広大なネットワークだ。核心的に、インターネットは単にコンピューター同士が話す手段だ。言葉自体が「ネットワークのネットワーク」を意味する。世界中で、コンピューターはケーブル（海底を走る巨大なケーブルを含む）や無線信号で結ばれている。このつながりの網が、一国のコンピューターから別の国のコンピューターへ、一秒足らずで情報を送らせる。だが情報はどう進むのか。何か、例えば写真を送るとき、一つの塊では送られない。パケットという多くの小さな断片に分けられる。各パケットは別々にネットワークを進み、異なる経路さえ通る。街で各自の道を見つける車のようだ。すべてのパケットが相手側に着くと、受け取るコンピューターが正しい順に組み直し、写真が丸ごと現れる。正しい場所へ届くよう、ネット上の各機器は固有の番号という自分の住所を持つ。機械同士の世界規模の会話だ。",
        quiz: [
          { q: "What is the internet, at its heart?", options: ["A vast network connecting millions of computers worldwide", "A single computer in one place", "A kind of television"], answer: 0 },
          { q: "How does information travel across the internet?", options: ["It is broken into tiny pieces called packets that travel separately", "It is sent all in one large piece", "It travels by post"], answer: 0 },
          { q: "How do packets reach the right place?", options: ["Every device has its own unique address, a number", "They are guided by hand", "They choose randomly and hope"], answer: 0 }
        ]
      },
      {
        id: "d1120-3",
        title: "How Do Scientists Around the World Work Together?",
        level: "★★★",
        genre: "世界情勢",
        text: "Some of the biggest questions in science are far too large for any single person, or even any single country, to answer alone. How did the universe begin? How can we cure a terrible disease? To tackle such enormous challenges, scientists from many different nations join forces, in one of the most hopeful forms of international cooperation.\n\nThis teamwork takes many shapes. Sometimes, countries pool their money and brains to build a single giant machine that no one nation could afford. Enormous telescopes that study distant stars, or huge laboratories that explore the tiny particles inside atoms, are often built and shared by many countries together. Scientists from all over the world travel to use them and share what they discover.\n\nCooperation is also vital in a crisis. When a dangerous new disease appears, scientists across the globe quickly share information about it. By working together and sharing their findings openly, researchers in different countries can develop tests, treatments, and vaccines far faster than any one nation could alone.\n\nMuch of this sharing happens through published research. When scientists make a discovery, they write it up and share it with the world, so that others can check it, learn from it, and build upon it. In this way, human knowledge grows like a great building, with each country adding its own bricks.\n\nScience, at its best, does not really belong to any one nation. A discovery made in one country can help people everywhere. By working together across borders, scientists remind us that curiosity and the search for truth are shared by all of humanity.",
        summaryJa: "世界中の科学者はどう協力するのかについて。科学の最大級の問いのいくつかは、どの一人、いや一国でも単独では答えるには大きすぎる。宇宙はどう始まったのか。恐ろしい病をどう治せるのか。こうした巨大な課題に挑むため、多くの国の科学者が力を合わせる。国際協力の最も希望ある形の一つだ。この協働は多くの形をとる。どの一国も負担できない一つの巨大な機械を作るため、国々が資金と頭脳を出し合うこともある。遠い星を調べる巨大望遠鏡や、原子内の小さな粒子を探る大きな実験施設は、しばしば多くの国が共同で建設し共有する。世界中の科学者がそれを使いに来て、発見を分かち合う。危機でも協力は不可欠だ。危険な新しい病が現れると、世界中の科学者が素早くその情報を共有する。協力して発見を率直に分かち合うことで、各国の研究者はどの一国よりはるかに速く検査・治療・ワクチンを開発できる。この共有の多くは発表された研究を通じて起こる。科学者は発見を書き世界と分かち合い、他者が確かめ学び積み重ねる。人類の知識は大きな建物のように育つ。科学は本当はどの一国のものでもない。好奇心と真実の探求は全人類が分かち合う。",
        quiz: [
          { q: "Why do scientists from many nations join forces?", options: ["Some questions are too large for any single person or country alone", "Because they are forced to by law", "Because science is easy"], answer: 0 },
          { q: "How does cooperation help in a disease crisis?", options: ["Sharing findings openly lets researchers develop tests and vaccines far faster", "It slows everything down", "It keeps all information secret"], answer: 0 },
          { q: "How does human knowledge grow, according to the passage?", options: ["Like a great building, with each country adding its own bricks", "By one country keeping all discoveries", "It never grows"], answer: 0 }
        ]
      },
      {
        id: "d1120-4",
        title: "Green Tea in Japanese Life",
        level: "★★☆",
        genre: "日本",
        text: "In Japan, there is one drink so common and so loved that it is woven into the very fabric of daily life: green tea. From a simple cup served with a meal to a formal ceremony lasting hours, green tea appears everywhere, enjoyed by people of all ages, all across the country.\n\nGreen tea and black tea actually come from the very same plant. The difference lies in how the leaves are treated after picking. For green tea, the leaves are heated quickly, often with steam, which keeps them green and gives the tea its fresh, slightly grassy taste. For black tea, the leaves are allowed to change colour first.\n\nThere are many kinds of Japanese green tea. The most common everyday tea is sencha, a refreshing drink served in homes and restaurants. A special, powdered green tea called matcha is brighter and stronger, and it is the tea used in the famous Japanese tea ceremony. Matcha is also now popular around the world in sweets and drinks.\n\nGreen tea is more than just a tasty drink. Many people believe it is very good for health, and it has been enjoyed for its calming yet refreshing effect for centuries. Offering a cup of tea to a guest is also a simple, warm act of welcome and respect.\n\nSo green tea is a quiet but constant companion in Japanese life. It is there in a quiet moment alone, in a friendly chat, and in the most solemn of ceremonies, a small green cup holding a long and gentle tradition.",
        summaryJa: "日本の生活における緑茶（日本茶）について。日本には、あまりに身近で愛され、日常生活の織物そのものに織り込まれた飲み物がある。緑茶だ。食事に添える一杯から、何時間も続く正式な儀式まで、緑茶は至る所に現れ、全国のあらゆる年齢の人に楽しまれる。緑茶と紅茶は実はまったく同じ植物から来る。違いは摘んだ後の葉の扱い方にある。緑茶では葉を素早く、しばしば蒸気で加熱し、緑を保ち、新鮮でやや草のような味を与える。紅茶では先に葉の色を変えさせる。日本の緑茶には多くの種類がある。最も一般的な日常の茶は煎茶で、家庭や飲食店で供されるさわやかな飲み物だ。抹茶という特別な粉末の緑茶はより鮮やかで濃く、有名な茶道で使われる。抹茶は今や世界中で菓子や飲み物に人気だ。緑茶はおいしい飲み物以上のものだ。健康に非常に良いと多くの人が信じ、落ち着かせつつさわやかな効果で何世紀も楽しまれてきた。客に一杯の茶を出すのは、歓迎と敬意の簡素で温かい行為でもある。日本の生活の静かで絶えぬ伴侶だ。",
        quiz: [
          { q: "What is the difference between green tea and black tea?", options: ["How the leaves are treated after picking, though they come from the same plant", "They come from totally different plants", "One is a drink and one is a food"], answer: 0 },
          { q: "What is 'matcha'?", options: ["A special powdered green tea used in the tea ceremony", "A kind of black tea", "A type of coffee"], answer: 0 },
          { q: "What does offering a cup of tea to a guest show?", options: ["A warm act of welcome and respect", "A wish for them to leave", "A kind of payment"], answer: 0 }
        ]
      },
      {
        id: "d1120-5",
        title: "How Do Archaeologists Learn About the Past?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "How do we know how people lived thousands of years ago, long before anyone wrote anything down? Much of what we know comes from the patient work of archaeologists, the scientists who study human history by digging up and examining the things that people left behind.\n\nOver thousands of years, old towns, villages, and objects slowly become buried under layers of soil and dust. Archaeologists carefully dig down through these layers to uncover them. But they do not simply dig for treasure. They work slowly and gently, often with small tools and brushes, because exactly where each object is found is just as important as the object itself.\n\nThis is because of a clever idea: deeper usually means older. As the years pass, new layers of earth form on top of old ones. So, in general, objects found in a deeper layer are older than objects found above them. By studying these layers, archaeologists can work out the order in which things happened.\n\nThe objects they find, called artifacts, are like clues in a mystery. A broken pot, an old coin, the remains of a meal, or the foundations of a house can all tell a story. From these pieces, archaeologists work like detectives, slowly building a picture of how people once lived: what they ate, what they believed, and how they worked.\n\nModern science helps too. Special tests can reveal the age of an object or what it was made of.\n\nSo archaeologists are the storytellers of the deep past, reading the silent clues in the earth to bring long-lost lives back to light.",
        summaryJa: "考古学者はどうやって過去を知るのかについて。誰も何も書き記す前の何千年も昔、人々がどう暮らしたか、私たちはどうして分かるのか。知っていることの多くは考古学者の忍耐強い仕事から来る。人々が残した物を掘り出し調べて人類史を研究する科学者だ。何千年もの間、古い町や村、物は土やちりの層の下にゆっくり埋もれる。考古学者はこれらの層を注意深く掘り下げて現す。だが単に宝を掘るのではない。各物がどこで見つかるかが物そのものと同じくらい重要なので、小さな道具や刷毛でゆっくり丁寧に作業する。これは巧妙な考えによる。深いほどたいてい古い、のだ。年月が経つと古い層の上に新しい土の層ができる。だから一般に、深い層で見つかる物は上の層の物より古い。これらの層を調べ、物事が起きた順序を割り出せる。見つける物は遺物と呼ばれ、謎の手がかりのようだ。割れた壺、古い硬貨、食事の残り、家の基礎、すべてが物語を語りうる。これらの断片から探偵のように、人々がかつてどう暮らし、何を食べ、何を信じ、どう働いたかの像をゆっくり築く。現代科学も助ける。特別な検査で物の年代や材質が分かる。過去の語り部だ。",
        quiz: [
          { q: "What do archaeologists study?", options: ["Human history, by digging up and examining things people left behind", "Only living animals", "The weather of the future"], answer: 0 },
          { q: "Why is where an object is found so important?", options: ["Deeper layers are usually older, showing the order things happened", "Deeper objects are always treasure", "The location does not matter"], answer: 0 },
          { q: "What are 'artifacts'?", options: ["Objects people left behind, which are like clues to a story", "A kind of modern computer", "Living plants"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-11-19",
    passages: [
      {
        id: "d1119-1",
        title: "What Makes a Good Team at Work?",
        level: "★★☆",
        genre: "ビジネス",
        text: "Most important work is not done by one person alone, but by a team. Whether building a bridge, running a shop, or creating a new product, groups of people must work together towards a shared goal. Yet some teams achieve wonderful things, while others, with equally talented members, struggle and fail. What is the secret? What makes a group of people into a good team?\n\nOne of the most important ingredients is clear communication. In a good team, members share information openly, listen carefully to one another, and are not afraid to ask questions or raise problems. When people do not talk clearly, mistakes and misunderstandings quickly appear.\n\nA second key ingredient is trust. Team members must be able to rely on each other to do their part. When there is trust, people feel safe to share new ideas, admit mistakes, and ask for help, without fear of being blamed. This makes the whole team stronger.\n\nGood teams also understand their roles. Each member knows what they are responsible for, and how their work fits with everyone else's. Like players on a sports team, each person has a position, and together they cover the whole field.\n\nFinally, a good team shares a common goal. Everyone understands what they are trying to achieve and why it matters. This shared purpose keeps people pulling in the same direction, even when the work is hard.\n\nSo a good team is far more than a group of clever individuals. It is a group that communicates, trusts, understands its roles, and works together, achieving things that no single person ever could alone.",
        summaryJa: "良い職場のチームを作るものは何かについて。大切な仕事の多くは一人でなく、チームで行われる。橋を建てるにせよ、店を運営するにせよ、新製品を作るにせよ、人々が共有の目標に向けて協力せねばならない。だが同じくらい有能な人員でも、素晴らしい成果を上げるチームもあれば、苦しみ失敗するチームもある。秘訣は何か。人の集まりを良いチームにするものは何か。最も重要な要素の一つは明確な意思疎通だ。良いチームでは、情報を率直に共有し、互いに注意深く聞き、質問や問題提起を恐れない。明確に話さないと、誤りや誤解がすぐ生じる。第二の鍵は信頼だ。各自が自分の役割を果たすと互いに頼れねばならない。信頼があると、責められる恐れなく新しい考えを共有し、失敗を認め、助けを求められる。これがチーム全体を強くする。良いチームは役割も理解する。各自が何に責任を持ち、自分の仕事が他の皆とどう合うか知る。スポーツのように各自に持ち場があり、共に全体を覆う。最後に、良いチームは共通の目標を分かち合う。皆が何を達成しようとし、なぜ大切かを理解する。賢い個人の集まり以上だ。",
        quiz: [
          { q: "What is one of the most important ingredients of a good team?", options: ["Clear communication", "Keeping all information secret", "Never speaking to each other"], answer: 0 },
          { q: "Why does trust make a team stronger?", options: ["People feel safe to share ideas, admit mistakes, and ask for help", "It lets people avoid all work", "It makes the team smaller"], answer: 0 },
          { q: "What keeps a good team pulling in the same direction?", options: ["A shared common goal that everyone understands", "Each person having a different secret goal", "No goal at all"], answer: 0 }
        ]
      },
      {
        id: "d1119-2",
        title: "How Do Robots Help Us Work?",
        level: "★★☆",
        genre: "テクノロジー",
        text: "When many people hear the word robot, they imagine a human-shaped machine from a film. But most real robots look nothing like that. A robot is simply a machine that can be programmed to carry out tasks, often on its own. Today, robots quietly help people in factories, hospitals, warehouses, and many other places, doing work that is hard, dangerous, or simply very repetitive.\n\nThe most common place to find robots is in factories. Here, robotic arms perform the same precise movements over and over, all day long, without ever getting tired or bored. They can weld metal, paint cars, or carefully place tiny parts, often faster and more accurately than a human hand. Because they do not tire, they help make products of a steady, reliable quality.\n\nRobots are especially valuable for jobs that are dangerous for people. They can work with poisonous chemicals, lift very heavy loads, or explore places that are too risky for humans, such as deep underwater or inside a damaged building.\n\nMore and more, robots are also moving beyond factories. In some warehouses, robots race around fetching goods. In hospitals, they may help carry supplies or assist doctors in delicate operations.\n\nRobots are not perfect, and they work best alongside people, not instead of them. A machine can repeat a task, but it cannot yet think, judge, and solve surprising problems the way a human can.\n\nSo robots are powerful helpers. By taking on the hard, dangerous, and repetitive work, they free people to focus on the tasks that need a human mind: thinking, deciding, and creating.",
        summaryJa: "ロボットはどう私たちの仕事を助けるのかについて。「ロボット」という言葉を聞くと、多くの人は映画の人型の機械を思い浮かべる。だが現実のロボットの多くはそう見えない。ロボットは単に、作業を行うようプログラムできる機械で、しばしば自分で動く。今日、ロボットは工場や病院、倉庫など多くの場所で静かに人を助け、難しい・危険な、あるいは非常に反復的な仕事を行う。ロボットが最もよくいるのは工場だ。ロボットアームが同じ精密な動きを一日中何度も、疲れも飽きもせず繰り返す。金属を溶接し、車を塗り、小さな部品を丁寧に置き、しばしば人の手より速く正確だ。疲れないので、安定し信頼できる品質の製品作りを助ける。人に危険な仕事で特に価値がある。有毒な化学物質を扱い、非常に重い荷を持ち上げ、深海や損傷した建物の中など人に危険すぎる場所を探れる。ますます工場を超えても広がる。倉庫で品物を取りに走り回り、病院で物資を運び、繊細な手術で医師を助けることもある。完璧ではなく、人の代わりでなく人と並んで働くのが最良だ。機械は作業を繰り返せても、人のように考え判断し意外な問題を解くことはまだできない。",
        quiz: [
          { q: "What is a robot?", options: ["A machine that can be programmed to carry out tasks, often on its own", "Always a human-shaped machine from a film", "A kind of computer game"], answer: 0 },
          { q: "Why are robots especially valuable for dangerous jobs?", options: ["They can handle poisons, heavy loads, or risky places instead of people", "They enjoy danger", "They never work at all"], answer: 0 },
          { q: "Why do robots work best alongside people?", options: ["Robots repeat tasks, but cannot yet think and solve surprising problems like humans", "People slow robots down", "Robots can do absolutely everything alone"], answer: 0 }
        ]
      },
      {
        id: "d1119-3",
        title: "What Is Foreign Aid?",
        level: "★★★",
        genre: "世界情勢",
        text: "The world is a place of great differences. Some countries are very wealthy, with good schools, modern hospitals, and clean running water for everyone. Others are much poorer, where many people struggle to find enough food, clean water, or basic medical care. To help close this gap, richer countries often give help to poorer ones. This help is called foreign aid.\n\nForeign aid comes in several forms. Sometimes it is emergency aid, given quickly after a disaster such as an earthquake, flood, or famine. This includes food, water, medicine, and shelter to save lives in a crisis.\n\nMore often, foreign aid is about longer-term development. The goal here is not just to help for a day, but to help a country improve itself for the future. Richer nations may provide money and experts to help build schools, hospitals, roads, and clean water systems. They may help train teachers, doctors, and farmers, so that the country can grow stronger on its own.\n\nWhy do countries give aid? Partly out of simple kindness, a wish to help fellow human beings in need. But there are other reasons too. A more stable, healthier, and wealthier world is safer and better for everyone, including the countries that give the aid.\n\nForeign aid is not always simple or perfect. It must be given carefully, so that it truly helps local people and does not create new problems. But at its heart, it reflects a hopeful idea: that the nations of the world have a shared responsibility to help one another, so that fewer people are left behind.",
        summaryJa: "対外援助（外国援助）とは何かについて。世界は大きな差のある場所だ。とても豊かで、良い学校・近代的な病院・皆のための清潔な水道がある国もある。もっと貧しく、多くの人が十分な食料や清潔な水、基本的な医療を得るのに苦労する国もある。この差を縮めるため、豊かな国はしばしば貧しい国を助ける。この助けを対外援助という。対外援助はいくつかの形で来る。地震・洪水・飢饉などの災害の後に素早く与えられる緊急援助のこともある。危機で命を救う食料・水・薬・住まいを含む。だがより多くの場合、対外援助はより長期の開発に関わる。目的は一日助けることでなく、国が将来に向けて自らを改善するのを助けることだ。豊かな国は、学校・病院・道路・清潔な水の仕組みの建設を助ける資金と専門家を提供する。教師・医師・農家の育成を助け、国が自力で強くなれるようにする。なぜ国は援助するのか。一部は単純な親切、困っている仲間を助けたいという願いからだ。だが他の理由もある。より安定し健康で豊かな世界は、援助する国を含め皆にとって安全で良い。完璧ではないが、国々が互いを助け合う共有の責任という希望を映す。",
        quiz: [
          { q: "What is foreign aid?", options: ["Help given by richer countries to poorer ones", "A kind of tax on travel", "A type of weapon"], answer: 0 },
          { q: "What is the goal of longer-term development aid?", options: ["To help a country improve itself for the future, not just for a day", "To keep the country weak", "To take the country's land"], answer: 0 },
          { q: "Why do countries give aid, besides kindness?", options: ["A more stable, healthier, wealthier world is safer and better for everyone", "To make the world poorer", "For no reason at all"], answer: 0 }
        ]
      },
      {
        id: "d1119-4",
        title: "Osoji: The Japanese Year-End Cleaning",
        level: "★★☆",
        genre: "日本",
        text: "In many countries, people do a big spring cleaning of their homes once a year. In Japan, there is a similar but special tradition, and it happens at the end of the year, in the cold days of December. It is called osoji, which simply means big cleaning, and it is an important way of preparing for the New Year.\n\nOsoji is far more than ordinary tidying up. Towards the end of December, families, schools, offices, and shops all take part in a thorough, deep clean. People clean places that are usually ignored: they wipe high windows, scrub floors, clear out cupboards, and throw away things they no longer need. The whole building is made fresh and spotless.\n\nThe reason behind osoji is both practical and spiritual. On a practical level, it is simply satisfying to begin a new year in a clean and tidy home. But there is a deeper meaning too. The cleaning is a way of clearing away the dust and troubles of the old year, both the physical dirt and, in a sense, the bad luck. By cleaning the home completely, people prepare a pure, fresh space to welcome the New Year and its blessings.\n\nThere is a good feeling in doing osoji together. Family members work side by side, and the hard work creates a sense of a fresh start shared by all.\n\nSo osoji is more than just cleaning. It is a yearly ritual of renewal, a way of closing the old year with care and opening the new one with a clean and hopeful heart.",
        summaryJa: "大掃除、日本の年末の清掃について。多くの国で、人々は年に一度家の「春の大掃除」をする。日本にも似た特別な伝統があり、年末、十二月の寒い日々に行われる。大掃除と呼ばれ、文字どおり「大きな掃除」を意味し、新年を迎える大切な準備だ。大掃除は普通の片付けをはるかに超える。十二月の終わりごろ、家庭・学校・職場・店がみな徹底した深い清掃に取り組む。普段無視される場所も掃除する。高い窓を拭き、床を磨き、戸棚を片付け、もう要らない物を捨てる。建物全体を新しく、ちりひとつなくする。大掃除の理由は実用的でも精神的でもある。実用面では、清潔で整った家で新年を始めるのは単純に気持ちよい。だがより深い意味もある。掃除は古い年のちりと厄介を、物理的な汚れと、ある意味で悪運を払いのける方法だ。家を完全に清めることで、新年とその恵みを迎える清らかで新鮮な空間を整える。共に大掃除をするのは良い気持ちだ。家族が肩を並べて働き、重労働が皆で分かち合う新たな出発の感覚を生む。年を気持ちよく閉じ、清らかで希望ある心で新年を開く更新の儀式だ。",
        quiz: [
          { q: "When does osoji take place?", options: ["At the end of the year, in December, to prepare for the New Year", "In the middle of summer", "Every single morning"], answer: 0 },
          { q: "What is the deeper meaning of osoji?", options: ["Clearing away the dust and troubles of the old year to welcome a fresh start", "Making the home dirtier", "Hiding things from guests"], answer: 0 },
          { q: "What good feeling comes from doing osoji together?", options: ["A sense of a fresh start shared by all the family", "A feeling of being completely alone", "Anger at one another"], answer: 0 }
        ]
      },
      {
        id: "d1119-5",
        title: "How Clever Are Crows?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "Crows and their relatives, such as ravens, are often overlooked as ordinary black birds. But scientists who study them have made a surprising discovery: these birds are among the most intelligent animals on the whole planet. In fact, some crows can solve problems that would puzzle a young child.\n\nOne of their most famous skills is using tools. Some crows bend a piece of wire into a hook to pull food out of a tube, or use a stick to dig insects out of a log. Making and using a tool to solve a problem was once thought to be something only humans and a few apes could do.\n\nCrows also have remarkable memories. They can remember the faces of individual people for years, and they seem to know which humans have been kind to them and which have been a threat. Recent studies suggest they can even memorise vast areas of land, remembering where food is likely to be found.\n\nThey are clever in social ways too. Crows live in groups, communicate with a wide range of calls, and can even work together to solve a problem or to chase away a larger enemy.\n\nPerhaps most impressively, crows seem able to plan for the future, saving a useful tool for a task they expect to face later. This kind of thinking ahead is very rare in the animal world.\n\nSo the next time you see a crow watching you from a rooftop, remember that behind those dark eyes is one of nature's finest problem-solvers, a feathered genius hiding in plain sight in our towns and cities.",
        summaryJa: "カラスはどれほど賢いのかについて。カラスやその仲間のワタリガラスは、しばしばありふれた黒い鳥として見過ごされる。だが研究する科学者たちは驚くべき発見をした。これらの鳥は惑星全体で最も知能の高い動物に数えられるのだ。実際、一部のカラスは幼い子どもを困らせるような問題を解ける。最も有名な技の一つは道具の使用だ。あるカラスは針金を曲げてかぎを作り管から食べ物を引き出し、小枝を使って丸太から虫を掘り出す。問題を解くため道具を作り使うのは、かつて人間と一部の類人猿だけができると思われていた。カラスは驚くべき記憶力も持つ。個々の人の顔を何年も覚え、どの人間が親切でどれが脅威だったか分かるようだ。最近の研究は、広い土地を記憶し、食べ物が見つかりそうな場所を覚えられることさえ示す。社会的にも賢い。群れで暮らし、幅広い鳴き声で意思疎通し、問題を解いたり大きな敵を追い払ったりするため協力さえできる。おそらく最も見事なのは、将来の計画ができるらしいことだ。後で直面すると予想する作業のため、役立つ道具を取っておく。この先読みは動物界で非常に珍しい。黒い目の奥に自然屈指の問題解決者がいるのだ。",
        quiz: [
          { q: "What surprising discovery have scientists made about crows?", options: ["They are among the most intelligent animals on the planet", "They cannot see at all", "They never make any sound"], answer: 0 },
          { q: "What is one famous skill of some crows?", options: ["Making and using tools, such as bending wire into a hook", "Reading books", "Driving cars"], answer: 0 },
          { q: "What rare ability do crows seem to have?", options: ["Planning for the future, such as saving a tool for a later task", "Living underwater", "Glowing in the dark"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-11-18",
    passages: [
      {
        id: "d1118-1",
        title: "Why Do Companies Advertise?",
        level: "★★☆",
        genre: "ビジネス",
        text: "Everywhere we look, we see advertising. It fills our screens, lines the streets on giant posters, and interrupts our videos and music. Companies spend enormous amounts of money on it, often many millions. This raises a simple question: why do businesses pour so much money into advertising, and what are they really trying to achieve?\n\nAt its most basic, advertising has two main goals: to inform and to persuade. The first job is simply to make people aware that a product exists. A company may have made a wonderful new product, but if nobody knows about it, nobody will buy it. Advertising spreads the word, telling customers what is available and where to find it.\n\nThe second job is to persuade. Beyond just giving information, advertising tries to make a product seem attractive and desirable. It may show happy people enjoying the product, or link it to good feelings like fun, comfort, or success. The aim is to make you want it, and to choose it over a rival's product.\n\nAdvertising also helps build a brand, a company's identity and reputation. By showing their name and message again and again, companies hope that customers will remember and trust them.\n\nOf course, as customers, it is wise to watch advertising with a thoughtful eye. Its goal is to sell, so it naturally shows products in the best possible light, and does not mention their faults.\n\nSo advertising is a powerful business tool. It is the main way companies connect with huge numbers of people, telling them a product exists and trying to convince them to buy it.",
        summaryJa: "企業はなぜ広告を出すのかについて。どこを見ても広告がある。画面を埋め、巨大なポスターで街に並び、動画や音楽を遮る。企業はしばしば何百万もの莫大な金をそれに費やす。ここに単純な疑問が生じる。なぜ企業はこれほど多くの金を広告に注ぎ、本当は何を達成しようとしているのか。最も基本的に、広告には二つの主な目的がある。知らせることと、説得することだ。第一の仕事は単に、製品が存在すると人々に気づかせることだ。素晴らしい新製品を作っても、誰も知らなければ誰も買わない。広告は言葉を広め、何があってどこで手に入るかを客に伝える。第二の仕事は説得だ。情報を与えるだけでなく、製品を魅力的で欲しいものに見せようとする。幸せな人が製品を楽しむ様子を見せ、楽しさ・快適さ・成功などの良い感情に結びつけることもある。狙いはあなたに欲しがらせ、競合の製品より選ばせることだ。広告はブランド、企業の個性と評判も築く。名前とメッセージを繰り返し見せ、客が覚え信頼することを願う。もちろん客としては、広告を思慮深い目で見るのが賢明だ。売るのが目的なので製品を最もよく見せ、欠点には触れない。",
        quiz: [
          { q: "What are the two main goals of advertising?", options: ["To inform and to persuade", "To hide products and to confuse", "To lose money"], answer: 0 },
          { q: "What is the 'inform' job of advertising?", options: ["To make people aware that a product exists", "To make the product disappear", "To lower all prices"], answer: 0 },
          { q: "Why is it wise to watch advertising thoughtfully?", options: ["Its goal is to sell, so it shows products in the best light and hides faults", "It always tells the complete truth", "It is created by customers"], answer: 0 }
        ]
      },
      {
        id: "d1118-2",
        title: "How Does a Loudspeaker Work?",
        level: "★★☆",
        genre: "テクノロジー",
        text: "From the tiny speaker in your phone to the huge ones at a concert, loudspeakers fill our world with sound: music, voices, and every other noise our devices make. A speaker takes an invisible electrical signal and turns it into sound that we can hear. In a way, it does the exact opposite job of a microphone. But how does it actually create sound from electricity?\n\nFirst, remember what sound really is. Sound is simply a vibration travelling through the air. When something vibrates back and forth quickly, it pushes on the air, creating waves that our ears detect as sound. So to make a sound, a speaker must make the air vibrate.\n\nInside a speaker is a cone, usually made of paper or light plastic, which can move back and forth. Attached to the cone is a coil of wire, which sits near a permanent magnet. Here is the clever part. When the electrical signal, carrying the music, flows through the coil, it turns the coil into a magnet too. As the signal rapidly changes, the coil is pushed and pulled by the nearby permanent magnet, moving back and forth very fast.\n\nBecause the coil is attached to the cone, the cone moves with it, vibrating in and out. This moving cone pushes the air, creating sound waves that travel to your ears. The pattern of the electrical signal becomes the exact pattern of the sound.\n\nSo a loudspeaker is a clever device that uses electricity and a magnet to make a cone dance, turning an invisible signal back into the music and voices we love to hear.",
        summaryJa: "スピーカーの仕組みについて。スマホの小さなスピーカーからコンサートの巨大なものまで、スピーカーは音楽や声、機器が出すあらゆる音で世界を満たす。スピーカーは目に見えない電気信号を、聞こえる音に変える。ある意味、マイクとちょうど逆の仕事をする。だがどうやって電気から音を作るのか。まず音とは本当は何かを思い出そう。音は単に空気を伝わる振動だ。何かが素早く前後に振動すると空気を押し、波を作り、耳がそれを音として捉える。だから音を出すにはスピーカーは空気を振動させねばならない。スピーカーの中には、紙か軽いプラスチックでできた前後に動けるコーン（円錐）がある。コーンには針金のコイルが付き、永久磁石の近くにある。ここが巧妙だ。音楽を運ぶ電気信号がコイルを流れると、コイルも磁石になる。信号が素早く変わると、コイルは近くの永久磁石に押し引きされ、とても速く前後に動く。コイルはコーンに付いているのでコーンも一緒に動き、出入りして振動する。この動くコーンが空気を押し、耳へ届く音波を作る。電気信号の模様がそのまま音の模様になる。",
        quiz: [
          { q: "What is sound, according to the passage?", options: ["A vibration travelling through the air", "A kind of light", "A type of electricity only"], answer: 0 },
          { q: "What makes the coil move back and forth?", options: ["The changing electrical signal makes it a magnet, pushed and pulled by a permanent magnet", "A small motor turns it", "Someone shakes it by hand"], answer: 0 },
          { q: "How does the moving cone create sound?", options: ["It pushes the air, creating sound waves that travel to your ears", "It produces light waves", "It stays perfectly still"], answer: 0 }
        ]
      },
      {
        id: "d1118-3",
        title: "Why Do Countries Protect Forests Together?",
        level: "★★★",
        genre: "世界情勢",
        text: "Spread across our planet are vast forests, from the cold pine woods of the north to the steaming rainforests near the equator. These forests are far more than just a lot of trees. They are among the most important and valuable things on Earth, and protecting them has become a task that no single country can manage alone.\n\nWhy do forests matter so much? First, they are home to a huge share of the world's wild animals, plants, and insects. A single rainforest can contain more kinds of life than entire continents elsewhere. Second, forests act like the planet's lungs. Trees take in carbon dioxide, a gas linked to a warming climate, and release the oxygen we breathe. Great forests help keep the whole world's climate in balance.\n\nYet forests are under threat. In many places, they are being cut down for wood or to clear land for farming. When a forest is lost, its animals lose their home, and the carbon stored in the trees is released, which can harm the climate everywhere.\n\nThis is why forests have become a global concern. A rainforest may stand within one country, but the benefits it gives, from clean air to a stable climate, are shared by the whole world. So richer nations sometimes help poorer ones to protect their forests, offering money and support in return for keeping the trees standing.\n\nProtecting forests is a difficult balance between the needs of local people and the needs of the planet. But slowly, the world is learning that these great forests are a treasure belonging, in a sense, to us all.",
        summaryJa: "なぜ国々は協力して森を守るのかについて。惑星の各地に、北の寒い松林から赤道近くの蒸し暑い熱帯雨林まで、広大な森が広がる。これらの森は単なる多くの木をはるかに超える。地球上で最も重要で価値あるものの一つで、守ることはどの一国も単独では担えない課題になった。なぜ森はそれほど大切なのか。第一に、世界の野生動物・植物・昆虫の大きな割合の住みかだ。一つの熱帯雨林が、他の大陸全体より多くの種類の命を含むこともある。第二に、森は惑星の肺のように働く。木は温暖化に結びつく気体、二酸化炭素を取り込み、私たちが吸う酸素を放つ。大きな森は世界全体の気候の均衡を保つ助けになる。だが森は脅威にさらされている。多くの場所で、木材のため、あるいは農地にするため切り倒されている。森が失われると動物は住みかを失い、木に蓄えられた炭素が放たれ、各地の気候を害しうる。だから森は地球規模の関心事になった。熱帯雨林は一国の中にあっても、与える恵み、清い空気から安定した気候までは世界全体で分かち合う。豊かな国が貧しい国の森の保護を助けることもある。地元の人々と地球の必要の難しい均衡だが、世界は学びつつある。",
        quiz: [
          { q: "Why do forests act like the planet's lungs?", options: ["Trees take in carbon dioxide and release the oxygen we breathe", "They pump water like a heart", "They make electricity"], answer: 0 },
          { q: "What happens when a forest is cut down?", options: ["Animals lose their home and stored carbon is released, harming the climate", "Nothing changes at all", "More animals appear"], answer: 0 },
          { q: "Why have forests become a global concern?", options: ["A forest stands in one country, but its benefits are shared by the whole world", "Forests belong to no planet", "Trees are worthless"], answer: 0 }
        ]
      },
      {
        id: "d1118-4",
        title: "Japanese Gardens: Nature in Miniature",
        level: "★★☆",
        genre: "日本",
        text: "Stepping into a traditional Japanese garden can feel like entering a world of deep peace. There are no loud colours or busy flower beds. Instead, there are carefully placed rocks, quiet pools of water, raked gravel, and a gentle arrangement of trees and moss. A Japanese garden is not just a pretty space; it is a carefully designed work of art, meant to calm the mind and reflect the beauty of nature itself.\n\nThe key idea behind a Japanese garden is to capture the feeling of natural landscapes, such as mountains, rivers, and seas, in a small and peaceful space. A few large rocks might represent distant mountains or islands. A pond or a stream of raked white gravel can suggest a river or the ocean. In this way, a whole landscape is created in miniature.\n\nGreat care is taken over every detail. Designers think about how the garden will look in each season: cherry blossoms in spring, cool green in summer, red leaves in autumn, and quiet snow in winter. Nothing is placed by accident. Even empty space is important, giving the eye room to rest.\n\nOne famous style is the Zen rock garden, where there are almost no plants at all, just rocks set in a bed of gravel, raked into flowing patterns. These gardens are made for quiet thought and meditation.\n\nA Japanese garden teaches a gentle lesson. True beauty does not have to be loud or crowded. By looking carefully at a few simple, natural things, arranged with great care, we can find a deep and lasting sense of calm.",
        summaryJa: "日本庭園、縮められた自然について。伝統的な日本庭園に足を踏み入れると、深い静けさの世界に入るように感じられる。派手な色やにぎやかな花壇はない。代わりに、丁寧に置かれた石、静かな水の池、整えられた砂利、木と苔の穏やかな配置がある。日本庭園は単なる美しい空間でなく、心を鎮め自然そのものの美を映すために入念に設計された芸術作品だ。日本庭園の核心にある考えは、山・川・海などの自然の風景の趣を、小さく穏やかな空間に捉えることだ。いくつかの大きな石が遠い山や島を表すこともある。池や整えた白砂利の流れが川や海を思わせる。こうして風景全体が縮小して作られる。細部すべてに細心の注意が払われる。設計者は各季節での見え方を考える。春の桜、夏の涼しい緑、秋の紅葉、冬の静かな雪。何一つ偶然に置かれない。余白さえ重要で、目に休む余地を与える。有名な一様式は枯山水で、植物がほとんどなく、砂利の床に石を据え、流れる模様に整える。静かな思索と瞑想のために作られる。本当の美は派手で混み合っている必要はないと教えてくれる。",
        quiz: [
          { q: "What is the key idea behind a Japanese garden?", options: ["To capture the feeling of natural landscapes in a small, peaceful space", "To grow as many flowers as possible", "To be as loud and colorful as possible"], answer: 0 },
          { q: "What might a few large rocks represent?", options: ["Distant mountains or islands", "Cars", "Houses"], answer: 0 },
          { q: "What is a Zen rock garden?", options: ["A garden with almost no plants, just rocks in raked gravel, for quiet thought", "A garden full of bright flowers", "A vegetable field"], answer: 0 }
        ]
      },
      {
        id: "d1118-5",
        title: "Why Do Leaves Change Colour in Autumn?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "Each autumn, something beautiful happens in forests and parks across much of the world. The green leaves of summer slowly transform into brilliant shades of yellow, orange, and red, before finally falling to the ground. It is one of nature's most lovely displays. But what causes this magical change of colour?\n\nThe answer begins with the green colour itself. Leaves are green because they are full of a substance called chlorophyll. This remarkable substance has a vital job: it uses sunlight to make food for the tree, through a process called photosynthesis. All through the warm, bright days of spring and summer, the leaves are busy making food, and they are packed with green chlorophyll.\n\nHere is the surprising part. The yellow and orange colours were hiding in the leaf all along, all summer. They were simply covered up by the much stronger green colour.\n\nAs autumn arrives, the days grow shorter and colder. The tree senses that winter is coming and begins to prepare for rest. It stops making food, and the green chlorophyll slowly breaks down and disappears. As the green fades away, the yellow and orange colours that were always there are finally revealed.\n\nThe bright red colours are a little different. In some trees, red pigments are actually made fresh in autumn, which can protect the leaf as it finishes its final work.\n\nSo the glorious colours of autumn are not really new. They are the leaf's true, hidden colours, shining through at last as the tree quietly prepares for the long sleep of winter.",
        summaryJa: "秋に葉の色が変わるのはなぜかについて。毎秋、世界の多くの地域の森や公園で美しいことが起こる。夏の緑の葉がゆっくりと鮮やかな黄・橙・赤に変わり、ついに地面へ落ちる。自然の最も美しい見せ物の一つだ。だが何がこの魔法のような色の変化を起こすのか。答えは緑色そのものから始まる。葉が緑なのは、葉緑素（クロロフィル）という物質に満ちているからだ。この驚くべき物質には重要な仕事がある。光合成という過程で、日光を使って木のための食べ物を作るのだ。春と夏の暖かく明るい日々ずっと、葉は食べ物作りに忙しく、緑の葉緑素で満たされている。ここが意外な点だ。黄や橙の色は、夏中ずっと葉の中に隠れていた。ただずっと強い緑色に覆われていただけだ。秋が来ると、日は短く寒くなる。木は冬の到来を察し、休む準備を始める。食べ物作りをやめ、緑の葉緑素はゆっくり分解して消える。緑が薄れると、ずっとそこにあった黄や橙の色がついに現れる。鮮やかな赤は少し違う。木によっては赤い色素が実は秋に新しく作られ、葉を守る。秋の輝く色は本当は新しくなく、葉の隠れた真の色なのだ。",
        quiz: [
          { q: "Why are leaves green in summer?", options: ["They are full of chlorophyll, which uses sunlight to make food", "They are painted green", "They are cold"], answer: 0 },
          { q: "Where were the yellow and orange colours during summer?", options: ["Hiding in the leaf, covered up by the stronger green colour", "In the soil", "They did not exist yet"], answer: 0 },
          { q: "What happens as autumn arrives?", options: ["The green chlorophyll breaks down, revealing the yellow and orange colours", "The leaves turn blue", "New green appears"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-11-17",
    passages: [
      {
        id: "d1117-1",
        title: "Why Is Good Customer Service Important?",
        level: "★★☆",
        genre: "ビジネス",
        text: "Think about two shops that sell exactly the same product at the same price. In one, the staff are rude, unhelpful, and seem annoyed by your questions. In the other, they are friendly, patient, and genuinely want to help. Which shop would you return to? For almost everyone, the answer is obvious. This simple example shows the power of good customer service.\n\nCustomer service means the way a business treats its customers, not just during a sale, but before and after it too. It includes answering questions kindly, solving problems quickly, and making each customer feel valued and respected. It may seem like a small thing, but it can make or break a business.\n\nThe reasons are powerful. First, good service keeps customers coming back. A happy customer is likely to return again and again, and over the years, this loyalty is worth a great deal of money. It is usually far cheaper to keep an existing customer than to find a new one.\n\nSecond, happy customers talk. A person who receives wonderful service often tells their friends and family, bringing in new customers for free. Sadly, the opposite is also true: a person treated badly may warn many others to stay away.\n\nFinally, good customer service builds a company's reputation, its good name, which is one of its most valuable possessions.\n\nSo customer service is not just about being polite. It is a smart and essential part of running a successful business. In a world where products are often similar, the way customers are treated can be the very thing that sets one business apart.",
        summaryJa: "なぜ良い顧客対応（カスタマーサービス）が重要なのかについて。同じ商品を同じ値段で売る二つの店を考えよう。一方では店員が無礼で助けにならず、質問に迷惑そうだ。もう一方では親切で辛抱強く、心から助けたがる。どちらの店にまた行くだろう。ほぼ誰にとっても答えは明らかだ。この簡単な例が良い顧客対応の力を示す。顧客対応とは、企業が客を扱う仕方で、販売中だけでなく前後も含む。親切に質問に答え、素早く問題を解決し、各客に大切にされ尊重されていると感じさせることだ。小さなことに見えて、事業の成否を分けうる。理由は強力だ。第一に、良い対応は客を再来させる。満足した客は何度も戻りやすく、長年でこの忠誠は大きな金額に値する。既存の客を保つ方が新しい客を見つけるよりたいてい安い。第二に、満足した客は話す。素晴らしい対応を受けた人は友人や家族に話し、無料で新しい客を連れてくる。残念ながら逆もまた真で、ひどく扱われた人は多くの人に近づくなと警告しうる。最後に、良い対応は企業の評判、最も価値ある財産の一つを築く。礼儀正しさだけでなく、成功する事業に不可欠だ。",
        quiz: [
          { q: "What does customer service mean?", options: ["The way a business treats its customers, before, during, and after a sale", "The price of a product", "The size of a shop"], answer: 0 },
          { q: "Why does good service keep customers coming back?", options: ["Happy customers return again, and this loyalty is worth a lot over time", "Customers must return by law", "It makes products cheaper"], answer: 0 },
          { q: "How can happy customers bring in new customers for free?", options: ["They tell their friends and family about the wonderful service", "They pay the shop extra", "They never speak to anyone"], answer: 0 }
        ]
      },
      {
        id: "d1117-2",
        title: "How Does an Escalator Work?",
        level: "★★☆",
        genre: "テクノロジー",
        text: "In shopping centres, stations, and airports, escalators carry streams of people smoothly up and down, all day long, without anyone having to lift a foot to climb. They seem to swallow people at one end and deliver them to another floor at the other. But how does this clever moving staircase actually work?\n\nThe heart of an escalator is a long loop of steps joined together in a chain, rather like a very large bicycle chain. This chain of steps runs in a continuous loop, round and round. At the top, powered by a strong electric motor, large toothed wheels pull the chain along, so the steps on the visible side are always climbing upward, carrying passengers with them.\n\nThe clever part is what happens at the top and bottom. The steps do not simply vanish. At each end, they slide under a metal comb and travel back, flat and hidden, underneath the staircase you can see, before rising up again at the other end to begin the journey once more. It is one endless loop.\n\nAnother neat trick is how the steps stay flat and level for you to stand on, even though the staircase is sloped. The steps are cleverly guided along two separate tracks, which keep each step horizontal as it climbs, so you never feel tilted.\n\nThe moving handrail beside you is driven by the same motor, moving at exactly the same speed as the steps, so your hand and feet travel together.\n\nSo an escalator is really an endless staircase on a chain, quietly turning a tiring climb into an effortless, moving ride.",
        summaryJa: "エスカレーターの仕組みについて。商業施設や駅、空港で、エスカレーターは一日中、人の流れを滑らかに上下へ運び、誰も足を上げて上る必要がない。一方の端で人を飲み込み、もう一方で別の階へ届けるように見える。だがこの巧妙な動く階段は実際どう働くのか。エスカレーターの心臓は、鎖状につながった段の長い輪だ。非常に大きな自転車のチェーンのようなものだ。この段の鎖はぐるぐると連続した輪で回る。上部で強力な電動機に動かされ、大きな歯車が鎖を引き、見える側の段は常に上へ上り、乗客を運ぶ。巧妙なのは上下の端で起こることだ。段は単に消えるのでなく、各端で金属のくしの下へ滑り込み、見える階段の下を平らに隠れて戻り、反対の端でまた上がって旅を繰り返す。一つの終わりなき輪だ。もう一つの妙技は、階段が傾いているのに段が平らで水平に保たれ、立てることだ。段は二本の別々の軌道に沿って巧みに導かれ、上る間も各段を水平に保つので、傾きを感じない。横の動く手すりも同じ電動機で、段とまったく同じ速さで動く。終わりなき階段だ。",
        quiz: [
          { q: "What is the heart of an escalator?", options: ["A long loop of steps joined in a chain, driven by a motor", "A single large spring", "A tank of water"], answer: 0 },
          { q: "What happens to the steps at the top and bottom?", options: ["They slide under a comb and travel back, hidden, before rising again", "They vanish completely", "They are thrown away"], answer: 0 },
          { q: "How do the steps stay flat for you to stand on?", options: ["They are guided along two tracks that keep each step horizontal", "They are held by hand", "They are not actually flat"], answer: 0 }
        ]
      },
      {
        id: "d1117-3",
        title: "How Do the Olympic Games Bring the World Together?",
        level: "★★★",
        genre: "世界情勢",
        text: "Every few years, something remarkable happens. Athletes from almost every nation on Earth travel to a single city to take part in the Olympic Games. For a short time, the eyes of the whole world turn to one place, to watch people run, jump, swim, and compete. The Olympics are far more than a sports event; they are one of the greatest gatherings of humanity on the planet.\n\nThe modern Olympic Games were revived more than a hundred years ago, with a hopeful dream: that sport could bring people and nations closer together. The idea was that by meeting peacefully in friendly competition, countries that might otherwise distrust one another could build understanding and respect.\n\nThe Games are full of powerful symbols of unity. At the opening ceremony, athletes from every country march together into the stadium. The five rings of the Olympic flag represent the different parts of the world joined as one. For a few weeks, rivals compete not with weapons, but with speed, strength, and skill, and they often embrace as friends afterwards.\n\nOf course, the Olympics are not perfect. They are expensive, and real political tensions in the world do not simply disappear during the Games. Yet something special still happens. People everywhere cheer for astonishing human achievement, and for a moment, differences of language and nation seem to matter a little less.\n\nAt their best, the Olympic Games remind us of a simple, hopeful truth: that despite all our differences, the people of the world can come together, in peace, to celebrate what human beings are capable of.",
        summaryJa: "オリンピックはどう世界を一つにするのかについて。数年ごとに、ある素晴らしいことが起こる。地球上のほぼすべての国の選手が、オリンピックに参加するため一つの都市へ集まる。短い間、世界中の目が一か所に向き、走り、跳び、泳ぎ、競う人々を見る。オリンピックはスポーツの催しをはるかに超え、地球上で最も大きな人類の集いの一つだ。近代オリンピックは百年以上前に復活した。スポーツが人と国を近づけられるという希望ある夢とともに。友好的な競争の中で平和に出会うことで、互いを不信しうる国々が理解と敬意を築けるという考えだ。大会は団結の力強い象徴に満ちる。開会式では全ての国の選手が共に競技場へ行進する。五輪旗の五つの輪は、一つに結ばれた世界の異なる地域を表す。数週間、競争相手は武器でなく速さ・力・技で競い、後にはしばしば友として抱き合う。もちろん完璧ではない。費用がかかり、世界の現実の政治的緊張が大会中に消えるわけでもない。それでも特別な何かが起こる。人々は驚くべき人間の達成に喝采し、一瞬、言語や国の違いが少し薄れて見える。",
        quiz: [
          { q: "What hopeful dream came with reviving the modern Olympics?", options: ["That sport could bring people and nations closer together", "That one country would win everything", "That sport would replace all jobs"], answer: 0 },
          { q: "What do the five rings of the Olympic flag represent?", options: ["The different parts of the world joined as one", "Five famous athletes", "Five kinds of money"], answer: 0 },
          { q: "What do the Games remind us, at their best?", options: ["That despite our differences, people can come together in peace", "That only strong countries matter", "That competition is pointless"], answer: 0 }
        ]
      },
      {
        id: "d1117-4",
        title: "Mochi: Japan's New Year Rice Cakes",
        level: "★★☆",
        genre: "日本",
        text: "As the New Year approaches in Japan, one special food appears everywhere: mochi. Mochi is a soft, chewy rice cake, and it holds a treasured place in Japanese food and celebration, especially at New Year, the most important holiday of the year.\n\nMochi is not made from ordinary rice. It is made from a special sticky kind of rice, which is first steamed until soft. Then comes the remarkable part. Traditionally, the hot rice is placed in a large wooden bowl and pounded, again and again, with a heavy wooden mallet. This hard work is often done by two people working in rhythm: one pounds while the other quickly turns and wets the rice between blows. Slowly, the grains break down and join into one smooth, white, stretchy mass. This lively, traditional event is called mochitsuki.\n\nThe finished mochi can be used in countless ways. It can be shaped into round cakes, grilled until it puffs up, or added to a special New Year soup called ozoni. It can also be wrapped around sweet fillings to make delicious treats.\n\nMochi carries meaning too. Its stretchy, long shape is linked to wishes for a long life, and round stacked mochi are often displayed as a New Year decoration, offered for good fortune in the year ahead.\n\nOne word of caution: mochi is very sticky, and must be eaten carefully in small bites. But for millions of people in Japan, the soft, chewy taste of mochi is one of the warmest and most cherished flavours of the New Year season.",
        summaryJa: "日本の正月の餅について。日本で新年が近づくと、特別な食べ物が至る所に現れる。餅だ。餅は柔らかく歯ごたえのある米の餅で、日本の食と祝い、特に一年で最も大切な祝日である正月で大切な位置を占める。餅は普通の米からは作らない。特別な粘りのある種類の米から作り、まず柔らかくなるまで蒸す。それから驚くべき部分が来る。伝統的に、熱い米を大きな木の臼に入れ、重い木の杵で何度もつく。この重労働はしばしば二人が呼吸を合わせて行う。一人がつき、もう一人が合間に素早く米を返し湿らせる。ゆっくり粒が崩れ、一つの滑らかで白く伸びる塊になる。この活気ある伝統行事を餅つきという。できた餅は数えきれぬほど多様に使える。丸い餅に形作り、膨らむまで焼き、お雑煮という特別な正月の汁に入れる。甘い具を包んでおいしい菓子にもする。餅には意味もある。伸びて長い形は長寿の願いに結びつき、丸く重ねた餅はよく正月飾りとして飾られ、来る年の幸運を祈って供えられる。一つ注意、餅はとても粘るので小さく一口ずつ注意して食べねばならない。",
        quiz: [
          { q: "What is mochi made from?", options: ["A special sticky kind of rice, steamed and pounded", "Wheat flour and sugar", "Potatoes"], answer: 0 },
          { q: "What is 'mochitsuki'?", options: ["The traditional event of pounding hot rice into mochi", "A New Year song", "A type of bowl"], answer: 0 },
          { q: "What does the stretchy, long shape of mochi represent?", options: ["Wishes for a long life", "A short, busy year", "Bad luck"], answer: 0 }
        ]
      },
      {
        id: "d1117-5",
        title: "Why Do We Dream?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "Every night, when we fall into a deep sleep, our minds often come alive with strange and vivid adventures. We may fly through the air, talk to people from our past, or find ourselves in places that do not exist. These are dreams, and almost everyone has them. Yet, despite how common they are, one of the oldest questions about the human mind remains only partly answered: why do we dream at all?\n\nDreams happen mostly during a certain stage of sleep when the brain is surprisingly active, almost as busy as when we are awake. During this time, our eyes move quickly behind our closed lids, and the most vivid dreams usually occur.\n\nScientists are still not completely sure why we dream, but they have several interesting ideas. One popular theory is that dreaming helps the brain to sort and store memories. During the day, we take in a huge amount of information, and sleep may be the time when the brain decides what to keep and what to let go, weaving the pieces into dreams along the way.\n\nAnother idea is that dreams help us process our emotions. By replaying worries or feelings in the safety of sleep, the mind may be working through difficult experiences, helping us feel calmer when we wake.\n\nDreams may also simply be the brain staying active and practising, trying out ideas and situations while the body rests.\n\nSo the exact purpose of dreams remains one of science's intriguing mysteries. Each night, our sleeping minds create whole worlds, for reasons we are still, slowly, beginning to understand.",
        summaryJa: "なぜ私たちは夢を見るのかについて。毎晩、深い眠りに落ちると、心はしばしば奇妙で鮮やかな冒険で生き生きとする。空を飛び、過去の人と話し、存在しない場所にいることもある。これが夢で、ほぼ誰もが見る。だがこれほど一般的なのに、人の心に関する最も古い問いの一つは、いまだ部分的にしか答えられていない。そもそもなぜ夢を見るのか。夢は主に、脳が驚くほど活発な、ほぼ起きているときと同じくらい忙しいある睡眠段階で起こる。この間、閉じたまぶたの奥で目が素早く動き、最も鮮やかな夢がたいてい起こる。科学者はなぜ夢を見るかまだ完全には分からないが、いくつか興味深い考えがある。有力な一説は、夢が脳の記憶の整理と保存を助けるというものだ。日中、私たちは膨大な情報を取り込み、睡眠は脳が何を残し何を手放すか決める時かもしれず、その過程で断片を夢に織り込む。もう一つの考えは、夢が感情の処理を助けるというものだ。眠りの安全の中で心配や感情を再生し、難しい経験を乗り越え、目覚めたとき穏やかに感じる助けになるのかもしれない。脳が活動を保ち練習しているだけかもしれない。夢の正確な目的は科学の魅力的な謎のままだ。",
        quiz: [
          { q: "When do the most vivid dreams usually occur?", options: ["During a stage of sleep when the brain is surprisingly active", "Only when we are fully awake", "Only in the morning"], answer: 0 },
          { q: "What is one popular theory about why we dream?", options: ["Dreaming helps the brain sort and store memories", "Dreams clean our teeth", "Dreams make us taller"], answer: 0 },
          { q: "What is another idea about the purpose of dreams?", options: ["They help us process our emotions in the safety of sleep", "They stop the heart", "They have no effect on the mind"], answer: 0 }
        ]
      }
    ]
    }
  ] };
