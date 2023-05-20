import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../contexts/UserContext";
import { ProductsContext } from "../../contexts/ProductsContext";

import "./shop.scss";
import ProductCard from "../../components/ProductCard";

export default function Shop() {
  const navigate = useNavigate();

  const currentUser = useContext(UserContext);

  useEffect(() => {
    if (!currentUser) {
      navigate("/auth");
    }
  }, [currentUser, navigate]);

  const products = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
