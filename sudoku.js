let selectedNumber = "";
let selectNumbers = document.getElementById("number-select").getElementsByTagName("td");
let sudokuElements = document.getElementById("sudoku-puzzle").getElementsByTagName("td");
let selectNumberNone = document.getElementById("number-select-none");

let sudokuElementsArray = [[],[],[],[],[],[],[],[],[]];

// sets sudokuElementsArray
for (y = 0; y < 9; y++) {
    for (x = 0; x < 9; x++) {
        sudokuElementsArray[y][x] = sudokuElements[9 * y + x];
    }
}


// gives all the #number-select td elements the onclick event: setSelectedNumber
for (i = 0; i < selectNumbers.length; i++) {
    let ii = i;

    selectNumbers[i].addEventListener("click", function () {
        setSelectedNumber(selectNumbers[ii]);
    });
}

function setSelectedNumber (element) {
    selectedNumber = element.innerText;

    resetStyleOfOldSelectedNumberElement();
    
    element.style.backgroundColor = "steelblue";
    element.style.color = "white";
}


// gives all the #sudoku-puzzle td elements the onclick event: setSudokuElement
for (i = 0; i < sudokuElements.length; i++) {
    let ii = i;

    sudokuElements[i].addEventListener("click", function () {
        setSudokuElement(sudokuElements[ii]);
    });
}

function setSudokuElement (element) {
    element.innerText = selectedNumber;
}


// gives the #number-select-none element the onclick event: setSelectedNumberToEmpty
selectNumberNone.addEventListener("click", setSelectedNumberToEmpty);

function setSelectedNumberToEmpty () {
    selectedNumber = "";
    
    resetStyleOfOldSelectedNumberElement();

    selectNumberNone.style.backgroundColor = "steelblue";
    selectNumberNone.style.color = "white";
}


// remove style from old element
function resetStyleOfOldSelectedNumberElement () {
    for (i = 0; i < selectNumbers.length; i++) {
        if (selectNumbers[i].style.backgroundColor === "steelblue") {
            selectNumbers[i].style.backgroundColor = "white";
            selectNumbers[i].style.color = "black";
            return;
        }
    }

    if (selectNumberNone.style.backgroundColor === "steelblue") {
        selectNumberNone.style.backgroundColor = "white";
        selectNumberNone.style.color = "red";
    }
}



// other functions
// returns random number
function randomInt (max, min) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// finds the index of a given value in an array
function findIndex (value, array) {
    return array.findIndex(function (valueToSearch) {
        return valueToSearch === value;
    });
}



// functions for fill methods
function setIgnoreNumbers (posYmin, posYmax, posXmin, posXmax) {
    for (y = posYmin; y < posYmax; y++) {
        for (x = posXmin; x < posXmax; x++) {
            ignoreNumbers[ignoreNumbers.length] = Number(sudokuElementsArray[y][x].innerText);
        }
    }
}

function removeElementsToIgnoreFromNumbers () {
    for (i = 0; i < ignoreNumbers.length; i++) {
        let index = findIndex(ignoreNumbers[i], numbers);
    
        if (index === -1) {
            continue;
        }
        else {
            numbers.splice(index, 1);
        }
    }
}

function setSudokuValuesOfGivenPos (minYpos, maxYpos, minXpos, maxXpos) {
    for (y = minYpos; y < maxYpos; y++) {
        for (x = minXpos; x < maxXpos; x++) {
            let numberIndex = randomInt(numbers.length, 0);
    
            sudokuElementsArray[y][x].innerText = numbers[numberIndex];
            numbers.splice(numberIndex, 1);
        }
    }
}

function emptyGivenSudokuPos (minYpos, maxYpos, minXpos, maxXpos) {
    for (y = minYpos; y < maxYpos; y++) {
        for (x = minXpos; x < maxXpos; x++) {
            sudokuElementsArray[y][x].innerText = "";
        }
    }
}

function checkSudokuBlockForUndefined (minYpos, maxYpos, minXpos, maxXpos) {
    for (y = minYpos; y < maxYpos; y++) {
        for (x = minXpos; x < maxXpos; x++) {
            if (sudokuElementsArray[y][x].innerText === "" || sudokuElementsArray[y][x].innerText === "undefined") {
                // empty given block
                for (y = minYpos; y < maxYpos; y++) {
                    for (x = minXpos; x < maxXpos; x++) {
                        sudokuElementsArray[y][x].innerText = "";
                    }
                }
                return true;
            }
            else {
                continue;
            }
        }
    }
    return false;
}
