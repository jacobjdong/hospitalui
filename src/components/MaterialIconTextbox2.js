import React, { Component } from "react";
import styled, { css } from "styled-components";
import IoniconsIcon from "react-native-vector-icons/dist/Ionicons";

function MaterialIconTextbox2(props) {
  return (
    <Container {...props}>
      <IoniconsIcon
        name="ios-person"
        style={{
          color: "#616161",
          fontFamily: "Roboto",
          fontSize: 24,
          paddingLeft: 8
        }}
      ></IoniconsIcon>
      <InputStyle placeholder={props.textInput1 || "Label"}></InputStyle>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: transparent;
  flex-direction: row;
  align-items: center;
  border-radius: 100px;
  border-color: #000000;
  border-width: 2px;
  border-style: solid;
`;

const InputStyle = styled.input`
  font-family: Roboto;
  flex: 1 1 0%;
  color: #000;
  align-self: stretch;
  margin-right: 0px;
  margin-left: 8px;
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

export default MaterialIconTextbox2;
