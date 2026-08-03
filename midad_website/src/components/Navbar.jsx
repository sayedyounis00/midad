import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#" className="logo">
          <img src="/web_logo.png" alt="شعار مِداد" className="logo-img" />
        </a>

        {/* Wrap links and CTA into a single container for better mobile handling */}
        <div className={`nav-menu-container ${isOpen ? 'open' : ''}`}>
          <nav className="nav-links">
            <a href="#" className="active" onClick={() => setIsOpen(false)}>الرئيسية</a>
            <a href="#services" onClick={() => setIsOpen(false)}>خدماتنا</a>
            <a href="#how-it-works" onClick={() => setIsOpen(false)}>رحلتك معنا</a>
            <a href="#why-us" onClick={() => setIsOpen(false)}>لماذا مِداد</a>
          </nav>

          <div className="navbar-cta">
            <a href="#how-it-works" className="btn btn-primary" onClick={() => setIsOpen(false)}>ابدأ قصتك معنا</a>
          </div>
        </div>

        {/* Mobile menu toggle button */}
        <button
          className={`nav-toggle ${isOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={isOpen}
        >
          <span className="toggle-line"></span>
          <span className="toggle-line"></span>
          <span className="toggle-line"></span>
        </button>
      </div>
    </header>
  );
}
