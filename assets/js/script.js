const playerScoreSpan = document.getElementById('player-score');
const selectButtons = document.querySelectorAll('[data-selection]');
const selections = [
    {
        name: 'rock', 
        image: 'assets/images/rock.png',
        beats: 'scissors',
    },
    {
        name: 'scissors', 
        image: 'assets/images/scissors.png',
        beats: 'paper',
    },
    {
        name: 'paper', 
        image: 'assets/images/paper.png',
        beats: 'rock',
    }
];

function randomSelection(options) {
    const selectionNumber = Math.floor(Math.random() * selections.length);
    const selection = selections[selectionNumber];
    // console.log(selection)
    return selection;
}

function makeSelection(selection) {
    // console.log(selection)
    const computerSelection = randomSelection(selections);
    console.log(computerSelection);
    playerWinner = checkWinner(selection, computerSelection);
    computerWinner = checkWinner(computerSelection, selection);
    console.log(playerWinner);
    console.log(computerWinner);
    if (playerWinner){
        playerScoreSpan.textContent = String(Number(playerScoreSpan.textContent) + 1);
    }
}

function checkWinner(selection, opponent) {
    return selection.beats === opponent.name;
}

for (let i = 0; i < selectButtons.length; i++) {
    selectButtons[i].addEventListener('click', function(e){
        const selectionName = selectButtons[i].dataset.selection;
        const selection = selections.find(selection => selection.name === selectionName);
        makeSelection(selection);
    })
}