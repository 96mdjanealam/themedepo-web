import EmpoweringCreators from "@/components/hire-us/EmpoweringCreators";
import ExampleWorks from "@/components/hire-us/ExampleWorks";
import HireUsHero from "@/components/hire-us/HireUsHero";
import ThemeDepoAdvantage from "@/components/hire-us/ThemeDepoAdvantage";
import WorkProcess from "@/components/hire-us/WorkProcess";
import Review from "@/components/shared/Review";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hire Us | ThemeDepo",
  description:
    "Hire ThemeDepo for modern web development, UI/UX design, and custom digital solutions tailored to your business needs.",
};

const HireUsPage = () => {
  return (
    <div>
      <HireUsHero />
      <EmpoweringCreators />
      <ThemeDepoAdvantage />
      <WorkProcess/>
      <ExampleWorks/>
      <Review/>
    </div>
  );
};

export default HireUsPage;
