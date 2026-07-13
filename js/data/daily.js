/* デイリー配信リーディング
 * 毎朝の自動ルーチンがこのファイルを丸ごと上書き生成する（直近 7 日分を保持）。
 * days は日付降順。各 day = { date: "YYYY-MM-DD", passages: [readingPassages と同スキーマ + genre] }
 * このファイル以外は手書きデータであり、ルーチンは触らない。
 */
window.KE_DATA = window.KE_DATA || {};

KE_DATA.dailyReading = { days: [
  {
    date: "2026-07-14",
    passages: [
      {
        id: "d0714-1",
        title: "Why Regional Startup Hubs Are Rising",
        level: "★★☆",
        genre: "ビジネス",
        text: "For a long time, if you wanted to build a technology company in Japan, there was really only one place to be: Tokyo. That is starting to change. Reports on Japan's startup scene describe a market that is strong not only in the capital but also in rising regional hubs, with support from government, universities, and local governments.\nWhy are startups spreading out? Several forces push in the same direction. Remote work, now normal since the pandemic, means engineers no longer must live near the head office. Office and living costs are far lower outside Tokyo, so a young company's money lasts longer. Regional universities produce talented graduates who would prefer to stay near home if good jobs exist. And local governments, eager to keep young people, offer grants, cheap office space, and other support.\nThe pattern is not unique to Japan. Around the world, technology used to cluster in a few expensive cities, but the same forces are spreading it more widely. Second-tier cities are competing to become the next hub for a particular industry — batteries here, biotech there, space technology somewhere else.\nFor workers and founders, the lesson is encouraging. Opportunity is becoming less tied to a single address. A great idea, a skilled team, and a good internet connection can now build a serious company far from the traditional center — and that is good news for balanced national growth.",
        summaryJa: "かつて日本でテック企業を作るなら東京一択だったが、政府・大学・自治体の支援を背景に地方のスタートアップ拠点が台頭している。リモートワークの定着、東京より安い生活・オフィスコスト、地元に残りたい地方大学の人材、若者流出を防ぎたい自治体の補助——複数の力が同じ方向に働く。世界的にも技術が一部の高コスト都市から分散する流れで、機会が「住所」に縛られなくなりつつある。",
        quiz: [
          { q: "地方のスタートアップ拠点が台頭している理由に含まれないものは？", options: ["リモートワークの定着", "東京より安いコスト", "地方では税金がゼロになる法律"], answer: 2 },
          { q: "自治体がスタートアップを支援する動機は？", options: ["若者の流出を防ぎたいから", "観光客を増やすため", "工場を減らすため"], answer: 0 },
          { q: "本文の結論は？", options: ["機会が単一の住所に縛られなくなりつつある", "東京以外では起業できない", "地方拠点はすぐ消える"], answer: 0 }
        ]
      },
      {
        id: "d0714-2",
        title: "The Tiny Cracks That Break a Battery",
        level: "★★★",
        genre: "テクノロジー",
        text: "Solid-state batteries are one of the most anticipated technologies for electric cars. By replacing the flammable liquid inside today's batteries with a solid ceramic, they promise more range, faster charging, and greater safety. But one stubborn problem has slowed them down, and researchers have just uncovered how it works.\nThe villain is something called a dendrite. When a battery charges, lithium moves through it. Sometimes, instead of spreading evenly, the lithium forms tiny finger-like growths. In a solid-state battery, these soft lithium fingers can crack the hard ceramic inside, creating pathways that cause a short circuit — and a dead, or even dangerous, battery.\nWhat puzzled scientists was how something soft could break something hard. The new research explains the mechanism: the lithium pushes into tiny existing flaws in the ceramic and, like water freezing in a crack in a rock, applies enough pressure over time to split it open. Understanding this process is the key to preventing it.\nWhy does this matter beyond the laboratory? Because whoever solves the dendrite problem could unlock the next generation of electric vehicles. Car makers and battery companies around the world are racing toward solid-state technology, and each scientific insight brings mass production closer. This discovery does not finish the race, but it hands engineers a clearer map of the road ahead.",
        summaryJa: "全固体電池はEVの本命技術だが、「デンドライト」という問題が実用化を阻んできた。充電時にリチウムが指状に成長し、柔らかいはずのそれが硬いセラミックの微小な欠陥に入り込み、岩の割れ目で凍る水のように圧力をかけて割り、短絡を起こす——その仕組みを新研究が解明した。原因が分かれば対策が立てられる。デンドライト問題を解いた者が次世代EVの扉を開くとされ、量産化に一歩近づく成果。",
        quiz: [
          { q: "全固体電池の利点として挙げられていないものは？", options: ["航続距離が伸びる", "充電が速い", "重さがゼロになる"], answer: 2 },
          { q: "「デンドライト」とは？", options: ["充電時にリチウムが作る指状の成長物", "電池の外装", "冷却装置"], answer: 0 },
          { q: "柔らかいリチウムが硬いセラミックを割る仕組みは？", options: ["微小な欠陥に入り込み、時間をかけて圧力で割る", "熱で溶かす", "電気で燃やす"], answer: 0 }
        ]
      },
      {
        id: "d0714-3",
        title: "Dementia Risk Is Not the Same Everywhere",
        level: "★★★",
        genre: "世界情勢",
        text: "As populations age around the world, dementia has become one of the great health challenges of our time. Common advice tells us how to lower our risk: exercise, control blood pressure, stay socially active, keep learning. But a large new study of more than 214,000 people suggests that this advice may need to be adjusted for each country, because risk factors differ widely across the world.\nThe idea of a single, universal prevention plan is appealing but may be too simple. In one country, physical inactivity might be the biggest driver of dementia risk. In another, it could be untreated high blood pressure, air pollution, limited education, or hearing loss. The same behavior does not carry the same weight everywhere, because populations differ in genetics, diet, healthcare, and environment.\nWhy does this matter for policy? Because health resources are limited, and money spent on the wrong target does little good. A country that identifies its own leading risk factors can design campaigns that actually work — promoting hearing checks in one place, cleaner air in another, better blood pressure treatment somewhere else.\nThe broader lesson reaches beyond medicine. In a connected world, we often look for one answer that fits everyone. But the most effective solutions usually start with a local question: what is really driving the problem here? Global knowledge works best when it is applied with local understanding.",
        summaryJa: "高齢化で認知症は世界的な健康課題に。運動や血圧管理などの予防助言は有名だが、21万人超の大規模研究は、リスク要因が国ごとに大きく異なり、万国共通の予防策では不十分だと示す。ある国では運動不足、別の国では高血圧・大気汚染・教育機会・難聴が最大要因になりうる。限られた医療資源を本当に効く対象に向けるには、まず「ここで問題を動かしているのは何か」という地域の問いから始めることが重要。",
        quiz: [
          { q: "21万人超の研究が示したことは？", options: ["認知症のリスク要因は国ごとに大きく異なる", "認知症は予防できない", "運動だけで防げる"], answer: 0 },
          { q: "国ごとに主要リスクが違う理由として本文が挙げるのは？", options: ["遺伝・食事・医療・環境の違い", "国の面積の違い", "国旗の色の違い"], answer: 0 },
          { q: "本文の広い教訓は？", options: ["世界の知見は地域の理解と組み合わせてこそ効く", "一つの答えが万人に効く", "地域差は無視してよい"], answer: 0 }
        ]
      },
      {
        id: "d0714-4",
        title: "Japan Bets on Robots to Fill a Labor Gap",
        level: "★★☆",
        genre: "日本",
        text: "Japan faces a demographic challenge unlike almost any other country: its population is both aging and shrinking. Fewer young workers enter the labor force each year, while the number of people needing care keeps rising. In response, Japan is placing a big bet on one of its traditional strengths — robotics — and it is now one of the strongest fields in the country's startup scene.\nRobots are moving beyond the factory floor, where Japan has long been a leader, into everyday life. In restaurants, robots carry dishes between the kitchen and tables. In warehouses, they move goods so human workers walk less. In hospitals and care homes, robots help lift patients, deliver supplies, and even provide simple conversation for lonely residents. Each of these tasks helps a smaller workforce do more.\nThe technology is not a complete solution. Robots are expensive, they struggle with tasks that require a soft human touch, and many jobs still need people. Care work in particular depends on warmth and judgment that machines cannot replace. The realistic goal is partnership: let robots handle heavy, repetitive, or dangerous tasks so that human workers can focus on the parts only people can do.\nFor the rest of the world, Japan is a preview. Many countries will grow older in the coming decades, and they are watching closely to see how a society uses technology to stay productive and care for its people as the workforce shrinks.",
        summaryJa: "高齢化と人口減が同時に進む日本は、伝統的な強みであるロボティクスに賭けており、スタートアップの最有力分野の一つになっている。工場だけでなく、飲食店の配膳、倉庫の運搬、病院・介護施設での移乗支援や見守り会話へと用途が拡大。ただしコストや「人の手」が要る仕事の限界もあり、現実的な目標は「重労働や危険な作業はロボット、人にしかできない部分は人」という協働。世界の高齢化の先行事例として注目される。",
        quiz: [
          { q: "日本がロボティクスに賭ける背景は？", options: ["高齢化と人口減で労働力が不足するから", "ロボットが安いから", "工場が余っているから"], answer: 0 },
          { q: "ロボットの活躍の場として挙げられていないものは？", options: ["飲食店の配膳", "倉庫の運搬", "選挙の投票"], answer: 2 },
          { q: "本文が示す現実的な目標は？", options: ["重労働はロボット、人にしかできない部分は人という協働", "すべてを機械に置き換える", "ロボットの使用をやめる"], answer: 0 }
        ]
      },
      {
        id: "d0714-5",
        title: "Your Brain Decides Before You Know It",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "When do you actually make a decision? It feels obvious: you weigh your options, then choose. But a new study suggests that the brain begins forming decisions much earlier than scientists previously believed — often before we are consciously aware that we are deciding at all.\nResearchers have long known that measurable brain activity can appear before a person reports making a choice. The new work pushes that moment even earlier, showing that the groundwork for a decision is laid well in advance. In other words, by the time you 'decide' to reach for a cup of coffee, your brain may have been preparing the action for a surprisingly long time.\nThis raises deep and slightly uncomfortable questions. If our brains prepare decisions before we are aware of them, how much of our choice is truly 'free'? Philosophers have debated free will for centuries, and neuroscience now adds hard data to the conversation. Most scientists are careful, though: preparing an action is not the same as forcing it, and we can still cancel or change a movement at the last moment.\nThere are practical angles too. Understanding the timing of decisions could improve technologies that read brain signals, helping people with paralysis control devices with their thoughts. For everyone else, the research is a humbling reminder that the mind is stranger, and more automatic, than it feels from the inside.",
        summaryJa: "私たちが「決めた」と感じるより前に、脳は決定の準備を始めている——新研究はその瞬間をさらに早い段階に押し下げた。コーヒーに手を伸ばす前から脳は動作を準備しているという。これは自由意志を巡る古い議論に科学的データを加えるが、「準備」は「強制」ではなく、直前に取り消せる点に科学者は慎重。応用面では、脳信号を読む技術の向上を通じ、麻痺のある人が思考で機器を操作する助けになる可能性がある。心は内側から感じるより自動的で不思議だと気づかせる研究。",
        quiz: [
          { q: "新研究が示したことは？", options: ["脳は意識より前に決定の準備を始めている", "人は決定しない", "決定は一瞬で終わる"], answer: 0 },
          { q: "科学者が慎重に付け加えている点は？", options: ["「準備」は「強制」ではなく直前に取り消せる", "自由意志は完全に存在しない", "脳は決定に関与しない"], answer: 0 },
          { q: "この研究の応用として挙げられているのは？", options: ["麻痺のある人が思考で機器を操作する技術", "天気予報の改善", "自動車の燃費向上"], answer: 0 }
        ]
      }
    ]
  },
  {
    date: "2026-07-13",
    passages: [
      {
        id: "d0713-1",
        title: "A Record Stock Listing Far From Home",
        level: "★★★",
        genre: "ビジネス",
        text: "A South Korean memory chip maker has just completed the largest stock market listing by a foreign company in United States history. Instead of listing only at home, the company chose to sell its shares on a major American exchange, raising a huge amount of money from global investors.\nWhy would an Asian company list in New York rather than Seoul? The answer is about access to capital. American stock markets are the deepest in the world, meaning they hold the most money and the most investors. A company that lists there can raise larger sums, gain a global reputation, and use its shares more easily to buy other companies. For a chip maker that needs billions of dollars to build new factories, that access is powerful.\nThe timing is not an accident. Memory chips are in huge demand because of AI, and investors are eager to own a piece of the companies that make them. A strong market mood makes it the perfect moment to sell shares at a high price.\nThere are trade-offs. Listing abroad means following strict American rules, reporting in English, and answering to investors on the other side of the world. But for a global company in a global industry, the message is clear: capital has no nationality, and businesses increasingly go wherever the money and the opportunity are largest.",
        summaryJa: "韓国のメモリ半導体大手が、米市場史上最大の外国企業上場を果たした。米国株式市場は世界で最も資金と投資家が厚く、巨額調達・国際的信用・M&Aのしやすさという利点がある。AIによるメモリ需要と強気相場が絶好の売り時を生んだ。厳しい米国基準や英語での報告義務という代償はあるが、「資本に国籍はない」という時代を映す動き。",
        quiz: [
          { q: "この企業が米国市場を選んだ主な理由は？", options: ["世界で最も資金と投資家が厚く、巨額調達ができるから", "韓国で上場が禁止されたから", "米国の方が税金がゼロだから"], answer: 0 },
          { q: "上場のタイミングが良かった背景は？", options: ["AIによるメモリ需要と強気相場", "戦争の終結", "原油価格の暴落"], answer: 0 },
          { q: "海外上場の代償として挙げられているのは？", options: ["厳しい米国基準や英語での報告義務", "製品を無料配布すること", "本社の移転"], answer: 0 }
        ]
      },
      {
        id: "d0713-2",
        title: "When Tech Giants Go to Court",
        level: "★★☆",
        genre: "テクノロジー",
        text: "A major legal battle is beginning in the technology world. Apple has filed a lawsuit against OpenAI, accusing the AI company of stealing trade secrets. Whatever the outcome, the case shows how fierce competition in artificial intelligence has become.\nA trade secret is valuable business information that a company keeps private — a recipe, a design, a method, or in the tech world, the details of how a system is built. Unlike a patent, which is public but protected by law for a limited time, a trade secret has value precisely because rivals do not know it. Lawsuits over trade secrets often center on employees who move from one company to another, carrying knowledge in their heads.\nThese cases are hard to judge. Skilled workers naturally learn things at one job and use that experience at the next; that is normal and legal. The line is crossed only when someone takes specific confidential material, not just general skill. Proving which side of that line an action falls on can take years in court.\nFor the wider industry, the lawsuit is a signal. As AI becomes central to every big tech company's future, they will defend their advantages aggressively — in the market and in the courtroom. For workers, it is a reminder to understand what counts as confidential, because the boundary between 'experience' and 'secret' matters more than ever.",
        summaryJa: "アップルがOpenAIを営業秘密の窃取で提訴し、AI競争の激しさを象徴する法廷闘争が始まった。営業秘密は特許と異なり「公開されていないこと自体に価値」があり、係争の多くは転職者が持ち出す知識を巡る。一般的なスキルの活用は合法だが、特定の機密資料の持ち出しは違法——その線引きの立証には年月がかかる。「経験」と「秘密」の境界を理解する重要性が増している。",
        quiz: [
          { q: "営業秘密が特許と違う点は？", options: ["公開されていないこと自体に価値がある", "永久に保護される", "誰でも自由に使える"], answer: 0 },
          { q: "営業秘密の係争でよく争点になるのは？", options: ["転職者が持ち出す知識", "オフィスの家賃", "製品の色"], answer: 0 },
          { q: "合法と違法の線引きはどこにある？", options: ["一般的スキルの活用は合法、特定の機密資料の持ち出しは違法", "転職そのものが違法", "すべての知識の利用が違法"], answer: 0 }
        ]
      },
      {
        id: "d0713-3",
        title: "Dual-Use Technology: A Delicate Balance",
        level: "★★★",
        genre: "世界情勢",
        text: "Japan's government has announced plans to work more closely with industry and universities on 'dual-use' technology. The term refers to technology that can serve both civilian and military purposes — and it sits at the center of a difficult global debate.\nMany everyday technologies are dual-use. A drone can deliver medicine or carry a weapon. Advanced AI can plan delivery routes or military operations. The same rocket that launches a weather satellite could, in principle, carry something far more dangerous. Because the underlying science is the same, it is almost impossible to develop powerful technology that has no military application at all.\nFor decades, Japanese universities largely avoided research with military links, a stance rooted in the country's postwar history. But the security environment has changed, and governments now argue that a nation must develop critical technologies itself rather than depend on others. Supporters say cooperation strengthens both the economy and national security. Critics worry about the direction of academic freedom and the risk of an arms race.\nThe debate is not unique to Japan; every advanced country wrestles with it. The realistic questions are about rules and limits: which projects are acceptable, how open the research should be, and who decides. As technology grows more powerful, societies everywhere must find their own answers to where the line should be drawn.",
        summaryJa: "日本政府が産学と連携して「デュアルユース(軍民両用)」技術に取り組む方針を示した。ドローンやAI、ロケットなど強力な技術は民生・軍事の両方に使え、両者を完全に切り離すのは難しい。戦後、軍事関連研究を避けてきた日本の大学だが、安全保障環境の変化で「重要技術は自国で持つべき」との議論が強まる。経済と安全保障の強化を説く声と、学問の自由や軍拡を懸念する声があり、線引きのルールが問われている。",
        quiz: [
          { q: "「デュアルユース」技術とは？", options: ["民生と軍事の両方に使える技術", "二人で使う技術", "二か国で開発する技術"], answer: 0 },
          { q: "民生と軍事を切り離すのが難しい理由は？", options: ["土台となる科学が同じだから", "予算が足りないから", "法律がないから"], answer: 0 },
          { q: "この問題について本文が述べていることは？", options: ["どの先進国も直面し、線引きのルールが問われている", "日本だけの問題である", "すでに世界で解決済み"], answer: 0 }
        ]
      },
      {
        id: "d0713-4",
        title: "Japan Sticks the Landing: A Reusable Rocket",
        level: "★★☆",
        genre: "日本",
        text: "Japan has reached an important milestone in space technology: successfully launching a rocket and then landing it back safely for reuse. Watching a rocket rise into the sky and then return to land upright, balanced on its own engine, still looks like something from a science fiction film — but it is quickly becoming the standard for modern spaceflight.\nWhy does landing a rocket matter so much? Because of cost. For most of the space age, rockets were used once and thrown away, like taking a single flight and then scrapping the entire airplane. Reusable rockets can fly again and again, dramatically cutting the price of reaching orbit. American companies proved the concept and used it to dominate the global launch market.\nFor Japan, developing this ability is about staying competitive. The demand for launches — satellites for communication, navigation, weather, and Earth observation — keeps growing, but customers choose the cheapest reliable ride. A country without reusable rockets risks being left behind, forced to buy launches from others.\nThe achievement also fits a bigger national picture. Japan has named space a priority industry, its startups are active in satellites and small rockets, and operation of its flagship rocket is moving toward private hands. Landing a rocket is not just an engineering trick; it is a signal that Japan intends to compete seriously in the new economy of space.",
        summaryJa: "日本が再使用ロケットの打ち上げと着陸に成功し、宇宙技術で重要な節目を迎えた。使い捨てだったロケットを繰り返し使えれば打ち上げコストが激減する。米企業がこの方式で市場を席巻する中、再使用能力なしでは競争に取り残される恐れがある。宇宙を優先産業に位置づけ、スタートアップが活発で基幹ロケットの民間移管も進む日本にとって、本気で宇宙経済に参入する意思を示す成果。",
        quiz: [
          { q: "ロケットの着陸(再使用)がなぜ重要か？", options: ["繰り返し使えて打ち上げコストが激減するから", "見た目が格好いいから", "着陸すると燃料が増えるから"], answer: 0 },
          { q: "再使用ロケットがないと日本はどうなる恐れがある？", options: ["競争に取り残され、他国から打ち上げを買うことになる", "宇宙に行けなくなる", "衛星が不要になる"], answer: 0 },
          { q: "この成果が示す国家的方向性は？", options: ["宇宙経済に本気で参入する意思", "宇宙開発からの撤退", "軍事利用のみへの転換"], answer: 0 }
        ]
      },
      {
        id: "d0713-5",
        title: "How Your Brain Turns Moments into Memories",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "You probably think of memory as a kind of recording — moments captured and stored, ready to replay. The reality is far more active. Your brain constantly rebuilds and reorganizes memories, and new research has revealed a surprising player in that process: a protein called tau.\nTau has a bad reputation. In diseases like Alzheimer's, tangles of this protein build up in the brain and are linked to memory loss. Because of that, scientists have mostly studied tau as a villain. But the new research shows a different side: normal, healthy tau is actually essential for turning new experiences into lasting memories. It helps organize the brain's memory-storing cells so that a fresh experience can be locked into long-term storage.\nThis discovery matters for two reasons. First, it changes how we understand memory itself, showing that a protein famous for causing damage also does vital everyday work. Second, it complicates the search for treatments. If a drug simply removes all tau to prevent disease, it might also block the healthy process of forming new memories. Future medicines will need to be far more precise, targeting only the harmful form.\nThe broader lesson is a familiar one in biology: few things are purely good or purely bad. The same molecule can build memories and, when something goes wrong, destroy them. Understanding that balance is where the real science begins.",
        summaryJa: "記憶は「録画」ではなく、脳が絶えず再構築する能動的な営み。新研究で、アルツハイマー病では「悪役」とされるタンパク質タウが、健康な状態では新しい経験を長期記憶に定着させるのに不可欠だと判明した。タウを一律に除去する薬は記憶形成も妨げかねず、有害な型だけを狙う精密な治療が必要になる。「同じ分子が記憶を作りも壊しもする」——その均衡の理解こそ科学の出発点。",
        quiz: [
          { q: "タウについて新研究が示したことは？", options: ["健康なタウは新しい記憶の定着に不可欠", "タウは脳に存在しない", "タウは記憶と無関係"], answer: 0 },
          { q: "この発見が治療を難しくする理由は？", options: ["タウを一律に除くと記憶形成も妨げる恐れがあるから", "薬が高価だから", "タウが増え続けるから"], answer: 0 },
          { q: "本文の「広い教訓」は？", options: ["同じ分子が記憶を作りも壊しもする——均衡の理解が重要", "タンパク質はすべて有害", "記憶は変化しない"], answer: 0 }
        ]
      }
    ]
  },
  {
    date: "2026-07-12",
    passages: [
      {
        id: "d0712-1",
        title: "A Japanese Challenger in the Memory Chip Race",
        level: "★★★",
        genre: "ビジネス",
        text: "In the global memory chip market, one giant has led for decades: Samsung of South Korea. But reports say a Japanese challenger is betting on a new manufacturing approach to close the gap. Kioxia, Japan's largest memory maker, is developing wafer-bonding technology for its next generation of chips.\nThe idea behind wafer bonding is elegant. A memory chip has two main parts: the memory cells that store data, and the control circuits that manage them. Traditionally, both are built together on one silicon wafer, which forces engineers to make design compromises. With wafer bonding, the two parts are manufactured separately — each optimized on its own wafer — and then joined together with extreme precision. The result can be faster, denser memory.\nWhy does this matter beyond the laboratory? Memory chips are the quiet workhorses of the AI era. Every data center training or running AI models needs vast amounts of fast memory, and demand keeps climbing. The companies that deliver better memory first will win contracts worth billions.\nFor Japan, the story carries extra weight. The country once dominated the memory business, then lost most of it in the 1990s and 2000s. A technical comeback by a Japanese maker — in the middle of an AI boom — would be a milestone both for the company and for the nation's chip revival strategy.",
        summaryJa: "日本最大のメモリメーカー、キオクシアが「ウエハ接合(ウエハボンディング)」技術で王者サムスンに挑む。メモリセルと制御回路を別々のウエハで最適化して作り、高精度で貼り合わせる手法で、より高速・高密度なメモリを実現できる可能性がある。AI時代のデータセンターはメモリを大量に必要としており、勝者には巨額の契約が待つ。かつてメモリで世界を制した日本の復権をかけた挑戦でもある。",
        quiz: [
          { q: "ウエハ接合技術の特徴は？", options: ["メモリセルと制御回路を別々に作って貼り合わせる", "チップを水で冷やす", "ウエハを薄く削るだけ"], answer: 0 },
          { q: "メモリ需要が伸びている背景は？", options: ["AIのデータセンターが大量の高速メモリを必要とするから", "テレビの販売増", "紙の書類の増加"], answer: 0 },
          { q: "この挑戦が日本にとって特別な意味を持つ理由は？", options: ["かつて世界を制したメモリ産業の復権がかかるから", "初めての半導体製造だから", "政府が禁止していたから"], answer: 0 }
        ]
      },
      {
        id: "d0712-2",
        title: "Ceramics That Change How Heat Flows — on Command",
        level: "★★★",
        genre: "テクノロジー",
        text: "Imagine a material that normally spreads heat evenly, but when you apply electricity, suddenly conducts heat almost three times better in one chosen direction. Researchers have discovered exactly this behavior in certain ceramic materials, and engineers are already imagining what they could do with it.\nHeat has always been the stubborn partner of electronics. We can switch electric current on and off billions of times per second, but heat simply flows wherever temperature differences push it. Our tools for managing it — fans, fins, and heat pipes — are passive and fixed. A material whose heat conduction can be switched and steered electrically would change the game.\nThe potential applications are wide. Computer chips could actively push heat away from their hottest spots at critical moments. Electric vehicle batteries could distribute warmth evenly in winter and shed it quickly in summer. Buildings and spacecraft could switch their walls between insulating and conducting modes as conditions change.\nAs with most laboratory breakthroughs, patience is required. The effect must work reliably at everyday temperatures, survive years of switching, and be manufactured at reasonable cost. Many promising materials never clear those hurdles. But the direction of research is clear and exciting: after a century of controlling electricity, we are learning to control heat with the same precision.",
        summaryJa: "特定のセラミック材料に電気を加えると、熱伝導が特定方向に約3倍まで高まる現象が発見された。熱は電気と違いオン・オフや方向の制御が難しく、従来の冷却は受動的な手段に限られていた。実用化されれば、チップの局所冷却、EV電池の温度管理、建物や宇宙機の「切り替え可能な断熱壁」などに応用できる可能性がある。常温での信頼性や製造コストなど実用化のハードルはこれから。",
        quiz: [
          { q: "発見された現象は？", options: ["電気でセラミックの熱伝導が約3倍・方向付きで高まる", "セラミックが光る", "熱が完全に消える"], answer: 0 },
          { q: "従来の熱管理の限界は？", options: ["受動的で、熱の流れを自在に制御できない", "コストが安すぎる", "電気を使いすぎる"], answer: 0 },
          { q: "応用例として挙げられていないものは？", options: ["チップの冷却", "EV電池の温度管理", "食品の味付け"], answer: 2 }
        ]
      },
      {
        id: "d0712-3",
        title: "Tiny Invaders: How Species Cross the World",
        level: "★★☆",
        genre: "世界情勢",
        text: "Europe has two new residents, and scientists are not happy about it. Two species of Asian praying mantis, which have spread rapidly across the continent in recent years, have now been officially classified as invasive. The decision sounds small, but it reflects one of globalization's least discussed problems.\nInvasive species are animals and plants that arrive in a new region — usually with human help — and spread at the cost of native wildlife. The newcomers often have no natural enemies in their new home, so their populations explode. The mantises, for example, are large, hungry predators that compete with native insects and may reduce local biodiversity.\nHow do such species travel? Mostly through trade and transport. Eggs hide in shipped plants and garden products, insects ride in containers, and some species are sold as exotic pets and later escape or are released. As global trade grows and the climate warms, more species can survive in places that were once too cold for them.\nThe costs are surprisingly large. Invasive species damage agriculture, forestry, and fisheries, and controlling them costs the world economy tens of billions of dollars every year. The lesson for a globalized world is simple: goods, people, and unfortunately ecosystems now travel together, and prevention is far cheaper than cleanup.",
        summaryJa: "欧州で急拡大したアジア原産のカマキリ2種が正式に侵略的外来種に指定された。外来種は貿易や輸送に紛れて移動し、天敵のいない新天地で爆発的に増え、在来の生態系を脅かす。地球温暖化と貿易拡大がこの流れを加速。農林水産業への被害と対策費は世界で年間数百億ドル規模にのぼり、「予防は駆除よりはるかに安い」というのがグローバル時代の教訓。",
        quiz: [
          { q: "欧州で外来種指定されたのは？", options: ["アジア原産のカマキリ2種", "アフリカのゾウ", "南米のチョウ"], answer: 0 },
          { q: "外来種が新天地で急増しやすい理由は？", options: ["天敵がいないことが多いから", "餌が不要だから", "寿命が無限だから"], answer: 0 },
          { q: "本文の教訓は？", options: ["予防は駆除よりはるかに安い", "外来種は経済に無害", "貿易をやめるべき"], answer: 0 }
        ]
      },
      {
        id: "d0712-4",
        title: "Japan's Rockets Go Commercial",
        level: "★★☆",
        genre: "日本",
        text: "Japan's space program is preparing for an important handover. Reports say the operation of the country's next-generation flagship rocket will be transferred to Mitsubishi Heavy Industries, moving day-to-day launch business from the national space agency to a private company.\nThis follows a global pattern. In the United States, NASA stopped operating routine launches years ago and now buys rides from private companies, whose competition has driven costs down dramatically. Europe and other space powers are moving the same way. The logic: government agencies should focus on exploration and research, while companies handle the repeatable business of putting satellites into orbit.\nFor Japan, the stakes are high. The global launch market is growing fast — satellites for communication, navigation, and Earth observation all need rides to space — but competition is brutal, led by American companies with reusable rockets. To win commercial customers, Japan's rockets must launch on schedule, at competitive prices, and with the reliability the country's manufacturing is famous for.\nPrivate operation should help. A company can negotiate contracts, adjust prices, and streamline operations faster than a government agency. Combined with Japan's growing space startup scene — from small rockets to satellite services — the handover signals a clear national direction: space is no longer just a science project. It is an industry, and Japan intends to compete in it.",
        summaryJa: "日本の次世代基幹ロケットの運用が三菱重工業へ移管される見通しに。米国でNASAが打ち上げを民間に委ね、コスト競争が進んだのと同じ流れで、国の機関は探査・研究に集中し、定常的な打ち上げビジネスは民間が担う分業になる。急成長する世界の打ち上げ市場で、価格・スケジュール・信頼性の競争力が問われる。宇宙を「産業」として育てる日本の方向性を示す動き。",
        quiz: [
          { q: "報じられた移管の内容は？", options: ["次世代ロケットの運用を三菱重工に移す", "宇宙開発を中止する", "ロケットを外国に売却する"], answer: 0 },
          { q: "世界的な流れとして正しいのは？", options: ["政府は研究に集中し、民間が定常打ち上げを担う", "すべて政府が独占する", "宇宙開発は縮小している"], answer: 0 },
          { q: "商業打ち上げで競争力の鍵となるのは？", options: ["価格・スケジュール・信頼性", "ロケットの色", "発射場の観光施設"], answer: 0 }
        ]
      },
      {
        id: "d0712-5",
        title: "A New Flatland: Two-Dimensional Quantum Materials",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "Some of the most exciting places in physics are almost unimaginably thin. Researchers have announced the creation of a long-sought two-dimensional quantum material — a sheet just atoms thick — and confirmed that it carries electric current along its edges in a special, protected way.\nWhy do scientists care so much about flat materials? Because when a material becomes truly two-dimensional, electrons inside it start behaving by different rules. Since the discovery of graphene, a single layer of carbon atoms, researchers have been building a whole family of atom-thin materials, each with strange and useful properties.\nThe new material belongs to a class where the interesting action happens at the edges. While the interior blocks electric current, the edges conduct it in channels that are protected by the material's fundamental structure. Electrons in these edge channels resist scattering — they flow with very little loss, almost like cars on a highway with no exits and no oncoming traffic.\nThe long-term hopes are big: electronics that waste far less energy, and possibly components for quantum computers that are naturally protected from certain errors. Those applications are years away, and many challenges remain. But every time physicists confirm a new quantum material, the toolbox for future technology grows — and this week, it grew by one.",
        summaryJa: "原子数個分の厚さしかない2次元量子材料の作製に成功し、「端(エッジ)だけが電気を通す」特殊な伝導状態が確認された。内部は絶縁体なのに端では電子が散乱されにくい保護されたチャネルを流れるため、エネルギー損失の少ないエレクトロニクスや、エラーに強い量子コンピュータ部品への応用が期待される。実用化は先だが、未来技術の「道具箱」がまた一つ増えた。",
        quiz: [
          { q: "確認された特殊な性質は？", options: ["材料の端だけが保護された形で電気を通す", "材料が空中に浮く", "材料が音を出す"], answer: 0 },
          { q: "2次元材料の研究が盛んになったきっかけは？", options: ["グラフェン(炭素1原子層)の発見", "月面着陸", "インターネットの普及"], answer: 0 },
          { q: "期待される応用は？", options: ["低損失エレクトロニクスや量子コンピュータ部品", "新しい調味料", "高速道路の舗装"], answer: 0 }
        ]
      }
    ]
  },
  {
    date: "2026-07-11",
    passages: [
      {
        id: "d0711-1",
        title: "When Your Biggest Customer Becomes Your Biggest Risk",
        level: "★★☆",
        genre: "ビジネス",
        text: "Factories across the Asia-Pacific region are quietly changing their plans. Reports say manufacturers in Japan, South Korea, Taiwan, and Australia are turning more attention to local and regional customers, because orders from the United States have become harder to predict.\nFor decades, the strategy was simple: make good products and sell them to the world's biggest consumer market. But trade rules now change quickly, tariffs appear and disappear with politics, and long supply chains can be disrupted overnight. A factory that depends on one distant market can see its plans destroyed by a single policy announcement.\nThe response is diversification. Companies are building customer bases closer to home, selling more within Asia, and opening production sites in the regions where their buyers actually are. This costs money in the short term — new factories and new sales networks are expensive — but it buys something valuable: stability.\nThe lesson applies far beyond manufacturing. Any business that earns most of its money from one client faces the same danger. Consultants often call this customer concentration risk. A useful exercise for any company, large or small, is to ask a simple question: if our biggest customer disappeared tomorrow, would we survive? If the honest answer is no, diversification is not a luxury — it is homework.",
        summaryJa: "日韓台豪のメーカーが、予測しにくくなった米国からの受注に頼らず、地域内の顧客開拓や現地生産へ軸足を移しつつある。貿易ルールや関税が政治で急変する時代、一つの遠い市場への依存は大きなリスク。短期的にはコストがかかっても多角化は安定を買う投資であり、「最大顧客が明日消えたら生き残れるか」という顧客集中リスクの問いはどんな企業にも当てはまる。",
        quiz: [
          { q: "アジア太平洋のメーカーが起こしている変化は？", options: ["地域内の顧客や現地生産へ軸足を移している", "全工場を米国へ移転している", "生産を全面停止している"], answer: 0 },
          { q: "背景にある問題は？", options: ["米国からの受注が予測しにくくなった", "労働者が急増した", "原材料が無料になった"], answer: 0 },
          { q: "「顧客集中リスク」への問いとして本文が挙げるのは？", options: ["最大顧客が明日消えたら生き残れるか", "社員旅行の行き先はどこか", "オフィスの広さは十分か"], answer: 0 }
        ]
      },
      {
        id: "d0711-2",
        title: "A Clever Upgrade Makes Old MRI Machines Better",
        level: "★★☆",
        genre: "テクノロジー",
        text: "Hospitals face a constant dilemma: medical technology improves every year, but the machines are enormously expensive. An MRI scanner can cost millions of dollars, so most hospitals must use the same machine for a decade or more. That is why a new piece of research is attracting attention — it improves MRI images without replacing the scanner at all.\nResearchers redesigned a key piece of MRI hardware using metamaterials. These are engineered structures whose behavior comes from their carefully designed shape and pattern, not just from the substance they are made of. Placed in the imaging system, the new component helps existing scanners produce clearer pictures of body parts that are usually difficult to see — and in less time.\nThe benefits multiply quickly. Clearer images mean doctors can spot problems earlier and with more confidence. Shorter scan times mean less discomfort for patients, especially children and people who feel anxious in the narrow tunnel. And because each scan takes less time, hospitals can examine more patients with the same machine.\nThe wider lesson is about innovation itself. We often imagine progress as replacing old machines with new ones. But some of the most valuable engineering makes existing equipment better — a cheaper, faster, and greener path that matters everywhere, from hospitals to factories.",
        summaryJa: "MRIの主要部品をメタマテリアル(形状と構造で性質を設計した人工材料)で再設計し、既存のスキャナのまま「見えにくい部位をより鮮明に・より短時間で」撮影できるようにする研究が注目されている。画像の鮮明化は早期発見に、時間短縮は患者負担の軽減と検査数の増加につながる。買い替えではなく既存設備を賢く改良するイノベーションの好例。",
        quiz: [
          { q: "この研究の特徴は？", options: ["既存のMRIを買い替えずに画質と速度を改善する", "MRIを廃止する", "新しい巨大スキャナを開発した"], answer: 0 },
          { q: "メタマテリアルとは？", options: ["形状や構造の設計で性質を生み出す人工材料", "宇宙から採れる鉱物", "新種の医薬品"], answer: 0 },
          { q: "スキャン時間短縮の利点として挙げられていないものは？", options: ["患者の負担軽減", "より多くの患者を検査できる", "電気代が無料になる"], answer: 2 }
        ]
      },
      {
        id: "d0711-3",
        title: "The Global Race for Critical Minerals",
        level: "★★★",
        genre: "世界情勢",
        text: "Behind every electric car, wind turbine, and smartphone lies a handful of materials most people never think about: lithium, cobalt, nickel, and the group known as rare earth elements. As the world electrifies, these critical minerals have become a matter of national strategy — and international tension.\nThe problem is concentration. Mining and, even more importantly, processing of many critical minerals are dominated by a small number of countries. When one nation controls most of the world's supply of a material that everyone needs, it gains enormous leverage. Export restrictions on such materials can shake industries on the other side of the planet within weeks.\nGovernments are responding on several fronts. Some are investing in domestic mines and processing plants, accepting higher costs for greater security. Others are signing partnership agreements with resource-rich countries in Africa, South America, and Southeast Asia. Companies, meanwhile, are redesigning products to use less of the riskiest materials, and building recycling systems to recover metals from old batteries and electronics.\nNo single solution will be enough. New mines take a decade to develop, recycling covers only part of demand, and substitutes do not exist for every material. The realistic goal is not independence but resilience: enough diversity of supply that no single actor can turn off the lights. Expect critical minerals to stay in the headlines for years.",
        summaryJa: "EV・風力・スマホに不可欠なリチウムやレアアース等の重要鉱物は、採掘・精錬が少数の国に集中しており、輸出規制が世界の産業を揺らす戦略物資になっている。各国は国内生産への投資、資源国との連携協定、省資源設計やリサイクルで対応を急ぐが、鉱山開発には10年単位の時間が必要。目標は完全自給ではなく、供給源の多様化による「強靱性」の確保にある。",
        quiz: [
          { q: "重要鉱物問題の核心は？", options: ["採掘・精錬が少数の国に集中していること", "地球上から鉱物が消えたこと", "価格が下がりすぎたこと"], answer: 0 },
          { q: "各国・企業の対応として挙げられていないものは？", options: ["国内での生産投資", "資源国との連携", "スマホの製造禁止"], answer: 2 },
          { q: "本文が示す現実的な目標は？", options: ["完全な自給自足", "供給の多様化による強靱性", "鉱物の使用をやめること"], answer: 1 }
        ]
      },
      {
        id: "d0711-4",
        title: "Bonus Season: A Test for Japan's New Economy",
        level: "★★☆",
        genre: "日本",
        text: "July in Japan means summer heat, festivals — and bonus season. Twice a year, most Japanese companies pay their employees a special bonus on top of the monthly salary, and the summer payment lands in bank accounts around this time. Economists watch these numbers closely, because they reveal much about the country's economic health.\nFor decades, Japan struggled with deflation: prices barely moved, and neither did wages. That era appears to be ending. Prices of food, energy, and services have risen noticeably in recent years, and the big question is whether pay can keep up. Bonuses are often the fastest-moving part of Japanese pay, because companies adjust them each year based on profits. When business is good, bonuses rise quickly.\nThe stakes are high for the whole economy. If bonuses and wages grow faster than prices, households feel richer, spend more, and support a healthy cycle of growth. If prices win the race, families quietly cut back — fewer restaurant visits, cheaper brands, postponed purchases — and the recovery stalls.\nThere is also a widening gap to watch. Large companies with strong profits can afford generous bonuses, while many small firms, squeezed by rising costs, cannot. For workers, the season is a reminder that in the new Japanese economy, where you work matters more than ever.",
        summaryJa: "7月は日本のボーナス支給シーズン。デフレ時代の終わりが見える中、賃金と物価の競争を映す指標としてエコノミストが注目する。ボーナスは企業業績を反映して最も動きやすい報酬であり、物価上昇を上回れば消費と成長の好循環に、下回れば家計の節約と景気停滞につながる。好業績の大企業と、コスト増に苦しむ中小企業の格差拡大も焦点。",
        quiz: [
          { q: "エコノミストが夏のボーナスに注目する理由は？", options: ["賃金が物価上昇に追いつくかを映す指標だから", "銀行が休みになるから", "税金が免除されるから"], answer: 0 },
          { q: "ボーナスが「動きやすい」報酬である理由は？", options: ["企業が毎年業績に応じて調整するから", "法律で毎年倍増するから", "現金で支払われるから"], answer: 0 },
          { q: "本文が指摘する「広がる格差」は？", options: ["大企業と中小企業のボーナス格差", "東京と大阪の家賃格差", "夏と冬の気温差"], answer: 0 }
        ]
      },
      {
        id: "d0711-5",
        title: "A Surprising Ally Against Cancer: Bacteria",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "Sometimes the most powerful medical ideas come from unexpected places. Researchers studying bacteria that live in the intestines of amphibians made a remarkable discovery: one naturally occurring bacterium, given as a single treatment, completely eliminated colorectal tumors in laboratory mice.\nWhat makes the result especially interesting is how the bacterium works. It attacks tumors in two ways at once. First, it targets the cancer cells directly. Second — and perhaps more importantly — it wakes up the body's own immune system, teaching it to recognize and destroy the tumor. This double action is exactly what cancer researchers dream about, because tumors are experts at hiding from immune defenses.\nThe idea of using bacteria against cancer is actually more than a century old. Doctors long ago noticed that some patients' tumors shrank after serious bacterial infections. But the approach was too dangerous and unpredictable to control — until modern tools made it possible to study and engineer microbes precisely.\nA strong dose of caution is required. Results in mice often fail to repeat in humans, and years of safety testing lie ahead before any patient benefits. Still, the discovery points to a promising frontier: the trillions of microbes living in and around us may hold treatments we have barely begun to explore. The next great cancer drug might not be invented — it might be found.",
        summaryJa: "両生類の腸内に住む天然の細菌が、1回の投与でマウスの大腸腫瘍を完全に消失させたという研究成果。がん細胞を直接攻撃すると同時に免疫系を活性化させる「二重の作用」が特徴。細菌でがんと闘う発想は100年以上前からあるが、現代の技術でようやく精密な制御が可能に。マウスの結果が人間で再現されるとは限らず安全性試験はこれからだが、体内の微生物が未開拓の治療法の宝庫である可能性を示す。",
        quiz: [
          { q: "研究で発見されたのは？", options: ["両生類由来の細菌がマウスの大腸腫瘍を消失させたこと", "新しい手術ロボット", "がんを予防する食事法"], answer: 0 },
          { q: "この細菌の「二重の作用」とは？", options: ["がん細胞への直接攻撃と免疫系の活性化", "痛み止めと栄養補給", "殺菌と保湿"], answer: 0 },
          { q: "本文が促す注意点は？", options: ["マウスの結果が人間で再現されるとは限らない", "すでに薬局で買える", "細菌はすべて危険である"], answer: 0 }
        ]
      }
    ]
  },
  {
    date: "2026-07-10",
    passages: [
      {
        id: "d0710-1",
        title: "How Investors Made Billions on Memory Chips",
        level: "★★★",
        genre: "ビジネス",
        text: "One of the most talked-about business stories in Asia this year is a quiet exit. A major American investment fund has finished selling its stake in a large Japanese memory chip maker, closing a deal that began years ago and ended with very large returns.\nThe story is a classic example of how private equity works. A private equity fund buys a company — or a large part of it — that it believes is undervalued. It then works to improve the business over several years: cutting costs, changing management, investing in new products. Finally, it sells its stake, hoping the company is now worth far more than the purchase price.\nIn this case, timing did much of the work. The fund bought into the memory chip business when prices were low and the industry looked risky. Then the AI boom arrived. Data centers need enormous amounts of memory, and demand for advanced chips exploded. The value of chip companies rose around the world, and what once looked like a risky bet became one of the decade's great investments.\nThe lesson for business readers is not simply that chips are hot. It is that patient capital, bought at the right moment in an unpopular industry, can beat the most exciting trends — because the price you pay matters as much as the story you believe.",
        summaryJa: "米大手投資ファンドが日本の大手メモリ半導体メーカーの持ち分売却を完了し、巨額のリターンを得た。安く買い、数年かけて事業を改善し、高く売るというPE(プライベートエクイティ)の典型例で、AIブームによるメモリ需要の爆発が追い風になった。教訓は「買値は信じるストーリーと同じくらい重要」ということ。",
        quiz: [
          { q: "プライベートエクイティの基本的な手法は？", options: ["割安な企業を買い、改善して、高く売る", "毎日株を売買する", "銀行に預金する"], answer: 0 },
          { q: "この投資が大きな利益になった追い風は？", options: ["AIブームによるメモリ需要の急増", "円高", "チップ価格の下落"], answer: 0 },
          { q: "本文の教訓は？", options: ["買値はストーリーと同じくらい重要", "人気産業だけに投資すべき", "投資は運だけで決まる"], answer: 0 }
        ]
      },
      {
        id: "d0710-2",
        title: "Foldable Phones Try to Go Mainstream",
        level: "★★☆",
        genre: "テクノロジー",
        text: "Phones that fold in half have existed for several years, but until recently they were a niche product: expensive, heavy, and a little fragile. That may be changing. Industry reports say production targets for foldable phones are reaching around ten million units, a scale that suggests makers now see them as a mainstream product, not an experiment.\nWhy the new confidence? Three things have improved. First, the folding screens themselves are stronger, and the crease in the middle is much less visible than before. Second, the phones have become thinner and lighter, so a folded device no longer feels like two phones glued together. Third, prices are slowly coming down as factories produce more units and competition increases.\nThe business logic is simple: the regular smartphone market is saturated. Almost everyone who wants a phone already has one, and new models look much like old ones. Foldables give makers something genuinely different to sell, with higher prices and higher profits — if customers accept them.\nChallenges remain. Repair costs are high, some apps still do not use the larger screen well, and many buyers simply do not see why they need a folding device. The next year or two will show whether foldables become the new normal or stay a stylish minority choice.",
        summaryJa: "折りたたみスマホの生産目標が約1,000万台規模に達し、実験的製品から主流製品への転換点を迎えつつある。画面の耐久性向上・薄型軽量化・価格低下が背景。スマホ市場の飽和で差別化商品が必要というメーカー側の事情もある。修理費の高さやアプリ対応、そもそもの必要性への疑問など課題は残り、今後1〜2年が正念場。",
        quiz: [
          { q: "折りたたみスマホの生産目標の規模は？", options: ["約1,000万台", "約100台", "約10億台"], answer: 0 },
          { q: "改善点として挙げられていないものは？", options: ["画面の強度", "薄型軽量化", "バッテリーの完全ワイヤレス化"], answer: 2 },
          { q: "メーカーが折りたたみに力を入れる理由は？", options: ["通常のスマホ市場が飽和し差別化が必要だから", "法律で義務化されたから", "製造が簡単だから"], answer: 0 }
        ]
      },
      {
        id: "d0710-3",
        title: "Japan and India Move Closer",
        level: "★★☆",
        genre: "世界情勢",
        text: "Two of Asia's largest democracies are building a deeper partnership. Recent summit talks between Japan and India covered an ambitious agenda, and analysts note that both sides now want practical cooperation, not just friendly declarations.\nThe logic of the partnership is easy to see. Japan has advanced technology, capital, and decades of manufacturing know-how, but its population is shrinking. India has a huge and young workforce, a fast-growing economy, and enormous demand for infrastructure, but it needs investment and technology. Each country has what the other lacks.\nEconomic security is a central theme. Both countries want supply chains that do not depend too heavily on any single nation, especially for critical goods like semiconductors, batteries, and rare materials. Japanese companies are expanding factories in India, and the two governments are discussing cooperation in defense technology, digital payments, and even the movement of skilled workers — Indian engineers for Japanese companies, for example.\nThere are obstacles, of course. Business cultures differ, infrastructure gaps remain, and big projects move slowly. But the direction is clear: in an uncertain world, Tokyo and New Delhi see each other as long-term partners. For businesspeople, the message is practical — the Japan-India corridor is becoming one of the most important economic relationships to watch in Asia.",
        summaryJa: "日印首脳会談は宣言にとどまらない実務協力へ踏み出した。少子化の日本は技術と資本を、若い労働力と成長市場を持つインドは投資と技術を必要とし、相互補完の関係にある。半導体・電池・重要物資のサプライチェーン多元化という経済安全保障が中心テーマで、防衛技術・デジタル決済・高度人材の移動でも協力を協議。日印回廊はアジアで最も注目すべき経済関係の一つになりつつある。",
        quiz: [
          { q: "日印協力の背景にある相互補完とは？", options: ["日本の技術・資本とインドの若い労働力・成長市場", "両国とも人口が増えている", "同じ言語を話す"], answer: 0 },
          { q: "経済安全保障の中心テーマは？", options: ["特定国に依存しないサプライチェーンづくり", "観光客の誘致", "映画の共同製作"], answer: 0 },
          { q: "本文が挙げる協力分野に含まれないものは？", options: ["防衛技術", "デジタル決済", "宇宙人の研究"], answer: 2 }
        ]
      },
      {
        id: "d0710-4",
        title: "A Chip Boomtown Grows in Kyushu",
        level: "★★☆",
        genre: "日本",
        text: "A few years ago, few people outside Japan had heard of the farming towns of Kumamoto prefecture. Today the region is one of the most watched places in the global semiconductor industry. Since the world's largest contract chipmaker opened factories there, a whole ecosystem has grown around them — and it keeps expanding.\nRecent reports say local suppliers are adding significant new capacity, with one manufacturer expanding its local production by about forty percent to serve the growing hub. Chemical makers, equipment companies, and logistics firms are all building facilities nearby. The goal is a complete supply chain in one region, so that materials and parts do not have to travel far.\nThe effects reach far beyond the factories. Land prices around the plants have jumped, new restaurants and apartments are opening, and local schools are adding engineering programs. Young people who once left for Tokyo or Osaka now see careers at home. At the same time, growth brings problems familiar to boomtowns everywhere: traffic jams, worker shortages, and worries about water use by the factories.\nFor Japan, Kyushu's chip cluster is a test case. The country wants to rebuild the semiconductor strength it lost decades ago. If the model works — foreign investment, local suppliers, and government support pulling together — other regions will try to copy it.",
        summaryJa: "世界最大の半導体受託製造企業の工場進出以来、熊本を中心とする九州が世界的な半導体集積地に変貌しつつある。地場サプライヤーは生産能力を約4割増強するなど拡大が続き、材料・装置・物流が一体となった地域完結型サプライチェーンを目指す。地価上昇や雇用の地元定着という恩恵の一方、渋滞・人手不足・水資源への懸念も。日本の半導体復権のテストケースとして注目される。",
        quiz: [
          { q: "熊本周辺で起きていることは？", options: ["半導体の supply chain 集積地として拡大している", "工場がすべて閉鎖された", "農業だけが成長している"], answer: 0 },
          { q: "地場サプライヤーの動きは？", options: ["生産能力を約4割増強", "生産を海外へ全面移転", "半導体事業から撤退"], answer: 0 },
          { q: "ブームの課題として挙げられているのは？", options: ["渋滞・人手不足・水資源への懸念", "観光客の減少", "地価の暴落"], answer: 0 }
        ]
      },
      {
        id: "d0710-5",
        title: "Small Rockets, Big Dreams",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "Space used to be a game for superpowers. Building and launching rockets cost so much that only governments could afford it. That era is ending. Around the world — including in Japan, where space is now one of the strongest startup fields — small private companies are building rockets, satellites, and services that were unthinkable for startups a decade ago.\nThe key change is cost. Modern small satellites can be built with standard electronic parts, and they weigh kilograms instead of tons. Small rockets, designed to carry these light payloads, are cheaper to build and can launch more often. Reusable technology, pioneered by larger players, has pushed prices down across the industry.\nWhat do all these small satellites actually do? More than most people think. They photograph farmland to help farmers use water and fertilizer wisely. They track ships and monitor illegal fishing. They measure greenhouse gases, connect remote areas to the internet, and watch disasters like floods and wildfires in near real time.\nJapan's government has named space a national priority, and universities, startups, and big manufacturers are joining the field. Challenges are real — launches fail, funding is risky, and competition is global. But the message of the new space race is inspiring: the sky is no longer the limit for small teams with big ideas.",
        summaryJa: "宇宙開発は超大国の独占物から、スタートアップの主戦場へ。小型衛星は標準部品で安価に作れ、小型ロケットの登場と再使用技術の普及で打ち上げコストが激減した。小型衛星は農業支援、船舶追跡、温室効果ガス観測、災害監視など幅広く活躍。日本も宇宙を国家的優先分野に位置づけ、スタートアップの最有力分野の一つになっている。",
        quiz: [
          { q: "宇宙開発の変化の鍵は？", options: ["小型化と再使用技術によるコスト激減", "宇宙人との協力", "ロケットの大型化"], answer: 0 },
          { q: "小型衛星の用途として挙げられていないものは？", options: ["農業の支援", "災害の監視", "月面ホテルの運営"], answer: 2 },
          { q: "日本の宇宙分野の現状は？", options: ["国家的優先分野でスタートアップの有力分野", "全面的に禁止されている", "関心が失われている"], answer: 0 }
        ]
      }
    ]
  },
  {
    date: "2026-07-09",
    passages: [
      {
        id: "d0709-1",
        title: "The Billion-Dollar Race for a Weight-Loss Pill",
        level: "★★☆",
        genre: "ビジネス",
        text: "Weight-loss medicine has become one of the biggest business stories of the decade. Until now, the most famous treatments were weekly injections, which are expensive to make and need refrigeration. The next battle is about something much simpler: a daily pill.\nThis week brought important news from a major clinical trial. A new once-daily tablet helped patients lose more weight and control their blood sugar better than the leading oral treatment currently on the market. For drug companies, results like this are worth billions. Pills are cheaper to produce than injections, easier to ship around the world, and much easier for patients to accept.\nThe business impact could be huge. Analysts expect the global market for these medicines to keep growing for years, and the company with the best pill could take a large share of it. Health systems and insurers are watching closely too, because lower production costs could finally make these treatments affordable for more people.\nThere are still open questions. Long-term safety data takes years to collect, and doctors warn that medicine works best together with changes in diet and exercise. But one thing seems clear: the competition to put weight loss in a small daily tablet has become one of the most valuable races in modern business.",
        summaryJa: "肥満治療薬ビジネスの主戦場が「注射」から「1日1回の飲み薬」へ。大規模治験で新しい経口薬が既存の主力経口薬を上回る減量・血糖改善効果を示した。錠剤は製造・輸送コストが低く患者にも受け入れられやすいため、市場への影響は巨大。長期安全性の検証はこれからだが、製薬業界で最も価値のある開発競争になっている。",
        quiz: [
          { q: "今回の治験ニュースの内容は？", options: ["新しい経口薬が既存の経口薬を上回る効果を示した", "注射薬が販売中止になった", "薬の価格が2倍になった"], answer: 0 },
          { q: "錠剤が注射より有利な点として挙げられているのは？", options: ["製造・輸送コストが低く患者に受け入れられやすい", "効果が永久に続く", "医師が不要になる"], answer: 0 },
          { q: "本文が示す注意点は？", options: ["長期安全性の確認には時間がかかり、食事・運動との併用が大事", "薬はすでに完璧である", "市場は縮小している"], answer: 0 }
        ]
      },
      {
        id: "d0709-2",
        title: "A Material That Can 'Program' Heat",
        level: "★★★",
        genre: "テクノロジー",
        text: "We are used to controlling electricity with switches and chips. Controlling heat has always been harder: it flows where it wants, and our main tools are simple insulation or fans. That may be starting to change. Researchers have developed a new material that can direct thermal radiation, switch between different modes, and even remember its settings without a continuous power supply.\nThink of it as a kind of switch for heat. The material can be set to send warmth in a chosen direction, or to change how much heat it releases, and it keeps that setting like a memory chip keeps data. Because it does not need constant energy to hold its state, it could save power in many applications.\nWhy does this matter for industry? Managing heat is one of the biggest hidden costs in modern technology. Data centers spend enormous amounts of money on cooling. Electric car batteries need careful temperature control to stay safe and efficient. Buildings lose energy through walls and windows every day. A material that can direct and program heat could make all of these systems smarter and cheaper to run.\nThe technology is still in the laboratory stage, and scaling it up will take years. But it points to a future where heat, like electricity, becomes something we control with precision.",
        summaryJa: "熱の放射方向やモードを切り替え、電源なしで設定を記憶できる「熱をプログラムできる」新材料が開発された。データセンターの冷却、EVバッテリーの温度管理、建物の断熱など、熱管理は現代技術の隠れた巨大コストであり、応用範囲は広い。実用化はまだ先だが、電気のように熱を精密制御する未来を示す成果。",
        quiz: [
          { q: "新材料ができることとして正しいのは？", options: ["熱の放射を制御し、設定を電源なしで記憶する", "熱を完全に消し去る", "電気を無限に生み出す"], answer: 0 },
          { q: "応用先として挙げられていないものは？", options: ["データセンターの冷却", "EVバッテリーの温度管理", "宇宙旅行のチケット販売"], answer: 2 },
          { q: "この技術の現状は？", options: ["すでに全世界で販売中", "実験室段階で実用化には年月が必要", "法律で禁止された"], answer: 1 }
        ]
      },
      {
        id: "d0709-3",
        title: "Cities Learn to Live with Extreme Heat",
        level: "★★☆",
        genre: "世界情勢",
        text: "July is high summer in much of the world, and once again cities from Europe to Asia are facing dangerous heat. Extreme temperatures are no longer rare events; they have become a seasonal challenge that governments must plan for, like snow in winter.\nThe costs are real and rising. Heat slows down outdoor work, damages roads and rail lines, and pushes power grids to their limits as millions of air conditioners run at once. Health systems feel the pressure too, especially where many elderly people live alone.\nCities are responding in creative ways. Some have appointed 'heat officers' whose only job is to prepare for hot weather. Others are painting roofs white to reflect sunlight, planting thousands of trees to create shade, and opening public cooling centers in libraries and community halls. Schools and companies are moving activity to early morning hours, and some countries now give outdoor workers a legal right to rest breaks when temperatures pass certain levels.\nExperts say the deeper lesson is about planning. Emergency responses save lives during a heat wave, but the cities that suffer least are the ones that redesigned themselves in advance — with greener streets, better buildings, and clear rules. In a warming world, heat management is becoming a normal part of good government.",
        summaryJa: "7月、欧州からアジアまで各都市が危険な暑さに直面。猛暑はもはや珍しい災害ではなく、政府が備えるべき「季節の課題」になった。屋外労働や交通、電力網、医療への負荷が増す中、都市は「暑さ対策責任者」の任命、屋根の白塗装、植樹、クーリングセンター開設、屋外労働者の休憩権などで対応。事前に都市を設計し直した街ほど被害が少ない——暑さ対策は行政の標準業務になりつつある。",
        quiz: [
          { q: "本文の主張として正しいのは？", options: ["猛暑は政府が計画的に備えるべき季節的課題になった", "猛暑は今年で終わる", "暑さは経済に影響しない"], answer: 0 },
          { q: "都市の対策として挙げられていないものは？", options: ["屋根を白く塗る", "クーリングセンターを開く", "夏の外出を法律で禁止する"], answer: 2 },
          { q: "被害が少ない都市の特徴は？", options: ["事前に緑化や建物改善など都市を設計し直している", "偶然涼しい年が続いている", "人口が多い"], answer: 0 }
        ]
      },
      {
        id: "d0709-4",
        title: "A Hidden Weakness Behind the 2011 Tsunami",
        level: "★★★",
        genre: "日本",
        text: "The earthquake and tsunami of March 2011 changed Japan forever, and scientists have spent years asking why that event became so extreme. New research now points to a hidden weakness in the sea floor off the Tohoku coast that may explain the disaster's terrible scale.\nEarthquakes in this region happen where one tectonic plate slides beneath another. Normally, friction between the plates limits how far the sea floor can suddenly move. But the new study found that part of the boundary zone beneath the Pacific was mechanically much weaker than expected. When the 2011 earthquake began, this weak section allowed an enormous slip — tens of meters — right up to the shallow sea floor near the trench. That huge shallow movement lifted the ocean above it and created the devastating tsunami.\nWhy does this discovery matter today? Because similar weak zones may exist along other subduction boundaries, including areas that threaten Japan's Pacific coast in the future. If scientists can map where these zones are, they can better estimate which regions face the highest tsunami risk and improve building rules, sea walls, and evacuation plans.\nThe research is also a reminder of how much the 2011 disaster still teaches. Fifteen years later, every new detail helps Japan — and other coastal nations — prepare for the next big one.",
        summaryJa: "2011年の東日本大震災がなぜあれほど巨大化したのか——東北沖の海底下にあるプレート境界の「想定以上に弱い領域」が、海溝近くの浅部まで数十メートルの巨大なすべりを許し、津波を極大化させたとする新研究が発表された。同様の弱い領域は他の沈み込み帯にも存在しうるため、その分布を特定できれば津波リスク評価や防潮堤・避難計画の改善につながる。",
        quiz: [
          { q: "新研究が特定したものは？", options: ["プレート境界の想定以上に弱い領域", "新しい火山", "海底都市の遺跡"], answer: 0 },
          { q: "その弱い領域が引き起こしたことは？", options: ["海溝近くの浅部での巨大なすべりと津波の極大化", "地震の発生を防いだ", "海流の変化"], answer: 0 },
          { q: "この発見の今後への意味は？", options: ["津波リスク評価や防災計画の改善に役立つ", "地震予知が完全に可能になった", "防潮堤が不要になる"], answer: 0 }
        ]
      },
      {
        id: "d0709-5",
        title: "Quantum Weirdness You Can Almost See",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "Quantum physics has a reputation for being invisible. Its strange rules — particles in two states at once, mysterious connections across distance — usually apply only to atoms and electrons, far too small to see. That is why a new experiment is getting so much attention: scientists found clear signs of quantum entanglement in a crystal about one centimeter wide, an object you could hold between your fingers.\nEntanglement is the strange link Einstein called 'spooky action at a distance.' When two particles are entangled, measuring one instantly tells you about the other, no matter how far apart they are. Physicists have demonstrated this with photons and atoms for decades. Showing related behavior in a large, everyday-sized object is a different level of surprise.\nWhy do researchers care? First, it tests the boundary between the quantum world and our normal world. Nobody fully understands where quantum rules stop applying, and every experiment like this pushes that line further. Second, it has practical promise. Quantum sensors built from larger objects could detect incredibly small forces, which is useful for navigation, medicine, and studying the Earth.\nThe result does not mean your coffee cup is entangled with your phone. But it shows that the quantum world is closer to daily life than we usually think — and that physics still has surprises left.",
        summaryJa: "約1センチの結晶——指でつまめるサイズの物体——で量子もつれの明確な証拠が確認された。量子もつれは通常、原子や光子など極小の世界の現象で、日常サイズの物体での実証は「量子と日常の境界」を探る大きな一歩。微小な力を検出できる量子センサーへの応用も期待され、航法・医療・地球観測などに役立つ可能性がある。",
        quiz: [
          { q: "今回の実験の驚きは？", options: ["1センチほどの結晶で量子もつれの証拠が見つかった", "新しい惑星が見つかった", "光より速い通信が実現した"], answer: 0 },
          { q: "アインシュタインが量子もつれを何と呼んだ？", options: ["不気味な遠隔作用", "美しい調和", "小さな奇跡"], answer: 0 },
          { q: "この研究の実用的な可能性は？", options: ["微小な力を検出する量子センサー", "永久機関の実現", "テレポーテーション旅行"], answer: 0 }
        ]
      }
    ]
  },
  {
    date: "2026-07-08",
    passages: [
      {
        id: "d0708-1",
        title: "Big Tech Sends Its Engineers to the Client",
        level: "★★☆",
        genre: "ビジネス",
        text: "For years, software companies mostly sold tools and left customers to figure out how to use them. That model is changing fast. Microsoft has announced a new unit with a 2.5 billion dollar budget and about six thousand employees whose job is to sit inside client companies and help them put AI to work. Other major AI companies have started similar teams this year.\nWhy is this happening? Many companies bought AI tools during the boom, but a large share of those projects never produced real results. Employees did not know how to use the new systems, old data was messy, and business processes did not change. Buying technology, it turns out, is the easy part.\nThe new approach is sometimes called forward deployed engineering. Instead of selling from a distance, engineers work next to the customer's own staff, rebuild processes together, and stay until the results appear. It looks less like traditional software sales and more like consulting.\nFor workers, the lesson is encouraging: companies are learning that people, not just tools, decide whether technology creates value. Skills such as explaining technology in plain language, managing change, and working across teams are becoming more valuable, not less, in the age of AI.",
        summaryJa: "マイクロソフトが25億ドル・約6,000人規模の新組織を発表。エンジニアが顧客企業に常駐してAI導入を支援する「フォワードデプロイ」型で、他の大手AI企業も同様のチームを設立中。AIツールを買っても成果が出ない企業が多い中、技術の売り切りからコンサルティングに近い伴走型へ業界が移行している。",
        quiz: [
          { q: "マイクロソフトの新組織の特徴は？", options: ["エンジニアが顧客企業に入り込んでAI導入を支援する", "AIチップを製造する", "広告事業を拡大する"], answer: 0 },
          { q: "多くのAIプロジェクトが成果を出せなかった理由として挙げられているのは？", options: ["AIの価格が高すぎた", "使い方の浸透・データ整備・業務プロセスの変革が伴わなかった", "法律で禁止された"], answer: 1 },
          { q: "本文が示す「AI時代に価値が上がるスキル」は？", options: ["平易な説明・変革の推進・チーム横断の協働", "タイピングの速さ", "プログラミングのみ"], answer: 0 }
        ]
      },
      {
        id: "d0708-2",
        title: "AI Agents Go to Work — and Raise New Questions",
        level: "★★★",
        genre: "テクノロジー",
        text: "Until recently, most people used AI as a smart chat tool: you ask a question, it gives an answer. The next stage is already here, and it is called the AI agent. An agent does not just answer — it acts. It can read your emails, book meetings, update a database, or complete a purchase, all by itself.\nBusiness adoption is moving at a surprising speed. One major research firm expects that by the end of this year, around forty percent of large companies' software applications will include AI agents, up from almost none a year earlier. The market for these tools is now worth more than ten billion dollars.\nBut speed creates risk. When an AI only talks, a mistake produces a wrong sentence. When an AI acts, a mistake can send money to the wrong place or delete important data. Security researchers have already shown that attackers can hide malicious instructions inside ordinary-looking content and trick agents into doing harmful things.\nExperts therefore repeat one piece of advice: give agents clear limits. Decide what they may do alone, what needs human approval, and keep records of every action. Companies that skip these guardrails may learn an expensive lesson.",
        summaryJa: "「答えるAI」から「行動するAIエージェント」への移行が加速。大手調査会社は年末までに大企業のアプリの約4割がエージェントを組み込むと予測し、市場は100億ドル超に。一方、行動するAIのミスは実害に直結し、悪意ある指示を紛れ込ませる攻撃も実証済み。権限の制限・人間の承認・行動記録というガードレールが不可欠。",
        quiz: [
          { q: "AIエージェントと従来のチャットAIの違いは？", options: ["答えるだけでなく、メール処理や予約などの行動ができる", "日本語が話せる", "無料で使える"], answer: 0 },
          { q: "調査会社の予測は？", options: ["年末までに大企業アプリの約4割がエージェントを組み込む", "エージェントは来年消える", "利用は5%未満にとどまる"], answer: 0 },
          { q: "専門家が勧める対策は？", options: ["エージェントに無制限の権限を与える", "権限の制限・人間の承認・行動記録", "AIの利用を全面禁止"], answer: 1 }
        ]
      },
      {
        id: "d0708-3",
        title: "Can AI Help 118 Million Displaced People?",
        level: "★★☆",
        genre: "世界情勢",
        text: "While companies race to use AI for profit, humanitarian organizations are asking a different question: can this technology help the world's most vulnerable people? The International Rescue Committee, a major aid group, is urging the tech industry to put AI to work for the roughly 118 million people who have been forced from their homes by war, persecution, and disaster.\nThe needs are practical. Aid groups must decide where to send food, medicine, and staff, often with limited information. AI systems can study weather data, crop conditions, and conflict reports to warn about coming crises earlier. Translation tools can help refugees understand medical instructions or legal documents in their own language. Chat-based tutors can support children who have lost years of school.\nThere are also real concerns. Refugees' personal data must be protected, because in the wrong hands it could put lives in danger. Aid budgets are tight, and technology should not replace basic needs like food and shelter. And AI tools built for rich markets often work poorly in languages spoken by displaced communities.\nStill, the message from aid groups is clear: the same technology that writes emails and code could also predict famines and reunite families — if the industry chooses to invest in it.",
        summaryJa: "国際救援委員会(IRC)が、戦争や災害で家を追われた世界の約1億1,800万人のためにAIを活用するようテック業界に要請。危機の早期警報、翻訳による医療・法律支援、教育支援チャットなどの応用が期待される一方、難民の個人データ保護や、少数言語での性能不足といった課題も。技術の投資先の選択が問われている。",
        quiz: [
          { q: "IRCがテック業界に求めていることは？", options: ["約1億1,800万人の避難民のためにAIを活用すること", "広告費の増額", "SNSの新機能開発"], answer: 0 },
          { q: "AIの人道支援での活用例として挙げられていないものは？", options: ["危機の早期警報", "翻訳による医療・法律支援", "軍事作戦の立案"], answer: 2 },
          { q: "本文が指摘する懸念は？", options: ["AIが高価すぎて誰も使えない", "難民の個人データ保護と少数言語での性能不足", "支援団体がAIを使いすぎている"], answer: 1 }
        ]
      },
      {
        id: "d0708-4",
        title: "Japan's Plan to Revive Basic Science",
        level: "★★☆",
        genre: "日本",
        text: "The Japanese government has approved this year's Science and Technology White Paper, and its message is unusually direct: Japan needs to revive its science. The report, approved by the Cabinet this week, calls for a major expansion of investment in basic research — the kind of curiosity-driven work that does not promise quick profits but produces the seeds of future innovation.\nThe sense of urgency comes from the numbers. Japan once stood near the top of world science, but its share of highly cited academic papers has been falling for years, and the country now ranks far below its position a generation ago. Young researchers often work on short contracts with unstable funding, and many talented students choose careers outside academia or move abroad.\nWhy does this matter for the economy? History shows that today's basic research becomes tomorrow's industry. The technologies behind smartphones, vaccines, and AI all grew from decades of quiet fundamental work. A country that stops planting these seeds may still harvest for a while, but eventually the fields go empty.\nThe white paper argues that stable funding, better career paths for young scientists, and stronger links between universities and companies are all needed. The debate now moves to the budget process, where promises will meet reality.",
        summaryJa: "日本政府が2026年版の科学技術白書を閣議決定。「科学の再興」を掲げ、基礎研究への投資の抜本的拡充を訴えた。背景には注目論文の国際順位の長期低下や、若手研究者の不安定な雇用がある。スマホもワクチンもAIも基礎研究から生まれた——安定資金・若手のキャリア・産学連携の強化が課題で、焦点は今後の予算編成に移る。",
        quiz: [
          { q: "今年の科学技術白書の中心メッセージは？", options: ["基礎研究への投資を拡充し科学を再興する", "研究予算を削減する", "大学を減らす"], answer: 0 },
          { q: "危機感の背景として挙げられているのは？", options: ["注目論文の国際順位の低下と若手研究者の不安定な雇用", "研究者が多すぎること", "留学生の増加"], answer: 0 },
          { q: "本文の「種まき」の比喩が意味するものは？", options: ["農業への補助金", "基礎研究が将来の産業を生むこと", "株式投資のこと"], answer: 1 }
        ]
      },
      {
        id: "d0708-5",
        title: "Why Deep Sleep Helps Your Body Grow and Repair",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "\"Sleep well and you will grow\" — parents have said this for generations. Now scientists can explain why it is true at the level of brain circuits. Researchers have identified the specific wiring in the brain that connects deep sleep with the release of growth hormone, one of the body's most important repair signals.\nGrowth hormone does much more than make children taller. In adults, it helps repair muscles, manage fat, and keep the brain working well. The new research shows that deep sleep triggers the release of this hormone, and the hormone in turn acts back on the brain's sleep circuits — a feedback loop in which each side supports the other.\nThis loop explains something many people feel but could not prove: when you sleep badly, your body seems to recover more slowly, your training results suffer, and your thinking feels dull. Poor sleep breaks the loop, which means less growth hormone, which can further disturb sleep — a frustrating cycle.\nThe practical advice is not new, but the science behind it is stronger than ever. Protect your deep sleep: keep regular hours, avoid screens and heavy meals late at night, and treat sleep as part of your training plan, not a luxury. Your brain, quite literally, does repair work while you rest.",
        summaryJa: "深い睡眠と成長ホルモンの分泌をつなぐ脳内回路が特定された。成長ホルモンは筋肉の修復や脂肪代謝、脳機能の維持に働き、深い睡眠が分泌を促し、ホルモンが睡眠回路に働き返す「相互のフィードバックループ」を形成。睡眠不足がこのループを壊すことで回復力や思考力の低下につながる。規則正しい睡眠を「トレーニングの一部」として守るべき理由が科学的に裏付けられた。",
        quiz: [
          { q: "研究で特定されたのは？", options: ["深い睡眠と成長ホルモン分泌をつなぐ脳の回路", "新しい睡眠薬", "夢の内容を読む技術"], answer: 0 },
          { q: "成長ホルモンの成人での働きとして挙げられているのは？", options: ["筋肉の修復・脂肪代謝・脳機能の維持", "身長を伸ばすことだけ", "視力の回復"], answer: 0 },
          { q: "本文の実践的アドバイスは？", options: ["睡眠時間を削って学習する", "深い睡眠を守り、睡眠を計画の一部として扱う", "昼寝だけで十分"], answer: 1 }
        ]
      }
    ]
  }
] };
