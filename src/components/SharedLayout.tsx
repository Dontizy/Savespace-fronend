import { Outlet } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";


const SharedLayout = () => {
    return (
        <>
            <Navbar/>
                <Outlet/>
            <Footer/>
        </>
    )
}

export default SharedLayout