import React from 'react';
import { StyledTitle,Avatar,StyledButton,ButtonGroup,StyledFormArea, ExtraText } from '../components/Styles';
import logo from "../assets/logo192.png";

//React Router
import {useParams } from 'react-router-dom';

const EmailSent=()=>{
    // const history = useNavigate();
    const { userEmail, reset } = useParams();
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
            {reset && userEmail && (
                    <StyledFormArea>
                    <StyledTitle size={65}>Password Reset</StyledTitle>
                    <ExtraText>An Email with your Password Reset Link has been sent to your Email ID : <b>{ userEmail}</b></ExtraText>
                    <ExtraText>Check Your Email and click on the link to reset your Password</ExtraText>
                    <ButtonGroup>
                        <StyledButton to={`/`}>HOME</StyledButton>
                    </ButtonGroup>
                </StyledFormArea>
            )}
            {
                !reset && userEmail && (
                    <StyledFormArea>
                    <StyledTitle size={65}>Account Confirmation</StyledTitle>
                    <ExtraText>An Email with your Account Confirmation Link has been sent to your Email ID : <b>{ userEmail}</b></ExtraText>
                    <ExtraText>Check Your Email and come back to proceed</ExtraText>
                    <ButtonGroup>
                        <StyledButton to={`/login/${userEmail}`}>PROCEED</StyledButton>
                    </ButtonGroup>
                </StyledFormArea>
                )
            }
            {
                !reset && !userEmail && (
                    <StyledFormArea>
                    <StyledTitle size={65}>PASSWORD RESET</StyledTitle>
                    <ExtraText>Your Password has been Reset Successfully</ExtraText>
                    <ExtraText>You May Now Login With Your New Password</ExtraText>
                    <ButtonGroup>
                        <StyledButton to={`/login`}>LOGIN</StyledButton>
                    </ButtonGroup>
                </StyledFormArea>
                )
            }
            
            
        </div>
    );
}

export default (EmailSent);