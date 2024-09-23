import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import { SiLogseq } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        {/* <a href="https://www.linkedin.com/in/yo" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a> */}
        <a href="https://github.com/xuf-95" target="_blank">
          <FaGithub />
        </a>
        <a href="https://x.com/home" target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://xuf-95.github.io/logseq-notes-repo/#/page/contents" target="_blank" rel="noopener noreferrer">
          <SiLogseq />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
