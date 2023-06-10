"use client";
import { Menu, Transition } from "@headlessui/react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillSunFill, BsMoon } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { MdGTranslate, MdOutlineKeyboardArrowUp } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import css from "../../public/assets/images/css-3.png";
import html from "../../public/assets/images/html-5.png";
import javaScript from "../../public/assets/images/js.png";
import lwsLogo from "../../public/assets/images/logo.svg";
import lwsDarkLogo from "../../public/assets/images/lws-logo-dark.svg";
import next from "../../public/assets/images/next.png";
import node from "../../public/assets/images/nodejs.png";
import react from "../../public/assets/images/physics.png";
import redux from "../../public/assets/images/redux.png";
import tailwind from "../../public/assets/images/tailwind.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <BsFillSunFill
          onClick={() => setTheme("light")}
          className=" cursor-pointer dark:text-yellow-400 mr-4 "
        />
      );
    } else {
      return (
        <BsMoon
          onClick={() => setTheme("dark")}
          className=" cursor-pointer text-gray-500 mr-4  "
        />
      );
    }
  };
  const subjects = [
    "Trending",
    "DSA",
    "Data Structures",
    "Algorithms",
    "Interview Preparation",
    "Data Science",
    "Topic-wice Practice",
    "Python",
    "Java",
    "C",
    "C++",
    "JavaScript",
    "CSS",
    "Competitive Programming",
    "Machine Learning",
    "Aptitude",
    "Web Development",
    "Puzzles",
    "Projects",
  ];

  const mobileAllSubject = [
    "Home",
    "Saved Videos",
    "Courses",
    "Summer Skill Up",
    "Data Strucures and Algorithms",
    "For Working Professionals",
    "For Studen",
    "Programing Language",
    "Web Development",
    "Machine Learning and Data Science",
    "New Courcess",
    "School Courcess",
    "Data Strucures",
    "Link List",
    "Tree",
    "Algorithms",
    "Analysis of Algorithms",
    "Searching of Algorithms",
    "Sorting Algorithms",
    "System Design",
    "Software Design Patterns",
    "Interview Corner",
    "Languages",
    "Web Development",
    "Css Framework",
    "JavaScript Framework",
    "JavaScript Libraries",
  ];
  const tutorials = [
    "DSA",
    "Data Structures",
    "System Design",
    "Interview Corner",
    "Languages",
    "Web Development",
    "School Learning",
    "ML & Data Science",
    "DevOps",
  ];
  const preparations = [
    "Company Interview Preparation",
    "Internship Interview Preparation",
    "Experienced Interview Preparation",
  ];

  const Practices = [
    "All DSA Problems",
    "Problem of the Day",
    "GFG SDE Sheet",
    "Curated DSA Lists",
  ];
  const contests = [
    "LWS Weekly Coding Contest",
    "Job-A-Thon : Hiring Challenge",
    "BiWizard School Contest",
    "All Contests and Events",
  ];

  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className=" hidden md:block">
        <div>
          <div className=" px-10 py-4 bg-[#f5f8fa] dark:bg-[#0a1120] border-b dark:border-gray-800 ">
            <div className=" flex justify-between items-center">
              <div>
                <ul className=" flex items-center justify-center gap-x-2 text-gray-700  dark:text-gray-400 text-[14px] ">
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="flex group dark:hover:text-gray-100 relative hover:bg-[#1f2937] hover:text-white px-4 py-2 hover:rounded-md">
                        Courses
                        <MdOutlineKeyboardArrowUp
                          size={25}
                          className="group-hover:rotate-0 rotate-180 duration-300"
                        />
                      </Menu.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute  z-10 mt-2 w-[350px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
                        <div className="py-1 flex gap-x-4 dark:bg-[#0d1426] dark:rounded dark:border dark:border-slate-700  ">
                          <div>
                            <Menu.Item>
                              <Link
                                href="#"
                                className={classNames(
                                  "px-4 py-2 text-sm flex items-center gap-x-3 hover:scale-105 transition duration-150 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                                )}
                              >
                                <Image src={html} alt="html" width={30} /> HTML
                              </Link>
                            </Menu.Item>
                            <Menu.Item>
                              <Link
                                href="#"
                                className={classNames(
                                  "px-4 py-2 text-sm flex items-center gap-x-3 hover:scale-105 transition duration-150 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                                )}
                              >
                                <Image src={css} alt="css" width={30} /> CSS
                              </Link>
                            </Menu.Item>
                            <Menu.Item>
                              <Link
                                href="#"
                                className={classNames(
                                  "px-4 py-2 text-sm flex items-center gap-x-3 hover:scale-105 transition duration-150 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                                )}
                              >
                                <Image src={javaScript} alt="css" width={30} />{" "}
                                JavaScript
                              </Link>
                            </Menu.Item>
                            <Menu.Item>
                              <Link
                                href="#"
                                className={classNames(
                                  "px-4 py-2 text-sm flex items-center gap-x-3 hover:scale-105 transition duration-150 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                                )}
                              >
                                <Image src={tailwind} alt="css" width={30} />{" "}
                                Tailwind Css
                              </Link>
                            </Menu.Item>
                          </div>
                          <div>
                            <Menu.Item>
                              <Link
                                href="#"
                                className={classNames(
                                  "px-4 py-2 text-sm flex items-center gap-x-3 hover:scale-105 transition duration-150 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                                )}
                              >
                                <Image src={react} alt="css" width={30} /> React
                              </Link>
                            </Menu.Item>
                            <Menu.Item>
                              <Link
                                href="#"
                                className={classNames(
                                  "px-4 py-2 text-sm flex items-center gap-x-3 hover:scale-105 transition duration-150 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                                )}
                              >
                                <Image src={redux} alt="css" width={30} /> Redux
                              </Link>
                            </Menu.Item>
                            <Menu.Item>
                              <Link
                                href="#"
                                className={classNames(
                                  "px-4 py-2 text-sm flex items-center gap-x-3 hover:scale-105 transition duration-150 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                                )}
                              >
                                <Image src={next} alt="css" width={30} /> Next
                                js
                              </Link>
                            </Menu.Item>
                            <Menu.Item>
                              <Link
                                href="#"
                                className={classNames(
                                  "px-4 py-2 text-sm flex items-center gap-x-3 hover:scale-105 transition duration-150 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                                )}
                              >
                                <Image src={node} width={30} alt="css" /> Node
                                js
                              </Link>
                            </Menu.Item>
                          </div>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="flex group dark:hover:text-gray-100 relative hover:bg-[#1f2937] hover:text-white px-4 py-2 hover:rounded-md">
                        Tutorials
                        <MdOutlineKeyboardArrowUp
                          size={25}
                          className="group-hover:rotate-0 rotate-180 duration-300"
                        />
                      </Menu.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute  z-10 mt-2 w-[250px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
                        <div className="py-1 flex gap-x-4 dark:bg-[#0d1426] dark:rounded dark:border dark:border-slate-700  ">
                          <div>
                            {tutorials.map((tut, index) => (
                              <Menu.Item key={index}>
                                <Link
                                  href="#"
                                  className={classNames(
                                    "px-4 py-2 text-sm flex items-center gap-x-3 hover:scale-105 transition duration-150 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                                  )}
                                >
                                  {tut}
                                </Link>
                              </Menu.Item>
                            ))}
                          </div>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="flex group dark:hover:text-gray-100 relative hover:bg-[#1f2937] hover:text-white px-4 py-2 hover:rounded-md">
                        Preparation
                        <MdOutlineKeyboardArrowUp
                          size={25}
                          className="group-hover:rotate-0 rotate-180 duration-300"
                        />
                      </Menu.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute  z-10 mt-2 w-[270px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
                        <div className="py-1 flex gap-x-4 dark:bg-[#0d1426] dark:rounded dark:border dark:border-slate-700  ">
                          <div>
                            {preparations.map((pre, index) => (
                              <Menu.Item key={index}>
                                <Link
                                  href="#"
                                  className={classNames(
                                    "px-4 py-2 text-sm flex items-center gap-x-3 hover:scale-105 transition duration-150 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                                  )}
                                >
                                  {pre}
                                </Link>
                              </Menu.Item>
                            ))}
                          </div>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>

                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="flex group dark:hover:text-gray-100 relative hover:bg-[#1f2937] hover:text-white px-4 py-2 hover:rounded-md">
                        Practice
                        <MdOutlineKeyboardArrowUp
                          size={25}
                          className="group-hover:rotate-0 rotate-180 duration-300"
                        />
                      </Menu.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute  z-10 mt-2 w-[220px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
                        <div className="py-1 flex gap-x-4 dark:bg-[#0d1426] dark:rounded dark:border dark:border-slate-700  ">
                          <div>
                            {Practices.map((pra, index) => (
                              <Menu.Item key={index}>
                                <Link
                                  href="#"
                                  className={classNames(
                                    "px-4 py-2 text-sm flex items-center gap-x-3 hover:scale-105 transition duration-150 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                                  )}
                                >
                                  {pra}
                                </Link>
                              </Menu.Item>
                            ))}
                          </div>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>

                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="flex group dark:hover:text-gray-100 relative hover:bg-[#1f2937] hover:text-white px-4 py-2 hover:rounded-md">
                        Contests
                        <MdOutlineKeyboardArrowUp
                          size={25}
                          className="group-hover:rotate-0 rotate-180 duration-300"
                        />
                      </Menu.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute  z-10 mt-2 w-[250px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
                        <div className="py-1 flex gap-x-4 dark:bg-[#0d1426] dark:rounded dark:border dark:border-slate-700  ">
                          <div>
                            {contests.map((cont, index) => (
                              <Menu.Item key={index}>
                                <Link
                                  href="#"
                                  className={classNames(
                                    "px-4 py-2 text-sm flex items-center gap-x-3 hover:scale-105 transition duration-150 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                                  )}
                                >
                                  {cont}
                                </Link>
                              </Menu.Item>
                            ))}
                          </div>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </ul>
              </div>
              <div className=" cursor-pointer  ">
                <Image
                  className=" "
                  src={theme === "light" ? lwsLogo : lwsDarkLogo}
                  alt="lwsLogo"
                  width={120}
                />
              </div>
              <div className=" flex items-center gap-x-4">
                <form action="" className=" relative w-max mx-auto">
                  <input
                    type="search"
                    name="search"
                    className=" relative z-10 bg-transparent w-10 h-10 peer rounded-full border focus:w-full dark:focus:border-slate-500 cursor-pointer outline-none focus:cursor-text pl-10  focus:pl-16 focus:pr-4 dark:border-slate-500 "
                  />
                  <AiOutlineSearch
                    className=" absolute h-8 w-12 inset-y-0 my-auto px-3.5 border-r  border-transparent peer-focus:border-slate-300  dark:peer-focus:border-slate-500 stroke-slate-400 dark:peer-focus:stroke-slate-500 cursor-pointer
                  "
                  />
                </form>

                {renderThemeChanger()}
                <MdGTranslate size={20} className=" cursor-pointer" />
                <button className=" bg-[#1f2937] px-5 py-2 rounded-md text-white">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile device */}
      <div className=" md:hidden sticky top-0 z-40">
        <div>
          <div className=" px-10  py-4 bg-[#f5f8fa] dark:bg-[#0a1120]  border-b dark:border-gray-800">
            <div className=" flex justify-between items-center ">
              <div className=" cursor-pointer ">
                <Image
                  src={theme === "light" ? lwsLogo : lwsDarkLogo}
                  alt="lwsLogo"
                  width={120}
                />
              </div>
              <div className=" flex items-center gap-x-4">
                {renderThemeChanger()}
                {!toggle ? (
                  <FaBars size={25} onClick={() => setToggle(!toggle)} />
                ) : (
                  <RxCross2 size={25} onClick={() => setToggle(!toggle)} />
                )}
              </div>
            </div>
          </div>
          <div
            className={` w-[370px] py-5 relative left-[-550px] transition-all duration-500 ease-in   ${
              toggle ? " left-[0px]" : "left-[-550px]"
            }`}
          >
            <ul className=" py-6 flex  flex-col gap-y-7    overflow-y-scroll h-[520px]     absolute dark:bg-[#0c1323] bg-white px-10 top-0">
              {mobileAllSubject.map((sub, index) => (
                <Link
                  key={index}
                  href="#"
                  className=" dark:text-gray-400 dark:hover:text-gray-200 text-gray-500 hover:text-gray-800 transition duration-150  "
                >
                  {sub}
                </Link>
              ))}
              <button className=" bg-slate-900 py-2 rounded-full text-white dark:bg-cyan-600">
                Sign In
              </button>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
