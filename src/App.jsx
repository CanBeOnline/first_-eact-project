import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";

import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Projects from "./pages/projects.jsx";
import Contact from "./pages/contact.jsx";
import Login from "./sections/login.jsx";
import Uebungsaufgaben from "./pages/uebungsaufgaben.jsx";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/uebungsaufgaben" element={<Uebungsaufgaben />} />
      </Routes>
    </>
  );
}