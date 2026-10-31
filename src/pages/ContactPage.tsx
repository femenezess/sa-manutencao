import React, { useState } from 'react';
import {
  Phone,
  Instagram,
  MapPin,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  ArrowUpRight,
  RotateCcw,
} from 'lucide-react';
import {
  COMPANY_INFO,
  SERVICES_DATA,
  REGIONAL_CITIES,
  getWhatsAppLink,
} from '../data/siteData';
import { SEOHead, BreadcrumbsNav } from '../components/SEOHead';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

interface QuoteFormState {
  nome: string;
  empresa: string;
  telefone: string;
  email: string;
  cidade: string;
  servico: string;
  descricao: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<QuoteFormState>({
    nome: '',
    empresa: '',
    telefone: '',
    email: '',
    cidade: 'Salto - SP',
    servico: 'Manutenção Elétrica',
    descricao: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof QuoteFormState, string>>>({});
  const [preparedWhatsappUrl, setPreparedWhatsappUrl] = useState<string | null>(null);
  const [preparedSummaryText, setPreparedSummaryText] = useState<string>('');
  const [copied, setCopied] = useState(false);

  const breadcrumbs = [
    { label: 'Início', path: '/' },
    { label: 'Contato e Solicitação de Orçamento', path: '/contato' },
  ];

  const formatPhoneMask = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 11);
    if (digits.length === 0) return '';
    if (digits.length <= 2) return `(${digits}`;
    if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    if (digits.length <= 10) {
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
    }
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
  };

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof QuoteFormState, string>> = {};

    if (!formData.nome.trim() || formData.nome.trim().length < 2) {
      nextErrors.nome = 'Informe seu nome completo ou de contato.';
    }

    const phoneDigits = formData.telefone.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      nextErrors.telefone = 'Informe um telefone ou WhatsApp válido com DDD.';
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        nextErrors.email = 'Informe um endereço de e-mail válido ou deixe em branco.';
      }
    }

    if (!formData.cidade.trim()) {
      nextErrors.cidade = 'Selecione a cidade do atendimento.';
    }

    if (!formData.servico.trim()) {
      nextErrors.servico = 'Selecione o tipo de serviço desejado.';
    }

    if (!formData.descricao.trim() || formData.descricao.trim().length < 10) {
      nextErrors.descricao = 'Descreva brevemente a necessidade técnica (mínimo de 10 caracteres).';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const lines = [
      'Olá! Gostaria de solicitar um orçamento com a S.A Manutenção.',
      '',
      `*Nome:* ${formData.nome.trim()}`,
      formData.empresa.trim() ? `*Empresa/Condomínio:* ${formData.empresa.trim()}` : null,
      `*Telefone/WhatsApp:* ${formData.telefone.trim()}`,
      formData.email.trim() ? `*E-mail:* ${formData.email.trim()}` : null,
      `*Cidade:* ${formData.cidade}`,
      `*Serviço Desejado:* ${formData.servico}`,
      `*Descrição da Necessidade:* ${formData.descricao.trim()}`,
    ].filter(Boolean);

    const fullText = lines.join('\n');
    setPreparedSummaryText(fullText);
    setPreparedWhatsappUrl(getWhatsAppLink(fullText));
  };

  const handleCopySummary = async () => {
    if (!preparedSummaryText) return;
    try {
      await navigator.clipboard.writeText(preparedSummaryText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <>
      <SEOHead
        title="Contato e Solicitação de Orçamento | S.A Manutenção — Salto e Região"
        description="Solicite um orçamento técnico sem custo com a S.A Manutenção pelo WhatsApp (11) 95145-9102 ou formulário. Atendimento em Salto, Itu, Indaiatuba, Porto Feliz e Sorocaba."
        path="/contato"
        breadcrumbs={breadcrumbs}
      />

      <BreadcrumbsNav items={breadcrumbs} onNavigate={onNavigate} />

      <section className="py-14 lg:py-20 bg-[#171719] bg-industrial-grid border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="font-mono-tech text-xs text-[#FF8900] uppercase tracking-widest">
              Atendimento Comercial e Técnico · Orçamento sem Custo
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white headline-balance">
              PRECISA DE MANUTENÇÃO? <span className="text-[#FF8900]">VAMOS RESOLVER.</span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              Preencha os dados da sua demanda abaixo para gerar sua solicitação estruturada ou
              inicie uma conversa direta pelo nosso WhatsApp comercial.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[#1B1B1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Direct Channels & Regional Coverage (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#252525] border border-white/10 rounded-lg p-6 sm:p-8 space-y-6">
                <div>
                  <span className="font-mono-tech text-xs text-[#C5A45A] uppercase">
                    Canais Oficiais
                  </span>
                  <h2 className="font-display text-2xl font-bold uppercase text-white mt-1">
                    Atendimento Direto S.A Manutenção
                  </h2>
                </div>

                <div className="space-y-4">
                  {/* WhatsApp & Phone */}
                  <div className="p-4 rounded bg-[#171719] border border-white/10 flex items-start gap-4">
                    <Phone className="w-5 h-5 text-[#FF8900] shrink-0 mt-1" aria-hidden="true" />
                    <div className="space-y-1">
                      <span className="block text-xs font-mono-tech text-neutral-400 uppercase">
                        Telefone e WhatsApp Comercial
                      </span>
                      <a
                        href={getWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono-tech text-lg font-bold text-white hover:text-[#FF8900] transition-colors block"
                      >
                        {COMPANY_INFO.phoneDisplay}
                      </a>
                      <span className="block text-xs text-neutral-400">
                        Clique para abrir conversa imediata no WhatsApp
                      </span>
                    </div>
                  </div>

                  {/* Instagram */}
                  <div className="p-4 rounded bg-[#171719] border border-white/10 flex items-start gap-4">
                    <Instagram
                      className="w-5 h-5 text-[#C5A45A] shrink-0 mt-1"
                      aria-hidden="true"
                    />
                    <div className="space-y-1">
                      <span className="block text-xs font-mono-tech text-neutral-400 uppercase">
                        Perfil Oficial no Instagram
                      </span>
                      <a
                        href={COMPANY_INFO.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-semibold text-white hover:text-[#FF8900] transition-colors inline-flex items-center gap-1.5"
                      >
                        <span>{COMPANY_INFO.instagramHandle}</span>
                        <ArrowUpRight className="w-4 h-4 text-[#FF8900]" aria-hidden="true" />
                      </a>
                      <span className="block text-xs text-neutral-400">
                        Acompanhe serviços executados e rotina técnica
                      </span>
                    </div>
                  </div>

                  {/* Cities Served */}
                  <div className="p-4 rounded bg-[#171719] border border-white/10 flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-[#FF8900] shrink-0 mt-1" aria-hidden="true" />
                    <div className="space-y-2 w-full">
                      <span className="block text-xs font-mono-tech text-neutral-400 uppercase">
                        Cidades Atendidas na Região
                      </span>
                      <p className="text-sm text-white font-medium">
                        Base em Salto – SP com atendimento regional ágil:
                      </p>
                      <div className="grid grid-cols-2 gap-1.5 pt-1 text-xs font-mono-tech text-neutral-300">
                        {REGIONAL_CITIES.map((city) => (
                          <div key={city.name} className="flex items-center gap-1.5">
                            <span className="text-[#FF8900]">·</span>
                            <span>
                              {city.name} – {city.state}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#FF8900] hover:bg-[#e67a00] text-[#171719] font-display font-bold text-base uppercase tracking-wider rounded transition-colors"
                >
                  <MessageSquare className="w-5 h-5 fill-[#171719]" aria-hidden="true" />
                  <span>CHAMAR NO WHATSAPP AGORA</span>
                </a>
              </div>
            </div>

            {/* Right Column: Quote Request Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-[#252525] border border-white/10 rounded-lg p-6 sm:p-8 lg:p-10">
                <div className="mb-6 pb-4 border-b border-white/10">
                  <span className="font-mono-tech text-xs text-[#FF8900] uppercase">
                    Orçamento Técnico sem Custo
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white mt-1">
                    Formulário de Solicitação de Orçamento
                  </h2>
                  <p className="text-sm text-neutral-300 mt-1">
                    Preencha os campos abaixo. Ao validar os dados, sua solicitação será formatada
                    para envio imediato ao WhatsApp oficial da S.A Manutenção.
                  </p>
                </div>

                {!preparedWhatsappUrl ? (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Nome */}
                      <div>
                        <label
                          htmlFor="quote-nome"
                          className="block text-xs font-mono-tech uppercase text-neutral-300 mb-2"
                        >
                          Nome Completo <span className="text-[#FF8900]">*</span>
                        </label>
                        <input
                          id="quote-nome"
                          type="text"
                          required
                          value={formData.nome}
                          onChange={(e) => {
                            setFormData({ ...formData, nome: e.target.value });
                            if (errors.nome) setErrors({ ...errors, nome: undefined });
                          }}
                          placeholder="Seu nome"
                          className={`w-full px-4 py-3 rounded bg-[#171719] border ${
                            errors.nome ? 'border-red-500' : 'border-white/15 focus:border-[#FF8900]'
                          } text-white text-sm outline-none transition-colors`}
                        />
                        {errors.nome && (
                          <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.nome}</span>
                          </p>
                        )}
                      </div>

                      {/* Empresa (opcional) */}
                      <div>
                        <label
                          htmlFor="quote-empresa"
                          className="block text-xs font-mono-tech uppercase text-neutral-300 mb-2"
                        >
                          Nome da Empresa / Condomínio{' '}
                          <span className="text-neutral-500">(opcional)</span>
                        </label>
                        <input
                          id="quote-empresa"
                          type="text"
                          value={formData.empresa}
                          onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                          placeholder="Ex: Condomínio ou Indústria"
                          className="w-full px-4 py-3 rounded bg-[#171719] border border-white/15 focus:border-[#FF8900] text-white text-sm outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Telefone / WhatsApp */}
                      <div>
                        <label
                          htmlFor="quote-telefone"
                          className="block text-xs font-mono-tech uppercase text-neutral-300 mb-2"
                        >
                          Telefone / WhatsApp <span className="text-[#FF8900]">*</span>
                        </label>
                        <input
                          id="quote-telefone"
                          type="tel"
                          required
                          value={formData.telefone}
                          onChange={(e) => {
                            setFormData({
                              ...formData,
                              telefone: formatPhoneMask(e.target.value),
                            });
                            if (errors.telefone) setErrors({ ...errors, telefone: undefined });
                          }}
                          placeholder="(11) 99999-9999"
                          className={`w-full px-4 py-3 rounded bg-[#171719] border font-mono-tech ${
                            errors.telefone
                              ? 'border-red-500'
                              : 'border-white/15 focus:border-[#FF8900]'
                          } text-white text-sm outline-none transition-colors`}
                        />
                        {errors.telefone && (
                          <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.telefone}</span>
                          </p>
                        )}
                      </div>

                      {/* E-mail (opcional) */}
                      <div>
                        <label
                          htmlFor="quote-email"
                          className="block text-xs font-mono-tech uppercase text-neutral-300 mb-2"
                        >
                          E-mail <span className="text-neutral-500">(opcional)</span>
                        </label>
                        <input
                          id="quote-email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: undefined });
                          }}
                          placeholder="contato@empresa.com.br"
                          className={`w-full px-4 py-3 rounded bg-[#171719] border ${
                            errors.email
                              ? 'border-red-500'
                              : 'border-white/15 focus:border-[#FF8900]'
                          } text-white text-sm outline-none transition-colors`}
                        />
                        {errors.email && (
                          <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Cidade */}
                      <div>
                        <label
                          htmlFor="quote-cidade"
                          className="block text-xs font-mono-tech uppercase text-neutral-300 mb-2"
                        >
                          Cidade <span className="text-[#FF8900]">*</span>
                        </label>
                        <select
                          id="quote-cidade"
                          value={formData.cidade}
                          onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
                          className="w-full px-4 py-3 rounded bg-[#171719] border border-white/15 focus:border-[#FF8900] text-white text-sm outline-none transition-colors"
                        >
                          <option value="Salto - SP">Salto - SP</option>
                          <option value="Itu - SP">Itu - SP</option>
                          <option value="Indaiatuba - SP">Indaiatuba - SP</option>
                          <option value="Porto Feliz - SP">Porto Feliz - SP</option>
                          <option value="Sorocaba - SP">Sorocaba - SP</option>
                          <option value="Outra cidade da região">Outra cidade da região</option>
                        </select>
                      </div>

                      {/* Tipo de serviço desejado */}
                      <div>
                        <label
                          htmlFor="quote-servico"
                          className="block text-xs font-mono-tech uppercase text-neutral-300 mb-2"
                        >
                          Tipo de Serviço Desejado <span className="text-[#FF8900]">*</span>
                        </label>
                        <select
                          id="quote-servico"
                          value={formData.servico}
                          onChange={(e) => setFormData({ ...formData, servico: e.target.value })}
                          className="w-full px-4 py-3 rounded bg-[#171719] border border-white/15 focus:border-[#FF8900] text-white text-sm outline-none transition-colors"
                        >
                          {SERVICES_DATA.map((s) => (
                            <option key={s.slug} value={s.name}>
                              {s.name}
                            </option>
                          ))}
                          <option value="Pacote Integrado / Múltiplos Serviços">
                            Pacote Integrado / Múltiplos Serviços
                          </option>
                        </select>
                      </div>
                    </div>

                    {/* Descrição da necessidade */}
                    <div>
                      <label
                        htmlFor="quote-descricao"
                        className="block text-xs font-mono-tech uppercase text-neutral-300 mb-2"
                      >
                        Descrição da Necessidade <span className="text-[#FF8900]">*</span>
                      </label>
                      <textarea
                        id="quote-descricao"
                        rows={4}
                        required
                        value={formData.descricao}
                        onChange={(e) => {
                          setFormData({ ...formData, descricao: e.target.value });
                          if (errors.descricao) setErrors({ ...errors, descricao: undefined });
                        }}
                        placeholder="Descreva o serviço que precisa, tipo de imóvel (indústria, comércio, condomínio) e urgência..."
                        className={`w-full px-4 py-3 rounded bg-[#171719] border ${
                          errors.descricao
                            ? 'border-red-500'
                            : 'border-white/15 focus:border-[#FF8900]'
                        } text-white text-sm outline-none transition-colors`}
                      />
                      {errors.descricao && (
                        <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.descricao}</span>
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 px-6 bg-[#FF8900] hover:bg-[#e67a00] text-[#171719] font-display font-bold text-base uppercase tracking-wider rounded transition-colors cursor-pointer"
                    >
                      SOLICITAR ORÇAMENTO
                    </button>
                  </form>
                ) : (
                  /* Transparent WhatsApp Dispatch Panel (Does not fake backend send; provides direct verified WhatsApp link with prefilled message) */
                  <div className="bg-[#171719] border border-[#FF8900] rounded-lg p-6 space-y-5">
                    <div className="flex items-start gap-3">
                      <CheckCircle2
                        className="w-6 h-6 text-[#FF8900] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <div>
                        <h3 className="font-display text-2xl font-bold uppercase text-white">
                          Dados Validados — Envie Agora pelo WhatsApp
                        </h3>
                        <p className="text-sm text-neutral-300 mt-1">
                          Para garantir atendimento imediato sem perda de informações, clique no
                          botão abaixo para encaminhar sua solicitação diretamente ao WhatsApp da{' '}
                          <strong>S.A Manutenção ({COMPANY_INFO.phoneDisplay})</strong> com todos os
                          dados preenchidos automaticamente:
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded bg-[#252525] border border-white/10 font-mono-tech text-xs text-neutral-200 whitespace-pre-wrap leading-relaxed">
                      {preparedSummaryText}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={preparedWhatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2.5 py-4 px-6 bg-[#FF8900] hover:bg-[#e67a00] text-[#171719] font-display font-bold text-base uppercase tracking-wider rounded transition-colors text-center"
                      >
                        <MessageSquare className="w-5 h-5 fill-[#171719]" aria-hidden="true" />
                        <span>ABRIR WHATSAPP E ENVIAR SOLICITAÇÃO</span>
                      </a>

                      <button
                        type="button"
                        onClick={handleCopySummary}
                        className="inline-flex items-center justify-center gap-2 py-3.5 px-5 bg-[#252525] hover:bg-white/10 text-white border border-white/15 font-display font-bold text-sm uppercase tracking-wider rounded transition-colors cursor-pointer"
                      >
                        {copied ? (
                          <>
                            <Check className="w-4 h-4 text-[#FF8900]" />
                            <span>Copiado!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 text-[#C5A45A]" />
                            <span>Copiar Texto</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="pt-2 border-t border-white/10 flex justify-between items-center text-xs text-neutral-400">
                      <span>Deseja alterar alguma informação do pedido?</span>
                      <button
                        type="button"
                        onClick={() => setPreparedWhatsappUrl(null)}
                        className="inline-flex items-center gap-1 text-[#C5A45A] hover:text-white cursor-pointer"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Editar formulário</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
