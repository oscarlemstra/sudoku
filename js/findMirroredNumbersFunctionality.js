let sudokuElementsToEmpty = document.getElementById("sudoku-puzzle").getElementsByTagName("td");
let array_sudokuElementsToEmpty = Array.from(sudokuElementsToEmpty);

function findMirroredNumbers () {
    let mirroredNumbersToLockPos = [];
    let debug_mirroredNumbersFound = 0;

    function getArrayElement (firstIndex, secondIndex) {
        return Number(sudokuElementsArray[firstIndex][secondIndex].innerText);
    }

    function debugArrayElement (firstIndex, secondIndex) {
        sudokuElementsArray[firstIndex][secondIndex].style.color = "white";
    }

    // parameter info
    // n = number
    // p = position
    // y and x stand for the axis of the array
    function searchForMirrored (n1yp,n1xp, n2yp,n2xp, n3yp,n3xp, n4yp,n4xp, searchLengthY, searchLengthX) {
        for (OffsetY = 0; OffsetY < searchLengthY; OffsetY++) {
            for (OffsetX = 0; OffsetX < searchLengthX; OffsetX++) {
                if (getArrayElement(n1yp,n1xp) === getArrayElement(n2yp+OffsetY,n2xp+OffsetX) && getArrayElement(n3yp+OffsetY,n3xp) === getArrayElement(n4yp,n4xp+OffsetX)) {
                    debugArrayElement(n1yp,n1xp);
                    // debugArrayElement(n2yp+OffsetY,n2xp+OffsetX);
                    // debugArrayElement(n3yp+OffsetY,n3xp);
                    // debugArrayElement(n4yp,n4xp+OffsetX);

                    mirroredNumbersToLockPos.push(new Array(n1yp, n1xp));

                    OffsetY = 10;
                    OffsetX = 10;
                    
                    debug_mirroredNumbersFound++;
                    console.log("group mirroredNumbersFound");
                }
            }
        }
    }

    // Block 1 - Row 1
    searchForMirrored(0,0, 1,1, 1,0, 0,1, 8, 8);
    searchForMirrored(0,1, 1,2, 1,1, 0,2, 7, 7);
    searchForMirrored(0,2, 1,3, 1,2, 0,3, 6, 6);

    // Block 2 - Row 1
    searchForMirrored(0,3, 1,4, 1,3, 0,4, 8, 5);
    searchForMirrored(0,4, 1,5, 1,4, 0,5, 8, 4);
    searchForMirrored(0,5, 1,6, 1,5, 0,6, 8, 3);
    

    // Block 1 - Row 2
    searchForMirrored(1,0, 2,1, 2,0, 1,1, 7, 8);
    searchForMirrored(1,1, 2,2, 2,1, 1,2, 7, 7);
    searchForMirrored(1,2, 2,3, 2,2, 1,3, 7, 6);

    // Block 2 - Row 2
    searchForMirrored(1,3, 2,4, 2,3, 1,4, 7, 5);
    searchForMirrored(1,4, 2,5, 2,4, 1,5, 7, 4);
    searchForMirrored(1,5, 2,6, 2,5, 1,6, 7, 3);


    // Block 1 - Row 3
    searchForMirrored(2,0, 3,1, 3,0, 2,1, 6, 8);
    searchForMirrored(2,1, 3,2, 3,1, 2,2, 6, 7);
    searchForMirrored(2,2, 3,3, 3,2, 2,3, 6, 6);

    // Block 2 - Row 3
    searchForMirrored(2,3, 3,4, 3,3, 2,4, 6, 5);
    searchForMirrored(2,4, 3,5, 3,4, 2,5, 6, 4);
    searchForMirrored(2,5, 3,6, 3,5, 2,6, 6, 3);


    // Block 4 - Row 1
    searchForMirrored(3,0, 4,1, 4,0, 3,1, 5, 8);
    searchForMirrored(3,1, 4,2, 4,1, 3,2, 5, 7);
    searchForMirrored(3,2, 4,3, 4,2, 3,3, 5, 6);

    // Block 5 - Row 1
    searchForMirrored(3,3, 4,4, 4,3, 3,4, 5, 5);
    searchForMirrored(3,4, 4,5, 4,4, 3,5, 5, 4);
    searchForMirrored(3,5, 4,6, 4,5, 3,6, 5, 3);


    // Block 4 - Row 2
    searchForMirrored(4,0, 5,1, 5,0, 4,1, 4, 8);
    searchForMirrored(4,1, 5,2, 5,1, 4,2, 4, 7);
    searchForMirrored(4,2, 5,3, 5,2, 4,3, 4, 6);
    
    // Block 5 - Row 2
    searchForMirrored(4,3, 5,4, 5,3, 4,4, 4, 5);
    searchForMirrored(4,4, 5,5, 5,4, 4,5, 4, 4);
    searchForMirrored(4,5, 5,6, 5,5, 4,6, 4, 3);
    

    // Block 4 - Row 3
    searchForMirrored(5,0, 6,1, 6,0, 5,1, 3, 8);
    searchForMirrored(5,1, 6,2, 6,1, 5,2, 3, 7);
    searchForMirrored(5,2, 6,3, 6,2, 5,3, 3, 6);
    
    // Block 5 - Row 3
    searchForMirrored(5,3, 6,4, 6,3, 5,4, 3, 5);
    searchForMirrored(5,4, 6,5, 6,4, 5,5, 3, 4);
    searchForMirrored(5,5, 6,6, 6,5, 5,6, 3, 3);
    
    
    console.log(mirroredNumbersToLockPos);
    
    for (i = mirroredNumbersToLockPos.length - 1; i >= 0; i--) {
        array_sudokuElementsToEmpty.splice(9 * mirroredNumbersToLockPos[i][0] + mirroredNumbersToLockPos[i][1], 1);
        // console.log(9 * mirroredNumbersToLockPos[i][0] + mirroredNumbersToLockPos[i][1]);
    }

    // console.log(array_sudokuElementsToEmpty);
    console.log(debug_mirroredNumbersFound, "total mirroredNumbersFound");
}