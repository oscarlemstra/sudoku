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
    localStorage.setItem("puzzleSolution", JSON.stringify(sudokuSolution));

    // saves the puzzleData
    for (i = 0; i < sudokuElements.length; i++) {
        puzzleData[i] = new Array(sudokuElements[i].style.backgroundColor, sudokuElements[i].innerHTML);
    }

    localStorage.setItem("puzzleData", JSON.stringify(puzzleData));
}

function loadPuzzle () {
    let puzzleSolution = JSON.parse(localStorage.getItem("puzzleSolution"));
    let puzzleData = JSON.parse(localStorage.getItem("puzzleData"));

    // loads the userInputAmount
    userInputAmount = Number(localStorage.getItem("userInputAmount"));

    // loads the emptiedSudokuElements
    emptiedSudokuElements = Number(localStorage.getItem("emptiedSudokuElements"));

    // loads the puzzleSolution
    sudokuSolution = puzzleSolution;

    // loads the puzzleData
    for (i = 0; i < sudokuElements.length; i++) {
        sudokuElements[i].style.backgroundColor = puzzleData[i][0];
        sudokuElements[i].innerHTML = puzzleData[i][1];
    }
}