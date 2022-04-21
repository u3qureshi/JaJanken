let comPoint = 0;
let playPoint = 0;

const rockButton = document.querySelector('#icons>.rock-button');
const paperButton = document.querySelector('#icons>.paper-button');
const scissorsButton = document.querySelector('#icons>.scissors-button');
const resultText1 = document.querySelector('.result-text1');
const resultText2 = document.querySelector('.result-text2');


rockButton.addEventListener('click', () => {
    playJankenRound('Rock');
});
paperButton.addEventListener('click', () => {
    playJankenRound('Paper');
});
scissorsButton.addEventListener('click', () => {
    playJankenRound('Scissors');
});


function playJankenRound(playMove = '') {
    let string = '';
    let string2 = '';
    let comPlay = computerMove();



    if (playMove == comPlay) {
        if (playMove == 'Rock') {
            string = 'You both chose ✊'
            string2 = "It's a tie"
        } else if (playMove == 'Paper') {
            string = 'You both chose ✋'
            string2 = "It's a tie"
        } else {
            string = 'You both chose ✌'
            string2 = "It's a tie"
        }
        resultText1.innerText = string;
        resultText2.innerText = string2;
        return;
    }
    if (playMove == 'Rock' && comPlay == 'Scissors') {
        string = `Your move: ✊      Gon's Move: ✌`;
        string2 = 'Nice Work!';
        playPoint++;
    } else if (playMove == 'Rock' && comPlay == 'Paper') {
        string = `Your move: ✊      Gon's Move: ✋`;
        string2 = 'Try Again.'
        comPoint++;
    } else if (playMove == 'Paper' && comPlay == 'Scissors') {
        string = `Your move: ✋      Gon's Move: ✌`;
        string2 = 'Try Again.'
        comPoint++;
    } else if (playMove == 'Paper' && comPlay == 'Rock') {
        string = `Your move: ✋      Gon's Move: ✊`;
        string2 = 'Nice Work!';
        playPoint++;
    } else if (playMove == 'Scissors' && comPlay == 'Rock') {
        string = `Your move: ✌      Gon's Move: ✊`;
        string2 = 'Try Again.'
        comPoint++;
    } else if (playMove == 'Scissors' && comPlay == 'Paper') {
        string = `Your move: ✌      Gon's Move: ✋`;
        string2 = 'Nice Work!';
        playPoint++;
    }

    resultText1.innerText = string;
    resultText2.innerText = string2;
}


/* This function returns a String of 'Rock', 'Paper', or 'Scissors' */
function computerMove() {
    let random = Math.floor(Math.random() * 3); //math.random returns a double
    if (random == 1) return 'Rock';
    else if (random == 2) return 'Paper';
    else return 'Scissors';
}