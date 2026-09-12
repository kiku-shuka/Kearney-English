/* デイリー配信リーディング
 * 毎朝の自動ルーチンがこのファイルを丸ごと上書き生成する（直近 7 日分を保持）。
 * days は日付降順。各 day = { date: "YYYY-MM-DD", passages: [readingPassages と同スキーマ + genre] }
 * このファイル以外は手書きデータであり、ルーチンは触らない。
 */
window.KE_DATA = window.KE_DATA || {};

KE_DATA.dailyReading = { days: [
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
    },
    {
    date: "2026-09-11",
    passages: [
      {
        id: "d0911-1",
        title: "What Is a Brand?",
        level: "★★☆",
        genre: "ビジネス",
        text: "When you see a famous logo — a simple shape or a single word — you may instantly feel something: trust, excitement, or comfort. That feeling is the heart of a \"brand.\" A brand is much more than a name or a picture. It is the whole idea that lives in people's minds when they think of a company.\n\nWhy do brands matter so much? Because people cannot test everything before they buy it. A strong brand acts like a promise. When customers see a trusted name, they expect a certain level of quality, and they feel safe choosing it. This trust, built over many years, is one of the most valuable things a company can own.\n\nA brand is built from many small pieces: the quality of the product, the way staff treat customers, the design of the logo, and even the feeling of the advertisements. All of these work together to shape one clear impression.\n\nA good brand also helps a company charge a fair price and stand out from cheaper rivals. People are often willing to pay a little more for a name they trust.\n\nBut a brand is fragile. It takes years to build and can be damaged quickly by one broken promise or poor experience. That is why wise companies protect their brand carefully. In the end, a brand is simply trust, made visible in a name.",
        summaryJa: "有名なロゴ——単純な図形や一語——を見ると、人は瞬時に何かを感じる。信頼や高揚、安心だ。その感覚が「ブランド」の核心だ。ブランドは名前や絵以上のもので、企業を思うとき人の心に生きる全体の像だ。なぜそれほど重要か。人は買う前にすべてを試せないからだ。強いブランドは約束のように働く。信頼される名前を見ると、客は一定の品質を期待し、安心して選べる。長年かけて築かれたこの信頼は、企業が持ちうる最も価値ある物の一つだ。ブランドは多くの小さな要素——製品の質、店員の対応、ロゴのデザイン、広告の感じ——から築かれ、それらが一つの明確な印象を形づくる。良いブランドは適正価格を可能にし、安い競合との差別化も助ける。人は信頼する名前に少し多く払うことをいとわない。だがブランドは壊れやすく、築くのに何年もかかり、一度の破られた約束で急速に傷つく。だから賢い企業はブランドを慎重に守る。ブランドとは、名前に見える形になった信頼だ。",
        quiz: [
          { q: "What is a brand, according to the passage?", options: ["The whole idea and feeling in people's minds when they think of a company", "Only a picture", "A type of product only"], answer: 0 },
          { q: "Why does a strong brand matter?", options: ["It acts like a promise of quality, so customers feel safe choosing it", "It hides the product", "It makes customers distrust the company"], answer: 0 },
          { q: "Why is a brand described as fragile?", options: ["It takes years to build but can be damaged quickly by one broken promise", "It can never be harmed", "It is built in a single day"], answer: 0 }
        ]
      },
      {
        id: "d0911-2",
        title: "How Wireless Charging Works",
        level: "★★★",
        genre: "テクノロジー",
        text: "Many people now charge their phones simply by setting them on a pad, with no cable at all. It can feel like magic: energy seems to jump from the pad into the phone through empty air. But behind this everyday convenience is a clever piece of science that is more than a hundred years old.\n\nThe secret is a link between electricity and magnetism. When electricity flows through a coil of wire, it creates an invisible magnetic field around it. If a second coil is placed close by, that changing magnetic field can push electricity through the second coil. In this way, energy passes from one coil to the other without any wire touching.\n\nInside a charging pad is one coil, and inside your phone is another. When the two are close, energy flows across the tiny gap and charges the battery. This is why the phone must sit in just the right spot: the coils need to line up.\n\nWireless charging is wonderfully convenient, but it has limits. It usually works only over a very short distance, and some energy is lost as heat, so it can be a little slower than a cable.\n\nEngineers are still improving the technology, hoping one day to charge devices from farther away. For now, though, that small pad on your desk quietly performs a trick that once amazed the greatest scientists.",
        summaryJa: "今、多くの人はケーブルなしで、台に置くだけで電話を充電する。魔法のようだ。エネルギーが何もない空間を通って台から電話へ飛び移るように見える。だがこの日常の便利さの裏には、100年以上前からある巧みな科学がある。秘密は電気と磁気のつながりだ。電線のコイルに電気が流れると、周りに見えない磁場ができる。近くに第二のコイルを置くと、その変化する磁場が第二のコイルに電気を押し流す。こうして電線が触れずにエネルギーが一方のコイルから他方へ渡る。充電台の中に一つのコイル、電話の中にもう一つがある。二つが近いと、わずかな隙間を越えてエネルギーが流れ電池を充電する。だから電話は正しい位置に置く必要がある。コイルが揃わねばならないのだ。無線充電はとても便利だが限界もある。ごく短い距離でしか働かず、一部は熱として失われるためケーブルより少し遅いこともある。技術者はなお改良を続け、いつかもっと遠くから充電したいと望む。今はあの小さな台が、かつて偉大な科学者を驚かせた技を静かに行っている。",
        quiz: [
          { q: "What is the secret behind wireless charging?", options: ["A link between electricity and magnetism using coils of wire", "A hidden battery in the air", "Tiny invisible cables"], answer: 0 },
          { q: "Why must the phone sit in just the right spot on the pad?", options: ["The two coils need to line up for energy to flow", "So it looks nice", "So the phone stays cold"], answer: 0 },
          { q: "What is one limit of wireless charging?", options: ["It works only over a very short distance and some energy is lost as heat", "It works from any distance perfectly", "It never loses any energy"], answer: 0 }
        ]
      },
      {
        id: "d0911-3",
        title: "Living in Many Time Zones",
        level: "★★☆",
        genre: "世界情勢",
        text: "When it is morning in one country, it is the middle of the night in another. Our planet is divided into time zones, so that noon happens roughly when the sun is highest in each place. This simple idea shapes daily life across the whole world in ways we often forget.\n\nTime zones exist because the Earth turns. As it spins, the sun rises on different parts of the world at different moments. To keep clocks in step with the sun, the world is split into zones, each usually one hour apart from its neighbor. Cross enough of them, and you may arrive before you \"left,\" at least on the clock.\n\nIn our connected age, time zones matter more than ever. A team may have members in three countries, all trying to meet at a time that is polite for everyone. A trader watches markets that open while their own city sleeps. Families spread across the globe must find a shared hour to talk.\n\nTime zones can cause trouble, too. Travelers feel tired and confused after long flights, a feeling called jet lag, as their bodies slowly catch up to local time.\n\nStill, this global system is a quiet marvel of cooperation. By agreeing on how to measure time, billions of people can plan, meet, and work together across a spinning planet — each in their own daylight, yet connected to all the rest.",
        summaryJa: "ある国で朝のとき、別の国では真夜中だ。地球は時間帯(タイムゾーン)に分けられ、各地で太陽が最も高い頃におよそ正午が来るようになっている。この単純な考えが、忘れがちだが世界中の日常を形づくる。時間帯があるのは地球が回るからだ。自転するにつれ、太陽は世界の異なる場所で異なる瞬間に昇る。時計を太陽に合わせるため、世界は隣とふつう1時間差の帯に分けられる。十分に越えれば、時計の上では「出発前」に着くこともある。つながった時代に、時間帯はかつてなく重要だ。3か国のメンバーが皆に失礼でない時刻に会おうとし、自分の街が眠る間に開く市場を見る人がいて、世界に散った家族は話せる共通の時刻を探す。時間帯は厄介も生む。長距離飛行の後、体が現地時間に追いつくまで疲れ混乱する「時差ぼけ」だ。それでもこの世界的な仕組みは協力の静かな驚異だ。時間の測り方に合意することで、何十億もの人が回る惑星で計画し、会い、共に働ける。",
        quiz: [
          { q: "Why do time zones exist?", options: ["Because the Earth turns, so the sun rises at different moments in different places", "Because clocks are broken", "Because the sun never moves"], answer: 0 },
          { q: "Why do time zones matter more in our connected age?", options: ["Teams, traders, and families across countries must find shared times", "Because no one travels", "Because time has stopped mattering"], answer: 0 },
          { q: "What is 'jet lag'?", options: ["Feeling tired and confused after long flights as the body catches up to local time", "A type of airplane", "A fast train"], answer: 0 }
        ]
      },
      {
        id: "d0911-4",
        title: "Kintsugi: Finding Beauty in Broken Things",
        level: "★★☆",
        genre: "日本",
        text: "When a favorite bowl or cup breaks, most people throw it away or hide the crack. In Japan, there is a very different tradition. It is called \"kintsugi,\" which means \"golden joining.\" Instead of hiding the damage, a skilled worker mends the broken pieces with a special glue mixed with gold. The repaired lines shine brightly, and the crack becomes a beautiful part of the object.\n\nThis craft is more than a clever way to fix pottery. It carries a gentle philosophy about life. A kintsugi bowl does not pretend to be perfect or new. Its history — the moment it broke and was carefully healed — is shown with pride, not shame. The object becomes more precious because of what it has been through, not in spite of it.\n\nMany people find comfort in this idea. It suggests that scars, mistakes, and hard times are part of who we are, and that they can even add to our beauty. A person who has struggled and recovered, like a mended bowl, may be stronger and more interesting than before.\n\nKintsugi takes patience. The gold lines are added slowly and with great care, and the finished piece is truly unique.\n\nIn a world that often throws away what is broken, kintsugi offers a kinder message: that damage is not the end. With care, something broken can become whole again — and even more beautiful.",
        summaryJa: "お気に入りの茶碗やカップが割れると、多くの人は捨てるかひびを隠す。日本にはまったく違う伝統がある。「金継ぎ」——金でつなぐという意味だ。傷を隠すのでなく、熟練者が割れた破片を金を混ぜた特別な接着剤で直す。継いだ線は明るく輝き、ひびが器の美しい一部になる。この技は陶器を直す巧みな方法以上のものだ。人生についての優しい哲学を宿す。金継ぎの器は完璧や新品のふりをしない。割れて丁寧に癒された歴史を、恥でなく誇りとして示す。器は経てきたことのおかげで、それにもかかわらずではなく、より貴重になる。多くの人はこの考えに慰めを見出す。傷や失敗、苦難は自分の一部であり、美しささえ加えうると示すからだ。もがき立ち直った人は、継がれた器のように以前より強く興味深いかもしれない。金継ぎには忍耐が要る。金の線はゆっくり丁寧に加えられ、仕上がりは唯一無二だ。壊れた物を捨てがちな世界で、金継ぎは優しい伝言を与える。傷は終わりではない。手をかければ、壊れた物は再び完全になり、さらに美しくなれる。",
        quiz: [
          { q: "What is 'kintsugi'?", options: ["Mending broken pottery with a special glue mixed with gold", "Throwing away broken bowls", "Painting new bowls"], answer: 0 },
          { q: "What philosophy does kintsugi carry?", options: ["An object's history and scars can make it more precious, not less", "That objects must always look new", "That mistakes should be hidden forever"], answer: 0 },
          { q: "What kinder message does kintsugi offer?", options: ["Damage is not the end; something broken can become whole and even more beautiful", "Broken things are worthless", "Nothing can ever be repaired"], answer: 0 }
        ]
      },
      {
        id: "d0911-5",
        title: "Why the World Depends on Bees",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "When we think of important animals, we may picture large creatures like elephants or whales. But some of the most important animals on Earth are tiny: bees. These small insects play a huge role in growing the food we eat, and their health matters to everyone.\n\nBees help plants through something called pollination. As a bee moves from flower to flower to collect food, it carries a fine powder called pollen on its body. This pollen lets plants make seeds and fruit. Without it, many plants could not reproduce. A large share of the fruits, vegetables, and nuts we enjoy depends on bees and other pollinators doing this quiet work.\n\nIn recent years, scientists have grown worried. In some places, bee numbers have fallen. The causes are complex, and may include loss of wild flowers, disease, and certain chemicals used on farms. Fewer bees could mean less food and higher prices.\n\nThe good news is that people can help. Farmers can leave wild areas for bees to feed. Cities can plant flowers in parks and gardens. Even a small balcony with a few flowering plants can offer bees a meal.\n\nProtecting bees is really about protecting ourselves. These tiny workers remind us that in nature, everything is connected. Something as small as a bee can hold up a large part of the world's dinner table.",
        summaryJa: "大切な動物というと、ゾウやクジラのような大きな生き物を思い浮かべるかもしれない。だが地球で最も重要な動物のいくつかは小さい。ミツバチだ。この小さな昆虫は、私たちが食べる食物を育てる上で大きな役割を果たし、その健康は皆に関わる。ミツバチは「受粉」を通じて植物を助ける。餌を集めに花から花へ移る間、体に花粉という細かい粉を運ぶ。この花粉が植物に種や実を作らせる。それなしでは多くの植物は繁殖できない。私たちが楽しむ果物、野菜、ナッツの大きな割合が、ミツバチなどの花粉媒介者のこの静かな働きに頼っている。近年、科学者は心配を強めている。場所によってはミツバチの数が減った。原因は複雑で、野の花の減少、病気、農場で使われる一部の化学物質などが含まれうる。ミツバチが減れば食料が減り価格が上がるかもしれない。良い知らせは、人が助けられることだ。農家はミツバチが餌を得る野を残せる。都市は公園や庭に花を植えられる。数鉢の花のある小さなベランダさえ餌場になる。ミツバチを守ることは自分を守ることだ。自然では全てがつながっていると、この小さな働き手は教えてくれる。",
        quiz: [
          { q: "How do bees help plants?", options: ["Through pollination — carrying pollen so plants can make seeds and fruit", "By eating all the plants", "By blocking the sunlight"], answer: 0 },
          { q: "Why have scientists grown worried?", options: ["In some places, bee numbers have fallen", "Because there are too many bees", "Because bees stopped eating"], answer: 0 },
          { q: "How can ordinary people help bees?", options: ["By planting flowers in gardens, parks, or even a small balcony", "By removing all flowers", "By doing nothing"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-09-10",
    passages: [
      {
        id: "d0910-1",
        title: "Why Companies Hold Big Product Launches",
        level: "★★☆",
        genre: "ビジネス",
        text: "Once a year, some famous companies hold a huge event to show the world a new product, such as a phone or a computer. Crowds watch online, news reporters fill the room, and for a few hours the company is the center of attention. Why do businesses put so much effort into these launches?\n\nThe most obvious reason is excitement. A big, carefully planned event builds a sense of wonder around a new product. When people feel excited, they are more likely to want the product and to talk about it with friends. This free word of mouth can be worth more than any advertisement.\n\nTiming matters too. By launching once a year, a company gives customers a reason to look forward to something new, and a good moment to upgrade from an older model. It also lets the company tell one clear story instead of many small ones.\n\nA launch is also a message to rivals and investors. It shows that the company is still creative, confident, and moving forward. A strong event can lift the company's image and even its share price.\n\nOf course, big launches carry risk. If the product disappoints, the whole world sees it. Expectations become very high, and a small mistake can turn into big news.\n\nStill, when done well, a product launch turns a simple release into a shared moment — and a powerful engine for business.",
        summaryJa: "年に一度、有名企業が新しい製品——電話やコンピューターなど——を世界に見せる大きなイベントを開く。多くの人がオンラインで見守り、記者が会場を埋め、数時間その企業が注目の的になる。なぜここまで力を入れるのか。最も明白な理由は「わくわく感」だ。入念に計画された大イベントは新製品への驚きを生む。人はわくわくすると製品を欲しがり友人に話しやすくなる。この無料の口コミはどんな広告より価値がある。時期も重要だ。年一回にすることで、客に新しさへの期待と旧型からの買い替えの好機を与える。多くの小さな話でなく一つの明確な物語を語れる。発表は競合や投資家へのメッセージでもあり、企業がなお創造的で自信を持ち前進していると示す。強いイベントは企業の印象や株価さえ高める。もちろん危険もあり、製品が期待外れなら世界中に見られ、小さな失敗も大ニュースになる。だがうまくやれば、単なる発売を共有の瞬間、ビジネスの強力な原動力に変える。",
        quiz: [
          { q: "What is the most obvious reason for a big product launch?", options: ["To build excitement and encourage word of mouth", "To hide the product from everyone", "To lose customers"], answer: 0 },
          { q: "Why does launching once a year help a company?", options: ["It gives customers something to look forward to and a moment to upgrade", "It confuses all customers", "It stops the company from selling"], answer: 0 },
          { q: "What risk does a big launch carry?", options: ["If the product disappoints, the whole world sees it", "There is no risk at all", "The product becomes free"], answer: 0 }
        ]
      },
      {
        id: "d0910-2",
        title: "The Future of Passwords",
        level: "★★★",
        genre: "テクノロジー",
        text: "Almost everyone knows the small frustration of passwords. We are told to make them long and strange, to use a different one for every website, and never to forget them. Yet passwords remain one of the weakest points in our digital lives. That is why the technology of logging in is quietly changing.\n\nThe problem with passwords is human. To be safe, a password should be long and hard to guess, but such passwords are also hard to remember. So people reuse simple ones, or write them down. Worse, criminals can trick people into typing their password on a fake website, or steal huge lists of them from companies.\n\nTo fix this, engineers have created a safer method often called a \"passkey.\" Instead of a secret word you must remember, your device itself proves who you are, often using your fingerprint or face. There is no password to steal, forget, or type into a fake site. Signing in becomes both easier and safer.\n\nThe change will take time. Millions of websites still use old-fashioned passwords, and people need to learn the new way. During the switch, both systems will exist side by side.\n\nStill, the direction is clear. In the future, we may look back on typing secret words as a strange, risky habit of the early internet. Logging in should be simple, and at last, it is starting to become so.",
        summaryJa: "誰もがパスワードの小さな煩わしさを知っている。長く奇妙にせよ、サイトごとに変えよ、決して忘れるなと言われる。それでもパスワードはデジタル生活の最も弱い点の一つだ。だからログインの技術が静かに変わりつつある。パスワードの問題は人間側にある。安全には長く推測しにくい方がよいが、そうしたものは覚えにくい。だから人は単純なものを使い回したり書き留めたりする。さらに悪いことに、犯罪者は偽サイトで入力させたり、企業から大量のリストを盗んだりできる。これを直すため、技術者は「パスキー」と呼ばれるより安全な方法を作った。覚える秘密の言葉でなく、端末自体が指紋や顔で本人だと証明する。盗まれ、忘れられ、偽サイトに入力される「パスワード」がない。ログインはより簡単で安全になる。移行には時間がかかる。何百万ものサイトが旧来のパスワードを使い、人々は新方式を学ぶ必要があり、当面は両方式が併存する。だが方向は明確だ。将来、秘密の言葉を打つことは初期インターネットの奇妙で危険な習慣だと振り返るかもしれない。",
        quiz: [
          { q: "Why are passwords one of the weakest points in our digital lives?", options: ["Safe passwords are hard to remember, so people reuse or write them down", "They are always perfectly safe", "Nobody uses passwords"], answer: 0 },
          { q: "How does a 'passkey' work?", options: ["Your device proves who you are, often using your fingerprint or face", "You must remember a longer secret word", "It shares your password with everyone"], answer: 0 },
          { q: "Why will the change take time?", options: ["Millions of websites still use old passwords and people must learn the new way", "Because passkeys do not exist", "Because everyone already switched"], answer: 0 }
        ]
      },
      {
        id: "d0910-3",
        title: "Sending Money Home",
        level: "★★★",
        genre: "世界情勢",
        text: "Around the world, millions of people leave their home countries to work abroad. They may cook in restaurants, care for the sick, build houses, or pick fruit. Many of them send part of their pay back to their families far away. These payments, called \"remittances,\" are one of the quiet but powerful forces in the global economy.\n\nFor a single family, the money can change everything. It may pay for a child's school, a parent's medicine, or a small home. For whole countries, the total is enormous. In some nations, the money sent home by workers abroad is larger than the money the country earns from any single industry.\n\nSending money across borders used to be slow and expensive. A worker might lose a large share of their pay just in fees. Today, thanks to phones and the internet, transfers are becoming faster and cheaper. This means more of the money reaches the families who need it.\n\nThere are still problems to solve. Fees remain too high in some places, and not everyone has easy access to banks. Helping money move safely and cheaply is an ongoing goal.\n\nRemittances are more than numbers. Behind each transfer is a person working far from home, and a family waiting for help. Together, these small acts of love add up to one of the most important flows of money on Earth.",
        summaryJa: "世界中で、何百万もの人が働くために母国を離れ海外へ行く。レストランで料理し、病人を世話し、家を建て、果物を摘む。多くが給料の一部を遠くの家族に送る。「送金(レミッタンス)」と呼ばれるこの支払いは、世界経済の静かで強力な力の一つだ。一つの家族には、その金がすべてを変えうる。子の学費、親の薬、小さな家の費用になる。国全体では総額は莫大で、海外の労働者が送る金がどの単一産業の稼ぎより大きい国もある。国境を越えた送金はかつて遅く高価で、労働者は手数料だけで給料の大きな割合を失いかねなかった。今はスマホとインターネットのおかげで送金は速く安くなりつつあり、必要とする家族により多く届く。手数料がなお高い場所や、銀行を使いにくい人もいるなど課題は残る。安全に安く送れるようにするのは続く目標だ。送金は数字以上のもので、各送金の裏に故郷を離れて働く人と助けを待つ家族がいる。この小さな愛の行為が地球で最も重要な資金の流れの一つになる。",
        quiz: [
          { q: "What are 'remittances'?", options: ["Money that workers abroad send back to their families", "A kind of tax", "A type of passport"], answer: 0 },
          { q: "Why do remittances matter to whole countries?", options: ["The total can be larger than what the country earns from any single industry", "They are too small to notice", "They harm every economy"], answer: 0 },
          { q: "How are transfers becoming faster and cheaper?", options: ["Thanks to phones and the internet", "By using slower mail", "By raising all the fees"], answer: 0 }
        ]
      },
      {
        id: "d0910-4",
        title: "Japan's Amazing Convenience Stores",
        level: "★★☆",
        genre: "日本",
        text: "In many countries, a convenience store is a small shop for snacks and drinks when nothing else is open. In Japan, the convenience store, or \"konbini,\" is something far greater. Open all day and all night, it has become a small, brilliant center of daily life.\n\nAt a Japanese konbini, you can do much more than buy food. You can pay your electricity bill, send a package, buy concert tickets, get cash from a machine, and even print documents. The fresh food is a special surprise to many visitors: rice balls, hot meals, and sweets that are genuinely tasty and changed often.\n\nWhat impresses people most is the quality and order. The shelves are neat, the staff are polite, and the stores are clean at any hour. New products appear constantly, matched to the season. A konbini in summer and the same shop in winter can feel quite different.\n\nFor many people in Japan, the konbini is woven into everyday routines. A worker grabs breakfast on the way to the office; a student studies with a warm drink; a traveler finds a reliable meal at midnight in a strange town.\n\nThe konbini shows a very Japanese idea: that even an ordinary shop can be made excellent through care and attention. It is a small building that quietly makes daily life smoother, kinder, and just a little more comfortable.",
        summaryJa: "多くの国で、コンビニは他店が閉まった時に軽食や飲み物を買う小さな店だ。日本の「コンビニ」はそれよりはるかに大きな存在だ。昼も夜も開き、日常の小さくも見事な中心になっている。日本のコンビニでは食べ物を買う以上のことができる。電気代を払い、荷物を送り、コンサートの券を買い、機械で現金を引き出し、書類を印刷さえできる。新鮮な食べ物は多くの訪問者に嬉しい驚きだ。おにぎり、温かい食事、本当においしく頻繁に変わるお菓子。最も感心されるのは質と秩序だ。棚は整い、店員は礼儀正しく、店はどの時間も清潔だ。新商品が季節に合わせ次々現れ、夏と冬で同じ店がかなり違って感じられる。多くの人にとってコンビニは日々の習慣に織り込まれている。出勤途中に朝食を買い、学生は温かい飲み物で勉強し、旅行者は見知らぬ町の真夜中に頼れる食事を見つける。コンビニは、普通の店も心配りで卓越させられるという実に日本的な発想を示す。",
        quiz: [
          { q: "What can you do at a Japanese konbini besides buy food?", options: ["Pay bills, send packages, buy tickets, get cash, and print documents", "Only sleep", "Nothing else at all"], answer: 0 },
          { q: "What impresses people most about the konbini?", options: ["The quality, order, cleanliness, and constantly changing products", "The dirt and mess", "The empty shelves"], answer: 0 },
          { q: "What Japanese idea does the konbini show?", options: ["Even an ordinary shop can be made excellent through care and attention", "Shops should be careless", "Convenience does not matter"], answer: 0 }
        ]
      },
      {
        id: "d0910-5",
        title: "Why Do We Dream?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "Every night, when we fall into a deep sleep, our minds create strange little worlds. We fly, meet old friends, or run from things that make no sense. These are dreams. Everyone has them, yet scientists are still working to fully understand why.\n\nDreams happen mostly during a stage of sleep when the brain is very active, almost as busy as when we are awake. During this time, the eyes move quickly behind closed lids, and the most vivid dreams appear. Interestingly, the body stays still, as if to stop us from acting out our dreams.\n\nScientists have several ideas about why we dream. One popular idea is that dreaming helps the brain sort and store memories, keeping what is useful and letting go of the rest. Another idea is that dreams let us practice dealing with fears or problems in a safe, imaginary space. Some researchers think dreams may simply be the brain making sense of random signals during the night.\n\nMost likely, dreams do more than one of these things at once. What is clear is that sleep and dreaming are important for a healthy mind. People who do not sleep well often feel worse in mood and memory.\n\nSo the next time you wake from a strange dream, do not worry too much about what it \"means.\" Your busy brain was simply doing some of its important night-time work.",
        summaryJa: "毎晩、深い眠りに落ちると、心は奇妙な小さな世界を作る。空を飛び、旧友に会い、意味を成さないものから逃げる。これが夢だ。誰もが見るが、科学者はなぜかを完全には解明できていない。夢は主に、脳が非常に活発——ほぼ起きている時と同じくらい——になる睡眠段階で起きる。この間、閉じたまぶたの下で目が素早く動き、最も鮮明な夢が現れる。興味深いことに体は静止し、夢を実際に演じないようにしているかのようだ。なぜ夢を見るかについて科学者は複数の説を持つ。人気の説は、夢が脳の記憶の整理と保存を助け、有用なものを残し残りを手放すというものだ。別の説では、夢は恐れや問題への対処を安全な想像の場で練習させる。夜の無作為な信号を脳が意味づけているだけと考える研究者もいる。おそらく夢は一度にこれらの複数を行っている。確かなのは、睡眠と夢が健康な心に重要だということだ。よく眠れない人はしばしば気分や記憶が悪くなる。次に奇妙な夢から覚めても、意味を気にしすぎないでほしい。忙しい脳が夜の大切な仕事をしていただけだ。",
        quiz: [
          { q: "When do the most vivid dreams appear?", options: ["During a stage of sleep when the brain is very active and the eyes move quickly", "Only when we are fully awake", "Never during sleep"], answer: 0 },
          { q: "What is one popular idea about why we dream?", options: ["Dreaming helps the brain sort and store memories", "Dreaming makes us forget everything", "Dreaming has no purpose and harms us"], answer: 0 },
          { q: "What is clear about sleep and dreaming?", options: ["They are important for a healthy mind", "They are useless", "They only matter for children"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-09-09",
    passages: [
      {
        id: "d0909-1",
        title: "Build It or Buy It?",
        level: "★★☆",
        genre: "ビジネス",
        text: "Imagine a company needs a new piece of software — perhaps a tool to manage its customers or track its sales. It faces a classic business choice: should it build the software itself, or buy a ready-made product from another company? This simple question, known as \"build or buy,\" comes up again and again in the business world.\n\nBuilding your own software has clear attractions. The tool can be shaped to fit your exact needs, and you are not dependent on another company. Over many years, building in-house can also save money on fees. But it is far from easy. Software takes skilled workers, time, and constant care. A project can run late, cost more than expected, or fail completely.\n\nBuying a ready-made product is often faster and simpler. Someone else has already done the hard work, fixed the bugs, and keeps the tool updated. You can start using it almost at once. The downside is that you must fit your business to the product, pay ongoing fees, and trust another company to keep it running.\n\nThere is no single right answer. A common rule is to build what makes your company special and buy the rest. Why spend years building an email system when good ones already exist?\n\nIn the end, \"build or buy\" is really a question about focus. Wise companies save their energy for the work only they can do best.",
        summaryJa: "ある会社が新しいソフト——顧客管理や売上追跡の道具——を必要とするとしよう。古典的な選択に直面する。自社で作るか、他社の既製品を買うか。「作るか買うか(build or buy)」と呼ばれるこの問いはビジネスで何度も現れる。自社開発には明確な魅力がある。自社のニーズに合わせられ、他社に依存しない。長年で見れば手数料の節約にもなる。だが容易ではない。ソフトには熟練者と時間、絶え間ない手入れが要り、遅延や超過、失敗もある。既製品を買う方が速く簡単なことが多い。誰かが難しい作業を済ませ、不具合を直し、更新も続ける。すぐ使い始められる。欠点は、自社を製品に合わせ、継続的な料金を払い、他社の運営を信頼せねばならないこと。唯一の正解はない。「自社を特別にするものは作り、残りは買う」がよくある原則だ。核心は集中の問題で、賢い会社は自社が最も得意な仕事に力を残す。",
        quiz: [
          { q: "What is the 'build or buy' choice about?", options: ["Whether to build software yourself or buy a ready-made product", "Whether to open or close a shop", "Which color to paint an office"], answer: 0 },
          { q: "What is one downside of building your own software?", options: ["It takes skilled workers and time, and a project can run late or fail", "It is always free", "It is finished in one day"], answer: 0 },
          { q: "What common rule does the passage give?", options: ["Build what makes your company special and buy the rest", "Always build everything", "Never use any software"], answer: 0 }
        ]
      },
      {
        id: "d0909-2",
        title: "Nuclear Power Gets a Second Look",
        level: "★★★",
        genre: "テクノロジー",
        text: "For years, nuclear power was out of fashion in many countries. After some famous accidents, people worried about safety and about the waste that stays dangerous for a long time. Some nations even decided to close their nuclear plants. But recently, nuclear energy is getting a fresh look, and interest is growing once again.\n\nWhy the change? The main reason is the need for clean, steady electricity. Unlike coal or gas, a nuclear plant produces almost no gases that warm the planet. And unlike wind or solar power, it can run day and night, in any weather. As the world uses more and more electricity — for cars, factories, and huge computer centers — a reliable, low-pollution source looks very valuable.\n\nNew technology is part of the story too. Engineers are designing smaller, simpler reactors that may be safer and cheaper to build. Some companies hope these can be made in factories and shipped to where they are needed.\n\nOf course, the old worries have not disappeared. Safety, cost, and the question of what to do with nuclear waste are still serious. Building a plant takes many years and huge sums of money, and public trust must be earned.\n\nNuclear power is not a magic answer. But as the world searches for clean energy that never sleeps, many experts believe it deserves a careful second look.",
        summaryJa: "長年、原子力は多くの国で人気を失っていた。有名な事故の後、安全や、長く危険が残る廃棄物への不安があった。原発を閉じると決めた国さえある。だが最近、原子力が再び見直され、関心が高まっている。なぜか。主な理由は、清潔で安定した電気の必要性だ。石炭やガスと違い、原発は地球を温める気体をほとんど出さない。風力や太陽光と違い、昼夜どんな天気でも動ける。世界が車や工場、巨大な計算施設でますます電気を使う中、信頼でき低汚染の電源は非常に価値がある。新技術も物語の一部だ。より安全で安く作れそうな小型で単純な原子炉が設計されている。工場で作り必要な場所へ運ぶ構想もある。もちろん旧来の不安も消えていない。安全、費用、廃棄物の扱いは依然深刻で、建設には長い年月と巨額が要り、市民の信頼も得ねばならない。原子力は魔法の答えではないが、眠らない清潔なエネルギーを探す世界で、丁寧に見直す価値があると多くの専門家は考える。",
        quiz: [
          { q: "Why is nuclear power getting a fresh look?", options: ["It provides clean, steady electricity that runs day and night", "It produces a lot of warming gases", "It only works when it is sunny"], answer: 0 },
          { q: "What new technology is part of the story?", options: ["Smaller, simpler reactors that may be safer and cheaper to build", "Reactors that need no engineers", "Plants that run without any fuel"], answer: 0 },
          { q: "What old worries still remain?", options: ["Safety, cost, and what to do with nuclear waste", "Nothing at all", "Only the color of the buildings"], answer: 0 }
        ]
      },
      {
        id: "d0909-3",
        title: "Protecting the World's Oceans",
        level: "★★☆",
        genre: "世界情勢",
        text: "The ocean covers most of our planet and is full of life, from tiny fish to giant whales. It gives us food, produces much of the oxygen we breathe, and helps control the world's climate. Yet for a long time, people treated the sea as if it were endless, taking too many fish and leaving behind pollution. Now, countries around the world are working to protect it.\n\nOne key idea is the \"marine protected area.\" This is a part of the sea where fishing and other harmful activities are limited or banned. Inside these safe zones, fish can grow and multiply in peace. Over time, the sea life often becomes richer, and the benefits spread to nearby waters where people still fish.\n\nNations are also joining together in agreements to protect the open ocean far from any coast. Because no single country owns these waters, only cooperation can keep them healthy. This is difficult, slow work, but the goal is shared: a living, healthy sea for the future.\n\nThere are challenges. Rules are hard to enforce across a vast ocean, and some communities depend on fishing for their living. Solutions must protect both nature and people.\n\nStill, the effort is hopeful. By caring for the ocean today — through protected areas, cleaner habits, and global teamwork — we help make sure the sea remains a source of life for generations to come.",
        summaryJa: "海は地球の大部分を覆い、小さな魚から巨大なクジラまで生命に満ちている。食物を与え、呼吸する酸素の多くを生み、世界の気候の制御を助ける。だが長い間、人は海を無限であるかのように扱い、魚を取りすぎ汚染を残してきた。今、世界の国々が海を守ろうとしている。鍵となる考えの一つが「海洋保護区」だ。漁など有害な活動を制限・禁止する海の一部で、その安全な区域で魚は安心して育ち増える。やがて海の生命は豊かになり、恩恵は人が漁を続ける近隣の海にも広がる。各国は沿岸から遠い外洋を守る協定でも手を組む。どの国も所有しない海は協力でしか健康を保てない。難しく遅い作業だが、未来へ生きた健康な海という目標は共有されている。広大な海で規則を守らせるのは難しく、漁で生計を立てる人もいる。自然と人の両方を守らねばならない。それでも、保護区や清潔な習慣、世界の協力で海を守ることは希望だ。",
        quiz: [
          { q: "What does the ocean give us, according to the passage?", options: ["Food, much of the oxygen we breathe, and help controlling the climate", "Nothing useful", "Only salt"], answer: 0 },
          { q: "What is a 'marine protected area'?", options: ["A part of the sea where harmful activities are limited so life can recover", "A place where all fishing is required", "A city built on the sea"], answer: 0 },
          { q: "Why is cooperation needed to protect the open ocean?", options: ["Because no single country owns those waters", "Because the ocean is very small", "Because no one uses the ocean"], answer: 0 }
        ]
      },
      {
        id: "d0909-4",
        title: "How the Seasons Shape Life in Japan",
        level: "★★☆",
        genre: "日本",
        text: "Many countries have seasons, but in Japan the four seasons hold a special place in daily life and culture. Spring, summer, autumn, and winter are not just changes in the weather. They shape what people eat, how they decorate their homes, and even the words they use in letters and greetings.\n\nEach season brings its own joys. Spring is famous for cherry blossoms, when families gather under the trees to enjoy the brief, beautiful flowers. Summer brings festivals, fireworks, and cool foods. Autumn offers colorful leaves and a rich harvest, while winter brings hot dishes, snow in many regions, and the quiet beauty of a resting land.\n\nFood is closely tied to the seasons. Cooks take pride in using ingredients that are at their best right now — the first fish of the season, or a fruit that appears for only a few weeks. Eating \"in season\" is seen as both tastier and wiser.\n\nThis awareness runs deep. A traditional letter might begin with a comment about the weather or the season, a small, polite way of sharing the moment. Poems and art often celebrate a single season, capturing its special feeling.\n\nBy paying attention to the seasons, people in Japan stay closely connected to nature, even in busy modern cities. Each turning of the year is a gentle reminder that time, like the seasons, is always quietly moving forward.",
        summaryJa: "多くの国に季節はあるが、日本では四季が暮らしと文化で特別な位置を占める。春夏秋冬は単なる天気の変化ではない。食べるもの、家の飾り方、手紙や挨拶の言葉さえ形づくる。各季節に固有の喜びがある。春は桜で有名で、家族が木の下に集い短く美しい花を楽しむ。夏は祭りや花火、涼しい食べ物。秋は色づく葉と豊かな実り、冬は温かい料理や多くの地域の雪、休む大地の静かな美しさをもたらす。食は季節と深く結びつく。料理人は今が旬の食材——初物の魚や数週間だけ現れる果物——を使うことに誇りを持つ。「旬」を食べることは、よりおいしく賢いとされる。この意識は深い。伝統的な手紙は天気や季節への一言で始まり、瞬間を分かち合う小さな礼儀だ。詩や芸術は一つの季節を讃え、その特別な感じを捉える。季節に心を配ることで、忙しい現代の都市でも人々は自然と密接につながる。年の巡りは、時が季節のように静かに前へ進むと優しく思い出させる。",
        quiz: [
          { q: "In Japan, what do the four seasons shape besides the weather?", options: ["What people eat, how they decorate homes, and the words in greetings", "Only the price of houses", "Nothing at all"], answer: 0 },
          { q: "What does eating 'in season' mean?", options: ["Using ingredients that are at their best right now", "Eating only frozen food", "Never eating fruit"], answer: 0 },
          { q: "How might a traditional Japanese letter begin?", options: ["With a comment about the weather or the season", "With a demand for money", "With no words at all"], answer: 0 }
        ]
      },
      {
        id: "d0909-5",
        title: "The World's Hardest Math Puzzles",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "Most people think of mathematics as a subject with clear answers: two plus two is always four. But at its frontier, mathematics is full of deep mysteries — puzzles so hard that the greatest minds have failed to solve them for decades, or even centuries. Some of these problems are so important that a prize of a million dollars awaits anyone who can crack one.\n\nWhy are such puzzles worth so much? Because a single answer can open a door to whole new areas of knowledge. Mathematics is the hidden language behind physics, computer science, and engineering. A problem that looks like a pure game on paper may, once solved, help us build safer codes, faster computers, or a better understanding of the universe.\n\nSolving these puzzles takes years of patient thought. Mathematicians fill notebooks with attempts, share ideas across the world, and build on the work of those before them. In recent times, even powerful computers have begun to help, checking ideas and searching for patterns humans might miss.\n\nWhen a famous problem is finally solved, it is major news in the world of science. But it can also raise new questions, such as who truly deserves the credit, and what the answer really means.\n\nThese great puzzles remind us that mathematics is not finished. It is a living adventure, full of unknown territory still waiting to be explored.",
        summaryJa: "多くの人は数学を明快な答えのある科目と思う。2足す2は必ず4だと。だがその最前線では、数学は深い謎に満ちている。最高の頭脳でさえ何十年、時に何世紀も解けなかった難問だ。あまりに重要で、解いた人に100万ドルの賞金が待つ問題もある。なぜそれほどの価値があるのか。一つの答えが全く新しい知の領域への扉を開きうるからだ。数学は物理、計算機科学、工学の背後にある隠れた言語だ。紙の上の純粋な遊びに見える問題も、解ければより安全な暗号や速いコンピューター、宇宙のより良い理解を助けうる。解くには長年の忍耐強い思考が要る。数学者はノートを試行で埋め、世界で発想を共有し、先人の仕事の上に築く。近年は強力なコンピューターも助け始め、発想を確かめ人が見逃す模様を探す。有名な問題がついに解かれると科学界の大ニュースだが、誰の功績か、答えが何を意味するかという新たな問いも生む。これらの難問は、数学が未完で、未知の領域に満ちた生きた冒険だと教えてくれる。",
        quiz: [
          { q: "Why are some math puzzles worth so much?", options: ["A single answer can open the door to whole new areas of knowledge", "Because math has no uses", "Because they are easy to solve"], answer: 0 },
          { q: "How have powerful computers begun to help mathematicians?", options: ["By checking ideas and searching for patterns humans might miss", "By solving nothing at all", "By replacing mathematics entirely"], answer: 0 },
          { q: "What do these great puzzles remind us?", options: ["Mathematics is not finished — it is a living adventure", "Mathematics has all its answers already", "Mathematics is useless"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-09-08",
    passages: [
      {
        id: "d0908-1",
        title: "What Is Venture Capital?",
        level: "★★★",
        genre: "ビジネス",
        text: "You may have heard that a young company just raised a huge amount of money from investors, sometimes hundreds of millions of dollars, even though it has not yet made a profit. This kind of investment often comes from something called venture capital. Understanding it helps explain how many of today's biggest companies began.\n\nA new company with a bold idea usually needs money to grow. It may need to hire engineers, build a product, and reach customers, all before earning much income. Banks are often unwilling to lend to such young, risky businesses. This is where venture capital, or \"VC,\" steps in.\n\nVenture capital firms gather money from large investors and use it to buy a share of promising young companies. In return, they give not only money but also advice, contacts, and experience. They know that most of these young companies will fail. But they hope that a few will grow enormously, and that those rare successes will more than cover all the losses.\n\nFor the founders, VC money can turn a small idea into a global business quickly. But it comes at a price. By selling part of their company, founders give up some control, and they face strong pressure to grow fast.\n\nVenture capital is a bet on the future. It is risky and demanding, yet it has helped create many of the technologies and services we now use every day.",
        summaryJa: "利益もまだ出していない若い会社が、投資家から数億ドルもの巨額を調達したと聞くことがある。こうした投資はしばしば「ベンチャーキャピタル」から来る。これを理解すると、今日の大企業の多くがどう始まったか分かる。大胆な着想を持つ新会社は成長に資金が要る。技術者を雇い製品を作り顧客に届けるまで、収入は少ない。銀行はこうした若くリスクの高い事業に貸したがらない。そこでVCが登場する。VCは大口投資家から資金を集め、有望な若い会社の株を買う。見返りに資金だけでなく助言や人脈、経験も与える。多くは失敗すると知りつつ、少数が巨大に育ち損失を補うと期待する。創業者には小さな着想を素早く世界的事業に変えうるが、代償もある。会社の一部を売り支配権を手放し、急成長の圧力に直面する。VCは未来への賭けで、リスクは高いが、今使う多くの技術やサービスを生んできた。",
        quiz: [
          { q: "Why do banks often avoid lending to young companies?", options: ["Because such young businesses are risky", "Because banks have no money", "Because young companies never need money"], answer: 0 },
          { q: "What do venture capital firms give besides money?", options: ["Advice, contacts, and experience", "Only empty promises", "Nothing at all"], answer: 0 },
          { q: "What price do founders pay for VC money?", options: ["They give up some control and face pressure to grow fast", "They pay nothing", "They must close their company"], answer: 0 }
        ]
      },
      {
        id: "d0908-2",
        title: "How the World Makes a Computer Chip",
        level: "★★★",
        genre: "テクノロジー",
        text: "Inside almost every modern device — your phone, your car, your washing machine — sits a tiny computer chip. These chips are among the most complex objects humans have ever built, yet they are smaller than a fingernail. Making them is a marvel of science and patience.\n\nA chip is built on a thin slice of a material called silicon. Onto this surface, engineers print billions of tiny switches, far too small to see. To do this, they use a special kind of light and patterns finer than anything drawn by hand. Layer by layer, the design is carefully printed, like a photograph made at an unimaginably small scale.\n\nThe precision required is astonishing. The smallest parts of a modern chip are only a few atoms wide. Even a speck of dust can ruin a chip, so the factories, called \"fabs,\" are kept cleaner than a hospital. Workers wear special suits, and the air is filtered again and again.\n\nBecause this process is so difficult, only a handful of companies in the world can make the most advanced chips. Building a single factory can cost billions of dollars and take years.\n\nThe next time you tap your phone, remember the hidden wonder inside. That small chip is the result of decades of human cleverness, and a manufacturing process so exact that it works at the level of single atoms.",
        summaryJa: "現代のほぼ全ての機器——電話、車、洗濯機——の中に、小さなコンピューターチップがある。人類が作った最も複雑な物の一つでありながら、爪より小さい。作ることは科学と忍耐の驚異だ。チップはシリコンという素材の薄い板の上に作られる。その表面に、目に見えないほど小さな何十億ものスイッチを印刷する。特別な光と、手で描けるどんなものより細かい模様を使う。層を重ね、想像を絶する小ささの写真のように設計を丁寧に刷る。必要な精度は驚異的で、最小部分はわずか数原子分の幅だ。ほこり一粒でも台無しになるため、工場「ファブ」は病院より清潔に保たれ、作業者は特殊な服を着て空気は何度もろ過される。あまりに難しいため最先端チップを作れる企業は世界に一握りで、工場一つの建設に数十億ドルと数年かかる。次に電話に触れるとき、この隠れた驚異を思い出してほしい。",
        quiz: [
          { q: "What material is a chip built on?", options: ["A thin slice of silicon", "A piece of wood", "A sheet of paper"], answer: 0 },
          { q: "Why are chip factories kept cleaner than a hospital?", options: ["Even a speck of dust can ruin a chip", "Because workers eat there", "Because dust makes chips faster"], answer: 0 },
          { q: "Why can only a few companies make the most advanced chips?", options: ["The process is extremely difficult and factories cost billions", "Because chips are easy to make", "Because no one wants to make them"], answer: 0 }
        ]
      },
      {
        id: "d0908-3",
        title: "Counting a Whole Country",
        level: "★★☆",
        genre: "世界情勢",
        text: "Every so often, a country tries to do something remarkable: count every single person who lives in it. This great effort is called a census. From huge nations to small islands, governments carry out a census to learn how many people they have, where they live, and how their lives are changing.\n\nWhy go to so much trouble? The answer is that good decisions need good information. A government that knows how many children live in an area can plan the right number of schools. Knowing where older people live helps plan hospitals and care. A census also shows how a population is growing or shrinking, which shapes plans for housing, roads, and jobs for years to come.\n\nCarrying out a census is a massive task. Workers may travel to remote villages, and forms are sent to millions of homes. Today, many countries also let people answer online, which is faster and cheaper. Still, reaching everyone — including those without a fixed home — is very hard.\n\nThere are challenges beyond size. People must trust that their private answers will be protected and used only to help, not to harm. Without that trust, some may refuse to take part.\n\nA census is one of the quiet foundations of a well-run country. By taking the time to count and understand its people, a nation can plan more wisely and serve everyone more fairly.",
        summaryJa: "時折、国は驚くべきことを試みる。住むすべての人を一人残らず数えるのだ。この大きな取り組みを「国勢調査(センサス)」という。大国から小さな島国まで、政府は何人いて、どこに住み、暮らしがどう変わっているかを知るために行う。なぜそこまでするのか。良い判断には良い情報が要るからだ。ある地域の子どもの数を知る政府は、適切な数の学校を計画できる。高齢者の居場所を知れば病院や介護を計画できる。人口の増減も示し、住宅や道路、雇用の計画を左右する。実施は膨大な作業で、遠い村へ赴き、何百万もの家に用紙を送る。今は多くの国がオンライン回答も認め、速く安い。それでも定住地のない人まで届くのは難しい。規模以外の課題もあり、私的な回答が守られ害でなく助けにのみ使われると人々が信頼せねばならない。国勢調査はよく運営される国の静かな土台だ。",
        quiz: [
          { q: "What is a census?", options: ["A great effort to count every person living in a country", "A national holiday", "A type of tax"], answer: 0 },
          { q: "Why does a government carry out a census?", options: ["Good decisions, like planning schools and hospitals, need good information", "To make people angry", "For no reason at all"], answer: 0 },
          { q: "What must people trust for a census to work well?", options: ["That their private answers will be protected and used only to help", "That the answers will be sold", "That no one will read them ever"], answer: 0 }
        ]
      },
      {
        id: "d0908-4",
        title: "The Quiet World of the Tea Ceremony",
        level: "★★☆",
        genre: "日本",
        text: "In a small, simple room, a host slowly prepares a bowl of green tea for a guest. Every movement is calm and careful. This is the Japanese tea ceremony, a tradition that is about far more than simply drinking tea.\n\nThe tea ceremony has been practiced in Japan for centuries. At first glance, it may seem like a very slow way to make a drink. But each step — folding a cloth, warming the bowl, whisking the tea — is done with deep attention. The goal is not speed, but a feeling of peace, respect, and full presence in the moment.\n\nThe setting is chosen with great care. The room is often plain and quiet, perhaps with a single flower or a hanging scroll. Guests are encouraged to leave their busy thoughts at the door and simply be there, sharing a calm experience with others. Host and guest treat each other with gentle politeness.\n\nAt its heart lie a few simple values: respect for others, purity, harmony, and a quiet appreciation of the present moment. These ideas reach far beyond the tea room and into everyday Japanese life.\n\nIn our fast, noisy world, the tea ceremony offers a rare gift: a chance to slow down completely. For a short time, making and sharing one bowl of tea becomes the most important thing in the world.",
        summaryJa: "小さく簡素な部屋で、亭主が客のために抹茶をゆっくり点てる。どの動きも静かで丁寧だ。これが日本の茶道で、単にお茶を飲む以上のものだ。茶道は何世紀も日本で行われてきた。一見、飲み物を作るのにとても遅い方法に見える。だが布をたたみ、茶碗を温め、茶を点てる各段階が深い注意とともに行われる。目的は速さでなく、平安と敬意、そして今この瞬間に完全に在る感覚だ。しつらえも入念に選ばれる。部屋はしばしば簡素で静かで、一輪の花や掛け軸があるくらいだ。客は忙しい思いを戸口に置き、ただそこに在り、穏やかな体験を共有するよう促される。亭主と客は互いに優しい礼儀で接する。核心には敬意、清らかさ、調和、今この瞬間への静かな感謝という簡素な価値がある。これらは茶室を越え日常の日本の暮らしに及ぶ。速く騒がしい世界で、茶道は完全に立ち止まる稀な贈り物を与えてくれる。",
        quiz: [
          { q: "What is the Japanese tea ceremony really about?", options: ["Far more than drinking tea — peace, respect, and presence in the moment", "Making tea as fast as possible", "Selling expensive tea"], answer: 0 },
          { q: "What is the setting for a tea ceremony usually like?", options: ["A plain and quiet room, perhaps with a single flower or scroll", "A loud, crowded hall", "A busy street"], answer: 0 },
          { q: "What gift does the tea ceremony offer in our fast world?", options: ["A chance to slow down completely", "A way to work faster", "A reason to hurry"], answer: 0 }
        ]
      },
      {
        id: "d0908-5",
        title: "Snake Blood That Fights Venom",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "A snake bite from a dangerous species can be deadly, and treating one is difficult. For over a hundred years, doctors have used medicines called antivenoms, but they are not perfect. They can be slow to make, hard to store, and they do not always work well against every kind of snake. Now, scientists have made a surprising discovery in an unexpected place: the blood of snakes themselves.\n\nSome snakes, such as rattlesnakes, carry special proteins in their blood. These proteins can block the harmful effects of venom. This makes sense when you think about it — a snake needs some protection against its own dangerous poison and that of others.\n\nRecently, researchers found that by combining several of these natural proteins, they could create a powerful mixture that neutralizes venom from many different snakes. In tests, this blend was far stronger than some current treatments, and it worked against several dangerous species at once.\n\nWhy does this matter? Snake bites harm and kill many people around the world every year, especially in poorer, rural areas. A treatment that is stronger, works against many snakes, and is easier to produce could save countless lives.\n\nThe research is still in an early stage, and more testing is needed before it can help patients. But it is a beautiful example of nature offering an answer. Sometimes the cure to a danger is hidden inside the danger itself.",
        summaryJa: "危険な種のヘビにかまれると命に関わることがあり、治療は難しい。100年以上、医師は「抗毒素(血清)」という薬を使ってきたが完璧ではない。作るのが遅く、保存が難しく、あらゆるヘビによく効くとは限らない。今、科学者は意外な場所で驚きの発見をした。ヘビ自身の血だ。ガラガラヘビなどのヘビは、血中に特別なタンパク質を持つ。これは毒の有害な作用を防げる。考えれば理にかなう。ヘビは自らや他のヘビの危険な毒からある程度身を守る必要があるのだ。最近、研究者はこれらの天然タンパク質をいくつか組み合わせると、多くの異なるヘビの毒を中和する強力な混合物を作れると発見した。試験では現行治療より格段に強く、複数の危険な種に同時に効いた。なぜ重要か。ヘビ咬傷は毎年世界で多くの人を害し、特に貧しい農村部で深刻だ。より強く多くのヘビに効き作りやすい治療は無数の命を救いうる。研究は初期段階だが、危険の中に治療が隠れているという自然の美しい例だ。",
        quiz: [
          { q: "What problem do current antivenoms have?", options: ["They can be slow to make, hard to store, and not always effective", "They are always perfect", "They cure every illness"], answer: 0 },
          { q: "What surprising thing did scientists find in some snakes' blood?", options: ["Special proteins that can block the harmful effects of venom", "Tiny computers", "A new kind of food"], answer: 0 },
          { q: "Why could this discovery matter so much?", options: ["Snake bites harm many people, so a stronger, easier treatment could save lives", "Because snakes are cute", "Because it makes venom stronger"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-09-07",
    passages: [
      {
        id: "d0907-1",
        title: "What Makes a Good Business Meeting?",
        level: "★★☆",
        genre: "ビジネス",
        text: "Meetings are a normal part of working life, yet many people quietly dread them. Too often, a meeting runs long, wanders off topic, and ends without any clear result. But a good meeting can be one of the most useful tools a team has. What separates a helpful meeting from a waste of time?\n\nThe first key is a clear purpose. Before a meeting begins, everyone should know why they are there and what needs to be decided. A short agenda, shared in advance, helps people prepare and keeps the discussion on track. If no one can explain the goal, perhaps the meeting is not needed at all.\n\nThe second key is respect for time. A good meeting starts and ends when it is supposed to. The leader gently steers the group back if the talk drifts, and makes sure quieter members also get a chance to speak. Good ideas can come from anyone.\n\nFinally, a strong meeting ends with clear next steps. Before people leave, they should know who will do what, and by when. Without this, even a lively discussion can lead to nothing.\n\nMeetings will always be part of business, but they do not have to be painful. With a clear purpose, careful timing, and firm follow-up, a meeting can turn a group of busy people into a team that truly moves forward together.",
        summaryJa: "会議は仕事につきものだが、多くの人が密かに嫌っている。長引き、脱線し、結論なく終わることが多いからだ。だが良い会議はチームにとって最も有用な道具の一つになりうる。有益な会議と時間の無駄を分けるものは何か。第一は明確な目的。始める前に、なぜ集まり何を決めるべきかを全員が知るべきだ。事前に共有する短い議題は準備を助け議論を軌道に保つ。目的を説明できないなら会議は不要かもしれない。第二は時間の尊重。良い会議は予定通り始まり終わる。進行役は脱線を戻し、静かな人にも発言の機会を与える。良い案は誰からでも出る。最後に、良い会議は明確な次の一歩で終わる。誰がいつまでに何をするかを決める。これがないと活発な議論も実を結ばない。目的・時間管理・確実なフォローで、会議は前に進むチームを作る。",
        quiz: [
          { q: "What is the first key to a good meeting?", options: ["A clear purpose that everyone knows in advance", "Making it as long as possible", "Having no agenda"], answer: 0 },
          { q: "How does a good leader respect time in a meeting?", options: ["By starting and ending on time and steering the talk back on topic", "By letting only one person speak", "By ignoring the schedule"], answer: 0 },
          { q: "How should a strong meeting end?", options: ["With clear next steps: who will do what, and by when", "With no decisions at all", "By starting a new topic"], answer: 0 }
        ]
      },
      {
        id: "d0907-2",
        title: "Computer Memory That Sips Energy",
        level: "★★★",
        genre: "テクノロジー",
        text: "Every phone, laptop, and data center relies on memory — the part of a computer that stores information. Each time memory saves or changes a piece of data, it uses a tiny bit of energy. On its own, that amount is very small. But with billions of devices working every second, all those tiny bits add up to a huge demand for power.\n\nThat is why scientists are excited about a new kind of memory that uses far less energy than today's technology. The idea involves storing information using magnetism, then switching it in a cleverer, gentler way. Instead of forcing a change with a strong push of electricity, the new method nudges the memory using much less power.\n\nWhy does this matter so much? Lower energy use brings several benefits at once. Devices could run longer on a single battery charge. Large data centers, which already use enormous amounts of electricity, could cut their power bills and their effect on the planet. And devices might produce less heat, making them easier to keep cool.\n\nThe technology is still in the laboratory, and turning a promising experiment into a product takes years of careful work. Not every bright idea reaches the market.\n\nEven so, this line of research points toward an important goal: computers that do more while using less. In a world full of hungry machines, memory that only sips energy could make a real difference.",
        summaryJa: "スマホもノートPCもデータセンターも「メモリ」——情報を蓄える部分——に頼る。メモリがデータを保存・変更するたびに、ごくわずかな電力を使う。単体では極小だが、何十億もの機器が毎秒動くと、その小さな量が膨大な電力需要になる。だから科学者は、今の技術よりはるかに少ない電力で動く新しいメモリに期待している。着想は磁気で情報を蓄え、より賢く穏やかに切り替えるものだ。強い電流で無理に変えるのでなく、はるかに少ない電力でそっと促す。なぜ重要か。低消費電力は複数の利点をもたらす。機器は一度の充電で長く動き、大量の電力を使うデータセンターは電気代と環境負荷を減らせる。発熱も減り冷却も楽になる。技術はまだ実験段階で製品化には長い作業が要り、全ての名案が市場に届くわけではない。それでも「少ない電力で多くをこなす」という重要な目標を指し示す。",
        quiz: [
          { q: "Why does memory's energy use add up to a huge demand?", options: ["Billions of devices each use tiny amounts of energy every second", "Memory uses no energy at all", "Only one computer exists"], answer: 0 },
          { q: "How does the new kind of memory save energy?", options: ["It switches magnetism in a gentler way, using much less power", "It uses a much stronger push of electricity", "It stops storing data"], answer: 0 },
          { q: "What is one benefit of lower energy use?", options: ["Devices could run longer on a battery and produce less heat", "Batteries would drain faster", "Devices would get much hotter"], answer: 0 }
        ]
      },
      {
        id: "d0907-3",
        title: "Learning Without Borders",
        level: "★★★",
        genre: "世界情勢",
        text: "Not long ago, a good education often depended on where you were born. If you lived far from a great school or university, many subjects were simply out of reach. Today, that is changing. Thanks to the internet, learning is crossing borders as never before, and millions of people are studying subjects they could never have reached in the past.\n\nOnline courses now let a student in a small town follow lessons taught by teachers on the other side of the world. Some are free; others cost far less than a traditional class. A person can learn a new language, a computer skill, or even university-level science, all from a simple phone or laptop.\n\nThe benefits are powerful. Online learning can reach people who work during the day, live in remote areas, or cannot afford to move to a big city. It gives second chances to those who missed school earlier in life. For many, it is a door to better jobs and a broader view of the world.\n\nThere are challenges, of course. A weak internet connection, the high cost of devices, or the need for strong self-discipline can hold learners back. Online study also cannot fully replace the warmth of a real classroom.\n\nStill, the direction is clear and hopeful. As knowledge travels more freely across the globe, the chance to learn is slowly becoming a right that belongs to everyone, not just a lucky few.",
        summaryJa: "少し前まで、良い教育はどこで生まれたかに左右されがちだった。優れた学校や大学から遠く住めば、多くの科目は手の届かないものだった。今は変わりつつある。インターネットのおかげで学びはかつてなく国境を越え、何百万もの人が昔なら届かなかった科目を学んでいる。オンライン講座により、小さな町の学生が地球の反対側の教師の授業を受けられる。無料のものも、従来よりずっと安いものもある。新しい言語やコンピュータ技術、大学レベルの科学まで、スマホやノートPCで学べる。利点は大きい。日中働く人や遠隔地の人、大都市に移れない人にも届き、かつて学べなかった人に再挑戦の機会を与え、より良い仕事や広い視野への扉になる。弱い通信環境や機器の高さ、強い自己規律の必要という課題もあり、実際の教室の温かさは完全には代われない。それでも知識が自由に世界を巡る中、学ぶ機会は一部の幸運な人だけでなく万人の権利になりつつある。",
        quiz: [
          { q: "In the past, what did a good education often depend on?", options: ["Where you were born", "The color of your clothes", "The day of the week"], answer: 0 },
          { q: "How does online learning help people?", options: ["It reaches those who work, live in remote areas, or cannot move to a city", "It only helps rich city students", "It stops people from learning"], answer: 0 },
          { q: "What is one challenge of online study mentioned?", options: ["A weak internet connection or the need for strong self-discipline", "It is always free and easy for everyone", "It fully replaces real classrooms"], answer: 0 }
        ]
      },
      {
        id: "d0907-4",
        title: "The Japanese Custom of Omiyage",
        level: "★★☆",
        genre: "日本",
        text: "When people in Japan take a trip, they often come home with more than photos and memories. They bring back \"omiyage\" — small gifts, usually local food or sweets, to share with family, friends, and coworkers. This custom is a warm and important part of daily life in Japan.\n\nOmiyage is different from a simple souvenir you buy for yourself. It is chosen with others in mind. A traveler visiting a famous region will look for a snack that the area is known for, often beautifully wrapped and packed in small pieces, perfect for sharing in an office or at home. Handing them out is a way of saying, \"I thought of you while I was away.\"\n\nAt many workplaces, bringing omiyage after a holiday is almost expected, but it is done with a happy spirit rather than as a heavy duty. Sharing a taste of a faraway place is a small, kind gesture that keeps relationships smooth and friendly.\n\nBecause of this custom, train stations and airports in Japan are full of shops selling local specialties in gift boxes. Choosing the right omiyage can be part of the fun of a trip.\n\nAt its heart, omiyage is about connection. It turns a personal journey into something shared, reminding others that they were not forgotten. In a single boxed sweet lies a simple message of thoughtfulness.",
        summaryJa: "日本では旅に出ると、写真や思い出以上のものを持ち帰ることが多い。「お土産」——たいてい地元の食べ物やお菓子——を、家族や友人、同僚と分かち合うために持ち帰るのだ。この習慣は日本の暮らしの温かく大切な一部だ。お土産は自分用に買う単なる記念品とは違い、他者を思って選ぶ。有名な地域を訪れた人は、その土地で知られたお菓子を探す。美しく包まれ小分けされ、職場や家庭で分けやすい。渡すことは「離れている間もあなたを思っていた」と伝える方法だ。多くの職場では休暇後にお土産を持参するのがほぼ習わしだが、重い義務でなく楽しい気持ちで行われる。遠い土地の味を分かち合う小さな親切が、関係を円滑で友好的に保つ。だから駅や空港は土産物店であふれる。選ぶこと自体も旅の楽しみだ。お土産の核心はつながりで、個人の旅を分かち合うものに変え、忘れていないと伝える。",
        quiz: [
          { q: "What is 'omiyage'?", options: ["Small gifts, often local food, brought home to share with others", "A type of camera", "A train ticket"], answer: 0 },
          { q: "How is omiyage different from a souvenir you buy for yourself?", options: ["It is chosen with others in mind, to share", "It is only for the traveler", "It is never food"], answer: 0 },
          { q: "At its heart, what is omiyage about?", options: ["Connection — turning a personal journey into something shared", "Spending as much money as possible", "Keeping everything for oneself"], answer: 0 }
        ]
      },
      {
        id: "d0907-5",
        title: "Why Leaves Change Color in Autumn",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "Each autumn, in many parts of the world, green leaves turn to brilliant shades of yellow, orange, and red before they fall. This yearly show is one of nature's most beautiful sights. But behind the colors lies some clever science.\n\nDuring spring and summer, leaves are green because of a substance called chlorophyll. This substance helps the tree make food from sunlight, and it fills the leaves with a strong green color. In fact, other colors are hidden in the leaf all along, but the green is so strong that we cannot see them.\n\nAs autumn arrives, the days grow shorter and the air turns cooler. The tree senses that winter is coming and begins to prepare. It slowly stops making chlorophyll, and the green fades away. Now the hidden yellows and oranges can finally be seen. In some trees, new red colors are also made in these final weeks.\n\nWhy does the tree do this? By dropping its leaves, a tree saves energy and water during the hard, cold winter, when sunlight is weak. The colorful change is really a sign of the tree getting ready to rest.\n\nSo the next time you enjoy the reds and golds of autumn, remember that you are watching a tree prepare for winter. The beauty we love is also a wise and ancient plan for survival.",
        summaryJa: "毎秋、世界の多くの地域で緑の葉が黄・橙・赤の鮮やかな色に変わり、やがて落ちる。この毎年の光景は自然で最も美しいものの一つだが、色の裏には巧みな科学がある。春夏、葉が緑なのは「クロロフィル」という物質のためだ。これは木が日光から食物を作るのを助け、葉を濃い緑で満たす。実は他の色も初めから葉に隠れているが、緑が強すぎて見えない。秋が来ると日が短く空気が冷え、木は冬の到来を察して準備を始める。ゆっくりクロロフィルを作るのをやめ、緑が薄れると、隠れていた黄や橙がついに見える。木によっては最後の数週で新たに赤も作られる。なぜか。葉を落とすことで、日光の弱い厳しい冬に木はエネルギーと水を節約する。色づきは木が休む準備の合図だ。秋の紅葉を楽しむとき、木が冬に備える姿を見ているのだと思い出してほしい。愛でる美しさは、古くから続く賢い生存の計画でもある。",
        quiz: [
          { q: "Why are leaves green in spring and summer?", options: ["Because of a substance called chlorophyll that helps make food from sunlight", "Because they are painted green", "Because of the cold weather"], answer: 0 },
          { q: "Why do the yellow and orange colors appear in autumn?", options: ["The tree stops making chlorophyll, so the green fades and hidden colors show", "Someone adds them", "The leaves get wet"], answer: 0 },
          { q: "Why does a tree drop its leaves?", options: ["To save energy and water during the hard, cold winter", "To make the ground colorful", "Because leaves are useless in summer"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-09-06",
    passages: [
      {
        id: "d0906-1",
        title: "Why the World Picks a 'Color of the Year'",
        level: "★★☆",
        genre: "ビジネス",
        text: "Every year, certain companies announce a \"color of the year.\" It might be a warm red, a calm blue, or even a soft white. This may sound like a small thing, but the choice can influence fashion, product design, and shopping around the world. Behind it lies a surprising amount of business thinking.\n\nWhy does a single color matter so much? Colors carry feelings. A bright shade can feel cheerful and bold, while a gentle tone can feel calm and clean. When experts choose a color of the year, they are trying to capture the mood of the moment — what people are feeling and wanting right now.\n\nFor businesses, this trend is useful. Clothing makers, furniture designers, and even phone companies watch these choices closely. If they use the popular color, their products may feel fresh and modern, and easier to sell. Stores can build displays and advertisements around the same shade.\n\nOf course, no one is forced to follow the trend. Many people simply buy the colors they personally like. The color of the year is a suggestion, not a rule, and next year it will change again.\n\nStill, it shows how deeply design shapes business. A single well-chosen color can send a message without words, connect a product to a feeling, and quietly guide what millions of people decide to buy.",
        summaryJa: "毎年、ある企業が「今年の色」を発表する。暖かい赤や落ち着いた青、柔らかい白のこともある。小さなことに聞こえるが、この選択は世界のファッションや製品デザイン、買い物に影響しうる。背景には意外なほどのビジネス的な考えがある。なぜ一つの色がそれほど重要なのか。色は感情を運ぶ。明るい色は陽気で大胆に、優しい色は穏やかで清潔に感じられる。専門家は「今年の色」で今の気分——人々が感じ求めているもの——を捉えようとする。企業には有用で、衣類や家具、電話の会社も注目する。流行色を使えば製品は新鮮で現代的に感じられ売りやすい。ただし従う義務はなく、あくまで提案で来年また変わる。色一つが言葉なくメッセージを伝え、購買を静かに導く。デザインがいかに深くビジネスを形づくるかを示している。",
        quiz: [
          { q: "Why can a single 'color of the year' matter so much?", options: ["Colors carry feelings and can capture the mood of the moment", "Colors have no effect on people", "Only painters care about color"], answer: 0 },
          { q: "How do businesses use the color of the year?", options: ["They design products and displays around the popular shade", "They ignore it completely", "They stop selling all products"], answer: 0 },
          { q: "What does the passage say the color of the year really is?", options: ["A strict rule everyone must follow", "A suggestion, not a rule, that changes each year", "A law made by governments"], answer: 1 }
        ]
      },
      {
        id: "d0906-2",
        title: "Using AI to Tame a Star",
        level: "★★★",
        genre: "テクノロジー",
        text: "Deep inside the sun, a powerful process called fusion joins tiny particles together and releases enormous energy. For decades, scientists have dreamed of copying this process on Earth to create clean, almost limitless power. But there is a huge challenge: to do fusion, you must control a gas hotter than the sun, and it is extremely difficult to keep steady.\n\nThis super-hot gas, called plasma, moves in wild and sudden ways. If it becomes unstable, it can damage the machine that holds it. Human operators simply cannot react fast enough to stop these sudden changes. This is where artificial intelligence is beginning to help.\n\nRecently, researchers tested an AI system that watches the plasma and predicts trouble before it happens. In one experiment, the AI sensed a dangerous instability a fraction of a second before it appeared — and adjusted the machine to prevent it. For a computer, that tiny moment is enough time to act.\n\nThis is exciting because controlling plasma is one of the biggest barriers to fusion power. If AI can keep the plasma calm and steady, experiments can run longer and more safely.\n\nFusion energy is still not ready for everyday use, and many problems remain. But by teaming up human scientists with fast, watchful AI, researchers are taking real steps toward a future power source as clean and mighty as a star.",
        summaryJa: "太陽の奥深くでは「核融合」という強力な過程が小さな粒子を結びつけ、莫大なエネルギーを放つ。科学者は数十年、これを地上で再現し、清潔でほぼ無限の電力を作ることを夢見てきた。だが難題がある。核融合には太陽より熱い気体を制御せねばならず、安定させるのが極めて難しい。この超高温の気体「プラズマ」は激しく突然に動き、不安定になると装置を傷つける。人の操作では反応が間に合わない。そこでAIが助け始めている。最近、研究者はプラズマを監視し問題を事前に予測するAIを試した。ある実験では危険な不安定を一瞬前に察知し、装置を調整して防いだ。プラズマ制御は核融合の最大の壁の一つで、AIが安定させれば実験を長く安全に行える。実用はまだ先だが、人とAIの協働で恒星のように清潔で強力な電源へ着実に進んでいる。",
        quiz: [
          { q: "What is the big challenge in creating fusion power on Earth?", options: ["Controlling a gas hotter than the sun and keeping it steady", "Finding enough sunlight", "Making the machine colder than ice"], answer: 0 },
          { q: "How is AI beginning to help with fusion?", options: ["It watches the plasma and predicts trouble before it happens", "It makes the plasma hotter on purpose", "It replaces all the scientists"], answer: 0 },
          { q: "What does the passage say about fusion energy's readiness?", options: ["It is ready for everyday use now", "It is still not ready, and many problems remain", "It will never be possible"], answer: 1 }
        ]
      },
      {
        id: "d0906-3",
        title: "Europe Builds Its Own Rockets",
        level: "★★★",
        genre: "世界情勢",
        text: "Sending a satellite into space is no longer just the work of a few large nations. Around the world, more countries and companies want the ability to launch rockets on their own. Recently, a European company sent a rocket into orbit from a launch site in northern Europe — a sign of the region's growing wish to reach space independently.\n\nWhy does this matter? Modern life depends on satellites. They power our maps, weather forecasts, television, and much of the internet. A country or region that cannot launch its own satellites must rely on others, and that can be costly or uncertain. Building your own rockets means more control over your own future.\n\nThere is also a business side. The market for launching small satellites is growing fast. Many companies now want cheap, frequent rides to space for their devices. A region with its own rockets can win this business and create skilled jobs at home.\n\nThe work is hard and expensive. Rockets are complex, and failures are common in the early years. Building launch sites, training engineers, and testing designs all take time and money.\n\nStill, the effort reflects a wider truth about our age. Space is becoming part of the everyday economy, not just a place for a few explorers. As more players learn to reach orbit, access to space is slowly becoming something the whole world can share.",
        summaryJa: "衛星を宇宙へ送ることは、もはや一部の大国だけの仕事ではない。世界中で、より多くの国や企業が自力でロケットを打ち上げる能力を求めている。最近、欧州の企業が北欧の発射場からロケットを軌道に送り、この地域の自立して宇宙に届きたいという思いの高まりを示した。なぜ重要か。現代生活は衛星に依存する。地図や天気予報、テレビ、インターネットの多くを支える。自前で打ち上げられない国や地域は他者に頼らねばならず、費用や不確実さが伴う。自前のロケットは自らの未来をより制御できることを意味する。ビジネス面もあり、小型衛星打ち上げ市場は急成長中で、安く頻繁な便を求める企業が多い。自前のロケットを持つ地域はこの商機をつかみ、熟練の雇用も生む。難しく高価で初期は失敗も多いが、宇宙が日常経済の一部になりつつある時代を映す。宇宙への到達は、少しずつ世界全体が分かち合えるものになっている。",
        quiz: [
          { q: "Why does the ability to launch rockets matter to a region?", options: ["Modern life depends on satellites, so launching your own means more control", "Rockets are only for fun", "Satellites are useless today"], answer: 0 },
          { q: "What is the business reason mentioned in the passage?", options: ["The market for launching small satellites is growing fast", "Nobody wants to launch satellites", "Space travel is now free"], answer: 0 },
          { q: "What does the passage say about building rockets?", options: ["It is easy and cheap", "It is hard and expensive, and early failures are common", "It takes no time at all"], answer: 1 }
        ]
      },
      {
        id: "d0906-4",
        title: "The Meaning of 'Itadakimasu'",
        level: "★☆☆",
        genre: "日本",
        text: "In Japan, people say a special word before they eat: \"itadakimasu.\" Young children learn it at home and at school, and adults say it too, often with their hands pressed together. It looks like a simple greeting, but it carries a deep and beautiful meaning.\n\nThe word is a way of giving thanks. It is not only thanks to the person who cooked the meal. It is also thanks to the farmers who grew the food, the people who brought it to the table, and even the plants and animals that became the meal. In a single word, a person shows respect for the whole journey that the food has made.\n\nAfter eating, there is another word: \"gochisousama.\" This means thank you for the meal, once again showing gratitude when the food is finished. Together, these two phrases wrap every meal in a feeling of appreciation.\n\nFor visitors to Japan, learning these words is an easy and lovely way to join in. Saying \"itadakimasu\" before a meal is polite, and it often makes people smile.\n\nMore than good manners, this custom teaches a gentle lesson. Food does not appear by magic; many hands and lives make it possible. By pausing for one short word, people remember to be thankful. It is a small habit with a warm and lasting spirit.",
        summaryJa: "日本では食事の前に「いただきます」という特別な言葉を言う。子どもは家庭や学校で学び、大人も手を合わせて言うことが多い。単なる挨拶に見えるが、深く美しい意味を持つ。この言葉は感謝の表し方だ。料理した人へだけでなく、食材を育てた農家、食卓へ運んだ人々、そして食事となった動植物への感謝でもある。一言で、食べ物がたどった道のり全体への敬意を示す。食後には「ごちそうさま」という言葉があり、食べ終えた後に再び感謝を表す。この二つの言葉が毎回の食事を感謝の気持ちで包む。訪日者にとっても覚えるのは簡単で素敵な参加の仕方だ。良い作法以上に、食べ物は魔法のように現れるのではなく多くの手と命が支えているという優しい教えがある。短い一言で立ち止まり、人は感謝を思い出す。温かく長く続く精神を持つ小さな習慣だ。",
        quiz: [
          { q: "When do people in Japan say 'itadakimasu'?", options: ["Before they eat a meal", "Only on New Year's Day", "When they go to sleep"], answer: 0 },
          { q: "What does 'itadakimasu' express thanks for?", options: ["Only the money spent", "The whole journey of the food, including farmers, cooks, and living things", "Nothing in particular"], answer: 1 },
          { q: "What is 'gochisousama'?", options: ["A word said after eating, to give thanks for the meal", "A kind of food", "A word said before sleeping"], answer: 0 }
        ]
      },
      {
        id: "d0906-5",
        title: "Why Do We Get Goosebumps?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "Have you ever felt small bumps rise on your skin when you are cold, or when you hear a beautiful piece of music? These little bumps are called goosebumps. They appear in a moment and then fade away. But why does the human body do this at all?\n\nGoosebumps come from tiny muscles at the base of each hair. When these muscles tighten, they pull the hairs upright and push the skin into small bumps. This happens automatically; you cannot decide to make goosebumps appear.\n\nThe reason goes far back into our history. Long ago, our distant ancestors had much more body hair. When they were cold, raising their hair trapped a layer of warm air, like a natural coat. When they faced danger, standing hair made them look bigger and more frightening to enemies. Many animals still use this trick today — think of a frightened cat with its fur standing on end.\n\nFor modern humans, goosebumps are mostly a leftover from that past. We no longer have thick fur, so they do little to keep us warm. Yet they still appear, triggered by cold, fear, or even strong emotion.\n\nGoosebumps are a small, harmless reminder that our bodies carry an ancient story. Every time your skin tingles at a great song, you are feeling a signal millions of years old.",
        summaryJa: "寒いときや美しい音楽を聞いたとき、肌に小さな粒が立つのを感じたことはないだろうか。これを鳥肌という。一瞬で現れ、やがて消える。なぜ体はこんなことをするのか。鳥肌は各毛の根元にある小さな筋肉から生じる。この筋肉が縮むと毛を立て、肌を小さな粒にする。自動的に起き、自分では作れない。理由は歴史の遠い昔にさかのぼる。祖先はもっと体毛が多く、寒いとき毛を立てて暖かい空気の層を作り、天然のコートのようにした。危険に直面すると、逆立つ毛は体を大きく恐ろしく見せた。多くの動物は今もこの技を使う——毛を逆立てた怯えた猫を思い浮かべてほしい。現代人には過去の名残で、厚い毛がないので保温の役はほとんどないが、寒さや恐れ、強い感情で今も現れる。鳥肌は体が古い物語を宿す小さな無害な合図だ。",
        quiz: [
          { q: "What causes goosebumps to appear?", options: ["Tiny muscles at the base of each hair tighten and pull the hairs upright", "Water on the skin", "A special food"], answer: 0 },
          { q: "Why did goosebumps help our distant ancestors?", options: ["Raised hair trapped warm air and made them look bigger to enemies", "They made people run faster", "They cooled the body down"], answer: 0 },
          { q: "What are goosebumps for modern humans?", options: ["A vital way to stay warm", "Mostly a leftover from our past, since we no longer have thick fur", "A recent invention"], answer: 1 }
        ]
      }
    ]
    }
  ] };
