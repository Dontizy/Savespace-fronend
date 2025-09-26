import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ActionButtons from "./ActionButtons";
import { useUserStore } from "../store/userStore";

const SharedLayout = () => {
    // const isLoggedIn = useUserStore((state) => state.isLoggedIn)
    return (
        <div className="pt-10 m-0 bg-blue-50">
            <Navbar />
            <ActionButtons />
            {/* {
                isLoggedIn && <ActionButtons />
            } */}
            <Outlet />
            <Footer />
        </div>
    )
}

export default SharedLayout