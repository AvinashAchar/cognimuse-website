import "./Home.css";
/*import robotImg from "../../assets/robot.png"; // dummy image*/

export default function Home() {
  return (
    <section className="home" id="home">
      <div className="home-container">

        {/* LEFT CONTENT */}
        <div className="home-text">
          <h1 className="home-title">
            Transform Your Manufacturing <br />
            with Smart Automation.
          </h1>

          <p className="home-subtitle">
            Revolutionize your production with smart, scalable automation—built
            to maximize efficiency and innovation at every stage.
          </p>

          <div className="home-buttons">
            <button className="btn-primary">
              Start Your Transformation
            </button>

            <button className="btn-secondary">
              Explore Solutions
            </button>

           
          </div>

           <div className="home-meta">
  <div className="meta-block">
    <span className="meta-title">Read</span>
    <p className="meta-text">
      “CogniMuse’s automation solution reduced production
      costs by 25% for [X Company].”
    </p>
  </div>

  <div className="meta-divider"></div>

  <div className="meta-block">
    <span className="meta-title">Follow</span>
    <p className="meta-text">
      Stay Updated on Our Latest Insights & Stories
    </p>
    <span className="meta-link">in</span>
  </div>
</div>
        </div>

    


        {/* RIGHT IMAGE */}
       
        {/*<div className="home-image"><img src="/images/hero.png" alt="automation" /> </div>*/}

            

      </div>
    </section>
  );
}
