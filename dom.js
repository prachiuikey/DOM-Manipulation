var itemList = document.querySelector("#items");
// parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';

// Child
console.log(itemList.children);
console.log(itemList.childNodes);
console.log(itemList.lastChild);
console.log(itemList.lastElementChild);
console.log(itemList.firstChild);
console.log(itemList.firstElementChild);

// Siblings
console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);
console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';


// createElement
var newDiv = document.createElement('div');
newDiv.className = 'hello';
newDiv.id = 'hello1';
// SetAttribute
newDiv.setAttribute('title', 'Hello div');
// create Text node
var newDivText = document.createTextNode('HELLO');
// Add text to div
newDiv.appendChild(newDivText);

// Add HELLO word before Item Lister
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
console.log(newDiv);

container.insertBefore(newDiv, h1);

// Add HEllo word before Item 1 
var item = document.querySelector('.list-group');
const li = document.querySelector('ul li');
item.insertBefore(newDiv,li);
