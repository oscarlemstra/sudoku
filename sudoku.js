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



// fill sudoku puzzle methode 1
/*let numbers = [1,2,3,4,5,6,7,8,9];
let offset = 0;

for (i = 0; i < 9; i++) {
    for (x = 0; x < 3; x++) {
        for (y = 0; y < 3; y++) {
            let numberIndex = randomInt(numbers.length, 0);

            sudokuElements[9 * x + y + offset].innerText = numbers[numberIndex];
            numbers.splice(numberIndex, 1);

            // console.log(numberIndex + " :number index");
            // console.log(numbers);
            // console.log(numbers.length + " :numbers length \n\n.");
        }
    }
    numbers = [1,2,3,4,5,6,7,8,9];

    if (offset === 6 || offset === 33) {
        offset += 21
    }
    else {
        offset += 3;
    }
}*/


// functions for methode 2
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


// fill sudoku puzzle methode 2
// |- sets the sudoku values of block 1 ----------------------------------------------------------------------|
// block 1 row: 1, 2, 3 ----------------------------------------<b1 r1, 2, 3>
let numbers = [1,2,3,4,5,6,7,8,9];
let ignoreNumbers = [];

// sets the values of row 1, 2, 3
setSudokuValuesOfGivenPos(0, 3, 0, 3);


// |- sets the sudoku values of block 2 ----------------------------------------------------------------------|
while (sudokuElementsArray[2][5].innerText === "" || sudokuElementsArray[2][5].innerText === "undefined") {
    // block 2 row: 1 ----------------------------------------<b2 r1>
    numbers = [1,2,3,4,5,6,7,8,9];
    ignoreNumbers = [];

    // get numbers to ignore
    setIgnoreNumbers(0, 1, 0, 3);

    // removes the elements to ignore from numbers
    removeElementsToIgnoreFromNumbers();

    // sets the values of row 1
    setSudokuValuesOfGivenPos(0, 1, 3, 6);


    // block 2 row: 2 ----------------------------------------<b2 r2>
    numbers = [1,2,3,4,5,6,7,8,9];
    ignoreNumbers = [];

    // get numbers to ignore
    setIgnoreNumbers(1, 2, 0, 3);
    setIgnoreNumbers(0, 1, 3, 6);

    // removes the elements to ignore from numbers
    removeElementsToIgnoreFromNumbers();

    // sets the values of row 2
    setSudokuValuesOfGivenPos(1, 2, 3, 6);


    // block 2 row: 3 ----------------------------------------<b2 r3>
    numbers = [1,2,3,4,5,6,7,8,9];
    ignoreNumbers = [];

    // get numbers to ignore
    setIgnoreNumbers(2, 3, 0, 3);
    setIgnoreNumbers(0, 2, 3, 6);

    // removes the elements to ignore from numbers
    removeElementsToIgnoreFromNumbers();

    // sets the values of row 3
    setSudokuValuesOfGivenPos(2, 3, 3, 6);

    console.log("block 2");
}


// |- sets the sudoku values of block 3 ----------------------------------------------------------------------|
// block 3 row: 1 ----------------------------------------<b3 r1>
numbers = [1,2,3,4,5,6,7,8,9];
ignoreNumbers = [];

// get numbers to ignore
setIgnoreNumbers(0, 1, 0, 6);

// removes the elements to ignore from numbers
removeElementsToIgnoreFromNumbers();

// sets the values of row 1
setSudokuValuesOfGivenPos(0, 1, 6, 9);


// block 3 row: 2 ----------------------------------------<b3 r2>
numbers = [1,2,3,4,5,6,7,8,9];
ignoreNumbers = [];

// get numbers to ignore
setIgnoreNumbers(1, 2, 0, 6);

// removes the elements to ignore from numbers
removeElementsToIgnoreFromNumbers();

// sets the values of row 2
setSudokuValuesOfGivenPos(1, 2, 6, 9);


// block 3 row: 3 ----------------------------------------<b3 r3>
numbers = [1,2,3,4,5,6,7,8,9];
ignoreNumbers = [];

// get numbers to ignore
setIgnoreNumbers(2, 3, 0, 6);

// removes the elements to ignore from numbers
removeElementsToIgnoreFromNumbers();

// sets the values of row 3
setSudokuValuesOfGivenPos(2, 3, 6, 9);


// |- sets the sudoku values of block 4 ----------------------------------------------------------------------|
while (sudokuElementsArray[5][2].innerText === "" || sudokuElementsArray[5][2].innerText === "undefined") {
    // block 4 column: 1 ----------------------------------------<b4 c1>
    numbers = [1,2,3,4,5,6,7,8,9];
    ignoreNumbers = [];

    // get numbers to ignore
    setIgnoreNumbers(0, 3, 0, 1);

    // removes the elements to ignore from numbers
    removeElementsToIgnoreFromNumbers();

    // sets the values of column 1
    setSudokuValuesOfGivenPos(3, 6, 0, 1);


    // block 4 column: 2 ----------------------------------------<b4 c2>
    numbers = [1,2,3,4,5,6,7,8,9];
    ignoreNumbers = [];

    // get numbers to ignore
    setIgnoreNumbers(0, 3, 1, 2);
    setIgnoreNumbers(3, 6, 0, 1);

    // removes the elements to ignore from numbers
    removeElementsToIgnoreFromNumbers();

    // sets the values of column 2
    setSudokuValuesOfGivenPos(3, 6, 1, 2);


    // block 4 column: 3 ----------------------------------------<b4 c3>
    numbers = [1,2,3,4,5,6,7,8,9];
    ignoreNumbers = [];

    // get numbers to ignore
    setIgnoreNumbers(0, 3, 2, 3);
    setIgnoreNumbers(3, 6, 0, 2);

    // removes the elements to ignore from numbers
    removeElementsToIgnoreFromNumbers();

    // sets the values of column 3
    setSudokuValuesOfGivenPos(3, 6, 2, 3);

    console.log("block 4");
}


// console.log(ignoreNumbers);
// console.log(numbers);