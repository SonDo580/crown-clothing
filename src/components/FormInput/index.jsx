import PropTypes from "prop-types";

export default function FormInput({ label, ...otherProps }) {
  return (
    <div>
      <label>{label}</label>
      <input {...otherProps} />
    </div>
  );
}

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
};
