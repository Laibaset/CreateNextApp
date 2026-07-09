import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Target, CheckCircle, Calendar,Handshake } from 'lucide-react';

export default function Campaign() {
  const { t } = useTranslation('Webcampaigns');

  // Campaign Mock Data from your screenshots
  const campaigns = [
    {
      id: 1,
      title: t('campaign1Title'),
      tag: t('campaign1Tag'),
      description: t('campaign1Desc'),
      goal: t('campaign1Goal'),
      raised: t('campaign1Raised'),
      duration: t('campaign1Duration'),
      progress: 65.0,
      image: '/Images/photo-1584515933487-779824d29309.jpg'
    },
    {
      id: 2,
      title: t('campaign2Title'),
      tag: t('campaign2Tag'),
      description: t('campaign2Desc'),
      goal: t('campaign2Goal'),
      raised: t('campaign2Raised'),
      duration: t('campaign2Duration'),
      progress: 42.0,
      image: '/Images/photo-1509062522246-3755977927d7.jpg'
    },
    {
      id: 3,
      title: t('campaign3Title'),
      tag: t('campaign3Tag'),
      description: t('campaign3Desc'),
      goal: t('campaign3Goal'),
      raised: t('campaign3Raised'),
      duration: t('campaign3Duration'),
      progress: 88.0,
      image: '/Images/photo-1501555088652-021faa106b9b.jpg'
    },
    {
      id: 4,
      title: t('campaign4Title'),
      tag: t('campaign4Tag'),
      description: t('campaign4Desc'),
      goal: t('campaign4Goal'),
      raised: t('campaign4Raised'),
      duration: t('campaign4Duration'),
      progress: 68.8,
      image: '/Images/photo-1601050690597-df0568f70950.jpg'
    },
    {
      id: 5,
      title: t('campaign5Title'),
      tag: t('campaign5Tag'),
      description: t('campaign5Desc'),
      goal: t('campaign5Goal'),
      raised: t('campaign5Raised'),
      duration: t('campaign5Duration'),
      progress: 75.0,
      image: 'Images/photo-1501004318641-b39e6451bec6.jpg'
    },
    {
      id: 6,
      title: t('campaign6Title'),
      tag: t('campaign6Tag'),
      description: t('campaign6Desc'),
      goal: t('campaign6Goal'),
      raised: t('campaign6Raised'),
      duration: t('campaign6Duration'),
      progress: 39.2,
      image: '/Images/photo-1600891964599-f61ba0e24092.jpg'
    }
  ];

  const testimonials = [
    {
      name: t('testimonial1Name'),
      role: t('testimonial1Role'),
      text: t('testimonial1Text'),
      image: 'Images/photo-1544005313-94ddf0286df2.jpg'
    },
    {
      name: t('testimonial2Name'),
      role: t('testimonial2Role'),
      text: t('testimonial2Text'),
      image: 'Images/photo-1552058544-f2b08422138a.jpg'
    },
    {
      name: t('testimonial3Name'),
      role: t('testimonial3Role'),
      text: t('testimonial3Text'),
      image: 'Images/photo-1507003211169-0a1dd7228f2d.jpg'
    }
  ];

  return (
    <div className="bg-white text-gray-800 font-sans">
      
      {/* 1. Hero Section */}
   <section className="relative bg-cover bg-center text-white py-64 px-4 text-center overflow-hidden" style={{ backgroundImage: "url('YOUR_IMAGE_URL_HERE')" }}>
  {/* Color overlay with your exact color (#6b2331) and opacity */}
  <div className="absolute inset-0 bg-[#6b2331] opacity-90 pointer-events-none"></div>
  
  {/* Simple dark background overlay mimicry */}
  <div className="absolute inset-0 opacity-20 pointer-events-none"><img src="Images/photo-1526256262350-7da7584cf5eb.jpg" alt="" /></div>
  
  <div className="relative max-w-3xl mx-auto flex flex-col items-center">
    <div className="mb-4 text-3xl">   <Handshake /></div>
    <h1 className="text-3xl sm:text-4xl font-semibold mb-3">{t('heroTitle')}</h1>
    <p className="text-sm sm:text-base text-gray-200 font-light max-w-2xl leading-relaxed">
      {t('heroSubtitle')}
    </p>
  </div>
</section>

      {/* 2. How It Works Section */}
      <section className="py-16 px-4 bg-white text-center">
        <h2 className="text-2xl font-semibold text-[#1F2937] mb-12">{t('howItWorksTitle')}</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-[#FAF9F9] p-8 rounded-2xl shadow-sm border border-gray-50 flex flex-col items-center">
            <span className="text-2xl p-3 bg-blue-50 text-blue-600 rounded-xl mb-4">🤝</span>
            <h3 className="text-lg font-medium text-gray-900 mb-3">{t('step1Title')}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {t('step1Desc')}
            </p>
          </div>

          <div className="bg-[#FAF9F9] p-8 rounded-2xl shadow-sm border border-gray-50 flex flex-col items-center">
            <span className="text-2xl p-3 bg-green-50 text-green-600 rounded-xl mb-4">💰</span>
            <h3 className="text-lg font-medium text-gray-900 mb-3">{t('step2Title')}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {t('step2Desc')}
            </p>
          </div>

          <div className="bg-[#FAF9F9] p-8 rounded-2xl shadow-sm border border-gray-50 flex flex-col items-center">
            <span className="text-2xl p-3 bg-yellow-50 text-yellow-500 rounded-xl mb-4">😊</span>
            <h3 className="text-lg font-medium text-gray-900 mb-3">{t('step3Title')}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {t('step3Desc')}
            </p>
          </div>

        </div>
      </section>

      {/* 3. About Our Cause Section */}
      <section className="py-16 px-4 bg-white border-t border-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="Images/photo-1509099836639-18ba1795216d.jpg" 
              alt="Children smiling" 
              className="rounded-2xl shadow-md w-full object-cover h-64 sm:h-80"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#1F2937]">{t('aboutTitle')}</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              {t('aboutPara1')}
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              {t('aboutPara2')}
            </p>
          </div>
        </div>
      </section>

      {/* 4. Active Campaigns Section */}
      <section className="py-16 px-4 bg-[#F9F6F0]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-center text-[#4A3228] mb-12">{t('activeCampaignsTitle')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campaigns.map((campaign) => (
              <div key={campaign.id} className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col border border-gray-100">
                <div className="relative h-48 w-full bg-gray-200">
                  <img src={campaign.image} alt={campaign.title} className="w-full h-full object-cover" />
                  <span className="absolute top-3 right-3 bg-[#7D1B2D] text-white text-xs px-2.5 py-1 rounded-md font-medium">
                    {campaign.tag}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{campaign.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed mb-4">{campaign.description}</p>
                  </div>

                  <div className="space-y-2 text-xs text-gray-600">
                    <div className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-gray-400" />
                      <span>{t('goalLabel')} <strong className="font-medium text-gray-800">{campaign.goal}</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-gray-400" />
                      <span>{t('raisedLabel')} <strong className="font-medium text-gray-800">{campaign.raised}</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span>{campaign.duration}</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="pt-3">
                      <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                        <div 
                          className="bg-[#8A2538] h-full rounded-full" 
                          style={{ width: `${campaign.progress}%` }}
                        ></div>
                      </div>
                      <div className="text-right text-[10px] text-gray-500 mt-1">
                        {campaign.progress.toFixed(1)}% {t('fundedLabel')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Testimonials Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-[#1F2937] mb-12">{t('testimonialsTitle')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-[#FAF9F9] p-8 rounded-2xl border border-gray-50 flex flex-col items-center justify-between">
                <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full object-cover mb-4 ring-2 ring-gray-100" />
                <p className="text-gray-500 italic text-xs leading-relaxed mb-6 px-2">{t.text}</p>
                <div>
                  <h4 className="text-sm font-medium text-gray-900">{t.name}</h4>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Call To Action Section */}
      <section className="bg-[#752D3A] text-white py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto space-y-5">
          <h2 className="text-2xl sm:text-3xl font-medium">{t('ctaTitle')}</h2>
          <p className="text-xs sm:text-sm text-gray-200 font-light leading-relaxed">
            {t('ctaDesc')}
          </p>
          <div className="pt-2">
           <Link to={"/contact"}> <button className="bg-[#F5EBE6] text-[#752D3A] font-medium text-sm px-6 py-2.5 rounded-full shadow hover:bg-white transition-colors">
              {t('ctaButton')}
            </button></Link>
          </div>
        </div>
      </section>

    </div>
  );
}