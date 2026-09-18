/* デイリー配信リーディング
 * 毎朝の自動ルーチンがこのファイルを丸ごと上書き生成する（直近 7 日分を保持）。
 * days は日付降順。各 day = { date: "YYYY-MM-DD", passages: [readingPassages と同スキーマ + genre] }
 * このファイル以外は手書きデータであり、ルーチンは触らない。
 */
window.KE_DATA = window.KE_DATA || {};

KE_DATA.dailyReading = { days: [
    {
    date: "2026-09-18",
    passages: [
      {
        id: "d0918-1",
        title: "The Rise of Tap-to-Pay",
        level: "★★☆",
        genre: "ビジネス",
        text: "Not long ago, paying for something meant handing over cash or swiping a card and signing your name. Today, in many places, you simply tap your card or phone against a small machine, and in a second the payment is done. This is called tap-to-pay, or contactless payment, and it is quickly changing how the world shops.\n\nThe idea is built on a simple, short-range wireless technology. When you hold your card or phone close to the reader, the two devices talk to each other over a distance of just a few centimeters. Your payment information is passed safely, and the sale is complete almost instantly. Because the card never leaves your hand, and no long number is typed, it is both fast and secure.\n\nFor shops, tap-to-pay means shorter lines and quicker service. For customers, it means less fumbling for coins and cards. During the recent years when people wished to touch fewer surfaces, contactless payment grew even more popular, and many have never gone back.\n\nThere are things to watch. People may spend more easily when paying feels almost invisible, so it helps to keep track of your money. And some shoppers, especially those without smartphones or bank cards, still rely on cash and must not be left behind.\n\nStill, the trend is clear. With a simple tap, buying has become faster and smoother — a small change that quietly touches millions of everyday moments.",
        summaryJa: "少し前まで、支払いは現金を渡すか、カードを通して署名することだった。今、多くの場所で、カードや電話を小さな機械に軽くかざすだけで、一瞬で支払いが済む。これをタップ決済(非接触決済)といい、世界の買い物のあり方を急速に変えている。仕組みは単純な近距離無線技術に基づく。カードや電話を読み取り機に近づけると、二つの機器がわずか数センチの距離で通信する。支払い情報が安全に渡され、売買はほぼ瞬時に完了する。カードは手を離れず、長い番号も打たないので、速く安全だ。店には行列の短縮と迅速なサービスを意味し、客には小銭やカードを探す手間の減少を意味する。人が触れる面を減らしたかった近年、非接触決済はさらに広まり、多くが元に戻っていない。注意すべき点もある。支払いがほぼ見えなく感じると使いすぎやすいので、お金の管理が役立つ。スマホや銀行カードを持たない買い物客はなお現金に頼り、取り残されてはならない。それでも流れは明確だ。一度のタップで買い物は速く滑らかになった。何百万もの日常の瞬間に静かに触れる小さな変化だ。",
        quiz: [
          { q: "What is tap-to-pay?", options: ["Paying by tapping your card or phone against a reader", "Paying only with cash", "Writing a long check"], answer: 0 },
          { q: "How does tap-to-pay work?", options: ["A short-range wireless technology lets the card and reader talk over a few centimeters", "By shouting the price", "By mailing the money"], answer: 0 },
          { q: "What should customers watch out for?", options: ["They may spend more easily when paying feels almost invisible", "That it is always slow", "That it never works"], answer: 0 }
        ]
      },
      {
        id: "d0918-2",
        title: "The Secret Life of Barcodes and QR Codes",
        level: "★★★",
        genre: "テクノロジー",
        text: "Look at almost any product you buy, and you will find a small pattern of black lines or squares printed on it. These are barcodes and QR codes, and though we barely notice them, they are one of the quiet engines of modern life.\n\nA barcode is the older design: a row of black stripes of different widths. To a machine, these stripes are a code. When a scanner shines light across them, the pattern of dark and light lines stands for a number. That number tells a shop's computer exactly which product it is, so it can find the price and count how many are left in stock. What once took a clerk minutes now takes a second.\n\nA QR code goes further. It is a square filled with small black-and-white blocks, and it can hold much more information than a simple barcode — not just a number, but a web address, a message, or a ticket. Because a phone camera can read it, QR codes now appear on posters, menus, and payment screens everywhere.\n\nBoth work on the same clever idea: turning information into a pattern that a machine can read instantly and without mistakes. The patterns even include a way to check themselves, so a slightly damaged code can still be understood.\n\nThese humble squares and stripes make shopping, shipping, and sharing faster all over the world. They are proof that a simple pattern, well designed, can carry a surprising amount of meaning.",
        summaryJa: "買うほぼどんな製品にも、黒い線や四角の小さな模様が印刷されている。これがバーコードとQRコードで、ほとんど気づかないが、現代生活の静かな原動力の一つだ。バーコードは古い方の意匠で、幅の異なる黒い縞の列だ。機械にとってこの縞は符号だ。スキャナーが光を当てると、黒と白の線の模様が数字を表す。その数字が店のコンピューターにどの製品か正確に伝え、価格を見つけ在庫数を数えられる。かつて店員に数分かかったことが今は一秒だ。QRコードはさらに進む。小さな白黒の塊で満ちた四角で、単純なバーコードよりずっと多くの情報——数字だけでなくウェブアドレスやメッセージ、チケット——を持てる。電話のカメラで読めるので、今やポスターやメニュー、決済画面などあらゆる所に現れる。どちらも同じ巧みな考えに基づく。情報を、機械が瞬時に誤りなく読める模様に変えるのだ。模様には自己確認の仕組みも含まれ、少し傷んだ符号でも理解できる。この地味な四角と縞が、世界中で買い物や輸送、共有を速くする。よく設計された単純な模様が驚くほど多くの意味を運べる証だ。",
        quiz: [
          { q: "What does a barcode's pattern of stripes stand for?", options: ["A number that tells a computer which product it is", "A drawing of the product", "The name of the shop owner"], answer: 0 },
          { q: "How is a QR code different from a barcode?", options: ["It can hold much more information, like a web address or a ticket", "It holds no information at all", "It can only be read by hand"], answer: 0 },
          { q: "What clever idea do both share?", options: ["Turning information into a pattern a machine can read instantly and correctly", "Hiding information forever", "Making shopping slower"], answer: 0 }
        ]
      },
      {
        id: "d0918-3",
        title: "Working Together in Space",
        level: "★★★",
        genre: "世界情勢",
        text: "Space is vast, cold, and dangerous, and reaching it is one of the hardest things humans have ever done. Perhaps that is why, high above our arguments on Earth, space has become a place where many nations choose to work together rather than alone.\n\nThe clearest example has been the large station that circles the Earth, where astronauts from many different countries live and work side by side. They share the same small home, run experiments together, and depend on one another for safety. Countries that disagree on many things on the ground have cooperated for years to keep this station flying.\n\nWhy cooperate in space? First, it is enormously expensive. By sharing the cost, no single nation has to pay for everything. Second, it is safer and smarter. Different countries bring different skills and ideas, and together they can do more than any one could alone. Third, the big questions of space — how the universe began, or whether life exists elsewhere — belong to all of humanity, not to one flag.\n\nCooperation is not always easy. Nations must build trust, agree on rules, and share credit fairly. As more countries and companies reach space, new agreements will be needed to keep it peaceful and open.\n\nStill, space offers a hopeful lesson. When a challenge is large enough, even rival nations can find reasons to join hands. Looking up together, we are reminded of how much we share on the small planet below.",
        summaryJa: "宇宙は広大で冷たく危険で、そこへ到達することは人類が成した最も難しいことの一つだ。だからこそ、地上の争いのはるか上で、宇宙は多くの国が単独でなく協力を選ぶ場になったのかもしれない。最も明確な例は、地球を回る大きな宇宙ステーションで、多くの異なる国の宇宙飛行士が並んで暮らし働いてきた。同じ小さな家を分け合い、共に実験を行い、安全のため互いに頼る。地上で多くのことで対立する国々が、このステーションを飛ばし続けるため何年も協力してきた。なぜ宇宙で協力するのか。第一に、非常に高価だ。費用を分ければ、一国がすべてを払わずに済む。第二に、より安全で賢い。異なる国が異なる技能と発想をもたらし、共になら一国以上のことができる。第三に、宇宙の大きな問い——宇宙はどう始まったか、他に生命はいるか——は一つの旗でなく全人類のものだ。協力は常に容易ではない。国は信頼を築き、規則に合意し、功績を公正に分け合わねばならない。より多くの国や企業が宇宙に届くにつれ、平和で開かれた宇宙を保つ新しい合意が要る。それでも宇宙は希望の教訓を与える。課題が十分に大きければ、対立する国さえ手を組む理由を見つけられる。共に見上げるとき、下の小さな惑星でいかに多くを分かち合うかを思い出す。",
        quiz: [
          { q: "What is the clearest example of cooperation in space?", options: ["A large station where astronauts from many countries live and work together", "A single country's secret base", "An empty rocket"], answer: 0 },
          { q: "Why do countries cooperate in space?", options: ["It shares the huge cost and combines different skills and ideas", "Because space is cheap", "Because only one country can reach it"], answer: 0 },
          { q: "What hopeful lesson does space offer?", options: ["When a challenge is large enough, even rival nations can join hands", "That nations can never work together", "That space is unimportant"], answer: 0 }
        ]
      },
      {
        id: "d0918-4",
        title: "Mottainai: The Spirit of No Waste",
        level: "★★☆",
        genre: "日本",
        text: "In Japan, there is a single word that a child might hear when leaving food on a plate, or an adult might say when throwing away something still useful. The word is \"mottainai.\" It expresses a feeling of regret that something valuable is being wasted, and it reflects a deep respect for the things we use.\n\nMottainai is more than \"don't waste.\" Behind it lies the idea that every object — a grain of rice, a sheet of paper, a pair of shoes — took effort, resources, and time to make. To throw such a thing away carelessly is to disrespect all the work and nature that went into it. To feel mottainai is to notice that value and treat it with care.\n\nThis idea shapes daily life in quiet ways. People may repair a torn item instead of buying a new one, use both sides of a piece of paper, or finish every bit of a meal. Old clothes may be turned into cleaning rags; leftover food may become tomorrow's lunch.\n\nIn today's world, full of cheap goods and mountains of rubbish, the spirit of mottainai feels more important than ever. It is a gentle, personal form of caring for the planet, one small choice at a time.\n\nMottainai teaches a simple truth: the things around us are gifts of effort and nature. When we use them fully and waste less, we show respect — for the world, and for one another.",
        summaryJa: "日本には、子どもが皿に食べ物を残すとき、あるいは大人がまだ使える物を捨てるときに聞くかもしれない一つの言葉がある。「もったいない」だ。価値ある物が無駄にされていることへの惜しむ気持ちを表し、使う物への深い敬意を映す。もったいないは「無駄にするな」以上のものだ。その背後には、あらゆる物——一粒の米、一枚の紙、一足の靴——が、作るのに労力や資源、時間を要したという考えがある。そうした物を軽々しく捨てるのは、そこに注がれたすべての労働と自然への無礼だ。もったいないと感じることは、その価値に気づき、丁寧に扱うことだ。この考えは静かに日常を形づくる。新品を買う代わりに破れた物を直し、紙の両面を使い、食事を一片残さず食べる。古い服は掃除の雑巾になり、残り物は明日の弁当になる。安い物とごみの山にあふれた今日の世界で、もったいないの精神はかつてなく大切に感じられる。一度に一つの小さな選択で地球を大切にする、優しく個人的な形だ。もったいないは単純な真実を教える。周りの物は労力と自然の贈り物だ。十分に使い無駄を減らすとき、私たちは世界と互いへの敬意を示す。",
        quiz: [
          { q: "What does 'mottainai' express?", options: ["Regret that something valuable is being wasted", "Joy at throwing things away", "A wish for more waste"], answer: 0 },
          { q: "What idea lies behind mottainai?", options: ["Every object took effort, resources, and time to make, and deserves respect", "Objects appear from nothing", "Only new things have value"], answer: 0 },
          { q: "How does mottainai shape daily life?", options: ["People repair items, use both sides of paper, and finish their meals", "People buy new things constantly", "People waste as much as possible"], answer: 0 }
        ]
      },
      {
        id: "d0918-5",
        title: "Why Is the Ocean Salty?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "Anyone who has swum in the sea knows that its water tastes salty, quite unlike the fresh water of a river or lake. But have you ever wondered where all that salt comes from, and why the ocean is salty while rivers are not?\n\nThe surprising answer is that much of the ocean's salt comes from the land. When rain falls on rocks and soil, it slowly dissolves tiny amounts of minerals, including salt. Rivers carry this water, with its dissolved minerals, down to the sea. The amount in any single river is far too small to taste. But rivers have been flowing into the oceans for billions of years, carrying salt the whole time.\n\nHere is the key: when seawater evaporates into the sky to form clouds and rain, the salt is left behind. The water leaves, but the salt stays in the ocean. Over an immense span of time, this salt has built up, making the sea as salty as it is today.\n\nSome salt also comes from underwater volcanoes and vents on the ocean floor, adding minerals directly to the water.\n\nSo the saltiness of the sea is really a record of time itself — billions of years of rivers, rain, and rock, all captured in a single mouthful of seawater. The next time you taste the ocean, remember: you are tasting the slow, patient work of our whole planet.",
        summaryJa: "海で泳いだことがある人なら、その水が塩辛く、川や湖の真水とはかなり違うことを知っている。だが、その塩がどこから来るのか、なぜ海は塩辛く川はそうでないのか、考えたことはあるだろうか。意外な答えは、海の塩の多くが陸から来るということだ。雨が岩や土に降ると、塩を含むごく少量の鉱物をゆっくり溶かす。川はこの水を、溶けた鉱物とともに海へ運ぶ。一つの川の量は味わうにはあまりに少ない。だが川は何十億年も海に流れ込み、その間ずっと塩を運んできた。鍵はここだ。海水が空へ蒸発して雲や雨になるとき、塩は残される。水は去るが塩は海に留まる。途方もない時間をかけ、この塩が積み重なり、海を今日ほど塩辛くした。海底の火山や噴出口から直接水に鉱物を加える塩もある。だから海の塩辛さは時間そのものの記録だ。何十億年もの川、雨、岩が、一口の海水に捉えられている。次に海の味を感じるとき、思い出してほしい。あなたは惑星全体のゆっくりとした忍耐強い営みを味わっているのだ。",
        quiz: [
          { q: "Where does much of the ocean's salt come from?", options: ["From the land — rain dissolves minerals from rock and rivers carry them to the sea", "From the sky only", "From fish"], answer: 0 },
          { q: "Why does salt stay in the ocean?", options: ["When seawater evaporates, the water leaves but the salt is left behind", "Because salt floats up into clouds", "Because rivers remove it"], answer: 0 },
          { q: "What else adds salt to the sea?", options: ["Underwater volcanoes and vents on the ocean floor", "Boats sailing by", "Birds flying overhead"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-09-17",
    passages: [
      {
        id: "d0917-1",
        title: "The Gig Economy",
        level: "★★★",
        genre: "ビジネス",
        text: "Not long ago, most people worked one steady job for a single employer, often for many years. Today, a growing number of people work in a different way. They pick up short tasks, or \"gigs,\" one at a time — driving a passenger across town, delivering a meal, or designing a logo for a client far away. This new way of working is called the gig economy.\n\nMuch of it is powered by smartphone apps that connect workers with people who need a service, right now. A person can open an app, accept a job, complete it, and get paid, then move on to the next one. For many, this offers real freedom: they choose when to work and how much.\n\nBut the gig economy has two sides. The freedom is genuine, and it can be a lifeline for those who need flexible hours, such as students or parents. Yet gig workers often lack the safety of a regular job. They may have no paid holidays, no sick pay, and uncertain income from week to week.\n\nThis has sparked an important debate. Should gig workers be treated more like regular employees, with more protection? Or would that remove the flexibility that makes gig work attractive? Different countries are answering in different ways.\n\nThe gig economy is likely here to stay. The challenge for society is to keep its flexibility while making sure the people behind each gig are treated fairly.",
        summaryJa: "少し前まで、多くの人は一つの雇い主のもとで一つの安定した仕事を、しばしば何年も続けた。今、違う働き方をする人が増えている。短い仕事、「ギグ」を一つずつ引き受けるのだ——客を街の向こうへ運ぶ、食事を届ける、遠くの依頼主のロゴを作る、など。この新しい働き方をギグエコノミーという。その多くは、サービスを今すぐ必要とする人と働き手を結ぶスマホアプリで動く。アプリを開き、仕事を受け、こなして支払いを受け、次へ移る。多くの人にはこれが本当の自由を与える。いつ、どれだけ働くかを選べる。だがギグエコノミーには二つの面がある。自由は本物で、学生や親など柔軟な時間が要る人には命綱になりうる。だがギグワーカーはしばしば正規の仕事の安全を欠く。有給休暇も病気手当もなく、収入が週ごとに不安定なこともある。これは重要な議論を生んだ。ギグワーカーはもっと正社員のように保護されるべきか。それとも魅力である柔軟性を奪うことになるか。各国は異なる答えを出している。ギグエコノミーはおそらく定着する。社会の課題は、柔軟性を保ちつつ、各ギグの背後の人が公正に扱われるようにすることだ。",
        quiz: [
          { q: "What is the 'gig economy'?", options: ["Working by picking up short tasks one at a time, often via apps", "Working one steady job for life", "Not working at all"], answer: 0 },
          { q: "What is one benefit of gig work?", options: ["Freedom to choose when to work and how much", "Guaranteed paid holidays for all", "A fixed salary every month"], answer: 0 },
          { q: "What debate has the gig economy sparked?", options: ["Whether gig workers should get more protection, like regular employees", "Whether apps should be banned", "Whether people should work at all"], answer: 0 }
        ]
      },
      {
        id: "d0917-2",
        title: "How Lasers Help Machines See",
        level: "★★★",
        genre: "テクノロジー",
        text: "How does a self-driving car know exactly where the road, the curb, and a walking person are? One important answer is a technology called LiDAR. The name comes from combining \"light\" and \"radar,\" and it lets a machine build a detailed, three-dimensional map of the world around it, using laser light.\n\nThe idea is simple but powerful. A LiDAR device sends out many tiny, harmless pulses of laser light, thousands or millions of times each second. When a pulse hits an object, it bounces back. By measuring exactly how long the light took to return, the device can calculate the distance to that point with great precision.\n\nDo this for millions of points, and you get a \"point cloud\" — a cloud of dots that together form a sharp 3D picture of everything nearby: cars, trees, walls, and people. Unlike a normal camera, LiDAR works well in the dark and gives exact distances, not just a flat image.\n\nLiDAR is used in many places today. It helps self-driving cars and robots move safely, guides drones, and even sits inside some phones to improve photos and games. Scientists also use it from aircraft to map forests, cities, and ancient ruins hidden under trees.\n\nBy turning pulses of light into precise measurements, LiDAR gives machines a kind of sight. It is a quiet example of how a clever use of physics can help our tools understand the shape of the world.",
        summaryJa: "自動運転車は、道路や縁石、歩く人の位置をどう正確に知るのか。重要な答えの一つが「ライダー(LiDAR)」という技術だ。名前は「光(light)」と「レーダー(radar)」を合わせたもので、レーザー光を使い、周囲の世界の詳細な立体地図を機械に作らせる。考えは単純だが強力だ。ライダー装置は無害な小さなレーザー光のパルスを、毎秒何千、何百万回も放つ。パルスが物に当たると跳ね返る。光が戻るのにかかった時間を正確に測ることで、その点までの距離を高い精度で計算できる。これを何百万もの点で行うと「点群」——近くのすべて、車や木、壁、人を鮮明な3Dで形づくる点の雲——が得られる。普通のカメラと違い、ライダーは暗闇でもよく働き、平らな画像でなく正確な距離を与える。ライダーは今、多くの場所で使われる。自動運転車やロボットの安全な移動を助け、ドローンを導き、写真やゲームを良くするため一部の電話にも入っている。科学者は航空機から森や都市、木の下に隠れた古代遺跡の地図作りにも使う。光のパルスを正確な測定に変え、ライダーは機械に一種の視覚を与える。物理の巧みな利用が道具に世界の形を理解させる静かな一例だ。",
        quiz: [
          { q: "What does LiDAR use to map the world?", options: ["Pulses of laser light that bounce off objects", "Loud sounds only", "Paint and brushes"], answer: 0 },
          { q: "How does LiDAR measure distance?", options: ["By measuring how long the light takes to return", "By guessing", "By weighing the object"], answer: 0 },
          { q: "What is one advantage of LiDAR over a normal camera?", options: ["It works well in the dark and gives exact distances", "It only works in bright light", "It cannot measure anything"], answer: 0 }
        ]
      },
      {
        id: "d0917-3",
        title: "Why Countries Trade",
        level: "★★☆",
        genre: "世界情勢",
        text: "Look around your home, and you will find things from all over the world: a phone designed in one country and built in another, coffee grown far away, clothes sewn on a different continent. This is possible because countries trade with one another, buying and selling goods across borders. But why do nations trade at all?\n\nThe main reason is that no country has everything, or does everything best. Some lands are rich in oil, others in good farmland, and others in skilled workers or advanced factories. By selling what they make well and buying what others make well, countries can all end up with more than if each tried to make everything alone.\n\nTrade also lowers prices and widens choice. Because factories can sell to the whole world, they can make goods in large numbers, which brings costs down. Shoppers enjoy fruits out of season, and technology from distant places.\n\nBut trade is not always simple. When cheap goods arrive from abroad, local businesses may struggle, and some workers can lose their jobs. Governments must think about how to help those affected. There are also arguments about fairness and about depending too much on other countries.\n\nDespite these challenges, trade has helped lift billions of people out of poverty and connected the world as never before. When it is fair and well managed, trade allows different nations to share their strengths — and everyone can benefit.",
        summaryJa: "家を見回すと、世界中の物が見つかる。ある国で設計され別の国で作られた電話、遠くで育ったコーヒー、別の大陸で縫われた服。これは国同士が貿易し、国境を越えて物を売り買いするから可能だ。だがなぜ国は貿易するのか。主な理由は、すべてを持つ国も、すべてを最もうまくやる国もないからだ。石油に富む土地、良い農地に富む土地、熟練工や先進的な工場に富む土地がある。うまく作れる物を売り、他がうまく作る物を買うことで、各国が単独ですべてを作ろうとするより多くを得られる。貿易は価格も下げ選択も広げる。工場は世界中に売れるので大量に作れ、費用が下がる。買い物客は季節外れの果物や遠い土地の技術を楽しめる。だが貿易は常に単純ではない。安い物が海外から届くと地元企業が苦しみ、職を失う労働者も出うる。政府は影響を受けた人をどう助けるか考えねばならない。公正さや、他国に頼りすぎることへの議論もある。こうした課題はあれ、貿易は何十億もの人を貧困から救い、かつてなく世界をつないできた。公正でよく管理されれば、貿易は各国の強みを分かち合わせ、皆が恩恵を得られる。",
        quiz: [
          { q: "What is the main reason countries trade?", options: ["No country has everything or does everything best", "Because every country makes the same things", "Because trade is required by nature"], answer: 0 },
          { q: "How does trade lower prices?", options: ["Factories can sell to the whole world and make goods in large numbers", "By making fewer goods", "By closing all factories"], answer: 0 },
          { q: "What is one challenge of trade?", options: ["Cheap goods from abroad can make local businesses struggle", "It always helps everyone equally", "It has no downsides at all"], answer: 0 }
        ]
      },
      {
        id: "d0917-4",
        title: "Shodo: The Art of Japanese Calligraphy",
        level: "★★☆",
        genre: "日本",
        text: "In Japan, writing can be a form of art. This art is called \"shodo,\" which means \"the way of writing.\" Using a brush, black ink, and a sheet of white paper, a person paints beautiful characters, turning simple words into something to admire on a wall.\n\nShodo may look effortless, but it takes great skill and years of practice. The artist must hold the brush just so, control the flow of ink, and move with a steady, confident hand. A single character is often written in one smooth motion, and it cannot be fixed afterward. If the hand shakes or hesitates, it shows. In this way, the finished work captures the artist's state of mind at that very moment.\n\nBecause of this, shodo is about far more than neat handwriting. It teaches focus, patience, and calm. Many people practice it not to become famous artists, but to quiet their minds and enjoy the simple beauty of the brush on paper.\n\nChildren in Japan learn the basics of calligraphy at school, and many keep it as a lifelong hobby. At New Year, people often write hopeful words for the year ahead, a cherished tradition.\n\nShodo shows a beautiful idea: that even something as everyday as writing can become a path to art, discipline, and peace of mind. In each brushstroke lies not only a word, but a small piece of the person who made it.",
        summaryJa: "日本では、書くことが芸術になりうる。この芸術を「書道」——書くことの道——という。筆と墨、白い紙を使い、美しい文字を描き、単純な言葉を壁で愛でるものに変える。書道は楽々に見えるかもしれないが、大きな技と長年の練習を要する。書き手は筆をちょうどよく持ち、墨の流れを操り、安定した自信ある手で動かねばならない。一つの文字はしばしば一続きの動きで書かれ、後から直せない。手が震えたりためらったりすれば表れる。こうして完成した作品は、まさにその瞬間の書き手の心の状態を捉える。だから書道はきれいな手書き以上のものだ。集中、忍耐、平静を教える。多くの人は有名な芸術家になるためでなく、心を静め、紙の上の筆の素朴な美を楽しむために書く。日本の子どもは学校で書道の基礎を学び、多くが生涯の趣味として続ける。正月には、来る年への希望の言葉を書くことが多く、大切にされる伝統だ。書道は美しい考えを示す。書くという日常のことさえ、芸術と鍛錬と心の平安への道になりうる。一筆一筆に、言葉だけでなく、それを作った人の小さな一片が宿る。",
        quiz: [
          { q: "What is 'shodo'?", options: ["The Japanese art of calligraphy, painting characters with a brush and ink", "A type of dance", "A kind of food"], answer: 0 },
          { q: "Why can a shodo character not be fixed afterward?", options: ["It is written in one smooth motion, showing the artist's state of mind", "Because the ink is invisible", "Because it is typed by a machine"], answer: 0 },
          { q: "What does practicing shodo teach, beyond neat writing?", options: ["Focus, patience, and calm", "How to write faster only", "Nothing useful"], answer: 0 }
        ]
      },
      {
        id: "d0917-5",
        title: "A Surprise on Distant Pluto",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "Far out at the edge of our solar system lies Pluto, a small, cold world so distant that from its surface the sun would look like just a bright star. For a long time, we knew almost nothing about it. But as spacecraft and telescopes have studied Pluto, they keep finding surprises. One recent discovery is especially strange: signs that a liquid may have flowed across its frozen surface.\n\nOn Earth, of course, it is water that flows in rivers and lakes. But Pluto is far too cold for liquid water; there, water is frozen as hard as rock. Instead, scientists think the flowing liquid may have been something else entirely: liquid nitrogen, a gas on Earth that becomes a liquid only in extreme cold.\n\nResearchers noticed dark features on a vast, icy plain on Pluto. These marks look as if liquid nitrogen rose up through cracks from deep below the surface and spread out, before freezing again. If this is correct, it means Pluto is not a dead, unchanging ball of ice, but a world where things still slowly move and change.\n\nThis matters because it teaches us how varied and active worlds can be, even far from the sun's warmth. Every discovery like this widens our sense of what is possible in the universe.\n\nPluto reminds us that even the coldest, most distant places can hold secrets, waiting quietly for curious minds to find them.",
        summaryJa: "太陽系の端の遠くに冥王星がある。小さく冷たい世界で、あまりに遠いため、その表面から太陽は明るい星の一つのように見えるだろう。長い間、私たちはほとんど何も知らなかった。だが探査機や望遠鏡が冥王星を調べるにつれ、次々と驚きが見つかる。最近の発見の一つは特に奇妙だ。凍った表面を液体が流れたかもしれない痕跡だ。もちろん地球では、川や湖を流れるのは水だ。だが冥王星は液体の水には冷たすぎ、そこでは水は岩のように固く凍る。代わりに科学者は、流れた液体は全く別のもの——地球では気体だが極寒でのみ液体になる液体窒素——かもしれないと考える。研究者は冥王星の広大な氷の平原の暗い特徴に気づいた。この跡は、液体窒素が表面深くの割れ目から上がって広がり、再び凍ったかのように見える。もし正しければ、冥王星は死んで変わらない氷の球でなく、今も物事がゆっくり動き変わる世界だということだ。これは、太陽の温もりから遠くても、世界がいかに多様で活発でありうるかを教える点で重要だ。こうした発見は、宇宙で何が可能かの感覚を広げる。冥王星は、最も冷たく遠い場所さえ秘密を宿し、好奇心ある心の発見を静かに待っていると思い出させる。",
        quiz: [
          { q: "What surprising sign did scientists find on Pluto?", options: ["Signs that a liquid may have flowed across its frozen surface", "A large city", "Green forests"], answer: 0 },
          { q: "Why couldn't the flowing liquid be water?", options: ["Pluto is far too cold, so water is frozen as hard as rock", "Because there is no water in space", "Because water flows only uphill"], answer: 0 },
          { q: "What does this discovery suggest about Pluto?", options: ["It is not a dead ball of ice, but a world that still slowly changes", "It is exactly like Earth", "It is made of metal"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-09-16",
    passages: [
      {
        id: "d0916-1",
        title: "How Companies Set Their Prices",
        level: "★★★",
        genre: "ビジネス",
        text: "Have you ever wondered how a shop decides that a coffee costs three dollars, not two or five? Setting a price may look simple, but it is one of the most important and difficult decisions a business makes. Price too high, and customers walk away. Price too low, and the company loses money. Getting it right is a real skill.\n\nCompanies usually think about three main things. The first is cost. A business must charge more than it spends to make and sell a product, or it cannot survive. The second is the customer. How much are people willing to pay? A price must feel fair for the value they receive. The third is competition. If a rival sells something similar for less, a high price may be hard to defend.\n\nPrices are also full of psychology. A price of $9.99 feels much smaller than $10, even though the difference is tiny. A very cheap product may make people wonder if the quality is poor, while a higher price can suggest luxury.\n\nSometimes companies change prices to match demand. A plane ticket may cost more during a holiday, and a coat may be cheaper at the end of winter. This is called adjusting to what people want and when.\n\nIn the end, a good price is a careful balance. It must cover costs, respect the customer, beat no one unfairly, and still leave the company healthy enough to keep serving people tomorrow.",
        summaryJa: "店がコーヒーを2ドルでも5ドルでもなく3ドルとどう決めるか、考えたことはあるだろうか。値付けは単純に見えて、企業が下す最も重要で難しい決断の一つだ。高すぎれば客は去り、低すぎれば損をする。正しく決めるのは本物の技能だ。企業はふつう三つを考える。第一はコスト。作って売る費用より高く売らねば存続できない。第二は客。人はいくら払う気があるか。受け取る価値に見合い公正だと感じられねばならない。第三は競争。競合が似た物を安く売れば、高値は守りにくい。値段には心理も詰まっている。9.99ドルは差はわずかでも10ドルよりずっと安く感じる。極端に安いと品質を疑われ、高いと高級さを示しうる。需要に合わせ値を変えることもある。飛行機の切符は休暇中に高く、コートは冬の終わりに安い。人が何をいつ望むかへの調整だ。良い値段は慎重なバランスだ。費用を賄い、客を尊重し、不当に誰かをたたかず、明日も人に仕える健全さを企業に残す。",
        quiz: [
          { q: "What are the three main things companies think about when setting a price?", options: ["Cost, the customer, and competition", "Color, size, and weight", "The weather, the day, and the season"], answer: 0 },
          { q: "How does psychology affect prices?", options: ["A price of $9.99 feels much smaller than $10, though the difference is tiny", "Prices have no effect on feelings", "People always ignore the price"], answer: 0 },
          { q: "Why might a plane ticket cost more during a holiday?", options: ["Companies adjust prices to match demand", "Because planes fly slower then", "Because tickets are free otherwise"], answer: 0 }
        ]
      },
      {
        id: "d0916-2",
        title: "How Weather Forecasts Are Made",
        level: "★★★",
        genre: "テクノロジー",
        text: "Each morning, millions of people check the weather before deciding what to wear or whether to carry an umbrella. We trust these forecasts, yet few of us stop to ask how anyone can predict tomorrow's sky. The answer is a remarkable mix of measurement, mathematics, and powerful computers.\n\nIt begins with data. All over the world, thousands of stations, balloons, ships, and satellites constantly measure the temperature, wind, pressure, and moisture of the air. This ocean of information gives scientists a picture of the atmosphere right now.\n\nNext comes the science. The air follows the laws of physics, so scientists write these laws as equations. Using them, a computer can calculate how the current weather is likely to change over the coming hours and days. Because the atmosphere is huge and complex, this requires some of the most powerful computers on Earth, running trillions of calculations.\n\nEven so, forecasts are not perfect. The atmosphere is so sensitive that a tiny change can grow into a big difference days later. This is why a forecast for tomorrow is usually reliable, but one for next week is only a good guess.\n\nTo handle this, forecasters often run their models many times with slightly different starting points, then see how the results agree. When they mostly agree, confidence is high.\n\nSo a weather forecast is not magic. It is science, data, and computing power, working together to give us a helpful glimpse of the future.",
        summaryJa: "毎朝、何百万もの人が服装や傘を決める前に天気を確認する。私たちは予報を信頼するが、なぜ明日の空を予測できるのか問う人は少ない。答えは、観測と数学と強力なコンピューターの見事な組み合わせだ。まずデータから始まる。世界中で何千もの観測所や気球、船、衛星が絶えず空気の気温、風、気圧、湿度を測る。この情報の海が、今この瞬間の大気の姿を科学者に与える。次に科学だ。空気は物理法則に従うので、科学者はこれを方程式で書く。それを使い、コンピューターは今の天気がこれからの数時間・数日でどう変わりそうかを計算する。大気は巨大で複雑なため、地球有数の強力なコンピューターが何兆もの計算を行う必要がある。それでも予報は完璧ではない。大気は非常に敏感で、わずかな変化が数日後に大きな差になる。だから明日の予報はふつう信頼できても、来週のは良い推測にすぎない。これに対処するため、予報士は開始条件を少し変えて模型を何度も走らせ、結果の一致を見る。ほぼ一致すれば確信は高い。天気予報は魔法ではない。科学とデータと計算力が協力し、未来の有用な一片を見せてくれる。",
        quiz: [
          { q: "How does making a forecast begin?", options: ["With data measured by stations, balloons, ships, and satellites", "With a lucky guess", "By asking people how they feel"], answer: 0 },
          { q: "Why does forecasting need very powerful computers?", options: ["The atmosphere is huge and complex, needing trillions of calculations", "Because computers are cheap", "Because no math is involved"], answer: 0 },
          { q: "Why is a forecast for next week only a good guess?", options: ["The atmosphere is so sensitive that tiny changes grow into big differences", "Because scientists do not care about next week", "Because the future never changes"], answer: 0 }
        ]
      },
      {
        id: "d0916-3",
        title: "Keeping Children Safe Online",
        level: "★★☆",
        genre: "世界情勢",
        text: "Children today grow up with the internet. They watch videos, play games, chat with friends, and increasingly talk to smart programs. The online world offers wonderful chances to learn and connect. But it also brings dangers, and around the world, governments and parents are asking how to keep young people safe.\n\nThe worries are serious. Some apps are designed to keep users watching for hours, which can harm sleep and study. Children may see content that is not right for their age, or meet strangers who wish them harm. There are also concerns about how much personal data companies collect from young users.\n\nIn response, some governments are taking action. A number are considering age limits for social apps, or rules that force companies to make their services safer for children by default. Others focus on teaching digital skills, so that young people learn to think carefully about what they see and share.\n\nBut the questions are hard. Rules that are too strict may cut children off from useful tools and friendships. Rules that are too weak may fail to protect them. And children are often clever at finding ways around limits.\n\nMost experts agree that no single answer is enough. Safe technology, wise laws, good teaching, and caring adults must all work together. The goal is not to shut children out of the digital world, but to help them explore it safely, and grow into thoughtful, confident users.",
        summaryJa: "今日の子どもはインターネットとともに育つ。動画を見て、ゲームをし、友人と話し、ますます賢いプログラムとも話す。オンラインの世界は学びとつながりの素晴らしい機会を与える。だが危険も伴い、世界中で政府や親が、若者をどう守るか問うている。懸念は深刻だ。何時間も見続けさせるよう作られたアプリは睡眠や勉強を害しうる。子どもは年齢に不適切な内容を見たり、害をなそうとする見知らぬ人に出会ったりしうる。企業が若い利用者からどれだけ個人データを集めるかへの懸念もある。これに応え、行動する政府もある。SNSの年齢制限や、既定で子どもに安全にするよう企業に義務づける規則を検討する国もある。デジタル技能の教育に力を入れ、見るもの共有するものを慎重に考えられるようにする国もある。だが難問だ。厳しすぎる規則は有用な道具や友情から子どもを切り離しかねず、緩すぎれば守れない。子どもは制限の回避に長けていることも多い。多くの専門家は、唯一の答えでは足りないと認める。安全な技術、賢い法、良い教育、心ある大人がすべて協力せねばならない。目標は子どもを締め出すことでなく、安全に探求し、思慮深く自信ある利用者に育つのを助けることだ。",
        quiz: [
          { q: "What is one worry about children online?", options: ["Some apps keep users watching for hours, harming sleep and study", "The internet is always completely safe", "Children learn nothing online"], answer: 0 },
          { q: "What action are some governments considering?", options: ["Age limits for social apps and rules to make services safer by default", "Banning all schools", "Giving children no help at all"], answer: 0 },
          { q: "What do most experts agree on?", options: ["No single answer is enough; technology, laws, teaching, and adults must work together", "Only strict rules matter", "Nothing can be done"], answer: 0 }
        ]
      },
      {
        id: "d0916-4",
        title: "Japan's Manga and Anime",
        level: "★★☆",
        genre: "日本",
        text: "Around the world, millions of people read Japanese comics, called \"manga,\" and watch Japanese animation, called \"anime.\" What began as entertainment in Japan has grown into a cultural force loved on every continent. These colorful stories are now one of the ways the world comes to know Japan.\n\nManga are printed comics, often in black and white, telling stories of every kind. There are manga about sports, cooking, history, science, adventure, and quiet daily life. Because there is a manga for almost every interest and age, reading them is a normal part of life for many people in Japan, young and old.\n\nAnime brings these and other stories to life on screen, with movement, color, music, and voice. Some anime are made for children, but many explore deep and serious themes, from friendship and loss to courage and dreams. The best are treated as true works of art.\n\nPart of the appeal is the storytelling. Japanese manga and anime often take their time, letting characters grow and feelings deepen. Readers and viewers around the world say they feel a strong connection to these characters.\n\nThe success of manga and anime has become big business, and it draws many fans to visit Japan, learn Japanese, and explore its culture. From a simple drawing on a page, a whole world has opened — proof that a good story, well told, can travel anywhere.",
        summaryJa: "世界中で、何百万もの人が日本の漫画「マンガ」を読み、日本のアニメーション「アニメ」を見る。日本の娯楽として始まったものが、あらゆる大陸で愛される文化の力に育った。この色鮮やかな物語は、今や世界が日本を知る道の一つだ。マンガは印刷された漫画で、しばしば白黒で、あらゆる種類の物語を語る。スポーツ、料理、歴史、科学、冒険、静かな日常のマンガがある。ほぼどんな興味や年齢にもマンガがあるので、読むことは日本の老若の多くにとって暮らしの当たり前の一部だ。アニメはこれらや他の物語を、動きと色、音楽、声で画面に生き生きと描く。子ども向けもあるが、友情や喪失、勇気、夢など深く真剣な主題を探るものも多い。最良のものは真の芸術作品として扱われる。魅力の一部は物語り方だ。日本のマンガやアニメはしばしば時間をかけ、登場人物を育て感情を深める。世界中の読者や視聴者は、これらの人物に強いつながりを感じるという。マンガとアニメの成功は大きな事業になり、多くのファンを日本訪問や日本語学習、文化探求へ引き寄せる。一枚の絵から世界が開いた。よく語られた良い物語はどこへでも旅できる証だ。",
        quiz: [
          { q: "What are 'manga' and 'anime'?", options: ["Japanese comics and Japanese animation", "Types of Japanese food", "Kinds of cars"], answer: 0 },
          { q: "What is said about the themes of anime?", options: ["Many explore deep and serious themes, and the best are treated as art", "They are always only for small children", "They never tell any story"], answer: 0 },
          { q: "What effect has their success had?", options: ["It draws many fans to visit Japan, learn Japanese, and explore its culture", "It made people dislike Japan", "It stopped people from reading"], answer: 0 }
        ]
      },
      {
        id: "d0916-5",
        title: "The Mystery of Fingerprints",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "Look closely at the tips of your fingers, and you will see tiny lines forming loops, arches, and swirls. These are your fingerprints. One of the most fascinating facts about them is that no two people have exactly the same pattern — not even identical twins. Your fingerprints are truly your own.\n\nFingerprints form before birth, while a baby is still growing. The pattern depends partly on genes and partly on tiny, random events in the womb. Because these small events are never quite the same, every finger ends up with a unique design. Once formed, the pattern stays the same for your whole life.\n\nBut why do we have them at all? Scientists are not completely sure, but there are good ideas. The ridges may help our fingers grip objects, much like the tread on a tire. They may also make our sense of touch more sensitive, helping us feel fine textures.\n\nBecause each fingerprint is unique and unchanging, it has become a powerful way to tell people apart. For over a hundred years, fingerprints have helped identify people, and today many phones unlock with a simple touch of a finger.\n\nSo a fingerprint is more than a mark you leave on a glass. It is a tiny, personal signature, formed before you were born, carried on your hand for life — a small, quiet reminder that every single person is one of a kind.",
        summaryJa: "指先をよく見ると、輪や弓、渦を描く小さな線が見える。これが指紋だ。最も魅力的な事実の一つは、同じ模様を持つ人は二人といないことだ——一卵性の双子でさえも。指紋は本当にあなただけのものだ。指紋は生まれる前、赤ちゃんが育つ間に形づくられる。模様は一部は遺伝子に、一部は子宮内の小さく無作為な出来事による。これらの小さな出来事は決して同じでないので、どの指も独自の意匠になる。一度できると模様は一生同じままだ。だがなぜ指紋があるのか。科学者は完全には確かでないが、良い説がある。この隆起はタイヤの溝のように物を握るのを助けるかもしれない。触覚をより敏感にし、細かな手触りを感じる助けにもなりうる。指紋は独自で変わらないため、人を見分ける強力な方法になった。100年以上、指紋は人の識別を助け、今では多くの電話が指の一触れで解錠する。だから指紋はグラスに残す跡以上のものだ。生まれる前に形づくられ、生涯手に携える小さな個人の署名であり、一人一人が唯一無二だという静かな小さな証だ。",
        quiz: [
          { q: "What is remarkable about fingerprints?", options: ["No two people have exactly the same pattern, not even identical twins", "Everyone has the same fingerprint", "They change every year"], answer: 0 },
          { q: "Why might we have fingerprint ridges?", options: ["They may help grip objects and make touch more sensitive", "They make hands heavier", "They have no possible use"], answer: 0 },
          { q: "Why have fingerprints become a way to tell people apart?", options: ["Each one is unique and stays the same for life", "Because they all look alike", "Because they disappear quickly"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-09-15",
    passages: [
      {
        id: "d0915-1",
        title: "Why Companies Study Their Competitors",
        level: "★★☆",
        genre: "ビジネス",
        text: "No business exists alone. For almost every product or service, there are rival companies trying to win the same customers. Because of this, smart companies spend real time and effort studying their competitors. This practice can be one of the most useful habits in business.\n\nWhy look at your rivals so closely? First, to learn. A competitor may have found a clever way to lower costs, please customers, or reach new markets. By watching carefully, a company can learn from others' successes without paying the price of every mistake itself.\n\nStudying rivals also helps a company understand its own strengths and weaknesses. When you compare your product to another, you see clearly where you are ahead and where you are falling behind. This honest view is hard to get by looking only at yourself.\n\nThere is a warning, however. Watching competitors too closely can become a trap. A company that only copies others will always be one step behind, and may forget what makes it special. The best companies learn from rivals but still follow their own vision.\n\nGood competitor study is fair and honest. It means reading public information, trying products openly, and listening to customers — not stealing secrets. In the end, competitors are not only a threat. They are also teachers, pushing every company to keep improving, which in the end is good for customers too.",
        summaryJa: "一つで存在する事業はない。ほぼすべての製品やサービスに、同じ客を得ようとする競合企業がいる。だから賢い企業は競合を研究するのに実際の時間と労力を費やす。これはビジネスで最も有用な習慣の一つになりうる。なぜ競合をそれほど注意深く見るのか。第一に学ぶためだ。競合はコスト削減や顧客満足、新市場開拓の巧みな方法を見つけたかもしれない。注意深く見れば、あらゆる失敗の代償を自ら払わずに他者の成功から学べる。競合研究は自社の強みと弱みの理解も助ける。自社製品を他と比べると、どこで先行しどこで遅れているかが明確に見える。この正直な視点は自分だけを見ていては得にくい。ただし警告もある。競合を見すぎると罠になりうる。他者を真似るだけの企業は常に一歩遅れ、自社の特別さを忘れかねない。最良の企業は競合から学びつつ自らの理念に従う。良い競合研究は公正で正直だ。公開情報を読み、製品を公然と試し、客の声を聞くことで、秘密を盗むことではない。競合は脅威だけでなく、各企業を改善へ押しやる教師でもあり、結局は客のためにもなる。",
        quiz: [
          { q: "Why do smart companies study their competitors?", options: ["To learn from others' successes without paying for every mistake themselves", "To copy them exactly forever", "To ignore their own customers"], answer: 0 },
          { q: "How does studying rivals help a company see itself?", options: ["It reveals its own strengths and weaknesses more clearly", "It hides all its weaknesses", "It has no effect on self-knowledge"], answer: 0 },
          { q: "What warning does the passage give?", options: ["A company that only copies others will always be one step behind", "You should steal your rivals' secrets", "You should never look at competitors"], answer: 0 }
        ]
      },
      {
        id: "d0915-2",
        title: "AI in the Classroom",
        level: "★★★",
        genre: "テクノロジー",
        text: "Artificial intelligence is quietly entering schools around the world. Some students now use AI tools to explain difficult ideas, check their writing, or practice a new language. Teachers, too, are testing AI to help plan lessons and mark simple work. This new arrival brings both exciting hopes and serious questions.\n\nThe hopes are real. A good AI tool can act like a patient private tutor, always ready to explain a topic in a new way until it makes sense. It can give each student attention that is hard to provide in a class of thirty. For a learner who is shy or falling behind, this gentle, private help can be a gift.\n\nBut there are worries too. If students let AI do their thinking for them, they may not truly learn. The goal of school is to build strong minds, not just to produce finished answers. Teachers must guide students to use these tools as helpers, not as shortcuts that skip the effort of learning.\n\nThere is also the question of data. To help a student, an AI system may collect information about them. Schools and companies must protect this data carefully, especially since the students are often children.\n\nUsed wisely, AI could make learning richer and fairer, reaching students who need extra help. Used carelessly, it could weaken the very skills school is meant to build. The tool is powerful; how we use it will decide whether it truly helps.",
        summaryJa: "人工知能(AI)が世界中の学校に静かに入りつつある。難しい考えの説明や作文の確認、新しい言語の練習にAIを使う生徒もいる。教師も授業計画や簡単な採点にAIを試している。この新参者は、わくわくする希望と深刻な問いの両方をもたらす。希望は本物だ。良いAIは、分かるまで新しい仕方で説明する辛抱強い家庭教師のように働ける。30人の教室では難しい個別の注意を各生徒に与えられる。内気だったり遅れたりする学習者には、この優しく私的な助けは贈り物になりうる。だが懸念もある。生徒がAIに考えを任せると、真に学べないかもしれない。学校の目的は完成した答えを作ることでなく強い頭脳を育てることだ。教師は、学びの労を飛ばす近道でなく助けとして使うよう導かねばならない。データの問題もある。生徒を助けるためAIは情報を集めうる。特に生徒はしばしば子どもなので、学校と企業はこのデータを慎重に守らねばならない。賢く使えばAIは学びを豊かで公正にし、助けの要る生徒に届きうる。不注意に使えば、学校が育てるべき技能を弱めうる。道具は強力で、使い方が本当に役立つかを決める。",
        quiz: [
          { q: "How can a good AI tool help a student?", options: ["Like a patient tutor, explaining a topic in new ways and giving individual attention", "By doing all the homework so students never think", "By replacing the school entirely"], answer: 0 },
          { q: "What is the main worry about students using AI?", options: ["If AI does their thinking, they may not truly learn", "That it is too boring", "That it makes school too easy to enjoy"], answer: 0 },
          { q: "Why must student data be protected especially carefully?", options: ["Because the students are often children", "Because data is worthless", "Because schools never use computers"], answer: 0 }
        ]
      },
      {
        id: "d0915-3",
        title: "A World Growing Older",
        level: "★★★",
        genre: "世界情勢",
        text: "Something remarkable is happening to the human family: on average, we are getting older. In many countries, people are living longer than ever before, while families are choosing to have fewer children. As a result, the share of older people in the world is steadily rising. This quiet change will shape life for everyone in the coming decades.\n\nThe reasons behind it are mostly good news. Better food, cleaner water, and improved medicine mean that people survive illnesses that once ended lives early. Living into one's eighties or nineties, once rare, is becoming common in many places.\n\nBut an older world brings real challenges. With fewer young workers and more retired people, countries must think carefully about how to care for everyone. Who will do the work, pay for pensions, and look after those who need help? These are not easy questions.\n\nThere are also opportunities. Older people carry knowledge and experience, and many wish to keep working, learning, and helping others long past the old retirement age. Societies that welcome this can gain a great deal.\n\nDifferent countries are trying many answers: encouraging people to work longer if they wish, supporting families who want children, and building better care for the elderly. There is no single solution.\n\nWhat is certain is that an aging world is not a problem to fear, but a new reality to plan for — wisely, and with respect for every generation.",
        summaryJa: "人類という家族に驚くべきことが起きている。平均して、私たちは年を取りつつある。多くの国で人はかつてなく長生きし、家族はより少ない子どもを選ぶ。結果、世界の高齢者の割合は着実に上がっている。この静かな変化は、これからの数十年、皆の暮らしを形づくる。背景の理由はおおむね良い知らせだ。より良い食、清潔な水、進歩した医療により、かつて早く命を奪った病を人は生き延びる。80代90代まで生きることは、かつて稀だったが多くの地域で普通になりつつある。だが高齢化した世界は現実の課題も招く。若い働き手が減り退職者が増える中、国は皆をどう支えるか慎重に考えねばならない。誰が働き、年金を賄い、助けの要る人を世話するのか。容易な問いではない。機会もある。高齢者は知識と経験を持ち、多くは旧来の定年をはるかに過ぎても働き学び人を助け続けたいと願う。これを歓迎する社会は多くを得られる。各国は多くの答えを試みる。望む人がより長く働けるよう促し、子を望む家族を支え、高齢者へのより良いケアを築く。唯一の解はない。確かなのは、高齢化する世界は恐れるべき問題でなく、賢く各世代を尊重して備えるべき新しい現実だということだ。",
        quiz: [
          { q: "Why is the world's population growing older?", options: ["People live longer thanks to better food, water, and medicine, and families have fewer children", "Because children are no longer born anywhere", "Because medicine has gotten worse"], answer: 0 },
          { q: "What is one challenge of an older world?", options: ["With fewer young workers and more retired people, caring for everyone is harder", "There is too much work for too many young people", "Nothing changes at all"], answer: 0 },
          { q: "How does the passage suggest we view an aging world?", options: ["Not as a problem to fear, but a new reality to plan for with respect for every generation", "As a disaster with no solutions", "As something to ignore"], answer: 0 }
        ]
      },
      {
        id: "d0915-4",
        title: "Why Japanese People Take Off Their Shoes",
        level: "★★☆",
        genre: "日本",
        text: "If you visit a home in Japan, the first thing you will likely do is take off your shoes. Just inside the door is a small lowered space where shoes are left, and from there you step up into the house in socks or slippers. To many visitors this is surprising, but to people in Japan it is completely natural.\n\nThe custom has practical roots. Streets carry dust and dirt, and leaving shoes at the door keeps the home clean. This matters even more in traditional Japanese houses, where people may sit and even sleep on soft floor mats called tatami. No one wants outdoor dirt where they rest and eat.\n\nBut the habit is about more than cleanliness. Removing your shoes marks a gentle border between the outside world and the private, peaceful space of the home. Stepping out of your shoes is a small way of leaving the busy street behind and entering a calmer place.\n\nThe custom appears in many other spots too. People often remove their shoes in some traditional restaurants, temples, and even certain schools and clinics. Special slippers may be provided, sometimes even a separate pair just for the bathroom.\n\nFor a visitor, following this custom is an easy and welcome sign of respect. Slipping off your shoes at the door is more than a rule of cleaning. It is a quiet daily act that separates rest from the rush of the world outside.",
        summaryJa: "日本の家を訪ねると、まずすることはたいてい靴を脱ぐことだ。ドアのすぐ内側に靴を置く一段低い小さな空間があり、そこから靴下やスリッパで家に上がる。多くの訪問者には驚きだが、日本の人には全く自然だ。この習慣には実用的な由来がある。通りはほこりや泥を運び、玄関で靴を脱げば家を清潔に保てる。柔らかい床マット「畳」に座り、時に眠る伝統的な日本家屋ではなおさら大切だ。休み食べる場所に外の汚れを持ち込みたい人はいない。だがこの習慣は清潔さ以上のものだ。靴を脱ぐことは、外の世界と家の私的で穏やかな空間との優しい境を示す。靴を脱ぐのは、忙しい通りを後にして、より静かな場所に入る小さな方法だ。この習慣は他の多くの場所にもある。一部の伝統的な料理店や寺、特定の学校や診療所でも靴を脱ぐ。専用のスリッパが用意され、時にトイレ専用の一足まである。訪問者にとって、この習慣に従うのは容易で歓迎される敬意の印だ。玄関で靴を脱ぐことは掃除の規則以上のもので、休息を外の世界の慌ただしさから隔てる、静かな日々の行為だ。",
        quiz: [
          { q: "What practical reason is there for removing shoes at the door?", options: ["It keeps the home clean, since streets carry dust and dirt", "It makes shoes last longer", "It is required by law"], answer: 0 },
          { q: "Beyond cleanliness, what does removing shoes mark?", options: ["A gentle border between the outside world and the private, peaceful home", "The end of the day", "That guests must leave"], answer: 0 },
          { q: "Where else does this custom appear?", options: ["Some traditional restaurants, temples, and certain schools and clinics", "Only in airports", "Nowhere but private homes"], answer: 0 }
        ]
      },
      {
        id: "d0915-5",
        title: "Why the Sea Rises and Falls",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "If you spend a day at the seaside, you may notice something strange. In the morning, the water reaches far up the beach; by afternoon, it has pulled back, leaving wet sand and rock. Then it slowly returns. These daily rises and falls of the sea are called tides, and their cause reaches all the way to the moon.\n\nThe moon, though far away, pulls on the Earth with a force called gravity. This pull is strongest on the side of the Earth facing the moon. There, the ocean water bulges slightly toward the moon, making the sea rise. On the opposite side of the Earth, another bulge forms as well. As the Earth turns each day, different coasts pass through these bulges, and so the tides rise and fall.\n\nThe sun also pulls on the oceans, though less strongly than the closer moon. When the sun and moon line up, their pulls combine, and the tides become especially large. When they sit at right angles, the tides are smaller.\n\nTides matter for many people. Sailors and fishers plan their trips around them, and some coastal creatures live their whole lives to the rhythm of the water. In some places, the rising and falling water is even used to make electricity.\n\nSo the gentle movement of the sea is not random. It is the Earth, the moon, and the sun, quietly dancing together across the sky.",
        summaryJa: "海辺で一日過ごすと、不思議なことに気づくかもしれない。朝、水は浜の奥まで届き、午後には引いて濡れた砂や岩を残す。そしてゆっくり戻る。この海の日々の満ち引きを「潮汐(タイド)」といい、その原因ははるか月にまで及ぶ。月は遠いが、重力という力で地球を引く。この引きは月に面した側で最も強い。そこでは海水がわずかに月へふくらみ、海が満ちる。地球の反対側にももう一つのふくらみができる。地球が毎日回るにつれ、異なる海岸がこれらのふくらみを通り、潮が満ち引きする。太陽も海を引くが、近い月より弱い。太陽と月が一直線に並ぶと引きが合わさり、潮は特に大きくなる。直角に位置すると潮は小さい。潮汐は多くの人に関わる。船乗りや漁師は旅を潮に合わせて計画し、一部の沿岸生物は水の律動に合わせて一生を送る。場所によっては満ち引きする水で発電さえする。だから海の穏やかな動きは無作為ではない。地球と月と太陽が、空を越えて静かに共に踊っているのだ。",
        quiz: [
          { q: "What are the daily rises and falls of the sea called?", options: ["Tides", "Waves only", "Rivers"], answer: 0 },
          { q: "What mainly causes the tides?", options: ["The moon's gravity pulling on the Earth's oceans", "The wind alone", "Boats moving the water"], answer: 0 },
          { q: "When do the tides become especially large?", options: ["When the sun and moon line up so their pulls combine", "When the moon disappears", "When there is no sun"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-09-14",
    passages: [
      {
        id: "d0914-1",
        title: "Why Reliability Wins in Business",
        level: "★★☆",
        genre: "ビジネス",
        text: "In business, people often chase big, exciting ideas: a clever product, a brilliant advertisement, or a bold new plan. These matter, of course. But one of the most powerful advantages a company or a worker can have is far quieter. It is reliability — simply doing what you promised, when you promised it.\n\nWhy is reliability so valuable? Because it builds trust, and trust is the foundation of every business relationship. A supplier who always delivers on time, a worker who always finishes their tasks, or a shop that is always open when it says it will be — these earn something priceless: the confidence of others.\n\nUnreliable behavior, on the other hand, is expensive. A late delivery can stop a whole factory. A broken promise can cost a customer forever. Even one missed deadline can make people wonder whether they can depend on you again.\n\nBeing reliable is not glamorous. It means keeping careful track of your promises, being honest about what you can do, and following through even when it is difficult. It often means saying \"no\" to things you cannot deliver, rather than saying \"yes\" and failing.\n\nOver time, reliability quietly builds a strong reputation. People choose to work with those they can count on. In a world full of exciting promises, the person who simply keeps their word may win the greatest prize of all: lasting trust.",
        summaryJa: "ビジネスでは、人はしばしば大きくわくわくする着想を追う。巧みな製品、見事な広告、大胆な新計画だ。もちろん大切だ。だが企業や働く人が持てる最も強力な強みの一つは、はるかに静かだ。信頼性——約束したことを、約束した時に、ただ行うことだ。なぜ信頼性はそれほど価値があるのか。信頼を築き、信頼はあらゆるビジネス関係の土台だからだ。常に時間通り納品する供給者、常に仕事を仕上げる働き手、言った通りに常に開いている店——これらは値の付けられないもの、他者の信用を得る。逆に、不確実な振る舞いは高くつく。納品の遅れは工場全体を止めうる。破られた約束は客を永遠に失わせうる。一度の締切遅れでも、また頼れるか疑わせる。信頼性は華やかではない。約束を丁寧に管理し、できることに正直で、困難でもやり遂げることだ。できないことに「はい」と言って失敗するより「いいえ」と言うことも多い。時とともに信頼性は静かに強い評判を築く。人は頼れる相手と働くことを選ぶ。わくわくする約束にあふれた世界で、ただ約束を守る人が最大の褒美——長く続く信頼——を得るかもしれない。",
        quiz: [
          { q: "What quiet advantage does the passage focus on?", options: ["Reliability — doing what you promised, when you promised it", "Making the loudest advertisement", "Having the biggest office"], answer: 0 },
          { q: "Why is reliability so valuable?", options: ["It builds trust, the foundation of every business relationship", "It makes work more exciting", "It has no real effect"], answer: 0 },
          { q: "What does being reliable often mean?", options: ["Saying 'no' to things you cannot deliver, rather than 'yes' and failing", "Promising everything to everyone", "Ignoring your promises"], answer: 0 }
        ]
      },
      {
        id: "d0914-2",
        title: "How Your Device Understands Your Voice",
        level: "★★★",
        genre: "テクノロジー",
        text: "You speak to your phone, and it answers. You ask a small speaker to play a song, and music fills the room. This everyday magic depends on a technology called speech recognition — the ability of a machine to turn the sounds of your voice into words it can act upon.\n\nThe process happens in a few quick steps. First, a microphone captures your voice as a pattern of sound waves. The device then breaks this sound into tiny pieces and looks for the basic units of speech within it. Using models trained on huge amounts of recorded speech, it guesses which words you most likely said.\n\nThis is harder than it sounds. People speak at different speeds, with different accents, and often in noisy places. The same word can sound quite different from one person to another. Modern systems handle this by learning from millions of examples, slowly becoming better at understanding the messy, varied way humans really talk.\n\nOnce the words are recognized, the device must also understand what you want. If you say, \"What's the weather?\", it must know to check the forecast, not to search for a song. This second step, understanding meaning, is a whole challenge of its own.\n\nSpeech recognition is now good enough to be genuinely useful, though far from perfect. It still stumbles on unusual names or heavy noise. Yet with each year, machines grow a little better at the very human act of listening.",
        summaryJa: "電話に話しかけると答え、小さなスピーカーに曲を頼むと音楽が部屋を満たす。この日常の魔法は「音声認識」という技術に頼る。機械が声の音を、行動できる言葉に変える能力だ。処理はいくつかの素早い段階で起きる。まずマイクが声を音波の模様として捉える。次に装置はその音を小さな断片に分け、その中に話し言葉の基本単位を探す。大量の録音音声で訓練された模型を使い、最も言ったであろう言葉を推測する。これは聞こえるより難しい。人は速さも訛りも異なり、しばしば騒がしい場所で話す。同じ語も人によってかなり違って聞こえる。現代の系は何百万もの例から学び、人が実際に話す雑多で多様な仕方を次第によく理解する。語を認識したら、装置は何を望むかも理解せねばならない。「天気は？」と言えば、曲を探すのでなく予報を確認すると分からねばならない。この意味理解という第二段階は、それ自体が大きな課題だ。音声認識は今や本当に役立つほど良いが、完璧には程遠い。珍しい名前や強い騒音でつまずく。それでも年々、機械は「聞く」という実に人間的な行為が少しずつ上達している。",
        quiz: [
          { q: "What is speech recognition?", options: ["A machine's ability to turn the sounds of your voice into words", "A way to make phones louder", "A type of music"], answer: 0 },
          { q: "Why is understanding speech hard for machines?", options: ["People speak at different speeds, with different accents, and in noisy places", "Because everyone speaks exactly the same", "Because machines cannot hear at all"], answer: 0 },
          { q: "After recognizing the words, what must the device also do?", options: ["Understand what you want, such as checking the weather", "Immediately turn off", "Forget the words"], answer: 0 }
        ]
      },
      {
        id: "d0914-3",
        title: "The Box That Changed the World",
        level: "★★★",
        genre: "世界情勢",
        text: "Look at any large port, and you will see thousands of steel boxes, all the same size, stacked like giant bricks. These are shipping containers. They may look boring, but this simple invention quietly changed the whole world's economy.\n\nBefore the container, loading a ship was slow, costly, and messy. Goods came in barrels, sacks, and boxes of every shape. Workers had to load each item by hand, which took days and often led to damage or theft. Shipping was so expensive that many products were simply not worth sending far away.\n\nThen, decades ago, someone had a simple idea: put everything into standard steel boxes that can be sealed, stacked, and moved by machine. A crane can lift a full container from a ship straight onto a truck or train in minutes. Suddenly, moving goods across the world became fast, safe, and cheap.\n\nThe effects were enormous. Because shipping became so cheap, factories could be built far from their customers, and products could be made wherever it was most efficient. The clothes, phones, and food in your home have likely traveled the world inside these plain metal boxes.\n\nThe shipping container is a perfect example of how a simple, unglamorous idea can reshape everything. It reminds us that some of the most powerful inventions are not the flashiest ones, but the quiet tools that make everything else possible.",
        summaryJa: "大きな港を見ると、同じ大きさの何千もの鉄の箱が巨大なレンガのように積まれている。これが海上輸送コンテナだ。退屈に見えるが、この単純な発明は世界経済全体を静かに変えた。コンテナ以前、船への積み込みは遅く、費用がかさみ、雑然としていた。荷は樽や袋、あらゆる形の箱で来た。作業員は一つ一つ手で積まねばならず、何日もかかり、破損や盗難も多かった。輸送は高価で、多くの製品は遠くへ送る価値がなかった。数十年前、誰かが単純な考えを持った。すべてを、密封し積み重ね機械で動かせる標準の鉄の箱に入れる、というものだ。クレーンは満載のコンテナを船から直接トラックや列車へ数分で載せられる。突然、世界中へ荷を運ぶことが速く安全で安くなった。影響は甚大だった。輸送が安くなったため、工場は客から遠くに建てられ、製品は最も効率的な場所で作れるようになった。家の衣類や電話、食べ物は、たいていこの地味な金属の箱の中で世界を旅してきた。コンテナは、単純で地味な着想がすべてを作り変えうる好例だ。最も強力な発明は派手なものでなく、他のすべてを可能にする静かな道具かもしれない。",
        quiz: [
          { q: "What was loading a ship like before the container?", options: ["Slow, costly, and messy, with goods loaded by hand", "Fast and cheap", "Done entirely by robots"], answer: 0 },
          { q: "What was the simple idea behind the container?", options: ["Put everything into standard steel boxes that machines can stack and move", "Use larger sacks", "Stop shipping goods"], answer: 0 },
          { q: "What large effect did cheap shipping have?", options: ["Factories could be built far from customers, and goods made where most efficient", "All trade stopped", "Products became impossible to move"], answer: 0 }
        ]
      },
      {
        id: "d0914-4",
        title: "Origami: The Art of Paper Folding",
        level: "★★☆",
        genre: "日本",
        text: "Take a simple square of paper. With no scissors and no glue, only careful folds, you can turn it into a crane, a flower, a box, or a jumping frog. This is origami, the Japanese art of paper folding, loved by children and adults alike, in Japan and around the world.\n\nOrigami has a long history in Japan, where paper was once precious and folded shapes were used in ceremonies and gifts. Over time, it grew into both a playful hobby and a serious art. The most famous shape is the paper crane, a symbol of peace and good wishes. There is even a tradition of folding a thousand cranes to wish for health or a dream come true.\n\nPart of the beauty of origami is its simplicity. The rules are strict — usually one square, no cutting — yet within those limits, people have created astonishing designs, from tiny animals to complex geometric patterns. Some modern folders produce works of amazing detail.\n\nOrigami is more than art. It teaches patience and careful attention, as one wrong fold can spoil the whole piece. Surprisingly, its ideas even help science and engineering. Folding methods inspired by origami are used to pack large objects, such as solar panels, into small spaces for space travel.\n\nFrom a child's paper crane to a satellite in orbit, origami shows how a single sheet, folded with care, can hold endless possibility.",
        summaryJa: "一枚の四角い紙を取る。はさみも糊も使わず、丁寧に折るだけで、鶴や花、箱、跳ねるカエルに変えられる。これが折り紙、日本の紙を折る芸術で、日本でも世界でも子どもにも大人にも愛される。折り紙は日本で長い歴史を持ち、かつて紙は貴重で、折った形は儀式や贈り物に使われた。やがて遊びの趣味にも真剣な芸術にもなった。最も有名な形は折り鶴で、平和と幸いの象徴だ。健康や願いの成就を祈って千羽鶴を折る伝統さえある。折り紙の美しさの一部はその単純さだ。規則は厳しく——ふつう一枚の四角、切らない——が、その制約の中で人は小さな動物から複雑な幾何模様まで驚くべき作品を生んできた。現代の折り手は見事な精緻さの作品を作る。折り紙は芸術以上のものだ。一つの折り間違いが全体を台無しにするので、忍耐と細やかな注意を教える。驚くことに、その発想は科学や工学も助ける。折り紙に着想を得た折り方は、太陽電池パネルなど大きな物を小さな空間に畳んで宇宙へ運ぶのに使われる。子どもの折り鶴から軌道上の衛星まで、丁寧に折られた一枚の紙が無限の可能性を秘めることを折り紙は示す。",
        quiz: [
          { q: "What is origami?", options: ["The Japanese art of folding paper, without scissors or glue", "A kind of painting", "A type of dance"], answer: 0 },
          { q: "What does the paper crane symbolize?", options: ["Peace and good wishes", "Money and power", "Anger"], answer: 0 },
          { q: "How do origami ideas help science and engineering?", options: ["Folding methods help pack large objects, like solar panels, into small spaces", "They make paper heavier", "They have no real use"], answer: 0 }
        ]
      },
      {
        id: "d0914-5",
        title: "Why Do Cats Purr?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "If you have ever held a happy cat, you have probably felt it: a soft, steady rumble deep in its body, called a purr. Most people think a cat purrs only when it is content, curled up warm and safe. But the truth is more surprising, and scientists are still uncovering it.\n\nA purr is made in the cat's throat. Signals from the brain make the muscles of the voice box open and close very quickly, many times each second. As the cat breathes in and out, air passes through, creating that familiar gentle sound. Amazingly, a cat can purr almost without pause, both breathing in and breathing out.\n\nCats do purr when they are happy — while being petted or resting with those they trust. But they also purr at other times. A frightened cat at the vet may purr, and an injured cat may purr while in pain. This has led scientists to a fascinating idea: purring may be a way for a cat to calm itself, or even to help its body heal.\n\nSome researchers believe the gentle vibrations of a purr, at certain low frequencies, might help keep a cat's bones and muscles healthy. If true, a purr would be both a feeling and a kind of self-medicine.\n\nSo a cat's purr is more than a sign of joy. It may be one of nature's quiet, clever tools for comfort and healing.",
        summaryJa: "幸せな猫を抱いたことがあれば、たぶん感じたことがあるだろう。体の奥の柔らかく一定の響き、「ゴロゴロ」だ。多くの人は、猫は満足して暖かく安全に丸まっている時だけ喉を鳴らすと思う。だが真実はもっと意外で、科学者は今も解明中だ。ゴロゴロは猫の喉で作られる。脳からの信号が声帯の筋肉を毎秒何度も素早く開閉させる。猫が息を吸い吐きする間、空気が通り、あのなじみの穏やかな音が生まれる。驚くことに、猫は吸う時も吐く時もほぼ休みなく喉を鳴らせる。猫は幸せな時——なでられたり信頼する相手と休む時——に喉を鳴らす。だが他の時にも鳴らす。動物病院で怯えた猫が鳴らすこともあり、けがをした猫が痛みの中で鳴らすこともある。ここから科学者は魅力的な考えに至った。ゴロゴロは猫が自分を落ち着かせる方法、あるいは体の治癒を助ける方法かもしれない。ある研究者は、特定の低い周波数のゴロゴロの穏やかな振動が、猫の骨や筋肉の健康維持を助けるかもしれないと考える。本当なら、ゴロゴロは感情であり一種の自己治療でもある。だから猫のゴロゴロは喜びの証以上のものだ。慰めと癒やしのための自然の静かで巧みな道具の一つかもしれない。",
        quiz: [
          { q: "How is a purr made?", options: ["Muscles of the voice box open and close very quickly as the cat breathes", "By the cat's tail", "By the cat's stomach only"], answer: 0 },
          { q: "When do cats purr, according to the passage?", options: ["When happy, but also when frightened or in pain", "Only when they are asleep", "Never when content"], answer: 0 },
          { q: "What fascinating idea do some scientists have about purring?", options: ["The vibrations might help calm the cat or keep its bones and muscles healthy", "Purring makes cats sick", "Purring is only for show"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-09-13",
    passages: [
      {
        id: "d0913-1",
        title: "The Power of a Good Team",
        level: "★★☆",
        genre: "ビジネス",
        text: "When a company succeeds, we often praise a single leader or a brilliant idea. But behind almost every success stands something less visible: a good team. In business, few important things are done alone. Learning to build and work in a strong team is one of the most valuable skills a person can have.\n\nWhy are teams so powerful? Because no single person is good at everything. One member may be full of creative ideas, another may be careful with details, and a third may be excellent at talking to customers. When these different strengths come together, the team can do far more than any of its members could alone.\n\nBut simply putting talented people in a room is not enough. A good team needs trust. Members must feel safe to share ideas, admit mistakes, and ask for help. When people fear blame, they hide problems, and small issues grow into big ones.\n\nClear goals matter too. When everyone understands what the team is trying to achieve and who is doing what, effort is not wasted. Good communication keeps the group moving in the same direction.\n\nThe best teams also respect one another. They listen, share credit, and support members who are struggling. In the end, a great team is more than a group of skilled people. It is a group that has learned to trust, communicate, and win together.",
        summaryJa: "企業が成功すると、私たちはしばしば一人の指導者や見事な着想をたたえる。だがほぼすべての成功の陰に、見えにくいものがある。良いチームだ。ビジネスで重要なことは一人で成し遂げられるものは少ない。強いチームを築き、その中で働くことを学ぶのは、最も価値ある技能の一つだ。なぜチームは強力か。一人で何でも得意な人はいないからだ。ある人は創造的な着想に富み、別の人は細部に注意深く、また別の人は客と話すのが得意だ。これら異なる強みが合わさると、チームは各自が単独でできる以上のことをできる。だが才能ある人を部屋に集めるだけでは足りない。良いチームには信頼が要る。安心して考えを共有し、間違いを認め、助けを求められねばならない。非難を恐れると人は問題を隠し、小さな問題が大きくなる。明確な目標も重要だ。何を目指し誰が何をするか皆が分かれば、努力は無駄にならない。良い意思疎通が同じ方向へ進ませる。最良のチームは互いを尊重し、耳を傾け、功績を分かち合い、苦しむ仲間を支える。偉大なチームとは、信頼し、意思疎通し、共に勝つことを学んだ集団だ。",
        quiz: [
          { q: "Why are teams so powerful, according to the passage?", options: ["No single person is good at everything, so different strengths combine", "One person can do everything alone", "Teams slow down all work"], answer: 0 },
          { q: "Why does a good team need trust?", options: ["So members feel safe to share ideas, admit mistakes, and ask for help", "So members can blame each other", "So problems stay hidden"], answer: 0 },
          { q: "What is the best kind of team, in the end?", options: ["A group that has learned to trust, communicate, and win together", "A group of strangers who never talk", "A single talented person"], answer: 0 }
        ]
      },
      {
        id: "d0913-2",
        title: "Robots That Help Build Houses",
        level: "★★★",
        genre: "テクノロジー",
        text: "Many parts of the world do not have enough homes. Building houses is slow and hard work, and there are not always enough skilled workers to do it. To help solve this problem, engineers are now bringing robots onto the building site.\n\nThese construction robots come in several forms. Some are large machines that can print the walls of a house layer by layer, squeezing out a special concrete like toothpaste from a tube. Others are robotic arms that lay bricks, or machines that carry heavy loads so that human workers do not have to. A few can even work through the night, when human crews have gone home.\n\nThe hoped-for benefits are clear. Robots may build faster and at lower cost, which could mean more affordable homes. They can also take on dangerous or exhausting tasks, making building sites safer for people. In places short of workers, robots could help close the gap.\n\nOf course, there are limits. Building a house is complex, full of surprises and small decisions that humans handle easily but machines find hard. Robots are expensive to buy, and they still need skilled people to run and repair them.\n\nMost likely, the future is not robots instead of workers, but robots working beside them. By handling the heavy, repetitive parts, machines may free human builders to do the skilled, creative work that homes will always need.",
        summaryJa: "世界の多くの地域で住宅が足りない。家を建てるのは遅く大変な作業で、担う熟練工が常に十分いるわけではない。この問題を解決するため、技術者は今、建設現場にロボットを持ち込んでいる。建設ロボットにはいくつかの形がある。特別なコンクリートをチューブの歯磨き粉のように押し出し、家の壁を層ごとに印刷する大型機械もある。レンガを積むロボットアームや、重い荷を運び人が運ばずに済むようにする機械もある。人が帰宅した夜間に働けるものさえある。期待される利点は明確だ。ロボットはより速く低コストで建てられ、より手頃な住宅につながりうる。危険で疲れる作業も引き受け、現場を安全にする。人手不足の地域では差を埋められる。もちろん限界もある。家づくりは複雑で、人が容易に扱う驚きや小さな判断に満ち、機械には難しい。ロボットは高価で、動かし修理する熟練者も要る。おそらく未来は、人の代わりでなく人と並んで働くロボットだ。重く反復的な部分を担い、家に常に必要な熟練の創造的仕事を人に任せられるようにする。",
        quiz: [
          { q: "Why are engineers bringing robots onto building sites?", options: ["Building is slow and there are not always enough skilled workers", "Because houses are no longer needed", "Because robots are cheap and simple"], answer: 0 },
          { q: "What is one form a construction robot can take?", options: ["A machine that prints walls layer by layer with special concrete", "A machine that only makes coffee", "A robot that paints pictures"], answer: 0 },
          { q: "What does the passage say the future most likely looks like?", options: ["Robots working beside human builders, not instead of them", "No human builders at all", "No robots ever used"], answer: 0 }
        ]
      },
      {
        id: "d0913-3",
        title: "Cities Without Cars",
        level: "★★☆",
        genre: "世界情勢",
        text: "For most of the last hundred years, cities were built around the car. Wide roads, large parking lots, and busy junctions shaped how people lived. But in recent years, a new idea is spreading across the world: what if parts of a city had far fewer cars, or none at all?\n\nAround the globe, cities are trying this in different ways. Some close their old central streets to traffic, letting people walk and cycle freely. Others build wide paths for bicycles, add more buses and trains, or charge a fee to drive into the busiest areas. The goal is not to punish drivers, but to give streets back to people.\n\nThe possible benefits are large. With fewer cars, the air becomes cleaner and the streets quieter. Children can play more safely, and shops often do better when more people stroll past on foot. Walking and cycling also improve people's health.\n\nThere are challenges, of course. Not everyone can walk or cycle, and some people truly need a car for work or family. Good plans must include the elderly, the disabled, and those who live far away. Change must be fair.\n\nStill, the trend is growing. As more cities test these ideas, many are discovering that a place built for people, rather than only for cars, can be cleaner, healthier, and simply more pleasant to live in.",
        summaryJa: "過去100年の大半、都市は車を中心に造られた。広い道路、大きな駐車場、混雑する交差点が暮らし方を形づくった。だが近年、新しい考えが世界に広がっている。都市の一部で車をずっと減らす、あるいはなくしたらどうか、というものだ。世界中で都市がさまざまに試している。古い中心街を交通止めにして人が自由に歩き自転車に乗れるようにしたり、広い自転車道を造り、バスや電車を増やし、最も混む区域への乗り入れに料金を課したりする。狙いは運転手を罰することでなく、通りを人々に返すことだ。利点は大きい。車が減れば空気は清潔になり通りは静かになる。子どもはより安全に遊べ、歩く人が増えると店も繁盛しやすい。歩行や自転車は健康も改善する。もちろん課題もある。皆が歩いたり自転車に乗れるわけではなく、仕事や家族のため本当に車が要る人もいる。良い計画は高齢者や障害のある人、遠方に住む人を含めねばならない。変化は公正であるべきだ。それでも流れは広がる。人のために造られた場所は、車だけのためより清潔で健康的で住みやすいと多くの都市が気づきつつある。",
        quiz: [
          { q: "What new idea is spreading across cities?", options: ["Having parts of a city with far fewer cars, or none at all", "Building only wider roads for cars", "Removing all buses and trains"], answer: 0 },
          { q: "What is one possible benefit of fewer cars?", options: ["Cleaner air, quieter streets, and safer play for children", "More pollution", "Less space for people"], answer: 0 },
          { q: "What must good car-free plans include?", options: ["The elderly, the disabled, and those who live far away", "Only young, healthy people", "Nobody at all"], answer: 0 }
        ]
      },
      {
        id: "d0913-4",
        title: "Japan's Respect for the Aged Day",
        level: "★★☆",
        genre: "日本",
        text: "In September, Japan celebrates a special national holiday called \"Respect for the Aged Day.\" On this day, the country pauses to honor its older people, to thank them for their years of hard work, and to wish them long and healthy lives. It is a warm example of a value that runs deep in Japanese culture.\n\nRespect for elders is not shown only once a year. In daily life, older people are often treated with special politeness. Families may gather to celebrate the holiday, sharing a meal and spending time together. Children might make cards or gifts for their grandparents, and communities sometimes hold events for their senior members.\n\nJapan has one of the oldest populations in the world, with many people living long past their eightieth or ninetieth year. This makes the holiday especially meaningful. Older people are seen not as a burden, but as a source of wisdom, memory, and experience that younger generations can learn from.\n\nThe day also carries a gentle reminder. In busy modern life, it is easy to forget the people who came before us. This holiday encourages everyone to slow down, visit an older relative, and simply say thank you.\n\nAt its heart, Respect for the Aged Day teaches a simple truth: a society that cares for its elders is caring for all of us, because one day, every person grows old.",
        summaryJa: "9月、日本は「敬老の日」という特別な祝日を祝う。この日、国は立ち止まって高齢者を敬い、長年の労苦に感謝し、長寿と健康を願う。日本文化に深く根づく価値観の温かい一例だ。高齢者への敬意は年に一度だけ示されるものではない。日常でも高齢者はしばしば特別な礼儀で接される。家族は集まって祝日を祝い、食事を共にし共に時を過ごす。子どもは祖父母にカードや贈り物を作り、地域が高齢者向けの催しを開くこともある。日本は世界有数の高齢化社会で、80代90代を過ぎて生きる人が多い。だからこの祝日は特に意味深い。高齢者は重荷ではなく、若い世代が学べる知恵や記憶、経験の源とみなされる。この日は優しい戒めも持つ。忙しい現代の暮らしでは、先を生きた人を忘れがちだ。この祝日は皆に立ち止まり、年長の親族を訪ね、ただ感謝を伝えるよう促す。核心には単純な真実がある。高齢者を大切にする社会は私たち全員を大切にしている。いつか誰もが年を取るのだから。",
        quiz: [
          { q: "What does 'Respect for the Aged Day' honor?", options: ["Older people, thanking them and wishing them long, healthy lives", "New babies only", "Famous athletes"], answer: 0 },
          { q: "How are older people seen, according to the passage?", options: ["As a source of wisdom, memory, and experience", "As a burden to ignore", "As unimportant"], answer: 0 },
          { q: "What simple truth does the day teach?", options: ["A society that cares for its elders cares for all of us, since everyone grows old", "Only the young matter", "Holidays are a waste of time"], answer: 0 }
        ]
      },
      {
        id: "d0913-5",
        title: "Turning Waste Into Food",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "What if some of the things we throw away could become the food of the future? It sounds strange, but scientists are working on exactly this idea. In laboratories, researchers are finding clever ways to turn waste — such as old plastic or leftover parts of crops — into ingredients we can eat.\n\nOne promising method uses tiny living helpers called yeast, the same kind used to make bread rise. Scientists can feed these yeasts on waste materials and guide them to produce useful substances, including protein. That protein can then be used to make food, such as a simple, protein-rich snack.\n\nWhy would anyone want to do this? The reasons are powerful. The world's population is growing, and producing enough food is a huge challenge. At the same time, waste is a growing problem. A process that reduces waste and creates food at once could help with two problems together.\n\nOf course, there is a long way to go. Any food made this way must be proven completely safe and healthy before people eat it. It must also taste good, or few will choose it. Winning people's trust takes time.\n\nStill, the idea is a hopeful glimpse of the future. It reminds us that \"waste\" may be the wrong word for many things we discard. With science and care, tomorrow's dinner might grow from today's garbage.",
        summaryJa: "私たちが捨てるものの一部が未来の食べ物になるとしたら？奇妙に聞こえるが、科学者はまさにこの考えに取り組んでいる。実験室で、研究者は廃棄物——古いプラスチックや作物の残りなど——を食べられる材料に変える巧みな方法を見つけつつある。有望な方法の一つは、パンを膨らませるのと同じ酵母という小さな生きた助っ人を使う。廃棄物を酵母に与え、タンパク質を含む有用な物質を作らせる。そのタンパク質でタンパク質豊富な簡単なおやつなどの食品を作れる。なぜそんなことをするのか。理由は強力だ。世界の人口は増え、十分な食料を作るのは大きな難題だ。同時に廃棄物も増える問題だ。廃棄を減らし同時に食料を生む過程は、二つの問題を一度に助けうる。もちろん道のりは長い。この方法で作る食品は、食べる前に完全に安全で健康的だと証明されねばならない。おいしくなければ選ぶ人も少ない。人の信頼を得るには時間がかかる。それでもこの考えは希望に満ちた未来の一片だ。「廃棄物」は、捨てる多くの物にとって誤った言葉かもしれないと気づかせる。科学と心配りで、明日の夕食は今日のごみから育つかもしれない。",
        quiz: [
          { q: "What are scientists trying to turn into food ingredients?", options: ["Waste such as old plastic or leftover parts of crops", "Only fresh vegetables", "Gold and silver"], answer: 0 },
          { q: "What tiny living helpers are used in one promising method?", options: ["Yeast, the same kind used to make bread rise", "Large fish", "Robots"], answer: 0 },
          { q: "Why is this idea attractive?", options: ["It could reduce waste and create food at the same time", "It makes more garbage", "It uses up all the world's food"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-09-12",
    passages: [
      {
        id: "d0912-1",
        title: "Why Companies Listen to Their Customers",
        level: "★★☆",
        genre: "ビジネス",
        text: "Every day, customers tell companies what they think. They leave reviews online, answer short surveys, call to complain, or simply stop buying. Wise companies treat all of this as treasure. Listening carefully to customers is one of the most powerful and affordable ways to improve a business.\n\nWhy is customer feedback so valuable? Because the people who use a product often notice things the makers cannot see. A small design flaw, a confusing instruction, or a missing feature may be obvious to a daily user but invisible inside the company. Feedback turns these hidden problems into clear, fixable ones.\n\nComplaints, in particular, are worth their weight in gold. A customer who complains is giving the company a second chance instead of quietly leaving forever. If the problem is fixed well, that unhappy customer can become a loyal fan who tells others about the good service.\n\nOf course, listening is only the first step. A company must also decide which feedback to act on. Not every request can or should be met, and sometimes many small comments together point to one bigger truth. The skill lies in finding the real message behind the noise.\n\nIn the end, a business exists to serve people. By truly listening — and then acting — a company shows respect for its customers. That respect builds trust, and trust, over time, builds success.",
        summaryJa: "毎日、客は企業に考えを伝えている。オンラインでレビューを残し、短いアンケートに答え、電話で苦情を言い、あるいは単に買うのをやめる。賢い企業はこれらすべてを宝として扱う。客に注意深く耳を傾けることは、事業を改善する最も強力で安価な方法の一つだ。なぜ客の声はそれほど価値があるのか。製品を使う人は、作り手に見えないことに気づくからだ。小さな設計上の欠陥、分かりにくい説明、欠けた機能は、毎日使う人には明白でも社内では見えない。フィードバックはこうした隠れた問題を、直せる明確なものに変える。特に苦情は金と同じ価値がある。苦情を言う客は、黙って去る代わりに企業に二度目の機会を与えている。うまく直せば、不満だった客が忠実なファンになり良いサービスを人に伝える。もちろん聞くのは第一歩にすぎない。どの声に応えるかを決めねばならない。すべての要望に応えられるわけでも応えるべきでもなく、多くの小さな声が一つの大きな真実を指すこともある。雑音の裏の本当の伝言を見つける技が要る。事業は人に仕えるために存在する。真に聞き行動する企業は客への敬意を示し、それが信頼を、やがて成功を築く。",
        quiz: [
          { q: "Why is customer feedback so valuable?", options: ["Users often notice problems the makers cannot see", "Customers know nothing useful", "It costs a lot of money"], answer: 0 },
          { q: "Why are complaints described as valuable?", options: ["A complaining customer gives the company a second chance instead of leaving", "Complaints should always be ignored", "They mean the customer is happy"], answer: 0 },
          { q: "What skill is needed after listening?", options: ["Deciding which feedback to act on and finding the real message", "Acting on nothing at all", "Meeting every single request"], answer: 0 }
        ]
      },
      {
        id: "d0912-2",
        title: "How Noise-Cancelling Headphones Work",
        level: "★★★",
        genre: "テクノロジー",
        text: "On a noisy plane or a busy train, some headphones can make the roar of engines almost disappear, even before any music plays. These are called noise-cancelling headphones, and the science behind them is both simple and clever.\n\nTo understand it, think about what sound really is: a wave that travels through the air, made of tiny pushes and pulls. When these waves reach your ear, you hear them as noise. The trick of noise-cancelling is to create a second wave that is the exact opposite of the unwanted one.\n\nInside the headphones, a small microphone listens to the noise around you. A tiny computer instantly works out the opposite wave and plays it through the speakers. When the original noise wave and this opposite wave meet, they cancel each other out, much like a hill and a hole of the same size filling to make flat ground. The result is a wonderful feeling of quiet.\n\nThis method works best on steady, low sounds, like the hum of an engine. Sudden, sharp noises, such as a voice or a bang, are harder to cancel because they change too quickly for the system to match.\n\nNoise-cancelling headphones show how understanding a simple idea — that waves can cancel — can be turned into something genuinely useful. With a microphone, a speaker, and clever timing, engineers have learned to fight noise with silence of their own making.",
        summaryJa: "騒がしい飛行機や混んだ電車で、音楽を流す前でさえエンジンの轟音をほぼ消せるヘッドホンがある。ノイズキャンセリングヘッドホンと呼ばれ、その科学は単純かつ巧みだ。理解するには、音が本当は何かを考えるとよい。空気を伝わる波で、小さな押しと引きからなる。この波が耳に届くと騒音として聞こえる。ノイズキャンセリングの技は、不要な波とちょうど正反対の第二の波を作ることだ。ヘッドホンの中で小さなマイクが周りの騒音を聞く。小さなコンピューターが瞬時に反対の波を計算しスピーカーで流す。元の騒音の波とこの反対の波が出会うと互いに打ち消し合う。同じ大きさの丘と穴が埋まって平らになるように。結果、素晴らしい静けさの感覚が生まれる。この方法はエンジンのうなりのような一定の低い音に最も効く。声や破裂音のような突然鋭い音は、速く変わりすぎて合わせにくく打ち消しにくい。単純な考え——波は打ち消し合える——の理解が本当に役立つものになる好例だ。マイクとスピーカーと巧みなタイミングで、技術者は自ら作る静けさで騒音と戦うすべを学んだ。",
        quiz: [
          { q: "What is the main trick of noise-cancelling headphones?", options: ["Creating a second wave that is the exact opposite of the unwanted noise", "Playing music very loudly", "Blocking the ears with thick foam only"], answer: 0 },
          { q: "What listens to the noise around you inside the headphones?", options: ["A small microphone", "A tiny mirror", "A bright light"], answer: 0 },
          { q: "What kind of sound is hardest to cancel?", options: ["Sudden, sharp noises that change too quickly", "The steady hum of an engine", "A quiet, constant tone"], answer: 0 }
        ]
      },
      {
        id: "d0912-3",
        title: "The World's Many Languages",
        level: "★★★",
        genre: "世界情勢",
        text: "How many languages do you think are spoken in the world? The answer surprises many people: there are around seven thousand. From languages spoken by hundreds of millions to ones known by only a few elderly people, human speech is astonishingly rich and varied.\n\nEach language is far more than a way to order food or ask directions. It carries a whole way of seeing the world. Inside a language live songs, jokes, stories, and words for ideas that may not exist anywhere else. When people speak their mother tongue, they connect to their history and their community in a deep way.\n\nSadly, many of the world's languages are in danger. As people move to cities and use a few major languages for work and school, smaller languages are spoken less and less. Experts fear that many could disappear within this century. When a language dies, a unique window on human experience closes forever.\n\nAround the world, people are working to keep languages alive. Communities record their elders, teachers create classes, and technology helps by putting dictionaries and lessons online. Even simple pride in one's own language can make a difference.\n\nLearning about the world's languages teaches us something important: there is no single \"correct\" way to think or speak. Our differences are a treasure. Protecting them helps keep the human story wide, colorful, and whole.",
        summaryJa: "世界ではいくつの言語が話されていると思うだろうか。答えは多くの人を驚かせる。約7000だ。数億人が話すものから、数人の高齢者しか知らないものまで、人間の言葉は驚くほど豊かで多様だ。各言語は食べ物を注文したり道を尋ねたりする手段以上のものだ。世界の見方全体を運ぶ。言語の中には歌や冗談、物語、他のどこにも存在しないかもしれない概念の語が生きている。母語を話すとき、人は歴史や地域社会と深くつながる。悲しいことに、世界の多くの言語が危機にある。人が都市へ移り、仕事や学校でいくつかの主要言語を使うにつれ、小さな言語は次第に話されなくなる。専門家は今世紀中に多くが消えかねないと恐れる。言語が死ぬと、人間の経験への独自の窓が永遠に閉じる。世界中で人々は言語を生かそうと努めている。地域は年長者を記録し、教師は授業を作り、技術は辞書や教材をオンラインにして助ける。自分の言語への誇りさえ違いを生む。世界の言語を学ぶと大切なことが分かる。考え方や話し方に唯一の「正解」はない。違いは宝であり、それを守ることが人間の物語を広く彩り豊かに保つ。",
        quiz: [
          { q: "About how many languages are spoken in the world?", options: ["Around seven thousand", "Only about ten", "Exactly one hundred"], answer: 0 },
          { q: "Why is each language more than a way to communicate?", options: ["It carries a whole way of seeing the world, with songs, stories, and unique ideas", "It is only useful for ordering food", "It has no connection to history"], answer: 0 },
          { q: "How are people working to keep languages alive?", options: ["Recording elders, creating classes, and putting lessons online", "By banning all small languages", "By ignoring the problem"], answer: 0 }
        ]
      },
      {
        id: "d0912-4",
        title: "Radio Taiso: Exercising Together",
        level: "★★☆",
        genre: "日本",
        text: "Early in the morning across Japan, a familiar piece of music plays from radios and speakers, and people begin to move together. They stretch their arms, bend, and jump in time with the tune. This is \"radio taiso,\" a short set of simple exercises that has been part of Japanese life for many years.\n\nRadio taiso began long ago as a way to keep the whole nation healthy. The idea was clever: broadcast the same easy routine everywhere, so that anyone, anywhere, could join in at once. The movements are gentle and need no special equipment, so people of all ages can do them.\n\nToday, radio taiso appears in many places. Children do it during summer holidays, sometimes collecting a stamp each morning for taking part. Workers stretch together before a shift at a factory or office. Older people gather in parks to move and chat with neighbors.\n\nPart of the charm is that it is done together. Even strangers, exercising side by side to the same music, share a small sense of community. The exercise itself is light, but the habit is powerful: a few minutes of movement can wake up the body and lift the mood.\n\nRadio taiso shows a gentle Japanese belief — that small, shared, daily habits can quietly keep both a person and a community healthy and connected.",
        summaryJa: "日本各地で朝早く、なじみのある音楽がラジオやスピーカーから流れ、人々が一緒に動き始める。曲に合わせて腕を伸ばし、体を曲げ、跳ぶ。これが「ラジオ体操」、長年日本の暮らしの一部である短い簡単な運動だ。ラジオ体操は昔、国民全体を健康に保つ方法として始まった。同じ易しい体操をどこでも放送し、誰でもどこでも同時に参加できるという巧みな発想だった。動きは穏やかで特別な道具も要らず、あらゆる年代の人ができる。今、ラジオ体操は多くの場所で見られる。子どもは夏休みに行い、参加すると毎朝スタンプをもらうこともある。働く人は工場や事務所で仕事前に一緒に伸びをする。高齢者は公園に集い、体を動かし隣人とおしゃべりする。魅力の一部は一緒に行うことだ。見知らぬ者同士でも同じ音楽で並んで運動すると、小さな地域の一体感を分かち合う。運動自体は軽いが習慣は強力で、数分の運動が体を目覚めさせ気分を上げる。小さく共有された日々の習慣が、人と地域を静かに健康でつながった状態に保つという、優しい日本的な考えを示している。",
        quiz: [
          { q: "What is 'radio taiso'?", options: ["A short set of simple exercises done together to music", "A type of radio program with only news", "A cooking show"], answer: 0 },
          { q: "Why was the same routine broadcast everywhere?", options: ["So anyone, anywhere could join in at once with no special equipment", "So only athletes could do it", "To make it very difficult"], answer: 0 },
          { q: "What is part of the charm of radio taiso?", options: ["It is done together, giving even strangers a sense of community", "It must be done completely alone", "It requires expensive machines"], answer: 0 }
        ]
      },
      {
        id: "d0912-5",
        title: "Why the Sky Is Blue",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "Look up on a clear day, and the sky is a beautiful blue. At sunset, the same sky may glow with red and orange. Why does the sky change color like this? The answer lies in sunlight and the air around our planet.\n\nSunlight looks white, but it is really a mix of all the colors of the rainbow. When this light travels through the air, it bumps into countless tiny gas particles. These particles scatter the light, sending it bouncing in all directions. Here is the key: blue light is scattered much more strongly than red light, because of the way its shorter waves interact with the air.\n\nDuring the day, this scattered blue light comes at us from every part of the sky, so the whole sky looks blue. We are seeing blue light that has been bounced around above us.\n\nAt sunset, the sun is low, and its light must pass through much more air to reach our eyes. Along this long path, most of the blue light is scattered away before it arrives. What remains is the warm red and orange light, painting the evening sky.\n\nSo the colors of the sky are not really \"in\" the sky at all. They are sunlight, sorted by the air itself. Something as ordinary as a blue afternoon is, in truth, a quiet daily show of physics.",
        summaryJa: "晴れた日に見上げると、空は美しい青だ。夕暮れには、同じ空が赤や橙に輝くこともある。なぜ空はこう色を変えるのか。答えは太陽光と、地球を包む空気にある。太陽光は白く見えるが、実は虹のすべての色の混合だ。この光が空気を通るとき、無数の小さな気体の粒子にぶつかる。粒子は光を散乱させ、あらゆる方向へ跳ね返す。鍵はここだ。青い光は赤い光よりずっと強く散乱される。波長が短く空気と作用する仕方のためだ。昼間、この散乱した青い光が空のあらゆる部分から届くので、空全体が青く見える。頭上で跳ね回った青い光を見ているのだ。夕暮れには太陽が低く、光は目に届くまでずっと多くの空気を通らねばならない。この長い道のりで、青い光の多くは届く前に散らされる。残るのは暖かい赤や橙の光で、夕空を彩る。だから空の色は本当は空の中に「ある」のではない。空気そのものによって振り分けられた太陽光だ。青い午後というありふれたものも、実は物理の静かな日々の見世物なのだ。",
        quiz: [
          { q: "What is sunlight really made of?", options: ["A mix of all the colors of the rainbow", "Only blue light", "Only red light"], answer: 0 },
          { q: "Why does the daytime sky look blue?", options: ["Blue light is scattered more strongly and comes from all over the sky", "The sky is painted blue", "Because there is no sunlight"], answer: 0 },
          { q: "Why does the sky turn red at sunset?", options: ["Light passes through more air, so most blue is scattered away, leaving red and orange", "The sun changes color", "Because the air disappears"], answer: 0 }
        ]
      }
    ]
    }
  ] };
