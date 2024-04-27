import { TodoTableProps } from "../models/type";
import TodoRow from "./TodoRow";

const TodoTable = (props: TodoTableProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th className="todoKind">구분</th>
          <th className="checkYn">완료</th>
        </tr>
      </thead>
      <tbody style={{ border: "3px solid white" }}>
        {props.todoList.map((todo, i) => (
          <TodoRow
            key={i}
            item={todo}
            updateMemeber={() => props.updateMemeber(todo)}
            deleteMemeber={() => props.deleteMemeber(todo.id)}
          ></TodoRow>
        ))}
      </tbody>
    </table>
  );
};

export default TodoTable;
