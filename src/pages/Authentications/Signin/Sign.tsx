import React from "react";
import { Link } from "react-router-dom";
import Input from "../../../Components/InputField/Input";
import Navbar from "../../../Components/Navbar/Navbar";
import Checkbox from "../../../Components/Checkbox/Checkbox";
import Button from "../../../Components/Button/Button";
import { Paragraph } from "../SignUp/SignUp.styles";
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

const Sign = () => {
  return (
    <div>
      <Navbar />
      <SigninContainer>
        <SigninForm>
          <SigninTitle>Welcome Back!</SigninTitle>
          <SigninSubtitle>
            Sign in to Continue Your Budget Tracker
          </SigninSubtitle>

          <InputLabel>Email</InputLabel>
          <Input
            name="email"
            type="email"
            placeholder="meer.example@gmail.com"
          />

          <InputLabel>Password</InputLabel>
          <Input type="password" placeholder="Enter Your Password" />

          <CheckboxContainer>
            <RememberMe>
              <Checkbox />
              <p>Remember Me</p>
            </RememberMe>
            <ForgotPassword>
              <Link to="/reset">Forgot Password?</Link>
            </ForgotPassword>
          </CheckboxContainer>

          <Button>Sign in</Button>
          <Paragraph>
          <p >
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
          </Paragraph>

         
        </SigninForm>

        <SigninImageContainer>
          <img src="\Images\signupimage.svg" />
        </SigninImageContainer>
      </SigninContainer>
    </div>
  );
};

export default Sign;
