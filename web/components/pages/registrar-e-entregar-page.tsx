import { Callout } from '@/components/editorial/callout';
import { Checklist } from '@/components/editorial/checklist';
import { ExperimentLog } from '@/components/editorial/experiment-log';
import { PageHeader } from '@/components/editorial/page-header';
import { PageContents } from '@/components/editorial/page-contents';
import { PhaseNavigation } from '@/components/editorial/phase-navigation';
import { findHandbookPage } from '@/lib/handbook-pages';
import { registrarContent } from '@/lib/registrar-content';

const page = findHandbookPage(['registrar-e-entregar'])!;

const reportParts = [
  ['Hipótese', 'Qual pergunta a equipe queria investigar antes de mudar algo?'],
  ['Configuração', 'Que opção foi usada, o que permaneceu fixo e como a comparação foi feita?'],
  ['Resultado', 'Que evidências foram observadas, incluindo métricas por classe quando fizer sentido?'],
  ['Erros', 'Que confusão, caso ou limite apareceu ao olhar além do resumo?'],
  ['Decisão', 'O que a equipe manteve, descartou ou pretende testar depois?'],
  ['Justificativa', 'Que observação sustenta a decisão e quais limites continuam abertos?'],
];

const trailMap = [
  { title: 'Dados tabulares', topics: ['escolha de modelo e configuração', 'sinais ou características relevantes como associações', 'restrições de uso e a justificativa delas'], links: ['Explorar', 'Configurar', 'Modelar', 'Avaliar'] },
  { title: 'Visão computacional', topics: ['descritores escolhidos e a evidência para a escolha', 'confusões entre materiais e a leitura de imagens incorretas', 'regime assistivo ou autônomo, com suas condições e limites'], links: ['Explorar', 'Configurar', 'Avaliar'] },
  { title: 'Linguagem natural', topics: ['vazamento de dados e a separação entre treino e validação', 'termos associados como pistas que pedem contexto', 'restrição de uso e sinais para perceber degradação ao longo do tempo'], links: ['Configurar', 'Modelar', 'Avaliar'] },
];

export function RegistrarEEntregarPage() {
  return <article className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
    <PageHeader {...page} />
    <PageContents items={[{ href: '#relatorio', label: 'Relatório' }, { href: '#diario', label: 'Diário de experimento' }, { href: '#mapa-relatorio', label: 'Mapa por trilha' }, { href: '#entrega', label: 'Submissão e autoria' }]} />
    <section className="mt-12" aria-labelledby="relatorio">
      <p className="text-sm font-bold uppercase tracking-[.14em] text-primary">Do experimento ao relato</p>
      <h2 id="relatorio" className="mt-3 text-3xl font-semibold tracking-tight">Um relatório torna a decisão rastreável</h2>
      <p className="mt-4 max-w-3xl leading-7 text-muted-foreground">Relatem o caminho da equipe, não apenas uma conclusão. Um leitor deve conseguir entender qual pergunta guiou o teste, o que foi comparado, que evidência apareceu e por que a decisão faz sentido dentro dos limites observados.</p>
      <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{reportParts.map(([title, description]) => <article key={title} className="rounded-2xl border border-border bg-card p-5"><h3 className="text-lg font-semibold">{title}</h3><p className="mt-2 leading-7 text-muted-foreground">{description}</p></article>)}</div>
    </section>
    <section className="mt-16 grid gap-5 lg:grid-cols-2" aria-label="Como justificar uma decisão">
      <Callout kind="atencao" title="Justificativa genérica">“Escolhemos esta opção porque parece melhor.” A frase não diz qual comparação foi feita, que evidência a equipe observou nem onde a decisão pode falhar.</Callout>
      <Callout kind="conceito" title="Justificativa sustentada">“Nesta rodada, a equipe comparou uma alteração planejada e observou como os erros se distribuíram. Por isso, registrou a decisão provisória e uma pergunta para o próximo teste.” O exemplo é sintético: ele aponta a evidência e preserva as incertezas.</Callout>
    </section>
    <section className="mt-16" id="diario"><ExperimentLog entries={registrarContent.journal} title="Diário copiável · cada rodada deixa uma pista" /></section>
    <section className="mt-16" aria-labelledby="mapa-relatorio">
      <p className="text-sm font-bold uppercase tracking-[.14em] text-primary">Mapa de preparação</p>
      <h2 id="mapa-relatorio" className="mt-3 text-3xl font-semibold tracking-tight">Perguntas de relatório apontam para conceitos do percurso</h2>
      <p className="mt-4 max-w-3xl leading-7 text-muted-foreground">Os notebooks pedem que a equipe explique escolhas, evidências e limites próprios de cada trilha. Este mapa organiza os temas a preparar; ele não oferece respostas-modelo.</p>
      <div className="mt-7 grid gap-4 lg:grid-cols-3">{trailMap.map((trail) => <article key={trail.title} className="rounded-2xl border border-border bg-card p-5"><h3 className="text-xl font-semibold">{trail.title}</h3><ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">{trail.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul><p className="mt-4 text-sm font-medium">Prepare-se em: {trail.links.join(' · ')}</p></article>)}</div>
    </section>
    <section className="mt-16 grid gap-6 xl:grid-cols-2" id="entrega"><Checklist items={registrarContent.submissionChecklist} title="Arquivos e submissão" /><Checklist items={registrarContent.authorshipChecklist} title="Autoria e registro de IA" /></section>
    <PhaseNavigation current="/registrar-e-entregar" />
  </article>;
}
