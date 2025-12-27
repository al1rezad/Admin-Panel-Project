  // import React from 'react'
  import { CgArrowTopRight } from "react-icons/cg";
  import Input from './input';
  import { useState , useEffect } from 'react';
  import { useNavigate, Link } from 'react-router-dom';
  import axios from 'axios';
  import { useAtom } from 'jotai';
  import { ismatchedAtom } from '../store/store';

  export default function LogIn() {
    
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [allLoginInfo , setAllLoginInfo] = useState([])
    const [isMatched , setIsMatched] = useAtom(ismatchedAtom)
    const navigate = useNavigate()

    useEffect(()=>{
      async function getInfo(){
        const response = await axios.get('/password.json',{responseType:"json"})
        setAllLoginInfo(response.data)
      }
      getInfo()

    },[])
    
    useEffect(()=>{
      const isMatchedInfo = allLoginInfo.find((item)=>item.email===email && item.password===password)
      // !! تبدیل مقدار undefind به boolean
      setIsMatched(!!isMatchedInfo)
      
    },[email , password , allLoginInfo])
    


    function submitHandler(e){
      e.preventDefault()
      if(email && password && isMatched){
        navigate("/registration")
      }else{
        window.alert("Email Or Password didn't match")
      } 
    }

    

    return (
      <div className='w-full flex justify-center items-center h-[100vh] overflow-hidden'>
        <div className='w-100 bg-linear-to-bl from-cyan-500  to-blue-500  h-100 py-8 px-8 rounded-3xl relative shadow-xl shadow-gray'>
          <form onSubmit={submitHandler}  action="" className='space-y-8 '>

              <div className='space-y-4'>
                  <Input value={email} name = "Email" onchange={setEmail} label ="Email" placeHolder="Please Enter Your Email"></Input>
                  <Input value={password} name = "Password" onchange={setPassword} label ="Password" placeHolder="Please Enter Your Password"></Input>
              </div>
              

              <div className='space-y-4 select-none'>
                  <button type='submit' className='w-full border-1 py-2 rounded-lg bg-white border-none font-medium hover:cursor-pointer '>Submit</button>
                  <div className='flex justify-center'>
                      <div className='flex text-white gap-x-2 items-e'><p className='font-medium'>Not Registered yet?</p>
                      <Link to={"/signin"} href=""className='flex items-center gap-x-1 text-white/90'>Create an account <span className='mt-1'><CgArrowTopRight/></span> </Link></div>  
                  </div>
              </div>

              <div className='flex justify-center pt-5 select-none'>
                <h2 className='text-white/50'>Created by Alireza</h2>  
              </div>
              

          </form>
        </div>
      </div>
    )
  }
