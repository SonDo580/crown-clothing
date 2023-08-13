import PropTypes from "prop-types";

import {
  BackgroundImage,
  CategoryBodyContainer,
  CategoryContainer,
  StyledLink,
} from "./category.style.jsx";

export default function Category({ category }) {
  const { imageUrl, title } = category;

  return (
    <CategoryContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <CategoryBodyContainer>
        <StyledLink to={`/shop/${title}`}>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </StyledLink>
      </CategoryBodyContainer>
    </CategoryContainer>
  );
}

Category.propTypes = {
  category: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }),
};
