import { Link } from "react-router-dom";
import "./AboutHome.css";

const AboutHome = () => {
  return (
    <div className="about-cont">
      <div className="about-author">
        <div className="about-author-left">
          <div className="main-img">
            <img
              src="https://static.showit.co/400/-8ZC6sRbQhmcXMeAX8p96A/210288/the_studio_sunset_mm_headshots_monicamirandaphotography_3_of_6.jpg"
              alt=""
            />
          </div>
          <div className="sec-img">
            <img
              src="https://static.showit.co/400/2ChSAAF_QBCRPbrBrmUqZg/210288/the_studio_sunset_mm_headshots_monicamirandaphotography_1_of_6.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="about-author-right">
          <h3>OUR STORY</h3>
          <hr />
          <h1>I&apos;M MONICA</h1>

          <p>
            As a Bungoma-based wedding photographer, I treasure the grace found
            in life’s most beautiful moments. Whether it’s hiking through the
            mountains or enjoying cozy time at home, I find joy in the little
            things—and that’s what I aim to capture on your wedding day.
          </p>
          <p>
            I believe in the power of being fully present, sharing belly laughs,
            and creating lasting memories with those who matter most. My passion
            goes beyond merely documenting your day; it’s about partnering with
            you to craft a bespoke experience that celebrates the love, emotion,
            and elegance of your unique story.
          </p>
          <p>
            With a heart for serving couples and a commitment to timeless
            artistry, I utilize various mediums to authentically document your
            special day. Together, we’ll create a wedding experience that’s
            truly unforgettable—filled with joy, beauty, and those cherished
            moments you’ll treasure forever. Let’s make your day as beautiful as
            the love you share, honoring not just the wedding but the incredible
            marriage that follows.
          </p>

          <Link> Meet Our Photographer</Link>
        </div>
      </div>


      <div className="about-experience-container">

   
      <div className="about-experience">
        <div className="about-experience-left">
            <div className="about-experience-img">
            <img
            src="https://static.showit.co/800/1ZIildlNCL-dFClTf_U4Ig/210288/langham_wedding_web_32_of_53_websize.jpg"
            alt=""
          />
            </div>
          <Link>Dive Into Your Celebration</Link>
        </div>

        <div className="about-experience-right">
          <h3>THE Monica miranda</h3>

          <h1>EXPERIENCE</h1>

          <p>
            At Monica Miranda Photo & Films, we believe that every love story is
            unique and deserves to be told with authenticity and artistry. Our
            approach begins with understanding the heart of your relationship,
            allowing us to beautifully capture the timeless moments that truly
            reflect your journey together through both photography and
            videography.
          </p>
          <p>
            From our initial consultation to the final delivery of your images
            and films, we create a personalized experience tailored to your
            vision and values. We take the time to get to know you and your
            story, ensuring that every detail of your celebration is
            thoughtfully documented. With a deep appreciation for love and
            authenticity, we honor your rich culture and style, weaving these
            elements into every frame we capture.
          </p>
          <p>
            Our commitment to quality and meaningful experiences ensures that
            each photograph and video is not just a record of your day but a
            cherished memory that reflects the joy and elegance of your special
            occasion. We strive to preserve the essence of your wedding day in a
            way that feels both luxurious and deeply personal, creating a visual
            legacy that you and your loved ones will treasure for generations to
            come.
          </p>
        </div>
      </div>

      </div>

    </div>
  );
};

export default AboutHome;
