import React from 'react'
import CommonHero from '../shared/CommonHero'

const PortfolioHero = () => {
  return (
    <CommonHero
      badge="Themedepo works"
      title="ThemeDepo Portfolio."
      description="A selection of our best work mapped across digital platforms. Dynamic, scalable, and beautifully designed."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Portfolio", href: "/portfolio" },
      ]}
    />
  )
}

export default PortfolioHero
