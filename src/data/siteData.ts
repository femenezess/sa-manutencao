export interface ExecutedServiceItem {
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  serviceSlug: string;
  serviceName: string;
  title: string;
  subtitle: string;
  locationTag: string;
  highlightText: string;
}

export interface ServiceData {
  slug: string;
  index: string;
  name: string;
  shortName: string;
  heroTitle: string;
  heroHighlightWord: string;
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
  signature: 'Serviços de Manutenção e Energia — Soluções Completas para Empresas, Condomínios e Residências.',
  logoPath: '/assets/aistudio/logotipo_sa_manuten__o_68271bd4.jpeg',
  location: 'Salto – SP',
  regionList: ['Salto', 'Itu', 'Indaiatuba', 'Porto Feliz', 'Sorocaba'],
  phoneDisplay: '(11) 95145-9102',
  whatsappRaw: '5511951459102',
  instagramHandle: '@manutencao.araujo',
  instagramUrl: 'https://www.instagram.com/manutencao.araujo/',
  defaultWhatsappMessage: 'Olá! Gostaria de solicitar um orçamento com a S.A Manutenção.',
  mission: 'Manter seu imóvel, condomínio ou empresa funcionando de forma segura, econômica e bem cuidada, sem dores de cabeça.',
  valueProposition: 'Conte com quem entende: 7 especialidades reunidas em um único parceiro de confiança.',
};

export function getWhatsAppLink(customMessage?: string): string {
  const text = encodeURIComponent(customMessage || COMPANY_INFO.defaultWhatsappMessage);
  return `https://wa.me/${COMPANY_INFO.whatsappRaw}?text=${text}`;
}

export const SERVICES_DATA: ServiceData[] = [
  {
    slug: 'eletrica',
    index: '01',
    name: 'Elétrica',
    shortName: 'Instalações e Manutenção Elétrica',
    heroTitle: 'SOLUÇÕES COMPLETAS EM ELÉTRICA PREDIAL, COMERCIAL E INDUSTRIAL',
    heroHighlightWord: 'ELÉTRICA',
    heroDescription:
      'Mantenha a instalação elétrica em dia para evitar dores de cabeça, desperdício na conta de luz e riscos de curto-circuito. Atendemos residências, comércios, condomínios e indústrias.',
    cardSummary:
      'Quadros de distribuição (QDF), troca de disjuntores, instalação de iluminação LED, revisão contra sobrecargas, DPS/DR e manutenção preventiva e corretiva.',
    normSummary: 'NBR 5410 · NR-10 · Economia e Segurança',
    presentationParagraphs: [
      'Uma instalação elétrica revisada por um profissional qualificado faz toda a diferença: evita prejuízos causados por serviços malfeitos, reduz o consumo na conta de energia e protege sua família, seus clientes e seus equipamentos.',
      'A S.A Manutenção atua na identificação precisa de problemas elétricos ocultos — como tomadas sobrecarregadas, fios aquecendo e disjuntores desarmando — antes que se tornem grandes problemas.',
      'Atendemos desde a substituição de iluminação comum por LED e revisão de quadros até instalações completas para comércios, condomínios e galpões em Salto, Itu, Indaiatuba, Porto Feliz e Sorocaba.',
    ],
    executedServices: [
      {
        title: 'Instalações e revisões elétricas completas',
        description: 'Pontos de tomadas, interruptores, circuitos dedicados, infraestrutura e adequação de carga.',
      },
      {
        title: 'Montagem e organização de quadros (QDF)',
        description: 'Revisão de disjuntores regularmente, balanceamento de fases e organização segura dos cabos.',
      },
      {
        title: 'Substituição por iluminação em LED',
        description: 'Modernização de lâmpadas, refletores e painéis LED que geram até 80% de economia de iluminação.',
      },
      {
        title: 'Proteção contra surtos e choques (DPS e DR)',
        description: 'Instalação de dispositivos essenciais para proteger eletrodomésticos, máquinas e pessoas.',
      },
      {
        title: 'Correção de falhas, curtos e sobrecargas',
        description: 'Eliminação de pontos de aquecimento, tomadas derretendo e uso inadequado de extensões.',
      },
      {
        title: 'Manutenção preventiva e corretiva',
        description: 'Inspeções técnicas periódicas para empresas, condomínios, lojas e residências.',
      },
    ],
    applications: [
      {
        segment: 'Comércios e Escritórios',
        detail: 'Iluminação em LED, circuitos para ar-condicionado e proteção para computadores e equipamentos.',
      },
      {
        segment: 'Condomínios e Residências',
        detail: 'Segurança elétrica para sua família e áreas comuns, quadros revisados e sensores de presença.',
      },
      {
        segment: 'Indústrias e Galpões',
        detail: 'Quadros de distribuição de força, alimentação de máquinas e iluminação industrial.',
      },
      {
        segment: 'Restaurantes e Lojas',
        detail: 'Estabilidade elétrica para câmaras frias, fornos, freezers e vitrines.',
      },
    ],
    technicalDifferentials: [
      {
        title: 'Identificação Precisa de Falhas',
        description: 'Detectamos falhas ocultas com equipamentos de medição antes que causem paralisações.',
      },
      {
        title: 'Foco em Economia de Energia',
        description: 'Orientamos sobre troca para LED, eliminação de fuga de corrente e dimensionamento correto.',
      },
      {
        title: 'Segurança Profissional',
        description: 'Serviço limpo, organizado e seguindo rigorosamente as normas NBR 5410 e NR-10.',
      },
    ],
    safetyAndNorms: {
      title: 'Conformidade NBR 5410 e NR-10',
      subtitle: 'Garantia de segurança para sua empresa, condomínio ou família.',
      items: [
        'Dimensionamento correto de cabos e disjuntores conforme a norma ABNT NBR 5410.',
        'Atendimento seguro com profissionais qualificados e equipamentos de proteção (NR-10).',
        'Prevenção contra incêndios causados por tomadas sobrecarregadas e conexões frouxas.',
        'Orientações práticas de uso seguro e economia de energia.',
      ],
    },
    faqs: [
      {
        question: 'Como saber se minha instalação elétrica precisa de revisão?',
        answer:
          'Disjuntores que desarmam com frequência, tomadas esquentando, cheiro de queimado, lâmpadas piscando ou aumento repentino na conta de luz indicam a necessidade de uma avaliação profissional.',
      },
      {
        question: 'Trocar lâmpadas comuns por LED realmente economiza energia?',
        answer:
          'Sim! A iluminação em LED consome até 80% menos energia elétrica que lâmpadas antigas, esquenta muito menos e possui durabilidade muito superior.',
      },
      {
        question: 'Qual o perigo de usar extensões e benjamins por longos períodos?',
        answer:
          'Extensões não foram feitas para uso contínuo de aparelhos potentes. Elas podem superaquecer e provocar derretimento ou curto-circuito. O ideal é instalar tomadas dimensionadas ou utilizar filtros de linha adequados.',
      },
    ],
    relatedSlugs: ['pintura', 'encanador', 'projetos-de-restauracao'],
    seo: {
      title: 'Eletricista e Manutenção Elétrica em Salto e Região | S.A Manutenção',
      description:
        'Serviços de elétrica em Salto, Itu, Indaiatuba, Porto Feliz e Sorocaba. Instalações, quadros QDF, iluminação LED, reparos de curto-circuito e manutenção.',
      primaryKeyword: 'Manutenção elétrica em Salto SP',
      secondaryKeywords: ['Eletricista em Salto', 'Instalação elétrica comercial e residencial'],
    },
    whatsappMessage: 'Olá! Gostaria de solicitar um orçamento de Elétrica com a S.A Manutenção.',
  },
  {
    slug: 'pintura',
    index: '02',
    name: 'Pintura',
    shortName: 'Pintura Predial, Comercial e Industrial',
    heroTitle: 'PINTURA PROFISSIONAL COM ACABAMENTO IMPECÁVEL E DURABILIDADE',
    heroHighlightWord: 'PINTURA',
    heroDescription:
      'Renove e valorize seu imóvel, comércio, condomínio ou galpão com preparação completa de superfície, tintas de qualidade e limpeza total.',
    cardSummary:
      'Pintura interna e externa, fachadas, galpões, estruturas metálicas, pisos, tratamento de trincas e aplicação com pistola airless.',
    normSummary: 'Acabamento Fino · Airless · NR-35',
    presentationParagraphs: [
      'Uma pintura bem executada transforma a aparência de qualquer ambiente, protege as paredes contra umidade e valoriza o patrimônio.',
      'Na S.A Manutenção, cuidamos de todas as etapas: proteção de pisos e móveis, lixamento, correção de imperfeições com massa, tratamento anticorrosivo em metais e aplicação uniforme.',
      'Atendemos desde salas comerciais e residências até fachadas prediais e grandes galpões em Salto e região.',
    ],
    executedServices: [
      {
        title: 'Pintura interna e externa de imóveis',
        description: 'Paredes, tetos, muros e áreas comuns com ótimo cobrimento e recorte preciso.',
      },
      {
        title: 'Pintura de fachadas comerciais e prediais',
        description: 'Renovação visual que destaca sua empresa e protege contra sol e chuva.',
      },
      {
        title: 'Pintura de galpões e estruturas metálicas',
        description: 'Aplicação mecanizada com airless e fundo anticorrosivo para máxima durabilidade.',
      },
      {
        title: 'Pintura e demarcação de pisos',
        description: 'Pisos industriais, garagens, quadras, estacionamentos e faixas de segurança.',
      },
      {
        title: 'Preparação de superfície e reparo de trincas',
        description: 'Raspagem, selador, massa corrida/acrílica e tratamento contra descascamento.',
      },
      {
        title: 'Envernizamento e pintura de madeiras e ferragens',
        description: 'Portas, janelas, portões, grades e pergolados.',
      },
    ],
    applications: [
      {
        segment: 'Comércios e Lojas',
        detail: 'Ambientes renovados e convidativos para atrair mais clientes.',
      },
      {
        segment: 'Condomínios e Prédios',
        detail: 'Pintura de portarias, muros, garagens, corredores e áreas de lazer.',
      },
      {
        segment: 'Indústrias e Galpões',
        detail: 'Pintura de grandes metragens, estruturas de aço e pisos de alta resistência.',
      },
      {
        segment: 'Residências e Escritórios',
        detail: 'Execução organizada com proteção completa do mobiliário e entrega limpa.',
      },
    ],
    technicalDifferentials: [
      {
        title: 'Cuidado com a Limpeza',
        description: 'Isolamos pisos, esquadrias e móveis com lona e fita antes de iniciar a pintura.',
      },
      {
        title: 'Preparação Completa da Parede',
        description: 'Corrigimos imperfeições e umidade para que a pintura não descasque precocemente.',
      },
      {
        title: 'Agilidade no Prazo',
        description: 'Equipe organizada e equipamentos modernos para cumprir o cronograma combinado.',
      },
    ],
    safetyAndNorms: {
      title: 'Qualidade de Aplicação e Segurança NR-35',
      subtitle: 'Execução segura tanto em áreas internas quanto em trabalhos em altura.',
      items: [
        'Equipe capacitada para trabalhos em altura (NR-35) em fachadas e pés-direitos altos.',
        'Uso de materiais e tintas adequados para cada tipo de superfície.',
        'Isolamento e sinalização do local durante toda a execução.',
        'Acabamento revisado junto ao cliente na entrega.',
      ],
    },
    faqs: [
      {
        question: 'Vocês protegem os móveis e o piso antes de pintar?',
        answer:
          'Sim! Antes de abrir qualquer lata de tinta, fazemos o envelopamento e proteção de pisos, rodapés, tomadas, portas e móveis.',
      },
      {
        question: 'Fazem correção de rachaduras e descascados na parede?',
        answer:
          'Com certeza. Raspamos as partes soltas, aplicamos fundo preparador e corrigimos trincas e buracos antes das demãos de tinta.',
      },
    ],
    relatedSlugs: ['projetos-de-restauracao', 'serralheria', 'marcenaria'],
    seo: {
      title: 'Serviços de Pintura Comercial, Predial e Industrial em Salto | S.A Manutenção',
      description:
        'Pintura profissional em Salto, Itu, Indaiatuba, Porto Feliz e Sorocaba. Fachadas, interiores, galpões, estruturas metálicas e pisos.',
      primaryKeyword: 'Pintura em Salto SP',
      secondaryKeywords: ['Pintor profissional Salto', 'Pintura comercial e industrial'],
    },
    whatsappMessage: 'Olá! Gostaria de solicitar um orçamento de Pintura com a S.A Manutenção.',
  },
  {
    slug: 'serralheria',
    index: '03',
    name: 'Serralheria',
    shortName: 'Solda, Portões e Estruturas Metálicas',
    heroTitle: 'SERRALHERIA E SOLDA COM RESISTÊNCIA E ACABAMENTO DE PRECISÃO',
    heroHighlightWord: 'SERRALHERIA',
    heroDescription:
      'Fabricação, conserto e reforço de portões, grades, corrimãos, mezaninos e estruturas metálicas com solda MIG/MAG e elétrica.',
    cardSummary:
      'Conserto e fabricação de portões, grades de segurança, guarda-corpos, escadas, mezaninos, suportes e solda técnica em geral.',
    normSummary: 'Solda MIG/MAG · Portões · Estruturas',
    presentationParagraphs: [
      'Um portão travando, uma grade enferrujada ou uma estrutura metálica precisando de reforço comprometem a segurança e a praticidade do dia a dia.',
      'A S.A Manutenção oferece serviços completos de serralheria e solda diretamente no local ou sob medida, atendendo condomínios, empresas, indústrias e residências.',
      'Além da solda e do ajuste mecânico, já podemos entregar sua estrutura pintada e protegida contra ferrugem.',
    ],
    executedServices: [
      {
        title: 'Manutenção e reforma de portões',
        description: 'Troca de roldanas, cabos de aço, trilhos, dobradiças, alinhamento e solda de trincas.',
      },
      {
        title: 'Fabricação de grades, corrimãos e guarda-corpos',
        description: 'Proteção sob medida para escadas, sacadas, janelas e áreas externas.',
      },
      {
        title: 'Solda MIG/MAG e solda elétrica no local',
        description: 'Reparos rápidos e resistentes em estruturas metálicas, suportes e peças.',
      },
      {
        title: 'Estruturas metálicas, coberturas e mezaninos',
        description: 'Execução e reforço estrutural para ampliação de espaço em comércios e galpões.',
      },
      {
        title: 'Bases, bancadas e suportes para equipamentos',
        description: 'Suportes para ar-condicionado, motores, caixas d’água e bancadas de trabalho.',
      },
      {
        title: 'Recuperação de ferragens oxidadas',
        description: 'Substituição de partes corroídas, acabamento esmerilhado e pintura anticorrosiva.',
      },
    ],
    applications: [
      {
        segment: 'Condomínios e Residências',
        detail: 'Conserto rápido de portões de garagem, grades, lixeiras, corrimãos e coberturas.',
      },
      {
        segment: 'Comércios e Lojas',
        detail: 'Grades de proteção, portas metálicas, estruturas para placas e fachadas.',
      },
      {
        segment: 'Indústrias e Galpões',
        detail: 'Mezaninos, guarda-corpos, bases de máquinas, portões pesados e solda estrutural.',
      },
      {
        segment: 'Projetos Sob Medida',
        detail: 'Estruturas metálicas combinadas com marcenaria e pintura.',
      },
    ],
    technicalDifferentials: [
      {
        title: 'Atendimento Móvel no Local',
        description: 'Levamos equipamentos de solda e corte até seu imóvel para reparos imediatos.',
      },
      {
        title: 'Entrega com Pintura Protetiva',
        description: 'Sua peça ou portão já fica tratado com fundo anticorrosivo e pintado.',
      },
      {
        title: 'Solda Limpa e Segura',
        description: 'Cordões de solda firmes, bem acabados e sem rebarbas.',
      },
    ],
    safetyAndNorms: {
      title: 'Segurança Estrutural e Proteção no Trabalho a Quente',
      subtitle: 'Cuidado total com o ambiente durante cortes e soldagens.',
      items: [
        'Isolamento da área contra faíscas e respingos de solda.',
        'Uso completo de EPIs (máscara de escurecimento, luvas de raspa e proteção).',
        'Dimensionamento seguro de perfis e chapas metálicas.',
        'Acabamento lixado e protegido contra oxidação.',
      ],
    },
    faqs: [
      {
        question: 'Vocês consertam portão de garagem no próprio local?',
        answer:
          'Sim! Levamos máquina de solda e ferramentas até o condomínio, empresa ou residência para consertar trincas, dobradiças, trilhos e roldanas rapidamente.',
      },
      {
        question: 'Vocês também pintam o portão ou grade depois do serviço de serralheria?',
        answer:
          'Sim! Como temos a especialidade de Pintura integrada, entregamos o serviço completo: soldado, lixado, com fundo anticorrosivo e pintado.',
      },
    ],
    relatedSlugs: ['pintura', 'marcenaria', 'projetos-de-restauracao'],
    seo: {
      title: 'Serralheria e Solda em Salto, Itu e Indaiatuba | S.A Manutenção',
      description:
        'Serviços de serralheria, conserto de portões, grades, estruturas metálicas e solda MIG/MAG em Salto e região. Solicite orçamento pelo WhatsApp.',
      primaryKeyword: 'Serralheria em Salto SP',
      secondaryKeywords: ['Conserto de portões em Salto', 'Soldador em Salto e Itu'],
    },
    whatsappMessage: 'Olá! Gostaria de solicitar um orçamento de Serralheria com a S.A Manutenção.',
  },
  {
    slug: 'marcenaria',
    index: '04',
    name: 'Marcenaria',
    shortName: 'Móveis, Portas, Reparos e Madeira',
    heroTitle: 'MARCENARIA, AJUSTES E CONSERVAÇÃO DE ESTRUTURAS EM MADEIRA',
    heroHighlightWord: 'MARCENARIA',
    heroDescription:
      'Instalação, reparo, ajuste e restauração de portas, armários, balcões, painéis, decks e estruturas em madeira para ambientes comerciais e residenciais.',
    cardSummary:
      'Ajuste e instalação de portas, fechaduras, dobradiças, reparos em móveis e armários, decks, pergolados e soluções sob medida em madeira.',
    normSummary: 'Portas e Móveis · Ajustes · Acabamento em Madeira',
    presentationParagraphs: [
      'Portas raspando no chão, armários com dobradiças soltas, gavetas emperradas ou balcões comerciais desgastados prejudicam a funcionalidade e a estética do ambiente.',
      'A S.A Manutenção conta com serviço especializado de marcenaria para realizar desde pequenos reparos e regulagens até confecção de complementos, instalação de portas, rodapés, painéis e revitalização de madeiras.',
      'Unimos a marcenaria às nossas equipes de serralheria, elétrica e pintura para entregar soluções completas em um só atendimento.',
    ],
    executedServices: [
      {
        title: 'Instalação e ajuste de portas e batentes',
        description: 'Regulagem de portas emperradas, troca de batentes, guarnições, vistas e fechaduras.',
      },
      {
        title: 'Reparo e manutenção de armários e móveis',
        description: 'Substituição de dobradiças, corrediças telescópicas, puxadores, prateleiras e portas de correr.',
      },
      {
        title: 'Balcões, divisórias e mobiliário comercial',
        description: 'Adequação, montagem e reforma de balcões de atendimento, expositores e estações de trabalho.',
      },
      {
        title: 'Manutenção de decks, pergolados e painéis',
        description: 'Substituição de réguas danificadas, lixamento, tratamento e aplicação de verniz ou stain.',
      },
      {
        title: 'Instalação de rodapés, pisos laminados e forros',
        description: 'Acabamento preciso em madeira e derivados para escritórios, lojas e residências.',
      },
      {
        title: 'Restauração de peças e estruturas de madeira',
        description: 'Recuperação estética e estrutural de portas maciças, bancadas, mesas e estruturas.',
      },
    ],
    applications: [
      {
        segment: 'Empresas e Escritórios',
        detail: 'Manutenção de portas corporativas, estações de trabalho, armários e divisórias.',
      },
      {
        segment: 'Comércios e Restaurantes',
        detail: 'Conservação de balcões, mesas, painéis decorativos e portas de acesso.',
      },
      {
        segment: 'Condomínios e Residências',
        detail: 'Regulagem de portas, fechaduras, móveis planejados, decks e áreas gourmet.',
      },
      {
        segment: 'Projetos de Restauração',
        detail: 'Recuperação de madeiramento, esquadrias e peças especiais.',
      },
    ],
    technicalDifferentials: [
      {
        title: 'Ferramental Preciso',
        description: 'Cortes, nivelamentos e encaixes limpos sem danificar o restante do móvel ou parede.',
      },
      {
        title: 'Solução Completa (Madeira + Verniz + Ferragem)',
        description: 'Resolvemos a parte estrutural da madeira, as ferragens e o acabamento em verniz ou laca.',
      },
      {
        title: 'Atendimento para Pequenos e Médios Reparos',
        description: 'Você não precisa ficar com portas ou armários quebrados por falta de marceneiro que atenda manutenção.',
      },
    ],
    safetyAndNorms: {
      title: 'Qualidade de Acabamento e Preservação da Madeira',
      subtitle: 'Técnicas adequadas para garantir durabilidade e funcionamento suave.',
      items: [
        'Utilização de ferragens (dobradiças, corrediças e fechaduras) de alta durabilidade.',
        'Proteção contra cupins e umidade em conjunto com nossas outras especialidades.',
        'Organização e aspiração de serragem ao final do atendimento.',
        'Alinhamento e nivelamento conferidos em cada porta ou móvel.',
      ],
    },
    faqs: [
      {
        question: 'Vocês atendem chamados para consertar portas e armários que estão desalinhados?',
        answer:
          'Sim! Muitas vezes um armário ou porta não precisa ser trocado: fazemos a substituição de dobradiças, corrediças, colagem, reforço e alinhamento completo.',
      },
      {
        question: 'Vocês também fazem envernizamento de portas e decks de madeira?',
        answer:
          'Sim. Fazemos o lixamento técnico da madeira e aplicamos verniz marítimo, stain ou pintura para devolver a beleza e proteger contra sol e chuva.',
      },
    ],
    relatedSlugs: ['projetos-de-restauracao', 'pintura', 'serralheria'],
    seo: {
      title: 'Marcenaria e Reparos em Madeira em Salto e Região | S.A Manutenção',
      description:
        'Serviços de marcenaria em Salto, Itu, Indaiatuba, Porto Feliz e Sorocaba. Instalação e ajuste de portas, reparo de móveis, decks, pergolados e restauração.',
      primaryKeyword: 'Marcenaria em Salto SP',
      secondaryKeywords: ['Conserto de móveis e portas em Salto', 'Marceneiro manutenção'],
    },
    whatsappMessage: 'Olá! Gostaria de solicitar um orçamento de Marcenaria com a S.A Manutenção.',
  },
  {
    slug: 'encanador',
    index: '05',
    name: 'Encanador',
    shortName: 'Hidráulica, Vazamentos e Encanamento',
    heroTitle: 'ENCANADOR PROFISSIONAL PARA INSTALAÇÕES E REPAROS HIDRÁULICOS',
    heroHighlightWord: 'ENCANADOR',
    heroDescription:
      'Solução rápida e limpa para vazamentos, infiltrações, troca de registros, torneiras, válvulas, caixas d’água e tubulações de água e esgoto.',
    cardSummary:
      'Caça e reparo de vazamentos, troca de registros e válvulas, manutenção de caixas d’água, desentupimento leve e instalações hidráulicas completas.',
    normSummary: 'Zero Vazamentos · Água Fria/Quente · Esgoto',
    presentationParagraphs: [
      'Um pequeno vazamento oculto ou uma válvula desregulada pode multiplicar o valor da conta de água e causar infiltrações que estragam pinturas, móveis e estruturas.',
      'Com o serviço de Encanador da S.A Manutenção, você resolve problemas hidráulicos com agilidade e garantia. E o melhor: caso seja necessário abrir a parede para reparar um cano, nossa própria equipe faz o fechamento civil e a pintura do local!',
      'Atendemos residências, condomínios, restaurantes, comércios e indústrias em Salto, Itu, Indaiatuba, Porto Feliz e Sorocaba.',
    ],
    executedServices: [
      {
        title: 'Identificação e reparo de vazamentos',
        description: 'Correção de vazamentos em tubulações embutidas ou aparentes, conexões, sifões e engates.',
      },
      {
        title: 'Troca e reparo de registros e válvulas de descarga',
        description: 'Substituição de reparos de válvulas Hydra/caixas acopladas e registros que não fecham.',
      },
      {
        title: 'Instalação de torneiras, louças e metais sanitários',
        description: 'Vasos sanitários, cubas, pias, lavatórios, duchas, filtros e purificadores.',
      },
      {
        title: 'Manutenção e limpeza de caixas d’água',
        description: 'Troca de boias, flanges, registros de esfera e higienização periódica.',
      },
      {
        title: 'Redes de água fria, esgoto e águas pluviais',
        description: 'Ampliação de pontos de água, instalação de calhas, ralos, grelhas e caixas de gordura.',
      },
      {
        title: 'Reparo completo (Hidráulica + Acabamento)',
        description: 'Consertamos a tubulação e já entregamos a parede ou piso refeito e pintado.',
      },
    ],
    applications: [
      {
        segment: 'Condomínios e Residências',
        detail: 'Eliminação de vazamentos, manutenção de barriletes, caixas d’água e banheiros.',
      },
      {
        segment: 'Restaurantes e Comércios',
        detail: 'Pias industriais, caixas de gordura, torneiras profissionais e sanitários de clientes.',
      },
      {
        segment: 'Empresas e Escritórios',
        detail: 'Manutenção preventiva em banheiros coletivos e copas para evitar desperdício de água.',
      },
      {
        segment: 'Galpões e Indústrias',
        detail: 'Redes de utilidades, vestiários, drenagem pluvial e pontos de abastecimento.',
      },
    ],
    technicalDifferentials: [
      {
        title: 'Não Deixamos Parede Aberta',
        description: 'Diferente de um encanador avulso, nós mesmos fechamos a alvenaria, assentamos o revestimento e pintamos.',
      },
      {
        title: 'Economia na Conta de Água',
        description: 'Eliminamos vazamentos silenciosos em descargas, boias e registros.',
      },
      {
        title: 'Atendimento Ágil pelo WhatsApp',
        description: 'Resposta rápida para emergências hidráulicas que não podem esperar.',
      },
    ],
    safetyAndNorms: {
      title: 'Estanqueidade Testada e Materiais de Primeira Linha',
      subtitle: 'Conexões firmes e vedadas para evitar retrabalho.',
      items: [
        'Teste de pressão e estanqueidade antes de fechar qualquer reparo embutido.',
        'Uso de conexões, vedações e adesivos plásticos de qualidade comprovada.',
        'Integração segura quando há pontos elétricos próximos (chuveiros, torneiras elétricas e bombas).',
        'Limpeza e organização do ambiente após o serviço.',
      ],
    },
    faqs: [
      {
        question: 'Se precisar quebrar a parede para consertar o cano, vocês mesmos fecham e pintam?',
        answer:
          'Sim! Essa é uma das maiores vantagens da S.A Manutenção: você não precisa contratar um encanador, depois um pedreiro e depois um pintor. Nossa equipe entrega tudo pronto.',
      },
      {
        question: 'Vocês consertam descarga vazando e caixa acoplada?',
        answer:
          'Sim. Trocamos o reparo interno de válvulas de parede e mecanismos de caixas acopladas, eliminando o desperdício contínuo de água.',
      },
    ],
    relatedSlugs: ['eletrica', 'pintura', 'dedetizacao'],
    seo: {
      title: 'Encanador e Manutenção Hidráulica em Salto e Região | S.A Manutenção',
      description:
        'Encanador profissional em Salto, Itu, Indaiatuba, Porto Feliz e Sorocaba. Conserto de vazamentos, registros, descargas, caixas d’água e instalações hidráulicas.',
      primaryKeyword: 'Encanador em Salto SP',
      secondaryKeywords: ['Manutenção hidráulica em Salto', 'Conserto de vazamento Itu e Indaiatuba'],
    },
    whatsappMessage: 'Olá! Gostaria de solicitar um orçamento de Encanador / Hidráulica com a S.A Manutenção.',
  },
  {
    slug: 'dedetizacao',
    index: '06',
    name: 'Dedetização',
    shortName: 'Controle de Pragas e Sanitização',
    heroTitle: 'DEDETIZAÇÃO E CONTROLE DE PRAGAS PARA AMBIENTES PROTEGIDOS',
    heroHighlightWord: 'DEDETIZAÇÃO',
    heroDescription:
      'Elimine baratas, formigas, escorpiões, mosquitos, roedores e cupins com produtos regularizados pela ANVISA, segurança total e certificado.',
    cardSummary:
      'Desinsetização, desratização e descupinização para residências, restaurantes, condomínios, comércios e indústrias com emissão de certificado.',
    normSummary: 'Produtos Regularizados ANVISA · Certificado',
    presentationParagraphs: [
      'Manter sua casa, condomínio, restaurante ou empresa livre de pragas é essencial para a saúde, higiene e tranquilidade de todos.',
      'A S.A Manutenção realiza serviços técnicos de dedetização (controle de insetos rasteiros e voadores), desratização e controle de cupins em Salto, Itu, Indaiatuba, Porto Feliz e Sorocaba.',
      'Utilizamos produtos regularizados perante a ANVISA e, por sermos especialistas em manutenção e marcenaria, também orientamos e executamos a vedação de frestas, ralos e caixas de passagem.',
    ],
    executedServices: [
      {
        title: 'Controle de insetos rasteiros (Desinsetização)',
        description: 'Combate eficaz a baratas, formigas, aranhas, escorpiões, pulgas e traças.',
      },
      {
        title: 'Controle de roedores (Desratização)',
        description: 'Iscagem monitorada e segura em áreas externas, depósitos, forros e perímetros.',
      },
      {
        title: 'Controle de cupins (Descupinização)',
        description: 'Proteção e tratamento para portas, telhados, móveis de madeira e estruturas.',
      },
      {
        title: 'Controle de insetos voadores',
        description: 'Redução de moscas, mosquitos e pernilongos em áreas comerciais e residenciais.',
      },
      {
        title: 'Aplicação em gel (sem cheiro) e pulverização',
        description: 'Técnicas adequadas para cozinhas, restaurantes, escritórios e locais movimentados.',
      },
      {
        title: 'Emissão de laudo e certificado de execução',
        description: 'Documentação comprobatória conforme o serviço contratado.',
      },
    ],
    applications: [
      {
        segment: 'Restaurantes, Padarias e Comércios',
        detail: 'Proteção sanitária contínua com certificado de execução e aplicação programada.',
      },
      {
        segment: 'Condomínios e Residências',
        detail: 'Aplicação segura em ralos, caixas de esgoto, jardins e áreas internas.',
      },
      {
        segment: 'Indústrias e Galpões de Estoque',
        detail: 'Barreiras químicas e porta-iscas para proteger mercadorias e fiações.',
      },
      {
        segment: 'Proteção de Madeiras e Móveis',
        detail: 'Descupinização integrada com nosso serviço de Marcenaria e Restauração.',
      },
    ],
    technicalDifferentials: [
      {
        title: 'Produtos Regularizados ANVISA',
        description: 'Segurança comprovada e orientação clara sobre cuidados antes e após a aplicação.',
      },
      {
        title: 'Vedação de Acessos Físicos',
        description: 'Além de dedetizar, podemos instalar grelhas com fecho e vedar frestas estruturais.',
      },
      {
        title: 'Agendamento Flexível',
        description: 'Atendemos em horários que não atrapalhem o funcionamento do seu comércio.',
      },
    ],
    safetyAndNorms: {
      title: 'Conformidade Sanitária e Produtos ANVISA',
      subtitle: 'Proteção eficiente com responsabilidade técnica.',
      items: [
        'Uso exclusivo de domissanitários registrados na ANVISA.',
        'Porta-iscas travados para segurança em locais com circulação.',
        'Orientação completa sobre tempo de ventilação e reentrada.',
        'Certificado de execução conforme condições contratadas.',
      ],
    },
    faqs: [
      {
        question: 'Vocês emitem certificado de dedetização para comércios e condomínios?',
        answer:
          'Sim! Emitimos o certificado e laudo de execução conforme o serviço contratado.',
      },
      {
        question: 'Se minha porta ou móvel estiver com cupim, vocês tratam e também restauram a madeira?',
        answer:
          'Sim! Fazemos a descupinização completa e nossa equipe de Marcenaria e Projetos de Restauração pode recuperar ou substituir as partes afetadas.',
      },
    ],
    relatedSlugs: ['marcenaria', 'encanador', 'projetos-de-restauracao'],
    seo: {
      title: 'Dedetização e Controle de Pragas em Salto e Região | S.A Manutenção',
      description:
        'Dedetização em Salto, Itu, Indaiatuba, Porto Feliz e Sorocaba. Controle de baratas, escorpiões, ratos e cupins com produtos ANVISA e certificado.',
      primaryKeyword: 'Dedetização em Salto SP',
      secondaryKeywords: ['Controle de pragas em Salto', 'Descupinização e desratização'],
    },
    whatsappMessage: 'Olá! Gostaria de solicitar um orçamento de Dedetização com a S.A Manutenção.',
  },
  {
    slug: 'projetos-de-restauracao',
    index: '07',
    name: 'Projetos de Restauração',
    shortName: 'Revitalização de Ambientes e Estruturas',
    heroTitle: 'PROJETOS DE RESTAURAÇÃO E REVITALIZAÇÃO COMPLETA DE AMBIENTES',
    heroHighlightWord: 'RESTAURAÇÃO',
    heroDescription:
      'Transformamos e recuperamos ambientes comerciais, fachadas, imóveis antigos, áreas de condomínios e estruturas combinando todas as nossas especialidades.',
    cardSummary:
      'Revitalização completa integrando elétrica, pintura, serralheria, marcenaria e hidráulica para renovar imóveis, lojas, fachadas e estruturas.',
    normSummary: 'Solução Chave na Mão · Multidisciplinar',
    presentationParagraphs: [
      'Precisa reformar uma sala comercial, revitalizar a fachada da sua empresa, restaurar um imóvel para locação ou renovar áreas comuns do condomínio sem ter que lidar com cinco prestadores diferentes?',
      'Os Projetos de Restauração da S.A Manutenção unem todas as nossas especialidades — Elétrica, Pintura, Serralheria, Marcenaria e Encanador — sob uma única coordenação.',
      'Planejamos e executamos a recuperação estética e funcional de ambientes, estruturas metálicas, madeiramentos e instalações prediais em Salto e toda a região.',
    ],
    executedServices: [
      {
        title: 'Revitalização de fachadas e frentes comerciais',
        description: 'Integração de serralheria, iluminação em LED, reparos de alvenaria e pintura moderna.',
      },
      {
        title: 'Restauração de imóveis para entrega ou locação',
        description: 'Revisão completa de elétrica, hidráulica, portas, fechaduras e pintura nova para vistoria.',
      },
      {
        title: 'Recuperação de estruturas em madeira e metal',
        description: 'Restauração de portões, pergolados, decks, esquadrias, mezaninos e móveis.',
      },
      {
        title: 'Modernização de ambientes corporativos e lojas',
        description: 'Adequação de pontos elétricos, iluminação, pintura decorativa e ajustes de marcenaria.',
      },
      {
        title: 'Revitalização de áreas comuns de condomínios',
        description: 'Reforma de portarias, salões de festas, quiosques, garagens e áreas externas.',
      },
      {
        title: 'Gestão única do início ao fim',
        description: 'Um único orçamento técnico e uma única equipe coordenada até a entrega limpa.',
      },
    ],
    applications: [
      {
        segment: 'Comércios e Lojas',
        detail: 'Renovação rápida de ponto comercial para inauguração ou modernização da marca.',
      },
      {
        segment: 'Proprietários e Imobiliárias',
        detail: 'Restauração ágil de casas, apartamentos e galpões para venda, locação ou entrega de chaves.',
      },
      {
        segment: 'Condomínios Residenciais e Comerciais',
        detail: 'Revitalização de portarias, áreas de lazer, churrasqueiras e fachadas.',
      },
      {
        segment: 'Empresas e Indústrias',
        detail: 'Adequação e reforma de recepções, escritórios, refeitórios e áreas operacionais.',
      },
    ],
    technicalDifferentials: [
      {
        title: '5 em 1: Todas as Disciplinas Juntas',
        description: 'Sem atrasos de um profissional esperando pelo outro: nossa equipe resolve elétrica, hidráulica, madeira, ferro e pintura.',
      },
      {
        title: 'Orçamento Planejado por Etapas',
        description: 'Clareza total sobre o que será executado e acompanhamento direto pelo WhatsApp.',
      },
      {
        title: 'Acabamento de Alto Padrão',
        description: 'Atenção aos detalhes que valorizam o seu imóvel ou negócio.',
      },
    ],
    safetyAndNorms: {
      title: 'Planejamento, Organização e Garantia Integrada',
      subtitle: 'Sua obra ou restauração conduzida por profissionais de confiança.',
      items: [
        'Cronograma alinhado para reduzir o tempo de intervenção no imóvel.',
        'Conformidade técnica nas instalações elétricas (NBR 5410) e trabalhos em altura (NR-35).',
        'Proteção das áreas adjacentes e limpeza completa na entrega.',
        'Garantia unificada pela S.A Manutenção.',
      ],
    },
    faqs: [
      {
        question: 'Como funciona um Projeto de Restauração com a S.A Manutenção?',
        answer:
          'Vamos até o seu imóvel ou empresa, avaliamos todas as necessidades (elétrica, pintura, hidráulica, marcenaria e serralheria) e montamos um único plano de trabalho coordenado, poupando seu tempo e dinheiro.',
      },
      {
        question: 'Vocês fazem reforma para entrega de imóvel alugado (vistoria de saída)?',
        answer:
          'Sim! Realizamos todos os reparos exigidos na vistoria: pintura, troca de tomadas, conserto de torneiras, ajuste de portas, fechaduras e limpeza final.',
      },
    ],
    relatedSlugs: ['pintura', 'eletrica', 'marcenaria'],
    seo: {
      title: 'Projetos de Restauração e Revitalização de Imóveis em Salto | S.A Manutenção',
      description:
        'Projetos de restauração predial, comercial e residencial em Salto, Itu, Indaiatuba, Porto Feliz e Sorocaba. Elétrica, pintura, serralheria, marcenaria e hidráulica.',
      primaryKeyword: 'Restauração de imóveis em Salto SP',
      secondaryKeywords: ['Reforma comercial em Salto', 'Manutenção para entrega de imóvel'],
    },
    whatsappMessage: 'Olá! Gostaria de solicitar um orçamento de Projeto de Restauração com a S.A Manutenção.',
  },
];

export const SERVICE_GALLERY_ITEMS: GalleryItem[] = [
  // 1. Elétrica
  {
    id: 'gal-eletrica-1',
    serviceSlug: 'eletrica',
    serviceName: 'Elétrica',
    title: 'Montagem e Revisão de Quadro Elétrico (QDF)',
    subtitle: 'Organização de circuitos, troca de disjuntores e proteção contra sobrecargas',
    locationTag: 'Salto – SP',
    highlightText: 'Segurança NBR 5410',
  },
  {
    id: 'gal-eletrica-2',
    serviceSlug: 'eletrica',
    serviceName: 'Elétrica',
    title: 'Modernização para Iluminação em LED',
    subtitle: 'Redução de até 80% no consumo de iluminação e valorização do ambiente',
    locationTag: 'Indaiatuba – SP',
    highlightText: 'Economia na Conta',
  },
  {
    id: 'gal-eletrica-3',
    serviceSlug: 'eletrica',
    serviceName: 'Elétrica',
    title: 'Instalação de DPS, DR e Correção de Falhas',
    subtitle: 'Proteção contra surtos elétricos, choques e eliminação de curtos-circuitos',
    locationTag: 'Itu – SP',
    highlightText: 'Proteção NR-10',
  },

  // 2. Pintura
  {
    id: 'gal-pintura-1',
    serviceSlug: 'pintura',
    serviceName: 'Pintura',
    title: 'Pintura Comercial, Predial e Galpões',
    subtitle: 'Preparação completa de superfície, tratamento de trincas e aplicação Airless',
    locationTag: 'Itu – SP',
    highlightText: 'Acabamento Impecável',
  },
  {
    id: 'gal-pintura-2',
    serviceSlug: 'pintura',
    serviceName: 'Pintura',
    title: 'Renovação de Fachadas e Áreas Externas',
    subtitle: 'Tintas resistentes às intempéries e proteção completa contra umidade',
    locationTag: 'Salto – SP',
    highlightText: 'Valorização do Imóvel',
  },
  {
    id: 'gal-pintura-3',
    serviceSlug: 'pintura',
    serviceName: 'Pintura',
    title: 'Pintura Interna Residencial e Corporativa',
    subtitle: 'Isolamento cuidadoso de pisos e móveis com entrega limpa e rápida',
    locationTag: 'Indaiatuba – SP',
    highlightText: 'Serviço Limpo',
  },

  // 3. Serralheria
  {
    id: 'gal-serralheria-1',
    serviceSlug: 'serralheria',
    serviceName: 'Serralheria',
    title: 'Solda MIG/MAG, Portões e Estruturas Metálicas',
    subtitle: 'Fabricação, reforço estrutural e manutenção de portões e guarda-corpos',
    locationTag: 'Salto – SP',
    highlightText: 'Alta Resistência',
  },
  {
    id: 'gal-serralheria-2',
    serviceSlug: 'serralheria',
    serviceName: 'Serralheria',
    title: 'Conserto e Ajuste de Portões e Grades',
    subtitle: 'Substituição de roldanas, cabos de aço, travas e alinhamento de folhas',
    locationTag: 'Porto Feliz – SP',
    highlightText: 'Segurança Patrimonial',
  },
  {
    id: 'gal-serralheria-3',
    serviceSlug: 'serralheria',
    serviceName: 'Serralheria',
    title: 'Corrimãos, Escadas e Mezaninos Metálicos',
    subtitle: 'Corte, dobra e solda de precisão com proteção anticorrosiva',
    locationTag: 'Sorocaba – SP',
    highlightText: 'Sob Medida',
  },

  // 4. Marcenaria
  {
    id: 'gal-marcenaria-1',
    serviceSlug: 'marcenaria',
    serviceName: 'Marcenaria',
    title: 'Ajuste de Portas, Móveis, Balcões e Decks',
    subtitle: 'Regulagem de ferragens, instalação de portas e conservação de madeiras',
    locationTag: 'Itu – SP',
    highlightText: 'Sob Medida',
  },
  {
    id: 'gal-marcenaria-2',
    serviceSlug: 'marcenaria',
    serviceName: 'Marcenaria',
    title: 'Instalação e Reparo de Portas, Batentes e Fechaduras',
    subtitle: 'Alinhamento de portas raspando, troca de dobradiças e guarnições',
    locationTag: 'Salto – SP',
    highlightText: 'Acabamento Fino',
  },
  {
    id: 'gal-marcenaria-3',
    serviceSlug: 'marcenaria',
    serviceName: 'Marcenaria',
    title: 'Manutenção de Armários, Gabinetes e Pergolados',
    subtitle: 'Troca de corrediças, puxadores e tratamento protetor em madeiras',
    locationTag: 'Indaiatuba – SP',
    highlightText: 'Alta Durabilidade',
  },

  // 5. Encanador
  {
    id: 'gal-encanador-1',
    serviceSlug: 'encanador',
    serviceName: 'Encanador',
    title: 'Reparo de Vazamentos, Registros e Hidráulica',
    subtitle: 'Manutenção limpa de tubulações, válvulas, torneiras e caixas d’água',
    locationTag: 'Porto Feliz – SP',
    highlightText: 'Zero Desperdício',
  },
  {
    id: 'gal-encanador-2',
    serviceSlug: 'encanador',
    serviceName: 'Encanador',
    title: 'Instalação de Louças, Metais, Sifões e Válvulas',
    subtitle: 'Substituição rápida de registros, caixas acopladas e torneiras',
    locationTag: 'Salto – SP',
    highlightText: 'Atendimento Ágil',
  },
  {
    id: 'gal-encanador-3',
    serviceSlug: 'encanador',
    serviceName: 'Encanador',
    title: 'Adequação de Redes de Água Fria e Esgoto',
    subtitle: 'Tubulações comerciais, industriais e residenciais sem infiltrações',
    locationTag: 'Itu – SP',
    highlightText: 'Garantia Técnica',
  },

  // 6. Dedetização
  {
    id: 'gal-dedetizacao-1',
    serviceSlug: 'dedetizacao',
    serviceName: 'Dedetização',
    title: 'Controle de Pragas com Produtos ANVISA',
    subtitle: 'Proteção contra insetos, escorpiões, roedores e cupins com certificado',
    locationTag: 'Sorocaba – SP',
    highlightText: 'Ambiente Protegido',
  },
  {
    id: 'gal-dedetizacao-2',
    serviceSlug: 'dedetizacao',
    serviceName: 'Dedetização',
    title: 'Desinsetização e Desratização para Empresas e Condomínios',
    subtitle: 'Barreira química preventiva em ralos, caixas de passagem e perímetros',
    locationTag: 'Salto – SP',
    highlightText: 'Laudo e Certificado',
  },
  {
    id: 'gal-dedetizacao-3',
    serviceSlug: 'dedetizacao',
    serviceName: 'Dedetização',
    title: 'Aplicação em Gel e Pulverização Sem Cheiro',
    subtitle: 'Segurança para residências, restaurantes, escritórios e comércios',
    locationTag: 'Indaiatuba – SP',
    highlightText: 'Higiene e Segurança',
  },

  // 7. Projetos de Restauração
  {
    id: 'gal-restauracao-1',
    serviceSlug: 'projetos-de-restauracao',
    serviceName: 'Projetos de Restauração',
    title: 'Revitalização Completa de Fachadas e Imóveis',
    subtitle: 'Elétrica, pintura, serralheria, marcenaria e hidráulica integradas',
    locationTag: 'Salto – SP',
    highlightText: 'Transformação Completa',
  },
  {
    id: 'gal-restauracao-2',
    serviceSlug: 'projetos-de-restauracao',
    serviceName: 'Projetos de Restauração',
    title: 'Reforma Rápida para Entrega de Imóvel e Vistoria',
    subtitle: 'Revisão geral de pintura, tomadas, torneiras, portas e fechaduras',
    locationTag: 'Itu – SP',
    highlightText: 'Pronto para Entrega',
  },
  {
    id: 'gal-restauracao-3',
    serviceSlug: 'projetos-de-restauracao',
    serviceName: 'Projetos de Restauração',
    title: 'Modernização de Lojas, Recepção e Áreas Comuns',
    subtitle: 'Um único parceiro coordenando todas as etapas do início ao fim',
    locationTag: 'Indaiatuba – SP',
    highlightText: 'Gestão Integrada',
  },
];

export const INSTAGRAM_CAROUSEL_POSTS = [
  {
    id: 'post-1',
    badge: 'Dica de Economia',
    titlePrefix: 'Está pagando muito na',
    highlight: 'conta de luz?',
    titleSuffix: '',
    description:
      'Troque lâmpadas comuns por LED (economize até 80%), desligue aparelhos em standby e mantenha sua instalação elétrica revisada para evitar fugas de energia e dores de cabeça!',
    imagePath: '/assets/aistudio/carrossel_1.png',
    ctaLabel: 'Ver dica no Instagram',
  },
  {
    id: 'post-2',
    badge: 'Prevenção e Segurança',
    titlePrefix: 'Proteja seu imóvel contra',
    highlight: 'falhas elétricas!',
    titleSuffix: '',
    description:
      'Nunca sobrecarregue tomadas com benjamins, evite o uso contínuo de extensões e revise os disjuntores regularmente com um eletricista de confiança.',
    imagePath: '/assets/aistudio/carrossel_2.png',
    ctaLabel: 'Conferir carrossel no Instagram',
  },
  {
    id: 'post-3',
    badge: 'Qualidade Profissional',
    titlePrefix: 'Por que contar com um',
    highlight: 'profissional',
    titleSuffix: 'faz toda a diferença?',
    description:
      'Garantia de segurança para sua família e sua empresa! Evite prejuízos causados por serviços malfeitos com identificação precisa e execução garantida.',
    imagePath: '/assets/aistudio/carrossel_3.png',
    ctaLabel: 'Seguir @manutencao.araujo',
  },
];

export const WHY_CHOOSE_US = [
  {
    index: '01',
    title: '7 Especialidades em um só lugar',
    description: 'Elétrica, Pintura, Serralheria, Marcenaria, Encanador, Dedetização e Projetos de Restauração.',
  },
  {
    index: '02',
    title: 'Atendimento próximo e rápido',
    description: 'Agilidade em Salto, Itu, Indaiatuba, Porto Feliz e Sorocaba para você não ficar esperando.',
  },
  {
    index: '03',
    title: 'Segurança para sua empresa e família',
    description: 'Profissionais de confiança que evitam prejuízos e executam tudo dentro das normas.',
  },
  {
    index: '04',
    title: 'Orçamento sem compromisso',
    description: 'Avaliamos sua necessidade com transparência e indicamos a melhor solução com preço justo.',
  },
  {
    index: '05',
    title: 'Serviço limpo e com garantia',
    description: 'Cuidamos da organização do seu espaço e damos garantia conforme o serviço contratado.',
  },
  {
    index: '06',
    title: 'Chame direto no WhatsApp',
    description: 'Sem burocracia: fale direto com nossa equipe pelo WhatsApp (11) 95145-9102.',
  },
];

export const SEGMENTS_DATA: SegmentItem[] = [
  {
    id: 'industrias-e-galpoes',
    index: '01',
    title: 'Indústrias e galpões',
    subtitle: 'Manutenção ágil para sua operação produzir com segurança.',
    description:
      'Atendemos galpões e indústrias com manutenção elétrica de quadros, iluminação, serralheria e solda estrutural, pintura de pisos e estruturas, hidráulica e controle de pragas.',
    commonDemands: [
      'Montagem e revisão de quadros elétricos (QDF) e iluminação industrial',
      'Serralheria, solda MIG/MAG, reforço de mezaninos e portões',
      'Pintura de galpões, estruturas metálicas e demarcação de pisos',
      'Dedetização e controle de roedores com certificado',
    ],
    recommendedServices: ['eletrica', 'serralheria', 'pintura', 'dedetizacao'],
    whatsappText: 'Olá! Gostaria de solicitar um orçamento de manutenção para Indústria / Galpão com a S.A Manutenção.',
  },
  {
    id: 'empresas-e-escritorios',
    index: '02',
    title: 'Empresas e escritórios',
    subtitle: 'Ambiente bem cuidado e funcionando perfeitamente para sua equipe.',
    description:
      'Resolvemos desde tomadas, iluminação LED e quadros elétricos até ajuste de portas e armários (marcenaria), pintura corporativa, encanamento e dedetização.',
    commonDemands: [
      'Revisão elétrica, iluminação em LED e proteção para computadores',
      'Marcenaria: ajuste de portas, fechaduras, estações de trabalho e armários',
      'Pintura interna e revitalização de fachadas corporativas',
      'Encanador para reparos em banheiros e copas',
    ],
    recommendedServices: ['eletrica', 'marcenaria', 'pintura', 'encanador'],
    whatsappText: 'Olá! Gostaria de solicitar um orçamento de manutenção para Empresa / Escritório com a S.A Manutenção.',
  },
  {
    id: 'comercios',
    index: '03',
    title: 'Comércios e lojas',
    subtitle: 'Sua loja bonita, iluminada e segura para receber seus clientes.',
    description:
      'Oferecemos projetos de restauração comercial, elétrica para climatização e vitrines, pintura de fachadas, conserto de portões de aço, marcenaria de balcões e hidráulica.',
    commonDemands: [
      'Iluminação de destaque em LED e revisão de disjuntores',
      'Projetos de restauração de fachada, pintura e marcenaria comercial',
      'Serralheria para manutenção de portas de aço, grades e suportes',
      'Reparos hidráulicos rápidos e dedetização periódica',
    ],
    recommendedServices: ['eletrica', 'pintura', 'projetos-de-restauracao', 'serralheria'],
    whatsappText: 'Olá! Gostaria de solicitar um orçamento de manutenção para Comércio com a S.A Manutenção.',
  },
  {
    id: 'condominios',
    index: '04',
    title: 'Condomínios e residências',
    subtitle: 'Tranquilidade e segurança para síndicos, moradores e famílias.',
    description:
      'Um único parceiro de confiança para cuidar da elétrica, encanamento, pintura, conserto de portões e grades, marcenaria de portas/áreas gourmet e dedetização.',
    commonDemands: [
      'Elétrica residencial e condominial: quadros, disjuntores, LED e sensores',
      'Serralheria: conserto de portões de garagem, grades e corrimãos',
      'Encanador para caça-vazamentos, registros, descargas e caixas d’água',
      'Pintura, marcenaria e projetos de restauração de áreas comuns',
    ],
    recommendedServices: ['eletrica', 'encanador', 'serralheria', 'pintura', 'marcenaria', 'dedetizacao'],
    whatsappText: 'Olá! Gostaria de solicitar um orçamento para Condomínio / Residência com a S.A Manutenção.',
  },
  {
    id: 'restaurantes-e-alimenticios',
    index: '05',
    title: 'Restaurantes e setor alimentício',
    subtitle: 'Higiene, segurança elétrica e manutenção sem interromper seu atendimento.',
    description:
      'Cuidamos da dedetização com produtos ANVISA e certificado, elétrica para equipamentos de cozinha/refrigeração, encanamento de pias/caixas de gordura e marcenaria/pintura.',
    commonDemands: [
      'Dedetização e controle de pragas com emissão de certificado',
      'Elétrica dimensionada para freezers, fornos, coifas e iluminação',
      'Encanador para torneiras profissionais, sifões e caixas de gordura',
      'Pintura e conservação de mesas, balcões e salão',
    ],
    recommendedServices: ['dedetizacao', 'eletrica', 'encanador', 'marcenaria'],
    whatsappText: 'Olá! Gostaria de solicitar um orçamento para Restaurante / Alimentação com a S.A Manutenção.',
  },
  {
    id: 'gestores-prediais-e-sindicos',
    index: '06',
    title: 'Síndicos, imobiliárias e gestores',
    subtitle: 'Acabe com a dor de cabeça de procurar vários profissionais avulsos.',
    description:
      'Atendemos síndicos, administradoras e imobiliárias com pacotes completos de manutenção preventiva, corretiva e projetos de restauração para entrega de imóveis.',
    commonDemands: [
      'Projetos de restauração completos para entrega de chaves e vistorias',
      'Fornecedor único para elétrica, pintura, serralheria, marcenaria e hidráulica',
      'Orçamentos claros e atendimento rápido direto pelo WhatsApp',
      'Dedetização periódica de condomínios e imóveis',
    ],
    recommendedServices: ['projetos-de-restauracao', 'eletrica', 'pintura', 'encanador', 'serralheria', 'marcenaria', 'dedetizacao'],
    whatsappText: 'Olá! Sou síndico / gestor e gostaria de conversar sobre parceria com a S.A Manutenção.',
  },
];

export const REGIONAL_CITIES: RegionalCity[] = [
  {
    name: 'Salto',
    state: 'SP',
    tag: 'Base Local',
    corridor: 'Atendimento em todos os bairros',
    description:
      'Nossa cidade-sede! Atendemos com máxima rapidez residências, condomínios, comércios e indústrias em toda a cidade de Salto – SP.',
    focusAreas: [
      'Elétrica, Pintura, Serralheria e Marcenaria',
      'Encanador, Dedetização e Projetos de Restauração',
      'Condomínios, empresas, lojas e residências em Salto',
    ],
    coordinates: { x: 52, y: 46 },
  },
  {
    name: 'Itu',
    state: 'SP',
    tag: 'Vizinha Imediata',
    corridor: 'Deslocamento rápido Salto–Itu',
    description:
      'Pela proximidade imediata com Salto, nossa equipe atende Itu diariamente em condomínios, empresas, comércios e galpões.',
    focusAreas: [
      'Condomínios e residências em Itu',
      'Comércios, restaurantes e escritórios',
      'Manutenção completa e projetos de restauração',
    ],
    coordinates: { x: 58, y: 60 },
  },
  {
    name: 'Indaiatuba',
    state: 'SP',
    tag: 'Atendimento Ágil',
    corridor: 'Eixo SP-075',
    description:
      'Levamos todas as 7 especialidades da S.A Manutenção para empresas, indústrias, condomínios e comércios em Indaiatuba.',
    focusAreas: [
      'Empresas, galpões e polos industriais',
      'Condomínios residenciais e comerciais',
      'Elétrica, pintura, serralheria, marcenaria e hidráulica',
    ],
    coordinates: { x: 74, y: 30 },
  },
  {
    name: 'Porto Feliz',
    state: 'SP',
    tag: 'Cobertura Regional',
    corridor: 'Eixo Rodovia Marechal Rondon',
    description:
      'Atendimento técnico de confiança para empresas, condomínios, propriedades e comércios em Porto Feliz.',
    focusAreas: [
      'Manutenção elétrica, hidráulica e pintura',
      'Serralheria, marcenaria e restauração',
      'Dedetização e controle de pragas',
    ],
    coordinates: { x: 26, y: 42 },
  },
  {
    name: 'Sorocaba',
    state: 'SP',
    tag: 'Polo Regional',
    corridor: 'Eixo SP-075 / Castelo Branco',
    description:
      'Soluções integradas da S.A Manutenção para empresas, redes comerciais, condomínios e indústrias em Sorocaba.',
    focusAreas: [
      'Projetos de restauração e manutenção empresarial',
      'Elétrica, pintura, serralheria e marcenaria',
      'Atendimento agendado pelo WhatsApp',
    ],
    coordinates: { x: 24, y: 78 },
  },
];
