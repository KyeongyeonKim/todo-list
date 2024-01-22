import { useState } from "react";
import "App.css";

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 0,
      title: "리액트 공부하기",
      content: "리액트 2회 완강하기",
      isDone: false,
    },
  ]);
  const [doneList, setDoneList] = useState([
    {
      id: 0,
      title: "웹종합 공부하기",
      content: "웹종합 2회 완강하기",
      isDone: true,
    },
  ]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isDone, setIsDone] = useState(false);

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const contentHandler = (event) => {
    setContent(event.target.value);
  };
  const addBtnHandler = () => {
    const newList = {
      id: todoList.length + 1,
      title,
      content,
      isDone: false,
    };
    setTodoList([...todoList, newList]);
  };

  const deleteBtnHandler = (id, isDone) => {
    // filter를 사용해서 조건에 해당하는 것만 출력! 클릭한것의 id와 같지 않으면 출력!
    if (isDone === false) {
      const newList = todoList.filter((list) => list.id !== id);
      setTodoList(newList);
    } else {
      const newList = doneList.filter((list) => list.id !== id);
      setDoneList(newList);
    }
  };

  // 완료/취소 버튼
  // 버튼을 누르면 isdone의 값을 바꿔준다.
  // 새로 출력

  // const onChangeHandler = (id, isDone) => {
  //   if (isDone === false) {
  //     // 완료버튼 눌렀을때
  //     setIsDone(true); // 완료로 바꿔줌
  //     // working에서는 빼고 출력,
  //     const newList = todoList.filter((list) => list.id !== id);
  //     setTodoList(newList);

  //     //done에서는 추가해서 출력
  //     const newDoneList = {
  //       id: doneList.length + 1,
  //       title: todoList.title,
  //       content: todoList.content,
  //       isDone,
  //     };
  //     setDoneList([...doneList, newDoneList]);
  //   } else {
  //     // 취소버튼 눌렀을때 :  done에서 빼고 출력, working에 더해서 출력
  //     setIsDone(false);
  //     const newList = doneList.filter((list) => list.id !== id);
  //     setDoneList(newList);

  //     const redoList = {
  //       id: todoList.length + 1,
  //       title: todoList.title,
  //       content: todoList.content,
  //       isDone,
  //     };
  //     setTodoList([...todoList, redoList]);
  //   }
  // };

  return (
    <div className="content-style">
      <div className="header">My Todo List</div>
      <div className="input">
        제목 <input type="text" value={title} onChange={titleHandler} />
        내용 <input type="text" value={content} onChange={contentHandler} />
        <button onClick={addBtnHandler}>추가하기</button>
      </div>

      <div className="title">Working...🔥</div>
      <div className="app-style">
        {todoList.map((list) => {
          return (
            <div key={list.id} className="component-style">
              <div className="list-title">{list.title}</div>
              <div className="list-content">{list.content}</div>
              <button onClick={() => deleteBtnHandler(list.id, list.isDone)}>
                삭제하기
              </button>
              {/* <button onClick={() => onChangeHandler(list.id, list.isDone)}> */}
              <button>완료</button>
            </div>
          );
        })}
      </div>

      <div className="title">Done...!🎉</div>
      <div className="app-style">
        {doneList.map((list) => {
          return (
            <div key={list.id} className="component-style">
              <div className="list-title">{list.title}</div>
              <div className="list-content">{list.content}</div>
              <button onClick={() => deleteBtnHandler(list.id, list.isDone)}>
                삭제하기
              </button>
              {/* <button onClick={() => onChangeHandler(list.id, list.isDone)}> */}
              <button>취소</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
