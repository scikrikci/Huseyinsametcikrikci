import { NavLink } from 'react-router-dom';
import { FaCode } from "react-icons/fa6";
import { SiAiqfome } from "react-icons/si";
import { LuMail } from "react-icons/lu";
import { PiPaintBrushDuotone } from "react-icons/pi";


function NavBar() {
    const navItems = [
        { to: '/', icon: <FaCode className='size-[25px]' />, label: 'H!', bgColor: 'hover:bg-[#f69851]' },
        { to: '/about', icon: <SiAiqfome className='size-[25px]' />, label: 'Me', bgColor: 'hover:bg-[#9a63f5]' },
        { to: '/projects', icon: <PiPaintBrushDuotone className='size-[25px]' />, label: 'Projects', bgColor: 'hover:bg-rose-400' },
        { to: '/contact', icon: <LuMail className='size-[25px]' />, label: 'Contact' },
    ];
    return (
        <div className='flex gap-[10px] justify-center items-center fixed bottom-7 left-0 right-0 z-10'>
            {navItems.map((item) => (
                <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                        `relative group rounded-[12px] ${isActive ? 'border ' : ''}`
                    }
                >
                    <div className={`${item.bgColor} w-[50px] h-[50px] flex justify-center items-center rounded-[12px] bg-[rgba(14,16,17,0.5)] border-2 border-[#0E1011] backdrop-blur-[2px] transform transition-transform duration-200 ease-in-out group-hover:scale-110 group-active:scale-90 group-hover:border-white`}>
                        {item.icon}
                    </div>
                    <div className='absolute bottom-[58px] left-1/2 transform -translate-x-1/2 translate-y-2 opacity-0 px-2 py-1 text-[13px] text-[rgba(255,255,255,0.4)] transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 font-titan'>
                        {item.label}
                    </div>
                    <div className='absolute w-[24px] h-[4px] rounded-[2px] bg-[#353535] -top-[10px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity'></div>
                </NavLink>
            ))}
        </div>
    )
}

export default NavBar;