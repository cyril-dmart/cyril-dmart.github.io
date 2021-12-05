import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Outlet } from "react-router";
import CustomAppBar from "../organisms/Appbar";
import Sidebar from "../organisms/Sidebar";

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      <Sidebar isOpen={sidebarOpen} closeSidebar={toggleSidebar} />
      <div>
        <CustomAppBar openSidebar={toggleSidebar} />
        <Box sx={{
          pt:4
        }}> 
          <Container>
            <Outlet />
          </Container>
        </Box>
      </div>
    </div>
  );
}

export default Layout;
