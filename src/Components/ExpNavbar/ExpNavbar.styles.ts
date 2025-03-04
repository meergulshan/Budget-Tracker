import styled from "styled-components";
export const  Navbar = styled.nav`
  margin-left: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;

export const NavIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;


export const ProfilePic = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #ddd;
  cursor: pointer;
`;
