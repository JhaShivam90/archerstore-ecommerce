import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
  const cart = useSelector((state) => state.cart.items);
  const { dark, setDark } = useContext(ThemeContext);

  return (
    <div className="navbar">
      <div className="container">
        <Link to="/">ArcherStore</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
        <Link to="/about">About</Link>

        
      </div>
    </div>
  );
}