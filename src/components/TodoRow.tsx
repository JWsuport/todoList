import React from "react";

interface TodoRowProps {
  item: string;
  handleCheckboxChange: () => void;
  handleDeleteChange: () => void;
}

const TodoRow: React.FC<TodoRowProps> = (props) => {
  return (
    <tr>
      <td className="todoKind">{props.item}</td>
      <td className="checkYn">
        <input
          type="checkbox"
          onChange={props.handleCheckboxChange}
          className="TodoRow"
        />
        <button onClick={props.handleDeleteChange}>삭제</button>
      </td>
    </tr>
  );
};

export default TodoRow;
