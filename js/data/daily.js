/* デイリー配信リーディング
 * 毎朝の自動ルーチンがこのファイルを丸ごと上書き生成する（直近 7 日分を保持）。
 * days は日付降順。各 day = { date: "YYYY-MM-DD", passages: [readingPassages と同スキーマ + genre] }
 * このファイル以外は手書きデータであり、ルーチンは触らない。
 */
window.KE_DATA = window.KE_DATA || {};

KE_DATA.dailyReading = { days: [
    {
    date: "2026-10-10",
    passages: [
      {
        id: "d1010-1",
        title: "Why Good Customer Service Matters",
        level: "★★☆",
        genre: "ビジネス",
        text: "Imagine two coffee shops on the same street, selling coffee at the same price. In one, the staff smile, remember your name, and quickly fix any mistake. In the other, the workers seem bored and slow to help. Which shop would you return to? For most people, the answer is easy. This is the power of good customer service.\n\nCustomer service means how a business treats the people who buy from it. It includes answering questions, solving problems, and making customers feel valued. Good service can turn a first-time buyer into a loyal customer who comes back again and again.\n\nWhy does this matter so much? One reason is that keeping an existing customer is usually cheaper than finding a new one. A happy customer may also tell friends and family about a business, giving it free and trusted advertising. In contrast, one bad experience can push a customer away forever, and they may warn others too.\n\nToday, customer service happens in many places: in shops, on the phone, and online. When something goes wrong, customers notice how quickly and kindly a company responds. A fast, honest reply can actually build more trust than if nothing had gone wrong at all.\n\nGood service does not always require spending more money. Often it is about simple things: listening carefully, being polite, and keeping promises. In a world full of choices, the way a business treats people can be the very thing that sets it apart.",
        summaryJa: "良い顧客サービスが大切な理由について。同じ通りで同じ値段のコーヒー店が2軒あり、一方は店員が笑顔で名前を覚え間違いもすぐ直す。もう一方は無愛想で対応が遅い。多くの人は前者に戻る。これが良い顧客サービスの力だ。顧客サービスとは、買ってくれる人をどう扱うかで、質問に答え、問題を解決し、大切にされていると感じさせること。既存客を保つ方が新規開拓より安く、満足した客は友人に広めてくれる無料で信頼ある宣伝になる。逆に一度の悪い経験は客を永久に遠ざける。丁寧に聞き、礼儀正しく、約束を守るといった簡単なことが差を生む。",
        quiz: [
          { q: "What does 'customer service' mean?", options: ["How a business treats the people who buy from it", "The price of a product", "A kind of machine"], answer: 0 },
          { q: "Why is keeping an existing customer valuable?", options: ["It is usually cheaper than finding a new one", "It costs much more", "It drives customers away"], answer: 0 },
          { q: "What can build trust when something goes wrong?", options: ["A fast, honest reply", "Ignoring the customer", "Hiding the problem"], answer: 0 }
        ]
      },
      {
        id: "d1010-2",
        title: "How Touchscreens Know Your Touch",
        level: "★★☆",
        genre: "テクノロジー",
        text: "Every day, we touch glass screens to open apps, type messages, and look at photos. Phones, tablets, and even cash machines now use touchscreens. We tap and swipe without thinking, but how does a flat piece of glass know exactly where our finger is?\n\nMost modern phones use a kind of screen called a capacitive touchscreen. The secret is that the human body carries a small amount of natural electricity. Under the glass, there is a very thin, invisible grid of lines that holds a weak electric charge. When your finger touches the screen, it changes the charge at that exact spot. The phone senses this tiny change and works out where you touched.\n\nBecause the screen reacts to electricity, not pressure, you only need a light touch. This is also why these screens usually do not work if you wear thick gloves, since the glove blocks the electricity from your skin. Special gloves with built-in threads can solve this problem.\n\nTouchscreens can follow more than one finger at a time. This is how you can zoom in on a photo by moving two fingers apart, or rotate a map with a twist. The screen tracks each point separately, many times every second.\n\nBefore touchscreens, people controlled computers with buttons and a mouse. Now, a simple sheet of glass connects us directly to our digital world. The next time you tap your phone, remember the hidden grid quietly sensing the gentle electricity of your touch.",
        summaryJa: "タッチスクリーンが指を感知する仕組みについて。私たちは毎日ガラス画面に触れてアプリを開き、文字を打ち、写真を見る。スマホやタブレット、現金自動機も使う。平らなガラスがなぜ指の位置を正確に知るのか。多くのスマホは静電容量式という画面を使う。鍵は人体がわずかな電気を帯びていること。ガラスの下に弱い電荷を持つ見えない格子があり、指が触れるとその点の電荷が変化し、スマホがそれを感知して位置を割り出す。圧力でなく電気に反応するため軽く触れるだけでよく、厚い手袋では電気が遮られ反応しない。複数の指も同時に追え、2本指で写真を拡大したり地図を回したりできる。",
        quiz: [
          { q: "How does a capacitive touchscreen sense your finger?", options: ["It detects a change in electric charge", "It smells your finger", "It listens for a sound"], answer: 0 },
          { q: "Why do these screens often not work with thick gloves?", options: ["The glove blocks electricity from your skin", "The glove is too warm", "The screen is asleep"], answer: 0 },
          { q: "How can you zoom in on a photo?", options: ["By moving two fingers apart", "By shouting at it", "By closing the phone"], answer: 0 }
        ]
      },
      {
        id: "d1010-3",
        title: "How the Olympic Games Bring the World Together",
        level: "★★★",
        genre: "世界情勢",
        text: "Every few years, athletes from almost every country on Earth gather in one city for the Olympic Games. For a few weeks, the world watches runners, swimmers, and gymnasts compete for medals. The Olympics are the largest sporting event in history, but they are about far more than sport.\n\nThe modern Olympic Games began in 1896, inspired by an ancient festival held in Greece thousands of years ago. The idea was simple but powerful: to bring nations together in friendly competition rather than conflict. Today, athletes from more than 200 countries take part, making the Games a rare moment when the whole world meets in peace.\n\nThe Olympics follow important traditions. Athletes march together in an opening ceremony, each nation carrying its flag. The Olympic rings, five colored circles joined together, stand for the continents united as one. A flame is carried from Greece to the host city, a symbol of shared history passed from hand to hand.\n\nOf course, the Games are not perfect. Hosting them costs a great deal of money, and politics sometimes enters the stadium. Yet for many people, the Olympics still offer something special: the sight of rivals shaking hands, and of small countries standing proudly beside large ones.\n\nAt their best, the Olympic Games remind us of a hopeful idea. Despite our many differences, people everywhere share the same dreams of effort, fairness, and friendship, expressed through the simple joy of sport.",
        summaryJa: "オリンピックが世界を一つにする仕組みについて。数年ごとに、ほぼ全ての国の選手が一つの都市に集い、数週間、世界が走者や水泳、体操の競技を見守る。史上最大のスポーツ大会だが、スポーツ以上の意味を持つ。近代五輪は古代ギリシャの祭りに着想を得て1896年に始まり、争いでなく友好的な競争で国々を結ぶという理念があった。今や200超の国が参加する。開会式で各国が国旗を掲げて行進し、五輪は結ばれた五大陸を表し、聖火がギリシャから開催地へ運ばれる。開催費や政治の問題もあるが、ライバルが握手し小国が大国と並ぶ姿は特別だ。努力・公正・友情という共通の夢を思い出させる。",
        quiz: [
          { q: "When did the modern Olympic Games begin?", options: ["In 1896", "Last year", "In ancient times only"], answer: 0 },
          { q: "What do the five Olympic rings stand for?", options: ["The continents united as one", "Five famous athletes", "Five cities"], answer: 0 },
          { q: "What is one problem with hosting the Olympics?", options: ["It costs a great deal of money", "Nobody watches", "There are no athletes"], answer: 0 }
        ]
      },
      {
        id: "d1010-4",
        title: "Bonsai: The Art of Tiny Trees",
        level: "★★☆",
        genre: "日本",
        text: "Imagine a tree old enough to look like it belongs in a forest, yet small enough to sit on a table. This is bonsai, the Japanese art of growing miniature trees in small pots. A bonsai is not a special kind of tree; it is an ordinary tree, such as a pine or a maple, kept small through years of careful care.\n\nThe word bonsai means planted in a container. The art came to Japan from China long ago and slowly developed into the form known today. Growing a bonsai is a slow and patient hobby. A gardener trims the leaves and roots, and gently bends the branches with soft wire to create a pleasing shape. Some famous bonsai trees are over a hundred years old and are passed down through families.\n\nThe goal is not simply to make a tree small. It is to create a living picture of nature, balanced and beautiful. A good bonsai should look natural, as if shaped by wind and time, not by human hands. Each tree reflects the taste and patience of the person who cares for it.\n\nBonsai also teaches important lessons. It cannot be rushed; a tree grows at its own speed. The gardener must observe closely, make small changes, and wait. In this way, bonsai is as much about the grower as the tree.\n\nToday, people around the world enjoy bonsai. In a small pot, it holds a quiet reminder of patience, nature, and the beauty of slow and careful work.",
        summaryJa: "盆栽について。森にありそうなほど古く見えるのに、机に置けるほど小さい木を想像してほしい。これが盆栽で、小さな鉢でミニチュアの木を育てる日本の芸術だ。特別な木ではなく、松や楓などの普通の木を長年の手入れで小さく保つ。「盆栽」は「鉢に植えた」という意味で、昔中国から日本へ伝わり今の形に発展した。葉や根を刈り、針金で枝をやさしく曲げて形を整える、ゆっくりと忍耐の要る趣味だ。百年以上の名木もあり家族で受け継がれる。目的は小さくすることでなく、自然の生きた絵を作ること。急げず、よく観察し小さな変化を加えて待つ。盆栽は木であると同時に育てる人の姿も映す。",
        quiz: [
          { q: "What is a bonsai?", options: ["An ordinary tree kept small in a pot", "A special kind of plastic tree", "A type of flower only"], answer: 0 },
          { q: "How does a gardener shape a bonsai's branches?", options: ["By gently bending them with soft wire", "By cutting them all off", "By painting them"], answer: 0 },
          { q: "What lesson does bonsai teach?", options: ["Patience; it cannot be rushed", "To work as fast as possible", "To ignore the tree"], answer: 0 }
        ]
      },
      {
        id: "d1010-5",
        title: "Why Is the Sky Blue?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "Look up on a clear day, and the sky is a beautiful blue. Children often ask why, and it is a question that puzzled people for a very long time. The answer is hidden in sunlight itself and in the air around us.\n\nSunlight may look white, but it is really a mix of all the colors of the rainbow. Each color travels as a wave, and the waves are different sizes. Red light has long, lazy waves, while blue light has short, quick waves. When sunlight enters our atmosphere, it meets countless tiny molecules of gas in the air.\n\nHere is the key. The small molecules in the air scatter, or bounce away, short blue waves much more strongly than long red waves. As a result, blue light is thrown in every direction across the sky. When you look up, blue light is coming at you from all around, and so the whole sky appears blue.\n\nThis same idea explains the beautiful colors of sunset. When the Sun is low, its light must pass through much more air to reach your eyes. By then, most of the blue light has been scattered away, leaving the reds and oranges that paint the evening sky.\n\nSo the blue sky and the red sunset are two sides of the same story. Both are created by sunlight breaking apart as it travels through the air, a quiet piece of science happening above our heads every single day.",
        summaryJa: "空が青い理由について。晴れた日に見上げると空は美しい青で、子どもがよく尋ねる長年の謎だった。答えは太陽光そのものと周りの空気にある。太陽光は白く見えても実は虹のすべての色の混合で、各色は波として進み波の大きさが違う。赤い光は長くゆったりした波、青い光は短く速い波だ。太陽光が大気に入ると無数の小さな気体分子に出会う。要点は、空気中の小さな分子が短い青の波を長い赤の波よりずっと強く散乱させること。その結果、青い光が空のあらゆる方向にまき散らされ、見上げると四方から届くため空全体が青く見える。夕日が赤いのも同じ理屈で、低い太陽の光は長く空気を通り青が散ってしまい赤や橙が残る。",
        quiz: [
          { q: "What is sunlight really made of?", options: ["A mix of all the colors of the rainbow", "Only blue light", "Only white paint"], answer: 0 },
          { q: "Why does the sky look blue?", options: ["Air molecules scatter blue light in every direction", "The sky is painted blue", "Blue light disappears"], answer: 0 },
          { q: "Why is a sunset red and orange?", options: ["Most blue light has been scattered away by then", "The Sun changes color", "The air turns red"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-10-09",
    passages: [
      {
        id: "d1009-1",
        title: "The Rise of Online Shopping",
        level: "★★☆",
        genre: "ビジネス",
        text: "Not long ago, if you wanted to buy something, you had to visit a shop. Today, millions of people shop without leaving home. With a few taps on a phone, clothes, food, and gifts arrive at the door within days or even hours. This change, known as online shopping or e-commerce, has transformed the way businesses work.\n\nFor customers, the benefits are clear. Online stores are open 24 hours a day and never close. People can compare prices from many shops in minutes and read reviews written by other buyers. Someone living far from a city can order the same products as someone in the center of town. For busy people, this saves a great deal of time.\n\nFor businesses, online selling opens new doors. A small company can now reach customers all over the country, or even the world, without building expensive shops. Some businesses sell only online, keeping their costs low. Others combine physical stores with websites to offer the best of both.\n\nBut the change also brings challenges. Delivering goods quickly costs money and creates more traffic and packaging waste. Small local shops sometimes struggle to compete with giant online companies. And customers cannot touch or try products before buying, so returns are common.\n\nOnline shopping is still growing, and it keeps changing. Whatever happens next, one thing is clear: the simple act of buying has moved from the street into our pockets, and business will never be quite the same again.",
        summaryJa: "オンラインショッピングの台頭について。少し前までは買い物に店へ行く必要があったが、今や多くの人が自宅から買い物をし、スマホを数回タップするだけで衣類や食品、贈り物が数日や数時間で届く。この変化（電子商取引）は商売のあり方を変えた。客にとっては24時間開いており、価格比較やレビュー閲覧ができ、都市から遠くても同じ商品を買える利点がある。企業は高価な店舗なしで全国・世界の客に届けられる。一方、迅速な配送は費用や交通・包装ごみを増やし、地元の小店は巨大企業と競うのに苦労し、試せないため返品も多い。買い物が通りからポケットへ移った。",
        quiz: [
          { q: "What is 'e-commerce'?", options: ["Shopping online", "A type of shop building", "A delivery truck"], answer: 0 },
          { q: "What is one benefit for businesses selling online?", options: ["They can reach customers far away without many shops", "They must build more stores", "They cannot sell anything"], answer: 0 },
          { q: "What is one challenge of online shopping?", options: ["Customers cannot try products before buying", "Shops close at night", "Nobody can compare prices"], answer: 0 }
        ]
      },
      {
        id: "d1009-2",
        title: "Robots That Look Like Us",
        level: "★★☆",
        genre: "テクノロジー",
        text: "For a long time, robots that look and move like people appeared only in films and stories. Today, they are slowly becoming real. Engineers around the world are building humanoid robots, machines with a head, two arms, and two legs, designed to move much like a human being. Why would anyone want a robot shaped like a person?\n\nThe answer is that our world is built for human bodies. Doors, stairs, tools, and chairs are all made for people. A robot with a human shape can use the same spaces and objects without changes. It can climb stairs, open doors, and pick up everyday tools, which a wheeled machine often cannot do.\n\nBuilding such robots is very difficult. Walking on two legs, for example, is hard to balance, something humans learn as babies but machines find complex. Engineers must give robots sensors to feel the ground, motors to move smoothly, and software to make quick decisions. Progress has been slow, but modern robots can now walk, carry boxes, and even run.\n\nCompanies hope these robots will one day help in factories, hospitals, and homes. They might lift heavy loads, assist elderly people, or work in places that are dangerous for humans. Some may be ready within a few years, while others are still being tested.\n\nHumanoid robots are not meant to replace people, but to work alongside us. As they improve, these mechanical helpers may become a familiar part of daily life, sharing both our spaces and our tasks.",
        summaryJa: "人型（ヒューマノイド）ロボットについて。人のように見えて動くロボットは長く映画や物語だけの存在だったが、今や現実になりつつある。世界の技術者が頭・両腕・両脚を持ち人のように動く人型ロボットを作っている。理由は、世界が人の体に合わせて作られているからだ。ドアや階段、道具、椅子は人向けで、人型なら改造せずに同じ空間や物を使え、階段を上りドアを開け道具を持てる。しかし二足歩行の制御は難しく、センサーやモーター、素早い判断の制御が要る。工場や病院、家庭での活用が期待され、重い物を運び高齢者を助け危険な場所で働く。人に取って代わるのでなく共に働くことを目指す。",
        quiz: [
          { q: "Why do engineers build robots shaped like people?", options: ["Our world is built for human bodies", "People dislike wheels", "Robots must look scary"], answer: 0 },
          { q: "What is one difficult part of building humanoid robots?", options: ["Balancing while walking on two legs", "Painting them blue", "Turning them off"], answer: 0 },
          { q: "What is the goal of humanoid robots, according to the passage?", options: ["To work alongside people", "To replace all humans", "To stay in films only"], answer: 0 }
        ]
      },
      {
        id: "d1009-3",
        title: "Why English Became a Global Language",
        level: "★★★",
        genre: "世界情勢",
        text: "Today, English is spoken in almost every country. Pilots use it to land planes safely, scientists use it to share discoveries, and travelers use it to find their way. For many people, English is not their first language, yet they study it to connect with the wider world. How did one language come to play such a global role?\n\nThe story begins with history. Hundreds of years ago, Britain built a large empire that spread the English language across many continents. Later, the United States grew into a powerful country in business, science, and entertainment. Because so much trade, research, and popular culture happened in English, learning it became useful almost everywhere.\n\nToday, English works as a \"common language,\" or a shared second language that people from different countries use to understand each other. A businessperson from Japan and one from Brazil may both speak English in a meeting, even though it is the first language of neither. In this way, English acts as a bridge between cultures.\n\nThis role brings both benefits and concerns. On one hand, a shared language makes trade, science, and travel easier. On the other hand, some people worry that smaller languages may be forgotten if everyone focuses only on English.\n\nThe future may bring change. Other languages are growing, and new technology can now translate speech instantly. For now, though, English remains a key that opens doors around the world, which is why so many people choose to learn it.",
        summaryJa: "英語が世界の共通語になった理由について。今日、英語はほぼどの国でも話され、操縦士は安全な着陸に、科学者は発見の共有に、旅行者は道案内に使う。多くの人は母語でなくても世界とつながるため学ぶ。歴史的に、かつて英国が大帝国を築き英語を各大陸へ広め、後に米国が商業・科学・娯楽の強国となり、多くの取引や研究、大衆文化が英語で行われたため学ぶ価値が生まれた。今や英語は異なる国の人が理解し合う「共通語」として橋渡しをする。貿易や科学、旅行を容易にする一方、少数言語が忘れられる懸念もある。翻訳技術の進歩で将来は変わるかもしれないが、今は世界の扉を開く鍵だ。",
        quiz: [
          { q: "How did English first spread across many continents?", options: ["Through Britain's large empire", "By a single invention", "Through one school"], answer: 0 },
          { q: "What does 'a common language' mean here?", options: ["A shared second language people use to understand each other", "A language nobody speaks", "A very old language"], answer: 0 },
          { q: "What is one concern about English being global?", options: ["Smaller languages may be forgotten", "Planes cannot land", "Science will stop"], answer: 0 }
        ]
      },
      {
        id: "d1009-4",
        title: "Sushi: More Than Just Raw Fish",
        level: "★★☆",
        genre: "日本",
        text: "When people around the world think of Japanese food, sushi is often the first dish that comes to mind. Many believe sushi simply means raw fish, but that is not quite true. The heart of sushi is actually the rice, carefully cooked and gently flavored with vinegar. The word sushi refers to this special rice, which may be topped with fish, vegetables, or egg.\n\nSushi has a surprising history. Long ago, it was not a fresh dish at all. People packed fish in rice to keep it from going bad, and the rice was thrown away before eating. Over time, cooks in Japan began to eat the rice together with the fish, and fresh sushi as we know it was born in the city of Edo, now called Tokyo.\n\nMaking good sushi takes great skill. In Japan, a sushi chef may train for years just to learn how to prepare the rice correctly. The fish must be fresh and cut with care, and each piece should be shaped by hand in a moment. It is both a food and an art.\n\nThere are many kinds of sushi. Some are small balls of rice topped with fish, while others are rolled in seaweed with vegetables inside. Today, sushi is loved far beyond Japan, and new styles have appeared in many countries.\n\nWhether simple or fancy, sushi shows a key idea in Japanese cooking: using fresh ingredients simply, so their natural flavors can shine.",
        summaryJa: "寿司について。世界の人が日本食といえばまず思い浮かべるのが寿司だが、寿司＝生魚と思われがちで、それは正確ではない。寿司の中心は実は米で、丁寧に炊き酢でやさしく味付けしたものを指し、その上に魚や野菜、卵をのせる。歴史は意外で、昔は生の料理でなく、魚を米に漬けて保存し米は捨てていた。やがて魚と米を一緒に食べるようになり、今のような寿司が江戸（現在の東京）で生まれた。良い寿司作りには高い技術が要り、職人は米の扱いを学ぶだけで何年も修業する。握り寿司や巻き寿司など種類も多い。新鮮な素材を簡素に使い、自然な味を生かす日本料理の要点を示す。",
        quiz: [
          { q: "What is the heart of sushi, according to the passage?", options: ["The rice, flavored with vinegar", "Only raw fish", "The seaweed"], answer: 0 },
          { q: "Why did people long ago pack fish in rice?", options: ["To keep it from going bad", "To make it colorful", "To sell the rice"], answer: 0 },
          { q: "What key idea in Japanese cooking does sushi show?", options: ["Using fresh ingredients simply", "Hiding all natural flavors", "Cooking everything for hours"], answer: 0 }
        ]
      },
      {
        id: "d1009-5",
        title: "Why Do Leaves Change Color in Autumn?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "Each autumn, in many parts of the world, something beautiful happens. The green leaves of summer slowly turn to bright yellow, orange, and red before they fall. People travel far just to see the colors. But why do leaves change color, and where do these colors come from?\n\nThe answer lies inside the leaves. All through spring and summer, leaves are full of a green substance called chlorophyll. Chlorophyll has an important job: it uses sunlight to make food for the tree. Because there is so much of it, the leaves look green, and we do not see the other colors hidden underneath.\n\nAs autumn arrives, the days grow shorter and the air turns cooler. The tree senses these changes and begins to prepare for winter. It slowly stops making chlorophyll, and the green color fades away. Now the colors that were hidden all along can finally be seen: yellows and oranges that were always in the leaf.\n\nRed is a little different. In some trees, bright red colors are made fresh in autumn, especially when the days are sunny and the nights are cool. This is why some years bring more brilliant reds than others.\n\nFinally, the tree seals off each leaf, and it falls to the ground. Losing its leaves helps the tree save water and energy through the cold winter. So the beauty of autumn is really a sign of a tree getting ready to rest, and to grow green again in spring.",
        summaryJa: "秋に葉の色が変わる理由について。秋になると世界の多くの地域で、夏の緑の葉が黄・橙・赤に変わって落ちる。その色を見るために遠くまで旅する人もいる。理由は葉の中にある。春夏の間、葉は葉緑素という緑の物質に満ち、これが日光で木の栄養を作る。量が多いため葉は緑に見え、下に隠れた他の色は見えない。秋に日が短く空気が冷えると木は冬支度を始め、葉緑素を作るのをやめて緑が薄れ、隠れていた黄や橙が現れる。赤は少し違い、晴れた日と涼しい夜に新たに作られる木もあり、年によって鮮やかさが変わる。最後に葉は切り離されて落ち、木は水と力を蓄えて冬を越し、春に再び緑になる。",
        quiz: [
          { q: "What makes leaves look green in summer?", options: ["A substance called chlorophyll", "Yellow paint", "The autumn wind"], answer: 0 },
          { q: "Why do yellow and orange colors appear in autumn?", options: ["The green chlorophyll fades and reveals them", "Someone paints the leaves", "They come from the soil"], answer: 0 },
          { q: "Why does a tree lose its leaves in winter?", options: ["To save water and energy", "To look taller", "To stop growing forever"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-10-08",
    passages: [
      {
        id: "d1008-1",
        title: "How Banks Keep Our Money Safe",
        level: "★★☆",
        genre: "ビジネス",
        text: "Most adults keep their money in a bank. We put our pay into a bank account, take out cash when we need it, and pay bills online. But have you ever wondered what a bank really does with your money, and why we trust it?\n\nA bank is a business that looks after money. When you put money into the bank, this is called a deposit. The bank keeps your money safe and records exactly how much is yours. You can take it out whenever you need it. For this service, the bank keeps your savings secure, which is much safer than hiding cash at home.\n\nBut banks do more than store money. They also lend it. When many people deposit money, the bank does not simply leave it in a safe. Instead, it lends some of that money to other people and businesses who need it, for example to buy a house or start a company. These borrowers pay back the loan with a little extra, called interest.\n\nThis is how a bank earns money. It charges more interest to borrowers than it pays to savers, and the difference becomes its profit. In this way, a bank connects people who have extra money with people who need money.\n\nBanks must be careful and honest, because people trust them with their savings. Governments watch over banks with strict rules to keep them safe. Thanks to this system, money can move around the economy, helping people and businesses grow.",
        summaryJa: "銀行が私たちのお金を守る仕組みについて。多くの大人は銀行にお金を預け、必要なとき引き出し、オンラインで支払う。銀行はお金を管理する事業で、預け入れ（預金）されたお金を安全に保管し、誰のいくらかを正確に記録する。自宅に現金を隠すよりずっと安全だ。さらに銀行はお金を貸し出す。多くの人の預金の一部を、住宅購入や起業などで資金を必要とする人や企業に貸し、借り手は利子を付けて返す。借り手から受け取る利子を預金者に払う利子より高くし、その差が銀行の利益になる。余剰資金のある人と必要な人を結ぶ。政府は厳しい規則で銀行を監督し、お金が経済を巡る。",
        quiz: [
          { q: "What is a 'deposit'?", options: ["Money you put into a bank", "A type of loan", "A bank's profit"], answer: 0 },
          { q: "What do banks do with the money people deposit?", options: ["Lend some of it to others", "Burn it", "Give it away for free"], answer: 0 },
          { q: "How does a bank earn money?", options: ["It charges borrowers more interest than it pays savers", "It never lends money", "It hides all the cash"], answer: 0 }
        ]
      },
      {
        id: "d1008-2",
        title: "How Wi-Fi Connects Us",
        level: "★★☆",
        genre: "テクノロジー",
        text: "In homes, cafés, and offices around the world, people connect to the internet without any wires. We call this Wi-Fi, and most of us use it every day. We often take it for granted, but how does Wi-Fi actually send information through the air?\n\nWi-Fi uses radio waves, the same kind of invisible waves that carry music to a radio. A small device called a router is connected to the internet, usually through a cable coming into the building. The router turns internet data into radio signals and sends them out into the air. Your phone or computer has a tiny antenna that receives these signals and turns them back into useful information, such as a web page or a video.\n\nThe signals travel in both directions. When you send a message or load a page, your device sends radio waves back to the router, which passes your request on to the internet. All of this happens many times per second, far too fast for us to notice.\n\nWi-Fi has limits. Radio signals grow weaker as they travel, so the farther you are from the router, the slower your connection may become. Thick walls and other electronics can also block or disturb the signal. This is why your connection is often best in the same room as the router.\n\nWi-Fi has changed how we live and work, letting us move freely while staying connected. Invisible and silent, these radio waves quietly carry our digital world through the air around us.",
        summaryJa: "Wi-Fiが私たちをつなぐ仕組みについて。家やカフェ、職場で私たちは無線でインターネットに接続する。これがWi-Fiで、毎日使う人が多い。Wi-Fiはラジオと同じ電波を使う。ルーターという小さな機器が通常ケーブルでインターネットにつながり、データを電波に変えて空中へ送る。スマホやパソコンの小さなアンテナがこれを受け取り、ウェブページや動画などの情報に戻す。信号は双方向で、メッセージ送信やページ読み込みの際は端末がルーターへ電波を返す。電波は遠くなるほど弱まり、厚い壁や他の電子機器が妨げることもある。だからルーターと同じ部屋が最も快適だ。目に見えない電波が私たちのデジタル世界を運ぶ。",
        quiz: [
          { q: "What does Wi-Fi use to send information?", options: ["Radio waves", "Water pipes", "Sunlight only"], answer: 0 },
          { q: "What does a router do?", options: ["Turns internet data into radio signals", "Cooks food", "Stores photos forever"], answer: 0 },
          { q: "Why is your connection often best in the same room as the router?", options: ["Signals grow weaker as they travel", "Routers hate other rooms", "Phones cannot move"], answer: 0 }
        ]
      },
      {
        id: "d1008-3",
        title: "What Are World Heritage Sites?",
        level: "★★★",
        genre: "世界情勢",
        text: "Around the globe, there are places so special that the whole world agrees they must be protected. These are called World Heritage Sites. They include ancient ruins, beautiful natural areas, historic cities, and famous monuments. But who decides what becomes a World Heritage Site, and why does it matter?\n\nThe idea comes from a part of the United Nations called UNESCO. Its goal is to protect places of great value to all of humanity, not just to one country. A site may be chosen for its history, its culture, or its natural beauty. Famous examples include the pyramids of Egypt, the Great Barrier Reef, and many historic temples and castles.\n\nTo become a World Heritage Site, a place must be carefully studied. The country where it is located makes a request, and experts check whether the site is truly unique and important. If it is accepted, the country promises to protect it, and the world community helps to watch over it.\n\nWhy protect these places together? Some sites face dangers such as pollution, war, or too many visitors. Others may fall apart simply with age. By working across borders, nations can share money and knowledge to keep these treasures safe for the future.\n\nWorld Heritage Sites remind us that history and nature belong to everyone. A temple in Asia or a forest in Africa is part of a story shared by all people. Protecting them is a way of saying that some things are too precious to lose.",
        summaryJa: "世界遺産について。世界には全人類が守るべきと認める特別な場所があり、これを世界遺産と呼ぶ。古代遺跡や美しい自然、歴史都市、有名な記念物などが含まれる。発案は国連の機関ユネスコで、一国だけでなく人類全体に価値ある場所を守ることを目指す。歴史・文化・自然美で選ばれ、エジプトのピラミッドやグレートバリアリーフ、歴史的な寺や城などが例だ。登録には所在国が申請し、専門家が独自性と重要性を確認する。認められると国は保護を約束し、世界も見守る。汚染や戦争、観光客過多、老朽化などの危険に対し、国境を越えて資金と知識を共有する。歴史と自然は皆のものだと教えてくれる。",
        quiz: [
          { q: "Which organization chooses World Heritage Sites?", options: ["UNESCO, part of the United Nations", "A single city council", "A private company"], answer: 0 },
          { q: "For what reasons can a site be chosen?", options: ["Its history, culture, or natural beauty", "Only its size", "Only its price"], answer: 0 },
          { q: "Why do nations protect these places together?", options: ["Sites face dangers and belong to everyone", "To keep them secret", "To sell them quickly"], answer: 0 }
        ]
      },
      {
        id: "d1008-4",
        title: "Ojigi: The Japanese Art of Bowing",
        level: "★★☆",
        genre: "日本",
        text: "In many countries, people greet each other with a handshake or a wave. In Japan, the most common greeting is a bow, known as ojigi. From busy offices to quiet shops, you will see people bowing many times a day. A simple bend of the body can say hello, thank you, sorry, or goodbye.\n\nBowing is more than just a movement; it carries meaning. The deeper and longer the bow, the more respect or feeling it shows. A small nod of the head is friendly and casual, used between friends. A deeper bow from the waist is more formal, used to greet a customer, a teacher, or an important guest. The deepest bows are saved for serious apologies or great thanks.\n\nChildren in Japan learn to bow from a young age, at home and at school. Over time, bowing becomes natural, almost automatic. People even bow while talking on the phone, although the other person cannot see them. The habit is simply part of showing respect.\n\nBowing also helps keep a comfortable distance. Unlike a handshake or a hug, a bow does not require touching, which many people find polite and clean. During the greeting, both people usually lower their eyes as a sign of humility.\n\nFor visitors to Japan, a small bow is a friendly way to show respect, and it is always appreciated. Though it looks simple, ojigi reflects deep values in Japanese culture: respect, humility, and care for the feelings of others.",
        summaryJa: "日本のお辞儀（ojigi）について。多くの国では握手や手を振って挨拶するが、日本で最も一般的な挨拶はお辞儀だ。職場から小さな店まで、人々は一日に何度もお辞儀をする。体を少し曲げるだけで、こんにちは・ありがとう・ごめんなさい・さようならを伝えられる。お辞儀は動作以上の意味を持ち、深く長いほど敬意や思いが強い。軽い会釈は友人同士の気軽なもの、腰から曲げる深いお辞儀は客や先生、大切な客への丁寧なもので、最も深いお辞儀は謝罪や大きな感謝に使う。子どもは幼い頃から家庭や学校で学び、電話中にもお辞儀するほど自然になる。触れずに済み清潔で、互いに目を伏せて謙虚さを示す。敬意・謙虚・思いやりを映す。",
        quiz: [
          { q: "What is the most common greeting in Japan?", options: ["A bow, called ojigi", "A loud shout", "A high five"], answer: 0 },
          { q: "What does a deeper, longer bow show?", options: ["More respect or feeling", "Less respect", "Anger"], answer: 0 },
          { q: "What is one reason some people find bowing polite?", options: ["It does not require touching", "It is very loud", "It takes many hours"], answer: 0 }
        ]
      },
      {
        id: "d1008-5",
        title: "How Do We Measure Time?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "We check the time many times a day, on phones, clocks, and watches. Time guides our work, our travel, and our rest. But how do we actually measure something we cannot see or touch? The story of timekeeping is a long journey from the sky to the atom.\n\nLong ago, people measured time by watching nature. The Sun rising and setting marked the days, and the changing Moon marked the months. To track shorter periods, early people used simple tools. A sundial used the shadow of a stick to show the hour, while a water clock measured time by water slowly dripping from one container to another.\n\nThese early clocks were useful but not very exact. A sundial, for example, is useless at night or on a cloudy day. Over the centuries, inventors built better machines. Mechanical clocks with gears and springs could tick steadily day and night, and later, small watches could fit in a pocket.\n\nToday, the most accurate clocks measure time using atoms. Inside an atomic clock, tiny particles vibrate billions of times each second, always at the same steady rate. By counting these vibrations, scientists can measure time with astonishing precision, losing less than a second over millions of years.\n\nWhy does such precision matter? Modern life depends on it. Systems like GPS, the internet, and banking all need clocks that agree perfectly. From a shadow on the ground to vibrating atoms, our search for better time has quietly shaped the modern world.",
        summaryJa: "時間の測り方について。私たちは一日に何度も時刻を確認するが、見えず触れられない時間をどう測るのか。時計の歴史は空から原子への長い旅だ。昔は自然を見て測り、太陽の出入りが日を、月の満ち欠けが月を示した。短い時間には道具を使い、日時計は棒の影で時刻を示し、水時計は容器から滴る水で測った。これらは便利だが正確でなく、日時計は夜や曇天では使えない。やがて歯車とばねの機械式時計が昼夜問わず時を刻み、懐中時計も生まれた。今最も正確なのは原子時計で、原子が毎秒数十億回、一定の速さで振動する。その回数を数え、数百万年に1秒未満の精度で測れる。GPSやインターネット、銀行は完全に一致した時計を必要とする。",
        quiz: [
          { q: "How did people measure months long ago?", options: ["By the changing Moon", "By counting cars", "By weighing water"], answer: 0 },
          { q: "Why is a sundial not always useful?", options: ["It is useless at night or on cloudy days", "It is too heavy to lift", "It needs electricity"], answer: 0 },
          { q: "How does an atomic clock measure time?", options: ["By counting the vibrations of atoms", "By watching the Sun", "By dripping water"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-10-07",
    passages: [
      {
        id: "d1007-1",
        title: "Why Do Businesses Advertise?",
        level: "★★☆",
        genre: "ビジネス",
        text: "Everywhere we look, we see advertisements. They appear on television, on websites, on buses, and even on our phones. Companies spend huge amounts of money on them every year. But why do businesses advertise, and does it really work?\n\nThe simplest reason is to make people aware. A company may sell a wonderful product, but if nobody knows it exists, nobody will buy it. Advertising tells people, \"We are here, and this is what we offer.\" For a new business, this first step is especially important.\n\nAdvertising also tries to make a product feel special. Two shops may sell very similar coffee, but one may use friendly pictures and a clever slogan to make customers feel good about choosing it. In this way, advertising shapes not just what we know, but how we feel.\n\nAnother goal is to remind us. Even famous companies keep advertising, because people forget and new customers are always growing up. A regular advertisement keeps a brand fresh in our minds, so we think of it when we are ready to buy.\n\nOf course, advertising has its critics. Some ads can be annoying, and a few may promise more than a product can give. Wise customers learn to enjoy clever ads without believing every word.\n\nFor businesses, though, advertising remains one of the most powerful tools they have. A good advertisement does more than sell a product. It tells a story, builds trust, and invites us to become part of it.",
        summaryJa: "企業が広告を出す理由について。テレビやウェブ、バス、スマホなど至る所に広告があり、企業は毎年巨額を投じる。最も単純な理由は認知で、どんなに良い商品も存在を知られなければ売れず、新しい事業には特に重要な第一歩だ。広告は商品を特別に感じさせる役割もあり、似たコーヒーでも親しみやすい写真や巧みな標語で選びたくなる。さらに「思い出させる」目的もあり有名企業も宣伝を続ける。一方で、わずらわしい広告や誇大な約束への批判もあり、賢い消費者は鵜呑みにせず楽しむ。広告は物語を語り信頼を築く強力な手段だ。",
        quiz: [
          { q: "What is the simplest reason businesses advertise?", options: ["To make people aware a product exists", "To waste money", "To hide their products"], answer: 0 },
          { q: "How does advertising make a product feel special?", options: ["With friendly pictures and clever slogans", "By raising the price only", "By removing the product"], answer: 0 },
          { q: "Why do even famous companies keep advertising?", options: ["People forget and new customers grow up", "They have no products", "Nobody knows them"], answer: 0 }
        ]
      },
      {
        id: "d1007-2",
        title: "How GPS Knows Where You Are",
        level: "★★☆",
        genre: "テクノロジー",
        text: "When you open a map on your phone, a little blue dot shows exactly where you are. You can be in a strange city, yet your phone knows your position within a few meters. This everyday magic is powered by a system called GPS, which stands for Global Positioning System. But how does it work?\n\nHigh above the Earth, dozens of satellites circle the planet. Each one constantly sends out radio signals that include the exact time the signal was sent. Your phone listens for these signals. Because radio waves travel at a known speed, your phone can measure how long each signal took to arrive, and from that it can work out how far away each satellite is.\n\nTo find your exact location, your phone needs signals from at least four satellites. By combining the distances to several satellites, it can calculate where on Earth you must be. This clever use of distance and time is what places that blue dot on your map.\n\nGPS was first built for the military, but today everyone uses it. It guides cars, ships, and airplanes. Farmers use it to steer tractors, and delivery drivers use it to find addresses. It even helps scientists track animals and measure the slow movement of the Earth itself.\n\nThe next time your phone shows you the way, remember the quiet satellites far above, sending their steady signals. Thanks to them, it is now very hard to get truly lost.",
        summaryJa: "GPSが現在地を知る仕組みについて。スマホの地図では青い点が数メートルの精度で自分の位置を示す。これを支えるのが全地球測位システム（GPS）だ。上空では数十基の衛星が地球を回り、信号を送った正確な時刻を含む電波を絶えず発信する。スマホはこれを受信し、電波の速さが分かっているため到達までの時間から各衛星までの距離を計算できる。正確な位置を知るには最低4基の衛星の信号が必要で、複数の距離を組み合わせて地球上の位置を割り出す。元は軍用だったが今は誰もが使い、車や船、農業、配達、動物追跡や地殻変動の計測にも役立つ。",
        quiz: [
          { q: "What does GPS stand for?", options: ["Global Positioning System", "Great Phone Signal", "General Power Source"], answer: 0 },
          { q: "How does a phone work out its distance from a satellite?", options: ["By measuring how long the signal took to arrive", "By weighing the satellite", "By taking a photo"], answer: 0 },
          { q: "How many satellites does a phone need to find your exact location?", options: ["At least four", "Only one", "Exactly two"], answer: 0 }
        ]
      },
      {
        id: "d1007-3",
        title: "Why Countries Use Different Money",
        level: "★★★",
        genre: "世界情勢",
        text: "If you travel from Japan to the United States, your yen will not buy a cup of coffee. First you must change it into dollars. Almost every country has its own money, or currency, such as the yen, the dollar, the euro, or the pound. Why does the world use so many different kinds of money, and how do they work together?\n\nA currency is really a promise of value, managed by a country or group of countries. Having its own money gives a nation control over its economy. For example, a country can print more money or change interest rates to help its businesses and workers. If every country shared one currency, no single nation could make these choices alone.\n\nBecause currencies are different, they must be exchanged. The price of one currency in terms of another is called the exchange rate, and it changes every day. If many people want to buy a country's goods, they need its currency, and its value may rise. News, trade, and even confidence can make a currency stronger or weaker.\n\nThese changes matter to ordinary people. A weaker yen, for instance, makes foreign travel more expensive for Japanese tourists, but it makes Japanese products cheaper for foreign buyers. Businesses watch exchange rates closely when they trade across borders.\n\nDifferent currencies can seem confusing, but they reflect a simple truth: the world is made of many separate economies, each managing its own affairs, yet all connected through the constant exchange of money and goods.",
        summaryJa: "各国が異なる通貨を使う理由について。日本から米国へ行くと円では買い物ができず、まずドルに替える必要がある。ほぼどの国も円・ドル・ユーロ・ポンドなど独自の通貨を持つ。通貨は国や地域が管理する価値の約束で、独自通貨を持てば経済を自国で制御でき、紙幣増刷や金利変更で企業や労働者を支えられる。全世界が同じ通貨なら各国が単独で判断できない。通貨が違うため交換が必要で、交換比率（為替レート）は日々変わる。円安は日本人の海外旅行を高くするが、日本製品を外国人には安くする。通貨の違いは、多くの経済が独自に運営されつつ交換でつながる世界を映す。",
        quiz: [
          { q: "Why does having its own money help a country?", options: ["It can control its own economy", "It makes travel free", "It stops all trade"], answer: 0 },
          { q: "What is the 'exchange rate'?", options: ["The price of one currency in terms of another", "A type of tax", "The weight of a coin"], answer: 0 },
          { q: "What does a weaker yen do?", options: ["Makes Japanese products cheaper for foreign buyers", "Makes everything free", "Stops foreign travel completely"], answer: 0 }
        ]
      },
      {
        id: "d1007-4",
        title: "Matsuri: Japan's Lively Festivals",
        level: "★★☆",
        genre: "日本",
        text: "Throughout the year, towns and villages across Japan come alive with the sound of drums, music, and happy voices. These celebrations are called matsuri, the Japanese word for festivals. From tiny local events to huge city parades, matsuri are a colorful and important part of life in Japan.\n\nMost matsuri have their roots in the Shinto religion and were originally held to thank the gods for a good harvest or to pray for health and safety. Many still take place at shrines. Over time, they have also become joyful social events where neighbors gather and visitors are welcome.\n\nA typical festival is full of energy. People wear traditional clothes called happi coats, and teams carry a mikoshi, a portable shrine, through the streets on their shoulders. They shout together as they move, sharing the heavy weight and the excitement. Drums beat, flutes play, and lanterns glow as evening falls.\n\nFood is another highlight. Rows of small stalls sell grilled squid, sweet pancakes, candied fruit, and many other treats. Children play simple games, trying to catch goldfish or win a prize. The air is filled with wonderful smells and laughter.\n\nEach region has its own famous festivals, from snow festivals in the north to fire and water festivals elsewhere. Though the styles differ, they share the same spirit. Matsuri bring people together across generations, keeping old traditions alive while giving everyone a reason to smile, dance, and celebrate together.",
        summaryJa: "日本の祭りについて。一年を通じて各地の町や村が太鼓や音楽、歓声でにぎわう。この祝祭が「祭り」で、小さな地域行事から大都市の大行列まで、日本の生活の彩り豊かで大切な一部だ。多くは神道に由来し、元は豊作への感謝や健康・安全の祈願として神社で行われた。やがて近隣が集い来訪者も歓迎する楽しい社交の場にもなった。法被を着た人々が神輿を担ぎ、声を合わせて練り歩き、太鼓や笛が鳴り提灯がともる。屋台ではイカ焼きや甘い菓子が並び、子どもは金魚すくいを楽しむ。地域ごとに名高い祭りがあり、世代を超えて人を結び伝統を守りながら、皆が笑い踊る理由を与えてくれる。",
        quiz: [
          { q: "What does 'matsuri' mean?", options: ["Festivals", "Gardens", "Trains"], answer: 0 },
          { q: "What is a 'mikoshi'?", options: ["A portable shrine carried through the streets", "A kind of food", "A musical instrument"], answer: 0 },
          { q: "What do food stalls at a matsuri sell?", options: ["Grilled squid and sweet treats", "Only medicine", "Cars and bicycles"], answer: 0 }
        ]
      },
      {
        id: "d1007-5",
        title: "Why Do We Have Seasons?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "In many parts of the world, the year brings four seasons: spring, summer, autumn, and winter. Days grow long and warm, then short and cold, in a steady cycle. Many people think the seasons happen because the Earth moves closer to or farther from the Sun. Surprisingly, that is not the real reason.\n\nThe true cause is the tilt of the Earth. Our planet does not stand straight up as it travels around the Sun. Instead, it leans to one side at a gentle angle. This tilt stays the same all year, but because the Earth is always moving around the Sun, different parts of the planet lean toward the Sun at different times.\n\nWhen your part of the Earth leans toward the Sun, the Sun's light hits it more directly and for more hours each day. This brings summer, with its long, warm days. Six months later, your part leans away from the Sun. The light arrives at a lower angle and for fewer hours, bringing the short, cold days of winter.\n\nThis is also why the seasons are opposite in the north and south. When it is summer in Japan, it is winter in Australia, because the two halves of the Earth lean in opposite directions.\n\nSo the seasons are not about distance from the Sun, but about angle and light. Thanks to a small tilt in our spinning planet, we enjoy the beauty of changing seasons, each with its own weather, colors, and character.",
        summaryJa: "季節が生まれる理由について。世界の多くの地域では春・夏・秋・冬の四季が巡り、日は長く暖かくなり、また短く寒くなる。多くの人は地球が太陽に近づいたり遠ざかったりするためと思うが、それは本当の理由ではない。真の原因は地球の傾きだ。地球は太陽の周りを回る際にまっすぐ立たず、少し傾いている。傾きは一年中同じだが、地球が公転するため時期によって異なる地域が太陽の方を向く。太陽側に傾くと光がより直接・長時間当たり夏になり、半年後に反対へ傾くと光が低い角度で短時間となり冬になる。だから南北で季節が逆になる。季節は距離でなく角度と光で決まる。",
        quiz: [
          { q: "What is the real cause of the seasons?", options: ["The tilt of the Earth", "The Earth moving closer to the Sun", "The Sun getting hotter"], answer: 0 },
          { q: "What happens when your part of the Earth leans toward the Sun?", options: ["It becomes summer with long, warm days", "It becomes winter", "Nothing changes"], answer: 0 },
          { q: "Why is it summer in Japan when it is winter in Australia?", options: ["The two halves lean in opposite directions", "Australia has no sun", "Japan is closer to the Moon"], answer: 0 }
        ]
      }
    ]
    },
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
    }
  ] };
