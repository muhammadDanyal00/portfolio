import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", proficiency: 90 },
  { name: "TypeScript", proficiency: 75 },
  { name: "React.JS", proficiency: 90 },
  { name: "Node.JS", proficiency: 80 },
  { name: "Express.JS", proficiency: 80 },
  { name: "MongoDB", proficiency: 75 },
  { name: "PostgreSQL", proficiency: 70 },
  { name: "Docker", proficiency: 65 },
  { name: "API Handling", proficiency: 80 },
  { name: "MUI , AntDesign , Bootstrap", proficiency: 95 },
];

const Skills = () => {
  return (
    <Box
      sx={{
        padding: "2rem",
        background: "#121212", // Background consistent with other sections
        borderRadius: "15px",
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h4"
        color="#fff"
        sx={{ fontWeight: "bold", textAlign: "center", marginBottom: "1rem" }}
      >
        Skills
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {skills.map((skill, idx) => (
          <Grid item xs={12} key={idx}>
            <Typography variant="body1" color="#fff" gutterBottom>
              {skill.name}
            </Typography>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "10px",
                backgroundColor: "#2e2e2e",
                borderRadius: "5px",
              }}
            >
              <Box
                component={motion.div}
                initial={{ width: 0 }}
                animate={{ width: `${skill.proficiency}%` }}
                transition={{ duration: 1 }}
                sx={{
                  height: "100%",
                  backgroundColor: "#00C853",
                  borderRadius: "5px",
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
