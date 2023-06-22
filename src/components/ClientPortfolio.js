import React from "react";
import { StaticImage } from "gatsby-plugin-image"
import { useInView } from "react-intersection-observer";


const ClientPortfolio =() =>{
    const { ref, inView } = useInView({triggerOnce: true});
    return(
        <section ref={ref}>
            <div className="md:mb-[256px] mb-[181px] grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 data-[inviewport=false]:invisible data-[inviewport=false]:opacity-0 data-[inviewport=false]:tranform data-[inviewport=false]:translate-y-20 transition ease-in-out duration-300 delay-100" data-inviewport={inView.toString()}>
                <h2 className="text-lg md:text-[40px] leading-sm relative pt-12 font-NeueMachina text-ignota-white before:content-[''] before:block before:top-0 before:absolute data-[inviewport=false]:before:w-0 before:border-t before:border-t-ignota-white data-[inviewport=true]:before:w-[80px] transition before:ease-in-out before:duration-300 before:delay-700"
                    data-inviewport={inView.toString()}>
                    Client portfolio
                </h2>
                <div className="md:pt-12">
                    <ul className="grid gap-12 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
                        <li><StaticImage src="../images/logo-dei.svg" alt="DEH"></StaticImage></li>
                        <li><StaticImage src="../images/logo-alpha.svg" alt="ALPHA BANK"></StaticImage></li>
                        <li><StaticImage src="../images/logo-ergo.svg" alt="ERGO"></StaticImage></li>
                        <li><StaticImage src="../images/logo-deddie.svg" alt="DEDDIE"></StaticImage></li>
                        <li><StaticImage src="../images/logo-metro.svg" alt="METRO CASH & CARRY"></StaticImage></li>
                        <li><StaticImage src="../images/logo-sport24.svg" alt="SPORT24"></StaticImage></li>
                        <li><StaticImage src="../images/logo-flexfin.svg" alt="Flexfin"></StaticImage></li>
                        <li><StaticImage src="../images/logo-trainme.svg" alt="trainme"></StaticImage></li>
                        <li><StaticImage src="../images/logo-oseven.svg" alt="OSEVEN"></StaticImage></li>
                    </ul>
                </div>
            </div>
        </section>

    )
}

export default ClientPortfolio;