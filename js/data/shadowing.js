/* シャドーイング用スクリプト
 * 音声はブラウザ内蔵の音声合成（Web Speech API）で再生する。
 * 各スクリプトは 1 文ずつ再生・ループでき、5 ステップの手順で練習する。
 */
window.KE_DATA = window.KE_DATA || {};

KE_DATA.shadowingScripts = [
  {
    id: "smalltalk",
    title: "月曜朝の雑談",
    level: "★☆☆",
    description: "同僚との何気ない会話。リズムと相づちに慣れる入門スクリプト。",
    lines: [
      { s: "A", en: "Good morning! How was your weekend?", ja: "おはようございます！週末はどうでしたか？" },
      { s: "B", en: "It was great. I went hiking with my family.", ja: "とても良かったです。家族とハイキングに行きました。" },
      { s: "A", en: "That sounds nice. Where did you go?", ja: "いいですね。どこに行ったんですか？" },
      { s: "B", en: "We went to Mt. Takao. The weather was perfect.", ja: "高尾山に行きました。天気は最高でした。" },
      { s: "A", en: "I've been there once. The view from the top is amazing.", ja: "一度行ったことがあります。頂上からの眺めは素晴らしいですよね。" },
      { s: "B", en: "Exactly. How about you? Did you do anything fun?", ja: "本当に。あなたは？何か楽しいことをしましたか？" },
      { s: "A", en: "Not really. I just relaxed at home and watched a movie.", ja: "特には。家でのんびり映画を見ていました。" },
      { s: "B", en: "Sometimes that's the best way to spend a weekend.", ja: "それが一番の週末の過ごし方だったりしますよね。" },
      { s: "A", en: "I agree. Well, shall we get some coffee before the meeting?", ja: "同感です。さて、会議の前にコーヒーでも買いに行きましょうか。" },
      { s: "B", en: "Good idea. Let's go.", ja: "いいですね。行きましょう。" }
    ]
  },
  {
    id: "kickoff",
    title: "プロジェクトキックオフ",
    level: "★★☆",
    description: "プロジェクト開始時の説明。構造化された話し方の型を体に入れる。",
    lines: [
      { s: "", en: "Good morning, everyone. Thank you for joining today's kickoff meeting.", ja: "皆さん、おはようございます。本日のキックオフ会議にご参加いただきありがとうございます。" },
      { s: "", en: "I'm excited to start this project with such a great team.", ja: "この素晴らしいチームでプロジェクトを始められることを嬉しく思います。" },
      { s: "", en: "First, let me walk you through the project overview.", ja: "まず、プロジェクトの概要をご説明します。" },
      { s: "", en: "Our goal is to develop a new growth strategy for the client.", ja: "我々のゴールは、クライアントの新しい成長戦略を策定することです。" },
      { s: "", en: "The project will run for twelve weeks, divided into three phases.", ja: "プロジェクトは12週間で、3つのフェーズに分かれています。" },
      { s: "", en: "In the first phase, we'll focus on understanding the current situation.", ja: "第1フェーズでは、現状の理解に注力します。" },
      { s: "", en: "Then, we'll identify key issues and develop our hypotheses.", ja: "次に、主要な課題を特定し、仮説を構築します。" },
      { s: "", en: "Finally, we'll build an action plan together with the client.", ja: "最後に、クライアントと共にアクションプランを策定します。" },
      { s: "", en: "Please feel free to ask questions at any time.", ja: "いつでも遠慮なく質問してください。" },
      { s: "", en: "Let's make this project a great success.", ja: "このプロジェクトを大成功させましょう。" }
    ]
  },
  {
    id: "concall",
    title: "電話会議での進捗報告",
    level: "★★☆",
    description: "海外オフィスとの電話会議。音だけで理解し発話するリアルな場面。",
    lines: [
      { s: "A", en: "Hi everyone, can you all hear me clearly?", ja: "皆さん、はっきり聞こえていますか？" },
      { s: "B", en: "Yes, we can hear you. Go ahead.", ja: "はい、聞こえています。どうぞ。" },
      { s: "A", en: "Great. Let me give you a quick update on our progress.", ja: "では、進捗を手短にご報告します。" },
      { s: "A", en: "We finished the customer interviews last week.", ja: "先週、顧客インタビューを完了しました。" },
      { s: "A", en: "Overall, the feedback was more positive than we expected.", ja: "全体として、フィードバックは想定以上にポジティブでした。" },
      { s: "B", en: "That's good news. Were there any major concerns?", ja: "それは良い知らせですね。大きな懸念はありましたか？" },
      { s: "A", en: "Yes, a few customers mentioned that the price is too high.", ja: "はい、数名の顧客から価格が高すぎるという声がありました。" },
      { s: "B", en: "I see. We should discuss the pricing strategy in more detail.", ja: "なるほど。価格戦略についてより詳しく議論すべきですね。" },
      { s: "A", en: "I agree. I'll prepare a summary and share it by tomorrow.", ja: "同感です。サマリーを準備して明日までに共有します。" },
      { s: "B", en: "Perfect. Thanks, everyone. Talk to you next week.", ja: "完璧です。皆さんありがとう。また来週。" }
    ]
  },
  {
    id: "findings",
    title: "調査結果のプレゼン",
    level: "★★★",
    description: "数字を交えた報告。数値表現を口が覚えるまで繰り返す。",
    lines: [
      { s: "", en: "Thank you for the opportunity to present our findings today.", ja: "本日、調査結果をご報告する機会をいただきありがとうございます。" },
      { s: "", en: "Let me start with the key message.", ja: "まず、最も重要なメッセージからお伝えします。" },
      { s: "", en: "Our analysis shows that the market will grow by eight percent annually.", ja: "我々の分析では、市場は年率8％で成長する見込みです。" },
      { s: "", en: "However, competition is becoming more intense, especially in the premium segment.", ja: "しかし、特にプレミアム領域で競争が激化しています。" },
      { s: "", en: "We identified three opportunities for your company.", ja: "御社にとっての機会を3つ特定しました。" },
      { s: "", en: "First, expanding the online sales channel.", ja: "第一に、オンライン販売チャネルの拡大です。" },
      { s: "", en: "Second, strengthening the loyalty program to retain existing customers.", ja: "第二に、既存顧客維持のためのロイヤルティプログラムの強化です。" },
      { s: "", en: "Third, entering the fast-growing Southeast Asian market.", ja: "第三に、急成長する東南アジア市場への参入です。" },
      { s: "", en: "Based on our estimates, these initiatives could increase revenue by twenty percent in three years.", ja: "我々の試算では、これらの施策で3年間で売上を20％増やせる可能性があります。" },
      { s: "", en: "In the next section, I'll explain each opportunity in detail.", ja: "次のセクションで、それぞれの機会を詳しくご説明します。" }
    ]
  },
  {
    id: "qanda",
    title: "質疑応答",
    level: "★★★",
    description: "鋭い質問への切り返し。即答の型を身につける上級スクリプト。",
    lines: [
      { s: "A", en: "Thank you for the presentation. May I ask a question?", ja: "プレゼンありがとうございました。質問してもよろしいですか？" },
      { s: "B", en: "Of course. Please go ahead.", ja: "もちろんです。どうぞ。" },
      { s: "A", en: "You mentioned entering the Southeast Asian market. How realistic is that within a year?", ja: "東南アジア市場への参入に触れられましたが、1年以内というのは現実的でしょうか？" },
      { s: "B", en: "That's a great question. It depends on the entry model.", ja: "良いご質問です。参入モデル次第です。" },
      { s: "B", en: "If we partner with a local distributor, one year is feasible.", ja: "現地の販売代理店と組めば、1年は実現可能です。" },
      { s: "A", en: "What are the main risks in that case?", ja: "その場合の主なリスクは何ですか？" },
      { s: "B", en: "The biggest risk is quality control across the supply chain.", ja: "最大のリスクはサプライチェーン全体の品質管理です。" },
      { s: "B", en: "To manage this, we propose starting with a pilot in one country.", ja: "これに対処するため、まず1か国でのパイロットから始めることを提案します。" },
      { s: "A", en: "That makes sense. Could you share the cost estimate for the pilot?", ja: "納得です。パイロットの費用見積もりを共有いただけますか？" },
      { s: "B", en: "Certainly. I'll include a detailed breakdown in the follow-up materials.", ja: "もちろんです。フォローアップ資料に詳細な内訳を含めます。" }
    ]
  }
];
