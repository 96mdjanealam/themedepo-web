import ContactInfo from '@/components/contact-us/ContactInfo';
import ContactUsHero from '@/components/contact-us/ContactUsHero';
import Faq from '@/components/home/Faq';

import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  title: "Contact | ThemeDepo",
  description:
    "Contact ThemeDepo",
};

const ContactPage = () => {
  return (
    <div>
      <ContactUsHero/>
      <ContactInfo/>
      <Faq/>
    </div>
  )
}

export default ContactPage