import React from 'react';
import {StyledFormArea,StyledFormButton, Avatar,StyledTitle,colors,ButtonGroup, ExtraText, TextLink, CopyRightText, StyledButton} from "../components/Styles";
import logo from "../assets/logo192.png";

//Formik Import 
import {Formik,Form} from "formik";
import { TextInput } from '../components/FormLib';

//Login Icons
import { FiMail, FiLock, FiPhoneCall, FiUser } from "react-icons/fi";
import { BiSolidOffer } from "react-icons/bi";
import { FaMapMarkerAlt, FaCity, FaCreditCard, FaCcVisa } from "react-icons/fa";
import { MdCalendarMonth } from "react-icons/md";
import { BsCalendarMonthFill } from "react-icons/bs";
import { FaAddressBook, } from "react-icons/fa6";
import { MdPlace } from "react-icons/md";

//Validation of Inputs
import * as yup from "yup";

//Loader and Spinner
import {TailSpin} from "react-loader-spinner";

//Auth and Redux
import {connect} from "react-redux";
import { apiCall01 } from '../Auth/Action/UserAction';
import {useNavigate,useParams } from "react-router-dom";

const FormData=({apiCall01})=>{
    const history = useNavigate();
    // const { userEmail } = useParams();
    return (
        <div>
            <StyledFormArea>
                <Avatar image={logo}></Avatar>
                <StyledTitle color={colors.primary} size={30}>SUBLYTICS</StyledTitle>
                <Formik initialValues={
                    {
                        offerId:"",
                        emailId:"",
                        phoneNumber: "",
                        firstName: "",
                        lastName: "",
                        countryCode: "",
                        addressCode: "",
                        cityName: "",
                        stateName: "",
                        zipCode: "",
                        cardNumber: "",
                        cardCVV: "",
                        expiryMonth: "",
                        expiryYear:"",
                    }
                }
                onSubmit={
                    (values,{setSubmitting,setFieldError})=>{
                    console.log(values);
                    apiCall01(values,history,setFieldError,setSubmitting);
                    }
                }
                validationSchema={
                    yup.object({
                        offerId: yup.number().required('OFFER ID IS REQUIRED').oneOf([14, 32], 'OFFER ID INVALID'),
                        emailId: yup.string().email("INVALID EMAIL ADDRESS").required("REQUIRED EMAIL ADDRESS"),
                        phoneNumber: yup.string().matches(/^[0-9]{10}$/, "INVALID PHONE NUMBER").required("REQUIRED PHONE NUMBER"),
                        firstName: yup.string().required("REQUIRED FIRST NAME"),
                        lastName: yup.string().required("REQUIRED LAST NAME"),
                        countryCode: yup.string().length(2, "INVALID COUNTRY CODE LENGTH 2").required("REQUIRED COUNTRY CODE"),
                        addressCode: yup.string().required("REQUIRED ADDRESS"),
                        cityName: yup.string().required("REQUIRED CITY NAME"),
                        stateName: yup.string().required("REQUIRED STATE NAME"),
                        zipCode: yup.string().matches(/^[0-9]{5}$/, "INVALID ZIP CODE").required("REQUIRED ZIP CODE"),
                        cardNumber: yup.string().matches(/^[0-9]{16}$/, "INVALID CARD NUMBER").required("REQUIRED CARD NUMBER"),
                        cardCVV: yup.string().matches(/^[0-9]{3}$/, "INVALID CARD CVV").required("REQUIRED CARD CVV"),
                        expiryMonth: yup.number().min(1, "INVALID MONTH").max(12, "INVALID MONTH").required("REQUIRED EXPIRY MONTH"),
                        expiryYear: yup.number().min(new Date().getFullYear(), "INVALID YEAR").required("REQUIRED EXPIRY YEAR")
                    })
                }>
                    {({isSubmitting,resetForm})=>(
                        <Form>
                            <TextInput name="offerId" type="number" label="OFFER ID" placeholder="21" icon={<BiSolidOffer></BiSolidOffer>}></TextInput>
                            <TextInput name="emailId" type="text" label="EMAIL ADDRESS" placeholder="abcd@example.com" icon={<FiMail></FiMail>}></TextInput>
                            <TextInput name="phoneNumber" type="tel" label="PHONE NUMBER" placeholder="9840854785" icon={<FiPhoneCall></FiPhoneCall>}></TextInput>
                            <TextInput name="firstName" type="text" label="FIRST NAME" placeholder="Anil" icon={<FiUser ></FiUser>}></TextInput>
                            <TextInput name="lastName" type="text" label="LAST NAME" placeholder="Kumar" icon={<FiUser ></FiUser>}></TextInput>
                            <TextInput name="countryCode" type="text" label="COUNTRY CODE" placeholder="US" icon={<FaMapMarkerAlt ></FaMapMarkerAlt>}></TextInput>
                            <TextInput name="addressCode" type="text" label="ADDRESS" placeholder="No 12 Xavier Road" icon={<FaAddressBook ></FaAddressBook>}></TextInput>
                            <TextInput name="cityName" type="text" label="CITY" placeholder="New York" icon={<FaCity ></FaCity>}></TextInput>
                            <TextInput name="stateName" type="text" label="STATE" placeholder="Texas" icon={<MdPlace ></MdPlace>}></TextInput>
                            <TextInput name="zipCode" type="number" label="ZIP CODE" placeholder="09323" icon={<FaMapMarkerAlt ></FaMapMarkerAlt>}></TextInput>
                            <TextInput name="cardNumber" type="number" label="CARD NUMBER" placeholder="4323234223212399" icon={<FaCreditCard ></FaCreditCard>}></TextInput>
                            <TextInput name="cardCVV" type="number" label="CARD CVV" placeholder="239" icon={<FaCcVisa ></FaCcVisa>}></TextInput>
                            <TextInput name="expiryMonth" type="number" label="EXPIRY MONTH" placeholder="12" icon={<MdCalendarMonth ></MdCalendarMonth>}></TextInput>
                            <TextInput name="expiryYear" type="number" label="EXPIRY YEAR" placeholder="2025" icon={<BsCalendarMonthFill></BsCalendarMonthFill>}></TextInput>
                            <ButtonGroup>
                                {/* {!isSubmitting && (<><StyledFormButton type="submit">SUBMIT</StyledFormButton></>)}
                                {
                                    isSubmitting && (
                                        <TailSpin color="#1B1A55" height={49} width={100}></TailSpin>
                                    )
                                } */}
                                {!isSubmitting && (<>
                                    <StyledFormButton type="submit">SUBMIT</StyledFormButton>
                                    <StyledButton type="button" to={"/dashboard"}>BACK</StyledButton>
                                </>)}
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
// export default FormData;
export default connect(null,{apiCall01})(FormData);