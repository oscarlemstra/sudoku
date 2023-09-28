// fill sudoku puzzle method 3
let numbers = [1,2,3,4,5,6,7,8,9];
let ignoreNumbers = [];
let canGenerateSudoku = true;
let canGenerateBlock = true;
let generateCount = 0;


while (canGenerateSudoku) {
    canGenerateSudoku = false;
    canGenerateBlock = true;

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

    // fills block 3
    for (mainY = 0; mainY < 3; mainY++) {
        for (mainX = 6; mainX < 9; mainX++) {
            setIgnoreNumbers(0, 3, 6, 9);
            setIgnoreNumbers(mainY, mainY+1, 0, 9);
            setIgnoreNumbers(0, 9, mainX, mainX+1);
            removeElementsToIgnoreFromNumbers();
            setSudokuValuesOfGivenPos(mainY, mainY+1, mainX, mainX+1);

            numbers = [1,2,3,4,5,6,7,8,9];
            ignoreNumbers = [];
        }
    }

    // fills block 4
    while (checkSudokuBlockForUndefined(3, 6, 0, 3)) {
        for (mainY = 3; mainY < 6; mainY++) {
            for (mainX = 0; mainX < 3; mainX++) {
                setIgnoreNumbers(3, 6, 0, 3);
                setIgnoreNumbers(mainY, mainY+1, 0, 9);
                setIgnoreNumbers(0, 9, mainX, mainX+1);
                removeElementsToIgnoreFromNumbers();
                setSudokuValuesOfGivenPos(mainY, mainY+1, mainX, mainX+1);

                numbers = [1,2,3,4,5,6,7,8,9];
                ignoreNumbers = [];
            }
        }
        console.log("block 4");
    }

    // fills block 5
    while (checkSudokuBlockForUndefined(3, 6, 3, 6)) {
        for (mainY = 3; mainY < 6; mainY++) {
            for (mainX = 3; mainX < 6; mainX++) {
                setIgnoreNumbers(3, 6, 3, 6);
                setIgnoreNumbers(mainY, mainY+1, 0, 9);
                setIgnoreNumbers(0, 9, mainX, mainX+1);
                removeElementsToIgnoreFromNumbers();
                setSudokuValuesOfGivenPos(mainY, mainY+1, mainX, mainX+1);

                numbers = [1,2,3,4,5,6,7,8,9];
                ignoreNumbers = [];
            }
        }
        console.log("block 5");
    }

    // fills block 6
    while (checkSudokuBlockForUndefined(3, 6, 6, 9) && canGenerateBlock) {
        for (mainY = 3; mainY < 6; mainY++) {
            for (mainX = 6; mainX < 9; mainX++) {
                setIgnoreNumbers(3, 6, 6, 9);
                setIgnoreNumbers(mainY, mainY+1, 0, 9);
                setIgnoreNumbers(0, 9, mainX, mainX+1);
                removeElementsToIgnoreFromNumbers();
                setSudokuValuesOfGivenPos(mainY, mainY+1, mainX, mainX+1);

                numbers = [1,2,3,4,5,6,7,8,9];
                ignoreNumbers = [];
            }
        }
        generateCount++;

        if (generateCount > 50) {
            canGenerateSudoku = true;
            canGenerateBlock = false;
            emptyGivenSudokuPos(0, 9, 0, 9);
        }

        console.log("block 6");
    }
    generateCount = 0;


    // fills block 7
    while (checkSudokuBlockForUndefined(6, 9, 0, 3) && canGenerateBlock) {
        for (mainY = 6; mainY < 9; mainY++) {
            for (mainX = 0; mainX < 3; mainX++) {
                setIgnoreNumbers(6, 9, 0, 3);
                setIgnoreNumbers(mainY, mainY+1, 0, 9);
                setIgnoreNumbers(0, 9, mainX, mainX+1);
                removeElementsToIgnoreFromNumbers();
                setSudokuValuesOfGivenPos(mainY, mainY+1, mainX, mainX+1);

                numbers = [1,2,3,4,5,6,7,8,9];
                ignoreNumbers = [];
            }
        }
    }

    // fills block 8
    while (checkSudokuBlockForUndefined(6, 9, 3, 6) && canGenerateBlock) {
        for (mainY = 6; mainY < 9; mainY++) {
            for (mainX = 3; mainX < 6; mainX++) {
                setIgnoreNumbers(6, 9, 3, 6);
                setIgnoreNumbers(mainY, mainY+1, 0, 9);
                setIgnoreNumbers(0, 9, mainX, mainX+1);
                removeElementsToIgnoreFromNumbers();
                setSudokuValuesOfGivenPos(mainY, mainY+1, mainX, mainX+1);

                numbers = [1,2,3,4,5,6,7,8,9];
                ignoreNumbers = [];
            }
        }
        generateCount++;

        if (generateCount > 50) {
            canGenerateSudoku = true;
            canGenerateBlock = false;
            emptyGivenSudokuPos(0, 9, 0, 9);
        }

        console.log("block 8");
    }
    generateCount = 0;


    // fills block 9
    while (checkSudokuBlockForUndefined(6, 9, 6, 9) && canGenerateBlock) {
        for (mainY = 6; mainY < 9; mainY++) {
            for (mainX = 6; mainX < 9; mainX++) {
                setIgnoreNumbers(6, 9, 6, 9);
                setIgnoreNumbers(mainY, mainY+1, 0, 9);
                setIgnoreNumbers(0, 9, mainX, mainX+1);
                removeElementsToIgnoreFromNumbers();
                setSudokuValuesOfGivenPos(mainY, mainY+1, mainX, mainX+1);

                numbers = [1,2,3,4,5,6,7,8,9];
                ignoreNumbers = [];
            }
        }
        generateCount++;

        if (generateCount >= 2) {
            canGenerateSudoku = true;
            canGenerateBlock = false;
            emptyGivenSudokuPos(0, 9, 0, 9);
        }

        console.log("block 9");
    }
    generateCount = 0;
}
