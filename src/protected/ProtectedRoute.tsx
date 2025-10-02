import type { JSX } from "react"
import { useUserStore } from "../components/store/userStore";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProp{
    children:JSX.Element;
}


const ProtectedRoute = ({children}:ProtectedRouteProp) => {
    const {isAuth} = useUserStore()
     
    if(!isAuth){
        return <Navigate to='/login' replace/>
    }
  return <>{children}</>;
}

export default ProtectedRoute