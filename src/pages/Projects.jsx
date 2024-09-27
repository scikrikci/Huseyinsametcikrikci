import { FaPlus } from "react-icons/fa";
import { useState } from "react";

function Projects() {
  const items = [
    {
      text: "Xpath To Css Vue3",
      techs: ["Vue3"],
      git: "https://github.com/scikrikci/xpath-to-css-vue3",
      page: "https://xpath-to-css-vue3.vercel.app/",
    },
  ];

  const [openModals, setOpenModals] = useState(Array(items.length).fill(false));

  const handleMouseEnter = (index) => {
    setOpenModals((prev) => {
      const newModals = [...prev];
      newModals[index] = true;
      return newModals;
    });
  };

  const handleMouseLeave = (index) => {
    setOpenModals((prev) => {
      const newModals = [...prev];
      newModals[index] = false;
      return newModals;
    });
  };

  return (
    <section className="flex flex-col items-center my-32 mt-16 gap-[60px]">
      <h1 className="font-fira text-xl font-bold">My Projects</h1>
      {items.map((item, index) => (
        <div
          key={item.text}
          className="relative w-[320px] sm:w-[600px] flex flex-col border-2 rounded-lg border-gray-400 transition-colors duration-300 hover:bg-custom-b-blue"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
          <div className="w-full p-0 px-2 sm:p-2 flex gap-2 justify-center items-center border-b-2 border-gray-400">
            <div className="w-[8px] h-[8px] bg-red-700 rounded-full"></div>
            <div className="w-[8px] h-[8px] bg-[#a16207] rounded-full"></div>
            <div className="w-[8px] h-[8px] bg-green-700 rounded-full"></div>
            <div className="grow"></div>
            <div className="text-xl font-nanum-pen text-center">2024</div>
            <FaPlus className="size-[8px] mx-2" />
          </div>
          <div
            className="p-2 sm:p-4 font-nanum-pen"
            style={{ fontWeight: 400, fontSize: 24 }}
          >
            {item.text}
            <div className="text-blue text-sm sm:text-xl">
              {item.techs.map((tech, techIndex) => (
                <span key={techIndex}>
                  {tech}
                  {techIndex < item.techs.length - 1 ? " - " : ""}
                </span>
              ))}
            </div>
          </div>
          <div
            className={`${openModals[index] ? "scale-100" : "scale-0"} 
                        absolute -bottom-6 left-1/2 transform -translate-x-1/2 transition-transform duration-500 ease-out origin-bottom flex gap-5`}
          >
            <a
              href={item.git}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-lg bg-white text-black border-gray-400 border font-nanum-pen text-xl hover:bg-custom-b-blue hover:text-white -rotate-6"
            >
              code
            </a>
            <a
              href={item.page}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-lg bg-white text-black border-gray-400 border font-nanum-pen text-xl hover:bg-custom-b-blue hover:text-white rotate-[24deg]"
            >
              page
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;
