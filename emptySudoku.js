// empty sudoku
// 64 is max
for (y = 0; y < 9; y++) {
    for (x = 0; x < 9; x++) {
        if (randomInt(101, 0) > 35) {
            sudokuElementsArray[y][x].innerText = "";
        }
    }
}
