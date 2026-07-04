/* 実践ロールプレイシナリオ
 * 相手役のセリフはブラウザの音声合成で再生され、ユーザーは自分の番で
 * 実際に声に出して応答する。モデル回答と比べて自己評価する。
 * シナリオはコンサルティングの現場で実際に英語が使われる場面を基にしている。
 */
window.KE_DATA = window.KE_DATA || {};

KE_DATA.scenarios = [
  {
    id: "firstcall",
    title: "海外オフィスとの初回コール",
    level: "★☆☆",
    userRole: "東京オフィスのコンサルタント（あなた）",
    partnerRole: "Sarah（ロンドンオフィス）",
    description: "初めて一緒に働く海外メンバーとの顔合わせコール。自己紹介と進捗共有、日程調整を行う。",
    turns: [
      { speaker: "partner", en: "Hi, this is Sarah from the London office. Thanks for joining the call.", ja: "こんにちは、ロンドンオフィスのサラです。コールに参加してくれてありがとう。" },
      { speaker: "user", task: "挨拶して自己紹介する（名前・オフィス・担当）", model: "Hi Sarah, nice to meet you. I'm Ken from the Tokyo office. I'm in charge of the data analysis for this project.", ja: "こんにちはサラさん、はじめまして。東京オフィスのケンです。このプロジェクトではデータ分析を担当しています。", hints: ["nice to meet you", "I'm in charge of ...", "I'm responsible for ..."] },
      { speaker: "partner", en: "Great to have you on board, Ken. Could you tell me about the current status on your side?", ja: "チームに加わってくれて嬉しいわ、ケン。そちらの現在の状況を教えてもらえる？" },
      { speaker: "user", task: "進捗を報告する（インタビュー完了・分析中・金曜までに共有）", model: "Sure. We completed ten customer interviews last week, and we're now analyzing the results. We'll share a summary by Friday.", ja: "はい。先週10件の顧客インタビューを完了し、現在結果を分析中です。金曜までにサマリーを共有します。", hints: ["We completed ...", "we're now -ing ...", "We'll share ... by Friday"] },
      { speaker: "partner", en: "Sounds good. One thing — could we move our weekly call to Wednesday morning your time?", ja: "いいですね。ひとつ相談ですが、週次コールをそちらの水曜午前に動かせないかしら？" },
      { speaker: "user", task: "都合を確認して具体的な時刻を提案する", model: "Wednesday morning works for me. Could we start at ten a.m. Japan time?", ja: "水曜午前で大丈夫です。日本時間の午前10時開始でいかがですか？", hints: ["... works for me", "Could we start at ...?", "How about ...?"] },
      { speaker: "partner", en: "Ten a.m. works. I'll update the invite. Anything else from your side?", ja: "10時で大丈夫。招待を更新しておくわね。そちらから他に何かある？" },
      { speaker: "user", task: "特にないことを伝え、会話を締める", model: "No, that's all from my side. Thank you, Sarah. Talk to you on Wednesday.", ja: "いえ、私からは以上です。ありがとう、サラさん。また水曜に。", hints: ["that's all from my side", "Talk to you on ..."] }
    ]
  },
  {
    id: "interview",
    title: "有識者インタビュー",
    level: "★★☆",
    userRole: "インタビュアー（あなた）",
    partnerRole: "David（小売業界の専門家）",
    description: "業界専門家への英語インタビュー。目的説明・質問・深掘り・クロージングまでを主導する。",
    turns: [
      { speaker: "partner", en: "Hello, I'm David. I've worked in the retail industry for about twenty years.", ja: "こんにちは、デイビッドです。小売業界で約20年働いてきました。" },
      { speaker: "user", task: "お礼を言い、インタビューの目的を説明する", model: "Thank you for your time today, David. We'd like to learn about recent trends in the retail market.", ja: "本日はお時間をいただきありがとうございます。小売市場の最近のトレンドについて伺いたいと思っています。", hints: ["Thank you for your time", "We'd like to learn about ..."] },
      { speaker: "partner", en: "Happy to help. Where would you like to start?", ja: "喜んで。どこから始めましょうか？" },
      { speaker: "user", task: "大きな質問から始める（この5年の最大の変化）", model: "Let me start with a big-picture question. What are the biggest changes you've seen in the last five years?", ja: "まず全体像の質問から。この5年間で見てきた最大の変化は何でしょうか？", hints: ["Let me start with ...", "What are the biggest changes ...?"] },
      { speaker: "partner", en: "The biggest change is the shift to online. Customers now expect same-day delivery and personalized offers.", ja: "最大の変化はオンラインへのシフトです。顧客は今や当日配送と個別化されたオファーを期待しています。" },
      { speaker: "user", task: "興味を示し、具体例を求めて深掘りする", model: "That's interesting. Could you give us a concrete example of how companies are responding?", ja: "興味深いですね。企業がどう対応しているか、具体例を挙げていただけますか？", hints: ["That's interesting", "Could you give us a concrete example ...?"] },
      { speaker: "partner", en: "Sure. Major players are investing heavily in their apps and loyalty programs, and smaller companies are partnering with delivery platforms.", ja: "もちろん。大手はアプリとロイヤルティプログラムに大きく投資し、中小はデリバリープラットフォームと提携しています。" },
      { speaker: "user", task: "数字を確認する（オンライン販売の比率）", model: "I see. Roughly what percentage of sales comes from online channels these days?", ja: "なるほど。最近では売上のおよそ何％がオンラインチャネルから来ているのでしょうか？", hints: ["Roughly what percentage ...?", "comes from ..."] },
      { speaker: "partner", en: "It varies, but for major chains, around thirty percent and growing.", ja: "まちまちですが、大手チェーンでは約30％で、まだ伸びています。" },
      { speaker: "user", task: "感謝を伝えてインタビューを締める", model: "This has been very helpful. Thank you so much for your insights, David.", ja: "大変参考になりました。貴重なお話をありがとうございました。", hints: ["This has been very helpful", "Thank you for your insights"] }
    ]
  },
  {
    id: "weekly",
    title: "クライアントへの週次報告",
    level: "★★☆",
    userRole: "プロジェクトメンバー（あなた）",
    partnerRole: "クライアントの部長",
    description: "順調な点と遅れている点を正直に伝え、挽回策とネクストステップまで合意する。",
    turns: [
      { speaker: "partner", en: "Hi, thanks for the update meeting. How is the project going overall?", ja: "アップデート会議をありがとう。プロジェクトは全体としてどうですか？" },
      { speaker: "user", task: "全体は順調だが分析に遅れがあることを伝える", model: "Overall, we're on track. The customer survey is complete, but the data analysis is taking a bit longer than planned.", ja: "全体としては予定通りです。顧客調査は完了しましたが、データ分析が計画より少し長引いています。", hints: ["we're on track", "... is taking longer than planned"] },
      { speaker: "partner", en: "I see. How much of a delay are we talking about?", ja: "なるほど。どの程度の遅れですか？" },
      { speaker: "user", task: "遅れの程度と挽回策を具体的に伝える", model: "About three days. We've added one more analyst, so we expect to catch up by the end of next week.", ja: "約3日です。アナリストを1名追加したので、来週末までには追いつく見込みです。", hints: ["About three days", "we expect to catch up by ..."] },
      { speaker: "partner", en: "Okay. Were there any interesting findings from the survey?", ja: "わかりました。調査から何か興味深い発見はありましたか？" },
      { speaker: "user", task: "主要な発見（6割が価格に不満）と示唆を共有する", model: "Yes. About sixty percent of respondents said the price is the main barrier. We think there's room to review the pricing strategy.", ja: "はい。回答者の約6割が価格が最大の障壁だと答えました。価格戦略を見直す余地があると考えています。", hints: ["About sixty percent of ...", "there's room to ..."] },
      { speaker: "partner", en: "Interesting. Let's discuss that in more detail at the next steering committee.", ja: "興味深い。次のステアリングコミッティで詳しく議論しましょう。" },
      { speaker: "user", task: "合意し、事前に資料を共有すると約束する", model: "Sounds good. We'll prepare a short summary of the findings and share it two days before the meeting.", ja: "承知しました。発見のサマリーを準備し、会議の2日前に共有します。", hints: ["Sounds good", "We'll prepare ... and share it ..."] }
    ]
  },
  {
    id: "qa",
    title: "提案への質疑応答",
    level: "★★★",
    userRole: "提案者（あなた）",
    partnerRole: "クライアントの役員",
    description: "投資額への懸念に対し、根拠とリスク対応を示して納得を得る。最も難易度の高い場面。",
    turns: [
      { speaker: "partner", en: "Thank you for the proposal. Honestly, I'm concerned that the investment is too large.", ja: "提案をありがとう。正直に言うと、投資額が大きすぎることを懸念しています。" },
      { speaker: "user", task: "懸念を受け止め、投資回収期間という根拠を示す", model: "I understand your concern. Let me explain the reasoning behind the investment. Based on our analysis, the payback period is about two and a half years.", ja: "ご懸念は理解できます。投資の根拠をご説明させてください。我々の分析では、投資回収期間は約2年半です。", hints: ["I understand your concern", "Let me explain the reasoning", "payback period"] },
      { speaker: "partner", en: "What if the market doesn't grow as fast as you expect?", ja: "市場が想定ほど速く成長しなかったらどうしますか？" },
      { speaker: "user", task: "保守的シナリオでの数字と、リスクを抑える提案をする", model: "That's a fair point. Even in our conservative scenario, the project breaks even in four years. We also recommend starting with a small pilot to limit the risk.", ja: "もっともなご指摘です。保守的なシナリオでも4年で損益分岐に達します。また、リスクを抑えるため小規模なパイロットから始めることを推奨します。", hints: ["That's a fair point", "Even in our conservative scenario", "starting with a pilot"] },
      { speaker: "partner", en: "A pilot sounds reasonable. How long would it take?", ja: "パイロットは妥当に聞こえますね。どのくらいかかりますか？" },
      { speaker: "user", task: "パイロットの期間・費用・判断方法を説明する", model: "The pilot would take three months and cost about ten percent of the full investment. We can decide on the full rollout based on the results.", ja: "パイロットは3か月で、費用は全体投資の約10％です。その結果を踏まえて本格展開を判断できます。", hints: ["would take three months", "about ten percent of ...", "based on the results"] },
      { speaker: "partner", en: "Alright. Please send us the detailed pilot plan by next week.", ja: "わかりました。来週までに詳細なパイロット計画を送ってください。" },
      { speaker: "user", task: "期限を約束し、前向きに会話を締める", model: "Certainly. We'll send the detailed plan by next Friday. Thank you for the constructive discussion.", ja: "承知しました。来週金曜までに詳細計画をお送りします。建設的なご議論をありがとうございました。", hints: ["Certainly", "We'll send ... by next Friday", "Thank you for the constructive discussion"] }
    ]
  }
];
