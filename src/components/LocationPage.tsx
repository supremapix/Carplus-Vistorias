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
        </div>
      </section>
    </div>
  );
}
