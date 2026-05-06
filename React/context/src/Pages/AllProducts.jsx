import React, { useContext } from 'react'
import Card from '../Components/Card'
import { ShareValue } from '../App'

const AllProducts = () => {
  const {all} = useContext(ShareValue)

  return (
    <div className='AllProducts' style={{display:"flex",flexWrap:"wrap",gap:"10px"}}>
        {all.map((item)=>(
          <Card  {...item}/>
        ))}
    </div>
  )
}

export default AllProducts