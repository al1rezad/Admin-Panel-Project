import React from 'react'
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import {useQuery} from "@tanstack/react-query";




export default function User() {

    const fn = async ()=>{
      const response = await fetch("./data.json") 
      if(!response.ok){ return "error : " + error.message} //اگر statue response ما بین 200 تا299 باشه اوکی مقدار تروثی برمیگردونه
      return response.json()
      } 

    // معمولا برای انتخاب پراپرتی ها useQuery از object destructurnig استفاده میکنیم
    const {data , isLoading , error , isError} = useQuery({
        queryKey : ["users"],
        queryFn : fn
    })

    if (isLoading) {
    return <TableBody><TableRow><TableCell>Loading...</TableCell></TableRow></TableBody>;
  }

  if (isError) {
    return <TableBody><TableRow><TableCell>{error.message}</TableCell></TableRow></TableBody>;
  }
  return (

          <TableBody >
               {data.map((item)=>(
              
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
