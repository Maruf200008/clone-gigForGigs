import Link from "next/link";
import java from "../../../public/assets/images/Java-backend-live-thumbnail.png";
import android from "../../../public/assets/images/android-dev-live-thumbnail.png";
import c from "../../../public/assets/images/c-Programming-basic-to-advanced-thumbnail.png";
import dsa from "../../../public/assets/images/dsa-self-paced-thumbnail.png";
import fullStack from "../../../public/assets/images/full-stack-node-thumbnail.png";
import getLive from "../../../public/assets/images/gate-live-course-thumbnail.png";

import CoursesCard from "./CoursesCard";

const CoursesCards = () => {
  const courses = [
    {
      rating: "4.5",
      interested: "49k+ interested Geeks",
      img: getLive,
      title: "GATE CS & IT 2024",
      position: "Beginner to Advance",
    },
    {
      rating: null,
      interested: "12k+ interested Geeks",
      img: android,
      title: "Android App Development with Kotlin - Live",
      position: "Beginner to Advance",
    },
    {
      rating: "4.9",
      interested: "922k+ interested Geeks",
      img: dsa,
      title: "Android App Development with Kotlin - Live",
      position: "Beginner to Advance",
    },
    {
      rating: null,
      interested: "95k+ interested Geeks",
      img: c,
      title: "Master C Programming with Data Structures",
      position: "Beginner to Advance",
    },
    {
      rating: "5",
      interested: "101k+ interested Geeks",
      img: java,
      title: "Master C Programming with Data Structures",
      position: "Intermediate and Advance",
    },
    {
      rating: "4.9",
      interested: "123k+ interested Geeks",
      img: fullStack,
      title: "Full Stack Development with React & Node JS - Live",
      position: "Intermediate and Advance",
    },
  ];

  return (
    <div className=" grid md:grid-cols-3 mx-auto gap-x-32 gap-y-10 md:flex-row  ">
      {courses.map((cou, index) => (
        <Link href="#" key={index}>
          <CoursesCard
            rating={cou.rating}
            interested={cou.interested}
            img={cou.img}
            title={cou.title}
            position={cou.position}
          />
        </Link>
      ))}
    </div>
  );
};

export default CoursesCards;
