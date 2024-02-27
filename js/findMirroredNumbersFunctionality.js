function findMirroredNumbers () {
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
                    debugArrayElement(n2yp+OffsetY,n2xp+OffsetX);
                    debugArrayElement(n3yp+OffsetY,n3xp);
                    debugArrayElement(n4yp,n4xp+OffsetX);
                }
                else {
                    console.log("no mirrored numbers found");
                }
            }
        }
    }

    searchForMirrored(0,0, 1,1, 1,0, 0,1, 8, 8);
}