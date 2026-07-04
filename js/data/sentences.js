/* 瞬間英作文デッキ
 * 日本語を見て 5〜10 秒以内に英語を口に出すトレーニング用の文例集。
 * VERSANT の評価軸（文章構文・語彙・流暢さ）を意識し、
 * ビジネス・コンサルティングの現場で頻出する文を収録している。
 */
window.KE_DATA = window.KE_DATA || {};

KE_DATA.sentenceDecks = [
  {
    id: "basic",
    name: "基礎ビジネス",
    level: "★☆☆",
    description: "挨拶・依頼・日程調整など、どの職種でも毎日使う基本文",
    items: [
      { id: "b01", ja: "本日はお時間をいただきありがとうございます。", en: "Thank you for taking the time to meet with us today.", note: "Thank you for your time today. でも可" },
      { id: "b02", ja: "簡単に自己紹介させてください。", en: "Let me briefly introduce myself.", note: "" },
      { id: "b03", ja: "私はこのプロジェクトのマネージャーを務めています。", en: "I'm the manager of this project.", note: "I serve as ... はやや硬い表現" },
      { id: "b04", ja: "来週の火曜日に打ち合わせを設定できますか。", en: "Could we set up a meeting for next Tuesday?", note: "set up = arrange" },
      { id: "b05", ja: "資料を金曜日までにお送りします。", en: "I'll send you the materials by Friday.", note: "by = 期限、until = 継続" },
      { id: "b06", ja: "その件について確認して、折り返しご連絡します。", en: "Let me check on that and get back to you.", note: "get back to you は頻出" },
      { id: "b07", ja: "ご質問があれば、いつでもご連絡ください。", en: "If you have any questions, please feel free to contact me anytime.", note: "" },
      { id: "b08", ja: "もう一度説明していただけますか。", en: "Could you explain that again?", note: "Could you go over that again? でも可" },
      { id: "b09", ja: "おっしゃっていることは理解できますが、少し懸念があります。", en: "I understand what you're saying, but I have a few concerns.", note: "反論の前のクッション表現" },
      { id: "b10", ja: "会議を30分後ろ倒しにできますか。", en: "Could we push the meeting back by 30 minutes?", note: "push back = 後ろ倒し、move up = 前倒し" },
      { id: "b11", ja: "この提案にはおおむね賛成です。", en: "I generally agree with this proposal.", note: "" },
      { id: "b12", ja: "締め切りを延ばしていただくことは可能ですか。", en: "Would it be possible to extend the deadline?", note: "Would it be possible to ...? は丁寧な依頼の型" },
      { id: "b13", ja: "念のため、明日の朝リマインドを送ります。", en: "Just in case, I'll send you a reminder tomorrow morning.", note: "" },
      { id: "b14", ja: "私の理解が正しければ、これは来月から始まります。", en: "If I understand correctly, this will start next month.", note: "認識合わせの定番" },
      { id: "b15", ja: "詳細は追ってメールでお知らせします。", en: "I'll follow up with the details by email.", note: "follow up は動詞でも使える" },
      { id: "b16", ja: "あいにくその日は都合がつきません。", en: "Unfortunately, I'm not available on that day.", note: "" },
      { id: "b17", ja: "少し時間をいただいて考えてもいいですか。", en: "Could I take some time to think about it?", note: "" },
      { id: "b18", ja: "本日の議題は3つあります。", en: "We have three items on today's agenda.", note: "agenda item = 議題" },
      { id: "b19", ja: "まず現状を簡単に説明します。", en: "First, let me briefly explain the current situation.", note: "" },
      { id: "b20", ja: "何かお手伝いできることはありますか。", en: "Is there anything I can help you with?", note: "" },
      { id: "b21", ja: "お手数をおかけして申し訳ありません。", en: "I'm sorry for the trouble.", note: "I apologize for the inconvenience. はより丁寧" },
      { id: "b22", ja: "その点は次回の会議で議論しましょう。", en: "Let's discuss that point at the next meeting.", note: "discuss に about は不要" },
      { id: "b23", ja: "進捗があり次第、共有します。", en: "I'll share updates as soon as there's any progress.", note: "" },
      { id: "b24", ja: "本日はここまでにしましょう。", en: "Let's wrap up here for today.", note: "wrap up = 締めくくる" }
    ]
  },
  {
    id: "meeting",
    name: "会議・議論",
    level: "★★☆",
    description: "会議で発言し、議論をリードするための文",
    items: [
      { id: "m01", ja: "皆さんお揃いのようですので、始めましょう。", en: "It looks like everyone's here, so let's get started.", note: "" },
      { id: "m02", ja: "その点について、もう少し詳しく教えていただけますか。", en: "Could you tell me a little more about that point?", note: "Could you elaborate on that? でも可" },
      { id: "m03", ja: "私の意見では、まず優先順位を決めるべきです。", en: "In my opinion, we should decide on our priorities first.", note: "" },
      { id: "m04", ja: "彼の意見に賛成です。なぜなら、コストが下がるからです。", en: "I agree with him because it would reduce costs.", note: "理由をセットで言うのが議論の型" },
      { id: "m05", ja: "別の見方をすると、これはチャンスかもしれません。", en: "Looking at it from another angle, this could be an opportunity.", note: "" },
      { id: "m06", ja: "論点を整理させてください。", en: "Let me summarize the points of discussion.", note: "Let me organize where we are. でも可" },
      { id: "m07", ja: "それは重要な指摘ですね。", en: "That's an important point.", note: "That's a good point. は相づちの定番" },
      { id: "m08", ja: "話を元に戻しましょう。", en: "Let's get back on track.", note: "back to the main topic でも可" },
      { id: "m09", ja: "決定事項を確認させてください。", en: "Let me confirm what we've decided.", note: "" },
      { id: "m10", ja: "誰がこのタスクを担当しますか。", en: "Who will take charge of this task?", note: "Who's going to own this? はカジュアル" },
      { id: "m11", ja: "結論から言うと、この案を推奨します。", en: "To get straight to the point, we recommend this option.", note: "結論ファーストの型" },
      { id: "m12", ja: "データを見る限り、売上は回復しつつあります。", en: "As far as the data shows, sales are recovering.", note: "" },
      { id: "m13", ja: "途中で遮ってすみませんが、一つ質問があります。", en: "Sorry to interrupt, but I have a question.", note: "会議で割って入る時の定番" },
      { id: "m14", ja: "その前提は正しいのでしょうか。", en: "Is that assumption correct?", note: "assumption = 前提" },
      { id: "m15", ja: "具体例を挙げていただけますか。", en: "Could you give me a concrete example?", note: "" },
      { id: "m16", ja: "リスクとリターンの両方を考慮する必要があります。", en: "We need to consider both the risks and the returns.", note: "" },
      { id: "m17", ja: "一旦、この案で進めましょう。", en: "Let's go with this plan for now.", note: "go with = 採用する" },
      { id: "m18", ja: "時間が限られているので、次の議題に移りましょう。", en: "Since time is limited, let's move on to the next topic.", note: "" },
      { id: "m19", ja: "皆さんの意見をお聞きしたいです。", en: "I'd like to hear everyone's opinions.", note: "" },
      { id: "m20", ja: "補足すると、この数字は昨年のものです。", en: "Just to add, these figures are from last year.", note: "" },
      { id: "m21", ja: "この点については賛成しかねます。", en: "I'm afraid I can't agree on this point.", note: "I'm afraid で丁寧に反対" },
      { id: "m22", ja: "折衷案を考えてみませんか。", en: "Why don't we think about a compromise?", note: "compromise = 妥協案" },
      { id: "m23", ja: "次のステップを明確にしておきましょう。", en: "Let's clarify the next steps.", note: "" },
      { id: "m24", ja: "議事録は私が作成して、今日中に共有します。", en: "I'll write up the minutes and share them by the end of the day.", note: "minutes = 議事録" }
    ]
  },
  {
    id: "analysis",
    name: "数字・分析・提案",
    level: "★★★",
    description: "数字を語り、分析結果を伝え、提案するコンサル頻出文",
    items: [
      { id: "a01", ja: "売上は前年比で15%増加しました。", en: "Sales increased by 15 percent compared to last year.", note: "increase by X% の by に注意" },
      { id: "a02", ja: "コストの約3分の1は人件費です。", en: "About one-third of the costs are labor costs.", note: "分数表現: two-thirds, a quarter" },
      { id: "a03", ja: "このグラフは過去5年間の傾向を示しています。", en: "This graph shows the trend over the past five years.", note: "" },
      { id: "a04", ja: "市場規模は2030年までに2倍になると予測されています。", en: "The market size is expected to double by 2030.", note: "double は動詞で使える" },
      { id: "a05", ja: "3つの選択肢を比較検討しました。", en: "We compared and examined three options.", note: "We evaluated three options. でも可" },
      { id: "a06", ja: "最大の課題は、認知度の低さです。", en: "The biggest challenge is the lack of awareness.", note: "" },
      { id: "a07", ja: "仮説を検証するために、追加のデータが必要です。", en: "We need additional data to test our hypothesis.", note: "test/verify a hypothesis" },
      { id: "a08", ja: "顧客の約6割が価格に不満を持っています。", en: "About 60 percent of customers are dissatisfied with the price.", note: "" },
      { id: "a09", ja: "この施策により、年間で約2億円の削減が見込めます。", en: "This initiative is expected to save about 200 million yen per year.", note: "initiative = 施策" },
      { id: "a10", ja: "短期と長期の両方の視点で考えましょう。", en: "Let's think from both short-term and long-term perspectives.", note: "" },
      { id: "a11", ja: "要因は大きく3つに分けられます。", en: "The factors can be roughly divided into three groups.", note: "" },
      { id: "a12", ja: "結果は想定よりも良かったです。", en: "The results were better than expected.", note: "than we expected でも可" },
      { id: "a13", ja: "詳細な分析は次のスライドでご説明します。", en: "I'll explain the detailed analysis on the next slide.", note: "" },
      { id: "a14", ja: "この数字の根拠を教えていただけますか。", en: "Could you tell me the basis for this figure?", note: "What's behind this number? はカジュアル" },
      { id: "a15", ja: "競合他社と比べて、当社の強みは品質です。", en: "Compared to our competitors, our strength is quality.", note: "" },
      { id: "a16", ja: "優先順位はインパクトと実現可能性で決めるべきです。", en: "We should prioritize based on impact and feasibility.", note: "feasibility = 実現可能性" },
      { id: "a17", ja: "まだ結論を出すには早いと思います。", en: "I think it's too early to draw a conclusion.", note: "draw a conclusion = 結論を出す" },
      { id: "a18", ja: "データの出所を確認する必要があります。", en: "We need to check the source of the data.", note: "" },
      { id: "a19", ja: "最悪のシナリオも想定しておきましょう。", en: "Let's also prepare for the worst-case scenario.", note: "" },
      { id: "a20", ja: "この前提が変わると、結論も変わります。", en: "If this assumption changes, the conclusion will change too.", note: "" },
      { id: "a21", ja: "概算ですが、初期投資は5000万円程度です。", en: "It's a rough estimate, but the initial investment is around 50 million yen.", note: "ballpark figure = 概算" },
      { id: "a22", ja: "費用対効果の観点から、A案を推奨します。", en: "From a cost-effectiveness perspective, we recommend Option A.", note: "" },
      { id: "a23", ja: "実行計画を3つのフェーズに分けました。", en: "We divided the implementation plan into three phases.", note: "" },
      { id: "a24", ja: "本日の提案のポイントを一枚にまとめました。", en: "We summarized the key points of today's proposal on one slide.", note: "" }
    ]
  }
];
