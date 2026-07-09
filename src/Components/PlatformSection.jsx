import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Users, Building2, ShieldAlert, Check, Zap } from 'lucide-react';

export default function PlatformSection() {
  const { t } = useTranslation('PlatformSection');
  const cards = [
    {
      title: t('cards.0.title'),
      description: t('cards.0.description'),
      icon: <Users className="w-6 h-6 text-[#7A1C31]" />,
      actionText: t('cards.0.actionText'),
      features: [
        t('cards.0.features.0'),
        t('cards.0.features.1'),
        t('cards.0.features.2'),
        t('cards.0.features.3')
      ]
    },
    {
      title: t('cards.1.title'),
      description: t('cards.1.description'),
      icon: <Building2 className="w-6 h-6 text-[#3D261C]" />,
      actionText: t('cards.1.actionText'),
      features: [
        t('cards.1.features.0'),
        t('cards.1.features.1'),
        t('cards.1.features.2'),
        t('cards.1.features.3')
      ]
    },
    {
      title: t('cards.2.title'),
      description: t('cards.2.description'),
      icon: <ShieldAlert className="w-6 h-6 text-[#7A1C31]" />,
      actionText: t('cards.2.actionText'),
      features: [
        t('cards.2.features.0'),
        t('cards.2.features.1'),
        t('cards.2.features.2'),
        t('cards.2.features.3')
      ]
    }
  ];

  return (
    <div className="bg-[#FAF6F6]/50 font-sans text-gray-800 selection:bg-[#7A1C31] selection:text-white">
      
      {/* SECTION 1: A Platform for Everyone Stacked Cards */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        {/* Title Block */}
        <div className="text-center space-y-4 mb-16">
          <div className="w-14 h-1 bg-[#7A1C31] mx-auto rounded-full" />
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
            {t('sectionTitle')} <span className="text-[#7A1C31]">{t('sectionTitleAccent')}</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg">
            {t('sectionDescription')}
          </p>
        </div>

        {/* 3-Column Stakeholder Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm flex flex-col justify-between relative overflow-hidden"
            >
              {/* Top Graphic Layout elements */}
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#FAF6F6] flex items-center justify-center">
                  {card.icon}
                </div>
                {/* Decorative Subtle Corner Accent Triangle from Screenshot */}
                <div className="w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-b-[16px] border-b-gray-100/70" />
              </div>

              {/* Header Texts */}
              <div className="mb-6 space-y-2">
                <h3 className="text-2xl font-black text-gray-900">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{card.description}</p>
              </div>

              <div className="w-full h-px bg-gray-100 my-2" />

              {/* Feature Checklist Mapping Rows */}
              <ul className="space-y-4 my-6 flex-1">
                {card.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed font-medium">
                    <div className="w-5 h-5 rounded-full bg-[#FAF6F6] text-[#7A1C31] flex items-center justify-center shrink-0 mt-0.5 border border-[#7A1C31]/10">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Primary Card CTA */}
            <Link to ={"/campaign"}><button className="w-full bg-[#7A1C31] hover:bg-[#631424] text-white font-bold py-4 rounded-xl transition shadow-sm active:scale-[0.99] text-sm mt-2">
                {card.actionText}
              </button></Link> 
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: Seamless Sandi Integration Grid Banner Block */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-gradient-to-br from-[#7A1C31] to-[#51101E] rounded-[2.5rem] p-8 md:p-14 text-white shadow-xl relative overflow-hidden">
          
          {/* Subtle Technical Grid Overlay Background Effect */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} 
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide">
                <Zap className="w-3.5 h-3.5 fill-white/20" />
                <span>{t('bannerBadge')}</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-black tracking-tight">
                {t('bannerTitle')}
              </h3>
              
              <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-2xl">
                {t('bannerDescription')}
              </p>

              {/* Transparent Accent Checklists */}
              <ul className="space-y-4 pt-2">
                <li className="flex items-center gap-3 text-sm font-semibold text-white/90">
                  <div className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>{t('bannerFeatures.0')}</span>
                </li>
                <li className="flex items-center gap-3 text-sm font-semibold text-white/90">
                  <div className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>{t('bannerFeatures.1')}</span>
                </li>
                <li className="flex items-center gap-3 text-sm font-semibold text-white/90">
                  <div className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>{t('bannerFeatures.2')}</span>
                </li>
              </ul>
            </div>

            {/* Right Metric Card Column */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
              <div className="w-full max-w-sm aspect-[4/3] bg-white/5 border border-white/10 rounded-[2rem] p-8 flex flex-col items-center justify-center text-center shadow-inner backdrop-blur-sm">
                <span className="text-5xl md:text-6xl font-black tracking-tight mb-2 text-white">{t('metricValue')}</span>
                <h4 className="text-base md:text-lg font-bold tracking-wide text-white mb-1">
                  {t('metricTitle')}
                </h4>
                <p className="text-white/60 text-xs font-semibold mb-6">
                  {t('metricSubtitle')}
                </p>
                
                {/* Clean Solid Loading Accent Bar from Screenshot */}
                <div className="w-full max-w-[240px] h-2 bg-white rounded-full overflow-hidden">
                  <div className="h-full w-full bg-white rounded-full animate-pulse" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}