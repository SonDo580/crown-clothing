import PropTypes from "prop-types";

import { FormGroup, FormInputLabel, Input } from "./formInput.style.jsx";

export default function FormInput({ label, ...otherProps }) {
  return (
    <FormGroup>
      <Input {...otherProps} />

      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </FormGroup>
  );
}

FormInput.propTypes = {
  label: PropTypes.string,
};
