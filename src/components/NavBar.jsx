import { NavLink } from "react-router-dom";
import { FaCode } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";
import { PiPaintBrushDuotone } from "react-icons/pi";

function NavBar() {
  const navItems = [
    {
      to: "/",
      icon: <FaCode className="size-[25px]" />,
      label: "H!",
      bgColor: "hover:bg-[#f69851]",
    },
    {
      to: "/projects",
      icon: <PiPaintBrushDuotone className="size-[25px]" />,
      label: "Projects",
      bgColor: "hover:bg-rose-400",
    },
  ];

  return (
    <div className="flex gap-[10px] justify-center items-center fixed bottom-7 left-0 right-0 z-10">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `relative group rounded-[12px] ${isActive ? "" : ""}`
          }
        >
          <div
            className={`${item.bgColor} w-[50px] h-[50px] rounded-[12px] bg-[rgba(14,16,17,0.5)] border-2 border-[#0E1011] backdrop-blur-[2px] transform transition-transform duration-200 ease-in-out group-hover:scale-110 group-active:scale-90 group-hover:border-white sm:block hidden`}
          >
            {/* SVG ikonun kendisi */}
            <span className="w-full h-full flex justify-center items-center">
              {item.icon}
            </span>
          </div>

          <div className="hidden sm:block absolute bottom-[58px] left-1/2 transform -translate-x-1/2 translate-y-2 opacity-0 px-2 py-1 text-[13px] text-[rgba(255,255,255,0.4)] transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 font-titan">
            {item.label}
          </div>

          <div
            className={`${item.bgColor} block sm:hidden p-4 items-center rounded-[12px] bg-[rgba(14,16,17,0.5)] border-2 border-[#0E1011] backdrop-blur-[2px] transform transition-transform duration-200 ease-in-out group-hover:scale-110 group-active:scale-90 group-hover:border-white`}
          >
            <p className="text-sm">{item.label}</p>
          </div>
        </NavLink>
      ))}
      <a href="mailto:samet0tx@gmail.com" className="relative group">
        <div className="w-[50px] h-[50px] flex justify-center items-center rounded-[12px] bg-[rgba(14,16,17,0.5)] border-2 border-[#0E1011] backdrop-blur-[2px] transform transition-transform duration-200 ease-in-out group-hover:scale-110 group-active:scale-90 group-hover:border-white">
          <LuMail className="size-[25px]" />
        </div>
      </a>
    </div>
  );
}

export default NavBar;
