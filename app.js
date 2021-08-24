
// if user add to notes , add it to the local storage;
let addBtn = document.getElementById("addbtn");
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addtxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addText = "";
    console.log(notesObj);
    showNotes();
});


function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (Element, index) {
        html += `
         <div class="card" style="width: 18rem;">
         <div class="card-body">
         <h5 class="card-title">notes ${index + 1}</h5>
         <p class="card-text">${Element}</p>
         <button  class="btn btn-primary" style="border-radius: 40px;" id="${index}" onclick="deleteNote(this.id)">Delete Notes</button>
         </div>
         </div>

         `
    });

    let noteElm = document.getElementById("notes");
    if (notesObj != 0) {
        noteElm.innerHTML = html;
    } else {
        noteElm.innerHTML = `Nothing to show ! Use "Add a note" section above to add note`
    }
}


//function for delete..

function deleteNote (index){
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index , 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}



