import React from "react";

function Input({
  title,
  content,
  titleHandler,
  contentHandler,
  addBtnHandler,
}) {
  return (
    <div>
      <form className="input">
        제목 <input type="text" value={title} onChange={titleHandler} />
        내용 <input type="text" value={content} onChange={contentHandler} />
        <button type="submit" onClick={addBtnHandler}>
          추가하기
        </button>
      </form>
    </div>
  );
}

export default Input;
