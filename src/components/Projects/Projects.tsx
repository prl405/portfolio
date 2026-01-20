import type { Project } from '../../types';
import './Projects.css';

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce platform with user authentication, product filtering, and payment integration.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      repoUrl: 'https://github.com',
    },
    {
      title: 'Task Management App',
      description:
        'Collaborative task management application with real-time updates and team workspaces.',
      tags: ['React', 'Firebase', 'Tailwind CSS'],
      repoUrl: 'https://github.com',
    },
    {
      title: 'Weather Dashboard',
      description:
        'Real-time weather dashboard with location search, forecasts, and interactive maps.',
      tags: ['React', 'OpenWeather API', 'Charts.js'],
      repoUrl: 'https://github.com',
    },
    {
      title: 'Blog Platform',
      description:
        'A modern blogging platform with markdown support, comments, and SEO optimization.',
      tags: ['Next.js', 'Prisma', 'PostgreSQL', 'NextAuth.js'],
      repoUrl: 'https://github.com',
    },
    {
      title: 'Social Media Analytics',
      description:
        'Analytics dashboard for tracking social media metrics and performance across platforms.',
      tags: ['React', 'D3.js', 'Node.js', 'MongoDB'],
      repoUrl: 'https://github.com',
    },
    {
      title: 'AI Chat Application',
      description:
        'Real-time chat application with AI-powered suggestions and natural language processing.',
      tags: ['React', 'WebSocket', 'Python', 'OpenAI API'],
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

              <div className="project-overlay">
                <span className="view-repo">View on GitHub →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
