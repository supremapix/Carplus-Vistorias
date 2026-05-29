/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { AppSection } from '../types';

interface HeaderProps {
  activeSection: AppSection;
  onNavigate: (section: AppSection) => void;
}

export default function Header({ activeSection, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: AppSection; label: string }[] = [
    { id: 'home', label: 'Início' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'sobre', label: 'Sobre Nós' },
    { id: 'cidades', label: 'Cidades Atendidas' },
    { id: 'faq', label: 'FAQ / Dúvidas' },
  ];

  const handleLinkClick = (id: AppSection) => {
    setIsDrawerOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        id="main-header"
        className={`${
          isScrolled 
            ? 'scrolled bg-zinc-950/95 backdrop-blur-md py-3 shadow-xl shadow-black/30' 
            : 'bg-gradient-to-b from-black/80 to-transparent py-5'
        } transition-all duration-300`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo with clean scaling */}
          <div 
            className="cursor-pointer transition-transform duration-300 active:scale-95 flex items-center"
            onClick={() => handleLinkClick('home')}
          >
            <Logo 
              variant="dark" 
              isHeader={true} 
              className={`origin-left transition-all duration-300 ${isScrolled ? 'scale-90' : 'scale-100'}`} 
            />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`nav-link text-[9px] min-[1100px]:text-[9.5px] xl:text-[10px] uppercase tracking-[0.2em] font-medium font-display transition-colors py-1 cursor-pointer ${
                  activeSection === item.id ? 'active text-primary font-bold' : 'text-zinc-300 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Header Action Button (Shaking) */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="/contato.html"
              className="header-cta-shake flex items-center gap-2 bg-gradient-to-r from-primary to-primary-light hover:brightness-110 active:scale-95 text-white font-display font-extrabold text-[11px] uppercase tracking-[0.12em] py-2.5 px-5 rounded-lg transition-all shadow-md shadow-primary/20"
            >
              <i className="fa-solid fa-comment-dots text-xs"></i>
              Contato
            </a>
          </div>

          {/* Mobile Hamburguer Indicator */}
          <button
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            className="lg:hidden flex flex-col justify-between w-6 h-5 select-none focus:outline-none z-[1001]"
            aria-label="Abrir Menu"
          >
            <span 
              className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 origin-left ${
                isDrawerOpen ? 'rotate-45 translate-x-1' : ''
              }`}
            ></span>
            <span 
              className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                isDrawerOpen ? 'opacity-0 scale-0' : ''
              }`}
            ></span>
            <span 
              className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 origin-left ${
                isDrawerOpen ? '-rotate-45 translate-x-1' : ''
              }`}
            ></span>
          </button>
        </div>
      </header>

      {/* Backdrop overlay for Mobile Drawer */}
      <div 
        onClick={() => setIsDrawerOpen(false)}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] lg:hidden transition-opacity duration-300 ${
          isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Mobile Right Slide Drawer */}
      <div 
        className={`fixed top-0 right-0 w-[80vw] sm:w-[320px] h-screen bg-zinc-950 border-l border-zinc-800 shadow-2xl z-[1000] lg:hidden py-24 px-8 flex flex-col justify-between transition-transform duration-300 ease-out transform ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-6">
          <div className="mb-6 pb-4 border-b border-zinc-900/50 flex flex-col gap-2">
            <Logo variant="dark" isHeader={true} className="scale-90 origin-left mb-1" />
            <span className="text-xs text-primary font-mono font-bold uppercase tracking-widest block">Carplus Vistorias</span>
          </div>
                 <nav className="flex flex-col gap-5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`text-left font-display font-semibold text-base uppercase tracking-widest py-1 transition-colors relative cursor-pointer ${
                  activeSection === item.id ? 'text-primary pl-3 border-l-2 border-primary font-bold' : 'text-gray-300 hover:text-white pl-0'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="/mapa-do-site.html"
              className="text-left font-display font-semibold text-base uppercase tracking-widest py-1 text-gray-300 hover:text-white"
            >
              Mapa do Site
            </a>
          </nav>
        </div>

        {/* Drawer Contact Footer Info */}
        <div className="flex flex-col gap-4 border-t border-zinc-900/50 pt-4 mt-auto">
          <div className="flex flex-col gap-2 bg-zinc-900/40 p-3 rounded-lg border border-zinc-900 text-left">
            <span className="text-[9px] text-primary uppercase font-bold tracking-widest block font-mono mb-1">Contato & Endereço</span>
            
            <a href="tel:+5541988740258" className="flex items-center gap-2 text-white font-semibold text-xs hover:text-primary transition-colors">
              <i className="fa-solid fa-phone text-primary text-[10px]"></i>
              (41) 98874-0258
            </a>
            
            <a href="mailto:laudo@carplusvistorias.com.br" className="flex items-center gap-2 text-white font-semibold text-xs hover:text-primary transition-colors truncate">
              <i className="fa-solid fa-envelope text-primary text-[10px]"></i>
              laudo@carplusvistorias.com.br
            </a>
            
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=Av.+Presidente+Arthur+da+Silva+Bernardes,+1323,+Port%C3%A3o,+Curitiba,+PR"
              target="_blank"
              rel="noopener noreferrer" 
              className="flex items-start gap-2 text-white text-[10.5px] hover:text-primary transition-colors leading-snug"
            >
              <i className="fa-solid fa-location-dot text-primary text-[10px] mt-0.5 flex-shrink-0"></i>
              <span>Av. Pres. Arthur S. Bernardes, 1323 · Portão</span>
            </a>
          </div>

          <a
            href="/contato.html"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary-light hover:brightness-110 text-white font-display font-extrabold text-[11px] uppercase tracking-widest py-3 rounded-lg transition-all shadow-lg shadow-primary/20 animate-pulse"
          >
            <i className="fa-solid fa-comment-dots text-sm"></i>
            Fale Conosco / Contato
          </a>
        </div>
      </div>
    </>
  );
}
