import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { GOVUKComponents } from '../GOVUKComponents';

describe('GOVUKComponents', () => {
  test('renders company name and hero section', () => {
    render(<GOVUKComponents />);
    
    expect(screen.getAllByText('TechCorp Solutions')).toHaveLength(2);
    expect(screen.getByText('Innovating the future with cutting-edge technology solutions for modern businesses')).toBeInTheDocument();
  });

  test('renders service cards', () => {
    render(<GOVUKComponents />);
    
    expect(screen.getByText('Cloud Solutions')).toBeInTheDocument();
    expect(screen.getByText('AI & Analytics')).toBeInTheDocument();
    expect(screen.getByText('Custom Development')).toBeInTheDocument();
  });

  test('renders contact form with proper labels', () => {
    render(<GOVUKComponents />);
    
    expect(screen.getByLabelText('Full name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email address')).toBeInTheDocument();
    expect(screen.getByLabelText('Category')).toBeInTheDocument();
    expect(screen.getByLabelText('Message')).toBeInTheDocument();
  });

  test('renders team table with employee data', () => {
    render(<GOVUKComponents />);
    
    expect(screen.getByText('Our Team Directory')).toBeInTheDocument();
    expect(screen.getByText('Sarah Chen')).toBeInTheDocument();
    expect(screen.getByText('Marcus Johnson')).toBeInTheDocument();
    expect(screen.getByText('Elena Rodriguez')).toBeInTheDocument();
  });

  test('renders performance statistics', () => {
    render(<GOVUKComponents />);
    
    expect(screen.getByText('2.4M')).toBeInTheDocument();
    expect(screen.getByText('Active Users')).toBeInTheDocument();
    expect(screen.getByText('$1.2M')).toBeInTheDocument();
    expect(screen.getByText('Revenue')).toBeInTheDocument();
  });

  test('renders different types of alerts', () => {
    render(<GOVUKComponents />);
    
    expect(screen.getByText('Operation completed successfully!')).toBeInTheDocument();
    expect(screen.getByText('Please check your input data.')).toBeInTheDocument();
    expect(screen.getByText('Something went wrong. Please try again.')).toBeInTheDocument();
    expect(screen.getByText('Here\'s some helpful information.')).toBeInTheDocument();
  });

  test('opens modal when button is clicked', () => {
    render(<GOVUKComponents />);
    
    const modalButton = screen.getByText('Open Modal');
    fireEvent.click(modalButton);
    
    expect(screen.getByText('Modal Title')).toBeInTheDocument();
  });

  test('renders footer with contact information', () => {
    render(<GOVUKComponents />);
    
    expect(screen.getByText('Contact: hello@techcorp.com')).toBeInTheDocument();
    expect(screen.getByText('Phone: +1 (555) 123-4567')).toBeInTheDocument();
    expect(screen.getByText('Address: San Francisco, CA')).toBeInTheDocument();
  });

  test('renders GOV.UK specific elements', () => {
    render(<GOVUKComponents />);
    
    expect(screen.getByText('GOV.UK')).toBeInTheDocument();
    expect(screen.getByText('beta')).toBeInTheDocument();
    expect(screen.getByText('feedback')).toBeInTheDocument();
  });

  test('renders breadcrumb navigation', () => {
    render(<GOVUKComponents />);
    
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Technology Solutions')).toBeInTheDocument();
  });

  test('form submission shows success alert', () => {
    render(<GOVUKComponents />);
    
    const submitButton = screen.getByText('Send message');
    fireEvent.click(submitButton);
    
    expect(screen.getByText('Your message has been sent successfully!')).toBeInTheDocument();
  });
});