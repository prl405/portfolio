import { useState } from 'react';
import type { ExperienceItem } from '../../types';
import './Experience.css';

const Experience: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set([0]));

  const experiences: ExperienceItem[] = [
    {
      title: 'Master of Science in Applied Mathematics',
      company: 'University of Bristol',
      period: '2023 - 2024',
      achievements: [
        'Improve on analytical problem solving focusing on approaches which use data and computation',
        'Master\'s project: Recreated a niche Baysian Hamiltonian Monte Carlo sampler in Julia to compare performance through clear visualisations and metrics',
        'Key modules: Artificial Intelligence, Scientific Computing, Mathematical Data Modelling, Intelligent Information Systems',
      ],
    },
    {
      title: 'Junior Software Engineer',
      company: 'Sparta Global',
      period: '2021 - 2023',
      achievements: [
        'Developed and maintained customer-facing APIs and UIs using Java with Spring Boot and JavaScript with React, serving millions of customers',
        'Delivered 2 major releases encompassing 6 microservices to production with zero critical defects through comprehensive testing strategies',
        'Participated in over 40 sprint cycles following Agile Scrum methodology, regularly creating user stories, documenting technical work, and presenting progress to client stakeholders'
      ],
    },
    {
      title: 'Bachelor of Science in Mathematics',
      company: 'University of Bristol',
      period: '2017 - 2020',
      achievements: [
        'Learnt how to solve complex and abstract problems with absolute clarity and rigor',
        'Key modules: Logic, Statistics, Linear Algebra, Generalised Linear Models',
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
              className={`timeline-item ${index} ${
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
