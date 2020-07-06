import React from "react";
import PropTypes from "prop-types";

function SelectInput(props) {
  return (
    <div className="form-group">
      <label htmlFor={props.name}>{props.label}</label>
      <div className="field">
        <select
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          className="form-control"
        >
          <option value="">{props.defaultOption}</option>
          {props.options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            );
          })}
        </select>
        {props.error && <div className="alert alert-danger">{props.error}</div>}
      </div>
    </div>
  );
}

SelectInput.propTypes = {
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  options: PropTypes.arrayOf(PropTypes.object),
  defaultOption: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default SelectInput;
