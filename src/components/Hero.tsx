const Hero = () => {
    return (
        <div className="w-full h-[18.4rem] p-5 md:p-14 text-white relative md:h-[488px] hover:bg-black/45 cursor-pointer transition-colors duration-300">
            <div className="absolute inset-0 scale-x-[-1] bg-[url('/assets/hero.png')] bg-cover bg-bottom md:bg-[position:30%_70%] bg-no-repeat -z-[2]"></div>
            <div className="absolute inset-0 bg-black/40 -z-[2] pointer-events-none"></div>
            <div className="gap-2 flex flex-col justify-end h-full">
                <h2 className="text-[12px] md:text-base text-[#D7D7D7]">
                    JULY 23, 2022
                </h2>

                <h3 className="font-bold text-3xl sm:text-[40px]">
                    My new journey as a bootcamp student.
                </h3>
                <p className="text-base leading-[20px] text-[#D7D7D7]">
                    After several months of learning in the Frontend Developer
                    Career Path, I've made the big{" "}
                    <br className="hidden md:inline" /> jump over to the
                    Bootcamp to get expert code reviews of my Solo Projects
                    projects and meet
                    <br className="hidden md:inline" /> like-minded peers.
                </p>
            </div>
        </div>
    );
};

export default Hero;
