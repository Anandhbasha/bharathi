import { useDispatch, useSelector } from "react-redux"
import { clearCart, toggleCart } from "../Slices/CartSlice";

const CartSidebar = () => {
    const dispacth= useDispatch()
  const { cartItem, showCart } = useSelector((state) => state.Cart)
console.log(cartItem);

  return (
    <div className={`cartSidebar ${showCart ? "show" : ""}`}>
      <h2 style={{color:"black"}}>Cart Items</h2>
      <button onClick={() => dispacth(toggleCart())}>  Close x
</button>

      {cartItem.map((item, index) => (
        <div key={index}>
            <img src= {item.Image} width={"150px"} height={"150px"}></img>
          <p>{item.prodName}</p>
          <p>{item.prodPrice}</p>
          <button>Addqty</button>
      <button>minusqty</button>
          <p>{item.prodDesc}</p>
        </div>
      ))}
      
      <button onClick={() => dispacth(clearCart())}>
    Clear Cart
</button>
    </div>
  )
}

export default CartSidebar