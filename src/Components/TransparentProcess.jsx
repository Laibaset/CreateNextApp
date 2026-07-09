import React from 'react';
import { useTranslation } from 'react-i18next';
import {Link} from "react-router-dom"
import { Search, CreditCard, ShieldCheck, Zap, CheckCircle2 } from 'lucide-react';

export default function TransparentProcess() {
  const { t } = useTranslation('TransparentProcess');
  return (
    <div className="bg-white text-gray-800 font-sans selection:bg-[#7A1C31] selection:text-white">
      
      {/* SECTION 1: How Your Donation Makes an Impact */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16 text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-1.5 bg-[#7A1C31]/5 text-[#7A1C31] border border-[#7A1C31]/10 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-6">
          <Zap className="w-3.5 h-3.5 fill-[#7A1C31]/10" />
          <span>{t('badge')}</span>
        </div>

        {/* Heading & Subtitle */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#3D1A22] tracking-tight mb-4">
          {t('heading')}
        </h2>
        <p className="text-gray-500 max-w-3xl mx-auto text-base md:text-lg leading-relaxed mb-16">
          {t('description')}
        </p>

        {/* 3-Step Process Flow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center group">
            <div className="relative mb-6">
              {/* Badge Step Number */}
              <span className="absolute -top-2 -left-2 bg-white border-2 border-[#7A1C31] text-[#7A1C31] text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shadow-sm z-10">
                1
              </span>
              <div className="w-20 h-20 bg-[#6b1224] text-white rounded-[1.5rem] flex items-center justify-center shadow-md transform transition-transform group-hover:scale-105 duration-300">
                <Search className="w-8 h-8 stroke-[2]" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#3D1A22] mb-3">{t('steps.0.title')}</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              {t('steps.0.description')}
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center group">
            <div className="relative mb-6">
              <span className="absolute -top-2 -left-2 bg-white border-2 border-[#3D261C] text-[#3D261C] text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shadow-sm z-10">
                2
              </span>
              <div className="w-20 h-20 bg-[#3D261C] text-white rounded-[1.5rem] flex items-center justify-center shadow-md transform transition-transform group-hover:scale-105 duration-300">
                <CreditCard className="w-8 h-8 stroke-[2]" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#3D1A22] mb-3">{t('steps.1.title')}</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              {t('steps.1.description')}
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center group">
            <div className="relative mb-6">
              <span className="absolute -top-2 -left-2 bg-white border-2 border-[#7A1C31] text-[#7A1C31] text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shadow-sm z-10">
                3
              </span>
              <div className="w-20 h-20 bg-[#6b1224] text-white rounded-[1.5rem] flex items-center justify-center shadow-md transform transition-transform group-hover:scale-105 duration-300">
                <ShieldCheck className="w-8 h-8 stroke-[2]" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#3D1A22] mb-3">{t('steps.2.title')}</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              {t('steps.2.description')}
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 2: Complete Transparency Card Block */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-[#FAF6F6] border border-gray-300 rounded-[2.5rem] p-8 md:p-14 grid grid-cols-1 shadow-2xl lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Detail Grid Column */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#3D1A22] tracking-tight">
              {t('sectionTitle')}
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              {t('sectionDescription')}
            </p>

            {/* Checklist items */}
            <ul className="space-y-4 pt-2">
              <li className="flex items-start gap-3 text-sm font-medium text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-[#7A1C31] fill-[#7A1C31]/10 shrink-0 mt-0.5" />
                <span>{t('checklist.0')}</span>
              </li>
              <li className="flex items-start gap-3 text-sm font-medium text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-[#7A1C31] fill-[#7A1C31]/10 shrink-0 mt-0.5" />
                <span>{t('checklist.1')}</span>
              </li>
              <li className="flex items-start gap-3 text-sm font-medium text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-[#7A1C31] fill-[#7A1C31]/10 shrink-0 mt-0.5" />
                <span>{t('checklist.2')}</span>
              </li>
              <li className="flex items-start gap-3 text-sm font-medium text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-[#7A1C31] fill-[#7A1C31]/10 shrink-0 mt-0.5" />
                <span>{t('checklist.3')}</span>
              </li>
            </ul>
          </div>

          {/* Right Solid Percentage Block Column */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-sm aspect-[4/3] bg-gradient-to-br from-[#7A1C31] to-[#51101E] rounded-[2rem] p-8 flex flex-col items-center justify-center text-center text-white shadow-xl">
              <span className="text-5xl md:text-6xl font-black tracking-tight mb-3">{t('metricValue')}</span>
              <h4 className="text-base md:text-lg font-bold max-w-[200px] leading-snug mb-2">
                {t('metricTitle')}
              </h4>
              <p className="text-white/70 text-xs font-medium">
                {t('metricSubtitle')}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: Bottom Action Call CTA Banner */}
      <section className="max-w-7xl mx-auto px-6 pt-6 pb-20 text-center space-y-4">
        <Link to={"/contact"}><button className="bg-[#7A1C31] text-white hover:bg-[#631424] font-bold px-10 py-4 rounded-xl transition-all shadow-md hover:shadow-lg text-base active:scale-98">
          {t('cta')}
        </button></Link>
        <p className="text-xs font-medium text-gray-400">
          {t('footerNote')}
        </p>
      </section>

    </div>
  );
}