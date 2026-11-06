
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass =
    "relative hover:text-lime-400 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-lime-400 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <nav className="sticky top-0 z-50 bg-black px-4 md:px-8 py-3">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a href="#home">
          <img
            src="/Aaryavart_Fitness_Neon_Logo-removebg-preview.png"
            alt="Aaryavart Fitness"
            className="h-10 md:h-12 w-auto"
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6 font-medium text-white">
          <a href="#home" className={linkClass}>Home</a>
          <a href="#about" className={linkClass}>About</a>
          <a href="#services" className={linkClass}>Services</a>
          <a href="#pricing" className={linkClass}>Pricing</a>
          <a href="#contact" className={linkClass}>Contact</a>
        </div>

        {/* Desktop Button */}
        <a
          href="#contact"
          className="hidden md:block bg-lime-400 text-black px-5 py-2 rounded-md font-semibold hover:bg-lime-200 transition-colors"
        >
          Join Now
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-lime-400 text-3xl"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-5 pt-5 pb-3 font-medium text-white">
          <a href="#home" onClick={() => setMenuOpen(false)} className={linkClass}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)} className={linkClass}>About</a>
          <a href="#services" onClick={() => setMenuOpen(false)} className={linkClass}>Services</a>
          <a href="#pricing" onClick={() => setMenuOpen(false)} className={linkClass}>Pricing</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className={linkClass}>Contact</a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="bg-lime-400 text-black px-5 py-2 rounded-md font-semibold text-center"
          >
            Join Now
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
