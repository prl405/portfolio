import { useState } from 'react';
import './Navigation.css';

interface NavItem {
  label: string;
  icon: string;
  id: string;
}

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: 'About', icon: '👤', id: 'about' },
    { label: 'Experience', icon: '💼', id: 'experience' },
    { label: 'Skills', icon: '⚙️', id: 'skills' },
    { label: 'Projects', icon: '🚀', id: 'projects' },
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
                <span className="nav-icon">{item.icon}</span>
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
              <span className="nav-icon">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
