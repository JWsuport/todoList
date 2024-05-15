import TodoStore from "../store/TodoStore";
import "../App.css";

const TodoRow = () => {
  const {
    todoList,
    bfrUpdateMember,
    fnsUpdateMember,
    ingUpdateMember,
    deleteMember,
  } = TodoStore();

  return todoList.map((todo) => (
    <tr key={todo.id}>
      <td className="todoKind">{todo.title}</td>
      <td className="check">
        <input
          type="checkbox"
          checked={todo.bfrIsChecked}
          onChange={() => bfrUpdateMember(todo)}
          className="TodoRow"
        />
      </td>
      <td className="check">
        <input
          type="checkbox"
          checked={todo.ingIsChecked}
          onChange={() => ingUpdateMember(todo)}
          className="TodoRow"
        />
      </td>
      <td className="check">
        <input
          type="checkbox"
          checked={todo.fnsIsChecked}
          onChange={() => fnsUpdateMember(todo)}
          className="TodoRow"
        />
      </td>
      <td>
        <button className="btnDel" onClick={() => deleteMember(todo)}>
          삭제
        </button>
      </td>
    </tr>
  ));
};

export default TodoRow;
