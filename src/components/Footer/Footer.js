import "./Footer.css";

function Footer() {
  return (
    <>
      {/* CTA SECTION */}
      <section className="cta" id="footer">
        <h2 className="f-head">Want to Learn How We Can Help Your Business?</h2>

        <p>
          At CogniMuse, we specialize in transforming manufacturing through
          cutting-edge automation. Whether you're looking to improve efficiency,
          scale your production, or drive innovation, we're here to make it
          happen. Start a conversation with our experts to explore solutions
          tailored specifically to your business needs.
        </p>

        <button className="cta-btn">Book Your Free Consultation</button>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-top">
          {/* LOGO + ADDRESS */}
          <div className="footer-col">
            <h3>CogniMuse</h3>
            <p className="address">
              SU-04, 3rd Floor,<br />
              AIC-Nitte Incubation Centre<br />
              NMAMIT Campus, Nitte, Karkala Taluk,<br />
              Udupi District, Karnataka - 574110, India
            </p>
          </div>

          {/* LINKS */}
          <div className="footer-col">
            <p>Home</p>
            <p>How it Works?</p>
            <p>Contact Us</p>
          </div>

          <div className="footer-col">
            <p>Who We Are</p>
            <p>The Team</p>
            <p>LinkedIn</p>
          </div>

          <div className="footer-col">
            <p>Our Offerings</p>
            <p>Notes</p>
            <p>Mail</p>
          </div>

          <div className="footer-col">
            <p>Why CogniMuse</p>
            <p>Join Team</p>
            <p>Schedule a Meet</p>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="footer-bottom">
          <p>Privacy Policy &nbsp;&nbsp; Terms & Conditions</p>
          <p>© 2025 CogniMuse. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
