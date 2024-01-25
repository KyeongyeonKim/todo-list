import React from "react";

const Todo = ({ list, deleteBtnHandler, onChangeHandler }) => {
  return (
    <div key={list.id} className="component-style">
      <div className="list-title">{list.title}</div>
      <div className="list-content">{list.content}</div>
      <button onClick={() => deleteBtnHandler(list.id)}>삭제하기</button>
      <button onClick={() => onChangeHandler(list.id)}>
        {list.isDone === false ? "완료" : "취소"}
      </button>
    </div>
  );
};

export default Todo;
