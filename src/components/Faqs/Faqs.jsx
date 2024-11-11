import { useState, useEffect } from "react";
import "./Faqs.css";

const Faqs = () => {
  const images = [
    "https://static.showit.co/400/ooNu3KJ5OuDfoAnPg8md1w/210288/2023_intimate_luxury_wedding_at_symphony_orchestra_chicago_monicamirandaphotography_4_of_5_websize_websize.jpg",
    "https://static.showit.co/400/4QZDIUW8Q0C8XoEB_n44mA/210288/08_25_23_taylor_and_kirill_intimate_wedding_in_arlington_heights_monicamirandaphotography_41_of_47.jpg",
    "https://static.showit.co/400/FsETDp3DTgWQTde8sFOHfA/210288/2023_intimate_luxury_wedding_at_symphony_orchestra_chicago_monicamirandaphotography_1_of_3.jpg",
    "https://static.showit.co/400/yWBmQEq9Sym-NFGb8rMPxA/210288/2023_chicago_weddings_monicamirandaphotography_5_of_6.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <div className="faq">
      <div className="faq-container">
        <div className="faq-container-left">
        <img
              src={images[currentIndex]}
              alt={`Wedding Slide ${currentIndex + 1}`}
            />
        </div>
        <div className="faq-container-mid">
          <h1>Frequently asked questions</h1>
          <hr />
          <h3>Will you customize my wedding package?</h3>
          <p>
            Absolutely! MMPF is proud to offer all custom proposals that include
            the coverage you need. Need rehearsal dinner and farewell brunch
            coverage? Consider us there!
          </p>
          <h3>what is your travel fee for destination weddings?</h3>
          <p>
            My travel fee varies by location (domestic/international), but I
            will include a flat rate in your custom proposal so it&apos;s all
            included with your photography coverage.
          </p>
          <h3>How soon in advance should i book my photographer?</h3>
          <p>
            You should plan to book your photographer as soon as your venue and
            wedding date is secured. MMPF books up to 15 weddings per year so
            dates go fast! Send us an inquiry asap and we will let you know if
            your date is still available.
          </p>
        </div>

        <div className="faq-container-right">
          <img
            src="https://static.showit.co/800/fHxyDw76JP3a3p2kMXpsPA/210288/monicamirandaweddingphotographer_chicago-15.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Faqs;
