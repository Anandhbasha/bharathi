import { useSelector } from 'react-redux'
import Card from '../Components/Card'

const Kids = () => {
    const Products = useSelector((state)=>state.Product.Products)
    const kidsProduct = Products.filter((item)=>item.prodCat==="Kids")

  return (
    <div className='Kids'>
        {
          kidsProduct.map((item)=>(
            <Card {...item}/>
          ))
        }
    </div>
  )
}

export default Kids