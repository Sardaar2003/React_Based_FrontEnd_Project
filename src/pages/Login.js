import React from 'react';
import {StyledFormArea,StyledFormButton, Avatar,StyledTitle,colors,ButtonGroup, ExtraText, TextLink, CopyRightText} from "../components/Styles";
import logo from "../assets/logo192.png";

//Formik Import 
import {Formik,Form} from "formik";
import { TextInput } from '../components/FormLib';

//Login Icons
import {FiMail,FiLock} from "react-icons/fi";

//Validation of Inputs
import * as yup from "yup";

//Loader and Spinner
import {TailSpin} from "react-loader-spinner";

//Auth and Redux
import {connect} from "react-redux";
import { loginUser } from '../Auth/Action/UserAction';
import {useNavigate,useParams } from "react-router-dom";

const Login=({loginUser})=>{
    const history = useNavigate();
    const { userEmail } = useParams();
    return (
        <div>
            <StyledFormArea>
                <Avatar image={logo}></Avatar>
                <StyledTitle color={colors.primary} size={30}>MEMBER LOGIN</StyledTitle>
                <Formik initialValues={
                    {
                    email:userEmail,
                    password:"",
                    }
                }
                onSubmit={
                    (values,{setSubmitting,setFieldError})=>{
                    console.log(values);
                    loginUser(values,history,setFieldError,setSubmitting);
                    }
                }
                validationSchema={
                    yup.object({
                        email: yup.string().email("INVALID EMAIL ADDRESS").required("REQUIRED EMAIL ADDRESS"),
                        password: yup.string().min(8,"SHOULD BE OF MINIMUM 8 CHARACTERS").max(30,"SHOULD BE WITHIN 30 CHARACTERS").required("PASSWORD IS REQUIRED"),
                    })
                }>
                    {({isSubmitting})=>(
                        <Form>
                            <TextInput name="email" type="text" label="EMAIL ADDRESS" placeholder="abcd@example.com" icon={<FiMail></FiMail>}></TextInput>
                            <TextInput name="password" type="password" label="PASSWORD" placeholder="********" icon={<FiLock></FiLock>}></TextInput>
                            <ButtonGroup>
                                {!isSubmitting && (<StyledFormButton type="submit">LOGIN</StyledFormButton>)}
                                {
                                    isSubmitting && (
                                        <TailSpin color="#1B1A55" height={49} width={100}></TailSpin>
                                    )
                                }
                            </ButtonGroup>
                        </Form>
                    )}
                </Formik>
                <ExtraText>Forgot Password ? <TextLink to="/forgottenPassword">RESET PASSWORD</TextLink></ExtraText>
                <ExtraText>New Here ? <TextLink to="/signUp">SIGNUP</TextLink></ExtraText>
            </StyledFormArea>
            <CopyRightText>All Rights reserved &copy; 2024</CopyRightText>
        </div>
    );
}
export default connect(null,{loginUser})(Login);