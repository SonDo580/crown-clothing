import PropTypes from "prop-types";

import ProductCard from "../ProductCard";
import {
  CategoryPreviewContainer,
  Preview,
  TitleLink,
} from "./categoryPreview.style.jsx";

const NUM_PRODUCTS_PREVIEW = 4;

export default function CategoryPreview({ title, products }) {
  return (
    <CategoryPreviewContainer>
      <h2>
        <TitleLink to={title}>{title}</TitleLink>
      </h2>

      <Preview>
        {products
          .filter((_, index) => index < NUM_PRODUCTS_PREVIEW)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
}

CategoryPreview.propTypes = {
  title: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
};
