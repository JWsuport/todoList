import { useState } from "react";
import "./App.css";
import TodoRow from "./components/TodoRow";

function App() {
  const [todoList, setTodoList] = useState(["오전운동"]);
  const [inputItem, setInputItem] = useState("");

  const handleTodoList = () => {
    if (inputItem.trim() !== "") {
      setTodoList((prevList) => [...prevList, inputItem]);
      setInputItem(""); // 입력 필드 초기화
    }
  };

  const handleCheckboxChange = (index) => {
    // 체크박스가 토글될 때마다 해당 인덱스의 todoList 아이템의 체크 상태를 변경
    setTodoList((prevList) =>
      prevList.map((item, i) =>
        i === index ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  const handleDeleteChange = (index) => {
    setTodoList((prevList) => {
      return prevList.filter((_, i) => i !== index);
    });
  };

  return (
    <div>
      <div className="todoMain">
        <table>
          <thead>
            <tr>
              <th className="todoKind">구분</th>
              <th className="checkYn">완료</th>
            </tr>
          </thead>
          <tbody style={{ border: "3px solid white" }}>
            {todoList.map((todo, i) => (
              <TodoRow
                key={i}
                item={todo}
                handleCheckboxChange={() => handleCheckboxChange(i)}
                handleDeleteChange={() => handleDeleteChange(i)}
              ></TodoRow>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <input
          style={{ width: "250px" }}
          value={inputItem}
          onChange={(e) => setInputItem(e.target.value)}
          placeholder="할일 추가하기"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleTodoList(); // 엔터 키가 눌렸을 때 입력 버튼을 클릭하는 함수 호출
            }
          }}
        ></input>
        <button onClick={handleTodoList}>입력</button>
      </div>
    </div>
  );
}

export default App;
