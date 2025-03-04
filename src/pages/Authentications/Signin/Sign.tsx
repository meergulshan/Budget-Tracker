import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import Input from "../../../Components/InputField/Input";
import Navbar from "../../../Components/Navbar/Navbar";
import Checkbox from "../../../Components/Checkbox/Checkbox";
import Button from "../../../Components/Button/Button";
import { Paragraph } from "../SignUp/SignUp.styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  SigninContainer,
  SigninForm,
  SigninTitle,
  SigninSubtitle,
  InputLabel,
  CheckboxContainer,
  RememberMe,
  ForgotPassword,
  SigninImageContainer,
} from "./Signin.styles";

// ✅ Define schema once
const schema = yup.object().shape({
  email: yup.string().email("Invalid email format (Hint! Must contain @)").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(32, "Password cannot exceed 32 characters")
    .required("Password is required"),
});

const Sign = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const onSubmitHandler = () => {
    console.log("User Data:");
    reset();
    navigate("/HomePage"); // Redirect to Dashboard after signing in
  };

  return (
    <div>
      <Navbar />
      <SigninContainer>
        <SigninForm onSubmit={handleSubmit(onSubmitHandler)}>
          <SigninTitle>Welcome Back!</SigninTitle>
          <SigninSubtitle>Sign in to Continue Your Budget Tracker</SigninSubtitle>

          <InputLabel>Email</InputLabel>
          <Input {...register("email")} type="email" placeholder="meer.example@gmail.com" />
          <p style={{ color: "red", fontSize: "12px" }}>{errors.email?.message}</p>

          <InputLabel>Password</InputLabel>
          <Input {...register("password")} type="password" placeholder="Enter Your Password" />
          <p style={{ color: "red", fontSize: "12px" }}>{errors.password?.message}</p>

          <CheckboxContainer>
            <RememberMe>
              <Checkbox />
              <p>Remember Me</p>
            </RememberMe>
            <ForgotPassword>
              <Link to="/reset">Forgot Password?</Link>
            </ForgotPassword>
          </CheckboxContainer>

          <Button type="submit">Sign in</Button> {/* Button inside form to trigger submit */}
          <Paragraph>
            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
          </Paragraph>
        </SigninForm>

        <SigninImageContainer>
          <img src="/Images/signupimage.svg" alt="Sign In" />
        </SigninImageContainer>
      </SigninContainer>
    </div>
  );
};

export default Sign;
