import Banner from "@/components/single-theme/Banner";
import SingleThemeHero from "@/components/single-theme/SingleThemeHero";
import ThemeDetails from "@/components/single-theme/ThemeDetails";
import { THEMES } from "@/constants/data";
import React from "react";

const ThemePage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const theme = THEMES.find((theme) => theme.id === Number(id));

  const bannerImg = theme?.bannerImg;

  // console.log(theme)

  return (
    <div>
      <SingleThemeHero themeDetails={theme!} />
      <Banner bannerImg={bannerImg!} />
      <ThemeDetails themeDetails={theme!} />
    </div>
  );
};

export default ThemePage;
