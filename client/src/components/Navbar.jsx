import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <div className="logo">
          <h2>Shruti Samshette</h2>
        </div>

        {/* Hamburger Menu */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>

          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
          </li>

          <li>
            <a href="#skills" onClick={() => setMenuOpen(false)}>
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;