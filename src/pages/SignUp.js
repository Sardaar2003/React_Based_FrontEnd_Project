import React from 'react';
import {StyledFormArea,StyledFormButton, Avatar,StyledTitle,colors,ButtonGroup, ExtraText, TextLink, CopyRightText} from "../components/Styles";
import logo from "../assets/logo192.png";

//Formik Import 
import {Formik,Form} from "formik";
import { TextInput } from '../components/FormLib';

//Login Icons
import {FiMail,FiLock,FiUser,FiCalendar} from "react-icons/fi";

//Validation of Inputs
import * as yup from "yup";

//Loader and Spinner
import {TailSpin} from "react-loader-spinner";

//Auth and Redux
import {connect} from "react-redux";
import { signupUser } from '../Auth/Action/UserAction';
import {useNavigate } from "react-router-dom";

const SignUp=({signupUser})=>{
    const history=useNavigate();
    return (
        <div>
            <StyledFormArea>
                <Avatar image={logo}></Avatar>
                <StyledTitle color={colors.primary} size={30}>MEMBER SIGNUP</StyledTitle>
                <Formik initialValues={
                    {
                    email:"",
                    password:"",
                    repeatPassword:"",
                    dateOfBirth:"",
                    name:"",
                    }
                }
                onSubmit={
                    (values,{setSubmitting,setFieldError})=>
                    {
                        console.log(values);
                        signupUser(values,history,setFieldError,setSubmitting);
                    }
                }
                validationSchema={
                    yup.object({
                        email: yup.string().email("INVALID EMAIL ADDRESS").required("REQUIRED EMAIL ADDRESS"),
                        password: yup.string().min(8,"SHOULD BE OF MINIMUM 8 CHARACTERS").max(30,"SHOULD BE WITHIN 30 CHARACTERS").required("PASSWORD IS REQUIRED"),
                        name: yup.string().required("REQUIRED FIELD"),
                        dateOfBirth: yup.date().required("REQUIRED FIELD"),
                        repeatPassword: yup.string().required("REPEAT PASSWORD IS REQUIRED").oneOf([yup.ref("password")],"PASSWORD DOES NOT MATCH"),
                    })
                }>
                    {({isSubmitting})=>(
                        <Form>
                            <TextInput name="name" type="text" label="FULL NAME" placeholder="Adam Sameul" icon={<FiUser></FiUser>}></TextInput>
                            <TextInput name="email" type="text" label="EMAIL ADDRESS" placeholder="abcd@example.com" icon={<FiMail></FiMail>}></TextInput>
                            <TextInput name="dateOfBirth" type="text" label="DATE OF BIRTH" icon={<FiCalendar></FiCalendar>}></TextInput>
                            <TextInput name="password" type="password" label="PASSWORD" placeholder="********" icon={<FiLock></FiLock>}></TextInput>
                            <TextInput name="repeatPassword" type="password" label="REPEAT PASSWORD" placeholder="********" icon={<FiLock></FiLock>}></TextInput>
                            <ButtonGroup>
                                {!isSubmitting && (<StyledFormButton type="submit">SIGNUP</StyledFormButton>)}
                                {
                                    isSubmitting && (
                                        <TailSpin color="#1B1A55" height={49} width={100}></TailSpin>
                                    )
                                }
                            </ButtonGroup>
                        </Form>
                    )}
                </Formik>
                <ExtraText>Already have an Account ? <TextLink to="/login">LOGIN</TextLink></ExtraText>
            </StyledFormArea>
            <CopyRightText>All Rights reserved &copy; 2024</CopyRightText>
        </div>
    );
}
export default connect(null,{signupUser})(SignUp);