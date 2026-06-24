import React from 'react'
import CommonHero from '../shared/CommonHero'

const ContactUsHero = () => {
  return (
    <CommonHero
      badge="Get in touch"
      title="Contact Us"
      description="Have a question or need assistance? Our team is here to help. Reach out to us for inquiries, support, or project discussions, and we'll get back to you as soon as possible."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Contact", href: "/contact-us" },
      ]}
    />
  )
}

export default ContactUsHero
