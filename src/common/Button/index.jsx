import PropTypes from "prop-types";

import {
  DangerButton,
  DefaultButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button.style.jsx";
import { BUTTON_TYPES } from "../../constants/button.js";

const BUTTON_MAP = {
  [BUTTON_TYPES.default]: DefaultButton,
  [BUTTON_TYPES.google]: GoogleSignInButton,
  [BUTTON_TYPES.inverted]: InvertedButton,
  [BUTTON_TYPES.danger]: DangerButton,
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
