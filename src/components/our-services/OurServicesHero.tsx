import React from "react";
import CommonHero from "../shared/CommonHero";

const OurServicesHero = () => {
  return (
    <CommonHero
      badge="What we do"
      title="Our Services"
      description="End to end digital solutions combining technical excellence with modern aesthetics to propel your business forward."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/our-services" },
      ]}
    />
  );
};

export default OurServicesHero;
