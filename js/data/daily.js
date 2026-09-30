/* デイリー配信リーディング
 * 毎朝の自動ルーチンがこのファイルを丸ごと上書き生成する（直近 7 日分を保持）。
 * days は日付降順。各 day = { date: "YYYY-MM-DD", passages: [readingPassages と同スキーマ + genre] }
 * このファイル以外は手書きデータであり、ルーチンは触らない。
 */
window.KE_DATA = window.KE_DATA || {};

KE_DATA.dailyReading = { days: [
    {
    date: "2026-09-30",
    passages: [
      {
        id: "d0930-1",
        title: "Why a Business Needs a Plan",
        level: "★★☆",
        genre: "ビジネス",
        text: "Starting a business can feel exciting and full of possibility. Someone has a great idea and wants to begin right away. But experienced people know that one quiet step can make the difference between success and failure: writing a business plan.\n\nA business plan is a written document that describes what a business will do and how. It explains the product or service, who the customers are, how the company will make money, and what it will cost to get started. In short, it turns a dream into a clear plan of action.\n\nWhy is this so useful? First, writing a plan forces you to think carefully. On paper, weak ideas and hidden costs become visible before you spend real money. A plan can reveal problems early, while they are still easy to fix.\n\nSecond, a plan helps you explain your idea to others. Banks, investors, and partners usually want to see a solid plan before they give money or support. A clear plan shows that you are serious and have thought things through.\n\nThird, a plan acts like a map. As the business grows, the owner can look back at the plan to check whether things are going as expected, and adjust when needed.\n\nOf course, no plan is perfect, and real life brings surprises. A good plan is not a set of chains, but a guide that can change as you learn. Still, starting without one is like setting off on a long journey with no map at all.",
        summaryJa: "事業を始めるのはわくわくして可能性に満ちて感じられる。素晴らしい着想を持ち、すぐ始めたい。だが経験ある人は、成功と失敗を分けうる一つの静かな段階を知っている。事業計画を書くことだ。事業計画は、事業が何をどうするかを述べた書面だ。製品やサービス、顧客は誰か、会社がどう稼ぐか、始めるのにいくらかかるかを説明する。要するに、夢を明確な行動計画に変える。なぜ有用か。第一に、計画を書くと慎重に考えざるをえない。紙の上では、弱い着想や隠れた費用が、実際にお金を使う前に見える。計画は問題を早く、まだ直しやすいうちに明らかにできる。第二に、計画は着想を他者に説明する助けになる。銀行や投資家、提携先はふつう、お金や支援を与える前にしっかりした計画を見たがる。明確な計画は、あなたが本気でよく考えたと示す。第三に、計画は地図のように働く。事業が育つにつれ、所有者は計画を振り返り、予定通りか確認し、必要なら調整できる。もちろん完璧な計画はなく、現実は驚きをもたらす。良い計画は鎖でなく、学びとともに変えられる案内だ。だが計画なしに始めるのは、地図なしで長い旅に出るようなものだ。",
        quiz: [
          { q: "What is a business plan?", options: ["A written document describing what a business will do and how", "A type of bank", "A finished product"], answer: 0 },
          { q: "How does writing a plan help before you spend money?", options: ["It makes weak ideas and hidden costs visible early, while they are easy to fix", "It guarantees instant success", "It hides all problems"], answer: 0 },
          { q: "How is a good plan described?", options: ["Not a set of chains, but a guide that can change as you learn", "A rule that can never change", "A useless piece of paper"], answer: 0 }
        ]
      },
      {
        id: "d0930-2",
        title: "Robots Exploring Mars",
        level: "★★★",
        genre: "テクノロジー",
        text: "Millions of kilometers from Earth, on the cold, red surface of Mars, small robots are slowly rolling across the ground. These machines, called rovers, are sent by scientists to explore a world where no human has ever set foot. Through them, we are getting our first close look at another planet.\n\nWhy send robots instead of people? Mars is a harsh and distant place. The journey takes many months, the air is unbreathable, and the cold is deadly. Sending humans would be enormously expensive and dangerous. A robot, however, can travel there, work for years, and never need food, air, or a way home.\n\nA Mars rover is like a scientist on wheels. It carries cameras to take photographs, tools to study rocks and soil, and instruments to test the air. It looks for clues about the planet's past — especially signs that water, and perhaps even tiny life, once existed there.\n\nControlling a rover is a slow and careful task. Because Mars is so far away, a radio command from Earth takes many minutes to arrive. Scientists cannot drive the rover second by second; instead, they send careful instructions and wait to see the results.\n\nThese brave little robots have already lasted far longer than expected, sending home stunning pictures and important discoveries. They are the eyes and hands of humanity on a distant world — proof that even when we cannot go somewhere ourselves, our curiosity can still reach across the stars.",
        summaryJa: "地球から何百万キロも離れた火星の冷たく赤い地表を、小さなロボットがゆっくり転がって進んでいる。ローバーと呼ばれるこの機械は、人がまだ足を踏み入れたことのない世界を探るために科学者が送ったものだ。ローバーを通じ、私たちは初めて別の惑星を間近に見ている。なぜ人でなくロボットを送るのか。火星は過酷で遠い場所だ。旅は何か月もかかり、空気は吸えず、寒さは致命的だ。人を送るのは莫大に高価で危険だ。だがロボットはそこへ行き、何年も働き、食料も空気も帰る手段も要らない。火星ローバーは車輪の付いた科学者のようだ。写真を撮るカメラ、岩や土を調べる道具、空気を試す装置を積む。惑星の過去の手がかり——特にかつて水が、もしかすると小さな生命さえ存在した証を探す。ローバーの操縦は遅く慎重な作業だ。火星はとても遠いので、地球からの無線指令は届くのに何分もかかる。科学者は一秒ごとに運転できず、慎重な指示を送り結果を待つ。この勇敢な小さなロボットは、予想よりはるかに長く持ち、見事な写真と重要な発見を送ってきた。遠い世界での人類の目と手であり、自分で行けなくても好奇心は星々を越えて届く証だ。",
        quiz: [
          { q: "Why do scientists send robots to Mars instead of people?", options: ["Mars is harsh, distant, and dangerous, and robots need no food, air, or way home", "Because robots enjoy travel", "Because people are not curious"], answer: 0 },
          { q: "What is a Mars rover like?", options: ["A scientist on wheels, with cameras and tools to study rocks, soil, and air", "A simple toy", "A rocket only"], answer: 0 },
          { q: "Why is controlling a rover slow?", options: ["A radio command from Earth takes many minutes to reach faraway Mars", "Because the rover is asleep", "Because Earth is closer than the moon"], answer: 0 }
        ]
      },
      {
        id: "d0930-3",
        title: "The Rivers That Cross Borders",
        level: "★★★",
        genre: "世界情勢",
        text: "Rivers do not care about the lines humans draw on maps. A great river may begin high in the mountains of one country, flow through a second, and reach the sea in a third. Many of the world's most important rivers are shared by several nations. This simple fact of nature has made rivers one of the great tests of cooperation between countries.\n\nA shared river is a shared blessing. Its water grows crops, provides drinking water, powers electricity, and carries boats and goods. For the people who live along it, the river is life itself. But because the water is shared, what one country does affects its neighbors. If an upstream nation takes too much water or builds a large dam, the countries downstream may receive too little.\n\nThis can cause tension. Yet more often, it has pushed nations to work together. Countries that share a river frequently sign agreements about how to divide the water fairly, how to keep it clean, and how to warn each other of floods. In many places, old rivals have found that they must cooperate over water, whether they like each other or not.\n\nCaring for shared rivers grows more important every year, as populations rise and the climate changes.\n\nA river crossing borders is a powerful reminder that nature connects us. The water flowing past one village today may reach a distant land tomorrow. To manage it well, neighbors must talk, share, and think of one another — as the river itself joins them together.",
        summaryJa: "川は人が地図に引く線を気にしない。大きな川はある国の高い山で始まり、二つ目の国を流れ、三つ目で海に達しうる。世界の最も重要な川の多くは複数の国に共有される。この自然の単純な事実が、川を国家間協力の大きな試金石の一つにした。共有する川は共有の恵みだ。その水は作物を育て、飲み水を供給し、電気を生み、船と荷を運ぶ。川沿いに住む人々にとって、川は命そのものだ。だが水が共有されるため、一国のすることが隣国に影響する。上流の国が水を取りすぎたり大きなダムを造ったりすると、下流の国は水が少なすぎるかもしれない。これは緊張を生みうる。だがより多くの場合、国々を協力へ押しやってきた。川を共有する国は、水を公正に分ける方法、清潔に保つ方法、互いに洪水を知らせる方法について協定を結ぶことが多い。多くの場所で、古いライバルが、好むと好まざるとにかかわらず水で協力せねばならないと気づいた。共有する川の世話は、人口が増え気候が変わるにつれ、年々重要になる。国境を越える川は、自然が私たちをつなぐ力強い証だ。今日ある村を流れる水が明日遠い地に届きうる。うまく管理するには、隣人は話し、分かち合い、互いを思わねばならない。川そのものが彼らを結びつけるように。",
        quiz: [
          { q: "Why are many important rivers a test of cooperation?", options: ["They are shared by several nations, so one country's actions affect its neighbors", "Because rivers follow map lines exactly", "Because no one uses rivers"], answer: 0 },
          { q: "What can happen if an upstream nation takes too much water?", options: ["Countries downstream may receive too little", "Nothing changes for anyone", "The river flows backward"], answer: 0 },
          { q: "How have shared rivers often pushed nations?", options: ["To work together, signing agreements to divide water fairly and keep it clean", "To stop all farming", "To ignore each other completely"], answer: 0 }
        ]
      },
      {
        id: "d0930-4",
        title: "Kabuki: Japan's Dramatic Theater",
        level: "★★☆",
        genre: "日本",
        text: "Imagine a stage bursting with color: actors in magnificent costumes, faces painted in bold red and white, striking dramatic poses as music and shouts fill the air. This is kabuki, one of Japan's most famous traditional forms of theater, loved for its beauty, drama, and energy for over four hundred years.\n\nKabuki plays tell stories of love, honor, heroes, and history. Everything about them is larger than life. The costumes are grand, the makeup is striking, and the actors move in a powerful, exaggerated style. At key moments, an actor may freeze in a dramatic pose, crossing his eyes, while the audience cheers. The stage itself is full of clever tricks, including revolving floors and secret passages.\n\nOne surprising fact is that in traditional kabuki, all the roles, including the women, are played by men. Certain actors train for many years to play female parts with great grace, and these performers are highly respected.\n\nKabuki is also a family art. Famous acting families pass their skills and stage names down through the generations, so a great actor today may be the son and grandson of great actors before him.\n\nThough it is centuries old, kabuki is still performed and enjoyed in Japan today, by both older fans and curious newcomers. It is a living link to the past — a loud, colorful, thrilling window into the stories and spirit of old Japan, kept proudly alive on the modern stage.",
        summaryJa: "色にあふれる舞台を想像してほしい。壮麗な衣装の役者、赤と白で大胆に塗られた顔、音楽と掛け声が満ちる中での劇的な見得。これが歌舞伎、日本で最も有名な伝統演劇の一つで、その美しさ、劇性、活力ゆえに400年以上愛されてきた。歌舞伎の演目は、愛や名誉、英雄、歴史の物語を語る。すべてが実物以上に大きい。衣装は壮大、化粧は鮮烈、役者は力強く誇張された様式で動く。要所で役者は目を寄せて劇的な見得で静止し、観客は喝采する。舞台自体も、回る床や秘密の通路など巧みな仕掛けに満ちる。意外な事実は、伝統的な歌舞伎ではすべての役、女性役も含めて男が演じることだ。特定の役者は何年も修行して優雅に女性役を演じ、この演者は大いに尊敬される。歌舞伎は一族の芸でもある。有名な役者一族が技と芸名を世代を超えて受け継ぐので、今日の名優は名優の息子であり孫かもしれない。何世紀も古いが、歌舞伎は今日も日本で上演され、年配のファンにも好奇心旺盛な新参者にも楽しまれる。過去への生きたつながり——古い日本の物語と精神への、騒がしく色鮮やかでわくわくする窓であり、現代の舞台で誇り高く生かされている。",
        quiz: [
          { q: "What kind of theater is kabuki?", options: ["A traditional Japanese theater known for color, drama, and energy", "A silent, plain form of theater", "A type of sport"], answer: 0 },
          { q: "What is a surprising fact about traditional kabuki?", options: ["All the roles, including women, are played by men", "There are no actors", "It has no costumes"], answer: 0 },
          { q: "How is kabuki a 'family art'?", options: ["Famous acting families pass their skills and stage names down through generations", "Only strangers may perform it", "It changes owners every day"], answer: 0 }
        ]
      },
      {
        id: "d0930-5",
        title: "Bats: Masters of the Night",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "As the sun sets and most animals settle down to sleep, another world comes alive. Out of caves, trees, and quiet corners fly the bats, some of the most remarkable creatures on Earth. Bats are the only mammals that can truly fly, and they rule the night sky in ways that still amaze scientists.\n\nThe most famous of a bat's skills is how it finds its way in the dark. Many bats use a trick called echolocation. As they fly, they send out high squeaks, far too high for humans to hear. These sounds bounce off objects and return as echoes. By listening to the echoes, a bat can build a picture of the world around it, sensing walls, insects, and prey in complete darkness.\n\nBats are also very useful to us. Many kinds eat huge numbers of insects each night, including pests that harm crops. Others drink nectar and, like bees, carry pollen from flower to flower, helping plants grow. Some fruit bats spread seeds across the forest.\n\nSadly, bats are often feared or misunderstood. In truth, the vast majority are shy, gentle, and harmless to people, quietly doing important work while we sleep.\n\nRecent studies even suggest that bats may hold secrets about long life and fighting disease, and scientists are eager to learn from them.\n\nSo the next time you see a bat flit across the evening sky, do not be afraid. You are watching a true master of the night at work.",
        summaryJa: "日が沈み、多くの動物が眠りにつくと、別の世界が息づき始める。洞窟や木、静かな片隅からコウモリが飛び立つ。地球で最も注目すべき生き物の一つだ。コウモリは真に飛べる唯一の哺乳類で、科学者を今も驚かせる仕方で夜空を支配する。コウモリの技で最も有名なのは、暗闇で道を見つける方法だ。多くのコウモリは反響定位(エコーロケーション)という技を使う。飛びながら、人には高すぎて聞こえない高い鳴き声を出す。この音が物に跳ね返り、こだまとして戻る。こだまを聞くことで、コウモリは周りの世界の像を作り、完全な暗闇で壁や昆虫、獲物を感じ取る。コウモリは私たちにとても役立ちもする。多くの種は毎晩膨大な数の昆虫、作物を害する害虫を食べる。花の蜜を飲み、ハチのように花から花へ花粉を運び植物の成長を助けるものもいる。果実を食べるコウモリは森中に種を広げる。悲しいことに、コウモリはしばしば恐れられ誤解される。実は大多数は臆病で優しく、人に無害で、私たちが眠る間に静かに大切な仕事をしている。最近の研究は、コウモリが長寿や病気との闘いの秘密を握るかもしれないと示唆し、科学者は学びたがっている。次に夕空をコウモリがよぎるのを見ても、恐れないでほしい。真の夜の達人が働くのを見ているのだ。",
        quiz: [
          { q: "What is special about bats among mammals?", options: ["They are the only mammals that can truly fly", "They cannot move at all", "They only live in water"], answer: 0 },
          { q: "How does echolocation work?", options: ["A bat sends out high squeaks and listens to the echoes to sense the world", "A bat uses a flashlight", "A bat reads a map"], answer: 0 },
          { q: "Why are bats useful to us?", options: ["They eat pest insects, spread pollen and seeds, and help plants grow", "They harm all crops", "They do nothing helpful"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-09-29",
    passages: [
      {
        id: "d0929-1",
        title: "Why Making More Can Cost Less",
        level: "★★★",
        genre: "ビジネス",
        text: "Here is a puzzle from the world of business: often, the more of something a company makes, the cheaper each item becomes to produce. Making a million cups can cost far less per cup than making a hundred. This idea is called \"economies of scale,\" and it shapes much of the modern economy.\n\nWhy does this happen? Some costs do not grow when you make more. A company must design a product, build a factory, and buy machines whether it makes ten items or ten thousand. When those large, fixed costs are spread across many products, the cost of each single item drops.\n\nBuying in bulk helps too. A company that buys huge amounts of materials can often get a lower price. Large machines and smooth systems can also work faster and waste less.\n\nEconomies of scale explain why big companies can sometimes sell things so cheaply, and why it can be hard for a small newcomer to compete on price alone.\n\nBut bigger is not always better. If a company grows too large, it can become slow and hard to manage. Communication breaks down, and decisions take longer. Beyond a certain point, size can start to add costs instead of cutting them.\n\nWise businesses look for the right size for what they do. Understanding economies of scale helps explain a great deal about how our world of goods and prices really works — and why the giant factory and the tiny workshop both still exist.",
        summaryJa: "ビジネスの世界の謎がある。しばしば、会社が何かを多く作るほど、一つあたりの製造費は安くなる。カップを百万個作る方が、百個作るより一個あたりずっと安くつきうる。この考えを「規模の経済」といい、現代経済の多くを形づくる。なぜ起きるのか。多く作っても増えない費用がある。会社は製品を設計し、工場を建て、機械を買わねばならない。十個作ろうと一万個作ろうとだ。この大きな固定費が多くの製品に分散されると、一個あたりの費用は下がる。大量購入も役立つ。材料を大量に買う会社はしばしば安い価格を得られる。大きな機械や滑らかな仕組みも、より速く働き無駄が少ない。規模の経済は、なぜ大企業が時に物をとても安く売れるか、なぜ小さな新参者が価格だけで競うのが難しいかを説明する。だが大きいほど良いとは限らない。会社が大きくなりすぎると、遅く管理しにくくなりうる。意思疎通が崩れ、決定に時間がかかる。ある点を超えると、規模は費用を削るどころか加え始めうる。賢い企業は自分のすることに合う適切な規模を探す。規模の経済を理解すると、物と価格の世界が実際どう働くか、そしてなぜ巨大工場と小さな工房の両方がなお存在するかがよく分かる。",
        quiz: [
          { q: "What are 'economies of scale'?", options: ["Making more of something often lowers the cost of each item", "Making more always costs more per item", "A type of weighing machine"], answer: 0 },
          { q: "Why does making more lower the cost per item?", options: ["Large fixed costs are spread across many products, and bulk buying is cheaper", "Because machines get more expensive", "Because materials cost more in bulk"], answer: 0 },
          { q: "Why is bigger not always better?", options: ["A company that grows too large can become slow and hard to manage", "Large companies never have problems", "Size always cuts costs forever"], answer: 0 }
        ]
      },
      {
        id: "d0929-2",
        title: "How Airplanes Stay in the Sky",
        level: "★★★",
        genre: "テクノロジー",
        text: "It can seem impossible that a machine weighing hundreds of tons can lift into the air and stay there. Yet every day, thousands of airplanes fly safely around the world. The secret is not magic, but a careful use of air, shape, and speed.\n\nThe key is the wing. If you look closely, an airplane wing has a special shape: rounded and curved on top, flatter underneath. As the plane rushes forward, air flows over and under the wing. Because of the wing's shape, the air moving over the top travels a little faster than the air below. This difference creates lower pressure above the wing and higher pressure below it. The higher pressure underneath pushes the wing — and the whole plane — upward. This upward push is called lift.\n\nTo create enough lift, the plane must move very fast. That is the job of the engines, which push the aircraft forward with great power. Speed plus the wing's clever shape equals flight.\n\nPilots control the plane using movable parts on the wings and tail. By adjusting these, they can climb, turn, and descend smoothly and safely.\n\nFlight is one of humanity's greatest achievements. For most of history, people could only dream of joining the birds. Now, thanks to a deep understanding of air and motion, we cross oceans in hours. The next time you see a plane overhead, remember the quiet science holding it up.",
        summaryJa: "数百トンの機械が空に上がり、そこに留まれるとは不可能に見えるかもしれない。だが毎日、何千もの飛行機が世界中を安全に飛ぶ。秘密は魔法でなく、空気と形と速さの入念な利用だ。鍵は翼だ。よく見ると飛行機の翼は特別な形をしている。上は丸く湾曲し、下は平らだ。機体が前へ突き進むと、空気が翼の上と下を流れる。翼の形のため、上を通る空気は下より少し速く進む。この差が翼の上に低い気圧、下に高い気圧を生む。下の高い気圧が翼——そして機体全体——を上へ押す。この上向きの押しを揚力という。十分な揚力を生むには、機体はとても速く動かねばならない。それがエンジンの仕事で、大きな力で機を前へ押す。速さと翼の巧みな形が合わさって飛行になる。パイロットは翼や尾の動く部分で機を操る。これを調整して、滑らかに安全に上昇し、旋回し、降下できる。飛行は人類最大の達成の一つだ。歴史の大半、人は鳥に加わることを夢見るだけだった。今、空気と運動の深い理解のおかげで、私たちは数時間で海を渡る。次に頭上の飛行機を見たら、それを支える静かな科学を思い出してほしい。",
        quiz: [
          { q: "What is the key part that lets a plane fly?", options: ["The wing, with its special curved shape", "The seats", "The windows"], answer: 0 },
          { q: "How does the wing create 'lift'?", options: ["Air moves faster over the top, making lower pressure above and higher below, pushing up", "By flapping like a bird", "By being very heavy"], answer: 0 },
          { q: "Why must a plane move very fast?", options: ["To create enough lift, which is the job of the engines", "To use more fuel for fun", "So the wings can rest"], answer: 0 }
        ]
      },
      {
        id: "d0929-3",
        title: "Money Around the World",
        level: "★★☆",
        genre: "世界情勢",
        text: "Travel from one country to another, and you will quickly notice something: the money changes. One nation uses dollars, another uses yen, another uses euros. Almost every country has its own kind of money, called its currency. Why does the world not simply use one single money for everyone?\n\nThe answer is tied to how countries run their own economies. A nation's currency is a tool its government and central bank use to manage prices, jobs, and growth. By controlling their own money, countries can respond to their own needs, which would be much harder if everyone shared one currency.\n\nBecause there are many currencies, we need a way to trade one for another. This is done through \"exchange rates,\" which say how much of one currency you get for another. These rates change all the time, rising and falling based on trade, interest rates, and confidence in each economy.\n\nExchange rates matter to everyone, not just travelers. When a country's money becomes weaker, its exports can become cheaper for foreigners to buy, which may help its businesses. But imported goods become more expensive at home. A stronger currency does the opposite.\n\nSome groups of countries have chosen to share a single currency to make trade easier among them, though this brings both benefits and challenges.\n\nSo the world's many currencies are more than just different coins and notes. They are tools that let each country steer its own economy, all connected in a vast, ever-shifting global market.",
        summaryJa: "ある国から別の国へ旅すると、すぐに気づくことがある。お金が変わるのだ。ある国はドル、別は円、また別はユーロを使う。ほぼどの国にも独自のお金、通貨がある。なぜ世界は皆で一つのお金を使わないのか。答えは各国が自国の経済をどう運営するかに結びつく。国の通貨は、政府と中央銀行が物価や雇用、成長を管理するために使う道具だ。自国のお金を制御することで、国は自らの必要に応えられる。皆が一つの通貨を共有すればずっと難しくなる。多くの通貨があるので、一つを別のものに換える方法が要る。これは「為替レート」で行われ、ある通貨で別の通貨をどれだけ得られるかを示す。このレートは絶えず変わり、貿易や金利、各経済への信頼によって上下する。為替レートは旅行者だけでなく皆に関わる。国のお金が弱くなると、輸出は外国人に安く買え、その事業を助けうる。だが輸入品は国内で高くなる。強い通貨は逆だ。貿易を互いに容易にするため単一通貨を共有することを選んだ国の集まりもあるが、利点と課題の両方をもたらす。世界の多くの通貨は、単なる異なる硬貨や紙幣以上のものだ。各国が自国の経済を操る道具であり、広大で絶えず動く世界市場ですべてつながっている。",
        quiz: [
          { q: "Why does almost every country have its own currency?", options: ["A currency is a tool to manage its own prices, jobs, and growth", "Because coins look nicer that way", "For no reason at all"], answer: 0 },
          { q: "What are 'exchange rates'?", options: ["How much of one currency you get for another", "The number of banks in a country", "A type of tax"], answer: 0 },
          { q: "What can happen when a country's money becomes weaker?", options: ["Its exports can become cheaper for foreigners, but imports cost more at home", "Nothing changes at all", "All prices become fixed forever"], answer: 0 }
        ]
      },
      {
        id: "d0929-4",
        title: "The Way of the Samurai",
        level: "★★☆",
        genre: "日本",
        text: "For hundreds of years, Japan was shaped by a class of warriors known as the samurai. Skilled with the sword and loyal to their lords, they were the fighters of old Japan. But the samurai were more than soldiers. They followed a code of honor and behavior that still influences Japanese culture today.\n\nThis code is often called \"bushido,\" meaning \"the way of the warrior.\" It valued qualities such as courage, honesty, self-control, and above all, loyalty. A samurai was expected to be brave in battle but also calm, polite, and fair in daily life. Many samurai studied not only fighting, but also poetry, calligraphy, and the tea ceremony, believing that a true warrior should have a rich and disciplined mind.\n\nLoyalty was central. A samurai served a lord and was expected to be faithful, even in hard times. Honor mattered more than personal comfort or safety. To lose one's honor was considered worse than to lose one's life.\n\nThe age of the samurai ended long ago, as Japan changed and modernized. Yet their spirit did not vanish. The values of discipline, respect, loyalty, and doing one's duty with dignity can still be seen in Japanese schools, companies, and sports today.\n\nThe samurai remind us that real strength is not only about power. It is also about character — being honest, self-controlled, and faithful to what one believes is right, in good times and bad.",
        summaryJa: "何百年もの間、日本は侍と呼ばれる武士の階級によって形づくられた。刀に長け主君に忠実な、古い日本の戦士だった。だが侍は兵士以上の存在だった。今日の日本文化になお影響する、名誉と行動の規範に従った。この規範はしばしば「武士道」——武士の道——と呼ばれる。勇気、正直、自制、そして何より忠誠といった資質を重んじた。侍は戦で勇敢であると同時に、日常では穏やかで礼儀正しく公正であることが期待された。多くの侍は戦いだけでなく詩や書道、茶道も学び、真の武士は豊かで規律ある心を持つべきだと信じた。忠誠が中心だった。侍は主君に仕え、困難な時でも忠実であることが期待された。名誉は個人の快適さや安全より重要だった。名誉を失うことは命を失うより悪いとされた。侍の時代は、日本が変わり近代化するとともにとうに終わった。だがその精神は消えなかった。規律、敬意、忠誠、威厳をもって務めを果たすという価値は、今日の日本の学校や企業、スポーツにもなお見られる。侍は、真の強さは力だけの話ではないと思い出させる。それは人格の話でもある——良い時も悪い時も、正直で自制し、正しいと信じるものに忠実であることだ。",
        quiz: [
          { q: "What is 'bushido'?", options: ["The samurai code of honor, meaning 'the way of the warrior'", "A type of sword", "A Japanese food"], answer: 0 },
          { q: "What qualities did the samurai code value?", options: ["Courage, honesty, self-control, and loyalty", "Laziness and dishonesty", "Only fighting skill"], answer: 0 },
          { q: "What do the samurai remind us about real strength?", options: ["It is also about character — being honest, self-controlled, and faithful to what is right", "It is only about power", "It does not matter at all"], answer: 0 }
        ]
      },
      {
        id: "d0929-5",
        title: "Why the Moon Changes Shape",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "Look up at the night sky over several weeks, and you will see the moon change. Some nights it is a full, bright circle. Other nights it is a thin curve, or gone altogether. These changing shapes are called the phases of the moon. But the moon is not really changing shape at all — so what is happening?\n\nThe secret is light and position. The moon does not make its own light. Like a mirror, it shines only because the sun's light falls on it. The sun always lights up one half of the moon, the half facing it. But as the moon travels around the Earth, we on the ground see that lit half from different angles.\n\nWhen the moon is on the far side of the Earth from the sun, we see its whole lit face, and it looks like a full circle. When the moon is between the Earth and the sun, its dark side faces us, and we can barely see it at all. In between, we see only part of the lit half, which gives us the curved shapes.\n\nThis cycle repeats about once a month, which is where the very idea of a \"month\" comes from.\n\nSo the changing moon is a kind of shadow play in space, performed by the sun, the Earth, and the moon together. Nothing about the moon itself changes. We are simply watching sunlight from a moving point of view.",
        summaryJa: "数週間、夜空を見上げると、月が変わるのが見える。ある夜は満ちた明るい円。別の夜は細い曲線、あるいは全く見えない。この変わる形を月の満ち欠け(相)という。だが月は本当は形を変えていない——では何が起きているのか。秘密は光と位置だ。月は自ら光を作らない。鏡のように、太陽の光が当たるから輝くだけだ。太陽は常に月の半分、太陽に面した半分を照らす。だが月が地球の周りを巡るにつれ、地上の私たちはその照らされた半分を異なる角度から見る。月が太陽から見て地球の反対側にあるとき、私たちはその照らされた面全体を見て、満ちた円に見える。月が地球と太陽の間にあるとき、その暗い側が私たちに面し、ほとんど見えない。その間、私たちは照らされた半分の一部だけを見て、曲がった形になる。この周期はおよそひと月に一度繰り返し、そこから「月(month)」という考えそのものが来ている。だから変わる月は、太陽と地球と月が共に演じる宇宙の影絵のようなものだ。月そのものは何も変わらない。私たちはただ、動く視点から太陽の光を見ているのだ。",
        quiz: [
          { q: "Does the moon really change shape?", options: ["No — we see its lit half from different angles as it orbits the Earth", "Yes, it grows and shrinks", "Yes, it melts"], answer: 0 },
          { q: "Why does the moon shine?", options: ["Like a mirror, the sun's light falls on it; it makes no light of its own", "It burns like a fire", "It has a light bulb inside"], answer: 0 },
          { q: "Where does the idea of a 'month' come from?", options: ["The cycle of the moon's phases, which repeats about once a month", "The number of days in a week", "The seasons only"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-09-28",
    passages: [
      {
        id: "d0928-1",
        title: "Why Companies Invest in Research",
        level: "★★★",
        genre: "ビジネス",
        text: "Every product we use, from a phone to a medicine to a snack, once began as an idea that had to be developed and tested. This work is called research and development, often shortened to R&D. Many successful companies spend a large amount of money on it, even though it may not bring any profit for years. Why do they take this risk?\n\nThe main reason is the future. The products that make a company money today will not sell forever. Customers' needs change, and rivals catch up. A company that stops improving will slowly fall behind. By investing in research, a business creates the new products and better methods it will need to survive tomorrow.\n\nR&D can take many forms. Some companies run laboratories where scientists explore new ideas. Others test and improve their products, or study how customers behave. A little of this work leads to a big breakthrough; much of it quietly makes existing products a bit better.\n\nThe difficulty is that research is uncertain. Money is spent long before any reward appears, and many experiments fail. A company must be patient and willing to lose some bets in order to win a few big ones.\n\nYet history shows that the boldest inventions — new medicines, faster computers, cleaner energy — usually came from someone willing to invest in ideas that did not yet pay. In business, research is a bet on tomorrow, and it is often the wisest bet of all.",
        summaryJa: "電話から薬、お菓子まで、私たちが使うあらゆる製品は、かつて開発され試験されねばならない一つの発想として始まった。この仕事を研究開発、しばしばR&Dと略す。多くの成功した企業は、何年も利益をもたらさないかもしれないのに、これに大金を使う。なぜこの危険を冒すのか。主な理由は未来だ。今日会社にお金をもたらす製品も永遠には売れない。客のニーズは変わり、競合が追いつく。改善をやめた会社はゆっくり遅れをとる。研究に投資することで、企業は明日生き延びるのに必要な新製品やより良い手法を生む。R&Dは多くの形をとる。科学者が新しい発想を探る研究所を持つ会社もある。製品を試し改良したり、客の行動を研究したりする会社もある。この仕事の一部は大きな飛躍につながり、多くは既存の製品を静かに少し良くする。難しいのは研究が不確実なことだ。報いが現れるずっと前にお金が使われ、多くの実験は失敗する。会社は忍耐強く、いくつかの大きな勝ちを得るため、いくつかの賭けに負ける覚悟が要る。だが歴史は、最も大胆な発明——新薬、速いコンピューター、清潔なエネルギー——がたいてい、まだ報われない発想に投資する人から生まれたと示す。ビジネスで研究は明日への賭けで、しばしば最も賢い賭けだ。",
        quiz: [
          { q: "What is 'R&D'?", options: ["Research and development — the work of creating and testing new ideas and products", "A type of shop", "A way to fire workers"], answer: 0 },
          { q: "Why do companies invest in research despite the risk?", options: ["Today's products won't sell forever, so they need new ones to survive tomorrow", "Because research always makes instant money", "To avoid ever changing"], answer: 0 },
          { q: "What makes research difficult?", options: ["It is uncertain: money is spent long before any reward, and many experiments fail", "It is always cheap and easy", "It never fails"], answer: 0 }
        ]
      },
      {
        id: "d0928-2",
        title: "How a Microwave Cooks Your Food",
        level: "★★★",
        genre: "テクノロジー",
        text: "A microwave oven can heat a bowl of soup in a minute, without any flame and without getting very hot itself. To many people this seems almost magical. But the microwave works on a clever and simple piece of science, hidden inside its metal box.\n\nInside the oven is a device that produces invisible waves of energy, called microwaves. These are a kind of wave, similar in family to radio waves and light, but tuned to a special length. When you turn the oven on, these waves fill the cooking space and pass into the food.\n\nHere is the key. Microwaves are very good at shaking the tiny water particles found in almost all food. As the waves pass through, they make these water particles vibrate back and forth very quickly. This fast movement creates heat, and so the food warms up from the inside out, cooked by its own jiggling water.\n\nThis explains some things you may have noticed. Very dry foods heat slowly, because they have little water to shake. And the metal walls of the oven bounce the waves back inside, which is also why you should never put metal objects in a microwave.\n\nThe microwave oven is a wonderful example of turning science into everyday convenience. A hidden wave, a little water, and a few seconds — and a cold meal becomes a warm one, all thanks to a clever understanding of how energy moves.",
        summaryJa: "電子レンジは、炎もなく、それ自体はあまり熱くならずに、一分でスープの器を温められる。多くの人にはほとんど魔法に見える。だが電子レンジは、金属の箱の中に隠れた巧みで単純な科学で働く。オーブンの中には、マイクロ波と呼ばれる目に見えないエネルギーの波を作る装置がある。これは電波や光と同じ仲間の波の一種だが、特別な長さに調整されている。オーブンをつけると、この波が調理空間を満たし食べ物の中に入る。ここが鍵だ。マイクロ波は、ほぼすべての食べ物にある小さな水の粒子を揺らすのがとても得意だ。波が通り抜けると、この水の粒子を素早く前後に振動させる。この速い動きが熱を生み、食べ物は内側から温まる。自らの揺れる水で調理されるのだ。これは気づいたことのいくつかを説明する。とても乾いた食べ物は、揺らす水が少ないので温まりが遅い。そしてオーブンの金属の壁は波を中へ跳ね返す。だから電子レンジに金属を入れてはいけない。電子レンジは科学を日常の便利さに変える見事な例だ。隠れた波、少しの水、数秒——そして冷たい食事が温かくなる。エネルギーがどう動くかの巧みな理解のおかげだ。",
        quiz: [
          { q: "What does a microwave oven make to cook food?", options: ["Invisible waves of energy called microwaves", "A hidden flame", "Hot water only"], answer: 0 },
          { q: "How do microwaves heat the food?", options: ["They make the water particles in food vibrate quickly, which creates heat", "They paint the food", "They freeze the food first"], answer: 0 },
          { q: "Why do very dry foods heat slowly in a microwave?", options: ["They have little water to shake", "They are too big", "They reflect all the waves"], answer: 0 }
        ]
      },
      {
        id: "d0928-3",
        title: "The Roads and Bridges That Connect Us",
        level: "★★☆",
        genre: "世界情勢",
        text: "Every day, we use roads, bridges, railways, ports, water pipes, and power lines without much thought. Together, these are called infrastructure — the basic structures that a society needs to function. Though we rarely notice it when it works, infrastructure quietly shapes the life of every country on Earth.\n\nGood infrastructure brings enormous benefits. A road lets farmers carry crops to market. A bridge connects a village to a hospital. Clean water pipes keep people healthy, and electric lines power schools and businesses. When these systems work well, life becomes easier, safer, and more prosperous. A country with strong infrastructure can grow and trade with the world.\n\nBuilding and maintaining infrastructure is a huge and costly task. Roads crack, bridges age, and pipes wear out. Governments must plan carefully and spend wisely, often over many years. Poorer countries may struggle to afford the systems they need, while richer ones must keep repairing what they already have.\n\nAround the world, nations sometimes work together on large projects, sharing money and knowledge. Building a railway or a power line can connect not just towns, but whole countries.\n\nInfrastructure is easy to take for granted, precisely because it usually works. But the next time you cross a bridge or turn on a tap, remember the vast, hidden network beneath modern life. Quietly, it holds our societies together and carries us into the future.",
        summaryJa: "毎日、私たちはあまり考えずに道路や橋、鉄道、港、水道管、電線を使う。合わせてこれらをインフラ——社会が機能するために必要な基本的な構造——という。うまく働いているときはめったに気づかないが、インフラは地球のあらゆる国の暮らしを静かに形づくる。良いインフラは莫大な恩恵をもたらす。道路は農家が作物を市場へ運ぶのを可能にする。橋は村を病院につなぐ。清潔な水道管は人々を健康に保ち、電線は学校や事業に電力を供給する。これらがうまく働くと、暮らしはより楽に、安全に、豊かになる。強いインフラを持つ国は成長し世界と貿易できる。インフラの建設と維持は巨大で費用のかかる仕事だ。道路はひび割れ、橋は老い、管はすり減る。政府は慎重に計画し賢く支出せねばならず、しばしば何年もかけて。貧しい国は必要な仕組みを賄うのに苦労し、豊かな国はすでに持つものを直し続けねばならない。世界中で、国々は大きな事業で協力し、お金と知識を分かち合うことがある。鉄道や電線の建設は、町だけでなく国全体をつなぎうる。インフラは、たいていうまく働くからこそ当たり前に思われやすい。だが次に橋を渡り蛇口をひねるとき、現代生活の下の広大な隠れた網を思い出してほしい。静かに、それは社会を一つに保ち、私たちを未来へ運ぶ。",
        quiz: [
          { q: "What is 'infrastructure'?", options: ["The basic structures a society needs, like roads, bridges, water pipes, and power lines", "A type of food", "A kind of money"], answer: 0 },
          { q: "What is one benefit of good infrastructure?", options: ["Roads let farmers reach markets, and bridges connect villages to hospitals", "It makes life harder", "It has no effect on trade"], answer: 0 },
          { q: "Why is infrastructure easy to take for granted?", options: ["Precisely because it usually works quietly", "Because it never exists", "Because it is always broken"], answer: 0 }
        ]
      },
      {
        id: "d0928-4",
        title: "Sushi: A Japanese Art of Food",
        level: "★★☆",
        genre: "日本",
        text: "When people around the world think of Japanese food, one dish often comes to mind first: sushi. Though many imagine it as simply raw fish, sushi is something more precise and more beautiful. At its heart, sushi is a dish built on specially prepared rice, seasoned with a little vinegar, and topped or filled with fresh ingredients.\n\nThere are many kinds of sushi. Some are small mounds of rice with a slice of fish on top; others are rolls wrapped in dark seaweed and cut into rounds. The toppings can be fish, but also egg, vegetables, or shellfish. Not all sushi contains raw fish at all.\n\nMaking good sushi is treated as a serious craft. A master sushi chef may train for many years, learning to cook the rice perfectly, choose the freshest fish, and shape each piece by hand with just the right pressure. The goal is a balance of flavor, texture, and beauty in a single bite.\n\nSushi is also enjoyed in many settings. It can be a special, expensive meal at a fine restaurant, or a quick, cheap treat from a shop where plates travel past on a moving belt.\n\nToday, sushi is loved all over the world, and each country adds its own twist. Yet at its core, it remains a symbol of Japanese cooking: simple, fresh ingredients, prepared with great care, and served with respect for both the food and the person eating it.",
        summaryJa: "世界中の人が日本の食べ物を思うとき、まず一つの料理が浮かぶことが多い。寿司だ。多くの人は単なる生の魚と想像するが、寿司はもっと精緻で美しいものだ。核心において寿司は、少しの酢で味付けした特別に用意した米の上に、あるいは中に、新鮮な材料を組み合わせた料理だ。寿司には多くの種類がある。米の小さな山に魚の切り身をのせたものもあれば、黒い海苔で巻いて輪切りにしたものもある。具は魚のこともあれば、卵や野菜、貝のこともある。すべての寿司が生の魚を含むわけではない。良い寿司作りは真剣な職人技として扱われる。寿司職人は何年も修行し、米を完璧に炊き、最も新鮮な魚を選び、ちょうどよい力加減で一貫ずつ手で握ることを学ぶ。目標は、一口の中の味、食感、美しさの調和だ。寿司は多くの場面でも楽しまれる。上等な店での特別で高価な食事にも、皿がベルトで流れてくる店での手早く安いごちそうにもなる。今日、寿司は世界中で愛され、各国が独自の工夫を加える。だが核心では、日本料理の象徴であり続ける。簡素で新鮮な材料を大きな心配りで用意し、食べ物と食べる人の双方への敬意とともに供する。",
        quiz: [
          { q: "What is sushi built on, at its heart?", options: ["Specially prepared rice seasoned with a little vinegar", "Only raw fish", "Bread and butter"], answer: 0 },
          { q: "Does all sushi contain raw fish?", options: ["No — toppings can also be egg, vegetables, or shellfish", "Yes, always", "No, it never has fish"], answer: 0 },
          { q: "Why is making good sushi treated as a serious craft?", options: ["A chef trains for years to cook rice perfectly, choose fresh fish, and shape each piece", "Because it takes no skill", "Because it is made by machines only"], answer: 0 }
        ]
      },
      {
        id: "d0928-5",
        title: "The Amazing Human Heart",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "Place your hand on your chest, and you will feel it: a steady beat, repeating again and again. That is your heart, one of the hardest-working parts of your body. About the size of your fist, it never takes a rest, beating around a hundred thousand times every single day.\n\nWhat does the heart actually do? Its job is to pump blood. Blood carries oxygen and food to every part of your body, from your brain to your toes, and carries away waste. The heart is the powerful muscle that keeps this life-giving liquid moving. With each beat, it squeezes and pushes blood out through a network of tubes called blood vessels, which reach every corner of the body.\n\nThe heart works in two main halves. One side sends blood to the lungs to pick up fresh oxygen. The other side pumps that oxygen-rich blood out to the rest of the body. In this way, the heart never stops sending fresh supplies where they are needed.\n\nBecause the heart is so important, taking care of it matters greatly. Exercise makes the heart stronger, just like any other muscle. Healthy food, good sleep, and avoiding harmful habits all help it last a long time.\n\nYour heart began beating before you were born and will continue for your whole life, quietly and faithfully. It is a small, tireless pump, and it is one of the true wonders of the living body.",
        summaryJa: "胸に手を当てると感じるだろう。何度も繰り返す一定の鼓動。それがあなたの心臓、体で最も働き者の部分の一つだ。こぶしほどの大きさで、決して休まず、毎日およそ十万回打つ。心臓は実際何をするのか。その仕事は血液を送り出すことだ。血液は酸素と栄養を、脳からつま先まで体のあらゆる部分へ運び、老廃物を運び去る。心臓はこの命を与える液体を動かし続ける強力な筋肉だ。一打ごとに、血管という管の網を通して血液を絞り出し押し出し、体のすみずみに届く。心臓は主に二つの半分で働く。一方は肺へ血液を送り新鮮な酸素を取り込む。他方はその酸素豊富な血液を体の残りへ送り出す。こうして心臓は必要な所へ新しい供給を送り続ける。心臓はとても重要なので、その世話は大いに大切だ。運動は、他の筋肉と同じく心臓を強くする。健康的な食事、良い睡眠、有害な習慣を避けることがすべて長持ちを助ける。あなたの心臓は生まれる前から打ち始め、一生続く。静かに忠実に。小さく疲れ知らずのポンプであり、生きた体の真の驚異の一つだ。",
        quiz: [
          { q: "What is the heart's main job?", options: ["To pump blood, carrying oxygen and food around the body", "To digest food", "To store memories"], answer: 0 },
          { q: "How do the two halves of the heart work?", options: ["One side sends blood to the lungs for oxygen; the other pumps it to the body", "Both do exactly nothing", "They work only once a year"], answer: 0 },
          { q: "How can people take care of their heart?", options: ["Exercise, healthy food, good sleep, and avoiding harmful habits", "Never moving at all", "Skipping sleep"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-09-27",
    passages: [
      {
        id: "d0927-1",
        title: "What Is a Patent?",
        level: "★★★",
        genre: "ビジネス",
        text: "Imagine you spend years inventing something new — a clever machine, a useful medicine, or a smart design. Just as you begin to sell it, a much larger company copies your idea and sells it cheaper. All your hard work seems lost. To prevent this, societies created a tool called the patent.\n\nA patent is a legal right that protects a new invention. When an inventor is granted a patent, others are not allowed to make, use, or sell that exact invention for a number of years without permission. In effect, the inventor is given a limited period to benefit from their own idea.\n\nWhy do we have patents? The main reason is to encourage new ideas. Inventing is often slow and expensive. If anyone could copy an idea the moment it appeared, few people would take the risk of inventing at all. A patent rewards effort and gives inventors a fair chance to earn back their investment.\n\nBut patents also have a cost. While a patent lasts, the price of a product can stay high, since no one else may make it. That is why patents do not last forever. After they expire, anyone may use the idea, and prices usually fall.\n\nPatents can also cause disputes. Companies sometimes argue in court over who truly invented something first, and these cases can be worth billions.\n\nIn the end, a patent tries to balance two goals: rewarding inventors, and eventually sharing good ideas with everyone.",
        summaryJa: "何かを何年もかけて発明したと想像してほしい——巧みな機械、役立つ薬、賢い設計。売り始めた途端、はるかに大きな会社が発想を真似て安く売る。苦労がすべて失われるように見える。これを防ぐため、社会は特許という道具を作った。特許は新しい発明を守る法的権利だ。発明者に特許が認められると、他者は許可なくその発明を数年間、作ったり使ったり売ったりできない。実質、発明者は自分の発想から利益を得る限られた期間を与えられる。なぜ特許があるのか。主な理由は新しい発想を促すためだ。発明はしばしば遅く高くつく。現れた瞬間に誰でも真似できれば、発明の危険を冒す人はほとんどいなくなる。特許は努力に報い、投資を取り戻す公正な機会を与える。だが特許には代償もある。続く間、他が作れないので製品の価格が高いままになりうる。だから特許は永遠には続かない。切れた後は誰でも発想を使え、価格はふつう下がる。特許は争いも生む。企業は誰が最初に発明したか法廷で争うことがあり、数十億の価値になる事例もある。特許は二つの目標のバランスを取ろうとする。発明者に報いること、そしていずれ良い発想を皆と分かち合うことだ。",
        quiz: [
          { q: "What is a patent?", options: ["A legal right that protects a new invention for a number of years", "A type of factory", "A kind of tax"], answer: 0 },
          { q: "Why do societies have patents?", options: ["To encourage new ideas by rewarding inventors' effort and risk", "To stop all inventions", "To make everything free"], answer: 0 },
          { q: "Why don't patents last forever?", options: ["So that after they expire, anyone may use the idea and prices usually fall", "Because inventors dislike money", "Because ideas are worthless"], answer: 0 }
        ]
      },
      {
        id: "d0927-2",
        title: "How GPS Finds Your Location",
        level: "★★★",
        genre: "テクノロジー",
        text: "When your phone shows a little dot marking exactly where you are on a map, it is using a remarkable system called GPS. With it, a device can find its place on Earth to within a few meters, almost anywhere in the world. But how can a phone know where it is, using nothing but the open sky?\n\nThe answer lies far above us. Circling the Earth are many satellites, each constantly sending out radio signals. Each signal carries two pieces of information: where the satellite is, and the exact time the signal was sent, measured by a very precise clock.\n\nYour phone listens for these signals. Because the signals travel at the speed of light, the phone can measure how long each one took to arrive, and from that, how far away each satellite is. By combining the distances to several satellites at once, the phone can work out the one spot on Earth where it must be. Using more satellites gives a more accurate answer.\n\nThis is why GPS usually works less well indoors or between tall buildings, where the signals from the sky are blocked.\n\nGPS is now part of daily life. It guides cars, ships, and planes, helps farmers and rescuers, and even keeps the world's clocks in step. All of it depends on a simple, beautiful idea: measure the time signals take to arrive, and let mathematics reveal exactly where you stand.",
        summaryJa: "電話が地図上にあなたの正確な位置を示す小さな点を表示するとき、それはGPSという見事な仕組みを使っている。これで機器は世界のほぼどこでも、数メートル以内の精度で地球上の位置を見つけられる。だが電話は、開けた空だけを使ってどうして自分の位置を知れるのか。答えははるか頭上にある。地球を回る多くの衛星が、それぞれ絶えず電波信号を送っている。各信号は二つの情報を運ぶ。衛星がどこにあるか、そしてとても精密な時計で測った、信号が送られた正確な時刻だ。電話はこの信号を聞く。信号は光の速さで進むので、電話は各信号が届くのにかかった時間を測り、そこから各衛星までの距離を割り出せる。複数の衛星までの距離を同時に組み合わせると、地球上で自分がいるはずの一点を求められる。より多くの衛星を使うほど正確になる。だからGPSは室内や高いビルの間では、空からの信号が遮られてうまく働かないことが多い。GPSは今や日常の一部だ。車や船、飛行機を導き、農家や救助隊を助け、世界の時計まで合わせる。すべては単純で美しい考えに依る。信号が届く時間を測り、数学に自分の正確な位置を明かさせるのだ。",
        quiz: [
          { q: "What does each GPS satellite signal carry?", options: ["Where the satellite is and the exact time the signal was sent", "A photograph of your face", "Your phone number"], answer: 0 },
          { q: "How does your phone work out its distance to a satellite?", options: ["By measuring how long the signal took to arrive, since signals travel at light speed", "By weighing the satellite", "By guessing"], answer: 0 },
          { q: "Why does GPS work less well indoors or between tall buildings?", options: ["The signals from the sky are blocked", "Because phones sleep indoors", "Because satellites stop working"], answer: 0 }
        ]
      },
      {
        id: "d0927-3",
        title: "Protecting the World's Treasures",
        level: "★★☆",
        genre: "世界情勢",
        text: "Around the globe stand places of extraordinary value: ancient temples, great natural parks, historic city centers, and beautiful landscapes shaped over thousands of years. Some are made by human hands; others are wonders of nature. Together, they form a kind of shared inheritance that belongs, in a sense, to all of humanity. Protecting them has become an important global effort.\n\nWhy treat these places as everyone's concern? Because they cannot be replaced. If an ancient building falls or a unique forest is destroyed, no amount of money can bring it back. These sites also teach us about our history, our cultures, and the natural world. They draw visitors, support local economies, and fill people with wonder.\n\nTo help protect them, nations work together. Special lists honor the most important sites and encourage countries to care for them. Experts share knowledge on how to repair old buildings or protect rare animals. When disaster strikes, the world may send help to save a threatened treasure.\n\nThe task is not easy. Time, weather, pollution, crowds of tourists, and conflict all put these places at risk. Caring for them takes money, skill, and constant attention.\n\nStill, the effort is worthwhile. These treasures connect us to those who came before and to the planet we share. By protecting them, we keep the world's story alive — a gift passed carefully from one generation to the next.",
        summaryJa: "世界各地に、並外れた価値を持つ場所がある。古代の寺院、雄大な自然公園、歴史ある都市の中心、何千年もかけて形づくられた美しい景観。人の手によるものもあれば、自然の驚異もある。合わせて、ある意味で全人類に属する共有の遺産をなす。それらを守ることは重要な世界的努力になった。なぜこれらを皆の関心事とするのか。取り替えがきかないからだ。古い建物が崩れたり独自の森が壊されたりすれば、どれほどのお金でも取り戻せない。これらの場所は歴史や文化、自然界について教えてくれる。訪問者を引き寄せ、地域経済を支え、人を驚きで満たす。守るため、国々は協力する。特別な一覧が最も重要な場所をたたえ、各国に世話を促す。専門家は古い建物の修復や稀少な動物の保護の知識を共有する。災害が起きると、世界は脅かされた宝を救う助けを送ることもある。仕事は容易でない。時間、天候、汚染、観光客の群れ、紛争がすべてこれらの場所を危険にさらす。世話には金と技、絶え間ない注意が要る。それでも努力は価値がある。これらの宝は、先を生きた人々と、分かち合う惑星に私たちをつなぐ。守ることで世界の物語を生かし続ける——世代から世代へ丁寧に受け継がれる贈り物だ。",
        quiz: [
          { q: "Why are these places treated as everyone's concern?", options: ["They cannot be replaced and teach us about history, culture, and nature", "They are worthless", "They belong to no one and matter to no one"], answer: 0 },
          { q: "How do nations help protect these sites?", options: ["Special lists honor them and experts share knowledge on how to care for them", "By ignoring them", "By destroying old buildings"], answer: 0 },
          { q: "What puts these treasures at risk?", options: ["Time, weather, pollution, crowds, and conflict", "Nothing ever threatens them", "Only their popularity"], answer: 0 }
        ]
      },
      {
        id: "d0927-4",
        title: "Japan's Majestic Castles",
        level: "★★☆",
        genre: "日本",
        text: "Rising above many Japanese cities and towns are some of the country's most striking sights: old castles, with their curved roofs, white walls, and tall central towers. These beautiful buildings are more than tourist attractions. They are windows into hundreds of years of Japanese history.\n\nMost Japanese castles were built centuries ago, in a time of war among powerful lords. A castle was first of all a fortress, designed to protect those inside. Clever defenses were built in: steep stone walls, deep moats filled with water, and winding paths meant to slow down and confuse attackers. Yet the castles were also grand and beautiful, showing the power and taste of the lord who ruled there.\n\nAt the heart of a castle stands the main tower, or \"tenshu,\" often several stories tall. From its top, defenders could watch the land for miles. Today, visitors climb these same towers to enjoy the view and imagine life long ago.\n\nSadly, many original castles were lost over the centuries to fire, war, or time. Some that stand today are careful reconstructions, while a small number are original and greatly treasured.\n\nWhether old or rebuilt, Japan's castles remain proud symbols of their cities. They tell stories of samurai, lords, and battles, and they show a rare blend of strength and elegance. To stand before one is to feel the long, dramatic history of Japan rising all around you.",
        summaryJa: "日本の多くの都市や町の上にそびえるのは、国で最も印象的な光景の一つ、古い城だ。反った屋根、白い壁、高い中央の塔を持つ。この美しい建物は観光名所以上のものだ。何百年もの日本の歴史をのぞく窓である。多くの日本の城は何世紀も前、力ある領主同士の戦の時代に築かれた。城はまず何よりも要塞で、中の者を守るよう設計された。巧みな防御が組み込まれた。急な石垣、水を満たした深い堀、攻め手を遅らせ惑わせる曲がりくねった道。だが城は壮大で美しくもあり、そこを治めた領主の力と趣味を示した。城の中心には天守、しばしば数階建ての主塔が立つ。その頂から、守り手は何マイルも土地を見渡せた。今日、訪問者は同じ塔に登り眺めを楽しみ、遠い昔の暮らしを思い描く。悲しいことに、多くの元の城が何世紀もの間に火事や戦、時によって失われた。今日立つもののいくつかは丁寧な再建で、少数は現存し大いに大切にされる。古くても再建でも、日本の城はその都市の誇り高い象徴であり続ける。侍や領主、戦の物語を語り、力と優雅さの稀な調和を示す。城の前に立つことは、日本の長く劇的な歴史が周りに立ち上がるのを感じることだ。",
        quiz: [
          { q: "What was a Japanese castle first of all?", options: ["A fortress designed to protect those inside", "A shopping center", "A school"], answer: 0 },
          { q: "What is the 'tenshu'?", options: ["The main tower at the heart of a castle", "A castle garden", "A type of moat"], answer: 0 },
          { q: "Why are some castles standing today reconstructions?", options: ["Many original castles were lost to fire, war, or time", "Because originals were never built", "Because they were never important"], answer: 0 }
        ]
      },
      {
        id: "d0927-5",
        title: "The Biggest Machine on Earth",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "Deep underground, near the border of two countries in Europe, lies one of the most extraordinary machines ever built. It is a giant ring, many kilometers around, buried in a tunnel beneath farms and towns. Its purpose is strange and wonderful: to smash tiny particles together at nearly the speed of light, in order to understand what everything is made of.\n\nEverything around us — you, this page, the stars — is built from unimaginably small building blocks. To study these tiny pieces, scientists cannot simply look at them; they are far too small to see. Instead, they speed up particles inside the great ring and crash them together. In the burst of energy from each crash, new, even smaller particles briefly appear, and powerful detectors record what happens.\n\nBy studying these crashes, scientists learn the deepest rules of nature: what matter is, how it holds together, and how the universe began. One famous discovery from such a machine helped explain why particles have mass at all.\n\nBuilding and running such a machine is a huge task. It takes thousands of scientists from many countries, working together for decades. From time to time, parts are shut down and rebuilt to make the machine even better.\n\nThis vast machine reminds us of something inspiring: that human curiosity has no limit. To answer the biggest questions about the universe, people built one of the biggest and most delicate machines in history.",
        summaryJa: "ヨーロッパの二国の国境近くの地下深くに、これまで作られた中で最も並外れた機械の一つがある。周囲何キロもある巨大な輪で、農地や町の下のトンネルに埋まっている。その目的は奇妙で素晴らしい。小さな粒子をほぼ光の速さでぶつけ合い、すべてが何でできているかを理解するのだ。私たちの周りのすべて——あなた、このページ、星々——は想像を絶するほど小さな構成要素でできている。この小さな部分を研究するのに、科学者はただ見ることはできない。小さすぎて見えないのだ。代わりに、大きな輪の中で粒子を加速し、互いに衝突させる。各衝突のエネルギーの爆発の中で、新たな、さらに小さな粒子が一瞬現れ、強力な検出器が何が起きるか記録する。この衝突を調べることで、科学者は自然の最も深い法則を学ぶ。物質とは何か、どう結びつくか、宇宙はどう始まったか。こうした機械での有名な発見の一つは、そもそもなぜ粒子に質量があるかの説明を助けた。こうした機械の建設と運用は巨大な仕事だ。多くの国の何千もの科学者が数十年協力する。時折、部品を停止し作り直して機械をさらに良くする。この巨大な機械は、心を鼓舞することを思い出させる。人間の好奇心に限りはない。宇宙の最大の問いに答えるため、人は史上最大級で最も繊細な機械の一つを作った。",
        quiz: [
          { q: "What does this giant machine do?", options: ["It smashes tiny particles together at nearly the speed of light", "It grows crops underground", "It stores water"], answer: 0 },
          { q: "Why can't scientists simply look at these tiny particles?", options: ["They are far too small to see", "They are too bright", "They move too slowly"], answer: 0 },
          { q: "What does building such a machine require?", options: ["Thousands of scientists from many countries working together for decades", "One person in a weekend", "No effort at all"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-09-26",
    passages: [
      {
        id: "d0926-1",
        title: "Why Happy Workers Matter",
        level: "★★☆",
        genre: "ビジネス",
        text: "For a long time, many companies thought their only job was to keep customers happy. The people who worked for the company were expected simply to do as they were told. Today, more and more businesses understand something important: happy workers are good for business.\n\nWhy does the happiness of employees matter so much? First, people who enjoy their work tend to do it better. They are more careful, more creative, and more willing to help. A worker who feels valued will often go the extra mile, while an unhappy one may do only the bare minimum.\n\nSecond, keeping good workers saves money. When someone leaves, the company must find and train a replacement, which is slow and expensive. A workplace where people feel respected and supported keeps its talented people longer.\n\nHappy workers also treat customers better. A friendly, cheerful employee makes customers feel welcome, while a tired, unhappy one can drive them away. In this way, the mood inside a company quietly reaches the people it serves.\n\nMaking workers happy does not mean simply paying more, though fair pay matters. It also means respect, interesting work, a chance to grow, and a healthy balance between work and life.\n\nWise companies now see their employees not just as workers, but as people whose wellbeing shapes everything. When a business takes care of its people, those people, in turn, take care of the business.",
        summaryJa: "長い間、多くの企業は自分たちの唯一の仕事は客を満足させることだと考えていた。会社で働く人は、言われた通りにするだけと期待された。今、ますます多くの企業が大切なことを理解している。幸せな働き手はビジネスに良い、と。なぜ従業員の幸せがそれほど重要か。第一に、仕事を楽しむ人はそれをよりうまくやる傾向がある。より注意深く、創造的で、進んで助ける。大切にされていると感じる働き手はしばしば一歩踏み込むが、不幸な人は最低限しかしないかもしれない。第二に、良い働き手を留めることはお金を節約する。誰かが辞めると、会社は後任を探し訓練せねばならず、遅く高くつく。人が尊重され支えられていると感じる職場は、有能な人をより長く留める。幸せな働き手は客もより良く扱う。親しみやすく明るい従業員は客に歓迎されていると感じさせ、疲れて不幸な人は客を遠ざけうる。こうして会社内の雰囲気が、仕える相手に静かに届く。働き手を幸せにするとは、単に多く払うことではない——公正な給与は大切だが。敬意、面白い仕事、成長の機会、仕事と生活の健全なバランスも意味する。賢い企業は今、従業員を単なる働き手でなく、その幸福がすべてを形づくる人として見る。企業が人を大切にすれば、その人が今度は企業を大切にする。",
        quiz: [
          { q: "Why do happy workers do their jobs better?", options: ["They are more careful, creative, and willing to help", "They do less work", "They ignore customers"], answer: 0 },
          { q: "How does keeping good workers save money?", options: ["The company avoids the slow, expensive task of replacing and training people", "It costs more to keep people", "Workers pay the company"], answer: 0 },
          { q: "What does making workers happy involve, besides pay?", options: ["Respect, interesting work, a chance to grow, and work-life balance", "Only shouting orders", "Nothing at all"], answer: 0 }
        ]
      },
      {
        id: "d0926-2",
        title: "How Search Engines Work",
        level: "★★★",
        genre: "テクノロジー",
        text: "Type a few words into a search engine, and in less than a second you receive millions of results, with the most useful ones usually near the top. It feels effortless, but behind that instant answer lies a huge and clever system. How does a search engine find what you want so quickly?\n\nThe work happens in three main steps. First comes crawling. The search engine sends out software, sometimes called \"spiders,\" that travel across the internet, following links from page to page and visiting billions of websites.\n\nSecond comes indexing. As the spiders visit pages, the search engine stores information about each one in a giant index — a bit like the index at the back of a book, but vastly larger. This index lets the engine find relevant pages later without searching the whole internet again.\n\nThird comes ranking. When you type a question, the engine looks in its index for matching pages, then decides which to show first. To do this, it weighs many clues: how well a page matches your words, how trusted and popular it is, and how easy it is to read.\n\nBecause the internet changes constantly, this process never stops. Spiders keep crawling, the index keeps growing, and the ranking keeps improving.\n\nSo a simple search is really the tip of an enormous machine, quietly organizing the world's information so that the answer you need is only a moment away.",
        summaryJa: "検索エンジンに数語を打ち込むと、一秒足らずで何百万もの結果が返り、最も役立つものがたいてい上位に来る。楽々に感じるが、その即座の答えの裏には巨大で巧みな仕組みがある。検索エンジンはどうして、欲しいものをそんなに速く見つけるのか。作業は主に三段階で起きる。第一はクロール。検索エンジンは「スパイダー」と呼ばれることもあるソフトを送り出し、ページからページへリンクをたどってインターネットを巡り、何十億ものサイトを訪れる。第二はインデックス化。スパイダーがページを訪れると、検索エンジンは各ページの情報を巨大な索引に蓄える。本の巻末の索引に少し似ているが、はるかに大きい。この索引のおかげで、後でインターネット全体を再び探さずに関連ページを見つけられる。第三はランク付け。質問を打つと、エンジンは索引で一致するページを探し、どれを最初に見せるか決める。そのため多くの手がかりを比べる。ページが語にどれだけ合うか、どれだけ信頼され人気か、どれだけ読みやすいか。インターネットは絶えず変わるので、この過程は止まらない。スパイダーは巡り続け、索引は育ち続け、ランク付けは改善し続ける。単純な検索は、実は巨大な機械の氷山の一角だ。世界の情報を静かに整理し、必要な答えが一瞬先にあるようにしている。",
        quiz: [
          { q: "What is the first step, 'crawling'?", options: ["Software travels the internet, following links and visiting billions of pages", "Deleting all websites", "Printing every page on paper"], answer: 0 },
          { q: "What is the 'index' like?", options: ["A giant version of the index at the back of a book", "A single photograph", "A type of computer game"], answer: 0 },
          { q: "How does the engine decide which pages to show first (ranking)?", options: ["It weighs how well a page matches, how trusted and popular it is, and how readable", "It picks pages at random", "It shows the oldest pages only"], answer: 0 }
        ]
      },
      {
        id: "d0926-3",
        title: "Working Together Against Disease",
        level: "★★★",
        genre: "世界情勢",
        text: "Diseases do not carry passports. A sickness that appears in one country can, within days, travel by airplane to the other side of the world. Because germs cross borders so easily, protecting people's health has become a task that no country can handle alone. Around the world, nations work together to fight disease.\n\nThis cooperation takes many forms. Countries share information quickly when a new illness appears, so that others can prepare. Scientists in different nations work together to study diseases and to develop medicines and vaccines. When a poorer country faces an outbreak, richer nations and global organizations often send doctors, supplies, and support.\n\nOne of the greatest victories of this teamwork was the defeat of smallpox, a deadly disease that once killed millions. Through a huge worldwide effort, doctors vaccinated people across the globe until the disease disappeared completely. It was a triumph that no single country could have achieved.\n\nThe work continues today. Health experts watch for new diseases, help vaccinate children everywhere, and plan for future outbreaks. Recent years have reminded the world how important — and how difficult — this cooperation can be.\n\nFighting disease together is not always smooth. Countries may disagree, and trust must be built. But the basic truth is clear: when it comes to health, we are all connected. A safer world for one is a safer world for all, and protecting the health of distant strangers helps protect our own.",
        summaryJa: "病気はパスポートを持たない。ある国で現れた病は、数日で飛行機に乗り地球の反対側へ移りうる。菌はたやすく国境を越えるので、人々の健康を守ることは一国では担えない務めになった。世界中で、国々は協力して病気と闘う。この協力は多くの形をとる。新しい病が現れると各国は素早く情報を共有し、他が備えられるようにする。異なる国の科学者が協力して病気を研究し、薬やワクチンを開発する。貧しい国が流行に直面すると、豊かな国や世界的な組織がしばしば医師や物資、支援を送る。この協働の最大の勝利の一つが、かつて何百万人もの命を奪った恐ろしい病、天然痘の克服だった。巨大な世界的努力を通じ、医師は病が完全に消えるまで世界中の人に予防接種をした。どの一国も成し得なかった偉業だ。仕事は今も続く。保健の専門家は新しい病を警戒し、各地の子への予防接種を助け、将来の流行に備える。近年、世界はこの協力がいかに重要で、いかに難しいかを思い出した。共に病気と闘うのは常に順調ではない。国は対立しうるし、信頼は築かねばならない。だが基本の真実は明確だ。健康に関して私たちは皆つながっている。一人にとって安全な世界は皆にとって安全な世界で、遠い見知らぬ人の健康を守ることが自分を守る助けになる。",
        quiz: [
          { q: "Why can't one country handle disease alone?", options: ["Germs cross borders easily, traveling around the world in days", "Because diseases never spread", "Because only one country has doctors"], answer: 0 },
          { q: "What was one great victory of global health teamwork?", options: ["The complete defeat of smallpox through worldwide vaccination", "Making disease spread faster", "Closing all hospitals"], answer: 0 },
          { q: "What basic truth does the passage share?", options: ["When it comes to health, we are all connected", "Health only matters in one country", "Cooperation never helps"], answer: 0 }
        ]
      },
      {
        id: "d0926-4",
        title: "The Kimono: Japan's Traditional Dress",
        level: "★★☆",
        genre: "日本",
        text: "Few images say \"Japan\" as clearly as a person wearing a kimono. This traditional garment, with its long sleeves and beautiful patterns, has been worn in Japan for well over a thousand years. Though most people wear modern clothes today, the kimono remains a treasured symbol of Japanese culture.\n\nA kimono is a long robe, wrapped around the body and held closed with a wide sash called an \"obi.\" What makes each kimono special is its design. The colors, patterns, and cloth are often chosen to match the season or the occasion. A kimono for a summer festival is light and cheerful, while one for a formal event may be rich and elegant.\n\nKimonos are usually saved for special moments. People wear them for weddings, graduations, New Year visits to shrines, and coming-of-age ceremonies. Putting one on is a careful art in itself, and dressing in a fine kimono can take help and practice.\n\nBecause good kimonos are valuable and long-lasting, they are often passed down within families, from mother to daughter. A single kimono may carry decades of memories.\n\nIn recent years, young people and visitors have enjoyed renting kimonos to walk through old streets and temples, keeping the tradition alive in a new way.\n\nThe kimono is more than clothing. It is wearable art and living history — a graceful expression of the Japanese love of beauty, season, and respect for special moments in life.",
        summaryJa: "着物を着た人ほど「日本」をはっきり物語る姿は少ない。長い袖と美しい模様を持つこの伝統的な衣服は、日本で千年をはるかに超えて着られてきた。今日ほとんどの人は現代の服を着るが、着物は日本文化の大切な象徴であり続ける。着物は長い上衣で、体に巻きつけ「帯」という幅広の帯で留める。各着物を特別にするのはその意匠だ。色や模様、布はしばしば季節や場に合わせて選ばれる。夏祭りの着物は軽く陽気で、正式な催しのものは豊かで優雅なこともある。着物はたいてい特別な時のためにとっておかれる。結婚式、卒業式、正月の神社参り、成人式に着る。着付けはそれ自体が丁寧な技で、上質な着物を着るには助けと練習が要ることもある。良い着物は価値があり長持ちするので、母から娘へと家族の中で受け継がれることが多い。一枚の着物が何十年もの思い出を宿しうる。近年、若者や訪問者は着物を借りて古い通りや寺を歩くのを楽しみ、新しい形で伝統を生かしている。着物は衣服以上のものだ。身にまとう芸術であり生きた歴史——美と季節、人生の特別な瞬間への敬意という日本の心の優雅な表現だ。",
        quiz: [
          { q: "What is an 'obi'?", options: ["The wide sash that holds a kimono closed", "A type of shoe", "A kind of hat"], answer: 0 },
          { q: "When do people usually wear kimonos?", options: ["For special moments like weddings, graduations, and New Year visits", "Every single day for work", "Only while sleeping"], answer: 0 },
          { q: "Why are kimonos often passed down in families?", options: ["Good kimonos are valuable and long-lasting, carrying decades of memories", "Because they are worthless", "Because they are made of paper"], answer: 0 }
        ]
      },
      {
        id: "d0926-5",
        title: "Why Do We Yawn?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "You are sitting quietly when, suddenly, your mouth opens wide, you take a deep breath, and you yawn. Everyone yawns — babies, old people, even dogs and cats. We often yawn when we are tired or bored. But the strange truth is that scientists are still not completely sure why we do it.\n\nFor a long time, people believed we yawn because we need more oxygen. The idea was that a tired body breathes shallowly, so a big yawn pulls in fresh air. But careful studies have cast doubt on this simple explanation, so scientists have looked for other reasons.\n\nOne interesting idea is that yawning helps cool the brain. A big yawn pulls in air and increases blood flow, which may lower the temperature of the brain slightly, helping it work better. This might explain why we yawn when we are tired, as a tired brain can be a little warmer.\n\nPerhaps the most curious fact about yawning is that it is \"contagious.\" When you see or even read about someone yawning, you may feel the urge to yawn too. This seems to be linked to how we connect with others, and it is stronger between people who are close.\n\nSo a simple yawn is more mysterious than it looks. It may cool our brains, keep us alert, and even connect us to the people around us. The next time you yawn, remember: science has not fully solved this everyday puzzle.",
        summaryJa: "静かに座っていると突然、口が大きく開き、深く息を吸い、あくびをする。誰もがあくびをする——赤ちゃんも高齢者も、犬や猫さえも。私たちは疲れたり退屈したりするとよくあくびをする。だが奇妙な真実は、科学者がなぜあくびをするのかまだ完全には確かでないことだ。長い間、酸素が足りないからあくびをすると信じられていた。疲れた体は浅く呼吸するので、大きなあくびが新鮮な空気を取り込むという考えだ。だが入念な研究がこの単純な説明に疑いを投げかけ、科学者は他の理由を探してきた。興味深い説の一つは、あくびが脳を冷やす助けになるというものだ。大きなあくびは空気を取り込み血流を増やし、脳の温度をわずかに下げてよりよく働かせるかもしれない。これは疲れたときにあくびをする理由を説明しうる。疲れた脳は少し温かくなりうるからだ。あくびの最も不思議な事実は、それが「伝染する」ことだろう。誰かのあくびを見たり、読んだりさえすると、自分もあくびをしたくなる。これは人とのつながり方に関係するらしく、親しい人同士でより強い。単純なあくびは見た目より謎めいている。脳を冷やし、覚醒を保ち、周りの人とつなげさえするかもしれない。次にあくびをするとき、思い出してほしい。科学はこの日常の謎をまだ完全には解いていない。",
        quiz: [
          { q: "What did people long believe was the reason we yawn?", options: ["That we need more oxygen, though studies have cast doubt on this", "That we are hungry", "That we want to talk"], answer: 0 },
          { q: "What is one interesting modern idea about yawning?", options: ["It may help cool the brain, helping it work better", "It makes the brain hotter", "It has no effect at all"], answer: 0 },
          { q: "What curious fact about yawning does the passage mention?", options: ["It is 'contagious' — seeing or reading about it can make you yawn", "It can only happen once a year", "Animals never yawn"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-09-25",
    passages: [
      {
        id: "d0925-1",
        title: "How Supply Chains Bring You Everything",
        level: "★★★",
        genre: "ビジネス",
        text: "Pick up almost any object in your home — a phone, a shirt, a cup of coffee — and it has traveled a long, hidden journey to reach you. Behind every product is a supply chain: the whole network of steps that turns raw materials into a finished item and delivers it to your door.\n\nA supply chain can be surprisingly long. A single chocolate bar, for example, may start with cocoa grown on a farm in one country. The beans are dried, shipped, roasted in another country, mixed with sugar and milk, wrapped in packaging made somewhere else, and finally trucked to a shop near you. Dozens of companies and thousands of people may play a part, often without ever meeting.\n\nWhen a supply chain works well, we barely notice it. Shelves are full, prices are steady, and goods arrive on time. But the system is more delicate than it looks. A storm, a strike, or a shortage in one place can slow down the whole chain, leaving shelves empty far away. In recent years, people have seen how quickly such problems can spread.\n\nThis is why businesses work hard to manage their supply chains. They plan for delays, keep backup suppliers, and use computers to track goods across the world.\n\nThe next time something arrives quickly and cheaply, remember the quiet, complex web behind it. A supply chain is one of the great hidden machines of modern life.",
        summaryJa: "家のほぼどんな物——電話、シャツ、一杯のコーヒー——を手に取っても、それはあなたに届くまで長い隠れた旅をしてきた。どの製品の背後にもサプライチェーンがある。原材料を完成品に変え、玄関まで届ける一連の段階の網だ。サプライチェーンは驚くほど長い。例えば一枚の板チョコは、ある国の農場で育つカカオから始まる。豆は乾かされ、運ばれ、別の国で焙煎され、砂糖や牛乳と混ぜられ、また別の場所で作られた包装に包まれ、最後にあなたの近くの店へトラックで運ばれる。何十もの会社と何千もの人が、しばしば一度も会わずに関わる。サプライチェーンがうまく働くと、私たちはほとんど気づかない。棚は満ち、価格は安定し、品は時間通り届く。だが仕組みは見た目より繊細だ。一箇所の嵐やストライキ、不足が連鎖全体を遅らせ、遠くの棚を空にしうる。近年、人々はこうした問題がいかに速く広がるかを見てきた。だから企業はサプライチェーンの管理に力を注ぐ。遅延に備え、予備の供給元を持ち、コンピューターで世界中の品を追う。次に何かが速く安く届いたら、その背後の静かで複雑な網を思い出してほしい。サプライチェーンは現代生活の偉大な隠れた機械の一つだ。",
        quiz: [
          { q: "What is a supply chain?", options: ["The whole network of steps that turns raw materials into a product and delivers it", "A single shop", "A type of money"], answer: 0 },
          { q: "Why is a supply chain more delicate than it looks?", options: ["A storm, strike, or shortage in one place can slow the whole chain", "It never has any problems", "It is made of glass"], answer: 0 },
          { q: "How do businesses manage their supply chains?", options: ["They plan for delays, keep backup suppliers, and track goods with computers", "They ignore all problems", "They stop making products"], answer: 0 }
        ]
      },
      {
        id: "d0925-2",
        title: "How Electric Cars Work",
        level: "★★☆",
        genre: "テクノロジー",
        text: "For more than a hundred years, most cars have run on gasoline, burning fuel in an engine to move. Now, a quieter kind of car is becoming common on our roads: the electric car. Instead of burning fuel, it runs on electricity stored in a large battery. But how does it actually work?\n\nAt the heart of an electric car is the battery, a big pack that stores electrical energy, much like a giant version of the battery in your phone. When you drive, this energy flows to an electric motor, which turns the wheels. Electric motors are simple, powerful, and very quiet, which is why an electric car glides along with almost no noise.\n\nTo refuel, you do not visit a gas station. Instead, you plug the car in and let the battery charge, often overnight at home. Charging can take longer than filling a tank, though fast chargers are improving.\n\nElectric cars have real advantages. They produce no exhaust from the car itself, which means cleaner air in cities. They are cheaper to run, since electricity often costs less than fuel, and they have fewer moving parts to break.\n\nThere are challenges too. Batteries are expensive, and drivers need enough places to charge, especially on long trips.\n\nStill, electric cars are spreading fast around the world. As batteries improve and charging becomes easier, this quiet, clean technology may soon become the normal way we drive.",
        summaryJa: "100年以上、多くの車はガソリンで走り、エンジンで燃料を燃やして動いてきた。今、より静かな種類の車が道で当たり前になりつつある。電気自動車だ。燃料を燃やす代わりに、大きな電池に蓄えた電気で走る。だが実際どう働くのか。電気自動車の心臓は電池、電話の電池の巨大版のように電気エネルギーを蓄える大きなパックだ。運転すると、このエネルギーが電気モーターに流れ、車輪を回す。電気モーターは単純で力強く、とても静かだ。だから電気自動車はほとんど音もなく滑るように進む。給油にはガソリンスタンドへ行かない。代わりに車をつないで電池を充電する。しばしば家で一晩かけて。充電はタンクを満たすより時間がかかりうるが、急速充電器は改良が進む。電気自動車には本当の利点がある。車自体から排気を出さず、都市の空気が清潔になる。電気は燃料より安いことが多く走行費が安く、壊れる可動部品も少ない。課題もある。電池は高価で、特に長旅では十分な充電場所が要る。それでも電気自動車は世界中で急速に広がる。電池が改良され充電が容易になるにつれ、この静かで清潔な技術がやがて普通の運転の仕方になるかもしれない。",
        quiz: [
          { q: "What is at the heart of an electric car?", options: ["A large battery that stores electrical energy", "A tank of gasoline", "A wood-burning stove"], answer: 0 },
          { q: "How do you refuel an electric car?", options: ["You plug it in and let the battery charge", "You visit a gas station", "You add water"], answer: 0 },
          { q: "What is one advantage of electric cars?", options: ["They produce no exhaust from the car itself, meaning cleaner air", "They make more smoke", "They have more parts to break"], answer: 0 }
        ]
      },
      {
        id: "d0925-3",
        title: "Educating Every Child",
        level: "★★☆",
        genre: "世界情勢",
        text: "Imagine growing up without ever going to school — never learning to read, write, or do basic math. For millions of children around the world, this is still a reality. Making sure that every child, everywhere, can go to school has become one of the great goals shared by nations across the globe.\n\nWhy does it matter so much? Education changes lives. A child who learns to read can find better work, understand their rights, and make wiser choices about health and money. When girls in particular are educated, whole communities grow healthier and more prosperous. Education is one of the most powerful tools we have to reduce poverty.\n\nYet many children still miss out. Some live far from any school. Some are kept home to work or care for family. War, poverty, and lack of teachers all get in the way. For girls, old customs sometimes end their schooling early.\n\nAround the world, people are working to change this. Governments build schools and train teachers. Charities provide books, meals, and safe places to learn. Technology now brings lessons to remote villages through phones and radios.\n\nProgress has been real. Far more children go to school today than a generation ago. But the work is not finished, and recent challenges have slowed it in some places.\n\nEducating every child is not only fair; it is wise. A world where all children can learn is a world with more ideas, more hope, and more chances for everyone.",
        summaryJa: "一度も学校に行かず育つことを想像してほしい——読み書きも基本の計算も習わずに。世界中の何百万もの子どもにとって、これはなお現実だ。どこの子も皆が学校に行けるようにすることは、世界の国々が共有する大きな目標の一つになった。なぜそれほど重要か。教育は人生を変える。読めるようになった子はより良い仕事を見つけ、自分の権利を理解し、健康やお金についてより賢い選択ができる。特に女子が教育を受けると、地域社会全体がより健康で豊かになる。教育は貧困を減らす最も強力な道具の一つだ。だが多くの子はなお機会を逃す。学校から遠く住む子もいる。働くためや家族の世話で家にとどめられる子もいる。戦争、貧困、教師不足がすべて妨げになる。女子には、古い慣習が早くに就学を終わらせることもある。世界中で人々はこれを変えようとしている。政府は学校を建て教師を養成する。慈善団体は本や食事、安全に学べる場所を提供する。技術は今、電話やラジオで遠い村に授業を届ける。進歩は本物だ。一世代前よりはるかに多くの子が学校に行く。だが仕事は終わっておらず、近年の困難が一部の場所で歩みを遅らせた。すべての子を教育することは公正なだけでなく賢明だ。すべての子が学べる世界は、より多くの発想と希望、そして皆への機会がある世界だ。",
        quiz: [
          { q: "Why does education matter so much?", options: ["It changes lives, helping people find work, understand rights, and reduce poverty", "It has no effect on people's lives", "It only helps rich people"], answer: 0 },
          { q: "Why do many children still miss school?", options: ["Distance, poverty, work at home, war, and a lack of teachers", "Because school is too easy", "Because no schools exist anywhere"], answer: 0 },
          { q: "How are people working to educate every child?", options: ["Building schools, training teachers, and bringing lessons through phones and radios", "By closing all schools", "By ignoring the problem"], answer: 0 }
        ]
      },
      {
        id: "d0925-4",
        title: "Ramen: Japan's Beloved Noodle Dish",
        level: "★★☆",
        genre: "日本",
        text: "On a cold evening in Japan, few things are more comforting than a steaming bowl of ramen. This popular dish is made of wheat noodles served in a hot, flavorful soup, usually topped with things like sliced pork, green onions, seaweed, and a soft-boiled egg. Simple as it sounds, ramen has become one of Japan's most loved foods, enjoyed by people of every age.\n\nInterestingly, ramen came to Japan from China long ago, but over the years the Japanese made it entirely their own. Today, almost every region of Japan has its own style. The soup might be rich and creamy in one area, light and salty in another, or dark and savory somewhere else. Ramen lovers travel across the country just to taste local versions.\n\nMaking great ramen is taken very seriously. A good soup can take many hours, or even a whole day, to prepare, as cooks slowly draw deep flavor from bones, vegetables, and other ingredients. Some famous ramen shops have lines of customers waiting patiently outside.\n\nRamen is also part of everyday life. It is cheap, filling, and quick, making it a favorite meal for busy students and workers. There are tiny shops with just a few seats, and even instant ramen that anyone can make at home in minutes.\n\nFrom humble noodles has grown a rich food culture. A single bowl of ramen holds warmth, craft, and a strong sense of local pride.",
        summaryJa: "日本の寒い夕べ、湯気の立つラーメンの丼ほど心温まるものは少ない。この人気の料理は、熱く風味豊かなスープに入った小麦の麺で、たいていチャーシューやねぎ、海苔、半熟卵などがのる。単純に聞こえるが、ラーメンは日本で最も愛される食べ物の一つになり、あらゆる年代の人に楽しまれる。興味深いことに、ラーメンは昔中国から日本に来たが、年月をかけて日本人はそれを完全に自分のものにした。今や日本のほぼどの地域にも独自の流儀がある。スープはある地域では濃厚でクリーミー、別では軽く塩気があり、また別では濃く旨みがある。ラーメン好きは地元版を味わうためだけに国中を旅する。優れたラーメン作りはとても真剣に受け止められる。良いスープは何時間、時に丸一日かかる。料理人が骨や野菜などからゆっくり深い風味を引き出すからだ。有名店には外で辛抱強く待つ客の列がある。ラーメンは日常の一部でもある。安く、満腹で、速いので、忙しい学生や働く人の好物だ。数席だけの小さな店もあれば、家で数分で作れるインスタントラーメンもある。素朴な麺から豊かな食文化が育った。一杯のラーメンに、温かさと職人技、そして強い地元の誇りが宿る。",
        quiz: [
          { q: "What is ramen?", options: ["Wheat noodles served in a hot, flavorful soup with toppings", "A cold sweet dessert", "A kind of tea"], answer: 0 },
          { q: "How did ramen become uniquely Japanese?", options: ["It came from China long ago, but Japan made it its own with many regional styles", "It was never changed at all", "It has only one style everywhere"], answer: 0 },
          { q: "Why is making great ramen taken seriously?", options: ["A good soup can take many hours or a whole day to prepare", "It takes only one second", "No effort is needed"], answer: 0 }
        ]
      },
      {
        id: "d0925-5",
        title: "How Plants Make Food from Light",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "Plants seem to live on almost nothing. Rooted in one spot, they never eat a meal as we do, yet they grow from tiny seeds into towering trees. Their secret is one of the most important processes on Earth: photosynthesis, the ability to make food from light.\n\nDeep inside their leaves, plants contain a green substance called chlorophyll. This is what makes leaves green, and it acts like a tiny solar panel. It captures energy from sunlight. Using that energy, the plant combines two simple ingredients — water drawn up from the soil, and a gas called carbon dioxide taken from the air — and turns them into sugar. This sugar is the plant's food, giving it the energy to grow.\n\nThere is a wonderful bonus in this process. As the plant makes its food, it releases oxygen into the air as a kind of waste. That oxygen is exactly what animals and people need to breathe. In a very real sense, plants and animals help keep each other alive.\n\nPhotosynthesis is happening quietly all around us, in every green leaf, blade of grass, and tiny plant in the sea. Together, the world's plants produce most of the oxygen we breathe and form the base of nearly every food chain.\n\nSo the next time you see a green leaf in the sun, remember what it is doing. It is quietly turning light into life — a piece of everyday magic that makes our whole world possible.",
        summaryJa: "植物はほとんど何もなしに生きているように見える。一箇所に根を張り、私たちのように食事はしないのに、小さな種からそびえる木へと育つ。その秘密は地球で最も重要な過程の一つ、光合成——光から食物を作る能力だ。葉の奥深く、植物はクロロフィルという緑の物質を含む。これが葉を緑にし、小さな太陽電池のように働く。日光からエネルギーを捉えるのだ。そのエネルギーを使い、植物は二つの簡単な材料——土から吸い上げた水と、空気から取り込む二酸化炭素という気体——を合わせ、糖に変える。この糖が植物の食物で、育つエネルギーを与える。この過程には素晴らしいおまけがある。植物は食物を作る間、一種の廃物として酸素を空気中に放つ。その酸素こそ、動物や人が呼吸に必要とするものだ。実に本当の意味で、植物と動物は互いを生かし合っている。光合成は私たちの周りのあらゆる緑の葉、草の刃、海の小さな植物で静かに起きている。合わせて、世界の植物は私たちが呼吸する酸素の大半を作り、ほぼすべての食物連鎖の土台をなす。次に日なたの緑の葉を見たら、それが何をしているか思い出してほしい。静かに光を命に変えている——私たちの世界全体を可能にする、日常の魔法の一片だ。",
        quiz: [
          { q: "What is photosynthesis?", options: ["A plant's ability to make food from light", "A way plants eat meals like animals", "A kind of animal"], answer: 0 },
          { q: "What does a plant combine to make sugar?", options: ["Water from the soil and carbon dioxide from the air, using energy from sunlight", "Only rocks", "Plastic and metal"], answer: 0 },
          { q: "What helpful thing do plants release as they make food?", options: ["Oxygen, which animals and people need to breathe", "Poison gas", "Nothing at all"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-09-24",
    passages: [
      {
        id: "d0924-1",
        title: "Why Small Businesses Matter",
        level: "★★☆",
        genre: "ビジネス",
        text: "When we think of business, we often picture huge, famous companies. But most businesses in the world are small: the corner bakery, the family restaurant, the local repair shop, the one-person design studio. Though each is tiny compared to a giant firm, together small businesses form the backbone of almost every economy.\n\nTheir importance is easy to overlook but very real. Small businesses create a large share of all jobs. They often hire people from the local area and keep money circulating within the community. When you buy from a nearby shop, more of your money tends to stay close to home.\n\nSmall businesses also bring variety and character. A street lined with unique local shops feels different from one filled only with identical chain stores. Many big, world-changing companies began as tiny startups in a garage or a spare room, so today's small business may be tomorrow's giant.\n\nRunning a small business is hard, however. Owners often work long hours and must handle everything themselves, from serving customers to keeping accounts. They can struggle to compete with the low prices of large companies.\n\nThat is why communities and governments sometimes support them, through fair rules, advice, or small loans. And customers help too, simply by choosing to shop locally.\n\nSmall businesses remind us that an economy is not only about the biggest players. It is also built from countless small dreams, each one making its own quiet contribution.",
        summaryJa: "ビジネスと聞くと、巨大で有名な企業を思い浮かべがちだ。だが世界の事業の多くは小さい。街角のパン屋、家族経営の食堂、地元の修理店、一人のデザイン工房。巨大企業に比べれば小さくても、合わせれば小規模事業はほぼすべての経済の背骨をなす。その重要さは見落としやすいが極めて現実的だ。小規模事業は全雇用の大きな割合を生む。しばしば地元の人を雇い、地域内でお金を循環させる。近所の店で買うと、お金の多くが地元に留まりやすい。小規模事業は多様性と個性ももたらす。個性的な地元の店が並ぶ通りは、同じチェーン店だけの通りとは違って感じられる。世界を変えた大企業の多くも、ガレージや空き部屋の小さなスタートアップから始まった。今日の小さな事業が明日の巨人かもしれない。だが小規模事業の経営は大変だ。経営者は長時間働き、接客から経理まで自分ですべてをこなさねばならない。大企業の安さと競うのに苦労しうる。だから地域や政府は、公正な規則や助言、少額融資で支えることがある。客も、地元で買うと選ぶだけで助けになる。小規模事業は、経済が最大の担い手だけの話ではないと思い出させる。無数の小さな夢からも築かれ、それぞれが静かに貢献している。",
        quiz: [
          { q: "Why do small businesses matter to an economy?", options: ["Together they create a large share of jobs and keep money in the community", "They create no jobs", "They only harm the economy"], answer: 0 },
          { q: "What do small businesses bring besides jobs?", options: ["Variety and character to a place", "Only higher prices", "Fewer choices"], answer: 0 },
          { q: "Why is running a small business hard?", options: ["Owners work long hours, do everything, and struggle to match big firms' low prices", "It is always easy and free", "There is nothing to do"], answer: 0 }
        ]
      },
      {
        id: "d0924-2",
        title: "Technology You Can Wear",
        level: "★★☆",
        genre: "テクノロジー",
        text: "For most of history, our tools sat in our hands or on our desks. Today, a new kind of technology is moving onto our bodies. Watches that track our steps, glasses that show information, and rings that measure our sleep are all part of a growing field called wearable technology.\n\nThe idea is simple: instead of pulling a device out of your pocket, you wear it, so it is always with you and can quietly help throughout the day. A smartwatch can show a message, count your heartbeats, or remind you to stand up. Some glasses can give directions or translate signs as you look at them. These devices aim to give useful information without demanding your full attention.\n\nWearables are especially promising for health. Because they sit on the body all day, they can gently track things like heart rate, activity, and sleep. This can help people notice problems early and build healthier habits. Doctors are exploring how such data might help patients too.\n\nBut there are concerns. A device that is always on the body can collect very personal information, so protecting that data is essential. There is also the worry of being distracted, or too connected, all the time.\n\nWearable technology is still developing, and not every gadget will succeed. Yet the direction is clear: our tools are becoming smaller, closer, and more personal — quietly woven into the fabric of daily life.",
        summaryJa: "歴史の大半、道具は手の中や机の上にあった。今、新しい種類の技術が私たちの体へ移りつつある。歩数を測る時計、情報を映す眼鏡、睡眠を測る指輪。すべて、ウェアラブル技術という成長分野の一部だ。考えは単純だ。ポケットから機器を取り出す代わりに身につけ、常に共にあって一日中静かに助ける。スマートウォッチはメッセージを表示し、心拍を数え、立ち上がるよう促す。眼鏡は見た標識の道案内や翻訳をするものもある。これらは全注意を求めず有用な情報を与えることを目指す。ウェアラブルは特に健康で有望だ。一日中体にあるので、心拍や活動、睡眠を優しく記録できる。問題に早く気づき、より健康な習慣を築く助けになる。医師もこのデータが患者を助けうるか探っている。だが懸念もある。常に体にある機器は極めて個人的な情報を集めうるので、その保護が不可欠だ。常に気が散る、あるいはつながりすぎる心配もある。ウェアラブル技術はまだ発展途上で、すべての機器が成功するわけではない。だが方向は明確だ。道具はより小さく、近く、個人的になり、日常の織物に静かに織り込まれていく。",
        quiz: [
          { q: "What is wearable technology?", options: ["Devices you wear on your body, like watches, glasses, and rings", "Only desktop computers", "Tools kept in a drawer"], answer: 0 },
          { q: "Why are wearables especially promising for health?", options: ["They sit on the body all day and can track heart rate, activity, and sleep", "They cannot measure anything", "They only tell the time"], answer: 0 },
          { q: "What is one concern about wearables?", options: ["They can collect very personal data, so protecting it is essential", "They are too large to wear", "They never turn on"], answer: 0 }
        ]
      },
      {
        id: "d0924-3",
        title: "Protecting Endangered Animals",
        level: "★★★",
        genre: "世界情勢",
        text: "Across the world, many kinds of animals are in danger of disappearing forever. Tigers, elephants, certain whales, and countless lesser-known creatures have grown rare. When the last member of a species dies, that animal is gone for all time — a loss that can never be undone. Protecting endangered animals has become a shared goal for people everywhere.\n\nWhy are so many animals in trouble? The reasons are mostly human. As we clear forests, build cities, and change the land, wild animals lose the homes they need. Some are hunted illegally for their skin, horns, or other parts. Pollution and a changing climate add further pressure.\n\nThe loss matters for more than sentimental reasons. Every animal has a role in the web of nature. Bees carry pollen, wolves keep herds healthy, and forests full of life clean our air and water. Remove one creature, and others may suffer in ways that are hard to predict.\n\nAround the world, people are fighting to help. Countries set aside protected parks where animals can live safely. Laws ban the illegal trade in rare species. Scientists study animals to understand what they need, and some carefully raise endangered creatures to release them back into the wild.\n\nSaving these animals takes cooperation across borders, because nature does not stop at any country's line. By protecting endangered species, we protect the rich, living world we are all part of — and we keep it whole for those who come after us.",
        summaryJa: "世界中で、多くの種類の動物が永遠に消える危機にある。トラ、ゾウ、ある種のクジラ、そして無数のあまり知られない生き物が稀になった。ある種の最後の一匹が死ぬと、その動物は永久に失われる——決して取り戻せない喪失だ。絶滅危惧動物を守ることは、各地の人々の共通の目標になった。なぜ多くの動物が危機にあるのか。理由の多くは人間だ。森を切り、都市を建て、土地を変えるにつれ、野生動物は必要なすみかを失う。皮や角などのために違法に狩られるものもいる。汚染や変わる気候がさらに圧力を加える。この喪失は感傷以上の理由で重要だ。どの動物も自然の網の中で役割を持つ。ハチは花粉を運び、オオカミは群れを健康に保ち、生命に満ちた森は空気と水を浄化する。一つの生き物を取り除けば、他が予測しにくい形で苦しみうる。世界中で人々は助けようと闘っている。動物が安全に暮らせる保護公園を設ける国もある。法は稀少種の違法取引を禁じる。科学者は動物が何を必要とするか研究し、絶滅危惧種を丁寧に育て野生に戻す人もいる。これらの動物を救うには国境を越えた協力が要る。自然はどの国の線でも止まらないからだ。絶滅危惧種を守ることで、私たち皆が属する豊かで生きた世界を守り、後に来る者のために全きまま保つのだ。",
        quiz: [
          { q: "Why are so many animals in danger?", options: ["Mostly human reasons: lost homes, illegal hunting, pollution, and a changing climate", "Because there are too few humans", "For no reason at all"], answer: 0 },
          { q: "Why does losing an animal matter beyond sentiment?", options: ["Every animal has a role in nature, and removing one can harm others", "It never affects anything", "Only large animals matter"], answer: 0 },
          { q: "Why does saving animals need cooperation across borders?", options: ["Nature does not stop at any country's line", "Because animals carry passports", "Because only one country has animals"], answer: 0 }
        ]
      },
      {
        id: "d0924-4",
        title: "Wagashi: Japan's Traditional Sweets",
        level: "★★☆",
        genre: "日本",
        text: "Japanese traditional sweets, called \"wagashi,\" are small works of art as much as they are food. Often served with green tea, they are made to delight the eyes as well as the tongue. A single wagashi may be shaped like a cherry blossom, a maple leaf, or a drop of dew, capturing the beauty of the season in a bite-sized treat.\n\nWagashi are usually made from simple, natural ingredients: rice, sweet bean paste, sugar, and fruit. Unlike many Western desserts, they are often not very sweet, and they use little or no butter or cream. This gentle taste pairs perfectly with the slightly bitter flavor of green tea.\n\nOne of the most special things about wagashi is their close link to the seasons. A skilled maker changes the shapes, colors, and names of the sweets throughout the year, so a wagashi eaten in spring looks and feels different from one eaten in autumn. Enjoying them is a way of tasting the passing year.\n\nMaking fine wagashi takes years of training. By hand, an artisan shapes soft dough into delicate flowers and leaves, working with patience and care. The finest pieces are almost too beautiful to eat.\n\nWagashi show a deep idea in Japanese culture: that even a simple sweet can hold beauty, season, and meaning. To eat one slowly, with a cup of tea, is to enjoy a small, quiet moment of art in everyday life.",
        summaryJa: "「和菓子」と呼ばれる日本の伝統的なお菓子は、食べ物であると同時に小さな芸術作品だ。しばしば緑茶とともに供され、舌だけでなく目も楽しませるよう作られる。一つの和菓子が桜や紅葉、露の一滴の形をとり、季節の美しさを一口大の菓子に捉える。和菓子はふつう、米、あんこ、砂糖、果物という簡素で自然な材料から作られる。多くの西洋のデザートと違い、あまり甘くないことが多く、バターやクリームはほとんど使わない。この穏やかな味が、緑茶のやや苦い風味と完璧に合う。和菓子の最も特別な点の一つは、季節との密接なつながりだ。熟練の作り手は一年を通じて菓子の形、色、名を変えるので、春に食べる和菓子は秋のものと見た目も感じも違う。楽しむことは移ろう一年を味わうことだ。上質な和菓子作りには何年もの修練が要る。職人は手で柔らかい生地を繊細な花や葉に形づくり、忍耐と心配りで働く。最上のものは食べるには美しすぎるほどだ。和菓子は日本文化の深い考えを示す。簡素な菓子さえ、美と季節と意味を宿しうる。一つをお茶とともにゆっくり食べることは、日常の中の小さく静かな芸術の瞬間を楽しむことだ。",
        quiz: [
          { q: "What are wagashi?", options: ["Japanese traditional sweets, made to delight the eyes as well as the tongue", "A kind of hot soup", "A type of tea"], answer: 0 },
          { q: "How do wagashi taste compared with many Western desserts?", options: ["Often not very sweet, using little or no butter or cream", "Much sweeter and full of cream", "Very salty"], answer: 0 },
          { q: "What is special about wagashi and the seasons?", options: ["Their shapes, colors, and names change through the year", "They never change", "They can only be eaten in winter"], answer: 0 }
        ]
      },
      {
        id: "d0924-5",
        title: "Why Birds Migrate",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "Each autumn, in many parts of the world, flocks of birds gather and fly away, sometimes traveling thousands of kilometers to warmer lands. In spring, they return. This great journey is called migration, and it is one of the most amazing feats in all of nature.\n\nWhy do birds take such a long and dangerous trip? The main reason is food and weather. As winter approaches, cold settles in and food becomes scarce. Insects vanish, and plants stop growing. Rather than starve or freeze, many birds fly to places where the weather is mild and food is plentiful. When spring returns and their northern homes bloom again, they come back to raise their young.\n\nHow birds find their way is a wonder in itself. Over such vast distances, with no maps or signs, they still reach the same regions year after year. Scientists believe birds use several clues: the position of the sun and stars, familiar landmarks like rivers and coasts, and even the Earth's magnetic field, which they seem able to sense.\n\nMigration is not easy. Birds must store energy for the journey, face storms and predators, and cross seas and mountains. Many do not survive. Those that do show incredible strength and instinct.\n\nBy protecting the places where birds rest and feed along the way, people can help these travelers complete their journeys. Migration reminds us that the natural world is deeply connected, across seasons and across the whole planet.",
        summaryJa: "毎秋、世界の多くの地域で、鳥の群れが集まり飛び去る。時に何千キロも越え、より暖かい土地へ向かう。春には戻る。この大きな旅は渡りと呼ばれ、自然界で最も驚くべき偉業の一つだ。なぜ鳥はこれほど長く危険な旅をするのか。主な理由は食べ物と天気だ。冬が近づくと寒さが定着し食べ物が乏しくなる。昆虫は消え、植物は育たなくなる。飢えたり凍えたりする代わりに、多くの鳥は天気が穏やかで食べ物が豊富な場所へ飛ぶ。春が戻り北のすみかが再び花咲くと、雛を育てに戻ってくる。鳥がどう道を見つけるかも驚異だ。地図も標識もない広大な距離を、それでも年ごとに同じ地域へ着く。科学者は鳥がいくつかの手がかりを使うと考える。太陽や星の位置、川や海岸などなじみの目印、そして感じ取れるらしい地球の磁場だ。渡りは容易ではない。鳥は旅のためにエネルギーを蓄え、嵐や捕食者に直面し、海や山を越えねばならない。多くは生き延びない。生き延びる鳥は驚くべき力と本能を示す。途中で鳥が休み餌をとる場所を守ることで、人はこの旅人が旅を終える助けができる。渡りは、自然界が季節を越え地球全体で深くつながっていると思い出させる。",
        quiz: [
          { q: "Why do birds migrate?", options: ["Mainly for food and weather — they fly to milder places when winter brings cold and scarce food", "Because they dislike other birds", "For no reason"], answer: 0 },
          { q: "How do birds find their way over vast distances?", options: ["Using the sun and stars, landmarks, and the Earth's magnetic field", "By reading road signs", "By following cars"], answer: 0 },
          { q: "How can people help migrating birds?", options: ["By protecting the places where birds rest and feed along the way", "By removing all forests", "By feeding them nothing"], answer: 0 }
        ]
      }
    ]
    }
  ] };
