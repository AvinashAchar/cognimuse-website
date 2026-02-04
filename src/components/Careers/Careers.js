import "./Careers.css";

function Careers() {
  return (
    <section className="careers" id="careers">
      {/* HEADER */}
      <div className="careers-header">
        <h2 className="c-head">
          Join the <br /> CogniMuse Team
        </h2>

        <p>
          We're a community of innovators, engineers, and problem-solvers
          shaping the future of automation and robotics. If you're ready to be
          part of a fast-paced, dynamic team, we'd love to hear from you.
        </p>
      </div>

      {/* JOB LIST */}
      <div className="job-list">
        {/* JOB 1 */}
        <div className="job-card">
          <div>
            <h4>Role Title</h4>
            <p>Robotics Engineer</p>
          </div>

          <div>
            <h4>Location</h4>
            <p>Hyderabad, IN</p>
          </div>

          <button className="apply-btn">Apply Now</button>
        </div>

        {/* JOB 2 */}
        <div className="job-card">
          <div>
            <h4>Role Title</h4>
            <p>Project Manager</p>
          </div>

          <div>
            <h4>Location</h4>
            <p>Hyderabad, IN</p>
          </div>

          <button className="apply-btn">Apply Now</button>
        </div>
      </div>

      {/* FOOT NOTE */}
      <p className="careers-note">
        Don’t see a role? Send us your resume at{" "}
        <span>careers@tekodyne.com</span>. We’re always looking for talent to
        join our team!
      </p>
    </section>
  );
}

export default Careers;
