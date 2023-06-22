import React from "react";
import IgnotaLogo from "../images/logo.svg";
import {Link} from "gatsby";

const Header = () => {
    return (
            <header className="2xl:container 2xl:mx-auto py-8 md:mb-[124px]" >
                <Link to="/">
                    <img src={IgnotaLogo} className="inline-block" alt="Ignota" />
                </Link>
            </header>
    )
}
export default Header;