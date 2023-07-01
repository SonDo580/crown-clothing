import PropTypes from "prop-types";
import { ErrorStackContainer } from "./error.style";

export default function ErrorDisplay({ error }) {
  if (import.meta.env.PROD) {
    return <h1>Something went wrong!</h1>;
  }

  return (
    <>
      <h1>{error.message}</h1>
      <ErrorStackContainer>{error.stack}</ErrorStackContainer>
    </>
  );
}

ErrorDisplay.propTypes = {
  error: PropTypes.instanceOf(Error),
};
