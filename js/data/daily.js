/* デイリー配信リーディング
 * 毎朝の自動ルーチンがこのファイルを丸ごと上書き生成する（直近 7 日分を保持）。
 * days は日付降順。各 day = { date: "YYYY-MM-DD", passages: [readingPassages と同スキーマ + genre] }
 * このファイル以外は手書きデータであり、ルーチンは触らない。
 */
window.KE_DATA = window.KE_DATA || {};

KE_DATA.dailyReading = { days: [
  {
    date: "2026-07-26",
    passages: [
      {
        id: "d0726-1",
        title: "The Business of Going Back to the Moon",
        level: "★★☆",
        genre: "ビジネス",
        text: "Returning to the Moon is no longer only a government mission — it is becoming a business. NASA recently announced it would award nearly six hundred million dollars for four commercial Moon landings, planned for the coming years, as part of a larger effort to build a permanent base on the lunar surface. Private companies, not just space agencies, will carry the equipment.\nWhy hire companies for something as difficult as landing on the Moon? The answer is the same reason businesses outsource many tasks: competition and specialization lower costs and speed up progress. Instead of building and operating every lander itself, NASA acts as a customer, paying private firms to deliver cargo to the lunar surface. Companies compete to offer the best service at the lowest price, and the ones that succeed can sell the same service again and again.\nThis approach has already transformed the launch industry, where private rockets dramatically cut the cost of reaching orbit. Applying the same model to Moon landings could make lunar missions far more frequent and affordable than in the past, when each one was a rare and hugely expensive government project.\nThere are risks. Landing on the Moon is extremely hard, and some private attempts have failed. A company that loses a spacecraft loses money and reputation. But the potential rewards — a share of a new space economy — are large enough to attract serious investment.\nThe wider lesson is about how industries form. A field that once belonged only to governments is becoming a marketplace, with customers, suppliers, and competition. As with aviation and computing before it, space is following a familiar path: from a rare government achievement to an everyday commercial service — one small business deal at a time.",
        summaryJa: "月に戻ることは政府の使命だけでなくビジネスになりつつある。NASAは、月面基地建設の一環として、今後計画される4回の民間月着陸に約6億ドルを拠出すると発表した。機材を運ぶのは宇宙機関でなく民間企業だ。なぜ月着陸のような難事を企業に委ねるのか——業務委託と同じで、競争と専門化がコストを下げ進歩を速めるからだ。NASAは自ら全着陸機を作らず「顧客」として貨物輸送に対価を払い、企業は最良のサービスを最低価格で競い、成功すれば同じサービスを繰り返し売れる。この方式は打ち上げ産業を既に変え、民間ロケットが軌道到達コストを激減させた。月着陸に応用すれば頻度と手頃さが増す。着陸は難しく失敗もありリスクは高いが、新しい宇宙経済の取り分は投資を呼ぶ。政府だけの分野が顧客・供給者・競争のある市場へ——航空や計算機と同じ道を宇宙も辿る。",
        quiz: [
          { q: "NASAが民間企業に月着陸を委ねる理由は？", options: ["競争と専門化でコストを下げ進歩を速めるため", "宇宙飛行士が足りないから", "月に興味がないから"], answer: 0 },
          { q: "この方式が既に変えた産業は？", options: ["打ち上げ(ロケット)産業", "農業", "漁業"], answer: 0 },
          { q: "本文が示す産業形成の教訓は？", options: ["政府だけの分野が競争のある市場へ変わる", "宇宙は政府専用のまま", "民間は関与できない"], answer: 0 }
        ]
      },
      {
        id: "d0726-2",
        title: "AI Enters the World of Diplomacy",
        level: "★★★",
        genre: "テクノロジー",
        text: "Artificial intelligence has been discussed mainly as a matter of business and industry. Now it is entering a very different arena: high diplomacy. Reports say AI is moving into the same category as nuclear technology, cybersecurity, and arms control, with major powers scheduling talks about how to manage it. This shift marks an important moment in how the world views the technology.\nWhy would nations treat AI like nuclear weapons? Because powerful AI, like powerful weapons, could affect global security. Advanced AI systems might be used to guide military operations, spread disinformation at massive scale, launch cyberattacks, or shift the balance of economic power. When a technology becomes strong enough to change the balance between nations, governments start to negotiate rules for it, just as they did for nuclear arms decades ago.\nDiplomacy around technology is difficult. Countries both compete and cooperate at the same time. Each wants the advantages that AI can bring, so none wishes to fall behind. Yet all share an interest in avoiding dangerous outcomes, such as accidents, misunderstandings, or an uncontrolled race. The challenge is to build trust and set limits without giving up too much advantage — a delicate balance that has always defined arms control.\nThere are reasons for hope and caution. History shows that rival nations can agree on rules for dangerous technologies when the risks are clear enough; treaties on nuclear weapons are one example. But AI is harder to define and monitor than a missile, and it changes quickly, which makes agreements difficult to write and enforce.\nThe deeper significance is clear: the world now sees AI not just as a tool for making money, but as a force that could shape the future of nations. How humanity chooses to govern it may become one of the defining questions of our century.",
        summaryJa: "AIは主にビジネス・産業の問題として語られてきたが、今や高度な外交の舞台に入りつつある。報道では、AIは核技術・サイバーセキュリティ・軍備管理と同じ範疇に入り、主要国が管理の協議を予定している。世界のAI観の重要な転換点だ。なぜ核兵器のように扱うのか——強力なAiは軍事作戦の誘導、大規模な偽情報、サイバー攻撃、経済力の均衡変化など安全保障に関わりうるからだ。国家間の均衡を変える技術には、かつての核と同様、ルール交渉が始まる。技術外交は難しく、各国は競争と協力を同時に行う。誰も後れを取りたくない一方、事故・誤解・制御不能な競争は避けたい。優位を失わず信頼と制限を築く微妙な均衡だ。核条約のように危険な技術で合意した歴史は希望だが、AIはミサイルより定義・監視が難しく速く変わる。世界はAiを金儲けの道具でなく国家の未来を形づくる力と見始めた——その統治は今世紀の中心的問いになりうる。",
        quiz: [
          { q: "AIが新たに入りつつある領域は？", options: ["核技術や軍備管理と同じ高度な外交の範疇", "スポーツ", "料理"], answer: 0 },
          { q: "国家がAIをルール交渉の対象にする理由は？", options: ["国家間の安全保障の均衡に関わりうるから", "AIが安いから", "誰も使わないから"], answer: 0 },
          { q: "AIの合意が核兵器より難しい理由は？", options: ["定義・監視が難しく速く変わるから", "AIは危険でないから", "変化しないから"], answer: 0 }
        ]
      },
      {
        id: "d0726-3",
        title: "Do Small Green Choices Really Matter?",
        level: "★★☆",
        genre: "世界情勢",
        text: "Many people wonder whether their personal efforts to help the environment — recycling, eating less meat, driving less — make any real difference against a problem as huge as climate change. Some even worry that focusing on small personal choices distracts people from demanding big changes in laws and industry. A recent study offers a reassuring answer: personal green choices do not reduce support for large-scale reforms. In fact, the two go together.\nThe worry made sense in theory. If people feel they have 'done their part' by recycling, might they stop pushing for the bigger changes — new energy systems, stricter rules for companies — that matter most? Some argued that emphasizing personal responsibility lets governments and big polluters off the hook.\nThe study suggests this fear is largely unfounded. People who make green choices in their own lives are, if anything, more likely to support major environmental policies, not less. Acting on a value seems to strengthen it, rather than satisfy it. Someone who bothers to recycle or eat less meat often cares more about the issue overall, and that concern extends to supporting broader action.\nThis matters because solving climate change requires both individual and collective effort. Personal choices alone cannot fix a global problem — that needs changes in energy, transport, and industry, driven by governments and companies. But personal action and political support are not rivals competing for a limited supply of concern. They reinforce each other.\nThe broader lesson reaches beyond the environment. In many areas of life, small personal actions and large systemic changes are often seen as opposites, forcing a choice between them. This research suggests a more hopeful view: doing something yourself and demanding bigger change can grow from the same root — and strengthen each other along the way.",
        summaryJa: "リサイクルや肉を減らす、車に乗らないといった個人の環境努力が、気候変動という巨大問題に本当に意味があるのか疑う人は多い。個人の小さな選択に注目すると、法や産業の大改革を求める気持ちがそがれると心配する声もある。最近の研究は安心できる答えを示す——個人の環境選択は大規模改革への支持を減らさず、むしろ両者は一緒に進む。理屈上は「自分の役目は果たした」と感じて大改革を求めなくなる懸念があったが、研究では、生活で環境選択をする人ほど大きな環境政策も支持しやすい。価値に沿って行動するとその価値は満たされるより強まるようだ。気候変動の解決は個人と集団の両方の努力を要し、個人の選択だけでは足りずエネルギー・交通・産業の変化が要る。だが個人行動と政治的支持は限られた関心を奪い合う競争相手でなく、互いを強め合う。小さな個人行動と大きな制度変革は対立でなく同じ根から育ちうる。",
        quiz: [
          { q: "研究が示した安心できる答えは？", options: ["個人の環境選択は大改革への支持を減らさない", "個人の選択は無意味", "リサイクルは有害"], answer: 0 },
          { q: "価値に沿って行動すると起きることは？", options: ["その価値が満たされるより強まる", "関心が消える", "何も変わらない"], answer: 0 },
          { q: "個人行動と政治的支持の関係は？", options: ["競争相手でなく互いを強め合う", "常に対立する", "無関係"], answer: 0 }
        ]
      },
      {
        id: "d0726-4",
        title: "A Nation Betting on New Industries",
        level: "★★☆",
        genre: "日本",
        text: "Every country must decide where to focus its energy and money as the economy changes. Japan has made its choice clear: it is betting on a group of advanced fields — artificial intelligence, robotics, mobility, space, biotechnology, and manufacturing technology — supported by government backing, demand from established companies, and a growing network of startup hubs across the country.\nWhy these particular fields? Because each builds on a strength Japan already has, or addresses a challenge it must solve. Robotics and manufacturing draw on decades of engineering excellence. Space and mobility connect to major existing industries. Biotechnology addresses the needs of an aging society. By choosing areas where it can compete, Japan aims to turn its existing advantages into future growth.\nGovernment support plays a large role. Through funding, favorable policies, and programs that link startups with big companies and investors, the state tries to help new industries grow faster than they would alone. Meanwhile, established firms provide something startups badly need: real customers with real budgets, ready to buy new technology.\nThis strategy carries both promise and risk. Focusing on chosen fields can concentrate resources where they matter most, helping a country lead. But betting on the wrong areas, or moving too slowly, can leave a nation behind as technology shifts. No one can perfectly predict which industries will define the future.\nThe broader lesson applies to businesses and individuals too. With limited time and money, everyone must choose where to focus. Building on your existing strengths, while addressing the challenges you cannot avoid, is often the wisest strategy. For a person or a nation, success comes less from doing everything, and more from choosing the right things to do well.",
        summaryJa: "どの国も経済の変化に応じてどこに力と資金を注ぐか決めねばならない。日本は明確に選んだ——AI・ロボティクス・モビリティ・宇宙・バイオ・製造技術という先進分野に、政府支援・既存企業の需要・全国のスタートアップ拠点網で賭ける。なぜこれらか。各分野が日本の既存の強みを活かすか、解くべき課題に応えるからだ。ロボット・製造は長年の技術力、宇宙・モビリティは主要既存産業、バイオは高齢社会の需要に対応。競争できる領域を選び、既存の優位を将来の成長に変えようとする。資金・政策・大企業や投資家との橋渡しで新産業の成長を後押しし、既存企業は「実際の予算を持つ顧客」を提供する。分野を絞れば資源を集中できるが、選択を誤り遅れれば取り残される。限られた時間と資金では誰もが集中先を選ぶ——既存の強みを活かしつつ避けられぬ課題に応えるのが賢明で、成功は「全部やる」より「正しいことを選んでうまくやる」ことから来る。",
        quiz: [
          { q: "日本が賭ける分野に含まれないものは？", options: ["AI・ロボティクス・宇宙", "バイオ・製造技術", "石炭採掘の拡大"], answer: 2 },
          { q: "既存企業がスタートアップに提供するものは？", options: ["実際の予算を持つ顧客", "無料の労働力", "宇宙船"], answer: 0 },
          { q: "本文が示す賢明な戦略は？", options: ["既存の強みを活かしつつ避けられぬ課題に応える", "とにかく全部やる", "何も選ばない"], answer: 0 }
        ]
      },
      {
        id: "d0726-5",
        title: "The Mystery of the SuperAgers",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "Most of us expect memory to fade as we grow old. But a rare group of people, sometimes called 'SuperAgers,' keep sharp memories well into their eighties and beyond, performing as well as people decades younger. Scientists studying them recently made a puzzling discovery: the genes of SuperAgers look much like those of typical older adults. Whatever protects their memory does not seem to lie simply in obvious genetic differences.\nThis is surprising because we often assume that exceptional abilities come from special genes. If SuperAgers' DNA looks ordinary, then something else must be protecting their brains. Researchers suspect a combination of factors — perhaps the way their genes are used rather than the genes themselves, along with lifestyle, mental activity, social connection, and forces we do not yet understand.\nWhy study these rare individuals? Because they may hold clues to preventing the memory loss that affects millions as they age, including diseases like Alzheimer's. If scientists can discover what keeps a SuperAger's brain healthy, they might find ways to help others protect their memory too. Studying the exceptional, in other words, can teach us how to help everyone.\nThe research also carries a hopeful message. If sharp memory in old age is not fixed entirely by the genes we are born with, then our choices and habits — staying mentally and socially active, caring for our health — may play a meaningful role. Nothing is guaranteed, but the SuperAgers suggest that a healthy aging brain is not purely a matter of luck.\nThe deeper wonder is how much we still have to learn about ourselves. Even the brain we carry every day holds mysteries, and understanding rare people who age exceptionally well may help all of us grow older with our minds intact.",
        summaryJa: "多くは加齢で記憶が衰えると思っている。だが「スーパーエイジャー」と呼ばれる稀な人々は80代以降も鋭い記憶を保ち、数十歳若い人並みの成績を示す。研究者は不思議な発見をした——スーパーエイジャーの遺伝子は普通の高齢者とよく似ている。記憶を守る何かは、明白な遺伝的差異だけにはないようだ。優れた能力は特別な遺伝子から来ると考えがちだが、DNAが普通なら別の何かが脳を守っている。研究者は、遺伝子そのものより使われ方、生活習慣、知的活動、社会的つながり、未解明の要因の組み合わせを疑う。彼らを研究するのは、加齢に伴う記憶低下やアルツハイマーの予防の手がかりになりうるからだ。稀な例外の研究が万人を助ける道を教える。希望のメッセージもある——老年の鋭い記憶が生来の遺伝子で完全に決まらないなら、知的・社会的活動や健康管理といった選択や習慣が意味を持ちうる。保証はないが、健康な老いた脳は単なる運任せではないと示す。日々使う脳にも謎があり、例外を理解することが皆の健やかな老いを助けうる。",
        quiz: [
          { q: "スーパーエイジャーとは？", options: ["高齢でも鋭い記憶を保つ稀な人々", "若くして記憶を失う人", "眠らない人"], answer: 0 },
          { q: "研究者が驚いた発見は？", options: ["彼らの遺伝子が普通の高齢者と似ていること", "彼らが超人だったこと", "記憶がないこと"], answer: 0 },
          { q: "この研究の希望のメッセージは？", options: ["選択や習慣が記憶の維持に意味を持ちうる", "すべては運任せ", "習慣は無意味"], answer: 0 }
        ]
      }
    ]
  },
  {
    date: "2026-07-25",
    passages: [
      {
        id: "d0725-1",
        title: "What Makes a Region Good for Startups",
        level: "★★☆",
        genre: "ビジネス",
        text: "When people think of Japanese business, they often picture Tokyo. But Japan's startup world is spreading, and different regions are becoming known for different specialties. The Kansai area around Osaka, the Aichi region near Nagoya, and cities like Fukuoka and Sapporo are each attracting particular kinds of new companies, research spin-offs from universities, and foreign firms entering the market.\nWhy do certain places suit certain businesses? A region's history shapes its strengths. Areas with a long tradition of manufacturing offer skilled engineers and nearby factories, which is ideal for robotics or hardware startups. Cities with strong universities and hospitals attract biotech and medical companies. A place near ports and airports may suit businesses that trade internationally. Startups thrive where the local environment matches what they need.\nGovernment support plays a role too. Local governments compete to attract new companies by offering lower costs, office space, and programs that connect startups with investors and mentors. A city that succeeds in building a cluster in one field often finds that success feeds on itself: more talent arrives, more suppliers open, and the area becomes known as the place to be for that industry.\nThe practical lesson applies to workers and founders alike. Where you build a business, or where you look for work, matters. Choosing a location whose strengths match your goals — the right skills, customers, and support nearby — can be as important as the idea itself. In business, geography is not just a backdrop; it is part of the strategy.",
        summaryJa: "日本のビジネスというと東京を思い浮かべがちだが、スタートアップの世界は広がり、地域ごとに得意分野ができつつある。大阪圏の関西、名古屋圏の愛知、福岡や札幌などが、それぞれ特定の新興企業や大学発スピンオフ、外資を引き寄せている。ものづくりの伝統がある地域は技術者と工場が近くロボット・ハードに向き、大学・病院が強い都市はバイオ・医療を呼ぶ。港や空港に近ければ国際取引の企業に向く。自治体もコスト減・オフィス・投資家やメンターとの橋渡しで誘致を競い、一分野の集積に成功すると人材や供給業者が集まり自己強化する。どこで起業し、どこで職を探すかは重要で、強みと目標が合う立地選びはアイデアと同じくらい大切だ。ビジネスで地理は背景でなく戦略の一部だ。",
        quiz: [
          { q: "ものづくりの伝統がある地域が向くのは？", options: ["ロボットやハードウェアのスタートアップ", "農業のみ", "観光のみ"], answer: 0 },
          { q: "自治体がスタートアップ誘致で提供するものは？", options: ["コスト減・オフィス・投資家との橋渡し", "無料の休暇", "商品の販売"], answer: 0 },
          { q: "本文の実務的教訓は？", options: ["強みと目標が合う立地選びはアイデアと同じくらい大切", "立地は関係ない", "東京以外では起業できない"], answer: 0 }
        ]
      },
      {
        id: "d0725-2",
        title: "Tiny Brains Grown in the Lab",
        level: "★★★",
        genre: "テクノロジー",
        text: "One of the most remarkable tools in modern medicine is almost too strange to believe: miniature models of the human brain, grown in a laboratory from a patient's own cells. In a recent study, these tiny brain models revealed striking differences in how Alzheimer's-affected tissue responded to a common antidepressant — a discovery that could shape future treatments.\nHow can scientists grow a brain model? They take ordinary cells from a person — often from skin or blood — and use special techniques to turn them back into stem cells, which can become almost any kind of cell. Guided carefully, these stem cells organize themselves into small, three-dimensional clusters that mimic parts of a real brain. They are far simpler than a true brain and cannot think or feel, but they contain real human brain cells behaving in realistic ways.\nWhy is this so useful? Because studying disease in a living human brain is nearly impossible. These models let scientists watch how a disease develops and how cells react to drugs, using tissue that carries a specific patient's own genetics. That means researchers can test which treatment might work best for a particular person, moving toward truly personalized medicine.\nThere are limits and questions. The models are still simplified, results in a dish do not always match a whole body, and growing brain-like tissue raises careful ethical discussions. Scientists proceed thoughtfully, keeping the models simple and their purposes clear.\nThe broader wonder is how far biology has come. Using a few of a patient's own cells, researchers can now build a tiny, living tool to study one of the most complex objects in the universe — the human brain — and search, cell by cell, for better ways to heal it.",
        summaryJa: "現代医療の驚くべき道具の一つが、患者自身の細胞から実験室で育てる小型の脳モデルだ。最近の研究で、この小さな脳モデルが、アルツハイマーの組織がありふれた抗うつ薬にどう反応するかの顕著な違いを明かし、将来の治療に示唆を与えた。皮膚や血液の細胞を幹細胞に戻し、導いて立体の塊にすると本物の脳の一部を模す。思考や感情はないが、実際のヒト脳細胞が現実的に振る舞う。生きた人の脳での病気研究はほぼ不可能なため、これで病気の進行や薬への反応を、特定患者の遺伝情報を持つ組織で観察でき、個別化医療へ近づく。モデルは簡略で、皿の結果が全身と一致しないこともあり、倫理的議論も伴うため慎重に進める。患者の数個の細胞から、宇宙で最も複雑な脳を研究する生きた道具を作れる——生物学の到達点を示す。",
        quiz: [
          { q: "脳モデルは何から作られる？", options: ["患者自身の細胞(皮膚や血液)から", "動物の脳から", "金属から"], answer: 0 },
          { q: "脳モデルが有用な理由は？", options: ["生きた人の脳での研究がほぼ不可能だから", "脳より賢いから", "安いから"], answer: 0 },
          { q: "この技術の限界・課題に含まれるものは？", options: ["モデルは簡略で倫理的議論も伴う", "全く課題がない", "思考して感情を持つ"], answer: 0 }
        ]
      },
      {
        id: "d0725-3",
        title: "Forecasting the Melting Ice",
        level: "★★★",
        genre: "世界情勢",
        text: "Far from most people's daily lives, at the bottom of the world, lies a force that could reshape coastlines everywhere: the ice of Antarctica. Scientists have made an important advance, suggesting they may be able to reliably forecast how much Antarctic ice will melt through the middle of this century. That knowledge could give governments a vital head start in preparing for rising seas.\nWhy does Antarctic ice matter so much? Because it holds an enormous amount of frozen water. If large parts of it melt and flow into the ocean, sea levels around the world rise. Even a modest rise threatens low-lying cities, coastal farmland, and island nations, where hundreds of millions of people live. Understanding how fast this will happen is one of the most important questions in climate science.\nForecasting ice loss is extremely difficult. Ice behaves in complex ways, affected by ocean temperatures, wind, and the shape of the land beneath it. For years, predictions varied widely, making it hard for governments to plan. A more reliable forecast, even for the next few decades, is therefore a major step forward.\nWhy does better prediction help? Because preparation takes time. Building sea walls, redesigning drainage, protecting freshwater supplies, and, in some cases, planning to move communities all require years or decades of work. A clearer picture of what is coming lets societies act early, when it is cheaper and more effective, rather than scrambling in a crisis.\nThe deeper message is about the value of knowledge itself. We cannot stop all sea-level rise, but understanding it gives us the power to prepare. In facing a changing planet, good science is not just about explaining the world — it is about buying precious time to protect the people who live in it.",
        summaryJa: "多くの人の日常から遠い世界の南端に、各地の海岸線を作り変えうる力——南極の氷がある。科学者は、今世紀半ばまでの南極の氷の融解量を信頼できる形で予測できるかもしれないという重要な前進を遂げた。これは海面上昇への備えで各国に貴重な先行時間を与える。南極の氷は膨大な水を蓄え、大量に海へ流れれば世界の海面が上がる。わずかな上昇でも低地の都市・沿岸農地・島国を脅かし、数億人が暮らす。融解の速さの理解は気候科学の最重要問題の一つだ。氷は海水温・風・地形に左右され複雑で、予測は長く大きくばらつき計画が難しかった。数十年でも信頼できる予測は大きな前進だ。防潮堤・排水設計・淡水確保・移転計画は年月を要するため、早く安く効果的に動ける。科学は世界を説明するだけでなく、人々を守る貴重な時間を稼ぐ。",
        quiz: [
          { q: "南極の氷が重要な理由は？", options: ["融けて海へ流れると世界の海面が上がるから", "観光地だから", "寒いから"], answer: 0 },
          { q: "氷の融解予測が難しい理由は？", options: ["海水温・風・地形に左右され複雑だから", "誰も興味がないから", "氷が動かないから"], answer: 0 },
          { q: "より良い予測が助けになる理由は？", options: ["防潮堤などの備えは年月を要し、早く動けるから", "予測は無意味だから", "備えは不要だから"], answer: 0 }
        ]
      },
      {
        id: "d0725-4",
        title: "The Ups and Downs of Public Opinion",
        level: "★★☆",
        genre: "日本",
        text: "In a democracy, leaders live and die by public opinion, and that opinion can change quickly. Recent polls in Japan showed support for the government falling several points in a single month, with one survey putting approval near half after it had been higher before. Numbers like these are watched closely, because they shape what a government can and cannot do.\nWhy does approval rise and fall? Many things move it. A strong economy, successful policies, or skillful handling of a crisis can lift a leader's support. Rising prices, scandals, unpopular decisions, or a sense that promises are not being kept can pull it down. Because voters react to daily events, approval ratings can swing based on the news of the moment, not only on long-term results.\nApproval ratings matter for practical reasons. A popular government finds it easier to pass laws, because other politicians want to be on the winning side. A government losing support may struggle to act boldly, fearing further backlash, and rivals grow more confident. In this way, public opinion becomes a kind of political currency — one that can be spent on difficult decisions but also quickly lost.\nThere is a lesson here about leadership in any field, not just politics. Trust and support are powerful but fragile. They are built slowly through consistent results and honest communication, yet can fall fast when people feel let down. Leaders — of countries, companies, or teams — who understand this treat public confidence as something to be earned again and again, never simply assumed.",
        summaryJa: "民主主義では指導者は世論に生かされ滅ぼされ、世論は素早く変わる。日本の最近の世論調査で、政権支持率が一か月で数ポイント下がり、以前より高かった支持が半分近くになったものもあった。この数字は政府にできること・できないことを左右するため注視される。支持は、好景気・成功した政策・危機対応で上がり、物価高・不祥事・不人気な決定・約束不履行の感覚で下がる。有権者は日々の出来事に反応するため、長期成果でなくその時のニュースで揺れる。人気の政権は他の政治家が勝ち馬に乗りたがり法案を通しやすく、支持を失う政権は反発を恐れ大胆に動けず、対立勢力が勢いづく。世論は難しい決定に使えるが素早く失う「政治的通貨」だ。信頼と支持は強力だが脆く、着実な成果と誠実な対話で少しずつ築かれ、失望で速く崩れる——政治に限らず指導の教訓だ。",
        quiz: [
          { q: "支持率が下がる要因として挙げられていないものは？", options: ["物価高や不祥事", "約束の不履行", "良い天気が続くこと"], answer: 2 },
          { q: "支持率が政府に実務上重要な理由は？", options: ["人気があると法案を通しやすいから", "数字が面白いから", "無関係だから"], answer: 0 },
          { q: "本文の指導の教訓は？", options: ["信頼は着実な成果と誠実な対話で築かれ、失望で速く崩れる", "支持は永久に続く", "対話は不要"], answer: 0 }
        ]
      },
      {
        id: "d0725-5",
        title: "The Hidden Cost of Sweet Drinks",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "A cold, sweet drink on a hot day feels harmless — even refreshing. But a long-term study following people for twenty-five years found that frequently drinking soda, sports drinks, and fruit juice, especially starting in childhood, was linked to a higher risk of high blood pressure in adulthood. The finding is a reminder that small daily habits can have large effects over time.\nWhy would sweet drinks affect blood pressure decades later? Scientists point to several possible reasons. These drinks contain large amounts of sugar, which can lead to weight gain, and excess weight is a known cause of high blood pressure. Sugary drinks may also affect the body's handling of salt and blood vessels in ways that raise pressure over the years. And habits formed in childhood tend to last, so a child who drinks a lot of sweet beverages often becomes an adult who does the same.\nHigh blood pressure matters because it is a major cause of heart disease and stroke, two of the leading causes of death worldwide. Often it has no symptoms for years, quietly damaging the body — which is why it is sometimes called a 'silent' condition. Small changes early in life can lower the risk significantly.\nThe study points to simple, practical choices. Water is the healthiest everyday drink, and even fruit juice, though it sounds healthy, is high in sugar and best enjoyed in moderation. Helping children develop a taste for less sweet drinks may protect their health for decades.\nThe wider lesson is about the power of habits repeated over time. A single sweet drink does no harm, but the same choice made daily for years can quietly shape our health. Understanding this helps us see everyday decisions not as isolated moments, but as small investments — for better or worse — in the person we will become.",
        summaryJa: "暑い日の冷たい甘い飲み物は無害に、むしろ爽やかに感じる。だが25年追跡した研究で、特に子ども時代から炭酸飲料・スポーツドリンク・果汁を頻繁に飲むことが、成人後の高血圧リスク上昇と関連すると分かった。小さな日々の習慣が長期に大きな影響を持つと気づかせる。理由として、多量の糖が体重増を招き高血圧の要因になること、塩の処理や血管への影響、子ども時代の習慣が続きやすいことが挙げられる。高血圧は心臓病・脳卒中の主因で、長年無症状で体を蝕むため「沈黙の」状態と呼ばれる。早期の小さな変化でリスクを下げられる。水が最も健康的で、健康的に聞こえる果汁も糖が多くほどほどが良い。子どもが甘さ控えめの飲み物を好むようにすれば数十年の健康を守れる。一杯は無害でも、毎日の同じ選択が健康を静かに形づくる——日々の決定は「なりたい自分への小さな投資」だ。",
        quiz: [
          { q: "25年の研究が示した関連は？", options: ["甘い飲み物の頻繁な摂取と成人後の高血圧リスク", "甘い飲み物と視力", "甘い飲み物と身長"], answer: 0 },
          { q: "高血圧が「沈黙の」状態と呼ばれる理由は？", options: ["長年無症状で体を蝕むから", "音がするから", "すぐ治るから"], answer: 0 },
          { q: "本文が勧める選択は？", options: ["水を基本にし、果汁もほどほどにする", "甘い飲み物を増やす", "水を避ける"], answer: 0 }
        ]
      }
    ]
  },
  {
    date: "2026-07-24",
    passages: [
      {
        id: "d0724-1",
        title: "Two Sides of a Changing Economy",
        level: "★★★",
        genre: "ビジネス",
        text: "Japan's economy is sending two very different signals at once, and reading them together tells an important story. On one hand, this year's wage talks produced a third straight year of pay increases above five percent — a strong sign after decades of nearly flat wages. On the other hand, business bankruptcies in the first half of the year reached their highest level since 2022, partly because of a weak yen that raised the cost of imported goods.\nHow can both be true? Because an economy is never a single number; it is millions of businesses and workers in different situations. Large companies with strong profits can afford generous raises, and workers in demand are winning higher pay. Meanwhile, small firms with thin margins are squeezed by rising costs for imported materials, energy, and parts. The same weak yen that helps exporters can hurt companies that must buy from abroad.\nThis split matters for anyone trying to understand the economy. A cheerful headline about rising wages and a worrying headline about rising bankruptcies are not contradictions; they are two parts of the same complex picture. Averages hide these differences, so wise observers look beneath them.\nThe deeper lesson applies to business and life. Big changes rarely help everyone equally. A shift that lifts one group — say, workers winning raises or exporters gaining from a weak yen — may pressure another at the same time. Understanding who benefits and who struggles, rather than relying on a single headline number, is the beginning of real economic insight.",
        summaryJa: "日本経済は同時に二つの異なる信号を発している。今年の賃上げは3年連続で5%超と、長年ほぼ横ばいだった後の力強い兆し。一方、上半期の企業倒産は2022年以来最多で、輸入品コストを押し上げる円安が一因だ。両立するのは、経済が単一の数字でなく多様な状況の企業・労働者の集まりだから。好業績の大企業は手厚い賃上げができ、需要の高い人材は高賃金を得る一方、利幅の薄い中小は輸入材料・エネルギー・部品の高騰に苦しむ。輸出企業を助ける円安が、海外調達の企業を痛める。賃上げの明るい見出しと倒産増の暗い見出しは矛盾でなく同じ複雑な絵の二面だ。平均は差を隠す。大きな変化が皆を等しく助けることは稀で、誰が得て誰が苦しむかを見ることが経済洞察の出発点だ。",
        quiz: [
          { q: "日本経済が同時に発している二つの信号は？", options: ["賃上げの強さと倒産の増加", "人口増と物価下落", "輸出減と輸入減"], answer: 0 },
          { q: "円安が持つ二面性とは？", options: ["輸出企業を助けるが、海外調達の企業を痛める", "全員を助ける", "誰も影響を受けない"], answer: 0 },
          { q: "本文が勧める経済の見方は？", options: ["単一の見出し数字でなく、誰が得て誰が苦しむかを見る", "平均だけを見る", "見出しを信じる"], answer: 0 }
        ]
      },
      {
        id: "d0724-2",
        title: "Biotech Against an Aging Society",
        level: "★★★",
        genre: "テクノロジー",
        text: "Japan is one of the oldest societies in the world, with a large share of its population over sixty-five. This creates enormous pressure on healthcare, but it is also driving a wave of innovation. Japanese biotech companies are becoming pioneers in two fast-growing fields: preventative medicine and precision cancer treatment.\nPreventative medicine aims to stop illness before it starts, rather than only treating people once they are sick. Using genetic testing, regular monitoring, and analysis of huge amounts of health data, doctors can identify risks early — sometimes years before symptoms appear — and help patients change their habits or begin treatment sooner. For an aging population, keeping people healthy longer is far better, and cheaper, than treating serious disease later.\nPrecision oncology is another frontier. Traditional cancer treatment often uses the same drugs for everyone with a given cancer. Precision medicine instead studies the specific genetic features of each patient's tumor, then chooses the treatment most likely to work for that individual. This can improve results and reduce harmful side effects.\nWhy is Japan pushing so hard in these fields? Necessity is part of the answer. A country facing the challenges of aging must find better, more efficient ways to keep its people healthy. That pressure turns a social problem into a driver of scientific progress.\nThe wider lesson is encouraging. Challenges that seem purely negative — like an aging population — can also spark innovation that benefits the whole world. Solutions developed in Japan to care for its older citizens may one day help aging societies everywhere, turning a national difficulty into a global contribution.",
        summaryJa: "日本は世界有数の高齢社会で、医療に大きな負担がかかる一方、それが技術革新を促している。日本のバイオ企業は、予防医療と精密がん治療という成長分野の先駆けになりつつある。予防医療は病気になってから治すのでなく発症前に防ぐことを目指し、遺伝子検査・定期モニタリング・膨大な健康データ分析で症状の何年も前にリスクを見つけ、習慣改善や早期治療につなげる。高齢社会では健康を長く保つ方が重症を後で治すより良く安い。精密腫瘍学は、患者ごとの腫瘍の遺伝的特徴を調べ最も効きそうな治療を選ぶことで効果を高め副作用を減らす。日本が力を入れるのは必要性ゆえで、高齢化という社会課題が科学の進歩を駆動する。純粋に否定的に見える課題が世界に役立つ革新を生みうる——高齢者ケアの解が、いつか世界の高齢社会を助けるかもしれない。",
        quiz: [
          { q: "予防医療の目的は？", options: ["病気を発症前に防ぐ", "病気になってから治すだけ", "薬を売ること"], answer: 0 },
          { q: "精密腫瘍学(precision oncology)の特徴は？", options: ["患者ごとの腫瘍の特徴に合わせて治療を選ぶ", "全員に同じ薬を使う", "治療をしない"], answer: 0 },
          { q: "本文の広い教訓は？", options: ["否定的に見える課題が世界に役立つ革新を生みうる", "高齢化に解決策はない", "革新は不要"], answer: 0 }
        ]
      },
      {
        id: "d0724-3",
        title: "When a Currency Loses Value",
        level: "★★★",
        genre: "世界情勢",
        text: "Money seems fixed, but the value of a currency constantly changes against others. When a country's currency 'weakens,' each unit buys less of foreign money — and that simple shift ripples through the whole economy in ways that help some people and hurt others.\nConsider a weak yen, which has affected Japan in recent years. When the yen falls against the US dollar, Japanese exporters benefit: their goods become cheaper for foreign buyers, boosting sales abroad. Tourists visiting Japan also gain, because their foreign money stretches further, which is one reason visitor numbers have surged.\nBut the same weak currency raises the cost of everything a country imports. Japan buys much of its energy, food, and raw materials from abroad, and a weak yen makes all of these more expensive. Families pay more for fuel and groceries, and companies that rely on imported parts see their costs climb. For a country that imports a great deal, a falling currency can quietly squeeze household budgets and business profits alike.\nWhy do currencies move? Many forces are involved: differences in interest rates between countries, the strength of each economy, and the decisions of millions of investors. A currency is, in a sense, a constant vote on a country's economic prospects.\nThe broader lesson is that in a connected world, no economy stands alone. The exchange rate — a single number most people rarely think about — links a nation's fortunes to the rest of the world, shaping the price of a tank of gas, a foreign holiday, and a factory's raw materials all at once. Understanding it is a key part of understanding the modern global economy.",
        summaryJa: "お金は固定に見えて、通貨の価値は他通貨に対し絶えず変わる。通貨が「弱くなる」と1単位で買える外貨が減り、その変化が経済全体に波及し、得する人と損する人を生む。近年の円安では、輸出企業は製品が海外で安くなり売上増、訪日客も外貨が有利で急増した。だが弱い通貨は輸入品すべてを高くする。エネルギー・食料・原材料の多くを輸入する日本では、燃料や食料品が高くなり、輸入部品に頼る企業のコストも上がる。輸入の多い国では通貨安が家計と企業利益を静かに圧迫しうる。通貨が動く要因は各国の金利差・経済の強さ・無数の投資家の判断で、通貨はいわば国の経済見通しへの絶え間ない投票だ。つながった世界で単独の経済はなく、為替という数字がガソリン代・海外旅行・工場の原料の価格を一度に左右する。",
        quiz: [
          { q: "通貨が「弱くなる」と何が起きる？", options: ["1単位で買える外貨が減る", "国が豊かになる", "物価が必ず下がる"], answer: 0 },
          { q: "円安で得をするのは？", options: ["輸出企業と訪日観光客", "輸入に頼る企業", "全員が損"], answer: 0 },
          { q: "本文の広い教訓は？", options: ["つながった世界で単独の経済はなく為替が多くの価格を左右する", "為替は無関係", "通貨は動かない"], answer: 0 }
        ]
      },
      {
        id: "d0724-4",
        title: "Paying for a Longer Life",
        level: "★★☆",
        genre: "日本",
        text: "Japan is famous for its long life expectancy — its people, on average, live longer than almost anyone else on Earth. This is a great achievement, the result of good healthcare, healthy diets, and safe communities. But a long-living, low-birth-rate society also creates one of the country's biggest challenges: how to support so many older citizens with a shrinking number of working-age people.\nThe math is simple but difficult. Pensions, healthcare, and elderly care are largely paid for by taxes and contributions from people who are working. When the share of retired people grows and the share of workers shrinks, each worker must support more retirees. This puts pressure on government budgets and on younger generations.\nJapan is trying many solutions at once. Some people are working later in life, staying in jobs past the traditional retirement age, which keeps their skills in use and eases the burden. Companies are using robots and automation to do more with fewer workers. The government encourages higher birth rates with support for families, and debates how to fund care fairly across generations. Immigration, long limited, is slowly being reconsidered as another way to add workers.\nNone of these alone is a complete answer. Together, they form a gradual response to a deep, slow-moving challenge.\nThe wider importance is that Japan is a preview for the world. Many countries — in Europe, East Asia, and beyond — are aging too, just a few decades behind. How Japan manages to care for its elderly while keeping its economy healthy will offer lessons, both hopeful and cautionary, for every society that will one day face the same question.",
        summaryJa: "日本は平均寿命の長さで名高く、良い医療・健康的な食事・安全な地域の成果だ。だが長寿かつ少子の社会は、減り続ける現役世代でどう多くの高齢者を支えるかという大きな課題も生む。年金・医療・介護は主に働く人の税と保険料で賄われ、引退者の割合が増え現役が減ると、一人の労働者がより多くの引退者を支えることになり、財政と若い世代を圧迫する。日本は多くの解を同時に試す——定年後も働き技能を活かす、ロボットと自動化で少人数でこなす、家族支援で出生率を促し世代間の公平な負担を議論、長く限定的だった移民も再考。どれ一つでは完全な答えにならず、合わせて緩やかな対応になる。日本は世界の先取りで、数十年遅れて高齢化する各国に、希望と警告の両方の教訓を与える。",
        quiz: [
          { q: "長寿・少子社会の課題は？", options: ["減る現役世代で多くの高齢者をどう支えるか", "人が多すぎること", "医療が悪いこと"], answer: 0 },
          { q: "日本が試している解決策に含まれないものは？", options: ["定年後も働く・自動化・家族支援", "移民の再考", "医療の廃止"], answer: 2 },
          { q: "日本が「世界の先取り」とされる理由は？", options: ["多くの国が数十年遅れて高齢化するから", "日本だけの問題だから", "高齢化は起きないから"], answer: 0 }
        ]
      },
      {
        id: "d0724-5",
        title: "Why We Sleep",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "We spend about a third of our lives asleep, yet for centuries sleep was one of the great mysteries of science. Why would nature make animals spend so much time unconscious and vulnerable? Modern research has revealed that sleep is not wasted time at all — it is when some of the body's and brain's most important work gets done.\nDuring sleep, the brain is remarkably busy. It sorts through the day's experiences, deciding what to keep and what to discard, and moves important memories into long-term storage. This is why a good night's sleep after studying helps you remember more the next day — the brain literally strengthens what you learned while you rested. Sleep also appears to clear away waste products that build up in the brain during waking hours, a kind of nightly cleaning.\nThe body benefits too. Sleep is when muscles repair, growth and healing hormones are released, and the immune system strengthens its defenses. People who sleep too little are more likely to get sick, gain weight, and struggle to concentrate.\nModern life makes good sleep harder. Bright screens, late-night work, and constant stimulation can disturb the body's natural rhythm. Scientists recommend simple habits: keep a regular schedule, avoid screens and heavy meals before bed, and treat sleep as essential, not optional.\nFor learners of any subject, including language, sleep is a secret weapon. Study in the evening, sleep well, and your brain will keep working on what you learned while you rest. Far from being lost time, sleep is one of the most productive things we do — a reminder that sometimes the best way to move forward is to stop, rest, and let the quiet work of the night do its part.",
        summaryJa: "人生の約3分の1を眠って過ごすが、睡眠は長く科学の大きな謎だった。なぜ動物は無防備に長時間眠るのか。現代研究は、睡眠が無駄でなく、体と脳の最も重要な作業が行われる時間だと明かした。睡眠中、脳は一日の経験を選別し重要な記憶を長期保存に移す——学習後によく眠ると翌日多く覚えているのは、脳が休息中に学びを強化するからだ。覚醒中にたまる老廃物を除く「夜間清掃」も行われる。体では筋肉の修復、成長・治癒ホルモンの分泌、免疫の強化が起きる。睡眠不足の人は病気・体重増・集中困難になりやすい。画面や夜更かしが良い睡眠を妨げるため、規則的な時間・就寝前の画面や大食を避ける・睡眠を必須と扱う習慣が勧められる。語学を含むあらゆる学習者にとって睡眠は秘密兵器——夜、脳は学びを働かせ続ける。時に前進の最善策は、止まって休むことだ。",
        quiz: [
          { q: "睡眠中に脳が行うことは？", options: ["記憶の選別・強化と老廃物の除去", "何もしない", "筋肉を動かす"], answer: 0 },
          { q: "睡眠不足の人に起きやすいことは？", options: ["病気・体重増・集中困難", "記憶力の向上", "免疫の強化"], answer: 0 },
          { q: "学習者にとっての睡眠の意味は？", options: ["夜も脳が学びを働かせ続ける秘密兵器", "時間の無駄", "学習と無関係"], answer: 0 }
        ]
      }
    ]
  },
  {
    date: "2026-07-23",
    passages: [
      {
        id: "d0723-1",
        title: "Economic Security Becomes Business Strategy",
        level: "★★★",
        genre: "ビジネス",
        text: "Governments used to leave trade mostly to markets: companies bought and sold across borders wherever prices were best. That era is changing. Japan's trade ministry recently published its annual white paper on the international economy, and a central theme was 'economic security' — the idea that a country must protect its access to critical goods, not just chase the lowest price.\nWhat does economic security mean in practice? It means making sure a nation can still obtain essential things — energy, food, medicine, computer chips, key minerals — even if trade is disrupted by conflict, disaster, or political pressure. For decades, efficiency ruled: companies built long global supply chains to cut costs, often depending heavily on a single country for a critical part. Recent shocks, from pandemics to geopolitical tension, revealed how fragile that model can be.\nBusinesses are now adjusting. Many are diversifying suppliers across several countries, keeping larger stockpiles of vital materials, and sometimes bringing production closer to home even when it costs more. The goal is resilience — the ability to keep operating when something goes wrong — rather than pure efficiency.\nThis shift creates both costs and opportunities. Shorter, safer supply chains can be more expensive, which may raise prices. But they also create new business for companies and countries that offer reliable, secure alternatives.\nThe broader lesson is that 'cheapest' and 'safest' are not the same, and the balance between them is shifting. For any business, understanding this new landscape — where governments increasingly treat trade as a matter of security — is becoming an essential part of long-term strategy.",
        summaryJa: "かつて政府は貿易を市場に任せ、企業は最も安い場所で国境を越えて売買した。その時代が変わりつつある。日本の通商白書の中心テーマは「経済安全保障」——最安値だけを追うのでなく、重要物資へのアクセスを守るという考えだ。エネルギー・食料・医薬・半導体・重要鉱物などを、紛争・災害・政治的圧力で貿易が乱れても確保できるようにすること。効率重視で単一国に依存した長いサプライチェーンの脆さが近年の危機で露呈した。企業は供給先の分散、重要材料の在庫増、コスト増でも国内回帰などで「効率」より「強靱性」を重視し始めた。最安と最安全は別物で、そのバランスが移りつつある——貿易を安全保障とみなす新環境の理解が長期戦略に不可欠になっている。",
        quiz: [
          { q: "「経済安全保障」の考え方は？", options: ["最安値だけでなく重要物資へのアクセスを守る", "貿易を全面禁止する", "価格を無視する"], answer: 0 },
          { q: "近年の危機が露呈させたことは？", options: ["単一国依存の長いサプライチェーンの脆さ", "効率が常に最善であること", "貿易は不要であること"], answer: 0 },
          { q: "企業が今重視し始めたのは？", options: ["効率より強靱性(レジリエンス)", "とにかく最安値", "在庫ゼロ"], answer: 0 }
        ]
      },
      {
        id: "d0723-2",
        title: "AI That Runs on Your Phone",
        level: "★★☆",
        genre: "テクノロジー",
        text: "For the past few years, most artificial intelligence has lived in giant data centers. When you ask an AI a question, your words usually travel over the internet to a distant building full of powerful computers, which send an answer back. Now a quiet shift is underway: running AI directly on the device in your hand, without needing the cloud at all.\nWhy move AI onto phones and laptops? There are several reasons. Privacy is a big one — if the AI runs on your own device, your personal data never has to leave it. Speed is another; a local AI can respond instantly, without waiting for information to travel across the internet. On-device AI also works offline, in places with no signal, and it reduces the enormous electricity costs of running everything in data centers.\nThe challenge is size. The most powerful AI models are huge, far too big to fit on a phone. So engineers are learning to shrink them — creating smaller models that keep most of the ability while using far less memory and power. Special chips designed for AI, now built into many new phones, make this possible.\nThe result is a new balance. Simple, private, everyday tasks — writing a message, summarizing a note, translating a sign — can run on your device. Complex jobs that need enormous power still go to the cloud. Together, they form a system that is faster, more private, and more efficient.\nThe broader trend is a familiar one in technology: power that once required a huge central facility gradually becomes small enough to carry in your pocket. Just as computers shrank from room-sized machines to smartphones, AI is beginning the same journey — from distant data centers toward the device in your hand.",
        summaryJa: "ここ数年、AIの多くは巨大データセンターにあり、質問は遠くの計算機群に送られ答えが返ってきた。今、手元の端末で直接AIを動かす静かな変化が進む。利点はプライバシー(個人データが端末から出ない)、速度(通信待ちなしで即応)、オフライン動作、データセンターの膨大な電力コスト削減。課題はサイズで、強力なモデルは大きすぎて携帯に載らないため、能力を保ちつつ小型化する工夫と、新型スマホ搭載のAI専用チップが鍵になる。簡単で私的な日常作業は端末上で、複雑な処理はクラウドで、という新しい役割分担が生まれる。かつて巨大施設が要った力が徐々にポケットに収まる——部屋サイズの計算機がスマホになったように、AiもデータセンターからHand の端末へ向かい始めた。",
        quiz: [
          { q: "AIを端末上で動かす利点に含まれないものは？", options: ["プライバシーと速度", "オフライン動作", "画面が大きくなる"], answer: 2 },
          { q: "端末上AIの課題は？", options: ["強力なモデルは大きすぎるので小型化が必要", "電気が使えない", "遅すぎる"], answer: 0 },
          { q: "本文が示す新しい役割分担は？", options: ["簡単で私的な作業は端末、複雑な処理はクラウド", "すべて端末で処理", "すべてクラウドで処理"], answer: 0 }
        ]
      },
      {
        id: "d0723-3",
        title: "The New Map of Global Trade",
        level: "★★★",
        genre: "世界情勢",
        text: "For decades, globalization followed a simple rule: make each product wherever it is cheapest, and ship it around the world. That map of global trade is being redrawn. Rising political tension and recent supply shocks have pushed countries to think not only about cost, but about who they trade with and how much they depend on any single partner.\nOne result is a trend sometimes called 'friend-shoring' — the idea of building supply chains among countries that trust one another, even if it is not the cheapest option. Instead of depending on a single distant factory, companies and governments increasingly want reliable partners who are unlikely to cut them off during a crisis. Trade is becoming as much about trust and security as about price.\nThis shift has winners and losers. Countries seen as stable and friendly may attract new factories and investment as companies move production to safer locations. Others may lose business they long depended on. Meanwhile, consumers may pay slightly more, because the cheapest possible supply chain is no longer always the goal.\nThere are risks in going too far. If the world splits into rival trading blocs that barely deal with each other, everyone could become poorer, since trade has lifted billions out of poverty by letting countries specialize and exchange. The challenge is to balance security with openness — reducing dangerous dependencies without abandoning the benefits of a connected world.\nThe deeper lesson is that economics and politics can never be fully separated. Trade routes are not just lines on a map of costs; they are also relationships between nations. As those relationships change, so does the map of how the world does business.",
        summaryJa: "数十年、グローバル化は「最も安い場所で作り世界へ運ぶ」という単純な原則に従った。その地図が描き直されつつある。政治的緊張と供給ショックで、各国はコストだけでなく「誰と取引し、単一の相手にどれだけ依存するか」を考え始めた。結果の一つが「フレンドショアリング」——最安でなくても信頼できる国々でサプライチェーンを築く発想だ。貿易は価格と同じくらい信頼と安全保障の問題になりつつある。安定・友好とみなされる国は投資を呼び込み、依存されてきた国は仕事を失いうる。消費者はやや高く払うことも。ただ世界が対立するブロックに分裂すれば、専門化と交換で数十億人を貧困から救った貿易の恩恵が失われ皆が貧しくなる。危険な依存を減らしつつ開放性を保つ均衡が課題だ。貿易路はコストの線であると同時に国家間の関係でもある。",
        quiz: [
          { q: "「フレンドショアリング」とは？", options: ["最安でなくても信頼できる国々で供給網を築く", "友人に商品を配る", "国内だけで生産する"], answer: 0 },
          { q: "貿易が今や何の問題になりつつあるか？", options: ["価格と同じくらい信頼と安全保障", "価格だけ", "天候だけ"], answer: 0 },
          { q: "世界が対立ブロックに分裂するリスクは？", options: ["貿易の恩恵が失われ皆が貧しくなりうる", "全員が豊かになる", "影響はない"], answer: 0 }
        ]
      },
      {
        id: "d0723-4",
        title: "The Business Behind Summer Festivals",
        level: "★★☆",
        genre: "日本",
        text: "Summer in Japan means festivals. Across the country, towns and cities hold matsuri — lively events with food stalls, music, dancing, and fireworks that light up the night sky. These festivals are beloved traditions, but they are also an important part of local economies, and keeping them alive has become a real challenge and opportunity.\nA festival brings money into a community. Visitors travel from other areas, filling hotels, restaurants, and shops. Local farmers and makers sell food and crafts. For a small town, a single famous festival can be one of the biggest economic events of the year, supporting jobs long after the fireworks fade.\nBut festivals face difficulties. Many rural towns are shrinking and aging, leaving fewer young people to carry heavy floats, perform dances, or organize the events. Rising costs and, increasingly, dangerous summer heat add further pressure. Some traditional festivals have had to shorten their schedules, change their timing, or even stop altogether.\nCommunities are responding with creativity. Some invite volunteers and tourists to take part in roles once filled only by locals. Others use social media to attract visitors from across the country and abroad. A few have adjusted their events to cope with the heat, adding shade, water stations, and cooler evening hours.\nThe deeper story is about how tradition and economics depend on each other. A festival is a cultural treasure, but it survives partly because it brings real economic value. Protecting these events means finding ways to keep them meaningful and affordable in a changing society — a small but telling example of how communities everywhere work to carry the past into the future.",
        summaryJa: "日本の夏は祭りの季節。全国の町で屋台・音楽・踊り・花火の「祭り」が開かれる。愛される伝統であると同時に地域経済の重要な柱でもあり、その存続が課題であり機会でもある。祭りは他地域からの来訪者でホテル・飲食・商店を潤し、地元の農家や作り手が食や工芸を売る。小さな町では一つの有名な祭りが年最大級の経済イベントになる。だが過疎・高齢化で担い手が減り、コスト増や危険な猛暑も重なり、日程短縮や時期変更、中止に追い込まれる祭りもある。地域はボランティアや観光客の参加、SNSでの集客、日陰・給水・夕方開催など暑さ対策で応える。伝統と経済は相互に支え合う——文化的宝である祭りが実際の経済価値ゆえに生き残る面もある。過去を未来へ運ぶ地域の営みの好例だ。",
        quiz: [
          { q: "祭りが地域にもたらすものは？", options: ["来訪者による経済効果と雇用", "騒音だけ", "経済的損失"], answer: 0 },
          { q: "祭りが直面する困難に含まれないものは？", options: ["過疎・高齢化で担い手不足", "コスト増や猛暑", "観光客が多すぎて中止"], answer: 2 },
          { q: "本文が示す深い物語は？", options: ["伝統と経済は相互に支え合う", "祭りは無意味", "経済だけが重要"], answer: 0 }
        ]
      },
      {
        id: "d0723-5",
        title: "The Science of Building Better Habits",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "Why is it so hard to start exercising, yet so easy to check your phone a hundred times a day? The answer lies in how the brain forms habits — automatic behaviors that we repeat with little conscious thought. Understanding the science of habits can help anyone, including language learners, build routines that actually stick.\nScientists describe a habit as a loop with three parts: a cue, a routine, and a reward. The cue is a trigger — a time, a place, or a feeling. The routine is the behavior itself. The reward is the good feeling that follows, which teaches the brain to repeat the loop. Checking your phone is a strong habit because the cue (boredom) is constant and the reward (something new) comes instantly. Exercise is weaker because the reward often comes only later.\nThis science offers practical tools. To build a good habit, make the cue obvious and the reward quick. Attach a new habit to an existing one — for example, 'after I pour my morning coffee, I will study English for ten minutes.' Start small, because tiny habits are easy to repeat, and repetition is what makes a behavior automatic. To break a bad habit, remove the cue or replace the routine with a better one that gives a similar reward.\nThe most important lesson is about consistency over intensity. A short activity done every day beats a long one done rarely, because habits are built by repetition, not by occasional bursts of effort. For learning a language, this is especially true: ten minutes of daily practice, tied to a reliable cue, will beat a three-hour session once a month.\nHabits are the quiet architecture of our lives. By understanding how they form, we can design routines that carry us, almost effortlessly, toward the things we want to achieve.",
        summaryJa: "運動を始めるのは難しいのに、スマホは1日に何百回も見てしまうのはなぜか。答えは脳の習慣の仕組みにある。習慣は「きっかけ→行動→報酬」のループで、報酬が良い感覚を与えるとループが繰り返される。スマホは退屈というきっかけが常にあり報酬(新しい情報)が即座に来るため強い習慣に、運動は報酬が後回しなので弱い。良い習慣を作るにはきっかけを明確に・報酬を早くし、既存の習慣に紐づけ(「朝コーヒーを注いだら英語を10分」)、小さく始めて反復する。悪い習慣はきっかけを除くか、似た報酬の良い行動に置き換える。最重要は「強度より継続」——習慣は反復で作られるため、毎日10分が月1回3時間に勝る。語学は特にそうだ。習慣は人生の静かな設計図で、仕組みを理解すれば目標へ楽に運んでくれる。",
        quiz: [
          { q: "習慣の3つの部分は？", options: ["きっかけ・行動・報酬", "朝・昼・夜", "見る・聞く・話す"], answer: 0 },
          { q: "良い習慣を作るコツに含まれないものは？", options: ["既存の習慣に紐づける", "小さく始めて反復する", "報酬をなくす"], answer: 2 },
          { q: "本文の最重要の教訓は？", options: ["強度より継続——毎日10分が月1回3時間に勝る", "たまに長時間やればよい", "習慣は変えられない"], answer: 0 }
        ]
      }
    ]
  },
  {
    date: "2026-07-22",
    passages: [
      {
        id: "d0722-1",
        title: "Cleaning Up the Crowded Sky",
        level: "★★☆",
        genre: "ビジネス",
        text: "Space is getting crowded. Tens of thousands of satellites now circle the Earth, along with countless pieces of old rockets and broken equipment. This growing cloud of 'space junk' has created a new business opportunity: companies that turn space technology into commercial services to protect our increasingly busy orbit.\nWhy is this a business, and not just a science project? Because crowded orbits are a real and expensive problem. A single piece of junk, traveling faster than a bullet, can destroy a working satellite worth hundreds of millions of dollars. Satellite operators, insurers, and governments all have strong reasons to pay for solutions that reduce this risk.\nSeveral kinds of services are emerging. Some companies track objects in orbit and warn operators when a collision is likely, so satellites can move out of the way. Others are developing spacecraft that can capture dead satellites and pull them safely out of orbit. A few even design satellites that clean up after themselves, removing themselves from orbit when their work is done.\nInternational cooperation is part of the picture too. Governments are signing agreements to work together on satellite networks and orbital safety, because space is shared by all and no single country can manage it alone.\nThe deeper lesson is a familiar one in business: today's problems create tomorrow's markets. As human activity in space grows, so does the need to manage it responsibly. The companies that build the tools to keep orbit safe are turning a challenge into an industry — and helping ensure that space stays usable for everyone.",
        summaryJa: "宇宙は混雑している。数万機の衛星と無数の宇宙ごみが地球を回り、この問題が新たなビジネスを生んだ——宇宙技術を商用サービスに変え、混み合う軌道を守る企業だ。弾丸より速いごみ一つが数億ドルの衛星を壊すため、衛星事業者・保険会社・政府には対策を買う強い動機がある。衝突警報、故障衛星の捕獲・除去、役目を終えたら自ら軌道を離れる衛星などのサービスが登場。宇宙は全員の共有物で一国では管理できず、衛星網や軌道安全での国際協力も進む。「今日の問題は明日の市場を生む」——軌道を安全に保つ道具を作る企業が、課題を産業に変え、宇宙を皆が使える状態に保つ。",
        quiz: [
          { q: "新たなビジネス機会を生んだ問題は？", options: ["宇宙ごみで軌道が混雑していること", "宇宙が寒いこと", "衛星が安すぎること"], answer: 0 },
          { q: "登場しているサービスに含まれないものは？", options: ["衝突警報", "故障衛星の捕獲・除去", "宇宙旅行の格安販売"], answer: 2 },
          { q: "本文の教訓は？", options: ["今日の問題は明日の市場を生む", "宇宙開発はやめるべき", "ごみは無害"], answer: 0 }
        ]
      },
      {
        id: "d0722-2",
        title: "A Robot Priest and the Future of AI Conversation",
        level: "★★☆",
        genre: "テクノロジー",
        text: "In Japan, a humanoid robot has been trained on vast collections of Buddhist scriptures and can now hold conversations about life and philosophy while moving and gesturing like a human priest. It may sound unusual, but it points to an important direction in artificial intelligence: machines that can discuss deep and personal subjects, not just answer simple questions.\nWhat makes this possible? Modern AI systems learn by studying enormous amounts of text. By training on centuries of religious and philosophical writing, the robot can draw on those ideas to respond thoughtfully when people ask about suffering, meaning, or how to live. Combined with a moving, gesturing body, the experience feels more human than talking to a screen.\nThe idea raises interesting questions. Can a machine truly offer comfort or wisdom, or is it only repeating patterns from the texts it studied? Many people feel that human warmth and lived experience cannot be replaced by a robot, however clever. Others point out that a patient, always-available listener — even a mechanical one — might genuinely help people who feel lonely or troubled.\nBeyond religion, the technology hints at where conversational AI is heading. Machines that can discuss emotions, ethics, and personal problems could become companions, counselors, or teachers. But such roles carry real responsibility, because people may form deep attachments to them.\nThe robot priest, then, is more than a curiosity. It is a small window into a future where we must decide, carefully, what roles we want thinking machines to play in the most human parts of our lives.",
        summaryJa: "日本で、膨大な仏教経典を学習した人型ロボットが、人間の僧侶のように動き身振りを交えて人生や哲学を語れるようになった。奇妙に見えて、AIの重要な方向——単純な質問への回答でなく、深く個人的な話題を語れる機械——を示す。現代AIは大量の文章から学び、数世紀の宗教・哲学文献を学ぶことで苦しみや意味への問いに思慮深く応じ、動く身体が画面より人間的な体験を生む。機械が本当に慰めや知恵を与えられるのか、パターンの反復にすぎないのかという問いも生む。宗教を超え、感情・倫理・悩みを語るAIは伴侶・相談役・教師になりうるが、人が深く愛着を抱くため大きな責任も伴う。人生の最も人間的な部分で機械に何を担わせるかを慎重に決める未来への窓だ。",
        quiz: [
          { q: "このロボットができることは？", options: ["経典を学び人生や哲学を語る", "料理を作る", "空を飛ぶ"], answer: 0 },
          { q: "この技術が示すAIの方向とは？", options: ["深く個人的な話題を語れる機械", "計算だけをする機械", "画面のない機械"], answer: 0 },
          { q: "本文が挙げる懸念は？", options: ["人が機械に深く愛着を抱く責任", "電気代が高いこと", "ロボットが重いこと"], answer: 0 }
        ]
      },
      {
        id: "d0722-3",
        title: "Small Nations, Big Ambitions in Space",
        level: "★★★",
        genre: "世界情勢",
        text: "Space used to belong to a handful of powerful nations. That is changing quickly. Recently, Japan and Thailand signed an agreement to cooperate on low-Earth-orbit satellite networks — a sign that more and more countries want a place in the growing space economy.\nWhy would smaller or developing nations invest in space? Because satellites have become essential tools for everyday life on the ground. They provide internet to remote villages, guide ships and planes, monitor crops and forests, warn of floods and storms, and support communication during disasters. A country that can access these services gains real advantages in its economy and safety.\nFew nations can afford to build a full space program alone, so cooperation is key. A technologically advanced country can share knowledge, equipment, and launch services, while a partner country provides funding, ground stations, or a strategic location. Both sides benefit: one extends its influence and industry, the other gains capabilities it could not build by itself.\nLow-Earth orbit — the region relatively close to the planet — is especially attractive. Satellites there are cheaper to launch and can provide fast internet and detailed images. This is why so many countries and companies are rushing to place networks of small satellites in this busy zone.\nThe broader story is about a shift in global power. Space technology, once a symbol of superpower rivalry, is becoming a shared tool for development. As more nations gain access, space is turning from an exclusive club into a crowded, cooperative, and competitive part of the world economy — with all the opportunities and challenges that brings.",
        summaryJa: "宇宙はかつて少数の大国のものだったが、急速に変わりつつある。日本とタイが低軌道衛星網での協力に合意し、より多くの国が成長する宇宙経済に加わろうとしている。衛星は遠隔地へのネット提供、船舶・航空の誘導、農地・森林の監視、防災、災害時通信など地上の生活に不可欠な道具になったからだ。単独で宇宙計画を賄える国は少なく協力が鍵で、先進国が技術・機器・打ち上げを、相手国が資金・地上局・戦略的立地を提供し双方が得をする。打ち上げが安く高速ネットや詳細画像を得られる低軌道は特に魅力的。宇宙技術は超大国の競争の象徴から発展の共有ツールへ——排他的なクラブから、協力と競争が交わる世界経済の一部へと変わりつつある。",
        quiz: [
          { q: "小国や途上国が宇宙に投資する理由は？", options: ["衛星が生活に不可欠な道具になったから", "宇宙が空いているから", "打ち上げが趣味だから"], answer: 0 },
          { q: "宇宙協力で双方が得るものは？", options: ["一方は影響力と産業、他方は単独では持てない能力", "何も得ない", "損失だけ"], answer: 0 },
          { q: "低軌道が魅力的な理由は？", options: ["打ち上げが安く高速ネットや詳細画像を得られる", "重力がないから", "誰もいないから"], answer: 0 }
        ]
      },
      {
        id: "d0722-4",
        title: "What Whales Teach Us About Health",
        level: "★★☆",
        genre: "日本",
        text: "Science often advances in unexpected places — even inside the stomachs of whales. Studying decades of records from stranded pygmy sperm whales, researchers recently discovered three previously unknown types of Helicobacter, a kind of bacteria. The finding is a reminder of how much we still have to learn from the natural world.\nHelicobacter may sound unfamiliar, but one member of this family is well known to doctors: Helicobacter pylori, a bacterium that lives in the human stomach and can cause ulcers and even cancer. Understanding how these bacteria live inside different animals helps scientists learn how they survive the harsh, acidic environment of the stomach, and how they affect the health of their hosts.\nWhy study whales for this? Because animals that are very different from us can reveal general truths about biology. If a type of bacteria has adapted to live in a whale's stomach as well as a human's, comparing the two can show what these microbes need to survive — knowledge that might one day help treat diseases in people.\nThis kind of research also depends on patient, long-term record-keeping. The discovery came from decades of careful notes about stranded whales. Without those steady records, the pattern could never have been seen.\nThe lesson reaches beyond medicine. Nature is full of hidden connections, and knowledge often comes from studying things that seem unrelated to our daily lives. A stranded whale on a distant beach may, in the end, help doctors understand a disease that affects millions of people. Curiosity about the natural world remains one of humanity's most powerful tools.",
        summaryJa: "科学は思わぬ場所——クジラの胃の中——でも進む。座礁したコマッコウの数十年の記録を調べた研究者が、未知のヘリコバクター菌3種を発見した。この仲間の一つが、胃に住み潰瘍やがんの原因になるヘリコバクター・ピロリだ。異なる動物の胃でどう生きるかを知ることは、過酷な酸性環境での生存や宿主の健康への影響の理解に役立つ。人と大きく異なる動物こそ生物学の一般法則を明かす。数十年の丁寧な記録があってこそ発見でき、無関係に見えるものの研究から知が生まれる。遠い浜のクジラが、いつか何百万人を苦しめる病の理解を助けるかもしれない——自然への好奇心は人類最強の道具の一つだ。",
        quiz: [
          { q: "研究者がクジラの胃で発見したものは？", options: ["未知のヘリコバクター菌3種", "新種の魚", "プラスチックごみ"], answer: 0 },
          { q: "ヘリコバクターの仲間で有名なものは？", options: ["胃で潰瘍やがんの原因になるピロリ菌", "風邪のウイルス", "食中毒菌のみ"], answer: 0 },
          { q: "本文の教訓は？", options: ["無関係に見えるものの研究から知が生まれる", "クジラは研究できない", "自然は無関係"], answer: 0 }
        ]
      },
      {
        id: "d0722-5",
        title: "The Everyday Foods That May Boost Vaccines",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "Vaccines are one of medicine's greatest achievements, but they do not work equally well for everyone. In older adults, whose immune systems weaken with age, vaccines often produce a smaller protective response. New research suggests that a natural compound found in ordinary foods — wheat germ, mushrooms, and aged cheese among them — may help older people build stronger protection after vaccination.\nThe compound is called spermidine, and it occurs naturally in many foods and in our own bodies. Scientists have been studying it for years because it appears to support a cellular process that helps cells clean out damaged parts and stay healthy. As we age, this process slows down, and so does the immune system's ability to respond strongly to threats — including vaccines.\nThe new findings suggest that giving the immune system more of this compound might help older cells respond more effectively, producing better protection from a vaccine. If confirmed, this could be an inexpensive and simple way to improve vaccine results in exactly the group that needs the most protection.\nCaution is important, as always in science. A promising result in the laboratory does not automatically work in every person, and no one should expect a slice of cheese to replace medical advice. Careful trials in humans are needed before firm conclusions can be drawn.\nStill, the research points to an appealing idea: that everyday nutrition and modern medicine might work together. The foods on our plates may play a larger role in our health than we realize, quietly supporting the systems that keep us well — a reminder that science often finds power in the ordinary.",
        summaryJa: "ワクチンは医学の大きな成果だが、加齢で免疫が弱る高齢者では効きが小さくなりがち。新研究は、小麦胚芽・きのこ・熟成チーズなど普通の食品に含まれる天然成分「スペルミジン」が、高齢者のワクチン後の防御を高めうると示す。この成分は、細胞が傷んだ部分を掃除して健康を保つ働きを支え、加齢で衰えるその働きと免疫応答を助ける可能性がある。確認されれば、最も守りが必要な層のワクチン効果を安価に高める手段になりうる。ただし実験室の好結果が万人に効くとは限らず、人での慎重な試験が必要で、チーズが医療の代わりにはならない。日々の栄養と現代医療が協働しうるという魅力的な発想で、科学はしばしば「ありふれたもの」に力を見いだす。",
        quiz: [
          { q: "研究が注目した天然成分は？", options: ["食品に含まれるスペルミジン", "砂糖", "塩"], answer: 0 },
          { q: "高齢者でワクチンが効きにくい理由は？", options: ["加齢で免疫の応答が弱まるから", "食べ過ぎるから", "運動しすぎるから"], answer: 0 },
          { q: "本文が促す注意点は？", options: ["実験室の結果が万人に効くとは限らず人での試験が必要", "チーズが薬の代わりになる", "栄養は健康と無関係"], answer: 0 }
        ]
      }
    ]
  },
  {
    date: "2026-07-21",
    passages: [
      {
        id: "d0721-1",
        title: "Why Startups Spread Across a Country",
        level: "★★☆",
        genre: "ビジネス",
        text: "Japan's startup scene is growing, and it is no longer only a Tokyo story. Reports say that while the capital still leads, cities such as Osaka, Nagoya, Fukuoka, and Sapporo are becoming useful bases for startups focused on specific industries, for research spin-offs from universities, and for foreign companies entering the market.\nWhy do startups cluster in particular regions? Because young companies grow best where the right ingredients already exist. A startup in robotics wants to be near factories and engineers; one in biotech wants universities and hospitals; one in food technology wants farms and processing plants. Each region develops its own strengths, and companies gather where those strengths match their needs.\nThis regional spread brings real benefits. It keeps talented graduates in their home areas instead of forcing everyone to move to the capital. It spreads economic growth more evenly across the country. And it lets each city build a specialty, becoming known for a particular kind of innovation.\nThere are still challenges. Regional hubs usually have less money from investors than the capital, fewer experienced mentors, and smaller networks. Building these takes years of patient effort by local governments, universities, and companies working together.\nThe broader lesson applies to any growing field. Success tends to concentrate where supporting resources gather — money, skills, customers, and knowledge. Understanding what a place offers, and matching your plans to its strengths, is one of the most practical decisions any business or worker can make.",
        summaryJa: "日本のスタートアップは成長し、もはや東京だけの話ではない。首都が先行しつつ、大阪・名古屋・福岡・札幌などが特定産業や大学発スピンオフ、外資参入の拠点になりつつある。若い企業は必要な要素が既にある場所で育ちやすく、ロボットなら工場と技術者の近く、バイオなら大学と病院の近くに集まる。地方分散は人材の地元定着、経済成長の平準化、都市ごとの得意分野形成という利点をもたらす。投資資金・経験あるメンター・人脈の少なさという課題は残り、産官学の地道な連携が要る。成功は資源(資金・技能・顧客・知識)が集まる場所に集中する——場所の強みに計画を合わせることが実務的な要点だ。",
        quiz: [
          { q: "スタートアップが特定地域に集まる理由は？", options: ["必要な要素(工場・大学など)が既にある場所で育ちやすいから", "家賃が無料だから", "税金がないから"], answer: 0 },
          { q: "地方分散の利点として挙げられていないものは？", options: ["人材の地元定着", "経済成長の平準化", "全企業の海外移転"], answer: 2 },
          { q: "地方拠点の課題は？", options: ["投資資金・メンター・人脈の少なさ", "土地が全くないこと", "技術者が多すぎること"], answer: 0 }
        ]
      },
      {
        id: "d0721-2",
        title: "A Cheaper Battery Made from Salt",
        level: "★★★",
        genre: "テクノロジー",
        text: "Most batteries in phones and electric cars today rely on lithium, a metal that is expensive and found in only a few places. Researchers and companies have long searched for an alternative, and one candidate is getting attention: the sodium-ion battery. Reports say a new sodium battery performs far better than expected, with quality and design features rivaling top lithium batteries.\nWhy sodium? Because it is one of the most common elements on Earth — it is part of ordinary table salt. Unlike lithium, which is concentrated in a few countries and can be costly, sodium is cheap and available almost everywhere. A battery based on sodium could be less expensive and less dependent on a small number of suppliers.\nFor years, sodium batteries had a serious drawback: they stored less energy for their weight than lithium batteries, making them too heavy for cars or phones. But steady improvements are closing that gap. Even if sodium batteries remain a little heavier, their low cost could make them ideal for uses where weight matters less — such as storing energy from solar and wind power on the electric grid.\nThis is a good example of how technology progresses. Rarely does one solution win everything. More often, different tools suit different jobs. Lithium may keep powering the lightest devices, while cheaper sodium handles large, stationary storage. The future of energy will likely rely on many kinds of batteries, each matched to the task it does best.",
        summaryJa: "スマホやEVの電池は高価で産地が限られるリチウムに依存する。代替候補として注目されるのがナトリウムイオン電池で、新型は期待を大きく上回る性能と、上位リチウム電池に迫る品質・設計を示したと報じられる。ナトリウムは食塩に含まれる地球上で最も豊富な元素の一つで、安価でほぼどこでも手に入り、少数の供給国への依存も減る。重量あたりの蓄電量が少ない弱点は改善が進み、多少重くても低コストゆえ太陽光・風力の系統蓄電など重量が問題になりにくい用途に向く。一つの解が全てを制するのは稀で、用途ごとに最適な電池が使い分けられる未来が見込まれる。",
        quiz: [
          { q: "ナトリウム電池が注目される理由は？", options: ["ナトリウムは安価でほぼどこでも手に入るから", "光るから", "軽さで圧勝だから"], answer: 0 },
          { q: "ナトリウム電池の弱点は？", options: ["重量あたりの蓄電量が少ない", "危険すぎる", "作れない"], answer: 0 },
          { q: "本文が示す技術進歩の見方は？", options: ["用途ごとに最適な電池が使い分けられる", "一つの電池が全てを制する", "電池は不要になる"], answer: 0 }
        ]
      },
      {
        id: "d0721-3",
        title: "The Race to Store Clean Energy",
        level: "★★★",
        genre: "世界情勢",
        text: "The world is building more solar panels and wind turbines than ever before. But clean energy has a stubborn problem: the sun does not always shine, and the wind does not always blow. Solving this — storing energy for when it is needed — has become one of the great challenges of the global shift to cleaner power.\nThe difficulty is one of timing. Solar panels produce the most electricity at midday, but people use the most in the evening. Wind farms may generate huge amounts overnight, when demand is low. Without a way to store that energy, much of it is simply wasted, and countries must keep fossil-fuel plants running for the hours when clean power is scarce.\nSeveral solutions are competing. Giant batteries can store electricity and release it within seconds, which is useful for short gaps. Pumped hydro storage moves water uphill when power is cheap and lets it flow down to generate electricity when needed. Newer ideas include storing energy as heat, compressed air, or even hydrogen gas. Each has strengths and weaknesses in cost, size, and how long it can hold energy.\nWhy does this matter globally? Because a country that masters energy storage can rely more on cheap, clean power and less on imported fuel. Storage turns unpredictable sun and wind into steady, dependable electricity. The nations and companies that solve it best will gain both an environmental and an economic advantage — which is why the race to store clean energy is one of the defining contests of our time.",
        summaryJa: "世界はかつてないほど太陽光・風力を増やしているが、太陽は常に照らず風も常には吹かない——「必要な時のために蓄える」ことが脱炭素の大課題だ。太陽光は正午に最も発電するが需要は夕方、風力は需要の低い夜に大量発電しうる。蓄えなければ多くが無駄になり、クリーン電力が乏しい時間帯に化石燃料発電を動かし続けねばならない。大型電池(短時間向け)、揚水発電、熱・圧縮空気・水素での貯蔵などが競合し、コスト・規模・保持時間に一長一短がある。蓄電を制する国は安いクリーン電力に頼り輸入燃料への依存を減らせるため、環境と経済の両面で優位に立つ。蓄電競争は現代を象徴する戦いだ。",
        quiz: [
          { q: "クリーンエネルギーの「頑固な問題」とは？", options: ["太陽や風が常に得られず、蓄える必要があること", "発電しすぎること", "誰も使わないこと"], answer: 0 },
          { q: "蓄電の解決策として挙げられていないものは？", options: ["大型電池や揚水発電", "熱・圧縮空気・水素での貯蔵", "電気を捨てること"], answer: 2 },
          { q: "蓄電を制する国が得る優位は？", options: ["環境と経済の両面での優位", "軍事力のみ", "優位はない"], answer: 0 }
        ]
      },
      {
        id: "d0721-4",
        title: "Satellites Made of Wood",
        level: "★★☆",
        genre: "日本",
        text: "When you imagine a satellite, you probably picture shining metal and gold foil. Japanese researchers are exploring a surprising alternative: satellites made partly from wood. The idea sounds almost like a joke, but it addresses a real and growing problem in space.\nThe problem is space junk. Thousands of satellites now orbit the Earth, and when they stop working, many burn up as they fall back into the atmosphere. Metal satellites, when they burn, can release tiny particles that may harm the upper atmosphere. As the number of satellites grows into the tens of thousands, these effects could add up.\nWood offers a clever solution. A wooden satellite would burn up more cleanly when it re-enters the atmosphere, leaving less harmful material behind. Wood is also surprisingly tough in the vacuum of space, where there is no oxygen or moisture to rot it. Early experiments have tested small wooden satellites to see how the material survives the harsh conditions of orbit.\nThere are limits, of course. Wood cannot replace metal for every part; electronics, engines, and structural frames still need traditional materials. But using wood where possible could make satellites cleaner and cheaper.\nThe deeper lesson is about creative problem-solving. Faced with the challenge of space pollution, researchers did not only look for high-tech fixes; they reconsidered one of humanity's oldest materials. Sometimes progress comes not from inventing something entirely new, but from seeing an old, familiar thing in a completely fresh way.",
        summaryJa: "衛星というと輝く金属と金箔を思い浮かべるが、日本の研究者は一部を木で作る衛星を探究している。冗談のようで、宇宙ごみという現実の問題に応える発想だ。多数の衛星が寿命後に大気圏で燃え尽きる際、金属は上層大気を害しうる微粒子を出す恐れがあり、衛星が数万機に増えると影響が積み重なる。木製衛星は再突入時によりクリーンに燃え、有害物質が少ない。真空の宇宙は酸素も水分もなく木は腐らず意外に丈夫で、小型木製衛星の実験も行われた。電子機器やエンジンは金属が要り全ては置き換えられないが、可能な範囲での木材利用で衛星をよりクリーンで安価にできる。人類最古の素材を新しい目で見直す創造的問題解決の好例だ。",
        quiz: [
          { q: "木製衛星が応えようとする問題は？", options: ["宇宙ごみと再突入時の大気への影響", "衛星の色", "電池の重さ"], answer: 0 },
          { q: "木が宇宙で意外に丈夫な理由は？", options: ["真空で酸素も水分もなく腐らないから", "金属より重いから", "光るから"], answer: 0 },
          { q: "本文が示す教訓は？", options: ["古い素材を新しい目で見直す創造的問題解決", "新素材だけが進歩を生む", "木は宇宙に使えない"], answer: 0 }
        ]
      },
      {
        id: "d0721-5",
        title: "Making Cosmic Dust in a Glass Tube",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "Everything around you — your body, this planet, the air you breathe — is made from atoms that were once scattered through space as cosmic dust. Now researchers have managed to create this cosmic dust from scratch, recreating space-like conditions inside glass tubes in a laboratory. It is a small experiment with very large implications.\nCosmic dust is made of tiny grains, far smaller than a speck of household dust, floating in the vast space between stars. These grains are important because they are the building blocks of planets. Over millions of years, dust clumps together, forming larger and larger pieces until, eventually, worlds like Earth are born. Understanding how the first grains form is a key step in understanding where planets — and life — come from.\nStudying real cosmic dust is extremely hard, because it exists far away and forms over enormous timescales. So scientists brought the process into the laboratory. By carefully recreating the cold, near-empty conditions of space inside sealed tubes, they watched dust grains form under controlled conditions they could measure and repeat.\nThis is the power of experiment. Rather than only observing the distant universe through telescopes, scientists can now build tiny pieces of it on a laboratory bench. Each such experiment tests our theories about how stars, planets, and eventually life came to be.\nThe wonder of it is worth pausing on. In a glass tube on Earth, researchers are recreating the very process that, billions of years ago, began building the world we live in. It is a reminder that the story of the cosmos and the story of ourselves are, in the end, the same story.",
        summaryJa: "あなたの体も地球も空気も、かつて宇宙に漂う「宇宙塵」だった原子からできている。研究者がガラス管の中に宇宙のような環境を再現し、宇宙塵をゼロから作り出すことに成功した。宇宙塵は星間空間に漂う微細な粒で、数百万年かけて集まり惑星の材料になる。最初の粒がどうできるかの理解は、惑星や生命の起源に迫る鍵だ。本物の宇宙塵は遠く長い時間で形成されるため研究が難しく、科学者は冷たくほぼ真空の条件を密閉管内に再現し、制御・反復できる形で粒の形成を観察した。望遠鏡で遠い宇宙を眺めるだけでなく、実験台の上に宇宙の小片を作れる——宇宙の物語と私たち自身の物語が、結局は同じ物語だと気づかせる。",
        quiz: [
          { q: "研究者がガラス管内で作り出したものは？", options: ["宇宙塵", "本物の惑星", "新しい星"], answer: 0 },
          { q: "宇宙塵が重要な理由は？", options: ["集まって惑星の材料になるから", "光るから", "食べられるから"], answer: 0 },
          { q: "実験室で再現した理由は？", options: ["本物は遠く長い時間で形成され研究が難しいから", "宇宙に行けないから", "望遠鏡が壊れたから"], answer: 0 }
        ]
      }
    ]
  },
  {
    date: "2026-07-20",
    passages: [
      {
        id: "d0720-1",
        title: "Three Rivals Consider Joining Forces",
        level: "★★★",
        genre: "ビジネス",
        text: "Three major Japanese electronics companies are reportedly exploring a merger of their power-chip businesses. Power chips are a special kind of semiconductor that controls the flow of electricity in cars, appliances, factories, and renewable energy systems. Combining three of the world's top suppliers would create a giant in a fast-growing part of the industry.\nWhy would competitors want to join forces? The main reason is scale. Building advanced chips requires enormous investment in factories and research — costs so high that even large companies struggle to keep up alone. By merging, the companies can share these costs, avoid duplicating effort, and invest more in future technology. A single strong player can also compete better against big foreign rivals.\nThere is a national angle too. Governments increasingly see chips as strategic, wanting reliable domestic suppliers rather than depending entirely on other countries. A merged company would strengthen Japan's position in a technology the whole economy depends on.\nMergers are not simple, however. Combining three companies means blending different cultures, systems, and teams — a process that can take years and sometimes fails. Customers may worry about reduced competition and higher prices. Regulators will examine whether the deal is fair to the market.\nFor students of business, the story shows a key strategic choice. When an industry demands more scale than any single firm can provide, companies face a decision: keep competing alone and risk falling behind, or combine forces and gain strength while giving up some independence. It is one of the hardest and most important calls a company can make.",
        summaryJa: "日本の大手電機3社が、パワー半導体事業の統合を検討していると報じられた。パワー半導体は自動車・家電・工場・再エネで電流を制御する重要チップ。世界有数の供給3社が統合すれば、成長分野で巨大企業が生まれる。狙いは規模——巨額の設備・研究投資を分担し、重複を避け、海外勢に対抗できる。チップを戦略物資とみなす国家的観点もある。ただ3社の文化・システム統合は難しく数年かかり失敗もあり、競争減少や値上げへの懸念、規制当局の審査もある。単独では足りない規模が要る産業で「単独で戦うか、力を合わせて独立性を一部手放すか」という重要な戦略判断を示す。",
        quiz: [
          { q: "パワー半導体とは？", options: ["自動車や家電などで電流を制御するチップ", "写真を撮るチップ", "音を出す部品"], answer: 0 },
          { q: "競合が統合を検討する主な理由は？", options: ["巨額の投資コストを分担し規模を得るため", "従業員を減らすため", "工場を閉じるため"], answer: 0 },
          { q: "統合の難しさとして挙げられていないものは？", options: ["異なる文化・システムの統合", "競争減少や規制審査", "電気が使えなくなること"], answer: 2 }
        ]
      },
      {
        id: "d0720-2",
        title: "Linking Light and Magnetism",
        level: "★★★",
        genre: "テクノロジー",
        text: "Scientists have reported a quantum breakthrough that links light and magnetism inside materials only a few atoms thick. It sounds abstract, but connecting these two forces could open new paths for the computers and devices of the future.\nLight and magnetism are both fundamental parts of nature, but they usually do not interact strongly. Light carries energy and information at incredible speed; magnetism is how we store data on hard drives and how many sensors work. If we could make light control magnetism, or magnetism shape light, inside a tiny material, we could combine the best of both — fast communication and stable storage — in a single system.\nThe key is the use of extremely thin materials, sometimes just one layer of atoms. At that scale, the normal rules soften and quantum effects take over, allowing forces to interact in ways impossible in ordinary bulk materials. Researchers have been building a whole family of these atom-thin materials, each with surprising powers, ever since the discovery of graphene.\nThe potential uses are exciting but still distant. Devices that manage information with both light and magnetism could be faster and use less energy than today's electronics. Some scientists also see links to quantum computing, where controlling delicate quantum states is essential.\nAs always with early research, patience is required. Effects shown in a laboratory must be made reliable, scalable, and affordable before they change the products we use. But each new way of connecting nature's forces expands the toolbox from which tomorrow's technology will be built.",
        summaryJa: "原子数個分の薄い材料の中で「光と磁気」を結びつける量子的成果が報告された。光は高速で情報を運び、磁気はデータ保存やセンサーに使われるが、通常は強く相互作用しない。ごく薄い材料では量子効果が支配的になり、光で磁気を操る等が可能になれば、高速通信と安定保存を一つの系に統合できる。グラフェン以来の原子薄膜材料群の一例で、より高速・低消費電力の機器や量子コンピュータへの応用が期待される。実験室の効果を信頼性・量産性・低コストにするのはこれからだが、自然の力を結ぶ新手法が未来技術の道具箱を広げる。",
        quiz: [
          { q: "今回の成果は何を結びつけた？", options: ["光と磁気", "音と熱", "水と油"], answer: 0 },
          { q: "極薄材料でこれが可能になる理由は？", options: ["量子効果が支配的になるから", "材料が重いから", "色が変わるから"], answer: 0 },
          { q: "期待される応用は？", options: ["高速・低消費電力の機器や量子コンピュータ", "新しい飲み物", "道路の舗装"], answer: 0 }
        ]
      },
      {
        id: "d0720-3",
        title: "One Year After a Tariff Deal",
        level: "★★★",
        genre: "世界情勢",
        text: "A year after a major trade agreement, reports say only about twenty percent of the investments Japan pledged to make in the United States are actually underway. The gap between promise and progress reveals an important truth about international economics: agreements are signed quickly, but real investment takes years.\nWhy the slow pace? Building factories, research centers, or supply chains is enormously complex. Companies must find land, hire workers, obtain permits, and be confident that the investment will pay off over decades. A government can announce a large number in a trade deal, but the actual spending depends on thousands of individual business decisions, each made carefully.\nTrade deals often mix politics and economics. Leaders want to show quick results, so they announce big totals. But businesses invest based on costs, demand, and stability — not on political timelines. If conditions change, or if the numbers were optimistic to begin with, real investment can lag far behind the headline figure.\nThis matters for anyone trying to understand the global economy. Big announced numbers grab attention, but the more useful question is always: how much is actually happening? Following the slow, real flow of money tells you more than the exciting figures in a signing ceremony.\nThe broader lesson applies to business and life alike. A promise is a statement of intention; progress is what actually gets done. Wise observers watch not just what is announced, but what is delivered — and understand that the distance between the two can be very large.",
        summaryJa: "大型通商合意から1年、日本が約束した対米投資のうち実際に動いているのは約2割にとどまると報じられる。合意は速く結ばれても実投資は数年かかるという国際経済の真実を示す。工場・研究所・サプライチェーンの建設は複雑で、企業は土地・人材・許認可・数十年の採算を見極める。政治は大きな数字を打ち出したがるが、企業はコスト・需要・安定性で判断し政治日程では動かない。だから「発表額」より「実際に進んでいる量」を見るべき。約束は意図の表明、進捗は実際に成されたこと——賢明な観察者は発表ではなく実現を見る。",
        quiz: [
          { q: "合意から1年で実際に動いている投資は？", options: ["約2割", "10割", "ゼロ"], answer: 0 },
          { q: "実投資が遅い理由は？", options: ["建設は複雑で数十年の採算を見極める必要があるから", "企業がやる気がないから", "お金がないから"], answer: 0 },
          { q: "本文が勧める見方は？", options: ["発表額より実際に進んでいる量を見る", "発表額だけを信じる", "投資は無視する"], answer: 0 }
        ]
      },
      {
        id: "d0720-4",
        title: "A Tourism Boom That Keeps Shifting",
        level: "★★☆",
        genre: "日本",
        text: "Japan's tourism boom continues at a remarkable pace. Reports say the number of visitors in the first half of the year topped twenty million for the second year in a row. But beneath that strong headline lies a more complicated picture: where the visitors come from is changing sharply, with a large drop in tourists from one major country balanced by growth from many others.\nThis shift carries an important business lesson about diversification. A tourism industry — or any business — that depends too heavily on customers from a single country is fragile. If political tensions, economic trouble, or changing tastes reduce travel from that one source, the whole industry suffers. When visitors come from many countries instead, a fall from one can be offset by rises from others, keeping total numbers stable.\nJapan's appeal is broad, which helps. Its food, safety, culture, nature, and cities attract travelers from across Asia, Europe, North America, and beyond. Regions once dependent mainly on visitors from nearby countries are now welcoming a wider mix, which makes the boom more resilient.\nThere are challenges alongside the benefits. Popular areas face crowding, rising prices, and strain on local life. Different visitors have different needs — languages, foods, and travel styles — so businesses must adapt. But a diverse base of customers is a strength, not a weakness.\nThe wider point reaches beyond tourism. Whether you run a hotel, a factory, or a shop, depending on one big source of income is risky. Spreading that dependence across many sources — customers, markets, or suppliers — is one of the simplest and most powerful ways to build something that lasts.",
        summaryJa: "日本の観光ブームは続き、上半期の訪日客は2年連続で2,000万人を超えた。だが好調の裏で客の出身国が大きく変化し、ある大国からの減少を他の多くの国からの増加が補っている。これは多角化という重要な教訓を示す——単一の国の客に依存する産業は脆く、多国から来れば一国の落ち込みを他が補い総数が安定する。食・治安・文化・自然・都市という幅広い魅力が助けになる。混雑や物価上昇、多様なニーズへの対応という課題はあるが、多様な客層は強みだ。ホテルでも工場でも店でも、一つの収入源への依存は危険で、依存を分散することが長続きする事業の要となる。",
        quiz: [
          { q: "上半期の訪日客数は？", options: ["2年連続で2,000万人超", "初めて100万人", "前年の半分"], answer: 0 },
          { q: "本文が示す教訓は？", options: ["単一の客に依存せず多角化する", "一国に集中すべき", "観光をやめるべき"], answer: 0 },
          { q: "客の出身が多国にわたる利点は？", options: ["一国の落ち込みを他が補い総数が安定する", "混雑がなくなる", "言語が一つで済む"], answer: 0 }
        ]
      },
      {
        id: "d0720-5",
        title: "The Wonder of Atom-Thin Materials",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "Some of the most exciting materials in science are almost nothing at all — sheets just one atom thick. The story began in 2004 with graphene, a single layer of carbon atoms famously first isolated using ordinary sticky tape to peel flakes from a pencil-like block of graphite. That simple trick launched a scientific revolution.\nWhy does thinness change everything? When a material becomes truly two-dimensional, its electrons can only move in a flat plane, and the ordinary rules of physics give way to strange quantum behavior. Graphene turned out to be stronger than steel, an excellent conductor of electricity and heat, and nearly transparent. Since then, scientists have discovered a whole family of atom-thin materials, each with its own surprising powers — some conduct, some insulate, some are magnetic, and some interact with light in unusual ways.\nThe potential uses are vast. These materials could lead to faster and more efficient electronics, flexible screens that bend without breaking, better batteries, ultra-sensitive sensors, and components for quantum computers. Because they are so thin and light, they might fit into devices where today's materials are too bulky.\nThere is still a gap between promise and product. Making these materials cheaply, in large sheets, and with few flaws remains difficult, and many laboratory wonders never reach the market. But the field keeps growing, and the toolbox of atom-thin materials keeps expanding. From a piece of sticky tape to the frontier of quantum technology, it is a reminder that some of science's biggest leaps begin with the simplest of ideas.",
        summaryJa: "科学で最も刺激的な材料の一つは、原子1個分の薄さのシートだ。始まりは2004年のグラフェン(炭素1原子層)で、鉛筆のような黒鉛から粘着テープで薄片を剥がすという単純な方法で初めて単離され、科学革命を起こした。真に2次元になると電子は平面しか動けず量子的な奇妙な性質が現れる。グラフェンは鋼より強く、電気・熱をよく通し、ほぼ透明。以来、伝導・絶縁・磁性・光との相互作用など多彩な原子薄膜材料群が見つかった。高速電子機器、曲がる画面、より良い電池、高感度センサー、量子コンピュータ部品などへの応用が期待される。安価に大面積・低欠陥で作る難しさは残るが、粘着テープから量子技術の最前線へ——最大の飛躍は最も単純な発想から始まる。",
        quiz: [
          { q: "グラフェンが最初に単離された方法は？", options: ["粘着テープで黒鉛から薄片を剥がす", "高温で溶かす", "海から採取する"], answer: 0 },
          { q: "極薄になると何が起きる？", options: ["量子的な奇妙な性質が現れる", "材料が消える", "色だけが変わる"], answer: 0 },
          { q: "原子薄膜材料の課題は？", options: ["安価に大面積・低欠陥で作るのが難しい", "軽すぎて使えない", "研究できない"], answer: 0 }
        ]
      }
    ]
  }
] };
