import React, { useState } from 'react';
import { VanillaVisxChart } from './VisxChartVariants';
import '@uswds/uswds/css/uswds.css';

export const USWDSComponents: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    category: 'general',
    newsletter: false,
    agreeToTerms: false
  });

  const [showAlert, setShowAlert] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  const employeeData = [
    { id: 1, name: 'Sarah Chen', email: 'sarah.chen@gsa.gov', status: 'Active', department: 'Engineering', clearance: 'Secret' },
    { id: 2, name: 'Marcus Johnson', email: 'marcus.j@gsa.gov', status: 'Active', department: 'Design', clearance: 'Public Trust' },
    { id: 3, name: 'Elena Rodriguez', email: 'elena.r@gsa.gov', status: 'On Leave', department: 'Marketing', clearance: 'Secret' },
    { id: 4, name: 'David Kim', email: 'david.kim@gsa.gov', status: 'Active', department: 'Operations', clearance: 'Top Secret' },
    { id: 5, name: 'Lisa Thompson', email: 'lisa.t@gsa.gov', status: 'Inactive', department: 'HR', clearance: 'Public Trust' }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Active':
        return 'usa-tag bg-green text-white';
      case 'On Leave':
        return 'usa-tag bg-yellow text-black';
      case 'Inactive':
        return 'usa-tag bg-red text-white';
      default:
        return 'usa-tag bg-gray-30 text-black';
    }
  };

  const getClearanceBadge = (clearance: string) => {
    switch (clearance) {
      case 'Top Secret':
        return 'usa-tag bg-red text-white';
      case 'Secret':
        return 'usa-tag bg-orange text-white';
      case 'Public Trust':
        return 'usa-tag bg-blue text-white';
      default:
        return 'usa-tag bg-gray-30 text-black';
    }
  };

  return (
    <div className="bg-base-lightest">
      {/* Official Government Banner */}
      <div className="usa-banner" aria-label="Official government website">
        <div className="usa-accordion">
          <header className="usa-banner__header">
            <div className="usa-banner__inner">
              <div className="grid-col-auto">
                <img className="usa-banner__header-flag" src="/img/us_flag_small.png" alt="U.S. flag" />
              </div>
              <div className="grid-col-fill tablet:grid-col-auto">
                <p className="usa-banner__header-text">
                  An official website of the United States government
                </p>
                <p className="usa-banner__header-action" aria-hidden="true">
                  Here's how you know
                </p>
              </div>
            </div>
          </header>
        </div>
      </div>

      {/* Header */}
      <header className="usa-header usa-header--basic">
        <div className="usa-nav-container">
          <div className="usa-navbar">
            <div className="usa-logo" id="header-logo">
              <em className="usa-logo__text">
                <a href="#" title="Home" aria-label="Home">
                  TechCorp Federal Solutions
                </a>
              </em>
            </div>
            <button className="usa-menu-btn">Menu</button>
          </div>
          <nav role="navigation" className="usa-nav">
            <div className="usa-nav__inner">
              <button className="usa-nav__close">
                <img src="/img/close.svg" alt="close" />
              </button>
              <ul className="usa-nav__primary usa-accordion">
                <li className="usa-nav__primary-item">
                  <a className="usa-nav__link" href="#"><span>Home</span></a>
                </li>
                <li className="usa-nav__primary-item">
                  <a className="usa-nav__link" href="#"><span>Solutions</span></a>
                </li>
                <li className="usa-nav__primary-item">
                  <a className="usa-nav__link" href="#"><span>Team</span></a>
                </li>
                <li className="usa-nav__primary-item">
                  <a className="usa-nav__link" href="#"><span>Contact</span></a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="usa-hero" aria-label="Introduction">
        <div className="grid-container">
          <div className="usa-hero__callout">
            <h1 className="usa-hero__heading">
              <span className="usa-hero__heading--alt">TechCorp Federal Solutions</span>
              Secure Technology for Government
            </h1>
            <p>
              Delivering trusted, accessible, and secure technology solutions for federal agencies 
              and government organizations across the United States.
            </p>
            <a className="usa-button" href="#services">
              Explore Our Services
            </a>
          </div>
        </div>
      </section>

      <main className="usa-section">
        <div className="grid-container">
          {/* Breadcrumb */}
          <nav className="usa-breadcrumb" aria-label="Breadcrumbs">
            <ol className="usa-breadcrumb__list">
              <li className="usa-breadcrumb__list-item">
                <a href="#" className="usa-breadcrumb__link">
                  <span>Home</span>
                </a>
              </li>
              <li className="usa-breadcrumb__list-item">
                <a href="#" className="usa-breadcrumb__link">
                  <span>Solutions</span>
                </a>
              </li>
              <li className="usa-breadcrumb__list-item usa-current" aria-current="page">
                <span>Overview</span>
              </li>
            </ol>
          </nav>

          {/* Alert Example */}
          {showAlert && (
            <div className="usa-alert usa-alert--success" role="alert">
              <div className="usa-alert__body">
                <h4 className="usa-alert__heading">Success status</h4>
                <p className="usa-alert__text">
                  Your message has been sent successfully. We'll get back to you within 24 hours.
                </p>
              </div>
            </div>
          )}

          {/* Services Section */}
          <section id="services" className="usa-section">
            <div className="grid-row grid-gap">
              <div className="tablet:grid-col-12">
                <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-4">
                  Federal Technology Solutions
                </h2>
                <p className="usa-intro">
                  Comprehensive technology services designed to meet the unique requirements 
                  of federal agencies and government organizations.
                </p>
              </div>
            </div>

            <div className="grid-row grid-gap">
              <div className="tablet:grid-col-4">
                <div className="usa-card">
                  <div className="usa-card__container">
                    <div className="usa-card__header">
                      <h3 className="usa-card__heading">Secure Cloud Infrastructure</h3>
                    </div>
                    <div className="usa-card__body">
                      <p>
                        FedRAMP-authorized cloud solutions with end-to-end encryption, 
                        continuous monitoring, and compliance with federal security standards.
                      </p>
                    </div>
                    <div className="usa-card__footer">
                      <button className="usa-button">Learn More</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tablet:grid-col-4">
                <div className="usa-card">
                  <div className="usa-card__container">
                    <div className="usa-card__header">
                      <h3 className="usa-card__heading">Cybersecurity Services</h3>
                    </div>
                    <div className="usa-card__body">
                      <p>
                        Advanced threat detection, incident response, and security consulting 
                        to protect sensitive government data and systems.
                      </p>
                    </div>
                    <div className="usa-card__footer">
                      <button className="usa-button usa-button--outline">Explore</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tablet:grid-col-4">
                <div className="usa-card">
                  <div className="usa-card__container">
                    <div className="usa-card__header">
                      <h3 className="usa-card__heading">Digital Transformation</h3>
                    </div>
                    <div className="usa-card__body">
                      <p>
                        Modernization of legacy systems, process automation, and digital 
                        service delivery to improve citizen experiences.
                      </p>
                    </div>
                    <div className="usa-card__footer">
                      <button className="usa-button usa-button--secondary">Get Quote</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <section className="usa-section">
            <div className="grid-row grid-gap">
              <div className="tablet:grid-col-8">
                <h2 className="font-heading-xl margin-top-0">
                  Contact Our Federal Solutions Team
                </h2>
                <p className="usa-intro">
                  Ready to discuss your agency's technology needs? Our certified professionals 
                  are here to help you navigate federal compliance and security requirements.
                </p>

                <form className="usa-form usa-form--large" onSubmit={handleSubmit}>
                  <fieldset className="usa-fieldset">
                    <legend className="usa-legend">Contact Information</legend>
                    
                    <div className="grid-row grid-gap">
                      <div className="tablet:grid-col-6">
                        <label className="usa-label" htmlFor="full-name">
                          Full Name <span className="usa-required">*</span>
                        </label>
                        <input
                          className="usa-input"
                          id="full-name"
                          name="full-name"
                          type="text"
                          required
                          aria-required="true"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      
                      <div className="tablet:grid-col-6">
                        <label className="usa-label" htmlFor="email">
                          Email Address <span className="usa-required">*</span>
                        </label>
                        <input
                          className="usa-input"
                          id="email"
                          name="email"
                          type="email"
                          required
                          aria-required="true"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <label className="usa-label" htmlFor="inquiry-type">
                      Inquiry Type
                    </label>
                    <select
                      className="usa-select"
                      id="inquiry-type"
                      name="inquiry-type"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    >
                      <option value="general">General Inquiry</option>
                      <option value="cloud">Cloud Solutions</option>
                      <option value="cybersecurity">Cybersecurity Services</option>
                      <option value="digital">Digital Transformation</option>
                      <option value="compliance">Compliance & Audit</option>
                    </select>

                    <label className="usa-label" htmlFor="message">
                      Project Details <span className="usa-required">*</span>
                    </label>
                    <textarea
                      className="usa-textarea"
                      id="message"
                      name="message"
                      required
                      aria-required="true"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />

                    <div className="usa-checkbox">
                      <input
                        className="usa-checkbox__input"
                        id="newsletter"
                        type="checkbox"
                        name="newsletter"
                        checked={formData.newsletter}
                        onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                      />
                      <label className="usa-checkbox__label" htmlFor="newsletter">
                        I'd like to receive updates about federal technology solutions and compliance news
                      </label>
                    </div>

                    <div className="usa-checkbox">
                      <input
                        className="usa-checkbox__input"
                        id="terms"
                        type="checkbox"
                        name="terms"
                        required
                        checked={formData.agreeToTerms}
                        onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                      />
                      <label className="usa-checkbox__label" htmlFor="terms">
                        I agree to the Terms of Service and Privacy Policy <span className="usa-required">*</span>
                      </label>
                    </div>
                  </fieldset>

                  <input
                    className="usa-button"
                    type="submit"
                    value="Send Secure Message"
                  />
                  <button
                    className="usa-button usa-button--unstyled"
                    type="button"
                    onClick={() => setFormData({
                      name: '',
                      email: '',
                      message: '',
                      category: 'general',
                      newsletter: false,
                      agreeToTerms: false
                    })}
                  >
                    Clear Form
                  </button>
                </form>
              </div>

              <div className="tablet:grid-col-4">
                <div className="usa-summary-box">
                  <div className="usa-summary-box__body">
                    <h3 className="usa-summary-box__heading">
                      Federal Compliance
                    </h3>
                    <div className="usa-summary-box__text">
                      <p>
                        All our solutions meet federal security and compliance requirements:
                      </p>
                      <ul className="usa-list">
                        <li>FedRAMP Authorization</li>
                        <li>NIST Cybersecurity Framework</li>
                        <li>Section 508 Accessibility</li>
                        <li>FISMA Compliance</li>
                        <li>PIV/CAC Authentication</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Team Table */}
          <section className="usa-section">
            <h2 className="font-heading-xl margin-top-0">
              Federal Solutions Team Directory
            </h2>
            <p className="usa-intro">
              Our certified federal technology professionals with appropriate security clearances.
            </p>

            <div className="usa-table-container--scrollable">
              <table className="usa-table usa-table--borderless">
                <thead>
                  <tr>
                    <th scope="col">Employee</th>
                    <th scope="col">Email</th>
                    <th scope="col">Department</th>
                    <th scope="col">Status</th>
                    <th scope="col">Clearance Level</th>
                  </tr>
                </thead>
                <tbody>
                  {employeeData.map((employee) => (
                    <tr key={employee.id}>
                      <td>
                        <strong>{employee.name}</strong>
                      </td>
                      <td>{employee.email}</td>
                      <td>{employee.department}</td>
                      <td>
                        <span className={getStatusBadge(employee.status)}>
                          {employee.status}
                        </span>
                      </td>
                      <td>
                        <span className={getClearanceBadge(employee.clearance)}>
                          {employee.clearance}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Performance Dashboard */}
          <section className="usa-section">
            <h2 className="font-heading-xl margin-top-0">
              Federal Systems Performance Analytics
            </h2>
            
            <div className="grid-row grid-gap">
              <div className="tablet:grid-col-3">
                <div className="usa-card">
                  <div className="usa-card__container">
                    <div className="usa-card__body">
                      <h3 className="usa-card__heading font-heading-2xl text-primary margin-bottom-05">
                        99.9%
                      </h3>
                      <p className="usa-card__text">System Uptime</p>
                      <p className="text-green font-sans-xs">
                        <strong>↗ +0.1%</strong> this quarter
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tablet:grid-col-3">
                <div className="usa-card">
                  <div className="usa-card__container">
                    <div className="usa-card__body">
                      <h3 className="usa-card__heading font-heading-2xl text-primary margin-bottom-05">
                        $2.4M
                      </h3>
                      <p className="usa-card__text">Cost Savings</p>
                      <p className="text-green font-sans-xs">
                        <strong>↗ +15%</strong> this year
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tablet:grid-col-3">
                <div className="usa-card">
                  <div className="usa-card__container">
                    <div className="usa-card__body">
                      <h3 className="usa-card__heading font-heading-2xl text-primary margin-bottom-05">
                        87
                      </h3>
                      <p className="usa-card__text">Active Projects</p>
                      <p className="text-green font-sans-xs">
                        <strong>↗ +12</strong> new this month
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tablet:grid-col-3">
                <div className="usa-card">
                  <div className="usa-card__container">
                    <div className="usa-card__body">
                      <h3 className="usa-card__heading font-heading-2xl text-primary margin-bottom-05">
                        100%
                      </h3>
                      <p className="usa-card__text">Compliance Rate</p>
                      <p className="text-green font-sans-xs">
                        <strong>✓</strong> All audits passed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid-row grid-gap margin-top-4">
              <div className="tablet:grid-col-6">
                <div className="usa-card">
                  <div className="usa-card__container">
                    <div className="usa-card__header">
                      <h3 className="usa-card__heading">System Performance (visx)</h3>
                    </div>
                    <div className="usa-card__body">
                      <VanillaVisxChart width={400} height={250} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="tablet:grid-col-6">
                <div className="usa-card">
                  <div className="usa-card__container">
                    <div className="usa-card__header">
                      <h3 className="usa-card__heading">Security Metrics</h3>
                    </div>
                    <div className="usa-card__body">
                      <div className="margin-bottom-2">
                        <p className="font-sans-xs margin-bottom-05">Threat Detection Rate</p>
                        <div className="usa-progress-bar">
                          <div 
                            className="usa-progress-bar__fill" 
                            role="progressbar" 
                            aria-valuenow={98} 
                            aria-valuemin={0} 
                            aria-valuemax={100}
                            style={{ width: '98%' }}
                          />
                        </div>
                        <span className="font-sans-xs text-base-dark">98%</span>
                      </div>
                      
                      <div className="margin-bottom-2">
                        <p className="font-sans-xs margin-bottom-05">Incident Response Time</p>
                        <div className="usa-progress-bar">
                          <div 
                            className="usa-progress-bar__fill" 
                            role="progressbar" 
                            aria-valuenow={85} 
                            aria-valuemin={0} 
                            aria-valuemax={100}
                            style={{ width: '85%' }}
                          />
                        </div>
                        <span className="font-sans-xs text-base-dark">85%</span>
                      </div>
                      
                      <div className="margin-bottom-2">
                        <p className="font-sans-xs margin-bottom-05">System Hardening</p>
                        <div className="usa-progress-bar">
                          <div 
                            className="usa-progress-bar__fill" 
                            role="progressbar" 
                            aria-valuenow={92} 
                            aria-valuemin={0} 
                            aria-valuemax={100}
                            style={{ width: '92%' }}
                          />
                        </div>
                        <span className="font-sans-xs text-base-dark">92%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Additional Alerts */}
          <section className="usa-section">
            <div className="grid-row grid-gap">
              <div className="tablet:grid-col-6">
                <div className="usa-alert usa-alert--info usa-alert--slim">
                  <div className="usa-alert__body">
                    <p className="usa-alert__text">
                      <strong>Info:</strong> New federal security guidelines are now available for review.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="tablet:grid-col-6">
                <div className="usa-alert usa-alert--warning usa-alert--slim">
                  <div className="usa-alert__body">
                    <p className="usa-alert__text">
                      <strong>Warning:</strong> Planned maintenance window scheduled for this weekend.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Modal Button */}
          <div className="margin-bottom-4">
            <button
              className="usa-button usa-button--secondary"
              onClick={() => setShowModal(true)}
            >
              Open Security Information Modal
            </button>
          </div>
        </div>
      </main>

      {/* Modal */}
      {showModal && (
        <div className="usa-modal-wrapper is-visible">
          <div className="usa-modal-overlay">
            <div className="usa-modal">
              <div className="usa-modal__content">
                <div className="usa-modal__main">
                  <h2 className="usa-modal__heading">
                    Federal Security Information
                  </h2>
                  <div className="usa-prose">
                    <p>
                      This system is operated by the U.S. Government and is subject to monitoring 
                      and auditing in accordance with federal laws and regulations.
                    </p>
                    <p>
                      All data is encrypted in transit and at rest, with access limited to 
                      authorized personnel with appropriate security clearances.
                    </p>
                  </div>
                </div>
                <div className="usa-modal__footer">
                  <ul className="usa-button-group">
                    <li className="usa-button-group__item">
                      <button 
                        type="button" 
                        className="usa-button"
                        onClick={() => setShowModal(false)}
                      >
                        I Understand
                      </button>
                    </li>
                    <li className="usa-button-group__item">
                      <button 
                        type="button" 
                        className="usa-button usa-button--unstyled"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="usa-footer usa-footer--slim">
        <div className="grid-container usa-footer__return-to-top">
          <a href="#">Return to top</a>
        </div>
        <div className="usa-footer__primary-section">
          <div className="grid-container">
            <div className="grid-row grid-gap">
              <div className="tablet:grid-col-8">
                <nav className="usa-footer__nav">
                  <ul className="grid-row grid-gap">
                    <li className="tablet:grid-col-6 usa-footer__primary-content">
                      <a className="usa-footer__primary-link" href="#">
                        Federal Solutions
                      </a>
                    </li>
                    <li className="tablet:grid-col-6 usa-footer__primary-content">
                      <a className="usa-footer__primary-link" href="#">
                        Security & Compliance
                      </a>
                    </li>
                    <li className="tablet:grid-col-6 usa-footer__primary-content">
                      <a className="usa-footer__primary-link" href="#">
                        Digital Transformation
                      </a>
                    </li>
                    <li className="tablet:grid-col-6 usa-footer__primary-content">
                      <a className="usa-footer__primary-link" href="#">
                        Support & Training
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="tablet:grid-col-4">
                <address className="usa-footer__address">
                  <div className="usa-footer__contact-info">
                    <p>
                      <a href="tel:1-800-555-GOVT">1-800-555-GOVT</a>
                    </p>
                    <p>
                      <a href="mailto:info@techcorp.gov">info@techcorp.gov</a>
                    </p>
                  </div>
                </address>
              </div>
            </div>
          </div>
        </div>
        <div className="usa-footer__secondary-section">
          <div className="grid-container">
            <div className="grid-row grid-gap">
              <div className="usa-footer__logo grid-row tablet:grid-col-6">
                <div className="tablet:grid-col-auto">
                  <h3 className="usa-footer__logo-heading">TechCorp Federal Solutions</h3>
                </div>
              </div>
              <div className="usa-footer__contact-links tablet:grid-col-6">
                <ul className="usa-list usa-list--unstyled">
                  <li className="usa-footer__contact-link">
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li className="usa-footer__contact-link">
                    <a href="#">Terms of Service</a>
                  </li>
                  <li className="usa-footer__contact-link">
                    <a href="#">Accessibility</a>
                  </li>
                  <li className="usa-footer__contact-link">
                    <a href="#">FOIA</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};