
interface BookmarkProps{
    id:number;
    title:string;
    url:string;
}

const BookmarkList = ({title, url}:BookmarkProps) => {
    return (
        <div
            className="bookmark h-10 md:h-14 rounded-md border-r-3 border-l-3 text-gray-700 border-blue-500 shadow-sm border-1">
            <div className="flex justify-even items-center">
                <h3 className="text-sm font-medium tracking-tight truncate px-1">{title}</h3>
            </div>
            <div className="md:py-1 px-1">
                <p className="text-sm tracking-tight truncate italic text-gray-700">{url}</p>
            </div>
        </div>
    )
}

export default BookmarkList