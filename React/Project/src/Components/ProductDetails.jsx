import { useSelector, useDispatch } from "react-redux";
import { addtoCart } from "../Slices/CartSlice";
import { useParams } from "react-router";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.Product.Products);

  const prods = products.find(
    (item) => item.id === Number(id)
  );
  console.log(prods);
  

  if (!prods) {
    return <h2>Product not found 😢</h2>;
  }

  return (
    <div>
      <img src={prods.Image} width="200" />
      <h2>{prods.prodName}</h2>
      <p>{prods.prodDesc}</p>
      <h3>₹{prods.prodPrice}</h3>

      <button onClick={() => dispatch(addtoCart(prods))}>
        Add To Cart
      </button>
    </div>
  );
};

export default ProductDetails;