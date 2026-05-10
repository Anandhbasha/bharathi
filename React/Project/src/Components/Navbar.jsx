import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router"
import { toggleCart } from "../Slices/CartSlice"

const Navbar = () => {
  const dispatch = useDispatch()
  const cartItem = useSelector((state)=>state.Cart.cartItem)
  const { isLoggedIn, isAdmin } = useSelector((state) => state.Auth)
  return (
    <div className='Navbar'>
        <Link to='/'>AllProducts</Link>
        <Link to='/mens'>Mens</Link>
        <Link to='/womens'>Womens</Link>
        <Link to='/kids'>Kids</Link>
        {isLoggedIn && isAdmin && (
        <Link to="/addNew">Add Product</Link>
      )}
        <h2 onClick={() => dispatch(toggleCart())} style={{cursor:"pointer"}}>
          {cartItem.length}
        </h2>
    </div>
  )
}

export default Navbar