import React, { forwardRef } from "react";
import { StyledInput } from "./Input.styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = "text", label, ...rest }, ref) => (
    <div className="input-container">
      {label && <label className="input-label">{label}</label>}
      <StyledInput type={type} ref={ref} {...rest} className="input" />
    </div>
  )
);

export default Input;
