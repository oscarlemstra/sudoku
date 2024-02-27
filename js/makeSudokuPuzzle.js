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

// sudoku difficulty curf values
// sudokuElementsToRemoveAmount:     24, 34, 44, 54, 64
// sudokuElementsRemovePercentage:   80, 70, 60, 50, 40

if (sessionStorage.getItem("sudokuElementsToRemoveAmount") === null || sessionStorage.getItem("sudokuElementsRemovePercentage") === null) {
    sessionStorage.setItem("sudokuElementsToRemoveAmount", "24");
    sessionStorage.setItem("sudokuElementsRemovePercentage", "80");
}

// empty sudoku v2
while (emptiedSudokuElements < Number(sessionStorage.getItem("sudokuElementsToRemoveAmount"))) {
    for (i = 0; i < sudokuElements.length; i++) {
        if (emptiedSudokuElements >= Number(sessionStorage.getItem("sudokuElementsToRemoveAmount"))) {
            break;
        }

        if (randomInt(101, 0) > Number(sessionStorage.getItem("sudokuElementsRemovePercentage")) && sudokuElements[i].innerText !== "") {
            sudokuElements[i].innerText = "";
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


function playSolvedSudokuSound () {
    let sounds = [
        "./audio/children-yaysound-effect.mp3",
        "./audio/ffxiv_level_up_DFe3J9y.mp3",
        "./audio/sea-shanty.mp3",
        "./audio/victoryff.swf.mp3"
    ]

    let audio = new Audio(sounds[randomInt(sounds.length, 0)]);
    audio.volume = 0.3;
    audio.play();
}

function solvedSudokuAnimation() {
    for (let y = 0; y < 9; y++) {
        for (let x = 0; x < 9; x++) {
            setTimeout(function () {
                sudokuElementsArray[y][x].style.backgroundColor = "#00e600";
            }, 150 * (x + y) + 150);
        }
    }
}

function checkIfSudokuIsSolved () {
    if (userInputAmount >= emptiedSudokuElements) {
        for (mainY = 0; mainY < 9; mainY++) {
            for (mainX = 0; mainX < 9; mainX++) {
                if (sudokuSolution[mainY][mainX] !== sudokuElementsArray[mainY][mainX].innerText) {
                    return console.log("sudoku is not solved");
                }
            }
        }
        playSolvedSudokuSound();
        solvedSudokuAnimation();
        return console.log("sudoku is solved");
    }
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
