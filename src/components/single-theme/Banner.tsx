import Image, { StaticImageData } from "next/image";
import React from "react";

const Banner = ({ bannerImg }: { bannerImg: StaticImageData }) => {
  return (
    <section className="relative z-10 container mx-auto p-4 -mt-30 shadow-xl bg-white border border-light-gray/40">
      <Image
        src={bannerImg}
        alt="Banner Image"
        width={bannerImg.width}
        height={bannerImg.height}
        className="w-full h-auto"
      />
    </section>
  );
};

export default Banner;
