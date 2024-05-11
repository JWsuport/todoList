import TodoStore from "../store/TodoStore";

const TodoRow = () => {
  const { todoList, updateMember, deleteMember } = TodoStore();

  return todoList.map((todo) => (
    <tr key={todo.id}>
      <td className="todoKind">{todo.title}</td>
      <td className="checkYn">
        <input
          type="checkbox"
          checked={todo.isChecked}
          onChange={() => updateMember(todo)}
          className="TodoRow"
        />
      </td>
      <td>
        <button onClick={() => deleteMember(todo)}>삭제</button>
      </td>
    </tr>
  ));
};

export default TodoRow;
