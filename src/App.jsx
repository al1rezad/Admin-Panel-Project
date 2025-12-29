import Content from './components/content/content'
import Dashboard from './components/dashboard/dashboard'
import { Route , Routes , Navigate } from 'react-router-dom'
import Profile from './components/dashboard/profile'
import LogIn from './components/login/login'
import MainLayout from './components/login/layout'
import Protected from './components/login/protected'
import SignIn from './components/login/signIn'
import { FaCaretDown } from "react-icons/fa6";
import { FaCaretUp } from "react-icons/fa6";


// function App() {
//   const [click , setClick] = useState("register")



//   function select(value){
//         setClick(value)
//       }
  
//   return (
//     <div className='fixed left-0 top-0 overflow-hidden h-[100%] w-[100%] flex max-custom:flex max-custom:flex-col max-custom:overflow-auto  '>
//       <Sidebar isclicked ={select} value = {click} />
//       {click === "register" && (<Content />)}
//       {click === "dashboard" && (<Dashboard />)}
      
//     </div>
    
//   )
// }

// export default App



export default function App() {
  
  return (
    

    <Routes>
      {/* صفحه لاگین و ساین این ،  */}
      <Route path="/" element={<LogIn />} />
      <Route path="/signin" element={<SignIn/>}/>

      {/* در صورت مطابقت ایمیل و پسوورد با دیتا در فایل جیسونم وارد بخش جیدد بشه */}
      <Route element ={<Protected/>}>
      
      {/* ساید بار ثابت و قسمت سمت راست متغییر است */}
        <Route element={<MainLayout />}>
          <Route path="/registration" element={<Content />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<Profile defaultID={1} />} />
            <Route path=":ID" element={<Profile />} />
          </Route>
        </Route>

      </Route>
      {/* درصورتی که احراز هویت صورت نگرفته
       باشه دسترسی به بخش های دیگر یو ار ال غیر مجاز میباشد و یوزر به بخش لاگین هدایت میشه*/}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    
  )
}

