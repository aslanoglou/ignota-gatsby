import React from "react";
import IgnotaLogo from "../images/logo.svg";

const Header = (props) => {
    return (
            <header className="2xl:container 2xl:mx-auto py-8 md:mb-[124px]" >
                <a href="/">
                    <img src={IgnotaLogo} className="inline-block" alt="Ignota" />
                </a>
            </header>
    )
}
export default Header;