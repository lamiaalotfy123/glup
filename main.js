function Add() {
    var add = document.getElementById("testvalid").value;
    var todoDiv = document.createElement("div");
    //2
    todoDiv.draggable = true
    todoDiv.id = add
    todoDiv.setAttribute('ondragstart', 'dragStart(event)')
    todoDiv.style.border = "2px solid", todoDiv.style.marginTop = "8px"
    todoDiv.textContent = add;
    // var div = document.getElementById("div1");
    document.getElementById("div1").appendChild(todoDiv)
}
let id;
//3 large
function allowDrop(event) {
    event.preventDefault();
}
//1
function dragStart(event) {
    id = event.target.id;
}
//4 mini
function allowDrag(event) {
    event.target.appendChild(document.getElementById(id));
}