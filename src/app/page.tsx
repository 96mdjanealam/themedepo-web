import HomeHero from "@/components/hearder/HomeHero";
import BookUs from "@/components/home/BookUs";
import Categories from "@/components/home/Categories";
import Confidence from "@/components/home/Confidence";
import Faq from "@/components/home/Faq";
import HireUs from "@/components/home/HireUs";
import OurStory from "@/components/home/OurStory";
import PopularThemes from "@/components/home/PopularThemes";
import Review from "@/components/home/Review";
import TechnicalExcellence from "@/components/home/TechnicalExcellence";
import ThemesGallery from "@/components/home/ThemesGallery";
import WhyChooseOurTheme from "@/components/home/WhyChooseOurTheme";

export default function Home() {
  return (
    <div>
      <HomeHero/>
      <OurStory/>
      <Categories/>
      <ThemesGallery/>
      <PopularThemes/>
      <HireUs/>
      <WhyChooseOurTheme/>
      <TechnicalExcellence/>
      <Review/>
      <Faq/>
      <Confidence/>
      <BookUs/>
    </div>
  );
}
