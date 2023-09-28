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



// functions for fill methods 2
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

function checkSudokuBlockForUndefined (minYpos, maxYpos, minXpos, maxXpos) {
    for (y = minYpos; y < maxYpos; y++) {
        for (x = minXpos; x < maxXpos; x++) {
            if (sudokuElementsArray[y][x].innerText === "" || sudokuElementsArray[y][x].innerText === "undefined") {
                return true;
            }
            else {
                continue;
            }
        }
    }
    return false;
}


// fill sudoku puzzle method 2
// |- sets the sudoku values of block 1 ----------------------------------------------------------------------|
// block 1 row: 1, 2, 3 ----------------------------------------<b1 r1, 2, 3>
let numbers = [1,2,3,4,5,6,7,8,9];
let ignoreNumbers = [];
setSudokuValuesOfGivenPos(0, 3, 0, 3);


// |- sets the sudoku values of block 2 ----------------------------------------------------------------------|
while (sudokuElementsArray[2][5].innerText === "" || sudokuElementsArray[2][5].innerText === "undefined") {
    // block 2 row: 1 ----------------------------------------<b2 r1>
    numbers = [1,2,3,4,5,6,7,8,9];
    ignoreNumbers = [];
    setIgnoreNumbers(0, 1, 0, 3);
    removeElementsToIgnoreFromNumbers();
    setSudokuValuesOfGivenPos(0, 1, 3, 6);

    // block 2 row: 2 ----------------------------------------<b2 r2>
    numbers = [1,2,3,4,5,6,7,8,9];
    ignoreNumbers = [];
    setIgnoreNumbers(1, 2, 0, 3);
    setIgnoreNumbers(0, 1, 3, 6);
    removeElementsToIgnoreFromNumbers();
    setSudokuValuesOfGivenPos(1, 2, 3, 6);

    // block 2 row: 3 ----------------------------------------<b2 r3>
    numbers = [1,2,3,4,5,6,7,8,9];
    ignoreNumbers = [];
    setIgnoreNumbers(2, 3, 0, 3);
    setIgnoreNumbers(0, 2, 3, 6);
    removeElementsToIgnoreFromNumbers();
    setSudokuValuesOfGivenPos(2, 3, 3, 6);

    console.log("block 2");
}


// |- sets the sudoku values of block 3 ----------------------------------------------------------------------|
// block 3 row: 1 ----------------------------------------<b3 r1>
numbers = [1,2,3,4,5,6,7,8,9];
ignoreNumbers = [];
setIgnoreNumbers(0, 1, 0, 6);
removeElementsToIgnoreFromNumbers();
setSudokuValuesOfGivenPos(0, 1, 6, 9);

// block 3 row: 2 ----------------------------------------<b3 r2>
numbers = [1,2,3,4,5,6,7,8,9];
ignoreNumbers = [];
setIgnoreNumbers(1, 2, 0, 6);
removeElementsToIgnoreFromNumbers();
setSudokuValuesOfGivenPos(1, 2, 6, 9);

// block 3 row: 3 ----------------------------------------<b3 r3>
numbers = [1,2,3,4,5,6,7,8,9];
ignoreNumbers = [];
setIgnoreNumbers(2, 3, 0, 6);
removeElementsToIgnoreFromNumbers();
setSudokuValuesOfGivenPos(2, 3, 6, 9);


// |- sets the sudoku values of block 4 ----------------------------------------------------------------------|
while (sudokuElementsArray[5][2].innerText === "" || sudokuElementsArray[5][2].innerText === "undefined") {
    // block 4 column: 1 ----------------------------------------<b4 c1>
    numbers = [1,2,3,4,5,6,7,8,9];
    ignoreNumbers = [];
    setIgnoreNumbers(0, 3, 0, 1);
    removeElementsToIgnoreFromNumbers();
    setSudokuValuesOfGivenPos(3, 6, 0, 1);

    // block 4 column: 2 ----------------------------------------<b4 c2>
    numbers = [1,2,3,4,5,6,7,8,9];
    ignoreNumbers = [];
    setIgnoreNumbers(0, 3, 1, 2);
    setIgnoreNumbers(3, 6, 0, 1);
    removeElementsToIgnoreFromNumbers();
    setSudokuValuesOfGivenPos(3, 6, 1, 2);

    // block 4 column: 3 ----------------------------------------<b4 c3>
    numbers = [1,2,3,4,5,6,7,8,9];
    ignoreNumbers = [];
    setIgnoreNumbers(0, 3, 2, 3);
    setIgnoreNumbers(3, 6, 0, 2);
    removeElementsToIgnoreFromNumbers();
    setSudokuValuesOfGivenPos(3, 6, 2, 3);

    console.log("block 4");
}


// |- sets the sudoku values of block 7 ----------------------------------------------------------------------|
// block 7 column: 1 ----------------------------------------<b7 c1>
numbers = [1,2,3,4,5,6,7,8,9];
ignoreNumbers = [];
setIgnoreNumbers(0, 6, 0, 1);
removeElementsToIgnoreFromNumbers();
setSudokuValuesOfGivenPos(6, 9, 0, 1);

// block 7 column: 2 ----------------------------------------<b7 c2>
numbers = [1,2,3,4,5,6,7,8,9];
ignoreNumbers = [];
setIgnoreNumbers(0, 6, 1, 2);
removeElementsToIgnoreFromNumbers();
setSudokuValuesOfGivenPos(6, 9, 1, 2);

// block 7 column: 3 ----------------------------------------<b7 c3>
numbers = [1,2,3,4,5,6,7,8,9];
ignoreNumbers = [];
setIgnoreNumbers(0, 6, 2, 3);
removeElementsToIgnoreFromNumbers();
setSudokuValuesOfGivenPos(6, 9, 2, 3);


// |- sets the sudoku values of block 5 ----------------------------------------------------------------------|
while (checkSudokuBlockForUndefined(3, 6, 3, 6)) {
    // block 5 field: 1 ----------------------------------------<b5 f1>
    numbers = [1,2,3,4,5,6,7,8,9];
    ignoreNumbers = [];
    setIgnoreNumbers(0, 3, 3, 4);
    setIgnoreNumbers(3, 4, 0, 3);
    removeElementsToIgnoreFromNumbers();
    setSudokuValuesOfGivenPos(3, 4, 3, 4);

    // block 5 field: 2 ----------------------------------------<b5 f2>
    numbers = [1,2,3,4,5,6,7,8,9];
    ignoreNumbers = [];
    setIgnoreNumbers(0, 3, 4, 5);
    setIgnoreNumbers(3, 4, 0, 4);
    removeElementsToIgnoreFromNumbers();
    setSudokuValuesOfGivenPos(3, 4, 4, 5);

    // block 5 field: 3 ----------------------------------------<b5 f3>
    numbers = [1,2,3,4,5,6,7,8,9];
    ignoreNumbers = [];
    setIgnoreNumbers(0, 3, 5, 6);
    setIgnoreNumbers(3, 4, 0, 5);
    removeElementsToIgnoreFromNumbers();
    setSudokuValuesOfGivenPos(3, 4, 5, 6);

    // block 5 field: 4 ----------------------------------------<b5 f4>
    numbers = [1,2,3,4,5,6,7,8,9];
    ignoreNumbers = [];
    setIgnoreNumbers(0, 3, 3, 4);
    setIgnoreNumbers(4, 5, 0, 3);
    setIgnoreNumbers(3, 4, 3, 6);
    removeElementsToIgnoreFromNumbers();
    setSudokuValuesOfGivenPos(4, 5, 3, 4);

    // block 5 field: 5 ----------------------------------------<b5 f5>
    numbers = [1,2,3,4,5,6,7,8,9];
    ignoreNumbers = [];
    setIgnoreNumbers(0, 3, 4, 5);
    setIgnoreNumbers(4, 5, 0, 4);
    setIgnoreNumbers(3, 4, 3, 6);
    removeElementsToIgnoreFromNumbers();
    setSudokuValuesOfGivenPos(4, 5, 4, 5);

    // block 5 field: 6 ----------------------------------------<b5 f6>
    numbers = [1,2,3,4,5,6,7,8,9];
    ignoreNumbers = [];
    setIgnoreNumbers(0, 3, 5, 6);
    setIgnoreNumbers(4, 5, 0, 5);
    setIgnoreNumbers(3, 4, 3, 6);
    removeElementsToIgnoreFromNumbers();
    setSudokuValuesOfGivenPos(4, 5, 5, 6);

    // block 5 field: 7 ----------------------------------------<b5 f7>
    numbers = [1,2,3,4,5,6,7,8,9];
    ignoreNumbers = [];
    setIgnoreNumbers(0, 3, 3, 4);
    setIgnoreNumbers(5, 6, 0, 3);
    setIgnoreNumbers(3, 5, 3, 6);
    removeElementsToIgnoreFromNumbers();
    setSudokuValuesOfGivenPos(5, 6, 3, 4);

    // block 5 field: 8 ----------------------------------------<b5 f8>
    numbers = [1,2,3,4,5,6,7,8,9];
    ignoreNumbers = [];
    setIgnoreNumbers(0, 3, 4, 5);
    setIgnoreNumbers(5, 6, 0, 4);
    setIgnoreNumbers(3, 5, 3, 6);
    removeElementsToIgnoreFromNumbers();
    setSudokuValuesOfGivenPos(5, 6, 4, 5);

    // block 5 field: 9 ----------------------------------------<b5 f9>
    numbers = [1,2,3,4,5,6,7,8,9];
    ignoreNumbers = [];
    setIgnoreNumbers(0, 3, 5, 6);
    setIgnoreNumbers(5, 6, 0, 5);
    setIgnoreNumbers(3, 5, 3, 6);
    removeElementsToIgnoreFromNumbers();
    setSudokuValuesOfGivenPos(5, 6, 5, 6);

    console.log("block 5");
}

// console.log(ignoreNumbers);
// console.log(numbers);