"use client"
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HelpCircle, ChevronDown } from 'lucide-react';

export default function FaqSection() {
  const { t, i18n } = useTranslation('FaqSection');
  const [activeTab, setActiveTab] = useState(t('tabs.generalQuestions'));
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    setActiveTab(t('tabs.generalQuestions'));
    setOpenFaqIndex(null);
  }, [i18n.language, t]);

  const tabs = [
    { id: t('tabs.generalQuestions'), label: t('tabs.generalQuestions'), emoji: '📋' },
    { id: t('tabs.forDonors'), label: t('tabs.forDonors'), emoji: '🙌' },
    { id: t('tabs.forCharities'), label: t('tabs.forCharities'), emoji: '🏛️' },
    { id: t('tabs.technicalSupport'), label: t('tabs.technicalSupport'), emoji: '🔧' },
  ];

  const faqData = {
    [t('tabs.generalQuestions')]: t('faqs.generalQuestions', { returnObjects: true }),
    [t('tabs.forDonors')]: t('faqs.forDonors', { returnObjects: true }),
    [t('tabs.forCharities')]: t('faqs.forCharities', { returnObjects: true }),
    [t('tabs.technicalSupport')]: t('faqs.technicalSupport', { returnObjects: true })
  };

  const currentFaqs = faqData[activeTab] || [];

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setOpenFaqIndex(null); // Reset accordion on filter switch
  };

  return (
    <div className="bg-white font-sans text-gray-800 selection:bg-[#7A1C31] selection:text-white">
      
      {/* FAQ MAIN SECTION AREA */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-16 space-y-16">
        
        {/* Header Block Elements */}
        <div className="text-center space-y-5">
          <div className="w-14 h-14 bg-[#7A1C31] text-white rounded-full flex items-center justify-center mx-auto shadow-sm">
            <HelpCircle className="w-7 h-7 stroke-[2]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-[#111E2E] tracking-tight">
            {t('sectionTitle')}
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg font-medium leading-relaxed">
            {t('sectionDescription')}
          </p>
        </div>

        {/* Dynamic Category Navigation Switcher Row */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 max-w-5xl mx-auto bg-[#FAF6F6]/40 p-2 rounded-[2rem]">
          {tabs.map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`flex items-center gap-2.5 px-6 py-4 rounded-2xl text-sm font-semibold transition-all duration-200 ${
                  isSelected
                    ? "bg-[#7A1C31] text-white shadow-md shadow-[#7A1C31]/10 scale-[1.02]"
                    : "bg-white border border-gray-100 text-gray-600 hover:bg-gray-50/80 hover:border-gray-200"
                }`}
              >
                <span className="text-base select-none">{tab.emoji}</span>
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Accordion List Component Mount View */}
        <div className="max-w-4xl mx-auto bg-white border border-gray-100 rounded-[2.5rem] p-4 md:p-8 shadow-sm space-y-3 min-h-[280px]">
          {currentFaqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div 
                key={index}
                className={`border-b border-gray-100 last:border-0 overflow-hidden transition-all duration-200 rounded-2xl ${
                  isOpen ? "bg-[#FAF6F6]/20" : "bg-transparent"
                }`}
              >
                {/* Accordion Interactive Trigger Header Row */}
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between text-left px-6 py-5 group"
                >
                  <span className={`font-black text-base md:text-lg transition-colors tracking-tight ${
                    isOpen ? "text-[#7A1C31]" : "text-[#111E2E] group-hover:text-[#7A1C31]"
                  }`}>
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-200 ${
                    isOpen 
                      ? "rotate-180 bg-[#7A1C31] text-white border-[#7A1C31]" 
                      : "bg-gray-50 text-gray-500 border-gray-100"
                  }`}>
                    <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>

                {/* Smooth Expandable Context Viewport Container */}
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[500px] opacity-100 pb-6 px-6" : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium max-w-3xl">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </section>

      {/* FOOTER CALLOUT AREA: Still Have Questions Banner Card */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-gradient-to-br from-[#7A1C31] to-[#591221] rounded-[2.5rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-lg">
          
          {/* Subtle Decorative UI Corners backgrounds */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[5rem] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-tr-[4rem] pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <h3 className="text-3xl md:text-4xl font-black tracking-tight">
              {t('calloutTitle')}
            </h3>
            <p className="text-white/80 text-sm md:text-base leading-relaxed font-medium">
              {t('calloutDescription')}
            </p>
            <div className="pt-2">
             <Link to={"/contact"}> <button className="bg-white hover:bg-gray-50 text-[#7A1C31] font-black px-8 py-4 rounded-xl text-sm transition-all shadow-sm active:scale-[0.99]">
                {t('calloutButton')}
              </button></Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}