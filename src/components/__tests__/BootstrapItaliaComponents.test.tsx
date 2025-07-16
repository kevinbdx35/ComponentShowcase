import React from 'react';
import { render } from '@testing-library/react';
import { BootstrapItaliaComponents } from '../BootstrapItaliaComponents';

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

test('renders Bootstrap Italia components', () => {
  const { getByText, getByTestId } = render(<BootstrapItaliaComponents />);
  
  // Check for main headings
  expect(getByText('Benvenuti!')).toBeInTheDocument();
  expect(getByText('I Nostri Servizi')).toBeInTheDocument();
  expect(getByText('Contattaci')).toBeInTheDocument();
  expect(getByText('Il Nostro Team')).toBeInTheDocument();
  expect(getByText('Metriche delle Performance')).toBeInTheDocument();
  
  // Check for charts
  expect(getByTestId('visx-chart')).toBeInTheDocument();
  expect(getByTestId('three-chart')).toBeInTheDocument();
  expect(getByTestId('vanilla-visx-chart')).toBeInTheDocument();
});

test('renders Italian government branding', () => {
  const { getByText } = render(<BootstrapItaliaComponents />);
  
  expect(getByText('Repubblica Italiana')).toBeInTheDocument();
  expect(getByText('Bootstrap Italia')).toBeInTheDocument();
});

test('renders Italian digital services', () => {
  const { getByText } = render(<BootstrapItaliaComponents />);
  
  expect(getByText('Servizi Digitali')).toBeInTheDocument();
  expect(getByText('Supporto Tecnico')).toBeInTheDocument();
  expect(getByText('Ricerca Utenti')).toBeInTheDocument();
  expect(getByText('Test di Accessibilità')).toBeInTheDocument();
});

test('renders team information', () => {
  const { getByText } = render(<BootstrapItaliaComponents />);
  
  expect(getByText('Marco Rossi')).toBeInTheDocument();
  expect(getByText('Lead Design System')).toBeInTheDocument();
  expect(getByText('Laura Bianchi')).toBeInTheDocument();
  expect(getByText('UX Researcher')).toBeInTheDocument();
});

test('renders Italian design system metrics', () => {
  const { getByText } = render(<BootstrapItaliaComponents />);
  
  expect(getByText('120+')).toBeInTheDocument();
  expect(getByText('Amministrazioni')).toBeInTheDocument();
  expect(getByText('45')).toBeInTheDocument();
  expect(getByText('Componenti rilasciati')).toBeInTheDocument();
});

test('renders page alerts with Italian styling', () => {
  const { getByText } = render(<BootstrapItaliaComponents />);
  
  expect(getByText('Successo')).toBeInTheDocument();
  expect(getByText('Informazione')).toBeInTheDocument();
  expect(getByText('Attenzione')).toBeInTheDocument();
  expect(getByText('Errore')).toBeInTheDocument();
});

test('renders Italian welcome message', () => {
  const { getByText } = render(<BootstrapItaliaComponents />);
  
  expect(getByText(/Benvenuti!/)).toBeInTheDocument();
  expect(getByText(/Bootstrap Italia è il modo più semplice/)).toBeInTheDocument();
});