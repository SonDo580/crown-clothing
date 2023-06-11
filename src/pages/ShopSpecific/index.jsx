import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { categoryMapSelector } from "../../redux/category/categorySelectors";
import ProductCard from "../../components/ProductCard";
import { ProductContainer, Title } from "./shopSpecific.style.jsx";

export default function ShopSpecific() {
  const { category } = useParams();
  const categoryMap = useSelector(categoryMapSelector);
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
