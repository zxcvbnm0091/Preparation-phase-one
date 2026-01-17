import { TodoItem, TodoList } from "./class.js";

document.addEventListener("DOMContentLoaded", () => {
  let todoContainer = document.getElementById("myUL");
  let todoLists = document.querySelectorAll("li");
  const search = document.getElementById("search");
  let todos = new TodoList();

  // add list to TodoList object
  todoLists.forEach((list) => {
    const text = list.childNodes[0].nodeValue.trim();
    let todo = new TodoItem(text);
    todos.addTodo(todo);

    // create dataset id
    list.dataset.id = todo.id;
  });

  // render all todo list
  render(todos.list);

  //click events
  todoContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      const id = e.target.dataset.id;
      let item = todos.getTodo(id);

      item.toggleCompleted();

      if (item.isCompleted) {
        e.target.classList.add("checked");
      } else if (!item.isCompleted) {
        e.target.classList.remove("checked");
      }
    }
    if (e.target.classList.contains("close")) {
      let list = e.target.parentElement;
      const id = list.dataset.id;

      todos.deleteTodo(id);
      list.remove();
    }
  });

  // add new todo event
  let addBtn = document.querySelector(".addBtn");
  addBtn.addEventListener("click", newElement);

  //add new todo function
  function newElement() {
    let inputVal = document.getElementById("myInput").value;
    let todo = new TodoItem(inputVal);

    todos.addTodo(todo);

    if (inputVal === "") {
      alert("You must write something!");
      return;
    } else {
      let li = document.createElement("li");
      li.dataset.id = todo.id;
      li.textContent = todo.text;
      todoContainer.appendChild(li);
      li.appendChild(clsBtn());
      document.getElementById("myInput").value = "";
    }
  }

  search.addEventListener("input", searchTodo);

  function searchTodo() {
    let searchVal = this.value.toLowerCase();
    const filteredTodos = todos.list.filter((li) =>
      li.text.toLowerCase().includes(searchVal)
    );
    console.log(filteredTodos);

    render(filteredTodos);
  }

  function render(item) {
    todoContainer.innerHTML = "";

    //render all item in TodoList to HTML list
    item.forEach((list) => {
      const li = document.createElement("li");
      li.dataset.id = list.id;
      li.textContent = list.text;

      if (list.isCompleted) {
        list.classList.add("checked");
      }

      li.appendChild(clsBtn());
      todoContainer.appendChild(li);
    });
  }
});
const clsBtn = () => {
  const span = document.createElement("span");
  span.innerHTML = "&times;";
  span.className = "close";
  return span;
};
function addCloseBtn() {
  let nodeList = document.querySelectorAll("li");
  nodeList.forEach((li) => {
    const span = document.createElement("span");
    span.innerHTML = "&times;";
    span.className = "close";
    li.appendChild(span);
  });
}
