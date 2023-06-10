import Image from "next/image";

const VideosCard = ({ img, title, date }) => {
  return (
    <div className="  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-full md:w-[370px] mt-[40px] md:h-[370px] h-[470px] flex-1 mb-10 transition hover:shadow-lg hover:shadow-slate-200 dark:hover:shadow dark:hover:scale-105 duration-100">
      <a href="#">
        <Image className="rounded-t-lg w-full" src={img} alt="" />
      </a>
      <div className="p-5 space-y-5 ">
        <div className=" h-[60px] ">
          <h2 className=" text-xl font-semibold">{title}</h2>
        </div>
        <div className=" relative h-[40px] ">
          <div className=" absolute ">
            <div className=" mt-5">
              <p className=" text-[12px]">{date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideosCard;
