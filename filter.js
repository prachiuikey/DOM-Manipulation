var filter = document.getElementById('filter');

// filter event
filter.addEventListener('keyup', filterItems);


// Filter Items
function filterItems(e){
    var text = e.target.value.toLowerCase();
    // get li elements
    var items = document.getElementsByTagName('li');
    var desc = document.getElementsByClassName('span-class desc') ;

    // convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else{
            item.style.display = 'none';
        }
    });
    Array.from(desc).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else{
            item.style.display = 'none';
        }
    });
}