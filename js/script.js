'use strict';

function putText(){
  var text = document.getElementById("new").value;

  if (text.length < 1){
    return
    //alert("please enter an item");
  }else{
    
    //alert(text);
  }
}


var newButton = document.getElementById("new-action");

newButton.addEventListener('click', putText, false)

function newListItem() {
  var listItem = document.createElement("LI");
  listItem.className = "list-item";
  var actionItems = document.createElement("DIV");
  actionItems.className = "action-items";
  var check = document.createElement("span");
  check.className = "action check";
  var ex = document.createElement("span");
  ex.className = "action ex";
  var checkIcon = document.createElement("I");
  checkIcon.className = "fa fa-check";
  var exIcon = document.createElement("I");
  exIcon,setAttribute(class, "fa fa-times");



  var list = document.getElementById("list");

  list.appendChild(listItem);
  list.appendChild(actionItems);
  actionItems.appendChild(check);
  check.appendChild(checkIcon);
  actionItems.appendChild(ex);
  ex.appendChild(exIcon);

}
