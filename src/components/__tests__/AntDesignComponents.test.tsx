import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { AntDesignComponents } from '../AntDesignComponents';

describe('AntDesignComponents', () => {
  test('renders app header with navigation', () => {
    render(<AntDesignComponents />);
    
    expect(screen.getByText('TechCorp')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Solutions')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  test('renders hero section', () => {
    render(<AntDesignComponents />);
    
    expect(screen.getByText('TechCorp Solutions')).toBeInTheDocument();
    expect(screen.getByText('Innovating the future with cutting-edge technology solutions for modern businesses')).toBeInTheDocument();
  });

  test('renders breadcrumb navigation', () => {
    render(<AntDesignComponents />);
    
    expect(screen.getByText('Solutions')).toBeInTheDocument();
    expect(screen.getByText('Overview')).toBeInTheDocument();
  });

  test('renders service cards with tags', () => {
    render(<AntDesignComponents />);
    
    expect(screen.getByText('Cloud Solutions')).toBeInTheDocument();
    expect(screen.getByText('AI & Analytics')).toBeInTheDocument();
    expect(screen.getByText('Custom Development')).toBeInTheDocument();
    
    // Check for tags
    expect(screen.getByText('Popular')).toBeInTheDocument();
    expect(screen.getByText('Advanced')).toBeInTheDocument();
    expect(screen.getByText('Premium')).toBeInTheDocument();
  });

  test('renders contact form with steps', () => {
    render(<AntDesignComponents />);
    
    expect(screen.getByText('Contact Our Team')).toBeInTheDocument();
    expect(screen.getByText('Contact Info')).toBeInTheDocument();
    expect(screen.getByText('Project Details')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });

  test('renders team table with badges', () => {
    render(<AntDesignComponents />);
    
    expect(screen.getByText('Our Team Directory')).toBeInTheDocument();
    expect(screen.getByText('Sarah Chen')).toBeInTheDocument();
    expect(screen.getByText('Engineering')).toBeInTheDocument();
    expect(screen.getByText('Design')).toBeInTheDocument();
    expect(screen.getByText('Marketing')).toBeInTheDocument();
  });

  test('renders performance statistics', () => {
    render(<AntDesignComponents />);
    
    expect(screen.getByText('2.4M')).toBeInTheDocument();
    expect(screen.getByText('Active Users')).toBeInTheDocument();
    expect(screen.getByText('$1.2M')).toBeInTheDocument();
    expect(screen.getByText('Revenue')).toBeInTheDocument();
  });

  test('renders different types of alerts', () => {
    render(<AntDesignComponents />);
    
    expect(screen.getByText('Operation completed successfully!')).toBeInTheDocument();
    expect(screen.getByText('Please check your input data.')).toBeInTheDocument();
    expect(screen.getByText('Something went wrong. Please try again.')).toBeInTheDocument();
    expect(screen.getByText('Here\'s some helpful information.')).toBeInTheDocument();
  });

  test('opens modal when button is clicked', () => {
    render(<AntDesignComponents />);
    
    const modalButton = screen.getByText('Open Modal');
    fireEvent.click(modalButton);
    
    expect(screen.getByText('Modal Title')).toBeInTheDocument();
    expect(screen.getByText('This is a modal dialog with some content.')).toBeInTheDocument();
  });

  test('renders footer with contact information', () => {
    render(<AntDesignComponents />);
    
    expect(screen.getByText('hello@techcorp.com')).toBeInTheDocument();
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument();
    expect(screen.getByText('San Francisco, CA')).toBeInTheDocument();
  });
});