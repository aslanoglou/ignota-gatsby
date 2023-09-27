import React from "react";
import { StaticImage } from "gatsby-plugin-image"
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
                        <li><StaticImage src="../images/logo-dei.svg" width={160} height={69} quality={100} placeholder="blurred" layout="fixed" alt="DEH"></StaticImage></li>
                        <li><StaticImage src="../images/logo-alpha.svg" width={161} height={68} quality={100} placeholder="blurred" layout="fixed" alt="ALPHA BANK"></StaticImage></li>
                        <li><StaticImage src="../images/logo-ergo.svg" width={160} height={68} quality={100} placeholder="blurred" layout="fixed" alt="ERGO"></StaticImage></li>
                        <li><StaticImage src="../images/logo-deddie.svg" width={160} height={68} quality={100} placeholder="blurred" layout="fixed" alt="DEDDIE"></StaticImage></li>
                        <li><StaticImage src="../images/logo-metro.svg" width={160} height={68} quality={100} placeholder="blurred" layout="fixed" alt="METRO CASH & CARRY"></StaticImage></li>
                        <li><StaticImage src="../images/logo-sport24.svg" width={160} height={68} quality={100} placeholder="blurred" layout="fixed" alt="SPORT24"></StaticImage></li>
                        <li><StaticImage src="../images/logo-flexfin.svg" width={160} height={68} quality={100} placeholder="blurred" layout="fixed" alt="Flexfin"></StaticImage></li>
                        <li><StaticImage src="../images/logo-trainme.svg" width={160} height={68} quality={100} placeholder="blurred" layout="fixed" alt="trainme"></StaticImage></li>
                        <li><StaticImage src="../images/logo-oseven.svg" width={160} height={68} quality={100} placeholder="blurred" layout="fixed" alt="OSEVEN"></StaticImage></li>
                    </ul>
                </div>
            </div>
        </section>

    )
}

export default ClientPortfolio;