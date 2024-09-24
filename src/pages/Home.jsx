import ScrambleText from "../components/Scramble";

function Home() {
    const name = "👋 Huseyin Samet Cikrikci";
    return (
        <section className='flex flex-col justify-evenly p-0 sm:p-20 p-t-5 h-full'>
            <div className="flex flex-col justify-center items-center">
                <ScrambleText text={name} class_name={`font-bold text-white overflow-hidden whitespace-nowrap animate-typing text-[22px] md:text-[35px] lg:text-[60px] font-titan bg-[rgba(14,16,17,0.5)] px-2 rounded-lg`} />
            </div>

            <div className="hidden md:block w-fit pl-0 md:pl-10 lg:pl-20">
                <a href="https://github.com/scikrikci" target="_blank" rel="noopener noreferrer" className="w-fit">
                    <p className="text-green-600">{'//'} you can also visit my Github page</p>
                    <p>
                        <span className="text-custom-keyword">const </span>
                        <span className="text-custom-variable">githubLink</span> = <span className="text-custom-string">{'"https://github.com/scikrikci"'}</span>
                    </p>
                </a>
            </div>


        </section>
    );
}

export default Home;
