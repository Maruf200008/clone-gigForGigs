import DSASlider from "./DSASlider";
import TutorialSlider from "./TutorialSlider";
import WebDevelopmentSlider from "./WebDevelopmentSlider";

const DSA = () => {
  return (
    <div className="  dark:bg-slate-900 bg-slate-100 ">
      <div className="w-[400px] h-[950px]   md:w-[1230px] md:h-[980px] mx-auto ">
        <DSASlider />
        <WebDevelopmentSlider />
        <TutorialSlider />
      </div>
    </div>
  );
};

export default DSA;
