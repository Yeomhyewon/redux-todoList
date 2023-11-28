// import uuid from "react-uuid";
import shortid from "shortid";

const initialState = [
  {
    id: shortid.generate(),
    title: "test",
    body: "test",
    isDone: false,
  },
  {
    id: shortid.generate(),
    title: "test1",
    body: "test1",
    isDone: true,
  },
];

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const SWITCH_TODO = "SWITCH_TODO";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};
export const switchTodo = (payload) => {
  return {
    type: SWITCH_TODO,
    payload,
  };
};

// 리듀서
const todos = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case DELETE_TODO:
      return state.filter((i) => i.id !== action.payload);

    case SWITCH_TODO:
      return state.map((i) =>
        i.id === action.payload ? { ...i, isDone: !i.isDone } : i
      );

    default:
      return state;
  }
};

export default todos;
