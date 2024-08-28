import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import { motion } from "framer-motion";

const NavItem = ({ to, children }) => {
  return (
    <NavLink to={to} style={{ textDecoration: "none" }}>
      <Button
        component={motion.button}
        whileHover={{
          backgroundColor: "#00C853",
          color: "#fff",
          scale: 1.1,
        }}
        whileTap={{ scale: 0.9 }}
        sx={{
          color: "#00C853",
          fontWeight: "bold",
          borderRadius: "10px",
          padding: "0.5rem 1rem",
          transition: "all 0.3s ease-in-out",
          "@media (max-width: 600px)": {
            fontSize: "1.2rem", // Increase font size on small screens
            padding: "1rem 1.5rem", // Increase padding on small screens
          },
          "@media (min-width: 601px)": {
            color: "#B2FF59", // Change text color for large screens
          },
        }}
      >
        {children}
      </Button>
    </NavLink>
  );
};

export default NavItem;
