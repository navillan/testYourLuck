let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

let headerScore = JSON.parse(localStorage.getItem('headerScore'));
let bankValue = JSON.parse(localStorage.getItem('bankValue')) || 0;

let result = ``;
updateScoreElement();
updateHeaderSelector();
updateBankValue();
staticScoreUpdate();


function playGame(playerMove) {
  const computerMove = pickComputerMove();
  
  

  if (playerMove === 'card1') {
    if (computerMove === 'card2') {
      result = 'You lose.';
    } else if (computerMove === 'card3') {
      result = 'You win.';
    } else if (computerMove === 'card1') {
      result = 'Tie.'
    }     
  } else if (playerMove === 'card2') {
    if (computerMove === 'card1') {
      result = 'You win.';
    } else if (computerMove === 'card2') {
      result = 'Tie.';
    } else if (computerMove === 'card3') {
      result = 'You lose.';
    }
  } else if (playerMove === 'card3') {
    if (computerMove === 'card1') {
      result = 'You lose.'
    } else if (computerMove === 'card2') {
      result = 'You win.'
    } else if (computerMove === 'card3') {
      result = 'Tie.'
    }
  }

  if (result === 'You win.') {
    score.wins += 1;
  } else if (result === 'You lose.') {
    score.losses += 1;
  } else if (result === 'Tie.') {
    score.ties += 1;
  }   

  localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();
    staticScoreUpdate();

  document.querySelector('.js-result')
    .innerHTML = result;  

  localStorage.setItem('headerScore', JSON.stringify(headerScore));

    updateHeaderSelector();
    updateBankValue();  
  
  document.getElementById('overlay').style.opacity = 1;
  document.getElementById('overlay').style.pointerEvents = 'all';
  document.querySelector('.js-pop-up').style.display = 'block';
};

function handleResetButton() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  result = ``;
  bankValue = 0;
  localStorage.removeItem('score');
  updateScoreElement();
  staticScoreUpdate();
  localStorage.removeItem('headerScore');
  updateHeaderSelector();
  localStorage.removeItem('bankValue');
  updateBankValue();
}

function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
};

function updateHeaderSelector() {
  let headerScore = score.wins + score.losses + score.ties || `You haven't played a round yet.`

  document.querySelector('.js-pop-up-header-inside')
  .innerHTML = `Total rounds: ${headerScore}`
};

function updateBankValue() {  
  
  if (result === 'You win.') {
    bankValue = bankValue + 50;
  } else if (result === 'You lose.') {
    bankValue = bankValue - 50;
  };
  result = "";
  localStorage.setItem('bankValue', JSON.stringify(bankValue));
  document.querySelector('.js-bank-control').innerHTML = `BANK: ${bankValue}`
};

function staticScoreUpdate() {
  document.querySelector('.score-control')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
};



function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'card1';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'card2';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'card3';
  }

  return computerMove;
};

const resetButtonEvent = document.querySelector('.reset-score-button')
resetButtonEvent.addEventListener('click', () => {
  document.querySelector('.js-result-event').innerHTML = "";
});

const popUpCloseButtonForOverlay = document.querySelector('.close-button-js')
popUpCloseButtonForOverlay.addEventListener('click', () => {
  document.getElementById('overlay').style.opacity = 0;
});

const popUpCloseButton = document.querySelector('.close-button-js')
popUpCloseButton.addEventListener('click', () => {
  document.querySelector('.js-pop-up').style.display = 'none';
});

const valueLoanList = document.getElementById('loan-control-id')
valueLoanList.addEventListener('click', () => {
  document.getElementById('loan-value-div-id').style.display = 'block';
})

const loanCloseButton = document.getElementById('loan-close-button')
loanCloseButton.addEventListener('click', () => {
  document.getElementById('loan-value-div-id').style.display = 'none';
})

const overlayReset = document.querySelector('.close-button-js')
overlayReset.addEventListener('click', () => {
  document.getElementById('overlay').style.pointerEvents = 'none';
})


function loanAdd2() {
  let amount = bankValue + 200;

   document.getElementById('bank-control').innerHTML = `BANK: ${bankValue + 200}`
    console.log('2');

  playLoanTwo();
  updateStorageBank(amount);
  updateBankValue();
};


function loanAdd5() {
  let amount = bankValue + 500;

   document.getElementById('bank-control').innerHTML = `BANK: ${bankValue + 500}`
    console.log('5')

  playLoanFive();
  updateStorageBank(amount);
  updateBankValue();
};

function updateStorageBank(amount) {
  localStorage.setItem('bankValue', JSON.stringify(amount));
  bankValue = amount;
};

function playLoanTwo() {
  const audio = document.querySelector('.coin-sound2');
  audio.play()
};

function playLoanFive() {
  const audio = document.querySelector('.coin-sound5');
  audio.play()
};