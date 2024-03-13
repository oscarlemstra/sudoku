function savePuzzle () {
    let date = new Date().toLocaleDateString();
    let time = new Date().toLocaleTimeString();
    let puzzleData = [];

    // saves the date and time when the puzzle got saved
    console.log("puzzle saved on -", date, time);
    localStorage.setItem("puzzleSaveDate", date);
    localStorage.setItem("puzzleSaveTime", time);

    // saves the userInputAmount
    localStorage.setItem("userInputAmount", userInputAmount);
    
    // saves the emptiedSudokuElements
    localStorage.setItem("emptiedSudokuElements", emptiedSudokuElements);

    // saves the puzzleSolution
    if (localStorage.getItem("puzzleSolution") === null) {
        localStorage.setItem("puzzleSolution", JSON.stringify(sudokuSolution));
        console.log("puzzle solution saved");
    }

    // saves the puzzleData
    if (localStorage.getItem("puzzleData") === null) {
        for (i = 0; i < sudokuElements.length; i++) {
            puzzleData[i] = new Array(sudokuElements[i].style.backgroundColor, sudokuElements[i].innerHTML);
        }

        localStorage.setItem("puzzleData", JSON.stringify(puzzleData));
        console.log("puzzle data saved");
    }
}

function loadPuzzle () {
    let puzzleSolution = JSON.parse(localStorage.getItem("puzzleSolution"));
    let puzzleData = JSON.parse(localStorage.getItem("puzzleData"));

    userInputAmount = Number(localStorage.getItem("userInputAmount"));
    emptiedSudokuElements = Number(localStorage.getItem("emptiedSudokuElements"));

    sudokuSolution = puzzleSolution;

    for (i = 0; i < sudokuElements.length; i++) {
        sudokuElements[i].style.backgroundColor = puzzleData[i][0];
        sudokuElements[i].innerHTML = puzzleData[i][1];
    }

    // console.log(puzzleSolution);
    // console.log(puzzleData);
}