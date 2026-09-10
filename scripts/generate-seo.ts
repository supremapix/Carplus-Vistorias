import fs from 'fs';
import path from 'path';
import { NEIGHBORHOODS_SEO, CITIES_SEO } from '../src/data';

const PRE_COMPRA_PAGES = [
  {
    slug: 'vistoria-pre-compra-curitiba',
    title: 'Vistoria Pré Compra Curitiba | Carplus Vistorias',
    h1: 'Vistoria Pré Compra Curitiba',
    description: 'Realize sua Vistoria Pré Compra em Curitiba com a Carplus. Avaliação veicular minuciosa com equipe credenciada e laudo técnico original na hora para evitar golpes.',
    keywords: 'vistoria pre compra curitiba, laudo de carro usado, perito automotivo curitiba, comprar carro seguro, carplus vistorias',
    canonicalUrl: 'https://www.carplusvistorias.com.br/vistoria-pre-compra-curitiba',
    anchorText: 'Vistoria Pré Compra Curitiba'
  },
  {
    slug: 'avaliacao-veicular-pre-compra-curitiba',
    title: 'Avaliação Veicular Pré Compra Curitiba | Carplus Vistorias',
    h1: 'Avaliação Veicular Pré Compra Curitiba',
    description: 'Faça uma detalhada Avaliação Veicular Pré Compra em Curitiba. Analisamos pintura, lacres, motor e chassi para atestar a originalidade do automóvel.',
    keywords: 'avaliacao veicular curitiba, vistoria pre compra, pericia automotiva curitiba, analise carro usado, carplus vistorias',
    canonicalUrl: 'https://www.carplusvistorias.com.br/avaliacao-veicular-pre-compra-curitiba',
    anchorText: 'Avaliação Veicular Pré Compra Curitiba'
  },
  {
    slug: 'inspecao-veicular-curitiba',
    title: 'Inspeção Veicular Antes da Compra Curitiba | Carplus Vistorias',
    h1: 'Inspeção Veicular Antes da Compra Curitiba',
    description: 'Inspeção veicular profissional antes de comprar carros usados em Curitiba. Evite comprar carros com teto solar cortado, sinistros e adulterações graves.',
    keywords: 'inspecao veicular curitiba, vistoria cautelar, laudo cautelar completo, vistoria de compra, carplus vistorias',
    canonicalUrl: 'https://www.carplusvistorias.com.br/inspecao-veicular-curitiba',
    anchorText: 'Inspeção Veicular Antes da Compra Curitiba'
  },
  {
    slug: 'verificacao-procedencia-curitiba',
    title: 'Verificação de Procedência Veicular Curitiba | Carplus Vistorias',
    h1: 'Verificação de Procedência Veicular Curitiba',
    description: 'Saiba o histórico real de leilão, furto, gravames e restrições com nossa Verificação de Procedência Veicular em Curitiba. Obtenha segurança total.',
    keywords: 'verificacao de procedencia veicular curitiba, historico do veiculo, leilao sinistro seguradora, carplus vistorias',
    canonicalUrl: 'https://www.carplusvistorias.com.br/verificacao-procedencia-curitiba',
    anchorText: 'Verificação de Procedência Veicular Curitiba'
  },
  {
    slug: 'analise-veiculos-usados-curitiba',
    title: 'Análise Completa de Veículos Usados Curitiba | Carplus Vistorias',
    h1: 'Análise Completa de Veículos Usados Curitiba',
    description: 'Contrate a Análise Completa de Veículos Usados em Curitiba da Carplus. Mapeamos soldas clandestinas, reparos estruturais e restrições com emitido na hora.',
    keywords: 'analise de veiculos usados curitiba, vistoria cautelar portao, carro usado completo, carplus vistorias',
    canonicalUrl: 'https://www.carplusvistorias.com.br/analise-veiculos-usados-curitiba',
    anchorText: 'Análise Completa de Veículos Usados Curitiba'
  },
  {
    slug: 'laudo-pre-compra-curitiba',
    title: 'Laudo Pré Compra Curitiba - Emissão Rápida | Carplus Vistorias',
    h1: 'Laudo Pré Compra Curitiba',
    description: 'Emissão oficial de Laudo Pré Compra em Curitiba. Parecer pericial de estrutura, pintura e histórico legal emitido em até 60 minutos na nossa sede.',
    keywords: 'laudo pre compra curitiba, laudo cautelar curitiba, vistoria de transferencia, vistoria portao, carplus vistorias',
    canonicalUrl: 'https://www.carplusvistorias.com.br/laudo-pre-compra-curitiba',
    anchorText: 'Laudo Pré Compra Curitiba'
  },
  {
    slug: 'check-up-veicular-curitiba',
    title: 'Check-up Veicular Antes da Compra Curitiba | Carplus Vistorias',
    h1: 'Check-up Veicular Antes da Compra Curitiba',
    description: 'O melhor Check-up Veicular em Curitiba antes de fechar negócio. Analisamos teto, longarinas, colunas e numeração de peças com medidor especializado.',
    keywords: 'check-up veicular curitiba, carplus vistoria, perícia automotiva curitiba, laudo na hora',
    canonicalUrl: 'https://www.carplusvistorias.com.br/check-up-veicular-curitiba',
    anchorText: 'Check-up Veicular Antes da Compra Curitiba'
  },
  {
    slug: 'analise-carro-usado-curitiba',
    title: 'Análise de Carro Usado Curitiba - Sem Surpresas | Carplus Vistorias',
    h1: 'Análise de Carro Usado Curitiba',
    description: 'Não compre seu veículo no escuro. Agende nossa Perícia e Análise de Carro Usado em Curitiba para obter transparência estrutural e documental.',
    keywords: 'analise de carro usado curitiba, vistoria cautelar curitiba, carros batidos sinistrados, carplus vistorias',
    canonicalUrl: 'https://www.carplusvistorias.com.br/analise-carro-usado-curitiba',
    anchorText: 'Análise de Carro Usado Curitiba'
  },
  {
    slug: 'consultoria-compra-veiculos-curitiba',
    title: 'Consultoria para Compra de Veículos Curitiba | Carplus Vistorias',
    h1: 'Consultoria para Compra de Veículos Curitiba',
    description: 'Evite golpes financeiros. Nossa Consultoria para Compra de Veículos Usados em Curitiba pericia 80+ pontos críticos e garante boa procedência.',
    keywords: 'consultoria para compra de veiculos curitiba, vistoria automotiva, laudo completo curitiba',
    canonicalUrl: 'https://www.carplusvistorias.com.br/consultoria-compra-veiculos-curitiba',
    anchorText: 'Consultoria para Compra de Veículos Curitiba'
  },
  {
    slug: 'avaliacao-automotiva-compra-curitiba',
    title: 'Avaliação Automotiva para Compra Curitiba | Carplus Vistorias',
    h1: 'Avaliação Automotiva para Compra Curitiba',
    description: 'Compre com segurança em Curitiba. Avaliação Automotiva para Compra de carros seminovos e usados com equipe técnica especializada.',
    keywords: 'avaliacao automotiva para compra curitiba, laudo de vistoria curitiba, pericia cautelar, carplus vistorias',
    canonicalUrl: 'https://www.carplusvistorias.com.br/avaliacao-automotiva-compra-curitiba',
    anchorText: 'Avaliação Automotiva para Compra Curitiba'
  },
  {
    slug: 'vistoria-pre-compra-portao',
    title: 'Vistoria Pré Compra Portão - Curitiba | Carplus Vistorias',
    h1: 'Vistoria Pré Compra Portão',
    description: 'Vistoria pré compra na região do Portão em Curitiba. Sede própria para você realizar a avaliação cautelar estrutural completa do carro com emissão na hora.',
    keywords: 'vistoria pre compra portao, vistoria cautelar portao, perito carro portão curitiba',
    canonicalUrl: 'https://www.carplusvistorias.com.br/vistoria-pre-compra-portao',
    anchorText: 'Vistoria Pré Compra Portão'
  },
  {
    slug: 'vistoria-pre-compra-agua-verde',
    title: 'Vistoria Pré Compra Água Verde - Curitiba | Carplus Vistorias',
    h1: 'Vistoria Pré Compra Água Verde',
    description: 'Está no Água Verde? Faça a Vistoria Pré Compra do seu seminovo com a Carplus. Avaliação minuciosa perto de você com certificação e laudo técnico.',
    keywords: 'vistoria pre compra agua verde, pericia veicular agua verde curitiba',
    canonicalUrl: 'https://www.carplusvistorias.com.br/vistoria-pre-compra-agua-verde',
    anchorText: 'Vistoria Pré Compra Água Verde'
  },
  {
    slug: 'vistoria-pre-compra-capao-raso',
    title: 'Vistoria Pré Compra Capão Raso - Curitiba | Carplus Vistorias',
    h1: 'Vistoria Pré Compra Capão Raso',
    description: 'Garanta a procedência de veículos comprados no Capão Raso com nossa Vistoria Pré Compra completa. Evite fraudes mecânicas e sinistros camuflados.',
    keywords: 'vistoria pre compra capao raso, laudo cautelar capao raso, vistoria curitiba, carplus vistorias',
    canonicalUrl: 'https://www.carplusvistorias.com.br/vistoria-pre-compra-capao-raso',
    anchorText: 'Vistoria Pré Compra Capão Raso'
  },
  {
    slug: 'vistoria-pre-compra-bigorrilho',
    title: 'Vistoria Pré Compra Bigorrilho - Curitiba | Carplus Vistorias',
    h1: 'Vistoria Pré Compra Bigorrilho',
    description: 'Análise rigorosa e laudo pericial para compradores de carros no Bigorrilho / Champagnat. Agende sua Vistoria Pré Compra na Carplus pelo WhatsApp.',
    keywords: 'vistoria pre compra bigorrilho, perito automotivo champagnat, laudo cautelar champagnat',
    canonicalUrl: 'https://www.carplusvistorias.com.br/vistoria-pre-compra-bigorrilho',
    anchorText: 'Vistoria Pré Compra Bigorrilho'
  },
  {
    slug: 'vistoria-pre-compra-batel',
    title: 'Vistoria Pré Compra Batel - Curitiba | Carplus Vistorias',
    h1: 'Vistoria Pré Compra Batel',
    description: 'Avaliação premium de carros de luxo e importados na região do Batel. Vistoria Pré Compra e laudo de transferência com máxima precisão técnica.',
    keywords: 'vistoria pre compra batel, perito veiculos importados batel, laudo cautelar batel',
    canonicalUrl: 'https://www.carplusvistorias.com.br/vistoria-pre-compra-batel',
    anchorText: 'Vistoria Pré Compra Batel'
  },
  {
    slug: 'vistoria-pre-compra-novo-mundo',
    title: 'Vistoria Pré Compra Novo Mundo - Curitiba | Carplus Vistorias',
    h1: 'Vistoria Pré Compra Novo Mundo',
    description: 'Agende um laudo de vistoria no Novo Mundo de forma dinâmica. Verificamos se o veículo possui restrições ou foi danificado de forma estrutural.',
    keywords: 'vistoria pre compra novo mundo, vistoria carro novo mundo, pericia veicular',
    canonicalUrl: 'https://www.carplusvistorias.com.br/vistoria-pre-compra-novo-mundo',
    anchorText: 'Vistoria Pré Compra Novo Mundo'
  },
  {
    slug: 'avaliacao-veicular-curitiba',
    title: 'Avaliação Veicular Curitiba - Profissional | Carplus Vistorias',
    h1: 'Avaliação Veicular Curitiba',
    description: 'Laudos periciais com fotos e parecer técnico rigoroso na hora. Avaliação Veicular completa de chassis, vidros, etiquetas e restrições.',
    keywords: 'avaliacao veicular curitiba, vistoria cautelar curitiba, laudo cautelar',
    canonicalUrl: 'https://www.carplusvistorias.com.br/avaliacao-veicular-curitiba',
    anchorText: 'Avaliação Veicular Curitiba'
  },
  {
    slug: 'consultoria-compra-carros-curitiba',
    title: 'Consultoria de Compra de Carros Curitiba | Carplus Vistorias',
    h1: 'Consultoria de Compra de Carros Curitiba',
    description: 'Seja assessorado por peritos certificados. Descubra repinturas severas, soldas de fábrica cortadas e leilões na nossa consultoria automotiva.',
    keywords: 'consultoria compra de carros curitiba, analise cautelar curitiba, vistoria carro usado, carplus vistorias',
    canonicalUrl: 'https://www.carplusvistorias.com.br/consultoria-compra-carros-curitiba',
    anchorText: 'Consultoria Compra de Carros'
  },
  {
    slug: 'verificacao-procedencia-veicular-curitiba',
    title: 'Verificação de Procedência Veicular Curitiba | Carplus Vistorias',
    h1: 'Verificação de Procedência Veicular Curitiba',
    description: 'Consulte mais de 15 base de dados detalhadas sobre gravames ativos, passagens por seguradora, recalls e reparos de funilaria em Curitiba.',
    keywords: 'verificacao de procedencia veicular curitiba, carplus vistorias, laudo original de compra',
    canonicalUrl: 'https://www.carplusvistorias.com.br/verificacao-procedencia-veicular-curitiba',
    anchorText: 'Verificação de Procedência Veicular'
  }
];

const FAQS = [
  {
    q: "1. Vale a pena fazer vistoria cautelar pré-compra para carros usados em Curitiba?",
    a: "Com certeza absoluta. A vistoria cautelar oferece total proteção ao comprador eliminando assimetrias de informação. Ela revela na hora reparos estruturais invisíveis, repinturas abusivas e passagens secretas por leilões de bancos ou seguradoras nacionais."
  },
  {
    q: "2. Quanto custa em média a realização de uma vistoria cautelar ou pré-compra?",
    a: "O valor é absurdamente desprezível se comparado aos benefícios financeiros. O custo varia de acordo com a profundidade das consultas e tamanho do veículo, funcionando como uma apólice de garantia que resguarda dezenas de milhares de reais investidos na negociação."
  },
  {
    q: "3. A vistoria cautelar em Curitiba realmente detecta passagem anterior por leilão?",
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
    a: "Nosso medidor de espessura digital emite pulses magnéticos ou de correntes parasitas para ler em mícrons o filme de tinta. Carros originais têm entre 80 e 130 mícrons. Leituras acima de 220 mícrons expõem retoques severos com preenchimento de massa plástica de repintura automotiva."
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
    a: "Um carro com gravação REM (Remarcado) sofre depreciação comercial imediata de 20% a 30% em relação à tabela FIPE. Bancos podem recusar financiamento pleno, e lógicas de seguradora recusam cobertura de seguro integral ou cobram prêmios elevados."
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
    a: "Nossos laudos periciais e cautelares são emitidos nos termos oficiais técnicos de alta fidelidade. Ao apresentar ao gerente ou analista do banco em Curitiba, ele terá a certeza absoluta do bom negócio e do bem que serve de garantia fiduciária para a liberação de crédito rápido."
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
    a: "Agendar é extremamente simples. Basta nos chamar no WhatsApp (41) 98874-0258 ou ligar no mesmo contato de forma direta. Nossa equipe esclarecerá todos os termos necessários e fará sua reserva para atendimento preferencial rápido na sede no Portão."
  }
];

function run() {
  const currentDir = process.cwd();
  
  // -------------------------------------------------------------
  // 1. GENERATE THE 120+ TRADITIONAL NEIGHBORHOODS & CITIES PAGES
  // -------------------------------------------------------------
  const templatePath = path.join(currentDir, 'public', '_template-bairro.html');
  const sitemapPath = path.join(currentDir, 'public', 'mapa-do-site.html');

  if (!fs.existsSync(templatePath)) {
    console.error('Template file not found at:', templatePath);
    return;
  }
  if (!fs.existsSync(sitemapPath)) {
    console.error('Sitemap file not found at:', sitemapPath);
    return;
  }

  const template = fs.readFileSync(templatePath, 'utf-8');
  let sitemapHtml = fs.readFileSync(sitemapPath, 'utf-8');

  // Parse sitemap links
  const linkRegex = /href="\/vistoria-cautelar-([^".]+?)(?:\.html)?"[^>]*>Vistoria ([^<]+)<\/a>/g;
  let match;
  const items: Array<{ slug: string; bairroGenitive: string; name: string }> = [];

  while ((match = linkRegex.exec(sitemapHtml)) !== null) {
    const slug = match[1];
    const genitive = match[2].trim();
    
    let cleanName = genitive;
    if (genitive.startsWith('no ')) {
      cleanName = genitive.substring(3).trim();
    } else if (genitive.startsWith('na ')) {
      cleanName = genitive.substring(3).trim();
    } else if (genitive.startsWith('em ')) {
      cleanName = genitive.substring(3).trim();
    } else if (genitive.startsWith('nas ')) {
      cleanName = genitive.substring(4).trim();
    }

    items.push({
      slug,
      bairroGenitive: genitive,
      name: cleanName
    });
  }

  console.log(`Parsed ${items.length} locations to generate from sitemap.`);

  const customDescriptions = new Map<string, string>();
  for (const item of NEIGHBORHOODS_SEO) {
    customDescriptions.set(item.name.toLowerCase(), item.description);
  }
  for (const item of CITIES_SEO) {
    customDescriptions.set(item.name.toLowerCase(), item.description);
  }

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const { slug, bairroGenitive, name } = item;

    const neighbors: string[] = [];
    for (let j = 1; j <= 6; j++) {
      const neighborItem = items[(i + j) % items.length];
      const nhHtml = `<a href="/vistoria-cautelar-${neighborItem.slug}" class="bg-zinc-900 border border-zinc-800 hover:border-primary/50 text-zinc-300 hover:text-white p-3 rounded-lg transition-all truncate block font-bold">${neighborItem.name}</a>`;
      neighbors.push(nhHtml);
    }
    const neighborsHtml = neighbors.join('\n        ');

    let desc = customDescriptions.get(name.toLowerCase());
    if (!desc) {
      if (slug.includes('sao-jose') || slug.includes('pinhais') || slug.includes('colombo') || slug.includes('araucaria') || slug.includes('campo-largo') || slug.includes('leste') || slug.includes('grande')) {
        desc = `A Carplus Vistorias atende compradores e moradores de ${name} com vistoria cautelar completa e perícia automotiva premium. Evite fraudes financeiras, sinistros e leilões na compra de veículos usados. Laudo técnico profissional emitido imediatamente de forma digital e impressa com seguro de responsabilidade civil incluso.`;
      } else {
        desc = `Moradores de ${name} contam com a facilidade de acesso à Carplus Vistorias no Portão para realizar perícia veicular de 80+ itens e garantir compra segura com procedência. Nosso time de peritos credenciados realiza a análise estrutural completa do chassi, motor e histórico de antecedentes na hora.`;
      }
    }

    let pageContent = template;
    pageContent = pageContent.replace(/\[slug\]/g, slug);
    pageContent = pageContent.replace(/\[bairro-genitive\]/g, bairroGenitive);
    pageContent = pageContent.replace(/\[Bairro\]/g, name);
    pageContent = pageContent.replace(/\[bairros-vizinhos\]/g, neighborsHtml);

    pageContent = pageContent.replace('[referencia-local]', `para moradores de ${name}`);
    pageContent = pageContent.replace('[referencia-local]', `para quem reside ${bairroGenitive}`);
    pageContent = pageContent.replace('[referencia-local]', `facilmente saindo de ${name}`);

    const linkItem1 = items[(i + 15) % items.length];
    const linkItem2 = items[(i + 45) % items.length];

    const descWithLinks = desc
      .replace('Carplus Vistorias', '<a href="/" class="text-primary hover:underline hover:text-primary-light font-bold">Carplus Vistorias</a>')
      .replace('vistoria cautelar', '<a href="/vistoria-cautelar-curitiba" class="text-primary hover:underline font-bold">vistoria cautelar</a>')
      .replace('perícia veicular', '<a href="/vistoria-cautelar-curitiba" class="text-primary hover:underline font-bold">perícia veicular</a>')
      .replace('perícia automotiva', '<a href="/vistoria-cautelar-curitiba" class="text-primary hover:underline font-bold">perícia automotiva</a>');

    const targetParagraph = `Se você está comprando ou vendendo um veículo ${bairroGenitive} ou arredores, a segurança deve vir sempre em primeiro lugar. O mercado automotivo em Curitiba é agitado, e é comum encontrar automóveis que já passaram por leilões, possuem sinistros camuflados, chassis adulterados e reformas estruturais severas que comprometem a dirigibilidade e o valor de revenda.`;
    const customizedParagraph = `${descWithLinks}\n          O mercado automotivo na região de Curitiba é extremamente dinâmico e agitado. Por isso, ao negociar veículos ${bairroGenitive} ou em outros pontos da cidade, ter o apoio de peritos certificados é crucial. Além de ${bairroGenitive}, também emitimos laudos rápidos para donos de veículos procedentes de outras regiões próximas, tais como <a href="/vistoria-cautelar-${linkItem1.slug}" class="text-primary hover:underline hover:text-primary-light transition-colors font-bold">${linkItem1.name}</a> e <a href="/vistoria-cautelar-${linkItem2.slug}" class="text-primary hover:underline hover:text-primary-light transition-colors font-bold">${linkItem2.name}</a>, garantindo cobertura total. Para consultar o panorama completo da cidade, confira nosso hub de <a href="/vistoria-cautelar-curitiba" class="text-primary hover:underline hover:text-primary-light transition-colors font-bold">vistoria cautelar em Curitiba</a>, veja nosso <a href="/mapa-do-site" class="text-primary hover:underline hover:text-primary-light transition-colors font-bold">mapa do site</a> ou visite nossa página de <a href="/contato" class="text-primary hover:underline hover:text-primary-light transition-colors font-bold">agendamento e contato</a>.`;
    pageContent = pageContent.replace(targetParagraph, customizedParagraph);

    pageContent = pageContent.replace(
      'LAUDO EMITIDO NA HORA COM TOTAL GARANTIA',
      'LAUDO EMITIDO NA HORA - FALE COMS NOSSO TIME DE PERITOS'
    );

    const isPortao = slug === 'portao';

    let heroLocalAlert = '';
    let contentLocalAlert = '';
    let step2CheckinText = '';
    let faq3LocalAnswer = '';
    let ctaLocalNotice = '';

    if (!isPortao) {
      heroLocalAlert = `
      <div class="max-w-3xl mx-auto my-6 p-4 sm:p-5 rounded-2xl bg-amber-500/15 border-2 border-amber-500/60 shadow-xl text-left backdrop-blur-sm">
        <div class="flex items-start gap-3.5">
          <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-500 text-zinc-950 flex items-center justify-center font-bold text-xl shrink-0 shadow-md mt-0.5">
            <i class="fa-solid fa-location-dot"></i>
          </div>
          <div class="space-y-1">
            <div class="flex flex-wrap items-center gap-2">
              <span class="font-display font-black text-sm sm:text-base uppercase tracking-wider text-white">
                ATENDIMENTO PRESENCIAL NA UNIDADE PORTÃO
              </span>
              <span class="text-[10px] bg-amber-500 text-zinc-950 font-black px-2 py-0.5 rounded-full font-mono uppercase">
                Aviso Importante
              </span>
            </div>
            <p class="text-xs sm:text-sm text-zinc-200 leading-relaxed font-semibold">
              Moradores, compradores e lojistas ${bairroGenitive}: todo o atendimento pericial, vistoria física e emissão do laudo são realizados exclusivamente em nossa sede própria na <strong>Unidade Portão</strong> (Av. Presidente Arthur da Silva Bernardes, 1323 · Curitiba/PR). Fácil acesso com estacionamento próprio e laudo emitido na hora!
            </p>
          </div>
        </div>
      </div>`;

      contentLocalAlert = `
        <div class="p-4 sm:p-5 rounded-xl bg-zinc-900 border-2 border-amber-500/60 shadow-lg text-left my-4">
          <div class="flex items-center gap-2 text-amber-400 font-display font-black text-sm uppercase tracking-wide mb-1.5">
            <i class="fa-solid fa-circle-info text-base"></i>
            <span>Local do Atendimento: Unidade Portão</span>
          </div>
          <p class="text-xs sm:text-sm text-zinc-300 leading-relaxed font-medium">
            Ressaltamos que a realização da vistoria cautelar e inspeção física dos veículos procedentes ou negociados ${bairroGenitive} é realizada em nossa sede na <strong>Unidade Portão</strong> (Av. Presidente Arthur da Silva Bernardes, 1323 · Portão, Curitiba/PR). Contamos com rampa de perícia, elevador automotivo e equipamentos ópticos de última geração.
          </p>
        </div>`;

      step2CheckinText = `Dirija-se à nossa sede na <strong>Unidade Portão</strong> (Av. Pres. Arthur da Silva Bernardes, 1323) no horário agendado com fácil e rápido deslocamento a partir de ${name}.`;

      faq3LocalAnswer = `Sim! A Carplus Vistorias atende com grande agilidade todos os moradores, lojistas e compradores ${bairroGenitive}. <strong>Ressaltamos que todo o atendimento presencial é realizado em nossa sede própria na Unidade Portão</strong> (Av. Presidente Arthur da Silva Bernardes, 1323 – Portão, Curitiba/PR), garantindo equipamentos periciais de última geração, comodidade e laudo oficial emitido na hora.`;

      ctaLocalNotice = `
      <div class="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-amber-500/40 text-xs text-zinc-300 font-mono font-bold">
        <i class="fa-solid fa-location-dot text-amber-500"></i>
        <span>Atendimento na Unidade Portão · Av. Pres. Arthur da Silva Bernardes, 1323</span>
      </div>`;
    } else {
      heroLocalAlert = `
      <div class="max-w-3xl mx-auto my-6 p-4 sm:p-5 rounded-2xl bg-primary/15 border-2 border-primary/60 shadow-xl text-left backdrop-blur-sm">
        <div class="flex items-start gap-3.5">
          <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary text-zinc-950 flex items-center justify-center font-bold text-xl shrink-0 shadow-md mt-0.5">
            <i class="fa-solid fa-building"></i>
          </div>
          <div class="space-y-1">
            <div class="flex flex-wrap items-center gap-2">
              <span class="font-display font-black text-sm sm:text-base uppercase tracking-wider text-white">
                SEDE PRÓPRIA CARPLUS VISTORIAS — PORTÃO
              </span>
              <span class="text-[10px] bg-primary text-zinc-950 font-black px-2 py-0.5 rounded-full font-mono uppercase">
                Matriz Oficial
              </span>
            </div>
            <p class="text-xs sm:text-sm text-zinc-200 leading-relaxed font-semibold">
              Você está na matriz central da Carplus Vistorias no bairro Portão (Av. Presidente Arthur da Silva Bernardes, 1323). Equipamentos de ponta com medidores digitais e peritos credenciados prontos para emitir seu laudo na hora.
            </p>
          </div>
        </div>
      </div>`;

      contentLocalAlert = `
        <div class="p-4 sm:p-5 rounded-xl bg-zinc-900 border-2 border-primary/60 shadow-lg text-left my-4">
          <div class="flex items-center gap-2 text-primary font-display font-black text-sm uppercase tracking-wide mb-1.5">
            <i class="fa-solid fa-building text-base"></i>
            <span>Sede Oficial no Bairro Portão</span>
          </div>
          <p class="text-xs sm:text-sm text-zinc-300 leading-relaxed font-medium">
            Nossa sede própria está localizada na Av. Presidente Arthur da Silva Bernardes, 1323 no Portão. Estrutura ampla, moderna e de fácil acesso para garantir a você um atendimento rápido e laudo certificado entregue na hora.
          </p>
        </div>`;

      step2CheckinText = `Passe na nossa sede no Portão (Av. Pres. Arthur da Silva Bernardes, 1323) no horário reservado para ser atendido com rapidez e sem esperas.`;

      faq3LocalAnswer = `Sim! A sede própria da Carplus Vistorias fica exatamente no bairro Portão (Av. Presidente Arthur da Silva Bernardes, 1323 – Curitiba/PR), oferecendo estrutura pericial completa e laudo emitido na hora para todos os moradores da região.`;

      ctaLocalNotice = `
      <div class="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-primary/40 text-xs text-zinc-300 font-mono font-bold">
        <i class="fa-solid fa-building text-primary"></i>
        <span>Sede Própria Carplus Vistorias · Av. Pres. Arthur da Silva Bernardes, 1323 · Portão</span>
      </div>`;
    }

    pageContent = pageContent.replace('[hero-local-alert]', heroLocalAlert);
    pageContent = pageContent.replace('[content-local-alert]', contentLocalAlert);
    pageContent = pageContent.replace('[step2-checkin-text]', step2CheckinText);
    pageContent = pageContent.replace('[faq3-local-answer]', faq3LocalAnswer);
    pageContent = pageContent.replace('[cta-local-notice]', ctaLocalNotice);

    const dirPath = path.join(currentDir, 'public', `vistoria-cautelar-${slug}`);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    fs.writeFileSync(path.join(dirPath, 'index.html'), pageContent, 'utf-8');
    fs.writeFileSync(path.join(currentDir, 'public', `vistoria-cautelar-${slug}.html`), pageContent, 'utf-8');
  }

  console.log(`Successfully compiled and generated all ${items.length} premium geo-located page systems!`);

  // -------------------------------------------------------------
  // 2. GENERATE THE 19 DEEP SEMANTIC PRE-COMPRA VEHICLE INSPECTION PAGES
  // -------------------------------------------------------------
  const preCompraTemplatePath = path.join(currentDir, 'public', '_template-pre-compra.html');
  if (!fs.existsSync(preCompraTemplatePath)) {
    console.error('Pre-compra template file not found at:', preCompraTemplatePath);
    return;
  }

  const preCompraTemplate = fs.readFileSync(preCompraTemplatePath, 'utf-8');

  // Build static semantic FAQ items accordion markup using HTML5 <details>/<summary>
  let faqAccordionHtml = '';
  FAQS.forEach((faq) => {
    faqAccordionHtml += `
    <details class="faq-item group bg-zinc-900/60 rounded-xl border border-zinc-800 overflow-hidden mb-4 transition-all">
      <summary class="w-full text-left py-4 px-6 font-display font-semibold text-white hover:text-primary transition-colors flex justify-between items-center bg-zinc-900/45 cursor-pointer list-none select-none">
        <span class="text-xs sm:text-sm md:text-base">${faq.q}</span>
        <span class="faq-icon-chevron w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-400 text-xs flex items-center justify-center transition-transform duration-300 flex-shrink-0 group-open:rotate-180 group-open:bg-primary/10 group-open:border-primary/40 group-open:text-primary">
          <i class="fa-solid fa-chevron-down"></i>
        </span>
      </summary>
      <div class="faq-body-content p-6 text-zinc-400 bg-zinc-950/80 leading-relaxed text-justify border-t border-zinc-900 text-xs sm:text-sm md:text-base">
        ${faq.a}
      </div>
    </details>`;
  });

  console.log(`Generating ${PRE_COMPRA_PAGES.length} deep semantic pre-compra files...`);

  PRE_COMPRA_PAGES.forEach((page) => {
    // Generate linkages linking all other 18 pages contextually to avoid isolation
    const linkageNodes: string[] = [];
    PRE_COMPRA_PAGES.forEach((otherPage) => {
      if (otherPage.slug !== page.slug) {
        linkageNodes.push(`
          <a href="/${otherPage.slug}" class="bg-zinc-900 border border-zinc-800/80 hover:border-primary/50 text-zinc-400 hover:text-white py-1.5 px-3.5 rounded-full transition-all text-xs truncate max-w-[240px] font-semibold hover:shadow-lg hover:scale-105 transform">
            ${otherPage.anchorText}
          </a>
        `);
      }
    });
    const linkageHtml = linkageNodes.join('\n');

    // Generate dynamic JSON-LD according to strict Google guidelines (LocalBusiness + Service)
    const jsonLd = [
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `${page.canonicalUrl}#localbusiness`,
        "name": "Carplus Vistorias - Portão Curitiba",
        "image": "https://img.carplusvistorias.com.br/vistorias-pr.png",
        "url": "https://www.carplusvistorias.com.br/",
        "telephone": "+55-41-98874-0258",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Av. Pres. Arthur da Silva Bernardes, 1323",
          "addressLocality": "Curitiba",
          "addressRegion": "PR",
          "postalCode": "80320-300",
          "addressCountry": "BR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -25.4673,
          "longitude": -49.2974
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "08:00",
          "closes": "18:00"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": page.h1,
        "provider": {
          "@type": "LocalBusiness",
          "name": "Carplus Vistorias"
        },
        "areaServed": [
          { "@type": "City", "name": "Curitiba" },
          { "@type": "AdministrativeArea", "name": "Paraná" }
        ],
        "description": page.description
      }
    ];

    let content = preCompraTemplate;
    content = content.replace(/\[title\]/g, page.title);
    content = content.replace(/\[description\]/g, page.description);
    content = content.replace(/\[keywords\]/g, page.keywords);
    content = content.replace(/\[canonicalUrl\]/g, page.canonicalUrl);
    content = content.replace(/\[h1\]/g, page.h1);
    content = content.replace('[schema-json-ld]', JSON.stringify(jsonLd, null, 2));
    content = content.replace('[faq-items-placeholders]', faqAccordionHtml);
    content = content.replace('[linkage-placeholders]', linkageHtml);

    const isNeighborhoodPreCompra = page.slug.includes('agua-verde') || page.slug.includes('capao-raso') || page.slug.includes('bigorrilho') || page.slug.includes('batel') || page.slug.includes('novo-mundo');
    const isPortaoPreCompra = page.slug === 'vistoria-pre-compra-portao';

    let preCompraHeroAlert = '';
    if (isNeighborhoodPreCompra) {
      preCompraHeroAlert = `
        <div class="max-w-3xl mx-auto my-6 p-4 sm:p-5 rounded-2xl bg-amber-500/15 border-2 border-amber-500/60 shadow-xl text-left backdrop-blur-sm">
          <div class="flex items-start gap-3.5">
            <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-500 text-zinc-950 flex items-center justify-center font-bold text-xl shrink-0 shadow-md mt-0.5">
              <i class="fa-solid fa-location-dot"></i>
            </div>
            <div class="space-y-1">
              <div class="flex flex-wrap items-center gap-2">
                <span class="font-display font-black text-sm sm:text-base uppercase tracking-wider text-white">
                  ATENDIMENTO PRESENCIAL NA UNIDADE PORTÃO
                </span>
                <span class="text-[10px] bg-amber-500 text-zinc-950 font-black px-2 py-0.5 rounded-full font-mono uppercase">
                  Aviso Importante
                </span>
              </div>
              <p class="text-xs sm:text-sm text-zinc-200 leading-relaxed font-semibold">
                Clientes e compradores de veículos desta região: todas as avaliações veiculares e perícias pré-compra são realizadas com infraestrutura completa em nossa sede na <strong>Unidade Portão</strong> (Av. Presidente Arthur da Silva Bernardes, 1323 · Curitiba/PR). Fácil acesso com laudo entregue na hora!
              </p>
            </div>
          </div>
        </div>`;
    } else if (isPortaoPreCompra) {
      preCompraHeroAlert = `
        <div class="max-w-3xl mx-auto my-6 p-4 sm:p-5 rounded-2xl bg-primary/15 border-2 border-primary/60 shadow-xl text-left backdrop-blur-sm">
          <div class="flex items-start gap-3.5">
            <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary text-zinc-950 flex items-center justify-center font-bold text-xl shrink-0 shadow-md mt-0.5">
              <i class="fa-solid fa-building"></i>
            </div>
            <div class="space-y-1">
              <div class="flex flex-wrap items-center gap-2">
                <span class="font-display font-black text-sm sm:text-base uppercase tracking-wider text-white">
                  SEDE PRÓPRIA CARPLUS VISTORIAS — PORTÃO
                </span>
                <span class="text-[10px] bg-primary text-zinc-950 font-black px-2 py-0.5 rounded-full font-mono uppercase">
                  Matriz
                </span>
              </div>
              <p class="text-xs sm:text-sm text-zinc-200 leading-relaxed font-semibold">
                Atendimento presencial realizado em nossa sede central no bairro Portão (Av. Presidente Arthur da Silva Bernardes, 1323 · Curitiba/PR). Avaliação pré-compra minuciosa com peritos certificados!
              </p>
            </div>
          </div>
        </div>`;
    } else {
      preCompraHeroAlert = `
        <div class="max-w-3xl mx-auto my-6 p-4 sm:p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 shadow-xl text-left backdrop-blur-sm">
          <div class="flex items-start gap-3.5">
            <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/20 text-primary border border-primary/40 flex items-center justify-center font-bold text-xl shrink-0 shadow-md mt-0.5">
              <i class="fa-solid fa-location-dot"></i>
            </div>
            <div class="space-y-1">
              <span class="font-display font-black text-sm sm:text-base uppercase tracking-wider text-white block">
                SEDE PRÓPRIA CARPLUS — UNIDADE PORTÃO
              </span>
              <p class="text-xs sm:text-sm text-zinc-300 leading-relaxed font-semibold">
                Atendimento presencial e laudos periciais realizados em nossa sede na <strong>Av. Presidente Arthur da Silva Bernardes, 1323 – Portão, Curitiba/PR</strong>. Estrutura pericial completa para atendimento rápido de toda a capital.
              </p>
            </div>
          </div>
        </div>`;
    }

    content = content.replace('[hero-local-alert]', preCompraHeroAlert);

    // Save outputs:
    // Slug folder
    const pageDir = path.join(currentDir, 'public', page.slug);
    if (!fs.existsSync(pageDir)) {
      fs.mkdirSync(pageDir, { recursive: true });
    }
    fs.writeFileSync(path.join(pageDir, 'index.html'), content, 'utf-8');

    // Standalone fallback page
    fs.writeFileSync(path.join(currentDir, 'public', `${page.slug}.html`), content, 'utf-8');
  });

  console.log(`Successfully compiled and outputted all ${PRE_COMPRA_PAGES.length} deep semantic pre-compra files!`);
}

run();
