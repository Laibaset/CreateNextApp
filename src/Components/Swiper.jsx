import React, { useMemo, useRef } from 'react';
import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import SupportFormModal from './SupportFormModal';

import { Swiper, SwiperSlide } from 'swiper/react';
import { CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

export default function HeroSwiper() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const { t, i18n } = useTranslation('WebNavbar');
  const isRTL = i18n.language === 'ur';

  const [showForm, setShowForm] = useState(false);

  const slidesData = useMemo(() => [
    {
      badge: t('heroSlide1Badge'),
      title: <>{t('heroSlide1TitleLine1')} <br className="hidden sm:inline" /> {t('heroSlide1TitleLine2')}</>,
      description: t('heroSlide1Description'),
      btnPrimary: t('heroSlide1BtnPrimary'),
      btnSecondary: t('heroSlide1BtnSecondary'),
      trustItems: [t('heroSlide1TrustItem1'), t('heroSlide1TrustItem2'), t('heroSlide1TrustItem3')]
    },
    {
      badge: t('heroSlide2Badge'),
      title: <>{t('heroSlide2TitleLine1')} <br className="hidden sm:inline" /> {t('heroSlide2TitleLine2')}</>,
      description: t('heroSlide2Description'),
      btnPrimary: t('heroSlide2BtnPrimary'),
      btnSecondary: t('heroSlide2BtnSecondary'),
      trustItems: [t('heroSlide2TrustItem1'), t('heroSlide2TrustItem2'), t('heroSlide2TrustItem3')]
    },
    {
      badge: t('heroSlide3Badge'),
      title: <>{t('heroSlide3TitleLine1')} {t('heroSlide3TitleLine2')}</>,
      description: t('heroSlide3Description'),
      btnPrimary: t('heroSlide3BtnPrimary'),
      btnSecondary: t('heroSlide3BtnSecondary'),
      trustItems: [t('heroSlide3TrustItem1'), t('heroSlide3TrustItem2'), t('heroSlide3TrustItem3')]
    }
  ], [t, i18n.language]);

  const SlideContent = ({ badge, title, description, btnPrimary, btnSecondary, trustItems }) => (

    <div className={`max-w-xl space-y-8 px-6 ${isRTL ? 'text-right lg:pr-16 lg:pl-6' : 'text-left lg:pl-16 lg:pr-6'}`}>
      <div className="slide-anim-badge inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm backdrop-blur-sm">
        <CheckCircle className="w-4 h-4 text-white" />
        <span>{badge}</span>
      </div>

      <h1 className="slide-anim-title text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
        {title}
      </h1>

      <p className="slide-anim-desc text-lg text-gray-200/90 leading-relaxed">
        {description}
      </p>

      <div className={`slide-anim-buttons flex flex-wrap gap-4 pt-2 ${isRTL ? 'justify-end' : 'justify-start'}`}>
        <Link to="/campaign">
          <button className="bg-white text-[#7A1C31] hover:bg-gray-100 font-bold px-8 py-4 rounded-xl transition shadow-lg text-base">
            {btnPrimary}
          </button>
        </Link>
        <button
          onClick={() => setShowForm(true)}
          className="border-2 border-white hover:bg-white/10 font-bold px-8 py-4 rounded-xl transition text-base"
        >
          {btnSecondary}
        </button>

        <SupportFormModal isOpen={showForm} onClose={() => setShowForm(false)} />
      </div>

      <div className={`slide-anim-trust pt-5 flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm text-gray-200 ${isRTL ? 'justify-end' : 'justify-start'}`}>
        {trustItems.map((text, i) => (
          <div key={i} className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-white/80" />
            <span>{text}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="relative w-full h-full">
      <style>{`
        .heroSwiperPagination {
          position: static !important;
          width: auto !important;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .heroSwiperPagination .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.4) !important;
          opacity: 1 !important;
          width: 10px !important;
          height: 10px !important;
          border-radius: 9999px !important;
          margin: 0 !important;
          transition: all 0.3s ease;
          margin-right: 8px !important;
        }
        .heroSwiperPagination .swiper-pagination-bullet-active {
          background: #ffffff !important;
          width: 10px !important;
          height: 10px !important;
          transform: scale(1.2);
        }

        /* Soft fade-up entrance, staggered per element, replayed each time a slide becomes active */
        .slide-anim-badge,
        .slide-anim-title,
        .slide-anim-desc,
        .slide-anim-buttons,
        .slide-anim-trust {
          opacity: 1;
          transform: none;
        }

        .swiper-slide-active .slide-anim-badge {
          animation: softFadeUp 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
          animation-delay: 0.15s;
        }
        .swiper-slide-active .slide-anim-title {
          animation: softFadeUp 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
          animation-delay: 0.3s;
        }
        .swiper-slide-active .slide-anim-desc {
          animation: softFadeUp 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
          animation-delay: 0.45s;
        }
        .swiper-slide-active .slide-anim-buttons {
          animation: softFadeUp 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
          animation-delay: 0.6s;
        }
        .swiper-slide-active .slide-anim-trust {
          animation: softFadeUp 0.8s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
          animation-delay: 0.75s;
        }

        @keyframes softFadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <Swiper
        key={i18n.language}
        dir={isRTL ? 'rtl' : 'ltr'}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        pagination={{ el: '.heroSwiperPagination', clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        speed={1000}
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        className="mySwiper w-full h-[560px] sm:h-[480px] lg:h-full"
      >
        {slidesData.map((slide, idx) => (
          <SwiperSlide key={idx} className="!flex !items-center h-full py-10">
            <SlideContent {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Arrows + pagination pinned to bottom-left, same padding as slide text, above the swiper track */}
      <div className="relative w-full lg:absolute bottom-0  mx-auto justify-center flex items-center gap-4 z-20">
        <button
          ref={prevRef}
          className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors shadow border border-white/10 active:scale-95"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>

        <div className="heroSwiperPagination" />

        <button
          ref={nextRef}
          className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors shadow border border-white/10 active:scale-95"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
}