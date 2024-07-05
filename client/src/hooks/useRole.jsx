import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import { getRole } from "../api/auth";
import { useQuery } from "@tanstack/react-query";


const useRole = () => {
   /*  const {user} = useAuth()
    const [role, setRole] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        getRole(user?.email)
        .then(data =>{
            setRole(data)
            setLoading(false)
        })
    },[user]) */
    const {user, loading} = useAuth()

    const {data: role, isLoading} = useQuery({
        enabled: !loading && !!user?.email,//it means if not loading and have user.email give me true otherwise false
        queryFn:async () => getRole(user?.email),
        queryKey:['role']
    })
  
    return [role, isLoading]
};

export default useRole;