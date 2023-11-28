import React from "react";
import Todo from "../components/Todos";
import Form from "../components/Form";

const Home = () => {
  return (
    <>
      <Form />
      <Todo isActive={true} />
      <Todo isActive={false} />
    </>
  );
};

export default Home;
