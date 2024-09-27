import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";

import NavBar from "./components/NavBar";

import Logo from "./assets/svgs/logo.svg";
import FrameLogo from "./assets/svgs/frame_logo.svg";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="relative h-full flex flex-col p-5 sm:p-10 select-none">
        <img
          src={FrameLogo}
          className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-40"
        />
        <div className="flex flex-col h-full rounded-xl">
          <div className=" flex justify-center items-center fixed top left gap-5 p-2 sm:p-0 z-10">
            <img src={Logo} className=" size-[32px]" />
            <div className="flex justify-center items-center gap-1 bg-[#173729] rounded-[15px] pr-2">
              <div className="relative w-[18px] h-[18px]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[18px] h-[18px] rounded-full bg-[#188655] animate-pulse"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[7px] h-[7px] rounded-full bg-[#28c780]  animate-pulse"></div>
                </div>
              </div>

              <p className="text-[10px] text-[#30a470a9] font-fira">
                AVAILABLE FOR WORK
              </p>
            </div>
          </div>

          <NavBar />

          {/* ===================================================== */}

          <div className="relative overflow-y-scroll content grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
