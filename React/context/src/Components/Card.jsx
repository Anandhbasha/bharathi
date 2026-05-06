import { useContext } from "react"
import { ShareValue } from "../App"

const Card = ({productName,productPrice,productDesrc,image}) => {
  const {count,setCount} = useContext(ShareValue)  
  return (
    <div className='Card'>
        <div className='cartImage'>
            <img src={image}></img>
        </div>
        <div className='cartBtm'>
            <h3>{productName}</h3>
            <h3>{productPrice}</h3>
            <h3>{productDesrc}</h3>
        </div>
        <button onClick={()=>setCount((prev)=>++prev)}>Add To Cart</button>
    </div>
  )
}

export default Card