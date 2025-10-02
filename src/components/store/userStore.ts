import { create } from "zustand";
import { persist } from 'zustand/middleware'

interface User {
    firstName: string;
    lastName: string;
    email: string;
    password:string;
}


interface userState {
    user: User | null;
    isAuth: boolean;
    token: string | null;
    login: () => void;
    logout: () => void;
    addUser: (user: User) => void;
}

export const useUserStore = create<userState>()(
    persist(
        (set) => ({
            user: null,
            isAuth: false,
            token:null,
            addUser: (user) => set(() => ({ user })),
            login: () => set(() => ({isAuth:true})),
            logout: () => set(() => ({isAuth: false })),
            // userProfile: (user) => set(() => ({ user })),
        }),
        {
            name: "auth-storage", // key for localStorage
            partialize:(state)=>({
              isAuth:state.isAuth,
            //   token:state.token
            }),
        }
    )
)
