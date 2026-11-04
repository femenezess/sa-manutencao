import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
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
  Instagram,
  ArrowUpRight,
} from 'lucide-react';
import {
  COMPANY_INFO,
  SERVICES_DATA,
  WHY_CHOOSE_US,
  SEGMENTS_DATA,
  REGIONAL_CITIES,
  getWhatsAppLink,
} from '../data/siteData';
import {
  HeroIndustrialVisual,
  ServiceVisual,
  RegionalMapVisual,
} from '../components/BrandVisuals';
import { SEOHead } from '../components/SEOHead';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

const TOTAL_SERVICES = SERVICES_DATA.length;
const EXTENDED_SERVICES = [...SERVICES_DATA, ...SERVICES_DATA, ...SERVICES_DATA];

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [selectedCity, setSelectedCity] = useState<string>('Salto');
  const [carouselIndex, setCarouselIndex] = useState<number>(TOTAL_SERVICES);
  const [enableTransition, setEnableTransition] = useState<boolean>(true);
  const [isCarouselPaused, setIsCarouselPaused] = useState<boolean>(false);
  const [cardStepPx, setCardStepPx] = useState<number>(304);
  const isAnimatingRef = useRef<boolean>(false);
  const touchStartXRef = useRef<number | null>(null);

  const activeCityData =
    REGIONAL_CITIES.find((c) => c.name === selectedCity) || REGIONAL_CITIES[0];

  // Dynamically match card width + gap on mobile (250 + 16 = 266px) vs sm+ (284 + 20 = 304px)
  useEffect(() => {
    const updateStep = () => {
      if (typeof window !== 'undefined') {
        setCardStepPx(window.innerWidth < 640 ? 266 : 304);
      }
    };
    updateStep();
    window.addEventListener('resize', updateStep);
    return () => window.removeEventListener('resize', updateStep);
  }, []);

  const handleSlide = (direction: 'left' | 'right') => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setEnableTransition(true);
    setCarouselIndex((prev) => (direction === 'right' ? prev + 1 : prev - 1));
  };

  // Seamless infinite loop reset after CSS transition completes
  const handleTransitionEnd = () => {
    isAnimatingRef.current = false;
    if (carouselIndex >= TOTAL_SERVICES * 2) {
      setEnableTransition(false);
      setCarouselIndex(carouselIndex - TOTAL_SERVICES);
    } else if (carouselIndex < TOTAL_SERVICES) {
      setEnableTransition(false);
      setCarouselIndex(carouselIndex + TOTAL_SERVICES);
    }
  };

  // Re-enable smooth transition on the next frame after an instant loop reset
  useEffect(() => {
    if (!enableTransition) {
      const id = window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setEnableTransition(true);
        });
      });
      return () => window.cancelAnimationFrame(id);
    }
  }, [enableTransition]);

  // Smooth auto-glide every 3.8s unless hovered or touched
  useEffect(() => {
    if (isCarouselPaused) return;
    const timer = window.setInterval(() => {
      handleSlide('right');
    }, 3800);
    return () => window.clearInterval(timer);
  }, [isCarouselPaused]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsCarouselPaused(true);
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current !== null) {
      const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
      if (Math.abs(deltaX) > 35) {
        handleSlide(deltaX < 0 ? 'right' : 'left');
      }
    }
    touchStartXRef.current = null;
    setIsCarouselPaused(false);
  };

  const differentialIcons = [Wrench, Clock, ShieldCheck, FileCheck2, CheckCircle2, MessageSquare];
  const segmentIcons = [Factory, Briefcase, Store, Building2, Utensils, UserCheck];

  return (
    <>
      <SEOHead
        title="S.A Manutenção — Conte com quem entende! Elétrica, Pintura, Serralheria e Mais"
        description="Conte com quem entende! Soluções em Elétrica, Pintura, Serralheria, Marcenaria, Encanador, Dedetização e Projetos de Restauração em Salto, Itu, Indaiatuba, Porto Feliz e Sorocaba."
        path="/"
      />

      {/* 1. PRIMEIRO BLOCO (HERO) — MASCOTE EM DESTAQUE & TÍTULO "CONTE COM QUEM ENTENDE!" */}
      <section className="relative bg-friendly-pattern border-b border-white/10 overflow-hidden">
        <div
          className="absolute -right-28 -top-28 w-96 h-96 rounded-full border-[36px] border-[#FF8900]/15 pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Left Column: Proposition & CTA (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-5 sm:space-y-6">
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#C5A45A] font-medium">
                <img
                  src="/assets/aistudio/elem_raio_3d.png"
                  alt=""
                  aria-hidden="true"
                  className="w-5 h-5 sm:w-6 sm:h-6 object-contain shrink-0"
                />
                <span>Salto – SP</span>
                <span aria-hidden="true" className="text-neutral-600">·</span>
                <span className="text-neutral-200">
                  Atendimento ágil em Itu, Indaiatuba, Porto Feliz e Sorocaba
                </span>
              </div>

              {/* H1 Headline — "Conte com quem entende!" with white text inside orange stripe */}
              <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.18] sm:leading-[1.12] headline-balance break-words">
                Conte com <span className="highlight-orange">quem entende!</span>
              </h1>

              <p className="text-sm sm:text-lg text-neutral-200 leading-relaxed max-w-2xl">
                Garantia de segurança e tranquilidade para sua empresa, condomínio ou residência. Na{' '}
                <strong className="text-white">S.A Manutenção</strong>, você resolve{' '}
                <strong className="text-[#FF8900]">
                  Elétrica, Pintura, Serralheria, Marcenaria, Encanador, Dedetização e Projetos de
                  Restauração
                </strong>{' '}
                em um único lugar, sem dor de cabeça.
              </p>

              {/* Action Buttons (Full width & clean wrapping on mobile) */}
              <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3.5 sm:py-4 bg-[#FF8900] hover:bg-[#e67a00] text-[#171719] font-bold text-sm sm:text-base rounded-xl shadow-lg transition-all text-center sm:whitespace-nowrap"
                >
                  <span>SOLICITAR ORÇAMENTO</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" aria-hidden="true" />
                </a>

                <a
                  href="#solucoes-integradas"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('solucoes-integradas');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center px-5 sm:px-6 py-3.5 sm:py-4 bg-[#252525] hover:bg-white/10 text-white border border-white/15 font-bold text-sm sm:text-base rounded-xl transition-colors text-center sm:whitespace-nowrap"
                >
                  CONHECER NOSSOS SERVIÇOS
                </a>
              </div>

              {/* Friendly Highlights Strip with 3D Visual Elements */}
              <div className="pt-5 sm:pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-xs text-neutral-300">
                <div className="flex items-center gap-3 bg-[#252525]/80 border border-white/10 rounded-xl p-3">
                  <img
                    src="/assets/aistudio/elem_raio_3d.png"
                    alt=""
                    aria-hidden="true"
                    className="w-7 h-7 sm:w-8 sm:h-8 object-contain shrink-0"
                  />
                  <span>
                    <strong className="block text-white">7 Especialidades</strong>
                    Tudo em um único parceiro
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-[#252525]/80 border border-white/10 rounded-xl p-3">
                  <img
                    src="/assets/aistudio/elem_alerta_3d.png"
                    alt=""
                    aria-hidden="true"
                    className="w-7 h-7 sm:w-8 sm:h-8 object-contain shrink-0"
                  />
                  <span>
                    <strong className="block text-white">Segurança Garantida</strong>
                    Evite prejuízos e riscos
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-[#252525]/80 border border-white/10 rounded-xl p-3">
                  <CheckCircle2 className="w-6 h-6 text-[#FF8900] shrink-0" aria-hidden="true" />
                  <span>
                    <strong className="block text-white">Orçamento Sem Custo</strong>
                    Chame direto no WhatsApp
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Mascot Featured as Centerpiece in the First Block (5 cols) */}
            <div className="lg:col-span-5 flex">
              <HeroIndustrialVisual />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEÇÃO DE SERVIÇOS — CARROSSEL FLUIDO E MINIMALISTA EM APENAS UMA LINHA (OTIMIZADO PARA MOBILE E DESKTOP) */}
      <section
        id="solucoes-integradas"
        className="py-14 sm:py-16 lg:py-24 bg-[#1B1B1E] border-b border-white/10 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
          {/* Header of Services Block */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 sm:gap-6">
            <div className="max-w-3xl space-y-2.5 sm:space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF8900]">
                <img
                  src="/assets/aistudio/elem_raio_3d.png"
                  alt=""
                  aria-hidden="true"
                  className="w-5 h-5 object-contain"
                />
                <span>Especialidades Integradas</span>
              </div>
              <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white headline-balance leading-tight break-words">
                Tudo o que sua estrutura precisa <span className="text-[#FF8900]">em um só lugar!</span>
              </h2>
              <p className="text-sm sm:text-lg text-neutral-300 leading-relaxed">
                Navegue pelas categorias abaixo e conheça nossas 7 especialidades para residências,
                comércios, condomínios e indústrias:
              </p>
            </div>

            <a
              href="/servicos"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/servicos');
              }}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#252525] hover:bg-white/10 border border-white/15 rounded-xl font-bold text-xs sm:text-sm text-white transition-colors self-start lg:self-end"
            >
              <span>Ver todas as especialidades</span>
              <ArrowRight className="w-4 h-4 text-[#FF8900] shrink-0" aria-hidden="true" />
            </a>
          </div>

          {/* CARROSSEL FLUIDO EM UMA ÚNICA LINHA — SEM CORTAR CARDS NO MOBILE */}
          <div
            className="relative flex items-center sm:gap-4"
            onMouseEnter={() => setIsCarouselPaused(true)}
            onMouseLeave={() => setIsCarouselPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Left Arrow — Overlaid on edge on mobile so full width is available for cards, side-mounted on sm+ */}
            <button
              type="button"
              onClick={() => handleSlide('left')}
              aria-label="Categoria anterior"
              className="absolute -left-2 sm:static top-1/2 -translate-y-1/2 sm:translate-y-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#171719]/90 sm:bg-[#252525] hover:bg-[#FF8900] text-white hover:text-[#171719] border border-white/20 flex items-center justify-center shrink-0 shadow-xl transition-colors cursor-pointer z-20"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Single-Row Viewport */}
            <div className="overflow-hidden w-full py-2 px-1 sm:px-0">
              <div
                onTransitionEnd={handleTransitionEnd}
                style={{
                  transform: `translate3d(-${carouselIndex * cardStepPx}px, 0, 0)`,
                  transition: enableTransition
                    ? 'transform 520ms cubic-bezier(0.22, 1, 0.36, 1)'
                    : 'none',
                }}
                className="flex flex-nowrap gap-4 sm:gap-5 will-change-transform"
              >
                {EXTENDED_SERVICES.map((service, idx) => (
                  <article
                    key={`${service.slug}-${idx}`}
                    onClick={() => onNavigate(`/servicos/${service.slug}`)}
                    className="w-[250px] sm:w-[284px] shrink-0 group cursor-pointer bg-[#252525] border border-white/10 hover:border-[#FF8900] rounded-2xl overflow-hidden flex flex-col justify-between transition-colors shadow-lg"
                  >
                    <div>
                      <ServiceVisual slug={service.slug} className="aspect-[16/10]" />

                      <div className="p-4 sm:p-5 space-y-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF8900] block">
                          {service.shortName}
                        </span>
                        <h3 className="font-display text-lg sm:text-xl font-extrabold text-white group-hover:text-[#FF8900] transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed line-clamp-2">
                          {service.cardSummary}
                        </p>
                      </div>
                    </div>

                    <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-3 flex items-center justify-between border-t border-white/10">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white group-hover:text-[#FF8900] transition-colors">
                        <span>Ver especialidade</span>
                        <ArrowRight className="w-4 h-4 text-[#FF8900] transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Right Arrow — Overlaid on edge on mobile so full width is available for cards, side-mounted on sm+ */}
            <button
              type="button"
              onClick={() => handleSlide('right')}
              aria-label="Próxima categoria"
              className="absolute -right-2 sm:static top-1/2 -translate-y-1/2 sm:translate-y-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#171719]/90 sm:bg-[#252525] hover:bg-[#FF8900] text-white hover:text-[#171719] border border-white/20 flex items-center justify-center shrink-0 shadow-xl transition-colors cursor-pointer z-20"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* BLOCO DE REDIRECIONAMENTO DAS REDES SOCIAIS (INSTAGRAM @MANUTENCAO.ARAUJO COM MASCOTE E ELEMENTOS 3D) */}
      <section className="py-14 sm:py-16 lg:py-20 bg-[#171719] border-b border-white/10 relative overflow-hidden">
        <div
          className="absolute -left-24 bottom-0 w-72 h-72 rounded-full border-[32px] border-[#FF8900]/10 pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-[#252525] border border-[#FF8900]/40 rounded-2xl sm:rounded-3xl p-5 sm:p-10 lg:p-12 shadow-2xl overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left 8 cols: Official Logo + Social Callout + Highlights */}
              <div className="lg:col-span-8 space-y-5 sm:space-y-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
                  <img
                    src={COMPANY_INFO.logoPath}
                    alt="Logotipo S.A Manutenção"
                    referrerPolicy="no-referrer"
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-[#C5A45A] shadow-lg shrink-0"
                  />
                  <div className="space-y-1.5 min-w-0">
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase text-[#FF8900]">
                      <Instagram className="w-4 h-4 shrink-0" aria-hidden="true" />
                      <span>Siga a S.A Manutenção no Instagram</span>
                    </div>
                    <h2 className="font-display text-xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight break-words">
                      Acompanhe nossas dicas e serviços em{' '}
                      <span className="text-[#FF8900] break-all sm:break-normal">
                        {COMPANY_INFO.instagramHandle}
                      </span>
                    </h2>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-neutral-200 leading-relaxed max-w-2xl">
                  Quer ver de perto nossos serviços executados em Salto e região, além de dicas
                  práticas de economia de energia, prevenção contra falhas elétricas e conservação
                  predial? Siga nosso perfil oficial no Instagram!
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-1">
                  <div className="bg-[#171719] border border-white/10 rounded-xl p-3.5 sm:p-4 flex items-center gap-3">
                    <img
                      src="/assets/aistudio/elem_raio_3d.png"
                      alt=""
                      aria-hidden="true"
                      className="w-8 h-8 sm:w-9 sm:h-9 object-contain shrink-0"
                    />
                    <div className="text-xs">
                      <strong className="block text-white">Dicas de Elétrica</strong>
                      <span className="text-neutral-400">Economia e segurança</span>
                    </div>
                  </div>

                  <div className="bg-[#171719] border border-white/10 rounded-xl p-3.5 sm:p-4 flex items-center gap-3">
                    <img
                      src="/assets/aistudio/elem_alerta_3d.png"
                      alt=""
                      aria-hidden="true"
                      className="w-8 h-8 sm:w-9 sm:h-9 object-contain shrink-0"
                    />
                    <div className="text-xs">
                      <strong className="block text-white">Prevenção de Riscos</strong>
                      <span className="text-neutral-400">Cuidado com sua estrutura</span>
                    </div>
                  </div>

                  <div className="bg-[#171719] border border-white/10 rounded-xl p-3.5 sm:p-4 flex items-center gap-3">
                    <img
                      src="/assets/aistudio/elem_choque_3d.png"
                      alt=""
                      aria-hidden="true"
                      className="w-8 h-8 sm:w-9 sm:h-9 object-contain shrink-0"
                    />
                    <div className="text-xs">
                      <strong className="block text-white">Serviços Reais</strong>
                      <span className="text-neutral-400">Obras e reformas na região</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
                  <a
                    href={COMPANY_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 bg-[#FF8900] hover:bg-[#e67a00] text-[#171719] font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-lg transition-colors text-center"
                  >
                    <Instagram className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" aria-hidden="true" />
                    <span>SEGUIR {COMPANY_INFO.instagramHandle.toUpperCase()}</span>
                    <ArrowUpRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                  </a>

                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 bg-[#171719] hover:bg-black text-white border border-white/15 font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-colors text-center"
                  >
                    <span>FALAR NO WHATSAPP</span>
                    <ArrowRight className="w-4 h-4 text-[#FF8900] shrink-0" aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* Right 4 cols: Official S.A Manutenção Mascot Showcase */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center relative pt-2 lg:pt-0">
                <div
                  className="w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-[#FF8900]/15 border-2 border-[#FF8900]/40 absolute pointer-events-none"
                  aria-hidden="true"
                />
                <img
                  src="/assets/aistudio/mascote_transparent.png"
                  alt="Mascote Oficial S.A Manutenção"
                  className="h-56 sm:h-72 w-auto object-contain relative z-10 drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4.4 SEÇÃO — POR QUE ESCOLHER A S.A MANUTENÇÃO? */}
      <section className="py-14 sm:py-16 lg:py-24 bg-[#1B1B1E] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
            <div className="lg:col-span-4 space-y-4 sm:space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C5A45A]">
                <img
                  src="/assets/aistudio/elem_alerta_3d.png"
                  alt=""
                  aria-hidden="true"
                  className="w-5 h-5 object-contain"
                />
                <span>Por que contar conosco?</span>
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white headline-balance leading-tight">
                Qualidade e segurança <span className="text-[#FF8900]">em cada atendimento</span>
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                Evite prejuízos causados por serviços malfeitos. Unimos 7 especialidades em uma
                única equipe de confiança para cuidar da sua empresa, condomínio ou residência.
              </p>

              {/* Safety Warning Card with 3D Shock Sign */}
              <div className="p-4 rounded-2xl bg-[#252525] border border-white/10 flex items-center gap-3.5 sm:gap-4">
                <img
                  src="/assets/aistudio/elem_choque_3d.png"
                  alt="Sinal de alerta elétrico"
                  className="w-11 h-11 sm:w-12 sm:h-12 object-contain shrink-0"
                />
                <p className="text-xs text-neutral-300 leading-relaxed">
                  <strong className="text-white block">Identificação precisa de problemas:</strong>
                  Detectamos falhas ocultas antes que se tornem grandes prejuízos para sua operação.
                </p>
              </div>

              <div className="pt-1">
                <a
                  href="/sobre"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/sobre');
                  }}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#FF8900] hover:underline"
                >
                  <span>Conheça mais sobre a S.A Manutenção</span>
                  <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {WHY_CHOOSE_US.map((item, idx) => {
                const IconComponent = differentialIcons[idx % differentialIcons.length];
                return (
                  <div
                    key={item.index}
                    className="bg-[#252525] border border-white/10 rounded-2xl p-5 sm:p-6 space-y-2.5 sm:space-y-3 shadow-md"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#C5A45A]">
                        {item.index}. Diferencial S.A
                      </span>
                      <IconComponent className="w-5 h-5 text-[#FF8900] shrink-0" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white">
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

      {/* 4.5 SEÇÃO — SEGMENTOS ATENDIDOS (SEM SUBTÍTULOS "ATENDIMENTO 01, 02...") */}
      <section className="py-14 sm:py-16 lg:py-24 bg-[#171719] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-6 mb-10 sm:mb-12">
            <div className="max-w-2xl space-y-2.5 sm:space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF8900]">
                Para quem trabalhamos
              </span>
              <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white headline-balance">
                Soluções para diferentes <span className="text-[#FF8900]">tipos de necessidade</span>
              </h2>
            </div>
            <a
              href="/segmentos"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/segmentos');
              }}
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#252525] hover:bg-white/10 border border-white/15 rounded-xl font-bold text-xs sm:text-sm text-white transition-colors self-start md:self-end"
            >
              <span>Ver detalhes por segmento</span>
              <ArrowRight className="w-4 h-4 text-[#FF8900] shrink-0" aria-hidden="true" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {SEGMENTS_DATA.map((segment, idx) => {
              const IconComponent = segmentIcons[idx % segmentIcons.length];
              return (
                <div
                  key={segment.id}
                  className="bg-[#252525] border border-white/10 rounded-2xl p-5 sm:p-6 flex flex-col justify-between space-y-5 shadow-md"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-lg sm:text-xl font-extrabold text-white">
                        {segment.title}
                      </h3>
                      <IconComponent className="w-5 h-5 text-[#C5A45A] shrink-0 mt-1" aria-hidden="true" />
                    </div>
                    <p className="text-sm text-neutral-300 leading-relaxed">
                      {segment.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
                    <a
                      href="/segmentos"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('/segmentos');
                      }}
                      className="text-xs font-semibold text-[#C5A45A] hover:underline"
                    >
                      Ver serviços indicados
                    </a>
                    <a
                      href={getWhatsAppLink(segment.whatsappText)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#FF8900] transition-colors"
                    >
                      <span>Pedir orçamento</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#FF8900] shrink-0" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4.6 SEÇÃO — ÁREA DE ATENDIMENTO */}
      <section className="py-14 sm:py-16 lg:py-24 bg-[#1B1B1E] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10 sm:mb-12 space-y-2.5 sm:space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C5A45A]">
              Onde Atendemos
            </span>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white headline-balance">
              Presente em Salto e <span className="text-[#FF8900]">em toda a região!</span>
            </h2>
            <p className="text-sm sm:text-lg text-neutral-300 leading-relaxed">
              Atendemos empresas, comércios, condomínios, indústrias e residências em Salto e
              cidades vizinhas com rapidez e contato direto.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            <div className="lg:col-span-7">
              <RegionalMapVisual
                selectedCity={selectedCity}
                onSelectCity={(cityName) => setSelectedCity(cityName)}
              />
            </div>

            <div className="lg:col-span-5 space-y-5">
              <div
                role="tablist"
                aria-label="Cidades atendidas pela S.A Manutenção"
                className="grid grid-cols-2 sm:grid-cols-3 gap-2 p-2 bg-[#252525] rounded-2xl border border-white/10"
              >
                {REGIONAL_CITIES.map((city) => {
                  const isActive = city.name === selectedCity;
                  return (
                    <button
                      key={city.name}
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setSelectedCity(city.name)}
                      className={`px-2.5 py-2.5 text-[11px] sm:text-xs font-bold rounded-xl transition-colors cursor-pointer text-center ${
                        isActive
                          ? 'bg-[#FF8900] text-white'
                          : 'text-neutral-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {city.name} – {city.state}
                    </button>
                  );
                })}
              </div>

              <div className="bg-[#252525] border border-white/10 rounded-2xl p-5 sm:p-6 space-y-4 shadow-lg">
                <div className="flex items-start justify-between gap-3 border-b border-white/10 pb-3">
                  <div>
                    <span className="text-xs font-bold text-[#C5A45A]">
                      {activeCityData.tag} · {activeCityData.corridor}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-extrabold text-white mt-0.5">
                      Atendimento em {activeCityData.name} – {activeCityData.state}
                    </h3>
                  </div>
                  <MapPin className="w-6 h-6 text-[#FF8900] shrink-0 mt-1" aria-hidden="true" />
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed">
                  {activeCityData.description}
                </p>

                <ul className="space-y-2 text-xs sm:text-sm text-neutral-200">
                  {activeCityData.focusAreas.map((area) => (
                    <li key={area} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FF8900] shrink-0 mt-0.5" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2">
                  <a
                    href={getWhatsAppLink(
                      `Olá! Estou em ${activeCityData.name} - SP e gostaria de solicitar um orçamento com a S.A Manutenção.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3.5 bg-[#FF8900] hover:bg-[#e67a00] text-[#171719] font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-colors text-center"
                  >
                    <span>Solicitar Orçamento em {activeCityData.name}</span>
                    <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4.7 SEÇÃO — CTA DE CONVERSÃO */}
      <section className="py-14 sm:py-16 lg:py-24 bg-[#171719] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-[#252525] border-2 border-[#FF8900] rounded-2xl sm:rounded-3xl p-6 sm:p-12 lg:p-14 overflow-hidden shadow-2xl">
            <div
              className="absolute -right-20 -bottom-20 w-72 h-72 rounded-full border-[28px] border-[#FF8900]/25 pointer-events-none"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center relative z-10">
              <div className="lg:col-span-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                <img
                  src={COMPANY_INFO.logoPath}
                  alt="Logotipo S.A Manutenção"
                  referrerPolicy="no-referrer"
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-[#C5A45A] shadow-xl shrink-0"
                />
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FF8900] uppercase tracking-wider">
                    <img
                      src="/assets/aistudio/elem_raio_3d.png"
                      alt=""
                      aria-hidden="true"
                      className="w-5 h-5 object-contain shrink-0"
                    />
                    <span>Precisa de ajuda profissional? · {COMPANY_INFO.phoneDisplay}</span>
                  </div>
                  <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white headline-balance">
                    Precisa de manutenção? <span className="text-[#FF8900]">Vamos resolver!</span>
                  </h2>
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-xl">
                    Chame no nosso WhatsApp agora mesmo e solicite um orçamento sem compromisso com
                    quem entende do assunto.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                <a
                  href={getWhatsAppLink(COMPANY_INFO.defaultWhatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 bg-[#FF8900] hover:bg-[#e67a00] text-[#171719] font-bold text-xs sm:text-base uppercase tracking-wider rounded-xl shadow-lg transition-colors text-center"
                >
                  <span>CHAMAR NO WHATSAPP</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" aria-hidden="true" />
                </a>

                <a
                  href="/contato"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/contato');
                  }}
                  className="inline-flex items-center justify-center px-5 sm:px-6 py-3.5 bg-[#171719] hover:bg-black text-white border border-white/15 font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-colors text-center"
                >
                  PREENCHER FORMULÁRIO ONLINE
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
