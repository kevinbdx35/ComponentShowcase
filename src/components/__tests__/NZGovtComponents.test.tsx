import React from 'react';
import { render } from '@testing-library/react';
import { NZGovtComponents } from '../NZGovtComponents';

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

test('renders New Zealand Government components', () => {
  const { getByText, getByTestId } = render(<NZGovtComponents />);
  
  // Check for main headings
  expect(getByText('New Zealand Government Design System')).toBeInTheDocument();
  expect(getByText('Our Digital Services')).toBeInTheDocument();
  expect(getByText('Get in Touch')).toBeInTheDocument();
  expect(getByText('Our Team')).toBeInTheDocument();
  expect(getByText('Design System Performance')).toBeInTheDocument();
  
  // Check for charts
  expect(getByTestId('visx-chart')).toBeInTheDocument();
  expect(getByTestId('three-chart')).toBeInTheDocument();
  expect(getByTestId('vanilla-visx-chart')).toBeInTheDocument();
});

test('renders New Zealand government branding', () => {
  const { getByText } = render(<NZGovtComponents />);
  
  expect(getByText('New Zealand Government')).toBeInTheDocument();
  expect(getByText('Design System')).toBeInTheDocument();
});

test('renders New Zealand digital services', () => {
  const { getByText } = render(<NZGovtComponents />);
  
  expect(getByText('Digital Services')).toBeInTheDocument();
  expect(getByText('Design System Support')).toBeInTheDocument();
  expect(getByText('User Research')).toBeInTheDocument();
  expect(getByText('Accessibility Testing')).toBeInTheDocument();
});

test('renders team information', () => {
  const { getByText } = render(<NZGovtComponents />);
  
  expect(getByText('Sarah Johnson')).toBeInTheDocument();
  expect(getByText('Design System Lead')).toBeInTheDocument();
  expect(getByText('Michael Chen')).toBeInTheDocument();
  expect(getByText('UX Researcher')).toBeInTheDocument();
});

test('renders design system metrics', () => {
  const { getByText } = render(<NZGovtComponents />);
  
  expect(getByText('45+')).toBeInTheDocument();
  expect(getByText('Government agencies')).toBeInTheDocument();
  expect(getByText('12')).toBeInTheDocument();
  expect(getByText('Components released')).toBeInTheDocument();
});

test('renders page alerts with New Zealand styling', () => {
  const { getByText } = render(<NZGovtComponents />);
  
  expect(getByText('Success')).toBeInTheDocument();
  expect(getByText('Note')).toBeInTheDocument();
  expect(getByText('Warning')).toBeInTheDocument();
  expect(getByText('Error')).toBeInTheDocument();
});

test('renders Kiwi greeting', () => {
  const { getByText } = render(<NZGovtComponents />);
  
  expect(getByText(/Kia ora!/)).toBeInTheDocument();
});