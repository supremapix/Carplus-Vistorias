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
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
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
        } fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${
          isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0'
        } transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]`}
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
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`nav-link text-[9px] min-[1100px]:text-[9.5px] xl:text-[10px] uppercase tracking-[0.2em] font-medium font-display transition-all py-1 cursor-pointer transform duration-500 delay-[${index * 50}ms] ${
                  isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
                } ${
                  activeSection === item.id ? 'active text-primary font-bold' : 'text-white hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Header Action Button (Shaking) */}
          <div className={`hidden md:flex flex-col items-center gap-1 transition-all duration-700 delay-300 transform ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}>
            <a
              href="/contato.html"
              className="premium-btn-green flex items-center gap-2 font-display font-extrabold text-[11px] uppercase tracking-[0.12em] py-2 px-4 rounded-lg transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-whatsapp text-[#25D366]"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 1.83.49 3.55 1.34 5.03L2 22l5.14-1.31C8.57 21.49 10.24 22 12 22c5.52 0 10-4.48 10-10Z"/></svg>
              CONTATO
            </a>
            <span className="text-[7.5px] text-zinc-400 uppercase font-mono tracking-widest font-semibold block leading-none">
              Fale Conosco · Profissional & Premium
            </span>
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
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] lg:hidden transition-opacity duration-500 ${
          isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Mobile Right Slide Drawer */}
      <div 
        className={`fixed top-0 right-0 w-[80vw] sm:w-[320px] h-screen bg-zinc-950 border-l border-zinc-900 shadow-2xl z-[1000] lg:hidden py-24 px-8 flex flex-col justify-between transition-transform duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-6">
          <div className={`mb-6 pb-4 border-b border-zinc-900/50 flex flex-col gap-2 transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isDrawerOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <Logo variant="dark" isHeader={true} className="scale-90 origin-left mb-1" />
            <span className="text-xs text-primary font-mono font-bold uppercase tracking-widest block">Carplus Vistorias</span>
          </div>
          <nav className="flex flex-col gap-5">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`text-left font-display font-semibold text-base uppercase tracking-widest py-1 transition-all duration-[500ms] ease-out cursor-pointer ${
                  activeSection === item.id ? 'text-primary pl-3 border-l-2 border-primary font-bold' : 'text-white hover:text-primary pl-0'
                } ${isDrawerOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                style={{ transitionDelay: isDrawerOpen ? `${(index + 1) * 60}ms` : '0ms' }}
              >
                {item.label}
              </button>
            ))}
            <a
              href="/mapa-do-site.html"
              className={`text-left font-display font-semibold text-base uppercase tracking-widest py-1 text-white hover:text-primary transition-all duration-[500ms] ease-out ${isDrawerOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
              style={{ transitionDelay: isDrawerOpen ? `${(navItems.length + 1) * 60}ms` : '0ms' }}
            >
              Mapa do Site
            </a>
          </nav>
        </div>

        {/* Drawer Contact Footer Info */}
        <div 
          className={`flex flex-col gap-4 border-t border-zinc-900/50 pt-4 mt-auto transition-all duration-[600ms] ease-out ${isDrawerOpen ? 'translate-y-0 opacity-100 animate-pulse-subtle' : 'translate-y-10 opacity-0'}`}
          style={{ transitionDelay: isDrawerOpen ? `${(navItems.length + 2) * 60}ms` : '0ms' }}
        >
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

          <div className="flex flex-col items-center gap-1.5 w-full">
            <a
              href="/contato.html"
              className="premium-btn-green w-full flex items-center justify-center gap-2 font-display font-extrabold text-[11px] uppercase tracking-widest py-3 rounded-lg transition-all shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-whatsapp text-[#25D366]"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 1.83.49 3.55 1.34 5.03L2 22l5.14-1.31C8.57 21.49 10.24 22 12 22c5.52 0 10-4.48 10-10Z"/></svg>
              CONTATO
            </a>
            <span className="text-[7.5px] text-zinc-400 uppercase font-mono tracking-widest font-semibold block text-center leading-none">
              Fale Conosco · Profissional & Premium
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
