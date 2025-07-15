import React from 'react';
import { render } from '@testing-library/react';
import { CanadaComponents } from './CanadaComponents';

// Mock the chart components
jest.mock('./VisxChart', () => ({
  VisxChart: () => <div data-testid="visx-chart">Mocked VisxChart</div>
}));

jest.mock('./ThreeChart', () => ({
  ThreeChart: () => <div data-testid="three-chart">Mocked ThreeChart</div>
}));

jest.mock('./VisxChartVariants', () => ({
  VanillaVisxChart: () => <div data-testid="vanilla-visx-chart">Mocked VanillaVisxChart</div>
}));

// Mock CSS import
jest.mock('../styles/canada-custom.css', () => ({}));

describe('CanadaComponents', () => {
  test('renders without crashing', () => {
    render(<CanadaComponents />);
  });
});