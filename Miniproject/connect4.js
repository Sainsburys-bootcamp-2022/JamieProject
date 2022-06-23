const txt1 = document.getElementById('player1name');
const txt2 = document.getElementById('player2name');
const btn1 = document.getElementById('button1');
const out1 = document.getElementById('output1');
const out2 = document.getElementById('output2');
let playerTurn = document.getElementById('player-Turn')
let redScore = document.getElementById('redScore')
let redWins = 0;
let yellowScore = document.getElementById('yellowScore')
let yellowWins = 0;


function userdisplay() {

    out1.innerHTML = txt1.value;
    out2.innerHTML = txt2.value;

    if (redTurn === true) {
        playerTurn.innerHTML = txt1.value + "'s turn"
    }
    else {
        playerTurn.innerHTML = txt2.value + "'s turn"
    }


}
btn1.addEventListener('click', userdisplay);




// Make your changes to store and update game state in this file
let board = [[null, null, null, null, null, null, null],
[null, null, null, null, null, null, null],
[null, null, null, null, null, null, null],
[null, null, null, null, null, null, null],
[null, null, null, null, null, null, null],
[null, null, null, null, null, null, null],]


let redTurn = true;
let takenTurn = 0;


// Take the row and column number between 0 and 2.....
// (inclusive) and update the game state.
let gameOver = false

function takeTurn(row, column) {



    let clickedSquare = board[row][column]
    if (clickedSquare === null && redTurn === true && gameOver === false) {
        board[row][column] = "reds"
        drawBoard(board);
        checkWinner();
        redTurn = false
    }
    console.log(board)

    if (redTurn === true) {
        playerTurn.innerHTML = txt1.value + "'s turn"
    }
    else {
        playerTurn.innerHTML = txt2.value + "'s turn"
    }



    takenTurn += 1;

    console.log("takeTurn was called with row: " + row + ", column:" + column);
    console.log(`takeTurn was called with row: ${row}, column: ${column}`);
}
//fischer-yates shuffle
function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

function yellowTurn(row, column) {
    columnNumbers = [0, 1, 2, 3, 4, 5, 6]
    randomColumnNumbers = shuffle(columnNumbers)
    console.log(randomColumnNumbers)

    loop1: for (i = 0; i < 7; i++) {
        loop2: for (j = 5; j >= 0; j--) {

            console.log(randomColumnNumbers[i])
            if ((board[j][randomColumnNumbers[i]] === null) 
            && redTurn === false 
            && gameOver === false) { 
                board[j][randomColumnNumbers[i]] = "yellows"; 
                break loop1 
             }

        }

    }

    redTurn = true
    console.log(board)

    if (redTurn === true) {
        playerTurn.innerHTML = txt1.value + "'s turn"
    }
    else {
        playerTurn.innerHTML = txt2.value + "'s turn"
    }
    takenTurn += 1;

    console.log("yellowTurn was taken");

}


// Return either "noughts", "crosses" or "nobody" if the game is over.
// Otherwise return null to continue playing.
function checkWinner() {


    for (i = 0; i < 6; i++) {
        for (j = 0; j < 7; j++) {



            if (((board[i][j] === "reds" && board[i]?.[j + 1] === "reds" && board[i]?.[j + 2] === "reds" && board[i]?.[j + 3] === "reds") ||
                (board[i][j] === "reds" && board[i + 1]?.[j] === "reds" && board[i + 2]?.[j] === "reds" && board[i + 3]?.[j] === "reds") ||
                (board[i]?.[j] === "reds" && board[i + 1]?.[j + 1] === "reds" && board[i + 2]?.[j + 2] === "reds" && board[i + 3]?.[j + 3] === "reds") ||
                (board[i + 3]?.[j] === "reds" && board[i + 2]?.[j + 1] === "reds" && board[i + 1]?.[j + 2] === "reds" && board[i]?.[j + 3] === "reds"))
                && gameOver === false
            ) {
                redWins += 1
                redScore.textContent = redWins

                playerTurn.innerHTML = null
                winner = (txt1.value)
                const winnerName = document.getElementById("winner-name");
                winnerName.innerText = winner;
                const winnerDisplay = document.getElementById("winner-display");
                winnerDisplay.style.display = "block";
                return (gameOver = true)


            }

            else if (((board[i][j] === "yellows" && board[i]?.[j + 1] === "yellows" && board[i]?.[j + 2] === "yellows" && board[i]?.[j + 3] === "yellows") ||
                (board[i][j] === "yellows" && board[i + 1]?.[j] === "yellows" && board[i + 2]?.[j] === "yellows" && board[i + 3]?.[j] === "yellows") ||
                (board[i]?.[j] === "yellows" && board[i + 1]?.[j + 1] === "yellows" && board[i + 2]?.[j + 2] === "yellows" && board[i + 3]?.[j + 3] === "yellows") ||
                (board[i + 3]?.[j] === "yellows" && board[i + 2]?.[j + 1] === "yellows" && board[i + 1]?.[j + 2] === "yellows" && board[i]?.[j + 3] === "yellows"))
                && gameOver === false
            ) {
                yellowWins += 1
                yellowScore.textContent = yellowWins

                playerTurn.innerHTML = null
                winner = (txt2.value)
                const winnerName = document.getElementById("winner-name");
                winnerName.innerText = winner;
                const winnerDisplay = document.getElementById("winner-display");
                winnerDisplay.style.display = "block";
                return (gameOver = true)


            }

            else if (takenTurn === 42) {
                playerTurn.innerHTML = null
                redWins += 0.5
                redScore.textContent = redWins
                yellowWins += 0.5
                yellowScore.textContent = yellowWins
                winner = "nobody. It's a draw"
                const winnerName = document.getElementById("winner-name");
                winnerName.innerText = winner;
                const winnerDisplay = document.getElementById("winner-display");
                winnerDisplay.style.display = "block";
                return (gameOver = true);
            }
        }

    }

    console.log("checkWinner was called");
    return null;

}




// Set the game state back to its original state to play another game.
function resetGame() {

    console.log("resetGame was called");

    board = [[null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],]

    takenTurn = 0


    gameOver = false
    redTurn = true
    console.log("Red's Turn")

    if (redTurn === true) {
        playerTurn.innerHTML = txt1.value + "'s turn"
    }
    else {
        playerTurn.innerHTML = txt2.value + "'s turn"
    }



}

// Return the current board state with either a "nought" or a "cross" in
// each position. Put a null in a position that hasn't been played yet.
function getBoard() {
    console.log("getBoard was called");
    return board;
}

if (typeof exports === 'obcect') {
    console.log("Running in Node")
    // Node. Does not work with strict CommoncS, but only CommoncS-like
    // environments that support module.exports, like Node.
    module.exports = {
        takeTurn,
        checkWinner,
        resetGame,
        getBoard,
        yellowTurn,
        winner,
        clearBoard
    }
} else {
    console.log("Running in Browser")
}


