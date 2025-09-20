import { MdOutlineKeyOff } from "react-icons/md";
import { HiOutlineKey } from "react-icons/hi"
import type {Dispatch, SetStateAction} from 'react'
import z from "zod";
import { useForm, type FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { GiSaveArrow } from "react-icons/gi";


type toggleProp={
    togglePassword:boolean;
    setTogglePassword:Dispatch<SetStateAction<boolean>>;
}
const schema = z.object({
    oldPassword:z.string().min(1, "Current password can't be empty"),
    password:z.string().min(8, "Password must not be empty, must be of 8 characters or more!")
})

type resetData = z.infer<typeof schema>;


const ChangePassword = ({togglePassword, setTogglePassword}:toggleProp) => {
    const {register, handleSubmit, formState:{errors, isValid}} =useForm<resetData>({resolver:zodResolver(schema)})

    const onSubmitChangePassword = (data:FieldValues)=>{
            console.log(data);    
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmitChangePassword)}>
                <p className="font-semibold text-blue-600 my-2 py-2">Change Password</p>
                <div className="flex flex-col gap-2">
                    <label htmlFor="oldpassword"
                        className="text-sm md:text-base text-gray-700 font-medium flex items-center gap-2">
                            <MdOutlineKeyOff className="size-5"/>Current Password</label>
                <input type="text" {...register("oldPassword")}
                    className="border border-gray-300 p-1 focus:border-blue-500 focus:ring focus:ring-blue-200 bg-gray-50 rounded-md placeholder:text-gray-400"
                    placeholder="Current password"/>
                    {errors.oldPassword && <p className="text-red-800 text-sm">{errors.oldPassword?.message}</p>}
                </div>
                <div className="my-4">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="password"
                            className="ext-sm md:text-base text-gray-700 font-medium flex items-center gap-1">
                                <HiOutlineKey className="size-6" />New Password</label>
                        <input type="text" {...register("password")}
                            className="border border-gray-300 p-1 focus:border-blue-500 focus:ring focus:ring-blue-200 bg-gray-50 rounded-md placeholder:text-gray-400"
                            placeholder="New Password"/>
                            {errors.password && <p className="text-red-800 text-sm">{errors.password?.message}</p>}
                    </div>
                </div>
                <div className="my-6 flex gap-2 md:gap-4">
                    <button disabled={!isValid}
                        className={`${isValid ? 'bg-green-600':'bg-blue-400'} ${isValid && 'hover:bg-green-700'} py-1 px-6 rounded-md text-white transition-all duration-10 ease-in-out flex items-center gap-1`}>
                        Save {isValid && <GiSaveArrow/>}
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