import PropTypes from "prop-types";
import { SpinnerContainer, SpinnerOverlay } from "./spinner.style";

export default function Spinner({ fullScreen }) {
  return (
    <SpinnerOverlay fullScreen={fullScreen}>
      <SpinnerContainer />
    </SpinnerOverlay>
  );
}

Spinner.defaultProps = {
  fullScreen: false,
};

Spinner.propTypes = {
  fullScreen: PropTypes.bool,
};
