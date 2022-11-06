function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice == 1) {
        return "Rock";
    }
    else if (choice == 2) {
        return "Paper";
    }
    return "Scissors";
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            return "You Won! Scissors beat Paper!";
        } 
        else if (computerSelection == "rock") {
            return "You Lose! Rock beats Scissors!";
        }
        return "Tie!";
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "You Won! Paper beat Rocks!";
        } 
        else if (computerSelection == "scissors") {
            return "You Lose! Scissors beat Paper!";
        }
        return "Tie!";
    }
    else if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            return "You Won! Rock beats Scissors!";
        } 
        else if (computerSelection == "paper") {
            return "You lose! Paper beats Rock!";
        }
        return "Tie!";
    }
  }

//Task 2


//Butoanele propriu zise
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');

//const rezultat = document.querySelector('.result');
//console.log(result);

function reset() {
    btn1.addEventListener('click', event1);
    btn2.addEventListener('click', event2);
    btn3.addEventListener('click', event3);

    playerScore = 0;
    computerScore = 0;

    score.textContent = 'Best out of 5';
    result.textContent = '';
    result.style.cssText = 'border: 0px; padding: 0px;';

    result.removeEventListener('click', reset);
}

//Afisarea rezultatului
const result = document.querySelector('.result');
const score = document.querySelector('.score');

let playerScore = 0;
let computerScore = 0;
//Adaptarea functiilor
function event1() {
    result.textContent = playRound('rock', getComputerChoice());

    if (result.textContent === 'You Won! Rock beats Scissors!') playerScore++;
   // if (result.textContent === 'Tie!') {playerScore++; computerScore++;}
    if (result.textContent === 'You lose! Paper beats Rock!') computerScore++;

    score.textContent = playerScore + ' - ' + computerScore;
    if (playerScore + computerScore === 5) {
        btn1.removeEventListener('click', event1);
        btn2.removeEventListener('click', event2);
        btn3.removeEventListener('click', event3);

        
        if (playerScore > computerScore) {
            score.textContent = 'You won!';
        }
        else {
            score.textContent = 'You lost!';
        }

        result.textContent = 'Try again';
        result.style.cssText = 'border: 1px solid black; padding: 5px 20px;';

        result.addEventListener('click', reset);
    }
}

function event2() {
    result.textContent = playRound('paper', getComputerChoice());

    if (result.textContent === 'You Won! Paper beat Rocks!') playerScore++;
   // if (result.textContent === 'Tie!') {playerScore++; computerScore++;}
    if (result.textContent === 'You Lose! Scissors beat Paper!') computerScore++;

    score.textContent = playerScore + ' - ' + computerScore;
    if (playerScore + computerScore === 5) {
        btn1.removeEventListener('click', event1);
        btn2.removeEventListener('click', event2);
        btn3.removeEventListener('click', event3);

        
        if (playerScore > computerScore) {
            score.textContent = 'You won!';
        }
        else {
            score.textContent = 'You lost!';
        }
        result.textContent = '';

        result.textContent = 'Try again';
        result.style.cssText = 'border: 1px solid black; padding: 5px 20px;';

        result.addEventListener('click', reset);
    
    }
}

function event3() {
    result.textContent = playRound('scissors', getComputerChoice());

    if (result.textContent === 'You Won! Scissors beat Paper!') playerScore++;
   // if (result.textContent === 'Tie!') {playerScore++; computerScore++;}
    if (result.textContent === 'You Lose! Rock beats Scissors!') computerScore++;

    score.textContent = playerScore + ' - ' + computerScore;
    if (playerScore + computerScore === 5) {
        btn1.removeEventListener('click', event1);
        btn2.removeEventListener('click', event2);
        btn3.removeEventListener('click', event3);

        if (playerScore > computerScore) {
            score.textContent = 'You won!';
        }
        else {
            score.textContent = 'You lost!';
        }
        result.textContent = '';

        result.textContent = 'Try again';
        result.style.cssText = 'border: 1px solid black; padding: 5px 20px;';

        result.addEventListener('click', reset);
    }
}

btn1.addEventListener('click', event1);
btn2.addEventListener('click', event2);
btn3.addEventListener('click', event3);