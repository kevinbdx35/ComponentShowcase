import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThreeChart } from '../ThreeChart';

// Mock @react-three/fiber and @react-three/drei
jest.mock('@react-three/fiber', () => ({
  Canvas: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="three-canvas">{children}</div>
  ),
  useFrame: () => {}
}));

jest.mock('@react-three/drei', () => ({
  OrbitControls: () => <div data-testid="orbit-controls" />,
  Text: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="three-text">{children}</div>
  )
}));

describe('ThreeChart', () => {
  test('renders three.js canvas', () => {
    render(<ThreeChart />);
    
    expect(screen.getByTestId('three-canvas')).toBeInTheDocument();
  });

  test('renders orbit controls', () => {
    render(<ThreeChart />);
    
    expect(screen.getByTestId('orbit-controls')).toBeInTheDocument();
  });

  test('renders text labels', () => {
    render(<ThreeChart />);
    
    const textElements = screen.getAllByTestId('three-text');
    expect(textElements.length).toBeGreaterThan(0);
    
    // Check for month labels
    expect(screen.getByText('Jan')).toBeInTheDocument();
    expect(screen.getByText('Feb')).toBeInTheDocument();
    expect(screen.getByText('Mar')).toBeInTheDocument();
    expect(screen.getByText('Apr')).toBeInTheDocument();
    expect(screen.getByText('May')).toBeInTheDocument();
  });

  test('has correct container dimensions', () => {
    render(<ThreeChart />);
    
    const container = screen.getByTestId('three-canvas').parentElement;
    expect(container).toHaveStyle({ height: '400px', width: '100%' });
  });
});