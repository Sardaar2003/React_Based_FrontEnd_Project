import React from 'react';
import { useField } from 'formik';
import {
    StyledInputText,
    StyledLabel,
    StyledIcon,
    ErrorMessage,
} from "./Styles";

import {useState} from "react";

//Eye Icon for Password
import { FiEye,FiEyeOff } from 'react-icons/fi';

export const TextInput=({icon,...props})=>{
    const [field,meta]=useField(props);
    const [show,setShow]=useState(false);
    return (
    <div style={{position:"relative"}}>
        <StyledLabel htmlfor={props.name}>{props.label}</StyledLabel>
        {props.type!=="password" && <StyledInputText onInvalid={meta.touched && meta.error} {...field} {...props}></StyledInputText>}
        {props.type==="password" && (
            <StyledInputText onInvalid={meta.touched && meta.error} {...field} {...props} type={show?"text":"password"}></StyledInputText>
        )}
        <StyledIcon>{icon}</StyledIcon>
        {
            props.type==="password" && 
            <StyledIcon onClick={()=>setShow(!show)} right>
                {show && <FiEye></FiEye>}
                {!show && <FiEyeOff></FiEyeOff>}
            </StyledIcon>
        }
        {
            meta.touched && meta.error ? (<ErrorMessage>{meta.error}</ErrorMessage>):(<ErrorMessage style={{visibility:"hidden"}}>.</ErrorMessage>)
        }
    </div>
    );
}