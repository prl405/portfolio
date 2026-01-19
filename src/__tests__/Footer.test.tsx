import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer/Footer';

describe('Footer Component', () => {
  it('should render footer sections', () => {
    render(<Footer />);
    expect(screen.getByText('Navigation')).toBeInTheDocument();
    expect(screen.getByText('Social')).toBeInTheDocument();
    expect(screen.getByText('Quick Links')).toBeInTheDocument();
  });

  it('should render navigation links', () => {
    render(<Footer />);
    const aboutLinks = screen.getAllByText('About');
    expect(aboutLinks.length).toBeGreaterThan(0);
  });

  it('should render social media links', () => {
    render(<Footer />);
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByText('GitHub')).toBeInTheDocument();
  });

  it('should render copyright year', () => {
    render(<Footer />);
    const year = new Date().getFullYear();
    expect(screen.getByText(new RegExp(year.toString()))).toBeInTheDocument();
  });

  it('should render scroll to top button', () => {
    render(<Footer />);
    const scrollButton = screen.getByLabelText('Scroll to top');
    expect(scrollButton).toBeInTheDocument();
  });
});
