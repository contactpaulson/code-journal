/* global data */
/* exported data */
var $photoUrlInsert = document.getElementById('photoUrl');
var $image = document.querySelector('img');

function insertNewPhoto(event) {
  var insertUrl = $photoUrlInsert.value;
  $image.setAttribute('src', insertUrl);
}

$photoUrlInsert.addEventListener('input', insertNewPhoto);
