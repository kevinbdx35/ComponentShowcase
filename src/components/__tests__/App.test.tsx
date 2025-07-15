import React from 'react';
import { render, screen } from '@testing-library/react';

// Mock the components to avoid complex rendering issues
jest.mock('../../components/ReferenceComponents', () => ({
  ReferenceComponents: () => {
    const React = require('react');
    return React.createElement('div', { 'data-testid': 'reference-components' }, 'Reference Components');
  }
}));

jest.mock('../../components/AntDesignComponents', () => ({
  AntDesignComponents: () => {
    const React = require('react');
    return React.createElement('div', { 'data-testid': 'ant-design-components' }, 'Ant Design Components');
  }
}));

jest.mock('../../components/MaterialUIComponents', () => ({
  MaterialUIComponents: () => {
    const React = require('react');
    return React.createElement('div', { 'data-testid': 'material-ui-components' }, 'Material UI Components');
  }
}));

jest.mock('../../components/USWDSComponents', () => ({
  USWDSComponents: () => {
    const React = require('react');
    return React.createElement('div', { 'data-testid': 'uswds-components' }, 'USWDS Components');
  }
}));

import App from '../../App';

describe('App Component', () => {
  test('renders navigation links', () => {
    render(<App />);
    
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Vanilla CSS')).toBeInTheDocument();
    expect(screen.getByText('Material UI')).toBeInTheDocument();
    expect(screen.getByText('Ant Design')).toBeInTheDocument();
    expect(screen.getByText('USWDS')).toBeInTheDocument();
  });

  test('renders home page content by default', () => {
    render(<App />);
    
    expect(screen.getByText('UI Design System Comparison')).toBeInTheDocument();
    expect(screen.getByText('Naviguez entre les différents design systems pour comparer leurs composants.')).toBeInTheDocument();
  });
});