let sudokuSolution = [[],[],[],[],[],[],[],[],[]]; // kan er ook een lange string van maken

// sets the sudoku solution
for (y = 0; y < 9; y++) {
    for (x = 0; x < 9; x++) {
        sudokuSolution[y][x] = sudokuElementsArray[y][x].innerText;
    }
}
console.log(sudokuSolution);


// empty sudoku
// max number removal is 64
for (y = 0; y < 9; y++) {
    for (x = 0; x < 9; x++) {
        if (randomInt(101, 0) > 90) {
            sudokuElementsArray[y][x].innerText = "";
            console.log("empty sudoku element")
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


function setSudokuElement (element) {
    element.innerText = selectedNumber;
}

function lookForNumberInArea (number, minYpos, maxYpos, minXpos, maxXpos) {
    for (y = minYpos; y < maxYpos; y++) {
        for (x = minXpos; x < maxXpos; x++) {
            if (number === sudokuElementsArray[y][x].innerText) {
                sudokuElementsArray[y][x].style.color = "red";
            }
        }
    }
}


// gives all the empty #sudoku-puzzle td elements the onclick event: setSudokuElement
for (i = 0; i < sudokuElements.length; i++) {
    let ii = i;

    if (sudokuElements[i].innerText === "") {
        sudokuElements[i].addEventListener("click", function () {
            setSudokuElement(sudokuElements[ii]);
        });
    }
}
