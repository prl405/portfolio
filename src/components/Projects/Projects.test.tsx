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
    expect(screen.getByText('Portfolio Website')).toBeInTheDocument();
    expect(screen.getByText('Career Success AI API')).toBeInTheDocument();
    expect(screen.getByText('Company Registraion Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Third Person Arena Shooter')).toBeInTheDocument();
    expect(screen.getByText('Computer Vision: Digit Classifier')).toBeInTheDocument();
    expect(screen.getByText('Palmer Penguins Analysis')).toBeInTheDocument();
  });

  it('should render project descriptions', () => {
    render(<Projects />);
    expect(screen.getByText(/my personal portfolio website hosted on github/i)).toBeInTheDocument();
    expect(screen.getByText(/AI powered application for predicting starting salary/i)).toBeInTheDocument();
    expect(screen.getByText(/Interactive dashboard visualising company registration data/i)).toBeInTheDocument();
    expect(screen.getByText(/Realised translating game mechanices into code/i)).toBeInTheDocument();
    expect(screen.getByText(/Image classification model using CNNs to accurately classify handwritten digits/i)).toBeInTheDocument();
    expect(screen.getByText(/Rigorous analysis of Palmer Penguins dataset using Python and machine learning methods/i)).toBeInTheDocument();
  });

  it('should render project tags', () => {
    render(<Projects />);
    expect(screen.getAllByText('React').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Python').length).toBeGreaterThan(0);
    expect(screen.getAllByText('TensorFlow').length).toBeGreaterThan(0);
  });
});
