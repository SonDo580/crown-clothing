import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  categoryErrorSelector,
  categoryLoadingSelector,
  categoryMapSelector,
} from "@/redux/category/categorySelectors";

import Spinner from "@/common/Spinner";
import ErrorDisplay from "@/common/ErrorDisplay";
import ProductCard from "@/components/ProductCard";
import { ProductContainer, Title } from "./shopSpecific.style.jsx";

export default function ShopSpecific() {
  const { category } = useParams();
  const categoryMap = useSelector(categoryMapSelector);
  const products = categoryMap[category] || [];

  const loading = useSelector(categoryLoadingSelector);
  const error = useSelector(categoryErrorSelector);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorDisplay error={error} />;
  }

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
