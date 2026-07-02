import "./Education.css";

import internship from "../assets/certificates/internship.pdf";
import nptel from "../assets/certificates/nptel.pdf";
import python from "../assets/certificates/python.pdf";
import dbms from "../assets/certificates/dbms.pdf";

function Education() {
  return (
    <section className="education">

      {/* ================= EDUCATION ================= */}

      <h1>Education</h1>

      <div className="edu-container">
        <div className="edu-card">
          <h2>
            B.Tech - Computer Science Engineering
            <span className="tag">(AI & ML)</span>
          </h2>

          <p className="college">
            Vidya Jyothi Institute of Technology (VJIT)
          </p>

          <p className="year">
            🎓 2022 - 2026 (Completed)
          </p>

          <p className="desc">
            Completed Bachelor of Technology in Computer Science Engineering
            with specialization in Artificial Intelligence and Machine Learning.
            Focused on programming, web development and core Computer Science concepts.
          </p>
        </div>
      </div>

      {/* ================= CERTIFICATES ================= */}

      <h1 className="certificate-title">Certificates</h1>

      <div className="certificate-section">

        <div className="certificate-container">

          {/* Internship */}

          <div className="certificate-card">
            <h2>Frontend Development Internship</h2>

            <p className="college">
              Internship Completion Certificate
            </p>

            <a
              href={internship}
              target="_blank"
              rel="noopener noreferrer"
              className="certificate-btn"
            >
              View Certificate
            </a>
          </div>

          {/* NPTEL */}

          <div className="certificate-card">
            <h2>NPTEL Certification</h2>

            <p className="college">
              NPTEL Online Course
            </p>

            <a
              href={nptel}
              target="_blank"
              rel="noopener noreferrer"
              className="certificate-btn"
            >
              View Certificate
            </a>
          </div>

          {/* Python */}

          <div className="certificate-card">
            <h2>Python Programming</h2>

            <p className="college">
              Python Certificate
            </p>

            <a
              href={python}
              target="_blank"
              rel="noopener noreferrer"
              className="certificate-btn"
            >
              View Certificate
            </a>
          </div>

          {/* DBMS */}

          <div className="certificate-card">
            <h2>Database Management System</h2>

            <p className="college">
              DBMS Certificate
            </p>

            <a
              href={dbms}
              target="_blank"
              rel="noopener noreferrer"
              className="certificate-btn"
            >
              View Certificate
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Education;