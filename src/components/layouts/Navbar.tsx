import { NavLink, useNavigate } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { RiHome2Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { LuNotebookText } from "react-icons/lu";
import { FaRegBookmark } from "react-icons/fa";
import { CgLogOut } from "react-icons/cg";
import { PiTrademarkRegisteredLight } from "react-icons/pi";
import { LuLayoutDashboard } from "react-icons/lu";
import { SlLogin } from "react-icons/sl";
import { FcAbout } from "react-icons/fc";
import { useUserStore } from '../store/userStore';
import { API_URL } from '../../serviceAxios';
import { BsBookmark } from 'react-icons/bs';
import { FaRegUser } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";
import { useState } from 'react';


const Navbar = () => {
  const { logout, isAuth } = useUserStore()
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const signout = () => {
    localStorage.removeItem("token")
    logout()
    navigate(API_URL)
  }
  const toggleNav =()=>{
    setIsOpen(!isOpen)
  }

  const guestLinks = [{ to: "/", label: "Home", icon: <RiHome2Line className="size-5" /> },
  { to: "/about", label: "About", icon: <FcAbout className='size-5' /> },
  { to: "/login", label: "Login", icon: <SlLogin className='size-5' /> },
  { to: "/signup", label: "Signup", icon: <FaRegUser className='size-5' /> }
  ]

  const authLinks = [
    { to: '/dashboard', label: "Dashboard", icon: <LuLayoutDashboard className='size-5'/>},
    { to: '/profile', label: "Profile", icon: <CgProfile className='size-5' /> },
    { to: '/notes', label: "Notes", icon: <LuNotebookText className='size-5' /> },
    { to: '/bookmarks', label: "Bookmarks", icon: <BsBookmark className='size-5' /> }]

  return (
    <>
      {/* <input type="checkbox" id="navButton" className="hidden peer" /> */}

      {/* <!-- Overlay --> */}
      <div onClick={toggleNav}
        className={`fixed inset-0 bg-black/55 ${isOpen ? 'block' : 'hidden'} z-30 overlay-dark`}></div>

      {/* <!-- Header --> */}
      <header
        className="absolute top-0 w-full h-10 bg-gradient-to-r  to-indigo-600 from-blue-500 fixed  flex items-center justify-between px-4">
        {/* <!-- Logout --> */}
        <div
          className="flex items-center justify-center w-20 h-10 mr-1 rounded">
          <img src={Logo} alt="" />
        </div>

        {/* <!-- Hamburger (hidden on desktop, shows ≤620px) --> */}
        <div onClick={toggleNav}
          className="hamburger hidden max-[620px]:flex max-[620px]:visible items-center text-white border border-gray-400 w-7 h-7 m-5 rounded cursor-pointer bg-cover bg-center bg-no-repeat">
          <RxHamburgerMenu className='size-8' />
        </div>

        {/* <!-- Desktop links --> */}
        <div
          className="pc-links w-[500px] flex items-center gap-[10px] h-full max-[620px]:hidden max-[620px]:invisible">
          {(isAuth ? authLinks : guestLinks).map((link) => {
            return <span key={link.to}
              className="h-full flex items-center justify-center gap-[5px] group px-[5px] transition-colors duration-200 hover:bg-blue-50">
              <NavLink to={link.to} className="no-underline font-medium text-white group-hover:text-blue-700 flex items-center gap-1">{link.icon} {link.label}</NavLink>
            </span>
          })
          }
          {
            isAuth && <span
              className="h-full flex items-center justify-center gap-[5px] group px-[5px] transition-colors duration-200 hover:bg-blue-50">
              <button onClick={() => signout()} className="no-underline font-medium text-white  group-hover:text-blue-700 flex items-center gap-1"><CgLogOut className='size-7' />Logout</button>
            </span>
          }
        </div>
      </header>

      {/* <!-- Sidebar (mobile) --> */}

      {isOpen &&
        <aside
        className={`navbar h-screen bg-gradient-to-r  to-indigo-600 from-blue-500  w-[200px] fixed transition-transhtmlForm duration-300 z-[9999] -translate-x-[260px] ${isOpen && 'translate-x-0'}`}>
        {/* <!-- Close button --> */}
        <div
          className="close-nav w-[30px] h-[30px] absolute left-[200px] bg-white p-[2px] m-[3px] pb-[3px] rounded-[10px] flex justify-center items-center">
          <div className="cursor-pointer" onClick={toggleNav}>
            <IoCloseOutline className="size-8" />
          </div>
        </div>

        {/* <!-- Mobile Links --> */}
        <div
          className="mobile-links flex flex-col items-center gap-2 translate-y-[42px] min-h-[300px]">
         {(isAuth ? authLinks:guestLinks).map((link)=>{
          return <NavLink onClick={toggleNav} to={link.to} key={link.to}
            className="w-[130px] h-[35px] group hover:bg-indigo-600 rounded-[10px] flex items-center justify-center">
            <div  className="font-medium no-underline group-hover:text-white text-white flex items-center gap-1">
              {link.icon} {link.label}
            </div>
          </NavLink>}) }
          {isAuth && <span 
            className="w-[130px] h-[35px] group hover:bg-indigo-600  rounded-[10px] flex items-center justify-center">
            <button onClick={()=>{signout(); toggleNav()}} className="font-medium no-underline group-hover:text-white text-white  flex items-center gap-1"><FiLogOut className='size-5' />Logout</button>
          </span>
          }
        </div>
      </aside>
      }

    </>
  )
}

export default Navbar