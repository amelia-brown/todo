var template = document.querySelector('#list-item').innerHTML;
var newButton = document.getElementById("new-action");



newButton.addEventListener('click', create, false)

function create() {
    //alert(text);
    var text = document.getElementById("new").value;
    var item = document.createElement("div");
    item.innerHTML = template;
    var listText = item.querySelector('.list-item').innerHTML = text;
    var list = document.querySelector('#list');

    list.appendChild(item);
    var text = document.getElementById("new").value = " ";
}
