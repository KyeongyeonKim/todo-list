import { useState } from "react";
import "App.css";
import uuid from "react-uuid";
import Header from "components/Header";
import Input from "components/Input";
import Todo from "components/Todo";

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: uuid(),
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

  const addBtnHandler = (event) => {
    event.preventDefault();
    const newTodo = {
      id: uuid(),
      title,
      content,
      isDone: false,
    };
    setTodoList([...todoList, newTodo]);
    setTitle("");
    setContent("");
  };

  const deleteBtnHandler = (id) => {
    // filter를 사용해서 조건에 해당하는 것만 출력! 클릭한것의 id와 같지 않으면 출력!
    const newList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newList);
  };

  const onChangeHandler = (id) => {
    const newList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone };
      } else {
        return todo;
      }
    });
    setTodoList(newList);
  };

  return (
    <div className="content-style">
      <Header>
        <Input
          title={title}
          content={content}
          titleHandler={titleHandler}
          contentHandler={contentHandler}
          addBtnHandler={addBtnHandler}
        />

        <div className="title">Working...🔥</div>
        <div className="app-style">
          {todoList
            .filter((todo) => todo.isDone === false)
            .map((list) => {
              return (
                <Todo
                  list={list}
                  deleteBtnHandler={deleteBtnHandler}
                  onChangeHandler={onChangeHandler}
                />
              );
            })}
        </div>

        <div className="title">Done...!🎉</div>
        <div className="app-style">
          {todoList
            .filter((todo) => todo.isDone === true)
            .map((list) => {
              return (
                <Todo
                  list={list}
                  deleteBtnHandler={deleteBtnHandler}
                  onChangeHandler={onChangeHandler}
                />
              );
            })}
        </div>
      </Header>
    </div>
  );
}

export default App;
