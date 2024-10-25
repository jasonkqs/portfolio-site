function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about-content">
        <p>
          I am a full-stack web developer with expertise in modern technologies and a passion for building user-friendly, scalable applications. With a strong background in both front-end and back-end development, I bring a holistic approach to building web experiences.
        </p>

        {/* Technical Skills Section */}
        <div className="about-skills">
          <h3>Technical Skillsets</h3>
          <div className="skills-grid">
            <div className="skill-item">
              <h4>Languages</h4>
              <p>JavaScript (ES6+), HTML5, CSS3, SQL</p>
            </div>
            <div className="skill-item">
              <h4>Front-End Frameworks</h4>
              <p>React.js, Redux, Bootstrap, Tailwind CSS</p>
            </div>
            <div className="skill-item">
              <h4>Back-End</h4>
              <p>Node.js, Express.js, RESTful APIs, MongoDB, PostgreSQL</p>
            </div>
            <div className="skill-item">
              <h4>DevOps & Tools</h4>
              <p>Docker, Git/GitHub, CI/CD, AWS, Heroku</p>
            </div>
            <div className="skill-item">
              <h4>Security & Authentication</h4>
              <p>JWT, OAuth, HTTPS, Encryption</p>
            </div>
            <div className="skill-item">
              <h4>Testing</h4>
              <p>Jest, Mocha, Chai, Cypress</p>
            </div>
          </div>
        </div>

        {/* Personal Attributes Section */}
        <div className="about-personal">
          <h3>Personal Attributes</h3>
          <ul className="attributes-list">
            <li>Excellent communication and teamwork skills</li>
            <li>Strong attention to detail and passion for clean code</li>
            <li>Adaptable to fast-paced environments</li>
            <li>Committed to lifelong learning and self-improvement</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
