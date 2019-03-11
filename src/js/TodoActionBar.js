import View from "./View.js";
import broker from "./broker.js";

const ENTER_KEY = 13;

function TodoActionBar() { }

TodoActionBar.prototype = Object.create(View.prototype);

TodoActionBar.prototype.constructor = TodoActionBar;

TodoActionBar.prototype.init = function () {  //Move this to constructor? init <==> constructor?
  addEventListeners();
};

function addEventListeners() {
  document.getElementById("btn-add").onclick = onClickAddItem; //onAddItemClick? //handleAddItemClick?
  document.getElementById("btn-select-all").onclick = onClickSelectDeselectAll;
  document.getElementById("btn-delete-selected").onclick = onClickDeleteSelected;
  document.getElementById("btn-delete-completed").onclick = onClickDeleteCompleted;
  document.getElementById("text-box").onkeypress = function (event) {
    if (event.keyCode === ENTER_KEY) {
      onClickAddItem();
    }
  };
}

function onClickAddItem() {
  var todoText = document.getElementById("text-box").value;
  document.getElementById("text-box").value = "";

  if (todoText) {
    let addItemEvent = new CustomEvent("TodoManager:addItem", {
      detail: { todoText: todoText }
    });
    broker.dispatchEvent(addItemEvent);
  }
};

function onClickSelectDeselectAll() {
  broker.dispatchEvent(new CustomEvent("TodoManager:selectDeselectAll"));
};

function onClickDeleteSelected() {
  var deleteSelectedEvent = new CustomEvent("TodoManager:deleteSelected");
  broker.dispatchEvent(deleteSelectedEvent);
};

function onClickDeleteCompleted() {
  var deleteCompletedEvent = new CustomEvent("TodoManager:deleteCompleted");
  broker.dispatchEvent(deleteCompletedEvent);
};

export default TodoActionBar;
