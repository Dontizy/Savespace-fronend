import { MdOutlineKeyOff } from "react-icons/md";
import { HiOutlineKey } from "react-icons/hi"
import type {Dispatch, SetStateAction} from 'react'

type toggleProp={
    togglePassword:boolean;
    setTogglePassword:Dispatch<SetStateAction<boolean>>;
}

const ChangePassword = ({togglePassword, setTogglePassword}:toggleProp) => {
    

    return (
        <div>
            <form>
                <p className="font-semibold text-blue-600 my-2 py-2">Change Password</p>
                <div className="flex flex-col gap-2">
                    <label htmlFor="oldpassword"
                        className="text-sm md:text-base text-gray-700 font-medium flex items-center gap-2">
                            <MdOutlineKeyOff className="size-5"/>Current Password</label>
                <input type="text"
                    className="border border-gray-300 p-1 focus:border-blue-500 focus:ring focus:ring-blue-200 bg-gray-50 rounded-md placeholder:text-gray-400"
                    placeholder="Old Password"/>
                </div>
                <div className="my-4">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="password"
                            className="ext-sm md:text-base text-gray-700 font-medium flex items-center gap-1">
                                <HiOutlineKey className="size-6" />New Password</label>
                        <input type="text"
                            className="border border-gray-300 p-1 focus:border-blue-500 focus:ring focus:ring-blue-200 bg-gray-50 rounded-md placeholder:text-gray-400"
                            placeholder="New Password"/>
                    </div>
                </div>
                <div className="my-6 flex gap-2 md:gap-4">
                    <button
                        className="bg-blue-600 hover:bg-blue-700 py-1 px-6 rounded-md text-white transition-all duration-10 ease-in-out">
                        Save
                    </button>
                    <button onClick={()=>setTogglePassword(!togglePassword)}
                        className="bg-gray-600 hover:bg-gray-700 py-1 px-6 rounded-md text-white transition-all duration-10 ease-in-out">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ChangePassword