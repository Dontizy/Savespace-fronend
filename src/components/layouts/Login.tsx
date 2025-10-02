import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { IoMailOutline } from "react-icons/io5";
import { IoKeyOutline } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import z from "zod";
import { useUserStore } from "../store/userStore";
import axios from "axios";
import { toast } from "sonner";
import UseGetProfile from "../hooks/UseGetProfile";
import UseErrorCode from "../hooks/UseErrorCode";
import delay from 'delay'


const schema = z.object({
    email: z.email(),
    password: z.string().min(1, "Password is required, field can't be empty!.")
})


type loginData = z.infer<typeof schema>

const Login = () => {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm<loginData>({ resolver: zodResolver(schema) })
    const login = useUserStore((state) => state.login)
    const navigate = useNavigate()
    const { errorMessage, getError } = UseErrorCode()
    const { profile} = UseGetProfile()



    const submitLogin: SubmitHandler<loginData> = async (data) => {
        try {
            const res = await axios.post('http://localhost:3000/auth/login', data);
            const token = res.data.token
            localStorage.setItem("token", token)
            if (res.data.userId) {
                login()
            }
            navigate('/dashboard')
            await delay(1500)
            toast.success(`Welcome back ${profile?.firstName}`)
        } catch (error: any) {
            // console.log(error.status);
            if (error.message === "Network Error") {
                console.log(error)
                toast.error(error.message)
            }
            const {status} = error
            const {message} = error.response?.data
            const msg = error.message
            console.log(error.response)
            getError(status, message, msg)
        }

    }

    return (
        <>
            <main className="h-screen flex justify-center items-center">
                <div className="flex items-center justify-center flex-col p-4 rounded-2x bg-white shadow-2xl">
                    <h3 className="text-gray-800 font-semibold text-2xl self-start">Login</h3>

                    <form className="htmlForm-login mt-4" onSubmit={handleSubmit(submitLogin)}>
                        <div className="flex flex-col gap-2 mt-2 md:mt-4">
                            <label htmlFor="email" className="text-gray-700 text-sm md:text-base flex items-center gap-2">
                                <IoMailOutline className="size-6" /><span>Email</span></label>
                            <div>
                                <input id="email" type="email" {...register('email')} name="email" placeholder="email"
                                    className="block w-auto md:min-w-100 outline outline-gray-400  grow bg-transparent rounded-md py-1 md:py-1.5 pr-5 pl-1 text-base  placeholder:text-gray-500 focus:outline-offset-2 focus:outline-blue-500  sm:text-sm/6" />
                                {errors.email && <p className="text-sm mt-2 text-red-800 mx-1">{errors.email?.message}</p>}
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 mt-2 md:mt-4">
                            <label htmlFor="email" className="text-gray-700 text-sm md:text-base flex items-center gap-2 ">
                                <IoKeyOutline className="size-6" /><span>Password</span></label>
                            <input id="password" type="password" {...register('password')} name="password" placeholder="password"
                                className={`block w-auto md:min-w-100 outline ${isValid ? 'outline-gray-500' : 'outline-gray-400'}  grow bg-transparent rounded-md py-1 md:py-1.5 pr-5 pl-1 text-base  placeholder:text-gray-500 focus:outline-offset-2 ${isValid ? 'focus:outline-blue-500' : 'focus:outline-blue-500'}  sm:text-sm/6 `} />
                            {errors.password && <p className="text-sm text-red-800 mx-1">{errors.password?.message}</p>}
                        </div>
                        <div className="mt-2">
                            {errorMessage && <p className="text-sm text-red-800 mx-1">{errorMessage}</p>}
                            <button type="submit"
                                className="py-1 px-6 text-sm mt-2 bg-blue-600 rounded-md text-white hover:bg-blue-400 hover:text-black hover:shadow-md">Login</button>
                        </div>
                        <p className="text-sm text-gray-700 mt-2">Don't have an account? <NavLink to="/signup"
                            className="text-blue-700">Register</NavLink></p>
                    </form>
                </div>
            </main>
        </>
    )
}

export default Login