/* デイリー配信リーディング
 * 毎朝の自動ルーチンがこのファイルを丸ごと上書き生成する（直近 7 日分を保持）。
 * days は日付降順。各 day = { date: "YYYY-MM-DD", passages: [readingPassages と同スキーマ + genre] }
 * このファイル以外は手書きデータであり、ルーチンは触らない。
 */
window.KE_DATA = window.KE_DATA || {};

KE_DATA.dailyReading = { days: [
    {
    date: "2026-09-05",
    passages: [
      {
        id: "d0905-1",
        title: "Why Big Companies Buy Small Ones",
        level: "★★☆",
        genre: "ビジネス",
        text: "In the business news, you often read that a huge company has bought a much smaller one, sometimes for a surprising amount of money. It can seem strange. Why would a giant firm pay so much for a tiny team? The reasons are usually smart and simple.\n\nOne common reason is speed. Building a new product or skill from zero can take years. If a small company has already created something valuable — a clever technology, a loyal group of customers, or a talented team — buying it can be faster than starting alone. The big company gains a head start.\n\nTalent is another reason. Sometimes a large firm is really buying the people. A small group of brilliant engineers or designers can be worth a great deal, and joining a bigger company gives them more money and tools to work with.\n\nBuying a rival can also remove competition or fill a gap. If a small company is growing fast in an area the giant wants to enter, buying it solves two problems at once.\n\nOf course, these deals carry risks. The price may be too high, or the two companies may not fit well together. Many purchases fail to work as planned, and the new team may lose its spark inside a large organization.\n\nStill, when done wisely, buying a small company can bring fresh ideas and energy — a shortcut to the future that money alone cannot always build.",
        summaryJa: "ビジネスニュースでは、巨大企業がずっと小さな会社を、時に驚くほどの金額で買収したとよく報じられる。奇妙に見えるが、理由はたいてい合理的だ。一つは速さ。新しい製品や技術を一から作るには何年もかかるが、小さな会社が既に価値ある技術や忠実な顧客、優秀なチームを持っていれば、買う方が速く先行できる。人材も理由で、実は「人」を買っていることもある。少数の優れた技術者やデザイナーは大きな価値を持つ。競合の買収は競争を減らし、空白を埋める。ただし価格が高すぎたり相性が悪かったりする危険もあり、失敗も多く、買われたチームが大組織で輝きを失うこともある。賢く行えば新しい発想と活力をもたらす、未来への近道になる。",
        quiz: [
          { q: "What is one common reason a big company buys a small one?", options: ["Speed — gaining a valuable product or skill faster than building it alone", "To close the small company forever", "Because it has too much empty space"], answer: 0 },
          { q: "How can buying a small company be about talent?", options: ["The big firm is really buying its skilled people", "The big firm wants no employees", "Talent has no value in business"], answer: 0 },
          { q: "What risk does the passage mention about these deals?", options: ["The price may be too high or the companies may not fit well", "They always succeed perfectly", "They are completely free"], answer: 0 }
        ]
      },
      {
        id: "d0905-2",
        title: "How Your Map App Knows the Traffic",
        level: "★★☆",
        genre: "テクノロジー",
        text: "Have you ever wondered how the map app on your phone knows that a road is busy? It can warn you about a traffic jam ahead, suggest a faster route, and even guess what time you will arrive. This feels almost like magic, but it is really the result of clever technology working quietly in the background.\n\nThe secret is that many phones share their location and speed with the map service. When thousands of phones on the same road are moving slowly, the app understands that traffic is heavy there. When they move quickly, the road is clear. No single person's trip matters much; it is the pattern from many users together that paints the picture.\n\nThe app also uses history. It has learned, over time, that certain roads are always crowded at certain hours. By mixing this past knowledge with live data from phones, it can make smart guesses about the road ahead.\n\nOf course, this raises questions about privacy. To protect users, good map services mix the data together and remove personal details, so the system sees \"traffic,\" not \"this exact person.\" Users can also usually turn location sharing off.\n\nThe result is a tool that saves time and reduces stress for millions of drivers every day. It is a fine example of how small pieces of shared information, gathered wisely, can become something genuinely helpful for everyone.",
        summaryJa: "スマホの地図アプリが道路の混雑をどう知るのか、不思議に思ったことはないだろうか。前方の渋滞を知らせ、速い経路を提案し、到着時刻まで推測する。魔法のようだが、実は裏で静かに働く技術のおかげだ。秘密は、多くのスマホが位置と速度を地図サービスに共有していることだ。同じ道の何千ものスマホがゆっくり動けば渋滞、速く動けば空いていると分かる。一人の移動は重要でなく、多数の利用者の全体の傾向が絵を描く。過去の履歴も使い、特定の時間に混む道を学ぶ。生のデータと合わせ賢く推測する。個人情報の懸念には、データをまとめ個人情報を除いて「渋滞」だけを見るようにし、共有をオフにもできる。共有された小さな情報が賢く集まり、皆に役立つ好例だ。",
        quiz: [
          { q: "How does a map app usually know a road is busy?", options: ["Many phones on the road share their location and speed, showing slow movement", "It calls each driver", "It guesses randomly"], answer: 0 },
          { q: "Besides live data, what else does the app use?", options: ["History of which roads are crowded at certain hours", "The color of the cars", "The weather on the moon"], answer: 0 },
          { q: "How do good map services protect privacy?", options: ["They mix data together and remove personal details", "They publish every user's name", "They never protect anything"], answer: 0 }
        ]
      },
      {
        id: "d0905-3",
        title: "The World's Growing Cities",
        level: "★★★",
        genre: "世界情勢",
        text: "For most of human history, the majority of people lived in the countryside, close to farms and fields. Today, that has changed. More than half of all people now live in cities, and that share keeps rising. Around the world, cities are growing quickly as people move to them in search of work, education, and a better life.\n\nThere are good reasons for this shift. Cities often offer more jobs, better schools and hospitals, and a wider range of choices. When people live close together, ideas and businesses can grow faster. Many of the world's new industries begin in busy urban areas.\n\nBut rapid growth brings serious challenges. When too many people arrive too quickly, there may not be enough housing, clean water, or transport for everyone. Traffic, pollution, and high living costs can make life hard. Some newcomers end up in poor, crowded neighborhoods with few services.\n\nCities and governments are trying many solutions. They build public transport to reduce traffic, plan green spaces to improve health, and design taller buildings to fit more homes in less space. Good planning can turn a crowded city into a comfortable one.\n\nThe trend toward city life is unlikely to stop. The great question of our time is not whether people will live in cities, but how to make those cities healthy, fair, and pleasant places for the billions who will call them home.",
        summaryJa: "人類の歴史の大半で、多くの人は農地に近い田舎に暮らしていた。今は変わり、半数以上が都市に住み、その割合は上がり続ける。世界中で、仕事や教育、より良い暮らしを求めて人が移り、都市は急速に成長している。理由はある。都市は仕事や学校、病院が多く選択肢も広い。人が近くに住むと発想や事業が速く育ち、新産業の多くは都市で生まれる。だが急成長は深刻な課題も招く。人が一気に増えると住宅や清潔な水、交通が足りず、渋滞や汚染、高い生活費が生活を苦しくし、サービスの乏しい過密地区に住む人も出る。都市と政府は、公共交通や緑地、高層住宅など多くの解決策を試みる。良い計画は過密な都市を快適にできる。問いは都市に住むかどうかでなく、いかに健康で公正で快適な都市にするかだ。",
        quiz: [
          { q: "How has where people live changed today?", options: ["More than half of all people now live in cities", "Everyone still lives on farms", "Cities have all disappeared"], answer: 0 },
          { q: "Why do people move to cities?", options: ["For work, education, and a better life", "To find fewer choices", "To avoid all jobs"], answer: 0 },
          { q: "What is one challenge of rapid city growth?", options: ["Not enough housing, clean water, or transport for everyone", "Too much empty space", "No people at all"], answer: 0 }
        ]
      },
      {
        id: "d0905-4",
        title: "Why Japanese Students Clean Their Schools",
        level: "★★☆",
        genre: "日本",
        text: "In many countries, cleaning a school is the job of paid staff. In Japan, something different happens. Almost every day, students themselves pick up brooms and cloths and clean their own classrooms, hallways, and even the toilets. To visitors, this can be surprising. Why do children do the cleaning?\n\nThe custom is about much more than keeping the school tidy. It is seen as an important part of education. By cleaning the space they use, students learn responsibility and respect. They understand that a mess does not disappear by itself, and that someone must always care for a shared place.\n\nThe activity also builds teamwork. Students clean in small groups, sharing the work and helping one another. A child who cleans a room is less likely to make it dirty later. In this way, a simple daily task quietly teaches good habits that last a lifetime.\n\nThis idea reaches beyond the school gates. Japanese sports fans are famous for cleaning up the stadium after a match, and workers often tidy their own workspaces with care. Many people trace this attitude back to those childhood cleaning times.\n\nThe lesson is gentle but powerful. Taking care of your surroundings is a way of showing respect — for others, for your community, and for yourself. A broom in a student's hands is, in a sense, a quiet teacher.",
        summaryJa: "多くの国では学校の掃除は雇われた職員の仕事だが、日本では違う。ほぼ毎日、生徒自身がほうきや雑巾を手に、自分の教室や廊下、トイレまで掃除する。訪問者には驚きだ。なぜ子どもが掃除するのか。この習慣は校舎をきれいに保つ以上の意味を持ち、教育の大切な一部とされる。自分が使う場所を掃除することで責任と敬意を学ぶ。汚れは自然には消えず、共有の場は誰かが世話をせねばならないと理解する。少人数で協力して掃除し、仲間を助ける。自分で掃除した部屋は汚しにくい。こうして日々の作業が一生続く良い習慣を静かに教える。この考えは校門の外にも及ぶ。日本のスポーツファンは試合後にスタジアムを掃除することで有名で、職場を丁寧に整える人も多い。身の回りの世話は、他者や地域、自分への敬意の表し方だ。",
        quiz: [
          { q: "What do Japanese students do almost every day at school?", options: ["They clean their own classrooms, hallways, and toilets", "They paint the school", "They cook all the meals"], answer: 0 },
          { q: "What is the custom really about, beyond tidiness?", options: ["Learning responsibility, respect, and teamwork", "Making the school dirty", "Avoiding all work"], answer: 0 },
          { q: "How does this attitude reach beyond school?", options: ["Fans clean stadiums and workers tidy their own workspaces", "People never clean anywhere else", "It disappears after childhood"], answer: 0 }
        ]
      },
      {
        id: "d0905-5",
        title: "Growing Tiny Organs in the Lab",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "To understand a disease, scientists often need to study human tissue. But it is difficult and risky to experiment on a living person, and simple cells in a dish do not behave like a real body part. Now, researchers have a remarkable new tool: tiny, living models of human organs, grown carefully in the laboratory.\n\nThese small structures are sometimes called \"organoids.\" Starting from special cells, scientists guide them to grow into miniature versions of a stomach, a lung, or a piece of the brain. These models are far simpler than real organs, but they can copy some of their key behavior. That makes them very useful for research.\n\nWith lab-grown tissue, scientists can watch how a disease develops and test how a new medicine might work — all without harming a patient. For example, researchers can study how cancer cells try to spread, or how an organ reacts to a virus, in a safe and controlled way.\n\nThe technology is still young and has limits. An organoid is not a full organ; it cannot think, breathe, or replace a human part. And growing these models well takes great skill and care.\n\nEven so, the promise is huge. By studying life in miniature, scientists can learn faster, test more safely, and search for cures with fresh eyes. Sometimes the biggest advances in medicine come from the smallest living things.",
        summaryJa: "病気を理解するには人の組織を調べる必要が多いが、生きた人で実験するのは難しく危険で、皿の中の単純な細胞は本物の臓器のようには振る舞わない。今、研究者は驚くべき新しい道具を得た。実験室で丁寧に育てた、人の臓器の小さな生きた模型だ。これらは「オルガノイド」と呼ばれる。特別な細胞から、胃や肺、脳の一部の小型版へと育てる。本物よりずっと単純だが主要な働きの一部を再現でき、研究に役立つ。この組織で、患者を傷つけずに病気の進行を観察し新薬の効き方を試せる。がん細胞の広がり方やウイルスへの反応も安全に調べられる。技術はまだ若く限界もあり、オルガノイドは臓器の代わりにはならず、育てるには高い技術が要る。それでも可能性は大きく、小さな生命から医学の大きな前進が生まれることもある。",
        quiz: [
          { q: "What are 'organoids'?", options: ["Tiny, living models of human organs grown in the lab", "Large robots", "A kind of medicine you drink"], answer: 0 },
          { q: "Why are lab-grown tissues useful?", options: ["Scientists can study disease and test medicines without harming a patient", "They can fully replace a human", "They make patients sick"], answer: 0 },
          { q: "What limit does the passage mention?", options: ["An organoid is not a full organ and cannot replace a human part", "They are bigger than real organs", "They can think and breathe"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-09-04",
    passages: [
      {
        id: "d0904-1",
        title: "Who Wrote This — a Human or an AI?",
        level: "★★☆",
        genre: "ビジネス",
        text: "As artificial intelligence gets better at writing, a new question is appearing everywhere: was this text written by a person or by a machine? From school essays to news articles and online reviews, it is becoming harder to tell. In answer, a whole new business has grown up: tools that try to detect AI writing.\n\nThese detection tools look for patterns. AI-written text can be very smooth and correct, but it sometimes lacks the small surprises and mistakes of human writing. By studying millions of examples, the tools try to guess whether a machine was involved. Some companies now offer this service to schools, publishers, and websites.\n\nWhy does it matter? Many people want to know the truth. A teacher wants to see a student's own thinking. A reader may want to know if a review was written by a real customer. Some websites are starting to label which articles used AI, so readers can decide for themselves.\n\nBut detection is not easy or perfect. The tools sometimes make mistakes, wrongly accusing a human of using AI, or missing text that a machine really wrote. As AI improves, the guessing game grows harder.\n\nIn the end, the goal is not to ban these tools, but to keep trust. Whether words come from a person or a program, honesty about their source helps everyone. Knowing who — or what — is speaking has become a valuable thing.",
        summaryJa: "AIの文章作成が上達するにつれ、「これは人が書いたのか機械か」という新しい問いが至る所で生まれている。学校の作文からニュース記事、口コミまで見分けが難しくなり、その答えとしてAIの文章を検出するツールという新事業が育った。ツールはパターンを探す。AIの文章は滑らかで正確だが、人間らしい小さな意外性や誤りを欠くことがある。学校や出版社、サイトに提供され、AI使用を明示するサイトも出てきた。理由は多くの人が真実を知りたいからだ。ただし検出は完璧でなく、人を誤って疑ったり見逃したりする。目的は禁止でなく信頼の維持で、出所への正直さが皆を助ける。",
        quiz: [
          { q: "What new business has grown because AI can write well?", options: ["Tools that try to detect whether text was written by AI", "Companies that stop all writing", "Shops that sell paper only"], answer: 0 },
          { q: "How do detection tools try to guess if AI was involved?", options: ["By looking for patterns, since AI text may lack human surprises and mistakes", "By reading the writer's mind", "By counting the pages"], answer: 0 },
          { q: "What does the passage say is the real goal?", options: ["To ban all writing tools", "To keep trust through honesty about a text's source", "To make writing secret"], answer: 1 }
        ]
      },
      {
        id: "d0904-2",
        title: "The Hidden Hunger of Data Centers",
        level: "★★★",
        genre: "テクノロジー",
        text: "Every time you send a message, watch a video, or ask an AI a question, a building far away does part of the work. These buildings are called data centers, and they are full of powerful computers that never sleep. As our digital lives grow — especially with the rise of AI — the world needs more and more of them. But there is a hidden cost: these centers are extremely hungry for energy.\n\nComputers running day and night use huge amounts of electricity. They also produce heat, so even more power is needed to keep them cool. Some large data centers use as much electricity as a small town. As companies build more of them for AI, experts worry about where all that power will come from.\n\nWater is another concern. Many centers use water to help cool their machines, which can be a problem in dry areas. Communities near new data centers sometimes ask hard questions about energy bills and local resources.\n\nThere is good news, too. Engineers are working to make data centers cleaner and smarter. Some are built near sources of clean energy, such as wind or solar power. Others use cool outside air or reuse their waste heat to warm nearby buildings.\n\nThe challenge is clear: we want the benefits of powerful computing, but we must find ways to feed these hungry machines without harming the planet.",
        summaryJa: "メッセージの送信や動画視聴、AIへの質問のたびに、遠くの建物が処理の一部を担う。データセンターと呼ばれ、眠らない強力なコンピューターで満ちている。デジタル生活の拡大、とくにAIの台頭で世界はますます多くを必要とするが、隠れた代償がある。膨大なエネルギーを消費するのだ。昼夜動く計算機は大量の電力を使い、発熱するため冷却にもさらに電力が要る。小さな町ほどの電力を使う施設もあり、電源の確保が懸念される。冷却に水を使う施設も多く乾燥地では問題になる。一方で、風力や太陽光の近くに建てたり外気で冷やしたり排熱を再利用したりと、より清潔で賢くする取り組みも進む。恩恵を得つつ地球を害さず機械を養う方法が課題だ。",
        quiz: [
          { q: "What are data centers?", options: ["Buildings full of powerful computers that do our digital work", "Empty warehouses", "Places with no electricity"], answer: 0 },
          { q: "Why do data centers need so much energy?", options: ["Computers run day and night and also need power to stay cool", "They do nothing at all", "They only work once a year"], answer: 0 },
          { q: "What is one way engineers try to make data centers cleaner?", options: ["Building them near clean energy or reusing their waste heat", "Adding more heat on purpose", "Turning off all cooling"], answer: 0 }
        ]
      },
      {
        id: "d0904-3",
        title: "Making the World's Ships Cleaner",
        level: "★★☆",
        genre: "世界情勢",
        text: "Most of the goods we use every day — clothes, phones, food, and furniture — travel across the ocean by ship at some point. Giant cargo ships carry the majority of the world's trade. They are a quiet, powerful engine of the global economy. But these ships also burn large amounts of dirty fuel, and cleaning them up has become an important worldwide goal.\n\nFor a long time, big ships ran on a thick, cheap oil that produces a lot of pollution. Because the ocean is shared by all countries, no single nation can fix the problem alone. So governments and companies around the world are working together to make shipping cleaner.\n\nThere are several promising ideas. Some new ships use cleaner fuels, such as gas or fuels made from plants. Others are testing electric power for short trips, or even modern sails that use the wind to save fuel. Simply slowing ships down a little can also cut pollution by a surprising amount.\n\nChange is not easy. Cleaner fuels can cost more, and building new ships takes years. Ports around the world must also add new equipment to support them.\n\nStill, the direction is set. Because shipping touches almost everything we own, making it cleaner is one of the most useful steps the world can take. A cleaner fleet means a healthier ocean and sky for everyone who shares the planet.",
        summaryJa: "私たちが日々使う衣類や電話、食料、家具の多くは、どこかで船に乗って海を渡ってくる。巨大な貨物船が世界の貿易の大半を運び、世界経済の静かで強力な原動力だ。だがこれらの船は大量の汚れた燃料を燃やすため、その浄化が世界的な重要目標になっている。長年、大型船は汚染の多い安い重油で動いてきた。海はすべての国が共有するため一国では解決できず、各国政府と企業が協力している。有望な案は複数ある。ガスや植物由来の清潔な燃料、短距離の電動化、風を使う現代の帆、少し減速するだけでも汚染は大きく減る。費用や建造年数、港の設備など課題はあるが、船は所有物のほぼ全てに関わるため、その浄化は世界にとって有益な一歩だ。",
        quiz: [
          { q: "Why does shipping matter so much to the global economy?", options: ["Giant ships carry the majority of the world's trade", "Ships carry nothing useful", "Only a few small boats exist"], answer: 0 },
          { q: "Why can't a single nation fix ship pollution alone?", options: ["Because the ocean is shared by all countries", "Because ships never move", "Because pollution does not exist"], answer: 0 },
          { q: "What is one idea to make ships cleaner?", options: ["Using cleaner fuels, modern sails, or slowing down a little", "Burning more dirty oil", "Making ships much heavier"], answer: 0 }
        ]
      },
      {
        id: "d0904-4",
        title: "Japan's Autumn Festivals",
        level: "★★☆",
        genre: "日本",
        text: "When the summer heat finally fades, towns and villages across Japan come alive with autumn festivals. These local events, often held at shrines, are a chance for communities to give thanks for the harvest and to enjoy time together. For many people, an autumn festival is one of the happiest memories of the year.\n\nEach festival has its own character, but many share common sights and sounds. People pull or carry a portable shrine, called a \"mikoshi,\" through the streets, shouting together to keep the rhythm. There is the beat of drums, the smell of grilled food from many small stalls, and children in bright, traditional clothes. The whole town seems to move as one.\n\nAutumn is a natural time for such thanks. Farmers have gathered the rice and other crops, so there is a feeling of relief and gladness. Long ago, people prayed for a good harvest in spring and gave thanks in autumn, and this rhythm still shapes many festivals today.\n\nMore than the food or the noise, the real heart of a festival is connection. Neighbors who are usually busy meet and laugh together. Older people teach children the songs and steps. In a busy modern world, these events keep a community close.\n\nAn autumn festival is a warm reminder that some of life's best things — good food, music, and friendship — are meant to be shared.",
        summaryJa: "夏の暑さがようやく和らぐと、日本各地の町や村は秋祭りでにぎわう。多くは神社で行われる地域の行事で、収穫に感謝し、共に過ごす機会だ。多くの人にとって秋祭りは一年で最も幸せな思い出の一つだ。祭りごとに個性はあるが、共通の光景も多い。人々は「神輿」を担いで通りを練り歩き、掛け声でリズムをそろえる。太鼓の音、屋台の焼き物の匂い、鮮やかな伝統衣装の子どもたち。町全体が一つになって動くようだ。秋は感謝に自然な季節で、米などを収穫し安堵と喜びがある。春に豊作を祈り秋に感謝する昔からの流れが今も祭りを形づくる。祭りの核心は食や音以上に「つながり」だ。普段忙しい隣人が笑い合い、年長者が子に歌や所作を教える。祭りは、良い食事や音楽、友情は分かち合うものだと温かく思い出させる。",
        quiz: [
          { q: "What is one common sight at a Japanese autumn festival?", options: ["People carrying a portable shrine called a 'mikoshi'", "Empty, silent streets", "People staying indoors alone"], answer: 0 },
          { q: "Why is autumn a natural time to give thanks?", options: ["Farmers have gathered the rice and other crops", "Because nothing grows in autumn", "Because summer is just starting"], answer: 0 },
          { q: "What does the passage call the real heart of a festival?", options: ["The noise only", "Connection among people in the community", "Spending money"], answer: 1 }
        ]
      },
      {
        id: "d0904-5",
        title: "Mapping the Brain of a Tiny Fly",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "The brain is one of the greatest mysteries in all of science. It is a maze of tiny cells, called neurons, that send signals to one another. To truly understand how a brain works, scientists dream of drawing a complete map of every connection. Recently, they reached an amazing milestone — not with a human brain, but with the brain of a tiny fruit fly.\n\nWhy a fly? A human brain has billions of neurons, far too many to map today. A fruit fly's brain is much smaller, yet it can still see, fly, find food, and remember. By studying this simpler brain, scientists can learn basic rules that may also apply to larger brains, including our own.\n\nThe new map shows an incredible number of connections — well over a hundred million points where neurons meet. Creating it took years of careful work, powerful microscopes, and clever computer programs. The result is like a wiring diagram for a living creature's mind.\n\nWhat can we do with such a map? Scientists hope it will help them understand how brains turn signals into behavior — how a tiny creature decides to turn left or right, for example. In the long run, this knowledge may help us understand memory, learning, and even brain diseases.\n\nMapping a fly's brain may sound small, but it is a giant step. Sometimes, to understand something huge, you must start with something tiny.",
        summaryJa: "脳は科学最大の謎の一つだ。ニューロンという小さな細胞が互いに信号を送り合う迷路である。脳の仕組みを真に理解するため、科学者はすべての接続の完全な地図を描くことを夢見てきた。最近、その節目に到達した——人の脳ではなく、小さなショウジョウバエの脳で。なぜハエか。人の脳は数十億のニューロンを持ち今は地図化できないが、ハエの脳ははるかに小さくても見て飛び、餌を探し記憶する。この単純な脳から、より大きな脳にも当てはまる基本則を学べる。新しい地図は一億をはるかに超えるニューロンの接点を示す。作成には長年の作業、強力な顕微鏡、巧妙なプログラムを要した。生き物の心の配線図のようだ。信号がどう行動になるかの理解に役立ち、やがて記憶や学習、脳の病気の理解にもつながりうる。巨大なものを理解するには、小さなものから始めねばならない。",
        quiz: [
          { q: "Why did scientists map a fruit fly's brain instead of a human brain?", options: ["A human brain has far too many neurons to map today", "Flies have no brain", "Human brains are too small"], answer: 0 },
          { q: "What does the new map show?", options: ["Well over a hundred million points where neurons meet", "Only three connections", "A map of the sky"], answer: 0 },
          { q: "What do scientists hope to learn from such a map?", options: ["How brains turn signals into behavior, and eventually memory and disease", "How to make flies bigger", "Nothing useful at all"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-09-03",
    passages: [
      {
        id: "d0903-1",
        title: "Why Data Has Become a Business Treasure",
        level: "★★☆",
        genre: "ビジネス",
        text: "In the past, when we thought of a company's most valuable things, we pictured buildings, machines, or money in the bank. Today, one of the most precious assets a business can own is something you cannot touch at all: data. Information about customers, products, and habits has quietly become a kind of treasure.\n\nWhy is data so valuable? Because it helps companies make better decisions. A store that knows what people buy, and when, can order the right amount of goods and avoid waste. A service that understands how customers use it can fix problems and design features people truly want. Good data turns guessing into knowing.\n\nData can also create entirely new products. Maps, recommendations, and many free apps are built on information gathered from millions of users. In a sense, the users help build the very service they enjoy.\n\nBut treating data as treasure brings serious duties. People's information is personal, and it can be misused or stolen. Companies must protect it carefully and be honest about how they use it. Many countries now have strict rules to guard people's privacy.\n\nThe lesson for any business is clear. Data is powerful, but it must be handled with care and respect. A company that uses information wisely — and protects the people behind it — holds a treasure that can last for years.",
        summaryJa: "かつて企業の最も価値ある物といえば建物や機械、預金だった。今、最も貴重な資産の一つは手で触れられない「データ」だ。顧客や製品、習慣の情報が静かに宝となった。なぜ価値があるのか。より良い判断を助けるからだ。何がいつ売れるか分かる店は適量を仕入れ無駄を防ぎ、使われ方が分かるサービスは問題を直し本当に望まれる機能を作れる。データは新しい製品も生む。地図や推薦、多くの無料アプリは利用者の情報から作られる。だが個人情報は悪用や盗難の恐れがあり、慎重な保護と正直な利用、各国の厳しい規則が求められる。賢く使い人を守る企業は長く続く宝を持つ。",
        quiz: [
          { q: "What has become one of the most valuable assets for a business?", options: ["Data — information about customers and products", "Only buildings and machines", "Empty office space"], answer: 0 },
          { q: "How does good data help companies?", options: ["It turns guessing into knowing, so they make better decisions", "It makes decisions harder", "It hides useful information"], answer: 0 },
          { q: "What duty comes with treating data as treasure?", options: ["Sharing all data publicly", "Protecting people's information and being honest about its use", "Ignoring privacy rules"], answer: 1 }
        ]
      },
      {
        id: "d0903-2",
        title: "How Machines Learned to Translate",
        level: "★★★",
        genre: "テクノロジー",
        text: "Not long ago, translating between languages by computer produced funny, broken sentences. A machine might turn a simple phrase into something no human would ever say. Today, translation tools are far better, and for millions of people they have become a daily helper. How did machines improve so quickly?\n\nThe old approach tried to follow grammar rules and dictionaries, word by word. But human language is full of exceptions, jokes, and hidden meanings. Strict rules could not capture all of that, so the results often sounded strange.\n\nThe big change came when computers began to learn from examples instead. Engineers fed them enormous amounts of text that had already been translated by people. By studying millions of these pairs, the machine slowly learned patterns: which words tend to go together, and how ideas are expressed in each language. Rather than following fixed rules, it learned to guess the most natural translation.\n\nThe results are impressive, but not perfect. Machines can still miss the tone of a poem, a cultural joke, or a subtle feeling. They may sound fluent yet get an important detail wrong. For anything serious, a human check is still wise.\n\nEven so, this technology has opened doors. A traveler can read a foreign menu, and people who speak different languages can share ideas more easily than ever. For language learners, such tools are a helpful support — though never a full replacement for real understanding.",
        summaryJa: "少し前まで、コンピューターの翻訳はおかしな壊れた文を作り、人間なら言わない表現になることもあった。今の翻訳ツールははるかに優れ、多くの人の日々の助けだ。なぜ急に良くなったのか。古い方式は文法規則と辞書で一語ずつ訳したが、言語は例外や冗談、隠れた意味に満ち、規則では捉えきれず不自然になった。転機は、機械が例から学ぶようになったことだ。人が訳した大量の文を与えると、機械は語の組み合わせや各言語での表現の型を学び、最も自然な訳を推測する。結果は見事だが完璧ではなく、詩の調子や文化的な冗談、微妙な感情を外すこともある。重要な場面では人の確認が賢明だ。学習者には助けだが、真の理解の代わりにはならない。",
        quiz: [
          { q: "What was the problem with the old, rule-based translation?", options: ["Language has many exceptions that strict rules could not capture", "It was too fast", "It never used dictionaries"], answer: 0 },
          { q: "What big change made translation much better?", options: ["Computers began to learn from millions of human-translated examples", "Computers stopped using any text", "People wrote longer dictionaries"], answer: 0 },
          { q: "What does the passage suggest about machine translation for serious work?", options: ["It is always perfect", "A human check is still wise", "It should never be used at all"], answer: 1 }
        ]
      },
      {
        id: "d0903-3",
        title: "Why Cities Are Planting More Trees",
        level: "★★☆",
        genre: "世界情勢",
        text: "Around the world, cities are on a mission to plant more trees. From large capitals to small towns, leaders are setting goals to add thousands, or even millions, of new trees along streets, in parks, and on rooftops. This green wave is more than decoration; it is a practical answer to modern city problems.\n\nOne major reason is heat. Concrete and asphalt soak up the sun and make cities much hotter than the countryside. Trees provide shade and release water into the air, cooling the streets naturally. On a hot day, a leafy avenue can feel far more comfortable than a bare one.\n\nTrees help in other ways too. They clean the air by taking in some pollution, and they can soak up rainwater, reducing floods after heavy storms. Birds and insects find homes in them, bringing a touch of nature back into busy areas. Studies even suggest that green spaces help people feel calmer and happier.\n\nOf course, planting a tree is only the beginning. Young trees need water, care, and space for their roots. A tree that is planted and then forgotten may not survive. Cities must plan for the long term, not just for a single planting day.\n\nStill, the effort is worthwhile. A city rich in trees is cooler, cleaner, and more pleasant. By planting today, communities are giving a gift of shade and fresh air to the people of tomorrow.",
        summaryJa: "世界の都市が、もっと木を植えようと取り組んでいる。大都市から小さな町まで、通りや公園、屋上に何千、時に何百万本もの木を加える目標を掲げる。この緑の波は飾りではなく、現代の都市問題への実際的な答えだ。大きな理由は暑さで、コンクリートやアスファルトは太陽熱をため、都市は郊外よりずっと暑くなる。木は日陰を作り水分を放って街を自然に冷やす。木は空気を浄化し、雨水を吸って豪雨後の洪水を減らし、鳥や虫のすみかにもなる。緑は人を穏やかにするという研究もある。ただし植えて終わりではなく、若木には水や手入れ、根の空間が要る。長期の計画が大切だ。木の豊かな都市は涼しく清潔で快適で、未来への贈り物になる。",
        quiz: [
          { q: "What is one major reason cities plant more trees?", options: ["Trees provide shade and cool the streets naturally", "Trees make cities hotter", "Trees block all the roads"], answer: 0 },
          { q: "Besides cooling, how else do trees help cities?", options: ["They clean the air and soak up rainwater to reduce floods", "They increase pollution", "They stop all rain"], answer: 0 },
          { q: "Why is planting a tree only the beginning?", options: ["Young trees need water, care, and space to survive", "Trees never need anything", "Trees grow fully in one day"], answer: 0 }
        ]
      },
      {
        id: "d0903-4",
        title: "The Japanese Art of Wrapping",
        level: "★★☆",
        genre: "日本",
        text: "In Japan, how you give something can matter as much as the gift itself. One beautiful example of this is \"furoshiki,\" a simple square cloth used to wrap and carry objects. With a few clever folds and knots, a plain piece of fabric becomes a bag, a gift wrapper, or a way to carry a lunch box.\n\nFuroshiki has a long history. For centuries, people used these cloths to carry clothes to the public bath, to wrap presents, and to move goods. Because a furoshiki has no fixed shape, it can hold a bottle, a book, or a round watermelon. When not in use, it folds flat and takes almost no space.\n\nToday, furoshiki is enjoying new attention, and part of the reason is the environment. Unlike paper or plastic wrapping, a cloth can be used again and again for years. In a world worried about waste, an old idea suddenly feels very modern. Wrapping a gift in furoshiki sends a quiet message of care and respect for the planet.\n\nLearning a few basic folds is easy and fun. With practice, an ordinary cloth can be tied into surprising shapes. Many people find joy in this small skill.\n\nFuroshiki reminds us that beauty and usefulness can live together. A single cloth, folded with care, carries not only objects but also a gentle spirit of thoughtfulness.",
        summaryJa: "日本では、何をあげるかと同じくらい、どう渡すかが大切にされる。その美しい例が「風呂敷」、物を包んで運ぶ一枚の四角い布だ。いくつかの折り方と結び方で、ただの布が鞄や贈り物の包み、弁当を運ぶ道具になる。風呂敷には長い歴史があり、銭湯へ衣類を運び、贈り物を包み、荷を運ぶのに使われた。決まった形がないので瓶や本、丸いスイカも包め、使わない時は平らにたためて場所を取らない。今、環境の面からも再注目されている。紙やプラスチックと違い、布は何年も繰り返し使える。無駄を憂う世界で古い知恵が現代的に感じられ、地球への思いやりを伝える。基本の折り方は簡単で楽しく、美と実用が共に生きることを教えてくれる。",
        quiz: [
          { q: "What is 'furoshiki'?", options: ["A simple square cloth used to wrap and carry objects", "A type of Japanese food", "A large wooden box"], answer: 0 },
          { q: "Why is furoshiki getting new attention today?", options: ["Because a cloth can be reused for years, which is good for the environment", "Because it can only be used once", "Because it is made of plastic"], answer: 0 },
          { q: "What message does wrapping a gift in furoshiki send?", options: ["Care and respect for the planet", "That gifts are unimportant", "That waste is good"], answer: 0 }
        ]
      },
      {
        id: "d0903-5",
        title: "What Happens While You Sleep",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "Every night, you close your eyes and lose hours of the day to sleep. It may feel like doing nothing, but inside your body and brain, a great deal of important work is going on. Far from being wasted time, sleep is one of the most active and useful things you do.\n\nWhile you rest, your brain sorts through the day's experiences. It decides which memories to keep and which to let go, almost like tidying a messy desk. This is one reason a good night's sleep helps you learn. Students who sleep well after studying often remember more than those who stay up late.\n\nYour body repairs itself too. During deep sleep, it heals small injuries, builds muscle, and strengthens the systems that fight illness. This is why rest is so important when you are sick. Sleep also helps control feelings; a tired mind finds it harder to stay calm and patient.\n\nModern life often treats sleep as something to cut short. People stay up for work, screens, or fun, and then feel slow the next day. Over time, poor sleep can harm both health and mood.\n\nThe good news is that better sleep is within reach. A regular bedtime, a dark and quiet room, and less screen time before bed can all help. Treating sleep as a friend, not a waste, may be one of the simplest ways to feel better every day.",
        summaryJa: "毎晩、目を閉じて数時間を眠りに使う。何もしていないようで、体と脳の中では多くの大切な働きが進む。眠りは無駄な時間どころか、最も活発で有益な営みの一つだ。休む間、脳はその日の経験を整理し、残す記憶と手放す記憶を、散らかった机を片づけるように決める。よく眠ると学びが助けられるのはこのためで、勉強後によく眠る学生は夜更かしより多く覚えていることが多い。体も自らを修復し、深い眠りの間に傷を癒やし筋肉を作り、病気と闘う仕組みを強める。眠りは感情の制御も助ける。現代は睡眠を削りがちだが、質の悪い睡眠は健康や気分を損なう。規則正しい就寝、暗く静かな部屋、就寝前の画面を減らすことが役立つ。眠りを味方とみなすことが、日々を良くする最も簡単な方法かもしれない。",
        quiz: [
          { q: "What does your brain do with the day's experiences while you sleep?", options: ["It sorts them, keeping some memories and letting others go", "It forgets everything equally", "It stops working completely"], answer: 0 },
          { q: "Why is sleep important when you are sick?", options: ["During deep sleep the body heals and strengthens systems that fight illness", "Because sleep makes illness worse", "Because the body does nothing during sleep"], answer: 0 },
          { q: "What does the passage suggest for better sleep?", options: ["A regular bedtime, a dark quiet room, and less screen time before bed", "More screens right before bed", "Staying up as late as possible"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-09-02",
    passages: [
      {
        id: "d0902-1",
        title: "How AI Is Changing the Home Search",
        level: "★★☆",
        genre: "ビジネス",
        text: "Buying or selling a home is one of the biggest decisions in a person's life. It can also be slow, confusing, and full of paperwork. Now, artificial intelligence is starting to change how this process works, for both ordinary buyers and the agents who help them.\n\nFor a buyer, AI tools can act like a tireless assistant. They can scan thousands of listings in seconds and highlight homes that match your budget, your favorite neighborhoods, and even the style you like. Some tools can estimate a fair price for a house or point out questions you should ask before you buy.\n\nAgents benefit too. Instead of spending hours on routine tasks, they can let software handle paperwork, schedules, and simple questions. This frees them to focus on what people still do best: giving advice, understanding a family's real needs, and guiding them through a stressful choice.\n\nOf course, there are risks. An AI estimate is only a guess, based on past data, and it can be wrong. A house is also an emotional choice, not just a set of numbers. Buyers should treat AI as a helpful tool, not as the final word.\n\nUsed wisely, though, these tools can make a hard process a little easier. The dream of finding the right home may still take work — but with smart help, the search itself is becoming faster and less stressful.",
        summaryJa: "住宅の売買は人生で最も大きな決断の一つだが、遅く複雑で書類も多い。今、AIがこの過程を買い手にも仲介業者にも変え始めている。買い手には、数秒で何千もの物件を調べ、予算や好きな地域、好みの様式に合う家を示す不眠不休の助手のように働く。適正価格の推定や、買う前の質問の指摘もできる。業者も定型作業をソフトに任せ、助言や家族の本当のニーズの理解に集中できる。ただしAIの推定は過去データに基づく推測で誤りうるし、家は感情の選択でもある。賢く使えば難しい過程が少し楽になる。",
        quiz: [
          { q: "How can AI tools help a home buyer?", options: ["By scanning many listings quickly and highlighting good matches", "By building the house itself", "By hiding all the prices"], answer: 0 },
          { q: "How do agents benefit from AI?", options: ["They can focus on advice while software handles routine tasks", "They no longer need to talk to anyone", "They must do more paperwork"], answer: 0 },
          { q: "What warning does the passage give about AI estimates?", options: ["They are always perfectly correct", "They are only guesses based on past data and can be wrong", "They replace the need to think"], answer: 1 }
        ]
      },
      {
        id: "d0902-2",
        title: "Robotaxis Reach More Cities",
        level: "★★★",
        genre: "テクノロジー",
        text: "Imagine calling a taxi with your phone, and when it arrives, there is no driver at all. The car opens its doors, you climb in, and it drives you across the city by itself. This is not science fiction. In a growing number of cities, driverless taxis — often called \"robotaxis\" — are already carrying passengers on real streets.\n\nFor years, these cars were tested only in small, careful areas. Now, companies are expanding into more cities and larger zones. Each new place brings new challenges: different roads, weather, traffic rules, and local habits. Teaching a car to handle all of this safely is a huge task.\n\nSupporters see many possible benefits. A robotaxi never gets tired or distracted, and computers can react very quickly. In time, such cars might reduce accidents and give rides to people who cannot drive, such as the elderly or those with certain disabilities.\n\nBut there are real worries too. People ask what happens when the software makes a mistake, or how these cars behave in rare, surprising situations. There are also questions about jobs for human drivers and rules for who is responsible in a crash.\n\nThe technology is moving forward, city by city, test by test. Whether robotaxis become a normal part of life may depend not only on clever engineering, but also on whether people learn to trust a car with no one behind the wheel.",
        summaryJa: "スマホでタクシーを呼ぶと、来た車に運転手がいない——ドアが開き乗り込むと、車が自ら街を走る。SFではなく、増えつつある都市で無人タクシー(ロボタクシー)がすでに客を運んでいる。長年は狭い区域での試験だったが、今は多くの都市や広い範囲へ拡大中だ。道路や天候、交通ルールが違い、安全に対応させるのは大きな課題だ。支持者は、疲れず気が散らず素早く反応でき、事故を減らし運転できない高齢者らを乗せられると期待する。一方、ソフトの誤りや珍しい状況、運転手の仕事、事故責任への懸念もある。普及は技術だけでなく人々の信頼にかかる。",
        quiz: [
          { q: "What is a 'robotaxi'?", options: ["A driverless taxi that carries passengers by itself", "A taxi with two drivers", "A toy car for children"], answer: 0 },
          { q: "What is one possible benefit supporters mention?", options: ["Robotaxis get tired quickly", "They might reduce accidents and help people who cannot drive", "They always break traffic rules"], answer: 1 },
          { q: "What may decide whether robotaxis become normal, besides engineering?", options: ["Whether people learn to trust a car with no driver", "The color of the cars", "The price of phones"], answer: 0 }
        ]
      },
      {
        id: "d0902-3",
        title: "The Return of the Night Train",
        level: "★★☆",
        genre: "世界情勢",
        text: "Not long ago, many people thought night trains were a thing of the past. Why sleep on a train, they asked, when a plane could cross the same distance in an hour or two? Yet in several parts of the world, overnight trains are quietly making a comeback.\n\nOne reason is the environment. Trains usually produce far less pollution than planes for the same trip. As more travelers think about their effect on the planet, a night train starts to look like a smart, greener choice. You go to sleep in one city and wake up in another, without the rush of an airport.\n\nComfort and simplicity also play a part. There are no long security lines, and stations are often right in the city center. Travelers can enjoy dinner, read, or watch the dark landscape slide by before falling asleep. For some, the journey becomes part of the holiday, not just a way to get there.\n\nBringing back night trains is not easy. It requires new carriages, cross-border cooperation, and careful planning of routes between countries. Tickets are not always cheap, and building the service takes years.\n\nStill, the trend shows how old ideas can return in new forms. In a fast world that often values speed above all, the slow, steady night train offers something rare: a calm, comfortable way to travel that is kinder to the earth.",
        summaryJa: "少し前まで夜行列車は過去のものと思われていた。飛行機なら同じ距離を1〜2時間で越えられるのに、なぜ列車で眠るのかと。だが世界の各地で夜行列車が静かに復活している。理由の一つは環境で、同じ移動で列車は飛行機よりずっと汚染が少ない。地球への影響を考える旅行者にとって賢い選択に見え、一つの街で眠り別の街で目覚められる。保安検査の列がなく駅は都心にあり、快適さも魅力だ。旅そのものが休暇の一部になる。復活には新型車両や国境を越えた協力、路線計画が必要で費用もかかる。速さ重視の世界で、穏やかで地球に優しい移動を提供する。",
        quiz: [
          { q: "What is one environmental reason night trains are returning?", options: ["Trains usually produce far less pollution than planes for the same trip", "Trains use no energy at all", "Planes cannot fly at night"], answer: 0 },
          { q: "What comfort does the passage mention about night trains?", options: ["Very long security lines", "No long security lines, and stations in the city center", "Stations far outside every city"], answer: 1 },
          { q: "Why is bringing back night trains not easy?", options: ["It needs new carriages, cross-border cooperation, and route planning", "Nobody wants to travel anymore", "Trains cannot cross borders at all"], answer: 0 }
        ]
      },
      {
        id: "d0902-4",
        title: "Japan's Many 'Autumns'",
        level: "★★☆",
        genre: "日本",
        text: "As summer heat fades in Japan, people begin to speak of autumn in a special way. In Japanese, there is a lovely habit of naming the season after a favorite activity. You may hear about the \"autumn of reading,\" the \"autumn of appetite,\" the \"autumn of sport,\" or the \"autumn of art.\" Each phrase captures a different joy of the cooler months.\n\nWhy so many autumns? The idea is simple and warm. After a hot, tiring summer, the weather turns mild and comfortable. The long, clear evenings make it easy to focus on a good book. Farmers harvest rice, fruit, and vegetables, so food is fresh and delicious — perfect for the \"autumn of appetite.\" The pleasant air is ideal for walking, running, or playing outside.\n\nThese expressions are more than pretty words. They gently encourage people to slow down and enjoy life's pleasures. A parent might tell a child that autumn is a fine time to read more books. A friend might invite you to try a new sport now that the heat is gone.\n\nThere is wisdom hidden in this custom. Instead of seeing the end of summer as a loss, Japanese culture treats autumn as a rich season of chances. Whatever you love — food, books, art, or exercise — autumn offers a friendly reason to enjoy it a little more.",
        summaryJa: "夏の暑さが和らぐと、日本の人々は秋を特別な言い方で語り始める。好きな活動にちなんで季節を呼ぶ素敵な習慣があり、「読書の秋」「食欲の秋」「スポーツの秋」「芸術の秋」などと言う。それぞれが涼しい季節の異なる喜びを表す。なぜ多くの秋があるのか。暑い夏の後に気候が穏やかになり、長く澄んだ夜は読書に向き、米や果物、野菜が実り食も新鮮でおいしい。快適な空気は運動にも最適だ。これらは人々に、立ち止まって暮らしの楽しみを味わうようやさしく促す。夏の終わりを喪失でなく、好きなことを少し多く楽しむ豊かな季節と捉える知恵がある。",
        quiz: [
          { q: "What special habit does the passage describe in Japanese?", options: ["Naming the autumn season after a favorite activity", "Skipping autumn entirely", "Sleeping through the season"], answer: 0 },
          { q: "Why is autumn good for the 'autumn of appetite'?", options: ["Because food becomes very expensive", "Because farmers harvest fresh rice, fruit, and vegetables", "Because people stop eating"], answer: 1 },
          { q: "What wisdom is hidden in this custom?", options: ["Autumn is a sad loss of summer", "Autumn is a rich season of chances to enjoy what you love", "Autumn should be ignored"], answer: 1 }
        ]
      },
      {
        id: "d0902-5",
        title: "How Sea Turtles Find Their Way",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "Few journeys in nature are as amazing as that of the sea turtle. A baby turtle hatches on a beach, crawls into the ocean, and swims away into the wide blue sea. Years later, as an adult, it may return to the very same beach to lay its own eggs — after traveling thousands of kilometers across open water. How does it find the way?\n\nScientists have studied this mystery for a long time. One key answer seems to be the Earth itself. Our planet acts like a giant magnet, and its magnetic field is slightly different in each place. Researchers believe sea turtles can sense this field, using it like an invisible map and compass to know where they are and which way to go.\n\nThis ability is astonishing because the turtle learns the location of its home beach as a tiny hatchling, then remembers it for decades. Somehow, that early \"magnetic memory\" guides it back across a featureless ocean many years later.\n\nUnderstanding turtle navigation is not only fascinating; it is also useful. If we know the routes turtles follow, we can protect those paths from dangers such as pollution and heavy fishing. Many sea turtles are endangered, so this knowledge can help save them.\n\nThe next time you see the ocean, remember that somewhere beneath the waves, a turtle may be reading a map written in magnetism, quietly finding its way home.",
        summaryJa: "自然の旅で、ウミガメほど驚くべきものは少ない。赤ちゃんガメは浜で孵り海へ泳ぎ出し、何年も後に大人になって、数千キロを越え同じ浜に戻って産卵することがある。どうやって道を見つけるのか。科学者は長年この謎を研究してきた。鍵の一つは地球そのものらしい。地球は巨大な磁石のようで、磁場は場所ごとにわずかに異なる。ウミガメはこれを感じ取り、見えない地図と方位磁針のように使うと考えられている。小さな孵化直後に故郷の浜の位置を覚え、数十年記憶する点が驚異的だ。この理解は経路の保護にも役立ち、絶滅危惧のウミガメを救う助けになる。",
        quiz: [
          { q: "What surprising thing may an adult sea turtle do?", options: ["Return to the same beach where it hatched to lay eggs", "Stay on one beach its whole life", "Never enter the ocean"], answer: 0 },
          { q: "How do scientists believe turtles find their way?", options: ["By sensing the Earth's magnetic field like a map and compass", "By following other boats", "By using their phones"], answer: 0 },
          { q: "Why is understanding turtle navigation useful?", options: ["It helps protect their routes and save endangered turtles", "It makes the ocean smaller", "It has no real use"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-09-01",
    passages: [
      {
        id: "d0901-1",
        title: "When an Airport Becomes a Destination",
        level: "★★☆",
        genre: "ビジネス",
        text: "For most of history, an airport was simply a place you passed through. You arrived, waited, and flew away as quickly as possible. Today, some airports are trying to become places where people actually want to spend time — even if they are not flying anywhere at all.\n\nHow is this possible? Modern airports are adding shops, restaurants, art, and entertainment that rival those of a city center. Some have gardens, museums, or areas built around popular characters and local culture. A traveler with a few free hours can shop, eat well, and relax, instead of just staring at a departure board.\n\nThere is a clear business reason behind this change. Airlines pay airports to use them, but that income is not always enough. By attracting shoppers and diners — including local families who come just to enjoy the space — an airport can earn much more money. A busy, popular airport is also good for the whole region, bringing jobs and visitors.\n\nThis idea does bring challenges. Building and running these spaces is expensive, and airports must not forget their main job: moving people safely and on time. Comfort should never come before safety.\n\nStill, the trend is growing around the world. In the future, catching a flight may feel less like a chore and more like a small trip in itself, beginning long before the plane leaves the ground.",
        summaryJa: "かつて空港は通り過ぎるだけの場所だったが、今では飛行機に乗らない人でも過ごしたくなる場所を目指す空港が現れている。店やレストラン、美術、地域文化やキャラクターを生かした空間を設け、待ち時間を楽しめる。背景には明確なビジネス上の理由がある。航空会社からの収入だけでは足りず、買い物客や食事客(近隣の家族連れも)を呼べば収益は大きく増え、地域の雇用にもつながる。ただし建設・運営は高く、安全という本来の役割を忘れてはならない。将来、空の旅は出発前から始まる小さな旅になるかもしれない。",
        quiz: [
          { q: "What are some airports trying to become today?", options: ["Places where people want to spend time, even if not flying", "Places with no shops or restaurants", "Places only pilots can enter"], answer: 0 },
          { q: "What is the business reason for adding shops and restaurants?", options: ["To earn more money beyond airline income", "To make flights slower", "To reduce the number of visitors"], answer: 0 },
          { q: "What must airports never forget, according to the passage?", options: ["To sell as much food as possible", "Their main job of moving people safely and on time", "To remove all gardens and art"], answer: 1 }
        ]
      },
      {
        id: "d0901-2",
        title: "Robots That Learn by Watching",
        level: "★★★",
        genre: "テクノロジー",
        text: "For a long time, teaching a robot to do a task was slow and difficult. Engineers had to write detailed instructions for every single movement. If you wanted a robot to fold a towel, you had to describe each fold, each turn, each grip in careful code. Change the towel, and the robot might fail.\n\nNow, a different idea is spreading: robots that learn by watching. Instead of being told exactly what to do, these robots observe a human doing a task, or study many examples, and slowly figure out the pattern themselves. This way of learning is closer to how a child learns — by imitation and practice.\n\nThe advantages are exciting. A robot that learns by watching can handle tasks that are hard to describe in words, like handling soft objects or working in a messy room. It can also learn new jobs more quickly, without an engineer rewriting everything from the start.\n\nBut there are limits. To learn well, robots often need to watch many examples, which takes time and data. And a robot that copies a human can also copy mistakes. Making these systems safe and reliable is still hard work.\n\nEven so, this approach may change how robots enter our lives. Instead of programming a machine for every task, we may one day simply show it what we want — and let it learn, much as we teach each other.",
        summaryJa: "従来、ロボットに作業を教えるのは遅く難しかった。技術者が一つ一つの動きを細かくコードで書く必要があり、対象が変わると失敗した。今広がるのは「見て学ぶ」ロボットだ。人の作業を観察したり多数の例を学んだりして、自らパターンをつかむ。子どもが模倣と練習で学ぶのに近い。言葉で説明しにくい柔らかい物の扱いなども可能になり、新しい作業も速く覚える。ただし多くの例が必要で、人のミスまで真似ることもあり、安全で確実にするのは難しい。将来は「見せるだけ」で教えられるかもしれない。",
        quiz: [
          { q: "How were robots traditionally taught to do a task?", options: ["By watching a child play", "Engineers wrote detailed instructions for every movement", "They were never taught anything"], answer: 1 },
          { q: "How do the newer robots learn?", options: ["By observing humans or studying many examples", "By ignoring all examples", "By writing their own laws"], answer: 0 },
          { q: "What is one limit of learning by watching?", options: ["Robots cannot move at all", "A robot may copy human mistakes and needs many examples", "Robots can only fold towels"], answer: 1 }
        ]
      },
      {
        id: "d0901-3",
        title: "How the World Shares Its Weather",
        level: "★★☆",
        genre: "世界情勢",
        text: "When you check the weather on your phone, you probably think of it as local news. But behind that simple forecast lies one of the largest examples of cooperation between countries in the world. Weather, after all, does not stop at borders.\n\nA storm forming over one ocean may reach a distant country days later. To predict it, scientists need information from far away — measurements of temperature, wind, and pressure taken all over the planet. No single nation can watch the whole sky alone. So countries share their weather data freely, almost every hour, through a global system built over many decades.\n\nThis sharing is remarkable. Nations that disagree on many things still exchange weather information, because everyone benefits. Better forecasts help farmers plant crops, help ships avoid danger, and give families time to prepare before a big storm arrives. Lives are saved when a warning comes early.\n\nThe system is not perfect. Some regions have fewer weather stations, which makes their data thinner. Keeping satellites and equipment running is expensive, and poorer countries may struggle. Yet the spirit of cooperation remains strong.\n\nIn a world that often focuses on its divisions, weather sharing is a quiet success story. It shows that when a problem touches everyone, people can find ways to work together — and that even rival nations can agree on at least one thing: the value of knowing what tomorrow's sky will bring.",
        summaryJa: "スマホの天気予報は地域の話に見えるが、その裏には世界最大級の国際協力がある。天気は国境で止まらないからだ。ある海で生まれた嵐は数日後に遠い国へ届く。予測には世界中の気温・風・気圧のデータが要り、一国では空全体を監視できない。そこで各国は数十年かけた仕組みでほぼ毎時、天気データを自由に共有する。対立する国同士でも皆に利益があるため交換する。予報の向上は農業や航海を助け、早い警報は命を救う。観測所の少ない地域や費用の課題はあるが、協力の精神は強く、皆に関わる問題では協力できることを示している。",
        quiz: [
          { q: "Why can't a single nation predict the weather alone?", options: ["Because weather does not stop at borders and needs data from all over the planet", "Because weather is not important", "Because phones do everything"], answer: 0 },
          { q: "Why do even rival nations share weather data?", options: ["Because everyone benefits from better forecasts", "Because a law forces them to fight", "Because weather is a secret"], answer: 0 },
          { q: "What is one problem with the system?", options: ["Everyone has perfect data", "Some regions have fewer weather stations, making their data thinner", "No country shares anything"], answer: 1 }
        ]
      },
      {
        id: "d0901-4",
        title: "A Day to Practice Being Ready",
        level: "★★☆",
        genre: "日本",
        text: "In Japan, the first day of September has a special meaning. It is known as Disaster Prevention Day. On this day, schools, companies, and towns across the country practice what to do in case of an earthquake or other emergency. The goal is simple: to be ready before trouble comes.\n\nWhy does Japan take this so seriously? The country sits in an area where earthquakes and strong storms are part of life. People cannot stop these events, but they can prepare. Being calm and knowing what to do can make a huge difference in the first frightening minutes.\n\nOn Disaster Prevention Day, many people take part in drills. Students practice hiding under desks and walking safely to open ground. Families check their emergency bags, which hold water, food, a flashlight, and other basics. Some cities test their warning speakers and share maps that show safe places to gather.\n\nThe most valuable lesson is not fear, but habit. When actions are practiced many times, the body remembers them even in a moment of panic. A child who has done the drill knows where to go without thinking.\n\nPreparation is a quiet form of kindness — to yourself, your family, and your neighbors. Disaster Prevention Day reminds everyone that while we cannot control nature, we can control how ready we are. In that readiness lies real safety and peace of mind.",
        summaryJa: "日本では9月1日が「防災の日」として特別な意味を持つ。学校や企業、町が地震などの緊急時にどう動くかを練習する日で、目的は困難が来る前に備えることだ。日本は地震や大きな嵐が多い地域にあり、出来事は止められなくても備えはできる。人々は避難訓練に参加し、机の下に隠れたり安全に避難したりし、家庭は水や食料、懐中電灯などの非常袋を確認する。大切なのは恐れでなく習慣で、何度も練習すれば体が覚え、いざという時に考えず動ける。備えは自分や家族、隣人への静かな思いやりであり、自然は制御できなくても備えの度合いは制御できると教えている。",
        quiz: [
          { q: "What is September 1 known as in Japan?", options: ["Disaster Prevention Day", "A day with no schools", "National Sleep Day"], answer: 0 },
          { q: "What do people do on this day?", options: ["Take part in drills and check emergency bags", "Nothing at all", "Only watch television"], answer: 0 },
          { q: "What does the passage say is the most valuable lesson?", options: ["Fear of nature", "Habit, so the body remembers what to do", "Buying expensive tools"], answer: 1 }
        ]
      },
      {
        id: "d0901-5",
        title: "Rocks That Can Make Clean Fuel",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "When we think about where energy comes from, we usually picture oil wells, coal mines, or solar panels. But scientists are now studying a surprising new source hidden deep in the ground: rocks that can naturally produce hydrogen gas.\n\nHydrogen is an exciting fuel because, when used, it can release energy while producing mostly water instead of harmful smoke. The problem is that making hydrogen today often uses a lot of energy or fossil fuels. So a natural, cleaner source would be very valuable.\n\nResearchers have found that certain iron-rich rocks, when they meet underground water, can slowly release hydrogen all on their own. In some places, this gas may be collecting underground much like oil does. Scientists are even exploring whether they could gently boost this natural process to produce larger amounts.\n\nIf this works, the benefits could be big. Natural hydrogen might offer a cleaner fuel without the heavy energy cost of making it in factories. It could help power vehicles, factories, and homes with less pollution.\n\nStill, it is early days. Nobody yet knows how much of this hydrogen exists, how easy it is to collect, or how much it will cost. Careful study is needed before anyone builds a business around it.\n\nEven so, the idea is a reminder that our planet still holds surprises. Sometimes the fuel of the future may be quietly forming beneath our feet.",
        summaryJa: "エネルギーの源というと石油や石炭、太陽光を思い浮かべるが、科学者は地中に隠れた意外な新資源、天然の水素を生む岩石に注目している。水素は使うと主に水しか出さず有害な煙が少ない魅力的な燃料だが、今の製造は多くのエネルギーや化石燃料を要する。研究では、鉄分の多い岩石が地下水と出会うとゆっくり水素を放出し、石油のように地下にたまる場所もあるという。この自然の作用を後押しできないかも探られている。実現すれば工場での高いエネルギー費なしに、より清潔な燃料になりうる。ただし量や採取のしやすさ、費用は未知で、慎重な研究が必要だ。未来の燃料は足元で静かに生まれているのかもしれない。",
        quiz: [
          { q: "Why is hydrogen an exciting fuel?", options: ["When used, it can release energy while producing mostly water", "It produces large amounts of smoke", "It cannot be used for energy"], answer: 0 },
          { q: "How do certain rocks produce hydrogen naturally?", options: ["By being heated in factories", "When iron-rich rocks meet underground water, they slowly release it", "By burning coal"], answer: 1 },
          { q: "Why does the passage say it is 'early days'?", options: ["Because the fuel is already used everywhere", "Because nobody yet knows how much exists or how much it will cost", "Because rocks cannot hold gas"], answer: 1 }
        ]
      }
    ]
    },
    {
    date: "2026-08-31",
    passages: [
      {
        id: "d0831-1",
        title: "Why Rival Companies Sometimes Work Together",
        level: "★★☆",
        genre: "ビジネス",
        text: "In business, we usually think of companies as rivals. Two carmakers, for example, fight hard to sell more cars than each other. So it can be surprising when such rivals suddenly decide to work together on one project. Yet this happens more and more often, especially in the car industry.\n\nWhy would competitors cooperate? The main reason is cost. Developing new technology, such as the software that runs a modern car, is extremely expensive. If two companies share the work, each pays less and finishes faster. They can also share knowledge and avoid making the same mistakes twice.\n\nThis kind of teamwork does not mean the companies stop competing. They may build a shared part or system together, but they still sell their own cars under their own names, with their own designs and prices. Customers may never notice that a rival helped build part of the product.\n\nOf course, working with a competitor is not easy. Each side worries about sharing too many secrets. They must agree clearly on who owns what and how profits are divided. Trust takes time to build.\n\nStill, in a world where technology changes quickly, going it alone can be risky and slow. By joining forces on the hardest problems, even rivals can move faster than they could apart. Sometimes, the smartest way to compete is to cooperate.",
        summaryJa: "企業は普通ライバル同士だが、時に協力して一つのプロジェクトに取り組む。特に自動車業界で増えている。理由は主にコストだ。現代の車を動かすソフトなど新技術の開発は非常に高く、分担すれば各社の負担は減り、開発も速くなる。協力しても競争をやめるわけではなく、共通部品を作りつつ、自社ブランドで売る。ただし秘密の共有や利益配分で慎重な合意が必要だ。技術が速く変わる時代、最も賢い競争の仕方は協力することもある。",
        quiz: [
          { q: "What is the main reason rival companies sometimes cooperate?", options: ["To share the high cost of developing new technology", "To stop selling their own products", "Because they no longer want to compete"], answer: 0 },
          { q: "Does cooperating mean the companies stop competing?", options: ["Yes, they merge into one company", "No, they still sell their own cars under their own names", "Yes, they share all profits equally"], answer: 1 },
          { q: "What is one difficulty of working with a competitor?", options: ["It always makes cars cheaper", "Each side worries about sharing too many secrets", "Customers must be told every detail"], answer: 1 }
        ]
      },
      {
        id: "d0831-2",
        title: "The Car That Updates Like a Phone",
        level: "★★☆",
        genre: "テクノロジー",
        text: "Think about how your smartphone improves over time. Every few weeks, it downloads an update, and suddenly it has new features or fixes. For a long time, cars did not work this way. Once you bought a car, its software stayed the same until you sold it. Now, that is changing fast.\n\nModern cars are becoming \"software-defined.\" This means that much of what the car does — how the screen looks, how the engine saves fuel, even how safety systems react — is controlled by software, not just fixed parts. And like a phone, this software can be updated over the internet while the car sits in your garage.\n\nThe benefits are clear. A carmaker can fix a small problem without asking every owner to visit a repair shop. It can also add new features months or years after the car is sold. Your car might actually get better as it gets older.\n\nBut there are challenges too. Software can have bugs, and a car is far more dangerous than a phone if something goes wrong. Carmakers must test every update carefully and protect cars from hackers who might try to break in.\n\nStill, the direction is set. In the future, buying a car may feel a little like buying a computer on wheels — one that keeps learning new tricks long after you drive it home.",
        summaryJa: "スマホは数週間ごとに更新され新機能が増えるが、車は長い間そうではなく、買ったら売るまでソフトは同じだった。今は「ソフトウェア定義車」へと変わり、画面や燃費、安全機能の多くをソフトが制御し、ネット経由で更新できる。修理店に行かずに不具合を直せ、販売後に新機能も追加できる。一方でバグは車では危険で、入念な検証やハッカー対策が必要だ。将来、車は「車輪の付いたコンピューター」のように学び続ける。",
        quiz: [
          { q: "What does a 'software-defined' car mean?", options: ["The car has no software at all", "Much of what the car does is controlled by software that can be updated", "The car cannot connect to the internet"], answer: 1 },
          { q: "What is one benefit of over-the-internet car updates?", options: ["The car must visit a shop for every fix", "A carmaker can fix problems or add features without a shop visit", "The car becomes slower over time"], answer: 1 },
          { q: "What is one challenge mentioned in the passage?", options: ["Software bugs can be dangerous in a car, so updates need careful testing", "Cars can never be updated", "Phones are more dangerous than cars"], answer: 0 }
        ]
      },
      {
        id: "d0831-3",
        title: "Why the World Watches Interest Rates",
        level: "★★★",
        genre: "世界情勢",
        text: "Every few weeks, news reports announce that a country's central bank has changed its \"interest rate.\" To many people, this sounds like a dull topic for bankers only. In fact, interest rates touch the daily life of almost everyone, everywhere.\n\nAn interest rate is the cost of borrowing money. When a central bank raises the rate, loans become more expensive. People and companies borrow less, spend less, and prices tend to rise more slowly. When the bank lowers the rate, borrowing becomes cheaper, and spending usually grows. In this way, central banks try to keep prices stable and the economy healthy.\n\nWhy does the whole world watch these decisions? Because money moves across borders. When one large economy raises its rates, investors may move their money there to earn more. This can change the value of other countries' money, making imported goods cheaper or more expensive far away.\n\nFor an ordinary family, the effects are real. Interest rates can change the cost of a home loan, the price of food from abroad, and even the chance of finding a job. A decision made in one capital city can reach shops and homes on the other side of the planet.\n\nYou do not need to be an expert to benefit from understanding this. Knowing why rates matter helps you follow the news with clearer eyes and plan your own money with more confidence.",
        summaryJa: "数週間ごとに中央銀行が「金利」を変えたと報じられる。退屈に聞こえるが、金利はほぼ全員の生活に関わる。金利とはお金を借りる費用で、上げれば借入は高くなり支出が減って物価上昇が緩み、下げれば借入が安く支出が増える。こうして物価と経済の安定を図る。お金は国境を越えるため、大国の利上げは各国の通貨価値や輸入品価格に影響する。住宅ローンや食品価格、就職にも及ぶ。仕組みを知れば、ニュースをよく理解し、自分のお金も計画しやすくなる。",
        quiz: [
          { q: "What is an interest rate, according to the passage?", options: ["The cost of borrowing money", "The price of a single product", "The number of banks in a country"], answer: 0 },
          { q: "What usually happens when a central bank raises the interest rate?", options: ["Borrowing becomes cheaper and spending grows", "Loans become more expensive and spending slows", "Nothing changes at all"], answer: 1 },
          { q: "Why does the whole world watch these decisions?", options: ["Because money moves across borders and affects other countries", "Because only bankers are interested", "Because interest rates never change"], answer: 0 }
        ]
      },
      {
        id: "d0831-4",
        title: "The Art of the Japanese Lunch Box",
        level: "★★☆",
        genre: "日本",
        text: "In many countries, lunch is something you buy and eat quickly. In Japan, lunch can be a small work of art. The \"bento\" is a packed meal, usually carried in a neat box, and it holds a special place in daily life.\n\nA traditional bento is more than just food in a container. It is carefully arranged so that each part looks beautiful and fits together. There might be rice, a piece of grilled fish, colorful vegetables, and a small sweet, all placed with care. Cooks think about balance — of color, taste, and nutrition — in a single box.\n\nBento appear everywhere in Japan. Parents make them for children to take to school. Workers buy them at stations and shops. Travelers on trains enjoy a special kind called \"ekiben,\" made with local foods from each region. Opening a bento can feel like opening a small gift.\n\nMaking a good bento is also a way to show care. A parent who wakes early to shape rice into a cute animal is saying, without words, \"I was thinking of you.\" Some families treat this as a quiet daily kindness.\n\nToday, bento have fans around the world. People share photos online and try to make their own. Yet at its heart, the bento remains a simple Japanese idea: that even an everyday meal deserves beauty, balance, and a little love.",
        summaryJa: "多くの国で昼食はさっと買って食べるものだが、日本の「弁当」は小さな芸術になりうる。伝統的な弁当は、ご飯や焼き魚、彩り野菜、甘味などを美しく詰め、色・味・栄養のバランスを考える。親は子の学校用に作り、働く人は駅や店で買い、旅行者は各地の食材を使った「駅弁」を楽しむ。早起きしてご飯を動物の形にする親は、言葉なく「あなたを思っている」と伝えている。今や世界にファンがおり、日常の食事にも美と愛を込める日本の発想が息づく。",
        quiz: [
          { q: "What makes a traditional bento more than just food in a container?", options: ["It is carefully arranged for beauty, balance, and nutrition", "It is always very large", "It contains only rice"], answer: 0 },
          { q: "What is 'ekiben'?", options: ["A bento eaten only at school", "A bento made with local foods, enjoyed by train travelers", "A box with no food inside"], answer: 1 },
          { q: "How can making a bento show care?", options: ["By buying the most expensive food", "By spending no time on it", "By preparing it thoughtfully, as a quiet daily kindness"], answer: 2 }
        ]
      },
      {
        id: "d0831-5",
        title: "Giving Hard-to-Recycle Plastic a Second Life",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "Not all plastics are easy to recycle. One of the most difficult is called PVC. It is used in pipes, floors, and many everyday products, but it is hard to break down and reuse. As a result, huge amounts of it end up buried or burned. Recently, scientists have been searching for smarter ways to give this stubborn plastic a second life.\n\nIn one promising study, researchers found a way to turn PVC into a useful ingredient for high-quality lubricants — the slippery liquids that keep engines and machines running smoothly. Instead of treating the plastic as waste, they saw it as a source of valuable chemicals.\n\nWhy does this matter? First, it reduces waste. Every ton of plastic turned into something useful is a ton that does not pollute the land or air. Second, it can save resources. Many lubricants are made from oil, so making them from old plastic could reduce the need to pump new oil from the ground.\n\nOf course, a laboratory success is only the first step. To help the planet, such a method must work cheaply and safely at a very large scale. That will take more research and time.\n\nStill, the idea points to a hopeful future. Instead of asking only \"How do we throw this away?\", scientists are learning to ask, \"What else could this become?\" In that question lies the heart of true recycling.",
        summaryJa: "すべてのプラスチックが簡単に再生できるわけではなく、特に難しいのがPVC(塩化ビニル)だ。配管や床など身近な製品に使われるが分解・再利用が難しく、多くが埋め立てや焼却される。最近、研究者はPVCを高品質な潤滑油の原料に変える方法を見つけた。廃棄物ではなく有用な化学物質の源とみなす発想だ。ごみを減らし、石油からつくる潤滑油の代わりになれば資源も節約できる。実用化には安く大規模に行う研究が必要だが、「どう捨てるか」でなく「何に変えられるか」を問う点に真の再生の核心がある。",
        quiz: [
          { q: "Why is PVC a problem for recycling?", options: ["It is hard to break down and reuse", "It is never used in daily products", "It disappears on its own quickly"], answer: 0 },
          { q: "What did researchers turn PVC into, in the study?", options: ["A new kind of food", "A useful ingredient for lubricants", "A type of glass"], answer: 1 },
          { q: "What question does the passage say scientists are learning to ask?", options: ["How do we throw this away?", "What else could this become?", "Why do we need plastic at all?"], answer: 1 }
        ]
      }
    ]
    },
    {
    date: "2026-08-30",
    passages: [
      {
        id: "d0830-1",
        title: "When Everything Becomes a Subscription",
        level: "★★☆",
        genre: "ビジネス",
        text: "Not long ago, people bought things once and owned them forever. You bought a music album, a car, or a piece of software, and it was yours. Today, more and more companies want you to pay a small fee every month instead. This is called the \"subscription model,\" and it now covers music, movies, games, software, and even cars and clothes.\n\nFor companies, subscriptions are attractive. Instead of selling a product once, they earn money again and again. This steady income makes it easier to plan for the future. It also helps companies build a long relationship with each customer.\n\nFor customers, the benefits are real too. You can enjoy a huge library of music or films for less than the price of a single album. You always get the newest version, and you can stop whenever you want.\n\nHowever, there is a hidden problem. Because each service seems cheap, people sign up for many of them. Soon the small fees add up, and a household may pay for services it rarely uses. Some companies also raise their prices slowly, hoping customers will not notice.\n\nThe smart approach is simple. Once or twice a year, look at your list of subscriptions. Keep the ones you truly use, and cancel the rest. In the age of \"subscribe to everything,\" the most valuable skill may be knowing when to say no.",
        summaryJa: "かつては一度買えば自分のものだったが、今は毎月少額を払う「サブスク」が音楽・映画・ソフト・車にまで広がっている。企業は安定収入を得られ、利用者も安く多くを楽しめる。ただし安く見えるため契約が増えすぎ、使わないサービスに払い続けがち。年に一度見直し、本当に使うものだけ残すのが賢い。",
        quiz: [
          { q: "Why do companies like the subscription model?", options: ["They earn money again and again with steady income", "They can sell products only once", "They never have to talk to customers"], answer: 0 },
          { q: "What is the 'hidden problem' for customers?", options: ["Services are too hard to use", "Small fees add up when people sign up for many services", "Old versions cannot be updated"], answer: 1 },
          { q: "What does the passage suggest customers do?", options: ["Subscribe to as many services as possible", "Never use subscriptions at all", "Review their subscriptions and keep only what they use"], answer: 2 }
        ]
      },
      {
        id: "d0830-2",
        title: "Getting Ready for Quantum-Safe Security",
        level: "★★★",
        genre: "テクノロジー",
        text: "Most of the secrets we send over the internet are protected by codes. When you buy something online or send a message, your data is locked with a kind of digital lock. Today's locks are so strong that even the fastest normal computers would need thousands of years to break them.\n\nBut a new kind of machine may change this. Quantum computers work in a completely different way from the computers we use now. They are still young and expensive, but experts believe that one day a powerful quantum computer could break many of today's digital locks in a short time.\n\nThis worries security experts. If such a machine appears, old secrets that were saved years ago could suddenly be opened. For this reason, some companies and governments are not waiting. They are already testing new \"quantum-safe\" codes that even a quantum computer should not be able to break.\n\nChanging the world's digital locks is a huge job. Banks, hospitals, and online stores all use the older system, and updating everything will take years. That is why the work is starting now, long before powerful quantum computers actually exist.\n\nIt may seem strange to prepare for a machine that is not ready yet. But in security, being early is much safer than being late. Companies that begin the change today will be ready when the quantum age finally arrives.",
        summaryJa: "ネット上の情報は強力な暗号で守られており、今の高速コンピューターでも解読には何千年もかかる。しかし全く仕組みの違う量子コンピューターなら、いつかその暗号を短時間で破れる恐れがある。そこで一部の企業や政府は、量子でも破れない「量子安全」の暗号を今から試している。銀行や病院など全システムの更新には何年もかかるため、機械が完成する前に準備を始めているのだ。",
        quiz: [
          { q: "How strong are today's digital locks against normal computers?", options: ["They can be broken in one hour", "They would take normal computers thousands of years to break", "They have already been broken"], answer: 1 },
          { q: "Why are some companies testing 'quantum-safe' codes now?", options: ["Because quantum computers are already common", "Because updating all systems takes years, so they must start early", "Because normal computers stopped working"], answer: 1 },
          { q: "What is the main message about security in the passage?", options: ["Being early is safer than being late", "Quantum computers are useless", "Old codes are safe forever"], answer: 0 }
        ]
      },
      {
        id: "d0830-3",
        title: "Why Countries Celebrate Friendship Anniversaries",
        level: "★★☆",
        genre: "世界情勢",
        text: "Every year, countries around the world mark special anniversaries of their friendships. In 2026, for example, several nations celebrate many decades of official ties with one another. These are not just dates on a calendar. They are chances to look back, say thank you, and plan for the future together.\n\nWhy do countries bother with such events? One reason is trust. When two nations have worked together for fifty or seventy years, they have built a habit of talking, trading, and solving problems side by side. Celebrating that history reminds both sides how much they have gained from cooperation.\n\nAnniversaries are also useful for ordinary people. Governments often use them to hold cultural events, student exchanges, and art shows. A young person in one country may taste the food, hear the music, or learn the language of a faraway partner for the first time. These small experiences can shape a lifetime of friendly feelings.\n\nOf course, no relationship between countries is perfect. There are always disagreements about trade, borders, or history. But an anniversary offers a calm moment to focus on what unites rather than what divides.\n\nIn a world that often feels tense, these celebrations send a quiet but powerful message. They show that patience and respect between nations can last for generations, and that friendship, once built, is worth protecting.",
        summaryJa: "世界各国は毎年、他国との外交関係の節目を祝っている。2026年も多くの国が数十年の友好を記念する。単なる日付ではなく、これまでを振り返り感謝し、未来を共に描く機会だ。長年の協力は信頼を育て、記念行事では文化交流や学生交流も行われ、若者が相手国の文化に触れる。国同士に対立はつきものだが、記念日は共通点に目を向ける穏やかな時間となり、国家間の友好は世代を超えて守る価値があると伝えている。",
        quiz: [
          { q: "What is one reason countries celebrate friendship anniversaries?", options: ["To remind both sides of the benefits of cooperation and trust", "To start new arguments about borders", "To stop trading with each other"], answer: 0 },
          { q: "How do anniversaries help ordinary people?", options: ["They cancel all cultural events", "They offer cultural events and student exchanges", "They force people to move abroad"], answer: 1 },
          { q: "What message do these celebrations send, according to the passage?", options: ["Friendship between nations cannot last", "Respect between nations can last for generations", "Countries should never disagree"], answer: 1 }
        ]
      },
      {
        id: "d0830-4",
        title: "Tokyo's Museums Get a Fresh Start",
        level: "★★☆",
        genre: "日本",
        text: "The year 2026 is an exciting one for museum lovers in Japan. In Tokyo and other cities, several museums are reopening after long renovations, and brand-new cultural spaces are welcoming visitors for the first time. For a country that treasures both its history and its modern art, this is a special moment.\n\nWhy renovate a museum at all? Over time, old buildings need repairs, and the way people enjoy art keeps changing. Visitors today expect wider spaces, better lighting, and clear signs in several languages. Many museums are also adding rest areas, cafés, and rooms designed for children and families. The goal is to make art feel welcoming, not distant.\n\nNew museums bring their own kind of energy. They often focus on modern themes, such as digital art, design, or the work of living artists. Some use screens, sound, and light to create rooms that visitors can walk through and almost step inside. For younger people, these experiences can turn a quiet afternoon into an adventure.\n\nThese changes matter for tourism too. Many travelers now plan whole trips around art and culture. A city with fresh, exciting museums gives visitors one more reason to stay longer and explore.\n\nIn the end, a museum is more than a building full of old objects. It is a place where past and present meet. Japan's renewed museums invite everyone, young and old, to look, wonder, and enjoy.",
        summaryJa: "2026年は日本の美術館ファンにとって特別な年で、東京などで改装を終えた美術館が再開し、新しい文化施設も開館する。古い建物は修繕が必要で、来館者は広い空間や多言語表示、休憩所やカフェを求めている。新設館はデジタルアートなど現代的なテーマを扱い、光や音で体験型の展示を行う。美術や文化を目的に旅行する人も多く、観光にもつながる。美術館は過去と現在が出会う場所だと結んでいる。",
        quiz: [
          { q: "Why do museums need renovation, according to the passage?", options: ["Because old buildings need repairs and visitors' needs change", "Because art is no longer popular", "Because they want fewer visitors"], answer: 0 },
          { q: "What do many new museums focus on?", options: ["Only very old objects", "Modern themes like digital art and design", "Selling food only"], answer: 1 },
          { q: "How are the renewed museums connected to tourism?", options: ["They make travelers leave the city faster", "They give visitors a reason to stay longer and explore", "They stop tourists from visiting"], answer: 1 }
        ]
      },
      {
        id: "d0830-5",
        title: "New Frogs Hidden in Old Museum Drawers",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "When we think of discovering new animals, we usually imagine scientists deep in a jungle. But sometimes, new species are found much closer to home — inside the quiet drawers of a museum. Recently, researchers announced seven new kinds of small, colorful frogs from the island of Madagascar, and old museum specimens played a key role.\n\nThese frogs are tiny and hard to tell apart. To the human eye, many of them look almost the same. So how did scientists know they were different species? The answer is DNA. By studying the genetic code of both freshly collected frogs and specimens that had sat in museums for a hundred years, researchers could see clear differences that eyes alone would miss.\n\nThis shows how valuable old collections can be. A frog collected long ago, carefully labeled and stored, can still teach us something new today. In a way, scientists from the past sent a gift into the future without knowing it.\n\nDiscovering new species is not only exciting; it is also important. When we know that an animal exists and where it lives, we can work to protect it. Many frogs around the world are in danger, and a species no one has named is easy to lose forever.\n\nSo the next time you visit a museum, remember: behind the display cases, in rows of quiet drawers, future discoveries may already be waiting.",
        summaryJa: "新種の発見というとジャングルを思い浮かべるが、博物館の引き出しの中で見つかることもある。研究者はマダガスカルの小さくカラフルなカエル7種を新種として発表し、100年前の標本が重要な役割を果たした。見た目はそっくりでも、新しい個体と古い標本のDNAを比べると違いが分かった。昔ていねいに保存された標本が今も新事実を教えてくれる。新種を知り生息地が分かれば保護もでき、名前のない種は失われやすい。博物館には未来の発見が眠っている。",
        quiz: [
          { q: "Where were clues to the new frog species found, besides in the wild?", options: ["In old museum specimens and drawers", "In a jungle only", "In the ocean"], answer: 0 },
          { q: "How did scientists tell the frogs apart when they looked almost the same?", options: ["By their color only", "By studying their DNA", "By their size only"], answer: 1 },
          { q: "Why does the passage say discovering new species is important?", options: ["Because it makes museums richer", "Because knowing an animal exists helps us protect it", "Because frogs are dangerous"], answer: 1 }
        ]
      }
    ]
    }
  ] };
