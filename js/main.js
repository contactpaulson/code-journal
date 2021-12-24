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

function insertEntry(entry) {
  var $newEntry = document.createElement('li');
  $newEntry.setAttribute('class', 'row');

  var $newColumnEntry = document.createElement('div');
  $newColumnEntry.setAttribute('class', 'column-half');
  $newEntry.appendChild($newColumnEntry);

  var $newImageEntry = document.createElement('img');
  // or is the new value going for the src attribute going to be 'data.entries.image'
  $newImageEntry.setAttribute('src', 'entry.image');
  $newColumnEntry.appendChild($newImageEntry);

  var $columnEntryText = document.createElement('div');
  $columnEntryText.setAttribute('class', 'column-half');
  $newEntry.appendChild($columnEntryText);

  var $titleForEntries = document.createElement('h3');
  var $titleText = document.createTextNode(entry.title);
  $titleForEntries.appendChild($titleText);
  $columnEntryText.appendChild($titleForEntries);

  var $notesForEntries = document.createElement('p');
  var $notesText = document.createTextNode(entry.notes);
  $notesForEntries.appendChild($notesText);
  $columnEntryText.appendChild($notesText);

  return $newEntry;
}
