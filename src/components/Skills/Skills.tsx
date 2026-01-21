import './Skills.css';
import { faAws, faDocker, faGit, faHtml5, faJs, faNodeJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { faBolt, faBullseye, faDatabase, faDiamond, faRecycle, faRocket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { SkillCategory } from '../../types';

const Skills: React.FC = () => {

  const skillCategories: SkillCategory[] = [
    {
      name: 'Languages',
      items: [
        { name: 'JavaScript', fa: faJs, color: 'yellow'},
        { name: 'TypeScript', fa: faDiamond, color: 'blue'},
        { name: 'Python', fa: faPython, color: 'green'},
        { name: 'HTML/CSS', fa: faHtml5, color: 'orange'},
      ],
    },
    {
      name: 'Frontend',
      items: [
        { name: 'React', fa: faReact, color: 'blue' },
        { name: 'Next.js', fa: faNodeJs, color: 'black' },
        { name: 'Redux', fa: faRecycle, color: 'blue'},
        { name: 'Tailwind CSS', fa: faBullseye, color: 'blue'},
      ],
    },
    {
      name: 'Backend',
      items: [
        { name: 'Node.js', fa: faNodeJs, color: 'green' },
        { name: 'Express', fa: faBolt, color: 'orange' },
        { name: 'PostgreSQL', fa: faDatabase, color: 'blue' },
        { name: 'MongoDB', fa: faDatabase, color: 'blue' },
      ],
    },
    {
      name: 'Tools & Platforms',
      items: [
        { name: 'Git', fa: faGit, color: 'red' },
        { name: 'Docker', fa: faDocker, color: 'blue' },
        { name: 'AWS', fa: faAws, color: 'orange' },
        { name: 'CI/CD', fa: faRocket, color: 'red' },
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
                    <FontAwesomeIcon icon={skill.fa} color={skill.color}/>
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
