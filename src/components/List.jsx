import React from 'react';
import styled from "styled-components";
import { useSelector } from "react-redux";


const List = () => {
  const { todos } = useSelector((state) => state.todos);
  return (
    <Listbox>
      {todos.map((todo) => (
        <Todo key={todo.id}>{todo.title}</Todo>
      ))}
    </Listbox>
  );
};


const Listbox = styled.div`
margin:20px auto;
`
const Todo = styled.div`
 border : 1px solid #cacaca;
  width : 300px;
  overflow:hidden;
  margin: 30px;
  padding : 20px ;
  border-radius: 10px;
  background-color:#eee;
`

export default List;