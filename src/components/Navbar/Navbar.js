import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) {
      console.log("SECTION NOT FOUND:", id);
      return;
    }
    el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="navbar">
      <div className="ind-time">  IND 00:00</div>

      <div className="nav-logo"><b>🧑‍💻CogniMuse</b></div>

      <div className="menu-icon" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {open && (
        <div className="nav-menu">
          <p onClick={() => scrollToSection("home")}>Home</p>
          <p onClick={() => scrollToSection("offerings")}>Our Offerings</p>
          <p onClick={() => scrollToSection("process")}>How It Works</p>
          <p onClick={() => scrollToSection("founders")}>The Team</p>
          <p onClick={() => scrollToSection("blog")}>Insights</p>
          <p onClick={() => scrollToSection("careers")}>Join Team</p>
          <p onClick={() => scrollToSection("footer")}>Contact</p>
        </div>
      )}
    </header>
  );
}

export default Navbar;



