import React from "react";

const HomepageHero = () => {
    return(
        <section className="hero mb-[54px] md:mb-[96px] h-[340px] md:h-[500px]  flex items-center relative group">
            <h1 className="flex cursor-default flex-col w-full text-[10vw] sm:text-[5.2vw] md:text-[8vw] xl:text-[126px] 2xl:text-[136px] leading-xs max-w-none sm:max-w-[50%] md:max-w-none z-10">
                <span>Connected experiences</span>
                <span className="md:text-end">that fuel growth</span>
            </h1>
            <div className="hero__boxes absolute top-0 2xl:left-0 md:-left-[36px] -left-[1rem] h-full w-[100vw] flex">
                <span className="h-full block bg-ignota-purple w-5/12 md:rounded-r-[160px] rounded-r-[110px] 2xl:rounded-l-[160px] flex-auto sm:w-7/12 group-hover:rounded-r-[360px] group-hover:2xl:rounded-[360px] group-hover:w-6/12 transition-all ease-in-out duration-1500"></span>
                <span className="h-full block bg-ignota-orange  flex-auto w-7/12 sm:w-4/12 ml-4 group-hover:w-6/12 group-hover:rounded-l-[80px] group-hover:2xl:rounded-l-[160px] rounded-l-[360px] transition-all ease-in-out duration-1500"></span>
            </div>
        </section>
    )
}
export default HomepageHero;