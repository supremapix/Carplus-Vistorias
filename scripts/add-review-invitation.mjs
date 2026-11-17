import fs from 'node:fs';
import path from 'node:path';
const href = 'https://g.page/r/CUYqMR89zPNBEBM/review';
const section = `<!-- carplus-review-start --><section class="carplus-review" aria-labelledby="carplus-review-title"><div class="carplus-review-inner"><a class="carplus-review-art" href="${href}" target="_blank" rel="noopener noreferrer" aria-label="Avaliar a Carplus Vistorias no Google (abre em nova aba)"><img src="/images/avalie-carplus-vistorias.png" width="1536" height="1024" loading="lazy" decoding="async" alt="Carplus Vistorias: sua opinião faz a diferença. Avalie sua experiência no Google."></a><div><span class="carplus-review-label">JÁ FOI ATENDIDO PELA CARPLUS?</span><h2 id="carplus-review-title">Conte como foi sua experiência</h2><p>Seu feedback ajuda a melhorar nosso atendimento e orienta quem procura uma vistoria automotiva. Compartilhe sua opinião sincera sobre a Carplus Vistorias.</p><a class="carplus-review-cta" href="${href}" target="_blank" rel="noopener noreferrer">Escrever minha avaliação no Google</a><small class="carplus-review-note">O link abre o perfil da Carplus no Google em uma nova aba.</small></div></div></section><!-- carplus-review-end -->`;
let count = 0;
function walk(dir) {
 for(const file of fs.readdirSync(dir,{withFileTypes:true})) {
  const p=path.join(dir,file.name);
  if(file.isDirectory()){walk(p);continue;}
  if(!p.endsWith('.html') || file.name.startsWith('_'))continue;
  let html=fs.readFileSync(p,'utf8');
  if(!/<body\b/i.test(html))continue;
  html=html.replace(/<!-- carplus-review-start -->[\s\S]*?<!-- carplus-review-end -->/g,'');
  if(!html.includes('href="/review-invitation.css"'))html=html.replace('</head>','<link rel="stylesheet" href="/review-invitation.css">\n</head>');
  if(/<footer\b/i.test(html))html=html.replace(/<footer\b/i, section+'\n<footer');
  else html=html.replace('</body>',section+'\n</body>');
  if(!html.includes(section))throw new Error('Could not insert review: '+p);
  fs.writeFileSync(p,html);count++;
 }
}
walk('public');console.log(`Review invitation checked in ${count} static HTML files.`);
