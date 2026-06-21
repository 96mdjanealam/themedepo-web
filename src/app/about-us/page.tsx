import AboutUsHero from "@/components/about-us/AboutUsHero";
import MarqueeWords from "@/components/about-us/MarqueeWords";
import Manifesto from "@/components/about-us/Menifesto";
import SimpleStats from "@/components/about-us/SimpleStats";
import TheTeam from "@/components/about-us/TheTeam";
import BookUs from "@/components/shared/BookUs";
import OurStory from "@/components/shared/OurStory";
import WhyChooseOurTheme from "@/components/shared/WhyChooseOurTheme";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | ThemeDepo",
  description: "Learn more about ThemeDepo.",
};

const AboutPage = () => {
  return (
    <div>
      <AboutUsHero />
      <OurStory currentPath="/about-us" />
      <MarqueeWords />
      <Manifesto />
      <WhyChooseOurTheme />
      <SimpleStats/>
      <TheTeam/>
      <BookUs/>
    </div>
  );
};

export default AboutPage;
