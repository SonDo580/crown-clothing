import PropTypes from "prop-types";
import "./categories.scss";
import Category from "../Category";

export default function Categories({ categories }) {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
}

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
};
