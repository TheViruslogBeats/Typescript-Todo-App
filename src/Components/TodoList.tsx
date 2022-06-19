import { observer } from "mobx-react-lite";
import "./TodoList.scss"
import TodosStore, { TodoItem } from "../Store/Todos-Store";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  return (
    <div className="TodoList__Container">
      {TodosStore.options.showAll ? (
        <h2>All Todo's</h2>
      ) : TodosStore.options.showImportant ? (
        <h2>Important Todo's</h2>
      ) : (
        <h2>Unimportant Todo's</h2>
      )}
      <div className="Todos__Container">
        {TodosStore.visibleTodos.length > 0 ? (
          <ul>
            {TodosStore.visibleTodos.map((todo: TodoItem) => {
              return <TodoListItem todo={todo} key={todo.id}/>;
            })}
          </ul>
        ) : (
          <div className="Empty__ToDo">
            <p>The to-do list is empty</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default observer(TodoList);
