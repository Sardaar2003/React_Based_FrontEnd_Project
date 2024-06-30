import React from 'react';
import { StyledTitle,Avatar,StyledButton,ButtonGroup,StyledFormArea, ExtraText } from '../components/Styles';
import logo from "../assets/logo192.png";

//React Router
import {useParams } from 'react-router-dom';

const ResponsePageSuccess=()=>{
    // const history = useNavigate();
    const { status,responseData, gateWayResponseID, gateWayID, gateAuthCode, ORDERID, customerID, OrderNotes } = useParams();
    return (
        <div>
            <div style={{
                position:"absolute",
                top:0,
                left:0,
                backgroundColor:"transparent",
                width:"100%",
                padding:"15px",
                display:"flex",
                justifyContent:"flex-start",
            }}>
                
            </div>
            <StyledFormArea>
                    <Avatar image={logo}></Avatar>
                    <StyledTitle size={65}>Response From the Server</StyledTitle>
                    <ExtraText><b>RESPONSE STATUS FROM THE CLIENT SERVER : </b>{status}</ExtraText>
                    <ExtraText><b>RESPONSE DATA : </b>{responseData}</ExtraText>
                    <ExtraText><b>GATEWAY RESPONSE ID : </b>{gateWayResponseID }</ExtraText>
                    <ExtraText><b>GATEWAY ID : </b>{gateWayID }</ExtraText>
                    <ExtraText><b>GATEWAY AUTH ID : </b>{gateAuthCode }</ExtraText>
                    <ExtraText><b>ORDER ID : </b>{ORDERID }</ExtraText>
                    <ExtraText><b>CUSTOMER ID : </b>{customerID }</ExtraText>
                    <ExtraText><b>ORDER NOTES : </b>{OrderNotes }</ExtraText>
                    <ButtonGroup>
                        <StyledButton to={`/dashboard`}>HOME</StyledButton>
                        <StyledButton to={`/entryData`}>RE-ENTRY OF DATA</StyledButton>
                    </ButtonGroup>
                </StyledFormArea>
            
            
        </div>
    );
}

export default (ResponsePageSuccess);