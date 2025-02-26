import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../Components/Navbar/Navbar";
import Button from "../../../Components/Button/Button";
import Input from "../../../Components/InputField/Input";
import { Paragraph } from "../SignUp/SignUp.styles";

import {
  ResetContainer,
  ResetForm,
  Heading,
  Paragraph1,
  ResetImages,
} from "./Reset.styles";

const ResetPassword = () => {
  return (
    <div>
      <Navbar />
      <ResetContainer>
        <ResetForm>
          <Heading>Reset Password</Heading>
          <Paragraph1>Enter your email address to reset your password</Paragraph1>
          <label>Email</label>
          <Input name="email" type="email" placeholder="test@gmail.com" />
          <br />
          <Button>Send Reset Password Link</Button>
          <Paragraph>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </Paragraph>
        </ResetForm>
        <ResetImages>
          <img src="/Images/Group.svg" alt="Group Icon" />
          <img src="/Images/resetimage.svg" alt="Reset Password" />
        </ResetImages>
      </ResetContainer>
    </div>
  );
};

export default ResetPassword;
