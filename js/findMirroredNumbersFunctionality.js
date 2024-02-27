function findMirroredNumbers () {
    function getArrayElement (firstIndex, secondIndex) {
        return Number(sudokuElementsArray[firstIndex][secondIndex].innerText);
    }

    function debugArrayElement (firstIndex, secondIndex) {
        sudokuElementsArray[firstIndex][secondIndex].style.color = "orange";
    }

    // parameter info
    // n = number
    // p = position
    // y and x stand for the axis of the array
    function searchForMirrored (n1yp,n1xp, n2yp,n2xp, n3yp,n3xp, n4yp,n4xp, searchLength) {
        for (mainOffset = 0; mainOffset < 3; mainOffset++) {
            for (secondOffset = 0; secondOffset < searchLength; secondOffset++) {
                if (getArrayElement(n1yp,n1xp+mainOffset) === getArrayElement(n2yp,n2xp+secondOffset) && getArrayElement(n3yp,n3xp+mainOffset) === getArrayElement(n4yp,n4xp+secondOffset)) {
                    debugArrayElement(n1yp,n1xp+mainOffset);
                    debugArrayElement(n2yp,n2xp+secondOffset);
                    debugArrayElement(n3yp,n3xp+mainOffset);
                    debugArrayElement(n4yp,n4xp+secondOffset);
                }
                else {
                    console.log("no mirrored numbers found");
                }
            }
        }
    }

    searchForMirrored(0,0, 1,3, 1,0, 0,3, 6);
}