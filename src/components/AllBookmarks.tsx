import { MdOutlineSearch } from "react-icons/md";
import { FcBookmark } from "react-icons/fc";
import BookmarkList from "./BookmarkList";
import { urls } from "./dataList";



const AllBookmarks = () => {
  return (
    <div className="Bookmarks flex justify-center my-4 py-4 h-screen">
      <div className="Bookmark p-1 shadow-md w-11/12 md:w-3/5">
        <form className="pb-4 mb-3 shadow-md">
          <div className="flex gap-1">
            <input type="text" className="border border-gray-300 p-1 focus:border-blue-500 focus:ring focus:ring-blue-200 bg-gray-50 rounded-md placeholder:text-gray-400" name="search" id="search" placeholder="Search" />
            <button className="p-1 px-2 bg-black text-white rounded-md text-sm" type="submit">
              <MdOutlineSearch className="size-5" /></button>
          </div>
        </form>
        <h3 className="text-md font-semibold text-md text-gray-600 md:text-2xl my-1 py-1 mt-1 flex items-center gap-1"><FcBookmark className="size-6" /> Bookmarks <sup className="p-2 md:p-4 rounded-sm bg-white border-1 border-gray-300 shadow-md">5</sup></h3>
        <div className="flex flex-col gap-1 md:gap-2">
          {/* <!-- start --> */}
          {
            urls.map((url) => {
              return <BookmarkList url={url.url} title={url.title} key={url.id} id={url.id} />
            })
          }
          {/* <!-- end --> */}
        </div>
      </div>

    </div>
  )
}

export default AllBookmarks