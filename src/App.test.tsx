import React from 'react';
import { render, screen } from '@testing-library/react';

// Mock the components to avoid complex rendering issues
jest.mock('./components/ReferenceComponents', () => ({
  ReferenceComponents: () => {
    const React = require('react');
    return React.createElement('div', { 'data-testid': 'reference-components' }, 'Reference Components');
  }
}));

jest.mock('./components/AntDesignComponents', () => ({
  AntDesignComponents: () => {
    const React = require('react');
    return React.createElement('div', { 'data-testid': 'ant-design-components' }, 'Ant Design Components');
  }
}));

// MaterialUIComponents is disabled, no mock needed

jest.mock('./components/USWDSComponents', () => ({
  USWDSComponents: () => {
    const React = require('react');
    return React.createElement('div', { 'data-testid': 'uswds-components' }, 'USWDS Components');
  }
}));

jest.mock('./components/GOVUKComponents', () => ({
  GOVUKComponents: () => {
    const React = require('react');
    return React.createElement('div', { 'data-testid': 'govuk-components' }, 'GOV.UK Components');
  }
}));

jest.mock('./components/DSFRComponents', () => ({
  DSFRComponents: () => {
    const React = require('react');
    return React.createElement('div', { 'data-testid': 'dsfr-components' }, 'DSFR Components');
  }
}));

import App from './App';

test('renders navigation links', () => {
  render(<App />);
  
  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByText('Vanilla CSS')).toBeInTheDocument();
  expect(screen.getByText('Ant Design')).toBeInTheDocument();
  expect(screen.getByText('USWDS')).toBeInTheDocument();
  expect(screen.getByText('GOV.UK')).toBeInTheDocument();
  expect(screen.getByText('DSFR')).toBeInTheDocument();
});
