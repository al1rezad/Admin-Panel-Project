import ContentButton from './contentButton';
import { MdDownload } from "react-icons/md";
import { IoShareSocial } from "react-icons/io5";
import TableBox from './table';
import axios from "axios"
import { useState , useEffect , useRef} from 'react';
import { Link } from 'react-router-dom';


export default function Content() {

  // Download Link and Share Link function
  async function onclick(e){ 
    
    const response = await axios.get("./data.json" , {
      responseType : "blob" 
    })
    const blob = new Blob([response.data] , {type : "application/json"})
    
    const shareUrl = "data.json"


      if(e === "download"){
          //Dynamic link

          // const link = document.createElement("a")
          // link.href = url
          // link.download = "DATA"
          // document.body.appendChild(link)
          // link.click();
          // document.body.removeChild(link)
          // window.URL.revokeObjectURL(url)


          // static link
          const url = "./data.json"
          const link = document.createElement("a")
          link.href = url
          link.download = "Users.json"
          link.click()
       }


      else if(e === "share"){
        if(navigator.canShare && navigator.canShare({url : shareUrl})){
             await navigator.share({
              url: shareUrl
             })}

        else{
          console.log("Share لغو شد یا پشتیبانی نمی‌شود", err);}
      }
  
  }

// Suggestion Box For search input

//------------------------------------------------------ First way 
// کد ساده تر نسبت به روش دوم اما به دلیل ارسال های مکرر درخواست به سرور کد بهینه و مناسب ریکت نیست

// const [searchValue , setSearchValue] = useState("")
// const [suggestionBox , setSuggestionBox] = useState([])

// async function searchHandler(e){
  
//   const value = e.target.value.toLowerCase()
//   setSearchValue(value)
//   const response = await axios.get("./data.json",{
//     responseType : 'json'
//   })
//   const names = response.data.map((name)=> name.Name.toLowerCase())
  
//   const matched =
//   value ? names.filter((item)=>item.includes(value)) : []
//   setSuggestionBox(matched)
// }

//------------------------------------------------------ Second way

const [searchValue , setSearchValue] = useState("")
const [suggestionBox , setSuggestionBox] = useState([])
const [names , setNames] = useState([])
const [imageView , setImageview] = useState(false)


useEffect( ()=>{
  async function getAxios (){
    const response = await axios.get("../../../public/data.json" ,{responseType : "json"})
  
    const lowerCase = response.data.map((item)=>item)
    setNames(lowerCase)
  }
  getAxios()

},
[])


function searchHandler(e){
  setSearchValue(e.target.value.toLowerCase())
}

useEffect(()=>{
  if(!searchValue){
    setSuggestionBox([])
  }else{
    const matched = names.filter((name)=>name.Name.toLowerCase().includes(searchValue))
    setSuggestionBox(matched)
    setIsOpen(matched.length > 0)
    
  }
},[searchValue])


//-----------------------------------------
  //click out Feature

  const clickOut = useRef(null)
  const [isOpen , setIsOpen]= useState(false)
  
  useEffect(()=>{
    
    function handler(e){
      if(clickOut.current && !clickOut.current.contains(e.target)){
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown" , handler)

    //Unmount the autoComplete
    return ()=>{
      document.removeEventListener("mousedown" , handler)}
    
  },
  [])




  return (
    <div className='p-9 w-[85%] max-custom:pt-4 max-custom:w-full'>
        <div className='flex justify-between mb-6 relative '>
            <input  onChange={searchHandler} value={searchValue} type="text" placeholder='search name...'  className='w-[50%] h-10 border-1 border-gray-200 py-1 px-3 outline-0 rounded-2xl 
            leading-10 max-md:text-sm max-custom:w-[100%] ' />
            <div ref={clickOut} className={`flex bg-amber-200/90 backdrop-blur-sm  gap-0.5 transition-all flex-col absolute top-11 rounded-3xl  text-sm font-serifReg opacity-100 max-h-0 overflow-hidden
              ${suggestionBox.length>0 && isOpen ? "  p-6 duration-500 visible opacity-100 max-h-120 " : "invisible opacity-0 transition-all duration-500 max-h-0  "}`} >
            {suggestionBox.map((item)=>(<Link key={item.ID} to={`/dashboard/${item.ID}`} className={`p-1 px-4 hover:bg-white transition-all hover:transition-all rounded-xl
                `}>{item.Name}</Link>))}
            </div> 
            
            <img onClick={()=>setImageview(true)} src="../../public/batman.jpg" alt="" className='w-10 h-10 rounded-4xl outline-2 border-2 border-white outline-sky-600 max-custom:hidden'/>
            
        </div>
        <div className='flex flex-row-reverse gap-x-4 mb-6 '>
          <ContentButton icon = {<MdDownload/>} name = {"Download"} click = {()=>onclick("download")}/>
          <ContentButton icon = {<IoShareSocial/>} name = {"Share"} click = {()=>onclick("share")}/> 
        </div>
        <TableBox/>
    </div>
  )

} 
