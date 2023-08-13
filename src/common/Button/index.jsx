import PropTypes from "prop-types";

import {
  ButtonSpinner,
  DangerButton,
  DefaultButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button.style.jsx";
import { BUTTON_TYPES } from "./constants.js";

const BUTTON_MAP = {
  [BUTTON_TYPES.default]: DefaultButton,
  [BUTTON_TYPES.google]: GoogleSignInButton,
  [BUTTON_TYPES.inverted]: InvertedButton,
  [BUTTON_TYPES.danger]: DangerButton,
};

const getButton = (buttonType) => BUTTON_MAP[buttonType];

export default function Button({
  children,
  buttonType = "default",
  isLoading = false,
  ...otherProps
}) {
  const CustomButton = getButton(buttonType);

  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading && <ButtonSpinner />} {children}
    </CustomButton>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  buttonType: PropTypes.string,
  isLoading: PropTypes.bool,
};
