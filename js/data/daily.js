/* デイリー配信リーディング
 * 毎朝の自動ルーチンがこのファイルを丸ごと上書き生成する（直近 7 日分を保持）。
 * days は日付降順。各 day = { date: "YYYY-MM-DD", passages: [readingPassages と同スキーマ + genre] }
 * このファイル以外は手書きデータであり、ルーチンは触らない。
 */
window.KE_DATA = window.KE_DATA || {};

KE_DATA.dailyReading = { days: [
    {
    date: "2026-09-26",
    passages: [
      {
        id: "d0926-1",
        title: "Why Happy Workers Matter",
        level: "★★☆",
        genre: "ビジネス",
        text: "For a long time, many companies thought their only job was to keep customers happy. The people who worked for the company were expected simply to do as they were told. Today, more and more businesses understand something important: happy workers are good for business.\n\nWhy does the happiness of employees matter so much? First, people who enjoy their work tend to do it better. They are more careful, more creative, and more willing to help. A worker who feels valued will often go the extra mile, while an unhappy one may do only the bare minimum.\n\nSecond, keeping good workers saves money. When someone leaves, the company must find and train a replacement, which is slow and expensive. A workplace where people feel respected and supported keeps its talented people longer.\n\nHappy workers also treat customers better. A friendly, cheerful employee makes customers feel welcome, while a tired, unhappy one can drive them away. In this way, the mood inside a company quietly reaches the people it serves.\n\nMaking workers happy does not mean simply paying more, though fair pay matters. It also means respect, interesting work, a chance to grow, and a healthy balance between work and life.\n\nWise companies now see their employees not just as workers, but as people whose wellbeing shapes everything. When a business takes care of its people, those people, in turn, take care of the business.",
        summaryJa: "長い間、多くの企業は自分たちの唯一の仕事は客を満足させることだと考えていた。会社で働く人は、言われた通りにするだけと期待された。今、ますます多くの企業が大切なことを理解している。幸せな働き手はビジネスに良い、と。なぜ従業員の幸せがそれほど重要か。第一に、仕事を楽しむ人はそれをよりうまくやる傾向がある。より注意深く、創造的で、進んで助ける。大切にされていると感じる働き手はしばしば一歩踏み込むが、不幸な人は最低限しかしないかもしれない。第二に、良い働き手を留めることはお金を節約する。誰かが辞めると、会社は後任を探し訓練せねばならず、遅く高くつく。人が尊重され支えられていると感じる職場は、有能な人をより長く留める。幸せな働き手は客もより良く扱う。親しみやすく明るい従業員は客に歓迎されていると感じさせ、疲れて不幸な人は客を遠ざけうる。こうして会社内の雰囲気が、仕える相手に静かに届く。働き手を幸せにするとは、単に多く払うことではない——公正な給与は大切だが。敬意、面白い仕事、成長の機会、仕事と生活の健全なバランスも意味する。賢い企業は今、従業員を単なる働き手でなく、その幸福がすべてを形づくる人として見る。企業が人を大切にすれば、その人が今度は企業を大切にする。",
        quiz: [
          { q: "Why do happy workers do their jobs better?", options: ["They are more careful, creative, and willing to help", "They do less work", "They ignore customers"], answer: 0 },
          { q: "How does keeping good workers save money?", options: ["The company avoids the slow, expensive task of replacing and training people", "It costs more to keep people", "Workers pay the company"], answer: 0 },
          { q: "What does making workers happy involve, besides pay?", options: ["Respect, interesting work, a chance to grow, and work-life balance", "Only shouting orders", "Nothing at all"], answer: 0 }
        ]
      },
      {
        id: "d0926-2",
        title: "How Search Engines Work",
        level: "★★★",
        genre: "テクノロジー",
        text: "Type a few words into a search engine, and in less than a second you receive millions of results, with the most useful ones usually near the top. It feels effortless, but behind that instant answer lies a huge and clever system. How does a search engine find what you want so quickly?\n\nThe work happens in three main steps. First comes crawling. The search engine sends out software, sometimes called \"spiders,\" that travel across the internet, following links from page to page and visiting billions of websites.\n\nSecond comes indexing. As the spiders visit pages, the search engine stores information about each one in a giant index — a bit like the index at the back of a book, but vastly larger. This index lets the engine find relevant pages later without searching the whole internet again.\n\nThird comes ranking. When you type a question, the engine looks in its index for matching pages, then decides which to show first. To do this, it weighs many clues: how well a page matches your words, how trusted and popular it is, and how easy it is to read.\n\nBecause the internet changes constantly, this process never stops. Spiders keep crawling, the index keeps growing, and the ranking keeps improving.\n\nSo a simple search is really the tip of an enormous machine, quietly organizing the world's information so that the answer you need is only a moment away.",
        summaryJa: "検索エンジンに数語を打ち込むと、一秒足らずで何百万もの結果が返り、最も役立つものがたいてい上位に来る。楽々に感じるが、その即座の答えの裏には巨大で巧みな仕組みがある。検索エンジンはどうして、欲しいものをそんなに速く見つけるのか。作業は主に三段階で起きる。第一はクロール。検索エンジンは「スパイダー」と呼ばれることもあるソフトを送り出し、ページからページへリンクをたどってインターネットを巡り、何十億ものサイトを訪れる。第二はインデックス化。スパイダーがページを訪れると、検索エンジンは各ページの情報を巨大な索引に蓄える。本の巻末の索引に少し似ているが、はるかに大きい。この索引のおかげで、後でインターネット全体を再び探さずに関連ページを見つけられる。第三はランク付け。質問を打つと、エンジンは索引で一致するページを探し、どれを最初に見せるか決める。そのため多くの手がかりを比べる。ページが語にどれだけ合うか、どれだけ信頼され人気か、どれだけ読みやすいか。インターネットは絶えず変わるので、この過程は止まらない。スパイダーは巡り続け、索引は育ち続け、ランク付けは改善し続ける。単純な検索は、実は巨大な機械の氷山の一角だ。世界の情報を静かに整理し、必要な答えが一瞬先にあるようにしている。",
        quiz: [
          { q: "What is the first step, 'crawling'?", options: ["Software travels the internet, following links and visiting billions of pages", "Deleting all websites", "Printing every page on paper"], answer: 0 },
          { q: "What is the 'index' like?", options: ["A giant version of the index at the back of a book", "A single photograph", "A type of computer game"], answer: 0 },
          { q: "How does the engine decide which pages to show first (ranking)?", options: ["It weighs how well a page matches, how trusted and popular it is, and how readable", "It picks pages at random", "It shows the oldest pages only"], answer: 0 }
        ]
      },
      {
        id: "d0926-3",
        title: "Working Together Against Disease",
        level: "★★★",
        genre: "世界情勢",
        text: "Diseases do not carry passports. A sickness that appears in one country can, within days, travel by airplane to the other side of the world. Because germs cross borders so easily, protecting people's health has become a task that no country can handle alone. Around the world, nations work together to fight disease.\n\nThis cooperation takes many forms. Countries share information quickly when a new illness appears, so that others can prepare. Scientists in different nations work together to study diseases and to develop medicines and vaccines. When a poorer country faces an outbreak, richer nations and global organizations often send doctors, supplies, and support.\n\nOne of the greatest victories of this teamwork was the defeat of smallpox, a deadly disease that once killed millions. Through a huge worldwide effort, doctors vaccinated people across the globe until the disease disappeared completely. It was a triumph that no single country could have achieved.\n\nThe work continues today. Health experts watch for new diseases, help vaccinate children everywhere, and plan for future outbreaks. Recent years have reminded the world how important — and how difficult — this cooperation can be.\n\nFighting disease together is not always smooth. Countries may disagree, and trust must be built. But the basic truth is clear: when it comes to health, we are all connected. A safer world for one is a safer world for all, and protecting the health of distant strangers helps protect our own.",
        summaryJa: "病気はパスポートを持たない。ある国で現れた病は、数日で飛行機に乗り地球の反対側へ移りうる。菌はたやすく国境を越えるので、人々の健康を守ることは一国では担えない務めになった。世界中で、国々は協力して病気と闘う。この協力は多くの形をとる。新しい病が現れると各国は素早く情報を共有し、他が備えられるようにする。異なる国の科学者が協力して病気を研究し、薬やワクチンを開発する。貧しい国が流行に直面すると、豊かな国や世界的な組織がしばしば医師や物資、支援を送る。この協働の最大の勝利の一つが、かつて何百万人もの命を奪った恐ろしい病、天然痘の克服だった。巨大な世界的努力を通じ、医師は病が完全に消えるまで世界中の人に予防接種をした。どの一国も成し得なかった偉業だ。仕事は今も続く。保健の専門家は新しい病を警戒し、各地の子への予防接種を助け、将来の流行に備える。近年、世界はこの協力がいかに重要で、いかに難しいかを思い出した。共に病気と闘うのは常に順調ではない。国は対立しうるし、信頼は築かねばならない。だが基本の真実は明確だ。健康に関して私たちは皆つながっている。一人にとって安全な世界は皆にとって安全な世界で、遠い見知らぬ人の健康を守ることが自分を守る助けになる。",
        quiz: [
          { q: "Why can't one country handle disease alone?", options: ["Germs cross borders easily, traveling around the world in days", "Because diseases never spread", "Because only one country has doctors"], answer: 0 },
          { q: "What was one great victory of global health teamwork?", options: ["The complete defeat of smallpox through worldwide vaccination", "Making disease spread faster", "Closing all hospitals"], answer: 0 },
          { q: "What basic truth does the passage share?", options: ["When it comes to health, we are all connected", "Health only matters in one country", "Cooperation never helps"], answer: 0 }
        ]
      },
      {
        id: "d0926-4",
        title: "The Kimono: Japan's Traditional Dress",
        level: "★★☆",
        genre: "日本",
        text: "Few images say \"Japan\" as clearly as a person wearing a kimono. This traditional garment, with its long sleeves and beautiful patterns, has been worn in Japan for well over a thousand years. Though most people wear modern clothes today, the kimono remains a treasured symbol of Japanese culture.\n\nA kimono is a long robe, wrapped around the body and held closed with a wide sash called an \"obi.\" What makes each kimono special is its design. The colors, patterns, and cloth are often chosen to match the season or the occasion. A kimono for a summer festival is light and cheerful, while one for a formal event may be rich and elegant.\n\nKimonos are usually saved for special moments. People wear them for weddings, graduations, New Year visits to shrines, and coming-of-age ceremonies. Putting one on is a careful art in itself, and dressing in a fine kimono can take help and practice.\n\nBecause good kimonos are valuable and long-lasting, they are often passed down within families, from mother to daughter. A single kimono may carry decades of memories.\n\nIn recent years, young people and visitors have enjoyed renting kimonos to walk through old streets and temples, keeping the tradition alive in a new way.\n\nThe kimono is more than clothing. It is wearable art and living history — a graceful expression of the Japanese love of beauty, season, and respect for special moments in life.",
        summaryJa: "着物を着た人ほど「日本」をはっきり物語る姿は少ない。長い袖と美しい模様を持つこの伝統的な衣服は、日本で千年をはるかに超えて着られてきた。今日ほとんどの人は現代の服を着るが、着物は日本文化の大切な象徴であり続ける。着物は長い上衣で、体に巻きつけ「帯」という幅広の帯で留める。各着物を特別にするのはその意匠だ。色や模様、布はしばしば季節や場に合わせて選ばれる。夏祭りの着物は軽く陽気で、正式な催しのものは豊かで優雅なこともある。着物はたいてい特別な時のためにとっておかれる。結婚式、卒業式、正月の神社参り、成人式に着る。着付けはそれ自体が丁寧な技で、上質な着物を着るには助けと練習が要ることもある。良い着物は価値があり長持ちするので、母から娘へと家族の中で受け継がれることが多い。一枚の着物が何十年もの思い出を宿しうる。近年、若者や訪問者は着物を借りて古い通りや寺を歩くのを楽しみ、新しい形で伝統を生かしている。着物は衣服以上のものだ。身にまとう芸術であり生きた歴史——美と季節、人生の特別な瞬間への敬意という日本の心の優雅な表現だ。",
        quiz: [
          { q: "What is an 'obi'?", options: ["The wide sash that holds a kimono closed", "A type of shoe", "A kind of hat"], answer: 0 },
          { q: "When do people usually wear kimonos?", options: ["For special moments like weddings, graduations, and New Year visits", "Every single day for work", "Only while sleeping"], answer: 0 },
          { q: "Why are kimonos often passed down in families?", options: ["Good kimonos are valuable and long-lasting, carrying decades of memories", "Because they are worthless", "Because they are made of paper"], answer: 0 }
        ]
      },
      {
        id: "d0926-5",
        title: "Why Do We Yawn?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "You are sitting quietly when, suddenly, your mouth opens wide, you take a deep breath, and you yawn. Everyone yawns — babies, old people, even dogs and cats. We often yawn when we are tired or bored. But the strange truth is that scientists are still not completely sure why we do it.\n\nFor a long time, people believed we yawn because we need more oxygen. The idea was that a tired body breathes shallowly, so a big yawn pulls in fresh air. But careful studies have cast doubt on this simple explanation, so scientists have looked for other reasons.\n\nOne interesting idea is that yawning helps cool the brain. A big yawn pulls in air and increases blood flow, which may lower the temperature of the brain slightly, helping it work better. This might explain why we yawn when we are tired, as a tired brain can be a little warmer.\n\nPerhaps the most curious fact about yawning is that it is \"contagious.\" When you see or even read about someone yawning, you may feel the urge to yawn too. This seems to be linked to how we connect with others, and it is stronger between people who are close.\n\nSo a simple yawn is more mysterious than it looks. It may cool our brains, keep us alert, and even connect us to the people around us. The next time you yawn, remember: science has not fully solved this everyday puzzle.",
        summaryJa: "静かに座っていると突然、口が大きく開き、深く息を吸い、あくびをする。誰もがあくびをする——赤ちゃんも高齢者も、犬や猫さえも。私たちは疲れたり退屈したりするとよくあくびをする。だが奇妙な真実は、科学者がなぜあくびをするのかまだ完全には確かでないことだ。長い間、酸素が足りないからあくびをすると信じられていた。疲れた体は浅く呼吸するので、大きなあくびが新鮮な空気を取り込むという考えだ。だが入念な研究がこの単純な説明に疑いを投げかけ、科学者は他の理由を探してきた。興味深い説の一つは、あくびが脳を冷やす助けになるというものだ。大きなあくびは空気を取り込み血流を増やし、脳の温度をわずかに下げてよりよく働かせるかもしれない。これは疲れたときにあくびをする理由を説明しうる。疲れた脳は少し温かくなりうるからだ。あくびの最も不思議な事実は、それが「伝染する」ことだろう。誰かのあくびを見たり、読んだりさえすると、自分もあくびをしたくなる。これは人とのつながり方に関係するらしく、親しい人同士でより強い。単純なあくびは見た目より謎めいている。脳を冷やし、覚醒を保ち、周りの人とつなげさえするかもしれない。次にあくびをするとき、思い出してほしい。科学はこの日常の謎をまだ完全には解いていない。",
        quiz: [
          { q: "What did people long believe was the reason we yawn?", options: ["That we need more oxygen, though studies have cast doubt on this", "That we are hungry", "That we want to talk"], answer: 0 },
          { q: "What is one interesting modern idea about yawning?", options: ["It may help cool the brain, helping it work better", "It makes the brain hotter", "It has no effect at all"], answer: 0 },
          { q: "What curious fact about yawning does the passage mention?", options: ["It is 'contagious' — seeing or reading about it can make you yawn", "It can only happen once a year", "Animals never yawn"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-09-25",
    passages: [
      {
        id: "d0925-1",
        title: "How Supply Chains Bring You Everything",
        level: "★★★",
        genre: "ビジネス",
        text: "Pick up almost any object in your home — a phone, a shirt, a cup of coffee — and it has traveled a long, hidden journey to reach you. Behind every product is a supply chain: the whole network of steps that turns raw materials into a finished item and delivers it to your door.\n\nA supply chain can be surprisingly long. A single chocolate bar, for example, may start with cocoa grown on a farm in one country. The beans are dried, shipped, roasted in another country, mixed with sugar and milk, wrapped in packaging made somewhere else, and finally trucked to a shop near you. Dozens of companies and thousands of people may play a part, often without ever meeting.\n\nWhen a supply chain works well, we barely notice it. Shelves are full, prices are steady, and goods arrive on time. But the system is more delicate than it looks. A storm, a strike, or a shortage in one place can slow down the whole chain, leaving shelves empty far away. In recent years, people have seen how quickly such problems can spread.\n\nThis is why businesses work hard to manage their supply chains. They plan for delays, keep backup suppliers, and use computers to track goods across the world.\n\nThe next time something arrives quickly and cheaply, remember the quiet, complex web behind it. A supply chain is one of the great hidden machines of modern life.",
        summaryJa: "家のほぼどんな物——電話、シャツ、一杯のコーヒー——を手に取っても、それはあなたに届くまで長い隠れた旅をしてきた。どの製品の背後にもサプライチェーンがある。原材料を完成品に変え、玄関まで届ける一連の段階の網だ。サプライチェーンは驚くほど長い。例えば一枚の板チョコは、ある国の農場で育つカカオから始まる。豆は乾かされ、運ばれ、別の国で焙煎され、砂糖や牛乳と混ぜられ、また別の場所で作られた包装に包まれ、最後にあなたの近くの店へトラックで運ばれる。何十もの会社と何千もの人が、しばしば一度も会わずに関わる。サプライチェーンがうまく働くと、私たちはほとんど気づかない。棚は満ち、価格は安定し、品は時間通り届く。だが仕組みは見た目より繊細だ。一箇所の嵐やストライキ、不足が連鎖全体を遅らせ、遠くの棚を空にしうる。近年、人々はこうした問題がいかに速く広がるかを見てきた。だから企業はサプライチェーンの管理に力を注ぐ。遅延に備え、予備の供給元を持ち、コンピューターで世界中の品を追う。次に何かが速く安く届いたら、その背後の静かで複雑な網を思い出してほしい。サプライチェーンは現代生活の偉大な隠れた機械の一つだ。",
        quiz: [
          { q: "What is a supply chain?", options: ["The whole network of steps that turns raw materials into a product and delivers it", "A single shop", "A type of money"], answer: 0 },
          { q: "Why is a supply chain more delicate than it looks?", options: ["A storm, strike, or shortage in one place can slow the whole chain", "It never has any problems", "It is made of glass"], answer: 0 },
          { q: "How do businesses manage their supply chains?", options: ["They plan for delays, keep backup suppliers, and track goods with computers", "They ignore all problems", "They stop making products"], answer: 0 }
        ]
      },
      {
        id: "d0925-2",
        title: "How Electric Cars Work",
        level: "★★☆",
        genre: "テクノロジー",
        text: "For more than a hundred years, most cars have run on gasoline, burning fuel in an engine to move. Now, a quieter kind of car is becoming common on our roads: the electric car. Instead of burning fuel, it runs on electricity stored in a large battery. But how does it actually work?\n\nAt the heart of an electric car is the battery, a big pack that stores electrical energy, much like a giant version of the battery in your phone. When you drive, this energy flows to an electric motor, which turns the wheels. Electric motors are simple, powerful, and very quiet, which is why an electric car glides along with almost no noise.\n\nTo refuel, you do not visit a gas station. Instead, you plug the car in and let the battery charge, often overnight at home. Charging can take longer than filling a tank, though fast chargers are improving.\n\nElectric cars have real advantages. They produce no exhaust from the car itself, which means cleaner air in cities. They are cheaper to run, since electricity often costs less than fuel, and they have fewer moving parts to break.\n\nThere are challenges too. Batteries are expensive, and drivers need enough places to charge, especially on long trips.\n\nStill, electric cars are spreading fast around the world. As batteries improve and charging becomes easier, this quiet, clean technology may soon become the normal way we drive.",
        summaryJa: "100年以上、多くの車はガソリンで走り、エンジンで燃料を燃やして動いてきた。今、より静かな種類の車が道で当たり前になりつつある。電気自動車だ。燃料を燃やす代わりに、大きな電池に蓄えた電気で走る。だが実際どう働くのか。電気自動車の心臓は電池、電話の電池の巨大版のように電気エネルギーを蓄える大きなパックだ。運転すると、このエネルギーが電気モーターに流れ、車輪を回す。電気モーターは単純で力強く、とても静かだ。だから電気自動車はほとんど音もなく滑るように進む。給油にはガソリンスタンドへ行かない。代わりに車をつないで電池を充電する。しばしば家で一晩かけて。充電はタンクを満たすより時間がかかりうるが、急速充電器は改良が進む。電気自動車には本当の利点がある。車自体から排気を出さず、都市の空気が清潔になる。電気は燃料より安いことが多く走行費が安く、壊れる可動部品も少ない。課題もある。電池は高価で、特に長旅では十分な充電場所が要る。それでも電気自動車は世界中で急速に広がる。電池が改良され充電が容易になるにつれ、この静かで清潔な技術がやがて普通の運転の仕方になるかもしれない。",
        quiz: [
          { q: "What is at the heart of an electric car?", options: ["A large battery that stores electrical energy", "A tank of gasoline", "A wood-burning stove"], answer: 0 },
          { q: "How do you refuel an electric car?", options: ["You plug it in and let the battery charge", "You visit a gas station", "You add water"], answer: 0 },
          { q: "What is one advantage of electric cars?", options: ["They produce no exhaust from the car itself, meaning cleaner air", "They make more smoke", "They have more parts to break"], answer: 0 }
        ]
      },
      {
        id: "d0925-3",
        title: "Educating Every Child",
        level: "★★☆",
        genre: "世界情勢",
        text: "Imagine growing up without ever going to school — never learning to read, write, or do basic math. For millions of children around the world, this is still a reality. Making sure that every child, everywhere, can go to school has become one of the great goals shared by nations across the globe.\n\nWhy does it matter so much? Education changes lives. A child who learns to read can find better work, understand their rights, and make wiser choices about health and money. When girls in particular are educated, whole communities grow healthier and more prosperous. Education is one of the most powerful tools we have to reduce poverty.\n\nYet many children still miss out. Some live far from any school. Some are kept home to work or care for family. War, poverty, and lack of teachers all get in the way. For girls, old customs sometimes end their schooling early.\n\nAround the world, people are working to change this. Governments build schools and train teachers. Charities provide books, meals, and safe places to learn. Technology now brings lessons to remote villages through phones and radios.\n\nProgress has been real. Far more children go to school today than a generation ago. But the work is not finished, and recent challenges have slowed it in some places.\n\nEducating every child is not only fair; it is wise. A world where all children can learn is a world with more ideas, more hope, and more chances for everyone.",
        summaryJa: "一度も学校に行かず育つことを想像してほしい——読み書きも基本の計算も習わずに。世界中の何百万もの子どもにとって、これはなお現実だ。どこの子も皆が学校に行けるようにすることは、世界の国々が共有する大きな目標の一つになった。なぜそれほど重要か。教育は人生を変える。読めるようになった子はより良い仕事を見つけ、自分の権利を理解し、健康やお金についてより賢い選択ができる。特に女子が教育を受けると、地域社会全体がより健康で豊かになる。教育は貧困を減らす最も強力な道具の一つだ。だが多くの子はなお機会を逃す。学校から遠く住む子もいる。働くためや家族の世話で家にとどめられる子もいる。戦争、貧困、教師不足がすべて妨げになる。女子には、古い慣習が早くに就学を終わらせることもある。世界中で人々はこれを変えようとしている。政府は学校を建て教師を養成する。慈善団体は本や食事、安全に学べる場所を提供する。技術は今、電話やラジオで遠い村に授業を届ける。進歩は本物だ。一世代前よりはるかに多くの子が学校に行く。だが仕事は終わっておらず、近年の困難が一部の場所で歩みを遅らせた。すべての子を教育することは公正なだけでなく賢明だ。すべての子が学べる世界は、より多くの発想と希望、そして皆への機会がある世界だ。",
        quiz: [
          { q: "Why does education matter so much?", options: ["It changes lives, helping people find work, understand rights, and reduce poverty", "It has no effect on people's lives", "It only helps rich people"], answer: 0 },
          { q: "Why do many children still miss school?", options: ["Distance, poverty, work at home, war, and a lack of teachers", "Because school is too easy", "Because no schools exist anywhere"], answer: 0 },
          { q: "How are people working to educate every child?", options: ["Building schools, training teachers, and bringing lessons through phones and radios", "By closing all schools", "By ignoring the problem"], answer: 0 }
        ]
      },
      {
        id: "d0925-4",
        title: "Ramen: Japan's Beloved Noodle Dish",
        level: "★★☆",
        genre: "日本",
        text: "On a cold evening in Japan, few things are more comforting than a steaming bowl of ramen. This popular dish is made of wheat noodles served in a hot, flavorful soup, usually topped with things like sliced pork, green onions, seaweed, and a soft-boiled egg. Simple as it sounds, ramen has become one of Japan's most loved foods, enjoyed by people of every age.\n\nInterestingly, ramen came to Japan from China long ago, but over the years the Japanese made it entirely their own. Today, almost every region of Japan has its own style. The soup might be rich and creamy in one area, light and salty in another, or dark and savory somewhere else. Ramen lovers travel across the country just to taste local versions.\n\nMaking great ramen is taken very seriously. A good soup can take many hours, or even a whole day, to prepare, as cooks slowly draw deep flavor from bones, vegetables, and other ingredients. Some famous ramen shops have lines of customers waiting patiently outside.\n\nRamen is also part of everyday life. It is cheap, filling, and quick, making it a favorite meal for busy students and workers. There are tiny shops with just a few seats, and even instant ramen that anyone can make at home in minutes.\n\nFrom humble noodles has grown a rich food culture. A single bowl of ramen holds warmth, craft, and a strong sense of local pride.",
        summaryJa: "日本の寒い夕べ、湯気の立つラーメンの丼ほど心温まるものは少ない。この人気の料理は、熱く風味豊かなスープに入った小麦の麺で、たいていチャーシューやねぎ、海苔、半熟卵などがのる。単純に聞こえるが、ラーメンは日本で最も愛される食べ物の一つになり、あらゆる年代の人に楽しまれる。興味深いことに、ラーメンは昔中国から日本に来たが、年月をかけて日本人はそれを完全に自分のものにした。今や日本のほぼどの地域にも独自の流儀がある。スープはある地域では濃厚でクリーミー、別では軽く塩気があり、また別では濃く旨みがある。ラーメン好きは地元版を味わうためだけに国中を旅する。優れたラーメン作りはとても真剣に受け止められる。良いスープは何時間、時に丸一日かかる。料理人が骨や野菜などからゆっくり深い風味を引き出すからだ。有名店には外で辛抱強く待つ客の列がある。ラーメンは日常の一部でもある。安く、満腹で、速いので、忙しい学生や働く人の好物だ。数席だけの小さな店もあれば、家で数分で作れるインスタントラーメンもある。素朴な麺から豊かな食文化が育った。一杯のラーメンに、温かさと職人技、そして強い地元の誇りが宿る。",
        quiz: [
          { q: "What is ramen?", options: ["Wheat noodles served in a hot, flavorful soup with toppings", "A cold sweet dessert", "A kind of tea"], answer: 0 },
          { q: "How did ramen become uniquely Japanese?", options: ["It came from China long ago, but Japan made it its own with many regional styles", "It was never changed at all", "It has only one style everywhere"], answer: 0 },
          { q: "Why is making great ramen taken seriously?", options: ["A good soup can take many hours or a whole day to prepare", "It takes only one second", "No effort is needed"], answer: 0 }
        ]
      },
      {
        id: "d0925-5",
        title: "How Plants Make Food from Light",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "Plants seem to live on almost nothing. Rooted in one spot, they never eat a meal as we do, yet they grow from tiny seeds into towering trees. Their secret is one of the most important processes on Earth: photosynthesis, the ability to make food from light.\n\nDeep inside their leaves, plants contain a green substance called chlorophyll. This is what makes leaves green, and it acts like a tiny solar panel. It captures energy from sunlight. Using that energy, the plant combines two simple ingredients — water drawn up from the soil, and a gas called carbon dioxide taken from the air — and turns them into sugar. This sugar is the plant's food, giving it the energy to grow.\n\nThere is a wonderful bonus in this process. As the plant makes its food, it releases oxygen into the air as a kind of waste. That oxygen is exactly what animals and people need to breathe. In a very real sense, plants and animals help keep each other alive.\n\nPhotosynthesis is happening quietly all around us, in every green leaf, blade of grass, and tiny plant in the sea. Together, the world's plants produce most of the oxygen we breathe and form the base of nearly every food chain.\n\nSo the next time you see a green leaf in the sun, remember what it is doing. It is quietly turning light into life — a piece of everyday magic that makes our whole world possible.",
        summaryJa: "植物はほとんど何もなしに生きているように見える。一箇所に根を張り、私たちのように食事はしないのに、小さな種からそびえる木へと育つ。その秘密は地球で最も重要な過程の一つ、光合成——光から食物を作る能力だ。葉の奥深く、植物はクロロフィルという緑の物質を含む。これが葉を緑にし、小さな太陽電池のように働く。日光からエネルギーを捉えるのだ。そのエネルギーを使い、植物は二つの簡単な材料——土から吸い上げた水と、空気から取り込む二酸化炭素という気体——を合わせ、糖に変える。この糖が植物の食物で、育つエネルギーを与える。この過程には素晴らしいおまけがある。植物は食物を作る間、一種の廃物として酸素を空気中に放つ。その酸素こそ、動物や人が呼吸に必要とするものだ。実に本当の意味で、植物と動物は互いを生かし合っている。光合成は私たちの周りのあらゆる緑の葉、草の刃、海の小さな植物で静かに起きている。合わせて、世界の植物は私たちが呼吸する酸素の大半を作り、ほぼすべての食物連鎖の土台をなす。次に日なたの緑の葉を見たら、それが何をしているか思い出してほしい。静かに光を命に変えている——私たちの世界全体を可能にする、日常の魔法の一片だ。",
        quiz: [
          { q: "What is photosynthesis?", options: ["A plant's ability to make food from light", "A way plants eat meals like animals", "A kind of animal"], answer: 0 },
          { q: "What does a plant combine to make sugar?", options: ["Water from the soil and carbon dioxide from the air, using energy from sunlight", "Only rocks", "Plastic and metal"], answer: 0 },
          { q: "What helpful thing do plants release as they make food?", options: ["Oxygen, which animals and people need to breathe", "Poison gas", "Nothing at all"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-09-24",
    passages: [
      {
        id: "d0924-1",
        title: "Why Small Businesses Matter",
        level: "★★☆",
        genre: "ビジネス",
        text: "When we think of business, we often picture huge, famous companies. But most businesses in the world are small: the corner bakery, the family restaurant, the local repair shop, the one-person design studio. Though each is tiny compared to a giant firm, together small businesses form the backbone of almost every economy.\n\nTheir importance is easy to overlook but very real. Small businesses create a large share of all jobs. They often hire people from the local area and keep money circulating within the community. When you buy from a nearby shop, more of your money tends to stay close to home.\n\nSmall businesses also bring variety and character. A street lined with unique local shops feels different from one filled only with identical chain stores. Many big, world-changing companies began as tiny startups in a garage or a spare room, so today's small business may be tomorrow's giant.\n\nRunning a small business is hard, however. Owners often work long hours and must handle everything themselves, from serving customers to keeping accounts. They can struggle to compete with the low prices of large companies.\n\nThat is why communities and governments sometimes support them, through fair rules, advice, or small loans. And customers help too, simply by choosing to shop locally.\n\nSmall businesses remind us that an economy is not only about the biggest players. It is also built from countless small dreams, each one making its own quiet contribution.",
        summaryJa: "ビジネスと聞くと、巨大で有名な企業を思い浮かべがちだ。だが世界の事業の多くは小さい。街角のパン屋、家族経営の食堂、地元の修理店、一人のデザイン工房。巨大企業に比べれば小さくても、合わせれば小規模事業はほぼすべての経済の背骨をなす。その重要さは見落としやすいが極めて現実的だ。小規模事業は全雇用の大きな割合を生む。しばしば地元の人を雇い、地域内でお金を循環させる。近所の店で買うと、お金の多くが地元に留まりやすい。小規模事業は多様性と個性ももたらす。個性的な地元の店が並ぶ通りは、同じチェーン店だけの通りとは違って感じられる。世界を変えた大企業の多くも、ガレージや空き部屋の小さなスタートアップから始まった。今日の小さな事業が明日の巨人かもしれない。だが小規模事業の経営は大変だ。経営者は長時間働き、接客から経理まで自分ですべてをこなさねばならない。大企業の安さと競うのに苦労しうる。だから地域や政府は、公正な規則や助言、少額融資で支えることがある。客も、地元で買うと選ぶだけで助けになる。小規模事業は、経済が最大の担い手だけの話ではないと思い出させる。無数の小さな夢からも築かれ、それぞれが静かに貢献している。",
        quiz: [
          { q: "Why do small businesses matter to an economy?", options: ["Together they create a large share of jobs and keep money in the community", "They create no jobs", "They only harm the economy"], answer: 0 },
          { q: "What do small businesses bring besides jobs?", options: ["Variety and character to a place", "Only higher prices", "Fewer choices"], answer: 0 },
          { q: "Why is running a small business hard?", options: ["Owners work long hours, do everything, and struggle to match big firms' low prices", "It is always easy and free", "There is nothing to do"], answer: 0 }
        ]
      },
      {
        id: "d0924-2",
        title: "Technology You Can Wear",
        level: "★★☆",
        genre: "テクノロジー",
        text: "For most of history, our tools sat in our hands or on our desks. Today, a new kind of technology is moving onto our bodies. Watches that track our steps, glasses that show information, and rings that measure our sleep are all part of a growing field called wearable technology.\n\nThe idea is simple: instead of pulling a device out of your pocket, you wear it, so it is always with you and can quietly help throughout the day. A smartwatch can show a message, count your heartbeats, or remind you to stand up. Some glasses can give directions or translate signs as you look at them. These devices aim to give useful information without demanding your full attention.\n\nWearables are especially promising for health. Because they sit on the body all day, they can gently track things like heart rate, activity, and sleep. This can help people notice problems early and build healthier habits. Doctors are exploring how such data might help patients too.\n\nBut there are concerns. A device that is always on the body can collect very personal information, so protecting that data is essential. There is also the worry of being distracted, or too connected, all the time.\n\nWearable technology is still developing, and not every gadget will succeed. Yet the direction is clear: our tools are becoming smaller, closer, and more personal — quietly woven into the fabric of daily life.",
        summaryJa: "歴史の大半、道具は手の中や机の上にあった。今、新しい種類の技術が私たちの体へ移りつつある。歩数を測る時計、情報を映す眼鏡、睡眠を測る指輪。すべて、ウェアラブル技術という成長分野の一部だ。考えは単純だ。ポケットから機器を取り出す代わりに身につけ、常に共にあって一日中静かに助ける。スマートウォッチはメッセージを表示し、心拍を数え、立ち上がるよう促す。眼鏡は見た標識の道案内や翻訳をするものもある。これらは全注意を求めず有用な情報を与えることを目指す。ウェアラブルは特に健康で有望だ。一日中体にあるので、心拍や活動、睡眠を優しく記録できる。問題に早く気づき、より健康な習慣を築く助けになる。医師もこのデータが患者を助けうるか探っている。だが懸念もある。常に体にある機器は極めて個人的な情報を集めうるので、その保護が不可欠だ。常に気が散る、あるいはつながりすぎる心配もある。ウェアラブル技術はまだ発展途上で、すべての機器が成功するわけではない。だが方向は明確だ。道具はより小さく、近く、個人的になり、日常の織物に静かに織り込まれていく。",
        quiz: [
          { q: "What is wearable technology?", options: ["Devices you wear on your body, like watches, glasses, and rings", "Only desktop computers", "Tools kept in a drawer"], answer: 0 },
          { q: "Why are wearables especially promising for health?", options: ["They sit on the body all day and can track heart rate, activity, and sleep", "They cannot measure anything", "They only tell the time"], answer: 0 },
          { q: "What is one concern about wearables?", options: ["They can collect very personal data, so protecting it is essential", "They are too large to wear", "They never turn on"], answer: 0 }
        ]
      },
      {
        id: "d0924-3",
        title: "Protecting Endangered Animals",
        level: "★★★",
        genre: "世界情勢",
        text: "Across the world, many kinds of animals are in danger of disappearing forever. Tigers, elephants, certain whales, and countless lesser-known creatures have grown rare. When the last member of a species dies, that animal is gone for all time — a loss that can never be undone. Protecting endangered animals has become a shared goal for people everywhere.\n\nWhy are so many animals in trouble? The reasons are mostly human. As we clear forests, build cities, and change the land, wild animals lose the homes they need. Some are hunted illegally for their skin, horns, or other parts. Pollution and a changing climate add further pressure.\n\nThe loss matters for more than sentimental reasons. Every animal has a role in the web of nature. Bees carry pollen, wolves keep herds healthy, and forests full of life clean our air and water. Remove one creature, and others may suffer in ways that are hard to predict.\n\nAround the world, people are fighting to help. Countries set aside protected parks where animals can live safely. Laws ban the illegal trade in rare species. Scientists study animals to understand what they need, and some carefully raise endangered creatures to release them back into the wild.\n\nSaving these animals takes cooperation across borders, because nature does not stop at any country's line. By protecting endangered species, we protect the rich, living world we are all part of — and we keep it whole for those who come after us.",
        summaryJa: "世界中で、多くの種類の動物が永遠に消える危機にある。トラ、ゾウ、ある種のクジラ、そして無数のあまり知られない生き物が稀になった。ある種の最後の一匹が死ぬと、その動物は永久に失われる——決して取り戻せない喪失だ。絶滅危惧動物を守ることは、各地の人々の共通の目標になった。なぜ多くの動物が危機にあるのか。理由の多くは人間だ。森を切り、都市を建て、土地を変えるにつれ、野生動物は必要なすみかを失う。皮や角などのために違法に狩られるものもいる。汚染や変わる気候がさらに圧力を加える。この喪失は感傷以上の理由で重要だ。どの動物も自然の網の中で役割を持つ。ハチは花粉を運び、オオカミは群れを健康に保ち、生命に満ちた森は空気と水を浄化する。一つの生き物を取り除けば、他が予測しにくい形で苦しみうる。世界中で人々は助けようと闘っている。動物が安全に暮らせる保護公園を設ける国もある。法は稀少種の違法取引を禁じる。科学者は動物が何を必要とするか研究し、絶滅危惧種を丁寧に育て野生に戻す人もいる。これらの動物を救うには国境を越えた協力が要る。自然はどの国の線でも止まらないからだ。絶滅危惧種を守ることで、私たち皆が属する豊かで生きた世界を守り、後に来る者のために全きまま保つのだ。",
        quiz: [
          { q: "Why are so many animals in danger?", options: ["Mostly human reasons: lost homes, illegal hunting, pollution, and a changing climate", "Because there are too few humans", "For no reason at all"], answer: 0 },
          { q: "Why does losing an animal matter beyond sentiment?", options: ["Every animal has a role in nature, and removing one can harm others", "It never affects anything", "Only large animals matter"], answer: 0 },
          { q: "Why does saving animals need cooperation across borders?", options: ["Nature does not stop at any country's line", "Because animals carry passports", "Because only one country has animals"], answer: 0 }
        ]
      },
      {
        id: "d0924-4",
        title: "Wagashi: Japan's Traditional Sweets",
        level: "★★☆",
        genre: "日本",
        text: "Japanese traditional sweets, called \"wagashi,\" are small works of art as much as they are food. Often served with green tea, they are made to delight the eyes as well as the tongue. A single wagashi may be shaped like a cherry blossom, a maple leaf, or a drop of dew, capturing the beauty of the season in a bite-sized treat.\n\nWagashi are usually made from simple, natural ingredients: rice, sweet bean paste, sugar, and fruit. Unlike many Western desserts, they are often not very sweet, and they use little or no butter or cream. This gentle taste pairs perfectly with the slightly bitter flavor of green tea.\n\nOne of the most special things about wagashi is their close link to the seasons. A skilled maker changes the shapes, colors, and names of the sweets throughout the year, so a wagashi eaten in spring looks and feels different from one eaten in autumn. Enjoying them is a way of tasting the passing year.\n\nMaking fine wagashi takes years of training. By hand, an artisan shapes soft dough into delicate flowers and leaves, working with patience and care. The finest pieces are almost too beautiful to eat.\n\nWagashi show a deep idea in Japanese culture: that even a simple sweet can hold beauty, season, and meaning. To eat one slowly, with a cup of tea, is to enjoy a small, quiet moment of art in everyday life.",
        summaryJa: "「和菓子」と呼ばれる日本の伝統的なお菓子は、食べ物であると同時に小さな芸術作品だ。しばしば緑茶とともに供され、舌だけでなく目も楽しませるよう作られる。一つの和菓子が桜や紅葉、露の一滴の形をとり、季節の美しさを一口大の菓子に捉える。和菓子はふつう、米、あんこ、砂糖、果物という簡素で自然な材料から作られる。多くの西洋のデザートと違い、あまり甘くないことが多く、バターやクリームはほとんど使わない。この穏やかな味が、緑茶のやや苦い風味と完璧に合う。和菓子の最も特別な点の一つは、季節との密接なつながりだ。熟練の作り手は一年を通じて菓子の形、色、名を変えるので、春に食べる和菓子は秋のものと見た目も感じも違う。楽しむことは移ろう一年を味わうことだ。上質な和菓子作りには何年もの修練が要る。職人は手で柔らかい生地を繊細な花や葉に形づくり、忍耐と心配りで働く。最上のものは食べるには美しすぎるほどだ。和菓子は日本文化の深い考えを示す。簡素な菓子さえ、美と季節と意味を宿しうる。一つをお茶とともにゆっくり食べることは、日常の中の小さく静かな芸術の瞬間を楽しむことだ。",
        quiz: [
          { q: "What are wagashi?", options: ["Japanese traditional sweets, made to delight the eyes as well as the tongue", "A kind of hot soup", "A type of tea"], answer: 0 },
          { q: "How do wagashi taste compared with many Western desserts?", options: ["Often not very sweet, using little or no butter or cream", "Much sweeter and full of cream", "Very salty"], answer: 0 },
          { q: "What is special about wagashi and the seasons?", options: ["Their shapes, colors, and names change through the year", "They never change", "They can only be eaten in winter"], answer: 0 }
        ]
      },
      {
        id: "d0924-5",
        title: "Why Birds Migrate",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "Each autumn, in many parts of the world, flocks of birds gather and fly away, sometimes traveling thousands of kilometers to warmer lands. In spring, they return. This great journey is called migration, and it is one of the most amazing feats in all of nature.\n\nWhy do birds take such a long and dangerous trip? The main reason is food and weather. As winter approaches, cold settles in and food becomes scarce. Insects vanish, and plants stop growing. Rather than starve or freeze, many birds fly to places where the weather is mild and food is plentiful. When spring returns and their northern homes bloom again, they come back to raise their young.\n\nHow birds find their way is a wonder in itself. Over such vast distances, with no maps or signs, they still reach the same regions year after year. Scientists believe birds use several clues: the position of the sun and stars, familiar landmarks like rivers and coasts, and even the Earth's magnetic field, which they seem able to sense.\n\nMigration is not easy. Birds must store energy for the journey, face storms and predators, and cross seas and mountains. Many do not survive. Those that do show incredible strength and instinct.\n\nBy protecting the places where birds rest and feed along the way, people can help these travelers complete their journeys. Migration reminds us that the natural world is deeply connected, across seasons and across the whole planet.",
        summaryJa: "毎秋、世界の多くの地域で、鳥の群れが集まり飛び去る。時に何千キロも越え、より暖かい土地へ向かう。春には戻る。この大きな旅は渡りと呼ばれ、自然界で最も驚くべき偉業の一つだ。なぜ鳥はこれほど長く危険な旅をするのか。主な理由は食べ物と天気だ。冬が近づくと寒さが定着し食べ物が乏しくなる。昆虫は消え、植物は育たなくなる。飢えたり凍えたりする代わりに、多くの鳥は天気が穏やかで食べ物が豊富な場所へ飛ぶ。春が戻り北のすみかが再び花咲くと、雛を育てに戻ってくる。鳥がどう道を見つけるかも驚異だ。地図も標識もない広大な距離を、それでも年ごとに同じ地域へ着く。科学者は鳥がいくつかの手がかりを使うと考える。太陽や星の位置、川や海岸などなじみの目印、そして感じ取れるらしい地球の磁場だ。渡りは容易ではない。鳥は旅のためにエネルギーを蓄え、嵐や捕食者に直面し、海や山を越えねばならない。多くは生き延びない。生き延びる鳥は驚くべき力と本能を示す。途中で鳥が休み餌をとる場所を守ることで、人はこの旅人が旅を終える助けができる。渡りは、自然界が季節を越え地球全体で深くつながっていると思い出させる。",
        quiz: [
          { q: "Why do birds migrate?", options: ["Mainly for food and weather — they fly to milder places when winter brings cold and scarce food", "Because they dislike other birds", "For no reason"], answer: 0 },
          { q: "How do birds find their way over vast distances?", options: ["Using the sun and stars, landmarks, and the Earth's magnetic field", "By reading road signs", "By following cars"], answer: 0 },
          { q: "How can people help migrating birds?", options: ["By protecting the places where birds rest and feed along the way", "By removing all forests", "By feeding them nothing"], answer: 0 }
        ]
      }
    ]
    },
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
    }
  ] };
