import { LuCalendarClock } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import api from "../serviceAxios";
import UseErrorCode from "./hooks/UseErrorCode";
import { toast } from "sonner";
import { IoTrashSharp } from "react-icons/io5";
import { useNoteStore } from "./store/noteStore";

interface NoteListProps{
    id:number;
    title:string;
    description:string;
    createdAt?:Date;
}
dayjs.extend(relativeTime)
const NoteList = ({id, title,description, createdAt}:NoteListProps) => {
    const {getError} = UseErrorCode()
    const {removeNote} = useNoteStore()
    const deleteNote = async(noteId:number)=>{
        try{
            const res = await api.delete(`/note/${noteId}`)
            removeNote(noteId)
            const {message} =  res.data
            toast.success(message)
        }catch(error:any){
            console.log(error)
            const {status} = error
            const {message} = error.response?.data
            const msg = error.message
            getError(status, message, msg)
        }
    }

    return (  
                <div
                    className="note h-14 md:h-16 rounded-md border-r-3 border-l-3 text-gray-700 border-blue-500 shadow-sm border-1">
                    <NavLink to={`/detail/${id}`}>

                    <div className="flex justify-even items-center">
                        <h3 className="text-sm font-medium text-gray-700 tracking-tight truncate px-1">{title}</h3>
                    </div>
                    <div className="md:py-1 px-1">
                        <p className="text-sm tracking-tight truncate italic text-gray-700">{description}</p>
                    </div>
                    </NavLink>
                    <div
                        className="h-4 bg-gray-200 rounded-b-sm py-2 flex border-b-1 border-blue-500 justify-between items-center px-1">
                        <button onClick={()=>deleteNote(id)} className="flex gap-1 items-center text-sm text-gray-600"> <IoTrashSharp className="size-4 text-red-400"/> Delete</button>
                        <div className="flex justify-end items-center">
                        <LuCalendarClock className="size-4 text-gray-600" />
                        <p className="text-sm italic p-1 text-gray-600">{dayjs(createdAt).fromNow()}</p>
                        </div>
                    </div>
                </div>
           
    )
}

export default NoteList