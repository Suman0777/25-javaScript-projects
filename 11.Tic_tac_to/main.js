const Boards = document.querySelector('.board');
const squares = document.querySelectorAll('.square');
const message = document.querySelector('.message');
const resetButton = document.querySelector('.reset');

const palyers = ['X' , 'O'];

let currentPlayer = palyers[0] 

const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];


for(let i=0; i<squares.length; i++) {
    squares[i].addEventListener('click', ()=> {
        if(squares[i].textContent !== "" || checkWinner(currentPlayer)) {
            return;
        }

        squares[i].textContent = currentPlayer;
        
        if(checkWinner(currentPlayer)){
            message.textContent = `Game over ${currentPlayer} wins! the game plese resteret the game`;
        }

        if(tieResult(currentPlayer)) {
            message.textContent = `Game over! It's a tie! Please reset the game.`;
        }

        currentPlayer = currentPlayer === palyers[0] ? palyers[1] : palyers[0];
        
    });
}


function checkWinner (currentPlayer) {
    for(let i=0; i<winningPatterns.length; i++) {
        const [a,b,c] = winningPatterns[i];

        if(squares[a].textContent === currentPlayer && 
            squares[b].textContent === currentPlayer && 
            squares[c].textContent === currentPlayer
        ) {
            return true;
        }
    }
    return false;
}


function tieResult(){
    for(let i=0; i<squares.length; i++) {
        if(squares[i].textContent === '') {
            return false;
        }
    }
    return true;
}

resetButton.addEventListener('click', () => {
    for(let i=0; i<squares.length; i++) {
        squares[i].textContent = '';
    }
    currentPlayer = palyers[0];
    message.textContent = '';

});
