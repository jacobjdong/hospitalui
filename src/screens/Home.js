import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import FontAwesomeIcon from "react-native-vector-icons/dist/FontAwesome";

function Home(props) {
  return (
    <Stack>
      <Navmenu>
        <Link to="/PatientInfo">
          <Button>
            <ButtonOverlay>
              <InfoText>Enter New Patient Information</InfoText>
            </ButtonOverlay>
          </Button>
        </Link>
        <Link to="/UpdateInfo">
          <Button2>
            <ButtonOverlay>
              <Update>Update Patient Information</Update>
            </ButtonOverlay>
          </Button2>
        </Link>
        <Link to="/DeleteInfo">
          <Button3>
            <ButtonOverlay>
              <Delete>Delete Patient Information</Delete>
            </ButtonOverlay>
          </Button3>
        </Link>
        <Link to="/PatientDatabase">
          <Button4>
            <ButtonOverlay>
              <Database>Patient Database</Database>
            </ButtonOverlay>
          </Button4>
        </Link>
        <Link to="/Settings">
          <Button5>
            <ButtonOverlay>
              <Setttings>Settings</Setttings>
            </ButtonOverlay>
          </Button5>
        </Link>
      </Navmenu>
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
      <Center>
        <BedsAvailableRow>
          <BedsAvailable>Beds Available</BedsAvailable>
          <BedsOccupied>Beds Occupied</BedsOccupied>
        </BedsAvailableRow>
        <Line1StackRow>
          <Line1Stack>
            <Line1></Line1>
            <BedAvail>100</BedAvail>
          </Line1Stack>
          <Line2Stack>
            <Line2></Line2>
            <Bedocup>200</Bedocup>
          </Line2Stack>
        </Line1StackRow>
        <IcuBedsAvailableRow>
          <IcuBedsAvailable>ICU Beds Available</IcuBedsAvailable>
          <IcuBedsOccupied>ICU Beds Occupied</IcuBedsOccupied>
        </IcuBedsAvailableRow>
        <IcuavailRow>
          <Icuavail>20</Icuavail>
          <Icuocup>15</Icuocup>
        </IcuavailRow>
        <Line3Row>
          <Line3></Line3>
          <Line4></Line4>
        </Line3Row>
        <MaximumCapacity>Maximum Capacity</MaximumCapacity>
        <LoremIpsum8>325</LoremIpsum8>
        <Line5></Line5>
      </Center>
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
const Navmenu = styled.div`
  top: 2px;
  left: 0px;
  width: 267px;
  height: 768px;
  background-color: rgba(255,166,166,1);
  position: absolute;
  flex-direction: column;
  display: flex;
`;

const Button = styled.div`
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

const InfoText = styled.span`
  font-family: Roboto;
  color: rgba(255,255,255,1);
  font-size: 16px;
  font-weight: regular;
  font-style: normal;
  margin-top: 9px;
  margin-left: 15px;
`;

const Button2 = styled.div`
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

const Update = styled.span`
  font-family: Roboto;
  color: rgba(255,255,255,1);
  font-size: 16px;
  font-weight: regular;
  font-style: normal;
  text-align: center;
  margin-top: 10px;
  margin-left: 24px;
`;

const Button3 = styled.div`
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

const Delete = styled.span`
  font-family: Roboto;
  color: rgba(255,255,255,1);
  font-size: 16px;
  font-weight: regular;
  font-style: normal;
  text-align: center;
  margin-top: 9px;
  margin-left: 24px;
`;

const Button4 = styled.div`
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

const Database = styled.span`
  font-family: Roboto;
  color: rgba(255,255,255,1);
  font-size: 16px;
  font-weight: regular;
  font-style: normal;
  text-align: center;
  margin-top: 9px;
  margin-left: 60px;
`;

const Button5 = styled.div`
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

const Setttings = styled.span`
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
  top: 2px;
  left: 663px;
  width: 323px;
  height: 285px;
  position: absolute;
  object-fit: contain;
`;

const Center = styled.div`
  top: 278px;
  left: 512px;
  width: 625px;
  height: 431px;
  background-color: rgba(230, 230, 230,1);
  position: absolute;
  border-radius: 15px;
  border-color: #000000;
  border-width: 0px;
  flex-direction: column;
  display: flex;
  border-style: solid;
`;

const BedsAvailable = styled.span`
  font-family: Roboto;
  color: rgba(0,0,0,1);
  font-size: 20px;
  font-weight: regular;
  font-style: normal;
`;

const BedsOccupied = styled.span`
  font-family: Roboto;
  color: rgba(0,0,0,1);
  font-size: 20px;
  font-weight: regular;
  font-style: normal;
  margin-left: 191px;
`;

const BedsAvailableRow = styled.div`
  height: 20px;
  flex-direction: row;
  display: flex;
  margin-top: 41px;
  margin-left: 86px;
  margin-right: 85px;
`;

const Line1 = styled.div`
  top: 29px;
  left: 0px;
  width: 160px;
  height: 10px;
  background-color: rgba(0,0,0,1);
  position: absolute;
`;

const BedAvail = styled.span`
  font-family: Roboto;
  top: 0px;
  left: 54px;
  color: rgba(0,0,0,1);
  position: absolute;
  font-size: 30px;
  font-weight: regular;
  font-style: normal;
`;

const Line1Stack = styled.div`
  width: 160px;
  height: 39px;
  position: relative;
`;

const Line2 = styled.div`
  top: 29px;
  left: 0px;
  width: 160px;
  height: 10px;
  background-color: rgba(0,0,0,1);
  position: absolute;
`;

const Bedocup = styled.span`
  font-family: Roboto;
  top: 0px;
  left: 59px;
  color: rgba(0,0,0,1);
  position: absolute;
  font-size: 30px;
  font-weight: regular;
  font-style: normal;
`;

const Line2Stack = styled.div`
  width: 160px;
  height: 39px;
  margin-left: 163px;
  position: relative;
`;

const Line1StackRow = styled.div`
  height: 39px;
  flex-direction: row;
  display: flex;
  margin-top: 38px;
  margin-left: 71px;
  margin-right: 71px;
`;

const IcuBedsAvailable = styled.span`
  font-family: Roboto;
  color: rgba(0,0,0,1);
  font-size: 20px;
  font-weight: regular;
  font-style: normal;
`;

const IcuBedsOccupied = styled.span`
  font-family: Roboto;
  color: rgba(0,0,0,1);
  font-size: 20px;
  font-weight: regular;
  font-style: normal;
  margin-left: 161px;
`;

const IcuBedsAvailableRow = styled.div`
  height: 20px;
  flex-direction: row;
  display: flex;
  margin-top: 44px;
  margin-left: 67px;
  margin-right: 61px;
`;

const Icuavail = styled.span`
  font-family: Roboto;
  color: rgba(0,0,0,1);
  font-size: 30px;
  font-weight: regular;
  font-style: normal;
`;

const Icuocup = styled.span`
  font-family: Roboto;
  color: rgba(0,0,0,1);
  font-size: 30px;
  font-weight: regular;
  font-style: normal;
  margin-left: 294px;
`;

const IcuavailRow = styled.div`
  height: 30px;
  flex-direction: row;
  display: flex;
  margin-top: 30px;
  margin-left: 134px;
  margin-right: 129px;
`;

const Line3 = styled.div`
  width: 160px;
  height: 10px;
  background-color: rgba(0,0,0,1);
`;

const Line4 = styled.div`
  width: 160px;
  height: 10px;
  background-color: rgba(0,0,0,1);
  margin-left: 168px;
`;

const Line3Row = styled.div`
  height: 10px;
  flex-direction: row;
  display: flex;
  margin-top: 4px;
  margin-left: 71px;
  margin-right: 66px;
`;

const MaximumCapacity = styled.span`
  font-family: Roboto;
  color: rgba(0,0,0,1);
  font-size: 20px;
  font-weight: regular;
  font-style: normal;
  margin-top: 39px;
  margin-left: 226px;
`;

const LoremIpsum8 = styled.span`
  font-family: Roboto;
  color: rgba(0,0,0,1);
  font-size: 30px;
  font-weight: regular;
  font-style: normal;
  margin-top: 33px;
  margin-left: 287px;
`;

const Line5 = styled.div`
  width: 160px;
  height: 10px;
  background-color: rgba(0,0,0,1);
  margin-left: 232px;
`;

export default Home;
