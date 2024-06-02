import React from 'react';
import {StyledFormArea,StyledFormButton, Avatar,StyledTitle,colors,ButtonGroup,CopyRightText} from "../components/Styles";
import logo from "../assets/logo192.png";

//Formik Import 
import {Formik,Form} from "formik";
import { TextInput } from '../components/FormLib';

//Login Icons
import {FiLock} from "react-icons/fi";

//Validation of Inputs
import * as yup from "yup";

//Loader and Spinner
import {TailSpin} from "react-loader-spinner";

//Auth and Redux
import {connect} from "react-redux";
import { resetPassword } from '../Auth/Action/UserAction';
import {useNavigate,useParams } from "react-router-dom";

const PasswordReset=({resetPassword})=>{
    const history = useNavigate();
    const { userId,resetString } = useParams();
    return (
        <div>
            <StyledFormArea>
                <Avatar image={logo}></Avatar>
                <StyledTitle color={colors.primary} size={30}>PASSWORD RESET</StyledTitle>
                <Formik initialValues={
                    {
                        newPassword: "",
                        confirmNewPassword: "",
                        userId,
                        resetString
                    }
                }
                onSubmit={
                    (values,{setSubmitting,setFieldError})=>{
                    console.log(values);
                    resetPassword(values,history,setFieldError,setSubmitting);
                    }
                }
                validationSchema={
                    yup.object({
                        newPassword: yup.string().min(8,"SHOULD BE OF MINIMUM 8 CHARACTERS").max(30,"SHOULD BE WITHIN 30 CHARACTERS").required("PASSWORD IS REQUIRED"),
                        confirmNewPassword: yup.string().required("REQUIRED").oneOf([yup.ref("newPassword")], "PASSWORD MUST MATCH"),
                    })
                }>
                    {({isSubmitting})=>(
                        <Form>
                            
                            <TextInput name="newPassword" type="password" label="NEW PASSWORD" placeholder="********" icon={<FiLock></FiLock>}></TextInput>
                            <TextInput name="confirmNewPassword" type="password" label="CONFIRM NEW PASSWORD" placeholder="********" icon={<FiLock></FiLock>}></TextInput>
                            <ButtonGroup>
                                {!isSubmitting && (<StyledFormButton type="submit">RESET</StyledFormButton>)}
                                {
                                    isSubmitting && (
                                        <TailSpin color="#1B1A55" height={49} width={100}></TailSpin>
                                    )
                                }
                            </ButtonGroup>
                        </Form>
                    )}
                </Formik>
            </StyledFormArea>
            <CopyRightText>All Rights reserved &copy; 2024</CopyRightText>
        </div>
    );
}
export default connect(null,{resetPassword})(PasswordReset);