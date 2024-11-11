import Masonry from "react-masonry-css";
import "./MasonryGallery.css";

const items = [
  {
    id: 1,
    src: "https://static.showit.co/800/QGdhcp8EEVOeuwhuOB-Ytg/210288/09_03_23_alex_and_blake_fall_pinstripes_wedding_monicamirandaphotography_com_25_of_44_websize.jpg",
    alt: "Image 1",
  },
  {
    id: 2,
    src: "https://static.showit.co/400/J0dISYK_8G5IxqXS6BBh1w/210288/28675_17.jpg",
    alt: "Image 2",
  },

  {
    id: 3,
    src: "https://static.showit.co/400/bSUrQDMG1CvuNtF6U3mhww/210288/monicamirandaweddingphotographer_chicago-21_websize.jpg",
    alt: "Image 5",
  },

  {
    id: 4,
    src: "https://static.showit.co/400/b0fIMazxLRO1nGORmaEA3g/210288/28675_02.jpg",
    alt: "Image 3",
  },
  {
    id: 5,
    text: (
      <div className="words">
        <p className="p_1">Intention</p>
        <p className="p_2">Connection</p>
        <p className="p_3">Authenticity</p>
        <p className="p_4">Elegance</p>
        <p className="p_5">Cultural Celebration</p>
      </div>
    ),
  },
  {
    id: 6,
    src: "https://static.showit.co/400/JUgNfVPu2k9dtk-Z-iIjGA/210288/dsc03977_websize.jpg",
    alt: "Image 6",
  },
  
  {
    id: 7,
    src: "https://static.showit.co/800/qMBFp8dd2zqVuYC94EQp_A/210288/09_14_24_brant_wedding_chicago_monicamirandaphotography-24_websize.jpg",
    alt: "Image 4",
  },

  

  {
    id: 8,
    src: "	https://static.showit.co/800/88DeSG6dRlyHpEZwvJNM4w/210288/11_2023_allison_and_andrew_wedding_at_chicago_history_musem_monicamirandaphotogragy_com_74_of_41.jpg",
    alt: "Image 7",
  },


];

const MasonryGallery = () => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {items.map((item) => (
        <div key={item.id}>
          {item.src ? <img src={item.src} alt={item.alt} /> : item.text}
        </div>
      ))}
    </Masonry>
  );
};

export default MasonryGallery;
