import { CgArrowTopRight } from "react-icons/cg";
import Input from './input';
import { useState , useEffect } from 'react';
import { useNavigate, Link, replace } from 'react-router-dom';
import axios from 'axios';
import { useAtom } from 'jotai';
import { authAtom } from '../store/store';

export default function LogIn() {
  
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const [allLoginInfo , setAllLoginInfo] = useState([])
  const [isMatched , setIsMatched] = useState(false)
  const [, setAuth] = useAtom(authAtom)
  const navigate = useNavigate()

  useEffect(()=>{
    const allusers = JSON.parse(localStorage.getItem("users")|| "[]")
    setAllLoginInfo(allusers)
  },[])
  
  useEffect(()=>{
    const isMatchedInfo = allLoginInfo.find((item)=>item.email===email && item.password===password)

    // اپراتور !! با توجه به تروثی یا فالسی بودن مقدار آنها را به مقادیر بولین تبریل میکند
    setIsMatched(!!isMatchedInfo)
    
  },[email , password , allLoginInfo])
  


  function submitHandler(e){
    e.preventDefault()

    if(!email || !password){
      alert("please fill all fields")
      return}

    if(!isMatched){
      alert("Email or Password didn't match")
      return}

    setAuth({
      isAuthenticated :true,
      userEmail : email
    })
    navigate("/registration")
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
                <button type='submit' className='w-full border-1 py-2 rounded-lg bg-white border-none font-medium hover:cursor-pointer '>Log In</button>
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
