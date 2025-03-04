import React from "react";
import { Bell } from "lucide-react";
import { Navbar, Title, NavIcons,  ProfilePic } from "./ExpNavbar.styles";

const ExpNavbar = () => {
  return (
    <Navbar>
    <Title>Expenses</Title>
    <NavIcons>
      <Bell />
      <ProfilePic src="/Images/user.jpg" alt="User" />
    </NavIcons>
  </Navbar>
  );
};

export default ExpNavbar;
