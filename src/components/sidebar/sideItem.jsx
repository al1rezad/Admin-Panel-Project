import React from 'react'
import { NavLink } from 'react-router-dom';


// export default function SideItem(props) {
//   const isActive = props.itemName !=="LogOut" && 
//   (
//     (props.itemName === "Registration" && props.value === "register") ||
//     (props.itemName === "Dashboard" && props.value === "dashboard")
//   )
    
//   return (
//     <div >
//       <a href="" className='inline-block' onClick={props.itemName==="Registration" ? (e)=>{e.preventDefault(); props.isclicked("register")} :        (e)=>{e.preventDefault(e) ; props.isclicked("dashboard")}}>
//         <div  className = {`
//             flex items-center font-medium gap-x-1.5 duration-300 transition-all p-1.5
//             max-md:gap-x-1 max-md:text-xs max-custom:!text-[14px]
//             ${props.itemName === "LogOut"
//               ? "rounded-lg border-1 border-white bg-white py-1.5 text-black px-4"
//               : isActive
//                 ? "text-black "
//                 : "text-white hover:scale-105   "
//             }
//           `} >
//           <span className='max-[500px]:hidden'> {props.icon}</span> 
//           <h2>{props.itemName}</h2>
//         </div>
//       </a>
//     </div>
//   ) 
// }

export default function SideItem(props) {
  const path ={
    Registration : "registration",
    Dashboard : "dashboard",
    LogOut : "logout"
  }
  
  return (
    <div>
      <NavLink to={path[props.itemName]} className={({isActive})=> 
        `
            flex items-center font-medium gap-x-1.5 duration-300 transition-all p-1.5
            max-md:gap-x-1 max-md:text-xs max-custom:!text-[14px] text-white 
            ${isActive ? "!text-black scale-110" : ""}
            ${props.itemName === "LogOut" && "rounded-lg border-1 border-white bg-white py-1.5 !text-black px-4"}`
      }>
            
        <span className='max-[500px]:hidden'> {props.icon}</span> 
        <h2>{props.itemName}</h2>
      </NavLink>
    </div>
  )
}

