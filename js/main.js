/* global data */
/* exported data */
var $photoUrlInsert = document.getElementById('photoUrl');
var $image = document.querySelector('img');
var $formEntire = document.querySelector('.form-entire');

function insertNewPhoto(event) {
  var insertUrl = $photoUrlInsert.value;
  $image.setAttribute('src', insertUrl);
}

$photoUrlInsert.addEventListener('input', insertNewPhoto);

function submitForm(event) {
}

$formEntire.addEventListener('submit', submitForm);
