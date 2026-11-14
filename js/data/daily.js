/* デイリー配信リーディング
 * 毎朝の自動ルーチンがこのファイルを丸ごと上書き生成する（直近 7 日分を保持）。
 * days は日付降順。各 day = { date: "YYYY-MM-DD", passages: [readingPassages と同スキーマ + genre] }
 * このファイル以外は手書きデータであり、ルーチンは触らない。
 */
window.KE_DATA = window.KE_DATA || {};

KE_DATA.dailyReading = { days: [
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
    },
    {
    date: "2026-11-10",
    passages: [
      {
        id: "d1110-1",
        title: "What Is Cash Flow?",
        level: "★★☆",
        genre: "ビジネス",
        text: "Here is a puzzle that surprises many people: a company can be making a profit and still go out of business. How is this possible? The answer lies in one of the most important ideas in business, something as vital to a company as blood is to the body. It is called cash flow.\n\nCash flow simply means the movement of actual money into and out of a business. Money flows in when customers pay for goods or services. Money flows out when the company pays its workers, its suppliers, and its rent. For a business to survive, it must always have enough cash available at the right moment to pay what it owes.\n\nThis is different from profit. Profit is the money a company earns over time, on paper. But timing is everything. Imagine a company sells a large order and will earn a good profit, but the customer will not pay for sixty days. Meanwhile, the workers must be paid this week. On paper the company is doing well, yet right now it has no cash. If it cannot pay its staff, it is in serious trouble.\n\nThis is why businesses watch their cash flow so carefully. They must make sure that money is coming in fast enough to cover the money going out. A healthy, profitable company can be sunk by poor cash flow.\n\nSo cash flow is really about timing and survival. Profit shows whether a business is successful in the long run, but cash flow decides whether it can pay its bills today, and live to trade tomorrow.",
        summaryJa: "キャッシュフロー（資金の流れ）とは何かについて。多くの人を驚かせる謎がある。利益を出している会社が倒産することがあるのだ。どうしてか。答えは、体にとっての血液のように会社にとって極めて重要な、経営で最も大切な考えの一つにある。キャッシュフローだ。キャッシュフローとは単に、実際のお金が事業に出入りする流れのことだ。客が商品やサービスの代金を払えばお金が入り、会社が従業員・仕入先・家賃を払えばお金が出る。生き残るには、支払うべき時に常に十分な現金を持っていなければならない。これは利益とは違う。利益は会社が時間をかけて得る、帳簿上のお金だ。だが時機がすべてだ。大口の注文を売って大きな利益が出る予定でも、客の支払いが六十日後だとしよう。一方、従業員には今週払わねばならない。帳簿上は好調でも、今は現金がない。従業員に払えなければ深刻な事態だ。だから企業はキャッシュフローを注意深く見る。出るお金を賄えるほど速くお金が入るか確かめねばならない。黒字の会社でも資金繰りの悪化で沈みうる。要は時機と生存だ。",
        quiz: [
          { q: "Why can a profitable company still go out of business?", options: ["It may run out of cash to pay its bills at the right moment", "Profit is always fake", "Customers never pay anything"], answer: 0 },
          { q: "What is cash flow?", options: ["The movement of actual money into and out of a business", "The number of workers a company has", "The color of a company's money"], answer: 0 },
          { q: "Why is timing so important?", options: ["Money owed to the company may arrive after its own bills are due", "Bills never have a due date", "Timing does not matter at all"], answer: 0 }
        ]
      },
      {
        id: "d1110-2",
        title: "How Do Solar Panels Make Electricity?",
        level: "★★☆",
        genre: "テクノロジー",
        text: "On the roofs of houses, in large fields, and even on small calculators, dark blue or black panels quietly turn sunlight into electricity. They have no moving parts, make no noise, and burn no fuel. They simply sit in the sun and produce power. This almost magical process happens inside devices called solar panels, and it begins with a very special material.\n\nMost solar panels are made mainly from silicon, the same material found in ordinary sand. Silicon has a remarkable property: when light shines on it, it can knock tiny particles called electrons loose inside the material. Moving electrons are exactly what electricity is. So in a way, sunlight itself sets the electricity in motion.\n\nA solar panel is cleverly built to make these loosened electrons all flow in the same direction, rather than drifting randomly. When light hits the panel, it frees many electrons, and the design of the panel guides them to flow out through wires as a useful electric current. The brighter the sunlight, the more electricity is produced.\n\nThis electricity can then be used at once, stored in batteries for later, or sent into the wider electricity network to power other homes.\n\nSolar panels have become very important because their fuel, sunlight, is free, clean, and almost endless. They produce no smoke and no harmful gases while they work. As the world looks for cleaner ways to make energy, these silent panels, quietly turning light into power, are playing a larger and larger part in our daily lives.",
        summaryJa: "太陽光パネルはどうやって電気を作るのかについて。家の屋根や広い野原、小さな電卓の上でさえ、濃い青や黒のパネルが静かに日光を電気に変える。可動部もなく、音も立てず、燃料も燃やさない。ただ日なたにあって電力を生む。この魔法のような過程は太陽光パネルという装置の中で起こり、とても特別な材料から始まる。多くのパネルは主にシリコンでできている。ふつうの砂にも含まれる材料だ。シリコンには驚くべき性質がある。光が当たると、材料の中で電子という小さな粒を弾き出せるのだ。動く電子こそが電気そのものだ。だからある意味、日光自体が電気を動かし始める。太陽光パネルは、弾き出された電子がばらばらに漂うのでなく同じ向きに流れるよう巧みに作られている。光が当たると多くの電子が自由になり、パネルの設計がそれを電線へ有用な電流として導く。日光が強いほど多くの電気が生まれる。この電気はすぐ使うことも、電池に蓄えることも、電力網に送って他の家をまかなうこともできる。燃料の日光は無料で清潔、ほぼ無尽蔵だ。",
        quiz: [
          { q: "What material are most solar panels mainly made from?", options: ["Silicon, also found in ordinary sand", "Pure gold", "Wood"], answer: 0 },
          { q: "How does sunlight create electricity in a solar panel?", options: ["It knocks electrons loose, and moving electrons are electricity", "It heats water into steam", "It burns a small fuel"], answer: 0 },
          { q: "Why have solar panels become so important?", options: ["Their fuel, sunlight, is free, clean, and almost endless", "They are the cheapest metal", "They make loud, useful noise"], answer: 0 }
        ]
      },
      {
        id: "d1110-3",
        title: "How Do Countries Protect Endangered Animals?",
        level: "★★★",
        genre: "世界情勢",
        text: "Across the world, many kinds of animals are in danger of disappearing forever. Elephants, tigers, certain whales, and countless lesser-known creatures have become rare, their numbers falling year after year. When a species vanishes completely, it is called extinction, and it can never be undone. To prevent this loss, countries have learned that they must work together.\n\nThe reason is simple: animals do not know borders. A bird may nest in one country and spend the winter in another. A whale may swim through the waters of many nations. Fighting to save such animals makes little sense if only one country acts while its neighbours do nothing.\n\nSo nations cooperate in several ways. One of the most important is controlling trade. Many animals became endangered because people hunted them to sell their skins, horns, or other parts. Countries have signed agreements that ban or strictly limit the international trade in these threatened species, removing much of the profit from harming them.\n\nCountries also work together to protect important habitats, the forests, rivers, and seas where animals live. They may create protected parks and reserves, and share scientific knowledge about how best to help a species recover. Richer nations sometimes help poorer ones pay for this difficult work.\n\nProtecting wildlife is not easy, and sadly some battles are lost. But there have also been real successes, with certain species slowly recovering thanks to international effort. Each one is a reminder that, by working together, nations can protect the rich variety of life that all humanity shares and depends upon.",
        summaryJa: "国々はどうやって絶滅危惧種を守るのかについて。世界中で、多くの種類の動物が永遠に姿を消す危機にある。ゾウ、トラ、ある種のクジラ、数えきれぬ無名の生き物が珍しくなり、数が年々減っている。ある種が完全に消えることを絶滅といい、二度と取り返せない。この損失を防ぐため、国々は協力せねばならないと学んだ。理由は単純だ。動物は国境を知らない。鳥はある国で巣を作り別の国で冬を越す。クジラは多くの国の海を泳ぐ。一国だけが動き隣国が何もしなければ、こうした動物を救う意味は薄い。だから国々は数通りに協力する。最も重要な一つは取引の規制だ。多くの動物は、皮や角などを売るために狩られて絶滅に瀕した。各国は、こうした脅かされた種の国際取引を禁じる・厳しく制限する協定に署名し、害する利益の多くを取り除いた。生息地—動物の暮らす森・川・海—を守る協力もする。保護区を作り、種の回復を助ける科学的知識を分かち合う。豊かな国が貧しい国の費用を助けることもある。容易でなく失う戦いもあるが、国際協力で回復した種もある。共有する命の多様性を守れる証だ。",
        quiz: [
          { q: "Why must countries cooperate to protect animals?", options: ["Animals do not know borders and move between countries", "Animals only live in one city", "Cooperation is required by no one"], answer: 0 },
          { q: "What is one important way countries protect endangered species?", options: ["Banning or strictly limiting international trade in them", "Hunting them faster", "Ignoring the problem"], answer: 0 },
          { q: "What is 'extinction'?", options: ["When a species disappears completely and can never return", "When an animal moves to a new country", "A kind of protected park"], answer: 0 }
        ]
      },
      {
        id: "d1110-4",
        title: "Japan's Amazing Vending Machines",
        level: "★★☆",
        genre: "日本",
        text: "In almost every country, you can find a vending machine or two, usually selling cold drinks or snacks in a train station or an office. But in Japan, the vending machine has reached a level found nowhere else. With millions of them spread across the country, they have become a familiar and surprisingly useful part of everyday life.\n\nThe most striking thing is simply how many there are. You can find vending machines not only in stations and shops, but on quiet streets, at the tops of mountains, and in tiny villages far from anywhere. They stand outside all night, brightly lit, always ready to serve.\n\nWhat they sell can also be surprising. Of course, there are cold and even hot drinks, available at the touch of a button. But across the country, machines also sell hot meals, ice cream, fresh eggs, flowers, umbrellas for a sudden shower, and many other useful things. In a country where they are trusted and rarely damaged, they can safely offer almost anything.\n\nWhy are they so popular in Japan? Part of the reason is that Japan is a very safe country, so machines left outside are seldom broken or robbed. They also save space and labour, serving customers day and night without any staff.\n\nFor visitors, Japan's vending machines are often a delightful surprise. For the people who live there, they are simply a normal, convenient helper, standing quietly on the corner, ready at any hour to provide a warm drink, a quick meal, or a forgotten umbrella.",
        summaryJa: "日本のすごい自動販売機について。ほぼどの国にも自販機は一つ二つあり、たいてい駅や職場で冷たい飲み物や軽食を売っている。だが日本では、自販機は他のどこにもない水準に達した。全国に何百万台も広がり、日常の身近で驚くほど便利な一部になった。最も際立つのは、その数の多さだ。駅や店だけでなく、静かな通りや山の頂、どこからも遠い小さな村にも見つかる。一晩中、明るく灯り、いつでも使える状態で外に立つ。売る物も驚きだ。もちろんボタン一つで冷たい、さらには温かい飲み物も買える。だが全国で、温かい食事やアイスクリーム、新鮮な卵、花、急な雨の傘など、多くの役立つ物も売る。信頼され、めったに壊されない国だからこそ、ほぼ何でも安全に提供できる。なぜ日本でこれほど人気なのか。一因は日本がとても安全な国で、外に置かれた機械がめったに壊されも盗まれもしないことだ。場所と人手を省き、店員なしで昼も夜も客に応じる。訪問者には楽しい驚きで、住む人には普通の便利な助っ人だ。",
        quiz: [
          { q: "What is most striking about vending machines in Japan?", options: ["How many there are, even in remote places", "That there are only a few", "That they sell nothing"], answer: 0 },
          { q: "What is one surprising thing Japanese machines may sell?", options: ["Hot meals, fresh eggs, flowers, or umbrellas", "Live animals", "Cars"], answer: 0 },
          { q: "Why are vending machines so successful in Japan?", options: ["Japan is very safe, so machines are seldom broken or robbed", "They are guarded by many staff", "They are only open one hour a day"], answer: 0 }
        ]
      },
      {
        id: "d1110-5",
        title: "Why Do We Yawn?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "It happens to everyone. You are tired, or bored, or you have just woken up, and suddenly your mouth opens wide, you take a long, deep breath, and you yawn. Even reading about yawning may make you want to do it. Yawning is one of the most common things humans do, yet, surprisingly, scientists are still not completely sure why we do it.\n\nFor a long time, people believed that yawning was caused by a lack of oxygen. The idea was that when we are tired, we breathe too shallowly, so a big yawn pulls in extra air. However, careful experiments have cast doubt on this simple explanation, and today many scientists think the main reason may be different.\n\nOne popular modern idea is that yawning helps to cool the brain. The brain works best within a narrow temperature range, and a large yawn pulls in cool air and increases blood flow, which may help lower the brain's temperature a little. This might explain why we often yawn when we are tired, as a tired brain can become slightly warmer.\n\nThere is also the strange fact of contagious yawning. When we see another person yawn, or even just think about it, we often yawn too. Scientists believe this may be linked to the way humans understand and copy each other's feelings.\n\nSo yawning remains a small, everyday mystery. It is something we all do many times a day, yet its full purpose is still not perfectly understood, a quiet reminder that even ordinary things can hide deep questions.",
        summaryJa: "なぜあくびをするのかについて。誰にでも起こる。疲れたり退屈したり、起きたばかりのとき、突然口が大きく開き、長く深く息を吸い、あくびをする。あくびについて読むだけでしたくなるかもしれない。あくびは人間の最もありふれた動作の一つだが、意外にも科学者はなぜするのかまだ完全には分かっていない。長い間、あくびは酸素不足で起こると信じられた。疲れると呼吸が浅くなり、大きなあくびで余分な空気を取り込むという考えだ。だが入念な実験がこの単純な説明に疑問を投げかけ、今日多くの科学者は主な理由は別かもしれないと考える。現代の有力な一説は、あくびが脳を冷やすのを助けるというものだ。脳は狭い温度範囲で最もよく働き、大きなあくびは冷たい空気を取り込み血流を増やし、脳の温度を少し下げるのを助けるかもしれない。疲れた脳はやや暖かくなりうるので、疲れるとよくあくびが出るのを説明できるかもしれない。「うつる」あくびという不思議もある。人のあくびを見たり考えたりするだけで自分も出る。人が互いの感情を理解し真似る仕方と結びつくと考えられる。あくびは日常の小さな謎だ。",
        quiz: [
          { q: "What did people long believe caused yawning?", options: ["A lack of oxygen", "Too much sunlight", "Eating too much"], answer: 0 },
          { q: "What is one popular modern idea about why we yawn?", options: ["It may help cool the brain", "It makes us taller", "It cleans the teeth"], answer: 0 },
          { q: "What is 'contagious' yawning?", options: ["We often yawn when we see or think about someone else yawning", "Yawning that makes you ill", "Yawning only done while asleep"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-11-09",
    passages: [
      {
        id: "d1109-1",
        title: "What Is a Trademark?",
        level: "★★☆",
        genre: "ビジネス",
        text: "Think of a famous company. Almost at once, a picture probably comes into your mind: a special symbol, a particular name written in a certain style, or a well-known logo. These signs are incredibly valuable to a business, because they instantly tell customers who made a product. To protect them, the law provides something called a trademark.\n\nA trademark is a sign that identifies the goods or services of one particular company and separates them from all others. It can be a brand name, a logo, a symbol, or even a special shape or sound. When a company registers a trademark, the law gives it the exclusive right to use that sign for its products.\n\nWhy does this matter so much? Imagine if any company could put a famous brand's name and logo on its own goods. Customers would be tricked into buying poor copies, thinking they were the real thing. The trademark prevents this. It protects the customer, who can trust that a product with a certain mark really comes from the company they expect.\n\nIt also protects the business. A company may spend many years, and a great deal of effort, building a good reputation. Its trademark captures all of that trust and quality in a single, recognisable sign. If others could freely copy it, that hard-earned reputation could be damaged or stolen.\n\nSo a trademark is more than just a logo. It is a promise and a protection, linking a product to the company that stands behind it, and helping honest businesses and careful customers trust one another.",
        summaryJa: "商標（トレードマーク）とは何かについて。有名な企業を思い浮かべてみよう。ほぼ瞬時に、ある像が頭に浮かぶはずだ。特別な記号、独特の書体で書かれた名前、よく知られたロゴなど。これらの印は企業にとって極めて価値が高い。誰がその製品を作ったかを客に即座に伝えるからだ。これを守るため、法律は商標というものを備えている。商標は、ある特定の企業の商品やサービスを示し、他のすべてと区別する印だ。ブランド名、ロゴ、記号、さらには特別な形や音でもよい。企業が商標を登録すると、法律はその印を自社製品に使う独占的権利を与える。なぜそれほど重要なのか。もしどの会社も有名ブランドの名前やロゴを自社の品に付けられたら、客は本物と思って粗悪な模倣品を買わされてしまう。商標はこれを防ぐ。ある印の付いた製品が、期待する企業から確かに来ると信頼できる。企業も守られる。長年と多大な努力で築いた評判を、商標が一つの識別可能な印に凝縮する。自由に真似されれば、その評判は損なわれかねない。商標は約束であり保護だ。",
        quiz: [
          { q: "What is a trademark?", options: ["A sign that identifies one company's goods and separates them from others", "A tax on products", "A kind of factory"], answer: 0 },
          { q: "How does a trademark protect customers?", options: ["They can trust that a marked product really comes from the expected company", "It makes all products cheaper", "It hides the maker's name"], answer: 0 },
          { q: "Why is a trademark valuable to a business?", options: ["It captures the trust and reputation the company has built, in one sign", "It lets the company copy rivals", "It replaces the need to make good products"], answer: 0 }
        ]
      },
      {
        id: "d1109-2",
        title: "How Does a Microphone Work?",
        level: "★★☆",
        genre: "テクノロジー",
        text: "Every time a singer performs on stage, or you make a call on your phone, a small device is quietly doing something remarkable. It is taking sound, which you cannot see or touch, and turning it into electricity that can be sent, recorded, or made louder. This device is the microphone, and understanding it begins with understanding what sound really is.\n\nSound is a kind of movement in the air. When you speak, your voice makes the air around you vibrate, pushing it back and forth in tiny, fast waves. These invisible waves spread out and travel to your listener's ears, and also to any microphone nearby.\n\nInside a microphone is a thin, flexible part called a diaphragm, rather like a tiny drum skin. When the sound waves in the air hit this diaphragm, they push and pull it, making it vibrate exactly in step with the sound. A loud sound moves it a lot; a quiet sound moves it a little.\n\nThe clever part is turning this movement into electricity. The vibrating diaphragm is connected to parts that respond to its motion. As the diaphragm moves back and forth, it causes a matching electric signal to flow, growing stronger and weaker in perfect time with the original sound.\n\nIn this way, the shape of the sound is copied into the shape of an electric current. That electric signal can then travel down a wire, be stored on a device, or be fed into a loudspeaker to be heard again. A microphone, in short, is a clever translator, turning the language of sound into the language of electricity.",
        summaryJa: "マイク（マイクロフォン）の仕組みについて。歌手が舞台で歌うたび、あるいは電話をかけるたび、小さな装置が静かに驚くべきことをしている。見えも触れもしない音を取り込み、送ったり録音したり大きくしたりできる電気に変えるのだ。これがマイクで、理解は音とは本当は何かを知ることから始まる。音は空気の動きの一種だ。話すと声が周りの空気を振動させ、小さく速い波として前後に押す。この見えない波が広がり、聞き手の耳や近くのマイクへ届く。マイクの中には振動板という薄くしなやかな部分があり、小さな太鼓の皮のようだ。空気中の音波がこの振動板に当たると、押したり引いたりして、音とぴったり合わせて振動させる。大きな音は大きく、小さな音は小さく動かす。巧妙なのはこの動きを電気に変えることだ。振動板はその動きに反応する部品につながっている。前後に動くと、元の音と完全に合った電気信号が流れ、強弱を繰り返す。こうして音の形が電流の形に写される。その信号は電線を通り、機器に保存され、スピーカーで再び聞ける。マイクは音の言葉を電気の言葉に訳す賢い翻訳者だ。",
        quiz: [
          { q: "What is sound, according to the passage?", options: ["A kind of movement, or vibration, in the air", "A type of light", "A chemical in the air"], answer: 0 },
          { q: "What does the diaphragm in a microphone do?", options: ["It vibrates in step with the sound waves that hit it", "It glows when sound arrives", "It stays perfectly still"], answer: 0 },
          { q: "What does a microphone basically do?", options: ["It turns the shape of sound into a matching electric signal", "It makes sound disappear", "It turns electricity into light"], answer: 0 }
        ]
      },
      {
        id: "d1109-3",
        title: "How Do Countries Agree on Common Standards?",
        level: "★★★",
        genre: "世界情勢",
        text: "Imagine travelling to another country and finding that your phone charger does not fit the wall sockets, that the screws in the shops do not match your tools, and that even the paper is a strange size. Daily life would become difficult and wasteful. To prevent exactly this kind of confusion, countries quietly work together to agree on common standards.\n\nA standard is simply an agreed way of doing or measuring something, so that products and systems from different places can work together. Standards cover an enormous range of things: the size of a shipping container, the strength of a bicycle helmet, the meaning of symbols on clothing labels, and the rules that let computers around the world talk to each other.\n\nMuch of this work is done by international organisations where experts from many countries meet. They discuss, test, and finally agree on a shared rule. The agreement is usually voluntary, yet countries and companies choose to follow it, because doing so makes trade and daily life far smoother.\n\nThe benefits are huge, even if we rarely notice them. Because of shared standards, a container packed in one country fits the ships, trains, and trucks of every other. A safety rule agreed in one place can protect people everywhere. And new technologies can spread quickly across borders.\n\nStandards are a quiet form of international cooperation. They rarely make the news, and most people never think about them. Yet every day, this patient agreement between nations allows the modern world to fit together, piece by piece, almost without us noticing.",
        summaryJa: "国々はどうやって共通の標準（規格）に合意するのかについて。別の国へ旅して、スマホの充電器が壁のコンセントに合わず、店のねじが自分の工具に合わず、紙さえ変な大きさだったと想像してみよう。日常は難しく無駄の多いものになる。まさにこうした混乱を防ぐため、国々は静かに協力して共通の標準に合意する。標準とは、物事を行う・測る合意された方法に過ぎず、異なる場所の製品や仕組みが一緒に機能できるようにする。標準は実に幅広い。輸送用コンテナの寸法、自転車用ヘルメットの強度、衣類ラベルの記号の意味、世界中のコンピューターが通信できる規則などだ。この仕事の多くは、多国の専門家が集まる国際機関で行われる。議論し、試験し、最終的に共有の規則に合意する。合意はたいてい任意だが、国や企業は従うことを選ぶ。そうすれば貿易も日常もずっと滑らかになるからだ。恩恵は巨大だが、めったに気づかれない。共有の標準のおかげで、一国で詰めたコンテナがどの国の船・列車・トラックにも合う。一か所で合意された安全規則が各地の人を守り、新技術が国境を越えて素早く広まる。静かな国際協力の形だ。",
        quiz: [
          { q: "What is a 'standard'?", options: ["An agreed way of doing or measuring something, so systems can work together", "A kind of tax", "A national flag"], answer: 0 },
          { q: "How are international standards usually agreed?", options: ["Experts from many countries meet, test, and agree on a shared rule", "One country forces all others to obey", "They happen by accident"], answer: 0 },
          { q: "What is one benefit of shared standards?", options: ["A container packed in one country fits the ships and trucks of others", "Travel becomes impossible", "Products stop working together"], answer: 0 }
        ]
      },
      {
        id: "d1109-4",
        title: "Kaki: The Persimmon, a Taste of Japanese Autumn",
        level: "★★☆",
        genre: "日本",
        text: "As autumn deepens in Japan and the leaves turn red and gold, another splash of colour appears in the countryside. In gardens and on hillsides, the bare branches of certain trees become covered with round, bright orange fruit. This is the kaki, or persimmon, one of the most beloved fruits of the Japanese autumn.\n\nThe persimmon has been grown in Japan for many centuries, and it holds a special place in the season. Its warm orange colour, glowing against a blue autumn sky, is a classic image of the time of year. A tree heavy with fruit after its leaves have fallen is a common and much-loved sight.\n\nThere are two main kinds of kaki. One is sweet and can be eaten crisp and fresh, straight from the tree. The other is naturally bitter when raw, and cannot be enjoyed that way. For this second kind, people use a clever traditional method. They peel the fruit and hang it up to dry in the autumn air for several weeks. Slowly, the bitterness disappears, and the fruit becomes soft, chewy, and intensely sweet. This dried persimmon is called hoshigaki, and it is treasured as a natural sweet.\n\nNothing is wasted. Even the leaves and the drying fruit become part of the beauty of the season.\n\nFor many Japanese people, the sight and taste of kaki bring back memories of autumn, of family gardens, and of grandparents carefully preparing hoshigaki. It is a simple fruit, yet it carries the warm, gentle feeling of the Japanese autumn.",
        summaryJa: "日本の秋の味、柿について。日本で秋が深まり木の葉が赤や金に色づくころ、田園にもう一つの彩りが現れる。庭や丘の斜面で、ある木の裸の枝が丸く鮮やかなオレンジ色の実で覆われる。これが柿、日本の秋で最も愛される果物の一つだ。柿は何世紀も日本で育てられ、季節の中で特別な位置を占める。青い秋空に映える温かいオレンジ色は、この時期の古典的な情景だ。葉が落ちた後に実をたわわに付けた木は、よく見られる愛される光景だ。柿には主に二種類ある。一つは甘く、木からもいでそのまま新鮮に食べられる。もう一つは生だと自然に渋く、そのままでは楽しめない。この渋い方には、巧妙な伝統の方法を使う。皮をむいて秋の空気の中に数週間つるして干すのだ。ゆっくり渋みが消え、柔らかく歯ごたえのある、強く甘い実になる。この干した柿を干し柿といい、自然の甘味として大切にされる。多くの日本人にとって、柿の姿と味は秋や家族の庭、祖父母の思い出を呼び起こす。簡素な果物だが、日本の秋の温かく穏やかな気持ちを運ぶ。",
        quiz: [
          { q: "When do persimmons become a common sight in Japan?", options: ["In autumn, as bright orange fruit on the trees", "In the middle of summer", "Only in spring"], answer: 0 },
          { q: "What do people do with the naturally bitter kind of kaki?", options: ["Peel it and hang it to dry, which removes the bitterness", "Throw it away at once", "Eat it raw with salt"], answer: 0 },
          { q: "What is 'hoshigaki'?", options: ["Dried persimmon, soft and intensely sweet", "A kind of autumn leaf", "A persimmon drink"], answer: 0 }
        ]
      },
      {
        id: "d1109-5",
        title: "Why Do We Hiccup?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "They arrive without warning, often at the worst moment. You are eating, laughing, or talking, when suddenly your body makes a sharp, funny sound: hic! A moment later, it happens again, and again, with a rhythm you cannot control. These are hiccups, one of the strangest and most harmless things the human body does. But what actually causes them?\n\nThe answer involves an important muscle you rarely think about, called the diaphragm. It sits under your lungs, and it is the main muscle you use for breathing. Normally, it moves smoothly up and down, pulling air gently into your lungs and letting it out again.\n\nA hiccup begins when this diaphragm muscle suddenly twitches, or jumps, instead of moving smoothly. This sudden jump makes you pull in a quick, sharp breath of air without meaning to. But at almost exactly the same instant, a small flap at the top of your throat snaps shut. The rushing air hits this closed flap, and that is what makes the sharp hic sound we all know.\n\nSo a single hiccup is really two things happening together: a sudden jump of the breathing muscle, and the quick closing of the throat.\n\nWhat causes the diaphragm to twitch in the first place is not always clear. Eating too fast, drinking fizzy drinks, or sudden excitement can all set it off. Usually, hiccups are completely harmless and stop on their own within a few minutes. They remain one of the body's small, funny mysteries, a little reminder of the complex machinery quietly working inside us all.",
        summaryJa: "なぜしゃっくりが出るのかについて。しゃっくりは前触れなく、しばしば最悪のときに訪れる。食事や笑い、会話の最中、突然体が「ヒック！」という鋭い妙な音を立てる。少しするとまた、何度も、自分では止められないリズムで繰り返す。これがしゃっくりで、人体のする最も奇妙で無害なことの一つだ。だが実際、何が原因なのか。答えには、めったに意識しない大切な筋肉、横隔膜が関わる。肺の下にあり、呼吸に使う主な筋肉だ。普段は滑らかに上下し、空気を優しく肺に取り込み、また出す。しゃっくりは、この横隔膜が滑らかに動く代わりに突然ぴくりと跳ねると始まる。この急な跳ねで、意図せず素早く鋭く息を吸い込む。だがほぼ同じ瞬間、喉の上部にある小さな弁がパッと閉じる。勢いよく入る空気がこの閉じた弁に当たり、あの「ヒック」という音になる。つまり一回のしゃっくりは、呼吸筋の急な跳ねと喉の素早い閉鎖という二つが同時に起こることだ。横隔膜がなぜ跳ねるかは必ずしも明らかでない。早食いや炭酸飲料、突然の興奮が引き金になりうる。たいてい無害で数分で自然に止まる。",
        quiz: [
          { q: "Which muscle is involved in hiccups?", options: ["The diaphragm, the main muscle used for breathing", "A muscle in the foot", "A muscle in the hand"], answer: 0 },
          { q: "What two things happen together in a single hiccup?", options: ["A sudden jump of the breathing muscle and the quick closing of the throat", "A sneeze and a cough", "Blinking and swallowing"], answer: 0 },
          { q: "What can set off hiccups?", options: ["Eating too fast, fizzy drinks, or sudden excitement", "Sleeping deeply", "Sitting very still"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-11-08",
    passages: [
      {
        id: "d1108-1",
        title: "What Is Interest?",
        level: "★★☆",
        genre: "ビジネス",
        text: "Suppose you lend a friend some money, and a year later they pay you back exactly the same amount. You have gained nothing, even though your friend used your money for a whole year. In the world of finance, money almost never works this way. When money is borrowed or saved, a little extra is usually added over time. This extra money is called interest.\n\nInterest can be understood simply as the cost of using someone else's money, or the reward for lending yours. It is usually described as a percentage of the amount, charged each year. For example, if you borrow 100 and the interest rate is five percent, after one year you owe 105.\n\nInterest works in two directions, and this is important to understand. When you put money into a savings account at a bank, the bank is really borrowing your money. In return, it pays you interest, so your savings slowly grow. But when you borrow money, for a car or a house, you must pay interest to the lender, so you pay back more than you borrowed.\n\nThere is also a powerful effect called compound interest. This happens when you earn interest not only on your original money, but also on the interest you have already earned. Over many years, this can make savings grow surprisingly large.\n\nUnderstanding interest is one of the most useful money skills a person can have. It quietly shapes saving, borrowing, and the price of almost everything bought over time, affecting nearly every financial choice we make.",
        summaryJa: "利子・金利とは何かについて。友人にお金を貸し、一年後にちょうど同じ額を返してもらったとしよう。友人は一年間あなたのお金を使ったのに、あなたは何も得ていない。金融の世界では、お金はほぼこうは働かない。お金が借りられたり預けられたりすると、時とともに普通は少し上乗せされる。この上乗せ分を利子（金利）という。利子は、他人のお金を使う費用、または自分のお金を貸す報酬と単純に理解できる。たいてい金額に対する割合として年ごとに示される。例えば100を借りて金利が5%なら、一年後には105を返すことになる。利子は二方向に働く点が重要だ。銀行の預金口座にお金を入れると、実は銀行があなたのお金を借りている。見返りに利子を払い、貯金が少しずつ増える。だが車や家のためにお金を借りると、貸し手に利子を払い、借りた以上を返す。複利という強力な効果もある。元のお金だけでなく、既に得た利子にも利子がつくことだ。長年で貯金は驚くほど大きく育つ。利子の理解は最も役立つお金の技能の一つだ。",
        quiz: [
          { q: "What is interest?", options: ["The cost of using someone else's money, or the reward for lending yours", "A kind of tax on food", "A type of bank building"], answer: 0 },
          { q: "What happens when you put money in a savings account?", options: ["The bank borrows it and pays you interest, so your savings grow", "You must pay the bank extra each year", "Your money disappears"], answer: 0 },
          { q: "What is compound interest?", options: ["Earning interest on your original money and on the interest already earned", "Interest that never changes", "A fee for closing an account"], answer: 0 }
        ]
      },
      {
        id: "d1108-2",
        title: "How Does a Camera Take a Photo?",
        level: "★★☆",
        genre: "テクノロジー",
        text: "A photograph can freeze a single moment forever: a smile, a sunset, a crowded street. We take thousands of pictures with our phones without a second thought. But behind every photo lies a clever process, one that cameras share with our own eyes. At its heart, a camera is simply a device for catching light.\n\nLight is the key to everything. When you look at an object, light bounces off it and travels in all directions. A camera's job is to collect some of that light and record the pattern it makes. To do this well, every camera has a lens.\n\nThe lens is a specially shaped piece of glass or plastic that bends the incoming light. As the scattered light passes through the lens, it is bent so that the rays come together neatly and form a sharp, clear image inside the camera. This is called focusing, and it is the same thing the lens in your eye does.\n\nIn the past, this focused image fell onto a piece of film coated with chemicals that reacted to light. In modern digital cameras, it falls instead onto an electronic sensor. This sensor is covered with millions of tiny light-detectors. Each one measures how much light and what colour hits it, and turns that into numbers.\n\nThe camera then combines all these millions of measurements into a single picture, made of tiny coloured dots. This is your photograph, stored as data.\n\nSo every photo is really a careful recording of light, captured through a lens and frozen in an instant, ready to be looked at again and again.",
        summaryJa: "カメラはどうやって写真を撮るのかについて。写真は一瞬を永遠に凍らせる。笑顔、夕日、混んだ通り。私たちは何気なくスマホで何千枚も撮る。だがどの写真の裏にも巧妙な過程があり、それは私たち自身の目と共通する。カメラは要するに光を捕らえる装置だ。光がすべての鍵だ。物を見ると、光が物に当たって跳ね返り四方へ進む。カメラの仕事は、その光の一部を集め、作る模様を記録することだ。そのため、どのカメラにもレンズがある。レンズは特別な形のガラスかプラスチックで、入ってくる光を曲げる。散らばった光がレンズを通ると曲げられ、光線がきれいに集まってカメラ内に鮮明な像を結ぶ。これを焦点合わせといい、目のレンズがするのと同じだ。昔はこの像が光に反応する薬品を塗ったフィルムに落ちた。現代のデジタルカメラでは電子センサーに落ちる。センサーは何百万もの小さな光検出器で覆われ、各々が当たる光の量と色を測り数値に変える。カメラはこの数百万の測定を一枚の絵にまとめる。写真は光の記録だ。",
        quiz: [
          { q: "What does a camera basically do?", options: ["It catches light and records the pattern it makes", "It creates light from nothing", "It measures sound"], answer: 0 },
          { q: "What does the lens do?", options: ["It bends the light so the rays form a sharp, clear image", "It colors the photo by hand", "It stores the picture"], answer: 0 },
          { q: "What does a digital camera's sensor do?", options: ["Millions of tiny detectors measure the light and color and turn it into numbers", "It paints the image with ink", "It plays the sound of the scene"], answer: 0 }
        ]
      },
      {
        id: "d1108-3",
        title: "What Does the World Health Organization Do?",
        level: "★★★",
        genre: "世界情勢",
        text: "Diseases do not respect borders. A sickness that begins in one country can, in our connected world, spread to others within days. No single nation can protect itself completely on its own. For this reason, the countries of the world created a special organisation to work together on health: the World Health Organization, often shortened to WHO.\n\nThe WHO is part of the United Nations, and almost every country in the world is a member. Its basic goal is simple but enormous: to help all people everywhere reach the best possible health. To do this, it works in many different ways.\n\nOne of its most important jobs is watching for dangerous diseases. The WHO acts like a global lookout, collecting information from around the world. If a serious illness begins to spread, it can warn other countries quickly and help coordinate a response. It also leads huge campaigns to fight specific diseases, such as efforts to vaccinate children everywhere.\n\nThe WHO does much quieter work too. It gathers health information, sets common standards, and gives scientific advice that countries can trust. It helps poorer nations build hospitals, train nurses and doctors, and provide clean water and medicine.\n\nLike any large organisation, the WHO is not perfect, and it depends on the cooperation and funding of its members. But its basic idea is a hopeful one. It reflects a simple truth that the world slowly learned: that protecting the health of people in distant lands also helps protect the health of everyone, including ourselves.",
        summaryJa: "世界保健機関（WHO）は何をするのかについて。病気は国境を尊重しない。一国で始まった病が、つながった世界では数日で他国へ広がりうる。一国だけで完全に身を守れる国はない。だから世界の国々は、健康のために協力する特別な組織を作った。世界保健機関、しばしばWHOと略される。WHOは国連の一部で、ほぼすべての国が加盟する。基本目標は単純だが壮大だ。あらゆる地のすべての人が可能な限り最良の健康に達するのを助けることだ。そのため多様な方法で働く。最も重要な仕事の一つは危険な病気への警戒だ。WHOは世界の見張りのように情報を集める。深刻な病が広がり始めれば他国に素早く警告し、対応の調整を助ける。子どもへの予防接種など、特定の病気と闘う大規模な取り組みも率いる。もっと地味な仕事もする。健康情報を集め、共通の基準を定め、信頼できる科学的助言を与える。貧しい国の病院建設や看護師・医師の育成、清潔な水と薬の提供も助ける。完璧ではなく加盟国の協力と資金に頼るが、希望ある考えだ。",
        quiz: [
          { q: "Why did countries create the WHO?", options: ["Because diseases cross borders and no nation can protect itself alone", "To control world trade", "To run a single hospital"], answer: 0 },
          { q: "What is one of the WHO's most important jobs?", options: ["Watching for dangerous diseases and warning other countries", "Selling medicine for profit", "Building airports"], answer: 0 },
          { q: "What quieter work does the WHO do?", options: ["Setting health standards and helping poorer nations train doctors", "Making films", "Designing cars"], answer: 0 }
        ]
      },
      {
        id: "d1108-4",
        title: "Onsen: Japan's Hot Spring Culture",
        level: "★★☆",
        genre: "日本",
        text: "Japan sits on a chain of volcanoes, and deep underground, the earth heats vast amounts of water. In many places, this naturally hot water rises to the surface, creating a hot spring. In Japanese, a hot spring is called an onsen, and bathing in one is one of the country's most loved and relaxing traditions.\n\nAn onsen is far more than a simple hot bath. The water is rich in natural minerals, and for centuries people have believed it to be good for health, easing tired muscles and warming the body. Surrounded by beautiful mountains or quiet forests, soaking in an onsen is a deeply peaceful experience, especially in winter, when snow may fall gently around the steaming water.\n\nThere are important customs to follow. Before entering the shared bath, bathers must wash their bodies carefully and completely, so the water stays clean for everyone. People then enter the bath with no clothing at all, which is simply normal and natural at an onsen. The bath is a place for quiet rest, not for swimming or noise.\n\nOnsen come in many forms. Some are indoors, while others, called rotenburo, are outdoors, offering lovely views of nature. Many are part of traditional inns where guests stay overnight.\n\nFor many Japanese people, visiting an onsen is a cherished way to escape the stress of busy life. It combines the gifts of nature, a long cultural tradition, and simple physical comfort into one quiet, steaming pool of warm water.",
        summaryJa: "日本の温泉文化について。日本は火山の連なりの上にあり、地下深くで大地が大量の水を温める。多くの場所でこの自然に熱い水が地表へ湧き出し、温泉ができる。日本語で温泉といい、そこに入ることは国で最も愛される癒やしの伝統の一つだ。温泉は単なる熱い風呂をはるかに超える。水は天然のミネラルに富み、何世紀も健康に良いと信じられ、疲れた筋肉をほぐし体を温める。美しい山や静かな森に囲まれて湯につかるのは深く穏やかな体験で、特に冬、湯気の立つ湯の周りに雪がそっと降る時はなおさらだ。守るべき大切な作法がある。共同の湯に入る前に体を丁寧に完全に洗い、皆のために湯を清潔に保つ。そして一切衣服を着けずに入るが、温泉ではごく普通で自然なことだ。湯は静かに休む場で、泳いだり騒いだりする場ではない。温泉には多くの形がある。屋内のものもあれば、露天風呂という屋外のものもあり、自然の眺めを楽しめる。宿泊する伝統的な旅館の一部も多い。忙しい生活の緊張から逃れる大切な方法だ。",
        quiz: [
          { q: "Where does the hot water of an onsen come from?", options: ["The earth heats underground water, which rises to the surface", "It is boiled in large kettles", "It comes from the sea"], answer: 0 },
          { q: "What must bathers do before entering the shared bath?", options: ["Wash their bodies carefully so the water stays clean", "Jump straight in with their clothes on", "Add soap to the bath"], answer: 0 },
          { q: "What is a 'rotenburo'?", options: ["An outdoor onsen with views of nature", "A kind of indoor swimming pool", "A type of towel"], answer: 0 }
        ]
      },
      {
        id: "d1108-5",
        title: "Why Do We Shiver When We Are Cold?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "On a cold winter morning, waiting outside for a bus, you may suddenly feel your body begin to tremble. Your teeth chatter, and your arms and legs shake, all by themselves. You did not choose to do this. This is shivering, and although it feels unpleasant, it is actually your body cleverly trying to protect you.\n\nThe human body works best at a fairly steady warm temperature, around thirty-seven degrees. If the body becomes too cold, it cannot work properly, and this can become dangerous. So the body is always carefully watching its own temperature, and it will act quickly to stay warm.\n\nWhen sensors in your skin tell the brain that it is getting cold, the brain sends out a clever command to your muscles. It orders them to tighten and relax very fast, again and again, many times each second. This rapid shaking of the muscles is exactly what we feel as shivering.\n\nBut why does this make heat? The answer is that moving muscles always produce heat as they work. It is the same reason you feel hot after running or exercising. By making the muscles move quickly without you even trying, shivering turns energy into warmth, helping to raise the body's temperature back toward a safe level.\n\nSo shivering is not a weakness or a fault. It is an automatic, built-in heater, switched on by the brain without you having to think about it. It is one of the many quiet, clever ways your body works constantly to keep you alive and well.",
        summaryJa: "寒いとなぜ身震いするのかについて。寒い冬の朝、バスを外で待っていると、突然体が震え出すのを感じるかもしれない。歯がカチカチ鳴り、腕や脚がひとりでに震える。自分で選んだわけではない。これが身震い（シバリング）で、不快に感じるが、実は体が巧妙にあなたを守ろうとしているのだ。人体はおよそ三十七度のかなり一定した温かい体温で最もよく働く。体が冷えすぎるとうまく働けず、危険になりうる。だから体は常に自分の体温を注意深く見守り、温かさを保とうと素早く動く。皮膚のセンサーが寒くなってきたと脳に伝えると、脳は筋肉に巧妙な指令を送る。毎秒何度も、速く緊張と弛緩を繰り返せと命じる。この筋肉の素早い震えこそ、私たちが身震いとして感じるものだ。ではなぜ熱が出るのか。動く筋肉は働く時いつも熱を生むからだ。走ったり運動したりすると暑くなるのと同じ理由だ。身震いは筋肉を素早く動かしてエネルギーを熱に変え、体温を安全な水準へ戻す。弱さや欠陥でなく、脳が入れる自動の内蔵ヒーターなのだ。",
        quiz: [
          { q: "Why is shivering actually helpful?", options: ["It is the body's way of trying to make heat and stay warm", "It cools the body down", "It has no purpose"], answer: 0 },
          { q: "What does the brain order the muscles to do?", options: ["Tighten and relax very fast, again and again", "Stop moving completely", "Grow larger"], answer: 0 },
          { q: "Why does moving the muscles make heat?", options: ["Moving muscles always produce heat as they work", "Muscles contain tiny fires", "Heat comes from the skin's color"], answer: 0 }
        ]
      }
    ]
    }
  ] };
