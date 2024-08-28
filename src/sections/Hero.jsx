// import React from "react";
// import { Box, Typography, IconButton, Link } from "@mui/material";
// import { motion } from "framer-motion";
// import XIcon from "@mui/icons-material/X";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import "../styles/HeroStyles.css";

// const Hero = () => {
//   return (
//     <Box
//       component={motion.div}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         padding: { xs: "2rem 1rem", md: "2rem" },
//         height: "100vh",
//         background: "#121212", // Change background to dark color
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       <Box sx={{ zIndex: 2, textAlign: "center" }}>
//         <Typography
//           variant="h3"
//           color="primary"
//           className="typing-text"
//           sx={{
//             fontSize: { lg: "8rem", xs: "2rem", md: "3rem" },
//             color: "#00C853", // Change text color to primary color
//           }}
//         >
//           Hello, I'm
//         </Typography>
//         <Typography
//           variant="h1"
//           sx={{
//             fontWeight: "bold",
//             fontSize: { lg: "5rem", xs: "3rem", md: "5rem" },
//             color: "#fff", // Change text color to white
//           }}
//         >
//           Danyal
//         </Typography>
//         <Typography
//           variant="h5"
//           sx={{
//             color: "#00C853",
//             fontSize: { lg: "4rem", xs: "1.5rem", md: "2rem" },
//           }}
//         >
//           A Creative <span style={{ color: "#2962FF" }}>Web2.0 Developer</span>
//         </Typography>
//         <Box
//           sx={{
//             mt: 2,
//             display: "flex",
//             justifyContent: "center",
//           }}
//         >
//           <IconButton
//             href="https://x.com/danyalkhan_00"
//             color="primary"
//             className="icon-button"
//             sx={{
//               fontSize: { xs: "4rem", md: "5rem" },
//               color: "#00C853", // Change icon color to primary color
//             }}
//           >
//             <XIcon />
//           </IconButton>

//           <IconButton
//             href="https://github.com/muhammadDanyal00"
//             color="primary"
//             className="icon-button"
//             sx={{
//               fontSize: { xs: "4rem", md: "5rem" },
//               color: "#00C853", // Change icon color to primary color
//             }}
//           >
//             <GitHubIcon />
//           </IconButton>

//           <IconButton
//             href="https://www.linkedin.com/in/danyal-khan-29683221a/"
//             color="primary"
//             className="icon-button"
//             sx={{
//               fontSize: { xs: "4rem", md: "5rem" },
//               color: "#00C853", // Change icon color to primary color
//             }}
//           >
//             <LinkedInIcon />
//           </IconButton>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Hero;

import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/HeroStyles.css";

const Hero = () => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: { xs: "2rem 1rem", md: "2rem" },
        height: "80vh",
        background: "#121212",
        position: "relative",
        overflow: "hidden",
        boxSizing: "border-box", // Ensure padding and borders are included in the height calculation
      }}
    >
      <Box sx={{ zIndex: 2, textAlign: "center" }}>
        <Typography
          variant="h3"
          color="primary"
          className="typing-text"
          sx={{
            fontSize: { lg: "7rem", xs: "2rem", md: "4rem" }, // Adjust font size
            color: "#00C853",
          }}
        >
          Hello, I'm
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontWeight: "bold",
            fontSize: { lg: "4rem", xs: "3rem", md: "4.5rem" }, // Adjust font size
            color: "#fff",
          }}
        >
          Danyal
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: "#00C853",
            fontSize: { lg: "3rem", xs: "1.5rem", md: "2rem" }, // Adjust font size
          }}
        >
          A Creative <span style={{ color: "#2962FF" }}>Web2.0 Developer</span>
        </Typography>
        <Box
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: "center",
            gap: { lg: "1rem", xs: "1rem", md: "2rem" }, // Adjust spacing between icons
          }}
        >
          <IconButton
            href="https://x.com/danyalkhan_00"
            color="primary"
            className="icon-button"
            sx={{
              fontSize: { lg: "3rem", xs: "2rem", md: "4rem" }, // Adjust icon size
              color: "#00C853",
            }}
          >
            <XIcon sx={{ fontSize: "inherit" }} />
          </IconButton>

          <IconButton
            href="https://github.com/muhammadDanyal00"
            color="primary"
            className="icon-button"
            sx={{
              fontSize: { lg: "3rem", xs: "2rem", md: "4rem" }, // Adjust icon size
              color: "#00C853",
            }}
          >
            <GitHubIcon sx={{ fontSize: "inherit" }} />
          </IconButton>

          <IconButton
            href="https://www.linkedin.com/in/danyal-khan-29683221a/"
            color="primary"
            className="icon-button"
            sx={{
              fontSize: { lg: "3rem", xs: "2rem", md: "4rem" }, // Adjust icon size
              color: "#00C853",
            }}
          >
            <LinkedInIcon sx={{ fontSize: "inherit" }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
