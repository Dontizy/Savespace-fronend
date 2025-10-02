import { create } from "zustand";


interface User{
    id:number;
    firstName:string;
    lastName:string;
    email:string;
    joineddate:Date;
}

interface profileData{
    profile:User | null;
    getProfile:(profile:User)=>void;
}


export const useProfileStore =create<profileData>((set)=>({
    profile:null,
    getProfile:(profile)=>set(()=>({profile})),
}))