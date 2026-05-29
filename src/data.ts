/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  ServiceCardType, 
  DetailedServiceType, 
  AdvantageCardType, 
  FAQItemType, 
  NeighborhoodType, 
  CityType 
} from './types';

export const SERVICES_HOME: ServiceCardType[] = [
  {
    id: 'estrutural',
    icon: 'fa-car-crash',
    title: 'Análise Estrutural',
    description: 'Verificação de longarinas, colunas e estrutura do chassi para detectar colisões anteriores.'
  },
  {
    id: 'antecedentes',
    icon: 'fa-file-shield',
    title: 'Pesquisa de Antecedentes',
    description: 'Histórico de roubo, leilão, processos judiciais e gravame financeiro do veículo.'
  },
  {
    id: 'lataria',
    icon: 'fa-spray-can',
    title: 'Verificação de Lataria',
    description: 'Análise de pintura, amassados, reparos e retoques para identificar colisões ocultas.'
  },
  {
    id: 'numeracoes',
    icon: 'fa-barcode',
    title: 'Conferência de Numerações',
    description: 'Checagem do número do chassi, motor e demais identificadores do veículo.'
  }
];

export const ADVANTAGES_HOME: AdvantageCardType[] = [
  {
    id: 'seguras',
    icon: 'fa-handshake',
    title: 'Negociações Seguras',
    subtitle: 'Tome decisões informadas e evite problemas futuros com nossos laudos detalhados.'
  },
  {
    id: 'rapidez',
    icon: 'fa-bolt',
    title: 'Rapidez e Eficiência',
    subtitle: 'Entregue seu laudo na hora, sem demoras frustrantes. Processo ágil do início ao fim.'
  },
  {
    id: 'excelencia',
    icon: 'fa-star',
    title: 'Comprometimento e Excelência',
    subtitle: 'Nossa tecnologia de ponta garante relatórios precisos, evitando surpresas desagradáveis.'
  },
  {
    id: 'segurança',
    icon: 'fa-shield-halved',
    title: 'Sua segurança é a nossa prioridade!',
    subtitle: 'Na Carplus Vistorias, sua tranquilidade é a nossa prioridade. Conte em nós para uma jornada segura.'
  }
];

export const DETAILED_SERVICES: DetailedServiceType[] = [
  {
    id: 'vistoria-completa',
    title: 'Vistoria Cautelar Completa',
    description: 'O laudo cautelar é a perícia mais completa disponível para quem está comprando ou vendendo um veículo usado. Nossa vistoria inclui análise estrutural do chassi, verificação de numerações, pesquisa de gravame, histórico de leilão e muito mais. Ideal para negociações seguras.',
    includes: ['Análise de 80+ itens', 'Laudo na hora', 'Seguro de responsabilidade civil'],
    ctaText: 'Agendar Vistoria Cautelar'
  },
  {
    id: 'pericia-chassi',
    title: 'Perícia de Chassi e Numerações',
    description: 'Verificação detalhada do número do chassi, número do motor, etiquetas de identificação e todos os itens de segurança rastreáveis do veículo. Detectamos adulterações, clonings e irregularidades documentais com precisão técnica.',
    includes: ['Verificação de 12 numerações', 'Consulta DETRAN', 'Relatório técnico'],
    ctaText: 'Agendar Perícia de Chassi'
  },
  {
    id: 'analise-estrutural',
    title: 'Análise Estrutural de Lataria',
    description: 'Utilizamos equipamentos de última geração para detectar reparos ocultos, amassados, solda irregular, massa em excesso e colisões anteriores em toda a estrutura metálica do veículo. Nada passa despercebido pelos nossos peritos.',
    includes: ['Medidor de espessura', 'Análise de pintura', 'Fotos documentadas'],
    ctaText: 'Agendar Análise Estrutural'
  },
  {
    id: 'pesquisa-antecedentes',
    title: 'Pesquisa de Antecedentes Veiculares',
    description: 'Investigamos o histórico completo do veículo: roubo, furto, restrições judiciais, financiamento pendente (gravame), histórico de leilão, recall pendente e situação junto ao DETRAN-PR. Você sabe tudo antes de assinar.',
    includes: ['15+ bases de dados', 'DETRAN, SENATRAN, Receita Federal', 'Relatório PDF'],
    ctaText: 'Consultar Antecedentes'
  },
  {
    id: 'vistoria-transferencia',
    title: 'Vistoria para Transferência',
    description: 'Laudo técnico obrigatório para transferência de propriedade em Curitiba e região metropolitana. Nosso documento é aceito por todas as seguradoras, financeiras, cartórios e pelo DETRAN-PR. Emissão imediata.',
    includes: ['Aceito em todos os cartórios', 'Válido por 30 dias', 'Emissão na hora'],
    ctaText: 'Agendar Vistoria de Transferência'
  },
  {
    id: 'inspecao-financiamento',
    title: 'Inspeção para Financiamento e Seguro',
    description: 'Laudo de vistoria aceito por todos os bancos, financeiras e seguradoras que operam em Curitiba. Bradesco, Itaú, Santander, Porto Seguro, Allianz e demais operadoras. Processo rápido e sem burocracia.',
    includes: ['Aceito em todas as financeiras', 'Formato digital e impresso', 'Validade nacional'],
    ctaText: 'Agendar Inspeção de Financiamento'
  }
];

export const NEIGHBORHOODS_SEO: NeighborhoodType[] = [
  {
    name: 'Portão',
    isSede: true,
    description: 'A Carplus Vistorias está sediada no Portão, bairro central e estratégico de Curitiba. Nosso endereço na Av. Presidente Arthur da Silva Bernardes, 1323 oferece fácil acesso a moradores para realizar vistorias completas com laudo emitido na hora.'
  },
  {
    name: 'Abranches',
    description: 'Realize a vistoria cautelar de veículos no Abranches com quem é especialista no mercado de Curitiba. Garanta um laudo técnico robusto antes de comprar ou vender.'
  },
  {
    name: 'Água Verde',
    description: 'Moradores e revendas do Água Verde contam com a estrutura de ponta da Carplus Vistorias, ágil e a poucos minutos do bairro, com laudo entregue na hora.'
  },
  {
    name: 'Ahú',
    description: 'Segurança na compra de veículos seminovos no Ahú. Perícia cautelar completa examinando chassi, numeração de motor, histórico de leilão e integridade física.'
  },
  {
    name: 'Alto Boqueirão',
    description: 'Laudo cautelar confiável para quem reside ou negocia automóveis no Alto Boqueirão. Evite prejuízos verificando se o carro tem reparos ocultos ou restrições.'
  },
  {
    name: 'Alto da Glória',
    description: 'Consultoria e vistoria cautelar de alta precisão para a região do Alto da Glória. Laudos estruturados com fotos detalhadas para total clareza na transação.'
  },
  {
    name: 'Alto da Rua XV',
    description: 'Negociações de veículos transparentes e seguras no Alto da Rua XV. Inspeção rigorosa de pintura, chassi e busca de antecedentes em minutos.'
  },
  {
    name: 'Atuba',
    description: 'Proteja seu patrimônio no Atuba realizando a perícia cautelar completa com a Carplus. Oferecemos o laudo mais detalhado com seguro de responsabilidade.'
  },
  {
    name: 'Augusta',
    description: 'Vistoria especializada atendendo a região da Augusta. Examinamos minuciosamente pontos vitais de fixação, suspensão e longarinas.'
  },
  {
    name: 'Bacacheri',
    description: 'Perícias e laudos cautelares no Bacacheri com atendimento de excelência. Agende seu horário pelo WhatsApp e faça uma compra 100% segura.'
  },
  {
    name: 'Bairro Alto',
    description: 'Moradores e comerciantes do Bairro Alto encontram na Carplus a análise veicular definitiva. Laudo completo aceito pelas maiores seguradoras e DETRAN.'
  },
  {
    name: 'Barreirinha',
    description: 'Garanta um bom negócio na Barreirinha. Nossa vistoria cautelar certifica numerações de peças e constata integridade mecânica e operacional.'
  },
  {
    name: 'Batel',
    description: 'Atendimento de alto padrão para o Batel. Vistoria técnica minuciosa com testes de lataria detalhados para veículos importados e de alto padrão.'
  },
  {
    name: 'Bigorrilho',
    description: 'Seja para vender ou adquirir um seminovo no Bigorrilho, nosso laudo técnico é a prova de qualidade. Transações transparentes e de confiança.'
  },
  {
    name: 'Boa Vista',
    description: 'A Carplus Vistorias apoia clientes do Boa Vista na certificação de automóveis. Credibilidade e agilidade para um laudo estruturado e sem surpresas.'
  },
  {
    name: 'Bom Retiro',
    description: 'Para negociações seguras no Bom Retiro, conte com o laudo pericial da Carplus. Análise completa de histórico e checagem mecânica de chassi.'
  },
  {
    name: 'Boqueirão',
    description: 'Um dos principais polos imobiliários e automotivos de Curitiba, o Boqueirão conta com nosso suporte para vistorias ágeis e periciais do mais alto nível.'
  },
  {
    name: 'Butiatuvinha',
    description: 'Vistoria veicular cautelar em Santana e Butiatuvinha. Conferência rigorosa de autenticidade documental e histórico do veículo antes do pagamento.'
  },
  {
    name: 'Cabral',
    description: 'Tranquilidade jurídica e mecânica para quem compra carros no Cabral. Avaliação estrutural rigorosa e pesquisa detalhada em mais de 15 bases de dados.'
  },
  {
    name: 'Cachoeira',
    description: 'Proteja-se de golpes ou veículos adulterados na Cachoeira. Realize sua vistoria com nossos especialistas e receba o parecer técnico de imediato.'
  },
  {
    name: 'Cajuru',
    description: 'Atendimento personalizado para o Cajuru. Laudo cautelar executado por peritos experientes com máxima eficiência para você fechar negócio rápido.'
  },
  {
    name: 'Campina do Siqueira',
    description: 'Compre com segurança na Campina do Siqueira. Verificamos se o veículo tem passagem por seguradoras, leilões ou se possui sinistro ativo.'
  },
  {
    name: 'Campo Comprido',
    description: 'Vistoria automotiva completa para moradores do Campo Comprido. Mapeamento de repinturas, reparos de massa plástica, e pontos de deformação estrutural.'
  },
  {
    name: 'Campo de Santana',
    description: 'Segurança em primeiro lugar no Campo de Santana. Avaliação cautelar imparcial e objetiva, ideal para valorizar seu seminovo na venda.'
  },
  {
    name: 'Capão Raso',
    description: 'Perícia técnica de chassi e painéis corta-fogo para o Capão Raso. Certifique-se de que o carro pretendido é original e livre de multas ou ônus.'
  },
  {
    name: 'Capão da Imbuia',
    description: 'Vistoria de transferência e laudo cautelar estendido no Capão da Imbuia. Atendimento prático e sem frescura para agilizar sua transação.'
  },
  {
    name: 'Cascatinha',
    description: 'Moradores de Cascatinha contam com nossa equipe para certificar a procedência física e documental de utilitários, nacionais e importados de luxo.'
  },
  {
    name: 'Caximba',
    description: 'Laudo cautelar certificado pela Carplus no bairro Caximba. Segurança jurídica para quem está comprando ou vendendo carros de passeio e utilitários.'
  },
  {
    name: 'Centro',
    description: 'Vistoria veicular dinâmica no Centro de Curitiba. Rapidez absoluta e exatidão técnica que o público do coração comercial da cidade exige.'
  },
  {
    name: 'Centro Cívico',
    description: 'O polo administrativo de Curitiba recebe nossa cobertura de vistorias com precisão absoluta. Atendimento pontual com hora marcada via WhatsApp.'
  },
  {
    name: 'Cidade Industrial (CIC)',
    description: 'Atendimento de excelência na maior região industrial de Curitiba. Certificação cautelar completa com seguro de responsabilidade integrado.'
  },
  {
    name: 'Cristo Rei',
    description: 'Seja para transferir ou emitir laudo cautelar preventivo no Cristo Rei, a Carplus é sua principal parceira em diagnóstico veicular profissional.'
  },
  {
    name: 'Fanny',
    description: 'Próximo ao Fanny, realizamos perícias estruturais avançadas de colunas e assoalho com equipamentos de medição de espessura de alta sensibilidade.'
  },
  {
    name: 'Fazendinha',
    description: 'Proteção veicular garantida no Fazendinha. Saiba qual o histórico de sinistros, leilões ou fraudes que podem depreciar o preço do automóvel.'
  },
  {
    name: 'Ganchinho',
    description: 'Atendimento confiável na região do Ganchinho para vistorias completas. Nossos peritos inspecionam juntas, longarinas e soldas de fábrica.'
  },
  {
    name: 'Guabirotuba',
    description: 'Segurança automotiva premium no Guabirotuba. Laudos técnicos completos que agregam altíssimo valor e transparência na revenda de seu carro.'
  },
  {
    name: 'Guaíra',
    description: 'Moradores de Guaíra contam com check-up de chassi e motor detalhados, livrando o comprador de cair em armadilhas de fraudadores.'
  },
  {
    name: 'Hauer',
    description: 'Para lojistas e compradores do Hauer, realizamos vistoria com entrega na hora. Não perca tempo e feche seu negócio com total amparo documental.'
  },
  {
    name: 'Hugo Lange',
    description: 'Foco em procedência técnica e qualidade no Hugo Lange. Análise abrangente focada em detalhes ocultos e conferência documental detalhada.'
  },
  {
    name: 'Jardim Botânico',
    description: 'Uma das principais referências e cartões postais de Curitiba recebe nossa cobertura de segurança automotiva com atendimento de primeira classe.'
  },
  {
    name: 'Jardim Social',
    description: 'Para veículos de alto luxo e alta cilindrada do Jardim Social, conte com nossa inspeção de alta fidelidade e laudo técnico rico em fotos.'
  },
  {
    name: 'Jardim das Américas',
    description: 'Quem reside no Jardim das Américas tem garantia de laudo cautelar fidedigno na Carplus. Evite sinistros e perdas financeiras comprando com segurança.'
  },
  {
    name: 'Juvevê',
    description: 'Soluções de perícia cautelar rápidas e eficientes para o Juvevê. Verificamos soldas na área do painel frontal e possíveis sinais de adulterações.'
  },
  {
    name: 'Lamenha Pequena',
    description: 'Atendimento técnico especializado em Lamenha Pequena. Inspeção estrutural pesada para atestar se o veículo foi cortado ou remontado.'
  },
  {
    name: 'Lindóia',
    description: 'Laudo automotivo certificado no Lindóia. Verificação de antecedentes, gravames ativos e restrições judiciais com consulta integrada.'
  },
  {
    name: 'Mercês',
    description: 'No Mercês, conte com nossa equipe especializada para avaliar a estrutura externa e interna do veículo antes de efetuar o pagamento.'
  },
  {
    name: 'Mossunguê',
    description: 'Para a região do Mossunguê e Ecoville, disponibilizamos uma perícia técnica minuciosa para certificar marcas originais e o histórico de leilão.'
  },
  {
    name: 'Novo Mundo',
    description: 'Facilidade imbatível e rapidez na entrega do laudo pericial para o Novo Mundo. Faça uma vistoria completa rápida e garanta sua integridade.'
  },
  {
    name: 'Orleans',
    description: 'Laudo cautelar confiável no Orleans. Avaliamos se houve qualquer alteração estrutural nas longarinas ou teto, assegurando se o carro é seguro.'
  },
  {
    name: 'Parolin',
    description: 'Análise cautelar transparente no Parolin. Documentamos todas as condições do motor e eventuais desgastes ou danos na parte inferior do chassi.'
  },
  {
    name: 'Pilarzinho',
    description: 'A melhor avaliação cautelar de Curitiba no Pilarzinho. Saiba se o carro passou por sinistros graves que comprometem a estabilidade.'
  },
  {
    name: 'Pinheirinho',
    description: 'No Pinheirinho, nossa vistoria técnica é rápida e precisa. Auxiliamos você no processo de aquisição segura do seu próximo veículo seminovo.'
  },
  {
    name: 'Prado Velho',
    description: 'Garantia de segurança pericial no Prado Velho. Agilidade na entrega do laudo técnico e atendimento personalizado focado na sua tranquilidade.'
  },
  {
    name: 'Rebouças',
    description: 'Seja perto das faculdades ou nos polos corporativos do Rebouças, conte com nossa plataforma pericial para certificar a qualidade do seu automóvel.'
  },
  {
    name: 'Riviera',
    description: 'Atendimento pericial profissional e ágil no bairro Riviera. Evite comprar gato por lebre verificando todas as numerações com especialistas.'
  },
  {
    name: 'Santa Cândida',
    description: 'No Santa Cândida, a Carplus garante que seu laudo técnico seja de perfeito rigor e aceito prontamente nos cartórios, financeiras e pelo DETRAN.'
  },
  {
    name: 'Santa Felicidade',
    description: 'Para moradores e investidores de Santa Felicidade, oferecemos vistoria cautelar de excelência para sua inteira segurança e valorização do carro.'
  },
  {
    name: 'Santa Quitéria',
    description: 'Análise completa para o Santa Quitéria. Nossos equipamentos aferem a camada exata de pintura do carro para sinalizar batidas com perfeição.'
  },
  {
    name: 'Santo Inácio',
    description: 'No Santo Inácio, realize a vistoria pericial que certifica longarinas, colunas dianteiras e traseiras para total integridade de seus passageiros.'
  },
  {
    name: 'Seminário',
    description: 'Investigação abrangente no Seminário antes de assinar o DUT. Prevenção absoluta contra clones e veículos adulterados ou com restrição.'
  },
  {
    name: 'Sítio Cercado',
    description: 'Atendimento diário com qualidade garantida para o Sítio Cercado. Faça seu laudo completo de vistoria e feche seu negócio de forma segura.'
  },
  {
    name: 'São Braz',
    description: 'No São Braz, faça uma compra assessorada pela Carplus. Entregamos um laudo detalhado e explicamos cada ponto analisado da mecânica ao chassi.'
  },
  {
    name: 'São Francisco',
    description: 'Integridade e segurança em São Francisco. Identificação precisa de adulteração de motores e alteração em numerações de identificadores.'
  },
  {
    name: 'São João',
    description: 'Vistoria especializada no bairro São João. Protegemos sua transação comercial com perícias cautelares completas e laudos rápidos e práticos.'
  },
  {
    name: 'São Lourenço',
    description: 'Quem reside no São Lourenço conta com o apoio da Carplus para certificar veículos com passagem por leilão ou histórico de locadoras.'
  },
  {
    name: 'São Miguel',
    description: 'Procedência de verdade no São Miguel. Identificamos se as peças de segurança, cintos e airbags são originais ou se já foram violados.'
  },
  {
    name: 'Taboão',
    description: 'No Taboão, faça a vistoria cautelar do seu veículo e evite dores de cabeça futuras. Entregamos resultados precisos na hora do exame físico.'
  },
  {
    name: 'Tarumã',
    description: 'Para motoristas e comerciantes do Tarumã, garantimos vistoria cautelar rápida e fidedigna com excelente infraestrutura técnica ao seu dispor.'
  },
  {
    name: 'Tatuquara',
    description: 'Realize perícias robustas no Tatuquara. Garantia de laudo transparente certificado para transferências e transações do seu veículo usado.'
  },
  {
    name: 'Tingui',
    description: 'Atendimento veloz no Tingui. Vistoria cautelar com análise de 80+ itens e pesquisa profunda em bases de leilão nacionais.'
  },
  {
    name: 'Uberaba',
    description: 'No Uberaba, a Carplus é a segurança necessária para fechar negócio sem riscos ocultos de fraudes ou chassi remarcado indevidamente.'
  },
  {
    name: 'Umbará',
    description: 'Proteção integral no Umbará. Vistorias estruturadas que fornecem ao comprador a real condição da traseira, longarinas e motor do carro.'
  },
  {
    name: 'Vila Izabel',
    description: 'Moradores de Vila Izabel contam com nossa excelência e precisão em vistorias automotivas a um passo de sua casa. Agende já seu laudo.'
  },
  {
    name: 'Vista Alegre',
    description: 'Não compre carros seminovos sem passar pela Carplus se você mora no Vista Alegre. Certificamos o valor real do automóvel com perícia técnica.'
  },
  {
    name: 'Xaxim',
    description: 'Uma das maiores áreas industriais e de venda de veículos no Xaxim, com suporte total para certificar segurança e integridade de frotas.'
  },
  {
    name: 'Vila Sandra',
    description: 'Região popular da CIC. Apoio completo em perícias veiculares e vistorias de transferência para moradores e lojistas da Vila Sandra.'
  },
  {
    name: 'Vila Verde',
    description: 'Região popular do imenso distrito da CIC. Realizamos laudos periciais cautelares detalhados e minuciosos na Vila Verde.'
  },
  {
    name: 'Vitória Régia',
    description: 'Grande área na CIC com alta demanda de compra e venda de veículos. Vistoria de procedência e segurança veicular no Vitória Régia.'
  },
  {
    name: 'Caiuá',
    description: 'Procedência automotiva garantida na área do Caiuá, na CIC. Evite dores de cabeça com veículos que possuem pendências ocultas.'
  },
  {
    name: 'Sabará',
    description: 'Na popular região do Sabará (CIC), a Carplus assegura seu carro com análise de motor, chassis, histórico de roubos ou passagem por leilão.'
  },
  {
    name: 'Gabineto',
    description: 'Para o Gabineto e cercanias da CIC, conte com o diagnóstico estrutural avançado que impede fraudes na aquisição de automóveis.'
  },
  {
    name: 'Itatiaia',
    description: 'Moradores da região Itatiaia contam com perícias técnicas detalhadas para garantir bons negócios no mercado de seminovos.'
  },
  {
    name: 'Santa Helena',
    description: 'Certificação cautelar completa na área popular de Santa Helena na CIC. Integridade total de chassis e colunas certificadas na hora.'
  },
  {
    name: 'Conquista',
    description: 'Laudo cautelar certificado atendendo à comunidade de Conquista na CIC. Confiabilidade técnica com parecer pericial documentado.'
  },
  {
    name: 'Barigui',
    description: 'Inspeção estrutural caprichada atendendo a região popular do Barigui na CIC. Proteja-se de perdas com nosso laudo pericial.'
  },
  {
    name: 'Osvaldo Cruz',
    description: 'A área do loteamento Osvaldo Cruz na CIC conta com exames técnicos detalhados e checagem de vidros, numerações e leilões.'
  },
  {
    name: 'Atenas',
    description: 'No conjunto popular Atenas, garantimos que sua compra veicular seja amparada por avaliações rigorosas de segurança ativa e passiva.'
  },
  {
    name: 'Neoville',
    description: 'No moderno bairro planejado do Neoville (região CIC), oferecemos perícia premium para quem prioriza procedência técnica e qualidade.'
  },
  {
    name: 'Vila Pantanal',
    description: 'Inspeção automotiva e vistorias de transferência ágeis para os moradores da área de Vila Pantanal, no Cajuru.'
  },
  {
    name: 'Vila Torres',
    description: 'Avaliação estrutural confiável na tradicional região da Vila Torres. Verificamos se há cortes de teto ou emendas no chassi.'
  },
  {
    name: 'Vila das Torres',
    description: 'Laudo cautelar e vistorias periciais de alta confiabilidade para motoristas e revendedores na região da Vila das Torres.'
  },
  {
    name: 'Vila Parolin',
    description: 'Solução rápida e transparente de perícia automotiva para a comunidade da Vila Parolin. Agende o seu check-up preventivo em instantes.'
  },
  {
    name: 'Vila Hauer',
    description: 'Apoio técnico sob medida para a área popular da Vila Hauer. Certificação detalhada e confiável do seu automóvel usado.'
  },
  {
    name: 'Vila Guaíra',
    description: 'Perícia cautelar de transferência e vistorias completas na Vila Guaíra. Evite dores de cabeça futuras e feche negócio com tranquilidade.'
  },
  {
    name: 'Vila Oficinas',
    description: 'Laudo de procedência de vidros, suspensão e longarinas atendendo à popular região residencial da Vila Oficinas no Cajuru.'
  },
  {
    name: 'Vila Osternack',
    description: 'Perícias veiculares com a rapidez que você precisa na Vila Osternack. Checamos 80+ itens e emitimos seu laudo pericial na hora.'
  },
  {
    name: 'Vila São Pedro',
    description: 'Vistoria cautelar completa e honesta para a Vila São Pedro. Saiba tudo sobre as condições do carro antes de fechar a compra.'
  },
  {
    name: 'Vila Audi',
    description: 'Atendimento para a Vila Audi com análise transparente de antecedentes, restrições financeiras e histórico de sinistros.'
  },
  {
    name: 'Pinheirinho Velho',
    description: 'Inspeções e vistorias periciais na histórica área do Pinheirinho Velho. Confiabilidade total com profissionais peritos.'
  },
  {
    name: 'Sítio Cercado Velho',
    description: 'Laudo veicular fidedigno do estado da estrutura de longarinas e juntas na região tradicional do Sítio Cercado Velho.'
  },
  {
    name: 'Capão Raso Velho',
    description: 'Garanta a aprovação técnica e proteção do seu patrimônio com vistorias dedicadas no Capão Raso Velho.'
  },
  {
    name: 'Jardim Gabineto',
    description: 'Realizamos vistorias cautelares de total credibilidade para a vizinhança do Jardim Gabineto em Curitiba.'
  },
  {
    name: 'Jardim Itatiaia',
    description: 'Evite ciladas em revendas de automóveis. Faça a vistoria cautelar Carplus no Jardim Itatiaia e faça uma compra consciente.'
  },
  {
    name: 'Jardim Kosmos',
    description: 'Checagem rigorosa de numeração de motor e procedência do câmbio na tradicional comunidade do Jardim Kosmos.'
  },
  {
    name: 'Jardim da Ordem',
    description: 'Suporte pericial confiável para garantir a originalidade e a boa procedência de veículos comprados no Jardim da Ordem.'
  },
  {
    name: 'Jardim Alvorada',
    description: 'Vistoria automotiva completa e detalhada para toda a região popular do Jardim Alvorada em Curitiba.'
  },
  {
    name: 'CIC Central',
    description: 'Inspeção técnica veicular minuciosa com entrega imediata na movimentada região do CIC Central em Curitiba.'
  }
];

export const CITIES_SEO: CityType[] = [
  {
    name: 'São José dos Pinhais',
    description: 'A Carplus Vistorias atende moradores de São José dos Pinhais com vistoria cautelar e laudo na hora. Fácil acesso pelo Contorno Sul até o Portão, Curitiba. Para quem compra veículos em leilões ou revendas de SJP, nosso laudo é essencial.'
  },
  {
    name: 'Pinhais',
    description: 'Moradores de Pinhais encontram na Carplus Vistorias o laudo cautelar mais robusto e completo da região metropolitana. Evite fraudes estruturais.'
  },
  {
    name: 'Colombo',
    description: 'Colombo e região norte da Grande Curitiba: perícia veicular de alto padrão com verificação minuciosa de chassis e antecedentes.'
  },
  {
    name: 'Araucária',
    description: 'Para quem reside ou revende em Araucária, a Carplus realiza vistorias periciais rigorosas com laudos emitidos em menos de uma hora.'
  },
  {
    name: 'Almirante Tamandaré',
    description: 'Vistoria cautelar detalhada garantindo segurança jurídica nas transações de carros para moradores de Almirante Tamandaré.'
  },
  {
    name: 'Campo Largo',
    description: 'Vistoria cautelar e laudo homologado na entrada oeste para Campo Largo. Análise profunda de colisões de lataria e peças estruturais.'
  },
  {
    name: 'Campo Magro',
    description: 'Evite dores de cabeça comprando seminovos em Campo Magro. Saiba se o chassi do carro é original antes de assinar o recibo de compra.'
  },
  {
    name: 'Fazenda Rio Grande',
    description: 'Fácil deslocamento pela BR-116. Garantimos a vistoria cautelar mais detalhada da Grande Curitiba para moradores de Fazenda Rio Grande.'
  },
  {
    name: 'Quatro Barras',
    description: 'Para Quatro Barras, as avaliações estruturadas da Carplus asseveram a originalidade mecânica e operacional de qualquer modelo nacional ou importado.'
  },
  {
    name: 'Campina Grande do Sul',
    description: 'Proteção pericial de peso para Campina Grande do Sul. Mapeamos soldas clandestinas e repinturas completas que depreciam automóveis.'
  },
  {
    name: 'Mandirituba',
    description: 'Tranquilidade e agilidade jurídica para o município metropolitano de Mandirituba. Pareceres sérios com credenciamento nacional.'
  },
  {
    name: 'Balsa Nova',
    description: 'Compradores de Balsa Nova contam com vistorias veiculares robustas de chassi e painéis periciados, livre de multas ou irregularidades.'
  },
  {
    name: 'Rio Branco do Sul',
    description: 'Para lojistas e autônomos de Rio Branco do Sul, a Carplus executa perícias veiculares ágeis e perfeitamente aceitas por seguradoras.'
  },
  {
    name: 'Itaperuçu',
    description: 'Certificação cautelar completa atestando numerações de peças e integridade técnica na cidade de Itaperuçu e região norte.'
  },
  {
    name: 'Tijucas do Sul',
    description: 'Suporte automotivo especializado para Tijucas do Sul. Análise documental completa e parecer estrutural estendido na hora.'
  }
];

export const FAQS_SEO: FAQItemType[] = [
  {
    question: '1. O que é vistoria cautelar?',
    answer: 'A vistoria cautelar é uma perícia técnica realizada em um veículo usado para verificar suas condições estruturais, documentais e históricas antes da compra, venda ou financiamento. O laudo cautelar analisa mais de 80 itens do veículo, incluindo estrutura do chassi, lataria, numerações identificadoras, pesquisa de antecedentes (roubo, leilão, gravame) e histórico de colisões.'
  },
  {
    question: '2. Por que fazer vistoria cautelar antes de comprar um carro?',
    answer: 'Comprar um carro usado sem vistoria cautelar é um risco enorme. Veículos com histórico de batida grave, adulteração de chassi, leilão ou gravame financeiro podem representar perda total do investimento. A vistoria cautelar da Carplus garante que você saiba exatamente o que está comprando antes de assinar qualquer contrato.'
  },
  {
    question: '3. Quanto tempo leva a vistoria cautelar na Carplus?',
    answer: 'A vistoria cautelar completa na Carplus leva entre 45 e 60 minutos. O laudo é emitido na hora, ao final da inspeção. Não há espera ou envio posterior — você sai com o documento em mãos.'
  },
  {
    question: '4. A vistoria cautelar da Carplus é aceita no DETRAN?',
    answer: 'Sim. O laudo técnico emitido pela Carplus Vistorias é aceito pelo DETRAN-PR, por todos os cartórios de notas e registro de imóveis do Paraná, por financeiras e bancos que operam no estado, e por seguradoras conveniadas.'
  },
  {
    question: '5. Qual o valor da vistoria cautelar em Curitiba?',
    answer: 'Entre em contato pelo WhatsApp (41) 98874-0258 para consultar nossos valores atualizados. A Carplus oferece preços competitivos com a vistoria mais completa de Curitiba, incluindo seguro de responsabilidade civil sem custo adicional.'
  },
  {
    question: '6. A Carplus atende no meu bairro?',
    answer: 'A Carplus Vistorias está localizada no Portão, em Curitiba, com fácil acesso de todos os bairros da cidade e da região metropolitana. Atendemos moradores de Água Verde, Boqueirão, CIC, Cajuru, Santa Felicidade, Boa Vista, e mais de 27 cidades da Grande Curitiba.'
  },
  {
    question: '7. O que está incluído na vistoria cautelar da Carplus?',
    answer: 'Nossa vistoria cautelar inclui: análise estrutural de chassi e longarinas, verificação de lataria e pintura, conferência de todas as numerações identificadoras, pesquisa de antecedentes (roubo, furto, leilão, gravame, judicial), verificação de recall, análise documental e emissão de laudo técnico com fotos.'
  },
  {
    question: '8. Preciso agendar com antecedência?',
    answer: 'Recomendamos agendamento pelo WhatsApp para garantir atendimento no horário de sua preferência. Atendemos de segunda a sábado. Em alguns casos, é possível atendimento no mesmo dia, sujeito à disponibilidade.'
  },
  {
    question: '9. Posso levar o vendedor junto para a vistoria?',
    answer: 'Sim, o vendedor pode acompanhar a vistoria. A transparência é total — o laudo documenta o estado real do veículo, o que beneficia tanto o comprador quanto o vendedor honesto.'
  },
  {
    question: '10. A vistoria cautelar detecta batidas e reparos ocultos?',
    answer: 'Sim. Utilizamos medidor de espessura de pintura (espessímetro), detector de massa plástica e análise visual técnica para identificar repintura, solda, massa em excesso e deformações estruturais que indicam colisões anteriores, mesmo quando ocultas com reparos.'
  },
  {
    question: '11. O que é gravame veicular e como a Carplus verifica?',
    answer: 'Gravame é uma restrição financeira sobre o veículo — geralmente financiamento não quitado. Comprando um carro com gravame, você pode perder o veículo para a financeira. A Carplus consulta as principais bases de dados para identificar gravames ativos antes da emissão do laudo.'
  },
  {
    question: '12. A vistoria cautelar é obrigatória em Curitiba?',
    answer: 'A vistoria cautelar não é legalmente obrigatória para todas as transações, mas é fortemente recomendada. Para transferência de veículos com mais de determinado tempo de uso, o DETRAN-PR pode exigir laudo de vistoria. Consulte-nos para verificar a necessidade no seu caso.'
  },
  {
    question: '13. Que tipos de veículos a Carplus vistoria?',
    answer: 'Realizamos vistoria cautelar em carros de passeio, SUVs, picapes, minivans e utilitários leves. Consulte-nos para veículos de maior porte como caminhões e ônibus.'
  },
  {
    question: '14. O laudo da Carplus tem validade?',
    answer: 'O laudo técnico emitido pela Carplus tem validade de 30 dias para fins de transferência e documentação. Para negociações, a validade é imediata — reflete o estado do veículo no dia da vistoria.'
  },
  {
    question: '15. Como funciona o seguro de responsabilidade civil da Carplus?',
    answer: 'A Carplus Vistorias inclui seguro de responsabilidade civil em todos os laudos. Isso significa que, caso o laudo apresente alguma falha técnica que cause dano documentado ao cliente, estamos cobertos para indenizar. É nossa garantia de qualidade.'
  },
  {
    question: '16. A Carplus faz vistoria de veículos de leilão?',
    answer: 'Sim. A vistoria de veículos de leilão é um dos nossos serviços mais solicitados. Laudos de leilão frequentemente apresentam danos ocultos que só uma perícia técnica especializada consegue identificar. Recomendamos fortemente a vistoria antes de qualquer arremate.'
  },
  {
    question: '17. Posso fazer a vistoria antes de pagar o sinal?',
    answer: 'Absolutamente sim — e recomendamos isso fortemente. Faça a vistoria cautelar antes de pagar qualquer valor ao vendedor. Um bom vendedor não se recusará a permitir a vistoria do veículo.'
  },
  {
    question: '18. A Carplus emite laudo digital?',
    answer: 'Sim. Emitimos laudo em formato digital (PDF) e impresso. O laudo digital pode ser enviado por e-mail ou WhatsApp imediatamente após a vistoria.'
  },
  {
    question: '19. O que fazer se o laudo identificar problemas no veículo?',
    answer: 'O laudo da Carplus documentará todos os problemas encontrados com fotos e descrição técnica. Com essas informações, você pode negociar desconto no preço, exigir reparos, ou simplesmente desistir da compra — com segurança e documentação para eventual disputa.'
  },
  {
    question: '20. Como agendar a vistoria cautelar na Carplus em Curitiba?',
    answer: 'O agendamento é simples: entre em contato pelo WhatsApp (41) 98874-0258, informe o modelo do veículo e sua preferência de horário. Nossa equipe confirmará o agendamento em minutos. Você também pode enviar e-mail para laudo@carplusvistorias.com.br.'
  }
];
