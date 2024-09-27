import IconArrow from "../assets/svgs/arrow.svg";
import { RiScrollToBottomFill } from "react-icons/ri";
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

  return (
    <section className="w-full mb-20">
      {/*  */}
      <div className="w-full h-full md:h-screen-padded flex flex-col justify-center pt-16 sm:pt-0">
        <div className="flex flex-col justify-center items-center">
          <ScrambleText
            text="Huseyin Samet Cikrikci"
            class_name={`font-bold text-white overflow-hidden whitespace-nowrap animate-typing text-[22px] md:text-[35px] lg:text-[60px] font-titan px-2 rounded-lg mb-5`}
          />
        </div>
        <div className="flex flex-col justify-center items-center relative p-0 sm:px-20 md:px-24 pb-0">
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
              <div className="w-[300px] md:w-[404px] h-full font-fira text-[14px] sm:text-[16px] md:text-left flex flex-col gap-4 text-ellipsis overflow-auto">
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

      {/* <div className="h-screen-padded flex flex-col gap-10 justify-center items-center"></div> */}

      {/*  */}
      <div className="h-screen-padded flex flex-col gap-10 justify-center items-center">
        <Card items={workList} title="Work" />
        <Card items={educationList} title="Education" />
      </div>
      {/*  */}

      <div className="flex flex-wrap gap-[45px] justify-center p-5 md:px-[30%] text-[12px] sm:text-[14px]">
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
