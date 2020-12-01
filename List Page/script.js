// TO DO LIST
// create archive
// data base or local storage
// grocery api
// fix file structure 


const input = document.getElementById("one-item");

input.addEventListener("keydown", function(e) {
    if (e.key == "Enter") {
        addItem();
    }
})

function addItem() {
    const item =" - " + document.getElementById("one-item").value;
    const h1 = document.createElement("h1");

    document.getElementById("one-item").value = '';
    // this will append the food that is entered into the input box and placed into a list below after "enter Key" is clicked
    h1.appendChild(document.createTextNode(item));


    //crossing out each item when the item is clicked
    h1.addEventListener("click", function () {
        h1.style.textDecoration = "line-through";
    })

    var div = document.getElementById("all-items");
    div.insertAdjacentElement("beforeend", h1);

}

function trashList() {
    var list = document.getElementById("all-items");
    var i = 0;

    while (i < list.childNodes.length) {
        list.removeChild(list.childNodes[i]);
    }
}
// figure out how to archive user's list by saving it via local storage. This will be helpful when internet is slow or down. 
function archiveList() {
    var list = document.getElementById("all-items");

}