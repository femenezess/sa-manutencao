import React, { useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { COMPANY_INFO, ServiceFAQ } from '../data/siteData';

export interface BreadcrumbItem {
  label: string;
  path: string;
}

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
  breadcrumbs?: BreadcrumbItem[];
  serviceSchema?: {
    name: string;
    description: string;
    serviceType: string;
  };
  faqs?: ServiceFAQ[];
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  path,
  breadcrumbs = [],
  serviceSchema,
  faqs = [],
}) => {
  useEffect(() => {
    document.title = title;

    const setMeta = (selector: string, attr: string, content: string) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        if (selector.startsWith('meta[name=')) {
          const name = selector.match(/meta\[name="([^"]+)"\]/)?.[1];
          if (name) el.setAttribute('name', name);
        } else if (selector.startsWith('meta[property=')) {
          const prop = selector.match(/meta\[property="([^"]+)"\]/)?.[1];
          if (prop) el.setAttribute('property', prop);
        }
        document.head.appendChild(el);
      }
      el.setAttribute(attr, content);
    };

    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://samanutencao.com.br';
    const canonicalUrl = `${origin}${path === '/' ? '' : path}`;

    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', canonicalUrl);
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // Build Schema.org JSON-LD graph
    const graph: Record<string, unknown>[] = [
      {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': `${origin}/#organization`,
        name: COMPANY_INFO.name,
        description: COMPANY_INFO.signature,
        telephone: '+55-11-95145-9102',
        url: origin,
        sameAs: [COMPANY_INFO.instagramUrl],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Salto',
          addressRegion: 'SP',
          addressCountry: 'BR',
        },
        areaServed: COMPANY_INFO.regionList.map((city) => ({
          '@type': 'City',
          name: `${city} - SP`,
        })),
      },
    ];

    if (breadcrumbs.length > 0) {
      graph.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: crumb.label,
          item: `${origin}${crumb.path === '/' ? '' : crumb.path}`,
        })),
      });
    }

    if (serviceSchema) {
      graph.push({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: serviceSchema.name,
        serviceType: serviceSchema.serviceType,
        description: serviceSchema.description,
        provider: {
          '@id': `${origin}/#organization`,
        },
        areaServed: COMPANY_INFO.regionList.map((city) => ({
          '@type': 'City',
          name: `${city} - SP`,
        })),
      });
    }

    if (faqs.length > 0) {
      graph.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      });
    }

    let scriptEl = document.getElementById('sa-schema-jsonld');
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = 'sa-schema-jsonld';
      scriptEl.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptEl);
    }
    scriptEl.textContent = JSON.stringify(graph);
  }, [title, description, path, breadcrumbs, serviceSchema, faqs]);

  return null;
};

interface BreadcrumbsNavProps {
  items: BreadcrumbItem[];
  onNavigate: (path: string) => void;
}

export const BreadcrumbsNav: React.FC<BreadcrumbsNavProps> = ({ items, onNavigate }) => {
  if (items.length <= 1) return null;

  return (
    <nav aria-label="Breadcrumb" className="py-3 border-b border-white/10 bg-[#171719]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex flex-wrap items-center gap-2 text-xs text-neutral-400">
          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <li key={item.path} className="inline-flex items-center gap-2">
                {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-neutral-600" aria-hidden="true" />}
                {isLast ? (
                  <span className="text-[#C5A45A] font-medium" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <a
                    href={item.path}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(item.path);
                    }}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};
