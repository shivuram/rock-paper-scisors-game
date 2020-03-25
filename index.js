// Import stylesheets
import './style.css';

// Write Javascript code!
const choices = document.querySelectorAll('.choice-btn');
const score = document.getElementById('score');
const result = document.getElementById('game-message');
const restart = document.getElementById('restart');
const scoreboard = {
  Victories: 0,
  Defeats: 0,
  Draws: 0
};

//Play game
function play(e){
    restart.style.display = 'inline-block';
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(computerChoice, playerChoice);
    console.log(computerChoice, playerChoice, winner);
     showWinner(winner, computerChoice);
}

//Get computerChoice
function getComputerChoice(){
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return 'rock';
     } else if(randomValue < 0.67){
         return 'paper';
     } else {
        return 'scissors';
    }
}

// Get game winner
const getWinner = function(cChoice, pChoice){
  if(cChoice === pChoice){
    return 'Draw';
  } else if (
    (cChoice === 'rock' && pChoice === 'paper') ||
    (cChoice === 'paper' && pChoice === 'scissors') ||
    (cChoice === 'scissors' && pChoice === 'rock')
  ){
    return 'You Wins';
  } else {
    return 'You Lost';
  }
}

const showWinner = function(winner, computerChoice) {
    if (winner === 'You Wins') {
    // Inc player score
    scoreboard.Victories++;
    // Show result
    result.innerHTML = `
      <p class="game-won">You Won!</p>
      <p class="computer-message">Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
        computerChoice.slice(1)}</strong></p>
    `;
    } else if (winner === "You Lost") {
 scoreboard.Defeats++;
     // Show result
    result.innerHTML = `
      <p class="game-lose">You Lost</p>
      <p class="computer-message">Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
        computerChoice.slice(1)}</strong></p>
    `;
    } else {
         scoreboard.Draws++;
     // Show result
    result.innerHTML = `
      <p class="game-draw">It's A Draw</p>
      <p class="computer-message">Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
        computerChoice.slice(1)}</strong></p>
    `;
    }

  // Show score
  score.innerHTML = `
    <p>Your Victories: ${scoreboard.Victories}</p>
    <p class="totalDraws">Total Draws: ${scoreboard.Draws}</p>
    <p>Your defeats: ${scoreboard.Defeats}</p>
    `;
}

// Restart game
function restartGame() {
  scoreboard.Victories = 0;
  scoreboard.Draws = 0;
scoreboard.Defeats = 0;

  score.innerHTML = `
    <p>Your Victories: 0</p>
    <p class="totalDraws">Total Draws: 0</p>
    <p>Your defeats: 0</p>
  `;

  result.innerHTML = '';
}


//Event Listeners
choices.forEach(choice => choice.addEventListener('click', play));
restart.addEventListener('click', restartGame);
