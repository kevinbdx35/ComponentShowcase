import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App';

const AppWithRouter = () => (
  <MemoryRouter>
    <App />
  </MemoryRouter>
);

describe('App Component', () => {
  test('renders navigation links', () => {
    render(<AppWithRouter />);
    
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Vanilla CSS')).toBeInTheDocument();
    expect(screen.getByText('Material UI')).toBeInTheDocument();
    expect(screen.getByText('Ant Design')).toBeInTheDocument();
    expect(screen.getByText('Chakra UI')).toBeInTheDocument();
    expect(screen.getByText('Mantine')).toBeInTheDocument();
  });

  test('renders home page content by default', () => {
    render(<AppWithRouter />);
    
    expect(screen.getByText('UI Design System Comparison')).toBeInTheDocument();
    expect(screen.getByText('Naviguez entre les différents design systems pour comparer leurs composants.')).toBeInTheDocument();
  });
});