import React from "react";
import "../../styles/text-field.css";
export const TextField = ({
  value,
  handleChange,
  id,
  label,
  type = "text",
  disabled = false,
  placeholder,
}) => {
  return (
    <div className="text-field">
      <label htmlFor={`${id}-element`}>{label}</label>
      <input
        className="input"
        disabled={disabled}
        id={`${id}-element`}
        value={value}
        onChange={handleChange}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};
