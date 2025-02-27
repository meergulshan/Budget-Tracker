import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../Components/Navbar/Navbar";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../../Components/InputField/Input";
import * as yup from "yup";
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
const schema = yup.object().shape({
  email: yup.string().email("Invalid email Format (must Contain @) ").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
  budgetLimit: yup.number().positive("Budget must be positive").required("Budget is required"),
});

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const onSubmitHandler = () => {
    
    reset();
  };

  return (
    <div>
      <Navbar />
      <StyledSignpContainer>
        <SignupForm onSubmit={handleSubmit(onSubmitHandler)}>
          <Heading>Sign Up</Heading>
          <p>Welcome to our Community</p>
          <InputContainer>
            <InputGroup>
              <label>First Name</label>
              <Input type="text" placeholder="Meer" className="input-field"  />
            </InputGroup>
            <InputGroup>
              <label>Last Name</label>
              <Input type="text" placeholder="Gulshan" className="input-field"  />
            </InputGroup>
          </InputContainer>

          <label>Email</label>
          <Input {...register("email")} type="email" placeholder="Enter your email" />
          <p style={{ color: "red", fontSize: "12px" }}>{errors.email?.message}</p>

          <label>Password</label>
          <Input {...register("password")} type="password" placeholder="Enter your password" />
          <p style={{ color: "red", fontSize: "12px" }}>{errors.password?.message}</p>

          <label>Confirm Password</label>
          <Input {...register("confirmPassword")} type="password" placeholder="Confirm your password" />
          <p style={{ color: "red", fontSize: "12px" }}>{errors.confirmPassword?.message}</p>

          <label>Budget Limit</label>
          <Input {...register("budgetLimit")} type="number" placeholder="Enter Amount" />
          <p style={{ color: "red", fontSize: "12px" }}>{errors.budgetLimit?.message}</p>

          <ResetButton type="submit">Sign Up</ResetButton>
          <Paragraph>
            Already have an account? <Link to="/Sign">Sign In</Link>
          </Paragraph>
        </SignupForm>
        <SignupImage src="/Images/signupimage.svg" />
      </StyledSignpContainer>
    </div>
  );
};

export default Signup;