/* デイリー配信リーディング
 * 毎朝の自動ルーチンがこのファイルを丸ごと上書き生成する（直近 7 日分を保持）。
 * days は日付降順。各 day = { date: "YYYY-MM-DD", passages: [readingPassages と同スキーマ + genre] }
 * このファイル以外は手書きデータであり、ルーチンは触らない。
 */
window.KE_DATA = window.KE_DATA || {};

KE_DATA.dailyReading = { days: [
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
    },
    {
    date: "2026-10-16",
    passages: [
      {
        id: "d1016-1",
        title: "Why Companies Recall Products",
        level: "★★☆",
        genre: "ビジネス",
        text: "Sometimes a company announces that it is \"recalling\" one of its products. This means it is asking customers to return or stop using something they already bought, usually because a problem has been found. A car maker might recall cars with a faulty part, or an electronics company might recall a machine that could overheat. Recalls can be costly and embarrassing, so why do companies do them?\n\nThe main reason is safety. If a product could hurt someone, a responsible company must act quickly, even if it loses money. For example, if a washing machine has a part that might catch fire, the company will offer to repair or replace it for free. Fixing the problem early is far better than waiting for someone to be harmed.\n\nRecalls also protect something less visible but very valuable: trust. Customers are more likely to forgive a company that admits a mistake and fixes it than one that tries to hide a danger. A well-handled recall can even show that a company cares about its customers.\n\nIn many countries, laws require companies to report serious product problems. Government agencies watch over this process and can order a recall if a company does not act. This system helps keep dangerous goods off the shelves.\n\nOf course, recalls cost money and can damage a brand for a time. But the alternative, leaving an unsafe product in people's homes, is far worse. In the end, a recall is a company choosing safety and honesty over short-term profit.",
        summaryJa: "企業が製品を回収（リコール）する理由について。企業が製品を「リコール」すると発表することがある。これは問題が見つかったために、すでに購入した製品の返却や使用中止を客に求めることだ。自動車会社が不具合部品の車を回収したり、電機会社が過熱の恐れある機械を回収したりする。費用もかかり体面も悪いのになぜ行うのか。主な理由は安全だ。人を傷つけうる製品には、損をしても責任ある企業は素早く動く。例えば発火の恐れある洗濯機の部品は無償で修理・交換する。早く直す方が、誰かが害を受けるのを待つよりずっと良い。リコールは信頼も守る。隠すより過ちを認め直す企業の方が許されやすい。多くの国で重大な問題の報告が法で義務づけられ、政府機関が監督する。安全と誠実を短期利益より優先する選択だ。",
        quiz: [
          { q: "What does it mean when a company 'recalls' a product?", options: ["It asks customers to return or stop using it", "It sells more of it", "It raises its price"], answer: 0 },
          { q: "What is the main reason companies recall products?", options: ["Safety", "To make more money quickly", "To win awards"], answer: 0 },
          { q: "Why can a well-handled recall help a company?", options: ["It can protect customers' trust", "It hides all problems", "It removes all laws"], answer: 0 }
        ]
      },
      {
        id: "d1016-2",
        title: "How Self-Driving Cars Work",
        level: "★★☆",
        genre: "テクノロジー",
        text: "For many years, a car that drives itself was only an idea in science fiction. Today, real self-driving cars are being tested on roads around the world. These vehicles can steer, brake, and change lanes with little or no help from a human. But how can a car \"see\" the road and make safe decisions on its own?\n\nA self-driving car depends on sensors, its electronic eyes and ears. Cameras watch for traffic lights, road signs, and lane markings. Radar measures the distance to other cars, even in rain or fog. Many cars also use a system called lidar, which sends out laser beams to build a detailed three-dimensional map of everything around the vehicle. Together, these sensors give the car a full picture of its surroundings.\n\nAll this information flows into a powerful computer, the car's \"brain.\" Using software, the computer decides what to do: when to slow down, when to turn, and when to stop. It must make these choices many times each second, faster than a human could.\n\nSome new systems also share information. Cars can receive data from road sensors and traffic signals, helping them understand what is happening even around a corner they cannot see.\n\nSelf-driving cars are not yet perfect. They can struggle with unusual situations, bad weather, or confusing road work. But supporters hope that one day they will reduce accidents, since most crashes are caused by human mistakes. The road ahead is long, but the technology keeps moving forward.",
        summaryJa: "自動運転車の仕組みについて。長年、自ら走る車はSFの中の発想だったが、今や実物が世界各地の道路で試験されている。人の助けをほとんど借りずにハンドル操作・ブレーキ・車線変更ができる。どうやって道を「見て」安全に判断するのか。鍵はセンサー、いわば電子の目と耳だ。カメラは信号・標識・車線を見張り、レーダーは雨や霧でも他車との距離を測る。多くはライダーという装置でレーザーを放ち周囲の立体地図を作る。これらが車に周囲の全体像を与える。情報は強力なコンピューター（車の「脳」）に集まり、ソフトが減速・曲がる・止まるを毎秒何度も判断する。道路センサーや信号の情報を受け取り、見えない角の先を知る車もある。まだ完璧でないが、事故削減が期待される。",
        quiz: [
          { q: "What do the sensors on a self-driving car act as?", options: ["Its electronic eyes and ears", "Its engine", "Its seats"], answer: 0 },
          { q: "What does lidar do?", options: ["Sends laser beams to build a 3D map of the surroundings", "Plays music", "Cleans the windows"], answer: 0 },
          { q: "Why do supporters hope self-driving cars will reduce accidents?", options: ["Most crashes are caused by human mistakes", "Cars never move", "Humans drive perfectly"], answer: 0 }
        ]
      },
      {
        id: "d1016-3",
        title: "Keeping the Skies Safe: Shared Air-Travel Rules",
        level: "★★★",
        genre: "世界情勢",
        text: "At this very moment, thousands of airplanes are flying above the Earth, carrying millions of people between countries. A plane might take off in one nation, cross the airspace of several others, and land on a different continent. For this to happen safely every day, the countries of the world must follow the same rules. Air travel is one of the clearest examples of global cooperation.\n\nLong ago, as flying grew popular, a problem appeared. Each country had its own ideas about how planes should operate. But an airplane does not stop at a border, so different rules could be dangerous. To solve this, nations agreed to create shared standards for flying, managed through international cooperation.\n\nToday, these shared rules cover almost everything. Pilots around the world are trained to similar standards. Air traffic controllers use English as a common language, so a pilot from Japan and a controller in France can understand each other. Even the markings on runways and the meaning of signals are the same worldwide.\n\nSafety is the greatest goal. When a serious accident happens, experts from different countries often investigate together, and the lessons are shared so the same mistake is less likely to happen again anywhere.\n\nThis cooperation does not remove competition between airlines, nor does it erase borders. Instead, it shows that on certain shared challenges, countries gain far more by agreeing than by acting alone. Every safe landing is a quiet reminder that the world can, when it chooses, work as one.",
        summaryJa: "空の安全を支える国際的な航空ルールについて。今この瞬間も何千もの飛行機が地球上空を飛び、何百万もの人を国から国へ運んでいる。ある国で離陸し、いくつもの国の空を越え、別の大陸に着陸することもある。これを毎日安全に行うには、世界の国々が同じルールに従う必要がある。航空は国際協力の最も分かりやすい例の一つだ。昔、飛行機が普及すると各国の考えが異なり危険だった。飛行機は国境で止まらないため、各国は共通基準を作ることで合意した。今やルールはほぼ全てを網羅し、操縦士の訓練水準は世界共通、管制官は英語を共通言語に使い、滑走路の表示や合図の意味も世界共通だ。重大事故は各国の専門家が共同調査し教訓を共有する。合意する方が単独より得だと示している。",
        quiz: [
          { q: "Why do countries need shared rules for air travel?", options: ["Airplanes cross borders, so different rules would be dangerous", "Planes never leave one country", "Rules make flying slower"], answer: 0 },
          { q: "What common language do air traffic controllers use?", options: ["English", "Only their own language", "No language at all"], answer: 0 },
          { q: "What happens after a serious air accident?", options: ["Experts from different countries investigate and share lessons", "Everyone forgets it", "All planes are destroyed"], answer: 0 }
        ]
      },
      {
        id: "d1016-4",
        title: "Chopsticks: How to Use Them in Japan",
        level: "★★☆",
        genre: "日本",
        text: "In Japan, most meals are eaten with a pair of thin sticks called chopsticks, or hashi. For visitors who have never used them, they can seem tricky at first, but with a little practice, they become easy and even enjoyable. Learning to use chopsticks is a small but useful step into Japanese daily life.\n\nTo hold chopsticks, you rest one stick on your ring finger and the base of your thumb, keeping it still. You move the other stick with your thumb, index, and middle fingers, like holding a pencil. Only the top stick moves, pinching food between the two tips. It takes practice, but soon it feels natural.\n\nIn Japan, there are also polite manners to follow. Some actions are considered rude because they remind people of customs used at funerals. For example, you should never stick your chopsticks straight up in a bowl of rice, and you should not pass food directly from your chopsticks to someone else's. When you are not using them, you rest the chopsticks neatly on a small holder or across your bowl.\n\nChopsticks are usually made of wood, bamboo, or plastic, and many families have their own favorite pairs. In restaurants, simple wooden chopsticks are often split apart from a single piece just before the meal.\n\nMore than just tools for eating, chopsticks reflect a culture of care and respect at the table. Using them well, and politely, is a simple way to show appreciation for the meal and for the people sharing it.",
        summaryJa: "日本での箸の使い方について。日本ではほとんどの食事を「箸」という細い二本の棒で食べる。初めての人には難しく見えるが、少し練習すれば簡単で楽しくなる。箸を使えることは日本の日常への小さな一歩だ。持ち方は、一本を薬指と親指の付け根に乗せて動かさず、もう一本を親指・人さし指・中指で鉛筆のように動かす。上の箸だけを動かし、二本の先で食べ物をつまむ。作法もあり、葬儀を連想させる動作は失礼とされる。例えばご飯に箸を立てたり、箸から箸へ直接食べ物を渡したりしない。使わない時は箸置きや器の上に置く。箸は木・竹・プラスチック製で、割り箸は食前に割る。食事と同席者への敬意を示す文化を映す。",
        quiz: [
          { q: "How do you use chopsticks?", options: ["Keep one stick still and move the other like a pencil", "Move both sticks wildly", "Hold them in your fist only"], answer: 0 },
          { q: "What is considered rude in Japan?", options: ["Sticking chopsticks straight up in a bowl of rice", "Using a chopstick holder", "Eating quietly"], answer: 0 },
          { q: "What do chopsticks reflect, according to the passage?", options: ["A culture of care and respect at the table", "A dislike of food", "A love of noise"], answer: 0 }
        ]
      },
      {
        id: "d1016-5",
        title: "How Do Rainbows Form?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "After a rain shower, when the Sun comes out again, you may see one of nature's most beautiful sights: a rainbow arching across the sky. Its band of colors, from red to violet, has amazed people for thousands of years. But a rainbow is not really an object in the sky. It is made of sunlight, rain, and your own eyes working together.\n\nThe secret is that sunlight, which looks white, is really a mixture of all colors. Normally these colors travel together and we do not notice them. But when sunlight passes through a raindrop, something special happens. As the light enters the drop, it bends, and the different colors bend by slightly different amounts. The light bounces off the back of the drop and bends again as it comes out. This spreads the white light into its separate colors, like a tiny prism.\n\nMillions of raindrops do this at the same time. Each drop sends a particular color toward your eyes, depending on its position in the sky. Together, all these drops create the great arc of colors we call a rainbow.\n\nA rainbow always appears in the part of the sky opposite the Sun. That is why you see them when the Sun is low, in the morning or late afternoon, with rain in front of you. Because the rainbow depends on where you stand, no two people see exactly the same one. Your rainbow is truly your own.",
        summaryJa: "虹のでき方について。雨上がりに太陽が出ると、空にかかる虹という自然の美しい光景が見える。赤から紫までの色の帯は何千年も人を驚かせてきた。だが虹は空にある物体ではなく、太陽光と雨とあなたの目が共に作るものだ。鍵は、白く見える太陽光が実は全ての色の混合であること。普段は色が一緒に進み気づかないが、光が雨粒を通ると特別なことが起こる。粒に入る時に光が曲がり、色ごとに曲がる量がわずかに違う。粒の奥で反射し、出る時にまた曲がって、白い光が小さなプリズムのように分かれる。無数の雨粒が同時にこれを行い、各粒が位置に応じた色を目へ送り、色の大きな弧になる。虹は必ず太陽と反対側に見え、立つ位置で変わるため、同じ虹を見る人はいない。",
        quiz: [
          { q: "What is a rainbow really made of?", options: ["Sunlight, rain, and your eyes working together", "Colored glass in the sky", "Painted clouds"], answer: 0 },
          { q: "What happens when sunlight passes through a raindrop?", options: ["It bends and splits into separate colors", "It disappears", "It turns to rain"], answer: 0 },
          { q: "Where does a rainbow always appear?", options: ["In the part of the sky opposite the Sun", "Right next to the Sun", "Only straight above you"], answer: 0 }
        ]
      }
    ]
    },
    {
    date: "2026-10-15",
    passages: [
      {
        id: "d1015-1",
        title: "What Are Stocks and Shares?",
        level: "★★★",
        genre: "ビジネス",
        text: "In the business news, you often hear that markets have \"gone up\" or \"fallen.\" These reports are about stocks, also called shares. A share is a small piece of ownership in a company. If you own shares in a business, you own a tiny part of it. But why do companies sell pieces of themselves, and why do people buy them?\n\nCompanies sell shares mainly to raise money. Suppose a company wants to build a new factory but does not have enough cash. Instead of only borrowing from a bank, it can sell shares to the public. Many people each pay a little, and together they provide a large sum. In return, those people become part-owners.\n\nPeople buy shares hoping to gain in two ways. First, if the company does well and grows, the value of each share may rise, so the shares can be sold later for more than they cost. Second, some companies share part of their profits with owners through regular payments called dividends.\n\nBut shares carry risk. If a company does badly, the value of its shares can fall, and owners may lose money. Share prices also move up and down with the news, the economy, and even people's feelings. Some days, markets rise sharply; other days, they drop.\n\nUnderstanding shares helps people follow the economy and make careful choices. Owning part of a company can be rewarding, but it is never a sure thing. Wise investors learn to think long-term and never risk money they cannot afford to lose.",
        summaryJa: "株式とは何かについて。ニュースで市場が「上がった」「下がった」と聞くのは株式（シェア）の話だ。株は会社の所有権の小さな一片で、株を持てばその会社のごく一部を所有することになる。会社が株を売る主な理由は資金調達だ。新工場を建てたいが現金が足りない時、銀行から借りるだけでなく一般に株を売れる。多くの人が少しずつ払い、合わせて大きな額になり、買った人は共同所有者となる。買い手は二つの利益を期待する。会社が成長すれば株の価値が上がり高く売れること、利益の一部が配当として分配されること。だが会社が不振なら株価は下がり損もする。株価は報道や景気、人々の気分でも動く。長期で考え、失ってよい範囲でと賢い投資家は学ぶ。",
        quiz: [
          { q: "What is a share?", options: ["A small piece of ownership in a company", "A type of bank loan", "A government tax"], answer: 0 },
          { q: "Why do companies sell shares?", options: ["Mainly to raise money", "To lose customers", "To close down"], answer: 0 },
          { q: "What is a risk of owning shares?", options: ["Their value can fall and you may lose money", "They always rise", "They are free"], answer: 0 }
        ]
      },
      {
        id: "d1015-2",
        title: "How Rockets Reach Space",
        level: "★★☆",
        genre: "テクノロジー",
        text: "Launching a rocket into space is one of the most dramatic sights in science. With a roar and a cloud of smoke, a tall machine rises slowly, then faster and faster, until it disappears into the sky. But how does a rocket escape the pull of the Earth and reach space?\n\nThe main challenge is gravity. Earth's gravity pulls everything down, so to leave the ground, a rocket must push upward with enormous force. Rockets create this force by burning fuel very quickly. As the fuel burns, it makes hot gas, which shoots out of the bottom of the rocket at great speed. This rushing gas pushes the rocket in the opposite direction, upward. It is the same idea as letting go of a balloon and watching it fly around the room.\n\nA rocket must also go incredibly fast. To stay in orbit around the Earth, it needs to travel at about 28,000 kilometers per hour. At that speed, it keeps falling toward the Earth but keeps missing it, circling the planet instead.\n\nBecause so much fuel is needed, most rockets are built in parts called stages. When the first stage uses up its fuel, it drops away, making the rocket lighter so the next stage can push on. In the past, these parts were lost, but today some companies land them again to reuse them.\n\nReaching space is difficult and expensive, yet rockets have carried people to the Moon and machines across the solar system, turning the dream of space travel into reality.",
        summaryJa: "ロケットが宇宙へ到達する仕組みについて。ロケットの打ち上げは科学で最も劇的な光景の一つで、轟音と煙とともに背の高い機体がゆっくり、やがて速く上昇し空へ消える。最大の課題は重力だ。地球の重力は全てを下へ引くため、離陸には巨大な上向きの力が要る。ロケットは燃料を一気に燃やし、高温のガスを機体の下から高速で噴き出す。そのガスが反対方向（上）へロケットを押す。風船を手放すと飛び回るのと同じ原理だ。さらに猛烈な速さが必要で、地球を回る軌道に乗るには時速約2万8千キロで進む。落ち続けながら地球をかすめ続け周回する。燃料が大量に要るため多くは段（ステージ）に分かれ、使い切った段を切り離して軽くする。近年は再利用のため着陸させる企業もある。",
        quiz: [
          { q: "How does a rocket push itself upward?", options: ["By shooting hot gas out of the bottom at great speed", "By flapping wings", "By using a big fan"], answer: 0 },
          { q: "Why does a rocket need to go so fast to stay in orbit?", options: ["So it keeps falling toward Earth but keeps missing it", "So it can make noise", "So it can turn colors"], answer: 0 },
          { q: "Why are rockets built in stages?", options: ["To drop empty parts and become lighter", "To look taller", "To carry more passengers only"], answer: 0 }
        ]
      },
      {
        id: "d1015-3",
        title: "How Does International Mail Reach You?",
        level: "★★☆",
        genre: "世界情勢",
        text: "Imagine sending a letter or a small parcel from Japan to a friend in Brazil. It travels thousands of kilometers, crosses several countries, and is handled by different postal workers who speak different languages. Yet, with the right address and stamp, it usually arrives. How does mail travel so smoothly between nations?\n\nThe answer is quiet international cooperation. Long ago, sending mail abroad was difficult. Each country had its own rules, and senders sometimes had to pay several different postal services along the way. To fix this, countries agreed to work together and created an organization to set shared rules for international post.\n\nThanks to these rules, the system is simple for the sender. You pay postage only once, in your own country, using your own stamps. Your national post office then passes the mail to the next country, which carries it onward. The countries settle the costs between themselves later. In this way, many separate postal services act like one giant network.\n\nShared standards make it work. Addresses follow common patterns, and special codes help machines sort millions of items quickly. Airplanes, ships, trucks, and trains all play a part in the journey.\n\nToday, people send fewer letters, but online shopping has created a flood of parcels crossing borders. The old system has had to grow and change to keep up.\n\nThe next time a postcard arrives from far away, remember the quiet agreement between nations that carried it. It is a small, everyday example of how the world chooses to cooperate.",
        summaryJa: "国際郵便が届く仕組みについて。日本からブラジルの友人へ手紙や小包を送ると、何千キロも旅し、いくつもの国を越え、言語の違う郵便職員が扱う。それでも正しい住所と切手があればたいてい届く。なぜ国家間をなめらかに運べるのか。答えは静かな国際協力だ。昔は各国の規則が異なり、途中で複数の郵便に支払うこともあった。これを解決するため各国が協力し、国際郵便の共通規則を定める組織を作った。おかげで送り手は自国で一度切手を貼るだけでよく、自国の郵便が次の国へ渡し、各国が後で費用を精算する。多くの郵便が一つの巨大網のように働く。住所の共通様式や郵便番号で機械が高速に仕分ける。近年は手紙が減る一方、通販で小包が国境を越えて急増している。",
        quiz: [
          { q: "Why was sending mail abroad difficult long ago?", options: ["Each country had its own rules and separate payments", "There was no paper", "No one could write"], answer: 0 },
          { q: "How many times does the sender usually pay postage?", options: ["Once, in their own country", "In every country it passes", "Never"], answer: 0 },
          { q: "What has recently increased international mail?", options: ["Online shopping creating many parcels", "Fewer people on Earth", "The end of airplanes"], answer: 0 }
        ]
      },
      {
        id: "d1015-4",
        title: "Karaoke: Singing Together in Japan",
        level: "★★☆",
        genre: "日本",
        text: "Few forms of entertainment are as closely linked to Japan as karaoke. The word means empty orchestra, because the music plays without a singer, leaving the singing to you. Invented in Japan in the 1970s, karaoke has since spread to almost every country in the world.\n\nKaraoke is simple. A machine plays the music of a popular song while the words appear on a screen. Singers follow the words and sing along, with no need to remember the lyrics. It does not matter if you are a great singer or a terrible one; the point is to have fun.\n\nIn Japan, people often enjoy karaoke in special places called karaoke boxes. These are small private rooms that a group can rent by the hour. Friends, families, or coworkers go inside, order drinks and snacks, and take turns singing just for each other. Because the room is private, even shy people feel brave enough to try.\n\nKaraoke plays an important social role. After a long day, coworkers may go together to sing and relax, growing closer in a way that a formal meeting never allows. For many people, it is a cheerful way to release stress and share laughter.\n\nFrom a simple machine to a worldwide hobby, karaoke shows how a fun idea can cross every border. Whether sung well or badly, a karaoke song is really about something universal: the simple joy of making music and sharing a happy moment with others.",
        summaryJa: "日本のカラオケについて。カラオケほど日本と結びついた娯楽は少ない。「空（から）のオーケストラ」を意味し、歌手なしで音楽が流れ、歌うのはあなた自身だ。1970年代に日本で生まれ、今や世界中に広まった。仕組みは簡単で、機械が人気曲の音楽を流し、画面に歌詞が出る。歌手はそれを追って歌え、歌詞を覚える必要がない。上手でも下手でも関係なく、楽しむことが目的だ。日本では「カラオケボックス」という時間貸しの小さな個室で楽しむことが多く、友人や家族、同僚が入って飲食し、順に歌う。個室なので恥ずかしがり屋も挑戦できる。長い一日の後に同僚と歌って打ち解け、ストレス発散にもなる。楽しい発想が国境を越えることを示す。",
        quiz: [
          { q: "What does the word 'karaoke' mean?", options: ["Empty orchestra", "Loud music", "Happy song"], answer: 0 },
          { q: "What is a 'karaoke box'?", options: ["A small private room a group can rent", "A kind of radio", "A type of drink"], answer: 0 },
          { q: "What social role does karaoke play in Japan?", options: ["Helping coworkers relax and grow closer", "Replacing all meetings", "Teaching people to cook"], answer: 0 }
        ]
      },
      {
        id: "d1015-5",
        title: "Why Is the Ocean Salty?",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "If you have ever swum in the sea and tasted the water by accident, you know it is very salty. Rivers and lakes, however, are usually fresh, with little or no salt. This raises a curious question: if rivers flow into the sea, and rivers are not salty, why is the ocean so full of salt?\n\nThe answer begins on land. Rainwater is slightly acidic, and as it flows over rocks and soil, it slowly breaks them down. In doing so, it picks up tiny amounts of minerals, including salt. You cannot taste this salt in a river because the amount is so small. But every river carries this slight saltiness toward the sea.\n\nHere is the key. When seawater sits under the hot Sun, some of it evaporates, turning into vapor and rising to form clouds. But when water evaporates, it leaves the salt behind. So fresh water keeps arriving from rivers, carrying a little more salt each time, while pure water keeps leaving through evaporation. Over millions of years, the salt has built up, making the sea steadily saltier.\n\nSome places are saltier than others. In very hot areas where lots of water evaporates, the sea can be especially salty. In colder places, or where many rivers pour in, the water is less salty.\n\nSo the ocean's saltiness is the result of a slow, patient process, drop by drop, over an unimaginably long time. The sea is, in a way, a record of the land slowly dissolving into the water.",
        summaryJa: "海が塩辛い理由について。海で誤って海水を味わえば、とても塩辛いと分かる。一方、川や湖はたいてい真水で塩はほとんどない。川が海に流れ込み、川は塩辛くないのに、なぜ海は塩でいっぱいなのか。答えは陸から始まる。雨水はわずかに酸性で、岩や土を流れるうちに少しずつ溶かし、塩を含む微量の鉱物を拾う。川では量が少なく味を感じないが、どの川もこのわずかな塩気を海へ運ぶ。鍵はここだ。海水が太陽で温まると一部が蒸発して雲になるが、蒸発時に塩は残される。川から真水が塩を運び続け、蒸発で純水だけが出ていくため、何百万年もかけて塩がたまり海は徐々に塩辛くなった。暑い地域の海は特に塩辛く、寒い地域や川が多い所は塩分が低い。",
        quiz: [
          { q: "Where does the salt in the ocean mainly come from?", options: ["Minerals that rivers pick up from rocks and soil", "Fish making salt", "Salt falling from the sky"], answer: 0 },
          { q: "Why does salt build up in the sea?", options: ["Water evaporates and leaves the salt behind", "The sea eats salt", "Rivers remove salt"], answer: 0 },
          { q: "Where is the sea especially salty?", options: ["In very hot areas where lots of water evaporates", "Where many rivers pour in", "In cold places only"], answer: 0 }
        ]
      }
    ]
    }
  ] };
