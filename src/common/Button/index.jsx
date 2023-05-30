import PropTypes from "prop-types";

import {
  DangerButton,
  DefaultButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button.style.jsx";

const BUTTON_MAP = {
  default: DefaultButton,
  google: GoogleSignInButton,
  inverted: InvertedButton,
  danger: DangerButton,
};

const getButton = (buttonType = "default") => BUTTON_MAP[buttonType];

export default function Button({ children, buttonType, ...otherProps }) {
  const CustomButton = getButton(buttonType);

  return <CustomButton {...otherProps}>{children}</CustomButton>;
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  buttonType: PropTypes.string,
};
