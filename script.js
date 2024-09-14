政策を行うことです。"
    },
    {
        question: "デフレ・スパイラルとはどのような状態を指しますか？",
        choices: [
            "物価下落が続き、経済活動が停滞する悪循環",
            "物価上昇が急激に進む現象",
            "賃金が上がり続ける状態",
            "政府の支出が減少し続ける状態",
            "貿易赤字が拡大する現象"
        ],
        answer: "物価下落が続き、経済活動が停滞する悪循環",
        explanation: "デフレ・スパイラルとは、物価の下落が続き、経済全体で需要が減少し、結果として経済活動が停滞する悪循環のことです。"
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
