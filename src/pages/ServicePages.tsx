import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Wrench,
  Layers,
  MapPin,
  Images,
} from 'lucide-react';
import {
  SERVICES_DATA,
  SERVICE_GALLERY_ITEMS,
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
        title="Serviços: Elétrica, Pintura, Serralheria, Marcenaria e Mais | S.A Manutenção"
        description="Conheça nossas 7 especialidades integradas: Elétrica, Pintura, Serralheria, Marcenaria, Encanador, Dedetização e Projetos de Restauração em Salto e região."
        path="/servicos"
        breadcrumbs={breadcrumbs}
      />

      <BreadcrumbsNav items={breadcrumbs} onNavigate={onNavigate} />

      {/* Hero — All uppercase title including the text inside the orange stripe */}
      <section className="py-14 lg:py-20 bg-[#171719] bg-friendly-pattern border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF8900]">
                <img
                  src="/assets/aistudio/elem_raio_3d.png"
                  alt=""
                  aria-hidden="true"
                  className="w-5 h-5 object-contain"
                />
                <span>Portfólio de 7 Especialidades · Salto e Região</span>
              </div>
              <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white headline-balance leading-[1.22] sm:leading-[1.15] uppercase break-words">
                SOLUÇÕES COMPLETAS EM <span className="highlight-orange uppercase">UM ÚNICO PARCEIRO!</span>
              </h1>
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl">
                Conte com quem entende! Reunimos Elétrica, Pintura, Serralheria, Marcenaria,
                Encanador, Dedetização e Projetos de Restauração para cuidar do seu imóvel,
                condomínio ou empresa com segurança e garantia.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <img
                src="/assets/aistudio/mascote_transparent.png"
                alt="Mascote S.A Manutenção"
                className="h-52 sm:h-60 w-auto object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Service Cards List with Standardized 16:10 Image Format */}
      <section className="py-16 lg:py-24 bg-[#1B1B1E] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {SERVICES_DATA.map((service) => (
            <article
              key={service.slug}
              className="bg-[#252525] border border-white/10 rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center shadow-lg"
            >
              <div className="lg:col-span-5 p-4 sm:p-6">
                <div className="rounded-xl overflow-hidden border border-white/10 shadow-md">
                  <ServiceVisual slug={service.slug} className="aspect-[16/10]" />
                </div>
              </div>

              <div className="lg:col-span-7 p-5 sm:p-8 lg:pr-10 flex flex-col justify-between space-y-5 sm:space-y-6">
                <div className="space-y-3.5 sm:space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                    <span className="text-[#FF8900] font-bold uppercase">
                      Especialidade {service.index} · {service.shortName}
                    </span>
                    <span className="text-[#C5A45A]">{service.normSummary}</span>
                  </div>

                  <h2 className="font-display text-xl sm:text-3xl font-extrabold text-white uppercase leading-snug break-words">
                    {service.name.toUpperCase()}: {service.heroTitle.toUpperCase()}
                  </h2>

                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                    {service.heroDescription}
                  </p>

                  {/* Key executed items preview (no truncation on mobile) */}
                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-neutral-300">
                    {service.executedServices.slice(0, 6).map((item) => (
                      <div key={item.title} className="flex items-start gap-2">
                        <CheckCircle2
                          className="w-4 h-4 text-[#FF8900] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span className="leading-snug">{item.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
                  <a
                    href={`/servicos/${service.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(`/servicos/${service.slug}`);
                    }}
                    className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 bg-[#FF8900] hover:bg-[#e67a00] text-[#171719] font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-colors text-center"
                  >
                    <span>ACESSAR PÁGINA DA ESPECIALIDADE</span>
                    <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                  </a>

                  <a
                    href={getWhatsAppLink(service.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-neutral-200 hover:text-[#FF8900] transition-colors py-1"
                  >
                    <span>Solicitar orçamento pelo WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FF8900] shrink-0" aria-hidden="true" />
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
  const serviceGalleryItems = SERVICE_GALLERY_ITEMS.filter(
    (item) => item.serviceSlug === service.slug
  );
  const focalPositions = ['object-center', 'object-top', 'object-bottom'];

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

      {/* 1. HERO ESPECÍFICO DO SERVIÇO — TÍTULO TODO EM MAIÚSCULAS + IMAGEM PADRONIZADA 16:10 */}
      <section className="py-12 lg:py-20 bg-[#171719] bg-friendly-pattern border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 flex flex-col justify-center space-y-5">
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#C5A45A] font-semibold">
                <img
                  src="/assets/aistudio/elem_raio_3d.png"
                  alt=""
                  aria-hidden="true"
                  className="w-5 h-5 object-contain"
                />
                <span className="text-[#FF8900] uppercase">Especialidade {service.index}</span>
                <span aria-hidden="true">·</span>
                <span>{service.normSummary}</span>
                <span aria-hidden="true">·</span>
                <span>Salto, Itu, Indaiatuba, Porto Feliz e Sorocaba</span>
              </div>

              <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.22] sm:leading-[1.15] headline-balance uppercase break-words">
                <span className="highlight-orange uppercase">{service.name.toUpperCase()}:</span>{' '}
                {service.heroTitle.toUpperCase()}
              </h1>

              <p className="text-sm sm:text-lg text-neutral-300 leading-relaxed">
                {service.heroDescription}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <a
                  href={getWhatsAppLink(service.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3.5 sm:py-4 bg-[#FF8900] hover:bg-[#e67a00] text-[#171719] font-bold text-xs sm:text-base tracking-wider uppercase rounded-xl transition-colors text-center"
                >
                  <span>SOLICITAR ORÇAMENTO DESTE SERVIÇO</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" aria-hidden="true" />
                </a>

                <a
                  href="/contato"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/contato');
                  }}
                  className="inline-flex items-center justify-center px-5 sm:px-6 py-3.5 sm:py-4 bg-[#252525] hover:bg-white/10 text-white border border-white/15 font-bold text-xs sm:text-sm tracking-wider uppercase rounded-xl transition-colors text-center"
                >
                  FORMULÁRIO DE ORÇAMENTO
                </a>
              </div>
            </div>

            {/* Standardized 16:10 Service Image Frame */}
            <div className="lg:col-span-5">
              <div className="w-full rounded-2xl overflow-hidden border border-white/15 bg-[#252525] shadow-2xl">
                <ServiceVisual slug={service.slug} className="aspect-[16/10]" />
                <div className="px-5 py-3.5 bg-[#171719] border-t border-white/10 flex items-center justify-between text-xs font-semibold">
                  <span className="text-[#C5A45A] uppercase">{service.name}</span>
                  <span className="text-neutral-300">Orçamento Sem Custo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. APRESENTAÇÃO DA ESPECIALIDADE & SEGURANÇA E NORMAS */}
      <section className="py-16 lg:py-20 bg-[#1B1B1E] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Apresentação Técnica (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <p className="text-xs font-bold text-[#FF8900] uppercase tracking-wider">
                Apresentação da Especialidade
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white headline-balance">
                Qualidade e Segurança em {service.name}
              </h2>
              <div className="space-y-4 text-neutral-300 text-base leading-relaxed">
                {service.presentationParagraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3 text-xs text-neutral-400 border-t border-white/10">
                <MapPin className="w-4 h-4 text-[#FF8900]" aria-hidden="true" />
                <span>Cidades atendidas:</span>
                <span className="text-white font-semibold">
                  Salto · Itu · Indaiatuba · Porto Feliz · Sorocaba
                </span>
              </div>
            </div>

            {/* Cuidados com Segurança e Normas Aplicáveis (5 cols) */}
            <div className="lg:col-span-5 bg-[#252525] border border-[#C5A45A]/40 rounded-2xl p-6 sm:p-8 space-y-5 shadow-lg">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-[#C5A45A] uppercase">
                    Segurança e Conformidade
                  </span>
                  <h3 className="font-display text-2xl font-extrabold text-white mt-1">
                    {service.safetyAndNorms.title}
                  </h3>
                </div>
                <img
                  src={
                    service.slug === 'eletrica'
                      ? '/assets/aistudio/elem_choque_3d.png'
                      : '/assets/aistudio/elem_alerta_3d.png'
                  }
                  alt="Alerta de segurança"
                  className="w-12 h-12 object-contain shrink-0"
                />
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

      {/* 3. GALERIA DE IMAGENS DO SERVIÇO EM SUA RESPECTIVA PÁGINA */}
      {serviceGalleryItems.length > 0 && (
        <section className="py-16 lg:py-20 bg-[#171719] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="max-w-3xl space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF8900]">
                <Images className="w-4 h-4" aria-hidden="true" />
                <span>Galeria Visual da Especialidade</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
                Galeria de Imagens — <span className="text-[#C5A45A]">{service.name}</span>
              </h2>
              <p className="text-base text-neutral-300">
                Principais frentes de atuação e padrão de execução da S.A Manutenção em{' '}
                {service.name.toLowerCase()}:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {serviceGalleryItems.map((item, idx) => (
                <div
                  key={item.id}
                  className="group bg-[#252525] border border-white/10 hover:border-[#FF8900] rounded-2xl overflow-hidden flex flex-col justify-between shadow-lg transition-colors"
                >
                  <div>
                    <div className="relative">
                      <ServiceVisual
                        slug={service.slug}
                        className="aspect-[16/10]"
                        imgClassName={focalPositions[idx % focalPositions.length]}
                      />
                      <div className="absolute top-3 left-3 bg-[#171719]/90 backdrop-blur-sm border border-white/15 px-3 py-1 rounded-lg text-[11px] font-bold text-[#FF8900] uppercase">
                        {item.highlightText}
                      </div>
                    </div>

                    <div className="p-5 space-y-2">
                      <div className="flex items-center justify-between text-xs text-[#C5A45A] font-semibold">
                        <span>{item.serviceName}</span>
                        <span>{item.locationTag}</span>
                      </div>
                      <h3 className="font-display text-lg font-bold text-white group-hover:text-[#FF8900] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. DESCRIÇÃO DOS SERVIÇOS EXECUTADOS */}
      <section className="py-16 lg:py-24 bg-[#1B1B1E] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-3">
            <p className="text-xs font-bold text-[#FF8900] uppercase tracking-wider">
              O que fazemos por você
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
              Serviços Executados em <span className="text-[#C5A45A]">{service.name}</span>
            </h2>
            <p className="text-base text-neutral-300">
              Confira as principais atividades realizadas pela equipe da S.A Manutenção nesta
              especialidade:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.executedServices.map((item, idx) => (
              <div
                key={item.title}
                className="bg-[#252525] border border-white/10 rounded-2xl p-6 space-y-3 shadow-md"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#FF8900] font-bold">
                    {String(idx + 1).padStart(2, '0')}. Especialidade S.A
                  </span>
                  <Wrench className="w-4 h-4 text-[#C5A45A]" aria-hidden="true" />
                </div>
                <h3 className="font-display text-xl font-bold text-white">{item.title}</h3>
                <p className="text-sm text-neutral-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. APLICAÇÕES E SEGMENTOS ATENDIDOS + DIFERENCIAIS TÉCNICOS */}
      <section className="py-16 lg:py-24 bg-[#171719] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Aplicações */}
          <div>
            <div className="max-w-3xl mb-10 space-y-2">
              <p className="text-xs font-bold text-[#C5A45A] uppercase tracking-wider">
                Onde Atuamos
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
                Aplicações e Ambientes Atendidos
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.applications.map((app) => (
                <div
                  key={app.segment}
                  className="bg-[#252525] border border-white/10 rounded-2xl p-6 space-y-3"
                >
                  <h3 className="font-display text-xl font-bold text-[#FF8900]">{app.segment}</h3>
                  <p className="text-sm text-neutral-300 leading-relaxed">{app.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Diferenciais Técnicos */}
          <div className="pt-8 border-t border-white/10">
            <div className="max-w-3xl mb-10 space-y-2">
              <p className="text-xs font-bold text-[#FF8900] uppercase tracking-wider">
                Padrão S.A Manutenção
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
                Diferenciais Nesta Especialidade
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.technicalDifferentials.map((diff, i) => (
                <div
                  key={diff.title}
                  className="bg-[#252525] border border-white/10 rounded-2xl p-6 space-y-3"
                >
                  <span className="text-xs font-bold text-[#C5A45A]">0{i + 1}. Padrão S.A</span>
                  <h3 className="font-display text-xl font-bold text-white">{diff.title}</h3>
                  <p className="text-sm text-neutral-300 leading-relaxed">{diff.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. PERGUNTAS FREQUENTES (FAQ) */}
      <section className="py-16 lg:py-24 bg-[#1B1B1E] border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 space-y-2 text-center">
            <p className="text-xs font-bold text-[#FF8900] uppercase tracking-wider">
              Tire suas dúvidas
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
              Perguntas Frequentes sobre {service.name}
            </h2>
          </div>

          <div className="space-y-3">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={faq.question}
                  className="bg-[#252525] border border-white/10 rounded-2xl overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    <span className="font-display text-lg sm:text-xl font-bold text-white">
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

      {/* 7. SERVIÇOS RELACIONADOS COM IMAGEM PADRONIZADA */}
      <section className="py-16 bg-[#171719] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-bold text-[#C5A45A] uppercase tracking-wider">
                Atendimento Integrado
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Soluções Complementares para sua Estrutura
              </h2>
            </div>
            <a
              href="/servicos"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/servicos');
              }}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF8900] hover:underline"
            >
              <Layers className="w-4 h-4" aria-hidden="true" />
              <span>Ver todas as 7 especialidades</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <div
                key={rel.slug}
                onClick={() => onNavigate(`/servicos/${rel.slug}`)}
                className="group cursor-pointer bg-[#252525] border border-white/10 hover:border-[#FF8900] rounded-2xl overflow-hidden flex flex-col justify-between transition-colors shadow-md"
              >
                <div>
                  <ServiceVisual slug={rel.slug} className="aspect-[16/10]" />
                  <div className="p-5 space-y-2">
                    <span className="text-xs font-bold text-[#FF8900] uppercase">
                      {rel.shortName}
                    </span>
                    <h3 className="font-display text-xl font-bold text-white group-hover:text-[#FF8900] transition-colors">
                      {rel.name}
                    </h3>
                    <p className="text-sm text-neutral-300 leading-relaxed line-clamp-2">
                      {rel.cardSummary}
                    </p>
                  </div>
                </div>
                <div className="px-5 pb-5 pt-3 border-t border-white/10">
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C5A45A] group-hover:text-[#FF8900] transition-colors">
                    <span>Conhecer {rel.name}</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA PARA SOLICITAÇÃO DE ORÇAMENTO (SEM ÍCONE VERDE NO BOTÃO LARANJA) */}
      <section className="py-16 lg:py-20 bg-[#1B1B1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#252525] border border-[#FF8900]/40 rounded-2xl p-8 sm:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 max-w-2xl">
              <img
                src="/assets/aistudio/mascote_transparent.png"
                alt="Mascote S.A Manutenção"
                className="w-20 h-28 object-contain shrink-0"
              />
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#FF8900] uppercase">
                  Orçamento Sem Custo · {COMPANY_INFO.phoneDisplay}
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                  Precisa de {service.name} em Salto ou Região?
                </h2>
                <p className="text-sm sm:text-base text-neutral-300">
                  Fale diretamente com nossa equipe pelo WhatsApp e conte com quem entende!
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
              <a
                href={getWhatsAppLink(service.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3.5 sm:py-4 bg-[#FF8900] hover:bg-[#e67a00] text-[#171719] font-bold text-xs sm:text-base uppercase tracking-wider rounded-xl transition-colors text-center"
              >
                <span>SOLICITAR ORÇAMENTO PELO WHATSAPP</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
