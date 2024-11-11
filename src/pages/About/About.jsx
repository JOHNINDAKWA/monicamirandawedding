import AboutFavorite from "../../components/AboutHome/AboutFavorite/AboutFavorite";
import "./About.css";
import Sta from "../../components/Sta/Sta"

const About = () => {
  return (
    <div className="about">
      <div className="about-banner">
        <div className="about-banner-block">
          <img
            src="https://static.showit.co/1600/nlnLRRM4TUWAGG5E0jfliA/210288/2023_milwauke_art_museum_weddings_monicamirandaphotography_1_of_2.jpg"
            alt=""
          />

          <div className="about-banner-overlay">
            <h3>ABout Monica Miranda</h3>
            <hr />
            <h1>The Heart behind the camera</h1>
          </div>
        </div>
      </div>

      <div className="about-monica">
        <div className="about-monica-img">
          <div className="monica-img">
            <img
              src="https://static.showit.co/400/rSmEEDuCQnKCUcxc9_uWog/210288/acrafedbrand-139.jpg"
              alt=""
            />
          </div>

          <p>
            Warm-hearted and inspired by the beauty of light, travel, and the
            soft, glowing colors brought to life on film.
          </p>
        </div>

        <div className="about-monica-content">
          <h2>I&apos;m Monica</h2>
          <hr />

          <p>
            My journey as a photographer began in 2018, capturing the stories I
            encountered during my travels around the world. Planning my own
            destination wedding in Ocho Rios, Jamaica, and visiting over 20
            countries allowed me to discover the joy that comes from documenting
            life’s most significant milestones.
          </p>
          <p>
            As my life evolved, so did my passion for wedding photography and
            films. Monica Miranda Photo & Films was born from my deep
            appreciation for capturing the beauty of weddings. I understand how
            fleeting these moments can be and the importance of preserving them.
            My passion lies in documenting the eleimport Sta from ;
gance and joy of wedding
            celebrations, ensuring that each couple&apos;s unique love story is
            beautifully recorded for generations to cherish.
          </p>
          <p>
            With over a decade of experience in project management, I bring
            thoughtfulness, patience, and creativity to every session. I focus
            on creating a relaxed, joyful experience that reflects your love and
            connection.
          </p>
          <p>
            I believe in capturing life’s authentic moments, full of love,
            laughter, and warmth, so you can cherish them for years to come.
            Let’s create timeless memories that celebrate your unique love story
            in the most genuine way possible.
          </p>
        </div>
      </div>

      <AboutFavorite/>
      <Sta/>

    </div>
  );
};

export default About;
