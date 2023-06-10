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
import learn1 from "../../../public/assets/images/learn1.png";
import learn2 from "../../../public/assets/images/learn2.png";
import learn3 from "../../../public/assets/images/learn3.png";
import learn4 from "../../../public/assets/images/learn4.png";

const TutorialSlider = () => {
  const subjects = [
    {
      img: learn1,
      option: "Python",
    },
    {
      img: learn2,
      option: "Java",
    },
    {
      img: learn3,
      option: "C++",
    },
    {
      img: learn4,
      option: "C",
    },
    {
      img: learn1,
      option: "C#",
    },
    {
      img: learn2,
      option: "Golang",
    },
    {
      img: learn3,
      option: "SQL",
    },
    {
      img: learn4,
      option: "Android",
    },
  ];
  return (
    <div className=" py-10">
      <div className=" mb-4 flex justify-between items-center">
        <h2 className=" text-2xl font-semibold">Tutorials</h2>
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
              <div className=" bg-[#308D46] rounded-md relative h-[180px] text-white w-[400px] cursor-pointer  ">
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

export default TutorialSlider;
