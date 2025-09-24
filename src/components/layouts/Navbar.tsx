import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
    return (
        <>
              <input type="checkbox" id="navButton" className="hidden peer" />

  {/* <!-- Overlay --> */}
  <label htmlFor="navButton"
    className="fixed inset-0 bg-black/55 hidden peer-checked:block z-30 overlay-dark"></label>

  {/* <!-- Header --> */}
  <header
    className="absolute top-0 w-full h-10 bg-gradient-to-r  to-indigo-600 from-blue-500 fixed  flex items-center justify-between px-4">
    {/* <!-- Logout --> */}
    <div
      className="flex items-center justify-center w-20 h-10 mr-1 rounded">
      <img src={Logo} alt="" />
    </div>

    {/* <!-- Hamburger (hidden on desktop, shows ≤620px) --> */}
    <label htmlFor="navButton"
      className="hamburger hidden max-[620px]:flex max-[620px]:visible items-center bg-white w-7 h-7 m-5 rounded cursor-pointer bg-cover bg-center bg-no-repeat">
      <RxHamburgerMenu  className='size-8'/>
    </label>

    {/* <!-- Desktop links --> */}
    <div
      className="pc-links w-[500px] flex items-center gap-[10px] h-full max-[620px]:hidden max-[620px]:invisible">
      <span
        className="h-full flex items-center justify-center gap-[5px] group px-[5px] transition-colors duration-200 hover:bg-blue-50">
        <NavLink to="/home" className="no-underline font-medium text-white group-hover:text-blue-700">Home</NavLink>
      </span>
      <span
        className="h-full flex items-center justify-center gap-[5px] group px-[5px] transition-colors duration-200 hover:bg-blue-50">
        <NavLink to="/profile" className="no-underline font-medium text-white group-hover:text-blue-700">Profile</NavLink>
      </span>
      <span
        className="h-full flex items-center justify-center gap-[5px] group px-[5px] transition-colors duration-200 hover:bg-blue-50">
        <NavLink to="/notes" className="no-underline font-medium text-white group-hover:text-blue-700">Notes</NavLink>
      </span>
      <span
        className="h-full flex items-center justify-center gap-[5px] group px-[5px] transition-colors duration-200 hover:bg-blue-50">
        <NavLink to="/bookmarks" className="no-underline font-medium text-white group-hover:text-blue-700">Bookmarks</NavLink>
      </span>
      <span
        className="h-full flex items-center justify-center gap-[5px] group px-[5px] transition-colors duration-200 hover:bg-white">
        <NavLink to="/about" className="no-underline font-medium text-white  group-hover:text-blue-700">About</NavLink>
      </span>
      <span
        className="h-full flex items-center justify-center gap-[5px] group px-[5px] transition-colors duration-200 hover:bg-white">
        <button className="no-underline font-medium text-white  group-hover:text-blue-700">Logout</button>
      </span>
    </div>
  </header>

  {/* <!-- Sidebar (mobile) --> */}
  <aside
    className="navbar h-screen bg-gradient-to-r  to-indigo-600 from-blue-500  w-[200px] absolute transition-transhtmlForm duration-300 z-[9999] -translate-x-[260px] peer-checked:translate-x-0">
    {/* <!-- Close button --> */}
    <div
      className="close-nav w-[30px] h-[30px] absolute left-[200px] bg-white p-[2px] m-[3px] pb-[3px] rounded-[10px] flex justify-center items-center">
      <label htmlFor="navButton" className="cursor-pointer">
        <IoCloseOutline className="size-8"/>
      </label>
    </div>

    {/* <!-- Mobile Links --> */}
    <div
      className="mobile-links flex flex-col items-center gap-2 translate-y-[42px] min-h-[300px]">
      <span
        className="w-[130px] h-[35px] group hover:bg-indigo-600 bg-white rounded-[10px] flex items-center justify-center">
        <NavLink to="/home" className="font-medium no-underline group-hover:text-white text-black">Home</NavLink>
      </span>
      <span
        className="w-[130px] h-[35px] group hover:bg-indigo-600 bg-white rounded-[10px] flex items-center justify-center">
        <NavLink to="#" className="font-medium no-underline group-hover:text-white text-black">Profile</NavLink>
      </span>
      <span
        className="w-[130px] h-[35px] group hover:bg-indigo-600 bg-white rounded-[10px] flex items-center justify-center">
        <NavLink to="/signup" className="font-medium no-underline group-hover:text-white text-black">Signup</NavLink>
      </span>
      <span
        className="w-[130px] h-[35px] group hover:bg-indigo-600 bg-white rounded-[10px] flex items-center justify-center">
        <NavLink to="login" className="font-medium no-underline group-hover:text-white text-black">Login</NavLink>
      </span>
      <span
        className="w-[130px] h-[35px] group hover:bg-indigo-600 bg-white rounded-[10px] flex items-center justify-center">
        <NavLink to="/notes" className="font-medium no-underline group-hover:text-white text-black">Notes</NavLink>
      </span>
      <span
        className="w-[130px] h-[35px] group hover:bg-indigo-600 bg-white rounded-[10px] flex items-center justify-center">
        <NavLink to="/bookmarks" className="font-medium no-underline group-hover:text-white text-black">Bookmarks</NavLink>
      </span>
      <span
        className="w-[130px] h-[35px] group hover:bg-indigo-600 bg-white rounded-[10px] flex items-center justify-center">
        <NavLink to="/about" className="font-medium no-underline group-hover:text-white text-black">About</NavLink>
      </span>
    </div>
  </aside>

        </>
    )
}

export default Navbar