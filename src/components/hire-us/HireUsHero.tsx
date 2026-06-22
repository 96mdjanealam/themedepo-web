import React from "react";
import CommonHero from "../shared/CommonHero";

const HireUsHero = () => {
  return (
    <CommonHero
      badge="Hire Us Now"
      title="Order Your Website"
      description="We are a distributed team of engineers, designers, and creators who
believe in building products that leave a lasting impact."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Hire Us", href: "/hire-us" },
      ]}
    />
  );
};

export default HireUsHero;
