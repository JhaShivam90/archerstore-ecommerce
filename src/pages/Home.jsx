import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <div className="hero">
        <div className="hero-overlay">
          <h1>Welcome to ArcherStore</h1>
          <p>Discover modern gadgets at the best price.</p>

          <Link to="/products">
            <button className="btn hero-btn">Shop Now</button>
          </Link>
        </div>
      </div>

      {/* FEATURED PRODUCTS */}
      <div className="container">
        <h2 className="section-title">Featured Products</h2>

        <div className="product-grid">
          {products.slice(0,3).map((p) => (
            <ProductCard key={p.id} product={p}/>
          ))}
        </div>
      </div>

      {/* INFO SECTION */}
      <div className="info-section">
        <div>
          <h3>🚚 Fast Delivery</h3>
          <p>Quick shipping across India.</p>
        </div>

        <div>
          <h3>💳 Secure Payment</h3>
          <p>Trusted checkout experience.</p>
        </div>

        <div>
          <h3>⭐ Top Quality</h3>
          <p>Hand-picked premium products.</p>
        </div>
      </div>
    </>
  );
}