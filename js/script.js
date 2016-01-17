var template = document.querySelector('#list-item').innerHTML;
var newButton = document.getElementById("new-action");
var createNew = document.getElementById("new");
var actionUL = document.getElementById("list");


newButton.addEventListener('click', create, false);
createNew.addEventListener('keypress', create, false);

function create(event) {
    if (event.keyCode !== 13){
      return;
    }
    //alert(text);
    var text = document.getElementById("new").value;
    var item = document.createElement("li");
    item.innerHTML = template;
    var listText = item.querySelector('.list-item').innerHTML = text;
    actionUL.insertBefore(item, actionUL.firstChild);
    var text = document.getElementById("new").value = " ";
    var close = item.querySelector(".ex");
    close.addEventListener('click', remove, false);
    var checkmark = item.querySelector(".check");
    checkmark.addEventListener('click', check, false);
}
function remove(e){
  //var me = e.target.className;
  //alert(me);
  var target;
  if(e.target.classList.contains("fa")){
    target = e.target.parentNode.parentNode.parentNode;
  }else{
    target = e.target.parentNode.parentNode;
  }//alert(actionI.tagName);
  actionUL.removeChild(target);
}

function check(e){
  var target;
  if(e.target.classList.contains("fa")){
    target = e.target.parentNode.parentNode.previousElementSibling;
  }else{
    target = e.target.parentNode.previousElementSibling;
  }
  debugger;
  target.classList.add("strikethrough");
}
