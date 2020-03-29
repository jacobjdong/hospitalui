import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialRightIconTextbox(props) {
  return (
    <Container {...props}>
      <InputStyle placeholder={props.textInput1 || "Label"}></InputStyle>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: transparent;
  flex-direction: row;
  align-items: center;
  border-color: #D9D5DC;
  border-bottom-width: 1px;
`;

const InputStyle = styled.input`
  font-family: Roboto;
  flex: 1 1 0%;
  color: #000;
  align-self: stretch;
  margin-left: 10px;
  padding-top: 14px;
  padding-right: 14px;
  padding-bottom: 14px;
  font-size: 16px;
  line-height: 16px;
  border: none;
  background: transparent;
  display: flex;
  flex-direction: column;
`;

export default MaterialRightIconTextbox;
