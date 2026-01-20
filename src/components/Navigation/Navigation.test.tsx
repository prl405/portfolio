import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Navigation from '../Navigation/Navigation';

describe('Navigation Component', () => {
  it('should render navigation menu items', () => {
    render(<Navigation />);
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
  });

  it('should have hamburger menu button', () => {
    render(<Navigation />);
    const hamburger = screen.getByLabelText('Toggle menu');
    expect(hamburger).toBeInTheDocument();
  });

  it('should scroll to section when menu item is clicked', () => {
    render(<Navigation />);
    const scrollIntoViewMock = vi.fn();
    const mockElement = { scrollIntoView: scrollIntoViewMock };
    
    vi.spyOn(document, 'getElementById').mockReturnValueOnce(mockElement as any);
    
    const aboutButton = screen.getByText('About');
    aboutButton.click();
    
    expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: 'smooth' });
  });
});
