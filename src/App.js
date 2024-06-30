import {StyledContainer} from "./components/Styles";
import React from 'react';
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import EmailSent from "./pages/EmailSent";
import FormData from "./pages/FormData";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { connect } from "react-redux";
import ForgottenPassword from "./pages/forgottenPassword";
import PasswordReset from "./pages/PasswordReset";
import ResponsePage from "./pages/ResponsePage";
import ResponsePageSuccess from "./pages/ResponsePageSuccess";
import AuthRoute from "./components/AuthRoutes";

function App({checked}) {
  return (
    <Router>
      {checked &&
        <StyledContainer>
        <Routes>

          <Route path="/forgottenPassword" element={<ForgottenPassword/>}></Route>
          <Route path="/resetPassword/:userId?/:resetString?" element={<PasswordReset/>}></Route>
          <Route path="/emailsent/:userEmail?/:reset?" element={<EmailSent/>}></Route>
            <Route path="/response/:message?/:orderID?/:status?" element={<ResponsePage />}></Route>
            <Route path="/responseSuccess/:status?/:responseData?/:gateWayResponseID?/:gateWayID?/:gateAuthCode?/:ORDERID?/:customerID?/:OrderNotes?" element={<ResponsePageSuccess />} />
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/login/:userEmail?" element={<Login/>}></Route>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/entryData" element={<FormData/>}></Route>
        </Routes>
        </StyledContainer>
      }
    </Router>
    
    
    
  );
}

const mapStateToProps=({session})=>({
  checked: session.checked
})

export default connect(mapStateToProps)(App);