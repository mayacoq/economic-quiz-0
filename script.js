const beginnerQuestions = [
    {
        question: "GDPとは何の略ですか？",
        choices: ["Gross Domestic Product", "General Domestic Price", "Global Development Plan"],
        answer: "Gross Domestic Product",
        explanation: "GDP（Gross Domestic Product）は、国内総生産の略で、一定期間内に国内で生産された財・サービスの総価値を指します。"
    },
    {
        question: "需要と供給のバランスが崩れた状態で発生するのはどちらですか？",
        choices: ["デフレーション", "インフレーション", "スタグフレーション"],
        answer: "インフレーション",
        explanation: "インフレーションは、需要が供給を上回り、物価が持続的に上昇する現象です。"
    },
    {
        question: "貨幣の流通量が減少し、物価が継続的に下落する現象を何といいますか？",
        choices: ["インフレーション", "デフレーション", "ハイパーインフレーション"],
        answer: "デフレーション",
        explanation: "デフレーションは、貨幣の流通量が減少し、物価が持続的に下落する現象です。"
    },
    {
        question: "供給曲線が右にシフトする原因はどれですか？",
        choices: ["生産コストの上昇", "技術革新", "需要の増加"],
        answer: "技術革新",
        explanation: "技術革新は、供給曲線を右にシフトさせ、同じ価格でも多くの供給が可能になります。"
    },
    {
        question: "通貨の価値が他国通貨に対して上昇する現象を何といいますか？",
        choices: ["為替リスク", "通貨安", "通貨高"],
        answer: "通貨高",
        explanation: "通貨高は、他国通貨に対して自国通貨の価値が上昇する現象です。"
    }
];

const intermediateQuestions = [
    {
        question: "「需給ギャップ」とは何ですか？",
        choices: ["需要が供給を上回る状態", "供給が需要を上回る状態", "需要と供給の差が経済に悪影響を与える状態"],
        answer: "需要と供給の差が経済に悪影響を与える状態",
        explanation: "需給ギャップは、需要と供給のバランスが崩れた結果、経済に悪影響を与える現象を指します。"
    },
    {
        question: "フィリップス曲線とは何を示しているものですか？",
        choices: ["失業率とインフレーション率のトレードオフ", "利子率と投資の関係", "消費と貯蓄のバランス"],
        answer: "失業率とインフレーション率のトレードオフ",
        explanation: "フィリップス曲線は、失業率とインフレーション率が逆相関の関係にあることを示しています。"
    },
    {
        question: "「リスクプレミアム」とは何を指しますか？",
        choices: ["リスクを取ることで得られる追加のリターン", "損失が発生した際の保険料", "株式市場の成長率"],
        answer: "リスクを取ることで得られる追加のリターン",
        explanation: "リスクプレミアムは、リスクを取った投資家が追加で得られるリターンのことです。"
    },
    {
        question: "流動性の罠はどのような状態を指しますか？",
        choices: ["政府の財政赤字が拡大する状態", "金利が低くても投資や消費が増えない状態", "物価が急激に下落する状態"],
        answer: "金利が低くても投資や消費が増えない状態",
        explanation: "流動性の罠は、金利がゼロに近い低水準でも投資や消費が増加しない状態を指します。"
    },
    {
        question: "貨幣乗数が大きいほど、何が大きいといえますか？",
        choices: ["銀行の預金準備率", "信用創造の効果", "物価上昇率"],
        answer: "信用創造の効果",
        explanation: "貨幣乗数が大きいほど、銀行が預金の一部を貸し出すことによる信用創造の効果が大きくなります。"
    }
];

const advancedQuestions = [
    {
        question: "クラウディングアウト効果とは何ですか？",
        choices: [
            "政府の借入が民間の資金調達を押し出し、民間の投資が減少すること",
            "政府が民間企業に融資すること",
            "銀行が貸し出しを増やすことで経済成長が促進される現象",
            "民間企業が政府から借り入れること",
            "政府の支出が増加することで民間の投資が活性化される現象"
        ],
        answer: "政府の借入が民間の資金調達を押し出し、民間の投資が減少すること",
        explanation: "クラウディングアウト効果は、政府が借入を増やすことで、民間の資金調達を阻害し、民間投資が減少する現象です。"
    },
    {
        question: "「信用創造」のプロセスについて説明してください。",
        choices: [
            "銀行が預金の一部を貸し出すことで、預金が増加し経済全体で貨幣供給が増えるプロセス",
            "政府が国債を発行し、通貨を創出するプロセス",
            "中央銀行が金利を操作して貨幣供給を調整するプロセス",
            "銀行が新しい通貨を発行するプロセス",
            "企業が株式を発行して資金を調達するプロセス"
        ],
        answer: "銀行が預金の一部を貸し出すことで、預金が増加し経済全体で貨幣供給が増えるプロセス",
        explanation: "信用創造とは、銀行が預金の一部を貸し出すことで、新たな預金を生み出し、経済全体の貨幣供給量が増加するプロセスです。"
    },
    {
        question: "サプライサイド経済学の基本的な概念とは何ですか？",
        choices: [
            "税制改革や規制緩和によって企業の生産能力を向上させる経済理論",
            "政府が積極的に支出を増やして需要を拡大する政策",
            "銀行が利率を上げてインフレーションを抑制する政策",
            "消費者の購買力を向上させることで経済成長を目指す政策",
            "外国との貿易を通じて国際競争力を高める理論"
        ],
        answer: "税制改革や規制緩和によって企業の生産能力を向上させる経済理論",
        explanation: "サプライサイド経済学は、税制改革や規制緩和によって企業の生産能力を向上させ、経済成長を促進する理論です。"
    },
    {
        question: "インフレターゲットとは何ですか？",
        choices: [
            "中央銀行が一定のインフレ率を目標に金融政策を行うこと",
            "政府が物価上昇を抑制するために行う政策",
            "消費者がインフレに対処するために節約する方法",
            "輸入物価を抑制するための政策",
            "物価上昇を防ぐために消費税を引き上げる政策"
        ],
        answer: "中央銀行が一定のインフレ率を目標に金融政策を行うこと",
        explanation:
