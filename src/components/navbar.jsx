import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const link = ({ isActive }) =>
    `px-4 py-2 rounded-lg transition-all duration-300 font-inter text-sm md:text-base font-semibold ${isActive
      ? "text-white bg-brand-500/30 border-2 border-brand-400 shadow-lg shadow-brand-500/40"
      : "text-white hover:text-white hover:bg-white/20 hover:shadow-lg"
    } [text-shadow:0_2px_8px_rgba(0,0,0,0.9),0_0_12px_rgba(0,0,0,0.8)]`;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-2xl border-b-2 border-white/30 shadow-[0_4px_20px_rgba(0,0,0,0.8)] h-[64px] md:h-[80px] box-border"
      aria-label="Hauptnavigation"
    >
      {/* Starker Gradient für maximale Lesbarkeit */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/98 to-black/95 pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div style={{ paddingLeft: '4rem' }} className="sm:pl-6 lg:pl-8">
            <NavLink
              to="/"
              className="flex items-center gap-2 group"
              aria-label="syntaxcode - Zur Startseite"
            >
              <span className="text-2xl md:text-3xl font-bold font-poppins text-white group-hover:text-brand-300 transition-colors duration-300 [text-shadow:0_2px_10px_rgba(0,0,0,1),0_0_20px_rgba(0,0,0,0.9),0_4px_8px_rgba(0,0,0,0.8)]">
                syntax
              </span>
              <span className="text-2xl md:text-3xl font-mono font-bold text-brand-300 group-hover:text-brand-200 transition-colors duration-300 [text-shadow:0_2px_10px_rgba(0,0,0,1),0_0_20px_rgba(77,125,255,0.5),0_4px_8px_rgba(0,0,0,0.8)]">
                &lt;/&gt;
              </span>
              <span className="text-2xl md:text-3xl font-bold font-poppins text-white group-hover:text-brand-300 transition-colors duration-300 [text-shadow:0_2px_10px_rgba(0,0,0,1),0_0_20px_rgba(0,0,0,0.9),0_4px_8px_rgba(0,0,0,0.8)]">
                code
              </span>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2 text-white pr-4 sm:pr-6 lg:pr-8">
            <NavLink to="/" className={link}>
              Home
            </NavLink>
            <NavLink to="/about" className={link}>
              About
            </NavLink>
            <NavLink to="/projects" className={link}>
              Projects
            </NavLink>
            <NavLink to="/contact" className={link}>
              Contact
            </NavLink>
            <NavLink to="/uebungsaufgaben" className={link}>
              Übungsaufgaben
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/25 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-400 [text-shadow:0_2px_8px_rgba(0,0,0,0.9),0_0_12px_rgba(0,0,0,0.8)] pr-4 sm:pr-6 lg:pr-8"
            aria-label="Menü öffnen/schließen"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-in-up border-t-2 border-white/30 mt-2 pt-4 bg-black/50 backdrop-blur-md rounded-b-lg">
            <div className="flex flex-col gap-2">
              <NavLink
                to="/"
                className={link}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={link}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </NavLink>
              <NavLink
                to="/projects"
                className={link}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </NavLink>
              <NavLink
                to="/contact"
                className={link}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </NavLink>
              <NavLink
                to="/uebungsaufgaben"
                className={link}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Übungsaufgaben
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}