import "./Skills.css";

function Skills() {
  return (
    <section className="skills">

      <h1>My Skills</h1>

      <div className="skills-container">

        <div className="skills-category">
          <h2>Frontend</h2>
          <div className="skill">🌐 HTML</div>
          <div className="skill">🎨 CSS</div>
          <div className="skill">⚡ JavaScript</div>
          <div className="skill">⚛️ React</div>
        </div>

        <div className="skills-category">
          <h2>Backend</h2>
          <div className="skill">🐍 Python</div>
        </div>

        <div className="skills-category">
          <h2>Database</h2>
          <div className="skill">🗄️ SQL</div>
        </div>

      </div>

    </section>
  );
}

export default Skills;