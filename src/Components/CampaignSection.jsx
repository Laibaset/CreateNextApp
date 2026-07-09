import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Users, CheckCircle2, Heart } from 'lucide-react';
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function CampaignSection() {
  const { t } = useTranslation('CampaignSection');
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  const campaigns = [
    {
      id: 1,
      tag: t('campaigns.0.tag'),
      tagColor: "bg-rose-50 text-rose-600 border-rose-100",
      image: "/Images/gettyimages-2120554524-612x612.jpg",
      organization: t('campaigns.0.organization'),
      title: t('campaigns.0.title'),
      description: t('campaigns.0.description'),
      funded: t('campaigns.0.funded'),
      raisedLabel: t('campaigns.0.raised'),
      goalLabel: t('campaigns.0.goalPrefix'),
      cta: t('campaigns.0.cta'),
      percent: 60,
      raised: "QAR 450,000",
      goal: "QAR 750,000"
    },
    {
      id: 2,
      tag: t('campaigns.1.tag'),
      tagColor: "bg-blue-50 text-blue-600 border-blue-100",
      image: "/Images/photo-1523240795612-9a054b0db644.jpg",
      organization: t('campaigns.1.organization'),
      title: t('campaigns.1.title'),
      description: t('campaigns.1.description'),
      funded: t('campaigns.1.funded'),
      raisedLabel: t('campaigns.1.raised'),
      goalLabel: t('campaigns.1.goalPrefix'),
      cta: t('campaigns.1.cta'),
      percent: 57,
      raised: "QAR 285,000",
      goal: "QAR 500,000"
    },
    {
      id: 3,
      tag: t('campaigns.2.tag'),
      tagColor: "bg-amber-50 text-amber-600 border-amber-100",
      image: "Images/gettyimages-530930529-612x612.jpg",
      organization: t('campaigns.2.organization'),
      title: t('campaigns.2.title'),
      description: t('campaigns.2.description'),
      funded: t('campaigns.2.funded'),
      raisedLabel: t('campaigns.2.raised'),
      goalLabel: t('campaigns.2.goalPrefix'),
      cta: t('campaigns.2.cta'),
      percent: 78,
      raised: "QAR 620,000",
      goal: "QAR 800,000"
    }
  ];

  // Trigger loading animation safely when cards cross into viewport view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect(); // Fire only once
        }
      },
      { threshold: 0.15 } // Trigger when 15% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-20 px-6 font-sans text-gray-800">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Title Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={animate ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center gap-1.5 bg-[#7A1C31]/5 text-[#7A1C31] border border-[#7A1C31]/10 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide">
            <Users className="w-3.5 h-3.5" />
            <span>{t('sectionBadge')}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#3D1A22] tracking-tight">
            {t('sectionTitle')}
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            {t('sectionDescription')}
          </p>
        </motion.div>

        {/* Campaigns Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign, index) => (
            <motion.div
              key={campaign.id}
              initial={{ opacity: 0, y: 24 }}
              animate={animate ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.45, delay: index * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="bg-[#FAF6F6]/40 rounded-[1rem] border border-gray-100 overflow-hidden shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow duration-300"
            >
              {/* Card Image Wrapper */}
              <div className="relative h-56 w-full overflow-hidden bg-gray-200">
                <img 
                  src={campaign.image} 
                  alt={campaign.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                />
                <span className={`absolute top-4 left-4 border px-3 py-1 rounded-full text-xs font-bold ${campaign.tagColor} shadow-sm backdrop-blur-md`}>
                  {campaign.tag}
                </span>
                <div className="absolute top-4 right-4 bg-[#7A1C31] text-white p-1.5 rounded-full shadow-md flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 stroke-[3]" />
                </div>
              </div>

              {/* Card Body Content */}
              <div className="p-7 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold tracking-wide text-gray-400 uppercase">
                    {campaign.organization}
                  </span>
                  <h3 className="text-xl font-bold text-[#3D1A22] leading-snug">
                    {campaign.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {campaign.description}
                  </p>
                </div>

                {/* Progress Indicators & Metrics */}
                <div className="space-y-4 pt-2">
                  <div className="space-y-2">
                    <div className="flex justify-between items-end text-xs font-bold">
                      <span className="text-[#7A1C31]">{campaign.percent}{campaign.funded}</span>
                      <span className="text-[#3D1A22]">{campaign.raised}</span>
                    </div>
                    
                    {/* Progress Bar Track */}
                    <div className="w-full h-2.5 bg-gray-200/70 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#8A253B] rounded-full transition-all duration-1000 ease-out"
                        style={{ width: animate ? `${campaign.percent}%` : '0%' }}
                      />
                    </div>

                    <div className="flex justify-between text-[11px] font-semibold text-gray-400">
                      <span>{campaign.raisedLabel}</span>
                      <span>{campaign.goalLabel} {campaign.goal}</span>
                    </div>
                  </div>

                  {/* Donate Action CTA Button */}
                  <button className="w-full bg-[#7A1C31] hover:bg-[#631424] text-white font-bold py-3.5 rounded-xl transition shadow-sm active:scale-[0.99] text-sm flex items-center justify-center gap-2">
                    <Heart className="w-4 h-4 fill-white/10" />
                    <span>{campaign.cta}</span>
                  </button>

                  {/* Sandi Status Badge */}
                  <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400 font-medium pt-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#7A1C31]/70" />
                    <span>{t('statusText')}</span>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Centered Bottom Global Section Action CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={animate ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="text-center space-y-4 pt-4"
        >
          <Link to={"/campaign"}><motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="border-2 border-[#7A1C31] text-[#7A1C31] hover:bg-[#7A1C31]/5 font-bold px-8 py-3.5 rounded-xl transition text-sm shadow-sm">
            {t('bottomCta')}
          </motion.button></Link>
          <p className="text-xs font-semibold text-gray-400">
            {t('bottomNote')}
          </p>
        </motion.div>

      </div>
    </section>
  );
}