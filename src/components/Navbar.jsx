import "./Navbar.css";
import { useEffect, useState } from "react";

function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActive(id);

            // ✅ update URL correctly
            window.history.replaceState(null, "", `#${id}`);
          }
        });
      },
      {
        threshold: 0.6, // section must be 60% visible
      }
    );

    sections.forEach((section) => {
      if (section.id) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    setActive(id);
    window.location.hash = id;

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav className="navbar">

      <h2 className="logo">Dudyala Vaishnavi</h2>

      <ul className="nav-links">

        <li className={active === "home" ? "active" : ""} onClick={() => scrollToSection("home")}>
          Home
        </li>

        <li className={active === "about" ? "active" : ""} onClick={() => scrollToSection("about")}>
          About
        </li>

        <li className={active === "skills" ? "active" : ""} onClick={() => scrollToSection("skills")}>
          Skills
        </li>

        <li className={active === "education" ? "active" : ""} onClick={() => scrollToSection("education")}>
          Education
        </li>

        <li className={active === "contact" ? "active" : ""} onClick={() => scrollToSection("contact")}>
          Contact
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;