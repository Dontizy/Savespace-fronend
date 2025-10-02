import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ActionButtons from "./ActionButtons";
import { useUserStore } from "../store/userStore";
import {Toaster} from 'sonner'

const SharedLayout = () => {
    const {isAuth} = useUserStore()
    return (
        <div className="pt-10 m-0 bg-blue-50">
            <Toaster position="top-left" toastOptions={{style:{
                marginTop:"30px"
            }}}/>
            <Navbar />
           {isAuth && <ActionButtons />}
            
            <Outlet />
            <Footer />
        </div>
    )
}

export default SharedLayout