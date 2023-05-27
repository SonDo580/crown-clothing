import PropTypes from "prop-types";

import "./categoryPreview.scss";
import ProductCard from "../ProductCard";
import { Link } from "react-router-dom";

const NUM_PRODUCTS_PREVIEW = 4;

export default function CategoryPreview({ title, products }) {
  return (
    <div className="category-preview-container">
      <h2>
        <Link to={title} className="title">
          {title.toUpperCase()}
        </Link>
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
