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
    "id": "estrutural",
    "icon": "fa-car-crash",
    "title": "Análise Estrutural",
    "description": "Avaliação dos pontos estruturais previstos no serviço para registrar indícios de danos ou reparos."
  },
  {
    "id": "antecedentes",
    "icon": "fa-file-shield",
    "title": "Pesquisa de Antecedentes",
    "description": "Consulta ao histórico disponível. Confirme as bases utilizadas e as limitações da pesquisa."
  },
  {
    "id": "lataria",
    "icon": "fa-spray-can",
    "title": "Verificação de Lataria",
    "description": "Observação de pintura e sinais de reparos, considerados no contexto da avaliação."
  },
  {
    "id": "numeracoes",
    "icon": "fa-barcode",
    "title": "Conferência de Numerações",
    "description": "Conferência de identificadores do veículo, como chassi e motor, conforme o escopo contratado."
  }
];
export const ADVANTAGES_HOME: AdvantageCardType[] = [
  {
    "id": "seguras",
    "icon": "fa-handshake",
    "title": "Decisões informadas",
    "subtitle": "Conheça os apontamentos e as limitações do relatório antes de negociar."
  },
  {
    "id": "rapidez",
    "icon": "fa-bolt",
    "title": "Agendamento",
    "subtitle": "Confirme orçamento, disponibilidade e prazo com a equipe."
  },
  {
    "id": "excelencia",
    "icon": "fa-star",
    "title": "Clareza na avaliação",
    "subtitle": "Pergunte quais itens serão examinados e como o resultado será apresentado."
  },
  {
    "id": "segurança",
    "icon": "fa-shield-halved",
    "title": "Atendimento no Portão",
    "subtitle": "Traga o veículo à base após confirmar seu agendamento."
  }
];
export const DETAILED_SERVICES: DetailedServiceType[] = [
  {
    "id": "vistoria-completa",
    "title": "Vistoria Cautelar",
    "description": "Avaliação antes da compra ou venda de um veículo, considerando estrutura, identificação e histórico disponível. Não garante ausência de defeitos futuros.",
    "includes": [
      "Identificação e estrutura",
      "Histórico disponível",
      "Limitações explicadas"
    ],
    "ctaText": "Consultar avaliação"
  },
  {
    "id": "pericia-chassi",
    "title": "Conferência de Chassi e Numerações",
    "description": "Conferência de identificadores do veículo, conforme o escopo contratado.",
    "includes": [
      "Escopo a confirmar",
      "Orçamento sob consulta",
      "Esclarecimento do resultado"
    ],
    "ctaText": "Consultar avaliação"
  },
  {
    "id": "analise-estrutural",
    "title": "Verificação de Lataria",
    "description": "Observação de pintura e sinais de reparos, considerados no contexto da avaliação.",
    "includes": [
      "Escopo a confirmar",
      "Orçamento sob consulta",
      "Esclarecimento do resultado"
    ],
    "ctaText": "Consultar avaliação"
  },
  {
    "id": "pesquisa-antecedentes",
    "title": "Pesquisa de Antecedentes",
    "description": "Consulta ao histórico disponível. Confirme as bases utilizadas e as limitações da pesquisa.",
    "includes": [
      "Escopo a confirmar",
      "Orçamento sob consulta",
      "Esclarecimento do resultado"
    ],
    "ctaText": "Consultar avaliação"
  },
  {
    "id": "vistoria-transferencia",
    "title": "Dúvidas sobre transferência",
    "description": "Não confunda vistoria cautelar com o procedimento de transferência. Confirme com o Detran-PR o que é exigido no seu caso e com a equipe qual serviço pode ser prestado.",
    "includes": [
      "Informe a finalidade",
      "Confirme os requisitos aplicáveis"
    ],
    "ctaText": "Consultar a equipe"
  },
  {
    "id": "inspecao-financiamento",
    "title": "Avaliação para financiamento ou seguro",
    "description": "Antes de contratar uma avaliação para banco ou seguradora, confirme diretamente com a instituição qual documento é aceito. A aceitação não é garantida por esta página.",
    "includes": [
      "Confirme com a instituição",
      "Consulte escopo e disponibilidade"
    ],
    "ctaText": "Consultar a equipe"
  }
];
export const NEIGHBORHOODS_SEO: NeighborhoodType[] = [
  {
    name: 'Portão',
    isSede: true,
    description: 'Clientes de Portão podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Abranches',
    description: 'Clientes de Abranches podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Água Verde',
    description: 'Clientes de Água Verde podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Ahú',
    description: 'Clientes de Ahú podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Alto Boqueirão',
    description: 'Clientes de Alto Boqueirão podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Alto da Glória',
    description: 'Clientes de Alto da Glória podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Alto da Rua XV',
    description: 'Clientes de Alto da Rua XV podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Atuba',
    description: 'Clientes de Atuba podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Augusta',
    description: 'Clientes de Augusta podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Bacacheri',
    description: 'Clientes de Bacacheri podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Bairro Alto',
    description: 'Clientes de Bairro Alto podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Barreirinha',
    description: 'Clientes de Barreirinha podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Batel',
    description: 'Clientes de Batel podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Bigorrilho',
    description: 'Clientes de Bigorrilho podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Boa Vista',
    description: 'Clientes de Boa Vista podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Bom Retiro',
    description: 'Clientes de Bom Retiro podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Boqueirão',
    description: 'Clientes de Boqueirão podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Butiatuvinha',
    description: 'Clientes de Butiatuvinha podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Cabral',
    description: 'Clientes de Cabral podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Cachoeira',
    description: 'Clientes de Cachoeira podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Cajuru',
    description: 'Clientes de Cajuru podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Campina do Siqueira',
    description: 'Clientes de Campina do Siqueira podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Campo Comprido',
    description: 'Clientes de Campo Comprido podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Campo de Santana',
    description: 'Clientes de Campo de Santana podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Capão Raso',
    description: 'Clientes de Capão Raso podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Capão da Imbuia',
    description: 'Clientes de Capão da Imbuia podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Cascatinha',
    description: 'Clientes de Cascatinha podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Caximba',
    description: 'Clientes de Caximba podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Centro',
    description: 'Clientes de Centro podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Centro Cívico',
    description: 'Clientes de Centro Cívico podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Cidade Industrial (CIC)',
    description: 'Clientes de Cidade Industrial (CIC) podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Cristo Rei',
    description: 'Clientes de Cristo Rei podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Fanny',
    description: 'Clientes de Fanny podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Fazendinha',
    description: 'Clientes de Fazendinha podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Ganchinho',
    description: 'Clientes de Ganchinho podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Guabirotuba',
    description: 'Clientes de Guabirotuba podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Guaíra',
    description: 'Clientes de Guaíra podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Hauer',
    description: 'Clientes de Hauer podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Hugo Lange',
    description: 'Clientes de Hugo Lange podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Jardim Botânico',
    description: 'Clientes de Jardim Botânico podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Jardim Social',
    description: 'Clientes de Jardim Social podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Jardim das Américas',
    description: 'Clientes de Jardim das Américas podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Juvevê',
    description: 'Clientes de Juvevê podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Lamenha Pequena',
    description: 'Clientes de Lamenha Pequena podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Lindóia',
    description: 'Clientes de Lindóia podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Mercês',
    description: 'Clientes de Mercês podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Mossunguê',
    description: 'Clientes de Mossunguê podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Novo Mundo',
    description: 'Clientes de Novo Mundo podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Orleans',
    description: 'Clientes de Orleans podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Parolin',
    description: 'Clientes de Parolin podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Pilarzinho',
    description: 'Clientes de Pilarzinho podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Pinheirinho',
    description: 'Clientes de Pinheirinho podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Prado Velho',
    description: 'Clientes de Prado Velho podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Rebouças',
    description: 'Clientes de Rebouças podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Riviera',
    description: 'Clientes de Riviera podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Santa Cândida',
    description: 'Clientes de Santa Cândida podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Santa Felicidade',
    description: 'Clientes de Santa Felicidade podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Santa Quitéria',
    description: 'Clientes de Santa Quitéria podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Santo Inácio',
    description: 'Clientes de Santo Inácio podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Seminário',
    description: 'Clientes de Seminário podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Sítio Cercado',
    description: 'Clientes de Sítio Cercado podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'São Braz',
    description: 'Clientes de São Braz podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'São Francisco',
    description: 'Clientes de São Francisco podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'São João',
    description: 'Clientes de São João podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'São Lourenço',
    description: 'Clientes de São Lourenço podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'São Miguel',
    description: 'Clientes de São Miguel podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Taboão',
    description: 'Clientes de Taboão podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Tarumã',
    description: 'Clientes de Tarumã podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Tatuquara',
    description: 'Clientes de Tatuquara podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Tingui',
    description: 'Clientes de Tingui podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Uberaba',
    description: 'Clientes de Uberaba podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Umbará',
    description: 'Clientes de Umbará podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Vila Izabel',
    description: 'Clientes de Vila Izabel podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Vista Alegre',
    description: 'Clientes de Vista Alegre podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Xaxim',
    description: 'Clientes de Xaxim podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Vila Sandra',
    description: 'Clientes de Vila Sandra podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Vila Verde',
    description: 'Clientes de Vila Verde podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Vitória Régia',
    description: 'Clientes de Vitória Régia podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Caiuá',
    description: 'Clientes de Caiuá podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Sabará',
    description: 'Clientes de Sabará podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Gabineto',
    description: 'Clientes de Gabineto podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Itatiaia',
    description: 'Clientes de Itatiaia podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Santa Helena',
    description: 'Clientes de Santa Helena podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Conquista',
    description: 'Clientes de Conquista podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Barigui',
    description: 'Clientes de Barigui podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Osvaldo Cruz',
    description: 'Clientes de Osvaldo Cruz podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Atenas',
    description: 'Clientes de Atenas podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Neoville',
    description: 'Clientes de Neoville podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Vila Pantanal',
    description: 'Clientes de Vila Pantanal podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Vila Torres',
    description: 'Clientes de Vila Torres podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Vila das Torres',
    description: 'Clientes de Vila das Torres podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Vila Parolin',
    description: 'Clientes de Vila Parolin podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Vila Hauer',
    description: 'Clientes de Vila Hauer podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Vila Guaíra',
    description: 'Clientes de Vila Guaíra podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Vila Oficinas',
    description: 'Clientes de Vila Oficinas podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Vila Osternack',
    description: 'Clientes de Vila Osternack podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Vila São Pedro',
    description: 'Clientes de Vila São Pedro podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Vila Audi',
    description: 'Clientes de Vila Audi podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Pinheirinho Velho',
    description: 'Clientes de Pinheirinho Velho podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Sítio Cercado Velho',
    description: 'Clientes de Sítio Cercado Velho podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Capão Raso Velho',
    description: 'Clientes de Capão Raso Velho podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Jardim Gabineto',
    description: 'Clientes de Jardim Gabineto podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Jardim Itatiaia',
    description: 'Clientes de Jardim Itatiaia podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Jardim Kosmos',
    description: 'Clientes de Jardim Kosmos podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Jardim da Ordem',
    description: 'Clientes de Jardim da Ordem podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Jardim Alvorada',
    description: 'Clientes de Jardim Alvorada podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'CIC Central',
    description: 'Clientes de CIC Central podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  }
];

export const CITIES_SEO: CityType[] = [
  {
    name: 'São José dos Pinhais',
    description: 'Clientes de São José dos Pinhais podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Pinhais',
    description: 'Clientes de Pinhais podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Colombo',
    description: 'Clientes de Colombo podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Araucária',
    description: 'Clientes de Araucária podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Almirante Tamandaré',
    description: 'Clientes de Almirante Tamandaré podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Campo Largo',
    description: 'Clientes de Campo Largo podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Campo Magro',
    description: 'Clientes de Campo Magro podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Fazenda Rio Grande',
    description: 'Clientes de Fazenda Rio Grande podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Quatro Barras',
    description: 'Clientes de Quatro Barras podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Campina Grande do Sul',
    description: 'Clientes de Campina Grande do Sul podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Mandirituba',
    description: 'Clientes de Mandirituba podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Balsa Nova',
    description: 'Clientes de Balsa Nova podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Rio Branco do Sul',
    description: 'Clientes de Rio Branco do Sul podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Itaperuçu',
    description: 'Clientes de Itaperuçu podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  },
  {
    name: 'Tijucas do Sul',
    description: 'Clientes de Tijucas do Sul podem consultar a Carplus para avaliação do veículo na base do Portão, em Curitiba. Confirme o agendamento antes de sair. Para deslocamento fora do Portão, consulte disponibilidade e taxa.'
  }
];

export const FAQS_SEO: FAQItemType[] = [
  {
    "question": "Onde fazer vistoria cautelar em Curitiba?",
    "answer": "A Carplus Vistorias atende na Av. Presidente Arthur da Silva Bernardes, 1323, no bairro Portão. Entre em contato pelo WhatsApp (41) 98874-0258 para confirmar a disponibilidade e agendar."
  },
  {
    "question": "O que é analisado na vistoria cautelar?",
    "answer": "O site apresenta análise de estrutura e pintura, conferência de identificadores e pesquisa de histórico do veículo. Confirme com a equipe quais itens e consultas fazem parte do serviço escolhido e quais limitações serão registradas no laudo."
  },
  {
    "question": "Quanto custa e quanto tempo demora?",
    "answer": "Solicite o orçamento e a estimativa de prazo informando o modelo, o ano do veículo e a finalidade da avaliação. O valor e o horário precisam ser confirmados pela equipe; esta página não apresenta tabela de preços nem prazo garantido."
  },
  {
    "question": "A vistoria cautelar garante que o carro não terá problemas?",
    "answer": "Não. A avaliação reúne informações sobre os itens examinados e as consultas disponíveis naquele momento. Leia o escopo, os apontamentos e as limitações do relatório. Para dúvidas sobre funcionamento ou desgaste, converse também com um profissional de mecânica."
  },
  {
    "question": "O laudo cautelar substitui o procedimento de transferência?",
    "answer": "Não trate os dois serviços como equivalentes. Se a finalidade é uma transferência, confirme diretamente com o Detran-PR quais procedimentos e documentos são exigidos para o seu caso. Informe essa finalidade à Carplus antes de contratar."
  },
  {
    "question": "Preciso levar o carro até o Portão?",
    "answer": "O atendimento é realizado na base da empresa no Portão. Se precisar de deslocamento fora da região do Portão, consulte antes a disponibilidade e a taxa. O site informa que não há taxa de deslocamento para atendimento na base."
  },
  {
    "question": "O que informar ao solicitar o agendamento?",
    "answer": "Informe modelo, ano, finalidade da vistoria e preferência de data. Pergunte quais documentos levar e combine com o proprietário a apresentação do veículo. Não é necessário publicar documentos pessoais ou do carro em comentários públicos."
  },
  {
    "question": "Como usar o resultado antes de comprar?",
    "answer": "Leia o relatório com atenção e peça esclarecimentos sobre cada apontamento. Considere a avaliação junto com os documentos e as demais verificações necessárias à negociação. Um resultado isolado não garante valorização, financiamento ou aceitação por seguradora."
  }
];
