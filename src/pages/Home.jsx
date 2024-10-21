import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

import IconArrow from "../assets/svgs/arrow.svg";

import { RiScrollToBottomFill } from "react-icons/ri";
import { FaDatabase } from "react-icons/fa";
import { FiTool } from "react-icons/fi";
import { FaEarthAsia } from "react-icons/fa6";
import { HiMiniCommandLine } from "react-icons/hi2";
import { TbGridDots } from "react-icons/tb";

import { SiVisualstudiocode } from "react-icons/si";
import { SiIntellijidea } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa6";
import { FaFigma } from "react-icons/fa";
import { SiBlender } from "react-icons/si";
import { SiAdobexd } from "react-icons/si";
import { SiPostman } from "react-icons/si";

import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiPuppeteer } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { SiFlask } from "react-icons/si";

import { SiPostgresql } from "react-icons/si";
import { SiRedis } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";

import { FaPython } from "react-icons/fa";
import { SiGnubash } from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";
import { SiChartdotjs } from "react-icons/si";

import MeImage from "../assets/me.jpg";
import SocialLinks from "../components/SocialLinks";
import ScrambleText from "../components/Scramble";

import Card from "../components/Card";

function About() {
  const workList = [
    { title: "Digitastic", desc: "Web scraper", date: "2021 - 2023" },
  ];

  const educationList = [
    {
      title: "Manisa Celal Bayar Universitesi",
      desc: "Bilgisayar Programciligi",
      date: "2020 - 2022",
    },
  ];

  const dataTop = [
    {
      icon: <FiTool className="size-5" />,
      label: "IDEs & Tools",
      class: "-left-2 md:-left-22 lg:left-auto",
      content: [
        {
          content: "Visual Studio",
          logo: <SiVisualstudiocode />,
        },
        {
          content: "IntelliJ",
          logo: <SiIntellijidea />,
        },
        {
          content: "Docker",
          logo: <FaDocker />,
        },
        {
          content: "Git",
          logo: <FaGitAlt />,
        },
        {
          content: "Gitlab",
          logo: <FaGitlab />,
        },
        {
          content: "Figma",
          logo: <FaFigma />,
        },
        {
          content: "Blender",
          logo: <SiBlender />,
        },
        {
          content: "AdobeXD",
          logo: <SiAdobexd />,
        },
        {
          content: "Postman",
          logo: <SiPostman />,
        },
      ],
    },
    {
      icon: <FaEarthAsia className="size-5" />,
      label: "Web Development",
      class: "",
      content: [
        {
          content: "React",
          logo: <FaReact />,
        },
        {
          content: "Tailwind",
          logo: <RiTailwindCssFill />,
        },
        {
          content: "HTML",
          logo: <FaHtml5 />,
        },
        {
          content: "CSS",
          logo: <FaCss3Alt />,
        },
        {
          content: "Javascript",
          logo: <RiJavascriptFill />,
        },
        {
          content: "Express",
          logo: "",
        },
        {
          content: "Puppeteer",
          logo: <SiPuppeteer />,
        },
        {
          content: "Django",
          logo: <SiDjango />,
        },
        {
          content: "Flask",
          logo: <SiFlask />,
        },
      ],
    },
    {
      icon: <FaDatabase className="size-5" />,
      label: "Database",
      class: "-right-2 md:-right-22 lg:right-auto",
      content: [
        {
          content: "PostgreSQLa",
          logo: <SiPostgresql />,
        },
        {
          content: "Redis",
          logo: <SiRedis />,
        },
        {
          content: "Firebase",
          logo: <IoLogoFirebase />,
        },
      ],
    },
  ];

  const dataBottom = [
    {
      icon: <HiMiniCommandLine className="size-5" />,
      label: "Programing Language",
      class: "-left-20 lg:left-auto",
      content: [
        {
          content: "Python",
          logo: <FaPython />,
        },
        {
          content: "Bash",
          logo: <SiGnubash />,
        },
        {
          content: "Javascript",
          logo: <RiJavascriptFill />,
        },
      ],
    },
    {
      icon: <TbGridDots className="size-5" />,
      label: "Other Skills",
      class: "-right-20 lg:right-auto",
      content: [
        {
          content: "Three.js",
          logo: <TbBrandThreejs />,
        },
        {
          content: "Chart.js",
          logo: <SiChartdotjs />,
        },
      ],
    },
  ];

  const [openCards, setOpenCards] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const ref = useRef([]);

  const handleCardClick = (index) => {
    setOpenCards((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  const handleClickOutside = (event) => {
    ref.current.forEach((r, index) => {
      if (r && !r.contains(event.target)) {
        setOpenCards((prev) => {
          const newCards = [...prev];
          newCards[index] = false;
          return newCards;
        });
      }
    });
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const location = useLocation();
  useEffect(() => {
    const requestOptions = {
      method: "POST",
      redirect: "follow",
    };

    fetch(
      "https://hscapi.vercel.app/visit-count/increment-count",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  }, [location]);

  return (
    <section className="w-full mb-20">
      {/*  */}
      <div className="w-full h-full md:h-screen-padded flex flex-col justify-center pt-16 md:pt-0">
        <div className="flex flex-col justify-center items-center">
          <ScrambleText
            text="Huseyin Samet Cikrikci"
            class_name={`font-bold text-white overflow-hidden whitespace-nowrap animate-typing text-[22px] md:text-[35px] lg:text-[60px] font-titan px-2 rounded-lg mb-5`}
          />
        </div>
        <div className="flex flex-col justify-center items-center relative p-0 sm:px-10 md:px-14 lg:px-20 pb-0">
          <div className="h-full flex flex-col justify-center items-center mx-0 sm:mx-auto gap-6 about_me">
            <div className="relative text-[24px] font-lexend font-bold w-full md:w-auto md:self-start text-left sm:mt-0">
              About Me.
              <img
                src={IconArrow}
                className="absolute -top-6 right-24 md:-right-32 rotate-[20deg] sm:rotate-12 size-16 sm:size-24"
              />
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-[47px] h-auto md:h-[324px]">
              <img
                src={MeImage}
                className="w-[190px] sm:w-[239px] h-auto rounded-xl border-2 border-white shadow-2xl shadow-cyan-500/50"
              />
              <div className="w-[300px] md:w-[404px] h-full font-fira text-[13px] lg:text-[15px] md:text-left flex flex-col justify-center gap-4 text-ellipsis overflow-auto ">
                <p>
                  I am deeply passionate about learning and always open to
                  experimenting, embracing mistakes as opportunities for growth.
                </p>
                <p>
                  With over 3 years of hands-on experience in 3D modeling and
                  about 3 years of expertise in both front-end and back-end
                  software development, I bring a well-rounded technical skill
                  set.
                </p>
                <p>
                  In my free time, I enjoy researching emerging technologies,
                  listening to podcasts, reading manga, and occasionally
                  exploring unique cafes.
                </p>
              </div>
            </div>
            <SocialLinks />
            <div className="relative flex justify-center items-center ">
              <RiScrollToBottomFill className="absolute hidden sm:block size-7 animate-scrollupdown top-0 opacity-25" />
            </div>
          </div>
        </div>
      </div>
      {/*  */}

      <div className="h-screen-section flex flex-col gap-10 justify-center items-center">
        <div className="relative flex h-96 w-full flex-col items-center justify-center space-y-10 overflow-hidden gap-10">
          <div className="mx-auto w-full max-w-3xl">
            <div className="flex w-full items-center justify-center space-x-20 md:justify-between md:space-x-0">
              {/* First Row of Cards */}
              {dataTop.map((item, index) => (
                <div
                  className="relative flex flex-col items-center group"
                  key={index}
                >
                  <div
                    className="w-[50px] h-[50px] rounded-[12px] hover:bg-[#0f0f0f] bg-[rgba(14,16,17,0.5)] border-2 border-[#232020] hover:scale-110 active:scale-90 transform transition-transform duration-200 ease-in-out cursor-pointer"
                    onClick={() => handleCardClick(index)}
                    ref={(el) => (ref.current[index] = el)}
                  >
                    <span className="w-full h-full flex justify-center items-center">
                      {item.icon}
                    </span>
                    <p className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-nowrap text-center text-xs font-bold text-accent-foreground/80">
                      {item.label}
                    </p>
                  </div>
                  {/* Top Alt Div */}
                  {openCards[index] && (
                    <div
                      className={`absolute top-24 ${item.class} z-50 w-[320px] rounded-[12px] border border-[#232020] bg-[rgba(14,16,17,1)] p-4 flex flex-wrap gap-2`}
                    >
                      {item.content.map((tech, i) => (
                        <div
                          key={i}
                          className="items-center rounded-md border border-[#232020] px-2 py-0.5 text-xs font-fira font-bold flex w-max max-w-40 flex-grow gap-2"
                        >
                          {tech.logo}
                          {tech.content}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="mx-auto w-full max-w-md">
            <div className="flex w-full items-center justify-center space-x-20 md:justify-between md:space-x-0">
              {/* Second Row of Cards */}
              {dataBottom.map((item, index) => (
                <div
                  className="relative flex flex-col items-center"
                  key={index + 3}
                >
                  <div
                    className=" w-[50px] h-[50px] rounded-[12px] hover:bg-[#0f0f0f] bg-[rgba(14,16,17,0.5)] border-2 border-[#232020] hover:scale-110 active:scale-90 transform transition-transform duration-200 ease-in-out cursor-pointer"
                    onClick={() => handleCardClick(index + 3)}
                    ref={(el) => (ref.current[index + 3] = el)}
                  >
                    <span className="w-full h-full flex justify-center items-center">
                      {item.icon}
                    </span>
                    <p className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-nowrap text-center text-xs font-bold text-accent-foreground/80">
                      {item.label}
                    </p>
                  </div>
                  {/*Bottom Alt Div */}
                  {openCards[index + 3] && (
                    <div
                      className={`absolute top-24 ${item.class} z-50 w-[320px] rounded-[12px] border border-[#232020] bg-[rgba(14,16,17,1)] p-4 flex flex-wrap gap-2`}
                    >
                      {item.content.map((tech, i) => (
                        <div
                          key={i}
                          className="items-center rounded-md border border-[#232020] px-2 py-0.5 text-xs font-fira font-bold flex w-max max-w-40 flex-grow gap-2"
                        >
                          {tech.logo}
                          {tech.content}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="h-screen-section flex flex-col gap-10 justify-center items-center">
        <Card items={workList} title="Work" />
        <Card items={educationList} title="Education" />
      </div>
      {/*  */}

      <div className="flex flex-wrap gap-[20px] justify-center p-5 md:px-[30%] text-[12px] sm:text-[14px]">
        <div className="h-[50px] bg-[#09090a] border border-[#222222] hover:bg-[#0f0f0f] text-[#71717a] px-3 font-lexend flex items-center justify-center rounded-md">
          Keychrone K3
        </div>
        <div className="h-[50px] bg-[#09090a] border border-[#222222] hover:bg-[#0f0f0f] text-[#71717a] px-3 font-lexend flex items-center justify-center rounded-md">
          Magic Trackpad
        </div>
        <div className="h-[50px] bg-[#09090a] border border-[#222222] hover:bg-[#0f0f0f] text-[#71717a] px-3 font-lexend flex items-center justify-center rounded-md">
          Lg 2{'"'} UltraWide
        </div>
        <div className="h-[50px] bg-[#09090a] border border-[#222222] hover:bg-[#0f0f0f] text-[#71717a] px-3 font-lexend flex items-center justify-center rounded-md">
          Asus 2{'"'}
        </div>
        <div className="h-[50px] bg-[#09090a] border border-[#222222] hover:bg-[#0f0f0f] text-[#71717a] px-3 font-lexend flex items-center justify-center rounded-md">
          SonyWh 1000xm4
        </div>
        <div className="h-[50px] bg-[#09090a] border border-[#222222] hover:bg-[#0f0f0f] text-[#71717a] px-3 font-lexend flex items-center justify-center rounded-md">
          M2 Air
        </div>
        <div className="h-[50px] bg-[#09090a] border border-[#222222] hover:bg-[#0f0f0f] text-[#71717a] px-3 font-lexend flex items-center justify-center rounded-md">
          Deathadder v3 Pro
        </div>
      </div>
    </section>
  );
}

export default About;
