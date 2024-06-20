let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

//user play condition
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

//function for computer
const getCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};

//drawgame condition
const drawGame = () => {
  msg.innerText = "Game was draw. Play again!";
};

//game play condition
const playGame = (userChoice) => {
  const compChoice = getCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;

    if (userChoice === "rock") {
      //paper, scissor
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //scissor, rock
      userWin = compChoice === "scissor" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }

    showWinner(userWin, userChoice, compChoice);
  }
};

// winner condition
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    document.querySelector("#msg").style.backgroundColor = "green";

    msg.innerText = `you win, ${userChoice} beats ${compChoice}`;
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    document.querySelector("#msg").style.backgroundColor = "red";

    msg.innerText = `you lose, ${compChoice} beats ${userChoice}`;
  }
};
