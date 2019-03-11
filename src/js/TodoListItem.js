import View from "./View.js";
import broker from "./broker.js";
import todoItemTemplate from "./todo-item-template.js";

function TodoListItem(todoText) {
  this.id = Date.now(); // ID <---- TimeStamp.
  this.text = todoText;
  this.status = false;
  this.checked = false;
}

TodoListItem.prototype = Object.create(View.prototype);

TodoListItem.prototype.constructor = TodoListItem;

TodoListItem.prototype.render = function () {   //WRONG? - Render also adds event listener.
  var newTodoElement = document.createElement("div");
  newTodoElement.className = "todo-wrapper";
  newTodoElement.innerHTML = Mustache.render(todoItemTemplate, this);

  newTodoElement.onclick = onClickTodoElement.bind(this); //Click Listener - move to sepeate function?
  return newTodoElement;
};

TodoListItem.prototype.setChecked = function (check) {
  var todoElement = document.querySelector(`[todo-id='${this.id}']`);
  todoElement.querySelector(`.check-box`).checked = check;
  this.checked = check;
};

TodoListItem.prototype.setStatus = function (status) {
  var todoElement = document.querySelector(`[todo-id='${this.id}']`);
  status ? todoElement.classList.add("done") : todoElement.classList.remove("done");
  this.status = status;
  // if(status) {
  //     todoElement.classList.add('done');
  // }else {
  //     todoElement.classList.remove('done');
  // }
};

TodoListItem.prototype.delete = function () {
  var deleteItemEvent = new CustomEvent("TodoManager:deleteMapItem", {
    detail: { todoID: this.id }
  });

  broker.dispatchEvent(deleteItemEvent);
  document.querySelector(`[todo-id='${this.id}']`).closest(".todo-wrapper").remove(); //Split into two/three lines??
};

function onClickTodoElement(event) {
  switch (event.target.getAttribute("todo-action")) {
    case "select-item":
      {
        this.setChecked(event.target.checked);
        break;
      }
    case "mark-done":
      {
        this.setStatus(!this.status);
        break;
      }
    case "delete-item":
      {
        this.delete();
        break;
      }
  }
};

export default TodoListItem;

// TodoListItem.prototype.createTodoElement = function () {
//     var templateListItem = document.querySelector('.template'),
//         newTodoElement = templateListItem.cloneNode(true);

//     newTodoElement.classList.remove("template");
//     newTodoElement.setAttribute("todo-id", `${this.id}`);
//     newTodoElement.querySelector(`.todo-text`).textContent = this.text;

//     if (this.status) {
//         newItem.classList.add('done-class');
//     }
//     newTodoElement.querySelector(`[todo-action="select-item"]`).checked = this.checked;
//     newTodoElement.onclick = todoElementOnClick.bind(this);
//     return newTodoElement;
// };

// const render = function (listItem) {
//     var todoElement = document.querySelector(`[todo-id='${listItem.id}']`);
//     todoElement.outerHTML = Mustache.render(todoItemTemplate, listItem);
// };
