/* デイリー配信リーディング
 * 毎朝の自動ルーチンがこのファイルを丸ごと上書き生成する（直近 7 日分を保持）。
 * days は日付降順。各 day = { date: "YYYY-MM-DD", passages: [readingPassages と同スキーマ + genre] }
 * このファイル以外は手書きデータであり、ルーチンは触らない。
 */
window.KE_DATA = window.KE_DATA || {};

KE_DATA.dailyReading = { days: [
    {
    date: "2026-10-02",
    passages: [
      {
        id: "d1002-1",
        title: "Why the Unemployment Rate Matters",
        level: "★★★",
        genre: "ビジネス",
        text: "Every month, governments announce an important number: the unemployment rate. News reports treat it as a major event, and markets can rise or fall because of it. But what does this number really mean, and why does it matter so much?\n\nThe unemployment rate measures the share of people who want to work and are looking for a job, but cannot find one. If the rate is low, it usually means jobs are plentiful and the economy is healthy. If the rate is high, it means many people are struggling to find work, a sign that the economy may be weak.\n\nThis single number affects almost everyone. For workers, it hints at how easy or hard it will be to find or keep a job. For businesses, it signals whether customers will have money to spend. Governments and central banks watch it closely, using it to help decide whether to change interest rates or support the economy.\n\nThe number is not perfect, however. It does not count people who have given up looking for work, or those stuck in part-time jobs who want full-time ones. So wise observers look beyond the single figure to the fuller picture.\n\nStill, the unemployment rate remains one of the clearest windows into the health of an economy. Behind the percentage are millions of real people and their hopes for a steady job. That is why, each month, the world pauses to read this quiet but powerful number.",
        summaryJa: "毎月、政府は重要な数字を発表する。失業率だ。ニュースはこれを大きな出来事として扱い、市場はこれで上下しうる。だがこの数字は本当は何を意味し、なぜそれほど重要なのか。失業率は、働きたくて仕事を探しているのに見つけられない人の割合を測る。率が低ければ、たいてい仕事が豊富で経済が健康なことを意味する。率が高ければ、多くの人が仕事探しに苦労しており、経済が弱いかもしれない兆しだ。この一つの数字はほぼ全員に影響する。働く人には、仕事を見つけ保つのがどれほど易しいか難しいかを示唆する。企業には、客にお金を使う余裕があるかを示す。政府や中央銀行はこれを注視し、金利を変えるか経済を支えるかの判断に使う。だがこの数字は完璧ではない。仕事探しを諦めた人や、フルタイムを望むのにパートにとどまる人は数えない。だから賢い観察者は、一つの数字を越えてより全体像を見る。それでも失業率は、経済の健康をのぞく最も明確な窓の一つだ。パーセントの背後には、何百万もの実在の人々と、安定した仕事への願いがある。だから毎月、世界はこの静かだが力強い数字を読むために立ち止まる。",
        quiz: [
          { q: "What does the unemployment rate measure?", options: ["The share of people who want to work and are looking but cannot find a job", "The number of companies in a country", "The price of goods"], answer: 0 },
          { q: "What does a low unemployment rate usually mean?", options: ["Jobs are plentiful and the economy is likely healthy", "The economy is collapsing", "Nobody wants to work"], answer: 0 },
          { q: "Why is the number not perfect?", options: ["It misses people who gave up looking or want full-time but work part-time", "It counts everyone perfectly", "It is always wrong"], answer: 0 }
        ]
      },
      {
        id: "d1002-2",
        title: "How Batteries Store Energy",
        level: "★★★",
        genre: "テクノロジー",
        text: "Batteries are everywhere in modern life, powering our phones, toys, cars, and countless other devices. We charge them, use them, and charge them again, often without thinking about the clever chemistry inside. So how does a small battery actually store and release energy?\n\nThe secret lies in a chemical reaction. Inside a battery are two different materials, called electrodes, kept apart but connected by a special substance. When the battery is working, a chemical reaction makes tiny particles called electrons want to travel from one electrode to the other. But they cannot pass through the middle directly. Instead, they must flow out through the device — your phone or flashlight — doing useful work along the way, before returning to the battery. That flow of electrons is electricity.\n\nIn a rechargeable battery, this process can be reversed. When you plug it in to charge, electricity is pushed back into the battery, driving the chemical reaction backward and storing energy again, ready for next time.\n\nDifferent batteries use different chemicals, which affects how much energy they hold, how fast they charge, and how long they last. Scientists are always working to make batteries that store more power, charge faster, and are safer and cleaner.\n\nBetter batteries are now one of the most important goals in technology. They are the key to electric cars, to storing energy from the sun and wind, and to a future that relies less on burning fuel. All of it starts with that quiet chemistry in a little box.",
        summaryJa: "電池は現代生活の至る所にあり、電話や玩具、車、無数の機器を動かす。私たちは充電し、使い、また充電する。中の巧みな化学を考えもせずに。では小さな電池は実際どうエネルギーを蓄え放つのか。秘密は化学反応にある。電池の中には電極という二つの異なる材料があり、離されつつ特別な物質でつながれている。電池が働くとき、化学反応が電子という小さな粒子を一方の電極から他方へ移りたがらせる。だが真ん中を直接通れない。代わりに機器——電話や懐中電灯——を通って流れ出し、道中で有用な仕事をしてから電池に戻る。その電子の流れが電気だ。充電式電池では、この過程を逆にできる。充電のためつなぐと、電気が電池に押し戻され、化学反応を逆向きに進めて再びエネルギーを蓄え、次に備える。電池ごとに使う化学物質が異なり、蓄える量、充電の速さ、持ちに影響する。科学者は常に、より多く蓄え、速く充電し、より安全で清潔な電池を作ろうとしている。より良い電池は今、技術で最も重要な目標の一つだ。電気自動車や、太陽と風からのエネルギーの貯蔵、燃料を燃やすことに頼らない未来の鍵だ。すべては小さな箱の中の静かな化学から始まる。",
        quiz: [
          { q: "What makes a battery work?", options: ["A chemical reaction that drives electrons from one electrode to the other", "A tiny fire inside", "A small motor"], answer: 0 },
          { q: "Why must the electrons flow out through your device?", options: ["They cannot pass through the middle directly, so they do useful work on the way", "Because the device is empty", "They never move at all"], answer: 0 },
          { q: "What happens in a rechargeable battery when you charge it?", options: ["Electricity is pushed back in, reversing the reaction and storing energy again", "The battery melts", "Nothing happens"], answer: 0 }
        ]
      },
      {
        id: "d1002-3",
        title: "One World, One Measure",
        level: "★★☆",
        genre: "世界情勢",
        text: "Imagine trying to build a bridge if every worker used a different idea of how long a meter is, or trying to sell food if a kilogram meant something different in each shop. Trade, science, and travel would fall into chaos. To prevent this, the world has agreed on shared units of measurement — a quiet agreement that holds much of modern life together.\n\nMost countries use a system called the metric system, built on simple, shared units: the meter for length, the kilogram for weight, the second for time, and a few others. Because these units mean exactly the same thing everywhere, a part made in one country will fit a machine built in another, and a scientist's result can be checked by others across the globe.\n\nAgreeing on measurement is harder than it sounds. For a long time, units were based on physical objects, like a special metal bar kept to define the meter. But such objects can change slightly over time. So scientists have now redefined the basic units using unchanging facts of nature, making them stable forever and available to anyone, anywhere.\n\nA few countries still use older systems for daily life, which can cause confusion, and even costly mistakes, when working across borders.\n\nShared measurement is one of humanity's great quiet achievements. It lets people who have never met, speaking different languages, build, trade, and discover together — all because they agreed, long ago, on exactly how much a meter really is.",
        summaryJa: "もし作業員ごとに1メートルの長さの考えが違えば橋を建てるのを、店ごとに1キログラムの意味が違えば食べ物を売るのを想像してほしい。貿易も科学も旅も混乱に陥る。これを防ぐため、世界は共有の測定単位に合意した——現代生活の多くを支える静かな合意だ。多くの国はメートル法という仕組みを使い、簡素で共有された単位に基づく。長さのメートル、重さのキログラム、時間の秒など。これらの単位はどこでも全く同じ意味なので、ある国で作った部品が別の国で作った機械に合い、科学者の結果を世界中の他者が確認できる。測定への合意は聞こえるより難しい。長年、単位はメートルを定義する特別な金属棒のような物体に基づいた。だがそうした物体は時とともにわずかに変わりうる。そこで科学者は今、基本単位を変わらない自然の事実を使って再定義し、永遠に安定し、誰でもどこでも使えるようにした。いくつかの国は日常で古い仕組みをなお使い、国境を越えて作業するとき混乱や、時に高くつく誤りを生みうる。共有の測定は人類の偉大な静かな達成の一つだ。会ったこともなく違う言語を話す人々が、共に建て、取引し、発見できる——はるか昔に、1メートルが正確にどれだけかに合意したからだ。",
        quiz: [
          { q: "Why did the world agree on shared units of measurement?", options: ["Without them, trade, science, and travel would fall into chaos", "To make life more confusing", "Because units do not matter"], answer: 0 },
          { q: "What is the metric system built on?", options: ["Simple shared units like the meter, kilogram, and second", "A different unit in every shop", "No units at all"], answer: 0 },
          { q: "How have scientists made the basic units stable forever?", options: ["By redefining them using unchanging facts of nature instead of physical objects", "By hiding the metal bar", "By changing them every year"], answer: 0 }
        ]
      },
      {
        id: "d1002-4",
        title: "The Shinkansen: Japan's Bullet Train",
        level: "★★☆",
        genre: "日本",
        text: "Gliding across Japan at speeds over 300 kilometers per hour, the Shinkansen, often called the bullet train, is one of the country's proudest achievements. With its long, pointed nose and smooth white body, it looks as fast as it is. Since it first began running decades ago, it has changed the way people travel in Japan.\n\nThe Shinkansen is famous for more than its speed. It is also remarkably safe and punctual. In its long history, it has carried billions of passengers with an outstanding safety record. The trains are so reliable that the average delay is measured in seconds, not minutes. A train that is even slightly late is considered a serious matter.\n\nHow is this possible? The answer is careful engineering and discipline. The tracks are specially built and smooth, the trains are constantly checked, and the whole system is run with great precision. Even the cleaning of the trains between trips is done with impressive speed and care.\n\nThe bullet train also changed life and business. Cities far apart became close, letting people live in one place and work in another, or do business across the country in a single day.\n\nToday, many countries have built their own high-speed trains, but the Shinkansen remains a symbol of what careful planning can achieve. It shows a very Japanese idea: that speed, safety, and order can travel together — a smooth, swift arrow connecting the whole nation.",
        summaryJa: "時速300キロを超える速さで日本を駆け抜ける新幹線、しばしば弾丸列車と呼ばれるこれは、国の最も誇る達成の一つだ。長く尖った鼻と滑らかな白い車体で、速さそのままに見える。数十年前に初めて走って以来、日本の旅の仕方を変えた。新幹線は速さ以上のことで有名だ。驚くほど安全で時間に正確でもある。長い歴史で、卓越した安全記録とともに何十億もの乗客を運んできた。列車はとても信頼でき、平均遅延は分でなく秒で測られる。少しでも遅れる列車は重大事とみなされる。どうしてか。答えは入念な工学と規律だ。線路は特別に造られ滑らかで、列車は絶えず点検され、仕組み全体が高い精度で運行される。運行間の車内清掃さえ、見事な速さと心配りで行われる。弾丸列車は暮らしと事業も変えた。遠く離れた都市が近くなり、ある場所に住み別の場所で働いたり、一日で国中を商売したりできるようになった。今や多くの国が独自の高速列車を造ったが、新幹線は入念な計画が成し得るものの象徴であり続ける。速さ、安全、秩序が共に進めるという実に日本的な発想を示す。国全体をつなぐ、滑らかで速い矢だ。",
        quiz: [
          { q: "What is the Shinkansen famous for, besides its speed?", options: ["Being remarkably safe and punctual", "Being very slow", "Having no passengers"], answer: 0 },
          { q: "How late is the average Shinkansen?", options: ["Its average delay is measured in seconds, not minutes", "Several hours", "A full day"], answer: 0 },
          { q: "How did the bullet train change life and business?", options: ["Far-apart cities became close, so people could live and work in different places", "It made travel impossible", "It stopped all business"], answer: 0 }
        ]
      },
      {
        id: "d1002-5",
        title: "How We Taste Food",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "Biting into a juicy orange or a piece of chocolate brings a burst of flavor. We enjoy taste every day, but few of us think about how it actually works. The sense of taste is a clever partnership between the tongue, the nose, and the brain.\n\nThe main work begins on your tongue, which is covered with thousands of tiny bumps. Hidden in these bumps are even smaller structures called taste buds. When food dissolves in your mouth, the taste buds detect it and send signals to the brain. Scientists have found that taste buds mainly sense five basic tastes: sweet, sour, salty, bitter, and a savory taste called umami, found in foods like soup and cheese.\n\nBut here is a surprise: much of what we call \"taste\" is really smell. As you chew, tiny scents travel up to your nose from inside your mouth. The brain combines these smells with the signals from your tongue to create the rich flavors you enjoy. This is why food tastes dull and flat when you have a cold and your nose is blocked.\n\nTaste is not just for pleasure. Long ago, it helped keep our ancestors safe. A sweet taste signaled energy-rich food, while a bitter taste warned of something that might be harmful.\n\nSo the next time you enjoy a delicious meal, remember the quiet teamwork behind it. Your tongue, your nose, and your brain are working together to turn simple food into a world of flavor.",
        summaryJa: "みずみずしいオレンジや一片のチョコレートをかじると、風味がはじける。私たちは毎日味を楽しむが、それが実際どう働くか考える人は少ない。味覚は舌と鼻と脳の巧みな協力だ。主な働きは舌で始まる。舌は何千もの小さな突起で覆われている。この突起に隠れて、味蕾というさらに小さな構造がある。食べ物が口で溶けると、味蕾がそれを感知し脳に信号を送る。科学者は、味蕾が主に五つの基本の味を感じると発見した。甘味、酸味、塩味、苦味、そしてスープやチーズなどにあるうま味という旨い味だ。だが驚きがある。私たちが「味」と呼ぶものの多くは実は匂いだ。噛むと、小さな香りが口の中から鼻へ上る。脳はこの匂いを舌からの信号と合わせ、楽しむ豊かな風味を作る。だから風邪で鼻が詰まると食べ物の味が鈍く平板になる。味覚は楽しみのためだけではない。昔、祖先を安全に保つのを助けた。甘味はエネルギー豊富な食べ物を示し、苦味は害になりうるものを警告した。次においしい食事を楽しむとき、その背後の静かな共同作業を思い出してほしい。舌と鼻と脳が協力し、簡素な食べ物を風味の世界に変えている。",
        quiz: [
          { q: "What are hidden in the tiny bumps on your tongue?", options: ["Taste buds that detect food and send signals to the brain", "Small bones", "Tiny lights"], answer: 0 },
          { q: "What are the five basic tastes?", options: ["Sweet, sour, salty, bitter, and umami (savory)", "Only sweet and salty", "Hot and cold"], answer: 0 },
          { q: "Why does food taste dull when you have a cold?", options: ["Much of 'taste' is really smell, and a blocked nose cannot sense it", "Because the tongue disappears", "Because food changes"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-10-01",
    passages: [
      {
        id: "d1001-1",
        title: "How Companies Keep Customers Coming Back",
        level: "★★☆",
        genre: "ビジネス",
        text: "Winning a new customer is exciting for any business. But experienced companies know a quieter truth: keeping an old customer is often far more valuable than finding a new one. A loyal customer who returns again and again, and who tells friends, can be worth more than many one-time buyers.\n\nWhy is this so? Finding new customers is expensive. A company must spend money on advertising and offers to attract strangers. A happy existing customer, however, already knows and trusts the company. They come back on their own, cost little to keep, and often spend more over time.\n\nSo how do companies build this loyalty? The foundation is always a good product and honest service. No trick can keep customers who feel cheated or disappointed. Beyond that, businesses use many methods. Some offer reward programs, giving points or discounts to people who return. Others remember their customers' names and preferences, making each visit feel personal. Quick, kind help when something goes wrong can turn an angry customer into a devoted one.\n\nThere is a danger, though. Loyalty must be earned, not assumed. A company that takes its regular customers for granted, or treats new customers better than old ones, can lose the very trust it worked to build.\n\nIn the end, customer loyalty is a relationship, much like a friendship. It grows slowly, through many small moments of care and respect, and like any relationship, it must be nurtured to last.",
        summaryJa: "新しい客を得るのはどの事業にもわくわくする。だが経験ある企業は静かな真実を知っている。古い客を保つことは、新しい客を見つけるよりずっと価値があることが多い。何度も戻り、友人に伝える忠実な客は、多くの一度きりの買い手より価値がありうる。なぜか。新しい客を見つけるのは高くつく。見知らぬ人を引きつけるため広告や特典にお金を使わねばならない。だが満足した既存の客は、すでに会社を知り信頼している。自ら戻り、保つ費用は少なく、時とともに多く使うことが多い。ではどう忠誠を築くのか。土台は常に良い製品と誠実なサービスだ。だまされたり失望したと感じる客は、どんな策でも保てない。その上で企業は多くの方法を使う。戻る人に点数や割引を与える報酬制度もある。客の名や好みを覚え、各訪問を個人的に感じさせる店もある。問題が起きた時の素早く親切な対応は、怒った客を熱心な客に変えうる。だが危険もある。忠誠は得るもので、当然と思ってはならない。常連を軽んじたり、新規客を既存客より優遇する会社は、築いた信頼そのものを失いうる。客の忠誠は友情のような関係だ。多くの小さな心配りと敬意の瞬間を通じてゆっくり育ち、どんな関係とも同じく、続くには育まねばならない。",
        quiz: [
          { q: "Why is keeping an old customer often more valuable than finding a new one?", options: ["Loyal customers return on their own, cost little to keep, and often spend more", "Old customers never buy anything", "New customers are always free to find"], answer: 0 },
          { q: "What is the foundation of customer loyalty?", options: ["A good product and honest service", "Tricks and false promises", "Ignoring customers"], answer: 0 },
          { q: "What danger does the passage warn about?", options: ["Taking regular customers for granted can lose the trust you built", "Being too kind to customers", "Making products too good"], answer: 0 }
        ]
      },
      {
        id: "d1001-2",
        title: "Data Centers in Space?",
        level: "★★★",
        genre: "テクノロジー",
        text: "The buildings that power our digital world, called data centers, are hungry machines. They use enormous amounts of electricity to run their computers and even more to keep them cool. As our use of computing grows, so does this hunger. Now, some companies are exploring a bold and surprising idea: what if we put data centers in space?\n\nAt first this sounds like science fiction, but there are real reasons behind it. In orbit high above the Earth, sunlight is strong and almost never blocked by clouds or night. A data center there could be powered by huge solar panels, drawing clean energy directly from the sun, around the clock. Space is also extremely cold, which might help with the hard problem of cooling the computers.\n\nOf course, the challenges are enormous. Launching heavy equipment into space is very expensive. Repairing a broken machine in orbit is far harder than sending a worker to a building on Earth. And the computers must survive harsh radiation and the dangers of space.\n\nFor now, companies are testing small steps, such as putting a few powerful chips on a satellite to see how they perform. A full data center in space is still a distant dream.\n\nYet the idea shows how far people will reach to meet the growing need for computing power, while trying to protect the planet. The answer to an earthly problem may, one day, be found far above our heads.",
        summaryJa: "デジタル世界を支える建物、データセンターは飢えた機械だ。コンピューターを動かすのに膨大な電力を使い、冷やすのにさらに多く使う。計算の利用が増えるほど、この飢えも増す。今、一部の企業は大胆で意外な考えを探っている。データセンターを宇宙に置いたらどうか、と。最初はSFに聞こえるが、裏には本当の理由がある。地球のはるか上の軌道では、日光は強く、雲や夜にほとんど遮られない。そこのデータセンターは巨大な太陽光パネルで動き、太陽から直接、昼夜を問わず清潔なエネルギーを得られる。宇宙は極めて冷たくもあり、コンピューター冷却という難問を助けるかもしれない。もちろん課題は甚大だ。重い機器を宇宙へ打ち上げるのは非常に高価だ。軌道で壊れた機械を直すのは、地上の建物に作業員を送るよりはるかに難しい。コンピューターは厳しい放射線や宇宙の危険に耐えねばならない。今のところ企業は小さな一歩を試している。いくつかの強力なチップを衛星に載せ、どう働くか見るなどだ。宇宙の本格的なデータセンターはまだ遠い夢だ。だがこの考えは、地球を守ろうとしつつ、増える計算力の需要に応えるため人がどれほど遠くへ手を伸ばすかを示す。地上の問題の答えは、いつか頭上はるかに見つかるかもしれない。",
        quiz: [
          { q: "Why are data centers called 'hungry machines'?", options: ["They use enormous electricity to run and cool their computers", "They eat food", "They never use power"], answer: 0 },
          { q: "What is one reason to put a data center in space?", options: ["Strong, almost constant sunlight could power it with clean solar energy", "There is no sunlight in space", "Space is very warm"], answer: 0 },
          { q: "What is one big challenge of the idea?", options: ["Launching heavy equipment is expensive and repairs in orbit are very hard", "It is cheap and easy", "There are no challenges"], answer: 0 }
        ]
      },
      {
        id: "d1001-3",
        title: "Why Reliable News Matters",
        level: "★★★",
        genre: "世界情勢",
        text: "Every day, we are flooded with information. News reaches us from televisions, websites, and the phones in our pockets, at all hours. With so much available, one question grows more important than ever: how do we know what is true?\n\nReliable news — information that is carefully checked and honestly reported — is one of the quiet foundations of a healthy society. When people have accurate facts, they can make good decisions, whether about their health, their money, or their leaders. Good journalists work hard to gather facts, check them with several sources, and correct mistakes. This careful work helps keep the public informed and the powerful honest.\n\nBut today, false or misleading information spreads easily and quickly. A dramatic but untrue story can travel around the world before the truth catches up. Some false news is spread by accident; some is created on purpose to trick or divide people. Modern tools can even make fake images and videos look real.\n\nSo how can a person find reliable news? A few simple habits help. Check where a story comes from, and whether trusted sources report the same thing. Be careful of news designed to make you very angry or afraid, as strong emotions can cloud judgment. And remember that a real story can be corrected, while a lie often cannot.\n\nIn a world full of noise, the ability to find and value honest information is a vital skill — one that helps protect both individuals and the societies they share.",
        summaryJa: "毎日、私たちは情報であふれている。ニュースはテレビやウェブサイト、ポケットの電話から、いつでも届く。これほど多くが手に入る中、一つの問いがかつてなく重要になる。何が真実かをどう知るのか。信頼できるニュース——入念に確認され正直に報じられた情報——は、健全な社会の静かな土台の一つだ。正確な事実があれば、人は健康やお金、指導者について良い判断ができる。良い記者は懸命に事実を集め、複数の情報源で確認し、誤りを正す。この丁寧な仕事が、市民を知らせ、権力者を正直に保つのを助ける。だが今日、誤ったり誤解を招く情報はたやすく速く広がる。劇的だが真実でない話が、真実が追いつく前に世界を巡りうる。偶然広がる偽ニュースもあれば、人をだましたり分断するため意図的に作られるものもある。現代の道具は偽の画像や動画を本物らしく見せることさえできる。では信頼できるニュースをどう見つけるか。いくつかの簡単な習慣が役立つ。話の出所を確かめ、信頼できる情報源が同じことを報じているか見る。強く怒らせたり怖がらせるよう作られたニュースに注意する。強い感情は判断を曇らせうる。本当の話は訂正できるが、嘘はしばしばできない。雑音に満ちた世界で、正直な情報を見つけ重んじる力は不可欠な技能だ。個人と、共有する社会の両方を守る助けになる。",
        quiz: [
          { q: "Why is reliable news a foundation of a healthy society?", options: ["Accurate facts let people make good decisions and keep the powerful honest", "It has no effect on society", "It only entertains"], answer: 0 },
          { q: "Why does false information spread so easily today?", options: ["A dramatic but untrue story can travel fast, and tools can fake images and videos", "Because everyone checks everything", "Because lies move slowly"], answer: 0 },
          { q: "What is one habit that helps you find reliable news?", options: ["Check the source and whether trusted sources report the same thing", "Believe whatever makes you angriest", "Never check anything"], answer: 0 }
        ]
      },
      {
        id: "d1001-4",
        title: "Daruma: Japan's Dolls of Determination",
        level: "★★☆",
        genre: "日本",
        text: "In homes and shops across Japan, you may notice a curious round doll, usually bright red, with a serious face and two large white circles where the eyes should be. This is a daruma, a traditional doll that stands for good luck, patience, and the power of not giving up.\n\nThe daruma has a clever design. It is round and weighted at the bottom, so that if you push it over, it rights itself and stands up again. This has given it a famous saying: \"fall down seven times, stand up eight.\" The doll is a gentle reminder that no matter how often we fail, we can always rise and try again.\n\nThe most interesting custom involves the doll's blank eyes. When a person sets an important goal — passing an exam, starting a business, or any heartfelt wish — they paint in one eye. The one-eyed daruma then sits where it can be seen, as a daily reminder of the goal. When the goal is finally reached, the person joyfully paints in the second eye, completing the doll.\n\nDaruma are often bought at the New Year and at temples, and old ones are sometimes returned to be respectfully burned, making way for new hopes.\n\nMore than a toy, the daruma carries a warm and powerful message. Set your goal, work with patience, and never give up. Keep rising, and one day you will fill in that second eye.",
        summaryJa: "日本の家や店のあちこちで、不思議な丸い人形に気づくかもしれない。たいてい鮮やかな赤で、真剣な顔をし、目のあるべき所に二つの大きな白い円がある。これがだるま、幸運、忍耐、諦めない力を表す伝統的な人形だ。だるまは巧みな作りだ。丸く底が重いので、倒しても起き上がって再び立つ。ここから有名な言葉が生まれた。「七転び八起き」。この人形は、何度失敗しても、いつでも立ち上がり再び挑めると優しく思い出させる。最も興味深い習慣は人形の空白の目に関わる。人が重要な目標——試験の合格、起業、心からの願い——を定めると、片方の目を描き入れる。片目のだるまは見える所に置かれ、目標を毎日思い出させる。目標がついに達成されると、喜んでもう一方の目を描き入れ、人形を完成させる。だるまは正月や寺でよく買われ、古いものは敬意をもって焼かれ、新しい希望に道を譲ることもある。だるまは玩具以上に、温かく力強いメッセージを運ぶ。目標を定め、忍耐強く取り組み、決して諦めるな。立ち上がり続ければ、いつかあの二つ目の目を描き入れられる。",
        quiz: [
          { q: "What does a daruma doll stand for?", options: ["Good luck, patience, and the power of not giving up", "Laziness", "Bad luck"], answer: 0 },
          { q: "What famous saying is linked to the daruma's design?", options: ["'Fall down seven times, stand up eight'", "'Sleep all day'", "'Never try anything'"], answer: 0 },
          { q: "What is the custom with the daruma's eyes?", options: ["Paint one eye when setting a goal, and the second when the goal is reached", "Paint both eyes and throw it away", "Never paint the eyes"], answer: 0 }
        ]
      },
      {
        id: "d1001-5",
        title: "Why We Have Two Eyes",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "Have you ever wondered why we have two eyes instead of one? After all, each eye seems to see the same scene. But having two eyes gives us a remarkable ability that a single eye could not: the power to see the world in three dimensions, and to judge distance.\n\nThe secret is that your two eyes do not see exactly the same thing. Because they sit a few centimeters apart, each eye views the world from a slightly different angle. You can prove this easily: hold up one finger, and look at it with only your left eye, then only your right. The finger seems to jump from side to side.\n\nYour brain takes these two slightly different pictures and combines them into one. From the small differences between them, it cleverly works out how far away things are. This is why, with both eyes open, you can quickly judge whether a ball is near or far, or reach out and catch it.\n\nThis ability is called depth perception, and it is very useful. It helps us pour water into a cup, walk down stairs, drive a car, and avoid bumping into things. Animals that hunt, like eagles and cats, usually have both eyes facing forward for exactly this reason.\n\nSo two eyes are not just a spare in case one fails. Together, they turn two flat images into a rich, three-dimensional world — a quiet piece of teamwork happening inside your head every moment you look around.",
        summaryJa: "なぜ私たちは目が一つでなく二つあるのか、考えたことはあるだろうか。結局、どちらの目も同じ光景を見ているように思える。だが二つの目は、一つの目にはできない驚くべき能力を与える。世界を三次元で見て、距離を判断する力だ。秘密は、二つの目が全く同じものを見ていないことだ。数センチ離れているので、各目はわずかに違う角度から世界を見る。簡単に確かめられる。指を一本立て、左目だけで、次に右目だけで見る。指が左右に跳ぶように見える。脳はこの少し違う二つの絵を一つに合わせる。その小さな違いから、物がどれだけ遠いかを巧みに割り出す。だから両目を開けると、ボールが近いか遠いかを素早く判断でき、手を伸ばして捕れる。この能力を奥行き知覚といい、とても役立つ。コップに水を注ぎ、階段を下り、車を運転し、物にぶつからないようにするのを助ける。ワシや猫など狩りをする動物は、まさにこの理由で両目が前を向いていることが多い。だから二つの目は、一つが故障した時の予備ではない。二つ合わさって、二枚の平らな画像を豊かな三次元の世界に変える。見回すたびに頭の中で起きる、静かな共同作業だ。",
        quiz: [
          { q: "What remarkable ability do two eyes give us?", options: ["Seeing in three dimensions and judging distance", "Seeing in the dark", "Reading minds"], answer: 0 },
          { q: "Why do the two eyes not see exactly the same thing?", options: ["They sit a few centimeters apart, viewing the world from slightly different angles", "One eye is always closed", "They look in opposite directions"], answer: 0 },
          { q: "What is 'depth perception' useful for?", options: ["Pouring water, walking down stairs, driving, and catching a ball", "Nothing at all", "Only for sleeping"], answer: 0 }
        ]
      }
    ]
    },
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
    }
  ] };
