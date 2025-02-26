import React from "react";
import { StyledButton } from "./Button.styles";
interface ButtonProps {
  name?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  name,
  onClick,
  type = "button",
  children,
  className,
  disabled = false,
}) => {
  return (
    <StyledButton
      name={name}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`signin-button ${className}`}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
