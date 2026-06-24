import React from "react";
import CommonHero from "../shared/CommonHero";

const ThemesHero = () => {
  return (
    <CommonHero
      badge="Premium Themes"
      title="Our Themes"
      description="Explore our complete collection of premium themes built for modern startups and enterprises."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Themes", href: "/themes" },
      ]}
    />
  );
};

export default ThemesHero;
