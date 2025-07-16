import React, { useState } from 'react';
import { XYFrame, OrdinalFrame, NetworkFrame } from 'semiotic';
import { VisxChart } from './VisxChart';
import { ThreeChart } from './ThreeChart';
import { VanillaVisxChart } from './VisxChartVariants';
import '../styles/semiotic-custom.css';

const employeeData = [
  { id: 1, name: 'Sarah Chen', email: 'sarah.chen@techcorp.com', status: 'Active', department: 'Engineering' },
  { id: 2, name: 'Marcus Johnson', email: 'marcus.j@techcorp.com', status: 'Active', department: 'Design' },
  { id: 3, name: 'Elena Rodriguez', email: 'elena.r@techcorp.com', status: 'On Leave', department: 'Marketing' },
  { id: 4, name: 'David Kim', email: 'david.kim@techcorp.com', status: 'Active', department: 'Sales' },
  { id: 5, name: 'Lisa Thompson', email: 'lisa.t@techcorp.com', status: 'Inactive', department: 'HR' }
];

// Semiotic data visualization component using actual Semiotic library
export const SemioticComponents: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const tabs = ['Company Overview', 'Our Services', 'Team', 'Contact'];

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
          <h1 className="semiotic-hero-title">Advanced Data Visualization Platform</h1>
          <p className="semiotic-hero-description">
            Powered by Semiotic - Create stunning, interactive data visualizations with React and D3. 
            Featuring advanced data visualization powered by the Semiotic framework.
          </p>
          <div className="semiotic-hero-actions">
            <button className="semiotic-btn semiotic-btn--primary semiotic-btn--large">Get Started</button>
            <button className="semiotic-btn semiotic-btn--outline semiotic-btn--large">Learn More</button>
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
                  About TechCorp Solutions
                </h3>
                <p style={{ lineHeight: 'var(--semiotic-line-height-relaxed)' }}>
                  Founded in 2015, TechCorp Solutions has been at the forefront of digital transformation, 
                  helping businesses leverage technology to achieve their goals. Our expertise spans cloud computing, 
                  AI/ML, and custom software development with advanced data visualization.
                </p>
              </div>
            )}
            {activeTab === 1 && (
              <div>
                <h3 style={{ color: 'var(--semiotic-primary)', marginBottom: 'var(--semiotic-spacing-md)' }}>
                  Our Services
                </h3>
                <ul style={{ lineHeight: 'var(--semiotic-line-height-relaxed)', paddingLeft: 'var(--semiotic-spacing-lg)' }}>
                  <li>Cloud Infrastructure & Migration</li>
                  <li>AI & Machine Learning Solutions</li>
                  <li>Custom Software Development</li>
                  <li>Digital Transformation Consulting</li>
                  <li>Advanced Data Visualization</li>
                </ul>
              </div>
            )}
            {activeTab === 2 && (
              <div>
                <h3 style={{ color: 'var(--semiotic-primary)', marginBottom: 'var(--semiotic-spacing-md)' }}>
                  Our Team
                </h3>
                <p style={{ lineHeight: 'var(--semiotic-line-height-relaxed)' }}>
                  Our diverse team of experts brings together years of experience in technology, 
                  design, and business strategy. We're passionate about delivering innovative 
                  solutions that drive real business value.
                </p>
              </div>
            )}
            {activeTab === 3 && (
              <div>
                <h3 style={{ color: 'var(--semiotic-primary)', marginBottom: 'var(--semiotic-spacing-md)' }}>
                  Contact Information
                </h3>
                <p style={{ lineHeight: 'var(--semiotic-line-height-relaxed)' }}>
                  Ready to transform your business with technology? Get in touch with our team 
                  to discuss your specific needs and discover how we can help you achieve your goals.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Services Section */}
        <div className="semiotic-services-section">
          <h2 className="semiotic-section-title">Our Services</h2>
          <div className="semiotic-grid">
            <div className="semiotic-card">
              <div className="semiotic-card-header">
                <span className="semiotic-card-icon">☁️</span>
                <span style={{ 
                  padding: 'var(--semiotic-spacing-xs) var(--semiotic-spacing-sm)', 
                  backgroundColor: 'var(--semiotic-primary)', 
                  color: 'var(--semiotic-white)', 
                  borderRadius: 'var(--semiotic-border-radius)', 
                  fontSize: 'var(--semiotic-font-size-xs)', 
                  fontWeight: '700' 
                }}>Popular</span>
              </div>
              <div className="semiotic-card-body">
                <h3 className="semiotic-card-title">Cloud Solutions</h3>
                <p className="semiotic-card-description">
                  Scalable cloud infrastructure and migration services for modern businesses 
                  with integrated data visualization capabilities.
                </p>
              </div>
              <div className="semiotic-card-footer">
                <button className="semiotic-btn semiotic-btn--primary">Learn More</button>
              </div>
            </div>

            <div className="semiotic-card">
              <div className="semiotic-card-header">
                <span className="semiotic-card-icon">🤖</span>
                <span style={{ 
                  padding: 'var(--semiotic-spacing-xs) var(--semiotic-spacing-sm)', 
                  backgroundColor: 'var(--semiotic-secondary)', 
                  color: 'var(--semiotic-white)', 
                  borderRadius: 'var(--semiotic-border-radius)', 
                  fontSize: 'var(--semiotic-font-size-xs)', 
                  fontWeight: '700' 
                }}>Advanced</span>
              </div>
              <div className="semiotic-card-body">
                <h3 className="semiotic-card-title">AI & Analytics</h3>
                <p className="semiotic-card-description">
                  Machine learning and data analytics solutions with powerful visualization 
                  tools for actionable business insights.
                </p>
              </div>
              <div className="semiotic-card-footer">
                <button className="semiotic-btn semiotic-btn--secondary">Contact</button>
              </div>
            </div>

            <div className="semiotic-card">
              <div className="semiotic-card-header">
                <span className="semiotic-card-icon">💻</span>
                <span style={{ 
                  padding: 'var(--semiotic-spacing-xs) var(--semiotic-spacing-sm)', 
                  backgroundColor: 'var(--semiotic-success)', 
                  color: 'var(--semiotic-white)', 
                  borderRadius: 'var(--semiotic-border-radius)', 
                  fontSize: 'var(--semiotic-font-size-xs)', 
                  fontWeight: '700' 
                }}>Premium</span>
              </div>
              <div className="semiotic-card-body">
                <h3 className="semiotic-card-title">Custom Development</h3>
                <p className="semiotic-card-description">
                  Bespoke software development and consulting services with interactive 
                  data visualization dashboards.
                </p>
              </div>
              <div className="semiotic-card-footer">
                <button className="semiotic-btn semiotic-btn--outline">Explore</button>
              </div>
            </div>

            <div className="semiotic-card">
              <div className="semiotic-card-header">
                <span className="semiotic-card-icon">🚀</span>
                <span style={{ 
                  padding: 'var(--semiotic-spacing-xs) var(--semiotic-spacing-sm)', 
                  backgroundColor: 'var(--semiotic-warning)', 
                  color: 'var(--semiotic-white)', 
                  borderRadius: 'var(--semiotic-border-radius)', 
                  fontSize: 'var(--semiotic-font-size-xs)', 
                  fontWeight: '700' 
                }}>Automation</span>
              </div>
              <div className="semiotic-card-body">
                <h3 className="semiotic-card-title">DevOps Solutions</h3>
                <p className="semiotic-card-description">
                  CI/CD pipelines and infrastructure automation with real-time monitoring 
                  and visualization dashboards.
                </p>
              </div>
              <div className="semiotic-card-footer">
                <button className="semiotic-btn semiotic-btn--outline">Deploy</button>
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
          <h2 className="semiotic-section-title">Contact Our Team</h2>
          <form className="semiotic-form">
            <div className="semiotic-form-group">
              <label htmlFor="semiotic-name" className="semiotic-label">Full Name</label>
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
                placeholder="name@company.com"
              />
            </div>

            <div className="semiotic-form-group">
              <label htmlFor="semiotic-category" className="semiotic-label">Category</label>
              <select id="semiotic-category" className="semiotic-select">
                <option value="">Select a category</option>
                <option value="general">General Inquiry</option>
                <option value="support">Technical Support</option>
                <option value="sales">Sales</option>
                <option value="partnership">Partnership</option>
              </select>
            </div>

            <div className="semiotic-form-group">
              <label htmlFor="semiotic-message" className="semiotic-label">Message</label>
              <div className="semiotic-hint-text">Please provide details about your inquiry or how we can help</div>
              <textarea
                id="semiotic-message"
                className="semiotic-textarea"
                placeholder="Write your message here..."
                rows={4}
              ></textarea>
            </div>

            <fieldset className="semiotic-fieldset">
              <legend className="semiotic-fieldset-legend">Preferred Contact Method</legend>
              <div className="semiotic-radio-group">
                <label className="semiotic-radio-label">
                  <input type="radio" name="contact" value="email" className="semiotic-radio" />
                  Email
                </label>
                <label className="semiotic-radio-label">
                  <input type="radio" name="contact" value="phone" className="semiotic-radio" />
                  Phone
                </label>
                <label className="semiotic-radio-label">
                  <input type="radio" name="contact" value="text" className="semiotic-radio" />
                  Text Message
                </label>
              </div>
            </fieldset>

            <fieldset className="semiotic-fieldset">
              <legend className="semiotic-fieldset-legend">Services of Interest</legend>
              <div className="semiotic-checkbox-group">
                <label className="semiotic-checkbox-label">
                  <input type="checkbox" className="semiotic-checkbox" />
                  Cloud Solutions
                </label>
                <label className="semiotic-checkbox-label">
                  <input type="checkbox" className="semiotic-checkbox" />
                  AI & Analytics
                </label>
                <label className="semiotic-checkbox-label">
                  <input type="checkbox" className="semiotic-checkbox" />
                  Custom Development
                </label>
              </div>
            </fieldset>

            <div style={{ textAlign: 'center', marginTop: 'var(--semiotic-spacing-xl)' }}>
              <button type="submit" className="semiotic-btn semiotic-btn--primary semiotic-btn--large">
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Basic Cards */}
        <div className="semiotic-basic-cards-section">
          <h2 className="semiotic-section-title">Product Features</h2>
          <div className="semiotic-grid">
            <div className="semiotic-card">
              <div className="semiotic-card-body">
                <h3 className="semiotic-card-title">Enterprise Security</h3>
                <p className="semiotic-card-description">
                  Advanced security measures and compliance standards for enterprise-grade applications.
                </p>
                <button className="semiotic-btn semiotic-btn--secondary">Learn More</button>
              </div>
            </div>
            <div className="semiotic-card">
              <div className="semiotic-card-body">
                <h3 className="semiotic-card-title">24/7 Support</h3>
                <p className="semiotic-card-description">
                  Round-the-clock technical support and monitoring for critical business operations.
                </p>
                <button className="semiotic-btn semiotic-btn--secondary">Contact Support</button>
              </div>
            </div>
          </div>
        </div>

        {/* Team Table */}
        <div className="semiotic-team-section">
          <h2 className="semiotic-section-title">Our Team Directory</h2>
          <div className="semiotic-table-wrapper">
            <table className="semiotic-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Department</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {employeeData.map((employee) => (
                  <tr key={employee.id}>
                    <td style={{ fontWeight: '600', color: 'var(--semiotic-primary)' }}>{employee.name}</td>
                    <td><a href={`mailto:${employee.email}`} style={{ color: 'var(--semiotic-link)' }}>{employee.email}</a></td>
                    <td>{employee.department}</td>
                    <td><span style={{ 
                      padding: 'var(--semiotic-spacing-xs) var(--semiotic-spacing-sm)', 
                      backgroundColor: employee.status === 'Active' ? 'var(--semiotic-success)' : 
                                     employee.status === 'On Leave' ? 'var(--semiotic-warning)' : 
                                     'var(--semiotic-danger)', 
                      color: 'var(--semiotic-white)', 
                      borderRadius: 'var(--semiotic-border-radius)', 
                      fontSize: 'var(--semiotic-font-size-xs)' 
                    }}>{employee.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Alerts Section */}
        <div className="semiotic-alerts-section">
          <h2 className="semiotic-section-title">System Status</h2>
          
          <div className="semiotic-alert semiotic-alert--success">
            <h3>Success</h3>
            <p>Your technology solution has been successfully deployed and is now operational.</p>
          </div>

          <div className="semiotic-alert semiotic-alert--info">
            <h3>Information</h3>
            <p>New features and analytics capabilities are now available in our platform.</p>
          </div>

          <div className="semiotic-alert semiotic-alert--warning">
            <h3>Warning</h3>
            <p>Scheduled maintenance for our data visualization services is planned for this weekend.</p>
          </div>

          <div className="semiotic-alert semiotic-alert--error">
            <h3>Error</h3>
            <p>Some visualization features may be temporarily unavailable. Our team is working on a fix.</p>
          </div>
        </div>

        {/* Badges and Avatars */}
        <div className="semiotic-badges-section">
          <h2 className="semiotic-section-title">Team Roles & Status</h2>
          <div className="semiotic-grid">
            <div className="semiotic-avatar-card">
              <div className="semiotic-avatar" style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: 'var(--semiotic-primary)',
                color: 'var(--semiotic-white)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                margin: '0 auto 1rem'
              }}>
                SC
              </div>
              <h3 className="semiotic-card-title">Sarah Chen</h3>
              <span style={{ 
                padding: 'var(--semiotic-spacing-xs) var(--semiotic-spacing-sm)', 
                backgroundColor: 'var(--semiotic-primary)', 
                color: 'var(--semiotic-white)', 
                borderRadius: 'var(--semiotic-border-radius)', 
                fontSize: 'var(--semiotic-font-size-xs)' 
              }}>Lead Engineer</span>
            </div>
            <div className="semiotic-avatar-card">
              <div className="semiotic-avatar" style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: 'var(--semiotic-success)',
                color: 'var(--semiotic-white)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                margin: '0 auto 1rem'
              }}>
                MJ
              </div>
              <h3 className="semiotic-card-title">Marcus Johnson</h3>
              <span style={{ 
                padding: 'var(--semiotic-spacing-xs) var(--semiotic-spacing-sm)', 
                backgroundColor: 'var(--semiotic-success)', 
                color: 'var(--semiotic-white)', 
                borderRadius: 'var(--semiotic-border-radius)', 
                fontSize: 'var(--semiotic-font-size-xs)' 
              }}>Designer</span>
            </div>
            <div className="semiotic-avatar-card">
              <div className="semiotic-avatar" style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: 'var(--semiotic-warning)',
                color: 'var(--semiotic-white)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                margin: '0 auto 1rem'
              }}>
                ER
              </div>
              <h3 className="semiotic-card-title">Elena Rodriguez</h3>
              <span style={{ 
                padding: 'var(--semiotic-spacing-xs) var(--semiotic-spacing-sm)', 
                backgroundColor: 'var(--semiotic-warning)', 
                color: 'var(--semiotic-white)', 
                borderRadius: 'var(--semiotic-border-radius)', 
                fontSize: 'var(--semiotic-font-size-xs)' 
              }}>Marketing</span>
            </div>
            <div className="semiotic-avatar-card">
              <div className="semiotic-avatar" style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: 'var(--semiotic-secondary)',
                color: 'var(--semiotic-white)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                margin: '0 auto 1rem'
              }}>
                DK
              </div>
              <h3 className="semiotic-card-title">David Kim</h3>
              <span style={{ 
                padding: 'var(--semiotic-spacing-xs) var(--semiotic-spacing-sm)', 
                backgroundColor: 'var(--semiotic-secondary)', 
                color: 'var(--semiotic-white)', 
                borderRadius: 'var(--semiotic-border-radius)', 
                fontSize: 'var(--semiotic-font-size-xs)' 
              }}>Sales</span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="semiotic-progress-section">
          <h2 className="semiotic-section-title">Project Progress</h2>
          <div className="semiotic-grid">
            <div className="semiotic-progress-item">
              <h3 className="semiotic-card-title">Cloud Migration</h3>
              <div className="semiotic-progress-bar" style={{
                width: '100%',
                height: '20px',
                backgroundColor: 'var(--semiotic-light)',
                borderRadius: 'var(--semiotic-border-radius)',
                overflow: 'hidden',
                marginBottom: '1rem'
              }}>
                <div style={{
                  width: '75%',
                  height: '100%',
                  backgroundColor: 'var(--semiotic-success)',
                  borderRadius: 'var(--semiotic-border-radius)'
                }}></div>
              </div>
              <p>75% Complete - On track for Q4 delivery</p>
            </div>
            <div className="semiotic-progress-item">
              <h3 className="semiotic-card-title">AI Implementation</h3>
              <div className="semiotic-progress-bar" style={{
                width: '100%',
                height: '20px',
                backgroundColor: 'var(--semiotic-light)',
                borderRadius: 'var(--semiotic-border-radius)',
                overflow: 'hidden',
                marginBottom: '1rem'
              }}>
                <div style={{
                  width: '45%',
                  height: '100%',
                  backgroundColor: 'var(--semiotic-primary)',
                  borderRadius: 'var(--semiotic-border-radius)'
                }}></div>
              </div>
              <p>45% Complete - Ahead of schedule</p>
            </div>
          </div>
        </div>

        {/* Static Tabs */}
        <div className="semiotic-static-tabs-section">
          <h2 className="semiotic-section-title">Technology Stack</h2>
          <div className="semiotic-tabs-static">
            <div className="semiotic-tab-content">
              <h3 className="semiotic-card-title">Frontend Technologies</h3>
              <ul>
                <li>React 18 with TypeScript</li>
                <li>Semiotic for data visualization</li>
                <li>D3.js for advanced graphics</li>
                <li>Styled Components for theming</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Company Gallery */}
        <div className="semiotic-gallery-section">
          <h2 className="semiotic-section-title">Company Gallery</h2>
          <div className="semiotic-grid">
            <div className="semiotic-gallery-item">
              <div className="semiotic-image-placeholder" style={{
                backgroundColor: 'var(--semiotic-light)',
                height: '200px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 'var(--semiotic-border-radius)',
                marginBottom: '1rem'
              }}>
                <span style={{ color: 'var(--semiotic-text-light)' }}>Office Space</span>
              </div>
              <h3 className="semiotic-card-title">Modern Workspace</h3>
              <p>Our collaborative open-plan office designed for innovation and creativity.</p>
            </div>
            <div className="semiotic-gallery-item">
              <div className="semiotic-image-placeholder" style={{
                backgroundColor: 'var(--semiotic-light)',
                height: '200px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 'var(--semiotic-border-radius)',
                marginBottom: '1rem'
              }}>
                <span style={{ color: 'var(--semiotic-text-light)' }}>Team Meeting</span>
              </div>
              <h3 className="semiotic-card-title">Collaboration</h3>
              <p>Daily standups and sprint planning sessions that drive our agile development process.</p>
            </div>
            <div className="semiotic-gallery-item">
              <div className="semiotic-image-placeholder" style={{
                backgroundColor: 'var(--semiotic-light)',
                height: '200px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 'var(--semiotic-border-radius)',
                marginBottom: '1rem'
              }}>
                <span style={{ color: 'var(--semiotic-text-light)' }}>Tech Setup</span>
              </div>
              <h3 className="semiotic-card-title">Technology</h3>
              <p>State-of-the-art development environment with the latest tools and technologies.</p>
            </div>
          </div>
        </div>

        {/* Performance Dashboard */}
        <div className="semiotic-stats-section">
          <h2 className="semiotic-section-title">Performance Dashboard</h2>
          <div className="semiotic-stats-grid">
            <div className="semiotic-stat-card">
              <div className="semiotic-stat-number">2.4M</div>
              <div className="semiotic-stat-label">Active Users</div>
            </div>
            <div className="semiotic-stat-card">
              <div className="semiotic-stat-number">$1.2M</div>
              <div className="semiotic-stat-label">Revenue</div>
            </div>
            <div className="semiotic-stat-card">
              <div className="semiotic-stat-number">127</div>
              <div className="semiotic-stat-label">Projects</div>
            </div>
            <div className="semiotic-stat-card">
              <div className="semiotic-stat-number">98.5%</div>
              <div className="semiotic-stat-label">Uptime</div>
            </div>
          </div>
          
          <div className="semiotic-charts-grid">
            <div className="semiotic-chart-container">
              <h3>Performance Analytics</h3>
              <VisxChart />
            </div>
            <div className="semiotic-chart-container">
              <h3>3D Performance Model</h3>
              <ThreeChart />
            </div>
            <div className="semiotic-chart-container">
              <h3>Revenue Trends</h3>
              <VanillaVisxChart />
            </div>
          </div>
        </div>

        {/* Modal Section */}
        <div className="semiotic-modal-section">
          <h2 className="semiotic-section-title">Modal Dialog</h2>
          <div style={{ textAlign: 'center' }}>
            <button onClick={openModal} className="semiotic-btn semiotic-btn--primary">
              Open Modal
            </button>
          </div>
        </div>
      </main>

      {/* Modal */}
      <div className={`semiotic-modal ${isModalOpen ? 'semiotic-modal--open' : ''}`}>
        <div className="semiotic-modal-backdrop" onClick={closeModal}></div>
        <div className="semiotic-modal-dialog">
          <div className="semiotic-modal-content">
            <div className="semiotic-modal-header">
              <h2 className="semiotic-modal-title">Confirm Action</h2>
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
                Are you sure you want to proceed with this action? This will update your 
                technology solution settings and may affect your current visualization configuration.
              </p>
            </div>
            <div className="semiotic-modal-footer">
              <button onClick={closeModal} className="semiotic-btn semiotic-btn--primary">
                Confirm
              </button>
              <button onClick={closeModal} className="semiotic-btn semiotic-btn--outline">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="semiotic-footer">
        <div className="semiotic-footer-content">
          <div>
            <h3 className="semiotic-footer-heading">TechCorp Solutions</h3>
            <p className="semiotic-footer-text">
              Innovative technology solutions for modern businesses with advanced data visualization capabilities.
            </p>
          </div>
          <div>
            <h3 className="semiotic-footer-heading">Resources</h3>
            <p className="semiotic-footer-text">
              Documentation, case studies, and technical resources for our technology solutions.
            </p>
          </div>
          <div>
            <h3 className="semiotic-footer-heading">Company</h3>
            <p className="semiotic-footer-text">
              Learn more about our mission, team, and commitment to delivering exceptional technology solutions.
            </p>
          </div>
          <div>
            <h3 className="semiotic-footer-heading">Support</h3>
            <p className="semiotic-footer-text">
              Get technical support, contact our team, and access resources to help you succeed.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};