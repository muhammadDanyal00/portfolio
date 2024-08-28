import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import LazyLoad from "react-lazy-load";

const projects = [
  {
    title: "A blog website similar to Medium",
    year: "2024",
    image: "blog2.webp",
  },
  {
    title: "Expense Tracker App",
    year: "2024",
    image: "expense2.webp",
  },
  {
    title: "JWT Authentication System",
    year: "2023",
    image: "lock2.webp",
  },

  {
    title: "Bar-Code-Generator",
    year: "2024",
    image: "barcode.webp",
  },
  {
    title: "Location Tracker",
    year: "2024",
    image: "location.webp",
  },
  {
    title: "Decentralized Exchange",
    year: "2025 -- Under Construction",
    image: "DEX.webp",
  },
];

const Projects = () => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      sx={{
        padding: { xs: "1rem", md: "2rem" },
        background: "#121212",
        borderRadius: "15px",
        minHeight: "60vh",
      }}
    >
      <Typography
        variant="h4"
        color="#fff"
        sx={{ fontWeight: "bold", textAlign: "center", mb: { xs: 2, md: 4 } }}
      >
        Recent Projects
      </Typography>
      <Box
        sx={{
          height: "3px",
          width: { xs: "30px", md: "50px" },
          backgroundColor: "#00C853",
          margin: "1rem auto",
        }}
      ></Box>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            //{" "}
            <Box
              component={motion.div}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              sx={{
                backgroundColor: "#1E1E1E",
                borderRadius: "15px",
                overflow: "hidden",
              }}
            >
              <LazyLoad height={200} offset={100}>
                <Box
                  component="img"
                  src={project.image}
                  alt={project.title}
                  sx={{
                    width: "100%",
                    height: "200px", // Set a fixed height for images
                    objectFit: "cover", // Ensure the image covers the box without distortion
                    display: "block",
                    borderRadius: "15px 15px 0 0",
                  }}
                />
              </LazyLoad>
              <Box sx={{ padding: "1rem", flexGrow: 1 }}>
                {" "}
                {/* Allow text box to grow */}
                <Typography
                  variant="h6"
                  color="#fff"
                  sx={{ fontWeight: "bold", marginBottom: "0.5rem" }}
                >
                  {project.title.toUpperCase()}
                </Typography>
                <Typography variant="body2" color="#00C853">
                  {project.year}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
