const addToDo = document.getElementById("add-todo");
const inputToDo = document.querySelector("#add-todo input");
const toDoList = document.getElementById("todo-list");
const completedList = document.getElementById("completed-list");

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.classList.add("li-style");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "✅";
    button.classList.add("check-button");
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function paintCompleted(completedTodo) {
    const li = document.createElement("li");
    li.classList.add("com-li-style");
    const span = document.createElement("span");
    span.innerText = completedTodo;
    li.appendChild(span);
    completedList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = inputToDo.value;
    inputToDo.value = "";
    paintToDo(newTodo);
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    const completedTodo = li.firstChild.innerText; 
    paintCompleted(completedTodo);
    li.remove();
}

addToDo.addEventListener("submit", handleToDoSubmit);