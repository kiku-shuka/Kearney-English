/* デイリー配信リーディング
 * 毎朝の自動ルーチンがこのファイルを丸ごと上書き生成する（直近 7 日分を保持）。
 * days は日付降順。各 day = { date: "YYYY-MM-DD", passages: [readingPassages と同スキーマ + genre] }
 * このファイル以外は手書きデータであり、ルーチンは触らない。
 */
window.KE_DATA = window.KE_DATA || {};

KE_DATA.dailyReading = { days: [
    {
    date: "2026-11-17",
    passages: [
      {
        id: "d1117-1",
        title: "Why Is Good Customer Service Important?",
        level: "★★☆",
        genre: "ビジネス",
        text: "Think about two shops that sell exactly the same product at the same price. In one, the staff are rude, unhelpful, and seem annoyed by your questions. In the other, they are friendly, patient, and genuinely want to help. Which shop would you return to? For almost everyone, the answer is obvious. This simple example shows the power of good customer service.\n\nCustomer service means the way a business treats its customers, not just during a sale, but before and after it too. It includes answering questions kindly, solving problems quickly, and making each customer feel valued and respected. It may seem like a small thing, but it can make or break a business.\n\nThe reasons are powerful. First, good service keeps customers coming back. A happy customer is likely to return again and again, and over the years, this loyalty is worth a great deal of money. It is usually far cheaper to keep an existing customer than to find a new one.\n\nSecond, happy customers talk. A person who receives wonderful service often tells their friends and family, bringing in new customers for free. Sadly, the opposite is also true: a person treated badly may warn many others to stay away.\n\nFinally, good customer service builds a company's reputation, its good name, which is one of its most valuable possessions.\n\nSo customer service is not just about being polite. It is a smart and essential part of running a successful business. In a world where products are often similar, the way customers are treated can be the very thing that sets one business apart.",
        summaryJa: "なぜ良い顧客対応（カスタマーサービス）が重要なのかについて。同じ商品を同じ値段で売る二つの店を考えよう。一方では店員が無礼で助けにならず、質問に迷惑そうだ。もう一方では親切で辛抱強く、心から助けたがる。どちらの店にまた行くだろう。ほぼ誰にとっても答えは明らかだ。この簡単な例が良い顧客対応の力を示す。顧客対応とは、企業が客を扱う仕方で、販売中だけでなく前後も含む。親切に質問に答え、素早く問題を解決し、各客に大切にされ尊重されていると感じさせることだ。小さなことに見えて、事業の成否を分けうる。理由は強力だ。第一に、良い対応は客を再来させる。満足した客は何度も戻りやすく、長年でこの忠誠は大きな金額に値する。既存の客を保つ方が新しい客を見つけるよりたいてい安い。第二に、満足した客は話す。素晴らしい対応を受けた人は友人や家族に話し、無料で新しい客を連れてくる。残念ながら逆もまた真で、ひどく扱われた人は多くの人に近づくなと警告しうる。最後に、良い対応は企業の評判、最も価値ある財産の一つを築く。礼儀正しさだけでなく、成功する事業に不可欠だ。",
        quiz: [
          { q: "What does customer service mean?", options: ["The way a business treats its customers, before, during, and after a sale", "The price of a product", "The size of a shop"], answer: 0 },
          { q: "Why does good service keep customers coming back?", options: ["Happy customers return again, and this loyalty is worth a lot over time", "Customers must return by law", "It makes products cheaper"], answer: 0 },
          { q: "How can happy customers bring in new customers for free?", options: ["They tell their friends and family about the wonderful service", "They pay the shop extra", "They never speak to anyone"], answer: 0 }
        ]
      },
      {
        id: "d1117-2",
        title: "How Does an Escalator Work?",
        level: "★★☆",
        genre: "テクノロジー",
        text: "In shopping centres, stations, and airports, escalators carry streams of people smoothly up and down, all day long, without anyone having to lift a foot to climb. They seem to swallow people at one end and deliver them to another floor at the other. But how does this clever moving staircase actually work?\n\nThe heart of an escalator is a long loop of steps joined together in a chain, rather like a very large bicycle chain. This chain of steps runs in a continuous loop, round and round. At the top, powered by a strong electric motor, large toothed wheels pull the chain along, so the steps on the visible side are always climbing upward, carrying passengers with them.\n\nThe clever part is what happens at the top and bottom. The steps do not simply vanish. At each end, they slide under a metal comb and travel back, flat and hidden, underneath the staircase you can see, before rising up again at the other end to begin the journey once more. It is one endless loop.\n\nAnother neat trick is how the steps stay flat and level for you to stand on, even though the staircase is sloped. The steps are cleverly guided along two separate tracks, which keep each step horizontal as it climbs, so you never feel tilted.\n\nThe moving handrail beside you is driven by the same motor, moving at exactly the same speed as the steps, so your hand and feet travel together.\n\nSo an escalator is really an endless staircase on a chain, quietly turning a tiring climb into an effortless, moving ride.",
        summaryJa: "エスカレーターの仕組みについて。商業施設や駅、空港で、エスカレーターは一日中、人の流れを滑らかに上下へ運び、誰も足を上げて上る必要がない。一方の端で人を飲み込み、もう一方で別の階へ届けるように見える。だがこの巧妙な動く階段は実際どう働くのか。エスカレーターの心臓は、鎖状につながった段の長い輪だ。非常に大きな自転車のチェーンのようなものだ。この段の鎖はぐるぐると連続した輪で回る。上部で強力な電動機に動かされ、大きな歯車が鎖を引き、見える側の段は常に上へ上り、乗客を運ぶ。巧妙なのは上下の端で起こることだ。段は単に消えるのでなく、各端で金属のくしの下へ滑り込み、見える階段の下を平らに隠れて戻り、反対の端でまた上がって旅を繰り返す。一つの終わりなき輪だ。もう一つの妙技は、階段が傾いているのに段が平らで水平に保たれ、立てることだ。段は二本の別々の軌道に沿って巧みに導かれ、上る間も各段を水平に保つので、傾きを感じない。横の動く手すりも同じ電動機で、段とまったく同じ速さで動く。終わりなき階段だ。",
        quiz: [
          { q: "What is the heart of an escalator?", options: ["A long loop of steps joined in a chain, driven by a motor", "A single large spring", "A tank of water"], answer: 0 },
          { q: "What happens to the steps at the top and bottom?", options: ["They slide under a comb and travel back, hidden, before rising again", "They vanish completely", "They are thrown away"], answer: 0 },
          { q: "How do the steps stay flat for you to stand on?", options: ["They are guided along two tracks that keep each step horizontal", "They are held by hand", "They are not actually flat"], answer: 0 }
        ]
      },
      {
        id: "d1117-3",
        title: "How Do the Olympic Games Bring the World Together?",
        level: "★★★",
        genre: "世界情勢",
        text: "Every few years, something remarkable happens. Athletes from almost every nation on Earth travel to a single city to take part in the Olympic Games. For a short time, the eyes of the whole world turn to one place, to watch people run, jump, swim, and compete. The Olympics are far more than a sports event; they are one of the greatest gatherings of humanity on the planet.\n\nThe modern Olympic Games were revived more than a hundred years ago, with a hopeful dream: that sport could bring people and nations closer together. The idea was that by meeting peacefully in friendly competition, countries that might otherwise distrust one another could build understanding and respect.\n\nThe Games are full of powerful symbols of unity. At the opening ceremony, athletes from every country march together into the stadium. The five rings of the Olympic flag represent the different parts of the world joined as one. For a few weeks, rivals compete not with weapons, but with speed, strength, and skill, and they often embrace as friends afterwards.\n\nOf course, the Olympics are not perfect. They are expensive, and real political tensions in the world do not simply disappear during the Games. Yet something special still happens. People everywhere cheer for astonishing human achievement, and for a moment, differences of language and nation seem to matter a little less.\n\nAt their best, the Olympic Games remind us of a simple, hopeful truth: that despite all our differences, the people of the world can come together, in peace, to celebrate what human beings are capable of.",
        summaryJa: "オリンピックはどう世界を一つにするのかについて。数年ごとに、ある素晴らしいことが起こる。地球上のほぼすべての国の選手が、オリンピックに参加するため一つの都市へ集まる。短い間、世界中の目が一か所に向き、走り、跳び、泳ぎ、競う人々を見る。オリンピックはスポーツの催しをはるかに超え、地球上で最も大きな人類の集いの一つだ。近代オリンピックは百年以上前に復活した。スポーツが人と国を近づけられるという希望ある夢とともに。友好的な競争の中で平和に出会うことで、互いを不信しうる国々が理解と敬意を築けるという考えだ。大会は団結の力強い象徴に満ちる。開会式では全ての国の選手が共に競技場へ行進する。五輪旗の五つの輪は、一つに結ばれた世界の異なる地域を表す。数週間、競争相手は武器でなく速さ・力・技で競い、後にはしばしば友として抱き合う。もちろん完璧ではない。費用がかかり、世界の現実の政治的緊張が大会中に消えるわけでもない。それでも特別な何かが起こる。人々は驚くべき人間の達成に喝采し、一瞬、言語や国の違いが少し薄れて見える。",
        quiz: [
          { q: "What hopeful dream came with reviving the modern Olympics?", options: ["That sport could bring people and nations closer together", "That one country would win everything", "That sport would replace all jobs"], answer: 0 },
          { q: "What do the five rings of the Olympic flag represent?", options: ["The different parts of the world joined as one", "Five famous athletes", "Five kinds of money"], answer: 0 },
          { q: "What do the Games remind us, at their best?", options: ["That despite our differences, people can come together in peace", "That only strong countries matter", "That competition is pointless"], answer: 0 }
        ]
      },
      {
        id: "d1117-4",
        title: "Mochi: Japan's New Year Rice Cakes",
        level: "★★☆",
        genre: "日本",
        text: "As the New Year approaches in Japan, one special food appears everywhere: mochi. Mochi is a soft, chewy rice cake, and it holds a treasured place in Japanese food and celebration, especially at New Year, the most important holiday of the year.\n\nMochi is not made from ordinary rice. It is made from a special sticky kind of rice, which is first steamed until soft. Then comes the remarkable part. Traditionally, the hot rice is placed in a large wooden bowl and pounded, again and again, with a heavy wooden mallet. This hard work is often done by two people working in rhythm: one pounds while the other quickly turns and wets the rice between blows. Slowly, the grains break down and join into one smooth, white, stretchy mass. This lively, traditional event is called mochitsuki.\n\nThe finished mochi can be used in countless ways. It can be shaped into round cakes, grilled until it puffs up, or added to a special New Year soup called ozoni. It can also be wrapped around sweet fillings to make delicious treats.\n\nMochi carries meaning too. Its stretchy, long shape is linked to wishes for a long life, and round stacked mochi are often displayed as a New Year decoration, offered for good fortune in the year ahead.\n\nOne word of caution: mochi is very sticky, and must be eaten carefully in small bites. But for millions of people in Japan, the soft, chewy taste of mochi is one of the warmest and most cherished flavours of the New Year season.",
        summaryJa: "日本の正月の餅について。日本で新年が近づくと、特別な食べ物が至る所に現れる。餅だ。餅は柔らかく歯ごたえのある米の餅で、日本の食と祝い、特に一年で最も大切な祝日である正月で大切な位置を占める。餅は普通の米からは作らない。特別な粘りのある種類の米から作り、まず柔らかくなるまで蒸す。それから驚くべき部分が来る。伝統的に、熱い米を大きな木の臼に入れ、重い木の杵で何度もつく。この重労働はしばしば二人が呼吸を合わせて行う。一人がつき、もう一人が合間に素早く米を返し湿らせる。ゆっくり粒が崩れ、一つの滑らかで白く伸びる塊になる。この活気ある伝統行事を餅つきという。できた餅は数えきれぬほど多様に使える。丸い餅に形作り、膨らむまで焼き、お雑煮という特別な正月の汁に入れる。甘い具を包んでおいしい菓子にもする。餅には意味もある。伸びて長い形は長寿の願いに結びつき、丸く重ねた餅はよく正月飾りとして飾られ、来る年の幸運を祈って供えられる。一つ注意、餅はとても粘るので小さく一口ずつ注意して食べねばならない。",
        quiz: [
          { q: "What is mochi made from?", options: ["A special sticky kind of rice, steamed and pounded", "Wheat flour and sugar", "Potatoes"], answer: 0 },
          { q: "What is 'mochitsuki'?", options: ["The traditional event of pounding hot rice into mochi", "A New Year song", "A type of bowl"], answer: 0 },
          { q: "What does the stretchy, long shape of mochi represent?", options: ["Wishes for a long life", "A short, busy year", "Bad luck"], answer: 0 }
        ]
      },
      {
        id: "d1117-5",
        title: "Why Do We Dream?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "Every night, when we fall into a deep sleep, our minds often come alive with strange and vivid adventures. We may fly through the air, talk to people from our past, or find ourselves in places that do not exist. These are dreams, and almost everyone has them. Yet, despite how common they are, one of the oldest questions about the human mind remains only partly answered: why do we dream at all?\n\nDreams happen mostly during a certain stage of sleep when the brain is surprisingly active, almost as busy as when we are awake. During this time, our eyes move quickly behind our closed lids, and the most vivid dreams usually occur.\n\nScientists are still not completely sure why we dream, but they have several interesting ideas. One popular theory is that dreaming helps the brain to sort and store memories. During the day, we take in a huge amount of information, and sleep may be the time when the brain decides what to keep and what to let go, weaving the pieces into dreams along the way.\n\nAnother idea is that dreams help us process our emotions. By replaying worries or feelings in the safety of sleep, the mind may be working through difficult experiences, helping us feel calmer when we wake.\n\nDreams may also simply be the brain staying active and practising, trying out ideas and situations while the body rests.\n\nSo the exact purpose of dreams remains one of science's intriguing mysteries. Each night, our sleeping minds create whole worlds, for reasons we are still, slowly, beginning to understand.",
        summaryJa: "なぜ私たちは夢を見るのかについて。毎晩、深い眠りに落ちると、心はしばしば奇妙で鮮やかな冒険で生き生きとする。空を飛び、過去の人と話し、存在しない場所にいることもある。これが夢で、ほぼ誰もが見る。だがこれほど一般的なのに、人の心に関する最も古い問いの一つは、いまだ部分的にしか答えられていない。そもそもなぜ夢を見るのか。夢は主に、脳が驚くほど活発な、ほぼ起きているときと同じくらい忙しいある睡眠段階で起こる。この間、閉じたまぶたの奥で目が素早く動き、最も鮮やかな夢がたいてい起こる。科学者はなぜ夢を見るかまだ完全には分からないが、いくつか興味深い考えがある。有力な一説は、夢が脳の記憶の整理と保存を助けるというものだ。日中、私たちは膨大な情報を取り込み、睡眠は脳が何を残し何を手放すか決める時かもしれず、その過程で断片を夢に織り込む。もう一つの考えは、夢が感情の処理を助けるというものだ。眠りの安全の中で心配や感情を再生し、難しい経験を乗り越え、目覚めたとき穏やかに感じる助けになるのかもしれない。脳が活動を保ち練習しているだけかもしれない。夢の正確な目的は科学の魅力的な謎のままだ。",
        quiz: [
          { q: "When do the most vivid dreams usually occur?", options: ["During a stage of sleep when the brain is surprisingly active", "Only when we are fully awake", "Only in the morning"], answer: 0 },
          { q: "What is one popular theory about why we dream?", options: ["Dreaming helps the brain sort and store memories", "Dreams clean our teeth", "Dreams make us taller"], answer: 0 },
          { q: "What is another idea about the purpose of dreams?", options: ["They help us process our emotions in the safety of sleep", "They stop the heart", "They have no effect on the mind"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-11-16",
    passages: [
      {
        id: "d1116-1",
        title: "What Is a Budget?",
        level: "★★☆",
        genre: "ビジネス",
        text: "Imagine setting off on a long journey without a map, simply driving in whatever direction feels right. You might get somewhere, but you would probably waste time, fuel, and money. Managing money without a plan is rather similar. To avoid this, people and businesses use a simple but powerful tool called a budget.\n\nA budget is basically a plan for money. It looks ahead over a period of time, such as a month or a year, and compares two things: the money expected to come in, and the money expected to go out. For a family, the money coming in is mainly wages, and the money going out is rent, food, bills, and other costs. For a business, it is sales coming in, and wages, materials, and other costs going out.\n\nMaking a budget has several benefits. First, it shows whether you are living within your means. If more money is going out than coming in, the budget reveals this problem early, before it becomes a crisis. Second, a budget helps you set priorities. By planning ahead, you can make sure there is enough money for the things that matter most, and perhaps save some for the future.\n\nA budget is not meant to be a prison. It is a guide that gives you control and peace of mind. It helps you decide where your money should go, rather than wondering, at the end of the month, where it all went.\n\nWhether for a single person or a huge company, a good budget is the first step towards using money wisely and reaching your goals.",
        summaryJa: "予算（バジェット）とは何かについて。地図も持たず、ただ正しそうな方向へ車を走らせて長い旅に出ることを想像しよう。どこかには着くかもしれないが、時間も燃料も金も無駄にするだろう。計画なしの金の管理もよく似ている。これを避けるため、人も企業も予算という簡素だが強力な道具を使う。予算は基本的に金の計画だ。一か月や一年といった期間を見通し、二つを比べる。入ってくると見込む金と、出ていくと見込む金だ。家庭なら入るのは主に給料、出るのは家賃・食費・光熱費などだ。企業なら入るのは売上、出るのは給料・材料費などだ。予算を作る利点はいくつかある。第一に、身の丈に合った暮らしをしているか示す。入るより出る方が多ければ、危機になる前に早く問題を明らかにする。第二に、優先順位を決める助けになる。前もって計画すれば、最も大切なことに十分な金を確保し、将来のために蓄えられる。予算は牢獄ではなく、主導権と安心を与える指針だ。金がどこへ行くべきか決める助けになる。賢く金を使い目標に達する第一歩だ。",
        quiz: [
          { q: "What is a budget?", options: ["A plan comparing money expected to come in and money expected to go out", "A type of bank", "A kind of loan"], answer: 0 },
          { q: "What does a budget reveal early?", options: ["Whether more money is going out than coming in", "The weather next week", "Who your friends are"], answer: 0 },
          { q: "How is a budget best understood?", options: ["As a guide that gives you control and peace of mind", "As a prison that controls you", "As a way to lose money"], answer: 0 }
        ]
      },
      {
        id: "d1116-2",
        title: "How Does a Lightbulb Work?",
        level: "★★☆",
        genre: "テクノロジー",
        text: "With a simple flick of a switch, a dark room fills with light. We do this countless times, rarely wondering how a small glass bulb can turn invisible electricity into bright, useful light. The traditional lightbulb, invented well over a hundred years ago, does this with a wonderfully simple idea: it makes something so hot that it glows.\n\nInside a traditional bulb is a very thin coil of metal wire, called the filament. This filament is usually made of a metal that can survive extremely high temperatures without melting. When you turn on the switch, electricity flows through this thin wire.\n\nHere is the key. The filament is so thin that it strongly resists the flow of electricity. As the electricity pushes through, this resistance makes the wire heat up, and heat up, until it becomes incredibly hot, far hotter than a kitchen oven. Any object that gets hot enough begins to glow, first red, then orange, then brilliant white. The filament becomes so hot that it shines with a bright white light. This is the light we see.\n\nThere is one more clever detail. If the hot metal filament were surrounded by ordinary air, it would quickly burn up. To prevent this, the air is removed from inside the glass bulb, or it is filled with a special gas that does not let the filament burn. This allows the filament to glow for a long time without being destroyed.\n\nSo a simple lightbulb works by using electricity to heat a thin wire until it shines, turning the flow of power into the gift of light.",
        summaryJa: "電球の仕組みについて。スイッチを軽く入れるだけで、暗い部屋が光で満ちる。私たちは数えきれぬほどこれを行うが、小さなガラスの球がどうやって目に見えない電気を明るく役立つ光に変えるのか、めったに考えない。百年以上前に発明された昔ながらの電球は、実に単純な考えでこれを行う。何かを非常に熱くして光らせるのだ。昔ながらの電球の中には、フィラメントという非常に細い金属線のコイルがある。たいてい極めて高い温度でも溶けない金属でできている。スイッチを入れると電気がこの細い線を流れる。ここが鍵だ。フィラメントはとても細いので電気の流れに強く抵抗する。電気が押し通ると、この抵抗で線が熱くなり続け、台所のオーブンよりはるかに熱い、信じられないほど高温になる。十分熱くなった物は光り始め、まず赤、次に橙、そして輝く白になる。フィラメントは非常に熱くなり明るい白い光で輝く。これが見える光だ。もう一つ巧妙な点がある。熱い金属線が普通の空気に囲まれていればすぐ燃え尽きる。防ぐため、ガラス球の中の空気は抜かれるか、燃えさせない特別な気体で満たされる。これで長く光れる。",
        quiz: [
          { q: "What is the filament in a lightbulb?", options: ["A very thin coil of metal wire that glows when heated", "A small battery", "A drop of water"], answer: 0 },
          { q: "Why does the filament heat up?", options: ["It is so thin that it strongly resists the flow of electricity", "It is filled with fire", "It is rubbed by hand"], answer: 0 },
          { q: "Why is the air removed from inside the bulb?", options: ["So the hot filament does not quickly burn up", "To make the bulb lighter", "To store light inside"], answer: 0 }
        ]
      },
      {
        id: "d1116-3",
        title: "Why Does Money Have Different Values in Different Countries?",
        level: "★★★",
        genre: "世界情勢",
        text: "If you travel from one country to another, one of the first things you must do is change your money. You hand over the money of your home country and receive a different kind of money in return. Strangely, you do not always get the same amount back. One unit of your money might buy two units of another country's money, or only half a unit of a third. Why does money have these different values around the world?\n\nAlmost every country has its own money, called its currency. The value of one currency compared to another is called the exchange rate, and this rate is constantly changing. It is decided mainly by supply and demand, just like the price of anything else.\n\nThink of a country's currency as a product that people around the world may want to buy or sell. If a country's economy is strong, and many people want to buy its goods, invest there, or visit as tourists, they will need its currency. This high demand tends to make the currency more valuable. If people lose confidence in a country's economy, demand for its currency falls, and its value tends to drop.\n\nMany things affect this: how healthy a country's economy is, how stable its government seems, and how much its goods are wanted. Because these conditions change daily, exchange rates move up and down all the time.\n\nSo the different values of money reflect the ever-changing confidence of the world in each country's economy, a quiet daily vote on how each nation is doing.",
        summaryJa: "なぜ国によってお金の価値が違うのかについて。ある国から別の国へ旅すると、まずしなければならないことの一つが両替だ。自国のお金を渡して別の種類のお金を受け取る。不思議なことに、いつも同じ額が返るわけではない。自国のお金一単位が別の国のお金二単位を買えることも、三つ目の国のお金半単位しか買えないこともある。なぜお金は世界でこう違う価値を持つのか。ほぼどの国も自国のお金、通貨を持つ。ある通貨の別の通貨に対する価値を為替レートといい、常に変わっている。主に需要と供給で決まる。他の何の値段とも同じだ。国の通貨を、世界の人々が買ったり売ったりしたい商品と考えよう。経済が強く、その国の商品を買いたい、投資したい、観光したい人が多ければ、その通貨が必要になる。この高い需要は通貨の価値を上げる傾向がある。国の経済への信頼が失われれば、通貨の需要は下がり、価値も下がる傾向がある。経済の健全さ、政府の安定、商品の人気など多くが影響する。こうした条件は日々変わるので、為替レートは絶えず上下する。お金の価値の違いは、各国経済への世界の変わりゆく信頼を映す。",
        quiz: [
          { q: "What is an 'exchange rate'?", options: ["The value of one currency compared to another", "A fee for entering a country", "A kind of bank account"], answer: 0 },
          { q: "What mainly decides a currency's value?", options: ["Supply and demand, like the price of anything else", "The color of the money", "The number of coins printed"], answer: 0 },
          { q: "What tends to make a currency more valuable?", options: ["High demand, when many people want that country's goods or to invest there", "A weak economy", "No one wanting the currency"], answer: 0 }
        ]
      },
      {
        id: "d1116-4",
        title: "The Japanese Love of Punctuality",
        level: "★★☆",
        genre: "日本",
        text: "In many countries, if a friend says they will meet you at three o'clock, they might arrive at ten past three, and no one thinks much of it. In Japan, however, time is treated very differently. Being on time, to the exact minute, is deeply important, and this careful respect for time is a famous and striking feature of Japanese life.\n\nPerhaps the most famous example is Japan's trains. The country's railways are known around the world for being astonishingly punctual. Trains are expected to arrive and depart exactly on schedule, and a delay of even a minute or two is considered a real problem. If a train is late, the railway company may even apologise to its passengers.\n\nThis attitude goes far beyond trains. In schools and workplaces, arriving late is seen as a sign of carelessness and a lack of respect for others. In fact, many Japanese people believe that to be truly polite, you should arrive a little early, not just exactly on time. Arriving five minutes before a meeting is often considered normal.\n\nWhy does this matter so much? At its heart, punctuality in Japan is a form of respect. By being on time, you show that you value other people and do not want to waste their time. It reflects a wider cultural idea that caring for others and the smooth running of society are very important.\n\nFor a visitor, this can take some getting used to. But it also means that in Japan, you can usually rely on things happening exactly when they are supposed to.",
        summaryJa: "日本の時間厳守の精神について。多くの国では、友人が三時に会おうと言って三時十分に現れても、誰も気にしない。だが日本では時間はまったく違って扱われる。分単位で正確に時間を守ることが深く重要で、この時間への細やかな敬意は日本の生活の有名で際立つ特徴だ。おそらく最も有名な例は日本の電車だ。日本の鉄道は驚くほど正確なことで世界中に知られる。電車は時刻どおりに発着すると期待され、一、二分の遅れさえ本当の問題とされる。遅れれば鉄道会社が乗客に謝ることさえある。この姿勢は電車をはるかに超える。学校や職場で遅刻は、不注意や他者への敬意の欠如の印と見なされる。実際、本当に礼儀正しくあるには、ちょうど時間どおりでなく少し早く着くべきだと多くの日本人が考える。会議の五分前に着くのがよく普通とされる。なぜそれほど大切なのか。根本的に、日本の時間厳守は敬意の一形態だ。時間を守ることで、他人を尊重しその時間を無駄にしたくないと示す。他者への配慮と社会の円滑な運営を重んじる広い文化的考えを映す。訪問者には慣れが要るが、物事が予定どおりに起こると頼れることでもある。",
        quiz: [
          { q: "What is a famous example of Japanese punctuality?", options: ["The trains, which are astonishingly punctual", "The weather", "The food"], answer: 0 },
          { q: "What do many Japanese people believe about being polite with time?", options: ["You should arrive a little early, not just exactly on time", "You should always arrive late", "Time does not matter"], answer: 0 },
          { q: "At its heart, what is punctuality in Japan?", options: ["A form of respect for other people and their time", "A way to earn money", "A kind of game"], answer: 0 }
        ]
      },
      {
        id: "d1116-5",
        title: "How Do Birds Fly?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "For thousands of years, humans looked up at birds gliding through the sky and dreamed of flying too. A bird makes it look so easy, rising into the air and soaring on the wind. But flight is a remarkable feat, and it depends on a clever combination of a bird's body, its wings, and the air itself.\n\nThe secret to staying up in the air is a force called lift. Lift is what pushes a bird upward, against the pull of gravity. The main source of lift is the special shape of a bird's wing. A wing is not flat. It is curved on top and flatter underneath. As the bird moves forward, air flows over and under the wing. Because of the curved shape, the air moving over the top has to travel a little faster, and this creates lower pressure above the wing than below it. The higher pressure underneath then pushes the wing, and the bird, upward.\n\nBut lift alone is not enough. To create this flow of air over the wings, the bird must move forward. Birds do this by flapping their wings, which pushes air backwards and drives the bird ahead, rather like rowing through the air. Once moving fast enough, the wings can also be held still to glide.\n\nBirds are beautifully built for this. Their bones are light, often hollow, and their feathers are both strong and incredibly light.\n\nSo a bird flying overhead is quietly obeying the laws of science, using the shape of its wings and the power of its muscles to turn moving air into the miracle of flight.",
        summaryJa: "鳥はどうやって飛ぶのかについて。何千年もの間、人間は空を滑る鳥を見上げ、自分も飛ぶことを夢見た。鳥はいとも簡単そうに空へ上がり、風に乗って舞う。だが飛行は見事な技で、鳥の体・翼、そして空気そのものの巧妙な組み合わせに頼る。空中にとどまる秘密は揚力という力だ。揚力は重力の引っ張りに逆らって鳥を上へ押す。揚力の主な源は鳥の翼の特別な形だ。翼は平らでなく、上側が湾曲し下側がより平らだ。鳥が前へ進むと、空気が翼の上と下を流れる。湾曲した形のため、上を流れる空気は少し速く進まねばならず、これが翼の上を下より低い圧力にする。すると下側の高い圧力が翼を、そして鳥を上へ押す。だが揚力だけでは足りない。この空気の流れを翼に作るには、鳥は前へ進まねばならない。鳥は翼を羽ばたいて空気を後ろへ押し、前へ進む。空中を漕ぐようだ。十分速く動けば、翼を静止させて滑空もできる。鳥はこのために美しく作られている。骨は軽くしばしば中空で、羽は丈夫で非常に軽い。鳥は科学の法則に静かに従っているのだ。",
        quiz: [
          { q: "What force pushes a bird upward against gravity?", options: ["Lift", "Gravity", "Cold"], answer: 0 },
          { q: "What is the main source of lift?", options: ["The special curved shape of a bird's wing", "The color of the feathers", "The bird's song"], answer: 0 },
          { q: "Why do birds flap their wings?", options: ["To push air backwards and move forward, creating airflow over the wings", "To keep warm only", "To make noise"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-11-15",
    passages: [
      {
        id: "d1115-1",
        title: "What Is a Wholesaler?",
        level: "★★☆",
        genre: "ビジネス",
        text: "When you buy a bottle of juice at a small local shop, you might imagine that the shopkeeper bought it directly from the company that made it. Sometimes this is true, but very often there is a hidden middle step in between. That step is a business called a wholesaler, and it quietly keeps much of our shopping world running smoothly.\n\nA wholesaler is a business that buys goods in very large amounts from the makers, and then sells them in smaller amounts to shops. The wholesaler does not usually sell to ordinary customers like you and me. Instead, its customers are the shops themselves.\n\nWhy is this middle step so useful? Imagine a small shop that wants to sell a hundred different products. Without wholesalers, the shopkeeper would have to contact a hundred different factories, arrange a hundred deliveries, and buy huge amounts from each. This would be slow, expensive, and almost impossible for a small business.\n\nA wholesaler solves this problem. It buys from many makers and gathers their products together. The small shop can then buy a little of everything from a single wholesaler, in amounts that suit its size. The maker also benefits, because it can sell huge amounts to a few wholesalers instead of dealing with thousands of tiny shops.\n\nSo the wholesaler acts as a helpful bridge between the makers of goods and the shops that sell them. Though customers rarely see them, wholesalers are a vital link in the chain that brings the products we want from the factory to the shelf.",
        summaryJa: "卸売業者とは何かについて。小さな地元の店でジュースを一本買うとき、店主が作った会社から直接仕入れたと思うかもしれない。そうであることもあるが、間にしばしば隠れた中間の段階がある。それが卸売業者という事業で、私たちの買い物の世界の多くを静かに円滑に動かしている。卸売業者は、作り手から非常に大量に商品を買い、それを小さな量に分けて店に売る事業だ。普通はあなたや私のような一般客には売らない。顧客は店そのものだ。なぜこの中間段階が役立つのか。百種類の異なる商品を売りたい小さな店を想像しよう。卸売業者がなければ、店主は百の工場に連絡し、百の配送を手配し、それぞれから大量に買わねばならない。遅く、高くつき、小さな事業にはほぼ不可能だ。卸売業者はこれを解決する。多くの作り手から買い、商品をまとめる。小さな店は一つの卸売業者から、自分の規模に合う量で少しずつ何でも買える。作り手も、何千もの小さな店を相手にせず少数の卸に大量に売れるので得をする。工場から棚へ商品を運ぶ鎖の不可欠な環だ。",
        quiz: [
          { q: "What is a wholesaler?", options: ["A business that buys goods in large amounts from makers and sells them to shops", "A shop that sells to ordinary customers", "A kind of factory worker"], answer: 0 },
          { q: "Who are a wholesaler's customers?", options: ["The shops themselves, not ordinary customers", "Only children", "The makers only"], answer: 0 },
          { q: "How does a wholesaler help a small shop?", options: ["The shop can buy a little of everything from one wholesaler", "The shop must contact every factory itself", "The shop cannot buy anything"], answer: 0 }
        ]
      },
      {
        id: "d1115-2",
        title: "How Does GPS Know Where You Are?",
        level: "★★☆",
        genre: "テクノロジー",
        text: "Your phone can show you exactly where you are on a map, almost anywhere on Earth, within a few metres. This amazing ability comes from a system called GPS, which stands for Global Positioning System. But how can a small phone know its precise place on the whole planet? The answer lies far above your head, in space.\n\nHigh above the Earth, a number of satellites are constantly circling the planet. Each one carries a very accurate clock and is always sending out radio signals. These signals simply say, in effect, I am this satellite, and here is the exact time I sent this message.\n\nYour phone contains a small receiver that listens for these signals. The clever trick is in timing. The signal from a satellite takes a tiny amount of time to travel down to your phone. By measuring exactly how long the signal took to arrive, your phone can work out how far away that satellite is.\n\nKnowing the distance to just one satellite is not enough. But if your phone measures its distance from several satellites at the same time, it can combine this information. There is only one point on Earth that is exactly those distances from all of them at once, and that point is you.\n\nUsing signals from four or more satellites, your phone can calculate its position, and often its height, very accurately.\n\nSo every time you follow a map on your phone, you are quietly using a network of satellites in space, all working together to answer a simple question: where am I?",
        summaryJa: "GPSはどうやって現在地を知るのかについて。スマホは地球上のほぼどこでも、数メートルの精度で地図上の正確な位置を示せる。この驚くべき能力はGPS（全地球測位システム）という仕組みから来る。だが小さなスマホがどうやって惑星全体での正確な位置を知るのか。答えは頭上はるか、宇宙にある。地球のはるか上空を、多数の衛星が絶えず回っている。各々が非常に正確な時計を積み、常に電波信号を送り出す。信号は要するに「私はこの衛星で、これを送った正確な時刻はこれだ」と言っている。スマホにはこの信号を聞く小さな受信機がある。巧妙な技は時間計測にある。衛星の信号はスマホへ届くのにごくわずかな時間かかる。信号が届くのにかかった時間を正確に測れば、その衛星までの距離が分かる。一つの衛星までの距離だけでは足りない。だが複数の衛星までの距離を同時に測れば、情報を組み合わせられる。地球上でそれら全てからちょうどその距離にある点は一つだけで、それがあなただ。四つ以上の衛星の信号で、位置や高さまで正確に計算できる。宇宙の衛星の網が協力し「私はどこか」に答えている。",
        quiz: [
          { q: "What does GPS use to find your location?", options: ["Satellites circling the Earth, sending radio signals", "Cameras on the ground", "A map printed in the phone"], answer: 0 },
          { q: "How does your phone work out how far away a satellite is?", options: ["By measuring exactly how long the signal took to arrive", "By its color", "By its weight"], answer: 0 },
          { q: "Why does your phone need several satellites, not just one?", options: ["Only one point on Earth is those exact distances from all of them at once", "One satellite is always broken", "Satellites work only in pairs"], answer: 0 }
        ]
      },
      {
        id: "d1115-3",
        title: "How Do International Courts Work?",
        level: "★★★",
        genre: "世界情勢",
        text: "Within a single country, when two people have a serious disagreement that they cannot solve themselves, they can go to a court. A judge listens to both sides and makes a fair decision, based on the law. But what happens when the disagreement is between two whole countries, or when terrible crimes are committed that shock the whole world? For these situations, the world has created international courts.\n\nAn international court is a special court that deals with matters between nations, or with the most serious crimes of global concern. Unlike a normal national court, it does not belong to any single country. Instead, it is set up by many nations working together, and its judges come from different parts of the world.\n\nThere are different kinds. One type helps settle peaceful disagreements between countries, for example over borders or the use of a shared river. Rather than fighting, the two nations agree to bring their case to the court and to accept its decision. This allows disputes to be solved with words and law, instead of weapons.\n\nAnother type deals with individuals who are accused of the very worst crimes, such as terrible acts committed during wars. These courts aim to show that no one is completely above the law, not even powerful leaders.\n\nInternational courts are not perfect. They often rely on countries choosing to cooperate, and a powerful nation may simply refuse. Yet they represent a hopeful idea: that even between nations, and even in the worst of times, reason, fairness, and law can offer a better path than force.",
        summaryJa: "国際裁判所はどう機能するのかについて。一つの国の中では、二人が自分たちで解決できない深刻な対立を抱えたとき、裁判所へ行ける。裁判官が双方の言い分を聞き、法に基づいて公正な判断を下す。だが対立が二つの国全体の間にあるとき、あるいは世界を震撼させるひどい犯罪が行われたときはどうなるのか。こうした状況のため、世界は国際裁判所を作った。国際裁判所は、国家間の問題や、世界的に重大な最も深刻な犯罪を扱う特別な裁判所だ。普通の国の裁判所と違い、どの一国にも属さない。多くの国が協力して設け、裁判官は世界の様々な地域から来る。種類は異なる。一つは国家間の平和的な対立、例えば国境や共有の川の利用をめぐる争いの解決を助ける。戦う代わりに、両国が事件を裁判所に持ち込み判断を受け入れると合意する。これで争いを武器でなく言葉と法で解決できる。もう一つは、戦争中のひどい行為など、最悪の犯罪で告発された個人を扱う。強大な指導者でさえ法を完全には超えられないと示すことを目指す。完璧ではなく各国の協力に頼るが、希望ある考えを表す。",
        quiz: [
          { q: "What is an international court?", options: ["A court that deals with matters between nations or the worst global crimes", "A normal court belonging to one country", "A kind of parliament"], answer: 0 },
          { q: "What does one type of international court help settle?", options: ["Peaceful disagreements between countries, like border disputes", "Shopping complaints", "School exams"], answer: 0 },
          { q: "What is a limitation of international courts?", options: ["They often rely on countries choosing to cooperate, which a powerful nation may refuse", "They have too many judges", "They never make decisions"], answer: 0 }
        ]
      },
      {
        id: "d1115-4",
        title: "Koban: Japan's Neighborhood Police Boxes",
        level: "★★☆",
        genre: "日本",
        text: "Walking through a Japanese town or city, you will often come across a small building, not much bigger than a room, sometimes marked with a red lamp. Inside, one or two police officers are usually on duty. This is a koban, a neighbourhood police box, and it is a simple but important part of what makes daily life in Japan feel so safe and orderly.\n\nUnlike a large central police station, a koban is small and local. It is placed right in the middle of the community it serves, near a station, a shopping street, or a residential area. Because it is so close to the people, the officers inside become a familiar and friendly presence, rather than a distant authority.\n\nThe work of a koban officer is wonderfully varied, and much of it has little to do with crime. One of their most common tasks is simply giving directions. Japanese addresses can be confusing, even for locals, so people constantly stop at a koban to ask the way. Officers also look after lost property. In Japan, if you lose your wallet or phone, there is a very good chance an honest person will hand it in at the nearest koban.\n\nOf course, the officers also help in emergencies, keep an eye on the area, and offer a safe place for anyone in trouble.\n\nThe koban system shows a gentle idea about safety: that it comes not only from catching criminals, but from a trusted, helpful presence woven quietly into the daily life of every neighbourhood.",
        summaryJa: "交番、日本の地域の警察拠点について。日本の町や都市を歩くと、部屋ほどの大きさの小さな建物に、時に赤いランプが付いているのをよく見かける。中ではたいてい一人か二人の警察官が勤務している。これが交番で、日本の日常がこれほど安全で秩序あると感じさせる、簡素だが重要な一部だ。大きな中央の警察署と違い、交番は小さく地域に根ざす。駅や商店街、住宅地の近くなど、奉仕する地域のまさに真ん中に置かれる。人々にとても近いので、中の警察官は遠い権威でなく、親しみある身近な存在になる。交番の警察官の仕事は実に多様で、その多くは犯罪とほとんど関係ない。最も一般的な仕事の一つは道案内だ。日本の住所は地元の人にも紛らわしく、人々は絶えず交番に立ち寄って道を尋ねる。落とし物の管理もする。日本では財布やスマホを落としても、正直な人が最寄りの交番に届けてくれる可能性がとても高い。もちろん緊急時にも助け、地域を見守り、困った人に安全な場所を提供する。安全は犯人を捕まえるだけでなく、信頼され頼れる存在から来るという考えを示す。",
        quiz: [
          { q: "What is a koban?", options: ["A small neighbourhood police box, local to the community", "A large central prison", "A kind of train station"], answer: 0 },
          { q: "What is one of the most common tasks of a koban officer?", options: ["Giving directions to people who are lost", "Building houses", "Flying planes"], answer: 0 },
          { q: "What idea about safety does the koban system show?", options: ["Safety comes from a trusted, helpful presence in daily life, not only catching criminals", "Safety comes only from high walls", "Safety does not matter"], answer: 0 }
        ]
      },
      {
        id: "d1115-5",
        title: "Why Is Blood Red?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "If you have ever had a small cut, you know that human blood is red. It is one of those facts so familiar that we rarely stop to ask why. What is it about our blood that gives it this deep red colour? The answer takes us deep inside the body, down to some of the smallest and busiest parts of us.\n\nBlood has a very important job: it carries oxygen from our lungs to every part of the body, where it is needed to keep us alive. This vital task is done by tiny red blood cells, which float in their millions in our blood.\n\nInside each of these red blood cells is a special substance whose job is to grab and carry oxygen. This substance contains iron. And here is the key: when this iron-rich substance joins with oxygen, it turns a bright red colour. Because our blood is full of these cells, all carrying oxygen, the blood itself looks red.\n\nYou might have heard that blood is blue before it gets oxygen, but this is a myth. Blood is always some shade of red. When it is rich in fresh oxygen, leaving the lungs, it is a bright, vivid red. After it has delivered its oxygen to the body, it becomes a darker, duller red. Our veins can look bluish through the skin, but the blood inside them is still red.\n\nSo the red colour of blood is really the colour of iron meeting oxygen, a tiny chemical signal of the life-giving work happening inside us every second.",
        summaryJa: "血はなぜ赤いのかについて。小さな切り傷を負ったことがあれば、人間の血が赤いと知っている。あまりに身近で、なぜかと立ち止まって問うことはめったにない。私たちの血の何がこの濃い赤色を与えるのか。答えは体の奥深く、私たちの最も小さく忙しい部分へと導く。血には重要な仕事がある。肺から体の隅々へ酸素を運び、生命を保つのに使う。この大切な仕事は、血中に何百万も浮かぶ小さな赤血球が行う。各赤血球の中には、酸素をつかんで運ぶ仕事をする特別な物質がある。この物質は鉄を含む。ここが鍵だ。この鉄に富む物質が酸素と結びつくと、鮮やかな赤色になる。血はこうした酸素を運ぶ細胞で満ちているので、血自体が赤く見える。酸素を得る前の血は青いと聞いたことがあるかもしれないが、これは俗説だ。血は常に何らかの赤だ。肺を出た新鮮な酸素に富む血は鮮やかな赤。体に酸素を届けた後は暗くくすんだ赤になる。皮膚越しに静脈は青みがかって見えるが、中の血はやはり赤い。血の赤は鉄が酸素と出会う色なのだ。",
        quiz: [
          { q: "What important job does blood do?", options: ["It carries oxygen from the lungs to every part of the body", "It makes the skin blue", "It cools the body like water"], answer: 0 },
          { q: "What gives blood its red colour?", options: ["An iron-rich substance that turns red when it joins with oxygen", "A red dye we eat", "The color of the skin"], answer: 0 },
          { q: "Is blood ever actually blue?", options: ["No, that is a myth; blood is always some shade of red", "Yes, before it has oxygen", "Yes, in the veins"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-11-14",
    passages: [
      {
        id: "d1114-1",
        title: "Why Does Competition Matter in Business?",
        level: "★★☆",
        genre: "ビジネス",
        text: "Imagine a town with only one shop selling bread. Because there is nowhere else to go, the shop could charge high prices, sell stale bread, and treat its customers badly. The people would have no choice but to accept it. Now imagine a second bakery opens across the street. Suddenly, everything changes. This change is the power of competition.\n\nCompetition happens when two or more businesses try to win the same customers. To succeed, each business must offer something better than the others. This simple pressure has powerful and positive effects, mostly for the benefit of ordinary customers.\n\nFirst, competition tends to lower prices. If one shop charges too much, customers will simply go to a cheaper rival. To keep their customers, businesses must offer fair prices. Second, competition improves quality. A business that sells poor products will lose customers to one that sells better ones, so each must work hard to improve.\n\nCompetition also encourages new ideas. To stand out from their rivals, businesses invent new products, offer better service, or find clever ways to do things. This constant push for improvement drives much of the progress we enjoy.\n\nOf course, competition can be hard for the businesses themselves. They must work constantly to stay ahead, and some will fail. But for society as a whole, and for customers in particular, competition is usually a very good thing.\n\nSo the next time you enjoy a low price, a good product, or helpful service, remember that competition, the quiet struggle between businesses to win your custom, is often the reason.",
        summaryJa: "なぜビジネスで競争が大切なのかについて。パンを売る店が一軒しかない町を想像しよう。他に行く所がないので、店は高値をつけ、古いパンを売り、客を粗末に扱えるかもしれない。人々は受け入れるしかない。では通りの向かいに二軒目のパン屋が開いたとしよう。突然すべてが変わる。この変化が競争の力だ。競争は、二つ以上の企業が同じ客を得ようとするときに起こる。成功するには、各企業が他より良い何かを提供せねばならない。この単純な圧力が、主に普通の客の利益のために、強力で良い効果を持つ。第一に、競争は価格を下げる傾向がある。一軒が高すぎれば客は安い競合へ行く。客を保つには公正な価格が要る。第二に、品質を上げる。粗悪な商品の店は良い店に客を奪われるので、各々が改善に努める。競争は新しい発想も促す。目立つために企業は新商品を生み、より良いサービスを提供し、巧妙な方法を見つける。この絶え間ない改善への推進が進歩の多くを生む。企業自身にはつらく、失敗する者もいるが、社会全体、特に客にはたいてい非常に良いことだ。",
        quiz: [
          { q: "What is competition in business?", options: ["When two or more businesses try to win the same customers", "When a shop has no rivals", "A kind of tax"], answer: 0 },
          { q: "How does competition tend to affect prices?", options: ["It tends to lower them, as customers can go to a cheaper rival", "It makes all prices rise", "It has no effect on prices"], answer: 0 },
          { q: "Why does competition encourage new ideas?", options: ["To stand out from rivals, businesses invent new products and services", "Because the law requires new ideas", "Because customers dislike new things"], answer: 0 }
        ]
      },
      {
        id: "d1114-2",
        title: "How Does a Touchscreen Work?",
        level: "★★☆",
        genre: "テクノロジー",
        text: "We touch them hundreds of times a day, on our phones, at train stations, and in shops. We tap, swipe, and type on smooth glass screens, and somehow the device knows exactly where our finger is. This feels completely natural now, but it is a clever piece of technology. How does a flat sheet of glass know where you are touching it?\n\nThe most common type of touchscreen today uses electricity. The key fact behind it is that the human body conducts electricity, even if only a little. Our skin can carry a tiny electric charge.\n\nUnder the glass of the screen is a very thin, invisible layer that holds a small, even electrical charge across its whole surface. When your finger comes near and touches the glass, your body draws away a tiny amount of this charge at that exact spot. The screen is designed to notice this small change.\n\nSensors around the edges of the screen constantly measure the electrical charge across the surface. When the charge changes at one point, the device can work out precisely where the change happened, and therefore where your finger is. It does this incredibly fast, many times each second, so it can follow your finger smoothly as it moves.\n\nThis is also why these screens often do not respond to a gloved finger or the end of a normal pen. These materials do not conduct electricity, so the screen feels nothing.\n\nSo a touchscreen works by sensing the tiny electrical effect of your own body, turning a simple touch of glass into a precise command.",
        summaryJa: "タッチスクリーンの仕組みについて。私たちは一日に何百回も、スマホや駅、店でそれに触れる。滑らかなガラスの画面をたたき、なで、入力し、機器はなぜか指の位置を正確に知る。今では完全に自然に感じるが、巧妙な技術だ。平らなガラスの板はどうやって触れられた場所を知るのか。今日最も一般的なタッチスクリーンは電気を使う。背景にある鍵は、人体がわずかながら電気を通すことだ。皮膚は小さな電荷を運べる。画面のガラスの下には、全面に小さく均一な電荷を保つ、非常に薄く目に見えない層がある。指が近づいてガラスに触れると、体がちょうどその場所の電荷をわずかに引き去る。画面はこの小さな変化に気づくよう作られている。画面の縁のセンサーが表面の電荷を絶えず測る。ある点で電荷が変わると、機器は変化が起きた場所、つまり指の位置を正確に割り出せる。毎秒何度も非常に速く行うので、動く指を滑らかに追える。だから手袋の指や普通のペンの先には反応しないことが多い。電気を通さないからだ。体の小さな電気的効果を感じ取るのだ。",
        quiz: [
          { q: "What key fact does a common touchscreen rely on?", options: ["The human body conducts a little electricity", "The human body produces light", "Glass is very heavy"], answer: 0 },
          { q: "What happens when your finger touches the screen?", options: ["It draws away a tiny amount of the screen's electric charge at that spot", "It heats the glass", "It makes a sound"], answer: 0 },
          { q: "Why does the screen often not respond to a gloved finger?", options: ["The glove does not conduct electricity, so the screen feels nothing", "The glove is too warm", "Gloves are too light"], answer: 0 }
        ]
      },
      {
        id: "d1114-3",
        title: "What Is a Peacekeeping Mission?",
        level: "★★★",
        genre: "世界情勢",
        text: "When a long and bitter conflict between groups or nations finally comes to an end, the danger is not always over. The two sides may stop fighting, but they often still distrust and fear one another. A single mistake or a small act of violence could easily start the fighting all over again. In these fragile moments, the world sometimes sends in a special kind of help: a peacekeeping mission.\n\nPeacekeepers are soldiers, police, and other workers sent by the international community, usually under the flag of the United Nations, to a place where a conflict has recently stopped. Importantly, they are not sent to fight a war or to take one side. Their job is to help keep the peace that has just been won.\n\nThey do this in several ways. They may stand between the two former enemies, watching the border or the agreed line between them, to make sure neither side breaks the ceasefire. They often help protect ordinary people who have suffered, delivering aid and guarding against violence. They may also help a damaged country slowly rebuild, supporting fair elections or helping former fighters return to normal life.\n\nPeacekeepers are often recognised by their light blue helmets or caps. These bright colours show that they come in peace, not as an enemy army.\n\nThe work is difficult and sometimes dangerous, and it does not always succeed. But at its best, a peacekeeping mission gives a war-torn region a precious chance: a calm space in which a fragile peace can grow strong, and ordinary life can slowly begin again.",
        summaryJa: "平和維持活動（PKO）とは何かについて。集団や国家の間の長く激しい紛争がついに終わっても、危険は必ずしも去らない。双方が戦いをやめても、なお互いを不信し恐れることが多い。一つの過ちや小さな暴力が、たやすく戦いを再び始めかねない。こうしたもろい瞬間に、世界は時に特別な助けを送る。平和維持活動だ。平和維持要員は、国際社会が、たいてい国連の旗の下で、紛争が最近止まった場所へ送る兵士・警察・その他の働き手だ。重要なのは、戦争をするためでも一方に味方するためでもないことだ。彼らの仕事は、勝ち取ったばかりの平和を保つのを助けることだ。数通りに行う。かつての敵同士の間に立ち、国境や合意された境界線を見張り、どちらも停戦を破らないようにする。苦しんだ普通の人々を守り、援助を届け、暴力を防ぐこともよくある。傷ついた国の再建を助け、公正な選挙を支え、元戦闘員が普通の生活に戻るのを助けることもある。水色のヘルメットや帽子でよく見分けられる。敵でなく平和のために来た印だ。難しく危険で常に成功はしないが、最良の時、戦禍の地に貴重な機会を与える。",
        quiz: [
          { q: "What is the job of peacekeepers?", options: ["To help keep a peace that has just been won, not to fight a war", "To take one side and win the war", "To start new conflicts"], answer: 0 },
          { q: "What is one thing peacekeepers do?", options: ["Watch the line between former enemies to make sure the ceasefire holds", "Choose which side should rule", "Build weapons"], answer: 0 },
          { q: "Why do peacekeepers wear light blue helmets?", options: ["To show they come in peace, not as an enemy army", "To hide from everyone", "Because blue is the cheapest color"], answer: 0 }
        ]
      },
      {
        id: "d1114-4",
        title: "Maneki-neko: Japan's Beckoning Cat",
        level: "★★☆",
        genre: "日本",
        text: "If you have ever visited a Japanese shop or restaurant, you may have noticed a small cat figure sitting near the entrance. It is usually white or golden, with one paw raised high in the air, as if waving hello. This cheerful little cat is the maneki-neko, meaning the beckoning cat, and it is one of Japan's most famous lucky charms.\n\nThe raised paw is the key to its meaning. In Japan, people traditionally beckon others to come closer with a gesture of the hand that looks like this raised paw. So the cat is not waving goodbye; it is inviting good things to come in. A cat with its left paw raised is believed to invite customers and people, while a right paw is thought to invite money and good fortune. This is why so many are placed in shops and businesses.\n\nThe details often carry meaning too. The colour of the cat, the collar it wears, and the coin it sometimes holds can all represent different kinds of luck, such as health, wealth, or success. There are countless charming stories about how the lucky cat first appeared, often involving a cat that saved or helped a kind person.\n\nToday, the maneki-neko is loved far beyond Japan and can be found in shops all around the world. Whether or not a person believes in its power, the little cat with its welcoming paw brings a warm and friendly feeling, silently wishing good luck to everyone who passes by.",
        summaryJa: "招き猫、日本の縁起物について。日本の店や飲食店を訪れたことがあれば、入り口近くに座る小さな猫の像に気づいたかもしれない。たいてい白か金色で、片方の前足を高く上げ、まるで挨拶しているようだ。この陽気な小さな猫が招き猫で、日本で最も有名な縁起物の一つだ。上げた前足が意味の鍵だ。日本では伝統的に、この上げた前足のように見える手ぶりで人を近くへ招く。だから猫は別れを振っているのでなく、良いものを招き入れているのだ。左の前足を上げた猫は客や人を招き、右の前足は金や幸運を招くと信じられる。だから多くが店や事業に置かれる。細部にも意味があることが多い。猫の色、着けた首輪、時に持つ小判は、健康・富・成功など異なる種類の幸運を表しうる。縁起猫が最初に現れた経緯には、親切な人を救い助けた猫が登場する魅力的な話が数えきれぬほどある。今や招き猫は日本をはるかに超えて愛され、世界中の店で見つかる。力を信じるかどうかにかかわらず、招く前足の小さな猫は温かく親しみある気持ちを運ぶ。",
        quiz: [
          { q: "What does 'maneki-neko' mean?", options: ["The beckoning cat", "The sleeping cat", "The running cat"], answer: 0 },
          { q: "What does the cat's raised paw represent?", options: ["Inviting good things, such as customers or fortune, to come in", "Saying goodbye", "Asking for food"], answer: 0 },
          { q: "What is believed about a cat with its right paw raised?", options: ["It invites money and good fortune", "It brings bad weather", "It keeps people away"], answer: 0 }
        ]
      },
      {
        id: "d1114-5",
        title: "Why Do Stars Twinkle?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "On a clear night, far from city lights, the sky fills with countless stars. If you watch them, you will notice something lovely: many of the stars seem to shimmer and flicker, changing brightness and even colour from moment to moment. This is what we call twinkling. But here is a surprise: the stars themselves are not actually flickering at all. The twinkling happens much closer to home.\n\nA star is a huge, distant sun, shining with a steady light. That light travels across unimaginable distances of empty space to reach us, and during this long journey, it stays calm and even. The trouble only begins in the last tiny part of its journey, when the starlight enters the Earth's atmosphere, the layer of air around our planet.\n\nOur atmosphere is always moving. It is full of pockets of air at different temperatures, which are constantly shifting and swirling. As the thin beam of starlight passes down through these moving layers of air, it is bent this way and that, again and again. By the time it reaches your eye, the light has been nudged around so many times that the star appears to dance and sparkle.\n\nThis is also why planets usually twinkle much less than stars. Planets are far closer to us, so they appear not as a single point but as a tiny disc of light, which the air cannot disturb so easily.\n\nSo the twinkling of the stars is really a gift of our own restless air, turning steady, distant suns into the shimmering jewels of the night sky.",
        summaryJa: "星はなぜまたたくのかについて。街の灯から離れた晴れた夜、空は無数の星で満ちる。見ていると素敵なことに気づく。多くの星がゆらめき明滅し、刻一刻と明るさや色さえ変える。これをまたたきと呼ぶ。だが驚きがある。星そのものは実はまったく明滅していない。またたきはもっと身近で起こる。星は巨大で遠い太陽で、一定の光で輝く。その光は想像もできない空間の距離を越えて私たちに届き、この長い旅の間、穏やかで一定だ。問題は旅の最後のごく一部、星の光が地球の大気、惑星を包む空気の層に入るときにだけ始まる。大気は常に動いている。異なる温度の空気の塊で満ち、絶えず移り渦巻く。細い星の光がこの動く空気の層を下りて通るうちに、あちこちへ何度も曲げられる。目に届くころには光は何度も押しやられ、星は踊り輝いて見える。だから惑星はたいてい星よりずっとまたたかない。惑星はずっと近く、一点でなく小さな光の円盤に見え、空気が乱しにくいのだ。星のまたたきは、私たち自身の落ち着かない空気の贈り物だ。",
        quiz: [
          { q: "Do the stars themselves actually flicker?", options: ["No, their light is steady; the twinkling happens in our atmosphere", "Yes, stars turn on and off", "Yes, they change size"], answer: 0 },
          { q: "What causes the twinkling?", options: ["Starlight is bent as it passes through moving layers of air", "The stars are blinking", "Clouds cover the stars"], answer: 0 },
          { q: "Why do planets usually twinkle less than stars?", options: ["They are closer and appear as a tiny disc, which the air cannot disturb so easily", "They are much hotter", "They have no light"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-11-13",
    passages: [
      {
        id: "d1113-1",
        title: "What Is an Entrepreneur?",
        level: "★★☆",
        genre: "ビジネス",
        text: "Think of a product or service you use and love. Someone, somewhere, had the idea for it first. At some point, that person decided not just to dream about their idea, but to take a risk and build a real business around it. A person who does this, who starts a new business and accepts the risks involved, is called an entrepreneur.\n\nBeing an entrepreneur is about more than just having a good idea. Many people have good ideas. What makes an entrepreneur different is the willingness to act, and to take a chance. Starting a business is risky. It often requires money, long hours, and hard work, with no promise of success. An entrepreneur steps forward anyway, believing their idea is worth the effort.\n\nEntrepreneurs come in many forms. Some start huge technology companies that change the world. But most are much smaller: a person who opens a local bakery, a family that starts a cleaning service, or someone who sells handmade goods online. All of them share the same basic spirit of creating something new.\n\nThe work is not easy. Many new businesses fail, and an entrepreneur must be ready to face problems, learn from mistakes, and keep going when things are difficult. It takes courage, patience, and determination.\n\nYet entrepreneurs are vital to any economy. They create new products, new services, and new jobs. By being brave enough to turn their ideas into reality, they drive progress and bring useful new things into the world, benefiting not only themselves, but everyone around them.",
        summaryJa: "起業家とは何かについて。あなたが使って気に入っている製品やサービスを思い浮かべよう。どこかの誰かが最初にその着想を得た。ある時その人は、着想を夢見るだけでなく、危険を冒してそれを中心に本物の事業を築こうと決めた。これを行う人、新しい事業を始め、伴う危険を引き受ける人を起業家という。起業家であることは、良い着想を持つこと以上だ。良い着想を持つ人は多い。起業家を分けるのは、行動し賭けに出る意欲だ。事業を始めるのは危険で、しばしば金や長時間、重労働を要し、成功の保証はない。それでも起業家は、自分の着想が努力に値すると信じて踏み出す。起業家は様々だ。世界を変える巨大な技術企業を始める人もいる。だが多くはずっと小さい。地元のパン屋を開く人、清掃業を始める家族、手作りの品をネットで売る人など。皆、新しい何かを創る同じ精神を分かち合う。容易ではない。多くの新事業は失敗し、問題に向き合い失敗から学び、困難でも続ける覚悟が要る。勇気・忍耐・決意が要る。だが起業家はどの経済にも不可欠で、新しい製品・サービス・雇用を生む。",
        quiz: [
          { q: "What is an entrepreneur?", options: ["A person who starts a new business and accepts the risks involved", "A person who only dreams, never acts", "A government official"], answer: 0 },
          { q: "What makes an entrepreneur different from others with good ideas?", options: ["The willingness to act and take a chance", "Having no ideas at all", "Avoiding all work"], answer: 0 },
          { q: "Why are entrepreneurs vital to an economy?", options: ["They create new products, services, and jobs", "They stop all new businesses", "They never take risks"], answer: 0 }
        ]
      },
      {
        id: "d1113-2",
        title: "How Does a Refrigerator Keep Food Cold?",
        level: "★★☆",
        genre: "テクノロジー",
        text: "A refrigerator is one of the most useful machines in any home. It keeps our food fresh and safe by holding it at a low temperature, day and night, for years. But a refrigerator does not actually make cold. In fact, cold is not a thing that can be made. Instead, the clever trick of a refrigerator is to take the heat out of the food and the air inside, and move it somewhere else.\n\nTo understand this, think about a simple fact: a liquid turning into a gas takes in heat from its surroundings. This is why you feel cool when water evaporates from your wet skin. A refrigerator uses this same idea, over and over.\n\nInside a refrigerator is a special liquid that flows around through pipes. In the pipes inside the cold section, this liquid is allowed to turn into a gas. As it does, it soaks up heat from the food and air around it, making the inside cold. The gas, now carrying this heat, flows to pipes at the back of the fridge, outside the cold box. There, it is squeezed back into a liquid, and as this happens, it releases the heat it collected into the kitchen air.\n\nThis is why the back of a refrigerator often feels warm. The machine is quietly dumping the heat it removed from your food.\n\nSo a refrigerator is really a heat-moving machine. It does not create cold; it simply carries unwanted heat out of the food and releases it into the room, keeping your food cool and fresh.",
        summaryJa: "冷蔵庫はどうやって食べ物を冷たく保つのかについて。冷蔵庫はどの家でも最も役立つ機械の一つだ。昼も夜も、何年も食べ物を低い温度に保ち、新鮮で安全に保つ。だが冷蔵庫は実は「冷たさ」を作っていない。そもそも冷たさは作れるものではない。冷蔵庫の巧妙な技は、食べ物や中の空気から熱を取り出し、別の場所へ移すことだ。これを理解するには、単純な事実を考えよう。液体が気体に変わるとき、周りから熱を奪う。濡れた肌から水が蒸発すると涼しく感じるのはこのためだ。冷蔵庫は同じ考えを何度も使う。冷蔵庫の中には、管を巡る特別な液体がある。冷える区画の中の管では、この液体が気体に変わるのを許される。すると周りの食べ物や空気から熱を吸い取り、内部を冷たくする。熱を運ぶその気体は、冷たい箱の外、冷蔵庫の背面の管へ流れる。そこで押し縮められて液体に戻り、その際に集めた熱を台所の空気へ放つ。冷蔵庫の背面がよく温かいのはこのためだ。要は熱を移す機械で、冷たさを作るのでなく、不要な熱を食べ物から運び出し部屋へ放つのだ。",
        quiz: [
          { q: "What does a refrigerator actually do?", options: ["It moves heat out of the food and air, rather than making cold", "It creates cold from nothing", "It freezes the kitchen"], answer: 0 },
          { q: "What simple fact does a refrigerator use?", options: ["A liquid turning into a gas takes in heat from its surroundings", "Gas is always colder than liquid", "Heat moves from cold to hot by itself"], answer: 0 },
          { q: "Why does the back of a refrigerator often feel warm?", options: ["It is releasing the heat removed from the food into the kitchen air", "It has a small fire inside", "The food is being cooked there"], answer: 0 }
        ]
      },
      {
        id: "d1113-3",
        title: "How Do Countries Protect the Oceans?",
        level: "★★★",
        genre: "世界情勢",
        text: "The oceans cover most of our planet, and they are vital to all life on Earth. They provide food for billions of people, produce much of the oxygen we breathe, and help control the world's climate. Yet the oceans face serious problems, from pollution to the danger of taking too many fish. Because the sea belongs to no single country, protecting it is a task that nations can only do by working together.\n\nOne of the biggest challenges is overfishing. If too many fish are caught, their numbers fall, and the fish may not be able to recover. To prevent this, countries make agreements that set limits on how many fish may be caught, and when. This helps fish populations stay healthy for the future.\n\nPollution is another shared problem. Waste, especially plastic, flows from the land into the sea, where it harms sea creatures and spreads across the whole ocean. Nations are working together to reduce this waste and to clean up the seas.\n\nCountries also create marine protected areas, special zones of ocean where fishing and other harmful activities are limited or banned. In these safe areas, sea life can recover and thrive, rather like national parks in the sea.\n\nNone of this is easy, because the ocean is vast and hard to watch over. Rules made by one country mean little if its neighbours ignore them. But slowly, through patient cooperation and shared agreements, the nations of the world are learning to care for the great oceans that connect and sustain us all.",
        summaryJa: "国々はどうやって海を守るのかについて。海は地球の大部分を覆い、地球上のすべての生命に欠かせない。何十億もの人に食料を与え、私たちが吸う酸素の多くを作り、世界の気候の調整を助ける。だが海は、汚染から魚の取りすぎの危険まで、深刻な問題に直面する。海はどの一国のものでもないため、守るのは国々が協力してのみできる課題だ。最大の難題の一つは魚の取りすぎ（乱獲）だ。あまりに多く捕れば数が減り、回復できなくなりうる。これを防ぐため、各国はいつ・どれだけ捕ってよいか制限を定める協定を結ぶ。将来に向け魚の数を健全に保つのを助ける。汚染も共通の問題だ。ごみ、特にプラスチックが陸から海へ流れ込み、海の生き物を害し海全体に広がる。各国はこのごみを減らし海を清掃しようと協力している。海洋保護区も設ける。漁などの有害な活動を制限・禁止する特別な区域で、海の国立公園のようだ。海は広大で見守りにくく容易ではないが、忍耐強い協力と協定で、国々は私たちをつなぎ支える大海を守ることを学びつつある。",
        quiz: [
          { q: "Why must countries work together to protect the oceans?", options: ["The sea belongs to no single country", "Each country owns its own ocean", "The ocean is very small"], answer: 0 },
          { q: "How do countries try to prevent overfishing?", options: ["They make agreements limiting how many fish may be caught", "They catch as many fish as possible", "They ban all boats forever"], answer: 0 },
          { q: "What is a 'marine protected area'?", options: ["A zone of ocean where fishing and harmful activities are limited or banned", "A new type of fishing boat", "A factory in the sea"], answer: 0 }
        ]
      },
      {
        id: "d1113-4",
        title: "Origami: The Art of Paper Folding",
        level: "★★☆",
        genre: "日本",
        text: "Take a simple, flat square of paper. With no scissors and no glue, using only careful folds, you can transform it into a crane, a flower, a box, or a jumping frog. This is origami, the Japanese art of paper folding, a craft that turns a humble sheet of paper into something beautiful through patience and skill alone.\n\nThe name itself describes it perfectly, combining the Japanese words for folding and paper. The rules are simple: you start with a square and you only fold. Yet from these simple beginnings, people have created an astonishing variety of shapes, from easy models for children to incredibly complex designs that take hours to complete.\n\nThe most famous origami model of all is the paper crane. In Japan, the crane is a symbol of good luck and long life. There is a well-known belief that a person who folds one thousand paper cranes may be granted a wish. Because of this, strings of colourful cranes are often folded as a heartfelt wish for peace, health, or recovery from illness.\n\nOrigami is enjoyed by people of all ages. For children, it is a fun game that also teaches patience and careful hands. For adults, it can be a relaxing hobby or even a serious art form.\n\nBeyond its beauty, origami has surprised the world in another way. Scientists and engineers now study its clever folds to help design things that must fold up small and then open out, such as solar panels for spacecraft. A simple paper art has become a source of modern inspiration.",
        summaryJa: "折り紙、紙を折る芸術について。単純で平らな正方形の紙を取る。はさみも糊も使わず、丁寧に折るだけで、鶴や花、箱、跳ねるカエルに変えられる。これが折り紙、日本の紙を折る芸術で、ただの一枚の紙を忍耐と技だけで美しいものに変える工芸だ。名前自体がそれを完璧に表し、「折る」と「紙」の日本語を合わせている。規則は単純で、正方形から始め、折るだけだ。だがこの単純な始まりから、人々は驚くほど多様な形を生んだ。子ども向けの易しい作品から、完成に何時間もかかる非常に複雑な設計まで。最も有名な折り紙は折り鶴だ。日本で鶴は幸運と長寿の象徴だ。千羽の鶴を折ると願いがかなうかもしれないという有名な言い伝えがある。だから色とりどりの鶴の連なりが、平和や健康、病気からの回復を願う心として折られることが多い。折り紙はあらゆる年齢の人に楽しまれる。子どもには忍耐と器用な手を育てる楽しい遊び、大人にはくつろぎの趣味や本格的な芸術にもなる。美しさを超え、科学者や技術者はその巧妙な折りを研究し、宇宙船の太陽光パネルなど小さく畳んで開く物の設計に役立てている。",
        quiz: [
          { q: "What are the basic rules of origami?", options: ["Start with a square and only fold, with no scissors or glue", "Cut and glue many pieces", "Use only round paper"], answer: 0 },
          { q: "What does the paper crane symbolize in Japan?", options: ["Good luck and long life", "Bad weather", "A kind of money"], answer: 0 },
          { q: "How has origami inspired scientists and engineers?", options: ["Its folds help design things that fold up small and open out, like spacecraft solar panels", "It replaced all computers", "It is used to build roads"], answer: 0 }
        ]
      },
      {
        id: "d1113-5",
        title: "How Do Rainbows Form?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "After a rain shower, when the sun comes out again, we are sometimes rewarded with one of nature's most beautiful sights: a rainbow, a great arch of colour stretching across the sky. For thousands of years, people wondered what rainbows were. Today, we understand that a rainbow is made by sunlight, rain, and a clever trick of light.\n\nThe first secret is that sunlight, which looks white or colourless, is actually a mixture of many colours all travelling together. We usually cannot see them separately, but under the right conditions, they can be split apart.\n\nThis is exactly what happens in a rainbow, and the splitting is done by raindrops. When sunlight enters a tiny, round drop of rain, the light bends as it passes into the water. Because each colour in the light bends by a slightly different amount, the colours begin to spread out and separate. The light then bounces off the back of the raindrop and comes back out, now split into its separate colours.\n\nMillions of raindrops do this at the same time, each sending a particular colour towards your eyes. Together, they form the familiar arch of red, orange, yellow, green, blue, and violet that we call a rainbow.\n\nThis is also why you can only see a rainbow when the sun is behind you and the rain is in front of you. You are standing in just the right place to catch the split light.\n\nSo a rainbow is not really an object in the sky. It is a beautiful pattern of sunlight, painted for a moment by falling rain.",
        summaryJa: "虹はどうやってできるのかについて。雨上がり、再び日が差すと、時に自然の最も美しい光景の一つ、虹が空に大きな色の弧を描いて現れる。何千年もの間、人々は虹とは何かと不思議がった。今日、虹は日光と雨、そして光の巧妙な技で作られると分かっている。第一の秘密は、白く無色に見える日光が、実は多くの色が共に進む混ざり合いだということだ。普段は別々に見えないが、条件が整うと分けられる。まさにこれが虹で起こり、分けるのは雨粒だ。日光が小さな丸い雨粒に入ると、水に入る際に光が曲がる。光の各色はわずかに異なる量だけ曲がるので、色が広がり分かれ始める。光は雨粒の裏で跳ね返り、今や別々の色に分かれて出てくる。何百万もの雨粒が同時にこれを行い、それぞれが特定の色をあなたの目へ送る。合わさって、赤・橙・黄・緑・青・紫のおなじみの弧、虹になる。だから虹は、太陽が背後、雨が前方にあるときだけ見える。分かれた光を捉えるちょうどよい場所に立っているのだ。虹は空の物体ではなく、落ちる雨が一瞬描く日光の美しい模様だ。",
        quiz: [
          { q: "What is sunlight really made of?", options: ["A mixture of many colors travelling together", "Only the color white", "A kind of water"], answer: 0 },
          { q: "What splits the sunlight into colors in a rainbow?", options: ["Raindrops, which bend each color by a slightly different amount", "The clouds blocking the sun", "The wind"], answer: 0 },
          { q: "Why can you only see a rainbow in certain positions?", options: ["The sun must be behind you and the rain in front of you", "You must be very high up", "It only works at midnight"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-11-12",
    passages: [
      {
        id: "d1112-1",
        title: "What Is Inflation?",
        level: "★★☆",
        genre: "ビジネス",
        text: "Have you ever heard an older person say, When I was young, a bottle of milk cost almost nothing? They are not imagining it. Over the years, the prices of most things slowly rise. A meal, a train ticket, or a house usually costs more today than it did twenty years ago. This general, slow rise in prices over time is called inflation.\n\nInflation really means that money is losing some of its value. If prices double over many years, then the same coin buys only half as much as it once did. The money in your pocket has not changed, but what it can buy has shrunk.\n\nA small, steady amount of inflation is normal and is usually not a problem. In fact, most governments aim for a little inflation each year, because it is a sign of a healthy, growing economy. Prices and wages tend to rise together slowly.\n\nProblems appear when inflation becomes too fast. If prices rise very quickly, people's savings lose value, and those on fixed incomes, such as pensioners, can suffer, because their money buys less and less. Life becomes uncertain and difficult.\n\nThis is why governments and central banks watch inflation very carefully. They use various tools to try to keep it low and steady, avoiding both fast price rises and the opposite problem of falling prices.\n\nUnderstanding inflation helps explain many things: why wages rise, why saving matters, and why the money of today will almost certainly buy less in the future than it does right now.",
        summaryJa: "インフレーション（物価上昇）とは何かについて。年配の人が「若い頃は牛乳一本がほとんどただ同然だった」と言うのを聞いたことはないだろうか。思い込みではない。年月とともに、ほとんどの物の値段はゆっくり上がる。食事も電車の切符も家も、たいてい二十年前より今の方が高い。この時間をかけた全般的でゆっくりした値上がりをインフレという。インフレは実は、お金が価値の一部を失うことを意味する。何年もかけて物価が倍になれば、同じ硬貨で買えるのはかつての半分だけだ。財布のお金は変わらないが、買える量は縮んだ。小さく安定したインフレは普通で、たいてい問題ではない。実際、多くの政府は毎年少しのインフレを目指す。健全で成長する経済の兆しだからだ。物価と賃金はゆっくり共に上がる傾向がある。問題はインフレが速すぎるときに生じる。物価が急に上がると貯金は価値を失い、年金生活者など固定収入の人は苦しむ。だから政府や中央銀行はインフレを注意深く見守り、様々な手段で低く安定に保とうとする。賃金が上がる理由や貯蓄が大切な理由を説明してくれる。",
        quiz: [
          { q: "What is inflation?", options: ["A general, slow rise in prices over time", "A fall in all prices to zero", "A kind of new coin"], answer: 0 },
          { q: "What does inflation mean for money?", options: ["Money slowly loses some of its value", "Money becomes worth more each day", "Money stops existing"], answer: 0 },
          { q: "When does inflation become a problem?", options: ["When prices rise too fast, so savings and fixed incomes lose value", "When it is small and steady", "Inflation is never a problem"], answer: 0 }
        ]
      },
      {
        id: "d1112-2",
        title: "How Does a Battery Work?",
        level: "★★☆",
        genre: "テクノロジー",
        text: "Batteries are everywhere in modern life, powering our phones, toys, torches, and remote controls. A battery is a small, portable store of energy, ready to give electricity whenever we need it. But a battery does not actually hold electricity inside it, waiting to pour out. Instead, it holds something cleverer: the power to make electricity on demand, through a chemical reaction.\n\nInside every battery are chemicals, carefully chosen and kept apart. These chemicals have a strong tendency to react with one another. When they do react, one of the effects is to push tiny particles called electrons from one part of the battery to another. A flow of electrons is exactly what electricity is.\n\nThe clever design of a battery is that the chemicals cannot react directly inside it. The only path for the electrons to travel is out through the two ends of the battery, called terminals. When you connect a battery into a device, such as a torch, you complete a path, or circuit, between these two terminals. Now the electrons can finally flow, travelling out of the battery, through the device, and back again. On their way, they give their energy to the device, lighting the bulb.\n\nAs the battery works, its chemicals are slowly used up. Eventually, the reaction can no longer happen, and we say the battery is flat, or dead. Some batteries can be recharged, which uses electricity to reverse the chemical change, so the battery can be used again.\n\nSo a battery is really a small chemical factory, quietly turning stored chemicals into useful electric power.",
        summaryJa: "電池の仕組みについて。電池は現代生活のあらゆる所にあり、スマホやおもちゃ、懐中電灯、リモコンを動かす。電池は小さな持ち運べるエネルギーの蓄えで、必要なときに電気を出せる。だが電池は実は、中に電気をためて噴き出すのを待っているのではない。もっと巧妙なもの、化学反応で必要に応じて電気を作る力を持つ。どの電池の中にも、慎重に選ばれ分けて保たれた化学物質がある。これらは互いに強く反応しようとする性質を持つ。反応すると、その効果の一つとして、電子という小さな粒を電池のある部分から別の部分へ押しやる。電子の流れこそが電気だ。電池の巧妙な設計は、化学物質が内部で直接反応できないことだ。電子が進める唯一の道は、端子という二つの端を通って外へ出ることだ。電池を懐中電灯などの機器につなぐと、二つの端子の間に回路という道ができる。すると電子はようやく流れ、電池から出て機器を通り戻る。途中でエネルギーを機器に与え、電球を灯す。働くうちに化学物質は使い切られ、やがて電池切れになる。充電で元に戻せる電池もある。小さな化学工場だ。",
        quiz: [
          { q: "What does a battery actually store?", options: ["Chemicals that can make electricity through a reaction", "Electricity waiting inside, ready to pour out", "Tiny bulbs"], answer: 0 },
          { q: "What is electricity, in a battery?", options: ["A flow of tiny particles called electrons", "A kind of light", "A type of heat only"], answer: 0 },
          { q: "Why does a battery eventually go flat?", options: ["Its chemicals are slowly used up, so the reaction can no longer happen", "It runs out of stored light", "The terminals disappear"], answer: 0 }
        ]
      },
      {
        id: "d1112-3",
        title: "How Does the World Help After a Natural Disaster?",
        level: "★★★",
        genre: "世界情勢",
        text: "When a powerful earthquake, flood, or storm strikes a region, the damage can be overwhelming. Homes are destroyed, roads are broken, and many people may suddenly be left without food, clean water, or shelter. In such moments, a stricken country often cannot cope alone. One of the most hopeful sights in such times is the way the rest of the world comes together to help.\n\nHelp arrives in many forms and from many directions. In the first critical days, rescue teams fly in from other countries, bringing trained workers and dogs to search for survivors trapped under fallen buildings. Speed is vital, as every hour counts.\n\nAfter the immediate rescue, the focus turns to survival and comfort. Governments, international organisations, and charities send emergency supplies: clean water, food, medicine, tents, and blankets. Medical teams set up temporary hospitals to care for the injured and prevent the spread of disease.\n\nMuch of this effort is coordinated so that help is not wasted or duplicated. Large organisations and the famous Red Cross and Red Crescent work to make sure aid reaches the people who need it most. Ordinary people around the world also give money, often in huge amounts, to support the relief work.\n\nThe road to full recovery after a great disaster can take many years. But the immediate response shows something deeply encouraging about humanity. When disaster strikes one part of the human family, people everywhere, regardless of nation or language, are often moved to reach out and help strangers they will never meet.",
        summaryJa: "自然災害の後、世界はどう助けるのかについて。強い地震や洪水、暴風がある地域を襲うと、被害は圧倒的になりうる。家は壊れ、道は寸断され、多くの人が突然、食べ物や清潔な水、住む場所を失う。そんなとき、被災した国は一国だけでは対処しきれないことが多い。こうした時に最も希望ある光景の一つが、世界の他の地域が助けに集まる様子だ。助けは多くの形で、多くの方向から届く。最初の重要な数日、他国から救助隊が飛来し、訓練された人や犬を連れて、倒れた建物の下に閉じ込められた生存者を捜す。一刻を争うので速さが重要だ。当面の救助の後、焦点は生存と安らぎに移る。政府や国際機関、慈善団体が、清潔な水、食料、薬、テント、毛布などの緊急物資を送る。医療チームが仮設の病院を設け、負傷者を手当てし病気の広がりを防ぐ。多くは助けが無駄や重複にならないよう調整される。大きな組織や有名な赤十字・赤新月が、最も必要とする人に援助が届くよう努める。世界中の普通の人々も多額の寄付をする。完全な復興には何年もかかりうるが、即時の対応は人間性の励みになる何かを示す。",
        quiz: [
          { q: "What arrives in the first critical days after a disaster?", options: ["Rescue teams to search for trapped survivors", "Only tourists", "New factories"], answer: 0 },
          { q: "What kind of emergency supplies are sent?", options: ["Clean water, food, medicine, tents, and blankets", "Toys and games only", "Nothing useful"], answer: 0 },
          { q: "Why is the relief effort coordinated?", options: ["So that help is not wasted or duplicated and reaches those who need it most", "To make it slower", "To help only one city"], answer: 0 }
        ]
      },
      {
        id: "d1112-4",
        title: "Shodo: The Art of Japanese Calligraphy",
        level: "★★☆",
        genre: "日本",
        text: "In a quiet room, a person sits straight and still before a clean sheet of white paper. They dip a soft brush into black ink, pause for a moment to calm their mind, and then, in a few smooth, confident strokes, create a beautiful character. This is shodo, the ancient art of Japanese calligraphy, in which writing itself becomes a form of art.\n\nShodo uses a few simple tools: a brush, a stick of ink, a stone to prepare the ink with water, and paper. Yet mastering them takes many years. Unlike typing or everyday writing, the goal of shodo is not only to be clear, but to be beautiful and full of feeling.\n\nEvery stroke matters enormously. The artist must control the amount of ink, the pressure of the brush, and the speed of the hand. A single character may be written in one flowing movement that cannot be corrected or touched up afterwards. Because of this, the writing captures the artist's state of mind at that exact moment. A calm, focused heart produces calm, balanced writing.\n\nFor this reason, shodo is seen as much more than beautiful writing. Like many Japanese arts, it is also a path to developing patience, concentration, and inner calm. Children learn it at school, and many adults practise it throughout their lives.\n\nA finished work of shodo, hanging on a wall, is admired not just for its meaning, but for its energy and grace, a frozen record of a single, perfect, unrepeatable moment of focus.",
        summaryJa: "書道、日本の書の芸術について。静かな部屋で、人が白い清らかな紙の前に背筋を伸ばして静かに座る。柔らかい筆を黒い墨に浸し、少し間を置いて心を鎮め、そして滑らかで確かな数筆で美しい文字を生み出す。これが書道、書くこと自体が芸術になる日本の古い技だ。書道が使う道具は少ない。筆、墨、水で墨をする硯、そして紙だ。だが使いこなすには長い年月がかかる。入力や日常の筆記と違い、書道の目的は明瞭であることだけでなく、美しく感情に満ちていることだ。一筆一筆が非常に重要だ。書き手は墨の量、筆の圧、手の速さを操らねばならない。一文字が、後から直せない一つの流れる動きで書かれることもある。だから書は、まさにその瞬間の書き手の心を捉える。穏やかで集中した心は穏やかで均整のとれた書を生む。このため書道は美しい文字以上のものと見なされる。多くの日本の芸術同様、忍耐や集中、内なる静けさを育む道でもある。子どもは学校で学び、多くの大人が生涯を通じて続ける。壁に掛けられた作品は、意味だけでなく力と優美さでも称えられる。",
        quiz: [
          { q: "What is shodo?", options: ["The Japanese art of calligraphy, where writing becomes art", "A kind of painting with colors", "A type of dance"], answer: 0 },
          { q: "Why does every stroke matter so much?", options: ["A character is often written in one movement that cannot be corrected", "The paper is very expensive", "The brush is very heavy"], answer: 0 },
          { q: "Besides beautiful writing, what is shodo seen as?", options: ["A path to developing patience, concentration, and inner calm", "A way to write as fast as possible", "A kind of sport"], answer: 0 }
        ]
      },
      {
        id: "d1112-5",
        title: "Why Do Cats Purr?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "Anyone who has stroked a happy, sleepy cat knows the gentle, rumbling sound it makes: a soft, steady purr. It is one of the most comforting sounds in the animal world, and we usually take it as a clear sign that a cat is content. But how do cats make this sound, and does it always mean they are happy? The answer is more surprising than you might think.\n\nFirst, how is a purr made? Scientists believe it comes from the muscles in the cat's voice box, or larynx. These muscles open and close the space very quickly, many times a second. As the cat breathes in and out, the air passing through this rapidly moving space creates the familiar purring sound. Remarkably, a cat can purr continuously, both as it breathes in and as it breathes out.\n\nThe bigger surprise is why cats purr. Most of the time, a purr does mean a cat is relaxed and happy. But cats have also been observed purring when they are frightened, injured, or even close to death. This suggests that purring is not only a sign of joy.\n\nOne fascinating idea is that purring may help a cat to heal. The gentle vibrations of a purr happen at a frequency that some scientists think may help to strengthen bones and repair tissues. If this is true, a cat may purr to comfort and heal itself in times of stress, as well as to express contentment.\n\nSo the humble purr may be far more than a simple sound of happiness. It remains one of the gentle mysteries of our feline friends.",
        summaryJa: "猫はなぜ喉を鳴らすのかについて。幸せそうに眠い猫をなでたことのある人なら、その優しく響く音、柔らかく一定したゴロゴロを知っている。動物界で最も心地よい音の一つで、普通は猫が満足している明らかな印と受け取る。だが猫はどうやってこの音を出し、いつも幸せを意味するのか。答えは思うより意外だ。まず、どうやって鳴らすのか。科学者は、猫の喉頭（声を出す器官）の筋肉から来ると考える。この筋肉が毎秒何度も素早く空間を開閉する。猫が息を吸い吐きする際、この素早く動く空間を通る空気があのゴロゴロ音を作る。驚くべきことに、猫は吸う時も吐く時も続けて鳴らせる。もっと大きな驚きはなぜ鳴らすかだ。たいていは確かにくつろぎ幸せを意味する。だが猫は、怖がったり傷ついたり、死に近いときでさえ喉を鳴らすのが観察されている。喜びの印だけではないのだ。興味深い一説は、ゴロゴロが猫の治癒を助けるかもしれないというものだ。その穏やかな振動はある周波数で起こり、骨を強め組織を修復するのを助けうると考える科学者もいる。本当なら、猫はストレス時に自らを慰め癒やすために鳴らすのかもしれない。",
        quiz: [
          { q: "How do scientists believe a purr is made?", options: ["By muscles in the voice box opening and closing very quickly", "By the cat's stomach", "By the cat's tail moving"], answer: 0 },
          { q: "What is surprising about when cats purr?", options: ["They also purr when frightened, injured, or near death, not only when happy", "They only purr once a year", "They purr only while eating"], answer: 0 },
          { q: "What is one fascinating idea about purring?", options: ["Its vibrations may help strengthen bones and repair tissues", "It makes the cat grow bigger", "It cleans the cat's fur"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-11-11",
    passages: [
      {
        id: "d1111-1",
        title: "What Is a Share in a Company?",
        level: "★★☆",
        genre: "ビジネス",
        text: "When a company wants to grow, it often needs a large amount of money, perhaps to build a new factory or expand into other countries. One powerful way to raise this money is to sell small pieces of the company itself to the public. Each of these small pieces is called a share, and anyone who owns one becomes, in a tiny way, a part-owner of the company.\n\nImagine a company is divided into a million equal pieces. If you buy one share, you own one millionth of that company. Buy a thousand shares, and you own a thousand millionths. Owning shares makes you a shareholder, with a real stake in how the business performs.\n\nWhy do people buy shares? There are two main hopes. First, if the company does well and becomes more valuable, the price of each share may rise. The shareholder can then sell their shares for more than they paid, making a profit. Second, many companies share some of their yearly profits with their shareholders. This payment is called a dividend.\n\nOf course, there is also risk. If the company does badly, the share price can fall, and shareholders may lose money. Share prices can rise and fall for many reasons, so buying shares is never a sure way to get rich.\n\nShares are a clever idea that connects ordinary people to the success of businesses. They let companies raise money to grow, and they let people, in a small way, own a part of the companies whose products they use every day.",
        summaryJa: "株（株式）とは何かについて。会社が成長したいとき、新しい工場を建てたり他国へ進出したりするために、多額の資金を必要とすることが多い。その資金を集める強力な方法の一つが、会社自体の小さな一片を広く人々に売ることだ。この小さな一片を株といい、一つでも持てば、ごくわずかながら会社の一部の所有者になる。会社が百万の等しい片に分かれていると想像しよう。一株買えば会社の百万分の一を所有する。千株買えば千の百万分の一だ。株を持つと株主になり、事業の成績に本当の利害を持つ。なぜ人は株を買うのか。主な望みは二つ。第一に、会社が好調で価値が上がれば、各株の値段も上がりうる。株主は払った額より高く売って利益を得られる。第二に、多くの会社は年間利益の一部を株主に分ける。この支払いを配当という。もちろん危険もある。会社が不調なら株価は下がり、株主は損をしうる。株価は様々な理由で上下し、確実に儲かる方法では決してない。株は人々を事業の成功に結びつける巧妙な考えだ。",
        quiz: [
          { q: "What does owning a share mean?", options: ["You become, in a tiny way, a part-owner of the company", "You manage the whole company", "You work for the company for free"], answer: 0 },
          { q: "What is a dividend?", options: ["A payment of some of a company's profits to its shareholders", "A fee for buying shares", "A kind of company car"], answer: 0 },
          { q: "What is a risk of buying shares?", options: ["If the company does badly, the share price can fall and you may lose money", "Shares always rise in value", "You can never sell them"], answer: 0 }
        ]
      },
      {
        id: "d1111-2",
        title: "How Does Wi-Fi Work?",
        level: "★★☆",
        genre: "テクノロジー",
        text: "In homes, cafés, and offices everywhere, people connect their phones and computers to the internet without any wires at all. We call this Wi-Fi, and it feels almost like magic. Information seems to travel through empty air, from a small box on the wall to the device in your hand. But there is no magic involved, only a clever use of something invisible all around us: radio waves.\n\nRadio waves are a kind of energy that travels through the air, the same basic thing used to carry radio and television signals. They are completely invisible and harmless, and they can pass through air and even walls. Wi-Fi uses these waves to carry information instead of music or pictures.\n\nAt the centre of a Wi-Fi network is a device called a router. The router is connected to the internet, usually by a cable coming into the building. Its job is to turn the information from the internet into radio waves and broadcast them into the air around it.\n\nYour phone or computer contains a tiny radio of its own. It listens for these waves, receives them, and turns them back into useful information, such as a web page or a message. It can also send waves back to the router, so the conversation goes both ways.\n\nBecause the signal travels through the air, you must be fairly close to the router for a strong connection. Walls and distance can weaken it.\n\nSo Wi-Fi is really just a two-way radio conversation, happening silently and invisibly, carrying the whole internet across the short distance from a router to your hand.",
        summaryJa: "Wi-Fiの仕組みについて。家でも喫茶店でも職場でも、人々は線を一切使わずスマホやパソコンをインターネットにつなぐ。これをWi-Fiといい、まるで魔法のようだ。情報が壁の小さな箱から手の中の機器へ、何もない空中を伝わるように見える。だが魔法ではなく、私たちの周りに見えない形で存在するもの、電波の巧妙な利用だ。電波は空気中を伝わるエネルギーの一種で、ラジオやテレビの信号を運ぶのと同じものだ。完全に目に見えず無害で、空気や壁さえ通り抜けられる。Wi-Fiはこの波で、音楽や映像の代わりに情報を運ぶ。Wi-Fiネットワークの中心にはルーターという装置がある。ルーターはたいてい建物に入るケーブルでインターネットにつながる。その仕事は、インターネットからの情報を電波に変え、周囲の空中へ放つことだ。あなたのスマホやパソコンは自前の小さな無線機を持つ。この波を聞き取り受信し、ウェブページやメッセージなど役立つ情報に戻す。ルーターへ波を送り返しもでき、やり取りは双方向だ。壁や距離で弱まるため、強い接続にはルーターに近い必要がある。",
        quiz: [
          { q: "What does Wi-Fi use to carry information?", options: ["Radio waves travelling through the air", "Thin hidden wires", "Beams of water"], answer: 0 },
          { q: "What is the job of a router?", options: ["To turn internet information into radio waves and broadcast them", "To store all the world's websites", "To make electricity"], answer: 0 },
          { q: "Why must you be fairly close to the router?", options: ["Walls and distance can weaken the signal", "The router can only see you", "Radio waves need sunlight"], answer: 0 }
        ]
      },
      {
        id: "d1111-3",
        title: "What Is the United Nations?",
        level: "★★★",
        genre: "世界情勢",
        text: "The world is divided into nearly two hundred countries, each with its own government, language, and interests. With so many different nations sharing one planet, disagreements are certain to arise. How can the countries of the world talk to one another, solve problems, and avoid dangerous conflicts? To help with exactly this, nations created a remarkable organisation called the United Nations, often shortened to the UN.\n\nThe United Nations was founded after the Second World War, a terrible conflict that taught the world a hard lesson about the cost of war. Its central purpose is to help keep peace between countries. Almost every nation in the world is now a member.\n\nThe UN works in many ways. Its most famous feature is a great hall where representatives from every member country can meet, speak, and vote on important issues. Here, even the smallest nation has a voice. When conflicts threaten, the UN can send peacekeepers, help arrange talks, or ask countries to stop fighting.\n\nBut the UN does far more than deal with conflict. Through its many agencies, it works to improve health, feed the hungry, protect children, help refugees, guard important sites, and care for the environment. Much of the quiet good it does around the world goes unnoticed.\n\nThe UN is not a world government, and it cannot force powerful countries to obey. It depends on cooperation, and it is often criticised for being slow or weak. Yet it remains humanity's largest attempt to work together as one, a place where nations can meet and talk, instead of only fighting.",
        summaryJa: "国際連合（国連）とは何かについて。世界は二百近い国に分かれ、各国が独自の政府・言語・利害を持つ。これほど多くの国が一つの惑星を分かち合えば、対立は必ず生じる。世界の国々はどうすれば互いに話し合い、問題を解決し、危険な紛争を避けられるのか。まさにこれを助けるため、国々は国際連合、しばしば国連と略される見事な組織を作った。国連は第二次世界大戦の後に設立された。戦争の代償という厳しい教訓を世界に与えた恐ろしい紛争だ。中心的な目的は国家間の平和を保つことで、今やほぼすべての国が加盟する。国連は多様に働く。最も有名なのは、全加盟国の代表が集まり発言し重要な問題に投票できる大きな議場だ。ここでは最も小さな国にも発言権がある。紛争が脅かせば、平和維持部隊を送り、会談を整え、戦いの停止を求められる。だが国連は紛争対応にとどまらない。多くの機関を通じ、健康の増進、飢餓の救済、子どもの保護、難民の支援、重要な場所の保護、環境の保全に努める。世界政府ではなく強国を従わせる力はないが、人類が一つとして協力しようとする最大の試みだ。",
        quiz: [
          { q: "Why was the United Nations founded?", options: ["To help keep peace between countries, after the Second World War", "To rule the whole world directly", "To start new wars"], answer: 0 },
          { q: "What is the UN's most famous feature?", options: ["A hall where every member country can meet, speak, and vote", "A single large army", "A world bank only"], answer: 0 },
          { q: "What is a limitation of the UN?", options: ["It is not a world government and cannot force powerful countries to obey", "It controls every country completely", "It has no members"], answer: 0 }
        ]
      },
      {
        id: "d1111-4",
        title: "Ekiben: Japan's Railway Lunch Boxes",
        level: "★★☆",
        genre: "日本",
        text: "Travelling by train in Japan is a pleasure in itself, and part of that pleasure comes from a delicious tradition: the ekiben. The word combines eki, meaning station, and ben, short for bento, the Japanese boxed lunch. An ekiben is simply a bento sold at a railway station or on a train, but it is far more special than that plain description suggests.\n\nWhat makes ekiben so loved is their variety and local character. All over Japan, each region and even each individual station is famous for its own particular ekiben. These boxes are filled with local specialities: the seafood of a coastal town, the beef of a famous farming area, or a dish linked to that region's history. Travellers look forward to trying the special ekiben of each place they pass through.\n\nThe boxes themselves are often beautiful. The food is arranged with great care, colourful and neat, and the container may be shaped or decorated to match the local theme. Some even come in pottery pots that travellers keep as souvenirs. A few clever ekiben can even heat themselves when you pull a string.\n\nEating an ekiben while watching the landscape roll past the window is one of the small joys of Japanese travel. It turns a simple meal into part of the journey itself.\n\nFor many people, the ekiben is a delicious reminder that in Japan, even everyday things like a packed lunch can become a small work of art, and a way to taste the character of a distant place.",
        summaryJa: "日本の駅弁について。日本で列車の旅をするのはそれ自体が楽しみで、その楽しみの一部はおいしい伝統、駅弁から来る。「駅」と、弁当を略した「弁」を合わせた言葉だ。駅弁は単に駅や車内で売られる弁当だが、その素っ気ない説明よりずっと特別だ。駅弁がこれほど愛されるのは、その多様さと土地ごとの個性だ。日本中で、各地方、さらには個々の駅までが独自の駅弁で有名だ。海辺の町の海の幸、有名な産地の牛肉、その地方の歴史に結びついた料理など、土地の名物が詰まる。旅人は通る各地の特別な駅弁を試すのを楽しみにする。箱そのものも美しいことが多い。料理は丁寧に、彩りよく整えて並べられ、容器が土地の主題に合わせて形作られ飾られることもある。旅人が記念に取っておく陶器の器に入ったものさえある。紐を引くと自ら温まる巧妙な駅弁もある。車窓を流れる景色を眺めながら駅弁を食べるのは、日本の旅の小さな喜びの一つだ。単純な食事を旅そのものの一部に変える。日常の弁当さえ小さな芸術になりうると教えてくれる。",
        quiz: [
          { q: "What is an 'ekiben'?", options: ["A boxed lunch sold at a railway station or on a train", "A kind of train ticket", "A type of railway car"], answer: 0 },
          { q: "What makes ekiben so loved?", options: ["Their variety and local character, using each region's specialities", "They are all exactly the same", "They contain no food"], answer: 0 },
          { q: "What is special about some ekiben boxes?", options: ["They are beautiful, and some can even heat themselves", "They are always empty", "They cannot be opened"], answer: 0 }
        ]
      },
      {
        id: "d1111-5",
        title: "How Do Chameleons Change Color?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "The chameleon is one of nature's most famous animals, known all over the world for a single amazing ability: it can change the colour of its skin. A chameleon sitting on a brown branch may be dull and brownish, but moments later, in a different mood, it may blaze with bright green, yellow, or even blue. For a long time, people misunderstood how and why this happens.\n\nMany people believe chameleons change colour mainly to hide, matching whatever they sit on. This is partly true, but it is not the main reason. Scientists have discovered that chameleons change colour mostly to show how they feel and to communicate with other chameleons. A bright, bold display can warn off a rival or attract a mate, while darker colours may signal fear or help the animal warm up in the sun.\n\nBut how do they actually do it? The secret lies in special layers of tiny crystals inside their skin. The chameleon can slightly change the spacing of these tiny crystals by relaxing or tightening its skin. Because colour depends on how light bounces off these crystals, changing their spacing changes the colour we see. When the crystals are close together, the skin may look blue or green; when they are spread apart, it may look yellow or red.\n\nSo a chameleon is not simply copying its background like a living mirror. Instead, it is using a remarkable, built-in system of crystals and light to paint its feelings onto its own skin, one of the most beautiful tricks in the whole of nature.",
        summaryJa: "カメレオンはどうやって体の色を変えるのかについて。カメレオンは自然で最も有名な動物の一つで、ある驚くべき能力で世界中に知られる。皮膚の色を変えられるのだ。茶色い枝に座るカメレオンはくすんだ茶色でも、しばらくして気分が変われば、鮮やかな緑や黄、さらには青に輝くことがある。長い間、人々はどうやって、なぜそうなるのかを誤解していた。多くの人は、カメレオンが主に身を隠すため、座る物に合わせて色を変えると信じている。一部は正しいが、主な理由ではない。科学者は、カメレオンが主に気持ちを示し、他のカメレオンと意思疎通するために色を変えると発見した。鮮やかで大胆な見せ方は競争相手を追い払い、相手を引きつける一方、暗い色は恐れを示したり日なたで体を温めるのを助けたりする。ではどうやって行うのか。秘密は皮膚の中の小さな結晶の特別な層にある。カメレオンは皮膚を緩めたり張ったりして結晶の間隔をわずかに変えられる。色は光が結晶にどう跳ね返るかで決まるので、間隔を変えると見える色が変わる。近いと青や緑、離れると黄や赤に見える。生きた鏡のように背景を写すのではなく、結晶と光の見事な仕組みで気持ちを皮膚に描くのだ。",
        quiz: [
          { q: "What is the main reason chameleons change colour?", options: ["To show how they feel and communicate with other chameleons", "Only to match the exact background", "To become invisible completely"], answer: 0 },
          { q: "How does a chameleon change its colour?", options: ["By changing the spacing of tiny crystals in its skin", "By painting itself", "By eating colored food"], answer: 0 },
          { q: "What decides the colour we see on its skin?", options: ["How light bounces off the crystals, which depends on their spacing", "The time of day only", "The color of its food"], answer: 0 }
        ]
      }
    ]
    }
  ] };
