import TodoStore from "../store/TodoStore";
import "../App.css";

const TodoAdd = () => {
  const { inputItem, setInputItem, createMember } = TodoStore();

  return (
    <div>
      <input
        style={{ width: "90%" }}
        value={inputItem}
        onChange={(e) => setInputItem(e.target.value)}
        placeholder="할일 추가하기"
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            createMember(); // 엔터 키가 눌렸을 때 입력 버튼을 클릭하는 함수 호출
          }
        }}
      ></input>
      <button className="insrtBtn" onClick={() => createMember()}>
        입력
      </button>
    </div>
  );
};

export default TodoAdd;
