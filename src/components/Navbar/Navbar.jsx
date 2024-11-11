import { useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaPinterestP, FaFacebookF, FaTwitter, FaLinkedinIn, FaTimes } from "react-icons/fa";
import Logo from '../../assets/images/logo2.png';
import { HiOutlineBars4 } from "react-icons/hi2";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>

        <div className="nav">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/about" className="nav-item">About</Link>
          <Link to="/weddings" className="nav-item">Weddings</Link>
          <Link to="/portfolio" className="nav-item">Portfolio</Link>
          <Link to="/journals" className="nav-item">Journals</Link>
          <Link to="/contact" className="nav-item">Contact</Link>
        </div>

        {/* Mobile Menu Toggle (Hamburger) */}
        <div className="bars-icon" onClick={toggleMenu}>
        <HiOutlineBars4 />
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="close-icon" onClick={toggleMenu}>
          <FaTimes color="white" />
        </div>

        {/* Mobile Menu Items */}
        <div className="menu-items">
          <Link to="/" className="nav-item" onClick={toggleMenu}>Home</Link>
          <Link to="/about" className="nav-item" onClick={toggleMenu}>About</Link>
          <Link to="/weddings" className="nav-item" onClick={toggleMenu}>Weddings</Link>
          <Link to="/portfolio" className="nav-item" onClick={toggleMenu}>Portfolio</Link>
          <Link to="/journals" className="nav-item" onClick={toggleMenu}>Journals</Link>
          <Link to="/contact" className="nav-item" onClick={toggleMenu}>Contact</Link>
        </div>

        {/* Social Icons */}
        <div className="social-icons">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={30} color="white" /></a>
          <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer"><FaPinterestP size={30} color="white" /></a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF size={30} color="white" /></a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={30} color="white" /></a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={30} color="white" /></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
