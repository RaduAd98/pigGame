'use strict';

// Final score
const finalScore0El = document.querySelector('#score--0');
const finalScore1El = document.querySelector('#score--1');

// Player field
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

// Player number
const playerNumber0 = document.querySelector('#name--0');
const playerNumber1 = document.querySelector('#name--1');

// Current score
const currentScore0El = document.querySelector('#current--0');
const currentScore1El = document.querySelector('#current--1');

// Dice and buttons
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNewGame = document.querySelector('.btn--new');

let diceNumber = 0;
let player = 0;

let currentScore0 = 0;
let currentScore1 = 0;
let finalScore0 = 0;
let finalScore1 = 0;
diceEl.classList.add('hidden');
finalScore0El.textContent = 0;
finalScore1El.textContent = 0;

btnRoll.addEventListener('click', function () {
  diceEl.classList.remove(`diceSelector${diceNumber}`);
  diceEl.classList.remove('hidden');
  diceNumber = Math.trunc(Math.random(0, 1) * 6 + 1);
  diceEl.classList.add(`diceSelector${diceNumber}`);
  console.log(diceNumber);
  if (player === 0 && diceNumber !== 1) {
    activePlayer(player);
    currentScore0 += diceNumber;
    currentScore0El.textContent = currentScore0;
  } else if (player === 0 && diceNumber === 1) {
    player = 1;
    activePlayer(player);
    currentScore0 = 0;
    currentScore0El.textContent = currentScore0;
  } else if (player === 1 && diceNumber !== 1) {
    activePlayer(player);
    currentScore1 += diceNumber;
    currentScore1El.textContent = currentScore1;
  } else if (player === 1 && diceNumber === 1) {
    player = 0;
    activePlayer(player);
    currentScore1 = 0;
    currentScore1El.textContent = currentScore1;
  }
});

btnHold.addEventListener('click', function () {
  if (player === 0) {
    activePlayer(player);
    finalScore0 = finalScore0 + currentScore0;
    finalScore0El.textContent = finalScore0;
    currentScore0 = 0;
    currentScore0El.textContent = currentScore0;
    if (finalScore0 >= 100) {
      playerNumber0.textContent = 'Player 1 Wins!';
      hideButtons();
    } else {
      player = 1;
      activePlayer(player);
      diceEl.classList.add('hidden');
    }
  } else if (player === 1) {
    activePlayer(player);
    finalScore1 += currentScore1;
    finalScore1El.textContent = finalScore1;
    currentScore1 = 0;
    currentScore1El.textContent = currentScore1;
    if (finalScore1 >= 100) {
      playerNumber1.textContent = 'Player 2 Wins!';
      hideButtons();
    } else {
      player = 0;
      activePlayer(player);
      diceEl.classList.add('hidden');
    }
  }
});

btnNewGame.addEventListener('click', function () {
  currentScore0 = 0;
  currentScore1 = 0;
  finalScore0 = 0;
  finalScore1 = 0;
  player = 0;
  currentScore0El.textContent = currentScore0;
  currentScore1El.textContent = currentScore1;
  finalScore0El.textContent = finalScore0;
  finalScore1El.textContent = finalScore1;
  playerNumber0.textContent = 'PLAYER 1';
  playerNumber1.textContent = 'PLAYER 2';
  activePlayer(player);

  if (
    btnRoll.classList.contains('hidden') &&
    btnHold.classList.contains('hidden')
  ) {
    btnRoll.classList.remove('hidden');
    btnHold.classList.remove('hidden');
  }
});

function activePlayer(player) {
  if (player === 0) {
    player1.classList.remove('player--active');
    player0.classList.add('player--active');
  } else if (player === 1) {
    player0.classList.remove('player--active');
    player1.classList.add('player--active');
  }
}

function hideButtons() {
  btnRoll.classList.add('hidden');
  btnHold.classList.add('hidden');
}
