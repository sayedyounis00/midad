import { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { href: '#', id: '', label: 'الرئيسية' },
  { href: '#services', id: 'services', label: 'خدماتنا' },
  { href: '#how-it-works', id: 'how-it-works', label: 'رحلتك معنا' },
  { href: '#why-us', id: 'why-us', label: 'لماذا مِداد' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Track visible section on scroll
  useEffect(() => {
    const sectionIds = NAV_ITEMS.filter((item) => item.id).map((item) => item.id);
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry with the largest intersection ratio
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: [0, 0.25, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));

    // Handle top of page (no section visible → home is active)
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection('');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (id) => {
    setActiveSection(id);
    setIsOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#" className="logo" onClick={() => handleNavClick('')}>
          <img src="/web_logo.png" alt="شعار مِداد" className="logo-img" />
        </a>

        {/* Wrap links and CTA into a single container for better mobile handling */}
        <div className={`nav-menu-container ${isOpen ? 'open' : ''}`}>
          <nav className="nav-links">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={activeSection === item.id ? 'active' : ''}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </a>
            ))}
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
