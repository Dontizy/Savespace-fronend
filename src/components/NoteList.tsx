import { LuCalendarClock } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

interface NoteListProps{
    id?:number;
    title:string;
    description:string;
    createdAt?:Date;
}
dayjs.extend(relativeTime)
const NoteList = ({id, title,description, createdAt}:NoteListProps) => {

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
                        className="h-4 bg-gray-200 rounded-b-sm p-1 flex border-b-1 border-blue-500 justify-end items-center px-1">
                        <LuCalendarClock className="size-4 text-gray-700" />
                        <p className="text-sm italic p-1 text-gray-800">{dayjs(createdAt).fromNow()}</p>
                    </div>
                </div>
           
    )
}

export default NoteList