/* global data */
/* exported data */
var $photoUrlInsert = document.querySelector('#photoUrl');
var $image = document.querySelector('img');
var $formEntire = document.querySelector('.form-entire');
var $titleInsert = document.querySelector('#title');
var $notesInsert = document.querySelector('#notes');

function insertNewPhoto(event) {
  var insertUrl = $photoUrlInsert.value;
  $image.setAttribute('src', insertUrl);
}

$photoUrlInsert.addEventListener('input', insertNewPhoto);

function submitForm(event) {
  event.preventDefault();
  var formValue = {
    title: $titleInsert.value,
    image: $photoUrlInsert.value,
    notes: $notesInsert.value,
    id: data.nextEntryId
  };
  data.nextEntryId++;
  data.entries.unshift(formValue);
  $image.setAttribute('src', 'images/placeholder-image-square.jpg');
  $formEntire.reset();
}

$formEntire.addEventListener('submit', submitForm);
// does setAttribute() add to or completely replace the other class values? So does it set a new value which will get rid of all styling done to that class?
function insertEntry(entry) {
  var $newEntry = document.createElement('li');
  $newEntry.setAttribute('class', 'row');

  var $newColumnEntry = document.createElement('div');
  $newColumnEntry.setAttribute('class', 'column-half');
  $newEntry.appendChild($newColumnEntry);

  var $newImageEntry = document.createElement('img');
  // or is the new value going for the src attribute going to be 'data.entries.image'?
  $newImageEntry.setAttribute('src', entry.image);
  $newImageEntry.setAttribute('class', 'picture border-style');
  $newColumnEntry.appendChild($newImageEntry);

  var $columnEntryText = document.createElement('div');
  $columnEntryText.setAttribute('class', 'column-half');
  $newEntry.appendChild($columnEntryText);

  var $titleForEntries = document.createElement('h3');
  var $titleText = document.createTextNode(entry.title);
  $titleForEntries.setAttribute('class', 'title-entries');
  $titleForEntries.appendChild($titleText);
  $columnEntryText.appendChild($titleForEntries);

  var $notesForEntries = document.createElement('p');
  var $notesText = document.createTextNode(entry.notes);
  $notesForEntries.setAttribute('class', 'notes-entries');
  $notesForEntries.appendChild($notesText);
  $columnEntryText.appendChild($notesForEntries);

  return $newEntry;
}

var $entriesPosition = document.querySelector('ul');
// not really sure what to put in as the parameter for the callback function
function addNewEntry(entry) {
  for (var i = 0; i < data.entries.length; i++) {
    var insertingNewEntry = insertEntry(data.entries[i]);
    $entriesPosition.appendChild(insertingNewEntry);
  }
}
// what is the event target here for this addeventlistener?
window.addEventListener('DOMContentLoaded', addNewEntry);

// how would we even check for this during the entire process?
