import React, { useState, useEffect } from 'react';
import { Header, Footer, FloatingWhatsApp } from './components/LayoutChrome';
import { HomePage } from './pages/HomePage';
import { ServicesIndexPage, ServiceDetailPage } from './pages/ServicePages';
import { AboutPage, SegmentsPage, PrivacyPolicyPage } from './pages/AboutAndSegmentsPages';
import { ContactPage } from './pages/ContactPage';
import { SERVICES_DATA } from './data/siteData';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    if (path !== currentPath) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    const normalized = currentPath.replace(/\/+$/, '') || '/';

    if (normalized === '/') {
      return <HomePage onNavigate={navigate} />;
    }

    if (normalized === '/sobre') {
      return <AboutPage onNavigate={navigate} />;
    }

    if (normalized === '/servicos') {
      return <ServicesIndexPage onNavigate={navigate} />;
    }

    if (normalized.startsWith('/servicos/')) {
      const slug = normalized.replace('/servicos/', '');
      const service = SERVICES_DATA.find((s) => s.slug === slug);
      if (service) {
        return <ServiceDetailPage service={service} onNavigate={navigate} />;
      }
      return <ServicesIndexPage onNavigate={navigate} />;
    }

    if (normalized === '/segmentos') {
      return <SegmentsPage onNavigate={navigate} />;
    }

    if (normalized === '/contato') {
      return <ContactPage onNavigate={navigate} />;
    }

    if (normalized === '/politica-de-privacidade') {
      return <PrivacyPolicyPage onNavigate={navigate} />;
    }

    return <HomePage onNavigate={navigate} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#171719] text-white selection:bg-[#FF8900] selection:text-[#171719]">
      <Header currentPath={currentPath} onNavigate={navigate} />
      <main className="flex-1">{renderPage()}</main>
      <Footer currentPath={currentPath} onNavigate={navigate} />
      <FloatingWhatsApp />
    </div>
  );
}
