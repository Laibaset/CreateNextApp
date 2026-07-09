import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation('WebNavbar');

  const isRTL = i18n.language === 'ur';
  const textDir = isRTL ? 'rtl' : 'ltr';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ur' : 'en');
  };

  return (
    <nav
      dir={textDir}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 md:px-12 ${isScrolled
        ? 'bg-white text-gray-800 shadow-md'
        : 'bg-transparent text-white'
        }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo and Brand */}
        <div className="flex items-center space-x-3 cursor-pointer">
          <div className={`p-2 rounded-xl transition-colors ${isScrolled ? 'bg-[#8A1538] text-white' : 'bg-white/20'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
          </div>
          <span dir={textDir} className="font-bold text-xl tracking-wide">{t('brand', 'Qatar Charity')}</span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8 font-medium">
          <Link dir={textDir} to="/" className="hover:opacity-80 transition-opacity">{t('home', 'Home')}</Link>
          <Link dir={textDir} to="/campaign" className="hover:opacity-80 transition-opacity">{t('campaigns', 'Campaigns')}</Link>
          <Link dir={textDir} to="/about" className="hover:opacity-80 transition-opacity">{t('about', 'About')}</Link>
          <Link dir={textDir} to="/donor" className="hover:opacity-80 transition-opacity">{t('donor', 'Donor')}</Link>
          <Link dir={textDir} to="/contact" className="hover:opacity-80 transition-opacity">{t('contact', 'Contact')}</Link>
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center space-x-4 font-medium">
          <Link dir={textDir} to="/login" className="hover:opacity-80 transition-opacity px-3 py-2">{t('login', 'Log in')}</Link>
          <Link dir={textDir} to="/donate" className="bg-[#E31C5F] hover:bg-[#c2144d] text-white px-5 py-2.5 rounded-lg transition-colors">
            {t('donateNow', 'Donate Now')}
          </Link>
          <Link dir={textDir} to="/dashboard" className="bg-gradient-to-r from-[rgba(80,150,83,0.6)] to-[rgba(146,83,91,0.8)] hover:from-[rgba(70,133,73,0.9)] hover:to-[rgba(133,71,79,0.9)] text-white px-5 py-2.5 rounded-lg transition-all shadow-inner border border-white/15 backdrop-blur-md">
            {t('dashboard', 'Dashboard')}
          </Link>
          <button
            onClick={toggleLanguage}
            className={`border px-3 py-1.5 rounded text-sm uppercase transition-colors ${isScrolled ? 'border-gray-300 hover:bg-gray-100' : 'border-white/30 hover:bg-white/10'}`}
          >
            {i18n.language === 'en' ? 'UR' : 'EN'}
          </button>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none p-2"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className={`lg:hidden mt-4 rounded-xl p-4 space-y-3 shadow-lg border transition-all ${isScrolled ? 'bg-white text-gray-800 border-gray-100' : 'bg-[#70102d] text-white border-transparent'
          }`}>
          <a dir={textDir} href="/" className="block py-2 px-3 rounded hover:bg-black/5" onClick={() => setIsOpen(false)}>{t('home', 'Home')}</a>
          <a dir={textDir} href="/campaign" className="block py-2 px-3 rounded hover:bg-black/5" onClick={() => setIsOpen(false)}>{t('campaigns', 'Campaigns')}</a>
          <a dir={textDir} href="/about" className="block py-2 px-3 rounded hover:bg-black/5" onClick={() => setIsOpen(false)}>{t('about', 'About')}</a>
          <a dir={textDir} href="/donor" className="block py-2 px-3 rounded hover:bg-black/5" onClick={() => setIsOpen(false)}>{t('donor', 'Donor')}</a>
          <a dir={textDir} href="/contact" className="block py-2 px-3 rounded hover:bg-black/5" onClick={() => setIsOpen(false)}>{t('contact', 'Contact')}</a>

          <hr className="border-gray-500/30 my-2" />

          <div className="flex flex-col space-y-2 pt-2">
            <a dir={textDir} href="/login" className="text-center py-2 rounded hover:bg-black/5" onClick={() => setIsOpen(false)}>{t('login', 'Log in')}</a>
            <button dir={textDir} className="bg-[#E31C5F] text-white w-full py-2.5 rounded-lg font-medium">{t('donateNow', 'Donate Now')}</button>
            <button dir={textDir} className="bg-gradient-to-r from-[rgba(80,150,83,0.6)] to-[rgba(146,83,91,0.8)] hover:from-[rgba(70,133,73,0.9)] hover:to-[rgba(133,71,79,0.9)] text-white px-5 py-2 rounded-lg font-medium shadow-inner transition-all border border-white/15 backdrop-blur-md">
              {t('dashboard', 'Dashboard')}
            </button>
            <button
              onClick={toggleLanguage}
              className="border border-current opacity-70 w-full py-2 rounded-lg text-sm uppercase"
            >
              {i18n.language === 'en' ? 'UR' : 'EN'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;