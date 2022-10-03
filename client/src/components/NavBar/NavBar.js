import * as React from "react";
import AppBar from "@mui/material/AppBar";
import StorefrontIcon from "@mui/icons-material/Storefront";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function NavBar() {
  return (
    <AppBar position="relative">
      <Toolbar>
        <StorefrontIcon sx={{ mr: 2 }} />
        <Typography variant="h6" color="inherit" noWrap>
          Customer Reward Program
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
