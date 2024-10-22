const questions = {
  general: [
    {
      question: "नेपाल समुन्द्र सतहबाट कति टाढा रहेको छ?",
      answer: [
        { text: "११७२ माइल", correct: false },
        { text: "११२७ माइल", correct: true },
        { text: "१२२७ माइल", correct: false },
        { text: "१३२७ माइल", correct: false },
      ],
    },
    {
      question: "भगवान गौतम बुद्धले उपदेश दिएको स्थान कुन हो??",
      answer: [
        { text: "सारनाथ", correct: true },
        { text: "वैशाली", correct: false },
        { text: "श्रावस्ती", correct: false },
        { text: "बोधगया", correct: false },
      ],
    },
    {
      question:
        "नेपाल इतिहासमा कार्यालय समय १०-४ निर्धारण गर्ने राणा प्रधानमन्त्रीको हुन?",
      answer: [
        { text: "वीर शमशेर", correct: false },
        { text: "चन्द्र शमशेर", correct: false },
        { text: "देव शमशेर", correct: false },
        { text: "भिम शमशेर", correct: true },
      ],
    },
    {
      question:
        "नेपाल इतिहासमा कार्यालय समय १०-५ निर्धारण गर्ने राणा प्रधानमन्त्रीको हुन?",
      answer: [
        { text: "वीर शमशेर", correct: false },
        { text: "चन्द्र शमशेर", correct: false },
        { text: "देव शमशेर", correct: true },
        { text: "भिम शमशेर", correct: false },
      ],
    },
    {
      question:
        "राष्ट्रकवि माधवप्रसाद घिमिरेको कति वर्षको उमेरमा निधन भएको थियो?",
      answer: [
        { text: "९९ वर्ष", correct: false },
        { text: "१०७ वर्ष", correct: false },
        { text: "१०१ वर्ष", correct: true },
        { text: "१०३ वर्ष", correct: false },
      ],
    },
    {
      question: "निजामती सेवा नियमावली २०५० मा कति वटा अनुसूची रहेका छन?",
      answer: [
        { text: "८", correct: false },
        { text: "१९", correct: true },
        { text: "२०", correct: false },
        { text: "१२", correct: false },
      ],
    },
    {
      question:
        "प्रत्येक बर्ष संयुक्त राष्ट्र संघ दिवस (UN DAY) कहिले मनाइने गरिएको छ?",
      answer: [
        { text: "अक्टोबर २०", correct: false },
        { text: "अक्टोबर २४", correct: true },
        { text: "अक्टोबर १", correct: false },
        { text: "अक्टोबर २८", correct: false },
      ],
    },
    {
      question: "पुरातात्विक महत्वको क्षेत्र सैनामैना कुन जिल्लामा पर्दछ?",
      answer: [
        { text: "सुर्खेत", correct: false },
        { text: "नवलपरासी", correct: false },
        { text: "रुपन्देही", correct: true },
        { text: "सल्यान", correct: false },
      ],
    },
    {
      question:
        "सार्कको इतिहासमा आफ्नो कार्याकाल पुरा नगरी पदबाट राजिनामा गर्ने पहिलो महासचिव कुन देशका नागरिक हुन?",
      answer: [
        { text: "श्रीलंका", correct: false },
        { text: "भारत", correct: false },
        { text: "पाकिस्तान", correct: false },
        { text: "माल्दिभ्स", correct: true },
      ],
    },
    {
      question: "भगवान गौतम बुद्धले कति वर्षको उमेरमा घर छाडेका थिए?",
      answer: [
        { text: "३५ वर्ष", correct: false },
        { text: "२९ वर्ष", correct: true },
        { text: "१६ वर्ष", correct: false },
        { text: "घर नै छाडेका थिएन", correct: false },
      ],
    },
  ],
  computer: [
    {
      question: "Full form of CPU",
      answer: [
        { text: "Control Program Unit", correct: false },
        { text: "Computer Problem Unit", correct: false },
        { text: "Compute Processing Unit", correct: false },
        { text: "Central Processing Unit", correct: true },
      ],
    },
    {
      question: "What is the extension of workbook file?",
      answer: [
        { text: ".txt", correct: false },
        { text: ".doc", correct: false },
        { text: ".xls", correct: true },
        { text: ".tmp", correct: false },
      ],
    },
    {
      question: "What is B2 in excel",
      answer: [
        { text: "column heading B and row 2", correct: false },
        { text: "row heading", correct: false },
        { text: "cell reference", correct: true },
        { text: "both a and b", correct: false },
      ],
    },
    {
      question: "Which of the following key is used to slide show?",
      answer: [
        { text: "f1", correct: false },
        { text: "f2", correct: false },
        { text: "f3", correct: false },
        { text: "f5", correct: true },
      ],
    },
    {
      question: "which is not filed property",
      answer: [
        { text: "format", correct: false },
        { text: "indexed", correct: false },
        { text: "colour", correct: true },
        { text: "field size", correct: false },
      ],
    },
    {
      question: "Hyperlinks can be",
      answer: [
        { text: "text", correct: false },
        { text: "picture", correct: false },
        { text: "Drawing object", correct: false },
        { text: "All of the above", correct: true },
      ],
    },
    {
      question: "cut paste stand for",
      answer: [
        { text: "copy", correct: false },
        { text: "move", correct: true },
        { text: "insert", correct: false },
        { text: "delete", correct: false },
      ],
    },
    {
      question: "A state is a bi-stable electronic circuit that has..",
      answer: [
        { text: "Logic gates", correct: false },
        { text: "Low level language", correct: false },
        { text: "High level language", correct: false },
        { text: "Application language", correct: true },
      ],
    },
    {
      question: "Which is another name for functional language?",
      answer: [
        { text: "Machine", correct: false },
        { text: "Computer Problem Unit", correct: false },
        { text: "Compute Processing Unit", correct: false },
        { text: "Central Processing Unit", correct: true },
      ],
    },
    {
      question:
        "A_____is a software application for retrieving, presentation and traversing information resources on the World Wide Web.",
      answer: [
        { text: "E-mail", correct: false },
        { text: "HTTP", correct: false },
        { text: "Web browser", correct: true },
        { text: "Search Engine", correct: false },
      ],
    },
  ],
};

const categoryButtons = document.querySelectorAll(".category-btn");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentCategory = "general";
let shuffledQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentCategory = button.dataset.category;
    startQuiz();
  });
});

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  shuffledQuestions = questions[currentCategory].sort(
    () => Math.random() - 0.5
  );
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = shuffledQuestions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  // Shuffle the answers for the current question
  let shuffledAnswers = currentQuestion.answer.sort(() => Math.random() - 0.5);

  shuffledAnswers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${shuffledQuestions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < shuffledQuestions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < shuffledQuestions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
