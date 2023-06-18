import React from "react";
import { useInView } from "react-intersection-observer";
import DeiIcon from "../images/logo-dei.svg";
import AlphaIcon from "../images/logo-alpha.svg";
import ErgoIcon from "../images/logo-ergo.svg";
import DeddieIcon from "../images/logo-deddie.svg";
import MetroIcon from "../images/logo-metro.svg";
import Sport24Icon from "../images/logo-sport24.svg";
import FlexfinIcon from "../images/logo-flexfin.svg";
import TrainmeIcon from "../images/logo-trainme.svg";
import OsevenIcon from "../images/logo-oseven.svg";


const ClientPortfolio =() =>{
    const { ref, inView } = useInView({triggerOnce: true});
    return(
        <section ref={ref}>
            <div className="md:mb-[256px] mb-[181px] grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 data-[inviewport=false]:invisible data-[inviewport=false]:opacity-0 data-[inviewport=false]:tranform data-[inviewport=false]:translate-y-14 transition ease-in-out duration-300 delay-100" data-inviewport={inView.toString()}>
                <h2 className="text-lg md:text-[40px] leading-sm relative pt-12 font-NeueMachina text-ignota-white before:content-[''] before:block before:top-0 before:absolute data-[inviewport=false]:before:w-0 before:border-t before:border-t-ignota-white data-[inviewport=true]:before:w-[80px] transition before:ease-in-out before:duration-300 before:delay-700"
                    data-inviewport={inView.toString()}>
                    Client portfolio
                </h2>
                <div className="md:pt-12">
                    <ul className="grid gap-12 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
                        <li><img alt="DEH" height="69" src={DeiIcon} width="160"/></li>
                        <li><img alt="ALPHA BANK" height="69" src={AlphaIcon} width="160"/></li>
                        <li><img alt="ERGO" height="69" src={ErgoIcon} width="160"/></li>
                        <li><img alt="DEDDIE" height="69" src={DeddieIcon} width="160"/></li>
                        <li><img alt="METRO CASH & CARRY" height="69" src={MetroIcon} width="160"/></li>
                        <li><img alt="SPORT24" height="69" src={Sport24Icon} width="160"/></li>
                        <li><img alt="Flexfin" height="69" src={FlexfinIcon} width="160"/></li>
                        <li><img alt="trainme" height="69" src={TrainmeIcon} width="160"/></li>
                        <li><img alt="OSEVEN" height="69" src={OsevenIcon} width="160"/></li>
                    </ul>
                </div>
            </div>
        </section>

    )
}

export default ClientPortfolio;