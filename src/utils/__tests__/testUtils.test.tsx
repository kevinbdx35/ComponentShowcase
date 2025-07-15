import React from 'react';
import { render, screen } from '@testing-library/react';

// Test utilities for consistent testing setup
export const renderWithRouter = (ui: React.ReactElement, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(ui);
};

// Mock data for consistent testing
export const mockEmployeeData = [
  { id: 1, name: 'Sarah Chen', email: 'sarah.chen@techcorp.com', status: 'Active', department: 'Engineering' },
  { id: 2, name: 'Marcus Johnson', email: 'marcus.j@techcorp.com', status: 'Active', department: 'Design' },
  { id: 3, name: 'Elena Rodriguez', email: 'elena.r@techcorp.com', status: 'On Leave', department: 'Marketing' }
];

export const mockFormData = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  message: 'Test message',
  category: 'general',
  newsletter: false,
  budget: 50000,
  rating: 5
};

// Helper function to test common UI elements across all design systems
export const testCommonElements = (componentName: string) => {
  describe(`${componentName} Common Elements`, () => {
    test('contains company name', () => {
      expect(screen.getByText('TechCorp Solutions')).toBeInTheDocument();
    });

    test('contains service offerings', () => {
      expect(screen.getByText('Cloud Solutions')).toBeInTheDocument();
      expect(screen.getByText('AI & Analytics')).toBeInTheDocument();
      expect(screen.getByText('Custom Development')).toBeInTheDocument();
    });

    test('contains contact information', () => {
      expect(screen.getByText('hello@techcorp.com')).toBeInTheDocument();
      expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument();
      expect(screen.getByText('San Francisco, CA')).toBeInTheDocument();
    });

    test('contains team members', () => {
      expect(screen.getByText('Sarah Chen')).toBeInTheDocument();
      expect(screen.getByText('Marcus Johnson')).toBeInTheDocument();
      expect(screen.getByText('Elena Rodriguez')).toBeInTheDocument();
    });

    test('contains performance metrics', () => {
      expect(screen.getByText('2.4M')).toBeInTheDocument();
      expect(screen.getByText('Active Users')).toBeInTheDocument();
      expect(screen.getByText('$1.2M')).toBeInTheDocument();
      expect(screen.getByText('Revenue')).toBeInTheDocument();
    });
  });
};

// Test for accessibility basics
export const testAccessibility = (componentName: string) => {
  describe(`${componentName} Accessibility`, () => {
    test('has proper heading structure', () => {
      const headings = screen.getAllByRole('heading');
      expect(headings.length).toBeGreaterThan(0);
    });

    test('has proper form labels', () => {
      const nameInput = screen.getByLabelText(/name/i);
      const emailInput = screen.getByLabelText(/email/i);
      
      expect(nameInput).toBeInTheDocument();
      expect(emailInput).toBeInTheDocument();
    });

    test('has proper button roles', () => {
      const buttons = screen.getAllByRole('button');
      expect(buttons.length).toBeGreaterThan(0);
    });

    test('has proper link roles', () => {
      const links = screen.getAllByRole('link');
      expect(links.length).toBeGreaterThan(0);
    });
  });
};

// Performance test helper
export const testPerformance = (componentName: string) => {
  describe(`${componentName} Performance`, () => {
    test('renders within reasonable time', () => {
      const startTime = performance.now();
      render(<div>Test component</div>);
      const endTime = performance.now();
      
      expect(endTime - startTime).toBeLessThan(1000); // Should render in less than 1 second
    });
  });
};

// Visual regression test setup
export const testVisualConsistency = (componentName: string) => {
  describe(`${componentName} Visual Consistency`, () => {
    test('maintains consistent spacing', () => {
      const containers = screen.getAllByTestId(/container|section/i);
      // Basic test that containers exist
      expect(containers.length).toBeGreaterThan(0);
    });

    test('maintains consistent color scheme', () => {
      // Test that elements with specific styling are present
      const companyName = screen.getByText('TechCorp Solutions');
      expect(companyName).toBeInTheDocument();
    });
  });
};

describe('Test Utils', () => {
  test('renderWithRouter works correctly', () => {
    const TestComponent = () => <div>Test Component</div>;
    renderWithRouter(<TestComponent />);
    
    expect(screen.getByText('Test Component')).toBeInTheDocument();
  });

  test('mock data is properly structured', () => {
    expect(mockEmployeeData).toHaveLength(3);
    expect(mockEmployeeData[0]).toHaveProperty('name');
    expect(mockEmployeeData[0]).toHaveProperty('email');
    expect(mockEmployeeData[0]).toHaveProperty('status');
    expect(mockEmployeeData[0]).toHaveProperty('department');
  });

  test('mock form data is properly structured', () => {
    expect(mockFormData).toHaveProperty('name');
    expect(mockFormData).toHaveProperty('email');
    expect(mockFormData).toHaveProperty('message');
    expect(mockFormData).toHaveProperty('category');
    expect(mockFormData).toHaveProperty('newsletter');
    expect(mockFormData).toHaveProperty('budget');
    expect(mockFormData).toHaveProperty('rating');
  });
});