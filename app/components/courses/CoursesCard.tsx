import Image from "next/image";
import groupImage from "../../../public/assets/images/Group7622-1669294650.svg";
import lavelsImage from "../../../public/assets/images/Levels-1669283463.svg";
import startImage from "../../../public/assets/images/Path4648-1641537423.svg";

const CoursesCard = ({ rating, interested, img, title, position }) => {
  return (
    <div className="  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-full md:w-[320px] mt-[40px] md:h-[420px] h-[470px] flex-1 transition  hover:scale-105 duration-150 hover:shadow-lg ">
      <a href="#">
        <Image className="rounded-t-lg" src={img} alt="" />
      </a>
      <div className="p-5 space-y-5 ">
        <div className=" flex items-center justify-between">
          <div className=" flex items-center">
            <Image src={groupImage} alt="" />
            <p className=" text-[12px]">{interested}</p>
          </div>
          {rating !== null ? (
            <div className=" flex items-center gap-x-2 border rounded-full px-3 py-1">
              <Image src={startImage} alt="sd" />
              <p className="text-[12px]">{rating}</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className=" h-[60px] ">
          <h2 className=" text-xl font-semibold">{title}</h2>
        </div>
        <div className=" relative h-[40px] ">
          <div className=" absolute ">
            <div className=" flex items-center gap-x-2">
              <Image src={lavelsImage} alt="" />
              <p className=" text-[12px]">{position}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
