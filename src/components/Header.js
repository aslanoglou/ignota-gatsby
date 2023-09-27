import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {Link} from "gatsby";

const Header = () => {
    return (
            <header className="2xl:container 2xl:mx-auto py-8 md:mb-[66px]" >
                <Link to="/">
                    <StaticImage src="../images/logo.svg" width={154} height={42} alt="Ignota"></StaticImage>
                </Link>
            </header>
    )
}
export default Header;