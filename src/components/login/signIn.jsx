import React from 'react'
import Input from './input'

export default function SignIn() {
    function whenSubmit(){

    }

  return (
    <div>
       <div className='w-full flex justify-center items-center h-[100vh] overflow-hidden'>
              <div className='w-100 bg-linear-to-bl from-cyan-500  to-blue-500  h-100 py-8 px-8 rounded-3xl relative shadow-xl shadow-gray'>
                <form onSubmit={whenSubmit} action="" className='space-y-8'>
                    <div className='space-y-4'>
                        <Input label="Email" name="Email" placeHolder="Please Enter Your Email"/>
                        <Input label="Password" name="Password" placeHolder="Please Enter Your Password"/>
                        <Input label = "Password" name="Repeat Password" placeHolder="Please Repeat Your Password"/> 
                    </div>
                   
                    <button type='submit' className='w-full border-1 py-2 rounded-lg bg-white border-none font-medium hover:cursor-pointer '>Submit</button>
                </form>
              </div>
            </div>
    </div>
  )
}
