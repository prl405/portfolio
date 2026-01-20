import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from './About';

describe('About Component', () => {
  it('should render name and title', () => {
    render(<About />);
    expect(screen.getByText('Your Name')).toBeInTheDocument();
    expect(screen.getByText('Full Stack Software Engineer')).toBeInTheDocument();
  });

  it('should render bio text', () => {
    render(<About />);
    expect(screen.getByText(/Passionate full-stack developer/)).toBeInTheDocument();
  });

  it('should render skill tags', () => {
    render(<About />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Node.js')).toBeInTheDocument();
  });

  it('should render social links', () => {
    render(<About />);
    const linkedinLink = screen.getByText('LinkedIn');
    const githubLink = screen.getByText('GitHub');
    
    expect(linkedinLink).toBeInTheDocument();
    expect(githubLink).toBeInTheDocument();
  });

  it('should render photo placeholder', () => {
    render(<About />);
    expect(screen.getByText('Professional Photo')).toBeInTheDocument();
  });
});
