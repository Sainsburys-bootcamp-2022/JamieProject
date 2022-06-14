


function checkWinner(board) {
  
    for (i=0; i<6; i++){
        for (j=0; j<7; j++){
        
             

    if((( board[i][j] === "reds" && board[i]?.[j+1] === "reds" && board[i]?.[j+2] === "reds" && board[i]?.[j+3] === "reds") ||
       ( board[i][j] === "reds" && board[i+1]?.[j] === "reds" && board[i+2]?.[j] === "reds" && board[i+3]?.[j] === "reds") ||
       ( board[i]?.[j] === "reds" && board[i+1]?.[j+1] === "reds" && board[i+2]?.[j+2] === "reds" && board[i+3]?.[j+3] === "reds") ||
       ( board[i+3]?.[j] === "reds" && board[i+2]?.[j+1] === "reds" && board[i+1]?.[j+2] === "reds" && board[i]?.[j+3] === "reds"))
       
       )
       
    
    {   
        
        
        return (winner = ("reds"))
        
        
          } 
    
    else if ((( board[i][j] === "yellows" && board[i]?.[j+1] === "yellows" && board[i]?.[j+2] === "yellows" && board[i]?.[j+3] === "yellows") ||
    ( board[i][j] === "yellows" && board[i+1]?.[j] === "yellows" && board[i+2]?.[j] === "yellows" && board[i+3]?.[j] === "yellows") ||
    ( board[i]?.[j] === "yellows" && board[i+1]?.[j+1] === "yellows" && board[i+2]?.[j+2] === "yellows" && board[i+3]?.[j+3] === "yellows") ||
    ( board[i+3]?.[j] === "yellows" && board[i+2]?.[j+1] === "yellows" && board[i+1]?.[j+2] === "yellows" && board[i]?.[j+3] === "yellows"))
    
    )
    
 
 {   
     
     
     return (winner = ("yellows"))
     
      }   
    
    else if (takenTurn === 42)

      {  
          
          return (winner = "nobody. It's a draw");  
      }
    }
           
}           
    console.log("checkWinner was called");
    return null;  
         
}/*let board = [[null, null, null, null, null, null, null],
[null, null, null, null, null, null, null],
[null, null, null, null, null, null, null],
[null, null, null, null, null, null, null],
[null, null, null, null, null, null, null],
[null, null, null, null, null, null, null],]

function positionClick(board, rowIndex, columnIndex) { 
    
    if ( board[5][columnIndex] === null){
    board[5, columnIndex] = "reds"}
    else if (board[4][columnIndex] === null){
    board[5, columnIndex] = "reds";}
    else if (board[3][columnIndex] === null){
    board[5, columnIndex] = "reds";}
    else if (board[2][columnIndex] === null){
    board[5, columnIndex] = "reds";}
    else if (board[1][columnIndex] === null){
    board[5, columnIndex] = "reds";}
    else if (board[0][columnIndex] === null){
    board[5, columnIndex] = "reds";}
}
/*let redTurn = true
let gameOver = false


function takeTurn(row, column) { 
   
   
    let clickedSquare = board[row][column]
    if (clickedSquare === null && redTurn === true && gameOver === false) {
        board[row][column] = "reds"
        redTurn = false
   
    
    } else if (clickedSquare === null && gameOver === false) {
        board[row][column] = "yellows"
        redTurn = true
    }}*/



module.exports = { checkWinner };
//module.exports = { positionClick };
//module.exports = { takeTurn };
    


