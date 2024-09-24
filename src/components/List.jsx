// function List() {

//     const items = [
//         { title: 'Digitastic', desc: 'Web scraper', date: '2021 - 2023' },
//         { title: 'hubx', desc: 'Frontend Developer', date: '2023 - 2025' },
//     ]
//     return (
//         <section className='flex flex-col justify-evenly items-center p-20 h-full'>
//             <div className="flex flex-col gap-5">
//                 <div className="size-[20px] text-[#71717a] font-lexend font-bold">Work</div>

//                 <div className="w-[500px] p-2 bg-[#09090a] rounded-xl border border-[#222222]">
//                     {items.map((item, index) => (
//                         <div
//                             key={index}
//                             className="relative h-[80px] transition duration-300 ease-in-out hover:bg-[#0f0f0f] rounded-md px-[16px] py-[20px] flex flex-col justify-between box"
//                         >
//                             <div className="font-lexend text-[14px]">
//                                 {item.title}
//                             </div>
//                             <div className="flex justify-between items-center">
//                                 <span className="font-lexend text-[14px] text-[#71717a]">{item.desc}</span>
//                                 <span className="font-lexend text-[14px] text-[#71717a]">{item.date}</span>
//                             </div>
//                             <div
//                                 className={`stik absolute h-[2px] rounded-md w-[470px] bg-[#0f0f0f] bottom-0 left-1/2 -translate-x-1/2 ${index === items.length - 1 ? 'hidden' : ''}`}
//                             ></div>
//                         </div>
//                     ))}

//                 </div>
//             </div>
//         </section>
//     );
// }

// export default List;


import React from 'react';

class List extends React.Component {
    render() {
        const { items } = this.props; // [{ title: '...', desc: '...', date: '... - ...' },]
        const { title } = this.props; // liste basligi gelicek

        return (
            <section className='flex flex-col justify-evenly items-center'>
                <div className="flex flex-col gap-5">
                    <div className="size-[20px] text-[#71717a] font-lexend font-bold">{title}</div>

                    <div className="w-[500px] p-2 bg-[#09090a] rounded-xl border border-[#222222]">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="relative h-[80px] transition duration-300 ease-in-out hover:bg-[#0f0f0f] rounded-md px-[16px] py-[20px] flex flex-col justify-between box"
                            >
                                <div className="font-lexend text-[14px]">
                                    {item.title}
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="font-lexend text-[14px] text-[#71717a]">{item.desc}</span>
                                    <span className="font-lexend text-[14px] text-[#71717a]">{item.date}</span>
                                </div>
                                <div
                                    className={`stik absolute h-[2px] rounded-md w-[470px] bg-[#0f0f0f] bottom-0 left-1/2 -translate-x-1/2 ${index === items.length - 1 ? 'hidden' : ''}`}
                                ></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default List;
