import React, { useState } from 'react';
import { VisxChart } from './VisxChart';
import { ThreeChart } from './ThreeChart';
import { VanillaVisxChart } from './VisxChartVariants';
import '../styles/gold-custom.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
  department: string;
  priority: string;
  businessSize: string;
  newsletter: boolean;
  updates: boolean;
}

export const GOLDComponents: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    serviceType: 'general',
    message: '',
    department: '',
    priority: '',
    businessSize: '',
    newsletter: false,
    updates: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your enquiry. We will respond within 2 business days.');
    console.log('Form submitted:', formData);
  };

  const servicesData = [
    { 
      id: 1, 
      title: 'Digital Services', 
      description: 'Modern digital solutions to streamline government services and improve citizen experience',
      icon: '💻',
      status: 'Available'
    },
    { 
      id: 2, 
      title: 'Design System Support', 
      description: 'Comprehensive support for implementing the GOLD Design System across government agencies',
      icon: '🎨',
      status: 'Active'
    },
    { 
      id: 3, 
      title: 'Accessibility Services', 
      description: 'Ensuring all digital services meet WCAG 2.1 AA standards for inclusive access',
      icon: '♿',
      status: 'Available'
    },
    { 
      id: 4, 
      title: 'Component Library', 
      description: 'Pre-built, tested components following GOLD Design System specifications',
      icon: '🧩',
      status: 'Beta'
    }
  ];

  const teamData = [
    { 
      name: 'Alex Thompson', 
      role: 'Design System Lead', 
      email: 'alex.thompson@dta.gov.au', 
      department: 'Digital Transformation Agency'
    },
    { 
      name: 'Sarah Mitchell', 
      role: 'UX Research Director', 
      email: 'sarah.mitchell@dta.gov.au', 
      department: 'User Research'
    },
    { 
      name: 'David Chen', 
      role: 'Frontend Developer', 
      email: 'david.chen@dta.gov.au', 
      department: 'Engineering'
    },
    { 
      name: 'Emma Williams', 
      role: 'Accessibility Specialist', 
      email: 'emma.williams@dta.gov.au', 
      department: 'Accessibility'
    },
    { 
      name: 'Michael Brown', 
      role: 'Product Manager', 
      email: 'michael.brown@dta.gov.au', 
      department: 'Product'
    }
  ];

  const tabs = [
    { id: 'about', label: 'About GOLD', content: 'Design system overview' },
    { id: 'components', label: 'Components', content: 'Available components' },
    { id: 'guidelines', label: 'Guidelines', content: 'Usage guidelines' },
    { id: 'support', label: 'Support', content: 'Get help and support' }
  ];

  const goldColors = {
    primary: '#06262d',
    secondary: '#00498f',
    background: '#ffffff',
    text: '#313131'
  };

  return (
    <div className="au-gold-container">
      {/* Header with Australian Government branding */}
      <header className="au-gold-header">
        <div className="au-gold-header-brand">
          <div className="au-gold-logo">
            <div className="au-gold-logo-image">
              AU
            </div>
            <div className="au-gold-brand-text">
              <div className="au-gold-brand-line">Australian Government</div>
              <div className="au-gold-brand-line">GOLD Design System</div>
            </div>
          </div>
          
          <div className="au-gold-header-tools">
            <button className="au-gold-btn au-gold-btn--tertiary au-gold-btn--small">
              Help
            </button>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="au-gold-main-nav">
          <button 
            className="au-gold-main-nav-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
          >
            {menuOpen ? 'Close menu' : 'Open menu'}
          </button>
          
          <div className={`au-gold-main-nav-content ${menuOpen ? 'au-gold-main-nav-content--open' : ''}`}>
            <ul className="au-gold-main-nav-list">
              <li><a href="#components" className="au-gold-main-nav-link">Components</a></li>
              <li><a href="#guidelines" className="au-gold-main-nav-link">Guidelines</a></li>
              <li><a href="#resources" className="au-gold-main-nav-link">Resources</a></li>
              <li><a href="#community" className="au-gold-main-nav-link">Community</a></li>
              <li><a href="#support" className="au-gold-main-nav-link">Support</a></li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Breadcrumb Navigation */}
      <nav className="au-gold-breadcrumb">
        <ol className="au-gold-breadcrumb-list">
          <li className="au-gold-breadcrumb-item">
            <a href="#" className="au-gold-breadcrumb-link">Home</a>
          </li>
          <li className="au-gold-breadcrumb-item">
            <a href="#" className="au-gold-breadcrumb-link">Design System</a>
          </li>
          <li className="au-gold-breadcrumb-item au-gold-breadcrumb-current">
            GOLD Components
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="au-gold-hero">
        <div className="au-gold-hero-content">
          <h1 className="au-gold-hero-title">
            GOLD Design System
          </h1>
          <p className="au-gold-hero-description">
            The Australian Government design system for creating consistent, 
            accessible, and user-centered digital services that help citizens 
            understand what they need to do.
          </p>
          <div className="au-gold-hero-actions">
            <button className="au-gold-btn au-gold-btn--primary au-gold-btn--large">
              Get Started
            </button>
            <button className="au-gold-btn au-gold-btn--secondary au-gold-btn--large">
              View Components
            </button>
          </div>
        </div>
      </section>

      <div className="au-gold-main-content">
        {/* Navigation Tabs */}
        <div className="au-gold-grid" style={{ gridTemplateColumns: '1fr', marginBottom: 'var(--au-gold-spacing-2xl)' }}>
          <div className="au-gold-card">
            <div className="au-gold-card-header">
              <h2 style={{ margin: 0, fontSize: 'var(--au-gold-font-size-xl)' }}>Design System Overview</h2>
            </div>
            <div className="au-gold-card-body">
              <div style={{ display: 'flex', marginBottom: 'var(--au-gold-spacing-lg)', borderBottom: '1px solid var(--au-gold-border)' }}>
                {tabs.map((tab, index) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(index)}
                    style={{
                      flex: 1,
                      padding: 'var(--au-gold-spacing-md)',
                      border: 'none',
                      background: index === activeTab ? 'var(--au-gold-primary)' : 'transparent',
                      color: index === activeTab ? 'var(--au-gold-white)' : 'var(--au-gold-text)',
                      cursor: 'pointer',
                      fontWeight: index === activeTab ? '600' : '400',
                      borderRadius: '0'
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <div style={{ padding: 'var(--au-gold-spacing-lg)' }}>
                {activeTab === 0 && (
                  <div>
                    <h3>About GOLD</h3>
                    <p>
                      GOLD Design System (formerly the Australian Government Design System) 
                      provides a framework and tools to help designers and developers build 
                      government products and services more easily. It ensures consistency, 
                      accessibility, and user-centered design across all government digital services.
                    </p>
                  </div>
                )}
                {activeTab === 1 && (
                  <div>
                    <h3>Components</h3>
                    <p>
                      Our component library includes buttons, forms, cards, alerts, navigation, 
                      and layout components. Each component is designed to meet WCAG 2.1 AA 
                      standards and follows government design principles.
                    </p>
                  </div>
                )}
                {activeTab === 2 && (
                  <div>
                    <h3>Guidelines</h3>
                    <p>
                      Design guidelines cover typography, color palettes, spacing, accessibility 
                      requirements, and content strategy. These guidelines ensure consistent 
                      user experiences across all government services.
                    </p>
                  </div>
                )}
                {activeTab === 3 && (
                  <div>
                    <h3>Support</h3>
                    <p>
                      Get support through our community forums, documentation, training resources, 
                      and direct assistance from the GOLD Design System team. We're here to help 
                      you implement world-class government digital services.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <section className="au-gold-services-section">
          <h2 className="au-gold-section-title">Our Services</h2>
          <div className="au-gold-grid">
            {servicesData.map((service) => (
              <div key={service.id} className="au-gold-card">
                <div className="au-gold-card-header">
                  <div className="au-gold-card-icon">{service.icon}</div>
                  <div>
                    <span className={`au-gold-badge ${
                      service.status === 'Available' ? 'au-gold-badge--success' :
                      service.status === 'Active' ? 'au-gold-badge--info' : 
                      service.status === 'Beta' ? 'au-gold-badge--important' : 'au-gold-badge--neutral'
                    }`}>
                      {service.status}
                    </span>
                  </div>
                </div>
                <div className="au-gold-card-body">
                  <h3 className="au-gold-card-title">{service.title}</h3>
                  <p className="au-gold-card-description">{service.description}</p>
                </div>
                <div className="au-gold-card-footer">
                  <button className="au-gold-btn au-gold-btn--primary">
                    Learn more
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className="au-gold-form-section">
          <h2 className="au-gold-section-title">Contact Us</h2>
          <form onSubmit={handleSubmit} className="au-gold-form">
            <div className="au-gold-form-group">
              <label className="au-gold-label" htmlFor="name">
                Full name (required)
              </label>
              <input
                type="text"
                id="name"
                className="au-gold-text-input"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
            
            <div className="au-gold-form-group">
              <label className="au-gold-label" htmlFor="email">
                Email address (required)
              </label>
              <input
                type="email"
                id="email"
                className="au-gold-text-input"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>

            <div className="au-gold-form-group">
              <label className="au-gold-label" htmlFor="phone">
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                className="au-gold-text-input"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>

            <div className="au-gold-form-group">
              <label className="au-gold-label" htmlFor="serviceType">
                Service type (required)
              </label>
              <select
                id="serviceType"
                className="au-gold-select"
                value={formData.serviceType}
                onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
                required
              >
                <option value="general">General enquiry</option>
                <option value="design-system">Design system support</option>
                <option value="accessibility">Accessibility consultation</option>
                <option value="training">Training and workshops</option>
                <option value="technical">Technical support</option>
              </select>
            </div>

            <div className="au-gold-form-group">
              <label className="au-gold-label" htmlFor="department">
                Government department/agency
              </label>
              <input
                type="text"
                id="department"
                className="au-gold-text-input"
                value={formData.department}
                onChange={(e) => setFormData({...formData, department: e.target.value})}
                placeholder="e.g. Department of Health"
              />
            </div>

            <fieldset className="au-gold-fieldset">
              <legend className="au-gold-fieldset-legend">
                Priority level (required)
              </legend>
              <div className="au-gold-control-input">
                <input
                  className="au-gold-control-input-input"
                  id="priority-low"
                  type="radio"
                  name="priority"
                  value="low"
                  checked={formData.priority === 'low'}
                  onChange={(e) => setFormData({...formData, priority: e.target.value})}
                />
                <label className="au-gold-control-input-text" htmlFor="priority-low">
                  Low - General question or feedback
                </label>
              </div>
              <div className="au-gold-control-input">
                <input
                  className="au-gold-control-input-input"
                  id="priority-medium"
                  type="radio"
                  name="priority"
                  value="medium"
                  checked={formData.priority === 'medium'}
                  onChange={(e) => setFormData({...formData, priority: e.target.value})}
                />
                <label className="au-gold-control-input-text" htmlFor="priority-medium">
                  Medium - Implementation assistance needed
                </label>
              </div>
              <div className="au-gold-control-input">
                <input
                  className="au-gold-control-input-input"
                  id="priority-high"
                  type="radio"
                  name="priority"
                  value="high"
                  checked={formData.priority === 'high'}
                  onChange={(e) => setFormData({...formData, priority: e.target.value})}
                />
                <label className="au-gold-control-input-text" htmlFor="priority-high">
                  High - Urgent issue requiring immediate attention
                </label>
              </div>
            </fieldset>

            <div className="au-gold-form-group">
              <label className="au-gold-label" htmlFor="message">
                Your message (required)
              </label>
              <div className="au-gold-hint-text">
                Please provide as much detail as possible about your enquiry
              </div>
              <textarea
                id="message"
                className="au-gold-text-input au-gold-text-input--block"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                maxLength={1000}
                required
              ></textarea>
              <div className="au-gold-character-limit">
                {formData.message.length}/1000 characters
              </div>
            </div>

            <fieldset className="au-gold-fieldset">
              <legend className="au-gold-fieldset-legend">
                Communication preferences
              </legend>
              <div className="au-gold-control-input">
                <input
                  className="au-gold-control-input-input"
                  id="newsletter"
                  type="checkbox"
                  checked={formData.newsletter}
                  onChange={(e) => setFormData({...formData, newsletter: e.target.checked})}
                />
                <label className="au-gold-control-input-text" htmlFor="newsletter">
                  Subscribe to design system updates and newsletters
                </label>
              </div>
              <div className="au-gold-control-input">
                <input
                  className="au-gold-control-input-input"
                  id="updates"
                  type="checkbox"
                  checked={formData.updates}
                  onChange={(e) => setFormData({...formData, updates: e.target.checked})}
                />
                <label className="au-gold-control-input-text" htmlFor="updates">
                  Receive important announcements and breaking changes
                </label>
              </div>
            </fieldset>

            <div className="au-gold-form-actions">
              <button type="submit" className="au-gold-btn au-gold-btn--primary">
                Send enquiry
              </button>
              <button type="button" className="au-gold-btn au-gold-btn--tertiary">
                Clear form
              </button>
            </div>
          </form>
        </section>

        {/* Team Table */}
        <section className="au-gold-team-section">
          <h2 className="au-gold-section-title">Our Team</h2>
          <div className="au-gold-table-wrapper">
            <table className="au-gold-table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Role</th>
                  <th scope="col">Email</th>
                  <th scope="col">Department</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {teamData.map((member, index) => (
                  <tr key={index}>
                    <th scope="row" className="au-gold-table-cell--name">{member.name}</th>
                    <td>{member.role}</td>
                    <td>
                      <a href={`mailto:${member.email}`} className="au-gold-link">
                        {member.email}
                      </a>
                    </td>
                    <td>
                      <span className="au-gold-badge au-gold-badge--info">
                        {member.department}
                      </span>
                    </td>
                    <td>
                      <button className="au-gold-btn au-gold-btn--tertiary au-gold-btn--small">
                        Contact
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Performance Dashboard */}
        <section className="au-gold-charts-section">
          <h2 className="au-gold-section-title">Design System Metrics</h2>
          
          <div className="au-gold-stats-grid">
            <div className="au-gold-stat-card">
              <div className="au-gold-stat-number">150+</div>
              <div className="au-gold-stat-label">Government agencies</div>
            </div>
            <div className="au-gold-stat-card">
              <div className="au-gold-stat-number">50+</div>
              <div className="au-gold-stat-label">Components available</div>
            </div>
            <div className="au-gold-stat-card">
              <div className="au-gold-stat-number">98%</div>
              <div className="au-gold-stat-label">Accessibility compliance</div>
            </div>
            <div className="au-gold-stat-card">
              <div className="au-gold-stat-number">24/7</div>
              <div className="au-gold-stat-label">Community support</div>
            </div>
          </div>

          <div className="au-gold-charts-grid">
            <div className="au-gold-chart-container">
              <h3>Component Usage (3D)</h3>
              <ThreeChart />
            </div>
            <div className="au-gold-chart-container">
              <h3>Adoption Metrics</h3>
              <VisxChart 
                width={400}
                height={300}
                colors={goldColors}
                designSystem="GOLD Design System"
              />
            </div>
            <div className="au-gold-chart-container">
              <h3>User Satisfaction</h3>
              <VanillaVisxChart width={400} height={300} />
            </div>
          </div>
        </section>

        {/* Page Alerts */}
        <section className="au-gold-alerts-section">
          <div className="au-gold-page-alerts au-gold-page-alerts--success">
            <h3>Success</h3>
            <p>Your design system implementation has been successfully validated.</p>
          </div>
          
          <div className="au-gold-page-alerts au-gold-page-alerts--info">
            <h3>Information</h3>
            <p>New GOLD Design System components are now available in version 2.0.</p>
          </div>
          
          <div className="au-gold-page-alerts au-gold-page-alerts--warning">
            <h3>Important</h3>
            <p>Scheduled maintenance will affect the component library this weekend.</p>
          </div>
          
          <div className="au-gold-page-alerts au-gold-page-alerts--error">
            <h3>Action Required</h3>
            <p>Please update your components to the latest version for security compliance.</p>
          </div>
        </section>

        {/* Modal Demo */}
        <div className="au-gold-modal-section">
          <button 
            className="au-gold-btn au-gold-btn--primary" 
            onClick={() => setModalOpen(true)}
          >
            Open system notification
          </button>
          
          {modalOpen && (
            <div className="au-gold-modal au-gold-modal--open">
              <div className="au-gold-modal-backdrop" onClick={() => setModalOpen(false)}></div>
              <div className="au-gold-modal-dialog">
                <div className="au-gold-modal-content">
                  <div className="au-gold-modal-header">
                    <h2 className="au-gold-modal-title">System Update</h2>
                    <button 
                      className="au-gold-modal-close" 
                      onClick={() => setModalOpen(false)}
                      aria-label="Close dialog"
                    >
                      ×
                    </button>
                  </div>
                  <div className="au-gold-modal-body">
                    <p>
                      A new version of the GOLD Design System is available. 
                      This update includes improved accessibility features and 
                      additional components for government services.
                    </p>
                  </div>
                  <div className="au-gold-modal-footer">
                    <button 
                      className="au-gold-btn au-gold-btn--tertiary" 
                      onClick={() => setModalOpen(false)}
                    >
                      Later
                    </button>
                    <button 
                      className="au-gold-btn au-gold-btn--primary" 
                      onClick={() => setModalOpen(false)}
                    >
                      Update now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="au-gold-footer">
        <div className="au-gold-footer-end">
          <div className="au-gold-footer-content">
            <div className="au-gold-footer-section">
              <h3 className="au-gold-footer-heading">About GOLD</h3>
              <ul className="au-gold-footer-list">
                <li><a href="#" className="au-gold-footer-link">What is GOLD</a></li>
                <li><a href="#" className="au-gold-footer-link">Getting started</a></li>
                <li><a href="#" className="au-gold-footer-link">Contributing</a></li>
                <li><a href="#" className="au-gold-footer-link">Community</a></li>
              </ul>
            </div>
            
            <div className="au-gold-footer-section">
              <h3 className="au-gold-footer-heading">Components</h3>
              <ul className="au-gold-footer-list">
                <li><a href="#" className="au-gold-footer-link">All components</a></li>
                <li><a href="#" className="au-gold-footer-link">Layout</a></li>
                <li><a href="#" className="au-gold-footer-link">Navigation</a></li>
                <li><a href="#" className="au-gold-footer-link">Forms</a></li>
              </ul>
            </div>
            
            <div className="au-gold-footer-section">
              <h3 className="au-gold-footer-heading">Resources</h3>
              <ul className="au-gold-footer-list">
                <li><a href="#" className="au-gold-footer-link">Guidelines</a></li>
                <li><a href="#" className="au-gold-footer-link">Templates</a></li>
                <li><a href="#" className="au-gold-footer-link">Downloads</a></li>
                <li><a href="#" className="au-gold-footer-link">Training</a></li>
              </ul>
            </div>
            
            <div className="au-gold-footer-section">
              <h3 className="au-gold-footer-heading">Support</h3>
              <p className="au-gold-footer-text">
                Get help implementing the GOLD Design System in your project
              </p>
              <button className="au-gold-btn au-gold-btn--tertiary au-gold-btn--small">
                Get support
              </button>
            </div>
          </div>
          
          <div className="au-gold-footer-bottom">
            <div className="au-gold-footer-legal">
              <p>© Commonwealth of Australia</p>
              <p>
                GOLD Design System | 
                <a href="#" className="au-gold-footer-link"> Privacy</a> |
                <a href="#" className="au-gold-footer-link"> Accessibility</a> |
                <a href="#" className="au-gold-footer-link"> Copyright</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};