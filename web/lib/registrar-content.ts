import type { ChecklistItem, ExperimentLogEntry, NextStepContent } from '@/lib/editorial-content';

export const registrarContent = {
  journal: [
    {
      hypothesis: 'Escrevam a pergunta verificável que motivou a rodada.',
      alteration: 'Registrem uma alteração e o que permaneceu igual.',
      result: 'Anotem as métricas e observações que a rodada produziu.',
      matrixFinding: 'Descrevam a classe ou direção de erro que merece investigação.',
      nextTest: 'Indiquem a próxima pergunta, não uma conclusão definitiva.',
    },
  ] satisfies ExperimentLogEntry[],
  submissionChecklist: [
    { id: 'arquivos', label: 'Reunimos no ZIP os arquivos solicitados pela atividade.', description: 'Confiram no guia e na plataforma quais arquivos, nomes e formatos são exigidos para a trilha.' },
    { id: 'versao', label: 'O ZIP corresponde à versão revisada do trabalho.', description: 'Abram a pasta antes do envio e confirmem que não faltou nem entrou um arquivo indevido.' },
    { id: 'prazo', label: 'Conferimos o prazo pela data e hora mostradas no servidor.', description: 'A referência é a plataforma ou o guia oficial, não o relógio de um integrante.' },
    { id: 'intervalo', label: 'Conferimos o intervalo e o limite de submissões nas regras oficiais.', description: 'Não suponham quantidade, intervalo ou possibilidade de reenvio: verifiquem a regra vigente antes de enviar.' },
    { id: 'status', label: 'Verificamos o status e guardamos a confirmação da submissão.', description: 'Registrem qual versão foi enviada e mantenham a confirmação disponível para a equipe.' },
  ] satisfies ChecklistItem[],
  authorshipChecklist: [
    { id: 'entendimento', label: 'Cada integrante consegue explicar a decisão registrada.', description: 'A entrega representa o entendimento e as escolhas da equipe.' },
    { id: 'fontes', label: 'Identificamos materiais externos que ajudaram na compreensão.', description: 'Usem apenas a ajuda permitida e atribuam o que precisou ser consultado.' },
    { id: 'ia-ferramenta', label: 'Registramos a ferramenta de IA generativa usada, se houve uso.', description: 'Anotem a ferramenta e a finalidade da consulta.' },
    { id: 'ia-verificacao', label: 'Registramos como a equipe verificou e decidiu usar ou descartar a sugestão.', description: 'Uma sugestão não substitui leitura, teste, autoria ou responsabilidade da equipe.' },
  ] satisfies ChecklistItem[],
  nextStep: { href: '/diario-de-experimento', label: 'Consulta rápida', title: 'Mantenham o diário perto do notebook', description: 'O mesmo modelo de registro ajuda a transformar cada rodada em material para o relatório.' } satisfies NextStepContent,
};
