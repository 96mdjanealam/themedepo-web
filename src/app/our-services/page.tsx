import EverythingNeedToKnow from '@/components/our-services/EverythingNeedToKnow'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Our Services | ThemeDepo",
  description: "Learn more about ThemeDepo services.",
};

const OurServicesPage = () => {
  return (
    <div>
      <EverythingNeedToKnow/>
    </div>
  )
}

export default OurServicesPage
