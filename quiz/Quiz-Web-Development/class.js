export class TodoItem {
  isCompleted = false;

  constructor(text) {
    this.text = text;
    this.id = crypto.randomUUID();
    this.createdAt = new Date();
  }

  get getFormattedDate() {
    return new Intl.DateTimeFormat("en-GB", {
      dateStyle: "short",
    }).format(this.createdAt);
  }

  toggleCompleted() {
    this.isCompleted = !this.isCompleted;
  }
  matchesSearch(textInput) {
    return this.text.includes(textInput);
  }
}

export class TodoList {
  constructor() {
    this._list = [];
  }
  get list() {
    return this._list;
  }
  addTodo(todoItem) {
    this._list.push(todoItem);
  }
  getTodo(idx) {
    return this._list.find((list) => list.id === idx);
  }
  deleteTodo(idx) {
    let newList = this._list.filter((todos) => todos.id !== idx);
    this._list = newList;
  }
}
