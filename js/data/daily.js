/* デイリー配信リーディング
 * 毎朝の自動ルーチンがこのファイルを丸ごと上書き生成する（直近 7 日分を保持）。
 * days は日付降順。各 day = { date: "YYYY-MM-DD", passages: [readingPassages と同スキーマ + genre] }
 * このファイル以外は手書きデータであり、ルーチンは触らない。
 */
window.KE_DATA = window.KE_DATA || {};

KE_DATA.dailyReading = { days: [
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
    },
    {
    date: "2026-10-22",
    passages: [
      {
        id: "d1022-1",
        title: "Why Businesses Must Adapt to Change",
        level: "★★☆",
        genre: "ビジネス",
        text: "The business world never stands still. New technologies appear, customers change their habits, and what was popular yesterday can be forgotten tomorrow. Because of this, one of the most important skills for any company is the ability to adapt, to change with the times.\n\nHistory is full of examples. Not long ago, people bought music on discs, rented films from shops, and printed photographs from rolls of film. As technology changed, companies that sold these products had to change too. Some invented new businesses, such as streaming music or digital photos. Others, which refused to change, slowly disappeared. Even large, famous companies can fall behind if they ignore new trends.\n\nAdapting is not easy. It can mean stopping a product that once made a lot of money, or learning completely new skills. It takes courage to change something that still seems to be working, before it is too late. Yet companies that watch the world carefully, and act early, often survive and grow.\n\nAdapting does not only mean technology. A company may need to change because customers care about new things, such as protecting the environment or shopping online. Listening to customers is one of the best ways to see change coming.\n\nThe lesson is clear. In business, standing still is risky, because the world keeps moving. The strongest companies are not always the biggest or the oldest, but the ones most willing to learn, to let go of the past, and to welcome what comes next.",
        summaryJa: "企業が変化に適応すべき理由について。ビジネスの世界は止まらない。新技術が現れ、客の習慣が変わり、昨日の人気が明日は忘れられる。だからどの会社にも最も重要な技能の一つが、時代とともに変わる適応力だ。歴史には例が多い。少し前は人は音楽をディスクで買い、店で映画を借り、フィルムから写真を現像した。技術が変わると、これらを売る企業も変わらねばならず、音楽配信やデジタル写真など新事業を生んだ会社もあれば、変化を拒んで消えた会社もある。有名な大企業でも新しい流れを無視すれば遅れる。適応は容易でなく、稼いでいた製品をやめたり新しい技能を学んだりする勇気が要る。環境配慮やオンライン購入など客の関心の変化にも対応が必要で、客の声を聞くことが変化を察する最良の方法だ。止まることは危険だ。",
        quiz: [
          { q: "Why must companies be able to adapt?", options: ["Technology, customers, and trends keep changing", "The world never changes", "Customers never change"], answer: 0 },
          { q: "What happened to companies that refused to change?", options: ["Some slowly disappeared", "They all grew bigger", "Nothing changed"], answer: 0 },
          { q: "What is one of the best ways to see change coming?", options: ["Listening to customers", "Ignoring the world", "Keeping old products forever"], answer: 0 }
        ]
      },
      {
        id: "d1022-2",
        title: "How a Refrigerator Keeps Food Cold",
        level: "★★☆",
        genre: "テクノロジー",
        text: "Almost every kitchen has a refrigerator, quietly keeping our food fresh and cold. We open it many times a day without thinking about how it works. But a refrigerator does something clever: it does not add cold to the food. Instead, it removes heat from inside and carries that heat away.\n\nThe secret is a special liquid called a refrigerant, which flows through pipes inside the machine. This liquid has a useful property: it can change easily between a liquid and a gas. As the refrigerant flows through pipes inside the fridge, it turns into a gas, and in doing so it soaks up heat from the air and food inside. This makes the inside colder.\n\nThe warm gas is then pumped to pipes on the outside or back of the fridge. There, it is squeezed and turns back into a liquid, releasing the heat it carried into the room. This is why the back of a refrigerator often feels warm. The liquid then flows inside again, and the cycle repeats over and over.\n\nA thermostat watches the temperature. When the inside is cold enough, it switches the system off; when it warms up, it switches on again. This saves energy and keeps the temperature steady.\n\nBy moving heat from the inside to the outside, a refrigerator keeps food cool, slowing the growth of the tiny germs that make food go bad. This simple but powerful idea has changed how we store food and made fresh meals possible all year round.",
        summaryJa: "冷蔵庫が食品を冷やす仕組みについて。ほとんどの台所に冷蔵庫があり、静かに食品を新鮮に冷たく保つ。毎日何度も開けるが仕組みは考えない。冷蔵庫は巧妙で、食品に冷たさを加えるのでなく、内部から熱を取り去って外へ運ぶ。鍵は冷媒という特別な液体で、機械内の管を流れる。この液体は液体と気体の間で変わりやすい性質を持つ。庫内の管を流れると気体になり、その際に内部の空気や食品から熱を吸い取り、中を冷やす。暖まった気体は外側や背面の管へ送られ、圧縮されて再び液体に戻り、運んだ熱を部屋へ放出する。だから背面は温かいことが多い。液体は再び内部へ流れ、循環が繰り返される。サーモスタットが温度を見て入切し省エネする。熱を内から外へ移し、食品を腐らせる菌の繁殖を遅らせる。",
        quiz: [
          { q: "What does a refrigerator actually do to keep food cold?", options: ["It removes heat from inside and carries it away", "It adds cold air from outside", "It freezes the room"], answer: 0 },
          { q: "Why does the back of a refrigerator often feel warm?", options: ["It releases the heat carried from inside", "It has a small fire", "It stores hot water"], answer: 0 },
          { q: "What does the thermostat do?", options: ["Switches the system on and off to keep a steady temperature", "Cooks the food", "Opens the door"], answer: 0 }
        ]
      },
      {
        id: "d1022-3",
        title: "How Countries Share Weather Information",
        level: "★★★",
        genre: "世界情勢",
        text: "Weather does not stop at borders. A storm that forms over the ocean near one country may strike another a few days later. Rain clouds, heat waves, and cold winds all travel freely across the map. For this reason, no country can understand its own weather by looking only at itself. To forecast the weather well, the nations of the world must share what they see.\n\nEvery day, thousands of weather stations, ships, balloons, and satellites around the globe measure temperature, wind, and pressure. On their own, these numbers would be of little use. But countries have agreed to share this information freely and quickly with one another. The measurements flow into powerful computers that model how the weather will move and change.\n\nThis cooperation is remarkable. Even countries that disagree about other things usually continue to share weather data, because everyone benefits. A good forecast can warn people about a coming typhoon, help farmers plan their crops, and keep ships and planes safe.\n\nThe system is guided by an international organization that sets shared rules, so that a measurement taken in one country can be understood in every other. Scientists also share their knowledge, improving forecasts for all.\n\nThanks to this quiet, daily cooperation, a warning about a dangerous storm can now reach people days in advance, giving them time to prepare. Weather forecasting shows that when a problem touches everyone, sharing information openly is not only kind, it is the only way that truly works.",
        summaryJa: "各国が気象情報を共有する仕組みについて。天気は国境で止まらない。ある国の近くの海で生まれた嵐が、数日後に別の国を襲うこともある。雨雲や熱波、冷たい風も地図上を自由に動く。だからどの国も自国だけを見て天気を理解できない。よい予報には世界の国々が観測を共有する必要がある。毎日、世界中の何千もの気象観測所・船・気球・衛星が気温・風・気圧を測る。単独では役に立たないが、各国はこれを自由に素早く共有することで合意している。データは強力なコンピューターに流れ、天気の動きを計算する。対立する国どうしでも気象データの共有は続く。誰もが得をするからだ。国際機関が共通規則を定め、ある国の測定値を他国でも理解できる。危険な嵐の警告が数日前に届き、備える時間を生む。",
        quiz: [
          { q: "Why can't a country understand its weather by looking only at itself?", options: ["Weather travels freely across borders", "Weather stays in one country", "Weather does not exist"], answer: 0 },
          { q: "What do countries agree to do with their weather measurements?", options: ["Share them freely and quickly with one another", "Keep them all secret", "Throw them away"], answer: 0 },
          { q: "Why do even rival countries share weather data?", options: ["Everyone benefits from good forecasts", "They are forced to by weather", "It makes storms stop"], answer: 0 }
        ]
      },
      {
        id: "d1022-4",
        title: "Rice: The Heart of the Japanese Table",
        level: "★★☆",
        genre: "日本",
        text: "In many Japanese homes, a meal does not feel complete without rice. For hundreds of years, rice has been the center of the Japanese table, so important that the word for cooked rice, gohan, can also simply mean a meal. To understand Japanese food, it helps to understand the deep place rice holds in the culture.\n\nJapanese rice is a short-grain type that becomes slightly sticky when cooked. This stickiness is loved, because it makes the rice easy to pick up with chopsticks and perfect for dishes like sushi and rice balls. The rice is usually served plain and white, in its own bowl, next to other dishes rather than mixed with them.\n\nGrowing rice has shaped Japan for centuries. In the past, farming rice required whole villages to work together to flood the fields and share water. This cooperation helped form close communities. Even today, bright green rice fields in summer and golden ones in autumn are a familiar and beloved sight in the countryside.\n\nRice appears in many forms. It is pressed into rice balls called onigiri, pounded into a chewy cake called mochi, and even brewed into the drink known as sake. Leftover rice is rarely wasted.\n\nTo many Japanese people, rice means more than food. It stands for home, hard work, and the changing seasons. A warm bowl of rice is a small, everyday comfort, connecting modern life to a long and treasured history.",
        summaryJa: "日本の食卓の中心、米について。多くの日本の家庭では、ご飯がないと食事が完成した気がしない。何百年も米は日本の食卓の中心で、炊いた米を指す「ご飯」は「食事」そのものも意味するほど大切だ。日本食を理解するには、米が文化で占める深い位置を知ると助けになる。日本の米は短粒種で、炊くと少し粘りが出る。この粘りは好まれ、箸でつまみやすく、寿司やおにぎりに最適だ。普通は白いまま別の茶碗で、他のおかずと混ぜず並べて出す。米作りは何世紀も日本を形づくり、昔は村全体で協力して田に水を張り分け合い、密な共同体を育んだ。夏の緑、秋の黄金の田は今も愛される風景だ。米はおにぎり、餅、酒など様々な形になり、残りも無駄にしない。米は故郷や勤勉、季節の移ろいを表す。",
        quiz: [
          { q: "What can the Japanese word 'gohan' mean?", options: ["Both cooked rice and a meal", "Only fish", "A kind of drink"], answer: 0 },
          { q: "Why is the stickiness of Japanese rice liked?", options: ["It is easy to pick up with chopsticks", "It tastes bad", "It cannot be eaten"], answer: 0 },
          { q: "How did growing rice affect communities in the past?", options: ["Villages worked together, forming close communities", "People lived completely alone", "It stopped all farming"], answer: 0 }
        ]
      },
      {
        id: "d1022-5",
        title: "How Do Our Ears Hear Sound?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "Right now, you may hear many sounds: voices, music, or the hum of a machine. Hearing seems instant and effortless, but behind it is a remarkable journey, as your ears turn invisible waves in the air into sounds your brain can understand.\n\nSound begins as a vibration. When something shakes, like a guitar string or a person's voice, it makes the air around it move in tiny waves. These sound waves spread out in all directions, much like ripples on water. We cannot see them, but our ears are built to catch them.\n\nThe outer ear, the part we can see, works like a cup, gathering sound waves and guiding them into a narrow tube. At the end of the tube is the eardrum, a thin, tight piece of skin. When sound waves hit it, the eardrum vibrates, just like a tiny drum.\n\nThese vibrations then pass through three of the smallest bones in the body, which pass the shaking deeper inside the ear. There, in a spiral part filled with liquid and tiny hairs, the vibrations are turned into electrical signals. These signals travel along a nerve to the brain, which understands them as sound.\n\nAll of this happens in an instant, thousands of times, as you listen. Our ears also help us know where a sound comes from and keep our balance. From a whisper to a song, hearing is a quiet miracle that connects us to the world around us every single moment.",
        summaryJa: "耳が音を聞く仕組みについて。今あなたは声や音楽、機械の音など多くの音を聞いているかもしれない。聞くことは一瞬で楽に思えるが、その裏では、耳が空気中の見えない波を脳が理解できる音に変える見事な旅がある。音は振動から始まる。ギターの弦や人の声など何かが震えると、周りの空気が小さな波となって動く。この音波は水の波紋のように四方へ広がる。見えないが耳が捉える。外耳は見える部分でカップのように音波を集め、細い管へ導く。管の奥には鼓膜という薄く張った皮があり、音波が当たると太鼓のように震える。その振動は体で最も小さい三つの骨を通り、耳の奥へ伝わる。液体と小さな毛で満ちた渦巻き状の部分で振動が電気信号に変わり、神経を通り脳へ届き音として理解される。音の方向や平衡感覚にも役立つ。",
        quiz: [
          { q: "How does sound begin?", options: ["As a vibration that makes the air move in waves", "As a bright light", "As a smell"], answer: 0 },
          { q: "What does the eardrum do when sound waves hit it?", options: ["It vibrates like a tiny drum", "It makes light", "It stops moving"], answer: 0 },
          { q: "What happens in the spiral part of the ear?", options: ["Vibrations are turned into electrical signals for the brain", "Food is digested", "Air is cleaned"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-10-21",
    passages: [
      {
        id: "d1021-1",
        title: "Why Time Management Matters at Work",
        level: "★★☆",
        genre: "ビジネス",
        text: "In any job, there is always more to do than time to do it. Emails arrive, meetings fill the calendar, and tasks pile up. The people who succeed are often not those who work the most hours, but those who manage their time well. Good time management is one of the most valuable skills in business.\n\nWhy does it matter so much? When you manage your time well, you finish important work on time, feel less stressed, and make fewer mistakes. When you manage it poorly, you may rush, forget things, or stay late to catch up. Over time, good time habits make work calmer and more productive.\n\nThere are simple ways to manage time better. One is to decide what is most important each day and do that first, before smaller tasks. Another is to break a big job into smaller steps, so it feels less frightening and is easier to start. Writing a short list of tasks also helps, because a clear plan is easier to follow than a busy mind.\n\nIt also helps to avoid common traps. Checking messages every few minutes breaks concentration, so many people set certain times to deal with them. Saying \"yes\" to everything can leave no time for what truly matters, so learning to say \"no\" politely is important too.\n\nTime is the one resource everyone shares equally: twenty-four hours a day. We cannot make more of it, but we can choose how to use it. Managing time wisely is really about choosing what matters most.",
        summaryJa: "職場で時間管理が大切な理由について。どんな仕事でも、やるべきことは時間より多い。メールが届き、会議が予定を埋め、仕事が積み上がる。成功するのは最も長く働く人でなく、時間をうまく使う人であることが多い。良い時間管理はビジネスで最も価値ある技能の一つだ。うまく使えば重要な仕事を期限内に終え、ストレスが減り、ミスも減る。下手だと焦り、忘れ、残業で取り戻すことになる。良いコツは、毎日最も重要なことを先に行う、大きな仕事を小さな段階に分けて始めやすくする、短いリストを書くこと。数分ごとのメール確認は集中を乱すので時間を決めて対応し、何でも引き受けず丁寧に断ることも大切だ。時間は誰にも平等な一日24時間で、増やせないが使い方は選べる。",
        quiz: [
          { q: "Who often succeeds at work, according to the passage?", options: ["Those who manage their time well", "Those who work the most hours", "Those who never plan"], answer: 0 },
          { q: "What is one way to manage time better?", options: ["Do the most important task first", "Do the smallest tasks only", "Avoid all planning"], answer: 0 },
          { q: "Why is learning to say 'no' politely important?", options: ["Saying yes to everything leaves no time for what matters", "It makes people unhappy", "It wastes time"], answer: 0 }
        ]
      },
      {
        id: "d1021-2",
        title: "How Doctors See Inside the Body",
        level: "★★☆",
        genre: "テクノロジー",
        text: "Long ago, a doctor could only guess what was happening inside a patient's body without cutting it open. Today, thanks to clever machines, doctors can look inside a living person safely and painlessly. These tools have changed medicine, helping doctors find problems early and treat them better.\n\nThe oldest of these tools is the X-ray. X-rays are a kind of invisible ray that can pass through soft parts of the body, like skin and muscle, but are blocked by harder parts, like bone. By sending X-rays through the body onto a detector, doctors can create a picture in which bones appear clearly. This makes X-rays very useful for finding broken bones.\n\nOther machines go further. A CT scanner takes many X-ray pictures from different angles and uses a computer to build a detailed, cross-section view of the inside of the body. An MRI machine uses strong magnets and radio waves instead of X-rays, and is especially good at showing soft tissues, such as the brain.\n\nThere is also ultrasound, which uses sound waves too high for us to hear. The waves bounce off organs inside the body, and a computer turns the echoes into a moving picture. Ultrasound is famous for showing images of babies before they are born.\n\nToday, computers help doctors study these images, sometimes spotting tiny signs that are easy to miss. Together, these tools act like windows into the human body, helping doctors understand and heal without a single cut.",
        summaryJa: "医師が体の中を見る仕組みについて。昔、医師は体を切り開かずに中で何が起きているか推測するしかなかった。今は巧妙な機械のおかげで、生きた人の体内を安全に痛みなく見られる。これは医学を変え、問題の早期発見と治療に役立つ。最も古い道具はレントゲン（X線）で、皮膚や筋肉など柔らかい部分を通り抜けるが骨など硬い部分で遮られる。検出器に当てると骨がはっきり写り、骨折の発見に役立つ。CTは多数のX線画像を角度を変えて撮り、コンピューターで体内の断面図を作る。MRIはX線でなく強い磁石と電波を使い、脳など柔らかい組織を写すのが得意だ。超音波は人に聞こえない高い音波を使い、臓器で跳ね返る反響を動く画像にする。出産前の赤ちゃんの画像で有名だ。コンピューターが画像の解析も助ける。",
        quiz: [
          { q: "Why do bones appear clearly on an X-ray?", options: ["X-rays pass through soft parts but are blocked by bone", "Bones glow by themselves", "X-rays avoid muscles only"], answer: 0 },
          { q: "What does an MRI machine use instead of X-rays?", options: ["Strong magnets and radio waves", "Only sunlight", "Hot water"], answer: 0 },
          { q: "What is ultrasound famous for showing?", options: ["Images of babies before they are born", "The surface of the Moon", "Broken bones only"], answer: 0 }
        ]
      },
      {
        id: "d1021-3",
        title: "What Are Human Rights?",
        level: "★★★",
        genre: "世界情勢",
        text: "Imagine a list of things that every person in the world should have, simply because they are human, no matter their country, language, or beliefs. This is the idea behind human rights. They are basic freedoms and protections that belong to everyone, from birth, and that no one should be able to take away.\n\nThe modern idea of human rights grew stronger after the terrible events of a great world war. In 1948, countries came together and agreed on a famous document that listed these shared rights for all people. It was a promise that such suffering should never happen again.\n\nHuman rights cover many areas of life. They include the right to life and safety, the right to be treated equally under the law, and freedom from slavery and cruel treatment. They also include the freedom to speak, to believe in a religion of one's choice, and to learn through education. Importantly, rights come with respect for the rights of others.\n\nAgreeing on rights is easier than protecting them everywhere. In some places, people are still treated unfairly or silenced. For this reason, governments, courts, and organizations work to defend human rights, and ordinary people speak up when rights are ignored.\n\nHuman rights remind us of a simple but powerful truth: that every person has value and deserves to be treated with dignity. The idea is not finished or perfect, but it gives the world a shared goal to aim for, and a standard by which fairness can be measured.",
        summaryJa: "人権とは何かについて。国や言語、信条に関わらず、人間であるというだけで世界の誰もが持つべきものの一覧を想像してほしい。これが人権の考えだ。生まれながらに誰もが持つ基本的な自由と保護で、誰も奪えないものとされる。近代的な人権の考えは、大戦の悲劇の後に強まった。1948年、各国が集い、全ての人の共通の権利を列挙した有名な文書に合意した。二度と同じ苦しみを起こさないという約束だった。人権は生命と安全、法の下の平等、奴隷や残酷な扱いからの自由、言論・信教の自由、教育などを含み、他者の権利の尊重も伴う。合意より各地で守る方が難しく、今も不当に扱われ声を封じられる人がいる。だから政府や裁判所、団体が擁護し、人々も声を上げる。全ての人に価値と尊厳があると教える。",
        quiz: [
          { q: "What are human rights?", options: ["Basic freedoms and protections that belong to everyone", "Rules only for rich people", "Laws of a single city"], answer: 0 },
          { q: "What happened in 1948?", options: ["Countries agreed on a famous document listing shared rights", "The first car was built", "A new planet was found"], answer: 0 },
          { q: "Why is protecting rights difficult?", options: ["In some places people are still treated unfairly", "Rights are secret", "No one cares about fairness"], answer: 0 }
        ]
      },
      {
        id: "d1021-4",
        title: "Omotenashi: The Spirit of Japanese Hospitality",
        level: "★★☆",
        genre: "日本",
        text: "Visitors to Japan often say they are surprised by how kindly and carefully they are treated. A shop worker may walk you to the door, a hotel may remember your name, and a taxi door may open by itself. Behind this attentive service is a deep cultural idea called omotenashi, which can be translated as Japanese hospitality.\n\nOmotenashi is more than just good service. It means caring for a guest with a full and sincere heart, thinking ahead about what they might need, and doing so without expecting anything in return. The host tries to make the guest feel comfortable and valued, often through small, quiet actions that are easy to miss.\n\nThe idea has old roots. It is connected to the traditional tea ceremony, in which a host prepares everything with great care for the comfort and pleasure of the guest. Every detail, from the temperature of the room to the choice of bowl, is considered.\n\nIn daily life, omotenashi appears in many forms. A restaurant may bring a warm towel before a meal. A train may be cleaned and ready exactly on time. Staff bow to welcome and thank customers. These actions show respect and attention to detail.\n\nOf course, kindness and good service exist everywhere in the world. What makes omotenashi special is the belief that caring for others is a quiet art, worth doing well for its own sake. For many people, this gentle spirit is one of the most memorable parts of a visit to Japan.",
        summaryJa: "日本のおもてなしの心について。日本を訪れる人はしばしば、その親切で心のこもった扱いに驚く。店員が戸口まで見送り、ホテルが名前を覚え、タクシーのドアが自動で開く。この行き届いた接客の背景に、日本のもてなしを意味する「おもてなし」という深い文化がある。おもてなしは良い接客以上のもので、客を心から誠実にもてなし、必要を先回りして考え、見返りを求めずに行うことを指す。小さく静かな、気づきにくい行いで客を心地よく大切に感じさせる。茶道に通じる古い由来があり、亭主が部屋の温度や茶碗の選びまで客のために心を配る。日常では食前の温かいおしぼり、時間通りに清掃された電車、歓迎と感謝のお辞儀などに表れる。人を思いやることを静かな芸術とみなす点が特別だ。",
        quiz: [
          { q: "What does 'omotenashi' mean?", options: ["Japanese hospitality, caring sincerely for a guest", "A type of food", "A kind of train"], answer: 0 },
          { q: "What old tradition is omotenashi connected to?", options: ["The traditional tea ceremony", "Car racing", "Modern shopping malls"], answer: 0 },
          { q: "What makes omotenashi special?", options: ["The belief that caring for others is a quiet art", "That it expects large payment", "That it is always loud"], answer: 0 }
        ]
      },
      {
        id: "d1021-5",
        title: "How Do Our Eyes See Color?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "The world around us is full of color: green leaves, blue skies, red apples. We enjoy these colors every day without thinking. But color is not really \"in\" the objects themselves. It is created by light and by our amazing eyes working together.\n\nIt starts with light. Although sunlight looks white, it is actually made of all the colors mixed together. When light hits an object, the object soaks up some colors and bounces others back. A red apple, for example, absorbs most colors but reflects red light toward our eyes. So the color we see is the light that an object does not keep.\n\nInside each eye are millions of tiny cells that react to light. Some of these cells, called cones, are special because they detect color. Most people have three kinds of cones, which react to red, green, or blue light. By combining the signals from these three types, the brain can create the millions of colors we see, just as mixing a few paints can make many shades.\n\nThis also explains color blindness. Some people have cones that work differently, so they may find it hard to tell certain colors apart, such as red and green. It does not mean they see no color at all.\n\nOur sense of color is a quiet partnership between the sun, the objects around us, and our own eyes and brain. The next time you admire a sunset or a flower, remember that the color you enjoy is really a kind of beautiful message made of light.",
        summaryJa: "目が色を見る仕組みについて。周りの世界は緑の葉、青い空、赤いリンゴと色で満ちている。毎日何気なく楽しむが、色は物そのものの中にあるのではなく、光と私たちの驚くべき目が共に作り出す。始まりは光で、太陽光は白く見えても実は全ての色が混ざっている。光が物に当たると、物は一部の色を吸収し残りを跳ね返す。赤いリンゴはほとんどの色を吸収し赤い光を目へ反射する。つまり見える色は物が保たなかった光だ。目の中には光に反応する無数の細胞があり、錐体という細胞が色を感知する。多くの人は赤・緑・青に反応する三種の錐体を持ち、その信号を組み合わせて脳が無数の色を作る。色覚の違いもこれで説明でき、赤と緑の区別が難しい人もいるが全く色が見えないわけではない。",
        quiz: [
          { q: "Why does a red apple look red?", options: ["It reflects red light and absorbs most other colors", "It makes its own red light", "It is painted each day"], answer: 0 },
          { q: "What are the eye cells that detect color called?", options: ["Cones", "Bones", "Stones"], answer: 0 },
          { q: "What does color blindness usually mean?", options: ["Some colors are hard to tell apart, not that no color is seen", "A person sees no light at all", "A person sees only new colors"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-10-20",
    passages: [
      {
        id: "d1020-1",
        title: "What Is a Startup?",
        level: "★★☆",
        genre: "ビジネス",
        text: "You have probably heard the word \"startup.\" A startup is a young company, usually just beginning, built around a new idea. While a normal new shop might sell familiar things in a familiar way, a startup often tries to do something different, such as creating a new product, a new service, or a new way of solving a problem.\n\nStartups usually begin small, sometimes with just a few people working in a tiny office or even at home. The founders have an idea they believe in, but they often do not yet have much money. To grow, many startups look for investors, people who give them money in exchange for a share of the company. If the company succeeds, the investors gain; if it fails, they lose.\n\nWhy are startups exciting? Because they can grow very fast. A good idea, helped by technology, can reach millions of people in just a few years. Some of today's largest and most famous companies began as tiny startups not long ago.\n\nBut startups are also risky. Many fail, because the idea does not work, the money runs out, or a bigger company does the same thing better. Life in a startup can mean long hours and uncertainty.\n\nDespite the risks, startups are important. They bring new ideas, create jobs, and push older companies to improve. Governments often support them, holding awards and events to encourage them, because a healthy stream of new companies helps keep an economy fresh and growing.",
        summaryJa: "スタートアップとは何かについて。「スタートアップ」という言葉を聞いたことがあるだろう。スタートアップは新しい発想を核に始まったばかりの若い会社だ。普通の新店が見慣れた物を見慣れた方法で売るのに対し、スタートアップは新製品・新サービス・新しい問題解決法など、何か違うことに挑むことが多い。たいてい数人で小さな事務所や自宅から始まり、創業者は信じる発想を持つが資金は乏しい。成長のため、会社の株と引き換えに資金を出す投資家を探す。成功すれば投資家も得をし、失敗すれば損をする。良い発想は技術の助けで数年で何百万人にも届き、今の大企業も元は小さなスタートアップだった。だが失敗も多く危険で、長時間労働と不確実さを伴う。それでも新しい発想と雇用を生み、経済を新鮮に保つ。",
        quiz: [
          { q: "What is a startup?", options: ["A young company built around a new idea", "A very old, large company", "A government office"], answer: 0 },
          { q: "How do many startups get money to grow?", options: ["From investors, in exchange for a share of the company", "By printing money", "From nowhere"], answer: 0 },
          { q: "Why are startups risky?", options: ["Many fail if the idea doesn't work or money runs out", "They can never grow", "They are always safe"], answer: 0 }
        ]
      },
      {
        id: "d1020-2",
        title: "How Do Batteries Store Energy?",
        level: "★★☆",
        genre: "テクノロジー",
        text: "Batteries are everywhere in modern life. They power our phones, remote controls, toys, cars, and countless other devices. A battery lets us carry energy with us and use it whenever we want, far from any wall socket. But what is really happening inside that small container?\n\nA battery stores energy in the form of chemicals. Inside, there are special materials and a substance that lets tiny charged particles move between them. When you connect a battery to a device and switch it on, a chemical reaction begins. This reaction pushes a stream of tiny particles, called electrons, out of one end of the battery, through the device, and back into the other end. That flow of electrons is electricity, and it is what makes the device work.\n\nAs the battery is used, the chemicals slowly change. Eventually, the reaction can no longer continue, and we say the battery is \"dead.\" A simple battery must then be thrown away or recycled.\n\nSome batteries, however, can be recharged. In these, electricity from a charger pushes the chemical reaction backward, returning the materials to their starting state. This is why a phone battery can be used again and again, though after many years it slowly weakens.\n\nScientists are working hard to make batteries better: lighter, longer-lasting, and safer. Because clean energy from the sun and wind is not always available, large batteries are becoming important for storing it. From a tiny watch to a huge power station, batteries quietly hold the energy that keeps our world running.",
        summaryJa: "電池がエネルギーを蓄える仕組みについて。電池は現代生活のあらゆる所にあり、スマホやリモコン、おもちゃ、車などを動かす。電池のおかげでエネルギーを持ち運び、コンセントから離れても使える。小さな容器の中では何が起きているのか。電池はエネルギーを化学物質の形で蓄える。内部には特別な材料と、小さな帯電粒子がその間を移動できる物質がある。機器につないで動かすと化学反応が始まり、電子という小さな粒子の流れが一方の端から出て機器を通りもう一方へ戻る。この電子の流れが電気で、機器を動かす。使ううちに化学物質が変化し、やがて反応が続かなくなると「切れた」状態になる。再充電できる電池は、充電器の電気で反応を逆に進め元に戻す。軽く長持ちで安全な電池の研究が進み、太陽や風の電気を蓄えるのにも重要になっている。",
        quiz: [
          { q: "In what form does a battery store energy?", options: ["As chemicals", "As light", "As sound"], answer: 0 },
          { q: "What is the flow of electrons through a device?", options: ["Electricity", "Water", "Heat only"], answer: 0 },
          { q: "How can a rechargeable battery be used again?", options: ["A charger pushes the chemical reaction backward", "It never runs out", "You shake it"], answer: 0 }
        ]
      },
      {
        id: "d1020-3",
        title: "How the World Works to End Hunger",
        level: "★★★",
        genre: "世界情勢",
        text: "The Earth produces enough food for everyone, yet millions of people still go hungry. Some cannot afford to buy food, while others live in places struck by drought, war, or disaster. Ending hunger has become one of the world's most important shared goals, and no single country can achieve it alone.\n\nCountries and organizations work together in several ways. When a sudden crisis strikes, such as a famine or a flood, international groups rush emergency food to the people in danger. Trucks, ships, and planes carry grain and supplies to areas that cannot feed themselves, often saving many lives.\n\nBut sending food is only a short-term answer. To end hunger for good, the world must help people grow their own food. Experts teach farmers better methods, provide stronger seeds, and help build systems to store and water crops. New science can help too. For example, researchers are finding faster ways to breed fish and crops, so that more food can be produced in less time.\n\nThere are also deeper causes to solve. Poverty, poor roads, and unfair prices can all keep food away from those who need it. Peace matters as well, because war is one of the greatest causes of hunger.\n\nProgress has been real but uneven. Over past decades, the share of hungry people in the world fell, though recent crises have slowed this gain. The task is huge, but the goal is clear and shared: a world where every person, in every country, has enough to eat.",
        summaryJa: "世界が飢餓をなくすための取り組みについて。地球は全員分の食料を生産できるのに、今も何百万もの人が飢えている。食料を買えない人もいれば、干ばつや戦争、災害に見舞われた地に住む人もいる。飢餓の根絶は世界の重要な共通目標で、一国だけでは達成できない。各国や組織は協力する。飢饉や洪水などの危機では、国際団体が緊急食料を急送し、トラックや船、飛行機で穀物を届け多くの命を救う。だが食料を送るのは短期策にすぎず、根絶には人々が自ら食料を作れるよう助ける必要がある。専門家が農法を教え、強い種を提供し、貯蔵や灌漑を整える。魚や作物を速く育てる新しい科学も役立つ。貧困や悪路、不公平な価格、戦争も原因だ。過去数十年で飢えた人の割合は減ったが、近年の危機で停滞している。",
        quiz: [
          { q: "Why can't one country end hunger alone?", options: ["It is a huge shared global problem", "Only one country has food", "Hunger does not exist"], answer: 0 },
          { q: "What is a short-term answer when a crisis strikes?", options: ["Rushing emergency food to people in danger", "Ignoring the crisis", "Raising food prices"], answer: 0 },
          { q: "What is a long-term way to end hunger?", options: ["Helping people grow their own food", "Sending food only once", "Closing all farms"], answer: 0 }
        ]
      },
      {
        id: "d1020-4",
        title: "Ikebana: The Art of Japanese Flower Arranging",
        level: "★★☆",
        genre: "日本",
        text: "In many countries, people put flowers in a vase simply to make a room look pretty. In Japan, arranging flowers has grown into a careful and respected art called ikebana. The word means \"living flowers,\" and ikebana is far more than just placing blooms in water. It is a thoughtful practice with deep roots in Japanese culture.\n\nIkebana began hundreds of years ago, connected to offering flowers at temples. Over time, it developed into an art studied by many people. Unlike a full, colorful Western bouquet, an ikebana arrangement is often simple, using only a few flowers, stems, and leaves. Empty space is just as important as the plants themselves.\n\nThe art follows careful ideas about balance and line. Arrangers pay attention to the shape of each branch, the angle of a stem, and the meeting of three main points, often said to represent heaven, earth, and humanity. The goal is not to show as many flowers as possible, but to capture the natural beauty and feeling of the plants.\n\nCreating ikebana is also a quiet, almost meditative activity. The arranger works slowly and with full attention, and the process itself is valued as much as the final result. Many people find it calming and thoughtful.\n\nToday, ikebana is studied and enjoyed around the world. In a single branch and a few leaves, it shows a key idea in Japanese art: that beauty often lies in simplicity, balance, and respect for nature.",
        summaryJa: "日本の生け花について。多くの国では部屋を美しく見せるため花を花瓶に挿すが、日本では花を生けることが生け花という丁寧で尊ばれる芸術に発展した。「生きた花」を意味し、ただ水に花を挿す以上のもので、日本文化に深く根ざした思慮深い実践だ。数百年前、寺への献花と結びついて始まり、やがて多くの人が学ぶ芸術になった。色鮮やかで豪華な西洋の花束と違い、生け花は数本の花や茎、葉だけを使う簡素なものが多く、余白も植物と同じくらい大切だ。均衡と線を重んじ、枝の形や茎の角度、天・地・人を表すとされる三つの主要点の調和に注意を払う。できるだけ多く飾るのでなく、自然の美と趣を捉えるのが目的だ。瞑想のように静かで、過程そのものも尊ばれる。簡素・調和・自然への敬意を示す。",
        quiz: [
          { q: "What does the word 'ikebana' mean?", options: ["Living flowers", "Big garden", "Painted vase"], answer: 0 },
          { q: "How is ikebana different from a Western bouquet?", options: ["It is often simple, and empty space matters", "It uses as many flowers as possible", "It uses no plants"], answer: 0 },
          { q: "What is valued as much as the final arrangement?", options: ["The quiet, careful process of making it", "The price of the vase", "The speed of the work"], answer: 0 }
        ]
      },
      {
        id: "d1020-5",
        title: "How Does Our Memory Work?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "Think of your favorite song, the face of a friend, or what you ate for breakfast. All of these are memories, stored somewhere inside your brain. Memory is one of the most important things the brain does, yet how it works is still a wonderful puzzle that scientists are slowly solving.\n\nMemory is not kept in one single place, like a book on a shelf. Instead, it is spread across the brain in connections between tiny cells called neurons. When you learn something new, certain neurons connect and send signals to one another. The more often this happens, the stronger the connection becomes, and the easier the memory is to recall.\n\nScientists often describe two main types of memory. Short-term memory holds information for just a few seconds, like a phone number you repeat before dialing. Long-term memory can last for years, holding names, skills, and important events. Sleep plays a key role, because during the night the brain moves some memories from short-term into long-term storage.\n\nNot everything is remembered, and that is a good thing. The brain lets go of unimportant details so that it is not overloaded. This is also why we forget. Forgetting is a normal part of how memory works.\n\nWe can help our memory in simple ways: paying careful attention, repeating information, getting enough sleep, and connecting new ideas to things we already know. Understanding memory not only explains a daily mystery but also helps us learn and remember better throughout our lives.",
        summaryJa: "記憶の仕組みについて。好きな歌、友人の顔、朝食べた物――これらは皆、脳のどこかに蓄えられた記憶だ。記憶は脳の最も重要な働きの一つだが、その仕組みは科学者が少しずつ解き明かす素晴らしい謎だ。記憶は棚の本のように一か所にあるのでなく、ニューロンという小さな細胞のつながりとして脳全体に広がる。新しく学ぶと特定のニューロンがつながり信号を送り合い、繰り返すほどつながりが強まり思い出しやすくなる。短期記憶は数秒だけ情報を保ち（かける前に繰り返す電話番号など）、長期記憶は名前や技能、重要な出来事を何年も保つ。睡眠が重要で、夜に脳は一部の記憶を短期から長期へ移す。重要でない細部は忘れて過負荷を防ぐ。注意を払う、繰り返す、十分眠る、既知の事と結ぶことで記憶を助けられる。",
        quiz: [
          { q: "Where are memories stored in the brain?", options: ["In connections between cells called neurons", "In one single place like a book", "Outside the body"], answer: 0 },
          { q: "What does long-term memory hold?", options: ["Names, skills, and important events for years", "Only phone numbers for seconds", "Nothing at all"], answer: 0 },
          { q: "What is one simple way to help your memory?", options: ["Getting enough sleep and repeating information", "Never paying attention", "Avoiding all new ideas"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-10-19",
    passages: [
      {
        id: "d1019-1",
        title: "How Tourism Helps Local Economies",
        level: "★★☆",
        genre: "ビジネス",
        text: "Every year, millions of people travel to other countries for holidays. They visit famous sights, taste local food, and buy gifts to take home. This travel is more than just fun for the visitors. It is also big business, and it can bring great benefits to the places people visit.\n\nWhen tourists arrive, they spend money in many ways. They pay for hotels, meals in restaurants, tickets to museums, and rides on trains and buses. They buy souvenirs from local shops. All of this spending flows into the local economy, supporting businesses and creating jobs for local people, from hotel staff to tour guides.\n\nTourism can also help preserve culture and nature. When old temples, festivals, or beautiful landscapes attract visitors, there is a strong reason to protect and maintain them. Money from tourism can pay for this care, keeping traditions alive for the future.\n\nTo welcome more visitors, some governments offer helpful policies. For example, a country might make shopping tax-free for tourists, so goods become cheaper and people buy more. Clear signs in foreign languages and easy transport also make a place more inviting.\n\nHowever, too many tourists can cause problems. Crowded streets, rising prices, and damage to nature can trouble local residents. For this reason, many cities now try to manage tourism carefully, welcoming visitors while protecting daily life.\n\nUsed wisely, tourism is a powerful tool. It connects cultures, supports local families, and helps the world's beautiful and historic places survive for generations to come.",
        summaryJa: "観光が地域経済を支える仕組みについて。毎年、何百万もの人が休暇で外国を旅し、名所を訪れ、郷土料理を味わい、土産を買う。これは観光客にとって楽しみ以上で、大きなビジネスであり、訪問先に大きな恩恵をもたらす。観光客はホテル、飲食、美術館の入場、電車やバス、土産店などで多様に支出し、それが地域経済に流れ込み、ホテル従業員からガイドまで雇用を生む。古い寺や祭り、美しい景観が人を呼べば保護の理由になり、観光収入で維持でき伝統が守られる。免税や多言語の案内、便利な交通も来訪を促す。ただし観光客が多すぎると混雑や物価高、自然破壊で住民が困る。だから多くの都市は慎重に管理する。賢く使えば文化を結び家庭を支える強力な手段だ。",
        quiz: [
          { q: "How does tourism help a local economy?", options: ["Tourists' spending supports businesses and creates jobs", "It removes all shops", "It lowers all wages"], answer: 0 },
          { q: "How can tourism help preserve culture and nature?", options: ["Money from tourism can pay to protect them", "It destroys old temples", "It stops all festivals"], answer: 0 },
          { q: "What problem can too many tourists cause?", options: ["Crowded streets and rising prices for residents", "Empty cities", "Lower prices forever"], answer: 0 }
        ]
      },
      {
        id: "d1019-2",
        title: "How Space Probes Explore Other Worlds",
        level: "★★☆",
        genre: "テクノロジー",
        text: "Human beings have walked on the Moon, but we have never set foot on another planet. Mars, the moons of Jupiter, and distant comets are far too dangerous and far away for people to visit easily. Yet we have still explored these places up close. How? We send robots called space probes to go where humans cannot.\n\nA space probe is an unmanned spacecraft, a traveling robot packed with scientific instruments. After being launched from Earth, it may journey for months or even years to reach its target. Along the way, it is guided by signals from Earth and by its own computers.\n\nProbes do many kinds of work. Some fly past a planet, taking photographs as they pass. Others go into orbit, circling a world for years to study it carefully. The boldest probes land on the surface or even scoop up samples of rock and dust. A few are designed to bring these samples all the way back to Earth, where scientists can study them in detail.\n\nBecause probes are so far away, they must work alone. A command sent from Earth can take many minutes, or even hours, to arrive. So probes are built to make some decisions by themselves and to survive extreme cold, heat, and radiation.\n\nThanks to these brave little machines, we have seen the rings of Saturn, the deserts of Mars, and the icy edges of our solar system. Space probes are the explorers of our age, carrying human curiosity to worlds we may never touch ourselves.",
        summaryJa: "宇宙探査機が他の世界を探る仕組みについて。人類は月を歩いたが、他の惑星にはまだ降り立っていない。火星や木星の衛星、遠い彗星は危険で遠く、人が容易に行けない。それでも間近で探査してきた。人が行けない所へ探査機というロボットを送るからだ。探査機は科学機器を積んだ無人の宇宙船で、地球から打ち上げられ、目標まで何か月、時に何年も旅する。地球からの信号と自らのコンピューターで導かれる。惑星の脇を通り写真を撮るもの、周回して長年調べるもの、表面に着陸し岩や塵を採取するものもあり、試料を地球へ持ち帰る設計もある。遠いため命令の到達に何分も何時間もかかり、自ら判断し極端な寒暖や放射線に耐える。土星の環や火星の砂漠を見せてくれた。",
        quiz: [
          { q: "What is a space probe?", options: ["An unmanned spacecraft full of scientific instruments", "A rocket with astronauts", "A telescope on Earth"], answer: 0 },
          { q: "What do the boldest probes do?", options: ["Land and even collect samples", "Stay on Earth", "Only make noise"], answer: 0 },
          { q: "Why must probes make some decisions by themselves?", options: ["Commands from Earth can take a long time to arrive", "They dislike Earth", "They have no computers"], answer: 0 }
        ]
      },
      {
        id: "d1019-3",
        title: "Why Do Countries Give Foreign Aid?",
        level: "★★★",
        genre: "世界情勢",
        text: "Sometimes we hear that one country has given money or help to another. A wealthy nation might send food after a famine, build a hospital in a poorer country, or train its teachers and doctors. This kind of help, given from one country to another, is called foreign aid. But why do countries help people who live far away?\n\nThere are several reasons. The simplest is human kindness. When people suffer from hunger, disaster, or disease, many feel a duty to help, no matter where those people live. Saving lives and reducing suffering is a goal shared by people everywhere.\n\nThere are also practical reasons. A more stable and healthy world is safer for everyone. When a poorer country grows stronger, it can become a trading partner, buying and selling goods. Helping to stop a disease in one place protects every other place too, because sickness crosses borders.\n\nForeign aid comes in different forms. Some is emergency aid, sent quickly after a disaster. Other aid is long-term, helping a country build schools, clean water systems, or farms so that it can support itself in the future. The best aid aims not just to give, but to help people stand on their own.\n\nAid is not always simple. If it is poorly planned, money can be wasted or fail to reach those who need it. Still, at its best, foreign aid reflects a hopeful idea: that the nations of the world are connected, and that helping others can help us all.",
        summaryJa: "国が外国援助を行う理由について。ある国が別の国にお金や支援を与えたと聞くことがある。豊かな国が飢饉の後に食料を送り、貧しい国に病院を建て、教師や医師を育てることもある。国から国へのこうした支援を外国援助と呼ぶ。なぜ遠くに住む人を助けるのか。最も単純なのは人としての思いやりで、飢えや災害、病気に苦しむ人を、どこに住んでいても助けたいと感じる。実利もあり、安定した健康な世界は皆にとって安全で、貧しい国が強くなれば貿易相手になり、ある地の病気を止めれば他の地も守られる。災害直後の緊急援助もあれば、学校や水道、農業を築く長期援助もある。最良の援助は自立を助ける。計画が悪いと無駄になることもあるが、最良の時、世界はつながっているという希望を映す。",
        quiz: [
          { q: "What is 'foreign aid'?", options: ["Help given from one country to another", "A type of tax at home", "A kind of festival"], answer: 0 },
          { q: "What is one practical reason countries give aid?", options: ["A stable, healthy world is safer and can bring trade", "To make the world poorer", "To stop all travel"], answer: 0 },
          { q: "What does the best aid aim to do?", options: ["Help people stand on their own", "Keep people dependent forever", "Waste money"], answer: 0 }
        ]
      },
      {
        id: "d1019-4",
        title: "Momijigari: Japan's Autumn Leaf Viewing",
        level: "★★☆",
        genre: "日本",
        text: "In spring, Japan is famous for its cherry blossoms, but autumn brings a different kind of beauty. As the weather cools, the leaves of maples and other trees turn brilliant shades of red, orange, and gold. Enjoying these colors is a beloved tradition called momijigari, which means autumn leaf hunting, though no hunting is involved. It simply means going out to admire the leaves.\n\nMomijigari has been popular for over a thousand years. Long ago, nobles wrote poems about the changing leaves, and today people of all ages continue the custom. When autumn arrives, families, friends, and travelers visit parks, temples, and mountains famous for their colorful trees.\n\nTiming is important. The leaves change at different times depending on the region and the weather. The colors begin in the cold northern mountains and slowly move south over several weeks. Television and websites even report a leaf-color forecast, so people can plan the best day to visit.\n\nSome of the most beautiful spots are around old temples and gardens, especially in cities like Kyoto. In the evening, certain gardens light up the trees, and the glowing red leaves against the dark sky are a breathtaking sight.\n\nMomijigari is a gentle, quiet pleasure. People walk slowly, take photographs, and share warm food and drink in the crisp air. Like the cherry blossoms of spring, the autumn leaves remind people that beautiful moments do not last forever, which makes them all the more precious to enjoy together.",
        summaryJa: "日本の紅葉狩りについて。春の桜で有名な日本だが、秋は別の美しさをもたらす。涼しくなると楓などの葉が鮮やかな赤・橙・金に染まる。この色を楽しむ愛される習わしが「紅葉狩り」で、「狩り」とあるが狩りはせず、出かけて葉を愛でることを指す。千年以上前から親しまれ、昔は貴族が紅葉の歌を詠み、今も老若が続ける。秋には家族や友人、旅人が名所の公園や寺、山を訪れる。時期が大切で、地域や天気で色づきが異なり、寒い北の山から始まり数週かけて南下する。「紅葉前線」の予報もある。特に京都など古い寺や庭園が美しく、夜はライトアップされ、暗い空に映える赤い葉は見事だ。ゆっくり歩き写真を撮り、温かい飲食を楽しむ静かな喜びだ。桜同様、美しい時は永遠でないと教えてくれる。",
        quiz: [
          { q: "What does 'momijigari' mean?", options: ["Going out to admire autumn leaves", "Hunting animals in autumn", "Planting cherry trees"], answer: 0 },
          { q: "Why does Japan have a 'leaf-color forecast'?", options: ["Leaves change at different times by region and weather", "Leaves never change", "To forecast rain only"], answer: 0 },
          { q: "What do the autumn leaves remind people of?", options: ["That beautiful moments do not last forever", "That winter never comes", "That trees are boring"], answer: 0 }
        ]
      },
      {
        id: "d1019-5",
        title: "How Do Bees Make Honey?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "Honey is one of nature's sweetest gifts, enjoyed by people for thousands of years. We buy it in jars at the shop, but honey is not made in a factory. It is made by tiny insects: honeybees. The way they turn flowers into honey is one of the most amazing processes in nature.\n\nIt all begins with flowers. A worker bee flies from blossom to blossom, drinking a sweet liquid called nectar with its long tongue. It stores the nectar in a special stomach, separate from the one it uses for its own food. When the bee is full, it flies back to the hive, often after visiting hundreds of flowers.\n\nBack at the hive, the bee passes the nectar to other bees, mouth to mouth. As they do this, chemicals in the bees' bodies slowly change the nectar, turning it into honey. The bees then place the honey into small wax rooms called cells. Nectar is still watery, so the bees beat their wings to blow air over it, drying it until it becomes thick and sweet.\n\nFinally, the bees seal each full cell with a cap of wax, saving the honey as food for the winter, when no flowers bloom. A single hive can store a large amount, far more than the bees need, which is why people can share in it.\n\nSo the honey on your toast is the hard work of thousands of bees and millions of flowers, a tiny golden treasure gathered from the summer fields.",
        summaryJa: "ミツバチが蜜を作る仕組みについて。蜂蜜は自然の最も甘い贈り物の一つで、何千年も親しまれてきた。店では瓶で買うが、工場で作られるのではなく、小さな昆虫ミツバチが作る。花を蜂蜜に変える過程は自然で最も驚くべきものの一つだ。始まりは花で、働き蜂が花から花へ飛び、長い舌で花蜜という甘い液を飲み、自分の食事用とは別の特別な胃にためる。満杯になると巣へ戻る。巣では蜜を口移しで他の蜂に渡し、その際に蜂の体内の化学物質が蜜を少しずつ蜂蜜に変える。蜂蜜を巣房という小さな蝋の部屋に入れる。花蜜は水っぽいので羽で風を送って乾かし、濃く甘くする。最後に蝋の蓋で各房を閉じ、花の咲かない冬の食料として蓄える。一つの巣は必要以上に蓄えるため人も分けてもらえる。",
        quiz: [
          { q: "What do worker bees collect from flowers?", options: ["A sweet liquid called nectar", "Small stones", "Water only"], answer: 0 },
          { q: "How do bees dry the nectar into thick honey?", options: ["They beat their wings to blow air over it", "They bake it in an oven", "They freeze it"], answer: 0 },
          { q: "Why do bees store honey?", options: ["As food for winter, when no flowers bloom", "To sell it", "To throw it away"], answer: 0 }
        ]
      }
    ]
    }
  ] };
