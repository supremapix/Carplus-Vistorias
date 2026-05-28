/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { FAQItemType } from '../types';
import { FAQS_SEO } from '../data';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-4 px-2">
      {FAQS_SEO.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div 
            key={index} 
            id={`faq-item-${index}`}
            className={`border rounded-lg overflow-hidden transition-all duration-300 ${
              isOpen 
                ? 'border-primary bg-zinc-900/60 shadow-lg shadow-primary/5' 
                : 'border-zinc-800 bg-zinc-900/20 hover:border-zinc-700'
            }`}
          >
            {/* Header / Question Trigger */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left p-5 flex items-center justify-between gap-4 select-none focus:outline-none"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
            >
              <h3 className="font-display font-semibold text-lg text-white leading-snug pr-2 text-justify">
                {faq.question}
              </h3>
              <span 
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-zinc-800 border border-zinc-700 text-primary transition-transform duration-300 ${
                  isOpen ? 'rotate-180 bg-primary/10 border-primary/40' : ''
                }`}
              >
                <i className="fa-solid fa-chevron-down text-sm"></i>
              </span>
            </button>

            {/* Answer body with smooth layout transitions */}
            <div
              id={`faq-answer-${index}`}
              className={`transition-all duration-300 ease-in-out ${
                isOpen 
                  ? 'max-h-[300px] opacity-100 border-t border-zinc-800' 
                  : 'max-h-0 opacity-0 pointer-events-none'
              }`}
              style={{ overflow: 'hidden' }}
            >
              <div className="p-5 text-white text-justify text-base leading-relaxed font-semibold">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
