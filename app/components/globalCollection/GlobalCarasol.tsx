"use client";

import Image from "next/image";
import global1 from "../../../public/assets/images/global1.jpg";
import global2 from "../../../public/assets/images/global2.jpg";
import global3 from "../../../public/assets/images/global3.jpg";
import global4 from "../../../public/assets/images/global4.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper";

const GlobalCarasol = () => {
  return (
    <div className=" w-[380px] h-[400px] md:w-[1050px] md:h-[300px] mx-auto mt-[70px] bg-slate-100 dark:bg-slate-900 rounded-md overflow-hidden border dark:border-slate-600 border-slate-300  ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <Link href="#">
          <SwiperSlide>
            <div className=" flex items-center gap-x-7 flex-col md:flex-row cursor-pointer  ">
              <div className=" overflow-hidden">
                <Image
                  src={global1}
                  alt="sdf"
                  className="md:h-[300px] h-[200px] w-[950px] "
                />
              </div>
              <div className="md:h-[300px] h-[170px]  md:w-[750px] w-[350px] py-5 md:py-11 md:px-8 text-left space-y-6 ">
                <h2 className=" text-xl md:text-3xl font-semibold">
                  SDE SHEET - A Complete Guide for SDE Preparation
                </h2>
                <p>
                  What is SDE Sheet?SDE Sheet is a list of the most important
                  topics or the most popular questions that are asked in the
                  Software Development Engineer Interviews.How is this...
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Link>
        <Link href="#">
          <SwiperSlide>
            <div className=" flex items-center gap-x-7 flex-col md:flex-row cursor-pointer  ">
              <div className=" overflow-hidden">
                <Image
                  src={global2}
                  alt="sdf"
                  className="md:h-[300px] h-[200px] w-[950px] "
                />
              </div>
              <div className="md:h-[300px] h-[170px]  md:w-[750px] w-[350px] py-5 md:py-11 md:px-8 text-left space-y-6 ">
                <h2 className=" text-xl md:text-3xl font-semibold">
                  SDE SHEET - A Complete Guide for SDE Preparation
                </h2>
                <p>
                  What is SDE Sheet?SDE Sheet is a list of the most important
                  topics or the most popular questions that are asked in the
                  Software Development Engineer Interviews.How is this...
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Link>
        <Link href="#">
          <SwiperSlide>
            <div className=" flex items-center gap-x-7 flex-col md:flex-row cursor-pointer  ">
              <div className=" overflow-hidden">
                <Image
                  src={global3}
                  alt="sdf"
                  className="md:h-[300px] h-[200px] w-[950px] "
                />
              </div>
              <div className="md:h-[300px] h-[170px]  md:w-[750px] w-[350px] py-5 md:py-11 md:px-8 text-left space-y-6 ">
                <h2 className=" text-xl md:text-3xl font-semibold">
                  SDE SHEET - A Complete Guide for SDE Preparation
                </h2>
                <p>
                  What is SDE Sheet?SDE Sheet is a list of the most important
                  topics or the most popular questions that are asked in the
                  Software Development Engineer Interviews.How is this...
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Link>
        <Link href="#">
          <SwiperSlide>
            <div className=" flex items-center gap-x-7 flex-col md:flex-row cursor-pointer ">
              <div className=" overflow-hidden">
                <Image
                  src={global4}
                  alt="sdf"
                  className="md:h-[300px] h-[200px] w-[950px] "
                />
              </div>
              <div className="md:h-[300px] h-[170px]  md:w-[750px] w-[350px] py-5 md:py-11 md:px-8 text-left space-y-6 ">
                <h2 className=" text-xl md:text-3xl font-semibold">
                  SDE SHEET - A Complete Guide for SDE Preparation
                </h2>
                <p>
                  What is SDE Sheet?SDE Sheet is a list of the most important
                  topics or the most popular questions that are asked in the
                  Software Development Engineer Interviews.How is this...
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Link>
      </Swiper>
    </div>
  );
};

export default GlobalCarasol;
