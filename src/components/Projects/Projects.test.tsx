import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Projects from '../Projects/Projects';

describe('Projects Component', () => {
  it('should render section title', () => {
    render(<Projects />);
    expect(screen.getByText('Projects')).toBeInTheDocument();
  });

  it('should render project cards', () => {
    render(<Projects />);
    expect(screen.getByText('E-Commerce Platform')).toBeInTheDocument();
    expect(screen.getByText('Task Management App')).toBeInTheDocument();
    expect(screen.getByText('Weather Dashboard')).toBeInTheDocument();
  });

  it('should render project descriptions', () => {
    render(<Projects />);
    expect(screen.getByText(/full-stack e-commerce platform/i)).toBeInTheDocument();
  });

  it('should render project tags', () => {
    render(<Projects />);
    expect(screen.getAllByText('React').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Node.js').length).toBeGreaterThan(0);
    expect(screen.getAllByText('PostgreSQL').length).toBeGreaterThan(0);
  });
});
