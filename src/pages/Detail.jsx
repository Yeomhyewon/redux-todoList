import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Detail = () => {
  const detailTodo = useSelector((state) => state.todos);
  const { id } = useParams();
  const navigate = useNavigate();
  const todo = detailTodo.find((i) => i.id === id);
  const clickHome = () => navigate(-1);

  return (
    <>
      <StBtn onClick={clickHome}>뒤로가기</StBtn>
      <StDiv>
        <div>
          <h2>제목: {todo.title}</h2>
          <p>내용: {todo.body}</p>
          <p>완료 여부 : {todo.isDone.toString()}</p>
        </div>
      </StDiv>
    </>
  );
};

const StDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 200px;

  & > div {
    width: 200px;
    border: 3px solid pink;
    border-radius: 10px;
    padding: 20px;
  }
`;

const StBtn = styled.button`
  margin: 30px 0px 0px 30px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  background-color: pink;
`;
export default Detail;
