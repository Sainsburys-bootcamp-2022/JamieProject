// Make your changes to store and update game state in this file
let board = [[null, null, null, null, null, null, null],
             [null, null, null, null, null, null, null],
             [null, null, null, null, null, null, null],
             [null, null, null, null, null, null, null],
             [null, null, null, null, null, null, null],
             [null, null, null, null, null, null, null],] 


 let redTurn = true

 function getNewBoard(){
   return [[null, null, null, null, null, null, null],
           [null, null, null, null, null, null, null],
           [null, null, null, null, null, null, null],
           [null, null, null, null, null, null, null],
           [null, null, null, null, null, null, null],
           [null, null, null, null, null, null, null],] 
 }


// Take the row and column number between 0 and 2.....
// (inclusive) and update the game state.
let gameOver = false

function takeTurn(row, column) { 
    let clickedSquare = board[row][column]
    if (clickedSquare === null && redTurn === true && gameOver === false) {
        board[row][column] = "reds"
        redTurn = false
   
    
    } else if (clickedSquare === null && gameOver === false) {
        board[row][column] = "yellows"
        redTurn = true
        
    }
    console.log(board)

   



    
    console.log("takeTurn was called with row: " + row + ", column:" + column);
    console.log(`takeTurn was called with row: ${row}, column: ${column}`);
}

// Return either "noughts", "crosses" or "nobody" if the game is over.
// Otherwise return null to continue playing.
function checkWinner() 
    { 

    colour = ["reds", "yellows"]

    for (c=0; c<2; c++){
        for (i=0; i<6; i++){
            for (j=0; j<7; j++){
        
    

    if(( board[i][j] === colour[c] && board[i]?.[j+1] === colour[c] && board[i]?.[j+2] === colour[c] && board[i]?.[j+3] === colour[c]) ||
       ( board[i][j] === colour[c] && board[i+1]?.[j] === colour[c] && board[i+2]?.[j] === colour[c] && board[i+3]?.[j] === colour[c]) ||
       ( board[i]?.[j] === colour[c] && board[i+1]?.[j+1] === colour[c] && board[i+2]?.[j+2] === colour[c] && board[i+3]?.[j+3] === colour[c]) ||
       ( board[i+3]?.[j] === colour[c] && board[i+2]?.[j+1] === colour[c] && board[i+1]?.[j+2] === colour[c] && board[i]?.[j+3] === colour[c]))
    
    {   gameOver = true
        return (winner = (colour[c]))
        
       
    } 
        
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

          gameOver = false
          redTurn = true
          console.log ("Red's Turn")

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
    }
} else {
    console.log("Running in Browser")
}
