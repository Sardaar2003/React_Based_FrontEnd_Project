import axios from "axios";

import { sessionService } from "redux-react-session";


export const loginUser=(credentials,history,setFieldError,setSubmitting)=>{

    return async ()=>
    {
        //Make Checks and get some Data

        await axios.post("https://react-based-project-updation.onrender.com/user/signIn",credentials,
            {
                headers:{
                    "Content-Type":"application/json"
                }
            }
        ).then((response)=>
            {
                const {data}=response;
                console.log(data);
                if (data.status ==="FAILED"){
                    const { message }=data;

                    if (message.includes("User")){
                        setFieldError("email",message);
                        setFieldError("password",message);
                    }
                    else if (message.includes("Password")){
                        setFieldError("password",message);
                    }
                    else if (message.includes("Email")){
                        setFieldError("email",message);
                    }

                }
                else if (data.status === "SUCCESS"){
                    const userData=data.data[0];
                    const token=userData._id;
                    console.log(data);
                    sessionService.saveSession(token).then(()=>
                        {
                            sessionService.saveUser(userData).then(()=>
                                {
                                    history("/dashboard");
                                }).catch(err=>console.error(err))
                        }).catch(err=>console.error(err))
                }
                //Complete Submission
                setSubmitting(false);

            }
        ).catch((err)=>
            {
                console.error(err);
            }
        )
    }
}

export const signupUser=(credentials,history,setFieldError,setSubmitting)=>{
    return async (dispatchEvent)=>
        {

            await axios.post("https://react-based-project-updation.onrender.com/user/signUp",credentials,
                {
                    headers:{
                        "Content-Type":"application/json"
                    }
                }
            ).then((response)=>
            {
                const {data}=response;
                if (data.status==="FAILED")
                    {
                        const {message}=data;
                        if(message.includes("Name"))
                            {
                                setFieldError("name",message);
                            }
                        else if (message.includes("Email"))
                            {
                                setFieldError("email",message);
                            }
                        else if (message.includes("DateOfBirth"))
                            {
                                setFieldError("dateOfBirth",message);
                            }
                        else if (message.includes("Password"))
                            {
                                setFieldError("password",message);
                            }
                        else if (message.includes("User")){
                            setFieldError("name",message);
                            setFieldError("email",message);
                            setFieldError("dateOfBirth",message);
                            setFieldError("password",message);
                        }
                        
                            
                    }
                else if (data.status==="PENDING")
                    {
                    // Email has to be verified
                        const {email}=credentials;
                        history(`/emailsent/${email}`);
                    }
                else if (data.status==="SUCCESS")
                    {
                        const {email,password}=credentials;
                        dispatchEvent(loginUser({email,password},history,setFieldError,setSubmitting));
                }
                // Complete Submission
                setSubmitting(false);
            }
                ).catch((err)=>console.error(err));
        }
}

export const logoutUser=(history)=>
    {
        return async ()=>
            {
                await sessionService.deleteSession();
                await sessionService.deleteUser();
                history("/");
            }

}
    

export const forgottenPassword=(credentials,history,setFieldError,setSubmitting)=>{

    return async ()=>
    {
        //Make Checks and get some Data

        await axios.post("https://react-based-project-updation.onrender.com/user/requestPasswordReset",credentials,
            {
                headers:{
                    "Content-Type":"application/json"
                }
            }
        ).then((response)=>
            {
                const {data}=response;
                console.log(data);
                if (data.status ==="FAILED"){
                    const { message }=data;

                    if (message.includes("Email") || message.includes("Account") || message.includes("Password")){
                        setFieldError("email",message);
                    }
                }
                else if (data.status === "PENDING"){
                    const { email } = credentials;
                    history(`/emailsent/${email}/${true}`);
                }
                //Complete Submission
                setSubmitting(false);

            }
        ).catch((err)=>
            {
                console.error(err);
            }
        )
    }
}
export const resetPassword=(credentials,history,setFieldError,setSubmitting)=>{

    return async ()=>
    {
        //Make Checks and get some Data

        await axios.post("https://react-based-project-updation.onrender.com/user/resetPassword",credentials,
            {
                headers:{
                    "Content-Type":"application/json"
                }
            }
        ).then((response)=>
            {
                const {data}=response;
                console.log(data);
                if (data.status ==="FAILED"){
                    const { message }=data;

                    if (message.includes("Password")){
                        setFieldError("newPassword",message);
                    }
                }
                else if (data.status === "SUCCESS"){
                    history(`/emailsent`);
                }
                //Complete Submission
                setSubmitting(false);

            }
        ).catch((err)=>
            {
                console.error(err);
            }
        )
    }
}
