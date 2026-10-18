/* デイリー配信リーディング
 * 毎朝の自動ルーチンがこのファイルを丸ごと上書き生成する（直近 7 日分を保持）。
 * days は日付降順。各 day = { date: "YYYY-MM-DD", passages: [readingPassages と同スキーマ + genre] }
 * このファイル以外は手書きデータであり、ルーチンは触らない。
 */
window.KE_DATA = window.KE_DATA || {};

KE_DATA.dailyReading = { days: [
    {
    date: "2026-10-18",
    passages: [
      {
        id: "d1018-1",
        title: "Why First Impressions Matter in Business",
        level: "★★☆",
        genre: "ビジネス",
        text: "They say you never get a second chance to make a first impression. In business, this old saying is especially true. Within the first few seconds of meeting someone, people form an opinion that can be hard to change. For a company or a worker, a good first impression can open doors, while a poor one can close them.\n\nWhy do first impressions form so quickly? The human brain is built to judge situations fast. When we meet a new person or enter a new shop, we notice many small things at once: how someone is dressed, how they speak, whether they smile, and whether a place looks clean and organized. From these clues, we quickly decide whether to trust what we see.\n\nIn business, first impressions appear in many forms. A salesperson's greeting, the design of a website, or the tidiness of a store can all shape how customers feel before a single word about the product is spoken. A warm welcome and a neat appearance suggest care and professionalism.\n\nThe good news is that first impressions can be managed. Simple actions help: arriving on time, listening carefully, dressing suitably, and showing genuine interest in the other person. These cost nothing but attention.\n\nOf course, a good first impression is only a beginning. It must be followed by honest work and real quality, or trust will fade. Still, because people decide so fast, that first moment is a chance worth taking seriously. A strong start makes everything that follows easier.",
        summaryJa: "ビジネスで第一印象が大切な理由について。「第一印象をやり直す機会は二度とない」とよく言われ、ビジネスでは特に真実だ。人は出会って数秒で意見を形成し、それは覆しにくい。良い第一印象は扉を開き、悪ければ閉ざす。脳は状況を素早く判断するよう作られ、新しい人や店で服装・話し方・笑顔・清潔さなど多くの手がかりを一度に捉え、信頼するか瞬時に決める。ビジネスでは、販売員の挨拶、ウェブサイトの作り、店の整頓などが、商品の話を聞く前に客の感情を左右する。時間厳守、傾聴、適切な服装、相手への関心で印象は整えられる。ただし第一印象は始まりにすぎず、誠実な仕事と品質が続かねば信頼は薄れる。",
        quiz: [
          { q: "Why do first impressions form so quickly?", options: ["The brain is built to judge situations fast", "People think very slowly", "There are no clues to notice"], answer: 0 },
          { q: "What can shape a customer's first impression in business?", options: ["A greeting, a website's design, or a tidy store", "Only the product's price", "Nothing at all"], answer: 0 },
          { q: "What does the passage say a good first impression must be followed by?", options: ["Honest work and real quality", "Nothing more", "A second meeting only"], answer: 0 }
        ]
      },
      {
        id: "d1018-2",
        title: "How a Microwave Oven Heats Food",
        level: "★★☆",
        genre: "テクノロジー",
        text: "A microwave oven can heat a bowl of soup in just a minute, far faster than a stove. It seems almost magical: there is no flame and no glowing element, yet the food becomes hot. How does a microwave warm food so quickly without any obvious source of heat?\n\nThe secret is a type of invisible wave called a microwave, which gives the oven its name. These are a kind of radio wave, similar to the waves that carry signals to a phone, but tuned for a special job. Inside the oven, a part called the magnetron produces these waves and sends them into the cooking space.\n\nHere is the clever part. Microwaves affect water. Almost all food contains water, and the microwaves make the tiny water molecules inside the food vibrate very fast. This rapid shaking creates heat, warming the food from the inside as well as the outside. Because the energy goes straight to the water in the food, heating is very quick.\n\nThis also explains some common experiences. A dry plate stays cool because it has little water, while the food on it becomes hot. Foods heat unevenly if the water is not spread evenly, which is why many ovens have a turning plate to help.\n\nMicrowaves are safe when the oven is used correctly, because the metal body and the screen in the door keep the waves inside. Fast, clean, and simple, the microwave oven has become one of the most common machines in kitchens around the world.",
        summaryJa: "電子レンジが食品を温める仕組みについて。電子レンジはスープを1分ほどで温め、コンロよりずっと速い。炎も赤く光る部分もないのに食品が熱くなり、魔法のようだ。鍵はマイクロ波という目に見えない波で、これが名前の由来だ。これはスマホに信号を運ぶ電波に似た一種で、特別な用途に調整されている。庫内のマグネトロンという部品が波を作り、調理空間へ送る。巧妙なのは、マイクロ波が水に作用する点だ。ほとんどの食品は水を含み、波が食品内の小さな水分子を高速で振動させる。その激しい揺れが熱を生み、内側からも温める。水の少ない皿は冷たいままで上の食品は熱くなる。水が偏ると加熱も偏るため回転皿がある。金属の本体と扉の網が波を閉じ込め安全だ。",
        quiz: [
          { q: "What produces the microwaves inside the oven?", options: ["A part called the magnetron", "A small flame", "A light bulb"], answer: 0 },
          { q: "How do microwaves heat food?", options: ["They make water molecules in the food vibrate fast", "They set the food on fire", "They blow hot air"], answer: 0 },
          { q: "Why does a dry plate stay cool?", options: ["It has little water", "It is made of water", "Microwaves avoid food"], answer: 0 }
        ]
      },
      {
        id: "d1018-3",
        title: "How the World Works Together to Fight Disease",
        level: "★★★",
        genre: "世界情勢",
        text: "A disease does not need a passport. A sickness that begins in one country can travel across the world in days, carried by travelers on airplanes. Because germs ignore borders, protecting human health has become a task that no single nation can manage alone. Fighting disease is one of the most important examples of global cooperation.\n\nCountries work together in several ways. They share information quickly when a new illness appears, so that doctors everywhere can prepare. They send scientists and medical teams to places where an outbreak is spreading. A global health organization helps coordinate this work, setting shared rules and advice that nations can follow.\n\nOne of the greatest achievements of this cooperation is vaccines. When a dangerous disease spreads, scientists around the world may race to develop a vaccine, then share it widely. Working together, nations once managed to wipe out smallpox, a disease that had killed millions for centuries. It is now gone from the world, a victory that belonged to all of humanity.\n\nChallenges remain. Poorer countries sometimes cannot afford medicines, so richer nations and charities help pay for them. Diseases can also return if people stop being careful. And cooperation can be slowed by disagreements between countries.\n\nStill, the pattern is clear. When a serious illness threatens the world, people of many nations, languages, and beliefs often unite against a common enemy. In the fight for health, the world has learned that we are safest when we protect one another.",
        summaryJa: "世界が協力して病気と闘う仕組みについて。病気にパスポートは要らない。ある国で始まった病が、飛行機の旅行者により数日で世界へ広がる。病原体は国境を無視するため、健康を守ることは一国だけでは担えない課題だ。病気との闘いは国際協力の最も重要な例の一つだ。各国は新しい病が現れると情報を素早く共有し、各地の医師が備える。流行地へ科学者や医療チームを送る。世界的な保健機関が共通の規則と助言を定め調整する。最大の成果の一つがワクチンで、危険な病が広がると世界の科学者が開発を急ぎ広く共有する。協力により天然痘を根絶し、今や世界から消えた。貧しい国の薬代を豊かな国や慈善団体が支える。油断で病が戻ることもあり、対立で協力が遅れることもある。それでも脅威の前に人々は団結する。",
        quiz: [
          { q: "Why can't one country fight disease alone?", options: ["Germs ignore borders and spread between countries", "Diseases stay in one place", "Only one country has doctors"], answer: 0 },
          { q: "What is one great achievement of global cooperation mentioned?", options: ["Wiping out smallpox with vaccines", "Ending all travel", "Closing all hospitals"], answer: 0 },
          { q: "How do richer nations help poorer ones fight disease?", options: ["By helping pay for medicines", "By taking their doctors away", "By hiding information"], answer: 0 }
        ]
      },
      {
        id: "d1018-4",
        title: "Maneki-neko: The Beckoning Cat",
        level: "★★☆",
        genre: "日本",
        text: "If you have visited a Japanese restaurant or shop, you may have seen a small cat figure near the entrance, with one paw raised as if waving. This is the maneki-neko, which means beckoning cat. Far from being a simple decoration, it is a well-loved symbol believed to bring good luck and fortune, especially to businesses.\n\nThe cat's raised paw is the key. In Japan, people beckon others to come closer with a gesture like this. So the maneki-neko appears to be inviting customers, money, and good luck into a shop. Which paw is raised can carry a meaning too: a raised left paw is often said to invite customers, while a raised right paw is said to invite wealth.\n\nThe figures come in different colors, and each is believed to bring a different kind of luck. A white cat stands for happiness, a gold one for money, and a black one for protection from harm. Many cats also wear a small bell or a red collar, a style once seen on pet cats long ago.\n\nThere are many old stories about how the lucky cat began. In one famous tale, a cat raised its paw to a passing lord, inviting him into a temple, and moments later he was saved from a storm. Grateful, he became the temple's supporter.\n\nToday the maneki-neko is known around the world. Cheerful and welcoming, it continues to wave its little paw, wishing good fortune to everyone who passes by.",
        summaryJa: "招き猫について。日本の飲食店や店の入口近くで、片方の前足を手招きのように上げた小さな猫の置物を見たことがあるかもしれない。これが招き猫だ。単なる飾りでなく、特に商売に幸運と富をもたらすと信じられる愛される縁起物だ。鍵は上げた前足で、日本では人をこの仕草で招く。だから招き猫は客やお金、幸運を店へ招くように見える。どちらの足かにも意味があり、左足は客を、右足は富を招くとよく言われる。色も様々で、白は幸福、金はお金、黒は魔除けとされる。鈴や赤い首輪を着けた猫も多く、昔の飼い猫の装いだ。由来の古い話も多く、ある猫が領主を手招きして寺へ招き、直後に嵐から救った話は有名だ。今や世界で知られ、幸運を願い手招きを続ける。",
        quiz: [
          { q: "What does 'maneki-neko' mean?", options: ["Beckoning cat", "Sleeping cat", "Big dog"], answer: 0 },
          { q: "What is the raised paw believed to do?", options: ["Invite customers, money, and good luck", "Scare people away", "Clean the shop"], answer: 0 },
          { q: "What is a gold maneki-neko believed to bring?", options: ["Money", "Rain", "Bad luck"], answer: 0 }
        ]
      },
      {
        id: "d1018-5",
        title: "Why Do We Dream?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "Every night, when we fall into a deep sleep, our minds create strange and vivid stories called dreams. Some are happy, some are frightening, and many are quickly forgotten when we wake. People have wondered about the meaning of dreams for thousands of years. Even today, scientists are still working to understand why we dream at all.\n\nDreams happen mostly during a stage of sleep when the brain is very active, almost as busy as when we are awake. During this time, the eyes move quickly behind closed lids, and the most vivid dreams occur. Everyone dreams, even people who do not remember doing so.\n\nScientists have several ideas about why we dream. One popular idea is that dreaming helps the brain sort through the day's events, keeping important memories and letting go of unimportant ones. This may be why a good night's sleep helps us learn.\n\nAnother idea is that dreams let us safely practice dealing with problems or fears. By facing a frightening situation in a dream, the mind may prepare itself for real life. Some scientists think dreams are simply the brain making sense of random signals while it rests.\n\nThe truth is that no one knows for certain, and dreaming may do several of these things at once. What is clear is that dreams are a normal and healthy part of sleep.\n\nSo the next time you wake from a strange dream, remember that your resting brain was quietly at work, sorting, practicing, and perhaps telling itself a story in the dark.",
        summaryJa: "なぜ夢を見るのかについて。毎晩、深い眠りに入ると、心は夢という不思議で鮮明な物語を作る。楽しいもの、怖いものがあり、目覚めると多くは忘れられる。人は何千年も夢の意味を考えてきたが、なぜ夢を見るのか科学者は今も解明中だ。夢は主に脳が非常に活発な睡眠段階で起こり、覚醒時に近いほど忙しい。この間、閉じたまぶたの奥で目が素早く動き、最も鮮明な夢が現れる。誰もが夢を見るが、覚えていない人もいる。説はいくつかあり、一つは脳が一日の出来事を整理し、重要な記憶を残し不要なものを捨てるのを助けるというもので、よい睡眠が学習を助ける理由かもしれない。問題や恐れへの対処を安全に練習させるという説もある。休息中の無作為な信号を脳が意味づけしているだけという見方もある。確かなことは誰も知らないが、夢は正常で健康な睡眠の一部だ。",
        quiz: [
          { q: "When do the most vivid dreams happen?", options: ["During a sleep stage when the brain is very active", "Only when fully awake", "Never"], answer: 0 },
          { q: "What is one popular idea about why we dream?", options: ["Dreaming helps the brain sort through memories", "Dreams make us taller", "Dreams stop the heart"], answer: 0 },
          { q: "What does the passage say is clear about dreams?", options: ["They are a normal and healthy part of sleep", "They are always bad", "Only some people dream"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-10-17",
    passages: [
      {
        id: "d1017-1",
        title: "What Makes a Good Leader?",
        level: "★★☆",
        genre: "ビジネス",
        text: "In every company, team, or group, someone usually takes the role of leader. A leader guides others toward a shared goal. But not all leaders are equal. Some inspire people to do their best work, while others leave their teams tired and unhappy. So what makes a good leader?\n\nOne important quality is clear communication. A good leader explains the goal so that everyone understands where the team is going and why. When people know the purpose of their work, they feel more motivated and make better decisions on their own.\n\nAnother quality is listening. Weak leaders only give orders, but strong leaders also listen carefully to their team. They ask for ideas, pay attention to problems, and are willing to change their minds when someone has a better suggestion. This makes workers feel respected and valued.\n\nGood leaders also stay calm under pressure. When something goes wrong, a panicking leader spreads fear, while a steady leader helps the team think clearly and find a solution. Taking responsibility for mistakes, instead of blaming others, builds deep trust.\n\nFinally, the best leaders care about the people they lead, not just the results. They notice when someone is struggling and offer support. Over time, this kindness creates a loyal and hardworking team.\n\nLeadership is not about being the loudest person in the room or simply giving orders. It is about guiding, listening, and caring. A truly good leader helps others grow, and in doing so, helps the whole team succeed together.",
        summaryJa: "良いリーダーとは何かについて。どの会社やチームにも、普通は誰かがリーダー役を担い、共通の目標へ皆を導く。だが全てのリーダーが同じではなく、人の力を引き出す人もいれば、チームを疲れさせる人もいる。良いリーダーの条件は何か。一つは明確な伝達で、目標とその理由を説明し、皆が目的を理解すると意欲が高まり自ら良い判断をする。もう一つは傾聴で、命じるだけでなく意見を求め、より良い提案には考えを変える。すると部下は尊重されていると感じる。危機でも冷静で、失敗を人のせいにせず責任を取る姿勢が信頼を生む。さらに最良のリーダーは成果だけでなく人を気にかけ、苦しむ人を支える。声の大きさや命令でなく、導き・聴き・思いやることがリーダーシップだ。",
        quiz: [
          { q: "What is one important quality of a good leader?", options: ["Clear communication of the goal", "Keeping all plans secret", "Never speaking to the team"], answer: 0 },
          { q: "How do strong leaders treat their team's ideas?", options: ["They listen and may change their minds", "They ignore every idea", "They forbid all suggestions"], answer: 0 },
          { q: "What does a good leader do when a mistake happens?", options: ["Takes responsibility instead of blaming others", "Panics and spreads fear", "Hides from the team"], answer: 0 }
        ]
      },
      {
        id: "d1017-2",
        title: "How Telescopes Let Us See the Universe",
        level: "★★☆",
        genre: "テクノロジー",
        text: "On a clear night, we can see thousands of stars with our eyes alone. But the universe holds far more than we can see this way. To look deeper into space, scientists use telescopes, instruments that make faraway objects appear closer and brighter. Thanks to them, we have discovered planets, galaxies, and the history of the universe itself.\n\nHow does a telescope work? The main job of a telescope is to collect light. Our eyes are small, so they gather only a little light. A telescope has a large lens or, more often, a large curved mirror that gathers much more. The bigger the mirror, the more light it catches, and the fainter the objects it can show. The telescope then focuses this light into a clear, bright image.\n\nDifferent telescopes see different things. Some study ordinary light, the kind our eyes can see. Others are built to detect kinds of light that are invisible to us, such as ultraviolet light or radio waves. By studying these hidden forms of light, scientists learn things that no ordinary photograph could reveal.\n\nThe most powerful telescopes are placed in space. Above the Earth's air, which blurs and blocks light, they get a perfectly clear view. Space telescopes have sent back amazing images of distant galaxies billions of light-years away.\n\nEvery telescope, from a small one in a garden to a giant in orbit, does the same wonderful thing. It gathers ancient light from across the universe and lets human beings explore worlds we can never visit.",
        summaryJa: "望遠鏡が宇宙を見せてくれる仕組みについて。晴れた夜には肉眼で何千もの星が見えるが、宇宙はそれよりはるかに多くを抱える。より深く見るため科学者は望遠鏡を使い、遠くの物を近く明るく見せる。おかげで惑星や銀河、宇宙の歴史まで分かった。望遠鏡の主な仕事は光を集めることだ。目は小さく少しの光しか集められないが、望遠鏡は大きなレンズや、多くは大きな曲面鏡でずっと多く集める。鏡が大きいほど多くの光を捉え、暗い天体も見える。その光を鮮明な像に結ぶ。普通の光を見るものもあれば、紫外線や電波など目に見えない光を捉えるものもある。最も強力なものは宇宙に置かれ、大気のゆがみを避けて鮮明に見る。はるか彼方の銀河の像を送ってきた。",
        quiz: [
          { q: "What is the main job of a telescope?", options: ["To collect light", "To make noise", "To heat the stars"], answer: 0 },
          { q: "Why can bigger mirrors show fainter objects?", options: ["They catch more light", "They are heavier", "They are closer to stars"], answer: 0 },
          { q: "Why are the most powerful telescopes placed in space?", options: ["Above the air, they get a perfectly clear view", "Space is warmer", "There is no reason"], answer: 0 }
        ]
      },
      {
        id: "d1017-3",
        title: "How the World Protects Endangered Animals",
        level: "★★★",
        genre: "世界情勢",
        text: "Across the world, many kinds of animals are in danger of disappearing forever. Elephants, tigers, sea turtles, and countless others have become rare. When a species vanishes, it is gone for all time. Because animals do not respect borders, protecting them has become a task that nations must share.\n\nAnimals become endangered for several reasons. People clear forests where they live, hunt them illegally, or pollute their rivers and seas. A warming climate also forces some animals out of their natural homes. Often, a single country cannot solve these problems alone, because the same animals migrate across many lands and oceans.\n\nFor this reason, countries have made agreements to protect wildlife together. One important agreement controls the trade of endangered animals and their parts, making it illegal to buy or sell them across borders. This helps reduce the hunting of rare creatures for profit.\n\nNations cooperate in other ways too. They create protected parks where animals can live safely, share scientific knowledge, and send money to poorer countries to help them guard their forests and seas. Rangers from different nations are even trained to stop illegal hunters.\n\nThere have been real successes. Some animals that were once nearly extinct, such as certain whales, have slowly grown in number again thanks to international protection.\n\nThe work is far from over, and many species remain at risk. Yet the effort shows an important truth: the natural world belongs to everyone, and saving it is a responsibility that crosses every border.",
        summaryJa: "世界が絶滅危惧動物を守る仕組みについて。世界中で多くの動物が永久に姿を消す危機にある。ゾウやトラ、ウミガメなど多くが希少になった。種が消えれば二度と戻らない。動物は国境を守らないため、保護は各国が分担すべき課題だ。原因は、生息地の森の伐採、密猟、川や海の汚染で、温暖化も住みかを奪う。同じ動物が多くの土地や海を渡るため、一国だけでは解決できない。そこで各国は協力して野生動物を守る取り決めを作った。重要な協定は絶滅危惧種やその部位の国際取引を規制し、売買を違法とする。各国は保護区を作り、科学知識を共有し、貧しい国へ資金を送り、監視員を訓練する。国際的保護でクジラなどが回復した例もある。自然は皆のものだ。",
        quiz: [
          { q: "Why must nations share the task of protecting animals?", options: ["Animals migrate across borders and oceans", "Animals belong to one country", "Borders stop all animals"], answer: 0 },
          { q: "What does one important agreement control?", options: ["The trade of endangered animals across borders", "The price of food", "The speed of cars"], answer: 0 },
          { q: "What is one success mentioned?", options: ["Some whales have grown in number again", "All animals are now safe", "Hunting has completely ended"], answer: 0 }
        ]
      },
      {
        id: "d1017-4",
        title: "Soba and Udon: Japan's Beloved Noodles",
        level: "★★☆",
        genre: "日本",
        text: "Noodles are one of the most popular foods in Japan, enjoyed quickly at a train station or slowly at home. Among the many kinds, two of the most loved are soba and udon. Though both are noodles served in a tasty broth, they are quite different, and many Japanese people have a strong favorite.\n\nSoba noodles are thin and brownish-gray, made from buckwheat flour. They have a slightly nutty taste and a firm texture. Soba can be served hot in a warm soup or cold on a bamboo tray with a dipping sauce, which is especially popular in summer. Buckwheat is also seen as healthy, which adds to soba's good reputation.\n\nUdon noodles are thick, white, and soft, made from wheat flour. They are chewy and mild in flavor, which makes them comforting, especially on a cold day. Udon is usually served hot in a light, warm broth, often topped with green onions, a piece of fried food called tempura, or a raw egg.\n\nBoth noodles are sold everywhere, from simple stand-up shops in stations to fine restaurants. Each region of Japan has its own style, broth, and toppings, so the same dish can taste different from town to town.\n\nThere is even a tradition of eating soba on New Year's Eve, as the long noodles are said to represent a long life. Whether thin and nutty or thick and soft, these noodles are a warm and everyday part of life in Japan.",
        summaryJa: "日本の人気麺、そばとうどんについて。麺は日本で最も人気の食べ物の一つで、駅で手早く、家でゆっくり楽しまれる。中でも特に愛されるのがそばとうどんだ。どちらもおいしい汁で食べる麺だが、かなり違い、好みが分かれる。そばは細く茶灰色で、そば粉から作られ、やや香ばしく歯ごたえがある。温かい汁でも、夏に人気の冷たいせいろ（つけ汁）でも食べる。健康的ともされる。うどんは太く白くやわらかで、小麦粉から作られ、もちもちして穏やかな味で、寒い日に心地よい。温かい薄い汁で、ねぎ・天ぷら・生卵をのせることが多い。地域ごとに汁や具が違う。大晦日に長寿を願ってそばを食べる習わしもある。日常の温かい一部だ。",
        quiz: [
          { q: "What is soba made from?", options: ["Buckwheat flour", "Rice only", "Potatoes"], answer: 0 },
          { q: "How are udon noodles described?", options: ["Thick, white, and soft", "Thin and brownish-gray", "Hard and salty"], answer: 0 },
          { q: "Why is soba eaten on New Year's Eve?", options: ["The long noodles are said to represent a long life", "It is the cheapest food", "It must be eaten cold"], answer: 0 }
        ]
      },
      {
        id: "d1017-5",
        title: "Why Do Birds Migrate?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "Every year, as the seasons change, billions of birds make long journeys across the Earth. Some fly thousands of kilometers, from one continent to another, and then return months later. This amazing travel is called migration. But why do birds take such difficult and dangerous trips instead of simply staying in one place?\n\nThe main reason is food. In autumn, as the weather turns cold in northern lands, insects disappear and plants stop growing. Food becomes scarce. Rather than starve through the winter, many birds fly south to warmer regions where food is still plentiful. When spring returns and the north grows rich with food again, they fly back to raise their young.\n\nMigration is also about safety and space for breeding. The far north has long summer days and few predators, making it a good place to lay eggs and feed chicks. So birds travel north in spring to breed and south in autumn to survive.\n\nHow birds find their way is one of nature's great mysteries. Scientists believe they use the Sun and stars, remember landmarks like rivers and coasts, and can even sense the Earth's magnetic field, like a built-in compass. Young birds often know which way to go without being taught.\n\nMigration is hard and risky. Birds face storms, tiredness, and hunger along the way. Yet this incredible journey has helped birds survive for millions of years, following the food and the warmth in an endless rhythm around our turning planet.",
        summaryJa: "鳥が渡りをする理由について。毎年、季節が変わると何十億もの鳥が地球上を長く旅する。大陸から大陸へ何千キロも飛び、数か月後に戻るものもいる。この驚くべき移動を渡りと呼ぶ。なぜ一か所にとどまらず、難しく危険な旅をするのか。主な理由は食べ物だ。秋に北の地が寒くなると昆虫が消え植物も育たず、食料が乏しくなる。冬に飢えるより、多くの鳥は食料の豊富な暖かい南へ飛ぶ。春に北が再び豊かになると戻って子を育てる。渡りは繁殖の安全と空間のためでもあり、北の長い夏の日と少ない天敵は産卵と育雛に適する。方角の見つけ方は謎で、太陽や星、川や海岸の記憶、地球の磁場の感知（体内の羅針盤）を使うとされる。嵐や疲れ、空腹の危険があるが、何百万年も鳥を生かしてきた。",
        quiz: [
          { q: "What is the main reason birds migrate?", options: ["To find food", "To get lost", "To avoid flying"], answer: 0 },
          { q: "Why do many birds travel to the far north in spring?", options: ["It is a good, safe place to breed", "It has no food", "It is always dark"], answer: 0 },
          { q: "How do scientists think birds find their way?", options: ["Using the Sun, stars, landmarks, and Earth's magnetic field", "By asking people", "By reading maps"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-10-16",
    passages: [
      {
        id: "d1016-1",
        title: "Why Companies Recall Products",
        level: "★★☆",
        genre: "ビジネス",
        text: "Sometimes a company announces that it is \"recalling\" one of its products. This means it is asking customers to return or stop using something they already bought, usually because a problem has been found. A car maker might recall cars with a faulty part, or an electronics company might recall a machine that could overheat. Recalls can be costly and embarrassing, so why do companies do them?\n\nThe main reason is safety. If a product could hurt someone, a responsible company must act quickly, even if it loses money. For example, if a washing machine has a part that might catch fire, the company will offer to repair or replace it for free. Fixing the problem early is far better than waiting for someone to be harmed.\n\nRecalls also protect something less visible but very valuable: trust. Customers are more likely to forgive a company that admits a mistake and fixes it than one that tries to hide a danger. A well-handled recall can even show that a company cares about its customers.\n\nIn many countries, laws require companies to report serious product problems. Government agencies watch over this process and can order a recall if a company does not act. This system helps keep dangerous goods off the shelves.\n\nOf course, recalls cost money and can damage a brand for a time. But the alternative, leaving an unsafe product in people's homes, is far worse. In the end, a recall is a company choosing safety and honesty over short-term profit.",
        summaryJa: "企業が製品を回収（リコール）する理由について。企業が製品を「リコール」すると発表することがある。これは問題が見つかったために、すでに購入した製品の返却や使用中止を客に求めることだ。自動車会社が不具合部品の車を回収したり、電機会社が過熱の恐れある機械を回収したりする。費用もかかり体面も悪いのになぜ行うのか。主な理由は安全だ。人を傷つけうる製品には、損をしても責任ある企業は素早く動く。例えば発火の恐れある洗濯機の部品は無償で修理・交換する。早く直す方が、誰かが害を受けるのを待つよりずっと良い。リコールは信頼も守る。隠すより過ちを認め直す企業の方が許されやすい。多くの国で重大な問題の報告が法で義務づけられ、政府機関が監督する。安全と誠実を短期利益より優先する選択だ。",
        quiz: [
          { q: "What does it mean when a company 'recalls' a product?", options: ["It asks customers to return or stop using it", "It sells more of it", "It raises its price"], answer: 0 },
          { q: "What is the main reason companies recall products?", options: ["Safety", "To make more money quickly", "To win awards"], answer: 0 },
          { q: "Why can a well-handled recall help a company?", options: ["It can protect customers' trust", "It hides all problems", "It removes all laws"], answer: 0 }
        ]
      },
      {
        id: "d1016-2",
        title: "How Self-Driving Cars Work",
        level: "★★☆",
        genre: "テクノロジー",
        text: "For many years, a car that drives itself was only an idea in science fiction. Today, real self-driving cars are being tested on roads around the world. These vehicles can steer, brake, and change lanes with little or no help from a human. But how can a car \"see\" the road and make safe decisions on its own?\n\nA self-driving car depends on sensors, its electronic eyes and ears. Cameras watch for traffic lights, road signs, and lane markings. Radar measures the distance to other cars, even in rain or fog. Many cars also use a system called lidar, which sends out laser beams to build a detailed three-dimensional map of everything around the vehicle. Together, these sensors give the car a full picture of its surroundings.\n\nAll this information flows into a powerful computer, the car's \"brain.\" Using software, the computer decides what to do: when to slow down, when to turn, and when to stop. It must make these choices many times each second, faster than a human could.\n\nSome new systems also share information. Cars can receive data from road sensors and traffic signals, helping them understand what is happening even around a corner they cannot see.\n\nSelf-driving cars are not yet perfect. They can struggle with unusual situations, bad weather, or confusing road work. But supporters hope that one day they will reduce accidents, since most crashes are caused by human mistakes. The road ahead is long, but the technology keeps moving forward.",
        summaryJa: "自動運転車の仕組みについて。長年、自ら走る車はSFの中の発想だったが、今や実物が世界各地の道路で試験されている。人の助けをほとんど借りずにハンドル操作・ブレーキ・車線変更ができる。どうやって道を「見て」安全に判断するのか。鍵はセンサー、いわば電子の目と耳だ。カメラは信号・標識・車線を見張り、レーダーは雨や霧でも他車との距離を測る。多くはライダーという装置でレーザーを放ち周囲の立体地図を作る。これらが車に周囲の全体像を与える。情報は強力なコンピューター（車の「脳」）に集まり、ソフトが減速・曲がる・止まるを毎秒何度も判断する。道路センサーや信号の情報を受け取り、見えない角の先を知る車もある。まだ完璧でないが、事故削減が期待される。",
        quiz: [
          { q: "What do the sensors on a self-driving car act as?", options: ["Its electronic eyes and ears", "Its engine", "Its seats"], answer: 0 },
          { q: "What does lidar do?", options: ["Sends laser beams to build a 3D map of the surroundings", "Plays music", "Cleans the windows"], answer: 0 },
          { q: "Why do supporters hope self-driving cars will reduce accidents?", options: ["Most crashes are caused by human mistakes", "Cars never move", "Humans drive perfectly"], answer: 0 }
        ]
      },
      {
        id: "d1016-3",
        title: "Keeping the Skies Safe: Shared Air-Travel Rules",
        level: "★★★",
        genre: "世界情勢",
        text: "At this very moment, thousands of airplanes are flying above the Earth, carrying millions of people between countries. A plane might take off in one nation, cross the airspace of several others, and land on a different continent. For this to happen safely every day, the countries of the world must follow the same rules. Air travel is one of the clearest examples of global cooperation.\n\nLong ago, as flying grew popular, a problem appeared. Each country had its own ideas about how planes should operate. But an airplane does not stop at a border, so different rules could be dangerous. To solve this, nations agreed to create shared standards for flying, managed through international cooperation.\n\nToday, these shared rules cover almost everything. Pilots around the world are trained to similar standards. Air traffic controllers use English as a common language, so a pilot from Japan and a controller in France can understand each other. Even the markings on runways and the meaning of signals are the same worldwide.\n\nSafety is the greatest goal. When a serious accident happens, experts from different countries often investigate together, and the lessons are shared so the same mistake is less likely to happen again anywhere.\n\nThis cooperation does not remove competition between airlines, nor does it erase borders. Instead, it shows that on certain shared challenges, countries gain far more by agreeing than by acting alone. Every safe landing is a quiet reminder that the world can, when it chooses, work as one.",
        summaryJa: "空の安全を支える国際的な航空ルールについて。今この瞬間も何千もの飛行機が地球上空を飛び、何百万もの人を国から国へ運んでいる。ある国で離陸し、いくつもの国の空を越え、別の大陸に着陸することもある。これを毎日安全に行うには、世界の国々が同じルールに従う必要がある。航空は国際協力の最も分かりやすい例の一つだ。昔、飛行機が普及すると各国の考えが異なり危険だった。飛行機は国境で止まらないため、各国は共通基準を作ることで合意した。今やルールはほぼ全てを網羅し、操縦士の訓練水準は世界共通、管制官は英語を共通言語に使い、滑走路の表示や合図の意味も世界共通だ。重大事故は各国の専門家が共同調査し教訓を共有する。合意する方が単独より得だと示している。",
        quiz: [
          { q: "Why do countries need shared rules for air travel?", options: ["Airplanes cross borders, so different rules would be dangerous", "Planes never leave one country", "Rules make flying slower"], answer: 0 },
          { q: "What common language do air traffic controllers use?", options: ["English", "Only their own language", "No language at all"], answer: 0 },
          { q: "What happens after a serious air accident?", options: ["Experts from different countries investigate and share lessons", "Everyone forgets it", "All planes are destroyed"], answer: 0 }
        ]
      },
      {
        id: "d1016-4",
        title: "Chopsticks: How to Use Them in Japan",
        level: "★★☆",
        genre: "日本",
        text: "In Japan, most meals are eaten with a pair of thin sticks called chopsticks, or hashi. For visitors who have never used them, they can seem tricky at first, but with a little practice, they become easy and even enjoyable. Learning to use chopsticks is a small but useful step into Japanese daily life.\n\nTo hold chopsticks, you rest one stick on your ring finger and the base of your thumb, keeping it still. You move the other stick with your thumb, index, and middle fingers, like holding a pencil. Only the top stick moves, pinching food between the two tips. It takes practice, but soon it feels natural.\n\nIn Japan, there are also polite manners to follow. Some actions are considered rude because they remind people of customs used at funerals. For example, you should never stick your chopsticks straight up in a bowl of rice, and you should not pass food directly from your chopsticks to someone else's. When you are not using them, you rest the chopsticks neatly on a small holder or across your bowl.\n\nChopsticks are usually made of wood, bamboo, or plastic, and many families have their own favorite pairs. In restaurants, simple wooden chopsticks are often split apart from a single piece just before the meal.\n\nMore than just tools for eating, chopsticks reflect a culture of care and respect at the table. Using them well, and politely, is a simple way to show appreciation for the meal and for the people sharing it.",
        summaryJa: "日本での箸の使い方について。日本ではほとんどの食事を「箸」という細い二本の棒で食べる。初めての人には難しく見えるが、少し練習すれば簡単で楽しくなる。箸を使えることは日本の日常への小さな一歩だ。持ち方は、一本を薬指と親指の付け根に乗せて動かさず、もう一本を親指・人さし指・中指で鉛筆のように動かす。上の箸だけを動かし、二本の先で食べ物をつまむ。作法もあり、葬儀を連想させる動作は失礼とされる。例えばご飯に箸を立てたり、箸から箸へ直接食べ物を渡したりしない。使わない時は箸置きや器の上に置く。箸は木・竹・プラスチック製で、割り箸は食前に割る。食事と同席者への敬意を示す文化を映す。",
        quiz: [
          { q: "How do you use chopsticks?", options: ["Keep one stick still and move the other like a pencil", "Move both sticks wildly", "Hold them in your fist only"], answer: 0 },
          { q: "What is considered rude in Japan?", options: ["Sticking chopsticks straight up in a bowl of rice", "Using a chopstick holder", "Eating quietly"], answer: 0 },
          { q: "What do chopsticks reflect, according to the passage?", options: ["A culture of care and respect at the table", "A dislike of food", "A love of noise"], answer: 0 }
        ]
      },
      {
        id: "d1016-5",
        title: "How Do Rainbows Form?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "After a rain shower, when the Sun comes out again, you may see one of nature's most beautiful sights: a rainbow arching across the sky. Its band of colors, from red to violet, has amazed people for thousands of years. But a rainbow is not really an object in the sky. It is made of sunlight, rain, and your own eyes working together.\n\nThe secret is that sunlight, which looks white, is really a mixture of all colors. Normally these colors travel together and we do not notice them. But when sunlight passes through a raindrop, something special happens. As the light enters the drop, it bends, and the different colors bend by slightly different amounts. The light bounces off the back of the drop and bends again as it comes out. This spreads the white light into its separate colors, like a tiny prism.\n\nMillions of raindrops do this at the same time. Each drop sends a particular color toward your eyes, depending on its position in the sky. Together, all these drops create the great arc of colors we call a rainbow.\n\nA rainbow always appears in the part of the sky opposite the Sun. That is why you see them when the Sun is low, in the morning or late afternoon, with rain in front of you. Because the rainbow depends on where you stand, no two people see exactly the same one. Your rainbow is truly your own.",
        summaryJa: "虹のでき方について。雨上がりに太陽が出ると、空にかかる虹という自然の美しい光景が見える。赤から紫までの色の帯は何千年も人を驚かせてきた。だが虹は空にある物体ではなく、太陽光と雨とあなたの目が共に作るものだ。鍵は、白く見える太陽光が実は全ての色の混合であること。普段は色が一緒に進み気づかないが、光が雨粒を通ると特別なことが起こる。粒に入る時に光が曲がり、色ごとに曲がる量がわずかに違う。粒の奥で反射し、出る時にまた曲がって、白い光が小さなプリズムのように分かれる。無数の雨粒が同時にこれを行い、各粒が位置に応じた色を目へ送り、色の大きな弧になる。虹は必ず太陽と反対側に見え、立つ位置で変わるため、同じ虹を見る人はいない。",
        quiz: [
          { q: "What is a rainbow really made of?", options: ["Sunlight, rain, and your eyes working together", "Colored glass in the sky", "Painted clouds"], answer: 0 },
          { q: "What happens when sunlight passes through a raindrop?", options: ["It bends and splits into separate colors", "It disappears", "It turns to rain"], answer: 0 },
          { q: "Where does a rainbow always appear?", options: ["In the part of the sky opposite the Sun", "Right next to the Sun", "Only straight above you"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-10-15",
    passages: [
      {
        id: "d1015-1",
        title: "What Are Stocks and Shares?",
        level: "★★★",
        genre: "ビジネス",
        text: "In the business news, you often hear that markets have \"gone up\" or \"fallen.\" These reports are about stocks, also called shares. A share is a small piece of ownership in a company. If you own shares in a business, you own a tiny part of it. But why do companies sell pieces of themselves, and why do people buy them?\n\nCompanies sell shares mainly to raise money. Suppose a company wants to build a new factory but does not have enough cash. Instead of only borrowing from a bank, it can sell shares to the public. Many people each pay a little, and together they provide a large sum. In return, those people become part-owners.\n\nPeople buy shares hoping to gain in two ways. First, if the company does well and grows, the value of each share may rise, so the shares can be sold later for more than they cost. Second, some companies share part of their profits with owners through regular payments called dividends.\n\nBut shares carry risk. If a company does badly, the value of its shares can fall, and owners may lose money. Share prices also move up and down with the news, the economy, and even people's feelings. Some days, markets rise sharply; other days, they drop.\n\nUnderstanding shares helps people follow the economy and make careful choices. Owning part of a company can be rewarding, but it is never a sure thing. Wise investors learn to think long-term and never risk money they cannot afford to lose.",
        summaryJa: "株式とは何かについて。ニュースで市場が「上がった」「下がった」と聞くのは株式（シェア）の話だ。株は会社の所有権の小さな一片で、株を持てばその会社のごく一部を所有することになる。会社が株を売る主な理由は資金調達だ。新工場を建てたいが現金が足りない時、銀行から借りるだけでなく一般に株を売れる。多くの人が少しずつ払い、合わせて大きな額になり、買った人は共同所有者となる。買い手は二つの利益を期待する。会社が成長すれば株の価値が上がり高く売れること、利益の一部が配当として分配されること。だが会社が不振なら株価は下がり損もする。株価は報道や景気、人々の気分でも動く。長期で考え、失ってよい範囲でと賢い投資家は学ぶ。",
        quiz: [
          { q: "What is a share?", options: ["A small piece of ownership in a company", "A type of bank loan", "A government tax"], answer: 0 },
          { q: "Why do companies sell shares?", options: ["Mainly to raise money", "To lose customers", "To close down"], answer: 0 },
          { q: "What is a risk of owning shares?", options: ["Their value can fall and you may lose money", "They always rise", "They are free"], answer: 0 }
        ]
      },
      {
        id: "d1015-2",
        title: "How Rockets Reach Space",
        level: "★★☆",
        genre: "テクノロジー",
        text: "Launching a rocket into space is one of the most dramatic sights in science. With a roar and a cloud of smoke, a tall machine rises slowly, then faster and faster, until it disappears into the sky. But how does a rocket escape the pull of the Earth and reach space?\n\nThe main challenge is gravity. Earth's gravity pulls everything down, so to leave the ground, a rocket must push upward with enormous force. Rockets create this force by burning fuel very quickly. As the fuel burns, it makes hot gas, which shoots out of the bottom of the rocket at great speed. This rushing gas pushes the rocket in the opposite direction, upward. It is the same idea as letting go of a balloon and watching it fly around the room.\n\nA rocket must also go incredibly fast. To stay in orbit around the Earth, it needs to travel at about 28,000 kilometers per hour. At that speed, it keeps falling toward the Earth but keeps missing it, circling the planet instead.\n\nBecause so much fuel is needed, most rockets are built in parts called stages. When the first stage uses up its fuel, it drops away, making the rocket lighter so the next stage can push on. In the past, these parts were lost, but today some companies land them again to reuse them.\n\nReaching space is difficult and expensive, yet rockets have carried people to the Moon and machines across the solar system, turning the dream of space travel into reality.",
        summaryJa: "ロケットが宇宙へ到達する仕組みについて。ロケットの打ち上げは科学で最も劇的な光景の一つで、轟音と煙とともに背の高い機体がゆっくり、やがて速く上昇し空へ消える。最大の課題は重力だ。地球の重力は全てを下へ引くため、離陸には巨大な上向きの力が要る。ロケットは燃料を一気に燃やし、高温のガスを機体の下から高速で噴き出す。そのガスが反対方向（上）へロケットを押す。風船を手放すと飛び回るのと同じ原理だ。さらに猛烈な速さが必要で、地球を回る軌道に乗るには時速約2万8千キロで進む。落ち続けながら地球をかすめ続け周回する。燃料が大量に要るため多くは段（ステージ）に分かれ、使い切った段を切り離して軽くする。近年は再利用のため着陸させる企業もある。",
        quiz: [
          { q: "How does a rocket push itself upward?", options: ["By shooting hot gas out of the bottom at great speed", "By flapping wings", "By using a big fan"], answer: 0 },
          { q: "Why does a rocket need to go so fast to stay in orbit?", options: ["So it keeps falling toward Earth but keeps missing it", "So it can make noise", "So it can turn colors"], answer: 0 },
          { q: "Why are rockets built in stages?", options: ["To drop empty parts and become lighter", "To look taller", "To carry more passengers only"], answer: 0 }
        ]
      },
      {
        id: "d1015-3",
        title: "How Does International Mail Reach You?",
        level: "★★☆",
        genre: "世界情勢",
        text: "Imagine sending a letter or a small parcel from Japan to a friend in Brazil. It travels thousands of kilometers, crosses several countries, and is handled by different postal workers who speak different languages. Yet, with the right address and stamp, it usually arrives. How does mail travel so smoothly between nations?\n\nThe answer is quiet international cooperation. Long ago, sending mail abroad was difficult. Each country had its own rules, and senders sometimes had to pay several different postal services along the way. To fix this, countries agreed to work together and created an organization to set shared rules for international post.\n\nThanks to these rules, the system is simple for the sender. You pay postage only once, in your own country, using your own stamps. Your national post office then passes the mail to the next country, which carries it onward. The countries settle the costs between themselves later. In this way, many separate postal services act like one giant network.\n\nShared standards make it work. Addresses follow common patterns, and special codes help machines sort millions of items quickly. Airplanes, ships, trucks, and trains all play a part in the journey.\n\nToday, people send fewer letters, but online shopping has created a flood of parcels crossing borders. The old system has had to grow and change to keep up.\n\nThe next time a postcard arrives from far away, remember the quiet agreement between nations that carried it. It is a small, everyday example of how the world chooses to cooperate.",
        summaryJa: "国際郵便が届く仕組みについて。日本からブラジルの友人へ手紙や小包を送ると、何千キロも旅し、いくつもの国を越え、言語の違う郵便職員が扱う。それでも正しい住所と切手があればたいてい届く。なぜ国家間をなめらかに運べるのか。答えは静かな国際協力だ。昔は各国の規則が異なり、途中で複数の郵便に支払うこともあった。これを解決するため各国が協力し、国際郵便の共通規則を定める組織を作った。おかげで送り手は自国で一度切手を貼るだけでよく、自国の郵便が次の国へ渡し、各国が後で費用を精算する。多くの郵便が一つの巨大網のように働く。住所の共通様式や郵便番号で機械が高速に仕分ける。近年は手紙が減る一方、通販で小包が国境を越えて急増している。",
        quiz: [
          { q: "Why was sending mail abroad difficult long ago?", options: ["Each country had its own rules and separate payments", "There was no paper", "No one could write"], answer: 0 },
          { q: "How many times does the sender usually pay postage?", options: ["Once, in their own country", "In every country it passes", "Never"], answer: 0 },
          { q: "What has recently increased international mail?", options: ["Online shopping creating many parcels", "Fewer people on Earth", "The end of airplanes"], answer: 0 }
        ]
      },
      {
        id: "d1015-4",
        title: "Karaoke: Singing Together in Japan",
        level: "★★☆",
        genre: "日本",
        text: "Few forms of entertainment are as closely linked to Japan as karaoke. The word means empty orchestra, because the music plays without a singer, leaving the singing to you. Invented in Japan in the 1970s, karaoke has since spread to almost every country in the world.\n\nKaraoke is simple. A machine plays the music of a popular song while the words appear on a screen. Singers follow the words and sing along, with no need to remember the lyrics. It does not matter if you are a great singer or a terrible one; the point is to have fun.\n\nIn Japan, people often enjoy karaoke in special places called karaoke boxes. These are small private rooms that a group can rent by the hour. Friends, families, or coworkers go inside, order drinks and snacks, and take turns singing just for each other. Because the room is private, even shy people feel brave enough to try.\n\nKaraoke plays an important social role. After a long day, coworkers may go together to sing and relax, growing closer in a way that a formal meeting never allows. For many people, it is a cheerful way to release stress and share laughter.\n\nFrom a simple machine to a worldwide hobby, karaoke shows how a fun idea can cross every border. Whether sung well or badly, a karaoke song is really about something universal: the simple joy of making music and sharing a happy moment with others.",
        summaryJa: "日本のカラオケについて。カラオケほど日本と結びついた娯楽は少ない。「空（から）のオーケストラ」を意味し、歌手なしで音楽が流れ、歌うのはあなた自身だ。1970年代に日本で生まれ、今や世界中に広まった。仕組みは簡単で、機械が人気曲の音楽を流し、画面に歌詞が出る。歌手はそれを追って歌え、歌詞を覚える必要がない。上手でも下手でも関係なく、楽しむことが目的だ。日本では「カラオケボックス」という時間貸しの小さな個室で楽しむことが多く、友人や家族、同僚が入って飲食し、順に歌う。個室なので恥ずかしがり屋も挑戦できる。長い一日の後に同僚と歌って打ち解け、ストレス発散にもなる。楽しい発想が国境を越えることを示す。",
        quiz: [
          { q: "What does the word 'karaoke' mean?", options: ["Empty orchestra", "Loud music", "Happy song"], answer: 0 },
          { q: "What is a 'karaoke box'?", options: ["A small private room a group can rent", "A kind of radio", "A type of drink"], answer: 0 },
          { q: "What social role does karaoke play in Japan?", options: ["Helping coworkers relax and grow closer", "Replacing all meetings", "Teaching people to cook"], answer: 0 }
        ]
      },
      {
        id: "d1015-5",
        title: "Why Is the Ocean Salty?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "If you have ever swum in the sea and tasted the water by accident, you know it is very salty. Rivers and lakes, however, are usually fresh, with little or no salt. This raises a curious question: if rivers flow into the sea, and rivers are not salty, why is the ocean so full of salt?\n\nThe answer begins on land. Rainwater is slightly acidic, and as it flows over rocks and soil, it slowly breaks them down. In doing so, it picks up tiny amounts of minerals, including salt. You cannot taste this salt in a river because the amount is so small. But every river carries this slight saltiness toward the sea.\n\nHere is the key. When seawater sits under the hot Sun, some of it evaporates, turning into vapor and rising to form clouds. But when water evaporates, it leaves the salt behind. So fresh water keeps arriving from rivers, carrying a little more salt each time, while pure water keeps leaving through evaporation. Over millions of years, the salt has built up, making the sea steadily saltier.\n\nSome places are saltier than others. In very hot areas where lots of water evaporates, the sea can be especially salty. In colder places, or where many rivers pour in, the water is less salty.\n\nSo the ocean's saltiness is the result of a slow, patient process, drop by drop, over an unimaginably long time. The sea is, in a way, a record of the land slowly dissolving into the water.",
        summaryJa: "海が塩辛い理由について。海で誤って海水を味わえば、とても塩辛いと分かる。一方、川や湖はたいてい真水で塩はほとんどない。川が海に流れ込み、川は塩辛くないのに、なぜ海は塩でいっぱいなのか。答えは陸から始まる。雨水はわずかに酸性で、岩や土を流れるうちに少しずつ溶かし、塩を含む微量の鉱物を拾う。川では量が少なく味を感じないが、どの川もこのわずかな塩気を海へ運ぶ。鍵はここだ。海水が太陽で温まると一部が蒸発して雲になるが、蒸発時に塩は残される。川から真水が塩を運び続け、蒸発で純水だけが出ていくため、何百万年もかけて塩がたまり海は徐々に塩辛くなった。暑い地域の海は特に塩辛く、寒い地域や川が多い所は塩分が低い。",
        quiz: [
          { q: "Where does the salt in the ocean mainly come from?", options: ["Minerals that rivers pick up from rocks and soil", "Fish making salt", "Salt falling from the sky"], answer: 0 },
          { q: "Why does salt build up in the sea?", options: ["Water evaporates and leaves the salt behind", "The sea eats salt", "Rivers remove salt"], answer: 0 },
          { q: "Where is the sea especially salty?", options: ["In very hot areas where lots of water evaporates", "Where many rivers pour in", "In cold places only"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-10-14",
    passages: [
      {
        id: "d1014-1",
        title: "What Is Inflation?",
        level: "★★★",
        genre: "ビジネス",
        text: "Have you ever heard an older person say, \"When I was young, this cost half as much\"? They are describing inflation, one of the most important ideas in economics. Inflation means that, over time, prices slowly rise, and each unit of money buys a little less than it did before.\n\nA small amount of inflation is normal and even healthy. In most years, prices creep up gently, perhaps two or three percent. This usually goes unnoticed in daily life. The trouble begins when inflation becomes high. If prices rise quickly, people's savings and wages buy less, and families feel poorer even if their pay has not changed.\n\nWhat causes inflation? One common cause is demand. When many people want to buy goods but there are not enough to go around, sellers raise their prices. Another cause is rising costs. If fuel or materials become more expensive, companies pass those higher costs on to customers. Sometimes, if there is simply too much money in the economy, its value falls and prices climb.\n\nGovernments and central banks watch inflation carefully. To slow it down, a central bank may raise interest rates, making borrowing more expensive, which cools spending. But if they act too strongly, they can slow the whole economy.\n\nInflation affects everyone, from shoppers to business owners. Understanding it helps people make better choices about saving, spending, and planning for the future. Behind the simple fact of rising prices lies a powerful force that shapes the whole economy.",
        summaryJa: "インフレーション（インフレ）とは何かについて。年配の人が「若い頃はこれが半額だった」と言うのはインフレの話だ。インフレとは、時とともに物価が少しずつ上がり、同じ金額で買える量が前より減ることをいう。少しのインフレは正常で健全であり、多くの年は2〜3%ほど緩やかに上がり日常では気づきにくい。問題は高インフレで、急に物価が上がると貯金や給料の価値が下がり、給料が同じでも生活が苦しく感じる。原因は需要（欲しい人が多く品が足りない）、費用の上昇（燃料や材料の高騰）、お金が多すぎて価値が下がることなど。中央銀行は金利を上げて支出を冷ますが、やりすぎると経済全体が鈍る。インフレは誰にも影響し、理解は賢い選択に役立つ。",
        quiz: [
          { q: "What does inflation mean?", options: ["Prices slowly rise and money buys less", "Prices always fall", "Money buys more over time"], answer: 0 },
          { q: "What is one common cause of inflation?", options: ["High demand with not enough goods", "Too few shoppers", "Falling fuel costs only"], answer: 0 },
          { q: "How might a central bank slow inflation?", options: ["By raising interest rates", "By printing much more money", "By lowering all prices itself"], answer: 0 }
        ]
      },
      {
        id: "d1014-2",
        title: "How Contactless Cards Work",
        level: "★★☆",
        genre: "テクノロジー",
        text: "In many cities, people now pay for a train, a coffee, or a bus by simply touching a card or phone against a reader. There is no need to swipe or type a number; a quick tap is enough. These are called contactless cards, and they are quietly replacing cash and paper tickets in daily life.\n\nThe secret inside the card is a tiny chip and a thin loop of wire, which acts as an antenna. Surprisingly, most of these cards have no battery at all. When you hold the card close to a reader, the reader sends out a weak radio signal. This signal gives the card just enough power to wake up and reply. In less than a second, the card and reader exchange information, and the payment or ticket is confirmed.\n\nBecause the card only works at a very short distance, usually a few centimeters, it will not activate by accident in your pocket. This short range is an important safety feature.\n\nContactless technology has many uses. The same idea powers train passes, office entry cards, and tap-to-pay bank cards. Phones and watches can now copy these cards too, so people can pay with a device they already carry.\n\nThe main benefits are speed and convenience. A busy train station can move thousands of people through its gates quickly when no one has to search for change. As more places adopt it, the simple tap is becoming one of the most common actions of modern daily life.",
        summaryJa: "非接触型（タッチ式）カードの仕組みについて。多くの都市で、人々は電車やコーヒー、バスの支払いをカードやスマホを読み取り機にかざすだけで済ませる。スワイプも番号入力も不要で、一瞬のタッチでよい。これが非接触型カードで、現金や紙の切符に静かに取って代わっている。カードの中には小さなチップとアンテナになる細い輪状の線があり、驚くことに多くは電池を持たない。読み取り機に近づけると弱い電波が送られ、その電波がカードを動かすわずかな電力を与え、1秒未満で情報をやり取りし決済や改札が確認される。数センチの至近距離でしか働かないため、ポケットの中で誤作動しない安全設計だ。交通系・入館・決済に使われ、スマホや時計でも使える。速さと利便性が利点だ。",
        quiz: [
          { q: "What is inside a contactless card?", options: ["A tiny chip and a loop of wire acting as an antenna", "A small battery and a motor", "A camera"], answer: 0 },
          { q: "Where does the card get its power to reply?", options: ["From the reader's weak radio signal", "From a built-in battery", "From sunlight"], answer: 0 },
          { q: "Why won't the card activate by accident in your pocket?", options: ["It only works at a very short distance", "It is always switched off", "It needs a password each time"], answer: 0 }
        ]
      },
      {
        id: "d1014-3",
        title: "What Does the Red Cross Do?",
        level: "★★☆",
        genre: "世界情勢",
        text: "When a terrible earthquake, flood, or other emergency strikes, one of the first groups to arrive and help is often the Red Cross. Its simple symbol, a red cross on a white background, is known in almost every country. But what exactly is this organization, and what does it do?\n\nThe Red Cross began more than 150 years ago. A man named Henry Dunant saw many wounded soldiers left without care after a battle, and he believed that all people in need deserve help, no matter which side they are on. From this idea grew a worldwide movement dedicated to protecting human life and easing suffering.\n\nToday, the Red Cross and its partner, the Red Crescent, work in nearly every nation. Their volunteers do many kinds of work. They bring food, water, and shelter to people after disasters. They help families find loved ones who were separated by war or crisis. They also teach first aid, collect blood for hospitals, and support people during long emergencies.\n\nA key idea guides the Red Cross: it must stay neutral. In a conflict, it does not take sides. This neutrality allows its workers to help wounded or suffering people everywhere, and it lets them enter dangerous places that others cannot.\n\nThe Red Cross depends on millions of volunteers and on donations from the public. Its long history shows a simple but powerful belief: that in times of trouble, every human being deserves kindness, care, and hope.",
        summaryJa: "赤十字の活動について。大地震や洪水などの非常時に、最初に駆けつけ助ける団体の一つが赤十字だ。白地に赤い十字の記章はほぼ全ての国で知られる。赤十字は150年以上前に始まった。アンリ・デュナンが戦いの後に手当てを受けられない多くの負傷兵を見て、どちら側であれ困っている人は助けられるべきだと信じたことから、人命を守り苦しみを和らげる世界的運動が生まれた。今は赤十字と赤新月が各国で活動し、災害後に食料・水・住まいを届け、離ればなれの家族を再会させ、応急手当を教え、献血を集め、長い非常時を支える。要は中立で、紛争で味方せず、だからこそ危険な場所でも誰でも助けられる。多くのボランティアと寄付に支えられている。",
        quiz: [
          { q: "Who started the idea behind the Red Cross?", options: ["Henry Dunant, after seeing wounded soldiers", "A famous king", "A large company"], answer: 0 },
          { q: "What is one kind of work the Red Cross does?", options: ["Bringing food, water, and shelter after disasters", "Selling cars", "Building airplanes"], answer: 0 },
          { q: "Why does the Red Cross stay neutral?", options: ["So it can help suffering people on all sides", "To make more money", "To avoid helping anyone"], answer: 0 }
        ]
      },
      {
        id: "d1014-4",
        title: "Green Tea: Japan's Everyday Drink",
        level: "★★☆",
        genre: "日本",
        text: "In Japan, few things are as common and as loved as green tea. It is served in homes, offered to guests, sold in every shop, and even poured for free in many restaurants. For centuries, this simple green drink has been part of daily life, bringing a moment of calm to busy days.\n\nGreen tea comes from the leaves of a plant called the tea bush, the same plant that gives us black tea. The difference is in how the leaves are treated. For green tea, the fresh leaves are heated soon after picking, often with steam. This keeps them green and gives the tea its fresh, slightly grassy taste. Black tea, by contrast, is allowed to change color before drying.\n\nThere are many kinds of Japanese green tea. Everyday tea, called sencha, is enjoyed at home and at work. A bright green powder called matcha is whisked with hot water and used in the traditional tea ceremony and in many sweets. Roasted tea, with a warm, nutty flavor, is popular on cold days.\n\nGreen tea is also seen as healthy. It contains natural substances that many people believe are good for the body, and it is usually drunk without sugar or milk.\n\nMore than just a drink, green tea reflects a Japanese love of simple, natural things. A warm cup shared with others is a small act of welcome and care, a quiet tradition that continues in millions of homes every single day.",
        summaryJa: "日本の日常の飲み物、緑茶について。日本で緑茶ほど身近で愛されるものは少なく、家庭で出され、客にふるまわれ、どの店でも売られ、多くの飲食店で無料でも出される。何世紀も日常の一部で、忙しい日に静けさをもたらす。緑茶は茶の木の葉から作られ、紅茶と同じ植物だが処理が違う。緑茶は摘んですぐ蒸気などで加熱して緑を保ち、さわやかでやや草のような味になる。紅茶は乾かす前に色を変える。種類も多く、日常の煎茶、点てて使う鮮やかな粉末の抹茶（茶道や菓子に使う）、寒い日に人気の香ばしいほうじ茶などがある。砂糖やミルクを入れず飲むことが多く、健康的とされる。簡素で自然なものを愛する心を映す。",
        quiz: [
          { q: "How is green tea different from black tea?", options: ["Its leaves are heated soon after picking to stay green", "It comes from a totally different plant", "It is always sweet"], answer: 0 },
          { q: "What is 'matcha'?", options: ["A bright green powder whisked with hot water", "A kind of black tea", "A type of coffee"], answer: 0 },
          { q: "How is green tea usually drunk in Japan?", options: ["Without sugar or milk", "Only with lots of sugar", "Mixed with soup"], answer: 0 }
        ]
      },
      {
        id: "d1014-5",
        title: "How Clouds Form and Why It Rains",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "Clouds drift across the sky in endless shapes, sometimes white and soft, sometimes dark and heavy. We see them every day, yet they can seem mysterious. Where do clouds come from, and why does rain fall from some of them? The answer is a simple and beautiful cycle of water.\n\nIt begins with heat. The Sun warms lakes, rivers, and oceans, and some of the water turns into an invisible gas called water vapor, which rises into the air. This process is called evaporation. The higher the vapor goes, the cooler the air becomes.\n\nAs the vapor cools, it changes back into tiny drops of water, far too small and light to fall. Billions of these tiny drops gather together, and that is what a cloud really is: a great crowd of tiny water droplets floating in the sky.\n\nInside a cloud, the droplets bump into one another and join together. Little by little, they grow into larger drops. When a drop becomes heavy enough that the air can no longer hold it up, it falls to the ground as rain. If the air is very cold, the water may fall as snow instead.\n\nOnce the rain reaches the ground, it flows into rivers and seas, where it will one day evaporate and rise again. This endless journey is called the water cycle. So the rain on your window and the clouds above your head are part of the same water that has been traveling around our planet for millions of years.",
        summaryJa: "雲のでき方と雨が降る理由について。空には絶えず様々な形の雲が流れ、白くやわらかいこともあれば暗く重いこともある。毎日見るのに不思議に思える。雲はどこから来て、なぜ一部から雨が降るのか。答えは水の美しい循環だ。始まりは熱で、太陽が湖や川、海を温め、一部の水が目に見えない水蒸気になって空へ昇る。これを蒸発という。高く昇るほど空気は冷え、水蒸気は小さな水滴に戻る。軽くて落ちない無数の水滴が集まったものが雲だ。雲の中で水滴はぶつかって合わさり、少しずつ大きくなり、空気が支えきれない重さになると雨として落ちる。とても寒ければ雪になる。地面の雨は川や海へ流れ、いつかまた蒸発する。この循環を水循環と呼ぶ。",
        quiz: [
          { q: "What is a cloud really made of?", options: ["A great crowd of tiny water droplets", "Smoke from the ground", "Pieces of cotton"], answer: 0 },
          { q: "What is 'evaporation'?", options: ["Water turning into vapor and rising into the air", "Rain falling to the ground", "Ice becoming a rock"], answer: 0 },
          { q: "Why does a drop finally fall as rain?", options: ["It grows heavy enough that the air cannot hold it up", "The cloud pushes it down on purpose", "The Sun throws it down"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-10-13",
    passages: [
      {
        id: "d1013-1",
        title: "Why Companies Go to Trade Shows",
        level: "★★☆",
        genre: "ビジネス",
        text: "Every year, in large halls around the world, companies set up colorful stands to show their newest products. Thousands of visitors walk past, stopping to watch demonstrations and ask questions. These big events are called trade shows or exhibitions, and for many businesses they are an important part of the year.\n\nA trade show brings together many companies from the same industry in one place. There are shows for cars, for food, for technology, and for almost everything else. Some are open only to people who work in the industry, while others welcome the public too.\n\nWhy do companies spend so much money to take part? One reason is to show new products. A trade show lets a company reveal its latest work to a large audience all at once, often attracting attention from the news. Another reason is meeting people. In a single day, a company may talk to future customers, partners, and suppliers who would be hard to reach otherwise.\n\nTrade shows are also a chance to learn. By walking around, a company can see what its competitors are doing and discover new ideas. Visitors can compare many products side by side, which is difficult to do online.\n\nOf course, attending costs money and time, and the results are not always easy to measure. Yet for many businesses, the face-to-face contact is worth it. In a digital world, a trade show offers something rare: a place where people in an industry meet, shake hands, and see new ideas with their own eyes.",
        summaryJa: "企業が展示会に出る理由について。毎年、世界中の大きな会場で企業が色鮮やかなブースを構え最新製品を見せ、何千もの来場者が実演を見て質問する。こうした催しを展示会（トレードショー）と呼び、多くの企業にとって年間の重要な行事だ。展示会は同じ業界の多くの企業を一か所に集め、車・食品・技術などあらゆる分野にある。業界関係者限定のものも一般公開のものもある。参加理由の一つは新製品の発表で、一度に多くの人へ公開でき報道の注目も集めやすい。もう一つは人との出会いで、将来の客や提携先、仕入先と一日で会える。競合の動向を知り新しい発想を得る学びの場でもある。費用も時間もかかるが、対面の価値は大きい。",
        quiz: [
          { q: "What is a trade show?", options: ["An event where companies show products to many visitors", "A kind of online shop", "A type of factory"], answer: 0 },
          { q: "What is one reason companies attend trade shows?", options: ["To show new products to a large audience", "To close their business", "To avoid meeting people"], answer: 0 },
          { q: "What can visitors do at a trade show that is hard online?", options: ["Compare many products side by side", "Fly an airplane", "Cook a meal"], answer: 0 }
        ]
      },
      {
        id: "d1013-2",
        title: "How Solar Panels Turn Sunlight into Electricity",
        level: "★★☆",
        genre: "テクノロジー",
        text: "On the roofs of houses, in wide open fields, and even on small calculators, you can find dark panels that quietly turn sunlight into electricity. These are solar panels, and they are becoming an important source of clean energy around the world. But how can a flat panel make power from nothing but light?\n\nThe answer lies in a special material, usually a form of silicon, the same element found in sand. A solar panel is made of many small units called cells. When sunlight hits a cell, the energy in the light knocks tiny particles, called electrons, loose inside the material. The design of the cell pushes these electrons to flow in one direction, and a flow of electrons is exactly what electricity is.\n\nSolar panels have real advantages. Once they are built, they produce power without burning fuel, making no smoke and no noise. Sunlight is free and will not run out for billions of years. For homes far from power lines, solar panels can bring electricity where none existed before.\n\nThere are limits too. Panels only make power when the Sun shines, so they produce nothing at night and less on cloudy days. To use solar power after dark, people store extra energy in batteries. Making the panels also requires energy and materials.\n\nEven so, solar power is growing quickly as panels become cheaper and better. Turning sunlight directly into electricity, with no moving parts, is a quiet but powerful idea that is helping to change how the world makes energy.",
        summaryJa: "ソーラーパネルが日光を電気に変える仕組みについて。家の屋根や広い野原、小さな電卓にも、日光を静かに電気に変える黒いパネルがある。これがソーラーパネルで、世界で重要なクリーンエネルギー源になりつつある。鍵は特別な材料、普通は砂にも含まれるケイ素（シリコン）だ。パネルはセルという小さな単位の集まりで、日光が当たると光のエネルギーが材料内の電子をはじき出し、セルの設計が電子を一方向に流す。電子の流れこそが電気だ。燃料を燃やさず煙も騒音もなく、日光は無料で尽きない。電線のない地域にも電気を届ける。ただし太陽が出ている時しか発電できず、夜は電池に蓄える。製造にも資源が要る。安く高性能になり急速に普及している。",
        quiz: [
          { q: "What material is usually used in solar panels?", options: ["Silicon, found in sand", "Gold", "Water"], answer: 0 },
          { q: "What is electricity, according to the passage?", options: ["A flow of electrons", "A type of light", "A kind of metal"], answer: 0 },
          { q: "What is one limit of solar panels?", options: ["They make no power at night", "They are very noisy", "They burn a lot of fuel"], answer: 0 }
        ]
      },
      {
        id: "d1013-3",
        title: "What Does the United Nations Do?",
        level: "★★★",
        genre: "世界情勢",
        text: "In a world with around 200 countries, disagreements are certain to happen. To help nations talk instead of fight, a special organization was created: the United Nations, often called the UN. Almost every country in the world is a member, making it the largest meeting place of nations ever built.\n\nThe UN was formed in 1945, just after a terrible world war. Its founders had a clear hope: to prevent such a war from ever happening again. They wanted a place where countries could come together, share their problems, and solve them with words rather than weapons.\n\nThe UN does many kinds of work. One part, where member countries send representatives, is a forum for discussion and voting on shared problems. Another part focuses on peace, sometimes sending soldiers from many nations to help keep calm in troubled areas. But the UN is about far more than conflict.\n\nMuch of its work quietly improves daily life. UN programs help feed hungry people, fight diseases, protect children, care for refugees, and respond to natural disasters. Other parts work on shared challenges such as health rules, safe air travel, and protecting the environment.\n\nThe UN is not perfect. It cannot force powerful countries to agree, and change can be slow. Yet it remains a vital meeting place where even enemies can keep talking.\n\nFor all its weaknesses, the United Nations reflects a hopeful idea that has lasted for generations: that the world's problems are best solved when nations work together, not alone.",
        summaryJa: "国連（国際連合）の役割について。約200の国がある世界では対立は必ず起こる。戦う代わりに話し合えるよう作られたのが国連で、ほぼ全ての国が加盟する史上最大の国家の集まりだ。1945年、恐ろしい世界大戦の直後に設立され、創設者は二度と同じ戦争を起こさないという明確な願いを持ち、各国が集い問題を武器でなく言葉で解決する場を望んだ。加盟国の代表が集う討議と投票の場があり、平和のため多国籍の兵士を派遣することもある。だが対立以外の仕事も多く、飢えた人を助け、病気と闘い、子どもや難民を守り、災害に対応する。保健規則や安全な航空、環境保護にも取り組む。完璧ではないが、敵同士も話し続けられる重要な場だ。",
        quiz: [
          { q: "When and why was the UN formed?", options: ["In 1945, to help prevent another world war", "Last year, to sell products", "In ancient times, for sports"], answer: 0 },
          { q: "What is one example of the UN's everyday work?", options: ["Helping feed hungry people and fight diseases", "Building cars", "Running shops"], answer: 0 },
          { q: "What is one weakness of the UN?", options: ["It cannot force powerful countries to agree", "It has no members", "It never discusses problems"], answer: 0 }
        ]
      },
      {
        id: "d1013-4",
        title: "Mount Fuji: Japan's Sacred Mountain",
        level: "★★☆",
        genre: "日本",
        text: "Rising high above the land, with a nearly perfect cone shape and a snow-covered top, Mount Fuji is the most famous symbol of Japan. At 3,776 meters, it is the country's highest mountain. On a clear day, it can be seen from far away, even from the city of Tokyo, and its beautiful shape has inspired artists and travelers for centuries.\n\nMount Fuji is actually a volcano. It last erupted about 300 years ago and is quiet today, though scientists watch it carefully. Over thousands of years, its eruptions built the smooth, balanced slopes that people admire so much.\n\nFor a long time, Mount Fuji has been seen as a sacred place. In the past, it was a site for religious pilgrimage, and climbing it was an act of faith. Many shrines stand around its base, and the mountain appears again and again in old poems and paintings. Today it is recognized as a World Heritage Site, honored not only for its beauty but for its deep cultural meaning.\n\nEach year, during the short summer season, more than 200,000 people climb to the top. Many start at night so they can watch the sunrise from the summit, a view so admired it has its own name, goraiko, meaning the arrival of light.\n\nWhether seen from a train window, a painting, or its own high slopes, Mount Fuji holds a special place in the hearts of Japanese people. It stands as a quiet, timeless symbol of their homeland.",
        summaryJa: "日本の霊峰、富士山について。ほぼ完璧な円錐形と雪をかぶった頂で高くそびえる富士山は、日本の最も有名な象徴だ。標高3,776メートルで国内最高峰。晴れた日には東京からも遠くに見え、その美しい姿は何世紀も芸術家や旅人を魅了してきた。富士山は実は火山で、約300年前に最後に噴火し今は静かだが、科学者が注意深く見守る。長く聖地とされ、昔は信仰の巡礼地で登ることは信仰の行いだった。麓には多くの神社があり、古い詩や絵に繰り返し登場する。今は世界遺産として美しさと深い文化的意味で称えられる。夏の短い時期に20万人以上が登り、多くが夜に出発して山頂から「御来光」を見る。故郷の時を超えた象徴だ。",
        quiz: [
          { q: "What kind of mountain is Mount Fuji?", options: ["A volcano", "A man-made hill", "An underwater mountain"], answer: 0 },
          { q: "Why has Mount Fuji long been seen as special?", options: ["It is a sacred place of pilgrimage and art", "It is the smallest mountain", "It is always erupting"], answer: 0 },
          { q: "What is 'goraiko'?", options: ["The sunrise seen from the summit", "A type of food", "A kind of train"], answer: 0 }
        ]
      },
      {
        id: "d1013-5",
        title: "How Do Airplanes Fly?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "A large airplane can weigh hundreds of tons, yet it lifts into the sky and stays there for hours. To many people, this seems almost impossible. How can something so heavy fly through the air? The answer is found mainly in the shape of its wings.\n\nLook closely at an airplane wing from the side. It is not flat. The top is gently curved, while the bottom is flatter. As the plane moves forward very fast, air rushes over and under the wing. Because of the wing's shape, the air moving over the curved top travels faster than the air below. This difference creates lower pressure above the wing and higher pressure below it. The higher pressure under the wing pushes the wing, and the whole plane, upward. This upward push is called lift.\n\nBut a wing cannot create lift without speed. That is the job of the engines. Powerful jet engines push the plane forward faster and faster along the runway. Once the plane is moving fast enough, the wings produce enough lift to raise it off the ground.\n\nFlying is a careful balance of forces. Lift pushes the plane up, while gravity pulls it down. The engines push it forward, while the air pushes back, a force called drag. Pilots and designers manage all four forces to keep the plane steady.\n\nSo an airplane does not really fight the air. Instead, it uses the air cleverly, shaping and speeding it to hold tons of metal gently in the sky.",
        summaryJa: "飛行機が飛ぶ仕組みについて。大型機は数百トンもあるのに空へ上がり何時間も飛び続ける。不可能に思えるが、答えは主に翼の形にある。翼を横から見ると平らでなく、上面は緩やかに湾曲し下面は平らだ。機体が高速で前進すると空気が翼の上下を流れ、形のため上面を通る空気の方が速く流れる。その差で翼の上の圧力が低く下が高くなり、下の高い圧力が翼と機体を上へ押す。これが「揚力」だ。ただし揚力には速度が必要で、それがエンジンの役割だ。強力なジェットエンジンが滑走路で機体を加速し、十分速くなると翼が揚力を生んで離陸する。揚力・重力・推力・抗力の四つの力の均衡で安定して飛ぶ。空気と戦わず巧みに利用している。",
        quiz: [
          { q: "What mainly allows an airplane to fly?", options: ["The shape of its wings creating lift", "Its bright color", "Its heavy weight"], answer: 0 },
          { q: "Why is air pressure lower above the wing?", options: ["Air moves faster over the curved top", "The wing is painted white", "There is no air above"], answer: 0 },
          { q: "What is the job of the engines?", options: ["To push the plane forward fast enough for lift", "To cool the passengers", "To make the plane heavier"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-10-12",
    passages: [
      {
        id: "d1012-1",
        title: "The Subscription Economy: Paying Every Month",
        level: "★★☆",
        genre: "ビジネス",
        text: "Not long ago, when you wanted music, you bought a CD. When you wanted a film, you bought or rented a DVD. Today, many people pay a small amount every month instead and get access to thousands of songs or movies. This way of paying is called a subscription, and it has changed many businesses.\n\nA subscription means you pay a regular fee, usually monthly, to use a service for as long as you keep paying. Music apps, video services, games, and even software for work now use this model. Some companies send physical items too, such as a box of food or coffee delivered every month.\n\nWhy do businesses like subscriptions so much? The main reason is steady income. Instead of selling a product once, a company earns money again and again from the same customer. This makes it easier to plan for the future. For customers, the appeal is convenience and choice: for one monthly fee, they can enjoy far more than they could ever buy one by one.\n\nBut there are downsides. Because each fee seems small, people may sign up for many services and forget about them, slowly spending a lot. Companies also raise their prices over time, knowing that customers find it easy to keep paying rather than cancel.\n\nThe subscription model keeps spreading into new areas. It can be a great deal, but it rewards careful customers. The wise habit is simple: check now and then what you are paying for, and keep only what you truly use.",
        summaryJa: "サブスクリプション経済について。少し前は音楽はCD、映画はDVDを買ったが、今は多くの人が毎月少額を払い、何千もの曲や映画を利用する。この支払い方をサブスクリプションと呼び、多くの事業を変えた。サブスクは、払い続ける限りサービスを使える定期料金（通常は月額）だ。音楽・動画・ゲーム・業務用ソフトのほか、食品やコーヒーを毎月届ける例もある。企業が好む主な理由は安定収入で、同じ客から繰り返し収益を得られ将来を計画しやすい。客には便利さと選択肢の多さが魅力だ。一方、少額に見えて契約を忘れ出費がかさむことや、企業が徐々に値上げする難点もある。時々契約内容を確認し、本当に使うものだけ残すのが賢明だ。",
        quiz: [
          { q: "What is a subscription?", options: ["A regular fee to use a service while you keep paying", "A one-time purchase forever", "A free gift"], answer: 0 },
          { q: "Why do businesses like subscriptions?", options: ["They provide steady, repeated income", "They earn money only once", "They lose customers"], answer: 0 },
          { q: "What is one downside for customers?", options: ["They may forget services and keep paying", "Services are always free", "Prices never change"], answer: 0 }
        ]
      },
      {
        id: "d1012-2",
        title: "How Video Streaming Works",
        level: "★★☆",
        genre: "テクノロジー",
        text: "When you press play on an online video, it starts almost at once, even if the film is two hours long. You do not have to wait to download the whole thing first. This everyday magic is called streaming, and it is how most of us watch video today.\n\nThe word streaming is a good description. Instead of sending you the entire video at the start, the service sends it in a steady stream of small pieces, one after another. Your device plays each piece while the next pieces are still arriving. As long as the pieces keep coming fast enough, the video plays smoothly.\n\nThe video itself is stored on powerful computers called servers, often in huge buildings far away. When you press play, your device asks the nearest server for the video. To save time, companies keep copies of popular shows on servers in many countries, so the data does not have to travel too far.\n\nStreaming also adjusts to your internet speed. If your connection is fast, you get a sharp, clear picture. If it slows down, the service quietly lowers the quality so the video does not stop. This is why a video sometimes looks blurry for a moment and then becomes clear again.\n\nThanks to streaming, a library of films and music that once would have filled many shelves now fits inside a phone. Behind the simple press of a button, tiny pieces of data are racing across the world to reach your screen just in time.",
        summaryJa: "動画配信（ストリーミング）の仕組みについて。オンライン動画は再生を押すとほぼ即座に始まり、2時間の映画でも全部をダウンロードする必要がない。この日常の魔法がストリーミングだ。名前の通り、最初に全体を送るのでなく、小さな断片を次々と流して送る。端末は届いた断片を再生しつつ次を受け取り、十分速く届く限りなめらかに再生される。動画はサーバーという強力なコンピューターに保存され、人気作は多くの国のサーバーに複製を置きデータの移動距離を短くする。通信速度にも合わせ、速ければ鮮明、遅ければ画質を下げて止まらないようにする。一瞬ぼやけてまた鮮明になるのはこのためだ。棚を埋めるほどの作品がスマホに収まる。",
        quiz: [
          { q: "How does streaming send a video to you?", options: ["In a steady stream of small pieces", "All at once at the start", "By mailing a disc"], answer: 0 },
          { q: "Why do companies keep copies of shows on servers in many countries?", options: ["So the data does not travel too far", "To hide the shows", "To make them cost more"], answer: 0 },
          { q: "What happens when your internet connection slows down?", options: ["The service lowers the video quality so it does not stop", "The video stops forever", "The screen turns off"], answer: 0 }
        ]
      },
      {
        id: "d1012-3",
        title: "The Story of the Passport",
        level: "★★★",
        genre: "世界情勢",
        text: "If you want to travel to another country, you usually need one small but powerful book: a passport. This document proves who you are and which country you come from. Without it, crossing most borders is impossible. But where did the passport come from, and why does the whole world rely on it?\n\nThe idea is very old. Long ago, rulers gave travelers letters asking local officials to let them pass safely. The modern passport, however, grew mainly in the 20th century. After a major war, countries wanted to control who entered and left, and a standard travel document became normal around the world.\n\nToday's passports follow shared rules so that every country can read them. Inside are your name, your photograph, and your date of birth. Modern passports also contain a tiny electronic chip holding the same information, which machines at airports can check in seconds.\n\nA passport does more than identify you. It is also a request. The issuing country politely asks other nations to allow the traveler to pass and to treat them well. In this way, a passport is a small symbol of trust between countries.\n\nNot all passports are equal. Citizens of some countries can visit many places easily, while others face more checks and need special permission, called a visa. This difference reflects the relationships between nations.\n\nFor millions of people, this little book is the key to the world. It turns a stranger at a border into a welcome guest, allowing people, ideas, and friendships to travel across the globe.",
        summaryJa: "パスポートの歴史について。他国へ旅するには、小さいが強力な一冊、パスポートが必要だ。これは本人と出身国を証明する文書で、無ければ多くの国境を越えられない。発想は古く、昔は統治者が旅人に安全な通行を頼む手紙を渡した。近代的なパスポートは主に20世紀に広まり、大戦後に各国が出入国管理を望み、標準的な渡航文書が一般化した。今のパスポートは共通の規則に従い、氏名・写真・生年月日に加え、同じ情報を持つ電子チップがあり空港の機械が数秒で確認する。パスポートは身元証明であると同時に、発行国が他国に通行と厚遇を頼む依頼でもある。国によって入りやすさは異なり、ビザが必要な場合もある。世界への鍵だ。",
        quiz: [
          { q: "What does a passport prove?", options: ["Who you are and which country you come from", "How much money you have", "What job you do"], answer: 0 },
          { q: "What do modern passports contain besides your name and photo?", options: ["A tiny electronic chip with your information", "A small camera", "A phone"], answer: 0 },
          { q: "What is a 'visa'?", options: ["Special permission to enter a country", "A type of passport photo", "A kind of airplane"], answer: 0 }
        ]
      },
      {
        id: "d1012-4",
        title: "The Kotatsu: A Cozy Japanese Winter",
        level: "★★☆",
        genre: "日本",
        text: "When winter comes to Japan, many families gather around a special piece of furniture that keeps them warm and brings them together. It is called a kotatsu, and for many people it is the heart of the home in the cold months.\n\nA kotatsu is a low table with a hidden secret. Underneath the tabletop is a small electric heater. Over the frame lies a thick blanket, and the tabletop sits on top of the blanket to hold it in place. When you sit on the floor and slide your legs under the table, the blanket traps the warm air around you. Your lower body stays wonderfully warm, even if the room is cold.\n\nThe kotatsu exists partly because of how Japanese homes are built. Traditionally, houses were designed to stay cool in the hot, humid summer, and they often did not have strong heating for the whole house. Instead of warming every room, the kotatsu warms just the people around it, saving energy.\n\nThe kotatsu is more than a heater. It is a place where families come together. People eat, talk, watch television, study, and sometimes even fall asleep around it. A favorite winter scene is a family sharing a fruit called mikan while sitting under the warm blanket.\n\nModern homes now have many kinds of heating, yet the kotatsu remains popular. It offers something that central heating cannot: a small, warm circle that quietly draws people close on a cold winter night.",
        summaryJa: "日本のこたつについて。冬になると、多くの家族が体を温め、人を一つに集める特別な家具の周りに集まる。それがこたつで、寒い時期の家の中心だ。こたつは低い机で、天板の下に小さな電気ヒーターが隠れている。枠の上に厚い布団を掛け、その上に天板を置いて押さえる。床に座って脚を机の下に入れると、布団が暖かい空気を閉じ込め、部屋が寒くても下半身がとても暖かい。日本の家は蒸し暑い夏向けに作られ、家全体の暖房が弱いことが多かったため、こたつは人の周りだけを温めて省エネになる。食事や会話、テレビ、勉強、居眠りの場でもあり、みかんを食べる冬の光景が人気だ。今も根強く愛される。",
        quiz: [
          { q: "What is hidden under a kotatsu's tabletop?", options: ["A small electric heater", "A television", "A refrigerator"], answer: 0 },
          { q: "Why did the kotatsu become common in Japan?", options: ["Homes often lacked strong heating for the whole house", "Japan is always hot", "Everyone disliked blankets"], answer: 0 },
          { q: "What is a favorite winter scene with a kotatsu?", options: ["A family sharing mikan under the warm blanket", "Swimming in the sea", "Driving a car"], answer: 0 }
        ]
      },
      {
        id: "d1012-5",
        title: "Why Does the Moon Change Shape?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "Look at the Moon over several nights, and you will see it change. Some nights it is a thin curve, like a smile. Other nights it is a bright, full circle. A week later, it may be gone. These changing shapes are called the phases of the Moon. But the Moon is not really changing shape at all. So what is happening?\n\nThe key to the puzzle is light. The Moon does not make its own light. Instead, it shines because sunlight falls on it, just as sunlight falls on the Earth. The Sun always lights up one half of the Moon, while the other half stays dark.\n\nAs the Moon travels around the Earth, which takes about a month, we see it from different angles. Sometimes we see mostly the lit half, and the Moon looks full and round. At other times we see mostly the dark half, and only a thin curve of light remains. When the lit side faces away from us completely, we cannot see the Moon at all. This is called a new moon.\n\nSo the phases are simply the result of our changing view of the same lit Moon. The shape we see depends on where the Moon is in its monthly journey around us.\n\nPeople have watched these phases for thousands of years. They were among the first clocks and calendars, marking weeks and months. Even today, the gentle changing of the Moon connects us to the same sky our ancestors watched long ago.",
        summaryJa: "月の形が変わる理由について。数晩月を見ると形が変わる。細い曲線の夜もあれば、明るい満月の夜もあり、一週間後には見えなくなることもある。この変化を月の満ち欠け（相）と呼ぶが、実は月の形そのものは変わっていない。鍵は光だ。月は自ら光らず、地球と同じく太陽の光が当たって輝く。太陽は常に月の半分を照らし、残り半分は暗い。月は約一か月かけて地球を回り、私たちは異なる角度から見る。明るい半分が多く見えれば満月、暗い半分が多ければ細い光だけ、明るい側が完全に裏を向けば見えず、これを新月と呼ぶ。満ち欠けは同じ月の見え方の変化にすぎない。古来、週や月を刻む最初の暦だった。",
        quiz: [
          { q: "Does the Moon make its own light?", options: ["No, it shines because sunlight falls on it", "Yes, it glows by itself", "No, it has no light at all ever"], answer: 0 },
          { q: "Why do we see different shapes of the Moon?", options: ["We see it from different angles as it orbits Earth", "The Moon really changes shape", "The Sun moves away"], answer: 0 },
          { q: "What is a 'new moon'?", options: ["When the lit side faces away and we cannot see it", "A brand new moon in the sky", "A full, bright circle"], answer: 0 }
        ]
      }
    ]
    }
  ] };
