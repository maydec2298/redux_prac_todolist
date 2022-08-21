import React, { useState } from 'react';
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../redux/modules/todos";


const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const todos = useSelector((state) => state.todos);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title === "") return; // 아무것도 입력하지 않았을 때 dispatch 하지 않음

    dispatch(
      add({
        id: todos.length + 1,
        title,
      })
    );
  };

  // const onChangeHandler = (event) => {
  //   setTitle(event.target.value);
  // };
  return (
    <Formbox >
      <form onSubmit={onSubmitHandler}>
        <div>Todos의 제목을 입력하세요</div>
        <StInput
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <StButton>추가하기</StButton>
      </form>
    </Formbox>
  );
};


const Formbox = styled.div`
  
  background-color:#eee;
  height : 60px;
   display:flex;
   padding:20px;
   border-bottom: 1px solid #cacaca;
   border-radius:10px 10px 0 0;

`
const StInput = styled.input`
margin-top: 20px;
width:300px;
height:20px;
 border : 1px solid #cacaca;
`
const StButton = styled.button`
margin-left:30px;
border : 1px solid #cacaca;
padding:5px 10px;
background-color:#fff;
`
export default Form;