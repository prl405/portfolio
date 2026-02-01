import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from './About';

describe('About Component', () => {
  it('should render name and title', () => {
    render(<About />);
    expect(screen.getByText('Pedro Liedl')).toBeInTheDocument();
    expect(screen.getByText('Full Stack Software Engineer')).toBeInTheDocument();
  });

  it('should render bio text', () => {
    render(<About />);
    expect(screen.getByText(/I'm a full-stack software engineer who/)).toBeInTheDocument();
  });

  it('should render skill tags', () => {
    render(<About />);
    expect(screen.getByText('Java')).toBeInTheDocument();
    expect(screen.getByText('Python')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('API Development')).toBeInTheDocument();
    expect(screen.getByText('AI/Machine Learning')).toBeInTheDocument();
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
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
