import React from 'react'
import SideItem from './sideItem'
import { MdDashboard } from "react-icons/md";
import { MdAppRegistration } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";



export default function Sidebar(props) {
  return (
    
      <div className='w-[15%] h-[100vh] border-r-1 border-r-gray-200 bg-linear-to-bl  from-cyan-500  to-blue-500 max-[960px]:text-sm 
       max-custom:h-[20%]  max-custom:w-[100%] max-custom:flex max-custom:justify-between max-custom:items-center max-custom:border-none' >

        <div className='h-[120px] border-b-1 border-b-gray-200 max-custom:border-none max-custom:w-[25%] max-custom:flex max-custom:items-center max-custom:justify-center max-custom:text-3xl '>
          <h1 className='text-4xl max-lg:text-3xl max-md:text-2xl text-white tracking-wide text-center leading-[120px] font-bbh tracking-wider  max-custom:leading-normal  max-custom:!text-3xl max-[460px]:!text-2xl   '>ANALISE</h1>
        </div>

        <div className='flex realtive flex-col items-center justify-between h-[75%] p-6 max-[960px]:px-10  md:px-10 max-custom:flex-row max-custom:px-3 max-custom:gap-y-3  max-custom:gap-x-5 max-[490px]:gap-2.5 '>
          <div className='flex  flex-col gap-y-2 max-custom:flex-row max-custom:gap-1 max-[490px]:gap-x-0  '>
            <SideItem icon = {<MdAppRegistration/>} isclicked={props.isclicked} itemName = {"Registration"} value={props.value}/>
            <SideItem icon = {<MdDashboard/>} isclicked={props.isclicked} itemName = {"Dashboard"} value={props.value} />
          </div>
            <SideItem icon = {<LuLogOut/>} itemName = "LogOut"/>
        </div>
          
        
      </div>
    
  )
}
