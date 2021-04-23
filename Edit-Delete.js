var addDetails = document.getElementById('addForm');
var itemList = document.getElementById('items');
var editDetails = document.get

// submit event
addDetails.addEventListener('submit', addItem);

// Delete event
itemList.addEventListener('click', removeItem);

//Add item
function addItem(e){
    e.preventDefault();
    var newItem = document.getElementById('item').value;
    var newDes = document.getElementById('description').value;
    
    var li = document.createElement('li');
    var sp = document.createElement('span');
    li.className = 'list-group-item';
    sp.className = 'span-class';
    li.appendChild(document.createTextNode(newItem));
    sp.appendChild(document.createTextNode(newDes));

    // create delete/edit button
    var del = document.createElement('button');
    var edit = document.createElement('button');

    // Add classes to del/edit button
    del.className = 'btn btn-danger btn-sm float-right delete';
    del.style = 'color: red';
    edit.className = 'edit-btn';

    // append text node
    del.appendChild(document.createTextNode('X'));
    edit.appendChild(document.createTextNode('Edit'));

    //append li to list
    li.appendChild(edit);
    li.appendChild(del);
    

    itemList.appendChild(li);
    li.appendChild(sp);
}

// Remove Item
function removeItem(e){
    e.preventDefault();
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
