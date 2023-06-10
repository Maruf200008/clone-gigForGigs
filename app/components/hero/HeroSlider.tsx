"use client";

// Import Swiper styles
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

const HeroSlider = () => {
  return (
    <div className=" flex items-center gap-x-4 md:hidden w-[250px]">
      <Swiper
        modules={[Navigation]}
        className="mySwiper gap-x-2"
        slidesPerView={1}
      >
        <SwiperSlide>
          <button className=" bg-slate-200 dark:bg-slate-800 px-3 py-2 rounded-md text-[12px]">
            DSA: Basic To Advanced Course
          </button>
        </SwiperSlide>

        <SwiperSlide>
          <button className=" bg-slate-200 dark:bg-slate-800 px-3 py-2 rounded-md text-[12px]">
            GATE CS 2024: LIVE Classes
          </button>
        </SwiperSlide>
        <SwiperSlide>
          <button className=" bg-slate-200 dark:bg-slate-800 px-3 py-2 rounded-md text-[12px]">
            Complete Data Science & ML
          </button>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
