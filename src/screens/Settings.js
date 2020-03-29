import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import FontAwesomeIcon from "react-native-vector-icons/dist/FontAwesome";
import MaterialRightIconTextbox from "../components/MaterialRightIconTextbox";
import MaterialButtonSuccess1 from "../components/MaterialButtonSuccess1";

function Settings(props) {
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
        <HospitalAddress>Hospital Address</HospitalAddress>
        <MaterialRightIconTextbox
          style={{
            width: 662,
            height: 43,
            borderRadius: 100,
            borderColor: "#000000",
            borderWidth: 1,
            marginTop: 14,
            marginLeft: 14,
            borderStyle: "solid"
          }}
        ></MaterialRightIconTextbox>
        <HospitalAddress1>Hospital Phone Number</HospitalAddress1>
        <MaterialRightIconTextbox
          style={{
            width: 662,
            height: 43,
            borderRadius: 100,
            borderColor: "#000000",
            borderWidth: 1,
            marginTop: 13,
            marginLeft: 14,
            borderStyle: "solid"
          }}
        ></MaterialRightIconTextbox>
        <MaterialButtonSuccess1
          style={{
            width: 140,
            height: 36,
            borderRadius: 100,
            borderColor: "#000000",
            borderWidth: 0,
            marginTop: 23,
            marginLeft: 275,
            borderStyle: "solid"
          }}
        ></MaterialButtonSuccess1>
      </Rect7>
      <Rect8>
        <HospitalInformation>Hospital Information</HospitalInformation>
      </Rect8>
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
  top: 243px;
  left: 464px;
  width: 700px;
  height: 295px;
  background-color: rgba(230, 230, 230,1);
  position: absolute;
  border-radius: 15px;
  border-color: #000000;
  border-width: 0px;
  flex-direction: column;
  display: flex;
  border-style: solid;
`;

const HospitalAddress = styled.span`
  font-family: Roboto;
  color: rgba(0,0,0,1);
  font-size: 20px;
  font-weight: regular;
  font-style: normal;
  margin-top: 8px;
  margin-left: 14px;
`;

const HospitalAddress1 = styled.span`
  font-family: Roboto;
  color: rgba(0,0,0,1);
  font-size: 20px;
  font-weight: regular;
  font-style: normal;
  margin-top: 57px;
  margin-left: 14px;
`;

const Rect8 = styled.div`
  top: 107px;
  left: 464px;
  width: 700px;
  height: 62px;
  background-color: rgba(230, 230, 230,1);
  position: absolute;
  border-radius: 10px;
  border-color: #000000;
  border-width: 0px;
  flex-direction: column;
  display: flex;
  border-style: solid;
`;

const HospitalInformation = styled.span`
  font-family: Roboto;
  color: rgba(0,0,0,1);
  font-size: 40px;
  font-weight: regular;
  font-style: normal;
  margin-top: 11px;
  margin-left: 167px;
`;

export default Settings;
