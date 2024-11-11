import { Link } from "react-router-dom";
import "./Reviews.css";

const Reviews = () => {
  return (
    <div className="reviews">
      <div className="reviews-top-container">
        <div className="reviews-top">
          <h2>Joyful Moments Real Connections, Everlasting Memories</h2>

          <div className="review-top-items">
            <div className="review-top-item">
              <div className="review-top-item-img">
                <img
                  src="https://static.showit.co/200/MUcwXXdBS3GIkxf5ITg58g/210288/11_2023_allison_and_andrew_wedding_at_chicago_history_musem_monicamirandaphotogragy_com_78_of_41.jpg"
                  alt=""
                />
              </div>
              <h3>Allison & Andrew</h3>
              <Link>Elegant Wedding At The Archives History Museum</Link>
            </div>
            <div className="review-top-item">
              <div className="review-top-item-img">
                <img
                  src="https://static.showit.co/200/PGJreVKeQi-_Pd5aKoaKjQ/210288/08_06_23_rocco_and_cecilia_engagement_at_union_station_chicago_monicamirandaphotography_5_of_14.jpg"
                  alt=""
                />
              </div>

              <h3>Cecilia & Rocco</h3>
              <Link>Engagement Session At Mombasa&apos;s Union Station</Link>
            </div>

            <div className="review-top-item">
              <div className="review-top-item-img">
                <img
                  src="https://static.showit.co/200/EkCnzMFhQDSVz2KVx5falA/210288/2023_05_26_the_bowes_wedding_at_london_house_chicago_monicamirandaphotography_162_of_151.jpg"
                  alt=""
                />
              </div>

              <h3>Bobbie & Shawn</h3>
              <Link>Iconic, Intimate Wedding at Fort Jesus</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="review-bottom-container">
        <div className="review-bottom-items">
          <div className="review-bottom-item-1">
            <h1>Stories from Our Couples:</h1>
            <div className="review-bottom-item-1-img">
              <img src="https://static.showit.co/400/l2aGvuVpwQPi8cGJTSv6kA/210288/dsc05024.jpg" alt="" />
            </div>
          </div>
          <div className="review-bottom-item-2">
              <img src="https://static.showit.co/800/1XVQx8OIRW-WyrzFcTQ84A/210288/2023_symphony_orchestra_weddings_monicamirandaphotography_1_of_5.jpg" alt="" />
          </div>
          <div className="review-bottom-item-3">
            <div className="review-bottom-item-3-img">
              <img src="https://static.showit.co/400/pr5jyGZGrkL5hf1e0ErbWg/210288/2022_10_15_a_and_c_wedding_89_of_110_websize.jpg" alt="" />
            </div>
            <h3>MORE REVIEWS</h3>
          </div>
        </div>

        <p>
          Stories from Our Couples: &quot;I previously had the opportunity to
          work with an Oscar winning director of photography. Having Monica
          photograph our wedding was very special and the talent she has and how
          she deals with people reminded me of that experience.&quot;
        </p>

        <hr />
        <h3>Rachel & James</h3>
      </div>
    </div>
  );
};

export default Reviews;
