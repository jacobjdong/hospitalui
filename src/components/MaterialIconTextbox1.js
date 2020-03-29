import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";

function MaterialIconTextbox1(props) {
  return (
    <Container {...props}>
      <MaterialCommunityIconsIcon
        name="key"
        style={{
          color: "#616161",
          fontFamily: "Roboto",
          fontSize: 20,
          marginRight: 0,
          marginLeft: 0,
          padding: 8,
          margin: 0
        }}
      ></MaterialCommunityIconsIcon>
      <InputStyle placeholder={props.textInput1 || "Label"}></InputStyle>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: transparent;
  flex-direction: row;
  align-items: center;
`;

const InputStyle = styled.input`
  font-family: Roboto;
  flex: 1 1 0%;
  color: #000;
  align-self: stretch;
  margin-left: 0px;
  padding-top: 0px;
  padding-right: 0px;
  padding-bottom: 0px;
  border-color: #D9D5DC;
  border-bottom-width: 1px;
  font-size: 16px;
  line-height: 16px;
  border: none;
  background: transparent;
  display: flex;
  flex-direction: column;
`;

export default MaterialIconTextbox1;
