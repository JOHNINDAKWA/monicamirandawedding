import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./Gallery.css";
import Image1 from "../../assets/images/gallery1.jpg";
import Image2 from "../../assets/images/gallery2.jpg";
import Image3 from "../../assets/images/gallery3.jpg";
import Image4 from "../../assets/images/gallery4.jpg";
import Image5 from "../../assets/images/gallery5.jpg";
import Image6 from "../../assets/images/gallery6.jpg";
import Image7 from "../../assets/images/gallery7.jpg";
import Image8 from "../../assets/images/gallery8.jpg";
import Image9 from "../../assets/images/gallery9.jpg";
import Image10 from "../../assets/images/gallery10.jpg";
import Image11 from "../../assets/images/gallery11.jpg";
import Banner from './../Banner/Banner';
import Sta from './../Sta/Sta';

const Gallery = () => {
  const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
    Image11,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - getImagesPerSlide() : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - getImagesPerSlide() ? 0 : prevIndex + 1
    );
  };

  const getImagesPerSlide = () => {
    if (screenWidth < 600) return 1; // For small screens, 1 image at a time
    if (screenWidth < 900) return 2; // For tablets, 2 images at a time
    return 3; // For larger screens, 3 images at a time
  };

  // Handle window resize to update screen width and adjust the gallery
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Automatic scroll
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="gallery-container">
        <h1>PORTFOLIO HIGHLIGHTS</h1>
        <div className="gallery-images">
          {images.slice(currentIndex, currentIndex + getImagesPerSlide()).map(
            (image, index) => (
              <div
                key={index}
                className={`gallery-item ${index === 1 ? "center" : ""}`}
                style={{ backgroundImage: `url(${image})` }}
              />
            )
          )}
        </div>

        <div className="gallery-buttons">
          <button className="prev" onClick={prevImage}>
            <FaArrowLeft />
            <p>PREVIOUS</p>
          </button>
          <button className="next" onClick={nextImage}>
            <p>NEXT</p>
            <FaArrowRight />
          </button>
        </div>
      </div>

      <Banner />
      <Sta />
    </div>
  );
};

export default Gallery;
