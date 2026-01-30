import type { Project } from '../../types';
import './Projects.css';

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Portfolio Website',
      description:
        'My personal portfolio website hosted on github, built using responsive design with minimalist styling.',
      tags: ['React', 'Typescript','FontAwsome', 'Vite'],
      repoUrl: 'https://github.com/prl405/portfolio',
    },
    {
      title: 'Career Success AI API',
      description:
        'AI powered application for predicting starting salary, showing how a machine learning model can be integrated through a backed python REST API to a user friendly interface.',
      tags: ['TensorFlow', 'FastAPI', 'Python', 'React'],
      repoUrl: 'https://github.com/prl405/career_success',
    },
    {
      title: 'Company Registraion Dashboard',
      description:
        'Interactive dashboard visualising company registration data ready to be deployed and shared with organisation stakeholders',
      tags: ['Streamlit', 'Plotly', 'Python', 'GeoPandas'],
    },
    {
      title: 'Third Person Arena Shooter',
      description:
        'Realised translating game mechanices into code including player movement, shooting mechanics and enemy AI.',
      tags: ['Unity Engine', 'C#', 'Game Development'],
      repoUrl: 'https://play.unity.com/mg/other/third-person-arena',
    },
    {
      title: 'Computer Vision: Digit Classifier',
      description:
        'Image classification model using CNNs to accurately classify handwritten digits from the MNIST dataset.',
      tags: ['TensorFlow', 'Python', 'Jupyter Notebook'],
      repoUrl: 'https://github.com/prl405/digits',
    },
    {
      title: 'Palmer Penguins Analysis',
      description:
        'Rigorous analysis of Palmer Penguins dataset using Python and machine learning methods.',
      tags: ['Python', 'Scikit-learn', 'Numpy', 'Matplotlib'],
      repoUrl: 'https://github.com/prl405/palmerpenguins',
    },
  ];

  const handleProjectClick = (repoUrl?: string) => {
    if (repoUrl != undefined) {
      window.open(repoUrl, '_blank');
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.title}
              className="project-card"
              onClick={() => handleProjectClick(project.repoUrl)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleProjectClick(project.repoUrl);
              }}
            >
              <div className="project-image-placeholder">
                <span className="placeholder-text">Project Screenshot</span>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

                {project.repoUrl && (
                  <div className="project-overlay">
                    <span className="view-repo">View on GitHub →</span>
                  </div>
                )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
