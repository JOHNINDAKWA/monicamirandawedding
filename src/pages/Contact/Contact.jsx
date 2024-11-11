import { useEffect, useState } from "react";
import "./Contact.css";
import Sta from './../../components/Sta/Sta';

const Contact = () => {
  const images = [
    "https://static.showit.co/800/8gEY7yZVQTupP9lyMiLfyw/210288/2023_05_26_bobbie_shawn_wedding_monicamirandaphotography_50_of_59.jpg",
    "https://static.showit.co/800/8ye_8aRCSPCE595JJO0DVA/210288/2023_03_27_penthouse_wedding_styled_shoot_monicamirandaphotography_9_of_81.jpg",
    "https://static.showit.co/800/GQqyuxE5SP-zOq3lRF1uqA/210288/06_17_23_ashley_and_alex_estate_summer_wedding_monicamirandaphotography_com_3_of_15.jpg",
    "https://static.showit.co/800/cPtQvqdtRnqYiWuijAmV3g/210288/07_29_2023_sara_javier_cantigny_park_wedding_monicamirandaphotography_382_of_723.jpg",
    "https://static.showit.co/800/mlNt8N_rRLConD5Kdsds1A/210288/08_06_23_rocco_and_cecilia_engagement_at_union_station_chicago_monicamirandaphotography_3_of_14.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <>
    <div className="contact">
      <div className="contact-container">
        <div className="contact-left">
          <img
            src={images[currentIndex]}
            alt={`Wedding Slide ${currentIndex + 1}`}
          />
        </div>

        <div className="contact-right">
          <h1>INQUIRE</h1>
          <hr />
          <p>
            We&apos;d love to hear from you! Please fill out the form below or
            send a note directly to hello@monicamirandaphotography.com
          </p>
          <div className="form">
            <input type="text" placeholder="YOUR NAMES" />
            <input type="text" placeholder="EMAIL ADDRESS" />
            <input type="telephone" placeholder="PHONE NUMBER" />
            <input type="text" placeholder="WEDDING DATE + VENUE" />
            <input type="text" placeholder="ANTICIPATED BUDGET" />
            <input type="text" placeholder="HOW DID YOU HEAR ABOUT US" />
            <textarea
              name=""
              id=""
              placeholder="Enter the finer, exciting details here."
            ></textarea>

            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
    <Sta/>
    </>
  );
};

export default Contact;
