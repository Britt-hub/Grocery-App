// TO DO LIST
// create archive
// data base and local storage
// grocery api
// fix file structure 

//html UL for add item


const input = document.getElementById("one-item");
const archiveList = document.getElementById("all-items");
const itemName = document.getElementById("one-item").value;
const groceryListContainer = document.getElementById("grocery-list");

let groceryList = [];

input.addEventListener("keydown", function (e) {
    if (e.key == "Enter") {
        addItem();
    }
})




function addItem() {
    const item = document.getElementById("one-item").value;
    const h1 = document.createElement("h1");
    const groceryListContainer = document.getElementById("grocery-list");
    const listItemNode = document.createElement("li");

    listItemNode.appendChild(document.createTextNode(item));

    document.getElementById("one-item").value = '';
    // this will append the value that is entered into the input box and placed into a list below after "enter Key" is clicked
    groceryListContainer.appendChild(listItemNode);

    // //crossing out each item when the item is clicked
    // h1.addEventListener("click", function () {
    //     h1.style.textDecoration = "line-through";
    // })
    listItemNode.addEventListener('click', function (evt) {
        evt.target.classList.add('removed');
    });

    // let div = document.getElementById("grocery-list");
    // div.insertAdjacentElement("beforeend", h1);

    groceryList.push(item);


}

function trashList() {
    let list = document.getElementById("all-items");
    let i = 0;

    while (i < list.childNodes.length) {
        list.removeChild(list.childNodes[i]);
    }

    localStorage.removeItem('grocery-list');
    // this resets the grocery list array
    groceryList = [];


}
// figure out how to archive user's list by saving it via local storage. This will be helpful when internet is slow or down.
function saveList() {

    // save localStorage
    const stringifiedGroceryList = JSON.stringify(groceryList);


    // saving list to local storage
    localStorage.setItem('grocery-list', stringifiedGroceryList);

}

const saved = localStorage.getItem('grocery-list');

if (saved) {
    itemName.innerHTML = saved;
}
