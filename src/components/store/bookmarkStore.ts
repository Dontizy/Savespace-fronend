import { create } from "zustand"


interface Bookmark{
    id?:number;
    name:string;
    url:string;
}

interface BookmarkState{
    bookmarks:Bookmark[];
    addBookmark:(bookmark:Bookmark)=>void;
    editBookmark:(id:number, bookmark:Bookmark)=>void;
}

export const useBookmarkStore = create<BookmarkState>((set)=>({
    bookmarks:[],
    addBookmark:(bookmark:Bookmark)=>set((state)=>({bookmarks:[...state.bookmarks, bookmark]})),
    editBookmark:(id, bookmark:Bookmark)=>set((state)=>({
      bookmarks:state.bookmarks.map((book)=> book.id === id ? {...book, ...bookmark}: book)
    }))

}))

