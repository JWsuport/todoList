import { useEffect } from "react";
import "./App.css";
import TodoAdd from "./components/TodoAdd";
import TodoTable from "./components/TodoTable";
import TodoStore from "./store/TodoStore";
import { Item } from "./models/type";

function App() {
  // const [todoList, setTodoList] = useState<Item[]>([]);
  // const [inputItem, setInputItem] = useState("");

  const { todoList, setTodoList, inputItem, setInputItem } = TodoStore();

  const getMember = async () => {
    const response = await fetch("http://localhost:3001/todoList", {
      method: "GET",
    });
    const jsonData = await response.json();
    setTodoList(jsonData);
  };

  const createMember = async () => {
    if (inputItem.trim() !== "") {
      await fetch("http://localhost:3001/todoList", {
        method: "POST",
        body: JSON.stringify({
          key: new Date().toISOString(),
          title: inputItem,
          isChecked: false,
        }),
      });
      getMember();
      setInputItem("");
    } else {
      alert("할일을 입력해주세요");
    }
  };

  const deleteMemeber = async (id: string) => {
    await fetch("http://localhost:3001/todoList/" + id, {
      method: "DELETE",
    });
    getMember();
  };

  const updateMemeber = async (todo: Item) => {
    await fetch("http://localhost:3001/todoList/" + todo.id, {
      method: "PATCH",
      body: JSON.stringify({
        isChecked: !todo.isChecked,
      }),
    });
    getMember();
  };

  useEffect(() => {
    getMember();
  }, []);

  return (
    <div>
      <div className="todoMain">
        <TodoTable
          todoList={todoList}
          updateMemeber={updateMemeber}
          deleteMemeber={deleteMemeber}
        ></TodoTable>
      </div>
      <div>
        <TodoAdd
          inputItem={inputItem}
          setInputItem={setInputItem}
          createMember={createMember}
        ></TodoAdd>
      </div>
    </div>
  );
}

export default App;
