"use client";

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

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

  return (
    <div className='sticky top-0 z-50 w-full px-7 py-3 shadow-sm bg-gray-100 text-black flex justify-between items-center'>
      <div className='flex font-semibold text-[22px] gap-1'>
        Mifta
        <span className='font-medium'>Setya</span>
      </div>
      <div className='flex text-[15px] gap-8 text-gray-400'>
        <a
          href="#home"
          className={`hover:text-blue-500 transition-colors ${
            activeSection === 'home' ? 'text-blue-500 font-medium' : ''
          }`}
        >
          Home
        </a>
        <a
          href="#about"
          className={`hover:text-blue-500 transition-colors ${
            activeSection === 'about' ? 'text-blue-500 font-medium' : ''
          }`}
        >
          About
        </a>
        <a
          href="#contact"
          className={`hover:text-blue-500 transition-colors ${
            activeSection === 'contact' ? 'text-blue-500 font-medium' : ''
          }`}
        >
          Contact
        </a>
      </div>
    </div>
  );
}