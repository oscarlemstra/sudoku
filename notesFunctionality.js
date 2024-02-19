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
        childNote.innerText = i; // if code is done remove this line

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
