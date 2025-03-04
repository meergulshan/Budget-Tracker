import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 50px;
  height: 100vh;
  background-color: rgba(255, 255, 255, 1);
  
;
  color: white;
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
`;

export const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
`;

export const SidebarItem = styled.li`
  margin: 20px 0;
  font-size: 18px;
  cursor: pointer;

  a {
    color: white;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;
