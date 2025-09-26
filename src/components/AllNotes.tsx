import { TfiNotepad } from "react-icons/tfi";
import { MdOutlineSearch } from "react-icons/md";
import NoteList from "./NoteList";
import { useNoteStore } from "./store/noteStore";





const AllNotes = () => {
    const notes = useNoteStore((state)=>state.notes)
    return (
        <div className="note flex justify-center my-4 py-4 h-screen">
            <div className="note p-1 shadow-md w-11/12 md:w-3/5">
                <form className="pb-4 mb-3 shadow-md">
                    <div className="flex gap-1">
                        <input type="text" className="border border-gray-300 p-1 focus:border-blue-500 focus:ring focus:ring-blue-200 bg-gray-50 rounded-md placeholder:text-gray-400" name="search" id="search" placeholder="Search" />
                        <button className="p-1 px-2 bg-black text-white rounded-md text-sm" type="submit">
                            <MdOutlineSearch className="size-5" /></button>
                    </div>
                </form>
                <div className="note-content flex flex-col gap-1 md:gap-2 p-1 shadow-md md:p-2">
                    <h4 className="font-semibold text-md md:text-2xl text-gray-600 flex items-center gap-1 md:gap-2">
                        <TfiNotepad className="size-5" /> Notes  <sup className="p-2 md:p-4 rounded-sm bg-white border-1 border-gray-300 shadow-md">{notes.length}</sup></h4>
                    {
                        notes.map((note) => {
                            return <NoteList id={note.id} title={note.title} createdAt={note.createdAt} description={note.description} />
                        })
                    }

                </div>

            </div>
        </div>

    )
}

export default AllNotes