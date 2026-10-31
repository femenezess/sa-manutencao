import React from 'react';
import { REGIONAL_CITIES } from '../data/siteData';

interface BrandLogoProps {
  variant?: 'header' | 'footer';
  onClick?: () => void;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ variant = 'header', onClick }) => {
  if (variant === 'header') {
    // Follows Top Bar Contract: Single-line brand lockup with whitespace-nowrap shrink-0 and zero subtitle clutter
    return (
      <a
        href="/"
        onClick={(e) => {
          if (onClick) {
            e.preventDefault();
            onClick();
          }
        }}
        className="inline-flex items-center gap-3 whitespace-nowrap shrink-0 group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF8900]"
        aria-label="S.A Manutenção — Página Inicial"
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0"
          aria-hidden="true"
        >
          {/* Outer octagonal shield in Institutional Gold #C5A45A */}
          <path
            d="M11 3H33L41 11V33L33 41H11L3 33V11L11 3Z"
            fill="#171719"
            stroke="#C5A45A"
            strokeWidth="2"
          />
          {/* Inner precision frame */}
          <path
            d="M13 6.5H31L37.5 13V31L31 37.5H13L6.5 31V13L13 6.5Z"
            stroke="#C5A45A"
            strokeOpacity="0.35"
            strokeWidth="1"
          />
          {/* Industrial Orange Bolt / Corner Accent */}
          <path d="M23.5 10L15.5 23H22.5L20.5 34L28.5 21H21.5L23.5 10Z" fill="#FF8900" />
        </svg>
        <span className="font-display text-2xl font-bold tracking-wider text-white uppercase">
          S.A <span className="text-[#C5A45A]">MANUTENÇÃO</span>
        </span>
      </a>
    );
  }

  return (
    <div className="inline-flex items-center gap-3.5">
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden="true"
      >
        <path
          d="M11 3H33L41 11V33L33 41H11L3 33V11L11 3Z"
          fill="#171719"
          stroke="#C5A45A"
          strokeWidth="2"
        />
        <path
          d="M13 6.5H31L37.5 13V31L31 37.5H13L6.5 31V13L13 6.5Z"
          stroke="#C5A45A"
          strokeOpacity="0.4"
          strokeWidth="1"
        />
        <path d="M23.5 10L15.5 23H22.5L20.5 34L28.5 21H21.5L23.5 10Z" fill="#FF8900" />
      </svg>
      <div>
        <div className="font-display text-2xl font-bold tracking-wider text-white uppercase leading-none">
          S.A <span className="text-[#C5A45A]">MANUTENÇÃO</span>
        </div>
        <div className="text-xs text-neutral-400 mt-1 tracking-wide">
          Industrial · Predial · Comercial
        </div>
      </div>
    </div>
  );
};

/**
 * Cleanly crops the high-resolution industrial electrician & electrical panel photograph
 * from /assets/aistudio/image_d673d5d0.png (825x728), isolating the pure photographic region
 * (x: 42..782, y: 58..440) without any external borders, text, or watermarks.
 */
export const HeroIndustrialVisual: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[340px] lg:min-h-[480px] bg-[#171719] overflow-hidden border border-white/10 rounded-lg">
      <svg
        viewBox="42 58 740 382"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full object-cover"
        role="img"
        aria-label="Eletricista industrial executando manutenção técnica em quadro elétrico de distribuição com EPIs completos"
      >
        <image
          href="/assets/aistudio/image_d673d5d0.png"
          width="825"
          height="728"
          preserveAspectRatio="none"
        />
      </svg>

      {/* Measured contrast scrim for text/UI legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#171719] via-[#171719]/25 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#171719]/60 via-transparent to-transparent pointer-events-none" />

      {/* Geometric industrial orange & gold frame accents inspired by @manutencao.araujo */}
      <div className="absolute top-0 right-0 w-20 h-1 bg-[#FF8900]" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-1 h-20 bg-[#FF8900]" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-28 h-0.5 bg-[#C5A45A]" aria-hidden="true" />

      {/* Bottom caption bar inside visual frame */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-4 bg-[#171719]/90 backdrop-blur-md border border-white/10 px-4 py-3 rounded">
        <div>
          <p className="font-mono-tech text-xs text-[#FF8900] uppercase tracking-wider">
            Engenharia de Manutenção Integrada
          </p>
          <p className="text-xs text-neutral-300 mt-0.5">
            Execução orientada pelas normas NBR 5410 · NR-10 · NR-35 · ANVISA
          </p>
        </div>
        <span className="font-mono-tech text-xs text-[#C5A45A] shrink-0 hidden sm:inline">
          Salto – SP e Região
        </span>
      </div>
    </div>
  );
};

interface ServiceVisualProps {
  slug: string;
  className?: string;
}

export const ServiceVisual: React.FC<ServiceVisualProps> = ({ slug, className = 'h-52' }) => {
  if (slug === 'manutencao-eletrica') {
    // Cropped detail of the industrial electrical panel & technician hands from the reference photo
    return (
      <div className={`relative w-full ${className} bg-[#171719] overflow-hidden`}>
        <svg
          viewBox="38 62 680 375"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full transition-transform duration-300 group-hover:scale-105"
          role="img"
          aria-label="Manutenção elétrica industrial e montagem de quadros QDF"
        >
          <image href="/assets/aistudio/image_d673d5d0.png" width="825" height="728" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-t from-[#171719] via-[#171719]/30 to-transparent" />
        <div className="absolute top-0 left-0 w-12 h-1 bg-[#FF8900]" />
      </div>
    );
  }

  if (slug === 'manutencao-predial') {
    // High-contrast architectural & utility maintenance schematic + photographic blend
    return (
      <div className={`relative w-full ${className} bg-[#1B1B1E] overflow-hidden`}>
        <svg
          viewBox="0 0 600 360"
          className="w-full h-full transition-transform duration-300 group-hover:scale-105"
          role="img"
          aria-label="Manutenção predial integrada para condomínios, comércios e empresas"
        >
          <defs>
            <linearGradient id="predialBg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#171719" />
              <stop offset="55%" stopColor="#252525" />
              <stop offset="100%" stopColor="#1B1B1E" />
            </linearGradient>
            <pattern id="predialGrid" width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#ffffff" strokeOpacity="0.04" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="600" height="360" fill="url(#predialBg)" />
          <rect width="600" height="360" fill="url(#predialGrid)" />

          {/* Architectural Building Elevation & Technical Systems */}
          <g stroke="#C5A45A" strokeOpacity="0.45" strokeWidth="1.5" fill="none">
            <rect x="90" y="55" width="160" height="250" rx="2" fill="#171719" fillOpacity="0.8" />
            <rect x="250" y="95" width="230" height="210" rx="2" fill="#171719" fillOpacity="0.8" />
            {/* Floors and structural lines */}
            <line x1="90" y1="115" x2="250" y2="115" />
            <line x1="90" y1="175" x2="480" y2="175" />
            <line x1="90" y1="235" x2="480" y2="235" />
            <line x1="60" y1="305" x2="540" y2="305" stroke="#FF8900" strokeWidth="2" />
          </g>

          {/* Hydraulic & Electrical Riser Conduits in Industrial Orange */}
          <g stroke="#FF8900" strokeWidth="2.5" fill="none">
            <path d="M135 285 V85 H210" />
            <path d="M310 285 V135 H435 V265" />
            <circle cx="135" cy="175" r="5" fill="#FF8900" />
            <circle cx="310" cy="175" r="5" fill="#FF8900" />
            <circle cx="435" cy="235" r="5" fill="#FF8900" />
          </g>

          {/* Inspection Checklist Module Overlay */}
          <g transform="translate(345, 52)">
            <rect width="185" height="96" rx="4" fill="#171719" stroke="#C5A45A" strokeWidth="1.5" />
            <line x1="16" y1="26" x2="30" y2="26" stroke="#FF8900" strokeWidth="3" />
            <line x1="40" y1="26" x2="155" y2="26" stroke="#FFFFFF" strokeOpacity="0.7" strokeWidth="2" />
            <line x1="16" y1="50" x2="30" y2="50" stroke="#FF8900" strokeWidth="3" />
            <line x1="40" y1="50" x2="140" y2="50" stroke="#FFFFFF" strokeOpacity="0.7" strokeWidth="2" />
            <line x1="16" y1="74" x2="30" y2="74" stroke="#FF8900" strokeWidth="3" />
            <line x1="40" y1="74" x2="162" y2="74" stroke="#FFFFFF" strokeOpacity="0.7" strokeWidth="2" />
          </g>
        </svg>
        <div className="absolute inset-0 bg-gradient-to-t from-[#171719] via-transparent to-transparent" />
        <div className="absolute top-0 left-0 w-12 h-1 bg-[#FF8900]" />
      </div>
    );
  }

  if (slug === 'pintura-industrial-e-comercial') {
    return (
      <div className={`relative w-full ${className} bg-[#1B1B1E] overflow-hidden`}>
        <svg
          viewBox="0 0 600 360"
          className="w-full h-full transition-transform duration-300 group-hover:scale-105"
          role="img"
          aria-label="Pintura industrial de galpões, estruturas metálicas e pisos com equipamento airless"
        >
          <defs>
            <linearGradient id="paintFan" x1="0" y1="0" x2="1" y2="0.5">
              <stop offset="0%" stopColor="#FF8900" stopOpacity="0.85" />
              <stop offset="60%" stopColor="#FF8900" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#FF8900" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          <rect width="600" height="360" fill="#171719" />
          {/* Industrial Warehouse Steel Trusses */}
          <g stroke="#38383D" strokeWidth="2" fill="none">
            <path d="M40 120 L300 45 L560 120" />
            <path d="M40 145 L300 70 L560 145" />
            <line x1="120" y1="97" x2="120" y2="290" />
            <line x1="300" y1="45" x2="300" y2="145" />
            <line x1="480" y1="97" x2="480" y2="290" />
            <path d="M120 122 L180 78 L240 105 L300 70 L360 105 L420 78 L480 122" />
          </g>
          {/* Treated & Coated Half of Warehouse Structure */}
          <g stroke="#C5A45A" strokeWidth="2.5" fill="none">
            <path d="M40 120 L300 45" />
            <path d="M40 145 L300 70" />
            <line x1="120" y1="97" x2="120" y2="290" />
          </g>
          {/* High-Pressure Airless Spray Cone */}
          <polygon points="210,215 470,105 470,295" fill="url(#paintFan)" />
          {/* Coated Epoxy Floor Strip */}
          <polygon points="60,290 540,290 580,340 20,340" fill="#252525" stroke="#FF8900" strokeWidth="1.5" />
          <line x1="90" y1="315" x2="510" y2="315" stroke="#FF8900" strokeWidth="3" strokeDasharray="18 12" />
          {/* Airless Nozzle Vector */}
          <g transform="translate(155, 195)">
            <rect x="0" y="10" width="42" height="20" rx="3" fill="#C5A45A" />
            <polygon points="42,6 58,14 58,26 42,34" fill="#FF8900" />
          </g>
        </svg>
        <div className="absolute inset-0 bg-gradient-to-t from-[#171719] via-transparent to-transparent" />
        <div className="absolute top-0 left-0 w-12 h-1 bg-[#FF8900]" />
      </div>
    );
  }

  if (slug === 'solda-e-serralheria') {
    return (
      <div className={`relative w-full ${className} bg-[#171719] overflow-hidden`}>
        <svg
          viewBox="0 0 600 360"
          className="w-full h-full transition-transform duration-300 group-hover:scale-105"
          role="img"
          aria-label="Solda MIG/MAG, solda elétrica e manutenção de estruturas metálicas"
        >
          <defs>
            <radialGradient id="weldGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
              <stop offset="25%" stopColor="#FF8900" stopOpacity="0.9" />
              <stop offset="65%" stopColor="#FF8900" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#171719" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="600" height="360" fill="#171719" />
          {/* Heavy Steel I-Beam Assembly */}
          <g fill="#252525" stroke="#C5A45A" strokeOpacity="0.5" strokeWidth="1.5">
            <rect x="70" y="195" width="460" height="24" />
            <rect x="95" y="219" width="410" height="65" fill="#1E1E22" />
            <rect x="70" y="284" width="460" height="22" />
            {/* Vertical Structural Column */}
            <polygon points="260,50 340,50 340,195 260,195" fill="#252525" />
          </g>
          {/* Weld Seam Bead */}
          <line x1="255" y1="195" x2="345" y2="195" stroke="#FF8900" strokeWidth="5" strokeLinecap="round" />
          {/* Bright Welding Arc Glow */}
          <circle cx="330" cy="195" r="95" fill="url(#weldGlow)" />
          {/* Welding Sparks Trajectory */}
          <g stroke="#FF8900" strokeWidth="2" strokeLinecap="round">
            <line x1="330" y1="195" x2="420" y2="120" />
            <line x1="330" y1="195" x2="455" y2="165" />
            <line x1="330" y1="195" x2="395" y2="95" stroke="#C5A45A" />
            <line x1="330" y1="195" x2="235" y2="125" />
            <line x1="330" y1="195" x2="440" y2="235" />
            <circle cx="435" cy="110" r="2.5" fill="#FFFFFF" />
            <circle cx="468" cy="160" r="2" fill="#FF8900" />
            <circle cx="220" cy="115" r="2.5" fill="#C5A45A" />
          </g>
          {/* MIG Torch Nozzle */}
          <g transform="translate(365, 110) rotate(35)">
            <rect x="0" y="0" width="22" height="75" rx="3" fill="#C5A45A" />
            <polygon points="3,75 19,75 15,98 7,98" fill="#FFFFFF" />
          </g>
        </svg>
        <div className="absolute inset-0 bg-gradient-to-t from-[#171719] via-transparent to-transparent" />
        <div className="absolute top-0 left-0 w-12 h-1 bg-[#FF8900]" />
      </div>
    );
  }

  // Default / dedetizacao-e-controle-de-pragas
  return (
    <div className={`relative w-full ${className} bg-[#171719] overflow-hidden`}>
      <svg
        viewBox="0 0 600 360"
        className="w-full h-full transition-transform duration-300 group-hover:scale-105"
        role="img"
        aria-label="Dedetização e controle integrado de pragas com produtos regularizados pela ANVISA"
      >
        <rect width="600" height="360" fill="#171719" />
        {/* Perimeter Protection Shield & Facility Blueprint */}
        <g stroke="#2E2E34" strokeWidth="1.5" fill="none">
          <rect x="75" y="55" width="450" height="250" rx="6" />
          <rect x="115" y="85" width="370" height="190" rx="4" strokeDasharray="8 6" stroke="#C5A45A" strokeOpacity="0.45" />
        </g>
        {/* Corner Bait & Monitoring Stations */}
        <g fill="#FF8900">
          <rect x="107" y="77" width="16" height="16" rx="2" />
          <rect x="477" y="77" width="16" height="16" rx="2" />
          <rect x="107" y="267" width="16" height="16" rx="2" />
          <rect x="477" y="267" width="16" height="16" rx="2" />
        </g>
        {/* Central Sanitary Protection Shield Emblem */}
        <g transform="translate(300, 180)">
          <circle r="76" fill="#252525" stroke="#C5A45A" strokeWidth="1.5" />
          <path
            d="M0 -48 L40 -30 V8 C40 34 22 52 0 60 C-22 52 -40 34 -40 8 V-30 L0 -48Z"
            fill="#171719"
            stroke="#FF8900"
            strokeWidth="2.5"
          />
          <path
            d="M-15 4 L-4 15 L18 -9"
            fill="none"
            stroke="#C5A45A"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
      <div className="absolute inset-0 bg-gradient-to-t from-[#171719] via-transparent to-transparent" />
      <div className="absolute top-0 left-0 w-12 h-1 bg-[#FF8900]" />
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
    <div className="relative w-full bg-[#171719] border border-white/10 rounded-lg p-4 sm:p-6 overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-white/10">
        <div>
          <span className="font-mono-tech text-xs text-[#FF8900] uppercase tracking-wider">
            Malha Regional de Atendimento
          </span>
          <h3 className="font-display text-xl font-bold text-white uppercase tracking-wide">
            Eixo Salto · Itu · Indaiatuba · Porto Feliz · Sorocaba
          </h3>
        </div>
        <span className="font-mono-tech text-xs text-neutral-400">
          Clique em uma cidade para detalhes
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
              strokeOpacity="0.04"
              strokeWidth="1"
            />
          </pattern>
        </defs>

        <rect width="600" height="340" rx="6" fill="#1C1C20" />
        <rect width="600" height="340" rx="6" fill="url(#mapTechGrid)" />

        {/* Regional Polygon Coverage Zone */}
        <polygon
          points="156,142 444,102 470,190 348,245 144,265 110,195"
          fill="#FF8900"
          fillOpacity="0.06"
          stroke="#C5A45A"
          strokeOpacity="0.35"
          strokeWidth="1.5"
          strokeDasharray="6 6"
        />

        {/* Highway Corridors connecting Salto to the 4 neighboring cities */}
        {/* SP-075: Indaiatuba -> Salto -> Itu -> Sorocaba */}
        <path
          d="M 444 102 L 312 156 L 348 204 L 144 265"
          fill="none"
          stroke="#FF8900"
          strokeOpacity="0.55"
          strokeWidth="2.5"
        />
        {/* SP-300: Porto Feliz -> Salto / Itu */}
        <path
          d="M 156 142 L 312 156 L 348 204"
          fill="none"
          stroke="#C5A45A"
          strokeOpacity="0.6"
          strokeWidth="2"
        />

        {/* Highway Labels */}
        <g className="font-mono-tech" fontSize="10" fill="#A3A3A3">
          <rect x="366" y="114" width="48" height="16" rx="2" fill="#171719" stroke="#ffffff22" />
          <text x="390" y="125" textAnchor="middle" fill="#C5A45A">SP-075</text>

          <rect x="205" y="136" width="48" height="16" rx="2" fill="#171719" stroke="#ffffff22" />
          <text x="229" y="147" textAnchor="middle" fill="#C5A45A">SP-300</text>

          <rect x="218" y="232" width="48" height="16" rx="2" fill="#171719" stroke="#ffffff22" />
          <text x="242" y="243" textAnchor="middle" fill="#C5A45A">SP-280</text>
        </g>

        {/* Interactive City Nodes */}
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
              {/* Outer selection ring */}
              {isSelected && (
                <circle
                  cx={cx}
                  cy={cy}
                  r="22"
                  fill="#FF8900"
                  fillOpacity="0.18"
                  stroke="#FF8900"
                  strokeWidth="1.5"
                />
              )}

              {/* Node circle */}
              <circle
                cx={cx}
                cy={cy}
                r={isHQ ? 10 : 8}
                fill={isSelected ? '#FF8900' : isHQ ? '#C5A45A' : '#252525'}
                stroke="#FFFFFF"
                strokeWidth="2"
              />

              {/* City Name Plate */}
              <g transform={`translate(${cx}, ${cy - 22})`}>
                <rect
                  x="-54"
                  y="-16"
                  width="108"
                  height="22"
                  rx="3"
                  fill={isSelected ? '#FF8900' : '#171719'}
                  stroke={isSelected ? '#FF8900' : '#C5A45A'}
                  strokeOpacity={isSelected ? 1 : 0.5}
                  strokeWidth="1"
                />
                <text
                  x="0"
                  y="-2"
                  textAnchor="middle"
                  fontSize="11"
                  fontWeight="700"
                  fill={isSelected ? '#171719' : '#FFFFFF'}
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
