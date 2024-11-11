import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-block">
        <div className="banner-overlay">
          <h1>lET&apos;S CREATE SOMETHING BEAUTIFUL</h1>
          <Link>View Our Collections</Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
