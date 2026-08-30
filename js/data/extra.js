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
  { id: "w2631-s12", ja: "全員の合意が取れたと理解してよいですか。", en: "Can I take it that we're all in agreement?", note: "take it that = 〜と理解する" },
  { id: "w2632-s01", ja: "今日はお時間をいただきありがとうございます。", en: "Thank you for taking the time to meet today.", note: "会議冒頭の定番" },
  { id: "w2632-s02", ja: "結論としては、この案で進めたいと考えています。", en: "In conclusion, we'd like to move forward with this plan.", note: "in conclusion = 結論として" },
  { id: "w2632-s03", ja: "その見積もりには予備の費用も含まれていますか。", en: "Does that estimate include a buffer for extra costs?", note: "buffer = 予備・余裕" },
  { id: "w2632-s04", ja: "念のため、前提を一つ確認させてください。", en: "Just to be sure, let me confirm one assumption.", note: "assumption = 前提" },
  { id: "w2632-s05", ja: "今の段階では何とも言えません。", en: "It's too early to say at this point.", note: "様子見の丁寧な言い方" },
  { id: "w2632-s06", ja: "その課題は私のほうで引き取ります。", en: "I'll take ownership of that issue.", note: "take ownership = 責任を持って担当する" },
  { id: "w2632-s07", ja: "優先順位を一緒に整理しましょう。", en: "Let's sort out our priorities together.", note: "sort out = 整理する" },
  { id: "w2632-s08", ja: "この提案の狙いを一言で言うと、コスト削減です。", en: "In a nutshell, this proposal is about cutting costs.", note: "in a nutshell = 一言で言えば" },
  { id: "w2632-s09", ja: "締切を一週間延ばしていただくことは可能でしょうか。", en: "Would it be possible to push the deadline back a week?", note: "push back = 後ろ倒しにする" },
  { id: "w2632-s10", ja: "その点は次回までの宿題にさせてください。", en: "Let me take that as an action item for next time.", note: "action item = 宿題・対応事項" },
  { id: "w2632-s11", ja: "数字の裏付けを添えて説明します。", en: "I'll explain it with the numbers to back it up.", note: "back up = 裏付ける" },
  { id: "w2632-s12", ja: "認識が合っているか、最後に確認させてください。", en: "Let me check at the end that we're aligned.", note: "aligned = 認識が一致した" },
  { id: "w2633-s01", ja: "この件、少し時間をいただいて検討させてください。", en: "Let me take some time to think this over.", note: "think over = じっくり検討する" },
  { id: "w2633-s02", ja: "御社のご要望を正しく理解しているか確認させてください。", en: "Let me make sure I understand your request correctly.", note: "認識確認の丁寧な型" },
  { id: "w2633-s03", ja: "予算内であれば前向きに検討します。", en: "If it's within budget, we'll seriously consider it.", note: "seriously consider = 前向きに検討する" },
  { id: "w2633-s04", ja: "その点については専門のチームにつなぎます。", en: "I'll connect you with the team that handles that.", note: "connect you with = 〜につなぐ" },
  { id: "w2633-s05", ja: "申し訳ありませんが、今回は見送らせてください。", en: "I'm afraid we'll have to pass this time.", note: "pass = 見送る・断る" },
  { id: "w2633-s06", ja: "次のステップを整理して共有します。", en: "I'll lay out the next steps and share them.", note: "lay out = 整理して示す" },
  { id: "w2633-s07", ja: "想定より時間がかかっていて申し訳ありません。", en: "I'm sorry this is taking longer than expected.", note: "遅延の丁寧なお詫び" },
  { id: "w2633-s08", ja: "その数字にはどこまで含まれていますか。", en: "What exactly is included in that figure?", note: "figure = 数字・金額" },
  { id: "w2633-s09", ja: "では、この方向で進めるということでよろしいですか。", en: "So, shall we go ahead in this direction?", note: "go ahead = 進める" },
  { id: "w2633-s10", ja: "懸念があれば、今のうちに共有してください。", en: "If you have any concerns, please share them now.", note: "concern = 懸念" },
  { id: "w2633-s11", ja: "優先度が高いので、今週中に対応します。", en: "This is a high priority, so I'll handle it this week.", note: "high priority = 優先度が高い" },
  { id: "w2633-s12", ja: "本日の決定事項をメールでまとめてお送りします。", en: "I'll email a summary of what we decided today.", note: "決定事項のまとめ・議事メモの型" },
  { id: "w2634-s01", ja: "まず現状を共有し、それから課題に入ります。", en: "Let me share where we are, then move on to the issues.", note: "where we are = 現状" },
  { id: "w2634-s02", ja: "その提案には賛成ですが、一点だけ懸念があります。", en: "I'm on board with the proposal, but I have one concern.", note: "on board = 賛成・参加している" },
  { id: "w2634-s03", ja: "数字が正しいか、もう一度確認させてください。", en: "Let me double-check whether the numbers are right.", note: "double-check = 再確認する" },
  { id: "w2634-s04", ja: "予算の都合上、今回は範囲を絞りましょう。", en: "Given the budget, let's narrow the scope this time.", note: "narrow the scope = 範囲を絞る" },
  { id: "w2634-s05", ja: "ご期待に添えず申し訳ありません。", en: "I'm sorry we couldn't meet your expectations.", note: "丁寧なお詫びの型" },
  { id: "w2634-s06", ja: "この件、私が責任を持って進めます。", en: "I'll take responsibility and move this forward.", note: "take responsibility = 責任を持つ" },
  { id: "w2634-s07", ja: "要点だけ先にお伝えします。", en: "Let me give you the key points first.", note: "key points = 要点" },
  { id: "w2634-s08", ja: "それは想定していませんでした。確認します。", en: "I hadn't anticipated that. Let me check.", note: "anticipate = 予想する" },
  { id: "w2634-s09", ja: "次回までに叩き台を用意します。", en: "I'll prepare a rough draft by next time.", note: "rough draft = 叩き台・下書き" },
  { id: "w2634-s10", ja: "お互いの期待をすり合わせておきましょう。", en: "Let's align our expectations with each other.", note: "align expectations = 期待をすり合わせる" },
  { id: "w2634-s11", ja: "その条件でしたら、前向きに検討できます。", en: "Under those terms, we can consider it positively.", note: "under those terms = その条件では" },
  { id: "w2634-s12", ja: "最後に、次のアクションを確認しましょう。", en: "Finally, let's confirm the next actions.", note: "next actions = 次の行動・宿題" },
  { id: "w2635-s01", ja: "ご連絡が遅くなり申し訳ありません。", en: "I'm sorry for the late reply.", note: "late reply = 返信の遅れ。定番の一言" },
  { id: "w2635-s02", ja: "この点について、簡単に補足させてください。", en: "Let me add a quick note on this point.", note: "add a note = 補足する" },
  { id: "w2635-s03", ja: "予算が限られているので、優先順位をつけましょう。", en: "Since the budget is limited, let's set priorities.", note: "set priorities = 優先順位をつける" },
  { id: "w2635-s04", ja: "その解釈で合っているか確認させてください。", en: "Let me make sure I'm reading this correctly.", note: "read = 解釈する。柔らかい確認の型" },
  { id: "w2635-s05", ja: "結論から申し上げると、計画通りに進んでいます。", en: "To get straight to the point, we're on track.", note: "on track = 順調・予定通り" },
  { id: "w2635-s06", ja: "詳細は追ってメールでお送りします。", en: "I'll send the details in a follow-up email.", note: "follow-up = 追っての・後続の" },
  { id: "w2635-s07", ja: "その件は担当者に確認して折り返します。", en: "Let me check with the person in charge and get back to you.", note: "person in charge = 担当者" },
  { id: "w2635-s08", ja: "今のところ大きな問題はありません。", en: "So far, there are no major issues.", note: "so far = 今のところ" },
  { id: "w2635-s09", ja: "認識を合わせるために、一度整理させてください。", en: "Let me recap so we're all on the same page.", note: "recap = 要点をまとめ直す" },
  { id: "w2635-s10", ja: "その提案には一長一短がありますね。", en: "That proposal has its pros and cons.", note: "pros and cons = 良い点と悪い点" },
  { id: "w2635-s11", ja: "無理のない範囲で対応します。", en: "I'll handle it as much as is reasonable.", note: "reasonable = 無理のない・妥当な" },
  { id: "w2635-s12", ja: "最後に、次回までの宿題を確認しましょう。", en: "Finally, let's confirm the action items before next time.", note: "action items = 宿題・やるべきこと" }
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
  { id: "w2630-p08", en: "Let's circle back once we have the data.", ja: "データが揃ってから改めて議論しましょう。", tip: "circle back = 後で改めて取り上げる" },
  { id: "w2632-p01", en: "Let me get back to you on that.", ja: "その件は後ほど回答します。", tip: "即答を避ける丁寧な保留" },
  { id: "w2632-p02", en: "Correct me if I'm wrong, but ...", ja: "間違っていたら指摘してほしいのですが…", tip: "やわらかく確認・反論する前置き" },
  { id: "w2632-p03", en: "That's a good point.", ja: "それは良い指摘ですね。", tip: "相手の意見を受け止める一言" },
  { id: "w2632-p04", en: "Let's keep it simple.", ja: "シンプルにいきましょう。", tip: "複雑化を避ける提案" },
  { id: "w2632-p05", en: "Can we put a pin in that for now?", ja: "それは一旦保留にできますか。", tip: "put a pin in = 一旦置いておく" },
  { id: "w2632-p06", en: "I'll loop you in when it's ready.", ja: "準備ができたら共有します。", tip: "loop you in = 情報共有の輪に入れる" },
  { id: "w2632-p07", en: "Where do we go from here?", ja: "ここからどう進めましょうか。", tip: "次の一手を促す" },
  { id: "w2632-p08", en: "Let's call it a day.", ja: "今日はここまでにしましょう。", tip: "会議・作業を切り上げる定番" },
  { id: "w2634-p01", en: "Let's not lose sight of the goal.", ja: "目的を見失わないようにしましょう。", tip: "lose sight of = 見失う" },
  { id: "w2634-p02", en: "Can you give me a rough estimate?", ja: "おおよその見積もりをもらえますか。", tip: "rough estimate = 概算" },
  { id: "w2634-p03", en: "I see where you're coming from.", ja: "おっしゃる趣旨は分かります。", tip: "相手の立場に理解を示す一言" },
  { id: "w2634-p04", en: "Let's play it by ear.", ja: "様子を見ながら進めましょう。", tip: "play it by ear = 臨機応変に対応する" },
  { id: "w2634-p05", en: "That's on my radar.", ja: "それは把握しています。", tip: "on my radar = 認識済み・気にかけている" },
  { id: "w2634-p06", en: "Let's touch base after lunch.", ja: "昼食後に状況を確認し合いましょう。", tip: "touch base = 近況を確認する" },
  { id: "w2634-p07", en: "I'll run it by my manager.", ja: "上司に確認してみます。", tip: "run it by = 〜に相談・確認する" },
  { id: "w2634-p08", en: "Let's park this and move on.", ja: "これは一旦置いて先に進みましょう。", tip: "park = 一旦保留にする" }
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
  },
  {
    id: "w2632-sh1",
    title: "プロジェクトのキックオフ会議",
    level: "★★☆",
    description: "新規プロジェクトの冒頭で、目的・役割・進め方の期待値をすり合わせる場面。合意形成と確認の言い回しを体に入れる。",
    lines: [
      { s: "A", en: "Welcome, everyone. Let's kick off our new project today.", ja: "皆さん、ようこそ。今日は新プロジェクトを始めましょう。" },
      { s: "B", en: "Great. Could you start by sharing the main goal?", ja: "いいですね。まず主な目的を共有してもらえますか？" },
      { s: "A", en: "Sure. Our goal is to launch the new service by the end of the year.", ja: "もちろん。目的は、年末までに新サービスを立ち上げることです。" },
      { s: "B", en: "Understood. Who will be responsible for each part?", ja: "承知しました。各パートの担当は誰になりますか？" },
      { s: "A", en: "I'll handle planning, and I'd like you to lead the design.", ja: "私が企画を担当し、あなたにはデザインを主導してほしいです。" },
      { s: "B", en: "Happy to. When do you need the first draft?", ja: "喜んで。最初の案はいつ必要ですか？" },
      { s: "A", en: "Let's aim for two weeks from now, if that works for you.", ja: "問題なければ、今から2週間後を目指しましょう。" },
      { s: "B", en: "That works. Let's also agree on how often we'll meet.", ja: "大丈夫です。どのくらいの頻度で会うかも決めましょう。" },
      { s: "A", en: "Good idea. How about a short check-in every Monday?", ja: "いい考えですね。毎週月曜の短い進捗確認はどうですか？" },
      { s: "B", en: "Perfect. Then we're all aligned. Let's get started.", ja: "完璧です。では認識は揃いましたね。始めましょう。" }
    ]
  },
  {
    id: "w2633-sh1",
    title: "顧客クレームへの対応",
    level: "★★★",
    description: "サービスの不具合について謝罪し、事実を確認して解決策と見通しを示す場面。謝罪・傾聴・提案の言い回しを体に入れる。",
    lines: [
      { s: "A", en: "I'm calling because the system has been down since this morning.", ja: "今朝からシステムが止まっているので電話しました。" },
      { s: "B", en: "I'm very sorry for the trouble. Let me look into it right away.", ja: "ご迷惑をおかけし申し訳ありません。すぐに調べます。" },
      { s: "A", en: "This is affecting our whole team's work.", ja: "これでチーム全体の業務に影響が出ています。" },
      { s: "B", en: "I completely understand. May I confirm a few details?", ja: "よく分かります。いくつか詳細を確認してもよろしいですか？" },
      { s: "A", en: "Sure, go ahead.", ja: "ええ、どうぞ。" },
      { s: "B", en: "Thank you. It looks like the problem is on our side, and we're fixing it now.", ja: "ありがとうございます。問題は当方側のようで、今修正しています。" },
      { s: "A", en: "How long will it take?", ja: "どのくらいかかりますか？" },
      { s: "B", en: "We expect it to be back within an hour. I'll keep you updated.", ja: "一時間以内に復旧する見込みです。随時ご連絡します。" },
      { s: "A", en: "Please do. We can't afford a long delay.", ja: "お願いします。長い遅れは困ります。" },
      { s: "B", en: "Understood. Again, I apologize, and thank you for your patience.", ja: "承知しました。重ねてお詫びします。お待ちいただき感謝します。" }
    ]
  },
  {
    id: "w2634-sh1",
    title: "締切延長の相談",
    level: "★★☆",
    description: "現実的な理由を説明して締切の延長を願い出て、挽回策も示す場面。相談・交渉・前向きな提案の型を体に入れる。",
    lines: [
      { s: "A", en: "Do you have a minute? I'd like to talk about the report deadline.", ja: "少しお時間ありますか。報告書の締切について相談したいのですが。" },
      { s: "B", en: "Sure. Is something wrong?", ja: "もちろん。何か問題でも？" },
      { s: "A", en: "The data came in later than expected, so I'm behind schedule.", ja: "データの到着が予定より遅れて、進行が遅れています。" },
      { s: "B", en: "I see. How much more time do you need?", ja: "なるほど。あとどれくらい必要ですか？" },
      { s: "A", en: "Two extra days would let me finish it properly.", ja: "あと2日あれば、きちんと仕上げられます。" },
      { s: "B", en: "That's a bit tight on our side. What's your plan?", ja: "こちらとしては少し厳しいですね。どう進める予定ですか？" },
      { s: "A", en: "I'll send you a draft tomorrow, then the final version in two days.", ja: "明日に下書きをお送りし、2日後に最終版を出します。" },
      { s: "B", en: "That works. A draft first is helpful.", ja: "それなら大丈夫です。先に下書きがあると助かります。" },
      { s: "A", en: "Thank you. I'm sorry for the delay.", ja: "ありがとうございます。遅れて申し訳ありません。" },
      { s: "B", en: "It's fine. Thanks for telling me early.", ja: "大丈夫ですよ。早めに知らせてくれて助かります。" }
    ]
  },
  {
    id: "w2635-sh1",
    title: "プロジェクトのキックオフ（役割分担）",
    level: "★★☆",
    description: "新しいプロジェクトの初回会議で、目的を共有し役割とスケジュールを決める場面。依頼・合意・段取りの型を身につける。",
    lines: [
      { s: "A", en: "Let's kick off our new project. Thanks everyone for joining.", ja: "新しいプロジェクトを始めましょう。皆さん、参加ありがとう。" },
      { s: "B", en: "Happy to be here. What's our main goal?", ja: "参加できてうれしいです。主な目標は何ですか？" },
      { s: "A", en: "Our goal is to launch the new app by the end of the year.", ja: "目標は年末までに新しいアプリを公開することです。" },
      { s: "B", en: "That's ambitious. How should we divide the work?", ja: "意欲的ですね。どう分担しましょうか？" },
      { s: "A", en: "I'll handle the planning, and I'd like you to lead the design.", ja: "私は企画を担当します。あなたにはデザインを主導してほしいです。" },
      { s: "B", en: "Sounds good. When do you need the first draft?", ja: "いいですね。最初の案はいつまでに必要ですか？" },
      { s: "A", en: "Could you share a rough design by next Friday?", ja: "来週の金曜までにラフ案を共有してもらえますか？" },
      { s: "B", en: "Sure. I'll also list the tools we'll need.", ja: "了解です。必要なツールも一覧にしておきます。" },
      { s: "A", en: "Great. Let's meet every Monday to check progress.", ja: "助かります。進捗確認は毎週月曜にしましょう。" },
      { s: "B", en: "Works for me. I'm looking forward to it.", ja: "私は大丈夫です。楽しみにしています。" }
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
  },
  {
    id: "w2632-t01", ja: "企業は週4日勤務を導入すべきだと思いますか？", en: "Should companies adopt a four-day work week?",
    sample: { point: "I think a four-day work week is worth trying, at least in the right industries.", reason: "The main reason is that well-rested workers are often more focused and productive, so output may not fall as much as people fear.", example: "For example, trials in countries such as Iceland found that many workers kept the same output while reporting less stress and better health.", point2: "So a shorter week is not only about free time — it could be a smarter way to work." }
  },
  {
    id: "w2632-t02", ja: "政府は食品などの生活必需品の税を下げて家計を助けるべきだと思いますか？", en: "Should governments cut taxes on essentials like food to help households?",
    sample: { point: "Yes, I believe cutting taxes on essentials like food is a fair way to help struggling households.", reason: "This is because everyone must buy food, so a tax on it hits low-income families the hardest.", example: "For example, some governments have recently lowered the tax on food and drinks to ease the pressure of rising prices.", point2: "So targeting relief at essentials is a sensible way to support people who need it most." }
  },
  {
    id: "w2632-t03", ja: "AIは、人間ではないことを常に相手に明かすべきだと思いますか？", en: "Should an AI always be required to tell people it is not human?",
    sample: { point: "Yes, I strongly believe an AI should always make clear that it is not a human.", reason: "The main reason is that people deserve to know who, or what, they are really dealing with, especially when making decisions.", example: "For example, new rules in Europe now require AI systems to identify themselves, so users are not tricked into thinking a machine is a person.", point2: "So honesty about being an AI is a basic form of respect for the people who use it." }
  },
  {
    id: "w2633-t01", ja: "AIが多くの仕事で人間より優れた成果を出すようになったら、私たちはどう対応すべきだと思いますか？", en: "As AI starts to outperform humans at many tasks, how should we respond?",
    sample: { point: "I think we should focus on learning to work with AI rather than trying to compete against it.", reason: "The main reason is that AI is now better at many routine tasks, but people still bring judgment, creativity, and responsibility that machines lack.", example: "For example, in fields like medicine and law, AI can draft documents or spot patterns quickly, while humans make the final decisions and handle the human side.", point2: "So the smartest response is to build new skills and use AI as a tool, not to fear it as a rival." }
  },
  {
    id: "w2633-t02", ja: "データセンターの建設に地域住民が反対することがあります。企業や政府はどう対応すべきだと思いますか？", en: "Local communities sometimes oppose new data centers. How should companies and governments respond?",
    sample: { point: "I believe companies and governments should listen to local communities and share the benefits with them.", reason: "This is because data centers use a lot of land, electricity, and water, and nearby residents carry the costs while the profits often go elsewhere.", example: "For example, some projects have faced strong opposition until the companies agreed to fund local services, use cleaner energy, or create local jobs.", point2: "So involving communities early, and giving them a real stake, is the fairest way to build the infrastructure the digital economy needs." }
  },
  {
    id: "w2633-t03", ja: "新しい技術について、私たちは「宣伝」より「評価」に力を入れるべきだと思いますか？", en: "Should we focus more on carefully evaluating new technology than on promoting it?",
    sample: { point: "Yes, I think it is time to focus more on evaluating new technology than simply praising it.", reason: "The main reason is that excitement alone can hide real risks, while careful testing shows what a technology can and cannot safely do.", example: "For example, with AI, experts are now moving from broad promises toward measuring how well systems actually perform and where they fail.", point2: "So honest evaluation is not the enemy of progress — it is what makes progress trustworthy." }
  },
  {
    id: "w2634-t01", ja: "AIによって一部の仕事が自動化される中、社会はどう備えるべきだと思いますか？", en: "As AI automates some jobs, how should society prepare?",
    sample: { point: "I believe society should prepare for AI mainly by helping people learn new skills.", reason: "The main reason is that while AI may replace some tasks, it also creates new kinds of work, and people need support to move into them.", example: "For example, past technologies like computers removed some jobs but created many others, and workers who received training adapted best.", point2: "So investing in education and retraining is the wisest way to prepare for an AI-driven economy." }
  },
  {
    id: "w2634-t02", ja: "二酸化炭素を回収する技術（カーボンキャプチャー）に頼るのは良い考えだと思いますか？", en: "Is it a good idea to rely on carbon-capture technology?",
    sample: { point: "I think carbon capture can help, but it should not replace cutting emissions.", reason: "This is because the safest path is to release less carbon in the first place, and capture technology is still expensive and unproven at large scale.", example: "For example, experts say limiting warming will likely require both reducing emissions and removing some carbon, not choosing only one.", point2: "So carbon capture is best seen as a useful tool alongside cleaner energy, not an excuse to keep polluting." }
  },
  {
    id: "w2634-t03", ja: "SNS（ソーシャルメディア）は社会にとって良い影響と悪い影響のどちらが大きいと思いますか？", en: "Does social media do more good or more harm to society?",
    sample: { point: "In my view, social media does both, but its effect depends on how we use it and how it is managed.", reason: "This is because it connects people and spreads useful information, yet it can also spread false news and deepen division.", example: "For example, the same platform can help friends stay in touch and also allow rumors to travel around the world in minutes.", point2: "So rather than calling it simply good or bad, we should focus on using it wisely and demanding better rules against misinformation." }
  },
  {
    id: "w2635-t01", ja: "政府はAI企業に対して、より強い安全ルールを設けるべきだと思いますか？", en: "Should governments set stronger safety rules for AI companies?",
    sample: { point: "Yes, I think governments should set clearer safety rules for AI companies.", reason: "The main reason is that AI is now powerful enough to affect jobs, privacy, and even public safety, so companies should not decide the limits on their own.", example: "For example, some leading experts have recently warned that the industry is moving faster than the safety checks it promised to follow.", point2: "So sensible rules would protect the public without stopping useful innovation." }
  },
  {
    id: "w2635-t02", ja: "動画や音楽などのサブスク（定額サービス）は高くなりすぎていると思いますか？", en: "Are digital subscription services becoming too expensive?",
    sample: { point: "In my view, many subscription services are indeed becoming too expensive.", reason: "This is because prices keep rising while people now pay for several services at once, and the total adds up quickly.", example: "For example, some streaming platforms raised their monthly fees again recently, so a household paying for several of them can spend more than on their phone bill.", point2: "So I think users should review their subscriptions regularly and keep only the ones they truly use." }
  },
  {
    id: "w2635-t03", ja: "企業は今から量子コンピューターへの備えを始めるべきだと思いますか？", en: "Should companies start preparing for quantum computing now?",
    sample: { point: "Yes, I believe companies should start preparing for quantum computing now, even though it is still early.", reason: "The main reason is that this technology could eventually break today's encryption and change how we protect data.", example: "For example, investors are already putting large sums into quantum startups, and some firms are testing 'quantum-safe' security ahead of time.", point2: "So learning and preparing early is wiser than being caught off guard later." }
  }
];

/* ロールプレイの追加シナリオ（scenarios.js と同スキーマ） */
KE_DATA.extraScenarios = [];
