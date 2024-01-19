import { useState } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 0,
      title: "리액트 공부하기",
      content: "리액트 2회 완강하기",
      isDone: false,
    },
  ]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const contentHandler = (event) => {
    setContent(event.target.value);
  };
  const addListHandler = () => {
    const newList = {
      id: todoList.length + 1,
      title,
      content,
      isDone: false,
    };
    setTodoList([...todoList, newList]);
  };

  const deleteListHandler = (id) => {
    // filter를 사용해서 조건에 해당하는 것만 출력! 클릭한것의 id와 같지 않으면 출력!
    const newList = todoList.filter((list) => list.id !== id);
    setTodoList(newList);
  };

  return (
    <div>
      <div>My Todo List</div>
      <div>
        제목 <input type="text" value={title} onChange={titleHandler} />
        내용 <input type="text" value={content} onChange={contentHandler} />
      </div>
      <button onClick={addListHandler}>추가하기</button>
      <div>Working...</div>
      <div className="app-style">
        {todoList.map((list) => {
          return (
            <div key={list.id} className="component-style">
              <div>{list.title}</div>
              <div>{list.content}</div>
              <button onClick={() => deleteListHandler(list.id)}>
                삭제하기
              </button>
              <button>완료</button>
            </div>
          );
        })}
      </div>

      <div>Done...!</div>
      <div>
        <div>자바스크립트 공부하기</div>
        <div>JS 기초를 공부해봅시다.</div>
        <button>삭제</button>
        <button>취소</button>
      </div>
    </div>
  );
}

export default App;
