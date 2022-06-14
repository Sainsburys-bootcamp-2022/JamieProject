const function2 = require ('./function2')

  test('that counter is placed on board correctly', () => {
        //arrange
        const rowIndex = 2
        const columnIndex = 4
        
        
        
        const expectedPlacedSquare =
        [[null, null, null, null, null, null, null],
         [null, null, null, null, null, null, null],
         [null, null, null, null, null, null, null],
         [null, null, null, null, null, null, null],
         [null, null, null, null, null, null, null],
         [null, null, null, "reds", null, null, null],]

         //act 
         const squareResult = function2.positionClick(rowIndex,columnIndex)

         //assert
         expect(squareResult).toBe(expectedPlacedSquare)
  })
