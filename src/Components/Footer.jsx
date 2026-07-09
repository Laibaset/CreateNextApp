import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Footer() {
  const { t } = useTranslation('Footer');
  return (
    <footer className="bg-[#111E2E] text-gray-300 font-sans pt-16 pb-8 px-6 selection:bg-[#7A1C31] selection:text-white">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Section: Branding and Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-4">
          
          {/* Brand Column (Spans 4 grid units) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              {/* Logo Box mimicking the image icon aspect */}
              <div className="w-10 h-10 bg-[#7A1C31] text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-sm">
                <span className="text-xl">QC</span>
              </div>
              <span className="text-xl font-bold text-white tracking-wide">{t('brandName')}</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
              {t('brandDescription')}
            </p>
          </div>

          {/* Quick Links Column (Spans 2 grid units) */}
          <div className="lg:col-span-2 space-y-4 lg:col-start-6">
            <h4 className="text-white text-base font-bold tracking-wide">{t('quickLinksTitle')}</h4>
            <ul className="space-y-2.5 text-sm font-medium text-gray-400">
              <li><Link to="/"><a href="#home" className="hover:text-white transition-colors">{t('links.home')}</a></Link></li>
              <li><Link to="/about"><a href="#about" className="hover:text-white transition-colors">{t('links.about')}</a></Link></li>
              <li><Link to="/campaigns"><a href="#campaigns" className="hover:text-white transition-colors">{t('links.campaigns')}</a></Link></li>
              <li><Link to="/donor"><a href="#donor" className="hover:text-white transition-colors">{t('links.donor')}</a></Link></li>
              <li><Link to="/contact"><a href="#contact" className="hover:text-white transition-colors">{t('links.contact')}</a></Link></li>
            </ul>
          </div>

          {/* Resources Column (Spans 2 grid units) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white text-base font-bold tracking-wide">{t('resourcesTitle')}</h4>
            <ul className="space-y-2.5 text-sm font-medium text-gray-400">
            <li><Link to="/" className="hover:text-white transition-colors">{t('resources.faq')}</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">{t('resources.blog')}</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">{t('resources.documentation')}</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">{t('resources.support')}</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">{t('resources.community')}</Link></li>
            </ul>
          </div>

          {/* Contact Us Column (Spans 3 grid units) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-base font-bold tracking-wide">{t('contactTitle')}</h4>
            <ul className="space-y-2.5 text-sm text-gray-400 font-medium">
              <li className="leading-snug">
                {t('addressLine1')}<br />
                {t('addressLine2')}
              </li>
              <li><a href="tel:+97444944444" className="hover:text-white transition-colors">+974 4494 4444</a></li>
              <li><a href="mailto:info@qcharity.org" className="hover:text-white transition-colors">info@qcharity.org</a></li>
            </ul>
          </div>

        </div>

        {/* Middle Section: Newsletter Form Banner */}
        <div className="border-t border-gray-800/60 pt-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-md">
            <h4 className="text-white text-xl font-bold tracking-tight">{t('newsletterTitle')}</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              {t('newsletterDescription')}
            </p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="w-full lg:max-w-xl flex items-center gap-3">
            <input 
              type="email" 
              placeholder={t('emailPlaceholder')} 
              className="w-full bg-[#1A2A3D] border border-gray-700/50 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#7A1C31] focus:ring-1 focus:ring-[#7A1C31] transition-all"
              required
            />
            <Link to="/contact">
              <button 
                type="submit" 
                className="bg-[#7A1C31] text-white font-bold px-7 py-3.5 rounded-xl hover:bg-[#631424] transition shadow-md whitespace-nowrap active:scale-98 text-sm"
              >
                {t('subscribeButton')}
              </button>
            </Link>
          </form>
        </div>

        {/* Bottom Section: Copyright & Policy Links */}
        <div className="border-t border-gray-800/60 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-gray-500">
          <div>
            {t('copyright')}
          </div>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-gray-300 transition-colors">{t('privacyPolicy')}</a>
            <a href="#terms" className="hover:text-gray-300 transition-colors">{t('termsOfService')}</a>
            <a href="#cookies" className="hover:text-gray-300 transition-colors">{t('cookiePolicy')}</a>
          </div>
        </div>

      </div>
    </footer>
  );
}