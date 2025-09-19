import { SlLink } from "react-icons/sl";
import { FaInfo } from "react-icons/fa6";



const AddBookmarks = () => {
    return (
        <main className="h-screen flex justify-center items-center">
            <div className="bookmark-container bg-white shadow-2xl rounded-2xl p-6 min-w-50 md:min-w-100">
                <h3 className="text-gray-800 font-semibold text-lg md:text-3xl mb-6">Add Bookmark</h3>
                <form className="my-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="title" className="text-sm md:text-base text-gray-700 font-medium flex items-center"><FaInfo  className="size-5" />Url Title</label>
                    <input type="text" className="border border-gray-300 p-1 focus:border-blue-500 focus:ring focus:ring-blue-200 bg-gray-50 rounded-md placeholder:text-gray-400" placeholder="Link title"/>
                    </div>
                    <div className="my-4">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="url" className="ext-sm md:text-base text-gray-700 font-medium flex items-center gap-1"><SlLink className="size-6"/> URL</label>
                            <input type="text" className="border border-gray-300 p-1 focus:border-blue-500 focus:ring focus:ring-blue-200 bg-gray-50 rounded-md placeholder:text-gray-400" placeholder="Enter Ur Link"/>
                        </div>
                    </div>
                    <div className="my-6">
                        <button className="bg-blue-600 hover:bg-blue-700 py-1 px-6 rounded-md text-white transition-all duration-10 ease-in-out">
                            Save
                        </button>
                    </div>
                </form>

            </div>
        </main>
    )
}

export default AddBookmarks