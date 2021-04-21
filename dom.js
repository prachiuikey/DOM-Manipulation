
// QUERYSELECTOR
var items = document.querySelector('.list-group-item');
console.log(items);
items.nextElementSibling.style.backgroundColor = 'green';
var firstItems = document.querySelector('.list-group-item:nth-child(1)');
firstItems.style.color = 'blue';
var LastItems = document.querySelector('.list-group-item:nth-child(3)');
LastItems.style.visibility = 'hidden';

// QUERYSELECTORALL
var items = document.querySelectorAll('li');
console.log(items);
items[1].style.backgroundColor = 'green';

var odd = document.querySelectorAll('li:nth-child(odd)');

for(let i=0; i<odd.length; i++){
    odd[i].style.backgroundColor = 'green';
}