/* 週次配信コンテンツ（追記専用）
 * 週次の自動ルーチンがこのファイルの各配列に追記する。
 * 手書きの基本データ（sentences.js / phrases.js 等）とは分離されており、
 * ルーチンはこのファイルと daily.js 以外を変更しない。
 * ID 規約: ISO週番号を含める（例: w2628-s01）。既存 ID と衝突しないこと。
 */
window.KE_DATA = window.KE_DATA || {};

/* 瞬間英作文の追加文（sentences.js の items と同スキーマ: {id, ja, en, note}） */
KE_DATA.extraSentences = [
  { id: "w2628-s01", ja: "この件は私が引き取って、明日までに対応します。", en: "Let me take this one and get it done by tomorrow.", note: "take = 引き受ける。頼れる一言" },
  { id: "w2628-s02", ja: "会議の目的を最初に確認させてください。", en: "Let me confirm the purpose of this meeting first.", note: "" },
  { id: "w2628-s03", ja: "その依頼は今週は難しいですが、来週なら対応できます。", en: "That's difficult this week, but I can handle it next week.", note: "断るときは代案とセットで" },
  { id: "w2628-s04", ja: "もう少し具体的に言うと、コストが2割増える可能性があります。", en: "To be more specific, costs could increase by 20 percent.", note: "to be more specific = 具体化の型" },
  { id: "w2628-s05", ja: "このデータはいつ時点のものですか。", en: "When was this data last updated?", note: "" },
  { id: "w2628-s06", ja: "率直なフィードバックをいただけるとありがたいです。", en: "I'd appreciate your honest feedback.", note: "I'd appreciate ... は丁寧な依頼の型" },
  { id: "w2628-s07", ja: "私たちの提案の強みを3点にまとめます。", en: "Let me summarize the strengths of our proposal in three points.", note: "" },
  { id: "w2628-s08", ja: "予算の制約を考えると、段階的な導入が現実的です。", en: "Given the budget constraints, a phased rollout is realistic.", note: "given = 〜を考慮すると" },
  { id: "w2628-s09", ja: "認識に齟齬がないよう、議事録を共有します。", en: "To make sure we're aligned, I'll share the meeting notes.", note: "aligned = 認識が揃っている" },
  { id: "w2628-s10", ja: "その点は持ち帰って、チームと相談させてください。", en: "Let me take that back and discuss it with my team.", note: "take back = 持ち帰る" },
  { id: "w2628-s11", ja: "予定が重なってしまったので、時間の変更をお願いできますか。", en: "I have a scheduling conflict — could we change the time?", note: "scheduling conflict = 予定の重複" },
  { id: "w2628-s12", ja: "結論を先に言うと、この投資は見送るべきです。", en: "To give you the conclusion first, we should hold off on this investment.", note: "hold off on = 見送る・保留する" },
  { id: "w2629-s01", ja: "まず全体像を共有してから、詳細に入ります。", en: "Let me share the big picture first, then get into the details.", note: "big picture = 全体像" },
  { id: "w2629-s02", ja: "その数字の前提を確認させてください。", en: "Let me double-check the assumptions behind that number.", note: "double-check = 再確認する" },
  { id: "w2629-s03", ja: "今週は立て込んでいるので、来週初めではいかがですか。", en: "I'm swamped this week, so how about early next week?", note: "swamped = 非常に忙しい" },
  { id: "w2629-s04", ja: "この点については認識が一致していますね。", en: "We're on the same page on this point, right?", note: "on the same page = 認識一致" },
  { id: "w2629-s05", ja: "リスクを3つに分けて説明します。", en: "Let me break the risks down into three categories.", note: "break down = 分解する" },
  { id: "w2629-s06", ja: "念のため、確認のメールをお送りします。", en: "Just to be safe, I'll send a confirmation email.", note: "just to be safe = 念のため" },
  { id: "w2629-s07", ja: "この案のメリットとデメリットを比較しましょう。", en: "Let's weigh the pros and cons of this option.", note: "weigh the pros and cons = 利害を比較する" },
  { id: "w2629-s08", ja: "予算内に収める方法を一緒に考えましょう。", en: "Let's figure out how to keep this within budget.", note: "within budget = 予算内で" },
  { id: "w2629-s09", ja: "そのフィードバックを反映して修正します。", en: "I'll revise it based on your feedback.", note: "based on = 〜を踏まえて" },
  { id: "w2629-s10", ja: "この件は優先度を上げて対応します。", en: "I'll bump up the priority on this and handle it.", note: "bump up = 引き上げる" },
  { id: "w2629-s11", ja: "現時点での見通しを率直に共有します。", en: "Let me be honest about where we stand right now.", note: "where we stand = 現状" },
  { id: "w2629-s12", ja: "この決定は次のステアリングで最終確認します。", en: "We'll finalize this decision at the next steering committee.", note: "finalize = 最終決定する" },
  { id: "w2630-s01", ja: "アジェンダを共有しますので、事前にご確認ください。", en: "I'll share the agenda, so please review it in advance.", note: "in advance = 事前に" },
  { id: "w2630-s02", ja: "議論が長引いているので、一度整理させてください。", en: "The discussion is getting long, so let me sum up where we are.", note: "sum up = 要約する" },
  { id: "w2630-s03", ja: "その仮定は少し楽観的すぎるかもしれません。", en: "That assumption might be a little too optimistic.", note: "婉曲に異論を述べる型" },
  { id: "w2630-s04", ja: "詳細は割愛して、結論だけ申し上げます。", en: "I'll skip the details and just give you the conclusion.", note: "skip = 省く" },
  { id: "w2630-s05", ja: "この点はあなたの判断にお任せします。", en: "I'll leave this point to your judgment.", note: "leave ... to = 〜に委ねる" },
  { id: "w2630-s06", ja: "スケジュールに余裕を持たせておきましょう。", en: "Let's build some buffer into the schedule.", note: "buffer = 余裕・緩衝" },
  { id: "w2630-s07", ja: "その数字は少し保守的に見積もっています。", en: "We've estimated that number a bit conservatively.", note: "conservatively = 保守的に" },
  { id: "w2630-s08", ja: "認識に相違があれば、遠慮なくおっしゃってください。", en: "If your understanding differs, please don't hesitate to say so.", note: "don't hesitate to = 遠慮なく〜する" },
  { id: "w2630-s09", ja: "この件は関係部署にも共有しておきます。", en: "I'll loop in the relevant departments on this.", note: "loop in = 情報共有の輪に入れる" },
  { id: "w2630-s10", ja: "想定外の事態に備えて代替案も用意しています。", en: "We've prepared a plan B in case something unexpected happens.", note: "plan B = 代替案" },
  { id: "w2630-s11", ja: "本題に入る前に、前回の確認をさせてください。", en: "Before we dive in, let me recap the last meeting.", note: "dive in = 本題に入る、recap = 要約" },
  { id: "w2630-s12", ja: "最終的な判断は来週まで保留にしましょう。", en: "Let's hold off on the final decision until next week.", note: "hold off on = 保留する" },
  { id: "w2631-s01", ja: "この提案の費用対効果を一言でいうと？", en: "In one sentence, what's the return on this proposal?", note: "return on = 〜の見返り・費用対効果" },
  { id: "w2631-s02", ja: "申し訳ありませんが、その締切は現実的ではありません。", en: "I'm afraid that deadline isn't realistic.", note: "I'm afraid = 残念ながら（丁寧な否定）" },
  { id: "w2631-s03", ja: "まずは小さく試して、うまくいけば広げましょう。", en: "Let's start small, and scale it up if it works.", note: "scale up = 規模を拡大する" },
  { id: "w2631-s04", ja: "その数字の出どころを教えてください。", en: "Could you tell me where that number comes from?", note: "根拠・出典を尋ねる型" },
  { id: "w2631-s05", ja: "結論から言うと、私は賛成です。", en: "To cut to the chase, I'm in favor.", note: "cut to the chase = 要点に入る" },
  { id: "w2631-s06", ja: "認識を合わせるために、用語を定義しておきましょう。", en: "Let's define our terms so we're on the same page.", note: "define terms = 用語をそろえる" },
  { id: "w2631-s07", ja: "それは想定の範囲内です。", en: "That's within our expectations.", note: "within expectations = 想定内" },
  { id: "w2631-s08", ja: "このリスクは許容できる範囲だと考えます。", en: "I'd say this risk is acceptable.", note: "acceptable = 受け入れられる" },
  { id: "w2631-s09", ja: "来週までに一次案をお送りします。", en: "I'll send you a first draft by next week.", note: "first draft = 初稿・一次案" },
  { id: "w2631-s10", ja: "恐れ入りますが、もう一度ご説明いただけますか。", en: "Sorry, could you run that by me again?", note: "run that by me = もう一度説明して" },
  { id: "w2631-s11", ja: "この点は譲れませんが、他は柔軟に対応します。", en: "This point is non-negotiable, but we're flexible on the rest.", note: "non-negotiable = 譲れない" },
  { id: "w2631-s12", ja: "全員の合意が取れたと理解してよいですか。", en: "Can I take it that we're all in agreement?", note: "take it that = 〜と理解する" }
];

/* 型・表現の追加（phrases.js の items と同スキーマ: {id, en, ja, tip}） */
KE_DATA.extraPhrases = [
  { id: "w2628-p01", en: "Could you walk me through your thinking?", ja: "どういう考えでそうしたのか、順を追って教えてもらえますか。", tip: "詰問にならない確認の型" },
  { id: "w2628-p02", en: "Here's what I'd suggest instead.", ja: "代わりに、こうしてはどうでしょう。", tip: "建設的な代案の切り出し" },
  { id: "w2628-p03", en: "I'm on a tight deadline — can this wait until Friday?", ja: "締切が迫っているので、この件は金曜まで待てますか。", tip: "on a tight deadline = 締切に追われている" },
  { id: "w2628-p04", en: "Let's take this offline.", ja: "この話は会議の後で個別にやりましょう。", tip: "会議の脱線を止める定番" },
  { id: "w2628-p05", en: "I'll keep you posted.", ja: "進捗があれば随時お知らせします。", tip: "keep you posted = 逐次報告する" },
  { id: "w2628-p06", en: "Can we lock in the date?", ja: "日程を確定してしまいましょうか。", tip: "lock in = 確定させる" },
  { id: "w2628-p07", en: "That works for me.", ja: "私はそれで大丈夫です。", tip: "日程・提案への同意の最短形" },
  { id: "w2628-p08", en: "I owe you one.", ja: "一つ借りができました（ありがとう）。", tip: "助けてもらった時のカジュアルな感謝" },
  { id: "w2630-p01", en: "Let me play that back to make sure I understand.", ja: "理解が合っているか、言い直して確認させてください。", tip: "play back = 復唱して確認する" },
  { id: "w2630-p02", en: "That's outside my area, but I can connect you with the right person.", ja: "それは私の担当外ですが、適任者におつなぎできます。", tip: "できない時の丁寧な受け渡し" },
  { id: "w2630-p03", en: "Let's not reinvent the wheel.", ja: "一から作り直すのはやめましょう（既存を活かそう）。", tip: "reinvent the wheel = 無駄に一から作る" },
  { id: "w2630-p04", en: "Can you give me the short version?", ja: "手短に要点だけ教えてもらえますか。", tip: "the short version = 要約版" },
  { id: "w2630-p05", en: "I'll take it from here.", ja: "ここからは私が引き継ぎます。", tip: "take it from here = 以降を引き受ける" },
  { id: "w2630-p06", en: "Let's touch base next week.", ja: "来週、状況をすり合わせましょう。", tip: "touch base = 近況を確認し合う" },
  { id: "w2630-p07", en: "That's a hard no for us, unfortunately.", ja: "残念ですが、それは我々には受け入れられません。", tip: "a hard no = きっぱりした拒否" },
  { id: "w2630-p08", en: "Let's circle back once we have the data.", ja: "データが揃ってから改めて議論しましょう。", tip: "circle back = 後で改めて取り上げる" }
];

/* シャドーイングの追加スクリプト（shadowing.js と同スキーマ） */
KE_DATA.extraShadowing = [
  {
    id: "w2628-sh1",
    title: "上司との1on1（フィードバック面談）",
    level: "★★☆",
    description: "褒められた点と改善点を受け止め、自分から機会を求める1on1の場面。",
    lines: [
      { s: "A", en: "Thanks for making time for our one-on-one today.", ja: "今日は1on1の時間を取ってくれてありがとう。" },
      { s: "B", en: "Of course. I've been looking forward to it.", ja: "もちろんです。楽しみにしていました。" },
      { s: "A", en: "First, your analysis last week was excellent. The client loved it.", ja: "まず、先週の分析は素晴らしかった。クライアントも高く評価していたよ。" },
      { s: "B", en: "Thank you. I spent a lot of time checking the data.", ja: "ありがとうございます。データの確認に時間をかけました。" },
      { s: "A", en: "One thing to work on is speaking up earlier in meetings.", ja: "一つ改善してほしいのは、会議でもっと早く発言することだね。" },
      { s: "B", en: "I see. Sometimes I wait too long for the perfect moment.", ja: "なるほど。完璧なタイミングを待ちすぎることがあります。" },
      { s: "A", en: "Your ideas are good, so share them even if they're not perfect.", ja: "君のアイデアは良いのだから、完璧でなくても共有してほしい。" },
      { s: "B", en: "Understood. I'll aim to speak at least once in every meeting.", ja: "わかりました。毎回の会議で最低一度は発言するようにします。" },
      { s: "A", en: "Great goal. Is there anything you need from me?", ja: "いい目標だね。私に何かしてほしいことはある？" },
      { s: "B", en: "Could you give me a chance to present at the next client meeting?", ja: "次のクライアント会議で、プレゼンする機会をいただけますか？" }
    ]
  },
  {
    id: "w2629-sh1",
    title: "顧客への値上げ交渉",
    level: "★★★",
    description: "コスト上昇を理由に価格改定を切り出し、相手の懸念に応えながら合意を目指す難しい場面。",
    lines: [
      { s: "A", en: "Thank you for meeting with me today. I have something important to discuss.", ja: "本日はお時間をいただきありがとうございます。重要なご相談があります。" },
      { s: "B", en: "Of course. What's on your mind?", ja: "もちろんです。どうされましたか？" },
      { s: "A", en: "Due to rising material costs, we need to review our pricing.", ja: "材料費の高騰により、価格の見直しが必要になっています。" },
      { s: "B", en: "I see. How much of an increase are we talking about?", ja: "なるほど。どの程度の値上げでしょうか？" },
      { s: "A", en: "We're proposing a five percent increase, starting next quarter.", ja: "来四半期から5％の値上げを提案しています。" },
      { s: "B", en: "That's significant. Our budget is already tight this year.", ja: "それは大きいですね。今年は予算が既に厳しいのです。" },
      { s: "A", en: "I understand your concern. Let me explain what's behind the number.", ja: "ご懸念は理解できます。この数字の背景をご説明させてください。" },
      { s: "A", en: "To soften the impact, we can phase it in over two quarters.", ja: "影響を和らげるため、2四半期に分けて段階的に導入できます。" },
      { s: "B", en: "That helps. Could you also keep the current terms for existing orders?", ja: "それは助かります。既存の注文分は現行条件のままにできますか？" },
      { s: "A", en: "That's a fair request. Let me confirm and send you a written proposal.", ja: "妥当なご要望です。確認のうえ、書面で提案をお送りします。" }
    ]
  },
  {
    id: "w2630-sh1",
    title: "海外チームとのブレインストーミング",
    level: "★★☆",
    description: "アイデアを出し合い、相手の案に乗ったり広げたりする協働の場面。相づちと発想の広げ方を体に入れる。",
    lines: [
      { s: "A", en: "Thanks for joining. Today, let's brainstorm ideas for the new campaign.", ja: "参加ありがとう。今日は新しいキャンペーンのアイデアを出し合いましょう。" },
      { s: "B", en: "Sounds good. Should we aim for quantity first and filter later?", ja: "いいですね。まず数を出して、後で絞りますか？" },
      { s: "A", en: "Exactly. No idea is a bad idea at this stage.", ja: "その通り。この段階では悪いアイデアはありません。" },
      { s: "B", en: "Okay, how about a short video series featuring real customers?", ja: "では、実際の顧客を起用した短い動画シリーズはどうでしょう？" },
      { s: "A", en: "I like that. We could build on it with a social media challenge.", ja: "いいですね。それを発展させて、SNSのチャレンジ企画も加えられます。" },
      { s: "B", en: "Great point. That would encourage people to share their own stories.", ja: "なるほど。それなら人々が自分の体験を共有したくなりますね。" },
      { s: "A", en: "Let's park that idea and come back to it after we list a few more.", ja: "そのアイデアは一旦置いて、もう少し出してから戻りましょう。" },
      { s: "B", en: "Fair enough. Another option is partnering with a local influencer.", ja: "もっともです。もう一つの案は、地元のインフルエンサーとの提携です。" },
      { s: "A", en: "Interesting. Let's note it and evaluate all the ideas together later.", ja: "面白いですね。メモして、後で全案をまとめて評価しましょう。" },
      { s: "B", en: "Perfect. This has been a really productive session.", ja: "完璧です。とても生産的な打ち合わせでした。" }
    ]
  },
  {
    id: "w2631-sh1",
    title: "週次進捗報告と遅延の挽回",
    level: "★★☆",
    description: "週次会議で遅延を率直に報告し、挽回策を提示して合意を得る場面。悪い知らせの切り出しと前向きな提案の型を体に入れる。",
    lines: [
      { s: "A", en: "Let's start our weekly status meeting. How's the project going?", ja: "週次の進捗会議を始めましょう。プロジェクトの状況はどうですか？" },
      { s: "B", en: "Overall we're on track, but I have one issue to flag.", ja: "全体としては順調ですが、一つ共有したい問題があります。" },
      { s: "A", en: "Go ahead. What's the issue?", ja: "どうぞ。どんな問題ですか？" },
      { s: "B", en: "The design review took longer than planned, so we're two days behind.", ja: "デザインレビューが予定より長引き、2日遅れています。" },
      { s: "A", en: "I see. Will that affect the final deadline?", ja: "なるほど。それは最終締切に影響しますか？" },
      { s: "B", en: "Not if we act now. I've already prepared a recovery plan.", ja: "今動けば影響しません。すでに挽回策を用意しました。" },
      { s: "A", en: "Good. Walk me through it.", ja: "いいですね。説明してください。" },
      { s: "B", en: "We'll run testing and documentation in parallel to save time.", ja: "時間を節約するため、テストと文書化を並行して進めます。" },
      { s: "A", en: "That makes sense. Let me know if you need more people.", ja: "理にかなっていますね。人手が要るなら言ってください。" },
      { s: "B", en: "Thanks. I'll send an updated schedule by end of day.", ja: "ありがとうございます。今日中に更新版のスケジュールをお送りします。" }
    ]
  }
];

/* PREP の追加お題（prep.js の prepTopics と同スキーマ） */
KE_DATA.extraPrep = [
  {
    id: "w2628-t01", ja: "無人タクシー（ロボタクシー）は日本でも導入すべきだと思いますか？", en: "Should driverless taxis be introduced in Japan?",
    sample: { point: "Yes, I think Japan should introduce driverless taxis, starting with limited areas.", reason: "The main reason is the serious shortage of drivers in our aging society.", example: "For example, some rural areas have already lost their bus and taxi services, while robotaxis are already carrying passengers safely in several American cities.", point2: "So a careful, step-by-step introduction would solve real problems." }
  },
  {
    id: "w2628-t02", ja: "企業は一つの大口顧客への依存を減らすべきだと思いますか？", en: "Should companies reduce their dependence on a single big customer?",
    sample: { point: "Yes, reducing dependence on one big customer should be a priority.", reason: "Because losing that customer could destroy the whole business overnight.", example: "For example, many Asian manufacturers are now developing regional customers because orders from one large market have become unpredictable.", point2: "That's why diversification is not a cost — it's insurance." }
  },
  {
    id: "w2628-t03", ja: "政府は基礎研究への投資を増やすべきだと思いますか？", en: "Should the government invest more in basic research?",
    sample: { point: "I strongly believe the government should invest more in basic research.", reason: "This is because basic research is the seed of future industries, even when it looks unprofitable today.", example: "For example, the technologies behind smartphones, vaccines, and AI all grew out of decades of fundamental research.", point2: "Therefore, cutting basic research to save money is like eating your seed corn." }
  },
  {
    id: "w2629-t01", ja: "日本企業はもっと積極的に海外へ進出すべきだと思いますか？", en: "Should Japanese companies expand overseas more aggressively?",
    sample: { point: "Yes, I think Japanese companies should expand overseas more aggressively.", reason: "The main reason is that the domestic market is shrinking as the population declines.", example: "For example, a major Japanese retailer is reportedly investing heavily in a European convenience store chain to find new growth.", point2: "So overseas expansion is not just an option — it's a necessity for long-term growth." }
  },
  {
    id: "w2629-t02", ja: "AIは工場やものづくりの仕事を良くすると思いますか？", en: "Will AI make factory and manufacturing jobs better?",
    sample: { point: "On balance, I believe AI will make manufacturing jobs better, not worse.", reason: "This is because AI takes over dangerous and repetitive tasks, letting people focus on skilled work.", example: "For example, many Japanese manufacturers now use AI to inspect products and predict machine failures, so workers spend less time on dull checks.", point2: "So with the right training, AI can make factory work safer and more rewarding." }
  },
  {
    id: "w2629-t03", ja: "株価が急落したとき、個人はどう行動すべきだと思いますか？", en: "How should individuals act when stock prices crash?",
    sample: { point: "In my view, individuals should stay calm and avoid panic-selling when prices crash.", reason: "Because a falling price does not mean a good company has become worthless overnight.", example: "For example, chip stocks recently halved in value, yet the companies kept making products and earning money.", point2: "So the smart move is usually to focus on long-term value rather than react to sudden market moods." }
  },
  {
    id: "w2630-t01", ja: "宇宙開発は民間企業に任せるべきだと思いますか？", en: "Should space development be left to private companies?",
    sample: { point: "I think space development should be a partnership between governments and private companies, not left entirely to either.", reason: "This is because competition among private firms lowers costs, while governments provide long-term goals and safety rules.", example: "For example, NASA now pays private companies to deliver cargo to the Moon, which has made missions far cheaper and more frequent.", point2: "So the best approach combines private efficiency with public direction." }
  },
  {
    id: "w2630-t02", ja: "各国はAIを核兵器のように国際ルールで管理すべきだと思いますか？", en: "Should nations manage AI with international rules, like nuclear weapons?",
    sample: { point: "Yes, I believe powerful AI needs international rules, similar to those for nuclear technology.", reason: "The main reason is that advanced AI can affect global security through cyberattacks, disinformation, and military use.", example: "For example, major powers have started to hold talks about AI safety, treating it as a matter of diplomacy, not just business.", point2: "So while rules will be hard to write, trying to manage AI cooperatively is wiser than an uncontrolled race." }
  },
  {
    id: "w2630-t03", ja: "個人の環境への取り組み（リサイクル等）は意味があると思いますか？", en: "Do individual environmental efforts, like recycling, really matter?",
    sample: { point: "Yes, I think individual green efforts matter, both directly and indirectly.", reason: "This is because taking action on a value tends to strengthen it, making people support bigger reforms too.", example: "For example, a recent study found that people who recycle or eat less meat are actually more likely to support major environmental policies.", point2: "So personal action and large-scale change are not rivals — they reinforce each other." }
  },
  {
    id: "w2631-t01", ja: "AIのデータセンターが必要とする電力を、政府は支援して整備すべきだと思いますか？", en: "Should governments help build the electricity supply that AI data centers need?",
    sample: { point: "I think governments should help build the power supply for AI, but with clear conditions.", reason: "The main reason is that reliable electricity has become basic infrastructure, like roads or ports, that markets alone may not build fast enough.", example: "For example, investors are now funding nuclear plants and new power lines just to run data centers, and governments are being asked to approve and support these projects.", point2: "So public support makes sense, as long as it also protects households from higher energy prices." }
  },
  {
    id: "w2631-t02", ja: "最も強力なAIには、政府が「緊急停止」の仕組みや厳しいルールを義務づけるべきだと思いますか？", en: "Should governments require a 'kill switch' or strict rules for the most powerful AI systems?",
    sample: { point: "Yes, I believe the most powerful AI systems should come with strict rules and a way to shut them down.", reason: "This is because advanced AI could cause serious harm through cyberattacks or mistakes if no one can stop it quickly.", example: "For example, lawmakers have started to discuss 'kill switch' laws after reports that some AI models behaved in unexpected ways during testing.", point2: "So sensible safety rules are not anti-technology — they are what let us use powerful AI with confidence." }
  },
  {
    id: "w2631-t03", ja: "AI企業は、報道機関や作家の作品を使うとき対価を払うべきだと思いますか？", en: "Should AI companies pay news publishers and writers when they use their work?",
    sample: { point: "Yes, I think AI companies should pay publishers and writers for the work they rely on.", reason: "The main reason is that AI systems are trained on human-made articles and books, and creators need income to keep producing them.", example: "For example, if readers get all their answers from AI and news sites lose visitors, the reporting that AI depends on could slowly disappear.", point2: "So paying original sources is not only fair — it protects the very information that makes AI useful." }
  }
];

/* ロールプレイの追加シナリオ（scenarios.js と同スキーマ） */
KE_DATA.extraScenarios = [];
