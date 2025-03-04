import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../Components/Navbar/Navbar";
import Button from "../../../Components/Button/Button";
import Input from "../../../Components/InputField/Input";
import { Paragraph } from "../SignUp/SignUp.styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  ResetContainer,
  ResetForm,
  Heading,
  Paragraph1,
  ResetImages,
} from "./Reset.styles";
const schema = yup.object().shape({
    email: yup.string().email("Invalid email format (Hint! Must contain @)").required("Email is required"),
  });
  
  const ResetPassword = () => {
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
        <ResetContainer>
          <ResetForm onSubmit={handleSubmit(onSubmitHandler)}>
            <Heading>Reset Password</Heading>
            <Paragraph1>Enter your email address to reset your password</Paragraph1>
            <label>Email</label>
            <Input {...register("email")} type="email" placeholder="test@gmail.com" />
            <p style={{ color: "red", fontSize: "12px" }}>{errors.email?.message}</p>
            <br />
            <Button type="submit">Send The Reset link</Button>
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
