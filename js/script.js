var template = document.querySelector('#list-item').innerHTML;
var newButton = document.getElementById("new-action");
var createNew = document.getElementById("new");


newButton.addEventListener('click', create, false);
//createNew.addEventListener('keypress', create, false);

function create() {
    //if (event.keycode !== 13){
    //  return;
    //}
    //alert(text);
    var text = document.getElementById("new").value;
    var item = document.createElement("div");
    item.innerHTML = template;
    var listText = item.querySelector('.list-item').innerHTML = text;
    var list = document.querySelector('#list');

    list.appendChild(item);
    var text = document.getElementById("new").value = " ";

    var close = document.querySelector(".ex");
    close.addEventListener('click', remove, false);



}
function remove(e){
  //var me = e.target.className;
  //alert(me);
  var actionI = e.target.parentNode.parentNode.parentNode;
  //alert(actionI.tagName);
  var actionUL = e.target.parentNode.parentNode.parentNode.parentNode;
  actionUL.removeChild(actionI);
  /*
*event.target
target.parent
target.parent > parent > parent
parent.class == list-item
 ul.removeChild(list item element)
*
* */

}
