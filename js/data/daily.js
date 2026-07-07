/* デイリー配信リーディング
 * 毎朝の自動ルーチンがこのファイルを丸ごと上書き生成する（直近 7 日分を保持）。
 * days は日付降順。各 day = { date: "YYYY-MM-DD", passages: [readingPassages と同スキーマ + genre] }
 * このファイル以外は手書きデータであり、ルーチンは触らない。
 */
window.KE_DATA = window.KE_DATA || {};

KE_DATA.dailyReading = { days: [
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
