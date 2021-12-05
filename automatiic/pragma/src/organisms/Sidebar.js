import {
  Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SidebarConfig from "../data/SidebarConfig";

function Sidebar({ isOpen, closeSidebar }) {
  //   const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarOpen = isOpen;

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => {
        closeSidebar();
      }}
    >
      <List>
        {SidebarConfig.map((item, index) => (
          <Link to={item.path} >
            <ListItem button key={item.title}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );
  return (
    <div>
      <Drawer anchor="left" open={sidebarOpen} onClose={closeSidebar}>
        {list()}
      </Drawer>
    </div>
  );
}

export default Sidebar;
