import { MdOutlineVisibilityOff } from "react-icons/md";
import { MdOutlineVisibility } from "react-icons/md";
import { useState } from 'react';


export default function Input(props) {
    
    const [status , setStatus] = useState("show")
    
    function toggle(){
        if(status === "show"){
            setStatus("hide")
        }else{
            setStatus("show")}}
        
    const data = {
        Email : "email",
        Password : status === "show" ? "password" : "text"
    }


    
  return (
    
    <div className='flex flex-col gap-y-1 relative'>

        <label className='text-white' >{props.name}</label>

        <input onChange={(e)=>props.onchange(e.target.value)} value={ props.value }  type={data[props.label]} placeholder={props.placeHolder} className='text-white border-1 border-white/50 outline-none py-2 px-4 rounded-lg placeholder:text-sm placeholder:text-white/40' />
            {props.label === "Password" && 
            (<span onClick={toggle} className='absolute right-4 bottom-3 hover:cursor-pointer'>
            {status === "show"
            ? (<span className='text-white'><MdOutlineVisibilityOff/></span>) 
            : (<span className='text-white'><MdOutlineVisibility/></span>)}
            </span>)}
        
    </div>
   
  )
}
