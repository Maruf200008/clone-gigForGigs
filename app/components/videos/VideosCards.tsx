import Link from "next/link";
import video1 from "../../../public/assets/images/video1.png";
import video2 from "../../../public/assets/images/video2.png";
import video3 from "../../../public/assets/images/video3.png";

import VideosCard from "./VideosCard";

const VideosCards = () => {
  const videos = [
    {
      img: video1,
      title: "Check if given Binary Tree is Height Balanced or Not",
      date: "05/06/2023",
    },
    {
      img: video2,
      title: "Old Tax Regime vs New Tax Regime. Which One You Should Choose?",
      date: "02/06/2023",
    },
    {
      img: video3,
      title: "Number of leaf nodes",
      date: "01/06/2023",
    },
  ];

  return (
    <div className=" grid md:grid-cols-3 mx-auto gap-x-32 gap-y-10 md:flex-row  ">
      {videos.map((video, index) => (
        <Link href="#" key={index}>
          <VideosCard img={video.img} title={video.title} date={video.date} />
        </Link>
      ))}
    </div>
  );
};

export default VideosCards;
