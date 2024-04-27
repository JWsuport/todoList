import { TodoAddProps } from "../models/type";

const TodoAdd = (props: TodoAddProps) => {
  return (
    <div>
      <input
        style={{ width: "250px" }}
        value={props.inputItem}
        onChange={(e) => props.setInputItem(e.target.value)}
        placeholder="할일 추가하기"
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            props.createMember(); // 엔터 키가 눌렸을 때 입력 버튼을 클릭하는 함수 호출
          }
        }}
      ></input>
      <button onClick={props.createMember}>입력</button>
    </div>
  );
};

export default TodoAdd;
