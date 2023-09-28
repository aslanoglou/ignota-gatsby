import React from "react";
import Logo from "../images/logo.svg";
import {Link} from "gatsby";

const Header = () => {
    return (
            <header className="2xl:container 2xl:mx-auto py-8 md:mb-[66px]" >
                <Link to="/">
                    <Logo width={154} height={42} alt="Ignota"></Logo>
                </Link>
            </header>
    )
}
export default Header;