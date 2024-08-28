import React from "react";
import { Box, Typography, Modal } from "@mui/material";
import { motion } from "framer-motion";

const CVModal = ({ open, onClose, cvDetails }) => {
  return (
    <Modal
      open={open}
      onClose={onClose} // This will trigger the modal to close when clicking outside
      closeAfterTransition
      disableScrollLock // Prevents body scroll when modal is open
    >
      <Box
        component={motion.div}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bgcolor: "rgba(30, 30, 30, 0.9)", // Semi-transparent background
          p: 2,
        }}
        onClick={onClose} // Add this line to close the modal when clicking outside the content
      >
        <Box
          sx={{
            width: { xs: "75%", sm: "80%", md: "70%", lg: "50%" }, // Responsive width
            maxWidth: "800px",
            bgcolor: "#1E1E1E",
            border: "2px solid #00C853",
            borderRadius: "15px",
            boxShadow: 24,
            p: 4,
            overflowY: "auto", // Allow scrolling if content overflows
            maxHeight: "80vh", // Limit the height of the modal
          }}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal content
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: "'Playfair Display', serif", // Elegant serif font for the title
              color: "#00C853",
              fontWeight: "bold",
              letterSpacing: "0.5px", // Slight letter spacing for a more polished look
              mb: 2,
              textAlign: "center",
            }}
          >
            Resume
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Roboto', sans-serif", // Modern sans-serif font for body text
              color: "#b0b0b0",
              fontSize: "1.1rem", // Slightly larger font size for readability
              lineHeight: 1.7, // Increased line height for a cleaner look
              letterSpacing: "0.3px", // Slight letter spacing for readability
              whiteSpace: "pre-line", // Preserve line breaks in cvDetails
            }}
          >
            {cvDetails}
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
};

export default CVModal;
