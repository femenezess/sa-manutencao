import React from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Target,
  Instagram,
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
        'Atendimento direto pelo WhatsApp ou formulário para compreensão imediata da demanda e agendamento de vistoria.',
    },
    {
      step: '02',
      title: 'Diagnóstico e Orçamento',
      description:
        'Avaliação criteriosa das instalações no local e elaboração de orçamento transparente e sem custo.',
    },
    {
      step: '03',
      title: 'Execução Caprichada',
      description:
        'Intervenção planejada para mínima interferência na rotina do cliente, com segurança e respeito às normas.',
    },
    {
      step: '04',
      title: 'Entrega e Garantia',
      description:
        'Conferência final da qualidade de execução, limpeza e organização do ambiente com garantia de serviço.',
    },
  ];

  return (
    <>
      <SEOHead
        title="Sobre a S.A Manutenção | Conte com quem entende em Salto e Região"
        description="Conheça a história e o compromisso da S.A Manutenção. Um único parceiro em Salto, Itu, Indaiatuba, Porto Feliz e Sorocaba para Elétrica, Pintura, Serralheria, Marcenaria, Encanador, Dedetização e Restauração."
        path="/sobre"
        breadcrumbs={breadcrumbs}
      />

      <BreadcrumbsNav items={breadcrumbs} onNavigate={onNavigate} />

      {/* Hero Section — Only main H1 uses .highlight-orange with white text */}
      <section className="py-14 lg:py-20 bg-[#171719] bg-friendly-pattern border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FF8900] uppercase tracking-wider">
                <img
                  src="/assets/aistudio/elem_raio_3d.png"
                  alt=""
                  aria-hidden="true"
                  className="w-5 h-5 object-contain"
                />
                <span>Institucional · {COMPANY_INFO.name}</span>
              </div>
              <h1 className="font-display text-2xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.2] sm:leading-[1.12] headline-balance break-words">
                Uma empresa, 7 especialidades e o{' '}
                <span className="highlight-orange">mesmo compromisso!</span>
              </h1>

              <div className="space-y-4 text-base sm:text-lg text-neutral-200 leading-relaxed">
                <p>
                  A <strong>S.A Manutenção</strong> nasceu como uma empresa especializada em
                  serviços elétricos e evoluiu para atender uma necessidade real de quem precisa de
                  manutenção: contar com um único parceiro de confiança, sem dor de cabeça.
                </p>
                <p>
                  Hoje reunimos{' '}
                  <strong>
                    Elétrica, Pintura, Serralheria, Marcenaria, Encanador, Dedetização e Projetos de
                    Restauração
                  </strong>
                  , oferecendo soluções completas para residências, condomínios, comércios e
                  indústrias.
                </p>
                <p>
                  Nosso trabalho é pautado pela segurança, capricho no acabamento, agilidade no
                  atendimento e respeito ao cliente. Atendemos Salto e região com orçamentos sem
                  custo e garantia de serviço.
                </p>
              </div>

              <div className="p-5 bg-[#252525] border border-[#C5A45A]/40 rounded-2xl">
                <p className="text-xs font-bold text-[#C5A45A] uppercase mb-1">
                  Nossa Missão Institucional
                </p>
                <p className="text-base sm:text-lg font-semibold text-white">
                  “Nossa missão é manter sua estrutura funcionando, segura e bem cuidada, enquanto
                  você foca no que mais importa.”
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
            <div className="bg-[#252525] border border-white/10 rounded-2xl p-7 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#FF8900] uppercase">
                  Proposta de Valor
                </span>
                <Target className="w-6 h-6 text-[#C5A45A]" aria-hidden="true" />
              </div>
              <h2 className="font-display text-2xl font-extrabold text-white">
                Um Único Parceiro de Confiança
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Unimos em um único fornecedor todas as disciplinas que uma empresa, indústria,
                condomínio, comércio ou residência precisa para manter tudo em dia.
              </p>
            </div>

            <div className="bg-[#252525] border border-white/10 rounded-2xl p-7 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#FF8900] uppercase">
                  Segurança em 1º Lugar
                </span>
                <img
                  src="/assets/aistudio/elem_alerta_3d.png"
                  alt=""
                  aria-hidden="true"
                  className="w-7 h-7 object-contain"
                />
              </div>
              <h2 className="font-display text-2xl font-extrabold text-white">
                Serviço Garantido e Seguro
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Execução cuidadosa orientada pelas boas práticas e normas técnicas de cada área,
                evitando riscos elétricos, vazamentos e retrabalhos.
              </p>
            </div>

            <div className="bg-[#252525] border border-white/10 rounded-2xl p-7 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#FF8900] uppercase">
                  Presença Regional
                </span>
                <MapPin className="w-6 h-6 text-[#C5A45A]" aria-hidden="true" />
              </div>
              <h2 className="font-display text-2xl font-extrabold text-white">
                Salto e Toda a Região
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Base em Salto – SP com atendimento ágil e direto em Salto, Itu, Indaiatuba, Porto
                Feliz e Sorocaba.
              </p>
            </div>
          </div>

          {/* Metodologia de Trabalho */}
          <div className="pt-8 border-t border-white/10">
            <div className="max-w-3xl mb-10 space-y-2">
              <p className="text-xs font-bold text-[#C5A45A] uppercase tracking-wider">
                Como Trabalhamos
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
                Nosso Passo a Passo no Seu Atendimento
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {workflowSteps.map((item) => (
                <div
                  key={item.step}
                  className="bg-[#171719] border border-white/10 rounded-2xl p-6 space-y-3"
                >
                  <span className="text-sm font-bold text-[#FF8900]">Etapa {item.step}</span>
                  <h3 className="font-display text-xl font-bold text-white">{item.title}</h3>
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
                className="bg-[#252525] border border-white/10 rounded-2xl p-6 space-y-2"
              >
                <span className="text-xs font-bold text-[#C5A45A]">{item.index}.</span>
                <h3 className="font-display text-xl font-bold text-white">{item.title}</h3>
                <p className="text-sm text-neutral-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#252525] border border-white/15 rounded-2xl p-8 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#C5A45A]">
                <Instagram className="w-4 h-4 text-[#FF8900]" aria-hidden="true" />
                <span>Acompanhe nosso dia a dia: {COMPANY_INFO.instagramHandle}</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                Conte com quem entende! Solicite seu orçamento agora
              </h2>
              <p className="text-sm sm:text-base text-neutral-300">
                Entre em contato com nossa equipe pelo WhatsApp para avaliar a necessidade da sua
                empresa, condomínio ou residência.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full lg:w-auto shrink-0">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 bg-[#FF8900] hover:bg-[#e67a00] text-[#171719] font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-colors text-center"
              >
                <span>SOLICITAR ORÇAMENTO</span>
                <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>

              <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#171719] hover:bg-black text-white border border-white/15 font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-colors text-center"
              >
                <Instagram className="w-4 h-4 text-[#C5A45A] shrink-0" aria-hidden="true" />
                <span>VER INSTAGRAM</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
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
        title="Segmentos Atendidos: Indústrias, Condomínios, Comércios e Residências | S.A Manutenção"
        description="Soluções integradas de manutenção para indústrias, galpões, empresas, comércios, condomínios, restaurantes e residências em Salto, Itu, Indaiatuba, Porto Feliz e Sorocaba."
        path="/segmentos"
        breadcrumbs={breadcrumbs}
      />

      <BreadcrumbsNav items={breadcrumbs} onNavigate={onNavigate} />

      {/* Main H1 uses .highlight-orange with white text */}
      <section className="py-14 lg:py-20 bg-[#171719] bg-friendly-pattern border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FF8900] uppercase tracking-wider">
              <img
                src="/assets/aistudio/elem_raio_3d.png"
                alt=""
                aria-hidden="true"
                className="w-5 h-5 object-contain"
              />
              <span>Segmentos de Atuação · Salto e Região</span>
            </div>
            <h1 className="font-display text-2xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-white headline-balance leading-[1.2] sm:leading-[1.15] break-words">
              Soluções para diferentes <span className="highlight-orange">tipos de necessidade!</span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              Cada ambiente possui exigências específicas de disponibilidade, segurança e
              apresentação. Veja como a S.A Manutenção integra suas 7 especialidades para atender o
              seu segmento.
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
                className="bg-[#252525] border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start shadow-lg"
              >
                <div className="lg:col-span-7 space-y-4">
                  <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                    {segment.title}
                  </h2>

                  <p className="text-sm sm:text-base font-medium text-[#C5A45A]">
                    {segment.subtitle}
                  </p>

                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                    {segment.description}
                  </p>

                  <div className="pt-2 space-y-2">
                    <h3 className="text-xs font-bold text-white uppercase">
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

                <div className="lg:col-span-5 bg-[#171719] border border-white/10 rounded-2xl p-6 space-y-5">
                  <div>
                    <span className="text-xs font-bold text-[#C5A45A] uppercase">
                      Integração de Especialidades
                    </span>
                    <h3 className="font-display text-xl font-bold text-white mt-1">
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
                        className="flex items-center justify-between p-3 rounded-xl bg-[#252525] hover:bg-white/10 border border-white/5 transition-colors group"
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
                    className="w-full inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3.5 bg-[#FF8900] hover:bg-[#e67a00] text-[#171719] font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-colors text-center"
                  >
                    <span>SOLICITAR ORÇAMENTO PARA ESTE SETOR</span>
                    <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
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
            <p className="text-xs font-bold text-[#FF8900] uppercase">
              Conformidade LGPD · Lei nº 13.709/2018
            </p>
            <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
              Política de Privacidade — <span className="highlight-orange">{COMPANY_INFO.name}</span>
            </h1>
          </div>

          <div className="space-y-4 text-sm sm:text-base leading-relaxed">
            <h2 className="font-display text-xl font-bold text-white">
              1. Coleta e Finalidade dos Dados
            </h2>
            <p>
              A <strong>{COMPANY_INFO.name}</strong> coleta apenas as informações fornecidas
              voluntariamente pelo usuário ao preencher o formulário de solicitação de orçamento ou
              ao iniciar atendimento via WhatsApp (nome, nome da empresa, telefone/WhatsApp,
              e-mail, cidade, tipo de serviço e descrição da necessidade).
            </p>
            <p>
              Esses dados são utilizados exclusivamente para análise da solicitação, elaboração de
              orçamento, agendamento de vistoria e retorno comercial direto.
            </p>

            <h2 className="font-display text-xl font-bold text-white pt-4">
              2. Compartilhamento de Informações
            </h2>
            <p>
              Não comercializamos, alugamos ou cedemos dados pessoais ou corporativos de nossos
              clientes e solicitantes a terceiros para fins publicitários.
            </p>

            <h2 className="font-display text-xl font-bold text-white pt-4">
              3. Direitos do Titular dos Dados
            </h2>
            <p>
              Em conformidade com a Lei Geral de Proteção de Dados (LGPD), você pode solicitar a
              qualquer momento a confirmação, atualização ou exclusão de seus dados de contato por
              meio do nosso canal oficial de atendimento: WhatsApp{' '}
              <span className="font-semibold text-white">{COMPANY_INFO.phoneDisplay}</span>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
