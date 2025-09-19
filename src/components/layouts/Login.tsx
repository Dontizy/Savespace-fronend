import { IoMailOutline } from "react-icons/io5";
import { IoKeyOutline } from "react-icons/io5";

const Login = () => {
    return (
        <>
            <main className="h-screen flex justify-center items-center">
                <div className="flex items-center justify-center flex-col p-4 rounded-2x bg-white shadow-2xl">
                    <h3 className="text-gray-800 font-semibold text-2xl self-start">Login</h3>

                    <form className="htmlForm-login mt-4" action="">
                        <div className="flex flex-col gap-2 mt-2 md:mt-4">
                            <label htmlFor="email" className="text-gray-700 text-sm md:text-base flex items-center gap-2">
                                <IoMailOutline className="size-6" /><span>Email</span></label>
                            <div>
                                <input id="email" type="email" name="email" placeholder="email"
                                    className="block w-auto md:min-w-100 outline outline-gray-400  grow bg-transparent rounded-md py-1 md:py-1.5 pr-5 pl-1 text-base  placeholder:text-gray-500 focus:outline-offset-2 focus:outline-blue-500  sm:text-sm/6" />
                                <p className="text-xs text-red-800 mx-1">Incorrect email</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 mt-2 md:mt-4">
                            <label htmlFor="email" className="text-gray-700 text-sm md:text-base flex items-center gap-2 ">
                                <IoKeyOutline className="size-6" /><span>Password</span></label>
                            <input id="password" type="password" name="password" placeholder="password"
                                className="block w-auto md:min-w-100 outline outline-gray-400  grow bg-transparent rounded-md py-1 md:py-1.5 pr-5 pl-1 text-base  placeholder:text-gray-500 focus:outline-offset-2 focus:outline-blue-500  sm:text-sm/6" />
                        </div>
                        <div className="mt-2">
                            <button type="submit"
                                className="py-1 px-6 text-sm mt-2 bg-blue-600 rounded-md text-white hover:bg-blue-400 hover:text-black hover:shadow-md">Login</button>
                        </div>
                        <p className="text-sm text-gray-700 mt-2">Don't have an account? <a href=""
                            className="text-blue-700">Register</a></p>
                    </form>
                </div>
            </main>
        </>
    )
}

export default Login