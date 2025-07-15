import React from 'react';
import { render } from '@testing-library/react';
import { AustralianHealthComponents } from '../AustralianHealthComponents';

// Mock the chart components
jest.mock('../VisxChart', () => ({
  VisxChart: () => <div data-testid="visx-chart">Visx Chart</div>
}));

jest.mock('../ThreeChart', () => ({
  ThreeChart: () => <div data-testid="three-chart">Three Chart</div>
}));

jest.mock('../VisxChartVariants', () => ({
  VanillaVisxChart: () => <div data-testid="vanilla-visx-chart">Vanilla Visx Chart</div>
}));

test('renders Australian Health components', () => {
  const { getByText, getByTestId } = render(<AustralianHealthComponents />);
  
  // Check for main headings
  expect(getByText('Better health outcomes for all Australians')).toBeInTheDocument();
  expect(getByText('Our Health Services')).toBeInTheDocument();
  expect(getByText('Provide Feedback')).toBeInTheDocument();
  expect(getByText('Our Leadership Team')).toBeInTheDocument();
  expect(getByText('Health System Performance')).toBeInTheDocument();
  
  // Check for charts
  expect(getByTestId('visx-chart')).toBeInTheDocument();
  expect(getByTestId('three-chart')).toBeInTheDocument();
  expect(getByTestId('vanilla-visx-chart')).toBeInTheDocument();
});

test('renders Australian government branding', () => {
  const { getByText } = render(<AustralianHealthComponents />);
  
  expect(getByText('Australian Government')).toBeInTheDocument();
  expect(getByText('Department of Health and Aged Care')).toBeInTheDocument();
});

test('renders health services', () => {
  const { getByText } = render(<AustralianHealthComponents />);
  
  expect(getByText('Health Information Hub')).toBeInTheDocument();
  expect(getByText('My Health Record')).toBeInTheDocument();
  expect(getByText('Aged Care Navigator')).toBeInTheDocument();
  expect(getByText('Mental Health Support')).toBeInTheDocument();
});

test('renders team information', () => {
  const { getByText } = render(<AustralianHealthComponents />);
  
  expect(getByText('Dr. Sarah Melbourne')).toBeInTheDocument();
  expect(getByText('Chief Health Officer')).toBeInTheDocument();
  expect(getByText('James Wilson')).toBeInTheDocument();
  expect(getByText('Digital Health Director')).toBeInTheDocument();
});

test('renders statistics', () => {
  const { getByText } = render(<AustralianHealthComponents />);
  
  expect(getByText('25.7M')).toBeInTheDocument();
  expect(getByText('Australians served')).toBeInTheDocument();
  expect(getByText('22.2M')).toBeInTheDocument();
  expect(getByText('My Health Records')).toBeInTheDocument();
});