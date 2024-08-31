const buttons = document.querySelectorAll("button");

const resultEl = document.getElementById("result");

const playerScoreEl = document.getElementById("user-score");

const computerScoreEl = document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const result = playRound(button.id, computerPlay());
    resultEl.textContent = result;
    
  });
});

function computerPlay() {
  const choices = ["stone", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie! Your choice and Computer choice are same";
  } else if (
    (playerSelection === "stone" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "stone") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    playerScoreEl.textContent = playerScore;
    return "You win! Your choice : " + playerSelection + " beats Computer choice : " + computerSelection;
  } else {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    return "You lose! Computer choice : " + computerSelection + " beats Your choice : " + playerSelection;
  }
}
