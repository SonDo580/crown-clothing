import { useContext } from "react";
import { useParams } from "react-router-dom";

import { CategoriesContext } from "../../contexts/CategoriesContext";

import "./shopSpecific.scss";
import ProductCard from "../../components/ProductCard";

export default function ShopSpecific() {
  const { category } = useParams();

  const categoryMap = useContext(CategoriesContext);

  const products = categoryMap[category] || [];

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
