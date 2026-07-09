import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Shield, Users, Handshake, Database, Eye, Heart, 
  ChevronLeft, ChevronRight, CheckCircle, ArrowRight 
} from 'lucide-react';

export default function AboutPage() {
  const { t } = useTranslation('AboutPage');
  // Oversight & Compliance 5-Slides Swiper State
  const [activeSlide, setActiveSlide] = useState(2); // Start with 'Sandi Sync' centered
  
  const complianceSlides = [
    {
      title: t('slideRacaTitle'),
      description: t('slideRacaDesc'),
      icon: <Shield className="w-8 h-8 text-white" />,
      bgImage: "Images/photo-1639322537228-f710d846310a.jpg"
    },
    {
      title: t('slideAuditsTitle'),
      description: t('slideAuditsDesc'),
      icon: <CheckCircle className="w-8 h-8 text-white" />,
      bgImage: "Images/WhoWeAre-Trust.jpg"
    },
    {
      title: t('slideSandiSyncTitle'),
      description: t('slideSandiSyncDesc'),
      icon: <Database className="w-8 h-8 text-white" />,
      bgImage: "Images/photo-1551288049-bebda4e38f71.jpg"
    },
    {
      title: t('slideLiveCommTitle'),
      description: t('slideLiveCommDesc'),
      icon: <Users className="w-8 h-8 text-white" />,
      bgImage: "Images/photo-1556761175-5973dc0f32e7.jpg"
    },
    {
      title: t('slideImpactTitle'),
      description: t('slideImpactDesc'),
      icon: <Eye className="w-8 h-8 text-white" />,
      bgImage: "Images/photo-1454165804606-c3d57bc86b40.jpg"
    }
  ];

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? complianceSlides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === complianceSlides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-[#fcfbfc] min-h-screen font-sans antialiased text-gray-800">

      {/* --- SECTION 1: HERO SECTION --- */}
      <section className="relative h-[100vh] w-full bg-cover bg-center flex items-center justify-center text-center px-4" 
        style={{ backgroundImage: "url(Images/photo-1509099836639-18ba1795216d.jpg)" }}>
        <div className="absolute inset-0 bg-[#8a1538]/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative z-10 max-w-4xl mx-auto text-white"
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            {t('heroTitleLine1')} <br /> {t('heroTitleLine2')}
          </h1>
          <p className="text-base sm:text-xl text-gray-100 font-light max-w-2xl mx-auto leading-relaxed mb-10">
            {t('heroSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
           <Link to="/contact"><button className="w-full sm:w-auto px-8 py-3.5 bg-[#8a1538] hover:bg-[#70102d] text-white font-medium rounded-xl transition shadow-lg">
              {t('donateNowBtn')}
            </button></Link>
            <Link to="/campaigns">
              <button className="w-full sm:w-auto px-8 py-3.5 border border-white hover:bg-white hover:text-black text-white font-medium rounded-xl transition">
                {t('viewCampaignsBtn')}
              </button>
            </Link>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto pt-6 border-t border-white/20">
            {[{ value: '250K+', label: t('statLivesImpacted') }, { value: '1,200+', label: t('statSuccessfulProjects') }, { value: '100%', label: t('statFundTraceability') }, { value: '24/7', label: t('statRegulatoryAudits') }].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.12 + index * 0.08 }}
              >
                <div className="text-2xl sm:text-4xl font-extrabold">{stat.value}</div>
                <div className="text-xs sm:text-sm opacity-80 font-light mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* --- SECTION 2: WHO WE ARE & WHAT WE DO --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          {t('whoWeAreTitlePart1')} <span className="text-[#8a1538]">{t('whoWeAreTitlePart2')}</span>
        </h2>
        <p className="text-gray-500 max-w-3xl mx-auto text-sm sm:text-base mb-16 leading-relaxed">
          {t('whoWeAreDesc')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="relative h-96 rounded-3xl overflow-hidden shadow-sm group flex flex-col justify-end p-8 text-white text-center">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(Images/WhoWeAre-Security.jpg)" }}></div>
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/65 transition-colors duration-300"></div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('card1Title')}</h3>
              <p className="text-xs text-gray-200 leading-relaxed font-light">
                {t('card1Desc')}
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="relative h-96 rounded-3xl overflow-hidden shadow-sm group flex flex-col justify-end p-8 text-white text-center">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(Images/WhoWeAre-Transparency.jpg)" }}></div>
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/65 transition-colors duration-300"></div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('card2Title')}</h3>
              <p className="text-xs text-gray-200 leading-relaxed font-light">
                {t('card2Desc')}
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="relative h-96 rounded-3xl overflow-hidden shadow-sm group flex flex-col justify-end p-8 text-white text-center">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(Images/WhoWeAre-Trust.jpg)" }}></div>
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/65 transition-colors duration-300"></div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center mb-4">
                <Handshake className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{t('card3Title')}</h3>
              <p className="text-xs text-gray-200 leading-relaxed font-light">
                {t('card3Desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: OUR MISSION BOX --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="bg-[#f5eff1] rounded-[2.5rem] p-12 sm:p-16 text-center max-w-5xl mx-auto border border-maroon/5">
          <h2 className="text-3xl font-extrabold text-[#6b102b] mb-4">{t('missionTitle')}</h2>
          <p className="text-gray-600 font-normal max-w-2xl mx-auto leading-relaxed mb-8 text-sm sm:text-base">
            {t('missionDesc')}
          </p>
          <Link to="/donor">
            <button className="px-8 py-3 bg-[#6b102b] hover:bg-[#520c21] text-white rounded-full font-medium transition shadow-sm text-sm">
              {t('learnMoreBtn')}
            </button>
          </Link>
        </div>
      </section>

      {/* --- SECTION 4: WHAT IS SANDI? --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
              {t('sandiTitlePart1')} <span className="text-[#8a1538]">{t('sandiTitlePart2')}</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 font-light">
              {t('sandiDesc')}
            </p>
            <Link to="/donor">
              <button className="px-8 py-3.5 bg-[#8a1538] hover:bg-[#70102d] text-white font-medium rounded-2xl transition shadow-sm text-sm">
                {t('learnMoreBtn')}
              </button>
            </Link>
          </div>
          <div className="relative rounded-[2rem] overflow-hidden shadow-md aspect-[4/3]">
            <img 
              src="Images/Sandi-Main.jpg" 
              alt="Children together" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* --- SECTION 5: SANDI CARDS --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { t: t('sandiCard1Title'), d: t('sandiCard1Desc'), img: 'Images/Sandi-Security.jpg', icon: <Shield className="w-6 h-6" /> },
            { t: t('sandiCard2Title'), d: t('sandiCard2Desc'), img: 'Images/Sandi-Records.jpg', icon: <Database className="w-6 h-6" /> },
            { t: t('sandiCard3Title'), d: t('sandiCard3Desc'), img: 'Images/Sandi-Collaboration.jpg', icon: <Users className="w-6 h-6" /> },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="relative h-72 rounded-[2rem] overflow-hidden shadow-sm group flex flex-col justify-end p-6 text-white"
            >
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${item.img}')` }}></div>
              <div className="absolute inset-0 bg-black/70 group-hover:bg-black/75 transition-colors duration-300"></div>
              <div className="relative z-10">
                <div className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.t}</h3>
                <p className="text-xs text-gray-300 leading-relaxed font-light">{item.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- SECTION 6: OUR VISION & MISSION --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">{t('visionMissionTitle')}</h2>
        <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto mb-14 font-light">
          {t('visionMissionSubtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          <div className="bg-white p-10 rounded-[2rem] border border-gray-100 shadow-sm text-left">
            <h3 className="text-xl font-bold text-[#8a1538] mb-4">{t('missionBoxTitle')}</h3>
            <p className="text-gray-600 text-sm sm:text-base font-light leading-relaxed">
              {t('missionBoxDesc')}
            </p>
          </div>
          <div className="bg-white p-10 rounded-[2rem] border border-gray-100 shadow-sm text-left">
            <h3 className="text-xl font-bold text-[#8a1538] mb-4">{t('visionBoxTitle')}</h3>
            <p className="text-gray-600 text-sm sm:text-base font-light leading-relaxed">
              {t('visionBoxDesc')}
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION 7: HOW IT WORKS --- */}
      <section className="bg-white py-24 border-t border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-16">{t('howItWorksTitle')}</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: t('stepDonorTitle'), desc: t('stepDonorDesc'), icon: <Users className="w-5 h-5" /> },
              { title: t('stepCharityTitle'), desc: t('stepCharityDesc'), icon: <Heart className="w-5 h-5" /> },
              { title: t('stepSandiSyncTitle'), desc: t('stepSandiSyncDesc'), icon: <Shield className="w-5 h-5" /> },
              { title: t('stepAuthorityTitle'), desc: t('stepAuthorityDesc'), icon: <Eye className="w-5 h-5" /> },
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center px-4">
                <div className="w-16 h-16 rounded-full border border-[#8a1538] flex items-center justify-center text-[#8a1538] mb-6 bg-[#fcfbfc]">
                  {step.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-base">{step.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed max-w-[200px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 8: OVERSIGHT & COMPLIANCE (5-SLIDES SWIPER) --- */}
     <section className="py-24 bg-gradient-to-b from-white to-[#fcfbfc] overflow-hidden">
  <div className="max-w-9xl mx-auto px-4 sm:px-9 lg:px-10 text-center">
    <h2 className="text-3xl font-extrabold text-gray-900 mb-14">{t('oversightTitle')}</h2>

    {/* Swiper Track Structure */}
    <div className="relative flex items-center justify-center max-w-5xl mx-auto h-[400px]">
      {/* Left Control Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-4 sm:left-10 z-30 w-12 h-12 bg-[#8a1538] text-white rounded-full flex items-center justify-center hover:bg-[#70102d] transition shadow-md"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Slider items container */}
      <div className="relative w-full h-full flex items-center justify-center">
        {complianceSlides.map((slide, idx) => {
          // Determine layout configuration spacing based on current active item index
          let position = "absolute inset-0 opacity-0 scale-75 pointer-events-none z-0 hidden";

          if (idx === activeSlide) {
            // Active center focused card item
            position = "opacity-100 scale-100 z-20 pointer-events-auto relative shadow-2xl w-[380px] sm:w-[380px]";
          } else if ((idx === activeSlide - 1) || (activeSlide === 0 && idx === complianceSlides.length - 1)) {
            // Left side preview card
            position = "opacity-40 scale-90 -translate-x-24 sm:-translate-x-44 z-10 pointer-events-none absolute hidden sm:flex w-[360px]";
          } else if ((idx === activeSlide + 1) || (activeSlide === complianceSlides.length - 1 && idx === 0)) {
            // Right side preview card
            position = "opacity-40 scale-90 translate-x-24 sm:translate-x-44 z-10 pointer-events-none absolute hidden sm:flex w-[360px]";
          }

          return (
            <div
              key={idx}
              className={`h-[340px] rounded-[2rem] overflow-hidden flex flex-col justify-center items-center p-8 text-white transition-all duration-500 ease-in-out ${position}`}
            >
              {/* Background Overlay */}
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${slide.bgImage}')` }} />
              <div className={`absolute inset-0 transition-colors duration-500 ${idx === activeSlide ? 'bg-black/55' : 'bg-black/70'}`} />

              {/* Card Body Components */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                  {slide.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 tracking-tight">{slide.title}</h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light px-2">
                  {slide.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Right Control Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-4 sm:right-10 z-30 w-12 h-12 bg-[#8a1538] text-white rounded-full flex items-center justify-center hover:bg-[#70102d] transition shadow-md"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>

    <p className="text-gray-400 text-sm mt-8 font-light tracking-wide">
      {t('oversightFooterNote')}
    </p>
  </div>
</section>

      {/* --- SECTION 9: JOIN BANNER --- */}
      <section className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center text-center px-4 overflow-hidden"
        style={{ backgroundImage: "url('Images/photo-1488521787991-ed7bbaae773c.jpg')" }}>
        {/* Monochromatic heavy red tint overlay */}
        <div className="absolute inset-0 bg-red-600 mix-blend-multiply opacity-90"></div>
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-white px-4">
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
            {t('joinTitleLine1')} <br /> {t('joinTitleLine2')}
          </h2>
          <p className="text-sm sm:text-lg text-gray-100 font-light max-w-2xl mx-auto leading-relaxed mb-10 opacity-95">
            {t('joinDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
           <Link to="/contact"><button className="w-full sm:w-auto px-8 py-3.5 bg-white text-[#8a1538] font-bold rounded-xl transition shadow-xl hover:bg-gray-50 flex items-center justify-center gap-2 text-sm">
              Donate Now
            </button></Link>
            <button className="w-full sm:w-auto px-8 py-3.5 border border-white hover:bg-white/10 text-white font-medium rounded-xl transition text-sm">
              {t('registerNowBtn')}
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}