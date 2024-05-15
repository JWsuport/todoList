import TodoRow from "./TodoRow";

const TodoTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th className="todoKind">구분</th>
          <th className="check">시작전</th>
          <th className="check">진행중</th>
          <th className="check">완료</th>
          <th className="todoDelete"></th>
        </tr>
      </thead>
      <tbody>
        <TodoRow></TodoRow>
      </tbody>
    </table>
  );
};

export default TodoTable;
