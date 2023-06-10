"use client";
import { useEffect, useState } from "react";
import { BiUpArrowAlt } from "react-icons/bi";
const GoToTop = () => {
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const [isVisible, setIsVisible] = useState(false);
  const listenToScroll = () => {
    let hightToHidden = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > hightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);
  return (
    <>
      {isVisible && (
        <div onClick={() => goToBtn()} className=" relative">
          <BiUpArrowAlt
            className="animate-bounce fixed bottom-10   right-5 cursor-pointer bg-[#2f8d46] h-[30px] w-[30px] text-white rounded-full"
            size={20}
          />
        </div>
      )}
    </>
  );
};

export default GoToTop;
