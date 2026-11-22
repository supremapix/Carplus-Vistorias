import fs from 'fs';
import path from 'path';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import AtendimentoQuadrinhos from '../src/components/AtendimentoQuadrinhos';
const PRE_COMPRA_PAGES = [
  {
    slug: 'vistoria-pre-compra-curitiba',
    title: 'Vistoria Pré Compra Curitiba | Carplus Vistorias',
    h1: 'Vistoria Pré Compra Curitiba',
    description: 'Avaliação antes de comprar um veículo, com atendimento na base do Portão em Curitiba. Consulte escopo, orçamento e agendamento.',
    keywords: 'vistoria pre compra curitiba, laudo de carro usado, perito automotivo curitiba, comprar carro seguro, carplus vistorias',
    canonicalUrl: 'https://www.carplusvistorias.com.br/vistoria-pre-compra-curitiba',
    anchorText: 'Vistoria Pré Compra Curitiba'
  },
  {
    slug: 'avaliacao-veicular-pre-compra-curitiba',
    title: 'Avaliação Veicular Pré Compra Curitiba | Carplus Vistorias',
    h1: 'Avaliação Veicular Pré Compra Curitiba',
    description: 'Avaliação antes de comprar um veículo, com atendimento na base do Portão em Curitiba. Consulte escopo, orçamento e agendamento.',
    keywords: 'avaliacao veicular curitiba, vistoria pre compra, pericia automotiva curitiba, analise carro usado, carplus vistorias',
    canonicalUrl: 'https://www.carplusvistorias.com.br/avaliacao-veicular-pre-compra-curitiba',
    anchorText: 'Avaliação Veicular Pré Compra Curitiba'
  },
  {
    slug: 'inspecao-veicular-curitiba',
    title: 'Inspeção Veicular Antes da Compra Curitiba | Carplus Vistorias',
    h1: 'Inspeção Veicular Antes da Compra Curitiba',
    description: 'Avaliação antes de comprar um veículo, com atendimento na base do Portão em Curitiba. Consulte escopo, orçamento e agendamento.',
    keywords: 'inspecao veicular curitiba, vistoria cautelar, laudo cautelar completo, vistoria de compra, carplus vistorias',
    canonicalUrl: 'https://www.carplusvistorias.com.br/inspecao-veicular-curitiba',
    anchorText: 'Inspeção Veicular Antes da Compra Curitiba'
  },
  {
    slug: 'verificacao-procedencia-curitiba',
    title: 'Verificação de Procedência Veicular Curitiba | Carplus Vistorias',
    h1: 'Verificação de Procedência Veicular Curitiba',
    description: 'Avaliação antes de comprar um veículo, com atendimento na base do Portão em Curitiba. Consulte escopo, orçamento e agendamento.',
    keywords: 'verificacao de procedencia veicular curitiba, historico do veiculo, leilao sinistro seguradora, carplus vistorias',
    canonicalUrl: 'https://www.carplusvistorias.com.br/verificacao-procedencia-curitiba',
    anchorText: 'Verificação de Procedência Veicular Curitiba'
  },
  {
    slug: 'analise-veiculos-usados-curitiba',
    title: 'Análise Completa de Veículos Usados Curitiba | Carplus Vistorias',
    h1: 'Análise Completa de Veículos Usados Curitiba',
    description: 'Avaliação antes de comprar um veículo, com atendimento na base do Portão em Curitiba. Consulte escopo, orçamento e agendamento.',
    keywords: 'analise de veiculos usados curitiba, vistoria cautelar portao, carro usado completo, carplus vistorias',
    canonicalUrl: 'https://www.carplusvistorias.com.br/analise-veiculos-usados-curitiba',
    anchorText: 'Análise Completa de Veículos Usados Curitiba'
  },
  {
    slug: 'laudo-pre-compra-curitiba',
    title: 'Laudo Pré Compra Curitiba | Carplus Vistorias',
    h1: 'Laudo Pré Compra Curitiba',
    description: 'Avaliação antes de comprar um veículo, com atendimento na base do Portão em Curitiba. Consulte escopo, orçamento e agendamento.',
    keywords: 'laudo pre compra curitiba, laudo cautelar curitiba, vistoria de transferencia, vistoria portao, carplus vistorias',
    canonicalUrl: 'https://www.carplusvistorias.com.br/laudo-pre-compra-curitiba',
    anchorText: 'Laudo Pré Compra Curitiba'
  },
  {
    slug: 'check-up-veicular-curitiba',
    title: 'Check-up Veicular Antes da Compra Curitiba | Carplus Vistorias',
    h1: 'Check-up Veicular Antes da Compra Curitiba',
    description: 'Avaliação antes de comprar um veículo, com atendimento na base do Portão em Curitiba. Consulte escopo, orçamento e agendamento.',
    keywords: 'check-up veicular curitiba, carplus vistoria, perícia automotiva curitiba, análise veicular',
    canonicalUrl: 'https://www.carplusvistorias.com.br/check-up-veicular-curitiba',
    anchorText: 'Check-up Veicular Antes da Compra Curitiba'
  },
  {
    slug: 'analise-carro-usado-curitiba',
    title: 'Análise de Carro Usado Curitiba | Carplus Vistorias',
    h1: 'Análise de Carro Usado Curitiba',
    description: 'Avaliação antes de comprar um veículo, com atendimento na base do Portão em Curitiba. Consulte escopo, orçamento e agendamento.',
    keywords: 'analise de carro usado curitiba, vistoria cautelar curitiba, carros batidos sinistrados, carplus vistorias',
    canonicalUrl: 'https://www.carplusvistorias.com.br/analise-carro-usado-curitiba',
    anchorText: 'Análise de Carro Usado Curitiba'
  },
  {
    slug: 'consultoria-compra-veiculos-curitiba',
    title: 'Consultoria para Compra de Veículos Curitiba | Carplus Vistorias',
    h1: 'Consultoria para Compra de Veículos Curitiba',
    description: 'Avaliação antes de comprar um veículo, com atendimento na base do Portão em Curitiba. Consulte escopo, orçamento e agendamento.',
    keywords: 'consultoria para compra de veiculos curitiba, vistoria automotiva, laudo completo curitiba',
    canonicalUrl: 'https://www.carplusvistorias.com.br/consultoria-compra-veiculos-curitiba',
    anchorText: 'Consultoria para Compra de Veículos Curitiba'
  },
  {
    slug: 'avaliacao-automotiva-compra-curitiba',
    title: 'Avaliação Automotiva para Compra Curitiba | Carplus Vistorias',
    h1: 'Avaliação Automotiva para Compra Curitiba',
    description: 'Avaliação antes de comprar um veículo, com atendimento na base do Portão em Curitiba. Consulte escopo, orçamento e agendamento.',
    keywords: 'avaliacao automotiva para compra curitiba, laudo de vistoria curitiba, pericia cautelar, carplus vistorias',
    canonicalUrl: 'https://www.carplusvistorias.com.br/avaliacao-automotiva-compra-curitiba',
    anchorText: 'Avaliação Automotiva para Compra Curitiba'
  },
  {
    slug: 'vistoria-pre-compra-portao',
    title: 'Vistoria Pré Compra Portão - Curitiba | Carplus Vistorias',
    h1: 'Vistoria Pré Compra Portão',
    description: 'Avaliação antes de comprar um veículo, com atendimento na base do Portão em Curitiba. Consulte escopo, orçamento e agendamento.',
    keywords: 'vistoria pre compra portao, vistoria cautelar portao, perito carro portão curitiba',
    canonicalUrl: 'https://www.carplusvistorias.com.br/vistoria-pre-compra-portao',
    anchorText: 'Vistoria Pré Compra Portão'
  },
  {
    slug: 'vistoria-pre-compra-agua-verde',
    title: 'Vistoria Pré Compra Água Verde - Curitiba | Carplus Vistorias',
    h1: 'Vistoria Pré Compra Água Verde',
    description: 'Avaliação antes de comprar um veículo, com atendimento na base do Portão em Curitiba. Consulte escopo, orçamento e agendamento.',
    keywords: 'vistoria pre compra agua verde, pericia veicular agua verde curitiba',
    canonicalUrl: 'https://www.carplusvistorias.com.br/vistoria-pre-compra-agua-verde',
    anchorText: 'Vistoria Pré Compra Água Verde'
  },
  {
    slug: 'vistoria-pre-compra-capao-raso',
    title: 'Vistoria Pré Compra Capão Raso - Curitiba | Carplus Vistorias',
    h1: 'Vistoria Pré Compra Capão Raso',
    description: 'Avaliação antes de comprar um veículo, com atendimento na base do Portão em Curitiba. Consulte escopo, orçamento e agendamento.',
    keywords: 'vistoria pre compra capao raso, laudo cautelar capao raso, vistoria curitiba, carplus vistorias',
    canonicalUrl: 'https://www.carplusvistorias.com.br/vistoria-pre-compra-capao-raso',
    anchorText: 'Vistoria Pré Compra Capão Raso'
  },
  {
    slug: 'vistoria-pre-compra-bigorrilho',
    title: 'Vistoria Pré Compra Bigorrilho - Curitiba | Carplus Vistorias',
    h1: 'Vistoria Pré Compra Bigorrilho',
    description: 'Avaliação antes de comprar um veículo, com atendimento na base do Portão em Curitiba. Consulte escopo, orçamento e agendamento.',
    keywords: 'vistoria pre compra bigorrilho, perito automotivo champagnat, laudo cautelar champagnat',
    canonicalUrl: 'https://www.carplusvistorias.com.br/vistoria-pre-compra-bigorrilho',
    anchorText: 'Vistoria Pré Compra Bigorrilho'
  },
  {
    slug: 'vistoria-pre-compra-batel',
    title: 'Vistoria Pré Compra Batel - Curitiba | Carplus Vistorias',
    h1: 'Vistoria Pré Compra Batel',
    description: 'Avaliação antes de comprar um veículo, com atendimento na base do Portão em Curitiba. Consulte escopo, orçamento e agendamento.',
    keywords: 'vistoria pre compra batel, perito veiculos importados batel, laudo cautelar batel',
    canonicalUrl: 'https://www.carplusvistorias.com.br/vistoria-pre-compra-batel',
    anchorText: 'Vistoria Pré Compra Batel'
  },
  {
    slug: 'vistoria-pre-compra-novo-mundo',
    title: 'Vistoria Pré Compra Novo Mundo - Curitiba | Carplus Vistorias',
    h1: 'Vistoria Pré Compra Novo Mundo',
    description: 'Avaliação antes de comprar um veículo, com atendimento na base do Portão em Curitiba. Consulte escopo, orçamento e agendamento.',
    keywords: 'vistoria pre compra novo mundo, vistoria carro novo mundo, pericia veicular',
    canonicalUrl: 'https://www.carplusvistorias.com.br/vistoria-pre-compra-novo-mundo',
    anchorText: 'Vistoria Pré Compra Novo Mundo'
  },
  {
    slug: 'avaliacao-veicular-curitiba',
    title: 'Avaliação Veicular Curitiba - Profissional | Carplus Vistorias',
    h1: 'Avaliação Veicular Curitiba',
    description: 'Avaliação antes de comprar um veículo, com atendimento na base do Portão em Curitiba. Consulte escopo, orçamento e agendamento.',
    keywords: 'avaliacao veicular curitiba, vistoria cautelar curitiba, laudo cautelar',
    canonicalUrl: 'https://www.carplusvistorias.com.br/avaliacao-veicular-curitiba',
    anchorText: 'Avaliação Veicular Curitiba'
  },
  {
    slug: 'consultoria-compra-carros-curitiba',
    title: 'Consultoria de Compra de Carros Curitiba | Carplus Vistorias',
    h1: 'Consultoria de Compra de Carros Curitiba',
    description: 'Avaliação antes de comprar um veículo, com atendimento na base do Portão em Curitiba. Consulte escopo, orçamento e agendamento.',
    keywords: 'consultoria compra de carros curitiba, analise cautelar curitiba, vistoria carro usado, carplus vistorias',
    canonicalUrl: 'https://www.carplusvistorias.com.br/consultoria-compra-carros-curitiba',
    anchorText: 'Consultoria Compra de Carros'
  },
  {
    slug: 'verificacao-procedencia-veicular-curitiba',
    title: 'Verificação de Procedência Veicular Curitiba | Carplus Vistorias',
    h1: 'Verificação de Procedência Veicular Curitiba',
    description: 'Avaliação antes de comprar um veículo, com atendimento na base do Portão em Curitiba. Consulte escopo, orçamento e agendamento.',
    keywords: 'verificacao de procedencia veicular curitiba, carplus vistorias, laudo original de compra',
    canonicalUrl: 'https://www.carplusvistorias.com.br/verificacao-procedencia-veicular-curitiba',
    anchorText: 'Verificação de Procedência Veicular'
  }
];

const root = process.cwd();
const read = (file: string) => fs.readFileSync(path.join(root, 'public', file), 'utf8');
function save(slug: string, html: string) {
  if ((html.match(/<h1\b/g) || []).length !== 1) throw new Error('Invalid heading: ' + slug);
  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) JSON.parse(match[1]);
  if (/\[(?:Bairro|slug|title|description|h1|canonicalUrl)\]/.test(html)) throw new Error('Unresolved placeholder: ' + slug);
  const dir = path.join(root, 'public', slug);
  fs.mkdirSync(dir, {recursive: true});
  fs.writeFileSync(path.join(dir, 'index.html'), html);
  fs.writeFileSync(path.join(root, 'public', slug + '.html'), html);
}
const hqBlock = /<!-- carplus-hq-start -->[\s\S]*?<!-- carplus-hq-end -->(?:\r?\n)?/g;
function insertQuadrinhos(html: string, slug: string, preCompra = false) {
  const entry = '<section id="perguntas"';
  if (!html.includes(entry)) throw new Error('Ponto de inserção não encontrado: ' + slug);
  const hq = renderToStaticMarkup(createElement(AtendimentoQuadrinhos, { slug, preCompra }));
  if (!hq.includes('id="atendimento-em-quadrinhos"') || (hq.match(/<img\b/g) || []).length !== 4) {
    throw new Error('Quadrinhos incompletos: ' + slug);
  }
  const navEnd = 'href="#agendamento">Como agendar</a>';
  const jump = '<a class="text-primary underline underline-offset-4" href="#atendimento-em-quadrinhos">Guia em quadrinhos</a>';
  const clean = html.replace(hqBlock, '');
  return (clean.includes(jump) ? clean : clean.replace(navEnd, navEnd + jump)).replace(entry, () => '<!-- carplus-hq-start -->' + hq + '<!-- carplus-hq-end -->\n' + entry);
}
const template = read('_template-bairro.html');
const sitemap = read('mapa-do-site.html');
const locations = [...sitemap.matchAll(/href="\/vistoria-cautelar-([^".]+?)(?:\.html)?"[^>]*>Vistoria ([^<]+)<\/a>/g)];
const generated = new Set<string>();
for (const match of locations) {
  const slug = match[1];
  // Keep the separately reviewed Curitiba guide unchanged.
  if (slug === 'curitiba' || generated.has(slug)) continue;
  const name = match[2].trim().replace(/^(?:no|na|em|nas|nos) /, '');
  const html = template.replaceAll('[Bairro]', name).replaceAll('[slug]', slug);
  save('vistoria-cautelar-' + slug, insertQuadrinhos(html, slug));
  generated.add(slug);
}
// Keep the separately reviewed Curitiba guide and its existing route form intact.
fs.writeFileSync(path.join(root, 'public', 'vistoria-cautelar-curitiba.html'), insertQuadrinhos(read('vistoria-cautelar-curitiba.html'), 'curitiba'));
const preTemplate = read('_template-pre-compra.html');
for (const page of PRE_COMPRA_PAGES) {
  let html = preTemplate;
  for (const key of ['title', 'description', 'h1', 'canonicalUrl'] as const) html = html.replaceAll('[' + key + ']', page[key]);
  save(page.slug, insertQuadrinhos(html, page.slug, true));
}
console.log('Reviewed output: ' + generated.size + ' local pages and ' + PRE_COMPRA_PAGES.length + ' pre-purchase pages. Eight FAQs per page; JSON-LD parsed.');
