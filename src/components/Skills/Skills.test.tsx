import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Skills from '../Skills/Skills';

describe('Skills Component', () => {
  it('should render section title', () => {
    render(<Skills />);
    expect(screen.getByText('Skills')).toBeInTheDocument();
  });

  it('should render skill categories', () => {
    render(<Skills />);
    expect(screen.getByText('Languages')).toBeInTheDocument();
    expect(screen.getByText('Full Stack Engineering')).toBeInTheDocument();
    expect(screen.getByText('AI & Data Science')).toBeInTheDocument();
    expect(screen.getByText('Tools & Practices')).toBeInTheDocument();
  });

  it('should render skills within categories', () => {
    render(<Skills />);
    expect(screen.getByText('C++')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Java')).toBeInTheDocument();
    expect(screen.getByText('Git')).toBeInTheDocument();
  });

  it('should render skill icons', () => {
    render(<Skills />);
    const icons = screen.getAllByRole('img', { hidden: true });
    expect(icons.length).toBeGreaterThan(0);
  });
});
