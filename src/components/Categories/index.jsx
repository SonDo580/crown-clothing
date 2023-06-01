import PropTypes from "prop-types";

import { CategoriesContainer } from "./categories.style";
import Category from "../Category";

export default function Categories({ categories }) {
  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </CategoriesContainer>
  );
}

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
};
