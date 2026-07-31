/* デイリー配信リーディング
 * 毎朝の自動ルーチンがこのファイルを丸ごと上書き生成する（直近 7 日分を保持）。
 * days は日付降順。各 day = { date: "YYYY-MM-DD", passages: [readingPassages と同スキーマ + genre] }
 * このファイル以外は手書きデータであり、ルーチンは触らない。
 */
window.KE_DATA = window.KE_DATA || {};

KE_DATA.dailyReading = { days: [
    {
    date: "2026-07-31",
    passages: [
      {
        id: "d0731-1",
        title: "Why Governments Support Their Money",
        level: "★★★",
        genre: "ビジネス",
        text: "The value of a country's money can rise and fall quickly against other currencies, and sometimes governments step in to influence it. Recently, Japan's financial authorities are believed to have acted to strengthen the yen after it moved sharply against the U.S. dollar. This kind of action is called currency intervention.\nHow does it work? A country's central bank or treasury can buy or sell large amounts of its own currency. To make the yen stronger, for example, authorities buy yen using their reserves of foreign money. Buying increases demand, which tends to push the value up. To weaken it, they would do the opposite.\nWhy bother? The exchange rate affects the whole economy. A very weak currency makes imported goods, such as food and energy, more expensive, which can hurt households. A very strong currency can make a country's exports harder to sell abroad. Governments often want to avoid sudden, extreme swings that make it hard for businesses to plan.\nIntervention has limits. Global currency markets are enormous, trading trillions of dollars every day, so even a large government cannot control prices for long. Sometimes just the threat of action is enough to calm the market.\nFor learners of business English, the lesson is useful: money itself is a market, shaped by supply, demand, and expectations. When a government acts, it is not setting a price by force, but trying to steer a huge and restless system.",
        summaryJa: "国の通貨の価値は他通貨に対して急に上下し、政府が介入して動かすこともある。最近、日本の当局は円がドルに対し急変した後、円を強めるために動いたとみられる。これを為替介入という。仕組みは、中央銀行や財務当局が自国通貨を大量に売買すること。円を強めるには外貨準備で円を買い、需要が増えて価値が上がりやすくなる。弱めるには逆を行う。なぜか——為替レートは経済全体に影響する。極端に弱い通貨は食料やエネルギーなど輸入品を高くし家計を圧迫し、極端に強い通貨は輸出を売りにくくする。政府は企業が計画しにくい急激な変動を避けたい。ただし世界の為替市場は日々何兆ドルも取引される巨大なもので、大きな政府でも長くは価格を支配できず、介入をほのめかすだけで市場が落ち着くこともある。ビジネス英語の学習者への教訓——お金自体が需要・供給・期待で形づくられる市場であり、政府の介入は力で価格を決めるのでなく、巨大で落ち着かない仕組みを操ろうとする試みなのだ。",
        quiz: [
          { q: "為替介入とは何か？", options: ["政府や中央銀行が自国通貨を売買して価値に影響を与えること", "通貨を印刷して配ること", "銀行を閉じること"], answer: 0 },
          { q: "円を強めるために当局が行うことは？", options: ["外貨で円を買い需要を増やす", "円を大量に売る", "何もしない"], answer: 0 },
          { q: "介入の限界として本文が挙げるのは？", options: ["市場が巨大で長くは価格を支配できない", "政府は無限に介入できる", "市場は小さい"], answer: 0 }
        ]
      },
      {
        id: "d0731-2",
        title: "Building a Stronger Cyber Defense",
        level: "★★☆",
        genre: "テクノロジー",
        text: "As more of daily life moves online, protecting computer systems from attack has become a national priority. Governments now treat 'cyber defense' — the work of stopping hackers and other digital threats — as seriously as they treat protecting land, sea, and air. Recently, Japan announced a new policy focused on detecting threats early, with the goal of building one of the world's strongest cyber defenses.\nWhy is early detection so important? Many cyberattacks succeed because they go unnoticed for a long time. Intruders may quietly enter a system, watch, and steal information for weeks or months before anyone realizes. The sooner a threat is found, the less damage it can do. Modern defense therefore relies on constant monitoring, quick warnings, and fast response.\nSeveral tools help with this. Software can watch network traffic and flag unusual activity. Teams of experts study new kinds of attacks and share what they learn. Increasingly, artificial intelligence is used to spot patterns that humans might miss, sorting through huge amounts of data in seconds.\nThere are challenges. Attackers also improve their methods, and monitoring must respect people's privacy. Skilled defenders are in short supply, so training and cooperation between countries matter.\nThe larger point is that security is no longer only about physical walls and borders. In a connected world, a nation's safety depends partly on invisible defenses — the systems and people quietly working to keep networks, hospitals, and power grids running.",
        summaryJa: "生活の多くがオンラインに移るにつれ、コンピューターシステムを攻撃から守ることが国家的優先課題になった。政府は今や「サイバー防衛」——ハッカーなどのデジタル脅威を止める仕事——を陸海空の防衛と同じく重視する。日本は最近、脅威の早期検知に重点を置き、世界有数のサイバー防衛を築くという方針を発表した。なぜ早期検知が重要か——多くの攻撃は長く気づかれず成功する。侵入者は静かに入り込み、数週間から数か月も監視や情報窃取を続けることがある。早く見つけるほど被害は小さい。だから現代の防衛は常時監視・迅速な警報・速い対応に頼る。ネットワークの通信を監視して異常を示すソフト、新種の攻撃を研究し知見を共有する専門家チーム、人が見逃す模様を膨大なデータから数秒で見つけるAIが役立つ。課題もある——攻撃側も手口を高度化し、監視は人々のプライバシーを尊重せねばならず、熟練の防御者は不足しており訓練や国際協力が重要だ。要点は、安全がもはや物理的な壁や国境だけの話ではないこと。つながった世界では、国の安全は目に見えない防衛にも支えられている。",
        quiz: [
          { q: "日本の新方針が重点を置くのは？", options: ["脅威の早期検知", "攻撃をやめること", "インターネットの禁止"], answer: 0 },
          { q: "早期検知が重要な理由は？", options: ["攻撃は長く気づかれず被害を広げるから", "攻撃は無害だから", "監視は不要だから"], answer: 0 },
          { q: "本文が挙げる課題に含まれるものは？", options: ["熟練の防御者の不足とプライバシーの尊重", "防御者が多すぎること", "攻撃者がいないこと"], answer: 0 }
        ]
      },
      {
        id: "d0731-3",
        title: "Cities Learn to Beat the Heat",
        level: "★★☆",
        genre: "世界情勢",
        text: "Summers are getting hotter in many parts of the world, and cities are feeling the heat most of all. Streets, buildings, and concrete absorb sunlight during the day and release it at night, making urban areas warmer than the countryside around them. To protect residents, cities are now trying creative ways to cool down.\nIn one German city, officials recently tested a system that sprays a fine mist of chilled groundwater into the air, using equipment connected to fire hoses. The tiny droplets cool the surrounding air as they evaporate, offering relief on the hottest days. Other cities are experimenting with their own solutions.\nMany of these ideas are surprisingly simple. Planting more trees creates shade and naturally cools the air. Painting roofs white helps reflect sunlight instead of absorbing it. Adding parks, fountains, and water features gives people cool places to gather. Some cities open special 'cooling centers' where anyone can escape the heat indoors.\nWhy does this matter so much? Extreme heat is dangerous, especially for older people, young children, and those who work outdoors. During severe heat waves, the number of people who become ill can rise sharply. Keeping cities cooler is therefore a matter of health and safety, not just comfort.\nThe trend reflects a broader shift. As hot summers become more common, cities around the world are learning to adapt — redesigning streets and buildings so that millions of people can live more safely through the warmest months of the year.",
        summaryJa: "世界の多くの地域で夏はより暑くなり、都市が最も影響を受けている。道路・建物・コンクリートが日中に日光を吸収し夜に放出するため、都市は周囲の田園より暑くなる。住民を守るため、都市は今や創意工夫で涼を得ようとしている。ドイツのある都市は最近、消防ホースに接続した装置で冷たい地下水の細かい霧を空気中に噴霧する仕組みを試した。微小な水滴が蒸発しながら周囲の空気を冷やし、最も暑い日に涼をもたらす。他の都市も独自の解決策を試している。多くは驚くほど単純だ——木を増やせば日陰ができ自然に空気が冷える。屋根を白く塗れば日光を吸収せず反射する。公園・噴水・水辺は涼しい集いの場になる。屋内で暑さを避けられる「クーリングセンター」を開く都市もある。なぜ重要か——極端な暑さは、特に高齢者・幼児・屋外労働者に危険で、猛暑では体調を崩す人が急増しうる。都市を涼しく保つことは快適さだけでなく健康と安全の問題だ。暑い夏が当たり前になる中、世界の都市は街や建物を作り替え、多くの人が最も暑い時期を安全に暮らせるよう適応を学んでいる。",
        quiz: [
          { q: "都市が周囲より暑くなる理由は？", options: ["建物やコンクリートが日光を吸収し放出するから", "田園が近いから", "木が多いから"], answer: 0 },
          { q: "本文が挙げる冷却の工夫に含まれないものは？", options: ["屋根を黒く塗る", "木を植えて日陰を作る", "冷たい水の霧を噴霧する"], answer: 0 },
          { q: "都市を涼しく保つことが重要なのはなぜか？", options: ["極端な暑さは高齢者などに危険だから", "暑さは無害だから", "快適さだけの問題だから"], answer: 0 }
        ]
      },
      {
        id: "d0731-4",
        title: "Japan's Shrinking Population",
        level: "★★★",
        genre: "日本",
        text: "Japan has reached a milestone that worries many experts: its population has fallen below 120 million for the first time in over forty years. The number of people living in the country has been declining for years, and the pace is expected to continue. Behind this simple figure lies one of the biggest challenges Japan faces.\nTwo forces drive the change. First, people are having fewer children, so fewer young people are being born each year. Second, Japan has one of the longest life expectancies in the world, which means a large and growing share of the population is elderly. Together, these trends create a society with many older people and relatively few young workers.\nWhy does this matter? A smaller working-age population must support a larger number of retirees through taxes and care. Businesses may struggle to find enough workers, and some rural towns are shrinking so fast that schools and shops close. Government budgets for pensions and health care come under strain.\nJapan is responding in many ways. Some companies raise wages or use robots and automation to make up for fewer workers. The government encourages family-friendly policies and looks at ways to welcome more workers from abroad. Older people are staying in jobs longer than before.\nThere are no easy answers, and other countries are watching closely, because many face similar trends. How Japan adapts to a smaller, older population may offer lessons for much of the world in the decades ahead.",
        summaryJa: "日本は多くの専門家が憂慮する節目を迎えた——人口が40年余りで初めて1億2千万人を割った。居住人口は長年減り続け、この流れは今後も続くと見られる。この単純な数字の背後に、日本が直面する最大級の課題がある。変化を生む力は二つ。第一に子どもの数が減り、毎年生まれる若者が少ないこと。第二に日本は世界有数の長寿国で、高齢者の割合が大きく増えていること。両者が相まって、高齢者が多く若い働き手が比較的少ない社会になる。なぜ問題か——少ない現役世代が税や介護で多くの引退者を支えねばならない。企業は人手確保に苦しみ、学校や店が閉じるほど急速に縮む地方の町もある。年金や医療の予算は逼迫する。日本は多様に対応している——賃上げやロボット・自動化で人手不足を補う企業、子育て支援策や海外からの受け入れを探る政府、以前より長く働き続ける高齢者。簡単な答えはなく、同様の傾向に直面する各国が注視している。より小さく高齢化した人口に日本がどう適応するかは、今後数十年の世界の多くに教訓を与えるかもしれない。",
        quiz: [
          { q: "日本の人口減少を生む二つの力は？", options: ["出生数の減少と高齢者割合の増加", "移民の急増と出生増", "戦争と災害"], answer: 0 },
          { q: "人口減少が問題となる理由は？", options: ["少ない現役世代が多くの引退者を支える必要がある", "働き手が多すぎる", "高齢者がいない"], answer: 0 },
          { q: "日本の対応に含まれるものは？", options: ["賃上げや自動化、海外からの受け入れの検討", "何もしない", "若者の追放"], answer: 0 }
        ]
      },
      {
        id: "d0731-5",
        title: "Making Factories Ready for Earthquakes",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "When a powerful earthquake struck southern Japan this week, it raised an important question for industry: how can factories that make delicate products keep working in a land that shakes? Nowhere is this more pressing than in the region's growing hub for making computer chips, where even tiny vibrations can ruin a product.\nChip factories are extraordinarily sensitive. The circuits they build are thinner than a human hair, so machines must sit almost perfectly still. A strong quake can crack equipment, spill chemicals, and halt production for weeks — a serious problem when the whole world depends on a steady supply of chips.\nEngineers have developed clever defenses. Buildings rest on special bearings and dampers that let the ground move while the structure above stays steadier. Sensitive machines sit on platforms designed to absorb shaking. Early-warning systems can pause delicate processes automatically in the seconds before strong tremors arrive.\nPreparation also means planning for what comes after. Factories store extra materials, keep backup power ready, and practice how to restart safely once a quake has passed. Companies increasingly spread production across several sites, so that damage in one place does not stop everything.\nThe wider lesson reaches beyond Japan. As advanced manufacturing spreads to more regions, and as natural hazards remain a fact of life, building factories that can survive disasters is becoming part of good engineering. Making resilience part of the design — not an afterthought — helps keep both workers and the products they build safe.",
        summaryJa: "今週、南日本を強い地震が襲い、産業に重要な問いを突きつけた——揺れる土地で、繊細な製品を作る工場はどう稼働を保てるのか。地域で成長するコンピューターチップ製造の拠点ほど、この問いが切実な場所はない。わずかな振動でも製品を台無しにするからだ。チップ工場は極めて敏感で、人の髪より細い回路を作るため機械はほぼ完全に静止していなければならない。強い地震は装置を割り、薬品をこぼし、生産を数週間止めうる——世界がチップの安定供給に依存する中では深刻だ。技術者は巧妙な防御を編み出した。建物は特殊な支承やダンパーの上に載り、地面が動いても上の構造はより安定を保つ。敏感な機械は揺れを吸収する台に据えられる。早期警報は強い揺れの数秒前に繊細な工程を自動で止める。備えは「その後」の計画も意味する——予備の材料を蓄え、非常用電源を用意し、地震後に安全に再稼働する手順を訓練する。損害が全てを止めないよう生産を複数拠点に分散する企業も増える。教訓は日本を超える。先端製造が各地に広がり自然災害が生活の一部であり続ける中、災害に耐える工場づくりは良い工学の一部になりつつある。回復力を後付けでなく設計に組み込むことが、働く人と製品を守る。",
        quiz: [
          { q: "チップ工場が地震に弱い理由は？", options: ["わずかな振動でも繊細な製品を台無しにするから", "工場が小さいから", "電気を使わないから"], answer: 0 },
          { q: "本文が挙げる防御に含まれるものは？", options: ["建物を支承やダンパーに載せ揺れを抑える", "地震を止める", "工場を海に浮かべる"], answer: 0 },
          { q: "本文の広い教訓は？", options: ["回復力を後付けでなく設計に組み込むこと", "災害は無視できる", "工場は不要だ"], answer: 0 }
        ]
      }
    ]
  },
    {
    date: "2026-07-30",
    passages: [
      {
        id: "d0730-1",
        title: "Paying for Computing Power",
        level: "★★☆",
        genre: "ビジネス",
        text: "Building modern artificial intelligence takes an enormous amount of computing power, and that power is expensive. To train and run their systems, technology companies need thousands of specialized computer chips, huge buildings full of machines called data centers, and a great deal of electricity. Recently, several large firms have signed deals worth billions of dollars to lock in this capacity for years to come.\nWhy spend so much? Because in the AI business, computing power has become a key resource, much like oil or steel in older industries. A company that cannot get enough chips or electricity simply cannot compete. By reserving capacity early, firms protect themselves against shortages and rising prices.\nThis has created a booming market. Chip makers, electricity providers, and even satellite operators are all racing to sell their services to AI companies. Some investors are putting money into nuclear energy and new power lines, betting that demand for electricity will keep climbing.\nThere are risks, too. If a company spends heavily on computing power but its products do not sell well, it could lose a great deal of money. And using so much electricity raises questions about cost and the environment.\nStill, the pattern is clear. In today's economy, the ability to buy and manage computing power has become a serious business decision — one that can decide which companies lead the AI age and which fall behind.",
        summaryJa: "現代のAI構築には膨大な計算能力が必要で、それは高価だ。企業は数千個の専用チップ、データセンター、大量の電力を要し、近年は数十億ドル規模の契約で数年分の能力を確保している。AIビジネスでは計算能力が石油や鉄のような重要資源となり、チップや電力を十分得られない企業は競争できない。早期の確保は不足や価格上昇への備えになる。チップメーカー・電力会社・衛星事業者がAI企業への販売を競い、原子力や送電網に投資する動きもある。一方、大金を投じても製品が売れなければ大損しうるし、大量の電力は費用と環境の問題も生む。それでも計算能力を買い、管理する力は、AI時代の勝者を左右する重大な経営判断になっている。",
        quiz: [
          { q: "AI構築に大量に必要なものは？", options: ["計算能力（チップ・データセンター・電力）", "紙とペン", "広い駐車場"], answer: 0 },
          { q: "企業が早くから能力を確保する理由は？", options: ["不足や価格上昇に備えるため", "電気が嫌いだから", "チップが安いから"], answer: 0 },
          { q: "本文が挙げるリスクは？", options: ["製品が売れなければ大損しうる", "計算は無料である", "電力は無限にある"], answer: 0 }
        ]
      },
      {
        id: "d0730-2",
        title: "When AI Helps Design Computer Chips",
        level: "★★★",
        genre: "テクノロジー",
        text: "Designing a computer chip is one of the hardest jobs in technology. A single chip can hold billions of tiny parts, all of which must be placed and connected perfectly. This work usually takes teams of skilled engineers many months. Now, a new idea is gaining attention: using artificial intelligence to help design the very chips that AI runs on.\nThe concept is a kind of loop. Powerful chips make AI systems smarter, and smarter AI can, in turn, help design better chips. Recently a young company that builds such 'AI design assistants' raised sixty million dollars to grow its technology. The tools can suggest layouts, find mistakes, and test ideas far faster than people working alone.\nSupporters say this could speed up progress in electronics and lower costs. If AI handles the slow, repetitive parts of design, human engineers can focus on the creative and difficult decisions. Chips might reach the market sooner and use less energy.\nOthers urge caution. Chip design is complex, and a small error can ruin an expensive product. AI tools still make mistakes, so human experts must check their work carefully. There are also worries about which countries and companies will control this powerful technology.\nWhatever the outcome, the direction is striking. Machines are beginning to help build the machines that will power the next generation of computing — a sign of how deeply AI is now woven into technology itself.",
        summaryJa: "コンピューターチップの設計は技術の中でも最難関の一つ。一枚に数十億もの微小な部品を完璧に配置・接続せねばならず、熟練技術者チームで何か月もかかる。いま、AIが動くチップの設計自体をAIに手伝わせる発想が注目されている。強力なチップが賢いAIを生み、賢いAIがより良いチップの設計を助けるという循環だ。こうした「AI設計アシスタント」を作る新興企業が6000万ドルを調達。配置の提案・ミス発見・案の試験を人より速く行える。支持者は、遅く反復的な作業をAIが担えば技術者が創造的判断に集中でき、開発が速まり省エネにもなると言う。一方、設計は複雑で小さな誤りが高価な製品を台無しにし、AIも誤るため人の確認が要る。誰がこの技術を握るかへの懸念もある。機械が次世代計算を担う機械づくりを助け始めた——AIが技術そのものに深く織り込まれた証だ。",
        quiz: [
          { q: "チップ設計が難しい理由は？", options: ["数十億の部品を完璧に配置・接続する必要があるから", "部品が一つしかないから", "電気を使わないから"], answer: 0 },
          { q: "本文が言う「循環」とは？", options: ["強力なチップが賢いAIを生み、AIが良いチップ設計を助ける", "チップが自分で動く", "AIが電気を作る"], answer: 0 },
          { q: "支持者が期待する効果は？", options: ["技術者が創造的判断に集中でき開発が速まる", "人間が不要になる", "確認が要らなくなる"], answer: 0 }
        ]
      },
      {
        id: "d0730-3",
        title: "A Summer of Wildfires",
        level: "★★★",
        genre: "世界情勢",
        text: "Across southern Europe, this summer has brought some of the largest wildfires in years. In south-west France, a single blaze grew to cover an area several times the size of Paris, forcing thousands of people to leave their homes and holiday spots along the Atlantic coast. In Greece, firefighters battled flames on the island of Crete and in other regions, and several lost their lives in the effort.\nWhy are these fires so hard to control? Hot, dry weather turns forests and grassland into fuel, and strong winds can carry flames faster than crews can respond. Once a fire grows large, it can create its own weather, sending burning material far ahead and starting new fires. Thousands of firefighters and many aircraft may be needed for a single blaze.\nGovernments are responding in several ways. They evacuate people early to keep them safe, share aircraft and crews across borders, and warn the public when the risk is high. Some countries are investing in better forecasting and in clearing dry brush before summer begins.\nScientists note that hotter, drier summers make large fires more likely, and they urge long-term planning as well as emergency response.\nThe immediate goal, though, is simple and urgent: protect lives. Behind the dramatic images of smoke and flame are ordinary people leaving their homes, and the firefighters — sometimes at great personal risk — working to bring the fires under control.",
        summaryJa: "この夏、南欧では近年最大級の山火事が相次いだ。仏南西部では一つの火災がパリの数倍の面積に広がり、大西洋岸の住民や行楽客数千人が避難。ギリシャではクレタ島などで消火にあたり、命を落とした消防士もいた。なぜ制御が難しいのか——高温乾燥が森や草地を燃料に変え、強風が炎を隊員の対応より速く運ぶ。大火は自ら気象を生み、燃える物を遠くへ飛ばして新たな火を起こす。一つの火災に数千の消防士と多数の航空機が要ることもある。各国は早期避難、航空機や部隊の国境を越えた共有、高リスク時の警報で対応し、予報改善や夏前の乾いた下草の除去に投資する国もある。科学者は高温乾燥の夏が大火を招きやすいとし、緊急対応に加え長期計画を促す。当面の目標は明快で切迫している——命を守ること。煙と炎の背後には家を離れる人々と、時に大きな危険を冒す消防士がいる。",
        quiz: [
          { q: "南欧の火災が制御しにくい理由は？", options: ["高温乾燥と強風が炎を速く広げるから", "雨が多すぎるから", "森がないから"], answer: 0 },
          { q: "各国の対応に含まれるものは？", options: ["早期避難と部隊・航空機の国境を越えた共有", "何もしない", "火を無視する"], answer: 0 },
          { q: "本文が挙げる当面の目標は？", options: ["命を守ること", "観光を増やすこと", "写真を撮ること"], answer: 0 }
        ]
      },
      {
        id: "d0730-4",
        title: "After the Earthquake: The Race to Help",
        level: "★★☆",
        genre: "日本",
        text: "When a strong earthquake struck the Kumamoto area on the southern Japanese island of Kyushu this week, rescue teams began a race against time. In the hours and days after a major quake, the chance of finding survivors under damaged buildings drops quickly, so speed matters enormously.\nJapan is one of the most earthquake-prone countries in the world, and it has long prepared for moments like this. Buildings are designed to sway rather than break, schools hold regular drills, and phones receive warnings seconds before strong shaking arrives. These few seconds can be enough to stop a train, pause surgery, or let a family take cover.\nAfter a quake, many groups work together. Rescue crews search collapsed structures, medical teams treat the injured, and engineers check whether bridges and buildings are safe to use. Volunteers and neighbors often help too, sharing water, food, and information.\nPreparation continues at home as well. Many families keep emergency kits with water, food, flashlights, and radios, and agree in advance on where to meet if phones stop working.\nEarthquakes cannot be prevented, and they remain frightening and dangerous. But Japan's long experience shows that good building design, early warning, regular practice, and quick cooperation can save many lives. Each disaster is also studied carefully, so that the lessons learned can make the response to the next one faster and safer.",
        summaryJa: "今週、九州・熊本地方を強い地震が襲うと、救助隊は時間との闘いを始めた。大地震の後は、損壊した建物の下で生存者を見つけられる可能性が急速に下がるため、速さが極めて重要だ。日本は世界有数の地震国で、長くこうした事態に備えてきた。建物は壊れずに揺れるよう設計され、学校は定期的に訓練を行い、強い揺れの数秒前に警報が携帯に届く。この数秒で電車を止め、手術を中断し、家族が身を守れる。地震後は多くの集団が協力する——救助隊が倒壊建物を捜索し、医療班が負傷者を治療し、技術者が橋や建物の安全を確認する。ボランティアや近隣も水・食料・情報を分け合う。家庭でも備えは続き、水・食料・懐中電灯・ラジオの防災袋を用意し、通信が途絶えた時の集合場所を事前に決める家族も多い。地震は防げず、依然として恐ろしく危険だ。だが日本の長い経験は、堅牢な設計・早期警報・定期訓練・迅速な協力が多くの命を救うことを示す。各災害は丁寧に検証され、次への対応をより速く安全にする。",
        quiz: [
          { q: "大地震の後で速さが重要な理由は？", options: ["時間が経つと生存者を見つけられる可能性が下がるから", "救助が楽しいから", "建物が新しいから"], answer: 0 },
          { q: "日本の地震への備えに含まれないものは？", options: ["地震を完全に防ぐ装置", "強い揺れの前の警報", "揺れて壊れない設計と訓練"], answer: 0 },
          { q: "本文の結論は？", options: ["設計・警報・訓練・協力が多くの命を救う", "地震は無害だ", "備えは無意味だ"], answer: 0 }
        ]
      },
      {
        id: "d0730-5",
        title: "Why Nuclear Power Is Back",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "For years, nuclear power seemed to be fading in many countries. Now it is returning to the center of attention, driven by a surprising force: the huge demand for electricity created by artificial intelligence and its data centers. Investors are pouring money into nuclear projects, betting that the world will need vast amounts of steady, low-carbon power.\nWhy nuclear? Unlike coal or gas, nuclear plants produce very little of the carbon dioxide that warms the planet. And unlike solar or wind, they generate power day and night, in any weather. That makes them attractive for data centers, which must run without pause. A new generation of smaller, factory-built reactors promises to be quicker and cheaper to construct than the giant plants of the past.\nThere are real challenges. Nuclear plants are costly and slow to build, and many people worry about safety and about the radioactive waste they produce, which must be stored securely for a very long time. Public trust, damaged by past accidents, is not easily won back.\nSupporters argue that modern designs are far safer and that the climate benefits are too large to ignore. Critics reply that money might be better spent on renewable energy and storage.\nThe debate is far from settled. But the return of nuclear power shows how a single new demand — the electricity to run artificial intelligence — can reshape decisions about energy, the environment, and the technologies that will define the coming decades.",
        summaryJa: "長年、多くの国で衰退して見えた原子力が、意外な力——AIとそのデータセンターが生む膨大な電力需要——に押されて再び注目の中心に戻っている。投資家は、世界が安定した低炭素電力を大量に必要とすると見て原子力に資金を注ぐ。なぜ原子力か。石炭やガスと違い温暖化を招く二酸化炭素の排出が非常に少なく、太陽光や風力と違い昼夜・天候を問わず発電できる。無停止で動くデータセンターに向く。工場で作る小型の新型炉は、従来の巨大炉より速く安く建てられると期待される。課題も現実的だ。建設は高価で遅く、安全性や長期保管が必要な放射性廃棄物への不安も根強い。過去の事故で損なわれた信頼は簡単には戻らない。支持者は新設計は格段に安全で気候上の利点が大きすぎると主張し、批判者は再生可能エネルギーや蓄電に使う方が良いと返す。決着は遠い。だが原子力の復活は、AIを動かす電力という新たな需要一つが、エネルギー・環境・未来の技術をめぐる判断をどれほど塗り替えうるかを示している。",
        quiz: [
          { q: "原子力が再注目される主な理由は？", options: ["AIとデータセンターの膨大な電力需要", "石油が安いから", "原子力が新発明だから"], answer: 0 },
          { q: "原子力が持つ利点は？", options: ["低炭素で昼夜・天候を問わず発電できる", "廃棄物が出ない", "建設が一瞬で終わる"], answer: 0 },
          { q: "本文が挙げる課題は？", options: ["高コスト・安全性・放射性廃棄物への不安", "電気を作れないこと", "二酸化炭素を大量に出すこと"], answer: 0 }
        ]
      }
    ]
  },
    {
    date: "2026-07-29",
    passages: [
      {
        id: "d0729-1",
        title: "How AI Companies Charge for Their Services",
        level: "★★★",
        genre: "ビジネス",
        text: "When you buy electricity, you pay for how much you use. Artificial intelligence services work in a surprisingly similar way. Instead of a simple flat fee, most AI companies bill their customers based on 'tokens' — small units of text that measure how much work the AI does. Understanding this billing model reveals a lot about how the new AI economy operates.\nWhat is a token? Roughly speaking, a token is a piece of a word — a few characters of text. When you send a question to an AI and it sends an answer back, the system counts the tokens in both the question and the reply. The more text involved, the more tokens are used, and the more the customer pays. A short question costs little; a long document costs much more.\nWhy do companies charge this way? Because it closely matches their real costs. Running these AI systems requires huge amounts of computing power and electricity, and that cost rises with the amount of text processed. By billing per token, companies charge more when a customer uses more, which is fair and predictable, much like a utility bill.\nThis model shapes how businesses use AI. A company building products on top of AI must think carefully about how many tokens each task consumes, because costs can add up quickly at large scale. Some redesign their systems to use fewer tokens, keeping bills manageable — a new kind of efficiency that did not exist a few years ago.\nThe broader lesson is that how a product is priced shapes how it is used. Just as pay-per-use pricing makes people mindful of electricity, token-based billing makes companies mindful of how they use AI. As new technologies create new business models, understanding how they charge is often the key to understanding the whole industry.",
        summaryJa: "電気は使った量に応じて払う。AIサービスも驚くほど似ていて、多くのAI企業は定額でなく「トークン」——AIの仕事量を測る小さな文章単位——で課金する。この課金モデルは新しいAI経済の仕組みをよく表す。トークンとはおおむね単語の一部(数文字)で、質問と回答の両方のトークンが数えられ、扱う文章が多いほどトークンが増え支払いも増える。短い質問は安く、長い文書は高い。なぜこう課金するのか——実際のコストによく合うからだ。AI稼働には膨大な計算力と電力が要り、処理する文章量とともに増える。トークン課金は使うほど多く払う公平で予測可能な方式で、公共料金に似る。この方式は企業のAI利用を形づくり、AI上に製品を作る企業は各作業のトークン消費を慎重に考え、大規模ではコストが急増するため、少ないトークンで済むよう設計し直す新しい効率も生まれた。価格の付け方が使い方を形づくる——従量課金が電気を意識させるように、トークン課金はAI利用を意識させる。課金の仕組みの理解が産業全体の理解の鍵だ。",
        quiz: [
          { q: "多くのAI企業の課金方式は？", options: ["トークン(文章単位)に基づく従量課金", "完全な定額", "無料"], answer: 0 },
          { q: "この方式が使われる理由は？", options: ["計算力・電力の実際のコストによく合うから", "計算が簡単だから", "顧客が喜ぶから"], answer: 0 },
          { q: "本文の広い教訓は？", options: ["価格の付け方が使い方を形づくる", "価格は無関係", "AIは無料であるべき"], answer: 0 }
        ]
      },
      {
        id: "d0729-2",
        title: "The Helpers That Keep Us Healthy",
        level: "★★★",
        genre: "テクノロジー",
        text: "Inside the body, health often depends on tiny helpers working quietly behind the scenes. New research into diabetes has revealed one such example: the cells that produce insulin, the hormone that controls blood sugar, rely on 'helper proteins' to do their job. When one key partner was missing, damaged proteins built up inside the cells, and they made less insulin. The discovery may point toward new ways to treat a disease affecting hundreds of millions.\nWhy does this matter? Because insulin is essential for turning food into energy. In diabetes, the body either cannot make enough insulin or cannot use it well, causing blood sugar to rise to dangerous levels. Understanding exactly why insulin-producing cells fail is a crucial step toward helping them work again.\nThe new research highlights the role of the helper proteins. Inside every cell, proteins must be folded into the right shapes to work, and helper proteins assist in this delicate process. When a key helper is missing, misshapen and damaged proteins pile up, stressing the cell and reducing its ability to make insulin. In other words, the problem is not only in the insulin itself, but in the support system that keeps the cells healthy.\nThis kind of discovery could open new paths for treatment. If scientists can protect or strengthen these helper systems, they might keep insulin-producing cells working longer, slowing or preventing some forms of diabetes.\nThe deeper lesson reaches beyond medicine. In the body, as in any complex system, the visible star — here, insulin — depends on a hidden network of support. Problems often arise not in the obvious place, but in the quiet helpers we overlook. Understanding the whole system, not just its most famous part, is often where real solutions are found.",
        summaryJa: "体内では、健康はしばしば陰で静かに働く小さな助っ人に依存する。糖尿病の新研究がその一例を明かした——血糖を制御するホルモン「インスリン」を作る細胞は、仕事をこなすのに「ヘルパータンパク質」に頼る。鍵となる相棒が欠けると、傷んだタンパク質が細胞内に蓄積し、インスリンの産生が減る。数億人を苦しめる病の新治療への手がかりになりうる。なぜ重要か——インスリンは食物をエネルギーに変えるのに不可欠で、糖尿病では十分作れないか使えず血糖が危険な水準に上がる。細胞が機能不全になる理由の理解が、再び働かせる重要な一歩だ。細胞内でタンパク質は正しい形に折りたたまれて働き、ヘルパーがその繊細な過程を助ける。鍵のヘルパーが欠けると、いびつで傷んだタンパク質がたまり細胞を疲弊させインスリン産生を落とす。問題はインスリン自体でなく、細胞を健康に保つ支援系にある。この系を守り強められれば、細胞を長く働かせ一部の糖尿病を遅らせ防げるかもしれない。目立つ主役(インスリン)は見えない支援網に依存する——見過ごされがちな静かな助っ人に問題は生じる。全体系の理解こそ解決の場だ。",
        quiz: [
          { q: "インスリンを作る細胞が頼るものは？", options: ["ヘルパータンパク質", "太陽光", "砂糖"], answer: 0 },
          { q: "鍵のヘルパーが欠けると起きることは？", options: ["傷んだタンパク質がたまりインスリン産生が減る", "細胞が増える", "何も起きない"], answer: 0 },
          { q: "本文の深い教訓は？", options: ["目立つ主役は見えない支援網に依存する", "主役だけ見ればよい", "助っ人は不要"], answer: 0 }
        ]
      },
      {
        id: "d0729-3",
        title: "When Heat and Fire Force People to Flee",
        level: "★★☆",
        genre: "世界情勢",
        text: "As summer temperatures rise across the northern hemisphere, extreme heat and wildfires are forcing communities to make hard, sudden decisions. In France, authorities recently ordered nearly four thousand people to evacuate tourist areas along the Atlantic coast, as returning heat threatened firefighters' efforts to control a large wildfire. Scenes like this are becoming a regular feature of hot summers around the world.\nWhy do heat and fire go together so dangerously? High temperatures dry out forests, grass, and soil, turning the landscape into fuel. A single spark — from lightning, a machine, or human carelessness — can then start a fire that spreads with frightening speed, especially in strong wind. Once a large wildfire begins, controlling it is extremely difficult, and protecting people becomes the first priority.\nEvacuation is a powerful but difficult tool. Moving thousands of people quickly saves lives, but it also disrupts communities, empties businesses, and can cause panic if not managed well. Officials must decide when the danger is serious enough to order people to leave, balancing safety against the cost and stress of evacuation. Acting too late risks lives; acting too early wastes resources and trust.\nPreparation makes a huge difference. Regions that plan ahead — clearing dry brush, building firebreaks, training firefighters, and creating clear evacuation routes — suffer far less than those caught unprepared. As hot, dry summers grow more common, this kind of readiness is becoming an essential part of public safety.\nThe broader lesson is about living with a changing climate. We cannot prevent every heatwave or fire, but we can prepare for them — reducing risk in advance and responding quickly when danger comes. In a warming world, the difference between disaster and safety often lies in how well a society prepares before the worst arrives.",
        summaryJa: "北半球で夏の気温が上がる中、猛暑と山火事が地域に急な難しい決断を迫っている。フランスでは、戻ってきた暑さが大規模山火事の制圧を脅かし、当局が大西洋岸の観光地の約4,000人に避難を命じた。こうした光景は世界の暑い夏で常態になりつつある。なぜ暑さと火は危険に結びつくのか——高温が森・草・土を乾かし景観を燃料に変える。雷・機械・人の不注意の一つの火花が、特に強風下で恐ろしい速さで広がる火事を起こしうる。大規模化すると制御は極めて難しく、人命保護が最優先になる。避難は強力だが難しい手段で、迅速な移動は命を救うが地域を混乱させ、うまく管理しないとパニックを招く。当局はいつ避難を命じるか、安全と避難のコスト・ストレスを天秤にかける。遅すぎれば命を、早すぎれば資源と信頼を失う。備えが大きな差を生む——枯れ枝除去・防火帯・消防訓練・明確な避難路を planする地域は被害が遥かに小さい。暑く乾いた夏が増える中、この備えは公共安全の要になる。変わる気候と生きる——すべての熱波や火事は防げなくても備えられる。事前のリスク低減と迅速な対応の差が、災害と安全を分ける。",
        quiz: [
          { q: "フランスで避難が命じられた理由は？", options: ["暑さが大規模山火事の制圧を脅かしたから", "地震が起きたから", "洪水が来たから"], answer: 0 },
          { q: "避難という手段の難しさは？", options: ["命を救うが地域を混乱させ、判断のタイミングが難しい", "常に簡単", "効果がない"], answer: 0 },
          { q: "本文が強調することは？", options: ["事前の備えが災害と安全を分ける", "備えは無意味", "火事は防げない"], answer: 0 }
        ]
      },
      {
        id: "d0729-4",
        title: "Reading Time in the Ocean's Currents",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "Deep in the Atlantic Ocean flows a vast, slow-moving system of currents that quietly shapes weather across much of the world. New research suggests that if this system weakens, it could dramatically change rainfall patterns — bringing much stronger storms, known as atmospheric rivers, to places like California, while leaving other regions, such as Greenland, with fewer snow-producing storms. It is a striking reminder of how connected the planet's climate really is.\nWhat is this ocean system? It is a giant loop of currents that carries warm water from the tropics toward the poles and cold water back again, moving heat around the globe like a slow conveyor belt. This flow helps determine where rain falls, how warm different regions are, and how storms form. When such a powerful system changes, the effects can reach thousands of kilometers away.\nAn 'atmospheric river' is a long, narrow band of moist air that carries enormous amounts of water across the sky, sometimes releasing it as intense rain or snow. These events can bring vital water to dry regions — or dangerous floods, depending on their strength. The new research suggests that changes in the ocean could make these events more extreme in some places.\nWhy does this matter? Because societies plan around familiar weather patterns. Cities build their water systems, farms plant their crops, and governments prepare for floods based on what they expect. If ocean changes shift these patterns, communities may face storms and droughts they are not prepared for.\nThe deeper wonder is how deeply the parts of our planet are connected. A change in ocean currents can alter the rain over a distant coast and the snow on a far-off island. Understanding these hidden links helps scientists warn us of what may come — and reminds us that Earth is not a collection of separate places, but a single, interconnected system.",
        summaryJa: "大西洋の深部に、世界の広範な天候を静かに形づくる巨大でゆっくりした海流系が流れている。新研究は、この系が弱まると降雨パターンが劇的に変わりうると示す——カリフォルニアのような地域に「大気の川」と呼ばれる遥かに強い storm をもたらし、グリーンランドなど他地域では雪をもたらす storm が減る。地球の気候がいかに連関しているかを鮮やかに思い出させる。この海流系は熱帯の暖水を極へ、冷水を戻す巨大なループで、遅いコンベアのように熱を地球中に運ぶ。この流れが雨の降る場所・各地の暖かさ・storm の形成を左右し、強力な系が変わると影響は数千キロ先まで及ぶ。「大気の川」は膨大な水分を運ぶ細長い帯で、乾いた地域に貴重な水を、あるいは危険な洪水をもたらす。海の変化がこれらを一部地域で極端にしうる。なぜ重要か——社会は馴染みの天候を前提に、水道・作付け・防災を計画する。パターンが変われば、備えのない storm や干ばつに直面しうる。惑星の各部の深い連関——海流の変化が遠い海岸の雨や遠い島の雪を変える。この隠れたつながりの理解が来るものを警告し、地球が別々の場所の集まりでなく一つの連関系だと思い出させる。",
        quiz: [
          { q: "海流系が弱まると起きうることは？", options: ["降雨パターンが変わり一部地域で storm が極端になる", "海が消える", "気候は変わらない"], answer: 0 },
          { q: "「大気の川」とは？", options: ["膨大な水分を運ぶ細長い空の帯", "海底の川", "地下水路"], answer: 0 },
          { q: "本文の深い驚きは？", options: ["地球は別々でなく一つの連関系である", "各地は無関係", "海は天候と無関係"], answer: 0 }
        ]
      },
      {
        id: "d0729-5",
        title: "Putting a Date on Ancient Art",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "In a cave in France called Font-de-Gaume, ancient people painted animals on stone walls long before writing existed. For years, one question was hard to answer: exactly how old are these paintings? Now scientists have found a clever way to date them precisely, by discovering tiny bits of charcoal hidden inside the black pigment — charcoal that can be measured using a method called radiocarbon dating.\nWhy was dating cave art so difficult? Because many ancient paintings were made with mineral pigments, which contain no material that scientists can date directly. Without a way to measure age, researchers could only guess, based on the style of the images or their surroundings. Guesses are useful, but they can be wrong by thousands of years.\nRadiocarbon dating solves this by measuring carbon. All living things absorb a special form of carbon while alive, and after they die, this carbon slowly and steadily breaks down over thousands of years. By measuring how much remains, scientists can calculate how long ago something lived. Charcoal — made from burnt wood — contains this carbon, so finding charcoal inside the black paint gives researchers something they can actually date.\nThis discovery matters because knowing the true age of ancient art changes our understanding of history. It tells us when people lived in a place, how their art developed, and how early humans thought and created. A precise date turns a mysterious image into a fixed point in the human story.\nThe broader lesson is about the power of careful observation. The answer to an old question was hidden in plain sight — tiny flecks of charcoal within the paint. Great discoveries often come not from looking somewhere new, but from looking more closely at what was there all along. In science, patience and attention can turn an ancient mystery into knowledge.",
        summaryJa: "フランスのフォン・ド・ゴーム洞窟で、古代の人々は文字が生まれる遥か前に石壁に動物を描いた。長年難しかったのは「正確に何歳か」だ。科学者は巧妙な年代測定法を見つけた——黒い顔料の中に隠れた微小な炭(木炭)を発見し、放射性炭素年代測定で測れるのだ。なぜ洞窟壁画の年代測定は難しかったか——多くは鉱物顔料で描かれ、直接年代測定できる material を含まないからだ。測る術がなく、絵の様式や周囲から推測するしかなく、推測は数千年ずれうる。放射性炭素年代測定は炭素を測る。生物は生きている間に特殊な炭素を取り込み、死後、数千年かけてゆっくり一定して壊れる。残量を測れば、いつ生きていたか計算できる。焼いた木からできる木炭はこの炭素を含むため、黒い塗料の中に木炭を見つければ実際に年代測定できる。古代美術の真の年代を知ることは歴史理解を変える——人がいつそこに住み、美術がどう発展し、初期人類がどう考え創ったかを教える。正確な年代が、謎の絵を人類の物語の定点に変える。丁寧な観察の力——古い問いの答えは塗料の中の微小な炭という「見えていた場所」に隠れていた。偉大な発見は新しい場所でなく、ずっとそこにあったものをより注意深く見ることから来る。忍耐と注意が古代の謎を知識に変える。",
        quiz: [
          { q: "洞窟壁画を年代測定できた鍵は？", options: ["黒い顔料の中の木炭を発見したこと", "絵の署名", "壁の色"], answer: 0 },
          { q: "放射性炭素年代測定の原理は？", options: ["死後ゆっくり壊れる炭素の残量から年代を計算する", "色の濃さを測る", "重さを量る"], answer: 0 },
          { q: "本文の広い教訓は？", options: ["ずっとそこにあったものを注意深く見ることが発見を生む", "新しい場所だけを探すべき", "観察は無意味"], answer: 0 }
        ]
      }
    ]
  },
    {
    date: "2026-07-28",
    passages: [
      {
        id: "d0728-1",
        title: "Rivals Team Up to Build a Car's Brain",
        level: "★★☆",
        genre: "ビジネス",
        text: "Two of Japan's biggest carmakers, long-time competitors, have reportedly entered final-stage talks to work together on something surprising: the software that will act as the 'brain' of their next-generation vehicles. An agreement could come within weeks. Rivals cooperating on a core technology is a growing trend, and it reveals how much the car industry is changing.\nWhy would competitors share such an important system? Because modern cars are becoming computers on wheels. The software that controls a vehicle's functions — its 'operating system' — is now as important as the engine once was. But developing this software is enormously expensive and complex, requiring skills more common in technology companies than traditional carmakers. By sharing the cost and effort, two firms can move faster and cheaper than either could alone.\nThis kind of partnership involves a careful balance. The companies will still compete fiercely on design, brand, and driving experience. They cooperate only on the shared foundation — the software platform — that neither gains much advantage from building separately. It is like rival restaurants sharing a supplier for basic ingredients while competing on their recipes.\nThe change reflects a bigger shift in the auto industry. For a century, a car's value lay mainly in its mechanical engineering. Now, more and more, it lies in software: how the car connects, updates, drives itself, and serves its passengers. Carmakers that cannot master software risk falling behind newer, technology-focused competitors.\nThe broader business lesson is about knowing when to compete and when to cooperate. Building the same expensive foundation separately can waste resources that could go toward what truly sets a company apart. Sometimes the smartest strategy is to join forces on the basics, and save the real competition for what customers actually notice.",
        summaryJa: "長年のライバルである日本の大手自動車2社が、次世代車の「頭脳」となるソフトウェアで協業する最終段階の交渉に入ったと報じられ、数週内の合意もありうる。ライバルが中核技術で協力するのは増える傾向で、車産業の変化を映す。なぜ重要なシステムを共有するのか——現代の車は「車輪の上のコンピュータ」化し、機能を制御するOSがかつてのエンジン並みに重要だが、開発は極めて高価・複雑でIT企業寄りの技術が要る。費用と労力を分担すれば単独より速く安く進める。協業は微妙な均衡で、デザイン・ブランド・走りでは激しく競い、単独開発で差がつかない共通基盤(ソフト基盤)だけ協力する。ライバル店が基本食材の仕入れを共有しレシピで競うようなものだ。車の価値は機械工学からソフトへ移りつつあり、ソフトを制せぬメーカーは新興IT勢に後れる。基本で手を組み、顧客が気づく部分で真に競う——競争と協力の見極めが賢い戦略だ。",
        quiz: [
          { q: "2社が協業しようとしている対象は？", options: ["次世代車の中核ソフトウェア(OS)", "エンジンの部品", "販売店の場所"], answer: 0 },
          { q: "ライバルが基盤で協力する理由は？", options: ["ソフト開発は高価・複雑で分担すれば速く安いから", "競争が嫌いだから", "法律の要求だから"], answer: 0 },
          { q: "本文の広い教訓は？", options: ["基本で協力し、顧客が気づく部分で競う見極めが賢い", "常に単独で作るべき", "協力は無意味"], answer: 0 }
        ]
      },
      {
        id: "d0728-2",
        title: "A Car That Is Really a Computer",
        level: "★★★",
        genre: "テクノロジー",
        text: "Not long ago, a car was mainly a mechanical machine: an engine, wheels, and steel. Today, a modern vehicle contains dozens of computers and millions of lines of software code, and increasingly its most important part is not the engine but the 'operating system' — the master software that controls everything from the dashboard to the brakes.\nWhy has software become so central? Because it determines what a car can do and how it improves over time. A software-defined car can receive updates over the internet, just like a smartphone, gaining new features or fixing problems without a trip to the garage. It can connect to other services, learn a driver's preferences, and support advanced safety systems or self-driving features. The physical car may stay the same, but the software can make it better month after month.\nThis shift changes what carmakers must be good at. For a century, they mastered metal, engines, and mechanical precision. Now they also need the skills of technology companies: writing reliable software, managing data, and updating systems safely. Some traditional carmakers find this transition difficult, while newer companies built around software have an advantage.\nThere are challenges. Software in a car must be extremely reliable, because a failure can be dangerous. It must be secure against hackers, since a connected car is a possible target. And it must last for many years, far longer than a typical phone.\nThe deeper trend is one seen across many industries: physical products are becoming platforms for software. Just as phones became app machines and televisions became streaming devices, cars are becoming computers that happen to move. Understanding this shift helps explain why carmakers now compete not only on horsepower and design, but increasingly on code.",
        summaryJa: "少し前まで車は主に機械——エンジン・車輪・鋼だった。今の車は数十の計算機と数百万行のコードを持ち、最重要部分はエンジンでなく、ダッシュボードからブレーキまで制御する「OS」になりつつある。なぜソフトが中心か——車にできることと、時間とともにどう良くなるかを決めるからだ。ソフト定義の車はスマホのようにネット経由で更新でき、整備工場に行かず新機能追加や不具合修正ができ、他サービスと接続し、運転者の好みを学び、先進安全や自動運転を支える。物理的な車は同じでもソフトが毎月良くする。これはメーカーに必要な能力を変える。長年、金属・エンジン・機械精度を極めたが、今は信頼できるソフト開発・データ管理・安全な更新というIT企業の技能も要る。車のソフトは極めて信頼性が高く、ハッカーに強く、スマホより遥かに長寿命でねばならない。物理製品がソフトの土台になる——電話がアプリ機に、テレビが配信機になったように、車は「動く計算機」になりつつある。",
        quiz: [
          { q: "現代の車で最重要になりつつある部分は？", options: ["すべてを制御するOS(ソフトウェア)", "エンジンのみ", "タイヤの色"], answer: 0 },
          { q: "ソフト定義の車の利点は？", options: ["ネット経由で更新し新機能追加や不具合修正ができる", "更新できない", "重くなる"], answer: 0 },
          { q: "車のソフトに求められる条件に含まれないものは？", options: ["高い信頼性とセキュリティ", "長い寿命", "毎年買い替えること"], answer: 2 }
        ]
      },
      {
        id: "d0728-3",
        title: "Treasure in the Deep-Sea Mud",
        level: "★★★",
        genre: "世界情勢",
        text: "Far below the ocean surface, in the mud of the deep seabed near Japan's easternmost island, scientists have confirmed the presence of several rare earth elements — the valuable materials essential for magnets, electronics, and green technology. The discovery could one day help reduce the world's dependence on a small number of land-based suppliers, but turning seabed mud into usable materials is far from simple.\nWhy is this exciting? Because rare earths are critical to modern technology, yet their supply is dominated by only a few countries. A nation with its own source — even one deep underwater — could gain valuable independence. For a country like Japan, which imports most of its raw materials, finding these elements within its own waters is strategically important.\nBut the challenges are enormous. The mud lies thousands of meters below the surface, in cold, dark, high-pressure conditions where working is extremely difficult and expensive. Bringing up the mud, separating the rare earths, and doing so without harming the deep-sea environment are all major technical and ethical problems. Deep-sea mining raises real concerns about damage to fragile ocean ecosystems that we still barely understand.\nSo the discovery is a beginning, not an answer. It shows that valuable resources exist, but using them will require years of research, new technology, and careful thought about environmental costs. A resource that cannot be reached affordably and responsibly is, for now, only a possibility.\nThe broader lesson is about the gap between finding and using. Discovering a resource is exciting, but value comes from being able to obtain it in a way that is affordable, safe, and responsible. Whether under the sea or anywhere else, potential only becomes real through the hard, patient work of turning discovery into practical use.",
        summaryJa: "海面のはるか下、日本最東端の島近くの深海底の泥に、磁石・電子機器・グリーン技術に不可欠なレアアース数種の存在が確認された。いつか世界の陸上供給国への依存を減らせるかもしれないが、海底の泥を使える材料にするのは容易でない。なぜ画期的か——レアアースは現代技術に不可欠なのに供給が少数国に偏り、自前の源(たとえ深海でも)を持てば貴重な自立を得られる。原材料の多くを輸入する日本には自国水域での発見は戦略的に重要だ。だが課題は膨大で、泥は数千メートル下の冷たく暗い高圧環境にあり、作業は極めて難しく高価。泥の引き上げ、レアアースの分離、そして脆い深海生態系を傷めずに行うことは大きな技術的・倫理的問題だ。深海採掘はまだよく分からない生態系への損傷の懸念を生む。発見は答えでなく始まりで、利用には年月の研究・新技術・環境コストへの熟慮が要る。手頃かつ責任ある形で得られない資源は今は可能性にすぎない。発見と利用の間の隔たり——潜在は、発見を実用に変える地道な努力でのみ現実になる。",
        quiz: [
          { q: "深海の泥で確認されたものは？", options: ["レアアース元素", "石油", "金塊"], answer: 0 },
          { q: "この発見が戦略的に重要な理由は？", options: ["レアアースの供給が少数国に偏り、自前の源で自立できるから", "泥が珍しいから", "海がきれいだから"], answer: 0 },
          { q: "本文が示す「発見と利用の隔たり」とは？", options: ["手頃・安全・責任ある形で得られて初めて価値になる", "発見すればすぐ使える", "利用は簡単"], answer: 0 }
        ]
      },
      {
        id: "d0728-4",
        title: "Where Japan Began",
        level: "★★☆",
        genre: "日本",
        text: "In the quiet countryside of Nara Prefecture lie the remains of a place where, more than thirteen hundred years ago, the shape of modern Japan first took form. UNESCO has now added the Asuka-Fujiwara sites — the location of Japan's early capitals — to its World Cultural Heritage list, making them the country's twenty-seventh World Heritage property. The decision recognizes a landscape where a nation was, in many ways, born.\nWhy are these sites so important? Because it was here, in the Asuka and Fujiwara periods, that Japan began to organize itself as a unified state. Rulers built the country's first permanent, planned capital, introduced systems of law and government influenced by China, and helped Buddhism take deep root. Many features of Japanese culture and governance can be traced back to what happened in this small area so long ago.\nBecoming a World Heritage site brings both honor and responsibility. The recognition celebrates the area's global importance and can attract visitors, supporting the local economy. But it also creates a duty to protect the fragile remains and landscape for future generations, balancing tourism with careful preservation.\nWorld Heritage status matters beyond any single country. The idea behind it is that some places belong, in a sense, to all of humanity — treasures whose value crosses borders. Protecting them is seen as a shared human responsibility, not just a national one.\nThe deeper meaning is about the value of remembering where we come from. A pile of ancient foundations in a rural field may look modest, but it holds the roots of a civilization. Honoring such places reminds a society of its long story, connecting the busy present to a distant past — and reminding us that every modern nation grew, slowly, from beginnings that once seemed small.",
        summaryJa: "奈良県の静かな田園に、1300年以上前に現代日本の形が初めて形づくられた場所の遺構がある。UNESCOが飛鳥・藤原(日本初期の都の地)を世界文化遺産に登録し、日本27件目の世界遺産となった。国がいわば生まれた景観を認める決定だ。なぜ重要か——飛鳥・藤原の時代にここで日本は統一国家として組織化を始め、初の恒久的計画都市を建て、中国に影響された法・統治の仕組みを導入し、仏教が深く根付いた。日本の文化と統治の多くの特徴が、この小さな地域で起きたことに遡れる。世界遺産化は名誉と責任を伴い、地球規模の重要性を称え観光を呼ぶ一方、脆い遺構と景観を将来へ守り、観光と保存を両立する義務を生む。世界遺産の理念は、ある場所は人類全体に属する国境を越える宝であり、その保護は国だけでなく人類共通の責任だという点にある。自らの起源を覚えておくことの価値——素朴に見える古代の基礎が文明の根を宿す。忙しい現在と遠い過去をつなぎ、どの近代国家も小さく見えた始まりから育ったと思い出させる。",
        quiz: [
          { q: "飛鳥・藤原の地が重要な理由は？", options: ["日本が統一国家として組織化を始めた場所だから", "工業地帯だから", "港があったから"], answer: 0 },
          { q: "世界遺産化がもたらす責任は？", options: ["脆い遺構と景観を将来へ守り観光と保存を両立する", "自由に開発できる", "観光を禁止する"], answer: 0 },
          { q: "世界遺産の理念とは？", options: ["ある場所は人類全体に属し保護は共通の責任", "国だけのもの", "価値は国境で止まる"], answer: 0 }
        ]
      },
      {
        id: "d0728-5",
        title: "Reading a Storm Before It Arrives",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "When a typhoon forms over the ocean, one of the most difficult questions is also the most important: where will it go? A newly formed storm may grow into a violent system, yet forecasters can be sharply divided over whether it will strike land or curve harmlessly out to sea. The science of predicting a storm's path is a fascinating mix of physics, data, and honest uncertainty.\nWhy is forecasting so hard? Because a storm is shaped by countless forces at once — ocean temperatures, wind patterns high in the atmosphere, and the positions of other weather systems far away. Small differences in these conditions can send a typhoon in completely different directions. To predict its path, scientists feed enormous amounts of data into powerful computer models that calculate many possible futures. Often these models disagree, which is why forecasters sometimes speak of a range of possibilities rather than a single certain track.\nThis uncertainty is not a weakness; it is honesty. A responsible forecast tells people not just the most likely path, but how confident scientists are, so communities can prepare wisely. Warning people too late costs lives, but crying wolf too often makes them stop listening. Balancing these is a serious challenge.\nForecasting has improved dramatically over the decades. Better satellites, more data, and faster computers now give days of warning where once there were only hours. Countless lives have been saved because people had time to prepare or evacuate. Yet nature remains complex, and perfect prediction may never be possible.\nThe broader lesson is about living wisely with uncertainty. We often want clear, confident answers, but some of the most important questions — about weather, health, or the future — can only be answered in terms of probability. Learning to act sensibly on 'likely' and 'possible,' rather than demanding false certainty, is a vital skill, in science and in life.",
        summaryJa: "台風が海上で発生すると、最も難しく最も重要な問いが生じる——どこへ進むか。生まれたばかりの storm が猛烈に発達しても、上陸するか海上へ逸れるか予報が大きく割れることがある。進路予測の科学は物理・データ・率直な不確実性の魅力的な混合だ。なぜ難しいか——台風は海水温、上空の風、遠くの他の気象系の位置など無数の力に同時に形づくられ、条件のわずかな差が全く異なる方向へ向かわせる。科学者は膨大なデータを強力な計算モデルに入れ多くの未来を計算するが、モデルは食い違うことが多く、単一の確実な進路でなく可能性の幅で語る。この不確実性は弱さでなく誠実さだ。責任ある予報は最も可能性の高い進路と科学者の確信度を伝え、地域が賢く備えられるようにする。警告が遅れれば命を失い、頻繁すぎれば人は聞かなくなる。予報は衛星・データ・計算機の向上で数十年で劇的に改善し、かつて数時間だった警告が数日になり多くの命が救われた。だが自然は複雑で完全な予測は不可能かもしれない。不確実性と賢く付き合うこと——「likely」「possible」に基づき分別ある行動をとる力は、科学でも人生でも重要な技能だ。",
        quiz: [
          { q: "台風の進路予測が難しい理由は？", options: ["海水温・風・他の気象系など無数の力に同時に形づくられるから", "台風が動かないから", "データがないから"], answer: 0 },
          { q: "予報の不確実性を本文はどう捉える？", options: ["弱さでなく誠実さ", "無能の証拠", "無視すべきもの"], answer: 0 },
          { q: "本文の広い教訓は？", options: ["「likely」「possible」に基づき分別ある行動をとる力が重要", "確実な答えだけを求める", "不確実性は無視する"], answer: 0 }
        ]
      }
    ]
  },
    {
    date: "2026-07-27",
    passages: [
      {
        id: "d0727-1",
        title: "One Company, Factories Everywhere",
        level: "★★★",
        genre: "ビジネス",
        text: "The most advanced computer chips in the world are made by only a handful of companies, and one of them is now building new factories in several countries at once — the United States, Japan, Germany, and its home base in Taiwan. At the same time, it is developing ever more advanced and expensive manufacturing processes. This global expansion tells a story about how modern business balances risk and cost.\nWhy build factories in so many places instead of keeping everything in one efficient location? The answer is largely about risk. Chips are now so important to the world economy — used in cars, phones, weapons, and every kind of machine — that governments want them made inside their own borders, not only far away. By spreading its factories, the company reduces the danger that a single natural disaster, political conflict, or supply problem could cut off the world's chips.\nBut this safety has a price. Building the same advanced factory in several countries costs far more than concentrating in one place. Workers must be trained, local suppliers developed, and each site brought up to the same extreme standards. Meanwhile, each new generation of chips requires machines of almost unbelievable complexity and cost.\nThe company is making a classic business trade-off. Concentration is cheaper but riskier; spreading out is safer but more expensive. In a world where governments increasingly treat chips as strategic, and where a single disruption could ripple across the globe, the firm is choosing resilience — even at a higher cost.\nThe deeper lesson applies broadly. For decades, businesses optimized almost entirely for efficiency. Now, after repeated shocks, many are rediscovering an older wisdom: that being able to survive a crisis can matter more than squeezing out the last bit of savings.",
        summaryJa: "世界最先端のチップを作れるのは一握りの企業で、その一社が今、米国・日本・ドイツ・本拠地の台湾と同時に新工場を建てつつ、より高度で高価な製造プロセスも開発している。この世界展開は、現代ビジネスがリスクとコストをどう均衡させるかを物語る。なぜ効率的な一拠点に集約せず各地に建てるのか——主にリスクゆえだ。チップは自動車・スマホ・兵器などに不可欠で、各国は自国内での生産を望む。工場を分散すれば、災害・政治対立・供給問題で世界のチップが途絶える危険が減る。だが安全には代償があり、同じ高度工場を各国に建てるのは集約より遥かに高くつく。集約は安いが危険、分散は安全だが高価という古典的なトレードオフで、チップを戦略物資とみなす世界で企業は高コストでも強靱性を選んでいる。数十年効率一辺倒だった企業が、度重なる衝撃の後、「危機を生き延びる力」の古い知恵を再発見しつつある。",
        quiz: [
          { q: "この企業が各国に工場を分散する主な理由は？", options: ["災害や対立で世界のチップが途絶えるリスクを減らすため", "工場が余っているから", "税金がゼロだから"], answer: 0 },
          { q: "分散の代償は？", options: ["同じ高度工場を各国に建てるのは集約より高くつく", "品質が下がる", "従業員が不要になる"], answer: 0 },
          { q: "本文が示す古い知恵とは？", options: ["危機を生き延びる力が最後の節約より重要", "効率がすべて", "分散は無意味"], answer: 0 }
        ]
      },
      {
        id: "d0727-2",
        title: "When Hackers Stop the Factory",
        level: "★★★",
        genre: "テクノロジー",
        text: "In recent years, a growing threat has been able to do something once thought impossible: stop the factories of major companies without touching a single machine physically. The weapon is ransomware — malicious software that locks up a company's computer systems until a ransom is paid. Recent attacks have halted production at well-known consumer brands, showing how digital crime can cause very real-world damage.\nHow does ransomware work? Attackers find a way into a company's computer network, often by tricking an employee into clicking a harmful link or opening an infected file. The software then spreads, scrambling important files so no one can use them, and displays a demand for payment — usually in hard-to-trace digital currency — in exchange for unlocking the data. Because modern factories, shipping, and sales all depend on computers, freezing those systems can bring an entire business to a stop.\nThe damage goes beyond any ransom. A company may lose days or weeks of production, disappoint customers, and suffer lasting harm to its reputation. Even paying the ransom is risky, since there is no guarantee the criminals will restore the systems, and paying may encourage more attacks.\nDefending against ransomware requires constant effort. Companies train employees to recognize suspicious messages, keep backup copies of their data so they can recover without paying, update their software to fix weaknesses, and limit how far an intruder can spread inside the network.\nThe broader lesson is that in a connected world, security is everyone's job. As more of business and daily life moves online, the line between digital and physical safety fades. A careless click can stop a factory floor, which means that understanding basic cybersecurity is no longer only a task for specialists — it is a skill everyone in a modern organization needs.",
        summaryJa: "近年、かつて不可能と思われたこと——物理的に機械に触れず大企業の工場を止める——を可能にする脅威が増えている。武器は「ランサムウェア」で、身代金を払うまで企業のシステムをロックする悪意あるソフトだ。最近の攻撃は有名ブランドの生産を停止させ、デジタル犯罪が現実の被害を生むことを示した。攻撃者は従業員に有害なリンクを踏ませるなどで侵入し、ソフトが広がって重要ファイルを暗号化し、追跡困難なデジタル通貨での支払いを要求する。現代の工場・物流・販売は計算機に依存するため、システム凍結が事業全体を止める。被害は身代金を超え、数日〜数週の生産停止・顧客の失望・評判の毀損に及ぶ。支払っても復旧の保証はなく、さらなる攻撃を招きうる。防御には、不審メールの見分け、バックアップ、ソフト更新、侵入の拡散制限が要る。つながった世界でセキュリティは全員の仕事——不用意な一クリックが工場を止めうる。",
        quiz: [
          { q: "ランサムウェアとは？", options: ["身代金を払うまでシステムをロックする悪意あるソフト", "工場の機械", "新しい通貨"], answer: 0 },
          { q: "被害が身代金を超えるとされる理由は？", options: ["生産停止・顧客の失望・評判の毀損に及ぶから", "身代金だけで済むから", "被害はないから"], answer: 0 },
          { q: "本文の広い教訓は？", options: ["つながった世界でセキュリティは全員の仕事", "専門家だけの問題", "クリックは安全"], answer: 0 }
        ]
      },
      {
        id: "d0727-3",
        title: "Europe Looks for Its Own Rare Earths",
        level: "★★★",
        genre: "世界情勢",
        text: "Modern green technology has a hidden dependence. The powerful magnets inside electric-car motors and wind turbines rely on a group of materials called rare earth elements. For years, the mining and processing of these materials has been dominated by a small number of countries. Now reports suggest that Sweden could become an important new source of rare earths for Europe — a development with large strategic meaning.\nWhy does the source of these materials matter so much? Because whoever controls the supply of a critical material gains power over everyone who needs it. If most of the world's rare earths come from one place, and that source is cut off — by conflict, politics, or export limits — industries everywhere could suddenly struggle. For Europe, which wants to build electric cars and clean energy on a massive scale, depending entirely on distant suppliers is a serious risk.\nDeveloping a home source is not simple. Finding rare earths in the ground is only the first step; the harder challenge is processing them, which is complex, costly, and can harm the environment if not done carefully. Building this capacity takes years of investment and skill, which is why no region can shift its supply overnight.\nStill, the strategic logic is powerful. A reliable domestic supply would make Europe less vulnerable to distant disruptions and give it more control over its own green transition. Even if it costs more than importing, the security may be worth the price.\nThe broader theme is one that appears again and again in today's world: the tension between efficiency and security. The cheapest source is not always the safest, and for materials a society truly cannot do without, many nations are now deciding that some independence is worth paying for.",
        summaryJa: "現代のグリーン技術には隠れた依存がある。EVモーターや風力タービンの強力な磁石は「レアアース」に頼る。長年、その採掘・精錬は少数の国に支配されてきた。今、スウェーデンが欧州の新たなレアアース源になりうると報じられ、大きな戦略的意味を持つ。なぜ供給源が重要か——重要材料の供給を握る者は、それを必要とする皆に対し力を持つからだ。世界のレアアースが一か所に偏り、それが対立・政治・輸出制限で断たれれば、各地の産業が突然苦境に陥る。EVとクリーンエネルギーを大規模に築きたい欧州には、遠方依存は深刻なリスクだ。国内供給の構築は容易でなく、鉱石発見は第一歩で、環境負荷を伴う精錬こそ難しく、年月と技術投資が要る。それでも、信頼できる国内供給は遠方の混乱への脆さを減らし、緑の移行を自ら制御できる。効率と安全の緊張——最安が最安全とは限らず、欠かせない材料では多くの国が「一定の自立には払う価値がある」と判断し始めた。",
        quiz: [
          { q: "レアアースは何に使われる？", options: ["EVモーターや風力タービンの強力な磁石", "食品の保存", "紙の製造"], answer: 0 },
          { q: "供給源が偏ると起きうる問題は？", options: ["供給が断たれると各地の産業が苦境に陥る", "価格が必ず下がる", "何も起きない"], answer: 0 },
          { q: "国内供給構築の難しさは？", options: ["環境負荷を伴う精錬が難しく年月と投資が要る", "鉱石がないこと", "誰も必要としないこと"], answer: 0 }
        ]
      },
      {
        id: "d0727-4",
        title: "Rehearsing in Space",
        level: "★★☆",
        genre: "日本",
        text: "Before doing something difficult and dangerous, it is wise to practice. This simple idea is guiding one of the boldest space plans in years: an ambitious orbital rehearsal for landing astronauts on the Moon. Rather than attempting everything for the first time during the real landing, engineers plan to test the key steps in space first — a careful, methodical approach that reflects a deep principle of good engineering.\nReturning humans to the Moon after decades is enormously complex. Spacecraft must travel far from Earth, meet and connect in orbit, and support astronauts through many delicate steps. A single mistake could endanger lives. By rehearsing critical parts of the mission in space before the actual landing, teams can find and fix problems where the stakes are lower, building confidence for the real attempt.\nThis method — test, learn, and improve before the final performance — is not unique to space. It is how careful engineers, athletes, musicians, and professionals of all kinds prepare for high-pressure moments. Practicing under realistic conditions reveals problems that no amount of planning on paper can predict.\nThere is a lesson here for learners too, including those studying a language. Rehearsal matters. Practicing a presentation before giving it, or having a trial conversation before an important meeting, is the same principle at work: reduce risk and build confidence by trying the hard parts in advance, when mistakes are cheap.\nThe broader wonder is how methodical space exploration has become. What looks like a giant leap is, in reality, the result of countless small, careful steps — each one tested, checked, and rehearsed. Behind every bold achievement lies patient preparation, and the courage to reach the Moon rests on the quiet discipline of practicing first.",
        summaryJa: "難しく危険なことをする前に練習するのは賢明だ。この単純な考えが、近年最も大胆な宇宙計画の一つ——月への有人着陸に向けた野心的な軌道上リハーサル——を導いている。本番の着陸で初めて全てを試すのでなく、鍵となる工程を先に宇宙で試す、優れた工学の原理を反映した慎重な手法だ。数十年ぶりの有人月帰還は極めて複雑で、遠方への航行、軌道上でのランデブーと結合、繊細な多くの工程を要し、一つのミスが命を危険にさらす。本番前に重要部分を宇宙でリハーサルすれば、賭け金の低いうちに問題を見つけ直せ、本番への自信になる。「本番前に試し学び改善する」は宇宙に限らず、技術者・アスリート・音楽家が高圧の場面に備える方法だ。語学学習者にも通じる——プレゼンや重要会議前の予行は、ミスが安いうちに難所を試しリスクを減らし自信を築く同じ原理だ。大胆な達成の裏には忍耐強い準備があり、月へ届く勇気は「まず練習する」静かな規律に支えられている。",
        quiz: [
          { q: "月着陸計画で採られている慎重な手法は？", options: ["本番前に鍵となる工程を宇宙でリハーサルする", "練習なしで本番を行う", "着陸をやめる"], answer: 0 },
          { q: "リハーサルの利点は？", options: ["賭け金の低いうちに問題を見つけ自信を築ける", "時間の無駄になる", "危険が増す"], answer: 0 },
          { q: "語学学習者への教訓は？", options: ["プレゼンや会議前の予行でミスが安いうちに難所を試す", "練習は不要", "本番だけが大事"], answer: 0 }
        ]
      },
      {
        id: "d0727-5",
        title: "Passing Energy, One Particle at a Time",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "Deep inside the world of the very small, scientists study how energy moves from one tiny object to another — and each new understanding can lead to better technology. Recently, researchers discovered a surprising helper in this process: a proton, one of the basic particles inside an atom, that greatly improves how energy travels between tiny structures called quantum dots and nearby molecules.\nQuantum dots are incredibly small crystals, so tiny that the rules of quantum physics shape their behavior. They can absorb and release light in precise, controllable ways, which makes them useful in many technologies — from brighter, more efficient displays to advanced sensors and solar cells. A key challenge is controlling how energy passes from a quantum dot to other materials, because that transfer determines how well a device works.\nThe new research revealed that a proton can act like a tiny assistant, helping energy jump more efficiently from one place to the next. Understanding this hidden step gives scientists a new tool to design better materials — for example, solar cells that capture more sunlight, or displays that use less power.\nWhy does such a small discovery matter? Because much of modern technology is built on precisely controlling energy and light at the smallest scales. A screen, a solar panel, and a medical sensor all depend on getting these tiny transfers right. Each improvement in understanding, however small it seems, can ripple outward into real devices that touch daily life.\nThe deeper wonder is how the largest technologies grow from the smallest details. The glowing screen in your hand and the solar panel on a roof both rely on the quiet, invisible movement of energy between particles. By learning to guide that movement more skillfully, scientists slowly expand what our machines can do — proof that in science, understanding the very small can change the very large.",
        summaryJa: "極めて小さな世界の奥で、科学者はエネルギーが一つの微小物体から別へどう移るかを研究し、新たな理解が良い技術を生む。最近、その過程の意外な助っ人が見つかった——原子内の基本粒子である陽子が、「量子ドット」という微小構造と近くの分子との間のエネルギー移動を大きく改善するのだ。量子ドットは量子物理が振る舞いを支配するほど小さな結晶で、光を精密・制御可能に吸収・放出でき、高効率ディスプレイ・センサー・太陽電池などに有用だ。鍵は量子ドットから他材料へのエネルギー移動の制御で、それが性能を決める。新研究は、陽子が小さな助手のように働き、エネルギーがより効率よく飛び移るのを助けると明かした。この隠れた段階の理解は、より多くの光を捉える太陽電池や低消費電力の画面など、良い材料設計の新しい道具になる。現代技術の多くは最小スケールでのエネルギーと光の精密制御に支えられ、小さな理解の改善が日常の機器へ波及する。最大の技術が最小の細部から育つ——小を理解することが大を変える。",
        quiz: [
          { q: "研究で見つかった「意外な助っ人」は？", options: ["陽子", "電気ケーブル", "レンズ"], answer: 0 },
          { q: "量子ドットが有用な理由は？", options: ["光を精密・制御可能に吸収・放出できる", "とても大きいから", "光らないから"], answer: 0 },
          { q: "本文の深い驚きは？", options: ["最大の技術が最小の細部から育つ", "小さな研究は無意味", "技術は変わらない"], answer: 0 }
        ]
      }
    ]
  },
    {
    date: "2026-07-26",
    passages: [
      {
        id: "d0726-1",
        title: "The Business of Going Back to the Moon",
        level: "★★☆",
        genre: "ビジネス",
        text: "Returning to the Moon is no longer only a government mission — it is becoming a business. NASA recently announced it would award nearly six hundred million dollars for four commercial Moon landings, planned for the coming years, as part of a larger effort to build a permanent base on the lunar surface. Private companies, not just space agencies, will carry the equipment.\nWhy hire companies for something as difficult as landing on the Moon? The answer is the same reason businesses outsource many tasks: competition and specialization lower costs and speed up progress. Instead of building and operating every lander itself, NASA acts as a customer, paying private firms to deliver cargo to the lunar surface. Companies compete to offer the best service at the lowest price, and the ones that succeed can sell the same service again and again.\nThis approach has already transformed the launch industry, where private rockets dramatically cut the cost of reaching orbit. Applying the same model to Moon landings could make lunar missions far more frequent and affordable than in the past, when each one was a rare and hugely expensive government project.\nThere are risks. Landing on the Moon is extremely hard, and some private attempts have failed. A company that loses a spacecraft loses money and reputation. But the potential rewards — a share of a new space economy — are large enough to attract serious investment.\nThe wider lesson is about how industries form. A field that once belonged only to governments is becoming a marketplace, with customers, suppliers, and competition. As with aviation and computing before it, space is following a familiar path: from a rare government achievement to an everyday commercial service — one small business deal at a time.",
        summaryJa: "月に戻ることは政府の使命だけでなくビジネスになりつつある。NASAは、月面基地建設の一環として、今後計画される4回の民間月着陸に約6億ドルを拠出すると発表した。機材を運ぶのは宇宙機関でなく民間企業だ。なぜ月着陸のような難事を企業に委ねるのか——業務委託と同じで、競争と専門化がコストを下げ進歩を速めるからだ。NASAは自ら全着陸機を作らず「顧客」として貨物輸送に対価を払い、企業は最良のサービスを最低価格で競い、成功すれば同じサービスを繰り返し売れる。この方式は打ち上げ産業を既に変え、民間ロケットが軌道到達コストを激減させた。月着陸に応用すれば頻度と手頃さが増す。着陸は難しく失敗もありリスクは高いが、新しい宇宙経済の取り分は投資を呼ぶ。政府だけの分野が顧客・供給者・競争のある市場へ——航空や計算機と同じ道を宇宙も辿る。",
        quiz: [
          { q: "NASAが民間企業に月着陸を委ねる理由は？", options: ["競争と専門化でコストを下げ進歩を速めるため", "宇宙飛行士が足りないから", "月に興味がないから"], answer: 0 },
          { q: "この方式が既に変えた産業は？", options: ["打ち上げ(ロケット)産業", "農業", "漁業"], answer: 0 },
          { q: "本文が示す産業形成の教訓は？", options: ["政府だけの分野が競争のある市場へ変わる", "宇宙は政府専用のまま", "民間は関与できない"], answer: 0 }
        ]
      },
      {
        id: "d0726-2",
        title: "AI Enters the World of Diplomacy",
        level: "★★★",
        genre: "テクノロジー",
        text: "Artificial intelligence has been discussed mainly as a matter of business and industry. Now it is entering a very different arena: high diplomacy. Reports say AI is moving into the same category as nuclear technology, cybersecurity, and arms control, with major powers scheduling talks about how to manage it. This shift marks an important moment in how the world views the technology.\nWhy would nations treat AI like nuclear weapons? Because powerful AI, like powerful weapons, could affect global security. Advanced AI systems might be used to guide military operations, spread disinformation at massive scale, launch cyberattacks, or shift the balance of economic power. When a technology becomes strong enough to change the balance between nations, governments start to negotiate rules for it, just as they did for nuclear arms decades ago.\nDiplomacy around technology is difficult. Countries both compete and cooperate at the same time. Each wants the advantages that AI can bring, so none wishes to fall behind. Yet all share an interest in avoiding dangerous outcomes, such as accidents, misunderstandings, or an uncontrolled race. The challenge is to build trust and set limits without giving up too much advantage — a delicate balance that has always defined arms control.\nThere are reasons for hope and caution. History shows that rival nations can agree on rules for dangerous technologies when the risks are clear enough; treaties on nuclear weapons are one example. But AI is harder to define and monitor than a missile, and it changes quickly, which makes agreements difficult to write and enforce.\nThe deeper significance is clear: the world now sees AI not just as a tool for making money, but as a force that could shape the future of nations. How humanity chooses to govern it may become one of the defining questions of our century.",
        summaryJa: "AIは主にビジネス・産業の問題として語られてきたが、今や高度な外交の舞台に入りつつある。報道では、AIは核技術・サイバーセキュリティ・軍備管理と同じ範疇に入り、主要国が管理の協議を予定している。世界のAI観の重要な転換点だ。なぜ核兵器のように扱うのか——強力なAiは軍事作戦の誘導、大規模な偽情報、サイバー攻撃、経済力の均衡変化など安全保障に関わりうるからだ。国家間の均衡を変える技術には、かつての核と同様、ルール交渉が始まる。技術外交は難しく、各国は競争と協力を同時に行う。誰も後れを取りたくない一方、事故・誤解・制御不能な競争は避けたい。優位を失わず信頼と制限を築く微妙な均衡だ。核条約のように危険な技術で合意した歴史は希望だが、AIはミサイルより定義・監視が難しく速く変わる。世界はAiを金儲けの道具でなく国家の未来を形づくる力と見始めた——その統治は今世紀の中心的問いになりうる。",
        quiz: [
          { q: "AIが新たに入りつつある領域は？", options: ["核技術や軍備管理と同じ高度な外交の範疇", "スポーツ", "料理"], answer: 0 },
          { q: "国家がAIをルール交渉の対象にする理由は？", options: ["国家間の安全保障の均衡に関わりうるから", "AIが安いから", "誰も使わないから"], answer: 0 },
          { q: "AIの合意が核兵器より難しい理由は？", options: ["定義・監視が難しく速く変わるから", "AIは危険でないから", "変化しないから"], answer: 0 }
        ]
      },
      {
        id: "d0726-3",
        title: "Do Small Green Choices Really Matter?",
        level: "★★☆",
        genre: "世界情勢",
        text: "Many people wonder whether their personal efforts to help the environment — recycling, eating less meat, driving less — make any real difference against a problem as huge as climate change. Some even worry that focusing on small personal choices distracts people from demanding big changes in laws and industry. A recent study offers a reassuring answer: personal green choices do not reduce support for large-scale reforms. In fact, the two go together.\nThe worry made sense in theory. If people feel they have 'done their part' by recycling, might they stop pushing for the bigger changes — new energy systems, stricter rules for companies — that matter most? Some argued that emphasizing personal responsibility lets governments and big polluters off the hook.\nThe study suggests this fear is largely unfounded. People who make green choices in their own lives are, if anything, more likely to support major environmental policies, not less. Acting on a value seems to strengthen it, rather than satisfy it. Someone who bothers to recycle or eat less meat often cares more about the issue overall, and that concern extends to supporting broader action.\nThis matters because solving climate change requires both individual and collective effort. Personal choices alone cannot fix a global problem — that needs changes in energy, transport, and industry, driven by governments and companies. But personal action and political support are not rivals competing for a limited supply of concern. They reinforce each other.\nThe broader lesson reaches beyond the environment. In many areas of life, small personal actions and large systemic changes are often seen as opposites, forcing a choice between them. This research suggests a more hopeful view: doing something yourself and demanding bigger change can grow from the same root — and strengthen each other along the way.",
        summaryJa: "リサイクルや肉を減らす、車に乗らないといった個人の環境努力が、気候変動という巨大問題に本当に意味があるのか疑う人は多い。個人の小さな選択に注目すると、法や産業の大改革を求める気持ちがそがれると心配する声もある。最近の研究は安心できる答えを示す——個人の環境選択は大規模改革への支持を減らさず、むしろ両者は一緒に進む。理屈上は「自分の役目は果たした」と感じて大改革を求めなくなる懸念があったが、研究では、生活で環境選択をする人ほど大きな環境政策も支持しやすい。価値に沿って行動するとその価値は満たされるより強まるようだ。気候変動の解決は個人と集団の両方の努力を要し、個人の選択だけでは足りずエネルギー・交通・産業の変化が要る。だが個人行動と政治的支持は限られた関心を奪い合う競争相手でなく、互いを強め合う。小さな個人行動と大きな制度変革は対立でなく同じ根から育ちうる。",
        quiz: [
          { q: "研究が示した安心できる答えは？", options: ["個人の環境選択は大改革への支持を減らさない", "個人の選択は無意味", "リサイクルは有害"], answer: 0 },
          { q: "価値に沿って行動すると起きることは？", options: ["その価値が満たされるより強まる", "関心が消える", "何も変わらない"], answer: 0 },
          { q: "個人行動と政治的支持の関係は？", options: ["競争相手でなく互いを強め合う", "常に対立する", "無関係"], answer: 0 }
        ]
      },
      {
        id: "d0726-4",
        title: "A Nation Betting on New Industries",
        level: "★★☆",
        genre: "日本",
        text: "Every country must decide where to focus its energy and money as the economy changes. Japan has made its choice clear: it is betting on a group of advanced fields — artificial intelligence, robotics, mobility, space, biotechnology, and manufacturing technology — supported by government backing, demand from established companies, and a growing network of startup hubs across the country.\nWhy these particular fields? Because each builds on a strength Japan already has, or addresses a challenge it must solve. Robotics and manufacturing draw on decades of engineering excellence. Space and mobility connect to major existing industries. Biotechnology addresses the needs of an aging society. By choosing areas where it can compete, Japan aims to turn its existing advantages into future growth.\nGovernment support plays a large role. Through funding, favorable policies, and programs that link startups with big companies and investors, the state tries to help new industries grow faster than they would alone. Meanwhile, established firms provide something startups badly need: real customers with real budgets, ready to buy new technology.\nThis strategy carries both promise and risk. Focusing on chosen fields can concentrate resources where they matter most, helping a country lead. But betting on the wrong areas, or moving too slowly, can leave a nation behind as technology shifts. No one can perfectly predict which industries will define the future.\nThe broader lesson applies to businesses and individuals too. With limited time and money, everyone must choose where to focus. Building on your existing strengths, while addressing the challenges you cannot avoid, is often the wisest strategy. For a person or a nation, success comes less from doing everything, and more from choosing the right things to do well.",
        summaryJa: "どの国も経済の変化に応じてどこに力と資金を注ぐか決めねばならない。日本は明確に選んだ——AI・ロボティクス・モビリティ・宇宙・バイオ・製造技術という先進分野に、政府支援・既存企業の需要・全国のスタートアップ拠点網で賭ける。なぜこれらか。各分野が日本の既存の強みを活かすか、解くべき課題に応えるからだ。ロボット・製造は長年の技術力、宇宙・モビリティは主要既存産業、バイオは高齢社会の需要に対応。競争できる領域を選び、既存の優位を将来の成長に変えようとする。資金・政策・大企業や投資家との橋渡しで新産業の成長を後押しし、既存企業は「実際の予算を持つ顧客」を提供する。分野を絞れば資源を集中できるが、選択を誤り遅れれば取り残される。限られた時間と資金では誰もが集中先を選ぶ——既存の強みを活かしつつ避けられぬ課題に応えるのが賢明で、成功は「全部やる」より「正しいことを選んでうまくやる」ことから来る。",
        quiz: [
          { q: "日本が賭ける分野に含まれないものは？", options: ["AI・ロボティクス・宇宙", "バイオ・製造技術", "石炭採掘の拡大"], answer: 2 },
          { q: "既存企業がスタートアップに提供するものは？", options: ["実際の予算を持つ顧客", "無料の労働力", "宇宙船"], answer: 0 },
          { q: "本文が示す賢明な戦略は？", options: ["既存の強みを活かしつつ避けられぬ課題に応える", "とにかく全部やる", "何も選ばない"], answer: 0 }
        ]
      },
      {
        id: "d0726-5",
        title: "The Mystery of the SuperAgers",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "Most of us expect memory to fade as we grow old. But a rare group of people, sometimes called 'SuperAgers,' keep sharp memories well into their eighties and beyond, performing as well as people decades younger. Scientists studying them recently made a puzzling discovery: the genes of SuperAgers look much like those of typical older adults. Whatever protects their memory does not seem to lie simply in obvious genetic differences.\nThis is surprising because we often assume that exceptional abilities come from special genes. If SuperAgers' DNA looks ordinary, then something else must be protecting their brains. Researchers suspect a combination of factors — perhaps the way their genes are used rather than the genes themselves, along with lifestyle, mental activity, social connection, and forces we do not yet understand.\nWhy study these rare individuals? Because they may hold clues to preventing the memory loss that affects millions as they age, including diseases like Alzheimer's. If scientists can discover what keeps a SuperAger's brain healthy, they might find ways to help others protect their memory too. Studying the exceptional, in other words, can teach us how to help everyone.\nThe research also carries a hopeful message. If sharp memory in old age is not fixed entirely by the genes we are born with, then our choices and habits — staying mentally and socially active, caring for our health — may play a meaningful role. Nothing is guaranteed, but the SuperAgers suggest that a healthy aging brain is not purely a matter of luck.\nThe deeper wonder is how much we still have to learn about ourselves. Even the brain we carry every day holds mysteries, and understanding rare people who age exceptionally well may help all of us grow older with our minds intact.",
        summaryJa: "多くは加齢で記憶が衰えると思っている。だが「スーパーエイジャー」と呼ばれる稀な人々は80代以降も鋭い記憶を保ち、数十歳若い人並みの成績を示す。研究者は不思議な発見をした——スーパーエイジャーの遺伝子は普通の高齢者とよく似ている。記憶を守る何かは、明白な遺伝的差異だけにはないようだ。優れた能力は特別な遺伝子から来ると考えがちだが、DNAが普通なら別の何かが脳を守っている。研究者は、遺伝子そのものより使われ方、生活習慣、知的活動、社会的つながり、未解明の要因の組み合わせを疑う。彼らを研究するのは、加齢に伴う記憶低下やアルツハイマーの予防の手がかりになりうるからだ。稀な例外の研究が万人を助ける道を教える。希望のメッセージもある——老年の鋭い記憶が生来の遺伝子で完全に決まらないなら、知的・社会的活動や健康管理といった選択や習慣が意味を持ちうる。保証はないが、健康な老いた脳は単なる運任せではないと示す。日々使う脳にも謎があり、例外を理解することが皆の健やかな老いを助けうる。",
        quiz: [
          { q: "スーパーエイジャーとは？", options: ["高齢でも鋭い記憶を保つ稀な人々", "若くして記憶を失う人", "眠らない人"], answer: 0 },
          { q: "研究者が驚いた発見は？", options: ["彼らの遺伝子が普通の高齢者と似ていること", "彼らが超人だったこと", "記憶がないこと"], answer: 0 },
          { q: "この研究の希望のメッセージは？", options: ["選択や習慣が記憶の維持に意味を持ちうる", "すべては運任せ", "習慣は無意味"], answer: 0 }
        ]
      }
    ]
  },
    {
    date: "2026-07-25",
    passages: [
      {
        id: "d0725-1",
        title: "What Makes a Region Good for Startups",
        level: "★★☆",
        genre: "ビジネス",
        text: "When people think of Japanese business, they often picture Tokyo. But Japan's startup world is spreading, and different regions are becoming known for different specialties. The Kansai area around Osaka, the Aichi region near Nagoya, and cities like Fukuoka and Sapporo are each attracting particular kinds of new companies, research spin-offs from universities, and foreign firms entering the market.\nWhy do certain places suit certain businesses? A region's history shapes its strengths. Areas with a long tradition of manufacturing offer skilled engineers and nearby factories, which is ideal for robotics or hardware startups. Cities with strong universities and hospitals attract biotech and medical companies. A place near ports and airports may suit businesses that trade internationally. Startups thrive where the local environment matches what they need.\nGovernment support plays a role too. Local governments compete to attract new companies by offering lower costs, office space, and programs that connect startups with investors and mentors. A city that succeeds in building a cluster in one field often finds that success feeds on itself: more talent arrives, more suppliers open, and the area becomes known as the place to be for that industry.\nThe practical lesson applies to workers and founders alike. Where you build a business, or where you look for work, matters. Choosing a location whose strengths match your goals — the right skills, customers, and support nearby — can be as important as the idea itself. In business, geography is not just a backdrop; it is part of the strategy.",
        summaryJa: "日本のビジネスというと東京を思い浮かべがちだが、スタートアップの世界は広がり、地域ごとに得意分野ができつつある。大阪圏の関西、名古屋圏の愛知、福岡や札幌などが、それぞれ特定の新興企業や大学発スピンオフ、外資を引き寄せている。ものづくりの伝統がある地域は技術者と工場が近くロボット・ハードに向き、大学・病院が強い都市はバイオ・医療を呼ぶ。港や空港に近ければ国際取引の企業に向く。自治体もコスト減・オフィス・投資家やメンターとの橋渡しで誘致を競い、一分野の集積に成功すると人材や供給業者が集まり自己強化する。どこで起業し、どこで職を探すかは重要で、強みと目標が合う立地選びはアイデアと同じくらい大切だ。ビジネスで地理は背景でなく戦略の一部だ。",
        quiz: [
          { q: "ものづくりの伝統がある地域が向くのは？", options: ["ロボットやハードウェアのスタートアップ", "農業のみ", "観光のみ"], answer: 0 },
          { q: "自治体がスタートアップ誘致で提供するものは？", options: ["コスト減・オフィス・投資家との橋渡し", "無料の休暇", "商品の販売"], answer: 0 },
          { q: "本文の実務的教訓は？", options: ["強みと目標が合う立地選びはアイデアと同じくらい大切", "立地は関係ない", "東京以外では起業できない"], answer: 0 }
        ]
      },
      {
        id: "d0725-2",
        title: "Tiny Brains Grown in the Lab",
        level: "★★★",
        genre: "テクノロジー",
        text: "One of the most remarkable tools in modern medicine is almost too strange to believe: miniature models of the human brain, grown in a laboratory from a patient's own cells. In a recent study, these tiny brain models revealed striking differences in how Alzheimer's-affected tissue responded to a common antidepressant — a discovery that could shape future treatments.\nHow can scientists grow a brain model? They take ordinary cells from a person — often from skin or blood — and use special techniques to turn them back into stem cells, which can become almost any kind of cell. Guided carefully, these stem cells organize themselves into small, three-dimensional clusters that mimic parts of a real brain. They are far simpler than a true brain and cannot think or feel, but they contain real human brain cells behaving in realistic ways.\nWhy is this so useful? Because studying disease in a living human brain is nearly impossible. These models let scientists watch how a disease develops and how cells react to drugs, using tissue that carries a specific patient's own genetics. That means researchers can test which treatment might work best for a particular person, moving toward truly personalized medicine.\nThere are limits and questions. The models are still simplified, results in a dish do not always match a whole body, and growing brain-like tissue raises careful ethical discussions. Scientists proceed thoughtfully, keeping the models simple and their purposes clear.\nThe broader wonder is how far biology has come. Using a few of a patient's own cells, researchers can now build a tiny, living tool to study one of the most complex objects in the universe — the human brain — and search, cell by cell, for better ways to heal it.",
        summaryJa: "現代医療の驚くべき道具の一つが、患者自身の細胞から実験室で育てる小型の脳モデルだ。最近の研究で、この小さな脳モデルが、アルツハイマーの組織がありふれた抗うつ薬にどう反応するかの顕著な違いを明かし、将来の治療に示唆を与えた。皮膚や血液の細胞を幹細胞に戻し、導いて立体の塊にすると本物の脳の一部を模す。思考や感情はないが、実際のヒト脳細胞が現実的に振る舞う。生きた人の脳での病気研究はほぼ不可能なため、これで病気の進行や薬への反応を、特定患者の遺伝情報を持つ組織で観察でき、個別化医療へ近づく。モデルは簡略で、皿の結果が全身と一致しないこともあり、倫理的議論も伴うため慎重に進める。患者の数個の細胞から、宇宙で最も複雑な脳を研究する生きた道具を作れる——生物学の到達点を示す。",
        quiz: [
          { q: "脳モデルは何から作られる？", options: ["患者自身の細胞(皮膚や血液)から", "動物の脳から", "金属から"], answer: 0 },
          { q: "脳モデルが有用な理由は？", options: ["生きた人の脳での研究がほぼ不可能だから", "脳より賢いから", "安いから"], answer: 0 },
          { q: "この技術の限界・課題に含まれるものは？", options: ["モデルは簡略で倫理的議論も伴う", "全く課題がない", "思考して感情を持つ"], answer: 0 }
        ]
      },
      {
        id: "d0725-3",
        title: "Forecasting the Melting Ice",
        level: "★★★",
        genre: "世界情勢",
        text: "Far from most people's daily lives, at the bottom of the world, lies a force that could reshape coastlines everywhere: the ice of Antarctica. Scientists have made an important advance, suggesting they may be able to reliably forecast how much Antarctic ice will melt through the middle of this century. That knowledge could give governments a vital head start in preparing for rising seas.\nWhy does Antarctic ice matter so much? Because it holds an enormous amount of frozen water. If large parts of it melt and flow into the ocean, sea levels around the world rise. Even a modest rise threatens low-lying cities, coastal farmland, and island nations, where hundreds of millions of people live. Understanding how fast this will happen is one of the most important questions in climate science.\nForecasting ice loss is extremely difficult. Ice behaves in complex ways, affected by ocean temperatures, wind, and the shape of the land beneath it. For years, predictions varied widely, making it hard for governments to plan. A more reliable forecast, even for the next few decades, is therefore a major step forward.\nWhy does better prediction help? Because preparation takes time. Building sea walls, redesigning drainage, protecting freshwater supplies, and, in some cases, planning to move communities all require years or decades of work. A clearer picture of what is coming lets societies act early, when it is cheaper and more effective, rather than scrambling in a crisis.\nThe deeper message is about the value of knowledge itself. We cannot stop all sea-level rise, but understanding it gives us the power to prepare. In facing a changing planet, good science is not just about explaining the world — it is about buying precious time to protect the people who live in it.",
        summaryJa: "多くの人の日常から遠い世界の南端に、各地の海岸線を作り変えうる力——南極の氷がある。科学者は、今世紀半ばまでの南極の氷の融解量を信頼できる形で予測できるかもしれないという重要な前進を遂げた。これは海面上昇への備えで各国に貴重な先行時間を与える。南極の氷は膨大な水を蓄え、大量に海へ流れれば世界の海面が上がる。わずかな上昇でも低地の都市・沿岸農地・島国を脅かし、数億人が暮らす。融解の速さの理解は気候科学の最重要問題の一つだ。氷は海水温・風・地形に左右され複雑で、予測は長く大きくばらつき計画が難しかった。数十年でも信頼できる予測は大きな前進だ。防潮堤・排水設計・淡水確保・移転計画は年月を要するため、早く安く効果的に動ける。科学は世界を説明するだけでなく、人々を守る貴重な時間を稼ぐ。",
        quiz: [
          { q: "南極の氷が重要な理由は？", options: ["融けて海へ流れると世界の海面が上がるから", "観光地だから", "寒いから"], answer: 0 },
          { q: "氷の融解予測が難しい理由は？", options: ["海水温・風・地形に左右され複雑だから", "誰も興味がないから", "氷が動かないから"], answer: 0 },
          { q: "より良い予測が助けになる理由は？", options: ["防潮堤などの備えは年月を要し、早く動けるから", "予測は無意味だから", "備えは不要だから"], answer: 0 }
        ]
      },
      {
        id: "d0725-4",
        title: "The Ups and Downs of Public Opinion",
        level: "★★☆",
        genre: "日本",
        text: "In a democracy, leaders live and die by public opinion, and that opinion can change quickly. Recent polls in Japan showed support for the government falling several points in a single month, with one survey putting approval near half after it had been higher before. Numbers like these are watched closely, because they shape what a government can and cannot do.\nWhy does approval rise and fall? Many things move it. A strong economy, successful policies, or skillful handling of a crisis can lift a leader's support. Rising prices, scandals, unpopular decisions, or a sense that promises are not being kept can pull it down. Because voters react to daily events, approval ratings can swing based on the news of the moment, not only on long-term results.\nApproval ratings matter for practical reasons. A popular government finds it easier to pass laws, because other politicians want to be on the winning side. A government losing support may struggle to act boldly, fearing further backlash, and rivals grow more confident. In this way, public opinion becomes a kind of political currency — one that can be spent on difficult decisions but also quickly lost.\nThere is a lesson here about leadership in any field, not just politics. Trust and support are powerful but fragile. They are built slowly through consistent results and honest communication, yet can fall fast when people feel let down. Leaders — of countries, companies, or teams — who understand this treat public confidence as something to be earned again and again, never simply assumed.",
        summaryJa: "民主主義では指導者は世論に生かされ滅ぼされ、世論は素早く変わる。日本の最近の世論調査で、政権支持率が一か月で数ポイント下がり、以前より高かった支持が半分近くになったものもあった。この数字は政府にできること・できないことを左右するため注視される。支持は、好景気・成功した政策・危機対応で上がり、物価高・不祥事・不人気な決定・約束不履行の感覚で下がる。有権者は日々の出来事に反応するため、長期成果でなくその時のニュースで揺れる。人気の政権は他の政治家が勝ち馬に乗りたがり法案を通しやすく、支持を失う政権は反発を恐れ大胆に動けず、対立勢力が勢いづく。世論は難しい決定に使えるが素早く失う「政治的通貨」だ。信頼と支持は強力だが脆く、着実な成果と誠実な対話で少しずつ築かれ、失望で速く崩れる——政治に限らず指導の教訓だ。",
        quiz: [
          { q: "支持率が下がる要因として挙げられていないものは？", options: ["物価高や不祥事", "約束の不履行", "良い天気が続くこと"], answer: 2 },
          { q: "支持率が政府に実務上重要な理由は？", options: ["人気があると法案を通しやすいから", "数字が面白いから", "無関係だから"], answer: 0 },
          { q: "本文の指導の教訓は？", options: ["信頼は着実な成果と誠実な対話で築かれ、失望で速く崩れる", "支持は永久に続く", "対話は不要"], answer: 0 }
        ]
      },
      {
        id: "d0725-5",
        title: "The Hidden Cost of Sweet Drinks",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "A cold, sweet drink on a hot day feels harmless — even refreshing. But a long-term study following people for twenty-five years found that frequently drinking soda, sports drinks, and fruit juice, especially starting in childhood, was linked to a higher risk of high blood pressure in adulthood. The finding is a reminder that small daily habits can have large effects over time.\nWhy would sweet drinks affect blood pressure decades later? Scientists point to several possible reasons. These drinks contain large amounts of sugar, which can lead to weight gain, and excess weight is a known cause of high blood pressure. Sugary drinks may also affect the body's handling of salt and blood vessels in ways that raise pressure over the years. And habits formed in childhood tend to last, so a child who drinks a lot of sweet beverages often becomes an adult who does the same.\nHigh blood pressure matters because it is a major cause of heart disease and stroke, two of the leading causes of death worldwide. Often it has no symptoms for years, quietly damaging the body — which is why it is sometimes called a 'silent' condition. Small changes early in life can lower the risk significantly.\nThe study points to simple, practical choices. Water is the healthiest everyday drink, and even fruit juice, though it sounds healthy, is high in sugar and best enjoyed in moderation. Helping children develop a taste for less sweet drinks may protect their health for decades.\nThe wider lesson is about the power of habits repeated over time. A single sweet drink does no harm, but the same choice made daily for years can quietly shape our health. Understanding this helps us see everyday decisions not as isolated moments, but as small investments — for better or worse — in the person we will become.",
        summaryJa: "暑い日の冷たい甘い飲み物は無害に、むしろ爽やかに感じる。だが25年追跡した研究で、特に子ども時代から炭酸飲料・スポーツドリンク・果汁を頻繁に飲むことが、成人後の高血圧リスク上昇と関連すると分かった。小さな日々の習慣が長期に大きな影響を持つと気づかせる。理由として、多量の糖が体重増を招き高血圧の要因になること、塩の処理や血管への影響、子ども時代の習慣が続きやすいことが挙げられる。高血圧は心臓病・脳卒中の主因で、長年無症状で体を蝕むため「沈黙の」状態と呼ばれる。早期の小さな変化でリスクを下げられる。水が最も健康的で、健康的に聞こえる果汁も糖が多くほどほどが良い。子どもが甘さ控えめの飲み物を好むようにすれば数十年の健康を守れる。一杯は無害でも、毎日の同じ選択が健康を静かに形づくる——日々の決定は「なりたい自分への小さな投資」だ。",
        quiz: [
          { q: "25年の研究が示した関連は？", options: ["甘い飲み物の頻繁な摂取と成人後の高血圧リスク", "甘い飲み物と視力", "甘い飲み物と身長"], answer: 0 },
          { q: "高血圧が「沈黙の」状態と呼ばれる理由は？", options: ["長年無症状で体を蝕むから", "音がするから", "すぐ治るから"], answer: 0 },
          { q: "本文が勧める選択は？", options: ["水を基本にし、果汁もほどほどにする", "甘い飲み物を増やす", "水を避ける"], answer: 0 }
        ]
      }
    ]
  }
  ] };
