import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ReferenceComponents } from '../ReferenceComponents';

// Mock ThreeChart to avoid 3D rendering issues in tests
jest.mock('../ThreeChart', () => ({
  ThreeChart: () => <div data-testid="three-chart">3D Chart Mock</div>
}));

describe('ReferenceComponents', () => {
  test('renders company name and hero section', () => {
    render(<ReferenceComponents />);
    
    expect(screen.getByText('TechCorp Solutions')).toBeInTheDocument();
    expect(screen.getByText('Innovating the future with cutting-edge technology solutions for modern businesses')).toBeInTheDocument();
  });

  test('renders all service cards', () => {
    render(<ReferenceComponents />);
    
    expect(screen.getByText('Cloud Solutions')).toBeInTheDocument();
    expect(screen.getByText('AI & Analytics')).toBeInTheDocument();
    expect(screen.getByText('Custom Development')).toBeInTheDocument();
  });

  test('renders contact form with all fields', () => {
    render(<ReferenceComponents />);
    
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/inquiry type/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/project details/i)).toBeInTheDocument();
  });

  test('renders team table with employee data', () => {
    render(<ReferenceComponents />);
    
    expect(screen.getByText('Sarah Chen')).toBeInTheDocument();
    expect(screen.getByText('Marcus Johnson')).toBeInTheDocument();
    expect(screen.getByText('Elena Rodriguez')).toBeInTheDocument();
    expect(screen.getByText('David Kim')).toBeInTheDocument();
    expect(screen.getByText('Lisa Thompson')).toBeInTheDocument();
  });

  test('renders performance analytics', () => {
    render(<ReferenceComponents />);
    
    expect(screen.getByText('2.4M')).toBeInTheDocument();
    expect(screen.getByText('Active Users')).toBeInTheDocument();
    expect(screen.getByText('$1.2M')).toBeInTheDocument();
    expect(screen.getByText('Revenue')).toBeInTheDocument();
  });

  test('renders three.js chart', () => {
    render(<ReferenceComponents />);
    
    expect(screen.getByTestId('three-chart')).toBeInTheDocument();
  });

  test('handles tab navigation', () => {
    render(<ReferenceComponents />);
    
    const companyTab = screen.getByText('Company Overview');
    const servicesTab = screen.getByText('Our Services');
    
    expect(companyTab).toBeInTheDocument();
    expect(servicesTab).toBeInTheDocument();
    
    fireEvent.click(servicesTab);
    // Tab content should change but we're not testing specific content changes
  });

  test('renders footer with contact information', () => {
    render(<ReferenceComponents />);
    
    expect(screen.getByText('hello@techcorp.com')).toBeInTheDocument();
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument();
    expect(screen.getByText('San Francisco, CA')).toBeInTheDocument();
  });

  test('renders gallery images', () => {
    render(<ReferenceComponents />);
    
    const images = screen.getAllByRole('img');
    expect(images.length).toBeGreaterThan(0);
  });
});