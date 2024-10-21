/*-----------------------------------QUESTIONS----------------------------*/

const questions = [
  {
    question: 'What is the capital of France?',
    answers: [
      { text: 'Berlin', correct: false },
      { text: 'Madrid', correct: false },
      { text: 'Paris', correct: true },
      { text: 'Rome', correct: false },
    ],
  },
  {
    question: 'What is the largest planet in our solar system?',
    answers: [
      { text: 'Mars', correct: false },
      { text: 'Earth', correct: false },
      { text: 'Jupiter', correct: true },
      { text: 'Venus', correct: false },
    ],
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    answers: [
      { text: 'Oxygen', correct: true },
      { text: 'Gold', correct: false },
      { text: 'Iron', correct: false },
      { text: 'Helium', correct: false },
    ],
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    answers: [
      { text: 'Harper Lee', correct: true },
      { text: 'Mark Twain', correct: false },
      { text: 'F. Scott Fitzgerald', correct: false },
      { text: 'Ernest Hemingway', correct: false },
    ],
  },
  {
    question: 'What is the hardest natural substance on Earth?',
    answers: [
      { text: 'Gold', correct: false },
      { text: 'Diamond', correct: true },
      { text: 'Iron', correct: false },
      { text: 'Silver', correct: false },
    ],
  },
  {
    question: 'Which planet is known as the Red Planet?',
    answers: [
      { text: 'Venus', correct: false },
      { text: 'Mars', correct: true },
      { text: 'Saturn', correct: false },
      { text: 'Mercury', correct: false },
    ],
  },
  {
    question: 'In which year did World War II end?',
    answers: [
      { text: '1939', correct: false },
      { text: '1945', correct: true },
      { text: '1918', correct: false },
      { text: '1963', correct: false },
    ],
  },
  {
    question: 'Who painted the Mona Lisa?',
    answers: [
      { text: 'Vincent van Gogh', correct: false },
      { text: 'Pablo Picasso', correct: false },
      { text: 'Leonardo da Vinci', correct: true },
      { text: 'Claude Monet', correct: false },
    ],
  },
  {
    question: 'What is the square root of 64?',
    answers: [
      { text: '8', correct: true },
      { text: '6', correct: false },
      { text: '10', correct: false },
      { text: '12', correct: false },
    ],
  },
  {
    question: 'Which ocean is the largest?',
    answers: [
      { text: 'Atlantic Ocean', correct: false },
      { text: 'Indian Ocean', correct: false },
      { text: 'Pacific Ocean', correct: true },
      { text: 'Arctic Ocean', correct: false },
    ],
  },
];

/*--------------------------------------------------------------------------*/

const questionElement = document.getElementById('current-question');
const answersContainer = document.getElementById('answers-container');
const nextButton = document.querySelector('.next-button');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = 'Next';
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNumber = currentQuestionIndex + 1;
  questionElement.innerText = questionNumber + '. ' + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const answerButton = document.createElement('button');
    answerButton.innerText = answer.text;
    answerButton.classList.add('answers-buttons');
    answersContainer.appendChild(answerButton);
    if (answer.correct) {
      answerButton.dataset.correct = answer.correct;
    }
    answerButton.addEventListener('click', selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = 'none';
  while (answersContainer.firstChild) {
    answersContainer.removeChild(answersContainer.firstChild);
  }
}

function selectAnswer(event) {
  const selectedButton = event.target;
  const isCorrect = selectedButton.dataset.correct === 'true';
  if (isCorrect) {
    selectedButton.classList.add('right');
    score++;
  } else {
    selectedButton.classList.add('wrong');
  }
  Array.from(answersContainer.children).forEach(answerButton => {
    if (answerButton.dataset.correct === 'true') {
      answerButton.classList.add('right');
    }
    answerButton.disabled = true;
  });
  nextButton.style.display = 'block';
}

function showScore() {
  resetState();
  questionElement.innerHTML = `Your scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = 'Play Again';
  nextButton.style.display = 'block';
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener('click', () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
