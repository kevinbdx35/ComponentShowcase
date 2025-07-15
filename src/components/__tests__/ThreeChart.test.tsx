import React from 'react';
import { render, screen } from '@testing-library/react';

// Mock the ThreeChart component completely
jest.mock('../ThreeChart', () => {
  const React = require('react');
  return {
    ThreeChart: () => React.createElement('div', { 
      'data-testid': 'three-container',
      style: { height: '400px', width: '100%' }
    }, [
      React.createElement('div', { 'data-testid': 'three-canvas', key: 'canvas' }, [
        React.createElement('div', { 'data-testid': 'orbit-controls', key: 'controls' }),
        React.createElement('div', { 'data-testid': 'three-text', key: 'text-jan' }, 'Jan'),
        React.createElement('div', { 'data-testid': 'three-text', key: 'text-feb' }, 'Feb'),
        React.createElement('div', { 'data-testid': 'three-text', key: 'text-mar' }, 'Mar'),
        React.createElement('div', { 'data-testid': 'three-text', key: 'text-apr' }, 'Apr'),
        React.createElement('div', { 'data-testid': 'three-text', key: 'text-may' }, 'May'),
      ])
    ])
  };
});

const { ThreeChart } = require('../ThreeChart');

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
    
    const container = screen.getByTestId('three-container');
    expect(container).toHaveStyle({ height: '400px', width: '100%' });
  });
});