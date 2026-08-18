/* デイリー配信リーディング
 * 毎朝の自動ルーチンがこのファイルを丸ごと上書き生成する（直近 7 日分を保持）。
 * days は日付降順。各 day = { date: "YYYY-MM-DD", passages: [readingPassages と同スキーマ + genre] }
 * このファイル以外は手書きデータであり、ルーチンは触らない。
 */
window.KE_DATA = window.KE_DATA || {};

KE_DATA.dailyReading = { days: [
    {
    date: "2026-08-18",
    passages: [
      {
        id: "d0818-1",
        title: "When Interest Rates Rise",
        level: "★★★",
        genre: "ビジネス",
        text: "Interest rates are one of the most powerful forces in the economy, yet many people find them confusing. Recently, an important interest rate in Japan rose to its highest level in about thirty years. To understand why this matters, it helps to know what interest rates actually do.\nAn interest rate is the cost of borrowing money. When rates are low, loans are cheap, so people and companies borrow more to buy homes, build factories, and grow their businesses. When rates rise, borrowing becomes more expensive, and this slows spending across the whole economy.\nWhy would rates rise? One common reason is inflation — when prices are climbing, higher interest rates can help cool the economy and keep prices under control. Rates can also rise when investors worry about the future and demand more reward for lending their money.\nRising rates affect almost everyone. A family with a home loan may pay more each month. A company may delay building a new factory. Governments, too, must pay more to borrow, which can strain their budgets. On the other hand, savers may finally earn a little more on the money they keep in the bank.\nBalancing all this is delicate work. If rates rise too fast, the economy can slow too much; if they stay too low, prices may climb out of control.\nFor learners of business English, interest rates are worth understanding. They are a hidden dial that shapes home prices, company plans, and national budgets — a single number with the power to touch nearly every part of economic life.",
        summaryJa: "金利は経済で最も強力な力の一つだが、多くの人が分かりにくいと感じる。最近、日本のある重要な金利が、約30年で最高の水準に上がった。なぜこれが重要かを理解するには、金利が実際に何をするかを知ると助けになる。金利とは、お金を借りる費用だ。金利が低いと、ローンが安いので、人や企業は家を買い、工場を建て、事業を育てるために多く借りる。金利が上がると、借金はより高くつき、経済全体の支出が鈍る。なぜ金利は上がるのか。よくある理由の一つはインフレ——物価が上がっているとき、高い金利は経済を冷やし物価を抑える助けになりうる。投資家が将来を不安に思い、お金を貸す見返りをより多く求めるときも上がりうる。金利上昇はほぼ全員に影響する。住宅ローンのある家庭は毎月より多く払うかもしれない。企業は新工場の建設を遅らせるかもしれない。政府も借りるのにより多く払わねばならず、予算を圧迫しうる。一方で、貯蓄する人は、銀行に置くお金でようやく少し多く得られるかもしれない。これらすべての釣り合いを取るのは繊細な仕事だ。金利が速く上がりすぎれば経済は鈍りすぎ、低すぎれば物価が制御を失って上がりうる。ビジネス英語の学習者には、金利は理解する価値がある。住宅価格・企業の計画・国家予算を形づくる隠れたダイヤルであり——経済生活のほぼあらゆる部分に触れる力を持つ、一つの数字なのだ。",
        quiz: [
          { q: "金利とは何か？", options: ["お金を借りる費用", "貯金の総額", "会社の数"], answer: 0 },
          { q: "金利が上がる理由の一つは？", options: ["インフレを冷やし物価を抑えるため", "お金を配るため", "借金を増やすため"], answer: 0 },
          { q: "金利上昇の影響に含まれるものは？", options: ["住宅ローンの返済が増え、貯蓄の利息は少し増えうる", "誰にも影響しない", "物価だけが下がる"], answer: 0 }
        ]
      },
      {
        id: "d0818-2",
        title: "The Rise of Humanoid Robots",
        level: "★★☆",
        genre: "テクノロジー",
        text: "For decades, robots that look and move like people have appeared mainly in films and dreams. Now they are becoming real products. Recently, a major robot maker prepared to sell shares to the public, a sign that humanoid robots — machines built in the shape of a human body — are turning into a serious industry.\nWhy build robots shaped like people? Much of the world is designed for the human body: doors, stairs, tools, and workspaces all fit our shape. A robot with two arms, two legs, and hands can, in theory, use these same spaces and objects without needing everything to be redesigned. That makes a human-shaped robot flexible and useful in many settings.\nWhat could they do? Supporters imagine humanoid robots working in factories and warehouses, helping in shops, or even assisting people at home with everyday tasks. Combined with modern artificial intelligence, such robots could learn to handle a wide range of jobs.\nThere are real challenges. Building a machine that walks smoothly, balances, and handles delicate objects is extremely difficult. These robots are still expensive, and they must be proven safe around people. Many promises may take years to come true.\nStill, the direction is striking. Companies and investors are betting large sums that human-shaped robots will become an important part of the future. Whether or not they live up to the hype, their arrival marks a new chapter — one in which machines may increasingly share not just our work, but the very spaces we live and move in.",
        summaryJa: "何十年もの間、人のように見え動くロボットは、主に映画や夢の中に現れてきた。今、それが現実の製品になりつつある。最近、ある大手ロボットメーカーが株式を公開する準備を進めた——人間の体の形に作られた機械、ヒューマノイドロボットが、本格的な産業になりつつある兆しだ。なぜ人の形のロボットを作るのか。世界の多くは人間の体に合わせて設計されている——扉・階段・道具・作業空間はすべて私たちの形に合う。二本の腕、二本の脚、手を持つロボットは、理論上、すべてを設計し直さずに同じ空間や物を使える。それがヒト型ロボットを、多くの場面で柔軟で有用にする。何ができるのか。支持者は、工場や倉庫で働き、店で手伝い、あるいは家庭で日々の作業を助けるヒューマノイドロボットを思い描く。現代のAIと組み合わせれば、こうしたロボットは幅広い仕事を扱えるよう学べるかもしれない。現実の課題もある。滑らかに歩き、バランスを取り、繊細な物を扱う機械を作るのは極めて難しい。これらのロボットはまだ高価で、人の周りで安全だと証明せねばならない。多くの約束は実現に何年もかかるかもしれない。それでも方向は鮮烈だ。企業と投資家は、ヒト型ロボットが未来の重要な一部になると多額を賭けている。誇大な宣伝に応えるかどうかにかかわらず、その登場は新しい章を告げる——機械が私たちの仕事だけでなく、暮らし動く空間そのものをも、ますます共有しうる章を。",
        quiz: [
          { q: "なぜ人の形のロボットを作るのか？", options: ["世界が人間の体に合わせて設計され同じ空間や物を使えるから", "人より小さいから", "電気が要らないから"], answer: 0 },
          { q: "ヒューマノイドロボットの想定される用途は？", options: ["工場・倉庫・店・家庭での作業の手伝い", "空を飛ぶこと", "星を作ること"], answer: 0 },
          { q: "本文が挙げる課題は？", options: ["滑らかに歩き繊細な物を扱うのが難しく高価で安全性の証明も要る", "簡単で安いこと", "用途が無いこと"], answer: 0 }
        ]
      },
      {
        id: "d0818-3",
        title: "The Amazon at a Crossroads",
        level: "★★★",
        genre: "世界情勢",
        text: "The Amazon rainforest, spread across several countries in South America, is often called the 'lungs of the planet.' It is home to an astonishing variety of plants and animals, and it plays a huge role in the health of the whole Earth. Recently, scientists warned that the Amazon may be closer than they thought to a dangerous 'tipping point.'\nWhat is a tipping point? It is a moment when a system changes so much that it cannot easily return to how it was before. Scientists fear that if too much of the Amazon is cut down or damaged by drought and fire, the forest could begin to dry out and slowly turn into something more like grassland — a change that would be very hard to reverse.\nWhy does this matter to the whole world? The Amazon stores enormous amounts of carbon and helps control rainfall far beyond South America. It also holds countless species found nowhere else. Losing large parts of it would affect the climate, weather, and living things across the planet.\nThe good news is that a tipping point is a warning, not a certainty. Protecting the forest, slowing the clearing of trees, and helping it recover can keep it healthy. Many countries, scientists, and local communities are working to do exactly that.\nThe Amazon's story is a reminder that our planet's great natural systems are connected and fragile. What happens to a distant forest reaches all of us — and protecting it is a task the whole world shares.",
        summaryJa: "南米の複数の国にまたがって広がるアマゾンの熱帯雨林は、しばしば「地球の肺」と呼ばれる。驚くほど多様な植物と動物の住処であり、地球全体の健康に大きな役割を果たす。最近、科学者は、アマゾンが思っていたより危険な「転換点（ティッピングポイント）」に近いかもしれないと警告した。転換点とは何か。系が大きく変わりすぎて、以前の状態に容易には戻れなくなる瞬間だ。アマゾンの多くが伐採されたり干ばつと火事で損なわれたりすると、森が乾き始め、ゆっくり草原のようなものに変わりうると科学者は恐れる——元に戻すのが非常に難しい変化だ。なぜこれが世界全体に重要か。アマゾンは膨大な炭素を蓄え、南米をはるかに超えて降雨の制御を助ける。他のどこにもいない無数の種も抱える。その大部分を失えば、地球中の気候・天気・生き物に影響する。良い知らせは、転換点は警告であって確定ではないことだ。森を守り、伐採を緩め、回復を助ければ、健康に保てる。多くの国・科学者・地元の地域が、まさにそれをしようと取り組んでいる。アマゾンの物語は、地球の大きな自然の仕組みがつながり、壊れやすいことを思い出させる。遠い森に起きることは私たち皆に届く——そしてそれを守ることは、世界全体が分かち合う務めなのだ。",
        quiz: [
          { q: "「転換点」とは何か？", options: ["系が大きく変わり以前に容易に戻れなくなる瞬間", "森が広がる時", "雨が止む日"], answer: 0 },
          { q: "アマゾンが世界に重要な理由は？", options: ["膨大な炭素を蓄え遠くの降雨も制御し多くの種を抱えるから", "南米だけに関係するから", "無関係だから"], answer: 0 },
          { q: "本文が伝える良い知らせは？", options: ["転換点は警告であって確定ではなく守れば健康に保てる", "もう手遅れである", "森は不要である"], answer: 0 }
        ]
      },
      {
        id: "d0818-4",
        title: "More Than Getting Clean: The Japanese Bath",
        level: "★★☆",
        genre: "日本",
        text: "In many countries, a bath is simply a way to wash the body. In Japan, bathing is something more — a daily ritual of rest, warmth, and quiet pleasure. Understanding the Japanese bath is a small window into how a culture values calm and care in everyday life.\nHow is it different? In a Japanese home, people wash and rinse their bodies before getting into the bath. The bathtub, called ofuro, is not for cleaning but for soaking in hot water to relax. Because the body is already clean, the same warm water can be shared by the whole family, one after another.\nJapan is also famous for its onsen, natural hot springs found across the country. People travel to soak in these mineral-rich waters, often surrounded by beautiful mountains or forests. A visit to an onsen is a popular way to rest and escape the stress of daily life.\nBathing this way has real benefits. Warm water relaxes tired muscles, eases stress, and helps people sleep better. Just as important, it creates a quiet moment in the day — a time to slow down, breathe, and let go of worries.\nThere are simple customs to follow, such as washing first and keeping the shared water clean, which reflect a spirit of respect for others.\nThe Japanese bath, then, is not only about being clean. It is about comfort, health, and a gentle daily pause — a reminder that even a simple act, done with care, can become a small ceremony of rest.",
        summaryJa: "多くの国で、入浴は単に体を洗う方法だ。日本では、入浴はそれ以上のもの——休息・温もり・静かな喜びの日々の儀式だ。日本の風呂を理解することは、ある文化が日常でどう静けさと気配りを大切にするかをのぞく小さな窓だ。何が違うのか。日本の家では、風呂に入る前に体を洗い流す。「お風呂」と呼ばれる浴槽は、洗うためでなく、温かい湯に浸かってくつろぐためのものだ。体は既に清潔なので、同じ温かい湯を家族全員が順に共有できる。日本は、全国にある天然の温泉でも有名だ。人々はこの鉱物豊かな湯に浸かりに旅し、しばしば美しい山や森に囲まれる。温泉に行くことは、休み日々の生活のストレスから逃れる人気の方法だ。こうした入浴には本当の利点がある。温かい湯は疲れた筋肉をほぐし、ストレスを和らげ、よりよく眠る助けになる。同じく大切なのは、一日に静かな時間を生むこと——速度を緩め、息をつき、心配を手放す時間だ。先に洗う、共有する湯を清潔に保つといった、他者への敬意の精神を映す簡単な作法がある。だから日本の風呂は、清潔になることだけではない。快適さ・健康、そして穏やかな日々の一息についてだ——丁寧に行えば、単純な行いさえ、小さな休息の儀式になりうることを思い出させる。",
        quiz: [
          { q: "日本の「お風呂」の使い方は？", options: ["先に体を洗い、湯には浸かってくつろぐ", "湯の中で体を洗う", "水を飲むため"], answer: 0 },
          { q: "「温泉」とは何か？", options: ["全国にある天然の鉱物豊かな湯", "冷たい川", "人工の池だけ"], answer: 0 },
          { q: "日本の入浴の利点は？", options: ["筋肉をほぐしストレスを和らげ睡眠を助け静かな時間を生む", "体を汚す", "眠れなくする"], answer: 0 }
        ]
      },
      {
        id: "d0818-5",
        title: "The Tiny Life Inside Cheese",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "Cheese is one of the world's oldest and most beloved foods, but few people think about how it gets its flavor. The secret lies in something invisible: tiny living things called microbes. Recently, scientists studying several traditional cheeses discovered that the microbes giving each cheese its special taste may also be good for our health.\nHow do microbes make cheese? Cheese begins as milk, but microbes — helpful bacteria and molds — transform it. As they grow, they break down parts of the milk and create new substances, producing the rich flavors, textures, and smells we enjoy. Different microbes make different cheeses; the sharp taste of one and the creamy softness of another come from these tiny workers.\nWhat did the scientists find? Studying traditional, handmade cheeses, they discovered that some of the microbes responsible for flavor may also help our gut — the part of the body where food is digested. A healthy gut, full of helpful microbes, is increasingly linked to overall health.\nThis fits a larger idea in science: that the tiny living things in and around us matter more than we once thought. The same microbes that make our food delicious may also quietly support our bodies.\nThere is still much to learn, and no single food is a cure. But the research is a delicious reminder that nature and tradition often work together in surprising ways. A simple piece of cheese, made the old-fashioned way, turns out to be a tiny world of life — one that may nourish us in more ways than one.",
        summaryJa: "チーズは世界で最も古く愛される食べ物の一つだが、どうやって風味を得るのかを考える人は少ない。秘密は目に見えないもの——微生物と呼ばれる小さな生き物にある。最近、いくつかの伝統的なチーズを研究する科学者が、各チーズに特別な味を与える微生物が、私たちの健康にも良いかもしれないと発見した。微生物はどうチーズを作るのか。チーズは牛乳として始まるが、微生物——有益な細菌やカビ——がそれを変える。育つにつれ牛乳の一部を分解し、新しい物質を作り、私たちが楽しむ豊かな風味・食感・香りを生む。異なる微生物が異なるチーズを作る——あるチーズの鋭い味も、別のチーズのクリーミーな柔らかさも、この小さな働き手から来る。科学者は何を見つけたか。伝統的な手作りのチーズを研究し、風味を担う微生物の一部が、腸——食べ物が消化される体の部分——も助けうると発見した。有益な微生物に満ちた健康な腸は、全身の健康にますます結びつけられている。これは科学のより大きな考えに合う——私たちの内や周りの小さな生き物が、かつて思ったより重要だということだ。食べ物をおいしくする同じ微生物が、静かに私たちの体を支えもするかもしれない。学ぶべきことはまだ多く、単一の食べ物が治療になるわけではない。だがこの研究は、自然と伝統がしばしば驚く形で協働することの、おいしい気づきだ。昔ながらの作り方の単純なチーズ一片が、実は生命の小さな世界であり——私たちを一つならぬ形で養うかもしれないのだ。",
        quiz: [
          { q: "チーズの風味を生むものは？", options: ["微生物（有益な細菌やカビ）", "砂糖", "金属"], answer: 0 },
          { q: "科学者が発見したことは？", options: ["風味を担う微生物が腸の健康も助けうる", "チーズは有害だ", "微生物は無関係だ"], answer: 0 },
          { q: "本文が示すより大きな考えは？", options: ["私たちの内や周りの小さな生き物は思ったより重要", "微生物は無意味", "食べ物は健康と無関係"], answer: 0 }
        ]
      }
    ]
  },
    {
    date: "2026-08-17",
    passages: [
      {
        id: "d0817-1",
        title: "Building a Car for One Market",
        level: "★★☆",
        genre: "ビジネス",
        text: "Most large companies try to sell the same products all over the world. But sometimes the smartest move is to build something for just one country. Recently, a major carmaker announced a new electric 'kei car' — a very small vehicle — designed specifically for Japan, a market with its own unique rules and tastes.\nWhat is a kei car? In Japan, 'kei' cars are a special class of tiny, light vehicles. They follow strict limits on size and engine power, and in return they enjoy lower taxes and cheaper insurance. They are popular because they are easy to park on narrow streets, cheap to run, and perfect for short daily trips. This class barely exists outside Japan.\nWhy design a car just for one market? Because winning customers often means fitting local needs exactly. A car built for wide American highways may be wrong for crowded Japanese cities. By creating a vehicle that matches Japan's rules and lifestyle, a company shows it understands its customers — and earns their trust.\nThis strategy is not easy. Designing a special product for one market costs money and takes time, and it only pays off if enough people buy it. The company is betting that careful, local design will win over drivers who value small, practical, affordable cars.\nThe lesson reaches beyond cars. In global business, one size does not always fit all. Sometimes the way to win a market is not to sell the world's product there, but to build something made just for the people who live in it.",
        summaryJa: "大企業の多くは、世界中で同じ製品を売ろうとする。だが時に最も賢い一手は、たった一つの国のために何かを作ることだ。最近、ある大手自動車メーカーが、独自の規則と好みを持つ市場・日本のために特別に設計した新しい電気「軽自動車」——非常に小さな車——を発表した。軽自動車とは何か。日本で「軽」は、小さく軽い車の特別な区分だ。大きさとエンジン出力に厳しい制限があり、その代わり税金が安く保険も安い。狭い道に停めやすく、維持費が安く、短い日々の移動に最適なため人気だ。この区分は日本の外ではほとんど存在しない。なぜ一つの市場のためだけに車を設計するのか。顧客を勝ち取ることは、しばしば地域のニーズにぴったり合うことを意味するからだ。広いアメリカの高速道路向けの車は、混雑した日本の都市には合わないかもしれない。日本の規則と生活様式に合う車を作ることで、企業は顧客を理解していると示し、信頼を得る。この戦略は容易ではない。一つの市場のための特別な製品の設計はお金と時間がかかり、十分な人が買って初めて報われる。企業は、丁寧で地域に合った設計が、小さく実用的で手頃な車を重んじる運転者を惹きつけると賭けている。教訓は車を超える。世界のビジネスで、一つの型が常に皆に合うわけではない。市場を勝ち取る道は、世界の製品をそこで売ることでなく、そこに住む人々のためだけに作った何かを生み出すことである場合もあるのだ。",
        quiz: [
          { q: "「軽自動車」とはどんな車か？", options: ["大きさや出力に制限がある小さく軽い車", "大型トラック", "スポーツカー"], answer: 0 },
          { q: "一つの市場のために車を設計する理由は？", options: ["地域の規則や生活様式に合わせ顧客の信頼を得るため", "世界中で同じ物を売るため", "設計を省くため"], answer: 0 },
          { q: "本文の教訓は？", options: ["一つの型が常に皆に合うわけではない", "世界共通の製品が常に最良", "地域を無視すべき"], answer: 0 }
        ]
      },
      {
        id: "d0817-2",
        title: "Solar Cells That Do More with Light",
        level: "★★★",
        genre: "テクノロジー",
        text: "Solar panels turn sunlight into electricity, and they have become a key part of the world's clean energy. But ordinary solar panels capture only a portion of the energy in sunlight. Now, a new kind of solar cell is reaching the market — a 'hybrid' design that can turn more of the Sun's light into power, and factories are ready to make it in large numbers.\nHow do these new cells work better? Sunlight contains many different colors, or types, of light. A traditional solar cell is good at capturing some of them but misses others. A hybrid cell combines two materials, each good at catching a different part of sunlight. Together, they can convert more of the incoming light into electricity than either could alone.\nWhy does this matter? More efficient solar cells produce more power from the same amount of sunlight and the same space. This means smaller, cheaper systems can do the same job, making solar energy more practical for homes, businesses, and even vehicles.\nThere are still challenges. New cells must prove they can last for many years in sun, rain, and heat, and they must be cheap enough to compete. Reaching mass production is a major step, but real-world use will be the true test.\nStill, the progress is encouraging. As solar cells grow more efficient and affordable, clean electricity becomes easier to produce. Each small gain in efficiency, multiplied across millions of panels, brings a future powered by the Sun a little bit closer.",
        summaryJa: "太陽光パネルは日光を電気に変え、世界のクリーンエネルギーの要になった。だが普通のパネルは日光のエネルギーの一部しか捉えない。今、新種の太陽電池が市場に届きつつある——太陽の光をより多く電力に変えられる「ハイブリッド」設計で、工場は大量生産の準備が整っている。なぜこの新しい電池はより優れるのか。日光は多くの異なる色、つまり種類の光を含む。従来の太陽電池はその一部を捉えるのは得意だが他を逃す。ハイブリッド電池は二つの材料を組み合わせ、それぞれが日光の異なる部分を捉えるのが得意だ。両者が相まって、単独より多くの入射光を電気に変えられる。なぜ重要か。より効率的な太陽電池は、同じ量の日光と同じ面積からより多くの電力を生む。つまり、より小さく安いシステムが同じ仕事をでき、太陽エネルギーが家庭・企業、さらには乗り物にもより実用的になる。まだ課題もある。新しい電池は、日・雨・熱の中で何年も持つと証明せねばならず、競えるほど安くもなければならない。大量生産に至るのは大きな一歩だが、実地での使用が真の試験になる。それでも進歩は励みになる。太陽電池がより効率的で手頃になるにつれ、クリーンな電気は作りやすくなる。効率のわずかな向上一つ一つが、何百万枚ものパネルにわたって積み重なり、太陽で動く未来を少しだけ近づける。",
        quiz: [
          { q: "ハイブリッド太陽電池が優れる理由は？", options: ["二つの材料で日光の異なる部分を捉えより多く電気に変える", "日光を必要としない", "夜だけ働く"], answer: 0 },
          { q: "より効率的な太陽電池の利点は？", options: ["同じ日光と面積からより多くの電力を生む", "電力が減る", "場所を多く取る"], answer: 0 },
          { q: "本文が挙げる課題は？", options: ["長年の耐久性と競える安さの証明", "日光が無いこと", "電気が不要なこと"], answer: 0 }
        ]
      },
      {
        id: "d0817-3",
        title: "The Hidden Work of Weather Forecasting",
        level: "★★★",
        genre: "世界情勢",
        text: "Every day, billions of people check the weather forecast before they leave home. It seems simple, but behind each forecast lies one of the largest examples of international cooperation in the world. To predict tomorrow's weather, countries must share information across every border.\nWhy must weather be a global effort? The atmosphere does not stop at borders. A storm forming over one ocean may reach another continent days later. To forecast accurately, scientists need data from all over the planet — temperatures, winds, and pressure measured on land, at sea, and high in the sky. No single country can gather all of this alone.\nSo nations work together. Around the world, weather stations, ships, balloons, and satellites constantly collect measurements and share them freely with other countries. Powerful computers then combine this flood of data to model how the atmosphere will move. The forecast on your phone is the result of this quiet, worldwide teamwork.\nThis cooperation continues even between countries that disagree on other matters. Because everyone benefits from better forecasts — for farming, travel, and safety during storms — sharing weather data has become a rare area of near-universal agreement.\nAs the climate changes and extreme weather grows more common, this shared system becomes more important than ever. Accurate warnings can save lives when floods or storms approach.\nThe next time you check the forecast, it is worth remembering: that simple prediction is powered by thousands of people and machines across the globe, working together so that all of us can plan our days.",
        summaryJa: "毎日、何十億もの人が家を出る前に天気予報を確認する。単純に見えるが、各予報の背後には世界最大級の国際協力の例がある。明日の天気を予測するため、国々はあらゆる国境を越えて情報を分かち合わねばならない。なぜ天気は世界的な取り組みでなければならないのか。大気は国境で止まらない。ある海で生まれた嵐が、数日後に別の大陸へ届くかもしれない。正確に予報するには、科学者は地球中のデータ——陸・海・上空で測った気温・風・気圧——を必要とする。どの一国も、これを単独で集められない。だから各国は協力する。世界中で、気象観測所・船・気球・衛星が絶えず測定を集め、他国と自由に共有する。強力なコンピューターがこのデータの洪水を組み合わせ、大気がどう動くかをモデル化する。あなたの携帯の予報は、この静かで世界的な連携の成果だ。この協力は、他の問題で対立する国々の間でさえ続く。より良い予報は誰にとっても——農業・旅行・嵐の際の安全に——利益になるため、気象データの共有はほぼ普遍的な合意という稀な領域になった。気候が変わり極端な気象が増える中、この共有の仕組みはかつてなく重要になる。洪水や嵐が迫るとき、正確な警報は命を救いうる。次に予報を確認するとき、思い出す価値がある——その単純な予測は、私たち皆が一日を計画できるよう共に働く、世界中の何千もの人と機械に支えられているのだ。",
        quiz: [
          { q: "天気予報が国際協力を要する理由は？", options: ["大気は国境で止まらず地球中のデータが必要だから", "天気は一国だけのものだから", "データが不要だから"], answer: 0 },
          { q: "気象データはどう扱われるか？", options: ["各国が測定を集め自由に共有する", "秘密にされる", "一国だけが持つ"], answer: 0 },
          { q: "この協力が特別な点は？", options: ["他で対立する国々の間でも続く", "戦争を生む", "一国だけが得をする"], answer: 0 }
        ]
      },
      {
        id: "d0817-4",
        title: "A Region's Big AI Bet",
        level: "★★☆",
        genre: "日本",
        text: "When people think of centers of advanced technology, they usually picture big cities. But a rural area in northern Japan is hoping to change that. The region around Akita is planning what could become one of Japan's largest data centers — huge buildings full of computers — in the hope of attracting artificial intelligence companies and skilled workers.\nWhy would a quiet region want a giant data center? Like many rural areas in Japan, it faces a shrinking, aging population as young people move to big cities for work. A large data center could bring construction jobs, attract technology companies, and give young people a reason to stay or return. Local leaders see it as a chance to build a new kind of future.\nData centers are attractive to build in some rural areas for practical reasons too. They need lots of space, plenty of electricity, and a cool climate to help keep the machines from overheating. A northern region with land and cooler weather can be a good fit.\nThere are challenges. Data centers use enormous amounts of energy and water, so they must be planned carefully. And building one is only a first step; attracting companies and training workers takes years of steady effort.\nStill, the plan shows a hopeful idea: that the technology driving the future does not have to stay in crowded cities. With careful planning, even a quiet countryside region can become a hub for the digital age — and, in doing so, breathe new life into a community that needs it.",
        summaryJa: "先端技術の中心地と聞くと、人はたいてい大都市を思い描く。だが北日本のある地方が、それを変えようとしている。秋田周辺の地域は、日本最大級になりうるデータセンター——コンピューターで満ちた巨大な建物——を計画し、AI企業と熟練労働者を惹きつけることを期待している。なぜ静かな地方が巨大データセンターを欲しがるのか。日本の多くの地方と同じく、若者が仕事を求めて大都市へ移り、人口の減少と高齢化に直面している。大きなデータセンターは建設の仕事をもたらし、技術企業を惹きつけ、若者が留まる、あるいは戻る理由を与えうる。地元の指導者は、それを新しい未来を築く機会と見る。データセンターは実際的な理由でも、一部の地方に建てるのに魅力的だ。広い場所、豊富な電力、機械の過熱を防ぐ涼しい気候を必要とする。土地と涼しい気候のある北の地域は、うまく合いうる。課題もある。データセンターは膨大な電力と水を使うので、慎重な計画が要る。建てるのは第一歩にすぎず、企業を惹きつけ労働者を育てるには何年もの着実な努力がかかる。それでもこの計画は希望ある発想を示す——未来を動かす技術は、混雑した都市にとどまる必要はない。丁寧な計画があれば、静かな田舎の地域でもデジタル時代の拠点になりうる——そしてそうすることで、それを必要とする地域に新しい命を吹き込むのだ。",
        quiz: [
          { q: "秋田周辺の地域が計画しているものは？", options: ["日本最大級のデータセンター", "新しい空港", "巨大な城"], answer: 0 },
          { q: "地方がそれを望む理由は？", options: ["仕事や技術企業を呼び若者が留まる理由を作るため", "人口を減らすため", "若者を追い出すため"], answer: 0 },
          { q: "データセンターが北の地方に合う実際的な理由は？", options: ["広い土地・豊富な電力・機械を冷やす涼しい気候", "海が近いこと", "山が高いこと"], answer: 0 }
        ]
      },
      {
        id: "d0817-5",
        title: "Nature's Own Plastic",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "We often think of plastic as a modern, human invention — and a source of pollution because it does not break down easily. But scientists have found something surprising: nature invented its own kind of biodegradable plastic long before humans existed, and tiny living things may have been feeding on it for hundreds of millions of years.\nWhat does this mean? Some bacteria naturally produce materials very similar to plastic, storing energy inside their cells in a form much like the plastics we make in factories. Unlike our plastic, however, this natural version can be broken down and used as food by other tiny organisms. In nature, nothing is truly wasted; one creature's leftovers become another's meal.\nWhy is this discovery useful? Ordinary plastic can last for hundreds of years, piling up in oceans and landfills. If scientists can learn how nature makes and breaks down its own plastic, they might design new materials that are just as useful but can safely disappear when we are done with them.\nThis is a growing field. Researchers are studying these natural plastics and the organisms that eat them, hoping to copy nature's clever recycling. It is a reminder that living things solved many problems long before we did.\nThe lesson is a hopeful one. By looking closely at the natural world — even at humble bacteria — scientists can find ideas to solve modern challenges. Nature has been running experiments for billions of years, and sometimes the answers to our newest problems have been quietly waiting inside the oldest forms of life.",
        summaryJa: "私たちはしばしばプラスチックを現代の人間の発明——そして容易に分解しないため汚染の源——と考える。だが科学者は驚くべきことを見つけた。自然は人間が存在するはるか前に、独自の生分解性プラスチックを発明しており、小さな生き物が何億年もそれを食べてきたかもしれないのだ。これはどういう意味か。一部の細菌は、私たちが工場で作るプラスチックによく似た材料を自然に作り、細胞内にエネルギーをそんな形で蓄える。だが私たちのプラスチックと違い、この自然版は、他の小さな生物によって分解され食べ物として使われうる。自然では、真に無駄になるものはない——ある生き物の残り物が別の生き物の食事になる。なぜこの発見が有用か。普通のプラスチックは何百年も残り、海や埋め立て地に積み上がりうる。自然がどう自らのプラスチックを作り分解するかを学べれば、科学者は、同じくらい有用でありながら、使い終わったら安全に消える新素材を設計できるかもしれない。これは成長する分野だ。研究者はこうした自然のプラスチックとそれを食べる生物を研究し、自然の巧妙なリサイクルを真似ようとしている。生き物が、私たちよりずっと前に多くの問題を解いていたことを思い出させる。教訓は希望に満ちている。自然界を——質素な細菌さえ——よく見ることで、科学者は現代の課題を解く発想を見つけられる。自然は何十億年も実験を続けてきた。そして時に、最も新しい問題への答えは、最も古い生命の形の中で静かに待っていたのだ。",
        quiz: [
          { q: "科学者が見つけた驚きは？", options: ["自然が人間より前に生分解性プラスチックを発明していた", "プラスチックは最近生まれた", "細菌は無害でない"], answer: 0 },
          { q: "自然版プラスチックが人間の物と違う点は？", options: ["他の小さな生物に分解され食べられる", "決して分解しない", "金属でできている"], answer: 0 },
          { q: "この発見が有用な理由は？", options: ["使い終わると安全に消える新素材の設計に役立つ", "プラスチックを増やせる", "海を汚せる"], answer: 0 }
        ]
      }
    ]
  },
    {
    date: "2026-08-16",
    passages: [
      {
        id: "d0816-1",
        title: "How Heat Affects Business",
        level: "★★★",
        genre: "ビジネス",
        text: "This year is likely to be one of the hottest ever recorded, and rising temperatures are not only a problem for the environment — they are increasingly a problem for business. From farms to factories to shops, extreme heat touches almost every part of the economy, in ways many people do not notice.\nHow does heat affect business? On very hot days, outdoor workers must slow down or stop for safety, which delays construction and farming. Crops can wither in the fields, raising food prices. Machines and computers, especially in data centers, need more cooling, which uses more electricity and costs more money. Even shoppers may stay home when it is too hot to go out.\nHeat also drives demand in some areas. Sales of air conditioners, cold drinks, and fans rise, and electricity use soars as people try to stay cool. This can strain power grids and push energy prices higher for everyone.\nBecause of these effects, companies are learning to plan for heat. Some change working hours to avoid the hottest part of the day, redesign buildings to stay cool, or invest in more reliable energy. Insurers and investors increasingly ask how well a business can handle extreme weather.\nThe lesson is clear: climate is now a business issue, not just an environmental one. As hot years become more common, the companies that prepare — protecting their workers, their supplies, and their costs — will be better placed to succeed in a warming world.",
        summaryJa: "今年は記録上最も暑い年の一つになりそうで、気温上昇は環境だけの問題ではない——ますますビジネスの問題でもある。農場から工場、店まで、猛暑は経済のほぼあらゆる部分に、多くの人が気づかない形で触れる。暑さはどうビジネスに影響するのか。非常に暑い日、屋外労働者は安全のため作業を緩めるか止めねばならず、建設や農業が遅れる。作物は畑で枯れ、食料価格を押し上げうる。機械やコンピューター、特にデータセンターはより多くの冷却を要し、より多くの電力を使い費用がかさむ。暑すぎて外出できないと、買い物客が家にとどまることさえある。暑さは一部で需要も生む。エアコン・冷たい飲み物・扇風機の売上が伸び、人々が涼を求めて電力使用が急増する。これは電力網に負担をかけ、皆にとってエネルギー価格を押し上げうる。こうした影響のため、企業は暑さに備えることを学んでいる。最も暑い時間帯を避けて勤務時間を変え、涼しく保つよう建物を設計し直し、より信頼できるエネルギーに投資する企業もある。保険会社や投資家は、企業が極端な気象にどれだけ対処できるかをますます問う。教訓は明快だ——気候は今や環境だけでなくビジネスの問題だ。暑い年が当たり前になる中、備える企業——労働者・供給・費用を守る企業——が、温暖化する世界でより成功しやすい位置に立つ。",
        quiz: [
          { q: "猛暑がビジネスに与える影響に含まれるものは？", options: ["屋外作業の遅れや作物の枯れ、冷却費の増加", "影響は全くない", "利益だけが増える"], answer: 0 },
          { q: "暑さが需要を生む例は？", options: ["エアコンや冷たい飲み物の売上増と電力使用の急増", "本の売上だけ", "何も売れなくなる"], answer: 0 },
          { q: "本文の教訓は？", options: ["気候は今や環境だけでなくビジネスの問題", "気候は経済に無関係", "備えは不要"], answer: 0 }
        ]
      },
      {
        id: "d0816-2",
        title: "How AI Helps Doctors See the Brain",
        level: "★★★",
        genre: "テクノロジー",
        text: "The human brain is one of the most complex and mysterious objects we know. Studying it is extremely difficult, because we cannot easily look inside a living, working brain. Now, artificial intelligence is helping scientists understand it better — recently, AI was used to measure the brain's hidden 'cleaning system,' the flow of fluid that washes away waste.\nWhy does this matter? Like any busy machine, the brain produces waste as it works. To stay healthy, it must clear this waste away, and it does so using a slow flow of fluid through and around its tissues. Problems with this cleaning process may be linked to serious brain diseases, so understanding it could help doctors in the future.\nHow does AI help? Measuring such tiny, slow movements is very hard. AI is good at finding patterns in huge amounts of complex data, so it can help scientists track how fluid moves — quickly around the brain's outer spaces, but far more slowly deep inside. Spotting these details by hand would be almost impossible.\nThis is part of a larger trend: using AI as a tool to explore questions in medicine and biology that were once out of reach. The computer does not replace the scientist, but it extends what the scientist can see and measure.\nThe research is still early, and much remains unknown. But it shows how AI, carefully used, can become a powerful microscope for the mind — helping us understand the organ that makes us who we are, one hidden flow at a time.",
        summaryJa: "人間の脳は、私たちが知る最も複雑で神秘的な対象の一つだ。生きて働く脳の中を容易には覗けないため、その研究は極めて難しい。今、AIが科学者のより良い理解を助けている——最近、AIは脳の隠れた「掃除システム」、老廃物を洗い流す体液の流れを測るのに使われた。なぜ重要か。忙しい機械と同じく、脳は働きながら老廃物を生む。健康を保つには、これを取り除かねばならず、組織の中や周りをゆっくり流れる体液を使ってそうする。この掃除の過程の不調は深刻な脳の病に結びつくかもしれず、その理解は将来、医師を助けうる。AIはどう助けるのか。そんな微小で遅い動きを測るのは非常に難しい。AIは膨大で複雑なデータの中の模様を見つけるのが得意なので、体液がどう動くか——脳の外側の空間では速く、深部ではずっと遅く——を追う助けになる。こうした細部を手作業で見つけるのはほぼ不可能だ。これはより大きな潮流の一部だ——かつて手の届かなかった医学や生物学の問いを探る道具としてAIを使うこと。コンピューターは科学者に取って代わるのでなく、科学者が見て測れる範囲を広げる。研究はまだ初期で、多くが未解明のままだ。だがそれは、慎重に使えばAIが心の強力な顕微鏡になりうることを示す——私たちを私たちたらしめる器官を、隠れた流れ一つずつ理解する助けになるのだ。",
        quiz: [
          { q: "AIが測るのを助けたものは？", options: ["脳の老廃物を洗い流す体液の流れ（掃除システム）", "脳の重さだけ", "脳の色"], answer: 0 },
          { q: "AIがこの研究で得意なことは？", options: ["膨大で複雑なデータの中の模様を見つける", "手術をすること", "薬を作ること"], answer: 0 },
          { q: "本文がAIについて述べることは？", options: ["科学者に取って代わらず見て測れる範囲を広げる", "科学者を不要にする", "研究を妨げる"], answer: 0 }
        ]
      },
      {
        id: "d0816-3",
        title: "The Oceans Are Running a Fever",
        level: "★★★",
        genre: "世界情勢",
        text: "When we think about a warming world, we usually picture hot air and dry land. But the oceans are heating up too, and scientists are increasingly worried about 'marine heatwaves' — long periods when a part of the sea becomes unusually warm. These events are a growing concern for the whole planet, not just for the creatures that live in the water.\nWhat is a marine heatwave? Just as the air can have a heatwave, so can the sea. For days, weeks, or even months, ocean temperatures in a region can rise far above normal. This may not sound dramatic, but even a few degrees can have powerful effects on ocean life.\nWhy does it matter to people? The oceans feed billions of people and support countless jobs through fishing. When the sea grows too warm, fish may move away or die, coral reefs can be damaged, and important ecosystems break down. This threatens food supplies and the livelihoods of coastal communities around the world.\nMarine heatwaves can also affect weather and even human health, changing rainfall and storms far inland. Because the ocean connects every continent, a problem in one sea can ripple across the globe.\nScientists are studying these events closely, using satellites and sensors to track ocean temperatures and warn communities early. The warming sea is a reminder that our planet's systems are deeply connected. What happens in the distant ocean does not stay there — it reaches our tables, our coasts, and, in time, us all.",
        summaryJa: "温暖化する世界を考えるとき、私たちはたいてい熱い空気と乾いた大地を思い描く。だが海も温まっており、科学者は「海洋熱波」——海のある部分が異常に暖かくなる長い期間——をますます憂慮している。こうした出来事は、水に住む生き物だけでなく、地球全体にとって高まる懸念だ。海洋熱波とは何か。空気に熱波があるように、海にもありうる。数日・数週間、時に数か月、ある地域の海水温が平常をはるかに超えて上がる。劇的に聞こえないかもしれないが、わずか数度でも海の生命に強い影響を及ぼしうる。なぜ人々に重要か。海は何十億もの人を養い、漁業を通じて無数の仕事を支える。海が暖まりすぎると、魚は去るか死に、サンゴ礁は損なわれ、重要な生態系が崩れうる。これは世界中の沿岸地域の食料供給と暮らしを脅かす。海洋熱波は天気や人の健康にも影響し、はるか内陸の降雨や嵐を変えうる。海はあらゆる大陸をつなぐので、一つの海の問題が世界へ波及しうる。科学者は衛星やセンサーで海水温を追い、地域に早く警告し、こうした出来事を詳しく研究している。暖まる海は、地球の仕組みが深くつながっていることを思い出させる。遠い海で起きることはそこにとどまらない——私たちの食卓、沿岸、そしていずれ私たち皆に届くのだ。",
        quiz: [
          { q: "「海洋熱波」とは何か？", options: ["海のある部分が長期間、異常に暖かくなること", "海が凍ること", "波が高くなること"], answer: 0 },
          { q: "海の温暖化が人々に重要な理由は？", options: ["漁業や食料供給、沿岸の暮らしを脅かすから", "海は無関係だから", "魚が必ず増えるから"], answer: 0 },
          { q: "本文が伝えることは？", options: ["遠い海の問題はそこにとどまらず私たち皆に届く", "海は孤立している", "影響は海の中だけ"], answer: 0 }
        ]
      },
      {
        id: "d0816-4",
        title: "A Robot Monk in a Kyoto Temple",
        level: "★★☆",
        genre: "日本",
        text: "In a temple in Kyoto, visitors can now speak with an unusual guide: a robot powered by artificial intelligence, designed to answer questions about life, faith, and the human heart. The idea of a 'robot monk' may sound surprising, but it reflects a growing question of our time — what role should technology play in the deepest parts of human life?\nWhy build such a robot? Temples have long been places where people bring their worries and questions. But there are fewer monks than before, and many people feel too shy to speak openly to a person. A patient machine, always available and never tired, might help some visitors feel comfortable asking about difficult subjects like loss, meaning, or how to live.\nThe robot does not truly feel or believe. It has been trained on many texts and can respond thoughtfully, but its words come from patterns, not from a lived human life. This raises deep questions: can a machine offer real comfort, or only the appearance of it?\nMany people find the idea fascinating, while others feel that wisdom and warmth cannot come from a machine, however clever. Both reactions are understandable.\nWhat makes this story special is the meeting of old and new — ancient tradition and modern technology, side by side. Whether or not a robot can truly guide the human heart, its presence in a quiet temple invites us to think carefully about what we want from technology, and what only other people can give.",
        summaryJa: "京都のある寺で、訪問者は今、珍しい案内役と話せる——人生・信仰・人の心についての問いに答えるよう作られた、AIで動くロボットだ。「ロボット僧」という発想は驚くように聞こえるかもしれないが、現代の高まる問い——技術は人生の最も深い部分でどんな役割を果たすべきか——を映している。なぜそんなロボットを作るのか。寺は長く、人々が悩みや問いを持ち込む場所だった。だが以前より僧は少なく、多くの人は人に率直に話すのを気恥ずかしく感じる。常に応じ、決して疲れない忍耐強い機械は、喪失・意味・生き方といった難しい話題を尋ねるのに、一部の訪問者が安心する助けになるかもしれない。ロボットは本当に感じたり信じたりはしない。多くの文章を学び思慮深く応じられるが、その言葉は生きた人生でなく模様から来る。これは深い問いを生む——機械は本当の慰めを与えられるのか、それとも慰めの見かけだけか。この発想を魅力的と思う人も多いが、知恵や温かさは、どれほど賢くても機械からは来ないと感じる人もいる。どちらの反応も理解できる。この話を特別にするのは、古と新の出会い——古い伝統と現代の技術が並び立つことだ。ロボットが本当に人の心を導けるかどうかにかかわらず、静かな寺でのその存在は、私たちが技術に何を求め、他者だけが与えられるものは何かを、丁寧に考えるよう誘う。",
        quiz: [
          { q: "京都の寺に登場したものは？", options: ["人生や信仰の問いに答えるAIロボット", "新しい鐘", "巨大な仏像"], answer: 0 },
          { q: "ロボット僧が作られた理由の一つは？", options: ["僧が少なく、人に話しにくい人が安心して尋ねられるかもしれないから", "観光を禁止するため", "寺を閉じるため"], answer: 0 },
          { q: "本文が投げかける深い問いは？", options: ["機械は本当の慰めを与えられるのか", "ロボットは何色か", "寺はどこにあるか"], answer: 0 }
        ]
      },
      {
        id: "d0816-5",
        title: "Seeing Home from Mars",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "Far away on the surface of Mars, a robotic explorer looked up at the night sky and captured a remarkable sight: the Earth, our home, appearing as a tiny point of light — and then slipping behind one of Mars's small moons. For a moment, our entire world was just a distant dot, seen from another planet.\nWhy is such an image so powerful? From Mars, the Earth is not a great blue globe but a faint speck, easily hidden behind a passing moon. Everything we know — every person, city, ocean, and mountain — fits inside that single point of light. Seeing our planet this way can change how we think about it.\nThe picture also shows how far our machines have traveled. A rover built on Earth now drives across Martian soil, studies its rocks, and even watches the sky, sending images back across tens of millions of kilometers of empty space. That such a thing is possible is a triumph of science and patience.\nScientists value these views for practical reasons too. Watching a moon pass in front of the Earth, or the Sun, helps them measure orbits and understand the Martian sky.\nBut the deepest value may be how it makes us feel. Looking at our own world as a tiny dot, alone in the dark, reminds us how precious and fragile it is. From millions of kilometers away, a small machine has sent us a quiet message: this pale point of light is home, and it is the only one we have.",
        summaryJa: "はるか遠く火星の表面で、ロボットの探査機が夜空を見上げ、驚くべき光景を捉えた——私たちの故郷、地球が、小さな光の点として現れ、そして火星の小さな月の一つの背後へ滑り込むのを。一瞬、私たちの世界全体が、別の惑星から見たただの遠い点だった。なぜそんな画像がそれほど力強いのか。火星から、地球は大きな青い球でなく、通り過ぎる月に容易に隠れるかすかな点だ。私たちが知るすべて——あらゆる人・都市・海・山——が、その一つの光の点の中に収まる。こうして自分の惑星を見ることは、それについての考え方を変えうる。この写真は、私たちの機械がどれほど遠くまで旅したかも示す。地球で作られた探査車が今、火星の土を走り、その岩を研究し、空さえ眺め、何千万キロもの空虚な宇宙を越えて画像を送り返す。そんなことが可能なのは、科学と忍耐の勝利だ。科学者は実際的な理由でもこうした光景を重んじる。月が地球や太陽の前を通るのを見ることは、軌道の測定や火星の空の理解を助ける。だが最も深い価値は、それが私たちにどう感じさせるかかもしれない。自分の世界を、暗闇に独りある小さな点として見ることは、それがどれほど貴重で壊れやすいかを思い出させる。何百万キロも彼方から、小さな機械が静かな伝言を送ってきた——この淡い光の点が故郷であり、私たちが持つ唯一のものだ、と。",
        quiz: [
          { q: "火星の探査機が捉えた光景は？", options: ["地球が小さな光の点として現れ月の背後に隠れる", "火星に川が流れる", "太陽が二つある"], answer: 0 },
          { q: "火星から見た地球はどう見えるか？", options: ["月に隠れるほどのかすかな点", "大きな青い球", "すぐ近くの星"], answer: 0 },
          { q: "本文が伝える最も深い価値は？", options: ["地球がどれほど貴重で壊れやすいかを思い出させる", "火星の方が良い", "地球は大きいということ"], answer: 0 }
        ]
      }
    ]
  },
    {
    date: "2026-08-15",
    passages: [
      {
        id: "d0815-1",
        title: "How New Technology Grows an Economy",
        level: "★★★",
        genre: "ビジネス",
        text: "Why do countries invest so much money in science and technology? Around the world, governments are pouring resources into fields like artificial intelligence, biotechnology, and space research. Recently, one large nation announced a major push to accelerate its work in these areas, hoping that new technology will drive economic growth. The reason is simple: today, knowledge itself has become a powerful engine of wealth.\nHow does technology grow an economy? New inventions create new industries, and new industries create jobs. A country that develops advanced skills can build products the world wants to buy, from medicines to machines to software. This brings money into the country and helps it compete globally.\nInvestment in science also has effects that spread widely. A single breakthrough — a better battery, a new crop, a faster computer chip — can help many other businesses. Universities train skilled workers, and research centers attract talented people and companies from around the world.\nOf course, such investment is a gamble. Research is expensive and uncertain; many projects fail, and success can take years or even decades. Governments must choose carefully where to put their money, and be patient while results slowly appear.\nStill, history shows the payoff can be enormous. The industries that power today's economy — computers, the internet, modern medicine — all grew from earlier investment in science. By funding research now, countries are planting seeds for future growth, betting that the knowledge they build today will become the jobs, products, and prosperity of tomorrow.",
        summaryJa: "なぜ国々は科学技術にそれほど多くのお金を投じるのか。世界中で、政府はAI・バイオテクノロジー・宇宙研究といった分野に資源を注いでいる。最近、ある大国が、新技術が経済成長を牽引すると期待して、これらの分野の取り組みを加速する大きな方針を発表した。理由は単純だ——今日、知識そのものが強力な富の原動力になった。技術はどう経済を成長させるのか。新しい発明が新しい産業を生み、新しい産業が雇用を生む。先端技能を育てる国は、薬から機械、ソフトウェアまで、世界が買いたがる製品を作れる。これが国にお金をもたらし、世界で競う助けになる。科学への投資は広く波及する効果も持つ。一つの突破——より良い電池、新しい作物、より速いチップ——が、他の多くの事業を助けうる。大学は熟練労働者を育て、研究拠点は世界中から才能ある人材や企業を惹きつける。もちろん、こうした投資は賭けだ。研究は高価で不確実で、多くの計画は失敗し、成功には何年、時に何十年もかかりうる。政府はどこにお金を置くか慎重に選び、成果がゆっくり現れる間、忍耐せねばならない。それでも歴史は、見返りが莫大でありうることを示す。今日の経済を動かす産業——コンピューター、インターネット、現代医療——はすべて、以前の科学への投資から育った。今研究に資金を投じることで、国々は未来の成長の種をまき、今日築く知識が明日の雇用・製品・繁栄になると賭けているのだ。",
        quiz: [
          { q: "技術が経済を成長させる仕組みは？", options: ["新しい発明が新産業と雇用を生む", "お金を捨てること", "輸入を止めること"], answer: 0 },
          { q: "科学投資が広く波及する例は？", options: ["一つの突破が他の多くの事業を助ける", "一社だけが得をする", "効果は全くない"], answer: 0 },
          { q: "こうした投資が「賭け」である理由は？", options: ["研究は高価で不確実、成功に長い時間がかかる", "必ずすぐ成功するから", "費用がかからないから"], answer: 0 }
        ]
      },
      {
        id: "d0815-2",
        title: "Making Things Closer to Home",
        level: "★★☆",
        genre: "テクノロジー",
        text: "For a long time, the trend in technology was to make things bigger and more centralized — giant factories, huge power plants, and large farms far from cities. Now a new idea is growing in the opposite direction: producing food, energy, and materials closer to where people actually live and use them. Experts see this shift toward 'distributed' technology as one of the most important trends of our time.\nWhat does this look like? Instead of relying only on distant power stations, homes and neighborhoods can generate their own electricity with solar panels and store it in batteries. Instead of shipping vegetables thousands of kilometers, cities can grow fresh food in indoor farms. New tools even allow small factories to produce parts on demand, close to their customers.\nWhy is this useful? Making things nearby can reduce the long journeys that add cost and pollution. It can also make communities more resilient: if a storm or shortage disrupts distant supplies, a town that produces some of its own energy or food is better protected.\nThere are challenges. Small-scale production is not always cheaper than the huge factories it competes with, and new systems take time and money to build. Not everything can, or should, be made locally.\nStill, the direction is promising. As technology becomes smaller, smarter, and more personal, it can bring production out of distant giants and into everyday communities — giving people more control over the food, energy, and goods that shape their daily lives.",
        summaryJa: "長い間、技術の潮流は物をより大きく、より中央集権的にすることだった——巨大工場、巨大発電所、都市から遠い大農場。今、逆方向へ新しい発想が育っている——食料・エネルギー・材料を、人々が実際に暮らし使う場所の近くで生産することだ。専門家は、この「分散型」技術への移行を、現代で最も重要な潮流の一つと見る。それはどんな姿か。遠い発電所だけに頼る代わりに、家や地域が太陽光パネルで自ら電気を作り、電池に蓄える。野菜を数千キロ運ぶ代わりに、都市が屋内農場で新鮮な食料を育てる。新しい道具は、小さな工場が顧客の近くで必要に応じて部品を作ることさえ可能にする。なぜ有用か。近くで作れば、費用と汚染を増やす長い旅を減らせる。地域をより強靭にもする——嵐や不足が遠い供給を乱しても、エネルギーや食料の一部を自ら作る町はよりよく守られる。課題もある。小規模生産は、競う巨大工場より必ずしも安くなく、新しい仕組みの構築には時間とお金がかかる。すべてが地元で作れる、あるいは作るべきというわけではない。それでも方向は有望だ。技術がより小さく、賢く、個人的になるにつれ、生産を遠い巨人から日々の地域へと持ち込みうる——人々に、暮らしを形づくる食料・エネルギー・品への、より多くの制御を与えて。",
        quiz: [
          { q: "「分散型」技術への移行とは？", options: ["食料・エネルギー・材料を使う場所の近くで生産すること", "全てを一つの巨大工場で作ること", "生産をやめること"], answer: 0 },
          { q: "近くで作る利点は？", options: ["長い輸送の費用と汚染を減らし地域を強靭にする", "費用を必ず増やす", "汚染を増やす"], answer: 0 },
          { q: "本文が挙げる課題は？", options: ["小規模生産は必ずしも安くなく構築に時間と費用がかかる", "地元で全て作れる", "巨大工場が消えた"], answer: 0 }
        ]
      },
      {
        id: "d0815-3",
        title: "When the Whole World Looks Up",
        level: "★★☆",
        genre: "世界情勢",
        text: "Every so often, a natural event captures the attention of people across many countries at the same time. A total solar eclipse is one such moment. When the Moon passes exactly between the Earth and the Sun, it can briefly block the Sun's light, turning day into an eerie twilight. Recently, one such eclipse crossed parts of Europe, drawing crowds of watchers and teams of scientists.\nWhat happens during an eclipse? For a few minutes, the Moon covers the Sun completely along a narrow path on the Earth. The sky darkens, the air grows cooler, and the Sun's faint outer atmosphere becomes visible as a glowing ring. It is a rare and beautiful sight that many people travel far to see.\nEclipses are more than a spectacle. They give scientists a special chance to study the Sun. Instruments on the ground and in space observe the Sun's atmosphere and the 'space weather' it creates, which can affect satellites and power systems on Earth. A single eclipse can teach us a great deal.\nThere is also something human about these events. People from different countries gather in the same fields and cities, sharing the same few minutes of wonder. For a moment, borders and differences seem to fade as everyone looks up at the same sky.\nAn eclipse, then, is both a scientific event and a shared human one. It reminds us that we all live under the same Sun — and that some of the most powerful experiences are the ones the whole world can witness together.",
        summaryJa: "時折、自然の出来事が、多くの国の人々の注目を同時に集める。皆既日食はそんな瞬間の一つだ。月が地球と太陽のちょうど間を通ると、太陽の光を一時的に遮り、昼を不気味な薄明かりに変えうる。最近、そんな日食が欧州の一部を横切り、見物の群衆と科学者チームを惹きつけた。日食の間、何が起きるのか。数分間、月が地球上の細い帯に沿って太陽を完全に覆う。空は暗くなり、空気は涼しくなり、太陽の淡い外側の大気が輝く環として見えるようになる。多くの人が遠くまで見に行く、稀で美しい光景だ。日食は見世物以上のものだ。科学者に太陽を研究する特別な機会を与える。地上と宇宙の機器が太陽の大気と、それが生む「宇宙天気」——地球の衛星や電力系統に影響しうる——を観測する。一度の日食が多くを教えうる。こうした出来事には人間的な何かもある。異なる国の人々が同じ野や都市に集い、同じ数分間の驚きを分かち合う。一瞬、誰もが同じ空を見上げる中で、国境や違いが薄れて見える。だから日食は、科学の出来事であり、共有される人間的な出来事でもある。私たちが皆、同じ太陽の下に生きていること——そして最も強烈な体験のいくつかは、世界全体が共に目撃できるものであることを思い出させる。",
        quiz: [
          { q: "皆既日食はどうして起きるか？", options: ["月が地球と太陽の間を通り太陽の光を遮る", "太陽が消えるから", "地球が止まるから"], answer: 0 },
          { q: "日食が科学者にとって価値ある理由は？", options: ["太陽の大気や「宇宙天気」を研究する機会になる", "何も学べない", "地球を暗くするため"], answer: 0 },
          { q: "本文が日食に見出す人間的な意味は？", options: ["異なる国の人々が同じ空を見上げ驚きを分かち合う", "国境を強めること", "争いを生むこと"], answer: 0 }
        ]
      },
      {
        id: "d0815-4",
        title: "The Quiet Art of the Japanese Garden",
        level: "★★☆",
        genre: "日本",
        text: "In the middle of a busy Japanese city, you can sometimes step through a gate and suddenly find calm. Japanese gardens are famous around the world for their beauty and their deep sense of peace. Unlike gardens designed simply to show many bright flowers, a Japanese garden is carefully arranged to feel natural, balanced, and quiet.\nWhat makes these gardens special? Every element is chosen with care — rocks, water, moss, trees, and gravel are placed to create harmony. A pond may reflect the sky, a stone path may lead the eye slowly through the scene, and raked gravel may suggest flowing water, even where there is none. Nothing is random, yet the whole garden feels as if nature made it.\nMany Japanese gardens are also tied to ideas about the seasons and the passing of time. Cherry blossoms in spring, green leaves in summer, red maples in autumn, and bare branches in winter each bring their own beauty. The garden changes through the year, reminding visitors that nothing stays the same.\nThese gardens are meant to be experienced slowly. Visitors are invited to walk quietly, sit, and simply look, letting their thoughts settle. In a fast and noisy world, this kind of calm has become more valuable than ever.\nA Japanese garden, then, is more than a pretty place. It is a work of art that teaches patience and attention, a small, carefully made world where people can pause, breathe, and feel, for a while, a deep and simple peace.",
        summaryJa: "忙しい日本の都市の真ん中で、門をくぐると突然、静けさに出会うことがある。日本庭園は、その美しさと深い安らぎの感覚で世界中に有名だ。ただ多くの鮮やかな花を見せるために設計された庭と違い、日本庭園は自然で・調和し・静かに感じられるよう入念に整えられている。これらの庭を特別にするものは何か。あらゆる要素が丁寧に選ばれる——石・水・苔・木・砂利が調和を生むように配される。池は空を映し、石の小道は視線をゆっくり景色へ導き、掻き均した砂利は、水が無くても流れる水を思わせる。何も無作為ではないのに、庭全体が自然が作ったかのように感じられる。多くの日本庭園は、季節や時の移ろいの考えにも結びつく。春の桜、夏の緑の葉、秋の紅葉、冬の裸の枝が、それぞれの美をもたらす。庭は一年を通じて変わり、何も同じままではないことを訪れる人に思い出させる。これらの庭は、ゆっくり体験されるためのものだ。訪問者は静かに歩き、座り、ただ眺め、思いを落ち着かせるよう誘われる。速く騒がしい世界で、この種の静けさはかつてなく価値あるものになった。だから日本庭園は、美しい場所以上のものだ。忍耐と注意を教える芸術作品であり、人々が立ち止まり、息をつき、しばし深く単純な安らぎを感じられる、小さく丁寧に作られた世界なのだ。",
        quiz: [
          { q: "日本庭園が普通の花壇と違う点は？", options: ["自然で調和し静かに感じるよう入念に整えられる", "できるだけ多くの花を見せる", "無作為に作られる"], answer: 0 },
          { q: "掻き均した砂利が表すものは？", options: ["水が無くても流れる水を思わせる", "本物の川", "道路"], answer: 0 },
          { q: "日本庭園の楽しみ方は？", options: ["静かに歩き座り眺めて思いを落ち着かせる", "急いで通り過ぎる", "大声で話す"], answer: 0 }
        ]
      },
      {
        id: "d0815-5",
        title: "Tiny Whirlpools on the Sun",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "The Sun may look like a smooth, glowing ball, but its surface is a wild and stormy place. Recently, scientists using powerful instruments discovered something new there: tiny whirlpools of hot, electrically charged gas, some only about twenty kilometers wide. On the scale of the Sun, which is more than a million kilometers across, these swirls are astonishingly small.\nWhat are these whirlpools? The Sun is made of plasma, a superheated gas so hot that it behaves differently from ordinary matter. This plasma is always moving, boiling and swirling like water in a pot. The newly seen whirlpools are small, spinning eddies within that restless sea of fire.\nWhy do such tiny features matter? Scientists believe that small movements on the Sun's surface may help carry energy upward into its outer atmosphere, which is strangely much hotter than the surface below. Understanding these swirls could help solve that long-standing mystery, and also improve our knowledge of 'space weather' — the flow of energy and particles that can affect satellites and power grids on Earth.\nSeeing something so small on a body so vast and distant is a triumph of technology. It requires instruments sensitive enough to spot fine detail across ninety-three million miles of space.\nThe discovery is a reminder that even the Sun, which we see every day, still holds secrets. By studying it ever more closely, scientists slowly unravel how our nearest star works — and, in doing so, learn more about the light and energy that make life on Earth possible.",
        summaryJa: "太陽は滑らかに輝く球に見えるかもしれないが、その表面は荒々しく嵐のような場所だ。最近、強力な機器を使う科学者が、そこに新しいものを見つけた——熱く電気を帯びた気体の小さな渦、いくつかは幅わずか約20キロほどだ。差し渡し100万キロを超える太陽の尺度では、これらの渦は驚くほど小さい。この渦とは何か。太陽はプラズマ——普通の物質とは異なる振る舞いをするほど超高温の気体——でできている。このプラズマは常に動き、鍋の水のように沸き渦巻く。新たに見えた渦は、その休みない火の海の中の、小さく回転する渦だ。なぜそんな小さな特徴が重要か。科学者は、太陽表面の小さな動きが、エネルギーを外側の大気へ上向きに運ぶ助けになるかもしれないと考える——その外側の大気は、不思議なことに下の表面よりずっと高温なのだ。これらの渦を理解することは、その長年の謎を解く助けになり、「宇宙天気」——地球の衛星や電力網に影響しうるエネルギーと粒子の流れ——の知識も高めうる。これほど広大で遠い天体で、これほど小さなものを見るのは技術の勝利だ。9300万マイルの宇宙の彼方で細部を捉えられるほど高感度な機器を要する。この発見は、毎日見る太陽でさえ今も秘密を抱えていることを思い出させる。それをますます細かく研究することで、科学者は最も近い恒星がどう働くかを少しずつ解き明かす——そしてそうする中で、地球の生命を可能にする光とエネルギーについてより多くを学ぶのだ。",
        quiz: [
          { q: "科学者が太陽の表面で見つけたものは？", options: ["幅わずか約20キロの熱いプラズマの小さな渦", "巨大な氷の塊", "新しい惑星"], answer: 0 },
          { q: "太陽は何でできているか？", options: ["超高温の気体プラズマ", "固い岩", "水"], answer: 0 },
          { q: "この渦の理解が助けうる謎は？", options: ["外側の大気が表面より高温である理由", "月の色", "地球の重さ"], answer: 0 }
        ]
      }
    ]
  },
    {
    date: "2026-08-14",
    passages: [
      {
        id: "d0814-1",
        title: "Price Wars in Artificial Intelligence",
        level: "★★★",
        genre: "ビジネス",
        text: "When several companies sell a similar service, they often compete on price — and the market for artificial intelligence is no exception. Recently, some AI companies have been cutting the prices they charge to use their systems, while others have raised theirs. Behind these moves lies a fierce battle to win customers in one of the fastest-growing industries in the world.\nWhy cut prices? Lowering the cost of using an AI service can attract more customers, especially businesses that use these tools in large amounts. If a company can offer similar quality for less money, users may switch to it. Winning many customers now can help a company grow and stay ahead, even if profits are thin at first.\nBut cutting prices is risky. Building and running AI systems is enormously expensive, requiring powerful computers and huge amounts of electricity. If prices fall too far, companies may struggle to cover their costs. Some firms instead raise prices, betting that customers will pay more for better speed or quality.\nSpeed itself has become a weapon. A service that answers faster can be more useful, so companies compete not only on price but on how quickly their systems respond.\nFor customers, this competition is mostly good news: more choice, better tools, and often lower prices. For the companies, it is a high-stakes game. In a young and booming market, each must decide whether to chase customers with low prices or profit with higher ones — a classic business question, now playing out at the cutting edge of technology.",
        summaryJa: "複数の企業が似たサービスを売るとき、しばしば価格で競う——AIの市場も例外ではない。最近、一部のAI企業は自社システムの利用料金を引き下げ、別の企業は引き上げている。こうした動きの背後には、世界で最も急成長する産業の一つで顧客を勝ち取る激しい戦いがある。なぜ値下げするのか。AIサービスの利用コストを下げれば、特にこうした道具を大量に使う企業など、より多くの顧客を惹きつけられる。似た品質をより安く提供できれば、利用者は乗り換えるかもしれない。今多くの顧客を勝ち取ることは、たとえ当初の利益が薄くても、企業の成長と先行維持を助けうる。だが値下げは危険だ。AIシステムの構築と運用は莫大に高価で、強力なコンピューターと大量の電力を要する。価格が下がりすぎれば、企業はコストを賄うのに苦しみうる。一部の企業は代わりに、顧客がより良い速度や品質にはより多く払うと賭けて値上げする。速度そのものも武器になった。より速く答えるサービスはより有用でありうるので、企業は価格だけでなく、システムがどれだけ速く応答するかでも競う。顧客にとって、この競争はおおむね朗報だ——選択肢が増え、道具が良くなり、しばしば価格も下がる。企業にとっては高い賭けだ。若く活況の市場で、各社は低価格で顧客を追うか、高価格で利益を得るかを決めねばならない——古典的な経営の問いが、今や技術の最前線で繰り広げられている。",
        quiz: [
          { q: "AI企業が値下げする狙いは？", options: ["より多くの顧客を惹きつけ成長し先行すること", "コストを増やすこと", "顧客を減らすこと"], answer: 0 },
          { q: "値下げが危険な理由は？", options: ["AIの運用は高価で価格が下がりすぎるとコストを賄えない", "電気が無料だから", "顧客が嫌がるから"], answer: 0 },
          { q: "価格以外に企業が競う要素は？", options: ["システムの応答の速さ", "建物の色", "社名の長さ"], answer: 0 }
        ]
      },
      {
        id: "d0814-2",
        title: "Robotaxis Come to the City",
        level: "★★☆",
        genre: "テクノロジー",
        text: "Imagine calling a taxi with your phone, and when it arrives, there is no driver at the wheel. This is becoming real. Companies are preparing to put thousands of self-driving taxis, or 'robotaxis,' onto the roads of European cities, working together with popular ride-hailing apps to reach passengers.\nHow does it work? A robotaxi uses cameras, sensors, and computers to see the road, follow traffic rules, and drive itself. To find customers, some robotaxi companies are teaming up with ride-hailing services people already use. When you request a ride, the app might send a self-driving car instead of a human driver.\nWhy team up with an app? Building the self-driving technology is one challenge; finding passengers is another. A popular app already has millions of users, a payment system, and a way to match riders with cars. By joining forces, a robotaxi maker gets instant access to customers, while the app can offer a new kind of service.\nThere are still hurdles. Self-driving cars must prove they are safe in busy, unpredictable streets. Rules differ from country to country, and some passengers may feel nervous without a driver. Trust takes time to build.\nStill, the change could be significant. Robotaxis might one day make travel cheaper and reduce the need to own a car. For now, each city that welcomes them becomes a real-world test — a place where a technology once seen only in science fiction quietly pulls up to the curb, ready to take passengers into an autonomous future.",
        summaryJa: "スマホでタクシーを呼び、着いたら運転席に誰もいない——そんな場面を想像してほしい。これが現実になりつつある。企業は、何千台もの自動運転タクシー「ロボタクシー」を欧州の都市の道路に投入する準備を進め、人気の配車アプリと協力して乗客に届こうとしている。どう機能するのか。ロボタクシーはカメラ・センサー・コンピューターを使って道路を見て、交通規則に従い、自ら運転する。顧客を見つけるため、一部のロボタクシー企業は、人々が既に使う配車サービスと組んでいる。乗車を頼むと、アプリが人間の運転手の代わりに自動運転車を送るかもしれない。なぜアプリと組むのか。自動運転技術を作るのは一つの挑戦、乗客を見つけるのは別の挑戦だ。人気アプリには既に何百万もの利用者、決済の仕組み、乗客と車を結ぶ方法がある。力を合わせれば、ロボタクシーの作り手は顧客に即座にアクセスでき、アプリは新種のサービスを提供できる。まだ障害もある。自動運転車は、混雑し予測しにくい街路で安全だと証明せねばならない。規則は国ごとに異なり、運転手がいないと不安を感じる乗客もいる。信頼は築くのに時間がかかる。それでも変化は大きくなりうる。ロボタクシーはいつか移動を安くし、車を所有する必要を減らすかもしれない。今のところ、それを迎える各都市が現実の試験場になる——かつてSFでしか見られなかった技術が、静かに縁石に寄せて、乗客を自律の未来へ乗せる準備をする場所だ。",
        quiz: [
          { q: "ロボタクシーが自ら運転する仕組みは？", options: ["カメラ・センサー・コンピューターで道路を見て規則に従う", "運転手が遠隔で運転する", "レールの上を走る"], answer: 0 },
          { q: "ロボタクシー企業が配車アプリと組む理由は？", options: ["既存の利用者・決済・マッチングにすぐアクセスできる", "技術が不要になるから", "車を隠すため"], answer: 0 },
          { q: "本文が挙げる障害は？", options: ["安全の証明・国ごとの規則の違い・乗客の不安", "車が速すぎること", "道路が無いこと"], answer: 0 }
        ]
      },
      {
        id: "d0814-3",
        title: "The Long Journey of Everyday Things",
        level: "★★★",
        genre: "世界情勢",
        text: "Look closely at an ordinary object — a phone, a shirt, or a chocolate bar — and you may be holding the work of many countries. In today's connected world, the things we use every day are often made through long, complex journeys that cross borders many times before reaching a shop near us.\nHow does this happen? A single product may be designed in one country, using materials dug from the ground in another. Its parts might be made in several places, then shipped somewhere else to be put together. Finally, it travels to stores around the world. This web of steps is called a global supply chain.\nWhy make things this way? Different countries have different strengths — some have raw materials, some have skilled workers, some have advanced factories. By using the best of each, companies can make goods more cheaply and efficiently than any single country could alone. The result is products that are better and often less expensive.\nBut such long chains can be fragile. A storm, a closed port, a shortage, or a political dispute in one country can delay products all over the world. Recent years have shown how quickly a problem in one place can ripple across the globe.\nUnderstanding supply chains helps make sense of the news. When prices rise or shelves go empty, the cause is often far away. Behind almost everything we own is a hidden, worldwide network of people and places, quietly working together to bring the world's goods to our hands.",
        summaryJa: "ありふれた物——携帯・シャツ・板チョコ——をよく見ると、多くの国の仕事を手にしているかもしれない。今日のつながった世界で、私たちが毎日使う物は、近くの店に届く前に何度も国境を越える、長く複雑な旅を経て作られることが多い。どうしてそうなるのか。一つの製品が、ある国で設計され、別の国の地中から掘り出した材料を使うことがある。その部品はいくつかの場所で作られ、別のどこかへ運ばれて組み立てられる。最後に、世界中の店へ旅する。この工程の網は「グローバル・サプライチェーン（世界的な供給網）」と呼ばれる。なぜこう作るのか。国ごとに強みが違う——材料を持つ国、熟練労働者のいる国、先端工場のある国。それぞれの最良を使うことで、企業はどの一国が単独でできるより安く効率的に物を作れる。結果として、より良く、しばしばより安い製品ができる。だがこうした長い連鎖はもろくなりうる。ある国の嵐・閉ざされた港・不足・政治的対立が、世界中の製品を遅らせうる。近年は、一か所の問題がいかに速く世界へ波及するかを示してきた。供給網を理解すると、ニュースが腑に落ちる。価格が上がったり棚が空になったりするとき、原因はしばしば遠くにある。私たちが持つほぼ全ての物の背後には、世界の品を私たちの手に運ぶため静かに協働する、人と場所の隠れた世界的な網があるのだ。",
        quiz: [
          { q: "「グローバル・サプライチェーン」とは？", options: ["国境を越えて物を作り届ける工程の網", "一国だけの工場", "店の名前"], answer: 0 },
          { q: "各国の強みを使って作る利点は？", options: ["より安く効率的に、より良い製品を作れる", "製品が必ず高くなる", "一国で全て作れる"], answer: 0 },
          { q: "長い供給網がもろい理由は？", options: ["一か所の問題が世界中の製品を遅らせうる", "物が丈夫すぎるから", "国が一つだから"], answer: 0 }
        ]
      },
      {
        id: "d0814-4",
        title: "Why Japan Lives So Long",
        level: "★★☆",
        genre: "日本",
        text: "Japan is famous for something remarkable: its people live, on average, among the longest lives in the world. Many Japanese reach their eighties, nineties, and beyond, and the country has a large number of people over one hundred years old. Why do people in Japan tend to live so long?\nOne important reason is diet. Traditional Japanese meals include a lot of fish, vegetables, rice, and soy foods, with smaller portions than in many countries. This kind of eating is generally low in unhealthy fats and rich in nutrients, which is good for the heart and body over a lifetime.\nHealthcare also plays a big part. Japan has a system that makes it easy for people to see a doctor, so illnesses can be found and treated early. Regular check-ups help people stay healthy as they age.\nDaily habits matter too. Many people walk or cycle as part of their routine, staying active without needing a gym. Strong social ties — staying connected with family, friends, and community — are also linked to longer, healthier lives.\nOf course, long life brings challenges. As more people grow old and fewer babies are born, Japan must find ways to care for its aging population and support them well.\nStill, Japan's long lives hold useful lessons for everyone. Good food, regular movement, medical care, and close relationships all seem to help. Living long is not the result of a single secret, but of many small, healthy habits, repeated patiently over many years.",
        summaryJa: "日本はある驚くべきことで有名だ——その人々は平均して、世界で最も長い部類の人生を生きる。多くの日本人が80代・90代、さらにその先に達し、100歳を超える人も多い。なぜ日本の人々はそれほど長生きしがちなのか。重要な理由の一つは食事だ。伝統的な和食は魚・野菜・米・大豆食品を多く含み、多くの国より一人前が小さい。この食べ方は概して不健康な脂肪が少なく栄養に富み、生涯を通じて心臓と体に良い。医療も大きな役割を果たす。日本には医者にかかりやすい仕組みがあり、病気を早く見つけて治療できる。定期健診は、年を重ねても健康を保つ助けになる。日々の習慣も重要だ。多くの人が日課の一部として歩いたり自転車に乗ったりし、ジムを要さず活動的でいる。強い社会的つながり——家族・友人・地域とつながり続けること——も、より長く健康な人生に結びつく。もちろん長寿は課題も生む。より多くの人が老い、生まれる赤ちゃんが減る中、日本は高齢の人々を世話し、よく支える方法を見つけねばならない。それでも日本の長い人生は、誰にとっても有益な教訓を持つ。良い食事、規則的な運動、医療、親密な関係——すべてが助けになるようだ。長生きは一つの秘密の結果でなく、多くの小さな健康的な習慣を、長年忍耐強く繰り返した結果なのだ。",
        quiz: [
          { q: "日本人が長生きしがちな理由の一つは？", options: ["魚・野菜・米・大豆中心で量が控えめな食事", "甘い物ばかりの食事", "運動を全くしないこと"], answer: 0 },
          { q: "医療が長寿に果たす役割は？", options: ["医者にかかりやすく病気を早く見つけ治療できる", "病院が無いこと", "健診をしないこと"], answer: 0 },
          { q: "本文の結論は？", options: ["長生きは多くの小さな健康習慣の積み重ねの結果", "一つの秘密の薬のおかげ", "運だけで決まる"], answer: 0 }
        ]
      },
      {
        id: "d0814-5",
        title: "The True Colors of Ancient Creatures",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "When we picture dinosaurs or other ancient animals, we usually imagine dull greens and browns. But how do we really know what color they were? Recently, scientists studying a fossil more than one hundred million years old found evidence that one flying reptile may have shimmered with bright, iridescent greens and pinks — colors that shine and shift like those on a soap bubble or a beetle's shell.\nHow can anyone know the color of an animal that died so long ago? The answer lies in tiny structures. Colors in feathers, skin, and shells often come not only from pigments but from the microscopic shape of the material itself. Certain shapes bend light in ways that create shimmering, changing colors. Amazingly, traces of these tiny structures can sometimes survive in fossils.\nBy examining these structures under powerful microscopes and comparing them to living animals, scientists can make careful guesses about an ancient creature's colors. It is like reading a faint message left behind in stone.\nWhy does color matter to science? Color can tell us how an animal lived — whether it used bright shades to attract mates, to warn enemies, or to blend in. Learning about color helps bring extinct animals to life and reveals how they behaved.\nThe discovery reminds us that the ancient world may have been far more colorful than the grey fossils suggest. With patient study and clever tools, scientists are slowly repainting the past — showing that creatures long gone may once have glittered brilliantly in the light of a very different world.",
        summaryJa: "恐竜や他の古代の動物を思い描くとき、私たちはたいてい地味な緑や茶色を想像する。だが本当は、彼らが何色だったのかをどう知るのか。最近、1億年以上前の化石を研究する科学者が、ある飛ぶ爬虫類が、明るく虹色に輝く緑やピンク——シャボン玉や甲虫の殻のように光り、移ろう色——できらめいていたかもしれない証拠を見つけた。そんなに昔に死んだ動物の色を、どうして知りうるのか。答えは微細な構造にある。羽・皮膚・殻の色は、しばしば色素だけでなく、材料そのものの顕微鏡的な形から生まれる。特定の形は、きらめき移ろう色を生むように光を曲げる。驚くことに、こうした微細な構造の痕跡が、化石に残ることがある。強力な顕微鏡でこれらの構造を調べ、生きた動物と比べることで、科学者は古代の生き物の色について慎重な推測ができる。石に残されたかすかな伝言を読むようなものだ。なぜ色が科学に重要か。色は、動物がどう生きたか——明るい色合いで配偶者を惹きつけたか、敵を警告したか、周囲に紛れたか——を教えうる。色を知ることは、絶滅した動物を生き生きとよみがえらせ、その振る舞いを明かす助けになる。この発見は、古代の世界が灰色の化石が示すよりはるかに色彩豊かだったかもしれないことを思い出させる。忍耐強い研究と巧妙な道具で、科学者は少しずつ過去を描き直している——遠く消えた生き物が、かつてまったく異なる世界の光の中できらびやかに輝いていたかもしれないことを示して。",
        quiz: [
          { q: "科学者が古代の動物の色を知る手がかりは？", options: ["色を生む微細な構造の痕跡が化石に残ること", "当時の絵画", "文字の記録"], answer: 0 },
          { q: "羽や殻の色が生まれる要因は？", options: ["色素だけでなく材料の顕微鏡的な形", "温度だけ", "音"], answer: 0 },
          { q: "色が科学に重要な理由は？", options: ["動物がどう生きたか（求愛・警告・擬態）を教えうる", "色は無意味だから", "化石を壊すから"], answer: 0 }
        ]
      }
    ]
  },
    {
    date: "2026-08-13",
    passages: [
      {
        id: "d0813-1",
        title: "Why Online Giants Open Real Shops",
        level: "★★☆",
        genre: "ビジネス",
        text: "It might seem strange for a company famous for the internet to open a physical store, yet that is exactly what is happening. Recently, a major technology company opened its first flagship store in Japan, in a fashionable district of Tokyo. Why would a business built online want a real shop made of glass and concrete?\nOne reason is experience. Online, customers can read about a product, but they cannot touch it. In a physical store, people can hold a device, try its features, and ask questions face to face. This hands-on experience can build trust and excitement that a website alone cannot create.\nAnother reason is the brand. A beautiful flagship store in a famous shopping area is like a giant advertisement. Even people who do not buy anything see the store, remember the brand, and may feel it is important and reliable. The building itself sends a message.\nStores also offer support. Customers can bring in broken devices, get advice, or learn how to use new features. Good service in person can turn a buyer into a loyal, long-term customer.\nOf course, physical stores are expensive to build and run, so companies open them carefully, usually in busy, high-profile locations.\nThe trend shows that online and offline business are not enemies but partners. Even in a digital age, people still value real places, real objects, and real human help. A well-designed store lets an online company meet its customers in person — and turn clicks into a lasting relationship.",
        summaryJa: "インターネットで有名な企業が実店舗を開くのは奇妙に見えるかもしれないが、まさにそれが起きている。最近、ある大手技術企業が、東京のおしゃれな地区に日本初の旗艦店を開いた。オンラインで築かれた事業が、なぜガラスとコンクリートの実店舗を欲しがるのか。理由の一つは体験だ。オンラインでは製品について読めるが、触れられない。実店舗では、人は端末を手に取り、機能を試し、対面で質問できる。この実際に触れる体験は、ウェブサイトだけでは生めない信頼と高揚を築きうる。もう一つの理由はブランドだ。有名な商店街の美しい旗艦店は、巨大な広告のようなものだ。何も買わない人でも店を見て、ブランドを覚え、重要で信頼できると感じるかもしれない。建物自体がメッセージを送る。店はサポートも提供する。客は壊れた端末を持ち込み、助言を得て、新機能の使い方を学べる。対面の良いサービスは、買い手を忠実で長期の顧客に変えうる。もちろん実店舗は建設も運営も高価なので、企業は普通、賑やかで注目される場所に慎重に開く。この流れは、オンラインとオフラインの事業が敵でなく相棒であることを示す。デジタル時代でも、人はなお本物の場所・本物の品・本物の人の助けを大切にする。よく設計された店は、オンライン企業が顧客と対面で会い、クリックを永続的な関係に変えることを可能にする。",
        quiz: [
          { q: "オンライン企業が実店舗を開く理由の一つは？", options: ["客が製品を手に取り試せる体験を提供できる", "店の方が安いから", "ウェブが使えないから"], answer: 0 },
          { q: "旗艦店がブランドに与える効果は？", options: ["巨大な広告となりブランドを覚えさせる", "客を追い返す", "製品を隠す"], answer: 0 },
          { q: "本文の結論は？", options: ["オンラインとオフラインは敵でなく相棒", "実店舗は不要である", "オンラインはもう終わった"], answer: 0 }
        ]
      },
      {
        id: "d0813-2",
        title: "Mining the Ocean Floor",
        level: "★★★",
        genre: "テクノロジー",
        text: "Far below the surface of the sea, in cold and total darkness, lie valuable metals that the modern world badly needs. Recently, plans were announced for one of the deepest undersea mines ever attempted, aiming to collect rare earth elements from the ocean floor. These metals are essential for many technologies, and reaching them is a huge engineering challenge.\nWhy mine the deep sea? Rare earth elements are used in magnets, motors, batteries, wind turbines, and electronics. They are found on land in only a few places, so countries are searching for new sources. The deep ocean floor holds large amounts — enough, some say, to meet industrial demand for a very long time.\nBut mining thousands of meters underwater is extremely difficult. The pressure is crushing, there is no light, and machines must operate far from any human hand. Engineers must design robots and systems that can dig, collect, and lift material to the surface, all while working reliably in one of the harshest places on Earth.\nThere are serious concerns too. The deep sea is home to strange and little-understood life, and mining could damage these fragile ecosystems. Scientists warn that we must understand the risks before disturbing a world we know so little about.\nThe project shows both human ingenuity and difficult choices. We have the technology to reach places once thought impossible, but with that power comes responsibility. As we search the deep ocean for the metals of the future, we must also decide how to protect the mysterious world we find there.",
        summaryJa: "海面のはるか下、冷たく完全な暗闇の中に、現代世界が切実に必要とする貴重な金属が眠っている。最近、これまでで最も深い海底鉱山の一つの計画が発表され、海底からレアアース（希土類元素）を集めることを目指す。これらの金属は多くの技術に不可欠で、それに到達するのは巨大な工学的挑戦だ。なぜ深海を採掘するのか。レアアースは磁石・モーター・電池・風力タービン・電子機器に使われる。陸上ではわずかな場所にしかないため、各国は新たな供給源を探している。深海の海底は大量に蓄え、一部は非常に長い間、産業需要を満たすのに十分だと言う。だが水中数千メートルでの採掘は極めて難しい。圧力は押し潰すほどで、光はなく、機械は人の手から遠く離れて動かねばならない。技術者は、地球で最も過酷な場所の一つで確実に働きつつ、掘り・集め・材料を海面へ持ち上げるロボットとシステムを設計せねばならない。深刻な懸念もある。深海は奇妙でほとんど理解されていない生命の住処で、採掘はこの脆い生態系を損ないうる。科学者は、ほとんど知らない世界をかき乱す前に、リスクを理解せねばならないと警告する。この事業は人間の創意と難しい選択の双方を示す。かつて不可能と思われた場所に到達する技術を持つが、その力には責任が伴う。未来の金属を求めて深海を探るとき、私たちはそこで見つける神秘の世界をどう守るかも決めねばならない。",
        quiz: [
          { q: "なぜ深海を採掘しようとするのか？", options: ["技術に不可欠なレアアースが大量にあるから", "水が欲しいから", "魚を採るため"], answer: 0 },
          { q: "深海採掘が難しい理由は？", options: ["高い圧力・暗闇で機械が人の手から遠く働くから", "浅すぎるから", "暖かすぎるから"], answer: 0 },
          { q: "本文が挙げる懸念は？", options: ["脆い深海の生態系を損ないうる", "金属が無価値なこと", "海が浅くなること"], answer: 0 }
        ]
      },
      {
        id: "d0813-3",
        title: "The Rise of a Global Language",
        level: "★★★",
        genre: "世界情勢",
        text: "Around the world, when people from different countries meet, they often need a shared language to understand each other. More and more, that language is English. A business meeting between a German and a Japanese company, a science conference, or a group of tourists from many nations — all may use English as a common tool, even when it is no one's first language.\nWhy did English spread so widely? History and trade played a large part, and today English is the main language of international business, science, aviation, and the internet. Because so many people already study it, learning English opens doors to jobs, education, and communication across borders.\nA shared global language brings real benefits. It lets a doctor in one country read research from another, helps businesses trade, and allows travelers to find their way. In a connected world, being able to communicate widely is a valuable skill.\nBut there are concerns too. As English grows, some worry that smaller languages may be used less, and that a piece of each culture could be lost with them. Many people believe it is important to learn English while also protecting one's own language and traditions.\nInterestingly, global English no longer belongs only to countries where it began. It is shaped by millions of speakers worldwide, each adding their own accent and style.\nFor learners, this is encouraging. English is not about sounding perfect, but about connecting with others. Every new phrase learned is another bridge to the wider world — and to the many people waiting to be understood.",
        summaryJa: "世界中で、異なる国の人々が出会うとき、互いを理解するために共有する言語がしばしば必要になる。ますますその言語は英語だ。ドイツと日本の企業の商談、科学会議、多くの国から来た観光客の一団——すべてが、誰の母語でなくても、英語を共通の道具として使いうる。なぜ英語はそれほど広まったのか。歴史と貿易が大きな役割を果たし、今日、英語は国際ビジネス・科学・航空・インターネットの主要言語だ。既に多くの人が学んでいるため、英語を学ぶことは、国境を越えた仕事・教育・意思疎通への扉を開く。共有の世界言語は本当の利益をもたらす。ある国の医師が別の国の研究を読めるようにし、企業の取引を助け、旅行者が道を見つけられるようにする。つながった世界で、広く意思疎通できることは価値ある技能だ。だが懸念もある。英語が広がるにつれ、より小さな言語が使われなくなり、それとともに各文化の一部が失われうると心配する人もいる。多くの人は、自分の言語や伝統を守りつつ英語を学ぶことが重要だと信じる。興味深いことに、世界の英語はもはや、それが始まった国だけのものではない。世界中の何百万もの話者に形づくられ、各自が独自の訛りとスタイルを加える。学習者には、これは励みだ。英語は完璧に聞こえることでなく、他者とつながることだ。学んだ新しい表現の一つ一つが、より広い世界——そして理解されるのを待つ多くの人々——への、もう一つの橋なのだ。",
        quiz: [
          { q: "異なる国の人々が共通の道具として使うことが増えている言語は？", options: ["英語", "どの言語でもない", "数字だけ"], answer: 0 },
          { q: "共有の世界言語の利益は？", options: ["他国の研究を読めたり取引や旅行を助けたりする", "文化を消すこと", "移動を止めること"], answer: 0 },
          { q: "本文が学習者に伝えることは？", options: ["英語は完璧さでなく他者とつながること", "完璧に話せねば無意味", "英語は学ぶ必要がない"], answer: 0 }
        ]
      },
      {
        id: "d0813-4",
        title: "Japan's Cooling Summer Foods",
        level: "★★☆",
        genre: "日本",
        text: "Japanese summers are hot and humid, and over the centuries people have developed clever, delicious ways to cool down through food. When the weather is at its hottest, certain dishes appear on tables and at festivals across the country, each designed to bring a feeling of coolness and refreshment.\nOne favorite is kakigori, or shaved ice. Fine, fluffy ice is piled into a mountain and topped with sweet, colorful syrups — strawberry, green tea, lemon, and many more. Sold at festivals and shops, it is a bright, icy treat that both children and adults love on a hot afternoon.\nAnother summer classic is somen, very thin noodles served cold. They are often eaten with a light dipping sauce and simple toppings. In a playful tradition called nagashi-somen, the noodles slide down a channel of running water, and diners catch them with chopsticks as they pass — a cool and fun way to eat.\nThese foods are about more than taste. Cold dishes help the body feel cooler, and their light flavors are easy to enjoy even when the heat takes away one's appetite. Eating them is also part of the rhythm of the season, a small ritual that marks the arrival of summer.\nFood, in this way, becomes a gentle answer to the weather. Instead of only fighting the heat with machines, people also welcome it with special dishes. A bowl of shaved ice or cold noodles turns a hot day into something to enjoy — proof that even summer's discomforts can be met with a little pleasure and tradition.",
        summaryJa: "日本の夏は暑く湿気が多く、何世紀もかけて人々は食べ物で涼をとる巧みでおいしい方法を編み出してきた。天気が最も暑いとき、涼しさと爽やかさをもたらすよう作られた特定の料理が、全国の食卓や祭りに現れる。人気の一つはかき氷だ。細かくふわふわの氷が山盛りにされ、甘く色とりどりのシロップ——いちご・抹茶・レモンなど——がかけられる。祭りや店で売られ、暑い午後に子供も大人も愛する明るく冷たい一品だ。もう一つの夏の定番はそうめん、冷たく供される非常に細い麺だ。しばしば軽いつゆと簡素な薬味で食べる。流しそうめんという遊び心ある慣わしでは、麺が流れる水の樋を滑り下り、食べる人が通り過ぎるのを箸で捕まえる——涼しく楽しい食べ方だ。これらの食べ物は味以上のものだ。冷たい料理は体を涼しく感じさせ、その軽い味は、暑さで食欲が失せるときでも楽しみやすい。食べることは季節のリズムの一部でもあり、夏の到来を告げる小さな儀式だ。こうして食べ物は天気への穏やかな答えになる。機械だけで暑さと闘う代わりに、人々は特別な料理でそれを迎えもする。かき氷や冷たい麺の一杯が、暑い日を楽しめるものに変える——夏の不快さでさえ、少しの喜びと伝統で迎えられる証だ。",
        quiz: [
          { q: "かき氷とはどんな食べ物か？", options: ["細かい氷に甘いシロップをかけた冷たい一品", "温かいスープ", "焼いた肉"], answer: 0 },
          { q: "流しそうめんとは？", options: ["流れる水を滑る麺を箸で捕まえて食べる慣わし", "麺を焼く方法", "麺を売る店"], answer: 0 },
          { q: "夏の冷たい料理が味以上に持つ意味は？", options: ["体を涼しく感じさせ季節のリズムを告げる", "体を温めること", "食欲を無くすこと"], answer: 0 }
        ]
      },
      {
        id: "d0813-5",
        title: "Mysterious Lights Above the Storm",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "One night, people in Japan reported seeing a strange red light stretching upward across the sky. It was not a UFO or a trick of the eyes, but a rare and beautiful natural event called a 'sprite' — a brief flash of light that appears high above thunderstorms, far above the clouds we usually see.\nWhat exactly is a sprite? Everyone knows lightning, which flashes between clouds or down to the ground. Sprites are different. They occur much higher up, in the thin air near the edge of space, and they often glow red rather than white. They are triggered by powerful lightning in the storm below, but they leap upward instead of down.\nWhy are sprites so hard to see? They last only a tiny fraction of a second and appear very high in the sky, usually far from the observer. For a long time, pilots reported strange flashes, but scientists could not easily study them. Only with modern high-speed cameras have we begun to capture and understand these events.\nStudying sprites teaches us about the upper atmosphere, a region that is difficult to reach and still full of mysteries. Understanding how energy moves through it helps scientists learn more about our planet's weather and the edge of space.\nThe sighting is a reminder that wonders can appear in the everyday sky. Above an ordinary thunderstorm, for a single instant, nature paints a red flash most people never see. To notice it is to be reminded how much beauty and mystery still hang quietly above our heads.",
        summaryJa: "ある夜、日本の人々が、空を上へと伸びる奇妙な赤い光を見たと報告した。UFOでも目の錯覚でもなく、「スプライト」と呼ばれる稀で美しい自然現象だった——雷雨のはるか上、普段見る雲よりずっと高くに現れる、一瞬の光の閃きだ。スプライトとは正確には何か。誰もが、雲の間や地面へ光る稲妻を知っている。スプライトは違う。ずっと高く、宇宙の縁に近い薄い空気の中で起き、白でなく赤く輝くことが多い。下の嵐の強力な雷に引き起こされるが、下でなく上へ跳ね上がる。なぜスプライトはそれほど見えにくいのか。ほんの一瞬しか続かず、空の非常に高いところに、普通は観測者から遠く現れる。長い間、操縦士が奇妙な閃光を報告したが、科学者は容易には研究できなかった。現代の高速度カメラがあって初めて、私たちはこうした現象を捉え理解し始めた。スプライトの研究は、到達が難しく今も謎に満ちた領域である上層大気について教えてくれる。そこをエネルギーがどう動くかを理解することは、地球の天気や宇宙の縁についてより多くを学ぶ助けになる。この目撃は、日々の空にも驚異が現れうることを思い出させる。ありふれた雷雨の上で、ただ一瞬、自然はほとんどの人が見ない赤い閃光を描く。それに気づくことは、私たちの頭上に、どれほど多くの美と神秘が今も静かに漂っているかを思い出すことだ。",
        quiz: [
          { q: "「スプライト」とは何か？", options: ["雷雨のはるか上に現れる一瞬の光", "UFO", "街の照明"], answer: 0 },
          { q: "スプライトが普通の稲妻と違う点は？", options: ["ずっと高くで起き、上へ跳ね赤く輝くことが多い", "地面に落ちること", "音が非常に大きいこと"], answer: 0 },
          { q: "スプライトの研究が教えてくれるものは？", options: ["謎に満ちた上層大気について", "海の深さ", "地下の金属"], answer: 0 }
        ]
      }
    ]
  },
    {
    date: "2026-08-12",
    passages: [
      {
        id: "d0812-1",
        title: "From the Lab to the Market",
        level: "★★★",
        genre: "ビジネス",
        text: "Some of today's most exciting companies did not begin in a boardroom, but in a university laboratory. When researchers make a discovery — a new material, a clever robot, or a better way to make medicine — they sometimes start a company to turn that idea into a real product. These new firms, often called university 'spinouts,' are becoming an important source of innovation, including in Japan.\nWhy do discoveries need companies? A great idea in a research paper does not automatically help anyone. To reach the world, it must be developed, tested, manufactured, and sold — work that requires money, staff, and business skills. By founding a company, researchers can raise money from investors and build a team to bring their invention to life.\nThis path is not easy. Scientists are experts in their field, but running a business requires very different skills — managing people, finding customers, and handling money. Many spinouts fail, and even successful ones take years to grow. Support from universities, investors, and experienced managers can make a big difference.\nWhen these companies succeed, everyone can benefit. They create jobs, bring useful new products to market, and help a country stay competitive in advanced fields such as robotics, biotechnology, and clean energy.\nThe rise of university spinouts shows how closely knowledge and business are linked. A discovery is only the beginning. Turning it into something people can actually use is a long journey — and the companies that make that journey help carry the fruits of research from the quiet lab into everyday life.",
        summaryJa: "今日の最も刺激的な企業のいくつかは、役員会議室でなく大学の研究室で生まれた。研究者が発見をしたとき——新素材、巧妙なロボット、より良い薬の作り方——その着想を現実の製品に変えるため会社を興すことがある。しばしば大学「スピンアウト」と呼ばれるこうした新会社は、日本を含め、革新の重要な源になりつつある。なぜ発見に会社が要るのか。論文の中の素晴らしい着想は、自動的に誰かを助けはしない。世界に届くには、開発・試験・製造・販売されねばならず、それにはお金・人材・経営技能が要る。会社を設立すれば、研究者は投資家から資金を集め、発明を形にするチームを築ける。この道は容易ではない。科学者は専門分野の達人だが、事業運営には全く異なる技能——人の管理、顧客の獲得、お金の扱い——が要る。多くのスピンアウトは失敗し、成功するものも成長に何年もかかる。大学・投資家・経験ある経営者の支援が大きな違いを生みうる。こうした企業が成功すれば、皆が恩恵を受けうる。雇用を生み、有用な新製品を市場にもたらし、ロボット工学・バイオテクノロジー・クリーンエネルギーなど先端分野で国が競争力を保つ助けになる。大学スピンアウトの台頭は、知識と事業がいかに密接に結びつくかを示す。発見は始まりにすぎない。それを人々が実際に使えるものに変えるのは長い旅であり、その旅を成し遂げる企業が、研究の果実を静かな研究室から日々の暮らしへ運ぶ助けをする。",
        quiz: [
          { q: "大学「スピンアウト」とは？", options: ["研究の発見を製品に変えるため研究者が興す会社", "大学の授業の一種", "政府機関"], answer: 0 },
          { q: "発見に会社が必要な理由は？", options: ["開発・試験・製造・販売にお金や人材、経営技能が要るから", "研究が自動で製品になるから", "会社は不要だから"], answer: 0 },
          { q: "この道が容易でない理由は？", options: ["事業運営は研究とは異なる技能を要し多くが失敗する", "科学者は何でもできるから", "すぐ成功するから"], answer: 0 }
        ]
      },
      {
        id: "d0812-2",
        title: "A Patch That Helps You Sleep",
        level: "★★☆",
        genre: "テクノロジー",
        text: "Good sleep is one of the most important things for our health, yet many people struggle to get enough of it. Scientists are now testing a small wearable patch designed to help people reach deep, restful sleep more quickly. In an early study, the device helped users reach an important stage of sleep sooner and stay in it longer.\nWhy does the stage of sleep matter? During the night, we pass through different stages. One of them, often called REM sleep, is especially important for the brain — it helps with memory, learning, and emotional balance. People who do not get enough of this stage may feel tired and unfocused, even after a full night in bed.\nHow might a patch help? Worn on the body, the device gently sends signals that encourage the brain to move into deeper sleep more easily. Instead of using drugs, it works with the body's natural rhythms, which may make it gentler and safer for regular use.\nIt is important to be careful. The study was small, and much more testing is needed before such a device could be widely used. Sleep is complex, and what helps in a laboratory may work differently for different people.\nStill, the research points to an appealing idea: using gentle technology to improve something as basic as sleep. If devices like this prove safe and effective, they could help millions of people rest better — and wake up ready to face the day, refreshed by the simple, powerful medicine of a good night's sleep.",
        summaryJa: "良い睡眠は健康にとって最も重要なものの一つだが、多くの人が十分に取れずに苦しむ。科学者は今、人々がより早く深く安らかな睡眠に達する助けとなる、小さな装着型パッチを試している。初期の研究で、この装置は利用者が重要な睡眠段階により早く達し、より長くとどまる助けをした。なぜ睡眠の段階が重要か。夜の間、私たちは異なる段階を通る。その一つ、しばしばレム睡眠と呼ばれる段階は脳に特に重要だ——記憶・学習・感情の安定を助ける。この段階が足りない人は、一晩寝ても疲れて集中できないと感じうる。パッチはどう助けうるのか。体に装着され、装置は脳がより容易に深い睡眠へ移るよう促す穏やかな信号を送る。薬を使う代わりに、体の自然なリズムと協働するので、日常的な使用にもより穏やかで安全かもしれない。慎重さが大切だ。研究は小規模で、こうした装置が広く使われる前にはるかに多くの試験が要る。睡眠は複雑で、実験室で効くものが人によって異なる働きをしうる。それでも研究は魅力的な発想を示す——穏やかな技術で、睡眠のような基本的なものを改善すること。こうした装置が安全で有効と証明されれば、何百万もの人がより良く休む助けになりうる——そして良い睡眠という単純で強力な薬に癒され、一日に立ち向かう準備をして目覚める。",
        quiz: [
          { q: "この装置が助けるのは？", options: ["深く安らかな睡眠に早く達すること", "目を覚まし続けること", "運動すること"], answer: 0 },
          { q: "レム睡眠が重要な理由は？", options: ["記憶・学習・感情の安定を助けるから", "体温を上げるから", "空腹を防ぐから"], answer: 0 },
          { q: "本文が促す慎重さは？", options: ["研究は小規模でさらなる試験が必要", "装置は完璧である", "睡眠は単純である"], answer: 0 }
        ]
      },
      {
        id: "d0812-3",
        title: "Science the Whole World Shares",
        level: "★★★",
        genre: "世界情勢",
        text: "Some of humanity's greatest scientific tools are too big and too expensive for any single country to build alone. Giant telescopes, particle laboratories, and space missions often cost billions of dollars and require the skills of thousands of experts. To make them possible, countries around the world join together, sharing the cost, the work, and the discoveries.\nWhy cooperate on science? Beyond saving money, working together brings the best minds from many nations to one problem. A telescope built by several countries can be more powerful than any one nation could afford. And when new knowledge is found — about distant planets, tiny particles, or the origins of the universe — it belongs to all of humanity, not just one country.\nModern tools are making these projects even more powerful. Advanced computers and artificial intelligence now help scientists sort through the enormous amounts of data these instruments produce, spotting patterns that humans might miss and speeding up discovery.\nSuch cooperation is not always simple. Countries must agree on goals, share control, and keep working together even when their relations are tense elsewhere. Yet science has often been a bridge, connecting people across borders through shared curiosity.\nThe results belong to everyone. Images from a great telescope, or knowledge about how the universe began, are shared freely with students, scientists, and dreamers everywhere. In a divided world, these shared scientific adventures are a quiet reminder of what people can achieve when they look outward together, united by the simple wish to understand.",
        summaryJa: "人類の最も偉大な科学の道具のいくつかは、どの一国にとっても単独で建てるには大きすぎ高価すぎる。巨大望遠鏡、素粒子研究所、宇宙ミッションはしばしば数十億ドルを要し、何千もの専門家の技能を必要とする。それらを可能にするため、世界中の国々が手を組み、費用・作業・発見を分かち合う。なぜ科学で協力するのか。お金の節約を超え、共に働くことは多くの国の最良の頭脳を一つの問題に集める。数か国で建てた望遠鏡は、どの一国が賄えるものより強力になりうる。そして新しい知——遠い惑星、小さな粒子、宇宙の起源についての——が見つかれば、それは一国でなく全人類のものだ。現代の道具はこうした事業をさらに強力にしている。先端のコンピューターとAIが、これらの機器が生む膨大なデータを整理し、人が見逃す模様を見つけ、発見を速める助けをする。こうした協力は常に単純ではない。国々は目標に合意し、統制を分かち合い、他所で関係が緊張していても共に働き続けねばならない。だが科学はしばしば橋となり、共有する好奇心を通じて国境を越えて人々をつないできた。成果は皆のものだ。偉大な望遠鏡の画像や、宇宙がどう始まったかの知識は、どこの学生・科学者・夢見る人にも自由に共有される。分断された世界で、こうした共有される科学の冒険は、人々が共に外を見つめ、理解したいという単純な願いに結ばれたとき何を成し遂げられるかの、静かな気づきだ。",
        quiz: [
          { q: "巨大な科学の道具で国々が協力する理由は？", options: ["費用が高く単独では建てられず知恵も集められるから", "科学は簡単だから", "一国で十分だから"], answer: 0 },
          { q: "AIやコンピューターが科学で果たす役割は？", options: ["膨大なデータを整理し模様を見つけ発見を速める", "望遠鏡を建てること", "国境を引くこと"], answer: 0 },
          { q: "発見された知は誰のものか？", options: ["全人類のもの", "一国だけのもの", "誰のものでもない"], answer: 0 }
        ]
      },
      {
        id: "d0812-4",
        title: "The Fireworks of Summer",
        level: "★★☆",
        genre: "日本",
        text: "In summer, the night skies over Japan light up with color. From July through August, towns and cities hold hanabi, or fireworks festivals, drawing huge crowds who gather along rivers and in parks to watch. For many people in Japan, a summer without fireworks would hardly feel like summer at all.\nWhy are fireworks so loved here? Part of the answer is history. Japan has a long tradition of firework-making, and its craftspeople are famous for creating beautiful, perfectly round bursts of light in many colors and shapes. A big festival can send up thousands of fireworks, sometimes set to music, in a show that lasts an hour or more.\nBut hanabi is about more than the fireworks themselves. It is a social event, a chance to gather with family and friends. Many people wear a light summer kimono called a yukata, buy food from festival stalls, and enjoy the warm evening together. The brief, brilliant flashes in the sky become a shared memory of the season.\nThere is also a gentle feeling behind the tradition. In Japanese culture, the beauty of fireworks is tied to the idea that lovely things do not last — each burst shines for only a moment before fading. This makes the experience feel precious.\nSo a fireworks festival is more than a show. It is a celebration of summer, of community, and of fleeting beauty — a reminder to pause, look up, and enjoy a bright moment together before it gently disappears into the night.",
        summaryJa: "夏、日本の夜空は色で輝く。7月から8月にかけて、町や都市は花火大会を開き、川沿いや公園に集う大群衆を惹きつける。日本の多くの人にとって、花火のない夏はほとんど夏らしく感じられない。なぜここで花火はそれほど愛されるのか。答えの一部は歴史だ。日本には長い花火作りの伝統があり、その職人は、多くの色と形で美しく完璧に丸い光の炸裂を生むことで有名だ。大きな大会は時に音楽に合わせ、数千発の花火を打ち上げ、一時間以上続く見世物になる。だが花火大会は花火そのもの以上のものだ。社交の場であり、家族や友人と集う機会だ。多くの人が浴衣という薄手の夏の着物を着て、屋台で食べ物を買い、暖かな夕べを共に楽しむ。空の短く鮮やかな閃光は、季節の共有された思い出になる。この伝統の背後には穏やかな感情もある。日本文化では、花火の美しさは、美しいものは続かないという考えに結びつく——各炸裂は消える前のほんの一瞬だけ輝く。これが体験を貴重に感じさせる。だから花火大会は見世物以上のものだ。夏の、地域の、そしてはかない美しさの祝いだ——立ち止まり、見上げ、夜へと静かに消える前の明るい一瞬を共に楽しむようにという気づきなのだ。",
        quiz: [
          { q: "花火大会が開かれる時期は？", options: ["夏（7〜8月）", "冬", "春の初め"], answer: 0 },
          { q: "花火大会が花火以上のものである理由は？", options: ["家族や友人と集う社交の場だから", "静かに一人で見るものだから", "昼に行うから"], answer: 0 },
          { q: "花火の美しさが結びつく日本文化の考えは？", options: ["美しいものは続かない（はかなさ）", "花火は永遠に残る", "音が最も重要"], answer: 0 }
        ]
      },
      {
        id: "d0812-5",
        title: "Asteroids: Hardware Stores in Space",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "If humans ever build a lasting home on Mars, they will need building materials — metal, in particular. Carrying everything from Earth would be enormously expensive. So scientists are exploring a bold idea: using metal-rich asteroids, floating rocks in space, as a kind of hardware store for future explorers.\nWhy asteroids? Some asteroids are packed with useful metals such as iron and nickel. Instead of launching heavy metal from Earth, explorers might one day mine these space rocks and use the material to build tools, structures, or spacecraft parts closer to where they are needed. A new analysis suggests that certain carefully chosen asteroids could be reached with the kind of spacecraft we already have.\nHow would it work? First, scientists must find the right asteroids — those with valuable materials and paths that make them easy to reach. Then, machines would have to travel there, collect the metal, and process it in space, far from any factory. Each of these steps is difficult and has never been done on a large scale.\nThere are big challenges. Space mining is expensive and risky, the technology is still young, and questions remain about who would own such resources. It may be many years before any of this becomes real.\nStill, the idea captures the imagination. It suggests a future where explorers do not carry everything with them, but use what space itself provides. Like early travelers living off the land, future settlers might one day build new worlds using the raw materials floating quietly among the stars.",
        summaryJa: "もし人類がいつか火星に永続的な住まいを築くなら、建材——特に金属——が必要になる。全てを地球から運ぶのは莫大な費用がかかる。そこで科学者は大胆な発想を探っている——金属に富む小惑星、宇宙に浮かぶ岩を、未来の探検者のための一種のホームセンターとして使うのだ。なぜ小惑星か。一部の小惑星は鉄やニッケルなど有用な金属で満ちている。重い金属を地球から打ち上げる代わりに、探検者はいつかこの宇宙の岩を採掘し、その材料を必要とされる場所の近くで道具・構造物・探査機の部品を作るのに使えるかもしれない。新しい分析は、慎重に選ばれた特定の小惑星が、既にある種類の探査機で到達できうると示す。どう機能するのか。まず、科学者は適切な小惑星——価値ある材料を持ち、到達しやすい軌道の——を見つけねばならない。次に、機械がそこへ行き、金属を集め、どの工場からも遠い宇宙で加工せねばならない。これらの各段階は難しく、大規模に行われたことは一度もない。大きな課題がある。宇宙採掘は高価で危険で、技術はまだ若く、そうした資源を誰が所有するかの問いも残る。これのいずれかが現実になるまで何年もかかるかもしれない。それでもこの発想は想像力を捕らえる。探検者が全てを持ち運ぶのでなく、宇宙そのものが提供するものを使う未来を示す。土地の恵みで暮らした初期の旅人のように、未来の入植者はいつか、星々の間に静かに浮かぶ原材料で新しい世界を築くかもしれない。",
        quiz: [
          { q: "科学者が探る大胆な発想は？", options: ["金属に富む小惑星を建材の供給源として使う", "小惑星を地球に落とす", "小惑星を燃やす"], answer: 0 },
          { q: "小惑星の金属を使う利点は？", options: ["重い金属を地球から打ち上げずに済む", "味が良いから", "光るから"], answer: 0 },
          { q: "本文が挙げる課題は？", options: ["宇宙採掘は高価で危険、技術も若く所有の問いも残る", "小惑星が存在しないこと", "金属が無価値なこと"], answer: 0 }
        ]
      }
    ]
  }
  ] };
