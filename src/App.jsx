import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Hero from "./sections/Hero";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/app.css";
function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
