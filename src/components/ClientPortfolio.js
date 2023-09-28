import React from "react";
// import { StaticImage } from "gatsby-plugin-image"
import Dei from "../images/logo-dei.svg"
import Alpha from "../images/logo-alpha.svg"
import Ergo from "../images/logo-ergo.svg"
import Deddie from "../images/logo-deddie.svg"
import Metro from "../images/logo-metro.svg"
import Sport24 from "../images/logo-sport24.svg"
import Flexfin from "../images/logo-flexfin.svg"
import Trainme from "../images/logo-trainme.svg"
import Oseven from "../images/logo-oseven.svg"
import { useInView } from "react-intersection-observer";


const ClientPortfolio =() =>{
    const { ref, inView } = useInView({triggerOnce: true});
    return(
        <section ref={ref}>
            <div className="md:mb-[256px] mb-[181px] grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 data-[inviewport=false]:invisible data-[inviewport=false]:opacity-0 data-[inviewport=false]:tranform data-[inviewport=false]:translate-y-20 transition ease-in-out duration-700 delay-300" data-inviewport={inView.toString()}>
                <h2 className="text-lg md:text-[40px] leading-sm relative pt-12 font-NeueMachina text-ignota-white before:content-[''] before:block before:top-0 before:absolute data-[inviewport=false]:before:w-0 before:border-t before:border-t-ignota-white data-[inviewport=true]:before:w-[80px] transition before:ease-in-out before:duration-700 before:delay-1000"
                    data-inviewport={inView.toString()}>
                    Our Partners
                </h2>
                <div className="md:pt-12">
                    <ul className="grid gap-12 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
                        <li><Dei width={160} height={69} alt="DEH"></Dei></li>
                        <li><Alpha width={161} height={68} alt="ALPHA BANK"></Alpha></li>
                        <li><Ergo width={160} height={68} alt="ERGO"></Ergo></li>
                        <li><Deddie width={160} height={68} alt="DEDDIE"></Deddie></li>
                        <li><Metro width={160} height={68} alt="METRO CASH & CARRY"></Metro></li>
                        <li><Sport24 width={160} height={68} alt="SPORT24"></Sport24></li>
                        <li><Flexfin width={160} height={68} alt="Flexfin"></Flexfin></li>
                        <li><Trainme  width={160} height={68} alt="trainme"></Trainme></li>
                        <li><Oseven width={160} height={68} alt="OSEVEN"></Oseven></li>
                    </ul>
                </div>
            </div>
        </section>

    )
}

export default ClientPortfolio;