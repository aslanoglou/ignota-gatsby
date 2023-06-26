import React from "react";
import Arrow from "../images/arrow-top-right.svg";
import {useInView} from "react-intersection-observer";

const BehancePortfolio = () => {
    const { ref, inView } = useInView({triggerOnce: true});
    return (
        <div ref={ref}>
            <div data-inviewport={inView.toString()} className="data-[inviewport=false]:invisible data-[inviewport=false]:opacity-0 data-[inviewport=false]:tranform data-[inviewport=false]:translate-y-20 transition ease-in-out duration-700 delay-300">
                <h2 className="text-lg md:text-[40px] mb-6 leading-sm relative pt-12 font-NeueMachina text-ignota-white before:content-[''] before:block before:top-0 before:absolute data-[inviewport=false]:before:w-0 before:border-t before:border-t-ignota-white data-[inviewport=true]:before:w-[80px] transition before:ease-in-out before:duration-700 before:delay-1000"
                    data-inviewport={inView.toString()}>
                    View our Behance portfolio
                </h2>
                <ul className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                    <li>
                        <a className="flex lg:flex-col items-center lg:items-start hover:text-ignota-hover" href="https://www.behance.net/ignota_io"
                           target="_blank" rel="noreferrer">
                            <Arrow className="mr-3"></Arrow>
                            <span>Behance: ignota.io</span>
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default BehancePortfolio;