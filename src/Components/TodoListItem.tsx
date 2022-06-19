import { observer } from "mobx-react-lite";

import * as Hi from "react-icons/hi";
import TodosStore, { TodoItem } from "../Store/Todos-Store";

type Props = {
  todo: TodoItem;
};

const TodoListItem = (props: Props) => {
  return (
    <li key={props.todo.id}>
      <div>
        <button
          onClick={() => {
            console.log("kle");
            
            TodosStore.changeCompleted(props.todo.id);
          }}
        >
          {props.todo.completed ? (
            <Hi.HiCheckCircle />
          ) : (
            <Hi.HiOutlineCheckCircle />
          )}
        </button>

        <p
          style={
            props.todo.completed
              ? { textDecoration: "line-through" }
              : undefined
          }
        >
          {props.todo.title}
        </p>
      </div>
      <div>
        <button
          onClick={() => {
            TodosStore.changeImportant(props.todo.id);
          }}
        >
          {props.todo.important ? <Hi.HiBookmark /> : <Hi.HiOutlineBookmark />}
        </button>
        <button onClick={() => TodosStore.deleteTodo(props.todo.id)}>
          <Hi.HiX />
        </button>
      </div>
    </li>
  );
};

export default observer(TodoListItem);
