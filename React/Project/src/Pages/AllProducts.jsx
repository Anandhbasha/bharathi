import { useSelector } from 'react-redux'
import Card from '../Components/Card'

const AllProducts = () => {
  const Products = useSelector((state)=>state.Product.Products)
  console.log(Products);
  
  return (
    <div className='AllProducts'>
        {Products.map((item)=>(
          <Card {...item}/>
        ))}
    </div>
  )
}

export default AllProducts