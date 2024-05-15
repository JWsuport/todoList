import { useEffect } from "react";
import "./App.css";
import TodoAdd from "./components/TodoAdd";
import TodoTable from "./components/TodoTable";
import TodoStore from "./store/TodoStore";

function App() {
  const { getMember } = TodoStore();

  useEffect(() => {
    getMember();
  }, []);

  return (
    <div className="todoMain">
      <div className="tableMain">
        <TodoTable></TodoTable>
      </div>
      <TodoAdd />
    </div>
  );
}

export default App;
