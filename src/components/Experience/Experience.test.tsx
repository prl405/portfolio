import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Experience from '../Experience/Experience';

describe('Experience Component', () => {
  it('should render section title', () => {
    render(<Experience />);
    expect(screen.getByText('Experience')).toBeInTheDocument();
  });

  it('should render timeline title items', () => {
    render(<Experience />);
    expect(screen.getByText(/Master of Science in Applied Mathematics/)).toBeInTheDocument();
    expect(screen.getByText('Junior Software Engineer')).toBeInTheDocument();
    expect(screen.getByText('Bachelor of Science in Mathematics')).toBeInTheDocument();
  });

  it('should render company information', () => {
    render(<Experience />);
    expect(screen.getByText('Sparta Global')).toBeInTheDocument();
    expect(screen.getAllByText('University of Bristol')).toHaveLength(2);
  });

  it('should render achievement bullets', () => {
    render(<Experience />);
    expect(screen.getByText(/Developed and maintained customer-facing APIs and UIs using Java with Spring Boot and JavaScript with React, serving millions of customers/)).toBeInTheDocument();
  });
});
