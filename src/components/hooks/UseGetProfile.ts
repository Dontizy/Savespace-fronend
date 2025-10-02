import { useEffect, useState } from "react";
import { useProfileStore } from "../store/useProfileStore";
import api from "../../serviceAxios";
import { useUserStore } from "../store/userStore";

const UseGetProfile = () => {
      const getProfile = useProfileStore((state) => state.getProfile)
      const login = useUserStore((state)=>state.login)
      const {profile} = useProfileStore()
      
      useEffect(() => {
        const fetchProfile = async () => {
            try {
              const res = await api.get('/user/profile');
              getProfile(res.data)
              login()
            } catch (error) {
                console.log(error)
            }
        }
        fetchProfile()
      }, [])

  return {profile}
}

export default UseGetProfile