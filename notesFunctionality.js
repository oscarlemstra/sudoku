let canMakeNotes = false;
let notesButton = document.getElementById("notes-button");

notesButton.addEventListener("click", function () {
    canMakeNotes = !canMakeNotes;
    
    if (canMakeNotes) {
        notesButton.style.color = "white";
        notesButton.style.backgroundColor = "steelblue";
    }
    else {
        notesButton.style.color = "";
        notesButton.style.backgroundColor = "";
    }
});

function addNotesElement (element) {
    let parentDivForNotes = document.createElement("div");
    parentDivForNotes.classList.add("flex-box");
    parentDivForNotes.classList.add("flex-wrap");
    parentDivForNotes.classList.add("justify-content-center");
    
    for (i = 0; i < 9; i++) {
        let childNote = document.createElement("div");
        childNote.classList.add("note");

        parentDivForNotes.appendChild(childNote);
    }

    element.appendChild(parentDivForNotes);
    element.style.backgroundColor = "peachpuff";
}

function removeNotesElement (element) {
    element.firstChild.remove();
    element.style.backgroundColor = "";
}

function doesNotesElementExist (element) {
    if (element.firstChild) {
        return true;
    }
    else {
        return false;
    }
}

function setNote (element) {
    let notes = element.firstChild.children;

    function switchNoteValue (note, stringNumber) {
        if (note.innerText === "") {
            note.innerText = stringNumber;
        }
        else {
            note.innerText = "";
        }
    }

    switch (selectedNumber) {
        case "1":
            switchNoteValue(notes[0], "1");
            break;
        case "2":
            switchNoteValue(notes[1], "2");
            break;
        case "3":
            switchNoteValue(notes[2], "3");
            break;
        case "4":
            switchNoteValue(notes[3], "4");
            break;
        case "5":
            switchNoteValue(notes[4], "5");
            break;
        case "6":
            switchNoteValue(notes[5], "6");
            break;
        case "7":
            switchNoteValue(notes[6], "7");
            break;
        case "8":
            switchNoteValue(notes[7], "8");
            break;
        case "9":
            switchNoteValue(notes[8], "9");
            break;
    }
}
