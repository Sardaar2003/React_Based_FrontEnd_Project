import React from 'react';
import {StyledFormArea,StyledFormButton, Avatar,StyledTitle,colors,ButtonGroup, CopyRightText} from "../components/Styles";
import logo from "../assets/logo192.png";

//Formik Import 
import {Formik,Form} from "formik";
import { TextInput } from '../components/FormLib';

//Login Icons
import {FiMail} from "react-icons/fi";

//Validation of Inputs
import * as yup from "yup";

//Loader and Spinner
import {TailSpin} from "react-loader-spinner";

//Auth and Redux
import {connect} from "react-redux";
import { forgottenPassword } from '../Auth/Action/UserAction';
import {useNavigate,useParams } from "react-router-dom";

const ForgottenPassword = ({forgottenPassword})=>{
    const history = useNavigate();
    const { userEmail } = useParams();
    return (
        <div>
            <StyledFormArea>
                <Avatar image={logo}></Avatar>
                <StyledTitle color={colors.primary} size={30}>PASSWORD RESET</StyledTitle>
                <Formik initialValues={
                    {
                    email:userEmail,
                    redirectUrl:"http://localhost:3000/resetPassword",
                    }
                }
                onSubmit={
                    (values,{setSubmitting,setFieldError})=>{
                    console.log(values);
                    forgottenPassword(values,history,setFieldError,setSubmitting);
                    }
                }
                validationSchema={
                    yup.object({
                        email: yup.string().email("INVALID EMAIL ADDRESS").required("REQUIRED EMAIL ADDRESS"),
                    })
                }>
                    {({isSubmitting})=>(
                        <Form>
                            <TextInput name="email" type="text" label="ENTER YOUR EMAIL ADDRESS" placeholder="abcd@example.com" icon={<FiMail></FiMail>}></TextInput>
                            <ButtonGroup>
                                {!isSubmitting && (<StyledFormButton type="submit">SUBMIT</StyledFormButton>)}
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
export default connect(null,{forgottenPassword})(ForgottenPassword);