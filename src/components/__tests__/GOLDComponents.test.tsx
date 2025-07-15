import React from 'react';
import { render } from '@testing-library/react';
import { GOLDComponents } from '../GOLDComponents';

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

test('renders GOLD components', () => {
  const { getByText, getByTestId } = render(<GOLDComponents />);
  
  // Check for main headings
  expect(getByText('GOLD Design System')).toBeInTheDocument();
  expect(getByText('Our Services')).toBeInTheDocument();
  expect(getByText('Contact Us')).toBeInTheDocument();
  expect(getByText('Our Team')).toBeInTheDocument();
  expect(getByText('Design System Metrics')).toBeInTheDocument();
  
  // Check for charts
  expect(getByTestId('visx-chart')).toBeInTheDocument();
  expect(getByTestId('three-chart')).toBeInTheDocument();
  expect(getByTestId('vanilla-visx-chart')).toBeInTheDocument();
});

test('renders Australian government branding', () => {
  const { getByText } = render(<GOLDComponents />);
  
  expect(getByText('Australian Government')).toBeInTheDocument();
  expect(getByText('GOLD Design System')).toBeInTheDocument();
});

test('renders GOLD services', () => {
  const { getByText } = render(<GOLDComponents />);
  
  expect(getByText('Digital Services')).toBeInTheDocument();
  expect(getByText('Design System Support')).toBeInTheDocument();
  expect(getByText('Accessibility Services')).toBeInTheDocument();
  expect(getByText('Component Library')).toBeInTheDocument();
});

test('renders team information', () => {
  const { getByText } = render(<GOLDComponents />);
  
  expect(getByText('Alex Thompson')).toBeInTheDocument();
  expect(getByText('Design System Lead')).toBeInTheDocument();
  expect(getByText('Sarah Mitchell')).toBeInTheDocument();
  expect(getByText('UX Research Director')).toBeInTheDocument();
});

test('renders design system metrics', () => {
  const { getByText } = render(<GOLDComponents />);
  
  expect(getByText('150+')).toBeInTheDocument();
  expect(getByText('Government agencies')).toBeInTheDocument();
  expect(getByText('50+')).toBeInTheDocument();
  expect(getByText('Components available')).toBeInTheDocument();
});

test('renders page alerts', () => {
  const { getByText } = render(<GOLDComponents />);
  
  expect(getByText('Success')).toBeInTheDocument();
  expect(getByText('Information')).toBeInTheDocument();
  expect(getByText('Important')).toBeInTheDocument();
  expect(getByText('Action Required')).toBeInTheDocument();
});