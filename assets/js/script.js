/** define global variables */
const PLAYER_SCORE_SPAN = document.getElementById('player-score');
const COMPUTER_SCORE_SPAN = document.getElementById('computer-score');
const SELECT_BUTTONS = document.querySelectorAll('[data-selection]');
const SELECTIONS = [
    {
        name: 'rock', 
        image: 'assets/images/rock.png',
        beats: ['scissors', 'lizard']
    },
    {
        name: 'scissors', 
        image: 'assets/images/scissors.png',
        beats: ['paper', 'lizard']
    },
    {
        name: 'lizard', 
        image: 'assets/images/scissors.png',
        beats:  ['paper', 'spock']
    },
    {
        name: 'spock', 
        image: 'assets/images/scissors.png',
        beats: ['scissors', 'rock']
    },
	 {
        name: 'paper', 
        image: 'assets/images/paper.png',
        beats: ['rock', 'spock']
    }
];

/**
* get a random selection from the available options
* returns an object containing the selection made
*/
function randomSelection(options) {
    const selectionNumber = Math.floor(Math.random() * SELECTIONS.length);
    const selection = SELECTIONS[selectionNumber];
    return selection;
}

/**
* allow player to choose selection and run game round
*/
function makeSelection(selection) {
    const computerSelection = randomSelection(SELECTIONS);
    let playerWinner = checkWinner(selection, computerSelection);
    let computerWinner = checkWinner(computerSelection, selection);
    let notificationElement = document.getElementById('notification');
    if (playerWinner){
        notificationElement.textContent = "Congratulations! You won this round!";
        PLAYER_SCORE_SPAN.textContent = String(Number(PLAYER_SCORE_SPAN.textContent) + 1);
    } else if (computerWinner){
        notificationElement.textContent = "Too bad! This time the computer beat you at the game!";
        COMPUTER_SCORE_SPAN.textContent = String(Number(COMPUTER_SCORE_SPAN.textContent) + 1);
    } else {
        notificationElement.textContent = "It's a draw!";
    }
}

/**
* check for win condition
*/
function checkWinner(selection, opponent){
    return selection.beats.includes(opponent.name);
}

/* add event listener to each selection button to allow gameplay */
document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < SELECT_BUTTONS.length; i++) {
        SELECT_BUTTONS[i].addEventListener('click', function (e) {
            const selectionName = SELECT_BUTTONS[i].dataset.selection;
            const selection = SELECTIONS.find(selection => selection.name === selectionName);
            makeSelection(selection);
        });
    }
});

function playRound(playerChoice) {
    const selectionName = playerChoice;
    const selection = SELECTIONS.find(selection => selection.name === selectionName);
    makeSelection(selection);
}