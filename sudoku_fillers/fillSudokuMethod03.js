// fill sudoku puzzle method 3
let numbers = [1,2,3,4,5,6,7,8,9];
let ignoreNumbers = [];


// fills block 1
for (mainY = 0; mainY < 3; mainY++) {
    for (mainX = 0; mainX < 3; mainX++) {
        setIgnoreNumbers(0, 3, 0, 3);
        setIgnoreNumbers(mainY, mainY+1, 0, 9);
        setIgnoreNumbers(0, 9, mainX, mainX+1);
        removeElementsToIgnoreFromNumbers();
        setSudokuValuesOfGivenPos(mainY, mainY+1, mainX, mainX+1);

        numbers = [1,2,3,4,5,6,7,8,9];
        ignoreNumbers = [];
    }
}

// fills block 2
while (checkSudokuBlockForUndefined(0, 3, 3, 6)) {
    for (mainY = 0; mainY < 3; mainY++) {
        for (mainX = 3; mainX < 6; mainX++) {
            setIgnoreNumbers(0, 3, 3, 6);
            setIgnoreNumbers(mainY, mainY+1, 0, 9);
            setIgnoreNumbers(0, 9, mainX, mainX+1);
            removeElementsToIgnoreFromNumbers();
            setSudokuValuesOfGivenPos(mainY, mainY+1, mainX, mainX+1);

            numbers = [1,2,3,4,5,6,7,8,9];
            ignoreNumbers = [];
        }
    }
    console.log("block 2");
}
