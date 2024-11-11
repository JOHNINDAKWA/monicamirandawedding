import Faqs from "../../components/Faqs/Faqs";
import Timeline from "../../components/Timeline/Timeline";
import "./Weddings.css";
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import Sta from './../../components/Sta/Sta';

const Weddings = () => {
  const images = [
    "https://static.showit.co/400/TY9eClgcQ1OtOiWDh6Dctg/210288/08_25_23_taylor_and_kirill_intimate_wedding_in_arlington_heights_monicamirandaphotography_41_of_42.jpg",
    "https://static.showit.co/400/DU1funO-RD-j2gr_T8lncA/210288/dsc03968.jpg",
    "https://static.showit.co/400/kS4dnzCnEmgeTDZG-fzfWQ/210288/2023_intimate_summer_wedding_at_family_estate_on_golf_course_monicamirandaphotography_8_of_10_websize.jpg",
    "https://static.showit.co/400/hCZBecpGVZsDJ0bQKFnpkQ/210288/dsc04340.jpg",
    "https://static.showit.co/400/PAOt9Q_7lonc_Zd5ynpZkA/210288/28675_23.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <div>
      <div className="wedding-banner-block">
        <img
          src="https://static.showit.co/1600/XdBVJnSsDiiF99uPI514XQ/210288/monica_miranda_wedding_and_engagement_photographer-30.jpg"
          alt=""
        />

        <div className="wedding-banner-overlay">
          <h1>YOUR LOVE STORY</h1>
          <p>
            At Monica Miranda Photo & Films, we see every click of the camera as
            a moment that encapsulates your heart and the essence of your love
            story. For us, photography is about much more than just beautiful
            images; it’s about crafting a genuine connection with you and
            celebrating your unique legacy. We’re here to document your journey
            with artistry and authenticity, ensuring that every detail reflects
            your vision and style as you embark on this incredible chapter
            together.
          </p>
        </div>
      </div>

      <div className="wedding-approach">
        <div className="wedding-approach-top">
          <div className="wedding-approach-top-left">
            <img
              src="https://static.showit.co/400/jSoCi1RV_rKMFUZyB2v8Ag/210288/2022_10_15_a_and_c_wedding_45_of_110_websize.jpg"
              alt=""
            />
          </div>
          <div className="wedding-approach-top-right">
            <img
              src={images[currentIndex]}
              alt={`Wedding Slide ${currentIndex + 1}`}
            />
          </div>
        </div>

        <div className="wedding-approach-bottom">
          <h2>
            Monica Miranda Photo & Films takes on a limited number of up to 15
            weddings each year to ensure that every couple receives a truly
            bespoke experience
          </h2>
          <p>
            At Monica Miranda Photo & Films, we believe that your wedding day is
            one of the most significant moments in your life, and we’re
            dedicated to capturing it in a way that feels as extraordinary as
            the love you share. With a commitment to offering a truly bespoke
            experience, we take on a limited number of up to 15 weddings each
            year, allowing us to invest our time and creativity into
            understanding your unique story.
          </p>

          <div className="wedding-approach-bottom-content">
            <h1>OUR Appoach</h1>
            <h4>Personal Connection</h4>
            <p>
              From our first conversation, our focus is on you. We take the time
              to learn about your journey, your style, and what makes your love
              story special. This connection allows us to capture the
              authenticity and emotion of your day, ensuring that every
              photograph resonates with your vision.
            </p>
            <h4>Artistry & Elegance</h4>
            <p>
              Our style combines timeless artistry with a modern touch,
              producing images that reflect the beauty and joy of your wedding.
              We blend candid moments with thoughtfully composed shots, creating
              a stunning visual narrative that you will cherish for a lifetime.
            </p>
            <h4>Customized Experience</h4>
            <p>
              
              Each wedding is unique, and we tailor our services to fit your
              specific needs. Whether you’re planning an intimate gathering or a
              grand celebration, we are committed to documenting every detail in
              a way that feels authentic to you.
            </p>

            <h1>THE INVESTMENT</h1>
            <p>
              Investing in your wedding photography is about more than just
              securing beautiful images; it’s about preserving your legacy.{" "}
            </p>
            <p>
              At Monica Miranda Photo & Films, we are committed to creating
              timeless memories that honor your unique love story. If you’re
              ready to take the next step and learn more about how we can
              capture the beauty of your wedding day, we invite you to reach out
              and begin the conversation. Let’s create something beautiful
              together!
            </p>
          </div>
        </div>
      </div>


      <div className="wedding-banner-block wedding-banner-block_2">
        <img
          src="https://static.showit.co/1600/_iPGwX7VIqNppKPynAOJZg/210288/monicamirandaweddingphotographer_chicago-16.jpg"
          alt=""
        />

        <div className="wedding-banner-overlay ">
          <h2>What You Can Expect</h2>

          <h3> <strong>Pre-Wedding Consultation: {" "}</strong>We’ll meet to discuss your vision, preferences, and any special details you want us to capture.</h3>
          <h3> <strong>Comprehensive Coverage: {" "}</strong>Our full-day photography and videography service ensures that no moment goes unnoticed, from the quiet anticipation before the ceremony to the vibrant celebration at your reception.</h3>
          <h3> <strong>High-Quality Deliverables: {" "}</strong>You’ll receive a beautifully curated collection of high-resolution images, thoughtfully edited to highlight the elegance of your day..</h3>
          <h3> <strong>Sneak Peek: {" "}</strong>Enjoy a selection of stunning images shared within days of your wedding, so you can relive the joy of your celebration early on.</h3>
          <h3> <strong>Online Gallery: {" "}</strong>Access your private online gallery, where you can view, download, and share your images with family and friends.</h3>
        </div>
      </div>


      <div className="wedding-unused">
        <div className="wedding-unused-left">
          <img src="https://static.showit.co/400/AUBxtMwVur5GFY5ZXJOksQ/210288/2023_intimate_luxury_wedding_at_chicago_history_museum_monicamirandaphotography_8_of_12_websize_websize.jpg" alt="" />
        </div>

        <div className="wedding-unused-right">
          <img src="https://static.showit.co/800/krZZTzUiv36NYuoE3If_LA/210288/monicamirandaweddingphotographer_chicago-24.jpg" alt="" />
        </div>
      </div>


      <Timeline/>
     

      <Faqs/>

      <Sta/>

      
    </div>
  );
};

export default Weddings;
