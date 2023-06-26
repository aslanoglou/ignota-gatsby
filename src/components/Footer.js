import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {useInView} from "react-intersection-observer";
import {Link} from "gatsby";

const Footer = () => {
    const { ref, inView } = useInView({triggerOnce: true});
    const currentYear = new Date().getFullYear();
    return (
    <footer ref={ref} className="py-10 2xl:container 2xl:mx-auto overflow-hidden">
        <div className="flex flex-col justify-between lg:flex-row data-[inviewport=false]:invisible data-[inviewport=false]:opacity-0 data-[inviewport=false]:tranform data-[inviewport=false]:translate-y-20 transition ease-in-out duration-700 delay-300" data-inviewport={inView.toString()}>
            <Link to="/">
                <StaticImage src="../images/logo.svg" alt="Ignota" className="inline-block"></StaticImage>
            </Link>
            <ul className="flex justify-between flex-wrap grid-cols-3 lg:grid lg:grid-flow-col gap-6 text-sm mt-6 lg:mt-0">
                <li><Link className="hover:text-ignota-hover" to="">Terms of use</Link></li>
                <li><Link className="hover:text-ignota-hover" to="">Personal data</Link></li>
                <li><Link className="hover:text-ignota-hover" to="">Cookie policy</Link></li>
                <li className="basis-full lg:basis-auto before:content-none lg:before:content-[''] before:w-0 before:border-l before:border-l-ignota-white before:mr-6">
                    Copyright &copy; {currentYear} ignota.io
                </li>
            </ul>
        </div>
    </footer>
    )
}

export default Footer;