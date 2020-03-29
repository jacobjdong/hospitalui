import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import FontAwesomeIcon from "react-native-vector-icons/dist/FontAwesome";
import MaterialIconTextbox from "../components/MaterialIconTextbox";
import MaterialIconTextbox3 from "../components/MaterialIconTextbox3";
import MaterialIconTextbox4 from "../components/MaterialIconTextbox4";
import MaterialButtonSuccessV2 from "../components/MaterialButtonSuccessV2";
import MaterialIconTextbox5 from "../components/MaterialIconTextbox5";

function PatientInfo(props) {
  return (
    <Stack>
      <Navmenu1Stack>
        <Navmenu1>
          <Link to="/PatientInfo">
            <Button1>
              <ButtonOverlay>
                <InfoText1>Enter New Patient Information</InfoText1>
              </ButtonOverlay>
            </Button1>
          </Link>
          <Link to="/UpdateInfo">
            <Button3>
              <ButtonOverlay>
                <Update1>Update Patient Information</Update1>
              </ButtonOverlay>
            </Button3>
          </Link>
          <Link to="/DeleteInfo">
            <Button5>
              <ButtonOverlay>
                <Delete1>Delete Patient Information</Delete1>
              </ButtonOverlay>
            </Button5>
          </Link>
          <Link to="/PatientDatabase">
            <Button2>
              <ButtonOverlay>
                <Database1>Patient Database</Database1>
              </ButtonOverlay>
            </Button2>
          </Link>
          <Link to="/Settings">
            <Button4>
              <ButtonOverlay>
                <Setttings1>Settings</Setttings1>
              </ButtonOverlay>
            </Button4>
          </Link>
        </Navmenu1>
        <CompanyHeader1>
          <CrossIcon1Row>
            <FontAwesomeIcon
              name="plus"
              style={{
                color: "rgba(255,4,4,1)",
                fontSize: 28,
                height: 28,
                width: 22
              }}
            ></FontAwesomeIcon>
            <BrynMawrHospital1>Bryn Mawr Hospital</BrynMawrHospital1>
          </CrossIcon1Row>
        </CompanyHeader1>
        <Logo src={require("../assets/images/logo1.png")}></Logo>
      </Navmenu1Stack>
      <Title>
        <PatientInformation>Patient Information</PatientInformation>
      </Title>
      <MaterialIconTextbox
        style={{
          top: 300,
          left: 456,
          width: 300,
          height: 46,
          position: "absolute",
          borderRadius: 100,
          borderColor: "#000000",
          borderWidth: 1,
          borderStyle: "solid"
        }}
      ></MaterialIconTextbox>
      <MaterialIconTextbox3
        style={{
          top: 219,
          left: 454,
          width: 698,
          height: 43,
          position: "absolute",
          borderRadius: 100,
          borderColor: "#000000",
          borderWidth: 1,
          borderStyle: "solid"
        }}
      ></MaterialIconTextbox3>
      <MaterialIconTextbox4
        style={{
          top: 384,
          left: 852,
          width: 300,
          height: 46,
          position: "absolute",
          borderRadius: 100,
          borderColor: "#000000",
          borderWidth: 1,
          borderStyle: "solid"
        }}
      ></MaterialIconTextbox4>
      <Details placeholder=""></Details>
      <MaterialButtonSuccessV2
        style={{
          top: 642,
          left: 703,
          width: 200,
          height: 36,
          position: "absolute",
          borderRadius: 93,
          borderColor: "#000000",
          borderWidth: 0,
          borderStyle: "solid"
        }}
      ></MaterialButtonSuccessV2>
      <PatientName>Patient Name</PatientName>
      <Admittance>Date of Admittance</Admittance>
      <Dob>Date of Birth</Dob>
      <Conditions>Patient Admitted Conditions</Conditions>
      <MaterialIconTextbox5
        style={{
          top: 298,
          left: 850,
          width: 300,
          height: 46,
          position: "absolute",
          borderRadius: 100,
          borderColor: "#000000",
          borderWidth: 1,
          borderStyle: "solid"
        }}
      ></MaterialIconTextbox5>
      <Gender>Gender</Gender>
      <MaterialIconTextbox
        style={{
          top: 384,
          left: 456,
          width: 300,
          height: 43,
          position: "absolute",
          borderRadius: 100,
          borderColor: "#000000",
          borderWidth: 1,
          borderStyle: "solid"
        }}
      ></MaterialIconTextbox>
      <Gender1Stack>
        <Gender1></Gender1>
        <Icu>ICU</Icu>
      </Gender1Stack>
    </Stack>
  );
}

const Stack = styled.div`
  height: 770px;
  position: relative;
  display: flex;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const Navmenu1 = styled.div`
  top: 2px;
  left: 0px;
  width: 267px;
  height: 768px;
  background-color: rgba(255,166,166,1);
  position: absolute;
  flex-direction: column;
  display: flex;
`;

const Button1 = styled.div`
  width: 244px;
  height: 34px;
  border-radius: 5px;
  border-color: rgba(255,255,255,1);
  border-width: 1px;
  flex-direction: column;
  display: flex;
  margin-top: 80px;
  margin-left: 12px;
  border-style: solid;
`;

const InfoText1 = styled.span`
  font-family: Roboto;
  color: rgba(255,255,255,1);
  font-size: 16px;
  font-weight: regular;
  font-style: normal;
  margin-top: 9px;
  margin-left: 15px;
`;

const Button3 = styled.div`
  width: 244px;
  height: 34px;
  border-radius: 5px;
  border-color: rgba(255,255,255,1);
  border-width: 1px;
  flex-direction: column;
  display: flex;
  margin-top: 22px;
  margin-left: 12px;
  border-style: solid;
`;

const Update1 = styled.span`
  font-family: Roboto;
  color: rgba(255,255,255,1);
  font-size: 16px;
  font-weight: regular;
  font-style: normal;
  text-align: center;
  margin-top: 10px;
  margin-left: 24px;
`;

const Button5 = styled.div`
  width: 244px;
  height: 34px;
  border-radius: 5px;
  border-color: rgba(255,255,255,1);
  border-width: 1px;
  flex-direction: column;
  display: flex;
  margin-top: 23px;
  margin-left: 12px;
  border-style: solid;
`;

const Delete1 = styled.span`
  font-family: Roboto;
  color: rgba(255,255,255,1);
  font-size: 16px;
  font-weight: regular;
  font-style: normal;
  text-align: center;
  margin-top: 9px;
  margin-left: 24px;
`;

const Button2 = styled.div`
  width: 244px;
  height: 34px;
  border-radius: 5px;
  border-color: rgba(255,255,255,1);
  border-width: 1px;
  flex-direction: column;
  display: flex;
  margin-top: 24px;
  margin-left: 11px;
  border-style: solid;
`;

const Database1 = styled.span`
  font-family: Roboto;
  color: rgba(255,255,255,1);
  font-size: 16px;
  font-weight: regular;
  font-style: normal;
  text-align: center;
  margin-top: 9px;
  margin-left: 60px;
`;

const Button4 = styled.div`
  width: 244px;
  height: 34px;
  border-radius: 5px;
  border-color: rgba(255,255,255,1);
  border-width: 1px;
  flex-direction: column;
  display: flex;
  margin-top: 25px;
  margin-left: 10px;
  border-style: solid;
`;

const Setttings1 = styled.span`
  font-family: Roboto;
  color: rgba(255,255,255,1);
  font-size: 16px;
  font-weight: regular;
  font-style: normal;
  text-align: center;
  margin-top: 9px;
  margin-left: 93px;
`;

const CompanyHeader1 = styled.div`
  top: 0px;
  left: 0px;
  height: 40px;
  background-color: rgba(230, 230, 230,1);
  position: absolute;
  right: 0px;
  flex-direction: row;
  display: flex;
`;

const BrynMawrHospital1 = styled.span`
  font-family: Roboto;
  color: rgba(0,0,0,1);
  font-size: 20px;
  font-weight: regular;
  font-style: normal;
  margin-left: 11px;
  margin-top: 4px;
`;

const CrossIcon1Row = styled.div`
  height: 28px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 1181px;
  margin-left: 12px;
  margin-top: 6px;
`;

const Logo = styled.img`
  top: 24px;
  left: 1287px;
  width: 83px;
  height: 114px;
  position: absolute;
  object-fit: contain;
`;

const Navmenu1Stack = styled.div`
  top: 0px;
  left: 0px;
  height: 770px;
  position: absolute;
  right: 0px;
`;

const Title = styled.div`
  top: 99px;
  left: 454px;
  width: 698px;
  height: 64px;
  background-color: rgba(230, 230, 230,1);
  position: absolute;
  border-radius: 10px;
  border-color: #000000;
  border-width: 0px;
  flex-direction: column;
  display: flex;
  border-style: solid;
`;

const PatientInformation = styled.span`
  font-family: Roboto;
  color: #121212;
  font-size: 40px;
  font-weight: regular;
  font-style: normal;
  margin-top: 10px;
  margin-left: 174px;
`;

const Details = styled.input`
  font-family: Roboto;
  top: 470px;
  left: 456px;
  width: 695px;
  height: 148px;
  color: rgba(0,0,0,0.6);
  position: absolute;
  border-radius: 15px;
  border-color: #000000;
  border-width: 1px;
  font-size: 16px;
  font-weight: regular;
  font-style: normal;
  border-style: solid;
  background: transparent;
`;

const PatientName = styled.span`
  font-family: Roboto;
  top: 194px;
  left: 461px;
  color: rgba(155,155,155,1);
  position: absolute;
  font-size: 16px;
  font-weight: regular;
  font-style: normal;
`;

const Admittance = styled.span`
  font-family: Roboto;
  top: 365px;
  left: 863px;
  color: rgba(155,155,155,1);
  position: absolute;
  font-size: 16px;
  font-weight: regular;
  font-style: normal;
`;

const Dob = styled.span`
  font-family: Roboto;
  top: 277px;
  left: 863px;
  color: rgba(155,155,155,1);
  position: absolute;
  font-size: 16px;
  font-weight: regular;
  font-style: normal;
`;

const Conditions = styled.span`
  font-family: Roboto;
  top: 448px;
  left: 461px;
  color: rgba(155,155,155,1);
  position: absolute;
  font-size: 16px;
  font-weight: regular;
  font-style: normal;
`;

const Gender = styled.span`
  font-family: Roboto;
  top: 278px;
  left: 461px;
  color: rgba(155,155,155,1);
  position: absolute;
  font-size: 16px;
  font-weight: regular;
  font-style: normal;
`;

const Gender1 = styled.span`
  font-family: Roboto;
  top: 3px;
  left: 0px;
  color: rgba(155,155,155,1);
  position: absolute;
  font-size: 16px;
  font-weight: regular;
  font-style: normal;
`;

const Icu = styled.span`
  font-family: Roboto;
  top: 0px;
  left: 0px;
  color: rgba(155,155,155,1);
  position: absolute;
  font-size: 16px;
  font-weight: regular;
  font-style: normal;
`;

const Gender1Stack = styled.div`
  top: 365px;
  left: 461px;
  width: 25px;
  height: 16px;
  position: absolute;
`;

export default PatientInfo;
