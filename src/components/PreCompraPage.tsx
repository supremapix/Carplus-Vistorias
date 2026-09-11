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
    description: 'Realize sua Vistoria Pré Compra em Curitiba com a Carplus. Avaliação veicular minuciosa com equipe credenciada e laudo técnico original na hora para evitar golpes.',
    keywords: 'vistoria pre compra curitiba, laudo de carro usado, perito automotivo curitiba, comprar carro seguro, carplus vistorias',
    canonicalUrl: 'https://www.carplusvistorias.com.br/vistoria-pre-compra-curitiba.html',
    anchorText: 'Vistoria Pré Compra Curitiba'
  },
  'avaliacao-veicular-pre-compra-curitiba': {
    title: 'Avaliação Veicular Pré Compra Curitiba | Carplus Vistorias',
    h1: 'Avaliação Veicular Pré Compra Curitiba',
    description: 'Faça uma detalhada Avaliação Veicular Pré Compra em Curitiba. Analisamos pintura, lacres, motor e chassi para atestar a originalidade do automóvel.',
    keywords: 'avaliacao veicular curitiba, vistoria pre compra, pericia automotiva curitiba, analise carro usado, carplus vistorias',
    canonicalUrl: 'https://www.carplusvistorias.com.br/avaliacao-veicular-pre-compra-curitiba.html',
    anchorText: 'Avaliação Veicular Pré Compra Curitiba'
  },
  'inspecao-veicular-curitiba': {
    title: 'Inspeção Veicular Antes da Compra Curitiba | Carplus Vistorias',
    h1: 'Inspeção Veicular Antes da Compra Curitiba',
    description: 'Inspeção veicular profissional antes de comprar carros usados em Curitiba. Evite comprar carros com teto solar cortado, sinistros e adulterações graves.',
    keywords: 'inspecao veicular curitiba, vistoria cautelar, laudo cautelar completo, vistoria de compra, carplus vistorias',
    canonicalUrl: 'https://www.carplusvistorias.com.br/inspecao-veicular-curitiba.html',
    anchorText: 'Inspeção Veicular Antes da Compra Curitiba'
  },
  'verificacao-procedencia-curitiba': {
    title: 'Verificação de Procedência Veicular Curitiba | Carplus Vistorias',
    h1: 'Verificação de Procedência Veicular Curitiba',
    description: 'Saiba o histórico real de leilão, furto, gravames e restrições com nossa Verificação de Procedência Veicular em Curitiba. Obtenha segurança total.',
    keywords: 'verificacao de procedencia veicular curitiba, historico do veiculo, leilao sinistro seguradora, carplus vistorias',
    canonicalUrl: 'https://www.carplusvistorias.com.br/verificacao-procedencia-curitiba.html',
    anchorText: 'Verificação de Procedência Veicular Curitiba'
  },
  'analise-veiculos-usados-curitiba': {
    title: 'Análise Completa de Veículos Usados Curitiba | Carplus Vistorias',
    h1: 'Análise Completa de Veículos Usados Curitiba',
    description: 'Contrate a Análise Completa de Veículos Usados em Curitiba da Carplus. Mapeamos soldas clandestinas, reparos estruturais e restrições com emitido na hora.',
    keywords: 'analise de veiculos usados curitiba, vistoria cautelar portao, carro usado completo, carplus vistorias',
    canonicalUrl: 'https://www.carplusvistorias.com.br/analise-veiculos-usados-curitiba.html',
    anchorText: 'Análise Completa de Veículos Usados Curitiba'
  },
  'laudo-pre-compra-curitiba': {
    title: 'Laudo Pré Compra Curitiba - Emissão Rápida | Carplus Vistorias',
    h1: 'Laudo Pré Compra Curitiba',
    description: 'Emissão oficial de Laudo Pré Compra em Curitiba. Parecer pericial de estrutura, pintura e histórico legal emitido em até 60 minutos na nossa sede.',
    keywords: 'laudo pre compra curitiba, laudo cautelar curitiba, vistoria de transferencia, vistoria portao, carplus vistorias',
    canonicalUrl: 'https://www.carplusvistorias.com.br/laudo-pre-compra-curitiba.html',
    anchorText: 'Laudo Pré Compra Curitiba'
  },
  'check-up-veicular-curitiba': {
    title: 'Check-up Veicular Antes da Compra Curitiba | Carplus Vistorias',
    h1: 'Check-up Veicular Antes da Compra Curitiba',
    description: 'O melhor Check-up Veicular em Curitiba antes de fechar negócio. Analisamos teto, longarinas, colunas e numeração de pecas com medidor especializado.',
    keywords: 'check-up veicular curitiba, carplus vistoria, perícia automotiva curitiba, laudo na hora',
    canonicalUrl: 'https://www.carplusvistorias.com.br/check-up-veicular-curitiba.html',
    anchorText: 'Check-up Veicular Antes da Compra Curitiba'
  },
  'analise-carro-usado-curitiba': {
    title: 'Análise de Carro Usado Curitiba - Sem Surpresas | Carplus Vistorias',
    h1: 'Análise de Carro Usado Curitiba',
    description: 'Não compre seu veículo no escuro. Agende nossa Perícia e Análise de Carro Usado em Curitiba para obter transparência estrutural e documental.',
    keywords: 'analise de carro usado curitiba, vistoria cautelar curitiba, carros batidos sinistrados, carplus vistorias',
    canonicalUrl: 'https://www.carplusvistorias.com.br/analise-carro-usado-curitiba.html',
    anchorText: 'Análise de Carro Usado Curitiba'
  },
  'consultoria-compra-veiculos-curitiba': {
    title: 'Consultoria para Compra de Veículos Curitiba | Carplus Vistorias',
    h1: 'Consultoria para Compra de Veículos Curitiba',
    description: 'Evite golpes financeiros. Nossa Consultoria para Compra de Veículos Usados em Curitiba pericia 80+ pontos críticos e garante boa procedência.',
    keywords: 'consultoria para compra de veiculos curitiba, vistoria automotiva, laudo completo curitiba',
    canonicalUrl: 'https://www.carplusvistorias.com.br/consultoria-compra-veiculos-curitiba.html',
    anchorText: 'Consultoria para Compra de Veículos Curitiba'
  },
  'avaliacao-automotiva-compra-curitiba': {
    title: 'Avaliação Automotiva para Compra Curitiba | Carplus Vistorias',
    h1: 'Avaliação Automotiva para Compra Curitiba',
    description: 'Compre com segurança em Curitiba. Avaliação Automotiva para Compra de carros seminovos e usados com equipe técnica especializada.',
    keywords: 'avaliacao automotiva para compra curitiba, laudo de vistoria curitiba, pericia cautelar, carplus vistorias',
    canonicalUrl: 'https://www.carplusvistorias.com.br/avaliacao-automotiva-compra-curitiba.html',
    anchorText: 'Avaliação Automotiva para Compra Curitiba'
  },
  'vistoria-pre-compra-portao': {
    title: 'Vistoria Pré Compra Portão - Curitiba | Carplus Vistorias',
    h1: 'Vistoria Pré Compra Portão',
    description: 'Vistoria pré compra na região do Portão em Curitiba. Sede própria para você realizar a avaliação cautelar estrutural completa do carro com emissão na hora.',
    keywords: 'vistoria pre compra portao, vistoria cautelar portao, perito carro portão curitiba',
    canonicalUrl: 'https://www.carplusvistorias.com.br/vistoria-pre-compra-portao.html',
    anchorText: 'Vistoria Pré Compra Portão'
  },
  'vistoria-pre-compra-agua-verde': {
    title: 'Vistoria Pré Compra Água Verde - Curitiba | Carplus Vistorias',
    h1: 'Vistoria Pré Compra Água Verde',
    description: 'Está no Água Verde? Faça a Vistoria Pré Compra do seu seminovo com a Carplus. Avaliação minuciosa perto de você com certificação e laudo técnico.',
    keywords: 'vistoria pre compra agua verde, pericia veicular agua verde curitiba',
    canonicalUrl: 'https://www.carplusvistorias.com.br/vistoria-pre-compra-agua-verde.html',
    anchorText: 'Vistoria Pré Compra Água Verde'
  },
  'vistoria-pre-compra-capao-raso': {
    title: 'Vistoria Pré Compra Capão Raso - Curitiba | Carplus Vistorias',
    h1: 'Vistoria Pré Compra Capão Raso',
    description: 'Garanta a procedência de veículos comprados no Capão Raso com nossa Vistoria Pré Compra completa. Evite fraudes mecânicas e sinistros camuflados.',
    keywords: 'vistoria pre compra capao raso, laudo cautelar capao raso, vistoria curitiba, carplus vistorias',
    canonicalUrl: 'https://www.carplusvistorias.com.br/vistoria-pre-compra-capao-raso.html',
    anchorText: 'Vistoria Pré Compra Capão Raso'
  },
  'vistoria-pre-compra-bigorrilho': {
    title: 'Vistoria Pré Compra Bigorrilho - Curitiba | Carplus Vistorias',
    h1: 'Vistoria Pré Compra Bigorrilho',
    description: 'Análise rigorosa e laudo pericial para compradores de carros no Bigorrilho / Champagnat. Agende sua Vistoria Pré Compra na Carplus pelo WhatsApp.',
    keywords: 'vistoria pre compra bigorrilho, perito automotivo champagnat, laudo cautelar champagnat',
    canonicalUrl: 'https://www.carplusvistorias.com.br/vistoria-pre-compra-bigorrilho.html',
    anchorText: 'Vistoria Pré Compra Bigorrilho'
  },
  'vistoria-pre-compra-batel': {
    title: 'Vistoria Pré Compra Batel - Curitiba | Carplus Vistorias',
    h1: 'Vistoria Pré Compra Batel',
    description: 'Avaliação premium de carros de luxo e importados na região do Batel. Vistoria Pré Compra e laudo de transferência com máxima precisão técnica.',
    keywords: 'vistoria pre compra batel, perito veiculos importados batel, laudo cautelar batel',
    canonicalUrl: 'https://www.carplusvistorias.com.br/vistoria-pre-compra-batel.html',
    anchorText: 'Vistoria Pré Compra Batel'
  },
  'vistoria-pre-compra-novo-mundo': {
    title: 'Vistoria Pré Compra Novo Mundo - Curitiba | Carplus Vistorias',
    h1: 'Vistoria Pré Compra Novo Mundo',
    description: 'Agende um laudo de vistoria no Novo Mundo de forma dinâmica. Verificamos se o veículo possui restrições ou foi danificado de forma estrutural.',
    keywords: 'vistoria pre compra novo mundo, vistoria carro novo mundo, pericia veicular',
    canonicalUrl: 'https://www.carplusvistorias.com.br/vistoria-pre-compra-novo-mundo.html',
    anchorText: 'Vistoria Pré Compra Novo Mundo'
  },
  'avaliacao-veicular-curitiba': {
    title: 'Avaliação Veicular Curitiba - Profissional | Carplus Vistorias',
    h1: 'Avaliação Veicular Curitiba',
    description: 'Laudos periciais com fotos e parecer técnico rigoroso na hora. Avaliação Veicular completa de chassis, vidros, etiquetas e restrições.',
    keywords: 'avaliacao veicular curitiba, vistoria cautelar curitiba, laudo cautelar',
    canonicalUrl: 'https://www.carplusvistorias.com.br/avaliacao-veicular-curitiba.html',
    anchorText: 'Avaliação Veicular Curitiba'
  },
  'consultoria-compra-carros-curitiba': {
    title: 'Consultoria de Compra de Carros Curitiba | Carplus Vistorias',
    h1: 'Consultoria de Compra de Carros Curitiba',
    description: 'Seja assessorado por peritos certificados. Descubra repinturas severas, soldas de fábrica cortadas e leilões na nossa consultoria automotiva.',
    keywords: 'consultoria compra de carros curitiba, analise cautelar curitiba, vistoria carro usado, carplus vistorias',
    canonicalUrl: 'https://www.carplusvistorias.com.br/consultoria-compra-carros-curitiba.html',
    anchorText: 'Consultoria de Compra de Carros Curitiba'
  },
  'verificacao-procedencia-veicular-curitiba': {
    title: 'Verificação de Procedência Veicular Curitiba | Carplus Vistorias',
    h1: 'Verificação de Procedência Veicular Curitiba',
    description: 'Consulte mais de 15 base de dados detalhadas sobre gravames ativos, passagens por seguradora, recalls e reparos de funilaria em Curitiba.',
    keywords: 'verificacao de procedencia veicular curitiba, carplus vistorias, laudo original de compra',
    canonicalUrl: 'https://www.carplusvistorias.com.br/verificacao-procedencia-veicular-curitiba.html',
    anchorText: 'Verificação de Procedência Veicular Curitiba'
  }
};

const DEFAULT_CONFIG: SemanticPageConfig = {
  title: 'Vistoria Pré Compra Curitiba | Carplus Vistorias',
  h1: 'Vistoria Pré Compra Curitiba',
  description: 'Sua vistoria pré compra veicular robusta em Curitiba com equipe de alta perícia na Carplus Vistorias. Emissão imediata na hora.',
  keywords: 'vistoria pre compra curitiba, laudo cautelar curitiba, vistoria cautelar',
  canonicalUrl: 'https://www.carplusvistorias.com.br/vistoria-pre-compra-curitiba.html',
  anchorText: 'Vistoria Pré Compra'
};

export default function PreCompraPage({ slug, onGoHome }: PreCompraPageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const config = useMemo(() => {
    const cleanSlug = slug.replace('.html', '').replace('/', '');
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
        "@id": `${config.canonicalUrl}#localbusiness`,
        "name": "Carplus Vistorias",
        "description": "Empresa especializada em perícia automotiva, vistoria cautelar, laudos de transferência e vistorias pré-compra em Curitiba e RMC.",
        "url": "https://www.carplusvistorias.com.br",
        "telephone": "+55-41-98874-0258",
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
          "latitude": "-25.4660",
          "longitude": "-49.2890"
        },
        "priceRange": "$$"
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

  // Comprehensive FAQ list containing exactly 40 highly informative and conversion-driven items in Portuguese
  const FAQS = [
    {
      q: "1. Vale a pena fazer vistoria cautelar na compra de um carro usado?",
      a: "Com toda certeza, sim. Investir em um laudo de vistoria cautelar completo ou vistoria pré-compra é a única forma de garantir a procedência de um veículo usado em Curitiba. Menos de 1% do valor do automóvel é investido para evitar perdas financeiras de mais de 100% decorrentes de fraudes mecânicas, danos estruturais irreversíveis e veículos provenientes de leilão camuflados."
    },
    {
      q: "2. Quanto custa uma vistoria cautelar em Curitiba?",
      a: "O valor médio varia conforme a complexidade e a categoria do automóvel. A Carplus oferece a vistoria mais completa e robusta de Curitiba com tarifas acessíveis e competitivas. Fale com nosso time de peritos no WhatsApp (41) 98874-0258 para receber um orçamento imediato e agendar o laudo de verificação."
    },
    {
      q: "3. A vistoria cautelar detecta se o carro é de leilão?",
      a: "Sim, sem dúvidas. A nossa equipe de peritos acessa mais de 15 base de dados em fóruns judiciais federais, cartórios, banco de dados de seguradoras nacionais e histórico de editais de leilões do país para descobrir histórico de leilão ativo, recuperado ou descartado de todas as companhias."
    },
    {
      q: "4. A vistoria cautelar detecta boletim de sinistro ou perda total?",
      a: "Sim. A vistoria da Carplus busca de forma irrestrita todos os registros de sinistros sofridos pelo veículo (incluindo pequena, média e grande monta), passagens por seguradoras com recusa de cobertura subsequente e histórico de indenização por perda total que depreciam o veículo de forma maciça."
    },
    {
      q: "5. Como saber se o carro já foi batido de forma grave antes da compra?",
      a: "Apenas com uma inspeção física minuciosa. Nossos peritos utilizam espessímetros digitais para examinar a densidade e espessura da pintura da carroceria, identificando camadas abusivas de massa plástica, alterações nas soldas originais de fábrica nos painéis, teto e colunas estruturais."
    },
    {
      q: "6. Como saber se o carro é de leilão sem ter dificuldades na futura revenda?",
      a: "A consulta de bancos de dados é essencial. No entanto, muitos veículos de leilão são reparados sem registro formal imediato no documento. A vistoria cautelar física da Carplus examina soldas auxiliares em regiões ocultas do assoalho e longarinas, desmascarando a procedência do carro."
    },
    {
      q: "7. Como verificar a procedência estrutural completa do veículo usado?",
      a: "É preciso analisar os pontos cardíacos de sustentação: as longarinas frontais e traseiras, as colunas centrais que sustentam as portas, o painel Corta-Fogo sob o capô, as soldas de união do teto com as laterais e o assoalho do porta-malas. Se algum indicador apresentar amassados ou soldas paralelas, o carro sofreu colisão estrutural grave."
    },
    {
      q: "8. Como saber se o carro tem passagem por seguradora ou bloqueio de comercialização?",
      a: "A nossa equipe pericial de vistoria realiza buscas pelo histórico de sinistros nas principais seguradoras e associações de proteção veicular do Brasil, detectando se o veículo já foi recusado em contratação de apólice de seguro ou se possui desvalorização de tabela."
    },
    {
      q: "9. O que analisar minuciosamente antes de comprar um carro usado em Curitiba?",
      a: "Antes de pagar qualquer sinal ao vendedor, examine: numeração do chassi sob vidro e carpete, o número do motor, as etiquetas de identificação, o histórico de colisões das longarinas, a integridade do teto, as colunas, as numerações dos vidros originais, soldas clandestinas de emenda, quilometragem no painel e restrições legais ativos."
    },
    {
      q: "10. Como evitar golpes financeiros e ciladas na compra de veículos usados?",
      a: "Exija do vendedor a realização imediata da Vistoria Cautelar Pré-Compra da Carplus Vistorias. Jamais dê sinais financeiros antecipados sem laudo de procedência em mãos, evite promessas de preços absurdamente abaixo da tabela FIPE e faça a transação apenas na presença do laudo certificado."
    },
    {
      q: "11. A vistoria cautelar de carro usado reprova o veículo por quais motivos?",
      a: "O laudo cautelar pode ter resultado 'Aprovado', 'Aprovado com Apontamentos' ou 'Reprovado'. A reprovação ocorre quando detectamos grandes colisões estruturais reparadas que afetam a rigidez metálica, adulteração ou desgaste total da numeração de chassi/motor, chassi remarcado sem aval ou restrições graves."
    },
    {
      q: "12. Qual a diferença prática entre vistoria cautelar e vistoria de transferência?",
      a: "A vistoria de transferência (exigida legalmente pelo DETRAN-PR) é um laudo simplificado que avalia apenas itens obrigatórios de rodagem, documentação básica e numeração de peças. A vistoria cautelar/pré-compra é uma perícia profunda opcional sobre colunas, longarinas, recusa de sinistro, histórico e pintura completa visando a segurança comercial do patrimônio."
    },
    {
      q: "13. Carro recuperado de enchente ou inundado vale a pena comprar se estiver barato?",
      a: "De forma geral, não vale a pena devido a pane elétrica catastrófica tardia. Vistorias minuciosas detectam carros inundados através de vestígios de argila em chicotes elétricos internos sob o carpete, oxidação prematura em conectores eletrônicos ocultos e odor de umidade impregnado."
    },
    {
      q: "14. Como saber se o chassi do carro foi adulterado ou remarcado clandestinamente?",
      a: "Nossos peritos automotivos comparam a tipografia dos dígitos gravados no chassi com os padrões originais específicos de cada montadora, analisando a profundidade do selo metálico, indícios de solda circular ao redor do painel e o fundo da numeração para atestar integridade plena."
    },
    {
      q: "15. Como saber se o veículo tem restrições judiciais ou administrativas ativas?",
      a: "Através da nossa pesquisa sistêmica integrada em tempo real. Identificamos se o veículo possui gravames comerciais, parcelas de financiamento acumuladas, bloqueios de circulação (RENAJUD), alienação fiduciária, penhora cível ou ações trabalhistas sobre o antigo proprietário que impedem a transferência jurídica."
    },
    {
      q: "16. Como saber se o veículo sofreu uma colisão estrutural prévia grave?",
      a: "Ao sofrer uma batida forte, as chapas de aço internas mudam de geometria. O perito detecta se há calafetação paralela (massa de vedação que imita o composto de fábrica) nas portas, capô e teto, estrias de repuxamento hidráulico nas chapas e substituição de painéis de reforço."
    },
    {
      q: "17. Como identificar se um carro é sinistrado que foi remendado no mercado paralelo?",
      a: "Procuramos indícios de funilaria severa, desalinhamento perceptível nas brechas das portas e tampa traseira com o para-lama, diferenças no brilho da pintura em painéis contíguos sob iluminação profissional de LED e marcas de lixamento grosseiras ocultas no verniz do automóvel."
    },
    {
      q: "18. Como verificar o histórico de proprietários e débitos pendentes com segurança?",
      a: "Nosso laudo documental fornece todo o histórico de licenciamentos, faturas de IPVA atrasadas, multas em trânsito de órgãos municipais, estaduais e federais (PRF/DNIT), facilitando a vida do comprador e prevenindo custos indesejados pós-venda."
    },
    {
      q: "19. Quais documentos e certidões verificar antes de assinar a compra do automóvel?",
      a: "Sempre certifique a autenticidade do CRLV-e atualizado, confirme as assinaturas digitais por aplicativo da carteira de trânsito ou no cartório reconhecido, e exija a via física original da perícia e vistoria cautelar pré-compra emitido pela Carplus."
    },
    {
      q: "20. O que é a vistoria pré-compra e como ela ajuda o comprador do carro?",
      a: "É uma avaliação veicular técnica profunda executada antes da sua decisão de compra. Fornecemos um parecer técnico 100% isento, agindo como seus 'olhos periciais' no carro do vendedor. Isso reduz a assimetria de informações, garantindo que você compre do proprietário honesto e evite quadrilhas."
    },
    {
      q: "21. É seguro comprar um veículo que foi reprovado na vistoria com apontamentos leves?",
      a: "Se o veículo tem apontamentos super leves (como painéis plásticos substituídos de para-choques), não compromete a integridade do chassi. Porém, batidas em colunas ou alterações que causem danos de segurança severos sugerem abandono imediato da negociação."
    },
    {
      q: "22. Qual a diferença de vistoria pré-compra para carros nacionais e importados?",
      a: "Muitos carros importados usam estruturas em alumínio ou liga leve aeroespacial, que exigem peritos altamente treinados e espessímetros compatíveis. A Carplus possui peritos capacitados e equipamentos refinados para ambas as linhas, nacionais e importados de luxo."
    },
    {
      q: "23. Como funciona a análise física da pintura com medidor de espessura digital?",
      a: "Nosso medidor de espessura digital emite pulsos magnéticos ou de correntes parasitas para ler em mícrons o filme de tinta. Carros originais têm entre 80 e 130 mícrons. Leituras acima de 220 mícrons expõem retoques severos com preenchimento de massa plástica de repintura automotiva."
    },
    {
      q: "24. Como saber se o veículo possui bloqueios tributários, trabalhistas ou judiciais?",
      a: "Ao consultar nossa base integrada com o poder judiciário nacional, revelamos se o carro está gravado como garantia fiduciária judicial ou penhora de execuções fiscais, livrando o comprador de insolvências e sequestros do veículo na via judicial posterior."
    },
    {
      q: "25. A Carplus oferece garantia ou seguro de responsabilidade civil no laudo emitido?",
      a: "Sim, sem dúvidas. A Carplus é uma empresa pericial credenciada, séria e focada em qualidade. Todos os nossos laudos cautelares contam com cobertura técnica securitária de responsabilidade civil, garantindo total amparo econômico para a sua negociação automotiva."
    },
    {
      q: "26. Como identificar adulteração na quilometragem real no odômetro digital?",
      a: "Descobrimos adulteração de milhagem cruzando dados com o histórico de registros mecânicos arquivados em nossas consultas e notas técnicas, e avaliando o desgaste operacional de componentes internos do veículo como volante, pedais de borracha e desgastes de freio compatíveis."
    },
    {
      q: "27. Como detectar se o teto e as colunas do veículo foram emendados pós-capotamento?",
      a: "Nossos técnicos examinam as borrachas de vedação, removendo o acabamento interno para inspecionar as soldas do robô de fábrica da coluna A, B e C. Se houver pontos de soldagem por arco elétrico artesanal ou irregular, o carro possui emenda grave por colisão severa."
    },
    {
      q: "28. Quais os riscos de comprar um veículo com chassi remarcado (descrição REM)?",
      a: "Um carro com gravação REM (Remarcado) sofre depreciação comercial imediata de 20% a 30% em relação à tabela FIPE. Bancos podem recusar financiamento pleno, e muitas seguradoras recusam cobertura de seguro integral ou cobram prêmios de seguro elevados em caso de sinistro."
    },
    {
      q: "29. O motor do carro pode ser diferente do que está no documento de compra?",
      a: "Sim, isso é frequente em veículos que tiveram o motor fundido ou substituído clandestinamente por peças de furto ou leilão sem recolha oficial de impostos. Se a numeração do motor não bater com a base do DETRAN-PR ou não possuir nota legal, o veículo será retido no posto policial."
    },
    {
      q: "30. Como funciona a verificação jurídica e física de pontos de solda originais de fábrica?",
      a: "Marcas de fábrica (pontos de solda a ponto elétrico) têm profundidade padrão e microindentação perfeita em toda a carroceria. Substituições artesanais geram soldagem irregular de latão ou MIG, que esfarelam as calhas em pancadas de colisão secundárias de trânsito."
    },
    {
      q: "31. Como identificar se uma peça da carroceria foi substituída por peças paralelas baratas?",
      a: "Peças paralelas não possuem os logotipos estampados em relevo ou marcas térmicas da montadora originais nas etiquetas, além de apresentarem folgas nítidas nas frestas de união com os capôs ou portas de montagem, revelando serviços grosseiros de recuperação rápida."
    },
    {
      q: "32. Comprar veículo de frota de locadora exige perícia pré-compra mais rígida em Curitiba?",
      a: "Sim, sem dúvidas. Como carros de locadora são submetidos a regimes operacionais de múltiplos motoristas e desgastes dinâmicos severos, a verificação cautelar com laudo da Carplus é imprescindível para atestar o nível real de saúde das longarinas, motor e histórico de manutenção."
    },
    {
      q: "33. O laudo de vistoria pré-compra é aceito por bancos para financiamento?",
      a: "Nossos laudos periciais e cautelares são emitidos nos termos rígidos e oficiais técnicos com seguro. Ao apresentar ao gerente ou analista do banco em Curitiba, ele terá a certeza absoluta do bom negócio e do bem que serve de garantia fiduciária para a liberação de crédito rápido."
    },
    {
      q: "34. O que analisar nas etiquetas térmicas e vidros para atestar a originalidade do chassi?",
      a: "Exigimos que a numeração gravada por jato de areia em todos os vidros bata com os dígitos do chassi oficial (padrão federal). O mesmo vale para as etiquetas destrutíveis de fábrica nas portas, trava do motor e sob o capô frontal."
    },
    {
      q: "35. Por que a Carplus Vistorias é a melhor empresa de vistorias automotiva de Curitiba?",
      a: "Porque na Carplus, unimos tecnologia diagnóstica eletrônica avançada, uma equipe de peritos altamente capacitados, isenção comercial absoluta para assegurar a sua proteção, laudos precisos gerados imediatamente no local e excelente facilidade de acesso à nossa sede no bairro Portão."
    },
    {
      q: "36. O que é analisado sobre o sistema de câmbio na vistoria pré-compra da Carplus?",
      a: "Verificamos a fixação de suportes estruturais do câmbio no chassi, numerações físicas gravadas para detectar substituições fraudulentas e analisamos o aspecto visual técnico de folgas mecânicas ou vazamento de lubrificante severo."
    },
    {
      q: "37. O que é calafetação automotiva original de fábrica e como os peritos analisam?",
      a: "É a aplicação industrial de compostos selantes flexíveis nas juntas de união de chapas de metal, visando estanqueidade. Quando substituídas artesanalmente na funilaria paralela, perdem o recuo suave padrão e têm corrugadura desigual que expõe soldagem escondida."
    },
    {
      q: "38. Comprar veículos com sinistros maquiados causa perigo de vida aos ocupantes?",
      a: "Sim, é um perigo severo de integridade física. Carros com longarinas e colunas recuperadas ou emendadas sofrem envergadura fácil em novas colisões menores, pois o aço perdeu a rigidez temperada de segurança que absorve o impacto frontal e protege a cabine."
    },
    {
      q: "39. Como a Carplus descobre adulteração química de metais na numeração do chassi?",
      a: "Investigamos vestígios microscópicos de lixamento ou preenchimento de frestas com resina metálica especial. Qualquer diferença na coloração ou textura do metal original e da área gravada revela intervenção abrasiva que enseja imediata reprovação."
    },
    {
      q: "40. Como agendar uma vistoria pré-compra veicular imediata com vocês hoje?",
      a: "Agendar é extremamente simples. Basta nos chamar no WhatsApp (41) 98874-0258 ou ligar no mesmo contato de forma direta. Nossa equipe esclarecerá todos os termos técnicos necessários e fará sua reserva para atendimento preferencial rápido na sede no Portão."
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
              ★ SERVIÇO EXCLUSIVO E ALTAMENTE PERICIAL ★
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-black text-white uppercase tracking-tight leading-tight select-none">
              {config.h1}
            </h1>
            <p className="text-zinc-400 mt-6 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-justify md:text-center">
              Realize a perícia mais rigorosa e minuciosa de Curitiba antes de fechar qualquer negócio. Na <span className="text-white font-bold">Carplus Vistorias</span>, nosso time de peritos automotivos credenciados emite laudos detalhados no ato, protegendo sua integridade financeira contra golpes, sinistros ocultos e problemas cadastrais insolúveis.
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
                      href="https://wa.me/5541988740258?text=Olá!%20Gostaria%20de%20consultar%20o%20valor%20da%20taxa%20de%20deslocamento%20para%20outra%20região."
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
                  href="https://wa.me/5541988740258?text=Olá%20Carplus!%20Gostaria%20de%20agendar%20uma%20vistoria%20pré%20compra%20completa%20Curitiba."
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
        <section className="bg-zinc-900/40 border-b border-zinc-900 py-10">
          <div className="container mx-auto px-4 max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-3xl md:text-4xl font-display font-black text-primary">45-60</div>
              <div className="text-xs uppercase tracking-wider text-zinc-400 font-mono mt-2">Minutos Para Entrega</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-black text-primary">80+</div>
              <div className="text-xs uppercase tracking-wider text-zinc-400 font-mono mt-2">Itens Inspecionados</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-black text-primary">100%</div>
              <div className="text-xs uppercase tracking-wider text-zinc-400 font-mono mt-2">Peritos Credenciados</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-black text-primary">Zero</div>
              <div className="text-xs uppercase tracking-wider text-zinc-400 font-mono mt-2">Dores de Cabeça</div>
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
              Comprar um carro seminovo ou usado em Curitiba é uma das realizações financeiras mais empolgantes na vida de qualquer pessoa, família ou empresa. Contudo, sem a devida <span className="text-primary font-bold">vistoria pré-compra ou laudo cautelar veicular</span>, esse sonho pode se transformar em um catastrófico pesadelo financeiro e de segurança que se protrai no tempo de forma prejudicial.
            </p>
            <p>
              O mercado de automóveis na região de Curitiba é extremamente dinâmico e acelerado. Centenas de veículos mudam de mãos diariamente. O que poucos compradores sabem é que uma fatia considerável desses automóveis em circulação esconde históricos depreciativos severos, tais como reparos estruturais profundos de funilaria, eixos empenados, remendos de chapa ocultos nos painéis de vedação originais de fábrica, passagens por leilão judicial de bancos ou sinistros de colisão frontal e traseira severas.
            </p>
            <p>
              Quando você investe em uma vistoria técnica isenta com a <span className="text-white font-bold">Carplus Vistorias</span>, você remove por completo o fator da incerteza. Nossa equipe de peritos analisa detalhadamente mais de 80 elementos físicos críticos para confirmar se o veículo nunca foi batido de forma grave, se dispõe de calafetação original da montadora, e se todas as etiquetas termoaderentes batem perfeitamente com a descrição cadastrada nas bases federais. É a única forma confiável de fazer uma avaliação automotiva e comprar o seminovo sabendo seu estado integral real.
            </p>
          </div>
        </section>

        {/* SEÇÃO PRINCIPAIS GOLPES NA COMPRA DE VEÍCULOS USADOS */}
        <section className="py-20 bg-zinc-900/30 border-y border-zinc-900 px-4 md:px-8">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <span className="text-primary font-mono tracking-widest text-xs font-black uppercase">⚠️ ALERTA CONTRA CILADAS ⚠️</span>
              <h2 className="text-3xl md:text-4xl font-display font-black text-white uppercase mt-2">
                Principais golpes na compra de veículos usados
              </h2>
              <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
                Muitos golpistas agem de má fé mascarando irregularidades gravíssimas com serviços de mecânica e funilaria clandestinos. Veja o que descobrimos corriqueiramente na nossa sede:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-justify">
              
              <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 hover:border-primary/40 transition-all">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 text-xl">
                  <i className="fa-solid fa-gavel"></i>
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-2 uppercase">Carros de Leilão</h3>
                <p className="text-sm text-zinc-400">
                  Muitos proprietários e revendedores omitirão que o carro foi arrematado em leilões comerciais, judiciais ou recuperado de financiamentos insolventes. Carros de leilão sofrem até 40% de desvalorização e podem ter seguros recusados ou financiamento negado na compra.
                </p>
              </div>

              <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 hover:border-primary/40 transition-all">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 text-xl">
                  <i className="fa-solid fa-car-crash"></i>
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-2 uppercase">Sinistros Ocultos</h3>
                <p className="text-sm text-zinc-400">
                  Carros que sofreram colisões brutais de colunas que foram recuperados às pressas em oficinas de funilaria paralelas sem registro cadastral no DETRAN. Os peritos detectam desalinhamentos estruturais crônicos e massa excessiva na lataria.
                </p>
              </div>

              <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 hover:border-primary/40 transition-all">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 text-xl">
                  <i className="fa-solid fa-gauge-high"></i>
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-2 uppercase">Quilometragem Adulterada</h3>
                <p className="text-sm text-zinc-400">
                  Comum em veículos de frotas e locadoras de veículos que rodaram exaustivamente. Reduzir a milhagem do odômetro artificialmente é crime de estelionato e causa pane e trocas de bronzina ou motores fundidos de surpresa para o comprador.
                </p>
              </div>

              <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 hover:border-primary/40 transition-all">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 text-xl">
                  <i className="fa-solid fa-file-invoice"></i>
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-2 uppercase">Documentos Falsificados</h3>
                <p className="text-sm text-zinc-400">
                  Falsificação grosseira ou qualificada do Certificado de Registro e Licenciamento de Veículo (CRLV), omitindo restrições tributárias federais, alienações financeiras não quitadas e bloqueios judiciais ativos (RENAJUD).
                </p>
              </div>

              <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 hover:border-primary/40 transition-all">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 text-xl">
                  <i className="fa-solid fa-barcode"></i>
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-2 uppercase">Chassi Remarcado (REM)</h3>
                <p className="text-sm text-zinc-400">
                  A remoção por ferrugem ou adulteração requer remarcação do chassi autorizada. Muitos veículos têm remarcações artesanais criminosas de faturamento que caracterizam roubo de chassi (clones ou dublês de carros), gerando apreensão legal imediata.
                </p>
              </div>

              <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 hover:border-primary/40 transition-all">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 text-xl">
                  <i className="fa-solid fa-gears"></i>
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-2 uppercase">Motor Divergente</h3>
                <p className="text-sm text-zinc-400">
                  Veículos que receberam motores importados clandestinamente ou de veículos sinistrados e descartados nas seguradoras sem registro fiscal e legal correspondente junto às bases do DETRAN. Impede transferência do automóvel.
                </p>
              </div>

              <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 hover:border-primary/40 transition-all">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 text-xl">
                  <i className="fa-solid fa-shield-halved"></i>
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-2 uppercase">Veículos Recuperados</h3>
                <p className="text-sm text-zinc-400">
                  Carros que sofreram roubo e furto seguidos, tendo passado por desmontes de peças essenciais e remontados no mercado negro com cabos de má qualidade elétrica e problemas insolúveis cadastrais de chassi.
                </p>
              </div>

              <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 hover:border-primary/40 transition-all">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 text-xl">
                  <i className="fa-solid fa-cloud-showers-water"></i>
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-2 uppercase">Veículos Inundados / Enchente</h3>
                <p className="text-sm text-zinc-400">
                  Veículos inundados por águas fluviais de enchente sofrem desgaste imediato tardio por oxidação do módulo eletrônico, problemas intermitentes no chicote e perda total progressiva da forração acústica metálica interna.
                </p>
              </div>

              <div className="bg-zinc-950 p-6 rounded-xl border border-zinc-800 hover:border-primary/40 transition-all">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 text-xl">
                  <i className="fa-solid fa-ban"></i>
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-2 uppercase">Bloqueios de Gravame</h3>
                <p className="text-sm text-zinc-400">
                  O veículo é anunciado como 'quitado', mas apresenta alienação ou restrição fiduciária financeira oculta em bancos comerciais distantes. O comprador desavisado herda dívidas vultosas de busca e apreensão.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* SEÇÃO O QUE ANALISAMOS EM UMA VISTORIA PRÉ COMPRA */}
        <section className="py-20 bg-zinc-950 px-4 md:px-8 border-b border-zinc-900">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <span className="text-primary font-mono tracking-widest text-xs font-black uppercase">★ RIGOR TÉCNICO INCOMPARÁVEL ★</span>
              <h2 className="text-3xl md:text-4xl font-display font-black text-white uppercase mt-2">
                O que analisamos em uma vistoria pré compra
              </h2>
              <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
                Nosso check-up veicular antes da compra envolve uma perícia laboratorial completa e minuciosa. Nada passa despercebido pelos peritos da Carplus:
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 text-center">
              {[
                { icon: "fa-key", name: "Chassi", desc: "Dígitos, relevos e lacres em chapas e travessas." },
                { icon: "fa-car-shaft", name: "Motor", desc: "Número oficial vs Detran, sem marcas abrasivas." },
                { icon: "fa-gears", name: "Câmbio", desc: "Originalidade das caixas de transmissão e suportes." },
                { icon: "fa-window-maximize", name: "Vidros", desc: "Gravação padrão de segurança de cada vidro." },
                { icon: "fa-ticket", name: "Etiquetas", desc: "Selos térmicos destrutíveis de compartimentos." },
                { icon: "fa-grip-lines-vertical", name: "Longarinas", desc: "Sem soldas paralelas ou deformação frontal." },
                { icon: "fa-hard-drive", name: "Teto", desc: "Sem emendas de corte por capotamento." },
                { icon: "fa-columns", name: "Colunas", desc: "Verificação de ponto de solda a ponto elétrico." },
                { icon: "fa-shield", name: "Estrutura", desc: "Reforços, travessas frontais e assoalho livre." },
                { icon: "fa-arrows-split-up-and-left", name: "Soldas", desc: "Detecção de reposição por funilaria paralela." },
                { icon: "fa-spray-can", name: "Pintura", desc: "Mícrons lidos por espessímetros magnéticos." },
                { icon: "fa-gavel", name: "Leilão", desc: "Pesquisa sistêmica detalhada nas seguradoras." },
                { icon: "fa-fire", name: "Sinistro", desc: "Histórico completo de boletins de batidas leves e severas." },
                { icon: "fa-ban", name: "Restrições", desc: "Dívidas financeiras, gravames e bloqueio RENAJUD." },
                { icon: "fa-file-shield", name: "Documentação", desc: "Validação do CRLV-e e certidões cíveis do dono." }
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
                    O maior prejudicado em um golpe é sempre o comprador. Fazer a vistoria isenta da Carplus tira qualquer margem de dúvida sobre a saúde estrutural e integridade jurídica do seminovo com emissão de laudo na hora.
                  </p>
                </div>
              </div>

              <div className="bg-zinc-900/60 p-6 rounded-xl border border-zinc-800/80 flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center text-primary font-bold">2</span>
                <div>
                  <h3 className="font-display font-extrabold text-white uppercase mb-2">Vendedores e Particulares Honestos</h3>
                  <p className="text-sm text-zinc-400">
                    Proprietários éticos podem utilizar o laudo de perícia da Carplus como um fortíssimo diferencial comercial no ato da venda. Facilita a barganha e acelera a venda provando autenticidade aos compradores céticos.
                  </p>
                </div>
              </div>

              <div className="bg-zinc-900/60 p-6 rounded-xl border border-zinc-800/80 flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center text-primary font-bold">3</span>
                <div>
                  <h3 className="font-display font-extrabold text-white uppercase mb-2">Lojistas, Revendedores e Garagens</h3>
                  <p className="text-sm text-zinc-400">
                    Garante o controle de qualidade do estoque da concessionária, prevenindo dores de cabeça jurídicas posteriores por responder solidariamente no Código de Defesa do Consumidor (CDC) por vender vício oculto de longarina.
                  </p>
                </div>
              </div>

              <div className="bg-zinc-900/60 p-6 rounded-xl border border-zinc-800/80 flex items-start gap-4">
                <span className="w-8 h-8 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center text-primary font-bold">4</span>
                <div>
                  <h3 className="font-display font-extrabold text-white uppercase mb-2">Financeiras, Frotistas e Consórcios</h3>
                  <p className="text-sm text-zinc-400">
                    Protege o ativo e valor do patrimônio dado em garantia fiduciária para a liberação de consórcios e crédito bancário pleno, reduzindo o risco sistêmico de inadimplência e inadmissibilidade de seguro veicular.
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
              Nossa sede física está localizada de forma extremamente acessível e estratégica na <span className="text-white font-bold">Av. Presidente Arthur da Silva Bernardes, 1323, no bairro Portão, em Curitiba-PR</span>. Contudo, atendemos de forma contínua proprietários de todas as quadras da cidade e cidades irmãs da Região Metropolitana com vistorias eficientes, ágeis e homologadas. Se você mora em qualquer um destes distritos, conte conosco:
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
                      href={`/${slugKey}.html`}
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

        {/* SEÇÃO PRINCIPAL FAQ - MÍNIMO 40 PERGUNTAS E RESPOSTAS */}
        <section className="py-24 bg-zinc-950 px-4 md:px-8">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <span className="text-primary font-mono tracking-widest text-xs font-black uppercase">💡 O MAIOR FAQ DO MERCADO AUTOMOTIVO 💡</span>
              <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase mt-2 select-none leading-tight">
                PERGUNTAS FREQUENTES (FAQ COMPLETE)
              </h2>
              <p className="text-zinc-400 mt-4 text-base max-w-2xl mx-auto">
                Reunimos nesta seção absolutamente tudo o que você precisa saber resumido com total clareza técnica e precisão jurídica sobre perícias, laudos cautelares e avaliações veiculares:
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
            <span className="text-primary font-mono text-xs uppercase tracking-widest font-black block mb-4">★ GARANTA O SEU LAUDO HOJE MESMO ★</span>
            <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase tracking-tight leading-tight">
              Faça Sua Vistoria Pré Compra Sem Espera e Sem Surpresas!
            </h2>
            <p className="text-zinc-300 mt-6 max-w-2xl text-justify md:text-center text-sm md:text-base leading-relaxed">
              Fale conosco de forma cômoda e direta pelo WhatsApp e agende seu laudo estruturado na melhor empresa de perícias automotiva de Curitiba. Atendimento ágil e emitido de imediato na hora.
            </p>

            <div className="mt-8 flex flex-col items-center gap-1">
              <a
                href="https://wa.me/5541988740258?text=Olá%20Carplus!%20Gostaria%20de%20agendar%20um%20check%20up%20veicular%20pré%20compra%20hoje."
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
