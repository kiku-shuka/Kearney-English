/* デイリー配信リーディング
 * 毎朝の自動ルーチンがこのファイルを丸ごと上書き生成する（直近 7 日分を保持）。
 * days は日付降順。各 day = { date: "YYYY-MM-DD", passages: [readingPassages と同スキーマ + genre] }
 * このファイル以外は手書きデータであり、ルーチンは触らない。
 */
window.KE_DATA = window.KE_DATA || {};

KE_DATA.dailyReading = { days: [
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
    },
    {
    date: "2026-11-16",
    passages: [
      {
        id: "d1116-1",
        title: "What Is a Budget?",
        level: "★★☆",
        genre: "ビジネス",
        text: "Imagine setting off on a long journey without a map, simply driving in whatever direction feels right. You might get somewhere, but you would probably waste time, fuel, and money. Managing money without a plan is rather similar. To avoid this, people and businesses use a simple but powerful tool called a budget.\n\nA budget is basically a plan for money. It looks ahead over a period of time, such as a month or a year, and compares two things: the money expected to come in, and the money expected to go out. For a family, the money coming in is mainly wages, and the money going out is rent, food, bills, and other costs. For a business, it is sales coming in, and wages, materials, and other costs going out.\n\nMaking a budget has several benefits. First, it shows whether you are living within your means. If more money is going out than coming in, the budget reveals this problem early, before it becomes a crisis. Second, a budget helps you set priorities. By planning ahead, you can make sure there is enough money for the things that matter most, and perhaps save some for the future.\n\nA budget is not meant to be a prison. It is a guide that gives you control and peace of mind. It helps you decide where your money should go, rather than wondering, at the end of the month, where it all went.\n\nWhether for a single person or a huge company, a good budget is the first step towards using money wisely and reaching your goals.",
        summaryJa: "予算（バジェット）とは何かについて。地図も持たず、ただ正しそうな方向へ車を走らせて長い旅に出ることを想像しよう。どこかには着くかもしれないが、時間も燃料も金も無駄にするだろう。計画なしの金の管理もよく似ている。これを避けるため、人も企業も予算という簡素だが強力な道具を使う。予算は基本的に金の計画だ。一か月や一年といった期間を見通し、二つを比べる。入ってくると見込む金と、出ていくと見込む金だ。家庭なら入るのは主に給料、出るのは家賃・食費・光熱費などだ。企業なら入るのは売上、出るのは給料・材料費などだ。予算を作る利点はいくつかある。第一に、身の丈に合った暮らしをしているか示す。入るより出る方が多ければ、危機になる前に早く問題を明らかにする。第二に、優先順位を決める助けになる。前もって計画すれば、最も大切なことに十分な金を確保し、将来のために蓄えられる。予算は牢獄ではなく、主導権と安心を与える指針だ。金がどこへ行くべきか決める助けになる。賢く金を使い目標に達する第一歩だ。",
        quiz: [
          { q: "What is a budget?", options: ["A plan comparing money expected to come in and money expected to go out", "A type of bank", "A kind of loan"], answer: 0 },
          { q: "What does a budget reveal early?", options: ["Whether more money is going out than coming in", "The weather next week", "Who your friends are"], answer: 0 },
          { q: "How is a budget best understood?", options: ["As a guide that gives you control and peace of mind", "As a prison that controls you", "As a way to lose money"], answer: 0 }
        ]
      },
      {
        id: "d1116-2",
        title: "How Does a Lightbulb Work?",
        level: "★★☆",
        genre: "テクノロジー",
        text: "With a simple flick of a switch, a dark room fills with light. We do this countless times, rarely wondering how a small glass bulb can turn invisible electricity into bright, useful light. The traditional lightbulb, invented well over a hundred years ago, does this with a wonderfully simple idea: it makes something so hot that it glows.\n\nInside a traditional bulb is a very thin coil of metal wire, called the filament. This filament is usually made of a metal that can survive extremely high temperatures without melting. When you turn on the switch, electricity flows through this thin wire.\n\nHere is the key. The filament is so thin that it strongly resists the flow of electricity. As the electricity pushes through, this resistance makes the wire heat up, and heat up, until it becomes incredibly hot, far hotter than a kitchen oven. Any object that gets hot enough begins to glow, first red, then orange, then brilliant white. The filament becomes so hot that it shines with a bright white light. This is the light we see.\n\nThere is one more clever detail. If the hot metal filament were surrounded by ordinary air, it would quickly burn up. To prevent this, the air is removed from inside the glass bulb, or it is filled with a special gas that does not let the filament burn. This allows the filament to glow for a long time without being destroyed.\n\nSo a simple lightbulb works by using electricity to heat a thin wire until it shines, turning the flow of power into the gift of light.",
        summaryJa: "電球の仕組みについて。スイッチを軽く入れるだけで、暗い部屋が光で満ちる。私たちは数えきれぬほどこれを行うが、小さなガラスの球がどうやって目に見えない電気を明るく役立つ光に変えるのか、めったに考えない。百年以上前に発明された昔ながらの電球は、実に単純な考えでこれを行う。何かを非常に熱くして光らせるのだ。昔ながらの電球の中には、フィラメントという非常に細い金属線のコイルがある。たいてい極めて高い温度でも溶けない金属でできている。スイッチを入れると電気がこの細い線を流れる。ここが鍵だ。フィラメントはとても細いので電気の流れに強く抵抗する。電気が押し通ると、この抵抗で線が熱くなり続け、台所のオーブンよりはるかに熱い、信じられないほど高温になる。十分熱くなった物は光り始め、まず赤、次に橙、そして輝く白になる。フィラメントは非常に熱くなり明るい白い光で輝く。これが見える光だ。もう一つ巧妙な点がある。熱い金属線が普通の空気に囲まれていればすぐ燃え尽きる。防ぐため、ガラス球の中の空気は抜かれるか、燃えさせない特別な気体で満たされる。これで長く光れる。",
        quiz: [
          { q: "What is the filament in a lightbulb?", options: ["A very thin coil of metal wire that glows when heated", "A small battery", "A drop of water"], answer: 0 },
          { q: "Why does the filament heat up?", options: ["It is so thin that it strongly resists the flow of electricity", "It is filled with fire", "It is rubbed by hand"], answer: 0 },
          { q: "Why is the air removed from inside the bulb?", options: ["So the hot filament does not quickly burn up", "To make the bulb lighter", "To store light inside"], answer: 0 }
        ]
      },
      {
        id: "d1116-3",
        title: "Why Does Money Have Different Values in Different Countries?",
        level: "★★★",
        genre: "世界情勢",
        text: "If you travel from one country to another, one of the first things you must do is change your money. You hand over the money of your home country and receive a different kind of money in return. Strangely, you do not always get the same amount back. One unit of your money might buy two units of another country's money, or only half a unit of a third. Why does money have these different values around the world?\n\nAlmost every country has its own money, called its currency. The value of one currency compared to another is called the exchange rate, and this rate is constantly changing. It is decided mainly by supply and demand, just like the price of anything else.\n\nThink of a country's currency as a product that people around the world may want to buy or sell. If a country's economy is strong, and many people want to buy its goods, invest there, or visit as tourists, they will need its currency. This high demand tends to make the currency more valuable. If people lose confidence in a country's economy, demand for its currency falls, and its value tends to drop.\n\nMany things affect this: how healthy a country's economy is, how stable its government seems, and how much its goods are wanted. Because these conditions change daily, exchange rates move up and down all the time.\n\nSo the different values of money reflect the ever-changing confidence of the world in each country's economy, a quiet daily vote on how each nation is doing.",
        summaryJa: "なぜ国によってお金の価値が違うのかについて。ある国から別の国へ旅すると、まずしなければならないことの一つが両替だ。自国のお金を渡して別の種類のお金を受け取る。不思議なことに、いつも同じ額が返るわけではない。自国のお金一単位が別の国のお金二単位を買えることも、三つ目の国のお金半単位しか買えないこともある。なぜお金は世界でこう違う価値を持つのか。ほぼどの国も自国のお金、通貨を持つ。ある通貨の別の通貨に対する価値を為替レートといい、常に変わっている。主に需要と供給で決まる。他の何の値段とも同じだ。国の通貨を、世界の人々が買ったり売ったりしたい商品と考えよう。経済が強く、その国の商品を買いたい、投資したい、観光したい人が多ければ、その通貨が必要になる。この高い需要は通貨の価値を上げる傾向がある。国の経済への信頼が失われれば、通貨の需要は下がり、価値も下がる傾向がある。経済の健全さ、政府の安定、商品の人気など多くが影響する。こうした条件は日々変わるので、為替レートは絶えず上下する。お金の価値の違いは、各国経済への世界の変わりゆく信頼を映す。",
        quiz: [
          { q: "What is an 'exchange rate'?", options: ["The value of one currency compared to another", "A fee for entering a country", "A kind of bank account"], answer: 0 },
          { q: "What mainly decides a currency's value?", options: ["Supply and demand, like the price of anything else", "The color of the money", "The number of coins printed"], answer: 0 },
          { q: "What tends to make a currency more valuable?", options: ["High demand, when many people want that country's goods or to invest there", "A weak economy", "No one wanting the currency"], answer: 0 }
        ]
      },
      {
        id: "d1116-4",
        title: "The Japanese Love of Punctuality",
        level: "★★☆",
        genre: "日本",
        text: "In many countries, if a friend says they will meet you at three o'clock, they might arrive at ten past three, and no one thinks much of it. In Japan, however, time is treated very differently. Being on time, to the exact minute, is deeply important, and this careful respect for time is a famous and striking feature of Japanese life.\n\nPerhaps the most famous example is Japan's trains. The country's railways are known around the world for being astonishingly punctual. Trains are expected to arrive and depart exactly on schedule, and a delay of even a minute or two is considered a real problem. If a train is late, the railway company may even apologise to its passengers.\n\nThis attitude goes far beyond trains. In schools and workplaces, arriving late is seen as a sign of carelessness and a lack of respect for others. In fact, many Japanese people believe that to be truly polite, you should arrive a little early, not just exactly on time. Arriving five minutes before a meeting is often considered normal.\n\nWhy does this matter so much? At its heart, punctuality in Japan is a form of respect. By being on time, you show that you value other people and do not want to waste their time. It reflects a wider cultural idea that caring for others and the smooth running of society are very important.\n\nFor a visitor, this can take some getting used to. But it also means that in Japan, you can usually rely on things happening exactly when they are supposed to.",
        summaryJa: "日本の時間厳守の精神について。多くの国では、友人が三時に会おうと言って三時十分に現れても、誰も気にしない。だが日本では時間はまったく違って扱われる。分単位で正確に時間を守ることが深く重要で、この時間への細やかな敬意は日本の生活の有名で際立つ特徴だ。おそらく最も有名な例は日本の電車だ。日本の鉄道は驚くほど正確なことで世界中に知られる。電車は時刻どおりに発着すると期待され、一、二分の遅れさえ本当の問題とされる。遅れれば鉄道会社が乗客に謝ることさえある。この姿勢は電車をはるかに超える。学校や職場で遅刻は、不注意や他者への敬意の欠如の印と見なされる。実際、本当に礼儀正しくあるには、ちょうど時間どおりでなく少し早く着くべきだと多くの日本人が考える。会議の五分前に着くのがよく普通とされる。なぜそれほど大切なのか。根本的に、日本の時間厳守は敬意の一形態だ。時間を守ることで、他人を尊重しその時間を無駄にしたくないと示す。他者への配慮と社会の円滑な運営を重んじる広い文化的考えを映す。訪問者には慣れが要るが、物事が予定どおりに起こると頼れることでもある。",
        quiz: [
          { q: "What is a famous example of Japanese punctuality?", options: ["The trains, which are astonishingly punctual", "The weather", "The food"], answer: 0 },
          { q: "What do many Japanese people believe about being polite with time?", options: ["You should arrive a little early, not just exactly on time", "You should always arrive late", "Time does not matter"], answer: 0 },
          { q: "At its heart, what is punctuality in Japan?", options: ["A form of respect for other people and their time", "A way to earn money", "A kind of game"], answer: 0 }
        ]
      },
      {
        id: "d1116-5",
        title: "How Do Birds Fly?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "For thousands of years, humans looked up at birds gliding through the sky and dreamed of flying too. A bird makes it look so easy, rising into the air and soaring on the wind. But flight is a remarkable feat, and it depends on a clever combination of a bird's body, its wings, and the air itself.\n\nThe secret to staying up in the air is a force called lift. Lift is what pushes a bird upward, against the pull of gravity. The main source of lift is the special shape of a bird's wing. A wing is not flat. It is curved on top and flatter underneath. As the bird moves forward, air flows over and under the wing. Because of the curved shape, the air moving over the top has to travel a little faster, and this creates lower pressure above the wing than below it. The higher pressure underneath then pushes the wing, and the bird, upward.\n\nBut lift alone is not enough. To create this flow of air over the wings, the bird must move forward. Birds do this by flapping their wings, which pushes air backwards and drives the bird ahead, rather like rowing through the air. Once moving fast enough, the wings can also be held still to glide.\n\nBirds are beautifully built for this. Their bones are light, often hollow, and their feathers are both strong and incredibly light.\n\nSo a bird flying overhead is quietly obeying the laws of science, using the shape of its wings and the power of its muscles to turn moving air into the miracle of flight.",
        summaryJa: "鳥はどうやって飛ぶのかについて。何千年もの間、人間は空を滑る鳥を見上げ、自分も飛ぶことを夢見た。鳥はいとも簡単そうに空へ上がり、風に乗って舞う。だが飛行は見事な技で、鳥の体・翼、そして空気そのものの巧妙な組み合わせに頼る。空中にとどまる秘密は揚力という力だ。揚力は重力の引っ張りに逆らって鳥を上へ押す。揚力の主な源は鳥の翼の特別な形だ。翼は平らでなく、上側が湾曲し下側がより平らだ。鳥が前へ進むと、空気が翼の上と下を流れる。湾曲した形のため、上を流れる空気は少し速く進まねばならず、これが翼の上を下より低い圧力にする。すると下側の高い圧力が翼を、そして鳥を上へ押す。だが揚力だけでは足りない。この空気の流れを翼に作るには、鳥は前へ進まねばならない。鳥は翼を羽ばたいて空気を後ろへ押し、前へ進む。空中を漕ぐようだ。十分速く動けば、翼を静止させて滑空もできる。鳥はこのために美しく作られている。骨は軽くしばしば中空で、羽は丈夫で非常に軽い。鳥は科学の法則に静かに従っているのだ。",
        quiz: [
          { q: "What force pushes a bird upward against gravity?", options: ["Lift", "Gravity", "Cold"], answer: 0 },
          { q: "What is the main source of lift?", options: ["The special curved shape of a bird's wing", "The color of the feathers", "The bird's song"], answer: 0 },
          { q: "Why do birds flap their wings?", options: ["To push air backwards and move forward, creating airflow over the wings", "To keep warm only", "To make noise"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-11-15",
    passages: [
      {
        id: "d1115-1",
        title: "What Is a Wholesaler?",
        level: "★★☆",
        genre: "ビジネス",
        text: "When you buy a bottle of juice at a small local shop, you might imagine that the shopkeeper bought it directly from the company that made it. Sometimes this is true, but very often there is a hidden middle step in between. That step is a business called a wholesaler, and it quietly keeps much of our shopping world running smoothly.\n\nA wholesaler is a business that buys goods in very large amounts from the makers, and then sells them in smaller amounts to shops. The wholesaler does not usually sell to ordinary customers like you and me. Instead, its customers are the shops themselves.\n\nWhy is this middle step so useful? Imagine a small shop that wants to sell a hundred different products. Without wholesalers, the shopkeeper would have to contact a hundred different factories, arrange a hundred deliveries, and buy huge amounts from each. This would be slow, expensive, and almost impossible for a small business.\n\nA wholesaler solves this problem. It buys from many makers and gathers their products together. The small shop can then buy a little of everything from a single wholesaler, in amounts that suit its size. The maker also benefits, because it can sell huge amounts to a few wholesalers instead of dealing with thousands of tiny shops.\n\nSo the wholesaler acts as a helpful bridge between the makers of goods and the shops that sell them. Though customers rarely see them, wholesalers are a vital link in the chain that brings the products we want from the factory to the shelf.",
        summaryJa: "卸売業者とは何かについて。小さな地元の店でジュースを一本買うとき、店主が作った会社から直接仕入れたと思うかもしれない。そうであることもあるが、間にしばしば隠れた中間の段階がある。それが卸売業者という事業で、私たちの買い物の世界の多くを静かに円滑に動かしている。卸売業者は、作り手から非常に大量に商品を買い、それを小さな量に分けて店に売る事業だ。普通はあなたや私のような一般客には売らない。顧客は店そのものだ。なぜこの中間段階が役立つのか。百種類の異なる商品を売りたい小さな店を想像しよう。卸売業者がなければ、店主は百の工場に連絡し、百の配送を手配し、それぞれから大量に買わねばならない。遅く、高くつき、小さな事業にはほぼ不可能だ。卸売業者はこれを解決する。多くの作り手から買い、商品をまとめる。小さな店は一つの卸売業者から、自分の規模に合う量で少しずつ何でも買える。作り手も、何千もの小さな店を相手にせず少数の卸に大量に売れるので得をする。工場から棚へ商品を運ぶ鎖の不可欠な環だ。",
        quiz: [
          { q: "What is a wholesaler?", options: ["A business that buys goods in large amounts from makers and sells them to shops", "A shop that sells to ordinary customers", "A kind of factory worker"], answer: 0 },
          { q: "Who are a wholesaler's customers?", options: ["The shops themselves, not ordinary customers", "Only children", "The makers only"], answer: 0 },
          { q: "How does a wholesaler help a small shop?", options: ["The shop can buy a little of everything from one wholesaler", "The shop must contact every factory itself", "The shop cannot buy anything"], answer: 0 }
        ]
      },
      {
        id: "d1115-2",
        title: "How Does GPS Know Where You Are?",
        level: "★★☆",
        genre: "テクノロジー",
        text: "Your phone can show you exactly where you are on a map, almost anywhere on Earth, within a few metres. This amazing ability comes from a system called GPS, which stands for Global Positioning System. But how can a small phone know its precise place on the whole planet? The answer lies far above your head, in space.\n\nHigh above the Earth, a number of satellites are constantly circling the planet. Each one carries a very accurate clock and is always sending out radio signals. These signals simply say, in effect, I am this satellite, and here is the exact time I sent this message.\n\nYour phone contains a small receiver that listens for these signals. The clever trick is in timing. The signal from a satellite takes a tiny amount of time to travel down to your phone. By measuring exactly how long the signal took to arrive, your phone can work out how far away that satellite is.\n\nKnowing the distance to just one satellite is not enough. But if your phone measures its distance from several satellites at the same time, it can combine this information. There is only one point on Earth that is exactly those distances from all of them at once, and that point is you.\n\nUsing signals from four or more satellites, your phone can calculate its position, and often its height, very accurately.\n\nSo every time you follow a map on your phone, you are quietly using a network of satellites in space, all working together to answer a simple question: where am I?",
        summaryJa: "GPSはどうやって現在地を知るのかについて。スマホは地球上のほぼどこでも、数メートルの精度で地図上の正確な位置を示せる。この驚くべき能力はGPS（全地球測位システム）という仕組みから来る。だが小さなスマホがどうやって惑星全体での正確な位置を知るのか。答えは頭上はるか、宇宙にある。地球のはるか上空を、多数の衛星が絶えず回っている。各々が非常に正確な時計を積み、常に電波信号を送り出す。信号は要するに「私はこの衛星で、これを送った正確な時刻はこれだ」と言っている。スマホにはこの信号を聞く小さな受信機がある。巧妙な技は時間計測にある。衛星の信号はスマホへ届くのにごくわずかな時間かかる。信号が届くのにかかった時間を正確に測れば、その衛星までの距離が分かる。一つの衛星までの距離だけでは足りない。だが複数の衛星までの距離を同時に測れば、情報を組み合わせられる。地球上でそれら全てからちょうどその距離にある点は一つだけで、それがあなただ。四つ以上の衛星の信号で、位置や高さまで正確に計算できる。宇宙の衛星の網が協力し「私はどこか」に答えている。",
        quiz: [
          { q: "What does GPS use to find your location?", options: ["Satellites circling the Earth, sending radio signals", "Cameras on the ground", "A map printed in the phone"], answer: 0 },
          { q: "How does your phone work out how far away a satellite is?", options: ["By measuring exactly how long the signal took to arrive", "By its color", "By its weight"], answer: 0 },
          { q: "Why does your phone need several satellites, not just one?", options: ["Only one point on Earth is those exact distances from all of them at once", "One satellite is always broken", "Satellites work only in pairs"], answer: 0 }
        ]
      },
      {
        id: "d1115-3",
        title: "How Do International Courts Work?",
        level: "★★★",
        genre: "世界情勢",
        text: "Within a single country, when two people have a serious disagreement that they cannot solve themselves, they can go to a court. A judge listens to both sides and makes a fair decision, based on the law. But what happens when the disagreement is between two whole countries, or when terrible crimes are committed that shock the whole world? For these situations, the world has created international courts.\n\nAn international court is a special court that deals with matters between nations, or with the most serious crimes of global concern. Unlike a normal national court, it does not belong to any single country. Instead, it is set up by many nations working together, and its judges come from different parts of the world.\n\nThere are different kinds. One type helps settle peaceful disagreements between countries, for example over borders or the use of a shared river. Rather than fighting, the two nations agree to bring their case to the court and to accept its decision. This allows disputes to be solved with words and law, instead of weapons.\n\nAnother type deals with individuals who are accused of the very worst crimes, such as terrible acts committed during wars. These courts aim to show that no one is completely above the law, not even powerful leaders.\n\nInternational courts are not perfect. They often rely on countries choosing to cooperate, and a powerful nation may simply refuse. Yet they represent a hopeful idea: that even between nations, and even in the worst of times, reason, fairness, and law can offer a better path than force.",
        summaryJa: "国際裁判所はどう機能するのかについて。一つの国の中では、二人が自分たちで解決できない深刻な対立を抱えたとき、裁判所へ行ける。裁判官が双方の言い分を聞き、法に基づいて公正な判断を下す。だが対立が二つの国全体の間にあるとき、あるいは世界を震撼させるひどい犯罪が行われたときはどうなるのか。こうした状況のため、世界は国際裁判所を作った。国際裁判所は、国家間の問題や、世界的に重大な最も深刻な犯罪を扱う特別な裁判所だ。普通の国の裁判所と違い、どの一国にも属さない。多くの国が協力して設け、裁判官は世界の様々な地域から来る。種類は異なる。一つは国家間の平和的な対立、例えば国境や共有の川の利用をめぐる争いの解決を助ける。戦う代わりに、両国が事件を裁判所に持ち込み判断を受け入れると合意する。これで争いを武器でなく言葉と法で解決できる。もう一つは、戦争中のひどい行為など、最悪の犯罪で告発された個人を扱う。強大な指導者でさえ法を完全には超えられないと示すことを目指す。完璧ではなく各国の協力に頼るが、希望ある考えを表す。",
        quiz: [
          { q: "What is an international court?", options: ["A court that deals with matters between nations or the worst global crimes", "A normal court belonging to one country", "A kind of parliament"], answer: 0 },
          { q: "What does one type of international court help settle?", options: ["Peaceful disagreements between countries, like border disputes", "Shopping complaints", "School exams"], answer: 0 },
          { q: "What is a limitation of international courts?", options: ["They often rely on countries choosing to cooperate, which a powerful nation may refuse", "They have too many judges", "They never make decisions"], answer: 0 }
        ]
      },
      {
        id: "d1115-4",
        title: "Koban: Japan's Neighborhood Police Boxes",
        level: "★★☆",
        genre: "日本",
        text: "Walking through a Japanese town or city, you will often come across a small building, not much bigger than a room, sometimes marked with a red lamp. Inside, one or two police officers are usually on duty. This is a koban, a neighbourhood police box, and it is a simple but important part of what makes daily life in Japan feel so safe and orderly.\n\nUnlike a large central police station, a koban is small and local. It is placed right in the middle of the community it serves, near a station, a shopping street, or a residential area. Because it is so close to the people, the officers inside become a familiar and friendly presence, rather than a distant authority.\n\nThe work of a koban officer is wonderfully varied, and much of it has little to do with crime. One of their most common tasks is simply giving directions. Japanese addresses can be confusing, even for locals, so people constantly stop at a koban to ask the way. Officers also look after lost property. In Japan, if you lose your wallet or phone, there is a very good chance an honest person will hand it in at the nearest koban.\n\nOf course, the officers also help in emergencies, keep an eye on the area, and offer a safe place for anyone in trouble.\n\nThe koban system shows a gentle idea about safety: that it comes not only from catching criminals, but from a trusted, helpful presence woven quietly into the daily life of every neighbourhood.",
        summaryJa: "交番、日本の地域の警察拠点について。日本の町や都市を歩くと、部屋ほどの大きさの小さな建物に、時に赤いランプが付いているのをよく見かける。中ではたいてい一人か二人の警察官が勤務している。これが交番で、日本の日常がこれほど安全で秩序あると感じさせる、簡素だが重要な一部だ。大きな中央の警察署と違い、交番は小さく地域に根ざす。駅や商店街、住宅地の近くなど、奉仕する地域のまさに真ん中に置かれる。人々にとても近いので、中の警察官は遠い権威でなく、親しみある身近な存在になる。交番の警察官の仕事は実に多様で、その多くは犯罪とほとんど関係ない。最も一般的な仕事の一つは道案内だ。日本の住所は地元の人にも紛らわしく、人々は絶えず交番に立ち寄って道を尋ねる。落とし物の管理もする。日本では財布やスマホを落としても、正直な人が最寄りの交番に届けてくれる可能性がとても高い。もちろん緊急時にも助け、地域を見守り、困った人に安全な場所を提供する。安全は犯人を捕まえるだけでなく、信頼され頼れる存在から来るという考えを示す。",
        quiz: [
          { q: "What is a koban?", options: ["A small neighbourhood police box, local to the community", "A large central prison", "A kind of train station"], answer: 0 },
          { q: "What is one of the most common tasks of a koban officer?", options: ["Giving directions to people who are lost", "Building houses", "Flying planes"], answer: 0 },
          { q: "What idea about safety does the koban system show?", options: ["Safety comes from a trusted, helpful presence in daily life, not only catching criminals", "Safety comes only from high walls", "Safety does not matter"], answer: 0 }
        ]
      },
      {
        id: "d1115-5",
        title: "Why Is Blood Red?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "If you have ever had a small cut, you know that human blood is red. It is one of those facts so familiar that we rarely stop to ask why. What is it about our blood that gives it this deep red colour? The answer takes us deep inside the body, down to some of the smallest and busiest parts of us.\n\nBlood has a very important job: it carries oxygen from our lungs to every part of the body, where it is needed to keep us alive. This vital task is done by tiny red blood cells, which float in their millions in our blood.\n\nInside each of these red blood cells is a special substance whose job is to grab and carry oxygen. This substance contains iron. And here is the key: when this iron-rich substance joins with oxygen, it turns a bright red colour. Because our blood is full of these cells, all carrying oxygen, the blood itself looks red.\n\nYou might have heard that blood is blue before it gets oxygen, but this is a myth. Blood is always some shade of red. When it is rich in fresh oxygen, leaving the lungs, it is a bright, vivid red. After it has delivered its oxygen to the body, it becomes a darker, duller red. Our veins can look bluish through the skin, but the blood inside them is still red.\n\nSo the red colour of blood is really the colour of iron meeting oxygen, a tiny chemical signal of the life-giving work happening inside us every second.",
        summaryJa: "血はなぜ赤いのかについて。小さな切り傷を負ったことがあれば、人間の血が赤いと知っている。あまりに身近で、なぜかと立ち止まって問うことはめったにない。私たちの血の何がこの濃い赤色を与えるのか。答えは体の奥深く、私たちの最も小さく忙しい部分へと導く。血には重要な仕事がある。肺から体の隅々へ酸素を運び、生命を保つのに使う。この大切な仕事は、血中に何百万も浮かぶ小さな赤血球が行う。各赤血球の中には、酸素をつかんで運ぶ仕事をする特別な物質がある。この物質は鉄を含む。ここが鍵だ。この鉄に富む物質が酸素と結びつくと、鮮やかな赤色になる。血はこうした酸素を運ぶ細胞で満ちているので、血自体が赤く見える。酸素を得る前の血は青いと聞いたことがあるかもしれないが、これは俗説だ。血は常に何らかの赤だ。肺を出た新鮮な酸素に富む血は鮮やかな赤。体に酸素を届けた後は暗くくすんだ赤になる。皮膚越しに静脈は青みがかって見えるが、中の血はやはり赤い。血の赤は鉄が酸素と出会う色なのだ。",
        quiz: [
          { q: "What important job does blood do?", options: ["It carries oxygen from the lungs to every part of the body", "It makes the skin blue", "It cools the body like water"], answer: 0 },
          { q: "What gives blood its red colour?", options: ["An iron-rich substance that turns red when it joins with oxygen", "A red dye we eat", "The color of the skin"], answer: 0 },
          { q: "Is blood ever actually blue?", options: ["No, that is a myth; blood is always some shade of red", "Yes, before it has oxygen", "Yes, in the veins"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-11-14",
    passages: [
      {
        id: "d1114-1",
        title: "Why Does Competition Matter in Business?",
        level: "★★☆",
        genre: "ビジネス",
        text: "Imagine a town with only one shop selling bread. Because there is nowhere else to go, the shop could charge high prices, sell stale bread, and treat its customers badly. The people would have no choice but to accept it. Now imagine a second bakery opens across the street. Suddenly, everything changes. This change is the power of competition.\n\nCompetition happens when two or more businesses try to win the same customers. To succeed, each business must offer something better than the others. This simple pressure has powerful and positive effects, mostly for the benefit of ordinary customers.\n\nFirst, competition tends to lower prices. If one shop charges too much, customers will simply go to a cheaper rival. To keep their customers, businesses must offer fair prices. Second, competition improves quality. A business that sells poor products will lose customers to one that sells better ones, so each must work hard to improve.\n\nCompetition also encourages new ideas. To stand out from their rivals, businesses invent new products, offer better service, or find clever ways to do things. This constant push for improvement drives much of the progress we enjoy.\n\nOf course, competition can be hard for the businesses themselves. They must work constantly to stay ahead, and some will fail. But for society as a whole, and for customers in particular, competition is usually a very good thing.\n\nSo the next time you enjoy a low price, a good product, or helpful service, remember that competition, the quiet struggle between businesses to win your custom, is often the reason.",
        summaryJa: "なぜビジネスで競争が大切なのかについて。パンを売る店が一軒しかない町を想像しよう。他に行く所がないので、店は高値をつけ、古いパンを売り、客を粗末に扱えるかもしれない。人々は受け入れるしかない。では通りの向かいに二軒目のパン屋が開いたとしよう。突然すべてが変わる。この変化が競争の力だ。競争は、二つ以上の企業が同じ客を得ようとするときに起こる。成功するには、各企業が他より良い何かを提供せねばならない。この単純な圧力が、主に普通の客の利益のために、強力で良い効果を持つ。第一に、競争は価格を下げる傾向がある。一軒が高すぎれば客は安い競合へ行く。客を保つには公正な価格が要る。第二に、品質を上げる。粗悪な商品の店は良い店に客を奪われるので、各々が改善に努める。競争は新しい発想も促す。目立つために企業は新商品を生み、より良いサービスを提供し、巧妙な方法を見つける。この絶え間ない改善への推進が進歩の多くを生む。企業自身にはつらく、失敗する者もいるが、社会全体、特に客にはたいてい非常に良いことだ。",
        quiz: [
          { q: "What is competition in business?", options: ["When two or more businesses try to win the same customers", "When a shop has no rivals", "A kind of tax"], answer: 0 },
          { q: "How does competition tend to affect prices?", options: ["It tends to lower them, as customers can go to a cheaper rival", "It makes all prices rise", "It has no effect on prices"], answer: 0 },
          { q: "Why does competition encourage new ideas?", options: ["To stand out from rivals, businesses invent new products and services", "Because the law requires new ideas", "Because customers dislike new things"], answer: 0 }
        ]
      },
      {
        id: "d1114-2",
        title: "How Does a Touchscreen Work?",
        level: "★★☆",
        genre: "テクノロジー",
        text: "We touch them hundreds of times a day, on our phones, at train stations, and in shops. We tap, swipe, and type on smooth glass screens, and somehow the device knows exactly where our finger is. This feels completely natural now, but it is a clever piece of technology. How does a flat sheet of glass know where you are touching it?\n\nThe most common type of touchscreen today uses electricity. The key fact behind it is that the human body conducts electricity, even if only a little. Our skin can carry a tiny electric charge.\n\nUnder the glass of the screen is a very thin, invisible layer that holds a small, even electrical charge across its whole surface. When your finger comes near and touches the glass, your body draws away a tiny amount of this charge at that exact spot. The screen is designed to notice this small change.\n\nSensors around the edges of the screen constantly measure the electrical charge across the surface. When the charge changes at one point, the device can work out precisely where the change happened, and therefore where your finger is. It does this incredibly fast, many times each second, so it can follow your finger smoothly as it moves.\n\nThis is also why these screens often do not respond to a gloved finger or the end of a normal pen. These materials do not conduct electricity, so the screen feels nothing.\n\nSo a touchscreen works by sensing the tiny electrical effect of your own body, turning a simple touch of glass into a precise command.",
        summaryJa: "タッチスクリーンの仕組みについて。私たちは一日に何百回も、スマホや駅、店でそれに触れる。滑らかなガラスの画面をたたき、なで、入力し、機器はなぜか指の位置を正確に知る。今では完全に自然に感じるが、巧妙な技術だ。平らなガラスの板はどうやって触れられた場所を知るのか。今日最も一般的なタッチスクリーンは電気を使う。背景にある鍵は、人体がわずかながら電気を通すことだ。皮膚は小さな電荷を運べる。画面のガラスの下には、全面に小さく均一な電荷を保つ、非常に薄く目に見えない層がある。指が近づいてガラスに触れると、体がちょうどその場所の電荷をわずかに引き去る。画面はこの小さな変化に気づくよう作られている。画面の縁のセンサーが表面の電荷を絶えず測る。ある点で電荷が変わると、機器は変化が起きた場所、つまり指の位置を正確に割り出せる。毎秒何度も非常に速く行うので、動く指を滑らかに追える。だから手袋の指や普通のペンの先には反応しないことが多い。電気を通さないからだ。体の小さな電気的効果を感じ取るのだ。",
        quiz: [
          { q: "What key fact does a common touchscreen rely on?", options: ["The human body conducts a little electricity", "The human body produces light", "Glass is very heavy"], answer: 0 },
          { q: "What happens when your finger touches the screen?", options: ["It draws away a tiny amount of the screen's electric charge at that spot", "It heats the glass", "It makes a sound"], answer: 0 },
          { q: "Why does the screen often not respond to a gloved finger?", options: ["The glove does not conduct electricity, so the screen feels nothing", "The glove is too warm", "Gloves are too light"], answer: 0 }
        ]
      },
      {
        id: "d1114-3",
        title: "What Is a Peacekeeping Mission?",
        level: "★★★",
        genre: "世界情勢",
        text: "When a long and bitter conflict between groups or nations finally comes to an end, the danger is not always over. The two sides may stop fighting, but they often still distrust and fear one another. A single mistake or a small act of violence could easily start the fighting all over again. In these fragile moments, the world sometimes sends in a special kind of help: a peacekeeping mission.\n\nPeacekeepers are soldiers, police, and other workers sent by the international community, usually under the flag of the United Nations, to a place where a conflict has recently stopped. Importantly, they are not sent to fight a war or to take one side. Their job is to help keep the peace that has just been won.\n\nThey do this in several ways. They may stand between the two former enemies, watching the border or the agreed line between them, to make sure neither side breaks the ceasefire. They often help protect ordinary people who have suffered, delivering aid and guarding against violence. They may also help a damaged country slowly rebuild, supporting fair elections or helping former fighters return to normal life.\n\nPeacekeepers are often recognised by their light blue helmets or caps. These bright colours show that they come in peace, not as an enemy army.\n\nThe work is difficult and sometimes dangerous, and it does not always succeed. But at its best, a peacekeeping mission gives a war-torn region a precious chance: a calm space in which a fragile peace can grow strong, and ordinary life can slowly begin again.",
        summaryJa: "平和維持活動（PKO）とは何かについて。集団や国家の間の長く激しい紛争がついに終わっても、危険は必ずしも去らない。双方が戦いをやめても、なお互いを不信し恐れることが多い。一つの過ちや小さな暴力が、たやすく戦いを再び始めかねない。こうしたもろい瞬間に、世界は時に特別な助けを送る。平和維持活動だ。平和維持要員は、国際社会が、たいてい国連の旗の下で、紛争が最近止まった場所へ送る兵士・警察・その他の働き手だ。重要なのは、戦争をするためでも一方に味方するためでもないことだ。彼らの仕事は、勝ち取ったばかりの平和を保つのを助けることだ。数通りに行う。かつての敵同士の間に立ち、国境や合意された境界線を見張り、どちらも停戦を破らないようにする。苦しんだ普通の人々を守り、援助を届け、暴力を防ぐこともよくある。傷ついた国の再建を助け、公正な選挙を支え、元戦闘員が普通の生活に戻るのを助けることもある。水色のヘルメットや帽子でよく見分けられる。敵でなく平和のために来た印だ。難しく危険で常に成功はしないが、最良の時、戦禍の地に貴重な機会を与える。",
        quiz: [
          { q: "What is the job of peacekeepers?", options: ["To help keep a peace that has just been won, not to fight a war", "To take one side and win the war", "To start new conflicts"], answer: 0 },
          { q: "What is one thing peacekeepers do?", options: ["Watch the line between former enemies to make sure the ceasefire holds", "Choose which side should rule", "Build weapons"], answer: 0 },
          { q: "Why do peacekeepers wear light blue helmets?", options: ["To show they come in peace, not as an enemy army", "To hide from everyone", "Because blue is the cheapest color"], answer: 0 }
        ]
      },
      {
        id: "d1114-4",
        title: "Maneki-neko: Japan's Beckoning Cat",
        level: "★★☆",
        genre: "日本",
        text: "If you have ever visited a Japanese shop or restaurant, you may have noticed a small cat figure sitting near the entrance. It is usually white or golden, with one paw raised high in the air, as if waving hello. This cheerful little cat is the maneki-neko, meaning the beckoning cat, and it is one of Japan's most famous lucky charms.\n\nThe raised paw is the key to its meaning. In Japan, people traditionally beckon others to come closer with a gesture of the hand that looks like this raised paw. So the cat is not waving goodbye; it is inviting good things to come in. A cat with its left paw raised is believed to invite customers and people, while a right paw is thought to invite money and good fortune. This is why so many are placed in shops and businesses.\n\nThe details often carry meaning too. The colour of the cat, the collar it wears, and the coin it sometimes holds can all represent different kinds of luck, such as health, wealth, or success. There are countless charming stories about how the lucky cat first appeared, often involving a cat that saved or helped a kind person.\n\nToday, the maneki-neko is loved far beyond Japan and can be found in shops all around the world. Whether or not a person believes in its power, the little cat with its welcoming paw brings a warm and friendly feeling, silently wishing good luck to everyone who passes by.",
        summaryJa: "招き猫、日本の縁起物について。日本の店や飲食店を訪れたことがあれば、入り口近くに座る小さな猫の像に気づいたかもしれない。たいてい白か金色で、片方の前足を高く上げ、まるで挨拶しているようだ。この陽気な小さな猫が招き猫で、日本で最も有名な縁起物の一つだ。上げた前足が意味の鍵だ。日本では伝統的に、この上げた前足のように見える手ぶりで人を近くへ招く。だから猫は別れを振っているのでなく、良いものを招き入れているのだ。左の前足を上げた猫は客や人を招き、右の前足は金や幸運を招くと信じられる。だから多くが店や事業に置かれる。細部にも意味があることが多い。猫の色、着けた首輪、時に持つ小判は、健康・富・成功など異なる種類の幸運を表しうる。縁起猫が最初に現れた経緯には、親切な人を救い助けた猫が登場する魅力的な話が数えきれぬほどある。今や招き猫は日本をはるかに超えて愛され、世界中の店で見つかる。力を信じるかどうかにかかわらず、招く前足の小さな猫は温かく親しみある気持ちを運ぶ。",
        quiz: [
          { q: "What does 'maneki-neko' mean?", options: ["The beckoning cat", "The sleeping cat", "The running cat"], answer: 0 },
          { q: "What does the cat's raised paw represent?", options: ["Inviting good things, such as customers or fortune, to come in", "Saying goodbye", "Asking for food"], answer: 0 },
          { q: "What is believed about a cat with its right paw raised?", options: ["It invites money and good fortune", "It brings bad weather", "It keeps people away"], answer: 0 }
        ]
      },
      {
        id: "d1114-5",
        title: "Why Do Stars Twinkle?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "On a clear night, far from city lights, the sky fills with countless stars. If you watch them, you will notice something lovely: many of the stars seem to shimmer and flicker, changing brightness and even colour from moment to moment. This is what we call twinkling. But here is a surprise: the stars themselves are not actually flickering at all. The twinkling happens much closer to home.\n\nA star is a huge, distant sun, shining with a steady light. That light travels across unimaginable distances of empty space to reach us, and during this long journey, it stays calm and even. The trouble only begins in the last tiny part of its journey, when the starlight enters the Earth's atmosphere, the layer of air around our planet.\n\nOur atmosphere is always moving. It is full of pockets of air at different temperatures, which are constantly shifting and swirling. As the thin beam of starlight passes down through these moving layers of air, it is bent this way and that, again and again. By the time it reaches your eye, the light has been nudged around so many times that the star appears to dance and sparkle.\n\nThis is also why planets usually twinkle much less than stars. Planets are far closer to us, so they appear not as a single point but as a tiny disc of light, which the air cannot disturb so easily.\n\nSo the twinkling of the stars is really a gift of our own restless air, turning steady, distant suns into the shimmering jewels of the night sky.",
        summaryJa: "星はなぜまたたくのかについて。街の灯から離れた晴れた夜、空は無数の星で満ちる。見ていると素敵なことに気づく。多くの星がゆらめき明滅し、刻一刻と明るさや色さえ変える。これをまたたきと呼ぶ。だが驚きがある。星そのものは実はまったく明滅していない。またたきはもっと身近で起こる。星は巨大で遠い太陽で、一定の光で輝く。その光は想像もできない空間の距離を越えて私たちに届き、この長い旅の間、穏やかで一定だ。問題は旅の最後のごく一部、星の光が地球の大気、惑星を包む空気の層に入るときにだけ始まる。大気は常に動いている。異なる温度の空気の塊で満ち、絶えず移り渦巻く。細い星の光がこの動く空気の層を下りて通るうちに、あちこちへ何度も曲げられる。目に届くころには光は何度も押しやられ、星は踊り輝いて見える。だから惑星はたいてい星よりずっとまたたかない。惑星はずっと近く、一点でなく小さな光の円盤に見え、空気が乱しにくいのだ。星のまたたきは、私たち自身の落ち着かない空気の贈り物だ。",
        quiz: [
          { q: "Do the stars themselves actually flicker?", options: ["No, their light is steady; the twinkling happens in our atmosphere", "Yes, stars turn on and off", "Yes, they change size"], answer: 0 },
          { q: "What causes the twinkling?", options: ["Starlight is bent as it passes through moving layers of air", "The stars are blinking", "Clouds cover the stars"], answer: 0 },
          { q: "Why do planets usually twinkle less than stars?", options: ["They are closer and appear as a tiny disc, which the air cannot disturb so easily", "They are much hotter", "They have no light"], answer: 0 }
        ]
      }
    ]
    }
  ] };
