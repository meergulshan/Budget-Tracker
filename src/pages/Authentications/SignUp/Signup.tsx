import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../Components/Navbar/Navbar";
import { StyledInput } from "../../../Components/InputField/Input.styles";
import {
  StyledSignpContainer,
  ResetButton,
  SignupForm,
  InputContainer,
  InputGroup,
  SignupImage,
  Heading,
  Paragraph,
} from "./SignUp.styles";

const Signup = () => {
  return (
    <div>
      <Navbar />
      <StyledSignpContainer>
        <SignupForm>
          <Heading>Sign Up</Heading>
          <p>Welcome to our Community</p>
          <InputContainer>
            <InputGroup>
              <label>First Name</label>
              <StyledInput type="text" placeholder="Meer" className="input-field" />
            </InputGroup>
            <InputGroup>
              <label>Last Name</label>
              <StyledInput type="text" placeholder="Gulshan" className="input-field" />
            </InputGroup>
          </InputContainer>
          <label>Email</label>
          <StyledInput type="email" placeholder="Enter your email" />
          <label>Password</label>
          <StyledInput type="password" placeholder="Enter your password" />
          <label>Confirm Password</label>
          <StyledInput type="password" placeholder="Confirm your password" />
          <label>Budget Limit</label>
          <StyledInput type="number" placeholder="Enter Amount" />
          <ResetButton>Sign Up</ResetButton>
          <Paragraph>
            Don't have an account? <Link to="/Sign">Sign In</Link>
          </Paragraph>
        </SignupForm>
        <SignupImage src="/Images/signupimage.svg" />
      </StyledSignpContainer>
    </div>
  );
};

export default Signup;
