

function positionClick(rowIndex, columnIndex) { 
    

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
    return board
}
module.exports = { positionClick };
