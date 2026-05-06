import React, { useContext } from 'react'
import { ShareValue } from '../App'
import Card from '../Components/Card'

const Mens = () => {
  const {all} = useContext(ShareValue)
  const mensProd = all.filter((item)=>item.prodCat==="Mens")
  return (
    <div className='Mens'>
          {mensProd.map((item)=>(
            <Card  {...item}/>
          ))}
    </div>
  )
}

export default Mens