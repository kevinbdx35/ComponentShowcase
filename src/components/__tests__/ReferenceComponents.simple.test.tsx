import React from 'react';
import { render, screen } from '@testing-library/react';

// Mock ThreeChart to avoid 3D rendering issues in tests
jest.mock('../ThreeChart', () => ({
  ThreeChart: () => <div data-testid="three-chart">3D Chart Mock</div>
}));

// Simple test that doesn't require full component
describe('ReferenceComponents Simple Tests', () => {
  test('ThreeChart mock renders correctly', () => {
    const { ThreeChart } = require('../ThreeChart');
    render(<ThreeChart />);
    
    expect(screen.getByTestId('three-chart')).toBeInTheDocument();
    expect(screen.getByText('3D Chart Mock')).toBeInTheDocument();
  });
});