import { useState } from "react";
import "./App.css";

function TodoRow(props) {
  return (
    <tr>
      <td className="todoKind">{props.item}</td>
      <td className="checkYn">
        {/* onChange를 input따로 button 따로 적용하고싶은데 여기서 props로 어떻게
        받는지 모르겠음 */}
        <input type="checkbox" onChange={() => handleCheckboxChange(i)}></input>
        <button
          // 스타일 css에서 적용하면 글자색만 먹음
          style={{
            backgroundColor: "#cdcd8e",
            width: "20px",
            border: "none",
            height: "20px",
            fontSize: "10px",
            textAlign: "center",
            lineHeight: "5px",
            margin: "0px",
            padding: "0px",
          }}
        >
          삭제
        </button>
      </td>
    </tr>
  );
}

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

  return (
    <div>
      <div
        className="todoMain"
        style={{
          border: "3px solid gray",
          maxHeight: "500px",
          height: "500px",
          maxWidth: "400px",
          width: "auto",
          overflow: "auto",
        }}
      >
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
                onChange={() => handleCheckboxChange(i)} // 여기서는 onChange먹는데 인풋이랑 버튼 동일하게 돼서 문제
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
        ></input>
        <button onClick={handleTodoList}>입력</button>
      </div>
    </div>
  );
}

export default App;
