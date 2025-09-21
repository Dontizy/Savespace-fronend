import { create } from "zustand"


interface Bookmark{
    id?:number;
    name:string;
    url:string;
}

interface BookmarkState{
    bookmarks:Bookmark[];
    addBookmark:(bookmark:Bookmark)=>void;
}

export const useBookmarkStore = create<BookmarkState>((set)=>({
    bookmarks:[],
    addBookmark:(bookmark:Bookmark)=>set((state)=>({bookmarks:[...state.bookmarks, bookmark]}))
}))