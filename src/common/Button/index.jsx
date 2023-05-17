import PropTypes from "prop-types";
import "./button.scss";

const buttonTypeClasses = {
  google: "google-sign-in",
  inverted: "inverted",
};

export default function Button({ children, buttonType, ...otherProps }) {
  return (
    <button
      className={`button-container ${buttonTypeClasses[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  buttonType: PropTypes.string,
};
