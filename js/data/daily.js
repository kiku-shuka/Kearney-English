/* デイリー配信リーディング
 * 毎朝の自動ルーチンがこのファイルを丸ごと上書き生成する（直近 7 日分を保持）。
 * days は日付降順。各 day = { date: "YYYY-MM-DD", passages: [readingPassages と同スキーマ + genre] }
 * このファイル以外は手書きデータであり、ルーチンは触らない。
 */
window.KE_DATA = window.KE_DATA || {};

KE_DATA.dailyReading = { days: [
  {
    date: "2026-07-19",
    passages: [
      {
        id: "d0719-1",
        title: "A Sudden Drop: When Markets Fall Fast",
        level: "★★★",
        genre: "ビジネス",
        text: "Stock markets can rise slowly for months and then fall sharply in a single afternoon. Japan's main index recently dropped thousands of points in a few hours, driven by heavy selling of chip-related shares. One major memory chip maker saw its market value fall to roughly half of its recent peak. For anyone learning about business, a day like this is a lesson in how markets really work.\nWhy do prices swing so violently? Because a stock price reflects not just today's profits but investors' hopes about the future. When those hopes are very high, prices climb far above current earnings. But high hopes are fragile. A single worrying signal — a disappointing forecast, a rival's success, or simply the feeling that prices rose too fast — can make investors rush to sell at once. Selling feeds more selling, and prices tumble.\nThe recent fall centered on companies tied to artificial intelligence. For over a year, AI excitement pushed chip stocks to extraordinary heights. When some investors decided the prices had gone too far, the reversal was quick and painful.\nDoes a crash mean the technology is worthless? Usually not. Even after a sharp drop, a good company keeps making products and earning money. The lesson is about the difference between a business and its stock price. A business is built over years; a stock price can change in minutes. Wise investors and managers focus on the slow, real work of building value, and try not to be ruled by the market's sudden moods.",
        summaryJa: "株式市場は数か月かけて上昇しても、一つの午後で急落しうる。日本の主要指数が数時間で数千ポイント下げ、半導体関連の売りが主因で、あるメモリ大手の時価総額はピークの約半分に。株価は今の利益だけでなく将来への期待も映すため、高すぎる期待は些細な悪材料で崩れ、売りが売りを呼ぶ。今回はAI関連が中心。ただ暴落は技術が無価値という意味ではなく、良い企業は下落後も製品を作り稼ぐ。「企業」は年単位で築かれ「株価」は分単位で動く——賢明な人は市場の気分に振り回されず、価値を築く地道な仕事に集中する。",
        quiz: [
          { q: "株価が激しく変動する理由は？", options: ["株価は将来への期待も映し、期待は崩れやすいから", "企業が毎日変わるから", "理由はない"], answer: 0 },
          { q: "今回の急落の中心は？", options: ["AI関連・半導体関連の銘柄", "食品会社", "鉄道会社"], answer: 0 },
          { q: "本文の教訓は？", options: ["企業は年単位、株価は分単位——市場の気分に振り回されない", "暴落は技術が無価値の証拠", "株価だけを見るべき"], answer: 0 }
        ]
      },
      {
        id: "d0719-2",
        title: "What Does a Smartphone Really Cost?",
        level: "★★☆",
        genre: "テクノロジー",
        text: "A new entry-level smartphone from a major maker was recently priced at around 140,000 yen in Japan — close to 900 US dollars. Many people were surprised that an 'entry-level' phone could cost so much. The price tells an interesting story about technology, currency, and value.\nFirst, phones have quietly become powerful computers. The device in your pocket now has better cameras, faster chips, and more storage than laptops did a few years ago. As the technology inside improves, the cost to build it rises, and so does the price.\nSecond, currency matters. When a country's money weakens against the US dollar, imported products become more expensive in local prices, even if the maker did not raise the dollar price at all. A weaker yen means the same phone costs more yen than before. Buyers feel the pinch, but the cause is partly in the exchange rate, not just the product.\nThird, 'value' is not only about price. A phone that lasts five years and receives software updates may be cheaper, over time, than a cheap phone replaced every two years. Smart buyers think about cost per year of use, not just the number on the price tag.\nThe bigger lesson applies to many purchases, from phones to cars to appliances. The sticker price is only the beginning of the story. Understanding what drives it — technology, currency, and durability — helps you judge whether something is truly expensive or actually good value.",
        summaryJa: "大手の新しい「エントリー向け」スマホが日本で約14万円(約900ドル)と、その高さに驚く人も多い。理由は三つ。①スマホは高性能コンピュータ化し、中身の進化で製造コストと価格が上がる。②通貨——円安になると、メーカーがドル価格を上げなくても円建てでは高くなる。③「価値」は価格だけではない——5年使えてソフト更新される端末は、2年で買い替える安物より結局安いこともある。値札は物語の始まりにすぎず、技術・通貨・耐久性という要因を理解すれば、本当に高いのか実はお得かを見極められる。",
        quiz: [
          { q: "スマホが高価になる理由に含まれないものは？", options: ["高性能化で製造コストが上がる", "円安で円建て価格が上がる", "色が増えたから"], answer: 2 },
          { q: "円安が価格に与える影響は？", options: ["ドル価格が同じでも円建てでは高くなる", "価格は必ず下がる", "無関係"], answer: 0 },
          { q: "賢い買い手が考えることは？", options: ["価格だけでなく1年あたりの使用コスト", "値札の数字だけ", "色だけ"], answer: 0 }
        ]
      },
      {
        id: "d0719-3",
        title: "How Nations Build Technology Ecosystems",
        level: "★★★",
        genre: "世界情勢",
        text: "No powerful technology is built by a single company alone. Behind every advanced product lies an 'ecosystem' — a web of chip makers, software developers, factories, universities, and investors that support one another. Recently, a leading maker of AI chips announced an expansion of its partnerships across Japan's robotics and industrial sector, a good example of how such ecosystems form.\nWhy does an ecosystem matter? Because modern technology is too complex for one firm to master everything. A chip company needs software partners to make its hardware useful. A robot maker needs chips, sensors, and AI models it does not build itself. When many specialized companies work together, each doing what it does best, the whole system advances faster than any single player could alone.\nCountries compete to become the home of such ecosystems. Once a strong network forms in a region, it tends to grow. Skilled workers move there, suppliers open nearby, universities train the right graduates, and investors look for the next promising firm. Success attracts more success, which is why governments work hard to attract key companies and research centers.\nThere are risks in depending too heavily on outside partners, especially for critical technology. A country may find that the most important chips or software are controlled by companies elsewhere. This is why nations try to balance cooperation with self-reliance — welcoming global partners while building their own strengths. In a connected world, technological power comes not from working alone, but from being a strong, valued part of the right network.",
        summaryJa: "強力な技術は単独企業では作れず、背後にはチップメーカー・ソフト開発者・工場・大学・投資家が支え合う「エコシステム」がある。AIチップの主要企業が日本のロボット・産業分野との連携拡大を発表したのは好例。現代技術は複雑すぎて一社で全てを担えず、専門企業が各々の得意を持ち寄ると全体が速く進む。強いネットワークができた地域には人材・供給業者・大学・投資が集まり成功が成功を呼ぶため、各国は主要企業や研究拠点の誘致に力を注ぐ。ただ外部依存のリスクもあり、協力と自立の均衡が要る。技術力は単独ではなく「適切なネットワークの一員である」ことから生まれる。",
        quiz: [
          { q: "技術の「エコシステム」とは？", options: ["チップ・ソフト・工場・大学・投資家が支え合う網", "一社だけの工場", "自然の生態系のみ"], answer: 0 },
          { q: "エコシステムが重要な理由は？", options: ["現代技術は複雑で一社では全てを担えないから", "競争をなくすため", "コストを隠すため"], answer: 0 },
          { q: "各国が均衡を取ろうとするのは？", options: ["協力と自立(外部依存のリスク回避)", "孤立と鎖国", "価格と品質"], answer: 0 }
        ]
      },
      {
        id: "d0719-4",
        title: "When One Factory Stops, Who Feels It?",
        level: "★★☆",
        genre: "日本",
        text: "A large Japanese food company recently began restarting its refrigerated warehouses and food factories after a disruption, first accepting limited orders and planning a full return soon. It may sound like a small business story, but it offers a clear window into something we rarely think about: the hidden supply chains that keep daily life running.\nRefrigerated warehouses are a quiet but vital part of the food system. They store frozen and chilled products — meat, seafood, vegetables, ready meals — and keep them safe until they reach shops and restaurants. When such facilities stop working, even briefly, the effects ripple outward. Shops may run short of certain items, restaurants may change their menus, and other companies that depend on steady deliveries must adjust.\nThis is why modern businesses think carefully about resilience — the ability to keep going, or recover quickly, when something goes wrong. A company might keep backup facilities, spread its operations across several locations, or hold extra stock of critical items. Restarting with limited orders, as this company did, is itself a careful strategy: bring the system back gradually to avoid new problems, rather than switching everything on at once.\nThe broader lesson is about how connected our world has become. A single warehouse most people never see can affect what appears on store shelves and restaurant tables. Behind the simple act of buying dinner lies a vast, mostly invisible network — and keeping that network strong is one of the quiet, essential jobs of modern business.",
        summaryJa: "日本の大手食品会社が、混乱後に冷蔵倉庫と食品工場の稼働を再開し、まず限定的な受注から始めて近く全面再開を予定。小さな話に見えて、日常を支える「見えないサプライチェーン」を映す好例だ。冷蔵倉庫は肉・魚・野菜・調理済み食品を安全に保つ要で、止まれば店の品薄や飲食店のメニュー変更など影響が波及する。だから企業は「レジリエンス(回復力)」を重視し、予備施設・拠点分散・在庫確保などで備える。限定受注からの再開も、一気に戻さず段階的に立ち上げる慎重な戦略。夕食を買う行為の裏に広大で見えない網があり、それを保つのが現代ビジネスの静かで不可欠な仕事だ。",
        quiz: [
          { q: "冷蔵倉庫が食品システムで果たす役割は？", options: ["冷凍・冷蔵品を安全に保ち店や飲食店へ届ける", "野菜を育てる", "料理を作る"], answer: 0 },
          { q: "「レジリエンス」とは？", options: ["問題が起きても続ける・素早く回復する力", "価格を上げる力", "広告を打つ力"], answer: 0 },
          { q: "限定受注から再開する狙いは？", options: ["一気に戻さず段階的に立ち上げ新たな問題を避ける", "利益を隠す", "顧客を減らす"], answer: 0 }
        ]
      },
      {
        id: "d0719-5",
        title: "Cheap Style: The Science of Affordable Fashion",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "A well-known low-price fashion brand recently made news by working with a luxury designer to sell jeans for the price of a couple of lunches. The idea of famous designers creating cheap clothing might sound strange, but it reveals a lot about how modern fashion — and modern business — works.\nFor most of history, good design and low price rarely went together. Skilled designers worked for expensive brands, while cheap clothes were plain and forgettable. That has changed. Fast-fashion companies discovered that they could offer stylish, well-designed clothing at low prices by producing enormous quantities, simplifying materials, and running highly efficient supply chains. When you make millions of the same item, the cost of each one falls dramatically.\nWorking with a famous designer is a clever move. It brings prestige and fresh ideas to an affordable brand, attracting customers who want style without a high price. The designer gains a huge audience, and the company gains attention and sales. Both sides win.\nThere is a serious side to cheap fashion too. Very low prices can encourage people to buy more than they need and throw clothes away quickly, creating waste. In response, some companies are experimenting with recycling, better-quality basics meant to last, and more responsible production. The future of affordable fashion may depend on balancing three goals at once: style, low price, and care for the planet — a difficult but increasingly important combination.",
        summaryJa: "低価格ファッションブランドが高級デザイナーと組み、ランチ2回分ほどの値段でジーンズを売って話題に。有名デザイナーが安い服を作るのは奇妙に見えて、現代のファッションとビジネスの仕組みをよく表す。かつて良いデザインと低価格は両立しなかったが、大量生産・素材の簡素化・効率的なサプライチェーンで、おしゃれな服を安く出せるようになった。有名デザイナーとの協業は、手頃なブランドに名声と新鮮な発想をもたらし双方に利益。一方で安さは大量消費と廃棄を招くため、リサイクルや長持ちする定番品など責任ある生産の試みも。今後は「スタイル・低価格・環境配慮」の三立が課題になる。",
        quiz: [
          { q: "安くておしゃれな服が可能になった理由は？", options: ["大量生産・素材の簡素化・効率的なサプライチェーン", "デザイナーが無料で働くから", "布が無料だから"], answer: 0 },
          { q: "有名デザイナーとの協業で双方が得るものは？", options: ["ブランドは名声と売上、デザイナーは大きな観客", "何も得ない", "損失だけ"], answer: 0 },
          { q: "安いファッションの深刻な側面は？", options: ["大量消費と廃棄による無駄", "価格が高すぎること", "服が丈夫すぎること"], answer: 0 }
        ]
      }
    ]
  },
  {
    date: "2026-07-18",
    passages: [
      {
        id: "d0718-1",
        title: "A Retailer Looks to Europe for Growth",
        level: "★★☆",
        genre: "ビジネス",
        text: "One of Japan's biggest retail companies is reportedly considering a large investment — several hundred billion yen — in the largest convenience store operator in Poland. The move is part of a wider strategy: as growth slows at home, Japanese retailers are looking abroad for new customers.\nThe reason is demographics. Japan's population is shrinking and aging, which means fewer shoppers each year. A company that depends only on the domestic market faces a hard ceiling on its growth. Europe, by contrast, offers large populations and regions where convenience stores are still expanding. Buying an established local operator is often smarter than starting from zero, because the local company already understands its customers, suppliers, and rules.\nConvenience stores are a Japanese specialty. Over decades, Japanese chains perfected the art of running small, efficient shops that offer fresh food, services, and long opening hours. That know-how is valuable abroad, where the convenience-store model is less developed. Exporting a business system, not just products, can be a powerful form of growth.\nThere are risks in crossing borders. Consumer tastes differ, labor rules vary, and managing a company thousands of kilometers away is hard. But the strategic logic is clear. When your home market cannot grow, you must either find new products or new places — and for Japan's retailers, the world's growing regions increasingly look like the future.",
        summaryJa: "日本の大手小売企業が、ポーランド最大のコンビニ運営会社に数千億円規模の投資を検討していると報じられた。人口減・高齢化で国内の買い物客が減る中、海外に成長を求める戦略の一環。ゼロから始めるより現地の既存企業を買う方が、顧客・取引先・規制を理解している分有利。日本が磨いたコンビニ運営のノウハウは、モデルが未発達な海外で価値を持つ。国境を越えるリスクはあるが、国内が伸びないなら「新しい製品か新しい場所」を探すしかない。",
        quiz: [
          { q: "日本の小売企業が海外に目を向ける主な理由は？", options: ["国内は人口減で買い物客が減るから", "海外の方が家賃が安いから", "国内の店が多すぎるから"], answer: 0 },
          { q: "ゼロから始めるより現地企業を買う利点は？", options: ["顧客・取引先・規制を既に理解しているから", "従業員が不要だから", "商品が無料になるから"], answer: 0 },
          { q: "本文が示す成長の考え方は？", options: ["国内が伸びないなら新しい製品か新しい場所を探す", "何もしないのが最善", "海外進出は避けるべき"], answer: 0 }
        ]
      },
      {
        id: "d0718-2",
        title: "AI Moves onto the Factory Floor",
        level: "★★★",
        genre: "テクノロジー",
        text: "For years, most people met artificial intelligence on their phones and computers. Now AI is entering a very different place: the factory. Several major Japanese manufacturers — companies that make robots, machines, and industrial equipment — have announced new AI initiatives, often in partnership with a leading maker of AI chips.\nWhat does AI actually do in a factory? A great deal. It can inspect thousands of products per hour, spotting tiny defects a human eye would miss. It can predict when a machine is about to break down, so it can be fixed before it stops the whole line. It can guide robots to handle objects of different shapes, a task that once required careful programming for every case. In short, AI makes factories more flexible, more reliable, and more efficient.\nJapan is a natural home for this shift. The country has long been a leader in robotics and precision manufacturing, and it faces a shrinking workforce that makes automation especially valuable. Combining decades of factory know-how with modern AI could help Japanese industry stay competitive as fewer young workers are available.\nThere are challenges. AI systems need large amounts of good data, skilled engineers to run them, and careful testing to ensure safety. Workers will need training as their jobs change. But the direction is clear: the same technology that answers questions on your phone is quietly moving into the machines that make the physical world, and manufacturing may never look the same again.",
        summaryJa: "スマホやPCで出会うことが多かったAIが、工場という別の場所に入り込んでいる。日本の大手製造業(ロボットや産業機器メーカー)が、AIチップの主要企業と組んで新たなAI施策を発表した。工場のAIは、微細な欠陥検査、故障の予知保全、多様な形状の物を扱うロボット制御などを担い、工場を柔軟・確実・効率的にする。ロボットと精密製造に強く、労働力が縮む日本には特に価値が高い。良質なデータや人材、安全性検証、労働者の再教育という課題はあるが、AIは物理世界を作る機械へ静かに移りつつある。",
        quiz: [
          { q: "工場でのAIの役割として挙げられていないものは？", options: ["微細な欠陥の検査", "故障の予知保全", "商品の値段を勝手に決める"], answer: 2 },
          { q: "日本がこの変化に向くとされる理由は？", options: ["ロボット・精密製造に強く、労働力が縮んでいるから", "工場が少ないから", "AIを禁止しているから"], answer: 0 },
          { q: "課題として挙げられているのは？", options: ["良質なデータ・人材・安全性検証・労働者の再教育", "電気が使えないこと", "工場が海外にしかないこと"], answer: 0 }
        ]
      },
      {
        id: "d0718-3",
        title: "Why Household Inflation Fears Matter",
        level: "★★★",
        genre: "世界情勢",
        text: "Central banks watch many numbers, but one of the most important is surprisingly personal: what ordinary households expect to happen to prices. Recent reports say inflation expectations among Japanese households have hit a record high, keeping pressure on the country's central bank to keep raising interest rates.\nWhy do expectations matter so much? Because they can become self-fulfilling. If people believe prices will rise sharply, they change their behavior. Workers demand higher wages to keep up. Shoppers buy now rather than later, fearing higher prices ahead. Companies raise prices more confidently, expecting customers to accept it. All of this can actually push inflation higher — simply because everyone expected it.\nThis is why central banks care about psychology as much as economics. Part of their job is to keep expectations 'anchored,' meaning people trust that prices will stay reasonably stable. Once that trust breaks and expectations climb, controlling inflation becomes much harder, because the belief itself drives the problem.\nFor Japan, this is a new challenge. After decades of near-zero inflation, prices are now rising, and households have noticed. The central bank must respond carefully: raise rates enough to calm expectations, but not so fast that it damages the economy. It is a delicate balance, and it shows an important truth about money — the economy runs not only on hard numbers, but also on what millions of people believe will happen next.",
        summaryJa: "中央銀行が注視する最重要指標の一つが、家計が抱く「物価の見通し」。日本の家計のインフレ期待が過去最高に達し、利上げ継続の圧力になっていると報じられる。期待は自己実現しうる——値上がりを予想すると人は賃上げを求め、早めに買い、企業も強気に値上げし、結果として本当にインフレが進む。だから中央銀行は心理も重視し、期待を「安定(アンカー)」させようとする。長年ほぼゼロ物価だった日本にとって新たな試練で、期待を鎮めつつ景気を壊さない微妙な舵取りが要る。経済は数字だけでなく人々の予想でも動く。",
        quiz: [
          { q: "インフレ期待が重要なのはなぜ？", options: ["自己実現して実際にインフレを進めうるから", "数字が面白いから", "無関係だから"], answer: 0 },
          { q: "人々が値上がりを予想すると起きることは？", options: ["賃上げ要求・早めの購入・強気の値上げ", "誰も買わなくなる", "価格が必ず下がる"], answer: 0 },
          { q: "中央銀行の課題は？", options: ["期待を鎮めつつ景気を壊さない微妙な舵取り", "利上げを無限に続ける", "何もしないこと"], answer: 0 }
        ]
      },
      {
        id: "d0718-4",
        title: "Preparing for Longer, Hotter Summers",
        level: "★★☆",
        genre: "日本",
        text: "Japan's summers are changing, and science is putting numbers to what many people already feel. Advanced climate simulations suggest that as global temperatures rise, Japan is likely to face increasingly long and dangerously hot summers, along with more frequent torrential rain, rising seas, and accelerating ice loss around the world by the end of the century.\nThese projections are more than distant warnings; they shape decisions being made today. Longer hot seasons mean more strain on power grids as air conditioners run for months, more heatstroke cases in hospitals, and tougher conditions for farmers and outdoor workers. More intense rain raises the risk of floods and landslides, forcing cities to strengthen drainage and rethink where people build.\nJapan has long experience preparing for natural disasters, from earthquakes to typhoons, and that culture of preparation is now being applied to a warming climate. Cities are planting trees, redesigning buildings to stay cool, upgrading flood defenses, and improving warning systems that tell people when dangerous heat or rain is coming.\nThe deeper message is about adaptation. Reducing greenhouse gases remains essential to limit how far the climate changes. But some warming is already locked in, so societies must also adapt to the world that is coming. For a country as exposed to natural forces as Japan, learning to live safely with hotter summers and wilder weather is becoming one of the great practical challenges of the century.",
        summaryJa: "日本の夏は変わりつつあり、科学がその実感を数値化している。高度な気候シミュレーションは、地球温暖化で日本の夏がより長く危険に暑くなり、世界全体で集中豪雨の増加・海面上昇・氷の減少が今世紀末までに進むと示す。これは電力網の負荷、熱中症、農作業への影響、洪水・土砂災害リスクの増大として今日の意思決定に関わる。地震や台風に備えてきた日本の防災文化が温暖化にも応用され、植樹・涼しい建物・治水・警報の強化が進む。温室効果ガス削減は不可欠だが、ある程度の温暖化は避けられず、来る世界への「適応」も社会の大きな課題になる。",
        quiz: [
          { q: "気候シミュレーションが示す日本の夏は？", options: ["より長く危険に暑くなる", "急に涼しくなる", "変化しない"], answer: 0 },
          { q: "予測がもたらす今日的な影響に含まれないものは？", options: ["電力網の負荷や熱中症", "洪水・土砂災害リスク", "地震の消滅"], answer: 2 },
          { q: "本文が伝える「より深いメッセージ」は？", options: ["削減に加え、来る世界への適応も必要", "対策は不要", "温暖化はすでに止まった"], answer: 0 }
        ]
      },
      {
        id: "d0718-5",
        title: "The Comeback of a Family Car",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "Cars are not only machines; they are also cultural objects that reflect how families live. A Japanese automaker recently unveiled a fully redesigned large minivan, the model's first complete overhaul in sixteen years. Behind that long gap and fresh design lies an interesting story about how products and lifestyles change together.\nWhy would a company wait sixteen years to redesign a car? Because a major overhaul is expensive and risky. Engineers must rethink the engine, the body, the safety systems, and the technology inside, while guessing what families will want years into the future. Wait too long, and the product feels old; move too fast, and you waste money on changes customers do not need. Timing is everything.\nThe new minivan reflects modern family life. Buyers now expect advanced safety systems, big screens, comfortable seating for several passengers, and, increasingly, electric or hybrid power for better efficiency. A car designed sixteen years ago simply cannot meet these expectations, no matter how good it once was.\nThere is a broader lesson about staying relevant. Every product, from cars to phones to software, must eventually be reimagined for a new generation. The companies that succeed are those that watch how people actually live — how families travel, what they value, what they worry about — and update their products to match. A car is really a mirror of its time, and redesigning one is a bet on how we will all live next.",
        summaryJa: "車は機械であると同時に、家族の暮らしを映す文化的存在でもある。日本の自動車メーカーが大型ミニバンを16年ぶりに全面刷新して発表した。全面刷新は高コストで、エンジン・車体・安全・技術を作り直しつつ数年先の家族のニーズを読む必要があり、遅すぎれば古び, 早すぎれば無駄——タイミングが肝心。新型は先進安全、大型画面, 多人数の快適な座席, 電動・ハイブリッド化など現代の家族生活を反映する。あらゆる製品は新世代向けに再構想が要り, 成功する企業は人々の実際の暮らしを観察して製品を更新する。車はその時代を映す鏡だ。",
        quiz: [
          { q: "会社が16年間も全面刷新を待つ理由は？", options: ["刷新は高コストで、将来のニーズを読む必要があるから", "法律で禁止されているから", "誰も車を買わないから"], answer: 0 },
          { q: "新型ミニバンが反映する現代のニーズに含まれないものは？", options: ["先進安全システム", "電動・ハイブリッド化", "馬で引く仕組み"], answer: 2 },
          { q: "本文の広い教訓は？", options: ["製品は人々の暮らしを観察して新世代向けに更新すべき", "製品は変えない方がよい", "デザインは重要でない"], answer: 0 }
        ]
      }
    ]
  },
  {
    date: "2026-07-17",
    passages: [
      {
        id: "d0717-1",
        title: "A Home Electronics Giant Reinvents Itself",
        level: "★★☆",
        genre: "ビジネス",
        text: "Panasonic is a name that once filled living rooms around the world with televisions, cameras, and kitchen appliances. Today, reports say the company is turning its energy toward a very different market: data centers, the giant warehouses of computers that power the internet and artificial intelligence.\nWhy would a maker of home electronics chase such a change? Because markets shift, and companies that do not shift with them fade away. The market for televisions and home appliances is mature and crowded, with thin profits and tough competition from lower-cost rivals. Data centers, by contrast, are booming. The rise of AI has created enormous demand for computing power, and every data center needs reliable electricity, cooling, and energy storage — areas where Panasonic's long experience in batteries and power systems can shine.\nThis kind of reinvention is a recurring theme in business history. Great companies often survive not by doing the same thing forever, but by carrying their core skills into new markets. A firm that once made batteries for laptops can make batteries for cars or data centers. The product changes; the underlying strength remains.\nThe move is not without risk. New markets bring new competitors and new demands. But standing still is often the greater danger. For any business, the story is a useful reminder: your industry may change faster than you expect, and the ability to redeploy your strengths into fresh opportunities can matter more than defending an old position.",
        summaryJa: "かつて世界の家庭をテレビや家電で満たしたパナソニックが、AIとインターネットを支える「データセンター」市場へ軸足を移していると報じられる。成熟し利益の薄い家電市場に対し、AIで急拡大するデータセンターは電力・冷却・蓄電を必要とし、同社の電池・電源技術が活きる。優れた企業は同じことを続けるのではなく、中核の強みを新市場へ持ち込んで生き残る——製品は変わっても土台の強みは残る。業界は予想より速く変わり、強みを再配置する力が古い地位の防衛より重要になりうる。",
        quiz: [
          { q: "パナソニックが力を入れ始めた市場は？", options: ["データセンター", "映画製作", "観光業"], answer: 0 },
          { q: "データセンター市場が有望な理由は？", options: ["AIで computing の需要が急拡大しているから", "家電より簡単だから", "競争がないから"], answer: 0 },
          { q: "本文の教訓は？", options: ["中核の強みを新市場へ再配置する力が重要", "同じ製品を作り続けるべき", "変化は避けるべき"], answer: 0 }
        ]
      },
      {
        id: "d0717-2",
        title: "Building Detectors to Read the Universe",
        level: "★★★",
        genre: "テクノロジー",
        text: "Some of the biggest secrets of the universe are hidden in the faintest of signals — particles and waves so weak that our normal instruments cannot notice them. Scientists have taken an important step toward building a new generation of quantum detectors, devices sensitive enough to catch these whispers from the cosmos.\nWhat makes quantum detectors special is their extraordinary sensitivity. By using the strange rules of quantum physics, they can measure incredibly small amounts of energy or tiny changes in a field. This precision could help answer some of physics' deepest questions: What is dark matter, the invisible substance that makes up most of the universe's mass? Are there particles we have never detected? Such questions have puzzled scientists for decades because the signals involved are almost impossibly faint.\nThe technology is difficult to build. Quantum states are delicate and easily destroyed by heat, vibration, or stray signals, so these detectors often must be cooled to near absolute zero and shielded from the outside world. Each engineering advance that makes them more stable brings real experiments closer.\nThough this research aims at the cosmos, the tools it produces rarely stay in the laboratory. Ultra-sensitive detectors developed for physics have a way of turning up later in medical scanners, navigation systems, and security devices. Curiosity about the universe, again and again, ends up improving technology here on Earth.",
        summaryJa: "宇宙の最大の謎は、通常の機器では捉えられないほど微弱な信号に潜む。科学者は、その「宇宙のささやき」を捉えられる次世代の量子検出器の構築へ重要な一歩を踏み出した。量子物理の性質を使い極めて微小なエネルギーや場の変化を測れるため、暗黒物質や未知の粒子といった難問に迫れる。量子状態は熱や振動に弱く、絶対零度近くまで冷却・遮蔽する必要がある。宇宙を狙う技術だが、超高感度検出器は後に医療スキャナや航法・セキュリティにも応用され、宇宙への好奇心が地上の技術を高めてきた。",
        quiz: [
          { q: "量子検出器の特別な点は？", options: ["極めて微小なエネルギーや場の変化を測れる高感度", "安く作れること", "冷却が不要なこと"], answer: 0 },
          { q: "この検出器で迫れる難問は？", options: ["暗黒物質や未知の粒子", "天気予報", "株価の予測"], answer: 0 },
          { q: "宇宙向け技術の副次効果は？", options: ["医療・航法・セキュリティにも応用される", "宇宙でしか使えない", "何も生まない"], answer: 0 }
        ]
      },
      {
        id: "d0717-3",
        title: "The World's Quiet Shift to Electric Two-Wheelers",
        level: "★★☆",
        genre: "世界情勢",
        text: "When people picture the electric vehicle revolution, they usually imagine cars. But in much of the world, the most important shift is happening on two wheels. A Japanese motorcycle maker is betting on the continued growth of electric scooters and motorcycles in cities, and the reasoning reveals a lot about how global transport is changing.\nIn many countries — across Southeast Asia, India, Africa, and beyond — motorcycles and scooters, not cars, are the main way people get around. They are cheap, easy to park, and perfect for crowded streets. Because there are so many of them, switching these vehicles to electric power could cut air pollution and fuel use dramatically, perhaps even more than switching cars in wealthy nations.\nElectric two-wheelers have real advantages. They are simpler and cheaper than electric cars, their smaller batteries charge quickly, and in some cities riders can swap an empty battery for a full one in seconds at special stations. For crowded, polluted cities, they offer a fast path to cleaner air.\nChallenges remain: building charging or battery-swap networks, keeping prices low enough for ordinary buyers, and ensuring a steady supply of batteries. But the direction is clear. The electric future may arrive first not in the expensive cars of rich countries, but in the millions of small, practical two-wheelers that move the cities of the developing world.",
        summaryJa: "EV革命というと自動車を思い浮かべがちだが、世界の多くの地域では変化は「二輪」で起きている。日本のバイクメーカーが都市の電動スクーター・バイクの成長に賭ける。東南アジアやインド、アフリカでは二輪が主要な移動手段で、数が多いぶん電動化の汚染・燃料削減効果は大きい。電動二輪は電動車より簡単・安価で、小さい電池は素早く充電でき、数秒で電池交換できる都市もある。充電網や価格、電池供給の課題は残るが、電動化の未来はまず途上国都市の実用的な二輪から訪れるかもしれない。",
        quiz: [
          { q: "世界の多くの地域でEV化が進む乗り物は？", options: ["スクーターやバイクなどの二輪", "大型トラック", "飛行機"], answer: 0 },
          { q: "二輪の電動化の効果が大きい理由は？", options: ["数が多く、汚染・燃料削減の効果が大きいから", "高価だから", "誰も乗らないから"], answer: 0 },
          { q: "電動二輪の利点として挙げられていないものは？", options: ["電動車より簡単・安価", "小さい電池が素早く充電できる", "空を飛べる"], answer: 2 }
        ]
      },
      {
        id: "d0717-4",
        title: "Cool Biz: How Japan Fights Summer Heat at Work",
        level: "★★☆",
        genre: "日本",
        text: "Every summer, Japanese offices run an experiment that mixes environmental policy, business culture, and simple common sense. It is called 'Cool Biz,' a campaign that encourages workers to dress lightly and set air conditioners no lower than 28 degrees Celsius, in order to save energy during the hottest months.\nThe idea began years ago as a response to energy shortages, but it has become a normal part of the working year. During Cool Biz season, the strict business suit relaxes. Men leave their jackets and ties at home, lighter shirts are acceptable, and the whole dress code becomes more comfortable. What was once considered too casual for a serious office is now official policy.\nThe benefits go beyond saving electricity. Comfortable workers are often more productive, and lighter clothing reduces the risk of heat-related illness. The campaign also sends a public message: saving energy is a shared responsibility, and small daily choices — a temperature setting, a change of shirt — add up across millions of offices.\nCool Biz is a good example of how culture and policy can work together. A government suggestion alone rarely changes behavior, and neither does personal preference alone. But when an idea fits both the climate and the practical needs of workers, it can quietly reshape a whole country's habits. For visitors and new employees, understanding Cool Biz is a small but useful window into how Japan balances tradition, comfort, and shared goals.",
        summaryJa: "日本の夏の職場では「クールビズ」が定着している。軽装を促し冷房を28度以上に設定して猛暑期の省エネを図る取り組みで、元は電力不足への対応から始まり今や年中行事に。上着やネクタイを外す軽装が公式方針となり、省エネだけでなく生産性向上や熱中症予防にもつながる。政府の呼びかけだけでも個人の好みだけでも行動は変わらないが、気候と働く人の実際的ニーズの双方に合う考えは国全体の習慣を静かに変える。クールビズは伝統・快適さ・共通目標を両立させる日本の一例。",
        quiz: [
          { q: "クールビズの内容は？", options: ["軽装を促し冷房を28度以上に設定して省エネする", "冬に暖房を強くする", "残業を増やす"], answer: 0 },
          { q: "クールビズの効果として挙げられていないものは？", options: ["省エネ", "生産性向上や熱中症予防", "売上の倍増"], answer: 2 },
          { q: "本文が示す教訓は？", options: ["気候と働く人のニーズに合う考えは国の習慣を変える", "政府の命令だけで十分", "習慣は変えられない"], answer: 0 }
        ]
      },
      {
        id: "d0717-5",
        title: "The Science of Staying Cool",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "As summers grow hotter, understanding how the human body handles heat is more useful than ever. Your body is a remarkable temperature-control machine, working constantly to keep its core near 37 degrees Celsius. When you get too hot, it has two main tools: it sends more blood to the skin to release heat, and it produces sweat, which cools you as it evaporates.\nThis system is powerful but has limits. Sweating only cools you if the sweat can evaporate, which is why humid days feel so much worse than dry ones — the air is already full of moisture, so sweat stays on the skin and does little good. Heavy activity, poor hydration, and high humidity can overwhelm the body's cooling, leading to heat exhaustion or, in serious cases, heatstroke.\nScience points to simple, effective habits. Drinking water regularly keeps sweat production going. Loose, light-colored clothing lets air move and reflects sunlight. Resting during the hottest hours reduces the heat your body must fight. And a fan or air conditioner helps sweat evaporate and moves warm air away.\nInterestingly, humans are among the best natural coolers in the animal kingdom. Our ability to sweat across nearly the whole body let our ancestors stay active in the heat when other animals had to rest. But that ancient advantage still needs support. Working with your body's cooling system, rather than against it, is the smartest way to stay safe and comfortable through a hot summer.",
        summaryJa: "夏が暑くなる中、体が熱をどう扱うかの理解が役立つ。人体は核心温を約37度に保つ精巧な装置で、暑いと皮膚に血流を送り、汗の蒸発で冷やす。だが汗は蒸発してこそ冷え、湿度の高い日は汗が残り効きにくい。激しい活動・水分不足・高湿度は冷却を上回り熱中症を招く。こまめな水分補給、ゆったりした明色の服、暑い時間帯の休息、扇風機やエアコンが有効。全身で汗をかけるヒトは動物界でも屈指の「冷却上手」だが、その仕組みに逆らわず協力することが安全で快適な夏の鍵。",
        quiz: [
          { q: "体が熱を逃がす主な方法は？", options: ["皮膚への血流増加と汗の蒸発", "呼吸を止めること", "食事を増やすこと"], answer: 0 },
          { q: "湿度の高い日が暑く感じる理由は？", options: ["汗が蒸発しにくく冷却が効かないから", "気温が必ず高いから", "風が強いから"], answer: 0 },
          { q: "暑さ対策として挙げられていないものは？", options: ["こまめな水分補給", "ゆったりした明色の服", "厚手の黒い服を着る"], answer: 2 }
        ]
      }
    ]
  },
  {
    date: "2026-07-16",
    passages: [
      {
        id: "d0716-1",
        title: "When Oil Routes Become a Business Risk",
        level: "★★★",
        genre: "ビジネス",
        text: "Tension in the Middle East has once again put a global spotlight on a narrow strip of water: the Strait of Hormuz. Reports say Iran has threatened to block oil-exporting routes in the region in response to a maritime blockade of its ports. For businesses far from the Gulf, the news is a reminder of how a single geographic chokepoint can shake the world economy.\nThe Strait of Hormuz is one of the most important passages on Earth. A large share of the world's oil and natural gas is shipped through this narrow channel between the Gulf and the open sea. If ships cannot pass safely, energy supplies tighten and prices can jump within days — even for countries thousands of kilometers away.\nWhy does this matter to companies with no connection to oil? Because energy is an input to almost everything. Higher oil prices raise the cost of shipping goods, running factories, and heating buildings. A café, a software firm, and a car maker all feel the effect, directly or indirectly, when energy becomes more expensive.\nSmart businesses prepare for such shocks rather than react in panic. They diversify suppliers, sign flexible contracts, and keep some financial cushion for sudden cost increases. Consultants call this scenario planning: asking 'what would we do if energy prices doubled next month?' The companies that have already answered that question sleep better when headlines about distant straits appear.",
        summaryJa: "中東の緊張が再び「ホルムズ海峡」という狭い水路に世界の注目を集めている。イランが港湾封鎖への対抗として地域の石油輸出路の封鎖を警告したと報じられた。世界の石油・天然ガスの多くがこの海峡を通るため、通航が妨げられると数日で供給が逼迫し価格が急騰しうる。エネルギーはほぼ全産業の投入要素で、輸送・工場・暖房のコストを押し上げる。賢明な企業は供給先の分散や柔軟な契約、資金の余裕でショックに備える——「来月エネルギー価格が倍になったら?」に答えておくシナリオプランニングが効く。",
        quiz: [
          { q: "ホルムズ海峡が重要な理由は？", options: ["世界の石油・天然ガスの多くが通る狭い水路だから", "観光名所だから", "漁業が盛んだから"], answer: 0 },
          { q: "石油と無関係の企業にも影響する理由は？", options: ["エネルギーがほぼ全産業の投入要素だから", "全社が石油を売っているから", "影響しない"], answer: 0 },
          { q: "本文が勧める備えは？", options: ["供給先の分散や柔軟な契約などシナリオプランニング", "何もしないこと", "価格急騰を待つこと"], answer: 0 }
        ]
      },
      {
        id: "d0716-2",
        title: "NASA Bets on Small Companies for Big Missions",
        level: "★★☆",
        genre: "テクノロジー",
        text: "Sending humans back to the Moon and eventually to Mars is one of the great challenges of our age, and NASA has decided it cannot solve every problem alone. The agency has selected dozens of commercial technology projects — reportedly 41 of them — that could help overcome critical difficulties in future deep-space missions.\nThe list of problems is long and surprisingly practical. How do you keep astronauts healthy during months in space? How do you store fuel that would normally boil away? How do you make oxygen, water, or building materials from the resources found on the Moon itself, rather than carrying everything from Earth? Each of these questions is being handed, at least in part, to private companies with fresh ideas.\nThis approach marks a big change in how space exploration works. For most of history, a single government agency designed and built nearly everything. Today, NASA increasingly acts like a customer, setting goals and buying solutions from a competitive market of companies large and small. The competition drives down costs and speeds up innovation.\nThe benefits may reach far beyond space. Technologies invented to recycle water on the Moon, generate power in harsh conditions, or keep humans healthy in isolation often find uses back on Earth. Space has always been an engine of everyday innovation, and by inviting many companies to contribute, NASA is widening the pipeline of ideas that could shape life both off and on our planet.",
        summaryJa: "月・火星探査という難題をNASAは単独では解けないと判断し、41件の民間技術プロジェクトを選定した。長期滞在中の健康維持、蒸発しやすい燃料の貯蔵、月の資源から酸素・水・建材を作る技術など、実務的な課題を民間に委ねる。政府機関がほぼ全てを設計した時代から、NASAが「顧客」として目標を示し競争市場から解を買う方式への転換で、コスト低減と技術革新の加速につながる。宇宙向け技術は地上にも波及し、日常のイノベーションの源になる。",
        quiz: [
          { q: "NASAが民間に委ねようとしている課題に含まれないものは？", options: ["長期滞在中の健康維持", "月の資源から酸素や水を作る", "地球の天気を変える"], answer: 2 },
          { q: "宇宙探査の進め方の変化とは？", options: ["NASAが顧客として目標を示し競争市場から解を買う", "政府がすべてを独占する", "探査をやめる"], answer: 0 },
          { q: "宇宙向け技術の副次的な利点は？", options: ["地上の日常にも波及する", "宇宙でしか使えない", "利点はない"], answer: 0 }
        ]
      },
      {
        id: "d0716-3",
        title: "Bookstores and the Freedom to Read",
        level: "★★☆",
        genre: "世界情勢",
        text: "A bookstore may seem like a quiet, ordinary place, but around the world it can be a symbol of something much larger: the freedom to read and share ideas. Reports describe how Hong Kong, once celebrated for its lively and open publishing scene, has become a difficult environment for independent bookstores after major political changes.\nIndependent bookshops have always played a special role in society. Unlike large chains that stock mainly bestsellers, small stores often carry unusual, challenging, or local titles. They host talks, support new writers, and give communities a place to encounter ideas they might not find elsewhere. When such stores struggle or close, a society loses more than a business — it loses part of its public conversation.\nThe pressures they face vary from place to place. In some cities, the challenge is economic: online shopping and e-books have made it hard for small stores to survive. In others, the pressure is political, as certain books become risky to sell and owners must weigh every title against possible trouble. Often the two forces combine.\nThe wider theme is the value of open access to information. Healthy societies depend on people being able to read widely, disagree freely, and question those in power. A bookstore is a small building, but the freedom it represents is not small at all. Watching how bookstores fare in different places tells us something important about the health of the societies around them.",
        summaryJa: "書店は静かな場所に見えて、「読み、考えを共有する自由」の象徴でもある。かつて自由な出版文化で知られた香港が、政治的変化の後、独立系書店にとって厳しい環境になったと報じられる。独立書店は変わった本や地元の本を扱い、講演や新人支援を通じて社会に「考えに出会う場」を提供する。経済的圧力(通販・電子書籍)と政治的圧力が重なることも。健全な社会は人々が広く読み、自由に異論を述べ、権力に問える環境に支えられており、書店の盛衰はその社会の健康状態を映す。",
        quiz: [
          { q: "本文が書店を何の象徴として描いているか？", options: ["読み、考えを共有する自由", "経済成長", "観光"], answer: 0 },
          { q: "独立書店が果たす役割は？", options: ["変わった本や地元の本を扱い、考えに出会う場を提供する", "ベストセラーだけを売る", "本を高く売る"], answer: 0 },
          { q: "書店が直面する圧力として挙げられているのは？", options: ["経済的圧力と政治的圧力の両方", "天候だけ", "圧力はない"], answer: 0 }
        ]
      },
      {
        id: "d0716-4",
        title: "Japan's Startups Look Beyond Tokyo",
        level: "★★☆",
        genre: "日本",
        text: "Japan's startup scene is growing more diverse, and not only in Tokyo. Reports describe a market that is strong across several fields — artificial intelligence, robotics, mobility, space, biotech, and manufacturing technology — supported by government backing, demand from big companies, and a rise of regional hubs beyond the capital.\nEach of these fields plays to a Japanese strength. In robotics and manufacturing, the country has deep engineering experience. In mobility and space, established giants provide knowledge and partners for young companies. In biotech, universities and hospitals offer research and testing grounds. Startups do not grow in isolation; they thrive where skills, money, and customers already exist, and Japan has these ingredients in many regions.\nThe role of large enterprises is especially important here. In some countries, startups mainly sell to consumers. In Japan, many of the most promising young firms sell to other businesses — providing AI tools, automation, or specialized services to established manufacturers and service companies. This 'business-to-business' demand gives startups real customers and steady revenue from the start.\nChallenges remain. Japan has fewer large venture investors than the United States, and a traditional preference for stable careers can make it hard to attract risk-takers. But the direction is encouraging. A country once known mainly for its giant corporations is building a new layer of smaller, faster companies — and spreading them across the whole nation, not just one city.",
        summaryJa: "日本のスタートアップはAI・ロボティクス・モビリティ・宇宙・バイオ・製造技術など多分野で成長し、東京以外の地方拠点も台頭している。政府支援、大企業の需要、既存の技術・資金・顧客の存在が追い風。特に、消費者向けよりも大企業向け(BtoB)にAIや自動化を提供する有望企業が多く、初期から安定収益を得やすい。大型VCの少なさや安定志向という課題は残るが、巨大企業で知られた国が、より小さく速い企業層を全国に築きつつある。",
        quiz: [
          { q: "日本のスタートアップが強い分野に含まれないものは？", options: ["AI・ロボティクス", "宇宙・バイオ", "農作物の輸入"], answer: 2 },
          { q: "日本のスタートアップの特徴として挙げられているのは？", options: ["大企業向け(BtoB)の需要で初期から安定収益を得やすい", "消費者向けのみ", "海外だけで営業する"], answer: 0 },
          { q: "残る課題は？", options: ["大型VCの少なさや安定志向", "技術者がいないこと", "顧客が全くいないこと"], answer: 0 }
        ]
      },
      {
        id: "d0716-5",
        title: "The Hidden Gatekeeper Inside Your Neurons",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "Inside every brain cell is a tiny internal skeleton, a web of fine fibers that scientists long assumed did just one simple job: holding the cell in shape. New research suggests this structure is far more clever than that. It appears to act as a gatekeeper, controlling what a neuron absorbs from its surroundings and precisely when it does so.\nNeurons are constantly taking in molecules — nutrients, signals, and chemical messages — from the space around them. The timing and amount of this uptake matter enormously, because they shape how brain cells communicate and store information. The new work shows that the cell's internal skeleton actively manages this process, opening and closing the door rather than simply standing still like scaffolding.\nWhy is this discovery important? Because many brain disorders involve problems with how neurons handle molecules and signals. If a cell absorbs too much, too little, or at the wrong moment, its function can break down. Understanding the gatekeeper that controls this flow could open new directions for studying diseases of the brain and, eventually, for designing treatments.\nThe finding also carries a lesson that appears again and again in biology: structures we assume are simple often turn out to do several jobs at once. A framework that seems to just provide support may quietly be making important decisions. As tools for observing living cells improve, scientists keep discovering that even the smallest parts of us are busier — and smarter — than we thought.",
        summaryJa: "神経細胞の中にある微小な「骨格(細い繊維の網)」は、これまで細胞の形を保つだけと考えられてきたが、新研究は、それが「門番」として細胞が周囲から何をいつ取り込むかを能動的に制御していることを示した。神経細胞は栄養や信号分子を絶えず取り込み、その量とタイミングが情報伝達と記憶を左右する。多くの脳疾患はこの取り込みの異常と関わるため、この門番の理解は病気研究や治療設計の新たな方向を開く。「単純だと思われた構造が実は複数の役割を担う」という生物学の教訓も示す。",
        quiz: [
          { q: "神経細胞内の「骨格」について新研究が示したことは？", options: ["取り込む物質と時機を制御する門番の役割を持つ", "何もしていない", "細胞を破壊する"], answer: 0 },
          { q: "取り込みの量とタイミングが重要な理由は？", options: ["情報伝達と記憶を左右するから", "細胞の色を決めるから", "無関係だから"], answer: 0 },
          { q: "本文が示す生物学の教訓は？", options: ["単純に見える構造が実は複数の役割を担う", "構造はすべて単純", "細胞は研究できない"], answer: 0 }
        ]
      }
    ]
  },
  {
    date: "2026-07-15",
    passages: [
      {
        id: "d0715-1",
        title: "A Bank Becomes Japan's Most Valuable Company",
        level: "★★★",
        genre: "ビジネス",
        text: "For many years, one name sat at the top of Japan's stock market: Toyota. The carmaker was the country's most valuable company and a symbol of its manufacturing strength. Recently, that changed. Japan's largest banking group, Mitsubishi UFJ Financial Group, overtook Toyota to become the most valuable company on the Tokyo market for the first time.\nWhat lies behind this shift? In one word: interest rates. For decades, Japan kept interest rates near zero to fight deflation. Banks struggled, because they make much of their money from the gap between the rate they pay on deposits and the rate they charge on loans. When rates are near zero, that gap is thin. Now, as Japan slowly raises interest rates, banks can earn much more on every loan, and investors expect their profits to grow.\nThe change is more than a corporate ranking. It signals that investors believe Japan's long era of ultra-low rates is truly ending. A country moving from zero rates to normal rates is a country whose economy is finally behaving differently after a generation of stagnation.\nThere are winners and losers. Savers earn more on deposits, and banks profit. But companies and homeowners face higher borrowing costs, and the government must pay more interest on its large debt. For anyone doing business in Japan, the message is clear: the rules of money are shifting, and strategies built for a zero-rate world may need to be rewritten.",
        summaryJa: "長年トヨタが占めた日本の時価総額首位を、三菱UFJフィナンシャル・グループが初めて上回った。背景は金利。デフレ対策のゼロ金利下で銀行は利ざやが薄く苦しんできたが、日本が利上げに動くと1件の融資で得られる収益が増え、投資家は増益を期待する。これは「超低金利時代の終わり」を市場が信じ始めた兆し。預金者や銀行には追い風だが、企業・住宅ローン・政府債務には負担増。ゼロ金利前提の戦略は書き換えが必要になる。",
        quiz: [
          { q: "日本の時価総額首位になったのは？", options: ["三菱UFJフィナンシャル・グループ(銀行)", "トヨタ", "ソニー"], answer: 0 },
          { q: "銀行の利益が増えると期待される理由は？", options: ["金利上昇で融資の利ざやが広がるから", "預金がゼロになるから", "支店を減らすから"], answer: 0 },
          { q: "金利上昇で負担が増える側は？", options: ["企業・住宅ローン・政府債務", "預金者のみ", "誰も影響を受けない"], answer: 0 }
        ]
      },
      {
        id: "d0715-2",
        title: "Solving the Puzzle Inside a Better Battery",
        level: "★★★",
        genre: "テクノロジー",
        text: "The battery inside your phone or electric car still uses a flammable liquid to move energy from one side to the other. Engineers dream of replacing that liquid with a solid ceramic, creating a 'solid-state' battery that would be safer, charge faster, and store more energy. One stubborn problem has blocked the way — and researchers have just explained it.\nThe trouble comes from tiny structures called dendrites. As the battery charges, lithium can form thin, finger-like growths instead of spreading evenly. In a solid-state battery, these soft lithium fingers somehow crack the hard ceramic, opening pathways that short-circuit and ruin the cell. For years it was a mystery how something soft could break something hard.\nThe new research reveals the mechanism. The lithium seeps into microscopic flaws already present in the ceramic and builds up pressure inside them. Like water freezing inside a crack in a rock and slowly splitting it, the lithium forces the flaw wider until the ceramic breaks. The damage starts not on the smooth surface but deep within tiny imperfections.\nThis insight points engineers toward solutions: make the ceramic with fewer internal flaws, or design it to relieve the pressure. Solid-state batteries are not finished yet, but understanding exactly how they fail is the crucial first step toward making them succeed — and toward electric cars that go farther and charge in minutes.",
        summaryJa: "全固体電池は安全・高速充電・大容量が期待されるが、「デンドライト」という問題が実用化を阻んできた。充電時にリチウムが指状に成長し、柔らかいはずのそれが硬いセラミックを割って短絡させる仕組みが新研究で解明された。リチウムはセラミック内部の微小な欠陥に染み込み、岩の割れ目で凍る水のように圧力をかけて内側から割る。原因が分かれば「欠陥の少ないセラミックを作る」等の対策が立てられ、量産化への重要な一歩となる。",
        quiz: [
          { q: "全固体電池が液体電池より優れる点として挙げられていないものは？", options: ["安全性", "充電の速さ", "重さがゼロになる"], answer: 2 },
          { q: "デンドライトがセラミックを割る仕組みは？", options: ["内部の微小欠陥に染み込み圧力で割る", "熱で溶かす", "電流で燃やす"], answer: 0 },
          { q: "この解明が示す対策の方向は？", options: ["欠陥の少ないセラミックを作る", "電池を大きくする", "充電をやめる"], answer: 0 }
        ]
      },
      {
        id: "d0715-3",
        title: "How Technology Crosses Borders in Secret",
        level: "★★★",
        genre: "世界情勢",
        text: "Reports suggest that Japan has become an unexpected transit point for efforts to move restricted high-technology goods to Russia, despite international rules meant to block such trade. The story highlights a difficult challenge of the modern world: controlling the flow of technology across borders.\nAfter Russia's invasion of Ukraine, many countries banned the export of advanced goods — computer chips, precision machines, and other items that could support a military — to Russia. But such rules are hard to enforce. Technology is small, valuable, and easy to disguise. A sensitive chip can be relabeled, routed through several countries, and hidden inside ordinary products before reaching its final destination.\nThis is the world of export controls and their evasion. Governments draw up lists of banned items and watch for suspicious shipments, while others look for gaps in the system, using front companies and complicated routes. It is a constant contest, and no country's controls are perfect.\nWhy does this matter to ordinary businesses? Because export rules now affect many normal companies, not just weapons makers. A firm selling machine parts or electronics must know who its customers really are and where its products will end up. Ignorance is not a defense. In a connected world, understanding the rules of what can cross which border — and to whom — has become a basic part of doing global business responsibly.",
        summaryJa: "国際的な規制にもかかわらず、日本が対ロシアの規制技術品の中継地になっているとの報道がある。半導体や精密機械など軍事転用可能な品の対ロ輸出は多くの国が禁じたが、技術は小型で偽装しやすく、複数国を経由し一般製品に隠して運ばれるため取り締まりは難しい。輸出管理とその抜け穴は絶えざる攻防で、完璧な国はない。武器メーカー以外の普通の企業も「顧客が誰で、製品がどこへ行くか」を把握する責任があり、無知は言い訳にならない。",
        quiz: [
          { q: "本文が指摘する現代の難題は？", options: ["国境を越える技術の流れを管理すること", "石油の輸送", "観光客の増加"], answer: 0 },
          { q: "技術品の規制が難しい理由は？", options: ["小型で偽装しやすく複数国を経由できるから", "重すぎて運べないから", "誰も欲しがらないから"], answer: 0 },
          { q: "普通の企業に求められることは？", options: ["顧客と製品の最終仕向地を把握する責任", "輸出を全面停止する", "規制を無視する"], answer: 0 }
        ]
      },
      {
        id: "d0715-4",
        title: "Japan's Record-Breaking Heat Alerts",
        level: "★★☆",
        genre: "日本",
        text: "Japan is once again in the grip of dangerous summer heat. Weather authorities have issued heatstroke alerts for a record number of prefectures on a single day, warning that conditions create an extremely high risk to health. For many regions, it is the first such warning of the year, and it arrives earlier and stronger than in the past.\nHeatstroke is a serious medical emergency. When the body cannot cool itself, its temperature rises to dangerous levels, and without quick treatment it can be fatal. The elderly, young children, and outdoor workers are most at risk. Every summer, Japanese hospitals treat thousands of heatstroke cases, and many people die.\nThe official advice is simple but important: drink water often, even before you feel thirsty; use air conditioning without hesitation; avoid strenuous activity during the hottest hours; and check on elderly neighbors and relatives who live alone. Schools adjust outdoor activities, and some companies shift working hours to cooler parts of the day.\nBeyond the daily warnings lies a bigger question. Summers in Japan, as in much of the world, are growing hotter and longer. What was once unusual is becoming normal, and cities are slowly adapting — planting trees for shade, painting roofs to reflect heat, and rethinking how buildings are designed. Managing extreme heat is no longer an occasional emergency; it is becoming a permanent part of life.",
        summaryJa: "日本が再び危険な暑さに見舞われ、1日で過去最多の都道府県に熱中症警戒アラートが発令された。多くの地域で今年初、しかも例年より早く強い。熱中症は命に関わる緊急事態で、高齢者・幼児・屋外労働者が高リスク。こまめな水分補給、エアコンの使用、暑い時間帯の激しい活動の回避、独居高齢者への声かけが重要。夏は世界的に長く暑くなり、植樹や屋根の反射塗装など都市の適応が進む。猛暑対策は「時々の緊急事態」から「生活の常態」へ。",
        quiz: [
          { q: "今回のニュースの内容は？", options: ["過去最多の都道府県に熱中症警戒アラートが出た", "記録的な寒波が来た", "台風が上陸した"], answer: 0 },
          { q: "熱中症のリスクが特に高いのは？", options: ["高齢者・幼児・屋外労働者", "若い会社員だけ", "誰もリスクはない"], answer: 0 },
          { q: "本文が示す大きな流れは？", options: ["猛暑対策が生活の常態になりつつある", "夏が涼しくなっている", "エアコンは使うべきでない"], answer: 0 }
        ]
      },
      {
        id: "d0715-5",
        title: "Programming Heat, One Material at a Time",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "We have become experts at controlling electricity. With switches and chips, we route it, store it, and turn it on and off billions of times per second. Heat has been much harder to command — it simply flows from hot to cold, and our tools for guiding it are mostly passive. Now scientists have created a material that can direct heat, switch how it flows, and even remember its setting without a constant supply of power.\nThink of it as a programmable material for warmth. Applying a signal can tell the material to send heat in a chosen direction or to change how much it releases, and it holds that state like a memory chip holds a bit of data. Because it does not need continuous energy to keep its setting, it could save power in countless devices.\nThe possibilities stretch across many fields. Computer chips could push heat away from their hottest points exactly when needed. Electric-car batteries could spread warmth evenly in winter and release it fast in summer. Spacecraft and buildings could switch their surfaces between trapping heat and letting it escape as conditions change.\nAs with most laboratory advances, patience is required. The effect must work reliably at everyday temperatures, survive years of use, and be made at reasonable cost. Many promising materials never clear those hurdles. But the direction is clear and quietly revolutionary: after mastering electricity, we are beginning to program heat with the same precision — and that could reshape how efficiently our machines run.",
        summaryJa: "私たちは電気の制御に長けているが、熱は高温から低温へ流れるだけで扱いが難しかった。電源なしで設定を記憶し、熱の方向や放出量を切り替えられる「熱をプログラムできる」材料が開発された。チップの局所冷却、EV電池の温度管理、宇宙機や建物の「熱を閉じ込める/逃がす」切り替えなど応用は広い。常温での信頼性や製造コストなど実用化のハードルは残るが、電気に続いて熱を精密制御する静かな革命が始まりつつある。",
        quiz: [
          { q: "新材料の特徴は？", options: ["電源なしで熱の方向や放出量の設定を記憶できる", "電気を作り出す", "熱を完全に消す"], answer: 0 },
          { q: "熱の制御が電気より難しかった理由は？", options: ["熱は高温から低温へ流れ、案内する道具が受動的だから", "熱は存在しないから", "熱は目に見えるから"], answer: 0 },
          { q: "応用例として挙げられていないものは？", options: ["チップの冷却", "EV電池の温度管理", "料理の味付け"], answer: 2 }
        ]
      }
    ]
  },
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
  }
] };
