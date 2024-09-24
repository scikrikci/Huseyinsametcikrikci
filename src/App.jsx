import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';

import AbortMerge from './pages/AbortMerge';
import NavBar from './components/NavBar'

import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Bookmark from './pages/Bookmark';
import NotFound from './pages/NotFound';

import List from './components/List'

import Logo from './assets/svgs/logo.svg'
import FrameLogo from './assets/svgs/frame_logo.svg'

import './App.css'

function App() {
  const ellipseRightStyle = "fixed rounded-full w-[160px] md:w-[250px] h-[160px] md:h-[250px] left-[15%] top-[15%] blur-[50px] bg-gradient-to-b from-[#363CCE] to-[#3DCDB3] -z-10";

  const ellipseLeftStyle = "fixed rounded-full w-[160px] md:w-[250px] h-[160px] md:h-[250px] right-[15%] bottom-[15%] blur-[50px] bg-gradient-to-b from-[#CC7AC4] to-[#EB872A] -z-10";

  return (
    <Router>
      <div className='relative h-screen flex flex-col p-10 select-none'>
        <div className='flex flex-col h-full  rounded-xl'>

          <div className='flex justify-center items-center absolute top left gap-5'>
            <img src={Logo} className=' size-[32px]' />
            <div className='flex justify-center items-center gap-1 bg-[#173729] rounded-[15px] pr-2'>

              <div className='relative w-[18px] h-[18px]'>
                <div className='absolute inset-0 flex items-center justify-center'>
                  <div className='w-[18px] h-[18px] rounded-full bg-[#188655] animate-pulse'></div>
                </div>
                <div className='absolute inset-0 flex items-center justify-center'>
                  <div className='w-[7px] h-[7px] rounded-full bg-[#28c780]  animate-pulse'></div>
                </div>
              </div>

              <p className='text-[10px] text-[#30a470a9] font-bold'>AVAILABLE FOR WORK</p>
            </div>
          </div>

          <NavBar />

          {/* <div className={ellipseRightStyle}></div>
          <div className={ellipseLeftStyle}></div> */}

          {/* ===================================================== */}

          <div className="relative overflow-y-scroll content grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/abort-merge" element={<AbortMerge />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/bookmark" element={<Bookmark />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
        <img src={FrameLogo} className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-40' />
      </div>
    </Router>
  );
}

export default App;