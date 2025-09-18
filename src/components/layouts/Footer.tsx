import { FaFacebookF, FaInstagram, FaGithub} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Logo from '../../assets/logo.png'


const Footer = () => {
  return (
    <>
         <footer className="min-h-30 bg-blue-900 p-2">
        <div className="footer-logo h-20 w-20 p-0 m-0">
            <img src={Logo} className="w-auto h-auto" />
        </div>
        <p className="text-sm text-gray-400 mt-2">Your notes & bookmarks, safe and organized.</p>

        <div className="flex justify-between min-w-10 max-w-100 px-2">
            <ul className="mt-3 space-y-2 text-sm">
                <li> <a href="" className="hover:text-white">About</a></li>
                <li><a href="" className="hover:text-white">Contact</a></li>
            </ul>

            <div className="text-white mt-2">
               <ul className="flex gap-2 md:gap-4">
                   <li><a href="" className="hover:text-green-400 transition-all ease-in-out duration-75"><FaFacebookF className="size-4 md:size-6"/></a></li>
                   <li><a href="" className="hover:text-green-400 transition-all ease-in-out duration-75"><BsTwitterX className="size-4 md:size-6"/></a></li>
                   <li><a href="" className="hover:text-green-400 transition-all ease-in-out duration-75"><FaInstagram className="size-4 md:size-6"/></a></li>
                   <li><a href="" className="hover:text-green-400 transition-all ease-in-out duration-75"><FaGithub className="size-4 md:size-6"/></a></li>
               </ul>
            </div>
        </div>
   <div className="border-t border-gray-700 pt-3 text-center text-sm text-gray-400">
    © 2025 SaveSpace. All rights reserved.
  </div>
    </footer>
    </>
  )
}

export default Footer