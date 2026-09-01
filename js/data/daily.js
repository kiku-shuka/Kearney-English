/* デイリー配信リーディング
 * 毎朝の自動ルーチンがこのファイルを丸ごと上書き生成する（直近 7 日分を保持）。
 * days は日付降順。各 day = { date: "YYYY-MM-DD", passages: [readingPassages と同スキーマ + genre] }
 * このファイル以外は手書きデータであり、ルーチンは触らない。
 */
window.KE_DATA = window.KE_DATA || {};

KE_DATA.dailyReading = { days: [
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
    },
    {
    date: "2026-08-29",
    passages: [
      {
        id: "d0829-1",
        title: "Why Companies Sell Off Parts of Themselves",
        level: "★★★",
        genre: "ビジネス",
        text: "We often hear about companies growing by buying other businesses. But sometimes a company does the opposite: it sells off one of its own parts. Recently, one company agreed to sell its bank-technology business in Japan to another firm. This kind of move, called a divestiture, is an important business decision, even though it may seem strange at first.\nWhy would a company sell part of itself? Often, it wants to focus. A large company may run many different businesses, but not all of them fit well together or perform strongly. By selling a part that is not central to its plans, the company can concentrate its money, people, and attention on what it does best.\nSelling a division can also raise money. The cash from a sale can be used to pay off debts, invest in more promising areas, or return value to the company's owners.\nFor the business being sold, a new owner can be a good thing. The buyer may care more about that particular business and give it the attention and investment it needs to grow.\nOf course, these decisions are difficult. Leaders must judge which parts to keep and which to let go, and employees may worry about changes. A wrong choice can be costly.\nThe lesson is that growing a business is not only about getting bigger. Sometimes a company becomes stronger by becoming simpler — focusing on its core, and letting other parts thrive in new hands. Knowing what to keep, and what to release, is one of the hardest and most important skills in business.",
        summaryJa: "私たちはしばしば、企業が他の事業を買って成長する話を聞く。だが時に企業は逆をする——自らの一部を売却するのだ。最近、ある企業が日本の銀行向け技術事業を別の会社に売ることに合意した。この種の動きは「事業売却（ダイベスティチャー）」と呼ばれ、最初は奇妙に見えても重要な経営判断だ。なぜ企業は自らの一部を売るのか。しばしば、集中したいからだ。大企業は多くの異なる事業を営むが、すべてがうまく噛み合い、力強く成果を出すとは限らない。計画の中心でない部分を売ることで、企業はお金・人・注意を、最も得意なことに集中できる。部門の売却はお金も生む。売却の現金は、借金の返済、より有望な分野への投資、あるいは所有者への価値還元に使える。売られる事業にとって、新しい所有者は良いことになりうる。買い手はその特定の事業をより気にかけ、成長に必要な注意と投資を与えるかもしれない。もちろん、こうした判断は難しい。指導者はどの部分を保ち、どれを手放すかを見極めねばならず、従業員は変化を心配しうる。誤った選択は高くつきうる。教訓は、事業を育てることが大きくなることだけではないということだ。時に企業は、単純になることでより強くなる——中核に集中し、他の部分を新しい手のもとで栄えさせて。何を保ち何を手放すかを知ることは、ビジネスで最も難しく重要な技能の一つだ。",
        quiz: [
          { q: "「事業売却（ダイベスティチャー）」とは？", options: ["企業が自らの一部を売ること", "他社を買うこと", "会社を閉じること"], answer: 0 },
          { q: "企業が一部を売る理由は？", options: ["最も得意なことに集中し、お金も生めるから", "客を減らすため", "成長を止めるため"], answer: 0 },
          { q: "本文の教訓は？", options: ["時に単純になることでより強くなる", "常に大きくなるべき", "部門は絶対に売るべきでない"], answer: 0 }
        ]
      },
      {
        id: "d0829-2",
        title: "Getting a Space Telescope Ready to Fly",
        level: "★★☆",
        genre: "テクノロジー",
        text: "Building a space telescope is one thing; getting it safely into space is another. Recently, a new NASA telescope was carefully sealed inside the top of a rocket, nearly ready for its journey into orbit. Before a telescope can explore the universe, it must survive one of the most dangerous moments of all: the launch.\nWhy is launch so risky? A rocket shakes violently and roars with enormous power as it climbs. A delicate telescope, full of mirrors and sensitive instruments, must be protected from these forces. Engineers place it inside a protective cover, called a fairing, at the top of the rocket. The fairing shields the telescope from the wind and heat of the climb, then falls away once the rocket is high enough.\nGetting ready to launch takes years of careful work. Every part is tested again and again. Engineers check that the telescope can handle the shaking, the cold of space, and the heat of the Sun. A single mistake could ruin a machine that cost billions and took a decade to build.\nWhy go to all this trouble? Once in space, above the blur of Earth's atmosphere, a telescope can see the universe with amazing clarity. This new one will survey huge areas of the sky, helping astronomers study distant galaxies and hidden parts of the cosmos.\nThe careful preparation reminds us that great discoveries depend on patient engineering. Long before a telescope sends back its first stunning image, thousands of people work quietly to make sure it survives the short, violent ride to the stars.",
        summaryJa: "宇宙望遠鏡を作ることと、それを安全に宇宙へ送ることは別だ。最近、NASAの新しい望遠鏡が、軌道への旅にほぼ準備が整い、ロケットの先端に慎重に封じられた。望遠鏡が宇宙を探れるようになる前に、最も危険な瞬間の一つ——打ち上げ——を生き延びねばならない。なぜ打ち上げはそれほど危険か。ロケットは登るとき激しく揺れ、莫大な力で轟く。鏡と敏感な機器で満ちた繊細な望遠鏡は、これらの力から守られねばならない。技術者はそれを、ロケットの先端の「フェアリング」と呼ばれる保護カバーの中に置く。フェアリングは登る際の風と熱から望遠鏡を守り、ロケットが十分高くなると外れて落ちる。打ち上げの準備には何年もの丁寧な作業がかかる。あらゆる部品が何度も試験される。技術者は、望遠鏡が揺れ・宇宙の寒さ・太陽の熱に耐えられるか確認する。一つの誤りが、数十億かけ10年かけて作った機械を台無しにしうる。なぜそこまでするのか。ひとたび宇宙、地球の大気のぼやけの上に出れば、望遠鏡は驚くほどの鮮明さで宇宙を見られる。この新しいものは空の広い領域を調査し、天文学者が遠い銀河や宇宙の隠れた部分を研究するのを助ける。この入念な準備は、偉大な発見が忍耐強い工学に支えられていることを思い出させる。望遠鏡が最初の見事な画像を送り返すはるか前に、何千もの人が、それが星々への短く激しい旅を生き延びるよう、静かに働くのだ。",
        quiz: [
          { q: "打ち上げが危険な理由は？", options: ["ロケットが激しく揺れ莫大な力で登るから", "宇宙が暗いから", "望遠鏡が軽いから"], answer: 0 },
          { q: "「フェアリング」の役割は？", options: ["登る際の風と熱から望遠鏡を守り、後で外れる", "写真を撮る", "燃料を運ぶ"], answer: 0 },
          { q: "宇宙に出た望遠鏡の利点は？", options: ["大気のぼやけの上で驚くほど鮮明に宇宙を見られる", "重くなる", "暗くなる"], answer: 0 }
        ]
      },
      {
        id: "d0829-3",
        title: "Clean Water for Everyone",
        level: "★★★",
        genre: "世界情勢",
        text: "Turning on a tap and getting safe, clean water may seem ordinary. But for millions of people around the world, clean water is not so easy to find. Making sure that everyone has access to safe drinking water is one of the most important challenges facing our planet.\nWhy is clean water so vital? Our bodies need water to survive, but dirty water can carry diseases that make people very sick, especially children. When water is scarce or unsafe, people may spend hours each day walking to collect it, time that could be used for school or work. Clean water is closely tied to health, education, and the chance for a better life.\nWhy do some places lack it? In many regions, there are no pipes to carry water to homes, or the local water is polluted. Droughts, growing populations, and damaged environments can make the problem worse. Building and maintaining water systems is expensive and takes years.\nWhat is being done? Around the world, governments, charities, and communities work to bring clean water to more people. They dig wells, build simple filters, repair pipes, and teach people how to keep water safe. New technologies can even pull clean water from dirty sources or from the air.\nProgress has been real, and far more people have clean water today than in the past. Yet much work remains. The goal is simple but powerful: that everyone, everywhere, can drink safely without fear. Few things do more to improve human life than the quiet gift of clean, safe water.",
        summaryJa: "蛇口をひねって安全で清潔な水を得ることは、当たり前に思えるかもしれない。だが世界中の何百万もの人にとって、清潔な水はそう簡単には見つからない。誰もが安全な飲み水を手にできるようにすることは、私たちの惑星が直面する最も重要な課題の一つだ。なぜ清潔な水はそれほど不可欠か。私たちの体は生きるために水を必要とするが、汚れた水は、特に子どもをひどく病気にする病を運びうる。水が乏しいか安全でないと、人々はそれを汲みに毎日何時間も歩くかもしれない——学校や仕事に使えたはずの時間だ。清潔な水は、健康・教育・より良い暮らしの機会と密接に結びつく。なぜ一部の場所に水がないのか。多くの地域で、水を家へ運ぶ管がないか、地元の水が汚染されている。干ばつ・人口増加・損なわれた環境が問題を悪化させうる。水道の建設と維持は高価で何年もかかる。何が行われているのか。世界中で、政府・慈善団体・地域が、より多くの人に清潔な水を届けようと取り組む。井戸を掘り、簡素なろ過器を作り、管を直し、水を安全に保つ方法を教える。新しい技術は、汚れた源や空気からさえ清潔な水を引き出せる。進歩は本物で、今日は過去よりずっと多くの人が清潔な水を持つ。だが多くの仕事が残る。目標は単純だが力強い——どこの誰もが、恐れずに安全に飲めること。清潔で安全な水という静かな贈り物ほど、人の暮らしを改善するものは少ない。",
        quiz: [
          { q: "清潔な水が不可欠な理由は？", options: ["汚れた水は病を運び、水汲みが時間を奪うから", "水は不要だから", "水は無限だから"], answer: 0 },
          { q: "一部の場所に清潔な水がない理由は？", options: ["管がない・水が汚染・干ばつや人口増など", "水が多すぎる", "誰も飲まない"], answer: 0 },
          { q: "この課題の目標は？", options: ["どこの誰もが恐れずに安全に飲めること", "一部の人だけ飲むこと", "水を減らすこと"], answer: 0 }
        ]
      },
      {
        id: "d0829-4",
        title: "Japan's Trains: Famous for Being on Time",
        level: "★★☆",
        genre: "日本",
        text: "Around the world, Japan's trains are famous for one thing above all: they are almost always on time. In many countries, a train that is a few minutes late is normal. In Japan, being even one minute late is considered a real problem, and it is rare. This remarkable punctuality is a small window into Japanese culture.\nHow do the trains stay so punctual? A huge amount of careful planning lies behind it. Schedules are designed down to the second, and staff work hard to keep everything running smoothly. Drivers, station workers, and control centers all cooperate closely. When something does go wrong, teams act quickly to fix it and get trains back on time.\nWhy does punctuality matter so much in Japan? Being on time is seen as a form of respect — respect for other people's time and for the promise made by the schedule. Millions of people depend on trains every day to get to work and school, so reliability is essential. A culture that values order and consideration for others naturally values trains that keep their word.\nThere is a cost to this precision. Staff face great pressure, and the system must be carefully managed. But for passengers, the reward is a service they can truly trust.\nJapan's punctual trains are more than a convenience. They are a daily example of a deeper value: doing a job carefully, reliably, and with respect for others. In the quiet arrival of a train exactly on time, you can see something important about how a whole society chooses to work.",
        summaryJa: "世界中で、日本の電車は何よりも一つのことで有名だ——ほぼ常に時間通りなのだ。多くの国で、数分遅れる電車は普通だ。日本では、一分の遅れさえ本当の問題と見なされ、それは稀だ。この驚くべき時間の正確さは、日本文化をのぞく小さな窓だ。電車はどうしてそれほど時間通りなのか。その背後には膨大な入念な計画がある。時刻表は秒単位まで設計され、職員はすべてを滑らかに動かそうと懸命に働く。運転士・駅員・指令センターがみな緊密に協力する。何か問題が起きても、チームが素早く対応して直し、電車を定刻に戻す。なぜ日本で時間の正確さがそれほど重要か。時間を守ることは敬意の一形態と見なされる——他者の時間への、そして時刻表が交わした約束への敬意だ。何百万もの人が毎日、仕事や学校へ行くのに電車に頼るので、信頼性は不可欠だ。秩序と他者への配慮を重んじる文化は、自然と、約束を守る電車を重んじる。この正確さには代償もある。職員は大きな重圧に直面し、システムは注意深く管理されねばならない。だが乗客にとって、その報酬は本当に信頼できるサービスだ。日本の時間通りの電車は、便利さ以上のものだ。より深い価値の日々の例だ——仕事を丁寧に、確実に、他者への敬意を持って行うこと。ちょうど定刻の電車の静かな到着に、社会全体がどう働くことを選ぶかについての、大切な何かが見える。",
        quiz: [
          { q: "日本の電車が有名な理由は？", options: ["ほぼ常に時間通りなこと", "とても速いことだけ", "とても安いことだけ"], answer: 0 },
          { q: "日本で時間の正確さが重要な理由は？", options: ["時間を守ることが他者への敬意と見なされるから", "電車が少ないから", "時刻表がないから"], answer: 0 },
          { q: "本文が示すより深い価値は？", options: ["仕事を丁寧に確実に他者への敬意を持って行う", "速さだけが大切", "遅れは問題ない"], answer: 0 }
        ]
      },
      {
        id: "d0829-5",
        title: "A Cosmic Mystery: The Little Red Dots",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "When scientists point a powerful telescope at the sky, they usually expect to find things they already understand. But sometimes they find a puzzle. Recently, astronomers spotted strange objects in images of the distant, early universe: tiny, faint 'red dots' that do not match anything they had seen before. Explaining what they are has become one of the most interesting mysteries in astronomy.\nWhy are they so puzzling? These little red dots appear to come from a very long time ago, when the universe was young. They are unusually red and small, and they do not fit neatly into the known types of galaxies or stars. Scientists are not yet sure what could produce such objects.\nOne exciting idea is that they may be powered by a strange kind of object: a young, fast-growing black hole wrapped in thick gas. Such a 'black hole star' would glow in an unusual way, which might explain the red color. But this is just one possibility, and researchers are still testing many ideas.\nWhy does this matter? Studying these dots could teach us how the first galaxies and black holes formed, in the earliest chapters of the universe's history. Solving the puzzle might change what we know about how the cosmos grew up.\nMysteries like this show science at its best. When something does not fit, scientists do not ignore it — they investigate, propose ideas, and test them carefully. The little red dots are a reminder that the universe still holds surprises, waiting to be understood by those patient enough to look.",
        summaryJa: "科学者が強力な望遠鏡を空へ向けるとき、たいてい既に理解しているものが見つかると期待する。だが時に、謎に出くわす。最近、天文学者は、遠い初期の宇宙の画像の中に奇妙な天体を見つけた——これまで見たどれとも一致しない、小さく淡い「赤い点」だ。それが何かを説明することは、天文学で最も興味深い謎の一つになった。なぜそれほど不可解か。これらの小さな赤い点は、宇宙が若かった、非常に昔から来ているようだ。異常に赤く小さく、既知の銀河や星の種類にきれいには当てはまらない。科学者は、何がそんな天体を生みうるのか、まだ確かでない。胸躍る一つの発想は、それらが奇妙な種類の天体——厚いガスに包まれた、若く急成長するブラックホール——に動かされているかもしれない、というものだ。そんな「ブラックホール星」は変わった光り方をし、それが赤い色を説明するかもしれない。だがこれは一つの可能性にすぎず、研究者はまだ多くの考えを試している。なぜ重要か。これらの点を研究することは、宇宙の歴史の最も初期の章で、最初の銀河やブラックホールがどう形成されたかを教えうる。謎を解けば、宇宙がどう育ったかについて私たちの知ることが変わるかもしれない。こうした謎は、科学の最良の姿を示す。何かが当てはまらないとき、科学者はそれを無視しない——調べ、考えを提案し、慎重に試す。小さな赤い点は、宇宙が今も驚きを秘め、見るだけの忍耐を持つ者に理解されるのを待っていることを思い出させる。",
        quiz: [
          { q: "天文学者が見つけた謎の天体は？", options: ["既知のどれとも一致しない小さく淡い「赤い点」", "普通の星", "地球の写真"], answer: 0 },
          { q: "「赤い点」を説明する胸躍る一つの発想は？", options: ["厚いガスに包まれた若いブラックホールかもしれない", "ただの光の誤り", "望遠鏡の故障"], answer: 0 },
          { q: "こうした謎が示す科学の姿は？", options: ["当てはまらないものを調べ考えを提案し試す", "謎を無視する", "推測だけで断定する"], answer: 0 }
        ]
      }
    ]
  },
    {
    date: "2026-08-28",
    passages: [
      {
        id: "d0828-1",
        title: "Why Prices Change: Supply and Demand",
        level: "★★★",
        genre: "ビジネス",
        text: "Why does one thing cost more than another, and why do prices change over time? Behind almost every price lies one of the most important ideas in economics: supply and demand. Understanding this simple idea helps explain the cost of everything, from a cup of coffee to a house.\n'Demand' means how much people want something and are willing to pay for it. 'Supply' means how much of it is available to buy. When many people want a product but there is only a little of it, the price tends to rise. When there is plenty of something but few people want it, the price tends to fall.\nThink of fresh strawberries. In summer, when farms produce many of them, they are cheap. In winter, when few are grown, the same strawberries cost much more. The fruit has not changed — only the balance of supply and demand.\nThis idea is everywhere. A popular new phone may be expensive because everyone wants it and only so many are made. If a factory closes and a material becomes scarce, prices for products using it may rise. When demand and supply shift, prices move to find a new balance.\nFor businesses, reading these signals is essential. A price that is too high may scare away customers; too low, and the company may sell out and lose money it could have earned.\nSupply and demand is a quiet force shaping markets everywhere. Once you notice it, prices are no longer a mystery — they are a story about what people want and what the world can provide.",
        summaryJa: "なぜある物は別の物より高く、なぜ価格は時とともに変わるのか。ほぼあらゆる価格の背後に、経済学で最も重要な考えの一つがある——需要と供給だ。この単純な考えの理解は、コーヒー一杯から家まで、あらゆるものの費用を説明する助けになる。「需要」とは、人々がどれだけそれを欲しがり、いくら払う気があるかだ。「供給」とは、買える量がどれだけあるかだ。多くの人が欲しがるのにわずかしかなければ、価格は上がりがちだ。たくさんあるのに欲しがる人が少なければ、価格は下がりがちだ。新鮮ないちごを考えてほしい。夏、農場が多く作るとき、安い。冬、ほとんど育たないとき、同じいちごはずっと高い。果物は変わっていない——供給と需要の均衡だけが変わったのだ。この考えはどこにでもある。人気の新しい携帯は、皆が欲しがり作られる数が限られるので高いかもしれない。工場が閉じて材料が乏しくなれば、それを使う製品の価格は上がりうる。需要と供給が動くと、価格は新しい均衡を見つけようと動く。事業にとって、こうした信号を読むことは不可欠だ。高すぎる価格は客を遠ざけ、安すぎれば会社は売り切れて、得られたはずのお金を失うかもしれない。需要と供給は、あらゆる所で市場を形づくる静かな力だ。ひとたび気づけば、価格はもはや謎ではない——人々が何を欲し、世界が何を供給できるかについての物語なのだ。",
        quiz: [
          { q: "「需要」とは？", options: ["人々がどれだけ欲しがり払う気があるか", "買える量のこと", "製品の重さ"], answer: 0 },
          { q: "多くの人が欲しがるのにわずかしかないと価格はどうなる？", options: ["上がりがち", "下がりがち", "全く変わらない"], answer: 0 },
          { q: "いちごが冬に高い理由は？", options: ["育つ数が少なく供給と需要の均衡が変わるから", "果物が別物になるから", "味が良くなるから"], answer: 0 }
        ]
      },
      {
        id: "d0828-2",
        title: "A New Hope for Restoring Sight",
        level: "★★★",
        genre: "テクノロジー",
        text: "Losing one's sight is one of the hardest things a person can face. For some kinds of blindness, the eye's light-sensing cells stop working, and the world goes dark. Now, scientists have reported an exciting new approach: special 'light-activated' drugs that helped blind mice sense light again — and did so without surgery, implants, or gene therapy.\nHow can a drug help someone see? In a healthy eye, tiny cells react to light and send signals to the brain. When these cells are damaged, other nearby cells still exist but cannot respond to light. The new drugs attach to these remaining cells and make them sensitive to light, so that when light enters the eye, they can send signals to the brain — restoring a basic form of vision.\nWhy is this approach special? Some earlier methods to treat blindness require complex surgery, implanted devices, or changing a patient's genes. A drug that can simply be given, without any of these, could be far simpler, safer, and easier to use. In tests, treated mice were able to respond to light and even follow visual signals.\nIt is important to be careful. This is early research done in animals, and much more study is needed before it could help people. Human eyes are complex, and safety must be proven.\nStill, the work offers real hope. For millions of people living with vision loss, every new idea is precious. By using light itself as a key, scientists are exploring gentle new ways to help the eye do what it was made to do: see.",
        summaryJa: "視力を失うことは、人が直面しうる最も辛いことの一つだ。ある種の失明では、目の光を感じる細胞が働かなくなり、世界が暗くなる。今、科学者は胸躍る新しい手法を報告した——特別な「光で活性化する」薬が、盲目のマウスが再び光を感じる助けをした。しかも手術・インプラント・遺伝子治療なしで。薬がどうして見る助けになりうるのか。健康な目では、微小な細胞が光に反応し脳へ信号を送る。これらの細胞が損なわれても、近くの他の細胞はまだ存在するが光に応じられない。新しい薬はこの残った細胞に付き、光に敏感にする。だから光が目に入ると、それらが脳へ信号を送れる——基本的な形の視覚を回復する。なぜこの手法が特別か。失明を治す従来の方法の一部は、複雑な手術・埋め込み装置・患者の遺伝子の変更を要する。これらなしにただ与えられる薬は、はるかに単純で、安全で、使いやすくなりうる。試験で、治療されたマウスは光に反応し、視覚的な信号に従うことさえできた。慎重さが大切だ。これは動物で行われた初期の研究で、人を助けられるまでにはるかに多くの研究が要る。人の目は複雑で、安全性が証明されねばならない。それでもこの取り組みは本当の希望を与える。視力を失って生きる何百万もの人にとって、新しい発想の一つ一つが貴重だ。光そのものを鍵として使い、科学者は、目が本来の働き——見ること——をする助けとなる穏やかな新しい方法を探っている。",
        quiz: [
          { q: "この新しい薬はどう働くか？", options: ["残った目の細胞を光に敏感にして脳へ信号を送らせる", "目を新しく作る", "脳を取り替える"], answer: 0 },
          { q: "この手法が特別な理由は？", options: ["手術・インプラント・遺伝子治療なしで使えうる", "とても高価だから", "とても痛いから"], answer: 0 },
          { q: "本文が促す慎重さは？", options: ["動物での初期研究で人にはさらなる研究が要る", "もう完成している", "人の目は単純だ"], answer: 0 }
        ]
      },
      {
        id: "d0828-3",
        title: "Sharing the Planet with Wildlife",
        level: "★★★",
        genre: "世界情勢",
        text: "When we think of how humans affect nature, we often picture big things: cities, highways, and factories. But a recent study tracking thousands of animals found something surprising. The simple presence of people — walking, hiking, or just being around — can change where wild animals go, sometimes as powerfully as roads and buildings do.\nHow can our presence alone matter so much? Many animals are cautious around humans. Even without harming them, our comings and goings can make animals avoid certain areas, move at different times of day, or take longer paths to find food and water. Over time, this reshapes how wildlife uses the land.\nWhy does this matter? Animals need space to feed, rest, and raise their young. If our presence pushes them into smaller or poorer areas, it can affect their health and numbers. Understanding this helps people share the land more wisely with the creatures around us.\nThe study also shows how connected we are to nature. Even in wild places, humans are part of the picture, and our choices ripple out to affect other living things.\nThe good news is that this knowledge can guide better decisions. By setting aside quiet areas, limiting activity at certain times, or planning trails with care, people can enjoy nature while giving animals the room they need.\nThe wider lesson is one of coexistence. We share the Earth with countless other species. Learning how even our quiet presence affects them helps us become better neighbors — leaving space for wildlife to thrive alongside us on our crowded, living planet.",
        summaryJa: "人間が自然にどう影響するかを考えるとき、私たちはしばしば大きなもの——都市・高速道路・工場——を思い描く。だが数千の動物を追跡した最近の研究は、驚くべきことを見つけた。人がいるという単純な存在——歩く・ハイキングする・ただ近くにいる——が、野生動物の行き先を、時に道路や建物と同じくらい強く変えうるのだ。私たちの存在だけがどうしてそれほど重要になりうるのか。多くの動物は人の周りで用心深い。害を与えなくても、私たちの出入りは、動物に特定の地域を避けさせ、一日の異なる時間に動かせ、食料や水を探すのにより長い道を取らせうる。時とともに、これが野生生物の土地の使い方を作り替える。なぜ重要か。動物は食べ、休み、子を育てる空間を必要とする。私たちの存在が彼らをより狭く貧しい地域へ押しやれば、健康や数に影響しうる。これを理解することは、周りの生き物と土地をより賢く分かち合う助けになる。研究はまた、私たちが自然にいかにつながっているかも示す。野生の場所でさえ、人間は絵の一部で、私たちの選択は波及して他の生き物に影響する。良い知らせは、この知識がより良い決定を導けることだ。静かな地域を取っておき、特定の時間に活動を制限し、道を丁寧に計画することで、人は自然を楽しみつつ動物に必要な余地を与えられる。より広い教訓は共存だ。私たちは無数の他の種と地球を分かち合う。静かな存在さえ彼らにどう影響するかを学ぶことは、より良い隣人になる助けになる——混み合った生きた惑星で、野生生物が私たちと並んで栄える余地を残して。",
        quiz: [
          { q: "研究が見つけた驚きは？", options: ["人がいる単純な存在が動物の行き先を強く変えうる", "動物は人を無視する", "人は自然に無関係"], answer: 0 },
          { q: "人の存在が動物に与えうる影響は？", options: ["地域を避けさせ動く時間や道を変えさせる", "動物を必ず増やす", "何も変えない"], answer: 0 },
          { q: "本文の広い教訓は？", options: ["共存——野生生物に栄える余地を残すこと", "自然を避けること", "動物を無視すること"], answer: 0 }
        ]
      },
      {
        id: "d0828-4",
        title: "Moon Viewing in Japan",
        level: "★★☆",
        genre: "日本",
        text: "People all over the world look up at the Moon, but in Japan, admiring it has become a gentle, cherished custom. Every autumn, many Japanese people take part in tsukimi, or 'moon viewing.' They gather to enjoy the sight of the full Moon, which is said to look especially bright and beautiful in the clear autumn sky.\nWhat happens during tsukimi? People find a good spot — a window, a garden, or a park — where they can see the Moon clearly. Some decorate with a kind of tall grass called susuki, whose feathery tips sway in the wind. Others prepare round white rice cakes called tsukimi dango, whose shape echoes the round Moon. Then they simply watch, talk quietly, and enjoy the calm of the evening.\nWhy view the Moon this way? Tsukimi is about more than looking at the sky. It is a moment to pause, appreciate the beauty of nature, and feel the changing of the seasons. Autumn is a time of harvest, and the custom is also a way of giving thanks for the year's crops.\nThe tradition reflects a value found deep in Japanese culture: finding beauty in quiet, simple, natural things. A full Moon is free, available to everyone, and gone again in a night — which makes the moment feel precious.\nTo take part in tsukimi is to slow down and look up. In a busy world, this small custom offers a peaceful reminder: that some of life's greatest pleasures ask nothing of us but to stop, look, and quietly enjoy the view.",
        summaryJa: "世界中の人が月を見上げるが、日本では、それを愛でることが穏やかで大切にされる習わしになった。毎秋、多くの日本人が「月見」に参加する。澄んだ秋の空で特に明るく美しく見えると言われる満月を眺めて楽しむのだ。月見の間、何をするのか。人々は月がよく見える良い場所——窓・庭・公園——を見つける。ススキという背の高い草で飾る人もいる。その羽毛のような穂先が風に揺れる。丸い白い餅「月見団子」を用意する人もいる。その形は丸い月を映す。そして、ただ眺め、静かに話し、夕べの落ち着きを楽しむ。なぜこうして月を見るのか。月見は空を見る以上のものだ。立ち止まり、自然の美を味わい、季節の移ろいを感じる時間だ。秋は収穫の時で、この習わしは一年の作物への感謝の仕方でもある。この伝統は、日本文化の深くにある価値を映す——静かで単純な自然のものに美を見いだすこと。満月は無料で、誰にでも見え、一晩でまた去る——それが、その瞬間を貴重に感じさせる。月見に参加することは、速度を緩めて見上げることだ。忙しい世界で、この小さな習わしは平和な気づきを差し出す——人生の最大級の喜びのいくつかは、私たちに、立ち止まり、眺め、静かに景色を楽しむこと以外何も求めない、と。",
        quiz: [
          { q: "「月見」とは何をすることか？", options: ["秋に満月を眺めて楽しむこと", "月へ行くこと", "月の大きさを測ること"], answer: 0 },
          { q: "月見で用意されるものに含まれるものは？", options: ["ススキや月見団子", "雪だるま", "花火"], answer: 0 },
          { q: "月見が映す日本文化の価値は？", options: ["静かで単純な自然のものに美を見いだす", "競争を好むこと", "自然を避けること"], answer: 0 }
        ]
      },
      {
        id: "d0828-5",
        title: "The Stone Piles of Chimpanzees",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "Deep in the forests of West Africa, scientists have watched some chimpanzees do something strange and fascinating: they pick up rocks and throw them, again and again, at particular trees. Over the years, the thrown stones pile up at the base of these trees, forming heaps that can remain in use for more than a decade.\nWhy do the chimpanzees do this? Scientists are not fully sure. The behavior does not seem to be about finding food. Some researchers think the loud banging sound the rocks make when they hit the tree may be a way of communicating over long distances in the thick forest. Others wonder if it could be something closer to a habit, or even a kind of tradition passed between animals.\nWhy is this exciting? Behavior like this hints that chimpanzees, our close animal relatives, may have their own forms of culture — actions learned from one another and repeated over generations, not driven only by hunger or instinct. The long-lasting stone piles suggest these are not random acts, but meaningful ones.\nStudying wild animals like this takes patience. Researchers must watch quietly for years, recording what the chimps do without disturbing them.\nThe stone-throwing chimpanzees remind us that the line between humans and other animals may be thinner than we think. Behaviors we once believed were uniquely human — culture, tradition, symbolic acts — may have quiet echoes in the forest. By watching our relatives closely, we learn not only about them, but about the deep roots of our own behavior.",
        summaryJa: "西アフリカの森の奥で、科学者は一部のチンパンジーが奇妙で魅力的なことをするのを見た——石を拾い、特定の木に何度も何度も投げつけるのだ。年月をかけて、投げられた石はこれらの木の根元に積み上がり、10年以上も使われ続ける山を作る。なぜチンパンジーはこれをするのか。科学者は完全には確かでない。この行動は食料を見つけることとは無関係のようだ。石が木に当たるときの大きな打撃音が、鬱蒼とした森で長距離を通じて意思疎通する方法かもしれないと考える研究者もいる。習慣に近い何か、あるいは動物間で受け継がれる一種の伝統ではないかと考える者もいる。なぜ胸躍るのか。こうした行動は、私たちの近い動物の親戚であるチンパンジーが、独自の文化の形——空腹や本能だけに駆られるのでなく、互いから学び世代を越えて繰り返される行動——を持つかもしれないと示唆する。長く残る石の山は、これが無作為な行為でなく意味あるものだと示唆する。こうした野生動物の研究には忍耐が要る。研究者は、チンパンジーを乱さず、その行動を記録しながら、何年も静かに見守らねばならない。石を投げるチンパンジーは、人間と他の動物の境界が私たちが思うより薄いかもしれないことを思い出させる。かつて人間だけのものと信じた行動——文化・伝統・象徴的行為——は、森の中に静かな響きを持つかもしれない。親戚を注意深く見ることで、私たちは彼らについてだけでなく、自分自身の行動の深い根についても学ぶのだ。",
        quiz: [
          { q: "チンパンジーがしているのは？", options: ["特定の木に石を繰り返し投げて石の山を作る", "木を植える", "石を食べる"], answer: 0 },
          { q: "この行動の理由として研究者が考えるものは？", options: ["打撃音による長距離の意思疎通や伝統かもしれない", "食料探しだと確定している", "水を得るためだと確定している"], answer: 0 },
          { q: "この行動が示唆することは？", options: ["チンパンジーが独自の文化の形を持つかもしれない", "動物に文化はない", "人間だけが学べる"], answer: 0 }
        ]
      }
    ]
  },
    {
    date: "2026-08-27",
    passages: [
      {
        id: "d0827-1",
        title: "Why Big Companies Buy Small Ones",
        level: "★★★",
        genre: "ビジネス",
        text: "In the business world, large companies often buy smaller ones. Recently, a major computer-chip company agreed to buy a smaller firm known for its work in artificial intelligence, in a deal worth billions of dollars. When one company buys another, it is called an acquisition, and it is one of the most important moves a business can make.\nWhy would a big, successful company buy a smaller one? Often, the smaller company has something valuable the buyer wants. It might own useful technology, a popular product, or a skilled team of workers. Building these from scratch could take years, but buying them gives the larger company instant access.\nAcquisitions can also help a company enter a new market or remove a rival. If a fast-growing small company might one day become a strong competitor, a larger firm may prefer to buy it and join forces instead.\nBut acquisitions are risky. They are expensive, and the two companies must learn to work together. Sometimes their people, systems, or cultures do not fit well, and the hoped-for benefits never appear. Many acquisitions succeed, but some fail badly.\nFor the smaller company and its founders, being bought can be a huge reward for years of hard work. For the larger one, it is a bet on the future.\nThe lesson is that businesses grow not only by working harder, but by combining. Behind a single big deal are ideas, people, and technology changing hands — reshaping industries, and deciding which companies will lead in the years to come.",
        summaryJa: "ビジネスの世界で、大企業はしばしば小さな企業を買う。最近、ある大手コンピューターチップ企業が、AIの取り組みで知られる小さな会社を、数十億ドルの取引で買収することに合意した。ある企業が別の企業を買うことは「買収（アクイジション）」と呼ばれ、事業が取りうる最も重要な動きの一つだ。なぜ大きく成功した企業が小さな企業を買うのか。しばしば、小さな企業は買い手が欲しい価値あるものを持つ。有用な技術、人気製品、熟練した従業員チームを持つかもしれない。これらを一から築くには何年もかかりうるが、買えば大企業は即座にアクセスできる。買収は、新市場への参入や競合の排除も助けうる。急成長する小企業がいつか強い競争相手になりうるなら、大企業はそれを買って力を合わせる方を好むかもしれない。だが買収は危険だ。高価で、二つの企業は共に働くことを学ばねばならない。時に、人・システム・文化がうまく合わず、望んだ利益は決して現れない。多くの買収は成功するが、ひどく失敗するものもある。小さな企業とその創業者には、買われることが何年もの努力への大きな報酬になりうる。大きな企業には、未来への賭けだ。教訓は、事業がより懸命に働くことだけでなく、結びつくことでも成長するということだ。一つの大きな取引の背後には、持ち主を変える発想・人・技術があり——産業を作り替え、来る年月にどの企業が主導するかを決めている。",
        quiz: [
          { q: "「買収」とは？", options: ["ある企業が別の企業を買うこと", "製品を売ること", "会社を閉じること"], answer: 0 },
          { q: "大企業が小さな企業を買う理由は？", options: ["有用な技術・製品・人材に即座にアクセスできるから", "客を減らすため", "技術を捨てるため"], answer: 0 },
          { q: "買収が危険な理由は？", options: ["高価で人・システム・文化が合わず利益が出ないこともある", "必ず成功するから", "費用がかからないから"], answer: 0 }
        ]
      },
      {
        id: "d0827-2",
        title: "Tiny Particles That Fight Cancer",
        level: "★★★",
        genre: "テクノロジー",
        text: "Removing a brain tumor is one of the most difficult operations in medicine. Surgeons must take out the cancer while protecting the healthy brain around it — and the hardest part is that tiny bits of tumor can be almost impossible to see. Now, scientists have created something that could help: 'smart' nanoparticles, incredibly tiny objects that can both light up hidden cancer cells and help destroy the ones left behind.\nWhat are nanoparticles? They are particles far smaller than a single cell — so small that thousands could fit across the width of a hair. Because of their size, they can travel through the body and gather in specific places, such as a tumor.\nHow do these particles help? First, they can be designed to glow, making cancer cells shine during surgery. This lets the surgeon see tumor that would otherwise be invisible, and remove more of it safely. Then, after the operation, the same particles can help destroy microscopic cancer cells that were left behind, lowering the chance the cancer returns.\nThis is still early research, done in laboratories and animal tests. Using such particles safely in people will require years of careful study, and not every promising idea succeeds.\nStill, the work points to an exciting future for medicine: tiny tools, working at the scale of cells, doing jobs too delicate for ordinary instruments. By combining chemistry, biology, and clever engineering, scientists are finding new ways to fight one of the hardest diseases — one nearly invisible particle at a time.",
        summaryJa: "脳腫瘍の摘出は医療で最も難しい手術の一つだ。外科医は、周りの健康な脳を守りつつがんを取り出さねばならない——そして最も難しいのは、微小な腫瘍のかけらがほとんど見えないことだ。今、科学者はそれを助けうるものを作った——「スマート」ナノ粒子、隠れたがん細胞を光らせ、残ったものの破壊も助けられる、極めて小さな物体だ。ナノ粒子とは何か。一つの細胞よりはるかに小さい粒子だ——髪の幅に何千も収まるほど小さい。その大きさゆえ、体内を移動し、腫瘍など特定の場所に集まれる。これらの粒子はどう助けるのか。まず、光るよう設計でき、手術中にがん細胞を輝かせる。これにより外科医は、さもなければ見えない腫瘍を見て、より多くを安全に取り除ける。次に、手術後、同じ粒子が、残された微視的ながん細胞の破壊を助け、がんが戻る可能性を下げる。これはまだ実験室と動物試験で行われる初期の研究だ。こうした粒子を人で安全に使うには何年もの丁寧な研究が要り、あらゆる有望な発想が成功するわけではない。それでもこの取り組みは、医療の胸躍る未来を指す——細胞の尺度で働き、普通の器具には繊細すぎる仕事をする微小な道具。化学・生物学・巧妙な工学を組み合わせ、科学者は最も難しい病の一つと闘う新しい方法を見つけている——ほぼ見えない一粒ずつ。",
        quiz: [
          { q: "スマートナノ粒子ができることは？", options: ["隠れたがん細胞を光らせ残ったものの破壊も助ける", "脳全体を取り除く", "痛みを増やす"], answer: 0 },
          { q: "ナノ粒子はどれくらい小さいか？", options: ["一つの細胞よりはるかに小さい", "建物ほど大きい", "肉眼でよく見える"], answer: 0 },
          { q: "この研究の現状は？", options: ["実験室と動物試験の初期段階", "既に広く使われている", "失敗して中止された"], answer: 0 }
        ]
      },
      {
        id: "d0827-3",
        title: "Protecting Children Online",
        level: "★★★",
        genre: "世界情勢",
        text: "Children today grow up with the internet. They learn, play, and talk with friends online, often from a very young age. But the digital world can also be dangerous for them, and recently governments around the world have been taking action to make it safer. In one country, a major technology company agreed to a large settlement over concerns that its social media harmed young users.\nWhy are people worried? Social media and other online services are designed to keep users looking at their screens for as long as possible. For children, whose minds are still developing, this can lead to too much screen time, less sleep, and pressure to compare themselves with others. Young people may also meet strangers online or see content that is not suitable for them.\nWhat are governments and companies doing? Some are creating rules that require companies to protect young users — for example, by limiting certain features for children, adding parental controls, or checking users' ages. Companies are being asked to design their services with children's safety in mind, not only with profit.\nThis is a difficult balance. The internet offers children wonderful chances to learn and connect, and no one wants to shut those out. The goal is to keep the benefits while reducing the harms.\nProtecting children online has become a shared challenge around the world. As young people spend more of their lives on screens, families, companies, and governments are all learning, together, how to help them grow up safe in a digital age.",
        summaryJa: "今日の子どもはインターネットとともに育つ。しばしば非常に幼い頃から、オンラインで学び、遊び、友人と話す。だがデジタルの世界は彼らにとって危険にもなりうる。最近、世界中の政府がそれをより安全にするための行動を取っている。ある国では、大手技術企業が、そのソーシャルメディアが若い利用者を害したという懸念をめぐり、大きな和解に合意した。なぜ人々は心配するのか。ソーシャルメディアなどのオンラインサービスは、利用者をできるだけ長く画面に見入らせるよう設計されている。心がまだ発達途上の子どもには、これが過度の画面時間、睡眠不足、他者と自分を比べる圧力につながりうる。若者はオンラインで見知らぬ人に会ったり、適さない内容を見たりもしうる。政府と企業は何をしているのか。若い利用者を守るよう企業に求める規則を作る動きもある——例えば、子ども向けに特定の機能を制限し、保護者による管理を加え、利用者の年齢を確認するなど。企業は、利益だけでなく子どもの安全を念頭にサービスを設計するよう求められている。これは難しい均衡だ。インターネットは子どもに学び、つながる素晴らしい機会を与え、誰もそれを締め出したくない。目標は、利益を保ちつつ害を減らすことだ。子どものオンライン保護は、世界中で共有の課題になった。若者が生活のより多くを画面上で過ごす中、家族・企業・政府はみな共に、デジタル時代に彼らが安全に育つ手助けの仕方を学んでいる。",
        quiz: [
          { q: "オンラインで子どもについて心配される理由は？", options: ["過度の画面時間・睡眠不足・比較の圧力などにつながりうる", "学べないから", "無料だから"], answer: 0 },
          { q: "政府や企業がしていることは？", options: ["機能の制限・保護者管理・年齢確認など安全のための規則", "子どもの利用を全面禁止", "何もしない"], answer: 0 },
          { q: "この課題の難しい均衡とは？", options: ["利益を保ちつつ害を減らすこと", "利益を全て捨てること", "害を増やすこと"], answer: 0 }
        ]
      },
      {
        id: "d0827-4",
        title: "Helping a Region Recover Through Travel",
        level: "★★☆",
        genre: "日本",
        text: "After a natural disaster, a region faces a long road to recovery. Homes and roads must be repaired, but there is another, quieter problem: visitors often stop coming. When tourists stay away, hotels, restaurants, and shops lose the income they depend on. Recently, Japan considered a plan to help one area recover by encouraging people to travel there again.\nThe idea is simple. After an earthquake struck part of southern Japan, the government looked at helping cover much of the cost of trips to the area. By making travel cheaper, they hoped to bring back visitors, and with them, money to support local businesses.\nWhy use tourism to help recovery? Rebuilding needs money, and a healthy flow of visitors brings money directly to the people who need it — the shop owner, the innkeeper, the taxi driver. Travel also lifts spirits, showing a struggling community that the wider country has not forgotten them.\nThere is another benefit. After a disaster, people far away may wrongly believe an entire region is unsafe or closed, even when most of it is fine. Encouraging visitors helps correct this and shows that the area is open and welcoming.\nOf course, safety comes first, and such plans must be carefully timed. But the idea reflects an important truth: helping a place recover is not only about repairing buildings. It is also about bringing life, activity, and people back. Sometimes, one of the kindest things a traveler can do is simply to visit a place that needs them.",
        summaryJa: "自然災害の後、地域は回復への長い道に直面する。家や道路は修理せねばならないが、もう一つの静かな問題がある——訪問者がしばしば来なくなるのだ。観光客が遠ざかると、ホテル・飲食店・店は頼りにする収入を失う。最近、日本は、人々が再びそこへ旅するのを促すことで、ある地域の回復を助ける案を検討した。発想は単純だ。南日本の一部を地震が襲った後、政府はその地域への旅の費用の多くを補助することを検討した。旅を安くすることで訪問者を呼び戻し、彼らとともに地元事業を支えるお金をもたらそうとした。なぜ観光で回復を助けるのか。再建にはお金が要り、健全な訪問者の流れは、それを必要とする人々——店主・宿の主人・タクシー運転手——に直接お金をもたらす。旅は気持ちも高め、苦境の地域に、広い国が彼らを忘れていないと示す。もう一つの利点もある。災害の後、遠くの人々は、大部分が無事でも地域全体が危険だ・閉鎖されたと誤って信じるかもしれない。訪問を促すことはこれを正し、その地域が開いていて歓迎していると示す助けになる。もちろん安全が最優先で、こうした案は慎重な時機が要る。だがこの発想は重要な真実を映す——ある場所の回復を助けることは、建物を修理することだけではない。生命・活動・人を呼び戻すことでもある。時に、旅行者ができる最も親切なことの一つは、単に、彼らを必要とする場所を訪れることなのだ。",
        quiz: [
          { q: "災害後の「静かな問題」とは？", options: ["訪問者が来なくなり地元事業が収入を失うこと", "道路が広がること", "人口が増えること"], answer: 0 },
          { q: "観光で回復を助ける理由は？", options: ["訪問者が必要とする人々に直接お金をもたらすから", "観光は無関係だから", "建物だけが重要だから"], answer: 0 },
          { q: "本文が映す真実は？", options: ["回復は建物の修理だけでなく人を呼び戻すことでもある", "回復は不可能", "旅は無意味"], answer: 0 }
        ]
      },
      {
        id: "d0827-5",
        title: "A Star's Hidden Partner",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "High in the winter sky shines a famous red star called Betelgeuse, one of the brightest and largest stars we can see. For about a hundred years, astronomers suspected that this giant star was not alone — that a smaller companion star might be circling it, hidden in its glare. Recently, scientists finally captured their clearest image yet of this hidden partner, ending a search that lasted a century.\nWhy was it so hard to see? Betelgeuse is enormous and extremely bright, so a much smaller, fainter star close beside it is easily lost in its light — like trying to spot a candle right next to a searchlight. Only with very powerful modern telescopes and clever techniques could astronomers finally separate the two.\nWhy does this discovery matter? Many stars in the universe come in pairs, circling each other. A companion can change how a star behaves — how it brightens, dims, and ages. Betelgeuse is known for slowly changing its brightness, and understanding its partner may help explain these changes.\nStudying such faraway objects is painstaking work. The stars are hundreds of light-years away, so astronomers must gather faint light and analyze it with great care over many years.\nThe find is a reminder of how much patience science requires, and how new tools can finally answer old questions. For a hundred years, a hidden star waited just out of view. Now, at last, we have seen it — a small victory in humanity's long effort to understand the distant, glittering lights that fill our night sky.",
        summaryJa: "冬の空高くに、ベテルギウスと呼ばれる有名な赤い星が輝く。私たちが見られる最も明るく大きな星の一つだ。約100年の間、天文学者はこの巨星が独りではない——より小さな伴星がその輝きに隠れて回っているかもしれない——と疑ってきた。最近、科学者はついにこの隠れた相手の、これまでで最も鮮明な画像を捉え、一世紀続いた探索を終えた。なぜそんなに見えにくかったのか。ベテルギウスは巨大で極めて明るいので、すぐそばのずっと小さく暗い星は、その光に容易にかき消される——サーチライトのすぐ隣のろうそくを見つけようとするように。非常に強力な現代の望遠鏡と巧妙な技法があって初めて、天文学者はついに二つを分けられた。なぜこの発見が重要か。宇宙の多くの星は対で、互いを回る。伴星は星のふるまい——どう明るくなり、暗くなり、年を取るか——を変えうる。ベテルギウスはゆっくり明るさを変えることで知られ、その相手の理解がこうした変化の説明を助けるかもしれない。こんな遠い天体の研究は骨の折れる仕事だ。星は数百光年離れているので、天文学者はかすかな光を集め、何年もかけて細心の注意で分析せねばならない。この発見は、科学がどれほどの忍耐を要するか、そして新しい道具が古い問いについに答えられることを思い出させる。100年の間、隠れた星は見えないところで待っていた。今、ついに、私たちはそれを見た——夜空を満たす遠くきらめく光を理解しようとする人類の長い努力の、小さな勝利だ。",
        quiz: [
          { q: "ベテルギウスの伴星が見えにくかった理由は？", options: ["ベテルギウスが明るすぎてそばの暗い星がかき消されるから", "伴星が存在しないから", "昼だけ見えるから"], answer: 0 },
          { q: "伴星の研究が重要な理由は？", options: ["星のふるまい（明るさの変化など）の説明を助けうるから", "星を壊すため", "光を消すため"], answer: 0 },
          { q: "この発見が思い出させることは？", options: ["科学は忍耐を要し新しい道具が古い問いに答えうる", "科学は簡単だ", "望遠鏡は不要だ"], answer: 0 }
        ]
      }
    ]
  },
    {
    date: "2026-08-26",
    passages: [
      {
        id: "d0826-1",
        title: "The Idea Behind Insurance",
        level: "★★★",
        genre: "ビジネス",
        text: "Life is full of risks. A house might catch fire, a car might crash, or a person might fall ill. Any of these can cost a huge amount of money — often more than one family or business could ever pay alone. Insurance is a clever idea that helps people share these risks, and it is one of the most important tools in modern business.\nHow does insurance work? Many people each pay a small, regular amount of money, called a premium, into a shared pool managed by an insurance company. Most of them will not have a disaster in any given year. But when one person does — a fire, an accident, a serious illness — the company uses money from the pool to help cover the cost. In this way, the misfortune of a few is shared by many.\nWhy is this useful? On its own, a single family might be ruined by one large, unexpected expense. By paying a small amount regularly, they trade a big, uncertain risk for a small, predictable cost. This peace of mind lets people and businesses plan for the future and take sensible chances.\nInsurance companies must be careful. They study how often bad events happen so they can set fair prices, collecting enough to pay claims while staying in business.\nThe basic idea, though, is simple and powerful: together, we can carry burdens that would crush any one of us alone. Insurance turns the unpredictable dangers of life into something communities can face — by sharing the risk among many.",
        summaryJa: "人生はリスクに満ちている。家が火事になり、車が衝突し、人が病気になるかもしれない。どれも莫大なお金がかかりうる——しばしば一つの家族や事業が単独で払える以上に。保険は、人々がこうしたリスクを分かち合う助けとなる巧妙な発想で、現代ビジネスで最も重要な道具の一つだ。保険はどう働くのか。多くの人がそれぞれ、「保険料」と呼ばれる小さく定期的なお金を、保険会社が管理する共有の資金の池に払う。そのほとんどは、ある年に災難に遭わない。だが誰かが遭うとき——火事・事故・重い病気——会社は池のお金を使って費用の負担を助ける。こうして、少数の不運が多数に分かち合われる。なぜ有用か。単独では、一つの家族が一度の大きく予期せぬ出費で破滅しうる。小さな額を定期的に払うことで、大きく不確かなリスクを、小さく予測できる費用と交換する。この安心が、人や事業に将来を計画させ、理にかなった挑戦をさせる。保険会社は慎重でなければならない。悪い出来事がどれだけ頻繁に起きるか研究し、公正な価格を設定する——請求に払うだけ集めつつ事業を続けられるように。だが基本の発想は単純で力強い——共に、私たちは一人では押し潰されそうな重荷を担える。保険は、人生の予測できない危険を、地域が向き合えるものに変える——リスクを多数で分かち合うことで。",
        quiz: [
          { q: "保険はどう働くか？", options: ["多くの人が保険料を共有の池に払い、災難に遭った人を助ける", "一人が全額を払う", "何もしない"], answer: 0 },
          { q: "保険が有用な理由は？", options: ["大きく不確かなリスクを小さく予測できる費用と交換できる", "費用が増えるだけ", "災難が増える"], answer: 0 },
          { q: "保険の基本の発想は？", options: ["リスクを多数で分かち合う", "一人で重荷を負う", "危険を無視する"], answer: 0 }
        ]
      },
      {
        id: "d0826-2",
        title: "Robots in the Operating Room",
        level: "★★★",
        genre: "テクノロジー",
        text: "When you imagine surgery, you probably picture a doctor holding the tools. But increasingly, another kind of helper is present in the operating room: a robot. Recent research found that some operations, such as knee replacements, can be more precise when a surgeon works together with a robotic system.\nHow do surgical robots work? They do not operate on their own. Instead, a human surgeon guides them, and the robot helps carry out the plan with great accuracy. Before surgery, doctors can create a detailed map of the patient's body. During the operation, the robot helps the surgeon follow that plan exactly, cutting or placing parts with steadiness a human hand alone may not match.\nWhy does precision matter? In many operations, tiny differences can affect how well a patient recovers. A joint that is placed at just the right angle may feel more natural and last longer. Greater accuracy can mean less pain, faster healing, and better results.\nStill, robots are tools, not replacements for doctors. The surgeon's skill, judgment, and experience remain essential. The robot handles precise movements, while the human makes the decisions and responds to anything unexpected.\nThere are challenges too. Robotic systems are expensive, require training, and are not needed for every operation. Doctors must decide when they truly help.\nThe trend shows how technology and human skill can work together. By combining a surgeon's knowledge with a robot's steadiness, medicine is becoming more precise — helping patients heal better, one careful, well-guided movement at a time.",
        summaryJa: "手術を想像するとき、あなたはたぶん道具を持つ医師を思い描く。だがますます、手術室には別の助け手がいる——ロボットだ。最近の研究は、膝の置換など一部の手術が、外科医がロボットシステムと協働するとより精密になりうると見つけた。手術ロボットはどう働くのか。自ら手術するのではない。人間の外科医が導き、ロボットが計画を高い正確さで実行する助けをする。手術前、医師は患者の体の詳細な地図を作れる。手術中、ロボットは外科医がその計画に正確に従う助けをし、人の手だけでは及ばないかもしれない安定さで切ったり部品を置いたりする。なぜ精密さが重要か。多くの手術で、わずかな違いが患者の回復を左右しうる。ちょうど良い角度に置かれた関節は、より自然に感じられ長持ちしうる。より高い正確さは、痛みの軽減・速い治癒・より良い結果を意味しうる。それでもロボットは道具であり、医師の代わりではない。外科医の技能・判断・経験は不可欠なままだ。ロボットが精密な動きを担い、人間が決定を下し、予期せぬことに対応する。課題もある。ロボットシステムは高価で、訓練を要し、あらゆる手術に必要ではない。医師は、それが本当に役立つときを判断せねばならない。この流れは、技術と人の技能がどう協働できるかを示す。外科医の知識とロボットの安定さを組み合わせることで、医療はより精密になっている——患者がよりよく治る助けをして、丁寧でよく導かれた一動作ずつ。",
        quiz: [
          { q: "手術ロボットはどう働くか？", options: ["人間の外科医が導き、ロボットが計画を正確に実行する", "自ら手術する", "医師の代わりに決定する"], answer: 0 },
          { q: "手術での精密さが重要な理由は？", options: ["わずかな違いが回復を左右しうるから", "精密さは無関係", "速さだけが重要"], answer: 0 },
          { q: "本文がロボットについて述べることは？", options: ["道具であり医師の技能・判断は不可欠なまま", "医師を不要にする", "あらゆる手術に必要"], answer: 0 }
        ]
      },
      {
        id: "d0826-3",
        title: "When a Giant Piece of Ice Breaks Free",
        level: "★★★",
        genre: "世界情勢",
        text: "Near the top of the world, a huge sheet of ice recently broke away from a glacier in Greenland. The piece was enormous — about the size of a large city. Scientists had watched cracks slowly spreading across the ice for years before it finally split off and began to drift out to sea. Events like this are a striking sign of change in Earth's frozen regions.\nWhy do these giant blocks break off? Glaciers are rivers of ice that flow very slowly from the land toward the sea. Where they meet the ocean, huge floating sheets can form. As the air and water grow warmer, these sheets weaken, and cracks appear. Eventually, a large piece breaks free — a process called 'calving.' Some calving is natural, but warming makes it happen more often.\nWhy does it matter far away? The ice near the poles helps keep the whole planet cool by reflecting sunlight back into space. When ice on land melts and flows into the ocean, it also raises sea levels, which can threaten coastal cities around the world. What happens in the distant Arctic can reach shores thousands of kilometers away.\nScientists watch these regions closely, using satellites and sensors to track the ice. Their measurements help the world understand how fast things are changing.\nA single breaking sheet of ice is a small event in a vast landscape. But it is also a message from a changing planet — a reminder that the frozen ends of the Earth are connected to us all.",
        summaryJa: "世界の頂近くで、最近、巨大な氷の板がグリーンランドの氷河から割れて離れた。その塊は途方もなく大きく——大都市ほどの大きさだった。科学者は、それがついに割れて海へ漂い出す前、何年もかけて氷にゆっくり広がる亀裂を見守っていた。こうした出来事は、地球の凍った地域の変化の際立った兆しだ。なぜこうした巨大な塊が割れるのか。氷河は、陸から海へ非常にゆっくり流れる氷の川だ。海と出会う所で、巨大な浮かぶ板ができうる。空気と水が暖まるにつれ、これらの板は弱まり、亀裂が現れる。やがて大きな塊が割れて離れる——「カービング（分離・崩落）」と呼ばれる過程だ。カービングの一部は自然だが、温暖化はそれをより頻繁にする。なぜ遠くで重要か。極近くの氷は、日光を宇宙へ反射し返して地球全体を涼しく保つ助けをする。陸の氷が溶けて海へ流れ込むと、海面も上昇し、世界中の沿岸都市を脅かしうる。遠い北極で起きることが、何千キロも離れた岸に届きうる。科学者は衛星やセンサーで氷を追い、これらの地域を注意深く見守る。その測定は、物事がどれほど速く変わっているかを世界が理解する助けになる。割れる一枚の氷の板は、広大な風景の中の小さな出来事だ。だがそれは、変わりゆく惑星からの伝言でもある——地球の凍った果てが私たち皆とつながっていることの気づきだ。",
        quiz: [
          { q: "「カービング」とは？", options: ["氷河から大きな氷の塊が割れて離れる過程", "氷を彫ること", "海を凍らせること"], answer: 0 },
          { q: "極の氷が地球に果たす役割は？", options: ["日光を反射して地球を涼しく保つ助けをする", "地球を温める", "何もしない"], answer: 0 },
          { q: "陸の氷が海に流れ込むと何が起きるか？", options: ["海面が上昇し沿岸都市を脅かしうる", "海が浅くなる", "何も起きない"], answer: 0 }
        ]
      },
      {
        id: "d0826-4",
        title: "Bowing: A Language Without Words",
        level: "★★☆",
        genre: "日本",
        text: "In Japan, people greet, thank, and apologize in a way that needs no words: they bow. A bow, called ojigi, is a small forward bend of the body, and it is one of the most important gestures in Japanese daily life. Though it looks simple, a bow can carry many different meanings.\nWhy do people bow? A bow is a sign of respect. People bow when they meet someone, say goodbye, give thanks, or say sorry. It shows that you are paying attention to the other person and treating them politely. In many situations where people in other countries might shake hands, Japanese people bow instead.\nInterestingly, not all bows are the same. A small nod of the head is casual and friendly, used among people who know each other. A deeper bow shows greater respect, given to a teacher, a customer, or an important guest. A very deep, long bow can express a serious apology or deep gratitude. The angle and length of the bow send a clear message.\nChildren learn to bow from a young age, and it becomes a natural habit. Even on the telephone, when the other person cannot see them, many Japanese people bow without thinking.\nFor visitors, learning to bow is a friendly way to show respect, though a simple, gentle bow is usually enough. Behind the gesture is a value at the heart of Japanese culture: showing care and consideration for others. A bow is a quiet way of saying, without any words, 'I respect you.'",
        summaryJa: "日本では、人々は言葉を要さない方法で挨拶し、感謝し、謝る——お辞儀だ。「お辞儀」と呼ばれる、体を前に少し曲げる動作は、日本の日常生活で最も重要な仕草の一つだ。単純に見えるが、お辞儀は多くの異なる意味を担いうる。なぜ人はお辞儀するのか。お辞儀は敬意の印だ。人は、誰かに会うとき、別れるとき、感謝するとき、謝るときにお辞儀する。相手に注意を払い、丁寧に接していることを示す。他国の人が握手するかもしれない多くの場面で、日本人は代わりにお辞儀する。興味深いことに、すべてのお辞儀が同じではない。小さな会釈は、気軽で親しげで、知り合い同士で使われる。より深いお辞儀は、教師・客・大切な来賓へ向けられ、より大きな敬意を示す。とても深く長いお辞儀は、真剣な謝罪や深い感謝を表しうる。お辞儀の角度と長さが明確なメッセージを送る。子どもは幼い頃からお辞儀を学び、それは自然な習慣になる。電話でさえ、相手に見えなくても、多くの日本人は考えずにお辞儀する。訪問者には、お辞儀を学ぶことは敬意を示す親しみやすい方法だ——とはいえ、単純で穏やかなお辞儀で普通は十分だ。この仕草の背後には、日本文化の中心にある価値がある——他者への気遣いと配慮を示すこと。お辞儀は、言葉なしに「あなたを尊敬します」と言う、静かな方法なのだ。",
        quiz: [
          { q: "「お辞儀」とは何をすることか？", options: ["体を前に少し曲げて敬意を示す", "手をたたく", "飛び上がる"], answer: 0 },
          { q: "お辞儀の意味を変えるものは？", options: ["お辞儀の角度と長さ", "服の色", "時間帯"], answer: 0 },
          { q: "お辞儀の背後にある価値は？", options: ["他者への気遣いと配慮", "競争心", "無関心"], answer: 0 }
        ]
      },
      {
        id: "d0826-5",
        title: "A Hidden Species in the Museum",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "Sometimes, an exciting scientific discovery is made not in a distant jungle, but in a quiet museum drawer. Recently, scientists used DNA from a nearly two-hundred-year-old museum specimen to confirm that a type of pangolin — a scaly, ant-eating animal — is actually a distinct species, one that had been hiding in plain sight for generations.\nHow can an old specimen reveal a new species? Museums around the world hold millions of preserved animals, some collected long ago. For a long time, scientists could only study them by looking at their shape and size. But modern tools can now read DNA — the genetic code inside cells — even from very old samples. By comparing this code with living animals, scientists can tell whether two similar-looking creatures are truly the same species or different ones.\nWhy does this matter? Knowing exactly how many species exist, and which is which, is important for protecting them. Pangolins are among the most threatened animals in the world, hunted heavily for their scales and meat. If one group is actually a separate, rarer species, it may need special protection to survive.\nThe discovery also shows the hidden value of museums. Specimens collected almost two centuries ago, by people who could never have imagined DNA, are still teaching us new things today.\nIt is a reminder that discovery is not only about exploring new places, but also about looking again, with new tools, at what we already have. Sometimes the next great finding is waiting quietly on a shelf, ready to reveal its secrets.",
        summaryJa: "時に、胸躍る科学の発見は、遠いジャングルでなく、静かな博物館の引き出しでなされる。最近、科学者は、約200年前の博物館標本のDNAを使い、あるセンザンコウ——鱗を持ちアリを食べる動物——が実は別個の種であることを確認した。何世代も、目の前に隠れていた種だ。古い標本がどうして新しい種を明かせるのか。世界中の博物館は、何百万もの保存された動物を持ち、その一部ははるか昔に集められた。長い間、科学者はその形と大きさを見て研究するしかなかった。だが現代の道具は今、非常に古い試料からさえDNA——細胞の中の遺伝暗号——を読める。この暗号を生きた動物と比べることで、似て見える二つの生き物が本当に同じ種か別かを見分けられる。なぜ重要か。正確に何種が存在し、どれがどれかを知ることは、それらを守るために重要だ。センザンコウは世界で最も脅かされた動物の一つで、鱗と肉のため激しく狩られる。もしある集団が実は別の、より稀な種なら、生き延びるために特別な保護が要るかもしれない。この発見は、博物館の隠れた価値も示す。DNAを想像すらできなかった人々が約200年前に集めた標本が、今日なお私たちに新しいことを教えている。それは、発見が新しい場所を探ることだけでなく、既にあるものを新しい道具で見直すことでもあると思い出させる。時に、次の偉大な発見は、棚の上で静かに、その秘密を明かす準備をして待っているのだ。",
        quiz: [
          { q: "古い博物館標本が新種を明かせる理由は？", options: ["現代の道具が古い試料からDNAを読めるから", "標本が動くから", "色が変わるから"], answer: 0 },
          { q: "何種が存在するかを知ることが重要な理由は？", options: ["それらを守るために重要だから", "無意味だから", "狩るために必要だから"], answer: 0 },
          { q: "本文が伝えることは？", options: ["発見は既にあるものを新しい道具で見直すことでもある", "新しい場所だけが重要", "博物館は無価値"], answer: 0 }
        ]
      }
    ]
  }
  ] };
