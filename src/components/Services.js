import React from "react";
import { useInView } from "react-intersection-observer";
import EnvisionIcon from "../images/envision-icon.svg";
import CraftIcon from "../images/craft-icon.svg";
import OptimizeIcon from "../images/optimize-icon.svg";
const Services = () =>{
    const { ref, inView } = useInView({triggerOnce: true});
    return(
        <section ref={ref}>
            <div className="md:mb-[256px] mb-[181px] cursor-default data-[inviewport=false]:invisible data-[inviewport=false]:opacity-0 data-[inviewport=false]:tranform data-[inviewport=false]:translate-y-14 transition ease-in-out duration-300 delay-100" data-inviewport={inView.toString()}>
                <h2 className="text-lg md:text-[40px] leading-sm relative pt-12 mb-[50px] font-NeueMachina text-ignota-white before:content-[''] before:block before:top-0 before:absolute data-[inviewport=false]:before:w-0 before:border-t before:border-t-ignota-white data-[inviewport=true]:before:w-[80px] transition before:ease-in-out before:duration-300 before:delay-700"
                    data-inviewport={inView.toString()} >
                    Our services
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                    <div>
                        <img src={EnvisionIcon} alt="Envision"/>
                        <h3 className="relative font-NeueMachina text-lg leading-sm pb-6 mb-6 mt-4 after:block after:absolute after:bottom-0 after:border-t after:border-t-ignota-white data-[inviewport=false]:after:w-0 data-[inviewport=true]:after:w-full transition after:ease-in-out after:duration-500 after:delay-700"
                            data-inviewport={inView.toString()}>
                            Envision
                        </h3>
                        <ul className="grid grid-flow-row gap-4 text-md">
                            <li>Product Strategy</li>
                            <li>Customer Journeys</li>
                            <li>Stakeholder Mapping</li>
                        </ul>
                    </div>
                    <div>
                        <img src={CraftIcon} alt="Craft"/>
                        <h3 className="relative font-machina text-lg leading-sm pb-6 mb-6 mt-4 after:block after:absolute after:bottom-0 after:border-t after:border-t-ignota-white data-[inviewport=false]:after:w-0 data-[inviewport=true]:after:w-full transition after:ease-in-out after:duration-500 after:delay-700"
                            data-inviewport={inView.toString()}>
                            Craft
                        </h3>
                        <ul className="grid grid-flow-row gap-4 text-md">
                            <li>Brand Design</li>
                            <li>User Experience</li>
                            <li>Application Development</li>
                        </ul>
                    </div>
                    <div>
                        <img src={OptimizeIcon} alt="Optimize"/>
                        <h3 className="relative font-machina text-lg leading-sm pb-6 mb-6 mt-4 after:block after:absolute after:bottom-0 after:border-t after:border-t-ignota-white data-[inviewport=false]:after:w-0 data-[inviewport=true]:after:w-full transition after:ease-in-out after:duration-500 after:delay-700"
                            data-inviewport={inView.toString()}>
                            Optimize
                        </h3>
                        <ul className="grid grid-flow-row gap-4 text-md">
                            <li>User Behavior Analysis</li>
                            <li>Customer Experience Optimization</li>
                            <li>Design Experimentation</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;