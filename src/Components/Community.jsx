import React from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Check, Zap } from 'lucide-react';

export default function Community() {
  const { t } = useTranslation('Community');
  return (
    <section className="bg-[#FAF6F6] py-16 px-6 font-sans text-[#4A1521]">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#4A1521]">
            {t('sectionTitle')}
          </h2>
          <p className="text-base md:text-lg font-medium text-[#8A253B]">
            {t('sectionSubtitle')}
          </p>
        </div>

        {/* 3-Column Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Official Partnerships */}
          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <h3 className="text-xl font-bold mb-1">{t('card1Title')}</h3>
            <div className="w-12 h-[3px] bg-[#8A253B] mb-8" />
            
            <div className="flex items-center justify-center gap-6 w-full my-auto">
              <div className="flex flex-col items-center gap-3">
                <div className="w-20 h-20 bg-[#6b1224] text-white font-bold rounded-2xl flex items-center justify-center text-sm shadow-md">
                  RACA
                </div>
                <span className="text-xs font-semibold text-gray-500">{t('card1Body1Label')}</span>
              </div>
              
              <div className="h-16 w-px bg-gray-200" />
              
              <div className="flex flex-col items-center gap-3">
                <div className="w-20 h-20 bg-[#3D261C] text-white font-bold rounded-2xl flex items-center justify-center text-sm shadow-md">
                  SANDI
                </div>
                <span className="text-xs font-semibold text-gray-500">{t('card1Body2Label')}</span>
              </div>
            </div>
          </div>

          {/* Card 2: Our Impact */}
          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <h3 className="text-xl font-bold mb-1">{t('card2Title')}</h3>
            <div className="w-12 h-[3px] bg-[#8A253B] mb-8" />
            
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 w-full my-auto">
              <div>
                <span className="block text-3xl md:text-4xl font-extrabold text-[#8A253B]">42+</span>
                <span className="text-xs font-medium text-gray-500">{t('card2Stat1Label')}</span>
              </div>
              <div>
                <span className="block text-3xl md:text-4xl font-extrabold text-[#8A253B]">12.4M+</span>
                <span className="text-xs font-medium text-gray-500">{t('card2Stat2Label')}</span>
              </div>
              <div>
                <span className="block text-3xl md:text-4xl font-extrabold text-[#8A253B]">5,241+</span>
                <span className="text-xs font-medium text-gray-500">{t('card2Stat3Label')}</span>
              </div>
              <div>
                <span className="block text-3xl md:text-4xl font-extrabold text-[#8A253B]">100%</span>
                <span className="text-xs font-medium text-gray-500">{t('card2Stat4Label')}</span>
              </div>
            </div>
          </div>

          {/* Card 3: Security & Trust */}
          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center">
            <h3 className="text-xl font-bold mb-1">{t('card3Title')}</h3>
            <div className="w-12 h-[3px] bg-[#8A253B] mb-8" />
            
            <div className="grid grid-cols-2 gap-x-6 gap-y-6 w-full my-auto">
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#FAF6F6] text-[#8A253B] flex items-center justify-center border border-dashed border-[#8A253B]/30">
                  <Shield className="w-5 h-5 fill-[#8A253B]/10" />
                </div>
                <span className="text-xs font-semibold text-gray-600">{t('card3Feat1Label')}</span>
              </div>
              
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#FAF6F6] text-[#8A253B] flex items-center justify-center border border-dashed border-[#8A253B]/30">
                  <Shield className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-gray-600">{t('card3Feat2Label')}</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#FAF6F6] text-[#8A253B] flex items-center justify-center border border-dashed border-[#8A253B]/30">
                  <Zap className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-gray-600">{t('card3Feat3Label')}</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#FAF6F6] text-[#8A253B] flex items-center justify-center border border-dashed border-[#8A253B]/30">
                  <Check className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-gray-600">{t('card3Feat4Label')}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Metadata Banner Row */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-[#8A253B] text-white flex items-center justify-center">
              <Check className="w-3 h-3 stroke-[3]" />
            </div>
            <span className="font-medium">{t('footerNote')}</span>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="bg-white px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-semibold flex items-center gap-1.5 shadow-sm">
              <span className="text-gray-400 font-mono tracking-tighter">SSL</span> {t('footerBadge1')}
            </span>
            <span className="bg-white px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-semibold shadow-sm">
              {t('footerBadge2')}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}