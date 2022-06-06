// Make your changes to store and update game state in this file
let board = [[null, null, null],
             [null, null, null],
             [null, null, null]] 


 let noughtTurn = true

 function getNewBoard(){
   return [[null, null, null], [null, null, null], [null, null, null]]
 }


// Take the row and column number between 0 and 2.....
// (inclusive) and update the game state.
function takeTurn(row, column) { 
    let clickedSquare = board[row][column]
    if (clickedSquare === null && noughtTurn === true) {
        board[row][column] = "noughts"
        noughtTurn = false
   
    
    } else if (clickedSquare === null) {
        board[row][column] = "crosses"
        noughtTurn = true
        
    }
    console.log(board)

   



    
    console.log("takeTurn was called with row: " + row + ", column:" + column);
    console.log(`takeTurn was called with row: ${row}, column: ${column}`);
}

// Return either "noughts", "crosses" or "nobody" if the game is over.
// Otherwise return null to continue playing.
function checkWinner() 
    { 

    norc = ["noughts", "crosses"]

    for (j=0; j<2; j++){
        for (i=0; i<3; i++){
        
    

    if(( board[i][0] === norc[j] && board[i][1] === norc[j] && board[i][2] === norc[j]) ||
       ( board[0][i] === norc[j] && board[1][i] === norc[j] && board[2][i] === norc[j]) ||
       ( board[i]?.[i] === norc[j] && board[i+1]?.[i+1] === norc[j] && board[i+2]?.[i+2] === norc[j]) ||
       ( board[i+2]?.[i] === norc[j] && board[i+1]?.[i+1] === norc[j] && board[i]?.[i+2] === norc[j]))
    
    { 
        return winner = (norc[j]) } 
        
    }
}
    
    


    console.log("checkWinner was called");
    return null;
}

    
// Set the game state back to its original state to play another game.
function resetGame() {
    
    console.log("resetGame was called");

    board = [[null, null, null],
             [null, null, null],
             [null, null, null]] 

          gameOver = false
          noughtTurn = true
          console.log ("Nought's Turn")

}

// Return the current board state with either a "nought" or a "cross" in
// each position. Put a null in a position that hasn't been played yet.
function getBoard() {
    console.log("getBoard was called");
    return board;
}

if (typeof exports === 'object') {
    console.log("Running in Node")
    // Node. Does not work with strict CommonJS, but only CommonJS-like
    // environments that support module.exports, like Node.
    module.exports = {
        takeTurn,
        checkWinner,
        resetGame,
        getBoard,
    }
} else {
    console.log("Running in Browser")
}
