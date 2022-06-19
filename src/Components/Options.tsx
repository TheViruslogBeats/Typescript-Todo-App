import "./Options.scss"
import TodosStore from "../Store/Todos-Store";

const Options = () => {
  return (
    <div className="Options__Container">
      <h1>Settings</h1>
      <div>
        <button onClick={() => TodosStore.setOptions("1")}>
          <p>Show All <br /> Todos</p>
        </button>
        <button onClick={() => TodosStore.setOptions("2")}>
          <p>Show Important Todos</p>
        </button>
        <button onClick={() => TodosStore.setOptions("3")}>
          <p>Hide Important Todos</p>
        </button>
        <button onClick={() => TodosStore.deleteCompletedTodos()}>
          <p>Delete Completed Todos</p>
        </button>
        <button onClick={() => TodosStore.sortByCompleted()}>
          <p>Sort Todos by Completed</p>
        </button>
        <button onClick={() => TodosStore.sortByImportant()}>
          <p>Sort Todos by Important</p>
        </button>
      </div>
    </div>
  );
};

export default Options;
