import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";

const contactDetails = [
  { label: "Phone", value: "+92 3078071437" },
  { label: "Email", value: "dkdanyal456@gmail.com" },
  { label: "Address", value: "Abottabad, Pakistan" },
];

const Contact = () => {
  return (
    <Box
      sx={{
        padding: "4rem 2rem",
        background: "#121212", // Keeping the background color consistent
        borderRadius: "15px",
        minHeight: "60vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        component={motion.div}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        sx={{
          padding: "2rem",
          backgroundColor: "#1E1E1E",
          borderRadius: "15px",
          display: "flex",
          maxWidth: "800px",
          boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="\src\assets\contact.webp"
              alt="Contact"
              sx={{
                width: "100%",
                borderRadius: "10px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                variant="h4"
                color="#fff"
                sx={{ fontWeight: "bold", marginBottom: "1.5rem" }}
              >
                Contact Me
              </Typography>
              {contactDetails.map((detail, index) => (
                <Typography
                  component={motion.div}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  key={index}
                  variant="h6"
                  color="#00C853"
                  sx={{
                    fontWeight: "bold",
                    marginBottom: "0.5rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {detail.label}:{" "}
                  <Typography
                    component="span"
                    color="#fff"
                    sx={{ marginLeft: "1rem", fontWeight: "normal" }}
                  >
                    {detail.value}
                  </Typography>
                </Typography>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Contact;
