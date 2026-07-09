"use client"

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  BarChart3, 
  RefreshCw, 
  ShieldCheck, 
  Smartphone, 
  AlertTriangle, 
  FileText, 
  LayoutDashboard, 
  CreditCard 
} from 'lucide-react';

export default function PremierPlatform() {
  const { t } = useTranslation('PremierPlatform');
  const [activeTab, setActiveTab] = useState(t('tabs.allFeatures'));

  const stats = t('stats', { returnObjects: true });

  const filterTabs = [
    t('tabs.allFeatures'), t('tabs.transparency'), t('tabs.security'), t('tabs.sandi'), t('tabs.management'), t('tabs.accessibility')
  ];

  const features = [
    {
      icon: <BarChart3 className="w-6 h-6 text-[#7A1C31]" />,
      title: t('features.0.title'),
      description: t('features.0.description'),
      category: t('tabs.transparency')
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-[#7A1C31]" />,
      title: t('features.1.title'),
      description: t('features.1.description'),
      category: t('tabs.sandi')
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#7A1C31]" />,
      title: t('features.2.title'),
      description: t('features.2.description'),
      category: t('tabs.security')
    },
    {
      icon: <Smartphone className="w-6 h-6 text-[#7A1C31]" />,
      title: t('features.3.title'),
      description: t('features.3.description'),
      category: t('tabs.accessibility')
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-[#7A1C31]" />,
      title: t('features.4.title'),
      description: t('features.4.description'),
      category: t('tabs.security')
    },
    {
      icon: <FileText className="w-6 h-6 text-[#7A1C31]" />,
      title: t('features.5.title'),
      description: t('features.5.description'),
      category: t('tabs.management')
    },
    {
      icon: <LayoutDashboard className="w-6 h-6 text-[#7A1C31]" />,
      title: t('features.6.title'),
      description: t('features.6.description'),
      category: t('tabs.management')
    },
    {
      icon: <CreditCard className="w-6 h-6 text-[#7A1C31]" />,
      title: t('features.7.title'),
      description: t('features.7.description'),
      category: t('tabs.accessibility')
    }
  ];

  const testimonials = t('testimonials', { returnObjects: true });

  const filteredFeatures = activeTab === t('tabs.allFeatures') 
    ? features 
    : features.filter(f => f.category === activeTab);

  return (
    <div className="bg-[#FAF6F6]/30 font-sans text-gray-800 selection:bg-[#7A1C31] selection:text-white">
      
      {/* SECTION 1: Header & Hero Stats */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-16 text-center space-y-12">
        <div className="space-y-4">
          <span className="inline-block bg-[#7A1C31]/5 text-[#7A1C31] text-xs font-bold px-4 py-1.5 rounded-full border border-[#7A1C31]/10 tracking-wide">
            {t('badge')}
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-[#111E2E] tracking-tight max-w-5xl mx-auto leading-tight">
            {t('heading')}
          </h1>
          <p className="text-gray-500 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            {t('description')}
          </p>
        </div>

        {/* Hero Stat Row Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm flex flex-col justify-center text-center space-y-1.5 hover:shadow-md transition-shadow">
              <span className="text-4xl font-black text-[#7A1C31] tracking-tight">{stat.value}</span>
              <span className="text-gray-900 font-bold text-sm">{stat.label}</span>
              <span className="text-gray-400 text-xs font-medium">{stat.subtext}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: Platform Features Filter Tab Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-black text-[#111E2E]">{t('sectionTitle')}</h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            {t('sectionDescription')}
          </p>
        </div>

        {/* Custom Pill Navigation Bar Wrapper */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all border ${
                activeTab === tab
                  ? "bg-[#7A1C31] border-[#7A1C31] text-white shadow-sm"
                  : "bg-white border-gray-200 text-gray-600 hover:border-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Feature Blocks Layout Card Output Area */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 min-h-[340px]">
          {filteredFeatures.map((feat, idx) => (
            <div key={idx} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm flex flex-col items-center text-center space-y-4 hover:translate-y-[-2px] transition-transform duration-300">
              <div className="w-12 h-12 bg-[#FAF6F6] rounded-xl flex items-center justify-center border border-[#7A1C31]/5">
                {feat.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-black text-[#111E2E]">{feat.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed font-medium">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: What Our Users Say Stacked Block Layout */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-24 space-y-14">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-black text-[#111E2E]">{t('testimonialsTitle')}</h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            {t('testimonialsDescription')}
          </p>
        </div>

        {/* Feedback Cards Dynamic Row Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm flex flex-col justify-between space-y-6">
              <p className="text-gray-600 text-sm italic font-medium leading-relaxed">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-11 h-11 rounded-full object-cover border border-gray-100"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-black text-[#111E2E]">{t.name}</span>
                  <span className="text-xs font-bold text-[#7A1C31]/80">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Bottom Join CTA Callout */}
        <div className="pt-12 text-center space-y-6">
          <h3 className="text-2xl font-black text-[#111E2E] tracking-tight">
            {t('ctaTitle')}
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-[#7A1C31] hover:bg-[#631424] text-white font-bold px-8 py-4 rounded-xl text-sm transition shadow-sm active:scale-98">
              {t('ctaPrimary')}
            </button>
            <button className="w-full sm:w-auto border-2 border-gray-200 text-[#7A1C31] bg-white hover:bg-gray-50 font-bold px-8 py-3.5 rounded-xl text-sm transition shadow-sm active:scale-98">
              {t('ctaSecondary')}
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}