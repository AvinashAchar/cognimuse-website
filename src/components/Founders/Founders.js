import "./Founders.css";
import M from "../../images/m.png";
import E from "../../images/e.png";


function Founders() {
  return (
    <section className="founders" id="founders">
      {/* Header */}
      <div className="founders-header">
        <h2 className="f-head">
          Meet the <br /> Founders
        </h2>

        <p>
          Our founders are the visionaries behind our mission to transform
          manufacturing through innovative automation solutions. Each of them
          brings a unique combination of expertise, passion, and leadership to
          our company.
        </p>
      </div>

      {/* Cards */}
      <div className="founders-cards">
        <div className="founder-card">
          <img
            src={M}
            alt="Matthew"
          />
          <div className="founder-info">
            <h4>Matthew</h4>
            <span>Director</span>
          </div>
        </div>

        <div className="founder-card">
          <img
            src={E}
            alt="Eliza"
          />
          <div className="founder-info">
            <h4>Eliza</h4>
            <span>Director</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Founders;
