import React from 'react'
import { NavLink, replace } from 'react-router-dom';
import { useAtom } from 'jotai';
import { authAtom } from '../store/store';
import { useNavigate } from 'react-router-dom';

export default function SideItem(props) {
  const [,setAuth] = useAtom(authAtom)
  const navigate = useNavigate()
  
  const path ={
    Registration : "registration",
    Dashboard : "dashboard",
    LogOut : "/"
  }
  function logoutHandler(item){
    if(item === "LogOut"){
      setAuth({isAuthenticated : false , userEmail : null})
      navigate("/" ,{replace : true})
    }
  } 
  return (
    <div>
      <NavLink onClick={()=>logoutHandler(props.item)} to={path[props.itemName]} className={({isActive})=> 
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

