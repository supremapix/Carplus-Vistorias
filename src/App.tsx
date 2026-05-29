/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Heart, Zap, MapPin, Map, Star } from 'lucide-react';
import Header from './components/Header';
import Logo from './components/Logo';
import CountUp from './components/CountUp';
import FAQAccordion from './components/FAQAccordion';
import CityExplorer from './components/CityExplorer';
import WhatsAppButton from './components/WhatsAppButton';
import AnimatedCar from './components/AnimatedCar';
import { AppSection } from './types';
import { SERVICES_HOME, ADVANTAGES_HOME, DETAILED_SERVICES } from './data';

export default function App() {
  const [activeSection, setActiveSection] = useState<AppSection>('home');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  // Interval for changing hero background images (slider)
  useEffect(() => {
    if (activeSection !== 'home') return;
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % 2);
    }, 5500);
    return () => clearInterval(interval);
  }, [activeSection]);

  // Parse initial hash route if available
  useEffect(() => {
    const hash = window.location.hash.replace('#', '') as AppSection;
    if (['home', 'servicos', 'sobre', 'cidades', 'faq'].includes(hash)) {
      setActiveSection(hash);
    }
  }, []);

  // System of navigation SPA overlay transition handler
  const handleNavigate = (sectionId: AppSection) => {
    if (sectionId === activeSection) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setIsTransitioning(true);

    setTimeout(() => {
      setActiveSection(sectionId);
      window.scrollTo(0, 0);
      window.location.hash = `#${sectionId}`;
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 100);
    }, 250);
  };

  // Re-observe elements when section loads for smooth transitions on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    );

    const animElements = document.querySelectorAll('.animate-on-scroll, .fade-in-on-scroll, .slide-in-left, .slide-in-right');
    animElements.forEach((el) => observer.observe(el));

    return () => {
      animElements.forEach((el) => observer.unobserve(el));
    };
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-zinc-950 text-gray-300 Selection:bg-primary selection:text-dark">
      
      {/* 1. Page SPA Black Transition Overlay */}
      <div 
        id="page-overlay" 
        className={`fixed inset-0 bg-zinc-950 z-[9999] transition-opacity duration-300 pointer-events-none flex items-center justify-center ${
          isTransitioning ? 'opacity-100 pointer-events-auto' : 'opacity-0'
        }`}
      >
        <div className="flex flex-col items-center gap-4">
          <Logo variant="dark" showText={false} className="animate-[pulse_1.5s_infinite] scale-125" />
          <div className="h-1 w-24 bg-zinc-800 rounded-full overflow-hidden relative">
            <div className="absolute top-0 left-0 h-full w-1/2 bg-primary rounded-full animate-[divider-flow_1.5s_infinite_linear]"></div>
          </div>
        </div>
      </div>

      {/* 2. Fixed Glass Navigation Header */}
      <Header activeSection={activeSection} onNavigate={handleNavigate} />

      {/* 3. Render and mount active section */}
      <main className="pt-[76px]">
        {activeSection === 'home' && (
          <div id="home-section" className="transition-all duration-300">
            
            {/* HERO SECTION HOME */}
            <section className="relative min-h-[90svh] lg:min-h-[92svh] flex items-center justify-center bg-zinc-950 py-20 px-4 md:px-8 overflow-hidden">
              
              {/* Dynamic Ken Burns Background Slide-show Slider */}
              <div className="absolute inset-0 z-0">
                {[
                  {
                    pc: "https://img.carplusvistorias.com.br/fundo-site-carplus-cwb-pr.png",
                    mobile: "https://img.carplusvistorias.com.br/fundo-site-carplus-cwb.png"
                  },
                  {
                    pc: "https://img.carplusvistorias.com.br/hero-site-carplus-vistorias-portao-hero.png",
                    mobile: "https://img.carplusvistorias.com.br/fundo-site-carplus-cwb.png"
                  }
                ].map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out ${
                      currentHeroImage === index ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
                    }`}
                    style={{
                      transitionProperty: 'opacity, transform'
                    }}
                  >
                    {/* Mobile Background */}
                    <div 
                      className="absolute inset-0 block md:hidden bg-cover bg-center brightness-110 saturate-[1.1]"
                      style={{ backgroundImage: `url("${slide.mobile}")` }}
                    />
                    {/* PC/Desktop Background */}
                    <div 
                      className="absolute inset-0 hidden md:block bg-cover bg-center brightness-110 saturate-[1.1]"
                      style={{ backgroundImage: `url("${slide.pc}")` }}
                    />
                  </div>
                ))}
                
                {/* Advanced Multi-layer Gradients for Premium Visual Contrast and High Readability */}
                <div className="absolute inset-0 bg-black/25 z-[1]" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-black/5 to-zinc-950/40 z-[1]" />
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/40 via-transparent to-zinc-950/40 z-[1]" />
              </div>

              {/* Ambient premium neon glow indicators tracking active slide */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-20">
                {[0, 1].map((idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentHeroImage(idx)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      currentHeroImage === idx ? 'w-8 bg-primary shadow-[0_0_12px_#F5A623]' : 'w-2.5 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Ir para slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Back ambient drifting particles */}
              <div className="absolute inset-0 z-[2] opacity-30 pointer-events-none">
                <div className="particle" style={{ left: '10%', top: '20%', animationDelay: '0s' }}></div>
                <div className="particle" style={{ left: '50%', top: '80%', animationDelay: '3s' }}></div>
                <div className="particle" style={{ left: '80%', top: '30%', animationDelay: '1.5s' }}></div>
              </div>

              <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
                
                {/* Badge pulsing */}
                <div className="inline-flex items-center gap-2 bg-zinc-950/80 backdrop-blur-md border border-primary/40 px-4 py-2 rounded-full text-xs font-bold font-mono tracking-wider text-primary uppercase mb-8 badge-pulsing select-none shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping"></span>
                  <Zap size={12} className="text-primary fill-primary animate-pulse" /> LAUDO EMITIDO NA HORA
                </div>

                {/* Staggered text animated entry headings */}
                <h1 className="hero-title font-display text-3xl sm:text-5xl md:text-6xl lg:text-7.5xl font-black text-white uppercase tracking-tight leading-none mb-6">
                  <span className="block animate-[word-in_0.5s_forwards] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">Vistoria Cautelar</span>
                  <span className="text-primary block mt-1 animate-[word-in_0.5s_0.15s_forwards_both] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">Curitiba – PR</span>
                </h1>

                {/* Subtitle entry fade */}
                <h3 className="font-display font-semibold text-sm sm:text-lg md:text-2xl text-white tracking-[0.2em] uppercase mb-8 animate-[word-in_0.6s_0.35s_forwards_both] border-y border-white/10 py-2.5 max-w-xl mx-auto backdrop-blur-[1px]">
                  Especialistas em Perícia Automotiva
                </h3>

                <p className="max-w-2xl mx-auto text-white font-medium text-center text-sm sm:text-base md:text-lg mb-12 leading-relaxed animate-[word-in_0.6s_0.5s_forwards_both] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  Tranquilidade, segurança e prevenção do risco na transação de veículos usados, seja na compra, venda, financiamento, seguro ou uso do bem como garantia.
                </p>

                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-[word-in_0.6s_0.65s_forwards_both]">
                  <a
                    href="https://wa.me/5541988740258?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20vistoria%20cautelar."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="premium-btn-green w-full sm:w-auto flex items-center justify-center gap-3 font-display font-black text-base uppercase tracking-wider py-4 px-8 rounded-xl"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-whatsapp text-[#25D366]"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 1.83.49 3.55 1.34 5.03L2 22l5.14-1.31C8.57 21.49 10.24 22 12 22c5.52 0 10-4.48 10-10Z"/></svg>
                    Agendar pelo WhatsApp
                  </a>

                  <button
                    onClick={() => handleNavigate('servicos')}
                    className="premium-btn-gold w-full sm:w-auto font-display font-bold text-base uppercase tracking-wider py-4 px-8 rounded-xl"
                  >
                    Nossos Serviços <i className="fa-solid fa-angle-right ml-2 text-xs text-primary"></i>
                  </button>
                </div>
              </div>

              {/* End of Hero Glowing Gold-Orange Divider Line with Neon Laser Accent (matches uploaded reference) */}
              <div className="absolute bottom-0 left-0 right-0 z-25 pointer-events-none select-none">
                {/* Intense Core Line with Laser Sweep animation */}
                <div className="hero-laser-line" />
                {/* Visual Neon Blur Flare with dual laser sweep and breathing pulse animations */}
                <div className="absolute top-0 left-0 right-0 hero-neon-pulse" />
              </div>
            </section>

            {/* SEÇÃO: O Problema (Por que fazer vistoria) - Same premium image bg effect as footer */}
            <section 
              className="relative bg-zinc-950 text-white py-20 px-6 border-b border-zinc-800 bg-cover bg-center overflow-hidden"
              style={{
                backgroundImage: 'url("https://img.carplusvistorias.com.br/vistorias-carplus-carros.png")',
              }}
            >
              {/* Overlay super leve para garantir visibilidade máxima da foto com leitura do conteúdo */}
              <div className="absolute inset-0 bg-black/45 z-0"></div>

              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                
                {/* Text column */}
                <div className="lg:col-span-7 fade-in-on-scroll bg-black/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-zinc-800/60 shadow-2xl">
                  <span className="section-label text-primary font-mono select-none block mb-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">ENTENDA</span>
                  <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                    <span className="text-white block">Proteja seu investimento</span>
                    <span className="text-primary block mt-1">Ao comprar um usado</span>
                  </h2>
                  <div className="space-y-4">
                    <p className="text-zinc-200 text-justify text-base leading-relaxed font-medium">
                      A <strong className="text-white">vistoria cautelar</strong>, também conhecida como perícia automotiva, foi desenvolvida para certificar as condições estruturais e documentais de um veículo no momento da compra. Ela engloba a análise da estrutura (longarinas e colunas), a investigação dos antecedentes do veículo (histórico de roubo, leilão, processos judiciais), a verificação de reparos na lataria, além da conferência das numerações identificadoras do chassi e do motor.
                    </p>
                    <p className="text-zinc-200 text-justify text-base leading-relaxed font-medium">
                      A vistoria cautelar é recomendada para aqueles que desejam evitar riscos na aquisição de um carro usado ou para quem pretende verificar os reparos realizados após uma colisão.
                    </p>
                  </div>
                  
                  {/* CTA linked action */}
                  <div className="mt-8">
                    <a
                      href="https://wa.me/5541988740258?text=Ol%C3%A1!%20Desejo%20fazer%20uma%20an%C3%A1lise%20completa%20do%20meu%20ve%C3%ADculo."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-primary hover:bg-[#e0951b] text-white font-display font-black text-sm uppercase tracking-wider py-3.5 px-6 rounded-lg transition-all shadow-lg hover:scale-[1.02] transform"
                    >
                      <i className="fa-solid fa-magnifying-glass text-white"></i>
                      Análise completa na hora da compra
                    </a>
                  </div>
                </div>

                {/* Image column with premium rotating border glow effect */}
                <div className="lg:col-span-5 slide-in-right flex items-center justify-center p-3 select-none">
                  <div className="premium-border-container premium-glow-pulse w-full max-w-[340px] md:max-w-[380px] aspect-square flex items-center justify-center">
                    <div className="premium-border-inner">
                      <img 
                        src="https://img.carplusvistorias.com.br/imagem-carplus-site.png" 
                        alt="Vistoria Realizada pós Hero" 
                        className="w-full h-full object-contain rounded-lg transition-transform duration-500 hover:scale-[1.03]"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SEÇÃO: Diferenciais Carplus - Dark theme #111111 */}
            <section 
              className="relative bg-zinc-950 text-white py-20 px-6 border-b border-zinc-900 bg-cover bg-center overflow-hidden bg-[url('https://img.carplusvistorias.com.br/fundo-site-carplus-cwb.png')] md:bg-[url('https://img.carplusvistorias.com.br/fundo-site-carplus-cwb-pr.png')]"
            >
              {/* Overlay super leve para garantir visibilidade máxima da foto com leitura do conteúdo */}
              <div className="absolute inset-0 bg-black/45 z-0"></div>

              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                
                {/* Image column */}
                <div className="lg:col-span-5 slide-in-left order-2 lg:order-1 flex items-center justify-center p-3 select-none">
                  <div className="premium-border-container premium-glow-pulse w-full max-w-[340px] md:max-w-[380px] aspect-square flex items-center justify-center">
                    <div className="premium-border-inner">
                      <img 
                        src="https://img.carplusvistorias.com.br/inspecao-automotiva-carplus.png" 
                        alt="Nossos Diferenciais Carplus" 
                        className="w-full h-full object-contain rounded-lg transition-transform duration-500 hover:scale-[1.03]"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </div>

                {/* Text column */}
                <div className="lg:col-span-7 fade-in-on-scroll order-1 lg:order-2">
                  <span className="section-label text-primary font-mono select-none block mb-3">NOSSOS DIFERENCIAIS</span>
                  <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight mb-6">
                    <span className="text-white block">Por que escolher</span>
                    <span className="text-primary block mt-1">A Carplus Vistorias?</span>
                  </h2>
                  <p className="text-white text-justify text-base leading-relaxed mb-6 font-medium">
                    Se você está no processo de comprar um veículo, seja de uma loja, revendedora autorizada, de bancos, consórcios, portais online, ou qualquer outro canal, a segurança deve ser sua prioridade. A Vistoria Cautelar da Carplus oferece uma análise abrangente e meticulosa para garantir que sua compra seja segura e que o veículo esteja em condições ideais.
                  </p>
                  
                  {/* Stats list under differentials */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="flex items-start gap-2.5">
                      <span className="text-primary text-lg mt-0.5"><i className="fa-solid fa-circle-check"></i></span>
                      <span className="text-white text-sm font-bold">Uso de Espessímetros Digitais</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="text-primary text-lg mt-0.5"><i className="fa-solid fa-circle-check"></i></span>
                      <span className="text-white text-sm font-bold">Integridade Documental 100%</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="text-primary text-lg mt-0.5"><i className="fa-solid fa-circle-check"></i></span>
                      <span className="text-white text-sm font-bold">Equipe Certificada e Experiente</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="text-primary text-lg mt-0.5"><i className="fa-solid fa-circle-check"></i></span>
                      <span className="text-white text-sm font-bold">Seguro Integrado Incluso</span>
                    </div>
                  </div>

                  {/* CTA WhatsApp Schedule */}
                  <div>
                    <a
                      href="https://wa.me/5541988740258?text=Olá,%20gostaria%20de%20saber%20dos%2520diferenciais%20e%20agendar."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="premium-btn-green inline-flex items-center gap-3 font-display font-extrabold text-sm uppercase tracking-wider py-3.5 px-6 rounded-lg"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-whatsapp text-[#25D366]"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 1.83.49 3.55 1.34 5.03L2 22l5.14-1.31C8.57 21.49 10.24 22 12 22c5.52 0 10-4.48 10-10Z"/></svg>
                      Agendar pelo WhatsApp
                    </a>
                  </div>
                </div>

              </div>
            </section>

            {/* SEÇÃO: Nossos Serviços (4 cards dark) */}
            <section 
              className="relative bg-zinc-950 border-b border-zinc-800 py-20 px-6 bg-cover bg-center overflow-hidden"
              style={{
                backgroundImage: 'url("https://img.carplusvistorias.com.br/vistorias-carplus-carros.png")',
              }}
            >
              {/* Overlay super leve para garantir visibilidade máxima da foto com leitura do conteúdo */}
              <div className="absolute inset-0 bg-black/20 z-0"></div>

              <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16 fade-in-on-scroll">
                  <span className="section-label font-bold text-primary tracking-widest inline-block mb-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">O QUE FAZEMOS</span>
                  <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                    <span className="text-white block">Laudos com Garantia</span>
                    <span className="text-primary block mt-1">Nossos Serviços</span>
                  </h2>
                  <p className="text-white font-semibold text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                    Nossa marca é sinônimo de qualidade e excelência. Oferecemos seguro de responsabilidade civil para garantir tranquilidade total em cada laudo emitido.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {SERVICES_HOME.map((service, index) => (
                    <div
                       key={service.id}
                       className="service-card animate-on-scroll bg-zinc-950/85 backdrop-blur-sm border border-zinc-800/80 hover:border-primary/50 rounded-xl p-6 flex flex-col justify-between shadow-2xl"
                       style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div>
                        {/* Interactive Rotating Icon */}
                        <div className="card-icon w-12 h-12 rounded-lg bg-primary/10 border border-primary/25 text-primary flex items-center justify-center mb-5">
                          <i className={`fa-solid ${service.icon} text-lg`}></i>
                        </div>
                        <h3 className="font-display font-bold text-xl text-white mb-3 block">
                          {service.title}
                        </h3>
                        <p className="text-white/95 text-sm text-justify leading-relaxed font-normal">
                          {service.description}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-zinc-900 flex items-center justify-end">
                        <button
                          onClick={() => handleNavigate('servicos')}
                          className="text-xs text-primary font-bold uppercase tracking-wider hover:text-white flex items-center gap-1 cursor-pointer"
                        >
                          Conhecer mais <i className="fa-solid fa-arrow-right text-[10px]"></i>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* SEÇÃO: Vantagens (4 cards fundo claro) - Alternate theme #F9F9F9 */}
            <section className="bg-zinc-100 text-zinc-950 py-20 px-6 border-b border-zinc-200">
              <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16 fade-in-on-scroll">
                  <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 px-3 .5 py-1.5 rounded-full text-[11px] font-bold font-mono tracking-wider text-primary-dark uppercase mb-4 select-none">
                    <Zap size={11} className="text-primary-dark fill-primary-dark inline mr-1.5 animate-pulse" /> AQUI SEU LAUDO É EMITIDO NA HORA!
                  </div>
                  <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight mb-4">
                    <span className="text-zinc-900 block">Laudo Sem Complicações</span>
                    <span className="text-primary-dark block mt-1">Eficiência e Facilidade</span>
                  </h2>
                  <p className="text-zinc-600 text-center">
                    Aqui estão as vantagens de escolher nos:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {ADVANTAGES_HOME.map((item, index) => (
                    <div
                      key={item.id}
                      className="bg-white border border-zinc-250 rounded-xl p-6 shadow-md hover:shadow-xl hover:border-zinc-300 transition-all duration-300"
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="w-12 h-12 rounded-lg bg-zinc-900 text-primary flex items-center justify-center mb-5 shadow-inner">
                        <i className={`fa-solid ${item.icon} text-lg`}></i>
                      </div>
                      <h3 className="font-display font-bold text-xl text-zinc-900 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-zinc-650 text-sm text-justify leading-relaxed">
                        {item.subtitle}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* SEÇÃO: Onde Estamos (maps + contacts) */}
            <section 
              className="relative bg-zinc-950 text-white py-20 px-6 bg-cover bg-center overflow-hidden bg-[url('https://img.carplusvistorias.com.br/fundo-site-carplus-cwb.png')] md:bg-[url('https://img.carplusvistorias.com.br/fundo-site-carplus-cwb-pr.png')]"
            >
              {/* Overlay super leve para garantir visibilidade máxima da foto com leitura do conteúdo */}
              <div className="absolute inset-0 bg-black/45 z-0"></div>

              <div className="max-w-7xl mx-auto relative z-10">
                
                <div className="text-center max-w-2xl mx-auto mb-16 fade-in-on-scroll">
                  <span className="section-label text-primary font-mono select-none block mb-3">MATRIZ</span>
                  <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight">
                    <span className="text-white block">Nossa Sede Própria</span>
                    <span className="text-primary block mt-1">Venha nos visitar</span>
                  </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  
                  {/* Detail Panel */}
                  <div className="lg:col-span-5 space-y-8 fade-in-on-scroll">
                    
                    {/* Address Card */}
                    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                      <div className="flex items-start gap-4">
                        <span className="w-10 h-10 rounded-lg bg-primary/20 text-primary flex items-center justify-center mt-1 flex-shrink-0">
                          <i className="fa-solid fa-location-dot text-lg"></i>
                        </span>
                        <div>
                          <h4 className="font-display font-bold text-lg text-white mb-2">Endereço da Sede</h4>
                          <address className="text-white font-sans tracking-wide text-sm not-italic leading-relaxed mb-4 font-semibold">
                            <MapPin size={13} className="text-primary inline mr-1.5 align-text-bottom" /> Av. Presidente Arthur da Silva Bernardes, 1323<br />
                            Portão – Curitiba/PR · CEP 80320-300
                          </address>

                          <a
                            href="https://www.google.com/maps/dir/?api=1&destination=Av.+Presidente+Arthur+da+Silva+Bernardes,+1323,+Port%C3%A3o,+Curitiba,+PR"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs bg-zinc-800 hover:bg-zinc-700 text-primary hover:text-white font-mono font-bold uppercase py-2 px-4 rounded-md transition-colors"
                          >
                            <Map size={13} className="text-primary inline mr-1.5 align-text-bottom animate-pulse" /> IR ATÉ O PORTÃO
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Central cards information */}
                    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 divide-y divide-zinc-800 space-y-4">
                      
                      {/* Phone */}
                      <div className="flex items-center gap-4 pt-0">
                        <span className="text-primary text-xl flex-shrink-0 w-8 text-center"><i className="fa-solid fa-phone"></i></span>
                        <div>
                          <div className="text-[10px] uppercase font-bold tracking-wider text-zinc-300">Telefone</div>
                          <a href="tel:+5541988740258" className="text-sm font-mono text-white hover:text-primary font-bold">
                            (41) 98874-0258
                          </a>
                        </div>
                      </div>

                      {/* WhatsApp */}
                      <div className="flex items-center gap-4 pt-4">
                        <span className="text-emerald-500 text-xl flex-shrink-0 w-8 text-center"><i className="fa-brands fa-whatsapp"></i></span>
                        <div>
                          <div className="text-[10px] uppercase font-bold tracking-wider text-zinc-300">WhatsApp</div>
                          <a href="https://wa.me/5541988740258" target="_blank" rel="noopener noreferrer" className="text-sm font-mono text-white hover:text-primary font-bold">
                            (41) 98874-0258
                          </a>
                        </div>
                      </div>

                      {/* Mail */}
                      <div className="flex items-center gap-4 pt-4">
                        <span className="text-primary text-xl flex-shrink-0 w-8 text-center"><i className="fa-solid fa-envelope"></i></span>
                        <div>
                          <div className="text-[10px] uppercase font-bold tracking-wider text-zinc-300">E-mail Corporativo</div>
                          <a href="mailto:laudo@carplusvistorias.com.br" className="text-sm font-mono text-white hover:text-primary font-bold">
                            laudo@carplusvistorias.com.br
                          </a>
                        </div>
                      </div>

                    </div>

                  </div>

                  {/* Map Iframe exactly from prompt specifications */}
                  <div className="lg:col-span-7 slide-in-right">
                    <div className="border border-zinc-800 rounded-xl overflow-hidden shadow-2xl relative">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d14404.505783352608!2d-49.33486295!3d-25.50082915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x94dce3d4aebf4897%3A0x229d2a5d9692264!2sPer%C3%ADcias%20e%20Vistorias%20Veicular%20%7C%20Carplus%20Inspe%C3%A7%C3%A3o%20Automotiva%20Curitiba%2C%20Vistorias%20e%20Inspe%C3%A7%C3%A3o%20de%20Ve%C3%ADculos%20-%20Av.%20Presidente%20Arthur%20da%20Silva%20Bernardes%2C%201323%20-%20Port%C3%A3o%2C%20Curitiba%20-%20PR%2C%2080320-300!3m2!1d-25.4636458!2d-49.300298!5e0!3m2!1spt-BR!2sbr!4v1780062222186!5m2!1spt-BR!2sbr" 
                        width="100%" 
                        height="400" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy"
                        className="filter invert-[90%] hue-rotate-[180deg] saturate-[60%] select-none"
                        title="Localização da Sede Portão - Carplus Vistorias"
                      ></iframe>
                    </div>
                  </div>

                </div>

              </div>
            </section>

          </div>
        )}

        {activeSection === 'servicos' && (
          <div id="servicos-section" className="transition-all duration-300">
            
            {/* HERO SERVICOS */}
            <section 
              className="relative overflow-hidden bg-zinc-950 py-16 px-6 border-b border-zinc-900 bg-[url('https://img.carplusvistorias.com.br/fundo-site-carplus-cwb.png')] md:bg-[url('https://img.carplusvistorias.com.br/fundo-site-carplus-cwb-pr.png')] bg-cover bg-center"
            >
              {/* Overlay with linear-gradient and solid multiplier for high contrast visual pairing */}
              <div className="absolute inset-0 bg-black/45 z-0 pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/65 z-0 pointer-events-none"></div>

              <div className="max-w-7xl mx-auto text-center py-10 relative z-10">
                {/* Breadcrumb */}
                <div className="text-xs font-mono uppercase tracking-widest text-primary mb-4">
                  <span onClick={() => handleNavigate('home')} className="hover:underline cursor-pointer">Início</span>
                  <span className="mx-2 text-gray-500">/</span>
                  <span className="text-white font-bold">Serviços</span>
                </div>

                <h1 className="font-display font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight leading-tight mb-4 animate-[word-in_0.5s_forwards]">
                  <span className="text-white block">Serviços e Perícias</span>
                  <span className="text-primary block mt-1">Automotiva em Curitiba</span>
                </h1>
                <p className="max-w-3xl mx-auto text-white text-justify text-center text-base md:text-lg font-medium">
                  Laudos emitidos na hora com tecnologia de ponta e cobertura de responsabilidade civil
                </p>
              </div>

              {/* End of Hero Glowing Gold-Orange Divider Line with Neon Laser Accent */}
              <div className="absolute bottom-0 left-0 right-0 z-25 pointer-events-none select-none">
                {/* Intense Core Line with Laser Sweep animation */}
                <div className="hero-laser-line" />
                {/* Visual Neon Blur Flare with dual laser sweep and breathing pulse animations */}
                <div className="absolute top-0 left-0 right-0 hero-neon-pulse" />
              </div>
            </section>

            {/* DETAILED SERVICES PAGES (6 CARDS) */}
            <section className="bg-zinc-900 px-6 py-20 border-b border-zinc-800">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {DETAILED_SERVICES.map((item, index) => (
                    <div
                      key={item.id}
                      className="bg-zinc-950/80 border border-zinc-800 hover:border-primary/50 rounded-xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
                    >
                      <div>
                        {/* Title & Badge */}
                        <div className="flex items-center justify-between gap-2 mb-4">
                          <h3 className="font-display font-bold text-xl text-white">
                            {item.title}
                          </h3>
                          <span className="text-[9.5px] uppercase font-mono font-bold text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full whitespace-nowrap">
                            Laudo Expresso
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-white text-sm text-justify leading-relaxed mb-6 font-semibold">
                          {item.description}
                        </p>

                        {/* Includes bullet details */}
                        <div className="bg-zinc-900 border border-zinc-850 rounded-lg p-4 mb-6">
                          <div className="text-[10px] uppercase font-bold tracking-wider text-zinc-300 mb-2">O que está incluso:</div>
                          <ul className="space-y-2">
                            {item.includes.map((inc, i) => (
                              <li key={i} className="flex items-center gap-2 text-xs text-white font-medium">
                                <span className="text-primary text-[10px]"><i className="fa-solid fa-circle text-primary"></i></span>
                                {inc}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Action trigger button */}
                      <div>
                        <a
                          href={`https://wa.me/5541988740258?text=Ola!%20Gostaria%20de%20saber%20valores%20e%20agendar%20o%20serviço%20de%20${encodeURIComponent(item.title)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white font-display font-semibold uppercase text-xs tracking-wider py-3 px-4 rounded-lg transition-colors border border-zinc-700 hover:border-primary"
                        >
                          <i className="fa-brands fa-whatsapp text-sm text-emerald-500"></i>
                          {item.ctaText}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* SEÇÃO: Tabela de comparação (slate style) - Alternate theme #F9F9F9 */}
            <section className="bg-zinc-100 text-zinc-950 px-6 py-20">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <span className="section-label text-primary font-mono select-none block mb-3">MATRIZ DE SELEÇÃO</span>
                  <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight">
                    <span className="text-zinc-900 block">Guia de Escolha Carplus</span>
                    <span className="text-primary-dark block mt-1">Qual vistoria é ideal?</span>
                  </h2>
                </div>

                {/* Table list structure */}
                <div className="bg-white border border-zinc-250 rounded-xl overflow-hidden shadow-xl">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-zinc-900 text-white font-display uppercase tracking-widest text-xs border-b border-zinc-800">
                          <th className="py-4 px-6 text-left font-bold">Situação do Cliente</th>
                          <th className="py-4 px-6 text-left font-bold">Serviço Recomendado</th>
                          <th className="py-4 px-6 text-center font-bold">Tempo Estimado</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-zinc-200">
                        <tr className="hover:bg-zinc-50">
                          <td className="py-4 px-6 font-semibold text-zinc-900 border-r border-zinc-200">Comprando carro usado</td>
                          <td className="py-4 px-6 text-primary-dark font-bold font-display uppercase text-sm border-r border-zinc-200">Vistoria Cautelar Completa</td>
                          <td className="py-4 px-6 text-center text-zinc-600 font-mono font-medium">60 min</td>
                        </tr>
                        <tr className="hover:bg-zinc-50 bg-zinc-50/50">
                          <td className="py-4 px-6 font-semibold text-zinc-900 border-r border-zinc-200">Transferindo propriedade no DETRAN/cartório</td>
                          <td className="py-4 px-6 text-zinc-800 font-bold font-display uppercase text-sm border-r border-zinc-200">Vistoria para Transferência</td>
                          <td className="py-4 px-6 text-center text-zinc-600 font-mono font-medium">30 min</td>
                        </tr>
                        <tr className="hover:bg-zinc-50">
                          <td className="py-4 px-6 font-semibold text-zinc-900 border-r border-zinc-200">Comprovação e liberação de financiamento</td>
                          <td className="py-4 px-6 text-zinc-800 font-bold font-display uppercase text-sm border-r border-zinc-200">Inspeção para Financiamento</td>
                          <td className="py-4 px-6 text-center text-zinc-600 font-mono font-medium">30 min</td>
                        </tr>
                        <tr className="hover:bg-zinc-50 bg-zinc-50/50">
                          <td className="py-4 px-6 font-semibold text-zinc-900 border-r border-zinc-200">Verificando batida/reparo pós-retífica</td>
                          <td className="py-4 px-6 text-primary-dark font-bold font-display uppercase text-sm border-r border-zinc-200">Análise Estrutural de Lataria</td>
                          <td className="py-4 px-6 text-center text-zinc-600 font-mono font-medium">45 min</td>
                        </tr>
                        <tr className="hover:bg-zinc-50">
                          <td className="py-4 px-6 font-semibold text-zinc-900 border-r border-zinc-200">Suspeita de alteração de chassi / motor clonado</td>
                          <td className="py-4 px-6 text-zinc-800 font-bold font-display uppercase text-sm border-r border-zinc-200">Perícia de Chassi e Numerações</td>
                          <td className="py-4 px-6 text-center text-zinc-600 font-mono font-medium">45 min</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Info block under table */}
                <div className="mt-6 text-center text-zinc-500 font-sans text-xs italic tracking-wide">
                  * Todos os laudos acompanham documentação fotográfica detalhada e seguro de responsabilidade civil em Curitiba.
                </div>

              </div>
            </section>

          </div>
        )}

        {activeSection === 'sobre' && (
          <div id="sobre-section" className="transition-all duration-300">
            
            {/* HERO SOBRE */}
            <section 
              className="relative overflow-hidden bg-zinc-950 py-16 px-6 border-b border-zinc-900 bg-[url('https://img.carplusvistorias.com.br/fundo-site-carplus-cwb.png')] md:bg-[url('https://img.carplusvistorias.com.br/fundo-site-carplus-cwb-pr.png')] bg-cover bg-center"
            >
              {/* Overlay with linear-gradient and solid multiplier for high contrast visual pairing */}
              <div className="absolute inset-0 bg-black/45 z-0 pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/65 z-0 pointer-events-none"></div>

              <div className="max-w-7xl mx-auto text-center py-10 relative z-10">
                <div className="text-xs font-mono uppercase tracking-widest text-primary mb-4">
                  <span onClick={() => handleNavigate('home')} className="hover:underline cursor-pointer">Início</span>
                  <span className="mx-2 text-gray-500">/</span>
                  <span className="text-white font-bold">Sobre</span>
                </div>

                <h1 className="font-display font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight leading-tight mb-4 animate-[word-in_0.5s_forwards]">
                  <span className="text-white block">Especialistas em Perícia</span>
                  <span className="text-primary block mt-1">Carplus Vistorias</span>
                </h1>
              </div>

              {/* End of Hero Glowing Gold-Orange Divider Line with Neon Laser Accent */}
              <div className="absolute bottom-0 left-0 right-0 z-25 pointer-events-none select-none">
                {/* Intense Core Line with Laser Sweep animation */}
                <div className="hero-laser-line" />
                {/* Visual Neon Blur Flare with dual laser sweep and breathing pulse animations */}
                <div className="absolute top-0 left-0 right-0 hero-neon-pulse" />
              </div>
            </section>

            {/* QUEM SOMOS NÓS - Alternate light theme #F9F9F9 */}
            <section className="bg-zinc-100 text-zinc-950 py-20 px-6 border-b border-zinc-230">
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Text body */}
                <div className="lg:col-span-7 space-y-5 fade-in-on-scroll">
                  <span className="section-label text-primary font-mono select-none block mb-3">HISTÓRICO</span>
                  <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl uppercase mb-4">
                    <span className="text-zinc-900 block">Conheça Nossa História</span>
                    <span className="text-primary-dark block mt-1">Quem Somos Nós</span>
                  </h2>
                  <p className="text-zinc-650 leading-relaxed text-justify">
                    A Carplus Vistorias é uma empresa curitibana especializada em perícias e vistorias veiculares, sediada no bairro Portão, em Curitiba/PR. Fundada por peritos automotivos com mais de uma década de experiência no setor, nossa missão é proteger compradores e vendedores de veículos usados em Curitiba e região metropolitana.
                  </p>
                  <p className="text-zinc-650 leading-relaxed text-justify">
                    Utilizamos equipamentos de última geração, como medidores de espessura de pintura, detectores de solda, scanners de chassi e bases de dados integradas a órgãos oficiais, para emitir laudos técnicos precisos e aceitos em todo o Brasil.
                  </p>
                  <p className="text-zinc-650 leading-relaxed text-justify">
                    Na Carplus, seu laudo é emitido na hora — sem espera, sem burocracia, com toda a segurança que sua negociação merece.
                  </p>
                </div>

                {/* Right Illustration image with premium rotating border glow effect */}
                <div className="lg:col-span-5 slide-in-right flex items-center justify-center p-3 select-none">
                  <div className="premium-border-container premium-glow-pulse w-full max-w-[340px] md:max-w-[380px] aspect-square flex items-center justify-center">
                    <div className="premium-border-inner">
                      <img 
                        src="https://img.carplusvistorias.com.br/imagem-carplus-cwb.png"
                        alt="Quem Somos - Carplus"
                        className="w-full h-full object-contain rounded-lg transition-transform duration-500 hover:scale-[1.03]"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* 4 PILARES CARDS (dark theme #111) */}
            <section className="bg-zinc-950 text-white py-20 px-6 border-b border-zinc-900">
              <div className="max-w-7xl mx-auto">
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  
                  {/* Missao */}
                  <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 transition-colors hover:border-zinc-700">
                    <span className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/25 text-primary flex items-center justify-center mb-5">
                      <i className="fa-solid fa-crosshairs text-base"></i>
                    </span>
                    <h3 className="font-display font-bold text-xl text-white mb-3">Missão</h3>
                    <p className="text-white text-sm text-justify leading-relaxed font-semibold">
                      Oferecer laudos de vistoria veicular com precisão técnica e agilidade, protegendo cada cliente de riscos na compra e venda de veículos usados.
                    </p>
                  </div>

                  {/* Visao */}
                  <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 transition-colors hover:border-zinc-700">
                    <span className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/25 text-primary flex items-center justify-center mb-5">
                      <i className="fa-solid fa-eye text-base"></i>
                    </span>
                    <h3 className="font-display font-bold text-xl text-white mb-3">Visão</h3>
                    <p className="text-white text-sm text-justify leading-relaxed font-semibold">
                      Ser a referência em perícia automotiva em Curitiba e região metropolitana, reconhecida pela excelência técnica e atendimento humanizado.
                    </p>
                  </div>

                  {/* Valores */}
                  <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 transition-colors hover:border-zinc-700">
                    <span className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/25 text-primary flex items-center justify-center mb-5">
                      <i className="fa-solid fa-gem text-base"></i>
                    </span>
                    <h3 className="font-display font-bold text-xl text-white mb-3">Valores</h3>
                    <p className="text-white text-sm text-justify leading-relaxed font-semibold">
                      Transparência, integridade técnica, agilidade no atendimento, responsabilidade civil e comprometimento com a segurança do cliente.
                    </p>
                  </div>

                  {/* Diferenciais */}
                  <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 transition-colors hover:border-zinc-700">
                    <span className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/25 text-primary flex items-center justify-center mb-5">
                      <i className="fa-solid fa-award text-base"></i>
                    </span>
                    <h3 className="font-display font-bold text-xl text-white mb-3">Diferenciais</h3>
                    <p className="text-white text-sm text-justify leading-relaxed font-semibold">
                      Laudo emitido na hora, seguro de responsabilidade civil incluso, equipe certificada, aceito em todo o Brasil.
                    </p>
                  </div>

                </div>

              </div>
            </section>

            {/* NUMEROS ANIMADOS (CONTADORES) */}
            <section className="bg-gradient-to-r from-zinc-900 to-zinc-950 text-white py-16 px-6">
              <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                
                {/* Stat 1 */}
                <div className="fade-in-on-scroll">
                  <div className="text-primary font-display font-black text-4xl md:text-5xl tracking-normal mb-2 leading-none">
                    <CountUp end={5000} prefix="+" />
                  </div>
                  <div className="text-[10px] md:text-xs uppercase font-bold tracking-wider text-zinc-200">
                    Laudos Emitidos Estáveis
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="fade-in-on-scroll" style={{ transitionDelay: '100ms' }}>
                  <div className="text-primary font-display font-black text-4xl md:text-5xl tracking-normal mb-2 leading-none">
                    <CountUp end={10} prefix="+" />
                  </div>
                  <div className="text-[10px] md:text-xs uppercase font-bold tracking-wider text-zinc-200">
                    Anos de Experiência
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="fade-in-on-scroll" style={{ transitionDelay: '200ms' }}>
                  <div className="text-primary font-display font-black text-4xl md:text-5xl tracking-normal mb-2 leading-none">
                    <CountUp end={100} suffix="%" />
                  </div>
                  <div className="text-[10px] md:text-xs uppercase font-bold tracking-wider text-zinc-200">
                    Laudos Aceitos em Cartórios
                  </div>
                </div>

                {/* Stat 4 */}
                <div className="fade-in-on-scroll" style={{ transitionDelay: '300ms' }}>
                  <div className="text-primary font-display font-black text-4xl md:text-5xl tracking-normal mb-2 leading-none flex items-center justify-center">
                    4.9<Star size={24} className="text-primary fill-primary inline ml-1.5 animate-pulse" />
                  </div>
                  <div className="text-[10px] md:text-xs uppercase font-bold tracking-wider text-zinc-200">
                    Nota média no Google
                  </div>
                </div>

              </div>
            </section>

          </div>
        )}

        {activeSection === 'cidades' && (
          <div id="cidades-section" className="transition-all duration-300">
            
            {/* HERO CIDADES */}
            <section 
              className="relative overflow-hidden bg-zinc-950 py-16 px-6 border-b border-zinc-900 bg-[url('https://img.carplusvistorias.com.br/fundo-site-carplus-cwb.png')] md:bg-[url('https://img.carplusvistorias.com.br/fundo-site-carplus-cwb-pr.png')] bg-cover bg-center"
            >
              {/* Overlay with linear-gradient and solid multiplier for high contrast visual pairing */}
              <div className="absolute inset-0 bg-black/45 z-0 pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/65 z-0 pointer-events-none"></div>

              <div className="max-w-7xl mx-auto text-center py-10 relative z-10">
                <div className="text-xs font-mono uppercase tracking-widest text-primary mb-4">
                  <span onClick={() => handleNavigate('home')} className="hover:underline cursor-pointer">Início</span>
                  <span className="mx-2 text-gray-500">/</span>
                  <span className="text-white font-bold">Cidades Atendidas</span>
                </div>

                <h1 className="font-display font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight leading-tight mb-4 animate-[word-in_0.5s_forwards]">
                  <span className="text-white block">Vistoria Cautelar</span>
                  <span className="text-primary block mt-1">Curitiba e Região</span>
                </h1>
                <p className="max-w-3xl mx-auto text-white text-justify text-center text-base md:text-lg font-semibold">
                  Atendemos Curitiba e as principais cidades da Grande Curitiba com laudo na hora
                </p>
              </div>

              {/* End of Hero Glowing Gold-Orange Divider Line with Neon Laser Accent */}
              <div className="absolute bottom-0 left-0 right-0 z-25 pointer-events-none select-none">
                {/* Intense Core Line with Laser Sweep animation */}
                <div className="hero-laser-line" />
                {/* Visual Neon Blur Flare with dual laser sweep and breathing pulse animations */}
                <div className="absolute top-0 left-0 right-0 hero-neon-pulse" />
              </div>
            </section>

            {/* SEÇÃO EXPLORADORA DE CIDADES AUTOMÁTICA */}
            <section id="explorer-hub" className="bg-zinc-950 py-20 px-6">
              <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-12">
                  <span className="section-label text-primary font-mono select-none block mb-3">COBERTURA REGIONAL</span>
                  <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight">
                    <span className="text-white block">Cobertura de Atendimento</span>
                    <span className="text-primary block mt-1">Cidades e Bairros</span>
                  </h2>
                </div>

                <CityExplorer />
              </div>
            </section>

          </div>
        )}

        {activeSection === 'faq' && (
          <div id="faq-section" className="transition-all duration-300">
            
            {/* HERO FAQ */}
            <section 
              className="relative overflow-hidden bg-zinc-950 py-16 px-6 border-b border-zinc-900 bg-[url('https://img.carplusvistorias.com.br/fundo-site-carplus-cwb.png')] md:bg-[url('https://img.carplusvistorias.com.br/fundo-site-carplus-cwb-pr.png')] bg-cover bg-center"
            >
              {/* Overlay with linear-gradient and solid multiplier for high contrast visual pairing */}
              <div className="absolute inset-0 bg-black/45 z-0 pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/65 z-0 pointer-events-none"></div>

              <div className="max-w-7xl mx-auto text-center py-10 relative z-10">
                <div className="text-xs font-mono uppercase tracking-widest text-primary mb-4">
                  <span onClick={() => handleNavigate('home')} className="hover:underline cursor-pointer">Início</span>
                  <span className="mx-2 text-gray-500">/</span>
                  <span className="text-white font-bold">FAQ</span>
                </div>

                <h1 className="font-display font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight leading-tight mb-4 animate-[word-in_0.5s_forwards]">
                  <span className="text-white block">Dúvidas Frequentes</span>
                  <span className="text-primary block mt-1">Perguntas e Respostas</span>
                </h1>
                <p className="max-w-3xl mx-auto text-white text-justify text-center text-base md:text-lg font-semibold">
                  Tire suas dúvidas sobre perícia automotiva, laudos e inspeção veicular
                </p>
              </div>

              {/* End of Hero Glowing Gold-Orange Divider Line with Neon Laser Accent */}
              <div className="absolute bottom-0 left-0 right-0 z-25 pointer-events-none select-none">
                {/* Intense Core Line with Laser Sweep animation */}
                <div className="hero-laser-line" />
                {/* Visual Neon Blur Flare with dual laser sweep and breathing pulse animations */}
                <div className="absolute top-0 left-0 right-0 hero-neon-pulse" />
              </div>
            </section>

            {/* EXPANDABLE ACCORDIONS FAQ */}
            <section className="bg-zinc-950 py-20 px-6">
              <FAQAccordion />
            </section>

          </div>
        )}

        {/* CC-ONLY HIGHLIGHTED VIDEO SECTION (ON ALL SPA VIEWS) */}
        <section className="relative bg-zinc-950 py-16 px-6 border-t border-zinc-900 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-zinc-950 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Text Content */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider text-primary uppercase animate-pulse">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="lucide lucide-play-circle text-primary"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
                  Perícia Real em Vídeo
                </div>
                <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white leading-tight">
                  O Segredo que a <span className="text-primary text-glow-gold">Vistoria Cautelar</span> Revela Antes de Você Comprar!
                </h2>
                <p className="text-zinc-400 text-base leading-relaxed text-justify">
                  Não jogue seu dinheiro fora comprando um carro com problemas ocultos de estrutura ou passagem por leilão. Neste vídeo explicativo de poucos segundos, veja na prática como nossos peritos mapeiam repinturas, defeitos estruturais ocultos e garantem que você faça um negócio 100% livre de dores de cabeça.
                </p>
                <div className="space-y-3 font-semibold text-sm text-zinc-300">
                  <div className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    <span>Análise detalhada de chassi, teto e lacres originais</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    <span>Mapeamento eletrônico de camada de repintura e massa plástica</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    <span>Laudo cautelar certificado entregue logo após a perícia</span>
                  </div>
                </div>
                <div className="pt-4">
                  <a href="https://wa.me/5541988740258?text=Olá,%20assisti%20ao%20vídeo%20da%20vistoria%20e%20gostaria%20de%20agendar%20uma%20perícia." target="_blank" rel="noopener noreferrer" className="premium-btn-green font-display font-black text-sm uppercase tracking-wider py-4 px-8 rounded-xl inline-flex items-center justify-center gap-2.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-whatsapp text-[#25D366]"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 1.83.49 3.55 1.34 5.03L2 22l5.14-1.31C8.57 21.49 10.24 22 12 22c5.52 0 10-4.48 10-10Z"/></svg>
                    Fale com um Especialista Agora
                  </a>
                </div>
              </div>
              
              {/* Video Embed Column */}
              <div className="lg:col-span-5 flex justify-center">
                {/* Sleek smartphone/vertical frame overlay for high contrast mobile video display */}
                <div className="relative w-full max-w-[320px] aspect-[9/16] rounded-3xl p-3 bg-zinc-900 border border-zinc-800 shadow-2xl shadow-primary/10 group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none z-10 rounded-2xl"></div>
                  
                  {/* Inner Video Player */}
                  <div className="w-full h-full rounded-2xl overflow-hidden bg-black relative">
                    <iframe 
                      className="w-full h-full border-0 absolute inset-0"
                      src="https://www.youtube.com/embed/R-CI4M2mvUY?autoplay=1&mute=1&loop=1&playlist=R-CI4M2mvUY"
                      title="Perícia Cautelar em Ação"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                  
                  {/* Gloss Accent */}
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-all duration-700"></div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* 4. Footer Global Section */}
      <footer 
        className="relative border-t border-zinc-800 text-white py-16 px-6 bg-zinc-950 bg-cover bg-center overflow-hidden footer-responsive-bg"
      >
        {/* Overlay do background para máxima visibilidade da imagem mantendo legibilidade do texto */}
        <div className="absolute inset-0 bg-black/85 z-0"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-14">
            
            {/* Col 1 */}
            <div className="lg:col-span-5 space-y-6">
              <Logo variant="dark" showText={false} className="logo-glowing" />
              <p className="text-sm text-justify text-white max-w-sm mt-4 leading-relaxed font-semibold">
                Especialistas em Vistoria Cautelar e Perícia Automotiva em Curitiba – PR. Laudo emitido com total segurança para sua negociação.
              </p>
              {/* Trust symbol badge */}
              <div className="pt-2 flex items-center gap-3 text-primary font-mono text-xs font-bold uppercase tracking-wider select-none">
                <i className="fa-solid fa-shield-halved text-primary text-sm"></i>
                Seguro de Responsabilidade Civil Ativo
              </div>
            </div>

            {/* Col 2 */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="font-display font-extrabold text-lg text-white uppercase tracking-wider">Serviços</h4>
              <ul className="space-y-3 text-sm font-semibold">
                <li>
                  <a href="#servicos" onClick={(e) => { e.preventDefault(); handleNavigate('servicos'); }} className="text-white hover:text-primary transition-colors flex items-center gap-2">
                    <i className="fa-solid fa-chevron-right text-[10px] text-primary"></i> Vistoria Cautelar
                  </a>
                </li>
                <li>
                  <a href="#servicos" onClick={(e) => { e.preventDefault(); handleNavigate('servicos'); }} className="text-white hover:text-primary transition-colors flex items-center gap-2">
                    <i className="fa-solid fa-chevron-right text-[10px] text-primary"></i> Perícia Automotiva
                  </a>
                </li>
                <li>
                  <a href="#servicos" onClick={(e) => { e.preventDefault(); handleNavigate('servicos'); }} className="text-white hover:text-primary transition-colors flex items-center gap-2">
                    <i className="fa-solid fa-chevron-right text-[10px] text-primary"></i> Laudo de Transferência
                  </a>
                </li>
                <li>
                  <a href="#servicos" onClick={(e) => { e.preventDefault(); handleNavigate('servicos'); }} className="text-white hover:text-primary transition-colors flex items-center gap-2">
                    <i className="fa-solid fa-chevron-right text-[10px] text-primary"></i> Inspeção Veicular
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3 */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="font-display font-extrabold text-lg text-white uppercase tracking-wider">Institucional</h4>
              <ul className="space-y-3 text-sm font-semibold">
                <li>
                  <a href="#home" onClick={(e) => { e.preventDefault(); handleNavigate('home'); }} className="text-white hover:text-primary transition-colors flex items-center gap-2">
                    <i className="fa-solid fa-chevron-right text-[10px] text-primary"></i> Início / Home
                  </a>
                </li>
                <li>
                  <a href="#sobre" onClick={(e) => { e.preventDefault(); handleNavigate('sobre'); }} className="text-white hover:text-primary transition-colors flex items-center gap-2">
                    <i className="fa-solid fa-chevron-right text-[10px] text-primary"></i> Quem Somos Nós
                  </a>
                </li>
                <li>
                  <a href="/mapa-do-site.html" className="text-white hover:text-primary transition-colors flex items-center gap-2 font-bold">
                    <i className="fa-solid fa-sitemap text-primary text-xs"></i> Mapa do Site
                  </a>
                </li>
                <li>
                  <a href="/contato.html" className="text-white hover:text-primary transition-colors flex items-center gap-2 font-bold">
                    <i className="fa-solid fa-envelope text-primary text-xs"></i> Contato e Cadastro
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 4 */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="font-display font-extrabold text-lg text-white uppercase tracking-wider">Atendimento</h4>
              <address className="not-italic text-sm text-white space-y-3 font-semibold">
                <div className="flex items-start gap-2.5">
                  <i className="fa-solid fa-location-dot text-primary mt-1 text-sm"></i>
                  <span>Av. Presidente Arthur da Silva Bernardes, 1323<br />Portão – Curitiba/PR</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <i className="fa-solid fa-phone text-primary text-sm"></i>
                  <a href="tel:+5541988740258" className="text-white hover:text-primary hover:underline transition-colors font-mono font-bold">
                    (41) 98874-0258
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <i className="fa-brands fa-whatsapp text-emerald-500 text-sm"></i>
                  <a href="https://wa.me/5541988740258" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary hover:underline transition-colors font-mono font-bold">
                    (41) 98874-0258
                  </a>
                </div>
              </address>
              <div className="pt-2">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Av.+Presidente+Arthur+da+Silva+Bernardes,+1323,+Port%C3%A3o,+Curitiba,+PR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold bg-zinc-900 border border-zinc-800 hover:border-primary text-white hover:text-primary py-2.5 px-5 rounded-md transition-all uppercase"
                >
                  <i className="fa-solid fa-diamond-turn-right text-primary text-sm"></i> Como chegar à sede
                </a>
              </div>
            </div>

          </div>

          {/* Gradiente Flow Line bar divider */}
          <div className="footer-divider my-10" />

          {/* Copyright section with typing animation entry */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center text-xs text-white font-mono tracking-wide font-bold">
            <div>
              &copy; {new Date().getFullYear()} Carplus Vistorias. Todos os direitos reservados.
            </div>
            <div className="flex gap-4">
              <a href="/mapa-do-site.html" className="text-white hover:text-primary transition-colors font-bold">Mapa do Site</a>
              <span className="text-zinc-800">|</span>
              <a href="/contato.html" className="text-white hover:text-primary transition-colors font-bold">Contato WhatsApp</a>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-zinc-800/50 flex justify-center text-center">
            <p className="text-white hover:text-primary text-xs flex items-center gap-1.5 select-none font-bold font-mono">
              Desenvolvido com <Heart size={11} className="text-primary animate-heartbeat fill-primary" /> por
              <a href="https://supremasite.com.br" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition ml-1 inline-flex items-center gap-1.5 font-bold font-sans">
                Suprema Sites Express
                <img src="https://img.supremamidia.com/suprema-img.png" alt="Suprema" className="h-3.5 inline animate-bounce" referrerPolicy="no-referrer" />
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* 5. Floating Pulsing WhatsApp Button */}
      <WhatsAppButton />

      {/* 6. Back-to-Top / WhatsApp call-to-action Animated Car */}
      <AnimatedCar />
    </div>
  );
}
