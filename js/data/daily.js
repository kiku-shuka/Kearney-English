/* デイリー配信リーディング
 * 毎朝の自動ルーチンがこのファイルを丸ごと上書き生成する（直近 7 日分を保持）。
 * days は日付降順。各 day = { date: "YYYY-MM-DD", passages: [readingPassages と同スキーマ + genre] }
 * このファイル以外は手書きデータであり、ルーチンは触らない。
 */
window.KE_DATA = window.KE_DATA || {};

KE_DATA.dailyReading = { days: [
  {
    date: "2026-07-23",
    passages: [
      {
        id: "d0723-1",
        title: "Economic Security Becomes Business Strategy",
        level: "★★★",
        genre: "ビジネス",
        text: "Governments used to leave trade mostly to markets: companies bought and sold across borders wherever prices were best. That era is changing. Japan's trade ministry recently published its annual white paper on the international economy, and a central theme was 'economic security' — the idea that a country must protect its access to critical goods, not just chase the lowest price.\nWhat does economic security mean in practice? It means making sure a nation can still obtain essential things — energy, food, medicine, computer chips, key minerals — even if trade is disrupted by conflict, disaster, or political pressure. For decades, efficiency ruled: companies built long global supply chains to cut costs, often depending heavily on a single country for a critical part. Recent shocks, from pandemics to geopolitical tension, revealed how fragile that model can be.\nBusinesses are now adjusting. Many are diversifying suppliers across several countries, keeping larger stockpiles of vital materials, and sometimes bringing production closer to home even when it costs more. The goal is resilience — the ability to keep operating when something goes wrong — rather than pure efficiency.\nThis shift creates both costs and opportunities. Shorter, safer supply chains can be more expensive, which may raise prices. But they also create new business for companies and countries that offer reliable, secure alternatives.\nThe broader lesson is that 'cheapest' and 'safest' are not the same, and the balance between them is shifting. For any business, understanding this new landscape — where governments increasingly treat trade as a matter of security — is becoming an essential part of long-term strategy.",
        summaryJa: "かつて政府は貿易を市場に任せ、企業は最も安い場所で国境を越えて売買した。その時代が変わりつつある。日本の通商白書の中心テーマは「経済安全保障」——最安値だけを追うのでなく、重要物資へのアクセスを守るという考えだ。エネルギー・食料・医薬・半導体・重要鉱物などを、紛争・災害・政治的圧力で貿易が乱れても確保できるようにすること。効率重視で単一国に依存した長いサプライチェーンの脆さが近年の危機で露呈した。企業は供給先の分散、重要材料の在庫増、コスト増でも国内回帰などで「効率」より「強靱性」を重視し始めた。最安と最安全は別物で、そのバランスが移りつつある——貿易を安全保障とみなす新環境の理解が長期戦略に不可欠になっている。",
        quiz: [
          { q: "「経済安全保障」の考え方は？", options: ["最安値だけでなく重要物資へのアクセスを守る", "貿易を全面禁止する", "価格を無視する"], answer: 0 },
          { q: "近年の危機が露呈させたことは？", options: ["単一国依存の長いサプライチェーンの脆さ", "効率が常に最善であること", "貿易は不要であること"], answer: 0 },
          { q: "企業が今重視し始めたのは？", options: ["効率より強靱性(レジリエンス)", "とにかく最安値", "在庫ゼロ"], answer: 0 }
        ]
      },
      {
        id: "d0723-2",
        title: "AI That Runs on Your Phone",
        level: "★★☆",
        genre: "テクノロジー",
        text: "For the past few years, most artificial intelligence has lived in giant data centers. When you ask an AI a question, your words usually travel over the internet to a distant building full of powerful computers, which send an answer back. Now a quiet shift is underway: running AI directly on the device in your hand, without needing the cloud at all.\nWhy move AI onto phones and laptops? There are several reasons. Privacy is a big one — if the AI runs on your own device, your personal data never has to leave it. Speed is another; a local AI can respond instantly, without waiting for information to travel across the internet. On-device AI also works offline, in places with no signal, and it reduces the enormous electricity costs of running everything in data centers.\nThe challenge is size. The most powerful AI models are huge, far too big to fit on a phone. So engineers are learning to shrink them — creating smaller models that keep most of the ability while using far less memory and power. Special chips designed for AI, now built into many new phones, make this possible.\nThe result is a new balance. Simple, private, everyday tasks — writing a message, summarizing a note, translating a sign — can run on your device. Complex jobs that need enormous power still go to the cloud. Together, they form a system that is faster, more private, and more efficient.\nThe broader trend is a familiar one in technology: power that once required a huge central facility gradually becomes small enough to carry in your pocket. Just as computers shrank from room-sized machines to smartphones, AI is beginning the same journey — from distant data centers toward the device in your hand.",
        summaryJa: "ここ数年、AIの多くは巨大データセンターにあり、質問は遠くの計算機群に送られ答えが返ってきた。今、手元の端末で直接AIを動かす静かな変化が進む。利点はプライバシー(個人データが端末から出ない)、速度(通信待ちなしで即応)、オフライン動作、データセンターの膨大な電力コスト削減。課題はサイズで、強力なモデルは大きすぎて携帯に載らないため、能力を保ちつつ小型化する工夫と、新型スマホ搭載のAI専用チップが鍵になる。簡単で私的な日常作業は端末上で、複雑な処理はクラウドで、という新しい役割分担が生まれる。かつて巨大施設が要った力が徐々にポケットに収まる——部屋サイズの計算機がスマホになったように、AiもデータセンターからHand の端末へ向かい始めた。",
        quiz: [
          { q: "AIを端末上で動かす利点に含まれないものは？", options: ["プライバシーと速度", "オフライン動作", "画面が大きくなる"], answer: 2 },
          { q: "端末上AIの課題は？", options: ["強力なモデルは大きすぎるので小型化が必要", "電気が使えない", "遅すぎる"], answer: 0 },
          { q: "本文が示す新しい役割分担は？", options: ["簡単で私的な作業は端末、複雑な処理はクラウド", "すべて端末で処理", "すべてクラウドで処理"], answer: 0 }
        ]
      },
      {
        id: "d0723-3",
        title: "The New Map of Global Trade",
        level: "★★★",
        genre: "世界情勢",
        text: "For decades, globalization followed a simple rule: make each product wherever it is cheapest, and ship it around the world. That map of global trade is being redrawn. Rising political tension and recent supply shocks have pushed countries to think not only about cost, but about who they trade with and how much they depend on any single partner.\nOne result is a trend sometimes called 'friend-shoring' — the idea of building supply chains among countries that trust one another, even if it is not the cheapest option. Instead of depending on a single distant factory, companies and governments increasingly want reliable partners who are unlikely to cut them off during a crisis. Trade is becoming as much about trust and security as about price.\nThis shift has winners and losers. Countries seen as stable and friendly may attract new factories and investment as companies move production to safer locations. Others may lose business they long depended on. Meanwhile, consumers may pay slightly more, because the cheapest possible supply chain is no longer always the goal.\nThere are risks in going too far. If the world splits into rival trading blocs that barely deal with each other, everyone could become poorer, since trade has lifted billions out of poverty by letting countries specialize and exchange. The challenge is to balance security with openness — reducing dangerous dependencies without abandoning the benefits of a connected world.\nThe deeper lesson is that economics and politics can never be fully separated. Trade routes are not just lines on a map of costs; they are also relationships between nations. As those relationships change, so does the map of how the world does business.",
        summaryJa: "数十年、グローバル化は「最も安い場所で作り世界へ運ぶ」という単純な原則に従った。その地図が描き直されつつある。政治的緊張と供給ショックで、各国はコストだけでなく「誰と取引し、単一の相手にどれだけ依存するか」を考え始めた。結果の一つが「フレンドショアリング」——最安でなくても信頼できる国々でサプライチェーンを築く発想だ。貿易は価格と同じくらい信頼と安全保障の問題になりつつある。安定・友好とみなされる国は投資を呼び込み、依存されてきた国は仕事を失いうる。消費者はやや高く払うことも。ただ世界が対立するブロックに分裂すれば、専門化と交換で数十億人を貧困から救った貿易の恩恵が失われ皆が貧しくなる。危険な依存を減らしつつ開放性を保つ均衡が課題だ。貿易路はコストの線であると同時に国家間の関係でもある。",
        quiz: [
          { q: "「フレンドショアリング」とは？", options: ["最安でなくても信頼できる国々で供給網を築く", "友人に商品を配る", "国内だけで生産する"], answer: 0 },
          { q: "貿易が今や何の問題になりつつあるか？", options: ["価格と同じくらい信頼と安全保障", "価格だけ", "天候だけ"], answer: 0 },
          { q: "世界が対立ブロックに分裂するリスクは？", options: ["貿易の恩恵が失われ皆が貧しくなりうる", "全員が豊かになる", "影響はない"], answer: 0 }
        ]
      },
      {
        id: "d0723-4",
        title: "The Business Behind Summer Festivals",
        level: "★★☆",
        genre: "日本",
        text: "Summer in Japan means festivals. Across the country, towns and cities hold matsuri — lively events with food stalls, music, dancing, and fireworks that light up the night sky. These festivals are beloved traditions, but they are also an important part of local economies, and keeping them alive has become a real challenge and opportunity.\nA festival brings money into a community. Visitors travel from other areas, filling hotels, restaurants, and shops. Local farmers and makers sell food and crafts. For a small town, a single famous festival can be one of the biggest economic events of the year, supporting jobs long after the fireworks fade.\nBut festivals face difficulties. Many rural towns are shrinking and aging, leaving fewer young people to carry heavy floats, perform dances, or organize the events. Rising costs and, increasingly, dangerous summer heat add further pressure. Some traditional festivals have had to shorten their schedules, change their timing, or even stop altogether.\nCommunities are responding with creativity. Some invite volunteers and tourists to take part in roles once filled only by locals. Others use social media to attract visitors from across the country and abroad. A few have adjusted their events to cope with the heat, adding shade, water stations, and cooler evening hours.\nThe deeper story is about how tradition and economics depend on each other. A festival is a cultural treasure, but it survives partly because it brings real economic value. Protecting these events means finding ways to keep them meaningful and affordable in a changing society — a small but telling example of how communities everywhere work to carry the past into the future.",
        summaryJa: "日本の夏は祭りの季節。全国の町で屋台・音楽・踊り・花火の「祭り」が開かれる。愛される伝統であると同時に地域経済の重要な柱でもあり、その存続が課題であり機会でもある。祭りは他地域からの来訪者でホテル・飲食・商店を潤し、地元の農家や作り手が食や工芸を売る。小さな町では一つの有名な祭りが年最大級の経済イベントになる。だが過疎・高齢化で担い手が減り、コスト増や危険な猛暑も重なり、日程短縮や時期変更、中止に追い込まれる祭りもある。地域はボランティアや観光客の参加、SNSでの集客、日陰・給水・夕方開催など暑さ対策で応える。伝統と経済は相互に支え合う——文化的宝である祭りが実際の経済価値ゆえに生き残る面もある。過去を未来へ運ぶ地域の営みの好例だ。",
        quiz: [
          { q: "祭りが地域にもたらすものは？", options: ["来訪者による経済効果と雇用", "騒音だけ", "経済的損失"], answer: 0 },
          { q: "祭りが直面する困難に含まれないものは？", options: ["過疎・高齢化で担い手不足", "コスト増や猛暑", "観光客が多すぎて中止"], answer: 2 },
          { q: "本文が示す深い物語は？", options: ["伝統と経済は相互に支え合う", "祭りは無意味", "経済だけが重要"], answer: 0 }
        ]
      },
      {
        id: "d0723-5",
        title: "The Science of Building Better Habits",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "Why is it so hard to start exercising, yet so easy to check your phone a hundred times a day? The answer lies in how the brain forms habits — automatic behaviors that we repeat with little conscious thought. Understanding the science of habits can help anyone, including language learners, build routines that actually stick.\nScientists describe a habit as a loop with three parts: a cue, a routine, and a reward. The cue is a trigger — a time, a place, or a feeling. The routine is the behavior itself. The reward is the good feeling that follows, which teaches the brain to repeat the loop. Checking your phone is a strong habit because the cue (boredom) is constant and the reward (something new) comes instantly. Exercise is weaker because the reward often comes only later.\nThis science offers practical tools. To build a good habit, make the cue obvious and the reward quick. Attach a new habit to an existing one — for example, 'after I pour my morning coffee, I will study English for ten minutes.' Start small, because tiny habits are easy to repeat, and repetition is what makes a behavior automatic. To break a bad habit, remove the cue or replace the routine with a better one that gives a similar reward.\nThe most important lesson is about consistency over intensity. A short activity done every day beats a long one done rarely, because habits are built by repetition, not by occasional bursts of effort. For learning a language, this is especially true: ten minutes of daily practice, tied to a reliable cue, will beat a three-hour session once a month.\nHabits are the quiet architecture of our lives. By understanding how they form, we can design routines that carry us, almost effortlessly, toward the things we want to achieve.",
        summaryJa: "運動を始めるのは難しいのに、スマホは1日に何百回も見てしまうのはなぜか。答えは脳の習慣の仕組みにある。習慣は「きっかけ→行動→報酬」のループで、報酬が良い感覚を与えるとループが繰り返される。スマホは退屈というきっかけが常にあり報酬(新しい情報)が即座に来るため強い習慣に、運動は報酬が後回しなので弱い。良い習慣を作るにはきっかけを明確に・報酬を早くし、既存の習慣に紐づけ(「朝コーヒーを注いだら英語を10分」)、小さく始めて反復する。悪い習慣はきっかけを除くか、似た報酬の良い行動に置き換える。最重要は「強度より継続」——習慣は反復で作られるため、毎日10分が月1回3時間に勝る。語学は特にそうだ。習慣は人生の静かな設計図で、仕組みを理解すれば目標へ楽に運んでくれる。",
        quiz: [
          { q: "習慣の3つの部分は？", options: ["きっかけ・行動・報酬", "朝・昼・夜", "見る・聞く・話す"], answer: 0 },
          { q: "良い習慣を作るコツに含まれないものは？", options: ["既存の習慣に紐づける", "小さく始めて反復する", "報酬をなくす"], answer: 2 },
          { q: "本文の最重要の教訓は？", options: ["強度より継続——毎日10分が月1回3時間に勝る", "たまに長時間やればよい", "習慣は変えられない"], answer: 0 }
        ]
      }
    ]
  },
  {
    date: "2026-07-22",
    passages: [
      {
        id: "d0722-1",
        title: "Cleaning Up the Crowded Sky",
        level: "★★☆",
        genre: "ビジネス",
        text: "Space is getting crowded. Tens of thousands of satellites now circle the Earth, along with countless pieces of old rockets and broken equipment. This growing cloud of 'space junk' has created a new business opportunity: companies that turn space technology into commercial services to protect our increasingly busy orbit.\nWhy is this a business, and not just a science project? Because crowded orbits are a real and expensive problem. A single piece of junk, traveling faster than a bullet, can destroy a working satellite worth hundreds of millions of dollars. Satellite operators, insurers, and governments all have strong reasons to pay for solutions that reduce this risk.\nSeveral kinds of services are emerging. Some companies track objects in orbit and warn operators when a collision is likely, so satellites can move out of the way. Others are developing spacecraft that can capture dead satellites and pull them safely out of orbit. A few even design satellites that clean up after themselves, removing themselves from orbit when their work is done.\nInternational cooperation is part of the picture too. Governments are signing agreements to work together on satellite networks and orbital safety, because space is shared by all and no single country can manage it alone.\nThe deeper lesson is a familiar one in business: today's problems create tomorrow's markets. As human activity in space grows, so does the need to manage it responsibly. The companies that build the tools to keep orbit safe are turning a challenge into an industry — and helping ensure that space stays usable for everyone.",
        summaryJa: "宇宙は混雑している。数万機の衛星と無数の宇宙ごみが地球を回り、この問題が新たなビジネスを生んだ——宇宙技術を商用サービスに変え、混み合う軌道を守る企業だ。弾丸より速いごみ一つが数億ドルの衛星を壊すため、衛星事業者・保険会社・政府には対策を買う強い動機がある。衝突警報、故障衛星の捕獲・除去、役目を終えたら自ら軌道を離れる衛星などのサービスが登場。宇宙は全員の共有物で一国では管理できず、衛星網や軌道安全での国際協力も進む。「今日の問題は明日の市場を生む」——軌道を安全に保つ道具を作る企業が、課題を産業に変え、宇宙を皆が使える状態に保つ。",
        quiz: [
          { q: "新たなビジネス機会を生んだ問題は？", options: ["宇宙ごみで軌道が混雑していること", "宇宙が寒いこと", "衛星が安すぎること"], answer: 0 },
          { q: "登場しているサービスに含まれないものは？", options: ["衝突警報", "故障衛星の捕獲・除去", "宇宙旅行の格安販売"], answer: 2 },
          { q: "本文の教訓は？", options: ["今日の問題は明日の市場を生む", "宇宙開発はやめるべき", "ごみは無害"], answer: 0 }
        ]
      },
      {
        id: "d0722-2",
        title: "A Robot Priest and the Future of AI Conversation",
        level: "★★☆",
        genre: "テクノロジー",
        text: "In Japan, a humanoid robot has been trained on vast collections of Buddhist scriptures and can now hold conversations about life and philosophy while moving and gesturing like a human priest. It may sound unusual, but it points to an important direction in artificial intelligence: machines that can discuss deep and personal subjects, not just answer simple questions.\nWhat makes this possible? Modern AI systems learn by studying enormous amounts of text. By training on centuries of religious and philosophical writing, the robot can draw on those ideas to respond thoughtfully when people ask about suffering, meaning, or how to live. Combined with a moving, gesturing body, the experience feels more human than talking to a screen.\nThe idea raises interesting questions. Can a machine truly offer comfort or wisdom, or is it only repeating patterns from the texts it studied? Many people feel that human warmth and lived experience cannot be replaced by a robot, however clever. Others point out that a patient, always-available listener — even a mechanical one — might genuinely help people who feel lonely or troubled.\nBeyond religion, the technology hints at where conversational AI is heading. Machines that can discuss emotions, ethics, and personal problems could become companions, counselors, or teachers. But such roles carry real responsibility, because people may form deep attachments to them.\nThe robot priest, then, is more than a curiosity. It is a small window into a future where we must decide, carefully, what roles we want thinking machines to play in the most human parts of our lives.",
        summaryJa: "日本で、膨大な仏教経典を学習した人型ロボットが、人間の僧侶のように動き身振りを交えて人生や哲学を語れるようになった。奇妙に見えて、AIの重要な方向——単純な質問への回答でなく、深く個人的な話題を語れる機械——を示す。現代AIは大量の文章から学び、数世紀の宗教・哲学文献を学ぶことで苦しみや意味への問いに思慮深く応じ、動く身体が画面より人間的な体験を生む。機械が本当に慰めや知恵を与えられるのか、パターンの反復にすぎないのかという問いも生む。宗教を超え、感情・倫理・悩みを語るAIは伴侶・相談役・教師になりうるが、人が深く愛着を抱くため大きな責任も伴う。人生の最も人間的な部分で機械に何を担わせるかを慎重に決める未来への窓だ。",
        quiz: [
          { q: "このロボットができることは？", options: ["経典を学び人生や哲学を語る", "料理を作る", "空を飛ぶ"], answer: 0 },
          { q: "この技術が示すAIの方向とは？", options: ["深く個人的な話題を語れる機械", "計算だけをする機械", "画面のない機械"], answer: 0 },
          { q: "本文が挙げる懸念は？", options: ["人が機械に深く愛着を抱く責任", "電気代が高いこと", "ロボットが重いこと"], answer: 0 }
        ]
      },
      {
        id: "d0722-3",
        title: "Small Nations, Big Ambitions in Space",
        level: "★★★",
        genre: "世界情勢",
        text: "Space used to belong to a handful of powerful nations. That is changing quickly. Recently, Japan and Thailand signed an agreement to cooperate on low-Earth-orbit satellite networks — a sign that more and more countries want a place in the growing space economy.\nWhy would smaller or developing nations invest in space? Because satellites have become essential tools for everyday life on the ground. They provide internet to remote villages, guide ships and planes, monitor crops and forests, warn of floods and storms, and support communication during disasters. A country that can access these services gains real advantages in its economy and safety.\nFew nations can afford to build a full space program alone, so cooperation is key. A technologically advanced country can share knowledge, equipment, and launch services, while a partner country provides funding, ground stations, or a strategic location. Both sides benefit: one extends its influence and industry, the other gains capabilities it could not build by itself.\nLow-Earth orbit — the region relatively close to the planet — is especially attractive. Satellites there are cheaper to launch and can provide fast internet and detailed images. This is why so many countries and companies are rushing to place networks of small satellites in this busy zone.\nThe broader story is about a shift in global power. Space technology, once a symbol of superpower rivalry, is becoming a shared tool for development. As more nations gain access, space is turning from an exclusive club into a crowded, cooperative, and competitive part of the world economy — with all the opportunities and challenges that brings.",
        summaryJa: "宇宙はかつて少数の大国のものだったが、急速に変わりつつある。日本とタイが低軌道衛星網での協力に合意し、より多くの国が成長する宇宙経済に加わろうとしている。衛星は遠隔地へのネット提供、船舶・航空の誘導、農地・森林の監視、防災、災害時通信など地上の生活に不可欠な道具になったからだ。単独で宇宙計画を賄える国は少なく協力が鍵で、先進国が技術・機器・打ち上げを、相手国が資金・地上局・戦略的立地を提供し双方が得をする。打ち上げが安く高速ネットや詳細画像を得られる低軌道は特に魅力的。宇宙技術は超大国の競争の象徴から発展の共有ツールへ——排他的なクラブから、協力と競争が交わる世界経済の一部へと変わりつつある。",
        quiz: [
          { q: "小国や途上国が宇宙に投資する理由は？", options: ["衛星が生活に不可欠な道具になったから", "宇宙が空いているから", "打ち上げが趣味だから"], answer: 0 },
          { q: "宇宙協力で双方が得るものは？", options: ["一方は影響力と産業、他方は単独では持てない能力", "何も得ない", "損失だけ"], answer: 0 },
          { q: "低軌道が魅力的な理由は？", options: ["打ち上げが安く高速ネットや詳細画像を得られる", "重力がないから", "誰もいないから"], answer: 0 }
        ]
      },
      {
        id: "d0722-4",
        title: "What Whales Teach Us About Health",
        level: "★★☆",
        genre: "日本",
        text: "Science often advances in unexpected places — even inside the stomachs of whales. Studying decades of records from stranded pygmy sperm whales, researchers recently discovered three previously unknown types of Helicobacter, a kind of bacteria. The finding is a reminder of how much we still have to learn from the natural world.\nHelicobacter may sound unfamiliar, but one member of this family is well known to doctors: Helicobacter pylori, a bacterium that lives in the human stomach and can cause ulcers and even cancer. Understanding how these bacteria live inside different animals helps scientists learn how they survive the harsh, acidic environment of the stomach, and how they affect the health of their hosts.\nWhy study whales for this? Because animals that are very different from us can reveal general truths about biology. If a type of bacteria has adapted to live in a whale's stomach as well as a human's, comparing the two can show what these microbes need to survive — knowledge that might one day help treat diseases in people.\nThis kind of research also depends on patient, long-term record-keeping. The discovery came from decades of careful notes about stranded whales. Without those steady records, the pattern could never have been seen.\nThe lesson reaches beyond medicine. Nature is full of hidden connections, and knowledge often comes from studying things that seem unrelated to our daily lives. A stranded whale on a distant beach may, in the end, help doctors understand a disease that affects millions of people. Curiosity about the natural world remains one of humanity's most powerful tools.",
        summaryJa: "科学は思わぬ場所——クジラの胃の中——でも進む。座礁したコマッコウの数十年の記録を調べた研究者が、未知のヘリコバクター菌3種を発見した。この仲間の一つが、胃に住み潰瘍やがんの原因になるヘリコバクター・ピロリだ。異なる動物の胃でどう生きるかを知ることは、過酷な酸性環境での生存や宿主の健康への影響の理解に役立つ。人と大きく異なる動物こそ生物学の一般法則を明かす。数十年の丁寧な記録があってこそ発見でき、無関係に見えるものの研究から知が生まれる。遠い浜のクジラが、いつか何百万人を苦しめる病の理解を助けるかもしれない——自然への好奇心は人類最強の道具の一つだ。",
        quiz: [
          { q: "研究者がクジラの胃で発見したものは？", options: ["未知のヘリコバクター菌3種", "新種の魚", "プラスチックごみ"], answer: 0 },
          { q: "ヘリコバクターの仲間で有名なものは？", options: ["胃で潰瘍やがんの原因になるピロリ菌", "風邪のウイルス", "食中毒菌のみ"], answer: 0 },
          { q: "本文の教訓は？", options: ["無関係に見えるものの研究から知が生まれる", "クジラは研究できない", "自然は無関係"], answer: 0 }
        ]
      },
      {
        id: "d0722-5",
        title: "The Everyday Foods That May Boost Vaccines",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "Vaccines are one of medicine's greatest achievements, but they do not work equally well for everyone. In older adults, whose immune systems weaken with age, vaccines often produce a smaller protective response. New research suggests that a natural compound found in ordinary foods — wheat germ, mushrooms, and aged cheese among them — may help older people build stronger protection after vaccination.\nThe compound is called spermidine, and it occurs naturally in many foods and in our own bodies. Scientists have been studying it for years because it appears to support a cellular process that helps cells clean out damaged parts and stay healthy. As we age, this process slows down, and so does the immune system's ability to respond strongly to threats — including vaccines.\nThe new findings suggest that giving the immune system more of this compound might help older cells respond more effectively, producing better protection from a vaccine. If confirmed, this could be an inexpensive and simple way to improve vaccine results in exactly the group that needs the most protection.\nCaution is important, as always in science. A promising result in the laboratory does not automatically work in every person, and no one should expect a slice of cheese to replace medical advice. Careful trials in humans are needed before firm conclusions can be drawn.\nStill, the research points to an appealing idea: that everyday nutrition and modern medicine might work together. The foods on our plates may play a larger role in our health than we realize, quietly supporting the systems that keep us well — a reminder that science often finds power in the ordinary.",
        summaryJa: "ワクチンは医学の大きな成果だが、加齢で免疫が弱る高齢者では効きが小さくなりがち。新研究は、小麦胚芽・きのこ・熟成チーズなど普通の食品に含まれる天然成分「スペルミジン」が、高齢者のワクチン後の防御を高めうると示す。この成分は、細胞が傷んだ部分を掃除して健康を保つ働きを支え、加齢で衰えるその働きと免疫応答を助ける可能性がある。確認されれば、最も守りが必要な層のワクチン効果を安価に高める手段になりうる。ただし実験室の好結果が万人に効くとは限らず、人での慎重な試験が必要で、チーズが医療の代わりにはならない。日々の栄養と現代医療が協働しうるという魅力的な発想で、科学はしばしば「ありふれたもの」に力を見いだす。",
        quiz: [
          { q: "研究が注目した天然成分は？", options: ["食品に含まれるスペルミジン", "砂糖", "塩"], answer: 0 },
          { q: "高齢者でワクチンが効きにくい理由は？", options: ["加齢で免疫の応答が弱まるから", "食べ過ぎるから", "運動しすぎるから"], answer: 0 },
          { q: "本文が促す注意点は？", options: ["実験室の結果が万人に効くとは限らず人での試験が必要", "チーズが薬の代わりになる", "栄養は健康と無関係"], answer: 0 }
        ]
      }
    ]
  },
  {
    date: "2026-07-21",
    passages: [
      {
        id: "d0721-1",
        title: "Why Startups Spread Across a Country",
        level: "★★☆",
        genre: "ビジネス",
        text: "Japan's startup scene is growing, and it is no longer only a Tokyo story. Reports say that while the capital still leads, cities such as Osaka, Nagoya, Fukuoka, and Sapporo are becoming useful bases for startups focused on specific industries, for research spin-offs from universities, and for foreign companies entering the market.\nWhy do startups cluster in particular regions? Because young companies grow best where the right ingredients already exist. A startup in robotics wants to be near factories and engineers; one in biotech wants universities and hospitals; one in food technology wants farms and processing plants. Each region develops its own strengths, and companies gather where those strengths match their needs.\nThis regional spread brings real benefits. It keeps talented graduates in their home areas instead of forcing everyone to move to the capital. It spreads economic growth more evenly across the country. And it lets each city build a specialty, becoming known for a particular kind of innovation.\nThere are still challenges. Regional hubs usually have less money from investors than the capital, fewer experienced mentors, and smaller networks. Building these takes years of patient effort by local governments, universities, and companies working together.\nThe broader lesson applies to any growing field. Success tends to concentrate where supporting resources gather — money, skills, customers, and knowledge. Understanding what a place offers, and matching your plans to its strengths, is one of the most practical decisions any business or worker can make.",
        summaryJa: "日本のスタートアップは成長し、もはや東京だけの話ではない。首都が先行しつつ、大阪・名古屋・福岡・札幌などが特定産業や大学発スピンオフ、外資参入の拠点になりつつある。若い企業は必要な要素が既にある場所で育ちやすく、ロボットなら工場と技術者の近く、バイオなら大学と病院の近くに集まる。地方分散は人材の地元定着、経済成長の平準化、都市ごとの得意分野形成という利点をもたらす。投資資金・経験あるメンター・人脈の少なさという課題は残り、産官学の地道な連携が要る。成功は資源(資金・技能・顧客・知識)が集まる場所に集中する——場所の強みに計画を合わせることが実務的な要点だ。",
        quiz: [
          { q: "スタートアップが特定地域に集まる理由は？", options: ["必要な要素(工場・大学など)が既にある場所で育ちやすいから", "家賃が無料だから", "税金がないから"], answer: 0 },
          { q: "地方分散の利点として挙げられていないものは？", options: ["人材の地元定着", "経済成長の平準化", "全企業の海外移転"], answer: 2 },
          { q: "地方拠点の課題は？", options: ["投資資金・メンター・人脈の少なさ", "土地が全くないこと", "技術者が多すぎること"], answer: 0 }
        ]
      },
      {
        id: "d0721-2",
        title: "A Cheaper Battery Made from Salt",
        level: "★★★",
        genre: "テクノロジー",
        text: "Most batteries in phones and electric cars today rely on lithium, a metal that is expensive and found in only a few places. Researchers and companies have long searched for an alternative, and one candidate is getting attention: the sodium-ion battery. Reports say a new sodium battery performs far better than expected, with quality and design features rivaling top lithium batteries.\nWhy sodium? Because it is one of the most common elements on Earth — it is part of ordinary table salt. Unlike lithium, which is concentrated in a few countries and can be costly, sodium is cheap and available almost everywhere. A battery based on sodium could be less expensive and less dependent on a small number of suppliers.\nFor years, sodium batteries had a serious drawback: they stored less energy for their weight than lithium batteries, making them too heavy for cars or phones. But steady improvements are closing that gap. Even if sodium batteries remain a little heavier, their low cost could make them ideal for uses where weight matters less — such as storing energy from solar and wind power on the electric grid.\nThis is a good example of how technology progresses. Rarely does one solution win everything. More often, different tools suit different jobs. Lithium may keep powering the lightest devices, while cheaper sodium handles large, stationary storage. The future of energy will likely rely on many kinds of batteries, each matched to the task it does best.",
        summaryJa: "スマホやEVの電池は高価で産地が限られるリチウムに依存する。代替候補として注目されるのがナトリウムイオン電池で、新型は期待を大きく上回る性能と、上位リチウム電池に迫る品質・設計を示したと報じられる。ナトリウムは食塩に含まれる地球上で最も豊富な元素の一つで、安価でほぼどこでも手に入り、少数の供給国への依存も減る。重量あたりの蓄電量が少ない弱点は改善が進み、多少重くても低コストゆえ太陽光・風力の系統蓄電など重量が問題になりにくい用途に向く。一つの解が全てを制するのは稀で、用途ごとに最適な電池が使い分けられる未来が見込まれる。",
        quiz: [
          { q: "ナトリウム電池が注目される理由は？", options: ["ナトリウムは安価でほぼどこでも手に入るから", "光るから", "軽さで圧勝だから"], answer: 0 },
          { q: "ナトリウム電池の弱点は？", options: ["重量あたりの蓄電量が少ない", "危険すぎる", "作れない"], answer: 0 },
          { q: "本文が示す技術進歩の見方は？", options: ["用途ごとに最適な電池が使い分けられる", "一つの電池が全てを制する", "電池は不要になる"], answer: 0 }
        ]
      },
      {
        id: "d0721-3",
        title: "The Race to Store Clean Energy",
        level: "★★★",
        genre: "世界情勢",
        text: "The world is building more solar panels and wind turbines than ever before. But clean energy has a stubborn problem: the sun does not always shine, and the wind does not always blow. Solving this — storing energy for when it is needed — has become one of the great challenges of the global shift to cleaner power.\nThe difficulty is one of timing. Solar panels produce the most electricity at midday, but people use the most in the evening. Wind farms may generate huge amounts overnight, when demand is low. Without a way to store that energy, much of it is simply wasted, and countries must keep fossil-fuel plants running for the hours when clean power is scarce.\nSeveral solutions are competing. Giant batteries can store electricity and release it within seconds, which is useful for short gaps. Pumped hydro storage moves water uphill when power is cheap and lets it flow down to generate electricity when needed. Newer ideas include storing energy as heat, compressed air, or even hydrogen gas. Each has strengths and weaknesses in cost, size, and how long it can hold energy.\nWhy does this matter globally? Because a country that masters energy storage can rely more on cheap, clean power and less on imported fuel. Storage turns unpredictable sun and wind into steady, dependable electricity. The nations and companies that solve it best will gain both an environmental and an economic advantage — which is why the race to store clean energy is one of the defining contests of our time.",
        summaryJa: "世界はかつてないほど太陽光・風力を増やしているが、太陽は常に照らず風も常には吹かない——「必要な時のために蓄える」ことが脱炭素の大課題だ。太陽光は正午に最も発電するが需要は夕方、風力は需要の低い夜に大量発電しうる。蓄えなければ多くが無駄になり、クリーン電力が乏しい時間帯に化石燃料発電を動かし続けねばならない。大型電池(短時間向け)、揚水発電、熱・圧縮空気・水素での貯蔵などが競合し、コスト・規模・保持時間に一長一短がある。蓄電を制する国は安いクリーン電力に頼り輸入燃料への依存を減らせるため、環境と経済の両面で優位に立つ。蓄電競争は現代を象徴する戦いだ。",
        quiz: [
          { q: "クリーンエネルギーの「頑固な問題」とは？", options: ["太陽や風が常に得られず、蓄える必要があること", "発電しすぎること", "誰も使わないこと"], answer: 0 },
          { q: "蓄電の解決策として挙げられていないものは？", options: ["大型電池や揚水発電", "熱・圧縮空気・水素での貯蔵", "電気を捨てること"], answer: 2 },
          { q: "蓄電を制する国が得る優位は？", options: ["環境と経済の両面での優位", "軍事力のみ", "優位はない"], answer: 0 }
        ]
      },
      {
        id: "d0721-4",
        title: "Satellites Made of Wood",
        level: "★★☆",
        genre: "日本",
        text: "When you imagine a satellite, you probably picture shining metal and gold foil. Japanese researchers are exploring a surprising alternative: satellites made partly from wood. The idea sounds almost like a joke, but it addresses a real and growing problem in space.\nThe problem is space junk. Thousands of satellites now orbit the Earth, and when they stop working, many burn up as they fall back into the atmosphere. Metal satellites, when they burn, can release tiny particles that may harm the upper atmosphere. As the number of satellites grows into the tens of thousands, these effects could add up.\nWood offers a clever solution. A wooden satellite would burn up more cleanly when it re-enters the atmosphere, leaving less harmful material behind. Wood is also surprisingly tough in the vacuum of space, where there is no oxygen or moisture to rot it. Early experiments have tested small wooden satellites to see how the material survives the harsh conditions of orbit.\nThere are limits, of course. Wood cannot replace metal for every part; electronics, engines, and structural frames still need traditional materials. But using wood where possible could make satellites cleaner and cheaper.\nThe deeper lesson is about creative problem-solving. Faced with the challenge of space pollution, researchers did not only look for high-tech fixes; they reconsidered one of humanity's oldest materials. Sometimes progress comes not from inventing something entirely new, but from seeing an old, familiar thing in a completely fresh way.",
        summaryJa: "衛星というと輝く金属と金箔を思い浮かべるが、日本の研究者は一部を木で作る衛星を探究している。冗談のようで、宇宙ごみという現実の問題に応える発想だ。多数の衛星が寿命後に大気圏で燃え尽きる際、金属は上層大気を害しうる微粒子を出す恐れがあり、衛星が数万機に増えると影響が積み重なる。木製衛星は再突入時によりクリーンに燃え、有害物質が少ない。真空の宇宙は酸素も水分もなく木は腐らず意外に丈夫で、小型木製衛星の実験も行われた。電子機器やエンジンは金属が要り全ては置き換えられないが、可能な範囲での木材利用で衛星をよりクリーンで安価にできる。人類最古の素材を新しい目で見直す創造的問題解決の好例だ。",
        quiz: [
          { q: "木製衛星が応えようとする問題は？", options: ["宇宙ごみと再突入時の大気への影響", "衛星の色", "電池の重さ"], answer: 0 },
          { q: "木が宇宙で意外に丈夫な理由は？", options: ["真空で酸素も水分もなく腐らないから", "金属より重いから", "光るから"], answer: 0 },
          { q: "本文が示す教訓は？", options: ["古い素材を新しい目で見直す創造的問題解決", "新素材だけが進歩を生む", "木は宇宙に使えない"], answer: 0 }
        ]
      },
      {
        id: "d0721-5",
        title: "Making Cosmic Dust in a Glass Tube",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "Everything around you — your body, this planet, the air you breathe — is made from atoms that were once scattered through space as cosmic dust. Now researchers have managed to create this cosmic dust from scratch, recreating space-like conditions inside glass tubes in a laboratory. It is a small experiment with very large implications.\nCosmic dust is made of tiny grains, far smaller than a speck of household dust, floating in the vast space between stars. These grains are important because they are the building blocks of planets. Over millions of years, dust clumps together, forming larger and larger pieces until, eventually, worlds like Earth are born. Understanding how the first grains form is a key step in understanding where planets — and life — come from.\nStudying real cosmic dust is extremely hard, because it exists far away and forms over enormous timescales. So scientists brought the process into the laboratory. By carefully recreating the cold, near-empty conditions of space inside sealed tubes, they watched dust grains form under controlled conditions they could measure and repeat.\nThis is the power of experiment. Rather than only observing the distant universe through telescopes, scientists can now build tiny pieces of it on a laboratory bench. Each such experiment tests our theories about how stars, planets, and eventually life came to be.\nThe wonder of it is worth pausing on. In a glass tube on Earth, researchers are recreating the very process that, billions of years ago, began building the world we live in. It is a reminder that the story of the cosmos and the story of ourselves are, in the end, the same story.",
        summaryJa: "あなたの体も地球も空気も、かつて宇宙に漂う「宇宙塵」だった原子からできている。研究者がガラス管の中に宇宙のような環境を再現し、宇宙塵をゼロから作り出すことに成功した。宇宙塵は星間空間に漂う微細な粒で、数百万年かけて集まり惑星の材料になる。最初の粒がどうできるかの理解は、惑星や生命の起源に迫る鍵だ。本物の宇宙塵は遠く長い時間で形成されるため研究が難しく、科学者は冷たくほぼ真空の条件を密閉管内に再現し、制御・反復できる形で粒の形成を観察した。望遠鏡で遠い宇宙を眺めるだけでなく、実験台の上に宇宙の小片を作れる——宇宙の物語と私たち自身の物語が、結局は同じ物語だと気づかせる。",
        quiz: [
          { q: "研究者がガラス管内で作り出したものは？", options: ["宇宙塵", "本物の惑星", "新しい星"], answer: 0 },
          { q: "宇宙塵が重要な理由は？", options: ["集まって惑星の材料になるから", "光るから", "食べられるから"], answer: 0 },
          { q: "実験室で再現した理由は？", options: ["本物は遠く長い時間で形成され研究が難しいから", "宇宙に行けないから", "望遠鏡が壊れたから"], answer: 0 }
        ]
      }
    ]
  },
  {
    date: "2026-07-20",
    passages: [
      {
        id: "d0720-1",
        title: "Three Rivals Consider Joining Forces",
        level: "★★★",
        genre: "ビジネス",
        text: "Three major Japanese electronics companies are reportedly exploring a merger of their power-chip businesses. Power chips are a special kind of semiconductor that controls the flow of electricity in cars, appliances, factories, and renewable energy systems. Combining three of the world's top suppliers would create a giant in a fast-growing part of the industry.\nWhy would competitors want to join forces? The main reason is scale. Building advanced chips requires enormous investment in factories and research — costs so high that even large companies struggle to keep up alone. By merging, the companies can share these costs, avoid duplicating effort, and invest more in future technology. A single strong player can also compete better against big foreign rivals.\nThere is a national angle too. Governments increasingly see chips as strategic, wanting reliable domestic suppliers rather than depending entirely on other countries. A merged company would strengthen Japan's position in a technology the whole economy depends on.\nMergers are not simple, however. Combining three companies means blending different cultures, systems, and teams — a process that can take years and sometimes fails. Customers may worry about reduced competition and higher prices. Regulators will examine whether the deal is fair to the market.\nFor students of business, the story shows a key strategic choice. When an industry demands more scale than any single firm can provide, companies face a decision: keep competing alone and risk falling behind, or combine forces and gain strength while giving up some independence. It is one of the hardest and most important calls a company can make.",
        summaryJa: "日本の大手電機3社が、パワー半導体事業の統合を検討していると報じられた。パワー半導体は自動車・家電・工場・再エネで電流を制御する重要チップ。世界有数の供給3社が統合すれば、成長分野で巨大企業が生まれる。狙いは規模——巨額の設備・研究投資を分担し、重複を避け、海外勢に対抗できる。チップを戦略物資とみなす国家的観点もある。ただ3社の文化・システム統合は難しく数年かかり失敗もあり、競争減少や値上げへの懸念、規制当局の審査もある。単独では足りない規模が要る産業で「単独で戦うか、力を合わせて独立性を一部手放すか」という重要な戦略判断を示す。",
        quiz: [
          { q: "パワー半導体とは？", options: ["自動車や家電などで電流を制御するチップ", "写真を撮るチップ", "音を出す部品"], answer: 0 },
          { q: "競合が統合を検討する主な理由は？", options: ["巨額の投資コストを分担し規模を得るため", "従業員を減らすため", "工場を閉じるため"], answer: 0 },
          { q: "統合の難しさとして挙げられていないものは？", options: ["異なる文化・システムの統合", "競争減少や規制審査", "電気が使えなくなること"], answer: 2 }
        ]
      },
      {
        id: "d0720-2",
        title: "Linking Light and Magnetism",
        level: "★★★",
        genre: "テクノロジー",
        text: "Scientists have reported a quantum breakthrough that links light and magnetism inside materials only a few atoms thick. It sounds abstract, but connecting these two forces could open new paths for the computers and devices of the future.\nLight and magnetism are both fundamental parts of nature, but they usually do not interact strongly. Light carries energy and information at incredible speed; magnetism is how we store data on hard drives and how many sensors work. If we could make light control magnetism, or magnetism shape light, inside a tiny material, we could combine the best of both — fast communication and stable storage — in a single system.\nThe key is the use of extremely thin materials, sometimes just one layer of atoms. At that scale, the normal rules soften and quantum effects take over, allowing forces to interact in ways impossible in ordinary bulk materials. Researchers have been building a whole family of these atom-thin materials, each with surprising powers, ever since the discovery of graphene.\nThe potential uses are exciting but still distant. Devices that manage information with both light and magnetism could be faster and use less energy than today's electronics. Some scientists also see links to quantum computing, where controlling delicate quantum states is essential.\nAs always with early research, patience is required. Effects shown in a laboratory must be made reliable, scalable, and affordable before they change the products we use. But each new way of connecting nature's forces expands the toolbox from which tomorrow's technology will be built.",
        summaryJa: "原子数個分の薄い材料の中で「光と磁気」を結びつける量子的成果が報告された。光は高速で情報を運び、磁気はデータ保存やセンサーに使われるが、通常は強く相互作用しない。ごく薄い材料では量子効果が支配的になり、光で磁気を操る等が可能になれば、高速通信と安定保存を一つの系に統合できる。グラフェン以来の原子薄膜材料群の一例で、より高速・低消費電力の機器や量子コンピュータへの応用が期待される。実験室の効果を信頼性・量産性・低コストにするのはこれからだが、自然の力を結ぶ新手法が未来技術の道具箱を広げる。",
        quiz: [
          { q: "今回の成果は何を結びつけた？", options: ["光と磁気", "音と熱", "水と油"], answer: 0 },
          { q: "極薄材料でこれが可能になる理由は？", options: ["量子効果が支配的になるから", "材料が重いから", "色が変わるから"], answer: 0 },
          { q: "期待される応用は？", options: ["高速・低消費電力の機器や量子コンピュータ", "新しい飲み物", "道路の舗装"], answer: 0 }
        ]
      },
      {
        id: "d0720-3",
        title: "One Year After a Tariff Deal",
        level: "★★★",
        genre: "世界情勢",
        text: "A year after a major trade agreement, reports say only about twenty percent of the investments Japan pledged to make in the United States are actually underway. The gap between promise and progress reveals an important truth about international economics: agreements are signed quickly, but real investment takes years.\nWhy the slow pace? Building factories, research centers, or supply chains is enormously complex. Companies must find land, hire workers, obtain permits, and be confident that the investment will pay off over decades. A government can announce a large number in a trade deal, but the actual spending depends on thousands of individual business decisions, each made carefully.\nTrade deals often mix politics and economics. Leaders want to show quick results, so they announce big totals. But businesses invest based on costs, demand, and stability — not on political timelines. If conditions change, or if the numbers were optimistic to begin with, real investment can lag far behind the headline figure.\nThis matters for anyone trying to understand the global economy. Big announced numbers grab attention, but the more useful question is always: how much is actually happening? Following the slow, real flow of money tells you more than the exciting figures in a signing ceremony.\nThe broader lesson applies to business and life alike. A promise is a statement of intention; progress is what actually gets done. Wise observers watch not just what is announced, but what is delivered — and understand that the distance between the two can be very large.",
        summaryJa: "大型通商合意から1年、日本が約束した対米投資のうち実際に動いているのは約2割にとどまると報じられる。合意は速く結ばれても実投資は数年かかるという国際経済の真実を示す。工場・研究所・サプライチェーンの建設は複雑で、企業は土地・人材・許認可・数十年の採算を見極める。政治は大きな数字を打ち出したがるが、企業はコスト・需要・安定性で判断し政治日程では動かない。だから「発表額」より「実際に進んでいる量」を見るべき。約束は意図の表明、進捗は実際に成されたこと——賢明な観察者は発表ではなく実現を見る。",
        quiz: [
          { q: "合意から1年で実際に動いている投資は？", options: ["約2割", "10割", "ゼロ"], answer: 0 },
          { q: "実投資が遅い理由は？", options: ["建設は複雑で数十年の採算を見極める必要があるから", "企業がやる気がないから", "お金がないから"], answer: 0 },
          { q: "本文が勧める見方は？", options: ["発表額より実際に進んでいる量を見る", "発表額だけを信じる", "投資は無視する"], answer: 0 }
        ]
      },
      {
        id: "d0720-4",
        title: "A Tourism Boom That Keeps Shifting",
        level: "★★☆",
        genre: "日本",
        text: "Japan's tourism boom continues at a remarkable pace. Reports say the number of visitors in the first half of the year topped twenty million for the second year in a row. But beneath that strong headline lies a more complicated picture: where the visitors come from is changing sharply, with a large drop in tourists from one major country balanced by growth from many others.\nThis shift carries an important business lesson about diversification. A tourism industry — or any business — that depends too heavily on customers from a single country is fragile. If political tensions, economic trouble, or changing tastes reduce travel from that one source, the whole industry suffers. When visitors come from many countries instead, a fall from one can be offset by rises from others, keeping total numbers stable.\nJapan's appeal is broad, which helps. Its food, safety, culture, nature, and cities attract travelers from across Asia, Europe, North America, and beyond. Regions once dependent mainly on visitors from nearby countries are now welcoming a wider mix, which makes the boom more resilient.\nThere are challenges alongside the benefits. Popular areas face crowding, rising prices, and strain on local life. Different visitors have different needs — languages, foods, and travel styles — so businesses must adapt. But a diverse base of customers is a strength, not a weakness.\nThe wider point reaches beyond tourism. Whether you run a hotel, a factory, or a shop, depending on one big source of income is risky. Spreading that dependence across many sources — customers, markets, or suppliers — is one of the simplest and most powerful ways to build something that lasts.",
        summaryJa: "日本の観光ブームは続き、上半期の訪日客は2年連続で2,000万人を超えた。だが好調の裏で客の出身国が大きく変化し、ある大国からの減少を他の多くの国からの増加が補っている。これは多角化という重要な教訓を示す——単一の国の客に依存する産業は脆く、多国から来れば一国の落ち込みを他が補い総数が安定する。食・治安・文化・自然・都市という幅広い魅力が助けになる。混雑や物価上昇、多様なニーズへの対応という課題はあるが、多様な客層は強みだ。ホテルでも工場でも店でも、一つの収入源への依存は危険で、依存を分散することが長続きする事業の要となる。",
        quiz: [
          { q: "上半期の訪日客数は？", options: ["2年連続で2,000万人超", "初めて100万人", "前年の半分"], answer: 0 },
          { q: "本文が示す教訓は？", options: ["単一の客に依存せず多角化する", "一国に集中すべき", "観光をやめるべき"], answer: 0 },
          { q: "客の出身が多国にわたる利点は？", options: ["一国の落ち込みを他が補い総数が安定する", "混雑がなくなる", "言語が一つで済む"], answer: 0 }
        ]
      },
      {
        id: "d0720-5",
        title: "The Wonder of Atom-Thin Materials",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "Some of the most exciting materials in science are almost nothing at all — sheets just one atom thick. The story began in 2004 with graphene, a single layer of carbon atoms famously first isolated using ordinary sticky tape to peel flakes from a pencil-like block of graphite. That simple trick launched a scientific revolution.\nWhy does thinness change everything? When a material becomes truly two-dimensional, its electrons can only move in a flat plane, and the ordinary rules of physics give way to strange quantum behavior. Graphene turned out to be stronger than steel, an excellent conductor of electricity and heat, and nearly transparent. Since then, scientists have discovered a whole family of atom-thin materials, each with its own surprising powers — some conduct, some insulate, some are magnetic, and some interact with light in unusual ways.\nThe potential uses are vast. These materials could lead to faster and more efficient electronics, flexible screens that bend without breaking, better batteries, ultra-sensitive sensors, and components for quantum computers. Because they are so thin and light, they might fit into devices where today's materials are too bulky.\nThere is still a gap between promise and product. Making these materials cheaply, in large sheets, and with few flaws remains difficult, and many laboratory wonders never reach the market. But the field keeps growing, and the toolbox of atom-thin materials keeps expanding. From a piece of sticky tape to the frontier of quantum technology, it is a reminder that some of science's biggest leaps begin with the simplest of ideas.",
        summaryJa: "科学で最も刺激的な材料の一つは、原子1個分の薄さのシートだ。始まりは2004年のグラフェン(炭素1原子層)で、鉛筆のような黒鉛から粘着テープで薄片を剥がすという単純な方法で初めて単離され、科学革命を起こした。真に2次元になると電子は平面しか動けず量子的な奇妙な性質が現れる。グラフェンは鋼より強く、電気・熱をよく通し、ほぼ透明。以来、伝導・絶縁・磁性・光との相互作用など多彩な原子薄膜材料群が見つかった。高速電子機器、曲がる画面、より良い電池、高感度センサー、量子コンピュータ部品などへの応用が期待される。安価に大面積・低欠陥で作る難しさは残るが、粘着テープから量子技術の最前線へ——最大の飛躍は最も単純な発想から始まる。",
        quiz: [
          { q: "グラフェンが最初に単離された方法は？", options: ["粘着テープで黒鉛から薄片を剥がす", "高温で溶かす", "海から採取する"], answer: 0 },
          { q: "極薄になると何が起きる？", options: ["量子的な奇妙な性質が現れる", "材料が消える", "色だけが変わる"], answer: 0 },
          { q: "原子薄膜材料の課題は？", options: ["安価に大面積・低欠陥で作るのが難しい", "軽すぎて使えない", "研究できない"], answer: 0 }
        ]
      }
    ]
  },
  {
    date: "2026-07-19",
    passages: [
      {
        id: "d0719-1",
        title: "A Sudden Drop: When Markets Fall Fast",
        level: "★★★",
        genre: "ビジネス",
        text: "Stock markets can rise slowly for months and then fall sharply in a single afternoon. Japan's main index recently dropped thousands of points in a few hours, driven by heavy selling of chip-related shares. One major memory chip maker saw its market value fall to roughly half of its recent peak. For anyone learning about business, a day like this is a lesson in how markets really work.\nWhy do prices swing so violently? Because a stock price reflects not just today's profits but investors' hopes about the future. When those hopes are very high, prices climb far above current earnings. But high hopes are fragile. A single worrying signal — a disappointing forecast, a rival's success, or simply the feeling that prices rose too fast — can make investors rush to sell at once. Selling feeds more selling, and prices tumble.\nThe recent fall centered on companies tied to artificial intelligence. For over a year, AI excitement pushed chip stocks to extraordinary heights. When some investors decided the prices had gone too far, the reversal was quick and painful.\nDoes a crash mean the technology is worthless? Usually not. Even after a sharp drop, a good company keeps making products and earning money. The lesson is about the difference between a business and its stock price. A business is built over years; a stock price can change in minutes. Wise investors and managers focus on the slow, real work of building value, and try not to be ruled by the market's sudden moods.",
        summaryJa: "株式市場は数か月かけて上昇しても、一つの午後で急落しうる。日本の主要指数が数時間で数千ポイント下げ、半導体関連の売りが主因で、あるメモリ大手の時価総額はピークの約半分に。株価は今の利益だけでなく将来への期待も映すため、高すぎる期待は些細な悪材料で崩れ、売りが売りを呼ぶ。今回はAI関連が中心。ただ暴落は技術が無価値という意味ではなく、良い企業は下落後も製品を作り稼ぐ。「企業」は年単位で築かれ「株価」は分単位で動く——賢明な人は市場の気分に振り回されず、価値を築く地道な仕事に集中する。",
        quiz: [
          { q: "株価が激しく変動する理由は？", options: ["株価は将来への期待も映し、期待は崩れやすいから", "企業が毎日変わるから", "理由はない"], answer: 0 },
          { q: "今回の急落の中心は？", options: ["AI関連・半導体関連の銘柄", "食品会社", "鉄道会社"], answer: 0 },
          { q: "本文の教訓は？", options: ["企業は年単位、株価は分単位——市場の気分に振り回されない", "暴落は技術が無価値の証拠", "株価だけを見るべき"], answer: 0 }
        ]
      },
      {
        id: "d0719-2",
        title: "What Does a Smartphone Really Cost?",
        level: "★★☆",
        genre: "テクノロジー",
        text: "A new entry-level smartphone from a major maker was recently priced at around 140,000 yen in Japan — close to 900 US dollars. Many people were surprised that an 'entry-level' phone could cost so much. The price tells an interesting story about technology, currency, and value.\nFirst, phones have quietly become powerful computers. The device in your pocket now has better cameras, faster chips, and more storage than laptops did a few years ago. As the technology inside improves, the cost to build it rises, and so does the price.\nSecond, currency matters. When a country's money weakens against the US dollar, imported products become more expensive in local prices, even if the maker did not raise the dollar price at all. A weaker yen means the same phone costs more yen than before. Buyers feel the pinch, but the cause is partly in the exchange rate, not just the product.\nThird, 'value' is not only about price. A phone that lasts five years and receives software updates may be cheaper, over time, than a cheap phone replaced every two years. Smart buyers think about cost per year of use, not just the number on the price tag.\nThe bigger lesson applies to many purchases, from phones to cars to appliances. The sticker price is only the beginning of the story. Understanding what drives it — technology, currency, and durability — helps you judge whether something is truly expensive or actually good value.",
        summaryJa: "大手の新しい「エントリー向け」スマホが日本で約14万円(約900ドル)と、その高さに驚く人も多い。理由は三つ。①スマホは高性能コンピュータ化し、中身の進化で製造コストと価格が上がる。②通貨——円安になると、メーカーがドル価格を上げなくても円建てでは高くなる。③「価値」は価格だけではない——5年使えてソフト更新される端末は、2年で買い替える安物より結局安いこともある。値札は物語の始まりにすぎず、技術・通貨・耐久性という要因を理解すれば、本当に高いのか実はお得かを見極められる。",
        quiz: [
          { q: "スマホが高価になる理由に含まれないものは？", options: ["高性能化で製造コストが上がる", "円安で円建て価格が上がる", "色が増えたから"], answer: 2 },
          { q: "円安が価格に与える影響は？", options: ["ドル価格が同じでも円建てでは高くなる", "価格は必ず下がる", "無関係"], answer: 0 },
          { q: "賢い買い手が考えることは？", options: ["価格だけでなく1年あたりの使用コスト", "値札の数字だけ", "色だけ"], answer: 0 }
        ]
      },
      {
        id: "d0719-3",
        title: "How Nations Build Technology Ecosystems",
        level: "★★★",
        genre: "世界情勢",
        text: "No powerful technology is built by a single company alone. Behind every advanced product lies an 'ecosystem' — a web of chip makers, software developers, factories, universities, and investors that support one another. Recently, a leading maker of AI chips announced an expansion of its partnerships across Japan's robotics and industrial sector, a good example of how such ecosystems form.\nWhy does an ecosystem matter? Because modern technology is too complex for one firm to master everything. A chip company needs software partners to make its hardware useful. A robot maker needs chips, sensors, and AI models it does not build itself. When many specialized companies work together, each doing what it does best, the whole system advances faster than any single player could alone.\nCountries compete to become the home of such ecosystems. Once a strong network forms in a region, it tends to grow. Skilled workers move there, suppliers open nearby, universities train the right graduates, and investors look for the next promising firm. Success attracts more success, which is why governments work hard to attract key companies and research centers.\nThere are risks in depending too heavily on outside partners, especially for critical technology. A country may find that the most important chips or software are controlled by companies elsewhere. This is why nations try to balance cooperation with self-reliance — welcoming global partners while building their own strengths. In a connected world, technological power comes not from working alone, but from being a strong, valued part of the right network.",
        summaryJa: "強力な技術は単独企業では作れず、背後にはチップメーカー・ソフト開発者・工場・大学・投資家が支え合う「エコシステム」がある。AIチップの主要企業が日本のロボット・産業分野との連携拡大を発表したのは好例。現代技術は複雑すぎて一社で全てを担えず、専門企業が各々の得意を持ち寄ると全体が速く進む。強いネットワークができた地域には人材・供給業者・大学・投資が集まり成功が成功を呼ぶため、各国は主要企業や研究拠点の誘致に力を注ぐ。ただ外部依存のリスクもあり、協力と自立の均衡が要る。技術力は単独ではなく「適切なネットワークの一員である」ことから生まれる。",
        quiz: [
          { q: "技術の「エコシステム」とは？", options: ["チップ・ソフト・工場・大学・投資家が支え合う網", "一社だけの工場", "自然の生態系のみ"], answer: 0 },
          { q: "エコシステムが重要な理由は？", options: ["現代技術は複雑で一社では全てを担えないから", "競争をなくすため", "コストを隠すため"], answer: 0 },
          { q: "各国が均衡を取ろうとするのは？", options: ["協力と自立(外部依存のリスク回避)", "孤立と鎖国", "価格と品質"], answer: 0 }
        ]
      },
      {
        id: "d0719-4",
        title: "When One Factory Stops, Who Feels It?",
        level: "★★☆",
        genre: "日本",
        text: "A large Japanese food company recently began restarting its refrigerated warehouses and food factories after a disruption, first accepting limited orders and planning a full return soon. It may sound like a small business story, but it offers a clear window into something we rarely think about: the hidden supply chains that keep daily life running.\nRefrigerated warehouses are a quiet but vital part of the food system. They store frozen and chilled products — meat, seafood, vegetables, ready meals — and keep them safe until they reach shops and restaurants. When such facilities stop working, even briefly, the effects ripple outward. Shops may run short of certain items, restaurants may change their menus, and other companies that depend on steady deliveries must adjust.\nThis is why modern businesses think carefully about resilience — the ability to keep going, or recover quickly, when something goes wrong. A company might keep backup facilities, spread its operations across several locations, or hold extra stock of critical items. Restarting with limited orders, as this company did, is itself a careful strategy: bring the system back gradually to avoid new problems, rather than switching everything on at once.\nThe broader lesson is about how connected our world has become. A single warehouse most people never see can affect what appears on store shelves and restaurant tables. Behind the simple act of buying dinner lies a vast, mostly invisible network — and keeping that network strong is one of the quiet, essential jobs of modern business.",
        summaryJa: "日本の大手食品会社が、混乱後に冷蔵倉庫と食品工場の稼働を再開し、まず限定的な受注から始めて近く全面再開を予定。小さな話に見えて、日常を支える「見えないサプライチェーン」を映す好例だ。冷蔵倉庫は肉・魚・野菜・調理済み食品を安全に保つ要で、止まれば店の品薄や飲食店のメニュー変更など影響が波及する。だから企業は「レジリエンス(回復力)」を重視し、予備施設・拠点分散・在庫確保などで備える。限定受注からの再開も、一気に戻さず段階的に立ち上げる慎重な戦略。夕食を買う行為の裏に広大で見えない網があり、それを保つのが現代ビジネスの静かで不可欠な仕事だ。",
        quiz: [
          { q: "冷蔵倉庫が食品システムで果たす役割は？", options: ["冷凍・冷蔵品を安全に保ち店や飲食店へ届ける", "野菜を育てる", "料理を作る"], answer: 0 },
          { q: "「レジリエンス」とは？", options: ["問題が起きても続ける・素早く回復する力", "価格を上げる力", "広告を打つ力"], answer: 0 },
          { q: "限定受注から再開する狙いは？", options: ["一気に戻さず段階的に立ち上げ新たな問題を避ける", "利益を隠す", "顧客を減らす"], answer: 0 }
        ]
      },
      {
        id: "d0719-5",
        title: "Cheap Style: The Science of Affordable Fashion",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "A well-known low-price fashion brand recently made news by working with a luxury designer to sell jeans for the price of a couple of lunches. The idea of famous designers creating cheap clothing might sound strange, but it reveals a lot about how modern fashion — and modern business — works.\nFor most of history, good design and low price rarely went together. Skilled designers worked for expensive brands, while cheap clothes were plain and forgettable. That has changed. Fast-fashion companies discovered that they could offer stylish, well-designed clothing at low prices by producing enormous quantities, simplifying materials, and running highly efficient supply chains. When you make millions of the same item, the cost of each one falls dramatically.\nWorking with a famous designer is a clever move. It brings prestige and fresh ideas to an affordable brand, attracting customers who want style without a high price. The designer gains a huge audience, and the company gains attention and sales. Both sides win.\nThere is a serious side to cheap fashion too. Very low prices can encourage people to buy more than they need and throw clothes away quickly, creating waste. In response, some companies are experimenting with recycling, better-quality basics meant to last, and more responsible production. The future of affordable fashion may depend on balancing three goals at once: style, low price, and care for the planet — a difficult but increasingly important combination.",
        summaryJa: "低価格ファッションブランドが高級デザイナーと組み、ランチ2回分ほどの値段でジーンズを売って話題に。有名デザイナーが安い服を作るのは奇妙に見えて、現代のファッションとビジネスの仕組みをよく表す。かつて良いデザインと低価格は両立しなかったが、大量生産・素材の簡素化・効率的なサプライチェーンで、おしゃれな服を安く出せるようになった。有名デザイナーとの協業は、手頃なブランドに名声と新鮮な発想をもたらし双方に利益。一方で安さは大量消費と廃棄を招くため、リサイクルや長持ちする定番品など責任ある生産の試みも。今後は「スタイル・低価格・環境配慮」の三立が課題になる。",
        quiz: [
          { q: "安くておしゃれな服が可能になった理由は？", options: ["大量生産・素材の簡素化・効率的なサプライチェーン", "デザイナーが無料で働くから", "布が無料だから"], answer: 0 },
          { q: "有名デザイナーとの協業で双方が得るものは？", options: ["ブランドは名声と売上、デザイナーは大きな観客", "何も得ない", "損失だけ"], answer: 0 },
          { q: "安いファッションの深刻な側面は？", options: ["大量消費と廃棄による無駄", "価格が高すぎること", "服が丈夫すぎること"], answer: 0 }
        ]
      }
    ]
  },
  {
    date: "2026-07-18",
    passages: [
      {
        id: "d0718-1",
        title: "A Retailer Looks to Europe for Growth",
        level: "★★☆",
        genre: "ビジネス",
        text: "One of Japan's biggest retail companies is reportedly considering a large investment — several hundred billion yen — in the largest convenience store operator in Poland. The move is part of a wider strategy: as growth slows at home, Japanese retailers are looking abroad for new customers.\nThe reason is demographics. Japan's population is shrinking and aging, which means fewer shoppers each year. A company that depends only on the domestic market faces a hard ceiling on its growth. Europe, by contrast, offers large populations and regions where convenience stores are still expanding. Buying an established local operator is often smarter than starting from zero, because the local company already understands its customers, suppliers, and rules.\nConvenience stores are a Japanese specialty. Over decades, Japanese chains perfected the art of running small, efficient shops that offer fresh food, services, and long opening hours. That know-how is valuable abroad, where the convenience-store model is less developed. Exporting a business system, not just products, can be a powerful form of growth.\nThere are risks in crossing borders. Consumer tastes differ, labor rules vary, and managing a company thousands of kilometers away is hard. But the strategic logic is clear. When your home market cannot grow, you must either find new products or new places — and for Japan's retailers, the world's growing regions increasingly look like the future.",
        summaryJa: "日本の大手小売企業が、ポーランド最大のコンビニ運営会社に数千億円規模の投資を検討していると報じられた。人口減・高齢化で国内の買い物客が減る中、海外に成長を求める戦略の一環。ゼロから始めるより現地の既存企業を買う方が、顧客・取引先・規制を理解している分有利。日本が磨いたコンビニ運営のノウハウは、モデルが未発達な海外で価値を持つ。国境を越えるリスクはあるが、国内が伸びないなら「新しい製品か新しい場所」を探すしかない。",
        quiz: [
          { q: "日本の小売企業が海外に目を向ける主な理由は？", options: ["国内は人口減で買い物客が減るから", "海外の方が家賃が安いから", "国内の店が多すぎるから"], answer: 0 },
          { q: "ゼロから始めるより現地企業を買う利点は？", options: ["顧客・取引先・規制を既に理解しているから", "従業員が不要だから", "商品が無料になるから"], answer: 0 },
          { q: "本文が示す成長の考え方は？", options: ["国内が伸びないなら新しい製品か新しい場所を探す", "何もしないのが最善", "海外進出は避けるべき"], answer: 0 }
        ]
      },
      {
        id: "d0718-2",
        title: "AI Moves onto the Factory Floor",
        level: "★★★",
        genre: "テクノロジー",
        text: "For years, most people met artificial intelligence on their phones and computers. Now AI is entering a very different place: the factory. Several major Japanese manufacturers — companies that make robots, machines, and industrial equipment — have announced new AI initiatives, often in partnership with a leading maker of AI chips.\nWhat does AI actually do in a factory? A great deal. It can inspect thousands of products per hour, spotting tiny defects a human eye would miss. It can predict when a machine is about to break down, so it can be fixed before it stops the whole line. It can guide robots to handle objects of different shapes, a task that once required careful programming for every case. In short, AI makes factories more flexible, more reliable, and more efficient.\nJapan is a natural home for this shift. The country has long been a leader in robotics and precision manufacturing, and it faces a shrinking workforce that makes automation especially valuable. Combining decades of factory know-how with modern AI could help Japanese industry stay competitive as fewer young workers are available.\nThere are challenges. AI systems need large amounts of good data, skilled engineers to run them, and careful testing to ensure safety. Workers will need training as their jobs change. But the direction is clear: the same technology that answers questions on your phone is quietly moving into the machines that make the physical world, and manufacturing may never look the same again.",
        summaryJa: "スマホやPCで出会うことが多かったAIが、工場という別の場所に入り込んでいる。日本の大手製造業(ロボットや産業機器メーカー)が、AIチップの主要企業と組んで新たなAI施策を発表した。工場のAIは、微細な欠陥検査、故障の予知保全、多様な形状の物を扱うロボット制御などを担い、工場を柔軟・確実・効率的にする。ロボットと精密製造に強く、労働力が縮む日本には特に価値が高い。良質なデータや人材、安全性検証、労働者の再教育という課題はあるが、AIは物理世界を作る機械へ静かに移りつつある。",
        quiz: [
          { q: "工場でのAIの役割として挙げられていないものは？", options: ["微細な欠陥の検査", "故障の予知保全", "商品の値段を勝手に決める"], answer: 2 },
          { q: "日本がこの変化に向くとされる理由は？", options: ["ロボット・精密製造に強く、労働力が縮んでいるから", "工場が少ないから", "AIを禁止しているから"], answer: 0 },
          { q: "課題として挙げられているのは？", options: ["良質なデータ・人材・安全性検証・労働者の再教育", "電気が使えないこと", "工場が海外にしかないこと"], answer: 0 }
        ]
      },
      {
        id: "d0718-3",
        title: "Why Household Inflation Fears Matter",
        level: "★★★",
        genre: "世界情勢",
        text: "Central banks watch many numbers, but one of the most important is surprisingly personal: what ordinary households expect to happen to prices. Recent reports say inflation expectations among Japanese households have hit a record high, keeping pressure on the country's central bank to keep raising interest rates.\nWhy do expectations matter so much? Because they can become self-fulfilling. If people believe prices will rise sharply, they change their behavior. Workers demand higher wages to keep up. Shoppers buy now rather than later, fearing higher prices ahead. Companies raise prices more confidently, expecting customers to accept it. All of this can actually push inflation higher — simply because everyone expected it.\nThis is why central banks care about psychology as much as economics. Part of their job is to keep expectations 'anchored,' meaning people trust that prices will stay reasonably stable. Once that trust breaks and expectations climb, controlling inflation becomes much harder, because the belief itself drives the problem.\nFor Japan, this is a new challenge. After decades of near-zero inflation, prices are now rising, and households have noticed. The central bank must respond carefully: raise rates enough to calm expectations, but not so fast that it damages the economy. It is a delicate balance, and it shows an important truth about money — the economy runs not only on hard numbers, but also on what millions of people believe will happen next.",
        summaryJa: "中央銀行が注視する最重要指標の一つが、家計が抱く「物価の見通し」。日本の家計のインフレ期待が過去最高に達し、利上げ継続の圧力になっていると報じられる。期待は自己実現しうる——値上がりを予想すると人は賃上げを求め、早めに買い、企業も強気に値上げし、結果として本当にインフレが進む。だから中央銀行は心理も重視し、期待を「安定(アンカー)」させようとする。長年ほぼゼロ物価だった日本にとって新たな試練で、期待を鎮めつつ景気を壊さない微妙な舵取りが要る。経済は数字だけでなく人々の予想でも動く。",
        quiz: [
          { q: "インフレ期待が重要なのはなぜ？", options: ["自己実現して実際にインフレを進めうるから", "数字が面白いから", "無関係だから"], answer: 0 },
          { q: "人々が値上がりを予想すると起きることは？", options: ["賃上げ要求・早めの購入・強気の値上げ", "誰も買わなくなる", "価格が必ず下がる"], answer: 0 },
          { q: "中央銀行の課題は？", options: ["期待を鎮めつつ景気を壊さない微妙な舵取り", "利上げを無限に続ける", "何もしないこと"], answer: 0 }
        ]
      },
      {
        id: "d0718-4",
        title: "Preparing for Longer, Hotter Summers",
        level: "★★☆",
        genre: "日本",
        text: "Japan's summers are changing, and science is putting numbers to what many people already feel. Advanced climate simulations suggest that as global temperatures rise, Japan is likely to face increasingly long and dangerously hot summers, along with more frequent torrential rain, rising seas, and accelerating ice loss around the world by the end of the century.\nThese projections are more than distant warnings; they shape decisions being made today. Longer hot seasons mean more strain on power grids as air conditioners run for months, more heatstroke cases in hospitals, and tougher conditions for farmers and outdoor workers. More intense rain raises the risk of floods and landslides, forcing cities to strengthen drainage and rethink where people build.\nJapan has long experience preparing for natural disasters, from earthquakes to typhoons, and that culture of preparation is now being applied to a warming climate. Cities are planting trees, redesigning buildings to stay cool, upgrading flood defenses, and improving warning systems that tell people when dangerous heat or rain is coming.\nThe deeper message is about adaptation. Reducing greenhouse gases remains essential to limit how far the climate changes. But some warming is already locked in, so societies must also adapt to the world that is coming. For a country as exposed to natural forces as Japan, learning to live safely with hotter summers and wilder weather is becoming one of the great practical challenges of the century.",
        summaryJa: "日本の夏は変わりつつあり、科学がその実感を数値化している。高度な気候シミュレーションは、地球温暖化で日本の夏がより長く危険に暑くなり、世界全体で集中豪雨の増加・海面上昇・氷の減少が今世紀末までに進むと示す。これは電力網の負荷、熱中症、農作業への影響、洪水・土砂災害リスクの増大として今日の意思決定に関わる。地震や台風に備えてきた日本の防災文化が温暖化にも応用され、植樹・涼しい建物・治水・警報の強化が進む。温室効果ガス削減は不可欠だが、ある程度の温暖化は避けられず、来る世界への「適応」も社会の大きな課題になる。",
        quiz: [
          { q: "気候シミュレーションが示す日本の夏は？", options: ["より長く危険に暑くなる", "急に涼しくなる", "変化しない"], answer: 0 },
          { q: "予測がもたらす今日的な影響に含まれないものは？", options: ["電力網の負荷や熱中症", "洪水・土砂災害リスク", "地震の消滅"], answer: 2 },
          { q: "本文が伝える「より深いメッセージ」は？", options: ["削減に加え、来る世界への適応も必要", "対策は不要", "温暖化はすでに止まった"], answer: 0 }
        ]
      },
      {
        id: "d0718-5",
        title: "The Comeback of a Family Car",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "Cars are not only machines; they are also cultural objects that reflect how families live. A Japanese automaker recently unveiled a fully redesigned large minivan, the model's first complete overhaul in sixteen years. Behind that long gap and fresh design lies an interesting story about how products and lifestyles change together.\nWhy would a company wait sixteen years to redesign a car? Because a major overhaul is expensive and risky. Engineers must rethink the engine, the body, the safety systems, and the technology inside, while guessing what families will want years into the future. Wait too long, and the product feels old; move too fast, and you waste money on changes customers do not need. Timing is everything.\nThe new minivan reflects modern family life. Buyers now expect advanced safety systems, big screens, comfortable seating for several passengers, and, increasingly, electric or hybrid power for better efficiency. A car designed sixteen years ago simply cannot meet these expectations, no matter how good it once was.\nThere is a broader lesson about staying relevant. Every product, from cars to phones to software, must eventually be reimagined for a new generation. The companies that succeed are those that watch how people actually live — how families travel, what they value, what they worry about — and update their products to match. A car is really a mirror of its time, and redesigning one is a bet on how we will all live next.",
        summaryJa: "車は機械であると同時に、家族の暮らしを映す文化的存在でもある。日本の自動車メーカーが大型ミニバンを16年ぶりに全面刷新して発表した。全面刷新は高コストで、エンジン・車体・安全・技術を作り直しつつ数年先の家族のニーズを読む必要があり、遅すぎれば古び, 早すぎれば無駄——タイミングが肝心。新型は先進安全、大型画面, 多人数の快適な座席, 電動・ハイブリッド化など現代の家族生活を反映する。あらゆる製品は新世代向けに再構想が要り, 成功する企業は人々の実際の暮らしを観察して製品を更新する。車はその時代を映す鏡だ。",
        quiz: [
          { q: "会社が16年間も全面刷新を待つ理由は？", options: ["刷新は高コストで、将来のニーズを読む必要があるから", "法律で禁止されているから", "誰も車を買わないから"], answer: 0 },
          { q: "新型ミニバンが反映する現代のニーズに含まれないものは？", options: ["先進安全システム", "電動・ハイブリッド化", "馬で引く仕組み"], answer: 2 },
          { q: "本文の広い教訓は？", options: ["製品は人々の暮らしを観察して新世代向けに更新すべき", "製品は変えない方がよい", "デザインは重要でない"], answer: 0 }
        ]
      }
    ]
  },
  {
    date: "2026-07-17",
    passages: [
      {
        id: "d0717-1",
        title: "A Home Electronics Giant Reinvents Itself",
        level: "★★☆",
        genre: "ビジネス",
        text: "Panasonic is a name that once filled living rooms around the world with televisions, cameras, and kitchen appliances. Today, reports say the company is turning its energy toward a very different market: data centers, the giant warehouses of computers that power the internet and artificial intelligence.\nWhy would a maker of home electronics chase such a change? Because markets shift, and companies that do not shift with them fade away. The market for televisions and home appliances is mature and crowded, with thin profits and tough competition from lower-cost rivals. Data centers, by contrast, are booming. The rise of AI has created enormous demand for computing power, and every data center needs reliable electricity, cooling, and energy storage — areas where Panasonic's long experience in batteries and power systems can shine.\nThis kind of reinvention is a recurring theme in business history. Great companies often survive not by doing the same thing forever, but by carrying their core skills into new markets. A firm that once made batteries for laptops can make batteries for cars or data centers. The product changes; the underlying strength remains.\nThe move is not without risk. New markets bring new competitors and new demands. But standing still is often the greater danger. For any business, the story is a useful reminder: your industry may change faster than you expect, and the ability to redeploy your strengths into fresh opportunities can matter more than defending an old position.",
        summaryJa: "かつて世界の家庭をテレビや家電で満たしたパナソニックが、AIとインターネットを支える「データセンター」市場へ軸足を移していると報じられる。成熟し利益の薄い家電市場に対し、AIで急拡大するデータセンターは電力・冷却・蓄電を必要とし、同社の電池・電源技術が活きる。優れた企業は同じことを続けるのではなく、中核の強みを新市場へ持ち込んで生き残る——製品は変わっても土台の強みは残る。業界は予想より速く変わり、強みを再配置する力が古い地位の防衛より重要になりうる。",
        quiz: [
          { q: "パナソニックが力を入れ始めた市場は？", options: ["データセンター", "映画製作", "観光業"], answer: 0 },
          { q: "データセンター市場が有望な理由は？", options: ["AIで computing の需要が急拡大しているから", "家電より簡単だから", "競争がないから"], answer: 0 },
          { q: "本文の教訓は？", options: ["中核の強みを新市場へ再配置する力が重要", "同じ製品を作り続けるべき", "変化は避けるべき"], answer: 0 }
        ]
      },
      {
        id: "d0717-2",
        title: "Building Detectors to Read the Universe",
        level: "★★★",
        genre: "テクノロジー",
        text: "Some of the biggest secrets of the universe are hidden in the faintest of signals — particles and waves so weak that our normal instruments cannot notice them. Scientists have taken an important step toward building a new generation of quantum detectors, devices sensitive enough to catch these whispers from the cosmos.\nWhat makes quantum detectors special is their extraordinary sensitivity. By using the strange rules of quantum physics, they can measure incredibly small amounts of energy or tiny changes in a field. This precision could help answer some of physics' deepest questions: What is dark matter, the invisible substance that makes up most of the universe's mass? Are there particles we have never detected? Such questions have puzzled scientists for decades because the signals involved are almost impossibly faint.\nThe technology is difficult to build. Quantum states are delicate and easily destroyed by heat, vibration, or stray signals, so these detectors often must be cooled to near absolute zero and shielded from the outside world. Each engineering advance that makes them more stable brings real experiments closer.\nThough this research aims at the cosmos, the tools it produces rarely stay in the laboratory. Ultra-sensitive detectors developed for physics have a way of turning up later in medical scanners, navigation systems, and security devices. Curiosity about the universe, again and again, ends up improving technology here on Earth.",
        summaryJa: "宇宙の最大の謎は、通常の機器では捉えられないほど微弱な信号に潜む。科学者は、その「宇宙のささやき」を捉えられる次世代の量子検出器の構築へ重要な一歩を踏み出した。量子物理の性質を使い極めて微小なエネルギーや場の変化を測れるため、暗黒物質や未知の粒子といった難問に迫れる。量子状態は熱や振動に弱く、絶対零度近くまで冷却・遮蔽する必要がある。宇宙を狙う技術だが、超高感度検出器は後に医療スキャナや航法・セキュリティにも応用され、宇宙への好奇心が地上の技術を高めてきた。",
        quiz: [
          { q: "量子検出器の特別な点は？", options: ["極めて微小なエネルギーや場の変化を測れる高感度", "安く作れること", "冷却が不要なこと"], answer: 0 },
          { q: "この検出器で迫れる難問は？", options: ["暗黒物質や未知の粒子", "天気予報", "株価の予測"], answer: 0 },
          { q: "宇宙向け技術の副次効果は？", options: ["医療・航法・セキュリティにも応用される", "宇宙でしか使えない", "何も生まない"], answer: 0 }
        ]
      },
      {
        id: "d0717-3",
        title: "The World's Quiet Shift to Electric Two-Wheelers",
        level: "★★☆",
        genre: "世界情勢",
        text: "When people picture the electric vehicle revolution, they usually imagine cars. But in much of the world, the most important shift is happening on two wheels. A Japanese motorcycle maker is betting on the continued growth of electric scooters and motorcycles in cities, and the reasoning reveals a lot about how global transport is changing.\nIn many countries — across Southeast Asia, India, Africa, and beyond — motorcycles and scooters, not cars, are the main way people get around. They are cheap, easy to park, and perfect for crowded streets. Because there are so many of them, switching these vehicles to electric power could cut air pollution and fuel use dramatically, perhaps even more than switching cars in wealthy nations.\nElectric two-wheelers have real advantages. They are simpler and cheaper than electric cars, their smaller batteries charge quickly, and in some cities riders can swap an empty battery for a full one in seconds at special stations. For crowded, polluted cities, they offer a fast path to cleaner air.\nChallenges remain: building charging or battery-swap networks, keeping prices low enough for ordinary buyers, and ensuring a steady supply of batteries. But the direction is clear. The electric future may arrive first not in the expensive cars of rich countries, but in the millions of small, practical two-wheelers that move the cities of the developing world.",
        summaryJa: "EV革命というと自動車を思い浮かべがちだが、世界の多くの地域では変化は「二輪」で起きている。日本のバイクメーカーが都市の電動スクーター・バイクの成長に賭ける。東南アジアやインド、アフリカでは二輪が主要な移動手段で、数が多いぶん電動化の汚染・燃料削減効果は大きい。電動二輪は電動車より簡単・安価で、小さい電池は素早く充電でき、数秒で電池交換できる都市もある。充電網や価格、電池供給の課題は残るが、電動化の未来はまず途上国都市の実用的な二輪から訪れるかもしれない。",
        quiz: [
          { q: "世界の多くの地域でEV化が進む乗り物は？", options: ["スクーターやバイクなどの二輪", "大型トラック", "飛行機"], answer: 0 },
          { q: "二輪の電動化の効果が大きい理由は？", options: ["数が多く、汚染・燃料削減の効果が大きいから", "高価だから", "誰も乗らないから"], answer: 0 },
          { q: "電動二輪の利点として挙げられていないものは？", options: ["電動車より簡単・安価", "小さい電池が素早く充電できる", "空を飛べる"], answer: 2 }
        ]
      },
      {
        id: "d0717-4",
        title: "Cool Biz: How Japan Fights Summer Heat at Work",
        level: "★★☆",
        genre: "日本",
        text: "Every summer, Japanese offices run an experiment that mixes environmental policy, business culture, and simple common sense. It is called 'Cool Biz,' a campaign that encourages workers to dress lightly and set air conditioners no lower than 28 degrees Celsius, in order to save energy during the hottest months.\nThe idea began years ago as a response to energy shortages, but it has become a normal part of the working year. During Cool Biz season, the strict business suit relaxes. Men leave their jackets and ties at home, lighter shirts are acceptable, and the whole dress code becomes more comfortable. What was once considered too casual for a serious office is now official policy.\nThe benefits go beyond saving electricity. Comfortable workers are often more productive, and lighter clothing reduces the risk of heat-related illness. The campaign also sends a public message: saving energy is a shared responsibility, and small daily choices — a temperature setting, a change of shirt — add up across millions of offices.\nCool Biz is a good example of how culture and policy can work together. A government suggestion alone rarely changes behavior, and neither does personal preference alone. But when an idea fits both the climate and the practical needs of workers, it can quietly reshape a whole country's habits. For visitors and new employees, understanding Cool Biz is a small but useful window into how Japan balances tradition, comfort, and shared goals.",
        summaryJa: "日本の夏の職場では「クールビズ」が定着している。軽装を促し冷房を28度以上に設定して猛暑期の省エネを図る取り組みで、元は電力不足への対応から始まり今や年中行事に。上着やネクタイを外す軽装が公式方針となり、省エネだけでなく生産性向上や熱中症予防にもつながる。政府の呼びかけだけでも個人の好みだけでも行動は変わらないが、気候と働く人の実際的ニーズの双方に合う考えは国全体の習慣を静かに変える。クールビズは伝統・快適さ・共通目標を両立させる日本の一例。",
        quiz: [
          { q: "クールビズの内容は？", options: ["軽装を促し冷房を28度以上に設定して省エネする", "冬に暖房を強くする", "残業を増やす"], answer: 0 },
          { q: "クールビズの効果として挙げられていないものは？", options: ["省エネ", "生産性向上や熱中症予防", "売上の倍増"], answer: 2 },
          { q: "本文が示す教訓は？", options: ["気候と働く人のニーズに合う考えは国の習慣を変える", "政府の命令だけで十分", "習慣は変えられない"], answer: 0 }
        ]
      },
      {
        id: "d0717-5",
        title: "The Science of Staying Cool",
        level: "★★☆",
        genre: "科学・カルチャー",
        text: "As summers grow hotter, understanding how the human body handles heat is more useful than ever. Your body is a remarkable temperature-control machine, working constantly to keep its core near 37 degrees Celsius. When you get too hot, it has two main tools: it sends more blood to the skin to release heat, and it produces sweat, which cools you as it evaporates.\nThis system is powerful but has limits. Sweating only cools you if the sweat can evaporate, which is why humid days feel so much worse than dry ones — the air is already full of moisture, so sweat stays on the skin and does little good. Heavy activity, poor hydration, and high humidity can overwhelm the body's cooling, leading to heat exhaustion or, in serious cases, heatstroke.\nScience points to simple, effective habits. Drinking water regularly keeps sweat production going. Loose, light-colored clothing lets air move and reflects sunlight. Resting during the hottest hours reduces the heat your body must fight. And a fan or air conditioner helps sweat evaporate and moves warm air away.\nInterestingly, humans are among the best natural coolers in the animal kingdom. Our ability to sweat across nearly the whole body let our ancestors stay active in the heat when other animals had to rest. But that ancient advantage still needs support. Working with your body's cooling system, rather than against it, is the smartest way to stay safe and comfortable through a hot summer.",
        summaryJa: "夏が暑くなる中、体が熱をどう扱うかの理解が役立つ。人体は核心温を約37度に保つ精巧な装置で、暑いと皮膚に血流を送り、汗の蒸発で冷やす。だが汗は蒸発してこそ冷え、湿度の高い日は汗が残り効きにくい。激しい活動・水分不足・高湿度は冷却を上回り熱中症を招く。こまめな水分補給、ゆったりした明色の服、暑い時間帯の休息、扇風機やエアコンが有効。全身で汗をかけるヒトは動物界でも屈指の「冷却上手」だが、その仕組みに逆らわず協力することが安全で快適な夏の鍵。",
        quiz: [
          { q: "体が熱を逃がす主な方法は？", options: ["皮膚への血流増加と汗の蒸発", "呼吸を止めること", "食事を増やすこと"], answer: 0 },
          { q: "湿度の高い日が暑く感じる理由は？", options: ["汗が蒸発しにくく冷却が効かないから", "気温が必ず高いから", "風が強いから"], answer: 0 },
          { q: "暑さ対策として挙げられていないものは？", options: ["こまめな水分補給", "ゆったりした明色の服", "厚手の黒い服を着る"], answer: 2 }
        ]
      }
    ]
  }
] };
