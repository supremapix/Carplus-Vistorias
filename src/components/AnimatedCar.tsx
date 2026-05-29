/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';

export default function AnimatedCar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDriving, setIsDriving] = useState(false);
  const [showPhoneInfo, setShowPhoneInfo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show car below hero section (usually hero is about 80svh which is around 600px scroll)
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        // Reset states when scrolled back to hero
        setIsDriving(false);
        setShowPhoneInfo(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Dispara/drive to the right side
    setIsDriving(true);
    
    // Smoothly scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    // Wait for the drive animation to complete and then reveal the phone number and flashing "Clique Aqui"
    setTimeout(() => {
      setShowPhoneInfo(true);
    }, 850);
  };

  const handleReset = () => {
    setIsDriving(false);
    setShowPhoneInfo(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-[997] pointer-events-none select-none select-none">
      
      {/* 1. Exploding / sliding Phone Number and Flashing click-here tag */}
      {showPhoneInfo && (
        <div className="pointer-events-auto flex items-center gap-3 bg-zinc-950 border-2 border-primary border-solid text-white p-3.5 pr-5 rounded-2xl shadow-2xl animate-[slide-in-right_0.5s_forwards] max-w-sm absolute bottom-16 left-0">
          <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary text-primary flex items-center justify-center animate-pulse">
            <i className="fa-solid fa-phone-volume text-lg"></i>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-zinc-400 font-mono tracking-widest uppercase font-semibold">Agende mais rápido:</span>
            <span className="font-mono text-base font-extrabold text-[#F5A623]">{'(41) 98874-0258'}</span>
            <a 
              href="https://wa.me/5541988740258?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20vistoria%20cautelar."
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-primary mt-1 border-b border-zinc-700 pb-0.5 text-xs font-semibold group flex items-center gap-1.5"
            >
              <span className="animate-[pulse_1s_infinite] bg-primary text-zinc-950 px-2 py-0.5 rounded text-[9px] uppercase font-bold tracking-wider">
                CLIQUE AQUI
              </span>
              <span className="text-[11px] group-hover:translate-x-1 transition-transform">➡ AGENDAR LAUDO</span>
            </a>
          </div>
          <button 
            onClick={handleReset}
            className="absolute top-2 right-2 text-zinc-500 hover:text-white cursor-pointer"
            title="Fechar"
          >
            <i className="fa-solid fa-xmark text-xs"></i>
          </button>
        </div>
      )}

      {/* 2. Interactive SVG Car component */}
      <div 
        onClick={handleClick}
        className={`pointer-events-auto cursor-pointer relative group transition-all duration-[900ms] ease-out flex flex-col items-center ${
          isDriving 
            ? 'translate-x-[calc(80vw-120px)] rotate-[3deg] opacity-0 scale-90' 
            : 'translate-x-0 opacity-100 hover:scale-105 active:scale-95'
        }`}
        style={{
          transitionTimingFunction: 'cubic-bezier(0.8, -0.15, 0.2, 1.15)',
        }}
      >
        {/* Click to climb indicator */}
        <div className="bg-zinc-950/90 border border-zinc-800 text-gray-300 font-display text-[9.5px] font-bold py-1 px-2.5 rounded-full shadow-lg mb-1.5 opacity-90 transition-opacity group-hover:opacity-100 uppercase tracking-wider flex items-center gap-1">
          <i className="fa-solid fa-arrow-up animate-bounce"></i>
          Voltar ao topo
        </div>

        {/* Detailed SVG Sports Car */}
        <svg 
          width="82" 
          height="45" 
          viewBox="0 0 160 88" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="filter drop-shadow-lg"
        >
          {/* Main Car Body shadow */}
          <ellipse cx="80" cy="74" rx="65" ry="8" fill="rgba(0,0,0,0.55)" />

          {/* Car Cabin Roof (dark gray glass style) */}
          <path 
            d="M50 44 C53 25, 102 23, 110 44 Z" 
            fill="#1E1E24" 
            stroke="#F5A623" 
            strokeWidth="3" 
          />
          
          {/* Cabin Windshield division */}
          <path d="M85 24 L81 44" stroke="#F5A623" strokeWidth="2.5" />
          
          {/* Glass glare effect */}
          <path d="M58 40 C60 32, 70 28, 76 28" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" />

          {/* Core Chassis Body (Metallic Black & Dark Gray / Racing Stripe) */}
          <path 
            d="M 12 56 
               C 12 47, 30 44, 45 44 
               L 120 44 
               C 134 44, 146 47, 148 56 
               C 150 63, 140 68, 125 68 
               L 35 68 
               C 20 68, 12 63, 12 56 Z" 
            fill="#121214" 
            stroke="#2D2D34" 
            strokeWidth="3.5" 
          />

          {/* Orange Side Racing Stripes */}
          <path d="M 32 54 L 126 54" stroke="#F5A623" strokeWidth="4" strokeLinecap="round" />
          <path d="M 45 60 L 115 60" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />

          {/* Headlights (Front Left glow) */}
          <path d="M 14 51 C 12 52, 10 56, 12 58" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" className="animate-pulse" />
          <polygon points="6,45 13,51 13,58 6,63" fill="rgba(255, 235, 120, 0.25)" className="animate-pulse" />

          {/* Back Taillights (Rear Right red dot) */}
          <path d="M 148 52 C 150 53, 151 56, 149 58" stroke="#F5A623" strokeWidth="3.5" strokeLinecap="round" />

          {/* Door Handle */}
          <rect x="75" y="48" width="10" height="2" rx="1" fill="#FFFFFF" />

          {/* Front Wheel & Rim (Left side) */}
          <g className={`transition-transform duration-[600ms] ${isDriving ? 'animate-spin' : 'group-hover:animate-[spin_2s_infinite_linear]'}`}>
            <circle cx="45" cy="68" r="15" fill="#0A0A0C" stroke="#25252B" strokeWidth="2.5" />
            <circle cx="45" cy="68" r="9" fill="#D4D4D8" />
            <circle cx="45" cy="68" r="3" fill="#18181B" />
            {/* Wheel Spokes */}
            <line x1="39" y1="68" x2="51" y2="68" stroke="#18181B" strokeWidth="2" />
            <line x1="45" y1="62" x2="45" y2="74" stroke="#18181B" strokeWidth="2" />
          </g>

          {/* Rear Wheel & Rim (Right side) */}
          <g className={`transition-transform duration-[600ms] ${isDriving ? 'animate-spin' : 'group-hover:animate-[spin_2s_infinite_linear]'}`}>
            <circle cx="115" cy="68" r="15" fill="#0A0A0C" stroke="#25252B" strokeWidth="2.5" />
            <circle cx="115" cy="68" r="9" fill="#D4D4D8" />
            <circle cx="115" cy="68" r="3" fill="#18181B" />
            {/* Wheel Spokes */}
            <line x1="109" y1="68" x2="121" y2="68" stroke="#18181B" strokeWidth="2" />
            <line x1="115" y1="62" x2="115" y2="74" stroke="#18181B" strokeWidth="2" />
          </g>
        </svg>

        {/* Speed smoke trailing effects behind the car on hover */}
        <div className="absolute -left-4 bottom-1 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-650 animate-ping"></span>
          <span className="w-1 h-1 rounded-full bg-zinc-600 animate-ping delay-200"></span>
        </div>
      </div>

    </div>
  );
}
