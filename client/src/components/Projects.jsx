function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        <h2>My Projects</h2>

        <div className="project-grid">

          <div className="project-card">
            <h3>🌍 Roving Travel Agency Website</h3>

            <p>
              Developed a responsive travel agency website using HTML,
              CSS, JavaScript, Bootstrap, and MySQL. The website allows
              users to explore travel packages with a user-friendly interface.
            </p>

            <h4>Technologies Used</h4>

            <p>HTML • CSS • JavaScript • Bootstrap • MySQL</p>

            <div className="project-buttons">
              <button>GitHub</button>
              <button>Live Demo</button>
            </div>
          </div>

          <div className="project-card">
            <h3>💼 Personal Portfolio Website</h3>

            <p>
              A modern and responsive portfolio website built using React.
              It showcases my education, skills, projects, certifications,
              achievements, and contact information.
            </p>

            <h4>Technologies Used</h4>

            <p>React • CSS • Node.js • Express • MongoDB</p>

            <div className="project-buttons">
              <button>GitHub</button>
              <button>Live Demo</button>
            </div>
          </div>

          <div className="project-card">
            <h3>📝 Online Examination System</h3>

            <p>
              A web application for conducting online examinations with
              secure login, student management, question management,
              and result generation.
            </p>

            <h4>Technologies Used</h4>

            <p>React • Node.js • Express • MongoDB</p>

            <div className="project-buttons">
              <button>GitHub</button>
              <button>Live Demo</button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Projects;