
const addButton = document.getElementById('addButton');
const itemList = document.getElementById('ItemList')

function addNewItem() {
    const newItem = document.createElement('li');
    newItem.textContent = 'New Item';
    itemList.appendChild(newItem)
    addButton.addEventListener('onclick', addNewItem)
}



