import { create } from "zustand";


interface User{
      firstName:string;
      lastName:string;
      email:string;
      password:string;
}

interface userState{
    user:User | null;
    addUser:(user:User)=>void;
    editUserPassword:()=>void;
}

export const useUserStore = create<userState>((set)=>({
    user:null,
    addUser:(user)=>set((state)=>({})),
    editUserPassword:()=>set((state)=>({

    }))


}))