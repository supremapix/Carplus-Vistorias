import fs from 'fs';
import path from 'path';
import { NEIGHBORHOODS_SEO, CITIES_SEO } from '../src/data';

function run() {
  const currentDir = process.cwd();
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

  // Normalize sitemap links to include .html extension for clean static compatibility
  sitemapHtml = sitemapHtml.replace(/href="\/vistoria-cautelar-([a-z0-9-]+)(?!\.html)"/g, 'href="/vistoria-cautelar-$1.html"');
  fs.writeFileSync(sitemapPath, sitemapHtml, 'utf-8');

  // Match all sitemap links of format: href="/vistoria-cautelar-([^"]+?)(?:\.html)?"
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

  // Create a looking map for custom descriptions in our source database
  const customDescriptions = new Map<string, string>();
  for (const item of NEIGHBORHOODS_SEO) {
    customDescriptions.set(item.name.toLowerCase(), item.description);
  }
  for (const item of CITIES_SEO) {
    customDescriptions.set(item.name.toLowerCase(), item.description);
  }

  // Iterate over each item to compile its personalized page
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const { slug, bairroGenitive, name } = item;

    // Pick 6 relative neighbor links for dense internal link mesh (perfect crawling performance)
    const neighbors: string[] = [];
    for (let j = 1; j <= 6; j++) {
      const neighborItem = items[(i + j) % items.length];
      const nhHtml = `<a href="/vistoria-cautelar-${neighborItem.slug}" class="bg-zinc-900 border border-zinc-800 hover:border-primary/50 text-zinc-300 hover:text-white p-3 rounded-lg transition-all truncate block font-bold">${neighborItem.name}</a>`;
      neighbors.push(nhHtml);
    }
    const neighborsHtml = neighbors.join('\n        ');

    // Retrieve custom description or generate highly-optimized local copywriting
    let desc = customDescriptions.get(name.toLowerCase());
    if (!desc) {
      if (slug.includes('sao-jose') || slug.includes('pinhais') || slug.includes('colombo') || slug.includes('araucaria') || slug.includes('campo-largo') || slug.includes('leste') || slug.includes('grande')) {
        // City copy
        desc = `A Carplus Vistorias atende compradores e moradores de ${name} com vistoria cautelar completa e perícia automotiva premium. Evite fraudes financeiras, sinistros e leilões na compra de veículos usados. Laudo técnico profissional emitido imediatamente de forma digital e impressa com seguro de responsabilidade civil incluso.`;
      } else {
        // Neighborhood copy
        desc = `Moradores de ${name} contam com a facilidade de acesso à Carplus Vistorias no Portão para realizar perícia veicular de 80+ itens e garantir compra segura com procedência. Nosso time de peritos credenciados realiza a análise estrutural completa do chassi, motor e histórico de antecedentes na hora.`;
      }
    }

    let pageContent = template;

    // Direct string template placeholder replacements
    pageContent = pageContent.replace(/\[slug\]/g, slug);
    pageContent = pageContent.replace(/\[bairro-genitive\]/g, bairroGenitive);
    pageContent = pageContent.replace(/\[Bairro\]/g, name);
    pageContent = pageContent.replace(/\[bairros-vizinhos\]/g, neighborsHtml);

    // Apply specific local reference replacements to sound extremely natural and premium:
    // First occurrence (meta description)
    pageContent = pageContent.replace('[referencia-local]', `para moradores de ${name}`);
    // Second occurrence (Por que fazer cautelar text)
    pageContent = pageContent.replace('[referencia-local]', `para quem reside ${bairroGenitive}`);
    // Third occurrence (Check-in Confortavel text)
    pageContent = pageContent.replace('[referencia-local]', `facilmente saindo de ${name}`);

    // Customize the main block on the body to insert the detailed local SEO text with heavy dynamic internal link mapping.
    // This creates an powerful indexing structure for search engines (Google spider crawling).
    const linkItem1 = items[(i + 15) % items.length];
    const linkItem2 = items[(i + 45) % items.length];

    const descWithLinks = desc
      .replace('Carplus Vistorias', '<a href="/" class="text-primary hover:underline hover:text-primary-light font-bold">Carplus Vistorias</a>')
      .replace('vistoria cautelar', '<a href="/#servicos" class="text-primary hover:underline font-bold">vistoria cautelar</a>')
      .replace('perícia veicular', '<a href="/#servicos" class="text-primary hover:underline font-bold">perícia veicular</a>')
      .replace('perícia automotiva', '<a href="/#servicos" class="text-primary hover:underline font-bold">perícia automotiva</a>');

    const targetParagraph = `Se você está comprando ou vendendo um veículo ${bairroGenitive} ou arredores, a segurança deve vir sempre em primeiro lugar. O mercado automotivo em Curitiba é agitado, e é comum encontrar automóveis que já passaram por leilões, possuem sinistros camuflados, chassis adulterados e reformas estruturais severas que comprometem a dirigibilidade e o valor de revenda.`;
    const customizedParagraph = `${descWithLinks}\n          O mercado automotivo na região de Curitiba é extremamente dinâmico e agitado. Por isso, ao negociar veículos ${bairroGenitive} ou em outros pontos da cidade, ter o apoio de peritos certificados é crucial. Além de ${bairroGenitive}, também emitimos laudos rápidos para donos de veículos procedentes de outras regiões próximas, tais como <a href="/vistoria-cautelar-${linkItem1.slug}.html" class="text-primary hover:underline hover:text-primary-light transition-colors font-bold">${linkItem1.name}</a> e <a href="/vistoria-cautelar-${linkItem2.slug}.html" class="text-primary hover:underline hover:text-primary-light transition-colors font-bold">${linkItem2.name}</a>, garantindo cobertura total. Para consultar as demais coberturas, confira o nosso <a href="/mapa-do-site.html" class="text-primary hover:underline hover:text-primary-light transition-colors font-bold">mapa do site</a> ou visite nossa página de <a href="/contato.html" class="text-primary hover:underline hover:text-primary-light transition-colors font-bold">agendamento e contato</a>.`;
    pageContent = pageContent.replace(targetParagraph, customizedParagraph);

    // Embed the crucial user-requested phrase exactly with its formatting:
    pageContent = pageContent.replace(
      'LAUDO EMITIDO NA HORA COM TOTAL GARANTIA',
      'LAUDO EMITIDO NA HORA - FALE COMS NOSSO TIME DE PERITOS'
    );

    // Save as folder: /public/vistoria-cautelar-${slug}/index.html
    const dirPath = path.join(currentDir, 'public', `vistoria-cautelar-${slug}`);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    fs.writeFileSync(path.join(dirPath, 'index.html'), pageContent, 'utf-8');

    // Save as fallback file: /public/vistoria-cautelar-${slug}.html for robust routing compatibilities
    fs.writeFileSync(path.join(currentDir, 'public', `vistoria-cautelar-${slug}.html`), pageContent, 'utf-8');
  }

  console.log(`Successfully compiled and generated all ${items.length} premium geo-located page systems!`);
}

run();
