//global elements
const create = document.getElementById('btn'); //add notes button
let colorArr = ['#EF9C66', '#FCDC94', '#C8CFA0', '#78ABA8', '#F1E5D1', '#DBB5B5', '#D37676'] //colors that wwill be used randomly
let noteArr = [];

//creation of notes function
const createNotes = () => { 
if (noteArr.length >= 9) {
    alert("Need more room for your thoughts? Press the arrow to add more!");
    return;
}
const stickyNote = document.createElement('textarea'); //creation of actual sticky note element
const deleteBtn = document.createElement('button'); //creation of delete button
deleteBtn.innerHTML = 'x';
deleteBtn.classList.add('remove');
color(stickyNote, deleteBtn); //color randomizer function being called
stickyNote.classList.add('notes'); //adding a existing class to the element...this can also be used to create a nonexistant class...however, it should be declared in css 
stickyNote.setAttribute("placeholder", "...") //setting an attribute called placeholder and adding a value to it
create.insertAdjacentElement('beforebegin',stickyNote);//inserting the stickyNotes to the create button
stickyNote.insertAdjacentElement('afterend',deleteBtn);
deleteBtn.addEventListener("click", () => removeNote(stickyNote, deleteBtn));
noteArr.push(stickyNote);
return [stickyNote, deleteBtn];
}

const color = (stickyNote,deleteBtn) => {
let i;
let valueColor = Math.floor(Math.random() * colorArr.length);

let stickyColor = stickyNote.style.backgroundColor = colorArr[valueColor];
deleteBtn.style.backgroundColor = stickyColor;

}

const removeNote = (stickyNote, deleteBtn) => {
const containerOne = document.getElementById('containerOne');
deleteBtn.remove();
stickyNote.remove();

}
//make a delete button that sticks to the notes
/*to do: make an array and each click, the element created will be pushed inside that array...
later on, the length of the array will be called, then it will be used in an if else statment
if the array.length has created 15 sticky notes, it wont allow it to create, and it will proceed to the next page
*/
//it would also be good if i can save the notes, and it can save the date and time everytime i press create


    
create.addEventListener("click", createNotes);





