import React from 'react';
import { StyledTitle,StyledSubTitle,Avatar,StyledButton,ButtonGroup, StyledFormArea } from '../components/Styles';
import logo from "../assets/logo192.png";
const Home=()=>{
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
                <StyledTitle size={65}>Welcome to the TechVista Website</StyledTitle>
                <StyledSubTitle size={27}>Feel Free to Explore our page</StyledSubTitle>
                <ButtonGroup>
                    <StyledButton to="/login">LOGIN</StyledButton>
                    <StyledButton to="/signup">SIGNUP</StyledButton>
                </ButtonGroup>
            </StyledFormArea>
            
        </div>
    );
}
export default Home;