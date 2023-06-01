import { useContext } from "react";
import { useParams } from "react-router-dom";

import { CategoriesContext } from "../../contexts/CategoriesContext";

import ProductCard from "../../components/ProductCard";
import { ProductContainer, Title } from "./shopSpecific.style.jsx";

export default function ShopSpecific() {
  const { category } = useParams();

  const categoryMap = useContext(CategoriesContext);

  const products = categoryMap[category] || [];

  return (
    <>
      <Title>{category}</Title>

      <ProductContainer>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductContainer>
    </>
  );
}
