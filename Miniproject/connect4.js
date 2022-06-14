const txt1 = document.getElementById('player1name');
const txt2 = document.getElementById('player2name');
const btn1 = document.getElementById('button1');
const out1 = document.getElementById('output1');
const out2 = document.getElementById('output2');
let playerTurn = document.getElementById('player-Turn')
let redScore = document.getElementById('redScore')
let redWins = 0;
let yellowScore = document.getElementById('yellowScore')
let yellowWins =0;


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
btn1.addEventListener('click',userdisplay);




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
        redTurn = false
   
    
    } else if (clickedSquare === null && gameOver === false) {
        board[row][column] = "yellows"
        redTurn = true
        
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
 
 
// Return either "noughts", "crosses" or "nobody" if the game is over.
// Otherwise return null to continue playing.
function checkWinner() {
  
    
    for (i=0; i<6; i++){
        for (j=0; j<7; j++){
        
             

    if((( board[i][j] === "reds" && board[i]?.[j+1] === "reds" && board[i]?.[j+2] === "reds" && board[i]?.[j+3] === "reds") ||
       ( board[i][j] === "reds" && board[i+1]?.[j] === "reds" && board[i+2]?.[j] === "reds" && board[i+3]?.[j] === "reds") ||
       ( board[i]?.[j] === "reds" && board[i+1]?.[j+1] === "reds" && board[i+2]?.[j+2] === "reds" && board[i+3]?.[j+3] === "reds") ||
       ( board[i+3]?.[j] === "reds" && board[i+2]?.[j+1] === "reds" && board[i+1]?.[j+2] === "reds" && board[i]?.[j+3] === "reds"))
       && gameOver === false
       )
       
    
    {   
        redWins += 1
        redScore.textContent = redWins
        gameOver = true
        return (winner = (txt1.value))
        
        
          } 
    
    else if ((( board[i][j] === "yellows" && board[i]?.[j+1] === "yellows" && board[i]?.[j+2] === "yellows" && board[i]?.[j+3] === "yellows") ||
    ( board[i][j] === "yellows" && board[i+1]?.[j] === "yellows" && board[i+2]?.[j] === "yellows" && board[i+3]?.[j] === "yellows") ||
    ( board[i]?.[j] === "yellows" && board[i+1]?.[j+1] === "yellows" && board[i+2]?.[j+2] === "yellows" && board[i+3]?.[j+3] === "yellows") ||
    ( board[i+3]?.[j] === "yellows" && board[i+2]?.[j+1] === "yellows" && board[i+1]?.[j+2] === "yellows" && board[i]?.[j+3] === "yellows"))
    && gameOver === false
    )
    
 
 {   
     yellowWins += 1
     yellowScore.textContent = yellowWins
     gameOver = true
     return (winner = (txt2.value))
     
      }   
    
    else if (takenTurn === 42)

      {  
          gameOver = true
          return (winner = "nobody. It's a draw");  
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
    console.log ("Red's Turn")

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
    }
} else {
    console.log("Running in Browser")
}


