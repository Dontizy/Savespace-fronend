import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.png'


const Navbar = () => {
    return (
        <>
            <header className="flex bg-gradient-to-r  to-indigo-600 from-blue-500 h-12 p-6 py-2 text-white bg-gray-300 items-center justify-between">
                <div className="h-10 w-20 flex justify-center items-center">
                    <img className="" width="100" height="100" src={Logo} alt=""/>
                </div>

                <nav className="flex gap-1 items-center">
                    <NavLink to="/addnote" className="p-2"><span className="text-sm">Add Note</span></NavLink>
                    <NavLink to="/home" className="p-2"><span className="text-sm">Home</span></NavLink>
                    <NavLink to="/addbookmark" className="p-2"><span className="text-sm">Add Bookmark</span></NavLink>
                    <NavLink to="/signup" className="p-2"><span className="text-sm">signup</span></NavLink>
                    <NavLink to="/login" className="p-2"><span className="text-sm">Login</span></NavLink>
                </nav>
            </header>
        </>
    )
}

export default Navbar