import { makeAutoObservable } from "mobx";
import React from "react";

export type TodoItem = {
  id: number;
  title: string;
  completed: boolean;
  important: boolean;
};

type OptionsOBJ = {
  showAll: boolean;
  showImportant: boolean;
  hideImportant: boolean;
};

class TodosStore {
  startTodos: TodoItem[] = [
    {
      id: 1,
      title: "Buy bread",
      completed: true,
      important: false,
    },
    {
      id: 2,
      title: "Buy Toothpaste",
      completed: false,
      important: true,
    },
    {
      id: 3,
      title: "Buy Oil",
      completed: true,
      important: true,
    },
    {
      id: 4,
      title: "Buy salt",
      completed: false,
      important: false,
    },
  ];
  todos: TodoItem[] = [];
  visibleTodos: TodoItem[] = [];
  inputTodo: string = "";

  options: OptionsOBJ = {
    showAll: true,
    showImportant: false,
    hideImportant: false,
  };

  constructor() {
    makeAutoObservable(this);
  }

  async getTodos() {
    let lclstr: any = localStorage.getItem("todos");

    if (lclstr === null) {
      return this.setTodos(this.startTodos);
    }

    if (JSON.parse(lclstr).length > 0) {
      let todos = JSON.parse(lclstr);
      return this.setTodos(todos);
    }
  }

  setTodos(newTodos: TodoItem[]) {
    this.todos = newTodos;
    this.setVisibleTodos();
    localStorage.setItem("todos", JSON.stringify(newTodos));
  }

  setVisibleTodos() {
    if (this.options.showAll === true) {
      this.visibleTodos = this.todos;
    } else if (this.options.showImportant === true) {
      this.visibleTodos = this.todos.filter((todo) => todo.important === true);
    } else if (this.options.hideImportant === true) {
      this.visibleTodos = this.todos.filter((todo) => todo.important === false);
    }
  }

  setInputTodo(value: string) {
    this.inputTodo = value;
  }

  setOptions(value: string) {
    if (value === "1") {
      this.options = {
        showAll: true,
        showImportant: false,
        hideImportant: false,
      };
    } else if (value === "2") {
      this.options = {
        showAll: false,
        showImportant: true,
        hideImportant: false,
      };
    } else if (value === "3") {
      this.options = {
        showAll: false,
        showImportant: false,
        hideImportant: true,
      };
    }
    this.setVisibleTodos();
  }

  deleteCompletedTodos() {
    this.todos = this.todos.filter((todo) => todo.completed !== true);
    this.setTodos(this.todos);
  }

  deleteTodo(id: number) {
    this.setTodos(this.todos.filter((todo) => todo.id !== id));
  }

  changeImportant(id: number) {
    this.setTodos(
      this.todos.map((todo) =>
        todo.id === id ? { ...todo, important: !todo.important } : todo
      )
    );
  }

  changeCompleted(id: number) {
    this.setTodos(
      this.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  addTodo(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    let now = Date.now();
    console.log(now);
    this.todos.push({
      id: now,
      title: this.inputTodo,
      completed: false,
      important: false,
    });
    this.setTodos(this.todos);
    this.inputTodo = "";
  }

  sortByCompleted() {
    this.todos = this.todos.sort(
      (x, y) => Number(y.completed) - Number(x.completed)
    );
    this.setTodos(this.todos);
  }

  sortByImportant() {
    this.todos = this.todos.sort(
      (x, y) => Number(y.important) - Number(x.important)
    );
    this.setTodos(this.todos);
  }
}

export default new TodosStore();
