import HomeHero from "@/components/hearder/HomeHero";
import Categories from "@/components/home/Categories";
import OurStory from "@/components/home/OurStory";
import PopularThemes from "@/components/home/PopularThemes";
import ThemesGallery from "@/components/home/ThemesGallery";

export default function Home() {
  return (
    <div>
      <HomeHero/>
      <OurStory/>
      <Categories/>
      <ThemesGallery/>
      <PopularThemes/>
    </div>
  );
}
