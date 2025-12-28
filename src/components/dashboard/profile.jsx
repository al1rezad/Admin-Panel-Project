import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


export default function Profile(props) {

    const [test , setTest] = useState([])

    useEffect(()=>{

        const fetchedData = async()=>{
            const response = await axios.get("../../../public/data.json",{responseType : "json"})
            const finall = response.data
            setTest(finall)}
        fetchedData()
        
    }
    ,[])


    //دریافت پارامز از url; اینجا پراپسی که  در بخش App به عنوان آیدی دیفالت فرستاده بودیم رو دریافت میکنیم
    const {ID} = useParams()
    const profileID = ID ? Number(ID) : props.defaultID;
    const user = test.find(item => item.ID === profileID )
  

  return (
    <div className=' h-[100vh] py-8 px-8  max-custom:h-max max-custom:py-0 max-custom:px-4'>
      <div className='bg-linear-to-bl  bg-cyan-500  to-blue-500  py-8 px-16 min-h-[100%] rounded-2xl flex flex-col gap-y-16' >
        <div className='space-y-8'>
          <h1 className='text-5xl font-bbh text-white tracking-widest'>{user?.Name}</h1>
          <div className='flex flex-col gap-y-2 text-black [&_h3]:hover:scale-105 [&_*]:transition-transform 
        [&_h3]:hover:duration-300 [&_*]:bg-amber-200/90 [&_*]:py-2 [&_*]:px-4 [&_*]:w-max [&_*]:rounded-lg text-sm font-medium '>
            <h3>Gender : {user?.Gender}</h3>
            <h3>Ticket Type : {user?.TicketType} </h3>
            <h3>Registered : {user?.Status === "Registered" ? "Yes":"NO"}</h3>
            <h3>Phone.No : {user?.PhoneNo}</h3>
          </div> 
        </div>
       
        <div className='space-y-4 text-white'> 
            <h2 className='text-3xl font-medium'>About <span className='text-amber-300/90'>{user?.Name}</span></h2>
            <p className='w-[70%] text-lg tracking-wide'>{user?.Desc}</p>
        </div>
      </div>
    </div>
  ) 
}
