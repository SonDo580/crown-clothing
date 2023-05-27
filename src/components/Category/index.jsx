import PropTypes from "prop-types";
import "./category.scss";
import { Link } from "react-router-dom";

export default function Category({ category }) {
  const { imageUrl, title } = category;

  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <Link to={`/shop/${title}`}>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </Link>
      </div>
    </div>
  );
}

Category.propTypes = {
  category: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }),
};
