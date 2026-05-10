import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addtoCart } from "../Slices/CartSlice";

const Card = ({ id, prodName, prodPrice, prodDesc, Image }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  
  const handleAdd = (e) => {
    e.stopPropagation(); 
    dispatch(addtoCart({ id, prodName, prodPrice, prodDesc,Image }));
  };
  return (
    <div 
      className='Card'
      onClick={() => navigate(`/product/${id}`)}
    >
      {/* //product/1 */}
      <div className='cardTop'>
        <img src={Image} alt={prodName} />
      </div>

      <div className='cardBtm'>
        <h2>{prodName}</h2>
        <h2>₹{prodPrice}</h2>
        <p>{prodDesc}</p>
        <button onClick={handleAdd}>
                Add To Cart
              </button>
      </div>
    </div>
  );
};

export default Card