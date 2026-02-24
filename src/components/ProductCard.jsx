import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="card product-card">
      <img
        src={`https://source.unsplash.com/300x200/?${product.name}`}
        alt={product.name}
        className="product-img"
      />

      <h3>{product.name}</h3>
      <p className="price">₹{product.price}</p>

      <button
        className="btn"
        onClick={() => dispatch(addToCart(product))}
      >
        Add To Cart
      </button>
    </div>
  );
}