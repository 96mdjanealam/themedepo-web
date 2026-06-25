import EverythingNeedToKnow from '@/components/our-services/EverythingNeedToKnow'
import OurServicesHero from '@/components/our-services/OurServicesHero';
import OurWorkProcess from '@/components/our-services/OurWorkProcess';
import TechStack from '@/components/our-services/TechStack';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Our Services | ThemeDepo",
  description: "Learn more about ThemeDepo services.",
};

const OurServicesPage = () => {
  return (
    <div>
      <OurServicesHero/>
      <EverythingNeedToKnow/>
      <OurWorkProcess/>
      <TechStack/>
    </div>
  )
}

export default OurServicesPage
