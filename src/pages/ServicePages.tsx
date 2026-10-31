import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ShieldAlert,
  ChevronDown,
  MessageSquare,
  Wrench,
  Layers,
  MapPin,
} from 'lucide-react';
import {
  SERVICES_DATA,
  COMPANY_INFO,
  ServiceData,
  getWhatsAppLink,
} from '../data/siteData';
import { ServiceVisual } from '../components/BrandVisuals';
import { SEOHead, BreadcrumbsNav } from '../components/SEOHead';

interface ServicesIndexPageProps {
  onNavigate: (path: string) => void;
}

export const ServicesIndexPage: React.FC<ServicesIndexPageProps> = ({ onNavigate }) => {
  const breadcrumbs = [
    { label: 'Início', path: '/' },
    { label: 'Serviços', path: '/servicos' },
  ];

  return (
    <>
      <SEOHead
        title="Serviços de Manutenção Industrial, Predial e Comercial | S.A Manutenção"
        description="Conheça nossas 5 especialidades integradas: Manutenção Elétrica, Manutenção Predial, Pintura Industrial e Comercial, Solda e Serralheria, e Controle de Pragas em Salto e região."
        path="/servicos"
        breadcrumbs={breadcrumbs}
      />

      <BreadcrumbsNav items={breadcrumbs} onNavigate={onNavigate} />

      {/* Hero */}
      <section className="py-14 lg:py-20 bg-[#171719] bg-industrial-grid border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="font-mono-tech text-xs text-[#FF8900] uppercase tracking-widest">
              Portfólio Técnico Integrado · Salto e Região
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white headline-balance">
              SOLUÇÕES COMPLETAS EM <span className="text-[#C5A45A]">UM ÚNICO FORNECEDOR.</span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              Integramos elétrica, manutenção predial, pintura industrial e comercial, solda e
              controle de pragas para manter sua empresa, indústria, comércio ou condomínio
              operando com segurança e dentro das normas técnicas.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Service Cards List */}
      <section className="py-16 lg:py-24 bg-[#1B1B1E] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {SERVICES_DATA.map((service) => (
            <article
              key={service.slug}
              className="bg-[#252525] border border-white/10 rounded-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12"
            >
              <div className="lg:col-span-5 flex flex-col">
                <ServiceVisual slug={service.slug} className="h-64 lg:h-full min-h-[260px]" />
              </div>

              <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 font-mono-tech text-xs">
                    <span className="text-[#FF8900] font-semibold">
                      Especialidade {service.index} · {service.shortName}
                    </span>
                    <span className="text-[#C5A45A]">{service.normSummary}</span>
                  </div>

                  <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wide text-white">
                    {service.heroTitle}
                  </h2>

                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                    {service.heroDescription}
                  </p>

                  {/* Key executed items preview */}
                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-neutral-300">
                    {service.executedServices.slice(0, 6).map((item) => (
                      <div key={item.title} className="flex items-center gap-2">
                        <CheckCircle2
                          className="w-4 h-4 text-[#FF8900] shrink-0"
                          aria-hidden="true"
                        />
                        <span className="truncate">{item.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <a
                    href={`/servicos/${service.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(`/servicos/${service.slug}`);
                    }}
                    className="inline-flex items-center gap-2 px-5 py-3 bg-[#FF8900] hover:bg-[#e67a00] text-[#171719] font-display font-bold text-sm uppercase tracking-wider rounded transition-colors"
                  >
                    <span>ACESSAR PÁGINA DA ESPECIALIDADE</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>

                  <a
                    href={getWhatsAppLink(service.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono-tech text-neutral-300 hover:text-[#FF8900] transition-colors"
                  >
                    <span>Solicitar orçamento direto pelo WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

interface ServiceDetailPageProps {
  service: ServiceData;
  onNavigate: (path: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ service, onNavigate }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const breadcrumbs = [
    { label: 'Início', path: '/' },
    { label: 'Serviços', path: '/servicos' },
    { label: service.name, path: `/servicos/${service.slug}` },
  ];

  const relatedServices = SERVICES_DATA.filter((s) => service.relatedSlugs.includes(s.slug));

  return (
    <>
      <SEOHead
        title={service.seo.title}
        description={service.seo.description}
        path={`/servicos/${service.slug}`}
        breadcrumbs={breadcrumbs}
        serviceSchema={{
          name: `${service.name} — ${COMPANY_INFO.name}`,
          description: service.seo.description,
          serviceType: service.name,
        }}
        faqs={service.faqs}
      />

      <BreadcrumbsNav items={breadcrumbs} onNavigate={onNavigate} />

      {/* 1. HERO ESPECÍFICO DO SERVIÇO */}
      <section className="py-12 lg:py-20 bg-[#171719] bg-industrial-grid border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-7 flex flex-col justify-center space-y-5">
              <div className="flex flex-wrap items-center gap-2 font-mono-tech text-xs text-[#C5A45A]">
                <span className="text-[#FF8900] font-semibold">
                  Especialidade {service.index}
                </span>
                <span aria-hidden="true">·</span>
                <span>{service.normSummary}</span>
                <span aria-hidden="true">·</span>
                <span>Salto, Itu, Indaiatuba, Porto Feliz e Sorocaba</span>
              </div>

              <h1 className="font-display text-3xl sm:text-5xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-[1.08] headline-balance">
                {service.heroTitle}
              </h1>

              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
                {service.heroDescription}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={getWhatsAppLink(service.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-[#FF8900] hover:bg-[#e67a00] text-[#171719] font-display font-bold text-base tracking-wider uppercase rounded transition-colors whitespace-nowrap"
                >
                  <MessageSquare className="w-5 h-5 fill-[#171719]" aria-hidden="true" />
                  <span>SOLICITAR ORÇAMENTO DESTE SERVIÇO</span>
                </a>

                <a
                  href="/contato"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/contato');
                  }}
                  className="inline-flex items-center justify-center px-6 py-4 bg-[#252525] hover:bg-white/10 text-white border border-white/15 font-display font-bold text-sm tracking-wider uppercase rounded transition-colors whitespace-nowrap"
                >
                  FORMULÁRIO TÉCNICO
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 flex">
              <div className="w-full rounded-lg overflow-hidden border border-white/15 bg-[#252525] flex flex-col justify-between">
                <ServiceVisual slug={service.slug} className="h-64 sm:h-80 lg:h-full min-h-[280px]" />
                <div className="p-4 bg-[#171719] border-t border-white/10 flex items-center justify-between text-xs font-mono-tech">
                  <span className="text-[#C5A45A]">{service.name}</span>
                  <span className="text-neutral-400">Orçamento Técnico sem Custo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. APRESENTAÇÃO DA ESPECIALIDADE & 6. SEGURANÇA E NORMAS */}
      <section className="py-16 lg:py-20 bg-[#1B1B1E] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Apresentação Técnica (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <p className="font-mono-tech text-xs text-[#FF8900] uppercase tracking-widest">
                Apresentação da Especialidade
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-white headline-balance">
                Competência Técnica em {service.name} para Operações que Exigem Confiabilidade
              </h2>
              <div className="space-y-4 text-neutral-300 text-base leading-relaxed">
                {service.presentationParagraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3 text-xs font-mono-tech text-neutral-400 border-t border-white/10">
                <MapPin className="w-4 h-4 text-[#FF8900]" aria-hidden="true" />
                <span>Cidades atendidas:</span>
                <span className="text-white">
                  Salto · Itu · Indaiatuba · Porto Feliz · Sorocaba
                </span>
              </div>
            </div>

            {/* 6. Cuidados com Segurança e Normas Aplicáveis (5 cols) */}
            <div className="lg:col-span-5 bg-[#252525] border border-[#C5A45A]/40 rounded-lg p-6 sm:p-8 space-y-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="font-mono-tech text-xs text-[#C5A45A] uppercase">
                    Segurança e Conformidade
                  </span>
                  <h3 className="font-display text-2xl font-bold uppercase text-white mt-1">
                    {service.safetyAndNorms.title}
                  </h3>
                </div>
                <ShieldAlert className="w-7 h-7 text-[#FF8900] shrink-0" aria-hidden="true" />
              </div>

              <p className="text-sm text-neutral-300 leading-relaxed">
                {service.safetyAndNorms.subtitle}
              </p>

              <ul className="space-y-3 text-sm text-neutral-200">
                {service.safetyAndNorms.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="w-4 h-4 text-[#FF8900] shrink-0 mt-1"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DESCRIÇÃO DOS SERVIÇOS EXECUTADOS */}
      <section className="py-16 lg:py-24 bg-[#171719] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-3">
            <p className="font-mono-tech text-xs text-[#FF8900] uppercase tracking-widest">
              Escopo Técnico Detalhado
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-white">
              SERVIÇOS EXECUTADOS EM <span className="text-[#C5A45A]">{service.name}</span>
            </h2>
            <p className="text-base text-neutral-300">
              Confira as principais atividades técnicas realizadas pela equipe da S.A Manutenção
              nesta especialidade:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.executedServices.map((item, idx) => (
              <div
                key={item.title}
                className="bg-[#252525] border border-white/10 rounded-lg p-6 space-y-3"
              >
                <div className="flex items-center justify-between text-xs font-mono-tech">
                  <span className="text-[#FF8900] font-semibold">
                    {String(idx + 1).padStart(2, '0')}. Escopo Técnico
                  </span>
                  <Wrench className="w-4 h-4 text-[#C5A45A]" aria-hidden="true" />
                </div>
                <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. APLICAÇÕES E SEGMENTOS ATENDIDOS + 5. DIFERENCIAIS TÉCNICOS */}
      <section className="py-16 lg:py-24 bg-[#1B1B1E] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Aplicações */}
          <div>
            <div className="max-w-3xl mb-10 space-y-2">
              <p className="font-mono-tech text-xs text-[#C5A45A] uppercase tracking-widest">
                Onde Atuamos
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-white">
                APLICAÇÕES E SEGMENTOS ATENDIDOS
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.applications.map((app) => (
                <div
                  key={app.segment}
                  className="bg-[#252525] border border-white/10 rounded-lg p-6 space-y-3"
                >
                  <h3 className="font-display text-xl font-bold uppercase text-[#FF8900]">
                    {app.segment}
                  </h3>
                  <p className="text-sm text-neutral-300 leading-relaxed">{app.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Diferenciais Técnicos */}
          <div className="pt-8 border-t border-white/10">
            <div className="max-w-3xl mb-10 space-y-2">
              <p className="font-mono-tech text-xs text-[#FF8900] uppercase tracking-widest">
                Padrão de Execução S.A Manutenção
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-white">
                DIFERENCIAIS TÉCNICOS NESTA ESPECIALIDADE
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.technicalDifferentials.map((diff, i) => (
                <div
                  key={diff.title}
                  className="bg-[#171719] border border-white/10 rounded-lg p-6 space-y-3"
                >
                  <span className="font-mono-tech text-xs text-[#C5A45A]">
                    0{i + 1}. Padrão S.A
                  </span>
                  <h3 className="font-display text-xl font-bold uppercase text-white">
                    {diff.title}
                  </h3>
                  <p className="text-sm text-neutral-300 leading-relaxed">{diff.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. PERGUNTAS FREQUENTES (FAQ) */}
      <section className="py-16 lg:py-24 bg-[#171719] border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 space-y-2 text-center">
            <p className="font-mono-tech text-xs text-[#FF8900] uppercase tracking-widest">
              Dúvidas Técnicas
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-white">
              PERGUNTAS FREQUENTES SOBRE {service.name}
            </h2>
          </div>

          <div className="space-y-3">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={faq.question}
                  className="bg-[#252525] border border-white/10 rounded-lg overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    <span className="font-display text-lg sm:text-xl font-bold uppercase tracking-wide text-white">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#FF8900] shrink-0 transition-transform duration-150 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-neutral-300 leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVIÇOS RELACIONADOS (INTERNAL LINKING) */}
      <section className="py-16 bg-[#1B1B1E] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="font-mono-tech text-xs text-[#C5A45A] uppercase tracking-widest">
                Atendimento Integrado
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white mt-1">
                SOLUÇÕES COMPLEMENTARES PARA SUA ESTRUTURA
              </h2>
            </div>
            <a
              href="/servicos"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/servicos');
              }}
              className="inline-flex items-center gap-1.5 text-xs font-mono-tech text-[#FF8900] hover:underline"
            >
              <Layers className="w-4 h-4" aria-hidden="true" />
              <span>Ver todas as 5 especialidades</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <div
                key={rel.slug}
                className="bg-[#252525] border border-white/10 rounded-lg p-6 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <span className="font-mono-tech text-xs text-[#FF8900]">
                    {rel.index}. {rel.shortName}
                  </span>
                  <h3 className="font-display text-xl font-bold uppercase text-white">
                    {rel.name}
                  </h3>
                  <p className="text-sm text-neutral-300 leading-relaxed">{rel.cardSummary}</p>
                </div>
                <a
                  href={`/servicos/${rel.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(`/servicos/${rel.slug}`);
                  }}
                  className="inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-wider text-[#C5A45A] hover:text-[#FF8900] transition-colors"
                >
                  <span>Conhecer {rel.name}</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA PARA SOLICITAÇÃO DE ORÇAMENTO */}
      <section className="py-16 lg:py-20 bg-[#171719]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#252525] border border-[#FF8900]/40 rounded-lg p-8 sm:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-2 max-w-2xl">
              <span className="font-mono-tech text-xs text-[#FF8900] uppercase">
                Orçamento Técnico Sem Custo · {COMPANY_INFO.phoneDisplay}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold uppercase text-white">
                PRECISA DE {service.name.toUpperCase()} EM SALTO OU REGIÃO?
              </h2>
              <p className="text-base text-neutral-300">
                Fale diretamente com nossa equipe técnica pelo WhatsApp e agende uma avaliação da
                sua necessidade.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
              <a
                href={getWhatsAppLink(service.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-[#FF8900] hover:bg-[#e67a00] text-[#171719] font-display font-bold text-base uppercase tracking-wider rounded transition-colors whitespace-nowrap"
              >
                <MessageSquare className="w-5 h-5 fill-[#171719]" aria-hidden="true" />
                <span>SOLICITAR ORÇAMENTO PELO WHATSAPP</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
