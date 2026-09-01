"use client";

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '-100px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = ['home', 'about', 'contact'];
    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className='sticky top-0 z-50 w-full bg-gray-100 text-black shadow-sm'>
      <div className='flex justify-between items-center px-4 py-3 md:px-7 md:py-3'>
        <div className='flex font-semibold text-xl md:text-[22px] gap-1'>
          Mifta
          <span className='font-medium'>Setya</span>
        </div>

        {/* Desktop nav */}
        <div className='hidden md:flex text-[15px] gap-8 text-gray-400'>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`hover:text-blue-500 transition-colors ${
                activeSection === link.id ? 'text-blue-500 font-medium' : ''
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className='md:hidden flex flex-col gap-1.5 p-2'
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label='Toggle menu'
        >
          <span className={`block w-5 h-0.5 bg-gray-600 transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-gray-600 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-gray-600 transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-40' : 'max-h-0'}`}>
        <div className='flex flex-col px-4 pb-3 gap-3 text-sm text-gray-400'>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMenuOpen(false)}
              className={`hover:text-blue-500 transition-colors ${
                activeSection === link.id ? 'text-blue-500 font-medium' : ''
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
