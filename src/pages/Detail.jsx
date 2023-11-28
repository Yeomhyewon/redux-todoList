import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { deleteTodo } from "../redux/modules/todos";

const Detail = () => {
  const detailTodo = useSelector((state) => state.todos);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispacth = useDispatch();
  const todo = detailTodo.find((i) => i.id === id);
  const clickHome = () => navigate(-1);

  const handleDeleteTodo = (id) => {
    if (!window.confirm("정말 삭제하시겠습니까?")) {
      return false;
    } else {
      alert("삭제되었습니다.");
      dispacth(deleteTodo(id));
      navigate("/");
    }
  };
  if (!todo) return;
  return (
    <>
      <StBtn
        $bdcolor={!todo.isDone ? "#FCBAD3" : "#AA96DA"}
        onClick={clickHome}
      >
        뒤로가기
      </StBtn>
      <StDiv $bdcolor={!todo.isDone ? "#FCBAD3" : "#AA96DA"}>
        <div>
          <h2>제목: {todo?.title}</h2>
          <p>내용: {todo?.body}</p>
          <p>완료 여부 : {todo.isDone.toString()}</p>
          <button
            onClick={() => {
              handleDeleteTodo(todo.id);
            }}
          >
            삭제
          </button>
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
    border: 3px solid ${(props) => props.$bdcolor};
    border-radius: 10px;
    padding: 20px;

    & > button {
      padding: 10px;
      width: 60px;
      border: none;
      border-radius: 10px;
      background-color: ${(props) => props.$bdcolor};

      cursor: pointer;
      transition: all 0.5s;

      &:hover {
        background-color: #ffffd2;
      }
    }
  }
`;

const StBtn = styled.button`
  margin: 30px 0px 0px 30px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  background-color: ${(props) => props.$bdcolor};

  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    background-color: #ffffd2;
  }
`;
export default Detail;
