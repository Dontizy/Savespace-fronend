import { Outlet } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";


const SharedLayout = () => {
    return (
        <div className="p-0 m-0 bg-blue-50">
            <Navbar/>
                <Outlet/>
            <Footer/>
        </div>
    )
}

export default SharedLayout