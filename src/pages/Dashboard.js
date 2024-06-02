import React from 'react';
import { StyledTitle,Avatar,StyledButton,ButtonGroup,StyledFormArea } from '../components/Styles';
import logo from "../assets/logo192.png";

//Auth and Redux
import {connect} from "react-redux";
import { logoutUser } from '../Auth/Action/UserAction';
import { useNavigate } from 'react-router-dom';

const Dashboard=({logoutUser,user})=>{
    const history = useNavigate();
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
                <StyledTitle size={65}>Welcome, {user.name}</StyledTitle>
                <ButtonGroup>
                    <StyledButton onClick={()=>logoutUser(history)}>LOGOUT</StyledButton>
                </ButtonGroup>
            </StyledFormArea>
            
        </div>
    );
}

const mapStateToProps=({session})=>({
    user:session.user
})
export default connect(mapStateToProps,{logoutUser})(Dashboard);