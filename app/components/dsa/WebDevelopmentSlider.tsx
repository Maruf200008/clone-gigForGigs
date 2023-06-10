"use client";
// Import Swiper React components

import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import Link from "next/link";

// import required modules
import { Navigation } from "swiper";

import Image from "next/image";
import dev1 from "../../../public/assets/images/dev1.png";
import dev2 from "../../../public/assets/images/dev2.png";
import dev3 from "../../../public/assets/images/dev3.png";
import dev4 from "../../../public/assets/images/dev4.png";

const WebDevelopmentSlider = () => {
  const subjects = [
    {
      img: dev1,
      option: "HTML",
    },
    {
      img: dev2,
      option: "CSS",
    },
    {
      img: dev3,
      option: "Javascript",
    },
    {
      img: dev4,
      option: "PHP Tutorials",
    },
    {
      img: dev1,
      option: "Tailwind Css",
    },
    {
      img: dev2,
      option: "ReactJS Tutorials",
    },
    {
      img: dev3,
      option: "NodeJS ",
    },
    {
      img: dev4,
      option: "AngularJS ",
    },
  ];
  return (
    <div className=" py-10">
      <div className=" mb-4 flex justify-between items-center">
        <h2 className=" text-2xl font-semibold">Web Development</h2>
        <Link
          href="#"
          className=" rounded-full px-3 py-1 border border-slate-800 dark:border-slate-500 mr-3"
        >
          View All
        </Link>
      </div>
      <Swiper
        centeredSlides={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        modules={[Navigation]}
        className="mySwiper relative group: "
      >
        <Link href="#">
          {subjects.map((sub, index) => (
            <SwiperSlide key={index} className="">
              <div className=" bg-[#ea7e36] rounded-md relative h-[180px] text-white w-[400px] cursor-pointer  ">
                <Image src={sub.img} alt="sdf" />
                <div className=" px-3">
                  <h2 className=" top-4 absolute text-xl">{sub.option}</h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Link>

        <div className=" top-[50%] left-0  button-next-slide cursor-pointer absolute z-20 ">
          <HiArrowCircleRight
            size={30}
            className=" bg-slate-500 dark:bg-slate-700 rounded-full text-white"
          />
        </div>
        <div className=" top-[50%] md:right-1 right-0 button-prev-slide cursor-pointer absolute z-20 ">
          <HiArrowCircleLeft
            size={30}
            className=" bg-slate-500 dark:bg-slate-700 rounded-full text-white"
          />
        </div>
      </Swiper>
    </div>
  );
};

export default WebDevelopmentSlider;
