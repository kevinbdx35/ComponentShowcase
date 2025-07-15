import React, { useState } from 'react';
import { VisxChart } from './VisxChart';
import { ThreeChart } from './ThreeChart';
import { VanillaVisxChart } from './VisxChartVariants';
import '../styles/nz-govt-custom.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
  agency: string;
  priority: string;
  projectType: string;
  newsletter: boolean;
  updates: boolean;
}

export const NZGovtComponents: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    serviceType: 'general',
    message: '',
    agency: '',
    priority: '',
    projectType: '',
    newsletter: false,
    updates: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Kia ora! Your enquiry has been received. We will respond within 2 business days.');
    console.log('Form submitted:', formData);
  };

  const servicesData = [
    { 
      id: 1, 
      title: 'Digital Services', 
      description: 'Modern, accessible digital services that put citizens first and meet government standards',
      icon: '💻',
      status: 'Available'
    },
    { 
      id: 2, 
      title: 'Design System Support', 
      description: 'Comprehensive guidance and support for implementing the New Zealand Government Design System',
      icon: '🎨',
      status: 'Active'
    },
    { 
      id: 3, 
      title: 'User Research', 
      description: 'Evidence-based research to understand citizen needs and improve service delivery',
      icon: '🔍',
      status: 'Available'
    },
    { 
      id: 4, 
      title: 'Accessibility Testing', 
      description: 'Ensuring all government digital services are accessible to all New Zealanders',
      icon: '♿',
      status: 'Priority'
    }
  ];

  const teamData = [
    { 
      name: 'Sarah Johnson', 
      role: 'Design System Lead', 
      email: 'sarah.johnson@digital.govt.nz', 
      department: 'Digital.govt.nz'
    },
    { 
      name: 'Michael Chen', 
      role: 'UX Researcher', 
      email: 'michael.chen@digital.govt.nz', 
      department: 'User Research'
    },
    { 
      name: 'Emma Thompson', 
      role: 'Frontend Developer', 
      email: 'emma.thompson@digital.govt.nz', 
      department: 'Engineering'
    },
    { 
      name: 'James Wilson', 
      role: 'Accessibility Specialist', 
      email: 'james.wilson@digital.govt.nz', 
      department: 'Accessibility'
    },
    { 
      name: 'Rachel Brown', 
      role: 'Content Designer', 
      email: 'rachel.brown@digital.govt.nz', 
      department: 'Content Design'
    }
  ];

  const tabs = [
    { id: 'about', label: 'About the Design System', content: 'Design system overview' },
    { id: 'components', label: 'Components', content: 'Available components' },
    { id: 'guidelines', label: 'Guidelines', content: 'Usage guidelines' },
    { id: 'support', label: 'Get Support', content: 'Help and support' }
  ];

  const nzColors = {
    primary: '#003d6b',
    secondary: '#0066a6',
    background: '#ffffff',
    text: '#262626'
  };

  return (
    <div className="nz-container">
      {/* Header with New Zealand Government branding */}
      <header className="nz-header">
        <div className="nz-header-brand">
          <div className="nz-logo">
            <div className="nz-logo-image">
              NZ
            </div>
            <div className="nz-brand-text">
              <div className="nz-brand-line">New Zealand Government</div>
              <div className="nz-brand-line">Design System</div>
            </div>
          </div>
          
          <div className="nz-header-tools">
            <button className="nz-btn nz-btn--tertiary nz-btn--small">
              Help
            </button>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="nz-main-nav">
          <button 
            className="nz-main-nav-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
          >
            {menuOpen ? 'Close menu' : 'Open menu'}
          </button>
          
          <div className={`nz-main-nav-content ${menuOpen ? 'nz-main-nav-content--open' : ''}`}>
            <ul className="nz-main-nav-list">
              <li><a href="#components" className="nz-main-nav-link">Components</a></li>
              <li><a href="#guidelines" className="nz-main-nav-link">Guidelines</a></li>
              <li><a href="#resources" className="nz-main-nav-link">Resources</a></li>
              <li><a href="#community" className="nz-main-nav-link">Community</a></li>
              <li><a href="#support" className="nz-main-nav-link">Support</a></li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Breadcrumb Navigation */}
      <nav className="nz-breadcrumb">
        <ol className="nz-breadcrumb-list">
          <li className="nz-breadcrumb-item">
            <a href="#" className="nz-breadcrumb-link">Home</a>
          </li>
          <li className="nz-breadcrumb-item">
            <a href="#" className="nz-breadcrumb-link">Digital Services</a>
          </li>
          <li className="nz-breadcrumb-item nz-breadcrumb-current">
            Design System
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className="nz-hero">
        <div className="nz-hero-content">
          <h1 className="nz-hero-title">
            New Zealand Government Design System
          </h1>
          <p className="nz-hero-description">
            Kia ora! Build accessible, consistent government websites that put citizens first. 
            Our design system combines international best practices with cutting-edge Kiwi innovations 
            to create digital services that work for all New Zealanders.
          </p>
          <div className="nz-hero-actions">
            <button className="nz-btn nz-btn--primary nz-btn--large">
              Start now
            </button>
            <button className="nz-btn nz-btn--secondary nz-btn--large">
              View components
            </button>
          </div>
        </div>
      </section>

      <div className="nz-main-content">
        {/* Design System Overview */}
        <div className="nz-grid" style={{ gridTemplateColumns: '1fr', marginBottom: 'var(--nz-spacing-2xl)' }}>
          <div className="nz-card">
            <div className="nz-card-header">
              <h2 style={{ margin: 0, fontSize: 'var(--nz-font-size-xl)' }}>Design System Information</h2>
            </div>
            <div className="nz-card-body">
              <div style={{ display: 'flex', marginBottom: 'var(--nz-spacing-lg)', borderBottom: '2px solid var(--nz-border)' }}>
                {tabs.map((tab, index) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(index)}
                    style={{
                      flex: 1,
                      padding: 'var(--nz-spacing-md)',
                      border: 'none',
                      background: index === activeTab ? 'var(--nz-primary)' : 'transparent',
                      color: index === activeTab ? 'var(--nz-white)' : 'var(--nz-text)',
                      cursor: 'pointer',
                      fontWeight: index === activeTab ? '600' : '400',
                      borderRadius: '0',
                      fontSize: 'var(--nz-font-size-base)'
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <div style={{ padding: 'var(--nz-spacing-lg)' }}>
                {activeTab === 0 && (
                  <div>
                    <h3>About the New Zealand Government Design System</h3>
                    <p>
                      Our design system helps teams prototype, design, and develop government websites 
                      quickly and efficiently. Built on international best practices from GOV.UK, USWDS, 
                      and the Australian Government Design System, it ensures accessibility and consistency 
                      across all government digital services.
                    </p>
                  </div>
                )}
                {activeTab === 1 && (
                  <div>
                    <h3>Components</h3>
                    <p>
                      Our component library includes buttons, forms, page alerts, text inputs, radios, 
                      checkboxes, and more. Each component is tested for accessibility and designed to 
                      solve specific user problems while maintaining consistency across government websites.
                    </p>
                  </div>
                )}
                {activeTab === 2 && (
                  <div>
                    <h3>Guidelines</h3>
                    <p>
                      Follow our guidelines for typography, color, layout, and content design. These 
                      guidelines ensure your digital services meet government standards and provide 
                      excellent user experiences for all New Zealanders.
                    </p>
                  </div>
                )}
                {activeTab === 3 && (
                  <div>
                    <h3>Get Support</h3>
                    <p>
                      Need help implementing the design system? Contact us at info@digital.govt.nz, 
                      join our Slack community, or create an issue on GitHub. We're here to help you 
                      create better digital services for New Zealand.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <section className="nz-services-section">
          <h2 className="nz-section-title">Our Digital Services</h2>
          <div className="nz-grid">
            {servicesData.map((service) => (
              <div key={service.id} className="nz-card">
                <div className="nz-card-header">
                  <div className="nz-card-icon">{service.icon}</div>
                  <div>
                    <span className={`nz-badge ${
                      service.status === 'Available' ? 'nz-badge--success' :
                      service.status === 'Active' ? 'nz-badge--info' : 
                      service.status === 'Priority' ? 'nz-badge--important' : 'nz-badge--neutral'
                    }`}>
                      {service.status}
                    </span>
                  </div>
                </div>
                <div className="nz-card-body">
                  <h3 className="nz-card-title">{service.title}</h3>
                  <p className="nz-card-description">{service.description}</p>
                </div>
                <div className="nz-card-footer">
                  <button className="nz-btn nz-btn--primary">
                    Learn more
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className="nz-form-section">
          <h2 className="nz-section-title">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="nz-form">
            <div className="nz-form-group">
              <label className="nz-label" htmlFor="name">
                Full name (required)
              </label>
              <input
                type="text"
                id="name"
                className="nz-text-input"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>
            
            <div className="nz-form-group">
              <label className="nz-label" htmlFor="email">
                Email address (required)
              </label>
              <input
                type="email"
                id="email"
                className="nz-text-input"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>

            <div className="nz-form-group">
              <label className="nz-label" htmlFor="phone">
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                className="nz-text-input"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>

            <div className="nz-form-group">
              <label className="nz-label" htmlFor="serviceType">
                Type of enquiry (required)
              </label>
              <select
                id="serviceType"
                className="nz-select"
                value={formData.serviceType}
                onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
                required
              >
                <option value="general">General enquiry</option>
                <option value="design-system">Design system support</option>
                <option value="accessibility">Accessibility guidance</option>
                <option value="user-research">User research</option>
                <option value="training">Training and workshops</option>
              </select>
            </div>

            <div className="nz-form-group">
              <label className="nz-label" htmlFor="agency">
                Government agency/department
              </label>
              <input
                type="text"
                id="agency"
                className="nz-text-input"
                value={formData.agency}
                onChange={(e) => setFormData({...formData, agency: e.target.value})}
                placeholder="e.g. Ministry of Health"
              />
            </div>

            <fieldset className="nz-fieldset">
              <legend className="nz-fieldset-legend">
                Priority level (required)
              </legend>
              <div className="nz-control-input">
                <input
                  className="nz-control-input-input"
                  id="priority-low"
                  type="radio"
                  name="priority"
                  value="low"
                  checked={formData.priority === 'low'}
                  onChange={(e) => setFormData({...formData, priority: e.target.value})}
                />
                <label className="nz-control-input-text" htmlFor="priority-low">
                  Low - General question or feedback
                </label>
              </div>
              <div className="nz-control-input">
                <input
                  className="nz-control-input-input"
                  id="priority-medium"
                  type="radio"
                  name="priority"
                  value="medium"
                  checked={formData.priority === 'medium'}
                  onChange={(e) => setFormData({...formData, priority: e.target.value})}
                />
                <label className="nz-control-input-text" htmlFor="priority-medium">
                  Medium - Implementation guidance needed
                </label>
              </div>
              <div className="nz-control-input">
                <input
                  className="nz-control-input-input"
                  id="priority-high"
                  type="radio"
                  name="priority"
                  value="high"
                  checked={formData.priority === 'high'}
                  onChange={(e) => setFormData({...formData, priority: e.target.value})}
                />
                <label className="nz-control-input-text" htmlFor="priority-high">
                  High - Urgent assistance required
                </label>
              </div>
            </fieldset>

            <fieldset className="nz-fieldset">
              <legend className="nz-fieldset-legend">
                Project type (select all that apply)
              </legend>
              <div className="nz-control-input">
                <input
                  className="nz-control-input-input"
                  id="project-website"
                  type="checkbox"
                  checked={formData.projectType.includes('website')}
                  onChange={(e) => {
                    const types = formData.projectType.split(',').filter(t => t);
                    if (e.target.checked) {
                      types.push('website');
                    } else {
                      const index = types.indexOf('website');
                      if (index > -1) types.splice(index, 1);
                    }
                    setFormData({...formData, projectType: types.join(',')});
                  }}
                />
                <label className="nz-control-input-text" htmlFor="project-website">
                  Government website
                </label>
              </div>
              <div className="nz-control-input">
                <input
                  className="nz-control-input-input"
                  id="project-service"
                  type="checkbox"
                  checked={formData.projectType.includes('service')}
                  onChange={(e) => {
                    const types = formData.projectType.split(',').filter(t => t);
                    if (e.target.checked) {
                      types.push('service');
                    } else {
                      const index = types.indexOf('service');
                      if (index > -1) types.splice(index, 1);
                    }
                    setFormData({...formData, projectType: types.join(',')});
                  }}
                />
                <label className="nz-control-input-text" htmlFor="project-service">
                  Digital service
                </label>
              </div>
              <div className="nz-control-input">
                <input
                  className="nz-control-input-input"
                  id="project-app"
                  type="checkbox"
                  checked={formData.projectType.includes('app')}
                  onChange={(e) => {
                    const types = formData.projectType.split(',').filter(t => t);
                    if (e.target.checked) {
                      types.push('app');
                    } else {
                      const index = types.indexOf('app');
                      if (index > -1) types.splice(index, 1);
                    }
                    setFormData({...formData, projectType: types.join(',')});
                  }}
                />
                <label className="nz-control-input-text" htmlFor="project-app">
                  Mobile application
                </label>
              </div>
            </fieldset>

            <div className="nz-form-group">
              <label className="nz-label" htmlFor="message">
                Your message (required)
              </label>
              <div className="nz-hint-text">
                Please provide details about your enquiry or how we can help
              </div>
              <textarea
                id="message"
                className="nz-textarea"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                maxLength={1000}
                required
              ></textarea>
              <div className="nz-character-limit">
                {formData.message.length}/1000 characters
              </div>
            </div>

            <fieldset className="nz-fieldset">
              <legend className="nz-fieldset-legend">
                Communication preferences
              </legend>
              <div className="nz-control-input">
                <input
                  className="nz-control-input-input"
                  id="newsletter"
                  type="checkbox"
                  checked={formData.newsletter}
                  onChange={(e) => setFormData({...formData, newsletter: e.target.checked})}
                />
                <label className="nz-control-input-text" htmlFor="newsletter">
                  Subscribe to design system updates and newsletters
                </label>
              </div>
              <div className="nz-control-input">
                <input
                  className="nz-control-input-input"
                  id="updates"
                  type="checkbox"
                  checked={formData.updates}
                  onChange={(e) => setFormData({...formData, updates: e.target.checked})}
                />
                <label className="nz-control-input-text" htmlFor="updates">
                  Receive important announcements and system updates
                </label>
              </div>
            </fieldset>

            <div className="nz-form-actions">
              <button type="submit" className="nz-btn nz-btn--primary">
                Send enquiry
              </button>
              <button type="button" className="nz-btn nz-btn--tertiary">
                Clear form
              </button>
            </div>
          </form>
        </section>

        {/* Team Table */}
        <section className="nz-team-section">
          <h2 className="nz-section-title">Our Team</h2>
          <div className="nz-table-wrapper">
            <table className="nz-table">
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
                    <th scope="row" className="nz-table-cell--name">{member.name}</th>
                    <td>{member.role}</td>
                    <td>
                      <a href={`mailto:${member.email}`} className="nz-link">
                        {member.email}
                      </a>
                    </td>
                    <td>
                      <span className="nz-badge nz-badge--info">
                        {member.department}
                      </span>
                    </td>
                    <td>
                      <button className="nz-btn nz-btn--tertiary nz-btn--small">
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
        <section className="nz-charts-section">
          <h2 className="nz-section-title">Design System Performance</h2>
          
          <div className="nz-stats-grid">
            <div className="nz-stat-card">
              <div className="nz-stat-number">45+</div>
              <div className="nz-stat-label">Government agencies</div>
            </div>
            <div className="nz-stat-card">
              <div className="nz-stat-number">12</div>
              <div className="nz-stat-label">Components released</div>
            </div>
            <div className="nz-stat-card">
              <div className="nz-stat-number">100%</div>
              <div className="nz-stat-label">Accessibility tested</div>
            </div>
            <div className="nz-stat-card">
              <div className="nz-stat-number">24/7</div>
              <div className="nz-stat-label">Community support</div>
            </div>
          </div>

          <div className="nz-charts-grid">
            <div className="nz-chart-container">
              <h3>Component Usage (3D)</h3>
              <ThreeChart />
            </div>
            <div className="nz-chart-container">
              <h3>Adoption Metrics</h3>
              <VisxChart 
                width={400}
                height={300}
                colors={nzColors}
                designSystem="NZ Government Design System"
              />
            </div>
            <div className="nz-chart-container">
              <h3>User Satisfaction</h3>
              <VanillaVisxChart width={400} height={300} />
            </div>
          </div>
        </section>

        {/* Page Alerts */}
        <section className="nz-alerts-section">
          <div className="nz-page-alerts nz-page-alerts--success">
            <h3>Success</h3>
            <p>Your government service has been successfully published with accessibility compliance.</p>
          </div>
          
          <div className="nz-page-alerts nz-page-alerts--info">
            <h3>Note</h3>
            <p>New components are available in the latest version of the design system.</p>
          </div>
          
          <div className="nz-page-alerts nz-page-alerts--warning">
            <h3>Warning</h3>
            <p>Scheduled maintenance will affect the design system documentation this weekend.</p>
          </div>
          
          <div className="nz-page-alerts nz-page-alerts--error">
            <h3>Error</h3>
            <p>There was a problem processing your form. Please check your entries and try again.</p>
          </div>
        </section>

        {/* Modal Demo */}
        <div className="nz-modal-section">
          <button 
            className="nz-btn nz-btn--primary" 
            onClick={() => setModalOpen(true)}
          >
            Open confirmation dialog
          </button>
          
          {modalOpen && (
            <div className="nz-modal nz-modal--open">
              <div className="nz-modal-backdrop" onClick={() => setModalOpen(false)}></div>
              <div className="nz-modal-dialog">
                <div className="nz-modal-content">
                  <div className="nz-modal-header">
                    <h2 className="nz-modal-title">Confirm Action</h2>
                    <button 
                      className="nz-modal-close" 
                      onClick={() => setModalOpen(false)}
                      aria-label="Close dialog"
                    >
                      ×
                    </button>
                  </div>
                  <div className="nz-modal-body">
                    <p>
                      Are you sure you want to proceed? This action will publish your 
                      government service and make it available to all New Zealanders.
                    </p>
                  </div>
                  <div className="nz-modal-footer">
                    <button 
                      className="nz-btn nz-btn--tertiary" 
                      onClick={() => setModalOpen(false)}
                    >
                      Cancel
                    </button>
                    <button 
                      className="nz-btn nz-btn--primary" 
                      onClick={() => setModalOpen(false)}
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="nz-footer">
        <div className="nz-footer-end">
          <div className="nz-footer-content">
            <div className="nz-footer-section">
              <h3 className="nz-footer-heading">About</h3>
              <ul className="nz-footer-list">
                <li><a href="#" className="nz-footer-link">Design System</a></li>
                <li><a href="#" className="nz-footer-link">Getting started</a></li>
                <li><a href="#" className="nz-footer-link">Contributing</a></li>
                <li><a href="#" className="nz-footer-link">Community</a></li>
              </ul>
            </div>
            
            <div className="nz-footer-section">
              <h3 className="nz-footer-heading">Components</h3>
              <ul className="nz-footer-list">
                <li><a href="#" className="nz-footer-link">All components</a></li>
                <li><a href="#" className="nz-footer-link">Buttons</a></li>
                <li><a href="#" className="nz-footer-link">Forms</a></li>
                <li><a href="#" className="nz-footer-link">Page alerts</a></li>
              </ul>
            </div>
            
            <div className="nz-footer-section">
              <h3 className="nz-footer-heading">Resources</h3>
              <ul className="nz-footer-list">
                <li><a href="#" className="nz-footer-link">Guidelines</a></li>
                <li><a href="#" className="nz-footer-link">Templates</a></li>
                <li><a href="#" className="nz-footer-link">Training</a></li>
                <li><a href="#" className="nz-footer-link">Support</a></li>
              </ul>
            </div>
            
            <div className="nz-footer-section">
              <h3 className="nz-footer-heading">Contact</h3>
              <p className="nz-footer-text">
                Get in touch with the Design System team for support and guidance
              </p>
              <button className="nz-btn nz-btn--tertiary nz-btn--small">
                Contact us
              </button>
            </div>
          </div>
          
          <div className="nz-footer-bottom">
            <div className="nz-footer-legal">
              <p>© Crown Copyright</p>
              <p>
                New Zealand Government | 
                <a href="#" className="nz-footer-link"> Privacy</a> |
                <a href="#" className="nz-footer-link"> Copyright</a> |
                <a href="#" className="nz-footer-link"> Contact</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};