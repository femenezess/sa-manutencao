import React from 'react';
import { COMPANY_INFO, REGIONAL_CITIES } from '../data/siteData';

interface BrandLogoProps {
  variant?: 'header' | 'footer' | 'badge';
  onClick?: () => void;
}

export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12.031 2C6.508 2 2.023 6.485 2.023 12.008c0 1.766.461 3.49 1.337 5.01L2 22l5.122-1.343a9.972 9.972 0 0 0 4.909 1.292h.004c5.522 0 10.007-4.485 10.007-10.008 0-2.674-1.041-5.188-2.931-7.079A9.946 9.946 0 0 0 12.031 2Zm5.847 14.324c-.246.693-1.433 1.326-1.995 1.411-.513.077-1.163.11-1.878-.117-.434-.138-.99-.322-1.703-.63-2.997-1.294-4.954-4.312-5.104-4.512-.15-.2-1.219-1.622-1.219-3.094 0-1.472.771-2.196 1.045-2.495.274-.3.598-.375.798-.375.199 0 .399.002.573.01.184.009.43-.07.673.514.249.599.847 2.071.922 2.221.075.15.125.324.025.524-.1.2-.15.324-.299.499-.15.175-.314.391-.449.524-.15.15-.306.312-.131.612.174.299.775 1.278 1.664 2.071 1.143 1.019 2.106 1.335 2.405 1.485.3.15.474.125.649-.075.174-.2.748-.873.948-1.173.2-.3.399-.249.673-.15.275.1 1.746.823 2.045.973.3.15.499.225.574.35.075.125.075.723-.171 1.416Z" />
  </svg>
);

export const BrandLogo: React.FC<BrandLogoProps> = ({ variant = 'header', onClick }) => {
  if (variant === 'header') {
    return (
      <a
        href="/"
        onClick={(e) => {
          if (onClick) {
            e.preventDefault();
            onClick();
          }
        }}
        className="inline-flex items-center gap-2.5 sm:gap-3 whitespace-nowrap shrink-0 group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF8900]"
        aria-label="S.A Manutenção — Página Inicial"
      >
        <img
          src={COMPANY_INFO.logoPath}
          alt="Logotipo S.A Manutenção — Serviços de Manutenção e Energia"
          referrerPolicy="no-referrer"
          className="w-9 h-9 sm:w-11 sm:h-11 rounded-full object-cover border-2 border-[#C5A45A] shadow-md shrink-0"
        />
        <span className="font-condensed text-xl sm:text-2xl font-bold tracking-wider text-white uppercase">
          S.A <span className="text-[#C5A45A]">MANUTENÇÃO</span>
        </span>
      </a>
    );
  }

  if (variant === 'badge') {
    return (
      <div className="inline-flex items-center gap-3 bg-[#252525]/90 border border-[#C5A45A]/40 rounded-full pr-4 pl-1.5 py-1.5 shadow-lg">
        <img
          src={COMPANY_INFO.logoPath}
          alt="Selo Oficial S.A Manutenção"
          referrerPolicy="no-referrer"
          className="w-9 h-9 rounded-full object-cover border border-[#C5A45A]"
        />
        <span className="text-xs font-semibold text-white">
          S.A Manutenção <span className="text-[#C5A45A]">· Energia e Reparos</span>
        </span>
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-3 sm:gap-4">
      <img
        src={COMPANY_INFO.logoPath}
        alt="Logotipo Oficial S.A Manutenção"
        referrerPolicy="no-referrer"
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-[#C5A45A] shadow-lg shrink-0"
      />
      <div>
        <div className="font-condensed text-xl sm:text-2xl font-bold tracking-wider text-white uppercase leading-none">
          S.A <span className="text-[#C5A45A]">MANUTENÇÃO</span>
        </div>
        <div className="text-xs text-[#C5A45A] font-medium mt-1">
          Serviços de Manutenção e Energia
        </div>
      </div>
    </div>
  );
};

export const HeroIndustrialVisual: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[340px] sm:min-h-[400px] lg:min-h-[480px] bg-gradient-to-br from-[#232329] via-[#1B1B1F] to-[#141417] overflow-hidden border border-white/15 rounded-2xl shadow-2xl flex flex-col justify-between">
      {/* Subtle Radial Orange Glow behind the Mascot */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_55%_45%,rgba(255,137,0,0.22),transparent_65%)] pointer-events-none"
        aria-hidden="true"
      />

      {/* Curved Orange Circle Arc framing the Mascot centerpiece */}
      <svg
        viewBox="0 0 400 400"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] sm:w-[360px] h-[260px] sm:h-[360px] pointer-events-none"
        aria-hidden="true"
      >
        <circle
          cx="200"
          cy="195"
          r="140"
          fill="none"
          stroke="#FF8900"
          strokeWidth="28"
          strokeOpacity="0.85"
        />
      </svg>

      {/* 3D Lightning Bolt Element */}
      <img
        src="/assets/aistudio/elem_raio_3d.png"
        alt=""
        aria-hidden="true"
        referrerPolicy="no-referrer"
        className="absolute top-4 left-4 sm:top-6 sm:left-6 w-12 sm:w-20 h-auto drop-shadow-[0_10px_20px_rgba(255,137,0,0.4)] z-10 pointer-events-none"
      />

      {/* 3D Warning Triangle Element */}
      <img
        src="/assets/aistudio/elem_alerta_3d.png"
        alt=""
        aria-hidden="true"
        referrerPolicy="no-referrer"
        className="absolute top-5 right-4 sm:top-8 sm:right-6 w-10 sm:w-14 h-auto drop-shadow-lg z-10 pointer-events-none"
      />

      {/* S.A Manutenção 3D Mascot as the Featured Highlight Image of the First Block */}
      <div className="relative z-10 flex-1 flex items-end justify-center pt-6 px-2 sm:px-4 pointer-events-none">
        <img
          src="/assets/aistudio/mascote_transparent.png"
          alt="Mascote Oficial S.A Manutenção em destaque"
          referrerPolicy="no-referrer"
          className="h-[260px] sm:h-[360px] lg:h-[420px] w-auto object-contain drop-shadow-[0_18px_32px_rgba(0,0,0,0.85)]"
        />
      </div>

      {/* Bottom Clean Brand Seal Bar */}
      <div className="relative z-20 mx-3 sm:mx-4 mb-3 sm:mb-4 p-3 sm:p-3.5 rounded-xl bg-[#171719]/95 backdrop-blur-md border border-white/15 flex items-center justify-between gap-2.5 sm:gap-3">
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
          <img
            src={COMPANY_INFO.logoPath}
            alt="Logotipo S.A Manutenção"
            referrerPolicy="no-referrer"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border border-[#C5A45A] shrink-0"
          />
          <div className="min-w-0">
            <p className="text-xs font-bold text-white leading-tight">
              S.A Manutenção · Conte com quem entende!
            </p>
            <p className="text-[11px] text-[#C5A45A] mt-0.5 leading-snug">
              Elétrica · Pintura · Serralheria · Marcenaria · Encanador · Dedetização · Restauração
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ServiceVisualProps {
  slug: string;
  className?: string;
  imgClassName?: string;
}

const SERVICE_IMAGE_MAP: Record<string, { src: string; alt: string }> = {
  eletrica: {
    src: '/assets/aistudio/hero_photo_clean.png',
    alt: 'Serviços de Elétrica residencial, comercial e industrial — S.A Manutenção',
  },
  'manutencao-eletrica': {
    src: '/assets/aistudio/hero_photo_clean.png',
    alt: 'Serviços de Elétrica residencial, comercial e industrial — S.A Manutenção',
  },
  pintura: {
    src: '/assets/aistudio/pintura_95cfa027.jpg',
    alt: 'Serviços de Pintura residencial, comercial e industrial — S.A Manutenção',
  },
  'pintura-industrial-e-comercial': {
    src: '/assets/aistudio/pintura_95cfa027.jpg',
    alt: 'Serviços de Pintura residencial, comercial e industrial — S.A Manutenção',
  },
  serralheria: {
    src: '/assets/aistudio/serralheria_f52edf24.jpg',
    alt: 'Serviços de Serralheria, solda, portões e estruturas metálicas — S.A Manutenção',
  },
  'solda-e-serralheria': {
    src: '/assets/aistudio/serralheria_f52edf24.jpg',
    alt: 'Serviços de Serralheria, solda, portões e estruturas metálicas — S.A Manutenção',
  },
  marcenaria: {
    src: '/assets/aistudio/marcenaria_a2145aa4.jpg',
    alt: 'Serviços de Marcenaria sob medida, portas e móveis — S.A Manutenção',
  },
  encanador: {
    src: '/assets/aistudio/encanador_7e12cd3c.jpg',
    alt: 'Serviços de Encanador, reparos hidráulicos e tubulações — S.A Manutenção',
  },
  dedetizacao: {
    src: '/assets/aistudio/dedetizador_c29b9803.jpg',
    alt: 'Serviços de Dedetização e controle de pragas — S.A Manutenção',
  },
  'dedetizacao-e-controle-de-pragas': {
    src: '/assets/aistudio/dedetizador_c29b9803.jpg',
    alt: 'Serviços de Dedetização e controle de pragas — S.A Manutenção',
  },
  'projetos-de-restauracao': {
    src: '/assets/aistudio/restaura__o_f48ecf19.jpg',
    alt: 'Projetos de Restauração e revitalização de imóveis — S.A Manutenção',
  },
};

export const ServiceVisual: React.FC<ServiceVisualProps> = ({
  slug,
  className = 'aspect-[16/10]',
  imgClassName = 'object-center',
}) => {
  const imageInfo = SERVICE_IMAGE_MAP[slug] || SERVICE_IMAGE_MAP['projetos-de-restauracao'];

  return (
    <div className={`relative w-full ${className} bg-[#171719] overflow-hidden`}>
      <img
        src={imageInfo.src}
        alt={imageInfo.alt}
        referrerPolicy="no-referrer"
        className={`w-full h-full object-cover ${imgClassName} transition-transform duration-500 ease-out group-hover:scale-105`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#171719]/75 via-transparent to-transparent pointer-events-none" />
    </div>
  );
};

interface RegionalMapVisualProps {
  selectedCity: string;
  onSelectCity: (cityName: string) => void;
}

export const RegionalMapVisual: React.FC<RegionalMapVisualProps> = ({
  selectedCity,
  onSelectCity,
}) => {
  return (
    <div className="relative w-full bg-[#252525] border border-white/15 rounded-2xl p-5 sm:p-6 overflow-hidden shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-white/10">
        <div>
          <span className="text-xs font-bold text-[#FF8900] uppercase tracking-wider block mb-0.5">
            Atendimento Regional Rápido
          </span>
          <h3 className="font-condensed text-2xl font-bold text-white uppercase tracking-wide">
            Salto · Itu · Indaiatuba · Porto Feliz · Sorocaba
          </h3>
        </div>
        <span className="text-xs text-neutral-300">
          Toque em uma cidade para ver detalhes
        </span>
      </div>

      <svg
        viewBox="0 0 600 340"
        className="w-full h-auto max-h-[340px]"
        role="img"
        aria-label="Mapa da região de atendimento da S.A Manutenção: Salto, Itu, Indaiatuba, Porto Feliz e Sorocaba"
      >
        <defs>
          <pattern id="mapTechGrid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path
              d="M 30 0 L 0 0 0 30"
              fill="none"
              stroke="#FFFFFF"
              strokeOpacity="0.05"
              strokeWidth="1"
            />
          </pattern>
        </defs>

        <rect width="600" height="340" rx="12" fill="#171719" />
        <rect width="600" height="340" rx="12" fill="url(#mapTechGrid)" />

        <polygon
          points="156,142 444,102 470,190 348,245 144,265 110,195"
          fill="#FF8900"
          fillOpacity="0.09"
          stroke="#C5A45A"
          strokeOpacity="0.5"
          strokeWidth="2"
          strokeDasharray="6 6"
        />

        <path
          d="M 444 102 L 312 156 L 348 204 L 144 265"
          fill="none"
          stroke="#FF8900"
          strokeOpacity="0.7"
          strokeWidth="3"
        />
        <path
          d="M 156 142 L 312 156 L 348 204"
          fill="none"
          stroke="#C5A45A"
          strokeOpacity="0.7"
          strokeWidth="2.5"
        />

        {REGIONAL_CITIES.map((city) => {
          const cx = (city.coordinates.x / 100) * 600;
          const cy = (city.coordinates.y / 100) * 340;
          const isSelected = selectedCity === city.name;
          const isHQ = city.name === 'Salto';

          return (
            <g
              key={city.name}
              onClick={() => onSelectCity(city.name)}
              className="cursor-pointer"
              role="button"
              tabIndex={0}
              aria-label={`Selecionar cidade ${city.name} - ${city.state}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectCity(city.name);
                }
              }}
            >
              {isSelected && (
                <circle
                  cx={cx}
                  cy={cy}
                  r="24"
                  fill="#FF8900"
                  fillOpacity="0.22"
                  stroke="#FF8900"
                  strokeWidth="2"
                />
              )}

              <circle
                cx={cx}
                cy={cy}
                r={isHQ ? 11 : 9}
                fill={isSelected ? '#FF8900' : isHQ ? '#C5A45A' : '#252525'}
                stroke="#FFFFFF"
                strokeWidth="2.5"
              />

              <g transform={`translate(${cx}, ${cy - 24})`}>
                <rect
                  x="-56"
                  y="-16"
                  width="112"
                  height="24"
                  rx="6"
                  fill={isSelected ? '#FF8900' : '#252525'}
                  stroke={isSelected ? '#FF8900' : '#C5A45A'}
                  strokeWidth="1.5"
                />
                <text
                  x="0"
                  y="-1"
                  textAnchor="middle"
                  fontSize="11"
                  fontWeight="700"
                  fill="#FFFFFF"
                >
                  {city.name.toUpperCase()} - SP
                </text>
              </g>
            </g>
          );
        })}
      </svg>
    </div>
  );
};
