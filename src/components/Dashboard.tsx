import { LuNotebookPen } from "react-icons/lu";
import { FcBookmark } from "react-icons/fc";
import BookmarkList from "./BookmarkList";
import NoteList from "./NoteList";
import { useNoteStore } from "./store/noteStore";
import { NavLink } from "react-router-dom";
import { useBookmarkStore } from "./store/bookmarkStore";
import { useEffect } from "react";
import api from "../serviceAxios";



const Dashboard = () => {
    const notes = useNoteStore((state)=>state.notes)
    const bookmarks = useBookmarkStore((state)=>state.bookmarks)
    const  getNotes= useNoteStore((state)=>state.getNotes) 
    
    useEffect(()=>{
             const fetchNotes = async()=>{
            await api.get('/note').then((res)=>{
                getNotes(res.data)
            })
        }
        fetchNotes();
        },[])


    return (
        <>
            <main className="flex justify-center h-screen">
                <div className="mt-4 md:w-3/4">

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
                                   notes.length !== 0 ? notes.map((note) => {
                                        return <NoteList  key={note.id} createdAt={note.createdAt} title={note.title} id={note.id} description={note.description}  />
                                    }): <p className="text-gray-700">Don't have any note yet!. <NavLink className='text-blue-600' to='/addnote'>Create Note?</NavLink></p>
                                }
                            </div>

                            {/* <!-- Bookmarks --> */}
                            <div className="Bookmark p-1 shadow-md">
                                <div className="flex flex-col gap-1 md:gap-2">
                                    <h3 className="text-md font-semibold text-md text-gray-600 md:text-2xl flex items-center gap-2"><FcBookmark className="size-6" />Bookmarks</h3>
                                    {
                                       bookmarks.length !== 0 ? bookmarks.map((bookmark) => {
                                            return <BookmarkList key={bookmark.id} url={bookmark.url} id={bookmark.id} name={bookmark.name}  />
                                        }):<p className="text-gray-700 py-2">Dont have any bookmark yet?. <NavLink to="/addbookmark" className="text-blue-600">Create Bookmark</NavLink></p>
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

export default Dashboard