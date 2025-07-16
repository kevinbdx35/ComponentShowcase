import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ThemeShowcase } from './pages/ThemeShowcase';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/themes" element={<ThemeShowcase />} />
          <Route path="*" element={<ThemeShowcase />} />
        </Routes>
      </Layout>
    </Router>
  );
}

function Home() {
  return (
    <div className="home-container">
      <div className="home-hero">
        <h1>UI Design System Comparison</h1>
        <p>Explore and compare different design systems with the new unified architecture</p>
      </div>

      <div className="home-stats">
        <div className="home-stat-card">
          <div className="home-stat-number">8</div>
          <div className="home-stat-label">Design Systems</div>
        </div>
        <div className="home-stat-card">
          <div className="home-stat-number">4</div>
          <div className="home-stat-label">Government Systems</div>
        </div>
        <div className="home-stat-card">
          <div className="home-stat-number">1</div>
          <div className="home-stat-label">Generic Component</div>
        </div>
        <div className="home-stat-card">
          <div className="home-stat-number">React</div>
          <div className="home-stat-label">Framework</div>
        </div>
      </div>

      <div className="home-categories">
        <div className="home-category-card">
          <h2 className="home-category-title">
            🏛️ Government Design Systems
          </h2>
          <ul className="home-category-list">
            <li><span className="status-indicator active"></span><span className="home-category-link">U.S. Web Design System (USWDS)</span></li>
            <li><span className="status-indicator active"></span><span className="home-category-link">GOV.UK Design System</span></li>
            <li><span className="status-indicator active"></span><span className="home-category-link">French Government (DSFR)</span></li>
            <li><span className="status-indicator active"></span><span className="home-category-link">Bootstrap Italia</span></li>
          </ul>
        </div>

        <div className="home-category-card">
          <h2 className="home-category-title">
            🎨 UI Libraries & Frameworks
          </h2>
          <ul className="home-category-list">
            <li><span className="status-indicator active"></span><span className="home-category-link">Vanilla CSS (Reference)</span></li>
            <li><span className="status-indicator active"></span><span className="home-category-link">Material UI (Material Design 3)</span></li>
            <li><span className="status-indicator active"></span><span className="home-category-link">Ant Design</span></li>
            <li><span className="status-indicator active"></span><span className="home-category-link">Evergreen UI</span></li>
          </ul>
        </div>
      </div>

      <div className="home-cta">
        <h2>New Architecture</h2>
        <p>The project now uses a unified architecture with:</p>
        <ul>
          <li>✅ <strong>One generic component</strong> that works with all design systems</li>
          <li>✅ <strong>Theme-specific implementations</strong> for each design system</li>
          <li>✅ <strong>TypeScript interfaces</strong> for type safety</li>
          <li>✅ <strong>Real-time theme switching</strong> capabilities</li>
        </ul>
        <a href="/themes" className="home-cta-button">
          View Theme Showcase
        </a>
      </div>
    </div>
  );
}

export default App;