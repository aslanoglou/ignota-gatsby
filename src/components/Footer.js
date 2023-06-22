import React from "react";
import {useInView} from "react-intersection-observer";
import {Link} from "gatsby";
import IgnotaLogo from "../images/logo.svg";

const Footer = () => {
    const { ref, inView } = useInView({triggerOnce: true});
    return (
    <footer ref={ref} className="py-10 2xl:container 2xl:mx-auto overflow-hidden">
        <div className="flex flex-col justify-between lg:flex-row data-[inviewport=false]:invisible data-[inviewport=false]:opacity-0 data-[inviewport=false]:tranform data-[inviewport=false]:translate-y-20 transition ease-in-out duration-300 delay-100" data-inviewport={inView.toString()}>
            <Link to="/">
                <img width="93" height="25" src={IgnotaLogo} className="inline-block" alt="Ignota" />
            </Link>
            <ul className="flex justify-between flex-wrap grid-cols-3 lg:grid lg:grid-flow-col gap-6 text-sm mt-6 lg:mt-0">
                <li><Link className="hover:text-ignota-hover" to="">Terms of use</Link></li>
                <li><Link className="hover:text-ignota-hover" to="">Personal data</Link></li>
                <li><Link className="hover:text-ignota-hover" to="">Cookie policy</Link></li>
                <li className="basis-full lg:basis-auto before:content-none lg:before:content-[''] before:w-0 before:border-l before:border-l-ignota-white before:mr-6">
                    Copyright © 2023 ignota.io
                </li>
            </ul>
        </div>
    </footer>
    )
}

export default Footer;