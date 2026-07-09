import React from 'react';
import { Heart } from 'lucide-react';
import { motion } from "motion/react"
import { useTranslation } from 'react-i18next';
import HeroSwiper from '../Components/Swiper';

export default function HeroSection() {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ur';

  return (
    <section dir={isRTL ? 'rtl' : 'ltr'} className="relative min-h-screen w-full bg-[#7A1C31] text-white font-sans selection:bg-white selection:text-[#7A1C31] overflow-hidden">
      <style>{`
        @keyframes subtlePulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.06); }
        }
        .animate-subtle-zoom {
          animation: subtlePulse 4s ease-in-out infinite;
        }
      `}</style>

      {/* Layer 1: Swiper. On mobile it's normal in-flow (grows with content). At lg+ it becomes a full-bleed absolute background layer. */}
      <div className="relative pt-20 lg:absolute lg:inset-0 z-0  lg:min-h-0">
        <HeroSwiper />
      </div>

      {/* Layer 2: Fixed image, only rendered at lg+, sits above the swiper on the right half, never affected by slide changes */}
     <motion.div
  className={`hidden lg:flex absolute inset-y-0 ${isRTL ? 'left-0' : 'right-0'} w-1/2 items-center justify-center px-10 pointer-events-none z-20`}
  initial={{ x: isRTL ? -150 : 150, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{
    duration: 0.8,
    ease: "easeOut",
  }}
>
  <div className="relative w-full max-w-lg aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl pointer-events-auto">
    <img
      src="./Images/photo-1562709902-31c9a3b1ad5c.jpg"
      alt="Hands sharing food"
      className="w-full h-full object-cover grayscale-[20%] brightness-90"
    />
    <div className="absolute inset-0 flex items-center justify-center bg-black/5">
      <div className="absolute w-56 h-56 rounded-full border border-white/20 animate-subtle-zoom" />
      <div className="absolute w-40 h-40 rounded-full border border-white/30" />
      <div className="absolute w-28 h-28 rounded-full border border-white/40" />
      <div className="z-10 bg-[#A62B43] p-5 rounded-full shadow-xl animate-subtle-zoom">
        <Heart className="w-8 h-8 text-white fill-white" />
      </div>
    </div>
  </div>
</motion.div>
    </section>
  );
}