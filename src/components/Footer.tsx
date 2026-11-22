import React, { type MouseEvent } from 'react';
import { Heart } from 'lucide-react';
import Logo from './Logo';
import type { AppSection } from '../types';

export default function Footer({ onNavigate }: { onNavigate?: (section: AppSection) => void }) {
  const navigate = (event: MouseEvent<HTMLAnchorElement>, section: AppSection) => {
    if (!onNavigate || event.button !== 0 || event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;
    event.preventDefault();
    onNavigate(section);
  };
  return (
      <footer 
        className="relative border-t border-zinc-800 text-white py-16 px-6 bg-zinc-950 overflow-hidden"
      >
        {/* Imagem de fundo responsiva do rodapé com alta visibilidade e brilho */}
        <div className="absolute inset-0 bg-cover bg-center brightness-110 saturate-[1.1] pointer-events-none select-none footer-responsive-bg"></div>
        {/* Overlay do background para máxima visibilidade da imagem mantendo legibilidade do texto */}
        <div className="absolute inset-0 bg-black/45 z-0"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-14">
            
            {/* Col 1 */}
            <div className="lg:col-span-5 space-y-6">
              <Logo variant="dark" showText={false} className="logo-glowing" />
              <p className="text-sm text-justify text-white max-w-sm mt-4 leading-relaxed font-semibold">
                Especialistas em Vistoria Cautelar e Perícia Automotiva em Curitiba – PR. Consulte escopo, orçamento e prazo para sua avaliação.
              </p>
              {/* Trust symbol badge */}
              <div className="pt-2 flex items-center gap-3 text-primary font-mono text-xs font-bold uppercase tracking-wider select-none">
                <i className="fa-solid fa-shield-halved text-primary text-sm"></i>
                Consulte o escopo da avaliação
              </div>
            </div>

            {/* Col 2 */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="font-display font-extrabold text-lg text-white uppercase tracking-wider">Serviços</h4>
              <ul className="space-y-3 text-sm font-semibold">
                <li>
                  <a href="/#servicos" onClick={(e) => navigate(e, 'servicos')} className="text-white hover:text-primary transition-colors flex items-center gap-2">
                    <i className="fa-solid fa-chevron-right text-[10px] text-primary"></i> Vistoria Cautelar
                  </a>
                </li>
                <li>
                  <a href="/#servicos" onClick={(e) => navigate(e, 'servicos')} className="text-white hover:text-primary transition-colors flex items-center gap-2">
                    <i className="fa-solid fa-chevron-right text-[10px] text-primary"></i> Perícia Automotiva
                  </a>
                </li>
                <li>
                  <a href="/#servicos" onClick={(e) => navigate(e, 'servicos')} className="text-white hover:text-primary transition-colors flex items-center gap-2">
                    <i className="fa-solid fa-chevron-right text-[10px] text-primary"></i> Dúvidas sobre Transferência
                  </a>
                </li>
                <li>
                  <a href="/#servicos" onClick={(e) => navigate(e, 'servicos')} className="text-white hover:text-primary transition-colors flex items-center gap-2">
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
                  <a href="/" onClick={(e) => navigate(e, 'home')} className="text-white hover:text-primary transition-colors flex items-center gap-2">
                    <i className="fa-solid fa-chevron-right text-[10px] text-primary"></i> Início / Home
                  </a>
                </li>
                <li>
                  <a href="/#sobre" onClick={(e) => navigate(e, 'sobre')} className="text-white hover:text-primary transition-colors flex items-center gap-2">
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
                  <a href="https://wa.me/5541988740258?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20vistoria%20cautelar.%20Vi%20no%20site%20(Rodap%C3%A9)." target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary hover:underline transition-colors font-mono font-bold">
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
  );
}
