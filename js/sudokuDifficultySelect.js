let level_1 = document.getElementById("level-1");
let level_2 = document.getElementById("level-2");
let level_3 = document.getElementById("level-3");
let level_4 = document.getElementById("level-4");
let level_5 = document.getElementById("level-5");
let load_puzzle_button = document.getElementById("load-puzzle-button");


// sudoku difficulty curf values
// sudokuElementsToRemoveAmount:     24, 34, 44, 54, 64
// sudokuElementsRemovePercentage:   80, 70, 60, 50, 40

level_1.addEventListener("click", function () {
    window.location.href = "./puzzle.html";
    sessionStorage.setItem("sudokuElementsToRemoveAmount", "24");
    sessionStorage.setItem("sudokuElementsRemovePercentage", "80");
});

level_2.addEventListener("click", function () {
    window.location.href = "./puzzle.html";
    sessionStorage.setItem("sudokuElementsToRemoveAmount", "34");
    sessionStorage.setItem("sudokuElementsRemovePercentage", "70");
});

level_3.addEventListener("click", function () {
    window.location.href = "./puzzle.html";
    sessionStorage.setItem("sudokuElementsToRemoveAmount", "44");
    sessionStorage.setItem("sudokuElementsRemovePercentage", "60");
});

level_4.addEventListener("click", function () {
    window.location.href = "./puzzle.html";
    sessionStorage.setItem("sudokuElementsToRemoveAmount", "54");
    sessionStorage.setItem("sudokuElementsRemovePercentage", "50");
});

level_5.addEventListener("click", function () {
    window.location.href = "./puzzle.html";
    sessionStorage.setItem("sudokuElementsToRemoveAmount", "64");
    sessionStorage.setItem("sudokuElementsRemovePercentage", "40");
});


sessionStorage.setItem("canLoadPuzzle", "false");

load_puzzle_button.addEventListener("click", function () {
    if (sessionStorage.getItem("puzzleData") !== null) {
        sessionStorage.setItem("canLoadPuzzle", "true");
        window.location.href = "./puzzle.html";
    }
    else {
        load_puzzle_button.innerText = "Geen Opgeslagen Puzzel Gevonden";
    }
});