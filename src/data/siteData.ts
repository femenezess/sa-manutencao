export interface ExecutedServiceItem {
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceData {
  slug: string;
  index: string;
  name: string;
  shortName: string;
  heroTitle: string;
  heroDescription: string;
  cardSummary: string;
  normSummary: string;
  presentationParagraphs: string[];
  executedServices: ExecutedServiceItem[];
  applications: {
    segment: string;
    detail: string;
  }[];
  technicalDifferentials: {
    title: string;
    description: string;
  }[];
  safetyAndNorms: {
    title: string;
    subtitle: string;
    items: string[];
  };
  faqs: ServiceFAQ[];
  relatedSlugs: string[];
  seo: {
    title: string;
    description: string;
    primaryKeyword: string;
    secondaryKeywords: string[];
  };
  whatsappMessage: string;
}

export interface SegmentItem {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  commonDemands: string[];
  recommendedServices: string[];
  whatsappText: string;
}

export interface RegionalCity {
  name: string;
  state: string;
  tag: string;
  corridor: string;
  description: string;
  focusAreas: string[];
  coordinates: { x: number; y: number };
}

export const COMPANY_INFO = {
  name: 'S.A Manutenção',
  signature: 'Soluções Completas em Manutenção Industrial, Predial e Comercial.',
  location: 'Salto – SP',
  regionList: ['Salto', 'Itu', 'Indaiatuba', 'Porto Feliz', 'Sorocaba'],
  phoneDisplay: '(11) 95145-9102',
  whatsappRaw: '5511951459102',
  instagramHandle: '@manutencao.araujo',
  instagramUrl: 'https://www.instagram.com/manutencao.araujo/',
  defaultWhatsappMessage: 'Olá! Gostaria de solicitar um orçamento com a S.A Manutenção.',
  mission: 'Manter operações funcionando, seguras e apresentáveis, enquanto nossos clientes concentram seus esforços no próprio negócio.',
  valueProposition: 'Um único parceiro para diferentes necessidades de manutenção.',
};

export function getWhatsAppLink(customMessage?: string): string {
  const text = encodeURIComponent(customMessage || COMPANY_INFO.defaultWhatsappMessage);
  return `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${text}`;
}

export const SERVICES_DATA: ServiceData[] = [
  {
    slug: 'manutencao-eletrica',
    index: '01',
    name: 'Manutenção Elétrica',
    shortName: 'Elétrica Industrial e Predial',
    heroTitle: 'MANUTENÇÃO ELÉTRICA PREDIAL, COMERCIAL E INDUSTRIAL.',
    heroDescription:
      'Nosso principal segmento de atuação. Realizamos instalação, manutenção preventiva e corretiva de sistemas elétricos de baixa tensão, atendendo desde pequenos comércios até condomínios e estruturas industriais.',
    cardSummary:
      'Instalações elétricas, montagem de quadros de distribuição (QDF), correção de sobrecargas, balanceamento de fases e manutenção preventiva e corretiva.',
    normSummary: 'NBR 5410 · NR-10 · Baixa Tensão',
    presentationParagraphs: [
      'A infraestrutura elétrica é a espinha dorsal de qualquer operação industrial, comercial ou condominial. Uma falha em um quadro de distribuição, sobrecarga de circuito ou curto-circuito não planejado pode paralisar máquinas, comprometer mercadorias refrigeradas e gerar sérios riscos patrimoniais.',
      'A S.A Manutenção nasceu como especialista em serviços elétricos e atua com rigor técnico no diagnóstico, instalação, adequação e manutenção de sistemas elétricos de baixa tensão em Salto, Itu, Indaiatuba, Porto Feliz e Sorocaba.',
      'Todos os serviços são orientados pelas normas técnicas aplicáveis, especialmente a ABNT NBR 5410 (Instalações Elétricas de Baixa Tensão) e a NR-10 (Segurança em Instalações e Serviços em Eletricidade), garantindo confiabilidade operacional e proteção contra surtos e choques elétricos.',
    ],
    executedServices: [
      {
        title: 'Instalações elétricas completas',
        description: 'Execução de pontos de força, iluminação técnica, eletrocalhas, perfilados e infraestrutura em ambientes industriais, comerciais e prediais.',
      },
      {
        title: 'Manutenção preventiva e corretiva',
        description: 'Atendimento programado para evitar paradas inesperadas e intervenção ágil para restabelecimento de circuitos com falha.',
      },
      {
        title: 'Montagem e organização de quadros (QDF)',
        description: 'Reestruturação de quadros de distribuição de força e luz, identificação de circuitos, barramentos, terminais e organização de cabos.',
      },
      {
        title: 'Instalação de DPS e DR',
        description: 'Implementação de Dispositivos de Proteção contra Surtos (DPS) e Diferencial Residual (DR) para proteção de equipamentos e vidas.',
      },
      {
        title: 'Instalação e substituição de disjuntores',
        description: 'Dimensionamento correto e troca de disjuntores termomagnéticos desgastados ou subdimensionados.',
      },
      {
        title: 'Balanceamento de fases',
        description: 'Redistribuição técnica de cargas entre fases para eliminar aquecimento excessivo de condutores e desarmes constantes.',
      },
      {
        title: 'Adequação de padrão de entrada',
        description: 'Regularização e atualização de entrada de energia conforme exigências técnicas e demanda de carga instalada.',
      },
      {
        title: 'Correção de sobrecargas e curtos-circuitos',
        description: 'Rastreamento técnico com instrumentação de medição para eliminar pontos quentes, fugas de corrente e falhas de isolamento.',
      },
      {
        title: 'Inspeções e relatórios técnicos',
        description: 'Levantamento detalhado das condições das instalações elétricas com registro fotográfico e plano de ação corretivo.',
      },
    ],
    applications: [
      {
        segment: 'Indústrias e Galpões Logísticos',
        detail: 'Alimentação de máquinas, quadros de distribuição industrial, iluminação de alto pé-direito e proteção de comandos.',
      },
      {
        segment: 'Comércios, Lojas e Restaurantes',
        detail: 'Dimensionamento para equipamentos de refrigeração, climatização, fornos comerciais e iluminação de destaque sem queda de tensão.',
      },
      {
        segment: 'Condomínios Residenciais e Comerciais',
        detail: 'Manutenção de bombas de recalque, iluminação de áreas comuns, portarias, garagens e quadros gerais.',
      },
      {
        segment: 'Empresas e Escritórios Corporativos',
        detail: 'Circuitos estabilizados para estações de trabalho, servidores, climatização e proteção contra surtos elétricos.',
      },
    ],
    technicalDifferentials: [
      {
        title: 'Diagnóstico Preciso com Instrumentação',
        description: 'Identificamos a causa raiz de aquecimentos, desarmes e fugas de corrente antes de substituir componentes.',
      },
      {
        title: 'Organização e Identificação Técnica',
        description: 'Quadros elétricos entregues limpos, anilhados e com identificação clara de cada circuito para facilitar futuras intervenções.',
      },
      {
        title: 'Planejamento para Mínima Parada',
        description: 'Programamos desligamentos e manutenções críticas em horários que preservem o fluxo produtivo ou comercial do cliente.',
      },
    ],
    safetyAndNorms: {
      title: 'Conformidade Técnica: NBR 5410 e NR-10',
      subtitle: 'Execução rigorosamente alinhada às diretrizes de engenharia e segurança em eletricidade.',
      items: [
        'Dimensionamento adequado de condutores, barramentos e dispositivos de proteção conforme a ABNT NBR 5410.',
        'Procedimentos de desenergização, bloqueio, sinalização e teste de ausência de tensão alinhados à NR-10.',
        'Utilização obrigatória de EPIs dielétricos, luvas isolantes, capacetes e ferramental isolado para 1000V.',
        'Prevenção ativa contra incêndios de origem elétrica provocados por conexões frouxas ou cabos subdimensionados.',
      ],
    },
    faqs: [
      {
        question: 'Quais sinais indicam que o quadro elétrico (QDF) da empresa precisa de manutenção urgente?',
        answer:
          'Desarmes frequentes de disjuntores, cheiro de queimado próximo ao quadro, cabos ou disjuntores aquecendo, oscilações na iluminação quando equipamentos ligam e fios emaranhados sem identificação são sinais claros de sobrecarga ou mau contato que exigem inspeção imediata.',
      },
      {
        question: 'Qual a importância de instalar DPS e DR nas instalações elétricas?',
        answer:
          'O DR (Dispositivo Diferencial Residual) protege pessoas contra choques elétricos graves ao desligar o circuito em milissegundos caso detecte fuga de corrente. Já o DPS (Dispositivo de Proteção contra Surtos) protege máquinas, computadores e placas eletrônicas contra descargas atmosféricas (raios) e picos da rede elétrica.',
      },
      {
        question: 'A S.A Manutenção realiza atendimento elétrico em quais cidades?',
        answer:
          'Nossa base operacional está em Salto – SP e atendemos com agilidade empresas, indústrias, comércios e condomínios em Salto, Itu, Indaiatuba, Porto Feliz e Sorocaba.',
      },
      {
        question: 'Como funciona a solicitação de orçamento para manutenção elétrica?',
        answer:
          'Basta entrar em contato pelo WhatsApp (11) 95145-9102 ou pelo formulário do site. Avaliamos sua necessidade técnica e, quando necessário, realizamos vistoria no local para apresentar um orçamento técnico detalhado e sem custo.',
      },
    ],
    relatedSlugs: ['manutencao-predial', 'solda-e-serralheria', 'pintura-industrial-e-comercial'],
    seo: {
      title: 'Manutenção Elétrica em Salto, Itu e Indaiatuba | S.A Manutenção',
      description:
        'Manutenção elétrica industrial, predial e comercial em Salto, Itu, Indaiatuba, Porto Feliz e Sorocaba. Quadros QDF, NBR 5410, NR-10, instalações e reparos.',
      primaryKeyword: 'Manutenção elétrica em Salto SP',
      secondaryKeywords: [
        'Eletricista industrial em Salto',
        'Manutenção elétrica comercial',
        'Montagem de quadro elétrico QDF',
        'Manutenção elétrica em Itu e Indaiatuba',
      ],
    },
    whatsappMessage: 'Olá! Gostaria de solicitar um orçamento de Manutenção Elétrica com a S.A Manutenção.',
  },
  {
    slug: 'manutencao-predial',
    index: '02',
    name: 'Manutenção Predial',
    shortName: 'Conservação e Sistemas Prediais',
    heroTitle: 'MANUTENÇÃO PREDIAL COMPLETA. UM ÚNICO RESPONSÁVEL.',
    heroDescription:
      'Centralizamos as principais demandas de manutenção predial em um único parceiro técnico, facilitando a rotina de síndicos, administradores e gestores de empresas.',
    cardSummary:
      'Elétrica, hidráulica, reparos civis leves, checklists preventivos, inspeções prediais e relatórios técnicos centralizados em um único fornecedor.',
    normSummary: 'Checklists Preventivos · Gestão Integrada',
    presentationParagraphs: [
      'Gerenciar múltiplos prestadores avulsos para cada pequeno reparo elétrico, vazamento hidráulico, ajuste estrutural ou conservação de fachada consome tempo precioso de síndicos, gestores de facilities e empresários.',
      'A S.A Manutenção resolve esse gargalo centralizando a manutenção predial em um único fornecedor técnico estruturado. Atuamos tanto em atendimentos corretivos pontuais quanto por meio de rotinas e checklists preventivos periódicos.',
      'Com atendimento em Salto, Itu, Indaiatuba, Porto Feliz e Sorocaba, garantimos que edifícios comerciais, condomínios, escritórios e plantas industriais permaneçam seguros, funcionais e bem conservados durante todo o ano.',
    ],
    executedServices: [
      {
        title: 'Manutenção elétrica predial',
        description: 'Sensores de presença, iluminação de emergência, quadros de áreas comuns, bombas, portarias e tomadas.',
      },
      {
        title: 'Manutenção hidráulica',
        description: 'Correção de vazamentos, substituição de registros, válvulas de descarga, torneiras, boias, tubulações e caixas acopladas.',
      },
      {
        title: 'Reparos civis leves',
        description: 'Recomposição de alvenaria, revestimentos, pisos, calçadas, vedações, portas, fechaduras e pequenos reparos estruturais.',
      },
      {
        title: 'Manutenção de utilidades',
        description: 'Conservação de casas de máquinas, abrigos técnicos, suportes, grelhas de drenagem e instalações de apoio.',
      },
      {
        title: 'Checklists preventivos periódicos',
        description: 'Roteiros técnicos estruturados para verificar o funcionamento de todos os sistemas críticos antes que ocorram falhas.',
      },
      {
        title: 'Inspeções prediais e relatórios',
        description: 'Diagnóstico técnico com relatório fotográfico claro para auxiliar síndicos e gestores na tomada de decisão e aprovação de melhorias.',
      },
      {
        title: 'Atendimento corretivo e cronogramas',
        description: 'Suporte rápido para demandas emergenciais do dia a dia e planejamento anual ou mensal de conservação.',
      },
    ],
    applications: [
      {
        segment: 'Condomínios Residenciais e Comerciais',
        detail: 'Apoio completo ao síndico e à administradora na conservação de áreas comuns, casas de bombas, garagens e portarias.',
      },
      {
        segment: 'Prédios Corporativos e Escritórios',
        detail: 'Manutenção discreta e eficiente de instalações sanitárias, iluminação, pontos de rede/energia e acabamentos.',
      },
      {
        segment: 'Redes de Comércio e Varejo',
        detail: 'Padronização e pronta resposta para manter lojas e estabelecimentos sempre apresentáveis e seguros para os clientes.',
      },
      {
        segment: 'Instalações Administrativas Industriais',
        detail: 'Conservação de vestiários, refeitórios, recepções, escritórios de fábrica e áreas externas de apoio.',
      },
    ],
    technicalDifferentials: [
      {
        title: 'Redução de Custos com Manutenção Preventiva',
        description: 'Identificar uma infiltração ou conexão elétrica aquecida no início evita reformas emergenciais de alto custo.',
      },
      {
        title: 'Centralização em um Único Parceiro',
        description: 'Menos burocracia com cotações fragmentadas: nossa equipe integra elétrica, hidráulica, pintura, solda e controle de pragas.',
      },
      {
        title: 'Relatórios Transparentes para Gestores',
        description: 'Documentamos o que foi inspecionado e executado, facilitando a prestação de contas em condomínios e empresas.',
      },
    ],
    safetyAndNorms: {
      title: 'Conservação Patrimonial e Segurança Operacional',
      subtitle: 'Processos padronizados para preservar a vida útil do imóvel e a segurança dos usuários.',
      items: [
        'Execução planejada com isolamento e sinalização das áreas de trabalho em condomínios e ambientes com circulação de público.',
        'Respeito aos horários e regras internas de condomínios residenciais, comerciais e centros empresariais.',
        'Integração direta com nossas divisões de elétrica (NBR 5410), trabalho em altura (NR-35) e serralheria.',
        'Garantia técnica formal sobre os serviços executados conforme as condições contratadas.',
      ],
    },
    faqs: [
      {
        question: 'Por que contratar manutenção predial integrada em vez de profissionais avulsos?',
        answer:
          'Quando uma empresa ou condomínio depende de profissionais avulsos para elétrica, hidráulica, pintura e serralheria, perde-se tempo gerenciando agendas e garantias. Com a S.A Manutenção, você tem um único responsável técnico, atendimento padronizado e visão completa da estrutura.',
      },
      {
        question: 'Vocês atendem tanto demandas pontuais quanto manutenção recorrente?',
        answer:
          'Sim. Atendemos desde solicitações corretivas específicas (como reparos elétricos, hidráulicos ou estruturais) até planos de acompanhamento preventivo periódico para empresas e condomínios.',
      },
      {
        question: 'Como funciona o checklist preventivo para condomínios e empresas?',
        answer:
          'Nossa equipe realiza vistorias programadas verificando quadros elétricos, iluminação, bombas, sistemas hidráulicos, portões, estruturas metálicas e conservação geral, emitindo um relatório claro com as ações realizadas e eventuais recomendações.',
      },
    ],
    relatedSlugs: ['manutencao-eletrica', 'pintura-industrial-e-comercial', 'dedetizacao-e-controle-de-pragas'],
    seo: {
      title: 'Manutenção Predial em Salto, Itu e Indaiatuba | S.A Manutenção',
      description:
        'Empresa de manutenção predial em Salto, Itu, Indaiatuba, Porto Feliz e Sorocaba. Elétrica, hidráulica, reparos civis e checklists preventivos para condomínios e empresas.',
      primaryKeyword: 'Manutenção predial em Salto',
      secondaryKeywords: [
        'Empresa de manutenção predial',
        'Manutenção para condomínios em Salto e Itu',
        'Manutenção predial comercial Indaiatuba',
        'Checklist preventivo predial',
      ],
    },
    whatsappMessage: 'Olá! Gostaria de solicitar um orçamento de Manutenção Predial com a S.A Manutenção.',
  },
  {
    slug: 'pintura-industrial-e-comercial',
    index: '03',
    name: 'Pintura Industrial e Comercial',
    shortName: 'Pintura Técnica e Anticorrosiva',
    heroTitle: 'PROTEÇÃO, DURABILIDADE E ACABAMENTO PROFISSIONAL.',
    heroDescription:
      'Executamos serviços especializados de pintura industrial e comercial, oferecendo proteção e acabamento para estruturas metálicas, galpões, fachadas, pisos industriais, máquinas e áreas de grande circulação.',
    cardSummary:
      'Pintura de galpões, estruturas metálicas, fachadas, pisos industriais, tratamento anticorrosivo e aplicação mecanizada com pistola airless.',
    normSummary: 'NR-35 · Airless · Tratamento Anticorrosivo',
    presentationParagraphs: [
      'Em ambientes industriais e comerciais, a pintura vai muito além da estética: ela é uma barreira fundamental de proteção contra corrosão, umidade, abrasão química e desgaste mecânico.',
      'A S.A Manutenção executa serviços técnicos de pintura industrial, comercial e predial em Salto e toda a região, utilizando preparação rigorosa de superfície, tratamento anticorrosivo e equipamentos de pintura mecanizada (pistola airless) para garantir cobertura uniforme e alta produtividade.',
      'Planejamos cada etapa da execução para minimizar interferências na rotina da sua fábrica, galpão logístico, comércio ou condomínio, contando com equipe treinada conforme NR-35 quando há necessidade de trabalho em altura.',
    ],
    executedServices: [
      {
        title: 'Pintura de estruturas metálicas',
        description: 'Proteção de tesouras, treliças, pilares metálicos, coberturas e mezaninos com fundos anticorrosivos e acabamento de alta resistência.',
      },
      {
        title: 'Pintura de galpões industriais e logísticos',
        description: 'Renovação interna e externa de grandes metragens com alta velocidade de aplicação e excelente padrão de acabamento.',
      },
      {
        title: 'Pintura de fachadas comerciais e prediais',
        description: 'Valorização visual da empresa ou condomínio com tintas elastoméricas e acrílicas resistentes às intempéries.',
      },
      {
        title: 'Pintura de pisos industriais e demarcação',
        description: 'Aplicação de tintas de alta resistência para áreas de produção, estacionamentos, faixas de pedestres e rotas de segurança.',
      },
      {
        title: 'Pintura de máquinas e equipamentos',
        description: 'Recuperação visual e proteção de maquinário industrial, bancadas, tubulações e estruturas operacionais.',
      },
      {
        title: 'Preparação de superfícies e tratamento anticorrosivo',
        description: 'Lixamento, remoção de oxidação, limpeza desengraxante, correção de trincas e aplicação de primer anticorrosivo.',
      },
      {
        title: 'Pintura mecanizada com pistola Airless',
        description: 'Tecnologia de pulverização de alta pressão que proporciona acabamento superior e reduz drasticamente o tempo de obra.',
      },
      {
        title: 'Serviços em altura conforme NR-35',
        description: 'Execução segura em fachadas, pés-direitos elevados e coberturas com utilização de EPIs, linhas de vida e plataformas quando aplicável.',
      },
    ],
    applications: [
      {
        segment: 'Galpões Industriais e Centros Logísticos',
        detail: 'Pintura completa para entrega ou renovação de galpões, estruturas de cobertura, docas e demarcação de piso.',
      },
      {
        segment: 'Comércios, Lojas e Restaurantes',
        detail: 'Renovação rápida de fachadas e ambientes internos com cronograma adaptado para não interromper o atendimento aos clientes.',
      },
      {
        segment: 'Condomínios Residenciais e Empresariais',
        detail: 'Pintura de muros, portarias, garagens, áreas comuns, grades e estruturas metálicas.',
      },
      {
        segment: 'Indústrias Metalúrgicas e Manufaturas',
        detail: 'Tratamento anticorrosivo de estruturas expostas e pintura técnica de máquinas e tubulações.',
      },
    ],
    technicalDifferentials: [
      {
        title: 'Preparação Rigorosa da Base',
        description: 'A durabilidade da pintura depende da preparação: tratamos ferrugem, umidade e imperfeições antes de aplicar o acabamento.',
      },
      {
        title: 'Produtividade com Sistema Airless',
        description: 'Cobrimos grandes áreas de galpões e estruturas metálicas em menos tempo e com camada de tinta uniforme.',
      },
      {
        title: 'Organização e Limpeza no Canteiro',
        description: 'Isolamento cuidadoso de máquinas, pisos e mobiliário para entregar o ambiente limpo ao término do serviço.',
      },
    ],
    safetyAndNorms: {
      title: 'Segurança em Altura (NR-35) e Proteção Ambiental',
      subtitle: 'Planejamento técnico para execução segura em áreas industriais e comerciais.',
      items: [
        'Profissionais capacitados conforme diretrizes da NR-35 para serviços executados acima de 2 metros de altura.',
        'Uso rigoroso de cintos tipo paraquedista, talabartes duplos, trava-quedas, óculos de proteção e respiradores adequados.',
        'Isolamento e sinalização da área abaixo do ponto de intervenção para proteção de colaboradores e visitantes.',
        'Especificação correta de materiais de acordo com o substrato (alvenaria, aço carbono, galvanizado ou concreto).',
      ],
    },
    faqs: [
      {
        question: 'Qual a vantagem da pintura com pistola Airless em galpões e estruturas?',
        answer:
          'O sistema Airless aplica a tinta sob alta pressão sem misturar ar, garantindo uma película muito mais uniforme, melhor aderência em estruturas metálicas e alvenaria, além de uma execução muito mais rápida que o método convencional.',
      },
      {
        question: 'Vocês fazem o tratamento de ferrugem antes de pintar estruturas metálicas?',
        answer:
          'Sim. Nunca aplicamos tinta diretamente sobre ferrugem solta. Realizamos a preparação mecânica/lixamento da superfície e a aplicação de fundo anticorrosivo adequado para bloquear o avanço da oxidação.',
      },
      {
        question: 'É possível realizar a pintura sem parar a operação da empresa?',
        answer:
          'Sim. Planejamos o isolamento por setores e alinhamos o cronograma de execução com a gestão do cliente para reduzir ao máximo qualquer interferência na rotina produtiva ou comercial.',
      },
    ],
    relatedSlugs: ['solda-e-serralheria', 'manutencao-predial', 'manutencao-eletrica'],
    seo: {
      title: 'Pintura Industrial e Comercial em Salto e Região | S.A Manutenção',
      description:
        'Pintura industrial e comercial em Salto, Itu, Indaiatuba, Porto Feliz e Sorocaba. Pintura de galpões, estruturas metálicas, pisos industriais, fachadas e NR-35.',
      primaryKeyword: 'Pintura industrial em Salto e região',
      secondaryKeywords: [
        'Pintura de galpão industrial Salto',
        'Pintura de estruturas metálicas Itu',
        'Pintura comercial em Indaiatuba',
        'Pintura com airless e tratamento anticorrosivo',
      ],
    },
    whatsappMessage: 'Olá! Gostaria de solicitar um orçamento de Pintura Industrial / Comercial com a S.A Manutenção.',
  },
  {
    slug: 'solda-e-serralheria',
    index: '04',
    name: 'Solda e Serralheria',
    shortName: 'Estruturas Metálicas e Solda',
    heroTitle: 'SOLDA E MANUTENÇÃO DE ESTRUTURAS METÁLICAS.',
    heroDescription:
      'Executamos serviços de solda, fabricação, recuperação e manutenção de estruturas metálicas para aplicações industriais, comerciais e prediais.',
    cardSummary:
      'Solda MIG/MAG e elétrica, fabricação e reforço de mezaninos, bases para máquinas, recuperação de peças e manutenção de portões e grades.',
    normSummary: 'Solda MIG/MAG · Eletrodo · Estrutural',
    presentationParagraphs: [
      'Estruturas metálicas exigem precisão dimensional, penetração de solda adequada e resistência mecânica comprovada. Desde o reforço estrutural de um mezanino até a fabricação de suportes para máquinas ou recuperação de portões industriais, o trabalho metalúrgico não admite improvisos.',
      'A S.A Manutenção oferece serviços especializados de solda (MIG/MAG e solda elétrica) e serralheria técnica para indústrias, galpões, condomínios e estabelecimentos comerciais em Salto, Itu, Indaiatuba, Porto Feliz e Sorocaba.',
      'Além da fabricação e do reparo estrutural, integramos o acabamento de pintura anticorrosiva e, quando necessário, a infraestrutura elétrica para automação ou iluminação da estrutura entregue.',
    ],
    executedServices: [
      {
        title: 'Solda MIG/MAG',
        description: 'Soldagem de alta produtividade, excelente penetração e cordão uniforme para estruturas metálicas, chapas e perfis industriais.',
      },
      {
        title: 'Solda elétrica (Eletrodo Revestido)',
        description: 'Reparos estruturais em campo, soldagem de perfis pesados, uniões de alta resistência e intervenções em locais de difícil acesso.',
      },
      {
        title: 'Fabricação de estruturas metálicas',
        description: 'Desenvolvimento sob medida de coberturas, fechamentos, escadas marinheiro, guarda-corpos, corrimãos e proteções.',
      },
      {
        title: 'Manutenção de portões e grades',
        description: 'Recuperação de portões basculantes, deslizantes e pivotantes, troca de roldanas, cabos de aço, gonzo, trilhos e reforço de grades.',
      },
      {
        title: 'Fabricação e reforço de mezaninos',
        description: 'Execução e reforço estrutural de mezaninos metálicos para ampliação de área útil de estoque ou escritório.',
      },
      {
        title: 'Bases e suportes para máquinas',
        description: 'Confecção de bancadas industriais, skids, suportes de tubulação, bases para motores, compressores e climatizadores.',
      },
      {
        title: 'Recuperação de peças e componentes',
        description: 'Reconstrução de elementos metálicos trincados ou desgastados por uso severo na operação industrial ou logística.',
      },
      {
        title: 'Corte, ajuste e acabamento técnico',
        description: 'Esmerilhamento, alinhamento, furação, ajuste mecânico em campo e preparação para pintura protetiva.',
      },
    ],
    applications: [
      {
        segment: 'Indústrias e Linhas de Produção',
        detail: 'Bases de máquinas, bancadas de trabalho, guarda-corpos de segurança, suportes técnicos e reparos de emergência em estruturas.',
      },
      {
        segment: 'Galpões e Centros de Distribuição',
        detail: 'Reforço de mezaninos, protetores de porta-paletes (guard-rails), manutenção de docas, portões industriais e fechamentos.',
      },
      {
        segment: 'Condomínios Residenciais e Comerciais',
        detail: 'Reforma e manutenção corretiva/preventiva de portões veiculares, grades perimetrais, lixeiras, alçapões e corrimãos.',
      },
      {
        segment: 'Comércios e Estabelecimentos',
        detail: 'Estruturas para fachadas, suportes de equipamentos técnicos, grades de segurança e adequações de layout.',
      },
    ],
    technicalDifferentials: [
      {
        title: 'Resistência Estrutural e Acabamento',
        description: 'Cordões de solda executados com técnica apurada, esmerilhamento limpo e alinhamento preciso dos perfis metálicos.',
      },
      {
        title: 'Integração com Pintura Anticorrosiva',
        description: 'Entregamos a estrutura soldada já tratada e pintada, evitando que o aço recém-trabalhado sofra oxidação precoce.',
      },
      {
        title: 'Atendimento em Campo (In Loco)',
        description: 'Levamos equipamentos de solda e corte até sua indústria, comércio ou condomínio para reparos rápidos no próprio local.',
      },
    ],
    safetyAndNorms: {
      title: 'Procedimentos Seguros de Trabalho a Quente',
      subtitle: 'Controle rigoroso de faíscas, proteção coletiva e EPIs específicos para soldagem.',
      items: [
        'Avaliação prévia do entorno para remoção ou isolamento de materiais inflamáveis antes de iniciar serviços a quente.',
        'Utilização completa de EPIs: máscara de solda com escurecimento automático, avental e luvas de raspa, perneiras e proteção respiratória.',
        'Verificação de aterramento correto da máquina de solda para não interferir em redes elétricas ou equipamentos sensíveis do cliente.',
        'Acabamento sem rebarbas cortantes e inspeção visual rigorosa de todas as uniões soldadas.',
      ],
    },
    faqs: [
      {
        question: 'Qual a diferença entre a solda MIG/MAG e a solda elétrica nos serviços da S.A Manutenção?',
        answer:
          'A solda MIG/MAG utiliza gás de proteção e alimentação contínua de arame, proporcionando excelente acabamento visual, baixa emissão de respingos e alta velocidade. Já a solda elétrica por eletrodo revestido é extremamente versátil e robusta para reparos estruturais pesados em campo e ambientes externos.',
      },
      {
        question: 'Vocês fazem manutenção de portões pesados de condomínios e indústrias?',
        answer:
          'Sim. Realizamos solda de trincas estruturais, substituição de roldanas, cabos de aço, trilhos, dobradiças e reforço de folhas metálicas em portões de condomínios, comércios e galpões.',
      },
      {
        question: 'A estrutura metálica já pode ser entregue pintada?',
        answer:
          'Com certeza. Como atuamos de forma integrada também em Pintura Industrial e Comercial, podemos entregar sua estrutura metálica fabricada, soldada, tratada contra corrosão e devidamente pintada.',
      },
    ],
    relatedSlugs: ['pintura-industrial-e-comercial', 'manutencao-eletrica', 'manutencao-predial'],
    seo: {
      title: 'Serviços de Solda e Serralheria em Salto SP e Região | S.A Manutenção',
      description:
        'Solda MIG/MAG, solda elétrica, fabricação e manutenção de estruturas metálicas, mezaninos e portões em Salto, Itu, Indaiatuba, Porto Feliz e Sorocaba.',
      primaryKeyword: 'Serviços de solda em Salto SP',
      secondaryKeywords: [
        'Manutenção de estruturas metálicas Salto',
        'Solda MIG MAG industrial Itu',
        'Serralheria industrial e comercial Indaiatuba',
        'Manutenção de portões e mezaninos',
      ],
    },
    whatsappMessage: 'Olá! Gostaria de solicitar um orçamento de Solda e Serralheria com a S.A Manutenção.',
  },
  {
    slug: 'dedetizacao-e-controle-de-pragas',
    index: '05',
    name: 'Dedetização e Controle de Pragas',
    shortName: 'Controle Integrado de Pragas',
    heroTitle: 'CONTROLE DE PRAGAS PARA AMBIENTES SEGUROS E PROTEGIDOS.',
    heroDescription:
      'Oferecemos soluções de controle de pragas para ambientes comerciais, condomínios, restaurantes e instalações industriais.',
    cardSummary:
      'Controle de insetos rasteiros e voadores, desratização, descupinização, aplicação de produtos regularizados pela ANVISA e emissão de certificado conforme serviço.',
    normSummary: 'Produtos Regularizados ANVISA · Laudo e Certificado',
    presentationParagraphs: [
      'A presença de pragas urbanas em empresas, restaurantes, condomínios ou indústrias representa um grave risco sanitário, além de causar danos a estoques, cabos elétricos e à reputação do estabelecimento.',
      'A S.A Manutenção realiza o controle técnico de pragas urbanas em Salto, Itu, Indaiatuba, Porto Feliz e Sorocaba, atuando no combate e na prevenção de insetos rasteiros, insetos voadores, roedores e cupins.',
      'Utilizamos exclusivamente produtos saneantes devidamente regularizados perante a ANVISA, aplicando técnicas seguras (pulverização localizada, gel, iscagem monitorada e barreiras químicas) e fornecendo orientações preventivas, laudos e certificados de execução conforme o serviço contratado.',
    ],
    executedServices: [
      {
        title: 'Controle de insetos rasteiros',
        description: 'Desinsetização técnica contra baratas, formigas, aranhas, escorpiões, traças e pulgas em áreas internas, ralos, caixas de passagem e perímetros.',
      },
      {
        title: 'Controle de insetos voadores',
        description: 'Manejo técnico para redução e controle de moscas, mosquitos e pernilongos em áreas comerciais, alimentícias e industriais.',
      },
      {
        title: 'Controle de roedores (Desratização)',
        description: 'Implementação estratégica de porta-iscas seguros e bloqueio de focos de infestação em depósitos, áreas externas, forros e perímetros.',
      },
      {
        title: 'Controle de cupins (Descupinização)',
        description: 'Tratamento localizado e barreira protetiva para preservação de estruturas de madeira, mobiliário, arquivos e esquadrias.',
      },
      {
        title: 'Aplicação de produtos regularizados',
        description: 'Uso exclusivo de defensivos domissanitários registrados na ANVISA, selecionados conforme a praga-alvo e o tipo de ambiente.',
      },
      {
        title: 'Orientações preventivas e barreiras físicas',
        description: 'Como também somos especialistas em manutenção predial, identificamos frestas, ralos sem tela e falhas físicas que facilitam o acesso de pragas.',
      },
      {
        title: 'Laudos e certificados de execução',
        description: 'Emissão de documentação comprobatória de execução do serviço, conforme escopo e periodicidade contratados pelo cliente.',
      },
    ],
    applications: [
      {
        segment: 'Restaurantes, Padarias e Setor Alimentício',
        detail: 'Controle rigoroso e programado com aplicação em gel e técnicas sem odor onde necessário, mais emissão de certificado conforme serviço contratado.',
      },
      {
        segment: 'Condomínios Residenciais e Comerciais',
        detail: 'Tratamento de caixas de gordura, esgoto, áreas comuns, jardins, lixeiras e subsolos para proteção coletiva dos moradores e usuários.',
      },
      {
        segment: 'Indústrias, Galpões e Estoques',
        detail: 'Proteção de matérias-primas, embalagens e painéis elétricos contra danos causados por roedores e insetos.',
      },
      {
        segment: 'Comércios, Escritórios e Clínicas',
        detail: 'Ambientes higienizados, livres de pragas e seguros para colaboradores e clientes.',
      },
    ],
    technicalDifferentials: [
      {
        title: 'Visão Integrada com Manutenção Predial',
        description: 'Não apenas aplicamos o produto: orientamos e podemos executar a vedação de frestas, ralos e passagens estruturais.',
      },
      {
        title: 'Produtos Regularizados perante a ANVISA',
        description: 'Segurança técnica com formulações profissionais de eficácia comprovada e baixo impacto para o ambiente tratado.',
      },
      {
        title: 'Atendimento Programado e Discreto',
        description: 'Agendamos a aplicação em horários compatíveis com o funcionamento do seu restaurante, comércio, condomínio ou indústria.',
      },
    ],
    safetyAndNorms: {
      title: 'Segurança Sanitária e Produtos Regularizados ANVISA',
      subtitle: 'Cuidado absoluto antes, durante e após a aplicação em ambientes corporativos e condominiais.',
      items: [
        'Utilização exclusiva de produtos domissanitários devidamente registrados e autorizados pela ANVISA.',
        'Orientação prévia e pós-aplicação clara sobre tempo de reentrada, ventilação e limpeza das áreas tratadas.',
        'Uso de porta-iscas resistentes e identificados para controle de roedores, prevenindo o acesso acidental.',
        'Emissão de certificado e relatório técnico de execução conforme as condições do serviço contratado.',
      ],
    },
    faqs: [
      {
        question: 'Os produtos utilizados na dedetização são autorizados pela ANVISA?',
        answer:
          'Sim. Trabalhamos exclusivamente com produtos domissanitários regularizados perante a ANVISA, aplicados por profissionais treinados e com os EPIs exigidos.',
      },
      {
        question: 'Vocês emitem certificado após o controle de pragas?',
        answer:
          'Sim. Emitimos laudos e certificados de execução conforme o serviço contratado, documento essencial para comércios, restaurantes, empresas e condomínios.',
      },
      {
        question: 'Preciso fechar minha empresa ou restaurante por muito tempo para dedetizar?',
        answer:
          'Não necessariamente. Avaliamos o tipo de ambiente e a praga-alvo para definir a metodologia mais adequada (como aplicação em gel inodoro ou pulverização em horários de fechamento), minimizando o impacto na sua rotina.',
      },
    ],
    relatedSlugs: ['manutencao-predial', 'manutencao-eletrica', 'pintura-industrial-e-comercial'],
    seo: {
      title: 'Dedetização e Controle de Pragas em Salto SP e Região | S.A Manutenção',
      description:
        'Dedetização e controle de pragas em Salto, Itu, Indaiatuba, Porto Feliz e Sorocaba. Produtos regularizados ANVISA para empresas, restaurantes, condomínios e indústrias.',
      primaryKeyword: 'Controle de pragas em Salto SP',
      secondaryKeywords: [
        'Dedetização em Salto SP',
        'Controle de pragas para restaurantes e empresas',
        'Dedetizadora em Itu e Indaiatuba',
        'Desratização e descupinização comercial',
      ],
    },
    whatsappMessage: 'Olá! Gostaria de solicitar um orçamento de Dedetização e Controle de Pragas com a S.A Manutenção.',
  },
];

export const WHY_CHOOSE_US = [
  {
    index: '01',
    title: 'Soluções integradas',
    description: 'Diferentes especialidades em um único fornecedor: elétrica, predial, pintura, solda e controle de pragas.',
  },
  {
    index: '02',
    title: 'Atendimento regional',
    description: 'Agilidade operacional em Salto e deslocamento rápido para Itu, Indaiatuba, Porto Feliz e Sorocaba.',
  },
  {
    index: '03',
    title: 'Segurança e conformidade',
    description: 'Serviços orientados pelas normas técnicas aplicáveis (NBR 5410, NR-10, NR-35 e diretrizes sanitárias ANVISA).',
  },
  {
    index: '04',
    title: 'Orçamento técnico',
    description: 'Avaliação criteriosa das necessidades reais da estrutura e indicação da solução técnica adequada, sem custos ocultos.',
  },
  {
    index: '05',
    title: 'Compromisso com a qualidade',
    description: 'Execução profissional, materiais especificados corretamente e garantia dos serviços conforme condições contratadas.',
  },
  {
    index: '06',
    title: 'Atendimento direto',
    description: 'Facilidade de comunicação e solicitação ágil de serviços diretamente pelo WhatsApp com quem resolve.',
  },
];

export const SEGMENTS_DATA: SegmentItem[] = [
  {
    id: 'industrias-e-galpoes',
    index: '01',
    title: 'Indústrias e galpões industriais',
    subtitle: 'Continuidade produtiva, segurança elétrica e conservação de plantas fabris e logísticas.',
    description:
      'Ambientes industriais exigem resposta rápida e conformidade rigorosa. Atuamos na manutenção de quadros elétricos (QDF), alimentação de máquinas, fabricação e reforço de estruturas metálicas em solda MIG/MAG, pintura de pisos e galpões com airless e controle integrado de pragas.',
    commonDemands: [
      'Montagem e manutenção de quadros elétricos industriais e correção de sobrecargas',
      'Solda estrutural, bases para máquinas, guarda-corpos e reforço de mezaninos',
      'Pintura de galpões, estruturas metálicas de cobertura e demarcação de pisos',
      'Controle de roedores e pragas para proteção de estoques e cabos',
    ],
    recommendedServices: ['manutencao-eletrica', 'solda-e-serralheria', 'pintura-industrial-e-comercial', 'dedetizacao-e-controle-de-pragas'],
    whatsappText: 'Olá! Gostaria de solicitar um orçamento de manutenção para Indústria / Galpão com a S.A Manutenção.',
  },
  {
    id: 'empresas-e-escritorios',
    index: '02',
    title: 'Empresas e escritórios',
    subtitle: 'Infraestrutura confiável e apresentável para equipes corporativas e centros administrativos.',
    description:
      'Mantemos a estrutura da sua empresa operando sem interrupções. Cuidamos desde a estabilidade dos circuitos elétricos e iluminação até reparos hidráulicos, pintura corporativa e conservação predial preventiva.',
    commonDemands: [
      'Adequação de circuitos elétricos, instalação de DPS/DR e iluminação corporativa',
      'Manutenção hidráulica, reparos civis leves e conservação de ambientes',
      'Pintura interna e de fachadas com planejamento fora do horário de pico',
      'Dedetização periódica com laudo e certificado conforme contrato',
    ],
    recommendedServices: ['manutencao-eletrica', 'manutencao-predial', 'pintura-industrial-e-comercial', 'dedetizacao-e-controle-de-pragas'],
    whatsappText: 'Olá! Gostaria de solicitar um orçamento de manutenção para Empresa / Escritório com a S.A Manutenção.',
  },
  {
    id: 'comercios',
    index: '03',
    title: 'Comércios e estabelecimentos comerciais',
    subtitle: 'Segurança, apresentação impecável e funcionamento contínuo para atender seus clientes.',
    description:
      'No varejo e nos serviços, uma falha elétrica ou problema estrutural afeta diretamente o faturamento. Oferecemos atendimento rápido para instalações elétricas comerciais, pintura de fachadas, reparos em portões de aço e controle de pragas.',
    commonDemands: [
      'Balanceamento de fases, troca de disjuntores e circuitos para refrigeração/ar-condicionado',
      'Pintura e renovação visual de fachadas e salões de atendimento',
      'Manutenção e solda em portões comerciais, grades e suportes metálicos',
      'Manutenção predial corretiva ágil para evitar fechamento da loja',
    ],
    recommendedServices: ['manutencao-eletrica', 'manutencao-predial', 'pintura-industrial-e-comercial', 'solda-e-serralheria'],
    whatsappText: 'Olá! Gostaria de solicitar um orçamento de manutenção para Comércio com a S.A Manutenção.',
  },
  {
    id: 'condominios',
    index: '04',
    title: 'Condomínios residenciais e comerciais',
    subtitle: 'Tranquilidade para moradores e usuários com todas as disciplinas centralizadas.',
    description:
      'Reduzimos a sobrecarga operacional do condomínio ao integrar elétrica de áreas comuns, hidráulica, manutenção e solda de portões e grades, pintura predial e dedetização periódica em um único fornecedor de confiança.',
    commonDemands: [
      'Manutenção de quadros de áreas comuns, iluminação, sensores e casas de bombas',
      'Reparos e solda em portões veiculares, grades, corrimãos e estruturas metálicas',
      'Checklists preventivos prediais, reparos hidráulicos e civis leves',
      'Desinsetização e desratização de áreas comuns, caixas de passagem e lixeiras',
    ],
    recommendedServices: ['manutencao-predial', 'manutencao-eletrica', 'solda-e-serralheria', 'dedetizacao-e-controle-de-pragas', 'pintura-industrial-e-comercial'],
    whatsappText: 'Olá! Gostaria de solicitar um orçamento de manutenção para Condomínio com a S.A Manutenção.',
  },
  {
    id: 'restaurantes-e-alimenticios',
    index: '05',
    title: 'Restaurantes e estabelecimentos alimentícios',
    subtitle: 'Conformidade sanitária, estabilidade elétrica para cozinhas e conservação contínua.',
    description:
      'Cozinhas profissionais e áreas de alimentação operam sob alta exigência sanitária e elétrica. Integramos o controle técnico de pragas com produtos regularizados pela ANVISA à manutenção elétrica de câmaras frias, fornos e exaustores.',
    commonDemands: [
      'Controle integrado de pragas (insetos e roedores) com emissão de certificado conforme serviço',
      'Manutenção elétrica preventiva para equipamentos de refrigeração, fornos e coifas',
      'Reparos hidráulicos, vedação de ralos/frestas e manutenção predial sanitária',
      'Pintura higiênica e recuperação de bancadas e suportes metálicos',
    ],
    recommendedServices: ['dedetizacao-e-controle-de-pragas', 'manutencao-eletrica', 'manutencao-predial'],
    whatsappText: 'Olá! Gostaria de solicitar um orçamento para Restaurante / Estabelecimento Alimentício com a S.A Manutenção.',
  },
  {
    id: 'gestores-prediais-e-sindicos',
    index: '06',
    title: 'Gestores prediais e síndicos',
    subtitle: 'Um parceiro estratégico para eliminar a gestão fragmentada de múltiplos prestadores.',
    description:
      'Síndicos profissionais, administradoras e gestores de facilities contam com a S.A Manutenção para centralizar demandas técnicas com orçamentos transparentes, relatórios fotográficos de inspeção e cumprimento de cronogramas.',
    commonDemands: [
      'Fornecedor único para elétrica, hidráulica, serralheria, pintura e controle de pragas',
      'Inspeções prediais detalhadas com relatórios técnicos para assembleias e diretorias',
      'Cronogramas de manutenção preventiva que reduzem chamados emergenciais',
      'Canal direto pelo WhatsApp para solicitação e acompanhamento de orçamentos',
    ],
    recommendedServices: ['manutencao-predial', 'manutencao-eletrica', 'pintura-industrial-e-comercial', 'solda-e-serralheria', 'dedetizacao-e-controle-de-pragas'],
    whatsappText: 'Olá! Sou gestor predial / síndico e gostaria de conversar sobre parceria de manutenção com a S.A Manutenção.',
  },
];

export const REGIONAL_CITIES: RegionalCity[] = [
  {
    name: 'Salto',
    state: 'SP',
    tag: 'Base Operacional',
    corridor: 'Eixo SP-075 / SP-300',
    description:
      'Nossa cidade-sede. Oferecemos pronta resposta para indústrias, distritos industriais, condomínios residenciais e comerciais, restaurantes e empresas em todos os bairros de Salto – SP.',
    focusAreas: [
      'Distritos e polos industriais de Salto',
      'Condomínios horizontais e verticais',
      'Comércio central e corredores comerciais',
      'Atendimento elétrico, predial, pintura, solda e pragas',
    ],
    coordinates: { x: 52, y: 46 },
  },
  {
    name: 'Itu',
    state: 'SP',
    tag: 'Atendimento Imediato',
    corridor: 'Conexão direta com Salto',
    description:
      'Pela proximidade imediata com Salto, atendemos Itu com a mesma agilidade local, suprindo demandas de galpões, indústrias, condomínios de alto padrão e estabelecimentos comerciais.',
    focusAreas: [
      'Polos industriais e logísticos na SP-075 e SP-300',
      'Condomínios residenciais e empresariais em Itu',
      'Comércios, restaurantes e centros de compras',
      'Manutenção preventiva e corretiva integrada',
    ],
    coordinates: { x: 58, y: 60 },
  },
  {
    name: 'Indaiatuba',
    state: 'SP',
    tag: 'Forte Presença Industrial',
    corridor: 'Eixo Rodovia Santos Dumont (SP-075)',
    description:
      'Atendemos o forte parque industrial, logístico, comercial e condominial de Indaiatuba com soluções completas em elétrica, pintura industrial airless, solda MIG/MAG e manutenção predial.',
    focusAreas: [
      'Distrito Industrial e galpões logísticos em Indaiatuba',
      'Empresas, escritórios e prédios corporativos',
      'Condomínios e estabelecimentos comerciais',
      'Adequação elétrica NBR 5410 / NR-10 e pintura técnica',
    ],
    coordinates: { x: 74, y: 30 },
  },
  {
    name: 'Porto Feliz',
    state: 'SP',
    tag: 'Cobertura Regional',
    corridor: 'Eixo Rodovia Marechal Rondon (SP-300)',
    description:
      'Suporte técnico especializado para as indústrias em expansão, empresas, fazendas corporativas, condomínios e comércios instalados em Porto Feliz.',
    focusAreas: [
      'Corredor industrial da Rodovia Marechal Rondon',
      'Estruturas metálicas, solda e pintura anticorrosiva',
      'Manutenção elétrica e quadros de distribuição (QDF)',
      'Controle de pragas com certificado e manutenção predial',
    ],
    coordinates: { x: 26, y: 42 },
  },
  {
    name: 'Sorocaba',
    state: 'SP',
    tag: 'Polo Metropolitano',
    corridor: 'Eixo SP-075 / Castelo Branco',
    description:
      'Levamos a eficiência da manutenção integrada da S.A Manutenção para indústrias, centros logísticos, redes comerciais e condomínios em Sorocaba.',
    focusAreas: [
      'Zonas industriais e centros de distribuição',
      'Obras de pintura industrial e comercial em grande escala',
      'Manutenção elétrica, quadros QDF e serralheria técnica',
      'Pacotes integrados de manutenção para empresas',
    ],
    coordinates: { x: 24, y: 78 },
  },
];
