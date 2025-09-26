import { create } from "zustand";


interface User{
      firstName:string;
      lastName:string;
      email:string;
      password:string;
}

interface userState{
    user:User | null;
    isLoggedIn:boolean;
    login:()=>void;
    addUser:(user:User)=>void;
    editUserPassword:(password:string)=>void;
}

export const useUserStore = create<userState>((set)=>({
    user:null,
    isLoggedIn:false,
    addUser:(user:User)=>set(()=>({user})),
    login:()=>set(()=>({isLoggedIn:true})),
    editUserPassword:(password:string)=>set((state)=>({
       user:state.user ? {...state.user, password} : state.user
    }))


}))