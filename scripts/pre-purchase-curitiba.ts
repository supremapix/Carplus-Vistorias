const sectionClass = 'py-12 md:py-16 px-4 md:px-8 border-b border-zinc-800';
const headingClass = 'text-2xl md:text-3xl font-display font-bold text-white';
const paragraphClass = 'text-base md:text-lg text-zinc-300 leading-relaxed';
const linkClass = 'text-primary underline underline-offset-4';
const section = (id: string, title: string, contents: string) =>
  `<section id="${id}" class="${sectionClass}"><div class="max-w-5xl mx-auto space-y-5"><h2 class="${headingClass}">${title}</h2>${contents}</div></section>`;
const p = (text: string) => `<p class="${paragraphClass}">${text}</p>`;

const questions = [
  ['Dá para pedir a avaliação antes de fazer uma oferta?', 'Sim. Ao falar com a equipe sobre a vistoria, informe modelo, ano e o motivo da avaliação. Combine a apresentação do veículo com o vendedor antes de reservar horário.'],
  ['O que faço se o vendedor não puder apresentar o veículo?', 'Pergunte se existe outra data em que o carro possa ser apresentado. Não use fotos do anúncio como substituição das verificações que exigem ver o veículo.'],
  ['Vistoria pré-compra inclui avaliação mecânica?', 'Não presuma que inclui. Confirme com a equipe o escopo oferecido. Questões sobre ruídos, funcionamento ou desgaste podem exigir avaliação separada de um profissional de mecânica.'],
  ['Como ler um apontamento que eu não entendi?', 'Peça que a equipe diga em que parte do veículo está o apontamento, o que foi observado e o que não é possível concluir. Se a dúvida persistir, decida se precisa de outra avaliação antes de fechar.'],
  ['O que significa um item não verificado?', 'Significa que aquele ponto ficou fora da verificação ou não pôde ser concluído nas condições do exame. Não interprete o item como normal só porque não há um defeito registrado.'],
  ['Com quem preciso combinar o horário?', 'Confirme data, horário e condições com a Carplus, e combine a apresentação do veículo com o vendedor. O endereço publicado é a base do Portão, em Curitiba.'],
  ['Quais informações ajudam no primeiro contato?', 'Diga o modelo, o ano e se quer apoio para decidir uma compra. Informe o que chamou sua atenção no anúncio. Não envie placa, documentos ou dados pessoais no primeiro contato.'],
  ['O relatório decide se vale a pena comprar?', 'Não. Use o relatório junto de documentos e, quando necessária, avaliação mecânica. A decisão depende do que foi esclarecido e das dúvidas que ainda precisam ser resolvidas.'],
];

const before = section('avaliacao', 'Antes de marcar: combine a apresentação com o vendedor',
  p('Peça ao vendedor que reserve um horário em que o carro possa ser apresentado na base. Se você estiver comparando dois usados, anote para cada um o que chamou atenção no anúncio e o que ainda precisa esclarecer. Isso ajuda a fazer as mesmas perguntas antes de decidir.') +
  `<div class="grid md:grid-cols-2 gap-6"><article class="p-5 rounded-xl bg-zinc-900"><h3 class="font-bold text-white text-xl mb-3">O que a vistoria cobre?</h3>${p('A finalidade aqui é informar uma decisão de compra. Para entender as verificações de identificação, estrutura, pintura e histórico disponível, veja o <a class="'+linkClass+'" href="/vistoria-cautelar-curitiba">guia da vistoria cautelar em Curitiba</a>. Confirme o escopo com a equipe antes de agendar.')}</article><article class="p-5 rounded-xl bg-zinc-900"><h3 class="font-bold text-white text-xl mb-3">E a parte mecânica?</h3>${p('Se o carro apresenta um ruído, falha ou desgaste que você quer entender, pergunte se esse diagnóstico faz parte do serviço. Se não fizer, combine uma avaliação mecânica em separado. Um exame não deve ser presumido equivalente ao outro.')}</article></div>`
);
const booking = section('agendamento', 'Do agendamento à leitura do relatório',
  `<ol class="list-decimal pl-6 space-y-4 text-base md:text-lg"><li><strong>Ao pedir informações:</strong> diga o modelo, o ano, que está avaliando a compra e as dúvidas que quer esclarecer. Não inclua placa, documentos ou dados pessoais no primeiro contato.</li><li><strong>Antes de levar o carro:</strong> confirme o endereço da base do Portão, horário, orçamento, prazo estimado e o que está incluído. Combine a apresentação do veículo com o vendedor.</li><li><strong>Depois de receber o laudo:</strong> confira se o veículo e o escopo correspondem ao pedido. Separe o que foi observado do que não pôde ser verificado; um item não avaliado não equivale a um item sem problema.</li><li><strong>Antes de decidir:</strong> peça explicações sobre os apontamentos e avalie se o relatório responde às suas perguntas ou se ainda falta outra checagem. Não trate o laudo como garantia de ausência de defeitos.</li></ol>`
);
const faq = section('perguntas', 'Perguntas frequentes sobre a vistoria pré-compra', questions.map(([q, a]) =>
  `<details class="rounded-xl border border-zinc-700 bg-zinc-900 p-5"><summary class="cursor-pointer font-bold text-white text-lg">${q}</summary><p class="mt-4 text-zinc-300 leading-relaxed">${a}</p></details>`).join('\n'));

export function applyCuritibaPrePurchase(html: string) {
  const replaceOne = (source: string, pattern: RegExp, section: string) => {
    if (!pattern.test(source)) throw new Error('Missing central pre-purchase template section: ' + pattern);
    return source.replace(pattern, () => section);
  };
  let revised = replaceOne(html, /<p class="text-base md:text-lg text-zinc-300 leading-relaxed">Antes de comprar um carro usado,[\s\S]*?<\/p>/,
    p('Vai comprar um carro usado em Curitiba? Combine a apresentação com o vendedor, confirme o que a equipe vai avaliar na base do Portão e leia os apontamentos do relatório antes de fechar negócio.'));
  for (const [id, block] of [['avaliacao', before], ['agendamento', booking], ['perguntas', faq]]) {
    revised = replaceOne(revised, new RegExp('<section id="' + id + '"[\\s\\S]*?<\\/section>'), block);
  }
  return revised.replace('Atendimento na base do Portão para vistoria cautelar. Consulte escopo, orçamento e agendamento.',
    'Vistoria pré-compra na base do Portão, para reunir informações antes da decisão de compra. Confirme escopo, orçamento e agendamento.');
}
