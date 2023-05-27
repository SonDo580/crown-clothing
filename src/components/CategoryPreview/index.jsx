import PropTypes from "prop-types";

import "./categoryPreview.scss";
import ProductCard from "../ProductCard";

const NUM_PRODUCTS_PREVIEW = 4;

export default function CategoryPreview({ title, products }) {
  return (
    <div className="category-preview-container">
      <h2>
        <span className="title">{title.toUpperCase()}</span>
      </h2>

      <div className="preview">
        {products
          .filter((_, index) => index < NUM_PRODUCTS_PREVIEW)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}

CategoryPreview.propTypes = {
  title: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
};
