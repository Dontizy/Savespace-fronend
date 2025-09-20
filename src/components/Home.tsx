import { IoIosAddCircleOutline } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { LuNotebookPen } from "react-icons/lu";
import { FcBookmark } from "react-icons/fc";
import BookmarkList from "./BookmarkList";
import NoteList from "./NoteList";
import { notes, urls } from "./dataList";


const Home = () => {
    return (
        <>
            <main className="flex justify-center h-screen">

                <div className="mt-4 md:w-3/4">
                    <div className="flex justify-between flex-wrap gap-2 md:gap-8">
                        <div className="flex justify-start gap-2 md:gap-4 ">

                            <div className="flex items-center justify-center px-4">
                                <button className="bg-blue-600 text-white hover:bg-white hover:text-gray-800 p-2 md:p-3 rounded-xl shadow-lg font-semibold text-sm flex items-center">
                                    <IoIosAddCircleOutline className="size-6" /> Add Note
                                </button>
                            </div>

                            <div className="flex items-center justify-center">
                                <button className="bg-blue-600 text-white hover:bg-white hover:text-gray-800 p-2 md:p-3 rounded-xl shadow-lg text-sm font-semibold flex items-center">
                                    <IoMdAdd className="size-6" /> Add Bookmark
                                </button>
                            </div>
                        </div>

                        <div className=" flex items-center justify-start gap-2 mx-4 border-1 rounded-md border-gray-300 shadow-md">
                            <button className="p-1 md:p-3 py-2 text-2xl text-base font-semibold rounded-md text-gray-800">Notes <sup className="m-1 bg-blue-600 text-white shadow-md p-1 rounded-sm font-medium">{notes.length}</sup></button>
                            <button className="p-1 md:p-3 text-base font-semibold rounded-md text-gray-800">Bookmarks <sup className="m-1 bg-blue-600 text-white shadow-md p-1 rounded-sm font-medium">{urls.length}</sup></button></div>
                    </div>

                    <div className="mt-2 py-4">
                        <div className="flex justify-center items-center">
                            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 p-1">Recent items</h3>
                        </div>
                        {/* <!-- Recent items --> */}
                        <div className="Recent-items grid grid-cols-1  md:grid-cols-2 gap-4 md:gap-8">
                            {/* <!-- Note --> */}
                            <div className="note-content flex flex-col gap-1 md:gap-2 md:gap-4 p-1 shadow-md md:p-2">
                                <h4 className="font-semibold text-md md:text-2xl text-gray-600 flex items-center gap-2"><LuNotebookPen className="size-5" />Notes
                                </h4>
                                {
                                    notes.map((note) => {
                                        return <NoteList id={note.id} key={note.id} title={note.title} description={note.desciption} createdAt={note.createdAt} />
                                    })
                                }
                            </div>

                            {/* <!-- Bookmarks --> */}
                            <div className="Bookmark p-1 shadow-md">
                                <div className="flex flex-col gap-1 md:gap-2">
                                    <h3 className="text-md font-semibold text-md text-gray-600 md:text-2xl flex items-center gap-2"><FcBookmark className="size-6" />Bookmarks</h3>
                                    {
                                        urls.map((url) => {
                                            return <BookmarkList key={url.id} url={url.url} id={url.id} title={url.title} />
                                        })
                                    }
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </main>

        </>
    )
}

export default Home