import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, switchTodo } from "../redux/modules/todos";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Todo({ isActive }) {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteTodo = (id) => {
    return dispatch(deleteTodo(id));
  };
  const handleSwitchTodo = (id) => {
    return dispatch(switchTodo(id));
  };

  const clickDetailpage = (id) => {
    return navigate(`/${id}`);
  };

  return (
    <StDiv>
      <h2>{isActive ? "해야할 일🔥" : "완료한 일😀"}</h2>
      <div>
        {todos
          .filter((i) => {
            return i.isDone !== isActive;
          })
          .map((i) => {
            return (
              <StTodoListContainer
                $bdcolor={!i.isDone ? "#FCBAD3" : "#AA96DA"}
                key={i.id}
              >
                <h3>{i.title}</h3>
                <p>{i.body}</p>
                <button onClick={() => handleDeleteTodo(i.id)}>삭제</button>
                <button onClick={() => handleSwitchTodo(i.id)}>
                  {i.isDone ? "취소" : "완료"}
                </button>
                <button
                  onClick={() => {
                    clickDetailpage(i.id);
                  }}
                >
                  상세보기
                </button>
              </StTodoListContainer>
            );
          })}
      </div>
    </StDiv>
  );
}

const StDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div {
    display: flex;
    gap: 10px;
  }

  & > div > div > h3 {
    text-align: center;
  }
  & > div > div > p {
    text-align: center;
  }

  & > div > div > button {
    margin-left: 5px;
    padding: 5px;
    border: none;
    border-radius: 10px;

    cursor: pointer;
  }
`;

const StTodoListContainer = styled.div`
  margin-bottom: 20px;
  padding: 10px;
  border: 3px solid ${(props) => props.$bdcolor};
  border-radius: 10px;
`;
