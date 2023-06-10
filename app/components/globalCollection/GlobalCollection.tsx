"use client";

import GlobalCarasol from "./GlobalCarasol";
import GlobalCards from "./GlobalCards";

const GlobalCollection = () => {
  return (
    <div className=" bg-white dark:bg-slate-800 h-full pb-10 ">
      <div>
        <GlobalCards />
        <GlobalCarasol />
      </div>
    </div>
  );
};

export default GlobalCollection;
