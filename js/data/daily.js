/* デイリー配信リーディング
 * 毎朝の自動ルーチンがこのファイルを丸ごと上書き生成する（直近 7 日分を保持）。
 * days は日付降順。各 day = { date: "YYYY-MM-DD", passages: [readingPassages と同スキーマ + genre] }
 * このファイル以外は手書きデータであり、ルーチンは触らない。
 */
window.KE_DATA = window.KE_DATA || {};

KE_DATA.dailyReading = { days: [
    {
    date: "2026-08-14",
    passages: [
      {
        id: "d0814-1",
        title: "Price Wars in Artificial Intelligence",
        level: "★★★",
        genre: "ビジネス",
        text: "When several companies sell a similar service, they often compete on price — and the market for artificial intelligence is no exception. Recently, some AI companies have been cutting the prices they charge to use their systems, while others have raised theirs. Behind these moves lies a fierce battle to win customers in one of the fastest-growing industries in the world.\nWhy cut prices? Lowering the cost of using an AI service can attract more customers, especially businesses that use these tools in large amounts. If a company can offer similar quality for less money, users may switch to it. Winning many customers now can help a company grow and stay ahead, even if profits are thin at first.\nBut cutting prices is risky. Building and running AI systems is enormously expensive, requiring powerful computers and huge amounts of electricity. If prices fall too far, companies may struggle to cover their costs. Some firms instead raise prices, betting that customers will pay more for better speed or quality.\nSpeed itself has become a weapon. A service that answers faster can be more useful, so companies compete not only on price but on how quickly their systems respond.\nFor customers, this competition is mostly good news: more choice, better tools, and often lower prices. For the companies, it is a high-stakes game. In a young and booming market, each must decide whether to chase customers with low prices or profit with higher ones — a classic business question, now playing out at the cutting edge of technology.",
        summaryJa: "複数の企業が似たサービスを売るとき、しばしば価格で競う——AIの市場も例外ではない。最近、一部のAI企業は自社システムの利用料金を引き下げ、別の企業は引き上げている。こうした動きの背後には、世界で最も急成長する産業の一つで顧客を勝ち取る激しい戦いがある。なぜ値下げするのか。AIサービスの利用コストを下げれば、特にこうした道具を大量に使う企業など、より多くの顧客を惹きつけられる。似た品質をより安く提供できれば、利用者は乗り換えるかもしれない。今多くの顧客を勝ち取ることは、たとえ当初の利益が薄くても、企業の成長と先行維持を助けうる。だが値下げは危険だ。AIシステムの構築と運用は莫大に高価で、強力なコンピューターと大量の電力を要する。価格が下がりすぎれば、企業はコストを賄うのに苦しみうる。一部の企業は代わりに、顧客がより良い速度や品質にはより多く払うと賭けて値上げする。速度そのものも武器になった。より速く答えるサービスはより有用でありうるので、企業は価格だけでなく、システムがどれだけ速く応答するかでも競う。顧客にとって、この競争はおおむね朗報だ——選択肢が増え、道具が良くなり、しばしば価格も下がる。企業にとっては高い賭けだ。若く活況の市場で、各社は低価格で顧客を追うか、高価格で利益を得るかを決めねばならない——古典的な経営の問いが、今や技術の最前線で繰り広げられている。",
        quiz: [
          { q: "AI企業が値下げする狙いは？", options: ["より多くの顧客を惹きつけ成長し先行すること", "コストを増やすこと", "顧客を減らすこと"], answer: 0 },
          { q: "値下げが危険な理由は？", options: ["AIの運用は高価で価格が下がりすぎるとコストを賄えない", "電気が無料だから", "顧客が嫌がるから"], answer: 0 },
          { q: "価格以外に企業が競う要素は？", options: ["システムの応答の速さ", "建物の色", "社名の長さ"], answer: 0 }
        ]
      },
      {
        id: "d0814-2",
        title: "Robotaxis Come to the City",
        level: "★★☆",
        genre: "テクノロジー",
        text: "Imagine calling a taxi with your phone, and when it arrives, there is no driver at the wheel. This is becoming real. Companies are preparing to put thousands of self-driving taxis, or 'robotaxis,' onto the roads of European cities, working together with popular ride-hailing apps to reach passengers.\nHow does it work? A robotaxi uses cameras, sensors, and computers to see the road, follow traffic rules, and drive itself. To find customers, some robotaxi companies are teaming up with ride-hailing services people already use. When you request a ride, the app might send a self-driving car instead of a human driver.\nWhy team up with an app? Building the self-driving technology is one challenge; finding passengers is another. A popular app already has millions of users, a payment system, and a way to match riders with cars. By joining forces, a robotaxi maker gets instant access to customers, while the app can offer a new kind of service.\nThere are still hurdles. Self-driving cars must prove they are safe in busy, unpredictable streets. Rules differ from country to country, and some passengers may feel nervous without a driver. Trust takes time to build.\nStill, the change could be significant. Robotaxis might one day make travel cheaper and reduce the need to own a car. For now, each city that welcomes them becomes a real-world test — a place where a technology once seen only in science fiction quietly pulls up to the curb, ready to take passengers into an autonomous future.",
        summaryJa: "スマホでタクシーを呼び、着いたら運転席に誰もいない——そんな場面を想像してほしい。これが現実になりつつある。企業は、何千台もの自動運転タクシー「ロボタクシー」を欧州の都市の道路に投入する準備を進め、人気の配車アプリと協力して乗客に届こうとしている。どう機能するのか。ロボタクシーはカメラ・センサー・コンピューターを使って道路を見て、交通規則に従い、自ら運転する。顧客を見つけるため、一部のロボタクシー企業は、人々が既に使う配車サービスと組んでいる。乗車を頼むと、アプリが人間の運転手の代わりに自動運転車を送るかもしれない。なぜアプリと組むのか。自動運転技術を作るのは一つの挑戦、乗客を見つけるのは別の挑戦だ。人気アプリには既に何百万もの利用者、決済の仕組み、乗客と車を結ぶ方法がある。力を合わせれば、ロボタクシーの作り手は顧客に即座にアクセスでき、アプリは新種のサービスを提供できる。まだ障害もある。自動運転車は、混雑し予測しにくい街路で安全だと証明せねばならない。規則は国ごとに異なり、運転手がいないと不安を感じる乗客もいる。信頼は築くのに時間がかかる。それでも変化は大きくなりうる。ロボタクシーはいつか移動を安くし、車を所有する必要を減らすかもしれない。今のところ、それを迎える各都市が現実の試験場になる——かつてSFでしか見られなかった技術が、静かに縁石に寄せて、乗客を自律の未来へ乗せる準備をする場所だ。",
        quiz: [
          { q: "ロボタクシーが自ら運転する仕組みは？", options: ["カメラ・センサー・コンピューターで道路を見て規則に従う", "運転手が遠隔で運転する", "レールの上を走る"], answer: 0 },
          { q: "ロボタクシー企業が配車アプリと組む理由は？", options: ["既存の利用者・決済・マッチングにすぐアクセスできる", "技術が不要になるから", "車を隠すため"], answer: 0 },
          { q: "本文が挙げる障害は？", options: ["安全の証明・国ごとの規則の違い・乗客の不安", "車が速すぎること", "道路が無いこと"], answer: 0 }
        ]
      },
      {
        id: "d0814-3",
        title: "The Long Journey of Everyday Things",
        level: "★★★",
        genre: "世界情勢",
        text: "Look closely at an ordinary object — a phone, a shirt, or a chocolate bar — and you may be holding the work of many countries. In today's connected world, the things we use every day are often made through long, complex journeys that cross borders many times before reaching a shop near us.\nHow does this happen? A single product may be designed in one country, using materials dug from the ground in another. Its parts might be made in several places, then shipped somewhere else to be put together. Finally, it travels to stores around the world. This web of steps is called a global supply chain.\nWhy make things this way? Different countries have different strengths — some have raw materials, some have skilled workers, some have advanced factories. By using the best of each, companies can make goods more cheaply and efficiently than any single country could alone. The result is products that are better and often less expensive.\nBut such long chains can be fragile. A storm, a closed port, a shortage, or a political dispute in one country can delay products all over the world. Recent years have shown how quickly a problem in one place can ripple across the globe.\nUnderstanding supply chains helps make sense of the news. When prices rise or shelves go empty, the cause is often far away. Behind almost everything we own is a hidden, worldwide network of people and places, quietly working together to bring the world's goods to our hands.",
        summaryJa: "ありふれた物——携帯・シャツ・板チョコ——をよく見ると、多くの国の仕事を手にしているかもしれない。今日のつながった世界で、私たちが毎日使う物は、近くの店に届く前に何度も国境を越える、長く複雑な旅を経て作られることが多い。どうしてそうなるのか。一つの製品が、ある国で設計され、別の国の地中から掘り出した材料を使うことがある。その部品はいくつかの場所で作られ、別のどこかへ運ばれて組み立てられる。最後に、世界中の店へ旅する。この工程の網は「グローバル・サプライチェーン（世界的な供給網）」と呼ばれる。なぜこう作るのか。国ごとに強みが違う——材料を持つ国、熟練労働者のいる国、先端工場のある国。それぞれの最良を使うことで、企業はどの一国が単独でできるより安く効率的に物を作れる。結果として、より良く、しばしばより安い製品ができる。だがこうした長い連鎖はもろくなりうる。ある国の嵐・閉ざされた港・不足・政治的対立が、世界中の製品を遅らせうる。近年は、一か所の問題がいかに速く世界へ波及するかを示してきた。供給網を理解すると、ニュースが腑に落ちる。価格が上がったり棚が空になったりするとき、原因はしばしば遠くにある。私たちが持つほぼ全ての物の背後には、世界の品を私たちの手に運ぶため静かに協働する、人と場所の隠れた世界的な網があるのだ。",
        quiz: [
          { q: "「グローバル・サプライチェーン」とは？", options: ["国境を越えて物を作り届ける工程の網", "一国だけの工場", "店の名前"], answer: 0 },
          { q: "各国の強みを使って作る利点は？", options: ["より安く効率的に、より良い製品を作れる", "製品が必ず高くなる", "一国で全て作れる"], answer: 0 },
          { q: "長い供給網がもろい理由は？", options: ["一か所の問題が世界中の製品を遅らせうる", "物が丈夫すぎるから", "国が一つだから"], answer: 0 }
        ]
      },
      {
        id: "d0814-4",
        title: "Why Japan Lives So Long",
        level: "★★☆",
        genre: "日本",
        text: "Japan is famous for something remarkable: its people live, on average, among the longest lives in the world. Many Japanese reach their eighties, nineties, and beyond, and the country has a large number of people over one hundred years old. Why do people in Japan tend to live so long?\nOne important reason is diet. Traditional Japanese meals include a lot of fish, vegetables, rice, and soy foods, with smaller portions than in many countries. This kind of eating is generally low in unhealthy fats and rich in nutrients, which is good for the heart and body over a lifetime.\nHealthcare also plays a big part. Japan has a system that makes it easy for people to see a doctor, so illnesses can be found and treated early. Regular check-ups help people stay healthy as they age.\nDaily habits matter too. Many people walk or cycle as part of their routine, staying active without needing a gym. Strong social ties — staying connected with family, friends, and community — are also linked to longer, healthier lives.\nOf course, long life brings challenges. As more people grow old and fewer babies are born, Japan must find ways to care for its aging population and support them well.\nStill, Japan's long lives hold useful lessons for everyone. Good food, regular movement, medical care, and close relationships all seem to help. Living long is not the result of a single secret, but of many small, healthy habits, repeated patiently over many years.",
        summaryJa: "日本はある驚くべきことで有名だ——その人々は平均して、世界で最も長い部類の人生を生きる。多くの日本人が80代・90代、さらにその先に達し、100歳を超える人も多い。なぜ日本の人々はそれほど長生きしがちなのか。重要な理由の一つは食事だ。伝統的な和食は魚・野菜・米・大豆食品を多く含み、多くの国より一人前が小さい。この食べ方は概して不健康な脂肪が少なく栄養に富み、生涯を通じて心臓と体に良い。医療も大きな役割を果たす。日本には医者にかかりやすい仕組みがあり、病気を早く見つけて治療できる。定期健診は、年を重ねても健康を保つ助けになる。日々の習慣も重要だ。多くの人が日課の一部として歩いたり自転車に乗ったりし、ジムを要さず活動的でいる。強い社会的つながり——家族・友人・地域とつながり続けること——も、より長く健康な人生に結びつく。もちろん長寿は課題も生む。より多くの人が老い、生まれる赤ちゃんが減る中、日本は高齢の人々を世話し、よく支える方法を見つけねばならない。それでも日本の長い人生は、誰にとっても有益な教訓を持つ。良い食事、規則的な運動、医療、親密な関係——すべてが助けになるようだ。長生きは一つの秘密の結果でなく、多くの小さな健康的な習慣を、長年忍耐強く繰り返した結果なのだ。",
        quiz: [
          { q: "日本人が長生きしがちな理由の一つは？", options: ["魚・野菜・米・大豆中心で量が控えめな食事", "甘い物ばかりの食事", "運動を全くしないこと"], answer: 0 },
          { q: "医療が長寿に果たす役割は？", options: ["医者にかかりやすく病気を早く見つけ治療できる", "病院が無いこと", "健診をしないこと"], answer: 0 },
          { q: "本文の結論は？", options: ["長生きは多くの小さな健康習慣の積み重ねの結果", "一つの秘密の薬のおかげ", "運だけで決まる"], answer: 0 }
        ]
      },
      {
        id: "d0814-5",
        title: "The True Colors of Ancient Creatures",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "When we picture dinosaurs or other ancient animals, we usually imagine dull greens and browns. But how do we really know what color they were? Recently, scientists studying a fossil more than one hundred million years old found evidence that one flying reptile may have shimmered with bright, iridescent greens and pinks — colors that shine and shift like those on a soap bubble or a beetle's shell.\nHow can anyone know the color of an animal that died so long ago? The answer lies in tiny structures. Colors in feathers, skin, and shells often come not only from pigments but from the microscopic shape of the material itself. Certain shapes bend light in ways that create shimmering, changing colors. Amazingly, traces of these tiny structures can sometimes survive in fossils.\nBy examining these structures under powerful microscopes and comparing them to living animals, scientists can make careful guesses about an ancient creature's colors. It is like reading a faint message left behind in stone.\nWhy does color matter to science? Color can tell us how an animal lived — whether it used bright shades to attract mates, to warn enemies, or to blend in. Learning about color helps bring extinct animals to life and reveals how they behaved.\nThe discovery reminds us that the ancient world may have been far more colorful than the grey fossils suggest. With patient study and clever tools, scientists are slowly repainting the past — showing that creatures long gone may once have glittered brilliantly in the light of a very different world.",
        summaryJa: "恐竜や他の古代の動物を思い描くとき、私たちはたいてい地味な緑や茶色を想像する。だが本当は、彼らが何色だったのかをどう知るのか。最近、1億年以上前の化石を研究する科学者が、ある飛ぶ爬虫類が、明るく虹色に輝く緑やピンク——シャボン玉や甲虫の殻のように光り、移ろう色——できらめいていたかもしれない証拠を見つけた。そんなに昔に死んだ動物の色を、どうして知りうるのか。答えは微細な構造にある。羽・皮膚・殻の色は、しばしば色素だけでなく、材料そのものの顕微鏡的な形から生まれる。特定の形は、きらめき移ろう色を生むように光を曲げる。驚くことに、こうした微細な構造の痕跡が、化石に残ることがある。強力な顕微鏡でこれらの構造を調べ、生きた動物と比べることで、科学者は古代の生き物の色について慎重な推測ができる。石に残されたかすかな伝言を読むようなものだ。なぜ色が科学に重要か。色は、動物がどう生きたか——明るい色合いで配偶者を惹きつけたか、敵を警告したか、周囲に紛れたか——を教えうる。色を知ることは、絶滅した動物を生き生きとよみがえらせ、その振る舞いを明かす助けになる。この発見は、古代の世界が灰色の化石が示すよりはるかに色彩豊かだったかもしれないことを思い出させる。忍耐強い研究と巧妙な道具で、科学者は少しずつ過去を描き直している——遠く消えた生き物が、かつてまったく異なる世界の光の中できらびやかに輝いていたかもしれないことを示して。",
        quiz: [
          { q: "科学者が古代の動物の色を知る手がかりは？", options: ["色を生む微細な構造の痕跡が化石に残ること", "当時の絵画", "文字の記録"], answer: 0 },
          { q: "羽や殻の色が生まれる要因は？", options: ["色素だけでなく材料の顕微鏡的な形", "温度だけ", "音"], answer: 0 },
          { q: "色が科学に重要な理由は？", options: ["動物がどう生きたか（求愛・警告・擬態）を教えうる", "色は無意味だから", "化石を壊すから"], answer: 0 }
        ]
      }
    ]
  },
    {
    date: "2026-08-13",
    passages: [
      {
        id: "d0813-1",
        title: "Why Online Giants Open Real Shops",
        level: "★★☆",
        genre: "ビジネス",
        text: "It might seem strange for a company famous for the internet to open a physical store, yet that is exactly what is happening. Recently, a major technology company opened its first flagship store in Japan, in a fashionable district of Tokyo. Why would a business built online want a real shop made of glass and concrete?\nOne reason is experience. Online, customers can read about a product, but they cannot touch it. In a physical store, people can hold a device, try its features, and ask questions face to face. This hands-on experience can build trust and excitement that a website alone cannot create.\nAnother reason is the brand. A beautiful flagship store in a famous shopping area is like a giant advertisement. Even people who do not buy anything see the store, remember the brand, and may feel it is important and reliable. The building itself sends a message.\nStores also offer support. Customers can bring in broken devices, get advice, or learn how to use new features. Good service in person can turn a buyer into a loyal, long-term customer.\nOf course, physical stores are expensive to build and run, so companies open them carefully, usually in busy, high-profile locations.\nThe trend shows that online and offline business are not enemies but partners. Even in a digital age, people still value real places, real objects, and real human help. A well-designed store lets an online company meet its customers in person — and turn clicks into a lasting relationship.",
        summaryJa: "インターネットで有名な企業が実店舗を開くのは奇妙に見えるかもしれないが、まさにそれが起きている。最近、ある大手技術企業が、東京のおしゃれな地区に日本初の旗艦店を開いた。オンラインで築かれた事業が、なぜガラスとコンクリートの実店舗を欲しがるのか。理由の一つは体験だ。オンラインでは製品について読めるが、触れられない。実店舗では、人は端末を手に取り、機能を試し、対面で質問できる。この実際に触れる体験は、ウェブサイトだけでは生めない信頼と高揚を築きうる。もう一つの理由はブランドだ。有名な商店街の美しい旗艦店は、巨大な広告のようなものだ。何も買わない人でも店を見て、ブランドを覚え、重要で信頼できると感じるかもしれない。建物自体がメッセージを送る。店はサポートも提供する。客は壊れた端末を持ち込み、助言を得て、新機能の使い方を学べる。対面の良いサービスは、買い手を忠実で長期の顧客に変えうる。もちろん実店舗は建設も運営も高価なので、企業は普通、賑やかで注目される場所に慎重に開く。この流れは、オンラインとオフラインの事業が敵でなく相棒であることを示す。デジタル時代でも、人はなお本物の場所・本物の品・本物の人の助けを大切にする。よく設計された店は、オンライン企業が顧客と対面で会い、クリックを永続的な関係に変えることを可能にする。",
        quiz: [
          { q: "オンライン企業が実店舗を開く理由の一つは？", options: ["客が製品を手に取り試せる体験を提供できる", "店の方が安いから", "ウェブが使えないから"], answer: 0 },
          { q: "旗艦店がブランドに与える効果は？", options: ["巨大な広告となりブランドを覚えさせる", "客を追い返す", "製品を隠す"], answer: 0 },
          { q: "本文の結論は？", options: ["オンラインとオフラインは敵でなく相棒", "実店舗は不要である", "オンラインはもう終わった"], answer: 0 }
        ]
      },
      {
        id: "d0813-2",
        title: "Mining the Ocean Floor",
        level: "★★★",
        genre: "テクノロジー",
        text: "Far below the surface of the sea, in cold and total darkness, lie valuable metals that the modern world badly needs. Recently, plans were announced for one of the deepest undersea mines ever attempted, aiming to collect rare earth elements from the ocean floor. These metals are essential for many technologies, and reaching them is a huge engineering challenge.\nWhy mine the deep sea? Rare earth elements are used in magnets, motors, batteries, wind turbines, and electronics. They are found on land in only a few places, so countries are searching for new sources. The deep ocean floor holds large amounts — enough, some say, to meet industrial demand for a very long time.\nBut mining thousands of meters underwater is extremely difficult. The pressure is crushing, there is no light, and machines must operate far from any human hand. Engineers must design robots and systems that can dig, collect, and lift material to the surface, all while working reliably in one of the harshest places on Earth.\nThere are serious concerns too. The deep sea is home to strange and little-understood life, and mining could damage these fragile ecosystems. Scientists warn that we must understand the risks before disturbing a world we know so little about.\nThe project shows both human ingenuity and difficult choices. We have the technology to reach places once thought impossible, but with that power comes responsibility. As we search the deep ocean for the metals of the future, we must also decide how to protect the mysterious world we find there.",
        summaryJa: "海面のはるか下、冷たく完全な暗闇の中に、現代世界が切実に必要とする貴重な金属が眠っている。最近、これまでで最も深い海底鉱山の一つの計画が発表され、海底からレアアース（希土類元素）を集めることを目指す。これらの金属は多くの技術に不可欠で、それに到達するのは巨大な工学的挑戦だ。なぜ深海を採掘するのか。レアアースは磁石・モーター・電池・風力タービン・電子機器に使われる。陸上ではわずかな場所にしかないため、各国は新たな供給源を探している。深海の海底は大量に蓄え、一部は非常に長い間、産業需要を満たすのに十分だと言う。だが水中数千メートルでの採掘は極めて難しい。圧力は押し潰すほどで、光はなく、機械は人の手から遠く離れて動かねばならない。技術者は、地球で最も過酷な場所の一つで確実に働きつつ、掘り・集め・材料を海面へ持ち上げるロボットとシステムを設計せねばならない。深刻な懸念もある。深海は奇妙でほとんど理解されていない生命の住処で、採掘はこの脆い生態系を損ないうる。科学者は、ほとんど知らない世界をかき乱す前に、リスクを理解せねばならないと警告する。この事業は人間の創意と難しい選択の双方を示す。かつて不可能と思われた場所に到達する技術を持つが、その力には責任が伴う。未来の金属を求めて深海を探るとき、私たちはそこで見つける神秘の世界をどう守るかも決めねばならない。",
        quiz: [
          { q: "なぜ深海を採掘しようとするのか？", options: ["技術に不可欠なレアアースが大量にあるから", "水が欲しいから", "魚を採るため"], answer: 0 },
          { q: "深海採掘が難しい理由は？", options: ["高い圧力・暗闇で機械が人の手から遠く働くから", "浅すぎるから", "暖かすぎるから"], answer: 0 },
          { q: "本文が挙げる懸念は？", options: ["脆い深海の生態系を損ないうる", "金属が無価値なこと", "海が浅くなること"], answer: 0 }
        ]
      },
      {
        id: "d0813-3",
        title: "The Rise of a Global Language",
        level: "★★★",
        genre: "世界情勢",
        text: "Around the world, when people from different countries meet, they often need a shared language to understand each other. More and more, that language is English. A business meeting between a German and a Japanese company, a science conference, or a group of tourists from many nations — all may use English as a common tool, even when it is no one's first language.\nWhy did English spread so widely? History and trade played a large part, and today English is the main language of international business, science, aviation, and the internet. Because so many people already study it, learning English opens doors to jobs, education, and communication across borders.\nA shared global language brings real benefits. It lets a doctor in one country read research from another, helps businesses trade, and allows travelers to find their way. In a connected world, being able to communicate widely is a valuable skill.\nBut there are concerns too. As English grows, some worry that smaller languages may be used less, and that a piece of each culture could be lost with them. Many people believe it is important to learn English while also protecting one's own language and traditions.\nInterestingly, global English no longer belongs only to countries where it began. It is shaped by millions of speakers worldwide, each adding their own accent and style.\nFor learners, this is encouraging. English is not about sounding perfect, but about connecting with others. Every new phrase learned is another bridge to the wider world — and to the many people waiting to be understood.",
        summaryJa: "世界中で、異なる国の人々が出会うとき、互いを理解するために共有する言語がしばしば必要になる。ますますその言語は英語だ。ドイツと日本の企業の商談、科学会議、多くの国から来た観光客の一団——すべてが、誰の母語でなくても、英語を共通の道具として使いうる。なぜ英語はそれほど広まったのか。歴史と貿易が大きな役割を果たし、今日、英語は国際ビジネス・科学・航空・インターネットの主要言語だ。既に多くの人が学んでいるため、英語を学ぶことは、国境を越えた仕事・教育・意思疎通への扉を開く。共有の世界言語は本当の利益をもたらす。ある国の医師が別の国の研究を読めるようにし、企業の取引を助け、旅行者が道を見つけられるようにする。つながった世界で、広く意思疎通できることは価値ある技能だ。だが懸念もある。英語が広がるにつれ、より小さな言語が使われなくなり、それとともに各文化の一部が失われうると心配する人もいる。多くの人は、自分の言語や伝統を守りつつ英語を学ぶことが重要だと信じる。興味深いことに、世界の英語はもはや、それが始まった国だけのものではない。世界中の何百万もの話者に形づくられ、各自が独自の訛りとスタイルを加える。学習者には、これは励みだ。英語は完璧に聞こえることでなく、他者とつながることだ。学んだ新しい表現の一つ一つが、より広い世界——そして理解されるのを待つ多くの人々——への、もう一つの橋なのだ。",
        quiz: [
          { q: "異なる国の人々が共通の道具として使うことが増えている言語は？", options: ["英語", "どの言語でもない", "数字だけ"], answer: 0 },
          { q: "共有の世界言語の利益は？", options: ["他国の研究を読めたり取引や旅行を助けたりする", "文化を消すこと", "移動を止めること"], answer: 0 },
          { q: "本文が学習者に伝えることは？", options: ["英語は完璧さでなく他者とつながること", "完璧に話せねば無意味", "英語は学ぶ必要がない"], answer: 0 }
        ]
      },
      {
        id: "d0813-4",
        title: "Japan's Cooling Summer Foods",
        level: "★★☆",
        genre: "日本",
        text: "Japanese summers are hot and humid, and over the centuries people have developed clever, delicious ways to cool down through food. When the weather is at its hottest, certain dishes appear on tables and at festivals across the country, each designed to bring a feeling of coolness and refreshment.\nOne favorite is kakigori, or shaved ice. Fine, fluffy ice is piled into a mountain and topped with sweet, colorful syrups — strawberry, green tea, lemon, and many more. Sold at festivals and shops, it is a bright, icy treat that both children and adults love on a hot afternoon.\nAnother summer classic is somen, very thin noodles served cold. They are often eaten with a light dipping sauce and simple toppings. In a playful tradition called nagashi-somen, the noodles slide down a channel of running water, and diners catch them with chopsticks as they pass — a cool and fun way to eat.\nThese foods are about more than taste. Cold dishes help the body feel cooler, and their light flavors are easy to enjoy even when the heat takes away one's appetite. Eating them is also part of the rhythm of the season, a small ritual that marks the arrival of summer.\nFood, in this way, becomes a gentle answer to the weather. Instead of only fighting the heat with machines, people also welcome it with special dishes. A bowl of shaved ice or cold noodles turns a hot day into something to enjoy — proof that even summer's discomforts can be met with a little pleasure and tradition.",
        summaryJa: "日本の夏は暑く湿気が多く、何世紀もかけて人々は食べ物で涼をとる巧みでおいしい方法を編み出してきた。天気が最も暑いとき、涼しさと爽やかさをもたらすよう作られた特定の料理が、全国の食卓や祭りに現れる。人気の一つはかき氷だ。細かくふわふわの氷が山盛りにされ、甘く色とりどりのシロップ——いちご・抹茶・レモンなど——がかけられる。祭りや店で売られ、暑い午後に子供も大人も愛する明るく冷たい一品だ。もう一つの夏の定番はそうめん、冷たく供される非常に細い麺だ。しばしば軽いつゆと簡素な薬味で食べる。流しそうめんという遊び心ある慣わしでは、麺が流れる水の樋を滑り下り、食べる人が通り過ぎるのを箸で捕まえる——涼しく楽しい食べ方だ。これらの食べ物は味以上のものだ。冷たい料理は体を涼しく感じさせ、その軽い味は、暑さで食欲が失せるときでも楽しみやすい。食べることは季節のリズムの一部でもあり、夏の到来を告げる小さな儀式だ。こうして食べ物は天気への穏やかな答えになる。機械だけで暑さと闘う代わりに、人々は特別な料理でそれを迎えもする。かき氷や冷たい麺の一杯が、暑い日を楽しめるものに変える——夏の不快さでさえ、少しの喜びと伝統で迎えられる証だ。",
        quiz: [
          { q: "かき氷とはどんな食べ物か？", options: ["細かい氷に甘いシロップをかけた冷たい一品", "温かいスープ", "焼いた肉"], answer: 0 },
          { q: "流しそうめんとは？", options: ["流れる水を滑る麺を箸で捕まえて食べる慣わし", "麺を焼く方法", "麺を売る店"], answer: 0 },
          { q: "夏の冷たい料理が味以上に持つ意味は？", options: ["体を涼しく感じさせ季節のリズムを告げる", "体を温めること", "食欲を無くすこと"], answer: 0 }
        ]
      },
      {
        id: "d0813-5",
        title: "Mysterious Lights Above the Storm",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "One night, people in Japan reported seeing a strange red light stretching upward across the sky. It was not a UFO or a trick of the eyes, but a rare and beautiful natural event called a 'sprite' — a brief flash of light that appears high above thunderstorms, far above the clouds we usually see.\nWhat exactly is a sprite? Everyone knows lightning, which flashes between clouds or down to the ground. Sprites are different. They occur much higher up, in the thin air near the edge of space, and they often glow red rather than white. They are triggered by powerful lightning in the storm below, but they leap upward instead of down.\nWhy are sprites so hard to see? They last only a tiny fraction of a second and appear very high in the sky, usually far from the observer. For a long time, pilots reported strange flashes, but scientists could not easily study them. Only with modern high-speed cameras have we begun to capture and understand these events.\nStudying sprites teaches us about the upper atmosphere, a region that is difficult to reach and still full of mysteries. Understanding how energy moves through it helps scientists learn more about our planet's weather and the edge of space.\nThe sighting is a reminder that wonders can appear in the everyday sky. Above an ordinary thunderstorm, for a single instant, nature paints a red flash most people never see. To notice it is to be reminded how much beauty and mystery still hang quietly above our heads.",
        summaryJa: "ある夜、日本の人々が、空を上へと伸びる奇妙な赤い光を見たと報告した。UFOでも目の錯覚でもなく、「スプライト」と呼ばれる稀で美しい自然現象だった——雷雨のはるか上、普段見る雲よりずっと高くに現れる、一瞬の光の閃きだ。スプライトとは正確には何か。誰もが、雲の間や地面へ光る稲妻を知っている。スプライトは違う。ずっと高く、宇宙の縁に近い薄い空気の中で起き、白でなく赤く輝くことが多い。下の嵐の強力な雷に引き起こされるが、下でなく上へ跳ね上がる。なぜスプライトはそれほど見えにくいのか。ほんの一瞬しか続かず、空の非常に高いところに、普通は観測者から遠く現れる。長い間、操縦士が奇妙な閃光を報告したが、科学者は容易には研究できなかった。現代の高速度カメラがあって初めて、私たちはこうした現象を捉え理解し始めた。スプライトの研究は、到達が難しく今も謎に満ちた領域である上層大気について教えてくれる。そこをエネルギーがどう動くかを理解することは、地球の天気や宇宙の縁についてより多くを学ぶ助けになる。この目撃は、日々の空にも驚異が現れうることを思い出させる。ありふれた雷雨の上で、ただ一瞬、自然はほとんどの人が見ない赤い閃光を描く。それに気づくことは、私たちの頭上に、どれほど多くの美と神秘が今も静かに漂っているかを思い出すことだ。",
        quiz: [
          { q: "「スプライト」とは何か？", options: ["雷雨のはるか上に現れる一瞬の光", "UFO", "街の照明"], answer: 0 },
          { q: "スプライトが普通の稲妻と違う点は？", options: ["ずっと高くで起き、上へ跳ね赤く輝くことが多い", "地面に落ちること", "音が非常に大きいこと"], answer: 0 },
          { q: "スプライトの研究が教えてくれるものは？", options: ["謎に満ちた上層大気について", "海の深さ", "地下の金属"], answer: 0 }
        ]
      }
    ]
  },
    {
    date: "2026-08-12",
    passages: [
      {
        id: "d0812-1",
        title: "From the Lab to the Market",
        level: "★★★",
        genre: "ビジネス",
        text: "Some of today's most exciting companies did not begin in a boardroom, but in a university laboratory. When researchers make a discovery — a new material, a clever robot, or a better way to make medicine — they sometimes start a company to turn that idea into a real product. These new firms, often called university 'spinouts,' are becoming an important source of innovation, including in Japan.\nWhy do discoveries need companies? A great idea in a research paper does not automatically help anyone. To reach the world, it must be developed, tested, manufactured, and sold — work that requires money, staff, and business skills. By founding a company, researchers can raise money from investors and build a team to bring their invention to life.\nThis path is not easy. Scientists are experts in their field, but running a business requires very different skills — managing people, finding customers, and handling money. Many spinouts fail, and even successful ones take years to grow. Support from universities, investors, and experienced managers can make a big difference.\nWhen these companies succeed, everyone can benefit. They create jobs, bring useful new products to market, and help a country stay competitive in advanced fields such as robotics, biotechnology, and clean energy.\nThe rise of university spinouts shows how closely knowledge and business are linked. A discovery is only the beginning. Turning it into something people can actually use is a long journey — and the companies that make that journey help carry the fruits of research from the quiet lab into everyday life.",
        summaryJa: "今日の最も刺激的な企業のいくつかは、役員会議室でなく大学の研究室で生まれた。研究者が発見をしたとき——新素材、巧妙なロボット、より良い薬の作り方——その着想を現実の製品に変えるため会社を興すことがある。しばしば大学「スピンアウト」と呼ばれるこうした新会社は、日本を含め、革新の重要な源になりつつある。なぜ発見に会社が要るのか。論文の中の素晴らしい着想は、自動的に誰かを助けはしない。世界に届くには、開発・試験・製造・販売されねばならず、それにはお金・人材・経営技能が要る。会社を設立すれば、研究者は投資家から資金を集め、発明を形にするチームを築ける。この道は容易ではない。科学者は専門分野の達人だが、事業運営には全く異なる技能——人の管理、顧客の獲得、お金の扱い——が要る。多くのスピンアウトは失敗し、成功するものも成長に何年もかかる。大学・投資家・経験ある経営者の支援が大きな違いを生みうる。こうした企業が成功すれば、皆が恩恵を受けうる。雇用を生み、有用な新製品を市場にもたらし、ロボット工学・バイオテクノロジー・クリーンエネルギーなど先端分野で国が競争力を保つ助けになる。大学スピンアウトの台頭は、知識と事業がいかに密接に結びつくかを示す。発見は始まりにすぎない。それを人々が実際に使えるものに変えるのは長い旅であり、その旅を成し遂げる企業が、研究の果実を静かな研究室から日々の暮らしへ運ぶ助けをする。",
        quiz: [
          { q: "大学「スピンアウト」とは？", options: ["研究の発見を製品に変えるため研究者が興す会社", "大学の授業の一種", "政府機関"], answer: 0 },
          { q: "発見に会社が必要な理由は？", options: ["開発・試験・製造・販売にお金や人材、経営技能が要るから", "研究が自動で製品になるから", "会社は不要だから"], answer: 0 },
          { q: "この道が容易でない理由は？", options: ["事業運営は研究とは異なる技能を要し多くが失敗する", "科学者は何でもできるから", "すぐ成功するから"], answer: 0 }
        ]
      },
      {
        id: "d0812-2",
        title: "A Patch That Helps You Sleep",
        level: "★★☆",
        genre: "テクノロジー",
        text: "Good sleep is one of the most important things for our health, yet many people struggle to get enough of it. Scientists are now testing a small wearable patch designed to help people reach deep, restful sleep more quickly. In an early study, the device helped users reach an important stage of sleep sooner and stay in it longer.\nWhy does the stage of sleep matter? During the night, we pass through different stages. One of them, often called REM sleep, is especially important for the brain — it helps with memory, learning, and emotional balance. People who do not get enough of this stage may feel tired and unfocused, even after a full night in bed.\nHow might a patch help? Worn on the body, the device gently sends signals that encourage the brain to move into deeper sleep more easily. Instead of using drugs, it works with the body's natural rhythms, which may make it gentler and safer for regular use.\nIt is important to be careful. The study was small, and much more testing is needed before such a device could be widely used. Sleep is complex, and what helps in a laboratory may work differently for different people.\nStill, the research points to an appealing idea: using gentle technology to improve something as basic as sleep. If devices like this prove safe and effective, they could help millions of people rest better — and wake up ready to face the day, refreshed by the simple, powerful medicine of a good night's sleep.",
        summaryJa: "良い睡眠は健康にとって最も重要なものの一つだが、多くの人が十分に取れずに苦しむ。科学者は今、人々がより早く深く安らかな睡眠に達する助けとなる、小さな装着型パッチを試している。初期の研究で、この装置は利用者が重要な睡眠段階により早く達し、より長くとどまる助けをした。なぜ睡眠の段階が重要か。夜の間、私たちは異なる段階を通る。その一つ、しばしばレム睡眠と呼ばれる段階は脳に特に重要だ——記憶・学習・感情の安定を助ける。この段階が足りない人は、一晩寝ても疲れて集中できないと感じうる。パッチはどう助けうるのか。体に装着され、装置は脳がより容易に深い睡眠へ移るよう促す穏やかな信号を送る。薬を使う代わりに、体の自然なリズムと協働するので、日常的な使用にもより穏やかで安全かもしれない。慎重さが大切だ。研究は小規模で、こうした装置が広く使われる前にはるかに多くの試験が要る。睡眠は複雑で、実験室で効くものが人によって異なる働きをしうる。それでも研究は魅力的な発想を示す——穏やかな技術で、睡眠のような基本的なものを改善すること。こうした装置が安全で有効と証明されれば、何百万もの人がより良く休む助けになりうる——そして良い睡眠という単純で強力な薬に癒され、一日に立ち向かう準備をして目覚める。",
        quiz: [
          { q: "この装置が助けるのは？", options: ["深く安らかな睡眠に早く達すること", "目を覚まし続けること", "運動すること"], answer: 0 },
          { q: "レム睡眠が重要な理由は？", options: ["記憶・学習・感情の安定を助けるから", "体温を上げるから", "空腹を防ぐから"], answer: 0 },
          { q: "本文が促す慎重さは？", options: ["研究は小規模でさらなる試験が必要", "装置は完璧である", "睡眠は単純である"], answer: 0 }
        ]
      },
      {
        id: "d0812-3",
        title: "Science the Whole World Shares",
        level: "★★★",
        genre: "世界情勢",
        text: "Some of humanity's greatest scientific tools are too big and too expensive for any single country to build alone. Giant telescopes, particle laboratories, and space missions often cost billions of dollars and require the skills of thousands of experts. To make them possible, countries around the world join together, sharing the cost, the work, and the discoveries.\nWhy cooperate on science? Beyond saving money, working together brings the best minds from many nations to one problem. A telescope built by several countries can be more powerful than any one nation could afford. And when new knowledge is found — about distant planets, tiny particles, or the origins of the universe — it belongs to all of humanity, not just one country.\nModern tools are making these projects even more powerful. Advanced computers and artificial intelligence now help scientists sort through the enormous amounts of data these instruments produce, spotting patterns that humans might miss and speeding up discovery.\nSuch cooperation is not always simple. Countries must agree on goals, share control, and keep working together even when their relations are tense elsewhere. Yet science has often been a bridge, connecting people across borders through shared curiosity.\nThe results belong to everyone. Images from a great telescope, or knowledge about how the universe began, are shared freely with students, scientists, and dreamers everywhere. In a divided world, these shared scientific adventures are a quiet reminder of what people can achieve when they look outward together, united by the simple wish to understand.",
        summaryJa: "人類の最も偉大な科学の道具のいくつかは、どの一国にとっても単独で建てるには大きすぎ高価すぎる。巨大望遠鏡、素粒子研究所、宇宙ミッションはしばしば数十億ドルを要し、何千もの専門家の技能を必要とする。それらを可能にするため、世界中の国々が手を組み、費用・作業・発見を分かち合う。なぜ科学で協力するのか。お金の節約を超え、共に働くことは多くの国の最良の頭脳を一つの問題に集める。数か国で建てた望遠鏡は、どの一国が賄えるものより強力になりうる。そして新しい知——遠い惑星、小さな粒子、宇宙の起源についての——が見つかれば、それは一国でなく全人類のものだ。現代の道具はこうした事業をさらに強力にしている。先端のコンピューターとAIが、これらの機器が生む膨大なデータを整理し、人が見逃す模様を見つけ、発見を速める助けをする。こうした協力は常に単純ではない。国々は目標に合意し、統制を分かち合い、他所で関係が緊張していても共に働き続けねばならない。だが科学はしばしば橋となり、共有する好奇心を通じて国境を越えて人々をつないできた。成果は皆のものだ。偉大な望遠鏡の画像や、宇宙がどう始まったかの知識は、どこの学生・科学者・夢見る人にも自由に共有される。分断された世界で、こうした共有される科学の冒険は、人々が共に外を見つめ、理解したいという単純な願いに結ばれたとき何を成し遂げられるかの、静かな気づきだ。",
        quiz: [
          { q: "巨大な科学の道具で国々が協力する理由は？", options: ["費用が高く単独では建てられず知恵も集められるから", "科学は簡単だから", "一国で十分だから"], answer: 0 },
          { q: "AIやコンピューターが科学で果たす役割は？", options: ["膨大なデータを整理し模様を見つけ発見を速める", "望遠鏡を建てること", "国境を引くこと"], answer: 0 },
          { q: "発見された知は誰のものか？", options: ["全人類のもの", "一国だけのもの", "誰のものでもない"], answer: 0 }
        ]
      },
      {
        id: "d0812-4",
        title: "The Fireworks of Summer",
        level: "★★☆",
        genre: "日本",
        text: "In summer, the night skies over Japan light up with color. From July through August, towns and cities hold hanabi, or fireworks festivals, drawing huge crowds who gather along rivers and in parks to watch. For many people in Japan, a summer without fireworks would hardly feel like summer at all.\nWhy are fireworks so loved here? Part of the answer is history. Japan has a long tradition of firework-making, and its craftspeople are famous for creating beautiful, perfectly round bursts of light in many colors and shapes. A big festival can send up thousands of fireworks, sometimes set to music, in a show that lasts an hour or more.\nBut hanabi is about more than the fireworks themselves. It is a social event, a chance to gather with family and friends. Many people wear a light summer kimono called a yukata, buy food from festival stalls, and enjoy the warm evening together. The brief, brilliant flashes in the sky become a shared memory of the season.\nThere is also a gentle feeling behind the tradition. In Japanese culture, the beauty of fireworks is tied to the idea that lovely things do not last — each burst shines for only a moment before fading. This makes the experience feel precious.\nSo a fireworks festival is more than a show. It is a celebration of summer, of community, and of fleeting beauty — a reminder to pause, look up, and enjoy a bright moment together before it gently disappears into the night.",
        summaryJa: "夏、日本の夜空は色で輝く。7月から8月にかけて、町や都市は花火大会を開き、川沿いや公園に集う大群衆を惹きつける。日本の多くの人にとって、花火のない夏はほとんど夏らしく感じられない。なぜここで花火はそれほど愛されるのか。答えの一部は歴史だ。日本には長い花火作りの伝統があり、その職人は、多くの色と形で美しく完璧に丸い光の炸裂を生むことで有名だ。大きな大会は時に音楽に合わせ、数千発の花火を打ち上げ、一時間以上続く見世物になる。だが花火大会は花火そのもの以上のものだ。社交の場であり、家族や友人と集う機会だ。多くの人が浴衣という薄手の夏の着物を着て、屋台で食べ物を買い、暖かな夕べを共に楽しむ。空の短く鮮やかな閃光は、季節の共有された思い出になる。この伝統の背後には穏やかな感情もある。日本文化では、花火の美しさは、美しいものは続かないという考えに結びつく——各炸裂は消える前のほんの一瞬だけ輝く。これが体験を貴重に感じさせる。だから花火大会は見世物以上のものだ。夏の、地域の、そしてはかない美しさの祝いだ——立ち止まり、見上げ、夜へと静かに消える前の明るい一瞬を共に楽しむようにという気づきなのだ。",
        quiz: [
          { q: "花火大会が開かれる時期は？", options: ["夏（7〜8月）", "冬", "春の初め"], answer: 0 },
          { q: "花火大会が花火以上のものである理由は？", options: ["家族や友人と集う社交の場だから", "静かに一人で見るものだから", "昼に行うから"], answer: 0 },
          { q: "花火の美しさが結びつく日本文化の考えは？", options: ["美しいものは続かない（はかなさ）", "花火は永遠に残る", "音が最も重要"], answer: 0 }
        ]
      },
      {
        id: "d0812-5",
        title: "Asteroids: Hardware Stores in Space",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "If humans ever build a lasting home on Mars, they will need building materials — metal, in particular. Carrying everything from Earth would be enormously expensive. So scientists are exploring a bold idea: using metal-rich asteroids, floating rocks in space, as a kind of hardware store for future explorers.\nWhy asteroids? Some asteroids are packed with useful metals such as iron and nickel. Instead of launching heavy metal from Earth, explorers might one day mine these space rocks and use the material to build tools, structures, or spacecraft parts closer to where they are needed. A new analysis suggests that certain carefully chosen asteroids could be reached with the kind of spacecraft we already have.\nHow would it work? First, scientists must find the right asteroids — those with valuable materials and paths that make them easy to reach. Then, machines would have to travel there, collect the metal, and process it in space, far from any factory. Each of these steps is difficult and has never been done on a large scale.\nThere are big challenges. Space mining is expensive and risky, the technology is still young, and questions remain about who would own such resources. It may be many years before any of this becomes real.\nStill, the idea captures the imagination. It suggests a future where explorers do not carry everything with them, but use what space itself provides. Like early travelers living off the land, future settlers might one day build new worlds using the raw materials floating quietly among the stars.",
        summaryJa: "もし人類がいつか火星に永続的な住まいを築くなら、建材——特に金属——が必要になる。全てを地球から運ぶのは莫大な費用がかかる。そこで科学者は大胆な発想を探っている——金属に富む小惑星、宇宙に浮かぶ岩を、未来の探検者のための一種のホームセンターとして使うのだ。なぜ小惑星か。一部の小惑星は鉄やニッケルなど有用な金属で満ちている。重い金属を地球から打ち上げる代わりに、探検者はいつかこの宇宙の岩を採掘し、その材料を必要とされる場所の近くで道具・構造物・探査機の部品を作るのに使えるかもしれない。新しい分析は、慎重に選ばれた特定の小惑星が、既にある種類の探査機で到達できうると示す。どう機能するのか。まず、科学者は適切な小惑星——価値ある材料を持ち、到達しやすい軌道の——を見つけねばならない。次に、機械がそこへ行き、金属を集め、どの工場からも遠い宇宙で加工せねばならない。これらの各段階は難しく、大規模に行われたことは一度もない。大きな課題がある。宇宙採掘は高価で危険で、技術はまだ若く、そうした資源を誰が所有するかの問いも残る。これのいずれかが現実になるまで何年もかかるかもしれない。それでもこの発想は想像力を捕らえる。探検者が全てを持ち運ぶのでなく、宇宙そのものが提供するものを使う未来を示す。土地の恵みで暮らした初期の旅人のように、未来の入植者はいつか、星々の間に静かに浮かぶ原材料で新しい世界を築くかもしれない。",
        quiz: [
          { q: "科学者が探る大胆な発想は？", options: ["金属に富む小惑星を建材の供給源として使う", "小惑星を地球に落とす", "小惑星を燃やす"], answer: 0 },
          { q: "小惑星の金属を使う利点は？", options: ["重い金属を地球から打ち上げずに済む", "味が良いから", "光るから"], answer: 0 },
          { q: "本文が挙げる課題は？", options: ["宇宙採掘は高価で危険、技術も若く所有の問いも残る", "小惑星が存在しないこと", "金属が無価値なこと"], answer: 0 }
        ]
      }
    ]
  },
    {
    date: "2026-08-11",
    passages: [
      {
        id: "d0811-1",
        title: "What a Market Forecast Really Means",
        level: "★★★",
        genre: "ビジネス",
        text: "Every so often, a big bank makes headlines by predicting where the stock market will go. Recently, one major bank raised its forecast for a well-known U.S. stock index, pointing to strong company profits and rising demand for artificial intelligence. But what does such a forecast really mean, and how much should we trust it?\nA market forecast, sometimes called a price target, is an educated guess. Analysts study company earnings, the wider economy, and current trends, then estimate where prices might be months from now. It is not a promise, and no one truly knows the future — it is a careful opinion, based on today's information.\nWhy do these forecasts matter? They shape how investors feel. An optimistic forecast from a respected bank can boost confidence, encouraging people to buy and pushing prices higher, at least for a while. A gloomy forecast can do the opposite. In this way, predictions can influence the very market they describe.\nStill, forecasts are often wrong. The economy can be surprised by sudden events — a crisis, a new technology, or a change in policy. Analysts frequently update their targets as conditions change, which shows how uncertain such predictions really are.\nThe lesson for a careful reader is to treat forecasts as useful opinions, not facts. They summarize what informed experts expect, which is valuable. But the future remains unknown, and wise investors weigh many views, stay cautious, and remember that even the most confident prediction is still, in the end, only a guess.",
        summaryJa: "時折、大銀行が株式市場の行方を予測して見出しをにぎわす。最近、ある大手銀行が、有名な米国の株価指数の予測を引き上げ、好調な企業利益とAIへの高まる需要を理由に挙げた。だがこうした予測は本当は何を意味し、どこまで信じるべきか。市場予測（プライスターゲットとも呼ばれる）は、根拠ある推測だ。アナリストは企業の利益・広い経済・今の傾向を調べ、数か月後に価格がどこにあるかを見積もる。約束ではなく、誰も本当に未来を知らない——今日の情報に基づく慎重な意見だ。なぜこうした予測が重要か。投資家の感じ方を形づくる。尊敬される銀行の楽観的な予測は自信を高め、人々に買いを促し、少なくともしばらく価格を押し上げうる。暗い予測は逆を行う。こうして予測は、それが描く市場そのものに影響しうる。それでも予測はしばしば外れる。経済は突然の出来事——危機・新技術・政策変更——に驚かされうる。アナリストは状況の変化とともに頻繁に目標を更新し、そうした予測がいかに不確実かを示す。慎重な読者への教訓は、予測を事実でなく有用な意見として扱うことだ。情報通の専門家が何を期待するかを要約しており、それは価値がある。だが未来は不明のままで、賢い投資家は多くの見方を比べ、慎重を保ち、最も自信ある予測でさえ結局はただの推測だと忘れない。",
        quiz: [
          { q: "市場予測（プライスターゲット）とは何か？", options: ["今日の情報に基づく根拠ある推測", "確実な約束", "過去の記録だけ"], answer: 0 },
          { q: "予測が市場に影響しうる理由は？", options: ["投資家の自信や感じ方を左右するから", "価格を法律で決めるから", "株の数を変えるから"], answer: 0 },
          { q: "本文が勧める予測への向き合い方は？", options: ["事実でなく有用な意見として扱う", "必ず従う", "完全に無視する"], answer: 0 }
        ]
      },
      {
        id: "d0811-2",
        title: "The Fierce Race in Smartphones",
        level: "★★☆",
        genre: "テクノロジー",
        text: "Every year, phone makers around the world release new models, each promising to be faster, smarter, or better value than the last. Recently, one company launched a new series of phones with the latest 5G technology and upgraded features. Behind these launches lies one of the most competitive businesses on Earth: the global smartphone market.\nWhy is competition so fierce? Billions of people use smartphones, so even a small share of the market means huge sales. To win customers, companies compete on price, camera quality, battery life, screen, and speed. A single popular feature can help one brand pull ahead of the others.\nMuch of the latest competition centers on 5G, the newest kind of mobile network. 5G can move data much faster than older networks, making video, games, and downloads smoother. As more countries build 5G networks, phone makers race to offer devices that use them well, even in cheaper models.\nThis competition brings real benefits to buyers. Strong rivalry pushes companies to improve their products and keep prices reasonable. Features that were once found only in expensive phones now appear in affordable ones, so more people can enjoy powerful technology.\nThere are downsides too. New models appear so quickly that older phones can feel out of date, encouraging waste. Some 'upgrades' offer only small improvements.\nStill, the smartphone race shows competition at its most intense. In a market of billions, companies must keep innovating just to stay in the game — and, along the way, they place remarkable technology into everyday hands.",
        summaryJa: "毎年、世界中の携帯電話メーカーが新モデルを出し、それぞれ前より速く・賢く・割安だと約束する。最近、ある企業が最新の5G技術と改良機能を備えた新シリーズを発売した。こうした発売の背後には、地球で最も競争の激しい商売の一つ——世界のスマートフォン市場がある。なぜ競争がそれほど激しいか。何十億もの人がスマホを使うので、市場のわずかな割合でも巨大な売上を意味する。顧客を勝ち取るため、企業は価格・カメラ画質・電池持ち・画面・速度で競う。一つの人気機能が、あるブランドを他社より前に出す助けになりうる。最近の競争の多くは、最新の携帯ネットワークである5Gに集まる。5Gは旧来のネットワークよりずっと速くデータを運び、動画・ゲーム・ダウンロードを滑らかにする。より多くの国が5G網を築く中、メーカーは、安価なモデルでもそれをうまく使える端末を出そうと競う。この競争は買い手に本当の利益をもたらす。激しい競争は企業に製品改良と手頃な価格の維持を促す。かつて高価な携帯だけにあった機能が今や手頃な機種にも現れ、より多くの人が強力な技術を楽しめる。難点もある。新モデルが速く現れるため古い携帯が時代遅れに感じられ、無駄を促す。わずかな改善だけの「改良」もある。それでもスマホ競争は、最も激しい競争の姿を示す。何十億の市場で、企業は生き残るためだけでも革新を続けねばならない——そしてその過程で、目覚ましい技術を日々の手の中に置いていく。",
        quiz: [
          { q: "スマホ市場の競争が激しい理由は？", options: ["何十億人も使い、わずかな市場割合でも巨大な売上になるから", "使う人が少ないから", "作るのが簡単だから"], answer: 0 },
          { q: "5Gの利点は？", options: ["旧来より速くデータを運び動画やゲームが滑らかになる", "電池が要らなくなる", "画面が消える"], answer: 0 },
          { q: "激しい競争が買い手にもたらす利益は？", options: ["製品改良と手頃な価格の維持", "価格の高騰", "選択肢の減少"], answer: 0 }
        ]
      },
      {
        id: "d0811-3",
        title: "Gifts Between Nations",
        level: "★★☆",
        genre: "世界情勢",
        text: "When countries want to show friendship, they sometimes exchange unusual gifts. Recently, one nation revived an old tradition by giving several pairs of peacocks — its beautiful national bird — to an international organization, as a symbol of friendship and shared culture. Such gifts may seem small beside serious world affairs, but they carry real meaning.\nWhy do nations give gifts? Diplomacy is not only about treaties and trade. It is also about building trust and goodwill between peoples. A thoughtful gift can express respect, celebrate a shared history, or simply create a warm feeling that makes future cooperation easier. Animals, plants, and works of art are common choices, each carrying a message about the country that gives them.\nGifts of animals have a long history. Over the centuries, nations have exchanged everything from horses to rare birds. Some gifts, like pandas sent to zoos around the world, have become famous symbols of friendship, drawing crowds and creating lasting bonds between countries.\nOf course, such gifts also raise practical questions. Animals need proper care, suitable homes, and attention to their health. A living gift is a responsibility, not just a symbol, and must be looked after well.\nStill, the tradition endures because it speaks to something human. Behind the formal language of diplomacy are people who, like friends anywhere, use gifts to say what words alone cannot. A pair of beautiful birds, offered in friendship, is a quiet reminder that nations, in the end, are made of people who wish to get along.",
        summaryJa: "国々は友好を示したいとき、時に珍しい贈り物を交わす。最近、ある国が古い伝統を復活させ、美しい国鳥であるクジャクを数つがい、友好と共有する文化の象徴として国際機関に贈った。こうした贈り物は深刻な世界情勢の傍らでは小さく見えるかもしれないが、本当の意味を持つ。なぜ国は贈り物をするのか。外交は条約や貿易だけではない。国民同士の信頼と善意を築くことでもある。心のこもった贈り物は敬意を表し、共有する歴史を祝い、あるいは単に、将来の協力を容易にする温かな感情を生みうる。動物・植物・芸術品がよく選ばれ、それぞれ贈る国についてのメッセージを担う。動物の贈り物には長い歴史がある。何世紀もの間、国々は馬から珍しい鳥まで交換してきた。世界中の動物園に送られたパンダのように、友好の有名な象徴となり、人だかりを呼び国同士の永続的な絆を生んだ贈り物もある。もちろん、こうした贈り物は実際的な問いも生む。動物には適切な世話・住処・健康への配慮が要る。生きた贈り物は象徴であるだけでなく責任であり、よく世話されねばならない。それでも伝統が続くのは、それが人間的な何かに語りかけるからだ。外交の形式的な言葉の背後には、どこの友人とも同じように、言葉だけでは言えないことを贈り物で伝える人々がいる。友好のうちに贈られる美しい一つがいの鳥は、国が結局、仲良くやりたいと願う人々でできていることの静かな気づきだ。",
        quiz: [
          { q: "ある国が国際機関に贈ったものは？", options: ["国鳥のクジャク数つがい", "大量の金貨", "武器"], answer: 0 },
          { q: "国が贈り物をする理由は？", options: ["国民同士の信頼と善意を築くため", "相手を困らせるため", "貿易を止めるため"], answer: 0 },
          { q: "生きた動物の贈り物が生む問いは？", options: ["適切な世話・住処・健康への配慮という責任", "象徴にならないこと", "歴史がないこと"], answer: 0 }
        ]
      },
      {
        id: "d0811-4",
        title: "Japan's Own Eyes in the Sky",
        level: "★★★",
        genre: "日本",
        text: "Almost everyone with a smartphone relies on satellites to find their way. Maps, ride services, and delivery apps all need to know exactly where you are. To make this positioning more accurate over its territory, Japan has built its own set of satellites, sometimes called the Quasi-Zenith Satellite System, designed to work closely with the well-known global positioning services.\nHow does satellite positioning work? Satellites high above the Earth send out signals. Your phone receives signals from several of them and, by measuring tiny differences in time, calculates your location. The more satellites your phone can 'see,' and the better their position, the more accurate the result.\nWhy does Japan need its own satellites? In cities full of tall buildings, and in mountainous areas, signals from distant satellites can be blocked or bounced around, causing errors. Japan's satellites are placed so that at least one is almost always high overhead, giving a clearer signal and greatly improving accuracy — sometimes down to a few centimeters.\nSuch precision has many uses. It can guide self-driving cars, help farmers steer machines through fields, support drones, and make navigation more reliable in crowded streets. As technology depends more and more on knowing exact positions, this accuracy becomes increasingly valuable.\nThe system is a quiet example of important infrastructure — technology most people never notice but use every day. High above Japan, these satellites circle patiently, helping phones, cars, and machines below answer a simple but essential question: exactly where am I right now?",
        summaryJa: "スマートフォンを持つほぼ誰もが、道を見つけるのに衛星に頼っている。地図・配車・配達アプリはすべて、あなたが正確にどこにいるかを知る必要がある。自国の領域上でこの位置測定をより正確にするため、日本は独自の衛星群——準天頂衛星システム（みちびき）とも呼ばれる——を築き、有名な全地球測位サービスと密に連携するよう設計した。衛星測位はどう働くのか。地球のはるか上の衛星が信号を送る。あなたの携帯はそのいくつかから信号を受け、時間のごく小さな差を測って位置を計算する。携帯が「見える」衛星が多く、その位置が良いほど、結果は正確になる。なぜ日本に独自の衛星が要るのか。高い建物だらけの都市や山がちな地域では、遠い衛星からの信号が遮られたり反射したりして誤差を生みうる。日本の衛星は、少なくとも一つがほぼ常に真上高くにあるよう配置され、より明瞭な信号を与えて精度を大きく高める——時に数センチ単位まで。こうした精度には多くの用途がある。自動運転車を導き、農家が畑で機械を操るのを助け、ドローンを支え、混雑した街路でも案内をより確実にする。技術が正確な位置を知ることにますます依存する中、この精度は一層価値を持つ。このシステムは重要なインフラの静かな一例だ——多くの人が気づかないが毎日使う技術。日本のはるか上で、これらの衛星は忍耐強く周回し、下の携帯・車・機械が単純だが不可欠な問い——今この瞬間、私は正確にどこにいるのか——に答える手助けをしている。",
        quiz: [
          { q: "衛星測位で位置を計算する方法は？", options: ["複数の衛星の信号の時間差を測る", "衛星の色を見る", "電話番号を使う"], answer: 0 },
          { q: "日本が独自の衛星を必要とする理由は？", options: ["高い建物や山で信号が遮られ誤差が出るのを防ぐため", "衛星が安いから", "宇宙が空いているから"], answer: 0 },
          { q: "高い精度の用途に含まれるものは？", options: ["自動運転車や農業機械の誘導", "天気を変えること", "電池を作ること"], answer: 0 }
        ]
      },
      {
        id: "d0811-5",
        title: "Helping Crops Survive Drought",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "Water is essential for growing food, but in many parts of the world it is becoming scarce. As droughts grow more common, farmers face a hard question: how can crops survive with less water? Scientists are working to answer it, and their research is quietly becoming one of the most important efforts for our future. One researcher was recently honored for pioneering work in this field.\nWhy does drought research matter so much? Most of the food we eat depends on plants, and plants depend on water. When rains fail, crops can wither, harvests shrink, and food becomes scarce and expensive. With a growing population and a changing climate, finding ways to grow food with less water is vital.\nHow do scientists help? They study how different plants cope with dry conditions, searching for varieties that need less water or can survive longer without it. They also develop better ways to use water wisely, such as watering only where and when plants truly need it. Some work to improve the soil so it holds moisture longer.\nThis research combines many fields — biology, chemistry, weather science, and engineering. Progress is often slow, tested season after season in real fields, but small improvements can help millions of farmers.\nThe work is a reminder that some of the most important science is not flashy. Quietly, in laboratories and fields, researchers are helping to make sure that as the climate changes, the world can still be fed — turning knowledge into something as basic, and as precious, as food on the table.",
        summaryJa: "水は食料を育てるのに不可欠だが、世界の多くの地域で乏しくなりつつある。干ばつがより一般的になる中、農家は難しい問いに直面する——より少ない水で作物はどう生き延びられるのか。科学者はそれに答えようと取り組んでおり、その研究は静かに、私たちの未来にとって最も重要な努力の一つになりつつある。ある研究者が最近、この分野の先駆的な業績で表彰された。なぜ干ばつ研究がそれほど重要か。私たちが食べる食料の多くは植物に、植物は水に依存する。雨が降らなければ作物は枯れ、収穫は縮み、食料は乏しく高価になる。人口が増え気候が変わる中、より少ない水で食料を育てる方法を見つけることは極めて重要だ。科学者はどう助けるのか。異なる植物が乾いた条件にどう対処するかを研究し、より少ない水で済む、あるいは水なしでより長く生きられる品種を探す。植物が本当に必要とする場所と時にだけ水をやるなど、水を賢く使うより良い方法も開発する。土壌を改良して水分をより長く保たせる研究をする者もいる。この研究は多くの分野——生物学・化学・気象科学・工学——を組み合わせる。進歩はしばしば遅く、実際の畑で季節ごとに試されるが、小さな改善が何百万もの農家を助けうる。この仕事は、最も重要な科学のいくつかが派手ではないことを思い出させる。研究室や畑で静かに、研究者は、気候が変わっても世界が食べていけるようにする手助けをしている——知識を、食卓の食べ物と同じくらい基本的で貴重なものに変えて。",
        quiz: [
          { q: "科学者が探しているものは？", options: ["より少ない水で育つ、または乾燥に耐える作物の品種", "水を消す方法", "雨を止める方法"], answer: 0 },
          { q: "干ばつ研究が重要な理由は？", options: ["食料は植物に、植物は水に依存し、干ばつで食料が乏しくなるから", "水が無限にあるから", "植物は水が不要だから"], answer: 0 },
          { q: "本文が伝えることは？", options: ["最も重要な科学のいくつかは派手ではない", "科学は常に派手だ", "農業に科学は不要"], answer: 0 }
        ]
      }
    ]
  },
    {
    date: "2026-08-10",
    passages: [
      {
        id: "d0810-1",
        title: "Setting a Floor Under Wages",
        level: "★★★",
        genre: "ビジネス",
        text: "How little can a company legally pay its workers? In many countries, the answer is set by a rule called the minimum wage — the lowest hourly pay allowed by law. In Japan, a new, higher wage floor is due to take effect, affecting more than fifty million workers. Changes like this spark an important economic debate.\nWhy have a minimum wage at all? The main goal is to protect workers. Without a legal floor, some employers might pay very low wages, leaving people unable to afford basic needs even while working full time. A minimum wage aims to ensure that work provides at least a modest standard of living.\nRaising the minimum wage has clear benefits. Low-paid workers earn more, can spend more, and may feel their work is valued. Because they often spend most of what they earn, this extra money can flow quickly back into local shops and businesses.\nBut there are trade-offs, which is why the topic is debated. If wages rise too fast, some businesses, especially small ones, may struggle to pay. They might raise prices, reduce hours, or hire fewer people. Supporters argue that fair pay is worth it; critics worry about these side effects.\nMost experts agree that gradual, predictable increases work best, giving businesses time to adjust. The debate is really about balance: how to lift the lowest earners without harming the very jobs they depend on. It is a clear example of how a single number can shape millions of lives.",
        summaryJa: "企業は労働者にどこまで低く支払っても合法なのか。多くの国で、その答えは「最低賃金」という規則——法律が許す最も低い時給——で定められる。日本では、新しくより高い賃金の下限が施行される予定で、5000万人を超える労働者に影響する。こうした変更は重要な経済論争を呼ぶ。そもそもなぜ最低賃金があるのか。主な目的は労働者の保護だ。法的な下限がなければ、一部の雇い主は非常に低い賃金を払い、フルタイムで働いても基本的な必需品を賄えない人を生みうる。最低賃金は、働くことが少なくともささやかな生活水準をもたらすようにすることを狙う。最低賃金の引き上げには明白な利点がある。低賃金の労働者はより多く稼ぎ、より多く使え、自分の仕事が評価されていると感じうる。彼らは稼ぎの大半を使うことが多いので、この追加のお金は素早く地元の店や事業に還流しうる。だが代償もあり、だからこそ論じられる。賃金が速く上がりすぎると、一部の企業、特に小企業は支払いに苦しみうる。価格を上げ、労働時間を減らし、雇用を減らすかもしれない。支持者は公正な賃金にはその価値があると論じ、批判者はこうした副作用を懸念する。多くの専門家は、段階的で予測可能な引き上げが最も良く、企業に適応の時間を与えると同意する。論争は本当は均衡についてだ——最も低い稼ぎ手を、彼らが頼る仕事そのものを害さずにどう引き上げるか。一つの数字が何百万もの人生を形づくる明快な例だ。",
        quiz: [
          { q: "最低賃金の主な目的は？", options: ["労働者を保護し一定の生活水準を確保すること", "企業の利益を最大化すること", "物価を上げること"], answer: 0 },
          { q: "最低賃金引き上げの利点は？", options: ["低賃金の人が稼ぎ地元の店に還流する", "誰も得をしない", "輸出が止まる"], answer: 0 },
          { q: "多くの専門家が最良とする方法は？", options: ["段階的で予測可能な引き上げ", "一度に急激な引き上げ", "引き上げをしないこと"], answer: 0 }
        ]
      },
      {
        id: "d0810-2",
        title: "The Quest for Fusion Energy",
        level: "★★★",
        genre: "テクノロジー",
        text: "For decades, scientists have chased one of the boldest goals in energy: to create power the way the sun does. This process, called nuclear fusion, joins tiny particles together to release enormous amounts of energy. If it can be made to work reliably on Earth, fusion could provide vast, clean power — and researchers in Japan and around the world are racing to get there.\nHow is fusion different from today's nuclear power? Current reactors use fission, which splits heavy atoms apart and leaves behind long-lasting radioactive waste. Fusion instead joins light atoms together, produces far less dangerous waste, and cannot melt down in the same way. Its main fuel can be drawn from water, making it almost limitless.\nWhy is it so hard? To fuse atoms, you must heat fuel to temperatures hotter than the center of the sun and hold it steady long enough to release energy. Building machines that can do this — and get more energy out than they put in — has challenged scientists for generations.\nProgress is now speeding up. New materials, powerful magnets, and better computers are helping researchers and private companies inch closer. Some hope to build working power plants within a few decades.\nFusion is not ready yet, and promises have been broken before. But the prize is enormous: a clean, safe, almost endless source of energy. Each experiment brings that dream a little nearer, as scientists try, patiently, to capture the power of the stars and bring it down to Earth.",
        summaryJa: "何十年もの間、科学者はエネルギーで最も大胆な目標の一つを追ってきた——太陽と同じやり方で電力を作ることだ。「核融合」と呼ばれるこの過程は、小さな粒子を結び合わせて膨大なエネルギーを放出する。地球で確実に機能させられれば、核融合は莫大でクリーンな電力を供給しうる——日本や世界中の研究者がそこへ到達しようと競っている。核融合は今日の原子力とどう違うのか。現在の原子炉は「核分裂」を使い、重い原子を割って長く残る放射性廃棄物を残す。核融合は代わりに軽い原子を結合させ、はるかに危険の少ない廃棄物を出し、同じようには炉心溶融しない。主な燃料は水から得られ、ほぼ無限にできる。なぜそんなに難しいのか。原子を融合させるには、燃料を太陽の中心より高温に熱し、エネルギーを放出するのに十分な時間、安定に保たねばならない。これを行い、投入より多くのエネルギーを取り出せる機械を作ることが、何世代も科学者を悩ませてきた。今、進歩が加速している。新素材・強力な磁石・優れたコンピューターが、研究者や民間企業が少しずつ近づくのを助ける。数十年内に稼働する発電所を建てたいと望む者もいる。核融合はまだ準備が整っておらず、約束は以前にも破られた。だが報酬は莫大だ——クリーンで安全な、ほぼ無限のエネルギー源。各実験がその夢を少しずつ近づける。科学者は忍耐強く、星の力を捕らえて地上へもたらそうとしている。",
        quiz: [
          { q: "核融合は何をする過程か？", options: ["小さな粒子を結び合わせて膨大なエネルギーを放出する", "原子を割ること", "水を凍らせること"], answer: 0 },
          { q: "核融合が核分裂（今の原子力）と違う点は？", options: ["軽い原子を結合し危険の少ない廃棄物を出す", "より多くの廃棄物を出す", "燃料が石炭である"], answer: 0 },
          { q: "核融合が難しい理由は？", options: ["太陽の中心より高温に熱し安定に保つ必要があるから", "燃料が無いから", "冷やすのが簡単すぎるから"], answer: 0 }
        ]
      },
      {
        id: "d0810-3",
        title: "Turning Climate Promises into Action",
        level: "★★★",
        genre: "世界情勢",
        text: "Countries around the world have made many promises to fight climate change. The harder task is turning those promises into real results. Recently, a global partnership of governments, cities, businesses, and investors launched a new plan focused on exactly that: moving from words to concrete action on clean air, energy, and the environment.\nWhy is this shift so important? For years, nations have set goals to cut pollution and switch to cleaner energy. But a goal on paper does not clean the air by itself. It must be followed by real projects — building wind and solar power, protecting forests, and helping communities adapt to a changing climate. Coordinating this work across many countries is a huge challenge.\nThere is encouraging news to build on. Investment in clean technology has grown enormously in recent years, and, for the first time, the world now generates more electricity from renewable sources than from coal. This shows that big change is possible when money, technology, and political will come together.\nSerious problems remain. The world faces energy shortages, economic tensions, and conflicts that make cooperation harder. Progress is uneven, and some promises risk being forgotten.\nStill, the direction matters. By focusing on turning commitments into results, countries hope to make climate action something people can actually see and feel — cleaner air, more reliable energy, and safer communities. The lesson is simple but powerful: promises open the door, but only action can carry us through it.",
        summaryJa: "世界中の国々が気候変動と闘う多くの約束をしてきた。より難しい課題は、その約束を現実の成果に変えることだ。最近、政府・都市・企業・投資家の世界的な連携が、まさにそれに焦点を当てた新計画を立ち上げた——言葉から、清浄な空気・エネルギー・環境に関する具体的な行動へ移ることだ。なぜこの転換が重要か。長年、各国は汚染を減らしよりクリーンなエネルギーへ切り替える目標を掲げてきた。だが紙の上の目標はそれ自体で空気を清めない。現実の事業が続かねばならない——風力や太陽光の建設、森林の保護、変わる気候への地域の適応の支援だ。この作業を多くの国で調整するのは大きな挑戦だ。積み上げるべき明るい知らせもある。近年、クリーン技術への投資は大きく伸び、初めて、世界は今や石炭より再生可能エネルギーから多くの電力を生んでいる。お金・技術・政治的意志が揃えば大きな変化が可能であることを示す。深刻な問題は残る。世界はエネルギー不足・経済的緊張・協力を難しくする対立に直面する。進歩は不均一で、一部の約束は忘れられる恐れがある。それでも方向は重要だ。約束を成果に変えることに注力することで、各国は気候対策を人々が実際に見て感じられるもの——清浄な空気・より信頼できるエネルギー・より安全な地域——にしたい。教訓は単純だが力強い——約束は扉を開くが、私たちをその先へ運べるのは行動だけだ。",
        quiz: [
          { q: "新計画が焦点を当てるのは？", options: ["約束を具体的な行動・成果に変えること", "新しい約束を増やすこと", "何もしないこと"], answer: 0 },
          { q: "本文が挙げる明るい知らせは？", options: ["世界が石炭より再生可能エネルギーから多く発電するようになった", "石炭が増えたこと", "投資が消えたこと"], answer: 0 },
          { q: "本文の教訓は？", options: ["約束は扉を開くが先へ運べるのは行動だけ", "約束だけで十分", "行動は不要"], answer: 0 }
        ]
      },
      {
        id: "d0810-4",
        title: "Reviving the Countryside with Craft",
        level: "★★☆",
        genre: "日本",
        text: "Many rural areas in Japan face a difficult future. As young people move to big cities, small towns lose population, and local shops and traditions struggle to survive. To fight back, some communities are trying a creative strategy: attracting wealthy visitors from around the world with rare, high-quality crafts — including custom-made swords that can cost tens of thousands of dollars.\nWhy focus on luxury crafts? Rural Japan is home to skilled artisans who have practiced their crafts for generations, making swords, pottery, textiles, and other goods by hand. These items cannot be mass-produced, so they are rare and highly valued. A single wealthy traveler who buys one can bring in more money than many ordinary tourists.\nThe idea is not only about selling objects. Visitors come to meet the artisans, watch them work, and learn the stories behind their crafts. This kind of deep, personal experience is exactly what many rich travelers are looking for — something authentic that they cannot find anywhere else.\nThere are challenges. Very few people can afford such expensive items, so the market is small. And communities must protect their traditions from becoming mere shows for tourists.\nStill, the strategy offers hope. By turning their heritage into a valuable experience, struggling towns can earn money, support their artisans, and keep ancient skills alive. It is a reminder that the answer to a modern problem may lie in something very old — a craft, patiently perfected, that the wider world is willing to travel far to see.",
        summaryJa: "日本の多くの地方は難しい未来に直面している。若者が大都市へ移るにつれ、小さな町は人口を失い、地元の店や伝統は生き残りに苦しむ。反撃するため、一部の地域は創意ある戦略を試している——世界中の裕福な訪問者を、希少で高品質な工芸品で惹きつけるのだ。数万ドルもする注文製の刀を含めて。なぜ高級工芸品に注目するのか。地方の日本には、何世代も技を磨いてきた熟練の職人がいて、刀・陶器・織物などを手作りする。こうした品は大量生産できないので希少で高く評価される。一つ買う裕福な旅行者一人が、多くの普通の観光客より多くのお金をもたらしうる。この発想は品物を売ることだけではない。訪問者は職人に会い、作業を見て、工芸の背後の物語を学びに来る。この種の深く個人的な体験こそ、多くの富裕な旅行者が求めるもの——他のどこにも見つからない本物だ。課題もある。そんな高価な品を買える人はごくわずかなので市場は小さい。そして地域は、伝統が観光客向けの単なる見世物になるのを防がねばならない。それでも戦略は希望を与える。遺産を価値ある体験に変えることで、苦境の町はお金を稼ぎ、職人を支え、古い技を生かし続けられる。現代の問題への答えが、とても古いもの——忍耐強く磨かれた工芸、広い世界がはるばる見に来る価値のあるもの——にあるかもしれないことを思い出させる。",
        quiz: [
          { q: "一部の地方が試している戦略は？", options: ["希少で高品質な工芸品で裕福な訪問者を惹きつける", "工場を増やすこと", "伝統をやめること"], answer: 0 },
          { q: "高級工芸品に注目する理由は？", options: ["手作りで希少なため裕福な旅行者一人が多くのお金をもたらす", "安く大量に作れるから", "誰でも買えるから"], answer: 0 },
          { q: "本文が挙げる課題は？", options: ["買える人が少なく市場が小さい／伝統が見世物になる恐れ", "職人が全くいないこと", "刀が作れないこと"], answer: 0 }
        ]
      },
      {
        id: "d0810-5",
        title: "A New Pill for Weight Loss",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "For people struggling with obesity, losing weight can be extremely difficult, and it affects their health in serious ways. Recently, scientists reported promising results from an experimental pill that helped people lose a significant amount of weight — as much as around twelve percent of their body weight over several months. If proven safe, such medicines could change how a common health problem is treated.\nHow does it work? The pill belongs to a family of drugs that copy a natural hormone in the body. This hormone helps control appetite and the feeling of being full. By boosting its effect, the medicine helps people eat less without feeling constantly hungry, so they gradually lose weight.\nWhy is a pill exciting? Similar medicines already exist, but many must be given by injection. A pill that people can simply swallow would be easier and more comfortable to use, which might help more people benefit from the treatment.\nCaution is essential, of course. Every medicine can have side effects, and losing weight safely still depends on healthy eating and activity. A drug is a tool, not a magic cure, and doctors must decide who should use it. Long-term studies are needed to be sure it is both safe and effective.\nStill, the research offers hope. Obesity raises the risk of many serious illnesses, so better treatments could improve millions of lives. Combined with healthy habits, medicines like this may give people a powerful new way to take control of their health — one careful step at a time.",
        summaryJa: "肥満に苦しむ人にとって、体重を減らすのは極めて難しく、健康にも深刻な影響を与える。最近、科学者が、実験段階の錠剤の有望な結果を報告した——数か月で体重の約12％もの大幅な減量を助けたのだ。安全性が証明されれば、こうした薬は、ありふれた健康問題の治療の仕方を変えうる。どう働くのか。この錠剤は、体内の自然なホルモンを模倣する薬の仲間だ。このホルモンは食欲と満腹感の制御を助ける。その効果を高めることで、薬は人々が常に空腹を感じずに食べる量を減らす助けをし、徐々に体重が落ちる。なぜ錠剤が期待されるのか。似た薬は既にあるが、多くは注射で投与せねばならない。ただ飲み込むだけの錠剤は使いやすく快適で、より多くの人が治療の恩恵を受ける助けになるかもしれない。もちろん慎重さが不可欠だ。あらゆる薬に副作用がありうるし、安全に減量するにはなお健康的な食事と運動が要る。薬は道具であって魔法の治療ではなく、誰が使うべきかは医師が判断せねばならない。安全かつ有効と確かめるには長期の研究が必要だ。それでも研究は希望を与える。肥満は多くの深刻な病のリスクを高めるので、より良い治療は何百万もの人生を改善しうる。健康的な習慣と組み合わせれば、こうした薬は人々に健康を取り戻す強力な新しい方法を与えうる——慎重な一歩ずつ。",
        quiz: [
          { q: "この錠剤はどう働くか？", options: ["食欲や満腹感を制御するホルモンの効果を高める", "眠りを深くする", "筋肉を増やす"], answer: 0 },
          { q: "錠剤が期待される理由は？", options: ["注射より飲みやすく多くの人が恩恵を受けうる", "味が良いから", "無料だから"], answer: 0 },
          { q: "本文が促す慎重さは？", options: ["副作用がありうるし健康的な食事と運動もなお必要", "薬だけで十分", "医師の判断は不要"], answer: 0 }
        ]
      }
    ]
  },
    {
    date: "2026-08-09",
    passages: [
      {
        id: "d0809-1",
        title: "Why Markets React to Elections",
        level: "★★★",
        genre: "ビジネス",
        text: "When a country holds an election, the results can move more than just its government — they can move its financial markets too. Recently, stock markets in Asia rose after an election in Japan, as investors expected the new political situation to lead to more government spending. But why should a vote change the price of shares?\nThe key is expectations. Stock prices reflect what investors think will happen in the future, not just what is happening now. An election can change those expectations. If investors believe a new government will spend more, cut taxes, or support certain industries, they may expect companies to earn more — and buy their shares, pushing prices up.\nDifferent policies affect different businesses. A promise to spend on construction may lift building companies, while plans for clean energy may boost solar or battery firms. Investors try to guess who will benefit and act quickly, often before any policy is actually put in place.\nMarkets can also fall after elections, if the result brings uncertainty or policies that worry investors. What markets dislike most is not any single outcome, but confusion about what will happen next.\nIt is important to remember that these early moves are guesses, not guarantees. Promises made in a campaign do not always become reality, and the economy depends on far more than one election.\nStill, the link is real. An election is not only a political event; it is also a moment when millions of investors quietly rewrite their expectations about the future — and money moves as a result.",
        summaryJa: "国が選挙を行うと、その結果は政府だけでなく金融市場も動かしうる。最近、日本の選挙の後、投資家が新しい政治状況はより多くの政府支出につながると期待し、アジアの株式市場が上昇した。だがなぜ投票が株価を変えるのか。鍵は「期待」だ。株価は、今起きていることだけでなく、投資家が将来起きると考えることを映す。選挙はその期待を変えうる。新政府がより多く支出し、減税し、特定の産業を支えると投資家が信じれば、企業がより稼ぐと期待し、株を買って価格を押し上げうる。政策ごとに影響する事業は異なる。建設への支出の約束は建設会社を押し上げ、クリーンエネルギーの計画は太陽光や電池の企業を押し上げうる。投資家は誰が恩恵を受けるか推測し、政策が実際に実施される前に素早く動くことが多い。選挙後に市場が下がることもある——結果が不確実性や投資家を不安にさせる政策をもたらせば。市場が最も嫌うのは、特定の結果でなく、次に何が起きるかの混乱だ。こうした早い動きは推測であって保証ではないと覚えておくことが重要だ。選挙戦の約束は常に現実になるとは限らず、経済は一つの選挙よりはるかに多くに左右される。それでも結びつきは本物だ。選挙は政治的な出来事だけでなく、何百万もの投資家が将来への期待を静かに書き換える瞬間でもあり——その結果、お金が動く。",
        quiz: [
          { q: "選挙が株価を動かす鍵は？", options: ["投資家の将来への「期待」が変わること", "天気が変わること", "株の数が減ること"], answer: 0 },
          { q: "政策ごとに影響が異なる例は？", options: ["建設支出は建設会社、クリーンエネ計画は太陽光や電池を押し上げる", "全企業が同じように動く", "影響は全くない"], answer: 0 },
          { q: "市場が最も嫌うものは？", options: ["次に何が起きるかの混乱（不確実性）", "支出の増加", "減税"], answer: 0 }
        ]
      },
      {
        id: "d0809-2",
        title: "Tiny Cleaners Underground",
        level: "★★★",
        genre: "テクノロジー",
        text: "Some of the most powerful tools for cleaning up pollution may be too small to see. Deep underground, scientists have found, certain bacteria can trap toxic uranium, locking it in place so it cannot spread through soil and water. This natural ability could one day help clean up dangerous pollution left by mining and industry.\nHow can bacteria do this? These tiny living things carry out chemical reactions as part of their normal lives. In some cases, those reactions change harmful metals like uranium into forms that do not dissolve in water. Instead of flowing away and spreading, the uranium becomes solid and stays put, safely trapped underground.\nWhy is this useful? Toxic metals from old mines or factories can seep into groundwater, threatening drinking water and harming health. Cleaning such pollution with machines is expensive and difficult, especially deep below the surface. Using bacteria that are already there — a method called bioremediation — could be cheaper and gentler on the environment.\nThere are challenges. Scientists must understand exactly how the bacteria work, make sure the trapped metal stays locked away, and check that helping these microbes does not cause other problems. Nature is complex, and every action has side effects.\nStill, the idea is inspiring. It shows that solutions to human-made problems can come from unexpected places — even from invisible life beneath our feet. By working with nature rather than against it, scientists hope to turn tiny bacteria into quiet, tireless helpers in the effort to heal polluted land.",
        summaryJa: "汚染を浄化する最も強力な道具のいくつかは、目に見えないほど小さいかもしれない。地下深くで、ある種の細菌が有毒なウランを捕らえ、その場に固定して土壌や水中に広がらないようにできることを科学者が見つけた。この自然の能力は、いつか採掘や産業が残した危険な汚染の浄化を助けうる。細菌はどうやってこれを行うのか。この小さな生き物は、通常の生活の一部として化学反応を行う。場合によっては、その反応がウランのような有害金属を水に溶けない形へ変える。流れ去って広がる代わりに、ウランは固体になりその場にとどまり、地下に安全に閉じ込められる。なぜ有用か。古い鉱山や工場からの有毒金属は地下水に染み込み、飲料水を脅かし健康を害しうる。そうした汚染を機械で浄化するのは高価で難しく、特に地表の深くではなおさらだ。既にそこにいる細菌を使う方法——バイオレメディエーション（生物学的浄化）——は、より安価で環境に優しくなりうる。課題もある。科学者は細菌の働きを正確に理解し、捕らえた金属が閉じ込められたままか確かめ、この微生物を助けることが別の問題を起こさないか確認せねばならない。自然は複雑で、あらゆる行動に副作用がある。それでもこの発想は心を打つ。人間が作った問題への解決策が、思わぬ場所——足下の見えない生命からさえ——来うることを示す。自然に逆らうのでなく共に働くことで、科学者は小さな細菌を、汚染された土地を癒す静かでたゆまぬ助け手に変えたいと願う。",
        quiz: [
          { q: "地下の細菌ができることは？", options: ["有毒なウランを溶けない形にして固定する", "金を作ること", "水を増やすこと"], answer: 0 },
          { q: "細菌を使う浄化（バイオレメディエーション）の利点は？", options: ["機械より安価で環境に優しくなりうる", "必ず一瞬で終わる", "副作用が全くない"], answer: 0 },
          { q: "本文が挙げる課題は？", options: ["働きの理解や別の問題を起こさないかの確認が必要", "細菌が大きすぎること", "ウランが安全なこと"], answer: 0 }
        ]
      },
      {
        id: "d0809-3",
        title: "When the World Plays Together",
        level: "★★☆",
        genre: "世界情勢",
        text: "Few events bring the world together like a major international sports tournament. When teams from many countries gather to compete, billions of people watch, cheer, and share the same moments of excitement. Beyond the games themselves, such events have a big impact on business, cities, and the relationships between nations.\nWhy do these tournaments matter so much? For the host countries, they bring huge numbers of visitors, along with money for hotels, restaurants, and transport. Cities build new stadiums, train stations, and parks, some of which serve local people for years afterward. Companies pay large sums to sponsor teams and advertise to a global audience.\nThere are cultural benefits too. When people from different countries meet as fans, players, and visitors, they share food, language, and customs. A tournament can soften borders for a few weeks, reminding people how much they have in common through a simple love of the game.\nOf course, hosting is not without problems. Building stadiums is expensive, and some are little used after the event. Large crowds require careful planning for safety and transport. Not every promise of lasting benefit comes true.\nStill, the appeal endures. A global tournament is one of the rare moments when the whole world pays attention to the same thing at the same time — not a conflict or a crisis, but a game. In a divided world, that shared joy, however brief, is itself something worth celebrating, connecting strangers across continents through the simple drama of sport.",
        summaryJa: "大きな国際スポーツ大会ほど世界を一つにする出来事は少ない。多くの国のチームが集まって競うと、何十億もの人が見て、応援し、同じ興奮の瞬間を分かち合う。試合そのものを超え、こうした大会はビジネス・都市・国家間の関係に大きな影響を与える。なぜこれらの大会がそれほど重要か。開催国には、膨大な数の来訪者と、ホテル・飲食・交通へのお金をもたらす。都市は新しいスタジアム・駅・公園を建て、その一部は後々何年も地元の人々に役立つ。企業はチームの協賛や世界的な観客への広告に多額を払う。文化的な利点もある。異なる国の人々がファン・選手・来訪者として出会うと、食・言語・習慣を分かち合う。大会は数週間、国境を和らげ、単純な競技への愛を通じて人々がいかに多くの共通点を持つかを思い出させうる。もちろん開催に問題がないわけではない。スタジアム建設は高価で、一部は大会後ほとんど使われない。大群衆は安全と交通の入念な計画を要する。持続的利益の約束が全て叶うわけではない。それでも魅力は続く。世界的な大会は、世界全体が同時に同じもの——対立や危機でなく、一つの試合——に注目する稀な瞬間の一つだ。分断された世界で、その分かち合う喜びは、たとえ短くとも、それ自体祝う価値がある。単純なスポーツのドラマを通じ、大陸を越えて見知らぬ者同士をつなぐのだ。",
        quiz: [
          { q: "国際スポーツ大会が開催国にもたらすものは？", options: ["多くの来訪者とホテル・交通などへのお金", "戦争", "孤立"], answer: 0 },
          { q: "大会の文化的な利点は？", options: ["異なる国の人々が食・言語・習慣を分かち合う", "国境が永久に消える", "言語が一つになる"], answer: 0 },
          { q: "本文が挙げる開催の問題は？", options: ["スタジアム建設が高価で後で使われないこともある", "観客が全く来ないこと", "試合が行われないこと"], answer: 0 }
        ]
      },
      {
        id: "d0809-4",
        title: "The Cooling Custom of Uchimizu",
        level: "★★☆",
        genre: "日本",
        text: "On a hot summer day in Japan, you may see people gently sprinkling water on the street in front of their homes or shops. This simple, old custom is called uchimizu, and it is a gentle way to cool the air and settle the dust. In an age of rising summer temperatures, this centuries-old habit is drawing new interest.\nHow does uchimizu work? When water is spread on a hot surface and then evaporates, it takes heat from the air around it. This is the same reason we feel cool when sweat dries on our skin. A little water on a warm street can lower the temperature nearby by a small but noticeable amount, especially in the shade.\nUchimizu is about more than temperature. Traditionally, sprinkling water was also a way to welcome guests, showing that a space had been prepared and cared for. It carries a feeling of politeness and calm, turning a practical act into a small daily ritual.\nToday, as cities grow hotter, some communities hold uchimizu events, where many people sprinkle water at the same time to cool a whole street. Using leftover or rain water makes the custom friendly to the environment as well.\nOf course, uchimizu alone cannot solve the problem of extreme heat. But it is a gentle reminder that not every solution needs to be high-tech. Sometimes an old, simple habit — a little water, spread with care — can bring a moment of coolness and a touch of tradition to a hot summer day.",
        summaryJa: "日本の暑い夏の日、家や店の前の道に人々がそっと水をまく光景を見るかもしれない。この単純で古い習わしは「打ち水」と呼ばれ、空気を冷やし埃を鎮める穏やかな方法だ。夏の気温が上がる時代に、この何世紀も続く習慣が新たな関心を集めている。打ち水はどう働くのか。熱い表面に水がまかれて蒸発すると、周りの空気から熱を奪う。汗が肌で乾くと涼しく感じるのと同じ理由だ。暖かい道への少しの水は、特に日陰で、近くの温度をわずかだが感じられるほど下げうる。打ち水は温度だけの話ではない。伝統的に、水をまくことは客を迎える方法でもあり、空間が整えられ心を配られたことを示した。丁寧さと落ち着きの感覚を伴い、実用的な行いを小さな日々の儀式に変える。今日、都市が暑くなる中、多くの人が同時に水をまいて通り全体を冷やす打ち水イベントを開く地域もある。残り水や雨水を使えば、習わしは環境にも優しくなる。もちろん打ち水だけで猛暑の問題は解けない。だが、あらゆる解決策が高度な技術を要するわけではないという穏やかな気づきだ。時に、古く単純な習慣——心を込めてまかれた少しの水——が、暑い夏の日に一瞬の涼しさと伝統の趣をもたらしうる。",
        quiz: [
          { q: "「打ち水」とは何をすることか？", options: ["道に水をまいて空気を冷やし埃を鎮める", "道を掃くこと", "花を植えること"], answer: 0 },
          { q: "打ち水が涼しさを生む仕組みは？", options: ["水が蒸発する際に周りの空気から熱を奪う", "水が光るから", "水が重いから"], answer: 0 },
          { q: "本文が伝える気づきは？", options: ["あらゆる解決策が高度な技術を要するわけではない", "打ち水で猛暑は完全に解決する", "伝統は無意味だ"], answer: 0 }
        ]
      },
      {
        id: "d0809-5",
        title: "Ancient Art on an Eggshell",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "Long before writing was invented, humans were already creating art. Scientists studying pieces of ostrich eggshell from southern Africa have found that people were engraving them with careful geometric patterns more than sixty thousand years ago. A closer look shows these designs were even more organized and deliberate than experts once believed.\nWhy is this important? Making patterns on purpose is a sign of symbolic thinking — the ability to use marks to carry meaning. This is one of the qualities that makes humans special. Finding such careful designs so long ago suggests that our ancestors had rich, creative minds far earlier than we sometimes imagine.\nWhy ostrich eggshells? In that time and place, ostrich eggs were valuable. Their strong shells could be used as containers to carry water, much like a bottle. Decorating them may have marked ownership, shown group identity, or simply expressed a love of beauty. The patterns may even have been a kind of message, understood by people who shared the same culture.\nStudying these objects is delicate work. The shells are fragile and ancient, so scientists handle them with great care, using close observation and modern tools to understand the patterns without damaging them.\nThe engraved eggshells are a moving reminder of how deeply human creativity runs. Tens of thousands of years ago, someone sat down and carefully carved a design, for reasons we can only partly guess. Across an enormous gulf of time, that simple act of making art still speaks to us — proof that the urge to create is very old indeed.",
        summaryJa: "文字が発明されるはるか前、人類は既に芸術を生み出していた。南アフリカのダチョウの卵の殻の破片を研究する科学者が、人々が6万年以上前に、丁寧な幾何学模様をそこに彫っていたことを見つけた。よく見ると、これらの意匠は専門家がかつて信じたよりさらに整い、意図的だった。なぜ重要か。意図して模様を作ることは、象徴的思考——印に意味を持たせる能力——の証だ。これは人類を特別にする性質の一つだ。これほど昔にそんな丁寧な意匠が見つかることは、私たちの祖先が、時に想像するよりずっと早くから豊かで創造的な心を持っていたことを示唆する。なぜダチョウの卵の殻か。その時代と場所で、ダチョウの卵は貴重だった。その丈夫な殻は、瓶のように水を運ぶ容器に使えた。装飾は所有を示したり、集団の帰属（アイデンティティ）を表したり、単に美への愛を表したのかもしれない。模様は、同じ文化を共有する人々に理解される一種のメッセージだったことさえありうる。こうした品の研究は繊細な仕事だ。殻は脆く古いので、科学者は細心の注意で扱い、丁寧な観察と現代の道具を使い、傷つけずに模様を理解する。彫られた卵の殻は、人間の創造性がいかに深く流れているかの心打つ気づきだ。何万年も前、誰かが座って丁寧に意匠を刻んだ——その理由を私たちは一部しか推測できない。膨大な時の隔たりを越え、その単純な芸術を作る営みは今も私たちに語りかける——創造したいという衝動が実に古いものである証だ。",
        quiz: [
          { q: "科学者が見つけたことは？", options: ["6万年以上前に卵の殻に幾何学模様が彫られていた", "文字が最初に作られた場所", "新種の鳥"], answer: 0 },
          { q: "意図して模様を作ることが示すのは？", options: ["象徴的思考（印に意味を持たせる能力）", "食べ物の好み", "天気の予測能力"], answer: 0 },
          { q: "ダチョウの卵の殻が使われた理由は？", options: ["丈夫で水を運ぶ容器に使えたから", "食べられないから", "光るから"], answer: 0 }
        ]
      }
    ]
  },
    {
    date: "2026-08-08",
    passages: [
      {
        id: "d0808-1",
        title: "A Tax Cut on Everyday Food",
        level: "★★☆",
        genre: "ビジネス",
        text: "Governments raise most of their money through taxes, and one common kind is a tax added to the things we buy. In Japan, the government has approved a plan to cut this consumption tax on food and non-alcoholic drinks from eight percent down to one percent, for two years. It is a big change aimed at helping households cope with rising prices.\nHow does a consumption tax work? A small percentage is added to the price of goods at the shop, and the store passes that money to the government. Because everyone buys food, a tax on it affects every household, rich or poor. Cutting the tax on food means families pay a little less each time they shop for groceries.\nWhy target food in particular? Food is something no one can avoid buying, so its price hits low-income families hardest. By lowering the tax on essentials while keeping it on other goods, the government tries to ease the burden where it is felt most, especially when prices are climbing.\nThere are trade-offs, of course. Taxes pay for schools, roads, hospitals, and pensions, so cutting one tax means finding money elsewhere or spending less. That is why the cut is temporary, lasting two years.\nFor learners of business English, this is a useful example of how governments use taxes as tools. A tax is not only a way to raise money; it is also a lever that leaders can pull to shape the economy and support people during difficult times.",
        summaryJa: "政府は歳入の多くを税で得ており、よくある一種が、買う物に加わる税だ。日本政府は、食品と酒以外の飲料にかかるこの消費税を、2年間、8％から1％へ引き下げる案を承認した。物価上昇に家計が対処するのを助けることを狙った大きな変更だ。消費税はどう働くか。店で商品の価格に小さな割合が加わり、店がそのお金を政府に渡す。誰もが食品を買うため、それへの税は貧富を問わず全家庭に影響する。食品の税を下げれば、家族は買い物のたびに少しだけ安く払う。なぜ特に食品を対象にするのか。食品は誰も買わずにいられないので、その価格は低所得の家庭に最も重くのしかかる。生活必需品への税を下げ、他の商品には残すことで、政府は特に物価上昇時に、最も強く感じられる負担を和らげようとする。もちろん代償もある。税は学校・道路・病院・年金を賄うので、一つの税を下げれば別の財源を探すか支出を減らすことになる。だからこの引き下げは2年間の一時的なものだ。ビジネス英語の学習者には、政府が税を道具としてどう使うかの良い例だ。税は歳入を得る手段だけでなく、指導者が経済を形づくり困難な時に人々を支えるために引けるレバーでもある。",
        quiz: [
          { q: "日本政府が承認した案は？", options: ["食品などの消費税を8％から1％へ2年間引き下げる", "消費税を完全に廃止する", "食品をすべて無料にする"], answer: 0 },
          { q: "なぜ特に食品を対象にするのか？", options: ["食品は誰も避けられず低所得家庭に最も重いから", "食品が安いから", "食品は課税できないから"], answer: 0 },
          { q: "税を下げる代償は？", options: ["別の財源を探すか支出を減らす必要がある", "歳入が自動的に増える", "何も起きない"], answer: 0 }
        ]
      },
      {
        id: "d0808-2",
        title: "Cleaner Power with Less Precious Metal",
        level: "★★★",
        genre: "テクノロジー",
        text: "Hydrogen fuel cells are a promising clean technology. They combine hydrogen and oxygen to make electricity, producing only water as waste — no smoke, no carbon dioxide. But they have a costly problem: many fuel cells rely on platinum, a rare and expensive metal, to make the reaction work. Now scientists have found a way to use far less of it.\nWhy is platinum such an obstacle? It is one of the rarest metals on Earth, so it is expensive and hard to obtain in large amounts. If every fuel cell needs a lot of platinum, the technology becomes too costly to use widely. Reducing the amount needed could help fuel cells compete with other ways of making power.\nThe new approach uses a specially designed carbon structure at a tiny scale. This clever material holds even small amounts of platinum in a way that keeps the reaction fast, efficient, and stable over time. In other words, it does more with less.\nWhy does this matter now? As the world seeks clean energy, fuel cells could power vehicles, buildings, and even the huge data centers that run artificial intelligence. Making them cheaper and more durable brings that future closer.\nChallenges remain, as always. Laboratory success must be proven at large scale, and hydrogen itself must be produced cleanly and cheaply. Still, the discovery is encouraging. By using a precious resource more wisely, scientists take another small but meaningful step toward practical, clean power for a hungry, energy-using world.",
        summaryJa: "水素燃料電池は有望なクリーン技術だ。水素と酸素を結びつけて電気を作り、廃棄物は水だけ——煙も二酸化炭素も出さない。だが高価な問題がある。多くの燃料電池は、反応を働かせるために希少で高価な金属・白金（プラチナ）に頼る。いま科学者が、それをはるかに少なく使う方法を見つけた。なぜ白金が障害なのか。地球で最も希少な金属の一つで、高価で大量に得るのが難しい。全ての燃料電池が多くの白金を要すれば、技術は広く使うには高価すぎる。必要量を減らせれば、燃料電池が他の発電方法と競えるようになる。新手法は、微小スケールで特別に設計した炭素構造を使う。この巧妙な材料は、少量の白金でも反応を速く・効率的に・長期に安定して保つように支える。つまり、より少なくより多くを成す。なぜ今重要か。世界がクリーンエネルギーを求める中、燃料電池は車・建物・さらにはAIを動かす巨大なデータセンターに電力を供給しうる。より安く丈夫にすることが、その未来を近づける。課題は常に残る。実験室の成功は大規模で証明せねばならず、水素自体もクリーンかつ安く作らねばならない。それでも発見は励みになる。貴重な資源をより賢く使うことで、科学者は、エネルギーを渇望する世界のための実用的でクリーンな電力へ、また小さくも意味ある一歩を進める。",
        quiz: [
          { q: "水素燃料電池の廃棄物は？", options: ["水だけ", "煙", "二酸化炭素"], answer: 0 },
          { q: "白金が障害となる理由は？", options: ["希少で高価、大量に得るのが難しいから", "柔らかすぎるから", "電気を通さないから"], answer: 0 },
          { q: "新手法が使う工夫は？", options: ["微小スケールの特別な炭素構造で少量の白金を効率よく働かせる", "白金を増やす", "水を使わない"], answer: 0 }
        ]
      },
      {
        id: "d0808-3",
        title: "Why Countries Spread Their Bets",
        level: "★★★",
        genre: "世界情勢",
        text: "There is an old piece of advice: do not put all your eggs in one basket. Countries are learning to apply this wisdom to the vital materials they import. Recently, Japan announced that it would seek to buy crude oil and rare earth metals from a wider range of sources, rather than relying too heavily on just a few. The goal is a safer, more stable supply.\nWhy spread out suppliers? If a country buys a crucial material from only one place, it becomes vulnerable. A political dispute, a natural disaster, or a sudden price rise could cut off the supply, harming factories and daily life. By buying from many countries, a nation reduces the risk that any single problem will leave it short.\nRare earths are a good example. These metals are essential for magnets, motors, electronics, and clean-energy technology, yet they come mostly from a small number of places. Depending on one supplier for such important materials is risky, so countries are searching for new sources and even trying to recycle what they already have.\nDiversifying is not simple or cheap. Building new trade relationships takes time, and new suppliers may cost more or need new infrastructure. But many governments now see this as worthwhile insurance.\nThe wider lesson applies to businesses and individuals too. Relying on a single source of anything important — a supplier, a customer, or a skill — carries hidden risk. Spreading your bets may cost a little more today, but it can protect you against a much larger loss tomorrow.",
        summaryJa: "古い助言がある——卵を一つのかごに全部盛るな。各国は、この知恵を輸入する重要な材料に当てはめ始めている。最近、日本は、原油やレアアース（希土類金属）を、ごく少数に頼りすぎるのでなく、より広い供給元から買おうとすると表明した。狙いはより安全で安定した供給だ。なぜ供給元を分散するのか。ある国が重要な材料を一か所からしか買わなければ、脆くなる。政治的対立・自然災害・急な価格上昇が供給を断ち、工場や日常を害しうる。多くの国から買うことで、一つの問題で不足に陥るリスクを減らせる。レアアースは良い例だ。これらの金属は磁石・モーター・電子機器・クリーンエネルギー技術に不可欠だが、主に少数の場所から来る。そんな重要な材料を一つの供給元に頼るのは危ういので、各国は新たな供給源を探し、既にある物を再生しようとさえする。分散は単純でも安くもない。新たな貿易関係の構築には時間がかかり、新供給元は費用が高いか新しいインフラを要しうる。だが多くの政府は今、これを価値ある保険と見る。より広い教訓は企業や個人にも当てはまる。重要な何か——供給元・顧客・技能——を単一の源に頼ることは、隠れたリスクを伴う。賭けを分散することは今日は少し高くつくかもしれないが、明日のはるかに大きな損失から守りうる。",
        quiz: [
          { q: "日本が表明した方針は？", options: ["原油やレアアースをより広い供給元から買う", "輸入を全てやめる", "一か所だけから買う"], answer: 0 },
          { q: "供給元を分散する理由は？", options: ["一つの問題で不足に陥るリスクを減らすため", "費用を増やすため", "材料を捨てるため"], answer: 0 },
          { q: "本文の広い教訓は？", options: ["重要な何かを単一の源に頼るのは隠れたリスクがある", "分散は無意味である", "一つに頼るのが最善である"], answer: 0 }
        ]
      },
      {
        id: "d0808-4",
        title: "A Day of Lucky Eights",
        level: "★★☆",
        genre: "日本",
        text: "On August 8, 2026, many people in Japan celebrated a date they considered especially lucky. Written out, the day lined up three eights: the eighth day of the eighth month, in the eighth year of the current imperial era, Reiwa. Couples chose it for their weddings, shops offered special sales, and events marked the rare arrangement of numbers.\nWhy is eight seen as lucky? In Japan, the shape of the character for eight widens toward the bottom. This spreading form is linked to the idea of growing, expanding good fortune — prosperity that opens out and increases over time. Because of this, eight has long been considered a favorable number.\nBeliefs about lucky and unlucky numbers appear in many cultures. In some places, certain numbers are avoided in buildings or phone numbers, while others are welcomed for weddings or business openings. These ideas may not be based on science, but they carry real meaning for people, shaping choices about important days.\nDates like this one show how culture adds color to the calendar. A day that is, on the surface, just another summer date becomes a reason to celebrate, to marry, or to start something new — simply because of how its numbers line up.\nFor learners of Japanese culture, such customs are a friendly window into how a society thinks. Behind the sales and the weddings is a gentle, hopeful idea: that with the right timing and a bit of good fortune, life can keep growing, expanding, and getting better.",
        summaryJa: "2026年8月8日、日本の多くの人が、特に縁起が良いと考える日を祝った。書き出すと、その日は三つの八が並ぶ——現在の元号・令和8年の、8月8日。カップルは結婚式にこの日を選び、店は特別セールを行い、催しが珍しい数字の並びを祝った。なぜ八は縁起が良いとされるのか。日本では、八の字の形が下へ向かって広がる。この広がる形が、育ち広がる幸運——時とともに末広がりに増える繁栄——の考えに結びつく。このため八は長く好ましい数とされてきた。縁起の良い・悪い数への信念は多くの文化に現れる。ある場所では特定の数が建物や電話番号で避けられ、別の数は結婚式や開店で歓迎される。こうした考えは科学に基づかないかもしれないが、人々には本当の意味を持ち、大切な日の選択を形づくる。この日のような日付は、文化が暦に彩りを添える様子を示す。表面上はただの夏の一日が、数字の並び方だけで、祝い、結婚し、何かを始める理由になる。日本文化の学習者には、こうした習わしは社会の考え方をのぞく親しみやすい窓だ。セールや結婚式の背後には、穏やかで希望に満ちた考えがある——適切な時機と少しの幸運があれば、人生は育ち、広がり、良くなり続けられる、という。",
        quiz: [
          { q: "2026年8月8日が縁起が良いとされた理由は？", options: ["令和8年8月8日と三つの八が並ぶから", "国民の祝日だから", "満月だったから"], answer: 0 },
          { q: "なぜ八が好ましい数とされるのか？", options: ["字の形が下へ広がり末広がりの繁栄に結びつくから", "数が大きいから", "発音が短いから"], answer: 0 },
          { q: "本文が縁起の数について述べることは？", options: ["科学に基づかなくとも人々に本当の意味を持つ", "全て科学的に証明された事実である", "日本だけに存在する考えである"], answer: 0 }
        ]
      },
      {
        id: "d0808-5",
        title: "A Visitor from the Early Solar System",
        level: "★★★",
        genre: "科学・カルチャー",
        text: "One day, a rock crashed through the roof of a house, startling the people inside. It turned out to be a meteorite — a piece of an asteroid that had traveled through space for billions of years before landing on Earth. When scientists examined it, they found something remarkable: traces of ancient salty water, organic compounds, and even amino acids, the building blocks of proteins.\nWhy is such a rock so valuable? Meteorites are like time capsules from the birth of the solar system. While Earth has changed enormously over billions of years, small asteroids have stayed almost the same. Studying a meteorite lets scientists look back to a time long before our planet formed its oceans and life.\nThe discovery of amino acids is especially exciting. Amino acids are essential to life as we know it. Finding them inside a space rock suggests that some of the ingredients for life may form in space and be delivered to planets by falling meteorites. This does not mean the rock carried life, only some of its chemical building blocks.\nScientists study such samples with great care, using powerful instruments to read their chemistry without contaminating them. Each meteorite adds a small clue to a very big question: how did life begin?\nThe fallen rock is a reminder that the universe is not far away and separate from us. Material from distant asteroids reaches Earth, carrying stories from the deep past — and perhaps hints about how, on at least one small planet, lifeless chemistry once became something alive.",
        summaryJa: "ある日、一つの岩が家の屋根を突き破り、中の人々を驚かせた。それは隕石だった——地球に落ちる前、何十億年も宇宙を旅した小惑星のかけらだ。科学者が調べると、驚くべきものを見つけた。古い塩水の痕跡、有機化合物、そしてタンパク質の構成要素であるアミノ酸までも。なぜそんな岩が価値あるのか。隕石は太陽系誕生時のタイムカプセルのようなものだ。地球は何十億年で大きく変わったが、小さな小惑星はほとんど変わらないままだった。隕石を研究することで、科学者は地球が海や生命を形づくるはるか前の時代を振り返れる。アミノ酸の発見は特に胸躍る。アミノ酸は私たちの知る生命に不可欠だ。宇宙の岩の中にそれを見つけたことは、生命の材料の一部が宇宙で形成され、落ちてくる隕石によって惑星に運ばれうることを示唆する。これは岩が生命を運んだという意味ではなく、その化学的な構成要素の一部だけだ。科学者はこうした試料を、汚染せずに化学を読み取る強力な機器を使い、細心の注意で研究する。各隕石が、非常に大きな問い——生命はどう始まったのか——に小さな手がかりを加える。落ちてきた岩は、宇宙が私たちから遠く隔たってはいないことを思い出させる。遠い小惑星の物質が地球に届き、深い過去の物語を運ぶ——そしておそらく、少なくとも一つの小さな惑星で、生命なき化学がかつてどう生きたものになったかのヒントも。",
        quiz: [
          { q: "隕石の中から見つかったものは？", options: ["古い塩水の痕跡・有機化合物・アミノ酸", "金と銀", "生きた動物"], answer: 0 },
          { q: "隕石が価値ある理由は？", options: ["太陽系誕生時のほぼ変わらないタイムカプセルだから", "高価な宝石だから", "最近作られたものだから"], answer: 0 },
          { q: "アミノ酸の発見が示唆することは？", options: ["生命の材料の一部が宇宙で形成され惑星に運ばれうる", "岩が生命そのものを運んだ", "生命は不要である"], answer: 0 }
        ]
      }
    ]
  }
  ] };
