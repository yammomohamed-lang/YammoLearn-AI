const quiz = [
  {
    question: "What is 2 + 2?",
    answers: ["3", "4", "5"],
    correct: "4"
  },
  {
    question: "HTML stands for?",
    answers: ["Hyper Text Markup Language", "Home Tool Markup Language"],
    correct: "Hyper Text Markup Language"
  }
];

let index = 0;
let score = 0;

function loadQuestion() {
  const q = quiz[index];
  document.getElementById("question").innerText = q.question;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.answers.forEach(ans => {
    const btn = document.createElement("button");
    btn.innerText = ans;
    btn.onclick = () => check(ans);
    answersDiv.appendChild(btn);
  });
}

function check(answer) {
  if (answer === quiz[index].correct) {
    score++;
  }

  index++;

  if (index < quiz.length) {
    loadQuestion();
  } else {
    document.body.innerHTML = `<h1>Finished! Score: ${score}</h1>`;
  }

  document.getElementById("score").innerText = "Score: " + score;
}

loadQuestion();
function saveScore() {
 fetch("https://your-backend-url.onrender.com/save"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: "User1",
      score: score
    })
  });
}