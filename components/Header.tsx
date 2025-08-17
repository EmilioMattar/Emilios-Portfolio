import React, { useState, useEffect, useRef } from 'react';

const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
);

const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);


export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  
  const sectionRefs = useRef<Record<string, IntersectionObserverEntry>>({});

  const navLinks = [
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          sectionRefs.current[entry.target.id] = entry;
        });

        const visibleSections = Object.values(sectionRefs.current).filter(
          (entry) => entry.isIntersecting
        );
        
        if (visibleSections.length > 0) {
           // Find the one that is most visible (highest intersection ratio)
          visibleSections.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          setActiveSection(visibleSections[0].target.id);
        }
      },
      { rootMargin: '-30% 0px -70% 0px', threshold: 0 } // Adjust rootMargin to trigger when section is in the middle of the screen
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };


  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-slate-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto flex items-center justify-between px-6 md:px-12 lg:px-24 py-4">
          <a href="#" onClick={(e) => handleNavClick(e, '#hero')} className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors z-50">
            EM
          </a>
          <ul className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`transition-colors duration-300 font-medium ${
                    activeSection === link.href.substring(1)
                      ? 'text-cyan-400'
                      : 'text-slate-300 hover:text-cyan-400'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button 
            className="md:hidden z-50 text-slate-300 hover:text-cyan-400" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </nav>
      </header>
      
      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-slate-900/95 backdrop-blur-lg z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="flex flex-col items-center justify-center h-full space-y-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-3xl font-bold text-slate-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};