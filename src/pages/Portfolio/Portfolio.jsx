import Gallery from "../../components/Gallery/Gallery";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div>
      <div className="portfolio-banner">
        <div className="portfolio-banner-block">

          <div className="portfolio-banner-overlay">
            <h1>PORTFOLIO</h1>
            <h3>
              OUR STYLE IS ELEGANT, ENDURING, AND CENTERED AROUND AUTHENTIC
              MOMENTS OF PURE JOY.
            </h3>
          </div>
        </div>
      </div>


      <Gallery/>



    </div>
  );
};

export default Portfolio;
