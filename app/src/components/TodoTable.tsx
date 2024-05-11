import TodoRow from "./TodoRow";

const TodoTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th className="todoKind">구분</th>
          <th className="checkYn">완료</th>
          <th className="todoDelete"></th>
        </tr>
      </thead>
      <tbody style={{ border: "3px solid white" }}></tbody>
      <TodoRow></TodoRow>
    </table>
  );
};

export default TodoTable;
