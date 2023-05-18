import { useContext } from "react";

import { ProductsContext } from "../../contexts/ProductsContext";

import "./shop.scss";
import ProductCard from "../../components/ProductCard";

export default function Shop() {
  const products = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
