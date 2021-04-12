// EXAMINE DOCUMENT

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.forms[0]);
// document.all[10].textContent = "hello";
// console.log(document.links);
// console.log(document.images);


// GET ELEMENT BY ID
var title = document.getElementById('form');
var header = document.getElementById('main-header');
// title.style.borderBottom = 'solid 3px #000';
header.style.borderBottom = 'solid 3px #000';


// GET ELEMENT BY CLASS NAME
const items = document.getElementsByClassName('item');
console.log(items);
console.log(items[1])

items[1].style.fontWeight = 'Bold';
items[1].style.backgroundColor = 'Green';

