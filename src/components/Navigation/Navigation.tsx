import { useState } from 'react';
import './Navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGear, faRocket, faUser } from '@fortawesome/free-solid-svg-icons';
import type { NavItem } from '../../types';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // TODO: Reconsider emojis
  const navItems: NavItem[] = [
    { label: 'About', id: 'about', fa: faUser, color: 'black' },
    { label: 'Experience', id: 'experience', fa: faBriefcase, color: 'brown' },
    { label: 'Skills', id: 'skills', fa: faGear, color: 'grey' },
    { label: 'Projects', id: 'projects', fa: faRocket, color: 'red' },
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-content">
          {/* Desktop Menu */}
          <div className="nav-menu desktop">
            {navItems.map((item) => (
              <button
                key={item.id}
                className="nav-button"
                onClick={() => handleScroll(item.id)}
              >
                <FontAwesomeIcon icon={item.fa} color={item.color} />
                {/* <span className="nav-icon">{item.icon}</span> */}
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`hamburger ${isOpen ? 'active' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="nav-menu mobile">
          {navItems.map((item) => (
            <button
              key={item.id}
              className="nav-button"
              onClick={() => handleScroll(item.id)}
            >
              <FontAwesomeIcon icon={item.fa} color={item.color} />
              {/* <span className="nav-icon">{item.icon}</span> */}
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
