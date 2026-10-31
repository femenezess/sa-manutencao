import React from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Target,
  Instagram,
  MessageSquare,
  MapPin,
  ArrowUpRight,
} from 'lucide-react';
import {
  COMPANY_INFO,
  SERVICES_DATA,
  SEGMENTS_DATA,
  WHY_CHOOSE_US,
  getWhatsAppLink,
} from '../data/siteData';
import { HeroIndustrialVisual } from '../components/BrandVisuals';
import { SEOHead, BreadcrumbsNav } from '../components/SEOHead';

interface PageNavProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<PageNavProps> = ({ onNavigate }) => {
  const breadcrumbs = [
    { label: 'Início', path: '/' },
    { label: 'Sobre a Empresa', path: '/sobre' },
  ];

  const workflowSteps = [
    {
      step: '01',
      title: 'Contato e Levantamento',
      description:
        'Atendimento direto pelo WhatsApp ou formulário para compreensão imediata da demanda e agendamento de vistoria técnica.',
    },
    {
      step: '02',
      title: 'Diagnóstico e Orçamento Técnico',
      description:
        'Avaliação criteriosa das instalações no local e elaboração de proposta técnica transparente e sem custo.',
    },
    {
      step: '03',
      title: 'Execução Normatizada',
      description:
        'Intervenção planejada para mínima interferência na operação do cliente, seguindo normas técnicas (NBR 5410, NR-10, NR-35, ANVISA).',
    },
    {
      step: '04',
      title: 'Entrega Técnica e Garantia',
      description:
        'Conferência final da qualidade de execução, organização do ambiente e garantia conforme as condições contratadas.',
    },
  ];

  return (
    <>
      <SEOHead
        title="Sobre a S.A Manutenção | Manutenção Industrial, Predial e Comercial em Salto SP"
        description="Conheça a história e o compromisso técnico da S.A Manutenção. Um único parceiro em Salto, Itu, Indaiatuba, Porto Feliz e Sorocaba para elétrica, predial, pintura, solda e controle de pragas."
        path="/sobre"
        breadcrumbs={breadcrumbs}
      />

      <BreadcrumbsNav items={breadcrumbs} onNavigate={onNavigate} />

      {/* Hero Section */}
      <section className="py-14 lg:py-20 bg-[#171719] bg-industrial-grid border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              <p className="font-mono-tech text-xs text-[#FF8900] uppercase tracking-widest">
                Institucional · {COMPANY_INFO.name}
              </p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-[1.08] headline-balance">
                UMA EMPRESA. DIFERENTES ESPECIALIDADES.{' '}
                <span className="text-[#C5A45A]">UM MESMO COMPROMISSO.</span>
              </h1>

              <div className="space-y-4 text-base sm:text-lg text-neutral-300 leading-relaxed">
                <p>
                  A <strong>S.A Manutenção</strong> nasceu como uma empresa especializada em
                  serviços elétricos e evoluiu para atender uma demanda real do mercado: empresas e
                  condomínios que precisam de um único parceiro confiável para resolver diferentes
                  necessidades de manutenção.
                </p>
                <p>
                  Hoje integramos elétrica, manutenção predial, pintura industrial e comercial,
                  solda e controle de pragas, oferecendo soluções completas para diferentes tipos
                  de operação.
                </p>
                <p>
                  Nosso trabalho é pautado pela segurança, qualidade técnica, agilidade no
                  atendimento e compromisso com as necessidades de cada cliente. Atendemos Salto e
                  região, oferecendo orçamentos técnicos sem custo e serviços com garantia,
                  conforme as condições contratadas.
                </p>
              </div>

              <div className="p-5 bg-[#252525] border border-[#C5A45A]/40 rounded-lg">
                <p className="font-mono-tech text-xs text-[#C5A45A] uppercase mb-1">
                  Nossa Missão Institucional
                </p>
                <p className="text-base sm:text-lg font-semibold text-white">
                  “Nossa missão é manter sua operação funcionando, segura e apresentável, enquanto
                  você foca no seu negócio.”
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 flex">
              <HeroIndustrialVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Proposta de Valor & Pilares */}
      <section className="py-16 lg:py-24 bg-[#1B1B1E] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#252525] border border-white/10 rounded-lg p-7 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono-tech text-xs text-[#FF8900] uppercase">
                  Proposta de Valor
                </span>
                <Target className="w-5 h-5 text-[#C5A45A]" aria-hidden="true" />
              </div>
              <h2 className="font-display text-2xl font-bold uppercase text-white">
                Um Único Parceiro Técnico
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Unimos em um único fornecedor todas as disciplinas que uma empresa, indústria,
                condomínio ou comércio precisa para manter sua estrutura segura e produtiva.
              </p>
            </div>

            <div className="bg-[#252525] border border-white/10 rounded-lg p-7 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono-tech text-xs text-[#FF8900] uppercase">
                  Rigor Normativo
                </span>
                <ShieldCheck className="w-5 h-5 text-[#C5A45A]" aria-hidden="true" />
              </div>
              <h2 className="font-display text-2xl font-bold uppercase text-white">
                Segurança e Conformidade
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Execução orientada pelas normas técnicas aplicáveis a cada disciplina, incluindo
                ABNT NBR 5410, NR-10, NR-35 e produtos regularizados perante a ANVISA.
              </p>
            </div>

            <div className="bg-[#252525] border border-white/10 rounded-lg p-7 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono-tech text-xs text-[#FF8900] uppercase">
                  Presença Regional
                </span>
                <MapPin className="w-5 h-5 text-[#C5A45A]" aria-hidden="true" />
              </div>
              <h2 className="font-display text-2xl font-bold uppercase text-white">
                Salto e Toda a Região
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Base em Salto – SP com atendimento ágil e direto para empresas, indústrias e
                condomínios em Salto, Itu, Indaiatuba, Porto Feliz e Sorocaba.
              </p>
            </div>
          </div>

          {/* Metodologia de Trabalho */}
          <div className="pt-8 border-t border-white/10">
            <div className="max-w-3xl mb-10 space-y-2">
              <p className="font-mono-tech text-xs text-[#C5A45A] uppercase tracking-widest">
                Metodologia de Atendimento
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-white">
                COMO TRABALHAMOS NA SUA OPERAÇÃO
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {workflowSteps.map((item) => (
                <div
                  key={item.step}
                  className="bg-[#171719] border border-white/10 rounded-lg p-6 space-y-3"
                >
                  <span className="font-mono-tech text-sm font-bold text-[#FF8900]">
                    Etapa {item.step}
                  </span>
                  <h3 className="font-display text-xl font-bold uppercase text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-300 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais + Instagram Official Reference */}
      <section className="py-16 lg:py-24 bg-[#171719]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map((item) => (
              <div
                key={item.index}
                className="bg-[#252525] border border-white/10 rounded-lg p-6 space-y-2"
              >
                <span className="font-mono-tech text-xs text-[#C5A45A]">{item.index}.</span>
                <h3 className="font-display text-xl font-bold uppercase text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#252525] border border-white/15 rounded-lg p-8 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 font-mono-tech text-xs text-[#C5A45A]">
                <Instagram className="w-4 h-4 text-[#FF8900]" aria-hidden="true" />
                <span>Acompanhe nosso dia a dia técnico: {COMPANY_INFO.instagramHandle}</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white">
                CONHEÇA NOSSOS SERVIÇOS EM CAMPO OU SOLICITE UM ORÇAMENTO
              </h2>
              <p className="text-sm sm:text-base text-neutral-300">
                Entre em contato com nossa equipe pelo WhatsApp para avaliar a necessidade da sua
                empresa, indústria ou condomínio.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#FF8900] hover:bg-[#e67a00] text-[#171719] font-display font-bold text-sm uppercase tracking-wider rounded transition-colors"
              >
                <MessageSquare className="w-4 h-4 fill-[#171719]" aria-hidden="true" />
                <span>SOLICITAR ORÇAMENTO</span>
              </a>

              <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-[#171719] hover:bg-black text-white border border-white/15 font-display font-bold text-sm uppercase tracking-wider rounded transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#C5A45A]" aria-hidden="true" />
                <span>VER INSTAGRAM</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const SegmentsPage: React.FC<PageNavProps> = ({ onNavigate }) => {
  const breadcrumbs = [
    { label: 'Início', path: '/' },
    { label: 'Segmentos Atendidos', path: '/segmentos' },
  ];

  return (
    <>
      <SEOHead
        title="Segmentos Atendidos: Indústrias, Condomínios e Empresas | S.A Manutenção"
        description="Soluções integradas de manutenção para indústrias, galpões, empresas, comércios, condomínios, restaurantes e gestores prediais em Salto, Itu, Indaiatuba, Porto Feliz e Sorocaba."
        path="/segmentos"
        breadcrumbs={breadcrumbs}
      />

      <BreadcrumbsNav items={breadcrumbs} onNavigate={onNavigate} />

      <section className="py-14 lg:py-20 bg-[#171719] bg-industrial-grid border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="font-mono-tech text-xs text-[#FF8900] uppercase tracking-widest">
              Segmentos de Atuação · Salto e Região
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white headline-balance">
              SOLUÇÕES PARA DIFERENTES <span className="text-[#C5A45A]">TIPOS DE OPERAÇÃO.</span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              Cada ambiente possui exigências técnicas específicas de disponibilidade, segurança e
              apresentação. Veja como a S.A Manutenção integra suas disciplinas para atender o seu
              segmento.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[#1B1B1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {SEGMENTS_DATA.map((segment) => {
            const matchedServices = SERVICES_DATA.filter((s) =>
              segment.recommendedServices.includes(s.slug)
            );

            return (
              <article
                key={segment.id}
                className="bg-[#252525] border border-white/10 rounded-lg p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              >
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-2 font-mono-tech text-xs text-[#FF8900]">
                    <span>Segmento {segment.index}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#C5A45A]">Atendimento Especializado</span>
                  </div>

                  <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white">
                    {segment.title}
                  </h2>

                  <p className="text-sm sm:text-base font-medium text-[#C5A45A]">
                    {segment.subtitle}
                  </p>

                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                    {segment.description}
                  </p>

                  <div className="pt-2 space-y-2">
                    <h3 className="font-mono-tech text-xs text-white uppercase">
                      Principais Demandas Resolvidas:
                    </h3>
                    <ul className="space-y-2 text-sm text-neutral-300">
                      {segment.commonDemands.map((demand) => (
                        <li key={demand} className="flex items-start gap-2.5">
                          <CheckCircle2
                            className="w-4 h-4 text-[#FF8900] shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span>{demand}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-[#171719] border border-white/10 rounded-lg p-6 space-y-5">
                  <div>
                    <span className="font-mono-tech text-xs text-[#C5A45A] uppercase">
                      Integração de Disciplinas
                    </span>
                    <h3 className="font-display text-xl font-bold uppercase text-white mt-1">
                      Serviços Recomendados para este Setor
                    </h3>
                  </div>

                  <div className="space-y-2.5">
                    {matchedServices.map((srv) => (
                      <a
                        key={srv.slug}
                        href={`/servicos/${srv.slug}`}
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate(`/servicos/${srv.slug}`);
                        }}
                        className="flex items-center justify-between p-3 rounded bg-[#252525] hover:bg-white/10 border border-white/5 transition-colors group"
                      >
                        <div>
                          <span className="text-sm font-semibold text-white group-hover:text-[#FF8900] transition-colors">
                            {srv.index}. {srv.name}
                          </span>
                          <span className="block text-xs text-neutral-400">{srv.normSummary}</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#FF8900]" aria-hidden="true" />
                      </a>
                    ))}
                  </div>

                  <a
                    href={getWhatsAppLink(segment.whatsappText)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#FF8900] hover:bg-[#e67a00] text-[#171719] font-display font-bold text-sm uppercase tracking-wider rounded transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 fill-[#171719]" aria-hidden="true" />
                    <span>SOLICITAR ORÇAMENTO PARA ESTE SETOR</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export const PrivacyPolicyPage: React.FC<PageNavProps> = ({ onNavigate }) => {
  const breadcrumbs = [
    { label: 'Início', path: '/' },
    { label: 'Política de Privacidade', path: '/politica-de-privacidade' },
  ];

  return (
    <>
      <SEOHead
        title="Política de Privacidade | S.A Manutenção"
        description="Política de Privacidade e proteção de dados da S.A Manutenção em conformidade com a Lei Geral de Proteção de Dados (LGPD)."
        path="/politica-de-privacidade"
        breadcrumbs={breadcrumbs}
      />

      <BreadcrumbsNav items={breadcrumbs} onNavigate={onNavigate} />

      <section className="py-16 lg:py-24 bg-[#171719]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-neutral-300">
          <div className="space-y-2 border-b border-white/10 pb-6">
            <p className="font-mono-tech text-xs text-[#FF8900] uppercase">
              Conformidade LGPD · Lei nº 13.709/2018
            </p>
            <h1 className="font-display text-3xl sm:text-4xl font-bold uppercase text-white">
              Política de Privacidade — {COMPANY_INFO.name}
            </h1>
          </div>

          <div className="space-y-4 text-sm sm:text-base leading-relaxed">
            <h2 className="font-display text-xl font-bold uppercase text-white">
              1. Coleta e Finalidade dos Dados
            </h2>
            <p>
              A <strong>{COMPANY_INFO.name}</strong> coleta apenas as informações fornecidas
              voluntariamente pelo usuário ao preencher o formulário de solicitação de orçamento ou
              ao iniciar atendimento via WhatsApp (nome, nome da empresa, telefone/WhatsApp,
              e-mail, cidade, tipo de serviço e descrição da necessidade).
            </p>
            <p>
              Esses dados são utilizados exclusivamente para análise técnica da solicitação,
              elaboração de orçamento, agendamento de vistoria técnica e retorno comercial direto.
            </p>

            <h2 className="font-display text-xl font-bold uppercase text-white pt-4">
              2. Compartilhamento de Informações
            </h2>
            <p>
              Não comercializamos, alugamos ou cedemos dados pessoais ou corporativos de nossos
              clientes e solicitantes a terceiros para fins publicitários.
            </p>

            <h2 className="font-display text-xl font-bold uppercase text-white pt-4">
              3. Direitos do Titular dos Dados
            </h2>
            <p>
              Em conformidade com a Lei Geral de Proteção de Dados (LGPD), você pode solicitar a
              qualquer momento a confirmação, atualização ou exclusão de seus dados de contato por
              meio do nosso canal oficial de atendimento: WhatsApp{' '}
              <span className="font-mono-tech text-white">{COMPANY_INFO.phoneDisplay}</span>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
