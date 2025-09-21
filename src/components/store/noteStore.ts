import { create } from "zustand";

export interface Note{
     id?:number;
     title:string;
     description:string;
     createdAt:Date
}

interface NoteState{
    notes:Note[];
    addNote:(note:Note)=>void;
    editNote:(id:number, noteData:Note)=>void;
}

export const useNoteStore = create<NoteState>((set)=>({
    notes:[],
    addNote:(note:Note)=>set((state)=>({notes:[...state.notes, note]})),
    editNote:(id, noteData)=>set((state)=>({
        notes:state.notes.map((note)=> note.id === id ? {...note, ...noteData} : note)
    }))


}))