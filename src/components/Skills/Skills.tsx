import './Skills.css';
import { faGit, faHashnode, faJava, faNodeJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { faBolt, faBrain, faChartBar, faDatabase, faDiamond, faHandshake, faLeaf, faLineChart, faNetworkWired, faPlusMinus, faT, faTicket, faWebAwesome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { SkillCategory } from '../../types';
import { faFileClipboard } from '@fortawesome/free-regular-svg-icons/faFileClipboard';

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
      name: 'Full Stack Engineering',
      items: [
        { name: 'Springboot', fa: faLeaf, color: 'green' },
        { name: 'React', fa: faReact, color: 'blue' },
        { name: 'Node.js', fa: faNodeJs, color: 'black' },
        { name: 'MongoDB', fa: faDatabase, color: 'blue' },
        { name: 'FastAPI', fa: faBolt, color: 'green' },
      ],
    },
    {
      name: 'AI & Data Science',
      items: [
        { name: 'Sci-kit Learn', fa: faChartBar, color: 'blue' },
        { name: 'Tensorflow', fa: faT, color: 'orange' },
        { name: 'Numpy', fa: faPlusMinus, color: 'purple' },
        { name: 'Pandas', fa: faFileClipboard, color: 'blue' },
        { name: 'Streamlit', fa: faLineChart, color: 'red'},
        { name: 'Plotly', fa: faLineChart, color: 'brown'},
        { name: 'SQL', fa: faDatabase, color: 'blue' },
      ],
    },
    {
      name: 'Tools & Practices',
      items: [
        { name: 'API Development', fa: faNetworkWired, color: 'blue' },
        { name: 'AI/Machine Learning', fa: faBrain, color: 'pink' },
        { name: 'Web Development', fa: faWebAwesome, color: 'green' },
        { name: 'Agile', fa: faHandshake, color: 'orange' },
        { name: 'Git', fa: faGit, color: 'red' },
        { name: 'TDD/BDD', fa: faTicket, color: 'green' },
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
