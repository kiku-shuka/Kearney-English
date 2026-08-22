/* デイリー配信リーディング
 * 毎朝の自動ルーチンがこのファイルを丸ごと上書き生成する（直近 7 日分を保持）。
 * days は日付降順。各 day = { date: "YYYY-MM-DD", passages: [readingPassages と同スキーマ + genre] }
 * このファイル以外は手書きデータであり、ルーチンは触らない。
 */
window.KE_DATA = window.KE_DATA || {};

KE_DATA.dailyReading = { days: [
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
  },
    {
    date: "2026-08-20",
    passages: [
      {
        id: "d0820-1",
        title: "Selling Noodles to the World",
        level: "★★☆",
        genre: "ビジネス",
        text: "A dish that is loved in one country is not always easy to sell in another. This is the challenge facing a successful Japanese noodle company as it tries to bring thick udon noodles to customers in the United States. In Japan, udon is a simple, everyday comfort food. But abroad, many people have never tasted it — and turning an unfamiliar food into a popular one is hard work.\nWhy expand overseas at all? For a company that has already done well at home, foreign markets offer a chance to grow much bigger. The United States has a huge population and a strong interest in food from around the world. If udon catches on, the rewards could be enormous.\nBut there are real difficulties. Customers who have never eaten udon may not know what it is or how to enjoy it. The company must teach people about the food, adapt to local tastes, and compete with countless other restaurants. Growing quickly also means hiring staff, opening shops, and keeping quality high in a new country.\nMany foreign foods have succeeded this way. Dishes that once seemed strange in a new country later became everyday favorites, from pizza to sushi. Each began as something unfamiliar and slowly won people over.\nThe story shows a classic business truth: a great product is only the beginning. To succeed in a new market, a company must understand its customers, explain what it offers, and be patient. Winning hearts — and appetites — in a foreign land takes more than good noodles; it takes careful, steady effort.",
        summaryJa: "ある国で愛される料理が、別の国で売りやすいとは限らない。これは、太いうどんをアメリカの客に届けようとする、成功した日本の麺会社が直面する課題だ。日本でうどんは、素朴で日常的な癒しの食べ物だ。だが海外では、多くの人が食べたことがない——なじみのない食べ物を人気のものに変えるのは大変な仕事だ。そもそもなぜ海外進出するのか。既に国内で成功した会社にとって、海外市場ははるかに大きく成長する機会を与える。アメリカは巨大な人口と、世界中の食への強い関心を持つ。うどんが受ければ、見返りは莫大になりうる。だが本当の難しさもある。うどんを食べたことのない客は、それが何か、どう楽しむかを知らないかもしれない。会社は人々にその食べ物を教え、地元の味に合わせ、無数の他の飲食店と競わねばならない。速く成長することは、人を雇い、店を開き、新しい国で品質を高く保つことも意味する。多くの外国の食べ物がこうして成功してきた。かつて新しい国で奇妙に見えた料理が、後に日常のお気に入りになった——ピザから寿司まで。それぞれがなじみのないものとして始まり、ゆっくり人々を魅了した。この話は古典的なビジネスの真理を示す——素晴らしい製品は始まりにすぎない。新しい市場で成功するには、会社は客を理解し、何を提供するか説明し、忍耐せねばならない。異国で心——と食欲——を勝ち取るには、良い麺以上のものが要る。丁寧で着実な努力が要るのだ。",
        quiz: [
          { q: "この会社が直面する課題は？", options: ["なじみのないうどんを人気の食べ物に変えること", "麺を作れないこと", "国内で売れないこと"], answer: 0 },
          { q: "海外進出の理由は？", options: ["はるかに大きく成長する機会があるから", "国内客を減らすため", "麺をやめるため"], answer: 0 },
          { q: "本文が示すビジネスの真理は？", options: ["素晴らしい製品は始まりにすぎず客の理解と忍耐が要る", "良い製品だけで必ず成功する", "説明は不要"], answer: 0 }
        ]
      },
      {
        id: "d0820-2",
        title: "A New Kind of Computer Memory",
        level: "★★★",
        genre: "テクノロジー",
        text: "In most computers, storing information and processing it are two separate jobs, done in different places. Data is kept in memory, then moved to another part of the chip to be worked on, and moved back again. This constant shuffling takes time and uses a lot of energy. Now, scientists have built a new kind of memory device that could change this — one that can store and process information in the same place.\nWhy does this matter? Moving data back and forth is one of the biggest sources of wasted energy in computing. As we run more powerful programs, especially artificial intelligence, this waste grows. A device that keeps memory and processing together could be much faster and use far less power.\nThe new device is unusual because it combines two very different things: synthetic DNA — a human-made version of the molecule that carries life's instructions — and a semiconductor, the material at the heart of computer chips. Together, they form a tiny, extremely low-power memory that also helps do the calculating.\nThis is still early research, done in laboratories. Turning such a device into products people can use will take years, and many challenges remain.\nStill, the idea points toward an exciting future. As computers demand more and more energy, new designs that save power become increasingly important. By blending biology and electronics in surprising ways, scientists are searching for smarter, greener ways to compute — and, perhaps, quietly rewriting the rules of how machines think.",
        summaryJa: "ほとんどのコンピューターでは、情報を蓄えることと処理することは、別々の場所で行われる二つの仕事だ。データはメモリに保たれ、作業のためチップの別の部分へ移され、また戻される。この絶え間ない移動は時間がかかり、多くのエネルギーを使う。今、科学者はこれを変えうる新種のメモリ装置を作った——同じ場所で情報を蓄え、処理できるものだ。なぜ重要か。データを行き来させることは、計算で無駄になるエネルギーの最大級の源の一つだ。より強力なプログラム、特にAIを動かすにつれ、この無駄は増える。メモリと処理を一緒に保つ装置は、はるかに速く、はるかに少ない電力で済みうる。この新しい装置が珍しいのは、非常に異なる二つを組み合わせるからだ——合成DNA（生命の指示を運ぶ分子の人工版）と、コンピューターチップの中核をなす材料である半導体。両者が相まって、計算も助ける、微小で極めて低消費電力のメモリを形づくる。これはまだ実験室で行われる初期の研究だ。こうした装置を人々が使える製品に変えるには何年もかかり、多くの課題が残る。それでもこの発想は胸躍る未来を指し示す。コンピューターがますます多くのエネルギーを要する中、電力を節約する新しい設計はますます重要になる。生物学と電子工学を意外な形で混ぜることで、科学者はより賢く環境に優しい計算の方法を探している——そしておそらく、機械の考え方の規則を静かに書き換えているのだ。",
        quiz: [
          { q: "普通のコンピューターでエネルギーを無駄にする大きな原因は？", options: ["データを蓄える場所と処理する場所の間で行き来させること", "画面が明るいこと", "電源が古いこと"], answer: 0 },
          { q: "新しい装置が組み合わせるものは？", options: ["合成DNAと半導体", "水と油", "紙と鉛筆"], answer: 0 },
          { q: "この装置の利点は？", options: ["メモリと処理を一緒に保ち速く低消費電力になりうる", "電気を全く使わない", "計算ができない"], answer: 0 }
        ]
      },
      {
        id: "d0820-3",
        title: "Who Cleans Up in Space?",
        level: "★★★",
        genre: "世界情勢",
        text: "Space is often imagined as empty, but around the Earth it is becoming crowded with human-made objects. Recently, a used part of a rocket crashed into the Moon, leaving behind a small new crater. The event was harmless, but it raised an important question that the whole world will have to answer: who is responsible for the things we leave in space?\nWhy is this a problem? Every rocket launch and satellite adds to the amount of material in space. Old rockets, dead satellites, and broken pieces can stay in orbit for years, and some eventually fall — onto the Earth, or even the Moon. As more countries and companies reach into space, the amount of this 'space junk' keeps growing.\nSpace is a shared place. No single country owns it, and objects launched by one nation can affect everyone. If a piece of debris hits a working satellite, it could disrupt communications, weather forecasts, or navigation used around the world. Cleaning up, and preventing new messes, is a task no one can handle alone.\nCountries are beginning to talk about rules — agreements on how to track objects, avoid collisions, and safely remove old equipment. But making and enforcing such rules across many nations is difficult.\nThe crater on the Moon is a small reminder of a growing challenge. As humanity's presence in space expands, we must learn to manage it wisely and together. Space may be vast, but keeping it safe and usable is a responsibility we all share.",
        summaryJa: "宇宙はしばしば空っぽと想像されるが、地球の周りは人工物で混み合いつつある。最近、使用済みのロケットの一部が月に衝突し、小さな新しいクレーターを残した。この出来事は無害だったが、世界全体が答えねばならない重要な問いを投げかけた——宇宙に残す物に、誰が責任を負うのか。なぜ問題なのか。ロケットの打ち上げと衛星の一つ一つが、宇宙の物質の量を増やす。古いロケット、故障した衛星、壊れた破片は何年も軌道にとどまり、一部はやがて落ちる——地球へ、あるいは月にさえ。より多くの国と企業が宇宙に手を伸ばすにつれ、この「宇宙ごみ」の量は増え続ける。宇宙は共有の場所だ。どの一国も所有せず、一国が打ち上げた物が皆に影響しうる。破片が稼働中の衛星に当たれば、世界中で使われる通信・天気予報・航法を乱しうる。片づけることと、新たな散らかりを防ぐことは、誰も単独では扱えない務めだ。各国は規則——物体の追跡、衝突の回避、古い機器の安全な除去についての合意——を話し合い始めている。だが多くの国にまたがってそうした規則を作り執行するのは難しい。月のクレーターは、増大する課題の小さな気づきだ。宇宙での人類の存在が広がるにつれ、私たちはそれを賢く、共に管理することを学ばねばならない。宇宙は広大かもしれないが、安全で使える状態に保つことは、私たち皆が分かち合う責任なのだ。",
        quiz: [
          { q: "この出来事が投げかけた重要な問いは？", options: ["宇宙に残す物に誰が責任を負うのか", "月は何色か", "ロケットは何機あるか"], answer: 0 },
          { q: "「宇宙ごみ」が増える理由は？", options: ["打ち上げや衛星が増え古い機器が軌道に残るから", "宇宙が縮むから", "誰も宇宙に行かないから"], answer: 0 },
          { q: "宇宙の片づけが一国で扱えない理由は？", options: ["宇宙は共有の場所で一国の物が皆に影響するから", "宇宙は一国のものだから", "破片は無害だから"], answer: 0 }
        ]
      },
      {
        id: "d0820-4",
        title: "Japan's Changing Tourists",
        level: "★★☆",
        genre: "日本",
        text: "For years, Japan has welcomed a growing number of visitors from around the world. Tourism has become an important part of the economy, bringing money to hotels, restaurants, shops, and small towns. But recently, the number of tourists from one country dropped sharply, while the total number of foreign visitors stayed almost the same. This shows how the mix of tourists can change quickly.\nWhy do tourist numbers shift? Many things affect where people choose to travel. Government advice, the cost of flights, the strength of a currency, and events at home can all make visitors from one country rise or fall. When one group travels less, visitors from other countries may fill the gap.\nWhy does this matter for Japan? Tourism supports many jobs, so businesses want a steady flow of visitors. Depending too heavily on tourists from a single country is risky: if that group suddenly stops coming, businesses can suffer. A wide mix of visitors from many places is safer and more stable.\nThis is why Japan works to attract travelers from all over the world, offering things that appeal to many different cultures — beautiful nature, history, food, and modern cities.\nThe changing pattern of tourists is a reminder of a familiar lesson: it is wise not to depend on just one source. Whether for a country's tourism or a company's customers, variety brings strength. By welcoming visitors from many nations, Japan protects an important industry — and shares its culture with a wider world.",
        summaryJa: "長年、日本は世界中から増える訪問者を迎えてきた。観光は経済の重要な一部になり、ホテル・飲食店・店・小さな町にお金をもたらす。だが最近、ある国からの観光客が急減した一方、外国人訪問者の総数はほぼ変わらなかった。これは観光客の構成がいかに速く変わりうるかを示す。なぜ観光客の数は変動するのか。人がどこへ旅するかを選ぶには多くの要因が影響する。政府の助言、航空券の値段、通貨の強さ、母国の出来事——すべてがある国からの訪問者を増やしも減らしもしうる。ある集団が旅を減らすと、他国からの訪問者がその穴を埋めることもある。なぜこれが日本に重要か。観光は多くの仕事を支えるので、事業者は安定した訪問者の流れを望む。単一の国の観光客に頼りすぎるのは危うい——その集団が突然来なくなれば、事業者は苦しみうる。多くの場所からの幅広い訪問者の構成は、より安全で安定している。だから日本は世界中から旅行者を惹きつけようと努め、多くの異なる文化に訴えるもの——美しい自然、歴史、食、現代的な都市——を提供する。変わる観光客の型は、なじみの教訓を思い出させる——ただ一つの源に頼らないのが賢明だ。国の観光であれ企業の顧客であれ、多様性は強さをもたらす。多くの国から訪問者を迎えることで、日本は重要な産業を守り——その文化をより広い世界と分かち合うのだ。",
        quiz: [
          { q: "観光客の数が変動する要因に含まれるものは？", options: ["政府の助言・航空券の値段・通貨の強さ", "天気だけ", "何も影響しない"], answer: 0 },
          { q: "単一の国の観光客に頼りすぎる危険は？", options: ["その集団が来なくなると事業者が苦しむ", "観光客が増えすぎる", "何も起きない"], answer: 0 },
          { q: "本文の教訓は？", options: ["ただ一つの源に頼らず多様性が強さをもたらす", "一国に頼るのが最善", "観光は不要"], answer: 0 }
        ]
      },
      {
        id: "d0820-5",
        title: "The Tiny Particles That Make Clouds",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "Clouds seem simple — soft, white shapes drifting across the sky. But making a cloud is a surprisingly delicate process, and it depends on something almost too small to imagine: tiny particles floating in the air. Recently, scientists discovered a new natural process in the Arctic that can greatly increase the number of these particles, which help clouds to form.\nHow do clouds form? A cloud is made of countless tiny drops of water. But water vapor in the air cannot easily turn into drops on its own. It needs a surface to gather on — a tiny particle of dust, salt, or another substance. Each of these specks becomes the seed of a water droplet. Without enough of these particles, clouds cannot form well.\nWhy does the new discovery matter? Clouds have a huge effect on the planet. They bring rain, and they also shade the Earth, reflecting sunlight and helping to control temperature. Understanding what makes clouds form — especially in sensitive regions like the Arctic — helps scientists predict weather and understand how the climate may change.\nThis kind of research is difficult. The particles are extremely small, and the processes happen in remote, harsh places. Scientists use special instruments to detect them and careful study to understand what they do.\nThe discovery is a reminder that the largest features of our world can depend on the smallest things. A drifting cloud, a falling rain, even the temperature of the planet, may all trace back to invisible specks — quietly shaping the sky above us.",
        summaryJa: "雲は単純に見える——空を漂う柔らかく白い形。だが雲を作るのは驚くほど繊細な過程で、ほとんど想像できないほど小さいもの——空気中に浮かぶ微小な粒子——に依存する。最近、科学者は北極で、雲の形成を助けるこうした粒子の数を大きく増やしうる新しい自然の過程を発見した。雲はどう形成されるのか。雲は無数の微小な水の滴でできている。だが空気中の水蒸気は、単独では容易に滴にならない。集まる表面——塵・塩・別の物質の微小な粒子——が必要だ。こうした微粒の一つ一つが水滴の種になる。こうした粒子が十分にないと、雲はうまく形成できない。なぜ新しい発見が重要か。雲は地球に大きな影響を与える。雨をもたらし、地球に日陰を作り、日光を反射して気温の制御を助けもする。何が雲を形成させるか——特に北極のような敏感な地域で——を理解することは、科学者が天気を予測し、気候がどう変わりうるかを理解する助けになる。この種の研究は難しい。粒子は極めて小さく、過程は遠く過酷な場所で起きる。科学者は特別な機器でそれを検出し、丁寧な研究でその働きを理解する。この発見は、私たちの世界の最も大きな特徴が、最も小さなものに依存しうることを思い出させる。漂う雲、降る雨、地球の気温さえ、すべてが目に見えない微粒にさかのぼりうる——私たちの頭上の空を静かに形づくりながら。",
        quiz: [
          { q: "雲が形成されるのに必要なものは？", options: ["水蒸気が集まる微小な粒子（塵や塩など）", "大きな岩", "強い光"], answer: 0 },
          { q: "雲が地球に与える影響は？", options: ["雨をもたらし日光を反射して気温の制御を助ける", "何の影響もない", "地球を重くする"], answer: 0 },
          { q: "本文が伝えることは？", options: ["最も大きな特徴が最も小さなものに依存しうる", "雲は無関係", "粒子は無意味"], answer: 0 }
        ]
      }
    ]
  },
    {
    date: "2026-08-19",
    passages: [
      {
        id: "d0819-1",
        title: "The Trouble with Cheaper Tickets",
        level: "★★☆",
        genre: "ビジネス",
        text: "To attract more customers, many companies offer products at different prices, letting people pay less for a simpler version. Airlines often do this with tiered fares — cheaper tickets with fewer benefits. Recently, one airline faced criticism after introducing a new system of fare levels, with some passengers on the cheapest tickets complaining about seating and, in some cases, being unable to board.\nWhy do companies use tiered pricing? The idea is to serve different customers. Some travelers want the lowest possible price and do not mind giving up extras like choosing their seat. Others will pay more for comfort and flexibility. By offering several levels, a company hopes to sell to both groups and fill more seats.\nBut tiered pricing has risks. If the rules are confusing, or if the cheapest option feels unfair, customers can become angry. When people who paid for a ticket cannot board, trust is damaged — and in business, trust is hard to rebuild. Bad news travels quickly, especially online.\nThe key is clarity. Customers usually accept paying less for less, as long as they clearly understand what they are giving up. Problems arise when the limits are hidden or feel like a trick.\nThe lesson reaches across many industries. Offering choices at different prices can be smart, but only if it is honest and easy to understand. A pricing system that saves money but leaves customers confused or let down can cost a company something far more valuable than a discount: the loyalty of the people it serves.",
        summaryJa: "より多くの客を惹きつけるため、多くの企業は異なる価格で製品を提供し、簡素な版を安く買えるようにする。航空会社はしばしば段階的運賃でこれを行う——特典の少ない安いチケットだ。最近、ある航空会社が新しい運賃段階の仕組みを導入した後、批判に直面した。最も安いチケットの一部の乗客が座席について不満を述べ、場合によっては搭乗できなかったのだ。なぜ企業は段階的価格を使うのか。狙いは異なる客に応えることだ。ある旅行者は可能な限り安い価格を望み、座席選択のような追加をあきらめても構わない。別の人は快適さと柔軟さのためより多く払う。複数の段階を提供することで、企業は両方に売り、より多くの座席を埋めたい。だが段階的価格には危険もある。規則が分かりにくかったり、最も安い選択が不公平に感じられたりすると、客は怒りうる。チケットを買った人が搭乗できないと、信頼が損なわれる——ビジネスで信頼は再建が難しい。悪い知らせは、特にオンラインで速く広まる。鍵は明快さだ。客は普通、何をあきらめるかをはっきり理解している限り、安いものに安く払うことを受け入れる。問題は、制限が隠されていたり、だましのように感じられたりするときに生じる。教訓は多くの業界に及ぶ。異なる価格で選択肢を提供するのは賢くありうるが、正直で分かりやすい場合に限る。お金を節約しても客を混乱させたり失望させたりする価格の仕組みは、割引よりはるかに価値あるもの——奉仕する人々の忠誠——を企業に失わせうる。",
        quiz: [
          { q: "企業が段階的価格を使う狙いは？", options: ["異なる客に応えより多く売ること", "客を減らすこと", "価格を隠すこと"], answer: 0 },
          { q: "段階的価格の危険は？", options: ["規則が不明瞭・不公平だと信頼が損なわれる", "必ず利益が出る", "客が増えすぎる"], answer: 0 },
          { q: "本文が挙げる鍵は？", options: ["何をあきらめるかが分かる明快さ", "価格を隠すこと", "特典を無くすこと"], answer: 0 }
        ]
      },
      {
        id: "d0819-2",
        title: "Tiny Robots That Swim",
        level: "★★★",
        genre: "テクノロジー",
        text: "When we think of robots, we usually picture large machines with arms and wheels. But some of the most exciting robots being built today are almost too small to see. Scientists have created microscopic robots, driven by light, that can swim through liquid, catch tiny bacteria, and carry them to a chosen spot.\nHow do these tiny robots move? Being so small, they cannot use ordinary motors. Instead, they are powered by light. When light shines on them in a certain way, it pushes or steers them through the fluid. By controlling the light, scientists can guide the little robots where they want them to go, almost like moving a toy with a beam.\nWhy build robots so small? At this scale, they could do jobs no ordinary machine can. Catching and moving individual bacteria could help doctors study diseases, clean contaminated water, or one day deliver medicine to an exact spot inside the body. Working at the size of cells opens doors that larger tools cannot.\nThe technology is still young. These robots work in laboratories under careful conditions, and using them safely inside the human body or in the real world will take much more research.\nStill, the idea is remarkable. It shows how far robotics has come — from giant factory arms to swimmers smaller than a grain of dust. As scientists learn to build and control machines at this tiny scale, they open a new frontier where the very small may solve some very big problems.",
        summaryJa: "ロボットと聞くと、私たちはたいてい腕や車輪のある大きな機械を思い描く。だが今日作られる最も刺激的なロボットの一部は、ほとんど見えないほど小さい。科学者は、光で駆動し、液体の中を泳ぎ、小さな細菌を捕らえ、選んだ場所へ運べる微小なロボットを作った。この小さなロボットはどう動くのか。あまりに小さいので、普通のモーターは使えない。代わりに光で動かされる。ある方法で光が当たると、流体の中でロボットを押したり導いたりする。光を制御することで、科学者は小さなロボットを行かせたい場所へ導ける——まるで光線でおもちゃを動かすように。なぜそんなに小さなロボットを作るのか。この尺度では、普通の機械にできない仕事ができる。個々の細菌を捕らえ動かすことは、医師の病気研究、汚染された水の浄化、いつか体内の正確な場所への薬の送達を助けうる。細胞の大きさで働くことは、より大きな道具には開けない扉を開く。技術はまだ若い。これらのロボットは実験室の慎重な条件下で働き、人体内や現実世界で安全に使うにははるかに多くの研究が要る。それでも発想は驚くべきものだ。ロボット工学がどれほど進んだか——巨大な工場の腕から、塵の一粒より小さな泳ぎ手へ——を示す。科学者がこの微小な尺度で機械を作り制御するのを学ぶにつれ、とても小さなものがとても大きな問題を解きうる新しい辺境を開くのだ。",
        quiz: [
          { q: "この微小なロボットはどう動くか？", options: ["光で押されたり導かれたりする", "ガソリンで走る", "風で飛ぶ"], answer: 0 },
          { q: "小さなロボットができる仕事は？", options: ["個々の細菌を捕らえ運ぶ（病気研究や水の浄化など）", "大きな荷物を運ぶ", "家を建てる"], answer: 0 },
          { q: "この技術の現状は？", options: ["まだ若く実験室の慎重な条件下で働く", "既に体内で広く使われている", "もう不要になった"], answer: 0 }
        ]
      },
      {
        id: "d0819-3",
        title: "The New Race to the Moon",
        level: "★★★",
        genre: "世界情勢",
        text: "More than fifty years after humans first walked on the Moon, the world is going back — and this time, many nations and companies are taking part. Recently, one country announced a mission using a 'hopping' probe designed to search for hidden water near the Moon's surface. It is part of a broader wave of lunar exploration by several countries at once.\nWhy return to the Moon now? One big reason is water. Scientists believe there may be ice hidden in cold, shadowed craters near the Moon's poles. Water is precious in space: it can be used for drinking, split into oxygen to breathe, or even turned into rocket fuel. Finding usable water could make a lasting human presence on the Moon far more practical.\nThe Moon is also seen as a stepping stone. By learning to live and work there, explorers can test the tools and skills needed for even longer journeys, perhaps one day to Mars.\nThis new era is different from the first. Instead of a race between just two superpowers, today many countries and private companies are involved, sometimes competing and sometimes cooperating. This brings more ideas and resources, but also new questions about who may use the Moon, and how.\nWhatever happens, the goal is bold: not just to visit the Moon, but to stay. If humans can learn to use what the Moon offers, our nearest neighbor in space may become a base for exploring the solar system — and a shared challenge for all of humanity.",
        summaryJa: "人類が初めて月を歩いてから50年以上、世界は再び月へ向かっている——そして今度は、多くの国と企業が参加している。最近、ある国が、月の表面近くに隠れた水を探すよう設計された「跳ねる」探査機を使うミッションを発表した。同時に複数の国が行う、より広い月探査の波の一部だ。なぜ今、月へ戻るのか。大きな理由の一つは水だ。科学者は、月の極近くの冷たく影になったクレーターに氷が隠れているかもしれないと考える。水は宇宙で貴重だ——飲み水に使え、酸素に分けて呼吸でき、ロケット燃料にさえ変えられる。使える水を見つければ、月での持続的な人類の存在がはるかに実用的になりうる。月は足がかりとも見なされる。そこで暮らし働くことを学べば、探検者は、いつか火星へなど、さらに長い旅に必要な道具と技能を試せる。この新しい時代は最初とは異なる。二つの超大国だけの競争でなく、今日は多くの国と民間企業が関わり、時に競い時に協力する。これはより多くの発想と資源をもたらすが、誰がどう月を使ってよいかという新しい問いも生む。何が起きるにせよ、目標は大胆だ——月を訪れるだけでなく、留まること。月が提供するものを人類が使えるようになれば、宇宙の最も近い隣人が太陽系探査の基地——そして全人類が分かち合う挑戦——になるかもしれない。",
        quiz: [
          { q: "今、月へ戻る大きな理由の一つは？", options: ["飲み水・酸素・燃料に使える水（氷）を探すため", "月を明るくするため", "月を持ち帰るため"], answer: 0 },
          { q: "月が「足がかり」と見なされる理由は？", options: ["さらに長い旅（火星など）の道具と技能を試せるから", "月が地球より大きいから", "水が無いから"], answer: 0 },
          { q: "この新しい時代が最初と異なる点は？", options: ["多くの国と民間企業が関わり競い協力する", "一国だけが行う", "誰も参加しない"], answer: 0 }
        ]
      },
      {
        id: "d0819-4",
        title: "The Little Fans of a Hot Summer",
        level: "★★☆",
        genre: "日本",
        text: "Walk down a Japanese street on a hot summer day, and you will see them everywhere: small handheld fans, humming quietly as people try to stay cool. Once a rare gadget, these little electric fans have become a summer essential, carried by students, workers, and travelers alike. But as they have grown popular, they have also brought some new problems.\nWhy are handheld fans so popular? Japanese summers are hot and very humid, and a small fan offers instant, personal relief almost anywhere — on a crowded train, waiting in line, or walking outside. They are cheap, light, and rechargeable, making them easy to carry all day.\nRecently, though, there have been warnings about safety. Some people, especially those with long hair, have had their hair caught in the spinning blades, causing painful injuries. There have also been reports of the batteries inside overheating or even catching fire if the fans are damaged or poorly made.\nThese problems do not mean the fans are dangerous for everyone, but they are a reminder to use them with care — tying back long hair, buying from trusted makers, and not leaving them to charge unattended.\nThe story of the handheld fan is a small example of a common pattern: a helpful new gadget spreads quickly, and only later do people learn to use it safely. As with many tools, a little caution lets us enjoy the benefits — a cool breeze on a hot day — while avoiding the risks that come with something new.",
        summaryJa: "暑い夏の日に日本の街を歩くと、あちこちで目にする——小さな携帯扇風機が、涼をとろうとする人々の手で静かにうなっている。かつては珍しい機器だったこの小さな電動扇風機は、今や夏の必需品になり、学生も働く人も旅行者も持ち歩く。だが人気になるにつれ、いくつか新しい問題ももたらした。なぜ携帯扇風機はそれほど人気か。日本の夏は暑く非常に湿気が多く、小さな扇風機はほぼどこでも——混んだ電車、行列、屋外を歩くとき——即座に個人的な涼を与える。安く、軽く、充電式なので、一日中持ち歩きやすい。だが最近、安全について警告が出ている。一部の人、特に髪の長い人が、回る羽根に髪を巻き込まれ、痛い怪我をした。扇風機が壊れたり粗悪だったりすると、中の電池が過熱し、発火することさえあるという報告もある。こうした問題は、扇風機が誰にとっても危険という意味ではないが、注意して使うようにという気づきだ——長い髪を束ね、信頼できるメーカーから買い、充電中に放置しない。携帯扇風機の話は、よくある型の小さな例だ——役立つ新しい機器が速く広まり、後になって人々が安全に使うことを学ぶ。多くの道具と同じく、少しの注意が、利点——暑い日の涼しい風——を楽しみつつ、新しいものに伴う危険を避けさせてくれる。",
        quiz: [
          { q: "携帯扇風機が日本で人気の理由は？", options: ["暑く湿気の多い夏にどこでも即座に涼を与えるから", "冬に暖かいから", "無料だから"], answer: 0 },
          { q: "本文が挙げる安全上の問題は？", options: ["髪の巻き込みや電池の過熱・発火", "水漏れ", "音が出ないこと"], answer: 0 },
          { q: "本文が伝える教訓は？", options: ["少しの注意で利点を楽しみ危険を避けられる", "扇風機は危険で使えない", "注意は不要"], answer: 0 }
        ]
      },
      {
        id: "d0819-5",
        title: "A Surprising Clue in the Search for Alien Life",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "Is there life anywhere else in the universe? It is one of humanity's oldest questions, and scientists are searching for answers among the stars. To find life on distant planets, they look for special gases in the planets' air — signs that living things might be present. Recently, researchers suggested that one surprising gas could be an important clue: nitrous oxide, sometimes known as 'laughing gas.'\nWhy look for gases? Scientists cannot travel to faraway planets, but they can study the light that passes through a planet's atmosphere. Different gases leave different marks in that light. Certain gases are produced mainly by living things, so finding them could hint that life exists — even from many light-years away.\nWhy nitrous oxide? On Earth, this gas is produced by many living organisms as part of natural processes. If a distant planet's air contained a lot of it, and there was no obvious non-living source, that might suggest living things are at work there. Adding nitrous oxide to the list of 'biosignatures' gives scientists another tool in their search.\nOf course, this is not proof of alien life. A gas can sometimes be made without living things, so scientists must be careful and look for several clues together, not just one.\nStill, the idea is exciting. Each new biosignature improves our chances of recognizing life if we ever find it. As telescopes grow more powerful, humanity comes a little closer to answering a question we have asked for thousands of years: are we alone?",
        summaryJa: "宇宙のどこか他に生命はいるのか。人類の最も古い問いの一つで、科学者は星々の間に答えを探している。遠い惑星の生命を見つけるため、彼らは惑星の大気の特別な気体——生き物がいるかもしれない兆し——を探す。最近、研究者は、意外な気体が重要な手がかりになりうると示した。亜酸化窒素、時に「笑気ガス」として知られる気体だ。なぜ気体を探すのか。科学者は遠い惑星へ旅できないが、惑星の大気を通る光を研究できる。異なる気体はその光に異なる印を残す。特定の気体は主に生き物によって作られるので、それを見つければ——何光年も離れていても——生命の存在を示唆しうる。なぜ亜酸化窒素か。地球では、この気体は多くの生物が自然の過程の一部として作る。遠い惑星の大気にそれが大量にあり、明白な非生命の源がなければ、そこで生き物が働いていることを示唆するかもしれない。亜酸化窒素を「バイオシグネチャー（生命の兆候）」の一覧に加えることは、探索の道具をもう一つ科学者に与える。もちろん、これは宇宙生命の証明ではない。気体は時に生き物なしでも作られうるので、科学者は慎重に、一つでなく複数の手がかりを合わせて見ねばならない。それでも発想は胸躍る。新しいバイオシグネチャー一つ一つが、もし生命を見つけたときにそれと認識できる可能性を高める。望遠鏡がより強力になるにつれ、人類は何千年も問うてきた問い——私たちは孤独なのか——への答えに少し近づく。",
        quiz: [
          { q: "遠い惑星の生命を探すため科学者が調べるものは？", options: ["惑星の大気を通る光に残る気体の印", "惑星の重さ", "惑星の名前"], answer: 0 },
          { q: "亜酸化窒素が手がかりになりうる理由は？", options: ["地球では多くの生物が作る気体だから", "無害だから", "光るから"], answer: 0 },
          { q: "本文が促す慎重さは？", options: ["気体は生き物なしでも作られうるので複数の手がかりを合わせる", "一つの気体で断定してよい", "証明は不要"], answer: 0 }
        ]
      }
    ]
  },
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
  }
  ] };
