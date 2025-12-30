import React from 'react'
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { useState,useEffect } from 'react';
import {useQuery} from "@tanstack/react-query";
import { useAtom } from 'jotai';
import { selectPart } from '../store/select';



export default function User(){
  const [status , setStatus] = useAtom(selectPart)
  const [filter , setFilter]= useState([])

    const fn = async ()=>{
      const response = await fetch("./data.json") 
      if(!response.ok){ return "error : " + error.message} //اگر status response ما بین 200 تا299 باشه اوکی مقدار تروثی برمیگردونه
      return response.json()
      } 

    // معمولا برای انتخاب پراپرتی ها useQuery از object destructurnig استفاده میکنیم
    const {data , isLoading , error , isError} = useQuery({
        queryKey : ["users"],
        queryFn : fn
    })

    useEffect(()=>{
      setStatus("all")
      setFilter(data)
    },[data]) 

    useEffect(()=>{
      if(status === "all"){
        setFilter(data)
        return}

      if(status === "male"){
        const finall = data.filter((item)=> item.Gender === "Male")
        setFilter(finall)
        return
      }  
      if(status === "female"){
         const finall = data.filter((item)=> item.Gender === "Female")
          setFilter(finall)
          return
      }

      
    }
    ,[status])
    

    if (isLoading) {
    return <TableBody><TableRow><TableCell>Loading...</TableCell></TableRow></TableBody>;}

  if (isError) {
    return <TableBody><TableRow><TableCell>{error.message}</TableCell></TableRow></TableBody>;}

  return (

          <TableBody >
               {filter?.map((item)=>(
                
              <TableRow key={item.ID}>
                  <TableCell align='left'>{item.Name}</TableCell>
                  <TableCell align='right'>{item.Gender}</TableCell>
                  <TableCell align='right'>{item.TicketType}</TableCell>
                  <TableCell align='right'>{item.PhoneNo}</TableCell>
                  <TableCell align='right'>{item.Status}</TableCell>
              </TableRow>
              ))}
          </TableBody>
         
 
    
  )
}
