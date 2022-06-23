


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
         
}



module.exports = { checkWinner };

    


