import React, { useState } from 'react';
import projectVideo from '../assets/shopcart.mp4';

function Projects() {
  // State to toggle video visibility
  const [showVideo, setShowVideo] = useState(false);

  // Function to toggle video display
  const toggleVideo = () => {
    setShowVideo(!showVideo);
  };

  return (
    <section id="projects" className="projects-container">
      <h2>Projects</h2>
      
      {/* Project 1: Video Demo */}
      <div className="project-item">
        <h3>Shop Cart Video Demo</h3>
        <p>This project demonstrates a shopping cart functionality.</p>
        <button onClick={toggleVideo}>
          {showVideo ? 'Hide Project 1' : 'View Project 1'}
        </button>
        {showVideo && (
          <div className="video-container">
            <video controls>
              <source src={projectVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>

      {/* Project 2: Link to External Demo */}
      <div className="project-item">
        <h3>Group Project Web Demo</h3>
        <p>This project showcases an online shop cart demo hosted on Netlify.</p>
        <a href="https://mellifluous-paletas-40837f.netlify.app/" target="_blank" rel="noopener noreferrer">
          Visit Project 2: Shop Cart Web Demo
        </a>
      </div>
    </section>
  );
}

export default Projects;
