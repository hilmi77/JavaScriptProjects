const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WIN = "PLAYER WIN";
const RESULT_COMPUTER_WIN = "COMPUTER WIN";

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSORS}?`,
    ""
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return;
  }
  return selection;
};
const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue <= 0.34) {
    return ROCK;
  } else if (randomValue <= 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pPchoice = DEFAULT_USER_CHOICE) => {
  return cChoice === pPchoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pPchoice === PAPER) ||
      (cChoice === PAPER && pPchoice === SCISSORS) ||
      (cChoice === SCISSORS && pPchoice === ROCK)
    ? RESULT_PLAYER_WIN
    : RESULT_COMPUTER_WIN;
  // if (cChoice === pPchoice) {
  //   return RESULT_DRAW;
  // } else if (
  //   (cChoice === ROCK && pPchoice === PAPER) ||
  //   (cChoice === PAPER && pPchoice === SCISSORS) ||
  //   (cChoice === SCISSORS && pPchoice === ROCK)
  // ) {
  //   return RESULT_PLAYER_WIN;
  // } else {
  //   return RESULT_COMPUTER_WIN;
  // }
};

startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting...");
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let winner;
  if (playerChoice) {
    winner = getWinner(computerChoice, playerChoice);
  } else {
    winner = getWinner(computerChoice, playerChoice);
  }

  let message = `You picked ${
    playerChoice || DEFAULT_USER_CHOICE
  }, computer picked ${computerChoice} and therefore you `;
  if (winner === RESULT_DRAW) {
    message += "had a draw.";
  } else if (winner === RESULT_PLAYER_WIN) {
    message += " win.";
  } else {
    message += " lost.";
  }
  alert(message);
  gameIsRunning = false;
});
