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
