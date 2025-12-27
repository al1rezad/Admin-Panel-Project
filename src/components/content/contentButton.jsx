import React from 'react'

export default function ContentButton(props) {

  function clikcHandler(){
    
    props.click()
  }
  return (
    
      <button  onClick={clikcHandler} value={props.name} className ={`flex items-center font-medium text-black  transition-colors justify-between  text-sm gap-x-1 px-4 py-1.5  rounded-lg hover:cursor-pointer  max-custom:text-xs
        ${props.name === "Download" ? "bg-amber-200/90 text-black font-medium transition-colors" : "" }`}>
        <span>{props.icon}</span>
        <span>{props.name}</span>
      </button>
    
  )
}
