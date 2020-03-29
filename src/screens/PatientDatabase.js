import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import FontAwesomeIcon from "react-native-vector-icons/dist/FontAwesome";

function PatientDatabase(props) {
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
        <Image1 src={require("../assets/images/logo1.png")}></Image1>
      </Navmenu1Stack>
      <Rect7>
        <PatientDatabaseStyle>Patient Database</PatientDatabaseStyle>
      </Rect7>
      <Rect8>
        <DateRow>
          <Date>Date</Date>
          <PatientsName>Patient&#39;s name</PatientsName>
        </DateRow>
      </Rect8>
      <Rect9>
        <Rect10></Rect10>
        <Rect11></Rect11>
        <Rect12></Rect12>
        <Rect13></Rect13>
        <Rect14></Rect14>
        <Rect15></Rect15>
        <Rect16></Rect16>
        <Rect17></Rect17>
        <Rect18></Rect18>
        <Rect19></Rect19>
        <Rect20></Rect20>
        <Rect21></Rect21>
        <Rect22></Rect22>
      </Rect9>
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

const Image1 = styled.img`
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

const Rect7 = styled.div`
  top: 98px;
  left: 549px;
  width: 580px;
  height: 65px;
  background-color: rgba(230, 230, 230,1);
  position: absolute;
  border-radius: 10px;
  border-color: #000000;
  border-width: 0px;
  flex-direction: column;
  display: flex;
  border-style: solid;
`;

const PatientDatabaseStyle = styled.span`
  font-family: Roboto;
  color: rgba(0,0,0,1);
  font-size: 40px;
  font-weight: regular;
  font-style: normal;
  margin-top: 13px;
  margin-left: 138px;
`;

const Rect8 = styled.div`
  top: 190px;
  left: 340px;
  width: 1000px;
  height: 30px;
  background-color: rgba(230, 230, 230,1);
  position: absolute;
  flex-direction: row;
  display: flex;
`;

const Date = styled.span`
  font-family: Roboto;
  width: 47px;
  height: 20px;
  color: rgba(0,0,0,1);
  border-color: #000000;
  border-width: 1px;
  font-size: 20px;
  font-weight: regular;
  font-style: normal;
  border-style: solid;
`;

const PatientsName = styled.span`
  font-family: Roboto;
  color: rgba(0,0,0,1);
  font-size: 20px;
  font-weight: regular;
  font-style: normal;
  margin-left: 87px;
`;

const DateRow = styled.div`
  height: 20px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 725px;
  margin-left: 10px;
  margin-top: 5px;
`;

const Rect9 = styled.div`
  top: 220px;
  left: 340px;
  width: 1000px;
  height: 494px;
  background-color: rgba(230, 230, 230,1);
  position: absolute;
  flex-direction: column;
  display: flex;
`;

const Rect10 = styled.div`
  flex: 0.08 1 0%;
  background-color: rgba(255,255,255,1);
  display: flex;
  flex-direction: column;
`;

const Rect11 = styled.div`
  flex: 0.08 1 0%;
  background-color: rgba(216, 216, 216,1);
  display: flex;
  flex-direction: column;
`;

const Rect12 = styled.div`
  flex: 0.08 1 0%;
  background-color: rgba(255,255,255,1);
  display: flex;
  flex-direction: column;
`;

const Rect13 = styled.div`
  flex: 0.08 1 0%;
  background-color: rgba(208,208,208,1);
  display: flex;
  flex-direction: column;
`;

const Rect14 = styled.div`
  flex: 0.08 1 0%;
  background-color: rgba(255,255,255,1);
  display: flex;
  flex-direction: column;
`;

const Rect15 = styled.div`
  flex: 0.08 1 0%;
  background-color: rgba(208,208,208,1);
  display: flex;
  flex-direction: column;
`;

const Rect16 = styled.div`
  flex: 0.08 1 0%;
  background-color: rgba(255,255,255,1);
  display: flex;
  flex-direction: column;
`;

const Rect17 = styled.div`
  flex: 0.08 1 0%;
  background-color: rgba(208,208,208,1);
  display: flex;
  flex-direction: column;
`;

const Rect18 = styled.div`
  flex: 0.08 1 0%;
  background-color: rgba(255,255,255,1);
  display: flex;
  flex-direction: column;
`;

const Rect19 = styled.div`
  flex: 0.08 1 0%;
  background-color: rgba(208,208,208,1);
  display: flex;
  flex-direction: column;
`;

const Rect20 = styled.div`
  flex: 0.08 1 0%;
  background-color: rgba(255,255,255,1);
  display: flex;
  flex-direction: column;
`;

const Rect21 = styled.div`
  flex: 0.08 1 0%;
  background-color: rgba(208,208,208,1);
  display: flex;
  flex-direction: column;
`;

const Rect22 = styled.div`
  flex: 0.08 1 0%;
  background-color: rgba(255,255,255,1);
  display: flex;
  flex-direction: column;
`;

export default PatientDatabase;
