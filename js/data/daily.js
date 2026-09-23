/* デイリー配信リーディング
 * 毎朝の自動ルーチンがこのファイルを丸ごと上書き生成する（直近 7 日分を保持）。
 * days は日付降順。各 day = { date: "YYYY-MM-DD", passages: [readingPassages と同スキーマ + genre] }
 * このファイル以外は手書きデータであり、ルーチンは触らない。
 */
window.KE_DATA = window.KE_DATA || {};

KE_DATA.dailyReading = { days: [
    {
    date: "2026-09-23",
    passages: [
      {
        id: "d0923-1",
        title: "The Business of Travel and Tourism",
        level: "★★☆",
        genre: "ビジネス",
        text: "Every year, hundreds of millions of people travel to other cities and countries for holidays. They stay in hotels, eat in restaurants, visit famous sites, and buy souvenirs. All of this spending adds up to one of the largest industries in the world: travel and tourism.\n\nFor many places, tourism is a powerful engine of business. When visitors arrive, they bring money that supports hotels, guides, drivers, shops, and countless local jobs. A beautiful beach, an old temple, or a lively festival can become the foundation of a whole local economy. For some countries, tourism is among the biggest sources of income.\n\nBut tourism has two sides. Too many visitors can crowd streets, raise prices for local people, and wear down the very sites they come to see. A quiet town can lose its charm if it becomes packed with tourists. This is sometimes called \"overtourism.\"\n\nBecause of this, many places are learning to manage tourism carefully. They may limit the number of visitors to a fragile site, encourage travel in quieter seasons, or spread visitors to less famous areas. The goal is to enjoy the benefits without harming the place or its people.\n\nGood tourism can be a wonderful exchange. Visitors gain new experiences and understanding, while local people gain income and pride in sharing their home. Managed with care, travel connects the world and helps both guests and hosts.",
        summaryJa: "毎年、何億もの人が休暇で他の都市や国へ旅する。ホテルに泊まり、レストランで食べ、有名な場所を訪れ、土産を買う。こうした支出の総和が、世界最大級の産業、旅行・観光になる。多くの場所にとって観光は強力なビジネスの原動力だ。訪問者はホテルやガイド、運転手、店、無数の地元の仕事を支えるお金をもたらす。美しい浜、古い寺、にぎやかな祭りが、地域経済全体の土台になりうる。観光が最大級の収入源である国もある。だが観光には二つの面がある。訪問者が多すぎると通りが混み、地元の人には物価が上がり、見に来たまさにその場所がすり減る。静かな町も観光客で埋まれば魅力を失いうる。これは「オーバーツーリズム」と呼ばれることがある。だから多くの場所が観光を慎重に管理することを学んでいる。壊れやすい場所の訪問者数を制限したり、静かな季節の旅行を勧めたり、あまり有名でない地域へ客を分散したりする。目標は、場所や人を害さず利点を享受することだ。良い観光は素晴らしい交流になりうる。訪問者は新しい経験と理解を得、地元の人は収入と、我が家を分かち合う誇りを得る。心配りある管理で、旅は世界をつなぎ、客と迎える側の双方を助ける。",
        quiz: [
          { q: "Why is tourism a powerful engine of business for many places?", options: ["Visitors bring money that supports hotels, shops, and local jobs", "Visitors take money away", "Tourism creates no jobs"], answer: 0 },
          { q: "What is 'overtourism'?", options: ["When too many visitors crowd a place, raise prices, and wear down sites", "When no one visits", "A type of hotel"], answer: 0 },
          { q: "How are places learning to manage tourism?", options: ["Limiting visitors to fragile sites and spreading them to less famous areas", "By banning all visitors forever", "By ignoring the problem"], answer: 0 }
        ]
      },
      {
        id: "d0923-2",
        title: "How a Refrigerator Works",
        level: "★★★",
        genre: "テクノロジー",
        text: "A refrigerator is one of the most useful machines in any home. It keeps our food cold and fresh for days or weeks. But have you ever wondered how a box plugged into the wall can make the air inside it colder than the room around it? The answer is a clever trick using a special liquid and the science of heat.\n\nThe key idea is that heat always moves from warmer things to cooler things. A refrigerator does not really \"make cold.\" Instead, it moves heat out of the inside and releases it outside. To do this, it uses a special substance called a refrigerant, which flows through pipes in a loop.\n\nInside the fridge, the refrigerant is allowed to expand, which makes it very cold. As it flows through pipes inside, it absorbs heat from the food and air, cooling them down. The refrigerant, now warmer, is then pumped outside the fridge, where it is squeezed tightly. This releases the heat into the room, which is why the back of a fridge feels warm.\n\nThe cooled refrigerant then flows back inside to pick up more heat, and the cycle repeats, over and over.\n\nSo a refrigerator is really a heat mover, not a cold maker. This same idea is used in air conditioners and even in some home heating systems. Understanding it reveals the quiet science humming inside a machine we open without a second thought every day.",
        summaryJa: "冷蔵庫はどの家でも最も役立つ機械の一つだ。食べ物を何日も何週間も冷たく新鮮に保つ。だが、壁につないだ箱が、なぜ中の空気を周りの部屋より冷たくできるのか、考えたことはあるだろうか。答えは、特別な液体と熱の科学を使った巧みな仕掛けだ。鍵となる考えは、熱は常に温かいものから冷たいものへ移るということだ。冷蔵庫は本当は「冷たさを作る」のではない。中から熱を取り出し、外へ放つのだ。そのために「冷媒」という特別な物質を使い、輪になった管を流す。冷蔵庫の中で冷媒は膨張を許され、非常に冷たくなる。内部の管を流れる間、食べ物や空気から熱を吸い、それらを冷やす。今や温まった冷媒は冷蔵庫の外へ送られ、そこで強く圧縮される。これが熱を部屋へ放つので、冷蔵庫の裏は温かく感じる。冷えた冷媒は再び中へ戻ってさらに熱を拾い、この循環が何度も繰り返される。だから冷蔵庫は本当は熱を動かすもので、冷たさを作るものではない。同じ考えはエアコンや一部の暖房にも使われる。理解すれば、毎日考えもせず開ける機械の中でうなる静かな科学が見えてくる。",
        quiz: [
          { q: "What does a refrigerator really do?", options: ["It moves heat out of the inside and releases it outside", "It creates cold from nothing", "It freezes the whole room"], answer: 0 },
          { q: "Why does the back of a fridge feel warm?", options: ["The refrigerant releases the heat it collected into the room there", "Because it is broken", "Because it makes fire"], answer: 0 },
          { q: "What key idea makes a refrigerator work?", options: ["Heat always moves from warmer things to cooler things", "Cold falls downward", "Heat never moves"], answer: 0 }
        ]
      },
      {
        id: "d0923-3",
        title: "Saving the World's Coral Reefs",
        level: "★★☆",
        genre: "世界情勢",
        text: "Beneath the clear waters of warm seas lie some of the most beautiful and important places on Earth: coral reefs. Though they cover only a tiny part of the ocean, reefs are home to a huge share of all sea life. They are sometimes called the \"rainforests of the sea,\" and their health matters to the whole world.\n\nCoral may look like colorful rock, but it is actually made of tiny living animals. These creatures build hard structures over hundreds of years, forming reefs that shelter fish, protect coastlines from storms, and support the fishing and tourism that millions of people depend on.\n\nSadly, reefs around the world are in danger. When the sea grows too warm, coral can turn white and die, an event called \"bleaching.\" Pollution and careless fishing add to the harm. Losing reefs would hurt not only sea creatures but also the people whose food and income come from them.\n\nThe good news is that people everywhere are working to protect reefs. Scientists are growing new coral and planting it on damaged reefs. Countries are creating protected areas where sea life can recover. And efforts to keep the oceans cleaner and cooler help reefs most of all.\n\nCoral reefs remind us how connected the world is. A change in the water can echo all the way to our dinner tables. Protecting these underwater gardens is a task that belongs to everyone who shares the planet.",
        summaryJa: "暖かい海の澄んだ水の下に、地球で最も美しく重要な場所の一つがある。サンゴ礁だ。海のごく一部しか覆わないのに、礁は全海洋生物の大きな割合のすみかだ。「海の熱帯雨林」と呼ばれることもあり、その健康は世界全体に関わる。サンゴは色鮮やかな岩のように見えるが、実は小さな生き物でできている。この生き物が何百年もかけて硬い構造を築き、魚をかくまい、海岸を嵐から守り、何百万もの人が頼る漁業や観光を支える礁を形づくる。悲しいことに、世界中の礁が危機にある。海が暖まりすぎるとサンゴは白くなり死ぬ。「白化」と呼ばれる現象だ。汚染や不注意な漁も害を加える。礁を失えば、海の生き物だけでなく、そこから食料や収入を得る人々も傷つく。良い知らせは、各地で人が礁を守ろうとしていることだ。科学者は新しいサンゴを育て、傷んだ礁に植える。国は海の生き物が回復できる保護区を作る。海をより清潔で涼しく保つ努力が、何より礁を助ける。サンゴ礁は世界がいかにつながっているかを思い出させる。水の変化が食卓にまで響きうる。この海中の庭を守ることは、地球を分かち合う皆の務めだ。",
        quiz: [
          { q: "What are coral reefs made of?", options: ["Tiny living animals that build hard structures over hundreds of years", "Colorful painted rock", "Plastic"], answer: 0 },
          { q: "What is coral 'bleaching'?", options: ["When the sea grows too warm and coral turns white and dies", "When coral is painted white", "When coral grows faster"], answer: 0 },
          { q: "How are people working to protect reefs?", options: ["Growing new coral, creating protected areas, and keeping oceans cleaner and cooler", "By fishing more carelessly", "By warming the seas"], answer: 0 }
        ]
      },
      {
        id: "d0923-4",
        title: "Japan's Autumn Equinox Day",
        level: "★★☆",
        genre: "日本",
        text: "Around the 23rd of September, Japan celebrates a national holiday called the Autumn Equinox Day. The equinox is a special moment in the year when day and night are almost exactly equal in length. After this day, the nights slowly grow longer, and the country moves gently toward winter.\n\nThe holiday is tied closely to nature and to family. In Japan, the equinox falls in the middle of a period called \"higan,\" a traditional time for remembering those who have passed away. Many families visit the graves of their ancestors, clean them with care, and offer flowers and favorite foods. It is a quiet, respectful way of staying connected to loved ones who are gone.\n\nThe season also brings special treats. A soft sweet made of rice and sweet bean paste is often eaten at this time, its name changing with the season.\n\nThe meaning of the day is gentle and thoughtful. It is a moment to pause, to feel the turning of the year, and to remember where we come from. As the summer heat fades and the air turns cool and clear, people are reminded of the natural rhythm of life.\n\nThe Autumn Equinox Day shows a lovely part of Japanese culture: a deep respect for nature's cycles and for the family members who came before. It is a small holiday with a warm and lasting spirit of gratitude and remembrance.",
        summaryJa: "9月23日ごろ、日本は「秋分の日」という祝日を祝う。秋分は、昼と夜の長さがほぼ正確に等しくなる一年の特別な瞬間だ。この日を過ぎると夜は少しずつ長くなり、国は穏やかに冬へ向かう。この祝日は自然と家族に深く結びつく。日本では秋分は「彼岸」という期間の中日にあたり、亡くなった人を偲ぶ伝統的な時だ。多くの家族が先祖の墓を訪れ、丁寧に掃除し、花や好物を供える。去った大切な人とつながり続ける、静かで敬意ある方法だ。この季節は特別な菓子ももたらす。米とあんこで作る柔らかい菓子がこの時期によく食べられ、その名は季節で変わる。この日の意味は穏やかで思慮深い。立ち止まり、一年の移ろいを感じ、自分がどこから来たかを思い出す時だ。夏の暑さが和らぎ空気が涼しく澄むと、人は命の自然な律動を思い出す。秋分の日は日本文化の素敵な一面を示す。自然の巡りと、先を生きた家族への深い敬意だ。感謝と追憶の温かく長く続く精神を持つ小さな祝日だ。",
        quiz: [
          { q: "What is special about the equinox?", options: ["Day and night are almost exactly equal in length", "The sun never sets", "It is the hottest day of the year"], answer: 0 },
          { q: "What do many families do during this time (higan)?", options: ["Visit and clean the graves of their ancestors and offer flowers and food", "Go swimming in the sea", "Stay awake all night"], answer: 0 },
          { q: "What does the Autumn Equinox Day show about Japanese culture?", options: ["A deep respect for nature's cycles and for family members who came before", "A dislike of nature", "That holidays are meaningless"], answer: 0 }
        ]
      },
      {
        id: "d0923-5",
        title: "How We See Color",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "The world is full of color: a blue sky, green grass, a red apple. We see these colors so easily that we rarely stop to think about them. But color is not really \"in\" objects the way we imagine. It is created by light and by our own eyes and brains working together.\n\nLight from the sun looks white, but it is actually a mix of all colors. When light hits an object, the object soaks up some colors and reflects others back. A red apple looks red because it reflects red light and absorbs the rest. The color we see is the light that bounces off, not something the apple contains.\n\nBut the story is only half finished until the light reaches our eyes. At the back of each eye are millions of tiny cells. Some of these, called cones, are sensitive to light. Humans usually have three kinds of cones, tuned to red, green, and blue light. By comparing the signals from these three types, the brain builds the huge range of colors we experience.\n\nThis is why some people see color differently. If a person's cones work in an unusual way, certain colors may look similar to them, a condition often called color blindness.\n\nSo color is a kind of teamwork between light, objects, our eyes, and our brains. The next time you enjoy a bright sunset, remember that its beauty is created partly out there — and partly inside your own head.",
        summaryJa: "世界は色に満ちている。青い空、緑の草、赤いリンゴ。私たちはこれらの色をあまりに簡単に見るので、立ち止まって考えることは少ない。だが色は、想像するように物の中に「ある」のではない。光と、私たち自身の目と脳が協力して作り出すものだ。太陽の光は白く見えるが、実はすべての色の混合だ。光が物に当たると、物はある色を吸い、他を反射して返す。赤いリンゴが赤く見えるのは、赤い光を反射し残りを吸うからだ。見える色は跳ね返る光であって、リンゴが含むものではない。だが物語は、光が目に届くまで半分しか終わっていない。両目の奥に何百万もの小さな細胞がある。そのうち錐体と呼ばれるものは光に敏感だ。人は普通、赤・緑・青の光に合わせた三種類の錐体を持つ。この三種からの信号を比べ、脳は私たちが経験する膨大な色の幅を作る。だから色の見え方が人によって違うこともある。錐体が通常と異なる働きをすると、ある色が似て見えることがあり、しばしば色覚異常と呼ばれる。色は、光と物、目、脳の一種の共同作業だ。次に鮮やかな夕日を楽しむとき、その美しさは一部は外で、一部はあなた自身の頭の中で作られていると思い出してほしい。",
        quiz: [
          { q: "Why does a red apple look red?", options: ["It reflects red light and absorbs the rest", "It contains red paint inside", "Because all light is red"], answer: 0 },
          { q: "What are cones?", options: ["Tiny cells at the back of the eye that are sensitive to light and color", "Small bones in the ear", "A kind of light bulb"], answer: 0 },
          { q: "What is color, according to the passage?", options: ["Teamwork between light, objects, our eyes, and our brains", "Something fixed inside every object", "Only in the sun"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-09-22",
    passages: [
      {
        id: "d0922-1",
        title: "How Online Shopping Changed the World",
        level: "★★☆",
        genre: "ビジネス",
        text: "Twenty years ago, buying something usually meant going to a shop. Today, with a few taps on a phone, we can order almost anything and have it arrive at our door in days, or even hours. This is online shopping, or \"e-commerce,\" and it has quietly transformed how the world buys and sells.\n\nFor customers, the benefits are clear. You can shop at any hour, compare prices in seconds, and read what other buyers thought before deciding. A person in a small town can buy goods from around the world, without ever leaving home. Choice has grown enormous.\n\nFor businesses, online selling opened new doors. A tiny company can now reach customers across a whole country or beyond, without the cost of a physical shop. Some businesses exist only online, run from a single room.\n\nBut the change has a harder side too. As people shop online, many traditional shops on the high street have struggled, and some have closed. Delivering countless small packages also creates traffic and waste that must be managed.\n\nBehind the simple click lies a huge, hidden machine: warehouses, delivery trucks, and computer systems working together to move goods quickly and cheaply.\n\nOnline shopping is now a normal part of life. Like most big changes, it brings both convenience and challenges. The task ahead is to enjoy its benefits while caring for the workers, shops, and environment that all this buying depends on.",
        summaryJa: "20年前、何かを買うとは普通、店に行くことだった。今は電話を数回タップすれば、ほぼ何でも注文でき、数日、時に数時間で玄関に届く。これがオンラインショッピング(電子商取引)で、世界の売買のあり方を静かに変えた。客には利点が明確だ。いつでも買い物でき、数秒で価格を比べ、決める前に他の買い手の感想を読める。小さな町の人が家を出ずに世界中の品を買える。選択肢は途方もなく増えた。企業にはオンライン販売が新しい扉を開いた。小さな会社も、実店舗の費用なしに国全体やその先の客に届ける。オンラインだけで、一部屋から運営される事業もある。だが変化にはより厳しい面もある。人がオンラインで買うにつれ、商店街の多くの伝統的な店が苦しみ、閉じた店もある。無数の小包の配達は、管理すべき渋滞や廃棄も生む。単純なクリックの裏に巨大な隠れた機械がある。倉庫、配送トラック、コンピューターの仕組みが協力し、速く安く品を動かす。オンラインショッピングは今や暮らしの当たり前の一部だ。多くの大きな変化と同じく、便利さと課題の両方をもたらす。これから大切なのは、利点を享受しつつ、この買い物が頼る労働者や店、環境を大切にすることだ。",
        quiz: [
          { q: "What is one benefit of online shopping for customers?", options: ["Shopping at any hour, comparing prices, and reading reviews before deciding", "Being forced to visit every shop", "Having fewer choices"], answer: 0 },
          { q: "How did online selling help small businesses?", options: ["They can reach customers far away without the cost of a physical shop", "It made shops much more expensive", "It stopped them from selling"], answer: 0 },
          { q: "What is one harder side of the change?", options: ["Many traditional shops have struggled or closed, and deliveries create waste", "Everything became free", "Nothing changed at all"], answer: 0 }
        ]
      },
      {
        id: "d0922-2",
        title: "How 3D Printers Make Things",
        level: "★★★",
        genre: "テクノロジー",
        text: "An ordinary printer puts ink on paper to make words and pictures — flat, two-dimensional shapes. A 3D printer does something far more amazing: it builds solid, three-dimensional objects that you can hold in your hand. But how can a machine create a real object out of almost nothing?\n\nThe secret is building up in thin layers. First, a designer creates a model of the object on a computer. The 3D printer then slices this model into hundreds or thousands of very thin, flat layers, like the pages of a book. The printer makes the object one layer at a time, adding material and slowly stacking the layers until the whole shape is complete.\n\nThe material is often a special plastic, melted so it can be squeezed out in fine lines, then cooling and hardening in place. Other printers use powders, resins, or even metal. Layer by layer, a flat design rises into a solid thing.\n\nThe uses are remarkable. Doctors can print models of a patient's body to plan surgery. Engineers can quickly make and test a new part before building it for real. Some printers make toys, tools, or spare parts at home, and larger ones can even help build houses.\n\nThere are limits: printing can be slow, and the objects are not always strong. But the idea is powerful. With a 3D printer, a design on a screen can become a real object — turning imagination into something you can truly touch.",
        summaryJa: "普通のプリンターは紙にインクを載せて文字や絵を作る——平らな二次元の形だ。3Dプリンターははるかに驚くべきことをする。手に持てる立体の物を作るのだ。だが機械はどうして、ほぼ無から本物の物を作れるのか。秘密は薄い層を積み上げることだ。まず設計者がコンピューターで物の模型を作る。3Dプリンターはこの模型を、本のページのように何百、何千もの非常に薄い平らな層に切り分ける。プリンターは一度に一層ずつ物を作り、材料を加え、形全体が完成するまで層をゆっくり重ねる。材料はしばしば特別なプラスチックで、細い線で押し出せるよう溶かし、その場で冷えて固まる。粉や樹脂、金属を使うプリンターもある。層を重ね、平らな設計が立体の物へと立ち上がる。用途は目覚ましい。医師は手術の計画のため患者の体の模型を印刷できる。技術者は本番の前に新しい部品を素早く作り試せる。家庭で玩具や工具、交換部品を作るプリンターもあり、大型のものは家づくりさえ助ける。限界もある。印刷は遅く、物は必ずしも丈夫でない。だが考えは強力だ。3Dプリンターで、画面上の設計が本物の物になる——想像を、本当に触れられるものに変える。",
        quiz: [
          { q: "How does a 3D printer build an object?", options: ["By building up thin layers, one at a time, until the shape is complete", "By carving a block of stone", "By drawing on paper only"], answer: 0 },
          { q: "What material do many 3D printers use?", options: ["A special plastic, melted and squeezed out, then cooling and hardening", "Only water", "Only paper"], answer: 0 },
          { q: "What is one remarkable use of 3D printing?", options: ["Doctors can print body models to plan surgery, and engineers test new parts", "It can only make flat pictures", "It has no real uses"], answer: 0 }
        ]
      },
      {
        id: "d0922-3",
        title: "The World's Plastic Problem",
        level: "★★☆",
        genre: "世界情勢",
        text: "Plastic is one of the most useful materials ever made. It is light, cheap, strong, and can be shaped into almost anything, from bottles to toys to car parts. But this very usefulness has created a serious problem: the world now produces far more plastic than it can safely deal with.\n\nThe trouble is that most plastic does not break down. A plastic bottle thrown away today may still be here in hundreds of years. Much of it ends up in rivers and oceans, where it harms fish, birds, and other animals that mistake it for food. Over time, plastic breaks into tiny pieces that spread everywhere — even into the water we drink and the air we breathe.\n\nBecause plastic travels across borders on wind and water, no single country can solve the problem alone. So nations, companies, and ordinary people around the world are working together in many ways. Some countries have banned the thinnest, most wasteful plastic bags. Companies are designing packaging that can be reused or recycled. Scientists are inventing new materials that break down safely.\n\nEach person can help too, by using less throwaway plastic and recycling what they can.\n\nThe goal is not to ban plastic entirely — it is far too useful for that. The goal is to be wiser: to use it where it truly helps, waste less of it, and make sure it does not end up harming the living world we all share.",
        summaryJa: "プラスチックは、これまで作られた中で最も有用な素材の一つだ。軽く、安く、丈夫で、瓶から玩具、車の部品までほぼ何にでも成形できる。だがこの有用さ自体が深刻な問題を生んだ。世界は今、安全に処理できるよりはるかに多くのプラスチックを作っている。問題は、多くのプラスチックが分解しないことだ。今日捨てた瓶が何百年も残りうる。その多くは川や海に行き着き、食べ物と間違える魚や鳥、他の動物を害する。時とともにプラスチックは小さな粒に砕け、至る所——飲む水や吸う空気にまで広がる。プラスチックは風や水で国境を越えるので、一国では解決できない。だから世界中の国や企業、普通の人々が多くの方法で協力している。最も薄く無駄なレジ袋を禁じた国もある。企業は再利用や再生できる包装を設計している。科学者は安全に分解する新素材を発明している。各人も、使い捨てプラスチックを減らし、できるものを再生して助けられる。目標はプラスチックを完全に禁じることではない——それには有用すぎる。目標はより賢くなることだ。本当に役立つ所で使い、無駄を減らし、皆で分かち合う生き物の世界を害さないようにすることだ。",
        quiz: [
          { q: "Why is plastic a serious problem?", options: ["Most plastic does not break down and can last for hundreds of years", "It disappears in a day", "It is too weak to use"], answer: 0 },
          { q: "Why can't one country solve the plastic problem alone?", options: ["Plastic travels across borders on wind and water", "Because only one country uses plastic", "Because plastic cannot move"], answer: 0 },
          { q: "What is the goal, according to the passage?", options: ["Not to ban plastic entirely, but to use it wisely and waste less", "To make much more plastic", "To ignore the problem"], answer: 0 }
        ]
      },
      {
        id: "d0922-4",
        title: "Hanko: Japan's Personal Seals",
        level: "★★☆",
        genre: "日本",
        text: "In many countries, you sign your name to approve an important document. In Japan, people often do something different: they press a small stamp, called a \"hanko,\" onto the paper, leaving a round mark in red ink. For a long time, this personal seal has carried the same weight as a signature.\n\nA hanko is usually a small cylinder, often made of wood, stone, or plastic, with a person's name carved into one end. When pressed onto an ink pad and then onto paper, it prints the name in a neat circle. Many people own more than one: a simple hanko for everyday use, and a more important, officially registered one for serious matters like buying a house or opening a bank account.\n\nThe custom is very old and is tied to ideas of trust and responsibility. Using your hanko means, \"I agree, and I take responsibility for this.\" Because a registered seal is so important, people keep it in a safe place and never lend it to others.\n\nIn recent years, Japan has begun to move away from the hanko for many everyday tasks, especially as more business is done online. Some argue the old custom slows things down; others feel it is a meaningful tradition worth keeping.\n\nWhatever its future, the hanko remains a small, beautiful symbol of a person's word — a tiny red circle standing for trust, agreement, and personal responsibility.",
        summaryJa: "多くの国では、重要な書類を承認するのに名前を署名する。日本では、人はしばしば違うことをする。「判子(はんこ)」という小さな印を紙に押し、赤いインクで丸い印を残すのだ。長い間、この個人の印は署名と同じ重みを持ってきた。判子は普通、木や石、プラスチック製の小さな円柱で、一端に人の名が彫られている。朱肉につけて紙に押すと、名がきれいな円で印される。多くの人は複数持つ。日常用の簡単な判子と、家の購入や銀行口座の開設など重要な事柄用の、公的に登録されたより大切なものだ。この習慣は非常に古く、信頼と責任の考えに結びつく。判子を使うことは「私は同意し、これに責任を持つ」を意味する。登録印はとても重要なので、人は安全な場所に保管し、決して他人に貸さない。近年、日本は多くの日常の手続きで判子から離れ始めている。特にオンラインの取引が増えるにつれてだ。古い習慣は物事を遅くすると言う人もいれば、守る価値のある意味深い伝統だと感じる人もいる。未来がどうあれ、判子は人の言葉の小さく美しい象徴であり続ける。信頼、同意、個人の責任を表す小さな赤い円だ。",
        quiz: [
          { q: "What is a 'hanko'?", options: ["A small stamp with a person's name, used like a signature", "A type of pen", "A kind of paper"], answer: 0 },
          { q: "Why do people keep a registered hanko in a safe place?", options: ["Because it is very important and stands for their agreement and responsibility", "Because it is worthless", "Because it is very large"], answer: 0 },
          { q: "Why is Japan moving away from the hanko for some tasks?", options: ["More business is done online, and some feel the custom slows things down", "Because signatures are illegal", "Because no one uses documents"], answer: 0 }
        ]
      },
      {
        id: "d0922-5",
        title: "Concrete That Cleans the Air",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "Concrete is all around us. It forms our roads, bridges, and buildings, and it is the most widely used building material on Earth. But making concrete has a hidden cost: the process releases a large amount of the gas that warms our planet. Now, scientists are working on a surprising idea — concrete that can actually help clean the air instead.\n\nThe problem starts with cement, the powder that holds concrete together. Making cement requires great heat and releases carbon dioxide, a gas that traps warmth in the atmosphere. Because the world uses so much concrete, this adds up to a huge share of the world's harmful emissions.\n\nResearchers have found ways to make new kinds of concrete that are both stronger and able to absorb carbon dioxide from the air as they harden and age. In effect, the concrete acts a little like a sponge, soaking up some of the very gas that its making produced. Some new mixtures also use waste materials, reducing the need for fresh cement.\n\nIf such concrete can be made cheaply and used widely, the benefits could be enormous. Imagine roads and buildings that quietly help clean the air for years, simply by existing.\n\nThe research is still developing, and it will take time to prove these materials are safe and strong enough for everyday use. But the idea points to a hopeful future — one where the very things we build might help heal the planet, not harm it.",
        summaryJa: "コンクリートは私たちの周りに満ちている。道路や橋、建物を形づくり、地球で最も広く使われる建材だ。だがコンクリート作りには隠れた代償がある。その過程で地球を温める気体が大量に放たれる。今、科学者は意外な考えに取り組んでいる。むしろ空気を浄化する助けになりうるコンクリートだ。問題はセメント、コンクリートをまとめる粉から始まる。セメント作りは大きな熱を要し、大気に温もりを閉じ込める気体である二酸化炭素を放つ。世界はコンクリートを非常に多く使うので、これが世界の有害な排出の大きな割合に積み重なる。研究者は、より丈夫で、かつ固まり古くなるにつれ空気中の二酸化炭素を吸収できる新種のコンクリートの作り方を見つけた。実質、コンクリートがスポンジのように働き、その製造が生んだまさにその気体の一部を吸い取る。廃材を使い、新しいセメントの必要を減らす新しい配合もある。もしこうしたコンクリートを安く広く作れれば、恩恵は甚大でありうる。ただ存在するだけで何年も静かに空気を浄化する道路や建物を想像してほしい。研究はまだ発展途上で、日常使用に安全で丈夫だと証明するには時間がかかる。だがこの考えは希望に満ちた未来を指す。私たちが建てるもの自体が、地球を害さず癒す助けになるかもしれない未来だ。",
        quiz: [
          { q: "What hidden cost does making concrete have?", options: ["The process releases a large amount of gas that warms the planet", "It uses no energy at all", "It cleans the air by itself already"], answer: 0 },
          { q: "What can the new kinds of concrete do?", options: ["Be stronger and absorb carbon dioxide from the air as they harden and age", "Melt in the rain", "Disappear over time"], answer: 0 },
          { q: "Why is the research still developing?", options: ["It takes time to prove the materials are safe and strong enough for everyday use", "Because concrete is never used", "Because it is already finished"], answer: 0 }
        ]
      }
    ]
    },
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
    }
  ] };
