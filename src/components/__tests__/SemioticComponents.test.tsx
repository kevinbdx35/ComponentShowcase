import React from 'react';
import { render } from '@testing-library/react';
import { SemioticComponents } from '../SemioticComponents';

// Mock the chart components
jest.mock('../ThreeChart', () => ({
  ThreeChart: () => <div data-testid="three-chart">Three Chart</div>
}));

jest.mock('../VisxChartVariants', () => ({
  VanillaVisxChart: () => <div data-testid="vanilla-visx-chart">Vanilla Visx Chart</div>
}));

// Mock Semiotic components
jest.mock('semiotic', () => ({
  XYFrame: ({ lines, ...props }: any) => (
    <div data-testid="xy-frame" data-lines={JSON.stringify(lines)}>
      XY Frame Chart
    </div>
  ),
  OrdinalFrame: ({ data, ...props }: any) => (
    <div data-testid="ordinal-frame" data-data={JSON.stringify(data)}>
      Ordinal Frame Chart
    </div>
  ),
  NetworkFrame: ({ nodes, edges, ...props }: any) => (
    <div data-testid="network-frame" data-nodes={JSON.stringify(nodes)} data-edges={JSON.stringify(edges)}>
      Network Frame Chart
    </div>
  )
}));

test('renders Semiotic components', () => {
  const { getByText, getByTestId } = render(<SemioticComponents />);
  
  // Check for main headings
  expect(getByText('Semiotic Data Visualization')).toBeInTheDocument();
  expect(getByText('Semiotic Visualization Components')).toBeInTheDocument();
  expect(getByText('Get Started with Semiotic')).toBeInTheDocument();
  expect(getByText('Semiotic Development Team')).toBeInTheDocument();
  expect(getByText('Live Semiotic Visualizations')).toBeInTheDocument();
  
  // Check for charts
  expect(getByTestId('xy-frame')).toBeInTheDocument();
  expect(getByTestId('ordinal-frame')).toBeInTheDocument();
  expect(getByTestId('network-frame')).toBeInTheDocument();
  expect(getByTestId('three-chart')).toBeInTheDocument();
  expect(getByTestId('vanilla-visx-chart')).toBeInTheDocument();
});

test('renders Semiotic framework branding', () => {
  const { getByText } = render(<SemioticComponents />);
  
  expect(getByText('Data Visualization')).toBeInTheDocument();
  expect(getByText('Semiotic Framework')).toBeInTheDocument();
});

test('renders Semiotic visualization components', () => {
  const { getByText } = render(<SemioticComponents />);
  
  expect(getByText('XY Data Visualization')).toBeInTheDocument();
  expect(getByText('Categorical Data Charts')).toBeInTheDocument();
  expect(getByText('Network & Hierarchical Views')).toBeInTheDocument();
  expect(getByText('Rich Customization')).toBeInTheDocument();
});

test('renders development team information', () => {
  const { getByText } = render(<SemioticComponents />);
  
  expect(getByText('Elijah Meeks')).toBeInTheDocument();
  expect(getByText('Creator & Lead')).toBeInTheDocument();
  expect(getByText('Susie Lu')).toBeInTheDocument();
  expect(getByText('Core Contributor')).toBeInTheDocument();
});

test('renders Semiotic framework metrics', () => {
  const { getByText } = render(<SemioticComponents />);
  
  expect(getByText('3')).toBeInTheDocument();
  expect(getByText('Core Frame Types')).toBeInTheDocument();
  expect(getByText('50K+')).toBeInTheDocument();
  expect(getByText('Weekly Downloads')).toBeInTheDocument();
});

test('renders framework status alerts', () => {
  const { getByText } = render(<SemioticComponents />);
  
  expect(getByText('Framework Ready')).toBeInTheDocument();
  expect(getByText('New Features')).toBeInTheDocument();
  expect(getByText('React Version Notice')).toBeInTheDocument();
  expect(getByText('Breaking Changes')).toBeInTheDocument();
});

test('renders data visualization framework description', () => {
  const { getByText } = render(<SemioticComponents />);
  
  expect(getByText(/A powerful React framework combining React & D3/)).toBeInTheDocument();
  expect(getByText(/XYFrame, OrdinalFrame, and NetworkFrame components/)).toBeInTheDocument();
});

test('renders navigation tabs', () => {
  const { getByText } = render(<SemioticComponents />);
  
  expect(getByText('Framework Overview')).toBeInTheDocument();
  expect(getByText('Visualization Types')).toBeInTheDocument();
  expect(getByText('Team')).toBeInTheDocument();
  expect(getByText('Integration')).toBeInTheDocument();
});