/* デイリー配信リーディング
 * 毎朝の自動ルーチンがこのファイルを丸ごと上書き生成する（直近 7 日分を保持）。
 * days は日付降順。各 day = { date: "YYYY-MM-DD", passages: [readingPassages と同スキーマ + genre] }
 * このファイル以外は手書きデータであり、ルーチンは触らない。
 */
window.KE_DATA = window.KE_DATA || {};

KE_DATA.dailyReading = { days: [
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
    },
    {
    date: "2026-10-18",
    passages: [
      {
        id: "d1018-1",
        title: "Why First Impressions Matter in Business",
        level: "★★☆",
        genre: "ビジネス",
        text: "They say you never get a second chance to make a first impression. In business, this old saying is especially true. Within the first few seconds of meeting someone, people form an opinion that can be hard to change. For a company or a worker, a good first impression can open doors, while a poor one can close them.\n\nWhy do first impressions form so quickly? The human brain is built to judge situations fast. When we meet a new person or enter a new shop, we notice many small things at once: how someone is dressed, how they speak, whether they smile, and whether a place looks clean and organized. From these clues, we quickly decide whether to trust what we see.\n\nIn business, first impressions appear in many forms. A salesperson's greeting, the design of a website, or the tidiness of a store can all shape how customers feel before a single word about the product is spoken. A warm welcome and a neat appearance suggest care and professionalism.\n\nThe good news is that first impressions can be managed. Simple actions help: arriving on time, listening carefully, dressing suitably, and showing genuine interest in the other person. These cost nothing but attention.\n\nOf course, a good first impression is only a beginning. It must be followed by honest work and real quality, or trust will fade. Still, because people decide so fast, that first moment is a chance worth taking seriously. A strong start makes everything that follows easier.",
        summaryJa: "ビジネスで第一印象が大切な理由について。「第一印象をやり直す機会は二度とない」とよく言われ、ビジネスでは特に真実だ。人は出会って数秒で意見を形成し、それは覆しにくい。良い第一印象は扉を開き、悪ければ閉ざす。脳は状況を素早く判断するよう作られ、新しい人や店で服装・話し方・笑顔・清潔さなど多くの手がかりを一度に捉え、信頼するか瞬時に決める。ビジネスでは、販売員の挨拶、ウェブサイトの作り、店の整頓などが、商品の話を聞く前に客の感情を左右する。時間厳守、傾聴、適切な服装、相手への関心で印象は整えられる。ただし第一印象は始まりにすぎず、誠実な仕事と品質が続かねば信頼は薄れる。",
        quiz: [
          { q: "Why do first impressions form so quickly?", options: ["The brain is built to judge situations fast", "People think very slowly", "There are no clues to notice"], answer: 0 },
          { q: "What can shape a customer's first impression in business?", options: ["A greeting, a website's design, or a tidy store", "Only the product's price", "Nothing at all"], answer: 0 },
          { q: "What does the passage say a good first impression must be followed by?", options: ["Honest work and real quality", "Nothing more", "A second meeting only"], answer: 0 }
        ]
      },
      {
        id: "d1018-2",
        title: "How a Microwave Oven Heats Food",
        level: "★★☆",
        genre: "テクノロジー",
        text: "A microwave oven can heat a bowl of soup in just a minute, far faster than a stove. It seems almost magical: there is no flame and no glowing element, yet the food becomes hot. How does a microwave warm food so quickly without any obvious source of heat?\n\nThe secret is a type of invisible wave called a microwave, which gives the oven its name. These are a kind of radio wave, similar to the waves that carry signals to a phone, but tuned for a special job. Inside the oven, a part called the magnetron produces these waves and sends them into the cooking space.\n\nHere is the clever part. Microwaves affect water. Almost all food contains water, and the microwaves make the tiny water molecules inside the food vibrate very fast. This rapid shaking creates heat, warming the food from the inside as well as the outside. Because the energy goes straight to the water in the food, heating is very quick.\n\nThis also explains some common experiences. A dry plate stays cool because it has little water, while the food on it becomes hot. Foods heat unevenly if the water is not spread evenly, which is why many ovens have a turning plate to help.\n\nMicrowaves are safe when the oven is used correctly, because the metal body and the screen in the door keep the waves inside. Fast, clean, and simple, the microwave oven has become one of the most common machines in kitchens around the world.",
        summaryJa: "電子レンジが食品を温める仕組みについて。電子レンジはスープを1分ほどで温め、コンロよりずっと速い。炎も赤く光る部分もないのに食品が熱くなり、魔法のようだ。鍵はマイクロ波という目に見えない波で、これが名前の由来だ。これはスマホに信号を運ぶ電波に似た一種で、特別な用途に調整されている。庫内のマグネトロンという部品が波を作り、調理空間へ送る。巧妙なのは、マイクロ波が水に作用する点だ。ほとんどの食品は水を含み、波が食品内の小さな水分子を高速で振動させる。その激しい揺れが熱を生み、内側からも温める。水の少ない皿は冷たいままで上の食品は熱くなる。水が偏ると加熱も偏るため回転皿がある。金属の本体と扉の網が波を閉じ込め安全だ。",
        quiz: [
          { q: "What produces the microwaves inside the oven?", options: ["A part called the magnetron", "A small flame", "A light bulb"], answer: 0 },
          { q: "How do microwaves heat food?", options: ["They make water molecules in the food vibrate fast", "They set the food on fire", "They blow hot air"], answer: 0 },
          { q: "Why does a dry plate stay cool?", options: ["It has little water", "It is made of water", "Microwaves avoid food"], answer: 0 }
        ]
      },
      {
        id: "d1018-3",
        title: "How the World Works Together to Fight Disease",
        level: "★★★",
        genre: "世界情勢",
        text: "A disease does not need a passport. A sickness that begins in one country can travel across the world in days, carried by travelers on airplanes. Because germs ignore borders, protecting human health has become a task that no single nation can manage alone. Fighting disease is one of the most important examples of global cooperation.\n\nCountries work together in several ways. They share information quickly when a new illness appears, so that doctors everywhere can prepare. They send scientists and medical teams to places where an outbreak is spreading. A global health organization helps coordinate this work, setting shared rules and advice that nations can follow.\n\nOne of the greatest achievements of this cooperation is vaccines. When a dangerous disease spreads, scientists around the world may race to develop a vaccine, then share it widely. Working together, nations once managed to wipe out smallpox, a disease that had killed millions for centuries. It is now gone from the world, a victory that belonged to all of humanity.\n\nChallenges remain. Poorer countries sometimes cannot afford medicines, so richer nations and charities help pay for them. Diseases can also return if people stop being careful. And cooperation can be slowed by disagreements between countries.\n\nStill, the pattern is clear. When a serious illness threatens the world, people of many nations, languages, and beliefs often unite against a common enemy. In the fight for health, the world has learned that we are safest when we protect one another.",
        summaryJa: "世界が協力して病気と闘う仕組みについて。病気にパスポートは要らない。ある国で始まった病が、飛行機の旅行者により数日で世界へ広がる。病原体は国境を無視するため、健康を守ることは一国だけでは担えない課題だ。病気との闘いは国際協力の最も重要な例の一つだ。各国は新しい病が現れると情報を素早く共有し、各地の医師が備える。流行地へ科学者や医療チームを送る。世界的な保健機関が共通の規則と助言を定め調整する。最大の成果の一つがワクチンで、危険な病が広がると世界の科学者が開発を急ぎ広く共有する。協力により天然痘を根絶し、今や世界から消えた。貧しい国の薬代を豊かな国や慈善団体が支える。油断で病が戻ることもあり、対立で協力が遅れることもある。それでも脅威の前に人々は団結する。",
        quiz: [
          { q: "Why can't one country fight disease alone?", options: ["Germs ignore borders and spread between countries", "Diseases stay in one place", "Only one country has doctors"], answer: 0 },
          { q: "What is one great achievement of global cooperation mentioned?", options: ["Wiping out smallpox with vaccines", "Ending all travel", "Closing all hospitals"], answer: 0 },
          { q: "How do richer nations help poorer ones fight disease?", options: ["By helping pay for medicines", "By taking their doctors away", "By hiding information"], answer: 0 }
        ]
      },
      {
        id: "d1018-4",
        title: "Maneki-neko: The Beckoning Cat",
        level: "★★☆",
        genre: "日本",
        text: "If you have visited a Japanese restaurant or shop, you may have seen a small cat figure near the entrance, with one paw raised as if waving. This is the maneki-neko, which means beckoning cat. Far from being a simple decoration, it is a well-loved symbol believed to bring good luck and fortune, especially to businesses.\n\nThe cat's raised paw is the key. In Japan, people beckon others to come closer with a gesture like this. So the maneki-neko appears to be inviting customers, money, and good luck into a shop. Which paw is raised can carry a meaning too: a raised left paw is often said to invite customers, while a raised right paw is said to invite wealth.\n\nThe figures come in different colors, and each is believed to bring a different kind of luck. A white cat stands for happiness, a gold one for money, and a black one for protection from harm. Many cats also wear a small bell or a red collar, a style once seen on pet cats long ago.\n\nThere are many old stories about how the lucky cat began. In one famous tale, a cat raised its paw to a passing lord, inviting him into a temple, and moments later he was saved from a storm. Grateful, he became the temple's supporter.\n\nToday the maneki-neko is known around the world. Cheerful and welcoming, it continues to wave its little paw, wishing good fortune to everyone who passes by.",
        summaryJa: "招き猫について。日本の飲食店や店の入口近くで、片方の前足を手招きのように上げた小さな猫の置物を見たことがあるかもしれない。これが招き猫だ。単なる飾りでなく、特に商売に幸運と富をもたらすと信じられる愛される縁起物だ。鍵は上げた前足で、日本では人をこの仕草で招く。だから招き猫は客やお金、幸運を店へ招くように見える。どちらの足かにも意味があり、左足は客を、右足は富を招くとよく言われる。色も様々で、白は幸福、金はお金、黒は魔除けとされる。鈴や赤い首輪を着けた猫も多く、昔の飼い猫の装いだ。由来の古い話も多く、ある猫が領主を手招きして寺へ招き、直後に嵐から救った話は有名だ。今や世界で知られ、幸運を願い手招きを続ける。",
        quiz: [
          { q: "What does 'maneki-neko' mean?", options: ["Beckoning cat", "Sleeping cat", "Big dog"], answer: 0 },
          { q: "What is the raised paw believed to do?", options: ["Invite customers, money, and good luck", "Scare people away", "Clean the shop"], answer: 0 },
          { q: "What is a gold maneki-neko believed to bring?", options: ["Money", "Rain", "Bad luck"], answer: 0 }
        ]
      },
      {
        id: "d1018-5",
        title: "Why Do We Dream?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "Every night, when we fall into a deep sleep, our minds create strange and vivid stories called dreams. Some are happy, some are frightening, and many are quickly forgotten when we wake. People have wondered about the meaning of dreams for thousands of years. Even today, scientists are still working to understand why we dream at all.\n\nDreams happen mostly during a stage of sleep when the brain is very active, almost as busy as when we are awake. During this time, the eyes move quickly behind closed lids, and the most vivid dreams occur. Everyone dreams, even people who do not remember doing so.\n\nScientists have several ideas about why we dream. One popular idea is that dreaming helps the brain sort through the day's events, keeping important memories and letting go of unimportant ones. This may be why a good night's sleep helps us learn.\n\nAnother idea is that dreams let us safely practice dealing with problems or fears. By facing a frightening situation in a dream, the mind may prepare itself for real life. Some scientists think dreams are simply the brain making sense of random signals while it rests.\n\nThe truth is that no one knows for certain, and dreaming may do several of these things at once. What is clear is that dreams are a normal and healthy part of sleep.\n\nSo the next time you wake from a strange dream, remember that your resting brain was quietly at work, sorting, practicing, and perhaps telling itself a story in the dark.",
        summaryJa: "なぜ夢を見るのかについて。毎晩、深い眠りに入ると、心は夢という不思議で鮮明な物語を作る。楽しいもの、怖いものがあり、目覚めると多くは忘れられる。人は何千年も夢の意味を考えてきたが、なぜ夢を見るのか科学者は今も解明中だ。夢は主に脳が非常に活発な睡眠段階で起こり、覚醒時に近いほど忙しい。この間、閉じたまぶたの奥で目が素早く動き、最も鮮明な夢が現れる。誰もが夢を見るが、覚えていない人もいる。説はいくつかあり、一つは脳が一日の出来事を整理し、重要な記憶を残し不要なものを捨てるのを助けるというもので、よい睡眠が学習を助ける理由かもしれない。問題や恐れへの対処を安全に練習させるという説もある。休息中の無作為な信号を脳が意味づけしているだけという見方もある。確かなことは誰も知らないが、夢は正常で健康な睡眠の一部だ。",
        quiz: [
          { q: "When do the most vivid dreams happen?", options: ["During a sleep stage when the brain is very active", "Only when fully awake", "Never"], answer: 0 },
          { q: "What is one popular idea about why we dream?", options: ["Dreaming helps the brain sort through memories", "Dreams make us taller", "Dreams stop the heart"], answer: 0 },
          { q: "What does the passage say is clear about dreams?", options: ["They are a normal and healthy part of sleep", "They are always bad", "Only some people dream"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-10-17",
    passages: [
      {
        id: "d1017-1",
        title: "What Makes a Good Leader?",
        level: "★★☆",
        genre: "ビジネス",
        text: "In every company, team, or group, someone usually takes the role of leader. A leader guides others toward a shared goal. But not all leaders are equal. Some inspire people to do their best work, while others leave their teams tired and unhappy. So what makes a good leader?\n\nOne important quality is clear communication. A good leader explains the goal so that everyone understands where the team is going and why. When people know the purpose of their work, they feel more motivated and make better decisions on their own.\n\nAnother quality is listening. Weak leaders only give orders, but strong leaders also listen carefully to their team. They ask for ideas, pay attention to problems, and are willing to change their minds when someone has a better suggestion. This makes workers feel respected and valued.\n\nGood leaders also stay calm under pressure. When something goes wrong, a panicking leader spreads fear, while a steady leader helps the team think clearly and find a solution. Taking responsibility for mistakes, instead of blaming others, builds deep trust.\n\nFinally, the best leaders care about the people they lead, not just the results. They notice when someone is struggling and offer support. Over time, this kindness creates a loyal and hardworking team.\n\nLeadership is not about being the loudest person in the room or simply giving orders. It is about guiding, listening, and caring. A truly good leader helps others grow, and in doing so, helps the whole team succeed together.",
        summaryJa: "良いリーダーとは何かについて。どの会社やチームにも、普通は誰かがリーダー役を担い、共通の目標へ皆を導く。だが全てのリーダーが同じではなく、人の力を引き出す人もいれば、チームを疲れさせる人もいる。良いリーダーの条件は何か。一つは明確な伝達で、目標とその理由を説明し、皆が目的を理解すると意欲が高まり自ら良い判断をする。もう一つは傾聴で、命じるだけでなく意見を求め、より良い提案には考えを変える。すると部下は尊重されていると感じる。危機でも冷静で、失敗を人のせいにせず責任を取る姿勢が信頼を生む。さらに最良のリーダーは成果だけでなく人を気にかけ、苦しむ人を支える。声の大きさや命令でなく、導き・聴き・思いやることがリーダーシップだ。",
        quiz: [
          { q: "What is one important quality of a good leader?", options: ["Clear communication of the goal", "Keeping all plans secret", "Never speaking to the team"], answer: 0 },
          { q: "How do strong leaders treat their team's ideas?", options: ["They listen and may change their minds", "They ignore every idea", "They forbid all suggestions"], answer: 0 },
          { q: "What does a good leader do when a mistake happens?", options: ["Takes responsibility instead of blaming others", "Panics and spreads fear", "Hides from the team"], answer: 0 }
        ]
      },
      {
        id: "d1017-2",
        title: "How Telescopes Let Us See the Universe",
        level: "★★☆",
        genre: "テクノロジー",
        text: "On a clear night, we can see thousands of stars with our eyes alone. But the universe holds far more than we can see this way. To look deeper into space, scientists use telescopes, instruments that make faraway objects appear closer and brighter. Thanks to them, we have discovered planets, galaxies, and the history of the universe itself.\n\nHow does a telescope work? The main job of a telescope is to collect light. Our eyes are small, so they gather only a little light. A telescope has a large lens or, more often, a large curved mirror that gathers much more. The bigger the mirror, the more light it catches, and the fainter the objects it can show. The telescope then focuses this light into a clear, bright image.\n\nDifferent telescopes see different things. Some study ordinary light, the kind our eyes can see. Others are built to detect kinds of light that are invisible to us, such as ultraviolet light or radio waves. By studying these hidden forms of light, scientists learn things that no ordinary photograph could reveal.\n\nThe most powerful telescopes are placed in space. Above the Earth's air, which blurs and blocks light, they get a perfectly clear view. Space telescopes have sent back amazing images of distant galaxies billions of light-years away.\n\nEvery telescope, from a small one in a garden to a giant in orbit, does the same wonderful thing. It gathers ancient light from across the universe and lets human beings explore worlds we can never visit.",
        summaryJa: "望遠鏡が宇宙を見せてくれる仕組みについて。晴れた夜には肉眼で何千もの星が見えるが、宇宙はそれよりはるかに多くを抱える。より深く見るため科学者は望遠鏡を使い、遠くの物を近く明るく見せる。おかげで惑星や銀河、宇宙の歴史まで分かった。望遠鏡の主な仕事は光を集めることだ。目は小さく少しの光しか集められないが、望遠鏡は大きなレンズや、多くは大きな曲面鏡でずっと多く集める。鏡が大きいほど多くの光を捉え、暗い天体も見える。その光を鮮明な像に結ぶ。普通の光を見るものもあれば、紫外線や電波など目に見えない光を捉えるものもある。最も強力なものは宇宙に置かれ、大気のゆがみを避けて鮮明に見る。はるか彼方の銀河の像を送ってきた。",
        quiz: [
          { q: "What is the main job of a telescope?", options: ["To collect light", "To make noise", "To heat the stars"], answer: 0 },
          { q: "Why can bigger mirrors show fainter objects?", options: ["They catch more light", "They are heavier", "They are closer to stars"], answer: 0 },
          { q: "Why are the most powerful telescopes placed in space?", options: ["Above the air, they get a perfectly clear view", "Space is warmer", "There is no reason"], answer: 0 }
        ]
      },
      {
        id: "d1017-3",
        title: "How the World Protects Endangered Animals",
        level: "★★★",
        genre: "世界情勢",
        text: "Across the world, many kinds of animals are in danger of disappearing forever. Elephants, tigers, sea turtles, and countless others have become rare. When a species vanishes, it is gone for all time. Because animals do not respect borders, protecting them has become a task that nations must share.\n\nAnimals become endangered for several reasons. People clear forests where they live, hunt them illegally, or pollute their rivers and seas. A warming climate also forces some animals out of their natural homes. Often, a single country cannot solve these problems alone, because the same animals migrate across many lands and oceans.\n\nFor this reason, countries have made agreements to protect wildlife together. One important agreement controls the trade of endangered animals and their parts, making it illegal to buy or sell them across borders. This helps reduce the hunting of rare creatures for profit.\n\nNations cooperate in other ways too. They create protected parks where animals can live safely, share scientific knowledge, and send money to poorer countries to help them guard their forests and seas. Rangers from different nations are even trained to stop illegal hunters.\n\nThere have been real successes. Some animals that were once nearly extinct, such as certain whales, have slowly grown in number again thanks to international protection.\n\nThe work is far from over, and many species remain at risk. Yet the effort shows an important truth: the natural world belongs to everyone, and saving it is a responsibility that crosses every border.",
        summaryJa: "世界が絶滅危惧動物を守る仕組みについて。世界中で多くの動物が永久に姿を消す危機にある。ゾウやトラ、ウミガメなど多くが希少になった。種が消えれば二度と戻らない。動物は国境を守らないため、保護は各国が分担すべき課題だ。原因は、生息地の森の伐採、密猟、川や海の汚染で、温暖化も住みかを奪う。同じ動物が多くの土地や海を渡るため、一国だけでは解決できない。そこで各国は協力して野生動物を守る取り決めを作った。重要な協定は絶滅危惧種やその部位の国際取引を規制し、売買を違法とする。各国は保護区を作り、科学知識を共有し、貧しい国へ資金を送り、監視員を訓練する。国際的保護でクジラなどが回復した例もある。自然は皆のものだ。",
        quiz: [
          { q: "Why must nations share the task of protecting animals?", options: ["Animals migrate across borders and oceans", "Animals belong to one country", "Borders stop all animals"], answer: 0 },
          { q: "What does one important agreement control?", options: ["The trade of endangered animals across borders", "The price of food", "The speed of cars"], answer: 0 },
          { q: "What is one success mentioned?", options: ["Some whales have grown in number again", "All animals are now safe", "Hunting has completely ended"], answer: 0 }
        ]
      },
      {
        id: "d1017-4",
        title: "Soba and Udon: Japan's Beloved Noodles",
        level: "★★☆",
        genre: "日本",
        text: "Noodles are one of the most popular foods in Japan, enjoyed quickly at a train station or slowly at home. Among the many kinds, two of the most loved are soba and udon. Though both are noodles served in a tasty broth, they are quite different, and many Japanese people have a strong favorite.\n\nSoba noodles are thin and brownish-gray, made from buckwheat flour. They have a slightly nutty taste and a firm texture. Soba can be served hot in a warm soup or cold on a bamboo tray with a dipping sauce, which is especially popular in summer. Buckwheat is also seen as healthy, which adds to soba's good reputation.\n\nUdon noodles are thick, white, and soft, made from wheat flour. They are chewy and mild in flavor, which makes them comforting, especially on a cold day. Udon is usually served hot in a light, warm broth, often topped with green onions, a piece of fried food called tempura, or a raw egg.\n\nBoth noodles are sold everywhere, from simple stand-up shops in stations to fine restaurants. Each region of Japan has its own style, broth, and toppings, so the same dish can taste different from town to town.\n\nThere is even a tradition of eating soba on New Year's Eve, as the long noodles are said to represent a long life. Whether thin and nutty or thick and soft, these noodles are a warm and everyday part of life in Japan.",
        summaryJa: "日本の人気麺、そばとうどんについて。麺は日本で最も人気の食べ物の一つで、駅で手早く、家でゆっくり楽しまれる。中でも特に愛されるのがそばとうどんだ。どちらもおいしい汁で食べる麺だが、かなり違い、好みが分かれる。そばは細く茶灰色で、そば粉から作られ、やや香ばしく歯ごたえがある。温かい汁でも、夏に人気の冷たいせいろ（つけ汁）でも食べる。健康的ともされる。うどんは太く白くやわらかで、小麦粉から作られ、もちもちして穏やかな味で、寒い日に心地よい。温かい薄い汁で、ねぎ・天ぷら・生卵をのせることが多い。地域ごとに汁や具が違う。大晦日に長寿を願ってそばを食べる習わしもある。日常の温かい一部だ。",
        quiz: [
          { q: "What is soba made from?", options: ["Buckwheat flour", "Rice only", "Potatoes"], answer: 0 },
          { q: "How are udon noodles described?", options: ["Thick, white, and soft", "Thin and brownish-gray", "Hard and salty"], answer: 0 },
          { q: "Why is soba eaten on New Year's Eve?", options: ["The long noodles are said to represent a long life", "It is the cheapest food", "It must be eaten cold"], answer: 0 }
        ]
      },
      {
        id: "d1017-5",
        title: "Why Do Birds Migrate?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "Every year, as the seasons change, billions of birds make long journeys across the Earth. Some fly thousands of kilometers, from one continent to another, and then return months later. This amazing travel is called migration. But why do birds take such difficult and dangerous trips instead of simply staying in one place?\n\nThe main reason is food. In autumn, as the weather turns cold in northern lands, insects disappear and plants stop growing. Food becomes scarce. Rather than starve through the winter, many birds fly south to warmer regions where food is still plentiful. When spring returns and the north grows rich with food again, they fly back to raise their young.\n\nMigration is also about safety and space for breeding. The far north has long summer days and few predators, making it a good place to lay eggs and feed chicks. So birds travel north in spring to breed and south in autumn to survive.\n\nHow birds find their way is one of nature's great mysteries. Scientists believe they use the Sun and stars, remember landmarks like rivers and coasts, and can even sense the Earth's magnetic field, like a built-in compass. Young birds often know which way to go without being taught.\n\nMigration is hard and risky. Birds face storms, tiredness, and hunger along the way. Yet this incredible journey has helped birds survive for millions of years, following the food and the warmth in an endless rhythm around our turning planet.",
        summaryJa: "鳥が渡りをする理由について。毎年、季節が変わると何十億もの鳥が地球上を長く旅する。大陸から大陸へ何千キロも飛び、数か月後に戻るものもいる。この驚くべき移動を渡りと呼ぶ。なぜ一か所にとどまらず、難しく危険な旅をするのか。主な理由は食べ物だ。秋に北の地が寒くなると昆虫が消え植物も育たず、食料が乏しくなる。冬に飢えるより、多くの鳥は食料の豊富な暖かい南へ飛ぶ。春に北が再び豊かになると戻って子を育てる。渡りは繁殖の安全と空間のためでもあり、北の長い夏の日と少ない天敵は産卵と育雛に適する。方角の見つけ方は謎で、太陽や星、川や海岸の記憶、地球の磁場の感知（体内の羅針盤）を使うとされる。嵐や疲れ、空腹の危険があるが、何百万年も鳥を生かしてきた。",
        quiz: [
          { q: "What is the main reason birds migrate?", options: ["To find food", "To get lost", "To avoid flying"], answer: 0 },
          { q: "Why do many birds travel to the far north in spring?", options: ["It is a good, safe place to breed", "It has no food", "It is always dark"], answer: 0 },
          { q: "How do scientists think birds find their way?", options: ["Using the Sun, stars, landmarks, and Earth's magnetic field", "By asking people", "By reading maps"], answer: 0 }
        ]
      }
    ]
    }
  ] };
