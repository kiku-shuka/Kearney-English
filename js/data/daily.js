/* デイリー配信リーディング
 * 毎朝の自動ルーチンがこのファイルを丸ごと上書き生成する（直近 7 日分を保持）。
 * days は日付降順。各 day = { date: "YYYY-MM-DD", passages: [readingPassages と同スキーマ + genre] }
 * このファイル以外は手書きデータであり、ルーチンは触らない。
 */
window.KE_DATA = window.KE_DATA || {};

KE_DATA.dailyReading = { days: [
    {
    date: "2026-09-21",
    passages: [
      {
        id: "d0921-1",
        title: "Why Cash Flow Matters",
        level: "★★★",
        genre: "ビジネス",
        text: "Many people think a business is healthy as long as it makes a profit. But there is another number that can matter even more: cash flow. Cash flow is simply the movement of money into and out of a business — the actual cash a company has on hand to pay its bills right now. Surprisingly, a profitable company can still fail if its cash flow goes wrong.\n\nHow is this possible? Imagine a small company that sells a large order of goods. On paper, it has made a good profit. But the customer will not pay for sixty days. Meanwhile, the company must still pay its workers, its rent, and its suppliers this week. If it does not have enough cash to cover these costs while it waits, it can run out of money and be forced to close, even though the sale was profitable.\n\nThis is why wise business owners watch their cash flow as closely as their profit. They try to make sure money comes in about as fast as it goes out. They may ask customers to pay sooner, keep a reserve of cash for emergencies, or manage carefully how much stock they buy.\n\nProfit tells you whether a business is winning over the long run. Cash flow tells you whether it can survive today. Both matter, but a company that forgets about cash flow can find that being profitable on paper is not enough to keep the doors open.",
        summaryJa: "多くの人は、利益が出ていれば事業は健全だと思う。だが、それ以上に重要でありうる別の数字がある。キャッシュフローだ。キャッシュフローとは事業に出入りするお金の動き——今すぐ請求を払うために手元にある実際の現金だ。意外にも、利益の出ている会社でも、キャッシュフローがおかしくなれば倒れうる。どうしてか。ある小さな会社が大口の注文を売るとしよう。帳簿上は良い利益だ。だが客は60日後まで払わない。その間も会社は今週、従業員や家賃、仕入れ先に払わねばならない。待つ間これらを賄う現金が足りなければ、売却は利益が出ていても資金が尽き、閉鎖を迫られうる。だから賢い経営者は利益と同じくらいキャッシュフローを注視する。お金が出ていくのとほぼ同じ速さで入るようにしようとする。客に早く払ってもらったり、緊急用に現金を蓄えたり、仕入れる在庫の量を慎重に管理したりする。利益は長期的に勝っているかを示す。キャッシュフローは今日生き延びられるかを示す。両方大切だが、キャッシュフローを忘れる会社は、帳簿上の利益だけでは店を開け続けられないと気づくことになる。",
        quiz: [
          { q: "What is cash flow?", options: ["The movement of money into and out of a business, the cash on hand right now", "The total number of products", "The number of workers"], answer: 0 },
          { q: "How can a profitable company still fail?", options: ["If it lacks cash to pay bills while waiting for customers to pay", "It cannot fail if profitable", "Only if it has too much cash"], answer: 0 },
          { q: "What do wise owners do about cash flow?", options: ["Watch it closely and try to make money come in about as fast as it goes out", "Ignore it completely", "Spend all their cash at once"], answer: 0 }
        ]
      },
      {
        id: "d0921-2",
        title: "What Is 'the Cloud'?",
        level: "★★☆",
        genre: "テクノロジー",
        text: "People often say their photos are \"in the cloud,\" or that a company runs its software \"on the cloud.\" It sounds mysterious, as if our data floats somewhere in the sky. But the cloud is not in the sky at all. It is a simple, powerful idea about where computing happens.\n\nIn the past, if you wanted to store files or run a program, you needed a computer of your own that was strong enough to do the job. The cloud changes this. Instead of doing everything on your own device, you use powerful computers owned by a company, reached over the internet. Your photos, files, or programs actually live in large buildings full of computers, called data centers, often far away.\n\nWhy is this useful? For you, it means your files are safe even if your phone breaks, and you can reach them from any device. For companies, it means they can rent as much computing power as they need, when they need it, instead of buying and caring for their own machines. A small business can suddenly use the same powerful tools as a giant one.\n\nThere are things to consider. You must trust the company to keep your data safe and private, and you need an internet connection to reach it.\n\nSo the cloud is really just other people's computers, shared over the internet — a quiet idea that has changed how the whole world stores and uses information.",
        summaryJa: "人はよく写真が「クラウドにある」とか、会社がソフトを「クラウドで動かす」と言う。まるでデータが空のどこかに浮かんでいるようで神秘的に聞こえる。だがクラウドは空にはない。計算がどこで起きるかについての単純で強力な考えだ。かつて、ファイルを保存したりプログラムを動かしたりするには、それをこなせるほど強い自分のコンピューターが要った。クラウドはこれを変える。すべてを自分の端末で行う代わりに、ある会社が所有する強力なコンピューターをインターネット越しに使う。写真やファイル、プログラムは実際には、しばしば遠くにある、コンピューターで満ちた大きな建物「データセンター」に置かれている。なぜ便利か。あなたには、電話が壊れてもファイルが安全で、どの端末からも届くことを意味する。企業には、自前の機械を買い世話する代わりに、必要な時に必要なだけ計算力を借りられることを意味する。小さな事業が突然、巨大企業と同じ強力な道具を使える。考慮すべき点もある。データを安全に非公開に保つよう会社を信頼せねばならず、届くにはインターネット接続が要る。だからクラウドは、インターネットで共有される他人のコンピューターにすぎない——世界の情報の蓄え方と使い方を変えた静かな考えだ。",
        quiz: [
          { q: "Where is 'the cloud' really?", options: ["In large buildings full of computers called data centers, reached over the internet", "Floating in the sky", "Inside your own phone only"], answer: 0 },
          { q: "Why is the cloud useful for you?", options: ["Your files stay safe if your device breaks and you can reach them from anywhere", "It makes your phone heavier", "It deletes your files"], answer: 0 },
          { q: "What must you consider when using the cloud?", options: ["You must trust the company with your data and need an internet connection", "Nothing at all", "That it works without any company"], answer: 0 }
        ]
      },
      {
        id: "d0921-3",
        title: "Feeding a Growing World",
        level: "★★★",
        genre: "世界情勢",
        text: "There are now more than eight billion people on Earth, and the number is still rising. Every one of them needs to eat. Producing enough food for everyone, while also caring for the planet, is one of the greatest challenges of our time.\n\nAt first, this may sound simple: just grow more food. But it is not easy. Good farmland and fresh water are limited. Growing more crops can mean cutting down forests or using more chemicals, which harms nature. And as the climate changes, some farms face new droughts, floods, and pests.\n\nThere is also a surprising problem: waste. A shockingly large share of the food the world grows is never eaten. It rots on the way to market, or is thrown away in homes and shops. Reducing this waste could feed many more people without growing a single extra field.\n\nScientists and farmers are working on many answers. Some develop crops that need less water or resist disease. Others find ways to grow food in cities, or to make farming gentler on the soil. Sharing knowledge between countries helps too.\n\nFeeding the world is not only about quantity. It is also about fairness. Today, enough food is grown for everyone, yet many still go hungry because they cannot reach or afford it.\n\nSolving this will take science, cooperation, and care. But few goals are more worthy than making sure every person on the planet has enough to eat.",
        summaryJa: "今、地球には80億人以上がいて、その数はなお増えている。誰もが食べる必要がある。地球を大切にしつつ皆に十分な食料を作ることは、現代の最大の難題の一つだ。一見、単純に聞こえるかもしれない。もっと作ればいい、と。だが容易ではない。良い農地と真水は限られている。作物を増やすことは森を切ったり化学物質を多く使ったりを意味しうて、自然を害する。気候が変わるにつれ、新たな干ばつや洪水、害虫に直面する農場もある。意外な問題もある。廃棄だ。世界が育てる食料の驚くほど大きな割合が決して食べられない。市場へ運ぶ途中で腐り、家庭や店で捨てられる。この廃棄を減らせば、畑を一つも増やさずに多くの人を養える。科学者や農家は多くの答えに取り組む。水が少なくて済む、あるいは病気に強い作物を開発する人もいる。都市で食料を育てたり、土に優しい農法を見つけたりする人もいる。国同士の知識共有も助ける。世界を養うのは量だけの話ではない。公正さの話でもある。今日、皆に十分な食料が育てられているのに、届かず買えないために多くが飢えている。解決には科学、協力、心配りが要る。だが、地球の全ての人が十分食べられるようにすることほど価値ある目標は少ない。",
        quiz: [
          { q: "Why is growing more food not simple?", options: ["Farmland and water are limited, and growing more can harm nature", "Because food grows by itself easily", "Because no one is hungry"], answer: 0 },
          { q: "What surprising problem could feed more people if solved?", options: ["Food waste — much food is grown but never eaten", "Too many farms", "Too much rain everywhere"], answer: 0 },
          { q: "Why do many people still go hungry today?", options: ["Enough food is grown, but many cannot reach or afford it", "Because no food exists", "Because people refuse to eat"], answer: 0 }
        ]
      },
      {
        id: "d0921-4",
        title: "Sumo: Japan's Ancient Sport",
        level: "★★☆",
        genre: "日本",
        text: "In a ring of clay, two very large men in simple belts face each other. They crouch, stare, and then rush together with a great clash. In just a few seconds, one pushes the other out of the ring or makes him touch the ground. This is sumo, Japan's oldest and most famous traditional sport.\n\nSumo has been part of Japanese culture for many centuries, and it began partly as a religious ceremony. Even today, the sport is full of tradition. Before a match, the wrestlers throw salt into the ring to purify it, and they perform slow, careful movements that are hundreds of years old. The referee wears clothing from an earlier age.\n\nThe rules are simple, which is part of the beauty. A wrestler loses if any part of his body except the soles of his feet touches the ground, or if he steps outside the ring. Because of this, a match can end in an instant, yet each one is full of power and skill.\n\nThe wrestlers, called \"rikishi,\" live a hard and disciplined life. They train for many hours, eat special meals to grow strong, and follow strict rules of behavior. Reaching the top rank is a great honor.\n\nSumo is more than a sport. It is a living link to Japan's past, mixing athletic power with deep tradition and respect. In a fast-changing world, it carries ancient customs proudly into the present day.",
        summaryJa: "土の土俵で、簡素なまわしをつけた二人の非常に大きな男が向き合う。しゃがみ、にらみ合い、大きな衝突とともにぶつかる。わずか数秒で、一方が他方を土俵の外へ押し出すか、地面に触れさせる。これが相撲、日本最古で最も有名な伝統的スポーツだ。相撲は何世紀も日本文化の一部で、一部は宗教的な儀式として始まった。今日でもこのスポーツは伝統に満ちている。取組の前、力士は土俵を清めるため塩をまき、何百年も前からのゆっくり丁寧な所作を行う。行司は昔の時代の装束をまとう。規則が単純なのも美しさの一部だ。足の裏以外の体の一部が地面に触れるか、土俵の外に出れば負けだ。だから取組は一瞬で終わりうるが、一つ一つが力と技に満ちている。力士と呼ばれる者は、厳しく規律ある生活を送る。何時間も稽古し、強くなるため特別な食事をとり、厳しい行動規範に従う。最高位に達するのは大きな名誉だ。相撲はスポーツ以上のものだ。日本の過去への生きたつながりで、運動の力と深い伝統、敬意を混ぜ合わせる。速く変わる世界で、古い習わしを誇り高く現代へ運んでいる。",
        quiz: [
          { q: "How does a sumo wrestler win a match?", options: ["By pushing the other out of the ring or making him touch the ground", "By running the fastest lap", "By scoring goals"], answer: 0 },
          { q: "What tradition do wrestlers perform before a match?", options: ["They throw salt into the ring to purify it", "They sing a song", "They eat a meal in the ring"], answer: 0 },
          { q: "What is sumo described as, beyond a sport?", options: ["A living link to Japan's past, mixing power with tradition and respect", "A modern video game", "A type of dance only"], answer: 0 }
        ]
      },
      {
        id: "d0921-5",
        title: "Why We Have Seasons",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "In many parts of the world, the year moves through four seasons: warm summers, cold winters, and the gentle change of spring and autumn. Have you ever wondered what causes them? Many people guess that summer comes when the Earth is closer to the sun, but the real reason is more surprising.\n\nThe Earth travels around the sun once a year, but it does not sit perfectly upright. Instead, it is tilted a little to one side, like a spinning top leaning as it turns. This small tilt is the true cause of the seasons.\n\nBecause of the tilt, different parts of the Earth lean toward the sun at different times of the year. When your part of the world is tilted toward the sun, its rays hit more directly and the days are longer. That is summer. Six months later, your part is tilted away, the sun's rays are weaker and more slanted, and the days are shorter. That is winter.\n\nThis also explains a curious fact: when it is summer in the northern half of the Earth, it is winter in the southern half, and the other way around. The two halves lean in opposite directions.\n\nSo the seasons are not caused by distance from the sun, but by a small, steady tilt. Because of this gentle lean, our planet gives us the rich, changing rhythm of the year — a quiet piece of astronomy we feel every single day.",
        summaryJa: "世界の多くの地域で、一年は四季をめぐる。暖かい夏、寒い冬、そして春と秋の穏やかな移ろいだ。何が季節を起こすのか、考えたことはあるだろうか。多くの人は、地球が太陽に近いとき夏が来ると思うが、本当の理由はもっと意外だ。地球は一年に一度太陽の周りを回るが、完全にまっすぐには立っていない。回りながら傾くコマのように、少し一方に傾いている。この小さな傾きが季節の真の原因だ。傾きのため、地球の異なる部分が一年の異なる時期に太陽の方へ傾く。あなたの地域が太陽の方へ傾くと、光がより真っすぐ当たり、日は長くなる。それが夏だ。半年後、あなたの地域は反対へ傾き、太陽の光は弱く斜めになり、日は短くなる。それが冬だ。これは不思議な事実も説明する。地球の北半分が夏のとき、南半分は冬で、その逆もそうだ。二つの半分は反対の方向に傾いている。だから季節は太陽からの距離でなく、小さく一定の傾きによって起きる。この穏やかな傾きのおかげで、私たちの惑星は豊かで移ろう一年の律動を与えてくれる。毎日感じている静かな天文学の一片だ。",
        quiz: [
          { q: "What really causes the seasons?", options: ["The Earth's small tilt as it travels around the sun", "The Earth moving closer to the sun in summer", "The sun growing hotter"], answer: 0 },
          { q: "Why is it summer when your part of the Earth is tilted toward the sun?", options: ["The sun's rays hit more directly and the days are longer", "The sun disappears", "The Earth stops moving"], answer: 0 },
          { q: "What curious fact does the tilt explain?", options: ["When it is summer in the north, it is winter in the south, and the other way around", "That seasons never change", "That both halves are always the same"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-09-20",
    passages: [
      {
        id: "d0920-1",
        title: "What Makes a Good Leader?",
        level: "★★☆",
        genre: "ビジネス",
        text: "Every team, company, and country depends on leaders. But what actually makes someone a good leader? It is a question people have asked for thousands of years, and while there is no single answer, some qualities appear again and again.\n\nThe first is a clear vision. A good leader knows where the group is trying to go and can explain it simply, so that everyone understands the goal. Without a clear direction, even a talented team can wander and lose energy.\n\nThe second is trust. People follow leaders they believe in. A good leader keeps promises, tells the truth even when it is hard, and treats others fairly. Trust is slow to build and easy to break, so wise leaders guard it carefully.\n\nThe third quality is the ability to listen. Poor leaders think they must have every answer. Good leaders know that the best ideas can come from anyone, so they ask questions and truly listen before deciding.\n\nFinally, good leaders care about their people. They give credit for success, take responsibility for failure, and help others grow. People work hardest for someone who clearly wants them to succeed.\n\nInterestingly, being loud or forceful is not on this list. Some of the finest leaders are quiet and humble. In the end, leadership is less about power and more about service — helping a group become better than it could ever be alone.",
        summaryJa: "あらゆるチーム、企業、国は指導者に頼る。だが実際、何が良い指導者を作るのか。人が何千年も問うてきた問いで、唯一の答えはないが、繰り返し現れる資質がある。第一は明確なビジョンだ。良い指導者は集団がどこへ向かうかを知り、皆が目標を理解できるよう簡潔に説明できる。明確な方向がなければ、才能あるチームもさまよい活力を失う。第二は信頼だ。人は信じられる指導者に従う。良い指導者は約束を守り、困難でも真実を語り、公平に接する。信頼は築くのが遅く壊れやすいので、賢い指導者は慎重に守る。第三の資質は聞く力だ。劣った指導者は全ての答えを持たねばと思う。良い指導者は最良の考えは誰からでも来ると知り、決める前に問い、真に聞く。最後に、良い指導者は人を大切にする。成功の功績を与え、失敗の責任を取り、他者の成長を助ける。人は自分の成功を明らかに願う相手に最も懸命に働く。興味深いことに、声高で強引なことはこの一覧にない。最も優れた指導者の中には静かで謙虚な人もいる。指導とは力よりも奉仕であり、集団が単独では決してなれない姿になるのを助けることだ。",
        quiz: [
          { q: "What is the first quality of a good leader mentioned?", options: ["A clear vision that everyone can understand", "A very loud voice", "Never listening to others"], answer: 0 },
          { q: "Why is trust important for a leader?", options: ["People follow leaders they believe in; it is slow to build and easy to break", "It is not important at all", "It lets leaders break promises"], answer: 0 },
          { q: "According to the passage, leadership is mostly about what?", options: ["Service — helping a group become better than it could alone", "Having power over others", "Being the loudest person"], answer: 0 }
        ]
      },
      {
        id: "d0920-2",
        title: "How a Touchscreen Knows Your Touch",
        level: "★★★",
        genre: "テクノロジー",
        text: "We touch glass screens hundreds of times a day, tapping, swiping, and typing without a second thought. Yet how does a flat sheet of glass know exactly where your finger is? The answer lies in a clever use of electricity, hidden just beneath the surface.\n\nMost modern screens use a method called \"capacitive touch.\" Under the glass is a fine, invisible grid of transparent wires that carries a tiny electric charge across the whole screen. The human body also conducts a little electricity. So when your finger touches the glass, it draws away a very small amount of that charge at exactly that point.\n\nThe device constantly watches the grid for these tiny changes. When it senses a change at a certain spot, it knows your finger is there. By checking the whole screen many times each second, it can follow your finger as it moves, allowing smooth swipes and quick typing.\n\nThis is also why such screens often do not work with ordinary gloves: the glove blocks the electric connection between your finger and the glass. Special gloves with conductive threads solve this problem.\n\nCapacitive screens can even sense more than one finger at once, which is how you pinch to zoom or use two hands to play a game.\n\nSo each time you tap your phone, you are completing a tiny electric circuit with your own body — a quiet, invisible conversation between your finger and the machine.",
        summaryJa: "私たちは一日に何百回もガラスの画面に触れ、考えもせずタップし、スワイプし、入力する。だが平らなガラスの板は、指がどこにあるかをどうして正確に知るのか。答えは、表面のすぐ下に隠れた電気の巧みな利用にある。現代の多くの画面は「静電容量式タッチ」という方法を使う。ガラスの下には、画面全体にごく小さな電荷を運ぶ、目に見えない細い透明な配線の格子がある。人体も少し電気を通す。だから指がガラスに触れると、まさにその点で電荷のごく一部を引き取る。装置は常にこの小さな変化を格子で監視する。ある点で変化を感じると、そこに指があると分かる。画面全体を毎秒何度も調べることで、動く指を追え、滑らかなスワイプや速い入力ができる。だからこうした画面は普通の手袋では働かないことが多い。手袋が指とガラスの電気的つながりを遮るのだ。導電性の糸を使った特別な手袋がこれを解決する。静電容量式画面は一度に複数の指も感知でき、だからつまんで拡大したり両手でゲームをしたりできる。電話をタップするたび、あなたは自分の体で小さな電気回路を完成させている——指と機械の静かで見えない対話だ。",
        quiz: [
          { q: "What method do most modern touchscreens use?", options: ["Capacitive touch, using a tiny electric charge under the glass", "Tiny springs", "Small cameras behind the glass"], answer: 0 },
          { q: "What happens when your finger touches the glass?", options: ["It draws away a small amount of electric charge at that point", "It heats up the glass", "Nothing happens"], answer: 0 },
          { q: "Why do ordinary gloves often not work on these screens?", options: ["The glove blocks the electric connection between finger and glass", "The glove is too warm", "The screen is turned off"], answer: 0 }
        ]
      },
      {
        id: "d0920-3",
        title: "The Global Shift to Clean Energy",
        level: "★★★",
        genre: "世界情勢",
        text: "For most of the last two centuries, the world ran mainly on burning coal, oil, and gas. These fuels powered factories, cars, and homes, but they also release gases that warm the planet and dirty the air. Today, a great change is underway: countries all over the world are turning to cleaner sources of energy, above all the sun and the wind.\n\nThe reason for the shift is partly the environment, and partly money. Not long ago, energy from solar panels and wind turbines was expensive. But over the past years, the cost has fallen dramatically. In many places, building new solar or wind power is now cheaper than building anything else. Clean energy is no longer only a choice for the planet; it is often the smart economic choice too.\n\nThe change is not simple. The sun does not always shine, and the wind does not always blow, so countries need ways to store energy and to move it where it is needed. Old power systems must be rebuilt, which takes time and money.\n\nDifferent nations are moving at different speeds, and some depend heavily on older fuels. Yet the direction is increasingly clear. Each year, more of the world's electricity comes from clean sources.\n\nThis shift is one of the biggest projects in human history — a worldwide effort to power our lives without harming the planet we all share. Its success will shape the world for generations.",
        summaryJa: "過去2世紀の大半、世界は主に石炭、石油、ガスを燃やして動いてきた。これらの燃料は工場や車、家を動かしたが、地球を温める気体を放ち空気を汚しもする。今、大きな変化が進む。世界中の国が、とりわけ太陽と風という、より清潔なエネルギー源に転じている。転換の理由は一部は環境、一部はお金だ。少し前まで、太陽光パネルや風力タービンのエネルギーは高価だった。だがここ数年で費用は劇的に下がった。多くの場所で、新しい太陽光や風力を作る方が他の何を作るより安い。清潔なエネルギーはもはや地球のためだけの選択でなく、しばしば経済的にも賢い選択だ。変化は単純ではない。太陽は常に照らず風は常に吹かないので、国はエネルギーを蓄え、必要な場所へ運ぶ手段が要る。古い電力系統は作り直さねばならず、時間とお金がかかる。国ごとに進む速さは異なり、古い燃料に大きく頼る国もある。だが方向はますます明確だ。毎年、世界の電気のより多くが清潔な源から来る。この転換は人類史上最大級の事業だ——皆で分かち合う地球を害さずに暮らしを支える世界的な努力だ。その成否が世代を超えて世界を形づくる。",
        quiz: [
          { q: "What cleaner sources of energy is the world turning to?", options: ["Above all the sun and the wind", "Only more coal", "Only oil"], answer: 0 },
          { q: "Why is clean energy spreading, besides the environment?", options: ["Its cost has fallen dramatically, making it often the cheaper choice", "Because it is more expensive than ever", "Because governments force everyone"], answer: 0 },
          { q: "Why is the change not simple?", options: ["The sun and wind are not always available, so energy must be stored and moved", "Because clean energy does not work", "Because no one wants it"], answer: 0 }
        ]
      },
      {
        id: "d0920-4",
        title: "Koyo: Enjoying the Autumn Leaves",
        level: "★★☆",
        genre: "日本",
        text: "In spring, people in Japan gather to admire the pink cherry blossoms. But there is another season just as beloved: autumn, when the leaves of the mountains turn to brilliant red, orange, and gold. Enjoying this display has its own name, \"koyo,\" and it is a cherished part of the year.\n\nAs the air grows cool, families and friends travel to parks, temples, and mountains famous for their autumn colors. They walk slowly along paths beneath the glowing trees, take photographs, and simply enjoy the beauty together. The most famous of the trees is the Japanese maple, whose small, star-shaped leaves turn a deep, brilliant red.\n\nLike the cherry blossoms of spring, the autumn leaves are loved partly because they do not last. In a week or two, the leaves will fall, and the color will be gone. This shortness makes the beauty feel precious, reminding people to enjoy the moment while it lasts.\n\nKoyo is more than looking at leaves. It is a gentle reason to go outside, breathe the crisp autumn air, and spend time with the people you care about. Food, too, plays a part, as autumn brings warm dishes and seasonal treats.\n\nFrom the golden gardens of old cities to wild mountain valleys, koyo colors the whole country each autumn. It is a yearly gift of nature — bright, beautiful, and gone too soon, and loved all the more for it.",
        summaryJa: "春、日本の人々は桜の花を愛でに集まる。だが同じくらい愛される季節がもう一つある。秋、山の葉が鮮やかな赤や橙、金に変わる時だ。この光景を楽しむことには「紅葉(こうよう)」という名があり、一年の大切な一部だ。空気が涼しくなると、家族や友人は紅葉で有名な公園や寺、山へ出かける。輝く木々の下の道をゆっくり歩き、写真を撮り、ただ共に美しさを楽しむ。最も有名な木は日本のカエデ(もみじ)で、小さな星形の葉が深く鮮やかな赤に変わる。春の桜のように、秋の葉が愛されるのは一部には長続きしないからだ。一、二週間で葉は落ち、色は消える。この短さが美を貴く感じさせ、続くうちに今を楽しむよう人に思い出させる。紅葉は葉を見る以上のものだ。外に出て、澄んだ秋の空気を吸い、大切な人と過ごす優しい口実だ。食も一役買い、秋は温かい料理や旬の味覚をもたらす。古都の金色の庭から野生の山あいまで、紅葉は毎秋、国全体を彩る。自然の毎年の贈り物だ——明るく美しく、あまりに早く去り、それゆえいっそう愛される。",
        quiz: [
          { q: "What is 'koyo'?", options: ["Enjoying the autumn leaves as they turn red, orange, and gold", "A spring flower festival", "A type of food only"], answer: 0 },
          { q: "Why are the autumn leaves loved partly, like cherry blossoms?", options: ["Because they do not last, which makes the beauty feel precious", "Because they last all year", "Because they are never colorful"], answer: 0 },
          { q: "What is koyo more than just looking at leaves?", options: ["A reason to go outside and spend time with people you care about", "A way to stay indoors alone", "A kind of exam"], answer: 0 }
        ]
      },
      {
        id: "d0920-5",
        title: "Was the T. rex Warm-Blooded?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "When you imagine a dinosaur, you might picture a giant, cold-blooded reptile, like a huge lizard basking in the sun. For a long time, that is what many scientists believed too. But new discoveries are changing the picture, and one of the most surprising involves the famous Tyrannosaurus rex.\n\nAnimals today fall roughly into two groups. Cold-blooded animals, like lizards and snakes, take their body heat from their surroundings. Warm-blooded animals, like birds and mammals, make their own heat inside their bodies and keep a steady temperature. Which kind was the T. rex?\n\nTo find out, scientists studied chemical clues locked inside fossilized dinosaur teeth. The way certain chemicals are arranged can reveal the temperature at which they formed. The results were remarkable: the T. rex seems to have kept a body temperature close to that of a human being — a sign of a warm-blooded animal.\n\nThis makes sense in a wider way. Birds are the living descendants of dinosaurs, and birds are warm-blooded. A warm-blooded T. rex would have been active and powerful, not a slow, sun-dependent giant.\n\nOf course, the story is still being written. Studying creatures that died out millions of years ago is very hard, and scientists continue to debate the details.\n\nStill, the idea reminds us how much remains to be discovered about the ancient past. Even a monster from long ago can hold a warm surprise inside its bones.",
        summaryJa: "恐竜を想像するとき、日なたで体を温める巨大なトカゲのような、冷血の大きな爬虫類を思い浮かべるかもしれない。長い間、多くの科学者もそう信じていた。だが新しい発見が像を変えつつあり、最も驚くべきものの一つが有名なティラノサウルス(T.レックス)に関わる。今日の動物はおおむね二群に分かれる。トカゲやヘビのような冷血動物は体熱を周囲から取る。鳥や哺乳類のような温血動物は体内で自ら熱を作り、一定の体温を保つ。T.レックスはどちらだったか。それを知るため、科学者は化石化した恐竜の歯に閉じ込められた化学的手がかりを調べた。ある化学物質の並び方は、それが形成された温度を明らかにできる。結果は驚くべきものだった。T.レックスは人間に近い体温を保っていたらしい——温血動物の証だ。これはより広い意味でも理にかなう。鳥は恐竜の生きた子孫で、鳥は温血だ。温血のT.レックスは、遅く太陽に頼る巨人でなく、活発で力強かっただろう。もちろん物語はまだ書かれている途中だ。何百万年も前に絶滅した生き物の研究は非常に難しく、科学者は詳細を議論し続ける。それでも、古代の過去に発見すべきことがいかに多く残るかを思い出させる。大昔の怪物さえ、骨の中に温かい驚きを宿しうる。",
        quiz: [
          { q: "What is the difference between cold-blooded and warm-blooded animals?", options: ["Cold-blooded animals take heat from their surroundings; warm-blooded ones make their own", "There is no difference", "Only size differs"], answer: 0 },
          { q: "How did scientists study the T. rex's body temperature?", options: ["By studying chemical clues locked inside fossilized teeth", "By asking a living T. rex", "By measuring a lizard"], answer: 0 },
          { q: "Why does a warm-blooded T. rex make sense?", options: ["Birds are living descendants of dinosaurs, and birds are warm-blooded", "Because dinosaurs were plants", "Because it never moved"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-09-19",
    passages: [
      {
        id: "d0919-1",
        title: "Why Companies Advertise",
        level: "★★☆",
        genre: "ビジネス",
        text: "Everywhere we look, there are advertisements — on screens, on posters, on the sides of buses, and between the videos we watch. Companies spend enormous amounts of money on them. But why? What does a business really hope to gain by advertising?\n\nThe first goal is simply to be known. A wonderful product is useless if no one has heard of it. Advertising tells people, \"We exist, and here is what we offer.\" For a new company, this is often the first and most important step.\n\nThe second goal is to persuade. A good advertisement does not just share facts; it shows why a product might improve your life. It may promise comfort, fun, safety, or a feeling of belonging. Adverts often work on emotions as much as on reason.\n\nA third goal is to remind. Even famous companies keep advertising, because people forget, and rivals are always competing for attention. A familiar name, seen again and again, feels trustworthy and comes to mind first when it is time to buy.\n\nBut advertising has a responsibility. An honest advert informs and gently persuades; a dishonest one tricks people into buying things they do not need or that do not work as promised. Many countries have rules against false claims.\n\nIn the end, advertising is the conversation between a company and the world. Done well and honestly, it helps people discover things that truly make their lives a little better.",
        summaryJa: "どこを見ても広告がある。画面に、ポスターに、バスの側面に、見る動画の合間に。企業はそれに莫大なお金を使う。だがなぜか。広告で企業は本当は何を得ようとするのか。第一の目的は、ただ知られることだ。素晴らしい製品も誰も聞いたことがなければ役に立たない。広告は「私たちは存在し、これを提供します」と人に伝える。新しい企業にはしばしば最初で最も重要な一歩だ。第二の目的は説得だ。良い広告は事実を伝えるだけでなく、なぜその製品が生活を良くしうるかを示す。快適さや楽しさ、安全、帰属の感覚を約束することもある。広告は理性と同じくらい感情に働きかける。第三の目的は思い出させることだ。有名企業も広告を続ける。人は忘れ、競合は常に注意を奪い合うからだ。何度も見る親しんだ名前は信頼でき、買う時に最初に思い浮かぶ。だが広告には責任がある。正直な広告は知らせ穏やかに説得するが、不正直なものは、要らない物や約束通り働かない物を買うよう人を欺く。多くの国に虚偽表示への規則がある。広告は企業と世界の対話だ。うまく正直に行えば、人が本当に暮らしを少し良くする物を見つける助けになる。",
        quiz: [
          { q: "What is the first goal of advertising?", options: ["Simply to be known — to tell people a product exists", "To hide the product", "To lose customers"], answer: 0 },
          { q: "How does a good advertisement persuade?", options: ["By showing why a product might improve your life, often through emotion", "By sharing only boring numbers", "By insulting the customer"], answer: 0 },
          { q: "What responsibility does advertising have?", options: ["To be honest, not to trick people into buying useless things", "To always lie", "To confuse everyone"], answer: 0 }
        ]
      },
      {
        id: "d0919-2",
        title: "How the Internet Sends Your Data",
        level: "★★★",
        genre: "テクノロジー",
        text: "When you send a message or open a web page, your words and pictures travel across the world in a fraction of a second. But how does information move so quickly between computers that may be thousands of kilometers apart? The answer is a clever system built on a simple idea: break everything into small pieces.\n\nWhen you send something over the internet, it is not sent as one big block. Instead, it is chopped into many tiny parts called \"packets.\" Each packet is like a small envelope, carrying a piece of the message and the address of where it needs to go. These packets are sent out separately, and they may even travel by different routes.\n\nAlong the way, machines called routers act like traffic officers. Each router reads a packet's address and passes it toward its destination, choosing a good path from many possible ones. If one road is busy or broken, packets can go another way.\n\nWhen all the packets arrive, the receiving computer puts them back together in the right order, and the message appears whole again. All of this happens so fast that it feels instant.\n\nThis design makes the internet strong. Because there is no single path, damage in one place does not stop everything; the packets simply flow around it. From a video call to a tiny text, the same quiet trick carries our digital lives: split, send, and reassemble, millions of times a second.",
        summaryJa: "メッセージを送ったりウェブページを開いたりすると、言葉や画像が一瞬で世界を渡る。だが、何千キロも離れたコンピューター間で、情報はどうしてそんなに速く動くのか。答えは単純な考えに基づく巧みな仕組みだ。すべてを小さな断片に分けることだ。インターネットで何かを送るとき、それは一つの大きな塊としては送られない。代わりに「パケット」という多くの小さな部分に刻まれる。各パケットは小さな封筒のようで、メッセージの一片と送り先の住所を運ぶ。パケットは別々に送られ、異なる経路を通ることさえある。途中、ルーターという機械が交通整理役を務める。各ルーターはパケットの住所を読み、多くの可能な道から良い経路を選んで目的地へ渡す。ある道が混雑したり壊れたりすれば、パケットは別の道を行ける。すべてのパケットが着くと、受け取るコンピューターが正しい順に並べ直し、メッセージが再び完全に現れる。これらがあまりに速く起きるので瞬時に感じる。この設計はインターネットを強くする。単一の道がないので、一箇所の損傷が全体を止めず、パケットはただ回り込む。ビデオ通話から小さな文字まで、同じ静かな技が私たちのデジタル生活を運ぶ。分割し、送り、組み立て直す——毎秒何百万回も。",
        quiz: [
          { q: "What happens to information sent over the internet?", options: ["It is broken into small pieces called packets", "It is sent as one big block", "It is never divided"], answer: 0 },
          { q: "What do routers do?", options: ["Read each packet's address and pass it toward its destination", "Delete all packets", "Slow the internet down on purpose"], answer: 0 },
          { q: "Why does this design make the internet strong?", options: ["With no single path, damage in one place does not stop everything", "Because there is only one route", "Because packets never move"], answer: 0 }
        ]
      },
      {
        id: "d0919-3",
        title: "Protecting the World's Forests",
        level: "★★★",
        genre: "世界情勢",
        text: "Forests cover about a third of the world's land, and they do far more than provide wood and shade. They are home to a huge share of the planet's animals and plants. They clean our air, hold water in the soil, and help keep the world's climate steady. Protecting them has become one of the great tasks of our time.\n\nWhy are forests so important? As trees grow, they take in a gas that would otherwise warm the planet, and they release the oxygen we breathe. A large forest acts like a giant sponge and a giant lung at once. Millions of people also depend on forests directly for food, medicine, and their way of life.\n\nYet forests around the world are under pressure. Trees are cut down for farmland, wood, and cities, sometimes faster than they can grow back. When a forest is lost, its animals lose their homes and its stored gases are released.\n\nThe good news is that people are fighting back. Countries are protecting large areas of forest, planting millions of new trees, and finding ways to use wood without destroying whole forests. Ordinary people help too, by choosing products that do not harm forests.\n\nSaving forests is not only about trees. It is about clean air, steady weather, and the countless living things — including us — that depend on them. A healthy forest is a gift we must protect and pass on.",
        summaryJa: "森は世界の陸地の約3分の1を覆い、木材や日陰を与える以上のことをする。地球の動植物の大きな割合のすみかだ。空気を浄化し、土に水を蓄え、世界の気候を安定に保つ助けをする。森を守ることは現代の大きな務めの一つになった。なぜ森はそれほど重要か。木は育つ間、放っておけば地球を温める気体を取り込み、私たちが呼吸する酸素を放つ。大きな森は巨大なスポンジであり同時に巨大な肺のように働く。何百万もの人が食料や薬、暮らしのため森に直接頼ってもいる。だが世界の森は圧力にさらされる。木は農地や木材、都市のため、時に再生より速く切られる。森が失われると、動物はすみかを失い、蓄えた気体が放たれる。良い知らせは、人が反撃していることだ。各国は広い森林を保護し、何百万もの新しい木を植え、森全体を壊さずに木を使う方法を見つけている。普通の人も、森を害さない製品を選んで助ける。森を救うことは木だけの話ではない。清潔な空気、安定した天気、そして森に頼る無数の生き物——私たち自身を含む——の話だ。健康な森は守り受け継ぐべき贈り物だ。",
        quiz: [
          { q: "Why are forests so important, according to the passage?", options: ["They clean the air, store water, hold gases, and are home to many species", "They only provide shade", "They serve no purpose"], answer: 0 },
          { q: "What puts forests under pressure?", options: ["Trees are cut for farmland, wood, and cities, sometimes faster than they regrow", "Too much rain", "Too many new trees"], answer: 0 },
          { q: "How are people fighting back to save forests?", options: ["Protecting areas, planting trees, and using wood without destroying whole forests", "By cutting down more trees", "By ignoring the problem"], answer: 0 }
        ]
      },
      {
        id: "d0919-4",
        title: "Ikebana: The Art of Arranging Flowers",
        level: "★★☆",
        genre: "日本",
        text: "In many countries, arranging flowers means gathering a bright, full bunch and placing them in a vase. In Japan, there is a very different tradition called \"ikebana,\" which means \"giving life to flowers.\" It is a careful art in which every stem, leaf, and space is chosen with great thought.\n\nUnlike a crowded bouquet, an ikebana arrangement is often simple, using only a few flowers and branches. What matters is not just the blossoms, but the shape of the whole design — the lines of the stems, the angle of a leaf, and even the empty space around them. That empty space is not seen as missing; it is an important part of the beauty.\n\nIkebana follows ideas that go back centuries. Many arrangements suggest a balance between heaven, earth, and the person who made them. The artist tries to show the natural beauty and season of the plants, rather than forcing them into a shape.\n\nMaking ikebana is also a quiet, thoughtful activity. As the artist works slowly and carefully, the mind grows calm. Like the tea ceremony, it is as much about the peaceful state of the maker as about the finished work.\n\nToday, people around the world study ikebana. It teaches a gentle lesson: that beauty can come from simplicity, and that what we leave out can matter as much as what we include.",
        summaryJa: "多くの国で花を生けるとは、明るく豊かな束を集めて花瓶に挿すことだ。日本には「生け花」という全く違う伝統がある。花に命を与えるという意味で、あらゆる茎、葉、空間を深く考えて選ぶ丁寧な芸術だ。詰め込んだ花束と違い、生け花はしばしば簡素で、わずかな花と枝しか使わない。大切なのは花だけでなく、全体の形——茎の線、葉の角度、周りの空いた空間さえも。その空間は欠けたものと見なされず、美の重要な一部だ。生け花は何世紀もさかのぼる考えに従う。多くの作品は、天と地と作った人の間のバランスを示唆する。作り手は植物を形に押し込めるのでなく、その自然な美と季節を表そうとする。生け花を作ることは静かで思慮深い活動でもある。作り手がゆっくり丁寧に働くうちに心は穏やかになる。茶道のように、完成した作品と同じくらい作り手の平穏な状態に関わる。今、世界中の人が生け花を学ぶ。優しい教えを説く。美は簡素さから生まれ、省くものが含めるものと同じくらい大切でありうる、と。",
        quiz: [
          { q: "How is ikebana different from a typical bouquet?", options: ["It is often simple, using few flowers, and values the whole shape and empty space", "It always uses hundreds of flowers", "It uses no plants at all"], answer: 0 },
          { q: "How is the empty space in ikebana seen?", options: ["As an important part of the beauty, not as something missing", "As a mistake", "As useless"], answer: 0 },
          { q: "What gentle lesson does ikebana teach?", options: ["Beauty can come from simplicity, and what we leave out can matter too", "More is always better", "Flowers have no beauty"], answer: 0 }
        ]
      },
      {
        id: "d0919-5",
        title: "How Fireflies Make Their Light",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "On a warm summer evening, you may see tiny lights blinking softly in the dark. These are fireflies, small insects that can make their own light. For centuries, people have been enchanted by this gentle glow. But how does a living creature produce light, seemingly out of nothing?\n\nThe secret is a chemical reaction inside the firefly's body. In a special part near its tail, the insect combines certain substances with oxygen. When these mix, they release energy — not as heat, but as light. Because almost no heat is produced, scientists call it \"cold light.\" This makes it very different from a normal light bulb, which wastes most of its energy as heat.\n\nFireflies do not glow just for beauty. The blinking is a language. Each kind of firefly has its own pattern of flashes, and they use these signals mostly to find a mate in the dark. A male may flash a certain rhythm, and a female may answer, helping the two find each other across a field.\n\nScientists are fascinated by this cold light. Because it is so efficient, understanding it may help us design better, cooler lighting. The same chemicals are also used in medicine and research as a way to make certain things glow, so they can be seen and studied.\n\nSo a firefly's glow is more than magic on a summer night. It is chemistry, communication, and a quiet lesson in making light without waste.",
        summaryJa: "暖かい夏の夕べ、暗闇で小さな光が柔らかく点滅するのが見えるかもしれない。これがホタル、自ら光を作れる小さな昆虫だ。何世紀も人はこの優しい輝きに魅了されてきた。だが生き物はどうして、無から光を生むように見えるのか。秘密は体内の化学反応だ。尾の近くの特別な部分で、昆虫はある物質を酸素と結びつける。これらが混ざると、熱でなく光としてエネルギーを放つ。ほとんど熱が出ないので、科学者は「冷たい光」と呼ぶ。エネルギーの多くを熱として無駄にする普通の電球と大きく異なる。ホタルは美のためだけに光るのではない。点滅は言語だ。ホタルの種ごとに固有の光り方があり、主に暗闇で相手を見つけるためにこの信号を使う。雄がある律動で光り、雌が応え、原っぱ越しに互いを見つける助けになる。科学者はこの冷たい光に魅了されている。とても効率的なので、理解すればより良く涼しい照明の設計に役立つかもしれない。同じ化学物質は、あるものを光らせて見て研究する方法として医療や研究にも使われる。だからホタルの輝きは夏の夜の魔法以上のものだ。化学であり、意思疎通であり、無駄なく光を作る静かな教えだ。",
        quiz: [
          { q: "How does a firefly make light?", options: ["A chemical reaction inside its body combines substances with oxygen", "By reflecting the moon", "By using a tiny battery"], answer: 0 },
          { q: "Why is a firefly's light called 'cold light'?", options: ["Almost no heat is produced, unlike a normal light bulb", "Because it only glows in winter", "Because it feels icy"], answer: 0 },
          { q: "Why do fireflies blink in patterns?", options: ["The flashes are a language, used mostly to find a mate", "To scare away the sun", "For no reason at all"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-09-18",
    passages: [
      {
        id: "d0918-1",
        title: "The Rise of Tap-to-Pay",
        level: "★★☆",
        genre: "ビジネス",
        text: "Not long ago, paying for something meant handing over cash or swiping a card and signing your name. Today, in many places, you simply tap your card or phone against a small machine, and in a second the payment is done. This is called tap-to-pay, or contactless payment, and it is quickly changing how the world shops.\n\nThe idea is built on a simple, short-range wireless technology. When you hold your card or phone close to the reader, the two devices talk to each other over a distance of just a few centimeters. Your payment information is passed safely, and the sale is complete almost instantly. Because the card never leaves your hand, and no long number is typed, it is both fast and secure.\n\nFor shops, tap-to-pay means shorter lines and quicker service. For customers, it means less fumbling for coins and cards. During the recent years when people wished to touch fewer surfaces, contactless payment grew even more popular, and many have never gone back.\n\nThere are things to watch. People may spend more easily when paying feels almost invisible, so it helps to keep track of your money. And some shoppers, especially those without smartphones or bank cards, still rely on cash and must not be left behind.\n\nStill, the trend is clear. With a simple tap, buying has become faster and smoother — a small change that quietly touches millions of everyday moments.",
        summaryJa: "少し前まで、支払いは現金を渡すか、カードを通して署名することだった。今、多くの場所で、カードや電話を小さな機械に軽くかざすだけで、一瞬で支払いが済む。これをタップ決済(非接触決済)といい、世界の買い物のあり方を急速に変えている。仕組みは単純な近距離無線技術に基づく。カードや電話を読み取り機に近づけると、二つの機器がわずか数センチの距離で通信する。支払い情報が安全に渡され、売買はほぼ瞬時に完了する。カードは手を離れず、長い番号も打たないので、速く安全だ。店には行列の短縮と迅速なサービスを意味し、客には小銭やカードを探す手間の減少を意味する。人が触れる面を減らしたかった近年、非接触決済はさらに広まり、多くが元に戻っていない。注意すべき点もある。支払いがほぼ見えなく感じると使いすぎやすいので、お金の管理が役立つ。スマホや銀行カードを持たない買い物客はなお現金に頼り、取り残されてはならない。それでも流れは明確だ。一度のタップで買い物は速く滑らかになった。何百万もの日常の瞬間に静かに触れる小さな変化だ。",
        quiz: [
          { q: "What is tap-to-pay?", options: ["Paying by tapping your card or phone against a reader", "Paying only with cash", "Writing a long check"], answer: 0 },
          { q: "How does tap-to-pay work?", options: ["A short-range wireless technology lets the card and reader talk over a few centimeters", "By shouting the price", "By mailing the money"], answer: 0 },
          { q: "What should customers watch out for?", options: ["They may spend more easily when paying feels almost invisible", "That it is always slow", "That it never works"], answer: 0 }
        ]
      },
      {
        id: "d0918-2",
        title: "The Secret Life of Barcodes and QR Codes",
        level: "★★★",
        genre: "テクノロジー",
        text: "Look at almost any product you buy, and you will find a small pattern of black lines or squares printed on it. These are barcodes and QR codes, and though we barely notice them, they are one of the quiet engines of modern life.\n\nA barcode is the older design: a row of black stripes of different widths. To a machine, these stripes are a code. When a scanner shines light across them, the pattern of dark and light lines stands for a number. That number tells a shop's computer exactly which product it is, so it can find the price and count how many are left in stock. What once took a clerk minutes now takes a second.\n\nA QR code goes further. It is a square filled with small black-and-white blocks, and it can hold much more information than a simple barcode — not just a number, but a web address, a message, or a ticket. Because a phone camera can read it, QR codes now appear on posters, menus, and payment screens everywhere.\n\nBoth work on the same clever idea: turning information into a pattern that a machine can read instantly and without mistakes. The patterns even include a way to check themselves, so a slightly damaged code can still be understood.\n\nThese humble squares and stripes make shopping, shipping, and sharing faster all over the world. They are proof that a simple pattern, well designed, can carry a surprising amount of meaning.",
        summaryJa: "買うほぼどんな製品にも、黒い線や四角の小さな模様が印刷されている。これがバーコードとQRコードで、ほとんど気づかないが、現代生活の静かな原動力の一つだ。バーコードは古い方の意匠で、幅の異なる黒い縞の列だ。機械にとってこの縞は符号だ。スキャナーが光を当てると、黒と白の線の模様が数字を表す。その数字が店のコンピューターにどの製品か正確に伝え、価格を見つけ在庫数を数えられる。かつて店員に数分かかったことが今は一秒だ。QRコードはさらに進む。小さな白黒の塊で満ちた四角で、単純なバーコードよりずっと多くの情報——数字だけでなくウェブアドレスやメッセージ、チケット——を持てる。電話のカメラで読めるので、今やポスターやメニュー、決済画面などあらゆる所に現れる。どちらも同じ巧みな考えに基づく。情報を、機械が瞬時に誤りなく読める模様に変えるのだ。模様には自己確認の仕組みも含まれ、少し傷んだ符号でも理解できる。この地味な四角と縞が、世界中で買い物や輸送、共有を速くする。よく設計された単純な模様が驚くほど多くの意味を運べる証だ。",
        quiz: [
          { q: "What does a barcode's pattern of stripes stand for?", options: ["A number that tells a computer which product it is", "A drawing of the product", "The name of the shop owner"], answer: 0 },
          { q: "How is a QR code different from a barcode?", options: ["It can hold much more information, like a web address or a ticket", "It holds no information at all", "It can only be read by hand"], answer: 0 },
          { q: "What clever idea do both share?", options: ["Turning information into a pattern a machine can read instantly and correctly", "Hiding information forever", "Making shopping slower"], answer: 0 }
        ]
      },
      {
        id: "d0918-3",
        title: "Working Together in Space",
        level: "★★★",
        genre: "世界情勢",
        text: "Space is vast, cold, and dangerous, and reaching it is one of the hardest things humans have ever done. Perhaps that is why, high above our arguments on Earth, space has become a place where many nations choose to work together rather than alone.\n\nThe clearest example has been the large station that circles the Earth, where astronauts from many different countries live and work side by side. They share the same small home, run experiments together, and depend on one another for safety. Countries that disagree on many things on the ground have cooperated for years to keep this station flying.\n\nWhy cooperate in space? First, it is enormously expensive. By sharing the cost, no single nation has to pay for everything. Second, it is safer and smarter. Different countries bring different skills and ideas, and together they can do more than any one could alone. Third, the big questions of space — how the universe began, or whether life exists elsewhere — belong to all of humanity, not to one flag.\n\nCooperation is not always easy. Nations must build trust, agree on rules, and share credit fairly. As more countries and companies reach space, new agreements will be needed to keep it peaceful and open.\n\nStill, space offers a hopeful lesson. When a challenge is large enough, even rival nations can find reasons to join hands. Looking up together, we are reminded of how much we share on the small planet below.",
        summaryJa: "宇宙は広大で冷たく危険で、そこへ到達することは人類が成した最も難しいことの一つだ。だからこそ、地上の争いのはるか上で、宇宙は多くの国が単独でなく協力を選ぶ場になったのかもしれない。最も明確な例は、地球を回る大きな宇宙ステーションで、多くの異なる国の宇宙飛行士が並んで暮らし働いてきた。同じ小さな家を分け合い、共に実験を行い、安全のため互いに頼る。地上で多くのことで対立する国々が、このステーションを飛ばし続けるため何年も協力してきた。なぜ宇宙で協力するのか。第一に、非常に高価だ。費用を分ければ、一国がすべてを払わずに済む。第二に、より安全で賢い。異なる国が異なる技能と発想をもたらし、共になら一国以上のことができる。第三に、宇宙の大きな問い——宇宙はどう始まったか、他に生命はいるか——は一つの旗でなく全人類のものだ。協力は常に容易ではない。国は信頼を築き、規則に合意し、功績を公正に分け合わねばならない。より多くの国や企業が宇宙に届くにつれ、平和で開かれた宇宙を保つ新しい合意が要る。それでも宇宙は希望の教訓を与える。課題が十分に大きければ、対立する国さえ手を組む理由を見つけられる。共に見上げるとき、下の小さな惑星でいかに多くを分かち合うかを思い出す。",
        quiz: [
          { q: "What is the clearest example of cooperation in space?", options: ["A large station where astronauts from many countries live and work together", "A single country's secret base", "An empty rocket"], answer: 0 },
          { q: "Why do countries cooperate in space?", options: ["It shares the huge cost and combines different skills and ideas", "Because space is cheap", "Because only one country can reach it"], answer: 0 },
          { q: "What hopeful lesson does space offer?", options: ["When a challenge is large enough, even rival nations can join hands", "That nations can never work together", "That space is unimportant"], answer: 0 }
        ]
      },
      {
        id: "d0918-4",
        title: "Mottainai: The Spirit of No Waste",
        level: "★★☆",
        genre: "日本",
        text: "In Japan, there is a single word that a child might hear when leaving food on a plate, or an adult might say when throwing away something still useful. The word is \"mottainai.\" It expresses a feeling of regret that something valuable is being wasted, and it reflects a deep respect for the things we use.\n\nMottainai is more than \"don't waste.\" Behind it lies the idea that every object — a grain of rice, a sheet of paper, a pair of shoes — took effort, resources, and time to make. To throw such a thing away carelessly is to disrespect all the work and nature that went into it. To feel mottainai is to notice that value and treat it with care.\n\nThis idea shapes daily life in quiet ways. People may repair a torn item instead of buying a new one, use both sides of a piece of paper, or finish every bit of a meal. Old clothes may be turned into cleaning rags; leftover food may become tomorrow's lunch.\n\nIn today's world, full of cheap goods and mountains of rubbish, the spirit of mottainai feels more important than ever. It is a gentle, personal form of caring for the planet, one small choice at a time.\n\nMottainai teaches a simple truth: the things around us are gifts of effort and nature. When we use them fully and waste less, we show respect — for the world, and for one another.",
        summaryJa: "日本には、子どもが皿に食べ物を残すとき、あるいは大人がまだ使える物を捨てるときに聞くかもしれない一つの言葉がある。「もったいない」だ。価値ある物が無駄にされていることへの惜しむ気持ちを表し、使う物への深い敬意を映す。もったいないは「無駄にするな」以上のものだ。その背後には、あらゆる物——一粒の米、一枚の紙、一足の靴——が、作るのに労力や資源、時間を要したという考えがある。そうした物を軽々しく捨てるのは、そこに注がれたすべての労働と自然への無礼だ。もったいないと感じることは、その価値に気づき、丁寧に扱うことだ。この考えは静かに日常を形づくる。新品を買う代わりに破れた物を直し、紙の両面を使い、食事を一片残さず食べる。古い服は掃除の雑巾になり、残り物は明日の弁当になる。安い物とごみの山にあふれた今日の世界で、もったいないの精神はかつてなく大切に感じられる。一度に一つの小さな選択で地球を大切にする、優しく個人的な形だ。もったいないは単純な真実を教える。周りの物は労力と自然の贈り物だ。十分に使い無駄を減らすとき、私たちは世界と互いへの敬意を示す。",
        quiz: [
          { q: "What does 'mottainai' express?", options: ["Regret that something valuable is being wasted", "Joy at throwing things away", "A wish for more waste"], answer: 0 },
          { q: "What idea lies behind mottainai?", options: ["Every object took effort, resources, and time to make, and deserves respect", "Objects appear from nothing", "Only new things have value"], answer: 0 },
          { q: "How does mottainai shape daily life?", options: ["People repair items, use both sides of paper, and finish their meals", "People buy new things constantly", "People waste as much as possible"], answer: 0 }
        ]
      },
      {
        id: "d0918-5",
        title: "Why Is the Ocean Salty?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "Anyone who has swum in the sea knows that its water tastes salty, quite unlike the fresh water of a river or lake. But have you ever wondered where all that salt comes from, and why the ocean is salty while rivers are not?\n\nThe surprising answer is that much of the ocean's salt comes from the land. When rain falls on rocks and soil, it slowly dissolves tiny amounts of minerals, including salt. Rivers carry this water, with its dissolved minerals, down to the sea. The amount in any single river is far too small to taste. But rivers have been flowing into the oceans for billions of years, carrying salt the whole time.\n\nHere is the key: when seawater evaporates into the sky to form clouds and rain, the salt is left behind. The water leaves, but the salt stays in the ocean. Over an immense span of time, this salt has built up, making the sea as salty as it is today.\n\nSome salt also comes from underwater volcanoes and vents on the ocean floor, adding minerals directly to the water.\n\nSo the saltiness of the sea is really a record of time itself — billions of years of rivers, rain, and rock, all captured in a single mouthful of seawater. The next time you taste the ocean, remember: you are tasting the slow, patient work of our whole planet.",
        summaryJa: "海で泳いだことがある人なら、その水が塩辛く、川や湖の真水とはかなり違うことを知っている。だが、その塩がどこから来るのか、なぜ海は塩辛く川はそうでないのか、考えたことはあるだろうか。意外な答えは、海の塩の多くが陸から来るということだ。雨が岩や土に降ると、塩を含むごく少量の鉱物をゆっくり溶かす。川はこの水を、溶けた鉱物とともに海へ運ぶ。一つの川の量は味わうにはあまりに少ない。だが川は何十億年も海に流れ込み、その間ずっと塩を運んできた。鍵はここだ。海水が空へ蒸発して雲や雨になるとき、塩は残される。水は去るが塩は海に留まる。途方もない時間をかけ、この塩が積み重なり、海を今日ほど塩辛くした。海底の火山や噴出口から直接水に鉱物を加える塩もある。だから海の塩辛さは時間そのものの記録だ。何十億年もの川、雨、岩が、一口の海水に捉えられている。次に海の味を感じるとき、思い出してほしい。あなたは惑星全体のゆっくりとした忍耐強い営みを味わっているのだ。",
        quiz: [
          { q: "Where does much of the ocean's salt come from?", options: ["From the land — rain dissolves minerals from rock and rivers carry them to the sea", "From the sky only", "From fish"], answer: 0 },
          { q: "Why does salt stay in the ocean?", options: ["When seawater evaporates, the water leaves but the salt is left behind", "Because salt floats up into clouds", "Because rivers remove it"], answer: 0 },
          { q: "What else adds salt to the sea?", options: ["Underwater volcanoes and vents on the ocean floor", "Boats sailing by", "Birds flying overhead"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-09-17",
    passages: [
      {
        id: "d0917-1",
        title: "The Gig Economy",
        level: "★★★",
        genre: "ビジネス",
        text: "Not long ago, most people worked one steady job for a single employer, often for many years. Today, a growing number of people work in a different way. They pick up short tasks, or \"gigs,\" one at a time — driving a passenger across town, delivering a meal, or designing a logo for a client far away. This new way of working is called the gig economy.\n\nMuch of it is powered by smartphone apps that connect workers with people who need a service, right now. A person can open an app, accept a job, complete it, and get paid, then move on to the next one. For many, this offers real freedom: they choose when to work and how much.\n\nBut the gig economy has two sides. The freedom is genuine, and it can be a lifeline for those who need flexible hours, such as students or parents. Yet gig workers often lack the safety of a regular job. They may have no paid holidays, no sick pay, and uncertain income from week to week.\n\nThis has sparked an important debate. Should gig workers be treated more like regular employees, with more protection? Or would that remove the flexibility that makes gig work attractive? Different countries are answering in different ways.\n\nThe gig economy is likely here to stay. The challenge for society is to keep its flexibility while making sure the people behind each gig are treated fairly.",
        summaryJa: "少し前まで、多くの人は一つの雇い主のもとで一つの安定した仕事を、しばしば何年も続けた。今、違う働き方をする人が増えている。短い仕事、「ギグ」を一つずつ引き受けるのだ——客を街の向こうへ運ぶ、食事を届ける、遠くの依頼主のロゴを作る、など。この新しい働き方をギグエコノミーという。その多くは、サービスを今すぐ必要とする人と働き手を結ぶスマホアプリで動く。アプリを開き、仕事を受け、こなして支払いを受け、次へ移る。多くの人にはこれが本当の自由を与える。いつ、どれだけ働くかを選べる。だがギグエコノミーには二つの面がある。自由は本物で、学生や親など柔軟な時間が要る人には命綱になりうる。だがギグワーカーはしばしば正規の仕事の安全を欠く。有給休暇も病気手当もなく、収入が週ごとに不安定なこともある。これは重要な議論を生んだ。ギグワーカーはもっと正社員のように保護されるべきか。それとも魅力である柔軟性を奪うことになるか。各国は異なる答えを出している。ギグエコノミーはおそらく定着する。社会の課題は、柔軟性を保ちつつ、各ギグの背後の人が公正に扱われるようにすることだ。",
        quiz: [
          { q: "What is the 'gig economy'?", options: ["Working by picking up short tasks one at a time, often via apps", "Working one steady job for life", "Not working at all"], answer: 0 },
          { q: "What is one benefit of gig work?", options: ["Freedom to choose when to work and how much", "Guaranteed paid holidays for all", "A fixed salary every month"], answer: 0 },
          { q: "What debate has the gig economy sparked?", options: ["Whether gig workers should get more protection, like regular employees", "Whether apps should be banned", "Whether people should work at all"], answer: 0 }
        ]
      },
      {
        id: "d0917-2",
        title: "How Lasers Help Machines See",
        level: "★★★",
        genre: "テクノロジー",
        text: "How does a self-driving car know exactly where the road, the curb, and a walking person are? One important answer is a technology called LiDAR. The name comes from combining \"light\" and \"radar,\" and it lets a machine build a detailed, three-dimensional map of the world around it, using laser light.\n\nThe idea is simple but powerful. A LiDAR device sends out many tiny, harmless pulses of laser light, thousands or millions of times each second. When a pulse hits an object, it bounces back. By measuring exactly how long the light took to return, the device can calculate the distance to that point with great precision.\n\nDo this for millions of points, and you get a \"point cloud\" — a cloud of dots that together form a sharp 3D picture of everything nearby: cars, trees, walls, and people. Unlike a normal camera, LiDAR works well in the dark and gives exact distances, not just a flat image.\n\nLiDAR is used in many places today. It helps self-driving cars and robots move safely, guides drones, and even sits inside some phones to improve photos and games. Scientists also use it from aircraft to map forests, cities, and ancient ruins hidden under trees.\n\nBy turning pulses of light into precise measurements, LiDAR gives machines a kind of sight. It is a quiet example of how a clever use of physics can help our tools understand the shape of the world.",
        summaryJa: "自動運転車は、道路や縁石、歩く人の位置をどう正確に知るのか。重要な答えの一つが「ライダー(LiDAR)」という技術だ。名前は「光(light)」と「レーダー(radar)」を合わせたもので、レーザー光を使い、周囲の世界の詳細な立体地図を機械に作らせる。考えは単純だが強力だ。ライダー装置は無害な小さなレーザー光のパルスを、毎秒何千、何百万回も放つ。パルスが物に当たると跳ね返る。光が戻るのにかかった時間を正確に測ることで、その点までの距離を高い精度で計算できる。これを何百万もの点で行うと「点群」——近くのすべて、車や木、壁、人を鮮明な3Dで形づくる点の雲——が得られる。普通のカメラと違い、ライダーは暗闇でもよく働き、平らな画像でなく正確な距離を与える。ライダーは今、多くの場所で使われる。自動運転車やロボットの安全な移動を助け、ドローンを導き、写真やゲームを良くするため一部の電話にも入っている。科学者は航空機から森や都市、木の下に隠れた古代遺跡の地図作りにも使う。光のパルスを正確な測定に変え、ライダーは機械に一種の視覚を与える。物理の巧みな利用が道具に世界の形を理解させる静かな一例だ。",
        quiz: [
          { q: "What does LiDAR use to map the world?", options: ["Pulses of laser light that bounce off objects", "Loud sounds only", "Paint and brushes"], answer: 0 },
          { q: "How does LiDAR measure distance?", options: ["By measuring how long the light takes to return", "By guessing", "By weighing the object"], answer: 0 },
          { q: "What is one advantage of LiDAR over a normal camera?", options: ["It works well in the dark and gives exact distances", "It only works in bright light", "It cannot measure anything"], answer: 0 }
        ]
      },
      {
        id: "d0917-3",
        title: "Why Countries Trade",
        level: "★★☆",
        genre: "世界情勢",
        text: "Look around your home, and you will find things from all over the world: a phone designed in one country and built in another, coffee grown far away, clothes sewn on a different continent. This is possible because countries trade with one another, buying and selling goods across borders. But why do nations trade at all?\n\nThe main reason is that no country has everything, or does everything best. Some lands are rich in oil, others in good farmland, and others in skilled workers or advanced factories. By selling what they make well and buying what others make well, countries can all end up with more than if each tried to make everything alone.\n\nTrade also lowers prices and widens choice. Because factories can sell to the whole world, they can make goods in large numbers, which brings costs down. Shoppers enjoy fruits out of season, and technology from distant places.\n\nBut trade is not always simple. When cheap goods arrive from abroad, local businesses may struggle, and some workers can lose their jobs. Governments must think about how to help those affected. There are also arguments about fairness and about depending too much on other countries.\n\nDespite these challenges, trade has helped lift billions of people out of poverty and connected the world as never before. When it is fair and well managed, trade allows different nations to share their strengths — and everyone can benefit.",
        summaryJa: "家を見回すと、世界中の物が見つかる。ある国で設計され別の国で作られた電話、遠くで育ったコーヒー、別の大陸で縫われた服。これは国同士が貿易し、国境を越えて物を売り買いするから可能だ。だがなぜ国は貿易するのか。主な理由は、すべてを持つ国も、すべてを最もうまくやる国もないからだ。石油に富む土地、良い農地に富む土地、熟練工や先進的な工場に富む土地がある。うまく作れる物を売り、他がうまく作る物を買うことで、各国が単独ですべてを作ろうとするより多くを得られる。貿易は価格も下げ選択も広げる。工場は世界中に売れるので大量に作れ、費用が下がる。買い物客は季節外れの果物や遠い土地の技術を楽しめる。だが貿易は常に単純ではない。安い物が海外から届くと地元企業が苦しみ、職を失う労働者も出うる。政府は影響を受けた人をどう助けるか考えねばならない。公正さや、他国に頼りすぎることへの議論もある。こうした課題はあれ、貿易は何十億もの人を貧困から救い、かつてなく世界をつないできた。公正でよく管理されれば、貿易は各国の強みを分かち合わせ、皆が恩恵を得られる。",
        quiz: [
          { q: "What is the main reason countries trade?", options: ["No country has everything or does everything best", "Because every country makes the same things", "Because trade is required by nature"], answer: 0 },
          { q: "How does trade lower prices?", options: ["Factories can sell to the whole world and make goods in large numbers", "By making fewer goods", "By closing all factories"], answer: 0 },
          { q: "What is one challenge of trade?", options: ["Cheap goods from abroad can make local businesses struggle", "It always helps everyone equally", "It has no downsides at all"], answer: 0 }
        ]
      },
      {
        id: "d0917-4",
        title: "Shodo: The Art of Japanese Calligraphy",
        level: "★★☆",
        genre: "日本",
        text: "In Japan, writing can be a form of art. This art is called \"shodo,\" which means \"the way of writing.\" Using a brush, black ink, and a sheet of white paper, a person paints beautiful characters, turning simple words into something to admire on a wall.\n\nShodo may look effortless, but it takes great skill and years of practice. The artist must hold the brush just so, control the flow of ink, and move with a steady, confident hand. A single character is often written in one smooth motion, and it cannot be fixed afterward. If the hand shakes or hesitates, it shows. In this way, the finished work captures the artist's state of mind at that very moment.\n\nBecause of this, shodo is about far more than neat handwriting. It teaches focus, patience, and calm. Many people practice it not to become famous artists, but to quiet their minds and enjoy the simple beauty of the brush on paper.\n\nChildren in Japan learn the basics of calligraphy at school, and many keep it as a lifelong hobby. At New Year, people often write hopeful words for the year ahead, a cherished tradition.\n\nShodo shows a beautiful idea: that even something as everyday as writing can become a path to art, discipline, and peace of mind. In each brushstroke lies not only a word, but a small piece of the person who made it.",
        summaryJa: "日本では、書くことが芸術になりうる。この芸術を「書道」——書くことの道——という。筆と墨、白い紙を使い、美しい文字を描き、単純な言葉を壁で愛でるものに変える。書道は楽々に見えるかもしれないが、大きな技と長年の練習を要する。書き手は筆をちょうどよく持ち、墨の流れを操り、安定した自信ある手で動かねばならない。一つの文字はしばしば一続きの動きで書かれ、後から直せない。手が震えたりためらったりすれば表れる。こうして完成した作品は、まさにその瞬間の書き手の心の状態を捉える。だから書道はきれいな手書き以上のものだ。集中、忍耐、平静を教える。多くの人は有名な芸術家になるためでなく、心を静め、紙の上の筆の素朴な美を楽しむために書く。日本の子どもは学校で書道の基礎を学び、多くが生涯の趣味として続ける。正月には、来る年への希望の言葉を書くことが多く、大切にされる伝統だ。書道は美しい考えを示す。書くという日常のことさえ、芸術と鍛錬と心の平安への道になりうる。一筆一筆に、言葉だけでなく、それを作った人の小さな一片が宿る。",
        quiz: [
          { q: "What is 'shodo'?", options: ["The Japanese art of calligraphy, painting characters with a brush and ink", "A type of dance", "A kind of food"], answer: 0 },
          { q: "Why can a shodo character not be fixed afterward?", options: ["It is written in one smooth motion, showing the artist's state of mind", "Because the ink is invisible", "Because it is typed by a machine"], answer: 0 },
          { q: "What does practicing shodo teach, beyond neat writing?", options: ["Focus, patience, and calm", "How to write faster only", "Nothing useful"], answer: 0 }
        ]
      },
      {
        id: "d0917-5",
        title: "A Surprise on Distant Pluto",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "Far out at the edge of our solar system lies Pluto, a small, cold world so distant that from its surface the sun would look like just a bright star. For a long time, we knew almost nothing about it. But as spacecraft and telescopes have studied Pluto, they keep finding surprises. One recent discovery is especially strange: signs that a liquid may have flowed across its frozen surface.\n\nOn Earth, of course, it is water that flows in rivers and lakes. But Pluto is far too cold for liquid water; there, water is frozen as hard as rock. Instead, scientists think the flowing liquid may have been something else entirely: liquid nitrogen, a gas on Earth that becomes a liquid only in extreme cold.\n\nResearchers noticed dark features on a vast, icy plain on Pluto. These marks look as if liquid nitrogen rose up through cracks from deep below the surface and spread out, before freezing again. If this is correct, it means Pluto is not a dead, unchanging ball of ice, but a world where things still slowly move and change.\n\nThis matters because it teaches us how varied and active worlds can be, even far from the sun's warmth. Every discovery like this widens our sense of what is possible in the universe.\n\nPluto reminds us that even the coldest, most distant places can hold secrets, waiting quietly for curious minds to find them.",
        summaryJa: "太陽系の端の遠くに冥王星がある。小さく冷たい世界で、あまりに遠いため、その表面から太陽は明るい星の一つのように見えるだろう。長い間、私たちはほとんど何も知らなかった。だが探査機や望遠鏡が冥王星を調べるにつれ、次々と驚きが見つかる。最近の発見の一つは特に奇妙だ。凍った表面を液体が流れたかもしれない痕跡だ。もちろん地球では、川や湖を流れるのは水だ。だが冥王星は液体の水には冷たすぎ、そこでは水は岩のように固く凍る。代わりに科学者は、流れた液体は全く別のもの——地球では気体だが極寒でのみ液体になる液体窒素——かもしれないと考える。研究者は冥王星の広大な氷の平原の暗い特徴に気づいた。この跡は、液体窒素が表面深くの割れ目から上がって広がり、再び凍ったかのように見える。もし正しければ、冥王星は死んで変わらない氷の球でなく、今も物事がゆっくり動き変わる世界だということだ。これは、太陽の温もりから遠くても、世界がいかに多様で活発でありうるかを教える点で重要だ。こうした発見は、宇宙で何が可能かの感覚を広げる。冥王星は、最も冷たく遠い場所さえ秘密を宿し、好奇心ある心の発見を静かに待っていると思い出させる。",
        quiz: [
          { q: "What surprising sign did scientists find on Pluto?", options: ["Signs that a liquid may have flowed across its frozen surface", "A large city", "Green forests"], answer: 0 },
          { q: "Why couldn't the flowing liquid be water?", options: ["Pluto is far too cold, so water is frozen as hard as rock", "Because there is no water in space", "Because water flows only uphill"], answer: 0 },
          { q: "What does this discovery suggest about Pluto?", options: ["It is not a dead ball of ice, but a world that still slowly changes", "It is exactly like Earth", "It is made of metal"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-09-16",
    passages: [
      {
        id: "d0916-1",
        title: "How Companies Set Their Prices",
        level: "★★★",
        genre: "ビジネス",
        text: "Have you ever wondered how a shop decides that a coffee costs three dollars, not two or five? Setting a price may look simple, but it is one of the most important and difficult decisions a business makes. Price too high, and customers walk away. Price too low, and the company loses money. Getting it right is a real skill.\n\nCompanies usually think about three main things. The first is cost. A business must charge more than it spends to make and sell a product, or it cannot survive. The second is the customer. How much are people willing to pay? A price must feel fair for the value they receive. The third is competition. If a rival sells something similar for less, a high price may be hard to defend.\n\nPrices are also full of psychology. A price of $9.99 feels much smaller than $10, even though the difference is tiny. A very cheap product may make people wonder if the quality is poor, while a higher price can suggest luxury.\n\nSometimes companies change prices to match demand. A plane ticket may cost more during a holiday, and a coat may be cheaper at the end of winter. This is called adjusting to what people want and when.\n\nIn the end, a good price is a careful balance. It must cover costs, respect the customer, beat no one unfairly, and still leave the company healthy enough to keep serving people tomorrow.",
        summaryJa: "店がコーヒーを2ドルでも5ドルでもなく3ドルとどう決めるか、考えたことはあるだろうか。値付けは単純に見えて、企業が下す最も重要で難しい決断の一つだ。高すぎれば客は去り、低すぎれば損をする。正しく決めるのは本物の技能だ。企業はふつう三つを考える。第一はコスト。作って売る費用より高く売らねば存続できない。第二は客。人はいくら払う気があるか。受け取る価値に見合い公正だと感じられねばならない。第三は競争。競合が似た物を安く売れば、高値は守りにくい。値段には心理も詰まっている。9.99ドルは差はわずかでも10ドルよりずっと安く感じる。極端に安いと品質を疑われ、高いと高級さを示しうる。需要に合わせ値を変えることもある。飛行機の切符は休暇中に高く、コートは冬の終わりに安い。人が何をいつ望むかへの調整だ。良い値段は慎重なバランスだ。費用を賄い、客を尊重し、不当に誰かをたたかず、明日も人に仕える健全さを企業に残す。",
        quiz: [
          { q: "What are the three main things companies think about when setting a price?", options: ["Cost, the customer, and competition", "Color, size, and weight", "The weather, the day, and the season"], answer: 0 },
          { q: "How does psychology affect prices?", options: ["A price of $9.99 feels much smaller than $10, though the difference is tiny", "Prices have no effect on feelings", "People always ignore the price"], answer: 0 },
          { q: "Why might a plane ticket cost more during a holiday?", options: ["Companies adjust prices to match demand", "Because planes fly slower then", "Because tickets are free otherwise"], answer: 0 }
        ]
      },
      {
        id: "d0916-2",
        title: "How Weather Forecasts Are Made",
        level: "★★★",
        genre: "テクノロジー",
        text: "Each morning, millions of people check the weather before deciding what to wear or whether to carry an umbrella. We trust these forecasts, yet few of us stop to ask how anyone can predict tomorrow's sky. The answer is a remarkable mix of measurement, mathematics, and powerful computers.\n\nIt begins with data. All over the world, thousands of stations, balloons, ships, and satellites constantly measure the temperature, wind, pressure, and moisture of the air. This ocean of information gives scientists a picture of the atmosphere right now.\n\nNext comes the science. The air follows the laws of physics, so scientists write these laws as equations. Using them, a computer can calculate how the current weather is likely to change over the coming hours and days. Because the atmosphere is huge and complex, this requires some of the most powerful computers on Earth, running trillions of calculations.\n\nEven so, forecasts are not perfect. The atmosphere is so sensitive that a tiny change can grow into a big difference days later. This is why a forecast for tomorrow is usually reliable, but one for next week is only a good guess.\n\nTo handle this, forecasters often run their models many times with slightly different starting points, then see how the results agree. When they mostly agree, confidence is high.\n\nSo a weather forecast is not magic. It is science, data, and computing power, working together to give us a helpful glimpse of the future.",
        summaryJa: "毎朝、何百万もの人が服装や傘を決める前に天気を確認する。私たちは予報を信頼するが、なぜ明日の空を予測できるのか問う人は少ない。答えは、観測と数学と強力なコンピューターの見事な組み合わせだ。まずデータから始まる。世界中で何千もの観測所や気球、船、衛星が絶えず空気の気温、風、気圧、湿度を測る。この情報の海が、今この瞬間の大気の姿を科学者に与える。次に科学だ。空気は物理法則に従うので、科学者はこれを方程式で書く。それを使い、コンピューターは今の天気がこれからの数時間・数日でどう変わりそうかを計算する。大気は巨大で複雑なため、地球有数の強力なコンピューターが何兆もの計算を行う必要がある。それでも予報は完璧ではない。大気は非常に敏感で、わずかな変化が数日後に大きな差になる。だから明日の予報はふつう信頼できても、来週のは良い推測にすぎない。これに対処するため、予報士は開始条件を少し変えて模型を何度も走らせ、結果の一致を見る。ほぼ一致すれば確信は高い。天気予報は魔法ではない。科学とデータと計算力が協力し、未来の有用な一片を見せてくれる。",
        quiz: [
          { q: "How does making a forecast begin?", options: ["With data measured by stations, balloons, ships, and satellites", "With a lucky guess", "By asking people how they feel"], answer: 0 },
          { q: "Why does forecasting need very powerful computers?", options: ["The atmosphere is huge and complex, needing trillions of calculations", "Because computers are cheap", "Because no math is involved"], answer: 0 },
          { q: "Why is a forecast for next week only a good guess?", options: ["The atmosphere is so sensitive that tiny changes grow into big differences", "Because scientists do not care about next week", "Because the future never changes"], answer: 0 }
        ]
      },
      {
        id: "d0916-3",
        title: "Keeping Children Safe Online",
        level: "★★☆",
        genre: "世界情勢",
        text: "Children today grow up with the internet. They watch videos, play games, chat with friends, and increasingly talk to smart programs. The online world offers wonderful chances to learn and connect. But it also brings dangers, and around the world, governments and parents are asking how to keep young people safe.\n\nThe worries are serious. Some apps are designed to keep users watching for hours, which can harm sleep and study. Children may see content that is not right for their age, or meet strangers who wish them harm. There are also concerns about how much personal data companies collect from young users.\n\nIn response, some governments are taking action. A number are considering age limits for social apps, or rules that force companies to make their services safer for children by default. Others focus on teaching digital skills, so that young people learn to think carefully about what they see and share.\n\nBut the questions are hard. Rules that are too strict may cut children off from useful tools and friendships. Rules that are too weak may fail to protect them. And children are often clever at finding ways around limits.\n\nMost experts agree that no single answer is enough. Safe technology, wise laws, good teaching, and caring adults must all work together. The goal is not to shut children out of the digital world, but to help them explore it safely, and grow into thoughtful, confident users.",
        summaryJa: "今日の子どもはインターネットとともに育つ。動画を見て、ゲームをし、友人と話し、ますます賢いプログラムとも話す。オンラインの世界は学びとつながりの素晴らしい機会を与える。だが危険も伴い、世界中で政府や親が、若者をどう守るか問うている。懸念は深刻だ。何時間も見続けさせるよう作られたアプリは睡眠や勉強を害しうる。子どもは年齢に不適切な内容を見たり、害をなそうとする見知らぬ人に出会ったりしうる。企業が若い利用者からどれだけ個人データを集めるかへの懸念もある。これに応え、行動する政府もある。SNSの年齢制限や、既定で子どもに安全にするよう企業に義務づける規則を検討する国もある。デジタル技能の教育に力を入れ、見るもの共有するものを慎重に考えられるようにする国もある。だが難問だ。厳しすぎる規則は有用な道具や友情から子どもを切り離しかねず、緩すぎれば守れない。子どもは制限の回避に長けていることも多い。多くの専門家は、唯一の答えでは足りないと認める。安全な技術、賢い法、良い教育、心ある大人がすべて協力せねばならない。目標は子どもを締め出すことでなく、安全に探求し、思慮深く自信ある利用者に育つのを助けることだ。",
        quiz: [
          { q: "What is one worry about children online?", options: ["Some apps keep users watching for hours, harming sleep and study", "The internet is always completely safe", "Children learn nothing online"], answer: 0 },
          { q: "What action are some governments considering?", options: ["Age limits for social apps and rules to make services safer by default", "Banning all schools", "Giving children no help at all"], answer: 0 },
          { q: "What do most experts agree on?", options: ["No single answer is enough; technology, laws, teaching, and adults must work together", "Only strict rules matter", "Nothing can be done"], answer: 0 }
        ]
      },
      {
        id: "d0916-4",
        title: "Japan's Manga and Anime",
        level: "★★☆",
        genre: "日本",
        text: "Around the world, millions of people read Japanese comics, called \"manga,\" and watch Japanese animation, called \"anime.\" What began as entertainment in Japan has grown into a cultural force loved on every continent. These colorful stories are now one of the ways the world comes to know Japan.\n\nManga are printed comics, often in black and white, telling stories of every kind. There are manga about sports, cooking, history, science, adventure, and quiet daily life. Because there is a manga for almost every interest and age, reading them is a normal part of life for many people in Japan, young and old.\n\nAnime brings these and other stories to life on screen, with movement, color, music, and voice. Some anime are made for children, but many explore deep and serious themes, from friendship and loss to courage and dreams. The best are treated as true works of art.\n\nPart of the appeal is the storytelling. Japanese manga and anime often take their time, letting characters grow and feelings deepen. Readers and viewers around the world say they feel a strong connection to these characters.\n\nThe success of manga and anime has become big business, and it draws many fans to visit Japan, learn Japanese, and explore its culture. From a simple drawing on a page, a whole world has opened — proof that a good story, well told, can travel anywhere.",
        summaryJa: "世界中で、何百万もの人が日本の漫画「マンガ」を読み、日本のアニメーション「アニメ」を見る。日本の娯楽として始まったものが、あらゆる大陸で愛される文化の力に育った。この色鮮やかな物語は、今や世界が日本を知る道の一つだ。マンガは印刷された漫画で、しばしば白黒で、あらゆる種類の物語を語る。スポーツ、料理、歴史、科学、冒険、静かな日常のマンガがある。ほぼどんな興味や年齢にもマンガがあるので、読むことは日本の老若の多くにとって暮らしの当たり前の一部だ。アニメはこれらや他の物語を、動きと色、音楽、声で画面に生き生きと描く。子ども向けもあるが、友情や喪失、勇気、夢など深く真剣な主題を探るものも多い。最良のものは真の芸術作品として扱われる。魅力の一部は物語り方だ。日本のマンガやアニメはしばしば時間をかけ、登場人物を育て感情を深める。世界中の読者や視聴者は、これらの人物に強いつながりを感じるという。マンガとアニメの成功は大きな事業になり、多くのファンを日本訪問や日本語学習、文化探求へ引き寄せる。一枚の絵から世界が開いた。よく語られた良い物語はどこへでも旅できる証だ。",
        quiz: [
          { q: "What are 'manga' and 'anime'?", options: ["Japanese comics and Japanese animation", "Types of Japanese food", "Kinds of cars"], answer: 0 },
          { q: "What is said about the themes of anime?", options: ["Many explore deep and serious themes, and the best are treated as art", "They are always only for small children", "They never tell any story"], answer: 0 },
          { q: "What effect has their success had?", options: ["It draws many fans to visit Japan, learn Japanese, and explore its culture", "It made people dislike Japan", "It stopped people from reading"], answer: 0 }
        ]
      },
      {
        id: "d0916-5",
        title: "The Mystery of Fingerprints",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "Look closely at the tips of your fingers, and you will see tiny lines forming loops, arches, and swirls. These are your fingerprints. One of the most fascinating facts about them is that no two people have exactly the same pattern — not even identical twins. Your fingerprints are truly your own.\n\nFingerprints form before birth, while a baby is still growing. The pattern depends partly on genes and partly on tiny, random events in the womb. Because these small events are never quite the same, every finger ends up with a unique design. Once formed, the pattern stays the same for your whole life.\n\nBut why do we have them at all? Scientists are not completely sure, but there are good ideas. The ridges may help our fingers grip objects, much like the tread on a tire. They may also make our sense of touch more sensitive, helping us feel fine textures.\n\nBecause each fingerprint is unique and unchanging, it has become a powerful way to tell people apart. For over a hundred years, fingerprints have helped identify people, and today many phones unlock with a simple touch of a finger.\n\nSo a fingerprint is more than a mark you leave on a glass. It is a tiny, personal signature, formed before you were born, carried on your hand for life — a small, quiet reminder that every single person is one of a kind.",
        summaryJa: "指先をよく見ると、輪や弓、渦を描く小さな線が見える。これが指紋だ。最も魅力的な事実の一つは、同じ模様を持つ人は二人といないことだ——一卵性の双子でさえも。指紋は本当にあなただけのものだ。指紋は生まれる前、赤ちゃんが育つ間に形づくられる。模様は一部は遺伝子に、一部は子宮内の小さく無作為な出来事による。これらの小さな出来事は決して同じでないので、どの指も独自の意匠になる。一度できると模様は一生同じままだ。だがなぜ指紋があるのか。科学者は完全には確かでないが、良い説がある。この隆起はタイヤの溝のように物を握るのを助けるかもしれない。触覚をより敏感にし、細かな手触りを感じる助けにもなりうる。指紋は独自で変わらないため、人を見分ける強力な方法になった。100年以上、指紋は人の識別を助け、今では多くの電話が指の一触れで解錠する。だから指紋はグラスに残す跡以上のものだ。生まれる前に形づくられ、生涯手に携える小さな個人の署名であり、一人一人が唯一無二だという静かな小さな証だ。",
        quiz: [
          { q: "What is remarkable about fingerprints?", options: ["No two people have exactly the same pattern, not even identical twins", "Everyone has the same fingerprint", "They change every year"], answer: 0 },
          { q: "Why might we have fingerprint ridges?", options: ["They may help grip objects and make touch more sensitive", "They make hands heavier", "They have no possible use"], answer: 0 },
          { q: "Why have fingerprints become a way to tell people apart?", options: ["Each one is unique and stays the same for life", "Because they all look alike", "Because they disappear quickly"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-09-15",
    passages: [
      {
        id: "d0915-1",
        title: "Why Companies Study Their Competitors",
        level: "★★☆",
        genre: "ビジネス",
        text: "No business exists alone. For almost every product or service, there are rival companies trying to win the same customers. Because of this, smart companies spend real time and effort studying their competitors. This practice can be one of the most useful habits in business.\n\nWhy look at your rivals so closely? First, to learn. A competitor may have found a clever way to lower costs, please customers, or reach new markets. By watching carefully, a company can learn from others' successes without paying the price of every mistake itself.\n\nStudying rivals also helps a company understand its own strengths and weaknesses. When you compare your product to another, you see clearly where you are ahead and where you are falling behind. This honest view is hard to get by looking only at yourself.\n\nThere is a warning, however. Watching competitors too closely can become a trap. A company that only copies others will always be one step behind, and may forget what makes it special. The best companies learn from rivals but still follow their own vision.\n\nGood competitor study is fair and honest. It means reading public information, trying products openly, and listening to customers — not stealing secrets. In the end, competitors are not only a threat. They are also teachers, pushing every company to keep improving, which in the end is good for customers too.",
        summaryJa: "一つで存在する事業はない。ほぼすべての製品やサービスに、同じ客を得ようとする競合企業がいる。だから賢い企業は競合を研究するのに実際の時間と労力を費やす。これはビジネスで最も有用な習慣の一つになりうる。なぜ競合をそれほど注意深く見るのか。第一に学ぶためだ。競合はコスト削減や顧客満足、新市場開拓の巧みな方法を見つけたかもしれない。注意深く見れば、あらゆる失敗の代償を自ら払わずに他者の成功から学べる。競合研究は自社の強みと弱みの理解も助ける。自社製品を他と比べると、どこで先行しどこで遅れているかが明確に見える。この正直な視点は自分だけを見ていては得にくい。ただし警告もある。競合を見すぎると罠になりうる。他者を真似るだけの企業は常に一歩遅れ、自社の特別さを忘れかねない。最良の企業は競合から学びつつ自らの理念に従う。良い競合研究は公正で正直だ。公開情報を読み、製品を公然と試し、客の声を聞くことで、秘密を盗むことではない。競合は脅威だけでなく、各企業を改善へ押しやる教師でもあり、結局は客のためにもなる。",
        quiz: [
          { q: "Why do smart companies study their competitors?", options: ["To learn from others' successes without paying for every mistake themselves", "To copy them exactly forever", "To ignore their own customers"], answer: 0 },
          { q: "How does studying rivals help a company see itself?", options: ["It reveals its own strengths and weaknesses more clearly", "It hides all its weaknesses", "It has no effect on self-knowledge"], answer: 0 },
          { q: "What warning does the passage give?", options: ["A company that only copies others will always be one step behind", "You should steal your rivals' secrets", "You should never look at competitors"], answer: 0 }
        ]
      },
      {
        id: "d0915-2",
        title: "AI in the Classroom",
        level: "★★★",
        genre: "テクノロジー",
        text: "Artificial intelligence is quietly entering schools around the world. Some students now use AI tools to explain difficult ideas, check their writing, or practice a new language. Teachers, too, are testing AI to help plan lessons and mark simple work. This new arrival brings both exciting hopes and serious questions.\n\nThe hopes are real. A good AI tool can act like a patient private tutor, always ready to explain a topic in a new way until it makes sense. It can give each student attention that is hard to provide in a class of thirty. For a learner who is shy or falling behind, this gentle, private help can be a gift.\n\nBut there are worries too. If students let AI do their thinking for them, they may not truly learn. The goal of school is to build strong minds, not just to produce finished answers. Teachers must guide students to use these tools as helpers, not as shortcuts that skip the effort of learning.\n\nThere is also the question of data. To help a student, an AI system may collect information about them. Schools and companies must protect this data carefully, especially since the students are often children.\n\nUsed wisely, AI could make learning richer and fairer, reaching students who need extra help. Used carelessly, it could weaken the very skills school is meant to build. The tool is powerful; how we use it will decide whether it truly helps.",
        summaryJa: "人工知能(AI)が世界中の学校に静かに入りつつある。難しい考えの説明や作文の確認、新しい言語の練習にAIを使う生徒もいる。教師も授業計画や簡単な採点にAIを試している。この新参者は、わくわくする希望と深刻な問いの両方をもたらす。希望は本物だ。良いAIは、分かるまで新しい仕方で説明する辛抱強い家庭教師のように働ける。30人の教室では難しい個別の注意を各生徒に与えられる。内気だったり遅れたりする学習者には、この優しく私的な助けは贈り物になりうる。だが懸念もある。生徒がAIに考えを任せると、真に学べないかもしれない。学校の目的は完成した答えを作ることでなく強い頭脳を育てることだ。教師は、学びの労を飛ばす近道でなく助けとして使うよう導かねばならない。データの問題もある。生徒を助けるためAIは情報を集めうる。特に生徒はしばしば子どもなので、学校と企業はこのデータを慎重に守らねばならない。賢く使えばAIは学びを豊かで公正にし、助けの要る生徒に届きうる。不注意に使えば、学校が育てるべき技能を弱めうる。道具は強力で、使い方が本当に役立つかを決める。",
        quiz: [
          { q: "How can a good AI tool help a student?", options: ["Like a patient tutor, explaining a topic in new ways and giving individual attention", "By doing all the homework so students never think", "By replacing the school entirely"], answer: 0 },
          { q: "What is the main worry about students using AI?", options: ["If AI does their thinking, they may not truly learn", "That it is too boring", "That it makes school too easy to enjoy"], answer: 0 },
          { q: "Why must student data be protected especially carefully?", options: ["Because the students are often children", "Because data is worthless", "Because schools never use computers"], answer: 0 }
        ]
      },
      {
        id: "d0915-3",
        title: "A World Growing Older",
        level: "★★★",
        genre: "世界情勢",
        text: "Something remarkable is happening to the human family: on average, we are getting older. In many countries, people are living longer than ever before, while families are choosing to have fewer children. As a result, the share of older people in the world is steadily rising. This quiet change will shape life for everyone in the coming decades.\n\nThe reasons behind it are mostly good news. Better food, cleaner water, and improved medicine mean that people survive illnesses that once ended lives early. Living into one's eighties or nineties, once rare, is becoming common in many places.\n\nBut an older world brings real challenges. With fewer young workers and more retired people, countries must think carefully about how to care for everyone. Who will do the work, pay for pensions, and look after those who need help? These are not easy questions.\n\nThere are also opportunities. Older people carry knowledge and experience, and many wish to keep working, learning, and helping others long past the old retirement age. Societies that welcome this can gain a great deal.\n\nDifferent countries are trying many answers: encouraging people to work longer if they wish, supporting families who want children, and building better care for the elderly. There is no single solution.\n\nWhat is certain is that an aging world is not a problem to fear, but a new reality to plan for — wisely, and with respect for every generation.",
        summaryJa: "人類という家族に驚くべきことが起きている。平均して、私たちは年を取りつつある。多くの国で人はかつてなく長生きし、家族はより少ない子どもを選ぶ。結果、世界の高齢者の割合は着実に上がっている。この静かな変化は、これからの数十年、皆の暮らしを形づくる。背景の理由はおおむね良い知らせだ。より良い食、清潔な水、進歩した医療により、かつて早く命を奪った病を人は生き延びる。80代90代まで生きることは、かつて稀だったが多くの地域で普通になりつつある。だが高齢化した世界は現実の課題も招く。若い働き手が減り退職者が増える中、国は皆をどう支えるか慎重に考えねばならない。誰が働き、年金を賄い、助けの要る人を世話するのか。容易な問いではない。機会もある。高齢者は知識と経験を持ち、多くは旧来の定年をはるかに過ぎても働き学び人を助け続けたいと願う。これを歓迎する社会は多くを得られる。各国は多くの答えを試みる。望む人がより長く働けるよう促し、子を望む家族を支え、高齢者へのより良いケアを築く。唯一の解はない。確かなのは、高齢化する世界は恐れるべき問題でなく、賢く各世代を尊重して備えるべき新しい現実だということだ。",
        quiz: [
          { q: "Why is the world's population growing older?", options: ["People live longer thanks to better food, water, and medicine, and families have fewer children", "Because children are no longer born anywhere", "Because medicine has gotten worse"], answer: 0 },
          { q: "What is one challenge of an older world?", options: ["With fewer young workers and more retired people, caring for everyone is harder", "There is too much work for too many young people", "Nothing changes at all"], answer: 0 },
          { q: "How does the passage suggest we view an aging world?", options: ["Not as a problem to fear, but a new reality to plan for with respect for every generation", "As a disaster with no solutions", "As something to ignore"], answer: 0 }
        ]
      },
      {
        id: "d0915-4",
        title: "Why Japanese People Take Off Their Shoes",
        level: "★★☆",
        genre: "日本",
        text: "If you visit a home in Japan, the first thing you will likely do is take off your shoes. Just inside the door is a small lowered space where shoes are left, and from there you step up into the house in socks or slippers. To many visitors this is surprising, but to people in Japan it is completely natural.\n\nThe custom has practical roots. Streets carry dust and dirt, and leaving shoes at the door keeps the home clean. This matters even more in traditional Japanese houses, where people may sit and even sleep on soft floor mats called tatami. No one wants outdoor dirt where they rest and eat.\n\nBut the habit is about more than cleanliness. Removing your shoes marks a gentle border between the outside world and the private, peaceful space of the home. Stepping out of your shoes is a small way of leaving the busy street behind and entering a calmer place.\n\nThe custom appears in many other spots too. People often remove their shoes in some traditional restaurants, temples, and even certain schools and clinics. Special slippers may be provided, sometimes even a separate pair just for the bathroom.\n\nFor a visitor, following this custom is an easy and welcome sign of respect. Slipping off your shoes at the door is more than a rule of cleaning. It is a quiet daily act that separates rest from the rush of the world outside.",
        summaryJa: "日本の家を訪ねると、まずすることはたいてい靴を脱ぐことだ。ドアのすぐ内側に靴を置く一段低い小さな空間があり、そこから靴下やスリッパで家に上がる。多くの訪問者には驚きだが、日本の人には全く自然だ。この習慣には実用的な由来がある。通りはほこりや泥を運び、玄関で靴を脱げば家を清潔に保てる。柔らかい床マット「畳」に座り、時に眠る伝統的な日本家屋ではなおさら大切だ。休み食べる場所に外の汚れを持ち込みたい人はいない。だがこの習慣は清潔さ以上のものだ。靴を脱ぐことは、外の世界と家の私的で穏やかな空間との優しい境を示す。靴を脱ぐのは、忙しい通りを後にして、より静かな場所に入る小さな方法だ。この習慣は他の多くの場所にもある。一部の伝統的な料理店や寺、特定の学校や診療所でも靴を脱ぐ。専用のスリッパが用意され、時にトイレ専用の一足まである。訪問者にとって、この習慣に従うのは容易で歓迎される敬意の印だ。玄関で靴を脱ぐことは掃除の規則以上のもので、休息を外の世界の慌ただしさから隔てる、静かな日々の行為だ。",
        quiz: [
          { q: "What practical reason is there for removing shoes at the door?", options: ["It keeps the home clean, since streets carry dust and dirt", "It makes shoes last longer", "It is required by law"], answer: 0 },
          { q: "Beyond cleanliness, what does removing shoes mark?", options: ["A gentle border between the outside world and the private, peaceful home", "The end of the day", "That guests must leave"], answer: 0 },
          { q: "Where else does this custom appear?", options: ["Some traditional restaurants, temples, and certain schools and clinics", "Only in airports", "Nowhere but private homes"], answer: 0 }
        ]
      },
      {
        id: "d0915-5",
        title: "Why the Sea Rises and Falls",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "If you spend a day at the seaside, you may notice something strange. In the morning, the water reaches far up the beach; by afternoon, it has pulled back, leaving wet sand and rock. Then it slowly returns. These daily rises and falls of the sea are called tides, and their cause reaches all the way to the moon.\n\nThe moon, though far away, pulls on the Earth with a force called gravity. This pull is strongest on the side of the Earth facing the moon. There, the ocean water bulges slightly toward the moon, making the sea rise. On the opposite side of the Earth, another bulge forms as well. As the Earth turns each day, different coasts pass through these bulges, and so the tides rise and fall.\n\nThe sun also pulls on the oceans, though less strongly than the closer moon. When the sun and moon line up, their pulls combine, and the tides become especially large. When they sit at right angles, the tides are smaller.\n\nTides matter for many people. Sailors and fishers plan their trips around them, and some coastal creatures live their whole lives to the rhythm of the water. In some places, the rising and falling water is even used to make electricity.\n\nSo the gentle movement of the sea is not random. It is the Earth, the moon, and the sun, quietly dancing together across the sky.",
        summaryJa: "海辺で一日過ごすと、不思議なことに気づくかもしれない。朝、水は浜の奥まで届き、午後には引いて濡れた砂や岩を残す。そしてゆっくり戻る。この海の日々の満ち引きを「潮汐(タイド)」といい、その原因ははるか月にまで及ぶ。月は遠いが、重力という力で地球を引く。この引きは月に面した側で最も強い。そこでは海水がわずかに月へふくらみ、海が満ちる。地球の反対側にももう一つのふくらみができる。地球が毎日回るにつれ、異なる海岸がこれらのふくらみを通り、潮が満ち引きする。太陽も海を引くが、近い月より弱い。太陽と月が一直線に並ぶと引きが合わさり、潮は特に大きくなる。直角に位置すると潮は小さい。潮汐は多くの人に関わる。船乗りや漁師は旅を潮に合わせて計画し、一部の沿岸生物は水の律動に合わせて一生を送る。場所によっては満ち引きする水で発電さえする。だから海の穏やかな動きは無作為ではない。地球と月と太陽が、空を越えて静かに共に踊っているのだ。",
        quiz: [
          { q: "What are the daily rises and falls of the sea called?", options: ["Tides", "Waves only", "Rivers"], answer: 0 },
          { q: "What mainly causes the tides?", options: ["The moon's gravity pulling on the Earth's oceans", "The wind alone", "Boats moving the water"], answer: 0 },
          { q: "When do the tides become especially large?", options: ["When the sun and moon line up so their pulls combine", "When the moon disappears", "When there is no sun"], answer: 0 }
        ]
      }
    ]
    }
  ] };
