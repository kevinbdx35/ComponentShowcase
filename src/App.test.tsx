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

jest.mock('./components/CanadaComponents', () => ({
  CanadaComponents: () => {
    const React = require('react');
    return React.createElement('div', { 'data-testid': 'canada-components' }, 'Canada.ca Components');
  }
}));

jest.mock('./components/AustralianHealthComponents', () => ({
  AustralianHealthComponents: () => {
    const React = require('react');
    return React.createElement('div', { 'data-testid': 'australian-health-components' }, 'Australian Health Components');
  }
}));

jest.mock('./components/GOLDComponents', () => ({
  GOLDComponents: () => {
    const React = require('react');
    return React.createElement('div', { 'data-testid': 'gold-components' }, 'GOLD Components');
  }
}));

jest.mock('./components/NZGovtComponents', () => ({
  NZGovtComponents: () => {
    const React = require('react');
    return React.createElement('div', { 'data-testid': 'nz-govt-components' }, 'New Zealand Government Components');
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
  expect(screen.getByText('Canada.ca')).toBeInTheDocument();
  expect(screen.getByText('Australian Health')).toBeInTheDocument();
  expect(screen.getByText('GOLD')).toBeInTheDocument();
  expect(screen.getByText('New Zealand')).toBeInTheDocument();
});
