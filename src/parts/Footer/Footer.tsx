import './Footer.sass'

import {
    AiFillGithub
} from "react-icons/ai";

const Footer = () => {

  return (
    <div className="footer">
      <div className="links">
        <a href="https://github.com/Kelrogg">
          <AiFillGithub className="" />
        </a>
        <div >By SBH 2023</div>
      </div>
    </div>
  )
}

export default Footer;