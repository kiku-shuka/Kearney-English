/* デイリー配信リーディング
 * 毎朝の自動ルーチンがこのファイルを丸ごと上書き生成する（直近 7 日分を保持）。
 * days は日付降順。各 day = { date: "YYYY-MM-DD", passages: [readingPassages と同スキーマ + genre] }
 * このファイル以外は手書きデータであり、ルーチンは触らない。
 */
window.KE_DATA = window.KE_DATA || {};

KE_DATA.dailyReading = { days: [
    {
    date: "2026-11-12",
    passages: [
      {
        id: "d1112-1",
        title: "What Is Inflation?",
        level: "★★☆",
        genre: "ビジネス",
        text: "Have you ever heard an older person say, When I was young, a bottle of milk cost almost nothing? They are not imagining it. Over the years, the prices of most things slowly rise. A meal, a train ticket, or a house usually costs more today than it did twenty years ago. This general, slow rise in prices over time is called inflation.\n\nInflation really means that money is losing some of its value. If prices double over many years, then the same coin buys only half as much as it once did. The money in your pocket has not changed, but what it can buy has shrunk.\n\nA small, steady amount of inflation is normal and is usually not a problem. In fact, most governments aim for a little inflation each year, because it is a sign of a healthy, growing economy. Prices and wages tend to rise together slowly.\n\nProblems appear when inflation becomes too fast. If prices rise very quickly, people's savings lose value, and those on fixed incomes, such as pensioners, can suffer, because their money buys less and less. Life becomes uncertain and difficult.\n\nThis is why governments and central banks watch inflation very carefully. They use various tools to try to keep it low and steady, avoiding both fast price rises and the opposite problem of falling prices.\n\nUnderstanding inflation helps explain many things: why wages rise, why saving matters, and why the money of today will almost certainly buy less in the future than it does right now.",
        summaryJa: "インフレーション（物価上昇）とは何かについて。年配の人が「若い頃は牛乳一本がほとんどただ同然だった」と言うのを聞いたことはないだろうか。思い込みではない。年月とともに、ほとんどの物の値段はゆっくり上がる。食事も電車の切符も家も、たいてい二十年前より今の方が高い。この時間をかけた全般的でゆっくりした値上がりをインフレという。インフレは実は、お金が価値の一部を失うことを意味する。何年もかけて物価が倍になれば、同じ硬貨で買えるのはかつての半分だけだ。財布のお金は変わらないが、買える量は縮んだ。小さく安定したインフレは普通で、たいてい問題ではない。実際、多くの政府は毎年少しのインフレを目指す。健全で成長する経済の兆しだからだ。物価と賃金はゆっくり共に上がる傾向がある。問題はインフレが速すぎるときに生じる。物価が急に上がると貯金は価値を失い、年金生活者など固定収入の人は苦しむ。だから政府や中央銀行はインフレを注意深く見守り、様々な手段で低く安定に保とうとする。賃金が上がる理由や貯蓄が大切な理由を説明してくれる。",
        quiz: [
          { q: "What is inflation?", options: ["A general, slow rise in prices over time", "A fall in all prices to zero", "A kind of new coin"], answer: 0 },
          { q: "What does inflation mean for money?", options: ["Money slowly loses some of its value", "Money becomes worth more each day", "Money stops existing"], answer: 0 },
          { q: "When does inflation become a problem?", options: ["When prices rise too fast, so savings and fixed incomes lose value", "When it is small and steady", "Inflation is never a problem"], answer: 0 }
        ]
      },
      {
        id: "d1112-2",
        title: "How Does a Battery Work?",
        level: "★★☆",
        genre: "テクノロジー",
        text: "Batteries are everywhere in modern life, powering our phones, toys, torches, and remote controls. A battery is a small, portable store of energy, ready to give electricity whenever we need it. But a battery does not actually hold electricity inside it, waiting to pour out. Instead, it holds something cleverer: the power to make electricity on demand, through a chemical reaction.\n\nInside every battery are chemicals, carefully chosen and kept apart. These chemicals have a strong tendency to react with one another. When they do react, one of the effects is to push tiny particles called electrons from one part of the battery to another. A flow of electrons is exactly what electricity is.\n\nThe clever design of a battery is that the chemicals cannot react directly inside it. The only path for the electrons to travel is out through the two ends of the battery, called terminals. When you connect a battery into a device, such as a torch, you complete a path, or circuit, between these two terminals. Now the electrons can finally flow, travelling out of the battery, through the device, and back again. On their way, they give their energy to the device, lighting the bulb.\n\nAs the battery works, its chemicals are slowly used up. Eventually, the reaction can no longer happen, and we say the battery is flat, or dead. Some batteries can be recharged, which uses electricity to reverse the chemical change, so the battery can be used again.\n\nSo a battery is really a small chemical factory, quietly turning stored chemicals into useful electric power.",
        summaryJa: "電池の仕組みについて。電池は現代生活のあらゆる所にあり、スマホやおもちゃ、懐中電灯、リモコンを動かす。電池は小さな持ち運べるエネルギーの蓄えで、必要なときに電気を出せる。だが電池は実は、中に電気をためて噴き出すのを待っているのではない。もっと巧妙なもの、化学反応で必要に応じて電気を作る力を持つ。どの電池の中にも、慎重に選ばれ分けて保たれた化学物質がある。これらは互いに強く反応しようとする性質を持つ。反応すると、その効果の一つとして、電子という小さな粒を電池のある部分から別の部分へ押しやる。電子の流れこそが電気だ。電池の巧妙な設計は、化学物質が内部で直接反応できないことだ。電子が進める唯一の道は、端子という二つの端を通って外へ出ることだ。電池を懐中電灯などの機器につなぐと、二つの端子の間に回路という道ができる。すると電子はようやく流れ、電池から出て機器を通り戻る。途中でエネルギーを機器に与え、電球を灯す。働くうちに化学物質は使い切られ、やがて電池切れになる。充電で元に戻せる電池もある。小さな化学工場だ。",
        quiz: [
          { q: "What does a battery actually store?", options: ["Chemicals that can make electricity through a reaction", "Electricity waiting inside, ready to pour out", "Tiny bulbs"], answer: 0 },
          { q: "What is electricity, in a battery?", options: ["A flow of tiny particles called electrons", "A kind of light", "A type of heat only"], answer: 0 },
          { q: "Why does a battery eventually go flat?", options: ["Its chemicals are slowly used up, so the reaction can no longer happen", "It runs out of stored light", "The terminals disappear"], answer: 0 }
        ]
      },
      {
        id: "d1112-3",
        title: "How Does the World Help After a Natural Disaster?",
        level: "★★★",
        genre: "世界情勢",
        text: "When a powerful earthquake, flood, or storm strikes a region, the damage can be overwhelming. Homes are destroyed, roads are broken, and many people may suddenly be left without food, clean water, or shelter. In such moments, a stricken country often cannot cope alone. One of the most hopeful sights in such times is the way the rest of the world comes together to help.\n\nHelp arrives in many forms and from many directions. In the first critical days, rescue teams fly in from other countries, bringing trained workers and dogs to search for survivors trapped under fallen buildings. Speed is vital, as every hour counts.\n\nAfter the immediate rescue, the focus turns to survival and comfort. Governments, international organisations, and charities send emergency supplies: clean water, food, medicine, tents, and blankets. Medical teams set up temporary hospitals to care for the injured and prevent the spread of disease.\n\nMuch of this effort is coordinated so that help is not wasted or duplicated. Large organisations and the famous Red Cross and Red Crescent work to make sure aid reaches the people who need it most. Ordinary people around the world also give money, often in huge amounts, to support the relief work.\n\nThe road to full recovery after a great disaster can take many years. But the immediate response shows something deeply encouraging about humanity. When disaster strikes one part of the human family, people everywhere, regardless of nation or language, are often moved to reach out and help strangers they will never meet.",
        summaryJa: "自然災害の後、世界はどう助けるのかについて。強い地震や洪水、暴風がある地域を襲うと、被害は圧倒的になりうる。家は壊れ、道は寸断され、多くの人が突然、食べ物や清潔な水、住む場所を失う。そんなとき、被災した国は一国だけでは対処しきれないことが多い。こうした時に最も希望ある光景の一つが、世界の他の地域が助けに集まる様子だ。助けは多くの形で、多くの方向から届く。最初の重要な数日、他国から救助隊が飛来し、訓練された人や犬を連れて、倒れた建物の下に閉じ込められた生存者を捜す。一刻を争うので速さが重要だ。当面の救助の後、焦点は生存と安らぎに移る。政府や国際機関、慈善団体が、清潔な水、食料、薬、テント、毛布などの緊急物資を送る。医療チームが仮設の病院を設け、負傷者を手当てし病気の広がりを防ぐ。多くは助けが無駄や重複にならないよう調整される。大きな組織や有名な赤十字・赤新月が、最も必要とする人に援助が届くよう努める。世界中の普通の人々も多額の寄付をする。完全な復興には何年もかかりうるが、即時の対応は人間性の励みになる何かを示す。",
        quiz: [
          { q: "What arrives in the first critical days after a disaster?", options: ["Rescue teams to search for trapped survivors", "Only tourists", "New factories"], answer: 0 },
          { q: "What kind of emergency supplies are sent?", options: ["Clean water, food, medicine, tents, and blankets", "Toys and games only", "Nothing useful"], answer: 0 },
          { q: "Why is the relief effort coordinated?", options: ["So that help is not wasted or duplicated and reaches those who need it most", "To make it slower", "To help only one city"], answer: 0 }
        ]
      },
      {
        id: "d1112-4",
        title: "Shodo: The Art of Japanese Calligraphy",
        level: "★★☆",
        genre: "日本",
        text: "In a quiet room, a person sits straight and still before a clean sheet of white paper. They dip a soft brush into black ink, pause for a moment to calm their mind, and then, in a few smooth, confident strokes, create a beautiful character. This is shodo, the ancient art of Japanese calligraphy, in which writing itself becomes a form of art.\n\nShodo uses a few simple tools: a brush, a stick of ink, a stone to prepare the ink with water, and paper. Yet mastering them takes many years. Unlike typing or everyday writing, the goal of shodo is not only to be clear, but to be beautiful and full of feeling.\n\nEvery stroke matters enormously. The artist must control the amount of ink, the pressure of the brush, and the speed of the hand. A single character may be written in one flowing movement that cannot be corrected or touched up afterwards. Because of this, the writing captures the artist's state of mind at that exact moment. A calm, focused heart produces calm, balanced writing.\n\nFor this reason, shodo is seen as much more than beautiful writing. Like many Japanese arts, it is also a path to developing patience, concentration, and inner calm. Children learn it at school, and many adults practise it throughout their lives.\n\nA finished work of shodo, hanging on a wall, is admired not just for its meaning, but for its energy and grace, a frozen record of a single, perfect, unrepeatable moment of focus.",
        summaryJa: "書道、日本の書の芸術について。静かな部屋で、人が白い清らかな紙の前に背筋を伸ばして静かに座る。柔らかい筆を黒い墨に浸し、少し間を置いて心を鎮め、そして滑らかで確かな数筆で美しい文字を生み出す。これが書道、書くこと自体が芸術になる日本の古い技だ。書道が使う道具は少ない。筆、墨、水で墨をする硯、そして紙だ。だが使いこなすには長い年月がかかる。入力や日常の筆記と違い、書道の目的は明瞭であることだけでなく、美しく感情に満ちていることだ。一筆一筆が非常に重要だ。書き手は墨の量、筆の圧、手の速さを操らねばならない。一文字が、後から直せない一つの流れる動きで書かれることもある。だから書は、まさにその瞬間の書き手の心を捉える。穏やかで集中した心は穏やかで均整のとれた書を生む。このため書道は美しい文字以上のものと見なされる。多くの日本の芸術同様、忍耐や集中、内なる静けさを育む道でもある。子どもは学校で学び、多くの大人が生涯を通じて続ける。壁に掛けられた作品は、意味だけでなく力と優美さでも称えられる。",
        quiz: [
          { q: "What is shodo?", options: ["The Japanese art of calligraphy, where writing becomes art", "A kind of painting with colors", "A type of dance"], answer: 0 },
          { q: "Why does every stroke matter so much?", options: ["A character is often written in one movement that cannot be corrected", "The paper is very expensive", "The brush is very heavy"], answer: 0 },
          { q: "Besides beautiful writing, what is shodo seen as?", options: ["A path to developing patience, concentration, and inner calm", "A way to write as fast as possible", "A kind of sport"], answer: 0 }
        ]
      },
      {
        id: "d1112-5",
        title: "Why Do Cats Purr?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "Anyone who has stroked a happy, sleepy cat knows the gentle, rumbling sound it makes: a soft, steady purr. It is one of the most comforting sounds in the animal world, and we usually take it as a clear sign that a cat is content. But how do cats make this sound, and does it always mean they are happy? The answer is more surprising than you might think.\n\nFirst, how is a purr made? Scientists believe it comes from the muscles in the cat's voice box, or larynx. These muscles open and close the space very quickly, many times a second. As the cat breathes in and out, the air passing through this rapidly moving space creates the familiar purring sound. Remarkably, a cat can purr continuously, both as it breathes in and as it breathes out.\n\nThe bigger surprise is why cats purr. Most of the time, a purr does mean a cat is relaxed and happy. But cats have also been observed purring when they are frightened, injured, or even close to death. This suggests that purring is not only a sign of joy.\n\nOne fascinating idea is that purring may help a cat to heal. The gentle vibrations of a purr happen at a frequency that some scientists think may help to strengthen bones and repair tissues. If this is true, a cat may purr to comfort and heal itself in times of stress, as well as to express contentment.\n\nSo the humble purr may be far more than a simple sound of happiness. It remains one of the gentle mysteries of our feline friends.",
        summaryJa: "猫はなぜ喉を鳴らすのかについて。幸せそうに眠い猫をなでたことのある人なら、その優しく響く音、柔らかく一定したゴロゴロを知っている。動物界で最も心地よい音の一つで、普通は猫が満足している明らかな印と受け取る。だが猫はどうやってこの音を出し、いつも幸せを意味するのか。答えは思うより意外だ。まず、どうやって鳴らすのか。科学者は、猫の喉頭（声を出す器官）の筋肉から来ると考える。この筋肉が毎秒何度も素早く空間を開閉する。猫が息を吸い吐きする際、この素早く動く空間を通る空気があのゴロゴロ音を作る。驚くべきことに、猫は吸う時も吐く時も続けて鳴らせる。もっと大きな驚きはなぜ鳴らすかだ。たいていは確かにくつろぎ幸せを意味する。だが猫は、怖がったり傷ついたり、死に近いときでさえ喉を鳴らすのが観察されている。喜びの印だけではないのだ。興味深い一説は、ゴロゴロが猫の治癒を助けるかもしれないというものだ。その穏やかな振動はある周波数で起こり、骨を強め組織を修復するのを助けうると考える科学者もいる。本当なら、猫はストレス時に自らを慰め癒やすために鳴らすのかもしれない。",
        quiz: [
          { q: "How do scientists believe a purr is made?", options: ["By muscles in the voice box opening and closing very quickly", "By the cat's stomach", "By the cat's tail moving"], answer: 0 },
          { q: "What is surprising about when cats purr?", options: ["They also purr when frightened, injured, or near death, not only when happy", "They only purr once a year", "They purr only while eating"], answer: 0 },
          { q: "What is one fascinating idea about purring?", options: ["Its vibrations may help strengthen bones and repair tissues", "It makes the cat grow bigger", "It cleans the cat's fur"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-11-11",
    passages: [
      {
        id: "d1111-1",
        title: "What Is a Share in a Company?",
        level: "★★☆",
        genre: "ビジネス",
        text: "When a company wants to grow, it often needs a large amount of money, perhaps to build a new factory or expand into other countries. One powerful way to raise this money is to sell small pieces of the company itself to the public. Each of these small pieces is called a share, and anyone who owns one becomes, in a tiny way, a part-owner of the company.\n\nImagine a company is divided into a million equal pieces. If you buy one share, you own one millionth of that company. Buy a thousand shares, and you own a thousand millionths. Owning shares makes you a shareholder, with a real stake in how the business performs.\n\nWhy do people buy shares? There are two main hopes. First, if the company does well and becomes more valuable, the price of each share may rise. The shareholder can then sell their shares for more than they paid, making a profit. Second, many companies share some of their yearly profits with their shareholders. This payment is called a dividend.\n\nOf course, there is also risk. If the company does badly, the share price can fall, and shareholders may lose money. Share prices can rise and fall for many reasons, so buying shares is never a sure way to get rich.\n\nShares are a clever idea that connects ordinary people to the success of businesses. They let companies raise money to grow, and they let people, in a small way, own a part of the companies whose products they use every day.",
        summaryJa: "株（株式）とは何かについて。会社が成長したいとき、新しい工場を建てたり他国へ進出したりするために、多額の資金を必要とすることが多い。その資金を集める強力な方法の一つが、会社自体の小さな一片を広く人々に売ることだ。この小さな一片を株といい、一つでも持てば、ごくわずかながら会社の一部の所有者になる。会社が百万の等しい片に分かれていると想像しよう。一株買えば会社の百万分の一を所有する。千株買えば千の百万分の一だ。株を持つと株主になり、事業の成績に本当の利害を持つ。なぜ人は株を買うのか。主な望みは二つ。第一に、会社が好調で価値が上がれば、各株の値段も上がりうる。株主は払った額より高く売って利益を得られる。第二に、多くの会社は年間利益の一部を株主に分ける。この支払いを配当という。もちろん危険もある。会社が不調なら株価は下がり、株主は損をしうる。株価は様々な理由で上下し、確実に儲かる方法では決してない。株は人々を事業の成功に結びつける巧妙な考えだ。",
        quiz: [
          { q: "What does owning a share mean?", options: ["You become, in a tiny way, a part-owner of the company", "You manage the whole company", "You work for the company for free"], answer: 0 },
          { q: "What is a dividend?", options: ["A payment of some of a company's profits to its shareholders", "A fee for buying shares", "A kind of company car"], answer: 0 },
          { q: "What is a risk of buying shares?", options: ["If the company does badly, the share price can fall and you may lose money", "Shares always rise in value", "You can never sell them"], answer: 0 }
        ]
      },
      {
        id: "d1111-2",
        title: "How Does Wi-Fi Work?",
        level: "★★☆",
        genre: "テクノロジー",
        text: "In homes, cafés, and offices everywhere, people connect their phones and computers to the internet without any wires at all. We call this Wi-Fi, and it feels almost like magic. Information seems to travel through empty air, from a small box on the wall to the device in your hand. But there is no magic involved, only a clever use of something invisible all around us: radio waves.\n\nRadio waves are a kind of energy that travels through the air, the same basic thing used to carry radio and television signals. They are completely invisible and harmless, and they can pass through air and even walls. Wi-Fi uses these waves to carry information instead of music or pictures.\n\nAt the centre of a Wi-Fi network is a device called a router. The router is connected to the internet, usually by a cable coming into the building. Its job is to turn the information from the internet into radio waves and broadcast them into the air around it.\n\nYour phone or computer contains a tiny radio of its own. It listens for these waves, receives them, and turns them back into useful information, such as a web page or a message. It can also send waves back to the router, so the conversation goes both ways.\n\nBecause the signal travels through the air, you must be fairly close to the router for a strong connection. Walls and distance can weaken it.\n\nSo Wi-Fi is really just a two-way radio conversation, happening silently and invisibly, carrying the whole internet across the short distance from a router to your hand.",
        summaryJa: "Wi-Fiの仕組みについて。家でも喫茶店でも職場でも、人々は線を一切使わずスマホやパソコンをインターネットにつなぐ。これをWi-Fiといい、まるで魔法のようだ。情報が壁の小さな箱から手の中の機器へ、何もない空中を伝わるように見える。だが魔法ではなく、私たちの周りに見えない形で存在するもの、電波の巧妙な利用だ。電波は空気中を伝わるエネルギーの一種で、ラジオやテレビの信号を運ぶのと同じものだ。完全に目に見えず無害で、空気や壁さえ通り抜けられる。Wi-Fiはこの波で、音楽や映像の代わりに情報を運ぶ。Wi-Fiネットワークの中心にはルーターという装置がある。ルーターはたいてい建物に入るケーブルでインターネットにつながる。その仕事は、インターネットからの情報を電波に変え、周囲の空中へ放つことだ。あなたのスマホやパソコンは自前の小さな無線機を持つ。この波を聞き取り受信し、ウェブページやメッセージなど役立つ情報に戻す。ルーターへ波を送り返しもでき、やり取りは双方向だ。壁や距離で弱まるため、強い接続にはルーターに近い必要がある。",
        quiz: [
          { q: "What does Wi-Fi use to carry information?", options: ["Radio waves travelling through the air", "Thin hidden wires", "Beams of water"], answer: 0 },
          { q: "What is the job of a router?", options: ["To turn internet information into radio waves and broadcast them", "To store all the world's websites", "To make electricity"], answer: 0 },
          { q: "Why must you be fairly close to the router?", options: ["Walls and distance can weaken the signal", "The router can only see you", "Radio waves need sunlight"], answer: 0 }
        ]
      },
      {
        id: "d1111-3",
        title: "What Is the United Nations?",
        level: "★★★",
        genre: "世界情勢",
        text: "The world is divided into nearly two hundred countries, each with its own government, language, and interests. With so many different nations sharing one planet, disagreements are certain to arise. How can the countries of the world talk to one another, solve problems, and avoid dangerous conflicts? To help with exactly this, nations created a remarkable organisation called the United Nations, often shortened to the UN.\n\nThe United Nations was founded after the Second World War, a terrible conflict that taught the world a hard lesson about the cost of war. Its central purpose is to help keep peace between countries. Almost every nation in the world is now a member.\n\nThe UN works in many ways. Its most famous feature is a great hall where representatives from every member country can meet, speak, and vote on important issues. Here, even the smallest nation has a voice. When conflicts threaten, the UN can send peacekeepers, help arrange talks, or ask countries to stop fighting.\n\nBut the UN does far more than deal with conflict. Through its many agencies, it works to improve health, feed the hungry, protect children, help refugees, guard important sites, and care for the environment. Much of the quiet good it does around the world goes unnoticed.\n\nThe UN is not a world government, and it cannot force powerful countries to obey. It depends on cooperation, and it is often criticised for being slow or weak. Yet it remains humanity's largest attempt to work together as one, a place where nations can meet and talk, instead of only fighting.",
        summaryJa: "国際連合（国連）とは何かについて。世界は二百近い国に分かれ、各国が独自の政府・言語・利害を持つ。これほど多くの国が一つの惑星を分かち合えば、対立は必ず生じる。世界の国々はどうすれば互いに話し合い、問題を解決し、危険な紛争を避けられるのか。まさにこれを助けるため、国々は国際連合、しばしば国連と略される見事な組織を作った。国連は第二次世界大戦の後に設立された。戦争の代償という厳しい教訓を世界に与えた恐ろしい紛争だ。中心的な目的は国家間の平和を保つことで、今やほぼすべての国が加盟する。国連は多様に働く。最も有名なのは、全加盟国の代表が集まり発言し重要な問題に投票できる大きな議場だ。ここでは最も小さな国にも発言権がある。紛争が脅かせば、平和維持部隊を送り、会談を整え、戦いの停止を求められる。だが国連は紛争対応にとどまらない。多くの機関を通じ、健康の増進、飢餓の救済、子どもの保護、難民の支援、重要な場所の保護、環境の保全に努める。世界政府ではなく強国を従わせる力はないが、人類が一つとして協力しようとする最大の試みだ。",
        quiz: [
          { q: "Why was the United Nations founded?", options: ["To help keep peace between countries, after the Second World War", "To rule the whole world directly", "To start new wars"], answer: 0 },
          { q: "What is the UN's most famous feature?", options: ["A hall where every member country can meet, speak, and vote", "A single large army", "A world bank only"], answer: 0 },
          { q: "What is a limitation of the UN?", options: ["It is not a world government and cannot force powerful countries to obey", "It controls every country completely", "It has no members"], answer: 0 }
        ]
      },
      {
        id: "d1111-4",
        title: "Ekiben: Japan's Railway Lunch Boxes",
        level: "★★☆",
        genre: "日本",
        text: "Travelling by train in Japan is a pleasure in itself, and part of that pleasure comes from a delicious tradition: the ekiben. The word combines eki, meaning station, and ben, short for bento, the Japanese boxed lunch. An ekiben is simply a bento sold at a railway station or on a train, but it is far more special than that plain description suggests.\n\nWhat makes ekiben so loved is their variety and local character. All over Japan, each region and even each individual station is famous for its own particular ekiben. These boxes are filled with local specialities: the seafood of a coastal town, the beef of a famous farming area, or a dish linked to that region's history. Travellers look forward to trying the special ekiben of each place they pass through.\n\nThe boxes themselves are often beautiful. The food is arranged with great care, colourful and neat, and the container may be shaped or decorated to match the local theme. Some even come in pottery pots that travellers keep as souvenirs. A few clever ekiben can even heat themselves when you pull a string.\n\nEating an ekiben while watching the landscape roll past the window is one of the small joys of Japanese travel. It turns a simple meal into part of the journey itself.\n\nFor many people, the ekiben is a delicious reminder that in Japan, even everyday things like a packed lunch can become a small work of art, and a way to taste the character of a distant place.",
        summaryJa: "日本の駅弁について。日本で列車の旅をするのはそれ自体が楽しみで、その楽しみの一部はおいしい伝統、駅弁から来る。「駅」と、弁当を略した「弁」を合わせた言葉だ。駅弁は単に駅や車内で売られる弁当だが、その素っ気ない説明よりずっと特別だ。駅弁がこれほど愛されるのは、その多様さと土地ごとの個性だ。日本中で、各地方、さらには個々の駅までが独自の駅弁で有名だ。海辺の町の海の幸、有名な産地の牛肉、その地方の歴史に結びついた料理など、土地の名物が詰まる。旅人は通る各地の特別な駅弁を試すのを楽しみにする。箱そのものも美しいことが多い。料理は丁寧に、彩りよく整えて並べられ、容器が土地の主題に合わせて形作られ飾られることもある。旅人が記念に取っておく陶器の器に入ったものさえある。紐を引くと自ら温まる巧妙な駅弁もある。車窓を流れる景色を眺めながら駅弁を食べるのは、日本の旅の小さな喜びの一つだ。単純な食事を旅そのものの一部に変える。日常の弁当さえ小さな芸術になりうると教えてくれる。",
        quiz: [
          { q: "What is an 'ekiben'?", options: ["A boxed lunch sold at a railway station or on a train", "A kind of train ticket", "A type of railway car"], answer: 0 },
          { q: "What makes ekiben so loved?", options: ["Their variety and local character, using each region's specialities", "They are all exactly the same", "They contain no food"], answer: 0 },
          { q: "What is special about some ekiben boxes?", options: ["They are beautiful, and some can even heat themselves", "They are always empty", "They cannot be opened"], answer: 0 }
        ]
      },
      {
        id: "d1111-5",
        title: "How Do Chameleons Change Color?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "The chameleon is one of nature's most famous animals, known all over the world for a single amazing ability: it can change the colour of its skin. A chameleon sitting on a brown branch may be dull and brownish, but moments later, in a different mood, it may blaze with bright green, yellow, or even blue. For a long time, people misunderstood how and why this happens.\n\nMany people believe chameleons change colour mainly to hide, matching whatever they sit on. This is partly true, but it is not the main reason. Scientists have discovered that chameleons change colour mostly to show how they feel and to communicate with other chameleons. A bright, bold display can warn off a rival or attract a mate, while darker colours may signal fear or help the animal warm up in the sun.\n\nBut how do they actually do it? The secret lies in special layers of tiny crystals inside their skin. The chameleon can slightly change the spacing of these tiny crystals by relaxing or tightening its skin. Because colour depends on how light bounces off these crystals, changing their spacing changes the colour we see. When the crystals are close together, the skin may look blue or green; when they are spread apart, it may look yellow or red.\n\nSo a chameleon is not simply copying its background like a living mirror. Instead, it is using a remarkable, built-in system of crystals and light to paint its feelings onto its own skin, one of the most beautiful tricks in the whole of nature.",
        summaryJa: "カメレオンはどうやって体の色を変えるのかについて。カメレオンは自然で最も有名な動物の一つで、ある驚くべき能力で世界中に知られる。皮膚の色を変えられるのだ。茶色い枝に座るカメレオンはくすんだ茶色でも、しばらくして気分が変われば、鮮やかな緑や黄、さらには青に輝くことがある。長い間、人々はどうやって、なぜそうなるのかを誤解していた。多くの人は、カメレオンが主に身を隠すため、座る物に合わせて色を変えると信じている。一部は正しいが、主な理由ではない。科学者は、カメレオンが主に気持ちを示し、他のカメレオンと意思疎通するために色を変えると発見した。鮮やかで大胆な見せ方は競争相手を追い払い、相手を引きつける一方、暗い色は恐れを示したり日なたで体を温めるのを助けたりする。ではどうやって行うのか。秘密は皮膚の中の小さな結晶の特別な層にある。カメレオンは皮膚を緩めたり張ったりして結晶の間隔をわずかに変えられる。色は光が結晶にどう跳ね返るかで決まるので、間隔を変えると見える色が変わる。近いと青や緑、離れると黄や赤に見える。生きた鏡のように背景を写すのではなく、結晶と光の見事な仕組みで気持ちを皮膚に描くのだ。",
        quiz: [
          { q: "What is the main reason chameleons change colour?", options: ["To show how they feel and communicate with other chameleons", "Only to match the exact background", "To become invisible completely"], answer: 0 },
          { q: "How does a chameleon change its colour?", options: ["By changing the spacing of tiny crystals in its skin", "By painting itself", "By eating colored food"], answer: 0 },
          { q: "What decides the colour we see on its skin?", options: ["How light bounces off the crystals, which depends on their spacing", "The time of day only", "The color of its food"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-11-10",
    passages: [
      {
        id: "d1110-1",
        title: "What Is Cash Flow?",
        level: "★★☆",
        genre: "ビジネス",
        text: "Here is a puzzle that surprises many people: a company can be making a profit and still go out of business. How is this possible? The answer lies in one of the most important ideas in business, something as vital to a company as blood is to the body. It is called cash flow.\n\nCash flow simply means the movement of actual money into and out of a business. Money flows in when customers pay for goods or services. Money flows out when the company pays its workers, its suppliers, and its rent. For a business to survive, it must always have enough cash available at the right moment to pay what it owes.\n\nThis is different from profit. Profit is the money a company earns over time, on paper. But timing is everything. Imagine a company sells a large order and will earn a good profit, but the customer will not pay for sixty days. Meanwhile, the workers must be paid this week. On paper the company is doing well, yet right now it has no cash. If it cannot pay its staff, it is in serious trouble.\n\nThis is why businesses watch their cash flow so carefully. They must make sure that money is coming in fast enough to cover the money going out. A healthy, profitable company can be sunk by poor cash flow.\n\nSo cash flow is really about timing and survival. Profit shows whether a business is successful in the long run, but cash flow decides whether it can pay its bills today, and live to trade tomorrow.",
        summaryJa: "キャッシュフロー（資金の流れ）とは何かについて。多くの人を驚かせる謎がある。利益を出している会社が倒産することがあるのだ。どうしてか。答えは、体にとっての血液のように会社にとって極めて重要な、経営で最も大切な考えの一つにある。キャッシュフローだ。キャッシュフローとは単に、実際のお金が事業に出入りする流れのことだ。客が商品やサービスの代金を払えばお金が入り、会社が従業員・仕入先・家賃を払えばお金が出る。生き残るには、支払うべき時に常に十分な現金を持っていなければならない。これは利益とは違う。利益は会社が時間をかけて得る、帳簿上のお金だ。だが時機がすべてだ。大口の注文を売って大きな利益が出る予定でも、客の支払いが六十日後だとしよう。一方、従業員には今週払わねばならない。帳簿上は好調でも、今は現金がない。従業員に払えなければ深刻な事態だ。だから企業はキャッシュフローを注意深く見る。出るお金を賄えるほど速くお金が入るか確かめねばならない。黒字の会社でも資金繰りの悪化で沈みうる。要は時機と生存だ。",
        quiz: [
          { q: "Why can a profitable company still go out of business?", options: ["It may run out of cash to pay its bills at the right moment", "Profit is always fake", "Customers never pay anything"], answer: 0 },
          { q: "What is cash flow?", options: ["The movement of actual money into and out of a business", "The number of workers a company has", "The color of a company's money"], answer: 0 },
          { q: "Why is timing so important?", options: ["Money owed to the company may arrive after its own bills are due", "Bills never have a due date", "Timing does not matter at all"], answer: 0 }
        ]
      },
      {
        id: "d1110-2",
        title: "How Do Solar Panels Make Electricity?",
        level: "★★☆",
        genre: "テクノロジー",
        text: "On the roofs of houses, in large fields, and even on small calculators, dark blue or black panels quietly turn sunlight into electricity. They have no moving parts, make no noise, and burn no fuel. They simply sit in the sun and produce power. This almost magical process happens inside devices called solar panels, and it begins with a very special material.\n\nMost solar panels are made mainly from silicon, the same material found in ordinary sand. Silicon has a remarkable property: when light shines on it, it can knock tiny particles called electrons loose inside the material. Moving electrons are exactly what electricity is. So in a way, sunlight itself sets the electricity in motion.\n\nA solar panel is cleverly built to make these loosened electrons all flow in the same direction, rather than drifting randomly. When light hits the panel, it frees many electrons, and the design of the panel guides them to flow out through wires as a useful electric current. The brighter the sunlight, the more electricity is produced.\n\nThis electricity can then be used at once, stored in batteries for later, or sent into the wider electricity network to power other homes.\n\nSolar panels have become very important because their fuel, sunlight, is free, clean, and almost endless. They produce no smoke and no harmful gases while they work. As the world looks for cleaner ways to make energy, these silent panels, quietly turning light into power, are playing a larger and larger part in our daily lives.",
        summaryJa: "太陽光パネルはどうやって電気を作るのかについて。家の屋根や広い野原、小さな電卓の上でさえ、濃い青や黒のパネルが静かに日光を電気に変える。可動部もなく、音も立てず、燃料も燃やさない。ただ日なたにあって電力を生む。この魔法のような過程は太陽光パネルという装置の中で起こり、とても特別な材料から始まる。多くのパネルは主にシリコンでできている。ふつうの砂にも含まれる材料だ。シリコンには驚くべき性質がある。光が当たると、材料の中で電子という小さな粒を弾き出せるのだ。動く電子こそが電気そのものだ。だからある意味、日光自体が電気を動かし始める。太陽光パネルは、弾き出された電子がばらばらに漂うのでなく同じ向きに流れるよう巧みに作られている。光が当たると多くの電子が自由になり、パネルの設計がそれを電線へ有用な電流として導く。日光が強いほど多くの電気が生まれる。この電気はすぐ使うことも、電池に蓄えることも、電力網に送って他の家をまかなうこともできる。燃料の日光は無料で清潔、ほぼ無尽蔵だ。",
        quiz: [
          { q: "What material are most solar panels mainly made from?", options: ["Silicon, also found in ordinary sand", "Pure gold", "Wood"], answer: 0 },
          { q: "How does sunlight create electricity in a solar panel?", options: ["It knocks electrons loose, and moving electrons are electricity", "It heats water into steam", "It burns a small fuel"], answer: 0 },
          { q: "Why have solar panels become so important?", options: ["Their fuel, sunlight, is free, clean, and almost endless", "They are the cheapest metal", "They make loud, useful noise"], answer: 0 }
        ]
      },
      {
        id: "d1110-3",
        title: "How Do Countries Protect Endangered Animals?",
        level: "★★★",
        genre: "世界情勢",
        text: "Across the world, many kinds of animals are in danger of disappearing forever. Elephants, tigers, certain whales, and countless lesser-known creatures have become rare, their numbers falling year after year. When a species vanishes completely, it is called extinction, and it can never be undone. To prevent this loss, countries have learned that they must work together.\n\nThe reason is simple: animals do not know borders. A bird may nest in one country and spend the winter in another. A whale may swim through the waters of many nations. Fighting to save such animals makes little sense if only one country acts while its neighbours do nothing.\n\nSo nations cooperate in several ways. One of the most important is controlling trade. Many animals became endangered because people hunted them to sell their skins, horns, or other parts. Countries have signed agreements that ban or strictly limit the international trade in these threatened species, removing much of the profit from harming them.\n\nCountries also work together to protect important habitats, the forests, rivers, and seas where animals live. They may create protected parks and reserves, and share scientific knowledge about how best to help a species recover. Richer nations sometimes help poorer ones pay for this difficult work.\n\nProtecting wildlife is not easy, and sadly some battles are lost. But there have also been real successes, with certain species slowly recovering thanks to international effort. Each one is a reminder that, by working together, nations can protect the rich variety of life that all humanity shares and depends upon.",
        summaryJa: "国々はどうやって絶滅危惧種を守るのかについて。世界中で、多くの種類の動物が永遠に姿を消す危機にある。ゾウ、トラ、ある種のクジラ、数えきれぬ無名の生き物が珍しくなり、数が年々減っている。ある種が完全に消えることを絶滅といい、二度と取り返せない。この損失を防ぐため、国々は協力せねばならないと学んだ。理由は単純だ。動物は国境を知らない。鳥はある国で巣を作り別の国で冬を越す。クジラは多くの国の海を泳ぐ。一国だけが動き隣国が何もしなければ、こうした動物を救う意味は薄い。だから国々は数通りに協力する。最も重要な一つは取引の規制だ。多くの動物は、皮や角などを売るために狩られて絶滅に瀕した。各国は、こうした脅かされた種の国際取引を禁じる・厳しく制限する協定に署名し、害する利益の多くを取り除いた。生息地—動物の暮らす森・川・海—を守る協力もする。保護区を作り、種の回復を助ける科学的知識を分かち合う。豊かな国が貧しい国の費用を助けることもある。容易でなく失う戦いもあるが、国際協力で回復した種もある。共有する命の多様性を守れる証だ。",
        quiz: [
          { q: "Why must countries cooperate to protect animals?", options: ["Animals do not know borders and move between countries", "Animals only live in one city", "Cooperation is required by no one"], answer: 0 },
          { q: "What is one important way countries protect endangered species?", options: ["Banning or strictly limiting international trade in them", "Hunting them faster", "Ignoring the problem"], answer: 0 },
          { q: "What is 'extinction'?", options: ["When a species disappears completely and can never return", "When an animal moves to a new country", "A kind of protected park"], answer: 0 }
        ]
      },
      {
        id: "d1110-4",
        title: "Japan's Amazing Vending Machines",
        level: "★★☆",
        genre: "日本",
        text: "In almost every country, you can find a vending machine or two, usually selling cold drinks or snacks in a train station or an office. But in Japan, the vending machine has reached a level found nowhere else. With millions of them spread across the country, they have become a familiar and surprisingly useful part of everyday life.\n\nThe most striking thing is simply how many there are. You can find vending machines not only in stations and shops, but on quiet streets, at the tops of mountains, and in tiny villages far from anywhere. They stand outside all night, brightly lit, always ready to serve.\n\nWhat they sell can also be surprising. Of course, there are cold and even hot drinks, available at the touch of a button. But across the country, machines also sell hot meals, ice cream, fresh eggs, flowers, umbrellas for a sudden shower, and many other useful things. In a country where they are trusted and rarely damaged, they can safely offer almost anything.\n\nWhy are they so popular in Japan? Part of the reason is that Japan is a very safe country, so machines left outside are seldom broken or robbed. They also save space and labour, serving customers day and night without any staff.\n\nFor visitors, Japan's vending machines are often a delightful surprise. For the people who live there, they are simply a normal, convenient helper, standing quietly on the corner, ready at any hour to provide a warm drink, a quick meal, or a forgotten umbrella.",
        summaryJa: "日本のすごい自動販売機について。ほぼどの国にも自販機は一つ二つあり、たいてい駅や職場で冷たい飲み物や軽食を売っている。だが日本では、自販機は他のどこにもない水準に達した。全国に何百万台も広がり、日常の身近で驚くほど便利な一部になった。最も際立つのは、その数の多さだ。駅や店だけでなく、静かな通りや山の頂、どこからも遠い小さな村にも見つかる。一晩中、明るく灯り、いつでも使える状態で外に立つ。売る物も驚きだ。もちろんボタン一つで冷たい、さらには温かい飲み物も買える。だが全国で、温かい食事やアイスクリーム、新鮮な卵、花、急な雨の傘など、多くの役立つ物も売る。信頼され、めったに壊されない国だからこそ、ほぼ何でも安全に提供できる。なぜ日本でこれほど人気なのか。一因は日本がとても安全な国で、外に置かれた機械がめったに壊されも盗まれもしないことだ。場所と人手を省き、店員なしで昼も夜も客に応じる。訪問者には楽しい驚きで、住む人には普通の便利な助っ人だ。",
        quiz: [
          { q: "What is most striking about vending machines in Japan?", options: ["How many there are, even in remote places", "That there are only a few", "That they sell nothing"], answer: 0 },
          { q: "What is one surprising thing Japanese machines may sell?", options: ["Hot meals, fresh eggs, flowers, or umbrellas", "Live animals", "Cars"], answer: 0 },
          { q: "Why are vending machines so successful in Japan?", options: ["Japan is very safe, so machines are seldom broken or robbed", "They are guarded by many staff", "They are only open one hour a day"], answer: 0 }
        ]
      },
      {
        id: "d1110-5",
        title: "Why Do We Yawn?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "It happens to everyone. You are tired, or bored, or you have just woken up, and suddenly your mouth opens wide, you take a long, deep breath, and you yawn. Even reading about yawning may make you want to do it. Yawning is one of the most common things humans do, yet, surprisingly, scientists are still not completely sure why we do it.\n\nFor a long time, people believed that yawning was caused by a lack of oxygen. The idea was that when we are tired, we breathe too shallowly, so a big yawn pulls in extra air. However, careful experiments have cast doubt on this simple explanation, and today many scientists think the main reason may be different.\n\nOne popular modern idea is that yawning helps to cool the brain. The brain works best within a narrow temperature range, and a large yawn pulls in cool air and increases blood flow, which may help lower the brain's temperature a little. This might explain why we often yawn when we are tired, as a tired brain can become slightly warmer.\n\nThere is also the strange fact of contagious yawning. When we see another person yawn, or even just think about it, we often yawn too. Scientists believe this may be linked to the way humans understand and copy each other's feelings.\n\nSo yawning remains a small, everyday mystery. It is something we all do many times a day, yet its full purpose is still not perfectly understood, a quiet reminder that even ordinary things can hide deep questions.",
        summaryJa: "なぜあくびをするのかについて。誰にでも起こる。疲れたり退屈したり、起きたばかりのとき、突然口が大きく開き、長く深く息を吸い、あくびをする。あくびについて読むだけでしたくなるかもしれない。あくびは人間の最もありふれた動作の一つだが、意外にも科学者はなぜするのかまだ完全には分かっていない。長い間、あくびは酸素不足で起こると信じられた。疲れると呼吸が浅くなり、大きなあくびで余分な空気を取り込むという考えだ。だが入念な実験がこの単純な説明に疑問を投げかけ、今日多くの科学者は主な理由は別かもしれないと考える。現代の有力な一説は、あくびが脳を冷やすのを助けるというものだ。脳は狭い温度範囲で最もよく働き、大きなあくびは冷たい空気を取り込み血流を増やし、脳の温度を少し下げるのを助けるかもしれない。疲れた脳はやや暖かくなりうるので、疲れるとよくあくびが出るのを説明できるかもしれない。「うつる」あくびという不思議もある。人のあくびを見たり考えたりするだけで自分も出る。人が互いの感情を理解し真似る仕方と結びつくと考えられる。あくびは日常の小さな謎だ。",
        quiz: [
          { q: "What did people long believe caused yawning?", options: ["A lack of oxygen", "Too much sunlight", "Eating too much"], answer: 0 },
          { q: "What is one popular modern idea about why we yawn?", options: ["It may help cool the brain", "It makes us taller", "It cleans the teeth"], answer: 0 },
          { q: "What is 'contagious' yawning?", options: ["We often yawn when we see or think about someone else yawning", "Yawning that makes you ill", "Yawning only done while asleep"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-11-09",
    passages: [
      {
        id: "d1109-1",
        title: "What Is a Trademark?",
        level: "★★☆",
        genre: "ビジネス",
        text: "Think of a famous company. Almost at once, a picture probably comes into your mind: a special symbol, a particular name written in a certain style, or a well-known logo. These signs are incredibly valuable to a business, because they instantly tell customers who made a product. To protect them, the law provides something called a trademark.\n\nA trademark is a sign that identifies the goods or services of one particular company and separates them from all others. It can be a brand name, a logo, a symbol, or even a special shape or sound. When a company registers a trademark, the law gives it the exclusive right to use that sign for its products.\n\nWhy does this matter so much? Imagine if any company could put a famous brand's name and logo on its own goods. Customers would be tricked into buying poor copies, thinking they were the real thing. The trademark prevents this. It protects the customer, who can trust that a product with a certain mark really comes from the company they expect.\n\nIt also protects the business. A company may spend many years, and a great deal of effort, building a good reputation. Its trademark captures all of that trust and quality in a single, recognisable sign. If others could freely copy it, that hard-earned reputation could be damaged or stolen.\n\nSo a trademark is more than just a logo. It is a promise and a protection, linking a product to the company that stands behind it, and helping honest businesses and careful customers trust one another.",
        summaryJa: "商標（トレードマーク）とは何かについて。有名な企業を思い浮かべてみよう。ほぼ瞬時に、ある像が頭に浮かぶはずだ。特別な記号、独特の書体で書かれた名前、よく知られたロゴなど。これらの印は企業にとって極めて価値が高い。誰がその製品を作ったかを客に即座に伝えるからだ。これを守るため、法律は商標というものを備えている。商標は、ある特定の企業の商品やサービスを示し、他のすべてと区別する印だ。ブランド名、ロゴ、記号、さらには特別な形や音でもよい。企業が商標を登録すると、法律はその印を自社製品に使う独占的権利を与える。なぜそれほど重要なのか。もしどの会社も有名ブランドの名前やロゴを自社の品に付けられたら、客は本物と思って粗悪な模倣品を買わされてしまう。商標はこれを防ぐ。ある印の付いた製品が、期待する企業から確かに来ると信頼できる。企業も守られる。長年と多大な努力で築いた評判を、商標が一つの識別可能な印に凝縮する。自由に真似されれば、その評判は損なわれかねない。商標は約束であり保護だ。",
        quiz: [
          { q: "What is a trademark?", options: ["A sign that identifies one company's goods and separates them from others", "A tax on products", "A kind of factory"], answer: 0 },
          { q: "How does a trademark protect customers?", options: ["They can trust that a marked product really comes from the expected company", "It makes all products cheaper", "It hides the maker's name"], answer: 0 },
          { q: "Why is a trademark valuable to a business?", options: ["It captures the trust and reputation the company has built, in one sign", "It lets the company copy rivals", "It replaces the need to make good products"], answer: 0 }
        ]
      },
      {
        id: "d1109-2",
        title: "How Does a Microphone Work?",
        level: "★★☆",
        genre: "テクノロジー",
        text: "Every time a singer performs on stage, or you make a call on your phone, a small device is quietly doing something remarkable. It is taking sound, which you cannot see or touch, and turning it into electricity that can be sent, recorded, or made louder. This device is the microphone, and understanding it begins with understanding what sound really is.\n\nSound is a kind of movement in the air. When you speak, your voice makes the air around you vibrate, pushing it back and forth in tiny, fast waves. These invisible waves spread out and travel to your listener's ears, and also to any microphone nearby.\n\nInside a microphone is a thin, flexible part called a diaphragm, rather like a tiny drum skin. When the sound waves in the air hit this diaphragm, they push and pull it, making it vibrate exactly in step with the sound. A loud sound moves it a lot; a quiet sound moves it a little.\n\nThe clever part is turning this movement into electricity. The vibrating diaphragm is connected to parts that respond to its motion. As the diaphragm moves back and forth, it causes a matching electric signal to flow, growing stronger and weaker in perfect time with the original sound.\n\nIn this way, the shape of the sound is copied into the shape of an electric current. That electric signal can then travel down a wire, be stored on a device, or be fed into a loudspeaker to be heard again. A microphone, in short, is a clever translator, turning the language of sound into the language of electricity.",
        summaryJa: "マイク（マイクロフォン）の仕組みについて。歌手が舞台で歌うたび、あるいは電話をかけるたび、小さな装置が静かに驚くべきことをしている。見えも触れもしない音を取り込み、送ったり録音したり大きくしたりできる電気に変えるのだ。これがマイクで、理解は音とは本当は何かを知ることから始まる。音は空気の動きの一種だ。話すと声が周りの空気を振動させ、小さく速い波として前後に押す。この見えない波が広がり、聞き手の耳や近くのマイクへ届く。マイクの中には振動板という薄くしなやかな部分があり、小さな太鼓の皮のようだ。空気中の音波がこの振動板に当たると、押したり引いたりして、音とぴったり合わせて振動させる。大きな音は大きく、小さな音は小さく動かす。巧妙なのはこの動きを電気に変えることだ。振動板はその動きに反応する部品につながっている。前後に動くと、元の音と完全に合った電気信号が流れ、強弱を繰り返す。こうして音の形が電流の形に写される。その信号は電線を通り、機器に保存され、スピーカーで再び聞ける。マイクは音の言葉を電気の言葉に訳す賢い翻訳者だ。",
        quiz: [
          { q: "What is sound, according to the passage?", options: ["A kind of movement, or vibration, in the air", "A type of light", "A chemical in the air"], answer: 0 },
          { q: "What does the diaphragm in a microphone do?", options: ["It vibrates in step with the sound waves that hit it", "It glows when sound arrives", "It stays perfectly still"], answer: 0 },
          { q: "What does a microphone basically do?", options: ["It turns the shape of sound into a matching electric signal", "It makes sound disappear", "It turns electricity into light"], answer: 0 }
        ]
      },
      {
        id: "d1109-3",
        title: "How Do Countries Agree on Common Standards?",
        level: "★★★",
        genre: "世界情勢",
        text: "Imagine travelling to another country and finding that your phone charger does not fit the wall sockets, that the screws in the shops do not match your tools, and that even the paper is a strange size. Daily life would become difficult and wasteful. To prevent exactly this kind of confusion, countries quietly work together to agree on common standards.\n\nA standard is simply an agreed way of doing or measuring something, so that products and systems from different places can work together. Standards cover an enormous range of things: the size of a shipping container, the strength of a bicycle helmet, the meaning of symbols on clothing labels, and the rules that let computers around the world talk to each other.\n\nMuch of this work is done by international organisations where experts from many countries meet. They discuss, test, and finally agree on a shared rule. The agreement is usually voluntary, yet countries and companies choose to follow it, because doing so makes trade and daily life far smoother.\n\nThe benefits are huge, even if we rarely notice them. Because of shared standards, a container packed in one country fits the ships, trains, and trucks of every other. A safety rule agreed in one place can protect people everywhere. And new technologies can spread quickly across borders.\n\nStandards are a quiet form of international cooperation. They rarely make the news, and most people never think about them. Yet every day, this patient agreement between nations allows the modern world to fit together, piece by piece, almost without us noticing.",
        summaryJa: "国々はどうやって共通の標準（規格）に合意するのかについて。別の国へ旅して、スマホの充電器が壁のコンセントに合わず、店のねじが自分の工具に合わず、紙さえ変な大きさだったと想像してみよう。日常は難しく無駄の多いものになる。まさにこうした混乱を防ぐため、国々は静かに協力して共通の標準に合意する。標準とは、物事を行う・測る合意された方法に過ぎず、異なる場所の製品や仕組みが一緒に機能できるようにする。標準は実に幅広い。輸送用コンテナの寸法、自転車用ヘルメットの強度、衣類ラベルの記号の意味、世界中のコンピューターが通信できる規則などだ。この仕事の多くは、多国の専門家が集まる国際機関で行われる。議論し、試験し、最終的に共有の規則に合意する。合意はたいてい任意だが、国や企業は従うことを選ぶ。そうすれば貿易も日常もずっと滑らかになるからだ。恩恵は巨大だが、めったに気づかれない。共有の標準のおかげで、一国で詰めたコンテナがどの国の船・列車・トラックにも合う。一か所で合意された安全規則が各地の人を守り、新技術が国境を越えて素早く広まる。静かな国際協力の形だ。",
        quiz: [
          { q: "What is a 'standard'?", options: ["An agreed way of doing or measuring something, so systems can work together", "A kind of tax", "A national flag"], answer: 0 },
          { q: "How are international standards usually agreed?", options: ["Experts from many countries meet, test, and agree on a shared rule", "One country forces all others to obey", "They happen by accident"], answer: 0 },
          { q: "What is one benefit of shared standards?", options: ["A container packed in one country fits the ships and trucks of others", "Travel becomes impossible", "Products stop working together"], answer: 0 }
        ]
      },
      {
        id: "d1109-4",
        title: "Kaki: The Persimmon, a Taste of Japanese Autumn",
        level: "★★☆",
        genre: "日本",
        text: "As autumn deepens in Japan and the leaves turn red and gold, another splash of colour appears in the countryside. In gardens and on hillsides, the bare branches of certain trees become covered with round, bright orange fruit. This is the kaki, or persimmon, one of the most beloved fruits of the Japanese autumn.\n\nThe persimmon has been grown in Japan for many centuries, and it holds a special place in the season. Its warm orange colour, glowing against a blue autumn sky, is a classic image of the time of year. A tree heavy with fruit after its leaves have fallen is a common and much-loved sight.\n\nThere are two main kinds of kaki. One is sweet and can be eaten crisp and fresh, straight from the tree. The other is naturally bitter when raw, and cannot be enjoyed that way. For this second kind, people use a clever traditional method. They peel the fruit and hang it up to dry in the autumn air for several weeks. Slowly, the bitterness disappears, and the fruit becomes soft, chewy, and intensely sweet. This dried persimmon is called hoshigaki, and it is treasured as a natural sweet.\n\nNothing is wasted. Even the leaves and the drying fruit become part of the beauty of the season.\n\nFor many Japanese people, the sight and taste of kaki bring back memories of autumn, of family gardens, and of grandparents carefully preparing hoshigaki. It is a simple fruit, yet it carries the warm, gentle feeling of the Japanese autumn.",
        summaryJa: "日本の秋の味、柿について。日本で秋が深まり木の葉が赤や金に色づくころ、田園にもう一つの彩りが現れる。庭や丘の斜面で、ある木の裸の枝が丸く鮮やかなオレンジ色の実で覆われる。これが柿、日本の秋で最も愛される果物の一つだ。柿は何世紀も日本で育てられ、季節の中で特別な位置を占める。青い秋空に映える温かいオレンジ色は、この時期の古典的な情景だ。葉が落ちた後に実をたわわに付けた木は、よく見られる愛される光景だ。柿には主に二種類ある。一つは甘く、木からもいでそのまま新鮮に食べられる。もう一つは生だと自然に渋く、そのままでは楽しめない。この渋い方には、巧妙な伝統の方法を使う。皮をむいて秋の空気の中に数週間つるして干すのだ。ゆっくり渋みが消え、柔らかく歯ごたえのある、強く甘い実になる。この干した柿を干し柿といい、自然の甘味として大切にされる。多くの日本人にとって、柿の姿と味は秋や家族の庭、祖父母の思い出を呼び起こす。簡素な果物だが、日本の秋の温かく穏やかな気持ちを運ぶ。",
        quiz: [
          { q: "When do persimmons become a common sight in Japan?", options: ["In autumn, as bright orange fruit on the trees", "In the middle of summer", "Only in spring"], answer: 0 },
          { q: "What do people do with the naturally bitter kind of kaki?", options: ["Peel it and hang it to dry, which removes the bitterness", "Throw it away at once", "Eat it raw with salt"], answer: 0 },
          { q: "What is 'hoshigaki'?", options: ["Dried persimmon, soft and intensely sweet", "A kind of autumn leaf", "A persimmon drink"], answer: 0 }
        ]
      },
      {
        id: "d1109-5",
        title: "Why Do We Hiccup?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "They arrive without warning, often at the worst moment. You are eating, laughing, or talking, when suddenly your body makes a sharp, funny sound: hic! A moment later, it happens again, and again, with a rhythm you cannot control. These are hiccups, one of the strangest and most harmless things the human body does. But what actually causes them?\n\nThe answer involves an important muscle you rarely think about, called the diaphragm. It sits under your lungs, and it is the main muscle you use for breathing. Normally, it moves smoothly up and down, pulling air gently into your lungs and letting it out again.\n\nA hiccup begins when this diaphragm muscle suddenly twitches, or jumps, instead of moving smoothly. This sudden jump makes you pull in a quick, sharp breath of air without meaning to. But at almost exactly the same instant, a small flap at the top of your throat snaps shut. The rushing air hits this closed flap, and that is what makes the sharp hic sound we all know.\n\nSo a single hiccup is really two things happening together: a sudden jump of the breathing muscle, and the quick closing of the throat.\n\nWhat causes the diaphragm to twitch in the first place is not always clear. Eating too fast, drinking fizzy drinks, or sudden excitement can all set it off. Usually, hiccups are completely harmless and stop on their own within a few minutes. They remain one of the body's small, funny mysteries, a little reminder of the complex machinery quietly working inside us all.",
        summaryJa: "なぜしゃっくりが出るのかについて。しゃっくりは前触れなく、しばしば最悪のときに訪れる。食事や笑い、会話の最中、突然体が「ヒック！」という鋭い妙な音を立てる。少しするとまた、何度も、自分では止められないリズムで繰り返す。これがしゃっくりで、人体のする最も奇妙で無害なことの一つだ。だが実際、何が原因なのか。答えには、めったに意識しない大切な筋肉、横隔膜が関わる。肺の下にあり、呼吸に使う主な筋肉だ。普段は滑らかに上下し、空気を優しく肺に取り込み、また出す。しゃっくりは、この横隔膜が滑らかに動く代わりに突然ぴくりと跳ねると始まる。この急な跳ねで、意図せず素早く鋭く息を吸い込む。だがほぼ同じ瞬間、喉の上部にある小さな弁がパッと閉じる。勢いよく入る空気がこの閉じた弁に当たり、あの「ヒック」という音になる。つまり一回のしゃっくりは、呼吸筋の急な跳ねと喉の素早い閉鎖という二つが同時に起こることだ。横隔膜がなぜ跳ねるかは必ずしも明らかでない。早食いや炭酸飲料、突然の興奮が引き金になりうる。たいてい無害で数分で自然に止まる。",
        quiz: [
          { q: "Which muscle is involved in hiccups?", options: ["The diaphragm, the main muscle used for breathing", "A muscle in the foot", "A muscle in the hand"], answer: 0 },
          { q: "What two things happen together in a single hiccup?", options: ["A sudden jump of the breathing muscle and the quick closing of the throat", "A sneeze and a cough", "Blinking and swallowing"], answer: 0 },
          { q: "What can set off hiccups?", options: ["Eating too fast, fizzy drinks, or sudden excitement", "Sleeping deeply", "Sitting very still"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-11-08",
    passages: [
      {
        id: "d1108-1",
        title: "What Is Interest?",
        level: "★★☆",
        genre: "ビジネス",
        text: "Suppose you lend a friend some money, and a year later they pay you back exactly the same amount. You have gained nothing, even though your friend used your money for a whole year. In the world of finance, money almost never works this way. When money is borrowed or saved, a little extra is usually added over time. This extra money is called interest.\n\nInterest can be understood simply as the cost of using someone else's money, or the reward for lending yours. It is usually described as a percentage of the amount, charged each year. For example, if you borrow 100 and the interest rate is five percent, after one year you owe 105.\n\nInterest works in two directions, and this is important to understand. When you put money into a savings account at a bank, the bank is really borrowing your money. In return, it pays you interest, so your savings slowly grow. But when you borrow money, for a car or a house, you must pay interest to the lender, so you pay back more than you borrowed.\n\nThere is also a powerful effect called compound interest. This happens when you earn interest not only on your original money, but also on the interest you have already earned. Over many years, this can make savings grow surprisingly large.\n\nUnderstanding interest is one of the most useful money skills a person can have. It quietly shapes saving, borrowing, and the price of almost everything bought over time, affecting nearly every financial choice we make.",
        summaryJa: "利子・金利とは何かについて。友人にお金を貸し、一年後にちょうど同じ額を返してもらったとしよう。友人は一年間あなたのお金を使ったのに、あなたは何も得ていない。金融の世界では、お金はほぼこうは働かない。お金が借りられたり預けられたりすると、時とともに普通は少し上乗せされる。この上乗せ分を利子（金利）という。利子は、他人のお金を使う費用、または自分のお金を貸す報酬と単純に理解できる。たいてい金額に対する割合として年ごとに示される。例えば100を借りて金利が5%なら、一年後には105を返すことになる。利子は二方向に働く点が重要だ。銀行の預金口座にお金を入れると、実は銀行があなたのお金を借りている。見返りに利子を払い、貯金が少しずつ増える。だが車や家のためにお金を借りると、貸し手に利子を払い、借りた以上を返す。複利という強力な効果もある。元のお金だけでなく、既に得た利子にも利子がつくことだ。長年で貯金は驚くほど大きく育つ。利子の理解は最も役立つお金の技能の一つだ。",
        quiz: [
          { q: "What is interest?", options: ["The cost of using someone else's money, or the reward for lending yours", "A kind of tax on food", "A type of bank building"], answer: 0 },
          { q: "What happens when you put money in a savings account?", options: ["The bank borrows it and pays you interest, so your savings grow", "You must pay the bank extra each year", "Your money disappears"], answer: 0 },
          { q: "What is compound interest?", options: ["Earning interest on your original money and on the interest already earned", "Interest that never changes", "A fee for closing an account"], answer: 0 }
        ]
      },
      {
        id: "d1108-2",
        title: "How Does a Camera Take a Photo?",
        level: "★★☆",
        genre: "テクノロジー",
        text: "A photograph can freeze a single moment forever: a smile, a sunset, a crowded street. We take thousands of pictures with our phones without a second thought. But behind every photo lies a clever process, one that cameras share with our own eyes. At its heart, a camera is simply a device for catching light.\n\nLight is the key to everything. When you look at an object, light bounces off it and travels in all directions. A camera's job is to collect some of that light and record the pattern it makes. To do this well, every camera has a lens.\n\nThe lens is a specially shaped piece of glass or plastic that bends the incoming light. As the scattered light passes through the lens, it is bent so that the rays come together neatly and form a sharp, clear image inside the camera. This is called focusing, and it is the same thing the lens in your eye does.\n\nIn the past, this focused image fell onto a piece of film coated with chemicals that reacted to light. In modern digital cameras, it falls instead onto an electronic sensor. This sensor is covered with millions of tiny light-detectors. Each one measures how much light and what colour hits it, and turns that into numbers.\n\nThe camera then combines all these millions of measurements into a single picture, made of tiny coloured dots. This is your photograph, stored as data.\n\nSo every photo is really a careful recording of light, captured through a lens and frozen in an instant, ready to be looked at again and again.",
        summaryJa: "カメラはどうやって写真を撮るのかについて。写真は一瞬を永遠に凍らせる。笑顔、夕日、混んだ通り。私たちは何気なくスマホで何千枚も撮る。だがどの写真の裏にも巧妙な過程があり、それは私たち自身の目と共通する。カメラは要するに光を捕らえる装置だ。光がすべての鍵だ。物を見ると、光が物に当たって跳ね返り四方へ進む。カメラの仕事は、その光の一部を集め、作る模様を記録することだ。そのため、どのカメラにもレンズがある。レンズは特別な形のガラスかプラスチックで、入ってくる光を曲げる。散らばった光がレンズを通ると曲げられ、光線がきれいに集まってカメラ内に鮮明な像を結ぶ。これを焦点合わせといい、目のレンズがするのと同じだ。昔はこの像が光に反応する薬品を塗ったフィルムに落ちた。現代のデジタルカメラでは電子センサーに落ちる。センサーは何百万もの小さな光検出器で覆われ、各々が当たる光の量と色を測り数値に変える。カメラはこの数百万の測定を一枚の絵にまとめる。写真は光の記録だ。",
        quiz: [
          { q: "What does a camera basically do?", options: ["It catches light and records the pattern it makes", "It creates light from nothing", "It measures sound"], answer: 0 },
          { q: "What does the lens do?", options: ["It bends the light so the rays form a sharp, clear image", "It colors the photo by hand", "It stores the picture"], answer: 0 },
          { q: "What does a digital camera's sensor do?", options: ["Millions of tiny detectors measure the light and color and turn it into numbers", "It paints the image with ink", "It plays the sound of the scene"], answer: 0 }
        ]
      },
      {
        id: "d1108-3",
        title: "What Does the World Health Organization Do?",
        level: "★★★",
        genre: "世界情勢",
        text: "Diseases do not respect borders. A sickness that begins in one country can, in our connected world, spread to others within days. No single nation can protect itself completely on its own. For this reason, the countries of the world created a special organisation to work together on health: the World Health Organization, often shortened to WHO.\n\nThe WHO is part of the United Nations, and almost every country in the world is a member. Its basic goal is simple but enormous: to help all people everywhere reach the best possible health. To do this, it works in many different ways.\n\nOne of its most important jobs is watching for dangerous diseases. The WHO acts like a global lookout, collecting information from around the world. If a serious illness begins to spread, it can warn other countries quickly and help coordinate a response. It also leads huge campaigns to fight specific diseases, such as efforts to vaccinate children everywhere.\n\nThe WHO does much quieter work too. It gathers health information, sets common standards, and gives scientific advice that countries can trust. It helps poorer nations build hospitals, train nurses and doctors, and provide clean water and medicine.\n\nLike any large organisation, the WHO is not perfect, and it depends on the cooperation and funding of its members. But its basic idea is a hopeful one. It reflects a simple truth that the world slowly learned: that protecting the health of people in distant lands also helps protect the health of everyone, including ourselves.",
        summaryJa: "世界保健機関（WHO）は何をするのかについて。病気は国境を尊重しない。一国で始まった病が、つながった世界では数日で他国へ広がりうる。一国だけで完全に身を守れる国はない。だから世界の国々は、健康のために協力する特別な組織を作った。世界保健機関、しばしばWHOと略される。WHOは国連の一部で、ほぼすべての国が加盟する。基本目標は単純だが壮大だ。あらゆる地のすべての人が可能な限り最良の健康に達するのを助けることだ。そのため多様な方法で働く。最も重要な仕事の一つは危険な病気への警戒だ。WHOは世界の見張りのように情報を集める。深刻な病が広がり始めれば他国に素早く警告し、対応の調整を助ける。子どもへの予防接種など、特定の病気と闘う大規模な取り組みも率いる。もっと地味な仕事もする。健康情報を集め、共通の基準を定め、信頼できる科学的助言を与える。貧しい国の病院建設や看護師・医師の育成、清潔な水と薬の提供も助ける。完璧ではなく加盟国の協力と資金に頼るが、希望ある考えだ。",
        quiz: [
          { q: "Why did countries create the WHO?", options: ["Because diseases cross borders and no nation can protect itself alone", "To control world trade", "To run a single hospital"], answer: 0 },
          { q: "What is one of the WHO's most important jobs?", options: ["Watching for dangerous diseases and warning other countries", "Selling medicine for profit", "Building airports"], answer: 0 },
          { q: "What quieter work does the WHO do?", options: ["Setting health standards and helping poorer nations train doctors", "Making films", "Designing cars"], answer: 0 }
        ]
      },
      {
        id: "d1108-4",
        title: "Onsen: Japan's Hot Spring Culture",
        level: "★★☆",
        genre: "日本",
        text: "Japan sits on a chain of volcanoes, and deep underground, the earth heats vast amounts of water. In many places, this naturally hot water rises to the surface, creating a hot spring. In Japanese, a hot spring is called an onsen, and bathing in one is one of the country's most loved and relaxing traditions.\n\nAn onsen is far more than a simple hot bath. The water is rich in natural minerals, and for centuries people have believed it to be good for health, easing tired muscles and warming the body. Surrounded by beautiful mountains or quiet forests, soaking in an onsen is a deeply peaceful experience, especially in winter, when snow may fall gently around the steaming water.\n\nThere are important customs to follow. Before entering the shared bath, bathers must wash their bodies carefully and completely, so the water stays clean for everyone. People then enter the bath with no clothing at all, which is simply normal and natural at an onsen. The bath is a place for quiet rest, not for swimming or noise.\n\nOnsen come in many forms. Some are indoors, while others, called rotenburo, are outdoors, offering lovely views of nature. Many are part of traditional inns where guests stay overnight.\n\nFor many Japanese people, visiting an onsen is a cherished way to escape the stress of busy life. It combines the gifts of nature, a long cultural tradition, and simple physical comfort into one quiet, steaming pool of warm water.",
        summaryJa: "日本の温泉文化について。日本は火山の連なりの上にあり、地下深くで大地が大量の水を温める。多くの場所でこの自然に熱い水が地表へ湧き出し、温泉ができる。日本語で温泉といい、そこに入ることは国で最も愛される癒やしの伝統の一つだ。温泉は単なる熱い風呂をはるかに超える。水は天然のミネラルに富み、何世紀も健康に良いと信じられ、疲れた筋肉をほぐし体を温める。美しい山や静かな森に囲まれて湯につかるのは深く穏やかな体験で、特に冬、湯気の立つ湯の周りに雪がそっと降る時はなおさらだ。守るべき大切な作法がある。共同の湯に入る前に体を丁寧に完全に洗い、皆のために湯を清潔に保つ。そして一切衣服を着けずに入るが、温泉ではごく普通で自然なことだ。湯は静かに休む場で、泳いだり騒いだりする場ではない。温泉には多くの形がある。屋内のものもあれば、露天風呂という屋外のものもあり、自然の眺めを楽しめる。宿泊する伝統的な旅館の一部も多い。忙しい生活の緊張から逃れる大切な方法だ。",
        quiz: [
          { q: "Where does the hot water of an onsen come from?", options: ["The earth heats underground water, which rises to the surface", "It is boiled in large kettles", "It comes from the sea"], answer: 0 },
          { q: "What must bathers do before entering the shared bath?", options: ["Wash their bodies carefully so the water stays clean", "Jump straight in with their clothes on", "Add soap to the bath"], answer: 0 },
          { q: "What is a 'rotenburo'?", options: ["An outdoor onsen with views of nature", "A kind of indoor swimming pool", "A type of towel"], answer: 0 }
        ]
      },
      {
        id: "d1108-5",
        title: "Why Do We Shiver When We Are Cold?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "On a cold winter morning, waiting outside for a bus, you may suddenly feel your body begin to tremble. Your teeth chatter, and your arms and legs shake, all by themselves. You did not choose to do this. This is shivering, and although it feels unpleasant, it is actually your body cleverly trying to protect you.\n\nThe human body works best at a fairly steady warm temperature, around thirty-seven degrees. If the body becomes too cold, it cannot work properly, and this can become dangerous. So the body is always carefully watching its own temperature, and it will act quickly to stay warm.\n\nWhen sensors in your skin tell the brain that it is getting cold, the brain sends out a clever command to your muscles. It orders them to tighten and relax very fast, again and again, many times each second. This rapid shaking of the muscles is exactly what we feel as shivering.\n\nBut why does this make heat? The answer is that moving muscles always produce heat as they work. It is the same reason you feel hot after running or exercising. By making the muscles move quickly without you even trying, shivering turns energy into warmth, helping to raise the body's temperature back toward a safe level.\n\nSo shivering is not a weakness or a fault. It is an automatic, built-in heater, switched on by the brain without you having to think about it. It is one of the many quiet, clever ways your body works constantly to keep you alive and well.",
        summaryJa: "寒いとなぜ身震いするのかについて。寒い冬の朝、バスを外で待っていると、突然体が震え出すのを感じるかもしれない。歯がカチカチ鳴り、腕や脚がひとりでに震える。自分で選んだわけではない。これが身震い（シバリング）で、不快に感じるが、実は体が巧妙にあなたを守ろうとしているのだ。人体はおよそ三十七度のかなり一定した温かい体温で最もよく働く。体が冷えすぎるとうまく働けず、危険になりうる。だから体は常に自分の体温を注意深く見守り、温かさを保とうと素早く動く。皮膚のセンサーが寒くなってきたと脳に伝えると、脳は筋肉に巧妙な指令を送る。毎秒何度も、速く緊張と弛緩を繰り返せと命じる。この筋肉の素早い震えこそ、私たちが身震いとして感じるものだ。ではなぜ熱が出るのか。動く筋肉は働く時いつも熱を生むからだ。走ったり運動したりすると暑くなるのと同じ理由だ。身震いは筋肉を素早く動かしてエネルギーを熱に変え、体温を安全な水準へ戻す。弱さや欠陥でなく、脳が入れる自動の内蔵ヒーターなのだ。",
        quiz: [
          { q: "Why is shivering actually helpful?", options: ["It is the body's way of trying to make heat and stay warm", "It cools the body down", "It has no purpose"], answer: 0 },
          { q: "What does the brain order the muscles to do?", options: ["Tighten and relax very fast, again and again", "Stop moving completely", "Grow larger"], answer: 0 },
          { q: "Why does moving the muscles make heat?", options: ["Moving muscles always produce heat as they work", "Muscles contain tiny fires", "Heat comes from the skin's color"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-11-07",
    passages: [
      {
        id: "d1107-1",
        title: "What Is a Patent?",
        level: "★★☆",
        genre: "ビジネス",
        text: "Imagine you spend years, and a great deal of money, inventing a clever new machine. The moment you start selling it, a larger company copies your idea exactly, makes it more cheaply, and takes all the customers. This would feel deeply unfair, and it might stop people from ever bothering to invent anything. To prevent this problem, societies created a special kind of right called a patent.\n\nA patent is a legal protection given to the inventor of something new and useful. For a limited number of years, usually around twenty, it gives the inventor the exclusive right to make and sell their invention. During this time, no one else may copy it without the inventor's permission. This gives inventors a fair chance to earn money from their hard work and clever ideas.\n\nBut a patent is not only about protecting one person. In exchange for this protection, the inventor must publicly explain exactly how the invention works. This information is published for everyone to read. So while others cannot copy the invention yet, they can learn from it, and they can build new ideas upon it.\n\nIn this way, a patent tries to balance two needs. It rewards inventors, encouraging them to keep creating. At the same time, it slowly shares useful knowledge with the whole world.\n\nWhen the patent finally ends, anyone may use the invention freely. Many everyday products we now take for granted were once protected by patents. The system is an attempt to make sure that good ideas are both rewarded and, in time, shared with all.",
        summaryJa: "特許とは何かについて。巧妙な新しい機械の発明に何年も多額の金も費やしたとしよう。売り始めた途端、大企業がその考えをそっくり真似て安く作り、客を全部奪う。これはひどく不公平に感じられ、人々が発明しようとする気をなくさせかねない。この問題を防ぐため、社会は特許という特別な権利を作った。特許は、新しく有用な物の発明者に与えられる法的保護だ。限られた年数、たいてい二十年ほど、発明者に自分の発明を作り売る独占的権利を与える。その間、他の誰も発明者の許可なく真似できない。これにより発明者は努力と知恵から正当に稼ぐ機会を得る。だが特許は一人を守るだけではない。保護と引き換えに、発明者は発明の仕組みを正確に公に説明せねばならない。この情報は誰もが読めるよう公開される。だから他者はまだ真似できないが、そこから学び、新しい考えを積み重ねられる。こうして特許は、発明者に報い創作を促すことと、有用な知識を世界と分かち合うことの均衡を図る。特許が終わると誰でも自由に使える。",
        quiz: [
          { q: "What does a patent give an inventor?", options: ["The exclusive right to make and sell their invention for a limited time", "The right to copy others' inventions", "Free money forever"], answer: 0 },
          { q: "What must an inventor do in exchange for a patent?", options: ["Publicly explain exactly how the invention works", "Keep the invention totally secret", "Give the invention away at once"], answer: 0 },
          { q: "What happens when a patent finally ends?", options: ["Anyone may use the invention freely", "The invention is destroyed", "The inventor is punished"], answer: 0 }
        ]
      },
      {
        id: "d1107-2",
        title: "How Does an Electric Kettle Work?",
        level: "★★☆",
        genre: "テクノロジー",
        text: "An electric kettle is one of the most useful machines in a modern kitchen. You fill it with water, press a switch, and in a minute or two the water is boiling. Then, just as you need it, the kettle clicks and switches itself off. It seems simple, but inside this everyday object are two clever pieces of engineering working together.\n\nThe first is the heating element. At the bottom of the kettle is a metal coil or plate. When you press the switch, electricity flows through this element. The element strongly resists the flow of electricity, and this resistance makes it become very hot, very quickly. The heat passes straight into the water touching it, and soon the whole kettle of water is boiling.\n\nThe second clever part answers an important question: how does the kettle know when to stop? If it kept heating, it would boil dry and could start a fire. The answer is a special part called a thermostat. Inside it is usually a piece of metal made of two different layers joined together. As the water boils, hot steam rises and warms this metal. Because the two layers expand at different rates when heated, the metal bends. This tiny bending movement is just enough to flip the switch and cut off the electricity.\n\nSo the kettle boils the water quickly and then protects itself automatically. This simple partnership of a heating element and a heat-sensitive switch is a small masterpiece of design, quietly making a safe cup of tea possible millions of times a day.",
        summaryJa: "電気ケトルの仕組みについて。電気ケトルは現代の台所で最も便利な機械の一つだ。水を入れ、スイッチを押すと、一、二分で湯が沸く。そして必要なちょうどその時、ケトルはカチッと鳴って自分で電源を切る。単純に見えるが、この日用品の中では二つの巧妙な工学が協力している。一つ目は発熱体だ。ケトルの底に金属のコイルか板がある。スイッチを押すと電気がこの発熱体を流れる。発熱体は電気の流れに強く抵抗し、この抵抗で素早く非常に熱くなる。熱は接する水へ直接伝わり、やがてケトル中の水が沸く。二つ目の巧妙な部分は重要な問いに答える。いつ止めるべきとケトルはどう分かるのか。加熱し続ければ空だきして火事になりかねない。答えはサーモスタットという特別な部品だ。中にはたいてい二枚の異なる金属を貼り合わせた板がある。湯が沸くと熱い蒸気が上り、この金属を温める。二層は熱で膨らむ割合が違うため金属が曲がる。このわずかな曲がりがスイッチを切るのにちょうど足りる。素早く沸かし自動で身を守る見事な設計だ。",
        quiz: [
          { q: "What makes the heating element become hot?", options: ["It resists the flow of electricity, which produces heat", "It is filled with hot air", "It uses a tiny fire"], answer: 0 },
          { q: "Why does the kettle need to switch off automatically?", options: ["Otherwise it would boil dry and could start a fire", "To save the water's color", "To make the water colder"], answer: 0 },
          { q: "How does the thermostat sense that the water is boiling?", options: ["Steam warms a two-layer metal that bends and flips the switch", "It hears the bubbles", "It counts the minutes only"], answer: 0 }
        ]
      },
      {
        id: "d1107-3",
        title: "How Do Nations Cooperate in Space?",
        level: "★★★",
        genre: "世界情勢",
        text: "Space exploration is one of the most difficult and expensive things that humans attempt. Building rockets, sending people safely beyond the Earth, and keeping them alive in the emptiness of space costs enormous amounts of money and requires brilliant minds. For this reason, space has become a surprising place where nations, even rival ones, often work together.\n\nThe most famous example is a large laboratory that orbits high above the Earth, built and run by several countries together. Astronauts from different nations live and work there side by side for months. The equipment, the costs, and the scientific discoveries are all shared. In the silence of space, people who might disagree on Earth cooperate closely to survive and to learn.\n\nNations also agree on important rules for space. Long ago, countries signed treaties promising that space would be used peacefully, that no nation could claim to own the Moon or a planet, and that space should benefit all of humanity. These agreements help keep space calm and open to everyone.\n\nCooperation makes good sense. By sharing the huge costs, countries can achieve together what none could easily afford alone. By sharing knowledge, they help science move faster for the benefit of all. And by working side by side, scientists and astronauts build trust and friendship across borders.\n\nSpace is vast, difficult, and dangerous. Perhaps that is exactly why it so often brings people together. Looking down at the Earth from far above, with no borders visible, many astronauts have said the same thing: from space, we are simply one world.",
        summaryJa: "国々は宇宙でどう協力するのかについて。宇宙探査は人類が挑む最も難しく費用のかかることの一つだ。ロケットを作り、人を安全に地球の外へ送り、宇宙の虚空で生かし続けるには膨大な金と優れた頭脳が要る。だからこそ宇宙は、競い合う国同士さえしばしば協力する意外な場になった。最も有名な例は、地球のはるか上を回る大きな実験室で、数か国が共同で建設・運営する。異なる国の宇宙飛行士が何か月も肩を並べて暮らし働く。設備も費用も科学的発見もすべて分かち合う。宇宙の静寂の中、地上では対立しうる人々が生き延び学ぶため密に協力する。宇宙の重要な規則にも各国は合意する。昔、各国は、宇宙は平和に使う、どの国も月や惑星を所有できない、宇宙は全人類の利益になるべきだと約束する条約に署名した。これらは宇宙を穏やかで開かれた場に保つ。協力は理にかなう。巨額の費用を分け合い、一国では難しいことを共に達成し、知識を分かち科学を速める。国境を越えた信頼と友情も築く。宇宙から見れば私たちは一つの世界だ、と多くの飛行士が語る。",
        quiz: [
          { q: "Why do nations often cooperate in space?", options: ["It is so difficult and expensive that sharing costs and knowledge helps", "Because space is cheap and easy", "Because one country owns space"], answer: 0 },
          { q: "What is the famous example of space cooperation described?", options: ["A large laboratory orbiting Earth, built and run by several countries", "A single private rocket", "A museum on the Moon"], answer: 0 },
          { q: "What did countries promise in their space treaties?", options: ["Space would be used peacefully and no nation could own the Moon", "Each country could claim its own planet", "Space would be kept secret"], answer: 0 }
        ]
      },
      {
        id: "d1107-4",
        title: "Nengajo: Japan's New Year Greeting Cards",
        level: "★★☆",
        genre: "日本",
        text: "As the end of the year approaches in Japan, people become busy with a cherished tradition: writing nengajo, or New Year greeting cards. These simple postcards are sent to friends, family, colleagues, and anyone a person wishes to thank. For a short time, the whole country takes part in one enormous exchange of good wishes.\n\nA nengajo carries a short, warm message. People thank others for their kindness in the past year and wish them health and happiness in the year to come. Many cards are decorated with the animal of the coming year, taken from the twelve-year cycle of the Japanese zodiac, such as the rat, the ox, or the tiger.\n\nWhat makes nengajo truly special is their timing. People write their cards in December and post them in time for a remarkable service: the post office carefully holds all the cards and delivers them together on the morning of January the first. On New Year's Day, families wake to find a pile of greetings from everyone who was thinking of them.\n\nIn recent years, as mobile phones and messaging apps have spread, fewer young people send paper nengajo. Yet the custom remains deeply loved. There is something special about holding a real card, chosen and written by hand, that a quick digital message cannot quite replace.\n\nThe nengajo is a gentle, thoughtful tradition. Once a year, it gives millions of people a quiet reason to stop, remember the people who matter to them, and send a few kind words across the distance.",
        summaryJa: "日本の年賀状について。日本で年の瀬が近づくと、人々は大切な伝統で忙しくなる。年賀状を書くことだ。この簡素なはがきは友人や家族、同僚、感謝したい相手に送られる。短い間、国全体が一つの巨大な祝いの言葉のやり取りに加わる。年賀状には短く温かい言葉が記される。過去一年の親切に礼を述べ、来る年の健康と幸せを願う。多くは十二年周期の干支から取った翌年の動物（子・丑・寅など）で飾られる。年賀状を本当に特別にするのはその時期だ。人々は十二月に書いて、見事な仕組みに間に合うよう投函する。郵便局がすべての年賀状を丁寧に預かり、一月一日の朝にまとめて配達するのだ。元日、家族は自分を思ってくれた皆からの挨拶の山を見つけて目覚める。近年、携帯電話やメッセージアプリの普及で紙の年賀状を送る若者は減った。だが習慣は深く愛されている。手で選び書かれた本物のカードには、素早いデジタルの便りでは置き換えられない特別な何かがある。大切な人を思い出す静かな理由を与える。",
        quiz: [
          { q: "What is a nengajo?", options: ["A New Year greeting card sent to friends, family, and others", "A kind of New Year food", "A type of money gift"], answer: 0 },
          { q: "What is special about when nengajo are delivered?", options: ["The post office holds them and delivers them together on January 1st", "They arrive one year late", "They are never delivered"], answer: 0 },
          { q: "Why do many people still love sending paper nengajo?", options: ["A real, handwritten card feels special in a way a digital message cannot", "They are cheaper than phones", "The law requires it"], answer: 0 }
        ]
      },
      {
        id: "d1107-5",
        title: "How Do Plants Drink Water?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "Every living thing needs water, and plants are no exception. A large tree may use hundreds of litres of water on a hot day. Yet a plant has no mouth and no heart to pump liquid around its body. So here is a surprising puzzle: how does a plant pull water all the way up from the soil, sometimes to the top of a tall tree, without any pump at all?\n\nThe journey begins underground. A plant's roots spread out in the soil, covered in tiny hairs that soak up water, rather like a sponge. The water then enters a system of very thin tubes that run all the way up through the stem or trunk and out into every leaf. These tubes are narrower than a human hair.\n\nThe real secret, however, is up in the leaves. On a warm day, water slowly evaporates from tiny holes in the leaves and escapes into the air. As each drop of water leaves, it gently pulls the next drop up behind it. Because water sticks to itself, the whole thread of water in the tube is pulled upward, like a long chain being drawn up from above.\n\nIn this way, the sun and the air do the work that a pump would do in an animal. As water escapes from the leaves, more is quietly drawn up from the roots to replace it.\n\nSo a plant does not really drink in the way we do. Instead, it lets water flow through its body in a slow, silent stream, powered simply by sunshine and evaporation.",
        summaryJa: "植物はどうやって水を飲むのかについて。生き物はみな水を必要とし、植物も例外でない。大きな木は暑い日に何百リットルもの水を使うことがある。だが植物には口も、液体を体中に送る心臓もない。そこで意外な謎がある。ポンプもないのに、植物はどうやって土から水を、時に高い木のてっぺんまで引き上げるのか。旅は地下で始まる。植物の根は土中に広がり、海綿のように水を吸う小さな毛で覆われている。水はその後、茎や幹をずっと上まで通り、すべての葉へ出る非常に細い管の系に入る。この管は人の髪より細い。だが本当の秘密は葉の上にある。暖かい日、水は葉の小さな穴からゆっくり蒸発し空気へ逃げる。水の一滴が去るたび、後ろの次の滴を優しく引き上げる。水は互いにくっつくので、管の中の水の糸全体が上へ引かれる。上から長い鎖を引き上げるようだ。こうして太陽と空気が、動物のポンプの役割を果たす。葉から水が逃げると、代わりに根からさらに引き上げられる。植物は私たちのように飲むのでなく、日光と蒸発だけで体を水が静かに流れるのだ。",
        quiz: [
          { q: "How does water first enter a plant?", options: ["Through tiny hairs on its roots that soak up water from the soil", "Through its flowers", "It makes water inside itself"], answer: 0 },
          { q: "What pulls water up to the top of a plant?", options: ["Water evaporating from the leaves pulls the next drops up behind it", "A small heart pumps it", "The wind pushes it up"], answer: 0 },
          { q: "What powers this movement of water?", options: ["Sunshine and evaporation", "Electricity from the soil", "The plant's muscles"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-11-06",
    passages: [
      {
        id: "d1106-1",
        title: "What Is a Nonprofit Organization?",
        level: "★★☆",
        genre: "ビジネス",
        text: "Most businesses exist to make a profit. They sell goods or services, and the money left over after costs becomes profit for the owners. But not every organisation works this way. Some exist mainly to help others or to serve a cause, rather than to make money for owners. These are called nonprofit organisations.\n\nA nonprofit still needs money to operate. It must pay its staff, rent offices, and cover its costs, just like any business. The key difference is what happens to any extra money. In a normal company, extra money goes to the owners as profit. In a nonprofit, there are no owners taking profit. Instead, all the money is put back into the work of the organisation, to help it do more good.\n\nNonprofits work in countless areas. Some care for sick or poor people, some protect animals or nature, some support the arts, and some run schools or hospitals. They get their money from donations, membership fees, government support, and sometimes from selling goods or services.\n\nBecause they do not aim to enrich owners, nonprofits are often trusted to act for the public good. Many are run partly by volunteers, people who give their time for free because they believe in the cause.\n\nNonprofits are an important part of society, sitting between private business and government. They remind us that organisations can be powerful tools not only for making money, but also for solving problems, helping people, and improving the world we all share.",
        summaryJa: "非営利団体（NPO）とは何かについて。ほとんどの事業は利益を得るために存在する。物やサービスを売り、費用を引いて残った金が所有者の利益になる。だがすべての組織がこうではない。一部は金もうけより、他者を助けたり理念に尽くしたりするために存在する。これを非営利団体という。非営利団体も運営に金が要る。職員に給料を払い、事務所を借り、費用を賄うのはどの事業とも同じだ。違いは余った金の行き先だ。普通の会社では余った金は利益として所有者に行く。非営利団体には利益を取る所有者がいない。代わりにすべての金が組織の活動に戻され、より多くの善を行うのを助ける。活動分野は無数だ。病める人や貧しい人の世話、動物や自然の保護、芸術の支援、学校や病院の運営もある。資金は寄付、会費、政府の支援、時に物やサービスの販売から得る。所有者を富ませるのが目的でないため、公共の利益のために動くと信頼されることが多い。理念を信じ無償で時間をささげるボランティアが一部を担う。民間企業と政府の間に位置する社会の重要な一部だ。",
        quiz: [
          { q: "What is the main goal of a nonprofit organisation?", options: ["To help others or serve a cause, rather than make profit for owners", "To make owners as rich as possible", "To avoid doing any work"], answer: 0 },
          { q: "What happens to any extra money in a nonprofit?", options: ["It is put back into the organisation's work", "It is given to owners as profit", "It is thrown away"], answer: 0 },
          { q: "Who are volunteers?", options: ["People who give their time for free because they believe in the cause", "People who own the organisation", "Paid company directors"], answer: 0 }
        ]
      },
      {
        id: "d1106-2",
        title: "How Do Clocks Keep Time?",
        level: "★★☆",
        genre: "テクノロジー",
        text: "We rely on clocks every day, trusting them to tell us the correct time, hour after hour, without stopping. But have you ever wondered how a clock actually measures time so steadily? The secret, found in almost every clock ever made, is surprisingly simple: a clock needs something that repeats at a perfectly regular rhythm.\n\nThink of it like counting. If you knew that something happened exactly once every second, you could count those events to measure time. A clock does the same thing, but automatically. It contains a part that moves back and forth, or vibrates, at a steady, unchanging speed. By counting these movements, the clock tracks the passing seconds, minutes, and hours.\n\nIn old-fashioned clocks, this steady beat came from a swinging pendulum or a small spring-driven wheel. Each swing took exactly the same amount of time, and gears counted the swings to move the hands around the face.\n\nMost modern clocks and watches, however, use a tiny piece of a mineral called quartz. When a small electric current from a battery passes through a quartz crystal, the crystal vibrates incredibly fast, exactly the same number of times every second. A tiny electronic circuit counts these vibrations and uses them to keep perfect time.\n\nWhether it is a grand old pendulum clock or a modern digital watch, the basic idea is always the same. To measure time, you need a steady, repeating beat, and then you simply count it. It is a beautifully simple idea at the heart of every clock in the world.",
        summaryJa: "時計はどうやって時を刻むのかについて。私たちは毎日時計に頼り、止まることなく正しい時刻を告げると信じている。だが時計がどうやってそれほど安定して時間を測るのか、考えたことがあるだろうか。これまで作られたほぼすべての時計に共通する秘密は意外に単純だ。時計には完全に規則正しいリズムで繰り返す何かが要る。数えることを思い浮かべよう。何かがちょうど一秒に一回起こると分かっていれば、それを数えて時間を測れる。時計も同じことを自動で行う。一定で変わらない速さで前後に動く、つまり振動する部分を持ち、その動きを数えて秒・分・時を追う。昔の時計では、この一定の拍は振り子やばね仕掛けの小さな車輪から来た。一振りがちょうど同じ時間で、歯車が振りを数えて針を動かした。だが現代の時計の多くは水晶という鉱物の小片を使う。電池の小さな電流が水晶に流れると、水晶は毎秒まったく同じ回数、非常に速く振動する。小さな電子回路がこれを数え、正確な時を保つ。要は一定で繰り返す拍を数えることだ。",
        quiz: [
          { q: "What does a clock basically need to measure time?", options: ["Something that repeats at a perfectly regular rhythm", "A very large size", "Bright colors"], answer: 0 },
          { q: "How did old-fashioned clocks keep a steady beat?", options: ["With a swinging pendulum or a spring-driven wheel", "With a quartz battery only", "By guessing"], answer: 0 },
          { q: "How does a quartz clock keep time?", options: ["A quartz crystal vibrates a set number of times each second, and a circuit counts them", "It uses a tiny pendulum", "It has no moving or vibrating part"], answer: 0 }
        ]
      },
      {
        id: "d1106-3",
        title: "What Is an NGO?",
        level: "★★★",
        genre: "世界情勢",
        text: "When a terrible flood strikes a poor country, or when a forest is in danger, help often arrives not only from governments, but from a different kind of group. These groups are run neither by a government nor for profit. They are formed by ordinary citizens who come together to work on a problem they care about. Such a group is called a non-governmental organisation, or NGO for short.\n\nAs the name suggests, an NGO is independent of any government. This independence is important. It means an NGO can speak freely, work across borders, and act quickly, without waiting for political permission. Many NGOs work internationally, helping people in countries far from their own.\n\nNGOs work on a huge range of causes. Some provide food, shelter, and medical care after disasters. Others protect the environment, defend human rights, support education, or fight disease. They are often staffed by a mix of paid workers and volunteers, and they usually depend on donations from the public to fund their work.\n\nBecause they are close to the people they help, NGOs can often understand local problems better than large, distant institutions. They can also draw public attention to issues that might otherwise be ignored, and put pressure on governments to act.\n\nNGOs are not perfect, and like any organisation they must be run honestly and well. But at their best, they show something hopeful about humanity: that ordinary people, by joining together and acting with care, can make a real difference to lives far beyond their own borders.",
        summaryJa: "NGO（非政府組織）とは何かについて。貧しい国をひどい洪水が襲った時、あるいは森が危機にある時、助けは政府だけでなく別の種類の集団からも届くことが多い。この集団は政府が運営するのでも利益のためでもない。気にかける問題に取り組もうと集まった普通の市民が作る。これを非政府組織、略してNGOという。名の通りNGOはどの政府からも独立している。この独立は重要だ。自由に発言し、国境を越えて働き、政治的許可を待たず素早く動けることを意味する。多くのNGOは国際的に活動し、自国から遠い国の人々を助ける。活動する理念は実に幅広い。災害後に食料・住まい・医療を提供するもの、環境を守るもの、人権を擁護するもの、教育を支えるもの、病気と闘うものがある。有給の職員とボランティアが混在し、活動資金は市民の寄付に頼ることが多い。助ける人々に近いため、遠く大きな機関より地域の問題をよく理解できる。見過ごされがちな問題に世間の注目を集め、政府に行動を促すこともできる。完璧ではないが、最良の時は人間性の希望を示す。",
        quiz: [
          { q: "What does 'NGO' stand for?", options: ["Non-governmental organisation", "National gold office", "New global order"], answer: 0 },
          { q: "Why is an NGO's independence from government important?", options: ["It can speak freely, work across borders, and act quickly", "It can collect taxes", "It can command armies"], answer: 0 },
          { q: "Where do NGOs usually get money for their work?", options: ["From donations from the public", "Only from selling weapons", "They never need money"], answer: 0 }
        ]
      },
      {
        id: "d1106-4",
        title: "Sumo: Japan's National Sport",
        level: "★★☆",
        genre: "日本",
        text: "In a sport that is over a thousand years old, two very large men face each other inside a small circle of clay and sand. At a signal, they rush together with surprising speed and power, pushing, gripping, and twisting. Within seconds, it is often over. This is sumo, the traditional wrestling of Japan, and it is far more than a simple test of strength.\n\nThe rules of sumo are beautifully simple. The ring, called the dohyo, is a raised circle. A wrestler loses if any part of his body except the soles of his feet touches the ground, or if he is pushed out of the circle. There are no weight classes, so a smaller, cleverer wrestler can sometimes defeat a much heavier one using skill and balance.\n\nWhat makes sumo special, however, is its deep connection to tradition and ceremony. Sumo began long ago partly as a religious ritual, and much of that spirit remains today. Before a match, wrestlers throw salt into the ring to purify it, and they perform slow, powerful movements that have not changed for centuries.\n\nThe wrestlers themselves live a strict and disciplined life, often in special training houses where young wrestlers learn the sport and its manners. Their large size comes from careful training and eating, not from laziness.\n\nFor many Japanese people, sumo is not just entertainment but a living link to their country's long history. It blends sport, ceremony, and ancient custom into a single dramatic moment, played out again and again inside that small, sacred circle.",
        summaryJa: "日本の国技・相撲について。千年以上の歴史を持つ競技で、二人の非常に大きな男が粘土と砂の小さな円の中で向き合う。合図とともに驚くほどの速さと力でぶつかり、押し、組み、ひねる。数秒で勝負がつくことも多い。これが日本の伝統的な格闘技、相撲であり、単なる力比べをはるかに超える。規則は見事に単純だ。土俵という盛り上がった円の中で、足の裏以外の体の一部が地面につくか、円の外へ押し出されると負けだ。体重別がないので、小柄で賢い力士が技とバランスでずっと重い相手を倒すこともある。だが相撲を特別にするのは伝統と儀式との深いつながりだ。相撲は昔、宗教的な儀式として始まった面があり、その精神が今も多く残る。取組の前、力士は塩を土俵にまいて清め、何世紀も変わらぬゆっくりとした力強い動作を行う。力士自身は厳しく規律ある生活を送り、しばしば特別な部屋で競技と作法を学ぶ。その大きな体は入念な稽古と食事から来る。多くの日本人にとって相撲は娯楽でなく歴史への生きたつながりだ。",
        quiz: [
          { q: "How does a sumo wrestler lose a match?", options: ["He touches the ground with his body or is pushed out of the circle", "He runs too fast", "He speaks during the match"], answer: 0 },
          { q: "Why can a smaller wrestler sometimes win?", options: ["There are no weight classes, so skill and balance can beat size", "Bigger wrestlers are not allowed to win", "Small wrestlers start first"], answer: 0 },
          { q: "Why do wrestlers throw salt into the ring?", options: ["To purify it, as part of sumo's old religious tradition", "To make the ground slippery", "To feed the audience"], answer: 0 }
        ]
      },
      {
        id: "d1106-5",
        title: "How Do Bats Find Their Way in the Dark?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "On a warm evening, you may see bats flying swiftly through the darkening sky, twisting and turning to catch tiny insects. It seems impossible. How can they fly so fast and so accurately in the dark, without crashing into trees or each other? The answer is one of nature's most amazing tricks, and it has little to do with their eyes.\n\nInstead of relying on sight, many bats see with sound. As a bat flies, it makes a stream of very high squeaks, so high that human ears cannot hear them at all. These sounds travel out into the darkness, and when they hit an object, such as a tree, a wall, or a flying insect, they bounce back as echoes.\n\nThe bat listens carefully to these returning echoes. From them, its brain builds a detailed picture of the world around it. A quick echo means an object is close; a slow one means it is far away. By sending out sounds and listening to the echoes again and again, the bat can judge the exact position, size, and even the movement of things nearby. This remarkable ability is called echolocation.\n\nEcholocation is so precise that a bat can catch a single moving insect in complete darkness, or fly through a thick forest without touching a leaf.\n\nSo bats are not blind, as people once believed. Rather, they have a second, extraordinary way of sensing the world. They show us that there is more than one way to find your path, and that nature often solves problems in surprising and wonderful ways.",
        summaryJa: "コウモリが暗闇でどう道を見つけるのかについて。暖かい夕方、暗くなる空をコウモリが素早く飛び、身をひるがえして小さな虫を捕らえる様子を見るかもしれない。不可能に思える。木や互いにぶつからず、暗闇でなぜそれほど速く正確に飛べるのか。答えは自然の最も驚くべき技の一つで、目とはほとんど関係がない。多くのコウモリは視覚でなく音で「見る」。飛びながら非常に高い鳴き声の連なりを出す。高すぎて人間の耳には全く聞こえない。この音は暗闇へ進み、木や壁、飛ぶ虫などの物に当たるとこだまとなって跳ね返る。コウモリは戻るこだまを注意深く聞く。それから脳が周囲の詳しい像を作る。速いこだまは物が近い、遅いこだまは遠いことを意味する。音を出してこだまを聞くのを何度も繰り返し、近くの物の正確な位置・大きさ・動きまで判断できる。この驚くべき能力を反響定位（エコーロケーション）という。非常に精密で、真っ暗闇で一匹の動く虫を捕らえ、密林を葉に触れず飛べる。昔信じられたように盲目ではなく、世界を感じる並外れた第二の方法を持つのだ。",
        quiz: [
          { q: "How do many bats 'see' in the dark?", options: ["With sound, by listening to echoes", "With very bright eyes", "By smelling objects"], answer: 0 },
          { q: "What does a quick returning echo tell the bat?", options: ["An object is close", "The sun is rising", "The bat is tired"], answer: 0 },
          { q: "What is this ability called?", options: ["Echolocation", "Photosynthesis", "Hibernation"], answer: 0 }
        ]
      }
    ]
    }
  ] };
