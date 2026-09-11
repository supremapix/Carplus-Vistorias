import React, { useMemo } from 'react';
import { NEIGHBORHOODS_SEO, CITIES_SEO } from '../data';
import EnhancedSEO from './EnhancedSEO';
import AnimatedCar from './AnimatedCar';
import FAQAccordion from './FAQAccordion';

interface LocationPageProps {
  slug: string;
  onGoHome: () => void;
}

// Helper to calculate exact SEO slug
function getSlug(name: string): string {
  const normalized = name.trim().toLowerCase();
  if (normalized.startsWith('cic') || normalized.includes('cidade industrial')) {
    return 'cic';
  }
  if (normalized === 'alto boqueirão') {
    return 'alto-boqueirado';
  }
  if (normalized === 'caiuá' || normalized === 'caiua') {
    return 'caiqua';
  }
  return normalized
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

export default function LocationPage({ slug, onGoHome }: LocationPageProps) {
  // Find current location
  const locationData = useMemo(() => {
    // Check neighborhoods
    const nh = NEIGHBORHOODS_SEO.find(item => getSlug(item.name) === slug);
    if (nh) {
      return {
        name: nh.name,
        description: nh.description,
        type: 'bairro' as const,
        bairroGenitive: nh.name === 'Cidade Industrial (CIC)' ? 'na Cidade Industrial (CIC)' : `no ${nh.name}`
      };
    }
    
    // Check cities
    const city = CITIES_SEO.find(item => getSlug(item.name) === slug);
    if (city) {
      return {
        name: city.name,
        description: city.description,
        type: 'rmc' as const,
        bairroGenitive: `em ${city.name}`
      };
    }

    // Default fallback
    const formattedName = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    return {
      name: formattedName,
      description: `A Carplus Vistorias em ${formattedName} realiza vistoria cautelar de procedência e laudos automotivos para sua total segurança antes de comprar ou transferir veículos usados.`,
      type: 'bairro' as const,
      bairroGenitive: `em ${formattedName}`
    };
  }, [slug]);

  const { name, description, type, bairroGenitive } = locationData;

  // Calculate standard neighbors for dynamic linking mesh
  const neighbors = useMemo(() => {
    const list = [...NEIGHBORHOODS_SEO, ...CITIES_SEO];
    // Find index
    const index = list.findIndex(item => getSlug(item.name) === slug);
    const startIdx = index >= 0 ? index : 0;
    
    const results = [];
    for (let i = 1; i <= 6; i++) {
      const item = list[(startIdx + i) % list.length];
      results.push({
        name: item.name,
        slug: getSlug(item.name)
      });
    }
    return results;
  }, [slug]);

  // Construct individual structured dataset JSON-LD
  const structuredDataObj = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "AutomotiveBusiness",
          "@id": `https://carplusvistorias.com.br/vistoria-cautelar-${slug}/#organization`,
          "name": "Carplus Vistorias",
          "description": `Vistoria cautelar e perícia automotiva ${bairroGenitive}, Curitiba – PR. Laudo completo emitido na hora com total segurança.`,
          "url": `https://carplusvistorias.com.br/vistoria-cautelar-${slug}/`,
          "telephone": "+554198874-0258",
          "image": "https://img.carplusvistorias.com.br/vistorias-pr.png",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Av. Presidente Arthur da Silva Bernardes, 1323",
            "addressLocality": "Curitiba",
            "addressRegion": "PR",
            "postalCode": "80320-300",
            "addressCountry": "BR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -25.4660,
            "longitude": -49.2890
          }
        }
      ]
    };
  }, [slug, bairroGenitive]);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Dynamic SEO Meta Tag injection by Helmet */}
      <EnhancedSEO
        title={`Vistoria Cautelar ${bairroGenitive} em Curitiba | Carplus Vistorias`}
        description={`Perícia automotiva e Vistoria Cautelar ${bairroGenitive}, Curitiba - PR. Evite golpes e compre com total segurança. Laudo completo emitido na hora.`}
        keywords={`vistoria cautelar ${slug}, vistoria cautelar ${name}, pericia automotiva ${name}, laudo cautelar ${name}`}
        canonicalUrl={`https://www.carplusvistorias.com.br/vistoria-cautelar-${slug}`}
        structuredData={structuredDataObj}
      />

      {/* Hero Header */}
      <section className="relative pt-32 pb-24 md:py-32 bg-zinc-950 overflow-hidden border-b border-zinc-900">
        {/* Dynamic high brightness background with saturation just like the Home Hero */}
        <div className="absolute inset-0 bg-cover bg-center brightness-110 saturate-[1.1] z-0 bg-[url('https://img.carplusvistorias.com.br/fundo-site-carplus-cwb.png')] md:bg-[url('https://img.carplusvistorias.com.br/fundo-site-carplus-cwb-pr.png')]"></div>
        <div className="absolute inset-0 bg-black/30 z-[1]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-black/5 to-zinc-950/45 z-[1]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/40 via-transparent to-zinc-950/40 z-[1]"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-20 text-center space-y-6">
          <button 
            onClick={onGoHome}
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-zinc-400 hover:text-primary bg-zinc-900/80 border border-zinc-800 hover:border-primary/30 px-4 py-2 rounded-full uppercase tracking-wider transition-all cursor-pointer"
          >
            ← Voltar para Início
          </button>

          <div className="pt-2">
            <span className="inline-block bg-primary/10 border border-primary/20 text-primary font-mono text-[10px] px-3.5 py-1.5 rounded-full uppercase tracking-wider font-bold">
              ATENDIMENTO {type === 'bairro' ? 'NO BAIRRO' : 'NA CIDADE'}
            </span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight leading-none">
            Vistoria Cautelar <span className="text-primary italic block mt-2 sm:inline sm:mt-0">{name}</span>
          </h1>
          
          <p className="text-zinc-300 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed font-semibold">
            Realize sua perícia automotiva e garanta a procedência de veículos usados {bairroGenitive} ou arredores de Curitiba com laudo emitido imediatamente na nossa sede.
          </p>

          {/* Aviso Proeminente de Atendimento na Base da Empresa e Regra de Deslocamento */}
          {slug !== 'portao' ? (
            <div className="max-w-3xl mx-auto my-4 p-4 sm:p-5 rounded-2xl bg-amber-500/15 border-2 border-amber-500/70 shadow-2xl text-left backdrop-blur-sm">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-500 text-zinc-950 flex items-center justify-center font-bold text-xl shrink-0 shadow-md mt-0.5">
                  <i className="fa-solid fa-triangle-exclamation"></i>
                </div>
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-display font-black text-sm sm:text-base uppercase tracking-wider text-white">
                      ATENDIMENTO NA BASE DA EMPRESA (PORTÃO)
                    </span>
                    <span className="text-[10px] bg-red-600 text-white font-black px-2.5 py-0.5 rounded-full font-mono uppercase tracking-wide">
                      Deslocamento tem Taxa
                    </span>
                    <span className="text-[10px] bg-amber-500 text-zinc-950 font-black px-2 py-0.5 rounded-full font-mono uppercase">
                      Consulte Antes
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-semibold">
                    Moradores, compradores e lojistas {bairroGenitive}: <strong>o atendimento é na base da empresa</strong> (Unidade Portão: Av. Presidente Arthur da Silva Bernardes, 1323 · Curitiba/PR), onde dispomos de rampa de perícia, elevadores e equipamentos ópticos digitais.
                  </p>
                  <p className="text-xs sm:text-sm text-amber-300 leading-relaxed font-black bg-black/40 p-2.5 rounded-lg border border-amber-500/40">
                    <i className="fa-solid fa-circle-exclamation mr-1.5 text-amber-400"></i> AVISO IMPORTANTE: O atendimento é na base da empresa. Caso precise de deslocamento em outras regiões fora da região do Portão, temos uma taxa — consulte antes o valor!
                  </p>
                  <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] font-bold">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                      <i className="fa-solid fa-building"></i> Na Base (Portão): Sem Taxa de Deslocamento
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/70 text-red-300 border border-red-500/50">
                      <i className="fa-solid fa-car-side"></i> Fora do Portão: Temos Taxa (Consulte Antes)
                    </span>
                    <a 
                      href={`https://wa.me/5541988740258?text=Olá!%20Gostaria%20de%20consultar%20o%20valor%20da%20taxa%20de%20deslocamento%20para%20${encodeURIComponent(name)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                    >
                      <i className="fa-brands fa-whatsapp"></i> Consultar Taxa no WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-3xl mx-auto my-4 p-4 sm:p-5 rounded-2xl bg-primary/15 border-2 border-primary/70 shadow-2xl text-left backdrop-blur-sm">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary text-zinc-950 flex items-center justify-center font-bold text-xl shrink-0 shadow-md mt-0.5">
                  <i className="fa-solid fa-building"></i>
                </div>
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-display font-black text-sm sm:text-base uppercase tracking-wider text-white">
                      ATENDIMENTO NA BASE DA EMPRESA — PORTÃO
                    </span>
                    <span className="text-[10px] bg-primary text-zinc-950 font-black px-2 py-0.5 rounded-full font-mono uppercase">
                      Base Oficial
                    </span>
                    <span className="text-[10px] bg-emerald-500 text-zinc-950 font-black px-2 py-0.5 rounded-full font-mono uppercase">
                      Sem Taxa na Base
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-semibold">
                    Você está na base da empresa da Carplus Vistorias no bairro Portão (Av. Presidente Arthur da Silva Bernardes, 1323). <strong>O atendimento pericial é realizado diretamente na nossa base</strong> com toda a infraestrutura física de elevadores, medidores e rampa de perícia.
                  </p>
                  <p className="text-xs sm:text-sm text-amber-300 leading-relaxed font-black bg-black/40 p-2.5 rounded-lg border border-amber-500/40">
                    <i className="fa-solid fa-circle-exclamation mr-1.5 text-amber-400"></i> O atendimento é na base da empresa. Caso precise de deslocamento em outras regiões fora da região do Portão, temos uma taxa — consulte antes o valor!
                  </p>
                  <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] font-bold">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                      <i className="fa-solid fa-circle-check"></i> Na Base (Portão): Sem Taxa de Deslocamento
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/70 text-red-300 border border-red-500/50">
                      <i className="fa-solid fa-car-side"></i> Fora do Portão: Temos Taxa (Consulte Antes)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <div className="flex flex-col items-center w-full sm:w-auto">
              <a 
                href={`https://wa.me/5541988740258?text=Olá%20Carplus!%20Desejo%20agendar%20uma%20vistoria%20cautelar%20${encodeURIComponent(bairroGenitive)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="premium-btn-green w-full sm:w-auto font-display font-extrabold text-sm uppercase tracking-widest py-4 px-8 rounded-full inline-flex items-center justify-center gap-2.5"
              >
                <i className="fa-brands fa-whatsapp text-xl text-[#25D366]"></i>
                AGENDAR
              </a>
              <span className="text-[10px] text-zinc-400 mt-2.5 uppercase font-mono tracking-widest font-semibold block text-center leading-none">
                Agendar no {name} · Profissional & Premium
              </span>
            </div>
            
            <div className="flex flex-col items-center w-full sm:w-auto">
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=Av.+Presidente+Arthur+da+Silva+Bernardes,+1323,+Port%C3%A3o,+Curitiba,+PR"
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-white hover:text-dark hover:bg-white bg-zinc-900 border border-zinc-800 transition-all font-display font-bold text-xs uppercase tracking-widest py-4 px-8 rounded-full inline-flex items-center justify-center gap-2"
              >
                <i className="fa-solid fa-location-dot text-primary"></i> ROTAS
              </a>
              <span className="text-[10px] text-zinc-400 mt-2.5 uppercase font-mono tracking-widest font-semibold block text-center leading-none">
                Traçar Rota de {name} · Profissional & Premium
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-25 pointer-events-none select-none">
          <div className="hero-laser-line"></div>
        </div>
      </section>

      {/* Why Cautelar section with dynamic local copy and background integration */}
      <section className="relative py-20 bg-zinc-950 border-b border-zinc-900 px-6 overflow-hidden">
        {/* Isolated background image for high vibrance and brightness */}
        <div className="absolute inset-0 bg-cover bg-center bg-[url('https://img.carplusvistorias.com.br/vistorias-carplus-carros.png')] brightness-110 saturate-[1.1] z-0"></div>
        <div className="absolute inset-0 bg-black/45 z-[1]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/30 z-[1]"></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <div className="lg:col-span-7 space-y-6">
            <span className="text-primary font-mono text-xs uppercase tracking-widest block font-bold">EXCELÊNCIA EM CURITIBA</span>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
              A Vistoria Cautelar Ideal Para Quem Reside {bairroGenitive}
            </h2>

            {/* Aviso de Atendimento na Base da Empresa e Regra de Deslocamento */}
            {slug !== 'portao' ? (
              <div className="p-4 sm:p-5 rounded-xl bg-zinc-900 border-2 border-amber-500/70 shadow-xl text-left space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-display font-black text-sm uppercase tracking-wide">
                  <i className="fa-solid fa-triangle-exclamation text-base"></i>
                  <span>Atendimento na Base da Empresa · Taxa Fora da Região do Portão</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-medium">
                  Informamos que <strong>o atendimento é na base da empresa</strong> na <strong>Unidade Portão</strong> (Av. Presidente Arthur da Silva Bernardes, 1323 · Portão, Curitiba/PR), equipada com elevadores automotivos, rampa de perícia e medidores digitais de camada de tinta.
                </p>
                <p className="text-xs sm:text-sm text-amber-300 leading-relaxed font-bold bg-amber-500/10 p-3 rounded-lg border border-amber-500/30">
                  <i className="fa-solid fa-circle-exclamation mr-1.5 text-amber-400"></i> Trazer o veículo até nossa base no Portão não tem taxa de deslocamento. <u>Caso precise de deslocamento em outras regiões fora da região do Portão, temos uma taxa — consulte antes o valor!</u>
                </p>
              </div>
            ) : (
              <div className="p-4 sm:p-5 rounded-xl bg-zinc-900 border-2 border-primary/70 shadow-xl text-left space-y-2">
                <div className="flex items-center gap-2 text-primary font-display font-black text-sm uppercase tracking-wide">
                  <i className="fa-solid fa-building text-base"></i>
                  <span>Atendimento na Base da Empresa · Bairro Portão</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-medium">
                  Nossa base própria está localizada na Av. Presidente Arthur da Silva Bernardes, 1323 no Portão. <strong>O atendimento é realizado na base da empresa</strong> com equipamentos de ponta para emissão de laudo certificado na hora.
                </p>
                <p className="text-xs sm:text-sm text-amber-300 leading-relaxed font-bold bg-amber-500/10 p-3 rounded-lg border border-amber-500/30">
                  Realizando a vistoria aqui na base no Portão não há taxa. Caso precise de deslocamento em outras regiões fora da região do Portão, temos uma taxa — consulte antes o valor!
                </p>
              </div>
            )}

            <div className="space-y-4 text-justify font-bold">
              <p className="text-white">
                {description.replace('Carplus Vistorias', 'Carplus Vistorias')}
              </p>
              <p className="text-white text-sm leading-relaxed font-semibold">
                O mercado automotivo em Curitiba é agitado, sendo comum encontrar carros com chassis remarcados, sinistros graves camuflados em oficinas clandestinas, ou carros com problemas crônicos provenientes de leilões que perdem até 40% do seu valor comercial. Com a Carplus Vistorias, você descobre a verdade sobre a estrutura e procedência do seu automóvel de forma profissional.
              </p>
            </div>
            
            <div className="pt-4">
              <a 
                href={`https://wa.me/5541988740258?text=Olá%20Carplus!%20Gostaria%20de%20tirar%20dúvidas%20sobre%20a%20perícia%20no%20bairro%20${encodeURIComponent(name)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <span className="text-xs font-mono font-black uppercase tracking-wider text-primary">Dúvidas rápidas com nossos peritos pelo WhatsApp →</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex items-center justify-center p-3 select-none">
            <div className="premium-border-container premium-glow-pulse w-full max-w-[340px] md:max-w-[380px] aspect-square flex items-center justify-center">
              <div className="premium-border-inner">
                <img 
                  src="https://img.carplusvistorias.com.br/imagem-carplus-site.png" 
                  alt="Análise técnica veicular" 
                  className="w-full h-full object-contain rounded-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services summary */}
      <section className="py-20 bg-zinc-950 px-6 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white uppercase tracking-tight">
              O Que Analisamos Na Cautelar Completa
            </h2>
            <p className="text-white max-w-xl mx-auto text-xs sm:text-sm font-bold">
              Nosso laudo técnico emite um parecer final analisando em detalhes mais de 80 componentes essenciais de procedência e integridade corporal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Chassi e Numerações', text: 'Conferência de numeração do câmbio, motor, vidros, etiquetas de identificações industriais e gravação do chassi.', icon: 'fa-barcode' },
              { title: 'Coluna e Longarinas', text: 'Inspeção profunda das partes estruturais primárias e soldas de fábrica na estrutura da carroceria.', icon: 'fa-car-burst' },
              { title: 'Histórico Completo', text: 'Sindicância sobre furto ativo, sinistros, leilões, indenizações integrais de seguros, restrições e pendências judiciais.', icon: 'fa-file-shield' },
              { title: 'Lataria e Pintura', text: 'Leitura técnica de repinturas com medidores eletrônicos de espessura de micrômetros de alta fidelidade.', icon: 'fa-spray-can' }
            ].map(item => (
              <div key={item.title} className="bg-white border-2 border-black p-6 rounded-xl transition-all flex flex-col justify-between shadow-lg text-zinc-950">
                <div className="space-y-4">
                  <span className="w-10 h-10 rounded-lg bg-zinc-950 text-primary flex items-center justify-center">
                    <i className={`fa-solid ${item.icon} text-lg`}></i>
                  </span>
                  <h3 className="font-display font-bold text-lg text-zinc-950 leading-tight">{item.title}</h3>
                  <p className="text-zinc-700 text-xs leading-relaxed text-justify font-semibold">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location interactive widget */}
      <section className="relative py-16 bg-zinc-950 px-6 border-b border-zinc-900 overflow-hidden">
        {/* Isolated high dynamic background with exact same feel as the home page banner */}
        <div className="absolute inset-0 bg-cover bg-center bg-[url('https://img.carplusvistorias.com.br/fundo-site-carplus-cwb.png')] md:bg-[url('https://img.carplusvistorias.com.br/fundo-site-carplus-cwb-pr.png')] brightness-110 saturate-[1.1] z-0"></div>
        <div className="absolute inset-0 bg-black/45 z-[1] pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/30 z-[1] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto space-y-10 relative z-10">
          <div className="text-center space-y-3">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white uppercase tracking-tight">
              Também Atendemos na Região
            </h2>
            <p className="text-white max-w-xl mx-auto text-xs sm:text-sm font-bold">
              Selecione outro bairro ou cidade satélite vizinha de {name} para visualizar a cobertura e laudos rápidos em Curitiba.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {neighbors.map(item => (
              <a 
                key={item.slug} 
                href={`/vistoria-cautelar-${item.slug}.html`} 
                className="bg-zinc-900 border border-zinc-800 hover:border-primary/50 text-zinc-300 hover:text-white p-3 rounded-lg transition-all truncate block text-center font-bold text-xs"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive FAQ accordion */}
      <section className="py-16 bg-[#111111]/40 border-b border-zinc-900 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white uppercase tracking-tight">
              Perguntas Frequentes — {name}
            </h2>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* YouTube Video Section */}
      <section className="relative overflow-hidden bg-zinc-950 py-16 px-6 border-b border-zinc-900">
        {/* Imagem de fundo responsiva da seção de vídeo com alta visibilidade */}
        <div className="absolute inset-0 bg-cover bg-center bg-[url('https://img.carplusvistorias.com.br/car-plus-img.png')] md:bg-[url('https://img.carplusvistorias.com.br/vistorias-carplus-carros.png')] brightness-110 saturate-[1.1] z-0"></div>
        <div className="absolute inset-0 bg-black/45 z-[1]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-zinc-950 pointer-events-none z-[1]"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center space-y-8">
          <h2 className="font-display font-black text-2xl sm:text-4xl text-white uppercase tracking-tight">
            Assista e Veja Nosso Trabalho em Ação
          </h2>
          <div className="aspect-video w-full max-w-3xl mx-auto rounded-2xl overflow-hidden bg-black shadow-2xl border border-zinc-900 relative">
            <iframe 
              className="w-full h-full border-0 absolute inset-0"
              src="https://www.youtube.com/embed/R-CI4M2mvUY?autoplay=1&mute=1&loop=1&playlist=R-CI4M2mvUY"
              title="Perícia Cautelar em Ação"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA final element */}
      <section className="bg-zinc-950 py-16 border-b border-zinc-900 text-center px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white uppercase tracking-tight">
            LAUDO EMITIDO NA HORA - FALE COM NOSSO TIME DE PERITOS
          </h2>
          <p className="text-white max-w-md mx-auto text-xs sm:text-sm font-bold">
            Evite dores de cabeça estruturais, administrativas e perdas financeiras comprando carros sem procedência.
          </p>
          <div className="pt-4 flex flex-col items-center">
            <a 
              href={`https://wa.me/5541988740258?text=Olá%20Carplus!%20Desejo%20agendar%20vistoria%20hoje%20saindo%20de%20${encodeURIComponent(name)}.`}
              target="_blank" 
              rel="noopener noreferrer" 
              className="premium-btn-green font-display font-black text-sm uppercase tracking-wider py-4 px-8 rounded-xl inline-flex items-center justify-center gap-2.5"
            >
              WHATSAPP
            </a>
            <span className="text-[10px] text-zinc-400 mt-2.5 uppercase font-mono tracking-widest font-semibold block text-center leading-none">
              Falar Conosco Agora · Profissional & Premium
            </span>
          </div>

          <div className="pt-2 flex flex-wrap justify-center items-center gap-2">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-primary/50 text-xs text-zinc-300 font-mono font-bold">
              <i className="fa-solid fa-building text-primary"></i>
              <span>Atendimento na Base da Empresa (Portão · Av. Pres. Arthur da Silva Bernardes, 1323)</span>
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-950/60 border border-red-500/50 text-xs text-red-300 font-mono font-bold">
              <i className="fa-solid fa-triangle-exclamation text-red-400"></i>
              <span>Deslocamento fora da Região do Portão: Temos Taxa (Consulte Antes)</span>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
