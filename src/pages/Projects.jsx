import { FaPlus } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
// import { NavLink } from 'react-router-dom';

function Projects() {
    const [showDiv, setShowDiv] = useState(false);

    const items = [
        {
            id: 1,
            text: 'Git Abort Merge - How to cancel a merge in Git',
            path: '/blog/abort-merge',
            techs: ['React', 'Tailwind']
        },
    ]

    useEffect(() => {
        if (items.length > 4) {
            setShowDiv(true);
        } else {
            setShowDiv(false);
        }
    }, []);

    return (
        <section className="flex flex-col items-center mt-32 pb-10 gap-[28px]">

            <MdKeyboardArrowDown className={`absolute size-6 opacity-50 top-20  left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${showDiv ? 'block' : 'hidden'}`} />

            {items.map(item => (
                <Link
                    key={item.id}
                    to={item.path}
                    className="w-[600px] flex flex-col border-2 rounded-lg border-gray-300 transition-colors duration-300 hover:bg-custom-b-blue"
                >
                    <div className="w-full p-2 flex gap-2 justify-center items-center border-b-2">
                        <div className="w-[8px] h-[8px] bg-red-700 rounded-full"></div>
                        <div className="w-[8px] h-[8px] bg-yellow-500 rounded-full"></div>
                        <div className="w-[8px] h-[8px] bg-green-700 rounded-full"></div>
                        <div className="grow"></div>
                        <div className="text-xl font-nanum-pen text-center">2024</div>
                        <FaPlus className="size-[8px] mx-2" />
                    </div>
                    <div className="p-4 font-nanum-pen" style={{ fontWeight: 400, fontSize: 24 }}>
                        {item.text}
                        <div className="text-blue">
                            {item.techs.map((tech, index) => (
                                <span key={index}>
                                    {tech}{index < item.techs.length - 1 ? ' - ' : ''}
                                </span>
                            ))}
                        </div>
                    </div>
                </Link>
            ))}

            {/* 



*/}
        </section>

    );
}

export default Projects;