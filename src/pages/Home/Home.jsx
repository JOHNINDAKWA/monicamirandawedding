import { Link } from "react-router-dom";
import "./Home.css";
import MasonryGallery from "../../components/Masonry/MasonryGallery";
import AboutHome from "../../components/AboutHome/AboutHome";
import Banner from "../../components/Banner/Banner";
import Reviews from "../../components/Reviews/Reviews";
import Sta from "../../components/Sta/Sta";

const Home = () => {
  return (
    <div>
      <div className="block">
        <video
          playsInline
          autoPlay
          loop
          muted
          data-selector="native-video"
          preload="metadata"
          poster="//jamiebeck.co/cdn/shop/files/preview_images/dfb4858a5ae44ec48e6cfecc723d5cf5.thumbnail.0000000000_small.jpg?v=1704204438"
          tabIndex="-1"
        >
          <source
            src="//jamiebeck.co/cdn/shop/videos/c/vp/dfb4858a5ae44ec48e6cfecc723d5cf5/dfb4858a5ae44ec48e6cfecc723d5cf5.HD-1080p-7.2Mbps-22630359.mp4?v=0"
            type="video/mp4"
          />
        </video>

        <div className="overlay">
          <p>
            Bungoma based wedding <br /> photography & Videography
          </p>
          <h1>Elegant, timeless Storytelling</h1>

          <h3>
            For couples who value love, intention, and authentic celebration.
          </h3>
        </div>
      </div>

      <div className="about-home">
        <img
          src="https://static.showit.co/800/lmZc5RM9_LlyAd-OdCxLkA/210288/28675_30.jpg"
          alt=""
        />

        <div className="about-home-content">
          <h2>
            Capturing the authentic, joyful moments that make your day
            unforgettable.
          </h2>
          <p className="p-1">
            Monica Miranda is a Bungoma-based wedding photographer and
            videographer, dedicated to capturing the unique beauty of your love
            story with elegance, artistry, and intention.
          </p>

          <p className="p-2">
            With a timeless, film-inspired style, we create stunning images that
            honor the heart of your wedding day—from the grand milestones to the
            quiet, intimate moments in between. Embracing your individual style,
            culture, and faith, we’re committed to preserving every cherished
            detail, allowing you to be fully present as we document your day
            with care and authenticity. Your story, captured thoughtfully, will
            be a lasting testament to the joy and love you share.
          </p>

          <div className="lks">
            <Link to="contact">Begin Your Elegant Journey</Link>
          </div>
        </div>
      </div>

      <div className="about-home-links">
        <img
          src="https://static.showit.co/200/PzClsiQpyp28N5plKesqAQ/210288/partyslate.png"
          alt=""
        />
        <img
          src="https://static.showit.co/200/XAsdFnBmgZfOGbnvCmE6MA/210288/cc2.png"
          alt=""
        />
        <img
          src="https://static.showit.co/200/Z8OF6959RW6apQcjHROxLQ/210288/k_and_k_celebrates_wedding_planning_chicago_london_lakeshore_in_love_logo.png"
          alt=""
        />
        <img
          src="https://static.showit.co/200/NFUNVZX26Zc9fe4f5PLKJA/210288/smp2.png"
          alt=""
        />
      </div>

      <div className="gallery">
        <div className="masonry-gallery">
          <MasonryGallery />
        </div>
      </div>


      <AboutHome/>

      <Banner/>

      <Reviews/>

      <Sta/>




    </div>
  );
};

export default Home;
