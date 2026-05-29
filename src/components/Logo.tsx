/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark'; // 'light' is for light backgrounds (dark text), 'dark' is for dark backgrounds (light/white text)
  className?: string;
  showText?: boolean;
  isHeader?: boolean;
}

export default function Logo({ variant = 'dark', className = '', showText = true, isHeader = false }: LogoProps) {
  const isLightBg = variant === 'light';
  
  const textColor = isLightBg ? 'text-zinc-900' : 'text-white';
  const subtextColor = isLightBg ? 'text-zinc-600' : 'text-gray-300';
  const pColor = '#F5A623'; // Always orange/amber

  // Direct high-resolution load link for the shared asset
  const logoUrl = "https://img.carplusvistorias.com.br/carplus-vistorias-portao-logo.png";
  
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Precision Logo Image from original Carplus design */}
      <div className="relative flex-shrink-0">
        <img 
          src={logoUrl} 
          alt="Carplus Vistorias" 
          className={
            isHeader 
              ? "h-12 xs:h-14 sm:h-16 md:h-18 lg:h-20 max-h-[80px] w-auto object-contain transition-all duration-300"
              : "h-14 w-auto object-contain"
          }
          referrerPolicy="no-referrer"
          onError={(e) => {
            // Keep a clean fallback if third-party network has issues
            console.warn("Logo fallback triggered");
          }}
        />
      </div>
      
      {/* Logo Typography Group - completely hidden in Header to use only the premium rectangular logo */}
      {showText && !isHeader && (
        <div className="flex flex-col leading-none">
          <div className="flex items-baseline font-sans text-2xl tracking-tight font-extrabold uppercase">
            <span className={textColor}>Car</span>
            <span className="text-secondary font-black" style={{ color: pColor }}>plus</span>
          </div>
          <div className={`font-sans text-[9px] font-bold tracking-[0.24em] uppercase ${subtextColor} mt-0.5`}>
            VISTORIAS
          </div>
        </div>
      )}
    </div>
  );
}
