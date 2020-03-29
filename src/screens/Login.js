import React, { Component } from "react";
import styled, { css } from "styled-components";
import FontAwesomeIcon from "react-native-vector-icons/dist/FontAwesome";
import MaterialIconTextbox2 from "../components/MaterialIconTextbox2";
import MaterialIconTextbox1 from "../components/MaterialIconTextbox1";
import MaterialButtonViolet from "../components/MaterialButtonViolet";
import { Link } from "react-router-dom";

function Login(props) {
  return (
    <Container>
      <CompanyHeaderColumn>
        <CompanyHeader>
          <CrossIconRow>
            <FontAwesomeIcon
              name="plus"
              style={{
                color: "rgba(255,4,4,1)",
                fontSize: 28,
                height: 28,
                width: 22
              }}
            ></FontAwesomeIcon>
            <BrynMawrHospital>Bryn Mawr Hospital</BrynMawrHospital>
          </CrossIconRow>
        </CompanyHeader>
        <Box>
          <ImageStack>
            <Image src={require("../assets/images/logo.png")}></Image>
            <WelcomeBack>Welcome back</WelcomeBack>
          </ImageStack>
          <Username2>Username</Username2>
          <MaterialIconTextbox2
            style={{
              width: 240,
              height: 28,
              backgroundColor: "rgba(255,255,255,1)",
              borderColor: "#000000",
              borderWidth: 1,
              marginTop: 3,
              marginLeft: 30,
              borderStyle: "solid"
            }}
            textInput1="Username"
          ></MaterialIconTextbox2>
          <Password2>Password</Password2>
          <MaterialIconTextbox1
            style={{
              width: 241,
              height: 28,
              backgroundColor: "rgba(255,255,255,1)",
              borderRadius: 100,
              borderColor: "#000000",
              borderWidth: 1,
              marginLeft: 29,
              borderStyle: "solid"
            }}
            textInput1="Password"
          ></MaterialIconTextbox1>
          <MaterialButtonVioletStack>
            <MaterialButtonViolet
              style={{
                top: 0,
                left: 0,
                width: 100,
                height: 37,
                position: "absolute"
              }}
              button1="Home"
            ></MaterialButtonViolet>
            <Link to="/Home">
              <Button>
                <ButtonOverlay></ButtonOverlay>
              </Button>
            </Link>
          </MaterialButtonVioletStack>
        </Box>
      </CompanyHeaderColumn>
      <CompanyHeaderColumnFiller></CompanyHeaderColumnFiller>
      <Footer></Footer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(255,166,166,1);
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const CompanyHeader = styled.div`
  width: 1400px;
  height: 40px;
  background-color: rgba(230, 230, 230,1);
  flex-direction: row;
  display: flex;
`;

const BrynMawrHospital = styled.span`
  font-family: Roboto;
  color: rgba(0,0,0,1);
  font-size: 20px;
  font-weight: regular;
  font-style: normal;
  margin-left: 12px;
  margin-top: 4px;
`;

const CrossIconRow = styled.div`
  height: 28px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 1181px;
  margin-left: 11px;
  margin-top: 6px;
`;

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: rgba(165,152,152,1);
  border-radius: 30px;
  border-color: #000000;
  border-width: 0px;
  flex-direction: column;
  display: flex;
  margin-top: 194px;
  margin-left: 550px;
  border-style: solid;
`;

const Image = styled.img`
  top: 0px;
  left: 19px;
  width: 93px;
  height: 77px;
  position: absolute;
  object-fit: contain;
`;

const WelcomeBack = styled.span`
  font-family: Roboto;
  top: 76px;
  left: 0px;
  color: rgba(0,0,0,1);
  position: absolute;
  font-size: 20px;
  font-weight: 700;
  font-style: normal;
`;

const ImageStack = styled.div`
  width: 124px;
  height: 96px;
  margin-left: 84px;
  position: relative;
`;

const Username2 = styled.span`
  font-family: Roboto;
  color: rgba(0,0,0,1);
  font-weight: regular;
  font-style: normal;
  margin-top: 13px;
  margin-left: 30px;
`;

const Password2 = styled.span`
  font-family: Roboto;
  color: rgba(0,0,0,1);
  font-weight: regular;
  font-style: normal;
  margin-top: 6px;
  margin-left: 30px;
`;

const Button = styled.div`
  top: 0px;
  left: 1px;
  width: 99px;
  height: 37px;
  background-color: rgba(230, 230, 230,1);
  position: absolute;
  opacity: 0;
  border: none;
`;

const MaterialButtonVioletStack = styled.div`
  width: 100px;
  height: 37px;
  margin-top: 30px;
  margin-left: 100px;
  position: relative;
`;

const CompanyHeaderColumn = styled.div`
  width: 1400px;
  flex-direction: column;
  display: flex;
`;

const CompanyHeaderColumnFiller = styled.div`
  flex: 1 1 0%;
  flex-direction: column;
  display: flex;
`;

const Footer = styled.div`
  width: 1400px;
  height: 40px;
  background-color: rgba(230, 230, 230,1);
  align-self: center;
`;

export default Login;
