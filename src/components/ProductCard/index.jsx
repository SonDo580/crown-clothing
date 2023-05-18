import PropTypes from "prop-types";

import "./productCard.scss";
import Button from "../../common/Button";

export default function ProductCard({ product }) {
  const { name, imageUrl, price } = product;

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />

      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>

      <Button buttonType="inverted">Add to Cart</Button>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
};
