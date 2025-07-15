import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MaterialUIComponents } from '../MaterialUIComponents';

describe('MaterialUIComponents', () => {
  test('renders app bar with navigation', () => {
    render(<MaterialUIComponents />);
    
    expect(screen.getByText('TechCorp Solutions')).toBeInTheDocument();
  });

  test('renders hero section with Material Design styling', () => {
    render(<MaterialUIComponents />);
    
    expect(screen.getByText('TechCorp Solutions')).toBeInTheDocument();
    expect(screen.getByText('Innovating the future with cutting-edge technology solutions for modern businesses')).toBeInTheDocument();
    expect(screen.getByText('Get Started')).toBeInTheDocument();
    expect(screen.getByText('Learn More')).toBeInTheDocument();
  });

  test('renders breadcrumb navigation', () => {
    render(<MaterialUIComponents />);
    
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Solutions')).toBeInTheDocument();
    expect(screen.getByText('Overview')).toBeInTheDocument();
  });

  test('renders service cards with chips', () => {
    render(<MaterialUIComponents />);
    
    expect(screen.getByText('Cloud Solutions')).toBeInTheDocument();
    expect(screen.getByText('AI & Analytics')).toBeInTheDocument();
    expect(screen.getByText('Custom Development')).toBeInTheDocument();
    
    // Check for chips
    expect(screen.getByText('Popular')).toBeInTheDocument();
    expect(screen.getByText('Advanced')).toBeInTheDocument();
    expect(screen.getByText('Premium')).toBeInTheDocument();
  });

  test('renders contact form with stepper', () => {
    render(<MaterialUIComponents />);
    
    expect(screen.getByText('Contact Our Team')).toBeInTheDocument();
    expect(screen.getByText('Contact Information')).toBeInTheDocument();
    expect(screen.getByText('Project Details')).toBeInTheDocument();
    expect(screen.getByText('Review & Submit')).toBeInTheDocument();
  });

  test('renders team table with avatars', () => {
    render(<MaterialUIComponents />);
    
    expect(screen.getByText('Our Team Directory')).toBeInTheDocument();
    expect(screen.getByText('Sarah Chen')).toBeInTheDocument();
    expect(screen.getByText('Engineering')).toBeInTheDocument();
    expect(screen.getByText('Design')).toBeInTheDocument();
    expect(screen.getByText('Marketing')).toBeInTheDocument();
  });

  test('renders performance analytics with cards', () => {
    render(<MaterialUIComponents />);
    
    expect(screen.getByText('Company Performance Analytics')).toBeInTheDocument();
    expect(screen.getByText('2.4M')).toBeInTheDocument();
    expect(screen.getByText('Active Users')).toBeInTheDocument();
    expect(screen.getByText('$1.2M')).toBeInTheDocument();
    expect(screen.getByText('Revenue')).toBeInTheDocument();
  });

  test('renders different types of alerts', () => {
    render(<MaterialUIComponents />);
    
    expect(screen.getByText('Operation completed successfully!')).toBeInTheDocument();
    expect(screen.getByText('Please check your input data.')).toBeInTheDocument();
    expect(screen.getByText('Something went wrong. Please try again.')).toBeInTheDocument();
    expect(screen.getByText('Here\'s some helpful information.')).toBeInTheDocument();
  });

  test('opens dialog when button is clicked', () => {
    render(<MaterialUIComponents />);
    
    const modalButton = screen.getByText('Open Modal');
    fireEvent.click(modalButton);
    
    expect(screen.getByText('Modal Title')).toBeInTheDocument();
    expect(screen.getByText('This is a modal dialog with some content using Material Design 3 principles.')).toBeInTheDocument();
  });

  test('renders footer with contact information', () => {
    render(<MaterialUIComponents />);
    
    expect(screen.getByText('hello@techcorp.com')).toBeInTheDocument();
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument();
    expect(screen.getByText('San Francisco, CA')).toBeInTheDocument();
  });

  test('renders company gallery', () => {
    render(<MaterialUIComponents />);
    
    expect(screen.getByText('Our Work Environment')).toBeInTheDocument();
    expect(screen.getByText('Modern Workspace')).toBeInTheDocument();
    expect(screen.getByText('Team Collaboration')).toBeInTheDocument();
    expect(screen.getByText('Technology Development')).toBeInTheDocument();
  });
});