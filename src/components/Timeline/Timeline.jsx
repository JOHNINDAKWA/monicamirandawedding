import "./Timeline.css";

const Timeline = () => {
  return (
    <div className="timeline-container">
      <h2>HOW IT WORKS</h2>
      <h1>OUR PROCESS</h1>
      <div className="timeline">
        <div className="container right-container">
          <div className="text-box">
            <h2>01</h2>
            <h5>INITIAL MEETING</h5>
            <p>
              Share the vision for your wedding and photography with me. Let
              me know what you are most excited for.
            </p>
            <span className="right-container-arrow"></span>
          </div>
        </div>

        <div className="container left-container">
          <div className="text-box">
            <h2>02</h2>
            <h5 className="left">BOOKING</h5>
            <p>
              Are we the perfect match? If so, we will secure your date on our
              calendar and move on to the fun part.
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </div>

        <div className="container right-container">
          <div className="text-box">
            <h2>03</h2>
            <h5 >PLANNING + CONSULTATIONS</h5>
            <p>
              Allow me to get to know you. We&apos;ll work with you to ensure
              your wildest dreams will come true and that we know which things
              are most important to you about your day.
            </p>
            <span className="right-container-arrow"></span>
          </div>
        </div>

        <div className="container left-container">
          <div className="text-box">
            <h2>04</h2>
            <h5 className="left">ENGAGEMENT SESSION</h5>
            <p>
              This comes with styling assistance and a wedding magazine to help
              you plan and prep for things as best you possibly can!
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </div>

        <div className="container right-container">
          <div className="text-box">
            <h2>05</h2>
            <h5>YOUR WEDDING</h5>
            <p>
              We&apos;ll be there every step of the way with multiple shooters to
              make sure the moments that matter are documented so you can focus
              on being present and celebrating with your loved ones.
            </p>
            <span className="right-container-arrow"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
