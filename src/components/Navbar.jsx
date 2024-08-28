import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import NavItem from "./NavItem";
const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const navItems = (
    <List sx={{ width: 250 }}>
      <ListItem button onClick={toggleDrawer(false)}>
        <NavItem to="/">Portfolio</NavItem>
      </ListItem>
      <ListItem button onClick={toggleDrawer(false)}>
        <NavItem to="/about">About</NavItem>
      </ListItem>
      <ListItem button onClick={toggleDrawer(false)}>
        <NavItem to="/projects">Projects</NavItem>
      </ListItem>
      <ListItem button onClick={toggleDrawer(false)}>
        <NavItem to="/contact">Contact</NavItem>
      </ListItem>
    </List>
  );

  return (
    <AppBar
      position="static"
      sx={{
        background: "linear-gradient(45deg, #1E1E1E 30%, #00C853 90%)",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        padding: "0.5rem 2rem",
      }}
    >
      <Toolbar
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        sx={{
          justifyContent: "space-between",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {/* Portfolio Title */}
        <Box
          component={motion.div}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <NavItem to="/" style={{ textDecoration: "none" }}>
            <Typography
              variant="h4"
              sx={{
                color: "#fff",
                fontWeight: "bold",
                fontFamily: "'Roboto Slab', serif",
                background: "linear-gradient(45deg, #00C853, #B2FF59)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                cursor: "pointer",
                "&:hover": {
                  transform: "scale(1.1)",
                  transition: "transform 0.3s ease-in-out",
                },
              }}
            >
              Portfolio
            </Typography>
          </NavItem>
        </Box>
        {/* Hamburger Menu Icon for Mobile */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
          component={motion.div}
          whileHover={{ rotate: 90, scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        {/* Drawer for Mobile Navigation */}{" "}
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          PaperProps={{
            component: motion.div,
            initial: { x: "-100%" },
            animate: { x: 0 },
            transition: { type: "spring", stiffness: 100 },
            sx: { backgroundColor: "#1E1E1E" },
          }}
        >
          <IconButton
            edge="end"
            color="inherit"
            aria-label="close"
            onClick={toggleDrawer(false)}
            component={motion.div}
            whileHover={{ rotate: -90, scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            sx={{ ml: "auto", mr: 1 }}
          >
            <CloseIcon />
          </IconButton>
          {navItems}
        </Drawer>
        {/* Desktop Navigation Links */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: "1.5rem" }}>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/projects">Projects</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
