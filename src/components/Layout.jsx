import React from 'react';
import Form from "./Form"
import List from "./List";
import styled from "styled-components";

const Layout = () => {
  return (
    <Layoutbox>
      <Form />
      <List />
    </Layoutbox>
  );
};


const Layoutbox = styled.div`
margin:auto;
margin-top: 50px;
  display:flex;
  flex-direction: column;
  width: 500px;
  height :800px;
  background-color:#fff;
  border: 1px solid #cacaca;
  border-radius: 10px;
`

export default Layout;