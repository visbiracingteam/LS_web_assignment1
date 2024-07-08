


// Add event listener to header
const header = document.querySelector('header');
header.addEventListener('mouseover', () => {
  header.style.background-color = '444';
});

header.addEventListener('mouseout', () => {
  header.style.background-color = '#333';
});

// Add animation to features list
const featuresList = document.querySelector('ul');
featuresList.addEventListener('mouseover', (event) => {
  const target = event.target.tagName === 'LI' ? event.target : event.target.parentNode;
  target.classList.add('highlight');
});

featuresList.addEventListener('mouseout', (event) => {
  const target = event.target.tagName === 'LI' ? event.target : event.target.parentNode;
  target.classList.remove('highlight');
});

// Add scroll effect to main content
const main = document.querySelector('main');
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  main.style.transform = `translateY(${scrollPosition}px)`;
});
/ Get the quiz form and questions
const quizForm = document.getElementById('quiz');
const questions = quizForm.querySelectorAll('label');

// Add event listeners to each question
questions.forEach((question) => {
  const answerInput = question.querySelector('input');
  answerInput.addEventListener('change', checkAnswer);
});

// Check if the answer is correct
function checkAnswer(event) {
  const answer = event.target.value;
  const correctAnswer = event.target.getAttribute('data-correct');
  if (answer === correctAnswer) {
    alert('Correct!');
  } else {
    alert('Try again!');
  }
}

