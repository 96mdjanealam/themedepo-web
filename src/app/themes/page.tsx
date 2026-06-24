import ThemesGalleryExt from '@/components/themes/ThemesGalleryExt';
import ThemesHero from '@/components/themes/ThemesHero';
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  title: "Themes | ThemeDepo",
  description:
    "Explore Our Themes",
};

const ThemesPage = () => {
  return (
    <div>
      <ThemesHero/>
      <ThemesGalleryExt/>
    </div>
  )
}

export default ThemesPage