// Modal functionality script
// Code adapted from: W3Schools (https://www.w3schools.com/howto/howto_css_modals.asp)

// Get the modals
var aboutModal = document.getElementById("about-modal");
var instructionsModal = document.getElementById("instructions-modal");
var contactModal = document.getElementById("contact-modal");

// Get the navigation links
var aboutLink = document.getElementById("about-link");
var instructionsLink = document.getElementById("instructions-link");
var contactLink = document.getElementById("contact-link");

// Get the close buttons
var closeButtons = document.querySelectorAll(".close-button");

// When the user clicks on a link, open the corresponding modal
aboutLink.onclick = function () {
  aboutModal.style.display = "block";
};

instructionsLink.onclick = function () {
  instructionsModal.style.display = "block";
};

contactLink.onclick = function () {
  contactModal.style.display = "block";
};

// When the user clicks on a close button, close the modal
closeButtons.forEach(function (button) {
  button.onclick = function () {
    button.parentElement.parentElement.style.display = "none";
  };
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
};
// End of modal functionality script -------------------------------------------------------- //

// Responsive Navigation Bar - Menu Toggle
// Code adapted from: Medium (https://volodymyrzh.medium.com/building-a-responsive-navigation-bar-with-css-593ffdb26887)

const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const body = document.querySelector("body");
const backdrop = document.createElement("div");
backdrop.classList.add("menu-backdrop");

body.appendChild(backdrop);

burger.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");
  backdrop.classList.toggle("display"); // Show or hide the backdrop

  // Toggle body scrolling
  body.classList.toggle("fixed-position");

  // Burger Animation
  burger.classList.toggle("toggle");
});

backdrop.addEventListener("click", function () {
  navLinks.classList.remove("nav-active");
  this.classList.remove("display"); // Hide the backdrop when clicked
  body.classList.remove("fixed-position");
  burger.classList.remove("toggle");
});

// End of responsive navigation bar toggle -------------------------------------------------------- //

// Quiz logic

// DOM elements
const startButton = document.getElementById("start-btn");
const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const questionContainer = document.getElementById("question-container");
const homeContent = document.getElementById("home-content");
const footerElement = document.getElementById("footer");

let shuffledQuestions;
let currentQuestion = 0;
let score = 0;

// Event listner for start button
startButton.addEventListener("click", startQuiz);

// Function to start quiz
function startQuiz() {
  homeContent.classList.add("hide");
  footerElement.classList.add("hide");

  // Shuffle questions randomly
  shuffledQuestions = quizData.sort(() => Math.random() - 0.5);

  questionContainer.classList.remove("hide");
  showQuestion();
}

// Function to display the current question and answers
function showQuestion() {
  const question = quizData[currentQuestion];

  answerElement.innerHTML = "";
  questionElement.innerHTML = "";

  const questionText = document.createElement("p");
  questionText.innerText = question.question;
  questionText.classList.add("question");
  questionElement.appendChild(questionText);

  const answerBtnsContainer = document.createElement("div");
  answerBtnsContainer.id = "answer-buttons";
  answerBtnsContainer.className = "btn-grid";

  // If the question has an image, display it
  if (question.image) {
    const image = document.createElement("img");
    image.src = question.image;
    image.alt = question.alt;
    questionElement.appendChild(image);
  }

  question.options.forEach((option) => {
    const button = document.createElement("button");
    button.innerText = option;
    button.classList.add("btn");
    answerElement.appendChild(button);
    button.addEventListener("click", selectAnswer);
  });
}

// Function to handle answer selection and move to the next question
function selectAnswer(e) {
  const selectedButton = e.target;
  const answer = quizData[currentQuestion].answer;

  // If answer is correct score increases
  if (selectedButton.innerText === answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    showResult();
  }
}

// Function to show final score
function showResult() {
  questionContainer.innerHTML = `
        
      <h1>Quiz Completed!</h1>
      <p>Your score:</p>
      <h1>${score}/${quizData.length}</h1>
    `;
}

showQuestion();
