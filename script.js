// クイズデータ
const beginnerQuestions = [
    {
        question: "GDPとは何の略ですか？",
        choices: ["Gross Domestic Product", "General Domestic Price", "Global Development Plan"],
        answer: "Gross Domestic Product",
        explanation: "GDP（Gross Domestic Product）は、国内総生産の略で、一定期間内に国内で生産された財・サービスの総価値を指します。"
    },
    {
        question: "世の中のモノやサービスの価格（物価）が全体的に継続して上昇することを何と言いますか？",
        choices: ["デフレーション", "インフレーション", "スタグフレーション"],
        answer: "インフレーション",
        explanation: "インフレーションは、需要が供給を上回り、物価が持続的に上昇する現象です。"
    },
    {
        question: "貨幣の流通量が減少し、物価が継続的に下落する現象を何といいますか？",
        choices: ["インフレーション", "デフレーション", "ハイパーインフレーション"],
        answer: "デフレーション",
        explanation: "デフレーションは、貨幣の流通量が減少し、物価が持続的に下落する現象です。"
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
        choices: ["失業率とインフレーション率の逆相関", "利子率と投資の関係", "消費と貯蓄のバランス"],
        answer: "失業率とインフレーション率のトレードオフ",
        explanation: "フィリップス曲線は、失業率とインフレーション率が逆相関の関係にあることを示しています。"
    }
];

const advancedQuestions = [
    {
        question: "クラウディングアウト効果とは何ですか？",
        choices: ["政府の借入が民間の資金調達を押し出し、民間の投資が減少することを指す。"],
        answer: "政府の借入が民間の資金調達を押し出し、民間の投資が減少することを指す。",
        explanation: "クラウディングアウト効果は、政府が借入を増やすことで、民間の資金調達を阻害し、民間投資が減少する現象です。"
    },
    {
        question: "「信用創造」のプロセスについて説明してください。",
        choices: ["銀行が預金の一部を貸し出すことで、預金が増加し経済全体で貨幣供給が増えるプロセス。"],
        answer: "銀行が預金の一部を貸し出すことで、預金が増加し経済全体で貨幣供給が増えるプロセス。",
        explanation: "信用創造とは、銀行が預金の一部を貸し出すことで、新たな預金を生み出し、経済全体の貨幣供給量が増加するプロセスです。"
    }
];

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let results = [];

// クイズ開始
function startQuiz(level) {
    const startScreen = document.getElementById("start-screen");
    const quizScreen = document.getElementById("quiz-screen");

    if (level === "beginner") {
        currentQuestions = beginnerQuestions;
    } else if (level === "intermediate") {
        currentQuestions = intermediateQuestions;
    } else if (level === "advanced") {
        currentQuestions = advancedQuestions;
    }

    startScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");

    showQuestion();
}

// 質問を表示
function showQuestion() {
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");
    const questionData = currentQuestions[currentQuestionIndex];

    questionElement.textContent = questionData.question;
    choicesElement.innerHTML = "";

    questionData.choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.onclick = () => selectAnswer(choice);
        choicesElement.appendChild(button);
    });
}

// 答えを選択
function selectAnswer(choice) {
    const questionData = currentQuestions[currentQuestionIndex];
    const isCorrect = choice === questionData.answer;

    if (isCorrect) {
        score++;
    }

    results.push({
        question: questionData.question,
        selectedAnswer: choice,
        correctAnswer: questionData.answer,
        explanation: questionData.explanation,
        isCorrect: isCorrect
    });

    currentQuestionIndex++;

    if (currentQuestionIndex < currentQuestions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// 結果を表示
function showResult() {
    const quizScreen = document.getElementById("quiz-screen");
    const resultScreen = document.getElementById("result-screen");
    const resultText = document.getElementById("result-text");

    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");

    let resultHTML = `<p>あなたのスコアは ${score} 点です！</p>`;
    resultHTML += "<h3>詳細:</h3>";
    resultHTML += "<ul>";

    results.forEach(result => {
        resultHTML += `
            <li>
                <strong>質問:</strong> ${result.question}<br>
                <strong>あなたの答え:</strong> ${result.selectedAnswer}<br>
                <strong>正解:</strong> ${result.correctAnswer}<br>
                <strong>解説:</strong> ${result.explanation}<br>
                <strong>結果:</strong> ${result.isCorrect ? "正解" : "不正解"}
            </li><br>
        `;
    });

    resultHTML += "</ul>";
    resultText.innerHTML = resultHTML;
}

// 次の質問へ進む
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        showQuestion();
    } else {
        showResult();
    }
}
