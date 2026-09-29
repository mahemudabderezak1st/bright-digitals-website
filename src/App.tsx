/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Share2,
  Megaphone,
  PenTool,
  Palette,
  Video,
  MessageCircle,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle2,
  Menu,
  X,
  MapPin,
  Sparkles,
  HeartHandshake,
  Wallet,
} from 'lucide-react';
import {
  PageId,
  SERVICES_DATA,
  WHY_BRIGHT_DIGITALS,
  WHO_WE_HELP,
  CONTACT_DETAILS,
  getWhatsAppUrl,
  ServiceItem,
} from './data/siteData';
import { BrandLogoMark } from './components/BrandLogo';
import { TeamSection } from './components/TeamSection';
import heroIllustrationUrl from './assets/images/hero_blue_marketing_graphic_1790586440067.jpg';
import aboutIllustrationUrl from './assets/images/about_blue_studio_graphic_1790586453226.jpg';

function renderServiceIcon(iconName: ServiceItem['iconName'], className = 'w-5 h-5') {
  switch (iconName) {
    case 'share':
      return <Share2 className={className} />;
    case 'megaphone':
      return <Megaphone className={className} />;
    case 'pen':
      return <PenTool className={className} />;
    case 'palette':
      return <Palette className={className} />;
    case 'video':
      return <Video className={className} />;
  }
}

function renderSocialIcon(platform: string, className = 'w-4 h-4') {
  switch (platform) {
    case 'Instagram':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      );
    case 'Facebook':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      );
    case 'LinkedIn':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case 'TikTok':
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
        </svg>
      );
  }
}

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedBusinessType, setSelectedBusinessType] = useState<string>('Small Businesses');
  const [heroImgError, setHeroImgError] = useState(false);
  const [aboutImgError, setAboutImgError] = useState(false);

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    service: 'Social Media Management',
    message: '',
  });
  const [formError, setFormError] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Sync URL hash with active page
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (['home', 'services', 'about', 'contact'].includes(hash)) {
        setActivePage(hash);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId, preselectedService?: string) => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
      setFormSubmitted(false);
    }
    setActivePage(page);
    setMobileMenuOpen(false);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formError) setFormError(null);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setFormError('Please enter your name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 9) {
      setFormError('Please enter a valid phone number (for example, 0975785777).');
      return;
    }
    setFormError(null);
    setFormSubmitted(true);
  };

  const activeBusinessInfo =
    WHO_WE_HELP.find((item) => item.name === selectedBusinessType) || WHO_WE_HELP[0];

  return (
    <div className="min-h-screen flex flex-col bg-[#051024] text-slate-100">
      {/* TOP BAR NAVIGATION (3-Zone Contract) */}
      <header className="sticky top-0 z-40 bg-[#051024]/95 backdrop-blur-sm border-b border-sky-400/15">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          {/* Zone 1: Brand Logo & Wordmark */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('home');
            }}
            className="inline-flex items-center gap-2.5 text-white hover:text-sky-400 transition-colors duration-150 whitespace-nowrap"
          >
            <BrandLogoMark className="w-9 h-9 shrink-0" />
            <span className="text-lg sm:text-xl tracking-wide uppercase">
              <strong className="font-bold text-white">BRIGHT</strong>{' '}
              <span className="font-medium text-sky-200">DIGITALS</span>
            </span>
          </a>

          {/* Zone 2: 4 simple nav links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {(
              [
                { id: 'home', label: 'Home' },
                { id: 'services', label: 'Services' },
                { id: 'about', label: 'About' },
                { id: 'contact', label: 'Contact' },
              ] as { id: PageId; label: string }[]
            ).map((item) => {
              const isActive = activePage === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo(item.id);
                  }}
                  className={`py-1 transition-colors duration-150 whitespace-nowrap border-b-2 ${
                    isActive
                      ? 'text-sky-400 border-sky-400'
                      : 'text-slate-300 border-transparent hover:text-white hover:border-sky-400/40'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary action on the right */}
          <div className="flex items-center gap-3">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-[#051024] bg-sky-400 hover:bg-sky-300 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0"
            >
              <span>Talk to Our Team</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="md:hidden p-2 rounded-lg text-slate-200 hover:text-white hover:bg-sky-400/10 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Simple Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0A1D3B] border-b border-sky-400/15 px-5 py-4 space-y-3">
            <div className="flex flex-col space-y-2">
              {(
                [
                  { id: 'home', label: 'Home' },
                  { id: 'services', label: 'Services' },
                  { id: 'about', label: 'About' },
                  { id: 'contact', label: 'Contact' },
                ] as { id: PageId; label: string }[]
              ).map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => navigateTo(item.id)}
                  className={`text-left py-2 text-base font-medium transition-colors ${
                    activePage === item.id ? 'text-sky-400' : 'text-slate-200 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="pt-2 border-t border-sky-400/15">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#051024] bg-sky-400 hover:bg-sky-300 rounded-lg transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Talk to Our Team</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1">
        {/* =========================================================
            HOME PAGE
        ========================================================= */}
        {activePage === 'home' && (
          <div>
            {/* 1. HERO SECTION */}
            <section className="py-14 md:py-20">
              <div className="max-w-6xl mx-auto px-5 sm:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                  {/* Left Column: Simple, direct message */}
                  <div className="lg:col-span-7">
                    <div className="flex items-center gap-2 text-xs font-medium text-sky-400 mb-4">
                      <span>Addis Ababa, Ethiopia</span>
                      <span aria-hidden="true">·</span>
                      <span>Digital Marketing Solutions</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                      Grow Your Business Online
                    </h1>

                    <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                      Bright Digitals helps small businesses in Ethiopia with affordable and
                      creative digital marketing.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <a
                        href={getWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 text-sm sm:text-base font-semibold text-[#051024] bg-sky-400 hover:bg-sky-300 rounded-lg transition-colors duration-150 whitespace-nowrap"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Talk to Our Team</span>
                      </a>

                      <button
                        type="button"
                        onClick={() => navigateTo('services')}
                        className="inline-flex items-center gap-2 px-6 py-3 text-sm sm:text-base font-medium text-white bg-[#0A1D3B] hover:bg-[#0F2952] border border-sky-400/25 rounded-lg transition-colors duration-150 whitespace-nowrap"
                      >
                        <span>Our Services</span>
                        <ArrowRight className="w-4 h-4 text-sky-400" />
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Simple digital marketing graphic in brand blues */}
                  <div className="lg:col-span-5">
                    <div className="rounded-xl overflow-hidden bg-[#0A1D3B] border border-sky-400/20 p-3">
                      <div className="aspect-video w-full rounded-lg overflow-hidden bg-[#051024] relative flex items-center justify-center">
                        {!heroImgError ? (
                          <img
                            src={heroIllustrationUrl}
                            alt="Bright Digitals simple digital marketing illustration showing social media and business growth"
                            referrerPolicy="no-referrer"
                            onError={() => setHeroImgError(true)}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="p-6 text-center flex flex-col items-center justify-center">
                            <BrandLogoMark className="w-16 h-16 mb-3" />
                            <p className="text-sm font-medium text-white">
                              Simple & Creative Digital Marketing
                            </p>
                            <p className="text-xs text-sky-300 mt-1">
                              Social Media · Ads · Content · Design · Reels
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. OUR SERVICES SECTION (5 simple cards) */}
            <section id="home-services" className="py-16 md:py-20 border-t border-sky-400/15">
              <div className="max-w-6xl mx-auto px-5 sm:px-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                      Our Services
                    </h2>
                    <p className="mt-2 text-base text-slate-300">
                      Simple marketing services designed to help local businesses get noticed.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => navigateTo('services')}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-sky-400 hover:text-sky-300 transition-colors whitespace-nowrap self-start sm:self-auto"
                  >
                    <span>See full service details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {SERVICES_DATA.map((service) => (
                    <div
                      key={service.id}
                      onClick={() => navigateTo('services', service.title)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          navigateTo('services', service.title);
                        }
                      }}
                      className="bg-[#0A1D3B] border border-sky-400/15 hover:border-sky-400/55 rounded-xl p-6 flex flex-col justify-between text-left transition-colors duration-150 cursor-pointer group"
                    >
                      <div>
                        <div className="w-10 h-10 rounded-lg bg-[#051024] border border-sky-400/25 flex items-center justify-center text-sky-400 mb-4 group-hover:bg-sky-400 group-hover:text-[#051024] transition-colors duration-150">
                          {renderServiceIcon(service.iconName, 'w-5 h-5')}
                        </div>
                        <h3 className="text-lg font-semibold text-white">
                          {service.title}
                        </h3>
                        <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
                          {service.shortDescription}
                        </p>
                      </div>

                      <div className="mt-5 pt-4 border-t border-sky-400/10 flex items-center justify-between text-xs font-medium text-slate-400 group-hover:text-sky-400 transition-colors">
                        <span>Learn more</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 3. WHY BRIGHT DIGITALS SECTION (3 simple points) */}
            <section className="py-16 md:py-20 border-t border-sky-400/15 bg-[#071630]">
              <div className="max-w-6xl mx-auto px-5 sm:px-8">
                <div className="max-w-2xl mb-10">
                  <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                    Why Bright Digitals?
                  </h2>
                  <p className="mt-2 text-base text-slate-300">
                    We keep digital marketing straightforward, friendly, and practical.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {WHY_BRIGHT_DIGITALS.map((point, index) => {
                    const icons = [
                      <Wallet key="wallet" className="w-5 h-5" />,
                      <Sparkles key="sparkles" className="w-5 h-5" />,
                      <HeartHandshake key="heart" className="w-5 h-5" />,
                    ];
                    return (
                      <div
                        key={point.title}
                        className="bg-[#0A1D3B] border border-sky-400/15 rounded-xl p-6"
                      >
                        <div className="w-10 h-10 rounded-lg bg-[#051024] border border-sky-400/25 flex items-center justify-center text-sky-400 mb-4">
                          {icons[index]}
                        </div>
                        <h3 className="text-lg font-semibold text-white">
                          {point.title}
                        </h3>
                        <p className="mt-2 text-base text-slate-300 leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* 4. WHO WE HELP SECTION (We Work With) */}
            <section className="py-16 md:py-20 border-t border-sky-400/15">
              <div className="max-w-6xl mx-auto px-5 sm:px-8">
                <div className="max-w-2xl mb-8">
                  <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                    We Work With
                  </h2>
                  <p className="mt-2 text-base text-slate-300">
                    Click any business type below to see how we help local businesses grow.
                  </p>
                </div>

                {/* 8 Simple Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                  {WHO_WE_HELP.map((item) => {
                    const isSelected = selectedBusinessType === item.name;
                    return (
                      <button
                        key={item.name}
                        type="button"
                        onClick={() => setSelectedBusinessType(item.name)}
                        className={`p-4 rounded-xl border text-left transition-colors duration-150 ${
                          isSelected
                            ? 'bg-[#0F2952] border-sky-400 text-white'
                            : 'bg-[#0A1D3B] border-sky-400/15 text-slate-200 hover:border-sky-400/40 hover:text-white'
                        }`}
                      >
                        <span className="block text-sm sm:text-base font-medium whitespace-nowrap truncate">
                          {item.name}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Simple contextual detail box for the selected business type */}
                <div className="mt-5 bg-[#0A1D3B] border border-sky-400/20 rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-medium text-sky-400">
                      <span>How we help</span>
                      <span aria-hidden="true">·</span>
                      <span>{activeBusinessInfo.name}</span>
                    </div>
                    <p className="mt-1.5 text-sm sm:text-base text-slate-200 leading-relaxed">
                      {activeBusinessInfo.howWeHelp}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => navigateTo('contact')}
                    className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#051024] bg-sky-400 hover:bg-sky-300 rounded-lg transition-colors whitespace-nowrap shrink-0 self-start sm:self-center"
                  >
                    Ask About Your Business
                  </button>
                </div>
              </div>
            </section>

            {/* 5. OUR TEAM SECTION */}
            <TeamSection />

            {/* 6. FINAL SECTION (Let's Grow Your Business) */}
            <section className="py-16 md:py-20 border-t border-sky-400/15 bg-[#071630]">
              <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
                  Let’s Grow Your Business
                </h2>
                <p className="mt-3 text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
                  Have a business and need help with marketing? Talk to Bright Digitals.
                </p>
                <div className="mt-7 flex justify-center">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 text-base font-semibold text-[#051024] bg-sky-400 hover:bg-sky-300 rounded-lg transition-colors duration-150 whitespace-nowrap"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Talk to Our Team</span>
                  </a>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* =========================================================
            SERVICES PAGE
        ========================================================= */}
        {activePage === 'services' && (
          <div>
            <section className="py-14 md:py-20">
              <div className="max-w-5xl mx-auto px-5 sm:px-8">
                <div className="max-w-2xl mb-12">
                  <div className="flex items-center gap-2 text-xs font-medium text-sky-400 mb-3">
                    <span>What We Do</span>
                    <span aria-hidden="true">·</span>
                    <span>Bright Digitals</span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                    Our Services
                  </h1>
                  <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
                    We offer five practical digital marketing services to help small businesses in
                    Addis Ababa and across Ethiopia connect with more customers.
                  </p>
                </div>

                <div className="space-y-6">
                  {SERVICES_DATA.map((service) => (
                    <div
                      key={service.id}
                      className="bg-[#0A1D3B] border border-sky-400/15 rounded-xl p-6 sm:p-8"
                    >
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                        <div className="max-w-2xl">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-lg bg-[#051024] border border-sky-400/25 flex items-center justify-center text-sky-400 shrink-0">
                              {renderServiceIcon(service.iconName, 'w-5 h-5')}
                            </div>
                            <span className="text-xs font-semibold text-sky-400">
                              {service.number}. Service
                            </span>
                          </div>

                          <h2 className="text-xl sm:text-2xl font-semibold text-white">
                            {service.title}
                          </h2>

                          <p className="mt-2.5 text-base text-slate-200 leading-relaxed">
                            {service.extendedDescription}
                          </p>

                          {/* Simple Included List */}
                          <div className="mt-5 pt-5 border-t border-sky-400/15">
                            <h3 className="text-xs font-semibold text-slate-400 mb-3">
                              What we help you with:
                            </h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                              {service.includedItems.map((item) => (
                                <li
                                  key={item}
                                  className="flex items-start gap-2 text-sm text-slate-300 leading-snug"
                                >
                                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Clean unboxed metadata with middle-dot separators */}
                          <div className="mt-5 text-xs text-slate-400">
                            <span className="text-slate-300 font-medium">Great for: </span>
                            <span>{service.bestFor}</span>
                          </div>
                        </div>

                        {/* Service Action Buttons */}
                        <div className="flex sm:flex-row md:flex-col gap-3 shrink-0 md:w-48 pt-2 md:pt-0">
                          <a
                            href={getWhatsAppUrl(
                              `Hello Bright Digitals! I would like to ask about your ${service.title} service.`
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#051024] bg-sky-400 hover:bg-sky-300 rounded-lg transition-colors whitespace-nowrap"
                          >
                            <MessageCircle className="w-4 h-4" />
                            <span>Ask on WhatsApp</span>
                          </a>

                          <button
                            type="button"
                            onClick={() => navigateTo('contact', service.title)}
                            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-200 bg-[#051024] hover:bg-[#0F2952] border border-sky-400/25 rounded-lg transition-colors whitespace-nowrap"
                          >
                            <span>Send a Message</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Bottom Call to Action */}
            <section className="py-16 border-t border-sky-400/15 bg-[#071630]">
              <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Not sure which service your business needs?
                </h2>
                <p className="mt-2.5 text-base text-slate-300 max-w-xl mx-auto">
                  Talk to our team and we will recommend a simple, affordable plan for your
                  business.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-4">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm sm:text-base font-semibold text-[#051024] bg-sky-400 hover:bg-sky-300 rounded-lg transition-colors whitespace-nowrap"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Talk to Our Team</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => navigateTo('contact')}
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm sm:text-base font-medium text-white bg-[#0A1D3B] hover:bg-[#0F2952] border border-sky-400/25 rounded-lg transition-colors whitespace-nowrap"
                  >
                    <span>Contact Page</span>
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* =========================================================
            ABOUT PAGE
        ========================================================= */}
        {activePage === 'about' && (
          <div>
            <section className="py-14 md:py-20">
              <div className="max-w-6xl mx-auto px-5 sm:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-7">
                    <div className="flex items-center gap-2 text-xs font-medium text-sky-400 mb-3">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Addis Ababa, Ethiopia</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                      About Bright Digitals
                    </h1>

                    <p className="mt-5 text-base sm:text-lg text-slate-200 leading-relaxed">
                      Bright Digitals is a digital marketing agency based in Addis Ababa, Ethiopia.
                      We help small businesses, startups, shops, restaurants, clinics, and online
                      businesses promote themselves online through affordable and creative
                      marketing.
                    </p>

                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="bg-[#0A1D3B] border border-sky-400/15 rounded-xl p-4">
                        <h3 className="text-sm font-semibold text-sky-400">Simple & Clear</h3>
                        <p className="mt-1 text-xs sm:text-sm text-slate-300 leading-relaxed">
                          No confusing jargon—just practical work that brings your business online.
                        </p>
                      </div>
                      <div className="bg-[#0A1D3B] border border-sky-400/15 rounded-xl p-4">
                        <h3 className="text-sm font-semibold text-sky-400">Friendly Team</h3>
                        <p className="mt-1 text-xs sm:text-sm text-slate-300 leading-relaxed">
                          We work closely with business owners and listen to what you need.
                        </p>
                      </div>
                      <div className="bg-[#0A1D3B] border border-sky-400/15 rounded-xl p-4">
                        <h3 className="text-sm font-semibold text-sky-400">Local Focus</h3>
                        <p className="mt-1 text-xs sm:text-sm text-slate-300 leading-relaxed">
                          Made for Ethiopian small businesses, shops, clinics, and startups.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="rounded-xl overflow-hidden bg-[#0A1D3B] border border-sky-400/20 p-3">
                      <div className="aspect-4/3 w-full rounded-lg overflow-hidden bg-[#051024] flex items-center justify-center">
                        {!aboutImgError ? (
                          <img
                            src={aboutIllustrationUrl}
                            alt="Bright Digitals creative workspace illustration in Addis Ababa"
                            referrerPolicy="no-referrer"
                            onError={() => setAboutImgError(true)}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="p-6 text-center flex flex-col items-center justify-center">
                            <BrandLogoMark className="w-16 h-16 mb-3" />
                            <p className="text-sm font-medium text-white">
                              Bright Digitals · Addis Ababa
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Show the team on the About page as requested */}
            <TeamSection />

            {/* Simple CTA */}
            <section className="py-16 border-t border-sky-400/15 bg-[#071630]">
              <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Let’s Grow Your Business
                </h2>
                <p className="mt-2.5 text-base text-slate-300">
                  Have a business and need help with marketing? Talk to Bright Digitals.
                </p>
                <div className="mt-6 flex justify-center">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm sm:text-base font-semibold text-[#051024] bg-sky-400 hover:bg-sky-300 rounded-lg transition-colors whitespace-nowrap"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Talk to Our Team</span>
                  </a>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* =========================================================
            CONTACT PAGE
        ========================================================= */}
        {activePage === 'contact' && (
          <section className="py-14 md:py-20">
            <div className="max-w-6xl mx-auto px-5 sm:px-8">
              <div className="max-w-2xl mb-10">
                <div className="flex items-center gap-2 text-xs font-medium text-sky-400 mb-3">
                  <span>Get in Touch</span>
                  <span aria-hidden="true">·</span>
                  <span>Addis Ababa, Ethiopia</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                  Contact Bright Digitals
                </h1>
                <p className="mt-2.5 text-base text-slate-300 leading-relaxed">
                  Call us, chat with us on WhatsApp, or send a quick message using the form below.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                {/* Left Column: Direct Contact Details & Social Handles */}
                <div className="lg:col-span-5 space-y-5">
                  {/* Direct Chat on WhatsApp Card */}
                  <div className="bg-[#0A1D3B] border border-sky-400/40 rounded-xl p-6">
                    <h2 className="text-lg font-semibold text-white">Quickest Way to Reach Us</h2>
                    <p className="mt-1 text-sm text-slate-300">
                      Message our team directly on WhatsApp for a fast reply.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <a
                        href={getWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#051024] bg-sky-400 hover:bg-sky-300 rounded-lg transition-colors whitespace-nowrap"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Chat on WhatsApp</span>
                      </a>
                    </div>
                  </div>

                  {/* Phone, WhatsApp, Email */}
                  <div className="bg-[#0A1D3B] border border-sky-400/15 rounded-xl p-6 space-y-5">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 mb-2">
                        <Phone className="w-4 h-4" />
                        <span>Phone</span>
                      </div>
                      <div className="space-y-1 text-base font-medium tabular-nums">
                        <div>
                          <a
                            href="tel:0975785777"
                            className="text-white hover:text-sky-400 transition-colors"
                          >
                            0975785777
                          </a>
                        </div>
                        <div>
                          <a
                            href="tel:0973073299"
                            className="text-white hover:text-sky-400 transition-colors"
                          >
                            0973073299
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-sky-400/15">
                      <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 mb-2">
                        <MessageCircle className="w-4 h-4" />
                        <span>WhatsApp</span>
                      </div>
                      <div className="space-y-1 text-base font-medium tabular-nums">
                        <div>
                          <a
                            href={getWhatsAppUrl(undefined, false)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-sky-400 transition-colors"
                          >
                            0975785777
                          </a>
                        </div>
                        <div>
                          <a
                            href={getWhatsAppUrl(undefined, true)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-sky-400 transition-colors"
                          >
                            0973073299
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-sky-400/15">
                      <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 mb-2">
                        <Mail className="w-4 h-4" />
                        <span>Email</span>
                      </div>
                      <a
                        href={`mailto:${CONTACT_DETAILS.email}`}
                        className="text-sm sm:text-base font-medium text-white hover:text-sky-400 transition-colors break-all"
                      >
                        {CONTACT_DETAILS.email}
                      </a>
                    </div>
                  </div>

                  {/* Social Media Handles */}
                  <div className="bg-[#0A1D3B] border border-sky-400/15 rounded-xl p-6">
                    <h2 className="text-sm font-semibold text-sky-400 mb-3">Social Media</h2>
                    <div className="space-y-2.5 text-sm">
                      {CONTACT_DETAILS.socials.map((social) => (
                        <div
                          key={social.platform}
                          className="flex items-center justify-between py-1.5 border-b border-sky-400/10 last:border-0"
                        >
                          <span className="text-slate-300">{social.platform}:</span>
                          <a
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-white hover:text-sky-400 transition-colors"
                          >
                            {social.handle}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Simple Contact Form */}
                <div className="lg:col-span-7">
                  <div className="bg-[#0A1D3B] border border-sky-400/15 rounded-xl p-6 sm:p-8">
                    <h2 className="text-xl font-semibold text-white">Send Us a Message</h2>
                    <p className="mt-1 text-sm text-slate-300">
                      Fill out your details below and we will get back to you shortly.
                    </p>

                    {formSubmitted ? (
                      <div className="mt-6 bg-[#051024] border border-sky-400/40 rounded-xl p-6">
                        <div className="flex items-center gap-2.5 text-sky-400 font-semibold text-base">
                          <CheckCircle2 className="w-5 h-5 shrink-0" />
                          <span>Thank you, {formData.name}! Your message is ready.</span>
                        </div>
                        <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                          We have recorded your inquiry for{' '}
                          <span className="text-white font-medium">{formData.service}</span>. For
                          an immediate response from our team, you can also send this message
                          directly on WhatsApp or by email below:
                        </p>

                        <div className="mt-5 flex flex-wrap gap-3">
                          <a
                            href={getWhatsAppUrl(
                              `Hello Bright Digitals!\nName: ${formData.name}\nBusiness: ${
                                formData.businessName || 'N/A'
                              }\nPhone: ${formData.phone}\nService: ${
                                formData.service
                              }\nMessage: ${formData.message || 'I would like to learn more.'}`
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#051024] bg-sky-400 hover:bg-sky-300 rounded-lg transition-colors whitespace-nowrap"
                          >
                            <MessageCircle className="w-4 h-4" />
                            <span>Chat on WhatsApp Now</span>
                          </a>

                          <a
                            href={`mailto:${CONTACT_DETAILS.email}?subject=${encodeURIComponent(
                              `Marketing Inquiry from ${formData.name} (${
                                formData.businessName || 'Business'
                              })`
                            )}&body=${encodeURIComponent(
                              `Name: ${formData.name}\nBusiness Name: ${formData.businessName}\nPhone: ${formData.phone}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
                            )}`}
                            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-[#0A1D3B] hover:bg-[#0F2952] border border-sky-400/25 rounded-lg transition-colors whitespace-nowrap"
                          >
                            <Mail className="w-4 h-4" />
                            <span>Send via Email App</span>
                          </a>

                          <button
                            type="button"
                            onClick={() => {
                              setFormSubmitted(false);
                              setFormData({
                                name: '',
                                businessName: '',
                                phone: '',
                                service: 'Social Media Management',
                                message: '',
                              });
                            }}
                            className="px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-white transition-colors"
                          >
                            Send Another Message
                          </button>
                        </div>
                      </div>
                    ) : (
                      <form onSubmit={handleFormSubmit} className="mt-6 space-y-4" noValidate>
                        {formError && (
                          <div
                            role="alert"
                            className="p-3.5 rounded-lg bg-red-950/60 border border-red-400/40 text-xs sm:text-sm text-red-200"
                          >
                            {formError}
                          </div>
                        )}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label
                              htmlFor="name"
                              className="block text-xs font-medium text-slate-300 mb-1.5"
                            >
                              Name *
                            </label>
                            <input
                              id="name"
                              name="name"
                              type="text"
                              required
                              value={formData.name}
                              onChange={handleFormChange}
                              placeholder="Your full name"
                              className="w-full px-3.5 py-2.5 rounded-lg bg-[#051024] border border-sky-400/20 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-400"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="businessName"
                              className="block text-xs font-medium text-slate-300 mb-1.5"
                            >
                              Business Name
                            </label>
                            <input
                              id="businessName"
                              name="businessName"
                              type="text"
                              value={formData.businessName}
                              onChange={handleFormChange}
                              placeholder="Your shop, clinic, or company"
                              className="w-full px-3.5 py-2.5 rounded-lg bg-[#051024] border border-sky-400/20 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-400"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label
                              htmlFor="phone"
                              className="block text-xs font-medium text-slate-300 mb-1.5"
                            >
                              Phone *
                            </label>
                            <input
                              id="phone"
                              name="phone"
                              type="tel"
                              required
                              value={formData.phone}
                              onChange={handleFormChange}
                              placeholder="e.g. 0975785777"
                              className="w-full px-3.5 py-2.5 rounded-lg bg-[#051024] border border-sky-400/20 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-400 tabular-nums"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="service"
                              className="block text-xs font-medium text-slate-300 mb-1.5"
                            >
                              Service
                            </label>
                            <select
                              id="service"
                              name="service"
                              value={formData.service}
                              onChange={handleFormChange}
                              className="w-full px-3.5 py-2.5 rounded-lg bg-[#051024] border border-sky-400/20 text-sm text-white focus:outline-none focus:border-sky-400"
                            >
                              {SERVICES_DATA.map((s) => (
                                <option key={s.id} value={s.title}>
                                  {s.title}
                                </option>
                              ))}
                              <option value="General Marketing Inquiry">
                                Not sure / Multiple Services
                              </option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="message"
                            className="block text-xs font-medium text-slate-300 mb-1.5"
                          >
                            Message
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            rows={4}
                            value={formData.message}
                            onChange={handleFormChange}
                            placeholder="Tell us a little about your business and how we can help..."
                            className="w-full px-3.5 py-2.5 rounded-lg bg-[#051024] border border-sky-400/20 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-400 resize-y"
                          />
                        </div>

                        <div className="pt-2 flex flex-wrap items-center gap-3">
                          <button
                            type="submit"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-[#051024] bg-sky-400 hover:bg-sky-300 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                          >
                            <span>Send Message</span>
                          </button>

                          <a
                            href={getWhatsAppUrl()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-slate-200 bg-[#051024] hover:bg-[#0F2952] border border-sky-400/25 rounded-lg transition-colors whitespace-nowrap"
                          >
                            <MessageCircle className="w-4 h-4 text-sky-400" />
                            <span>Chat on WhatsApp</span>
                          </a>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="bg-[#030B18] border-t border-sky-400/15 py-12">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            {/* 1. Bright Digitals Logo Lockup matching the uploaded brand logo */}
            <div className="flex items-center gap-3.5">
              <BrandLogoMark className="w-11 h-11 shrink-0" />
              <div>
                <span className="block text-lg tracking-wide uppercase text-white leading-none">
                  <strong className="font-bold">BRIGHT</strong>{' '}
                  <span className="font-medium text-sky-200">DIGITALS</span>
                </span>
                <span className="block text-[10px] tracking-[0.18em] uppercase text-sky-400/90 mt-1.5">
                  — Digital Marketing Solutions —
                </span>
              </div>
            </div>

            {/* 2. Quick Links: Home | Services | About | Contact */}
            <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-300">
              {(
                [
                  { id: 'home', label: 'Home' },
                  { id: 'services', label: 'Services' },
                  { id: 'about', label: 'About' },
                  { id: 'contact', label: 'Contact' },
                ] as { id: PageId; label: string }[]
              ).map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo(item.id);
                  }}
                  className="hover:text-sky-400 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* 3. WhatsApp Button */}
            <div>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#051024] bg-sky-400 hover:bg-sky-300 rounded-lg transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* 4. Social Media Icons & Copyright */}
          <div className="mt-8 pt-6 border-t border-sky-400/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex flex-wrap items-center gap-3">
              {CONTACT_DETAILS.socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[#0A1D3B] border border-sky-400/15 text-slate-200 hover:text-sky-400 hover:border-sky-400/50 transition-colors"
                  aria-label={`${social.platform} ${social.handle}`}
                  title={`${social.platform}: ${social.handle}`}
                >
                  {renderSocialIcon(social.platform, 'w-4 h-4')}
                  <span className="font-medium">{social.platform}</span>
                </a>
              ))}
            </div>

            <p className="text-slate-500">
              © {new Date().getFullYear()} Bright Digitals. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
