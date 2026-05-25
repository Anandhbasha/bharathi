import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Home from './Home'
import axios from 'axios'

export const Api = "http://localhost:5732"
const App = () => {
  
  const [datas,setDatas] = useState([])

  useEffect(()=>{
    const fetchdata = async()=>{
      try{
        const res = await axios.get(`${Api}/read`)
      if(!res){
        throw Error("Unable connect API");
      }
      const getDatas = await res.data
      setDatas(getDatas)
      }catch(err){
        console.log(err);
        
      }
    }
    fetchdata()
  },[])
  console.log(datas);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App