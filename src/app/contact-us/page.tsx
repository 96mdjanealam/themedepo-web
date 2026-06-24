import ContactUsHero from '@/components/contact-us/ContactUsHero';

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
    </div>
  )
}

export default ContactPage