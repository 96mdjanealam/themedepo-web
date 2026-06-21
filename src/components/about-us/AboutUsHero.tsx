import CommonHero from "@/components/shared/CommonHero";



const AboutUsHero = () => (
  <CommonHero
    badge="About ThemeDepo"
    title="About"
    highlightedWord="Us."
    description="We are a distributed team of engineers, designers, and creators who believe in building products that leave a lasting impact."
    breadcrumbs={[
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
    ]}
  />
);

export default AboutUsHero;