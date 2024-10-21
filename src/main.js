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
  {
    question: 'Which country is home to the kangaroo?',
    answers: [
      { text: 'Brazil', correct: false },
      { text: 'India', correct: false },
      { text: 'Australia', correct: true },
      { text: 'Canada', correct: false },
    ],
  },
  {
    question: 'What is the smallest prime number?',
    answers: [
      { text: '2', correct: true },
      { text: '3', correct: false },
      { text: '5', correct: false },
      { text: '1', correct: false },
    ],
  },
  {
    question: 'Who developed the theory of general relativity?',
    answers: [
      { text: 'Isaac Newton', correct: false },
      { text: 'Albert Einstein', correct: true },
      { text: 'Nikola Tesla', correct: false },
      { text: 'Galileo Galilei', correct: false },
    ],
  },
  {
    question: 'Which organ in the human body is responsible for pumping blood?',
    answers: [
      { text: 'Lungs', correct: false },
      { text: 'Brain', correct: false },
      { text: 'Heart', correct: true },
      { text: 'Liver', correct: false },
    ],
  },
  {
    question: 'What is the tallest mountain in the world?',
    answers: [
      { text: 'K2', correct: false },
      { text: 'Mount Everest', correct: true },
      { text: 'Mount Kilimanjaro', correct: false },
      { text: 'Denali', correct: false },
    ],
  },
  {
    question: 'In which continent is Egypt located?',
    answers: [
      { text: 'Asia', correct: false },
      { text: 'Europe', correct: false },
      { text: 'Africa', correct: true },
      { text: 'South America', correct: false },
    ],
  },
  {
    question: 'What is the chemical symbol for water?',
    answers: [
      { text: 'O2', correct: false },
      { text: 'CO2', correct: false },
      { text: 'H2O', correct: true },
      { text: 'NaCl', correct: false },
    ],
  },
  {
    question: 'Which planet is closest to the Sun?',
    answers: [
      { text: 'Earth', correct: false },
      { text: 'Mercury', correct: true },
      { text: 'Venus', correct: false },
      { text: 'Mars', correct: false },
    ],
  },
  {
    question: 'What is the freezing point of water in Celsius?',
    answers: [
      { text: '0°C', correct: true },
      { text: '100°C', correct: false },
      { text: '-100°C', correct: false },
      { text: '10°C', correct: false },
    ],
  },
  {
    question: 'Who was the first President of the United States?',
    answers: [
      { text: 'Abraham Lincoln', correct: false },
      { text: 'Thomas Jefferson', correct: false },
      { text: 'George Washington', correct: true },
      { text: 'John Adams', correct: false },
    ],
  },
  {
    question: 'Which animal is known as the King of the Jungle?',
    answers: [
      { text: 'Tiger', correct: false },
      { text: 'Elephant', correct: false },
      { text: 'Lion', correct: true },
      { text: 'Giraffe', correct: false },
    ],
  },
  {
    question: 'What is the largest mammal in the world?',
    answers: [
      { text: 'Elephant', correct: false },
      { text: 'Blue Whale', correct: true },
      { text: 'Giraffe', correct: false },
      { text: 'Hippopotamus', correct: false },
    ],
  },
  {
    question: 'Which country is known for the Eiffel Tower?',
    answers: [
      { text: 'Germany', correct: false },
      { text: 'France', correct: true },
      { text: 'Italy', correct: false },
      { text: 'Spain', correct: false },
    ],
  },
  {
    question: 'How many continents are there on Earth?',
    answers: [
      { text: '5', correct: false },
      { text: '6', correct: false },
      { text: '7', correct: true },
      { text: '8', correct: false },
    ],
  },
  {
    question: 'What is the largest internal organ in the human body?',
    answers: [
      { text: 'Heart', correct: false },
      { text: 'Liver', correct: true },
      { text: 'Lungs', correct: false },
      { text: 'Kidneys', correct: false },
    ],
  },
  {
    question: 'Which language has the most native speakers?',
    answers: [
      { text: 'English', correct: false },
      { text: 'Spanish', correct: false },
      { text: 'Mandarin Chinese', correct: true },
      { text: 'Hindi', correct: false },
    ],
  },
  {
    question: 'What is the capital of Japan?',
    answers: [
      { text: 'Seoul', correct: false },
      { text: 'Beijing', correct: false },
      { text: 'Tokyo', correct: true },
      { text: 'Bangkok', correct: false },
    ],
  },
  {
    question: 'Which part of the plant conducts photosynthesis?',
    answers: [
      { text: 'Roots', correct: false },
      { text: 'Stem', correct: false },
      { text: 'Leaves', correct: true },
      { text: 'Flowers', correct: false },
    ],
  },
  {
    question: 'What is the longest river in the world?',
    answers: [
      { text: 'Amazon River', correct: true },
      { text: 'Nile River', correct: false },
      { text: 'Yangtze River', correct: false },
      { text: 'Mississippi River', correct: false },
    ],
  },
  {
    question: 'Who invented the telephone?',
    answers: [
      { text: 'Nikola Tesla', correct: false },
      { text: 'Thomas Edison', correct: false },
      { text: 'Alexander Graham Bell', correct: true },
      { text: 'Guglielmo Marconi', correct: false },
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
