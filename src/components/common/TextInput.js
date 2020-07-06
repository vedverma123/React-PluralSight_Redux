import React from "react";
import PropTypes from "prop-types";

function TextInput(props) {
  const { name, label, onChange, placeholder, value, error } = props;
  let wrapperClass = "form-group";
  if (error && error.length > 0) wrapperClass += " has-error";
  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type="text"
          value={value}
          onChange={onChange}
          className="form-control"
          placeholder={placeholder}
          name={name}
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
}

TextInput.propTypes = {
  error: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
};

export default TextInput;
