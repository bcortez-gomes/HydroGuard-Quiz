const quizData = [
    {
        question: "O que causa a maioria das enchentes nas cidades?",
        options: [
            "Falta de drenagem e lixo nos bueiros",
            "Calor excessivo seguido de chuva moderada",
        ],
        correct: 0,
    },
    {
        question: "Qual é o principal risco à saúde durante uma enchente?",
        options: [
            "Poluição sonora e má alimentação",
            "Contaminação e doenças",
        ],
        correct: 1,
    },
    {
        question:
            "Como a vegetação ajuda a evitar enchentes?",
        options: [
            "Refresca o ar diminuindo a precipitação",
            "Absorve a água da chuva",
        ],
        correct: 1,
    },
    {
        question: "O que NÃO se deve fazer durante uma enchente?",
        options: [
            "Observar o nível da água pela janela",
            "Andar em ruas alagadas",
        ],
        correct: 1,
    },
    {
        question: "Qual é uma medida preventiva contra enchentes urbanas?",
        options: [
            "Construir ruas mais largas e asfaltadas",
            "Limpeza de bueiros e rios"
        ],
        correct: 1,
    },
    {
        question: "Qual o papel dos rios na ocorrência de enchentes urbanas?",
        options: [
            "Transbordam quando chove demais",
            "Servem como esgoto natural"],
        correct: 0,
    },
    {
        question: "Qual atitude da população ajuda a reduzir enchentes?",
        options: [
            "Jogar lixo em terrenos baldios",
            "Plantar árvores e cuidar dos jardins"],
        correct: 1,
    },
    {
        question: "O que é uma enchente?",
        options: [
            "Aumento no nível das águas que invadem áreas urbanas", "Tremor de terra seguido de chuva"
        ],
        correct: 0,
    },
    {
        question: "Como o descarte de lixo irregular contribui para enchentes?",
        options: [
            "Impede o crescimento de árvores",
            "Entope os sistemas de drenagem"],
        correct: 1,
    },
    {
        question: "Por que áreas asfaltadas favorecem enchentes?",
        options: [
            "Impedem a infiltração da água no solo",
            "Aumentam a umidade do ar",
        ],
        correct: 0,
    },
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    if (currentQuestion < quizData.length) {
        const q = quizData[currentQuestion];

        const questionDiv = document.getElementById("question");
        questionDiv.innerHTML = "";
        const questionP = document.createElement("p");
        questionP.textContent = q.question;
        questionP.classList.add("question-text");
        questionDiv.appendChild(questionP);

        for (let i = 0; i < 2; i++) {
            const optDiv = document.getElementById("opt" + i);
            optDiv.innerHTML = "";
            const p = document.createElement("p");
            p.textContent = q.options[i];
            p.classList.add("option-text");
            optDiv.appendChild(p);
        }
    } else {
        showResult();
    }
}

function selectOption(index) {
    const q = quizData[currentQuestion];

    if (index === q.correct) {
        score++;
    }

    currentQuestion++;
    loadQuestion();
}


function showResult() {
    const resultContainer = document.getElementById("result-container");
    const scoreDisplay = document.getElementById("score");

    scoreDisplay.textContent = score;

    resultContainer.style.display = "block";
    document.querySelector(".quiz-container").style.display = "none"; 
}


loadQuestion();