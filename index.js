

let playMove;
let comPlay;
let comPoint = 0;
let playPoint = 0;

fullJankenGame();


function fullJankenGame(){
    console.log("Let's play Rock, Paper, Scissors! First to five points is the winner.");

    while(playPoint<5 && comPoint<5){
        playMove = playerMove();
        comPlay = computerMove();

        playJankenRound();
    }

    if(playPoint == 5) console.log('Congratulations, you won the Janken Game!')
    else console.log('Sorry you lost, try again.')
}

function playJankenRound(){
    let string='';

    if (playMove==comPlay) string = `It is a draw. You both picked ${playMove}`
    if (playMove=='Rock' && comPlay=='Scissors') {
        string = 'You Win! Rock beats Scissors';
        playPoint++;
    }
    else if (playMove=='Rock' && comPlay=='Paper') {
        string = 'You Lose! Paper beats Rock';
        comPoint++;
    }
    else if (playMove=='Paper' && comPlay=='Scissors'){
        string = 'You Lose! Scissors beats Paper'
        comPoint++;
    }
    else if (playMove=='Paper' && comPlay=='Rock'){
        string = 'You Win! Paper beats Rock'
        playPoint++;
    }
    else if (playMove=='Scissors' && comPlay=='Rock'){
        string = 'You Lose! Rock beats Scissors'
        comPoint++;
    }
    else if (playMove=='Scissors' && comPlay=='Paper'){
        string = 'You Win! Scissors beats Paper'
        playPoint++;
    }

    console.log(`The computer selected ${comPlay}`)
    console.log(string)
}


function computerMove(){
    let random = Math.floor(Math.random() * 3); //math.random returns a double
    if (random == 1) return 'Rock';
    else if (random == 2) return 'Paper';
    else return 'Scissors';
}

function playerMove(){
    let number = parseInt(window.prompt("Enter a number between 1 to 3./nRock = 1/nPaper = 2/nScissors = 3"), 10);
    let move = "";
    if (number == 1) move='Rock';
    else if (number == 2) move='Paper';
    else if (number == 3) move='Scissors';
    else alert('That is not a valid input.');

    return move;
}