import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import Skills from "../sections/Skills";
import { Link } from "react-router-dom";
import CVModal from "../sections/CVModal"; // Import the CVModal component

const About = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const cvDetails = `
   Muhammad Danyal Khan
+92-3078071437 | dkdanyal456@gmail.com | https://muhammadDanyal00.github.io/portfolio | Twitter: @danyal00 | LinkedIn: DANYAL KHAN

Summary:
- Full stack software developer with expertise in front-end and back-end development
- Proficient in solving problems through self-taught concepts

Skills:
- Frontend: JavaScript, React, Next.js, Redux, TypeScript
- Backend: Node.js, Express, Next.js, TypeScript and JavaScript
- Database: MongoDB, PostgreSQL
- Real-time communication: Socket.io and WebRTC (in progress)

Projects:
1. Add to Cart App (React.js and TypeScript)
2. MERN Stack Blog App
3. MERN Hotel Booking App
4. Chat App (Socket.io, WebRTC)

Education:
COMSATS University Islamabad, Abbottabad Campus
Bachelor of Software Engineering | Sept 2021 - July 2025
  `;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        padding: "2rem",
        minHeight: "60vh",
        background: "#121212",
        borderRadius: "15px",
        gap: { xs: "2rem", md: "0" },
      }}
    >
      <Box
        component={motion.div}
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        sx={{
          position: "relative",
          maxWidth: { xs: "100%", md: "50%" },
          overflow: "hidden",
          borderRadius: "15px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "20px",
            left: "20px",
            width: "100%",
            height: "100%",
            backgroundColor: "#00C853",
            borderRadius: "15px",
            zIndex: -1,
          }}
        ></Box>
        <motion.img
          src="/profile2.webp"
          alt="Profile"
          style={{
            borderRadius: "15px",
            maxWidth: "100%",
            height: "auto",
            display: "block",
            filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))",
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </Box>
      <Box
        component={motion.div}
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        sx={{
          maxWidth: { xs: "100%", md: "50%" },
          padding: "2rem",
        }}
      >
        <Typography variant="h4" color="#fff" sx={{ fontWeight: "bold" }}>
          About Me
        </Typography>
        <Box
          sx={{
            height: "3px",
            width: "50px",
            backgroundColor: "#00C853",
            margin: "1rem 0",
          }}
        ></Box>
        <Typography
          variant="body1"
          color="#b0b0b0"
          sx={{ marginBottom: "1.5rem" }}
        >
          I'm a full-stack developer proficient in MERN stack, Next.js,
          JavaScript, TypeScript, Socket.IO, and WebRTC,API handling, SDK
          utilization and also working on web3.0 real time projects. I enjoy
          building engaging web applications that solve real-world problems.
        </Typography>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <Button
            component={Link}
            to="/contact"
            variant="contained"
            sx={{
              backgroundColor: "#00C853",
              color: "#fff",
              padding: "0.5rem 2rem",
              borderRadius: "5px",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#00A145",
              },
            }}
          >
            Hire Me
          </Button>
          <Button
            variant="outlined"
            onClick={handleModalOpen}
            sx={{
              borderColor: "#00C853",
              color: "#00C853",
              padding: "0.5rem 2rem",
              borderRadius: "5px",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#00C853",
                color: "#fff",
              },
            }}
          >
            Visit CV
          </Button>
        </Box>
      </Box>

      <Skills />

      <CVModal
        open={modalOpen}
        onClose={handleModalClose}
        cvDetails={cvDetails}
      />
    </Box>
  );
};

export default About;
