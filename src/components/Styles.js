import styled from "styled-components";
import background from "../assets/bg1.jpg";
import {Link} from "react-router-dom";
export const colors={
    primary:"#fff",
    theme:"#BE185D",
    light1:"#F3F4F6",
    light2:"#E5E7EB",
    dark1:"#1F2937",
    dark2:"#4B5563",
    dark3:"#9CA3AF",
    red:"#DC2626"
}


export const StyledContainer=styled.div`
    margin: 0;
    min-height: 100vh;
    display : flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(0deg,rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${background});
    background-size: cover;
    background-attachment: fixed;
    color:white;
`;

// Home Components

export const StyledTitle=styled.h2`
    font-size: ${(props)=>props.size}px;
    text-align: center;
    color: ${(props)=> props.color?props.color:colors.primary};
    padding: 5px;
    margin-bottom: 20px; 
    `;

export const StyledSubTitle=styled.p`
    font-size: ${(props)=>props.size}px;
    text-align: center;
    color: ${(props)=> props.color?props.color:colors.primary};
    padding: 5px;
    margin-bottom: 25px; 
`;

export const Avatar=styled.div`
    width: 85px;
    height: 85px;
    border-radius: 50px;
    background-image: url(${props=>props.image});
    background-size: cover;
    background-position: center;
    margin: auto;
    `;

export const StyledButton=styled(Link)`
    padding: 10px;
    width: 150px;
    background-color: transparent;
    font-size: 16px;
    border: 3px solid #1B1A55;
    border-radius: 25px;
    color:#1B1A55;
    font-weight: bold;
    text-decoration: none;
    text-align: center;
    outline: 0;
    transition: ease-in-out 0.3s;
    margin-bottom:10px;

    &:hover{
        background-color: #1B1A55;
        color: white;
        font-weight: bold;
        cursor: pointer;
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    flex-direction: column; /* Change this line */
    align-items: center;
    margin-bottom: 20px;
    margin-top: 25px;
`;
// Input Related Styles
export const StyledInputText=styled.input`
    width: 350px;
    padding: 15px;
    padding-left: 50px;
    font-size: 17px;
    letter-spacing: 1px;
    color: black;
    border: 0px;
    border-radius: 10px;
    display: block;
    margin: 5px auto 10px auto;
    transition: ease-in-out 0.3s;

    ::placeholder{
        color:black;
    }

    ${(props)=> props.onInvalid && `background-color: ${colors.red}; color: ${colors.primary};`}
`;

export const StyledLabel=styled.p`
    text-align: left;
    font-size: 13px;
    font-weight: bold;
`;

export const StyledFormArea=styled.div`
    background: rgba( 255, 255, 255, 0.3 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 5px );
    -webkit-backdrop-filter: blur( 1px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    text-align: center;
    padding: 45px 55px;
    margin: 20px;
    top:20%;
`;

export const StyledFormButton = styled.button`
    padding: 10px;
    width: 150px;
    background-color: transparent;
    font-size: 16px;
    border: 3px solid #1B1A55;
    border-radius: 25px;
    color: #1B1A55;
    font-weight: bold;
    text-decoration: none;
    text-align: center;
    transition: ease-in-out 0.3s;
    outline: 0;
    margin-bottom: 10px; /* Add this line */

    &:hover{
        background-color: #1B1A55;
        color: white;
        cursor: pointer;
    }
`;

//Icons 
export const StyledIcon=styled.p`
    color: ${colors.dark1};
    position: absolute;
    font-size: 21px;
    top: 35px;
    ${(props)=>props.right && `right: 15px;`}
    ${(props)=>!props.right && `left: 15px;`}

`;

//Error Messages display
export const ErrorMessage=styled.div`
    font-size: 15px;
    font-weight: bold;
    color: ${colors.red};
    margin-top: -5px;
    margin-bottom: 10px;
    text-align: center;
`;

export const ExtraText=styled.p`
    font-size: ${(props)=>props.size}px;
    text-align: center;
    color: ${(props)=>(props.color? props.color : colors.white)};
    padding: 3px;
    margin-top: 20px;
`;

export const TextLink=styled(Link)`
    text-decoration: none;
    color:#FF7F3E;
    transition: ease-in-out 0.3s;

    &:hover{
        text-decoration: underline;
        letter-spacing: 2px;
        font-weight: bold;
    }
`;

// CopyRight Text

export const CopyRightText=styled.p`
    padding: 5px;
    margin: 20px;
    text-align: center;
    color: white;

`;