import React, { useState, useRef, useEffect } from 'react';
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  MapPin,
  Instagram,
  ArrowUpRight,
} from 'lucide-react';
import { BrandLogo, WhatsAppIcon } from './BrandVisuals';
import { COMPANY_INFO, SERVICES_DATA, getWhatsAppLink } from '../data/siteData';

interface NavigationProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Header: React.FC<NavigationProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNav = (path: string) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    onNavigate(path);
  };

  const isServiceActive = currentPath.startsWith('/servicos');

  return (
    <header className="sticky top-0 z-50 w-full bg-[#171719]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Lockup (Single line, whitespace-nowrap shrink-0) */}
        <BrandLogo variant="header" onClick={() => handleNav('/')} />

        {/* Zone 2: 5 Single-Line Navigation Links */}
        <nav
          aria-label="Navegação Principal"
          className="hidden lg:flex items-center gap-7 text-sm font-medium"
        >
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNav('/');
            }}
            className={`whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors ${
              currentPath === '/'
                ? 'border-[#FF8900] text-white'
                : 'border-transparent text-neutral-300 hover:text-white hover:border-white/30'
            }`}
          >
            Início
          </a>

          <a
            href="/sobre"
            onClick={(e) => {
              e.preventDefault();
              handleNav('/sobre');
            }}
            className={`whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors ${
              currentPath === '/sobre'
                ? 'border-[#FF8900] text-white'
                : 'border-transparent text-neutral-300 hover:text-white hover:border-white/30'
            }`}
          >
            Sobre Nós
          </a>

          {/* Services Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              type="button"
              onClick={() => setServicesDropdownOpen((prev) => !prev)}
              aria-expanded={servicesDropdownOpen}
              className={`inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors cursor-pointer ${
                isServiceActive
                  ? 'border-[#FF8900] text-white'
                  : 'border-transparent text-neutral-300 hover:text-white hover:border-white/30'
              }`}
            >
              <span>Serviços</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-150 ${
                  servicesDropdownOpen ? 'rotate-180 text-[#FF8900]' : ''
                }`}
                aria-hidden="true"
              />
            </button>

            {servicesDropdownOpen && (
              <div className="absolute left-0 top-full pt-2 w-80 z-50">
                <div className="bg-[#1E1E22] border border-white/15 rounded-lg shadow-2xl overflow-hidden py-2">
                  <div className="px-4 py-2 border-b border-white/10 flex items-center justify-between">
                    <span className="font-mono-tech text-xs text-[#C5A45A] uppercase">
                      Especialidades S.A
                    </span>
                    <a
                      href="/servicos"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNav('/servicos');
                      }}
                      className="text-xs text-[#FF8900] hover:underline whitespace-nowrap"
                    >
                      Ver todas
                    </a>
                  </div>
                  {SERVICES_DATA.map((service) => (
                    <a
                      key={service.slug}
                      href={`/servicos/${service.slug}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNav(`/servicos/${service.slug}`);
                      }}
                      className={`block px-4 py-2.5 transition-colors hover:bg-white/5 ${
                        currentPath === `/servicos/${service.slug}`
                          ? 'bg-white/5 text-[#FF8900]'
                          : 'text-white'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold">
                          {service.index}. {service.name}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-400 mt-0.5 line-clamp-1">
                        {service.shortName}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a
            href="/segmentos"
            onClick={(e) => {
              e.preventDefault();
              handleNav('/segmentos');
            }}
            className={`whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors ${
              currentPath === '/segmentos'
                ? 'border-[#FF8900] text-white'
                : 'border-transparent text-neutral-300 hover:text-white hover:border-white/30'
            }`}
          >
            Segmentos Atendidos
          </a>

          <a
            href="/contato"
            onClick={(e) => {
              e.preventDefault();
              handleNav('/contato');
            }}
            className={`whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors ${
              currentPath === '/contato'
                ? 'border-[#FF8900] text-white'
                : 'border-transparent text-neutral-300 hover:text-white hover:border-white/30'
            }`}
          >
            Contato
          </a>
        </nav>

        {/* Zone 3: 1 Primary CTA Button */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 bg-[#FF8900] hover:bg-[#e67a00] text-[#171719] font-display font-bold text-sm tracking-wider uppercase rounded transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF8900]"
          >
            <span>SOLICITAR ORÇAMENTO</span>
          </a>

          {/* Mobile Menu Trigger (touch target >= 44px) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded border border-white/15 text-white hover:border-[#FF8900] transition-colors cursor-pointer"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#171719] border-b border-white/15 px-4 pt-3 pb-6 space-y-2">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNav('/');
            }}
            className={`block px-3 py-2.5 rounded text-base font-medium ${
              currentPath === '/' ? 'bg-white/10 text-[#FF8900]' : 'text-white hover:bg-white/5'
            }`}
          >
            Início
          </a>

          <a
            href="/sobre"
            onClick={(e) => {
              e.preventDefault();
              handleNav('/sobre');
            }}
            className={`block px-3 py-2.5 rounded text-base font-medium ${
              currentPath === '/sobre' ? 'bg-white/10 text-[#FF8900]' : 'text-white hover:bg-white/5'
            }`}
          >
            Sobre Nós
          </a>

          <div>
            <button
              type="button"
              onClick={() => setMobileServicesOpen((prev) => !prev)}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded text-base font-medium text-white hover:bg-white/5 cursor-pointer"
            >
              <span>Serviços</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  mobileServicesOpen ? 'rotate-180 text-[#FF8900]' : ''
                }`}
              />
            </button>
            {mobileServicesOpen && (
              <div className="pl-4 mt-1 space-y-1 border-l border-white/15 ml-3">
                <a
                  href="/servicos"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('/servicos');
                  }}
                  className="block px-3 py-2 text-sm font-semibold text-[#C5A45A]"
                >
                  Visão Geral de Serviços
                </a>
                {SERVICES_DATA.map((service) => (
                  <a
                    key={service.slug}
                    href={`/servicos/${service.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(`/servicos/${service.slug}`);
                    }}
                    className={`block px-3 py-2 rounded text-sm ${
                      currentPath === `/servicos/${service.slug}`
                        ? 'text-[#FF8900] font-semibold'
                        : 'text-neutral-300 hover:text-white'
                    }`}
                  >
                    {service.index}. {service.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="/segmentos"
            onClick={(e) => {
              e.preventDefault();
              handleNav('/segmentos');
            }}
            className={`block px-3 py-2.5 rounded text-base font-medium ${
              currentPath === '/segmentos'
                ? 'bg-white/10 text-[#FF8900]'
                : 'text-white hover:bg-white/5'
            }`}
          >
            Segmentos Atendidos
          </a>

          <a
            href="/contato"
            onClick={(e) => {
              e.preventDefault();
              handleNav('/contato');
            }}
            className={`block px-3 py-2.5 rounded text-base font-medium ${
              currentPath === '/contato'
                ? 'bg-white/10 text-[#FF8900]'
                : 'text-white hover:bg-white/5'
            }`}
          >
            Contato e Orçamento
          </a>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center py-3 px-4 bg-[#FF8900] text-[#171719] font-display font-bold text-xs sm:text-base tracking-wider uppercase rounded-lg text-center"
            >
              <span>SOLICITAR ORÇAMENTO PELO WHATSAPP</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export const Footer: React.FC<NavigationProps> = ({ onNavigate }) => {
  const handleNav = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#171719] border-t border-white/10 text-neutral-300">
      {/* Top Gold & Orange Hairline */}
      <div className="h-0.5 w-full bg-gradient-to-r from-[#FF8900] via-[#C5A45A] to-[#171719]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Brand & Institutional Summary (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo variant="footer" />
            <p className="text-sm text-neutral-300 leading-relaxed max-w-sm">
              Conte com quem entende! Unimos Elétrica, Pintura, Serralheria, Marcenaria, Encanador,
              Dedetização e Projetos de Restauração em um único parceiro de confiança em Salto e
              região.
            </p>
            <div className="pt-2 space-y-2 text-sm">
              <div className="flex items-center gap-2.5 text-white">
                <Phone className="w-4 h-4 text-[#FF8900] shrink-0" aria-hidden="true" />
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono-tech hover:text-[#FF8900] transition-colors"
                >
                  {COMPANY_INFO.phoneDisplay} (WhatsApp)
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-neutral-300">
                <Instagram className="w-4 h-4 text-[#C5A45A] shrink-0" aria-hidden="true" />
                <a
                  href={COMPANY_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>{COMPANY_INFO.instagramHandle}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-neutral-400">
                <MapPin className="w-4 h-4 text-[#FF8900] shrink-0" aria-hidden="true" />
                <span>Salto – SP | Atendimento Regional</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-display text-base font-bold uppercase tracking-wider text-white">
              Navegação
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('/');
                  }}
                  className="text-neutral-400 hover:text-[#FF8900] transition-colors"
                >
                  Página Inicial
                </a>
              </li>
              <li>
                <a
                  href="/sobre"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('/sobre');
                  }}
                  className="text-neutral-400 hover:text-[#FF8900] transition-colors"
                >
                  Sobre a Empresa
                </a>
              </li>
              <li>
                <a
                  href="/servicos"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('/servicos');
                  }}
                  className="text-neutral-400 hover:text-[#FF8900] transition-colors"
                >
                  Nossos Serviços
                </a>
              </li>
              <li>
                <a
                  href="/segmentos"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('/segmentos');
                  }}
                  className="text-neutral-400 hover:text-[#FF8900] transition-colors"
                >
                  Segmentos Atendidos
                </a>
              </li>
              <li>
                <a
                  href="/contato"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('/contato');
                  }}
                  className="text-neutral-400 hover:text-[#FF8900] transition-colors"
                >
                  Solicitar Orçamento
                </a>
              </li>
              <li>
                <a
                  href="/politica-de-privacidade"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('/politica-de-privacidade');
                  }}
                  className="text-neutral-400 hover:text-[#FF8900] transition-colors"
                >
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-display text-base font-bold uppercase tracking-wider text-white">
              Especialidades
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES_DATA.map((service) => (
                <li key={service.slug}>
                  <a
                    href={`/servicos/${service.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(`/servicos/${service.slug}`);
                    }}
                    className="text-neutral-400 hover:text-[#FF8900] transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Cities Served (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-display text-base font-bold uppercase tracking-wider text-white">
              Região de Atendimento
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Equipes prontas para atendimento ágil em Salto e principais polos industriais e
              comerciais da região:
            </p>
            <ul className="space-y-1.5 text-sm font-mono-tech text-neutral-300">
              {COMPANY_INFO.regionList.map((city) => (
                <li key={city} className="flex items-center justify-between border-b border-white/5 pb-1">
                  <span>{city} – SP</span>
                  <span className="text-xs text-[#C5A45A]">Atendimento Direto</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Signature */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-neutral-400">
          <p className="font-medium text-neutral-300">
            {COMPANY_INFO.name} — {COMPANY_INFO.signature}
          </p>
          <p>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-5 right-5 z-40">
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        title="Solicitar orçamento pelo WhatsApp (11) 95145-9102"
        aria-label="Solicitar orçamento pelo WhatsApp (11) 95145-9102"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] text-white flex items-center justify-center shadow-[0_8px_24px_rgba(37,211,102,0.45)] border-2 border-white/25 transition-transform duration-150 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
      >
        <WhatsAppIcon className="w-7 h-7" />
      </a>
    </div>
  );
};
