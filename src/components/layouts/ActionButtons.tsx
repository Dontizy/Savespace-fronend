import { IoIosAddCircleOutline } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { useNoteStore } from "../store/noteStore";
import { useBookmarkStore } from "../store/bookmarkStore";
import { NavLink } from "react-router-dom";



const ActionButtons = () => {
    const notes = useNoteStore((state) => state.notes)
    const bookmarks = useBookmarkStore((state) => state.bookmarks)
    return (
        <div className="flex justify-center">


            <div className="md:w-3/4 mt-4">
                <div className="flex justify-between flex-wrap gap-2 md:gap-8">
                    <div className="flex justify-start gap-2 md:gap-4 ">

                        <div className="flex items-center justify-center px-4">
                            <NavLink to="/addnote">
                                <button className="bg-blue-600 text-white hover:bg-white hover:text-gray-800 p-2 md:p-3 rounded-xl shadow-lg font-semibold text-sm flex items-center">
                                    <IoIosAddCircleOutline className="size-6" /> Add Note
                                </button>
                            </NavLink>
                        </div>

                        <div className="flex items-center justify-center">
                            <NavLink to="/addbookmark">
                                <button className="bg-blue-600 text-white hover:bg-white hover:text-gray-800 p-2 md:p-3 rounded-xl shadow-lg text-sm font-semibold flex items-center">
                                    <IoMdAdd className="size-6" /> Add Bookmark
                                </button>
                            </NavLink>
                        </div>
                    </div>

                    <div className=" flex items-center justify-start gap-2 mx-4 border-1 rounded-md border-gray-300 shadow-md">
                        <button className="p-1 md:p-3 py-2 text-2xl text-base font-semibold rounded-md text-gray-800">Notes <sup className="m-1 bg-blue-600 text-white shadow-md p-1 rounded-sm font-medium">{notes.length}</sup></button>
                        <button className="p-1 md:p-3 text-base font-semibold rounded-md text-gray-800">Bookmarks <sup className="m-1 bg-blue-600 text-white shadow-md p-1 rounded-sm font-medium">{bookmarks.length}</sup></button></div>
                </div>
            </div>
        </div>
    )
}

export default ActionButtons