import { FaCode, FaServer, FaLock } from "react-icons/fa";

function AboutWEB603() {
  return (
    <section id="about-web603">
      <h2>About WEB603 - Full Stack Web</h2>
      <div className="web603-description">
        <p>
          <strong>WEB 603</strong> is a comprehensive 6-unit course focusing on both front-end and back-end technologies in modern web development. The course offers in-depth knowledge on building dynamic web applications using tools like <strong>React</strong>, <strong>Node.js</strong>, <strong>Express</strong>, and more.
        </p>
      </div>

      <div className="web603-layout">
        <div className="web603-topics">
          <h3>Key Topics</h3>
          <div className="topics-grid">
            <div className="topic-item">
              <FaCode size={40} />
              <h4>Front-End Development</h4>
              <p>Learn to build responsive interfaces using React, HTML, CSS, and JavaScript.</p>
            </div>
            <div className="topic-item">
              <FaServer size={40} />
              <h4>Back-End Development</h4>
              <p>Understand server-side concepts, APIs, and databases with Node.js and Express.</p>
            </div>
            <div className="topic-item">
              <FaLock size={40} />
              <h4>Security & Authentication</h4>
              <p>Master web security, encryption, and authentication techniques for full-stack apps.</p>
            </div>
          </div>
        </div>

        <div className="web603-objectives">
          <h3>Learning Objectives</h3>
          <ul>
            <li>Understand how to build full-stack web applications using modern frameworks.</li>
            <li>Gain expertise in web security, handling authentication, and authorization.</li>
            <li>Learn best practices for optimizing web applications and enhancing performance.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutWEB603;
