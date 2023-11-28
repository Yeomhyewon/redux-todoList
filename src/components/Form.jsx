import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todos";
import shortid from "shortid";
import styled from "styled-components";

export default function Form() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onChangeTitle = (e) => setTitle(e.target.value);
  const onChangeContent = (e) => setContent(e.target.value);

  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      id: shortid.generate(),
      title,
      body: content,
      isDone: false,
    };
    dispatch(addTodo(newTodo));
    setContent("");
    setTitle("");
  };
  return (
    <StForm>
      제목: <input value={title} onChange={onChangeTitle} />
      내용: <input value={content} onChange={onChangeContent} />
      <button onClick={handleAddTodo}>등록</button>
    </StForm>
  );
}

const StForm = styled.form`
  display: flex;
  justify-content: center;
  background-color: pink;
  padding: 20px;

  & > input {
    padding: 5px;
    margin: 0px 5px 0px 5px;
    border: none;
    border-radius: 10px;
  }

  & > button {
    padding: 5px;
    width: 50px;
    border: none;
    border-radius: 10px;
  }
`;
