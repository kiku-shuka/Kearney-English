/* デイリー配信リーディング
 * 毎朝の自動ルーチンがこのファイルを丸ごと上書き生成する（直近 7 日分を保持）。
 * days は日付降順。各 day = { date: "YYYY-MM-DD", passages: [readingPassages と同スキーマ + genre] }
 * このファイル以外は手書きデータであり、ルーチンは触らない。
 */
window.KE_DATA = window.KE_DATA || {};

KE_DATA.dailyReading = { days: [
    {
    date: "2026-08-11",
    passages: [
      {
        id: "d0811-1",
        title: "What a Market Forecast Really Means",
        level: "★★★",
        genre: "ビジネス",
        text: "Every so often, a big bank makes headlines by predicting where the stock market will go. Recently, one major bank raised its forecast for a well-known U.S. stock index, pointing to strong company profits and rising demand for artificial intelligence. But what does such a forecast really mean, and how much should we trust it?\nA market forecast, sometimes called a price target, is an educated guess. Analysts study company earnings, the wider economy, and current trends, then estimate where prices might be months from now. It is not a promise, and no one truly knows the future — it is a careful opinion, based on today's information.\nWhy do these forecasts matter? They shape how investors feel. An optimistic forecast from a respected bank can boost confidence, encouraging people to buy and pushing prices higher, at least for a while. A gloomy forecast can do the opposite. In this way, predictions can influence the very market they describe.\nStill, forecasts are often wrong. The economy can be surprised by sudden events — a crisis, a new technology, or a change in policy. Analysts frequently update their targets as conditions change, which shows how uncertain such predictions really are.\nThe lesson for a careful reader is to treat forecasts as useful opinions, not facts. They summarize what informed experts expect, which is valuable. But the future remains unknown, and wise investors weigh many views, stay cautious, and remember that even the most confident prediction is still, in the end, only a guess.",
        summaryJa: "時折、大銀行が株式市場の行方を予測して見出しをにぎわす。最近、ある大手銀行が、有名な米国の株価指数の予測を引き上げ、好調な企業利益とAIへの高まる需要を理由に挙げた。だがこうした予測は本当は何を意味し、どこまで信じるべきか。市場予測（プライスターゲットとも呼ばれる）は、根拠ある推測だ。アナリストは企業の利益・広い経済・今の傾向を調べ、数か月後に価格がどこにあるかを見積もる。約束ではなく、誰も本当に未来を知らない——今日の情報に基づく慎重な意見だ。なぜこうした予測が重要か。投資家の感じ方を形づくる。尊敬される銀行の楽観的な予測は自信を高め、人々に買いを促し、少なくともしばらく価格を押し上げうる。暗い予測は逆を行う。こうして予測は、それが描く市場そのものに影響しうる。それでも予測はしばしば外れる。経済は突然の出来事——危機・新技術・政策変更——に驚かされうる。アナリストは状況の変化とともに頻繁に目標を更新し、そうした予測がいかに不確実かを示す。慎重な読者への教訓は、予測を事実でなく有用な意見として扱うことだ。情報通の専門家が何を期待するかを要約しており、それは価値がある。だが未来は不明のままで、賢い投資家は多くの見方を比べ、慎重を保ち、最も自信ある予測でさえ結局はただの推測だと忘れない。",
        quiz: [
          { q: "市場予測（プライスターゲット）とは何か？", options: ["今日の情報に基づく根拠ある推測", "確実な約束", "過去の記録だけ"], answer: 0 },
          { q: "予測が市場に影響しうる理由は？", options: ["投資家の自信や感じ方を左右するから", "価格を法律で決めるから", "株の数を変えるから"], answer: 0 },
          { q: "本文が勧める予測への向き合い方は？", options: ["事実でなく有用な意見として扱う", "必ず従う", "完全に無視する"], answer: 0 }
        ]
      },
      {
        id: "d0811-2",
        title: "The Fierce Race in Smartphones",
        level: "★★☆",
        genre: "テクノロジー",
        text: "Every year, phone makers around the world release new models, each promising to be faster, smarter, or better value than the last. Recently, one company launched a new series of phones with the latest 5G technology and upgraded features. Behind these launches lies one of the most competitive businesses on Earth: the global smartphone market.\nWhy is competition so fierce? Billions of people use smartphones, so even a small share of the market means huge sales. To win customers, companies compete on price, camera quality, battery life, screen, and speed. A single popular feature can help one brand pull ahead of the others.\nMuch of the latest competition centers on 5G, the newest kind of mobile network. 5G can move data much faster than older networks, making video, games, and downloads smoother. As more countries build 5G networks, phone makers race to offer devices that use them well, even in cheaper models.\nThis competition brings real benefits to buyers. Strong rivalry pushes companies to improve their products and keep prices reasonable. Features that were once found only in expensive phones now appear in affordable ones, so more people can enjoy powerful technology.\nThere are downsides too. New models appear so quickly that older phones can feel out of date, encouraging waste. Some 'upgrades' offer only small improvements.\nStill, the smartphone race shows competition at its most intense. In a market of billions, companies must keep innovating just to stay in the game — and, along the way, they place remarkable technology into everyday hands.",
        summaryJa: "毎年、世界中の携帯電話メーカーが新モデルを出し、それぞれ前より速く・賢く・割安だと約束する。最近、ある企業が最新の5G技術と改良機能を備えた新シリーズを発売した。こうした発売の背後には、地球で最も競争の激しい商売の一つ——世界のスマートフォン市場がある。なぜ競争がそれほど激しいか。何十億もの人がスマホを使うので、市場のわずかな割合でも巨大な売上を意味する。顧客を勝ち取るため、企業は価格・カメラ画質・電池持ち・画面・速度で競う。一つの人気機能が、あるブランドを他社より前に出す助けになりうる。最近の競争の多くは、最新の携帯ネットワークである5Gに集まる。5Gは旧来のネットワークよりずっと速くデータを運び、動画・ゲーム・ダウンロードを滑らかにする。より多くの国が5G網を築く中、メーカーは、安価なモデルでもそれをうまく使える端末を出そうと競う。この競争は買い手に本当の利益をもたらす。激しい競争は企業に製品改良と手頃な価格の維持を促す。かつて高価な携帯だけにあった機能が今や手頃な機種にも現れ、より多くの人が強力な技術を楽しめる。難点もある。新モデルが速く現れるため古い携帯が時代遅れに感じられ、無駄を促す。わずかな改善だけの「改良」もある。それでもスマホ競争は、最も激しい競争の姿を示す。何十億の市場で、企業は生き残るためだけでも革新を続けねばならない——そしてその過程で、目覚ましい技術を日々の手の中に置いていく。",
        quiz: [
          { q: "スマホ市場の競争が激しい理由は？", options: ["何十億人も使い、わずかな市場割合でも巨大な売上になるから", "使う人が少ないから", "作るのが簡単だから"], answer: 0 },
          { q: "5Gの利点は？", options: ["旧来より速くデータを運び動画やゲームが滑らかになる", "電池が要らなくなる", "画面が消える"], answer: 0 },
          { q: "激しい競争が買い手にもたらす利益は？", options: ["製品改良と手頃な価格の維持", "価格の高騰", "選択肢の減少"], answer: 0 }
        ]
      },
      {
        id: "d0811-3",
        title: "Gifts Between Nations",
        level: "★★☆",
        genre: "世界情勢",
        text: "When countries want to show friendship, they sometimes exchange unusual gifts. Recently, one nation revived an old tradition by giving several pairs of peacocks — its beautiful national bird — to an international organization, as a symbol of friendship and shared culture. Such gifts may seem small beside serious world affairs, but they carry real meaning.\nWhy do nations give gifts? Diplomacy is not only about treaties and trade. It is also about building trust and goodwill between peoples. A thoughtful gift can express respect, celebrate a shared history, or simply create a warm feeling that makes future cooperation easier. Animals, plants, and works of art are common choices, each carrying a message about the country that gives them.\nGifts of animals have a long history. Over the centuries, nations have exchanged everything from horses to rare birds. Some gifts, like pandas sent to zoos around the world, have become famous symbols of friendship, drawing crowds and creating lasting bonds between countries.\nOf course, such gifts also raise practical questions. Animals need proper care, suitable homes, and attention to their health. A living gift is a responsibility, not just a symbol, and must be looked after well.\nStill, the tradition endures because it speaks to something human. Behind the formal language of diplomacy are people who, like friends anywhere, use gifts to say what words alone cannot. A pair of beautiful birds, offered in friendship, is a quiet reminder that nations, in the end, are made of people who wish to get along.",
        summaryJa: "国々は友好を示したいとき、時に珍しい贈り物を交わす。最近、ある国が古い伝統を復活させ、美しい国鳥であるクジャクを数つがい、友好と共有する文化の象徴として国際機関に贈った。こうした贈り物は深刻な世界情勢の傍らでは小さく見えるかもしれないが、本当の意味を持つ。なぜ国は贈り物をするのか。外交は条約や貿易だけではない。国民同士の信頼と善意を築くことでもある。心のこもった贈り物は敬意を表し、共有する歴史を祝い、あるいは単に、将来の協力を容易にする温かな感情を生みうる。動物・植物・芸術品がよく選ばれ、それぞれ贈る国についてのメッセージを担う。動物の贈り物には長い歴史がある。何世紀もの間、国々は馬から珍しい鳥まで交換してきた。世界中の動物園に送られたパンダのように、友好の有名な象徴となり、人だかりを呼び国同士の永続的な絆を生んだ贈り物もある。もちろん、こうした贈り物は実際的な問いも生む。動物には適切な世話・住処・健康への配慮が要る。生きた贈り物は象徴であるだけでなく責任であり、よく世話されねばならない。それでも伝統が続くのは、それが人間的な何かに語りかけるからだ。外交の形式的な言葉の背後には、どこの友人とも同じように、言葉だけでは言えないことを贈り物で伝える人々がいる。友好のうちに贈られる美しい一つがいの鳥は、国が結局、仲良くやりたいと願う人々でできていることの静かな気づきだ。",
        quiz: [
          { q: "ある国が国際機関に贈ったものは？", options: ["国鳥のクジャク数つがい", "大量の金貨", "武器"], answer: 0 },
          { q: "国が贈り物をする理由は？", options: ["国民同士の信頼と善意を築くため", "相手を困らせるため", "貿易を止めるため"], answer: 0 },
          { q: "生きた動物の贈り物が生む問いは？", options: ["適切な世話・住処・健康への配慮という責任", "象徴にならないこと", "歴史がないこと"], answer: 0 }
        ]
      },
      {
        id: "d0811-4",
        title: "Japan's Own Eyes in the Sky",
        level: "★★★",
        genre: "日本",
        text: "Almost everyone with a smartphone relies on satellites to find their way. Maps, ride services, and delivery apps all need to know exactly where you are. To make this positioning more accurate over its territory, Japan has built its own set of satellites, sometimes called the Quasi-Zenith Satellite System, designed to work closely with the well-known global positioning services.\nHow does satellite positioning work? Satellites high above the Earth send out signals. Your phone receives signals from several of them and, by measuring tiny differences in time, calculates your location. The more satellites your phone can 'see,' and the better their position, the more accurate the result.\nWhy does Japan need its own satellites? In cities full of tall buildings, and in mountainous areas, signals from distant satellites can be blocked or bounced around, causing errors. Japan's satellites are placed so that at least one is almost always high overhead, giving a clearer signal and greatly improving accuracy — sometimes down to a few centimeters.\nSuch precision has many uses. It can guide self-driving cars, help farmers steer machines through fields, support drones, and make navigation more reliable in crowded streets. As technology depends more and more on knowing exact positions, this accuracy becomes increasingly valuable.\nThe system is a quiet example of important infrastructure — technology most people never notice but use every day. High above Japan, these satellites circle patiently, helping phones, cars, and machines below answer a simple but essential question: exactly where am I right now?",
        summaryJa: "スマートフォンを持つほぼ誰もが、道を見つけるのに衛星に頼っている。地図・配車・配達アプリはすべて、あなたが正確にどこにいるかを知る必要がある。自国の領域上でこの位置測定をより正確にするため、日本は独自の衛星群——準天頂衛星システム（みちびき）とも呼ばれる——を築き、有名な全地球測位サービスと密に連携するよう設計した。衛星測位はどう働くのか。地球のはるか上の衛星が信号を送る。あなたの携帯はそのいくつかから信号を受け、時間のごく小さな差を測って位置を計算する。携帯が「見える」衛星が多く、その位置が良いほど、結果は正確になる。なぜ日本に独自の衛星が要るのか。高い建物だらけの都市や山がちな地域では、遠い衛星からの信号が遮られたり反射したりして誤差を生みうる。日本の衛星は、少なくとも一つがほぼ常に真上高くにあるよう配置され、より明瞭な信号を与えて精度を大きく高める——時に数センチ単位まで。こうした精度には多くの用途がある。自動運転車を導き、農家が畑で機械を操るのを助け、ドローンを支え、混雑した街路でも案内をより確実にする。技術が正確な位置を知ることにますます依存する中、この精度は一層価値を持つ。このシステムは重要なインフラの静かな一例だ——多くの人が気づかないが毎日使う技術。日本のはるか上で、これらの衛星は忍耐強く周回し、下の携帯・車・機械が単純だが不可欠な問い——今この瞬間、私は正確にどこにいるのか——に答える手助けをしている。",
        quiz: [
          { q: "衛星測位で位置を計算する方法は？", options: ["複数の衛星の信号の時間差を測る", "衛星の色を見る", "電話番号を使う"], answer: 0 },
          { q: "日本が独自の衛星を必要とする理由は？", options: ["高い建物や山で信号が遮られ誤差が出るのを防ぐため", "衛星が安いから", "宇宙が空いているから"], answer: 0 },
          { q: "高い精度の用途に含まれるものは？", options: ["自動運転車や農業機械の誘導", "天気を変えること", "電池を作ること"], answer: 0 }
        ]
      },
      {
        id: "d0811-5",
        title: "Helping Crops Survive Drought",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "Water is essential for growing food, but in many parts of the world it is becoming scarce. As droughts grow more common, farmers face a hard question: how can crops survive with less water? Scientists are working to answer it, and their research is quietly becoming one of the most important efforts for our future. One researcher was recently honored for pioneering work in this field.\nWhy does drought research matter so much? Most of the food we eat depends on plants, and plants depend on water. When rains fail, crops can wither, harvests shrink, and food becomes scarce and expensive. With a growing population and a changing climate, finding ways to grow food with less water is vital.\nHow do scientists help? They study how different plants cope with dry conditions, searching for varieties that need less water or can survive longer without it. They also develop better ways to use water wisely, such as watering only where and when plants truly need it. Some work to improve the soil so it holds moisture longer.\nThis research combines many fields — biology, chemistry, weather science, and engineering. Progress is often slow, tested season after season in real fields, but small improvements can help millions of farmers.\nThe work is a reminder that some of the most important science is not flashy. Quietly, in laboratories and fields, researchers are helping to make sure that as the climate changes, the world can still be fed — turning knowledge into something as basic, and as precious, as food on the table.",
        summaryJa: "水は食料を育てるのに不可欠だが、世界の多くの地域で乏しくなりつつある。干ばつがより一般的になる中、農家は難しい問いに直面する——より少ない水で作物はどう生き延びられるのか。科学者はそれに答えようと取り組んでおり、その研究は静かに、私たちの未来にとって最も重要な努力の一つになりつつある。ある研究者が最近、この分野の先駆的な業績で表彰された。なぜ干ばつ研究がそれほど重要か。私たちが食べる食料の多くは植物に、植物は水に依存する。雨が降らなければ作物は枯れ、収穫は縮み、食料は乏しく高価になる。人口が増え気候が変わる中、より少ない水で食料を育てる方法を見つけることは極めて重要だ。科学者はどう助けるのか。異なる植物が乾いた条件にどう対処するかを研究し、より少ない水で済む、あるいは水なしでより長く生きられる品種を探す。植物が本当に必要とする場所と時にだけ水をやるなど、水を賢く使うより良い方法も開発する。土壌を改良して水分をより長く保たせる研究をする者もいる。この研究は多くの分野——生物学・化学・気象科学・工学——を組み合わせる。進歩はしばしば遅く、実際の畑で季節ごとに試されるが、小さな改善が何百万もの農家を助けうる。この仕事は、最も重要な科学のいくつかが派手ではないことを思い出させる。研究室や畑で静かに、研究者は、気候が変わっても世界が食べていけるようにする手助けをしている——知識を、食卓の食べ物と同じくらい基本的で貴重なものに変えて。",
        quiz: [
          { q: "科学者が探しているものは？", options: ["より少ない水で育つ、または乾燥に耐える作物の品種", "水を消す方法", "雨を止める方法"], answer: 0 },
          { q: "干ばつ研究が重要な理由は？", options: ["食料は植物に、植物は水に依存し、干ばつで食料が乏しくなるから", "水が無限にあるから", "植物は水が不要だから"], answer: 0 },
          { q: "本文が伝えることは？", options: ["最も重要な科学のいくつかは派手ではない", "科学は常に派手だ", "農業に科学は不要"], answer: 0 }
        ]
      }
    ]
  },
    {
    date: "2026-08-10",
    passages: [
      {
        id: "d0810-1",
        title: "Setting a Floor Under Wages",
        level: "★★★",
        genre: "ビジネス",
        text: "How little can a company legally pay its workers? In many countries, the answer is set by a rule called the minimum wage — the lowest hourly pay allowed by law. In Japan, a new, higher wage floor is due to take effect, affecting more than fifty million workers. Changes like this spark an important economic debate.\nWhy have a minimum wage at all? The main goal is to protect workers. Without a legal floor, some employers might pay very low wages, leaving people unable to afford basic needs even while working full time. A minimum wage aims to ensure that work provides at least a modest standard of living.\nRaising the minimum wage has clear benefits. Low-paid workers earn more, can spend more, and may feel their work is valued. Because they often spend most of what they earn, this extra money can flow quickly back into local shops and businesses.\nBut there are trade-offs, which is why the topic is debated. If wages rise too fast, some businesses, especially small ones, may struggle to pay. They might raise prices, reduce hours, or hire fewer people. Supporters argue that fair pay is worth it; critics worry about these side effects.\nMost experts agree that gradual, predictable increases work best, giving businesses time to adjust. The debate is really about balance: how to lift the lowest earners without harming the very jobs they depend on. It is a clear example of how a single number can shape millions of lives.",
        summaryJa: "企業は労働者にどこまで低く支払っても合法なのか。多くの国で、その答えは「最低賃金」という規則——法律が許す最も低い時給——で定められる。日本では、新しくより高い賃金の下限が施行される予定で、5000万人を超える労働者に影響する。こうした変更は重要な経済論争を呼ぶ。そもそもなぜ最低賃金があるのか。主な目的は労働者の保護だ。法的な下限がなければ、一部の雇い主は非常に低い賃金を払い、フルタイムで働いても基本的な必需品を賄えない人を生みうる。最低賃金は、働くことが少なくともささやかな生活水準をもたらすようにすることを狙う。最低賃金の引き上げには明白な利点がある。低賃金の労働者はより多く稼ぎ、より多く使え、自分の仕事が評価されていると感じうる。彼らは稼ぎの大半を使うことが多いので、この追加のお金は素早く地元の店や事業に還流しうる。だが代償もあり、だからこそ論じられる。賃金が速く上がりすぎると、一部の企業、特に小企業は支払いに苦しみうる。価格を上げ、労働時間を減らし、雇用を減らすかもしれない。支持者は公正な賃金にはその価値があると論じ、批判者はこうした副作用を懸念する。多くの専門家は、段階的で予測可能な引き上げが最も良く、企業に適応の時間を与えると同意する。論争は本当は均衡についてだ——最も低い稼ぎ手を、彼らが頼る仕事そのものを害さずにどう引き上げるか。一つの数字が何百万もの人生を形づくる明快な例だ。",
        quiz: [
          { q: "最低賃金の主な目的は？", options: ["労働者を保護し一定の生活水準を確保すること", "企業の利益を最大化すること", "物価を上げること"], answer: 0 },
          { q: "最低賃金引き上げの利点は？", options: ["低賃金の人が稼ぎ地元の店に還流する", "誰も得をしない", "輸出が止まる"], answer: 0 },
          { q: "多くの専門家が最良とする方法は？", options: ["段階的で予測可能な引き上げ", "一度に急激な引き上げ", "引き上げをしないこと"], answer: 0 }
        ]
      },
      {
        id: "d0810-2",
        title: "The Quest for Fusion Energy",
        level: "★★★",
        genre: "テクノロジー",
        text: "For decades, scientists have chased one of the boldest goals in energy: to create power the way the sun does. This process, called nuclear fusion, joins tiny particles together to release enormous amounts of energy. If it can be made to work reliably on Earth, fusion could provide vast, clean power — and researchers in Japan and around the world are racing to get there.\nHow is fusion different from today's nuclear power? Current reactors use fission, which splits heavy atoms apart and leaves behind long-lasting radioactive waste. Fusion instead joins light atoms together, produces far less dangerous waste, and cannot melt down in the same way. Its main fuel can be drawn from water, making it almost limitless.\nWhy is it so hard? To fuse atoms, you must heat fuel to temperatures hotter than the center of the sun and hold it steady long enough to release energy. Building machines that can do this — and get more energy out than they put in — has challenged scientists for generations.\nProgress is now speeding up. New materials, powerful magnets, and better computers are helping researchers and private companies inch closer. Some hope to build working power plants within a few decades.\nFusion is not ready yet, and promises have been broken before. But the prize is enormous: a clean, safe, almost endless source of energy. Each experiment brings that dream a little nearer, as scientists try, patiently, to capture the power of the stars and bring it down to Earth.",
        summaryJa: "何十年もの間、科学者はエネルギーで最も大胆な目標の一つを追ってきた——太陽と同じやり方で電力を作ることだ。「核融合」と呼ばれるこの過程は、小さな粒子を結び合わせて膨大なエネルギーを放出する。地球で確実に機能させられれば、核融合は莫大でクリーンな電力を供給しうる——日本や世界中の研究者がそこへ到達しようと競っている。核融合は今日の原子力とどう違うのか。現在の原子炉は「核分裂」を使い、重い原子を割って長く残る放射性廃棄物を残す。核融合は代わりに軽い原子を結合させ、はるかに危険の少ない廃棄物を出し、同じようには炉心溶融しない。主な燃料は水から得られ、ほぼ無限にできる。なぜそんなに難しいのか。原子を融合させるには、燃料を太陽の中心より高温に熱し、エネルギーを放出するのに十分な時間、安定に保たねばならない。これを行い、投入より多くのエネルギーを取り出せる機械を作ることが、何世代も科学者を悩ませてきた。今、進歩が加速している。新素材・強力な磁石・優れたコンピューターが、研究者や民間企業が少しずつ近づくのを助ける。数十年内に稼働する発電所を建てたいと望む者もいる。核融合はまだ準備が整っておらず、約束は以前にも破られた。だが報酬は莫大だ——クリーンで安全な、ほぼ無限のエネルギー源。各実験がその夢を少しずつ近づける。科学者は忍耐強く、星の力を捕らえて地上へもたらそうとしている。",
        quiz: [
          { q: "核融合は何をする過程か？", options: ["小さな粒子を結び合わせて膨大なエネルギーを放出する", "原子を割ること", "水を凍らせること"], answer: 0 },
          { q: "核融合が核分裂（今の原子力）と違う点は？", options: ["軽い原子を結合し危険の少ない廃棄物を出す", "より多くの廃棄物を出す", "燃料が石炭である"], answer: 0 },
          { q: "核融合が難しい理由は？", options: ["太陽の中心より高温に熱し安定に保つ必要があるから", "燃料が無いから", "冷やすのが簡単すぎるから"], answer: 0 }
        ]
      },
      {
        id: "d0810-3",
        title: "Turning Climate Promises into Action",
        level: "★★★",
        genre: "世界情勢",
        text: "Countries around the world have made many promises to fight climate change. The harder task is turning those promises into real results. Recently, a global partnership of governments, cities, businesses, and investors launched a new plan focused on exactly that: moving from words to concrete action on clean air, energy, and the environment.\nWhy is this shift so important? For years, nations have set goals to cut pollution and switch to cleaner energy. But a goal on paper does not clean the air by itself. It must be followed by real projects — building wind and solar power, protecting forests, and helping communities adapt to a changing climate. Coordinating this work across many countries is a huge challenge.\nThere is encouraging news to build on. Investment in clean technology has grown enormously in recent years, and, for the first time, the world now generates more electricity from renewable sources than from coal. This shows that big change is possible when money, technology, and political will come together.\nSerious problems remain. The world faces energy shortages, economic tensions, and conflicts that make cooperation harder. Progress is uneven, and some promises risk being forgotten.\nStill, the direction matters. By focusing on turning commitments into results, countries hope to make climate action something people can actually see and feel — cleaner air, more reliable energy, and safer communities. The lesson is simple but powerful: promises open the door, but only action can carry us through it.",
        summaryJa: "世界中の国々が気候変動と闘う多くの約束をしてきた。より難しい課題は、その約束を現実の成果に変えることだ。最近、政府・都市・企業・投資家の世界的な連携が、まさにそれに焦点を当てた新計画を立ち上げた——言葉から、清浄な空気・エネルギー・環境に関する具体的な行動へ移ることだ。なぜこの転換が重要か。長年、各国は汚染を減らしよりクリーンなエネルギーへ切り替える目標を掲げてきた。だが紙の上の目標はそれ自体で空気を清めない。現実の事業が続かねばならない——風力や太陽光の建設、森林の保護、変わる気候への地域の適応の支援だ。この作業を多くの国で調整するのは大きな挑戦だ。積み上げるべき明るい知らせもある。近年、クリーン技術への投資は大きく伸び、初めて、世界は今や石炭より再生可能エネルギーから多くの電力を生んでいる。お金・技術・政治的意志が揃えば大きな変化が可能であることを示す。深刻な問題は残る。世界はエネルギー不足・経済的緊張・協力を難しくする対立に直面する。進歩は不均一で、一部の約束は忘れられる恐れがある。それでも方向は重要だ。約束を成果に変えることに注力することで、各国は気候対策を人々が実際に見て感じられるもの——清浄な空気・より信頼できるエネルギー・より安全な地域——にしたい。教訓は単純だが力強い——約束は扉を開くが、私たちをその先へ運べるのは行動だけだ。",
        quiz: [
          { q: "新計画が焦点を当てるのは？", options: ["約束を具体的な行動・成果に変えること", "新しい約束を増やすこと", "何もしないこと"], answer: 0 },
          { q: "本文が挙げる明るい知らせは？", options: ["世界が石炭より再生可能エネルギーから多く発電するようになった", "石炭が増えたこと", "投資が消えたこと"], answer: 0 },
          { q: "本文の教訓は？", options: ["約束は扉を開くが先へ運べるのは行動だけ", "約束だけで十分", "行動は不要"], answer: 0 }
        ]
      },
      {
        id: "d0810-4",
        title: "Reviving the Countryside with Craft",
        level: "★★☆",
        genre: "日本",
        text: "Many rural areas in Japan face a difficult future. As young people move to big cities, small towns lose population, and local shops and traditions struggle to survive. To fight back, some communities are trying a creative strategy: attracting wealthy visitors from around the world with rare, high-quality crafts — including custom-made swords that can cost tens of thousands of dollars.\nWhy focus on luxury crafts? Rural Japan is home to skilled artisans who have practiced their crafts for generations, making swords, pottery, textiles, and other goods by hand. These items cannot be mass-produced, so they are rare and highly valued. A single wealthy traveler who buys one can bring in more money than many ordinary tourists.\nThe idea is not only about selling objects. Visitors come to meet the artisans, watch them work, and learn the stories behind their crafts. This kind of deep, personal experience is exactly what many rich travelers are looking for — something authentic that they cannot find anywhere else.\nThere are challenges. Very few people can afford such expensive items, so the market is small. And communities must protect their traditions from becoming mere shows for tourists.\nStill, the strategy offers hope. By turning their heritage into a valuable experience, struggling towns can earn money, support their artisans, and keep ancient skills alive. It is a reminder that the answer to a modern problem may lie in something very old — a craft, patiently perfected, that the wider world is willing to travel far to see.",
        summaryJa: "日本の多くの地方は難しい未来に直面している。若者が大都市へ移るにつれ、小さな町は人口を失い、地元の店や伝統は生き残りに苦しむ。反撃するため、一部の地域は創意ある戦略を試している——世界中の裕福な訪問者を、希少で高品質な工芸品で惹きつけるのだ。数万ドルもする注文製の刀を含めて。なぜ高級工芸品に注目するのか。地方の日本には、何世代も技を磨いてきた熟練の職人がいて、刀・陶器・織物などを手作りする。こうした品は大量生産できないので希少で高く評価される。一つ買う裕福な旅行者一人が、多くの普通の観光客より多くのお金をもたらしうる。この発想は品物を売ることだけではない。訪問者は職人に会い、作業を見て、工芸の背後の物語を学びに来る。この種の深く個人的な体験こそ、多くの富裕な旅行者が求めるもの——他のどこにも見つからない本物だ。課題もある。そんな高価な品を買える人はごくわずかなので市場は小さい。そして地域は、伝統が観光客向けの単なる見世物になるのを防がねばならない。それでも戦略は希望を与える。遺産を価値ある体験に変えることで、苦境の町はお金を稼ぎ、職人を支え、古い技を生かし続けられる。現代の問題への答えが、とても古いもの——忍耐強く磨かれた工芸、広い世界がはるばる見に来る価値のあるもの——にあるかもしれないことを思い出させる。",
        quiz: [
          { q: "一部の地方が試している戦略は？", options: ["希少で高品質な工芸品で裕福な訪問者を惹きつける", "工場を増やすこと", "伝統をやめること"], answer: 0 },
          { q: "高級工芸品に注目する理由は？", options: ["手作りで希少なため裕福な旅行者一人が多くのお金をもたらす", "安く大量に作れるから", "誰でも買えるから"], answer: 0 },
          { q: "本文が挙げる課題は？", options: ["買える人が少なく市場が小さい／伝統が見世物になる恐れ", "職人が全くいないこと", "刀が作れないこと"], answer: 0 }
        ]
      },
      {
        id: "d0810-5",
        title: "A New Pill for Weight Loss",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "For people struggling with obesity, losing weight can be extremely difficult, and it affects their health in serious ways. Recently, scientists reported promising results from an experimental pill that helped people lose a significant amount of weight — as much as around twelve percent of their body weight over several months. If proven safe, such medicines could change how a common health problem is treated.\nHow does it work? The pill belongs to a family of drugs that copy a natural hormone in the body. This hormone helps control appetite and the feeling of being full. By boosting its effect, the medicine helps people eat less without feeling constantly hungry, so they gradually lose weight.\nWhy is a pill exciting? Similar medicines already exist, but many must be given by injection. A pill that people can simply swallow would be easier and more comfortable to use, which might help more people benefit from the treatment.\nCaution is essential, of course. Every medicine can have side effects, and losing weight safely still depends on healthy eating and activity. A drug is a tool, not a magic cure, and doctors must decide who should use it. Long-term studies are needed to be sure it is both safe and effective.\nStill, the research offers hope. Obesity raises the risk of many serious illnesses, so better treatments could improve millions of lives. Combined with healthy habits, medicines like this may give people a powerful new way to take control of their health — one careful step at a time.",
        summaryJa: "肥満に苦しむ人にとって、体重を減らすのは極めて難しく、健康にも深刻な影響を与える。最近、科学者が、実験段階の錠剤の有望な結果を報告した——数か月で体重の約12％もの大幅な減量を助けたのだ。安全性が証明されれば、こうした薬は、ありふれた健康問題の治療の仕方を変えうる。どう働くのか。この錠剤は、体内の自然なホルモンを模倣する薬の仲間だ。このホルモンは食欲と満腹感の制御を助ける。その効果を高めることで、薬は人々が常に空腹を感じずに食べる量を減らす助けをし、徐々に体重が落ちる。なぜ錠剤が期待されるのか。似た薬は既にあるが、多くは注射で投与せねばならない。ただ飲み込むだけの錠剤は使いやすく快適で、より多くの人が治療の恩恵を受ける助けになるかもしれない。もちろん慎重さが不可欠だ。あらゆる薬に副作用がありうるし、安全に減量するにはなお健康的な食事と運動が要る。薬は道具であって魔法の治療ではなく、誰が使うべきかは医師が判断せねばならない。安全かつ有効と確かめるには長期の研究が必要だ。それでも研究は希望を与える。肥満は多くの深刻な病のリスクを高めるので、より良い治療は何百万もの人生を改善しうる。健康的な習慣と組み合わせれば、こうした薬は人々に健康を取り戻す強力な新しい方法を与えうる——慎重な一歩ずつ。",
        quiz: [
          { q: "この錠剤はどう働くか？", options: ["食欲や満腹感を制御するホルモンの効果を高める", "眠りを深くする", "筋肉を増やす"], answer: 0 },
          { q: "錠剤が期待される理由は？", options: ["注射より飲みやすく多くの人が恩恵を受けうる", "味が良いから", "無料だから"], answer: 0 },
          { q: "本文が促す慎重さは？", options: ["副作用がありうるし健康的な食事と運動もなお必要", "薬だけで十分", "医師の判断は不要"], answer: 0 }
        ]
      }
    ]
  },
    {
    date: "2026-08-09",
    passages: [
      {
        id: "d0809-1",
        title: "Why Markets React to Elections",
        level: "★★★",
        genre: "ビジネス",
        text: "When a country holds an election, the results can move more than just its government — they can move its financial markets too. Recently, stock markets in Asia rose after an election in Japan, as investors expected the new political situation to lead to more government spending. But why should a vote change the price of shares?\nThe key is expectations. Stock prices reflect what investors think will happen in the future, not just what is happening now. An election can change those expectations. If investors believe a new government will spend more, cut taxes, or support certain industries, they may expect companies to earn more — and buy their shares, pushing prices up.\nDifferent policies affect different businesses. A promise to spend on construction may lift building companies, while plans for clean energy may boost solar or battery firms. Investors try to guess who will benefit and act quickly, often before any policy is actually put in place.\nMarkets can also fall after elections, if the result brings uncertainty or policies that worry investors. What markets dislike most is not any single outcome, but confusion about what will happen next.\nIt is important to remember that these early moves are guesses, not guarantees. Promises made in a campaign do not always become reality, and the economy depends on far more than one election.\nStill, the link is real. An election is not only a political event; it is also a moment when millions of investors quietly rewrite their expectations about the future — and money moves as a result.",
        summaryJa: "国が選挙を行うと、その結果は政府だけでなく金融市場も動かしうる。最近、日本の選挙の後、投資家が新しい政治状況はより多くの政府支出につながると期待し、アジアの株式市場が上昇した。だがなぜ投票が株価を変えるのか。鍵は「期待」だ。株価は、今起きていることだけでなく、投資家が将来起きると考えることを映す。選挙はその期待を変えうる。新政府がより多く支出し、減税し、特定の産業を支えると投資家が信じれば、企業がより稼ぐと期待し、株を買って価格を押し上げうる。政策ごとに影響する事業は異なる。建設への支出の約束は建設会社を押し上げ、クリーンエネルギーの計画は太陽光や電池の企業を押し上げうる。投資家は誰が恩恵を受けるか推測し、政策が実際に実施される前に素早く動くことが多い。選挙後に市場が下がることもある——結果が不確実性や投資家を不安にさせる政策をもたらせば。市場が最も嫌うのは、特定の結果でなく、次に何が起きるかの混乱だ。こうした早い動きは推測であって保証ではないと覚えておくことが重要だ。選挙戦の約束は常に現実になるとは限らず、経済は一つの選挙よりはるかに多くに左右される。それでも結びつきは本物だ。選挙は政治的な出来事だけでなく、何百万もの投資家が将来への期待を静かに書き換える瞬間でもあり——その結果、お金が動く。",
        quiz: [
          { q: "選挙が株価を動かす鍵は？", options: ["投資家の将来への「期待」が変わること", "天気が変わること", "株の数が減ること"], answer: 0 },
          { q: "政策ごとに影響が異なる例は？", options: ["建設支出は建設会社、クリーンエネ計画は太陽光や電池を押し上げる", "全企業が同じように動く", "影響は全くない"], answer: 0 },
          { q: "市場が最も嫌うものは？", options: ["次に何が起きるかの混乱（不確実性）", "支出の増加", "減税"], answer: 0 }
        ]
      },
      {
        id: "d0809-2",
        title: "Tiny Cleaners Underground",
        level: "★★★",
        genre: "テクノロジー",
        text: "Some of the most powerful tools for cleaning up pollution may be too small to see. Deep underground, scientists have found, certain bacteria can trap toxic uranium, locking it in place so it cannot spread through soil and water. This natural ability could one day help clean up dangerous pollution left by mining and industry.\nHow can bacteria do this? These tiny living things carry out chemical reactions as part of their normal lives. In some cases, those reactions change harmful metals like uranium into forms that do not dissolve in water. Instead of flowing away and spreading, the uranium becomes solid and stays put, safely trapped underground.\nWhy is this useful? Toxic metals from old mines or factories can seep into groundwater, threatening drinking water and harming health. Cleaning such pollution with machines is expensive and difficult, especially deep below the surface. Using bacteria that are already there — a method called bioremediation — could be cheaper and gentler on the environment.\nThere are challenges. Scientists must understand exactly how the bacteria work, make sure the trapped metal stays locked away, and check that helping these microbes does not cause other problems. Nature is complex, and every action has side effects.\nStill, the idea is inspiring. It shows that solutions to human-made problems can come from unexpected places — even from invisible life beneath our feet. By working with nature rather than against it, scientists hope to turn tiny bacteria into quiet, tireless helpers in the effort to heal polluted land.",
        summaryJa: "汚染を浄化する最も強力な道具のいくつかは、目に見えないほど小さいかもしれない。地下深くで、ある種の細菌が有毒なウランを捕らえ、その場に固定して土壌や水中に広がらないようにできることを科学者が見つけた。この自然の能力は、いつか採掘や産業が残した危険な汚染の浄化を助けうる。細菌はどうやってこれを行うのか。この小さな生き物は、通常の生活の一部として化学反応を行う。場合によっては、その反応がウランのような有害金属を水に溶けない形へ変える。流れ去って広がる代わりに、ウランは固体になりその場にとどまり、地下に安全に閉じ込められる。なぜ有用か。古い鉱山や工場からの有毒金属は地下水に染み込み、飲料水を脅かし健康を害しうる。そうした汚染を機械で浄化するのは高価で難しく、特に地表の深くではなおさらだ。既にそこにいる細菌を使う方法——バイオレメディエーション（生物学的浄化）——は、より安価で環境に優しくなりうる。課題もある。科学者は細菌の働きを正確に理解し、捕らえた金属が閉じ込められたままか確かめ、この微生物を助けることが別の問題を起こさないか確認せねばならない。自然は複雑で、あらゆる行動に副作用がある。それでもこの発想は心を打つ。人間が作った問題への解決策が、思わぬ場所——足下の見えない生命からさえ——来うることを示す。自然に逆らうのでなく共に働くことで、科学者は小さな細菌を、汚染された土地を癒す静かでたゆまぬ助け手に変えたいと願う。",
        quiz: [
          { q: "地下の細菌ができることは？", options: ["有毒なウランを溶けない形にして固定する", "金を作ること", "水を増やすこと"], answer: 0 },
          { q: "細菌を使う浄化（バイオレメディエーション）の利点は？", options: ["機械より安価で環境に優しくなりうる", "必ず一瞬で終わる", "副作用が全くない"], answer: 0 },
          { q: "本文が挙げる課題は？", options: ["働きの理解や別の問題を起こさないかの確認が必要", "細菌が大きすぎること", "ウランが安全なこと"], answer: 0 }
        ]
      },
      {
        id: "d0809-3",
        title: "When the World Plays Together",
        level: "★★☆",
        genre: "世界情勢",
        text: "Few events bring the world together like a major international sports tournament. When teams from many countries gather to compete, billions of people watch, cheer, and share the same moments of excitement. Beyond the games themselves, such events have a big impact on business, cities, and the relationships between nations.\nWhy do these tournaments matter so much? For the host countries, they bring huge numbers of visitors, along with money for hotels, restaurants, and transport. Cities build new stadiums, train stations, and parks, some of which serve local people for years afterward. Companies pay large sums to sponsor teams and advertise to a global audience.\nThere are cultural benefits too. When people from different countries meet as fans, players, and visitors, they share food, language, and customs. A tournament can soften borders for a few weeks, reminding people how much they have in common through a simple love of the game.\nOf course, hosting is not without problems. Building stadiums is expensive, and some are little used after the event. Large crowds require careful planning for safety and transport. Not every promise of lasting benefit comes true.\nStill, the appeal endures. A global tournament is one of the rare moments when the whole world pays attention to the same thing at the same time — not a conflict or a crisis, but a game. In a divided world, that shared joy, however brief, is itself something worth celebrating, connecting strangers across continents through the simple drama of sport.",
        summaryJa: "大きな国際スポーツ大会ほど世界を一つにする出来事は少ない。多くの国のチームが集まって競うと、何十億もの人が見て、応援し、同じ興奮の瞬間を分かち合う。試合そのものを超え、こうした大会はビジネス・都市・国家間の関係に大きな影響を与える。なぜこれらの大会がそれほど重要か。開催国には、膨大な数の来訪者と、ホテル・飲食・交通へのお金をもたらす。都市は新しいスタジアム・駅・公園を建て、その一部は後々何年も地元の人々に役立つ。企業はチームの協賛や世界的な観客への広告に多額を払う。文化的な利点もある。異なる国の人々がファン・選手・来訪者として出会うと、食・言語・習慣を分かち合う。大会は数週間、国境を和らげ、単純な競技への愛を通じて人々がいかに多くの共通点を持つかを思い出させうる。もちろん開催に問題がないわけではない。スタジアム建設は高価で、一部は大会後ほとんど使われない。大群衆は安全と交通の入念な計画を要する。持続的利益の約束が全て叶うわけではない。それでも魅力は続く。世界的な大会は、世界全体が同時に同じもの——対立や危機でなく、一つの試合——に注目する稀な瞬間の一つだ。分断された世界で、その分かち合う喜びは、たとえ短くとも、それ自体祝う価値がある。単純なスポーツのドラマを通じ、大陸を越えて見知らぬ者同士をつなぐのだ。",
        quiz: [
          { q: "国際スポーツ大会が開催国にもたらすものは？", options: ["多くの来訪者とホテル・交通などへのお金", "戦争", "孤立"], answer: 0 },
          { q: "大会の文化的な利点は？", options: ["異なる国の人々が食・言語・習慣を分かち合う", "国境が永久に消える", "言語が一つになる"], answer: 0 },
          { q: "本文が挙げる開催の問題は？", options: ["スタジアム建設が高価で後で使われないこともある", "観客が全く来ないこと", "試合が行われないこと"], answer: 0 }
        ]
      },
      {
        id: "d0809-4",
        title: "The Cooling Custom of Uchimizu",
        level: "★★☆",
        genre: "日本",
        text: "On a hot summer day in Japan, you may see people gently sprinkling water on the street in front of their homes or shops. This simple, old custom is called uchimizu, and it is a gentle way to cool the air and settle the dust. In an age of rising summer temperatures, this centuries-old habit is drawing new interest.\nHow does uchimizu work? When water is spread on a hot surface and then evaporates, it takes heat from the air around it. This is the same reason we feel cool when sweat dries on our skin. A little water on a warm street can lower the temperature nearby by a small but noticeable amount, especially in the shade.\nUchimizu is about more than temperature. Traditionally, sprinkling water was also a way to welcome guests, showing that a space had been prepared and cared for. It carries a feeling of politeness and calm, turning a practical act into a small daily ritual.\nToday, as cities grow hotter, some communities hold uchimizu events, where many people sprinkle water at the same time to cool a whole street. Using leftover or rain water makes the custom friendly to the environment as well.\nOf course, uchimizu alone cannot solve the problem of extreme heat. But it is a gentle reminder that not every solution needs to be high-tech. Sometimes an old, simple habit — a little water, spread with care — can bring a moment of coolness and a touch of tradition to a hot summer day.",
        summaryJa: "日本の暑い夏の日、家や店の前の道に人々がそっと水をまく光景を見るかもしれない。この単純で古い習わしは「打ち水」と呼ばれ、空気を冷やし埃を鎮める穏やかな方法だ。夏の気温が上がる時代に、この何世紀も続く習慣が新たな関心を集めている。打ち水はどう働くのか。熱い表面に水がまかれて蒸発すると、周りの空気から熱を奪う。汗が肌で乾くと涼しく感じるのと同じ理由だ。暖かい道への少しの水は、特に日陰で、近くの温度をわずかだが感じられるほど下げうる。打ち水は温度だけの話ではない。伝統的に、水をまくことは客を迎える方法でもあり、空間が整えられ心を配られたことを示した。丁寧さと落ち着きの感覚を伴い、実用的な行いを小さな日々の儀式に変える。今日、都市が暑くなる中、多くの人が同時に水をまいて通り全体を冷やす打ち水イベントを開く地域もある。残り水や雨水を使えば、習わしは環境にも優しくなる。もちろん打ち水だけで猛暑の問題は解けない。だが、あらゆる解決策が高度な技術を要するわけではないという穏やかな気づきだ。時に、古く単純な習慣——心を込めてまかれた少しの水——が、暑い夏の日に一瞬の涼しさと伝統の趣をもたらしうる。",
        quiz: [
          { q: "「打ち水」とは何をすることか？", options: ["道に水をまいて空気を冷やし埃を鎮める", "道を掃くこと", "花を植えること"], answer: 0 },
          { q: "打ち水が涼しさを生む仕組みは？", options: ["水が蒸発する際に周りの空気から熱を奪う", "水が光るから", "水が重いから"], answer: 0 },
          { q: "本文が伝える気づきは？", options: ["あらゆる解決策が高度な技術を要するわけではない", "打ち水で猛暑は完全に解決する", "伝統は無意味だ"], answer: 0 }
        ]
      },
      {
        id: "d0809-5",
        title: "Ancient Art on an Eggshell",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "Long before writing was invented, humans were already creating art. Scientists studying pieces of ostrich eggshell from southern Africa have found that people were engraving them with careful geometric patterns more than sixty thousand years ago. A closer look shows these designs were even more organized and deliberate than experts once believed.\nWhy is this important? Making patterns on purpose is a sign of symbolic thinking — the ability to use marks to carry meaning. This is one of the qualities that makes humans special. Finding such careful designs so long ago suggests that our ancestors had rich, creative minds far earlier than we sometimes imagine.\nWhy ostrich eggshells? In that time and place, ostrich eggs were valuable. Their strong shells could be used as containers to carry water, much like a bottle. Decorating them may have marked ownership, shown group identity, or simply expressed a love of beauty. The patterns may even have been a kind of message, understood by people who shared the same culture.\nStudying these objects is delicate work. The shells are fragile and ancient, so scientists handle them with great care, using close observation and modern tools to understand the patterns without damaging them.\nThe engraved eggshells are a moving reminder of how deeply human creativity runs. Tens of thousands of years ago, someone sat down and carefully carved a design, for reasons we can only partly guess. Across an enormous gulf of time, that simple act of making art still speaks to us — proof that the urge to create is very old indeed.",
        summaryJa: "文字が発明されるはるか前、人類は既に芸術を生み出していた。南アフリカのダチョウの卵の殻の破片を研究する科学者が、人々が6万年以上前に、丁寧な幾何学模様をそこに彫っていたことを見つけた。よく見ると、これらの意匠は専門家がかつて信じたよりさらに整い、意図的だった。なぜ重要か。意図して模様を作ることは、象徴的思考——印に意味を持たせる能力——の証だ。これは人類を特別にする性質の一つだ。これほど昔にそんな丁寧な意匠が見つかることは、私たちの祖先が、時に想像するよりずっと早くから豊かで創造的な心を持っていたことを示唆する。なぜダチョウの卵の殻か。その時代と場所で、ダチョウの卵は貴重だった。その丈夫な殻は、瓶のように水を運ぶ容器に使えた。装飾は所有を示したり、集団の帰属（アイデンティティ）を表したり、単に美への愛を表したのかもしれない。模様は、同じ文化を共有する人々に理解される一種のメッセージだったことさえありうる。こうした品の研究は繊細な仕事だ。殻は脆く古いので、科学者は細心の注意で扱い、丁寧な観察と現代の道具を使い、傷つけずに模様を理解する。彫られた卵の殻は、人間の創造性がいかに深く流れているかの心打つ気づきだ。何万年も前、誰かが座って丁寧に意匠を刻んだ——その理由を私たちは一部しか推測できない。膨大な時の隔たりを越え、その単純な芸術を作る営みは今も私たちに語りかける——創造したいという衝動が実に古いものである証だ。",
        quiz: [
          { q: "科学者が見つけたことは？", options: ["6万年以上前に卵の殻に幾何学模様が彫られていた", "文字が最初に作られた場所", "新種の鳥"], answer: 0 },
          { q: "意図して模様を作ることが示すのは？", options: ["象徴的思考（印に意味を持たせる能力）", "食べ物の好み", "天気の予測能力"], answer: 0 },
          { q: "ダチョウの卵の殻が使われた理由は？", options: ["丈夫で水を運ぶ容器に使えたから", "食べられないから", "光るから"], answer: 0 }
        ]
      }
    ]
  },
    {
    date: "2026-08-08",
    passages: [
      {
        id: "d0808-1",
        title: "A Tax Cut on Everyday Food",
        level: "★★☆",
        genre: "ビジネス",
        text: "Governments raise most of their money through taxes, and one common kind is a tax added to the things we buy. In Japan, the government has approved a plan to cut this consumption tax on food and non-alcoholic drinks from eight percent down to one percent, for two years. It is a big change aimed at helping households cope with rising prices.\nHow does a consumption tax work? A small percentage is added to the price of goods at the shop, and the store passes that money to the government. Because everyone buys food, a tax on it affects every household, rich or poor. Cutting the tax on food means families pay a little less each time they shop for groceries.\nWhy target food in particular? Food is something no one can avoid buying, so its price hits low-income families hardest. By lowering the tax on essentials while keeping it on other goods, the government tries to ease the burden where it is felt most, especially when prices are climbing.\nThere are trade-offs, of course. Taxes pay for schools, roads, hospitals, and pensions, so cutting one tax means finding money elsewhere or spending less. That is why the cut is temporary, lasting two years.\nFor learners of business English, this is a useful example of how governments use taxes as tools. A tax is not only a way to raise money; it is also a lever that leaders can pull to shape the economy and support people during difficult times.",
        summaryJa: "政府は歳入の多くを税で得ており、よくある一種が、買う物に加わる税だ。日本政府は、食品と酒以外の飲料にかかるこの消費税を、2年間、8％から1％へ引き下げる案を承認した。物価上昇に家計が対処するのを助けることを狙った大きな変更だ。消費税はどう働くか。店で商品の価格に小さな割合が加わり、店がそのお金を政府に渡す。誰もが食品を買うため、それへの税は貧富を問わず全家庭に影響する。食品の税を下げれば、家族は買い物のたびに少しだけ安く払う。なぜ特に食品を対象にするのか。食品は誰も買わずにいられないので、その価格は低所得の家庭に最も重くのしかかる。生活必需品への税を下げ、他の商品には残すことで、政府は特に物価上昇時に、最も強く感じられる負担を和らげようとする。もちろん代償もある。税は学校・道路・病院・年金を賄うので、一つの税を下げれば別の財源を探すか支出を減らすことになる。だからこの引き下げは2年間の一時的なものだ。ビジネス英語の学習者には、政府が税を道具としてどう使うかの良い例だ。税は歳入を得る手段だけでなく、指導者が経済を形づくり困難な時に人々を支えるために引けるレバーでもある。",
        quiz: [
          { q: "日本政府が承認した案は？", options: ["食品などの消費税を8％から1％へ2年間引き下げる", "消費税を完全に廃止する", "食品をすべて無料にする"], answer: 0 },
          { q: "なぜ特に食品を対象にするのか？", options: ["食品は誰も避けられず低所得家庭に最も重いから", "食品が安いから", "食品は課税できないから"], answer: 0 },
          { q: "税を下げる代償は？", options: ["別の財源を探すか支出を減らす必要がある", "歳入が自動的に増える", "何も起きない"], answer: 0 }
        ]
      },
      {
        id: "d0808-2",
        title: "Cleaner Power with Less Precious Metal",
        level: "★★★",
        genre: "テクノロジー",
        text: "Hydrogen fuel cells are a promising clean technology. They combine hydrogen and oxygen to make electricity, producing only water as waste — no smoke, no carbon dioxide. But they have a costly problem: many fuel cells rely on platinum, a rare and expensive metal, to make the reaction work. Now scientists have found a way to use far less of it.\nWhy is platinum such an obstacle? It is one of the rarest metals on Earth, so it is expensive and hard to obtain in large amounts. If every fuel cell needs a lot of platinum, the technology becomes too costly to use widely. Reducing the amount needed could help fuel cells compete with other ways of making power.\nThe new approach uses a specially designed carbon structure at a tiny scale. This clever material holds even small amounts of platinum in a way that keeps the reaction fast, efficient, and stable over time. In other words, it does more with less.\nWhy does this matter now? As the world seeks clean energy, fuel cells could power vehicles, buildings, and even the huge data centers that run artificial intelligence. Making them cheaper and more durable brings that future closer.\nChallenges remain, as always. Laboratory success must be proven at large scale, and hydrogen itself must be produced cleanly and cheaply. Still, the discovery is encouraging. By using a precious resource more wisely, scientists take another small but meaningful step toward practical, clean power for a hungry, energy-using world.",
        summaryJa: "水素燃料電池は有望なクリーン技術だ。水素と酸素を結びつけて電気を作り、廃棄物は水だけ——煙も二酸化炭素も出さない。だが高価な問題がある。多くの燃料電池は、反応を働かせるために希少で高価な金属・白金（プラチナ）に頼る。いま科学者が、それをはるかに少なく使う方法を見つけた。なぜ白金が障害なのか。地球で最も希少な金属の一つで、高価で大量に得るのが難しい。全ての燃料電池が多くの白金を要すれば、技術は広く使うには高価すぎる。必要量を減らせれば、燃料電池が他の発電方法と競えるようになる。新手法は、微小スケールで特別に設計した炭素構造を使う。この巧妙な材料は、少量の白金でも反応を速く・効率的に・長期に安定して保つように支える。つまり、より少なくより多くを成す。なぜ今重要か。世界がクリーンエネルギーを求める中、燃料電池は車・建物・さらにはAIを動かす巨大なデータセンターに電力を供給しうる。より安く丈夫にすることが、その未来を近づける。課題は常に残る。実験室の成功は大規模で証明せねばならず、水素自体もクリーンかつ安く作らねばならない。それでも発見は励みになる。貴重な資源をより賢く使うことで、科学者は、エネルギーを渇望する世界のための実用的でクリーンな電力へ、また小さくも意味ある一歩を進める。",
        quiz: [
          { q: "水素燃料電池の廃棄物は？", options: ["水だけ", "煙", "二酸化炭素"], answer: 0 },
          { q: "白金が障害となる理由は？", options: ["希少で高価、大量に得るのが難しいから", "柔らかすぎるから", "電気を通さないから"], answer: 0 },
          { q: "新手法が使う工夫は？", options: ["微小スケールの特別な炭素構造で少量の白金を効率よく働かせる", "白金を増やす", "水を使わない"], answer: 0 }
        ]
      },
      {
        id: "d0808-3",
        title: "Why Countries Spread Their Bets",
        level: "★★★",
        genre: "世界情勢",
        text: "There is an old piece of advice: do not put all your eggs in one basket. Countries are learning to apply this wisdom to the vital materials they import. Recently, Japan announced that it would seek to buy crude oil and rare earth metals from a wider range of sources, rather than relying too heavily on just a few. The goal is a safer, more stable supply.\nWhy spread out suppliers? If a country buys a crucial material from only one place, it becomes vulnerable. A political dispute, a natural disaster, or a sudden price rise could cut off the supply, harming factories and daily life. By buying from many countries, a nation reduces the risk that any single problem will leave it short.\nRare earths are a good example. These metals are essential for magnets, motors, electronics, and clean-energy technology, yet they come mostly from a small number of places. Depending on one supplier for such important materials is risky, so countries are searching for new sources and even trying to recycle what they already have.\nDiversifying is not simple or cheap. Building new trade relationships takes time, and new suppliers may cost more or need new infrastructure. But many governments now see this as worthwhile insurance.\nThe wider lesson applies to businesses and individuals too. Relying on a single source of anything important — a supplier, a customer, or a skill — carries hidden risk. Spreading your bets may cost a little more today, but it can protect you against a much larger loss tomorrow.",
        summaryJa: "古い助言がある——卵を一つのかごに全部盛るな。各国は、この知恵を輸入する重要な材料に当てはめ始めている。最近、日本は、原油やレアアース（希土類金属）を、ごく少数に頼りすぎるのでなく、より広い供給元から買おうとすると表明した。狙いはより安全で安定した供給だ。なぜ供給元を分散するのか。ある国が重要な材料を一か所からしか買わなければ、脆くなる。政治的対立・自然災害・急な価格上昇が供給を断ち、工場や日常を害しうる。多くの国から買うことで、一つの問題で不足に陥るリスクを減らせる。レアアースは良い例だ。これらの金属は磁石・モーター・電子機器・クリーンエネルギー技術に不可欠だが、主に少数の場所から来る。そんな重要な材料を一つの供給元に頼るのは危ういので、各国は新たな供給源を探し、既にある物を再生しようとさえする。分散は単純でも安くもない。新たな貿易関係の構築には時間がかかり、新供給元は費用が高いか新しいインフラを要しうる。だが多くの政府は今、これを価値ある保険と見る。より広い教訓は企業や個人にも当てはまる。重要な何か——供給元・顧客・技能——を単一の源に頼ることは、隠れたリスクを伴う。賭けを分散することは今日は少し高くつくかもしれないが、明日のはるかに大きな損失から守りうる。",
        quiz: [
          { q: "日本が表明した方針は？", options: ["原油やレアアースをより広い供給元から買う", "輸入を全てやめる", "一か所だけから買う"], answer: 0 },
          { q: "供給元を分散する理由は？", options: ["一つの問題で不足に陥るリスクを減らすため", "費用を増やすため", "材料を捨てるため"], answer: 0 },
          { q: "本文の広い教訓は？", options: ["重要な何かを単一の源に頼るのは隠れたリスクがある", "分散は無意味である", "一つに頼るのが最善である"], answer: 0 }
        ]
      },
      {
        id: "d0808-4",
        title: "A Day of Lucky Eights",
        level: "★★☆",
        genre: "日本",
        text: "On August 8, 2026, many people in Japan celebrated a date they considered especially lucky. Written out, the day lined up three eights: the eighth day of the eighth month, in the eighth year of the current imperial era, Reiwa. Couples chose it for their weddings, shops offered special sales, and events marked the rare arrangement of numbers.\nWhy is eight seen as lucky? In Japan, the shape of the character for eight widens toward the bottom. This spreading form is linked to the idea of growing, expanding good fortune — prosperity that opens out and increases over time. Because of this, eight has long been considered a favorable number.\nBeliefs about lucky and unlucky numbers appear in many cultures. In some places, certain numbers are avoided in buildings or phone numbers, while others are welcomed for weddings or business openings. These ideas may not be based on science, but they carry real meaning for people, shaping choices about important days.\nDates like this one show how culture adds color to the calendar. A day that is, on the surface, just another summer date becomes a reason to celebrate, to marry, or to start something new — simply because of how its numbers line up.\nFor learners of Japanese culture, such customs are a friendly window into how a society thinks. Behind the sales and the weddings is a gentle, hopeful idea: that with the right timing and a bit of good fortune, life can keep growing, expanding, and getting better.",
        summaryJa: "2026年8月8日、日本の多くの人が、特に縁起が良いと考える日を祝った。書き出すと、その日は三つの八が並ぶ——現在の元号・令和8年の、8月8日。カップルは結婚式にこの日を選び、店は特別セールを行い、催しが珍しい数字の並びを祝った。なぜ八は縁起が良いとされるのか。日本では、八の字の形が下へ向かって広がる。この広がる形が、育ち広がる幸運——時とともに末広がりに増える繁栄——の考えに結びつく。このため八は長く好ましい数とされてきた。縁起の良い・悪い数への信念は多くの文化に現れる。ある場所では特定の数が建物や電話番号で避けられ、別の数は結婚式や開店で歓迎される。こうした考えは科学に基づかないかもしれないが、人々には本当の意味を持ち、大切な日の選択を形づくる。この日のような日付は、文化が暦に彩りを添える様子を示す。表面上はただの夏の一日が、数字の並び方だけで、祝い、結婚し、何かを始める理由になる。日本文化の学習者には、こうした習わしは社会の考え方をのぞく親しみやすい窓だ。セールや結婚式の背後には、穏やかで希望に満ちた考えがある——適切な時機と少しの幸運があれば、人生は育ち、広がり、良くなり続けられる、という。",
        quiz: [
          { q: "2026年8月8日が縁起が良いとされた理由は？", options: ["令和8年8月8日と三つの八が並ぶから", "国民の祝日だから", "満月だったから"], answer: 0 },
          { q: "なぜ八が好ましい数とされるのか？", options: ["字の形が下へ広がり末広がりの繁栄に結びつくから", "数が大きいから", "発音が短いから"], answer: 0 },
          { q: "本文が縁起の数について述べることは？", options: ["科学に基づかなくとも人々に本当の意味を持つ", "全て科学的に証明された事実である", "日本だけに存在する考えである"], answer: 0 }
        ]
      },
      {
        id: "d0808-5",
        title: "A Visitor from the Early Solar System",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "One day, a rock crashed through the roof of a house, startling the people inside. It turned out to be a meteorite — a piece of an asteroid that had traveled through space for billions of years before landing on Earth. When scientists examined it, they found something remarkable: traces of ancient salty water, organic compounds, and even amino acids, the building blocks of proteins.\nWhy is such a rock so valuable? Meteorites are like time capsules from the birth of the solar system. While Earth has changed enormously over billions of years, small asteroids have stayed almost the same. Studying a meteorite lets scientists look back to a time long before our planet formed its oceans and life.\nThe discovery of amino acids is especially exciting. Amino acids are essential to life as we know it. Finding them inside a space rock suggests that some of the ingredients for life may form in space and be delivered to planets by falling meteorites. This does not mean the rock carried life, only some of its chemical building blocks.\nScientists study such samples with great care, using powerful instruments to read their chemistry without contaminating them. Each meteorite adds a small clue to a very big question: how did life begin?\nThe fallen rock is a reminder that the universe is not far away and separate from us. Material from distant asteroids reaches Earth, carrying stories from the deep past — and perhaps hints about how, on at least one small planet, lifeless chemistry once became something alive.",
        summaryJa: "ある日、一つの岩が家の屋根を突き破り、中の人々を驚かせた。それは隕石だった——地球に落ちる前、何十億年も宇宙を旅した小惑星のかけらだ。科学者が調べると、驚くべきものを見つけた。古い塩水の痕跡、有機化合物、そしてタンパク質の構成要素であるアミノ酸までも。なぜそんな岩が価値あるのか。隕石は太陽系誕生時のタイムカプセルのようなものだ。地球は何十億年で大きく変わったが、小さな小惑星はほとんど変わらないままだった。隕石を研究することで、科学者は地球が海や生命を形づくるはるか前の時代を振り返れる。アミノ酸の発見は特に胸躍る。アミノ酸は私たちの知る生命に不可欠だ。宇宙の岩の中にそれを見つけたことは、生命の材料の一部が宇宙で形成され、落ちてくる隕石によって惑星に運ばれうることを示唆する。これは岩が生命を運んだという意味ではなく、その化学的な構成要素の一部だけだ。科学者はこうした試料を、汚染せずに化学を読み取る強力な機器を使い、細心の注意で研究する。各隕石が、非常に大きな問い——生命はどう始まったのか——に小さな手がかりを加える。落ちてきた岩は、宇宙が私たちから遠く隔たってはいないことを思い出させる。遠い小惑星の物質が地球に届き、深い過去の物語を運ぶ——そしておそらく、少なくとも一つの小さな惑星で、生命なき化学がかつてどう生きたものになったかのヒントも。",
        quiz: [
          { q: "隕石の中から見つかったものは？", options: ["古い塩水の痕跡・有機化合物・アミノ酸", "金と銀", "生きた動物"], answer: 0 },
          { q: "隕石が価値ある理由は？", options: ["太陽系誕生時のほぼ変わらないタイムカプセルだから", "高価な宝石だから", "最近作られたものだから"], answer: 0 },
          { q: "アミノ酸の発見が示唆することは？", options: ["生命の材料の一部が宇宙で形成され惑星に運ばれうる", "岩が生命そのものを運んだ", "生命は不要である"], answer: 0 }
        ]
      }
    ]
  },
    {
    date: "2026-08-07",
    passages: [
      {
        id: "d0807-1",
        title: "How a Nation Invests for Retirement",
        level: "★★★",
        genre: "ビジネス",
        text: "Most people know they should save for retirement, but few realize how their savings are put to work. In Japan, a giant public fund manages the pension savings of millions of workers, investing the money so it can grow over time. Recently, this fund reported one of its largest-ever quarterly gains — a reminder of how deeply ordinary savings are tied to the ups and downs of global markets.\nWhy invest pension money at all? If savings simply sat in a bank, they would barely grow, especially over the many decades between a young worker's first paycheck and retirement. By carefully investing in stocks, bonds, and other assets around the world, a fund aims to grow the money so it can support people when they stop working.\nSuch funds must balance risk and safety. Invest too cautiously, and the money may not grow enough. Invest too boldly, and a market crash could cause painful losses. To manage this, big funds spread their money across many countries and types of investment, so that a fall in one area can be balanced by gains in another.\nStrong results in one quarter are welcome, but managers focus on the long term. Markets rise and fall, and a single good or bad quarter matters less than steady growth over many years.\nThe lesson is quietly powerful. Behind a huge investment fund are millions of individual futures. How wisely that money is managed today helps decide how comfortably people will live decades from now.",
        summaryJa: "多くの人は老後に備えて貯蓄すべきだと知っているが、その貯蓄がどう働かされるかを知る人は少ない。日本では、巨大な公的基金が何百万もの労働者の年金貯蓄を運用し、時間をかけて増やせるよう投資している。最近、この基金は過去最大級の四半期利益を報告した——普通の貯蓄が世界市場の浮き沈みにいかに深く結びついているかを思い出させる。そもそもなぜ年金を投資するのか。貯蓄をただ銀行に置けば、特に若い労働者の初給料から退職までの数十年でほとんど増えない。世界中の株・債券・その他の資産に慎重に投資することで、基金は人々が働くのをやめたとき支えられるよう資金を増やそうとする。こうした基金はリスクと安全を釣り合わせねばならない。慎重すぎれば十分に増えず、大胆すぎれば市場暴落で痛い損失を招きうる。これを管理するため、大きな基金は資金を多くの国と種類の投資に分散し、一分野の下落を別の利益で相殺できるようにする。ある四半期の好成績は歓迎だが、運用者は長期に注目する。市場は上下し、一度の良し悪しは長年の着実な成長ほど重要ではない。教訓は静かに力強い。巨大な投資基金の背後には、何百万もの個人の未来がある。今日その資金がいかに賢く運用されるかが、数十年後に人々がどれだけ快適に暮らせるかを左右する。",
        quiz: [
          { q: "年金を投資する理由は？", options: ["銀行に置くだけでは数十年でほとんど増えないから", "投資は簡単だから", "貯蓄が禁止だから"], answer: 0 },
          { q: "大きな基金がリスクを管理する方法は？", options: ["資金を多くの国と種類に分散する", "一つの株に全額入れる", "現金で持つだけ"], answer: 0 },
          { q: "運用者が注目するのは？", options: ["長年の着実な成長", "一度の四半期だけ", "昨日の天気"], answer: 0 }
        ]
      },
      {
        id: "d0807-2",
        title: "Steel That Keeps Getting Better",
        level: "★★☆",
        genre: "テクノロジー",
        text: "Steel is one of the oldest and most important materials in the world. It is in our buildings, bridges, cars, and countless machines. It may seem old-fashioned, but steel is still improving, and a Japanese steelmaker recently opened a new production line, investing heavily to make more high-performance steel, especially for carmakers.\nWhy does better steel matter? Modern cars need steel that is both strong and light. Strength keeps passengers safe in a crash, while lighter weight helps a car use less fuel or, in an electric vehicle, travel farther on a charge. Making steel that is strong and light at the same time is surprisingly difficult, and small improvements can make a big difference.\nHow is steel improved? Engineers carefully adjust what goes into it and how it is heated and shaped. Tiny changes in the recipe or the process can produce metal with new qualities — harder, more flexible, or more resistant to rust. Advanced factories use precise controls and testing to make these special types reliably.\nThere are challenges. Building new production lines is very expensive, and steelmakers face strong competition and pressure to use less energy, since making steel produces a lot of carbon dioxide.\nStill, the story shows that even ancient materials can keep evolving. As cars, buildings, and machines demand more, steelmakers keep finding ways to make their metal stronger, lighter, and cleaner — proof that innovation is not only about new inventions, but also about improving the things we have relied on for centuries.",
        summaryJa: "鋼は世界で最も古く重要な材料の一つだ。建物・橋・車・無数の機械に使われる。古臭く見えるかもしれないが、鋼は今も進化しており、日本の鉄鋼メーカーが最近、新しい生産ラインを開き、特に自動車メーカー向けの高性能鋼を多く作るため多額を投じた。なぜより良い鋼が重要か。現代の車は、強く軽い鋼を必要とする。強さは衝突時に乗員を守り、軽さは車の燃費を良くし、電気自動車では一充電での走行距離を伸ばす。強さと軽さを同時に備える鋼を作るのは意外に難しく、小さな改良が大きな違いを生む。どう改良するのか。技術者は、何を入れ、どう加熱し成形するかを慎重に調整する。配合や工程の小さな変化が、より硬い・柔軟な・錆びにくいといった新しい性質の金属を生む。先端の工場は精密な制御と試験でこうした特殊鋼を安定して作る。課題もある。新しい生産ラインの建設は非常に高価で、鉄鋼メーカーは激しい競争と、鋼の製造が大量の二酸化炭素を出すため省エネの圧力に直面する。それでもこの話は、古代の材料でさえ進化し続けられることを示す。車・建物・機械がより多くを求める中、メーカーは金属をより強く・軽く・クリーンにする方法を見つけ続ける——革新は新発明だけでなく、何世紀も頼ってきた物を改良することでもある証だ。",
        quiz: [
          { q: "現代の車に必要な鋼の性質は？", options: ["強さと軽さの両立", "色の美しさ", "安さだけ"], answer: 0 },
          { q: "鋼を軽くする利点は？", options: ["燃費が良くなりEVの走行距離が伸びる", "重くなること", "錆びやすくなること"], answer: 0 },
          { q: "鉄鋼メーカーが直面する課題は？", options: ["高い建設費と省エネへの圧力", "材料が全く無いこと", "需要が全くないこと"], answer: 0 }
        ]
      },
      {
        id: "d0807-3",
        title: "The Global Effort Against the Flu",
        level: "★★★",
        genre: "世界情勢",
        text: "Every year, the flu spreads around the world, making millions of people sick. Fighting it is a truly global effort, requiring cooperation between many countries. Recently, health authorities prepared a new type of flu vaccine for the coming season — the latest step in a worldwide system that quietly protects public health year after year.\nWhy must the flu be fought globally? The virus is always changing, and it travels easily across borders with people. A new form appearing in one country can reach others within weeks. To stay ahead, scientists in many nations share samples and data, watching how the virus changes and predicting which forms will spread next.\nThis information guides vaccine makers. Each year, the vaccine is updated to match the strains expected to be most common. Getting this right is difficult, because the virus can change in unexpected ways. New technologies may help make vaccines faster and more accurately in the future.\nInternational organizations play a key role, coordinating this work and helping poorer countries get vaccines they might not afford alone. Fighting a global disease is fairer and more effective when nations act together rather than each on its own.\nThe flu may seem ordinary, but the system built to fight it is a quiet marvel of cooperation. Every year, without most people noticing, scientists, doctors, and officials around the world work together to prepare — a reminder that some of humanity's greatest challenges can only be met by many hands, across many borders, pulling in the same direction.",
        summaryJa: "毎年、インフルエンザは世界中に広がり、何百万もの人を病気にする。それと闘うのは真に世界的な取り組みで、多くの国の協力を要する。最近、保健当局は来たる季節に向けて新型のインフルワクチンを準備した——年々静かに公衆衛生を守る世界的な仕組みの最新の一歩だ。なぜ世界規模で闘わねばならないのか。ウイルスは常に変化し、人とともに容易に国境を越える。ある国で現れた新型は数週間で他国に届きうる。先手を打つため、多くの国の科学者が検体とデータを共有し、ウイルスの変化を見守り、次にどの型が広がるかを予測する。この情報がワクチン製造を導く。毎年、最も多いと予想される株に合わせてワクチンが更新される。ウイルスは予想外に変化しうるため、これを当てるのは難しい。新技術が将来、より速く正確なワクチン作りを助けるかもしれない。国際機関は重要な役割を果たし、この作業を調整し、単独では賄えないワクチンを貧しい国が得る助けをする。世界的な病と闘うのは、各国がばらばらより共に動く方が公平で効果的だ。インフルは平凡に見えるが、それと闘うために築かれた仕組みは協力の静かな驚異だ。毎年、多くの人が気づかぬうちに、世界中の科学者・医師・当局者が協力して備える——人類の最大級の課題のいくつかは、多くの国境を越えた多くの手が同じ方向へ引くことでしか越えられないことを思い出させる。",
        quiz: [
          { q: "インフルを世界規模で闘う必要がある理由は？", options: ["ウイルスが常に変化し国境を容易に越えるから", "インフルは無害だから", "一国だけの病だから"], answer: 0 },
          { q: "毎年ワクチンが更新される理由は？", options: ["最も多いと予想される株に合わせるため", "色を変えるため", "値段を上げるため"], answer: 0 },
          { q: "国際機関の役割は？", options: ["作業の調整と貧しい国のワクチン取得の支援", "ワクチンの禁止", "国境の封鎖"], answer: 0 }
        ]
      },
      {
        id: "d0807-4",
        title: "The Great Obon Homecoming",
        level: "★★☆",
        genre: "日本",
        text: "Once a year in summer, Japan experiences one of its largest travel rushes, as millions of people head to their hometowns for a holiday called Obon. During Obon, families gather to honor their ancestors, visit graves, and spend time together. For many who live and work in big cities, it is a rare chance to return home and reconnect with family and tradition.\nThe scale of the movement is remarkable. Trains, planes, highways, and stations fill with travelers carrying gifts and luggage. Bullet trains run at full capacity, and famous traffic jams stretch along expressways. Booking a ticket weeks in advance is often necessary, and prices rise with demand.\nThis year, the rush met an extra challenge: a powerful typhoon approaching from the south. Airlines canceled hundreds of flights, and railway and highway operators watched the weather closely, ready to stop services to keep people safe. Travelers had to check forecasts carefully and sometimes change their plans.\nDespite the crowds and the weather, Obon remains deeply important. It reflects a value found in many cultures — remembering those who came before us and keeping family bonds strong across the distances of modern life.\nThe Obon rush, then, is more than a transport story. It is a yearly reminder of how tradition and modern life meet: high-speed trains carrying an ancient custom, and millions of individual journeys, each one a small act of remembering where, and to whom, a person belongs.",
        summaryJa: "夏に年に一度、日本は最大級の移動ラッシュを迎える。何百万もの人が「お盆」という休みに故郷へ向かうのだ。お盆の間、家族は集まって先祖を敬い、墓参りをし、共に時を過ごす。大都市で暮らし働く多くの人にとって、故郷へ帰り家族と伝統に再びつながる貴重な機会だ。移動の規模は驚くほどだ。電車・飛行機・高速道路・駅が、土産や荷物を抱えた旅行者で埋まる。新幹線は満席で走り、高速道路には有名な渋滞が伸びる。数週間前の予約がしばしば必要で、需要とともに価格も上がる。今年、このラッシュはさらなる難題に直面した——南から接近する強い台風だ。航空会社は数百便を欠航し、鉄道や高速道路の事業者は天候を注視し、安全のため運行を止める用意をした。旅行者は予報を慎重に確認し、時に予定を変えねばならなかった。混雑と天候にもかかわらず、お盆は深く重要であり続ける。多くの文化に見られる価値——先に逝った人々を偲び、現代の暮らしの距離を越えて家族の絆を保つこと——を映している。だからお盆のラッシュは単なる交通の話ではない。伝統と現代の暮らしがどう出会うかの、年に一度の思い出しだ——古い習わしを運ぶ高速列車と、何百万もの個々の旅、その一つ一つが、人がどこに、誰に属するかを思い出す小さな営みなのだ。",
        quiz: [
          { q: "お盆に人々が故郷へ帰る目的は？", options: ["家族が集まり先祖を敬い墓参りをするため", "買い物のため", "仕事のため"], answer: 0 },
          { q: "今年のラッシュが直面した難題は？", options: ["南から接近する強い台風", "大雪", "地震だけ"], answer: 0 },
          { q: "本文がお盆に見出す価値は？", options: ["先人を偲び家族の絆を保つこと", "速く移動すること", "土産を買うこと"], answer: 0 }
        ]
      },
      {
        id: "d0807-5",
        title: "When Heat Travels in a Beam",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "We usually think of heat as something that spreads out slowly and in all directions, warming everything around it evenly. But scientists have shown something surprising: in a special crystal, at room temperature, heat can travel in focused, wave-like rays — moving in a particular direction, almost like a beam, instead of spreading randomly.\nWhy is this strange? In most materials, heat is carried by tiny vibrations that bounce around in a messy, disorganized way, like a crowd pushing in every direction. That is why a hot spot usually warms its whole surroundings. In this crystal, however, those vibrations can move together in an orderly wave, carrying heat along a chosen path.\nWhy does it matter? Controlling how heat moves is a huge challenge in technology. Computer chips, for example, can overheat when heat builds up in one place. If engineers could guide heat along a chosen route — steering it away from delicate parts, as one might steer light — they could design cooler, more efficient devices.\nThis discovery is still basic science, far from any product. Making it work in useful materials and everyday conditions will take much more research. But it changes how scientists think about heat itself.\nThe finding is a good reminder that even familiar things can hold surprises. Heat is one of the most common experiences in the world, yet by studying it closely, scientists found a hidden, orderly behavior — opening a door to new ways of managing one of technology's oldest and most stubborn problems.",
        summaryJa: "私たちは普通、熱をゆっくりと四方八方に広がり、周りを均等に温めるものと考える。だが科学者は驚くべきことを示した——ある特殊な結晶では、室温で、熱が焦点を絞った波のような光線として進みうるのだ。ランダムに広がる代わりに、まるでビームのように特定の方向へ動く。なぜ奇妙か。ほとんどの材料では、熱は微小な振動が乱雑に跳ね回って運ばれる——あらゆる方向へ押し合う群衆のように。だから熱い点は普通、周囲全体を温める。しかしこの結晶では、その振動が秩序ある波として一緒に動き、選ばれた経路に沿って熱を運べる。なぜ重要か。熱の動きを制御することは技術における大きな難題だ。例えばコンピューターチップは、一か所に熱がたまると過熱しうる。もし技術者が、光を導くように熱を選んだ経路に沿って導き、繊細な部品から遠ざけられれば、より涼しく効率的な装置を設計できる。この発見はまだ基礎科学で、製品にはほど遠い。有用な材料や日常の条件で働かせるには、はるかに多くの研究が要る。だが熱そのものについての科学者の考え方を変える。この発見は、見慣れたものでさえ驚きを秘めうることを思い出させる。熱は世界で最もありふれた経験の一つだが、丁寧に研究することで、科学者は隠れた秩序あるふるまいを見つけた——技術の最も古く手強い問題の一つを扱う新しい方法への扉を開いて。",
        quiz: [
          { q: "この結晶で熱が示した驚きのふるまいは？", options: ["焦点を絞った波として特定の方向へ進む", "完全に消えてしまう", "自然に冷たくなる"], answer: 0 },
          { q: "普通の材料で熱が広がる理由は？", options: ["微小な振動が乱雑に跳ね回るから", "光そのものだから", "水でできているから"], answer: 0 },
          { q: "この制御が役立ちうる場面は？", options: ["チップの熱を繊細な部品から遠ざける", "部屋を暗くする", "音を消す"], answer: 0 }
        ]
      }
    ]
  },
    {
    date: "2026-08-06",
    passages: [
      {
        id: "d0806-1",
        title: "Why Used Phones Are Booming",
        level: "★★☆",
        genre: "ビジネス",
        text: "New smartphones grab the headlines, but a quieter market is growing fast: used phones. In Japan, sales of secondhand smartphones have risen for seven years in a row, recently reaching record numbers. More and more people are choosing a pre-owned device instead of the latest expensive model — and this shift says a lot about how shoppers think today.\nWhy are used phones so popular? The most obvious reason is price. A gently used phone can cost far less than a new one, while still working well. As new models grow more expensive, many buyers decide that last year's phone is more than good enough for their needs.\nThere are other reasons too. Modern phones last longer than they used to, so a two- or three-year-old device still runs smoothly. Some buyers also like the idea of reusing a product instead of throwing it away, which reduces waste and is kinder to the environment.\nThe trend has created a real business. Shops and websites now specialize in checking, cleaning, and reselling used phones, offering warranties to reassure buyers. This turns what was once simply 'old' into a valuable product.\nThe wider lesson is about changing values. For years, newer always meant better. Now, many customers care about price, longer use, and sustainability. In markets from phones to cars to clothing, the growing appetite for secondhand goods shows that 'used' is losing its old stigma — and becoming, for many, a smart and responsible choice.",
        summaryJa: "新品スマホは見出しをさらうが、より静かな市場が急成長している——中古スマホだ。日本では中古スマホの販売が7年連続で伸び、近年は過去最高の台数に達した。最新の高価なモデルでなく中古端末を選ぶ人が増えており、この変化は今日の買い物客の考え方を多く物語る。なぜ中古が人気か。最も明白な理由は価格だ。丁寧に使われた端末は新品よりずっと安く、なお十分に動く。新モデルが高価になるほど、多くの買い手は昨年の機種が自分の用途には十分すぎると判断する。他の理由もある。現代のスマホは以前より長持ちし、2〜3年前の端末でも滑らかに動く。捨てる代わりに製品を再利用する発想を好む買い手もいる——無駄が減り環境に優しい。この流れは本物の商売を生んだ。店やサイトが中古スマホの点検・清掃・再販を専門にし、買い手を安心させる保証を付ける。かつて単に「古い」だった物を、価値ある製品に変える。より広い教訓は価値観の変化だ。長年、新しいほど良いとされた。今や多くの客が価格・長い使用・持続可能性を大切にする。スマホから車、衣類まで、中古品への高まる需要は、「中古」が古い負のイメージを失い、多くの人にとって賢く責任ある選択になりつつあることを示している。",
        quiz: [
          { q: "中古スマホが人気の最も明白な理由は？", options: ["価格が新品よりずっと安いこと", "色が豊富なこと", "電池が要らないこと"], answer: 0 },
          { q: "本文が挙げる他の理由に含まれるものは？", options: ["現代のスマホは長持ちし再利用は環境に優しい", "古いほど速いから", "中古は必ず壊れるから"], answer: 0 },
          { q: "本文の広い教訓は？", options: ["「中古」が負のイメージを失い賢い選択になりつつある", "新しいほど常に良い", "中古は価値がない"], answer: 0 }
        ]
      },
      {
        id: "d0806-2",
        title: "Computing with Light",
        level: "★★★",
        genre: "テクノロジー",
        text: "Almost all of today's computers work by moving electricity through tiny wires and switches. But electricity has limits: it produces heat and can only move so fast. Scientists have long dreamed of computing with light instead, and a new tiny chip brings that dream closer. The chip can generate, steer, and read light-based information all in one device.\nWhy use light? Light travels extremely fast and, unlike electricity, produces very little heat as it moves. A computer that carries information as light could, in theory, be faster and far more energy-efficient than today's machines. As data centers use more and more electricity, saving energy has become a serious goal.\nThe hard part has been putting everything on one small chip. In the past, creating light, guiding it, and measuring it often required separate, bulky equipment. Combining all three jobs in a single device is a major step toward practical light-based computers.\nThere is still a long road ahead. This kind of technology is complex and expensive to make, and it must prove itself reliable enough for everyday machines. It may first appear in specialized systems before ever reaching ordinary computers.\nStill, the direction is exciting. For decades, progress in computing has come mainly from making electronic parts smaller. Light offers a different path forward. If these chips can be built at scale, they could help power a future of faster, cooler, and more efficient computing — using the oldest and fastest messenger we know: light itself.",
        summaryJa: "今日のほぼ全てのコンピューターは、微小な配線とスイッチに電気を流して動く。だが電気には限界がある——熱を生み、速さにも上限がある。科学者は長く、代わりに光で計算する夢を抱いてきた。新しい小さなチップがその夢を近づける。このチップは、光による情報を生成・操作・読み取りする働きを、一つの装置に収める。なぜ光か。光は極めて速く進み、電気と違い動く際にほとんど熱を生まない。情報を光として運ぶコンピューターは、理論上、今日の機械より速く、はるかに省エネになりうる。データセンターがますます電力を使う中、省エネは重大な目標になった。難しかったのは全てを一つの小さなチップに載せることだ。かつては光を作り・導き・測るのに、しばしば別々でかさばる機器が要った。三つの仕事を一つの装置にまとめるのは、実用的な光コンピューターへの大きな一歩だ。前途はなお長い。この種の技術は複雑で製造が高価で、日常の機械に十分な信頼性を証明せねばならない。普通のコンピューターに届く前に、まず専用システムに現れるかもしれない。それでも方向は心躍る。数十年、計算の進歩は主に電子部品を小さくすることで来た。光は別の前進の道を示す。こうしたチップを大規模に作れれば、より速く・涼しく・効率的な計算の未来を支えうる——私たちが知る最古で最速の使者、光そのものを使って。",
        quiz: [
          { q: "光で計算する利点は？", options: ["速く進み熱をほとんど生まない", "色が美しいこと", "電気より重いこと"], answer: 0 },
          { q: "これまで難しかったことは？", options: ["光の生成・誘導・測定を一つのチップに載せること", "光を作ること自体", "電気を消すこと"], answer: 0 },
          { q: "省エネが重大な目標になった背景は？", options: ["データセンターがますます電力を使うから", "光が高価だから", "電気が無料だから"], answer: 0 }
        ]
      },
      {
        id: "d0806-3",
        title: "Sharing a Narrow Sea Lane",
        level: "★★★",
        genre: "世界情勢",
        text: "Some places on the map are small but hugely important. The Strait of Hormuz, a narrow stretch of sea between the Persian Gulf and the open ocean, is one of them. A large share of the world's oil passes through this slim channel by ship. Recently, two countries that share its waters agreed on the exact coordinates for a shipping corridor — a quiet but meaningful step toward keeping this vital route running smoothly.\nWhy does a narrow strait matter so much? Because it is a chokepoint: a place where a great deal of traffic must squeeze through a small space. If ships cannot pass safely, oil and goods may be delayed, and prices around the world can rise. Countries far from the region feel the effects at gas stations and in shops.\nAgreeing on a shipping corridor helps in several ways. Clear, shared lines on the map tell captains exactly where to sail, reducing confusion and the risk of accidents or disputes. It also signals that neighboring countries can cooperate on practical matters, even when broader relations are tense.\nSuch agreements are not always easy. Waters can be contested, and trust may be limited. Small technical deals, however, can build habits of working together that make bigger problems easier to manage.\nThe lesson reaches beyond one strait. In a connected world, the smooth flow of ships, energy, and goods depends on quiet cooperation — often over places most people never see, yet rely on every single day.",
        summaryJa: "地図上のある場所は、小さくとも極めて重要だ。ペルシャ湾と外洋を結ぶ狭い海峡、ホルムズ海峡はその一つ。世界の石油の大きな割合が、この細い水路を船で通る。最近、その海域を共有する二国が、船舶用航路の正確な座標に合意した——この重要な経路を円滑に保つための、静かだが意味ある一歩だ。なぜ狭い海峡がそれほど重要か。そこが「チョークポイント（隘路）」だからだ——大量の交通が小さな空間を通り抜けねばならない場所。船が安全に通れなければ、石油や物資が遅れ、世界中で価格が上がりうる。地域から遠い国々も、ガソリンスタンドや店でその影響を感じる。航路への合意は複数の点で役立つ。地図上の明確で共有された線が、船長にどこを進むべきか正確に伝え、混乱や事故・紛争のリスクを減らす。より広い関係が緊張していても、隣国が実務的な事柄で協力できることも示す。こうした合意は常に容易ではない。海域は争われることがあり、信頼は限られうる。だが小さな技術的取り決めは、共に働く習慣を築き、より大きな問題を扱いやすくする。教訓は一つの海峡を超える。つながった世界で、船・エネルギー・物資の円滑な流れは静かな協力に支えられる——多くの人が決して見ないが、毎日頼っている場所を巡って。",
        quiz: [
          { q: "ホルムズ海峡が重要な理由は？", options: ["世界の石油の大きな割合が船で通る隘路だから", "観光地だから", "魚が多いから"], answer: 0 },
          { q: "航路の座標に合意する利点は？", options: ["船長にどこを進むべきか伝え事故や紛争のリスクを減らす", "船を全て止めること", "海を広げること"], answer: 0 },
          { q: "本文の教訓は？", options: ["物資の円滑な流れは静かな協力に支えられる", "協力は不要だ", "狭い場所は重要でない"], answer: 0 }
        ]
      },
      {
        id: "d0806-4",
        title: "A Country That Attracts Global Investors",
        level: "★★☆",
        genre: "日本",
        text: "When a large fund from one country decides to invest billions of dollars in another, it is a sign of confidence. Recently, an investment fund from the Middle East was reported to be considering a huge investment — several billion dollars — in building AI data centers in Japan. Such news says something important: global investors increasingly see Japan as an attractive place to put their money.\nWhy Japan, and why now? For one, Japan is stable, with reliable laws, skilled workers, and strong technology. As demand for artificial intelligence grows, the world needs many new data centers — the large buildings full of computers that make AI possible. Japan offers a safe and capable place to build them.\nForeign investment can bring real benefits. It creates jobs, brings in new technology, and helps build infrastructure that local companies can also use. When outsiders invest, they are betting that a country's economy will grow, which can encourage others to invest too.\nThere are things to watch, however. Data centers use large amounts of electricity and water, so they must be planned carefully. And a country wants investment that helps its people over the long term, not just quick projects that leave little behind.\nStill, the interest is a hopeful sign. After years in which Japan was sometimes overlooked by global investors, big international money is looking its way again. For an economy working to grow, being seen as a smart place to invest is welcome news indeed.",
        summaryJa: "ある国の大きなファンドが別の国に数十億ドルを投じると決めるのは、信頼の証だ。最近、中東の投資ファンドが、日本でのAIデータセンター建設に数十億ドルという巨額の投資を検討していると報じられた。この知らせは重要なことを物語る——世界の投資家がますます日本を、資金を置く魅力的な場所と見ているのだ。なぜ日本で、なぜ今か。一つに、日本は安定し、信頼できる法・熟練した労働者・強い技術を持つ。AIの需要が高まる中、世界は多くの新しいデータセンター——AIを可能にするコンピューターで満ちた大きな建物——を必要とする。日本はそれを建てる安全で有能な場所を提供する。外国投資は現実の利益をもたらしうる。雇用を生み、新技術を持ち込み、地元企業も使えるインフラの構築を助ける。外部者が投資するのは、その国の経済が成長すると賭けることであり、他の投資家も促しうる。だが注意すべき点もある。データセンターは大量の電力と水を使うので、慎重な計画が要る。国は、後にほとんど残さない手早い事業でなく、長期的に人々の役に立つ投資を望む。それでもこの関心は希望ある兆しだ。日本が時に世界の投資家に見過ごされた年月の後、大きな国際資金が再び日本へ目を向けている。成長しようと努める経済にとって、賢い投資先と見られることは、まさに歓迎すべき知らせだ。",
        quiz: [
          { q: "中東のファンドが日本で検討している投資は？", options: ["AIデータセンターの建設", "農場の購入", "鉄道の運営"], answer: 0 },
          { q: "投資家が日本を選ぶ理由に含まれるものは？", options: ["安定した法・熟練労働者・強い技術", "税金がないこと", "土地が無料なこと"], answer: 0 },
          { q: "外国投資で注意すべき点は？", options: ["データセンターは電力と水を多く使い慎重な計画が要る", "雇用が減ること", "技術が失われること"], answer: 0 }
        ]
      },
      {
        id: "d0806-5",
        title: "A Spacecraft Slingshots Past Mars",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "Traveling through space takes an enormous amount of energy, so engineers use a clever trick to save fuel: they borrow a push from a planet's gravity. Recently, a NASA spacecraft on a long journey flew close to Mars, using the planet's pull to gain speed and adjust its path — a maneuver known as a 'gravity assist.'\nHow does it work? As the spacecraft passes a planet, the planet's gravity grabs it and flings it forward, like a stone swung on a string and then released. The spacecraft speeds up and changes direction without burning much fuel. The planet loses a tiny, unnoticeable amount of motion in exchange. It is a beautiful example of using nature's forces to travel farther for less.\nThis particular spacecraft is heading toward a distant, metal-rich asteroid, which it is due to reach several years from now. During the Mars flyby, the team also tested the craft's cameras and instruments, making sure everything works well before the main event.\nWhy explore a metal asteroid? Scientists believe it may be similar to the core of a planet like Earth — a place we can never dig down to see. Studying it could teach us how planets, including our own, were built long ago.\nThe flyby is a reminder of how patient and clever space travel can be. By using gravity as a free engine and testing carefully along the way, engineers guide small machines across vast distances — turning the whole solar system into a road toward discovery.",
        summaryJa: "宇宙を旅するには莫大なエネルギーが要るため、技術者は燃料を節約する巧妙な技を使う——惑星の重力から「一押し」を借りるのだ。最近、長い旅の途中のNASAの探査機が火星に接近し、その引力を使って速度を得て進路を調整した——「スイングバイ（重力アシスト）」と呼ばれる操作だ。仕組みは。探査機が惑星のそばを通ると、惑星の重力がそれを掴み前方へ放り出す——ひもで振って放つ石のように。探査機は燃料をあまり燃やさず加速し向きを変える。惑星は代わりにごくわずかで気づかない運動を失う。自然の力を使い、より少ない代償で遠くへ旅する美しい例だ。この探査機は、金属に富む遠い小惑星へ向かっており、数年後に到達予定だ。火星接近の間、チームは本番前に探査機のカメラや観測機器も試し、全てが正常に働くか確認した。なぜ金属の小惑星を探るのか。科学者は、それが地球のような惑星の核に似ているかもしれないと考える——私たちが決して掘り下げて見られない場所だ。それを研究すれば、地球を含む惑星が大昔にどう作られたかを学べる。この接近は、宇宙の旅がいかに忍耐強く巧妙でありうるかを思い出させる。重力を無料のエンジンとして使い、道中で慎重に試験することで、技術者は小さな機械を広大な距離の先へ導く——太陽系全体を、発見への道に変えて。",
        quiz: [
          { q: "「スイングバイ（重力アシスト）」とは？", options: ["惑星の重力を使って加速し進路を変えること", "惑星に着陸すること", "燃料を大量に燃やすこと"], answer: 0 },
          { q: "この探査機が向かっている先は？", options: ["金属に富む遠い小惑星", "太陽", "月"], answer: 0 },
          { q: "金属の小惑星を探る理由は？", options: ["惑星の核に似て惑星の成り立ちを学べるから", "金を採るため", "燃料を得るため"], answer: 0 }
        ]
      }
    ]
  },
    {
    date: "2026-08-05",
    passages: [
      {
        id: "d0805-1",
        title: "When Big Spending Worries Investors",
        level: "★★★",
        genre: "ビジネス",
        text: "It might seem strange, but a company can report fast growth and still see its share price fall. This happened recently to several technology firms whose profits or forecasts disappointed investors, even as their businesses expanded. The reason lies in how markets judge a company: not just by what it earns today, but by what people expect it to earn tomorrow.\nMuch of the worry centers on spending. To compete in artificial intelligence, companies are pouring enormous sums into chips, data centers, and electricity. Investors like ambition, but they also ask a hard question: will all this spending eventually produce enough profit to justify it? When the answer is unclear, share prices can drop, even for companies that are growing.\nExpectations matter enormously. If investors expect a company to grow 50 percent and it grows 40 percent, the stock may fall — not because 40 percent is bad, but because it is less than hoped. In the stock market, missing high expectations can hurt as much as poor results.\nThis creates pressure on company leaders. They must invest boldly to stay ahead, yet show that the spending will pay off. Promising too little looks weak; promising too much and falling short disappoints the market.\nFor learners of business English, the lesson is subtle but important. A stock price is not a simple report card of the past. It is a bet on the future — and in the age of expensive AI, investors are watching costs as closely as they watch growth.",
        summaryJa: "奇妙に思えるかもしれないが、企業は急成長を報告しながら株価が下がることがある。最近、事業を拡大しながらも利益や見通しが投資家を失望させた複数の技術企業に起きた。理由は市場が企業を判断する仕方にある——今日の稼ぎだけでなく、明日いくら稼ぐと人々が期待するかによって判断するのだ。懸念の多くは支出に集まる。AIで競うため、企業はチップ・データセンター・電力に莫大な資金を注ぐ。投資家は野心を好むが、厳しい問いも投げる——この支出はいずれ、それを正当化するだけの利益を生むのか。答えが不明だと、成長中の企業でも株価は下がりうる。期待は極めて重要だ。投資家が50％成長を期待し40％成長なら、株は下がりうる——40％が悪いからでなく、望みより少ないからだ。株式市場では、高い期待に届かないことは、悪い結果と同じくらい痛手になりうる。これは経営者に圧力をかける。先頭を保つため大胆に投資しつつ、その支出が実を結ぶと示さねばならない。約束が小さすぎれば弱く見え、大きすぎて届かなければ市場を失望させる。ビジネス英語の学習者への教訓は微妙だが重要だ。株価は過去の単純な成績表ではない。未来への賭けであり——高価なAIの時代に、投資家は成長と同じくらい費用を注視している。",
        quiz: [
          { q: "急成長でも株価が下がりうる理由は？", options: ["投資家は将来の期待で判断し、期待に届かないと下がるから", "成長は常に悪いことだから", "会社が必ず消えるから"], answer: 0 },
          { q: "投資家がAI支出に投げる厳しい問いは？", options: ["支出は正当化できるだけの利益を生むのか", "なぜ社員がいるのか", "なぜ電気を使うのか"], answer: 0 },
          { q: "本文が言う株価とは？", options: ["未来への賭け", "過去の単純な成績表", "会社の年齢の記録"], answer: 0 }
        ]
      },
      {
        id: "d0805-2",
        title: "A Robot Hand with a Human Touch",
        level: "★★☆",
        genre: "テクノロジー",
        text: "The human hand is a marvel of engineering. It can grip a hammer, turn a key, and gently pick up an egg without breaking it. For robots, copying this skill has been surprisingly hard. Now a Japanese company has developed a robotic hand able to make highly dexterous movements, bringing machines a step closer to the delicate touch of a person.\nWhy is a good hand so difficult to build? Human hands combine strength with fine control and a rich sense of touch. We adjust our grip without thinking, using tiny signals from our skin to hold objects firmly but gently. A robot must sense pressure, control many small joints at once, and react instantly — all while avoiding crushing or dropping what it holds.\nA truly skillful robotic hand could be useful in many places. In factories, it could assemble small, delicate parts. In warehouses, it could sort objects of different shapes. One day, such hands might help in hospitals or homes, assisting people with everyday tasks that require a careful touch.\nChallenges remain. Dexterous hands are complex and expensive, and they must be safe around people. Teaching a machine to handle the endless variety of real objects is slow, careful work.\nStill, progress in this field is important. As artificial intelligence gives machines better 'brains,' skillful hands give them a way to act in the physical world. Together, they move us toward robots that can not only think, but also do — working carefully alongside us.",
        summaryJa: "人間の手は工学の驚異だ。ハンマーを握り、鍵を回し、卵を割らずにそっと持ち上げられる。ロボットにとって、この技を真似るのは意外にも難しかった。いま日本の企業が、非常に器用な動きができるロボットハンドを開発し、機械を人の繊細な感触に一歩近づけた。なぜ良い手を作るのが難しいのか。人の手は力と精緻な制御、そして豊かな触覚を兼ね備える。私たちは肌からの小さな信号を使い、物をしっかりだが優しく持つよう、考えずに握りを調整する。ロボットは圧力を感じ、多くの小さな関節を同時に制御し、瞬時に反応せねばならない——しかも持つ物を潰したり落としたりせずに。本当に器用なロボットハンドは多くの場所で役立ちうる。工場では小さく繊細な部品を組み立て、倉庫では形の異なる物を仕分けられる。いつか病院や家庭で、丁寧な感触を要する日常の作業を助けるかもしれない。課題も残る。器用な手は複雑で高価で、人の周りで安全でなければならない。現実の物の無限の多様性を扱うよう機械に教えるのは、遅く慎重な仕事だ。それでもこの分野の進歩は重要だ。AIが機械により良い「頭脳」を与える中、器用な手は物理世界で行動する手段を与える。両者が相まって、考えるだけでなく「行う」ロボット——私たちの傍らで丁寧に働く機械へと近づけていく。",
        quiz: [
          { q: "ロボットにとって手の技を真似るのが難しい理由は？", options: ["力・精緻な制御・触覚を同時に必要とするから", "手が大きすぎるから", "電気が要らないから"], answer: 0 },
          { q: "器用なロボットハンドの用途に含まれるものは？", options: ["繊細な部品の組立や物の仕分け", "空を飛ぶこと", "料理の味付けだけ"], answer: 0 },
          { q: "AIと器用な手の関係は？", options: ["頭脳と行動する手段が相まって役立つ", "互いに全く無関係", "手が頭脳を不要にする"], answer: 0 }
        ]
      },
      {
        id: "d0805-3",
        title: "Europe Tells AI to Introduce Itself",
        level: "★★★",
        genre: "世界情勢",
        text: "Imagine chatting online with what you think is a person, only to learn later that it was a computer program. To prevent this kind of confusion, Europe has begun switching on new, continent-wide rules that require artificial intelligence systems to identify themselves to the humans they talk to. In short, an AI must now make clear that it is an AI.\nWhy make such a rule? As AI becomes better at writing and speaking like a person, it grows harder to tell machine from human. That can be used to trick people — for example, to spread false information or to pretend to be a real customer-service worker. Requiring AI to reveal itself helps people know who, or what, they are really dealing with.\nMaking rules for an entire continent is not easy. Europe is made up of many countries, each with its own laws and views. Agreeing on shared rules takes years of discussion and compromise. Yet acting together gives these rules real weight: companies that want to reach millions of European customers must follow them.\nNot everyone agrees on the details. Some worry the rules may slow down useful technology or be hard to enforce. Others say they do not go far enough. Balancing safety and innovation is a genuine challenge.\nStill, the move is significant. It shows how governments are trying to guide a fast-moving technology rather than simply react to it — setting basic expectations, such as honesty, before problems grow too large to manage.",
        summaryJa: "人だと思ってオンラインでやり取りしていた相手が、実はコンピュータープログラムだったと後で知る——そんな場面を想像してほしい。この種の混乱を防ぐため、欧州はAIが対話する人間に対し自らの正体を明かすよう求める、大陸全体の新しい規則を施行し始めた。要するに、AIは今や自分がAIだと明確にせねばならない。なぜそんな規則を。AIが人のように書き話すのが上手くなるほど、機械と人の区別は難しくなる。それは人をだますのに使われうる——例えば偽情報を広めたり、本物の顧客対応係のふりをしたり。AIに正体を明かさせることは、人が本当に誰・何を相手にしているかを知る助けになる。大陸全体の規則作りは簡単ではない。欧州は多くの国から成り、各国が独自の法や見解を持つ。共有の規則への合意には何年もの議論と妥協が要る。だが共に動けば規則は実質的な重みを持つ——数百万の欧州の顧客に届きたい企業は従わねばならない。細部で全員が一致するわけではない。有用な技術を遅らせる、あるいは執行が難しいと懸念する声、逆に不十分だという声もある。安全と革新の両立は本物の難題だ。それでもこの動きは重要だ。政府が急速に動く技術に、ただ反応するのでなく導こうとしていること——問題が手に負えなくなる前に、誠実さのような基本的な期待を定めることを示している。",
        quiz: [
          { q: "欧州の新しい規則がAIに求めることは？", options: ["対話する人間に自らがAIだと明かすこと", "人間のふりをすること", "無料になること"], answer: 0 },
          { q: "なぜこの規則が必要とされるのか？", options: ["AIが人をだますのに使われうるから", "AIが遅いから", "AIが高価だから"], answer: 0 },
          { q: "大陸全体で規則を作る難しさは？", options: ["多くの国の合意に議論と妥協が要る", "国が一つしかないこと", "規則が軽くなること"], answer: 0 }
        ]
      },
      {
        id: "d0805-4",
        title: "Japan's Rising Wages",
        level: "★★☆",
        genre: "日本",
        text: "For many years, wages in Japan barely moved. Prices were stable, and so were paychecks, and workers grew used to salaries that stayed nearly the same. That pattern is now changing. Major Japanese companies have agreed to raise monthly wages by more than five percent for the third year in a row — a notable shift for the country.\nWhy are wages rising now? Several forces are at work. Prices have been climbing, so workers need higher pay just to keep up with the cost of living. At the same time, Japan's shrinking population means fewer young workers, so companies must offer better pay to attract and keep staff. Strong company profits and pressure from the government to share them have also helped.\nWhy does this matter? Wages affect almost everything. When people earn more, they can spend more, which supports shops and businesses. Higher pay can also lift confidence, encouraging workers to make plans and companies to invest. Economists hope that rising wages and prices together can pull Japan out of decades of slow growth.\nThere are risks and questions. If prices rise faster than wages, workers may still feel poorer. Smaller companies may struggle to match the big raises, and the trend must continue for years to truly change habits.\nStill, the change is meaningful. After a long period of standing still, paychecks in Japan are moving again — a small but hopeful sign that the country's economy may be entering a new and more dynamic chapter.",
        summaryJa: "長年、日本の賃金はほとんど動かなかった。物価が安定し、給与も同様で、労働者はほぼ変わらない賃金に慣れていた。その様相が今、変わりつつある。日本の大企業が3年連続で月給を5％超引き上げることに合意した——この国にとって注目すべき転換だ。なぜ今賃金が上がるのか。いくつかの力が働く。物価が上がり続け、労働者は生活費に追いつくだけでも高い賃金が要る。同時に、人口減少で若い働き手が減り、企業は人材の獲得・定着のためより良い賃金を出さねばならない。企業の好業績と、それを分配せよという政府の圧力も後押しした。なぜ重要か。賃金はほぼ全てに影響する。人々の稼ぎが増えれば支出も増え、店や事業を支える。高い賃金は自信も高め、労働者に計画を、企業に投資を促す。経済学者は、賃金と物価がともに上がることで日本を数十年の低成長から引き出せると期待する。リスクや問いもある。物価が賃金より速く上がれば、労働者はなお貧しく感じうる。大幅な賃上げに追随しにくい中小企業もあり、習慣を本当に変えるには何年も続く必要がある。それでも変化には意味がある。長く止まっていた後、日本の給与は再び動き出した——経済がより力強い新章に入りつつあるかもしれない、小さくも希望のある兆しだ。",
        quiz: [
          { q: "日本の賃金が上がっている理由の一つは？", options: ["物価上昇と人口減少による人手確保の必要", "物価が下がったから", "若者が増えすぎたから"], answer: 0 },
          { q: "賃金上昇が経済に良い理由は？", options: ["人々の支出が増え店や事業を支えるから", "支出が減るから", "企業が倒産するから"], answer: 0 },
          { q: "本文が挙げるリスクは？", options: ["物価が賃金より速く上がると貧しく感じうる", "賃金が高すぎて困ること", "変化が速すぎること"], answer: 0 }
        ]
      },
      {
        id: "d0805-5",
        title: "Seeing Deep Beneath the Ground",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "We cannot dig very far into the Earth, yet scientists have just mapped an enormous body of hot, partly melted rock — called magma — lying deep beneath a region of Italy. The reservoir is huge, and understanding it could help experts learn more about the ground we live on. But how do you 'see' something buried kilometers below the surface?\nThe answer is clever: scientists listen to the Earth's own vibrations. The ground is always trembling very slightly, shaken by distant earthquakes, ocean waves, and even human activity. As these waves travel through the planet, they change speed and direction depending on the rock they pass through. Hot, soft magma affects them differently than cold, solid rock.\nBy placing many sensitive instruments across the surface and recording these tiny vibrations, researchers can work backward to picture what lies below — much as a doctor uses sound waves to see inside the body. Powerful computers turn the signals into a three-dimensional map of the hidden reservoir.\nWhy does this matter? Knowing where magma sits, and how much there is, helps scientists understand volcanoes and the slow forces that shape the land. It does not mean an eruption is coming; rather, it is a step toward reading the Earth's deep structure more clearly.\nThe achievement is a reminder of how science extends our senses. With patience and clever tools, we can explore places no one can ever visit — turning the planet's faint whispers into detailed maps of a world hidden beneath our feet.",
        summaryJa: "私たちは地球を深くは掘れないが、科学者はこのほど、イタリアのある地域の地下深くにある巨大な熱く一部溶けた岩——マグマ——の塊を地図化した。その溜まりは巨大で、理解が進めば私たちの暮らす大地についてより多くを学べる。だが地表の何キロも下に埋もれた物を、どう「見る」のか。答えは巧妙だ——科学者は地球自身の振動に耳を澄ます。大地は常にごくわずかに震えている。遠い地震・海の波・人間の活動にさえ揺らされて。これらの波が地球を進むとき、通る岩によって速さと向きを変える。熱く柔らかいマグマは、冷たく固い岩とは異なる影響を与える。多くの高感度の機器を地表に並べ、この小さな振動を記録することで、研究者は下に何があるかを逆算して描ける——医師が音波で体内を見るように。強力なコンピューターが信号を、隠れた溜まりの三次元地図に変える。なぜ重要か。マグマがどこにどれだけあるかを知ることは、火山や大地を形づくる緩やかな力の理解を助ける。噴火が来るという意味ではない。むしろ地球の深部構造をより明瞭に読む一歩だ。この成果は、科学が私たちの感覚を拡張することを思い出させる。忍耐と巧妙な道具で、誰も決して訪れられない場所を探れる——地球のかすかなささやきを、足下に隠れた世界の詳細な地図に変えて。",
        quiz: [
          { q: "科学者が地下のマグマを「見る」ために使うものは？", options: ["地球の微小な振動（地震波など）", "巨大なドリル", "強い光"], answer: 0 },
          { q: "熱く柔らかいマグマが波に与える影響は？", options: ["冷たく固い岩とは異なる", "全く影響しない", "波を消してしまう"], answer: 0 },
          { q: "この地図化が意味することは？", options: ["地球の深部構造をより明瞭に読む一歩", "噴火が確実に来ること", "地球が空洞であること"], answer: 0 }
        ]
      }
    ]
  }
  ] };
