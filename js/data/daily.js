/* デイリー配信リーディング
 * 毎朝の自動ルーチンがこのファイルを丸ごと上書き生成する（直近 7 日分を保持）。
 * days は日付降順。各 day = { date: "YYYY-MM-DD", passages: [readingPassages と同スキーマ + genre] }
 * このファイル以外は手書きデータであり、ルーチンは触らない。
 */
window.KE_DATA = window.KE_DATA || {};

KE_DATA.dailyReading = { days: [
    {
    date: "2026-08-03",
    passages: [
      {
        id: "d0803-1",
        title: "When a Stronger Yen Worries the Market",
        level: "★★★",
        genre: "ビジネス",
        text: "Stock markets can react in surprising ways to news. On Monday, Tokyo's main stock index fell after the Japanese yen suddenly rose in value against the U.S. dollar. At first, a stronger currency might sound like good news — so why did share prices drop?\nThe answer lies in exports. Many of Japan's biggest companies, such as carmakers and electronics firms, sell much of what they make overseas. When the yen is weak, the dollars they earn abroad turn into more yen back home, boosting their profits. A weak yen had been quietly supporting these exporters for months.\nThen the currency moved the other way. Reports suggested that Japan, possibly with help from the United States, had acted to push the yen higher. A stronger yen means those same overseas sales bring in fewer yen, squeezing profits. Investors, expecting slimmer earnings, quickly sold shares in export-heavy companies, and the market fell.\nThis shows how tightly currencies and stock prices are linked. A change that helps one group can hurt another: a stronger yen makes imported food and fuel cheaper for households, but it can trouble the big exporters that drive the stock market.\nFor anyone learning business English, the lesson is worth remembering. In a connected economy, there is rarely a simple 'good' or 'bad' number. A single move in the currency market sends ripples through company profits, investor decisions, and the daily headlines that follow.",
        summaryJa: "株式市場はニュースに意外な反応を示す。月曜、円がドルに対し急上昇した後、東京の主要株価指数は下落した。一見、通貨高は良い知らせに聞こえる——ならなぜ株価は下がったのか。答えは輸出にある。自動車や電機など日本の大企業の多くは、作る物の多くを海外で売る。円安のとき、海外で稼ぐドルは国内で円に換えると増え、利益を押し上げる。円安は数か月、こうした輸出企業を静かに支えていた。ところが通貨が逆に動いた。日本が、おそらく米国の協力を得て、円を押し上げる行動を取ったと報じられた。円高は同じ海外売上をより少ない円に変え、利益を圧迫する。利益減を見込んだ投資家は輸出偏重の企業の株を素早く売り、市場は下げた。これは通貨と株価がいかに密接に結びつくかを示す。一方を助ける変化が他方を害しうる——円高は家計にとって輸入食料や燃料を安くするが、株式市場を牽引する大輸出企業を困らせうる。ビジネス英語を学ぶ人への教訓——つながった経済に、単純な「良い」「悪い」数字はめったにない。為替市場の一つの動きが、企業利益・投資家の判断・続く日々の見出しへと波紋を広げる。",
        quiz: [
          { q: "円高なのに株価が下がった理由は？", options: ["輸出企業の利益が減ると見込まれたから", "円が無価値になったから", "会社が倒産したから"], answer: 0 },
          { q: "円安が輸出企業を助けていた仕組みは？", options: ["海外で稼ぐドルが円に換えると増えるから", "輸入が増えるから", "税金が下がるから"], answer: 0 },
          { q: "本文の教訓は？", options: ["つながった経済に単純な良い・悪い数字はない", "通貨高は常に良い", "株は常に上がる"], answer: 0 }
        ]
      },
      {
        id: "d0803-2",
        title: "Designing Materials Atom by Atom",
        level: "★★★",
        genre: "テクノロジー",
        text: "Much of modern technology depends not just on clever design, but on the materials we can make. Scientists have now reported a way to build larger versions of special 'twisted' materials, while precisely controlling how their ultra-thin layers line up. It may sound abstract, but such control could shape the electronics of the future.\nWhat are these materials? Imagine stacking incredibly thin sheets, each only a few atoms thick, and then slightly rotating one layer against another. This tiny twist can dramatically change how the material behaves — how it carries electricity, responds to light, or holds magnetism. By choosing the angle carefully, researchers can unlock properties that ordinary materials do not have.\nThe problem, until now, has been size and control. These twisted materials were often tiny and hard to make consistently, which made them difficult to study or use. The new method allows larger, more uniform samples, giving scientists a better chance to understand them and, eventually, to build useful devices.\nWhy does this matter? The electronics in our phones and computers are reaching the limits of older designs. New materials with unusual properties could lead to faster, more efficient chips, better sensors, or entirely new kinds of devices.\nProgress here is slow and careful, moving one atomic layer at a time. But it points to a powerful idea: by controlling matter at the smallest scale, scientists are learning to design materials with the exact properties they want — building the foundations of tomorrow's technology from the atom up.",
        summaryJa: "現代技術の多くは、巧みな設計だけでなく、作れる素材にも左右される。科学者はこのほど、特殊な「ねじれた」素材をより大きく作り、極薄の層の重なり方を精密に制御する方法を報告した。抽象的に聞こえるが、こうした制御は未来の電子機器を形づくりうる。この素材とは何か。わずか数原子分の厚さの極薄シートを重ね、一つの層を別の層に対しわずかに回転させると想像してほしい。この小さなねじれが、電気の運び方・光への反応・磁性など、素材のふるまいを劇的に変える。角度を慎重に選ぶことで、普通の素材にない性質を引き出せる。これまでの課題は大きさと制御だった。ねじれた素材はしばしば微小で一様に作るのが難しく、研究や利用が困難だった。新手法はより大きく均一な試料を可能にし、理解と、いずれは有用なデバイス作製への好機を与える。なぜ重要か。携帯やコンピューターの電子回路は旧来の設計の限界に近づいている。珍しい性質を持つ新素材は、より速く効率的なチップ、優れたセンサー、まったく新しいデバイスにつながりうる。ここでの進歩は遅く慎重で、一原子層ずつ進む。だが強力な発想を示す——最小のスケールで物質を制御することで、科学者は望む性質を持つ素材を設計し、明日の技術の土台を原子から築くことを学びつつある。",
        quiz: [
          { q: "この素材の性質を大きく変えるものは？", options: ["極薄の層をわずかに回転させる「ねじれ」", "素材の色", "素材の重さ"], answer: 0 },
          { q: "これまでの課題は？", options: ["素材が微小で一様に作るのが難しかったこと", "素材が大きすぎたこと", "素材が安すぎたこと"], answer: 0 },
          { q: "新素材が期待される用途は？", options: ["より速く効率的なチップやセンサー", "新しい食品", "建物の塗料のみ"], answer: 0 }
        ]
      },
      {
        id: "d0803-3",
        title: "When Politics Reaches the Workplace",
        level: "★★★",
        genre: "世界情勢",
        text: "Businesses do not operate in a vacuum. When relations between two countries grow tense, companies that work across their borders often feel the effects. A recent survey showed that many Japanese firms operating in China had become more worried about business there, as political tensions between the two nations weighed on their confidence.\nWhy does politics matter so much to business? Companies that invest abroad depend on stability. They need clear rules, reliable partners, and the freedom to move goods and money. When two governments argue, new restrictions, delays, or public anger can suddenly make it harder to operate. Even the fear of such problems can cause firms to slow their plans.\nThe two countries in this case are deeply connected. China is an enormous market and a major manufacturing base, while Japan supplies advanced machines, parts, and know-how. Trade between them supports countless jobs on both sides. That is exactly why rising tension makes businesses nervous: they have a great deal to lose.\nCompanies respond in careful ways. Some spread their operations across several countries to reduce their dependence on any single one. Others wait and watch before making big new investments. Few want to leave a valuable market, but few want to bet everything on it either.\nThe wider lesson is that economics and politics cannot be separated. Behind the headlines about diplomacy are factories, workers, and customers whose daily lives are shaped, quietly but powerfully, by how well nations manage to get along.",
        summaryJa: "企業は真空の中で活動しない。二国間の関係が緊張すると、その国境をまたいで働く企業はしばしば影響を受ける。最近の調査では、中国で事業を行う多くの日本企業が、両国の政治的緊張に自信を削がれ、現地事業をより懸念するようになったと示された。なぜ政治が事業にそれほど重要か。海外投資する企業は安定に依存する。明確な規則、信頼できる相手、物や金を動かす自由が要る。二つの政府が争うと、新たな規制・遅延・世論の反発が突然、事業を難しくしうる。そうした問題への恐れだけでも、企業は計画を鈍らせうる。この二国は深く結びついている。中国は巨大な市場かつ主要な製造拠点で、日本は先端機械・部品・ノウハウを供給する。両国の貿易は双方で無数の雇用を支える。だからこそ緊張の高まりは企業を不安にさせる——失うものが大きいのだ。企業は慎重に対応する。事業を複数国に分散して単一国への依存を減らす者、大型の新規投資の前に様子を見る者もいる。価値ある市場を去りたい者は少ないが、そこに全てを賭けたい者も少ない。より広い教訓は、経済と政治は切り離せないということ。外交の見出しの背後には、国同士がどれだけうまくやれるかに、静かに、しかし強く左右される工場・労働者・顧客の日々の暮らしがある。",
        quiz: [
          { q: "調査が示した日本企業の変化は？", options: ["中国での事業をより懸念するようになった", "中国事業を全て閉じた", "懸念が完全になくなった"], answer: 0 },
          { q: "海外投資する企業が依存するものは？", options: ["安定・明確な規則・信頼できる相手", "政治的な争い", "不確実性"], answer: 0 },
          { q: "本文の広い教訓は？", options: ["経済と政治は切り離せない", "政治は事業に無関係", "貿易は不要だ"], answer: 0 }
        ]
      },
      {
        id: "d0803-4",
        title: "Making Sugar from Thin Air",
        level: "★★☆",
        genre: "日本",
        text: "In a laboratory in Osaka, a young researcher is working on an idea that sounds almost like magic: making sugar out of the air. The goal is to capture carbon dioxide — the gas that plants absorb and that also warms our planet — and turn it into sugar that could feed farm animals.\nWhy sugar, and why for animals? Livestock such as cows and pigs need large amounts of feed, and much of that feed is grown on farmland or imported from far away. As the world's population grows and extreme weather damages harvests, many people worry about future shortages of food and feed. A new, steady source of feed that does not depend on good weather or vast fields could be very valuable.\nThe science borrows from nature. Plants already turn carbon dioxide into sugar through photosynthesis, using sunlight. The researcher hopes to do something similar, but faster and in a factory, using chemical and biological tools instead of waiting for crops to grow season by season.\nThe work is still at an early stage, and many questions remain about cost, energy, and scale. Turning a clever laboratory result into something farmers can use will take years of effort.\nStill, the vision is inspiring. It combines two of the world's biggest challenges — too much carbon dioxide in the air and the need to feed a growing population — and tries to solve them together, turning a problem in the atmosphere into food on the farm.",
        summaryJa: "大阪の研究室で、若い研究者がほとんど魔法のような発想に取り組んでいる——空気から砂糖を作るのだ。目標は、植物が吸収し地球を温めもする気体・二酸化炭素を捕らえ、家畜のえさになる砂糖に変えること。なぜ砂糖で、なぜ家畜向けか。牛や豚などの家畜は大量のえさを必要とし、その多くは農地で育てるか遠方から輸入される。世界人口が増え、極端な気象が収穫を害する中、多くの人が将来の食料・飼料不足を心配する。好天や広大な畑に依存しない新たな安定した飼料源は、非常に価値がありうる。その科学は自然に学ぶ。植物は既に光合成で日光を使い二酸化炭素を砂糖に変える。研究者は似たことを、しかしより速く工場で、作物が季節ごとに育つのを待つ代わりに化学と生物の手法で行いたい。研究はまだ初期段階で、費用・エネルギー・規模に多くの問いが残る。巧みな実験結果を農家が使えるものに変えるには何年もの努力が要る。それでも構想は心を打つ。世界最大級の二つの課題——大気中の二酸化炭素の多さと、増える人口を養う必要——を結び、一緒に解こうとする。大気の問題を農場の食べ物に変えようとしているのだ。",
        quiz: [
          { q: "研究者が空気から作ろうとしているものは？", options: ["家畜のえさになる砂糖", "飲み水", "燃料の石油"], answer: 0 },
          { q: "新しい飼料源が価値を持ちうる理由は？", options: ["好天や広大な畑に依存しないから", "味が良いから", "色が美しいから"], answer: 0 },
          { q: "この研究が結びつける二つの課題は？", options: ["大気中の二酸化炭素と人口増加への食料", "戦争と平和", "電気と水"], answer: 0 }
        ]
      },
      {
        id: "d0803-5",
        title: "Poison That Could Heal",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "Nature is full of surprises, and some of its most dangerous creations may also be among its most useful. Scientists have recently worked out how two famously poisonous plants make their toxic chemicals — and those same chemicals show promise as future medicines. It is a striking reminder that in nature, poison and medicine are often two sides of the same coin.\nHow can a poison become a cure? The answer often lies in dose and target. A chemical that harms the body in large amounts may, in tiny, carefully controlled doses, do something useful — such as slowing a runaway process in a diseased cell. Many powerful medicines, including some cancer treatments and painkillers, began as toxins found in plants, animals, or fungi.\nUnderstanding how a plant builds its poison is a crucial step. Once scientists know the chemical recipe, they can try to make the substance in a laboratory, adjust it to be safer, and produce it in reliable amounts. This avoids having to harvest rare plants and allows careful testing.\nCaution is essential, of course. A promising chemical in the lab is far from a finished drug. Years of study are needed to prove that it is safe and effective in people, and many hopeful candidates never make it that far.\nStill, the research shows why protecting the natural world matters so much. Each plant, even a poisonous one, may hold chemical secrets we have not yet learned — and some of those secrets could one day help heal us.",
        summaryJa: "自然は驚きに満ち、最も危険な産物の一部は最も有用でもありうる。科学者は最近、有名な二つの毒草がどう毒性の化学物質を作るのかを解明した——そしてその同じ物質が、将来の薬として有望性を示す。自然では毒と薬がしばしば同じコインの表裏であることを、鮮やかに思い出させる。毒がどう治療になりうるのか。答えはしばしば用量と標的にある。大量では体を害する物質が、ごく微量で慎重に管理された用量では、病んだ細胞の暴走を遅らせるなど有用なことをしうる。がん治療薬や鎮痛薬を含む多くの強力な薬は、植物・動物・菌に見つかった毒として始まった。植物がどう毒を作るかの理解は重要な一歩だ。化学のレシピが分かれば、実験室で物質を作り、より安全に調整し、安定した量で生産しようと試みられる。これは希少な植物の採取を避け、慎重な試験を可能にする。もちろん慎重さが不可欠だ。実験室で有望な物質も、完成した薬にはほど遠い。人で安全かつ有効と証明するには何年もの研究が要り、多くの有望候補はそこまで到達しない。それでも研究は、自然界を守ることがなぜ重要かを示す。毒草でさえ、まだ知らない化学の秘密を秘めているかもしれず、その秘密のいくつかが、いつか私たちを癒す助けになりうるのだ。",
        quiz: [
          { q: "科学者が解明したことは？", options: ["二つの毒草がどう毒性物質を作るか", "毒草をどう食べるか", "毒草の育て方だけ"], answer: 0 },
          { q: "毒が治療になりうる鍵は？", options: ["用量と標的（微量で有用に働きうる）", "色と香り", "値段の安さ"], answer: 0 },
          { q: "本文が示す教訓は？", options: ["自然界を守ることが重要で毒草も秘密を秘める", "毒は常に無用だ", "自然は危険なだけだ"], answer: 0 }
        ]
      }
    ]
  },
    {
    date: "2026-08-02",
    passages: [
      {
        id: "d0802-1",
        title: "Japan Bets Big on Chips and AI",
        level: "★★★",
        genre: "ビジネス",
        text: "Japan is making one of its boldest economic moves in years. The government has decided to sharply increase its support for two technologies it sees as vital to the future: computer chips and artificial intelligence. This year it is spending several times more than before, aiming to rebuild the country's position as a leader in advanced technology.\nWhy such a large bet? Chips are the tiny brains inside almost every modern device, from phones to cars to factory robots. As AI spreads, demand for powerful chips is soaring, and countries worry about depending too much on others to supply them. By investing at home, Japan hopes to create jobs, strengthen its industries, and avoid being left behind.\nThe strategy has several parts. Public money is helping to build new factories and support companies working on the most advanced chips. The government has also set long-term goals for how much the industry should grow over the coming decades.\nInvestors have noticed. Japan's stock market has climbed to record highs this year, led by companies tied to semiconductors, and a weaker yen has made their exports more competitive abroad.\nThere are risks, of course. Building advanced chip factories is extremely expensive and difficult, and success is not guaranteed. But the message from Tokyo is clear: in the age of AI, Japan intends to compete at the very front, and it is willing to spend heavily to get there.",
        summaryJa: "日本は近年で最も大胆な経済判断の一つを下している。政府は、未来に不可欠と見る二つの技術——コンピューターチップとAI——への支援を大幅に増やすと決めた。今年は従来の数倍を投じ、先端技術の主導国としての地位再建を目指す。なぜ大きく賭けるのか。チップは携帯から車、工場のロボットまで、ほぼあらゆる現代機器の中の小さな頭脳だ。AIの普及で高性能チップの需要が急増し、各国は供給を他国に頼りすぎることを懸念する。国内に投資することで、日本は雇用を生み、産業を強化し、取り残されるのを避けたい。戦略は複数の柱を持つ。公的資金が新工場の建設や最先端チップに取り組む企業を支え、政府は今後数十年の産業成長の長期目標も掲げた。投資家も注目している。日本の株式市場は半導体関連企業に牽引され今年最高値を更新し、円安が輸出の競争力を高めた。もちろんリスクもある。先端チップ工場の建設は極めて高価で難しく、成功は保証されない。だが東京の発信は明確だ——AIの時代に、日本は最前線で競う意志を持ち、そのために大きく投じる用意がある。",
        quiz: [
          { q: "日本政府が支援を大幅に増やす二つの技術は？", options: ["コンピューターチップとAI", "石油と石炭", "農業と漁業"], answer: 0 },
          { q: "国内投資で日本が狙うことは？", options: ["雇用創出・産業強化・取り残されないこと", "輸入を増やすこと", "技術開発をやめること"], answer: 0 },
          { q: "今年の日本株の動きは？", options: ["半導体関連に牽引され最高値を更新", "暴落した", "全く変化しなかった"], answer: 0 }
        ]
      },
      {
        id: "d0802-2",
        title: "The Rise of Physical AI",
        level: "★★☆",
        genre: "テクノロジー",
        text: "For years, most artificial intelligence lived on screens. It answered questions, wrote text, and sorted photos, but it did not touch the world around it. That is beginning to change. A new wave of technology, sometimes called 'physical AI,' is putting intelligence into machines that can move, sense, and act in the real world.\nWhat does that look like? Think of a robot that can look at a messy shelf, recognize each item, and carefully pick it up. Or a delivery machine that finds its own way along a busy sidewalk. Instead of only processing information, physical AI combines smart software with cameras, sensors, and motors so that machines can do useful physical tasks.\nWhy is this important now? AI has become much better at understanding images and making quick decisions, while robots have grown cheaper and more capable. Putting the two together opens the door to machines that can help in factories, warehouses, hospitals, and even homes.\nThere are real challenges. The physical world is messy and unpredictable, and a small mistake by a moving machine can cause real harm. Safety, cost, and trust all matter, and progress may be slower than the excitement suggests.\nStill, the direction is striking. If the last wave of AI changed how we work with information, physical AI aims to change how machines work with the world — lifting, sorting, cleaning, and building alongside us, and reshaping many jobs in the process.",
        summaryJa: "長年、AIの多くは画面の中にいた。質問に答え、文章を書き、写真を整理したが、周囲の世界には触れなかった。それが変わり始めている。「フィジカルAI（物理的AI）」とも呼ばれる新しい波が、現実世界で動き・感じ・行動する機械に知能を吹き込んでいる。どんな姿か。散らかった棚を見て各品を認識し、丁寧に取り上げるロボット。混雑した歩道を自ら進む配送機械。情報を処理するだけでなく、フィジカルAIは賢いソフトをカメラ・センサー・モーターと組み合わせ、機械が役立つ物理的作業を行えるようにする。なぜ今重要か。AIは画像理解や素早い判断が格段に上達し、ロボットは安く高性能になった。両者を結べば、工場・倉庫・病院、さらには家庭で助ける機械への扉が開く。課題も現実的だ。物理世界は雑然として予測しにくく、動く機械の小さな誤りが実害を生みうる。安全・費用・信頼が重要で、進歩は期待より遅いかもしれない。それでも方向は鮮烈だ。前の波が情報との働き方を変えたなら、フィジカルAIは機械と世界の関わり方を変えようとしている——私たちの傍らで持ち上げ、仕分け、掃除し、作り、多くの仕事を作り替えながら。",
        quiz: [
          { q: "「フィジカルAI」とは何か？", options: ["現実世界で動き・感じ・行動する機械の知能", "画面の中だけのAI", "新しい携帯電話"], answer: 0 },
          { q: "今それが可能になった理由は？", options: ["AIの判断力向上とロボットの低価格・高性能化", "世界が単純になったから", "人間が減ったから"], answer: 0 },
          { q: "本文が挙げる課題は？", options: ["物理世界は予測しにくく誤りが実害を生む", "機械は完璧である", "現実は単純だ"], answer: 0 }
        ]
      },
      {
        id: "d0802-3",
        title: "Talking Instead of Fighting",
        level: "★★★",
        genre: "世界情勢",
        text: "When tensions rise between countries, the world often fears the worst. But recent news from the Middle East offered a reminder of a different path: instead of launching an attack, several countries pressed for talks, saying that the outline of a possible deal had been reached. Diplomacy, quiet and slow, was given a chance to work.\nWhy does this matter? War brings terrible costs — lost lives, ruined cities, and years of hardship that can last long after the fighting stops. Negotiation, by contrast, tries to find a solution that both sides can accept, even if neither gets everything it wants. It is rarely dramatic, but it can prevent enormous suffering.\nDiplomacy is hard work. It often takes place far from cameras, in long meetings where officials search for common ground. Trust must be built slowly, and a single misunderstanding can undo months of effort. Outside countries sometimes help by carrying messages or offering guarantees.\nOf course, talks can fail, and promises are not always kept. A pause in tension is not the same as lasting peace. History is full of agreements that broke down, as well as ones that held for generations.\nEven so, the willingness to talk is itself meaningful. Choosing negotiation over force, even briefly, keeps the door to a peaceful solution open. For learners watching the world, it is a useful lesson: some of the most important victories are the conflicts that never happen.",
        summaryJa: "国家間の緊張が高まると、世界はしばしば最悪を恐れる。だが最近の中東のニュースは別の道を思い出させた——攻撃を仕掛ける代わりに、複数の国が対話を強く求め、合意案の輪郭に達したと述べたのだ。静かで遅い外交に、機能する機会が与えられた。なぜ重要か。戦争は恐ろしい代償を伴う——失われる命、破壊される都市、戦闘が終わった後も長く続く苦難。対照的に交渉は、双方が全てを得られなくても受け入れられる解を探す。劇的ではないが、甚大な苦しみを防ぎうる。外交は骨の折れる仕事だ。多くはカメラから遠く、当局者が共通点を探す長い会合で行われる。信頼はゆっくり築かれ、一つの誤解が数か月の努力を無にしうる。外部の国が伝言を運んだり保証を示したりして助けることもある。もちろん交渉は決裂しうるし、約束が守られるとも限らない。緊張の休止は恒久平和と同じではない。歴史は破綻した合意も、世代を越えて保たれた合意も多く抱える。それでも、話し合おうとする意志自体に意味がある。たとえ短くとも力より交渉を選ぶことは、平和的解決への扉を開けておく。世界を見る学習者への教訓——最も重要な勝利のいくつかは、決して起きなかった対立なのだ。",
        quiz: [
          { q: "最近の中東のニュースが示した別の道とは？", options: ["攻撃の代わりに対話を求めたこと", "すぐに攻撃したこと", "何もしなかったこと"], answer: 0 },
          { q: "交渉が目指すものは？", options: ["双方が受け入れられる解を探すこと", "一方が全てを得ること", "戦争を始めること"], answer: 0 },
          { q: "本文の教訓は？", options: ["最も重要な勝利は起きなかった対立でもある", "戦争は避けられない", "交渉は無意味だ"], answer: 0 }
        ]
      },
      {
        id: "d0802-4",
        title: "Japan, the Land of Robots",
        level: "★★☆",
        genre: "日本",
        text: "Japan has long been famous for its robots, and today that reputation is becoming a real economic advantage. The country makes a large share of the world's industrial robots — the powerful machines that weld, assemble, and lift inside factories. As artificial intelligence enters the physical world, Japan hopes to turn this strength into leadership in a new field.\nWhy did robots take root so strongly in Japan? One reason is history: after decades of building cars and electronics, Japanese companies became experts in precise, reliable machines. Another reason is need. Japan's population is aging and shrinking, so there are fewer young workers, and robots help fill the gap in factories, farms, and even care homes.\nNow a new idea is taking shape. By combining its robot-building skill with modern AI, Japan aims to lead in machines that can see, decide, and act on their own. A robot arm guided by smart software can handle tasks that once needed a human touch, working safely alongside people.\nThere are challenges. Building trust in these machines takes time, and other countries are investing heavily too. Robots must be safe, affordable, and genuinely useful, not just impressive.\nStill, the fit is natural. A nation that needs more workers, and already knows how to build machines, is well placed for an age when intelligence moves into the physical world. Japan's long love of robots may turn out to be excellent preparation for the decades ahead.",
        summaryJa: "日本は長くロボットで有名だが、今日その評判が現実の経済的強みになりつつある。日本は世界の産業用ロボット——工場で溶接・組立・運搬を担う強力な機械——の大きな割合を作る。AIが物理世界に入る中、日本はこの強みを新分野の主導力に変えたい。なぜ日本でロボットが根づいたのか。一つは歴史——車や電子機器を数十年作る中で、日本企業は精密で信頼できる機械の専門家になった。もう一つは必要性だ。人口が高齢化・減少し若い働き手が減るため、ロボットが工場・農場・介護の現場で穴を埋める。今、新しい発想が形になりつつある。ロボット製造の技術と現代のAIを組み合わせ、日本は自ら見て・判断し・行動する機械で先頭に立とうとする。賢いソフトに導かれるロボットアームは、かつて人の手が要った作業を扱い、人と安全に並んで働く。課題もある。こうした機械への信頼構築には時間がかかり、他国も多額を投じている。ロボットは印象的なだけでなく、安全・手頃・本当に役立つ必要がある。それでも相性は自然だ。より多くの働き手を必要とし、既に機械の作り方を知る国は、知能が物理世界へ移る時代に有利な位置にいる。日本の長いロボット愛は、来る数十年への見事な備えとなるかもしれない。",
        quiz: [
          { q: "日本が世界で大きな割合を作っているものは？", options: ["産業用ロボット", "石油", "小麦"], answer: 0 },
          { q: "日本でロボットが根づいた理由の一つは？", options: ["人口減少で働き手が減り穴を埋める必要があるから", "国土が広いから", "若者が多すぎるから"], answer: 0 },
          { q: "本文が挙げる課題は？", options: ["機械への信頼構築に時間がかかり他国も投資している", "ロボットは全く不要だ", "日本に技術がない"], answer: 0 }
        ]
      },
      {
        id: "d0802-5",
        title: "Helping Babies Get a Healthy Start",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "In a small fishing community, researchers noticed a troubling pattern: a very high number of babies were being born too early. Around the world, premature birth — when a baby arrives weeks before its due date — remains one of the biggest challenges in newborn health. Scientists are working hard to understand why it happens and how to prevent it.\nWhy is being born early such a problem? Babies who arrive too soon may have lungs, brains, and other organs that are not fully ready for life outside the womb. With good medical care, many grow up healthy, but such care is not available everywhere, and very early birth can be dangerous.\nThe causes are complex. Poor nutrition, infections, pollution, stress, and a lack of medical care during pregnancy can all play a role, often together. In some communities, many of these problems appear at once, which may explain why premature births are especially common there.\nResearchers approach the problem step by step. They gather data, compare communities, and test simple, affordable actions — better nutrition for mothers, cleaner water, and regular check-ups during pregnancy. Small improvements can make a real difference.\nThe wider lesson reaches beyond any single village. Healthy pregnancies depend not only on medicine but on clean surroundings, good food, and steady support. By studying the places where problems are worst, scientists hope to find answers that help mothers and babies everywhere begin life with a stronger, safer start.",
        summaryJa: "小さな漁村で、研究者は憂慮すべき傾向に気づいた——非常に多くの赤ちゃんが早く生まれていたのだ。世界中で、早産——予定日より数週間早く生まれること——は新生児の健康における最大級の課題であり続ける。科学者はなぜ起きるのか、どう防ぐかの理解に懸命だ。早く生まれることがなぜ問題か。早すぎる赤ちゃんは、肺や脳など臓器が子宮の外での生活に十分準備できていないことがある。良い医療があれば多くは健康に育つが、そうした医療はどこにでもあるわけではなく、極端な早産は危険になりうる。原因は複雑だ。栄養不足、感染症、汚染、ストレス、妊娠中の医療不足がすべて、しばしば重なって作用する。いくつかの地域ではこれらの問題が一度に現れ、早産が特に多い理由を説明するかもしれない。研究者は一歩ずつ取り組む。データを集め、地域を比べ、単純で手頃な対策——母親のより良い栄養、清潔な水、妊娠中の定期健診——を試す。小さな改善が本当に違いを生む。より広い教訓は一つの村を超える。健康な妊娠は医療だけでなく、清潔な環境・良い食事・着実な支えに支えられる。問題が最も深刻な場所を研究することで、科学者は世界中の母子がより強く安全に人生を始める助けとなる答えを見つけたいと願う。",
        quiz: [
          { q: "研究者が漁村で気づいた傾向は？", options: ["多くの赤ちゃんが早く生まれていた", "魚が減っていた", "人口が増えていた"], answer: 0 },
          { q: "早産がなぜ問題になりうるのか？", options: ["臓器が子宮の外での生活に十分準備できていないことがある", "赤ちゃんが大きすぎるから", "医療が不要だから"], answer: 0 },
          { q: "研究者が試す手頃な対策は？", options: ["母親の栄養改善・清潔な水・定期健診", "何もしないこと", "村を閉じること"], answer: 0 }
        ]
      }
    ]
  },
    {
    date: "2026-08-01",
    passages: [
      {
        id: "d0801-1",
        title: "Turning Trash into Treasure",
        level: "★★☆",
        genre: "ビジネス",
        text: "For most of the last century, business followed a simple line: make a product, sell it, and let the customer throw it away. A different idea is now gaining ground, called the 'circular economy.' Instead of ending as waste, products and materials are reused, repaired, and remade — and companies are discovering that this can be good for profits as well as the planet.\nHow does waste become valuable? A worn-out phone contains gold, copper, and other useful metals. Old clothing can be turned into new fabric. Even food scraps can become fertilizer or energy. When a company recovers these materials, it buys fewer new ones, which can lower costs and reduce its dependence on unstable supplies.\nMany businesses are building this thinking into their plans. Some sell products as a service, keeping ownership and taking items back to refurbish and resell. Others design goods to be taken apart easily, so parts can be reused. A growing industry now specializes in collecting and processing what others discard.\nThere are obstacles. Recycling can be expensive, and some products are hard to take apart. New rules and better technology are often needed to make the numbers work.\nStill, the direction is clear. As raw materials grow scarcer and customers care more about the environment, treating waste as a resource is becoming smart business. The old line — make, sell, throw away — is slowly bending into a circle, where yesterday's trash becomes tomorrow's raw material.",
        summaryJa: "前世紀の大半、ビジネスは単純な道筋をたどった——作って売り、客が捨てる。いま別の考え方「サーキュラーエコノミー（循環経済）」が広がっている。製品や素材を廃棄で終わらせず、再利用・修理・再生する——そしてこれが地球だけでなく利益にも良いと企業は気づきつつある。廃棄物がどう価値になるのか。使い古した携帯には金・銅など有用な金属が入り、古着は新しい生地になり、生ごみさえ肥料やエネルギーになる。素材を回収すれば新品の購入が減り、コスト低下と不安定な供給への依存軽減につながる。多くの企業がこの発想を計画に組み込む。製品をサービスとして売り所有権を保ち、回収して再生・再販する企業、簡単に分解できるよう設計し部品を再利用する企業もある。他人が捨てる物を集め処理する産業も成長している。障害もある——リサイクルは高価で、分解が難しい製品もあり、採算を合わせるには新たな規則や技術が要る。それでも方向は明確だ。原材料が希少になり客が環境を気にかける中、廃棄物を資源と捉えることは賢い商売になりつつある。「作る・売る・捨てる」の直線は、昨日のごみが明日の原材料になる円へと、ゆっくり曲がっている。",
        quiz: [
          { q: "「循環経済」の考え方とは？", options: ["製品や素材を再利用・修理・再生する", "もっと速く捨てる", "何も作らない"], answer: 0 },
          { q: "廃棄物の回収が企業に利益をもたらす理由は？", options: ["新品の購入が減りコストや供給依存が下がるから", "ごみが無料でもらえるから", "客が自動的に増えるから"], answer: 0 },
          { q: "本文が挙げる障害は？", options: ["リサイクルは高価で分解が難しい製品もある", "廃棄物が存在しない", "素材が無限にある"], answer: 0 }
        ]
      },
      {
        id: "d0801-2",
        title: "A New Way to Recycle Plastic",
        level: "★★★",
        genre: "テクノロジー",
        text: "Plastic is one of the world's most useful materials, but also one of its biggest waste problems. Much of it is never recycled, partly because there are many different kinds, and sorting them apart is slow and expensive. Now scientists have described a new chemical process that could change this: a method that turns several common types of plastic into pure hydrogen gas — without sorting them first.\nWhy does that matter? Hydrogen is a clean fuel. When it burns or is used in a fuel cell, it produces mostly water, not the gases that warm the planet. If mixed plastic waste could be turned cheaply into hydrogen, two problems might be eased at once: less plastic piling up, and more clean energy available.\nThe process works by using chemistry to break the long molecules in plastic into simpler pieces, releasing hydrogen along the way. Because it can handle a mixture, it removes one of the hardest and most costly steps in ordinary recycling — the careful separation of different plastics.\nIt is important to stay cautious. A promising result in the laboratory does not always work at the scale of a real factory, and questions of cost, energy use, and safety must be answered first. Years of testing usually lie between a discovery and everyday use.\nStill, the idea is appealing: taking something we struggle to get rid of and turning it into something we badly need. It is a reminder that clever chemistry can open new doors in the fight against waste.",
        summaryJa: "プラスチックは世界で最も有用な素材の一つだが、最大級の廃棄物問題でもある。多くは決して再生されない——種類が多く、分別が遅く高価なことも一因だ。いま科学者が、これを変えうる新しい化学プロセスを発表した。数種類の一般的なプラスチックを、分別せずに純粋な水素ガスに変える方法だ。なぜ重要か。水素はクリーンな燃料で、燃やしても燃料電池で使っても主に水を生じ、温暖化ガスを出さない。混ざったプラスチックごみを安く水素に変えられれば、プラスチックの山が減り、クリーンエネルギーが増えるという二つの問題を同時に和らげうる。この工程は化学の力でプラスチックの長い分子を単純な断片に分解し、その過程で水素を放出する。混合物を扱えるため、通常のリサイクルで最も難しく高価な工程——異なるプラスチックの丁寧な分別——を省ける。ただし慎重さも要る。実験室の好結果が実際の工場規模で常に通用するとは限らず、費用・エネルギー・安全の問いにまず答えねばならない。発見から日常利用までには通常何年もの試験がある。それでも、捨てるのに苦労する物を、切実に必要な物へ変えるという発想は魅力的だ。巧妙な化学が廃棄物との闘いに新たな扉を開きうることを思い出させる。",
        quiz: [
          { q: "プラスチックの多くが再生されない一因は？", options: ["種類が多く分別が遅く高価だから", "有用でないから", "燃えないから"], answer: 0 },
          { q: "新プロセスがプラスチックから作るものは？", options: ["クリーンな燃料である水素", "新しいプラスチック", "金属"], answer: 0 },
          { q: "本文が促す慎重さの理由は？", options: ["実験室の結果が工場規模で常に通用するとは限らない", "化学は危険すぎる", "水素は役に立たない"], answer: 0 }
        ]
      },
      {
        id: "d0801-3",
        title: "Countries Team Up to Explore the Moon",
        level: "★★★",
        genre: "世界情勢",
        text: "Space exploration was once a contest between two superpowers. Today it looks more like a group project. Recently, space experts from India and Japan met to review progress on a shared mission to explore the Moon, a sign of how nations increasingly join forces to reach beyond Earth.\nWhy work together? Space missions are extremely expensive and technically difficult. By sharing the cost, the risk, and the knowledge, two countries can attempt things that would be hard to manage alone. One partner may build part of the spacecraft, another may provide instruments or a landing system, and both share the scientific results.\nThe Moon is a popular destination again for good reasons. Scientists want to study its surface and search for water ice, which future explorers could use for drinking or even fuel. The Moon can also serve as a testing ground for the technologies needed to travel farther, one day perhaps to Mars.\nThese partnerships are about more than science. They build trust between countries, train engineers, and grow industries that create jobs back home. A successful mission can become a source of national pride and a symbol of what cooperation can achieve.\nOf course, challenges remain. Partners must coordinate closely across languages, time zones, and different ways of working, and space is unforgiving of mistakes. Yet the trend is clear: as humanity reaches for the Moon and beyond, it is increasingly doing so hand in hand, sharing both the burdens and the rewards of exploration.",
        summaryJa: "宇宙探査はかつて二つの超大国の競争だった。今日ではむしろ共同プロジェクトに見える。最近、インドと日本の宇宙専門家が、月を探査する共同ミッションの進捗を検討するため会合した。地球の外へ届くために各国がますます力を合わせる証だ。なぜ協力するのか。宇宙ミッションは極めて高価で技術的に難しい。費用・リスク・知識を分け合えば、単独では難しいことに挑める。一方が探査機の一部を作り、他方が観測機器や着陸系を提供し、双方が科学的成果を共有する。月が再び人気の目的地なのには理由がある。科学者は表面を研究し、将来の探査者が飲料や燃料に使える水の氷を探したい。月は、いつか火星へ——より遠くへ旅する技術の試験場にもなる。こうした協力は科学以上の意味を持つ。国家間の信頼を築き、技術者を育て、母国で雇用を生む産業を成長させる。成功は国民の誇りとなり、協力が成し遂げうるものの象徴になる。もちろん課題は残る。言語・時差・仕事の進め方の違いを越えて緊密に調整せねばならず、宇宙は失敗を許さない。それでも流れは明確だ。人類は月やその先へ手を伸ばすとき、負担も報酬も分かち合いながら、ますます手を取り合って進んでいる。",
        quiz: [
          { q: "各国が宇宙で協力する理由は？", options: ["費用・リスク・知識を分け合えるから", "宇宙が安いから", "一国では危険がないから"], answer: 0 },
          { q: "科学者が月で探したいものは？", options: ["飲料や燃料に使える水の氷", "金の鉱山", "新しい大陸"], answer: 0 },
          { q: "宇宙協力が科学以外にもたらすものは？", options: ["国家間の信頼・技術者育成・雇用", "戦争", "孤立"], answer: 0 }
        ]
      },
      {
        id: "d0801-4",
        title: "More Japanese Fathers Take Time Off",
        level: "★★☆",
        genre: "日本",
        text: "For the first time, more than half of new fathers working in Japan took child-care leave, according to figures for the past fiscal year. It is a striking change in a country where, not long ago, very few men stepped away from work to help raise a baby. The shift reflects new laws, company efforts, and slowly changing attitudes about family and work.\nWhy does this matter? Raising a newborn is hard, and support in the early weeks makes a real difference. When both parents can share the care, mothers recover more easily and are more likely to keep their careers, while fathers build a closer bond with their children. Families become more equal, and the pressure does not fall on one person alone.\nSeveral forces pushed the numbers up. The government strengthened rules that let fathers take leave and encouraged companies to inform employees of their rights. Some firms now treat taking leave as normal and expected, rather than a favor. Younger workers, in particular, increasingly want time with their families.\nChallenges remain. In some workplaces, men still worry that taking leave could hurt their careers, and small companies may find it harder to cover for absent staff. The length of leave men take is often still short.\nEven so, crossing the halfway mark is a milestone. It suggests that ideas about work and fatherhood in Japan are changing — and that policies, when paired with shifting attitudes, really can reshape how a society balances work and family life.",
        summaryJa: "前年度の統計で初めて、日本で働く新米父親の半数超が育児休業を取得した。少し前まで赤ちゃんの世話のために仕事を離れる男性がごくわずかだった国での、際立った変化だ。新しい法律、企業の取り組み、家庭と仕事に関する少しずつの意識変化を映している。なぜ重要か。新生児の育児は大変で、最初の数週間の支えは大きな違いを生む。両親が世話を分け合えれば、母親は回復しやすくキャリアを続けやすくなり、父親は子とより深い絆を築く。家庭はより対等になり、負担が一人に集中しない。数字を押し上げた力はいくつかある。政府は父親の休業取得を促す規則を強化し、企業に権利の周知を促した。休業を「恩恵」でなく当然のことと扱う企業もある。特に若い世代が家族との時間を望むようになっている。課題は残る。取得がキャリアに響くと心配する男性、休んだ人員を補いにくい小企業もあり、取得期間はなお短いことが多い。それでも半数超えは節目だ。仕事と父親であることをめぐる日本の考え方が変わりつつあり、政策が意識の変化と結びつけば、社会の仕事と家庭の両立の仕方を本当に作り替えうることを示している。",
        quiz: [
          { q: "日本で初めて起きた変化とは？", options: ["新米父親の半数超が育児休業を取得した", "父親が全員退職した", "育児休業が廃止された"], answer: 0 },
          { q: "両親が世話を分け合う利点は？", options: ["母親がキャリアを続けやすく父子の絆も深まる", "誰も休めなくなる", "費用が増えるだけ"], answer: 0 },
          { q: "本文が挙げる残る課題は？", options: ["キャリアへの不安や小企業の人員補充の難しさ", "男性が多すぎること", "赤ちゃんがいないこと"], answer: 0 }
        ]
      },
      {
        id: "d0801-5",
        title: "What Ancient DNA Tells Us About Ourselves",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "The story of where humans come from keeps growing more surprising. Scientists studying ancient DNA have found signs that modern people carry small pieces of genetic material from two mysterious, long-extinct groups of early humans — in addition to the Neanderthals and Denisovans already known. In other words, our ancestors mixed with more kinds of relatives than we once believed.\nHow can researchers know this? Every person's DNA is a kind of record, passed down and slightly changed over thousands of generations. By comparing the DNA of many people living today, and sometimes DNA taken from very old bones, scientists can spot unusual patterns. Some sections do not match any known group, hinting at ancestors we have not yet identified.\nWhy does this matter? These findings reshape the human family tree. They suggest that early humans did not live in neat, separate branches, but met, traveled, and had children together across the ancient world. A little of those vanished peoples still lives on inside us today.\nThe research also has practical value. Genes inherited from ancient relatives can affect how our bodies handle disease, altitude, or diet, so understanding this history may help medicine.\nThere is still much we do not know, and new discoveries may change the picture again. But that is part of the appeal. Each fragment of ancient DNA is like a sentence from a lost book, slowly helping us read the long, tangled, and deeply human story of where we all came from.",
        summaryJa: "人類がどこから来たのかという物語は、ますます驚きを増している。古代DNAを研究する科学者は、現代人が、既知のネアンデルタール人やデニソワ人に加えて、二つの謎めいた絶滅した初期人類の遺伝物質のかけらを受け継いでいる兆候を見つけた。つまり私たちの祖先は、かつて考えられていたより多くの種類の親戚と混ざり合っていた。なぜ分かるのか。人のDNAは一種の記録で、何千世代も受け継がれ少しずつ変化する。今生きる多くの人のDNAや、時に非常に古い骨から採ったDNAを比べ、科学者は珍しい模様を見つける。既知のどの集団とも一致しない部分が、まだ特定されていない祖先を示唆する。なぜ重要か。この発見は人類の家系図を描き直す。初期人類は整然と分かれた枝に住んでいたのでなく、古代世界で出会い、旅し、子をもうけたことを示す。消えた人々の一部が今も私たちの中に生きている。研究は実用的価値も持つ。古代の親戚から受け継いだ遺伝子は、病気・高地・食事への体の対応に影響しうるため、この歴史の理解は医療に役立つかもしれない。分からないことはなお多く、新発見が再び絵を変えるかもしれない。だがそれこそ魅力だ。古代DNAの断片一つ一つは失われた本の一文のようで、私たちがどこから来たのかという長く絡み合った、深く人間的な物語を少しずつ読み解かせてくれる。",
        quiz: [
          { q: "科学者が見つけた兆候とは？", options: ["現代人が未知の絶滅集団のDNAも受け継いでいる", "人類は一種類だけだった", "DNAは変化しない"], answer: 0 },
          { q: "研究者がこれを知る方法は？", options: ["多くの人や古い骨のDNAを比べ珍しい模様を見つける", "化石の色を見る", "推測だけで決める"], answer: 0 },
          { q: "この発見が示すことは？", options: ["初期人類は出会い交わっていて家系図を描き直す", "人類は常に孤立していた", "祖先はただ一つだった"], answer: 0 }
        ]
      }
    ]
  },
    {
    date: "2026-07-31",
    passages: [
      {
        id: "d0731-1",
        title: "Why Governments Support Their Money",
        level: "★★★",
        genre: "ビジネス",
        text: "The value of a country's money can rise and fall quickly against other currencies, and sometimes governments step in to influence it. Recently, Japan's financial authorities are believed to have acted to strengthen the yen after it moved sharply against the U.S. dollar. This kind of action is called currency intervention.\nHow does it work? A country's central bank or treasury can buy or sell large amounts of its own currency. To make the yen stronger, for example, authorities buy yen using their reserves of foreign money. Buying increases demand, which tends to push the value up. To weaken it, they would do the opposite.\nWhy bother? The exchange rate affects the whole economy. A very weak currency makes imported goods, such as food and energy, more expensive, which can hurt households. A very strong currency can make a country's exports harder to sell abroad. Governments often want to avoid sudden, extreme swings that make it hard for businesses to plan.\nIntervention has limits. Global currency markets are enormous, trading trillions of dollars every day, so even a large government cannot control prices for long. Sometimes just the threat of action is enough to calm the market.\nFor learners of business English, the lesson is useful: money itself is a market, shaped by supply, demand, and expectations. When a government acts, it is not setting a price by force, but trying to steer a huge and restless system.",
        summaryJa: "国の通貨の価値は他通貨に対して急に上下し、政府が介入して動かすこともある。最近、日本の当局は円がドルに対し急変した後、円を強めるために動いたとみられる。これを為替介入という。仕組みは、中央銀行や財務当局が自国通貨を大量に売買すること。円を強めるには外貨準備で円を買い、需要が増えて価値が上がりやすくなる。弱めるには逆を行う。なぜか——為替レートは経済全体に影響する。極端に弱い通貨は食料やエネルギーなど輸入品を高くし家計を圧迫し、極端に強い通貨は輸出を売りにくくする。政府は企業が計画しにくい急激な変動を避けたい。ただし世界の為替市場は日々何兆ドルも取引される巨大なもので、大きな政府でも長くは価格を支配できず、介入をほのめかすだけで市場が落ち着くこともある。ビジネス英語の学習者への教訓——お金自体が需要・供給・期待で形づくられる市場であり、政府の介入は力で価格を決めるのでなく、巨大で落ち着かない仕組みを操ろうとする試みなのだ。",
        quiz: [
          { q: "為替介入とは何か？", options: ["政府や中央銀行が自国通貨を売買して価値に影響を与えること", "通貨を印刷して配ること", "銀行を閉じること"], answer: 0 },
          { q: "円を強めるために当局が行うことは？", options: ["外貨で円を買い需要を増やす", "円を大量に売る", "何もしない"], answer: 0 },
          { q: "介入の限界として本文が挙げるのは？", options: ["市場が巨大で長くは価格を支配できない", "政府は無限に介入できる", "市場は小さい"], answer: 0 }
        ]
      },
      {
        id: "d0731-2",
        title: "Building a Stronger Cyber Defense",
        level: "★★☆",
        genre: "テクノロジー",
        text: "As more of daily life moves online, protecting computer systems from attack has become a national priority. Governments now treat 'cyber defense' — the work of stopping hackers and other digital threats — as seriously as they treat protecting land, sea, and air. Recently, Japan announced a new policy focused on detecting threats early, with the goal of building one of the world's strongest cyber defenses.\nWhy is early detection so important? Many cyberattacks succeed because they go unnoticed for a long time. Intruders may quietly enter a system, watch, and steal information for weeks or months before anyone realizes. The sooner a threat is found, the less damage it can do. Modern defense therefore relies on constant monitoring, quick warnings, and fast response.\nSeveral tools help with this. Software can watch network traffic and flag unusual activity. Teams of experts study new kinds of attacks and share what they learn. Increasingly, artificial intelligence is used to spot patterns that humans might miss, sorting through huge amounts of data in seconds.\nThere are challenges. Attackers also improve their methods, and monitoring must respect people's privacy. Skilled defenders are in short supply, so training and cooperation between countries matter.\nThe larger point is that security is no longer only about physical walls and borders. In a connected world, a nation's safety depends partly on invisible defenses — the systems and people quietly working to keep networks, hospitals, and power grids running.",
        summaryJa: "生活の多くがオンラインに移るにつれ、コンピューターシステムを攻撃から守ることが国家的優先課題になった。政府は今や「サイバー防衛」——ハッカーなどのデジタル脅威を止める仕事——を陸海空の防衛と同じく重視する。日本は最近、脅威の早期検知に重点を置き、世界有数のサイバー防衛を築くという方針を発表した。なぜ早期検知が重要か——多くの攻撃は長く気づかれず成功する。侵入者は静かに入り込み、数週間から数か月も監視や情報窃取を続けることがある。早く見つけるほど被害は小さい。だから現代の防衛は常時監視・迅速な警報・速い対応に頼る。ネットワークの通信を監視して異常を示すソフト、新種の攻撃を研究し知見を共有する専門家チーム、人が見逃す模様を膨大なデータから数秒で見つけるAIが役立つ。課題もある——攻撃側も手口を高度化し、監視は人々のプライバシーを尊重せねばならず、熟練の防御者は不足しており訓練や国際協力が重要だ。要点は、安全がもはや物理的な壁や国境だけの話ではないこと。つながった世界では、国の安全は目に見えない防衛にも支えられている。",
        quiz: [
          { q: "日本の新方針が重点を置くのは？", options: ["脅威の早期検知", "攻撃をやめること", "インターネットの禁止"], answer: 0 },
          { q: "早期検知が重要な理由は？", options: ["攻撃は長く気づかれず被害を広げるから", "攻撃は無害だから", "監視は不要だから"], answer: 0 },
          { q: "本文が挙げる課題に含まれるものは？", options: ["熟練の防御者の不足とプライバシーの尊重", "防御者が多すぎること", "攻撃者がいないこと"], answer: 0 }
        ]
      },
      {
        id: "d0731-3",
        title: "Cities Learn to Beat the Heat",
        level: "★★☆",
        genre: "世界情勢",
        text: "Summers are getting hotter in many parts of the world, and cities are feeling the heat most of all. Streets, buildings, and concrete absorb sunlight during the day and release it at night, making urban areas warmer than the countryside around them. To protect residents, cities are now trying creative ways to cool down.\nIn one German city, officials recently tested a system that sprays a fine mist of chilled groundwater into the air, using equipment connected to fire hoses. The tiny droplets cool the surrounding air as they evaporate, offering relief on the hottest days. Other cities are experimenting with their own solutions.\nMany of these ideas are surprisingly simple. Planting more trees creates shade and naturally cools the air. Painting roofs white helps reflect sunlight instead of absorbing it. Adding parks, fountains, and water features gives people cool places to gather. Some cities open special 'cooling centers' where anyone can escape the heat indoors.\nWhy does this matter so much? Extreme heat is dangerous, especially for older people, young children, and those who work outdoors. During severe heat waves, the number of people who become ill can rise sharply. Keeping cities cooler is therefore a matter of health and safety, not just comfort.\nThe trend reflects a broader shift. As hot summers become more common, cities around the world are learning to adapt — redesigning streets and buildings so that millions of people can live more safely through the warmest months of the year.",
        summaryJa: "世界の多くの地域で夏はより暑くなり、都市が最も影響を受けている。道路・建物・コンクリートが日中に日光を吸収し夜に放出するため、都市は周囲の田園より暑くなる。住民を守るため、都市は今や創意工夫で涼を得ようとしている。ドイツのある都市は最近、消防ホースに接続した装置で冷たい地下水の細かい霧を空気中に噴霧する仕組みを試した。微小な水滴が蒸発しながら周囲の空気を冷やし、最も暑い日に涼をもたらす。他の都市も独自の解決策を試している。多くは驚くほど単純だ——木を増やせば日陰ができ自然に空気が冷える。屋根を白く塗れば日光を吸収せず反射する。公園・噴水・水辺は涼しい集いの場になる。屋内で暑さを避けられる「クーリングセンター」を開く都市もある。なぜ重要か——極端な暑さは、特に高齢者・幼児・屋外労働者に危険で、猛暑では体調を崩す人が急増しうる。都市を涼しく保つことは快適さだけでなく健康と安全の問題だ。暑い夏が当たり前になる中、世界の都市は街や建物を作り替え、多くの人が最も暑い時期を安全に暮らせるよう適応を学んでいる。",
        quiz: [
          { q: "都市が周囲より暑くなる理由は？", options: ["建物やコンクリートが日光を吸収し放出するから", "田園が近いから", "木が多いから"], answer: 0 },
          { q: "本文が挙げる冷却の工夫に含まれないものは？", options: ["屋根を黒く塗る", "木を植えて日陰を作る", "冷たい水の霧を噴霧する"], answer: 0 },
          { q: "都市を涼しく保つことが重要なのはなぜか？", options: ["極端な暑さは高齢者などに危険だから", "暑さは無害だから", "快適さだけの問題だから"], answer: 0 }
        ]
      },
      {
        id: "d0731-4",
        title: "Japan's Shrinking Population",
        level: "★★★",
        genre: "日本",
        text: "Japan has reached a milestone that worries many experts: its population has fallen below 120 million for the first time in over forty years. The number of people living in the country has been declining for years, and the pace is expected to continue. Behind this simple figure lies one of the biggest challenges Japan faces.\nTwo forces drive the change. First, people are having fewer children, so fewer young people are being born each year. Second, Japan has one of the longest life expectancies in the world, which means a large and growing share of the population is elderly. Together, these trends create a society with many older people and relatively few young workers.\nWhy does this matter? A smaller working-age population must support a larger number of retirees through taxes and care. Businesses may struggle to find enough workers, and some rural towns are shrinking so fast that schools and shops close. Government budgets for pensions and health care come under strain.\nJapan is responding in many ways. Some companies raise wages or use robots and automation to make up for fewer workers. The government encourages family-friendly policies and looks at ways to welcome more workers from abroad. Older people are staying in jobs longer than before.\nThere are no easy answers, and other countries are watching closely, because many face similar trends. How Japan adapts to a smaller, older population may offer lessons for much of the world in the decades ahead.",
        summaryJa: "日本は多くの専門家が憂慮する節目を迎えた——人口が40年余りで初めて1億2千万人を割った。居住人口は長年減り続け、この流れは今後も続くと見られる。この単純な数字の背後に、日本が直面する最大級の課題がある。変化を生む力は二つ。第一に子どもの数が減り、毎年生まれる若者が少ないこと。第二に日本は世界有数の長寿国で、高齢者の割合が大きく増えていること。両者が相まって、高齢者が多く若い働き手が比較的少ない社会になる。なぜ問題か——少ない現役世代が税や介護で多くの引退者を支えねばならない。企業は人手確保に苦しみ、学校や店が閉じるほど急速に縮む地方の町もある。年金や医療の予算は逼迫する。日本は多様に対応している——賃上げやロボット・自動化で人手不足を補う企業、子育て支援策や海外からの受け入れを探る政府、以前より長く働き続ける高齢者。簡単な答えはなく、同様の傾向に直面する各国が注視している。より小さく高齢化した人口に日本がどう適応するかは、今後数十年の世界の多くに教訓を与えるかもしれない。",
        quiz: [
          { q: "日本の人口減少を生む二つの力は？", options: ["出生数の減少と高齢者割合の増加", "移民の急増と出生増", "戦争と災害"], answer: 0 },
          { q: "人口減少が問題となる理由は？", options: ["少ない現役世代が多くの引退者を支える必要がある", "働き手が多すぎる", "高齢者がいない"], answer: 0 },
          { q: "日本の対応に含まれるものは？", options: ["賃上げや自動化、海外からの受け入れの検討", "何もしない", "若者の追放"], answer: 0 }
        ]
      },
      {
        id: "d0731-5",
        title: "Making Factories Ready for Earthquakes",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "When a powerful earthquake struck southern Japan this week, it raised an important question for industry: how can factories that make delicate products keep working in a land that shakes? Nowhere is this more pressing than in the region's growing hub for making computer chips, where even tiny vibrations can ruin a product.\nChip factories are extraordinarily sensitive. The circuits they build are thinner than a human hair, so machines must sit almost perfectly still. A strong quake can crack equipment, spill chemicals, and halt production for weeks — a serious problem when the whole world depends on a steady supply of chips.\nEngineers have developed clever defenses. Buildings rest on special bearings and dampers that let the ground move while the structure above stays steadier. Sensitive machines sit on platforms designed to absorb shaking. Early-warning systems can pause delicate processes automatically in the seconds before strong tremors arrive.\nPreparation also means planning for what comes after. Factories store extra materials, keep backup power ready, and practice how to restart safely once a quake has passed. Companies increasingly spread production across several sites, so that damage in one place does not stop everything.\nThe wider lesson reaches beyond Japan. As advanced manufacturing spreads to more regions, and as natural hazards remain a fact of life, building factories that can survive disasters is becoming part of good engineering. Making resilience part of the design — not an afterthought — helps keep both workers and the products they build safe.",
        summaryJa: "今週、南日本を強い地震が襲い、産業に重要な問いを突きつけた——揺れる土地で、繊細な製品を作る工場はどう稼働を保てるのか。地域で成長するコンピューターチップ製造の拠点ほど、この問いが切実な場所はない。わずかな振動でも製品を台無しにするからだ。チップ工場は極めて敏感で、人の髪より細い回路を作るため機械はほぼ完全に静止していなければならない。強い地震は装置を割り、薬品をこぼし、生産を数週間止めうる——世界がチップの安定供給に依存する中では深刻だ。技術者は巧妙な防御を編み出した。建物は特殊な支承やダンパーの上に載り、地面が動いても上の構造はより安定を保つ。敏感な機械は揺れを吸収する台に据えられる。早期警報は強い揺れの数秒前に繊細な工程を自動で止める。備えは「その後」の計画も意味する——予備の材料を蓄え、非常用電源を用意し、地震後に安全に再稼働する手順を訓練する。損害が全てを止めないよう生産を複数拠点に分散する企業も増える。教訓は日本を超える。先端製造が各地に広がり自然災害が生活の一部であり続ける中、災害に耐える工場づくりは良い工学の一部になりつつある。回復力を後付けでなく設計に組み込むことが、働く人と製品を守る。",
        quiz: [
          { q: "チップ工場が地震に弱い理由は？", options: ["わずかな振動でも繊細な製品を台無しにするから", "工場が小さいから", "電気を使わないから"], answer: 0 },
          { q: "本文が挙げる防御に含まれるものは？", options: ["建物を支承やダンパーに載せ揺れを抑える", "地震を止める", "工場を海に浮かべる"], answer: 0 },
          { q: "本文の広い教訓は？", options: ["回復力を後付けでなく設計に組み込むこと", "災害は無視できる", "工場は不要だ"], answer: 0 }
        ]
      }
    ]
  },
    {
    date: "2026-07-30",
    passages: [
      {
        id: "d0730-1",
        title: "Paying for Computing Power",
        level: "★★☆",
        genre: "ビジネス",
        text: "Building modern artificial intelligence takes an enormous amount of computing power, and that power is expensive. To train and run their systems, technology companies need thousands of specialized computer chips, huge buildings full of machines called data centers, and a great deal of electricity. Recently, several large firms have signed deals worth billions of dollars to lock in this capacity for years to come.\nWhy spend so much? Because in the AI business, computing power has become a key resource, much like oil or steel in older industries. A company that cannot get enough chips or electricity simply cannot compete. By reserving capacity early, firms protect themselves against shortages and rising prices.\nThis has created a booming market. Chip makers, electricity providers, and even satellite operators are all racing to sell their services to AI companies. Some investors are putting money into nuclear energy and new power lines, betting that demand for electricity will keep climbing.\nThere are risks, too. If a company spends heavily on computing power but its products do not sell well, it could lose a great deal of money. And using so much electricity raises questions about cost and the environment.\nStill, the pattern is clear. In today's economy, the ability to buy and manage computing power has become a serious business decision — one that can decide which companies lead the AI age and which fall behind.",
        summaryJa: "現代のAI構築には膨大な計算能力が必要で、それは高価だ。企業は数千個の専用チップ、データセンター、大量の電力を要し、近年は数十億ドル規模の契約で数年分の能力を確保している。AIビジネスでは計算能力が石油や鉄のような重要資源となり、チップや電力を十分得られない企業は競争できない。早期の確保は不足や価格上昇への備えになる。チップメーカー・電力会社・衛星事業者がAI企業への販売を競い、原子力や送電網に投資する動きもある。一方、大金を投じても製品が売れなければ大損しうるし、大量の電力は費用と環境の問題も生む。それでも計算能力を買い、管理する力は、AI時代の勝者を左右する重大な経営判断になっている。",
        quiz: [
          { q: "AI構築に大量に必要なものは？", options: ["計算能力（チップ・データセンター・電力）", "紙とペン", "広い駐車場"], answer: 0 },
          { q: "企業が早くから能力を確保する理由は？", options: ["不足や価格上昇に備えるため", "電気が嫌いだから", "チップが安いから"], answer: 0 },
          { q: "本文が挙げるリスクは？", options: ["製品が売れなければ大損しうる", "計算は無料である", "電力は無限にある"], answer: 0 }
        ]
      },
      {
        id: "d0730-2",
        title: "When AI Helps Design Computer Chips",
        level: "★★★",
        genre: "テクノロジー",
        text: "Designing a computer chip is one of the hardest jobs in technology. A single chip can hold billions of tiny parts, all of which must be placed and connected perfectly. This work usually takes teams of skilled engineers many months. Now, a new idea is gaining attention: using artificial intelligence to help design the very chips that AI runs on.\nThe concept is a kind of loop. Powerful chips make AI systems smarter, and smarter AI can, in turn, help design better chips. Recently a young company that builds such 'AI design assistants' raised sixty million dollars to grow its technology. The tools can suggest layouts, find mistakes, and test ideas far faster than people working alone.\nSupporters say this could speed up progress in electronics and lower costs. If AI handles the slow, repetitive parts of design, human engineers can focus on the creative and difficult decisions. Chips might reach the market sooner and use less energy.\nOthers urge caution. Chip design is complex, and a small error can ruin an expensive product. AI tools still make mistakes, so human experts must check their work carefully. There are also worries about which countries and companies will control this powerful technology.\nWhatever the outcome, the direction is striking. Machines are beginning to help build the machines that will power the next generation of computing — a sign of how deeply AI is now woven into technology itself.",
        summaryJa: "コンピューターチップの設計は技術の中でも最難関の一つ。一枚に数十億もの微小な部品を完璧に配置・接続せねばならず、熟練技術者チームで何か月もかかる。いま、AIが動くチップの設計自体をAIに手伝わせる発想が注目されている。強力なチップが賢いAIを生み、賢いAIがより良いチップの設計を助けるという循環だ。こうした「AI設計アシスタント」を作る新興企業が6000万ドルを調達。配置の提案・ミス発見・案の試験を人より速く行える。支持者は、遅く反復的な作業をAIが担えば技術者が創造的判断に集中でき、開発が速まり省エネにもなると言う。一方、設計は複雑で小さな誤りが高価な製品を台無しにし、AIも誤るため人の確認が要る。誰がこの技術を握るかへの懸念もある。機械が次世代計算を担う機械づくりを助け始めた——AIが技術そのものに深く織り込まれた証だ。",
        quiz: [
          { q: "チップ設計が難しい理由は？", options: ["数十億の部品を完璧に配置・接続する必要があるから", "部品が一つしかないから", "電気を使わないから"], answer: 0 },
          { q: "本文が言う「循環」とは？", options: ["強力なチップが賢いAIを生み、AIが良いチップ設計を助ける", "チップが自分で動く", "AIが電気を作る"], answer: 0 },
          { q: "支持者が期待する効果は？", options: ["技術者が創造的判断に集中でき開発が速まる", "人間が不要になる", "確認が要らなくなる"], answer: 0 }
        ]
      },
      {
        id: "d0730-3",
        title: "A Summer of Wildfires",
        level: "★★★",
        genre: "世界情勢",
        text: "Across southern Europe, this summer has brought some of the largest wildfires in years. In south-west France, a single blaze grew to cover an area several times the size of Paris, forcing thousands of people to leave their homes and holiday spots along the Atlantic coast. In Greece, firefighters battled flames on the island of Crete and in other regions, and several lost their lives in the effort.\nWhy are these fires so hard to control? Hot, dry weather turns forests and grassland into fuel, and strong winds can carry flames faster than crews can respond. Once a fire grows large, it can create its own weather, sending burning material far ahead and starting new fires. Thousands of firefighters and many aircraft may be needed for a single blaze.\nGovernments are responding in several ways. They evacuate people early to keep them safe, share aircraft and crews across borders, and warn the public when the risk is high. Some countries are investing in better forecasting and in clearing dry brush before summer begins.\nScientists note that hotter, drier summers make large fires more likely, and they urge long-term planning as well as emergency response.\nThe immediate goal, though, is simple and urgent: protect lives. Behind the dramatic images of smoke and flame are ordinary people leaving their homes, and the firefighters — sometimes at great personal risk — working to bring the fires under control.",
        summaryJa: "この夏、南欧では近年最大級の山火事が相次いだ。仏南西部では一つの火災がパリの数倍の面積に広がり、大西洋岸の住民や行楽客数千人が避難。ギリシャではクレタ島などで消火にあたり、命を落とした消防士もいた。なぜ制御が難しいのか——高温乾燥が森や草地を燃料に変え、強風が炎を隊員の対応より速く運ぶ。大火は自ら気象を生み、燃える物を遠くへ飛ばして新たな火を起こす。一つの火災に数千の消防士と多数の航空機が要ることもある。各国は早期避難、航空機や部隊の国境を越えた共有、高リスク時の警報で対応し、予報改善や夏前の乾いた下草の除去に投資する国もある。科学者は高温乾燥の夏が大火を招きやすいとし、緊急対応に加え長期計画を促す。当面の目標は明快で切迫している——命を守ること。煙と炎の背後には家を離れる人々と、時に大きな危険を冒す消防士がいる。",
        quiz: [
          { q: "南欧の火災が制御しにくい理由は？", options: ["高温乾燥と強風が炎を速く広げるから", "雨が多すぎるから", "森がないから"], answer: 0 },
          { q: "各国の対応に含まれるものは？", options: ["早期避難と部隊・航空機の国境を越えた共有", "何もしない", "火を無視する"], answer: 0 },
          { q: "本文が挙げる当面の目標は？", options: ["命を守ること", "観光を増やすこと", "写真を撮ること"], answer: 0 }
        ]
      },
      {
        id: "d0730-4",
        title: "After the Earthquake: The Race to Help",
        level: "★★☆",
        genre: "日本",
        text: "When a strong earthquake struck the Kumamoto area on the southern Japanese island of Kyushu this week, rescue teams began a race against time. In the hours and days after a major quake, the chance of finding survivors under damaged buildings drops quickly, so speed matters enormously.\nJapan is one of the most earthquake-prone countries in the world, and it has long prepared for moments like this. Buildings are designed to sway rather than break, schools hold regular drills, and phones receive warnings seconds before strong shaking arrives. These few seconds can be enough to stop a train, pause surgery, or let a family take cover.\nAfter a quake, many groups work together. Rescue crews search collapsed structures, medical teams treat the injured, and engineers check whether bridges and buildings are safe to use. Volunteers and neighbors often help too, sharing water, food, and information.\nPreparation continues at home as well. Many families keep emergency kits with water, food, flashlights, and radios, and agree in advance on where to meet if phones stop working.\nEarthquakes cannot be prevented, and they remain frightening and dangerous. But Japan's long experience shows that good building design, early warning, regular practice, and quick cooperation can save many lives. Each disaster is also studied carefully, so that the lessons learned can make the response to the next one faster and safer.",
        summaryJa: "今週、九州・熊本地方を強い地震が襲うと、救助隊は時間との闘いを始めた。大地震の後は、損壊した建物の下で生存者を見つけられる可能性が急速に下がるため、速さが極めて重要だ。日本は世界有数の地震国で、長くこうした事態に備えてきた。建物は壊れずに揺れるよう設計され、学校は定期的に訓練を行い、強い揺れの数秒前に警報が携帯に届く。この数秒で電車を止め、手術を中断し、家族が身を守れる。地震後は多くの集団が協力する——救助隊が倒壊建物を捜索し、医療班が負傷者を治療し、技術者が橋や建物の安全を確認する。ボランティアや近隣も水・食料・情報を分け合う。家庭でも備えは続き、水・食料・懐中電灯・ラジオの防災袋を用意し、通信が途絶えた時の集合場所を事前に決める家族も多い。地震は防げず、依然として恐ろしく危険だ。だが日本の長い経験は、堅牢な設計・早期警報・定期訓練・迅速な協力が多くの命を救うことを示す。各災害は丁寧に検証され、次への対応をより速く安全にする。",
        quiz: [
          { q: "大地震の後で速さが重要な理由は？", options: ["時間が経つと生存者を見つけられる可能性が下がるから", "救助が楽しいから", "建物が新しいから"], answer: 0 },
          { q: "日本の地震への備えに含まれないものは？", options: ["地震を完全に防ぐ装置", "強い揺れの前の警報", "揺れて壊れない設計と訓練"], answer: 0 },
          { q: "本文の結論は？", options: ["設計・警報・訓練・協力が多くの命を救う", "地震は無害だ", "備えは無意味だ"], answer: 0 }
        ]
      },
      {
        id: "d0730-5",
        title: "Why Nuclear Power Is Back",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "For years, nuclear power seemed to be fading in many countries. Now it is returning to the center of attention, driven by a surprising force: the huge demand for electricity created by artificial intelligence and its data centers. Investors are pouring money into nuclear projects, betting that the world will need vast amounts of steady, low-carbon power.\nWhy nuclear? Unlike coal or gas, nuclear plants produce very little of the carbon dioxide that warms the planet. And unlike solar or wind, they generate power day and night, in any weather. That makes them attractive for data centers, which must run without pause. A new generation of smaller, factory-built reactors promises to be quicker and cheaper to construct than the giant plants of the past.\nThere are real challenges. Nuclear plants are costly and slow to build, and many people worry about safety and about the radioactive waste they produce, which must be stored securely for a very long time. Public trust, damaged by past accidents, is not easily won back.\nSupporters argue that modern designs are far safer and that the climate benefits are too large to ignore. Critics reply that money might be better spent on renewable energy and storage.\nThe debate is far from settled. But the return of nuclear power shows how a single new demand — the electricity to run artificial intelligence — can reshape decisions about energy, the environment, and the technologies that will define the coming decades.",
        summaryJa: "長年、多くの国で衰退して見えた原子力が、意外な力——AIとそのデータセンターが生む膨大な電力需要——に押されて再び注目の中心に戻っている。投資家は、世界が安定した低炭素電力を大量に必要とすると見て原子力に資金を注ぐ。なぜ原子力か。石炭やガスと違い温暖化を招く二酸化炭素の排出が非常に少なく、太陽光や風力と違い昼夜・天候を問わず発電できる。無停止で動くデータセンターに向く。工場で作る小型の新型炉は、従来の巨大炉より速く安く建てられると期待される。課題も現実的だ。建設は高価で遅く、安全性や長期保管が必要な放射性廃棄物への不安も根強い。過去の事故で損なわれた信頼は簡単には戻らない。支持者は新設計は格段に安全で気候上の利点が大きすぎると主張し、批判者は再生可能エネルギーや蓄電に使う方が良いと返す。決着は遠い。だが原子力の復活は、AIを動かす電力という新たな需要一つが、エネルギー・環境・未来の技術をめぐる判断をどれほど塗り替えうるかを示している。",
        quiz: [
          { q: "原子力が再注目される主な理由は？", options: ["AIとデータセンターの膨大な電力需要", "石油が安いから", "原子力が新発明だから"], answer: 0 },
          { q: "原子力が持つ利点は？", options: ["低炭素で昼夜・天候を問わず発電できる", "廃棄物が出ない", "建設が一瞬で終わる"], answer: 0 },
          { q: "本文が挙げる課題は？", options: ["高コスト・安全性・放射性廃棄物への不安", "電気を作れないこと", "二酸化炭素を大量に出すこと"], answer: 0 }
        ]
      }
    ]
  },
    {
    date: "2026-07-29",
    passages: [
      {
        id: "d0729-1",
        title: "How AI Companies Charge for Their Services",
        level: "★★★",
        genre: "ビジネス",
        text: "When you buy electricity, you pay for how much you use. Artificial intelligence services work in a surprisingly similar way. Instead of a simple flat fee, most AI companies bill their customers based on 'tokens' — small units of text that measure how much work the AI does. Understanding this billing model reveals a lot about how the new AI economy operates.\nWhat is a token? Roughly speaking, a token is a piece of a word — a few characters of text. When you send a question to an AI and it sends an answer back, the system counts the tokens in both the question and the reply. The more text involved, the more tokens are used, and the more the customer pays. A short question costs little; a long document costs much more.\nWhy do companies charge this way? Because it closely matches their real costs. Running these AI systems requires huge amounts of computing power and electricity, and that cost rises with the amount of text processed. By billing per token, companies charge more when a customer uses more, which is fair and predictable, much like a utility bill.\nThis model shapes how businesses use AI. A company building products on top of AI must think carefully about how many tokens each task consumes, because costs can add up quickly at large scale. Some redesign their systems to use fewer tokens, keeping bills manageable — a new kind of efficiency that did not exist a few years ago.\nThe broader lesson is that how a product is priced shapes how it is used. Just as pay-per-use pricing makes people mindful of electricity, token-based billing makes companies mindful of how they use AI. As new technologies create new business models, understanding how they charge is often the key to understanding the whole industry.",
        summaryJa: "電気は使った量に応じて払う。AIサービスも驚くほど似ていて、多くのAI企業は定額でなく「トークン」——AIの仕事量を測る小さな文章単位——で課金する。この課金モデルは新しいAI経済の仕組みをよく表す。トークンとはおおむね単語の一部(数文字)で、質問と回答の両方のトークンが数えられ、扱う文章が多いほどトークンが増え支払いも増える。短い質問は安く、長い文書は高い。なぜこう課金するのか——実際のコストによく合うからだ。AI稼働には膨大な計算力と電力が要り、処理する文章量とともに増える。トークン課金は使うほど多く払う公平で予測可能な方式で、公共料金に似る。この方式は企業のAI利用を形づくり、AI上に製品を作る企業は各作業のトークン消費を慎重に考え、大規模ではコストが急増するため、少ないトークンで済むよう設計し直す新しい効率も生まれた。価格の付け方が使い方を形づくる——従量課金が電気を意識させるように、トークン課金はAI利用を意識させる。課金の仕組みの理解が産業全体の理解の鍵だ。",
        quiz: [
          { q: "多くのAI企業の課金方式は？", options: ["トークン(文章単位)に基づく従量課金", "完全な定額", "無料"], answer: 0 },
          { q: "この方式が使われる理由は？", options: ["計算力・電力の実際のコストによく合うから", "計算が簡単だから", "顧客が喜ぶから"], answer: 0 },
          { q: "本文の広い教訓は？", options: ["価格の付け方が使い方を形づくる", "価格は無関係", "AIは無料であるべき"], answer: 0 }
        ]
      },
      {
        id: "d0729-2",
        title: "The Helpers That Keep Us Healthy",
        level: "★★★",
        genre: "テクノロジー",
        text: "Inside the body, health often depends on tiny helpers working quietly behind the scenes. New research into diabetes has revealed one such example: the cells that produce insulin, the hormone that controls blood sugar, rely on 'helper proteins' to do their job. When one key partner was missing, damaged proteins built up inside the cells, and they made less insulin. The discovery may point toward new ways to treat a disease affecting hundreds of millions.\nWhy does this matter? Because insulin is essential for turning food into energy. In diabetes, the body either cannot make enough insulin or cannot use it well, causing blood sugar to rise to dangerous levels. Understanding exactly why insulin-producing cells fail is a crucial step toward helping them work again.\nThe new research highlights the role of the helper proteins. Inside every cell, proteins must be folded into the right shapes to work, and helper proteins assist in this delicate process. When a key helper is missing, misshapen and damaged proteins pile up, stressing the cell and reducing its ability to make insulin. In other words, the problem is not only in the insulin itself, but in the support system that keeps the cells healthy.\nThis kind of discovery could open new paths for treatment. If scientists can protect or strengthen these helper systems, they might keep insulin-producing cells working longer, slowing or preventing some forms of diabetes.\nThe deeper lesson reaches beyond medicine. In the body, as in any complex system, the visible star — here, insulin — depends on a hidden network of support. Problems often arise not in the obvious place, but in the quiet helpers we overlook. Understanding the whole system, not just its most famous part, is often where real solutions are found.",
        summaryJa: "体内では、健康はしばしば陰で静かに働く小さな助っ人に依存する。糖尿病の新研究がその一例を明かした——血糖を制御するホルモン「インスリン」を作る細胞は、仕事をこなすのに「ヘルパータンパク質」に頼る。鍵となる相棒が欠けると、傷んだタンパク質が細胞内に蓄積し、インスリンの産生が減る。数億人を苦しめる病の新治療への手がかりになりうる。なぜ重要か——インスリンは食物をエネルギーに変えるのに不可欠で、糖尿病では十分作れないか使えず血糖が危険な水準に上がる。細胞が機能不全になる理由の理解が、再び働かせる重要な一歩だ。細胞内でタンパク質は正しい形に折りたたまれて働き、ヘルパーがその繊細な過程を助ける。鍵のヘルパーが欠けると、いびつで傷んだタンパク質がたまり細胞を疲弊させインスリン産生を落とす。問題はインスリン自体でなく、細胞を健康に保つ支援系にある。この系を守り強められれば、細胞を長く働かせ一部の糖尿病を遅らせ防げるかもしれない。目立つ主役(インスリン)は見えない支援網に依存する——見過ごされがちな静かな助っ人に問題は生じる。全体系の理解こそ解決の場だ。",
        quiz: [
          { q: "インスリンを作る細胞が頼るものは？", options: ["ヘルパータンパク質", "太陽光", "砂糖"], answer: 0 },
          { q: "鍵のヘルパーが欠けると起きることは？", options: ["傷んだタンパク質がたまりインスリン産生が減る", "細胞が増える", "何も起きない"], answer: 0 },
          { q: "本文の深い教訓は？", options: ["目立つ主役は見えない支援網に依存する", "主役だけ見ればよい", "助っ人は不要"], answer: 0 }
        ]
      },
      {
        id: "d0729-3",
        title: "When Heat and Fire Force People to Flee",
        level: "★★☆",
        genre: "世界情勢",
        text: "As summer temperatures rise across the northern hemisphere, extreme heat and wildfires are forcing communities to make hard, sudden decisions. In France, authorities recently ordered nearly four thousand people to evacuate tourist areas along the Atlantic coast, as returning heat threatened firefighters' efforts to control a large wildfire. Scenes like this are becoming a regular feature of hot summers around the world.\nWhy do heat and fire go together so dangerously? High temperatures dry out forests, grass, and soil, turning the landscape into fuel. A single spark — from lightning, a machine, or human carelessness — can then start a fire that spreads with frightening speed, especially in strong wind. Once a large wildfire begins, controlling it is extremely difficult, and protecting people becomes the first priority.\nEvacuation is a powerful but difficult tool. Moving thousands of people quickly saves lives, but it also disrupts communities, empties businesses, and can cause panic if not managed well. Officials must decide when the danger is serious enough to order people to leave, balancing safety against the cost and stress of evacuation. Acting too late risks lives; acting too early wastes resources and trust.\nPreparation makes a huge difference. Regions that plan ahead — clearing dry brush, building firebreaks, training firefighters, and creating clear evacuation routes — suffer far less than those caught unprepared. As hot, dry summers grow more common, this kind of readiness is becoming an essential part of public safety.\nThe broader lesson is about living with a changing climate. We cannot prevent every heatwave or fire, but we can prepare for them — reducing risk in advance and responding quickly when danger comes. In a warming world, the difference between disaster and safety often lies in how well a society prepares before the worst arrives.",
        summaryJa: "北半球で夏の気温が上がる中、猛暑と山火事が地域に急な難しい決断を迫っている。フランスでは、戻ってきた暑さが大規模山火事の制圧を脅かし、当局が大西洋岸の観光地の約4,000人に避難を命じた。こうした光景は世界の暑い夏で常態になりつつある。なぜ暑さと火は危険に結びつくのか——高温が森・草・土を乾かし景観を燃料に変える。雷・機械・人の不注意の一つの火花が、特に強風下で恐ろしい速さで広がる火事を起こしうる。大規模化すると制御は極めて難しく、人命保護が最優先になる。避難は強力だが難しい手段で、迅速な移動は命を救うが地域を混乱させ、うまく管理しないとパニックを招く。当局はいつ避難を命じるか、安全と避難のコスト・ストレスを天秤にかける。遅すぎれば命を、早すぎれば資源と信頼を失う。備えが大きな差を生む——枯れ枝除去・防火帯・消防訓練・明確な避難路を planする地域は被害が遥かに小さい。暑く乾いた夏が増える中、この備えは公共安全の要になる。変わる気候と生きる——すべての熱波や火事は防げなくても備えられる。事前のリスク低減と迅速な対応の差が、災害と安全を分ける。",
        quiz: [
          { q: "フランスで避難が命じられた理由は？", options: ["暑さが大規模山火事の制圧を脅かしたから", "地震が起きたから", "洪水が来たから"], answer: 0 },
          { q: "避難という手段の難しさは？", options: ["命を救うが地域を混乱させ、判断のタイミングが難しい", "常に簡単", "効果がない"], answer: 0 },
          { q: "本文が強調することは？", options: ["事前の備えが災害と安全を分ける", "備えは無意味", "火事は防げない"], answer: 0 }
        ]
      },
      {
        id: "d0729-4",
        title: "Reading Time in the Ocean's Currents",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "Deep in the Atlantic Ocean flows a vast, slow-moving system of currents that quietly shapes weather across much of the world. New research suggests that if this system weakens, it could dramatically change rainfall patterns — bringing much stronger storms, known as atmospheric rivers, to places like California, while leaving other regions, such as Greenland, with fewer snow-producing storms. It is a striking reminder of how connected the planet's climate really is.\nWhat is this ocean system? It is a giant loop of currents that carries warm water from the tropics toward the poles and cold water back again, moving heat around the globe like a slow conveyor belt. This flow helps determine where rain falls, how warm different regions are, and how storms form. When such a powerful system changes, the effects can reach thousands of kilometers away.\nAn 'atmospheric river' is a long, narrow band of moist air that carries enormous amounts of water across the sky, sometimes releasing it as intense rain or snow. These events can bring vital water to dry regions — or dangerous floods, depending on their strength. The new research suggests that changes in the ocean could make these events more extreme in some places.\nWhy does this matter? Because societies plan around familiar weather patterns. Cities build their water systems, farms plant their crops, and governments prepare for floods based on what they expect. If ocean changes shift these patterns, communities may face storms and droughts they are not prepared for.\nThe deeper wonder is how deeply the parts of our planet are connected. A change in ocean currents can alter the rain over a distant coast and the snow on a far-off island. Understanding these hidden links helps scientists warn us of what may come — and reminds us that Earth is not a collection of separate places, but a single, interconnected system.",
        summaryJa: "大西洋の深部に、世界の広範な天候を静かに形づくる巨大でゆっくりした海流系が流れている。新研究は、この系が弱まると降雨パターンが劇的に変わりうると示す——カリフォルニアのような地域に「大気の川」と呼ばれる遥かに強い storm をもたらし、グリーンランドなど他地域では雪をもたらす storm が減る。地球の気候がいかに連関しているかを鮮やかに思い出させる。この海流系は熱帯の暖水を極へ、冷水を戻す巨大なループで、遅いコンベアのように熱を地球中に運ぶ。この流れが雨の降る場所・各地の暖かさ・storm の形成を左右し、強力な系が変わると影響は数千キロ先まで及ぶ。「大気の川」は膨大な水分を運ぶ細長い帯で、乾いた地域に貴重な水を、あるいは危険な洪水をもたらす。海の変化がこれらを一部地域で極端にしうる。なぜ重要か——社会は馴染みの天候を前提に、水道・作付け・防災を計画する。パターンが変われば、備えのない storm や干ばつに直面しうる。惑星の各部の深い連関——海流の変化が遠い海岸の雨や遠い島の雪を変える。この隠れたつながりの理解が来るものを警告し、地球が別々の場所の集まりでなく一つの連関系だと思い出させる。",
        quiz: [
          { q: "海流系が弱まると起きうることは？", options: ["降雨パターンが変わり一部地域で storm が極端になる", "海が消える", "気候は変わらない"], answer: 0 },
          { q: "「大気の川」とは？", options: ["膨大な水分を運ぶ細長い空の帯", "海底の川", "地下水路"], answer: 0 },
          { q: "本文の深い驚きは？", options: ["地球は別々でなく一つの連関系である", "各地は無関係", "海は天候と無関係"], answer: 0 }
        ]
      },
      {
        id: "d0729-5",
        title: "Putting a Date on Ancient Art",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "In a cave in France called Font-de-Gaume, ancient people painted animals on stone walls long before writing existed. For years, one question was hard to answer: exactly how old are these paintings? Now scientists have found a clever way to date them precisely, by discovering tiny bits of charcoal hidden inside the black pigment — charcoal that can be measured using a method called radiocarbon dating.\nWhy was dating cave art so difficult? Because many ancient paintings were made with mineral pigments, which contain no material that scientists can date directly. Without a way to measure age, researchers could only guess, based on the style of the images or their surroundings. Guesses are useful, but they can be wrong by thousands of years.\nRadiocarbon dating solves this by measuring carbon. All living things absorb a special form of carbon while alive, and after they die, this carbon slowly and steadily breaks down over thousands of years. By measuring how much remains, scientists can calculate how long ago something lived. Charcoal — made from burnt wood — contains this carbon, so finding charcoal inside the black paint gives researchers something they can actually date.\nThis discovery matters because knowing the true age of ancient art changes our understanding of history. It tells us when people lived in a place, how their art developed, and how early humans thought and created. A precise date turns a mysterious image into a fixed point in the human story.\nThe broader lesson is about the power of careful observation. The answer to an old question was hidden in plain sight — tiny flecks of charcoal within the paint. Great discoveries often come not from looking somewhere new, but from looking more closely at what was there all along. In science, patience and attention can turn an ancient mystery into knowledge.",
        summaryJa: "フランスのフォン・ド・ゴーム洞窟で、古代の人々は文字が生まれる遥か前に石壁に動物を描いた。長年難しかったのは「正確に何歳か」だ。科学者は巧妙な年代測定法を見つけた——黒い顔料の中に隠れた微小な炭(木炭)を発見し、放射性炭素年代測定で測れるのだ。なぜ洞窟壁画の年代測定は難しかったか——多くは鉱物顔料で描かれ、直接年代測定できる material を含まないからだ。測る術がなく、絵の様式や周囲から推測するしかなく、推測は数千年ずれうる。放射性炭素年代測定は炭素を測る。生物は生きている間に特殊な炭素を取り込み、死後、数千年かけてゆっくり一定して壊れる。残量を測れば、いつ生きていたか計算できる。焼いた木からできる木炭はこの炭素を含むため、黒い塗料の中に木炭を見つければ実際に年代測定できる。古代美術の真の年代を知ることは歴史理解を変える——人がいつそこに住み、美術がどう発展し、初期人類がどう考え創ったかを教える。正確な年代が、謎の絵を人類の物語の定点に変える。丁寧な観察の力——古い問いの答えは塗料の中の微小な炭という「見えていた場所」に隠れていた。偉大な発見は新しい場所でなく、ずっとそこにあったものをより注意深く見ることから来る。忍耐と注意が古代の謎を知識に変える。",
        quiz: [
          { q: "洞窟壁画を年代測定できた鍵は？", options: ["黒い顔料の中の木炭を発見したこと", "絵の署名", "壁の色"], answer: 0 },
          { q: "放射性炭素年代測定の原理は？", options: ["死後ゆっくり壊れる炭素の残量から年代を計算する", "色の濃さを測る", "重さを量る"], answer: 0 },
          { q: "本文の広い教訓は？", options: ["ずっとそこにあったものを注意深く見ることが発見を生む", "新しい場所だけを探すべき", "観察は無意味"], answer: 0 }
        ]
      }
    ]
  },
    {
    date: "2026-07-28",
    passages: [
      {
        id: "d0728-1",
        title: "Rivals Team Up to Build a Car's Brain",
        level: "★★☆",
        genre: "ビジネス",
        text: "Two of Japan's biggest carmakers, long-time competitors, have reportedly entered final-stage talks to work together on something surprising: the software that will act as the 'brain' of their next-generation vehicles. An agreement could come within weeks. Rivals cooperating on a core technology is a growing trend, and it reveals how much the car industry is changing.\nWhy would competitors share such an important system? Because modern cars are becoming computers on wheels. The software that controls a vehicle's functions — its 'operating system' — is now as important as the engine once was. But developing this software is enormously expensive and complex, requiring skills more common in technology companies than traditional carmakers. By sharing the cost and effort, two firms can move faster and cheaper than either could alone.\nThis kind of partnership involves a careful balance. The companies will still compete fiercely on design, brand, and driving experience. They cooperate only on the shared foundation — the software platform — that neither gains much advantage from building separately. It is like rival restaurants sharing a supplier for basic ingredients while competing on their recipes.\nThe change reflects a bigger shift in the auto industry. For a century, a car's value lay mainly in its mechanical engineering. Now, more and more, it lies in software: how the car connects, updates, drives itself, and serves its passengers. Carmakers that cannot master software risk falling behind newer, technology-focused competitors.\nThe broader business lesson is about knowing when to compete and when to cooperate. Building the same expensive foundation separately can waste resources that could go toward what truly sets a company apart. Sometimes the smartest strategy is to join forces on the basics, and save the real competition for what customers actually notice.",
        summaryJa: "長年のライバルである日本の大手自動車2社が、次世代車の「頭脳」となるソフトウェアで協業する最終段階の交渉に入ったと報じられ、数週内の合意もありうる。ライバルが中核技術で協力するのは増える傾向で、車産業の変化を映す。なぜ重要なシステムを共有するのか——現代の車は「車輪の上のコンピュータ」化し、機能を制御するOSがかつてのエンジン並みに重要だが、開発は極めて高価・複雑でIT企業寄りの技術が要る。費用と労力を分担すれば単独より速く安く進める。協業は微妙な均衡で、デザイン・ブランド・走りでは激しく競い、単独開発で差がつかない共通基盤(ソフト基盤)だけ協力する。ライバル店が基本食材の仕入れを共有しレシピで競うようなものだ。車の価値は機械工学からソフトへ移りつつあり、ソフトを制せぬメーカーは新興IT勢に後れる。基本で手を組み、顧客が気づく部分で真に競う——競争と協力の見極めが賢い戦略だ。",
        quiz: [
          { q: "2社が協業しようとしている対象は？", options: ["次世代車の中核ソフトウェア(OS)", "エンジンの部品", "販売店の場所"], answer: 0 },
          { q: "ライバルが基盤で協力する理由は？", options: ["ソフト開発は高価・複雑で分担すれば速く安いから", "競争が嫌いだから", "法律の要求だから"], answer: 0 },
          { q: "本文の広い教訓は？", options: ["基本で協力し、顧客が気づく部分で競う見極めが賢い", "常に単独で作るべき", "協力は無意味"], answer: 0 }
        ]
      },
      {
        id: "d0728-2",
        title: "A Car That Is Really a Computer",
        level: "★★★",
        genre: "テクノロジー",
        text: "Not long ago, a car was mainly a mechanical machine: an engine, wheels, and steel. Today, a modern vehicle contains dozens of computers and millions of lines of software code, and increasingly its most important part is not the engine but the 'operating system' — the master software that controls everything from the dashboard to the brakes.\nWhy has software become so central? Because it determines what a car can do and how it improves over time. A software-defined car can receive updates over the internet, just like a smartphone, gaining new features or fixing problems without a trip to the garage. It can connect to other services, learn a driver's preferences, and support advanced safety systems or self-driving features. The physical car may stay the same, but the software can make it better month after month.\nThis shift changes what carmakers must be good at. For a century, they mastered metal, engines, and mechanical precision. Now they also need the skills of technology companies: writing reliable software, managing data, and updating systems safely. Some traditional carmakers find this transition difficult, while newer companies built around software have an advantage.\nThere are challenges. Software in a car must be extremely reliable, because a failure can be dangerous. It must be secure against hackers, since a connected car is a possible target. And it must last for many years, far longer than a typical phone.\nThe deeper trend is one seen across many industries: physical products are becoming platforms for software. Just as phones became app machines and televisions became streaming devices, cars are becoming computers that happen to move. Understanding this shift helps explain why carmakers now compete not only on horsepower and design, but increasingly on code.",
        summaryJa: "少し前まで車は主に機械——エンジン・車輪・鋼だった。今の車は数十の計算機と数百万行のコードを持ち、最重要部分はエンジンでなく、ダッシュボードからブレーキまで制御する「OS」になりつつある。なぜソフトが中心か——車にできることと、時間とともにどう良くなるかを決めるからだ。ソフト定義の車はスマホのようにネット経由で更新でき、整備工場に行かず新機能追加や不具合修正ができ、他サービスと接続し、運転者の好みを学び、先進安全や自動運転を支える。物理的な車は同じでもソフトが毎月良くする。これはメーカーに必要な能力を変える。長年、金属・エンジン・機械精度を極めたが、今は信頼できるソフト開発・データ管理・安全な更新というIT企業の技能も要る。車のソフトは極めて信頼性が高く、ハッカーに強く、スマホより遥かに長寿命でねばならない。物理製品がソフトの土台になる——電話がアプリ機に、テレビが配信機になったように、車は「動く計算機」になりつつある。",
        quiz: [
          { q: "現代の車で最重要になりつつある部分は？", options: ["すべてを制御するOS(ソフトウェア)", "エンジンのみ", "タイヤの色"], answer: 0 },
          { q: "ソフト定義の車の利点は？", options: ["ネット経由で更新し新機能追加や不具合修正ができる", "更新できない", "重くなる"], answer: 0 },
          { q: "車のソフトに求められる条件に含まれないものは？", options: ["高い信頼性とセキュリティ", "長い寿命", "毎年買い替えること"], answer: 2 }
        ]
      },
      {
        id: "d0728-3",
        title: "Treasure in the Deep-Sea Mud",
        level: "★★★",
        genre: "世界情勢",
        text: "Far below the ocean surface, in the mud of the deep seabed near Japan's easternmost island, scientists have confirmed the presence of several rare earth elements — the valuable materials essential for magnets, electronics, and green technology. The discovery could one day help reduce the world's dependence on a small number of land-based suppliers, but turning seabed mud into usable materials is far from simple.\nWhy is this exciting? Because rare earths are critical to modern technology, yet their supply is dominated by only a few countries. A nation with its own source — even one deep underwater — could gain valuable independence. For a country like Japan, which imports most of its raw materials, finding these elements within its own waters is strategically important.\nBut the challenges are enormous. The mud lies thousands of meters below the surface, in cold, dark, high-pressure conditions where working is extremely difficult and expensive. Bringing up the mud, separating the rare earths, and doing so without harming the deep-sea environment are all major technical and ethical problems. Deep-sea mining raises real concerns about damage to fragile ocean ecosystems that we still barely understand.\nSo the discovery is a beginning, not an answer. It shows that valuable resources exist, but using them will require years of research, new technology, and careful thought about environmental costs. A resource that cannot be reached affordably and responsibly is, for now, only a possibility.\nThe broader lesson is about the gap between finding and using. Discovering a resource is exciting, but value comes from being able to obtain it in a way that is affordable, safe, and responsible. Whether under the sea or anywhere else, potential only becomes real through the hard, patient work of turning discovery into practical use.",
        summaryJa: "海面のはるか下、日本最東端の島近くの深海底の泥に、磁石・電子機器・グリーン技術に不可欠なレアアース数種の存在が確認された。いつか世界の陸上供給国への依存を減らせるかもしれないが、海底の泥を使える材料にするのは容易でない。なぜ画期的か——レアアースは現代技術に不可欠なのに供給が少数国に偏り、自前の源(たとえ深海でも)を持てば貴重な自立を得られる。原材料の多くを輸入する日本には自国水域での発見は戦略的に重要だ。だが課題は膨大で、泥は数千メートル下の冷たく暗い高圧環境にあり、作業は極めて難しく高価。泥の引き上げ、レアアースの分離、そして脆い深海生態系を傷めずに行うことは大きな技術的・倫理的問題だ。深海採掘はまだよく分からない生態系への損傷の懸念を生む。発見は答えでなく始まりで、利用には年月の研究・新技術・環境コストへの熟慮が要る。手頃かつ責任ある形で得られない資源は今は可能性にすぎない。発見と利用の間の隔たり——潜在は、発見を実用に変える地道な努力でのみ現実になる。",
        quiz: [
          { q: "深海の泥で確認されたものは？", options: ["レアアース元素", "石油", "金塊"], answer: 0 },
          { q: "この発見が戦略的に重要な理由は？", options: ["レアアースの供給が少数国に偏り、自前の源で自立できるから", "泥が珍しいから", "海がきれいだから"], answer: 0 },
          { q: "本文が示す「発見と利用の隔たり」とは？", options: ["手頃・安全・責任ある形で得られて初めて価値になる", "発見すればすぐ使える", "利用は簡単"], answer: 0 }
        ]
      },
      {
        id: "d0728-4",
        title: "Where Japan Began",
        level: "★★☆",
        genre: "日本",
        text: "In the quiet countryside of Nara Prefecture lie the remains of a place where, more than thirteen hundred years ago, the shape of modern Japan first took form. UNESCO has now added the Asuka-Fujiwara sites — the location of Japan's early capitals — to its World Cultural Heritage list, making them the country's twenty-seventh World Heritage property. The decision recognizes a landscape where a nation was, in many ways, born.\nWhy are these sites so important? Because it was here, in the Asuka and Fujiwara periods, that Japan began to organize itself as a unified state. Rulers built the country's first permanent, planned capital, introduced systems of law and government influenced by China, and helped Buddhism take deep root. Many features of Japanese culture and governance can be traced back to what happened in this small area so long ago.\nBecoming a World Heritage site brings both honor and responsibility. The recognition celebrates the area's global importance and can attract visitors, supporting the local economy. But it also creates a duty to protect the fragile remains and landscape for future generations, balancing tourism with careful preservation.\nWorld Heritage status matters beyond any single country. The idea behind it is that some places belong, in a sense, to all of humanity — treasures whose value crosses borders. Protecting them is seen as a shared human responsibility, not just a national one.\nThe deeper meaning is about the value of remembering where we come from. A pile of ancient foundations in a rural field may look modest, but it holds the roots of a civilization. Honoring such places reminds a society of its long story, connecting the busy present to a distant past — and reminding us that every modern nation grew, slowly, from beginnings that once seemed small.",
        summaryJa: "奈良県の静かな田園に、1300年以上前に現代日本の形が初めて形づくられた場所の遺構がある。UNESCOが飛鳥・藤原(日本初期の都の地)を世界文化遺産に登録し、日本27件目の世界遺産となった。国がいわば生まれた景観を認める決定だ。なぜ重要か——飛鳥・藤原の時代にここで日本は統一国家として組織化を始め、初の恒久的計画都市を建て、中国に影響された法・統治の仕組みを導入し、仏教が深く根付いた。日本の文化と統治の多くの特徴が、この小さな地域で起きたことに遡れる。世界遺産化は名誉と責任を伴い、地球規模の重要性を称え観光を呼ぶ一方、脆い遺構と景観を将来へ守り、観光と保存を両立する義務を生む。世界遺産の理念は、ある場所は人類全体に属する国境を越える宝であり、その保護は国だけでなく人類共通の責任だという点にある。自らの起源を覚えておくことの価値——素朴に見える古代の基礎が文明の根を宿す。忙しい現在と遠い過去をつなぎ、どの近代国家も小さく見えた始まりから育ったと思い出させる。",
        quiz: [
          { q: "飛鳥・藤原の地が重要な理由は？", options: ["日本が統一国家として組織化を始めた場所だから", "工業地帯だから", "港があったから"], answer: 0 },
          { q: "世界遺産化がもたらす責任は？", options: ["脆い遺構と景観を将来へ守り観光と保存を両立する", "自由に開発できる", "観光を禁止する"], answer: 0 },
          { q: "世界遺産の理念とは？", options: ["ある場所は人類全体に属し保護は共通の責任", "国だけのもの", "価値は国境で止まる"], answer: 0 }
        ]
      },
      {
        id: "d0728-5",
        title: "Reading a Storm Before It Arrives",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "When a typhoon forms over the ocean, one of the most difficult questions is also the most important: where will it go? A newly formed storm may grow into a violent system, yet forecasters can be sharply divided over whether it will strike land or curve harmlessly out to sea. The science of predicting a storm's path is a fascinating mix of physics, data, and honest uncertainty.\nWhy is forecasting so hard? Because a storm is shaped by countless forces at once — ocean temperatures, wind patterns high in the atmosphere, and the positions of other weather systems far away. Small differences in these conditions can send a typhoon in completely different directions. To predict its path, scientists feed enormous amounts of data into powerful computer models that calculate many possible futures. Often these models disagree, which is why forecasters sometimes speak of a range of possibilities rather than a single certain track.\nThis uncertainty is not a weakness; it is honesty. A responsible forecast tells people not just the most likely path, but how confident scientists are, so communities can prepare wisely. Warning people too late costs lives, but crying wolf too often makes them stop listening. Balancing these is a serious challenge.\nForecasting has improved dramatically over the decades. Better satellites, more data, and faster computers now give days of warning where once there were only hours. Countless lives have been saved because people had time to prepare or evacuate. Yet nature remains complex, and perfect prediction may never be possible.\nThe broader lesson is about living wisely with uncertainty. We often want clear, confident answers, but some of the most important questions — about weather, health, or the future — can only be answered in terms of probability. Learning to act sensibly on 'likely' and 'possible,' rather than demanding false certainty, is a vital skill, in science and in life.",
        summaryJa: "台風が海上で発生すると、最も難しく最も重要な問いが生じる——どこへ進むか。生まれたばかりの storm が猛烈に発達しても、上陸するか海上へ逸れるか予報が大きく割れることがある。進路予測の科学は物理・データ・率直な不確実性の魅力的な混合だ。なぜ難しいか——台風は海水温、上空の風、遠くの他の気象系の位置など無数の力に同時に形づくられ、条件のわずかな差が全く異なる方向へ向かわせる。科学者は膨大なデータを強力な計算モデルに入れ多くの未来を計算するが、モデルは食い違うことが多く、単一の確実な進路でなく可能性の幅で語る。この不確実性は弱さでなく誠実さだ。責任ある予報は最も可能性の高い進路と科学者の確信度を伝え、地域が賢く備えられるようにする。警告が遅れれば命を失い、頻繁すぎれば人は聞かなくなる。予報は衛星・データ・計算機の向上で数十年で劇的に改善し、かつて数時間だった警告が数日になり多くの命が救われた。だが自然は複雑で完全な予測は不可能かもしれない。不確実性と賢く付き合うこと——「likely」「possible」に基づき分別ある行動をとる力は、科学でも人生でも重要な技能だ。",
        quiz: [
          { q: "台風の進路予測が難しい理由は？", options: ["海水温・風・他の気象系など無数の力に同時に形づくられるから", "台風が動かないから", "データがないから"], answer: 0 },
          { q: "予報の不確実性を本文はどう捉える？", options: ["弱さでなく誠実さ", "無能の証拠", "無視すべきもの"], answer: 0 },
          { q: "本文の広い教訓は？", options: ["「likely」「possible」に基づき分別ある行動をとる力が重要", "確実な答えだけを求める", "不確実性は無視する"], answer: 0 }
        ]
      }
    ]
  }
  ] };
