import { useEffect, useState } from "react";
import { products as data } from "../data/products";
import ProductCard from "../components/ProductCard";
import Filter from "../components/Filter";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setProducts(data);
  }, []);

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* TOP BANNER */}
      <div className="products-hero">
        <h1>Explore Products</h1>
        <p>Find the best tech gadgets here.</p>
      </div>

      <div className="container">
        {/* FILTER BAR */}
        <div className="filter-bar">
          <Filter setSearch={setSearch} />
        </div>

        {/* PRODUCTS GRID */}
        {filtered.length === 0 ? (
          <p>No products found</p>
        ) : (
          <div className="product-grid">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}