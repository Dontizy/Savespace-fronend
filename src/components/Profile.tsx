import { GoKey } from "react-icons/go";
import ChangePassword from "./ChangePassword";
import { useState } from "react";



function Profile() {
    const [togglePassword, setTogglePassword] = useState<boolean>(false)

  return (
     <main className="flex justify-center h-screen">
        <div
            className="profile bg-white shadow-2xl max-h-120  w-11/12 mt-6  py-3 px-2 md:w-3/5 md:p-4 rounded-md flex flex-col">
            <h3 className="text-2xl text-gray-800 font-semibold">Profile</h3>
            <div className="flex flex-col gap-3 mt-4">
                <div>
                    <h4 className="text-gray-800 font-medium">Name</h4>
                    <p className="text-gray-700">Donatus Raphael</p>
                </div>
                <div>
                    <h4 className="text-gray-800 font-medium">Email</h4>
                    <p className="text-gray-700">raphaeldonatus9@gmail.com</p>
                </div>
                {
                    !togglePassword && <div className="flex items-center gap-2">
                    <button onClick={()=>setTogglePassword(!togglePassword)} className="text-gray-300 py-1 px-2 bg-blue-400 rounded-sm shadow-sm">
                        Change Password
                    </button>
                    <GoKey className="size-5"/>
                </div>
                }
                
                {
                   togglePassword && <ChangePassword togglePassword={togglePassword} setTogglePassword={setTogglePassword}/>
                }
            </div>

        </div>
    </main>
  )
}

export default Profile