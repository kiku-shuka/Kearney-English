/* デイリー配信リーディング
 * 毎朝の自動ルーチンがこのファイルを丸ごと上書き生成する（直近 7 日分を保持）。
 * days は日付降順。各 day = { date: "YYYY-MM-DD", passages: [readingPassages と同スキーマ + genre] }
 * このファイル以外は手書きデータであり、ルーチンは触らない。
 */
window.KE_DATA = window.KE_DATA || {};

KE_DATA.dailyReading = { days: [
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
    }
  ] };
