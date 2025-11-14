import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";

import Home from "./pages/home.jsx";
import About from "./sections/about.jsx";
import Projects from "./sections/project.jsx";
import Contact from "./sections/contact.jsx";

export default function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  );
}