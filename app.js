let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScoreCount = document.querySelector("#user-score");
let compScoreCount = document.querySelector("#comp-score");

let genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
};

let showWinner = (userWin) => {
  if (userWin) {
    msg.style.backgroundColor = "green";
    userScore = userScore + 1;
    userScoreCount.innerText = userScore;
  } else {
    msg.style.backgroundColor = "red";

    compScore = compScore + 1;
    compScoreCount.innerText = compScore;
  }
};

let playGame = (userChoice) => {
  console.log(userChoice, " was clicked");
  const compChoice = genCompChoice();
  console.log(compChoice, " was clicked");

  if (userChoice === compChoice) {
    console.log("Draw");
    msg.innerText = "Draw! Play again";
    msg.style.backgroundColor = "black";
  } else {
    let userWin;
    if (userChoice === "rock") {
      if (compChoice === "paper") {
        userWin = false;
        console.log("Comp Win");
        msg.innerText = "You Lose! " + compChoice + " beats " + "your " + userChoice;
      } else {
        userWin = true;
        console.log("user Win");
        msg.innerText = "You Win!" + " your " + userChoice + " beats " + compChoice;
      }
    } else if (userChoice === "scissor") {
      if (compChoice === "paper") {
        userWin = true;
        console.log("user win");
        msg.innerText = "You Win!" + " your " + userChoice + " beats " + compChoice;
      } else {
        userWin = false;
        console.log("comp win");
        msg.innerText = "You Lose! " + compChoice + " beats " + "your " + userChoice;
      }
    } else {
      if (compChoice === "rock") {
        userWin = false;
        console.log("comp win");
        msg.innerText = "You Lose! " + compChoice + " beats " + "your " + userChoice;
      } else {
        userWin = true;
        console.log("user win");
        msg.innerText = "You Win!" + " your " + userChoice + " beats " + compChoice;
      }
    }
    showWinner(userWin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
