import React from 'react';
import { cautelarLocalities, preCompraLocalities } from './atendimento-localidades';

type Scenario = {
  theme: string; question: string; prep: string; check: string; report: string;
};
const scenarios: Scenario[] = [
  { theme: 'Compra de particular', question: 'Vi o carro de um particular. Posso combinar para ele apresentar o veículo?', prep: 'Alinhe com quem vende a apresentação do carro na base. Envie modelo, ano e a dúvida que você quer esclarecer.', check: 'Confirme com a equipe quais verificações da vistoria foram contratadas e quais documentos levar.', report: 'Use as observações do laudo e os documentos do vendedor para decidir quais perguntas ainda precisam de resposta.' },
  { theme: 'Diferença na pintura', question: 'Uma porta parece de outra cor sob o sol. Isso esclarece o que aconteceu?', prep: 'Informe qual peça chamou sua atenção e em que condições você viu a diferença.', check: 'Peça que expliquem como a pintura observada e os pontos de estrutura avaliados são considerados em conjunto.', report: 'Uma repintura isolada não explica a extensão de um reparo. Leia a descrição antes de tirar uma conclusão.' },
  { theme: 'Compra negociada à distância', question: 'Só vi fotos do veículo. O que dá para combinar antes de ir?', prep: 'Confirme com o vendedor se o carro pode ser apresentado para avaliação e diga à equipe o que não ficou claro no anúncio.', check: 'A avaliação combinada é do carro que for apresentado. Pergunte antes quais verificações precisam ser presenciais.', report: 'Cruze o que aparece no laudo com as fotos e as informações do anúncio. Peça explicação para qualquer divergência.' },
  { theme: 'Anúncio e documentos', question: 'O ano que diz no anúncio parece diferente do que o vendedor me falou. O que faço?', prep: 'Anote a informação que diverge e informe modelo, ano declarado e finalidade da vistoria no contato.', check: 'Pergunte quais identificadores e dados documentais podem ser conferidos no serviço escolhido.', report: 'Peça que mostrem onde a divergência está descrita e esclareça-a com o vendedor antes de decidir.' },
  { theme: 'Laudo antigo', question: 'O vendedor tem um laudo de meses atrás. Vale conferir de novo?', prep: 'Veja a data e quais itens foram analisados no documento anterior. Informe o motivo de pedir avaliação agora.', check: 'Compare o escopo do documento antigo com o da vistoria solicitada. A situação observada pode ter mudado.', report: 'Compare datas, itens verificados e limitações. Não trate relatórios de épocas diferentes como equivalentes.' },
  { theme: 'Histórico com lacunas', question: 'Se não aparece nada na consulta, já dá para concluir que nunca ocorreu um reparo?', prep: 'Informe se sua dúvida é sobre histórico, pintura ou estrutura. São verificações diferentes.', check: 'Peça para a equipe explicar as fontes incluídas e o que não pode ser concluído a partir delas.', report: 'Ausência de registro consultado não prova ausência de ocorrência. Leia os limites da consulta junto com a avaliação física.' },
  { theme: 'Dúvida sobre mecânica', question: 'Quero saber se o carro precisa de manutenção. A cautelar responde a isso?', prep: 'Diga se a sua preocupação é com procedência, estrutura, desgaste ou funcionamento.', check: 'Confirme separadamente se existe avaliação mecânica no escopo ou se você deve consultar um profissional de mecânica.', report: 'Use cada avaliação para o que ela examinou. O laudo cautelar não prevê defeitos futuros.' },
  { theme: 'Preparação para venda', question: 'Vou anunciar meu carro. Como compartilho os apontamentos com quem comprar?', prep: 'Informe à equipe que você pretende apresentar o resultado a interessados. Pergunte como será entregue o relatório.', check: 'Peça que expliquem os itens examinados e que observações podem exigir contexto.', report: 'Mostre o relatório completo, com a data, sem ocultar ressalvas ou apresentar conclusões além do documento.' },
  { theme: 'Dois carros parecidos', question: 'Estou comparando dois carros do mesmo modelo. Como uso as vistorias sem misturar tudo?', prep: 'Organize as informações separadamente e informe o modelo, o ano e a finalidade para cada veículo.', check: 'Se a intenção é comparar, pergunte se o escopo consultado pode ser o mesmo para os dois veículos.', report: 'Compare itens equivalentes no relatório de cada carro. Um laudo não substitui a avaliação do outro.' },
  { theme: 'Reparo declarado', question: 'O vendedor contou que houve um reparo no para-lama. O que vale perguntar?', prep: 'Informe qual peça foi reparada e se o vendedor tem fotos ou documentos do serviço para esclarecer o contexto.', check: 'Converse sobre os pontos de pintura e estrutura abrangidos pela vistoria, sem presumir o que será encontrado.', report: 'Leia como o apontamento foi registrado e peça ajuda para distinguir reparo de acabamento de observações estruturais.' },
  { theme: 'Finalidade da avaliação', question: 'Estou transferindo o veículo. É a mesma coisa que fazer uma cautelar?', prep: 'Explique à equipe que sua dúvida é sobre transferência antes de contratar. Para o procedimento oficial, consulte o Detran-PR.', check: 'Não trate a cautelar como substituta automática de uma exigência oficial; confirme a finalidade de cada serviço.', report: 'Separe relatório cautelar e documentos da transferência. Cada um responde a uma pergunta diferente.' },
  { theme: 'Organização com o vendedor', question: 'O vendedor e eu temos horários diferentes. Como preparo a ida ao Portão?', prep: 'Alinhe quem vai apresentar o carro e informe à equipe horários possíveis antes de sair.', check: 'Confirme endereço, o que levar e como receber o relatório quando a avaliação for contratada.', report: 'Reserve um momento para entender o laudo antes de retomar a negociação; consulte o prazo com a equipe.' },
  { theme: 'Numeração do veículo', question: 'O vendedor mencionou que trocou o motor. Como levo essa informação para a vistoria?', prep: 'Informe o que foi relatado e pergunte o que vale levar para esclarecer a identificação do veículo.', check: 'Confirme se a conferência dos identificadores relevantes está prevista no escopo contratado.', report: 'Peça explicação para eventual divergência; não conclua regularidade ou irregularidade só pela fala do vendedor.' },
  { theme: 'Orçamento antes de deslocar', question: 'Ainda não sei o que está incluído. O que confirmo antes de ir ao Portão?', prep: 'Envie modelo, ano, finalidade e sua dúvida principal. Consulte valor, escopo e disponibilidade.', check: 'Na apresentação do carro, retome o que foi combinado. Pergunte se uma verificação desejada ficou fora do serviço.', report: 'Ao ler o relatório, veja se a sua pergunta foi respondida e quais itens precisariam de outra avaliação.' },
  { theme: 'Lendo os apontamentos', question: 'Vi a palavra “apontamento” em um laudo. Todo apontamento quer dizer a mesma coisa?', prep: 'Anote o trecho exato que você não entendeu e diga se a dúvida é de identificação, pintura, estrutura ou histórico.', check: 'Peça à equipe para separar a observação direta do que depende de documentos ou consulta adicional.', report: 'Leia a descrição do item inteiro. Se a origem ou a extensão não estiver clara, peça esclarecimento.' },
  { theme: 'Fotos insuficientes', question: 'Nas fotos o carro parecia uniforme, mas pessoalmente notei um desalinhamento. Como explico?', prep: 'Indique a área percebida, sem tratar a diferença como prova de colisão.', check: 'Pergunte se aquela parte está entre os pontos observados e como a equipe registra o que consegue verificar.', report: 'Não transforme uma diferença visual em diagnóstico por conta própria. Confirme o significado do registro.' },
  { theme: 'O que o serviço não cobre', question: 'Uma proposta tem só a palavra “vistoria”. Como descubro o que vou receber?', prep: 'Peça os itens avaliados em linguagem clara e explique por que você quer a avaliação.', check: 'Confira separadamente identificação, estrutura, pintura e pesquisa de histórico para saber quais estão incluídos.', report: 'Leia os limites do resultado e não use o laudo como promessa de seguro, financiamento ou valor de revenda.' },
  { theme: 'Primeiro carro usado', question: 'É meu primeiro carro usado. Que perguntas faço antes de fechar?', prep: 'Anote o que o vendedor informou e quais pontos não sabe avaliar. Compartilhe modelo, ano e finalidade.', check: 'Peça para a equipe explicar com exemplos a diferença entre conferir documentos, observar a pintura e examinar a estrutura.', report: 'Use o relatório para organizar as próximas perguntas, inclusive as que pedem uma avaliação mecânica à parte.' },
];

const localityScenarios: Record<string, number> = {
  'curitiba':6, 'portao':13, 'abranches':11, 'agua-verde':1, 'batel':2, 'bigorrilho':4, 'capao-raso':0, 'novo-mundo':9,
  'cic':12, 'sao-jose-dos-pinhais':2, 'pinhais':8, 'colombo':13, 'araucaria':11, 'almirante-tamandare':5,
  'campo-largo':3, 'campo-magro':11, 'fazenda-rio-grande':0, 'quatro-barras':13, 'campina-grande-do-sul':2,
  'mandirituba':11, 'balsa-nova':14, 'rio-branco-do-sul':13, 'itaperucu':3, 'tijucas-do-sul':2,
};

const sceneArts = [
  'Pessoa compara a foto de um carro usado no celular com o veículo à sua frente.',
  'Cliente e profissional conversam ao lado do carro no espaço de atendimento.',
  'Profissional observa a lateral do carro e anota informações da avaliação.',
  'Cliente e profissional conversam sobre um relatório ao lado do veículo.',
];
const slot = (s: string) => Array.from(s).reduce((n, c) => (n * 31 + c.charCodeAt(0)) >>> 0, 0);

export default function AtendimentoQuadrinhos({ slug, preCompra = false }: {
  slug: string; preCompra?: boolean;
}) {
  const localities = preCompra ? preCompraLocalities : cautelarLocalities;
  if (!Object.hasOwn(localities, slug)) return null;
  const locality = localities[slug];
  const scenario = scenarios[(preCompra ? slot('compra-' + slug) : localityScenarios[slug] ?? slot(slug)) % scenarios.length];
  const cityIntro = locality === 'Curitiba'
    ? 'O atendimento é na base do Portão, em Curitiba.'
    : locality === 'Portão'
      ? 'O atendimento é na própria base do Portão, em Curitiba.'
      : `Para quem parte de ${locality}: a avaliação é combinada para a base do Portão, em Curitiba.`;
  const parts = [
    { title: '01 · Primeiro contato', label: 'Cliente', speech: scenario.question },
    { title: '02 · Combine a apresentação do carro', label: 'Orientação', speech: scenario.prep },
    { title: '03 · Confira o que será avaliado', label: 'Orientação', speech: scenario.check },
    { title: '04 · Leia o laudo antes de decidir', label: 'Orientação', speech: scenario.report },
  ];
  return (
    <section id="atendimento-em-quadrinhos" aria-labelledby="carplus-hq-title" className="scroll-mt-24 border-b border-zinc-800 bg-zinc-950 px-4 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-5xl space-y-5">
        <p className="font-bold uppercase tracking-wide text-primary">Guia ilustrado · {locality}</p>
        <h2 id="carplus-hq-title" className="font-display text-2xl font-bold text-white md:text-3xl">{preCompra ? 'A avaliação pré-compra em quadrinhos' : 'Do agendamento ao laudo, em quadrinhos'}</h2>
        <p className="text-base leading-relaxed text-zinc-300 md:text-lg">{cityIntro} Veja um exemplo de como começar, preparar a apresentação do carro e usar as informações da avaliação.</p>
        <p className="text-sm text-zinc-400">Caso fictício · Ilustrações geradas por IA. Não retratam clientes nem instalações da Carplus.</p>
        <p className="font-semibold text-white">Neste exemplo: {scenario.theme}</p>
        <ol className="grid list-none gap-4 sm:grid-cols-2">
          {parts.map((part, index) => (
            <li key={part.title} className="overflow-hidden rounded-xl border border-zinc-700 bg-zinc-900">
              <img className="block h-auto w-full" width="560" height="420" loading="lazy" decoding="async" src={`/images/atendimento-vistoria/quadro-${index + 1}.webp`} alt={sceneArts[index]} />
              <div className="space-y-2 p-4 md:p-5">
                <h3 className="font-display text-lg font-bold text-white">{part.title}</h3>
                <p className="text-base leading-relaxed text-zinc-300"><strong className="text-white">{part.label}:</strong> {part.speech}</p>
              </div>
            </li>
          ))}
        </ol>
        <a className="inline-flex min-h-11 items-center rounded-lg bg-emerald-700 px-5 py-3 font-bold text-white hover:bg-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4" href="https://wa.me/5541988740258">Consultar a Carplus pelo WhatsApp</a>
      </div>
    </section>
  );
}
