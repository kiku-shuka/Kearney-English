/* 速読リーディング用パッセージ
 * Kearney流リーディングメソッド：「難しい文章を頭から和訳する」のではなく、
 * 簡単な英語で書かれた文章を、意味を取り違えない前提でざっくり速く読む。
 * 1 日数千〜1 万語の多読・速読が推奨されている。
 */
window.KE_DATA = window.KE_DATA || {};

KE_DATA.readingPassages = [
  {
    id: "smalltalk",
    title: "Small Talk Before Meetings",
    level: "★☆☆",
    theme: "職場の雑談",
    text: "In many offices around the world, meetings do not start right away. People spend the first few minutes talking about the weather, sports, or their weekend. This is called small talk. Some people think small talk is a waste of time, but it has an important job. It helps people relax and feel comfortable with each other. When people feel comfortable, they share their ideas more openly. Small talk is especially useful when you work with people from other countries. A short, friendly conversation shows that you are interested in them as people, not just as business partners. You do not need perfect English for small talk. Simple questions work very well. You can ask, \"How was your weekend?\" or \"Is this your first time in Tokyo?\" The most important thing is to listen to the answer and ask one more question about it. If someone says they went hiking, you can ask where they went. Remember that you will often hear the same questions again and again. This means you can prepare your own answers in advance. If you have two or three good stories ready, small talk becomes much easier and even fun.",
    summaryJa: "会議前の雑談(スモールトーク)は時間の無駄ではなく、互いをリラックスさせ、意見を出しやすくする働きがある。完璧な英語は不要で、簡単な質問と「もう一問の深掘り」が大切。よく聞かれる質問は決まっているので、自分の答えを事前に用意しておくと楽になる。",
    quiz: [
      { q: "この文章によると、スモールトークの役割は？", options: ["時間を節約すること", "人をリラックスさせ意見を出しやすくすること", "英語力を試すこと"], answer: 1 },
      { q: "雑談で最も大切なこととして挙げられているのは？", options: ["完璧な英語で話すこと", "答えを聞いてもう一つ質問すること", "長い話を用意すること"], answer: 1 },
      { q: "筆者が勧めている準備は？", options: ["自分の答えやエピソードを用意しておく", "会議資料を先に読む", "雑談を避ける計画を立てる"], answer: 0 }
    ]
  },
  {
    id: "timezones",
    title: "Working Across Time Zones",
    level: "★★☆",
    theme: "海外オフィスとの協働",
    text: "When your team is spread across different countries, time zones become a daily challenge. A meeting at 10 a.m. in Tokyo is 2 a.m. in London and 9 p.m. the previous day in New York. There is no perfect time for everyone, so global teams have developed some smart habits. First, they rotate meeting times. If the Tokyo team joined a late-night call this month, the London team takes the difficult slot next month. This keeps the pain fair. Second, they write things down. Good global teams do not depend only on meetings. They share short written updates, so people in other time zones can read them when they wake up. Clear documents reduce the number of meetings everyone needs to attend. Third, they use the overlap hours wisely. Tokyo and London share only a few working hours each day, usually in the Japanese evening. Teams save real-time discussions for those hours and use the rest of the day for individual work. Finally, they make expectations clear. Instead of saying \"as soon as possible,\" they say \"by Friday noon Japan time.\" Small habits like these make global teamwork much smoother and protect everyone's sleep.",
    summaryJa: "時差のあるグローバルチームの工夫:①つらい時間帯の会議を持ち回りにする ②文章で共有し会議を減らす ③重なる時間帯をリアルタイム議論に使う ④「なるはや」ではなく期限を明確に言う。",
    quiz: [
      { q: "会議時間を「持ち回り」にする理由は？", options: ["会議を短くするため", "負担を公平にするため", "参加者を減らすため"], answer: 1 },
      { q: "会議を減らすために推奨されているのは？", options: ["短い書面での共有", "電話の活用", "朝型勤務"], answer: 0 },
      { q: "「as soon as possible」の代わりに勧められているのは？", options: ["丁寧にお願いする", "期限を具体的に伝える", "上司経由で依頼する"], answer: 1 }
    ]
  },
  {
    id: "cashless",
    title: "The Rise of Cashless Payments",
    level: "★★☆",
    theme: "ビジネストレンド",
    text: "Japan has long been known as a country that loves cash. For many years, people paid for almost everything with coins and bills, even for large purchases. But this is changing quickly. The share of cashless payments in Japan has grown steadily and is now above forty percent of all consumer spending. Several forces are pushing this change. Smartphone payment apps have made paying as simple as showing a QR code. The government has supported the shift with point campaigns, because cashless payments create useful data and reduce the cost of handling cash. The COVID-19 pandemic also played a role, as many people started to avoid touching money. For businesses, the change brings both benefits and costs. Shops can serve customers faster and understand their buying patterns better. On the other hand, payment companies charge fees, which can be heavy for small restaurants and stores with thin profits. This is one reason some small shops still accept only cash. Looking ahead, most experts expect the cashless share to keep rising, but nobody expects cash to disappear soon. Many older customers still prefer it, and cash remains useful during disasters when networks go down. The future of payment in Japan will likely be a mix of both worlds.",
    summaryJa: "日本のキャッシュレス比率は消費の4割超まで上昇。スマホ決済・政府のポイント施策・感染症対策が追い風。店側には迅速な接客と購買データの利点がある一方、手数料が小規模店の負担に。高齢層の現金志向や災害時の備えから、現金と併存する未来が見込まれる。",
    quiz: [
      { q: "日本のキャッシュレス比率について正しいのは？", options: ["1割未満にとどまる", "消費支出の4割を超えた", "9割に達した"], answer: 1 },
      { q: "小さな店が現金のみを続ける理由として挙げられているのは？", options: ["決済手数料の負担", "スマホの操作が難しい", "政府の規制"], answer: 0 },
      { q: "今後の見通しとして本文が述べているのは？", options: ["現金はすぐに消える", "キャッシュレスは頭打ちになる", "両者が併存していく"], answer: 2 }
    ]
  },
  {
    id: "meetings",
    title: "What Makes a Good Meeting?",
    level: "★★☆",
    theme: "会議の生産性",
    text: "Most professionals spend many hours in meetings every week, yet few of those meetings feel truly useful. What separates a good meeting from a bad one? Research and experience point to a few simple rules. First, a good meeting has a clear purpose. Before sending an invitation, the organizer should be able to answer one question: what decision or output do we need by the end? If there is no answer, an email may be enough. Second, the right people are in the room, and only the right people. When too many people attend, responsibility becomes unclear and discussions slow down. Third, materials are shared in advance. If participants read a short document before the meeting, the time together can be spent on discussion, not on explanation. Some companies even start meetings with ten minutes of silent reading to make sure everyone has the same information. Fourth, every meeting ends with clear next steps. Who will do what, by when? These action items should be written down and shared. Finally, good organizers respect the clock. Meetings grow to fill whatever time they are given, so shorter default times often produce sharper discussions. A well-run thirty-minute meeting can achieve more than a lazy hour.",
    summaryJa: "良い会議の条件:①目的(必要な決定・アウトプット)が明確 ②必要な人だけが出席 ③資料の事前共有(冒頭に黙読の時間を設ける会社も) ④「誰が・何を・いつまでに」のネクストステップで締める ⑤時間を短く設定する(30分の良い会議は怠惰な1時間に勝る)。",
    quiz: [
      { q: "会議を設定する前に主催者が答えるべき問いは？", options: ["誰を呼ぶか", "終了時に必要な決定・アウトプットは何か", "どの会議室を使うか"], answer: 1 },
      { q: "資料の事前共有の目的は？", options: ["会議時間を説明ではなく議論に使うため", "出席者を減らすため", "議事録を不要にするため"], answer: 0 },
      { q: "会議時間について本文の主張は？", options: ["長いほど成果が出る", "短い設定の方が議論が締まる", "時間は成果と無関係"], answer: 1 }
    ]
  },
  {
    id: "recommendation",
    title: "How Consultants Build a Recommendation",
    level: "★★★",
    theme: "コンサルの仕事",
    text: "When a company faces a difficult decision, it often asks consultants for a recommendation. How do consultants build one? The process usually starts with a clear definition of the question. \"Should we enter the Vietnamese market?\" is a better question than \"What should we do about Asia?\" A sharp question keeps the whole project focused. Next, consultants form a hypothesis — an early, testable answer such as \"Yes, we should enter through a partnership with a local distributor.\" The hypothesis is not a conclusion; it is a tool. It tells the team exactly what data they need to collect. If the hypothesis depends on market growth, the team studies market size. If it depends on competition, they analyze competitors' strengths. Interviews with experts and customers fill the gaps that public data cannot cover. As evidence comes in, the hypothesis is tested and often changed. Good teams treat a broken hypothesis as progress, not failure, because it narrows the range of possible answers. Finally, the findings are organized into a simple storyline: here is the situation, here is what we learned, and here is what you should do. Numbers support the story, but the story leads. A recommendation that cannot be explained in three sentences is usually not ready.",
    summaryJa: "コンサルの提言づくり:①問いを鋭く定義する ②仮説(検証可能な仮の答え)を早く立て、集めるべきデータを絞る ③データとインタビューで仮説を検証し、壊れたら前進と捉えて修正 ④結論は「状況→分かったこと→やるべきこと」のシンプルなストーリーに。3文で説明できない提言はまだ未完成。",
    quiz: [
      { q: "仮説の役割として本文が述べているのは？", options: ["最終結論そのもの", "集めるべきデータを教えてくれる道具", "クライアントへの約束"], answer: 1 },
      { q: "仮説が壊れたとき、良いチームはどう捉える？", options: ["失敗として反省する", "答えの範囲が絞れた前進と捉える", "プロジェクトを中止する"], answer: 1 },
      { q: "完成した提言の条件として挙げられているのは？", options: ["3文で説明できること", "100ページの資料があること", "全データを載せること"], answer: 0 }
    ]
  }
];
