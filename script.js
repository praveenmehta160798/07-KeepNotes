let saveNote = () => {
    let notes = document.querySelectorAll('.notes textarea');
    let data = []; //blank array for data save in an array


    notes.forEach((note, index) => {
        data.push(note.value);
    });

    // console.log(data);

    localStorage.setItem('notes', JSON.stringify(data));


}

let createNote = (text = '') => {
    let newNote = document.createElement('div'); //creating a new div
    newNote.classList.add('note'); //add class to new div
    newNote.insertAdjacentHTML('afterbegin', `
    <div class="head">
        <div class="note-name"></div>
        <div class="icon-box save">save
            <i class="fa-solid fa-pen-to-square"></i>
        </div>
        <div class="icon-box delete">
            <i class="fa-solid fa-trash"></i>
        </div>
    </div>
    <textarea name="" id="">${text}</textarea>`);
        
    let notes = document.querySelector('.notes');
    // notes.appendChild(newNote); //append newNote to notes
    notes.insertAdjacentElement('afterbegin', newNote);

    newNote.querySelector('.delete').addEventListener('click', () => {
       newNote.remove(); 
       saveNote();
    }); //delete btn

    newNote.querySelector('textarea').addEventListener('input', saveNote);

    newNote.querySelector('.save').addEventListener('click', saveNote);


    console.log(newNote);
}



let addBtn = document.querySelector('.add-btn');
addBtn.addEventListener('click', function(){
    createNote();
    saveNote();
});



{/* <div class="note">
        <div class="head">
            <div class="note-name"></div>
            <div class="icon-box edit">
                <i class="fa-solid fa-pen-to-square"></i>
            </div>
            <div class="icon-box delete">
                <i class="fa-solid fa-trash"></i>
            </div>
        </div>
        <textarea name="" id=""></textarea>
</div> */}

(
    function() {
        let lsnotes = JSON.parse( localStorage.getItem('notes'));
        console.log(lsnotes);

        lsnotes.forEach((lsnote) => {
            createNote(lsnote);
        });
        if(lsnotes.length === 0){
            createNote();
        }
    }
)()