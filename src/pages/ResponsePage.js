import React from 'react';
import { StyledTitle,Avatar,StyledButton,ButtonGroup,StyledFormArea, ExtraText } from '../components/Styles';
import logo from "../assets/logo192.png";

//React Router
import {useParams } from 'react-router-dom';

const ResponsePage=()=>{
    // const history = useNavigate();
    const { message,orderID,status } = useParams();
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
                <Avatar image={logo}></Avatar>
            </div>
            <StyledFormArea>
                    <StyledTitle size={65}>Response From the Server</StyledTitle>
                <ExtraText><b>RESPONSE STATUS FROM THE CLIENT SERVER : </b>FAILURE</ExtraText>
                {orderID != null && (
                        <ExtraText>
                            <b>ORDER ID : </b>{orderID}
                        </ExtraText>
                        )}

                    <ExtraText><b>RESPONSE MESSAGE : </b>{message}</ExtraText>
                
                    <ButtonGroup>
                        <StyledButton to={`/dashboard`}>HOME</StyledButton>
                        <StyledButton to={`/entryData`}>RE-ENTRY OF DATA</StyledButton>
                    </ButtonGroup>
                </StyledFormArea>
            
            
        </div>
    );
}

export default (ResponsePage);