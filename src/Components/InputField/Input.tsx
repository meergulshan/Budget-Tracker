import React from "react";
import { StyledInput } from "./Input.styles";

interface InputProps {
  type?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  label?: string;
  className?:string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  name,
  value,
  placeholder,
  label,
  onChange,
}) => (
  <div className="input-container">
    {label && <label className="input-label">{label}</label>}
    <StyledInput
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="input"
    />
  </div>
);

export default Input;
