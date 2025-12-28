import Input from './input'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAtom } from 'jotai'
import { authAtom } from '../store/store'



export default function SignIn() {
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [repeatPass , setRepeatPass]= useState("")
    const [allUsers , setAllUsers]= useState([])
    const [ , setAuth] =useAtom(authAtom)
    const navigate = useNavigate()
    const passwordIncludes = /[a-zA-Z]/.test(password) && /\d/.test(password)

    //هنگام مونت شدن کامپوننت باید دیتاهارو درون استیت آل یوزرزمون قرار داد.
    //به درستی کار نیمکنه repetitiveEmail در غیر این صورت بعد از لود صفحه مقداری درون آل یوزرز قرار ندارد و
    useEffect(()=>{
      const local = JSON.parse(localStorage.getItem("users")|| "[]")
      setAllUsers(local)  
    },[])
    const repetitiveEmail = allUsers.find(item => email===item.email)
    
    function submitHandler(e){
      e.preventDefault()

      // // ذخیره کردن دیتا ها در لوکال استوریج 
      // if(email && password && repeatPass && password === repeatPass && !repetitiveEmail){
      //   const dataArray = JSON.parse(localStorage.getItem("users") || "[]" )
      //   const postItem = {email : email , password : password}
      //   const finallArray = [...dataArray , postItem]
      //   localStorage.setItem("users" , JSON.stringify(finallArray))
      //   setAuth({
      //     isAuthenticated : true,
      //     userEmail : email
      //   })
      //   navigate("/registration")
      // }
      // else if(repetitiveEmail){
      //   alert("this email is already taken")
      //   setEmail("")
      // }
      // else if(password && repeatPass && password !== repeatPass){
      //   alert("passwords didn't match")
      //   setPassword("")
      //   setRepeatPass("")
      // }else{
      //   alert("please fill all fields")
      // }


      // بسیار مرتب تر از کد بالا
      if(!email || !password || !repeatPass){
        alert("please fill all feilds")
        return}

      if(password !== repeatPass){
        alert("passwords didn't match")
        setPassword("")
        setRepeatPass("")
        return}

      if(repetitiveEmail){
        alert("this email is already taken")
        setEmail("")
        return}

        if(password.length <= 4 ){
          alert("your password is too short")
          return}

        if(!passwordIncludes){
          alert("your password must include number and letter")
          setPassword("")
          setRepeatPass("")
          return}
      
        const dataArray = JSON.parse(localStorage.getItem("users") || "[]" )
        const postItem = {email : email , password : password}
        const finallArray = [...dataArray , postItem]
        localStorage.setItem("users" , JSON.stringify(finallArray))
        setAuth({
          isAuthenticated : true,
          userEmail : email})

        navigate("/registration")  
    }
    
    

  return (
    <div>
       <div className='w-full flex justify-center items-center h-[100vh] overflow-hidden'>
              <div className='w-100 bg-linear-to-bl from-cyan-500  to-blue-500  h-100 py-8 px-8 rounded-3xl relative shadow-xl shadow-gray'>
                <form onSubmit={submitHandler} action="" className='space-y-8'>
                    <div className='space-y-4'>
                        <Input onchange={setEmail} value={email} label="Email" name="Email" placeHolder="Please Enter Your Email"/>
                        <Input onchange={setPassword} value={password} label="Password" name="Password" placeHolder="Please Enter Your Password"/>
                        <Input onchange={setRepeatPass} value={repeatPass} label = "Password" name="Repeat Password" placeHolder="Please Repeat Your Password"/> 
                    </div>
                   
                    <button type='submit' className='w-full border-1 py-2 rounded-lg bg-white border-none font-medium hover:cursor-pointer '>Sign In</button>
                </form>
              </div>
            </div>
    </div>
  )
}
