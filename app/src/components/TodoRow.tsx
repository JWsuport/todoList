import React from "react";
import { TodoRowProps } from "../models/type";

const TodoRow: React.FC<TodoRowProps> = (props) => {
  return (
    <tr>
      <td className="todoKind">{props.item.title}</td>
      <td className="checkYn">
        <input
          type="checkbox"
          checked={props.item.isChecked}
          onChange={props.updateMemeber}
          className="TodoRow"
        />
        <button onClick={props.deleteMemeber}>삭제</button>
      </td>
    </tr>
  );
};

export default TodoRow;
