import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Experience from '../Experience/Experience';

describe('Experience Component', () => {
  it('should render section title', () => {
    render(<Experience />);
    expect(screen.getByText('Experience')).toBeInTheDocument();
  });

  it('should render work experience items', () => {
    render(<Experience />);
    expect(screen.getByText('Senior Software Engineer')).toBeInTheDocument();
    expect(screen.getByText('Full Stack Developer')).toBeInTheDocument();
  });

  it('should render education items', () => {
    render(<Experience />);
    expect(screen.getByText(/Bachelor of Science in Computer Science/)).toBeInTheDocument();
  });

  it('should render company information', () => {
    render(<Experience />);
    expect(screen.getByText('Tech Company Inc.')).toBeInTheDocument();
    expect(screen.getByText('Digital Solutions Ltd.')).toBeInTheDocument();
  });

  it('should render achievement bullets', () => {
    render(<Experience />);
    expect(screen.getByText(/Led development of microservices/)).toBeInTheDocument();
  });
});
