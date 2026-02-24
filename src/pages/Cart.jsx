import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

export default function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="container">
      <h1 className="section-title">Your Cart 🛒</h1>

      {items.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <p>Add some products to see them here.</p>
        </div>
      ) : (
        <div className="cart-layout">
          {/* CART ITEMS */}
          <div className="cart-items">
            {items.map((item) => (
              <div className="cart-card" key={item.id}>
                <div>
                  <h3>{item.name}</h3>
                  <p className="price">₹{item.price}</p>
                </div>

                <button
                  className="btn"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* SUMMARY BOX */}
          <div className="cart-summary">
            <h3>Order Summary</h3>
            <p>Total Items: {items.length}</p>
            <h2>₹{total}</h2>

            <button className="btn checkout-btn">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}