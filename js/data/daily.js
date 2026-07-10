/* デイリー配信リーディング
 * 毎朝の自動ルーチンがこのファイルを丸ごと上書き生成する（直近 7 日分を保持）。
 * days は日付降順。各 day = { date: "YYYY-MM-DD", passages: [readingPassages と同スキーマ + genre] }
 * このファイル以外は手書きデータであり、ルーチンは触らない。
 */
window.KE_DATA = window.KE_DATA || {};

KE_DATA.dailyReading = { days: [
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
  },
  {
    date: "2026-07-07",
    passages: [
      {
        id: "d0707-1",
        title: "A Record Half-Year for Startup Funding",
        level: "★★☆",
        genre: "ビジネス",
        text: "The first half of 2026 was the biggest six months for startup investment in history. According to industry data, startups around the world raised about 510 billion dollars between January and June. The main driver was artificial intelligence. A large share of the money went to a small number of big AI companies, while thousands of smaller startups shared the rest.\nInvestors explain the boom in simple terms: they believe AI will change almost every industry, and nobody wants to miss the winners. However, some analysts are worried. When too much money chases a few companies, prices can rise far above their real value. If results come more slowly than expected, some investors could lose a lot.\nFor people working in business, there are two practical lessons. First, competition for AI talent and AI tools will stay strong, so companies need a clear plan for how they use the technology. Second, a boom is not a strategy. The companies that win in the long run are usually the ones that connect new technology to a real customer problem, not the ones that simply spend the most money.",
        summaryJa: "2026年上半期のスタートアップ調達額は約5,100億ドルと過去最高。牽引役はAIで、資金は少数の大手AI企業に集中。投資家は「AIが全産業を変える」と見る一方、過熱による割高リスクを懸念する声もある。教訓は、AI活用の明確な計画を持つこと、そして「ブームは戦略ではない」ということ。",
        quiz: [
          { q: "2026年上半期のスタートアップ調達の特徴は？", options: ["過去最高の約5,100億ドルだった", "前年から大きく減少した", "AI以外の分野が中心だった"], answer: 0 },
          { q: "アナリストが心配していることは？", options: ["AI人材が余ること", "少数企業への資金集中で価格が実力以上に上がること", "投資額が少なすぎること"], answer: 1 },
          { q: "本文の「勝つ企業」の条件は？", options: ["最も多くのお金を使う企業", "技術を実際の顧客課題につなげる企業", "最も早く上場する企業"], answer: 1 }
        ]
      },
      {
        id: "d0707-2",
        title: "Driverless Taxis Hit the Streets",
        level: "★★☆",
        genre: "テクノロジー",
        text: "Taxis without drivers are no longer a science fiction story. In several American cities, robotaxis now pick up passengers with no human safety driver in the car. Miami recently joined the list, and other cities are preparing to follow.\nRiding in a robotaxi feels surprisingly normal after the first few minutes. You order the car with an app, the doors unlock automatically, and a screen shows the route. The car drives carefully, sometimes more carefully than a human driver. Supporters say this technology could reduce traffic accidents, because most crashes are caused by human mistakes such as texting or driving too fast.\nHowever, there are still hard questions. Who is responsible when a driverless car makes a mistake? How should cities design roads and rules for cars with no driver? And what happens to the millions of people who earn money by driving? Taxi and delivery drivers are watching this change with real concern.\nMost experts expect a long period in which human drivers and robotaxis share the road. The technology is ready for simple routes in good weather, but rain, snow, and complex city traffic are still difficult. The next few years will show how fast the change really comes.",
        summaryJa: "米国の複数都市で、安全要員なしの完全無人ロボタクシーが営業を開始し、マイアミも仲間入り。人為ミスによる事故を減らせるとの期待の一方、事故時の責任、道路設計やルール、運転で生計を立てる人々への影響という課題が残る。悪天候や複雑な市街地はまだ苦手で、人間との共存期間が続く見込み。",
        quiz: [
          { q: "マイアミで始まったサービスの特徴は？", options: ["安全要員が同乗する自動運転", "人間が遠隔操作するタクシー", "人間の監視なしで走るロボタクシー"], answer: 2 },
          { q: "支持者が挙げる利点は？", options: ["人為ミスによる事故を減らせる", "料金が必ず安くなる", "渋滞が完全になくなる"], answer: 0 },
          { q: "技術がまだ苦手とする状況は？", options: ["高速道路の直線", "雨や雪、複雑な市街地の交通", "夜間の走行すべて"], answer: 1 }
        ]
      },
      {
        id: "d0707-3",
        title: "The Global Race for AI Chips",
        level: "★★★",
        genre: "世界情勢",
        text: "Behind every AI service is a physical machine, and at the heart of that machine is a chip. Advanced AI chips have become one of the most important resources in the world economy, and governments now treat them almost like oil in the twentieth century.\nThe United States currently leads in chip design, and its companies dominate the market for AI processors. To protect this lead, Washington limits the export of the most advanced chips to certain countries. In response, China is investing heavily in its own chip industry. Recent reports say the Chinese government put nearly 900 million dollars into a single domestic chip company, hoping to reduce its dependence on foreign technology.\nThe relationship between governments and AI companies is also getting closer in the West. Some large AI firms have discussed giving governments a financial stake in their business, which would have been unthinkable a few years ago.\nWhy does this matter for ordinary business people? Because chip politics can affect prices, supply chains, and even which AI tools are available in which countries. A company that plans its AI strategy without watching this global race may find that the ground has moved under its feet.",
        summaryJa: "AIチップは「21世紀の石油」のように扱われ、各国政府が戦略資源と見なす。米国は設計で先行し先端チップの輸出を規制、中国は国産チップ企業に約9億ドルを投じ依存脱却を急ぐ。政府とAI企業の距離も接近中。チップを巡る政治は価格・サプライチェーン・利用できるAIツールにまで影響するため、ビジネスにも無関係ではない。",
        quiz: [
          { q: "本文はAIチップを何に例えている？", options: ["20世紀の石油", "現代の金", "新しい電気"], answer: 0 },
          { q: "中国の対応として書かれているのは？", options: ["チップの輸入を増やした", "国内チップ企業に約9億ドルを投資した", "AI開発を中止した"], answer: 1 },
          { q: "チップを巡る政治がビジネスに与える影響は？", options: ["ほとんど影響はない", "価格や供給網、使えるAIツールに影響する", "広告費だけに影響する"], answer: 1 }
        ]
      },
      {
        id: "d0707-4",
        title: "Japan's Tourism Boom Changes the Streets",
        level: "★★☆",
        genre: "日本",
        text: "Walk through Kyoto, Osaka, or the ski towns of Hokkaido, and you will hear languages from all over the world. Japan is in the middle of a historic tourism boom. A weak yen, easy flight connections, and Japan's global image for food, safety, and culture have made it one of the most popular destinations on the planet.\nThe boom brings clear economic benefits. Visitors spend money in hotels, restaurants, and shops, supporting jobs far beyond the big cities. Small towns with hot springs or historic streets are finding new life as travelers look for places that feel authentic and less crowded.\nAt the same time, popular areas face real problems. Residents in some neighborhoods complain about crowded buses, noise, and rising prices. Local governments are testing solutions such as tourist fees, separate lines for visitors, and campaigns that guide travelers to less famous regions.\nFor Japanese businesses, the message is practical: English and other language skills are becoming everyday tools, not special talents. A restaurant that can explain its menu in simple English, or a shop that can handle questions from foreign customers, has a direct advantage. The tourism boom is not only a policy topic — it is a daily business opportunity.",
        summaryJa: "円安・航空アクセス・食や文化の魅力を背景に、日本は歴史的な観光ブームの真っ只中。地方にも経済効果が広がる一方、混雑・騒音・物価上昇などオーバーツーリズムの課題も。自治体は観光客向け料金や分散策を試行中。ビジネスの現場では、簡単な英語で対応できることがそのまま競争力になっている。",
        quiz: [
          { q: "観光ブームの背景として挙げられていないものは？", options: ["円安", "航空路線の利便性", "入国審査の廃止"], answer: 2 },
          { q: "人気エリアで起きている問題は？", options: ["観光客の減少", "混雑・騒音・物価上昇", "ホテルの過剰供給だけ"], answer: 1 },
          { q: "日本企業への実務的なメッセージは？", options: ["英語対応力が日常的な競争力になっている", "観光業から撤退すべき", "外国人客は増えない見込み"], answer: 0 }
        ]
      },
      {
        id: "d0707-5",
        title: "The Hidden Cost of AI: Electricity",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "Every time you ask an AI a question, somewhere in the world a data center uses electricity to answer it. As AI services grow, their hunger for power is becoming a serious topic. One major tech company recently reported that its electricity use jumped 37 percent in a single year — the largest increase in its history — mainly because of AI infrastructure. Its data centers now use more electricity in a year than some entire countries.\nWhy does AI need so much power? Training a large AI model means running thousands of computers day and night for weeks. After that, every single user request also costs a small amount of energy, and billions of requests add up quickly.\nTech companies say they are working on solutions. They are buying renewable energy, designing more efficient chips, and even exploring nuclear power for their data centers. Critics answer that demand is growing faster than these solutions, and that local communities near data centers worry about their water and power supplies.\nThe debate matters for everyone who uses AI at work. In the future, the environmental cost of computing may influence which tools companies choose, how much they pay, and how they report their own carbon footprint.",
        summaryJa: "AIの拡大でデータセンターの電力消費が急増。ある大手テック企業は年間電力使用量が過去最大の37%増となり、一部の国の年間消費量を上回る規模に。学習にも利用にも電力がかかるためで、再エネ購入・高効率チップ・原子力活用などの対策が進む一方、需要の伸びが上回るとの批判も。計算の環境コストは今後、企業のツール選定やコスト、CO2報告にも影響しうる。",
        quiz: [
          { q: "ある大手テック企業の電力使用はどうなった？", options: ["1年で37%増加した", "半分に減った", "横ばいだった"], answer: 0 },
          { q: "AIが大量の電力を使う理由は？", options: ["学習と日々の利用の両方に電力がかかるから", "画面が大きいから", "夜間しか動かせないから"], answer: 0 },
          { q: "テック企業の対策として挙げられていないものは？", options: ["再生可能エネルギーの購入", "高効率チップの設計", "AIサービスの全面停止"], answer: 2 }
        ]
      }
    ]
  }
] };
