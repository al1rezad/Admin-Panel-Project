import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Navigate , Outlet } from 'react-router-dom'
import { ismatchedAtom } from '../store/store'
import { useAtom } from 'jotai'

export default function Protected() {
    const [matched] = useAtom(ismatchedAtom)
    
    async function getLogin(){
        const response = await axios.get("/password.json",{responseType : "json"})
        return response.data
    }

   const {data , isLoading  ,isError } = useQuery({
    queryKey:["login"],
    queryFn : getLogin
   })
    
   if(isLoading) return <p>is loading</p>
   if(isError) return <p>there is a problem</p>
   
    

  return (
    <div>
      {matched ? (<Outlet/>) : <Navigate to="/" replace/>}
    </div>
  )
}
