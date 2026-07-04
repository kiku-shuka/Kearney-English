/* シーン別ビジネス表現（型ストック）
 * 「まず型を覚え、そのまま使う」ためのフレーズ集。
 * 各フレーズは間隔反復（SRS)の対象になる。
 */
window.KE_DATA = window.KE_DATA || {};

KE_DATA.phraseScenes = [
  {
    id: "facilitation",
    name: "会議の進行",
    icon: "🪑",
    items: [
      { id: "f01", en: "Let's get started, shall we?", ja: "そろそろ始めましょうか。", tip: "会議冒頭の定番。shall we? で柔らかく" },
      { id: "f02", en: "The purpose of today's meeting is to finalize the schedule.", ja: "本日の会議の目的はスケジュールの確定です。", tip: "冒頭に目的を宣言する型" },
      { id: "f03", en: "Let's go around the table and introduce ourselves.", ja: "順番に自己紹介しましょう。", tip: "go around = 順番に回す" },
      { id: "f04", en: "We're running short on time, so let's move on.", ja: "時間が押しているので次に進みましょう。", tip: "run short on time = 時間が足りなくなる" },
      { id: "f05", en: "Can we park that topic for now?", ja: "その話題は一旦保留にしましょう。", tip: "park = 議論を一時停止する。会議英語の頻出語" },
      { id: "f06", en: "To sum up, we agreed on three points.", ja: "まとめると、3点合意しました。", tip: "会議の締めの型" },
      { id: "f07", en: "Any other business before we close?", ja: "終わる前に、他に何かありますか。", tip: "AOB (any other business) は議題の定番項目" },
      { id: "f08", en: "Let's schedule a follow-up meeting next week.", ja: "来週フォローアップ会議を設定しましょう。", tip: "" }
    ]
  },
  {
    id: "discussion",
    name: "意見・議論",
    icon: "💬",
    items: [
      { id: "d01", en: "I see your point, but I have a different view.", ja: "おっしゃることは分かりますが、私は別の見方をしています。", tip: "反対意見のクッション型" },
      { id: "d02", en: "From my perspective, the priority should be quality.", ja: "私の視点では、優先すべきは品質です。", tip: "In my opinion より柔らかい" },
      { id: "d03", en: "Could you elaborate on that?", ja: "その点をもう少し詳しく説明していただけますか。", tip: "elaborate on = 詳述する" },
      { id: "d04", en: "That's a fair point.", ja: "それはもっともな指摘ですね。", tip: "相手を認めてから返す" },
      { id: "d05", en: "I'm not sure I agree with that.", ja: "それには同意しかねます。", tip: "I disagree より丁寧な否定" },
      { id: "d06", en: "Let me play devil's advocate here.", ja: "あえて反対の立場から言わせてください。", tip: "議論を深めるための定番表現" },
      { id: "d07", en: "What's the rationale behind that?", ja: "その根拠は何ですか。", tip: "rationale = 論理的根拠" },
      { id: "d08", en: "Can we take a step back and look at the big picture?", ja: "一歩引いて全体像を見ませんか。", tip: "議論が細部に入りすぎた時に" }
    ]
  },
  {
    id: "concall",
    name: "電話・オンライン会議",
    icon: "🎧",
    items: [
      { id: "c01", en: "Can everyone hear me okay?", ja: "皆さん、聞こえていますか。", tip: "オンライン会議の第一声" },
      { id: "c02", en: "You're breaking up a little.", ja: "音声が少し途切れています。", tip: "break up = 音声が途切れる" },
      { id: "c03", en: "Sorry, I was on mute.", ja: "すみません、ミュートになっていました。", tip: "" },
      { id: "c04", en: "Could you speak up a little?", ja: "もう少し大きな声で話していただけますか。", tip: "speak up = 大きな声で話す" },
      { id: "c05", en: "Let me share my screen.", ja: "画面を共有します。", tip: "" },
      { id: "c06", en: "We lost you for a second.", ja: "一瞬、音声が切れていました。", tip: "接続トラブル時の定番" },
      { id: "c07", en: "I'll drop the link in the chat.", ja: "チャットにリンクを貼ります。", tip: "drop = 送る（カジュアル）" },
      { id: "c08", en: "Let's give the others a minute to join.", ja: "他の方の参加を少し待ちましょう。", tip: "" }
    ]
  },
  {
    id: "clarify",
    name: "質問・確認",
    icon: "🔍",
    items: [
      { id: "q01", en: "Just to confirm, the deadline is this Friday, correct?", ja: "確認ですが、締め切りは今週金曜で合っていますか。", tip: "Just to confirm は認識合わせの型" },
      { id: "q02", en: "What do you mean by \"flexible\"?", ja: "「柔軟に」とはどういう意味ですか。", tip: "曖昧な言葉は必ず確認する" },
      { id: "q03", en: "If I understood correctly, you want to postpone the launch.", ja: "正しく理解していれば、ローンチを延期したいということですね。", tip: "言い換えて確認する型" },
      { id: "q04", en: "Could you walk me through the process?", ja: "そのプロセスを順を追って説明していただけますか。", tip: "walk me through = 順を追って説明する" },
      { id: "q05", en: "Let me make sure we're on the same page.", ja: "認識が合っているか確認させてください。", tip: "on the same page = 認識が一致している" },
      { id: "q06", en: "Who should I reach out to about this?", ja: "この件は誰に連絡すればよいですか。", tip: "reach out to = 連絡を取る" },
      { id: "q07", en: "When do you need this by?", ja: "いつまでに必要ですか。", tip: "" },
      { id: "q08", en: "Sorry, I didn't catch that. Could you say it again?", ja: "すみません、聞き取れませんでした。もう一度お願いします。", tip: "catch = 聞き取る。聞き返しは恥ではなく技術" }
    ]
  },
  {
    id: "smalltalk",
    name: "雑談・アイスブレイク",
    icon: "☕",
    items: [
      { id: "s01", en: "How was your weekend?", ja: "週末はいかがでしたか。", tip: "月曜の定番。答えも用意しておく" },
      { id: "s02", en: "Is this your first time in Tokyo?", ja: "東京は初めてですか。", tip: "来日した相手への定番" },
      { id: "s03", en: "How's the weather over there?", ja: "そちらの天気はどうですか。", tip: "海外オフィスとの雑談の入り口" },
      { id: "s04", en: "I heard you're a big fan of golf.", ja: "ゴルフがお好きだと伺いました。", tip: "I heard ... で話題を振る" },
      { id: "s05", en: "Time flies — I can't believe it's already July.", ja: "早いですね。もう7月なんて信じられません。", tip: "time flies = 時が経つのは早い" },
      { id: "s06", en: "Do you have any plans for the holidays?", ja: "休暇の予定はありますか。", tip: "" },
      { id: "s07", en: "How long have you been with the company?", ja: "その会社にはどのくらいお勤めですか。", tip: "be with the company = 勤めている" },
      { id: "s08", en: "It was great talking with you.", ja: "お話しできてよかったです。", tip: "雑談の締めの型" }
    ]
  },
  {
    id: "present",
    name: "プレゼン・報告",
    icon: "📊",
    items: [
      { id: "p01", en: "Today, I'd like to talk about three things.", ja: "本日は3つのことについてお話しします。", tip: "冒頭で構造を示す型" },
      { id: "p02", en: "As you can see on this slide, sales are trending upward.", ja: "このスライドの通り、売上は上昇傾向です。", tip: "trend upward/downward" },
      { id: "p03", en: "Let me highlight the key takeaway.", ja: "最も重要なポイントを強調させてください。", tip: "takeaway = 持ち帰るべき要点" },
      { id: "p04", en: "Moving on to the next slide.", ja: "次のスライドに移ります。", tip: "" },
      { id: "p05", en: "The bottom line is that we need to act now.", ja: "要するに、今すぐ行動する必要があるということです。", tip: "the bottom line = 結論・要点" },
      { id: "p06", en: "I'll come back to that point later.", ja: "その点には後ほど戻ります。", tip: "質問を一旦受け流す型" },
      { id: "p07", en: "That's all from my side.", ja: "私からは以上です。", tip: "報告の締めの定番" },
      { id: "p08", en: "I'm happy to take any questions.", ja: "ご質問があればどうぞ。", tip: "" }
    ]
  }
];
