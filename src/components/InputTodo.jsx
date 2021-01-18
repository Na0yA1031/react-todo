import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChangeTodotext, onClickAdd } = props;
  return (
    <div className="input-area">
      <input
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChangeTodotext}
      />
      <button onClick={onClickAdd}>追加</button>
    </div>
  );
};
