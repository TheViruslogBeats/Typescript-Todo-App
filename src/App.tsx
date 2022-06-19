import { useEffect } from "react";
import "./App.scss";
import TodosStore from "./Store/Todos-Store";
import { observer } from "mobx-react-lite";
import Options from "./Components/Options";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";

function App() {
  useEffect(() => {
    TodosStore.getTodos();
  }, []);
  return (
    <>
      <div className="App__Container">
        <h1 id="AppName">Todo App</h1>
        <div className="Todo__Container">
          <Options />
          <div className="Todo__Wrapper">
            <AddTodo />
            <TodoList />
          </div>
        </div>
      </div>
    </>
  );
}

export default observer(App);
