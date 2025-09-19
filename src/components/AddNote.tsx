import { IoMdAdd } from "react-icons/io";
import { MdOutlineTitle } from "react-icons/md";
import { TiInfoLarge } from "react-icons/ti";


function AddNote() {
  return (
    <main className="h-screen flex justify-center items-center ">
     <div className="bg-white shadow-2xl rounded-2xl p-6 min-w-50 md:min-w-100">
        <div className="flex items-center justify-between">
            <h3 className="text-gray-800 font-semibold text-lg md:text-3xl">
                Add Note 
            </h3>
            <IoMdAdd className="size-9 font-semibold text-gray-800" />
        </div>
        <div>
            <form className="my-4">
                <div className="flex flex-col gap-1">
                    <label htmlFor="title" className="text-sm md:text-base text-gray-700 font-medium flex items-center">Title <MdOutlineTitle  className="size-5" /></label>
                    <input type="text" className="border border-gray-300 p-1 focus:border-blue-500 focus:ring focus:ring-blue-200 bg-gray-50 rounded-md placeholder:text-gray-400" name="title" id="title" placeholder="Title"/>
                </div>

                <div className="my-4 flex flex-col gap-1">
                    <label htmlFor="description" className="text-sm text-gray-700 font-medium flex items-center">Description <TiInfoLarge className="size-5" /></label>
                    <textarea placeholder="Write description here..." className="w-auto min-h-30 bg-gray-50 text-sm placeholder:text-gray-400 rounded-md border  border-gray-300 p-1 focus:border-blue-500 focus:ring focus:ring-blue-200"></textarea>
                    <p className="text-red-500 text-sm">Description can't be empty</p>
                </div>

                <div className="flex justify-between">
                    <button type="submit" className="py-2 px-8 bg-blue-600 transition-all duration-0 hover:bg-blue-700 text-white rounded-lg shadow">Save</button>
                    <button className="py-2 px-8 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg">Cancel</button>
                </div>
            </form>
        </div>
     </div>

</main>
  )
}

export default AddNote