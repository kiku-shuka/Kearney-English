/* デイリー配信リーディング
 * 毎朝の自動ルーチンがこのファイルを丸ごと上書き生成する（直近 7 日分を保持）。
 * days は日付降順。各 day = { date: "YYYY-MM-DD", passages: [readingPassages と同スキーマ + genre] }
 * このファイル以外は手書きデータであり、ルーチンは触らない。
 */
window.KE_DATA = window.KE_DATA || {};

KE_DATA.dailyReading = { days: [
    {
    date: "2026-10-06",
    passages: [
      {
        id: "d1006-1",
        title: "Why Do Prices Change? Supply and Demand",
        level: "★★☆",
        genre: "ビジネス",
        text: "Have you ever noticed that the price of something can change from week to week? Strawberries may be cheap in summer but expensive in winter. A popular toy may cost more just before a holiday. Behind these changes is one of the most basic ideas in business: supply and demand.\n\n\"Demand\" means how much people want to buy something. \"Supply\" means how much of it is available to sell. When many people want a product but there is not much of it, the price usually goes up. When there is plenty of a product but few people want it, the price usually goes down. Prices are like a meeting point between what buyers want and what sellers have.\n\nThink about strawberries again. In summer, farmers grow a lot of them, so supply is high and prices fall. In winter, few strawberries are grown, so supply is low and prices rise. The fruit is the same, but the balance has changed.\n\nMany things can shift this balance. Bad weather can reduce supply and push prices up. A new fashion can suddenly increase demand. Even news and rumors can make people rush to buy or sell.\n\nUnderstanding supply and demand helps us make better choices. If you know prices often fall when supply is high, you might wait for the right season to buy. Businesses use the same idea to decide how much to produce and what to charge. Once you see it, you will notice supply and demand working almost everywhere.",
        summaryJa: "価格が変わる理由（需要と供給）について。イチゴは夏は安く冬は高いなど、値段は週ごとに変わる。その背景にあるのが需要と供給という基本概念だ。需要は人がどれだけ買いたいか、供給はどれだけ売りに出ているか。欲しい人が多く品物が少なければ価格は上がり、品物が多く欲しい人が少なければ下がる。悪天候は供給を減らし価格を上げ、流行は需要を急に高める。噂だけで人が殺到することもある。この仕組みを知れば買い時を選べ、企業も生産量や価格を決められる。",
        quiz: [
          { q: "What does 'demand' mean?", options: ["How much people want to buy something", "How much is available to sell", "The weather"], answer: 0 },
          { q: "Why are strawberries cheaper in summer?", options: ["Supply is high in summer", "Nobody wants them", "They taste worse"], answer: 0 },
          { q: "What can push prices up by reducing supply?", options: ["Bad weather", "More farmers", "Lower demand"], answer: 0 }
        ]
      },
      {
        id: "d1006-2",
        title: "How Electric Cars Work",
        level: "★★☆",
        genre: "テクノロジー",
        text: "More and more electric cars are appearing on the world's roads. They are quiet, they produce no smoke from a tailpipe, and many drivers love them. But how does an electric car actually work, and how is it different from a normal car?\n\nA traditional car burns petrol or diesel inside its engine. The burning fuel creates small explosions that push parts of the engine and turn the wheels. An electric car has no such engine. Instead, it uses a large battery and an electric motor. The battery stores electricity, and the motor uses that electricity to turn the wheels. There is no burning and no fuel tank.\n\nBecause an electric motor has few moving parts, electric cars are smooth and very quiet. They also need less repair, since there is no oil to change and fewer parts to wear out. Many people enjoy how quickly these cars speed up, as the motor gives power almost instantly.\n\nOf course, electric cars also have challenges. The battery must be charged, which can take longer than filling a tank with fuel. Drivers need places to charge, so countries are building more charging stations. The distance a car can travel on one charge is improving every year, but long trips still require planning.\n\nElectric cars are not perfect, and making their batteries uses energy and materials. Still, because they produce no exhaust while driving, many people see them as an important step toward cleaner city air and a quieter, greener future.",
        summaryJa: "電気自動車の仕組みについて。静かで排気ガスを出さない電気自動車が世界中で増えている。普通の車はエンジン内でガソリンや軽油を燃やし、その爆発で車輪を回す。電気自動車にはエンジンがなく、大きなバッテリーと電気モーターを使う。バッテリーに電気をため、モーターがその電気で車輪を回すので燃焼も燃料タンクもない。可動部が少なく静かで修理も少なく、加速も速い。一方で充電に時間がかかり、充電設備が必要で、1回の充電で走れる距離はまだ計画を要する。それでも走行中に排気を出さないため、きれいな空気への一歩と見られている。",
        quiz: [
          { q: "What does an electric car use instead of an engine that burns fuel?", options: ["A battery and an electric motor", "A larger fuel tank", "A steam engine"], answer: 0 },
          { q: "Why do electric cars need less repair?", options: ["They have fewer moving parts and no oil to change", "They are never driven", "They burn more fuel"], answer: 0 },
          { q: "What is one challenge of electric cars?", options: ["Charging can take longer than filling a tank", "They make a lot of smoke", "They cannot move at all"], answer: 0 }
        ]
      },
      {
        id: "d1006-3",
        title: "Why Countries Have Embassies",
        level: "★★★",
        genre: "世界情勢",
        text: "In many capital cities, you can find buildings that fly the flags of faraway nations. These are embassies, the official homes of one country inside another. Almost every country keeps embassies abroad. But what exactly do they do, and why are they so important?\n\nAn embassy represents its home country in a foreign land. It is led by an ambassador, a senior official who speaks for their government. Through the embassy, two countries can talk to each other directly, share messages, and build relationships. When leaders disagree, embassies allow them to keep communicating instead of cutting off contact.\n\nEmbassies also help ordinary people. If you lose your passport while travelling abroad, your country's embassy can help you. Embassies issue visas to foreigners who wish to visit, and they support citizens who face trouble, such as an accident or arrest in another country.\n\nAnother important job is building friendship between nations. Embassies organize cultural events, support trade, and help students and businesses connect across borders. In this quiet way, they turn distant countries into partners.\n\nEmbassies follow special international rules. For example, the police of the host country usually cannot enter an embassy without permission, and ambassadors receive special protection. These rules, agreed long ago, help diplomats work safely even during disagreements.\n\nIn a world where countries must share one planet, embassies are bridges. They remind us that even when nations differ, talking is almost always better than silence. Through these quiet offices, the business of peace continues every single day.",
        summaryJa: "各国が大使館を置く理由について。多くの首都には外国の旗を掲げた建物があり、これが大使館で、ほぼどの国も海外に置いている。大使館は本国を代表し、大使が政府を代弁する。これを通じて二国は直接話し、意見が対立しても連絡を絶たずに済む。旅行中にパスポートを失った自国民を助け、外国人へビザを発給し、事故や逮捕などの困難も支援する。文化行事や貿易、留学・ビジネスの橋渡しも担う。国際ルールで守られ、ホスト国の警察は許可なく立ち入れない。対立しても対話を続ける「橋」として、平和の営みを支えている。",
        quiz: [
          { q: "What is an embassy?", options: ["The official home of one country inside another", "A type of airport", "A kind of school"], answer: 0 },
          { q: "How can an embassy help ordinary travelers?", options: ["By helping if they lose a passport", "By selling cars", "By cooking meals"], answer: 0 },
          { q: "What special rule protects embassies?", options: ["Host police usually cannot enter without permission", "Anyone can enter freely", "They must close during disagreements"], answer: 0 }
        ]
      },
      {
        id: "d1006-4",
        title: "Japanese Gardens: Peace in a Small Space",
        level: "★★☆",
        genre: "日本",
        text: "Step through a gate into a Japanese garden, and the noisy city seems to disappear. Instead of straight lines and bright flowers, you find winding paths, quiet ponds, and carefully placed stones. A Japanese garden is designed not just to look beautiful, but to bring a feeling of calm. For hundreds of years, these gardens have been treasured places for rest and reflection.\n\nJapanese gardens often try to copy nature in a small space. A large rock may stand for a mountain, and a pond may represent the sea. White sand, raked into gentle lines, can suggest flowing water, even where there is no water at all. Nothing is placed by accident; every tree and stone has its purpose.\n\nUnlike some gardens that burst with color, Japanese gardens prefer soft greens and simple shapes. The beauty comes from balance and empty space. A single maple tree turning red in autumn can mean more than a field of flowers. Visitors are invited to slow down and notice small details.\n\nMany famous gardens are found beside temples, where monks once used them for quiet thought. Some gardens have no plants at all, only rocks and raked sand; these are known as dry gardens. People can sit for a long time, looking at the simple pattern and letting their minds grow still.\n\nIn a busy modern world, Japanese gardens offer a gift that never grows old: a small, peaceful place where a person can breathe slowly and feel at ease.",
        summaryJa: "日本庭園について。門をくぐると街の喧騒が消え、曲がりくねった小道や静かな池、丁寧に置かれた石が現れる。日本庭園は美しさだけでなく心の静けさをもたらすよう設計されている。狭い空間で自然を映し、大きな石は山、池は海を表し、白砂を熊手で描いた線は水の流れを思わせる。すべてに意味があり偶然に置かれたものはない。華やかな色より柔らかな緑と簡素な形を好み、余白と調和に美がある。寺のそばには僧が瞑想に使った庭も多く、植物を使わず石と砂だけの「枯山水」もある。忙しい現代でゆっくり呼吸できる安らぎの場を与えてくれる。",
        quiz: [
          { q: "What is the main purpose of a Japanese garden?", options: ["To bring a feeling of calm", "To grow food", "To hold sports events"], answer: 0 },
          { q: "In a Japanese garden, what might white raked sand suggest?", options: ["Flowing water", "A busy road", "A tall building"], answer: 0 },
          { q: "What is a 'dry garden'?", options: ["A garden with only rocks and raked sand", "A garden full of flowers", "A garden under water"], answer: 0 }
        ]
      },
      {
        id: "d1006-5",
        title: "How the Body Heals Itself",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "If you cut your finger, something amazing happens over the next few days. Without any medicine, the wound slowly closes, and new skin grows. Your body is repairing itself. This power to heal is one of the most remarkable things about living creatures, and scientists are still learning how it works.\n\nHealing begins almost at once. When you get a cut, tiny parts of your blood called platelets gather at the wound and help it stop bleeding by forming a clot. Soon after, special cells arrive to clean away dirt and germs. Then the body starts to build new tissue, closing the gap bit by bit until the skin is whole again.\n\nNot every part of the body heals equally well. Skin and bone can repair themselves quite effectively. Other tissues, such as the cartilage in our knees, heal very slowly or not at all. This is why injuries to joints can trouble people for years, and why scientists are working hard to find new ways to help such tissues grow back.\n\nOur daily habits affect how well we heal. Good food gives the body the materials it needs to build new cells. Sleep is also vital, because much repair happens while we rest. Smoking and too much stress, on the other hand, can slow healing down.\n\nThe human body is not a machine that simply wears out. It is always rebuilding itself, quietly and constantly. Understanding this helps doctors heal patients, and reminds us to care for the remarkable body we live in.",
        summaryJa: "体が自ら治る仕組みについて。指を切っても薬なしで数日で傷は閉じ、新しい皮膚ができる。この自己治癒力は生き物の驚くべき特徴で、科学者は今も研究している。傷ができるとすぐ、血液中の血小板が集まって血を固め、特別な細胞が汚れや細菌を除去し、やがて新しい組織を作って隙間を埋める。皮膚や骨はよく治るが、膝の軟骨などはほとんど治らず、関節の怪我が長く続く理由であり、科学者は再生法を探っている。食事は新しい細胞の材料となり、睡眠中に多くの修復が起こる。喫煙や過度なストレスは治りを遅らせる。体は絶えず自らを作り直している。",
        quiz: [
          { q: "What do platelets do when you get a cut?", options: ["Help stop bleeding by forming a clot", "Make the cut bigger", "Produce new bones"], answer: 0 },
          { q: "Which tissue heals very slowly or not at all?", options: ["Cartilage in the knees", "Skin", "Blood"], answer: 0 },
          { q: "What helps the body heal well?", options: ["Good food and enough sleep", "Smoking", "Lots of stress"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-10-05",
    passages: [
      {
        id: "d1005-1",
        title: "Why Companies Buy Other Companies",
        level: "★★★",
        genre: "ビジネス",
        text: "In the business news, you often hear that one company has bought another. A large technology firm might buy a small startup, or two banks might join to become one. These deals, known as mergers and acquisitions, can involve enormous amounts of money. But why would a company spend so much to buy another business?\n\nOne common reason is speed. Building a new product or entering a new market can take years. By buying a company that already does these things well, a firm can save time. For example, a big company might buy a small startup not just for its product, but for its talented team and new ideas.\n\nAnother reason is to reduce competition. If two companies that sell similar products join together, they may gain a larger share of the market. Sometimes a company buys a rival simply to become the clear leader in its field.\n\nCompanies also buy others to offer more to their customers. A firm that sells software might buy a company that provides customer support, so it can offer a complete service in one place.\n\nHowever, these deals are not always successful. Two companies may have very different ways of working, and combining them can be difficult. Workers may worry about losing their jobs, and customers may dislike the changes. Studies show that many large deals fail to bring the hoped-for benefits.\n\nSo when you read that one company has bought another, remember that behind the big numbers lies a careful bet on the future.",
        summaryJa: "企業が他社を買収する理由について。ニュースでよく聞く合併・買収（M&A）には巨額の資金が動く。主な理由の一つは時間の節約で、既に得意な会社を買えば新製品開発や新市場参入の年月を省ける。第二に競争の緩和で、似た会社が一つになれば市場シェアを拡大できる。第三に顧客への提供価値を高めるためで、関連サービスの会社を買い一括提供する。ただし企業文化の違いから統合は難しく、多くの大型買収は期待した成果を上げられないという研究もある。",
        quiz: [
          { q: "What are 'mergers and acquisitions'?", options: ["Deals where companies join or buy each other", "A type of tax", "A kind of product"], answer: 0 },
          { q: "Why might a big company buy a small startup?", options: ["To save time and get new ideas", "To close it immediately", "To avoid making money"], answer: 0 },
          { q: "What does the passage say about large deals?", options: ["They always succeed", "Many fail to bring the hoped-for benefits", "They never involve much money"], answer: 1 }
        ]
      },
      {
        id: "d1005-2",
        title: "Robots in Space: Helping Hands on the Station",
        level: "★★☆",
        genre: "テクノロジー",
        text: "High above the Earth, astronauts live and work on the International Space Station, or ISS. Life there is exciting, but also dangerous. Going outside the station, into open space, is one of the riskiest parts of the job. To make this work safer, engineers have built a special helper: the robotic arm.\n\nA robotic arm is a long mechanical limb attached to the outside of the station. It can bend and turn much like a human arm, but it is far stronger and does not need air, food, or rest. Astronauts control it from inside, using cameras and screens to see what the arm is doing.\n\nThese arms do many important jobs. They can catch arriving spacecraft and connect them gently to the station. They can move heavy equipment, hold tools, and even carry an astronaut to a work site. By doing the heavy and dangerous tasks, the arm lets humans stay safely inside more often.\n\nEngineers keep improving space robots. Newer designs can do more delicate work, and some may one day repair satellites or build large structures in orbit. Companies on Earth are now developing new robotic arms to send up to the station, adding fresh skills to the crew's toolkit.\n\nSpace is a hard place for humans, but it is a natural home for machines. Working together, astronauts and robots can do more than either could alone. In the future, these mechanical helpers may be essential partners as people travel even farther from Earth.",
        summaryJa: "宇宙ステーションのロボットアームについて。国際宇宙ステーション（ISS）での船外活動は最も危険な作業の一つで、それを安全にするためにロボットアームが作られた。人間の腕のように曲がり回るが、はるかに強く、空気も食事も休息も要らない。宇宙飛行士は内部からカメラと画面で操作する。到着した宇宙船を捕まえて連結し、重い機材を動かし、飛行士を作業場所へ運ぶ。危険で重い作業を担うことで人間は安全に内部にいられる。新型の開発も進み、将来は衛星修理や軌道上での建設も期待される。",
        quiz: [
          { q: "What is a robotic arm on the ISS used for?", options: ["Doing heavy and dangerous jobs", "Cooking food for astronauts", "Flying the station to Earth"], answer: 0 },
          { q: "How do astronauts control the arm?", options: ["From inside, using cameras and screens", "By going outside every time", "They cannot control it"], answer: 0 },
          { q: "What might future space robots do?", options: ["Repair satellites and build structures", "Replace the Earth", "Stop all space travel"], answer: 0 }
        ]
      },
      {
        id: "d1005-3",
        title: "How Countries Help Each Other After Disasters",
        level: "★★★",
        genre: "世界情勢",
        text: "When a powerful earthquake, flood, or storm strikes, the damage can be too great for one country to handle alone. Buildings fall, roads break, and thousands of people may need food, water, and medical care at once. In these moments, something remarkable often happens: other countries rush to help.\n\nThis kind of help is called international disaster relief. Within hours of a major disaster, nations may send rescue teams, doctors, and supplies. Specially trained workers, sometimes with dogs, search through fallen buildings for survivors. Aircraft bring tents, clean water, and food to areas that have lost everything.\n\nWhy do countries help strangers far away? One reason is simple human kindness; people naturally want to ease the suffering of others. There are also practical reasons. A country that helps others today may need help itself tomorrow, since disasters can strike anywhere. By working together, nations build trust and friendship that last beyond the emergency.\n\nCooperation is not always easy. Aid must be organized quickly, and teams from different countries must work together despite language differences. Sometimes supplies are delayed, or the greatest needs are hard to reach. International groups help by coordinating the effort so that help arrives where it is needed most.\n\nNatural disasters remind us how fragile life can be, but they also reveal something hopeful. Again and again, when one part of the world suffers, people from many nations reach out their hands. In the face of disaster, humanity often shows its best side.",
        summaryJa: "災害後に国どうしが助け合う仕組みについて。大地震や洪水、嵐が襲うと被害は一国では対処できないほど大きくなり、他国がすぐ支援に駆けつける。これを国際災害援助と呼び、数時間以内に救助隊や医師、物資が送られ、倒壊した建物で生存者を捜索し、テントや水、食料を届ける。理由は人としての思いやりに加え、災害はどこでも起こりうるため助け合いが信頼と友情を生むという実利もある。言語の違いなど調整は容易でないが、国際機関が全体を調整する。災害は命のもろさと同時に人類の善良さを映し出す。",
        quiz: [
          { q: "What is 'international disaster relief'?", options: ["Countries sending help after a disaster", "A type of natural disaster", "A country refusing to help"], answer: 0 },
          { q: "What is one reason countries help others?", options: ["Human kindness and future trust", "To make disasters worse", "To avoid friendship"], answer: 0 },
          { q: "What makes cooperation difficult?", options: ["Language differences and delays", "Having too many doctors", "Disasters being too small"], answer: 0 }
        ]
      },
      {
        id: "d1005-4",
        title: "The Art of Origami",
        level: "★★☆",
        genre: "日本",
        text: "Take a simple square of paper, make a few careful folds, and watch it turn into a crane, a flower, or a jumping frog. This is origami, the Japanese art of paper folding. The word comes from two Japanese words: ori, meaning to fold, and kami, meaning paper. With no scissors and no glue, origami creates beautiful shapes using only folds.\n\nOrigami has a long history in Japan. Hundreds of years ago, paper was expensive, so folded paper figures were used in special ceremonies. Over time, as paper became cheaper, origami grew into a popular hobby for both children and adults. Today it is known and loved all around the world.\n\nThe most famous origami model is the paper crane. In Japan, the crane is a symbol of good luck and long life. There is a well-known tradition that if a person folds one thousand paper cranes, their wish may come true. Many people fold cranes as a sign of hope and peace.\n\nOrigami is more than just a pastime. Teachers use it to help children learn about shapes and patience. Surprisingly, it has also helped science. Engineers study origami folds to design objects that must open and close, such as solar panels for satellites and tiny medical devices.\n\nFrom a child's toy to advanced technology, origami shows how something simple can be powerful. All it takes is a sheet of paper, steady hands, and a little imagination to create something wonderful.",
        summaryJa: "日本の折り紙について。一枚の正方形の紙を丁寧に折るだけで鶴や花、跳ねるカエルになる。「折り紙」は「折る」と「紙」を合わせた言葉で、はさみも糊も使わず折りだけで美しい形を作る。昔は紙が高価で儀式に使われたが、安くなると子どもから大人までの趣味になり、今や世界中で愛される。最も有名なのは鶴で、幸運と長寿の象徴とされ、千羽折ると願いがかなうという伝えもある。折り紙は図形や忍耐の学習にも役立ち、衛星の太陽光パネルや小型医療機器の設計など科学にも応用されている。",
        quiz: [
          { q: "What does the word 'origami' mean?", options: ["To fold paper", "To cut paper", "To paint paper"], answer: 0 },
          { q: "What does the paper crane symbolize in Japan?", options: ["Good luck and long life", "Bad weather", "Hard work"], answer: 0 },
          { q: "How has origami helped science?", options: ["It helps design objects that open and close", "It replaces all machines", "It stops space travel"], answer: 0 }
        ]
      },
      {
        id: "d1005-5",
        title: "The Nobel Prizes: Celebrating Great Ideas",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "Each year in early October, the world turns its attention to a special announcement. One by one, the winners of the Nobel Prizes are revealed. For many scientists, writers, and peacemakers, winning a Nobel Prize is the highest honor of their lives. But what are these famous prizes, and where did they come from?\n\nThe prizes are named after Alfred Nobel, a Swedish inventor who lived in the 1800s. Nobel became very rich by inventing dynamite. Late in life, he decided to use his fortune for a better purpose. In his will, he asked that prizes be given each year to people who had done the greatest good for humanity.\n\nToday there are prizes in several fields: physics, chemistry, medicine, literature, peace, and economics. Winners receive a gold medal, a certificate, and a large sum of money. More importantly, they receive the respect of people around the world.\n\nMany Nobel discoveries have changed our lives. Prizes have been given for understanding diseases, for new medicines, and for ideas that led to computers and the internet. The Peace Prize has honored people who worked to end wars or protect human rights.\n\nThe Nobel Prizes remind us that curiosity and kindness matter. They show that one person's hard work, whether in a laboratory or in a troubled region, can improve life for millions. Every October, the prizes celebrate the best of what human beings can achieve.",
        summaryJa: "ノーベル賞について。毎年10月初旬に受賞者が次々と発表され、多くの科学者や作家、平和活動家にとって人生最高の栄誉となる。賞はダイナマイトを発明して富を築いたスウェーデンの発明家アルフレッド・ノーベルにちなむ。彼は遺言で、人類に最大の貢献をした人へ毎年賞を贈るよう求めた。現在は物理学・化学・医学・文学・平和・経済の分野があり、受賞者は金メダルと賞状、賞金、そして世界中の敬意を受ける。病気の解明や新薬、コンピューターやインターネットにつながる発見などが称えられてきた。好奇心と思いやりの大切さを思い出させてくれる。",
        quiz: [
          { q: "Who was Alfred Nobel?", options: ["A Swedish inventor who invented dynamite", "A famous singer", "A king of Sweden"], answer: 0 },
          { q: "In which fields are Nobel Prizes given?", options: ["Only sports", "Physics, chemistry, medicine, literature, peace, economics", "Only music and art"], answer: 1 },
          { q: "What do the Nobel Prizes remind us, according to the passage?", options: ["That curiosity and kindness matter", "That money is useless", "That science is boring"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-10-04",
    passages: [
      {
        id: "d1004-1",
        title: "How Small Companies Compete with Big Ones",
        level: "★★☆",
        genre: "ビジネス",
        text: "When we think of famous companies, we often imagine huge businesses with thousands of workers. But most companies in the world are actually small. How can a small shop or a young company survive next to a giant competitor? The answer is that being small has its own advantages.\n\nOne big advantage is speed. A large company may need weeks of meetings to make a decision. A small company can often decide in a single afternoon. This means it can react quickly to new trends and customer needs. When the market changes, the small firm can change with it.\n\nAnother advantage is a personal touch. Large companies serve millions of customers, so each person can feel like just a number. A small business, on the other hand, can learn its customers' names, remember their preferences, and offer friendly service. Many people happily pay a little more for that kind of care.\n\nSmall companies also tend to focus. Instead of trying to sell everything, they often choose one thing and do it very well. A tiny bakery known for the best bread in town does not need to beat a huge supermarket at everything. It only needs to be the best at one thing.\n\nOf course, small firms face real challenges, such as limited money and fewer staff. But by using their speed, their personal service, and their focus, many small companies not only survive but grow. In business, size is not everything. Sometimes being small is exactly what makes a company special.",
        summaryJa: "小さな会社が大企業と競う方法について。世界の会社の多くは小規模だが、小ささには利点がある。第一に意思決定の速さで、市場の変化にすぐ対応できる。第二に顧客一人ひとりに寄り添う温かいサービスで、多くの人は多少高くてもそれを選ぶ。第三に一点集中で、何でも売ろうとせず得意分野を極める。資金や人手の制約はあるが、速さ・丁寧さ・集中を武器に生き残り成長する小企業は多い。",
        quiz: [
          { q: "According to the passage, what is one advantage of small companies?", options: ["They can make decisions quickly", "They have the most workers", "They never face challenges"], answer: 0 },
          { q: "Why do some customers prefer small businesses?", options: ["They are always cheaper", "They offer a personal touch", "They sell everything"], answer: 1 },
          { q: "What does the bakery example show?", options: ["Small firms should sell everything", "Being the best at one thing can work", "Supermarkets always win"], answer: 1 }
        ]
      },
      {
        id: "d1004-2",
        title: "How Computers Remember: Inside Data Storage",
        level: "★★☆",
        genre: "テクノロジー",
        text: "Every photo you take, every message you send, and every video you watch has to be stored somewhere. But where does all this information go, and how does a computer remember it? The answer lies in devices called storage drives.\n\nFor many years, most computers used hard disk drives, or HDDs. Inside an HDD, there is a round metal disk that spins very fast. A tiny arm moves across the disk and writes information by changing magnetic patterns on its surface. To read the data later, the arm checks those patterns again. Because the disk spins, an HDD has moving parts, a little like a record player.\n\nMore recently, many devices have started using solid-state drives, or SSDs. An SSD has no moving parts at all. Instead, it stores data in memory chips, using electricity to hold information even when the power is off. Because nothing has to spin or move, SSDs are usually faster and quieter, and they use less energy.\n\nSo why do HDDs still exist? The main reason is price. Hard drives can store huge amounts of data cheaply, which is useful for large systems that keep enormous files. Today, demand for storage is growing fast, partly because new technologies create more data than ever before.\n\nBoth types of drive do the same basic job: they keep our information safe until we need it. Whether spinning or silent, these quiet machines are the memory of the digital world, holding the photos, work, and messages that fill our daily lives.",
        summaryJa: "コンピューターがデータを保存する仕組みについて。写真やメッセージなどの情報は記憶装置に保存される。長年使われてきたハードディスク（HDD）は、高速回転する金属の円盤に磁気のパターンで情報を書き込み、腕の部品が読み書きする。近年普及するソリッドステートドライブ（SSD）は可動部がなく、メモリーチップに電気で情報を保持するため、速く静かで省電力。それでもHDDが残るのは、大量のデータを安く保存できるから。需要は急速に増えている。",
        quiz: [
          { q: "How does a hard disk drive (HDD) store information?", options: ["By spinning a disk and changing magnetic patterns", "By printing on paper", "By using sound waves"], answer: 0 },
          { q: "What is one advantage of an SSD over an HDD?", options: ["It has more moving parts", "It is usually faster and quieter", "It is always cheaper"], answer: 1 },
          { q: "Why do HDDs still exist today?", options: ["They can store lots of data cheaply", "They never break", "They use no electricity"], answer: 0 }
        ]
      },
      {
        id: "d1004-3",
        title: "Working Together to Protect the World's Forests",
        level: "★★★",
        genre: "世界情勢",
        text: "Forests cover about a third of the world's land, and they do far more than provide wood. They clean our air, store huge amounts of carbon, and are home to most of the planet's animals and plants. Yet forests are disappearing in many regions, cut down for farming, roads, and cities. Protecting them has become one of the world's shared challenges.\n\nThe problem is difficult because forests do not belong to one country alone. The air they clean and the climate they cool affect everyone. When a forest is lost in one place, the whole planet feels the result. For this reason, nations have begun to work together rather than act alone.\n\nCountries cooperate in several ways. Some richer nations provide money to poorer ones that agree to protect their forests instead of clearing them. International agreements set shared goals, such as slowing the loss of trees by a certain year. Scientists from many countries share satellite images that track exactly where forests are shrinking.\n\nRecent research also offers hope. One long study found that forests which are carefully managed, rather than left completely alone, can sometimes grow larger trees and store even more carbon. This suggests that protecting forests does not always mean doing nothing; wise management can help.\n\nChallenges remain, including illegal logging and the pressure to use land for food. But forests show clearly how connected the world has become. By cooperating across borders, countries have a real chance to keep these green treasures alive for future generations.",
        summaryJa: "世界の森林を守るための国際協力について。森林は陸地の約3分の1を覆い、空気を浄化し、大量の炭素を蓄え、多くの動植物の住みかとなる。だが農地や道路のために各地で減少している。森林の恩恵は国境を越えて全人類に及ぶため、各国は協力し始めた。豊かな国が資金を出す、国際的な目標を定める、衛星画像を共有するなどの方法がある。近年の研究では、適切に管理された森林がより大きな木を育て炭素を多く蓄える例も示された。課題は残るが、協力により森を次世代へ残せる。",
        quiz: [
          { q: "Why is protecting forests a shared world challenge?", options: ["Forests affect the whole planet, not one country", "Only one country has forests", "Forests are not important"], answer: 0 },
          { q: "What is one way countries cooperate on forests?", options: ["Richer nations fund poorer ones to protect forests", "They ignore the problem", "They cut down more trees together"], answer: 0 },
          { q: "What did the recent long study suggest?", options: ["Forests should always be left alone", "Careful management can help forests store more carbon", "Trees cannot store carbon"], answer: 1 }
        ]
      },
      {
        id: "d1004-4",
        title: "Japan's School Lunch Tradition",
        level: "★★☆",
        genre: "日本",
        text: "In many countries, children bring lunch from home or buy it at school. In Japan, something different happens almost every day. Most public elementary and junior high schools serve a hot lunch, called kyushoku, and it is far more than just a meal. It is treated as part of a child's education.\n\nA typical school lunch is balanced and healthy. It often includes rice or bread, a main dish such as fish or meat, a vegetable side, soup, and a small carton of milk. Menus are planned by trained staff to give children the right amount of energy and nutrition. Meals usually cost little, and the food is cooked fresh, sometimes using vegetables grown nearby.\n\nWhat surprises many visitors is who serves the food. The students themselves do it. Wearing white aprons and caps, a small group brings the food to the classroom and serves their classmates. After eating, everyone helps clean up. Children also learn to say itadakimasu before the meal and gochisosama after, as a way of giving thanks.\n\nThrough this daily routine, students learn more than good eating habits. They learn responsibility, teamwork, and respect for the people who grow and prepare food. They also discover new dishes they might never try at home.\n\nFor many Japanese adults, school lunch is a warm memory of childhood. It shows how a simple meal can teach important lessons, filling both the stomach and the heart, one school day at a time.",
        summaryJa: "日本の学校給食の伝統について。多くの公立小中学校では毎日温かい給食が出され、単なる食事でなく教育の一部とされる。ご飯やパン、主菜、野菜、汁物、牛乳などバランスがよく、栄養士が献立を考え、安価で作りたてだ。驚かれるのは配膳を児童自身が行う点で、白いエプロンと帽子で友達に配り、食後は皆で片づける。「いただきます」「ごちそうさま」で感謝も学ぶ。責任感や協力、食への敬意、新しい料理との出会いなど、多くを学べる。",
        quiz: [
          { q: "What is special about Japanese school lunch (kyushoku)?", options: ["It is treated as part of education", "It is always brought from home", "It is never healthy"], answer: 0 },
          { q: "Who serves the food in Japanese schools?", options: ["Visitors from other countries", "The students themselves", "Only the teachers"], answer: 1 },
          { q: "What do students learn through school lunch, besides eating habits?", options: ["Responsibility and teamwork", "How to skip cleaning", "How to cook at restaurants"], answer: 0 }
        ]
      },
      {
        id: "d1004-5",
        title: "Why Your Gut Bacteria Matter",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "Inside your body, especially in your gut, live trillions of tiny living things called bacteria. The idea might sound unpleasant, but most of these bacteria are not harmful at all. In fact, scientists are learning that they are essential for our health. Together, this huge community is sometimes called the gut microbiome.\n\nThese bacteria do many useful jobs. They help break down the food we eat, especially fiber from fruits and vegetables that our bodies cannot digest alone. In return, they produce helpful substances, including certain vitamins. A healthy gut also supports the immune system, helping the body fight off illness.\n\nWhat surprises many people is that gut bacteria may affect more than digestion. Recent research suggests a link between the gut and the brain. Some studies have found that the types of bacteria in our gut may influence memory, mood, and even how quickly the brain ages. Scientists are still studying exactly how this works, but the connection is an exciting area of research.\n\nHow can we keep our gut bacteria healthy? The advice is simple and familiar. Eating a wide variety of plants, such as vegetables, fruits, beans, and whole grains, gives the good bacteria the food they need. Fermented foods like yogurt can help too. Too much sugar and processed food, on the other hand, may harm them.\n\nSo the next time you eat a colorful salad, remember that you are feeding not just yourself, but trillions of tiny helpers working quietly inside you.",
        summaryJa: "腸内細菌の重要性について。体内、特に腸には無数の細菌がすみ、その多くは有害ではなく健康に欠かせない。この集団は「腸内細菌叢（マイクロバイオーム）」と呼ばれる。細菌は食物繊維の分解を助け、ビタミンなど有益な物質を作り、免疫も支える。近年の研究では腸と脳のつながりが示され、記憶や気分、脳の老化速度にも影響する可能性がある。腸内細菌を健やかに保つには、野菜・果物・豆・全粒穀物など多様な植物や発酵食品が役立ち、糖分や加工食品の取りすぎは良くない。",
        quiz: [
          { q: "What is the 'gut microbiome'?", options: ["The community of bacteria in our gut", "A type of food", "A kind of vitamin pill"], answer: 0 },
          { q: "What do recent studies suggest about gut bacteria?", options: ["They only cause illness", "They may affect memory and mood", "They have no effect on the body"], answer: 1 },
          { q: "How can we keep gut bacteria healthy?", options: ["Eat lots of sugar", "Eat a wide variety of plants", "Avoid all vegetables"], answer: 1 }
        ]
      }
    ]
    },
    {
    date: "2026-10-03",
    passages: [
      {
        id: "d1003-1",
        title: "Could a Four-Day Work Week Work?",
        level: "★★☆",
        genre: "ビジネス",
        text: "For many years, most people have worked five days a week. But recently, some companies have started testing a new idea: the four-day work week. The plan is simple. Workers come to the office for four days instead of five, but they still receive the same pay. The goal is to give people more time to rest and enjoy life, while keeping the business productive.\n\nCompanies that have tried this report some surprising results. Many workers say they feel less tired and more focused. With an extra day off, they can spend time with family, exercise, or finish personal tasks. As a result, some businesses have found that their staff get the same amount of work done in four days as they used to do in five.\n\nOf course, the idea does not fit every job. In hospitals, shops, and factories, someone must be present every day. For these workplaces, a four-day week is harder to plan. Managers also worry that four long days may feel more stressful than five shorter ones.\n\nStill, interest in the idea keeps growing. Several countries have run large trials, and many companies that joined them decided to continue. Experts say the key is good planning: clear goals, fewer useless meetings, and trust between managers and workers. Whether or not it becomes normal, the four-day week is making people rethink how we balance work and life.",
        summaryJa: "週4日勤務の実験について。給与を減らさず勤務を4日にすると、社員の集中力が上がり、5日分と同じ仕事を終えられた例もある。ただし病院や店舗など毎日人が必要な職場では導入が難しく、1日の労働が長くなる心配もある。成功の鍵は明確な目標、無駄な会議の削減、上司と部下の信頼だと専門家は指摘する。",
        quiz: [
          { q: "What is the main idea of the four-day work week?", options: ["Working four days for the same pay", "Working four days for less pay", "Working more hours each day forever"], answer: 0 },
          { q: "Why is the idea hard for hospitals and shops?", options: ["They have too many workers", "Someone must be present every day", "They do not need any staff"], answer: 1 },
          { q: "According to experts, what helps the four-day week succeed?", options: ["More long meetings", "Good planning and trust", "Lower pay for workers"], answer: 1 }
        ]
      },
      {
        id: "d1003-2",
        title: "The Little Squares That Store Big Information",
        level: "★★☆",
        genre: "テクノロジー",
        text: "You have probably seen them everywhere: small black-and-white squares on posters, menus, and product boxes. These are QR codes, and they have become part of daily life. But what exactly are they, and how do they work?\n\nA QR code is a type of barcode. A normal barcode, like the ones on food packages, stores information in a line of thin and thick stripes. A QR code goes further. Because it uses a square pattern, it can hold data in two directions, across and down. This means it can store much more information, such as a website address, a message, or payment details.\n\nWhen you point your phone's camera at a QR code, the camera reads the pattern of black and white dots. Software inside the phone turns that pattern into useful information, often a link to a website. In just a second, you can open a menu, pay for a bus ticket, or join a wireless network.\n\nQR codes were first created in Japan in the 1990s to track car parts in factories. For years, few people outside industry used them. Then smartphones made them easy to scan, and their use grew quickly around the world.\n\nOne reason they are so popular is that they are cheap and simple to make. Anyone can create one for free. However, experts warn that people should be careful. A QR code could lead to a harmful website, so it is wise to check where a code takes you before trusting it.",
        summaryJa: "QRコードの仕組みについて。通常のバーコードは線で情報を記録するが、QRコードは縦横の四角いパターンでより多くの情報を持てる。スマホのカメラが白黒の点を読み取り、ウェブサイトのリンクなどに変換する。1990年代に日本で自動車部品の管理用に作られ、スマホの普及で世界中に広がった。安く簡単に作れる一方、危険なサイトへ誘導される恐れもあるため注意が必要。",
        quiz: [
          { q: "Why can a QR code store more than a normal barcode?", options: ["It uses color", "It stores data in two directions", "It is always bigger"], answer: 1 },
          { q: "Where and why were QR codes first created?", options: ["In Japan, to track car parts", "In the US, for shopping", "In Europe, for banks"], answer: 0 },
          { q: "What warning do experts give about QR codes?", options: ["They are too expensive", "They may lead to harmful websites", "They cannot be scanned by phones"], answer: 1 }
        ]
      },
      {
        id: "d1003-3",
        title: "Why Countries Trade With Each Other",
        level: "★★★",
        genre: "世界情勢",
        text: "No country can produce everything its people need. Some nations have oil, others grow coffee, and others build cars or computers. Because of these differences, countries trade. International trade means buying and selling goods and services across borders, and it shapes the world economy every day.\n\nThe main reason for trade is simple: countries are good at different things. A nation with a warm climate may grow fruit easily, while a colder country may be better at making machines. When each country focuses on what it does well and trades for the rest, both sides can gain. People get a wider choice of products, often at lower prices.\n\nTrade also connects people. A phone in your pocket may contain metals from one continent, parts made on another, and software written somewhere else. This web of connections can bring countries closer and encourage cooperation.\n\nHowever, trade is not always smooth. Sometimes governments add taxes, called tariffs, on goods from abroad to protect their own companies. Other times, disagreements between countries slow trade down. These problems can raise prices and create tension.\n\nDespite the challenges, most experts agree that trade has helped reduce poverty and spread new ideas around the world. The key question for the future is how to make trade fair, so that both rich and poor nations benefit. As the world becomes more connected, understanding trade helps us understand the news, and the prices in our own shops.",
        summaryJa: "国どうしが貿易をする理由について。どの国もすべてを自給できず、得意分野が異なるため、各国が得意なものに集中して交換すると双方が得をし、消費者の選択肢も広がる。貿易は国どうしを結びつけるが、関税や対立で滞ることもあり、価格上昇や緊張を生む。それでも貿易は貧困削減や新しい考えの普及に役立ってきたとされ、今後は公平な貿易の実現が課題となる。",
        quiz: [
          { q: "Why do countries trade according to the passage?", options: ["They are good at different things", "They all produce the same goods", "They want fewer choices"], answer: 0 },
          { q: "What is a tariff?", options: ["A free gift to other countries", "A tax on goods from abroad", "A type of product"], answer: 1 },
          { q: "What do most experts say trade has done?", options: ["Made the world less connected", "Helped reduce poverty and spread ideas", "Stopped all cooperation"], answer: 1 }
        ]
      },
      {
        id: "d1003-4",
        title: "Japan's Famous Vending Machines",
        level: "★★☆",
        genre: "日本",
        text: "Walk down almost any street in Japan, and you will soon see a vending machine glowing by the roadside. Japan has one of the highest numbers of vending machines in the world, millions of them, found in cities, small villages, and even on quiet mountain paths. For visitors, they are one of the country's most surprising sights.\n\nMost machines sell drinks, both hot and cold. On a winter morning, you can buy a warm can of tea or coffee; in summer, a cold bottle of water appears in seconds. But drinks are only the beginning. Some machines sell ice cream, hot meals, fresh eggs, umbrellas, or even flowers. Each one is like a tiny shop that never closes.\n\nWhy are there so many? One reason is safety. Japan has a very low crime rate, so machines can stand outside all night without being damaged or robbed. Another reason is space. Shops can be small and rents high, so a machine on the street is a cheap way to sell goods. Japanese people also value speed and convenience, and a machine gives both.\n\nThe machines are also known for being clean and reliable. They rarely break, and the area around them is usually tidy. In recent years, some have added touch screens and cashless payment, making them even easier to use.\n\nFor many people, these machines are a small symbol of daily life in Japan: quiet, convenient, and always ready to help, day or night.",
        summaryJa: "日本の自動販売機について。日本は世界有数の設置台数を誇り、街中から山道まで見られる。温かい飲み物や冷たい飲み物のほか、アイス、温かい食事、卵、傘、花を売る機械もある。多い理由は、治安が良く屋外に置いても安全なこと、店舗の家賃が高く狭いこと、人々が速さと便利さを重んじることにある。清潔で故障も少なく、近年はタッチパネルやキャッシュレス決済も増え、日常生活の象徴となっている。",
        quiz: [
          { q: "What do most Japanese vending machines sell?", options: ["Only flowers", "Drinks, both hot and cold", "Only umbrellas"], answer: 1 },
          { q: "What is one reason Japan has so many machines?", options: ["A very low crime rate", "Very large shops", "A lack of electricity"], answer: 0 },
          { q: "What change has happened to machines in recent years?", options: ["They stopped selling drinks", "They added cashless payment", "They became dirtier"], answer: 1 }
        ]
      },
      {
        id: "d1003-5",
        title: "Why Our Bodies Need Sleep",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "Every night, we spend hours doing something that may seem like a waste of time: sleeping. Yet scientists agree that sleep is one of the most important things we do. Without it, our bodies and minds cannot work well. But what really happens while we sleep?\n\nSleep is not simply switching off. During the night, the brain stays busy. It sorts through the day's events and decides what to remember and what to forget. This is why a good night's sleep helps us learn and remember new things. Students who sleep well before a test often do better than those who stay up late studying.\n\nThe body also repairs itself during sleep. Muscles recover, and the body fights illness more effectively. People who do not get enough sleep are more likely to catch colds and feel stressed. Over many years, poor sleep can lead to serious health problems.\n\nHow much sleep do we need? It depends on age. Young children need the most, often ten hours or more. Most adults feel best with seven to nine hours each night. Yet many people around the world sleep less than this because of work, worry, or screens that keep them awake.\n\nExperts suggest a few simple habits for better sleep: go to bed at the same time each night, keep the room dark and cool, and avoid phones before bed. Good sleep is free, and it may be one of the best gifts we can give our health.",
        summaryJa: "睡眠が必要な理由について。睡眠は時間の無駄に見えても心身にとって非常に重要で、眠っている間も脳は働き、その日の出来事を整理して記憶を残すため、よく眠ると学習や記憶に役立つ。体も回復し病気と闘う力が高まる。必要な時間は年齢によって異なり、子どもは10時間以上、大人は7〜9時間が目安。よい睡眠のコツは、毎日同じ時間に寝る、部屋を暗く涼しく保つ、寝る前にスマホを見ないこと。",
        quiz: [
          { q: "What does the brain do during sleep?", options: ["It switches off completely", "It sorts and stores memories", "It stops all activity"], answer: 1 },
          { q: "How much sleep do most adults need?", options: ["Three to four hours", "Seven to nine hours", "Twelve hours"], answer: 1 },
          { q: "What is one tip for better sleep?", options: ["Use phones in bed", "Keep the room bright", "Go to bed at the same time each night"], answer: 2 }
        ]
      }
    ]
    },
    {
    date: "2026-10-02",
    passages: [
      {
        id: "d1002-1",
        title: "Why the Unemployment Rate Matters",
        level: "★★★",
        genre: "ビジネス",
        text: "Every month, governments announce an important number: the unemployment rate. News reports treat it as a major event, and markets can rise or fall because of it. But what does this number really mean, and why does it matter so much?\n\nThe unemployment rate measures the share of people who want to work and are looking for a job, but cannot find one. If the rate is low, it usually means jobs are plentiful and the economy is healthy. If the rate is high, it means many people are struggling to find work, a sign that the economy may be weak.\n\nThis single number affects almost everyone. For workers, it hints at how easy or hard it will be to find or keep a job. For businesses, it signals whether customers will have money to spend. Governments and central banks watch it closely, using it to help decide whether to change interest rates or support the economy.\n\nThe number is not perfect, however. It does not count people who have given up looking for work, or those stuck in part-time jobs who want full-time ones. So wise observers look beyond the single figure to the fuller picture.\n\nStill, the unemployment rate remains one of the clearest windows into the health of an economy. Behind the percentage are millions of real people and their hopes for a steady job. That is why, each month, the world pauses to read this quiet but powerful number.",
        summaryJa: "毎月、政府は重要な数字を発表する。失業率だ。ニュースはこれを大きな出来事として扱い、市場はこれで上下しうる。だがこの数字は本当は何を意味し、なぜそれほど重要なのか。失業率は、働きたくて仕事を探しているのに見つけられない人の割合を測る。率が低ければ、たいてい仕事が豊富で経済が健康なことを意味する。率が高ければ、多くの人が仕事探しに苦労しており、経済が弱いかもしれない兆しだ。この一つの数字はほぼ全員に影響する。働く人には、仕事を見つけ保つのがどれほど易しいか難しいかを示唆する。企業には、客にお金を使う余裕があるかを示す。政府や中央銀行はこれを注視し、金利を変えるか経済を支えるかの判断に使う。だがこの数字は完璧ではない。仕事探しを諦めた人や、フルタイムを望むのにパートにとどまる人は数えない。だから賢い観察者は、一つの数字を越えてより全体像を見る。それでも失業率は、経済の健康をのぞく最も明確な窓の一つだ。パーセントの背後には、何百万もの実在の人々と、安定した仕事への願いがある。だから毎月、世界はこの静かだが力強い数字を読むために立ち止まる。",
        quiz: [
          { q: "What does the unemployment rate measure?", options: ["The share of people who want to work and are looking but cannot find a job", "The number of companies in a country", "The price of goods"], answer: 0 },
          { q: "What does a low unemployment rate usually mean?", options: ["Jobs are plentiful and the economy is likely healthy", "The economy is collapsing", "Nobody wants to work"], answer: 0 },
          { q: "Why is the number not perfect?", options: ["It misses people who gave up looking or want full-time but work part-time", "It counts everyone perfectly", "It is always wrong"], answer: 0 }
        ]
      },
      {
        id: "d1002-2",
        title: "How Batteries Store Energy",
        level: "★★★",
        genre: "テクノロジー",
        text: "Batteries are everywhere in modern life, powering our phones, toys, cars, and countless other devices. We charge them, use them, and charge them again, often without thinking about the clever chemistry inside. So how does a small battery actually store and release energy?\n\nThe secret lies in a chemical reaction. Inside a battery are two different materials, called electrodes, kept apart but connected by a special substance. When the battery is working, a chemical reaction makes tiny particles called electrons want to travel from one electrode to the other. But they cannot pass through the middle directly. Instead, they must flow out through the device — your phone or flashlight — doing useful work along the way, before returning to the battery. That flow of electrons is electricity.\n\nIn a rechargeable battery, this process can be reversed. When you plug it in to charge, electricity is pushed back into the battery, driving the chemical reaction backward and storing energy again, ready for next time.\n\nDifferent batteries use different chemicals, which affects how much energy they hold, how fast they charge, and how long they last. Scientists are always working to make batteries that store more power, charge faster, and are safer and cleaner.\n\nBetter batteries are now one of the most important goals in technology. They are the key to electric cars, to storing energy from the sun and wind, and to a future that relies less on burning fuel. All of it starts with that quiet chemistry in a little box.",
        summaryJa: "電池は現代生活の至る所にあり、電話や玩具、車、無数の機器を動かす。私たちは充電し、使い、また充電する。中の巧みな化学を考えもせずに。では小さな電池は実際どうエネルギーを蓄え放つのか。秘密は化学反応にある。電池の中には電極という二つの異なる材料があり、離されつつ特別な物質でつながれている。電池が働くとき、化学反応が電子という小さな粒子を一方の電極から他方へ移りたがらせる。だが真ん中を直接通れない。代わりに機器——電話や懐中電灯——を通って流れ出し、道中で有用な仕事をしてから電池に戻る。その電子の流れが電気だ。充電式電池では、この過程を逆にできる。充電のためつなぐと、電気が電池に押し戻され、化学反応を逆向きに進めて再びエネルギーを蓄え、次に備える。電池ごとに使う化学物質が異なり、蓄える量、充電の速さ、持ちに影響する。科学者は常に、より多く蓄え、速く充電し、より安全で清潔な電池を作ろうとしている。より良い電池は今、技術で最も重要な目標の一つだ。電気自動車や、太陽と風からのエネルギーの貯蔵、燃料を燃やすことに頼らない未来の鍵だ。すべては小さな箱の中の静かな化学から始まる。",
        quiz: [
          { q: "What makes a battery work?", options: ["A chemical reaction that drives electrons from one electrode to the other", "A tiny fire inside", "A small motor"], answer: 0 },
          { q: "Why must the electrons flow out through your device?", options: ["They cannot pass through the middle directly, so they do useful work on the way", "Because the device is empty", "They never move at all"], answer: 0 },
          { q: "What happens in a rechargeable battery when you charge it?", options: ["Electricity is pushed back in, reversing the reaction and storing energy again", "The battery melts", "Nothing happens"], answer: 0 }
        ]
      },
      {
        id: "d1002-3",
        title: "One World, One Measure",
        level: "★★☆",
        genre: "世界情勢",
        text: "Imagine trying to build a bridge if every worker used a different idea of how long a meter is, or trying to sell food if a kilogram meant something different in each shop. Trade, science, and travel would fall into chaos. To prevent this, the world has agreed on shared units of measurement — a quiet agreement that holds much of modern life together.\n\nMost countries use a system called the metric system, built on simple, shared units: the meter for length, the kilogram for weight, the second for time, and a few others. Because these units mean exactly the same thing everywhere, a part made in one country will fit a machine built in another, and a scientist's result can be checked by others across the globe.\n\nAgreeing on measurement is harder than it sounds. For a long time, units were based on physical objects, like a special metal bar kept to define the meter. But such objects can change slightly over time. So scientists have now redefined the basic units using unchanging facts of nature, making them stable forever and available to anyone, anywhere.\n\nA few countries still use older systems for daily life, which can cause confusion, and even costly mistakes, when working across borders.\n\nShared measurement is one of humanity's great quiet achievements. It lets people who have never met, speaking different languages, build, trade, and discover together — all because they agreed, long ago, on exactly how much a meter really is.",
        summaryJa: "もし作業員ごとに1メートルの長さの考えが違えば橋を建てるのを、店ごとに1キログラムの意味が違えば食べ物を売るのを想像してほしい。貿易も科学も旅も混乱に陥る。これを防ぐため、世界は共有の測定単位に合意した——現代生活の多くを支える静かな合意だ。多くの国はメートル法という仕組みを使い、簡素で共有された単位に基づく。長さのメートル、重さのキログラム、時間の秒など。これらの単位はどこでも全く同じ意味なので、ある国で作った部品が別の国で作った機械に合い、科学者の結果を世界中の他者が確認できる。測定への合意は聞こえるより難しい。長年、単位はメートルを定義する特別な金属棒のような物体に基づいた。だがそうした物体は時とともにわずかに変わりうる。そこで科学者は今、基本単位を変わらない自然の事実を使って再定義し、永遠に安定し、誰でもどこでも使えるようにした。いくつかの国は日常で古い仕組みをなお使い、国境を越えて作業するとき混乱や、時に高くつく誤りを生みうる。共有の測定は人類の偉大な静かな達成の一つだ。会ったこともなく違う言語を話す人々が、共に建て、取引し、発見できる——はるか昔に、1メートルが正確にどれだけかに合意したからだ。",
        quiz: [
          { q: "Why did the world agree on shared units of measurement?", options: ["Without them, trade, science, and travel would fall into chaos", "To make life more confusing", "Because units do not matter"], answer: 0 },
          { q: "What is the metric system built on?", options: ["Simple shared units like the meter, kilogram, and second", "A different unit in every shop", "No units at all"], answer: 0 },
          { q: "How have scientists made the basic units stable forever?", options: ["By redefining them using unchanging facts of nature instead of physical objects", "By hiding the metal bar", "By changing them every year"], answer: 0 }
        ]
      },
      {
        id: "d1002-4",
        title: "The Shinkansen: Japan's Bullet Train",
        level: "★★☆",
        genre: "日本",
        text: "Gliding across Japan at speeds over 300 kilometers per hour, the Shinkansen, often called the bullet train, is one of the country's proudest achievements. With its long, pointed nose and smooth white body, it looks as fast as it is. Since it first began running decades ago, it has changed the way people travel in Japan.\n\nThe Shinkansen is famous for more than its speed. It is also remarkably safe and punctual. In its long history, it has carried billions of passengers with an outstanding safety record. The trains are so reliable that the average delay is measured in seconds, not minutes. A train that is even slightly late is considered a serious matter.\n\nHow is this possible? The answer is careful engineering and discipline. The tracks are specially built and smooth, the trains are constantly checked, and the whole system is run with great precision. Even the cleaning of the trains between trips is done with impressive speed and care.\n\nThe bullet train also changed life and business. Cities far apart became close, letting people live in one place and work in another, or do business across the country in a single day.\n\nToday, many countries have built their own high-speed trains, but the Shinkansen remains a symbol of what careful planning can achieve. It shows a very Japanese idea: that speed, safety, and order can travel together — a smooth, swift arrow connecting the whole nation.",
        summaryJa: "時速300キロを超える速さで日本を駆け抜ける新幹線、しばしば弾丸列車と呼ばれるこれは、国の最も誇る達成の一つだ。長く尖った鼻と滑らかな白い車体で、速さそのままに見える。数十年前に初めて走って以来、日本の旅の仕方を変えた。新幹線は速さ以上のことで有名だ。驚くほど安全で時間に正確でもある。長い歴史で、卓越した安全記録とともに何十億もの乗客を運んできた。列車はとても信頼でき、平均遅延は分でなく秒で測られる。少しでも遅れる列車は重大事とみなされる。どうしてか。答えは入念な工学と規律だ。線路は特別に造られ滑らかで、列車は絶えず点検され、仕組み全体が高い精度で運行される。運行間の車内清掃さえ、見事な速さと心配りで行われる。弾丸列車は暮らしと事業も変えた。遠く離れた都市が近くなり、ある場所に住み別の場所で働いたり、一日で国中を商売したりできるようになった。今や多くの国が独自の高速列車を造ったが、新幹線は入念な計画が成し得るものの象徴であり続ける。速さ、安全、秩序が共に進めるという実に日本的な発想を示す。国全体をつなぐ、滑らかで速い矢だ。",
        quiz: [
          { q: "What is the Shinkansen famous for, besides its speed?", options: ["Being remarkably safe and punctual", "Being very slow", "Having no passengers"], answer: 0 },
          { q: "How late is the average Shinkansen?", options: ["Its average delay is measured in seconds, not minutes", "Several hours", "A full day"], answer: 0 },
          { q: "How did the bullet train change life and business?", options: ["Far-apart cities became close, so people could live and work in different places", "It made travel impossible", "It stopped all business"], answer: 0 }
        ]
      },
      {
        id: "d1002-5",
        title: "How We Taste Food",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "Biting into a juicy orange or a piece of chocolate brings a burst of flavor. We enjoy taste every day, but few of us think about how it actually works. The sense of taste is a clever partnership between the tongue, the nose, and the brain.\n\nThe main work begins on your tongue, which is covered with thousands of tiny bumps. Hidden in these bumps are even smaller structures called taste buds. When food dissolves in your mouth, the taste buds detect it and send signals to the brain. Scientists have found that taste buds mainly sense five basic tastes: sweet, sour, salty, bitter, and a savory taste called umami, found in foods like soup and cheese.\n\nBut here is a surprise: much of what we call \"taste\" is really smell. As you chew, tiny scents travel up to your nose from inside your mouth. The brain combines these smells with the signals from your tongue to create the rich flavors you enjoy. This is why food tastes dull and flat when you have a cold and your nose is blocked.\n\nTaste is not just for pleasure. Long ago, it helped keep our ancestors safe. A sweet taste signaled energy-rich food, while a bitter taste warned of something that might be harmful.\n\nSo the next time you enjoy a delicious meal, remember the quiet teamwork behind it. Your tongue, your nose, and your brain are working together to turn simple food into a world of flavor.",
        summaryJa: "みずみずしいオレンジや一片のチョコレートをかじると、風味がはじける。私たちは毎日味を楽しむが、それが実際どう働くか考える人は少ない。味覚は舌と鼻と脳の巧みな協力だ。主な働きは舌で始まる。舌は何千もの小さな突起で覆われている。この突起に隠れて、味蕾というさらに小さな構造がある。食べ物が口で溶けると、味蕾がそれを感知し脳に信号を送る。科学者は、味蕾が主に五つの基本の味を感じると発見した。甘味、酸味、塩味、苦味、そしてスープやチーズなどにあるうま味という旨い味だ。だが驚きがある。私たちが「味」と呼ぶものの多くは実は匂いだ。噛むと、小さな香りが口の中から鼻へ上る。脳はこの匂いを舌からの信号と合わせ、楽しむ豊かな風味を作る。だから風邪で鼻が詰まると食べ物の味が鈍く平板になる。味覚は楽しみのためだけではない。昔、祖先を安全に保つのを助けた。甘味はエネルギー豊富な食べ物を示し、苦味は害になりうるものを警告した。次においしい食事を楽しむとき、その背後の静かな共同作業を思い出してほしい。舌と鼻と脳が協力し、簡素な食べ物を風味の世界に変えている。",
        quiz: [
          { q: "What are hidden in the tiny bumps on your tongue?", options: ["Taste buds that detect food and send signals to the brain", "Small bones", "Tiny lights"], answer: 0 },
          { q: "What are the five basic tastes?", options: ["Sweet, sour, salty, bitter, and umami (savory)", "Only sweet and salty", "Hot and cold"], answer: 0 },
          { q: "Why does food taste dull when you have a cold?", options: ["Much of 'taste' is really smell, and a blocked nose cannot sense it", "Because the tongue disappears", "Because food changes"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-10-01",
    passages: [
      {
        id: "d1001-1",
        title: "How Companies Keep Customers Coming Back",
        level: "★★☆",
        genre: "ビジネス",
        text: "Winning a new customer is exciting for any business. But experienced companies know a quieter truth: keeping an old customer is often far more valuable than finding a new one. A loyal customer who returns again and again, and who tells friends, can be worth more than many one-time buyers.\n\nWhy is this so? Finding new customers is expensive. A company must spend money on advertising and offers to attract strangers. A happy existing customer, however, already knows and trusts the company. They come back on their own, cost little to keep, and often spend more over time.\n\nSo how do companies build this loyalty? The foundation is always a good product and honest service. No trick can keep customers who feel cheated or disappointed. Beyond that, businesses use many methods. Some offer reward programs, giving points or discounts to people who return. Others remember their customers' names and preferences, making each visit feel personal. Quick, kind help when something goes wrong can turn an angry customer into a devoted one.\n\nThere is a danger, though. Loyalty must be earned, not assumed. A company that takes its regular customers for granted, or treats new customers better than old ones, can lose the very trust it worked to build.\n\nIn the end, customer loyalty is a relationship, much like a friendship. It grows slowly, through many small moments of care and respect, and like any relationship, it must be nurtured to last.",
        summaryJa: "新しい客を得るのはどの事業にもわくわくする。だが経験ある企業は静かな真実を知っている。古い客を保つことは、新しい客を見つけるよりずっと価値があることが多い。何度も戻り、友人に伝える忠実な客は、多くの一度きりの買い手より価値がありうる。なぜか。新しい客を見つけるのは高くつく。見知らぬ人を引きつけるため広告や特典にお金を使わねばならない。だが満足した既存の客は、すでに会社を知り信頼している。自ら戻り、保つ費用は少なく、時とともに多く使うことが多い。ではどう忠誠を築くのか。土台は常に良い製品と誠実なサービスだ。だまされたり失望したと感じる客は、どんな策でも保てない。その上で企業は多くの方法を使う。戻る人に点数や割引を与える報酬制度もある。客の名や好みを覚え、各訪問を個人的に感じさせる店もある。問題が起きた時の素早く親切な対応は、怒った客を熱心な客に変えうる。だが危険もある。忠誠は得るもので、当然と思ってはならない。常連を軽んじたり、新規客を既存客より優遇する会社は、築いた信頼そのものを失いうる。客の忠誠は友情のような関係だ。多くの小さな心配りと敬意の瞬間を通じてゆっくり育ち、どんな関係とも同じく、続くには育まねばならない。",
        quiz: [
          { q: "Why is keeping an old customer often more valuable than finding a new one?", options: ["Loyal customers return on their own, cost little to keep, and often spend more", "Old customers never buy anything", "New customers are always free to find"], answer: 0 },
          { q: "What is the foundation of customer loyalty?", options: ["A good product and honest service", "Tricks and false promises", "Ignoring customers"], answer: 0 },
          { q: "What danger does the passage warn about?", options: ["Taking regular customers for granted can lose the trust you built", "Being too kind to customers", "Making products too good"], answer: 0 }
        ]
      },
      {
        id: "d1001-2",
        title: "Data Centers in Space?",
        level: "★★★",
        genre: "テクノロジー",
        text: "The buildings that power our digital world, called data centers, are hungry machines. They use enormous amounts of electricity to run their computers and even more to keep them cool. As our use of computing grows, so does this hunger. Now, some companies are exploring a bold and surprising idea: what if we put data centers in space?\n\nAt first this sounds like science fiction, but there are real reasons behind it. In orbit high above the Earth, sunlight is strong and almost never blocked by clouds or night. A data center there could be powered by huge solar panels, drawing clean energy directly from the sun, around the clock. Space is also extremely cold, which might help with the hard problem of cooling the computers.\n\nOf course, the challenges are enormous. Launching heavy equipment into space is very expensive. Repairing a broken machine in orbit is far harder than sending a worker to a building on Earth. And the computers must survive harsh radiation and the dangers of space.\n\nFor now, companies are testing small steps, such as putting a few powerful chips on a satellite to see how they perform. A full data center in space is still a distant dream.\n\nYet the idea shows how far people will reach to meet the growing need for computing power, while trying to protect the planet. The answer to an earthly problem may, one day, be found far above our heads.",
        summaryJa: "デジタル世界を支える建物、データセンターは飢えた機械だ。コンピューターを動かすのに膨大な電力を使い、冷やすのにさらに多く使う。計算の利用が増えるほど、この飢えも増す。今、一部の企業は大胆で意外な考えを探っている。データセンターを宇宙に置いたらどうか、と。最初はSFに聞こえるが、裏には本当の理由がある。地球のはるか上の軌道では、日光は強く、雲や夜にほとんど遮られない。そこのデータセンターは巨大な太陽光パネルで動き、太陽から直接、昼夜を問わず清潔なエネルギーを得られる。宇宙は極めて冷たくもあり、コンピューター冷却という難問を助けるかもしれない。もちろん課題は甚大だ。重い機器を宇宙へ打ち上げるのは非常に高価だ。軌道で壊れた機械を直すのは、地上の建物に作業員を送るよりはるかに難しい。コンピューターは厳しい放射線や宇宙の危険に耐えねばならない。今のところ企業は小さな一歩を試している。いくつかの強力なチップを衛星に載せ、どう働くか見るなどだ。宇宙の本格的なデータセンターはまだ遠い夢だ。だがこの考えは、地球を守ろうとしつつ、増える計算力の需要に応えるため人がどれほど遠くへ手を伸ばすかを示す。地上の問題の答えは、いつか頭上はるかに見つかるかもしれない。",
        quiz: [
          { q: "Why are data centers called 'hungry machines'?", options: ["They use enormous electricity to run and cool their computers", "They eat food", "They never use power"], answer: 0 },
          { q: "What is one reason to put a data center in space?", options: ["Strong, almost constant sunlight could power it with clean solar energy", "There is no sunlight in space", "Space is very warm"], answer: 0 },
          { q: "What is one big challenge of the idea?", options: ["Launching heavy equipment is expensive and repairs in orbit are very hard", "It is cheap and easy", "There are no challenges"], answer: 0 }
        ]
      },
      {
        id: "d1001-3",
        title: "Why Reliable News Matters",
        level: "★★★",
        genre: "世界情勢",
        text: "Every day, we are flooded with information. News reaches us from televisions, websites, and the phones in our pockets, at all hours. With so much available, one question grows more important than ever: how do we know what is true?\n\nReliable news — information that is carefully checked and honestly reported — is one of the quiet foundations of a healthy society. When people have accurate facts, they can make good decisions, whether about their health, their money, or their leaders. Good journalists work hard to gather facts, check them with several sources, and correct mistakes. This careful work helps keep the public informed and the powerful honest.\n\nBut today, false or misleading information spreads easily and quickly. A dramatic but untrue story can travel around the world before the truth catches up. Some false news is spread by accident; some is created on purpose to trick or divide people. Modern tools can even make fake images and videos look real.\n\nSo how can a person find reliable news? A few simple habits help. Check where a story comes from, and whether trusted sources report the same thing. Be careful of news designed to make you very angry or afraid, as strong emotions can cloud judgment. And remember that a real story can be corrected, while a lie often cannot.\n\nIn a world full of noise, the ability to find and value honest information is a vital skill — one that helps protect both individuals and the societies they share.",
        summaryJa: "毎日、私たちは情報であふれている。ニュースはテレビやウェブサイト、ポケットの電話から、いつでも届く。これほど多くが手に入る中、一つの問いがかつてなく重要になる。何が真実かをどう知るのか。信頼できるニュース——入念に確認され正直に報じられた情報——は、健全な社会の静かな土台の一つだ。正確な事実があれば、人は健康やお金、指導者について良い判断ができる。良い記者は懸命に事実を集め、複数の情報源で確認し、誤りを正す。この丁寧な仕事が、市民を知らせ、権力者を正直に保つのを助ける。だが今日、誤ったり誤解を招く情報はたやすく速く広がる。劇的だが真実でない話が、真実が追いつく前に世界を巡りうる。偶然広がる偽ニュースもあれば、人をだましたり分断するため意図的に作られるものもある。現代の道具は偽の画像や動画を本物らしく見せることさえできる。では信頼できるニュースをどう見つけるか。いくつかの簡単な習慣が役立つ。話の出所を確かめ、信頼できる情報源が同じことを報じているか見る。強く怒らせたり怖がらせるよう作られたニュースに注意する。強い感情は判断を曇らせうる。本当の話は訂正できるが、嘘はしばしばできない。雑音に満ちた世界で、正直な情報を見つけ重んじる力は不可欠な技能だ。個人と、共有する社会の両方を守る助けになる。",
        quiz: [
          { q: "Why is reliable news a foundation of a healthy society?", options: ["Accurate facts let people make good decisions and keep the powerful honest", "It has no effect on society", "It only entertains"], answer: 0 },
          { q: "Why does false information spread so easily today?", options: ["A dramatic but untrue story can travel fast, and tools can fake images and videos", "Because everyone checks everything", "Because lies move slowly"], answer: 0 },
          { q: "What is one habit that helps you find reliable news?", options: ["Check the source and whether trusted sources report the same thing", "Believe whatever makes you angriest", "Never check anything"], answer: 0 }
        ]
      },
      {
        id: "d1001-4",
        title: "Daruma: Japan's Dolls of Determination",
        level: "★★☆",
        genre: "日本",
        text: "In homes and shops across Japan, you may notice a curious round doll, usually bright red, with a serious face and two large white circles where the eyes should be. This is a daruma, a traditional doll that stands for good luck, patience, and the power of not giving up.\n\nThe daruma has a clever design. It is round and weighted at the bottom, so that if you push it over, it rights itself and stands up again. This has given it a famous saying: \"fall down seven times, stand up eight.\" The doll is a gentle reminder that no matter how often we fail, we can always rise and try again.\n\nThe most interesting custom involves the doll's blank eyes. When a person sets an important goal — passing an exam, starting a business, or any heartfelt wish — they paint in one eye. The one-eyed daruma then sits where it can be seen, as a daily reminder of the goal. When the goal is finally reached, the person joyfully paints in the second eye, completing the doll.\n\nDaruma are often bought at the New Year and at temples, and old ones are sometimes returned to be respectfully burned, making way for new hopes.\n\nMore than a toy, the daruma carries a warm and powerful message. Set your goal, work with patience, and never give up. Keep rising, and one day you will fill in that second eye.",
        summaryJa: "日本の家や店のあちこちで、不思議な丸い人形に気づくかもしれない。たいてい鮮やかな赤で、真剣な顔をし、目のあるべき所に二つの大きな白い円がある。これがだるま、幸運、忍耐、諦めない力を表す伝統的な人形だ。だるまは巧みな作りだ。丸く底が重いので、倒しても起き上がって再び立つ。ここから有名な言葉が生まれた。「七転び八起き」。この人形は、何度失敗しても、いつでも立ち上がり再び挑めると優しく思い出させる。最も興味深い習慣は人形の空白の目に関わる。人が重要な目標——試験の合格、起業、心からの願い——を定めると、片方の目を描き入れる。片目のだるまは見える所に置かれ、目標を毎日思い出させる。目標がついに達成されると、喜んでもう一方の目を描き入れ、人形を完成させる。だるまは正月や寺でよく買われ、古いものは敬意をもって焼かれ、新しい希望に道を譲ることもある。だるまは玩具以上に、温かく力強いメッセージを運ぶ。目標を定め、忍耐強く取り組み、決して諦めるな。立ち上がり続ければ、いつかあの二つ目の目を描き入れられる。",
        quiz: [
          { q: "What does a daruma doll stand for?", options: ["Good luck, patience, and the power of not giving up", "Laziness", "Bad luck"], answer: 0 },
          { q: "What famous saying is linked to the daruma's design?", options: ["'Fall down seven times, stand up eight'", "'Sleep all day'", "'Never try anything'"], answer: 0 },
          { q: "What is the custom with the daruma's eyes?", options: ["Paint one eye when setting a goal, and the second when the goal is reached", "Paint both eyes and throw it away", "Never paint the eyes"], answer: 0 }
        ]
      },
      {
        id: "d1001-5",
        title: "Why We Have Two Eyes",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "Have you ever wondered why we have two eyes instead of one? After all, each eye seems to see the same scene. But having two eyes gives us a remarkable ability that a single eye could not: the power to see the world in three dimensions, and to judge distance.\n\nThe secret is that your two eyes do not see exactly the same thing. Because they sit a few centimeters apart, each eye views the world from a slightly different angle. You can prove this easily: hold up one finger, and look at it with only your left eye, then only your right. The finger seems to jump from side to side.\n\nYour brain takes these two slightly different pictures and combines them into one. From the small differences between them, it cleverly works out how far away things are. This is why, with both eyes open, you can quickly judge whether a ball is near or far, or reach out and catch it.\n\nThis ability is called depth perception, and it is very useful. It helps us pour water into a cup, walk down stairs, drive a car, and avoid bumping into things. Animals that hunt, like eagles and cats, usually have both eyes facing forward for exactly this reason.\n\nSo two eyes are not just a spare in case one fails. Together, they turn two flat images into a rich, three-dimensional world — a quiet piece of teamwork happening inside your head every moment you look around.",
        summaryJa: "なぜ私たちは目が一つでなく二つあるのか、考えたことはあるだろうか。結局、どちらの目も同じ光景を見ているように思える。だが二つの目は、一つの目にはできない驚くべき能力を与える。世界を三次元で見て、距離を判断する力だ。秘密は、二つの目が全く同じものを見ていないことだ。数センチ離れているので、各目はわずかに違う角度から世界を見る。簡単に確かめられる。指を一本立て、左目だけで、次に右目だけで見る。指が左右に跳ぶように見える。脳はこの少し違う二つの絵を一つに合わせる。その小さな違いから、物がどれだけ遠いかを巧みに割り出す。だから両目を開けると、ボールが近いか遠いかを素早く判断でき、手を伸ばして捕れる。この能力を奥行き知覚といい、とても役立つ。コップに水を注ぎ、階段を下り、車を運転し、物にぶつからないようにするのを助ける。ワシや猫など狩りをする動物は、まさにこの理由で両目が前を向いていることが多い。だから二つの目は、一つが故障した時の予備ではない。二つ合わさって、二枚の平らな画像を豊かな三次元の世界に変える。見回すたびに頭の中で起きる、静かな共同作業だ。",
        quiz: [
          { q: "What remarkable ability do two eyes give us?", options: ["Seeing in three dimensions and judging distance", "Seeing in the dark", "Reading minds"], answer: 0 },
          { q: "Why do the two eyes not see exactly the same thing?", options: ["They sit a few centimeters apart, viewing the world from slightly different angles", "One eye is always closed", "They look in opposite directions"], answer: 0 },
          { q: "What is 'depth perception' useful for?", options: ["Pouring water, walking down stairs, driving, and catching a ball", "Nothing at all", "Only for sleeping"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-09-30",
    passages: [
      {
        id: "d0930-1",
        title: "Why a Business Needs a Plan",
        level: "★★☆",
        genre: "ビジネス",
        text: "Starting a business can feel exciting and full of possibility. Someone has a great idea and wants to begin right away. But experienced people know that one quiet step can make the difference between success and failure: writing a business plan.\n\nA business plan is a written document that describes what a business will do and how. It explains the product or service, who the customers are, how the company will make money, and what it will cost to get started. In short, it turns a dream into a clear plan of action.\n\nWhy is this so useful? First, writing a plan forces you to think carefully. On paper, weak ideas and hidden costs become visible before you spend real money. A plan can reveal problems early, while they are still easy to fix.\n\nSecond, a plan helps you explain your idea to others. Banks, investors, and partners usually want to see a solid plan before they give money or support. A clear plan shows that you are serious and have thought things through.\n\nThird, a plan acts like a map. As the business grows, the owner can look back at the plan to check whether things are going as expected, and adjust when needed.\n\nOf course, no plan is perfect, and real life brings surprises. A good plan is not a set of chains, but a guide that can change as you learn. Still, starting without one is like setting off on a long journey with no map at all.",
        summaryJa: "事業を始めるのはわくわくして可能性に満ちて感じられる。素晴らしい着想を持ち、すぐ始めたい。だが経験ある人は、成功と失敗を分けうる一つの静かな段階を知っている。事業計画を書くことだ。事業計画は、事業が何をどうするかを述べた書面だ。製品やサービス、顧客は誰か、会社がどう稼ぐか、始めるのにいくらかかるかを説明する。要するに、夢を明確な行動計画に変える。なぜ有用か。第一に、計画を書くと慎重に考えざるをえない。紙の上では、弱い着想や隠れた費用が、実際にお金を使う前に見える。計画は問題を早く、まだ直しやすいうちに明らかにできる。第二に、計画は着想を他者に説明する助けになる。銀行や投資家、提携先はふつう、お金や支援を与える前にしっかりした計画を見たがる。明確な計画は、あなたが本気でよく考えたと示す。第三に、計画は地図のように働く。事業が育つにつれ、所有者は計画を振り返り、予定通りか確認し、必要なら調整できる。もちろん完璧な計画はなく、現実は驚きをもたらす。良い計画は鎖でなく、学びとともに変えられる案内だ。だが計画なしに始めるのは、地図なしで長い旅に出るようなものだ。",
        quiz: [
          { q: "What is a business plan?", options: ["A written document describing what a business will do and how", "A type of bank", "A finished product"], answer: 0 },
          { q: "How does writing a plan help before you spend money?", options: ["It makes weak ideas and hidden costs visible early, while they are easy to fix", "It guarantees instant success", "It hides all problems"], answer: 0 },
          { q: "How is a good plan described?", options: ["Not a set of chains, but a guide that can change as you learn", "A rule that can never change", "A useless piece of paper"], answer: 0 }
        ]
      },
      {
        id: "d0930-2",
        title: "Robots Exploring Mars",
        level: "★★★",
        genre: "テクノロジー",
        text: "Millions of kilometers from Earth, on the cold, red surface of Mars, small robots are slowly rolling across the ground. These machines, called rovers, are sent by scientists to explore a world where no human has ever set foot. Through them, we are getting our first close look at another planet.\n\nWhy send robots instead of people? Mars is a harsh and distant place. The journey takes many months, the air is unbreathable, and the cold is deadly. Sending humans would be enormously expensive and dangerous. A robot, however, can travel there, work for years, and never need food, air, or a way home.\n\nA Mars rover is like a scientist on wheels. It carries cameras to take photographs, tools to study rocks and soil, and instruments to test the air. It looks for clues about the planet's past — especially signs that water, and perhaps even tiny life, once existed there.\n\nControlling a rover is a slow and careful task. Because Mars is so far away, a radio command from Earth takes many minutes to arrive. Scientists cannot drive the rover second by second; instead, they send careful instructions and wait to see the results.\n\nThese brave little robots have already lasted far longer than expected, sending home stunning pictures and important discoveries. They are the eyes and hands of humanity on a distant world — proof that even when we cannot go somewhere ourselves, our curiosity can still reach across the stars.",
        summaryJa: "地球から何百万キロも離れた火星の冷たく赤い地表を、小さなロボットがゆっくり転がって進んでいる。ローバーと呼ばれるこの機械は、人がまだ足を踏み入れたことのない世界を探るために科学者が送ったものだ。ローバーを通じ、私たちは初めて別の惑星を間近に見ている。なぜ人でなくロボットを送るのか。火星は過酷で遠い場所だ。旅は何か月もかかり、空気は吸えず、寒さは致命的だ。人を送るのは莫大に高価で危険だ。だがロボットはそこへ行き、何年も働き、食料も空気も帰る手段も要らない。火星ローバーは車輪の付いた科学者のようだ。写真を撮るカメラ、岩や土を調べる道具、空気を試す装置を積む。惑星の過去の手がかり——特にかつて水が、もしかすると小さな生命さえ存在した証を探す。ローバーの操縦は遅く慎重な作業だ。火星はとても遠いので、地球からの無線指令は届くのに何分もかかる。科学者は一秒ごとに運転できず、慎重な指示を送り結果を待つ。この勇敢な小さなロボットは、予想よりはるかに長く持ち、見事な写真と重要な発見を送ってきた。遠い世界での人類の目と手であり、自分で行けなくても好奇心は星々を越えて届く証だ。",
        quiz: [
          { q: "Why do scientists send robots to Mars instead of people?", options: ["Mars is harsh, distant, and dangerous, and robots need no food, air, or way home", "Because robots enjoy travel", "Because people are not curious"], answer: 0 },
          { q: "What is a Mars rover like?", options: ["A scientist on wheels, with cameras and tools to study rocks, soil, and air", "A simple toy", "A rocket only"], answer: 0 },
          { q: "Why is controlling a rover slow?", options: ["A radio command from Earth takes many minutes to reach faraway Mars", "Because the rover is asleep", "Because Earth is closer than the moon"], answer: 0 }
        ]
      },
      {
        id: "d0930-3",
        title: "The Rivers That Cross Borders",
        level: "★★★",
        genre: "世界情勢",
        text: "Rivers do not care about the lines humans draw on maps. A great river may begin high in the mountains of one country, flow through a second, and reach the sea in a third. Many of the world's most important rivers are shared by several nations. This simple fact of nature has made rivers one of the great tests of cooperation between countries.\n\nA shared river is a shared blessing. Its water grows crops, provides drinking water, powers electricity, and carries boats and goods. For the people who live along it, the river is life itself. But because the water is shared, what one country does affects its neighbors. If an upstream nation takes too much water or builds a large dam, the countries downstream may receive too little.\n\nThis can cause tension. Yet more often, it has pushed nations to work together. Countries that share a river frequently sign agreements about how to divide the water fairly, how to keep it clean, and how to warn each other of floods. In many places, old rivals have found that they must cooperate over water, whether they like each other or not.\n\nCaring for shared rivers grows more important every year, as populations rise and the climate changes.\n\nA river crossing borders is a powerful reminder that nature connects us. The water flowing past one village today may reach a distant land tomorrow. To manage it well, neighbors must talk, share, and think of one another — as the river itself joins them together.",
        summaryJa: "川は人が地図に引く線を気にしない。大きな川はある国の高い山で始まり、二つ目の国を流れ、三つ目で海に達しうる。世界の最も重要な川の多くは複数の国に共有される。この自然の単純な事実が、川を国家間協力の大きな試金石の一つにした。共有する川は共有の恵みだ。その水は作物を育て、飲み水を供給し、電気を生み、船と荷を運ぶ。川沿いに住む人々にとって、川は命そのものだ。だが水が共有されるため、一国のすることが隣国に影響する。上流の国が水を取りすぎたり大きなダムを造ったりすると、下流の国は水が少なすぎるかもしれない。これは緊張を生みうる。だがより多くの場合、国々を協力へ押しやってきた。川を共有する国は、水を公正に分ける方法、清潔に保つ方法、互いに洪水を知らせる方法について協定を結ぶことが多い。多くの場所で、古いライバルが、好むと好まざるとにかかわらず水で協力せねばならないと気づいた。共有する川の世話は、人口が増え気候が変わるにつれ、年々重要になる。国境を越える川は、自然が私たちをつなぐ力強い証だ。今日ある村を流れる水が明日遠い地に届きうる。うまく管理するには、隣人は話し、分かち合い、互いを思わねばならない。川そのものが彼らを結びつけるように。",
        quiz: [
          { q: "Why are many important rivers a test of cooperation?", options: ["They are shared by several nations, so one country's actions affect its neighbors", "Because rivers follow map lines exactly", "Because no one uses rivers"], answer: 0 },
          { q: "What can happen if an upstream nation takes too much water?", options: ["Countries downstream may receive too little", "Nothing changes for anyone", "The river flows backward"], answer: 0 },
          { q: "How have shared rivers often pushed nations?", options: ["To work together, signing agreements to divide water fairly and keep it clean", "To stop all farming", "To ignore each other completely"], answer: 0 }
        ]
      },
      {
        id: "d0930-4",
        title: "Kabuki: Japan's Dramatic Theater",
        level: "★★☆",
        genre: "日本",
        text: "Imagine a stage bursting with color: actors in magnificent costumes, faces painted in bold red and white, striking dramatic poses as music and shouts fill the air. This is kabuki, one of Japan's most famous traditional forms of theater, loved for its beauty, drama, and energy for over four hundred years.\n\nKabuki plays tell stories of love, honor, heroes, and history. Everything about them is larger than life. The costumes are grand, the makeup is striking, and the actors move in a powerful, exaggerated style. At key moments, an actor may freeze in a dramatic pose, crossing his eyes, while the audience cheers. The stage itself is full of clever tricks, including revolving floors and secret passages.\n\nOne surprising fact is that in traditional kabuki, all the roles, including the women, are played by men. Certain actors train for many years to play female parts with great grace, and these performers are highly respected.\n\nKabuki is also a family art. Famous acting families pass their skills and stage names down through the generations, so a great actor today may be the son and grandson of great actors before him.\n\nThough it is centuries old, kabuki is still performed and enjoyed in Japan today, by both older fans and curious newcomers. It is a living link to the past — a loud, colorful, thrilling window into the stories and spirit of old Japan, kept proudly alive on the modern stage.",
        summaryJa: "色にあふれる舞台を想像してほしい。壮麗な衣装の役者、赤と白で大胆に塗られた顔、音楽と掛け声が満ちる中での劇的な見得。これが歌舞伎、日本で最も有名な伝統演劇の一つで、その美しさ、劇性、活力ゆえに400年以上愛されてきた。歌舞伎の演目は、愛や名誉、英雄、歴史の物語を語る。すべてが実物以上に大きい。衣装は壮大、化粧は鮮烈、役者は力強く誇張された様式で動く。要所で役者は目を寄せて劇的な見得で静止し、観客は喝采する。舞台自体も、回る床や秘密の通路など巧みな仕掛けに満ちる。意外な事実は、伝統的な歌舞伎ではすべての役、女性役も含めて男が演じることだ。特定の役者は何年も修行して優雅に女性役を演じ、この演者は大いに尊敬される。歌舞伎は一族の芸でもある。有名な役者一族が技と芸名を世代を超えて受け継ぐので、今日の名優は名優の息子であり孫かもしれない。何世紀も古いが、歌舞伎は今日も日本で上演され、年配のファンにも好奇心旺盛な新参者にも楽しまれる。過去への生きたつながり——古い日本の物語と精神への、騒がしく色鮮やかでわくわくする窓であり、現代の舞台で誇り高く生かされている。",
        quiz: [
          { q: "What kind of theater is kabuki?", options: ["A traditional Japanese theater known for color, drama, and energy", "A silent, plain form of theater", "A type of sport"], answer: 0 },
          { q: "What is a surprising fact about traditional kabuki?", options: ["All the roles, including women, are played by men", "There are no actors", "It has no costumes"], answer: 0 },
          { q: "How is kabuki a 'family art'?", options: ["Famous acting families pass their skills and stage names down through generations", "Only strangers may perform it", "It changes owners every day"], answer: 0 }
        ]
      },
      {
        id: "d0930-5",
        title: "Bats: Masters of the Night",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "As the sun sets and most animals settle down to sleep, another world comes alive. Out of caves, trees, and quiet corners fly the bats, some of the most remarkable creatures on Earth. Bats are the only mammals that can truly fly, and they rule the night sky in ways that still amaze scientists.\n\nThe most famous of a bat's skills is how it finds its way in the dark. Many bats use a trick called echolocation. As they fly, they send out high squeaks, far too high for humans to hear. These sounds bounce off objects and return as echoes. By listening to the echoes, a bat can build a picture of the world around it, sensing walls, insects, and prey in complete darkness.\n\nBats are also very useful to us. Many kinds eat huge numbers of insects each night, including pests that harm crops. Others drink nectar and, like bees, carry pollen from flower to flower, helping plants grow. Some fruit bats spread seeds across the forest.\n\nSadly, bats are often feared or misunderstood. In truth, the vast majority are shy, gentle, and harmless to people, quietly doing important work while we sleep.\n\nRecent studies even suggest that bats may hold secrets about long life and fighting disease, and scientists are eager to learn from them.\n\nSo the next time you see a bat flit across the evening sky, do not be afraid. You are watching a true master of the night at work.",
        summaryJa: "日が沈み、多くの動物が眠りにつくと、別の世界が息づき始める。洞窟や木、静かな片隅からコウモリが飛び立つ。地球で最も注目すべき生き物の一つだ。コウモリは真に飛べる唯一の哺乳類で、科学者を今も驚かせる仕方で夜空を支配する。コウモリの技で最も有名なのは、暗闇で道を見つける方法だ。多くのコウモリは反響定位(エコーロケーション)という技を使う。飛びながら、人には高すぎて聞こえない高い鳴き声を出す。この音が物に跳ね返り、こだまとして戻る。こだまを聞くことで、コウモリは周りの世界の像を作り、完全な暗闇で壁や昆虫、獲物を感じ取る。コウモリは私たちにとても役立ちもする。多くの種は毎晩膨大な数の昆虫、作物を害する害虫を食べる。花の蜜を飲み、ハチのように花から花へ花粉を運び植物の成長を助けるものもいる。果実を食べるコウモリは森中に種を広げる。悲しいことに、コウモリはしばしば恐れられ誤解される。実は大多数は臆病で優しく、人に無害で、私たちが眠る間に静かに大切な仕事をしている。最近の研究は、コウモリが長寿や病気との闘いの秘密を握るかもしれないと示唆し、科学者は学びたがっている。次に夕空をコウモリがよぎるのを見ても、恐れないでほしい。真の夜の達人が働くのを見ているのだ。",
        quiz: [
          { q: "What is special about bats among mammals?", options: ["They are the only mammals that can truly fly", "They cannot move at all", "They only live in water"], answer: 0 },
          { q: "How does echolocation work?", options: ["A bat sends out high squeaks and listens to the echoes to sense the world", "A bat uses a flashlight", "A bat reads a map"], answer: 0 },
          { q: "Why are bats useful to us?", options: ["They eat pest insects, spread pollen and seeds, and help plants grow", "They harm all crops", "They do nothing helpful"], answer: 0 }
        ]
      }
    ]
    }
  ] };
