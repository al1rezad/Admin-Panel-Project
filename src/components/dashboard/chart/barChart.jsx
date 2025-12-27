import React from 'react'
import { BarChart, Bar } from 'recharts';
import { useEffect,useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';



export default function Firstchart() {

  const [male , setMale] = useState([])
  const [female , setFemale] = useState([])
  

    useEffect(()=>{
      async function getData(){
        const response =await  axios.get("/data.json" , {responseType : 'json'})
        const male = response.data.filter((item)=> item.Gender === "Male" )
        setMale(male)
        const female = response.data.filter((item)=>item.Gender ==="Female")
        setFemale(female)
      }
      getData()
    },[])
   
    
    

    const genderPercent = [{id : 1 , male:male.length},{id : 2 , female:female.length}]
  return (
      
        <BarChart
          style={{width:"100%" , height:"100%", aspectRatio: 1.50 ,color:"blue" }}
          data={genderPercent}
          responsive
      >
          <Bar dataKey="male"  fill="#7DD3FC"></Bar>
          <Bar dataKey="female" fill="#FBCFE8" ></Bar>
        </BarChart>
      

    

    
  )
}
