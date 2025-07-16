import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const designSystems = [
    { path: '/reference', name: 'Reference', status: 'active' },
    { path: '/ant-design', name: 'Ant Design', status: 'active' },
    { path: '/uswds', name: 'USWDS', status: 'active', category: 'Government' },
    { path: '/govuk', name: 'GOV.UK', status: 'active', category: 'Government' },
    { path: '/dsfr', name: 'DSFR', status: 'active', category: 'Government' },
    { path: '/canada', name: 'Canada.ca', status: 'active', category: 'Government' },
    { path: '/australian-health', name: 'Australian Health', status: 'active', category: 'Government' },
    { path: '/gold', name: 'GOLD', status: 'active', category: 'Government' },
    { path: '/nz-govt', name: 'New Zealand', status: 'active', category: 'Government' },
    { path: '/bootstrap-italia', name: 'Bootstrap Italia', status: 'active', category: 'Government' },
    { path: '/semiotic', name: 'Semiotic', status: 'active', category: 'Data Visualization' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="layout">
      <header className="layout-header">
        <div className="layout-header-content">
          <Link to="/" className="layout-logo">
            <h1>UI Design System Comparison</h1>
          </Link>
          <nav className="layout-nav">
            <div className="layout-nav-section">
              <h3>Design Systems</h3>
              <ul>
                {designSystems.map((system) => (
                  <li key={system.path}>
                    <Link 
                      to={system.path}
                      className={`layout-nav-link ${isActive(system.path) ? 'active' : ''}`}
                    >
                      {system.name}
                      {system.category && (
                        <span className={`layout-nav-category ${system.category.toLowerCase().replace(' ', '-')}`}>
                          {system.category}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </header>
      
      <main className="layout-main">
        {children}
      </main>
      
      <footer className="layout-footer">
        <div className="layout-footer-content">
          <p>&copy; 2024 UI Design System Comparison - Educational Purpose</p>
          <p>Comparing various design systems and their implementations</p>
        </div>
      </footer>
    </div>
  );
};