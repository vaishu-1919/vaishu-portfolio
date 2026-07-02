import "./Home.css";
import profile from "../assets/images/profile.png";
import { useState } from "react";

function Home() {
  const [enlarge, setEnlarge] = useState(false);

  const handleHello = () => {
    alert("Hello 👋 Welcome to my portfolio!");
  };

  return (
    <section className="home">
      <div className="home-container">

        {/* Profile Image */}
        <div className="home-image">
          <img
            src={profile}
            alt="Vaishnavi"
            className={enlarge ? "profile-img enlarge" : "profile-img"}
            onClick={() => setEnlarge(!enlarge)}
          />
        </div>

        {/* Home Text */}
        <div className="home-text">

          <h1>Hi, I'm Vaishnavi 👋</h1>

          <h2>Frontend Developer</h2>

          <div className="description-row">

            <p className="home-description">
              I am a passionate <strong>Frontend Developer</strong> with a
              strong interest in building modern, responsive, and
              user-friendly web applications. I enjoy creating clean user
              interfaces using <strong>React</strong>,
              <strong> JavaScript</strong>, <strong>HTML</strong>, and
              <strong> CSS</strong>. I continuously improve my skills by
              learning new technologies and building practical projects.
            </p>

            

          </div>

        </div>

      </div>
    </section>
  );
}

export default Home;