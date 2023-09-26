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


// fill sudoku puzzle methode 2
// |- sets the sudoku values of block 1 ----------------------------------------------------------------------|
// block 1 row: 1, 2, 3 ----------------------------------------<1>
let numbers = [1,2,3,4,5,6,7,8,9];

for (y = 0; y < 3; y++) {
    for (x = 0; x < 3; x++) {
        let numberIndex = randomInt(numbers.length, 0);

        sudokuElementsArray[y][x].innerText = numbers[numberIndex];
        numbers.splice(numberIndex, 1);
    }
}

// |- sets the sudoku values of block 2 ----------------------------------------------------------------------|
// block 2 row: 1 ----------------------------------------<2>
numbers = [1,2,3,4,5,6,7,8,9];
let ignoreNumbers = [];

// get numbers to ignore
setIgnoreNumbers(0, 1, 0, 3);

// removes the elements to ignore from numbers
removeElementsToIgnoreFromNumbers();

// sets the values of row 1
for (y = 0; y < 1; y++) {
    for (x = 3; x < 6; x++) {
        let numberIndex = randomInt(numbers.length, 0);

        sudokuElementsArray[y][x].innerText = numbers[numberIndex];
        numbers.splice(numberIndex, 1);
    }
}

// block 2 row: 2 ----------------------------------------<2>
numbers = [1,2,3,4,5,6,7,8,9];
ignoreNumbers = [];

// get numbers to ignore
setIgnoreNumbers(1, 2, 0, 3);
setIgnoreNumbers(0, 1, 3, 6);

// removes the elements to ignore from numbers
removeElementsToIgnoreFromNumbers();

// sets the values of row 2
for (y = 1; y < 2; y++) {
    for (x = 3; x < 6; x++) {
        let numberIndex = randomInt(numbers.length, 0);

        sudokuElementsArray[y][x].innerText = numbers[numberIndex];
        numbers.splice(numberIndex, 1);
    }
}

// block 2 row: 3 ----------------------------------------<2>
numbers = [1,2,3,4,5,6,7,8,9];
ignoreNumbers = [];

// get numbers to ignore
setIgnoreNumbers(2, 3, 0, 3);
setIgnoreNumbers(0, 2, 3, 6);

// removes the elements to ignore from numbers
removeElementsToIgnoreFromNumbers();

// sets the values of row 3
for (y = 2; y < 3; y++) {
    for (x = 3; x < 6; x++) {
        let numberIndex = randomInt(numbers.length, 0);

        sudokuElementsArray[y][x].innerText = numbers[numberIndex];
        numbers.splice(numberIndex, 1);
    }
}

// console.log(ignoreNumbers);
// console.log(numbers);