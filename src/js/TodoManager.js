import TodoListItem from "./TodoListItem.js";
import TodoActionBar from "./TodoActionBar.js";
import broker from "./broker.js"; //broker for Child-Parent intermodule Communication

const todoItemMap = window.todoItemMap = {};

function TodoManager() {
}

TodoManager.prototype.init = function () {  //Move this to constructor? init <==> constructor?
  var todoActionBar = new TodoActionBar();
  todoActionBar.init();
  addCustomEventListeners();
};

function addCustomEventListeners() {
  broker.addEventListener("TodoManager:selectDeselectAll", selectDeselectAll);
  broker.addEventListener("TodoManager:deleteMapItem", deleteMapItem);
  broker.addEventListener("TodoManager:deleteSelected", deleteSelected);
  broker.addEventListener("TodoManager:deleteCompleted", deleteCompleted);
  broker.addEventListener("TodoManager:addItem", addItem);
}

function addItem(event) {
  var newTodoItem = new TodoListItem(event.detail.todoText);
  var newTodoElement = newTodoItem.render();

  todoItemMap[newTodoItem.id] = newTodoItem;
  document.getElementById("list-container").appendChild(newTodoElement);
};

function deleteMapItem(event) {  //Needs a better name
  var todoID = event.detail.todoID;
  delete todoItemMap[todoID];
};

function deleteSelected() {
  for (let todoID in todoItemMap) {
    if (todoItemMap[todoID].checked) {
      todoItemMap[todoID].delete();
    }
  }
};

function deleteCompleted() {
  for (let todoID in todoItemMap) {
    if (todoItemMap[todoID].status) {
      todoItemMap[todoID].delete();
    }
  }
};

function selectDeselectAll() {
  var check = determineCheckUncheckAction(); // better name for check?

  for (let todoID in todoItemMap) {
    todoItemMap[todoID].setChecked(check);
  }
};

function determineCheckUncheckAction() {
  var check = true;
  var firstListItem = todoItemMap[Object.keys(todoItemMap)[0]];
  if (firstListItem && firstListItem.checked) {
    check = false;
  }
  return check;
}

export default TodoManager;


// const render = function () {
//     // Render todoManager ? ( List-Container and TodoAction Bar??)
//     // var bodyElement = document.querySelector(`body`);
//     // bodyElement.innerHTML = Mustache.render(todoItemTemplate, listItem);
// };
