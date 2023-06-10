import Link from "next/link";
import VideosCards from "./VideosCards";

const Videos = () => {
  return (
    <div className="  dark:bg-slate-800 bg-white py-20 ">
      <div className="w-[400px] h-[1800px]  md:w-[1230px] md:h-[480px] mx-auto ">
        <div className=" mb-4 flex justify-between items-center">
          <h2 className=" text-2xl font-semibold">Videos</h2>
          <Link
            href="#"
            className=" rounded-full px-3 py-1 border border-slate-800 dark:border-slate-500 mr-3"
          >
            View All
          </Link>
        </div>
        <VideosCards />
      </div>
    </div>
  );
};

export default Videos;
