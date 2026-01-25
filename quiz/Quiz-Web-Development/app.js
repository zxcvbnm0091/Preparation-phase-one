import { TodoItem, TodoList } from "./class.js";

document.addEventListener("DOMContentLoaded", () => {
  const todoContainer = document.getElementById("myUL");
  const todoLists = document.querySelectorAll("li");
  const search = document.getElementById("search");
  const input = document.getElementById("myInput");
  const addBtn = document.querySelector(".addBtn");

  let todos = new TodoList();

  // add list to TodoList object
  todoLists.forEach((list) => {
    const text = list.childNodes[0].nodeValue.trim();
    todos.add(text);
  });

  // render all todo list
  render();

  //click events
  todoContainer.addEventListener("click", handleClick);
  addBtn.addEventListener("click", newElement);
  search.addEventListener("input", render);

  function handleClick(e) {
    let id;
    if (e.target.tagName === "LI") {
      id = e.target.dataset.id;
      todos.get(id).toggleCompleted();
    }
    if (e.target.classList.contains("close")) {
      id = e.target.parentElement.dataset.id;

      todos.delete(id);
    }
    render();
  }

  //add new todo function
  function newElement() {
    let inputVal = input.value;

    if (inputVal === "") {
      alert("You must write something!");
      return;
    }
    todos.add(inputVal);
    input.value = "";
    render();
  }

  function render() {
    todoContainer.innerHTML = "";
    let searchVal = search.value;

    let displayTodo = todos.list.filter((list) =>
      list.text.includes(searchVal),
    );

    //render all item in TodoList to HTML list
    displayTodo.forEach((list) => {
      const li = document.createElement("li");
      li.dataset.id = list.id;
      li.textContent = list.text;

      if (list.isCompleted) {
        li.classList.add("checked");
      }

      li.appendChild(clsBtn());
      todoContainer.appendChild(li);
    });
  }

  function clsBtn() {
    const span = document.createElement("span");
    span.innerHTML = "&times;";
    span.className = "close";
    return span;
  }
});
