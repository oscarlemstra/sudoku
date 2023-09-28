let sudokuElements = document.getElementById("sudoku-puzzle").getElementsByTagName("td");


// returns random number
function randomInt (max, min) {
    return Math.floor(Math.random() * (max - min)) + min;
}


// fill sudoku puzzle methode 1
let numbers = [1,2,3,4,5,6,7,8,9];
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
}