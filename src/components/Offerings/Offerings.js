import "./Offerings.css";

function Offerings() {
  return (
    <section className="offerings" id="offerings">
      <div className="offerings-header">
        <h2>Our <br/>Offerings</h2>
      </div>

      <div className="offerings-right-text" align="right">
  Our offerings are designed to streamline operations,
  <br/>increase efficiency, and drive innovation across the<br/>
  production process.
</div>


      <div className="offerings-content">
        {/* LEFT TEXT */}
        <div className="offerings-text">
          <span className="offer-number"> ↗️01</span>
          <h3 className="subhead">Turn-Key Robotic Workcells</h3>
          <p>
            We <b>design, build, and deploy </b>fully enclosed robotic arm cells
            optimized for speed, accuracy, and safety—ensuring you get robust
            solutions with minimal downtime.
          </p>
        </div>

        
        {/* RIGHT IMAGE */}
       
       {/*<div className="offerings-image"><img src="https://via.placeholder.com/420x420.png?text=Robotic+Workcell"alt="Robotic Workcell"/></div>*/}
  </div>
    </section>
  );
}

export default Offerings;
