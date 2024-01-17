let sudokuSolution = [[],[],[],[],[],[],[],[],[]]; // kan er ook een lange string van maken
let redSudokuElements = [];


// sets the sudoku solution
for (y = 0; y < 9; y++) {
    for (x = 0; x < 9; x++) {
        sudokuSolution[y][x] = sudokuElementsArray[y][x].innerText;
    }
}


// empty sudoku
// max number removal is 64
for (y = 0; y < 9; y++) {
    for (x = 0; x < 9; x++) {
        if (randomInt(101, 0) > 90) {
            sudokuElementsArray[y][x].innerText = "";
            console.log("empty sudoku elements");
        }
    }
}

// gives the clue numbers a background color
for (y = 0; y < 9; y++) {
    for (x = 0; x < 9; x++) {
        if (sudokuElementsArray[y][x].innerText !== "") {
            sudokuElementsArray[y][x].style.backgroundColor = "lightgrey";
        }
    }
}


function makeRedSudokuElementsBlack () {
    if (redSudokuElements.length > 0) {
        for (i = 0; i < redSudokuElements.length; i++) {
            redSudokuElements[i].style.color = "black";
        }
        redSudokuElements = [];
    }
}

function setSudokuElement (element) {
    element.innerText = selectedNumber;
}

function lookForDoubleNumbersInArea (number, minYpos, maxYpos, minXpos, maxXpos) {
    let foundNumbers = [];

    for (y = minYpos; y < maxYpos; y++) {
        for (x = minXpos; x < maxXpos; x++) {
            if (number === sudokuElementsArray[y][x].innerText) {
                foundNumbers.push(sudokuElementsArray[y][x]);
            }
        }
    }

    if (foundNumbers.length > 1) {
        for (i = 0; i < foundNumbers.length; i++) {
            foundNumbers[i].style.color = "red";
            redSudokuElements.push(foundNumbers[i]);
        }
    }
}

function getSudokuBlockPos (sudokuElementPos, getBlockEndPos = false) {
    if (!getBlockEndPos) {
        return Math.floor(sudokuElementPos / 3) * 3;
    }
    else {
        return Math.floor(sudokuElementPos / 3) * 3 + 3;
    }
}

function makeDoubleNumbersRed () {
    for (mainY = 0; mainY < 9; mainY++) {
        for (mainX = 0; mainX < 9; mainX++) {
            if (sudokuElementsArray[mainY][mainX].innerText !== "" && sudokuElementsArray[mainY][mainX].style.backgroundColor === "") {
                lookForDoubleNumbersInArea(sudokuElementsArray[mainY][mainX].innerText, mainY, mainY+1, 0, 9);
                lookForDoubleNumbersInArea(sudokuElementsArray[mainY][mainX].innerText, 0, 9, mainX, mainX+1);
                lookForDoubleNumbersInArea(sudokuElementsArray[mainY][mainX].innerText, getSudokuBlockPos(mainY), getSudokuBlockPos(mainY, true), getSudokuBlockPos(mainX), getSudokuBlockPos(mainX, true));
            }
        }
    }
}


// gives all the empty #sudoku-puzzle td elements the onclick event: makeRedSudokuElementsBlack, setSudokuElement, makeDoubleNumbersRed
for (y = 0; y < 9; y++) {
    let yy = y;
    for (x = 0; x < 9; x++) {
        let xx = x;

        if (sudokuElementsArray[yy][xx].innerText === "") {
            sudokuElementsArray[yy][xx].addEventListener("click", function () {
                makeRedSudokuElementsBlack();
                setSudokuElement(sudokuElementsArray[yy][xx]);
                makeDoubleNumbersRed();
            });
        }
    }
}
