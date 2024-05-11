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
    <div>
      <div className="todoMain">
        <TodoTable></TodoTable>
      </div>
      <div>
        <TodoAdd></TodoAdd>
      </div>
    </div>
  );
}

export default App;
