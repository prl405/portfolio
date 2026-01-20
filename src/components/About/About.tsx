import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './About.css';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h1 className="name">Your Name</h1>
            <h2 className="title">
              <span className="title-text">Full Stack Software Engineer</span>
            </h2>
            <p className="bio">
              Passionate full-stack developer with expertise in modern web technologies.
              I create elegant, efficient solutions to complex problems and am committed
              to continuous learning and growth in the ever-evolving tech landscape.
            </p>

            <div className="key-skills">
              <span className="skill-tag">React</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Web Design</span>
            </div>

            <div className="social-links">
              <a
                href="https://linkedin.com"
                className="social-button"
                target="_blank"
                rel="noopener noreferrer"
              ><FontAwesomeIcon icon={faLinkedin} />
                LinkedIn
              </a>
              <a
                href="https://github.com"
                className="social-button"
                target="_blank"
                rel="noopener noreferrer"
              ><FontAwesomeIcon icon={faGithub} />
                GitHub
              </a>
            </div>
          </div>

          <div className="about-photo">
            <div className="photo-placeholder">
              <span>Professional Photo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
