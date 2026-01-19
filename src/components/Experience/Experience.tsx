import { useState } from 'react';
import type { ExperienceItem } from '../../types';
import './Experience.css';

const Experience: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set([0]));

  const experiences: ExperienceItem[] = [
    {
      title: 'Senior Software Engineer',
      company: 'Tech Company Inc.',
      period: '2022 - Present',
      type: 'work',
      achievements: [
        'Led development of microservices architecture serving 100k+ users',
        'Improved application performance by 40% through optimization',
        'Mentored 5 junior developers',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      period: '2020 - 2022',
      type: 'work',
      achievements: [
        'Developed and maintained 10+ React applications',
        'Implemented CI/CD pipelines reducing deployment time by 50%',
        'Collaborated with design team on UX improvements',
      ],
    },
    {
      title: 'Bachelor of Science in Computer Science',
      company: 'University Name',
      period: '2016 - 2020',
      type: 'education',
      achievements: [
        'Graduated with honors',
        'Relevant coursework: Algorithms, Data Structures, Web Development',
      ],
    },
  ];

  const handleItemVisible = (index: number) => {
    setVisibleItems((prev) => {
      const newSet = new Set(prev);
      newSet.add(index);
      return newSet;
    });
  };

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <h2 className="section-title">Experience</h2>

        <div className="timeline">
          {experiences.map((item, index) => (
            <div
              key={index}
              className={`timeline-item ${item.type} ${
                visibleItems.has(index) ? 'visible' : ''
              }`}
              onMouseEnter={() => handleItemVisible(index)}
            >
              <div className="timeline-marker"></div>

              <div className="timeline-content">
                <div className="content-header">
                  <h3 className="experience-title">{item.title}</h3>
                  <span className="experience-period">{item.period}</span>
                </div>
                <p className="experience-company">{item.company}</p>

                <ul className="achievements">
                  {item.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
