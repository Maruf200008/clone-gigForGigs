"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import people from "../../../public/assets/images/Asset1-1641910145.svg";

const ProblemDay = () => {
  const countDownDate = new Date("Jun 12, 2023 00:00:00").getTime();
  const [timeObject, setTimeObject] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeObject({ days, hours, minutes, seconds });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [countDownDate]);

  return (
    <div className="  dark:bg-slate-900 bg-slate-100 py-20 ">
      <div className="w-[400px] h-[500px]  md:w-[1230px] md:h-[280px] mx-auto ">
        <div className=" bg-white border hidden md:flex rounded-lg h-[300px] overflow-hidden  items-center relative">
          <div className=" bg-[#8cc099] h-full w-[156px] "></div>
          <div className=" bg-[#d5e8da] h-full w-[330px] absolute right-0">
            <div className=" flex items-center justify-center flex-col py-24 gap-y-10">
              <div className=" flex items-center justify-items-center gap-x-5 text-center dark:text-gray-800 ">
                <div>
                  <h2 className=" text-3xl font-semibold">{timeObject.days}</h2>
                  <p>Day</p>
                </div>
                <div>
                  <h2 className=" text-3xl font-semibold">
                    {timeObject.hours}
                  </h2>
                  <p>Hours</p>
                </div>
                <div>
                  <h2 className=" text-3xl font-semibold">
                    {timeObject.minutes}
                  </h2>
                  <p>Minutes</p>
                </div>
                <div>
                  <h2 className=" text-3xl font-semibold">
                    {timeObject.seconds}
                  </h2>
                  <p>Seconds</p>
                </div>
              </div>
              <button className=" bg-[#012b3d] px-14 py-2 text-white rounded-md">
                Solve Now
              </button>
            </div>
          </div>

          <Image src={people} alt="" className=" h-full ml-[-80px] " />
          <div className="ml-12 space-y-3 w-[550px] dark:text-slate-800">
            <p className=" text-lg font-semibold text-[#308d46]">
              Problem of the day
            </p>
            <h2 className=" text-2xl font-bold">Least Prime Factor</h2>
            <p>
              Solve one problem based on Data Structures and Algorithms every
              day and win exciting prizes.
            </p>
          </div>
        </div>

        {/* mobile responsive */}
        <div className=" bg-white border md:hidden h-[510px] w-full relative rounded-md  overflow-hidden ">
          <div className=" bg-[#8cc099]  absolute -top-1 h-[100px] w-full  "></div>
          <div className="  flex flex-col gap-y-7  mx-auto ">
            <Image src={people} alt="" className=" mx-auto mt-5 z-20" />
            <div className=" dark:text-slate-800 text-center ">
              <p className=" text-lg font-semibold text-[#308d46] ">
                Problem of the day
              </p>
              <h2 className=" text-2xl font-bold">Least Prime Factor</h2>
              <p className=" px-4 text-slate-400">
                Solve one problem based on Data Structures and Algorithms every
                day and win exciting prizes.
              </p>
            </div>

            <div className=" flex items-center justify-center flex-col gap-y-4  bg-[#d5e8da]  py-4 ">
              <div className=" flex items-center justify-items-center gap-x-5 text-center dark:text-gray-800  ">
                <div>
                  <h2 className=" text-3xl font-semibold">{timeObject.days}</h2>
                  <p>Day</p>
                </div>
                <div>
                  <h2 className=" text-3xl font-semibold">
                    {timeObject.hours}
                  </h2>
                  <p>Hours</p>
                </div>
                <div>
                  <h2 className=" text-3xl font-semibold">
                    {timeObject.minutes}
                  </h2>
                  <p>Minutes</p>
                </div>
                <div>
                  <h2 className=" text-3xl font-semibold">
                    {timeObject.seconds}
                  </h2>
                  <p>Seconds</p>
                </div>
              </div>
              <button className=" bg-[#012b3d] px-28 py-2  text-white rounded-md">
                Solve Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemDay;
