import { Link } from "react-router-dom";
import "./styles/nav.scss";
import { FiYoutube } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TbBrandTelegram } from "react-icons/tb";
const Footer = () => {
  return (
    <footer>
      <div className="links">
        <Link to="/">home</Link>
        <Link to="/">articles</Link>
        <Link to="/">news</Link>
        <Link to="/">about me</Link>
      </div>
      <div className="social">
        <FiYoutube />
        <IoLogoTwitter />
        <FaFacebook />
        <FaInstagram />
        <TbBrandTelegram />
      </div>
    </footer>
  );
};

export default Footer;
