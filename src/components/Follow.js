import React from "react";
import {useInView} from "react-intersection-observer";

const Follow = () => {
    const { ref, inView } = useInView({triggerOnce: true});
    return (
        <div ref={ref}>
            <div data-inviewport={inView.toString()} className="data-[inviewport=false]:invisible data-[inviewport=false]:opacity-0 data-[inviewport=false]:tranform data-[inviewport=false]:translate-y-20 transition ease-in-out duration-300 delay-100">
                <h2 className="text-lg md:text-[40px] mb-6 leading-sm relative pt-12 font-NeueMachina text-ignota-white before:content-[''] before:block before:top-0 before:absolute data-[inviewport=false]:before:w-0 before:border-t before:border-t-ignota-white data-[inviewport=true]:before:w-[80px] transition before:ease-in-out before:duration-300 before:delay-700"
                    data-inviewport={inView.toString()}>
                    Follow us
                </h2>
                <ul className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                    <li>
                        <a className="flex lg:flex-col items-center lg:items-start hover:text-ignota-hover" href="https://www.facebook.com/ignota.io"
                           target="_blank" rel="noreferrer">
                            <svg className="mr-3" fill="none" height="16" viewBox="0 0 17 16" width="17"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g >
                                    <rect fill="currentColor" height="1" width="14" x="2.49951"/>
                                    <rect fill="currentColor" height="1" transform="rotate(-90 15.4995 14)" width="14"
                                          x="15.4995" y="14"/>
                                    <path d="M15.4331 1.06665L0.999512 15.5002" stroke="currentcolor"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_1912_989">
                                        <rect fill="currentColor" height="16" transform="translate(0.5)" width="16"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <span>Facebook: @ignota.io</span>
                        </a>
                    </li>
                    <li>
                        <a className="flex lg:flex-col items-center lg:items-start hover:text-ignota-hover" href="https://www.instagram.com/ignota.io/"
                           target="_blank" rel="noreferrer">
                            <svg className="mr-3" fill="none" height="16" viewBox="0 0 17 16" width="17"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g >
                                    <rect fill="currentColor" height="1" width="14" x="2.49951"/>
                                    <rect fill="currentColor" height="1" transform="rotate(-90 15.4995 14)" width="14"
                                          x="15.4995" y="14"/>
                                    <path d="M15.4331 1.06665L0.999512 15.5002" stroke="currentcolor"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_1912_989">
                                        <rect fill="currentColor" height="16" transform="translate(0.5)" width="16"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <span>Instagram: @ignota.io</span></a>
                    </li>
                    <li>
                        <a className="flex lg:flex-col items-center lg:items-start hover:text-ignota-hover" href="https://www.linkedin.com/company/ignota/about/"
                           target="_blank" rel="noreferrer">
                            <svg className="mr-3" fill="none" height="16" viewBox="0 0 17 16" width="17"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g >
                                    <rect fill="currentColor" height="1" width="14" x="2.49951"/>
                                    <rect fill="currentColor" height="1" transform="rotate(-90 15.4995 14)" width="14"
                                          x="15.4995" y="14"/>
                                    <path d="M15.4331 1.06665L0.999512 15.5002" stroke="currentcolor"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_1912_989">
                                        <rect fill="currentColor" height="16" transform="translate(0.5)" width="16"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <span>Linkedin: ignota.io</span></a>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Follow;