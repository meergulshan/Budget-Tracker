import React from "react";
import { SidebarContainer, SidebarItem, SidebarMenu } from "./Sidebar.styles";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();
  return (
    <SidebarContainer>
      <img src="\Images\sidebar-logo.svg" alt="" />
      <SidebarMenu>
        <SidebarItem>
          <img src="\Images\exit.svg" alt="" onClick={() => navigate("/Sign")} />
        </SidebarItem>
        <SidebarItem>
        <img src="\Images\exp.svg" alt="" />
        </SidebarItem>
        <SidebarItem>
        <img src="\Images\Vector.svg" alt="" />
        </SidebarItem>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
