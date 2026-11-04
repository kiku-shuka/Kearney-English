/* デイリー配信リーディング
 * 毎朝の自動ルーチンがこのファイルを丸ごと上書き生成する（直近 7 日分を保持）。
 * days は日付降順。各 day = { date: "YYYY-MM-DD", passages: [readingPassages と同スキーマ + genre] }
 * このファイル以外は手書きデータであり、ルーチンは触らない。
 */
window.KE_DATA = window.KE_DATA || {};

KE_DATA.dailyReading = { days: [
    {
    date: "2026-11-04",
    passages: [
      {
        id: "d1104-1",
        title: "Why Do Shops Have Sales?",
        level: "★★☆",
        genre: "ビジネス",
        text: "Walk through almost any shopping street, and you will see them: big signs shouting SALE, 50% OFF, or FINAL CLEARANCE. Shops seem to love lowering their prices. But this raises a puzzling question. If a shop makes money by selling things, why would it suddenly choose to sell them for less?\n\nIn fact, sales are a clever business tool, not an act of kindness. There are several good reasons behind them. One of the most common is clearing old stock. Shops have limited space, and holding on to unsold goods costs money. A winter coat that does not sell by spring takes up room that newer products need. By cutting the price, the shop can sell it quickly, free up space, and get back at least some of its money.\n\nSales also bring people through the door. A customer who comes in for a cheap item may also buy other things at full price while they are there. The low price acts like bait, attracting shoppers who might otherwise have stayed home.\n\nTiming matters too. Shops often hold sales at the end of a season, after a holiday, or when a newer model arrives. They may also use short sales to compete with a rival shop nearby.\n\nSo the next time you see a big discount, remember that the shop has usually thought carefully about it. A sale is not simply a gift; it is a smart way to manage stock, attract customers, and keep money flowing, while still giving shoppers a genuine chance to save.",
        summaryJa: "店がなぜセールを行うのかについて。どの商店街を歩いても「セール」「半額」「最終処分」の大きな看板を目にする。店は値下げが大好きなようだ。だがここに不思議な疑問がある。店は物を売って儲けるのに、なぜ急に安く売ろうとするのか。実はセールは親切でなく巧妙な商売の手段だ。いくつか理由がある。最も一般的なのは古い在庫の処分だ。店の空間は限られ、売れ残り品を抱えると費用がかかる。春までに売れない冬のコートは、新商品に必要な場所を占める。値下げすれば素早く売り、空間を空け、少なくとも一部の資金を取り戻せる。セールは客を呼び込みもする。安い品目当てに来た客が、ついでに定価の物も買うかもしれない。安値は餌のように働く。時期も重要だ。季節末や祝日後、新型が出た時にセールをよく行う。近くの競合に対抗する短期セールもある。だからセールは単なる贈り物でなく、在庫管理と集客、資金の流れを保つ賢い方法であり、同時に買い手に本当に節約の機会も与える。",
        quiz: [
          { q: "What is one common reason shops hold sales?", options: ["To clear old stock and free up space", "To lose as much money as possible", "To close the shop forever"], answer: 0 },
          { q: "How can a low-priced item help a shop?", options: ["It brings customers in, who may also buy full-price items", "It stops anyone from entering", "It makes all other prices rise"], answer: 0 },
          { q: "When do shops often hold sales?", options: ["At the end of a season or when a newer model arrives", "Only on their first day of business", "Never, in most cases"], answer: 0 }
        ]
      },
      {
        id: "d1104-2",
        title: "How Does a Key and Lock Work?",
        level: "★★☆",
        genre: "テクノロジー",
        text: "Every day, we trust small metal keys to protect our homes, our cars, and our valuables. We slide a key into a lock, give it a turn, and the door opens. Use the wrong key, and nothing happens. It seems simple, but inside that small lock is a clever and precise little machine. The most common type is called a pin tumbler lock.\n\nInside the lock is a round part called the plug, which must turn to open the door. But the plug is held still by a row of small metal pins. Each pin is actually cut into two pieces of different lengths. A spring pushes each pin down, so the cut points sit at different heights, crossing the line where the plug meets the rest of the lock. While the pins cross this line, the plug cannot turn.\n\nThis is where the key comes in. The top edge of a key is cut into a special pattern of high and low points. When the correct key slides in, each cut lifts its matching pin to exactly the right height. At that moment, all the cuts in the pins line up perfectly along the gap around the plug. With nothing crossing the line any more, the plug is free to turn, and the lock opens.\n\nA wrong key lifts the pins to the wrong heights, so they still block the plug, and it will not turn. This small, hidden puzzle of pins and springs is a simple but brilliant idea that has kept doors safely locked for well over a century.",
        summaryJa: "鍵と錠前の仕組みについて。私たちは毎日、小さな金属の鍵に家や車、貴重品の保護を託している。鍵を錠に差し込んで回すと扉が開く。違う鍵では何も起きない。単純に見えるが、小さな錠の中には巧妙で精密な小さな機械がある。最も一般的なのはピンタンブラー錠だ。錠の中には「プラグ」という丸い部分があり、これが回ると扉が開く。だがプラグは一列の小さな金属ピンに止められている。各ピンは実は長さの違う二つに切れており、ばねが各ピンを押し下げるため、切れ目は異なる高さにあり、プラグと錠の残り部分の境目の線をまたぐ。ピンがこの線をまたぐ間、プラグは回らない。そこで鍵の出番だ。鍵の上縁は高低の特別な形に刻まれ、正しい鍵を差すと各刻みが対応するピンをちょうどよい高さに持ち上げる。その瞬間、全ての切れ目が隙間に沿って完全にそろい、プラグが回って錠が開く。違う鍵では高さが合わずプラグを塞いだままだ。一世紀以上扉を守ってきた見事な発想だ。",
        quiz: [
          { q: "In a pin tumbler lock, what holds the plug still?", options: ["A row of small metal pins cut into two pieces", "A large battery", "A magnet"], answer: 0 },
          { q: "What does the correct key do?", options: ["It lifts each pin to exactly the right height so the plug can turn", "It melts the pins", "It pushes the plug out"], answer: 0 },
          { q: "Why does a wrong key fail?", options: ["It lifts the pins to the wrong heights, so they still block the plug", "It is always too big to fit", "It turns the plug backward"], answer: 0 }
        ]
      },
      {
        id: "d1104-3",
        title: "What Is Sustainable Development?",
        level: "★★★",
        genre: "世界情勢",
        text: "Imagine a family that owns a small apple orchard. If they pick every apple and also cut down the trees for firewood, they might have a rich year. But the next year, there will be no trees, no apples, and nothing left for their children. Clearly, using everything at once is not wise. This simple idea lies at the heart of a concept that guides nations today: sustainable development.\n\nSustainable development means meeting the needs of people living now, without destroying the ability of future generations to meet their own needs. In other words, it asks us to grow and improve our lives, but in a way that does not use up the planet or ruin it for those who come after us.\n\nThe idea rests on balancing three things. The first is the economy: people need jobs, food, and a decent standard of living. The second is society: fairness, health, and education for all. The third is the environment: clean air and water, healthy forests, and a stable climate. True progress, the idea says, must care for all three at once, not sacrifice one for another.\n\nTo guide this effort, the countries of the world have agreed on a set of shared goals. These include ending poverty, providing good education, protecting nature, and using cleaner energy. The goals are ambitious, and no country has reached them all.\n\nSustainable development is not easy, and progress is often slow. But it offers a hopeful and practical vision: that humanity can keep improving its life while still passing on a healthy world to its children.",
        summaryJa: "持続可能な開発とは何かについて。小さなりんご園を持つ家族を想像しよう。りんごを全部もぎ、薪にと木も切り倒せば、その年は豊かかもしれない。だが翌年は木もりんごもなく、子どもたちに残る物もない。全てを一度に使い切るのは賢明でない。この単純な考えが、今日の国々を導く概念「持続可能な開発」の核心にある。持続可能な開発とは、今を生きる人々の必要を満たしつつ、将来の世代が自らの必要を満たす力を壊さないことを意味する。つまり暮らしを成長させ向上させるが、地球を使い果たしたり後の世代のために台無しにしたりしない形で、ということだ。考えは三つの均衡に基づく。第一は経済、人には仕事・食料・まともな生活水準が要る。第二は社会、全員への公平・健康・教育。第三は環境、きれいな空気と水、健全な森、安定した気候だ。本当の進歩は三つすべてを同時に大切にせねばならない。世界の国々は共通の目標に合意した。貧困の終結や良質な教育、自然保護、よりきれいなエネルギーだ。達成した国はまだない。",
        quiz: [
          { q: "What does sustainable development mean?", options: ["Meeting today's needs without harming future generations' ability to meet theirs", "Using up all resources as fast as possible", "Never changing anything"], answer: 0 },
          { q: "Which three things must sustainable development balance?", options: ["The economy, society, and the environment", "Only money", "Only one country's needs"], answer: 0 },
          { q: "What have the countries of the world agreed on?", options: ["A set of shared goals, such as ending poverty and protecting nature", "To ignore the environment", "To stop all education"], answer: 0 }
        ]
      },
      {
        id: "d1104-4",
        title: "Daruma: The Rolling Wish Doll",
        level: "★★☆",
        genre: "日本",
        text: "In many Japanese homes and shops, you can find a round, red doll with a serious face and no arms or legs. It is called a daruma, and it is far more than a simple decoration. The daruma is a symbol of good luck, patience, and the determination to reach a goal, however hard the journey.\n\nThe doll has a special shape. It is round and weighted at the bottom, so that if you push it over, it always rolls back upright on its own. This is the heart of its meaning. It represents a famous idea expressed in a Japanese saying: fall down seven times, stand up eight. The daruma teaches that no matter how often we are knocked down by failure, we should always rise again and keep trying.\n\nOne of the most charming customs involves the doll's eyes, which are usually left blank white when it is bought. When a person makes an important wish or sets a big goal, they paint in one eye. The one-eyed daruma then sits in the home, watching over them, a daily reminder of their promise to keep working. When at last the goal is reached, the person joyfully paints in the second eye.\n\nPeople buy daruma dolls when starting something important, such as a new business, an exam, or a personal dream. The little red doll is a gentle, powerful friend, quietly encouraging its owner never to give up until the goal is finally complete.",
        summaryJa: "だるまについて。日本の多くの家庭や店で、まじめな顔をして手足のない、丸くて赤い人形を見かける。だるまと呼ばれ、単なる飾り以上のものだ。だるまは幸運・忍耐、そしてどんなに道のりが厳しくても目標に達しようとする決意の象徴だ。人形は特別な形をしている。丸く底が重いので、倒しても必ず自分で起き上がる。これが意味の核心だ。「七転び八起き」という日本のことわざで表される有名な考えを表す。失敗に何度打ちのめされても、また立ち上がり挑み続けよ、と教える。最も心温まる習慣は目に関わる。買った時、両目はたいてい白い空白のままだ。大切な願い事をしたり大きな目標を立てたりする時、片方の目を描き入れる。片目のだるまは家に座って見守り、努力し続ける約束を日々思い出させる。ついに目標が達成されると、喜んでもう片方の目を描き入れる。新しい事業や試験、個人の夢など、大切な事を始める時に買う。あきらめるなと静かに励ます力強い友だ。",
        quiz: [
          { q: "Why does a daruma doll always return upright?", options: ["It is round and weighted at the bottom", "It has hidden legs", "Someone lifts it each time"], answer: 0 },
          { q: "What saying does the daruma represent?", options: ["Fall down seven times, stand up eight", "Look before you leap", "The early bird catches the worm"], answer: 0 },
          { q: "What is the custom involving the daruma's eyes?", options: ["Paint one eye when making a wish, the other when the goal is reached", "Paint both eyes at the start", "Never paint the eyes"], answer: 0 }
        ]
      },
      {
        id: "d1104-5",
        title: "How Do Volcanoes Work?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "A volcano can seem like one of nature's most frightening wonders: a mountain that suddenly breathes fire, smoke, and rivers of glowing rock. For thousands of years, people watched them with fear and wonder. Today, science can explain where this tremendous power comes from, and the answer lies far beneath our feet.\n\nDeep inside the Earth, below the hard surface we live on, the rock is so hot that in some places it melts into a thick, glowing liquid. This underground molten rock is called magma. Because magma is lighter than the solid rock around it, it slowly rises, collecting in large pools called magma chambers, often several kilometres below the ground.\n\nMagma also contains gases, trapped under enormous pressure, rather like the gas in a fizzy drink before you open the bottle. As the magma rises and the pressure drops, these gases try to escape and expand. If the pressure becomes too great, the magma is forced violently up through a weak spot or crack in the surface. This is an eruption.\n\nOnce the molten rock reaches the open air, we no longer call it magma. It is now called lava. The lava flows out, sometimes gently, sometimes in a huge explosion of ash and rock. As the lava cools, it hardens into new stone, slowly building up the mountain shape of the volcano over many eruptions.\n\nVolcanoes can be dangerous, but they also create rich soil and new land. They are a dramatic reminder that our calm-looking planet is still powerfully alive deep inside.",
        summaryJa: "火山の仕組みについて。火山は自然の最も恐ろしい驚異の一つに見える。突然、火と煙、輝く岩の川を噴き出す山だ。何千年もの間、人々は恐れと驚きで見つめてきた。今日、科学はこの途方もない力がどこから来るかを説明でき、答えは私たちの足のはるか下にある。地球の奥深く、私たちが暮らす硬い地表の下では、岩がとても熱く、場所によっては溶けて濃く輝く液体になる。この地下の溶けた岩をマグマという。マグマは周囲の固い岩より軽いためゆっくり上昇し、地下数キロにあるマグマだまりという大きな溜まりに集まる。マグマは巨大な圧力の下に閉じ込められた気体も含む。炭酸飲料を開ける前の気体のようだ。マグマが上昇し圧力が下がると、気体が逃げ膨張しようとする。圧力が高くなりすぎると、マグマは地表の弱い所や割れ目から激しく押し上げられる。これが噴火だ。溶けた岩が地上に出ると溶岩と呼ぶ。冷えると固まって新しい石になり、何度もの噴火で山の形を築く。豊かな土や新しい土地も生む。地球が今も内部で力強く生きている証だ。",
        quiz: [
          { q: "What is magma?", options: ["Hot molten rock deep inside the Earth", "A kind of cold water", "Ash on the surface"], answer: 0 },
          { q: "Why does rising magma cause an eruption?", options: ["Trapped gases expand as pressure drops, forcing the magma up", "It freezes and cracks", "It is pulled by the moon"], answer: 0 },
          { q: "What do we call molten rock once it reaches the open air?", options: ["Lava", "Magma chamber", "Ash only"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-11-03",
    passages: [
      {
        id: "d1103-1",
        title: "How Do Auctions Work?",
        level: "★★☆",
        genre: "ビジネス",
        text: "Most of the time, when we buy something, the price is already fixed. We see the number on the label, and we decide whether to pay it. But there is another, older way to sell things, where the price is not decided in advance. Instead, the buyers themselves decide it, by competing with one another. This is called an auction.\n\nAt an auction, an item is offered for sale, and people who want it make offers, called bids. Each new bid must be higher than the last. A person running the auction, the auctioneer, calls out the rising prices. As long as someone is willing to pay more, the price keeps climbing. When no one will go higher, the item is sold to the person who made the highest bid.\n\nWhy sell this way? Auctions are useful when the true value of something is uncertain. A rare painting, an old house, or a special antique may be worth very different amounts to different people. An auction lets the market decide the price naturally, based on how much people really want the item that day.\n\nFor the seller, an auction can bring a surprisingly high price if several buyers compete strongly. For buyers, it offers a fair and open chance to win, though there is a risk of paying too much in the excitement of the moment.\n\nAuctions are used for art, farm animals, antiques, and even government contracts. Today, many happen online, with people bidding from around the world. The idea, however, remains the same: let competition decide the price.",
        summaryJa: "競売（オークション）の仕組みについて。普段、何かを買う時は値段が既に決まっている。札の数字を見て払うか決める。だが値段を前もって決めない、より古い売り方もある。買い手自身が競い合って値段を決める。これを競売という。競売では品物が売りに出され、欲しい人が入札という申し出をする。新しい入札は前より高くなければならない。競売人が上がっていく値を読み上げ、誰かが払う気がある限り値は上がり続ける。誰も上を出さなくなると、最高額を付けた人に売られる。なぜこう売るのか。品物の本当の価値が不確かな時に役立つからだ。珍しい絵、古い家、特別な骨董は人によって価値が大きく異なる。競売はその日の欲しさに応じて市場に自然に値を決めさせる。売り手は競争が激しければ驚くほど高値が付き、買い手は公平で開かれた機会を得るが、勢いで払い過ぎる危険もある。美術品や家畜、骨董、政府契約にも使われ、今は多くがオンラインで行われる。",
        quiz: [
          { q: "What is a 'bid' at an auction?", options: ["An offer to buy, which must be higher than the last", "A fixed price on a label", "A kind of receipt"], answer: 0 },
          { q: "When is an auction especially useful?", options: ["When the true value of something is uncertain", "When everything has a clear fixed price", "When no one wants the item"], answer: 0 },
          { q: "What is a risk for buyers at an auction?", options: ["Paying too much in the excitement of the moment", "Never being allowed to bid", "The price can never rise"], answer: 0 }
        ]
      },
      {
        id: "d1103-2",
        title: "How Does a Thermos Keep Drinks Hot or Cold?",
        level: "★★☆",
        genre: "テクノロジー",
        text: "On a cold morning, you can pour hot tea into a thermos flask, and hours later it is still steaming. On a hot day, the same flask can keep a drink icy cold. It seems almost magical that one simple container can do both. The secret is that a thermos does not add heat or cold; it simply slows down the movement of heat.\n\nHeat always tries to flow from a warmer place to a cooler one. To keep a drink hot, you must stop heat from escaping. To keep a drink cold, you must stop heat from getting in. A thermos is designed to block heat from moving in either direction.\n\nThe clever part is a double wall. A thermos has a container inside another container, with a narrow gap between them. From this gap, most of the air has been removed, creating something close to a vacuum, a space with almost nothing in it. Because heat needs a material to travel through easily, this near-empty gap is a powerful barrier. Heat struggles to cross it.\n\nOn top of this, the inner surfaces are often shiny, like a mirror. This shiny layer reflects heat rays back, adding another barrier against heat escaping or entering.\n\nTogether, these features mean that heat moves extremely slowly in or out. The drink inside keeps its temperature for many hours. The thermos is a beautiful example of clever design: instead of using power or energy, it simply uses empty space and a mirror to quietly control the flow of heat.",
        summaryJa: "魔法瓶（保温・保冷ボトル）の仕組みについて。寒い朝、魔法瓶に熱いお茶を注げば何時間後もまだ湯気が立つ。暑い日には同じ瓶が飲み物を冷たいまま保つ。一つの単純な容器が両方できるのは不思議だが、秘密は熱を加えたり冷やしたりするのでなく、熱の移動を遅らせる点にある。熱は常に暖かい所から冷たい所へ流れようとする。熱いまま保つには熱の逃げを止め、冷たいまま保つには熱の侵入を止める必要がある。魔法瓶はどちら向きの熱移動も妨げるように作られている。巧妙なのは二重の壁だ。容器の中にもう一つ容器があり、間に狭い隙間がある。この隙間からほとんどの空気が抜かれ、ほぼ真空に近い、中にほとんど何もない空間になる。熱は物質を通って伝わりやすいので、このほぼ空の隙間は強力な壁になる。さらに内側の面は鏡のように光り、熱線を反射して逃げや侵入を防ぐ。力を使わず空間と鏡で熱の流れを静かに制御する見事な設計だ。",
        quiz: [
          { q: "What does a thermos actually do?", options: ["It slows down the movement of heat in or out", "It adds heat to the drink", "It creates cold air"], answer: 0 },
          { q: "Why is the gap between the two walls near-empty (a vacuum)?", options: ["Heat needs a material to travel through, so an empty gap blocks it", "To make the flask lighter only", "To store extra drink"], answer: 0 },
          { q: "What do the shiny inner surfaces do?", options: ["They reflect heat rays back, blocking heat from escaping or entering", "They make the drink taste better", "They produce light"], answer: 0 }
        ]
      },
      {
        id: "d1103-3",
        title: "What Is Fair Trade?",
        level: "★★★",
        genre: "世界情勢",
        text: "When you buy a bar of chocolate, a cup of coffee, or a banana, it is easy to forget that the journey began far away, often on a small farm in a poorer country. The farmers who grow these crops work hard, yet for a long time many of them earned very little. The price they received was so low that they could barely support their families. Fair trade is an idea created to help change this.\n\nThe goal of fair trade is simple: to make sure that the farmers and workers who grow our food receive a fair and stable price for it. Under fair trade rules, buyers agree to pay at least a certain minimum price, even when world prices fall very low. This gives farmers some protection and allows them to plan for the future.\n\nFair trade also sets other standards. It encourages safe working conditions, bans unfair child labour, and often provides extra money for the whole community, which can be used to build schools, wells, or health centres.\n\nWhen a product follows these rules, it can carry a special label, so shoppers can recognise it. By choosing such products, customers in richer countries can support farmers on the other side of the world, often for only a little extra cost.\n\nFair trade is not perfect, and it cannot solve every problem of global poverty. But it reflects a hopeful idea: that trade between distant countries can be made more just, and that the choices of ordinary shoppers can help improve the lives of people they will never meet.",
        summaryJa: "フェアトレード（公正取引）とは何かについて。板チョコやコーヒー、バナナを買う時、その旅が遠くの、しばしば貧しい国の小さな農園で始まったことを忘れがちだ。これらの作物を育てる農家は懸命に働くのに、長い間ごくわずかしか得られなかった。受け取る価格が低すぎて家族を養うのもやっとだった。フェアトレードはこれを変えるために生まれた考えだ。目標は単純で、食べ物を育てる農家や労働者が公正で安定した価格を受け取れるようにすることだ。この仕組みでは、買い手は世界価格が大きく下がっても少なくとも一定の最低価格を払うと約束する。これが農家を守り、将来の計画を可能にする。安全な労働条件を促し、不当な児童労働を禁じ、地域全体のための追加資金を出すこともあり、学校や井戸、診療所を作れる。規則に従う商品には専用のラベルが付き、買い物客が見分けられる。豊かな国の消費者がわずかな追加費用で遠くの農家を支えられる。完全ではないが、取引をより公正にできるという希望を示す。",
        quiz: [
          { q: "What is the main goal of fair trade?", options: ["To ensure farmers receive a fair and stable price for their crops", "To make food more expensive for no reason", "To stop all international trade"], answer: 0 },
          { q: "What do buyers agree to under fair trade rules?", options: ["To pay at least a certain minimum price, even when world prices fall", "To pay as little as possible", "To buy only from rich countries"], answer: 0 },
          { q: "How can shoppers recognise a fair trade product?", options: ["It can carry a special label", "By its weight", "It has no packaging"], answer: 0 }
        ]
      },
      {
        id: "d1103-4",
        title: "Shichi-Go-San: Celebrating Children's Growth",
        level: "★★☆",
        genre: "日本",
        text: "In mid-November, if you visit a Japanese shrine, you may see a charming sight: small children dressed in beautiful, formal clothes, walking proudly with their parents. Many of the girls wear bright kimono, and many of the boys wear traditional outfits too. This is Shichi-Go-San, a gentle festival that celebrates the healthy growth of young children.\n\nThe name means seven-five-three, and these numbers are the heart of the celebration. Families mark the festival for girls aged three and seven, and for boys aged three and five. The event is usually held around the fifteenth of November, though families may visit on any convenient day near that date.\n\nThe custom has deep roots. Long ago, when medicine was poor, many children did not survive their early years. Reaching these ages was a real and joyful achievement, so parents gave thanks and prayed for their child's continued health and happiness. That spirit of gratitude remains at the centre of the festival today.\n\nOn the day, families often visit a shrine to offer thanks. A common and much-loved part of the celebration is a sweet called chitose-ame, meaning thousand-year candy. This long, thin, red-and-white sweet carries a wish for a long and healthy life.\n\nOf course, taking photographs is a big part of the day too, and these pictures become treasured family memories. Shichi-Go-San is a warm reminder of something universal: the deep love parents feel for their children, and their simple, heartfelt wish to see them grow up safe and well.",
        summaryJa: "七五三について。十一月の半ば、日本の神社を訪れると、美しい晴れ着を着た小さな子どもたちが親と誇らしげに歩く微笑ましい光景を目にするかもしれない。多くの女の子は鮮やかな着物を、男の子も伝統的な装いをまとう。これが七五三、幼い子の健やかな成長を祝う穏やかな行事だ。名は「七・五・三」を意味し、この数字が祝いの核心だ。女の子は三歳と七歳、男の子は三歳と五歳で祝う。たいてい十一月十五日ごろに行うが、その近くの都合のよい日に参る家庭も多い。由来は深い。昔、医療が乏しく多くの子が幼くして亡くなった時代、この年齢に達するのは本当に喜ばしい達成で、親は感謝し、子の健康と幸せを祈った。その感謝の心が今も中心にある。当日は神社に参り、千歳飴という細長い紅白の飴が愛される。長く健やかな命への願いが込められる。写真も大切な思い出になる。子を思う親の愛を表す行事だ。",
        quiz: [
          { q: "What does Shichi-Go-San celebrate?", options: ["The healthy growth of young children", "The start of the new year", "A rice harvest"], answer: 0 },
          { q: "Which ages are marked in the festival?", options: ["Girls aged three and seven; boys aged three and five", "Only age ten", "Adults aged twenty"], answer: 0 },
          { q: "What does the sweet 'chitose-ame' represent?", options: ["A wish for a long and healthy life", "A kind of medicine", "The end of childhood"], answer: 0 }
        ]
      },
      {
        id: "d1103-5",
        title: "Why Does Bread Rise?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "Think about the difference between a flat, hard cracker and a soft, fluffy loaf of bread. Both can be made from similar flour, yet bread is light and full of tiny holes. Something makes the dough grow and fill with air before it is baked. That something is one of the oldest and most useful partnerships between humans and nature: the work of yeast.\n\nYeast is a tiny living thing, a kind of fungus so small that we cannot see a single one. When a baker mixes yeast into dough with a little warmth, water, and the sugars found in flour, the yeast begins to feed. As it eats the sugars, it produces a gas called carbon dioxide, the same gas we breathe out.\n\nThis gas cannot easily escape from the stretchy dough. Instead, it forms thousands of tiny bubbles trapped inside. As more and more gas is made, these bubbles grow, and the whole lump of dough slowly swells and rises, sometimes doubling in size.\n\nWhen the risen dough goes into a hot oven, the heat makes the trapped gas expand even more, pushing the bread up further. The heat then makes the dough firm, freezing all those little bubbles in place. This is why a slice of bread is covered in small holes.\n\nSo the soft texture of bread is really a record of the quiet, invisible work of millions of tiny living creatures. It is a wonderful example of how people learned, long ago, to turn a natural process into delicious food.",
        summaryJa: "パンが膨らむ理由について。平たく硬いクラッカーと、柔らかくふわふわのパンの違いを考えてみよう。似た小麦粉から作れるのに、パンは軽く小さな穴だらけだ。焼く前に生地を膨らませ空気で満たす何かがある。それは人間と自然の最も古く有用な協力の一つ、酵母（イースト）の働きだ。酵母は小さな生き物で、一つでは見えないほど小さな菌の一種だ。パン職人が酵母を生地に混ぜ、少しの温かさと水、小麦粉の糖を与えると、酵母は食べ始める。糖を食べると二酸化炭素という気体を出す。私たちが吐く息と同じ気体だ。この気体は伸びる生地から簡単には逃げられず、内部に閉じ込められた何千もの小さな泡になる。気体が増えるほど泡は大きくなり、生地全体がゆっくり膨らみ、時に倍の大きさになる。膨らんだ生地を熱い窯に入れると、熱で気体がさらに膨張しパンを押し上げ、やがて生地が固まって泡がその場で固定される。だからパンは小さな穴だらけだ。パンの柔らかさは無数の小さな生き物の静かな働きの記録だ。",
        quiz: [
          { q: "What makes bread dough rise?", options: ["Yeast producing a gas called carbon dioxide", "Adding cold water only", "Pressing the dough flat"], answer: 0 },
          { q: "What is yeast?", options: ["A tiny living thing, a kind of fungus", "A type of metal", "A kind of salt"], answer: 0 },
          { q: "Why is a slice of bread covered in small holes?", options: ["Tiny gas bubbles were trapped, then fixed in place by the oven's heat", "Someone makes the holes by hand", "The flour has holes in it"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-11-02",
    passages: [
      {
        id: "d1102-1",
        title: "What Is a Franchise?",
        level: "★★☆",
        genre: "ビジネス",
        text: "If you travel to a different city, or even a different country, you may notice the same shops and restaurants again and again. The same burger chain, the same coffee shop, the same convenience store appears everywhere, looking almost identical. Often, this is possible because of a business idea called a franchise.\n\nIn a franchise, one company owns a successful brand, along with its name, its products, and its way of doing business. This company is called the franchisor. Instead of opening every new shop itself, it allows other people to open and run their own shop using that brand. These people are called franchisees.\n\nA franchisee pays the franchisor a fee, and often a share of the profits. In return, they get to use the famous name, sell the well-known products, and receive training and support. They also must follow strict rules, so that every shop looks and feels the same and offers the same quality.\n\nThis system has benefits for both sides. The franchisor can grow very quickly across many places without paying for everything alone. The franchisee gets to run a business with a trusted name, which is less risky than starting something completely new and unknown.\n\nOf course, there are challenges too. The franchisee has less freedom to make their own choices, and must share their earnings. Still, franchising has become one of the most common ways for brands to spread around the world. The next time you see a familiar shop far from home, there is a good chance it is a franchise.",
        summaryJa: "フランチャイズとは何かについて。別の街、さらには別の国へ行っても、同じ店や飲食店を何度も見かけることがある。同じハンバーガーチェーン、同じ喫茶店、同じコンビニがどこにでも、ほぼそっくりな姿で現れる。これはフランチャイズという事業の仕組みのおかげであることが多い。フランチャイズでは、ある会社が成功したブランドを、その名前・商品・商売のやり方とともに所有する。これを本部（フランチャイザー）という。新店を全て自分で開く代わりに、他の人がそのブランドを使って自分の店を開き運営するのを認める。この人々を加盟店（フランチャイジー）と呼ぶ。加盟店は本部に料金を払い、しばしば利益の一部も納める。見返りに有名な名前を使い、知られた商品を売り、研修や支援を受ける。各店が同じに見え同じ品質になるよう厳しい規則にも従う。本部は素早く広がれ、加盟店は信頼ある名前で比較的低リスクに商売できる。自由が少なく収益も分け合う難点もある。",
        quiz: [
          { q: "What is a 'franchisee'?", options: ["A person who opens and runs a shop using another company's brand", "The company that owns the brand", "A type of product"], answer: 0 },
          { q: "What does a franchisee give the franchisor?", options: ["A fee and often a share of the profits", "Nothing at all", "A new brand name"], answer: 0 },
          { q: "Why is franchising less risky for the franchisee?", options: ["They run a business with a trusted, well-known name", "The brand is completely unknown", "They can ignore all rules"], answer: 0 }
        ]
      },
      {
        id: "d1102-2",
        title: "How Does a Smoke Detector Work?",
        level: "★★☆",
        genre: "テクノロジー",
        text: "On the ceiling of many homes, offices, and hotels is a small, round, white device that most people rarely think about: the smoke detector. It usually sits quietly for years. But if a fire starts, it can save lives by giving an early warning, long before people might notice the danger themselves, especially while they are asleep.\n\nBut how does such a small, simple-looking device sense smoke in the air? There are a few types, but one common kind works using light. Inside the detector is a small, dark chamber with a tiny light source, such as an LED, shining a narrow beam across it. Next to the beam, but not directly in its path, sits a light sensor.\n\nIn normal, clean air, the light shines straight across the chamber, and the sensor beside it stays in the dark. But when smoke drifts into the chamber, its tiny particles scatter the light in all directions. Some of this scattered light now reaches the sensor. The moment the sensor detects this light, the detector knows smoke is present and sets off a loud alarm.\n\nThis clever design means the detector does not need to see fire or feel heat. It only needs to notice smoke particles in the air. Because of this, it can warn people very early, sometimes before flames even appear.\n\nSmoke detectors are cheap, simple, and extremely effective. This small, quiet guardian on the ceiling is one of the most successful safety inventions of modern times, protecting millions of people every single night.",
        summaryJa: "煙感知器（火災報知器）の仕組みについて。多くの家庭やオフィス、ホテルの天井には、普段ほとんど意識されない小さな丸い白い装置がある。煙感知器だ。何年も静かに取り付けられているが、火災が起きれば早期に警報を出し、特に就寝中など人が危険に気づく前に命を救える。ではこの小さな装置はどうやって空気中の煙を感知するのか。数種類あるが、よくある一つは光を使う。内部には小さな暗い部屋があり、LEDなどの小さな光源が細い光の筋を横切らせる。その光の筋の脇、直接の進路からは外れた位置に光センサーがある。きれいな空気ではセンサーは暗いままだが、煙が入ると微粒子が光をあらゆる方向に散乱させ、その一部がセンサーに届く。センサーが光を捉えた瞬間、煙ありと判断し大きな警報を鳴らす。炎を見たり熱を感じたりせず、煙の粒子に気づくだけでよい。安価で単純だが非常に効果的な発明だ。",
        quiz: [
          { q: "What does one common type of smoke detector use to sense smoke?", options: ["A light beam and a light sensor", "A camera that sees fire", "A thermometer only"], answer: 0 },
          { q: "In clean air, why does the alarm stay silent?", options: ["The light shines straight across and does not reach the sensor", "There is no light inside", "The sensor is broken"], answer: 0 },
          { q: "How does smoke set off the alarm?", options: ["Its particles scatter the light so some reaches the sensor", "It blocks all electricity", "It heats the whole room"], answer: 0 }
        ]
      },
      {
        id: "d1102-3",
        title: "Counting People: The Census Around the World",
        level: "★★★",
        genre: "世界情勢",
        text: "How many people live in a country? It sounds like a simple question, but the answer is very important, and surprisingly hard to find. To answer it, almost every nation in the world carries out a great counting of its people, called a census. Usually it happens once every ten years.\n\nA census is more than just a head count. Governments try to learn who lives where, how old people are, what work they do, and how families are made up. To do this, they send forms to every home, or send workers to visit, asking people to answer questions about their household.\n\nWhy go to all this effort? Because governments use this information to plan for the future. If a census shows that many young children live in one area, the government knows it may need to build more schools there. If another area has many older people, it may need more hospitals and care. The data also helps decide how money and services are shared fairly among regions.\n\nTaking a census is a huge task. In a large country, counting hundreds of millions of people takes years of planning and a small army of workers. In some remote places, counters must travel for days to reach a single village.\n\nThe idea of counting people is ancient, used by rulers thousands of years ago. Today it is more organized and fair, aiming to include everyone. A census is one of the quiet but powerful tools that help a country understand itself and plan wisely for the years ahead.",
        summaryJa: "世界の国勢調査（人口調査）について。ある国に何人住んでいるか。単純に聞こえるが、その答えはとても重要で、意外に調べにくい。答えを得るため、世界のほぼ全ての国が「国勢調査」と呼ばれる大規模な人口の数え上げを行う。たいてい十年に一度だ。国勢調査は単なる頭数の勘定ではない。政府は誰がどこに住み、年齢や仕事、家族構成はどうかを知ろうとする。各家庭に用紙を送ったり調査員が訪問したりして、世帯について質問に答えてもらう。なぜそこまでするのか。政府はこの情報で将来を計画するからだ。幼い子が多い地域なら学校を増やす必要が分かり、高齢者が多ければ病院や介護が要る。資金やサービスを地域に公平に配る判断にも役立つ。大国では数億人を数えるのに何年もの計画と大勢の調査員が要る。遠隔地では一つの村へ何日もかけて向かう。古代から行われてきたが、今はより整然と公平で、全員を含めることを目指す。",
        quiz: [
          { q: "What is a census?", options: ["A great counting of a country's people, usually every ten years", "A yearly tax", "A kind of election only"], answer: 0 },
          { q: "Why do governments collect census information?", options: ["To plan for the future, such as building schools or hospitals", "To sell it to shops", "For no real reason"], answer: 0 },
          { q: "Why is taking a census a huge task?", options: ["Counting millions of people takes years of planning and many workers", "It is done in one hour", "Only one person does it"], answer: 0 }
        ]
      },
      {
        id: "d1102-4",
        title: "Furoshiki: The Japanese Art of Wrapping Cloth",
        level: "★★☆",
        genre: "日本",
        text: "In Japan, there is a simple but clever everyday tool that is just a square piece of cloth. It is called a furoshiki. At first, it looks like nothing special, just a decorated handkerchief, perhaps a bit larger. But in skilled hands, this single square of cloth can become a bag, a gift wrapper, or a way to carry almost anything.\n\nThe furoshiki has a long history. Its name comes from the word for bath, and long ago people used such cloths to wrap their clothes at public baths. Over time, they became a common way to carry and wrap all kinds of things, from books to lunch boxes to bottles.\n\nThe beauty of the furoshiki is its simple flexibility. There are no handles, no zips, and no fixed shape. By folding and tying the corners in different ways, a person can wrap a round melon, a flat box, or two bottles side by side. When the cloth is not needed, it folds flat and takes up almost no space.\n\nToday, as many people worry about waste from plastic bags and paper, the furoshiki is becoming popular again, both in Japan and abroad. It can be used again and again for years, and a beautiful cloth makes a gift feel even more special.\n\nThe furoshiki shows a gentle idea found often in Japanese culture: that a simple, ordinary object, used with care and a little skill, can be both useful and beautiful at the same time.",
        summaryJa: "日本の風呂敷について。日本には、ただの正方形の布でありながら簡素で巧妙な日用品がある。風呂敷だ。一見すると、少し大きめの装飾されたハンカチにしか見えない。しかし使い慣れた手にかかれば、この一枚の布が鞄にも、贈り物の包みにも、ほとんど何でも運ぶ道具にもなる。風呂敷には長い歴史がある。名は「風呂」の語に由来し、昔は公衆浴場で衣類を包むのに使われた。やがて本や弁当、瓶まで、あらゆる物を運び包む一般的な方法になった。良さはその単純な柔軟性だ。取っ手もファスナーも決まった形もない。角の折り方・結び方を変えるだけで、丸いメロンも平たい箱も二本の瓶も包める。使わない時は平らに畳め場所を取らない。今やレジ袋や紙の無駄を気にする人が増え、国内外で再び人気だ。何年も繰り返し使え、美しい布は贈り物を一層特別にする。簡素な物を工夫して使う日本文化の考えを表す。",
        quiz: [
          { q: "What is a furoshiki?", options: ["A square piece of cloth used to wrap and carry things", "A kind of hard suitcase", "A paper bag"], answer: 0 },
          { q: "Where does the name 'furoshiki' come from?", options: ["The word for bath, where cloths wrapped clothes", "The word for book", "The name of a city"], answer: 0 },
          { q: "Why is the furoshiki becoming popular again?", options: ["It can be reused for years, unlike plastic bags", "It is made of plastic", "It can only be used once"], answer: 0 }
        ]
      },
      {
        id: "d1102-5",
        title: "How Do Magnets Work?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "Most of us have played with magnets. We know that they can stick to a fridge, pick up paper clips, and either pull toward each other or push apart. This invisible force feels almost like magic. But what is really happening inside a magnet, and why do only some things feel its pull?\n\nThe secret lies deep inside the material, far too small to see. Everything is made of tiny atoms, and inside many atoms are even tinier moving parts called electrons. As they move, each atom can act like an incredibly small magnet, with a north end and a south end.\n\nIn most materials, these tiny atomic magnets point in every direction at random, so their forces cancel out, and the material is not magnetic. But in a few special metals, such as iron, the tiny magnets can line up, all pointing the same way. When billions of them line up together, their forces add up, and the whole object becomes a magnet we can feel.\n\nEvery magnet has two ends, called poles: a north and a south. A simple rule governs them: opposite poles attract, pulling together, while like poles repel, pushing apart. This is why two magnets sometimes jump together and sometimes refuse to meet.\n\nMagnets are not just toys. They are hidden inside motors, speakers, computers, and many machines we use every day. This quiet, invisible force, born from the movement of particles too small to imagine, shapes much of the modern world around us.",
        summaryJa: "磁石の仕組みについて。多くの人が磁石で遊んだことがある。冷蔵庫にくっつき、クリップを持ち上げ、互いに引き合ったり反発したりする。この目に見えない力はまるで魔法のようだ。だが磁石の内部では実際に何が起きていて、なぜ一部の物だけが引きつけられるのか。秘密は目に見えないほど小さな物質の奥にある。あらゆる物は小さな原子でできており、多くの原子の中には電子というさらに小さな動く粒がある。電子が動くことで、各原子はN極とS極を持つ極めて小さな磁石のように振る舞える。ほとんどの物質ではこの小さな原子磁石がばらばらの向きを向き、力が打ち消し合って磁石にならない。だが鉄など一部の特別な金属では、小さな磁石が同じ向きにそろう。何十億もそろうと力が足し合わさり、全体が感じ取れる磁石になる。磁石にはN極とS極があり、異なる極は引き合い、同じ極は反発する。モーターやスピーカー、コンピューターの中にも隠れている。",
        quiz: [
          { q: "Inside a magnet, what makes each atom act like a tiny magnet?", options: ["The movement of tiny parts called electrons", "The color of the metal", "The weight of the atom"], answer: 0 },
          { q: "Why are most materials not magnetic?", options: ["Their tiny atomic magnets point in random directions and cancel out", "They have no atoms", "They are too heavy"], answer: 0 },
          { q: "What happens with the poles of two magnets?", options: ["Opposite poles attract; like poles repel", "All poles always attract", "Poles do nothing"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-11-01",
    passages: [
      {
        id: "d1101-1",
        title: "What Is a Supply Chain?",
        level: "★★☆",
        genre: "ビジネス",
        text: "When you buy a loaf of bread or a new phone, it seems simple: you pay, and you take it home. But behind that single product is a long and complex journey involving many companies and people across the world. This journey, from raw materials to the finished item in your hands, is called a supply chain.\n\nThink about a simple cotton T-shirt. First, a farmer grows the cotton. The cotton is sold to a factory that spins it into thread, and another factory weaves the thread into cloth. A third factory cuts and sews the cloth into shirts. The shirts are then shipped, perhaps across oceans, to a warehouse, and finally delivered to a shop. Each step is a link in the chain.\n\nA good supply chain is carefully organized so that each part arrives at the right place at the right time. If one link breaks, the whole chain can suffer. For example, if a factory closes or a ship is delayed, shops may run out of products, and prices may rise.\n\nIn recent years, companies have learned how fragile supply chains can be. A problem in one country, such as a storm or a shortage of parts, can quickly affect shops on the other side of the world.\n\nBecause of this, businesses work hard to make their supply chains strong and flexible. Understanding supply chains helps explain why a product is available, why it costs what it does, and how deeply the world's economies are connected, one link at a time.",
        summaryJa: "サプライチェーン（供給網）とは何かについて。パン一斤や新しいスマホを買うのは単純に見えるが、その一つの製品の背後には、世界中の多くの企業と人が関わる長く複雑な旅がある。原材料から手元の完成品までのこの道のりをサプライチェーンと呼ぶ。綿のTシャツを考えよう。まず農家が綿を育て、工場が糸に紡ぎ、別の工場が布に織り、三つ目の工場が裁断・縫製する。シャツは海を越えて倉庫へ運ばれ、最後に店へ届く。各段階が鎖の輪だ。良い供給網は各部分が適切な時に適切な場所へ届くよう組まれ、一つの輪が切れると全体が苦しむ。工場閉鎖や船の遅れで品切れや価格上昇が起こる。近年、企業は供給網のもろさを学んだ。一国の問題が世界の反対側の店に影響する。だから強く柔軟な供給網作りに努める。世界経済のつながりを示す。",
        quiz: [
          { q: "What is a supply chain?", options: ["The journey from raw materials to the finished product", "A type of money", "A single factory"], answer: 0 },
          { q: "What can happen if one link in the chain breaks?", options: ["Shops may run out of products and prices may rise", "Nothing changes", "Products become free"], answer: 0 },
          { q: "What have companies learned in recent years?", options: ["Supply chains can be fragile", "Supply chains never fail", "Products need no transport"], answer: 0 }
        ]
      },
      {
        id: "d1101-2",
        title: "How Does a Zipper Work?",
        level: "★★☆",
        genre: "テクノロジー",
        text: "We use zippers every day, on jackets, bags, and boots, without a second thought. We pull a small tab, and two separate edges join into one strong, closed seam. Pull it the other way, and they come apart again. It feels simple, but the zipper is a clever invention, and looking closely reveals how neatly it works.\n\nA zipper has three main parts. Along each side are rows of small teeth, usually made of metal or plastic. Each tooth has a little bump on top and a hollow underneath. The third part is the slider, the piece you pull.\n\nThe secret is in the shape of the teeth and the slider. When you pull the slider up to close the zipper, it guides the teeth from both sides together. As they meet, the bump of each tooth fits snugly into the hollow of the tooth opposite it, locking them together one by one. The teeth are set so that they hold tightly and do not easily pull apart sideways.\n\nWhen you pull the slider the other way, a small wedge inside it does the opposite job, gently forcing the joined teeth apart again. So the same little slider can both lock and unlock the teeth, simply depending on which way it moves.\n\nThe zipper was invented over a hundred years ago and has barely changed since, because the design works so well. It is a perfect example of how a simple, clever idea can quietly become part of daily life all over the world.",
        summaryJa: "ファスナー（ジッパー）の仕組みについて。私たちは上着や鞄、靴のファスナーを毎日何気なく使う。小さなつまみを引くと二つの別々の縁が一つの強い閉じた縫い目になり、逆に引くとまた離れる。単純に見えるが巧妙な発明で、よく見ると見事な働きが分かる。ファスナーには主に三つの部分がある。両側に並ぶ小さな歯（金属やプラスチック製）で、各歯の上には小さな突起、下には窪みがある。三つ目はつまみ（スライダー）だ。鍵は歯とスライダーの形だ。閉じる向きに引くと、スライダーが両側の歯を合わせ、各歯の突起が向かいの歯の窪みにぴたりとはまり、一つずつかみ合う。横には簡単に離れないよう配置されている。逆に引くと内部の小さなくさびが歯を押し離す。同じスライダーが向きだけで施錠と解錠を行う。百年以上前の発明でほぼ変わっていない。",
        quiz: [
          { q: "What are the three main parts of a zipper?", options: ["Two rows of teeth and a slider", "Three sliders", "A battery and two wires"], answer: 0 },
          { q: "How do the teeth lock together?", options: ["Each tooth's bump fits into the hollow of the opposite tooth", "They are glued each time", "They melt together"], answer: 0 },
          { q: "How does the slider open the zipper?", options: ["A small wedge inside forces the joined teeth apart", "It cuts the teeth off", "It adds new teeth"], answer: 0 }
        ]
      },
      {
        id: "d1101-3",
        title: "How the World Works to Protect Children",
        level: "★★★",
        genre: "世界情勢",
        text: "Children are among the most vulnerable people in the world. They depend on adults for food, safety, and care, and they cannot easily protect themselves. When war, poverty, or disaster strikes, children often suffer the most. For this reason, protecting children has become a shared goal that crosses every border.\n\nMuch of this work is coordinated by an international organization dedicated to children, supported by many nations. Its goal is simple but huge: to help every child survive and grow up healthy, safe, and educated, no matter where they are born.\n\nThe work takes many forms. Teams bring clean water, food, and medicine to children in poor or troubled areas. They run programs to vaccinate babies against deadly diseases, an effort that has saved millions of young lives. They help build schools and provide books, so that children who might never have learned to read get the chance.\n\nIn emergencies, such as a war or an earthquake, protecting children becomes urgent. Workers set up safe spaces, reunite children with lost families, and give comfort to those who are frightened and alone.\n\nThere is also a widely agreed idea that all children have certain rights, including the right to be safe, to learn, to play, and to be heard. Most countries have promised to respect these rights.\n\nThe task is far from finished, and millions of children still face hardship. But the shared effort reflects a simple belief held around the world: that every child, everywhere, deserves a fair and hopeful start in life.",
        summaryJa: "世界が子どもを守る取り組みについて。子どもは世界で最も弱い立場の人々に含まれる。食べ物・安全・世話を大人に頼り、自分を守りにくい。戦争や貧困、災害が起これば子どもが最も苦しむことが多い。だから子どもの保護は国境を越えた共通の目標になった。多くはある国際機関が調整し、多国が支える。目標は単純だが大きい。どこに生まれても、全ての子が健康で安全に、教育を受けて育つのを助けることだ。活動は多様で、貧しい・困難な地域の子へ清潔な水・食料・薬を届け、致命的な病気のワクチン接種で何百万もの命を救い、学校建設や本の提供で読み書きの機会を与える。戦争や地震などの緊急時には、安全な場所を設け、はぐれた家族と再会させ、恐れて孤独な子を慰める。子どもには安全・学び・遊び・意見を聞かれる権利があるという広く合意された考えもある。",
        quiz: [
          { q: "Why are children especially vulnerable?", options: ["They depend on adults and cannot easily protect themselves", "They are very strong", "They never need help"], answer: 0 },
          { q: "What is one way the world protects children's health?", options: ["Vaccinating babies against deadly diseases", "Ignoring illness", "Closing all hospitals"], answer: 0 },
          { q: "What rights do all children widely share?", options: ["To be safe, to learn, to play, and to be heard", "To do dangerous work", "To have no school"], answer: 0 }
        ]
      },
      {
        id: "d1101-4",
        title: "Zen: Stillness in Japanese Culture",
        level: "★★☆",
        genre: "日本",
        text: "Many things that feel typically Japanese, such as a simple garden of raked sand, a quiet tea ceremony, or a calm, empty room, share a common root. That root is Zen, a form of Buddhism that came to Japan centuries ago and deeply shaped its culture. Zen is not only a religion; it is a way of seeing the world.\n\nAt the heart of Zen is a practice called zazen, or seated meditation. A person sits still and quiet, often facing a wall, and simply pays attention to the present moment and their own breathing. The goal is not to escape life, but to calm the busy mind and see things clearly, just as they are.\n\nZen teaches that true understanding comes not only from words and thinking, but from direct experience and quiet awareness. It values simplicity, patience, and being fully present in whatever you are doing, whether drinking tea, cleaning a floor, or walking in a garden.\n\nThis spirit has flowed into Japanese arts for hundreds of years. The tea ceremony, calligraphy, garden design, and even flower arranging all carry the Zen love of simplicity, stillness, and careful attention. Empty space is valued as much as what fills it.\n\nToday, Zen ideas have spread far beyond Japan. People around the world practice meditation to find calm in busy lives. Whether or not one follows the religion, Zen offers a gentle lesson that many find valuable: to slow down, pay attention, and find peace in the present moment.",
        summaryJa: "日本文化における禅について。熊手で砂を整えた簡素な庭、静かな茶道、落ち着いた何もない部屋など、いかにも日本的に感じる多くのものに共通の根がある。それが禅だ。何世紀も前に日本へ伝わり文化を深く形づくった仏教の一派で、宗教であると同時に世界の見方でもある。禅の中心は「座禅」という座って行う瞑想だ。静かに座り、しばしば壁に向かい、今この瞬間と自分の呼吸に注意を向ける。目的は人生から逃げることでなく、忙しい心を鎮め物事をありのままに見ることだ。禅は、真の理解が言葉や思考だけでなく直接の経験と静かな気づきから来ると説き、簡素・忍耐・目の前のことに全身で臨むことを重んじる。茶道や書道、庭園設計、生け花にもこの心が流れ、余白が中身と同じく尊ばれる。今や世界に広まり、人々は忙しい生活で心の平穏を求め瞑想する。",
        quiz: [
          { q: "What is 'zazen'?", options: ["Seated meditation, paying attention to the present moment", "A kind of food", "A loud festival"], answer: 0 },
          { q: "What does Zen value?", options: ["Simplicity, patience, and being fully present", "Noise and hurry", "Owning many things"], answer: 0 },
          { q: "How has Zen influenced Japanese arts?", options: ["It brought a love of simplicity, stillness, and attention", "It made them very colorful and busy", "It removed all art"], answer: 0 }
        ]
      },
      {
        id: "d1101-5",
        title: "How Does Soap Clean?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "We wash our hands, our dishes, and our clothes with soap every day, trusting it to make them clean. But water alone often cannot remove grease and oil; think of trying to wash a greasy pan with just water. So what makes soap so good at cleaning, and why does it work when water by itself fails?\n\nThe secret lies in the special shape of the tiny particles that make up soap. Each soap particle is like a tiny tadpole with two very different ends. One end loves water and is pulled toward it. The other end hates water but loves oil and grease, and is pulled toward them instead.\n\nThis double nature is the key. When you wash something greasy, the oil-loving ends of many soap particles stick into the drop of grease, while their water-loving ends point outward, into the water. In this way, the soap particles surround the grease and break it into tiny drops, each wrapped in soap. These wrapped drops can now mix with water and be rinsed away, carrying the dirt with them.\n\nThis is also why soap works best with a little scrubbing and plenty of water. The scrubbing loosens the dirt, and the water carries away the soap-wrapped grease.\n\nSoap is one of the oldest and most important inventions for human health. By allowing us to wash away not only dirt but also germs, this simple, clever substance has helped protect people from disease for thousands of years.",
        summaryJa: "石けんが汚れを落とす仕組みについて。私たちは毎日、手や食器、衣類を石けんで洗い、きれいになると信じている。だが水だけでは油や脂を落としにくい。油まみれの鍋を水だけで洗おうとする様子を思い浮かべてほしい。なぜ石けんはよく落とし、水だけでは駄目なのか。鍵は石けんを作る小さな粒子の特別な形にある。各粒子はオタマジャクシのようで、両端がまったく違う。一方の端は水を好み水に引かれ、もう一方は水を嫌い油や脂を好んでそちらに引かれる。この二重の性質が鍵だ。油汚れを洗うと、多くの粒子の油好きの端が脂の滴に刺さり、水好きの端は外の水へ向く。こうして粒子が脂を囲み小さな滴に分け、石けんに包まれた滴は水に混ざり流し落とせ、汚れも一緒に去る。だから少しこすり、たっぷりの水で最もよく落ちる。細菌も洗い流せ、健康を守ってきた。",
        quiz: [
          { q: "Why can't water alone remove grease well?", options: ["Grease and oil do not mix with water by themselves", "Water is too strong", "Grease loves water"], answer: 0 },
          { q: "What is special about a soap particle?", options: ["One end loves water; the other loves oil and grease", "It is made of metal", "It has no ends"], answer: 0 },
          { q: "How does soap remove grease?", options: ["It surrounds grease so it can mix with water and rinse away", "It burns the grease", "It freezes the grease"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-10-31",
    passages: [
      {
        id: "d1031-1",
        title: "What Is Profit?",
        level: "★★☆",
        genre: "ビジネス",
        text: "At the heart of almost every business is a single important idea: profit. People start companies, work hard, and take risks largely in the hope of making a profit. But what exactly is profit, and why does it matter so much?\n\nProfit is, quite simply, the money a business has left after it pays all its costs. Imagine a baker who sells bread. In one day, she takes in a certain amount of money from customers. But she also has costs: flour, electricity, rent for the shop, and the wages of her workers. If what she earns is greater than what she spends, the difference is her profit. If she spends more than she earns, she makes a loss.\n\nProfit matters for several reasons. First, it is how a business survives. Without profit, a company cannot pay its bills for long and will eventually close. Second, profit allows a business to grow. The baker might use her profit to buy a bigger oven, open a second shop, or hire more staff.\n\nProfit is not the same as the total money coming in, which is called revenue. A shop can have high revenue but still make no profit if its costs are just as high. Wise business owners watch both carefully.\n\nOf course, most good businesses care about more than profit alone, such as treating customers and workers well. But profit remains the fuel that keeps a business alive. Without it, even a company full of good ideas cannot keep its doors open.",
        summaryJa: "利益とは何かについて。ほぼ全てのビジネスの中心に、利益という重要な考えがある。人が会社を始め、懸命に働き、リスクを取るのは、主に利益を得る望みからだ。利益とは何で、なぜ重要なのか。利益とは、全ての費用を払った後に事業に残るお金だ。パンを売るパン職人を想像しよう。一日で客から一定のお金を得るが、小麦粉・電気・家賃・従業員の賃金という費用もある。稼ぎが支出より多ければその差が利益、支出が多ければ損失だ。利益が重要な理由はいくつかある。第一に事業の存続で、利益がなければ支払いが続かずやがて閉じる。第二に成長を可能にし、大きなオーブンや二号店、増員に使える。利益は入ってくる総額（収益）とは違い、収益が高くても費用も高ければ利益はない。良い経営者は両方を注視する。利益は事業を生かす燃料だ。",
        quiz: [
          { q: "What is profit?", options: ["The money left after a business pays all its costs", "The total money that comes in", "A type of tax"], answer: 0 },
          { q: "What is the difference between profit and revenue?", options: ["Revenue is total money in; profit is what remains after costs", "They are exactly the same", "Profit is always larger than revenue"], answer: 0 },
          { q: "Why does profit matter?", options: ["It lets a business survive and grow", "It makes costs disappear", "It is never needed"], answer: 0 }
        ]
      },
      {
        id: "d1031-2",
        title: "How Does a Vacuum Cleaner Work?",
        level: "★★☆",
        genre: "テクノロジー",
        text: "A vacuum cleaner seems to do something magical: it sucks up dust and dirt from the floor as if by an invisible force. We push it around the room, and the mess disappears. But there is no magic here, only a clever use of a simple idea about air and pressure.\n\nThe secret is moving air. Inside the vacuum cleaner is an electric motor that spins a fan very fast. This fan pushes air out of the back of the machine. As the air is pushed out, it leaves behind an area with less air inside the machine, a region of low pressure.\n\nHere is the important part. The air outside, at normal pressure, always tries to rush into any space with lower pressure. So the higher-pressure air outside pushes its way in through the opening at the bottom of the vacuum. As this air rushes in, it carries dust and dirt along with it, lifting them off the floor.\n\nThe dusty air is then pulled through a bag or a container, which has a filter. The filter is like a fine net: it lets the air pass through but traps the dust and dirt inside. The clean air then flows out the back, and the dirt stays behind.\n\nSo a vacuum cleaner does not really \"suck.\" Instead, it lowers the pressure inside, and the ordinary air outside does the pushing. It is an everyday example of how understanding air pressure can turn a simple fan into a useful cleaning machine.",
        summaryJa: "掃除機の仕組みについて。掃除機は見えない力でほこりやごみを吸い取る魔法のように見える。押して回すとごみが消える。だが魔法はなく、空気と圧力についての単純な考えを巧みに使っているだけだ。鍵は動く空気だ。掃除機の中では電動モーターがファンを高速で回し、機械の後ろから空気を押し出す。空気が押し出されると、中に空気の少ない低圧の領域ができる。重要なのはここだ。外の通常の圧力の空気は、圧力の低い空間へ流れ込もうとする。だから外の高い圧力の空気が、掃除機の底の口から押し入る。この空気が流れ込む際にほこりやごみを巻き込み床から持ち上げる。ほこりを含んだ空気は袋や容器のフィルターを通り、フィルターは細かい網のように空気は通しごみは捕らえる。きれいな空気が後ろから出る。掃除機は「吸う」のでなく内部の圧力を下げ、外の空気が押している。",
        quiz: [
          { q: "What does the fan inside a vacuum cleaner do?", options: ["Pushes air out, creating low pressure inside", "Blows dust onto the floor", "Makes the machine heavier"], answer: 0 },
          { q: "Why does air rush into the vacuum cleaner?", options: ["Higher-pressure air outside pushes into the low-pressure space", "The dust pulls it in", "The motor blows it in"], answer: 0 },
          { q: "What does the filter do?", options: ["Lets air pass but traps dust and dirt", "Makes more dust", "Stops the motor"], answer: 0 }
        ]
      },
      {
        id: "d1031-3",
        title: "Why Do Countries Have Flags?",
        level: "★★★",
        genre: "世界情勢",
        text: "At the Olympic Games, outside government buildings, and on ships at sea, you will see them: flags. Almost every country in the world has one, a piece of colored cloth with a special design. A flag may seem like a simple decoration, but it is one of the most powerful symbols a nation can have. Why do countries bother to have flags, and what do they mean?\n\nA flag's main purpose is to represent a whole country in a single image. The colors and shapes are not chosen by accident. Each usually carries a meaning, standing for the nation's history, values, land, or people. A star might represent hope, a color might stand for courage or peace, and a shape might recall an important event. In this way, a flag tells a short story about who a people believe they are.\n\nFlags also bring people together. When citizens see their flag, they may feel a sense of shared identity and belonging, a reminder that they are part of something larger than themselves. At sporting events, people wave flags with pride and joy.\n\nFlags are practical too. Long ago, armies and ships used flags to identify themselves from a distance, and this use continues today. An agreed set of flags lets nations recognize one another instantly, without a single word.\n\nA flag is only cloth, yet people treat it with deep respect, because of what it stands for. In its colors and patterns, a nation carries its past, its hopes, and its sense of unity, held up for all the world to see.",
        summaryJa: "国に国旗がある理由について。オリンピックや官庁の前、海上の船で国旗を目にする。世界のほぼ全ての国が、特別な意匠の色布を持つ。単なる飾りに見えるが、国が持てる最も強力な象徴の一つだ。なぜ国旗を持ち、何を意味するのか。国旗の主な目的は、一つの図像で国全体を表すことだ。色や形は偶然でなく、たいてい意味を持ち、国の歴史・価値観・土地・人々を表す。星は希望、ある色は勇気や平和、形は重要な出来事を思い起こさせる。こうして国旗は、人々が自分たちを何者と信じるかの短い物語を語る。国旗は人を結びつけ、国民は共有の帰属意識を感じ、競技会では誇りと喜びで振る。実用もあり、昔は軍や船が遠くから自他を識別し、今も続く。布にすぎないが、その象徴ゆえに深く敬われる。過去と希望、結束を掲げる。",
        quiz: [
          { q: "What is a flag's main purpose?", options: ["To represent a whole country in a single image", "To keep people warm", "To block the wind"], answer: 0 },
          { q: "Why are a flag's colors and shapes chosen?", options: ["They usually carry meanings about history, values, or people", "They are picked at random", "They mean nothing"], answer: 0 },
          { q: "How did armies and ships use flags long ago?", options: ["To identify themselves from a distance", "To cook food", "To measure time"], answer: 0 }
        ]
      },
      {
        id: "d1031-4",
        title: "Obon: Honoring Ancestors in Japan",
        level: "★★☆",
        genre: "日本",
        text: "Every summer in Japan, there is a special time when families remember and welcome the spirits of their ancestors. This gentle tradition is called Obon, and it is one of the most important events of the Japanese year. Though it is not a sad occasion, it is a deeply meaningful one, blending memory, family, and quiet celebration.\n\nObon is based on an old belief that, for a few days each summer, the spirits of family members who have died return to visit the living. To welcome them, families clean the graves of their ancestors and place offerings of food and flowers. Many people travel long distances to return to their hometowns, so Obon becomes a time of family reunion.\n\nSeveral beautiful customs mark the season. People light small lanterns to help guide the spirits home, and at the end of Obon, some float paper lanterns on rivers or the sea to see the spirits off again. In many towns, people gather in the evening for a dance called Bon Odori, moving in a circle to the beat of a drum. Anyone can join, and the dance welcomes both the living and the visiting spirits.\n\nObon shows an important idea in Japanese culture: a deep respect for ancestors and a sense that family connections continue even after death. Rather than fearing the dead, people welcome them warmly, with food, light, and dancing.\n\nFor many Japanese, Obon is a time to pause, to feel grateful to those who came before, and to be together with family, old and new.",
        summaryJa: "日本のお盆について。毎夏、日本には家族が先祖の霊を思い出し迎える特別な時がある。この穏やかな伝統を「お盆」と呼び、日本の一年で最も大切な行事の一つだ。悲しい機会ではなく、記憶と家族と静かな祝いが混じる深い意味を持つ時だ。お盆は、夏の数日間、亡くなった家族の霊が生者を訪ねて戻るという古い信仰に基づく。迎えるため家族は先祖の墓を清め、食べ物や花を供える。多くの人が遠くから故郷へ帰り、お盆は家族の再会の時になる。美しい習わしも多く、霊を家へ導く小さな灯をともし、お盆の終わりには紙の灯籠を川や海に流して霊を送る。夕方には太鼓に合わせて輪になって踊る「盆踊り」に集い、誰でも加われ、生者と訪れた霊を迎える。先祖への深い敬意と、死後も家族のつながりが続く感覚を示す。死を恐れず温かく迎える。",
        quiz: [
          { q: "What does Obon welcome?", options: ["The spirits of ancestors returning to visit", "The start of winter", "A sports season"], answer: 0 },
          { q: "What is 'Bon Odori'?", options: ["A dance in a circle to the beat of a drum", "A type of food", "A kind of boat"], answer: 0 },
          { q: "What idea does Obon show in Japanese culture?", options: ["Deep respect for ancestors and lasting family ties", "That the past should be forgotten", "That family does not matter"], answer: 0 }
        ]
      },
      {
        id: "d1031-5",
        title: "The History of Halloween",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "Each year on the 31st of October, in many countries, children dress up as ghosts, witches, and monsters and go from house to house asking for sweets. Adults wear costumes to parties, and homes are decorated with pumpkins carved into glowing faces. This is Halloween. It is great fun, but it also has a long and interesting history.\n\nHalloween began more than two thousand years ago, with an ancient festival held by the Celtic people of Europe. They celebrated the end of the harvest and the start of winter, around the start of November. They believed that on the night before, the line between the living and the dead grew thin, and spirits could walk the earth. People lit fires and wore costumes, hoping to frighten away any harmful spirits.\n\nOver many centuries, this old festival mixed with other traditions and slowly changed into the holiday we know today. The custom of carving faces into vegetables also comes from these old times. When people later moved to America, they found that pumpkins were perfect for carving, and the glowing pumpkin became a famous symbol of Halloween.\n\nToday, Halloween is less about spirits and more about fun. The old idea of wearing costumes to scare away ghosts has become a cheerful game of dressing up. Children's \"trick or treat\" turns a night of fear into a night of sweets and laughter.\n\nFrom an ancient fire festival to a modern celebration, Halloween shows how traditions can travel across time and around the world, changing as they go.",
        summaryJa: "ハロウィーンの歴史について。毎年10月31日、多くの国で子どもが幽霊や魔女、怪物に扮して家々を回りお菓子をねだる。大人は仮装してパーティーへ行き、家はかぼちゃを彫った光る顔で飾られる。これがハロウィーンだ。楽しいが長く興味深い歴史もある。ハロウィーンは二千年以上前、ヨーロッパのケルト人の古い祭りに始まった。彼らは収穫の終わりと冬の始まり（11月初め頃）を祝い、その前夜に生者と死者の境が薄くなり霊が地上を歩けると信じた。人々は火をたき仮装し、害ある霊を追い払おうとした。何世紀もかけて他の伝統と混ざり今の祝日に変わった。野菜に顔を彫る習わしも昔から来ており、後に人々がアメリカへ移るとかぼちゃが彫刻に最適で、光るかぼちゃが有名な象徴になった。今は霊より楽しみが中心で、仮装は陽気な遊びになった。",
        quiz: [
          { q: "Where did Halloween begin?", options: ["With an ancient Celtic festival in Europe", "In modern America only", "In a toy factory"], answer: 0 },
          { q: "Why did ancient people wear costumes?", options: ["To frighten away harmful spirits", "To stay warm in summer", "To win prizes"], answer: 0 },
          { q: "How did the glowing pumpkin become a Halloween symbol?", options: ["In America, pumpkins were perfect for carving", "It was always used in Europe", "It grew on its own"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-10-30",
    passages: [
      {
        id: "d1030-1",
        title: "Why Good Communication Matters at Work",
        level: "★★☆",
        genre: "ビジネス",
        text: "Many workplace problems do not come from a lack of skill or effort. They come from poor communication. A message that is unclear, a question that is never asked, or an email that is misunderstood can waste hours, cause mistakes, and create bad feelings. For this reason, good communication is one of the most valuable skills in any job.\n\nGood communication begins with being clear. When you give instructions or share an idea, it helps to say exactly what you mean, in simple words. It is also wise to check that the other person has understood, rather than assuming they have. A short question like \"Does that make sense?\" can prevent a big mistake later.\n\nListening is just as important as speaking. A good communicator pays full attention to others, instead of only waiting for their turn to talk. By truly listening, you understand what people need and show them respect, which builds trust.\n\nCommunication also means choosing the right way to share a message. A quick question may be best in person or by chat, while important details should be written down so they are not forgotten. Tone matters too: a polite, calm message is far more effective than an angry one.\n\nIn today's workplaces, people often work with others far away, in different countries and time zones. This makes clear writing and patience even more important.\n\nStrong communication will not solve every problem, but it prevents many. When people share information clearly and listen well, work becomes smoother, faster, and more pleasant for everyone.",
        summaryJa: "職場で良い意思疎通が大切な理由について。職場の多くの問題は技能や努力の不足でなく、まずい意思疎通から生じる。不明確な伝達、聞かれなかった質問、誤解されたメールは、時間を無駄にし、ミスを生み、悪感情を作る。だから良い意思疎通はどの仕事でも最も価値ある技能の一つだ。まず明確であること。指示や考えを伝えるときは簡単な言葉で正確に言い、相手が理解したか確認するのが賢い。「分かりますか？」の一言が後の大失敗を防ぐ。話すのと同じくらい聞くことも重要で、自分の番を待つだけでなく全注意を向ける。真に聞けば相手の必要を理解し敬意を示し信頼が築かれる。伝える手段選びも大切で、簡単な質問は対面やチャット、重要な詳細は記録する。口調も大切で丁寧で穏やかな方が効果的だ。遠隔・多国間の仕事では明確な文章と忍耐がさらに重要になる。",
        quiz: [
          { q: "Where do many workplace problems come from?", options: ["Poor communication", "Too much skill", "Working too slowly on purpose"], answer: 0 },
          { q: "Why is listening important?", options: ["It helps you understand needs and shows respect", "It wastes time", "It stops all work"], answer: 0 },
          { q: "What makes clear communication even more important today?", options: ["People often work with others far away", "Everyone works in one room", "No one sends messages"], answer: 0 }
        ]
      },
      {
        id: "d1030-2",
        title: "How Do Speakers Make Sound?",
        level: "★★☆",
        genre: "テクノロジー",
        text: "From tiny earphones to huge concert systems, speakers fill our lives with music, voices, and sound. We press play, and sound seems to appear from nowhere. But a speaker is really a clever machine that turns an electric signal back into the vibrations we hear as sound. How does it work?\n\nFirst, remember what sound really is: a vibration moving through the air. When something shakes quickly, it pushes the air into waves, and our ears sense these waves as sound. So to make sound, a speaker must make the air vibrate.\n\nInside a speaker is a cone, usually made of paper or plastic, attached to a coil of wire that sits near a magnet. When the electric signal from a phone or amplifier flows through the coil, it turns the coil into a magnet too. As the signal rapidly changes, the coil is pushed and pulled by the fixed magnet, moving back and forth very fast.\n\nThis moving coil shakes the cone, and the cone pushes the air, creating sound waves. The pattern of the electric signal decides exactly how the cone moves, so the speaker can reproduce a voice, a drum, or a violin.\n\nThe size of a speaker affects its sound. Large speakers move a lot of air and are good for deep, low sounds, while small ones are better for high notes. That is why big sound systems use several speakers of different sizes together.\n\nFrom a whisper to a roar, a speaker is simply electricity made audible, turning invisible signals into the sounds we love.",
        summaryJa: "スピーカーが音を出す仕組みについて。小さなイヤホンから巨大なコンサート装置まで、スピーカーは音楽や声で生活を満たす。再生を押すと音がどこからともなく現れるようだが、スピーカーは電気信号を、私たちが音として聞く振動に戻す巧妙な機械だ。まず音とは空気を伝わる振動だ。何かが速く震えると空気が波となって押され、耳がそれを音と感じる。だから音を出すにはスピーカーが空気を振動させねばならない。内部には紙やプラスチックのコーン（円錐）があり、磁石の近くの線のコイルに付いている。スマホやアンプの電気信号がコイルを流れるとコイルも磁石になり、信号が急に変わるとコイルが固定磁石に押し引きされ高速で前後する。この動きがコーンを揺らし空気を押して音波を作る。信号の形がコーンの動きを決める。大きいスピーカーは低音、小さいものは高音が得意だ。",
        quiz: [
          { q: "What is sound, really?", options: ["A vibration moving through the air", "A type of light", "A color"], answer: 0 },
          { q: "What makes the coil inside a speaker move?", options: ["The changing electric signal pushing against a magnet", "A small motor with wheels", "Falling water"], answer: 0 },
          { q: "Why are large speakers good for low sounds?", options: ["They move a lot of air", "They are lighter", "They use no electricity"], answer: 0 }
        ]
      },
      {
        id: "d1030-3",
        title: "What Is a Refugee, and How Does the World Help?",
        level: "★★★",
        genre: "世界情勢",
        text: "Most people live their whole lives in the country where they were born. But sometimes, people are forced to flee their homeland to survive. They may be escaping war, violence, or persecution for their beliefs. A person who has fled to another country for safety, and cannot return home, is called a refugee.\n\nBecoming a refugee is not a choice made lightly. People leave behind their homes, jobs, and often family members, carrying only what they can hold. They cross borders hoping to find a place where they will be safe. At the end of their journey, they often arrive with nothing, in a country whose language they may not speak.\n\nHelping refugees has become a shared task for the world. An international agency works to protect them and to coordinate aid. Countries that receive refugees provide shelter, food, and medical care, often in large camps near the border. Over time, many refugees are helped to settle, find work, and send their children to school.\n\nThis is not easy. Caring for large numbers of people is expensive, and some communities worry about the strain. Yet there is a long-held principle, agreed by many nations, that people fleeing serious danger should not be sent back into it.\n\nBehind the word \"refugee\" are ordinary people, with hopes and skills, who lost their homes through no fault of their own. When the world helps them, it is not only an act of kindness. It is a promise that, in their worst moment, no human being should be left completely alone.",
        summaryJa: "難民とは何か、そして世界はどう助けるかについて。多くの人は生まれた国で一生を過ごす。だが時に、人は生き延びるため故郷を逃れざるを得ない。戦争や暴力、信条ゆえの迫害から逃れることもある。安全を求めて他国へ逃れ、帰れない人を難民と呼ぶ。難民になるのは軽い選択ではない。家や仕事、しばしば家族を残し、持てる物だけを携え、安全な場所を求めて国境を越える。旅の果てに、言葉も通じない国へ何も持たずに着くことが多い。難民を助けることは世界共通の課題になった。国際機関が保護と援助の調整に当たり、受け入れ国は国境近くの大きなキャンプで住まい・食料・医療を提供する。やがて定住や就労、子の就学を助ける。費用は高く負担を心配する地域もあるが、重大な危険から逃れる人を送り返さないという多国間の原則がある。「難民」という語の背後には普通の人々がいる。",
        quiz: [
          { q: "Who is a refugee?", options: ["A person who flees to another country for safety and cannot return home", "A tourist on holiday", "A person who moves for a better job only"], answer: 0 },
          { q: "What do countries that receive refugees often provide?", options: ["Shelter, food, and medical care", "Nothing at all", "Only money"], answer: 0 },
          { q: "What long-held principle do many nations agree on?", options: ["People fleeing serious danger should not be sent back into it", "Refugees must always be sent home", "No one should ever cross a border"], answer: 0 }
        ]
      },
      {
        id: "d1030-4",
        title: "Omamori: Japanese Lucky Charms",
        level: "★★☆",
        genre: "日本",
        text: "Visit a shrine or temple in Japan, and near the entrance you may find a counter selling small, colorful cloth bags. These are omamori, Japanese amulets believed to bring good luck and protection. Many Japanese people carry one in a bag or pocket, or hang it in their car or home.\n\nAn omamori is usually a small pouch of beautiful cloth, often silk, with words stitched on the front. Inside is a piece of paper or wood with a prayer written on it. By tradition, the omamori should not be opened; doing so is said to let the good luck escape.\n\nWhat makes omamori interesting is that each one is for a specific purpose. There are omamori for safe travel, for success in study, for good health, for finding love, and for the safe birth of a baby. Students buy them before important exams, and drivers keep one for safety on the road. When a person has a particular wish or worry, there is usually an omamori for it.\n\nOmamori are often given as gifts. A parent might give one to a child leaving home, or a friend might offer one to someone starting something new, as a way of saying, \"I am thinking of you.\"\n\nBy custom, an omamori lasts about a year. After that, people bring the old one back to a shrine to be respectfully burned, and may buy a new one. More than a simple charm, an omamori is a small, portable wish, carrying care, hope, and a quiet feeling of protection.",
        summaryJa: "日本のお守りについて。日本の神社や寺を訪れると、入口近くで小さく色鮮やかな布の袋を売る場所がある。これが「お守り」で、幸運と加護をもたらすとされる。多くの人が鞄やポケットに入れて持ち歩き、車や家に下げる。お守りは普通、絹などの美しい布の小さな袋で、表に文字が縫われ、中に祈りを記した紙や木が入る。伝統では開けてはならず、開けると幸運が逃げるという。興味深いのは、それぞれ目的があることだ。交通安全、学業成就、健康、縁結び、安産などのお守りがある。学生は試験前に買い、運転手は安全のために持つ。願いや心配があればたいていそれ用のお守りがある。贈り物にもよくされ、家を出る子へ親が、何かを始める人へ友が渡す。約一年で、古いものは神社に返して焚き上げてもらい新しいものを買う。携帯できる小さな願いだ。",
        quiz: [
          { q: "What is an 'omamori'?", options: ["A Japanese amulet believed to bring luck and protection", "A type of food", "A kind of car"], answer: 0 },
          { q: "Why should an omamori not be opened?", options: ["Opening it is said to let the good luck escape", "It contains money", "It is too heavy"], answer: 0 },
          { q: "What is special about different omamori?", options: ["Each one is for a specific purpose, like travel or study", "They are all exactly the same", "They never last"], answer: 0 }
        ]
      },
      {
        id: "d1030-5",
        title: "What Are Stars Made Of?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "On a clear, dark night, the sky fills with thousands of tiny points of light. For most of human history, people could only wonder what the stars were. Today, thanks to science, we know a great deal about them. A star is not a tiny spark; it is an enormous ball of hot, glowing gas, so far away that it looks small.\n\nStars are made mostly of the two lightest and most common gases in the universe: hydrogen and helium. Deep inside a star, the pressure and heat are almost unimaginable. Under these conditions, something amazing happens: the hydrogen is squeezed so hard that its particles join together to form helium. This process, called nuclear fusion, releases a vast amount of energy.\n\nThat energy is what makes a star shine. It travels outward from the star's center and finally escapes as the light and heat we see and feel. Our own Sun is a star, and it is this same process that lights our days and warms our planet.\n\nStars are not all the same. Some are small and cool, glowing red, while others are huge and hot, shining blue-white. Stars also change over a very long life, often lasting billions of years, before they finally run out of fuel.\n\nThe next time you look up at the night sky, remember that each star is a distant sun, burning across unimaginable distances. The gentle light reaching your eyes began its journey long ago, from a giant furnace deep in space.",
        summaryJa: "星は何でできているかについて。晴れた暗い夜、空は何千もの小さな光の点で満ちる。人類の歴史の大半、人は星が何かを想像するしかなかった。今は科学のおかげで多くが分かる。星は小さな火花でなく、巨大な高温の輝くガスの球で、遠いため小さく見える。星は宇宙で最も軽く一般的な二つの気体、水素とヘリウムが主成分だ。星の深部では圧力と熱が想像を絶し、水素が強く押されて粒子が結びつきヘリウムになる。これを核融合と呼び、膨大なエネルギーを放つ。そのエネルギーが星を輝かせ、中心から外へ進み、見える光や感じる熱として逃げる。太陽も星で、同じ過程が昼を照らし地球を温める。星は同じでなく、小さく赤いものも、巨大で青白いものもある。何十億年も生き、やがて燃料を使い果たす。あなたに届く光はずっと昔に旅立った。",
        quiz: [
          { q: "What is a star?", options: ["An enormous ball of hot, glowing gas", "A tiny spark near Earth", "A kind of cloud"], answer: 0 },
          { q: "What are stars made mostly of?", options: ["Hydrogen and helium", "Rock and metal", "Ice and dust"], answer: 0 },
          { q: "What makes a star shine?", options: ["Energy released by nuclear fusion in its center", "A battery inside it", "Reflected light from Earth"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-10-29",
    passages: [
      {
        id: "d1029-1",
        title: "What Is Insurance?",
        level: "★★☆",
        genre: "ビジネス",
        text: "Life is full of risks. A house might catch fire, a car might crash, or a person might become ill and unable to work. Any of these events can cost a huge amount of money, far more than most people have saved. To protect against such surprises, people use something called insurance. Understanding it helps explain a big part of the world's economy.\n\nThe idea behind insurance is simple and clever: sharing risk among many people. A large group of people each pay a small, regular amount of money, called a premium, to an insurance company. Most of them will not suffer a disaster in any given year. But for the unlucky few who do, the company uses the collected money to help pay for the damage.\n\nIn this way, a cost that would ruin one family is shared gently among thousands. Each person pays a little to be safe, instead of risking a loss they could never afford alone. It is a bit like a whole village agreeing to help rebuild any single house that burns down.\n\nThere are many kinds of insurance: for homes, cars, health, and travel. Some are required by law, such as car insurance in many countries, while others are a personal choice.\n\nInsurance cannot stop bad things from happening, and it is not free. But it brings something valuable: peace of mind. By turning a possible huge loss into a small, steady cost, insurance lets people and businesses take sensible risks and recover when life does not go as planned.",
        summaryJa: "保険とは何かについて。人生はリスクに満ちる。家が火事になり、車が事故を起こし、人が病気で働けなくなるかもしれない。どれも巨額の費用がかかり、多くの人の貯金を超える。こうした予想外に備えて人は保険を使う。理解すれば世界経済の大きな部分が分かる。保険の発想は単純で巧妙だ。多くの人でリスクを分け合う。大勢が少額の「保険料」を定期的に保険会社へ払う。ほとんどの人はその年に災難に遭わないが、不運な少数のために会社が集めたお金で損害を補う。こうして一家族を破滅させる費用が何千人にやさしく分けられる。皆が少し払って安全を買い、一人では負えない損失の危険を避ける。火事の家をみんなで建て直す村のようだ。住宅・車・健康・旅行など種類は多く、法で義務づけられるものもある。保険は災難を止めないが、心の安らぎをもたらす。",
        quiz: [
          { q: "What is the main idea behind insurance?", options: ["Sharing risk among many people", "Making disasters happen", "Saving nothing at all"], answer: 0 },
          { q: "What is a 'premium'?", options: ["A small, regular payment to an insurance company", "A kind of disaster", "A free gift"], answer: 0 },
          { q: "What valuable thing does insurance bring?", options: ["Peace of mind", "More accidents", "Higher risk"], answer: 0 }
        ]
      },
      {
        id: "d1029-2",
        title: "How Do LED Lights Work?",
        level: "★★☆",
        genre: "テクノロジー",
        text: "Look around your home, and you will probably see LED lights. They glow in our lamps, phones, televisions, and traffic signals. LEDs have quietly replaced the old light bulbs that were used for over a hundred years. They last far longer and use much less electricity. But how do these tiny lights actually produce light?\n\nThe letters LED stand for light-emitting diode. A diode is a small electronic part that lets electricity flow in only one direction. In an LED, this part is made of special materials. When electricity passes through these materials, something remarkable happens: the material itself gives off light directly. The electricity is turned into light.\n\nThis is very different from an old-style bulb. An old bulb made light by heating a thin wire until it glowed. That method wasted most of the energy as heat, not light, which is why old bulbs became hot and burned out. An LED stays cool and turns far more of its energy into light, making it much more efficient.\n\nBecause they are so efficient and long-lasting, LEDs save energy and money. A single LED can last for many years, and using less electricity is also better for the environment.\n\nLEDs can be made in different colors, and they can be tiny or very bright. This is why they appear everywhere, from the giant screens in a city to the small light that shows your phone is charging. Clean, cool, and efficient, the LED has changed how we light up our world.",
        summaryJa: "LED照明の仕組みについて。家の中を見れば、ランプやスマホ、テレビ、信号機など至る所にLEDが光っている。LEDは百年以上使われた旧式の電球に静かに取って代わった。はるかに長持ちし電気も少ない。この小さな光はどうやって光を生むのか。LEDは「発光ダイオード」の略だ。ダイオードは電気を一方向だけ流す小さな電子部品で、LEDでは特別な材料でできている。電気がこの材料を通ると驚くことに材料自体が直接光を放つ。電気が光に変わるのだ。旧式電球は細い線を熱して光らせ、多くのエネルギーを光でなく熱として無駄にし、熱くなって切れた。LEDは冷たいままで多くを光に変え、ずっと効率的だ。長寿命で省エネ・節約になり環境にも良い。様々な色で作れ、小さくも非常に明るくもできる。都市の大画面からスマホの充電ランプまで使われる。",
        quiz: [
          { q: "What does 'LED' stand for?", options: ["Light-emitting diode", "Long electric day", "Low energy drink"], answer: 0 },
          { q: "How did old-style bulbs make light?", options: ["By heating a thin wire until it glowed", "By using radio waves", "By cooling water"], answer: 0 },
          { q: "Why are LEDs more efficient than old bulbs?", options: ["They turn far more energy into light, not heat", "They use more electricity", "They burn hotter"], answer: 0 }
        ]
      },
      {
        id: "d1029-3",
        title: "How the World Shares Scientific Discoveries",
        level: "★★★",
        genre: "世界情勢",
        text: "When a scientist in one country makes an important discovery, people everywhere can soon benefit from it. A new medicine, a better way to grow food, or a deeper understanding of the universe does not stay locked inside one nation. Instead, science is shared across borders, in one of the finest examples of global cooperation.\n\nHow does this sharing work? When scientists complete a study, they usually write a paper describing exactly what they did and what they found. Other scientists around the world read these papers, check the results, and build on them. In this way, knowledge grows step by step, with each discovery resting on the work of others, often from many different countries.\n\nScientists also meet and work together directly. They gather at international conferences, share data over the internet, and form teams that cross borders. Some of the greatest projects, such as exploring space or studying tiny particles, are far too large and expensive for one country alone, so many nations join together to fund and build them.\n\nThis openness has a long tradition. Most scientists believe that knowledge belongs to all of humanity and should be shared, not hidden. Of course, there are limits: companies may keep some discoveries secret for business, and a few areas are kept private for safety. But the general spirit of science is open.\n\nBy sharing freely, the world moves faster. A problem solved in one place can help people everywhere. In science, cooperation is not just kind; it is how progress is made.",
        summaryJa: "世界が科学的発見を共有する仕組みについて。ある国の科学者が重要な発見をすると、やがて世界中の人が恩恵を受けられる。新薬やより良い食料生産法、宇宙の深い理解は一国に閉じ込められず、国境を越えて共有される。国際協力の最良の例の一つだ。どう共有するのか。研究を終えると科学者は、行ったことと分かったことを正確に記した論文を書く。世界の他の科学者がそれを読み、結果を確かめ、その上に積み重ねる。こうして知識は一歩ずつ育ち、各発見が多くの国の他者の仕事の上に立つ。科学者は直接協力もし、国際会議で集い、ネットでデータを共有し、国境を越えたチームを作る。宇宙探査や素粒子研究のような巨大で高価な計画は一国では無理で、多国が資金を出し協力する。知識は人類全体のもので隠さず共有すべきという伝統がある。自由な共有で世界は速く進む。",
        quiz: [
          { q: "How do scientists usually share what they find?", options: ["By writing papers that others read and build on", "By keeping it secret forever", "By telling only their family"], answer: 0 },
          { q: "Why do many nations join together on some projects?", options: ["They are too large and expensive for one country alone", "No country is interested", "To keep them small"], answer: 0 },
          { q: "What do most scientists believe about knowledge?", options: ["It belongs to all of humanity and should be shared", "It should always be hidden", "It is useless"], answer: 0 }
        ]
      },
      {
        id: "d1029-4",
        title: "Oshogatsu: Japanese New Year",
        level: "★★☆",
        genre: "日本",
        text: "In many countries, the biggest celebration of the year is a winter holiday in December. In Japan, the most important holiday of all is the New Year, known as oshogatsu. While people around the world welcome the new year, in Japan it is a deep and special time, full of customs that go back centuries.\n\nPreparations begin before the year ends. People clean their homes thoroughly, a custom called osoji, to clear away the dust of the old year and welcome the new one fresh and pure. Families also decorate their doors with arrangements of pine and bamboo, believed to invite good fortune.\n\nThe New Year itself is a quiet, family time. Many people visit a shrine or temple in the first days of January, a custom called hatsumode, to pray for health and happiness in the year ahead. Special foods are eaten, beautifully arranged in boxes, each dish carrying a wish, such as long life or good harvests. Children receive small gifts of money from older relatives.\n\nThe mood of oshogatsu is one of rest, gratitude, and hope. Many shops and offices close for several days, something rare in busy Japan, so that families can be together. People send New Year cards to friends, and the cards all arrive on January 1st.\n\nFor the Japanese, oshogatsu is a moment to pause, to thank the past year, and to begin again with a clean and hopeful heart. It is a gentle, meaningful start to each new year.",
        summaryJa: "日本の正月（お正月）について。多くの国では一年最大の祝いが12月の冬の休日だが、日本で最も大切な祝日は新年「お正月」だ。世界中が新年を迎える中、日本では何世紀も続く習わしに満ちた特別で深い時だ。準備は年末前から始まる。「大掃除」で家を徹底的に清め、旧年のほこりを払い新年を清らかに迎える。松や竹の飾りを戸口に置き、幸運を招くとされる。正月自体は静かな家族の時で、多くの人が1月初めに神社や寺へ「初詣」に行き、健康と幸せを祈る。願いを込めた料理が美しく箱に詰められ、子どもは年長者からお金の贈り物をもらう。休息・感謝・希望の気分で、多くの店や職場が数日閉まり家族が集う。友人に年賀状を送り、元日に届く。過去の年に感謝し清い心で再出発する穏やかで意味深い始まりだ。",
        quiz: [
          { q: "What is 'oshogatsu'?", options: ["The Japanese New Year, the most important holiday", "A summer festival", "A kind of food only"], answer: 0 },
          { q: "What is 'hatsumode'?", options: ["Visiting a shrine or temple in early January to pray", "A big meal in summer", "A sports event"], answer: 0 },
          { q: "What is the general mood of oshogatsu?", options: ["Rest, gratitude, and hope", "Fear and worry", "Hard work and stress"], answer: 0 }
        ]
      },
      {
        id: "d1029-5",
        title: "How Do Fish Breathe Underwater?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "All animals need oxygen to live, including fish. But fish spend their whole lives underwater, where there is no air to breathe. So how do they get the oxygen they need? The answer is that fish have a special organ for breathing water, called gills.\n\nWater may look like it has no air, but there is oxygen hidden inside it. Tiny amounts of oxygen gas are mixed into the water itself, and this is what fish use. Their challenge is to pull this oxygen out of the water, and gills are perfectly designed for the job.\n\nGills are found on each side of a fish's head, usually hidden under a flap. A fish breathes by taking water into its mouth and pushing it out over the gills. The gills are full of very thin, feathery parts, rich with blood. As water flows over them, oxygen passes from the water into the fish's blood, while waste gas passes out. The used water then flows out through the gill openings.\n\nBecause there is far less oxygen in water than in air, gills must be very efficient. This is also why many fish die quickly when taken out of water: in the air, their gills collapse and stick together, so they can no longer absorb oxygen, even though they are surrounded by it.\n\nGills are a beautiful example of how living things adapt to their homes. Thanks to them, fish can live and breathe in rivers, lakes, and the vast ocean, worlds where humans could never survive without help.",
        summaryJa: "魚が水中で呼吸する仕組みについて。魚を含め全ての動物は生きるのに酸素が要る。だが魚は一生を水中で過ごし、そこには吸う空気がない。どうやって必要な酸素を得るのか。答えは、水で呼吸する特別な器官「えら」を持つことだ。水は空気がないように見えても、中に酸素が隠れている。わずかな酸素ガスが水に混ざっており、魚はそれを使う。課題は水から酸素を取り出すことで、えらはその仕事に完璧に設計されている。えらは魚の頭の両側、普通はふたの下にある。魚は口から水を取り入れ、えらの上に押し出して呼吸する。えらは血の豊富な薄い羽状の部分に満ち、水が流れると酸素が水から血へ移り、不要なガスが出る。使った水はえらの開口から出る。水中は空気より酸素がはるかに少ないためえらは高効率だ。水から出すと多くの魚がすぐ死ぬのは、空気中でえらがつぶれ酸素を吸えないからだ。",
        quiz: [
          { q: "What special organ do fish use to breathe?", options: ["Gills", "Wings", "Ears"], answer: 0 },
          { q: "Where do fish get their oxygen?", options: ["From oxygen mixed inside the water", "From the air above only", "From the mud"], answer: 0 },
          { q: "Why do many fish die quickly out of water?", options: ["In air their gills collapse and cannot absorb oxygen", "They dislike the sun", "They have too much oxygen"], answer: 0 }
        ]
      }
    ]
    }
  ] };
