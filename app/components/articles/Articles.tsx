"use client";
import ArticlesCards from "./ArticlesCards";

const Articles = () => {
  return (
    <div className="  dark:bg-slate-900 bg-slate-100 py-20 ">
      <div className="w-[400px]   md:w-[1230px]  h-full mx-auto ">
        <h2 className=" text-2xl font-semibold">Articles</h2>
        <div className=" mt-10">
          <ArticlesCards />
        </div>
      </div>
    </div>
  );
};

export default Articles;
