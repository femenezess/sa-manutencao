import React, { useState } from 'react';
import {
  ArrowRight,
  ShieldCheck,
  Wrench,
  Clock,
  FileCheck2,
  CheckCircle2,
  MessageSquare,
  Building2,
  Factory,
  Store,
  Utensils,
  Briefcase,
  UserCheck,
  MapPin,
} from 'lucide-react';
import {
  COMPANY_INFO,
  SERVICES_DATA,
  WHY_CHOOSE_US,
  SEGMENTS_DATA,
  REGIONAL_CITIES,
  getWhatsAppLink,
} from '../data/siteData';
import { HeroIndustrialVisual, ServiceVisual, RegionalMapVisual } from '../components/BrandVisuals';
import { SEOHead } from '../components/SEOHead';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [selectedCity, setSelectedCity] = useState<string>('Salto');

  const activeCityData =
    REGIONAL_CITIES.find((c) => c.name === selectedCity) || REGIONAL_CITIES[0];

  const differentialIcons = [Wrench, Clock, ShieldCheck, FileCheck2, CheckCircle2, MessageSquare];
  const segmentIcons = [Factory, Briefcase, Store, Building2, Utensils, UserCheck];

  return (
    <>
      <SEOHead
        title="S.A Manutenção — Manutenção Industrial, Predial e Comercial em Salto e Região"
        description="Soluções completas em manutenção elétrica, predial, pintura industrial, solda e controle de pragas em Salto, Itu, Indaiatuba, Porto Feliz e Sorocaba. Solicite orçamento."
        path="/"
      />

      {/* 4.2 HERO SECTION */}
      <section className="relative bg-[#171719] bg-industrial-grid border-b border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            {/* Left Column: Value Proposition & Conversion (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              {/* Geographic Identification (Unboxed clean metadata per Zero-Pill rule) */}
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-mono-tech text-[#C5A45A]">
                <MapPin className="w-4 h-4 text-[#FF8900] shrink-0" aria-hidden="true" />
                <span>Salto – SP</span>
                <span aria-hidden="true" className="text-neutral-600">|</span>
                <span className="text-neutral-300">
                  Atendimento em toda a região (Itu · Indaiatuba · Porto Feliz · Sorocaba)
                </span>
              </div>

              {/* H1 Headline */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[1.05] headline-balance">
                SUA OPERAÇÃO <span className="text-[#FF8900]">NÃO PODE PARAR.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl">
                Soluções completas em manutenção elétrica, industrial, predial e comercial. Um
                único parceiro para manter sua estrutura funcionando com segurança e eficiência.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-[#FF8900] hover:bg-[#e67a00] text-[#171719] font-display font-bold text-base tracking-wider uppercase rounded transition-colors whitespace-nowrap shrink-0"
                >
                  <span>SOLICITAR ORÇAMENTO</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>

                <a
                  href="#solucoes-integradas"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('solucoes-integradas');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center px-6 py-4 bg-[#252525] hover:bg-white/10 text-white border border-white/15 font-display font-bold text-base tracking-wider uppercase rounded transition-colors whitespace-nowrap shrink-0"
                >
                  CONHECER NOSSOS SERVIÇOS
                </a>
              </div>

              {/* Technical Scope Strip (Unboxed clean metadata) */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-neutral-400">
                <div>
                  <span className="block font-mono-tech text-white font-semibold">5 Disciplinas</span>
                  <span>Integradas em um só fornecedor</span>
                </div>
                <div>
                  <span className="block font-mono-tech text-white font-semibold">Orçamento Técnico</span>
                  <span>Avaliação criteriosa sem custo</span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="block font-mono-tech text-white font-semibold">Conformidade</span>
                  <span>NBR 5410 · NR-10 · NR-35 · ANVISA</span>
                </div>
              </div>
            </div>

            {/* Right Column: Industrial Electrician & Panel Visual (5 cols) */}
            <div className="lg:col-span-5 flex">
              <HeroIndustrialVisual />
            </div>
          </div>
        </div>
      </section>

      {/* 4.3 SEÇÃO — SOLUÇÕES INTEGRADAS */}
      <section
        id="solucoes-integradas"
        className="py-16 lg:py-24 bg-[#1B1B1E] border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-3">
            <p className="font-mono-tech text-xs text-[#FF8900] uppercase tracking-widest">
              Especialidades Integradas
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white headline-balance">
              TUDO O QUE SUA ESTRUTURA PRECISA.{' '}
              <span className="text-[#C5A45A]">EM UM SÓ LUGAR.</span>
            </h2>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              Da manutenção elétrica à conservação predial, oferecemos soluções integradas para
              empresas, indústrias e condomínios.
            </p>
          </div>

          {/* 5 Service Cards in Asymmetric Bento Grid (First 2 span 6 cols on lg, next 3 span 4 cols on lg) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
            {SERVICES_DATA.map((service, idx) => {
              const colSpanClass =
                idx < 2 ? 'lg:col-span-6' : 'lg:col-span-4';

              return (
                <article
                  key={service.slug}
                  className={`${colSpanClass} group bg-[#252525] border border-white/10 hover:border-[#FF8900]/60 rounded-lg overflow-hidden flex flex-col justify-between transition-colors`}
                >
                  <div>
                    {/* Representative Visual */}
                    <ServiceVisual
                      slug={service.slug}
                      className={idx < 2 ? 'h-56 sm:h-64' : 'h-48 sm:h-52'}
                    />

                    {/* Card Body */}
                    <div className="p-6 space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono-tech text-neutral-400">
                        <span className="text-[#FF8900] font-semibold">
                          {service.index}. {service.shortName}
                        </span>
                        <span>{service.normSummary}</span>
                      </div>

                      <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white group-hover:text-[#FF8900] transition-colors">
                        {service.name}
                      </h3>

                      <p className="text-sm text-neutral-300 leading-relaxed">
                        {service.cardSummary}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-white/5 mt-2">
                    <a
                      href={`/servicos/${service.slug}`}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate(`/servicos/${service.slug}`);
                      }}
                      className="inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-wider text-white group-hover:text-[#FF8900] transition-colors whitespace-nowrap"
                    >
                      <span>SAIBA MAIS</span>
                      <ArrowRight className="w-4 h-4 text-[#FF8900]" aria-hidden="true" />
                    </a>

                    <a
                      href={getWhatsAppLink(service.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono-tech text-neutral-400 hover:text-white transition-colors whitespace-nowrap"
                    >
                      Solicitar cotação
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4.4 SEÇÃO — POR QUE ESCOLHER A S.A MANUTENÇÃO? */}
      <section className="py-16 lg:py-24 bg-[#171719] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4 space-y-4">
              <p className="font-mono-tech text-xs text-[#C5A45A] uppercase tracking-widest">
                Diferenciais Institucionais
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white headline-balance">
                MAIS QUE MANUTENÇÃO.{' '}
                <span className="text-[#FF8900]">UMA PARCERIA PARA SUA OPERAÇÃO.</span>
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                Unimos em um único fornecedor todas as disciplinas que uma empresa, condomínio ou
                comércio precisa para manter sua operação segura, produtiva e dentro das normas.
              </p>
              <div className="pt-2">
                <a
                  href="/sobre"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/sobre');
                  }}
                  className="inline-flex items-center gap-2 text-sm font-display font-bold uppercase tracking-wider text-[#C5A45A] hover:text-[#FF8900] transition-colors"
                >
                  <span>Conheça nossa trajetória</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {WHY_CHOOSE_US.map((item, idx) => {
                const IconComponent = differentialIcons[idx % differentialIcons.length];
                return (
                  <div
                    key={item.index}
                    className="bg-[#252525] border border-white/10 rounded-lg p-6 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono-tech text-xs text-[#C5A45A] font-semibold">
                        {item.index}. Diferencial Técnico
                      </span>
                      <IconComponent className="w-5 h-5 text-[#FF8900]" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm text-neutral-300 leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4.5 SEÇÃO — SEGMENTOS ATENDIDOS */}
      <section className="py-16 lg:py-24 bg-[#1B1B1E] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl space-y-3">
              <p className="font-mono-tech text-xs text-[#FF8900] uppercase tracking-widest">
                Públicos e Setores
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white headline-balance">
                SOLUÇÕES PARA DIFERENTES <span className="text-[#C5A45A]">TIPOS DE OPERAÇÃO.</span>
              </h2>
            </div>
            <a
              href="/segmentos"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/segmentos');
              }}
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#252525] hover:bg-white/10 border border-white/15 rounded font-display font-bold text-sm uppercase tracking-wider text-white transition-colors whitespace-nowrap shrink-0"
            >
              <span>Ver detalhes por segmento</span>
              <ArrowRight className="w-4 h-4 text-[#FF8900]" aria-hidden="true" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SEGMENTS_DATA.map((segment, idx) => {
              const IconComponent = segmentIcons[idx % segmentIcons.length];
              return (
                <div
                  key={segment.id}
                  className="bg-[#252525] border border-white/10 rounded-lg p-6 flex flex-col justify-between space-y-5"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono-tech text-xs text-[#FF8900]">
                        Setor {segment.index}
                      </span>
                      <IconComponent className="w-5 h-5 text-[#C5A45A]" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white">
                      {segment.title}
                    </h3>
                    <p className="text-sm text-neutral-300 leading-relaxed">
                      {segment.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                    <a
                      href="/segmentos"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('/segmentos');
                      }}
                      className="text-xs font-mono-tech text-[#C5A45A] hover:underline"
                    >
                      Escopo recomendado
                    </a>
                    <a
                      href={getWhatsAppLink(segment.whatsappText)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-display font-bold uppercase tracking-wider text-white hover:text-[#FF8900] transition-colors"
                    >
                      <span>Falar com especialista</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#FF8900]" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4.6 SEÇÃO — ÁREA DE ATENDIMENTO */}
      <section className="py-16 lg:py-24 bg-[#171719] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-3">
            <p className="font-mono-tech text-xs text-[#C5A45A] uppercase tracking-widest">
              Cobertura Geográfica
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white headline-balance">
              PRESENTE EM SALTO E <span className="text-[#FF8900]">EM TODA A REGIÃO.</span>
            </h2>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              Atendemos empresas, comércios, condomínios e indústrias em Salto e cidades próximas,
              oferecendo soluções de manutenção com agilidade e atendimento direto.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Interactive Regional SVG Map (7 cols) */}
            <div className="lg:col-span-7">
              <RegionalMapVisual
                selectedCity={selectedCity}
                onSelectCity={(cityName) => setSelectedCity(cityName)}
              />
            </div>

            {/* Right: City Selector & Active City Coverage Details (5 cols) */}
            <div className="lg:col-span-5 space-y-5">
              {/* Interactive City Tabs */}
              <div
                role="tablist"
                aria-label="Cidades atendidas pela S.A Manutenção"
                className="grid grid-cols-2 sm:grid-cols-3 gap-2 p-1.5 bg-[#252525] rounded-lg border border-white/10"
              >
                {REGIONAL_CITIES.map((city) => {
                  const isActive = city.name === selectedCity;
                  return (
                    <button
                      key={city.name}
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setSelectedCity(city.name)}
                      className={`px-3 py-2 text-xs font-mono-tech font-medium rounded transition-colors cursor-pointer whitespace-nowrap ${
                        isActive
                          ? 'bg-[#FF8900] text-[#171719] font-bold'
                          : 'text-neutral-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {city.name} – {city.state}
                    </button>
                  );
                })}
              </div>

              {/* Selected City Details Card */}
              <div className="bg-[#252525] border border-white/10 rounded-lg p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div>
                    <span className="font-mono-tech text-xs text-[#C5A45A]">
                      {activeCityData.tag} · {activeCityData.corridor}
                    </span>
                    <h3 className="font-display text-2xl font-bold uppercase text-white mt-0.5">
                      Atendimento em {activeCityData.name} – {activeCityData.state}
                    </h3>
                  </div>
                  <MapPin className="w-6 h-6 text-[#FF8900] shrink-0" aria-hidden="true" />
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed">
                  {activeCityData.description}
                </p>

                <div className="space-y-2">
                  <p className="font-mono-tech text-xs text-white uppercase">
                    Principais Demandas Atendidas em {activeCityData.name}:
                  </p>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-300">
                    {activeCityData.focusAreas.map((area) => (
                      <li key={area} className="flex items-start gap-2">
                        <span className="text-[#FF8900] font-bold">·</span>
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <a
                    href={getWhatsAppLink(
                      `Olá! Estou em ${activeCityData.name} - SP e gostaria de solicitar um orçamento com a S.A Manutenção.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#FF8900] hover:bg-[#e67a00] text-[#171719] font-display font-bold text-sm uppercase tracking-wider rounded transition-colors"
                  >
                    <span>Solicitar Atendimento em {activeCityData.name}</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4.7 SEÇÃO — CTA DE CONVERSÃO */}
      <section className="py-16 lg:py-24 bg-[#171719] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-[#252525] border border-[#FF8900]/40 rounded-lg p-8 sm:p-12 lg:p-16 overflow-hidden">
            {/* Geometric orange & gold accents */}
            <div className="absolute top-0 left-0 w-24 h-1.5 bg-[#FF8900]" aria-hidden="true" />
            <div className="absolute bottom-0 right-0 w-32 h-1 bg-[#C5A45A]" aria-hidden="true" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <p className="font-mono-tech text-xs text-[#FF8900] uppercase tracking-widest">
                  Atendimento Técnico Direto · {COMPANY_INFO.phoneDisplay}
                </p>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white headline-balance">
                  PRECISA DE MANUTENÇÃO? <span className="text-[#FF8900]">VAMOS RESOLVER.</span>
                </h2>
                <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl">
                  Entre em contato com nossa equipe e solicite um orçamento técnico sem custo.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                <a
                  href={getWhatsAppLink(COMPANY_INFO.defaultWhatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-[#FF8900] hover:bg-[#e67a00] text-[#171719] font-display font-bold text-base tracking-wider uppercase rounded transition-colors whitespace-nowrap"
                >
                  <MessageSquare className="w-5 h-5 fill-[#171719] shrink-0" aria-hidden="true" />
                  <span>SOLICITAR ORÇAMENTO PELO WHATSAPP</span>
                </a>

                <a
                  href="/contato"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/contato');
                  }}
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-[#171719] hover:bg-black text-white border border-white/15 font-display font-bold text-sm tracking-wider uppercase rounded transition-colors whitespace-nowrap"
                >
                  PREENCHER FORMULÁRIO TÉCNICO
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
