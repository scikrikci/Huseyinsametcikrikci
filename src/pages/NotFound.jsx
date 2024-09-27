// import { MdDoNotDisturbOn } from "react-icons/md";
import { GiDeathNote } from "react-icons/gi";

import { NavLink } from "react-router-dom";

export default function NotFound() {
  const textStyle = {
    color: "#4C2C69",
  };

  return (
    <div className="flex flex-col h-full justify-center items-center select-none">
      <div className="flex text-[100px] justify-center items-center ">
        <span className="font-bold" style={textStyle}>
          4
        </span>
        <GiDeathNote className="size-32" style={textStyle} />
        <span className="font-bold" style={textStyle}>
          4
        </span>
      </div>
      <div className="font-bold">
        This Page Doesn{"'"}t exist.{" "}
        <NavLink
          key="home-link"
          to="/"
          className="text-[#c42866] cursor-pointer"
        >
          Go back home.
        </NavLink>
      </div>
    </div>
  );
}
