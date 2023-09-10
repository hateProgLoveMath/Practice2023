import './Footer.sass'

import {
    AiFillGithub
} from "react-icons/ai";

const Footer = () => {

    return (
        <div className="footer">
            <span className="">
                <a href="https://github.com/Kelrogg">
                    <AiFillGithub className="" />
                </a>
            </span>
            <span >By SBH 2023</span>
        </div>
    )
}

export default Footer;