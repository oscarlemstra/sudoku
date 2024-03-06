let sudokuSolution = [[],[],[],[],[],[],[],[],[]];
let redSudokuElements = [];
let emptiedSudokuElements = 0;
let userInputAmount = 0;


// sets the sudoku solution
for (y = 0; y < 9; y++) {
    for (x = 0; x < 9; x++) {
        sudokuSolution[y][x] = sudokuElementsArray[y][x].innerText;
    }
}

findMirroredNumbers();


// sudoku difficulty curf values
// sudokuElementsToRemoveAmount:     24, 34, 44, 54, 64
// sudokuElementsRemovePercentage:   80, 70, 60, 50, 40

if (sessionStorage.getItem("sudokuElementsToRemoveAmount") === null || sessionStorage.getItem("sudokuElementsRemovePercentage") === null) {
    sessionStorage.setItem("sudokuElementsToRemoveAmount", "24");
    sessionStorage.setItem("sudokuElementsRemovePercentage", "80");
}

// empty sudoku v2
while (emptiedSudokuElements < Number(sessionStorage.getItem("sudokuElementsToRemoveAmount"))) {
    for (i = 0; i < array_sudokuElementsToEmpty.length; i++) {
        if (emptiedSudokuElements >= Number(sessionStorage.getItem("sudokuElementsToRemoveAmount"))) {
            break;
        }

        if (randomInt(101, 0) > Number(sessionStorage.getItem("sudokuElementsRemovePercentage")) && array_sudokuElementsToEmpty[i].innerText !== "") {
            array_sudokuElementsToEmpty[i].innerText = "";
            emptiedSudokuElements++;
        }
    }
    console.log("while loops");
}
console.log(emptiedSudokuElements, "emptied sudoku elements");


// gives the clue numbers a background color
for (y = 0; y < 9; y++) {
    for (x = 0; x < 9; x++) {
        if (sudokuElementsArray[y][x].innerText !== "") {
            sudokuElementsArray[y][x].style.backgroundColor = "lightgrey";
        }
    }
}


function setSudokuElement (element) {
    element.innerText = selectedNumber;
}


// gives all the empty #sudoku-puzzle td elements the onclick event: makeRedSudokuElementsBlack, setSudokuElement, makeDoubleNumbersRed
for (y = 0; y < 9; y++) {
    let yy = y;
    for (x = 0; x < 9; x++) {
        let xx = x;

        if (sudokuElementsArray[yy][xx].innerText === "") {
            sudokuElementsArray[yy][xx].addEventListener("click", function () {
                if (!canMakeNotes) {
                    removeNotesElement(sudokuElementsArray[yy][xx]);

                    makeRedSudokuElementsBlack();
                    setSudokuElement(sudokuElementsArray[yy][xx]);
                    makeDoubleNumbersRed();
                    userInputAmount++;
                    checkIfSudokuIsSolved();
                }
                else {
                    if (!doesNotesElementExist(sudokuElementsArray[yy][xx])) {
                        addNotesElement(sudokuElementsArray[yy][xx]);
                        
                        makeRedSudokuElementsBlack();
                        makeDoubleNumbersRed();
                    }

                    setNote(sudokuElementsArray[yy][xx]);
                }
            });
        }
    }
}
