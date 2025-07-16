import React, { useState } from 'react';
import { XYFrame, OrdinalFrame, NetworkFrame } from 'semiotic';
import { ThreeChart } from './ThreeChart';
import { VanillaVisxChart } from './VisxChartVariants';
import '../styles/semiotic-custom.css';

// Semiotic data visualization component using actual Semiotic library
export const SemioticComponents: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const tabs = ['Framework Overview', 'Visualization Types', 'Team', 'Integration'];

  // Sample data for Semiotic visualizations
  const lineData = [
    { week: 1, value: 10 },
    { week: 2, value: 25 },
    { week: 3, value: 15 },
    { week: 4, value: 40 },
    { week: 5, value: 30 },
    { week: 6, value: 55 },
    { week: 7, value: 45 },
    { week: 8, value: 70 }
  ];

  const barData = [
    { category: 'XYFrame', usage: 45 },
    { category: 'OrdinalFrame', usage: 35 },
    { category: 'NetworkFrame', usage: 20 }
  ];

  const networkData = {
    nodes: [
      { id: 'React', category: 'framework' },
      { id: 'D3', category: 'library' },
      { id: 'Semiotic', category: 'framework' },
      { id: 'XYFrame', category: 'component' },
      { id: 'OrdinalFrame', category: 'component' },
      { id: 'NetworkFrame', category: 'component' }
    ],
    edges: [
      { source: 'React', target: 'Semiotic' },
      { source: 'D3', target: 'Semiotic' },
      { source: 'Semiotic', target: 'XYFrame' },
      { source: 'Semiotic', target: 'OrdinalFrame' },
      { source: 'Semiotic', target: 'NetworkFrame' }
    ]
  };

  return (
    <div className="semiotic-container">
      {/* Header */}
      <header className="semiotic-header">
        <div className="semiotic-header-brand">
          <div className="semiotic-logo">
            <div className="semiotic-logo-image">
              📊
            </div>
            <div className="semiotic-brand-text">
              <div className="semiotic-brand-line">Data Visualization</div>
              <div className="semiotic-brand-line">Semiotic Framework</div>
            </div>
          </div>
          <div className="semiotic-header-tools">
            <button className="semiotic-btn semiotic-btn--outline semiotic-btn--small">Documentation</button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="semiotic-main-nav">
        <div className="semiotic-main-nav-content">
          <ul className="semiotic-main-nav-list">
            <li><a href="#" className="semiotic-main-nav-link">XYFrame</a></li>
            <li><a href="#" className="semiotic-main-nav-link">OrdinalFrame</a></li>
            <li><a href="#" className="semiotic-main-nav-link">NetworkFrame</a></li>
            <li><a href="#" className="semiotic-main-nav-link">Examples</a></li>
            <li><a href="#" className="semiotic-main-nav-link">API</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="semiotic-hero">
        <div className="semiotic-hero-content">
          <h1 className="semiotic-hero-title">Semiotic Data Visualization</h1>
          <p className="semiotic-hero-description">
            A powerful React framework combining React & D3 for creating flexible, 
            reusable data visualizations with XYFrame, OrdinalFrame, and NetworkFrame components.
          </p>
          <div className="semiotic-hero-actions">
            <button className="semiotic-btn semiotic-btn--primary semiotic-btn--large">Get Started</button>
            <button className="semiotic-btn semiotic-btn--outline semiotic-btn--large">View Examples</button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="semiotic-main-content">
        {/* Navigation Tabs */}
        <section style={{ marginBottom: 'var(--semiotic-spacing-3xl)' }}>
          <div style={{ 
            borderBottom: '2px solid var(--semiotic-border)', 
            backgroundColor: 'var(--semiotic-white)', 
            borderRadius: 'var(--semiotic-border-radius) var(--semiotic-border-radius) 0 0',
            boxShadow: 'var(--semiotic-shadow-sm)'
          }}>
            <div style={{ display: 'flex', gap: '0' }}>
              {tabs.map((tab, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveTab(index)}
                  style={{ 
                    padding: 'var(--semiotic-spacing-lg) var(--semiotic-spacing-xl)', 
                    border: 'none', 
                    borderBottom: activeTab === index ? '3px solid var(--semiotic-primary)' : '3px solid transparent',
                    backgroundColor: activeTab === index ? 'var(--semiotic-white)' : 'transparent', 
                    color: activeTab === index ? 'var(--semiotic-primary)' : 'var(--semiotic-text-light)',
                    fontWeight: activeTab === index ? '700' : '500',
                    cursor: 'pointer',
                    fontSize: 'var(--semiotic-font-size-base)',
                    fontFamily: 'var(--semiotic-font-family)',
                    transition: 'all 0.3s ease'
                  }}
                  className="semiotic-btn"
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <div style={{ 
            padding: 'var(--semiotic-spacing-2xl)', 
            backgroundColor: 'var(--semiotic-white)', 
            borderRadius: '0 0 var(--semiotic-border-radius) var(--semiotic-border-radius)', 
            boxShadow: 'var(--semiotic-shadow)',
            border: 'var(--semiotic-border-width) solid var(--semiotic-border)'
          }}>
            {activeTab === 0 && (
              <div>
                <h3 style={{ color: 'var(--semiotic-primary)', marginBottom: 'var(--semiotic-spacing-md)' }}>
                  Semiotic Data Visualization Framework
                </h3>
                <p style={{ lineHeight: 'var(--semiotic-line-height-relaxed)' }}>
                  Semiotic is a data visualization framework that combines the power of React and D3 to create 
                  flexible, reusable visualization components. It provides three main frame types for different 
                  data visualization needs: XYFrame for coordinate-based charts, OrdinalFrame for categorical 
                  data, and NetworkFrame for network and hierarchical visualizations.
                </p>
              </div>
            )}
            {activeTab === 1 && (
              <div>
                <h3 style={{ color: 'var(--semiotic-primary)', marginBottom: 'var(--semiotic-spacing-md)' }}>
                  Visualization Types
                </h3>
                <ul style={{ lineHeight: 'var(--semiotic-line-height-relaxed)', paddingLeft: 'var(--semiotic-spacing-lg)' }}>
                  <li><strong>XYFrame:</strong> Line charts, scatter plots, area charts</li>
                  <li><strong>OrdinalFrame:</strong> Bar charts, violin plots, parallel coordinates</li>
                  <li><strong>NetworkFrame:</strong> Flow diagrams, network graphs, hierarchical trees</li>
                  <li><strong>Custom Annotations:</strong> Rich annotation support for all frame types</li>
                  <li><strong>Interactive Features:</strong> Hover effects, brushing, and zoom capabilities</li>
                </ul>
              </div>
            )}
            {activeTab === 2 && (
              <div>
                <h3 style={{ color: 'var(--semiotic-primary)', marginBottom: 'var(--semiotic-spacing-md)' }}>
                  Development Team
                </h3>
                <p style={{ lineHeight: 'var(--semiotic-line-height-relaxed)' }}>
                  Semiotic is developed by the nteract team, led by Elijah Meeks and contributors including 
                  Susie Lu, Jason Reid, and James Womack. The framework is designed to bridge the gap between 
                  React component development and advanced D3 data visualization techniques.
                </p>
              </div>
            )}
            {activeTab === 3 && (
              <div>
                <h3 style={{ color: 'var(--semiotic-primary)', marginBottom: 'var(--semiotic-spacing-md)' }}>
                  React Integration
                </h3>
                <p style={{ lineHeight: 'var(--semiotic-line-height-relaxed)' }}>
                  Semiotic integrates seamlessly with React applications through simple component imports. 
                  Install via npm or yarn, import the desired frame components, and pass data through props. 
                  The framework handles the D3 complexity while maintaining React's declarative approach 
                  to component development.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Semiotic Visualization Cards */}
        <div className="semiotic-services-section">
          <h2 className="semiotic-section-title">Semiotic Visualization Components</h2>
          <div className="semiotic-grid">
            <div className="semiotic-card">
              <div className="semiotic-card-header">
                <span className="semiotic-card-icon">📈</span>
                <span style={{ 
                  padding: 'var(--semiotic-spacing-xs) var(--semiotic-spacing-sm)', 
                  backgroundColor: 'var(--semiotic-primary)', 
                  color: 'var(--semiotic-white)', 
                  borderRadius: 'var(--semiotic-border-radius)', 
                  fontSize: 'var(--semiotic-font-size-xs)', 
                  fontWeight: '700' 
                }}>XYFrame</span>
              </div>
              <div className="semiotic-card-body">
                <h3 className="semiotic-card-title">XY Data Visualization</h3>
                <p className="semiotic-card-description">
                  Perfect for line charts, scatter plots, and area charts. Handles continuous data with 
                  X and Y coordinates, supporting multiple series and advanced annotations.
                </p>
              </div>
              <div className="semiotic-card-footer">
                <button className="semiotic-btn semiotic-btn--primary">Explore XYFrame</button>
              </div>
            </div>

            <div className="semiotic-card">
              <div className="semiotic-card-header">
                <span className="semiotic-card-icon">📊</span>
                <span style={{ 
                  padding: 'var(--semiotic-spacing-xs) var(--semiotic-spacing-sm)', 
                  backgroundColor: 'var(--semiotic-secondary)', 
                  color: 'var(--semiotic-white)', 
                  borderRadius: 'var(--semiotic-border-radius)', 
                  fontSize: 'var(--semiotic-font-size-xs)', 
                  fontWeight: '700' 
                }}>OrdinalFrame</span>
              </div>
              <div className="semiotic-card-body">
                <h3 className="semiotic-card-title">Categorical Data Charts</h3>
                <p className="semiotic-card-description">
                  Ideal for bar charts, violin plots, and parallel coordinates. Specializes in 
                  categorical and ordinal data with flexible styling and interaction options.
                </p>
              </div>
              <div className="semiotic-card-footer">
                <button className="semiotic-btn semiotic-btn--secondary">Explore OrdinalFrame</button>
              </div>
            </div>

            <div className="semiotic-card">
              <div className="semiotic-card-header">
                <span className="semiotic-card-icon">🕸️</span>
                <span style={{ 
                  padding: 'var(--semiotic-spacing-xs) var(--semiotic-spacing-sm)', 
                  backgroundColor: 'var(--semiotic-success)', 
                  color: 'var(--semiotic-white)', 
                  borderRadius: 'var(--semiotic-border-radius)', 
                  fontSize: 'var(--semiotic-font-size-xs)', 
                  fontWeight: '700' 
                }}>NetworkFrame</span>
              </div>
              <div className="semiotic-card-body">
                <h3 className="semiotic-card-title">Network & Hierarchical Views</h3>
                <p className="semiotic-card-description">
                  Create flow diagrams, network visualizations, and hierarchical layouts. 
                  Perfect for showing relationships and connections between data points.
                </p>
              </div>
              <div className="semiotic-card-footer">
                <button className="semiotic-btn semiotic-btn--outline">Explore NetworkFrame</button>
              </div>
            </div>

            <div className="semiotic-card">
              <div className="semiotic-card-header">
                <span className="semiotic-card-icon">🎨</span>
                <span style={{ 
                  padding: 'var(--semiotic-spacing-xs) var(--semiotic-spacing-sm)', 
                  backgroundColor: 'var(--semiotic-warning)', 
                  color: 'var(--semiotic-white)', 
                  borderRadius: 'var(--semiotic-border-radius)', 
                  fontSize: 'var(--semiotic-font-size-xs)', 
                  fontWeight: '700' 
                }}>Customization</span>
              </div>
              <div className="semiotic-card-body">
                <h3 className="semiotic-card-title">Rich Customization</h3>
                <p className="semiotic-card-description">
                  Extensive theming and styling options with support for custom annotations, 
                  tooltips, and interactive features for enhanced user experience.
                </p>
              </div>
              <div className="semiotic-card-footer">
                <button className="semiotic-btn semiotic-btn--outline">View Examples</button>
              </div>
            </div>
          </div>
        </div>

        {/* Live Semiotic Visualizations */}
        <div className="semiotic-charts-section">
          <h2 className="semiotic-section-title">Live Semiotic Visualizations</h2>
          <div className="semiotic-chart-grid">
            <div className="semiotic-chart-container">
              <h3>XYFrame - Line Chart</h3>
              <div className="semiotic-frame">
                <XYFrame
                  size={[400, 250]}
                  lines={{ coordinates: lineData }}
                  xAccessor="week"
                  yAccessor="value"
                  lineStyle={{ stroke: "#ac58e5", strokeWidth: 3 }}
                  axes={[
                    { orient: "left", tickFormat: (d: number) => `${d}%` },
                    { orient: "bottom", tickFormat: (d: number) => `Week ${d}` }
                  ]}
                  margin={{ left: 60, bottom: 60, right: 20, top: 20 }}
                  hoverAnnotation={true}
                />
              </div>
            </div>

            <div className="semiotic-chart-container">
              <h3>OrdinalFrame - Bar Chart</h3>
              <div className="semiotic-frame">
                <OrdinalFrame
                  size={[400, 250]}
                  data={barData}
                  oAccessor="category"
                  rAccessor="usage"
                  style={{ fill: "#00a2ce", stroke: "#0091b5", strokeWidth: 1 }}
                  type="bar"
                  axes={[
                    { orient: "left", tickFormat: (d: number) => `${d}%` }
                  ]}
                  margin={{ left: 60, bottom: 60, right: 20, top: 20 }}
                  hoverAnnotation={true}
                />
              </div>
            </div>

            <div className="semiotic-chart-container">
              <h3>NetworkFrame - Component Relationships</h3>
              <div className="semiotic-frame">
                <NetworkFrame
                  size={[400, 250]}
                  nodes={networkData.nodes}
                  edges={networkData.edges}
                  nodeStyle={(d: any) => ({
                    fill: d.category === 'framework' ? '#ac58e5' : 
                          d.category === 'library' ? '#00a2ce' : '#00e676',
                    stroke: '#333',
                    strokeWidth: 1
                  })}
                  edgeStyle={{ stroke: "#666", strokeWidth: 2 }}
                  nodeLabels={(d: any) => (
                    <text 
                      textAnchor="middle" 
                      fontSize="12" 
                      fill="#333" 
                      dy={4}
                    >
                      {d.id}
                    </text>
                  )}
                  networkType="force"
                  margin={{ left: 20, bottom: 20, right: 20, top: 20 }}
                />
              </div>
            </div>

            <div className="semiotic-chart-container">
              <h3>3D Performance Model</h3>
              <ThreeChart />
            </div>

            <div className="semiotic-chart-container">
              <h3>Alternative Visualization (visx)</h3>
              <VanillaVisxChart />
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="semiotic-form-section">
          <h2 className="semiotic-section-title">Get Started with Semiotic</h2>
          <form className="semiotic-form">
            <div className="semiotic-form-group">
              <label htmlFor="semiotic-name" className="semiotic-label">Developer Name</label>
              <input
                type="text"
                id="semiotic-name"
                className="semiotic-text-input"
                placeholder="Enter your full name"
              />
            </div>

            <div className="semiotic-form-group">
              <label htmlFor="semiotic-email" className="semiotic-label">Email Address</label>
              <input
                type="email"
                id="semiotic-email"
                className="semiotic-text-input"
                placeholder="developer@company.com"
              />
            </div>

            <div className="semiotic-form-group">
              <label htmlFor="semiotic-framework" className="semiotic-label">Primary Frame Interest</label>
              <select id="semiotic-framework" className="semiotic-select">
                <option value="">Select a frame type</option>
                <option value="xyframe">XYFrame - Line/Scatter Charts</option>
                <option value="ordinalframe">OrdinalFrame - Bar/Categorical Charts</option>
                <option value="networkframe">NetworkFrame - Network/Hierarchical</option>
                <option value="all">All Frame Types</option>
              </select>
            </div>

            <div className="semiotic-form-group">
              <label htmlFor="semiotic-project" className="semiotic-label">Project Description</label>
              <textarea
                id="semiotic-project"
                className="semiotic-textarea"
                placeholder="Describe your data visualization project and requirements..."
                rows={4}
              ></textarea>
            </div>

            <div style={{ textAlign: 'center', marginTop: 'var(--semiotic-spacing-xl)' }}>
              <button type="submit" className="semiotic-btn semiotic-btn--primary semiotic-btn--large">
                Start Building with Semiotic
              </button>
            </div>
          </form>
        </div>

        {/* Team Section */}
        <div className="semiotic-team-section">
          <h2 className="semiotic-section-title">Semiotic Development Team</h2>
          <div className="semiotic-table-wrapper">
            <table className="semiotic-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Specialization</th>
                  <th>GitHub</th>
                  <th>Contribution</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ fontWeight: '600', color: 'var(--semiotic-primary)' }}>Elijah Meeks</td>
                  <td>Creator & Lead</td>
                  <td>Data Visualization</td>
                  <td><a href="#" style={{ color: 'var(--semiotic-link)' }}>@emeeks</a></td>
                  <td><span style={{ 
                    padding: 'var(--semiotic-spacing-xs) var(--semiotic-spacing-sm)', 
                    backgroundColor: 'var(--semiotic-primary)', 
                    color: 'var(--semiotic-white)', 
                    borderRadius: 'var(--semiotic-border-radius)', 
                    fontSize: 'var(--semiotic-font-size-xs)' 
                  }}>Founder</span></td>
                </tr>
                <tr>
                  <td style={{ fontWeight: '600', color: 'var(--semiotic-primary)' }}>Susie Lu</td>
                  <td>Core Contributor</td>
                  <td>React Components</td>
                  <td><a href="#" style={{ color: 'var(--semiotic-link)' }}>@susielu</a></td>
                  <td><span style={{ 
                    padding: 'var(--semiotic-spacing-xs) var(--semiotic-spacing-sm)', 
                    backgroundColor: 'var(--semiotic-secondary)', 
                    color: 'var(--semiotic-white)', 
                    borderRadius: 'var(--semiotic-border-radius)', 
                    fontSize: 'var(--semiotic-font-size-xs)' 
                  }}>Active</span></td>
                </tr>
                <tr>
                  <td style={{ fontWeight: '600', color: 'var(--semiotic-primary)' }}>Jason Reid</td>
                  <td>Developer</td>
                  <td>Framework Architecture</td>
                  <td><a href="#" style={{ color: 'var(--semiotic-link)' }}>@jsonkao</a></td>
                  <td><span style={{ 
                    padding: 'var(--semiotic-spacing-xs) var(--semiotic-spacing-sm)', 
                    backgroundColor: 'var(--semiotic-secondary)', 
                    color: 'var(--semiotic-white)', 
                    borderRadius: 'var(--semiotic-border-radius)', 
                    fontSize: 'var(--semiotic-font-size-xs)' 
                  }}>Active</span></td>
                </tr>
                <tr>
                  <td style={{ fontWeight: '600', color: 'var(--semiotic-primary)' }}>James Womack</td>
                  <td>Contributor</td>
                  <td>Testing & Documentation</td>
                  <td><a href="#" style={{ color: 'var(--semiotic-link)' }}>@jwomack</a></td>
                  <td><span style={{ 
                    padding: 'var(--semiotic-spacing-xs) var(--semiotic-spacing-sm)', 
                    backgroundColor: 'var(--semiotic-success)', 
                    color: 'var(--semiotic-white)', 
                    borderRadius: 'var(--semiotic-border-radius)', 
                    fontSize: 'var(--semiotic-font-size-xs)' 
                  }}>Contributor</span></td>
                </tr>
                <tr>
                  <td style={{ fontWeight: '600', color: 'var(--semiotic-primary)' }}>Matt Herman</td>
                  <td>Developer</td>
                  <td>Performance Optimization</td>
                  <td><a href="#" style={{ color: 'var(--semiotic-link)' }}>@mherman</a></td>
                  <td><span style={{ 
                    padding: 'var(--semiotic-spacing-xs) var(--semiotic-spacing-sm)', 
                    backgroundColor: 'var(--semiotic-success)', 
                    color: 'var(--semiotic-white)', 
                    borderRadius: 'var(--semiotic-border-radius)', 
                    fontSize: 'var(--semiotic-font-size-xs)' 
                  }}>Contributor</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Statistics */}
        <div className="semiotic-stats-section">
          <h2 className="semiotic-section-title">Semiotic Framework Metrics</h2>
          <div className="semiotic-stats-grid">
            <div className="semiotic-stat-card">
              <div className="semiotic-stat-number">3</div>
              <div className="semiotic-stat-label">Core Frame Types</div>
            </div>
            <div className="semiotic-stat-card">
              <div className="semiotic-stat-number">50K+</div>
              <div className="semiotic-stat-label">Weekly Downloads</div>
            </div>
            <div className="semiotic-stat-card">
              <div className="semiotic-stat-number">2.0</div>
              <div className="semiotic-stat-label">Latest Version</div>
            </div>
            <div className="semiotic-stat-card">
              <div className="semiotic-stat-number">5.2K</div>
              <div className="semiotic-stat-label">GitHub Stars</div>
            </div>
          </div>
        </div>

        {/* Alerts Section */}
        <div className="semiotic-alerts-section">
          <h2 className="semiotic-section-title">Framework Status</h2>
          
          <div className="semiotic-alert semiotic-alert--success">
            <h3>Framework Ready</h3>
            <p>Semiotic v2.0 is stable and ready for production use with React 18+ applications.</p>
          </div>

          <div className="semiotic-alert semiotic-alert--info">
            <h3>New Features</h3>
            <p>Enhanced NetworkFrame capabilities and improved performance for large datasets now available.</p>
          </div>

          <div className="semiotic-alert semiotic-alert--warning">
            <h3>React Version Notice</h3>
            <p>Please ensure React version compatibility when upgrading to Semiotic v2.0.</p>
          </div>

          <div className="semiotic-alert semiotic-alert--error">
            <h3>Breaking Changes</h3>
            <p>Some API changes in v2.0 may require updates to existing implementations. Check migration guide.</p>
          </div>
        </div>

        {/* Modal Section */}
        <div className="semiotic-modal-section">
          <h2 className="semiotic-section-title">Interactive Demo</h2>
          <button onClick={openModal} className="semiotic-btn semiotic-btn--primary">
            Open Semiotic Demo
          </button>
        </div>
      </main>

      {/* Modal */}
      <div className={`semiotic-modal ${isModalOpen ? 'semiotic-modal--open' : ''}`}>
        <div className="semiotic-modal-backdrop" onClick={closeModal}></div>
        <div className="semiotic-modal-dialog">
          <div className="semiotic-modal-content">
            <div className="semiotic-modal-header">
              <h2 className="semiotic-modal-title">Semiotic Data Visualization Framework</h2>
              <button 
                onClick={closeModal} 
                className="semiotic-modal-close"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>
            <div className="semiotic-modal-body">
              <p>
                Semiotic is a powerful React data visualization framework that combines the flexibility 
                of D3 with the declarative approach of React components.
              </p>
              <p>
                The framework provides three main visualization types:
              </p>
              <ul>
                <li><strong>XYFrame:</strong> For coordinate-based visualizations like line and scatter plots</li>
                <li><strong>OrdinalFrame:</strong> For categorical data including bar charts and violin plots</li>
                <li><strong>NetworkFrame:</strong> For network graphs and hierarchical visualizations</li>
              </ul>
              <p>
                Perfect for creating interactive, responsive data visualizations in modern React applications.
              </p>
            </div>
            <div className="semiotic-modal-footer">
              <button onClick={closeModal} className="semiotic-btn semiotic-btn--primary">
                Start Using Semiotic
              </button>
              <button onClick={closeModal} className="semiotic-btn semiotic-btn--outline">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="semiotic-footer">
        <div className="semiotic-footer-content">
          <div>
            <h3 className="semiotic-footer-heading">Semiotic Framework</h3>
            <p className="semiotic-footer-text">
              A flexible data visualization framework combining React and D3 for modern web applications.
            </p>
          </div>
          <div>
            <h3 className="semiotic-footer-heading">Resources</h3>
            <p className="semiotic-footer-text">
              Documentation, examples, and API references for all Semiotic components and features.
            </p>
          </div>
          <div>
            <h3 className="semiotic-footer-heading">Community</h3>
            <p className="semiotic-footer-text">
              Join the nteract community and contribute to the future of React data visualization.
            </p>
          </div>
          <div>
            <h3 className="semiotic-footer-heading">Support</h3>
            <p className="semiotic-footer-text">
              GitHub issues, Stack Overflow discussions, and community support for Semiotic developers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};