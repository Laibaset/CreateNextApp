import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { 
  Heart, DollarSign, Target, Truck, Award, Shield, 
  CheckCircle, Globe, Building, Briefcase, CreditCard, 
  QrCode, Wallet, Video, ArrowRight, Landmark 
} from 'lucide-react';

export default function DonorPage() {
  const { t } = useTranslation('Webdonor');
  // Pure React Auto-advancing Hero Carousel (Swiper substitute)
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: "Images/photo-1532629345422-7515f3d16bb6.jpg",
      tag: t('slide1Tag'),
      title: t('slide1Title'),
      description: t('slide1Desc')
    },
    {
      image:"Images/photo-1509099836639-18ba1795216d.jpg",
      tag: t('slide2Tag'),
      title: t('slide2Title'),
      description: t('slide2Desc')
    },
    {
      image: "Images/photo-1500530855697-b586d89ba3ee (1).jpg",
      tag: t('slide3Tag'),
      title: t('slide3Title'),
      description: t('slide3Desc')
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="bg-[#fcfbfc] min-h-screen font-sans antialiased text-gray-800">

      {/* --- HERO SECTION (Smooth Auto-Swiper) --- */}
      <section className="relative h-[100vh] w-full overflow-hidden bg-black">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-[#310c17] transform scale-105 transition-transform duration-[5000ms] ease-linear"
              style={{ backgroundImage: `url('${slide.image}')` }}
            />
            {/* Color multi-layered overlay */}
            <div className="absolute inset-0 bg-[#8a1538] opacity-35 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 opacity-60"></div>
            
            {/* Decorative Content Circles */}
            <div className="absolute top-1/4 left-16 w-24 h-24 rounded-full border border-white opacity-10 hidden sm:block"></div>
            <div className="absolute bottom-1/4 right-20 w-20 h-20 rounded-full border border-white opacity-10 hidden sm:block"></div>

            {/* Slider Content */}
            <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
              <div className="max-w-4xl mx-auto flex flex-col items-center">
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-white/20 backdrop-blur-md text-white rounded-full text-xs font-medium tracking-wide uppercase mb-6 border border-white/20">
                  <Heart className="w-3.5 h-3.5 fill-white" /> {slide.tag}
                </span>
                <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-sm max-w-3xl">
                  {slide.title}
                </h1>
                <p className="text-base sm:text-xl text-gray-100 font-light max-w-2xl leading-relaxed mb-10">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
                  <Link to="/contact">
                    <button className="w-full sm:w-auto px-8 py-3.5 bg-[#8a1538] hover:bg-[#70102d] text-white rounded-xl font-medium transition shadow-lg flex items-center justify-center gap-2">
                      {t('donateNowBtn')} <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                  <Link to="/about">
                    <button className="w-full sm:w-auto px-8 py-3.5 bg-white/10 backdrop-blur-md border-2 border-white/40 hover:bg-white hover:text-black text-white rounded-xl font-medium transition">
                      {t('aboutUsBtn')}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* --- CORPORATE SPONSORSHIP --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">{t('sponsorshipTitle')}</h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base mb-12 leading-relaxed">
          {t('sponsorshipDesc')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition text-center flex flex-col items-center">
            <div className="w-14 h-14 bg-[#8a1538]/10 rounded-2xl flex items-center justify-center text-[#8a1538] mb-6">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">{t('sponsorCard1Title')}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {t('sponsorCard1Desc')}
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition text-center flex flex-col items-center">
            <div className="w-14 h-14 bg-[#8a1538]/10 rounded-2xl flex items-center justify-center text-[#8a1538] mb-6">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">{t('sponsorCard2Title')}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {t('sponsorCard2Desc')}
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition text-center flex flex-col items-center">
            <div className="w-14 h-14 bg-[#8a1538]/10 rounded-2xl flex items-center justify-center text-[#8a1538] mb-6">
              <Building className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">{t('sponsorCard3Title')}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {t('sponsorCard3Desc')}
            </p>
          </div>
        </div>

        <button className="px-6 py-3 bg-[#8a1538] hover:bg-[#6b102b] text-white rounded-full font-medium transition shadow-sm">
          {t('becomePartnerBtn')}
        </button>
      </section>

      {/* --- CHOOSE A PAYMENT METHOD (Fixed Background Parallax) --- */}
      <section className="relative py-24 bg-transparent overflow-hidden">
        {/* Parallax Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed z-0"
          style={{ 
            backgroundImage: "url(Images/photo-1532629345422-7515f3d16bb6.jpg)" 
          }}
        />
        <div className="absolute inset-0 bg-[#8a1538]/85 mix-blend-multiply z-0"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <span className="text-xs font-semibold tracking-wider uppercase border-b border-white/40 pb-1 opacity-90">{t('paymentBadge')}</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-4 mb-12">{t('paymentTitle')}</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { title: t('payment1Title'), desc: t('payment1Desc'), icon: <CreditCard className="w-6 h-6" /> },
              { title: t('payment2Title'), desc: t('payment2Desc'), icon: <Landmark className="w-6 h-6" /> },
              { title: t('payment3Title'), desc: t('payment3Desc'), icon: <QrCode className="w-6 h-6" /> },
              { title: t('payment4Title'), desc: t('payment4Desc'), icon: <Wallet className="w-6 h-6" /> },
            ].map((method, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 text-gray-800 shadow-xl flex flex-col items-center text-center justify-between min-h-[250px]">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-[#8a1538]/10 text-[#8a1538] rounded-xl flex items-center justify-center mb-4">
                    {method.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed px-2">{method.desc}</p>
                </div>
                <Link to="/contact">
                  <button className="mt-4 w-full px-2 py-2 bg-[#8a1538] hover:bg-[#6b102b] text-white text-xs font-medium rounded-lg transition">
                    {t('donateBtn')}
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ACTIVE CAMPAIGNS GRID --- */}
      <section id="campaigns" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">{t('activeCampaignsTitle')}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { t: t('camp1Title'), d: t('camp1Desc'), r: t('camp1Raised'), g: t('camp1Goal'), p: t('camp1Percent'), img: 'Images/photo-1652858672796-960164bd632b.jpg' },
            { t: t('camp2Title'), d: t('camp2Desc'), r: t('camp2Raised'), g: t('camp2Goal'), p: t('camp2Percent'), img: 'Images/istockphoto-2171791945-612x612.webp' },
            { t: t('camp3Title'), d: t('camp3Desc'), r: t('camp3Raised'), g: t('camp3Goal'), p: t('camp3Percent'), img: 'Images/photo-1593113616828-6f22bca04804.jpg' },
            { t: t('camp4Title'), d: t('camp4Desc'), r: t('camp4Raised'), g: t('camp4Goal'), p: t('camp4Percent'), img: 'Images/photo-1593113598332-cd288d649433.jpg' },
            { t: t('camp5Title'), d: t('camp5Desc'), r: t('camp5Raised'), g: t('camp5Goal'), p: t('camp5Percent'), img: 'Images/istockphoto-2171791945-612x612.webp' },
            { t: t('camp6Title'), d: t('camp6Desc'), r: t('camp6Raised'), g: t('camp6Goal'), p: t('camp6Percent'), img: 'Images/photo-1643321613219-6d50e1372c0a.jpg' },
          ].map((camp, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition flex flex-col justify-between">
              <div>
                <img src={camp.img} alt={camp.t} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{camp.t}</h3>
                  <p className="text-gray-500 text-xs mb-4 leading-relaxed">{camp.d}</p>
                  
                  {/* Custom Progress Bar */}
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mb-3">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: camp.p }}></div>
                  </div>
                  
                  <div className="flex justify-between text-xs text-gray-500 font-medium">
                    <span>{t('raisedLabel')} <span className="text-gray-900 font-bold">{camp.r}</span></span>
                    <span>{t('targetLabel')} <span className="text-gray-900 font-bold">{camp.g}</span></span>
                  </div>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2">
                
                <Link to="/contact">
                  <button className="w-full  py-2.5 bg-[#8a1538] hover:bg-[#6b102b] text-white font-medium text-sm rounded-xl transition">
                    {t('donateNowBtn')}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- HOW IT WORKS (What Happens with Donation) --- */}
      <section className="bg-white py-20 border-t border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-pink-50 text-[#8a1538] rounded-full text-xs font-semibold mb-3">
            <Heart className="w-3 h-3 fill-[#8a1538]" /> {t('processBadge')}
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">{t('processTitle')}</h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto mb-14">
            {t('processDesc')}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { num: '1', title: t('process1Title'), desc: t('process1Desc'), icon: <DollarSign className="w-5 h-5" /> },
              { num: '2', title: t('process2Title'), desc: t('process2Desc'), icon: <Target className="w-5 h-5" /> },
              { num: '3', title: t('process3Title'), desc: t('process3Desc'), icon: <Truck className="w-5 h-5" /> },
              { num: '4', title: t('process4Title'), desc: t('process4Desc'), icon: <Award className="w-5 h-5" /> },
            ].map((step, idx) => (
              <div key={idx} className="bg-[#fcfbfc] p-6 rounded-2xl border border-gray-100 flex flex-col items-center relative text-center">
                <div className="w-12 h-12 bg-[#8a1538] text-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                  {step.icon}
                </div>
                <span className="w-6 h-6 bg-pink-100 text-[#8a1538] text-xs font-bold rounded-full flex items-center justify-center mb-3">
                  {step.num}
                </span>
                <h3 className="font-bold text-gray-900 mb-1.5 text-sm">{step.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WITNESS THE DIFFERENCE (Videos) --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-pink-50 text-[#8a1538] rounded-full text-xs font-semibold mb-3">
          <Video className="w-3 h-3" /> {t('videosBadge')}
        </span>
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">{t('videosTitle')}</h2>
        <p className="text-gray-500 text-sm max-w-xl mx-auto mb-12">
          {t('videosDesc')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            'Images/photo-1652858672796-960164bd632b.jpg',
            'Images/istockphoto-2171791945-612x612.webp',
            'Images/photo-1593113616828-6f22bca04804.jpg'
          ].map((vimg, vidx) => (
            <div key={vidx} className="relative aspect-video bg-gray-200 rounded-2xl overflow-hidden group shadow-sm">
              <img src={vimg} alt="Video cover" className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <button className="w-14 h-14 bg-[#8a1538] text-white rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition">
                  <Video className="w-6 h-6 fill-white" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- WHY CHOOSE US? --- */}
      <section className="bg-gray-50/60 py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-pink-50 text-[#8a1538] rounded-full text-xs font-semibold mb-3">
            <CheckCircle className="w-3 h-3" /> {t('whyBadge')}
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-12">{t('whyTitle')}</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: t('why1Title'), d: t('why1Desc'), icon: <Globe className="w-6 h-6" /> },
              { t: t('why2Title'), d: t('why2Desc'), icon: <Award className="w-6 h-6" /> },
              { t: t('why3Title'), d: t('why3Desc'), icon: <Shield className="w-6 h-6" /> },
              { t: t('why4Title'), d: t('why4Desc'), icon: <CheckCircle className="w-6 h-6" /> },
            ].map((box, bidx) => (
              <div key={bidx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center flex flex-col items-center">
                <div className="w-12 h-12 bg-[#8a1538]/5 text-[#8a1538] rounded-xl flex items-center justify-center mb-4">
                  {box.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{box.t}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{box.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- READY TO MAKE A DIFFERENCE CTA BANNER --- */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-pink-50 text-[#8a1538] rounded-full">
              <Heart className="w-6 h-6 fill-[#8a1538]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">{t('ctaBannerTitle')}</h3>
              <p className="text-xs text-gray-500">{t('ctaBannerDesc')}</p>
            </div>
          </div>
          <Link to="/contact">
            <button className="px-6 py-3 bg-[#8a1538] hover:bg-[#6b102b] text-white font-medium text-sm rounded-xl transition shadow flex items-center gap-2">
              {t('donateNowBtn')} <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
}