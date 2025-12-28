import React, { useEffect, useState } from 'react'
import Firstchart from './chart/barChart'
import PieChartWithCustomizedLabel from "./chart/circleChart"

import { Outlet } from 'react-router-dom'


export default function Dashboard(props) {

    const [date ,setDate] = useState(new Date())


    useEffect(()=>{  

        const interval = setInterval(() => {
            const time =new Date()
            setDate(time)
        }, 1000);

        // نکته جالب اینه که اگه این اینتروال رو پاک نکنم همچنان در پس زمینه ران میشه
        // for CleanUp
        return ()=>{ clearInterval(interval) }
        
    },[])


  return (
    <div className='w-[85%] flex max-custom:flex-col max-custom:gap-y-8 max-custom:w-full '>
        

        <div className='h-[100vh] w-[25%] flex flex-col items-center py-8 justify-between px-0 max-lg:w-[30%] max-custom:!w-[100%] max-custom:flex-col  max-custom:p-0 max-custom:justify-start max-custom:h-max'>
            <div className='flex flex-col gap-2 w-[65%] max-custom:flex-row max-custom:py-4 max-custom:px-8 max-custom:w-[100%] max-custom:justify-between ' >
                <h1 className='text-xl font-medium max-custom:text-lg '>Today Statistics</h1>
                <hr className='border-t-cyan-500 max-custom:hidden' />
                <h2 className=''>{date.toLocaleString()}</h2>
            </div>
            

            <div className='w-[65%] flex flex-col gap-y-8 max-custom:flex-row max-custom:w-[100%] max-custom:justify-around '>
            {/* Analize by gender */}
            <div className='border-1 border-gray-200 py-2 px-4 flex flex-col gap-2.5 rounded-2xl shadow-lg hover:scale-105 ease-in-out transition-transform ' >
                <h2>Gender Segregation</h2>
                <hr className='border-t-cyan-500'></hr>
                <div className='flex flex-col gap-2.5'>
                    <div className='flex justify-center'>
                        <Firstchart/>
                    </div>
                    
                    <div className='flex items-center justify-between text-sm pr-0 pl-2 '>
                        <div className='flex gap-x-1 items-center'>
                            <span className='w-3 h-3 bg-sky-300 inline-block rounded-xs'></span>
                            <span>Male</span>
                        </div>
                        <div className='flex gap-x-1 items-center'>
                            <span className='w-3 h-3 bg-pink-200 inline-block rounded-xs'></span>
                            <span>Female</span>
                        </div>
                    </div>
                </div>
            </div>


            {/* Analize by Registered or not */}
            <div className='flex flex-col gap-y-2.5 rounded-2xl pt-2 px-4 pb-2 shadow-lg border-1 border-gray-200 hover:scale-105 ease-in-out transition-transform duration-300 '>
                <div className='flex items-center gap-x-1'>   
                    <span className='w-3 h-3 bg-cyan-500 inline-block rounded-xs'></span>
                    <h1 >Registered Data</h1>
                </div>
                
                <hr className='border-t-cyan-500'/>

                <PieChartWithCustomizedLabel/>
            </div>
            </div>
           
        </div>
        
      <div className='h-[100vh] w-[75%] bg-white max-custom:w-full'>
        <Outlet/>
      </div>
    
    </div>  
  )
}
