export class TodoItem {
  constructor(text) {
    this.text = text;
    this.id = crypto.randomUUID();
    this.createdAt = new Date();
    this.isCompleted = false;
  }

  get formattedDate() {
    return new Intl.DateTimeFormat("en-GB", {
      dateStyle: "short",
    }).format(this.createdAt);
  }

  toggleCompleted() {
    this.isCompleted = !this.isCompleted;
  }
}

export class TodoList {
  constructor() {
    this._list = [];
  }
  get list() {
    return [...this._list]; //return copy of list
  }
  add(text) {
    this._list.push(new TodoItem(text));
  }
  get(idx) {
    return this._list.find((list) => list.id === idx);
  }
  delete(idx) {
    let newList = this._list.filter((todos) => todos.id !== idx);
    this._list = newList;
  }
}
