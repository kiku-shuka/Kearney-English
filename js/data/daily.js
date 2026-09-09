/* デイリー配信リーディング
 * 毎朝の自動ルーチンがこのファイルを丸ごと上書き生成する（直近 7 日分を保持）。
 * days は日付降順。各 day = { date: "YYYY-MM-DD", passages: [readingPassages と同スキーマ + genre] }
 * このファイル以外は手書きデータであり、ルーチンは触らない。
 */
window.KE_DATA = window.KE_DATA || {};

KE_DATA.dailyReading = { days: [
    {
    date: "2026-09-09",
    passages: [
      {
        id: "d0909-1",
        title: "Build It or Buy It?",
        level: "★★☆",
        genre: "ビジネス",
        text: "Imagine a company needs a new piece of software — perhaps a tool to manage its customers or track its sales. It faces a classic business choice: should it build the software itself, or buy a ready-made product from another company? This simple question, known as \"build or buy,\" comes up again and again in the business world.\n\nBuilding your own software has clear attractions. The tool can be shaped to fit your exact needs, and you are not dependent on another company. Over many years, building in-house can also save money on fees. But it is far from easy. Software takes skilled workers, time, and constant care. A project can run late, cost more than expected, or fail completely.\n\nBuying a ready-made product is often faster and simpler. Someone else has already done the hard work, fixed the bugs, and keeps the tool updated. You can start using it almost at once. The downside is that you must fit your business to the product, pay ongoing fees, and trust another company to keep it running.\n\nThere is no single right answer. A common rule is to build what makes your company special and buy the rest. Why spend years building an email system when good ones already exist?\n\nIn the end, \"build or buy\" is really a question about focus. Wise companies save their energy for the work only they can do best.",
        summaryJa: "ある会社が新しいソフト——顧客管理や売上追跡の道具——を必要とするとしよう。古典的な選択に直面する。自社で作るか、他社の既製品を買うか。「作るか買うか(build or buy)」と呼ばれるこの問いはビジネスで何度も現れる。自社開発には明確な魅力がある。自社のニーズに合わせられ、他社に依存しない。長年で見れば手数料の節約にもなる。だが容易ではない。ソフトには熟練者と時間、絶え間ない手入れが要り、遅延や超過、失敗もある。既製品を買う方が速く簡単なことが多い。誰かが難しい作業を済ませ、不具合を直し、更新も続ける。すぐ使い始められる。欠点は、自社を製品に合わせ、継続的な料金を払い、他社の運営を信頼せねばならないこと。唯一の正解はない。「自社を特別にするものは作り、残りは買う」がよくある原則だ。核心は集中の問題で、賢い会社は自社が最も得意な仕事に力を残す。",
        quiz: [
          { q: "What is the 'build or buy' choice about?", options: ["Whether to build software yourself or buy a ready-made product", "Whether to open or close a shop", "Which color to paint an office"], answer: 0 },
          { q: "What is one downside of building your own software?", options: ["It takes skilled workers and time, and a project can run late or fail", "It is always free", "It is finished in one day"], answer: 0 },
          { q: "What common rule does the passage give?", options: ["Build what makes your company special and buy the rest", "Always build everything", "Never use any software"], answer: 0 }
        ]
      },
      {
        id: "d0909-2",
        title: "Nuclear Power Gets a Second Look",
        level: "★★★",
        genre: "テクノロジー",
        text: "For years, nuclear power was out of fashion in many countries. After some famous accidents, people worried about safety and about the waste that stays dangerous for a long time. Some nations even decided to close their nuclear plants. But recently, nuclear energy is getting a fresh look, and interest is growing once again.\n\nWhy the change? The main reason is the need for clean, steady electricity. Unlike coal or gas, a nuclear plant produces almost no gases that warm the planet. And unlike wind or solar power, it can run day and night, in any weather. As the world uses more and more electricity — for cars, factories, and huge computer centers — a reliable, low-pollution source looks very valuable.\n\nNew technology is part of the story too. Engineers are designing smaller, simpler reactors that may be safer and cheaper to build. Some companies hope these can be made in factories and shipped to where they are needed.\n\nOf course, the old worries have not disappeared. Safety, cost, and the question of what to do with nuclear waste are still serious. Building a plant takes many years and huge sums of money, and public trust must be earned.\n\nNuclear power is not a magic answer. But as the world searches for clean energy that never sleeps, many experts believe it deserves a careful second look.",
        summaryJa: "長年、原子力は多くの国で人気を失っていた。有名な事故の後、安全や、長く危険が残る廃棄物への不安があった。原発を閉じると決めた国さえある。だが最近、原子力が再び見直され、関心が高まっている。なぜか。主な理由は、清潔で安定した電気の必要性だ。石炭やガスと違い、原発は地球を温める気体をほとんど出さない。風力や太陽光と違い、昼夜どんな天気でも動ける。世界が車や工場、巨大な計算施設でますます電気を使う中、信頼でき低汚染の電源は非常に価値がある。新技術も物語の一部だ。より安全で安く作れそうな小型で単純な原子炉が設計されている。工場で作り必要な場所へ運ぶ構想もある。もちろん旧来の不安も消えていない。安全、費用、廃棄物の扱いは依然深刻で、建設には長い年月と巨額が要り、市民の信頼も得ねばならない。原子力は魔法の答えではないが、眠らない清潔なエネルギーを探す世界で、丁寧に見直す価値があると多くの専門家は考える。",
        quiz: [
          { q: "Why is nuclear power getting a fresh look?", options: ["It provides clean, steady electricity that runs day and night", "It produces a lot of warming gases", "It only works when it is sunny"], answer: 0 },
          { q: "What new technology is part of the story?", options: ["Smaller, simpler reactors that may be safer and cheaper to build", "Reactors that need no engineers", "Plants that run without any fuel"], answer: 0 },
          { q: "What old worries still remain?", options: ["Safety, cost, and what to do with nuclear waste", "Nothing at all", "Only the color of the buildings"], answer: 0 }
        ]
      },
      {
        id: "d0909-3",
        title: "Protecting the World's Oceans",
        level: "★★☆",
        genre: "世界情勢",
        text: "The ocean covers most of our planet and is full of life, from tiny fish to giant whales. It gives us food, produces much of the oxygen we breathe, and helps control the world's climate. Yet for a long time, people treated the sea as if it were endless, taking too many fish and leaving behind pollution. Now, countries around the world are working to protect it.\n\nOne key idea is the \"marine protected area.\" This is a part of the sea where fishing and other harmful activities are limited or banned. Inside these safe zones, fish can grow and multiply in peace. Over time, the sea life often becomes richer, and the benefits spread to nearby waters where people still fish.\n\nNations are also joining together in agreements to protect the open ocean far from any coast. Because no single country owns these waters, only cooperation can keep them healthy. This is difficult, slow work, but the goal is shared: a living, healthy sea for the future.\n\nThere are challenges. Rules are hard to enforce across a vast ocean, and some communities depend on fishing for their living. Solutions must protect both nature and people.\n\nStill, the effort is hopeful. By caring for the ocean today — through protected areas, cleaner habits, and global teamwork — we help make sure the sea remains a source of life for generations to come.",
        summaryJa: "海は地球の大部分を覆い、小さな魚から巨大なクジラまで生命に満ちている。食物を与え、呼吸する酸素の多くを生み、世界の気候の制御を助ける。だが長い間、人は海を無限であるかのように扱い、魚を取りすぎ汚染を残してきた。今、世界の国々が海を守ろうとしている。鍵となる考えの一つが「海洋保護区」だ。漁など有害な活動を制限・禁止する海の一部で、その安全な区域で魚は安心して育ち増える。やがて海の生命は豊かになり、恩恵は人が漁を続ける近隣の海にも広がる。各国は沿岸から遠い外洋を守る協定でも手を組む。どの国も所有しない海は協力でしか健康を保てない。難しく遅い作業だが、未来へ生きた健康な海という目標は共有されている。広大な海で規則を守らせるのは難しく、漁で生計を立てる人もいる。自然と人の両方を守らねばならない。それでも、保護区や清潔な習慣、世界の協力で海を守ることは希望だ。",
        quiz: [
          { q: "What does the ocean give us, according to the passage?", options: ["Food, much of the oxygen we breathe, and help controlling the climate", "Nothing useful", "Only salt"], answer: 0 },
          { q: "What is a 'marine protected area'?", options: ["A part of the sea where harmful activities are limited so life can recover", "A place where all fishing is required", "A city built on the sea"], answer: 0 },
          { q: "Why is cooperation needed to protect the open ocean?", options: ["Because no single country owns those waters", "Because the ocean is very small", "Because no one uses the ocean"], answer: 0 }
        ]
      },
      {
        id: "d0909-4",
        title: "How the Seasons Shape Life in Japan",
        level: "★★☆",
        genre: "日本",
        text: "Many countries have seasons, but in Japan the four seasons hold a special place in daily life and culture. Spring, summer, autumn, and winter are not just changes in the weather. They shape what people eat, how they decorate their homes, and even the words they use in letters and greetings.\n\nEach season brings its own joys. Spring is famous for cherry blossoms, when families gather under the trees to enjoy the brief, beautiful flowers. Summer brings festivals, fireworks, and cool foods. Autumn offers colorful leaves and a rich harvest, while winter brings hot dishes, snow in many regions, and the quiet beauty of a resting land.\n\nFood is closely tied to the seasons. Cooks take pride in using ingredients that are at their best right now — the first fish of the season, or a fruit that appears for only a few weeks. Eating \"in season\" is seen as both tastier and wiser.\n\nThis awareness runs deep. A traditional letter might begin with a comment about the weather or the season, a small, polite way of sharing the moment. Poems and art often celebrate a single season, capturing its special feeling.\n\nBy paying attention to the seasons, people in Japan stay closely connected to nature, even in busy modern cities. Each turning of the year is a gentle reminder that time, like the seasons, is always quietly moving forward.",
        summaryJa: "多くの国に季節はあるが、日本では四季が暮らしと文化で特別な位置を占める。春夏秋冬は単なる天気の変化ではない。食べるもの、家の飾り方、手紙や挨拶の言葉さえ形づくる。各季節に固有の喜びがある。春は桜で有名で、家族が木の下に集い短く美しい花を楽しむ。夏は祭りや花火、涼しい食べ物。秋は色づく葉と豊かな実り、冬は温かい料理や多くの地域の雪、休む大地の静かな美しさをもたらす。食は季節と深く結びつく。料理人は今が旬の食材——初物の魚や数週間だけ現れる果物——を使うことに誇りを持つ。「旬」を食べることは、よりおいしく賢いとされる。この意識は深い。伝統的な手紙は天気や季節への一言で始まり、瞬間を分かち合う小さな礼儀だ。詩や芸術は一つの季節を讃え、その特別な感じを捉える。季節に心を配ることで、忙しい現代の都市でも人々は自然と密接につながる。年の巡りは、時が季節のように静かに前へ進むと優しく思い出させる。",
        quiz: [
          { q: "In Japan, what do the four seasons shape besides the weather?", options: ["What people eat, how they decorate homes, and the words in greetings", "Only the price of houses", "Nothing at all"], answer: 0 },
          { q: "What does eating 'in season' mean?", options: ["Using ingredients that are at their best right now", "Eating only frozen food", "Never eating fruit"], answer: 0 },
          { q: "How might a traditional Japanese letter begin?", options: ["With a comment about the weather or the season", "With a demand for money", "With no words at all"], answer: 0 }
        ]
      },
      {
        id: "d0909-5",
        title: "The World's Hardest Math Puzzles",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "Most people think of mathematics as a subject with clear answers: two plus two is always four. But at its frontier, mathematics is full of deep mysteries — puzzles so hard that the greatest minds have failed to solve them for decades, or even centuries. Some of these problems are so important that a prize of a million dollars awaits anyone who can crack one.\n\nWhy are such puzzles worth so much? Because a single answer can open a door to whole new areas of knowledge. Mathematics is the hidden language behind physics, computer science, and engineering. A problem that looks like a pure game on paper may, once solved, help us build safer codes, faster computers, or a better understanding of the universe.\n\nSolving these puzzles takes years of patient thought. Mathematicians fill notebooks with attempts, share ideas across the world, and build on the work of those before them. In recent times, even powerful computers have begun to help, checking ideas and searching for patterns humans might miss.\n\nWhen a famous problem is finally solved, it is major news in the world of science. But it can also raise new questions, such as who truly deserves the credit, and what the answer really means.\n\nThese great puzzles remind us that mathematics is not finished. It is a living adventure, full of unknown territory still waiting to be explored.",
        summaryJa: "多くの人は数学を明快な答えのある科目と思う。2足す2は必ず4だと。だがその最前線では、数学は深い謎に満ちている。最高の頭脳でさえ何十年、時に何世紀も解けなかった難問だ。あまりに重要で、解いた人に100万ドルの賞金が待つ問題もある。なぜそれほどの価値があるのか。一つの答えが全く新しい知の領域への扉を開きうるからだ。数学は物理、計算機科学、工学の背後にある隠れた言語だ。紙の上の純粋な遊びに見える問題も、解ければより安全な暗号や速いコンピューター、宇宙のより良い理解を助けうる。解くには長年の忍耐強い思考が要る。数学者はノートを試行で埋め、世界で発想を共有し、先人の仕事の上に築く。近年は強力なコンピューターも助け始め、発想を確かめ人が見逃す模様を探す。有名な問題がついに解かれると科学界の大ニュースだが、誰の功績か、答えが何を意味するかという新たな問いも生む。これらの難問は、数学が未完で、未知の領域に満ちた生きた冒険だと教えてくれる。",
        quiz: [
          { q: "Why are some math puzzles worth so much?", options: ["A single answer can open the door to whole new areas of knowledge", "Because math has no uses", "Because they are easy to solve"], answer: 0 },
          { q: "How have powerful computers begun to help mathematicians?", options: ["By checking ideas and searching for patterns humans might miss", "By solving nothing at all", "By replacing mathematics entirely"], answer: 0 },
          { q: "What do these great puzzles remind us?", options: ["Mathematics is not finished — it is a living adventure", "Mathematics has all its answers already", "Mathematics is useless"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-09-08",
    passages: [
      {
        id: "d0908-1",
        title: "What Is Venture Capital?",
        level: "★★★",
        genre: "ビジネス",
        text: "You may have heard that a young company just raised a huge amount of money from investors, sometimes hundreds of millions of dollars, even though it has not yet made a profit. This kind of investment often comes from something called venture capital. Understanding it helps explain how many of today's biggest companies began.\n\nA new company with a bold idea usually needs money to grow. It may need to hire engineers, build a product, and reach customers, all before earning much income. Banks are often unwilling to lend to such young, risky businesses. This is where venture capital, or \"VC,\" steps in.\n\nVenture capital firms gather money from large investors and use it to buy a share of promising young companies. In return, they give not only money but also advice, contacts, and experience. They know that most of these young companies will fail. But they hope that a few will grow enormously, and that those rare successes will more than cover all the losses.\n\nFor the founders, VC money can turn a small idea into a global business quickly. But it comes at a price. By selling part of their company, founders give up some control, and they face strong pressure to grow fast.\n\nVenture capital is a bet on the future. It is risky and demanding, yet it has helped create many of the technologies and services we now use every day.",
        summaryJa: "利益もまだ出していない若い会社が、投資家から数億ドルもの巨額を調達したと聞くことがある。こうした投資はしばしば「ベンチャーキャピタル」から来る。これを理解すると、今日の大企業の多くがどう始まったか分かる。大胆な着想を持つ新会社は成長に資金が要る。技術者を雇い製品を作り顧客に届けるまで、収入は少ない。銀行はこうした若くリスクの高い事業に貸したがらない。そこでVCが登場する。VCは大口投資家から資金を集め、有望な若い会社の株を買う。見返りに資金だけでなく助言や人脈、経験も与える。多くは失敗すると知りつつ、少数が巨大に育ち損失を補うと期待する。創業者には小さな着想を素早く世界的事業に変えうるが、代償もある。会社の一部を売り支配権を手放し、急成長の圧力に直面する。VCは未来への賭けで、リスクは高いが、今使う多くの技術やサービスを生んできた。",
        quiz: [
          { q: "Why do banks often avoid lending to young companies?", options: ["Because such young businesses are risky", "Because banks have no money", "Because young companies never need money"], answer: 0 },
          { q: "What do venture capital firms give besides money?", options: ["Advice, contacts, and experience", "Only empty promises", "Nothing at all"], answer: 0 },
          { q: "What price do founders pay for VC money?", options: ["They give up some control and face pressure to grow fast", "They pay nothing", "They must close their company"], answer: 0 }
        ]
      },
      {
        id: "d0908-2",
        title: "How the World Makes a Computer Chip",
        level: "★★★",
        genre: "テクノロジー",
        text: "Inside almost every modern device — your phone, your car, your washing machine — sits a tiny computer chip. These chips are among the most complex objects humans have ever built, yet they are smaller than a fingernail. Making them is a marvel of science and patience.\n\nA chip is built on a thin slice of a material called silicon. Onto this surface, engineers print billions of tiny switches, far too small to see. To do this, they use a special kind of light and patterns finer than anything drawn by hand. Layer by layer, the design is carefully printed, like a photograph made at an unimaginably small scale.\n\nThe precision required is astonishing. The smallest parts of a modern chip are only a few atoms wide. Even a speck of dust can ruin a chip, so the factories, called \"fabs,\" are kept cleaner than a hospital. Workers wear special suits, and the air is filtered again and again.\n\nBecause this process is so difficult, only a handful of companies in the world can make the most advanced chips. Building a single factory can cost billions of dollars and take years.\n\nThe next time you tap your phone, remember the hidden wonder inside. That small chip is the result of decades of human cleverness, and a manufacturing process so exact that it works at the level of single atoms.",
        summaryJa: "現代のほぼ全ての機器——電話、車、洗濯機——の中に、小さなコンピューターチップがある。人類が作った最も複雑な物の一つでありながら、爪より小さい。作ることは科学と忍耐の驚異だ。チップはシリコンという素材の薄い板の上に作られる。その表面に、目に見えないほど小さな何十億ものスイッチを印刷する。特別な光と、手で描けるどんなものより細かい模様を使う。層を重ね、想像を絶する小ささの写真のように設計を丁寧に刷る。必要な精度は驚異的で、最小部分はわずか数原子分の幅だ。ほこり一粒でも台無しになるため、工場「ファブ」は病院より清潔に保たれ、作業者は特殊な服を着て空気は何度もろ過される。あまりに難しいため最先端チップを作れる企業は世界に一握りで、工場一つの建設に数十億ドルと数年かかる。次に電話に触れるとき、この隠れた驚異を思い出してほしい。",
        quiz: [
          { q: "What material is a chip built on?", options: ["A thin slice of silicon", "A piece of wood", "A sheet of paper"], answer: 0 },
          { q: "Why are chip factories kept cleaner than a hospital?", options: ["Even a speck of dust can ruin a chip", "Because workers eat there", "Because dust makes chips faster"], answer: 0 },
          { q: "Why can only a few companies make the most advanced chips?", options: ["The process is extremely difficult and factories cost billions", "Because chips are easy to make", "Because no one wants to make them"], answer: 0 }
        ]
      },
      {
        id: "d0908-3",
        title: "Counting a Whole Country",
        level: "★★☆",
        genre: "世界情勢",
        text: "Every so often, a country tries to do something remarkable: count every single person who lives in it. This great effort is called a census. From huge nations to small islands, governments carry out a census to learn how many people they have, where they live, and how their lives are changing.\n\nWhy go to so much trouble? The answer is that good decisions need good information. A government that knows how many children live in an area can plan the right number of schools. Knowing where older people live helps plan hospitals and care. A census also shows how a population is growing or shrinking, which shapes plans for housing, roads, and jobs for years to come.\n\nCarrying out a census is a massive task. Workers may travel to remote villages, and forms are sent to millions of homes. Today, many countries also let people answer online, which is faster and cheaper. Still, reaching everyone — including those without a fixed home — is very hard.\n\nThere are challenges beyond size. People must trust that their private answers will be protected and used only to help, not to harm. Without that trust, some may refuse to take part.\n\nA census is one of the quiet foundations of a well-run country. By taking the time to count and understand its people, a nation can plan more wisely and serve everyone more fairly.",
        summaryJa: "時折、国は驚くべきことを試みる。住むすべての人を一人残らず数えるのだ。この大きな取り組みを「国勢調査(センサス)」という。大国から小さな島国まで、政府は何人いて、どこに住み、暮らしがどう変わっているかを知るために行う。なぜそこまでするのか。良い判断には良い情報が要るからだ。ある地域の子どもの数を知る政府は、適切な数の学校を計画できる。高齢者の居場所を知れば病院や介護を計画できる。人口の増減も示し、住宅や道路、雇用の計画を左右する。実施は膨大な作業で、遠い村へ赴き、何百万もの家に用紙を送る。今は多くの国がオンライン回答も認め、速く安い。それでも定住地のない人まで届くのは難しい。規模以外の課題もあり、私的な回答が守られ害でなく助けにのみ使われると人々が信頼せねばならない。国勢調査はよく運営される国の静かな土台だ。",
        quiz: [
          { q: "What is a census?", options: ["A great effort to count every person living in a country", "A national holiday", "A type of tax"], answer: 0 },
          { q: "Why does a government carry out a census?", options: ["Good decisions, like planning schools and hospitals, need good information", "To make people angry", "For no reason at all"], answer: 0 },
          { q: "What must people trust for a census to work well?", options: ["That their private answers will be protected and used only to help", "That the answers will be sold", "That no one will read them ever"], answer: 0 }
        ]
      },
      {
        id: "d0908-4",
        title: "The Quiet World of the Tea Ceremony",
        level: "★★☆",
        genre: "日本",
        text: "In a small, simple room, a host slowly prepares a bowl of green tea for a guest. Every movement is calm and careful. This is the Japanese tea ceremony, a tradition that is about far more than simply drinking tea.\n\nThe tea ceremony has been practiced in Japan for centuries. At first glance, it may seem like a very slow way to make a drink. But each step — folding a cloth, warming the bowl, whisking the tea — is done with deep attention. The goal is not speed, but a feeling of peace, respect, and full presence in the moment.\n\nThe setting is chosen with great care. The room is often plain and quiet, perhaps with a single flower or a hanging scroll. Guests are encouraged to leave their busy thoughts at the door and simply be there, sharing a calm experience with others. Host and guest treat each other with gentle politeness.\n\nAt its heart lie a few simple values: respect for others, purity, harmony, and a quiet appreciation of the present moment. These ideas reach far beyond the tea room and into everyday Japanese life.\n\nIn our fast, noisy world, the tea ceremony offers a rare gift: a chance to slow down completely. For a short time, making and sharing one bowl of tea becomes the most important thing in the world.",
        summaryJa: "小さく簡素な部屋で、亭主が客のために抹茶をゆっくり点てる。どの動きも静かで丁寧だ。これが日本の茶道で、単にお茶を飲む以上のものだ。茶道は何世紀も日本で行われてきた。一見、飲み物を作るのにとても遅い方法に見える。だが布をたたみ、茶碗を温め、茶を点てる各段階が深い注意とともに行われる。目的は速さでなく、平安と敬意、そして今この瞬間に完全に在る感覚だ。しつらえも入念に選ばれる。部屋はしばしば簡素で静かで、一輪の花や掛け軸があるくらいだ。客は忙しい思いを戸口に置き、ただそこに在り、穏やかな体験を共有するよう促される。亭主と客は互いに優しい礼儀で接する。核心には敬意、清らかさ、調和、今この瞬間への静かな感謝という簡素な価値がある。これらは茶室を越え日常の日本の暮らしに及ぶ。速く騒がしい世界で、茶道は完全に立ち止まる稀な贈り物を与えてくれる。",
        quiz: [
          { q: "What is the Japanese tea ceremony really about?", options: ["Far more than drinking tea — peace, respect, and presence in the moment", "Making tea as fast as possible", "Selling expensive tea"], answer: 0 },
          { q: "What is the setting for a tea ceremony usually like?", options: ["A plain and quiet room, perhaps with a single flower or scroll", "A loud, crowded hall", "A busy street"], answer: 0 },
          { q: "What gift does the tea ceremony offer in our fast world?", options: ["A chance to slow down completely", "A way to work faster", "A reason to hurry"], answer: 0 }
        ]
      },
      {
        id: "d0908-5",
        title: "Snake Blood That Fights Venom",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "A snake bite from a dangerous species can be deadly, and treating one is difficult. For over a hundred years, doctors have used medicines called antivenoms, but they are not perfect. They can be slow to make, hard to store, and they do not always work well against every kind of snake. Now, scientists have made a surprising discovery in an unexpected place: the blood of snakes themselves.\n\nSome snakes, such as rattlesnakes, carry special proteins in their blood. These proteins can block the harmful effects of venom. This makes sense when you think about it — a snake needs some protection against its own dangerous poison and that of others.\n\nRecently, researchers found that by combining several of these natural proteins, they could create a powerful mixture that neutralizes venom from many different snakes. In tests, this blend was far stronger than some current treatments, and it worked against several dangerous species at once.\n\nWhy does this matter? Snake bites harm and kill many people around the world every year, especially in poorer, rural areas. A treatment that is stronger, works against many snakes, and is easier to produce could save countless lives.\n\nThe research is still in an early stage, and more testing is needed before it can help patients. But it is a beautiful example of nature offering an answer. Sometimes the cure to a danger is hidden inside the danger itself.",
        summaryJa: "危険な種のヘビにかまれると命に関わることがあり、治療は難しい。100年以上、医師は「抗毒素(血清)」という薬を使ってきたが完璧ではない。作るのが遅く、保存が難しく、あらゆるヘビによく効くとは限らない。今、科学者は意外な場所で驚きの発見をした。ヘビ自身の血だ。ガラガラヘビなどのヘビは、血中に特別なタンパク質を持つ。これは毒の有害な作用を防げる。考えれば理にかなう。ヘビは自らや他のヘビの危険な毒からある程度身を守る必要があるのだ。最近、研究者はこれらの天然タンパク質をいくつか組み合わせると、多くの異なるヘビの毒を中和する強力な混合物を作れると発見した。試験では現行治療より格段に強く、複数の危険な種に同時に効いた。なぜ重要か。ヘビ咬傷は毎年世界で多くの人を害し、特に貧しい農村部で深刻だ。より強く多くのヘビに効き作りやすい治療は無数の命を救いうる。研究は初期段階だが、危険の中に治療が隠れているという自然の美しい例だ。",
        quiz: [
          { q: "What problem do current antivenoms have?", options: ["They can be slow to make, hard to store, and not always effective", "They are always perfect", "They cure every illness"], answer: 0 },
          { q: "What surprising thing did scientists find in some snakes' blood?", options: ["Special proteins that can block the harmful effects of venom", "Tiny computers", "A new kind of food"], answer: 0 },
          { q: "Why could this discovery matter so much?", options: ["Snake bites harm many people, so a stronger, easier treatment could save lives", "Because snakes are cute", "Because it makes venom stronger"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-09-07",
    passages: [
      {
        id: "d0907-1",
        title: "What Makes a Good Business Meeting?",
        level: "★★☆",
        genre: "ビジネス",
        text: "Meetings are a normal part of working life, yet many people quietly dread them. Too often, a meeting runs long, wanders off topic, and ends without any clear result. But a good meeting can be one of the most useful tools a team has. What separates a helpful meeting from a waste of time?\n\nThe first key is a clear purpose. Before a meeting begins, everyone should know why they are there and what needs to be decided. A short agenda, shared in advance, helps people prepare and keeps the discussion on track. If no one can explain the goal, perhaps the meeting is not needed at all.\n\nThe second key is respect for time. A good meeting starts and ends when it is supposed to. The leader gently steers the group back if the talk drifts, and makes sure quieter members also get a chance to speak. Good ideas can come from anyone.\n\nFinally, a strong meeting ends with clear next steps. Before people leave, they should know who will do what, and by when. Without this, even a lively discussion can lead to nothing.\n\nMeetings will always be part of business, but they do not have to be painful. With a clear purpose, careful timing, and firm follow-up, a meeting can turn a group of busy people into a team that truly moves forward together.",
        summaryJa: "会議は仕事につきものだが、多くの人が密かに嫌っている。長引き、脱線し、結論なく終わることが多いからだ。だが良い会議はチームにとって最も有用な道具の一つになりうる。有益な会議と時間の無駄を分けるものは何か。第一は明確な目的。始める前に、なぜ集まり何を決めるべきかを全員が知るべきだ。事前に共有する短い議題は準備を助け議論を軌道に保つ。目的を説明できないなら会議は不要かもしれない。第二は時間の尊重。良い会議は予定通り始まり終わる。進行役は脱線を戻し、静かな人にも発言の機会を与える。良い案は誰からでも出る。最後に、良い会議は明確な次の一歩で終わる。誰がいつまでに何をするかを決める。これがないと活発な議論も実を結ばない。目的・時間管理・確実なフォローで、会議は前に進むチームを作る。",
        quiz: [
          { q: "What is the first key to a good meeting?", options: ["A clear purpose that everyone knows in advance", "Making it as long as possible", "Having no agenda"], answer: 0 },
          { q: "How does a good leader respect time in a meeting?", options: ["By starting and ending on time and steering the talk back on topic", "By letting only one person speak", "By ignoring the schedule"], answer: 0 },
          { q: "How should a strong meeting end?", options: ["With clear next steps: who will do what, and by when", "With no decisions at all", "By starting a new topic"], answer: 0 }
        ]
      },
      {
        id: "d0907-2",
        title: "Computer Memory That Sips Energy",
        level: "★★★",
        genre: "テクノロジー",
        text: "Every phone, laptop, and data center relies on memory — the part of a computer that stores information. Each time memory saves or changes a piece of data, it uses a tiny bit of energy. On its own, that amount is very small. But with billions of devices working every second, all those tiny bits add up to a huge demand for power.\n\nThat is why scientists are excited about a new kind of memory that uses far less energy than today's technology. The idea involves storing information using magnetism, then switching it in a cleverer, gentler way. Instead of forcing a change with a strong push of electricity, the new method nudges the memory using much less power.\n\nWhy does this matter so much? Lower energy use brings several benefits at once. Devices could run longer on a single battery charge. Large data centers, which already use enormous amounts of electricity, could cut their power bills and their effect on the planet. And devices might produce less heat, making them easier to keep cool.\n\nThe technology is still in the laboratory, and turning a promising experiment into a product takes years of careful work. Not every bright idea reaches the market.\n\nEven so, this line of research points toward an important goal: computers that do more while using less. In a world full of hungry machines, memory that only sips energy could make a real difference.",
        summaryJa: "スマホもノートPCもデータセンターも「メモリ」——情報を蓄える部分——に頼る。メモリがデータを保存・変更するたびに、ごくわずかな電力を使う。単体では極小だが、何十億もの機器が毎秒動くと、その小さな量が膨大な電力需要になる。だから科学者は、今の技術よりはるかに少ない電力で動く新しいメモリに期待している。着想は磁気で情報を蓄え、より賢く穏やかに切り替えるものだ。強い電流で無理に変えるのでなく、はるかに少ない電力でそっと促す。なぜ重要か。低消費電力は複数の利点をもたらす。機器は一度の充電で長く動き、大量の電力を使うデータセンターは電気代と環境負荷を減らせる。発熱も減り冷却も楽になる。技術はまだ実験段階で製品化には長い作業が要り、全ての名案が市場に届くわけではない。それでも「少ない電力で多くをこなす」という重要な目標を指し示す。",
        quiz: [
          { q: "Why does memory's energy use add up to a huge demand?", options: ["Billions of devices each use tiny amounts of energy every second", "Memory uses no energy at all", "Only one computer exists"], answer: 0 },
          { q: "How does the new kind of memory save energy?", options: ["It switches magnetism in a gentler way, using much less power", "It uses a much stronger push of electricity", "It stops storing data"], answer: 0 },
          { q: "What is one benefit of lower energy use?", options: ["Devices could run longer on a battery and produce less heat", "Batteries would drain faster", "Devices would get much hotter"], answer: 0 }
        ]
      },
      {
        id: "d0907-3",
        title: "Learning Without Borders",
        level: "★★★",
        genre: "世界情勢",
        text: "Not long ago, a good education often depended on where you were born. If you lived far from a great school or university, many subjects were simply out of reach. Today, that is changing. Thanks to the internet, learning is crossing borders as never before, and millions of people are studying subjects they could never have reached in the past.\n\nOnline courses now let a student in a small town follow lessons taught by teachers on the other side of the world. Some are free; others cost far less than a traditional class. A person can learn a new language, a computer skill, or even university-level science, all from a simple phone or laptop.\n\nThe benefits are powerful. Online learning can reach people who work during the day, live in remote areas, or cannot afford to move to a big city. It gives second chances to those who missed school earlier in life. For many, it is a door to better jobs and a broader view of the world.\n\nThere are challenges, of course. A weak internet connection, the high cost of devices, or the need for strong self-discipline can hold learners back. Online study also cannot fully replace the warmth of a real classroom.\n\nStill, the direction is clear and hopeful. As knowledge travels more freely across the globe, the chance to learn is slowly becoming a right that belongs to everyone, not just a lucky few.",
        summaryJa: "少し前まで、良い教育はどこで生まれたかに左右されがちだった。優れた学校や大学から遠く住めば、多くの科目は手の届かないものだった。今は変わりつつある。インターネットのおかげで学びはかつてなく国境を越え、何百万もの人が昔なら届かなかった科目を学んでいる。オンライン講座により、小さな町の学生が地球の反対側の教師の授業を受けられる。無料のものも、従来よりずっと安いものもある。新しい言語やコンピュータ技術、大学レベルの科学まで、スマホやノートPCで学べる。利点は大きい。日中働く人や遠隔地の人、大都市に移れない人にも届き、かつて学べなかった人に再挑戦の機会を与え、より良い仕事や広い視野への扉になる。弱い通信環境や機器の高さ、強い自己規律の必要という課題もあり、実際の教室の温かさは完全には代われない。それでも知識が自由に世界を巡る中、学ぶ機会は一部の幸運な人だけでなく万人の権利になりつつある。",
        quiz: [
          { q: "In the past, what did a good education often depend on?", options: ["Where you were born", "The color of your clothes", "The day of the week"], answer: 0 },
          { q: "How does online learning help people?", options: ["It reaches those who work, live in remote areas, or cannot move to a city", "It only helps rich city students", "It stops people from learning"], answer: 0 },
          { q: "What is one challenge of online study mentioned?", options: ["A weak internet connection or the need for strong self-discipline", "It is always free and easy for everyone", "It fully replaces real classrooms"], answer: 0 }
        ]
      },
      {
        id: "d0907-4",
        title: "The Japanese Custom of Omiyage",
        level: "★★☆",
        genre: "日本",
        text: "When people in Japan take a trip, they often come home with more than photos and memories. They bring back \"omiyage\" — small gifts, usually local food or sweets, to share with family, friends, and coworkers. This custom is a warm and important part of daily life in Japan.\n\nOmiyage is different from a simple souvenir you buy for yourself. It is chosen with others in mind. A traveler visiting a famous region will look for a snack that the area is known for, often beautifully wrapped and packed in small pieces, perfect for sharing in an office or at home. Handing them out is a way of saying, \"I thought of you while I was away.\"\n\nAt many workplaces, bringing omiyage after a holiday is almost expected, but it is done with a happy spirit rather than as a heavy duty. Sharing a taste of a faraway place is a small, kind gesture that keeps relationships smooth and friendly.\n\nBecause of this custom, train stations and airports in Japan are full of shops selling local specialties in gift boxes. Choosing the right omiyage can be part of the fun of a trip.\n\nAt its heart, omiyage is about connection. It turns a personal journey into something shared, reminding others that they were not forgotten. In a single boxed sweet lies a simple message of thoughtfulness.",
        summaryJa: "日本では旅に出ると、写真や思い出以上のものを持ち帰ることが多い。「お土産」——たいてい地元の食べ物やお菓子——を、家族や友人、同僚と分かち合うために持ち帰るのだ。この習慣は日本の暮らしの温かく大切な一部だ。お土産は自分用に買う単なる記念品とは違い、他者を思って選ぶ。有名な地域を訪れた人は、その土地で知られたお菓子を探す。美しく包まれ小分けされ、職場や家庭で分けやすい。渡すことは「離れている間もあなたを思っていた」と伝える方法だ。多くの職場では休暇後にお土産を持参するのがほぼ習わしだが、重い義務でなく楽しい気持ちで行われる。遠い土地の味を分かち合う小さな親切が、関係を円滑で友好的に保つ。だから駅や空港は土産物店であふれる。選ぶこと自体も旅の楽しみだ。お土産の核心はつながりで、個人の旅を分かち合うものに変え、忘れていないと伝える。",
        quiz: [
          { q: "What is 'omiyage'?", options: ["Small gifts, often local food, brought home to share with others", "A type of camera", "A train ticket"], answer: 0 },
          { q: "How is omiyage different from a souvenir you buy for yourself?", options: ["It is chosen with others in mind, to share", "It is only for the traveler", "It is never food"], answer: 0 },
          { q: "At its heart, what is omiyage about?", options: ["Connection — turning a personal journey into something shared", "Spending as much money as possible", "Keeping everything for oneself"], answer: 0 }
        ]
      },
      {
        id: "d0907-5",
        title: "Why Leaves Change Color in Autumn",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "Each autumn, in many parts of the world, green leaves turn to brilliant shades of yellow, orange, and red before they fall. This yearly show is one of nature's most beautiful sights. But behind the colors lies some clever science.\n\nDuring spring and summer, leaves are green because of a substance called chlorophyll. This substance helps the tree make food from sunlight, and it fills the leaves with a strong green color. In fact, other colors are hidden in the leaf all along, but the green is so strong that we cannot see them.\n\nAs autumn arrives, the days grow shorter and the air turns cooler. The tree senses that winter is coming and begins to prepare. It slowly stops making chlorophyll, and the green fades away. Now the hidden yellows and oranges can finally be seen. In some trees, new red colors are also made in these final weeks.\n\nWhy does the tree do this? By dropping its leaves, a tree saves energy and water during the hard, cold winter, when sunlight is weak. The colorful change is really a sign of the tree getting ready to rest.\n\nSo the next time you enjoy the reds and golds of autumn, remember that you are watching a tree prepare for winter. The beauty we love is also a wise and ancient plan for survival.",
        summaryJa: "毎秋、世界の多くの地域で緑の葉が黄・橙・赤の鮮やかな色に変わり、やがて落ちる。この毎年の光景は自然で最も美しいものの一つだが、色の裏には巧みな科学がある。春夏、葉が緑なのは「クロロフィル」という物質のためだ。これは木が日光から食物を作るのを助け、葉を濃い緑で満たす。実は他の色も初めから葉に隠れているが、緑が強すぎて見えない。秋が来ると日が短く空気が冷え、木は冬の到来を察して準備を始める。ゆっくりクロロフィルを作るのをやめ、緑が薄れると、隠れていた黄や橙がついに見える。木によっては最後の数週で新たに赤も作られる。なぜか。葉を落とすことで、日光の弱い厳しい冬に木はエネルギーと水を節約する。色づきは木が休む準備の合図だ。秋の紅葉を楽しむとき、木が冬に備える姿を見ているのだと思い出してほしい。愛でる美しさは、古くから続く賢い生存の計画でもある。",
        quiz: [
          { q: "Why are leaves green in spring and summer?", options: ["Because of a substance called chlorophyll that helps make food from sunlight", "Because they are painted green", "Because of the cold weather"], answer: 0 },
          { q: "Why do the yellow and orange colors appear in autumn?", options: ["The tree stops making chlorophyll, so the green fades and hidden colors show", "Someone adds them", "The leaves get wet"], answer: 0 },
          { q: "Why does a tree drop its leaves?", options: ["To save energy and water during the hard, cold winter", "To make the ground colorful", "Because leaves are useless in summer"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-09-06",
    passages: [
      {
        id: "d0906-1",
        title: "Why the World Picks a 'Color of the Year'",
        level: "★★☆",
        genre: "ビジネス",
        text: "Every year, certain companies announce a \"color of the year.\" It might be a warm red, a calm blue, or even a soft white. This may sound like a small thing, but the choice can influence fashion, product design, and shopping around the world. Behind it lies a surprising amount of business thinking.\n\nWhy does a single color matter so much? Colors carry feelings. A bright shade can feel cheerful and bold, while a gentle tone can feel calm and clean. When experts choose a color of the year, they are trying to capture the mood of the moment — what people are feeling and wanting right now.\n\nFor businesses, this trend is useful. Clothing makers, furniture designers, and even phone companies watch these choices closely. If they use the popular color, their products may feel fresh and modern, and easier to sell. Stores can build displays and advertisements around the same shade.\n\nOf course, no one is forced to follow the trend. Many people simply buy the colors they personally like. The color of the year is a suggestion, not a rule, and next year it will change again.\n\nStill, it shows how deeply design shapes business. A single well-chosen color can send a message without words, connect a product to a feeling, and quietly guide what millions of people decide to buy.",
        summaryJa: "毎年、ある企業が「今年の色」を発表する。暖かい赤や落ち着いた青、柔らかい白のこともある。小さなことに聞こえるが、この選択は世界のファッションや製品デザイン、買い物に影響しうる。背景には意外なほどのビジネス的な考えがある。なぜ一つの色がそれほど重要なのか。色は感情を運ぶ。明るい色は陽気で大胆に、優しい色は穏やかで清潔に感じられる。専門家は「今年の色」で今の気分——人々が感じ求めているもの——を捉えようとする。企業には有用で、衣類や家具、電話の会社も注目する。流行色を使えば製品は新鮮で現代的に感じられ売りやすい。ただし従う義務はなく、あくまで提案で来年また変わる。色一つが言葉なくメッセージを伝え、購買を静かに導く。デザインがいかに深くビジネスを形づくるかを示している。",
        quiz: [
          { q: "Why can a single 'color of the year' matter so much?", options: ["Colors carry feelings and can capture the mood of the moment", "Colors have no effect on people", "Only painters care about color"], answer: 0 },
          { q: "How do businesses use the color of the year?", options: ["They design products and displays around the popular shade", "They ignore it completely", "They stop selling all products"], answer: 0 },
          { q: "What does the passage say the color of the year really is?", options: ["A strict rule everyone must follow", "A suggestion, not a rule, that changes each year", "A law made by governments"], answer: 1 }
        ]
      },
      {
        id: "d0906-2",
        title: "Using AI to Tame a Star",
        level: "★★★",
        genre: "テクノロジー",
        text: "Deep inside the sun, a powerful process called fusion joins tiny particles together and releases enormous energy. For decades, scientists have dreamed of copying this process on Earth to create clean, almost limitless power. But there is a huge challenge: to do fusion, you must control a gas hotter than the sun, and it is extremely difficult to keep steady.\n\nThis super-hot gas, called plasma, moves in wild and sudden ways. If it becomes unstable, it can damage the machine that holds it. Human operators simply cannot react fast enough to stop these sudden changes. This is where artificial intelligence is beginning to help.\n\nRecently, researchers tested an AI system that watches the plasma and predicts trouble before it happens. In one experiment, the AI sensed a dangerous instability a fraction of a second before it appeared — and adjusted the machine to prevent it. For a computer, that tiny moment is enough time to act.\n\nThis is exciting because controlling plasma is one of the biggest barriers to fusion power. If AI can keep the plasma calm and steady, experiments can run longer and more safely.\n\nFusion energy is still not ready for everyday use, and many problems remain. But by teaming up human scientists with fast, watchful AI, researchers are taking real steps toward a future power source as clean and mighty as a star.",
        summaryJa: "太陽の奥深くでは「核融合」という強力な過程が小さな粒子を結びつけ、莫大なエネルギーを放つ。科学者は数十年、これを地上で再現し、清潔でほぼ無限の電力を作ることを夢見てきた。だが難題がある。核融合には太陽より熱い気体を制御せねばならず、安定させるのが極めて難しい。この超高温の気体「プラズマ」は激しく突然に動き、不安定になると装置を傷つける。人の操作では反応が間に合わない。そこでAIが助け始めている。最近、研究者はプラズマを監視し問題を事前に予測するAIを試した。ある実験では危険な不安定を一瞬前に察知し、装置を調整して防いだ。プラズマ制御は核融合の最大の壁の一つで、AIが安定させれば実験を長く安全に行える。実用はまだ先だが、人とAIの協働で恒星のように清潔で強力な電源へ着実に進んでいる。",
        quiz: [
          { q: "What is the big challenge in creating fusion power on Earth?", options: ["Controlling a gas hotter than the sun and keeping it steady", "Finding enough sunlight", "Making the machine colder than ice"], answer: 0 },
          { q: "How is AI beginning to help with fusion?", options: ["It watches the plasma and predicts trouble before it happens", "It makes the plasma hotter on purpose", "It replaces all the scientists"], answer: 0 },
          { q: "What does the passage say about fusion energy's readiness?", options: ["It is ready for everyday use now", "It is still not ready, and many problems remain", "It will never be possible"], answer: 1 }
        ]
      },
      {
        id: "d0906-3",
        title: "Europe Builds Its Own Rockets",
        level: "★★★",
        genre: "世界情勢",
        text: "Sending a satellite into space is no longer just the work of a few large nations. Around the world, more countries and companies want the ability to launch rockets on their own. Recently, a European company sent a rocket into orbit from a launch site in northern Europe — a sign of the region's growing wish to reach space independently.\n\nWhy does this matter? Modern life depends on satellites. They power our maps, weather forecasts, television, and much of the internet. A country or region that cannot launch its own satellites must rely on others, and that can be costly or uncertain. Building your own rockets means more control over your own future.\n\nThere is also a business side. The market for launching small satellites is growing fast. Many companies now want cheap, frequent rides to space for their devices. A region with its own rockets can win this business and create skilled jobs at home.\n\nThe work is hard and expensive. Rockets are complex, and failures are common in the early years. Building launch sites, training engineers, and testing designs all take time and money.\n\nStill, the effort reflects a wider truth about our age. Space is becoming part of the everyday economy, not just a place for a few explorers. As more players learn to reach orbit, access to space is slowly becoming something the whole world can share.",
        summaryJa: "衛星を宇宙へ送ることは、もはや一部の大国だけの仕事ではない。世界中で、より多くの国や企業が自力でロケットを打ち上げる能力を求めている。最近、欧州の企業が北欧の発射場からロケットを軌道に送り、この地域の自立して宇宙に届きたいという思いの高まりを示した。なぜ重要か。現代生活は衛星に依存する。地図や天気予報、テレビ、インターネットの多くを支える。自前で打ち上げられない国や地域は他者に頼らねばならず、費用や不確実さが伴う。自前のロケットは自らの未来をより制御できることを意味する。ビジネス面もあり、小型衛星打ち上げ市場は急成長中で、安く頻繁な便を求める企業が多い。自前のロケットを持つ地域はこの商機をつかみ、熟練の雇用も生む。難しく高価で初期は失敗も多いが、宇宙が日常経済の一部になりつつある時代を映す。宇宙への到達は、少しずつ世界全体が分かち合えるものになっている。",
        quiz: [
          { q: "Why does the ability to launch rockets matter to a region?", options: ["Modern life depends on satellites, so launching your own means more control", "Rockets are only for fun", "Satellites are useless today"], answer: 0 },
          { q: "What is the business reason mentioned in the passage?", options: ["The market for launching small satellites is growing fast", "Nobody wants to launch satellites", "Space travel is now free"], answer: 0 },
          { q: "What does the passage say about building rockets?", options: ["It is easy and cheap", "It is hard and expensive, and early failures are common", "It takes no time at all"], answer: 1 }
        ]
      },
      {
        id: "d0906-4",
        title: "The Meaning of 'Itadakimasu'",
        level: "★☆☆",
        genre: "日本",
        text: "In Japan, people say a special word before they eat: \"itadakimasu.\" Young children learn it at home and at school, and adults say it too, often with their hands pressed together. It looks like a simple greeting, but it carries a deep and beautiful meaning.\n\nThe word is a way of giving thanks. It is not only thanks to the person who cooked the meal. It is also thanks to the farmers who grew the food, the people who brought it to the table, and even the plants and animals that became the meal. In a single word, a person shows respect for the whole journey that the food has made.\n\nAfter eating, there is another word: \"gochisousama.\" This means thank you for the meal, once again showing gratitude when the food is finished. Together, these two phrases wrap every meal in a feeling of appreciation.\n\nFor visitors to Japan, learning these words is an easy and lovely way to join in. Saying \"itadakimasu\" before a meal is polite, and it often makes people smile.\n\nMore than good manners, this custom teaches a gentle lesson. Food does not appear by magic; many hands and lives make it possible. By pausing for one short word, people remember to be thankful. It is a small habit with a warm and lasting spirit.",
        summaryJa: "日本では食事の前に「いただきます」という特別な言葉を言う。子どもは家庭や学校で学び、大人も手を合わせて言うことが多い。単なる挨拶に見えるが、深く美しい意味を持つ。この言葉は感謝の表し方だ。料理した人へだけでなく、食材を育てた農家、食卓へ運んだ人々、そして食事となった動植物への感謝でもある。一言で、食べ物がたどった道のり全体への敬意を示す。食後には「ごちそうさま」という言葉があり、食べ終えた後に再び感謝を表す。この二つの言葉が毎回の食事を感謝の気持ちで包む。訪日者にとっても覚えるのは簡単で素敵な参加の仕方だ。良い作法以上に、食べ物は魔法のように現れるのではなく多くの手と命が支えているという優しい教えがある。短い一言で立ち止まり、人は感謝を思い出す。温かく長く続く精神を持つ小さな習慣だ。",
        quiz: [
          { q: "When do people in Japan say 'itadakimasu'?", options: ["Before they eat a meal", "Only on New Year's Day", "When they go to sleep"], answer: 0 },
          { q: "What does 'itadakimasu' express thanks for?", options: ["Only the money spent", "The whole journey of the food, including farmers, cooks, and living things", "Nothing in particular"], answer: 1 },
          { q: "What is 'gochisousama'?", options: ["A word said after eating, to give thanks for the meal", "A kind of food", "A word said before sleeping"], answer: 0 }
        ]
      },
      {
        id: "d0906-5",
        title: "Why Do We Get Goosebumps?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "Have you ever felt small bumps rise on your skin when you are cold, or when you hear a beautiful piece of music? These little bumps are called goosebumps. They appear in a moment and then fade away. But why does the human body do this at all?\n\nGoosebumps come from tiny muscles at the base of each hair. When these muscles tighten, they pull the hairs upright and push the skin into small bumps. This happens automatically; you cannot decide to make goosebumps appear.\n\nThe reason goes far back into our history. Long ago, our distant ancestors had much more body hair. When they were cold, raising their hair trapped a layer of warm air, like a natural coat. When they faced danger, standing hair made them look bigger and more frightening to enemies. Many animals still use this trick today — think of a frightened cat with its fur standing on end.\n\nFor modern humans, goosebumps are mostly a leftover from that past. We no longer have thick fur, so they do little to keep us warm. Yet they still appear, triggered by cold, fear, or even strong emotion.\n\nGoosebumps are a small, harmless reminder that our bodies carry an ancient story. Every time your skin tingles at a great song, you are feeling a signal millions of years old.",
        summaryJa: "寒いときや美しい音楽を聞いたとき、肌に小さな粒が立つのを感じたことはないだろうか。これを鳥肌という。一瞬で現れ、やがて消える。なぜ体はこんなことをするのか。鳥肌は各毛の根元にある小さな筋肉から生じる。この筋肉が縮むと毛を立て、肌を小さな粒にする。自動的に起き、自分では作れない。理由は歴史の遠い昔にさかのぼる。祖先はもっと体毛が多く、寒いとき毛を立てて暖かい空気の層を作り、天然のコートのようにした。危険に直面すると、逆立つ毛は体を大きく恐ろしく見せた。多くの動物は今もこの技を使う——毛を逆立てた怯えた猫を思い浮かべてほしい。現代人には過去の名残で、厚い毛がないので保温の役はほとんどないが、寒さや恐れ、強い感情で今も現れる。鳥肌は体が古い物語を宿す小さな無害な合図だ。",
        quiz: [
          { q: "What causes goosebumps to appear?", options: ["Tiny muscles at the base of each hair tighten and pull the hairs upright", "Water on the skin", "A special food"], answer: 0 },
          { q: "Why did goosebumps help our distant ancestors?", options: ["Raised hair trapped warm air and made them look bigger to enemies", "They made people run faster", "They cooled the body down"], answer: 0 },
          { q: "What are goosebumps for modern humans?", options: ["A vital way to stay warm", "Mostly a leftover from our past, since we no longer have thick fur", "A recent invention"], answer: 1 }
        ]
      }
    ]
    },
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
    }
  ] };
