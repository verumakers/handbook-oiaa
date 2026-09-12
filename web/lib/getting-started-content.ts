import type { ChecklistItem, NextStepContent } from '@/lib/editorial-content';

export const gettingStartedContent = {
  purpose: [
    {
      title: 'Estudar',
      description:
        'Ler uma explicação com calma, fazer perguntas e relacionar um conceito ao que vocês observam nos dados.',
    },
    {
      title: 'Consultar',
      description:
        'Voltar a uma definição, a um checklist ou a uma pergunta-guia enquanto trabalham no notebook.',
    },
    {
      title: 'Receber uma solução',
      description:
        'Não é o objetivo deste material. A decisão, a implementação e a justificativa da entrega pertencem à equipe.',
    },
  ],
  tutor: {
    can: [
      'Explicar conceitos, termos do notebook e mensagens de erro.',
      'Fazer perguntas que ajudem a equipe a observar evidências e comparar testes.',
      'Apoiar a leitura de resultados, a organização do time e o registro das decisões.',
    ],
    cannot: [
      'Preencher lacunas, escrever a solução ou escolher uma configuração pela equipe.',
      'Indicar uma resposta para o desafio ou compartilhar estratégias entre equipes.',
      'Transformar uma dúvida em código copiado sem que a equipe compreenda e decida.',
    ],
  },
  aiRecord: [
    ['Ferramenta', 'Qual ferramenta foi usada?'],
    ['Finalidade', 'Que dúvida ou tarefa ela ajudou a investigar?'],
    ['Verificação', 'Como a equipe conferiu a explicação ou a sugestão?'],
    [
      'Decisão',
      'O que a equipe decidiu manter, adaptar ou descartar — e por quê?',
    ],
  ],
  platformFlow: [
    'Façam login na plataforma com a conta indicada pela organização e confirmem que acessaram a trilha certa.',
    'Abram no Colab o notebook disponibilizado para a atividade; leiam as células de texto antes de alterar qualquer opção.',
    'Crie uma cópia de trabalho no Drive da equipe ou da pessoa responsável, conforme o guia oficial.',
    'Execute as células em ordem. Quando houver erro, localizem a célula e confiram o que precisava ter sido executado antes.',
    'Gere os arquivos solicitados apenas depois de revisar a execução e registrar o que a equipe observou.',
    'Submeta pela plataforma seguindo as regras e o prazo oficiais; guardem a confirmação e a versão enviada.',
  ],
  beforeNotebook: [
    {
      id: 'trilha',
      label: 'Confirmamos a trilha e o objetivo da atividade.',
      description: 'Cada pessoa sabe qual problema o notebook apresenta.',
    },
    {
      id: 'acesso',
      label: 'Temos acesso à plataforma e uma conta de trabalho definida.',
      description: 'Evitem depender de um único login no momento da entrega.',
    },
    {
      id: 'copia',
      label: 'Sabemos onde salvar a cópia no Drive.',
      description:
        'A cópia preserva o notebook original e permite registrar o trabalho da equipe.',
    },
    {
      id: 'papel',
      label: 'Combinamos os papéis da primeira rodada.',
      description:
        'Os papéis podem mudar a cada etapa para que todos aprendam.',
    },
    {
      id: 'registro',
      label: 'Abrimos um espaço para anotar hipóteses, evidências e decisões.',
      description: 'O diário ajuda a explicar o percurso no relatório.',
    },
  ] satisfies ChecklistItem[],
  beforeSend: [
    {
      id: 'arquivo',
      label:
        'Conferimos que os arquivos solicitados foram gerados pela versão revisada do notebook e reunidos no ZIP de envio.',
    },
    {
      id: 'revisao',
      label:
        'Lemos o que a execução mostrou e verificamos se o conteúdo do ZIP corresponde à entrega que pretendíamos enviar.',
    },
    {
      id: 'autoria',
      label:
        'A equipe consegue explicar suas escolhas e registrou qualquer uso de IA generativa.',
    },
    {
      id: 'regras',
      label:
        'Conferimos formato, prazo, limite de submissões e demais regras no guia oficial.',
    },
    {
      id: 'confirmacao',
      label:
        'Guardamos a confirmação da submissão e identificamos a versão enviada.',
    },
  ] satisfies ChecklistItem[],
  roles: [
    {
      title: 'Ler e interpretar',
      description:
        'Lê o enunciado e as células de texto, reformula o objetivo e aponta dúvidas para o grupo.',
    },
    {
      title: 'Operar o notebook',
      description:
        'Executa as células com o grupo acompanhando, sem pular etapas ou ocultar erros.',
    },
    {
      title: 'Registrar',
      description:
        'Anota hipótese, mudança, evidência e a decisão tomada para o diário e o relatório.',
    },
  ],
  nextStep: {
    href: '/explorar',
    label: 'Próxima etapa',
    title: 'Comece explorando',
    description:
      'Antes de testar uma opção, observem o problema, os dados e as perguntas que a equipe pode investigar.',
  } satisfies NextStepContent,
};
