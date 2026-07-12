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
          <img src="/LOGO ICON.png" alt="شعار المنصة" className="logo-img" />
          <span className="logo-text">مِداد</span>
        </a>

        {/* Wrap links and CTA into a single container for better mobile handling */}
        <div className={`nav-menu-container ${isOpen ? 'open' : ''}`}>
          <nav className="nav-links">
            <a href="#" className="active" onClick={() => setIsOpen(false)}>الرئيسية</a>
            <a href="#how-it-works" onClick={() => setIsOpen(false)}>الأسئلة الشائعة</a>
            <a href="#" onClick={() => setIsOpen(false)}>عن المنصة</a>
          </nav>

          <div className="navbar-cta">
            <a href="#" className="btn btn-primary" onClick={() => setIsOpen(false)}>تصفّح المكتبة</a>
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
