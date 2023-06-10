import learn from "../../../public/assets/images/learn.png";
import practice from "../../../public/assets/images/practice.png";
import read from "../../../public/assets/images/read.png";
import HeroCard from "./GlobalCard";

const HeroCards = () => {
  return (
    <div className=" flex flex-col   items-center justify-center gap-x-7 md:flex-row ">
      <HeroCard image={read} />
      <HeroCard image={practice} />
      <HeroCard image={learn} />
    </div>
  );
};

export default HeroCards;
