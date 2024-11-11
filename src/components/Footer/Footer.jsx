import "./Footer.css";
import Logo from "../../assets/images/logo2.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={Logo} alt="" />
        </div>
        <div className="socials">
          <FaInstagram className="social-link"/>
          <FaPinterestP className="social-link"/>
          <FaFacebookF className="social-link"/>
        </div>
      </div>

      <div className="footer-medium">
        <div className="quick-links">
          <div className="quick-links-left">
            <h3>HOME</h3>
            <h3>ABOUT</h3>
            <h3>PORTFOLIO</h3>
            <h3 className="special-h3">Contact <FaLongArrowAltRight className="arrow-right"/></h3>
          </div>

          <div className="quick-links-right">
            <h3>WEDDING</h3>
            <h3>JOURNAL</h3>
            <h3>FAMILIES</h3>
          </div>
        </div>

        <div className="footer-sta">
          <p>Chicago Wedding Photographer & Videographer specializing in elegant, timeless storytelling.</p>
          <Link>FOLLOW @MONICAMIRANDAPHOTOANDFILMS</Link>
        </div>
      </div>

      <div className="footer-copyright">
        <h3>© monica miranda Photo & Films 2024</h3>
        <p>Designed by @Indakwa</p>
      </div>
    </div>
  );
};

export default Footer;
