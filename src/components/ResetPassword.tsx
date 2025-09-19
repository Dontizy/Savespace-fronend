import { IoKeyOutline } from "react-icons/io5";

const ResetPassword = () => {
    return (
        <main className="h-screen flex justify-center items-center">
            <div className="flex items-center justify-center flex-col p-4 rounded-2x bg-white shadow-2xl rounded-2xl">
                <h3 className="text-blue-900 font-semibold text-2xl self-start">Reset password</h3>

                <form className="form-login " action="">
                    <div className="flex flex-col gap-2 mt-2 md:mt-4">
                        <label htmlFor="email" className="text-gray-700 text-sm md:text-base flex items-center gap-2 ">
                        <IoKeyOutline className="size-6" /><span>password</span></label>
                        <input id="password" type="resetpassword" name="password" placeholder="password" className="block w-auto md:min-w-100 outline outline-gray-400  grow bg-transparent rounded-md py-1 md:py-1.5 pr-5 pl-1 text-base  placeholder:text-gray-500 focus:outline-offset-2 focus:outline-blue-500  sm:text-sm/6" />
                    </div>
                    <div>
                        <button type="submit"
                            className="py-1 px-4 text-sm mt-4 bg-blue-600 rounded-md text-white hover:bg-blue-400 hover:text-black hover:shadow-md">Reset</button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default ResetPassword