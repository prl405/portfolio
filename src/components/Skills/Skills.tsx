// import type { SkillCategory } from '../../types';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import './Skills.css';
import { faAws, faDocker, faGit, faHtml5, faJs, faNodeJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { faBolt, faBullseye, faDatabase, faDiamond, faRecycle, faRocket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Skill {
  name: string;
  icon: string;
  fa?: IconDefinition;
  color?: string;
}

interface SkillCategory {
  name: string;
  items: Skill[];
}

const Skills: React.FC = () => {
  // TODO: Remove emojis
  const skillCategories: SkillCategory[] = [
    {
      name: 'Languages',
      items: [
        { name: 'JavaScript', icon: '📜', fa: faJs, color: 'yellow'},
        { name: 'TypeScript', icon: '🔷', fa: faDiamond, color: 'blue'},
        { name: 'Python', icon: '🐍', fa: faPython, color: 'green'},
        { name: 'HTML/CSS', icon: '🎨', fa: faHtml5, color: 'orange'},
      ],
    },
    {
      name: 'Frontend',
      items: [
        { name: 'React', icon: '⚛️', fa: faReact, color: 'blue' },
        { name: 'Next.js', icon: '▲', fa: faNodeJs, color: 'black' },
        { name: 'Redux', icon: '🔄', fa: faRecycle, color: 'blue'},
        { name: 'Tailwind CSS', icon: '🎯', fa: faBullseye, color: 'blue'},
      ],
    },
    {
      name: 'Backend',
      items: [
        { name: 'Node.js', icon: '🟩', fa: faNodeJs, color: 'green' },
        { name: 'Express', icon: '⚡', fa: faBolt, color: 'orange' },
        { name: 'PostgreSQL', icon: '🗄️', fa: faDatabase, color: 'blue' },
        { name: 'MongoDB', icon: '🍃', fa: faDatabase, color: 'blue' },
      ],
    },
    {
      name: 'Tools & Platforms',
      items: [
        { name: 'Git', icon: '🔀', fa: faGit, color: 'red' },
        { name: 'Docker', icon: '🐳', fa: faDocker, color: 'blue' },
        { name: 'AWS', icon: '☁️', fa: faAws, color: 'orange' },
        { name: 'CI/CD', icon: '🚀', fa: faRocket, color: 'red' },
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">Skills</h2>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.name} className="skill-category">
              <h3 className="category-title">{category.name}</h3>
              <div className="skill-items">
                {category.items.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    {skill.fa ? <FontAwesomeIcon icon={skill.fa} color={skill.color}/> : <span className="skill-icon">{skill.icon}</span>}
                    {/* <span className="skill-icon">{skill.icon}</span> */}
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
