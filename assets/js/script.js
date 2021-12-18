/** define global variables */
const playerScoreSpan = document.getElementById('player-score');
const computerScoreSpan = document.getElementById('computer-score');
const selectButtons = document.querySelectorAll('[data-selection]');
const selections = [
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
    const selectionNumber = Math.floor(Math.random() * selections.length);
    const selection = selections[selectionNumber];
    return selection;
}

/**
* allow player to choose selection and run game round
*/
function makeSelection(selection) {
    const computerSelection = randomSelection(selections);
    let playerWinner = checkWinner(selection, computerSelection);
    let computerWinner = checkWinner(computerSelection, selection);
    console.log(playerWinner);
    console.log(computerWinner);
    let notificationElement = document.getElementById('notification');
    if (playerWinner){
        notificationElement.textContent = "Congratulations! You won this round!";
        playerScoreSpan.textContent = String(Number(playerScoreSpan.textContent) + 1);
    } else if (computerWinner){
        notificationElement.textContent = "Too bad! This time the computer beat you at the game!";
        computerScoreSpan.textContent = String(Number(computerScoreSpan.textContent) + 1);
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
    for (let i = 0; i < selectButtons.length; i++) {
        selectButtons[i].addEventListener('click', function (e) {
            const selectionName = selectButtons[i].dataset.selection;
            const selection = selections.find(selection => selection.name === selectionName);
            makeSelection(selection);
        });
    }
});

function playRound(playerChoice) {
    const selectionName = playerChoice;
    const selection = selections.find(selection => selection.name === selectionName);
    console.log(selectionName)
    makeSelection(selection);
}