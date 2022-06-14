
const function1 = require ('./function1')


describe('that the winning conditions work', () => {

    it ('should give a red win', () => {
    //arrange
    let board = [[null, null, null, null, null, null, null],
                 [null, null, null, null, null, null, null],
                 ["reds", null, null, null, null, null, null],
                 ["reds", "yellows", null, null, null, null, null],
                 ["reds", "yellows", null, null, null, null, null],
                 ["reds", "yellows", null, null, null, null, null],] 

    takenTurn = 7
    const expectWinResult = "reds"
    //act
    const winResult = function1.checkWinner(board)
    //assert
    expect(winResult).toBe(expectWinResult)


    })


    it('should give a yellow win', () => {
        //arrange
        let board = [[null, null, null, null, null, null, null],
                     [null, null, null, null, null, null, null],
                     ["yellows", null, null, "yellows", null, null, null],
                     ["reds", "reds", "yellows", "reds", null, null, null],
                     ["reds", "yellows", "reds", "yellows", null, null, null],
                     ["yellows", "reds", "reds", "reds", "yellows", null, null],] 
    
        takenTurn = 15
        const expectWinResult = "yellows"
        //act
        const winResult = function1.checkWinner(board)
        //assert
        expect(winResult).toBe(expectWinResult)
        
    
        })

        it('should give a draw', () => {
            //arrange
            let board = [["yellows", "yellows", "yellows", "reds",    "yellows", "yellows", "yellows"],
                         ["reds",    "reds",    "reds",    "yellows", "reds",    "reds",    "reds"],
                         ["yellows", "yellows", "yellows", "reds",    "yellows", "yellows", "yellows"],
                         ["reds",    "reds",    "reds",    "yellows", "reds",    "reds",    "reds"],
                         ["yellows", "yellows", "yellows", "reds",    "yellows", "yellows", "yellows"],
                         ["reds",   "reds",     "reds",    "yellows", "reds",    "reds",    "reds"],] 
        
            takenTurn = 42
            const expectWinResult = "nobody. It's a draw"
            //act
            const winResult = function1.checkWinner(board)
            //assert
            expect(winResult).toBe(expectWinResult)

        })
    })
   /* test('that counter is placed on board correctly', () => {
        //arrange
        const rowIndex = 2
        const columnIndex = 4
        let board = 
        [[null, null, null, null, null, null, null],
         [null, null, null, null, null, null, null],
         [null, null, null, null, null, null, null],
         [null, null, null, null, null, null, null],
         [null, null, null, null, null, null, null],
         [null, null, null, null, null, null, null],]
        const player = "reds"
        const expectedPlacedSquare =
        [[null, null, null, null, null, null, null],
         [null, null, null, null, null, null, null],
         [null, null, null, null, null, null, null],
         [null, null, null, null, null, null, null],
         [null, null, null, null, null, null, null],
         [null, null, null, "reds", null, null, null],]

         //act 
         const squareResult = practice.positionClick(rowIndex,columnIndex)

         //assert
         expect(squareResult).toBe(expectedPlacedSquare)

    })*/





