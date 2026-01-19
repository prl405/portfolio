import type { SkillCategory } from '../../types';
import './Skills.css';

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: 'Languages',
      items: [
        { name: 'JavaScript', icon: '📜' },
        { name: 'TypeScript', icon: '🔷' },
        { name: 'Python', icon: '🐍' },
        { name: 'HTML/CSS', icon: '🎨' },
      ],
    },
    {
      name: 'Frontend',
      items: [
        { name: 'React', icon: '⚛️' },
        { name: 'Next.js', icon: '▲' },
        { name: 'Redux', icon: '🔄' },
        { name: 'Tailwind CSS', icon: '🎯' },
      ],
    },
    {
      name: 'Backend',
      items: [
        { name: 'Node.js', icon: '🟩' },
        { name: 'Express', icon: '⚡' },
        { name: 'PostgreSQL', icon: '🗄️' },
        { name: 'MongoDB', icon: '🍃' },
      ],
    },
    {
      name: 'Tools & Platforms',
      items: [
        { name: 'Git', icon: '🔀' },
        { name: 'Docker', icon: '🐳' },
        { name: 'AWS', icon: '☁️' },
        { name: 'CI/CD', icon: '🚀' },
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
                    <span className="skill-icon">{skill.icon}</span>
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
