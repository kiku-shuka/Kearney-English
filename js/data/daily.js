/* デイリー配信リーディング
 * 毎朝の自動ルーチンがこのファイルを丸ごと上書き生成する（直近 7 日分を保持）。
 * days は日付降順。各 day = { date: "YYYY-MM-DD", passages: [readingPassages と同スキーマ + genre] }
 * このファイル以外は手書きデータであり、ルーチンは触らない。
 */
window.KE_DATA = window.KE_DATA || {};

KE_DATA.dailyReading = { days: [
    {
    date: "2026-08-27",
    passages: [
      {
        id: "d0827-1",
        title: "Why Big Companies Buy Small Ones",
        level: "★★★",
        genre: "ビジネス",
        text: "In the business world, large companies often buy smaller ones. Recently, a major computer-chip company agreed to buy a smaller firm known for its work in artificial intelligence, in a deal worth billions of dollars. When one company buys another, it is called an acquisition, and it is one of the most important moves a business can make.\nWhy would a big, successful company buy a smaller one? Often, the smaller company has something valuable the buyer wants. It might own useful technology, a popular product, or a skilled team of workers. Building these from scratch could take years, but buying them gives the larger company instant access.\nAcquisitions can also help a company enter a new market or remove a rival. If a fast-growing small company might one day become a strong competitor, a larger firm may prefer to buy it and join forces instead.\nBut acquisitions are risky. They are expensive, and the two companies must learn to work together. Sometimes their people, systems, or cultures do not fit well, and the hoped-for benefits never appear. Many acquisitions succeed, but some fail badly.\nFor the smaller company and its founders, being bought can be a huge reward for years of hard work. For the larger one, it is a bet on the future.\nThe lesson is that businesses grow not only by working harder, but by combining. Behind a single big deal are ideas, people, and technology changing hands — reshaping industries, and deciding which companies will lead in the years to come.",
        summaryJa: "ビジネスの世界で、大企業はしばしば小さな企業を買う。最近、ある大手コンピューターチップ企業が、AIの取り組みで知られる小さな会社を、数十億ドルの取引で買収することに合意した。ある企業が別の企業を買うことは「買収（アクイジション）」と呼ばれ、事業が取りうる最も重要な動きの一つだ。なぜ大きく成功した企業が小さな企業を買うのか。しばしば、小さな企業は買い手が欲しい価値あるものを持つ。有用な技術、人気製品、熟練した従業員チームを持つかもしれない。これらを一から築くには何年もかかりうるが、買えば大企業は即座にアクセスできる。買収は、新市場への参入や競合の排除も助けうる。急成長する小企業がいつか強い競争相手になりうるなら、大企業はそれを買って力を合わせる方を好むかもしれない。だが買収は危険だ。高価で、二つの企業は共に働くことを学ばねばならない。時に、人・システム・文化がうまく合わず、望んだ利益は決して現れない。多くの買収は成功するが、ひどく失敗するものもある。小さな企業とその創業者には、買われることが何年もの努力への大きな報酬になりうる。大きな企業には、未来への賭けだ。教訓は、事業がより懸命に働くことだけでなく、結びつくことでも成長するということだ。一つの大きな取引の背後には、持ち主を変える発想・人・技術があり——産業を作り替え、来る年月にどの企業が主導するかを決めている。",
        quiz: [
          { q: "「買収」とは？", options: ["ある企業が別の企業を買うこと", "製品を売ること", "会社を閉じること"], answer: 0 },
          { q: "大企業が小さな企業を買う理由は？", options: ["有用な技術・製品・人材に即座にアクセスできるから", "客を減らすため", "技術を捨てるため"], answer: 0 },
          { q: "買収が危険な理由は？", options: ["高価で人・システム・文化が合わず利益が出ないこともある", "必ず成功するから", "費用がかからないから"], answer: 0 }
        ]
      },
      {
        id: "d0827-2",
        title: "Tiny Particles That Fight Cancer",
        level: "★★★",
        genre: "テクノロジー",
        text: "Removing a brain tumor is one of the most difficult operations in medicine. Surgeons must take out the cancer while protecting the healthy brain around it — and the hardest part is that tiny bits of tumor can be almost impossible to see. Now, scientists have created something that could help: 'smart' nanoparticles, incredibly tiny objects that can both light up hidden cancer cells and help destroy the ones left behind.\nWhat are nanoparticles? They are particles far smaller than a single cell — so small that thousands could fit across the width of a hair. Because of their size, they can travel through the body and gather in specific places, such as a tumor.\nHow do these particles help? First, they can be designed to glow, making cancer cells shine during surgery. This lets the surgeon see tumor that would otherwise be invisible, and remove more of it safely. Then, after the operation, the same particles can help destroy microscopic cancer cells that were left behind, lowering the chance the cancer returns.\nThis is still early research, done in laboratories and animal tests. Using such particles safely in people will require years of careful study, and not every promising idea succeeds.\nStill, the work points to an exciting future for medicine: tiny tools, working at the scale of cells, doing jobs too delicate for ordinary instruments. By combining chemistry, biology, and clever engineering, scientists are finding new ways to fight one of the hardest diseases — one nearly invisible particle at a time.",
        summaryJa: "脳腫瘍の摘出は医療で最も難しい手術の一つだ。外科医は、周りの健康な脳を守りつつがんを取り出さねばならない——そして最も難しいのは、微小な腫瘍のかけらがほとんど見えないことだ。今、科学者はそれを助けうるものを作った——「スマート」ナノ粒子、隠れたがん細胞を光らせ、残ったものの破壊も助けられる、極めて小さな物体だ。ナノ粒子とは何か。一つの細胞よりはるかに小さい粒子だ——髪の幅に何千も収まるほど小さい。その大きさゆえ、体内を移動し、腫瘍など特定の場所に集まれる。これらの粒子はどう助けるのか。まず、光るよう設計でき、手術中にがん細胞を輝かせる。これにより外科医は、さもなければ見えない腫瘍を見て、より多くを安全に取り除ける。次に、手術後、同じ粒子が、残された微視的ながん細胞の破壊を助け、がんが戻る可能性を下げる。これはまだ実験室と動物試験で行われる初期の研究だ。こうした粒子を人で安全に使うには何年もの丁寧な研究が要り、あらゆる有望な発想が成功するわけではない。それでもこの取り組みは、医療の胸躍る未来を指す——細胞の尺度で働き、普通の器具には繊細すぎる仕事をする微小な道具。化学・生物学・巧妙な工学を組み合わせ、科学者は最も難しい病の一つと闘う新しい方法を見つけている——ほぼ見えない一粒ずつ。",
        quiz: [
          { q: "スマートナノ粒子ができることは？", options: ["隠れたがん細胞を光らせ残ったものの破壊も助ける", "脳全体を取り除く", "痛みを増やす"], answer: 0 },
          { q: "ナノ粒子はどれくらい小さいか？", options: ["一つの細胞よりはるかに小さい", "建物ほど大きい", "肉眼でよく見える"], answer: 0 },
          { q: "この研究の現状は？", options: ["実験室と動物試験の初期段階", "既に広く使われている", "失敗して中止された"], answer: 0 }
        ]
      },
      {
        id: "d0827-3",
        title: "Protecting Children Online",
        level: "★★★",
        genre: "世界情勢",
        text: "Children today grow up with the internet. They learn, play, and talk with friends online, often from a very young age. But the digital world can also be dangerous for them, and recently governments around the world have been taking action to make it safer. In one country, a major technology company agreed to a large settlement over concerns that its social media harmed young users.\nWhy are people worried? Social media and other online services are designed to keep users looking at their screens for as long as possible. For children, whose minds are still developing, this can lead to too much screen time, less sleep, and pressure to compare themselves with others. Young people may also meet strangers online or see content that is not suitable for them.\nWhat are governments and companies doing? Some are creating rules that require companies to protect young users — for example, by limiting certain features for children, adding parental controls, or checking users' ages. Companies are being asked to design their services with children's safety in mind, not only with profit.\nThis is a difficult balance. The internet offers children wonderful chances to learn and connect, and no one wants to shut those out. The goal is to keep the benefits while reducing the harms.\nProtecting children online has become a shared challenge around the world. As young people spend more of their lives on screens, families, companies, and governments are all learning, together, how to help them grow up safe in a digital age.",
        summaryJa: "今日の子どもはインターネットとともに育つ。しばしば非常に幼い頃から、オンラインで学び、遊び、友人と話す。だがデジタルの世界は彼らにとって危険にもなりうる。最近、世界中の政府がそれをより安全にするための行動を取っている。ある国では、大手技術企業が、そのソーシャルメディアが若い利用者を害したという懸念をめぐり、大きな和解に合意した。なぜ人々は心配するのか。ソーシャルメディアなどのオンラインサービスは、利用者をできるだけ長く画面に見入らせるよう設計されている。心がまだ発達途上の子どもには、これが過度の画面時間、睡眠不足、他者と自分を比べる圧力につながりうる。若者はオンラインで見知らぬ人に会ったり、適さない内容を見たりもしうる。政府と企業は何をしているのか。若い利用者を守るよう企業に求める規則を作る動きもある——例えば、子ども向けに特定の機能を制限し、保護者による管理を加え、利用者の年齢を確認するなど。企業は、利益だけでなく子どもの安全を念頭にサービスを設計するよう求められている。これは難しい均衡だ。インターネットは子どもに学び、つながる素晴らしい機会を与え、誰もそれを締め出したくない。目標は、利益を保ちつつ害を減らすことだ。子どものオンライン保護は、世界中で共有の課題になった。若者が生活のより多くを画面上で過ごす中、家族・企業・政府はみな共に、デジタル時代に彼らが安全に育つ手助けの仕方を学んでいる。",
        quiz: [
          { q: "オンラインで子どもについて心配される理由は？", options: ["過度の画面時間・睡眠不足・比較の圧力などにつながりうる", "学べないから", "無料だから"], answer: 0 },
          { q: "政府や企業がしていることは？", options: ["機能の制限・保護者管理・年齢確認など安全のための規則", "子どもの利用を全面禁止", "何もしない"], answer: 0 },
          { q: "この課題の難しい均衡とは？", options: ["利益を保ちつつ害を減らすこと", "利益を全て捨てること", "害を増やすこと"], answer: 0 }
        ]
      },
      {
        id: "d0827-4",
        title: "Helping a Region Recover Through Travel",
        level: "★★☆",
        genre: "日本",
        text: "After a natural disaster, a region faces a long road to recovery. Homes and roads must be repaired, but there is another, quieter problem: visitors often stop coming. When tourists stay away, hotels, restaurants, and shops lose the income they depend on. Recently, Japan considered a plan to help one area recover by encouraging people to travel there again.\nThe idea is simple. After an earthquake struck part of southern Japan, the government looked at helping cover much of the cost of trips to the area. By making travel cheaper, they hoped to bring back visitors, and with them, money to support local businesses.\nWhy use tourism to help recovery? Rebuilding needs money, and a healthy flow of visitors brings money directly to the people who need it — the shop owner, the innkeeper, the taxi driver. Travel also lifts spirits, showing a struggling community that the wider country has not forgotten them.\nThere is another benefit. After a disaster, people far away may wrongly believe an entire region is unsafe or closed, even when most of it is fine. Encouraging visitors helps correct this and shows that the area is open and welcoming.\nOf course, safety comes first, and such plans must be carefully timed. But the idea reflects an important truth: helping a place recover is not only about repairing buildings. It is also about bringing life, activity, and people back. Sometimes, one of the kindest things a traveler can do is simply to visit a place that needs them.",
        summaryJa: "自然災害の後、地域は回復への長い道に直面する。家や道路は修理せねばならないが、もう一つの静かな問題がある——訪問者がしばしば来なくなるのだ。観光客が遠ざかると、ホテル・飲食店・店は頼りにする収入を失う。最近、日本は、人々が再びそこへ旅するのを促すことで、ある地域の回復を助ける案を検討した。発想は単純だ。南日本の一部を地震が襲った後、政府はその地域への旅の費用の多くを補助することを検討した。旅を安くすることで訪問者を呼び戻し、彼らとともに地元事業を支えるお金をもたらそうとした。なぜ観光で回復を助けるのか。再建にはお金が要り、健全な訪問者の流れは、それを必要とする人々——店主・宿の主人・タクシー運転手——に直接お金をもたらす。旅は気持ちも高め、苦境の地域に、広い国が彼らを忘れていないと示す。もう一つの利点もある。災害の後、遠くの人々は、大部分が無事でも地域全体が危険だ・閉鎖されたと誤って信じるかもしれない。訪問を促すことはこれを正し、その地域が開いていて歓迎していると示す助けになる。もちろん安全が最優先で、こうした案は慎重な時機が要る。だがこの発想は重要な真実を映す——ある場所の回復を助けることは、建物を修理することだけではない。生命・活動・人を呼び戻すことでもある。時に、旅行者ができる最も親切なことの一つは、単に、彼らを必要とする場所を訪れることなのだ。",
        quiz: [
          { q: "災害後の「静かな問題」とは？", options: ["訪問者が来なくなり地元事業が収入を失うこと", "道路が広がること", "人口が増えること"], answer: 0 },
          { q: "観光で回復を助ける理由は？", options: ["訪問者が必要とする人々に直接お金をもたらすから", "観光は無関係だから", "建物だけが重要だから"], answer: 0 },
          { q: "本文が映す真実は？", options: ["回復は建物の修理だけでなく人を呼び戻すことでもある", "回復は不可能", "旅は無意味"], answer: 0 }
        ]
      },
      {
        id: "d0827-5",
        title: "A Star's Hidden Partner",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "High in the winter sky shines a famous red star called Betelgeuse, one of the brightest and largest stars we can see. For about a hundred years, astronomers suspected that this giant star was not alone — that a smaller companion star might be circling it, hidden in its glare. Recently, scientists finally captured their clearest image yet of this hidden partner, ending a search that lasted a century.\nWhy was it so hard to see? Betelgeuse is enormous and extremely bright, so a much smaller, fainter star close beside it is easily lost in its light — like trying to spot a candle right next to a searchlight. Only with very powerful modern telescopes and clever techniques could astronomers finally separate the two.\nWhy does this discovery matter? Many stars in the universe come in pairs, circling each other. A companion can change how a star behaves — how it brightens, dims, and ages. Betelgeuse is known for slowly changing its brightness, and understanding its partner may help explain these changes.\nStudying such faraway objects is painstaking work. The stars are hundreds of light-years away, so astronomers must gather faint light and analyze it with great care over many years.\nThe find is a reminder of how much patience science requires, and how new tools can finally answer old questions. For a hundred years, a hidden star waited just out of view. Now, at last, we have seen it — a small victory in humanity's long effort to understand the distant, glittering lights that fill our night sky.",
        summaryJa: "冬の空高くに、ベテルギウスと呼ばれる有名な赤い星が輝く。私たちが見られる最も明るく大きな星の一つだ。約100年の間、天文学者はこの巨星が独りではない——より小さな伴星がその輝きに隠れて回っているかもしれない——と疑ってきた。最近、科学者はついにこの隠れた相手の、これまでで最も鮮明な画像を捉え、一世紀続いた探索を終えた。なぜそんなに見えにくかったのか。ベテルギウスは巨大で極めて明るいので、すぐそばのずっと小さく暗い星は、その光に容易にかき消される——サーチライトのすぐ隣のろうそくを見つけようとするように。非常に強力な現代の望遠鏡と巧妙な技法があって初めて、天文学者はついに二つを分けられた。なぜこの発見が重要か。宇宙の多くの星は対で、互いを回る。伴星は星のふるまい——どう明るくなり、暗くなり、年を取るか——を変えうる。ベテルギウスはゆっくり明るさを変えることで知られ、その相手の理解がこうした変化の説明を助けるかもしれない。こんな遠い天体の研究は骨の折れる仕事だ。星は数百光年離れているので、天文学者はかすかな光を集め、何年もかけて細心の注意で分析せねばならない。この発見は、科学がどれほどの忍耐を要するか、そして新しい道具が古い問いについに答えられることを思い出させる。100年の間、隠れた星は見えないところで待っていた。今、ついに、私たちはそれを見た——夜空を満たす遠くきらめく光を理解しようとする人類の長い努力の、小さな勝利だ。",
        quiz: [
          { q: "ベテルギウスの伴星が見えにくかった理由は？", options: ["ベテルギウスが明るすぎてそばの暗い星がかき消されるから", "伴星が存在しないから", "昼だけ見えるから"], answer: 0 },
          { q: "伴星の研究が重要な理由は？", options: ["星のふるまい（明るさの変化など）の説明を助けうるから", "星を壊すため", "光を消すため"], answer: 0 },
          { q: "この発見が思い出させることは？", options: ["科学は忍耐を要し新しい道具が古い問いに答えうる", "科学は簡単だ", "望遠鏡は不要だ"], answer: 0 }
        ]
      }
    ]
  },
    {
    date: "2026-08-26",
    passages: [
      {
        id: "d0826-1",
        title: "The Idea Behind Insurance",
        level: "★★★",
        genre: "ビジネス",
        text: "Life is full of risks. A house might catch fire, a car might crash, or a person might fall ill. Any of these can cost a huge amount of money — often more than one family or business could ever pay alone. Insurance is a clever idea that helps people share these risks, and it is one of the most important tools in modern business.\nHow does insurance work? Many people each pay a small, regular amount of money, called a premium, into a shared pool managed by an insurance company. Most of them will not have a disaster in any given year. But when one person does — a fire, an accident, a serious illness — the company uses money from the pool to help cover the cost. In this way, the misfortune of a few is shared by many.\nWhy is this useful? On its own, a single family might be ruined by one large, unexpected expense. By paying a small amount regularly, they trade a big, uncertain risk for a small, predictable cost. This peace of mind lets people and businesses plan for the future and take sensible chances.\nInsurance companies must be careful. They study how often bad events happen so they can set fair prices, collecting enough to pay claims while staying in business.\nThe basic idea, though, is simple and powerful: together, we can carry burdens that would crush any one of us alone. Insurance turns the unpredictable dangers of life into something communities can face — by sharing the risk among many.",
        summaryJa: "人生はリスクに満ちている。家が火事になり、車が衝突し、人が病気になるかもしれない。どれも莫大なお金がかかりうる——しばしば一つの家族や事業が単独で払える以上に。保険は、人々がこうしたリスクを分かち合う助けとなる巧妙な発想で、現代ビジネスで最も重要な道具の一つだ。保険はどう働くのか。多くの人がそれぞれ、「保険料」と呼ばれる小さく定期的なお金を、保険会社が管理する共有の資金の池に払う。そのほとんどは、ある年に災難に遭わない。だが誰かが遭うとき——火事・事故・重い病気——会社は池のお金を使って費用の負担を助ける。こうして、少数の不運が多数に分かち合われる。なぜ有用か。単独では、一つの家族が一度の大きく予期せぬ出費で破滅しうる。小さな額を定期的に払うことで、大きく不確かなリスクを、小さく予測できる費用と交換する。この安心が、人や事業に将来を計画させ、理にかなった挑戦をさせる。保険会社は慎重でなければならない。悪い出来事がどれだけ頻繁に起きるか研究し、公正な価格を設定する——請求に払うだけ集めつつ事業を続けられるように。だが基本の発想は単純で力強い——共に、私たちは一人では押し潰されそうな重荷を担える。保険は、人生の予測できない危険を、地域が向き合えるものに変える——リスクを多数で分かち合うことで。",
        quiz: [
          { q: "保険はどう働くか？", options: ["多くの人が保険料を共有の池に払い、災難に遭った人を助ける", "一人が全額を払う", "何もしない"], answer: 0 },
          { q: "保険が有用な理由は？", options: ["大きく不確かなリスクを小さく予測できる費用と交換できる", "費用が増えるだけ", "災難が増える"], answer: 0 },
          { q: "保険の基本の発想は？", options: ["リスクを多数で分かち合う", "一人で重荷を負う", "危険を無視する"], answer: 0 }
        ]
      },
      {
        id: "d0826-2",
        title: "Robots in the Operating Room",
        level: "★★★",
        genre: "テクノロジー",
        text: "When you imagine surgery, you probably picture a doctor holding the tools. But increasingly, another kind of helper is present in the operating room: a robot. Recent research found that some operations, such as knee replacements, can be more precise when a surgeon works together with a robotic system.\nHow do surgical robots work? They do not operate on their own. Instead, a human surgeon guides them, and the robot helps carry out the plan with great accuracy. Before surgery, doctors can create a detailed map of the patient's body. During the operation, the robot helps the surgeon follow that plan exactly, cutting or placing parts with steadiness a human hand alone may not match.\nWhy does precision matter? In many operations, tiny differences can affect how well a patient recovers. A joint that is placed at just the right angle may feel more natural and last longer. Greater accuracy can mean less pain, faster healing, and better results.\nStill, robots are tools, not replacements for doctors. The surgeon's skill, judgment, and experience remain essential. The robot handles precise movements, while the human makes the decisions and responds to anything unexpected.\nThere are challenges too. Robotic systems are expensive, require training, and are not needed for every operation. Doctors must decide when they truly help.\nThe trend shows how technology and human skill can work together. By combining a surgeon's knowledge with a robot's steadiness, medicine is becoming more precise — helping patients heal better, one careful, well-guided movement at a time.",
        summaryJa: "手術を想像するとき、あなたはたぶん道具を持つ医師を思い描く。だがますます、手術室には別の助け手がいる——ロボットだ。最近の研究は、膝の置換など一部の手術が、外科医がロボットシステムと協働するとより精密になりうると見つけた。手術ロボットはどう働くのか。自ら手術するのではない。人間の外科医が導き、ロボットが計画を高い正確さで実行する助けをする。手術前、医師は患者の体の詳細な地図を作れる。手術中、ロボットは外科医がその計画に正確に従う助けをし、人の手だけでは及ばないかもしれない安定さで切ったり部品を置いたりする。なぜ精密さが重要か。多くの手術で、わずかな違いが患者の回復を左右しうる。ちょうど良い角度に置かれた関節は、より自然に感じられ長持ちしうる。より高い正確さは、痛みの軽減・速い治癒・より良い結果を意味しうる。それでもロボットは道具であり、医師の代わりではない。外科医の技能・判断・経験は不可欠なままだ。ロボットが精密な動きを担い、人間が決定を下し、予期せぬことに対応する。課題もある。ロボットシステムは高価で、訓練を要し、あらゆる手術に必要ではない。医師は、それが本当に役立つときを判断せねばならない。この流れは、技術と人の技能がどう協働できるかを示す。外科医の知識とロボットの安定さを組み合わせることで、医療はより精密になっている——患者がよりよく治る助けをして、丁寧でよく導かれた一動作ずつ。",
        quiz: [
          { q: "手術ロボットはどう働くか？", options: ["人間の外科医が導き、ロボットが計画を正確に実行する", "自ら手術する", "医師の代わりに決定する"], answer: 0 },
          { q: "手術での精密さが重要な理由は？", options: ["わずかな違いが回復を左右しうるから", "精密さは無関係", "速さだけが重要"], answer: 0 },
          { q: "本文がロボットについて述べることは？", options: ["道具であり医師の技能・判断は不可欠なまま", "医師を不要にする", "あらゆる手術に必要"], answer: 0 }
        ]
      },
      {
        id: "d0826-3",
        title: "When a Giant Piece of Ice Breaks Free",
        level: "★★★",
        genre: "世界情勢",
        text: "Near the top of the world, a huge sheet of ice recently broke away from a glacier in Greenland. The piece was enormous — about the size of a large city. Scientists had watched cracks slowly spreading across the ice for years before it finally split off and began to drift out to sea. Events like this are a striking sign of change in Earth's frozen regions.\nWhy do these giant blocks break off? Glaciers are rivers of ice that flow very slowly from the land toward the sea. Where they meet the ocean, huge floating sheets can form. As the air and water grow warmer, these sheets weaken, and cracks appear. Eventually, a large piece breaks free — a process called 'calving.' Some calving is natural, but warming makes it happen more often.\nWhy does it matter far away? The ice near the poles helps keep the whole planet cool by reflecting sunlight back into space. When ice on land melts and flows into the ocean, it also raises sea levels, which can threaten coastal cities around the world. What happens in the distant Arctic can reach shores thousands of kilometers away.\nScientists watch these regions closely, using satellites and sensors to track the ice. Their measurements help the world understand how fast things are changing.\nA single breaking sheet of ice is a small event in a vast landscape. But it is also a message from a changing planet — a reminder that the frozen ends of the Earth are connected to us all.",
        summaryJa: "世界の頂近くで、最近、巨大な氷の板がグリーンランドの氷河から割れて離れた。その塊は途方もなく大きく——大都市ほどの大きさだった。科学者は、それがついに割れて海へ漂い出す前、何年もかけて氷にゆっくり広がる亀裂を見守っていた。こうした出来事は、地球の凍った地域の変化の際立った兆しだ。なぜこうした巨大な塊が割れるのか。氷河は、陸から海へ非常にゆっくり流れる氷の川だ。海と出会う所で、巨大な浮かぶ板ができうる。空気と水が暖まるにつれ、これらの板は弱まり、亀裂が現れる。やがて大きな塊が割れて離れる——「カービング（分離・崩落）」と呼ばれる過程だ。カービングの一部は自然だが、温暖化はそれをより頻繁にする。なぜ遠くで重要か。極近くの氷は、日光を宇宙へ反射し返して地球全体を涼しく保つ助けをする。陸の氷が溶けて海へ流れ込むと、海面も上昇し、世界中の沿岸都市を脅かしうる。遠い北極で起きることが、何千キロも離れた岸に届きうる。科学者は衛星やセンサーで氷を追い、これらの地域を注意深く見守る。その測定は、物事がどれほど速く変わっているかを世界が理解する助けになる。割れる一枚の氷の板は、広大な風景の中の小さな出来事だ。だがそれは、変わりゆく惑星からの伝言でもある——地球の凍った果てが私たち皆とつながっていることの気づきだ。",
        quiz: [
          { q: "「カービング」とは？", options: ["氷河から大きな氷の塊が割れて離れる過程", "氷を彫ること", "海を凍らせること"], answer: 0 },
          { q: "極の氷が地球に果たす役割は？", options: ["日光を反射して地球を涼しく保つ助けをする", "地球を温める", "何もしない"], answer: 0 },
          { q: "陸の氷が海に流れ込むと何が起きるか？", options: ["海面が上昇し沿岸都市を脅かしうる", "海が浅くなる", "何も起きない"], answer: 0 }
        ]
      },
      {
        id: "d0826-4",
        title: "Bowing: A Language Without Words",
        level: "★★☆",
        genre: "日本",
        text: "In Japan, people greet, thank, and apologize in a way that needs no words: they bow. A bow, called ojigi, is a small forward bend of the body, and it is one of the most important gestures in Japanese daily life. Though it looks simple, a bow can carry many different meanings.\nWhy do people bow? A bow is a sign of respect. People bow when they meet someone, say goodbye, give thanks, or say sorry. It shows that you are paying attention to the other person and treating them politely. In many situations where people in other countries might shake hands, Japanese people bow instead.\nInterestingly, not all bows are the same. A small nod of the head is casual and friendly, used among people who know each other. A deeper bow shows greater respect, given to a teacher, a customer, or an important guest. A very deep, long bow can express a serious apology or deep gratitude. The angle and length of the bow send a clear message.\nChildren learn to bow from a young age, and it becomes a natural habit. Even on the telephone, when the other person cannot see them, many Japanese people bow without thinking.\nFor visitors, learning to bow is a friendly way to show respect, though a simple, gentle bow is usually enough. Behind the gesture is a value at the heart of Japanese culture: showing care and consideration for others. A bow is a quiet way of saying, without any words, 'I respect you.'",
        summaryJa: "日本では、人々は言葉を要さない方法で挨拶し、感謝し、謝る——お辞儀だ。「お辞儀」と呼ばれる、体を前に少し曲げる動作は、日本の日常生活で最も重要な仕草の一つだ。単純に見えるが、お辞儀は多くの異なる意味を担いうる。なぜ人はお辞儀するのか。お辞儀は敬意の印だ。人は、誰かに会うとき、別れるとき、感謝するとき、謝るときにお辞儀する。相手に注意を払い、丁寧に接していることを示す。他国の人が握手するかもしれない多くの場面で、日本人は代わりにお辞儀する。興味深いことに、すべてのお辞儀が同じではない。小さな会釈は、気軽で親しげで、知り合い同士で使われる。より深いお辞儀は、教師・客・大切な来賓へ向けられ、より大きな敬意を示す。とても深く長いお辞儀は、真剣な謝罪や深い感謝を表しうる。お辞儀の角度と長さが明確なメッセージを送る。子どもは幼い頃からお辞儀を学び、それは自然な習慣になる。電話でさえ、相手に見えなくても、多くの日本人は考えずにお辞儀する。訪問者には、お辞儀を学ぶことは敬意を示す親しみやすい方法だ——とはいえ、単純で穏やかなお辞儀で普通は十分だ。この仕草の背後には、日本文化の中心にある価値がある——他者への気遣いと配慮を示すこと。お辞儀は、言葉なしに「あなたを尊敬します」と言う、静かな方法なのだ。",
        quiz: [
          { q: "「お辞儀」とは何をすることか？", options: ["体を前に少し曲げて敬意を示す", "手をたたく", "飛び上がる"], answer: 0 },
          { q: "お辞儀の意味を変えるものは？", options: ["お辞儀の角度と長さ", "服の色", "時間帯"], answer: 0 },
          { q: "お辞儀の背後にある価値は？", options: ["他者への気遣いと配慮", "競争心", "無関心"], answer: 0 }
        ]
      },
      {
        id: "d0826-5",
        title: "A Hidden Species in the Museum",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "Sometimes, an exciting scientific discovery is made not in a distant jungle, but in a quiet museum drawer. Recently, scientists used DNA from a nearly two-hundred-year-old museum specimen to confirm that a type of pangolin — a scaly, ant-eating animal — is actually a distinct species, one that had been hiding in plain sight for generations.\nHow can an old specimen reveal a new species? Museums around the world hold millions of preserved animals, some collected long ago. For a long time, scientists could only study them by looking at their shape and size. But modern tools can now read DNA — the genetic code inside cells — even from very old samples. By comparing this code with living animals, scientists can tell whether two similar-looking creatures are truly the same species or different ones.\nWhy does this matter? Knowing exactly how many species exist, and which is which, is important for protecting them. Pangolins are among the most threatened animals in the world, hunted heavily for their scales and meat. If one group is actually a separate, rarer species, it may need special protection to survive.\nThe discovery also shows the hidden value of museums. Specimens collected almost two centuries ago, by people who could never have imagined DNA, are still teaching us new things today.\nIt is a reminder that discovery is not only about exploring new places, but also about looking again, with new tools, at what we already have. Sometimes the next great finding is waiting quietly on a shelf, ready to reveal its secrets.",
        summaryJa: "時に、胸躍る科学の発見は、遠いジャングルでなく、静かな博物館の引き出しでなされる。最近、科学者は、約200年前の博物館標本のDNAを使い、あるセンザンコウ——鱗を持ちアリを食べる動物——が実は別個の種であることを確認した。何世代も、目の前に隠れていた種だ。古い標本がどうして新しい種を明かせるのか。世界中の博物館は、何百万もの保存された動物を持ち、その一部ははるか昔に集められた。長い間、科学者はその形と大きさを見て研究するしかなかった。だが現代の道具は今、非常に古い試料からさえDNA——細胞の中の遺伝暗号——を読める。この暗号を生きた動物と比べることで、似て見える二つの生き物が本当に同じ種か別かを見分けられる。なぜ重要か。正確に何種が存在し、どれがどれかを知ることは、それらを守るために重要だ。センザンコウは世界で最も脅かされた動物の一つで、鱗と肉のため激しく狩られる。もしある集団が実は別の、より稀な種なら、生き延びるために特別な保護が要るかもしれない。この発見は、博物館の隠れた価値も示す。DNAを想像すらできなかった人々が約200年前に集めた標本が、今日なお私たちに新しいことを教えている。それは、発見が新しい場所を探ることだけでなく、既にあるものを新しい道具で見直すことでもあると思い出させる。時に、次の偉大な発見は、棚の上で静かに、その秘密を明かす準備をして待っているのだ。",
        quiz: [
          { q: "古い博物館標本が新種を明かせる理由は？", options: ["現代の道具が古い試料からDNAを読めるから", "標本が動くから", "色が変わるから"], answer: 0 },
          { q: "何種が存在するかを知ることが重要な理由は？", options: ["それらを守るために重要だから", "無意味だから", "狩るために必要だから"], answer: 0 },
          { q: "本文が伝えることは？", options: ["発見は既にあるものを新しい道具で見直すことでもある", "新しい場所だけが重要", "博物館は無価値"], answer: 0 }
        ]
      }
    ]
  },
    {
    date: "2026-08-25",
    passages: [
      {
        id: "d0825-1",
        title: "Why Small Businesses Matter",
        level: "★★★",
        genre: "ビジネス",
        text: "When we think of business, we often picture huge, famous companies. But in every country, most businesses are actually small — a local bakery, a family repair shop, a tiny software startup. Though each one is small, together they form the backbone of the economy, and they matter far more than their size suggests.\nWhy are small businesses so important? First, they create a large share of all jobs. Around the world, small and medium-sized companies employ enormous numbers of people, often more than big corporations do. When someone loses a job at a large firm, a small business nearby may be the one that hires them.\nSmall businesses also keep communities alive. A local shop knows its customers, supports its neighborhood, and keeps money circulating close to home. Many towns depend on their small businesses for character as much as for services.\nThey are engines of new ideas, too. Big companies can be slow to change, while small firms often try bold, fresh ideas. Many great inventions and famous companies began as tiny startups run by just a few people.\nOf course, small businesses face real challenges. They have less money, fewer staff, and thinner cushions against hard times. A single bad year can close a small shop that a large company would survive.\nThat is why many governments try to help them, through loans, advice, and fair rules. Supporting small businesses is not charity; it is an investment in jobs, communities, and new ideas — the quiet foundation on which much of the economy is built.",
        summaryJa: "ビジネスと聞くと、私たちはしばしば巨大で有名な企業を思い描く。だがどの国でも、ほとんどの事業は実は小さい——地元のパン屋、家族経営の修理店、小さなソフトウェアの新興企業。一つ一つは小さくても、合わされば経済の背骨をなし、その大きさが示す以上に重要だ。なぜ小さな事業はそれほど重要か。第一に、全雇用の大きな割合を生む。世界中で、中小企業は膨大な数の人を雇い、しばしば大企業より多い。誰かが大企業で職を失っても、近くの小さな事業が雇ってくれるかもしれない。小さな事業は地域も生かす。地元の店は客を知り、近隣を支え、お金を家の近くで回し続ける。多くの町は、サービスと同じくらい、その個性のためにも小さな事業に頼る。新しい発想の原動力でもある。大企業は変化が遅くなりうるが、小さな企業はしばしば大胆で新鮮な発想を試す。多くの偉大な発明や有名企業は、ほんの数人が営む小さな新興企業として始まった。もちろん、小さな事業は本当の課題に直面する。お金は少なく、人手は乏しく、困難な時への緩衝は薄い。一度の悪い年が、大企業なら生き延びる小さな店を閉じうる。だから多くの政府は、融資・助言・公正な規則で助けようとする。小さな事業を支えることは施しでなく、雇用・地域・新しい発想への投資だ——経済の多くが築かれる、静かな土台なのだ。",
        quiz: [
          { q: "小さな事業が重要な理由の一つは？", options: ["全雇用の大きな割合を生むから", "有名でないから", "お金が多いから"], answer: 0 },
          { q: "小さな事業が地域に果たす役割は？", options: ["客を知り近隣を支えお金を近くで回す", "町を無視する", "お金を遠くへ送る"], answer: 0 },
          { q: "小さな事業が直面する課題は？", options: ["お金・人手・緩衝が乏しく一度の悪い年で閉じうる", "課題は全くない", "大企業より安全である"], answer: 0 }
        ]
      },
      {
        id: "d0825-2",
        title: "Turning Plant Waste into Useful Chemicals",
        level: "★★★",
        genre: "テクノロジー",
        text: "Every year, farms and forests produce huge amounts of plant waste — stalks, husks, sawdust, and other leftovers. Much of it is simply burned or thrown away. But inside these plants is a tough material called lignin, which holds useful chemicals locked away. Recently, scientists created a new tool that can unlock them: a catalyst that breaks down stubborn lignin into valuable chemicals, using gentle conditions.\nWhat is a catalyst? A catalyst is a substance that speeds up a chemical reaction without being used up itself. It is like a helper that makes a difficult reaction happen more easily. The new catalyst helps break lignin apart, something that has long been hard to do.\nWhy is this important? Lignin is one of the most common natural materials on Earth, yet it is difficult to use. If scientists can turn it into useful chemicals cheaply and cleanly, plant waste could become a valuable resource instead of rubbish. These chemicals could replace some made from oil, helping reduce our reliance on fossil fuels.\nThe fact that the new process works under 'mild conditions' matters a lot. Reactions that need very high heat or pressure use lots of energy and cost more. A gentler process is cheaper and better for the environment.\nThere is still work to do before this is used in factories. But the discovery points to a hopeful idea: that waste is often just a resource we have not yet learned to use. By unlocking the chemistry hidden in plants, scientists are finding new value in what we once threw away.",
        summaryJa: "毎年、農場や森は膨大な量の植物の廃棄物——茎・殻・おがくず・その他の残り——を生む。その多くは単に燃やされるか捨てられる。だがこれらの植物の中には、リグニンと呼ばれる丈夫な物質があり、有用な化学物質を閉じ込めている。最近、科学者はそれを解き放てる新しい道具を作った——穏やかな条件で、手強いリグニンを価値ある化学物質に分解する触媒だ。触媒とは何か。触媒は、自らは消費されずに化学反応を速める物質だ。難しい反応をより容易に起こす助け手のようなものだ。新しい触媒は、長く難しかったリグニンの分解を助ける。なぜ重要か。リグニンは地球で最もありふれた天然素材の一つだが、使うのが難しい。科学者がそれを安くクリーンに有用な化学物質へ変えられれば、植物の廃棄物はごみでなく貴重な資源になりうる。これらの化学物質は石油から作られるものの一部を置き換え、化石燃料への依存を減らす助けになりうる。新プロセスが「穏やかな条件」で働くことは大いに重要だ。非常な高温や高圧を要する反応は多くのエネルギーを使い費用も高い。より穏やかな工程は安く、環境にも良い。工場で使われる前にまだやるべきことはある。だがこの発見は希望ある発想を指す——廃棄物はしばしば、まだ使い方を学んでいない資源にすぎない。植物に隠れた化学を解き放つことで、科学者はかつて捨てていたものに新しい価値を見つけている。",
        quiz: [
          { q: "「触媒」とは？", options: ["自らは消費されずに化学反応を速める物質", "燃料の一種", "廃棄物の一種"], answer: 0 },
          { q: "リグニンから化学物質を作る利点は？", options: ["植物の廃棄物が資源になり石油依存を減らせる", "廃棄物が増える", "石油が増える"], answer: 0 },
          { q: "「穏やかな条件」が重要な理由は？", options: ["高温・高圧より安く環境に良いから", "高価になるから", "危険だから"], answer: 0 }
        ]
      },
      {
        id: "d0825-3",
        title: "Keeping Other Worlds Clean",
        level: "★★★",
        genre: "世界情勢",
        text: "As humans explore space, we carry something with us that we cannot fully control: tiny living things. Bacteria and other microbes live on our skin, our tools, and our spacecraft. Recently, scientists warned that microbes brought by astronauts might survive in cold, shadowed spots near the Moon's South Pole. This raises an important question for all of humanity: how do we explore other worlds without contaminating them?\nWhy does this matter? Scientists want to study places like the Moon and Mars as they naturally are, to learn how they formed and whether they ever held life. If we accidentally leave Earth's microbes there, it could confuse future studies. Imagine searching for signs of alien life, only to find bacteria that we brought ourselves.\nThis concern is called 'planetary protection.' Space agencies around the world follow careful rules to clean spacecraft before launch and to limit where they land. The goal is to keep other worlds as pristine as possible, so their secrets are not spoiled.\nIt is a shared responsibility. Space belongs to no single country, and a mistake by one mission could affect the science of all. As more nations and companies travel into space, agreeing on and following these rules becomes even more important.\nThe issue is a reminder that exploration comes with duties as well as dreams. Reaching new worlds is a great achievement, but so is protecting them. As humanity spreads outward, we must learn to be not only bold explorers, but careful and respectful guests in the wider universe.",
        summaryJa: "人類が宇宙を探査するとき、私たちは完全には制御できないものを共に運ぶ——小さな生き物だ。細菌など微生物は、私たちの肌・道具・宇宙船に住む。最近、科学者は、宇宙飛行士が運んだ微生物が、月の南極近くの冷たく影になった場所で生き延びるかもしれないと警告した。これは全人類に重要な問いを投げかける——他の世界をどう汚染せずに探査するのか。なぜ重要か。科学者は、月や火星のような場所を自然のままに研究し、どう形成されたか、かつて生命を宿したかを知りたい。もし誤って地球の微生物をそこに残せば、将来の研究を混乱させうる。宇宙生命の兆しを探して、自分たちが持ち込んだ細菌を見つけるだけ、という事態を想像してほしい。この懸念は「惑星保護」と呼ばれる。世界中の宇宙機関は、打ち上げ前に宇宙船を清め、着陸場所を制限する慎重な規則に従う。目標は、他の世界を可能な限り手つかずに保ち、その秘密を損なわないことだ。それは共有の責任だ。宇宙はどの一国のものでもなく、一つのミッションの過ちが皆の科学に影響しうる。より多くの国と企業が宇宙へ旅する中、こうした規則に合意し従うことは一層重要になる。この問題は、探査が夢だけでなく務めも伴うことを思い出させる。新しい世界に到達するのは偉大な成果だが、それを守ることも同じだ。人類が外へ広がるにつれ、私たちは大胆な探検者であるだけでなく、より広い宇宙で慎重で敬意ある客であることを学ばねばならない。",
        quiz: [
          { q: "科学者が警告したことは？", options: ["宇宙飛行士の微生物が月で生き延びるかもしれない", "月に水がないこと", "ロケットが遅いこと"], answer: 0 },
          { q: "「惑星保護」の目標は？", options: ["他の世界を手つかずに保ち秘密を損なわないこと", "宇宙を汚すこと", "探査をやめること"], answer: 0 },
          { q: "本文が伝えることは？", options: ["探査は夢だけでなく務めも伴う", "探査に責任はない", "宇宙は一国のものだ"], answer: 0 }
        ]
      },
      {
        id: "d0825-4",
        title: "Japan's Vending Machine Culture",
        level: "★★☆",
        genre: "日本",
        text: "In Japan, you are never far from a vending machine. On busy city streets, in quiet villages, and even on mountain paths, these machines stand ready day and night. Japan has one of the highest numbers of vending machines per person in the world, and they have become a small but fascinating part of daily life.\nWhat do they sell? Most offer drinks — cold water, tea, coffee, and juice in summer, and hot drinks in cans during winter. But that is only the beginning. Some machines sell ice cream, hot meals, soup, umbrellas, flowers, or even fresh eggs. Whatever the need, there may be a machine for it.\nWhy are they so common in Japan? Several reasons help explain it. Japan is very safe, so machines can stand outside without being damaged or robbed. Land in cities is expensive, and a vending machine needs almost no space or staff. And people value convenience and quick, reliable service, which the machines provide perfectly.\nThe machines also reflect a love of small, thoughtful details. Many are kept spotlessly clean, work without fail, and offer just the right drink at just the right temperature.\nFor visitors, Japan's vending machines are often a delightful surprise — a symbol of a country that is orderly, safe, and full of quiet conveniences. Behind something as ordinary as buying a drink lies a whole culture: one that values cleanliness, trust, and the simple pleasure of getting exactly what you want, whenever you want it.",
        summaryJa: "日本では、自動販売機からそう遠く離れることはない。賑やかな街路、静かな村、山道にさえ、これらの機械は昼も夜も待ち構えている。日本は一人当たりの自販機の数が世界有数で、それらは日常生活の小さくも魅力的な一部になった。何を売るのか。多くは飲み物——夏は冷たい水・茶・コーヒー・ジュース、冬は缶入りの温かい飲み物。だがそれは始まりにすぎない。アイスクリーム・温かい食事・スープ・傘・花、さらには新鮮な卵を売る機械もある。どんな必要でも、それ用の機械があるかもしれない。なぜ日本でそれほど一般的か。いくつかの理由が説明を助ける。日本はとても安全なので、機械は壊されたり盗まれたりせず外に立てる。都市の土地は高価で、自販機はほとんど場所も人手も要らない。人々は利便性と、素早く信頼できるサービスを重んじ、機械はそれを完璧に提供する。機械は、小さく行き届いた細部への愛も映す。多くは非常に清潔に保たれ、確実に働き、ちょうど良い飲み物をちょうど良い温度で出す。訪問者には、日本の自販機はしばしば嬉しい驚きだ——秩序正しく、安全で、静かな便利さに満ちた国の象徴。飲み物を買うというありふれたことの背後に、文化全体がある——清潔さ・信頼、そして欲しいものをいつでも正確に手に入れる単純な喜びを重んじる文化が。",
        quiz: [
          { q: "日本の自販機が売るものに含まれるものは？", options: ["飲み物・アイス・温かい食事・傘・花など", "車だけ", "家だけ"], answer: 0 },
          { q: "日本で自販機が一般的な理由は？", options: ["安全で、場所や人手が要らず、利便性が重んじられるから", "土地が無料だから", "人が少ないから"], answer: 0 },
          { q: "自販機が映す価値は？", options: ["清潔さ・信頼・小さな細部への配慮", "無秩序", "不便さ"], answer: 0 }
        ]
      },
      {
        id: "d0825-5",
        title: "The Hidden Rules of Evolution",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "Evolution — the slow change of living things over millions of years — can seem completely random, driven by chance mutations and luck. But a huge new study of thousands of animal genomes suggests that part of evolution may follow hidden rules. Scientists found that chromosomes, the structures that carry an animal's genes, do not change in just any way. Instead, they seem to follow a limited number of set paths, almost like 'evolutionary highways.'\nWhat does this mean? Inside every cell, genes are packed into chromosomes. Over long ages, these chromosomes can break, join, and rearrange. Scientists once thought this happened almost randomly. But the new study shows that, across many different animals, the same kinds of changes appear again and again, while others almost never do. Some routes are taken often; others seem closed off.\nWhy does this matter? If evolution follows certain paths more than others, it becomes a little more predictable. Understanding these patterns could help scientists trace how different animals are related, and even understand diseases, since some human illnesses are linked to changes in chromosomes.\nThe idea also changes how we think about life's history. Evolution may not be a purely random walk in every direction, but a journey shaped by rules we are only beginning to understand — a mix of chance and hidden order.\nThe study is a reminder that nature often hides deep patterns beneath apparent randomness. By reading the genomes of thousands of species, scientists are uncovering the quiet rules that have guided life's long and remarkable journey.",
        summaryJa: "進化——何百万年もかけた生き物のゆっくりした変化——は、偶然の突然変異と運に導かれ、完全に無作為に見えうる。だが数千の動物ゲノムの巨大な新研究は、進化の一部が隠れた規則に従うかもしれないと示す。科学者は、動物の遺伝子を運ぶ構造である染色体が、どんな形にでも変わるのではないと見つけた。むしろ、限られた数の決まった道——ほとんど「進化のハイウェイ」のような——に従うようだ。これはどういう意味か。あらゆる細胞の中で、遺伝子は染色体に詰め込まれている。長い年月の間、これらの染色体は割れ、つながり、並べ替わりうる。科学者はかつて、これがほぼ無作為に起きると考えた。だが新研究は、多くの異なる動物にわたって、同じ種類の変化が何度も現れ、他はほとんど現れないことを示す。よく通る道もあれば、閉ざされて見える道もある。なぜ重要か。進化が他より特定の道を通るなら、少し予測しやすくなる。こうした模様の理解は、異なる動物がどう関係するかを辿る助けになり、さらに病気の理解にも役立ちうる——人の病の一部は染色体の変化に結びつくからだ。この発想は、生命の歴史の考え方も変える。進化はあらゆる方向への純粋に無作為な歩みでなく、私たちがようやく理解し始めた規則に形づくられた旅——偶然と隠れた秩序の混合——かもしれない。この研究は、自然がしばしば見かけの無作為さの下に深い模様を隠すことを思い出させる。数千種のゲノムを読むことで、科学者は、生命の長く見事な旅を導いてきた静かな規則を明らかにしている。",
        quiz: [
          { q: "新研究が示した染色体についての発見は？", options: ["どんな形にも変わるのでなく限られた道に従うようだ", "全く変化しない", "色を変える"], answer: 0 },
          { q: "この模様の理解が役立ちうることは？", options: ["動物の関係を辿ることや病気の理解", "進化を止めること", "無作為さを増やすこと"], answer: 0 },
          { q: "本文が伝えることは？", options: ["自然は見かけの無作為さの下に深い模様を隠す", "進化に規則はない", "染色体は無意味だ"], answer: 0 }
        ]
      }
    ]
  },
    {
    date: "2026-08-24",
    passages: [
      {
        id: "d0824-1",
        title: "When Costs Fall, Do Prices?",
        level: "★★☆",
        genre: "ビジネス",
        text: "When the price of an ingredient goes down, do the products made from it become cheaper too? This is a common question in business, and a recent example helps answer it. In Japan, a major convenience store chain announced that it would lower the price of its popular rice balls, or onigiri, as the cost of rice began to fall. The savings on the ingredient were being passed on to customers.\nWhy don't prices always fall right away? When the cost of a material rises, companies often raise their prices quickly to protect their profits. But when costs fall, prices may drop more slowly. A company might wait to be sure the lower cost will last, or it might keep the extra money as profit for a while. Competition, however, usually pushes prices down: if one shop lowers its prices, others may follow to keep their customers.\nWhy does this matter to shoppers? Food is something people buy every day, so even a small change in price adds up over time. When the cost of a key ingredient like rice falls, lower prices at the shop can ease the pressure on family budgets.\nThe example shows how connected the economy is. The price a farmer receives, the cost at a factory, and the price you pay at the counter are all links in one chain. When one link changes, the others often move too — sometimes quickly, sometimes slowly, but rarely on their own. Understanding this chain helps make sense of the prices we see every day.",
        summaryJa: "ある材料の値段が下がると、それで作られる製品も安くなるのか。これはビジネスでよくある問いで、最近の例が答えの助けになる。日本で、ある大手コンビニチェーンが、米の値段が下がり始めたのを受けて、人気のおにぎりの価格を下げると発表した。材料での節約が客に還元されていたのだ。なぜ価格は常にすぐ下がらないのか。材料の費用が上がると、企業はしばしば利益を守るため素早く値上げする。だが費用が下がるとき、価格の低下はより遅いことがある。企業は、安い費用が続くと確かめるまで待つかもしれないし、しばらく余分なお金を利益として保つかもしれない。だが競争は普通、価格を押し下げる——ある店が値下げすれば、他も客を保つため追随しうる。なぜ買い物客に重要か。食べ物は毎日買うものなので、小さな価格の変化でも時とともに積み重なる。米のような主要な材料の費用が下がれば、店での安い価格が家計の圧力を和らげうる。この例は、経済がいかにつながっているかを示す。農家が受け取る価格、工場での費用、レジであなたが払う価格——すべてが一つの鎖の輪だ。一つの輪が変わると、他もしばしば動く——時に速く、時に遅く、だがめったに単独ではない。この鎖を理解することは、毎日目にする価格を腑に落とす助けになる。",
        quiz: [
          { q: "コンビニがおにぎりを値下げした理由は？", options: ["米の値段が下がり材料費の節約を還元したから", "客を減らすため", "米が高くなったから"], answer: 0 },
          { q: "費用が下がっても価格がすぐ下がらないことがある理由は？", options: ["安さが続くか確かめる、利益として保つなどのため", "法律で禁止だから", "客がいないから"], answer: 0 },
          { q: "本文が示すことは？", options: ["農家・工場・店の価格は一つの鎖でつながっている", "価格は互いに無関係", "食べ物は買わない方がよい"], answer: 0 }
        ]
      },
      {
        id: "d0824-2",
        title: "A Chip That Makes a Rainbow of Light",
        level: "★★★",
        genre: "テクノロジー",
        text: "Every time you use your phone to call, stream, or browse, you rely on signals traveling through the air. As more people use more data, networks must carry ever more information. To prepare for the next generation of mobile networks, sometimes called 6G, scientists have built a tiny chip that produces a stable 'rainbow' of light — and this rainbow could help carry far more data than before.\nWhat does a 'rainbow' of light mean? Ordinary light of a single color is like one lane on a road. The new chip creates many precise colors of light at once, evenly spaced like the colors of a rainbow. Each of these can carry its own stream of information. Instead of one lane, you suddenly have many, all working together — greatly increasing how much data can flow.\nWhy build this on a tiny chip? Making many colors of light usually requires large, expensive equipment. Putting it all on a small chip makes the technology cheaper, more reliable, and easier to include in real devices. That is a key step toward using it widely.\nWhy does this matter? Future networks will need to handle huge amounts of data for things like self-driving cars, smart factories, and virtual worlds. Faster, higher-capacity connections will make these possible.\nThe work is still developing, and 6G is years away. But the rainbow chip is a good example of how progress often comes from clever new ways of using light. By splitting light into many precise colors, scientists are opening more lanes on the roads that carry our digital world.",
        summaryJa: "電話・動画・ブラウジングに携帯を使うたび、あなたは空を伝う信号に頼っている。より多くの人がより多くのデータを使うにつれ、ネットワークはますます多くの情報を運ばねばならない。「6G」と呼ばれることもある次世代の携帯ネットワークに備え、科学者は安定した光の「虹」を生む小さなチップを作った——この虹が、以前よりはるかに多くのデータを運ぶ助けになりうる。光の「虹」とは何を意味するのか。単一の色の普通の光は、道路の一車線のようなものだ。新しいチップは、虹の色のように等間隔に並んだ、多くの精密な色の光を一度に作る。そのそれぞれが独自の情報の流れを運べる。一車線でなく、突然多くの車線ができ、すべてが協働する——流れるデータ量を大きく増やす。なぜこれを小さなチップに作るのか。多くの色の光を作るには普通、大きく高価な機器が要る。すべてを小さなチップに載せることで、技術は安く、信頼でき、実際の機器に組み込みやすくなる。それが広く使うための鍵の一歩だ。なぜ重要か。未来のネットワークは、自動運転車・スマート工場・仮想世界などのために膨大なデータを扱う必要がある。より速く大容量の接続がそれを可能にする。研究はまだ発展途上で、6Gは何年も先だ。だが虹のチップは、進歩がしばしば光を使う巧妙な新しい方法から来ることの好例だ。光を多くの精密な色に分けることで、科学者は、私たちのデジタル世界を運ぶ道路により多くの車線を開いている。",
        quiz: [
          { q: "この新しいチップが作るものは？", options: ["等間隔に並んだ多くの色の光（虹）", "一色の光だけ", "音"], answer: 0 },
          { q: "多くの色の光がデータ量を増やす理由は？", options: ["各色が独自の情報の流れを運べるから（車線が増える）", "光が明るいから", "チップが大きいから"], answer: 0 },
          { q: "すべてを小さなチップに載せる利点は？", options: ["安く信頼でき機器に組み込みやすい", "高価になる", "壊れやすくなる"], answer: 0 }
        ]
      },
      {
        id: "d0824-3",
        title: "The Languages We Are Losing",
        level: "★★★",
        genre: "世界情勢",
        text: "There are around seven thousand languages spoken in the world today. But experts warn that many of them are disappearing. Some are spoken by only a few elderly people, and when those speakers pass away, their language may vanish with them. Every few weeks, somewhere in the world, a language falls silent forever.\nWhy do languages disappear? Often, small communities are drawn toward larger, more widely spoken languages, which offer better chances for work, school, and travel. Parents may raise their children in a major language instead of their own, hoping to give them an easier future. Over a few generations, the older language can be lost.\nWhy does it matter? A language is far more than a set of words. It carries a people's history, stories, humor, and unique way of seeing the world. Some languages hold detailed knowledge about local plants, animals, and nature, built up over centuries. When a language dies, much of that knowledge and culture can be lost with it.\nAround the world, people are working to protect endangered languages. Communities record their elders, create dictionaries, teach classes for children, and use apps and the internet to share their language more widely.\nThe goal is not to stop people from learning major languages, which are useful. It is to keep the smaller ones alive alongside them, so their treasures are not lost. Each language is a way of thinking, a window into a culture — and protecting them helps keep our human family as rich and varied as it has always been.",
        summaryJa: "今日、世界にはおよそ7000の言語が話されている。だが専門家は、その多くが消えつつあると警告する。ごく少数の高齢者だけが話す言語もあり、その話者が亡くなると、言語も共に消えうる。数週間ごとに、世界のどこかで、一つの言語が永遠に沈黙する。なぜ言語は消えるのか。しばしば、小さな共同体が、仕事・学校・旅行のより良い機会を与える、より大きく広く話される言語に引き寄せられる。親は、より楽な未来を子に与えたいと願い、自分の言語でなく主要言語で子を育てるかもしれない。数世代のうちに、古い言語は失われうる。なぜ重要か。言語は単なる言葉の集合をはるかに超える。ある民族の歴史・物語・ユーモア・独自の世界の見方を運ぶ。地域の植物・動物・自然についての、何世紀もかけて築かれた詳細な知識を持つ言語もある。言語が死ぬと、その知識や文化の多くが共に失われうる。世界中で、人々は危機に瀕した言語を守ろうとしている。共同体は高齢者を録音し、辞書を作り、子どものための授業を開き、アプリやインターネットを使って言語をより広く分かち合う。目標は、有用な主要言語を人々が学ぶのを止めることではない。それらと並んで小さな言語も生かし続け、その宝が失われないようにすることだ。各言語は一つの考え方、文化への窓であり——それらを守ることは、私たちの人類という家族を、常にそうであったように豊かで多様に保つ助けになる。",
        quiz: [
          { q: "多くの言語が消えつつある理由は？", options: ["小さな共同体がより大きな言語に引き寄せられるから", "言語が多すぎるから", "誰も話さないから"], answer: 0 },
          { q: "言語が単なる言葉以上である理由は？", options: ["歴史・物語・世界の見方や自然の知識を運ぶから", "辞書であるからだけ", "無意味だから"], answer: 0 },
          { q: "言語を守る目標は？", options: ["主要言語と並んで小さな言語も生かし続けること", "主要言語を禁止すること", "全言語を一つにすること"], answer: 0 }
        ]
      },
      {
        id: "d0824-4",
        title: "Rice: The Heart of the Japanese Table",
        level: "★★☆",
        genre: "日本",
        text: "In Japan, one food sits at the center of the table more than any other: rice. For thousands of years, rice has been a staple of Japanese meals, eaten at breakfast, lunch, and dinner. It is so important that the Japanese word for cooked rice, gohan, can also simply mean 'a meal.'\nWhy is rice so central? Japan's climate, with its warm, wet summers, is well suited to growing rice, and farmers have cultivated it for many centuries. Rice grows in flooded fields called paddies, which shape the countryside in beautiful, terraced patterns. Growing rice once required whole villages to work together, and this shared effort became part of the culture.\nRice appears in countless forms. Plain white rice accompanies almost any dish. It is pressed into rice balls called onigiri, a popular quick meal, rolled into sushi, or turned into rice cakes and even sweets. Rice is also used to make sake, a traditional drink.\nRice carries meaning beyond food. It appears in festivals, ceremonies, and sayings, and has long been a symbol of life and hard work. Even today, when many new foods are available, rice remains deeply loved.\nOf course, eating habits are slowly changing, and people now enjoy bread, noodles, and dishes from around the world. Yet rice keeps its special place. To understand Japanese food and culture, one must understand rice — a simple grain that has fed, shaped, and united the country for countless generations.",
        summaryJa: "日本で、他のどの食べ物より食卓の中心に座る一つの食べ物がある——米だ。何千年もの間、米は日本の食事の主食で、朝・昼・晩に食べられてきた。あまりに重要なので、炊いた米を指す日本語「ご飯」は、単に「食事」も意味しうる。なぜ米はそれほど中心的なのか。暖かく湿った夏を持つ日本の気候は米作りに適し、農家は何世紀も栽培してきた。米は「田んぼ」と呼ばれる水を張った田で育ち、美しい棚田の模様で田舎を形づくる。米作りはかつて村全体の協働を要し、この分かち合う努力が文化の一部になった。米は無数の形で現れる。白いご飯はほぼどんな料理にも添えられる。おにぎりという握り飯に、寿司に、餅や菓子にさえなる。米は伝統的な飲み物・酒を作るのにも使われる。米は食べ物を超えた意味も持つ。祭り・儀式・ことわざに現れ、長く生命と勤勉の象徴だった。今日、多くの新しい食べ物があっても、米は深く愛され続ける。もちろん食習慣はゆっくり変わり、人々はパン・麺・世界中の料理も楽しむ。それでも米は特別な地位を保つ。日本の食と文化を理解するには、米を理解せねばならない——数え切れない世代にわたって国を養い、形づくり、結んできた、単純な穀物を。",
        quiz: [
          { q: "日本語「ご飯」が意味しうるものは？", options: ["炊いた米、そして単に「食事」", "肉だけ", "飲み物だけ"], answer: 0 },
          { q: "米が日本で中心的な理由は？", options: ["暖かく湿った気候が米作りに適し長く栽培されてきたから", "とても寒いから", "育てるのが不可能だから"], answer: 0 },
          { q: "米が食べ物を超えて持つ意味は？", options: ["生命と勤勉の象徴で祭りや儀式に現れる", "何の意味もない", "外国だけのもの"], answer: 0 }
        ]
      },
      {
        id: "d0824-5",
        title: "How Nature Heals a Field",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "What happens to a farm field when people stop using it? You might expect it to become bare and lifeless. But scientists watching one abandoned field saw something wonderful: within little more than ten years, it transformed into a rich wildflower meadow, full of life. Plant diversity doubled, and thousands of orchids appeared, all on their own.\nHow did this happen? When people stop plowing, planting, and spraying chemicals, nature slowly takes over. Seeds arrive on the wind, carried by birds, or wake up after resting in the soil for years. Different plants move in one after another, and as they do, insects, birds, and other creatures follow. Step by step, an empty field becomes a living community.\nWhy is this exciting? It shows that nature can recover, sometimes faster than we expect, if given the chance. Wildflower meadows are valuable: they support bees and other insects that pollinate crops, and they add beauty and variety to the land. The return of orchids, which are often delicate and rare, is an especially good sign of a healthy, natural place.\nThis idea is part of a growing movement sometimes called 'rewilding' — letting parts of the land return to nature. It does not mean abandoning all farms, but setting aside some space for wild life to flourish.\nThe healed field is a hopeful reminder. While people worry about damage to the natural world, this story shows the other side: given time and space, nature has a remarkable power to repair itself — and to fill an empty field with flowers.",
        summaryJa: "人が使うのをやめた農地はどうなるのか。裸で生命のない場所になると思うかもしれない。だが、ある放棄された農地を見守る科学者は、素晴らしいものを見た——わずか10年余りで、それは生命に満ちた豊かな野花の草地に変わったのだ。植物の多様性は倍増し、何千ものランが、すべて自然に現れた。どうしてこうなったのか。人が耕し、植え、化学物質をまくのをやめると、自然がゆっくり引き継ぐ。種は風に乗り、鳥に運ばれ、あるいは何年も土の中で休んだ後に目覚めて到来する。異なる植物が次々と移り住み、そうするにつれ、昆虫・鳥・他の生き物が続く。一歩ずつ、空の農地が生きた共同体になる。なぜ胸躍るのか。機会が与えられれば、自然は時に予想より速く回復できることを示すからだ。野花の草地は貴重だ——作物を受粉させるミツバチや他の昆虫を支え、土地に美と多様性を加える。しばしば繊細で稀なランの帰還は、健康で自然な場所の特に良い兆しだ。この発想は、「再野生化（リワイルディング）」と呼ばれることもある高まる運動の一部だ——土地の一部を自然に返すこと。すべての農場を捨てる意味ではなく、野生の生命が栄えるための空間をいくらか取っておくことだ。癒された農地は希望ある気づきだ。人々が自然界への損傷を心配する一方、この物語は別の側面を示す——時間と空間が与えられれば、自然は自らを修復する驚くべき力を持つ——そして空の農地を花で満たす力を。",
        quiz: [
          { q: "放棄された農地に起きたことは？", options: ["10年余りで豊かな野花の草地に変わった", "裸で生命のないままだった", "家が建った"], answer: 0 },
          { q: "自然が引き継ぐ仕組みは？", options: ["種が風や鳥で到来し植物・昆虫・鳥が次々移り住む", "何も起きない", "人が植える"], answer: 0 },
          { q: "この物語が示す希望は？", options: ["時間と空間があれば自然は自らを修復できる", "自然は回復しない", "農地は無価値だ"], answer: 0 }
        ]
      }
    ]
  },
    {
    date: "2026-08-23",
    passages: [
      {
        id: "d0823-1",
        title: "Why Feedback Matters at Work",
        level: "★★★",
        genre: "ビジネス",
        text: "In any workplace, one simple thing can make a huge difference to how well people do their jobs: feedback. Feedback is information about how well something is going — praise for what works, and honest advice about what could be better. Companies that use feedback well tend to improve faster, while those that avoid it often repeat the same mistakes.\nWhy is feedback so powerful? People cannot always see their own errors, and they may not know which parts of their work are most valued. Clear, kind feedback helps them understand what to keep doing and what to change. It also shows that others are paying attention and care about the result.\nGood feedback has a few key features. It is specific, pointing to real examples rather than vague complaints. It is timely, given soon after the work, while it still matters. And it is balanced, mixing encouragement with suggestions, so people feel motivated rather than discouraged.\nFeedback should flow in every direction. Managers give it to workers, but wise leaders also ask for feedback about themselves, and teammates share it with one another. A company where people can speak honestly, without fear, tends to be healthier and more creative.\nThere are challenges. Giving criticism kindly is a skill, and receiving it without taking offense is another. Both take practice and trust.\nStill, the lesson is clear. Businesses grow by learning, and feedback is how learning happens day to day. A company that listens — really listens — to what is working and what is not gives itself the best chance to improve.",
        summaryJa: "どんな職場でも、人々の仕事の出来を大きく左右する単純なものがある——フィードバックだ。フィードバックとは、物事がどれだけうまくいっているかについての情報——うまくいっている点への称賛と、より良くできる点への正直な助言だ。フィードバックをうまく使う企業は速く改善する傾向があり、避ける企業はしばしば同じ過ちを繰り返す。なぜフィードバックはそれほど強力か。人は自分の誤りを常に見られるわけではなく、自分の仕事のどの部分が最も評価されているかを知らないこともある。明確で優しいフィードバックは、何を続け何を変えるべきかを理解する助けになる。他者が注意を払い、結果を気にかけていることも示す。良いフィードバックにはいくつかの鍵がある。具体的で、漠然とした不満でなく実例を指す。適時で、仕事の直後、まだ意味のあるうちに与えられる。そしてバランスが取れ、励ましと提案を混ぜるので、人はやる気をなくすより高まる。フィードバックはあらゆる方向に流れるべきだ。上司が部下に与えるが、賢い指導者は自分についてのフィードバックも求め、同僚同士も分かち合う。恐れずに正直に話せる企業は、より健全で創造的になりやすい。課題もある。批判を優しく伝えるのは技能で、気を悪くせず受け取るのも別の技能だ。どちらも練習と信頼を要する。それでも教訓は明快だ。ビジネスは学ぶことで成長し、フィードバックは日々学びが起きる方法だ。何がうまくいき何がいかないかに——本当に——耳を傾ける企業は、改善の最良の機会を自らに与えるのだ。",
        quiz: [
          { q: "フィードバックとは？", options: ["うまくいく点への称賛と改善点への正直な助言", "罰だけ", "給与の額"], answer: 0 },
          { q: "良いフィードバックの特徴は？", options: ["具体的・適時・バランスが取れている", "漠然・遅い・批判だけ", "秘密である"], answer: 0 },
          { q: "本文の教訓は？", options: ["ビジネスは学びで成長しフィードバックが日々の学びを生む", "フィードバックは無用", "批判は常に避けるべき"], answer: 0 }
        ]
      },
      {
        id: "d0823-2",
        title: "AI That Listens to Meetings",
        level: "★★☆",
        genre: "テクノロジー",
        text: "Meetings are a big part of work life, but they can be hard to manage. People forget what was decided, important points get lost, and it is difficult to see patterns across many meetings over time. Now, some companies are using artificial intelligence to help. Recently, one Japanese online platform began using AI to review its management meetings and analyze activity across the whole company.\nHow does meeting AI work? First, it can turn spoken words into written text, creating a record of what was said. Then it can summarize long discussions into short notes, list the decisions and tasks, and even spot themes that come up again and again. Instead of one person taking notes, the AI captures everything and organizes it.\nWhy is this useful? A clear record helps everyone remember what was agreed and who is responsible for each task. By analyzing many meetings, a company can also notice bigger patterns — which topics take the most time, or which problems keep returning.\nThere are important cautions. Recording meetings raises questions about privacy, so people should know when AI is listening. The AI can also make mistakes, so its summaries need checking. And a machine cannot replace human judgment about what truly matters.\nUsed carefully, though, this technology can save time and help teams work better. It is part of a wider trend: using AI not to replace people, but to handle the slow, repetitive parts of work — freeing humans to focus on discussion, decisions, and ideas that machines cannot provide.",
        summaryJa: "会議は仕事生活の大きな部分だが、扱いが難しいことがある。人は決まったことを忘れ、重要な点が失われ、多くの会議にまたがる傾向を時系列で見るのは難しい。今、一部の企業がAIを使って助けを得ている。最近、ある日本のオンラインプラットフォームが、経営会議を見直し、会社全体の活動を分析するのにAIを使い始めた。会議AIはどう働くのか。まず、話し言葉を文字に変え、何が話されたかの記録を作れる。次に、長い議論を短いメモに要約し、決定事項と作業を並べ、繰り返し出てくるテーマさえ見つけられる。一人がメモを取る代わりに、AIがすべてを捉え整理する。なぜ有用か。明確な記録は、何が合意され誰が各作業に責任を持つかを皆が覚える助けになる。多くの会議を分析することで、企業はより大きな傾向——どの話題が最も時間を取るか、どの問題が繰り返し戻るか——にも気づける。重要な注意もある。会議の録音はプライバシーの問いを生むので、いつAIが聞いているかを人は知るべきだ。AIも誤りうるので、その要約は確認が要る。そして機械は、本当に重要なことについての人間の判断に取って代われない。だが慎重に使えば、この技術は時間を節約しチームがよりよく働く助けになる。より広い潮流の一部だ——AIを人に取って代えるためでなく、仕事の遅く反復的な部分を担わせるために使い、人間が議論・決定・機械には出せない発想に集中できるようにする。",
        quiz: [
          { q: "会議AIができることは？", options: ["話し言葉を文字にし要約や決定事項の整理をする", "会議を禁止する", "人を解雇する"], answer: 0 },
          { q: "多くの会議を分析する利点は？", options: ["どの話題が時間を取るかなど大きな傾向に気づける", "何も分からない", "会議が増えるだけ"], answer: 0 },
          { q: "本文が挙げる注意は？", options: ["録音のプライバシーやAIの誤りへの確認が必要", "AIは完璧である", "確認は不要"], answer: 0 }
        ]
      },
      {
        id: "d0823-3",
        title: "The World Moves to the City",
        level: "★★★",
        genre: "世界情勢",
        text: "For most of human history, the majority of people lived in the countryside, close to farms and fields. That has changed dramatically. Today, more than half of all people on Earth live in cities, and that share keeps rising. This great movement of people into cities — called urbanization — is reshaping how the whole world lives.\nWhy are people moving to cities? Cities offer jobs, schools, hospitals, and chances that rural areas often cannot match. Young people, in particular, move to cities hoping for better work and a wider life. As economies grow, more and more of their activity happens in and around large cities.\nCity life brings real benefits. Living close together can be efficient: services, transport, and businesses can reach many people at once. Cities are also centers of ideas, art, and innovation, where people from different backgrounds meet and create new things.\nBut rapid growth brings challenges. Housing can become expensive and crowded. Traffic, pollution, and pressure on water and energy can rise. If cities grow faster than the services people need, some residents may be left behind.\nThat is why planning matters so much. Well-designed cities provide good transport, green spaces, clean water, and homes people can afford. Poorly planned ones can trap people in difficult conditions.\nThe move to cities is one of the defining trends of our age. How countries manage it — building cities that are livable, fair, and sustainable — will shape the daily lives of billions of people, and the health of the planet, for generations to come.",
        summaryJa: "人類の歴史の大半で、大多数の人は田舎に、農場や畑の近くに住んでいた。それが劇的に変わった。今日、地球の全人口の半数以上が都市に住み、その割合は上がり続けている。この都市への人々の大移動——都市化——は、世界全体の暮らし方を作り替えている。なぜ人々は都市へ移るのか。都市は、田舎ではしばしば及ばない仕事・学校・病院・機会を与える。特に若者は、より良い仕事と広い人生を求めて都市へ移る。経済が成長するにつれ、その活動のますます多くが大都市とその周辺で起きる。都市生活には本当の利点がある。近くに住むことは効率的でありうる——サービス・交通・事業が一度に多くの人に届く。都市はまた、異なる背景の人々が出会い新しいものを生む、発想・芸術・革新の中心でもある。だが急成長は課題をもたらす。住居は高価で過密になりうる。交通・汚染、水やエネルギーへの圧力が高まりうる。都市が人々の必要とするサービスより速く育てば、一部の住民は取り残されうる。だから計画が非常に重要だ。よく設計された都市は、良い交通・緑地・清潔な水・手頃な住居を提供する。計画の悪い都市は、人々を困難な状況に閉じ込めうる。都市への移動は現代を特徴づける潮流の一つだ。各国がそれをどう管理するか——住みやすく、公正で、持続可能な都市を築くか——が、何十億もの人々の日々の暮らしと、地球の健康を、何世代にもわたって形づくる。",
        quiz: [
          { q: "「都市化」とは？", options: ["人々が都市に移り住む大きな流れ", "田舎に戻ること", "都市を壊すこと"], answer: 0 },
          { q: "人々が都市へ移る理由は？", options: ["仕事・学校・病院・機会があるから", "田舎が好きだから", "都市が静かだから"], answer: 0 },
          { q: "急成長する都市の課題は？", options: ["住居の高騰・過密・交通や汚染の増加", "何も問題がない", "人が減ること"], answer: 0 }
        ]
      },
      {
        id: "d0823-4",
        title: "When a Pond Turns Green",
        level: "★★☆",
        genre: "日本",
        text: "Visitors to a famous park in Tokyo were surprised to find its pond had changed color, turning a bright, cloudy green — almost the shade of matcha tea. The water was not painted or polluted with dye. The strange color came from something natural and alive: a sudden bloom of tiny organisms called phytoplankton.\nWhat is phytoplankton? These are microscopic living things that float in water and, like plants, use sunlight to grow. They are a normal and important part of ponds, lakes, and oceans, forming the base of the food chain for many creatures. Usually there are too few to notice. But under the right conditions, their numbers can explode.\nWhy do these blooms happen? Warm weather, plenty of sunlight, and extra nutrients in the water — sometimes from fallen leaves, bird droppings, or runoff — can cause phytoplankton to multiply very quickly. When billions gather near the surface, they can turn the whole pond a vivid green.\nAre blooms harmful? Often they are harmless and fade on their own as conditions change. But very large blooms can use up oxygen in the water or block sunlight, which may harm fish and other life. Scientists watch them carefully.\nThe green pond is a small, visible reminder of the hidden life in water all around us. Usually invisible, phytoplankton quietly support entire ecosystems and even help produce the oxygen we breathe. A pond turning the color of matcha is nature showing us, for a moment, just how alive still water can be.",
        summaryJa: "東京の有名な公園の訪問者は、その池が色を変え、明るく濁った緑——ほとんど抹茶の色合い——になっているのに驚いた。水は塗られたのでも染料で汚されたのでもない。その奇妙な色は、自然で生きたもの——植物プランクトンと呼ばれる小さな生き物の突然の大発生——から来た。植物プランクトンとは何か。水中に浮かび、植物のように日光を使って育つ微小な生き物だ。池・湖・海の正常で重要な一部であり、多くの生き物の食物連鎖の土台をなす。普通は少なすぎて気づかない。だが適した条件下で、その数は爆発しうる。なぜこうした大発生が起きるのか。暖かい天気、豊富な日光、水中の余分な栄養——時に落ち葉・鳥のふん・流入水から——が、植物プランクトンを非常に速く増やしうる。数十億が水面近くに集まると、池全体を鮮やかな緑に変えうる。大発生は有害か。多くの場合は無害で、条件が変わると自然に消える。だが非常に大きな発生は、水中の酸素を使い果たしたり日光を遮ったりして、魚や他の生命を害しうる。科学者は注意深く見守る。緑の池は、私たちの周りの水中の隠れた生命の、小さく目に見える気づきだ。普段は見えない植物プランクトンが、静かに生態系全体を支え、私たちが呼吸する酸素の生成さえ助ける。抹茶の色になる池は、静かな水がどれほど生きているかを、一瞬、自然が私たちに見せているのだ。",
        quiz: [
          { q: "池が緑になった原因は？", options: ["植物プランクトンの突然の大発生", "絵の具", "泥だけ"], answer: 0 },
          { q: "大発生が起きる条件は？", options: ["暖かさ・豊富な日光・余分な栄養", "寒さと暗さ", "水が少ないこと"], answer: 0 },
          { q: "植物プランクトンが果たす役割は？", options: ["食物連鎖を支え酸素の生成も助ける", "水を汚すだけ", "何もしない"], answer: 0 }
        ]
      },
      {
        id: "d0823-5",
        title: "The Stars That Skim Black Holes",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "A black hole is one of the most powerful and frightening objects in the universe. Its gravity is so strong that not even light can escape once it gets too close. So it is astonishing that scientists have found stars that repeatedly fly past giant black holes — and survive, again and again.\nHow is this possible? At the center of many galaxies sits a supermassive black hole, millions of times heavier than our Sun. Some stars travel on long paths that bring them very close to such a black hole, then swing away again, like a comet looping around the Sun. Each time a star skims past, the black hole's gravity pulls fiercely on it, tearing away some of its outer material. This releases a bright burst of light that astronomers can detect.\nWhy does the star survive? If a star came too close, it would be torn apart completely. But these stars follow paths that bring them near enough to lose a little material, yet not so near that they are destroyed. So they return, over and over, each pass producing a new flash of light.\nWhy study this? Watching these repeating bursts helps scientists learn about black holes, which are otherwise invisible. The light reveals a black hole's size, its gravity, and how matter behaves in such extreme conditions.\nThese daring stars remind us how dramatic the universe can be. Far away, in the hearts of galaxies, stars dance again and again at the edge of destruction — and, in their bright, repeated flashes, help us understand the darkest objects in space.",
        summaryJa: "ブラックホールは宇宙で最も強力で恐ろしい天体の一つだ。その重力はあまりに強く、近づきすぎると光さえ逃げられない。だから科学者が、巨大なブラックホールのそばを繰り返し飛び過ぎ、何度も生き延びる星を見つけたのは驚きだ。どうして可能なのか。多くの銀河の中心には、太陽の数百万倍も重い超大質量ブラックホールがある。一部の星は、そんなブラックホールに非常に近づき、また離れていく長い軌道を進む——太陽を回る彗星のように。星がそばをかすめるたび、ブラックホールの重力が激しく引き、外側の物質の一部を剥ぎ取る。これが、天文学者が検出できる明るい光の閃きを放つ。なぜ星は生き延びるのか。近づきすぎれば完全に引き裂かれる。だがこれらの星は、少し物質を失うほど近いが、破壊されるほどではない軌道を進む。だから何度も戻り、各通過が新しい光の閃きを生む。なぜ研究するのか。この繰り返す閃きを見ることは、さもなければ見えないブラックホールについて学ぶ助けになる。光はブラックホールの大きさ・重力、そしてそんな極限条件で物質がどう振る舞うかを明かす。これらの大胆な星は、宇宙がいかに劇的でありうるかを思い出させる。遠く、銀河の中心で、星は破壊の縁で何度も踊り——その明るく繰り返す閃きの中で、宇宙で最も暗い天体を理解する助けをくれる。",
        quiz: [
          { q: "科学者が見つけた驚きの星とは？", options: ["巨大ブラックホールのそばを繰り返し飛び生き延びる星", "光でできた星", "全く動かない星"], answer: 0 },
          { q: "星がそばをかすめると何が起きるか？", options: ["重力が外側の物質を剥ぎ取り明るい閃きを放つ", "星が即座に消える", "何も起きない"], answer: 0 },
          { q: "この現象を研究する理由は？", options: ["見えないブラックホールの大きさや重力を学べるから", "星を壊すため", "光を消すため"], answer: 0 }
        ]
      }
    ]
  },
    {
    date: "2026-08-22",
    passages: [
      {
        id: "d0822-1",
        title: "The Value of a Good Reputation",
        level: "★★★",
        genre: "ビジネス",
        text: "When you choose which shop to visit or which product to buy, you are often guided by something you cannot see or touch: reputation. A company's reputation — what people believe about its honesty, quality, and reliability — is one of its most valuable assets, even though it never appears directly on a balance sheet.\nWhy is reputation so important? Customers cannot test everything before they buy. When they trust a company, they feel safe choosing it, recommending it to friends, and returning again. A strong reputation can let a business charge fair prices, attract good workers, and survive hard times, because people give it the benefit of the doubt.\nReputation is built slowly, through many small actions: keeping promises, treating customers fairly, making good products, and being honest when something goes wrong. It takes years of steady, careful behavior to earn deep trust.\nYet it can be lost quickly. A single serious mistake — a dangerous product, a broken promise, or an attempt to hide the truth — can damage a reputation built over decades. In the age of the internet, bad news spreads faster than ever, and customers have long memories.\nThat is why wise companies protect their reputation carefully. They know that trust, once lost, is very hard to rebuild.\nThe lesson reaches beyond business. For people and companies alike, a good name is earned through honesty and effort, and guarded with care. In a world full of choices, being known as trustworthy may be the most valuable advantage of all.",
        summaryJa: "どの店に行くか、どの製品を買うかを選ぶとき、私たちはしばしば、見ることも触ることもできないもの——評判——に導かれる。企業の評判——その誠実さ・品質・信頼性について人々が信じること——は、貸借対照表に直接は現れないが、最も価値ある資産の一つだ。なぜ評判はそれほど重要か。客は買う前にすべてを試せない。企業を信頼すれば、それを選び、友人に勧め、また戻ってくることに安心を感じる。強い評判は、事業が公正な価格をつけ、良い人材を惹きつけ、困難な時を生き延びることを可能にする——人々が「善意に解釈」してくれるからだ。評判はゆっくり築かれる。多くの小さな行動を通じて——約束を守り、客を公正に扱い、良い製品を作り、何か問題が起きたとき正直であること。深い信頼を得るには、着実で丁寧な振る舞いを何年も要する。だが素早く失われうる。一つの重大なミス——危険な製品、破られた約束、真実を隠す試み——が、数十年かけて築いた評判を損ないうる。インターネットの時代に、悪い知らせはかつてなく速く広まり、客の記憶は長い。だから賢い企業は評判を慎重に守る。信頼は一度失うと、再建が非常に難しいと知っているのだ。教訓はビジネスを超える。人も企業も同じく、良い名は誠実さと努力で得られ、丁寧に守られる。選択肢に満ちた世界で、信頼できると知られることは、何より価値ある強みかもしれない。",
        quiz: [
          { q: "企業の「評判」とは？", options: ["誠実さ・品質・信頼性について人々が信じること", "建物の大きさ", "従業員の数"], answer: 0 },
          { q: "強い評判が企業にもたらすものは？", options: ["公正な価格・良い人材・困難を生き延びる力", "客の減少", "即座の倒産"], answer: 0 },
          { q: "評判について本文が述べることは？", options: ["築くのは遅く失うのは速い", "一瞬で築ける", "失っても簡単に戻る"], answer: 0 }
        ]
      },
      {
        id: "d0822-2",
        title: "A Small Satellite with a Big Question",
        level: "★★★",
        genre: "テクノロジー",
        text: "When we imagine a satellite, we often picture a huge, expensive machine the size of a bus. But some of the most exciting space science today is being done by tiny satellites, no bigger than a small suitcase. Recently, scientists prepared one such little satellite to help answer a giant question: what happened in the universe's earliest 'dark ages,' before the first stars began to shine?\nHow can something so small do so much? Modern electronics have become powerful and light, so a small satellite can carry sensitive instruments that once needed a much larger craft. Small satellites are also far cheaper to build and launch, which means more scientists — and more countries — can afford to send them into space.\nThe question this satellite hopes to explore is one of the deepest in science. For a long time after the Big Bang, the universe was dark, filled with gas but no stars. Studying faint signals from that period could tell us how the first stars and galaxies formed, and how our universe grew into the one we see today.\nSmall satellites cannot do everything. They have limited power and room for instruments, and they usually focus on one specific task. But by doing that one thing well, and cheaply, they open space science to far more people.\nThe rise of these tiny explorers shows a powerful trend: as technology shrinks, big science no longer requires giant machines. Sometimes a satellite the size of a suitcase can help answer questions as old as the universe itself.",
        summaryJa: "衛星を想像するとき、私たちはしばしばバスほどの大きさの巨大で高価な機械を思い描く。だが今日、最も刺激的な宇宙科学の一部は、小さなスーツケースほどの小型衛星によって行われている。最近、科学者はそんな小さな衛星の一つを、巨大な問い——最初の星が輝き始める前、宇宙の最も初期の「暗黒時代」に何が起きたのか——に答える助けとするため準備した。そんなに小さいものが、どうしてそれほど多くをできるのか。現代の電子機器は強力で軽くなったので、小型衛星は、かつてはるかに大きな機体を要した高感度の機器を積める。小型衛星は製造も打ち上げもはるかに安く、より多くの科学者——そしてより多くの国——が宇宙へ送る余裕を持てる。この衛星が探ろうとする問いは、科学で最も深いものの一つだ。ビッグバンの後の長い間、宇宙は暗く、ガスに満ちていたが星はなかった。その時代のかすかな信号を研究すれば、最初の星や銀河がどう形成され、私たちの宇宙が今日見るものへどう育ったかを教えてくれるかもしれない。小型衛星は何でもできるわけではない。電力と機器の場所は限られ、たいてい一つの特定の仕事に集中する。だがその一つをうまく、安く行うことで、宇宙科学をはるかに多くの人に開く。こうした小さな探検者の台頭は強力な潮流を示す——技術が小さくなるにつれ、大きな科学はもはや巨大な機械を要さない。時に、スーツケースほどの衛星が、宇宙そのものと同じくらい古い問いに答える助けになりうるのだ。",
        quiz: [
          { q: "小型衛星が多くをできる理由は？", options: ["現代の電子機器が強力で軽くなったから", "宇宙が小さいから", "星が明るいから"], answer: 0 },
          { q: "この衛星が探る問いは？", options: ["最初の星が輝く前の宇宙の「暗黒時代」に何が起きたか", "月の色", "地球の重さ"], answer: 0 },
          { q: "小型衛星の利点は？", options: ["製造・打ち上げが安くより多くの人が宇宙へ送れる", "何でもできること", "電力が無限なこと"], answer: 0 }
        ]
      },
      {
        id: "d0822-3",
        title: "Feeding the World Without Wasting It",
        level: "★★★",
        genre: "世界情勢",
        text: "Around the world, huge amounts of food are thrown away every day. Experts estimate that roughly a third of all the food produced on Earth is never eaten. At the same time, many people do not have enough to eat. This strange gap — waste on one side, hunger on the other — is one of the great challenges facing our world.\nWhy is so much food wasted? Food is lost at every step. On farms, crops may rot before they can be sold. During transport and storage, food can spoil, especially without good refrigeration. In shops and homes, people often buy more than they need and throw away what they do not use. Even small habits, multiplied across billions of people, add up to an enormous waste.\nWhy does it matter? Wasted food means wasted water, land, energy, and work — all the resources used to grow and move it. Rotting food also produces gases that warm the planet. Reducing waste could feed more people while using fewer of the Earth's resources.\nThe good news is that this is a problem we can act on. Better storage and transport can save food in poorer countries. Shops can sell 'imperfect' fruit and vegetables instead of throwing them out. At home, planning meals and saving leftovers makes a real difference.\nFeeding the world is not only about growing more food; it is also about wasting less of what we already have. Small changes, made by many people, can help share the planet's plenty more fairly and wisely.",
        summaryJa: "世界中で、毎日膨大な量の食べ物が捨てられている。専門家は、地球で生産される全食料の約3分の1が決して食べられないと見積もる。同時に、多くの人が十分に食べられていない。この奇妙な隔たり——一方に無駄、他方に飢え——は、私たちの世界が直面する大きな課題の一つだ。なぜそれほど多くの食べ物が無駄になるのか。食べ物はあらゆる段階で失われる。農場では、作物が売られる前に腐りうる。輸送と保管の間、特に良い冷蔵がなければ食べ物は傷みうる。店や家庭で、人々はしばしば必要以上に買い、使わない分を捨てる。小さな習慣さえ、何十億もの人にわたって掛け合わされ、莫大な無駄になる。なぜ重要か。無駄になった食べ物は、無駄になった水・土地・エネルギー・労働——それを育て運ぶのに使われたすべての資源——を意味する。腐る食べ物は地球を温めるガスも出す。無駄を減らせば、より少ない地球の資源でより多くの人を養える。良い知らせは、これが私たちが行動できる問題だということだ。より良い保管と輸送は、貧しい国で食べ物を救える。店は「不完全な」果物や野菜を捨てる代わりに売れる。家庭では、食事を計画し残り物を活かすことが本当の違いを生む。世界を養うことは、より多くの食料を育てることだけではない。既にあるものをより少なく無駄にすることでもある。多くの人が行う小さな変化が、地球の豊かさをより公正に賢く分かち合う助けになりうる。",
        quiz: [
          { q: "本文によると、生産された食料のどれくらいが食べられないか？", options: ["約3分の1", "ほぼ全部", "ごくわずか"], answer: 0 },
          { q: "食料が無駄になる理由に含まれるものは？", options: ["農場での腐敗、輸送・保管での傷み、買いすぎ", "食料が少なすぎること", "誰も食べないこと"], answer: 0 },
          { q: "本文が示す良い知らせは？", options: ["保管・輸送の改善や家庭の工夫で行動できる問題である", "もう手遅れである", "無駄は減らせない"], answer: 0 }
        ]
      },
      {
        id: "d0822-4",
        title: "The Sound of Summer: Japan's Cicadas",
        level: "★★☆",
        genre: "日本",
        text: "In Japan, summer has a sound. From the trees in parks and gardens comes a loud, buzzing chorus that fills the hot air from morning to evening. This is the song of the cicada, an insect so closely tied to the season that, for many Japanese people, summer would not feel complete without it.\nWhat are cicadas? They are large insects that spend most of their lives underground as young larvae, feeding quietly on tree roots. After several years — sometimes many — they climb up into the trees, shed their old skin, and become winged adults. Then, for just a few short weeks, the males sing loudly to attract mates before their lives end.\nThis brief, intense life gives the cicada a special meaning in Japanese culture. Its sudden, powerful song, followed by a quick end, has long been seen as a symbol of how short and precious life can be. Poets have written about the cicada for centuries.\nThe sound itself is part of daily life. Different kinds of cicadas make different songs, and people who grew up in Japan can often tell them apart. The cries also mark the passing of summer: as the season fades, the chorus changes and slowly grows quiet.\nTo a visitor, the noise might seem overwhelming at first. But for many, the cry of the cicada is the very voice of a Japanese summer — a reminder, sung from the trees, to notice the season while it lasts, before it too fades into autumn.",
        summaryJa: "日本の夏には音がある。公園や庭の木々から、朝から晩まで暑い空気を満たす、大きく響く合唱が聞こえてくる。これはセミの歌だ。この昆虫は季節と深く結びついていて、多くの日本人にとって、それなしでは夏が完成した気がしない。セミとは何か。大きな昆虫で、人生の大半を幼虫として地中で過ごし、木の根から静かに養分を得る。数年——時に何年も——の後、木に登り、古い皮を脱ぎ、翅のある成虫になる。そしてほんの数週間だけ、オスは命が尽きる前に配偶者を引き寄せようと大きく鳴く。この短く激しい生が、日本文化でセミに特別な意味を与える。その突然で力強い歌と、それに続く素早い終わりは、長く、人生がいかに短く貴重でありうるかの象徴と見なされてきた。詩人は何世紀もセミについて詠んできた。音そのものが日常生活の一部だ。種類の異なるセミは異なる歌を奏で、日本で育った人はしばしば聞き分けられる。その鳴き声は夏の移ろいも告げる——季節が薄れるにつれ、合唱は変わり、ゆっくり静かになる。訪問者には、最初その音は圧倒的に思えるかもしれない。だが多くの人にとって、セミの声はまさに日本の夏の声だ——木々から歌われる、季節が続くうちに気づくようにという気づきであり、それもまた秋へと薄れていく前の。",
        quiz: [
          { q: "セミは幼虫として人生の大半をどこで過ごすか？", options: ["地中", "木の頂上", "水の中"], answer: 0 },
          { q: "セミが日本文化で持つ意味は？", options: ["人生がいかに短く貴重かの象徴", "富の象徴", "戦いの象徴"], answer: 0 },
          { q: "セミの鳴き声が告げるものは？", options: ["夏の移ろい", "冬の始まり", "雨の量"], answer: 0 }
        ]
      },
      {
        id: "d0822-5",
        title: "The Vegetable That Might Fight Disease",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "Broccoli is a common vegetable, found on dinner plates around the world. Most people know it is healthy, but scientists are now studying a more surprising possibility: that a natural compound in broccoli might help treat a rare and serious disease that has no cure.\nHow can a vegetable help fight illness? Plants are full of complex natural chemicals, made as they grow. Some of these compounds have powerful effects on the human body. Broccoli, in particular, contains substances that scientists have studied for years for their possible health benefits. Recently, researchers found that one such compound may help with a specific rare disease, working in a way that ordinary medicines do not.\nWhy does this matter? Many rare diseases have no treatment at all, because they affect so few people that little research is done. Finding help in a common, cheap, and safe vegetable would be wonderful news — a possible treatment that is easy to obtain and gentle on the body.\nCaution is essential, as always in science. A promising result in the laboratory is far from a finished medicine. Eating broccoli is healthy, but it is not the same as a carefully measured, tested treatment. Years of research are needed before doctors could use such a compound safely.\nStill, the discovery is a reminder that answers to hard problems can hide in familiar places. The foods we eat every day are full of chemistry we do not fully understand — and sometimes, buried in something as ordinary as broccoli, there may be the seed of a cure.",
        summaryJa: "ブロッコリーは、世界中の食卓に並ぶありふれた野菜だ。ほとんどの人はそれが健康的だと知っているが、科学者は今、より意外な可能性を研究している——ブロッコリーの天然成分が、治療法のない稀で深刻な病気の治療を助けるかもしれない、というものだ。野菜がどうして病気と闘う助けになりうるのか。植物は、育つ過程で作られる複雑な天然化学物質に満ちている。こうした成分の一部は、人体に強力な効果を持つ。特にブロッコリーは、科学者がその健康効果の可能性を長年研究してきた物質を含む。最近、研究者は、そんな成分の一つが、普通の薬とは異なる働き方で、ある特定の稀な病気に役立つかもしれないと見つけた。なぜ重要か。多くの稀な病気には治療法が全くない——影響を受ける人があまりに少なく、研究がほとんど行われないからだ。ありふれて安く安全な野菜に助けを見つけることは、素晴らしい知らせだ——得やすく体に優しい治療の可能性。いつも通り、科学に慎重さは不可欠だ。実験室での有望な結果は、完成した薬にはほど遠い。ブロッコリーを食べるのは健康的だが、慎重に量られ試験された治療と同じではない。医師がそんな成分を安全に使えるまでには何年もの研究が要る。それでもこの発見は、難しい問題への答えが身近な場所に隠れうることを思い出させる。毎日食べる食べ物は、私たちが完全には理解していない化学に満ちている——そして時に、ブロッコリーほどありふれたものの中に、治療の種があるかもしれないのだ。",
        quiz: [
          { q: "科学者が研究している意外な可能性は？", options: ["ブロッコリーの成分が稀な病気の治療を助けるかも", "ブロッコリーが有害かも", "野菜は化学物質を含まない"], answer: 0 },
          { q: "多くの稀な病気に治療法がない理由は？", options: ["影響を受ける人が少なく研究がほとんど行われないから", "治療が簡単すぎるから", "病気が無害だから"], answer: 0 },
          { q: "本文が促す慎重さは？", options: ["実験室の結果は完成した薬にはほど遠く年月の研究が要る", "ブロッコリーで必ず治る", "医師は不要"], answer: 0 }
        ]
      }
    ]
  },
    {
    date: "2026-08-21",
    passages: [
      {
        id: "d0821-1",
        title: "How Companies Prepare for Hard Times",
        level: "★★★",
        genre: "ビジネス",
        text: "When business is going well, it can be tempting for a company to spend all its money on growth — new products, new offices, new staff. But wise companies also do something less exciting: they save. Keeping a store of cash, ready for difficult times, is one of the most important habits in business.\nWhy hold on to cash? The economy moves in cycles. Good years are often followed by harder ones, when sales fall, costs rise, or unexpected problems appear. A company with savings can survive a bad period, pay its workers, and keep operating until conditions improve. A company with no cushion may be forced to cut jobs or even close.\nCash also gives a company freedom. When a good opportunity appears — a chance to buy a rival, enter a new market, or invest in a promising idea — a firm with money can act quickly, while others must wait. Sometimes the best chances come exactly when money is tight for everyone else.\nOf course, there is a balance to strike. Holding too much cash can be wasteful, since that money is not being used to grow. Leaders must decide how much to keep safe and how much to invest.\nThe lesson applies far beyond big companies. Families and individuals benefit from the same wisdom: save something for emergencies, so a sudden problem does not become a disaster. In business as in life, preparing for hard times during good times is one of the surest ways to stay strong when trouble comes.",
        summaryJa: "商売が順調なとき、企業は資金をすべて成長——新製品・新オフィス・新しい人材——に使いたくなりうる。だが賢い企業は、もっと地味なこともする。貯めるのだ。困難な時に備えて現金の蓄えを持つことは、ビジネスで最も重要な習慣の一つだ。なぜ現金を持つのか。経済は周期で動く。良い年の後にはしばしばより厳しい年が来る——売上が落ち、費用が上がり、予期せぬ問題が現れる。貯えのある企業は、悪い時期を生き延び、従業員に払い、状況が改善するまで事業を続けられる。緩衝のない企業は、雇用を削るか、閉鎖さえ迫られうる。現金は自由も与える。良い機会——競合を買う、新市場に入る、有望な案に投資する好機——が現れたとき、お金のある企業は素早く動けるが、他は待たねばならない。最良の好機は、まさに他の皆にとって資金が乏しいときに来ることもある。もちろん釣り合いを取る必要がある。現金を持ちすぎるのは無駄になりうる——そのお金は成長に使われていないからだ。指導者はどれだけ安全に保ち、どれだけ投資するかを決めねばならない。教訓は大企業をはるかに超えて当てはまる。家族や個人も同じ知恵から恩恵を受ける——非常時のために何か貯えておけば、突然の問題が災難にならない。ビジネスでも人生でも、良い時に困難な時へ備えることは、苦難が来たとき強くいられる最も確実な方法の一つだ。",
        quiz: [
          { q: "企業が現金を蓄える主な理由は？", options: ["厳しい時期を生き延び事業を続けるため", "すぐ使い切るため", "成長を止めるため"], answer: 0 },
          { q: "現金が企業に与える自由とは？", options: ["好機に素早く動けること", "何もできないこと", "雇用を削ること"], answer: 0 },
          { q: "本文が挙げる釣り合いは？", options: ["現金を持ちすぎると成長に使えず無駄になる", "現金は無限に持つべき", "投資は不要"], answer: 0 }
        ]
      },
      {
        id: "d0821-2",
        title: "AI That Designs New Proteins",
        level: "★★★",
        genre: "テクノロジー",
        text: "Proteins are the tiny machines of life. They build our bodies, carry oxygen, fight disease, and do countless other jobs. For billions of years, nature has slowly created proteins through evolution. Now, artificial intelligence is doing something remarkable: designing brand-new proteins that have never existed in nature.\nHow is this possible? Proteins are made from small building blocks arranged in a particular order, which folds into a specific shape. That shape decides what the protein does. Predicting how a chain will fold — and designing one to do a chosen job — is incredibly complex. AI, trained on vast amounts of biological data, can now suggest new protein designs far faster than humans could alone.\nWhy does this matter? Custom-made proteins could become powerful tools. Scientists imagine new medicines that fight diseases in precise ways, materials that break down pollution, or sensors that detect illness early. Instead of only using proteins nature happens to provide, we may soon design them to order.\nThere are important cautions. Creating powerful new molecules carries responsibility; scientists must make sure such tools are safe and used wisely. And a design on a computer must still be built and tested carefully in the real world.\nStill, the progress is stunning. For the first time, humans are not just reading nature's instructions but writing new ones of their own. By learning the language of proteins, and using AI to speak it, scientists are opening a door to medicines and materials that nature never made — a new chapter in our long partnership with the living world.",
        summaryJa: "タンパク質は生命の微小な機械だ。私たちの体を作り、酸素を運び、病気と闘い、無数の仕事をこなす。何十億年もの間、自然は進化を通じてゆっくりタンパク質を作ってきた。今、AIが驚くべきことをしている——自然に存在したことのない、まったく新しいタンパク質を設計するのだ。どうして可能なのか。タンパク質は、特定の順序で並んだ小さな構成要素からでき、それが特定の形に折りたたまれる。その形がタンパク質の働きを決める。鎖がどう折りたたまれるかを予測し、選んだ仕事をするものを設計するのは、途方もなく複雑だ。膨大な生物データで訓練されたAIは今、人間が単独でできるよりはるかに速く新しいタンパク質の設計を提案できる。なぜ重要か。注文製のタンパク質は強力な道具になりうる。科学者は、病気を精密に叩く新薬、汚染を分解する材料、病を早期に検出するセンサーを思い描く。自然がたまたま提供するタンパク質を使うだけでなく、まもなく注文通りに設計できるかもしれない。重要な注意もある。強力な新分子を作ることには責任が伴う。科学者はそうした道具が安全で賢く使われるようにせねばならない。そしてコンピューター上の設計も、現実世界で慎重に作り試験されねばならない。それでも進歩は目を見張る。初めて、人類は自然の指示を読むだけでなく、自らの新しい指示を書いている。タンパク質の言語を学び、AIを使ってそれを話すことで、科学者は自然が決して作らなかった薬や材料への扉を開いている——生きた世界との長い協働の新しい章だ。",
        quiz: [
          { q: "AIがしている「驚くべきこと」とは？", options: ["自然に存在しない新しいタンパク質を設計する", "タンパク質を食べる", "進化を止める"], answer: 0 },
          { q: "タンパク質の働きを決めるものは？", options: ["折りたたまれた特定の形", "色", "重さ"], answer: 0 },
          { q: "本文が挙げる注意は？", options: ["強力な新分子には責任が伴い安全に使う必要がある", "設計は不要", "タンパク質は無害"], answer: 0 }
        ]
      },
      {
        id: "d0821-3",
        title: "The Right to Learn",
        level: "★★★",
        genre: "世界情勢",
        text: "Around the world, going to school is something many children take for granted. But for millions of others, an education is still out of reach. Making sure that every child can learn to read, write, and think is one of the great shared goals of our time — and one that many countries and organizations are working together to achieve.\nWhy does education matter so much? Learning gives people the tools to build better lives. A child who can read and count has more chances to find good work, stay healthy, and take part in society. When more people are educated, whole countries grow stronger, with more skilled workers and new ideas. Education is one of the surest paths out of poverty.\nWhy is it still out of reach for some? In many places, poverty, distance, conflict, or a lack of teachers keeps children out of school. Girls, in particular, sometimes face extra barriers. Reaching every child, even in remote or troubled areas, is a huge challenge.\nMuch progress has been made. More children attend school today than ever before, and new tools — from mobile phones to online lessons — are helping learning reach places it never could before. But work remains, and steady effort is needed to make sure no child is left behind.\nThe goal is simple but powerful: that every person, wherever they are born, has the chance to learn. Education does not only change individual lives; it builds a wiser, fairer, and more capable world — a benefit that, in the end, everyone shares.",
        summaryJa: "世界中で、学校へ行くことは多くの子どもが当たり前と思うものだ。だが他の何百万もの子どもにとって、教育はいまだ手の届かないものだ。あらゆる子どもが読み・書き・考えることを学べるようにすることは、現代の大きな共有目標の一つ——そして多くの国や組織が協力して達成しようとしているものだ。なぜ教育がそれほど重要か。学ぶことは、より良い人生を築く道具を人々に与える。読み書きと計算ができる子は、良い仕事を見つけ、健康を保ち、社会に参加する機会がより多い。より多くの人が教育を受ければ、国全体が強くなる——熟練労働者と新しい発想が増えて。教育は貧困から抜け出す最も確実な道の一つだ。なぜ一部にはまだ届かないのか。多くの場所で、貧困・距離・紛争・教師の不足が子どもを学校から遠ざける。特に女子は、時に余分な障壁に直面する。遠隔地や困難な地域でさえあらゆる子に届くことは、大きな挑戦だ。多くの進歩があった。今日、かつてないほど多くの子が学校に通い、新しい道具——携帯電話からオンライン授業まで——が、かつて届かなかった場所へ学びを届けている。だが仕事は残り、どの子も取り残さないためには着実な努力が要る。目標は単純だが力強い——どこで生まれた人も、学ぶ機会を持つこと。教育は個人の人生を変えるだけでなく、より賢く、公正で、有能な世界を築く——結局、皆が分かち合う利益なのだ。",
        quiz: [
          { q: "教育が重要な理由は？", options: ["より良い人生の道具を与え貧困から抜け出す道になる", "何の役にも立たない", "移動を止める"], answer: 0 },
          { q: "教育が一部に届かない理由は？", options: ["貧困・距離・紛争・教師の不足", "子どもが多すぎる", "学校が嫌いだから"], answer: 0 },
          { q: "本文の目標は？", options: ["どこで生まれた人も学ぶ機会を持つこと", "一部の人だけ学ぶこと", "教育をやめること"], answer: 0 }
        ]
      },
      {
        id: "d0821-4",
        title: "The Art of Wrapping with Cloth",
        level: "★★☆",
        genre: "日本",
        text: "In Japan, there is a simple square of cloth that can become a bag, a gift wrapping, or a way to carry almost anything. It is called furoshiki, and for centuries people have used it to wrap and carry objects of all shapes and sizes. Today, as the world looks for ways to waste less, this old idea is gaining new attention.\nHow does it work? A furoshiki is just a piece of cloth, often beautifully patterned. By folding and tying it in different ways, a person can wrap a book, a bottle, a box, or a round melon, and carry it easily by the knot. When the cloth is not in use, it folds flat and takes up almost no space. The same cloth can be used again and again.\nWhy is furoshiki interesting today? Much of modern life produces waste, especially from packaging and single-use bags. A furoshiki, by contrast, is reusable, long-lasting, and often lovely to look at. Wrapping a gift in cloth can feel more personal and thoughtful than using paper that will be thrown away.\nThere is also skill and beauty in it. Learning the different folds is a small art, and a well-wrapped furoshiki is a pleasure to give and receive.\nThe furoshiki shows how a simple, traditional idea can fit perfectly into modern life. In a world trying to use less and waste less, a humble square of cloth — flexible, reusable, and beautiful — offers a gentle, elegant answer to a very modern problem.",
        summaryJa: "日本には、バッグにも、贈り物の包みにも、ほとんど何でも運ぶ手段にもなる、一枚の四角い布がある。「風呂敷」と呼ばれ、何世紀もの間、人々はあらゆる形と大きさの物を包み運ぶのに使ってきた。今日、世界が無駄を減らす方法を探す中、この古い発想が新たな注目を集めている。どう使うのか。風呂敷はただの布で、しばしば美しい柄がある。異なる方法で折って結ぶことで、本・瓶・箱・丸いメロンを包み、結び目で楽に運べる。使わないときは平らに畳め、ほとんど場所を取らない。同じ布を何度も使える。なぜ今、風呂敷が興味深いのか。現代生活の多くは、特に包装や使い捨ての袋から廃棄物を生む。対照的に風呂敷は再利用でき、長持ちし、見た目も美しいことが多い。布で贈り物を包むことは、捨てられる紙を使うより、個人的で心のこもった感じがしうる。そこには技と美もある。異なる結び方を学ぶのは小さな芸術で、うまく包まれた風呂敷は贈るのも受け取るのも楽しい。風呂敷は、単純で伝統的な発想が現代生活にぴったり合いうることを示す。より少なく使い、より少なく捨てようとする世界で、質素な四角い布——柔軟で、再利用でき、美しい——が、とても現代的な問題への穏やかで優雅な答えを差し出す。",
        quiz: [
          { q: "「風呂敷」とは何か？", options: ["物を包み運べる一枚の四角い布", "硬い箱", "紙の袋"], answer: 0 },
          { q: "今、風呂敷が注目される理由は？", options: ["再利用でき長持ちし無駄を減らせるから", "一度しか使えないから", "高価だから"], answer: 0 },
          { q: "本文が示すことは？", options: ["単純で伝統的な発想が現代の問題に合いうる", "伝統は無意味", "包装は不要"], answer: 0 }
        ]
      },
      {
        id: "d0821-5",
        title: "The Grand Canyon's Deeper Story",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "The Grand Canyon is one of the most famous natural wonders on Earth. Most people know that a river slowly carved it over millions of years. But scientists have discovered that part of its story may be far older and stranger than we thought — reaching back nearly a billion years, long before the river existed.\nWhat did they find? Deep inside the canyon, some of the ancient rock may have been exposed not by the river, but by a huge cliff system that formed when a supercontinent broke apart. Long ago, the Earth's land was joined into giant supercontinents that slowly split and drifted. As one of these ancient landmasses tore apart, it may have lifted and exposed rock that we now see at the canyon's heart.\nWhy does this matter? It reminds us that the Earth has a very long and active history. The ground beneath our feet, which seems so solid and permanent, has been rising, sinking, breaking, and moving for billions of years. Reading the layers of rock in a place like the Grand Canyon is like turning the pages of an enormous book about our planet's past.\nStudying such deep history is difficult and slow, requiring careful measurement and clever detective work with clues locked in stone.\nThe discovery deepens our wonder at a famous place. The Grand Canyon is not only beautiful; it is a record of unimaginable spans of time. Standing at its edge, we look not just across a great distance, but back through nearly a billion years of the Earth's living, changing story.",
        summaryJa: "グランドキャニオンは地球で最も有名な自然の驚異の一つだ。ほとんどの人は、川が何百万年もかけてゆっくり削ったと知っている。だが科学者は、その物語の一部が、私たちが思っていたよりはるかに古く奇妙かもしれないと発見した——川が存在するはるか前、10億年近く前にさかのぼるのだ。何を見つけたのか。峡谷の奥深くで、古代の岩の一部は川によってでなく、超大陸が分裂したときに形成された巨大な崖の系によって露出したのかもしれない。大昔、地球の陸地は巨大な超大陸に結ばれ、ゆっくり分かれ漂った。こうした古代の陸塊の一つが引き裂かれるとき、今私たちが峡谷の中心に見る岩を持ち上げ露出させたのかもしれない。なぜ重要か。地球が非常に長く活発な歴史を持つことを思い出させる。足下の地面は、あれほど固く永続的に見えるが、何十億年も隆起し、沈み、割れ、動いてきた。グランドキャニオンのような場所の岩の層を読むことは、私たちの惑星の過去についての巨大な本のページをめくるようなものだ。そんな深い歴史の研究は難しく遅く、丁寧な測定と、石に閉じ込められた手がかりでの巧妙な探偵仕事を要する。この発見は、有名な場所への驚きを深める。グランドキャニオンは美しいだけでなく、想像を絶する時の広がりの記録だ。その縁に立つとき、私たちは大きな距離を見渡すだけでなく、地球の生きて変わり続ける物語の10億年近くを振り返っているのだ。",
        quiz: [
          { q: "科学者が発見したことは？", options: ["峡谷の一部は川より前、超大陸の分裂で露出したかもしれない", "川は存在しなかった", "峡谷は人が作った"], answer: 0 },
          { q: "岩の層を読むことは何にたとえられるか？", options: ["惑星の過去についての巨大な本のページをめくること", "絵を描くこと", "音楽を聴くこと"], answer: 0 },
          { q: "この発見が思い出させることは？", options: ["地球は非常に長く活発な歴史を持つ", "地面は決して動かない", "歴史は短い"], answer: 0 }
        ]
      }
    ]
  }
  ] };
