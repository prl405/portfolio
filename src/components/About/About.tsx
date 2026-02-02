import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './About.css';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import linkedin_portrait from '../../assets/linkedin_portrait.jpg';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h1 className="name">Pedro Liedl</h1>
            <h2 className="title">
              <span className="title-text">Full Stack Software Engineer</span>
            </h2>
            <p className="bio">
              I'm a full-stack software engineer who enjoys turning complex problems into reliable, production-ready systems. 
              I have 2 years of experience delivering customer-facing APIs and microservices, backed by an MSc in Applied Mathematics and a growing focus on AI and machine learning. 
              I care deeply about clean design, rigorous testing, and shipping software that works, on time and at scale.
            </p>

            <div className="key-skills">
              <span className="skill-tag">Java</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">React</span>
              <span className="skill-tag">API Development</span>
              <span className="skill-tag">AI/Machine Learning</span>
            </div>

            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/pedro-l-9406951b8/"
                className="social-button"
                target="_blank"
                rel="noopener noreferrer"
              ><FontAwesomeIcon icon={faLinkedin} />
                LinkedIn
              </a>
              <a
                href="https://github.com/prl405"
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
              <img src={linkedin_portrait} alt="LinkedIn Profile Picture" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
