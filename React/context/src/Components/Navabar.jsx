import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShareValue } from '../App'

const Navabar = () => {
  const {count} = useContext(ShareValue)
  return (
    <div className='Navabar' style={{height:"10vh",display:"flex",alignItems:"center"}}>
        <Link to='/'>AllProducts</Link>
        <Link to='/mens'>Mens</Link>
        <Link to='/womens'>Womens</Link>
        <Link to='/kids'>Kids</Link>
        <p>Cart {count}</p>
    </div>
  )
}

export default Navabar