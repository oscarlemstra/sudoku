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