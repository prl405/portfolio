import './Skills.css';
import { faGit, faHashnode, faHtml5, faJava, faNodeJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { faBolt, faChartBar, faDatabase, faDiamond, faLeaf, faLineChart, faT, faTicket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { SkillCategory } from '../../types';

const Skills: React.FC = () => {

  const skillCategories: SkillCategory[] = [
    {
      name: 'Languages',
      items: [
        { name: 'Java', fa: faJava, color: 'red'},
        { name: 'Python', fa: faPython, color: 'green'},
        { name: 'TypeScript', fa: faDiamond, color: 'blue'},
        { name: 'C++', fa: faHashnode, color: 'green'}, 
      ],
    },
    {
      name: 'Frontend',
      items: [
        { name: 'React', fa: faReact, color: 'blue' },
        { name: 'Node.js', fa: faNodeJs, color: 'black' },
        { name: 'Plotly', fa: faLineChart, color: 'blue'},
        { name: 'HTML/CSS', fa: faHtml5, color: 'orange'},
      ],
    },
    {
      name: 'Backend',
      items: [
        { name: 'Springboot', fa: faLeaf, color: 'green' },
        { name: 'MongoDB', fa: faDatabase, color: 'blue' },
        { name: 'SQL', fa: faDatabase, color: 'blue' },
        { name: 'FastAPI', fa: faBolt, color: 'green' },
      ],
    },
    {
      name: 'Tools & Practices',
      items: [
        { name: 'Sci-kit Learn', fa: faChartBar, color: 'blue' },
        { name: 'Tensorflow', fa: faT, color: 'orange' },
        { name: 'Git', fa: faGit, color: 'red' },
        { name: 'TDD/BDD', fa: faTicket, color: 'red' },
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
