import AtendimentoQuadrinhos from './AtendimentoQuadrinhos';
import React, { useMemo, useState } from 'react';
import EnhancedSEO from './EnhancedSEO';
import AnimatedCar from './AnimatedCar';

interface PreCompraPageProps {
  slug: string;
  onGoHome: () => void;
}

interface SemanticPageConfig {
  title: string;
  h1: string;
  description: string;
  keywords: string;
  canonicalUrl: string;
  anchorText: string;
}

const CONFIGS: Record<string, SemanticPageConfig> = {
  'vistoria-pre-compra-curitiba': {
    title: 'Vistoria Pré Compra Curitiba | Carplus Vistorias',
    h1: 'Vistoria Pré Compra Curitiba',
    description: "Avaliação antes de comprar um veículo, com atendimento na base do Portão em Curitiba. Consulte escopo, orçamento, prazo do laudo e agendamento.",
    keywords: 'vistoria pre compra curitiba, laudo de carro usado, perito automotivo curitiba, comprar carro seguro, carplus vistorias',
    canonicalUrl: 'https://www.carplusvistorias.com.br/vistoria-pre-compra-curitiba',
    anchorText: 'Vistoria Pré Compra Curitiba'
  },
  'avaliacao-veicular-pre-compra-curitiba': {
    title: 'Avaliação Veicular Pré Compra Curitiba | Carplus Vistorias',
    h1: 'Avaliação Veicular Pré Compra Curitiba',
    description: "Avaliação antes de comprar um veículo, com atendimento na base do Portão em Curitiba. Consulte escopo, orçamento, prazo do laudo e agendamento.",
    keywords: 'avaliacao veicular curitiba, vistoria pre compra, pericia automotiva curitiba, analise carro usado, carplus vistorias',
    canonicalUrl: 'https://www.carplusvistorias.com.br/avaliacao-veicular-pre-compra-curitiba',
    anchorText: 'Avaliação Veicular Pré Compra Curitiba'
  },
  'inspecao-veicular-curitiba': {
    title: 'Inspeção Veicular Antes da Compra Curitiba | Carplus Vistorias',
    h1: 'Inspeção Veicular Antes da Compra Curitiba',
    description: "Avaliação antes de comprar um veículo, com atendimento na base do Portão em Curitiba. Consulte escopo, orçamento, prazo do laudo e agendamento.",
    keywords: 'inspecao veicular curitiba, vistoria cautelar, laudo cautelar completo, vistoria de compra, carplus vistorias',
    canonicalUrl: 'https://www.carplusvistorias.com.br/inspecao-veicular-curitiba',
    anchorText: 'Inspeção Veicular Antes da Compra Curitiba'
  },
  'verificacao-procedencia-curitiba': {
    title: 'Verificação de Procedência Veicular Curitiba | Carplus Vistorias',
    h1: 'Verificação de Procedência Veicular Curitiba',
    description: "Avaliação antes de comprar um veículo, com atendimento na base do Portão em Curitiba. Consulte escopo, orçamento, prazo do laudo e agendamento.",
    keywords: 'verificacao de procedencia veicular curitiba, historico do veiculo, leilao sinistro seguradora, carplus vistorias',
    canonicalUrl: 'https://www.carplusvistorias.com.br/verificacao-procedencia-curitiba',
    anchorText: 'Verificação de Procedência Veicular Curitiba'
  },
  'analise-veiculos-usados-curitiba': {
    title: 'Análise Completa de Veículos Usados Curitiba | Carplus Vistorias',
    h1: 'Análise Completa de Veículos Usados Curitiba',
    description: "Avaliação antes de comprar um veículo, com atendimento na base do Portão em Curitiba. Consulte escopo, orçamento, prazo do laudo e agendamento.",
    keywords: 'analise de veiculos usados curitiba, vistoria cautelar portao, carro usado completo, carplus vistorias',
    canonicalUrl: 'https://www.carplusvistorias.com.br/analise-veiculos-usados-curitiba',
    anchorText: 'Análise Completa de Veículos Usados Curitiba'
  },
  'laudo-pre-compra-curitiba': {
    title: 'Laudo Pré Compra Curitiba | Carplus Vistorias',
    h1: 'Laudo Pré Compra Curitiba',
    description: "Avaliação antes de comprar um veículo, com atendimento na base do Portão em Curitiba. Consulte escopo, orçamento, prazo do laudo e agendamento.",
    keywords: 'laudo pre compra curitiba, laudo cautelar curitiba, vistoria de transferencia, vistoria portao, carplus vistorias',
    canonicalUrl: 'https://www.carplusvistorias.com.br/laudo-pre-compra-curitiba',
    anchorText: 'Laudo Pré Compra Curitiba'
  },
  'check-up-veicular-curitiba': {
    title: 'Check-up Veicular Antes da Compra Curitiba | Carplus Vistorias',
    h1: 'Check-up Veicular Antes da Compra Curitiba',
    description: "Avaliação antes de comprar um veículo, com atendimento na base do Portão em Curitiba. Consulte escopo, orçamento, prazo do laudo e agendamento.",
    keywords: 'check-up veicular curitiba, carplus vistoria, perícia automotiva curitiba, avaliação veicular',
    canonicalUrl: 'https://www.carplusvistorias.com.br/check-up-veicular-curitiba',
    anchorText: 'Check-up Veicular Antes da Compra Curitiba'
  },
  'analise-carro-usado-curitiba': {
    title: 'Análise de Carro Usado Curitiba | Carplus Vistorias',
    h1: 'Análise de Carro Usado Curitiba',
    description: "Avaliação antes de comprar um veículo, com atendimento na base do Portão em Curitiba. Consulte escopo, orçamento, prazo do laudo e agendamento.",
    keywords: 'analise de carro usado curitiba, vistoria cautelar curitiba, carros batidos sinistrados, carplus vistorias',
    canonicalUrl: 'https://www.carplusvistorias.com.br/analise-carro-usado-curitiba',
    anchorText: 'Análise de Carro Usado Curitiba'
  },
  'consultoria-compra-veiculos-curitiba': {
    title: 'Consultoria para Compra de Veículos Curitiba | Carplus Vistorias',
    h1: 'Consultoria para Compra de Veículos Curitiba',
    description: "Avaliação antes de comprar um veículo, com atendimento na base do Portão em Curitiba. Consulte escopo, orçamento, prazo do laudo e agendamento.",
    keywords: 'consultoria para compra de veiculos curitiba, vistoria automotiva, laudo completo curitiba',
    canonicalUrl: 'https://www.carplusvistorias.com.br/consultoria-compra-veiculos-curitiba',
    anchorText: 'Consultoria para Compra de Veículos Curitiba'
  },
  'avaliacao-automotiva-compra-curitiba': {
    title: 'Avaliação Automotiva para Compra Curitiba | Carplus Vistorias',
    h1: 'Avaliação Automotiva para Compra Curitiba',
    description: "Avaliação antes de comprar um veículo, com atendimento na base do Portão em Curitiba. Consulte escopo, orçamento, prazo do laudo e agendamento.",
    keywords: 'avaliacao automotiva para compra curitiba, laudo de vistoria curitiba, pericia cautelar, carplus vistorias',
    canonicalUrl: 'https://www.carplusvistorias.com.br/avaliacao-automotiva-compra-curitiba',
    anchorText: 'Avaliação Automotiva para Compra Curitiba'
  },
  'vistoria-pre-compra-portao': {
    title: 'Vistoria Pré Compra Portão - Curitiba | Carplus Vistorias',
    h1: 'Vistoria Pré Compra Portão',
    description: "Avaliação antes de comprar um veículo, com atendimento na base do Portão em Curitiba. Consulte escopo, orçamento, prazo do laudo e agendamento.",
    keywords: 'vistoria pre compra portao, vistoria cautelar portao, perito carro portão curitiba',
    canonicalUrl: 'https://www.carplusvistorias.com.br/vistoria-pre-compra-portao',
    anchorText: 'Vistoria Pré Compra Portão'
  },
  'vistoria-pre-compra-agua-verde': {
    title: 'Vistoria Pré Compra Água Verde - Curitiba | Carplus Vistorias',
    h1: 'Vistoria Pré Compra Água Verde',
    description: "Avaliação antes de comprar um veículo, com atendimento na base do Portão em Curitiba. Consulte escopo, orçamento, prazo do laudo e agendamento.",
    keywords: 'vistoria pre compra agua verde, pericia veicular agua verde curitiba',
    canonicalUrl: 'https://www.carplusvistorias.com.br/vistoria-pre-compra-agua-verde',
    anchorText: 'Vistoria Pré Compra Água Verde'
  },
  'vistoria-pre-compra-capao-raso': {
    title: 'Vistoria Pré Compra Capão Raso - Curitiba | Carplus Vistorias',
    h1: 'Vistoria Pré Compra Capão Raso',
    description: "Avaliação antes de comprar um veículo, com atendimento na base do Portão em Curitiba. Consulte escopo, orçamento, prazo do laudo e agendamento.",
    keywords: 'vistoria pre compra capao raso, laudo cautelar capao raso, vistoria curitiba, carplus vistorias',
    canonicalUrl: 'https://www.carplusvistorias.com.br/vistoria-pre-compra-capao-raso',
    anchorText: 'Vistoria Pré Compra Capão Raso'
  },
  'vistoria-pre-compra-bigorrilho': {
    title: 'Vistoria Pré Compra Bigorrilho - Curitiba | Carplus Vistorias',
    h1: 'Vistoria Pré Compra Bigorrilho',
    description: "Avaliação antes de comprar um veículo, com atendimento na base do Portão em Curitiba. Consulte escopo, orçamento, prazo do laudo e agendamento.",
    keywords: 'vistoria pre compra bigorrilho, perito automotivo champagnat, laudo cautelar champagnat',
    canonicalUrl: 'https://www.carplusvistorias.com.br/vistoria-pre-compra-bigorrilho',
    anchorText: 'Vistoria Pré Compra Bigorrilho'
  },
  'vistoria-pre-compra-batel': {
    title: 'Vistoria Pré Compra Batel - Curitiba | Carplus Vistorias',
    h1: 'Vistoria Pré Compra Batel',
    description: "Avaliação antes de comprar um veículo, com atendimento na base do Portão em Curitiba. Consulte escopo, orçamento, prazo do laudo e agendamento.",
    keywords: 'vistoria pre compra batel, perito veiculos importados batel, laudo cautelar batel',
    canonicalUrl: 'https://www.carplusvistorias.com.br/vistoria-pre-compra-batel',
    anchorText: 'Vistoria Pré Compra Batel'
  },
  'vistoria-pre-compra-novo-mundo': {
    title: 'Vistoria Pré Compra Novo Mundo - Curitiba | Carplus Vistorias',
    h1: 'Vistoria Pré Compra Novo Mundo',
    description: "Avaliação antes de comprar um veículo, com atendimento na base do Portão em Curitiba. Consulte escopo, orçamento, prazo do laudo e agendamento.",
    keywords: 'vistoria pre compra novo mundo, vistoria carro novo mundo, pericia veicular',
    canonicalUrl: 'https://www.carplusvistorias.com.br/vistoria-pre-compra-novo-mundo',
    anchorText: 'Vistoria Pré Compra Novo Mundo'
  },
  'avaliacao-veicular-curitiba': {
    title: 'Avaliação Veicular Curitiba - Profissional | Carplus Vistorias',
    h1: 'Avaliação Veicular Curitiba',
    description: "Avaliação antes de comprar um veículo, com atendimento na base do Portão em Curitiba. Consulte escopo, orçamento, prazo do laudo e agendamento.",
    keywords: 'avaliacao veicular curitiba, vistoria cautelar curitiba, laudo cautelar',
    canonicalUrl: 'https://www.carplusvistorias.com.br/avaliacao-veicular-curitiba',
    anchorText: 'Avaliação Veicular Curitiba'
  },
  'consultoria-compra-carros-curitiba': {
    title: 'Consultoria de Compra de Carros Curitiba | Carplus Vistorias',
    h1: 'Consultoria de Compra de Carros Curitiba',
    description: "Avaliação antes de comprar um veículo, com atendimento na base do Portão em Curitiba. Consulte escopo, orçamento, prazo do laudo e agendamento.",
    keywords: 'consultoria compra de carros curitiba, analise cautelar curitiba, vistoria carro usado, carplus vistorias',
    canonicalUrl: 'https://www.carplusvistorias.com.br/consultoria-compra-carros-curitiba',
    anchorText: 'Consultoria de Compra de Carros Curitiba'
  },
  'verificacao-procedencia-veicular-curitiba': {
    title: 'Verificação de Procedência Veicular Curitiba | Carplus Vistorias',
    h1: 'Verificação de Procedência Veicular Curitiba',
    description: "Avaliação antes de comprar um veículo, com atendimento na base do Portão em Curitiba. Consulte escopo, orçamento, prazo do laudo e agendamento.",
    keywords: 'verificacao de procedencia veicular curitiba, carplus vistorias, laudo original de compra',
    canonicalUrl: 'https://www.carplusvistorias.com.br/verificacao-procedencia-veicular-curitiba',
    anchorText: 'Verificação de Procedência Veicular Curitiba'
  }
};

const DEFAULT_CONFIG: SemanticPageConfig = {
  title: 'Vistoria Pré Compra Curitiba | Carplus Vistorias',
  h1: 'Vistoria Pré Compra Curitiba',
  description: "Avaliação antes de comprar um veículo, com atendimento na base do Portão em Curitiba. Consulte escopo, orçamento, prazo do laudo e agendamento.",
  keywords: 'vistoria pre compra curitiba, laudo cautelar curitiba, vistoria cautelar',
  canonicalUrl: 'https://www.carplusvistorias.com.br/vistoria-pre-compra-curitiba',
  anchorText: 'Vistoria Pré Compra'
};

export default function PreCompraPage({ slug, onGoHome }: PreCompraPageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const config = useMemo(() => {
    const cleanSlug = slug.replace('', '').replace('/', '');
    return CONFIGS[cleanSlug] || DEFAULT_CONFIG;
  }, [slug]);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const structuredDataObj = useMemo(() => {
    return [
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://www.carplusvistorias.com.br/#organization",
        "name": "Carplus Vistorias",
        "description": "Vistoria cautelar e avaliação pré-compra, com atendimento na base do Portão, Curitiba. Consulte o escopo de cada serviço.",
        "url": "https://www.carplusvistorias.com.br",
        "telephone": "+55-41-98874-0258",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Av. Presidente Arthur da Silva Bernardes, 1323",
          "addressLocality": "Curitiba",
          "addressRegion": "PR",
          "postalCode": "80320-300",
          "addressCountry": "BR"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${config.canonicalUrl}#service`,
        "name": config.h1,
        "provider": {
          "@type": "LocalBusiness",
          "name": "Carplus Vistorias"
        },
        "areaServed": {
          "@type": "City",
          "name": "Curitiba"
        },
        "description": config.description
      }
    ];
  }, [config]);

  // Dúvidas práticas; condições dependem de confirmação com a equipe.
  const FAQS = [
    {
        "q": "O que confirmar antes de agendar uma vistoria pré-compra?",
        "a": "Informe modelo, ano e a dúvida principal sobre o veículo. Confirme escopo, documentos necessários, orçamento e prazo do laudo. Combine com o vendedor a apresentação do automóvel na base do Portão."
    },
    {
        "q": "Quanto custa e quanto demora?",
        "a": "O orçamento e o prazo precisam ser confirmados com a equipe para o veículo e serviço escolhidos. Não presuma que a entrega será imediata. Consulte disponibilidade antes de se deslocar."
    },
    {
        "q": "A consulta de histórico encontra todas as ocorrências?",
        "a": "Não trate uma consulta sem apontamentos como garantia de histórico sem ocorrências. Pergunte quais fontes são consultadas e quais limitações constam do laudo. A avaliação presencial e a documentação devem ser consideradas em conjunto."
    },
    {
        "q": "A cautelar substitui uma avaliação mecânica?",
        "a": "São escopos diferentes. Confirme se a avaliação contratada inclui testes mecânicos ou eletrônicos. Havendo dúvidas sobre funcionamento, peça uma avaliação específica, além da análise de estrutura e procedência."
    },
    {
        "q": "O laudo garante a compra ou a aceitação por seguradora?",
        "a": "O laudo registra os resultados dentro do escopo contratado; não elimina todos os riscos nem garante aceitação por seguradora ou instituição financeira. Consulte diretamente essas empresas sobre suas condições."
    },
    {
        "q": "A Carplus atende no bairro indicado nesta página?",
        "a": "A base informada no site fica no Portão, na Av. Presidente Arthur da Silva Bernardes, 1323, Curitiba. Clientes de outros bairros podem consultar agendamento nessa base. Deslocamento para outras regiões tem taxa e deve ser combinado antes."
    },
    {
        "q": "O que fazer quando aparece um apontamento?",
        "a": "Peça à equipe que explique o item, os limites da análise e se são necessárias verificações adicionais. Compare o laudo com as informações do vendedor antes de decidir. Não interprete um apontamento isolado sem contexto."
    },
    {
        "q": "Como solicitar orçamento?",
        "a": "Use o WhatsApp (41) 98874-0258 informado neste site. Conte o modelo, ano e o tipo de avaliação que procura. Confirme horário, endereço e condições antes de levar o veículo."
    }
];

  const targetSlugList = Object.keys(CONFIGS);

  return (
    <>
      <EnhancedSEO
        title={config.title}
        description={config.description}
        keywords={config.keywords}
        canonicalUrl={config.canonicalUrl}
        ogType="business"
        structuredData={structuredDataObj}
      />

      <div className="bg-zinc-950 font-sans leading-relaxed text-zinc-300">
        
        {/* HERO SECTION DE ALTO IMPACTO */}
        <section className="relative py-24 md:py-32 bg-zinc-950 overflow-hidden flex items-center justify-center border-b border-zinc-900">
          <div className="absolute inset-0 bg-cover bg-center bg-[url('https://img.carplusvistorias.com.br/vistorias-carplus-carros.png')] opacity-15 brightness-50 z-0"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/75 to-transparent z-0"></div>
          
          <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-5xl text-center">
            <span className="text-primary font-mono tracking-widest text-xs font-black uppercase mb-4 block animate-[pulse_2s_infinite]">
              AVALIAÇÃO ANTES DA COMPRA
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-black text-white uppercase tracking-tight leading-tight select-none">
              {config.h1}
            </h1>
            <p className="text-zinc-400 mt-6 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-justify md:text-center">
              Antes de fechar a compra, conheça os itens avaliados e os limites do serviço. Na <span className="text-white font-bold">Carplus Vistorias</span>, consulte a avaliação de estrutura e procedência, o orçamento e o prazo de entrega do laudo.
                </p>

            {/* Aviso da Base da Empresa e Taxa de Deslocamento */}
            <div className="max-w-3xl mx-auto my-6 p-4 sm:p-5 rounded-2xl bg-amber-500/15 border-2 border-amber-500/70 shadow-2xl text-left backdrop-blur-sm">
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
                    <strong>O atendimento é realizado na base da empresa</strong> (Unidade Portão: Av. Presidente Arthur da Silva Bernardes, 1323 · Portão, Curitiba/PR), equipada com elevadores automotivos, rampa de perícia e medidores digitais.
                  </p>
                  <p className="text-xs sm:text-sm text-amber-300 leading-relaxed font-black bg-black/40 p-2.5 rounded-lg border border-amber-500/40">
                    <i className="fa-solid fa-circle-exclamation mr-1.5 text-amber-400"></i> AVISO: O atendimento é na base da empresa. Caso precise de deslocamento em outras regiões fora da região do Portão, temos uma taxa — consulte antes o valor!
                  </p>
                  <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] font-bold">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                      <i className="fa-solid fa-building"></i> Na Base (Portão): Sem Taxa de Deslocamento
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/70 text-red-300 border border-red-500/50">
                      <i className="fa-solid fa-car-side"></i> Fora do Portão: Temos Taxa (Consulte Antes)
                    </span>
                    <a
                      href={`https://wa.me/5541988740258?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20vistoria%20cautelar.%20Vi%20no%20site%20a%20p%C3%A1gina%20de%20${encodeURIComponent(config.anchorText)}%20(Taxa%20Deslocamento).`}
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

            <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="flex flex-col items-center w-full sm:w-auto">
                <a
                  href={`https://wa.me/5541988740258?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20vistoria%20cautelar.%20Vi%20no%20site%20a%20p%C3%A1gina%20de%20${encodeURIComponent(config.anchorText)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="premium-btn-green w-full sm:w-auto font-display font-black text-sm uppercase tracking-widest py-4 px-10 rounded-full inline-flex items-center justify-center gap-2.5"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-whatsapp text-[#25D366]"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 1.83.49 3.55 1.34 5.03L2 22l5.14-1.31C8.57 21.49 10.24 22 12 22c5.52 0 10-4.48 10-10Z"/></svg>
                  AGENDAR AGORA
                </a>
                <span className="text-[10px] text-zinc-400 mt-2.5 uppercase font-mono tracking-widest font-semibold block text-center leading-none">
                  Falar Conosco no WhatsApp · Profissional & Premium
                </span>
              </div>

              <div className="flex flex-col items-center w-full sm:w-auto">
                <button
                  onClick={onGoHome}
                  className="w-full sm:w-auto bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-800 hover:border-zinc-700 transition-all font-display font-bold text-xs uppercase tracking-widest py-4 px-8 rounded-full inline-flex items-center justify-center gap-2"
                >
                  <i className="fa-solid fa-home text-primary"></i> VOLTAR À HOME
                </button>
                <span className="text-[10px] text-zinc-400 mt-2.5 uppercase font-mono tracking-widest font-semibold block text-center leading-none">
                  Ir para a página principal
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* METRICS / STATS STRIP */}
        <AtendimentoQuadrinhos slug={slug} preCompra />

        <section className="bg-zinc-900/40 border-b border-zinc-900 py-10">
          <div className="container mx-auto px-4 max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-3xl md:text-4xl font-display font-black text-primary">Prazo</div>
              <div className="text-xs uppercase tracking-wider text-zinc-400 font-mono mt-2">Consulte a equipe</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-black text-primary">Escopo</div>
              <div className="text-xs uppercase tracking-wider text-zinc-400 font-mono mt-2">Confirme os itens</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-black text-primary">Portão</div>
              <div className="text-xs uppercase tracking-wider text-zinc-400 font-mono mt-2">Base de atendimento</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-black text-primary">Laudo</div>
              <div className="text-xs uppercase tracking-wider text-zinc-400 font-mono mt-2">Entenda os apontamentos</div>
            </div>
          </div>
        </section>

        {/* POR QUE VALE A PENA MANDAR FAZER VISTORIA PRÉ COMPRA? */}
        <section className="py-20 bg-zinc-950 px-4 md:px-8">
          <div className="container mx-auto max-w-4xl text-justify text-base md:text-lg text-zinc-300 space-y-6 leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-display font-black text-white uppercase text-center tracking-tight mb-8">
              Vale a Pena Fazer Vistoria Cautelar Pré Compra? Descubra a Real Necessidade
            </h2>
            <p>
              A vistoria pré-compra ajuda a organizar as informações sobre o veículo antes da negociação. Ela deve ser contratada com clareza sobre o que será avaliado e como os resultados serão apresentados.
                </p>
            <p>
              Anúncios, fotos e relatos do vendedor não substituem a avaliação presencial. Informe à equipe suas dúvidas sobre reparos, identificação do veículo e registros de histórico, para confirmar quais verificações estão incluídas.
                </p>
            <p>
              O laudo não elimina toda incerteza nem garante o desempenho futuro do automóvel. Leia os apontamentos, peça esclarecimentos e considere uma avaliação mecânica específica quando houver dúvidas sobre o funcionamento.
                </p>
          </div>
        </section>

        {/* SEÇÃO PRINCIPAIS GOLPES NA COMPRA DE VEÍCULOS USADOS */}
        <section className="py-20 bg-zinc-900/30 border-y border-zinc-900 px-4 md:px-8">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <span className="text-primary font-mono tracking-widest text-xs font-black uppercase">ATENÇÃO ANTES DE NEGOCIAR</span>
              <h2 className="text-3xl md:text-4xl font-display font-black text-white uppercase mt-2">
                Pontos de atenção na compra de veículos usados
              </h2>
              <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
                Estes são pontos que merecem atenção antes de negociar. A presença de um indício precisa ser avaliada no contexto do veículo, sem conclusões automáticas:
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-justify">
              
              <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 hover:border-primary/40 transition-all">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 text-xl">
                  <i className="fa-solid fa-gavel"></i>
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-2 uppercase">Carros de Leilão</h3>
                <p className="text-sm text-zinc-400">
                  Pergunte sobre a origem do veículo e solicite documentação disponível. Confirme quais consultas fazem parte da vistoria e quais limitações elas têm.
                </p>
              </div>

              <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 hover:border-primary/40 transition-all">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 text-xl">
                  <i className="fa-solid fa-car-crash"></i>
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-2 uppercase">Sinistros Ocultos</h3>
                <p className="text-sm text-zinc-400">
                  Reparos anteriores merecem análise de estrutura e pintura. Peça explicação sobre os indícios encontrados e sua relevância para o veículo.
                </p>
              </div>

              <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 hover:border-primary/40 transition-all">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 text-xl">
                  <i className="fa-solid fa-gauge-high"></i>
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-2 uppercase">Quilometragem Adulterada</h3>
                <p className="text-sm text-zinc-400">
                  Compare a quilometragem informada com o histórico de manutenção disponível. Pergunte se a avaliação contratada inclui verificações relacionadas ao odômetro.
                </p>
              </div>

              <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 hover:border-primary/40 transition-all">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 text-xl">
                  <i className="fa-solid fa-file-invoice"></i>
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-2 uppercase">Documentos Falsificados</h3>
                <p className="text-sm text-zinc-400">
                  Confira os dados apresentados e procure os canais oficiais para esclarecer inconsistências documentais. A vistoria não substitui as verificações exigidas para a transferência.
                </p>
              </div>

              <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 hover:border-primary/40 transition-all">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 text-xl">
                  <i className="fa-solid fa-barcode"></i>
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-2 uppercase">Chassi Remarcado (REM)</h3>
                <p className="text-sm text-zinc-400">
                  Uma marcação divergente precisa de esclarecimento e documentação. Não conclua a origem da alteração apenas por aparência; peça avaliação e orientação sobre a verificação necessária.
                </p>
              </div>

              <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 hover:border-primary/40 transition-all">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 text-xl">
                  <i className="fa-solid fa-gears"></i>
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-2 uppercase">Motor Divergente</h3>
                <p className="text-sm text-zinc-400">
                  Diferenças na identificação do motor devem ser conferidas com a documentação disponível. Pergunte quais verificações a equipe pode realizar e quais dependem de outros canais.
                </p>
              </div>

              <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 hover:border-primary/40 transition-all">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 text-xl">
                  <i className="fa-solid fa-shield-halved"></i>
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-2 uppercase">Veículos Recuperados</h3>
                <p className="text-sm text-zinc-400">
                  Se houver informação de recuperação, solicite documentos e esclarecimentos sobre a ocorrência e os reparos. Confirme o alcance da avaliação antes de decidir.
                </p>
              </div>

              <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 hover:border-primary/40 transition-all">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 text-xl">
                  <i className="fa-solid fa-cloud-showers-water"></i>
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-2 uppercase">Veículos Inundados / Enchente</h3>
                <p className="text-sm text-zinc-400">
                  Informe qualquer suspeita de enchente à equipe. Sinais de umidade ou oxidação podem exigir verificações específicas; uma análise visual isolada não exclui problemas.
                </p>
              </div>

              <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 hover:border-primary/40 transition-all">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 text-xl">
                  <i className="fa-solid fa-ban"></i>
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-2 uppercase">Bloqueios de Gravame</h3>
                <p className="text-sm text-zinc-400">
                  Confirme a situação documental pelos canais oficiais e esclareça restrições antes de avançar na negociação. Pergunte quais consultas estão incluídas no serviço.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* SEÇÃO O QUE ANALISAMOS EM UMA VISTORIA PRÉ COMPRA */}
        <section className="py-20 bg-zinc-950 px-4 md:px-8 border-b border-zinc-900">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <span className="text-primary font-mono tracking-widest text-xs font-black uppercase">ESCOPO DA AVALIAÇÃO</span>
              <h2 className="text-3xl md:text-4xl font-display font-black text-white uppercase mt-2">
                O que perguntar sobre a vistoria pré-compra
              </h2>
              <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
                Abaixo estão exemplos de pontos a discutir com a equipe. A inclusão de cada verificação, as fontes consultadas e as limitações devem ser confirmadas no serviço contratado.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 text-center">
              {[
                { icon: "fa-key", name: "Chassi", desc: "Conferência dos sinais de identificação." },
                { icon: "fa-car-shaft", name: "Motor", desc: "Identificação do motor e documentação disponível." },
                { icon: "fa-gears", name: "Câmbio", desc: "Confirme se a análise inclui câmbio." },
                { icon: "fa-window-maximize", name: "Vidros", desc: "Marcas de identificação dos vidros." },
                { icon: "fa-ticket", name: "Etiquetas", desc: "Etiquetas de identificação visíveis." },
                { icon: "fa-grip-lines-vertical", name: "Longarinas", desc: "Indícios de reparos e deformações." },
                { icon: "fa-hard-drive", name: "Teto", desc: "Indícios de reparos no teto." },
                { icon: "fa-columns", name: "Colunas", desc: "Observação das colunas estruturais." },
                { icon: "fa-shield", name: "Estrutura", desc: "Condições visíveis e limites de acesso." },
                { icon: "fa-arrows-split-up-and-left", name: "Soldas", desc: "Indícios de reparos nas soldas." },
                { icon: "fa-spray-can", name: "Pintura", desc: "Indícios de repintura e medições disponíveis." },
                { icon: "fa-gavel", name: "Leilão", desc: "Confirme fontes e limites da consulta." },
                { icon: "fa-fire", name: "Sinistro", desc: "Registros disponíveis e indícios físicos." },
                { icon: "fa-ban", name: "Restrições", desc: "Confirme consultas incluídas e canais oficiais." },
                { icon: "fa-file-shield", name: "Documentação", desc: "Informações disponíveis para conferência." }
              ].map((item, idx) => (
                <div key={idx} className="bg-zinc-900/40 p-5 rounded-xl border border-zinc-900 hover:border-zinc-800 transition-all flex flex-col justify-between items-center text-justify">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-primary mb-3 text-base text-center">
                    <i className={`fa-solid ${item.icon}`}></i>
                  </div>
                  <h4 className="font-display font-extrabold text-sm text-white mb-1 uppercase text-center w-full">{item.name}</h4>
                  <p className="text-xs text-zinc-400 leading-normal text-center w-full">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* QUEM DEVE CONTRATAR UMA VISTORIA PRÉ COMPRA? */}
        <section className="py-20 bg-zinc-900/10 px-4 md:px-8">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-display font-black text-white uppercase text-center tracking-tight mb-12">
              Quem Deve Contratar a Vistoria Pré Compra?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-justify">
              
              <div className="bg-zinc-900/60 p-6 rounded-xl border border-zinc-800/80 flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center text-primary font-bold">1</span>
                <div>
                  <h3 className="font-display font-extrabold text-white uppercase mb-2">Compradores de Veículos Usados</h3>
                  <p className="text-sm text-zinc-400">
                    Compradores podem usar os apontamentos para fazer perguntas ao vendedor e decidir quais verificações adicionais são necessárias antes da compra.
                </p>
                </div>
              </div>

              <div className="bg-zinc-900/60 p-6 rounded-xl border border-zinc-800/80 flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center text-primary font-bold">2</span>
                <div>
                  <h3 className="font-display font-extrabold text-white uppercase mb-2">Vendedores e Particulares</h3>
                  <p className="text-sm text-zinc-400">
                    Vendedores podem apresentar o laudo e esclarecer os apontamentos com transparência. O documento não garante a venda nem um valor de negociação.
                </p>
                </div>
              </div>

              <div className="bg-zinc-900/60 p-6 rounded-xl border border-zinc-800/80 flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center text-primary font-bold">3</span>
                <div>
                  <h3 className="font-display font-extrabold text-white uppercase mb-2">Lojistas, Revendedores e Garagens</h3>
                  <p className="text-sm text-zinc-400">
                    Lojistas podem consultar o escopo de avaliações para apoiar a análise dos veículos do estoque. O laudo não substitui suas demais verificações e responsabilidades.
                </p>
                </div>
              </div>

              <div className="bg-zinc-900/60 p-6 rounded-xl border border-zinc-800/80 flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center text-primary font-bold">4</span>
                <div>
                  <h3 className="font-display font-extrabold text-white uppercase mb-2">Financeiras, Frotistas e Consórcios</h3>
                  <p className="text-sm text-zinc-400">
                    Frotistas e empresas podem solicitar informações sobre o serviço. Quando houver financiamento ou seguro, a aceitação de documentos e veículos deve ser confirmada com a instituição responsável.
                </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SEÇÃO BAIRROS COMPLETA EM CURITIBA */}
        <section className="py-20 bg-zinc-950 border-t border-zinc-900 px-4 md:px-8">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl font-display font-black text-white uppercase text-center tracking-tight mb-8">
              Bairros Atendidos em Curitiba e Região
            </h2>
            
            <p className="text-zinc-400 text-justify text-base leading-relaxed mb-10 max-w-4xl mx-auto">
              A base física fica na <span className="text-white font-bold">Av. Presidente Arthur da Silva Bernardes, 1323, no Portão, Curitiba</span>. Para os demais bairros listados, consulte agendamento nessa base. Atendimento com deslocamento depende de disponibilidade e taxa combinadas previamente.
                </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 text-center">
              {[
                "Portão", "Água Verde", "Vila Izabel", "Santa Quitéria", "Seminário", "Capão Raso", 
                "Novo Mundo", "Fazendinha", "Campo Comprido", "Bigorrilho", "Batel", "Ecoville", 
                "Hauer", "Boqueirão", "Xaxim", "Uberaba", "Centro", "Rebouças", "Parolin", 
                "Pinheirinho", "Tatuquara"
              ].map((bairro, idx) => (
                <div key={idx} className="bg-zinc-900/30 p-3 rounded-lg border border-zinc-900 hover:border-zinc-800 text-white font-semibold text-xs tracking-wide transition-all truncate uppercase">
                  <i className="fa-solid fa-map-pin text-primary/80 mr-1.5"></i>
                  {bairro}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CRITICAL LINKS PACK / SEO CLUSTER INTERNAL LINKINGS */}
        <section className="py-16 bg-zinc-900/30 border-y border-zinc-900 px-4 md:px-8">
          <div className="container mx-auto max-w-5xl">
            <h3 className="text-lg font-mono font-extrabold text-zinc-400 uppercase tracking-widest text-center mb-8">
              🔗 Conectividade e Linkagem Interna do Portfólio de Serviços
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4">
              <a onClick={onGoHome} className="cursor-pointer bg-zinc-950 p-4 rounded-lg border border-zinc-800 hover:border-primary/50 text-center transition-all text-sm font-bold text-white hover:text-primary">
                Vistoria Cautelar Curitiba
              </a>
              <a onClick={onGoHome} className="cursor-pointer bg-zinc-950 p-4 rounded-lg border border-zinc-800 hover:border-primary/50 text-center transition-all text-sm font-bold text-white hover:text-primary">
                Laudo Cautelar Curitiba
              </a>
              <a onClick={onGoHome} className="cursor-pointer bg-zinc-950 p-4 rounded-lg border border-zinc-800 hover:border-primary/50 text-center transition-all text-sm font-bold text-white hover:text-primary">
                Transferência Veicular Curitiba
              </a>
              <a onClick={onGoHome} className="cursor-pointer bg-zinc-950 p-4 rounded-lg border border-zinc-800 hover:border-primary/50 text-center transition-all text-sm font-bold text-white hover:text-primary">
                Vistoria de Transferência
              </a>
              <a onClick={onGoHome} className="cursor-pointer bg-zinc-950 p-4 rounded-lg border border-zinc-800 hover:border-primary/50 text-center transition-all text-sm font-bold text-white hover:text-primary">
                Inspeção Veicular Curitiba
              </a>
            </div>

            <div className="mt-10 pt-8 border-t border-zinc-900/80">
              <h4 className="text-xs font-mono tracking-widest uppercase text-zinc-500 mb-4 text-center">Variantes Semânticas Geradas no Cluster</h4>
              <div className="flex flex-wrap gap-2.5 justify-center max-w-4xl mx-auto">
                {targetSlugList.map((slugKey) => {
                  const item = CONFIGS[slugKey];
                  return (
                    <a
                      key={slugKey}
                      href={`/${slugKey}`}
                      className="bg-zinc-950 py-1.5 px-3 rounded text-[10px] uppercase tracking-widest font-mono font-bold text-zinc-400 hover:text-primary border border-zinc-900 hover:border-zinc-800 transition-all"
                    >
                      {item.anchorText}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* PERGUNTAS FREQUENTES */}
        <section className="py-24 bg-zinc-950 px-4 md:px-8">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <span className="text-primary font-mono tracking-widest text-xs font-black uppercase">DÚVIDAS ANTES DE CONTRATAR</span>
              <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase mt-2 select-none leading-tight">
                PERGUNTAS FREQUENTES
              </h2>
              <p className="text-zinc-400 mt-4 text-base max-w-2xl mx-auto">
                Respostas para preparar sua visita, entender o alcance da avaliação e conversar com a equipe antes de contratar:
                </p>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`border rounded-lg overflow-hidden transition-all duration-300 ${
                      isOpen
                        ? 'border-primary bg-zinc-900/40 shadow-lg shadow-primary/5'
                        : 'border-zinc-900 bg-zinc-900/10 hover:border-zinc-800'
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-left p-5 flex items-center justify-between gap-4 select-none focus:outline-none"
                    >
                      <span className="font-display font-bold text-sm md:text-base text-white leading-normal pr-2">
                        {faq.q}
                      </span>
                      <span
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-zinc-900 border border-zinc-800 text-primary transition-transform duration-300 ${
                          isOpen ? 'rotate-180 bg-primary/10 border-primary/40' : ''
                        }`}
                      >
                        <i className="fa-solid fa-chevron-down text-xs"></i>
                      </span>
                    </button>

                    <div
                      className={`transition-all duration-300 ease-in-out ${
                        isOpen ? 'max-h-[500px] border-t border-zinc-900 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="p-5 text-sm leading-relaxed text-zinc-400 font-medium text-justify">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA FINAL DE FECHAMENTO */}
        <section className="relative py-20 bg-zinc-900 border-t border-zinc-800 overflow-hidden text-center px-4 md:px-8">
          <div className="container mx-auto max-w-4xl relative z-10 flex flex-col items-center">
            <span className="text-primary font-mono text-xs uppercase tracking-widest font-black block mb-4">CONSULTE DISPONIBILIDADE</span>
            <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase tracking-tight leading-tight">
              Prepare sua vistoria antes de fechar a compra
            </h2>
            <p className="text-zinc-300 mt-6 max-w-2xl text-justify md:text-center text-sm md:text-base leading-relaxed">
              Converse pelo WhatsApp sobre o veículo e suas dúvidas. Confirme escopo, valor, horário e prazo do laudo antes de se deslocar à base no Portão.
                </p>

            <div className="mt-8 flex flex-col items-center gap-1">
              <a
                href={`https://wa.me/5541988740258?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20vistoria%20cautelar.%20Vi%20no%20site%20a%20p%C3%A1gina%20de%20${encodeURIComponent(config.anchorText)}%20(Check-up).`}
                target="_blank"
                rel="noopener noreferrer"
                className="premium-btn-green font-display font-black text-sm uppercase tracking-wider py-4 px-10 rounded-xl inline-flex items-center justify-center gap-2.5"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-whatsapp text-[#25D366]"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 1.83.49 3.55 1.34 5.03L2 22l5.14-1.31C8.57 21.49 10.24 22 12 22c5.52 0 10-4.48 10-10Z"/></svg>
                WHATSAPP
              </a>
              <span className="text-[10px] text-zinc-400 mt-2.5 uppercase font-mono tracking-widest font-semibold block text-center leading-none">
                Agendar pelo WhatsApp · Profissional & Premium
              </span>
            </div>

            <div className="mt-6 flex flex-wrap justify-center items-center gap-2">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-950 border border-primary/50 text-xs text-zinc-300 font-mono font-bold">
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
    </>
  );
}
