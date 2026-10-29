/* デイリー配信リーディング
 * 毎朝の自動ルーチンがこのファイルを丸ごと上書き生成する（直近 7 日分を保持）。
 * days は日付降順。各 day = { date: "YYYY-MM-DD", passages: [readingPassages と同スキーマ + genre] }
 * このファイル以外は手書きデータであり、ルーチンは触らない。
 */
window.KE_DATA = window.KE_DATA || {};

KE_DATA.dailyReading = { days: [
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
    },
    {
    date: "2026-10-28",
    passages: [
      {
        id: "d1028-1",
        title: "How to Make a Budget",
        level: "★★☆",
        genre: "ビジネス",
        text: "Many people feel that their money disappears too quickly, with little to show for it at the end of the month. One of the best ways to take control is to make a budget. A budget is simply a plan for your money, deciding where it will go before you spend it. It works for a single person, a family, or even a large company.\n\nMaking a basic budget is not difficult. The first step is to know your income, the money that comes in each month. The second step is to track your spending, the money that goes out. Many people are surprised when they see how much they spend on small things, like snacks or coffee, once they add it all up.\n\nNext, you divide your spending into groups. Some costs are needs, such as food, rent, and electricity, which you cannot avoid. Others are wants, such as games or eating out, which are nice but not necessary. A good budget makes sure that needs are paid first, and then sets a limit on wants.\n\nA wise plan also includes saving. Many experts suggest treating savings like a need, setting some money aside each month before spending on wants.\n\nThe real power of a budget is awareness. When you can see where your money goes, you can make better choices. A budget does not mean you can never enjoy yourself. It simply means you, and not chance, decide how your money is used.",
        summaryJa: "予算（家計の計画）の立て方について。多くの人は、月末に何も残らずお金がすぐ消えると感じる。これを管理する最良の方法の一つが予算を立てることだ。予算とは、使う前にお金の行き先を決める計画で、個人でも家族でも大企業でも使える。基本の予算は難しくない。第一歩は収入、つまり毎月入るお金を知ること。第二歩は支出、つまり出ていくお金を記録すること。間食やコーヒーなど小さな出費も合計すると驚くほど多い。次に支出を分類する。食費・家賃・電気など避けられない「必要」と、ゲームや外食など「欲しいもの」がある。良い予算は必要を先に払い、欲しいものに上限を設ける。貯蓄を「必要」として欲しいものに使う前に取り分ける人も多い。予算の本当の力は「気づき」で、お金の流れが見えればより良い選択ができる。偶然でなく自分が使い道を決められる。",
        quiz: [
          { q: "What is a budget?", options: ["A plan for your money before you spend it", "A type of bank", "A kind of tax"], answer: 0 },
          { q: "What is the difference between 'needs' and 'wants'?", options: ["Needs are unavoidable costs; wants are nice but not necessary", "They are exactly the same", "Wants must always be paid first"], answer: 0 },
          { q: "What is the real power of a budget?", options: ["Awareness of where your money goes", "Making money disappear", "Never enjoying anything"], answer: 0 }
        ]
      },
      {
        id: "d1028-2",
        title: "How Do Elevators Work?",
        level: "★★☆",
        genre: "テクノロジー",
        text: "In tall buildings everywhere, elevators carry people up and down all day, quietly and safely. We step in, press a button, and arrive at another floor without a thought. But lifting a heavy box full of people, sometimes hundreds of meters into the air, is no simple task. How does an elevator work, and why is it so safe?\n\nMost elevators work using a clever idea called a counterweight. The elevator car hangs from strong steel ropes that run up and over a wheel at the top of the building and down to a heavy weight on the other side. This counterweight is about as heavy as the car with a few people inside. Because the two sides nearly balance, the motor does not have to lift the full weight of the car. It only needs to move the small difference, which saves a great deal of energy.\n\nA powerful electric motor turns the wheel, pulling the car up or letting it down. A computer controls the motor, choosing which floors to stop at and making sure the car arrives level with the floor.\n\nSafety is built in at every step. The steel ropes are far stronger than needed, and there are usually several of them, so the car cannot fall if one breaks. Most importantly, every elevator has a device called a governor. If the car ever moves too fast, the governor triggers brakes that grip the rails and stop it. Thanks to these systems, riding an elevator is one of the safest journeys we make.",
        summaryJa: "エレベーターの仕組みについて。高い建物では、エレベーターが一日中静かに安全に人を上下させる。乗ってボタンを押せば別の階に着く。だが人を乗せた重い箱を時に数百メートルも持ち上げるのは簡単ではない。どう動き、なぜ安全なのか。多くはカウンターウェイト（釣り合いおもり）という巧妙な仕組みを使う。かごは強い鋼のロープで吊られ、ロープは建物上部の滑車を越えて反対側の重いおもりへ下りる。このおもりは数人乗ったかごとほぼ同じ重さだ。両側がほぼ釣り合うため、モーターはかご全体でなくわずかな差だけ動かせばよく、省エネになる。強力な電動モーターが滑車を回し、コンピューターが停止階や着床を制御する。安全も随所にあり、鋼ロープは必要以上に強く複数あるので一本切れても落ちない。最も重要なのは調速機で、速すぎると鋼レールをつかむブレーキが作動して止める。",
        quiz: [
          { q: "What is a 'counterweight' used for in an elevator?", options: ["To balance the car so the motor moves only a small difference", "To make the car heavier", "To light the car"], answer: 0 },
          { q: "Why can't the car fall if one rope breaks?", options: ["There are usually several strong ropes", "The car has wings", "Ropes never hold the car"], answer: 0 },
          { q: "What does the 'governor' do?", options: ["Triggers brakes if the car moves too fast", "Chooses the music", "Opens the windows"], answer: 0 }
        ]
      },
      {
        id: "d1028-3",
        title: "Why Do Countries Sign Treaties?",
        level: "★★★",
        genre: "世界情勢",
        text: "When two or more countries want to agree on something important, they often write it down in a formal document called a treaty. A treaty is a promise between nations, a written agreement that each side pledges to follow. Treaties have shaped the world for thousands of years, ending wars, opening trade, and setting rules that cross borders.\n\nWhy do countries bother to sign them? The main reason is trust. A spoken promise between leaders can be forgotten or denied, but a written treaty is clear and lasting. By signing, each country publicly agrees to certain actions, and other nations can see whether the promise is kept.\n\nTreaties cover many subjects. Some are peace treaties that formally end a war. Others are trade treaties that allow goods to move more freely between countries. In modern times, many treaties deal with shared global problems, such as protecting the environment, limiting dangerous weapons, or defending human rights.\n\nMaking a treaty takes patience. Representatives from each country discuss the terms carefully, sometimes for years, until everyone can agree. Once signed, a treaty usually must also be approved by each country's own government before it takes full effect.\n\nTreaties are powerful, but they are not perfect. There is no world police to force a country to obey, so treaties depend on nations keeping their word and on the pressure of other countries. Still, they remain one of the most important tools the world has. Through treaties, nations turn difficult conversations into lasting, shared rules.",
        summaryJa: "国が条約を結ぶ理由について。二つ以上の国が重要な事柄で合意したいとき、条約という正式な文書に書き記すことが多い。条約は国家間の約束で、各国が守ると誓う文書だ。条約は何千年も世界を形づくり、戦争を終わらせ、貿易を開き、国境を越える規則を定めてきた。なぜ署名するのか。中心は信頼だ。口約束は忘れられ否定されうるが、文書の条約は明確で長く残る。署名により各国は公に行動を約束し、他国は守られているか見られる。条約は多岐にわたり、戦争を正式に終える平和条約、物が自由に動く貿易条約、環境保護・危険兵器の制限・人権擁護など地球規模の問題を扱うものもある。作成には忍耐が要り、各国の代表が何年もかけて条件を話し合う。署名後も各国政府の承認が要ることが多い。強力だが完璧でなく、強制する世界警察はなく、各国が約束を守ることと他国の圧力に頼る。",
        quiz: [
          { q: "What is a treaty?", options: ["A written agreement, a promise between nations", "A type of army", "A national holiday"], answer: 0 },
          { q: "Why do countries write treaties down?", options: ["A written treaty is clear and lasting, building trust", "To keep them secret", "So they can be forgotten"], answer: 0 },
          { q: "Why are treaties not perfect?", options: ["There is no world police to force a country to obey", "They are never signed", "They always start wars"], answer: 0 }
        ]
      },
      {
        id: "d1028-4",
        title: "Hanami: Japan's Cherry Blossom Tradition",
        level: "★★☆",
        genre: "日本",
        text: "Each spring, something wonderful happens across Japan. For about a week, cherry trees burst into clouds of soft pink and white flowers called sakura. People rush outside to enjoy them in a beloved custom called hanami, which means flower viewing. For many, it is the most awaited moment of the year.\n\nDuring hanami, families, friends, and coworkers gather under the blossoming trees in parks and along rivers. They spread out mats, share food and drinks, talk, and simply gaze up at the flowers. In the evening, some places light up the trees, and the glowing blossoms against the dark sky are breathtaking.\n\nThe timing is delicate. The blossoms open at slightly different times across the country, starting in the warm south and moving north over several weeks. Television and websites report a cherry blossom front, so people can plan the best day to go. The flowers last only a short time, and a single rain or strong wind can scatter them.\n\nThis brief life is part of the beauty. For centuries, the cherry blossom has been a gentle reminder that beautiful things do not last forever. Rather than making people sad, this thought encourages them to enjoy the present moment fully, together with others.\n\nHanami is more than looking at flowers. It is a celebration of spring, of friendship, and of life itself. When the sakura bloom, the whole country seems to pause and look up, sharing a quiet, happy moment before the petals fall.",
        summaryJa: "日本の花見について。毎春、日本各地で素晴らしいことが起こる。約一週間、桜の木が淡い桜色と白の花の雲のように咲く。人々は外へ出て、「花見」という愛される習わしで楽しむ。多くの人にとって一年で最も待ち望む時だ。花見では家族や友人、同僚が公園や川沿いの桜の下に集まり、敷物を広げ飲食し、語り、花を見上げる。夜は木をライトアップする場所もあり、暗い空に映える花は見事だ。時期は繊細で、暖かい南から始まり数週かけて北上する。「桜前線」が報じられ、人は最適な日を計画する。花は短命で、一度の雨や強風で散る。この短い命も美の一部だ。桜は何世紀も、美しいものは永遠でないとやさしく思い出させてきた。悲しむより今を存分に楽しむよう促す。花見は花を見る以上に、春と友情と命そのものの祝いだ。",
        quiz: [
          { q: "What does 'hanami' mean?", options: ["Flower viewing", "Snow festival", "Mountain climbing"], answer: 0 },
          { q: "Why is there a 'cherry blossom front' report?", options: ["Blossoms open at different times across the country", "The flowers never open", "To forecast earthquakes"], answer: 0 },
          { q: "What does the short life of the blossoms remind people of?", options: ["That beautiful things do not last forever", "That spring never ends", "That trees are useless"], answer: 0 }
        ]
      },
      {
        id: "d1028-5",
        title: "What Causes Thunder and Lightning?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "During a storm, the sky suddenly flashes with a brilliant light, and moments later a deep rumble rolls across the clouds. Lightning and thunder are among nature's most dramatic shows. They can seem frightening, but they come from a simple natural process happening high in the clouds.\n\nIt begins with electricity. Inside a large storm cloud, strong winds toss around countless tiny pieces of ice and water. As they bump and rub together, they build up an electric charge, much like when you rub a balloon on your hair. The charge grows and grows until it is released all at once in a giant spark. That spark, leaping between the cloud and the ground, or between clouds, is lightning.\n\nLightning is incredibly hot, far hotter than the surface of the Sun. In an instant, it heats the air around it so fast that the air explodes outward. This sudden movement of air creates a powerful sound wave, which we hear as thunder. So lightning and thunder happen at the same moment; we simply see the flash before we hear the sound.\n\nThis is also why we can tell how far away a storm is. Light travels almost instantly, but sound travels much more slowly. By counting the seconds between the flash and the rumble, we can estimate the distance. A long gap means the storm is far; a short one means it is close.\n\nPowerful and beautiful, lightning is simply nature releasing the electricity it has quietly built up in the sky.",
        summaryJa: "雷と稲妻の原因について。嵐の間、空が突然まばゆく光り、少し後に低いとどろきが雲を渡る。稲妻と雷は自然の最も劇的な見世物の一つだ。怖く見えるが、雲の高い所で起こる単純な自然の過程から生まれる。始まりは電気だ。大きな嵐雲の中で強い風が無数の小さな氷や水の粒を揺さぶる。ぶつかり擦れ合ううちに、風船を髪でこするように電気を帯びる。電荷は大きくなり、ついに巨大な火花として一気に放出される。雲と地面の間や雲どうしを飛ぶその火花が稲妻だ。稲妻は太陽の表面よりはるかに高温で、一瞬で周りの空気を急激に熱し、空気が外へ爆発する。この急な空気の動きが強い音波を生み、雷として聞こえる。だから稲妻と雷は同時に起き、光を先に見て音を後に聞くだけだ。光はほぼ瞬時、音は遅いので、光と音の間の秒数で距離を推定できる。",
        quiz: [
          { q: "What is lightning?", options: ["A giant spark of electricity released from a cloud", "A type of cloud", "A kind of rain"], answer: 0 },
          { q: "What causes the sound of thunder?", options: ["Lightning heats the air so fast that it explodes outward", "Clouds hitting each other softly", "Rain falling on roofs"], answer: 0 },
          { q: "Why do we see the flash before we hear the thunder?", options: ["Light travels much faster than sound", "Thunder comes first but is quiet", "They happen hours apart"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-10-27",
    passages: [
      {
        id: "d1027-1",
        title: "Why Reputation Matters in Business",
        level: "★★☆",
        genre: "ビジネス",
        text: "A company can own factories, machines, and money, but one of its most valuable possessions cannot be seen or touched. It is its reputation, the opinion that people have about it. A good reputation takes years to build but can be lost in a moment. For any business, protecting it is deeply important.\n\nWhy does reputation matter so much? The main reason is trust. When people trust a company, they are willing to buy from it, work for it, and recommend it to others. A business with a strong, honest reputation attracts loyal customers who return again and again, which is far cheaper than finding new ones.\n\nReputation is built on actions, not words. A company earns a good name by keeping its promises, making quality products, treating customers and workers fairly, and being honest when something goes wrong. Over many years, these actions add up to a reputation that people respect.\n\nThe danger is that reputation is fragile. A single scandal, a broken promise, or poor treatment of customers can damage years of good work. In today's connected world, news travels fast, and an unhappy customer can share their story with millions in minutes.\n\nThis is why wise companies guard their reputation carefully. They know that an honest reputation is not just good manners; it is good business. In the end, people do business with those they trust, and trust, once earned, is one of the most powerful advantages a company can have.",
        summaryJa: "ビジネスで評判が大切な理由について。企業は工場や機械、資金を持てるが、最も価値ある財産の一つは見えず触れられない。それが評判、つまり人々が抱く意見だ。良い評判は築くのに何年もかかるが一瞬で失われる。どの事業でも守ることが極めて重要だ。理由の中心は信頼で、人は信頼する企業から買い、そこで働き、他人に薦める。強く誠実な評判は、何度も戻る忠実な客を引き寄せ、新規開拓よりずっと安い。評判は言葉でなく行動で築かれる。約束を守り、良い製品を作り、客と従業員を公平に扱い、問題時に正直であることで良い名を得る。だが評判はもろく、一つの不祥事や約束違反、客への悪い対応が長年の努力を損なう。つながった世界では悪評は一瞬で何百万人にも広がる。誠実な評判は礼儀でなく良い商売だ。",
        quiz: [
          { q: "What is one of a company's most valuable possessions that cannot be seen?", options: ["Its reputation", "Its factory", "Its money"], answer: 0 },
          { q: "How is a good reputation built?", options: ["Through actions like keeping promises and quality work", "By spending the most money", "By making many speeches"], answer: 0 },
          { q: "Why is reputation fragile today?", options: ["News travels fast and can reach millions quickly", "No one ever talks", "It can never be damaged"], answer: 0 }
        ]
      },
      {
        id: "d1027-2",
        title: "How Do Passwords Keep Us Safe?",
        level: "★★☆",
        genre: "テクノロジー",
        text: "Every day, we type passwords to open our phones, check email, or buy things online. A password is a secret word or set of characters that proves you are really you. It acts like a key to a locked door, letting the right person in and keeping others out. But how do passwords keep our information safe, and how can we make them stronger?\n\nWhen you create a password, a well-designed website does not simply store it as plain text. Instead, it scrambles the password into a long, unreadable code using a special math process. When you log in again, the site scrambles what you typed and checks whether it matches. This means that even someone who breaks into the system should not be able to read your actual password.\n\nThe problem is that people often choose weak passwords, such as \"1234\" or their own name. These are easy to guess, and computers can try millions of common passwords very quickly. A strong password is long and hard to guess, mixing letters, numbers, and symbols, and is not a real word.\n\nExperts give simple advice. Use a different password for each important account, so that if one is stolen, the others stay safe. Many people now use a \"password manager,\" a program that creates and remembers strong passwords for them.\n\nFor extra safety, many services add a second step, such as a code sent to your phone. A password is only a first line of defense, but a strong one is still one of the simplest ways to protect your digital life.",
        summaryJa: "パスワードが私たちを守る仕組みについて。私たちは毎日、スマホを開き、メールを確認し、オンラインで買い物するためにパスワードを打つ。パスワードは本人であることを証明する秘密の語や文字列で、鍵のように正しい人を入れ他人を締め出す。どう情報を守り、どう強くできるのか。パスワードを作ると、よく設計されたサイトはそのまま保存せず、特別な数学処理で長く読めない符号に変換する。再ログイン時に入力を同様に変換し一致を確認する。だから侵入者も実際のパスワードを読めないはずだ。問題は「1234」や自分の名前など弱いパスワードを選びがちで、コンピューターは一般的なものを一瞬で大量に試せる。強いパスワードは長く推測しにくく、文字・数字・記号を混ぜ実在の語でない。重要な口座ごとに別のパスワードを使い、パスワード管理ソフトも役立つ。スマホへの確認コードなど二段階認証も安全を高める。",
        quiz: [
          { q: "What does a well-designed website do with your password?", options: ["Scrambles it into unreadable code", "Prints it on paper", "Shows it to everyone"], answer: 0 },
          { q: "What makes a strong password?", options: ["Long and hard to guess, mixing letters, numbers, and symbols", "A simple word like your name", "The number 1234"], answer: 0 },
          { q: "Why use a different password for each important account?", options: ["If one is stolen, the others stay safe", "To make them easy to forget", "Because it is required by law"], answer: 0 }
        ]
      },
      {
        id: "d1027-3",
        title: "What Is GDP? Measuring a Country's Economy",
        level: "★★★",
        genre: "世界情勢",
        text: "In the news, you often hear that a country's economy is \"growing\" or \"shrinking.\" But how can anyone measure something as huge as the economy of a whole nation? The most common tool is a number called GDP, which stands for Gross Domestic Product. Understanding it helps us make sense of much of the world's news.\n\nGDP is, roughly, the total value of all the goods and services a country produces in a year. This includes everything from cars and computers to haircuts and bus rides. If a country makes and sells more this year than last year, its GDP grows, and we say the economy is growing.\n\nWhy do people care so much about GDP? When an economy grows, there are usually more jobs, higher wages, and more money for schools and hospitals. When GDP shrinks, businesses may struggle and people may lose work. So governments watch GDP closely and try to help it grow steadily.\n\nHowever, GDP is not a perfect measure. It counts how much a country produces, but not how fairly that wealth is shared. A country can have a rising GDP while many of its people remain poor. GDP also ignores things that matter to happiness, such as clean air, free time, and good health.\n\nFor this reason, experts say GDP is useful but should not be the only guide. It tells us about the size of an economy, but not the whole story of how well people are actually living. Numbers help, but they never capture everything.",
        summaryJa: "GDP（国内総生産）とは何かについて。ニュースで国の経済が「成長」「縮小」していると聞くが、一国の経済ほど巨大なものをどう測るのか。最も一般的な道具がGDPという数字だ。これを理解すると世界のニュースの多くが分かる。GDPはおおよそ、その国が一年に生産する全ての財とサービスの総価値で、車やコンピューターから散髪やバス乗車まで含む。昨年より多く作り売ればGDPは増え、経済成長と言う。人々が気にするのは、経済が成長すると普通は雇用が増え賃金が上がり、学校や病院の資金も増えるからだ。縮小すると企業は苦しみ失業も出る。だから政府はGDPを注視し安定成長を促す。だがGDPは完璧でなく、生産量は測るが富が公平に分けられているかは測らない。GDPが伸びても多くの人が貧しいこともある。きれいな空気や自由時間、健康も映さない。有用だが唯一の指標にすべきでない。",
        quiz: [
          { q: "What does GDP roughly measure?", options: ["The total value of goods and services a country produces in a year", "The number of people in a country", "The size of a country's land"], answer: 0 },
          { q: "Why do people care about GDP growing?", options: ["It usually means more jobs and higher wages", "It makes the country smaller", "It has no effect on anyone"], answer: 0 },
          { q: "What is one weakness of GDP?", options: ["It does not show how fairly wealth is shared", "It counts nothing at all", "It measures happiness perfectly"], answer: 0 }
        ]
      },
      {
        id: "d1027-4",
        title: "Noren: The Curtains at Japan's Doorways",
        level: "★★☆",
        genre: "日本",
        text: "Walk through an old shopping street in Japan, and you will see short fabric curtains hanging in many doorways. Split down the middle so a person can pass through, these cloth hangings are called noren. They may look like simple decoration, but noren carry meaning and have been part of Japanese life for centuries.\n\nA noren has several practical uses. Hanging in a doorway, it offers shade from the sun, blocks wind and dust, and gives a little privacy, while still letting air and people pass easily. Long ago, before modern signs, shops used them to mark their entrance and to display their name or symbol.\n\nMost importantly, a noren shows whether a shop is open. When a restaurant or store is doing business, the noren hangs outside the door. When the shop closes for the day, the staff take it down. So a hanging noren is a simple, friendly sign that says, \"Welcome, we are open.\"\n\nNoren also carry a shop's pride. A restaurant's noren may be dyed with its name and a beautiful design, and an old, respected business is sometimes said to have a well-known noren. To damage a shop's reputation is even described as hurting its noren.\n\nToday, noren are still common at restaurants, hot-spring inns, and homes, and modern designers create new styles too. Simple yet full of meaning, the noren is a small cloth that quietly carries welcome, tradition, and the spirit of a Japanese shop.",
        summaryJa: "日本の店先ののれんについて。日本の古い商店街を歩くと、多くの戸口に短い布の暖簾が下がっている。人が通れるよう中央で割れたこの布を「のれん」と呼ぶ。単なる飾りに見えるが意味を持ち、何世紀も日本の生活の一部だ。のれんには実用もある。戸口に下げると日差しを遮り、風やほこりを防ぎ、少し目隠しにもなりつつ、空気も人も通す。昔、近代的な看板がない頃は、店の入口を示し名や印を掲げた。最も大切なのは営業中かどうかを示すことで、営業中は外に掛け、閉めると外す。だから掛かったのれんは「ようこそ、営業中です」という親しみある合図だ。店の誇りも担い、名や美しい意匠を染めることもあり、老舗は「のれんが知られる」と言われる。店の評判を傷つけることは「のれんを傷つける」とも言う。今も飲食店や温泉宿、家庭で見られる。",
        quiz: [
          { q: "What are 'noren'?", options: ["Short fabric curtains hung in doorways", "A type of food", "A kind of car"], answer: 0 },
          { q: "What does a noren hanging outside a shop usually show?", options: ["That the shop is open", "That the shop is on fire", "That the shop moved away"], answer: 0 },
          { q: "What does 'hurting its noren' describe?", options: ["Damaging a shop's reputation", "Cleaning the floor", "Raising prices"], answer: 0 }
        ]
      },
      {
        id: "d1027-5",
        title: "How Does Our Sense of Smell Work?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "The smell of fresh bread, flowers, or rain can fill us with pleasure, warning, or memory in an instant. Smell is one of our oldest and most powerful senses, yet we rarely stop to think about how it works. How does the nose turn the air around us into the rich world of smells?\n\nEverything we smell gives off tiny, invisible particles called molecules, which float in the air. When we breathe in, these molecules travel up into the nose. High inside the nose is a small patch covered with millions of special sensing cells. When certain molecules touch these cells, the cells send a signal to the brain, which recognizes the smell.\n\nHumans can tell apart a huge number of different smells, perhaps more than a trillion. This is because smells are not detected one by one. Instead, each smell is a mixture that triggers a particular pattern of cells, and the brain learns to recognize these patterns, much like letters forming countless words.\n\nSmell is closely linked to memory and emotion. The part of the brain that handles smell sits near the parts that store memories and feelings. This is why a single scent, like a certain food or perfume, can suddenly bring back a strong memory from long ago.\n\nSmell also protects us. The bad smell of spoiled food or smoke warns us of danger before we can see it. Quiet and often ignored, our sense of smell shapes how we enjoy food, sense the world, and remember our lives.",
        summaryJa: "嗅覚の仕組みについて。焼きたてのパンや花、雨のにおいは、一瞬で喜びや警告、記憶をもたらす。嗅覚は最も古く強力な感覚の一つだが、仕組みを考えることは少ない。鼻はどうやって周りの空気を豊かなにおいの世界に変えるのか。においを放つものは皆、分子という小さな見えない粒子を出し空気中を漂う。息を吸うと分子が鼻の奥へ上る。鼻の高い所には無数の特別な感知細胞に覆われた小さな領域があり、特定の分子が触れると細胞が脳へ信号を送り、脳がにおいを認識する。人は一兆以上ともいわれる膨大な数のにおいを区別できる。においは一つずつでなく、混合物が特定の細胞の組み合わせを刺激し、脳が文字が無数の語を作るようにその模様を覚えるからだ。嗅覚は記憶や感情と深く結びつき、脳の嗅覚を扱う部分が記憶や感情の部分の近くにあるため、ある香りが昔の記憶を呼び起こす。腐った食べ物や煙のにおいは危険を知らせ守ってくれる。",
        quiz: [
          { q: "What travels into the nose when we smell something?", options: ["Tiny invisible particles called molecules", "Small stones", "Beams of light"], answer: 0 },
          { q: "Why can a single scent bring back a strong memory?", options: ["The brain's smell area sits near memory and emotion areas", "Smells contain words", "The nose stores memories"], answer: 0 },
          { q: "How does smell protect us?", options: ["Bad smells warn us of danger like spoiled food or smoke", "It makes us run faster", "It turns off our eyes"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-10-26",
    passages: [
      {
        id: "d1026-1",
        title: "Why Companies Invest in the Future",
        level: "★★☆",
        genre: "ビジネス",
        text: "When a company earns money, it has a choice. It can keep the profit now, or it can spend some of it to build for the future. This second choice is called investment. A business might build a new factory, buy better machines, or spend money on research to create new products. Why would a company give up money today for an uncertain reward tomorrow?\n\nThe answer is growth. A company that only takes its profits and never invests may do well for a while, but it will slowly fall behind. Machines wear out, products grow old, and competitors improve. By investing, a company keeps itself strong and ready for the future.\n\nThere are different kinds of investment. Building factories or buying equipment helps a company make more, or make things better. Spending on research and new ideas can lead to products that do not even exist yet. Training workers is an investment too, because skilled people do better work.\n\nInvestment always carries risk. A new factory is expensive, and a new product might fail. The reward is not certain. This is why companies study carefully before they invest, trying to balance risk against possible gain.\n\nGood investment benefits more than the company. New factories create jobs, and new products can improve daily life. When businesses invest wisely, whole economies can grow.\n\nIn the end, investment is really about patience and belief, giving up a smaller reward now in the hope of a greater one later. It is how a company plants the seeds of its own future.",
        summaryJa: "企業が将来に投資する理由について。企業は利益を得ると選択に迫られる。今の利益を取っておくか、一部を使って将来のために築くか。この二つ目が投資だ。新工場の建設、より良い機械の購入、新製品のための研究などがある。なぜ今のお金を手放して不確実な将来の報酬を狙うのか。答えは成長だ。利益を取るだけで投資しない企業は一時はよくても徐々に遅れる。機械は摩耗し、製品は古び、競合は改善する。投資すれば強さを保ち将来に備えられる。工場や設備はより多く・より良く作るのに役立ち、研究はまだ存在しない製品を生み、従業員の訓練も投資だ。投資には必ずリスクがあり報酬は不確実なので、企業は慎重に調べ危険と利益を比べる。良い投資は雇用を生み生活を改善し、経済全体を成長させる。投資は忍耐と信念の問題だ。",
        quiz: [
          { q: "What is 'investment' for a company?", options: ["Spending some profit now to build for the future", "Keeping all profit and spending nothing", "Giving money away freely"], answer: 0 },
          { q: "What happens to a company that never invests?", options: ["It slowly falls behind", "It always wins", "It stays strong forever without change"], answer: 0 },
          { q: "Why does investment carry risk?", options: ["It is expensive and the reward is not certain", "It always succeeds", "It costs nothing"], answer: 0 }
        ]
      },
      {
        id: "d1026-2",
        title: "How Does Email Travel Across the World?",
        level: "★★☆",
        genre: "テクノロジー",
        text: "You write a message, press \"send,\" and within seconds your email appears on a friend's screen on the other side of the world. It feels instant and simple. But in those few seconds, your message makes a remarkable journey through a hidden network that spans the entire planet.\n\nWhen you send an email, your message does not travel in one piece. Instead, it is broken into small parts called packets. Each packet is like a page of a letter, labelled with the address of where it is going and where it came from. These packets travel separately across the internet and are put back together at the other end.\n\nThe packets move through many machines. First, your message goes to a mail server, a powerful computer that handles email. That server finds the address of your friend's email provider and passes the message along. The packets may cross through many countries, travelling as flashes of light through cables, some of them lying deep under the ocean.\n\nSpecial addresses make this possible. Every email address has two parts, joined by the \"at\" sign. The part after it tells the system which company handles that person's mail, so the message knows where to go.\n\nFinally, the email arrives at your friend's mail server and waits there until they open their inbox. All of this happens automatically, thousands of times every second, around the world. The next time you send an email, remember the vast, invisible journey your few words take to arrive.",
        summaryJa: "メールが世界を渡る仕組みについて。メッセージを書いて「送信」を押すと、数秒で地球の反対側の友人の画面に届く。瞬時で単純に感じるが、その数秒でメッセージは地球全体に広がる見えない網を通る見事な旅をする。メールを送ると、メッセージは一つの塊でなくパケットという小さな部分に分けられる。各パケットは手紙の一ページのようで、宛先と差出元の住所が付く。別々にインターネットを渡り、受信側で元に戻される。パケットは多くの機械を通る。まずメールサーバーという強力なコンピューターへ行き、友人のメール業者の住所を見つけて渡す。海底深くのケーブルを含め、光として多くの国を越える。メールアドレスは「＠」で二部に分かれ、後ろの部分が誰の業者が扱うかを示す。最後に友人のサーバーに届き、受信箱を開くまで待つ。",
        quiz: [
          { q: "How does an email travel across the internet?", options: ["Broken into small parts called packets", "As one large piece only", "By being printed and mailed"], answer: 0 },
          { q: "What is a mail server?", options: ["A powerful computer that handles email", "A type of envelope", "A delivery truck"], answer: 0 },
          { q: "What does the part after the 'at' sign in an email address tell the system?", options: ["Which company handles that person's mail", "The person's age", "The weather"], answer: 0 }
        ]
      },
      {
        id: "d1026-3",
        title: "Why the World Uses Shared Measurements",
        level: "★★★",
        genre: "世界情勢",
        text: "Imagine buying a kilogram of rice in one country and finding that a \"kilogram\" there is different from a kilogram somewhere else. Trade would be chaos, and no one could trust a number. To avoid this, the countries of the world have agreed on shared systems of measurement. It is a quiet form of cooperation that touches almost everything we do.\n\nLong ago, measurements were different everywhere. A \"foot\" might be the length of a local ruler's foot, and a town's weights might not match the next town's. As trade and science grew, these differences caused confusion, arguments, and mistakes. The world needed a common language of numbers.\n\nThe answer was the metric system, built on units like the meter and the kilogram. Most countries now use it, and scientists everywhere use it too. Because the units are shared and carefully defined, a measurement made in one country means exactly the same in another.\n\nShared standards go beyond weights and lengths. The world also agrees on how to measure time, so clocks everywhere can match. There are even shared rules for the shapes of screws, the safety of toys, and the size of shipping containers, which lets goods move smoothly between nations.\n\nKeeping these standards is the work of international groups, where experts from many countries meet and agree. It is not exciting news, but it is essential. Every time a product fits, a clock agrees, or a trade is fair, we quietly enjoy the benefit of a world that measures together.",
        summaryJa: "世界が共通の単位を使う理由について。ある国で米1キログラムを買い、その「キログラム」が別の場所と違ったら、取引は混乱し誰も数字を信じられない。これを避けるため、世界の国々は共通の計量体系に合意した。ほぼ全ての営みに関わる静かな協力だ。昔は計量が場所ごとに異なり、「フィート」は地元の支配者の足の長さ、町ごとに重さも違った。取引と科学が発展すると、違いは混乱や争い、誤りを生んだ。世界には共通の数の言語が必要だった。答えがメートルやキログラムに基づくメートル法で、今や多くの国と科学者が使う。単位が共有され厳密に定義されるため、ある国の測定値が別の国でも全く同じ意味になる。時間の測り方、ねじの形、玩具の安全、輸送コンテナの寸法にも共通規則があり、物がなめらかに国境を越える。国際機関が維持する。",
        quiz: [
          { q: "Why did the world need shared measurements?", options: ["Different measurements caused confusion in trade and science", "To make numbers harder", "Because no one measured anything"], answer: 0 },
          { q: "What is the metric system built on?", options: ["Units like the meter and the kilogram", "The length of a king's foot", "Random numbers"], answer: 0 },
          { q: "What is one benefit of shared standards beyond weights and lengths?", options: ["Goods like shipping containers move smoothly between nations", "Clocks never agree", "Trade becomes unfair"], answer: 0 }
        ]
      },
      {
        id: "d1026-4",
        title: "Japanese Martial Arts: The Way of Budo",
        level: "★★☆",
        genre: "日本",
        text: "When people think of Japanese martial arts, they may picture judo throws, karate kicks, or the swords of kendo. Japan has given the world several famous fighting arts. But these arts are about far more than fighting. Together they are known as budo, which means the martial way, and the word way is the key to understanding them.\n\nMany Japanese martial arts have names ending in do, meaning way or path: judo, kendo, aikido. This is not an accident. It shows that the art is seen as a lifelong path of self-improvement, not just a method of self-defense. A student trains the body, but also the mind and character.\n\nEach art has its own style. Judo focuses on throws and holds, using an opponent's strength against them. Kendo is the way of the sword, practiced today with bamboo swords and armor. Karate uses strikes with the hands and feet, while aikido turns an attacker's energy away gently.\n\nDespite their differences, these arts share common values. Respect is central: students bow before and after practice, showing respect for their teacher and their partner. Self-control, patience, and effort are valued more highly than winning. A good martial artist stays calm and never uses their skill to harm others needlessly.\n\nFor this reason, millions of people, including many children, practice budo not to become fighters, but to grow stronger in body and spirit. The true goal is not to defeat others, but to improve oneself, one quiet practice at a time.",
        summaryJa: "日本の武道について。日本の武術というと、柔道の投げ技、空手の蹴り、剣道の剣を思い浮かべるかもしれない。日本は世界にいくつもの有名な武術を与えた。だがこれらは戦い以上のものだ。まとめて「武道」と呼ばれ、「道」という語が理解の鍵だ。柔道・剣道・合気道など、多くは「道」で終わる名を持つ。これは偶然でなく、単なる護身術でなく生涯の自己研鑽の道とみなされることを示す。学ぶ者は体だけでなく心と人格も鍛える。柔道は相手の力を利用した投げや固め、剣道は今日は竹刀と防具で行う剣の道、空手は手足の打撃、合気道は相手の力をやさしくそらす。違いはあれど敬意という共通の価値を持ち、稽古の前後にお辞儀する。克己・忍耐・努力が勝利より重んじられる。多くの子どもも含め、人は強さを心身に育てるために武道を行う。",
        quiz: [
          { q: "What does the word 'budo' mean?", options: ["The martial way", "A type of sword", "A kind of food"], answer: 0 },
          { q: "Why do many martial arts have names ending in 'do' (way)?", options: ["They are seen as a lifelong path of self-improvement", "They are named after a city", "It means 'fast'"], answer: 0 },
          { q: "What is valued more highly than winning in budo?", options: ["Self-control, patience, and effort", "Harming others", "Being the loudest"], answer: 0 }
        ]
      },
      {
        id: "d1026-5",
        title: "Why Does Ice Float on Water?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "Drop an ice cube into a glass of water, and it floats. We see this so often that we never question it. Yet it is actually very strange. For almost every other substance in the world, the solid form is heavier than the liquid form and sinks. Water is a rare and important exception. Why does ice float?\n\nTo understand this, think about what makes something float or sink. An object floats if it is less dense than the liquid around it, meaning the same amount of space holds less weight. So the real question is: why is ice less dense than water?\n\nWhen most liquids freeze, their tiny particles pack closely together, making the solid denser. Water is different. As it freezes, its particles join in a special open pattern, with more empty space between them. This means that ice takes up slightly more room than the same amount of water, making it lighter for its size. So it floats.\n\nThis small, strange fact has huge effects on our planet. In winter, a layer of ice forms on top of a lake or pond, but the water below stays liquid. This floating lid of ice protects the fish and plants underneath, letting them survive the cold. If ice sank, lakes would freeze solid from the bottom up, and much life could not survive.\n\nSo the simple sight of a floating ice cube hides a deep truth: a tiny quirk of water helps make life on Earth possible.",
        summaryJa: "氷が水に浮く理由について。氷を水の入ったコップに落とすと浮く。よく見る光景なので疑わないが、実はとても奇妙だ。世界のほぼ全ての物質では、固体は液体より重く沈む。水はまれで重要な例外だ。なぜ氷は浮くのか。浮沈を決めるのは密度で、周りの液体より密度が低い（同じ体積で軽い）と浮く。だから問いは、なぜ氷は水より密度が低いのか、だ。多くの液体は凍ると粒子が密に詰まり固体は密度が高くなる。水は違い、凍るとき粒子が隙間の多い特別な開いた形で結びつく。つまり氷は同じ量の水より少し大きな場所を占め、体積の割に軽くなり浮く。この小さな事実は地球に大きな影響を持つ。冬、湖の表面に氷の層ができても下の水は液体のままで、氷の蓋が魚や植物を守り寒さを越させる。もし氷が沈めば湖は底から凍り、多くの命が生きられない。",
        quiz: [
          { q: "When does an object float?", options: ["When it is less dense than the liquid around it", "When it is heavier than the liquid", "Only when it is warm"], answer: 0 },
          { q: "Why is ice less dense than water?", options: ["Its particles freeze in an open pattern with more empty space", "It has no particles", "It is always hot"], answer: 0 },
          { q: "Why is floating ice important for a lake in winter?", options: ["It protects the fish and plants in the water below", "It makes the lake disappear", "It heats the water"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-10-25",
    passages: [
      {
        id: "d1025-1",
        title: "Why Saving Money Matters",
        level: "★★☆",
        genre: "ビジネス",
        text: "Most of us earn money and then spend it on the things we need and want. But wise people also do something else: they save. Saving means keeping some of your money instead of spending all of it. It may sound simple, but the habit of saving is one of the most powerful tools for a secure and happy life.\n\nWhy is saving so important? The first reason is safety. Life is full of surprises, and some are expensive. A car may break down, or a person may suddenly lose a job. People who have saved money, often called an \"emergency fund,\" can face these problems calmly. Those who have not may fall into debt.\n\nSaving also helps us reach our goals. Big dreams, such as travelling, studying, or buying a home, usually cost more than one month's pay. By saving a little regularly, a person slowly builds the money needed to make these dreams real.\n\nThere is also a quieter benefit: peace of mind. Knowing you have money set aside reduces worry and gives you more freedom to make choices, such as changing jobs or trying something new.\n\nHow can someone save? Experts often suggest a simple rule: save a small part of your income first, before spending the rest, rather than hoping money will be left over at the end. Even a small amount, saved regularly, grows over time.\n\nSaving is not about being rich. It is about being prepared, and about giving your future self a gift.",
        summaryJa: "貯金が大切な理由について。多くの人はお金を稼ぎ、必要な物や欲しい物に使う。だが賢い人はもう一つのことをする。貯めるのだ。貯金とは全部使わず一部を取っておくこと。単純に聞こえるが、貯める習慣は安心で幸せな人生の最も強力な道具の一つだ。第一の理由は安全で、人生は予想外の出費に満ちる。車が壊れたり急に職を失ったりしても、「緊急資金」を貯めた人は落ち着いて対処でき、ない人は借金に陥りやすい。貯金は目標達成も助ける。旅行や勉強、住宅購入など大きな夢は一か月の給料より高く、少しずつ貯めれば実現できる。心の平安という利点もあり、蓄えがあると不安が減り選択の自由が増す。コツは、余ったら貯めるのでなく使う前にまず一部を貯めること。少額でも定期的に貯めれば時とともに増える。",
        quiz: [
          { q: "What does saving money mean?", options: ["Keeping some of your money instead of spending it all", "Spending everything you earn", "Borrowing more money"], answer: 0 },
          { q: "What is an 'emergency fund' for?", options: ["Facing sudden, expensive problems calmly", "Buying luxury items only", "Paying no attention to money"], answer: 0 },
          { q: "What simple rule do experts often suggest?", options: ["Save a part of your income first, before spending", "Spend first and hope money is left", "Never save anything"], answer: 0 }
        ]
      },
      {
        id: "d1025-2",
        title: "How Do Drones Fly?",
        level: "★★☆",
        genre: "テクノロジー",
        text: "In recent years, small flying machines called drones have become a common sight. They film videos from the sky, deliver packages, inspect bridges, and help farmers check their fields. Unlike an airplane or a helicopter, a drone has no pilot on board. So how does this little machine lift itself into the air and fly so steadily?\n\nMost drones have four arms, each with a spinning blade called a rotor, which is why they are often called \"quadcopters.\" Each rotor works like a tiny propeller. As the blades spin fast, they push air downward, and this creates an upward force that lifts the drone. The faster the blades spin, the higher the drone rises.\n\nThe clever part is control. To move, a drone changes the speed of each rotor separately. If the rotors at the back spin faster than those at the front, the drone tilts forward and flies ahead. By carefully balancing the four rotors, the drone can rise, turn, hover in place, or move in any direction.\n\nA small computer inside the drone makes constant tiny adjustments, many times each second, to keep it steady. Sensors tell the computer how the drone is tilting, and it corrects itself faster than a human could. A person on the ground controls the drone with a remote, or sometimes a flight is planned in advance.\n\nLight, cheap, and able to reach difficult places, drones have opened up new possibilities in photography, delivery, farming, and rescue, changing the way we see and reach the world around us.",
        summaryJa: "ドローンが飛ぶ仕組みについて。近年、ドローンという小さな飛行機械をよく見かける。空から撮影し、荷物を届け、橋を点検し、農家の畑確認も助ける。飛行機やヘリと違い操縦士が乗っていない。この小さな機械はどうやって浮き、安定して飛ぶのか。多くのドローンは四本の腕を持ち、それぞれに回転する羽根（ローター）があり、だから「クアッドコプター」と呼ばれる。各ローターは小さなプロペラのように速く回って空気を下へ押し、上向きの力でドローンを持ち上げる。巧妙なのは制御で、各ローターの速度を別々に変える。後ろが前より速く回ると前へ傾いて進む。四つのバランスで上昇・旋回・空中停止・移動ができる。内部の小さなコンピューターが毎秒何度も微調整し、センサーの情報で人より速く姿勢を正す。地上から遠隔操作するか、飛行をあらかじめ計画する。",
        quiz: [
          { q: "How does a drone lift itself into the air?", options: ["Spinning blades push air downward, creating an upward force", "It fills with hot air", "It jumps off a ramp"], answer: 0 },
          { q: "How does a drone move forward?", options: ["By changing the speed of each rotor separately", "By flapping wings", "By using wheels"], answer: 0 },
          { q: "What keeps a drone steady?", options: ["A small computer making constant tiny adjustments", "A human holding it", "Strong glue"], answer: 0 }
        ]
      },
      {
        id: "d1025-3",
        title: "Why Education Matters Around the World",
        level: "★★★",
        genre: "世界情勢",
        text: "Most children today go to school, learning to read, write, and count. For many of us, this seems completely normal. Yet around the world, millions of children still cannot go to school, or must leave early. Making sure that every child can learn has become one of the great shared goals of our time.\n\nWhy does education matter so much? For an individual, it opens doors. A person who can read and write, and who has useful skills, can find better work, earn more, and make healthier choices. Education helps people understand the world and take part in their society.\n\nEducation also helps whole countries. A nation with educated people can build stronger businesses, better hospitals, and fairer systems. For this reason, many consider education one of the best ways to reduce poverty over the long term.\n\nBut not every child has the chance to learn. In some poorer regions, families cannot afford books or uniforms, schools are far away, or children must work to help their families. In some places, girls in particular have fewer chances than boys, though this is slowly changing.\n\nGovernments and international groups work to close this gap. They build schools, train teachers, and help pay the costs so that more children can attend. New technology, such as lessons delivered by phone or radio, can reach children in faraway places.\n\nThe goal is simple but powerful: that every child, everywhere, should have the chance to learn. When a child is educated, the benefits spread to their family, their country, and the whole world.",
        summaryJa: "世界で教育が大切な理由について。今日、多くの子どもは学校へ行き、読み書きと計算を学ぶ。私たちには当たり前に思えるが、世界では今も何百万もの子どもが学校へ行けず、早くに辞めざるを得ない。全ての子が学べるようにすることは現代の大きな共通目標の一つだ。個人には扉を開く。読み書きができ役立つ技能があれば、より良い仕事に就き、多く稼ぎ、健康的な選択もできる。教育は世界の理解と社会参加を助ける。国にとっても、教育を受けた人がいれば、より強い企業や良い病院、公正な制度を築ける。だから長期的に貧困を減らす最良の方法の一つとされる。だが全ての子に機会はなく、貧しい地域では本や制服を買えず、学校が遠く、家の手伝いで働く子もいる。特に女子は機会が少ないが徐々に変わっている。各国や国際団体が学校建設や教員養成、費用援助で格差を埋める。電話やラジオの授業も遠隔地に届く。",
        quiz: [
          { q: "How does education help an individual?", options: ["It opens doors to better work and choices", "It makes life harder", "It has no effect"], answer: 0 },
          { q: "Why is education seen as a way to reduce poverty?", options: ["Educated people build stronger businesses and systems", "It costs too much to help anyone", "It keeps people poor"], answer: 0 },
          { q: "What is one reason some children cannot go to school?", options: ["Families cannot afford books, or schools are far away", "They already know everything", "Schools are banned everywhere"], answer: 0 }
        ]
      },
      {
        id: "d1025-4",
        title: "Haiku: Japan's Short Poems",
        level: "★★☆",
        genre: "日本",
        text: "Imagine trying to capture a whole moment, a feeling, or a season, in just a few words. This is the art of haiku, one of the shortest and most famous forms of poetry in the world. Born in Japan centuries ago, a haiku uses very few words to paint a single, clear picture in the reader's mind.\n\nA traditional haiku follows a simple pattern of sound. In Japanese, it has three parts, with five, then seven, then five sound-units, making seventeen in all. This tight rule forces the poet to choose every word with great care. There is no room for anything unnecessary.\n\nHaiku usually describe nature and the seasons. Many include a special word, called a kigo, that shows the time of year, such as cherry blossoms for spring or snow for winter. A good haiku often captures a small, quiet moment: a frog jumping into a pond, the first cold wind of autumn, or the light of the moon.\n\nWhat makes haiku powerful is what they leave out. Instead of explaining a feeling, a haiku shows a simple scene and lets the reader feel it for themselves. In this way, a few words can open a wide world of thought and emotion.\n\nToday, people all over the world write haiku, in many languages. Writing one is a wonderful exercise in paying attention, to nature, to language, and to the present moment. In seventeen sounds, a haiku reminds us that even the smallest moment can hold great beauty.",
        summaryJa: "日本の短詩、俳句について。ある瞬間や感情、季節をわずかな言葉で捉えることを想像してほしい。これが俳句の芸術で、世界で最も短く有名な詩の形の一つだ。何世紀も前に日本で生まれ、ごく少ない言葉で読者の心に一つの鮮明な絵を描く。伝統的な俳句は音の単純な型に従い、日本語では五・七・五の三部で計十七音。この厳しい規則が詩人に一語一語を慎重に選ばせ、不要なものを入れる余地はない。多くは自然や季節を描き、季節を示す「季語」（春の桜、冬の雪など）を含むことが多い。良い俳句は、池に飛び込む蛙、秋の初めの冷たい風、月の光など、小さく静かな瞬間を捉える。力の源は省略で、感情を説明せず情景だけ示し読者に感じさせる。今や世界中で多くの言語で作られ、自然と言葉と「今」に注意を向ける素晴らしい練習だ。",
        quiz: [
          { q: "What is the traditional sound pattern of a Japanese haiku?", options: ["Five, seven, five sound-units", "Ten lines of ten words", "No pattern at all"], answer: 0 },
          { q: "What is a 'kigo'?", options: ["A word that shows the time of year", "A type of drum", "A long speech"], answer: 0 },
          { q: "What makes haiku powerful?", options: ["What they leave out, letting the reader feel the scene", "Explaining every feeling in detail", "Using thousands of words"], answer: 0 }
        ]
      },
      {
        id: "d1025-5",
        title: "How Do Spiders Make Their Webs?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "On a dewy morning, you might see a spider's web shining between two branches, perfect and round. It looks delicate, yet it is one of nature's strongest and most clever creations. How does a tiny spider build such a complex trap, with no tools and no lessons?\n\nThe secret is silk. Inside its body, a spider makes a special liquid. When the spider pushes this liquid out through tiny openings, it turns into a thread of silk as it meets the air. This silk is amazingly strong for its weight, stronger than a thread of steel of the same thickness, yet it can also stretch without breaking.\n\nBuilding a web takes careful steps. First, the spider must cross the gap between two points. It often does this by releasing a light thread that floats on the breeze until it catches on the other side. Once this first bridge is fixed, the spider walks across it and builds a frame, then adds lines that reach into the center like the spokes of a wheel. Finally, it lays a spiral of sticky silk to catch insects.\n\nCleverly, not all the silk is sticky. The spider walks only on the non-sticky lines, so it does not get caught in its own trap. When an insect flies into the sticky spiral, the spider feels the web shake and rushes out.\n\nA spider builds all this from memory and instinct, often in less than an hour. The web it makes is a quiet masterpiece of natural engineering.",
        summaryJa: "クモが巣を作る仕組みについて。露の朝、二本の枝の間に丸く完璧なクモの巣が輝くのを見るかもしれない。繊細に見えるが、自然で最も強く巧妙な創造物の一つだ。小さなクモが道具も教えもなく、どうやってこんな複雑な罠を作るのか。鍵は糸だ。体内で特別な液を作り、小さな穴から押し出すと空気に触れて糸になる。この糸は重さの割に驚くほど強く、同じ太さの鋼より強いのに切れずに伸びる。作るには手順が要る。まず二点の間を渡らねばならず、軽い糸を風に乗せて反対側に引っかける。この最初の橋が固定されると、クモは渡って枠を作り、車輪の輻のように中心へ向かう線を足し、最後に虫を捕らえる粘る糸の渦を張る。巧妙にも全部が粘るのではなく、クモは粘らない線だけを歩き自分の罠にかからない。虫がかかると揺れを感じて駆け出す。記憶と本能で一時間足らずで作る。",
        quiz: [
          { q: "What is a spider's web made of?", options: ["Silk the spider makes inside its body", "Plastic string", "Thin metal wire"], answer: 0 },
          { q: "How does a spider often cross the first gap?", options: ["By releasing a light thread that floats on the breeze", "By jumping very far", "By building a bridge of wood"], answer: 0 },
          { q: "Why doesn't a spider get caught in its own web?", options: ["It walks only on the non-sticky lines", "It never touches the web", "Its feet are made of glue"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-10-24",
    passages: [
      {
        id: "d1024-1",
        title: "Why Teamwork Matters at Work",
        level: "★★☆",
        genre: "ビジネス",
        text: "In almost every workplace, people work in teams. A project may need a designer, a planner, a seller, and a manager, each doing a different part. Alone, no single person could finish the whole job well. This is why teamwork is one of the most important ideas in business.\n\nWhy does working as a team help? The first reason is that people have different skills. One person may be good with numbers, another with words, and another with people. When they combine their strengths, the team can do things that none of them could do alone. A good team is more than the sum of its members.\n\nTeamwork also brings better ideas. When people share their thoughts, they can build on one another's suggestions and spot mistakes before they cause harm. A problem that seems impossible to one person may be solved quickly when several minds think together.\n\nBut good teamwork does not happen by accident. It needs clear communication, so everyone knows who is doing what. It needs trust, so people are not afraid to share ideas or admit mistakes. And it needs respect, so that every voice, even a quiet one, is heard.\n\nOf course, teams can face problems too, such as disagreements or members who do not share the work fairly. Good leaders and open communication help solve these.\n\nIn the end, teamwork reflects a simple truth: most great things are not built by one person, but by many people working together toward a shared goal.",
        summaryJa: "職場でチームワークが大切な理由について。ほぼどの職場でも人はチームで働く。あるプロジェクトには設計者・企画者・営業・管理者が必要で、それぞれが別の部分を担う。一人では全体をうまく仕上げられない。だからチームワークはビジネスで最も重要な考えの一つだ。役立つ理由の一つは、人それぞれ技能が違うこと。数字が得意な人、言葉が得意な人、人づきあいが得意な人が強みを合わせると、一人ではできないことができる。良いチームは構成員の総和以上だ。意見を出し合えば互いの案を発展させ、害が出る前に誤りに気づける。だが良いチームワークは偶然には生まれず、明確な意思疎通・信頼・敬意が要る。意見の対立や不公平な分担の問題もあり、良いリーダーと率直な対話が助ける。多くの偉業は一人でなく皆で成される。",
        quiz: [
          { q: "Why does working as a team help?", options: ["People combine their different skills", "One person does everything alone", "Nobody shares ideas"], answer: 0 },
          { q: "What does good teamwork need?", options: ["Clear communication, trust, and respect", "Secrecy and fear", "No communication at all"], answer: 0 },
          { q: "What simple truth does teamwork reflect?", options: ["Most great things are built by many people together", "One person builds everything", "Teams never succeed"], answer: 0 }
        ]
      },
      {
        id: "d1024-2",
        title: "How Noise-Cancelling Headphones Work",
        level: "★★☆",
        genre: "テクノロジー",
        text: "On a noisy train or a busy street, some people wear special headphones that seem to make the world go quiet. These are noise-cancelling headphones, and they do something that sounds almost impossible: they use sound to remove sound. How can adding more noise actually make things quieter?\n\nTo understand this, we need to remember that sound travels in waves, a pattern of rises and falls moving through the air. When a wave of sound reaches your ear, you hear it. The clever idea behind noise-cancelling headphones is that two waves can cancel each other out. If one wave rises at exactly the moment another falls, they meet and flatten, leaving silence.\n\nInside the headphones, a tiny microphone listens to the noise around you, such as the hum of an engine. A small computer instantly creates a new sound wave that is the exact opposite of that noise. When this opposite wave is played into your ears, it meets the unwanted noise and cancels much of it out. The steady hum seems to disappear.\n\nThis method works best on low, steady sounds, like the drone of an airplane. Sudden, sharp sounds, like a voice, are harder to cancel completely. That is why these headphones are popular with travelers who want to rest on long journeys.\n\nBy quietly producing the opposite of noise, these headphones create a small island of calm. They are a clever example of how understanding the science of sound can make everyday life more peaceful.",
        summaryJa: "ノイズキャンセリング・ヘッドホンの仕組みについて。騒がしい電車や通りで、世界を静かにするような特別なヘッドホンを着ける人がいる。これがノイズキャンセリング・ヘッドホンで、音を使って音を消すという一見不可能なことをする。なぜ音を足すと静かになるのか。音は波として空気中を伝わる上下の模様で、耳に届くと聞こえる。巧妙なのは、二つの波が互いに打ち消し合える点だ。一方が上がる瞬間にもう一方が下がれば、出会って平らになり静けさが残る。ヘッドホン内の小さなマイクが周囲の騒音（エンジンの唸りなど）を聞き、小さなコンピューターが瞬時にその正反対の波を作る。それを耳に流すと騒音と出会い大部分を打ち消す。低く一定の音に最も効き、声のような突発音は完全には消しにくい。だから長旅で休みたい旅行者に人気だ。",
        quiz: [
          { q: "What clever idea do noise-cancelling headphones use?", options: ["Two sound waves can cancel each other out", "They make the ear sleep", "They block the ears with cotton"], answer: 0 },
          { q: "What does the tiny microphone inside do?", options: ["Listens to the noise around you", "Plays music only", "Measures temperature"], answer: 0 },
          { q: "What kind of sound is easiest to cancel?", options: ["Low, steady sounds like an engine hum", "Sudden voices", "No sound at all"], answer: 0 }
        ]
      },
      {
        id: "d1024-3",
        title: "What Happens at a Climate Summit?",
        level: "★★★",
        genre: "世界情勢",
        text: "Every year, leaders and experts from almost every country travel to a single city for a large meeting about one shared problem: the changing climate. These gatherings are often called climate summits. Thousands of people attend, and the world watches closely. But what actually happens at such a meeting, and why does it matter?\n\nThe basic reason for a climate summit is simple. The Earth's climate is warming, mainly because of gases released when we burn fuels like coal and oil. This affects every country, through stronger storms, droughts, and rising seas. Since no nation can solve the problem alone, countries must talk and plan together.\n\nAt a summit, representatives discuss how much each country should reduce its harmful gases, and how fast. Richer nations, which have released the most gases over history, are often asked to do more and to help poorer nations that suffer the most. Countries also promise money to help communities prepare for a changing climate.\n\nThese meetings are not easy. Nations have different needs and interests, and progress can feel slow. Agreements are often weaker than scientists hope. Some people leave disappointed.\n\nYet climate summits still matter. They keep the problem in the public eye, push countries to set goals, and allow the world to measure who is keeping their promises. Step by step, imperfect as it is, this is how a problem too big for any one country is slowly, carefully faced by all of them together.",
        summaryJa: "気候サミットで何が起こるかについて。毎年、ほぼ全ての国の指導者や専門家が一つの都市に集まり、共通の問題「気候変動」を話し合う。こうした会合はよく気候サミットと呼ばれ、何千人も参加し世界が注視する。開催理由は単純だ。地球の気候は主に石炭や石油を燃やす際に出る気体のために温暖化し、強い嵐や干ばつ、海面上昇で全ての国に影響する。一国では解決できないため各国が共に話し計画する。サミットでは、各国がどれだけ速く有害な気体を減らすべきか議論する。歴史上最も多く排出した豊かな国はより多くの対策と、最も苦しむ貧しい国への支援を求められることが多い。各国は気候変動への備えを助ける資金も約束する。利害が異なり進みは遅く合意は期待より弱いこともあるが、問題を世に示し目標を設定させ約束の履行を測れる。",
        quiz: [
          { q: "Why is the Earth's climate warming, mainly?", options: ["Gases released when we burn fuels like coal and oil", "The Moon moving away", "Too much rain"], answer: 0 },
          { q: "What are richer nations often asked to do?", options: ["Do more and help poorer nations", "Do nothing", "Burn more fuel"], answer: 0 },
          { q: "Why do climate summits still matter despite slow progress?", options: ["They push countries to set goals and keep the problem in view", "They end all problems at once", "They are only parties"], answer: 0 }
        ]
      },
      {
        id: "d1024-4",
        title: "Japanese Pottery and the Beauty of Imperfection",
        level: "★★☆",
        genre: "日本",
        text: "In many cultures, a perfect, smooth, and even object is seen as the most beautiful. In Japan, however, there is a different idea. A handmade tea bowl that is slightly uneven, with small marks from the maker's hands, can be treasured as more beautiful than a perfect machine-made cup. This idea lies at the heart of traditional Japanese pottery.\n\nJapan has made pottery for thousands of years, and different regions are famous for their own styles, clays, and colors. Some pottery is smooth and refined, while other kinds are rough and earthy. What they often share is a respect for natural materials and the marks of the hand that made them.\n\nBehind this is a deep idea sometimes called wabi-sabi, which finds beauty in things that are simple, natural, and imperfect. A crack, an uneven shape, or a change in color is not seen as a fault, but as a sign of character and of the passing of time.\n\nThis idea appears strongly in a repair method called kintsugi. When a bowl breaks, instead of hiding the damage, the pieces are joined with a special lacquer mixed with gold. The golden lines make the repair visible and even beautiful, turning the bowl's history into part of its charm.\n\nJapanese pottery teaches a gentle lesson: that nothing needs to be perfect to be valuable. A cup marked by time and use, like a person with a life's experiences, can hold a quiet beauty all its own.",
        summaryJa: "日本の陶芸と不完全の美について。多くの文化では、滑らかで均一な完璧な物が最も美しいとされる。だが日本には別の考えがある。少しゆがみ、作り手の指の跡が残る手作りの茶碗が、完璧な機械製より美しいと大切にされることがある。これが日本の伝統陶芸の核心だ。日本は何千年も陶器を作り、地域ごとに独自の様式・土・色で知られる。滑らかで洗練されたものも、素朴で土の質感が強いものもあるが、自然の素材と作り手の手の跡への敬意を共有することが多い。背景には「わびさび」と呼ばれる、簡素・自然・不完全なものに美を見出す深い考えがある。ひびやゆがみ、色の変化は欠点でなく、趣や時の流れの印とされる。割れた器を金入りの漆で継ぐ「金継ぎ」にも表れる。完璧でなくても価値があると教えてくれる。",
        quiz: [
          { q: "What idea lies at the heart of traditional Japanese pottery?", options: ["Beauty can be found in natural, imperfect things", "Only perfect machine-made cups are beautiful", "Pottery must never be touched"], answer: 0 },
          { q: "What is 'wabi-sabi'?", options: ["Finding beauty in simple, natural, imperfect things", "A type of clay", "A fast machine"], answer: 0 },
          { q: "What is 'kintsugi'?", options: ["Repairing broken pottery with gold-mixed lacquer", "Throwing away broken bowls", "Painting cups blue"], answer: 0 }
        ]
      },
      {
        id: "d1024-5",
        title: "Why Do We Have Fingerprints?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "Look closely at the tip of one of your fingers, and you will see tiny lines forming loops, arches, and swirls. These are your fingerprints. One famous fact about them is that no two people have exactly the same pattern, not even identical twins. But why do we have these strange little patterns at all?\n\nFingerprints form before we are even born, while a baby grows inside its mother. The exact pattern depends partly on our genes and partly on tiny, random events during growth. This is why the pattern is unique to each person, and why it stays the same for your whole life.\n\nFor a long time, scientists believed fingerprints helped us grip objects, like the tread on a tire. Newer research suggests the truth may be more surprising. The tiny ridges may actually help our sense of touch. As a finger moves across a surface, the ridges vibrate, sending richer signals to the brain and helping us feel fine details and textures.\n\nBecause each person's fingerprints are unique and unchanging, they have become very useful for identifying people. Police have long used them to solve crimes, and today many phones and locks can be opened with a simple touch of a finger.\n\nSo these small patterns on our fingertips are more than just marks. They help us feel the world, they make each of us one of a kind, and they have quietly become one of the most trusted ways to tell one person from another.",
        summaryJa: "指紋がある理由について。指先をよく見ると、輪や弓、渦を作る細い線がある。これが指紋だ。有名なのは、一卵性双生児でさえ全く同じ模様の人はいないという事実だ。だがなぜこんな模様があるのか。指紋は生まれる前、母の胎内で育つ間に形づくられる。正確な模様は一部は遺伝子に、一部は成長中の小さな偶然による。だから各人に固有で、一生変わらない。長く科学者は指紋がタイヤの溝のように物をつかむのを助けると考えたが、新しい研究ではもっと意外かもしれないと示す。細い隆起は触覚を助け、指が表面を動くと隆起が振動し、脳へ豊かな信号を送り細かな質感を感じさせるという。固有で変わらないため人の識別に役立ち、警察の捜査やスマホ・錠の指紋認証に使われる。",
        quiz: [
          { q: "What is famous about fingerprints?", options: ["No two people have exactly the same pattern", "Everyone has the same pattern", "They change every year"], answer: 0 },
          { q: "What does newer research suggest fingerprints may help with?", options: ["Our sense of touch", "Our hearing", "Our eyesight"], answer: 0 },
          { q: "Why are fingerprints useful for identifying people?", options: ["They are unique and do not change", "They are all identical", "They disappear quickly"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-10-23",
    passages: [
      {
        id: "d1023-1",
        title: "Why Negotiation Is an Important Skill",
        level: "★★☆",
        genre: "ビジネス",
        text: "Negotiation happens when two or more people with different wishes try to reach an agreement. It may sound like something only lawyers or business leaders do, but in truth, we all negotiate. Agreeing on a price, deciding where to eat with friends, or asking for more time on a task are all small negotiations. In business, the skill is especially valuable.\n\nMany people think negotiation means winning while the other side loses. Good negotiators know this is often a mistake. The best result is usually one where both sides feel satisfied, sometimes called a \"win-win.\" When both parties are happy, they are more likely to keep the agreement and to do business again in the future.\n\nHow can someone negotiate well? The first step is preparation. Before a talk, it helps to know clearly what you want, what you can offer, and what the other side might need. During the talk, listening is just as important as speaking. By understanding what the other person truly wants, you can often find a solution that helps you both.\n\nPatience and respect also matter. A calm, polite tone keeps the conversation friendly, even during disagreement. Rushing or using pressure may win once, but it can damage trust and future relationships.\n\nNegotiation is not about tricks; it is about communication and problem-solving. Whether you are agreeing on a business deal or simply planning a weekend, the ability to negotiate well helps you reach fair agreements and build stronger relationships with the people around you.",
        summaryJa: "交渉が重要な技能である理由について。交渉とは、異なる望みを持つ二人以上が合意を目指すときに起こる。弁護士や経営者だけのものに聞こえるが、実は誰もが交渉している。値段の合意、友人との食事場所決め、仕事の期限延長の依頼も小さな交渉だ。ビジネスでは特に価値が高い。多くの人は交渉を、相手が負けて自分が勝つことだと思うが、良い交渉者はそれが誤りだと知る。最良は双方が満足する「ウィンウィン」で、両者が満足すれば合意が守られ再び取引しやすい。上手に交渉するにはまず準備で、自分の望み・提供できるもの・相手の必要を把握する。話す時は聞くことも同じく大切だ。忍耐と敬意も重要で、焦りや圧力は一度は勝てても信頼を損なう。交渉は駆け引きでなく意思疎通と問題解決だ。",
        quiz: [
          { q: "What is a 'win-win' result?", options: ["One where both sides feel satisfied", "One where one side loses badly", "One where no one agrees"], answer: 0 },
          { q: "What is the first step to negotiating well?", options: ["Preparation", "Shouting loudly", "Leaving early"], answer: 0 },
          { q: "Why can using pressure be a problem?", options: ["It can damage trust and future relationships", "It always works forever", "It makes everyone happy"], answer: 0 }
        ]
      },
      {
        id: "d1023-2",
        title: "How a Camera Takes a Photo",
        level: "★★☆",
        genre: "テクノロジー",
        text: "With a phone in our pocket, most of us can take a photograph in an instant. We press a button, and a moment is saved forever. But behind that simple tap is a clever process that captures light and turns it into a picture. How does a camera actually work?\n\nThe most important idea is light. A camera cannot see in the dark, because a photograph is really a record of light. Every object we see is reflecting light, and a camera's job is to collect that light and save the pattern it makes.\n\nAt the front of every camera is a lens, a curved piece of glass. The lens gathers the light coming from a scene and bends it, focusing it to form a sharp image inside the camera. If the lens is not focused correctly, the picture looks blurry.\n\nLong ago, this light fell onto film coated with chemicals that changed when light hit them. Today, most cameras are digital. The light falls instead on a small electronic chip called a sensor. The sensor is covered with millions of tiny points that each measure how much light and what color they receive. A computer inside the camera turns all these measurements into the image you see on the screen.\n\nA camera also controls how much light enters and for how long. In bright sun, it lets in less; in a dark room, more. By capturing light so carefully, a camera lets us freeze a single moment and keep it, long after the moment itself has passed.",
        summaryJa: "カメラが写真を撮る仕組みについて。ポケットのスマホで、私たちは一瞬で写真を撮れる。ボタンを押せば一瞬が永遠に保存される。だがその単純な操作の裏には、光を捉えて絵に変える巧妙な過程がある。最も重要なのは光だ。写真は実は光の記録で、暗闇では撮れない。見える物は皆光を反射し、カメラはその光を集めて模様を保存する。前面にはレンズという曲面ガラスがあり、景色からの光を集めて曲げ、内部に鮮明な像を結ぶ。焦点が合わないとぼやける。昔は光が化学物質を塗ったフィルムに当たったが、今はほとんどデジタルで、光はセンサーという小さな電子チップに当たる。センサーは無数の点で光量と色を測り、内部のコンピューターが像に変える。入る光の量と時間も調整し、明るい日は少なく暗い部屋では多く取り込む。一瞬を凍らせて残せる。",
        quiz: [
          { q: "What is a photograph really a record of?", options: ["Light", "Sound", "Smell"], answer: 0 },
          { q: "What does the lens do?", options: ["Gathers and focuses light to form a sharp image", "Stores the photos", "Makes the camera heavy"], answer: 0 },
          { q: "What does a digital camera's sensor do?", options: ["Measures how much light and what color it receives", "Plays music", "Prints the photo on film"], answer: 0 }
        ]
      },
      {
        id: "d1023-3",
        title: "How Countries Work Together to Protect the Oceans",
        level: "★★★",
        genre: "世界情勢",
        text: "The ocean covers more than two-thirds of our planet. It gives us food, produces much of the oxygen we breathe, and helps control the world's climate. Yet the ocean is in trouble. Pollution, overfishing, and warming waters are harming it. Because no single country owns the open sea, protecting the ocean has become a task the whole world must share.\n\nMuch of the ocean lies beyond any country's borders, in waters that belong to everyone and to no one. This makes rules hard to set and harder to enforce. To solve this, nations meet and agree on shared rules: how much fish may be caught, how waste may be dumped, and which areas should be protected.\n\nOne important effort is the creation of marine protected areas, special zones where fishing and other activities are limited so that sea life can recover. When countries agree to protect these areas together, fish populations can grow again, helping everyone in the long run.\n\nPollution is another shared problem. Plastic thrown away in one country can float across the sea and wash up on a beach far away. For this reason, nations work together to reduce plastic waste and clean the water.\n\nProgress is slow and not always easy, because countries have different needs and interests. But there have been real successes, such as the return of some whale populations once hunted almost to extinction. The ocean connects every coast on Earth, and caring for it is a duty, and a hope, that all nations share.",
        summaryJa: "各国が協力して海を守る仕組みについて。海は地球の3分の2以上を覆い、食料を与え、呼吸する酸素の多くを作り、気候の調整も助ける。だが海は危機にあり、汚染・乱獲・水温上昇が損なっている。外洋はどの国の所有でもないため、海の保護は世界全体が分担すべき課題だ。海の多くは国境の外、誰のものでもなく皆のものである海域にあり、規則の設定も施行も難しい。そこで各国は会合し、漁獲量や廃棄、保護区域などの共通規則に合意する。重要な取り組みが海洋保護区の設定で、漁などを制限し海の生き物を回復させる。各国が共同で守ると魚が再び増える。プラスチック汚染も共通問題で、ある国のごみが遠い浜に漂着するため協力して削減する。進みは遅いが、絶滅寸前だったクジラの回復など成果もある。",
        quiz: [
          { q: "Why is protecting the ocean a shared world task?", options: ["No single country owns the open sea", "Only one country has an ocean", "The ocean is tiny"], answer: 0 },
          { q: "What is a 'marine protected area'?", options: ["A zone where fishing and activities are limited so sea life can recover", "A place to dump waste", "A fishing competition"], answer: 0 },
          { q: "How can plastic from one country harm another?", options: ["It can float across the sea and wash up far away", "It stays in one place forever", "It turns into fish"], answer: 0 }
        ]
      },
      {
        id: "d1023-4",
        title: "Washi: Traditional Japanese Paper",
        level: "★★☆",
        genre: "日本",
        text: "Most of the paper we use today is made quickly in large factories. But in Japan, there is a special kind of paper made slowly by hand, following methods hundreds of years old. It is called washi, which simply means Japanese paper. Strong, beautiful, and long-lasting, washi is treasured both as a craft and as an art.\n\nWashi is not made from ordinary wood pulp like most modern paper. Instead, it is made from the inner bark of certain plants, such as the mulberry tree. The long, tough fibers of these plants give washi its special strength. Skilled makers soak, clean, and beat the fibers, then spread them thinly over a screen in water. As the water drains away, a sheet of paper forms, which is then carefully dried.\n\nBecause washi is so strong, it has many uses. In traditional Japanese homes, it is used in sliding doors and paper screens that let soft light into a room. It is also used for calligraphy, for origami, for lanterns, and for repairing old books and artworks, even in famous museums around the world.\n\nMaking washi takes time, patience, and skill, and the number of makers has fallen over the years. To protect this tradition, washi has been recognized as an important part of cultural heritage.\n\nIn an age of cheap, throwaway products, washi reminds us of the beauty of things made slowly and with care. A single sheet can last for centuries, carrying the skill of its maker far into the future.",
        summaryJa: "日本の伝統的な和紙について。今日使う紙の多くは大きな工場で速く作られる。だが日本には、数百年前からの手法で手作業により時間をかけて作る特別な紙がある。それが「和紙」、つまり日本の紙だ。丈夫で美しく長持ちし、工芸かつ芸術として大切にされる。和紙は普通の紙のような木材パルプでなく、楮（こうぞ）などの植物の内皮から作る。その長く強い繊維が和紙に特別な強さを与える。熟練者は繊維を浸し洗い叩き、水中で薄く漉き、水が抜けると紙ができ、丁寧に乾かす。丈夫なので用途は多く、障子や襖、書道、折り紙、提灯、古書や美術品の修復（世界の有名美術館でも）に使われる。作るには時間と忍耐と技が要り、作り手は減ったため、文化遺産として守られている。ゆっくり丁寧に作る美を思い出させる。",
        quiz: [
          { q: "What is washi made from?", options: ["The inner bark of plants like the mulberry tree", "Plastic", "Metal"], answer: 0 },
          { q: "Why does washi have special strength?", options: ["The long, tough fibers of the plants", "It is very thick", "It is made by machines"], answer: 0 },
          { q: "What is one traditional use of washi?", options: ["Sliding doors and paper screens in homes", "Building cars", "Making roads"], answer: 0 }
        ]
      },
      {
        id: "d1023-5",
        title: "How Do Plants Spread Their Seeds?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "A plant has a problem that we rarely think about: it cannot walk. Rooted in one spot, a plant cannot carry its seeds to new ground. Yet if all its seeds simply fell at its feet, the young plants would crowd together and fight for light and water. So over millions of years, plants have found many clever ways to send their seeds far away.\n\nOne common method is the wind. Some seeds, like those of the dandelion, are light and have tiny hairs that act like a parachute, carrying them on the breeze. Others, like the seeds of maple trees, have little wings that make them spin and glide away from the parent tree.\n\nMany plants use animals instead. They grow sweet, tasty fruit around their seeds. An animal eats the fruit, walks far away, and later drops the seeds in its waste, often with natural fertilizer. Other seeds have tiny hooks that stick to the fur of passing animals, or to people's clothes, and are carried to new places.\n\nWater is another helper. Some seeds can float, drifting down rivers or across the sea to distant shores. The coconut, for example, can travel a long way by ocean before growing on a new beach.\n\nA few plants even launch their own seeds, with pods that burst open and throw them into the air. In all these ways, a plant that cannot move still manages to travel the world, one seed at a time.",
        summaryJa: "植物が種を広げる仕組みについて。植物には、私たちがあまり考えない問題がある。歩けないのだ。一か所に根を張り、種を新しい土地へ運べない。だが全ての種が足元に落ちれば、若い植物が密集し光や水を奪い合う。そこで植物は何百万年もかけ、種を遠くへ送る巧妙な方法を数多く見つけた。一つは風で、タンポポの種は軽く、細い毛がパラシュートのように風に乗せる。楓の種には小さな翼があり、回転し滑空して親木から離れる。多くは動物を使い、種の周りに甘くおいしい果実を作る。動物が食べて遠くへ行き、糞とともに種を落とし、天然の肥料も付く。小さな鉤で動物の毛や人の服にくっつく種もある。水も助けで、川や海を漂う種があり、ヤシの実は海を長く旅して新しい浜で育つ。種を自ら飛ばす植物もある。",
        quiz: [
          { q: "Why do plants need to spread their seeds far away?", options: ["So young plants don't crowd and fight for light and water", "To make noise", "To stay in one spot"], answer: 0 },
          { q: "How does a dandelion seed travel?", options: ["On the wind, using tiny hairs like a parachute", "By swimming", "By walking"], answer: 0 },
          { q: "How do some seeds use animals?", options: ["Animals eat the fruit and drop seeds far away", "Animals paint the seeds", "Animals cook the seeds"], answer: 0 }
        ]
      }
    ]
    }
  ] };
