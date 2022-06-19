import { observer } from "mobx-react-lite";
import React from "react";
import TodosStore from "../Store/Todos-Store";
import "./AddTodo.scss"

const AddTodo = () => {
  return (
    <div className="Add__Container">
      <h2>Add To Do: </h2>
      <form
        onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
          TodosStore.addTodo(event)
        }
      >
        <input
          type="text"
          value={TodosStore.inputTodo}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            TodosStore.setInputTodo(event.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default observer(AddTodo);
