import React from 'react'
import HeroSection from '../Components/HeroSection';
import Community from '../Components/Community';
import TransparentProcess from '../Components/TransparentProcess';
import CampaignSection from '../Components/CampaignSection';
import PlatformSection from '../Components/PlatformSection';
import PremierPlatform from '../Components/PremierPlatform';
import FaqSection from '../Components/FaqSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Community />
      <TransparentProcess />
      <CampaignSection />
      <PlatformSection />
      <PremierPlatform />
      <FaqSection />
    </div>
  )
}

export default Home