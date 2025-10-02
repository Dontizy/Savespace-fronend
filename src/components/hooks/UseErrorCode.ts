import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../store/userStore";
import { toast } from "sonner";


const UseErrorCode = () => {
  const [errorMessage, SetErrorMessage] = useState<string>()
  const { logout } = useUserStore()
  const navigate = useNavigate()
  
  interface checkError{
    status?: number;
    message:string;
    networkMessage:string
  }
  
  // const getError = (errorCode:number, message:string, resMessage?:string) => {
  const getError = (errorCode:number, message:string, resMessage?:string) => {
    if (errorCode === 401) {
      if (message === "Invalid credential") {
        console.log("useHook", message);
        return SetErrorMessage(message)
      }
      if (message === "Unauthorized") {
        logout()
        toast.error("Session expired pls, login to continue")
      }
      logout()
      navigate('/login')
    }

    if (errorCode === 400) {
      toast.error(message)
    }

    if (errorCode === 500) {
      toast.error('Server down, pls try again later')
    }

    if(resMessage === "Network Error"){
      toast.error(resMessage)
    }
    
  }
  // const getError = (error:{data:checkError}) => {
  //   const 
  //   if (errorCode === 401) {
  //     if (message === "Invalid credential") {
  //       console.log("useHook", message);
  //       return SetErrorMessage(message)
  //     }
  //     if (message === "Unauthorized") {
  //       logout()
  //       return SetErrorMessage(message)
  //     }
  //     logout()
  //     navigate('/login')
  //   }

  //   if (errorCode === 400) {
  //     return SetErrorMessage(message)
  //   }

  //   if (errorCode === 500) {
  //     return SetErrorMessage('Server down, pls try again later')
  //   }

  // }
  //errorCode.response.data.message
  return { errorMessage, getError }
}



export default UseErrorCode