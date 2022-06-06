// This file contains helper code beyond the first week "Intro to JavaScript" course content.
// You should not have to make any changes in this file to get your game working.

// Validate academite functions are available
const functions = ["takeTurn", "getBoard", "checkWinner", "resetGame"];
for (f of functions) {
    const functionObject = window[f];
    if (typeof functionObject !== "function") {
        throw `Looks like expected function '${f}' is missing. Double check the function signatures from academy.js are still present and unaltered.`;
    }
}

// Clear down the elements drawn on the board.
function clearBoard() {
    for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
        for (let columnIndex = 0; columnIndex < 7; columnIndex++) {
            document.getElementById(`row-${rowIndex}-column-${columnIndex}`).innerHTML = ""
        }
    }
}

// Populate the grid with images based on the board state.
function drawBoard(board) {
    clearBoard();
    for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
        for (let columnIndex = 0; columnIndex < 7; columnIndex++) {
            if (!board[rowIndex][columnIndex]) {
                continue;
            }
            const cellText = board[rowIndex][columnIndex] === "reds" ? "🔴" : "🟡";
            document.getElementById(`row-${rowIndex}-column-${columnIndex}`).innerText = cellText;
        }
    }
}

function isValidRowOrColumn(array) {
    return Array.isArray(array) && array.length === 6||7;
}

function isValidColumn(columnArray) {
    return isValidRowOrColumn(columnArray) && columnArray.every(function (item) { return ["reds", "yellows", null].includes(item); });
}

// A grid position was clicked call the game's turn function, redraw and then check for a winner.
function positionClick(rowIndex, columnIndex, event) { 
    const board = getBoard();
    if ( board[5][columnIndex] === null)
    takeTurn(5, columnIndex);
    else if (board[4][columnIndex] === null)
    takeTurn(4, columnIndex);
    else if (board[3][columnIndex] === null)
    takeTurn(3, columnIndex);
    else if (board[2][columnIndex] === null)
    takeTurn(2, columnIndex);
    else if (board[1][columnIndex] === null)
    takeTurn(1, columnIndex);
    else if (board[0][columnIndex] === null)
    takeTurn(0, columnIndex);
    
    if (!isValidRowOrColumn(board) || !board.every(isValidColumn)) {
        throw "Expecting 'getBoard' to return a 2d array where all values match are null or one of the strings 'reds' or 'yellows'. Actually received: " + JSON.stringify(board);
    }
    drawBoard(board);
    const winner = checkWinner();
    if (winner) {
        
        const winnerName = document.getElementById("winner-name");
        winnerName.innerText = winner;
        const winnerDisplay = document.getElementById("winner-display");
        winnerDisplay.style.display = "block";
    }
}

// The reset button was clicked, call the game's reset function then reset the DOM.
function resetClick(event) {
    resetGame();
    const winnerName = document.getElementById("winner-name");
    winnerName.innerText = "";
    const winnerDisplay = document.getElementById("winner-display");
    winnerDisplay.style.display = "None";
    clearBoard();
}

// Bind the click events for the grid.
for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
    for (let columnIndex = 0; columnIndex < 7; columnIndex++) {
        const gridPosition = document.getElementById(`row-${rowIndex}-column-${columnIndex}`);
        gridPosition.addEventListener("click", positionClick.bind(null, rowIndex, columnIndex));
    }
}

// Bind the click event for the reset button.
const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", resetClick);

if (typeof exports === 'object') {
    console.log("Running in Node")
    // Node. Does not work with strict CommonJS, but only CommonJS-like 
    // environments that support module.exports, like Node.
    module.exports = {
        clearBoard,
        drawBoard,
        isValidRowOrColumn,
        isValidColumn,
        positionClick,
        resetClick,
    }
} else {
    console.log("Running in Browser")
}
