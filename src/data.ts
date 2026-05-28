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
    description: 'A Carplus Vistorias está localizada no Portão, bairro central de Curitiba. Nosso endereço na Av. Presidente Arthur da Silva Bernardes, 1323 oferece fácil acesso a moradores do Portão, Água Verde, Pinheirinho e região sul de Curitiba.'
  },
  {
    name: 'Água Verde',
    description: 'Moradores do Água Verde contam com a proximidade da Carplus Vistorias no Portão para realizar vistoria cautelar com laudo na hora. A apenas 5 minutos do bairro, oferecemos análise completa do veículo antes da sua compra.'
  },
  {
    name: 'Boqueirão',
    description: 'Para quem mora no Boqueirão e precisa de vistoria cautelar em Curitiba, a Carplus está a poucos minutos. Atendemos diariamente com hora marcada, sem fila e com laudo pronto na hora.'
  },
  {
    name: 'Pinheirinho',
    description: 'Vistoria cautelar no Pinheirinho: moradores do Pinheirinho têm acesso rápido à Carplus Vistorias no Portão. Laudo completo para compra segura de veículos usados em Curitiba.'
  },
  {
    name: 'Hauer',
    description: 'A Carplus Vistorias atende moradores do Hauer com facilidade de acesso pela Av. Arthur Bernardes. Perícia automotiva profissional a minutos do seu bairro.'
  },
  {
    name: 'Xaxim',
    description: 'Quem mora no Xaxim tem na Carplus Vistorias a opção mais próxima para laudo cautelar em Curitiba. Análise estrutural, pesquisa de antecedentes e emissão imediata.'
  },
  {
    name: 'Sítio Cercado',
    description: 'Moradores do Sítio Cercado podem contar com a Carplus para vistoria cautelar antes de comprar um veículo usado. Fácil acesso pela BR-116 e Av. Comendador Franco.'
  },
  {
    name: 'CIC (Cidade Industrial de Curitiba)',
    description: 'Para quem mora na CIC, a Carplus Vistorias no Portão é referência em vistoria cautelar. Laudos emitidos na hora com cobertura de responsabilidade civil.'
  },
  {
    name: 'Cajuru',
    description: 'Vistoria cautelar no Cajuru: a Carplus Vistorias atende toda a zona leste de Curitiba. Perícia automotiva completa com laudo na hora para sua compra segura.'
  },
  {
    name: 'Bacacheri',
    description: 'Moradores do Bacacheri e zona norte de Curitiba confiam na Carplus Vistorias para inspeção veicular. Agende pelo WhatsApp e venha ao Portão.'
  },
  {
    name: 'Santa Felicidade',
    description: 'Da zona oeste, moradores de Santa Felicidade encontram na Carplus a perícia automotiva mais completa de Curitiba. Laudo aceito em todo o Brasil.'
  },
  {
    name: 'Boa Vista',
    description: 'Para quem mora na Boa Vista e precisa de laudo cautelar, a Carplus Vistorias no Portão oferece atendimento rápido com hora marcada. Análise de 80+ itens.'
  },
  {
    name: 'Capão Raso',
    description: 'Moradores do Capão Raso têm acesso privilegiado à Carplus Vistorias no Portão. Vistoria cautelar profissional a minutos do seu bairro.'
  },
  {
    name: 'Novo Mundo',
    description: 'Do Novo Mundo até a Carplus são minutos de distância. Vistoria cautelar completa, laudo na hora e seguro de responsabilidade civil incluso.'
  },
  {
    name: 'Cristo Rei',
    description: 'Moradores do Cristo Rei e bairros centrais de Curitiba têm na Carplus Vistorias uma referência em perícia automotiva. Fácil acesso pela Av. Getúlio Vargas.'
  }
];

export const CITIES_SEO: CityType[] = [
  {
    name: 'São José dos Pinhais',
    description: 'A Carplus Vistorias atende moradores de São José dos Pinhais com vistoria cautelar e laudo na hora. Fácil acesso pelo Contorno Sul até o Portão, Curitiba. Para quem compra veículos em leilões ou revendas de SJP, nosso laudo é indispensável.'
  },
  {
    name: 'Colombo',
    description: 'Colombo e região norte da Grande Curitiba: a Carplus Vistorias realiza perícia automotiva completa para moradores de Colombo que compram veículos usados. Laudo emitido na hora, aceito em toda a Grande Curitiba.'
  },
  {
    name: 'Araucária',
    description: 'Para quem mora em Araucária e precisa de vistoria cautelar, a Carplus Vistorias no Portão é a escolha mais próxima com equipamentos de ponta. Análise estrutural, pesquisa de antecedentes e emissão imediata do laudo.'
  },
  {
    name: 'Pinhais',
    description: 'Moradores de Pinhais encontram na Carplus Vistorias o laudo cautelar mais completo da Grande Curitiba. Acesso rápido pelo Contorno Leste. Agende pelo WhatsApp e garanta segurança na sua compra.'
  },
  {
    name: 'Campo Largo',
    description: 'Vistoria cautelar em Campo Largo: a Carplus Vistorias atende compradores de veículos usados de Campo Largo com perícia automotiva profissional. Laudo válido para DETRAN, cartórios e financeiras.'
  },
  {
    name: 'Almirante Tamandaré',
    description: 'De Almirante Tamandaré até a Carplus Vistorias no Portão são cerca de 30 minutos. Um pequeno deslocamento para garantir que o veículo que você está comprando não tem surpresas ocultas.'
  },
  {
    name: 'Fazenda Rio Grande',
    description: 'Moradores de Fazenda Rio Grande contam com a Carplus para vistoria cautelar em Curitiba. Laudo completo de 80+ itens emitido na hora. Fácil acesso pelo Contorno Sul.'
  },
  {
    name: 'Piraquara',
    description: 'Para Piraquara e leste da Grande Curitiba, a Carplus Vistorias oferece perícia automotiva completa. Evite riscos na compra do seu veículo usado com nosso laudo técnico.'
  },
  {
    name: 'Quatro Barras',
    description: 'Moradores de Quatro Barras têm na Carplus Vistorias a referência em laudo cautelar para a Região Metropolitana de Curitiba. Análise profissional, laudo na hora.'
  },
  {
    name: 'Campina Grande do Sul',
    description: 'Vistoria cautelar para moradores de Campina Grande do Sul: a Carplus Vistorias no Portão realiza perícia completa com emissão imediata. Segurança garantida na sua transação veicular.'
  },
  {
    name: 'Bocaiúva do Sul',
    description: 'De Bocaiúva do Sul, a Carplus Vistorias está acessível para quem precisa de laudo cautelar na Grande Curitiba. Perícia automotiva profissional com responsabilidade civil.'
  },
  {
    name: 'Contenda',
    description: 'Moradores de Contenda podem contar com a Carplus para vistoria cautelar antes de fechar negócio. Nosso laudo é aceito em bancos, financeiras e cartórios.'
  },
  {
    name: 'Mandirituba',
    description: 'Vistoria cautelar em Mandirituba: venha até a Carplus Vistorias no Portão para garantir segurança na compra do seu veículo. Laudo completo emitido na hora.'
  },
  {
    name: 'Balsa Nova',
    description: 'Para Balsa Nova e região oeste da Grande Curitiba, a Carplus Vistorias oferece perícia automotiva completa. Análise de chassi, lataria, numerações e antecedentes.'
  },
  {
    name: 'Lapa',
    description: 'Moradores da Lapa que compram veículos usados in Curitiba podem contar com a Carplus Vistorias para laudo cautelar. Fácil acesso pela BR-476.'
  },
  {
    name: 'Campo do Tenente',
    description: 'Campo do Tenente e região sul do Paraná: a Carplus Vistorias atende com vistoria cautelar completa. Laudo técnico profissional para negociações seguras.'
  },
  {
    name: 'Rio Negro',
    description: 'De Rio Negro até Curitiba para fazer vistoria cautelar: vale o investimento. A Carplus Vistorias oferece o laudo mais completo da região, com seguro de responsabilidade civil.'
  },
  {
    name: 'Tijucas do Sul',
    description: 'Moradores de Tijucas do Sul têm na Carplus a opção de vistoria cautelar mais próxima. Perícia automotiva com equipamentos de última geração em Curitiba.'
  },
  {
    name: 'Agudos do Sul',
    description: 'Para Agudos do Sul e região, a Carplus Vistorias no Portão realiza inspeção veicular completa. Laudo emitido na hora, aceito em todo o território nacional.'
  },
  {
    name: 'Tunas do Paraná',
    description: 'Moradores de Tunas do Paraná podem agendar vistoria cautelar na Carplus Vistorias em Curitiba. Análise de 80+ itens com responsabilidade civil inclusa.'
  },
  {
    name: 'Doutor Ulysses',
    description: 'De Doutor Ulysses à Carplus em Curitiba: para compras seguras de veículos usados, nosso laudo técnico garante tranquilidade total na negociação.'
  },
  {
    name: 'Cerro Azul',
    description: 'Moradores de Cerro Azul que negociam veículos em Curitiba confiam na Carplus Vistorias para laudo cautelar. Análise estrutural, lataria e pesquisa de antecedentes.'
  },
  {
    name: 'Itaperuçu',
    description: 'Vistoria cautelar para Itaperuçu: a Carplus Vistorias no Portão oferece perícia automotiva profissional a toda a região norte da Grande Curitiba. Laudo na hora.'
  },
  {
    name: 'Rio Branco do Sul',
    description: 'Moradores de Rio Branco do Sul têm acesso à Carplus Vistorias para inspeção veicular completa. Laudo técnico emitido na hora, com seguro de responsabilidade civil.'
  },
  {
    name: 'Adrianópolis',
    description: 'Para Adrianópolis e região do Vale do Ribeira, a Carplus Vistorias em Curitiba é a referência em perícia automotiva. Garanta segurança na compra do seu veículo.'
  },
  {
    name: 'Paranaguá',
    description: 'Moradores do Litoral Paranaense que compram veículos em Curitiba: agende sua vistoria cautelar na Carplus antes de fechar negócio. Laudo completo, emitido na hora.'
  },
  {
    name: 'Telêmaco Borba',
    description: 'De Telêmaco Borba à Carplus em Curitiba: para garantir segurança na compra de veículos usados em Curitiba, nosso laudo cautelar completo é la melhor escolha.'
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
