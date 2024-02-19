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