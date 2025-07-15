import React, { useState } from 'react';
import '../styles/govuk-custom.css';

export const GOVUKComponents: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    category: 'general',
    newsletter: false,
    rating: 5,
    agree: false
  });

  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const employeeData = [
    { id: 1, name: 'Sarah Chen', email: 'sarah.chen@techcorp.com', status: 'Active', department: 'Engineering' },
    { id: 2, name: 'Marcus Johnson', email: 'marcus.j@techcorp.com', status: 'Active', department: 'Design' },
    { id: 3, name: 'Elena Rodriguez', email: 'elena.r@techcorp.com', status: 'On Leave', department: 'Marketing' },
    { id: 4, name: 'David Kim', email: 'david.kim@techcorp.com', status: 'Active', department: 'Sales' },
    { id: 5, name: 'Lisa Thompson', email: 'lisa.t@techcorp.com', status: 'Inactive', department: 'HR' }
  ];

  const tabs = ['Company Overview', 'Our Services', 'Team', 'Contact'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  return (
    <div className="govuk-width-container" style={{ backgroundColor: '#f3f2f1', minHeight: '100vh' }}>
      {/* GOV.UK Header */}
      <header className="govuk-header" role="banner" data-module="govuk-header">
        <div className="govuk-header__container govuk-width-container">
          <div className="govuk-header__logo">
            <a href="#" className="govuk-header__link govuk-header__link--homepage">
              <span className="govuk-header__logotype">
                <svg
                  role="presentation"
                  focusable="false"
                  className="govuk-header__logotype-crown"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 132 97"
                  height="30"
                  width="36"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M25 30.2c3.5 1.5 7.7-.2 9.1-3.7 1.5-3.6-.2-7.8-3.9-9.2-3.6-1.4-7.6.3-9.1 3.9-1.4 3.5.3 7.5 3.9 9zM9 39.5c3.6 1.5 7.8-.2 9.2-3.7 1.5-3.6-.2-7.8-3.9-9.1-3.6-1.5-7.6.2-9.1 3.8-1.4 3.5.3 7.5 3.8 8.9zM4.4 57.2c3.5 1.5 7.7-.2 9.1-3.8 1.5-3.6-.2-7.7-3.9-9.1-3.5-1.5-7.6.3-9.1 3.8-1.4 3.5.3 7.6 3.9 9.1zm38.3-21.4c3.5 1.5 7.7-.2 9.1-3.8 1.5-3.6-.2-7.7-3.9-9.1-3.6-1.5-7.6.3-9.1 3.8-1.3 3.6.4 7.7 3.9 9.1zm64.4-5.6c-3.6 1.5-7.8-.2-9.1-3.7-1.5-3.6.2-7.8 3.8-9.2 3.6-1.4 7.7.3 9.2 3.9 1.3 3.5-.4 7.5-3.9 8.9zm15.9 9.3c-3.6 1.5-7.7-.2-9.1-3.7-1.5-3.6.2-7.8 3.7-9.1 3.6-1.5 7.7.2 9.2 3.8 1.5 3.5-.3 7.5-3.8 8.9zm4.7 17.7c-3.6 1.5-7.8-.2-9.2-3.8-1.5-3.6.2-7.7 3.9-9.1 3.6-1.5 7.7.3 9.2 3.8 1.3 3.5-.4 7.6-3.9 9.1zM89.3 35.8c-3.6 1.5-7.8-.2-9.2-3.8-1.4-3.6.2-7.7 3.9-9.1 3.6-1.5 7.7.3 9.2 3.8 1.4 3.6-.3 7.7-3.9 9.1zM69.7 17.7l8.9 4.7V9.3l-8.9 2.8c-.2-.3-.5-.6-.9-.9L72.4 0H59.6l3.5 11.2c-.3.3-.6.5-.9.9l-8.8-2.8v13.1l8.8-4.7c.3.3.6.7.9.9l-5 15.4v.1c-.2.8-.4 1.6-.4 2.4 0 4.1 3.1 7.5 7 8.1h.2c.3 0 .7.1 1 .1.4 0 .7 0 1-.1h.2c4-.6 7.1-4.1 7.1-8.1 0-.8-.1-1.7-.4-2.4V34l-5.1-15.4c.4-.2.7-.6 1-.9zM66 92.8c16.9 0 32.8 1.1 47.1 3.2 4-16.9 8.9-26.7 14-33.5l-9.6-3.4c1 4.9 1.1 7.2 0 10.2-1.5-1.4-3-4.3-4.2-8.7L108.6 76c2.8-2 5-3.2 7.5-3.3-4.4 9.4-10 11.9-13.6 11.2-4.3-.8-6.3-4.6-5.6-7.9 1-4.7 5.7-5.9 8-.5 4.3-8.7-3-11.4-7.6-8.8 7.1-7.2 7.9-13.5 2.1-21.1-8 6.1-8.1 12.3-4.5 20.8-4.7-5.4-12.1-2.5-9.5 6.2 3.4-5.2 7.9-2 7.2 3.1-.6 4.3-6.4 7.8-13.5 7.2-10.3-.9-10.9-8-11.2-13.8 2.5-.5 7.1 1.8 11 7.3L80.2 60c-4.1 4.4-8 5.3-12.3 5.4 1.4-4.4 8-11.6 8-11.6l2.3-4.8 2.3 4.8s6.6 7.2 8 11.6c-4.2-.1-8-1-12.3-5.4l1.4 16.4c3.9-5.5 8.5-7.7 10.9-7.3-.3 5.8-.9 12.8-11.1 13.8-7.2.6-12.9-2.9-13.5-7.2-.7-5 3.8-8.3 7.1-3.1 2.7-8.7-4.6-11.6-9.4-6.2 3.7-8.5 3.6-14.7-4.6-20.8-5.8 7.6-5 13.9 2.2 21.1-4.7-2.6-11.9.1-7.7 8.8 2.3-5.5 7.1-4.2 8.1.5.7 3.3-1.3 7.1-5.7 7.9-3.5.7-9-1.8-13.5-11.2 2.5.1 4.7 1.3 7.5 3.3l-4.7-15.4c-1.2 4.4-2.7 7.2-4.3 8.7-1.1-3-.9-5.3 0-10.2l-9.5 3.4c5 6.9 9.9 16.7 14 33.5 14.8-2.1 30.8-3.2 47.7-3.2z"
                  />
                </svg>
                <span className="govuk-header__logotype-text">
                  GOV.UK
                </span>
              </span>
            </a>
          </div>
          <div className="govuk-header__content">
            <a href="#" className="govuk-header__link govuk-header__link--service-name">
              TechCorp Solutions
            </a>
          </div>
        </div>
      </header>

      <div className="govuk-width-container">
        <div className="govuk-phase-banner">
          <p className="govuk-phase-banner__content">
            <strong className="govuk-tag govuk-phase-banner__content__tag">
              beta
            </strong>
            <span className="govuk-phase-banner__text">
              This is a new service – your{' '}
              <a className="govuk-link" href="#">
                feedback
              </a>{' '}
              will help us to improve it.
            </span>
          </p>
        </div>

        <div className="govuk-breadcrumbs">
          <ol className="govuk-breadcrumbs__list">
            <li className="govuk-breadcrumbs__list-item">
              <a className="govuk-breadcrumbs__link" href="#">Home</a>
            </li>
            <li className="govuk-breadcrumbs__list-item">
              <a className="govuk-breadcrumbs__link" href="#">Services</a>
            </li>
            <li className="govuk-breadcrumbs__list-item">
              <a className="govuk-breadcrumbs__link" href="#">Technology Solutions</a>
            </li>
          </ol>
        </div>

        <main className="govuk-main-wrapper" id="main-content" role="main">
          {/* Hero Section */}
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-two-thirds">
              <h1 className="govuk-heading-xl">TechCorp Solutions</h1>
              <p className="govuk-body-l">
                Innovating the future with cutting-edge technology solutions for modern businesses
              </p>
              <a href="#services" role="button" draggable="false" className="govuk-button govuk-button--start">
                Get Started
                <svg className="govuk-button__start-icon" xmlns="http://www.w3.org/2000/svg" width="17.5" height="19" viewBox="0 0 33 40" role="presentation" focusable="false">
                  <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div className="govuk-grid-row" id="services">
            <div className="govuk-grid-column-full">
              <h2 className="govuk-heading-l">Our Services</h2>
              <div className="govuk-grid-row">
                <div className="govuk-grid-column-one-third">
                  <div className="govuk-panel govuk-panel--confirmation">
                    <h3 className="govuk-panel__title">Cloud Solutions</h3>
                    <div className="govuk-panel__body">
                      <strong className="govuk-tag govuk-tag--blue">Popular</strong>
                      <p className="govuk-body">Scalable cloud infrastructure and migration services</p>
                    </div>
                  </div>
                </div>
                <div className="govuk-grid-column-one-third">
                  <div className="govuk-panel govuk-panel--confirmation">
                    <h3 className="govuk-panel__title">AI & Analytics</h3>
                    <div className="govuk-panel__body">
                      <strong className="govuk-tag govuk-tag--purple">Advanced</strong>
                      <p className="govuk-body">Machine learning and data analytics solutions</p>
                    </div>
                  </div>
                </div>
                <div className="govuk-grid-column-one-third">
                  <div className="govuk-panel govuk-panel--confirmation">
                    <h3 className="govuk-panel__title">Custom Development</h3>
                    <div className="govuk-panel__body">
                      <strong className="govuk-tag govuk-tag--yellow">Premium</strong>
                      <p className="govuk-body">Bespoke software development and consulting</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Alert Section */}
          {showAlert && (
            <div className="govuk-notification-banner govuk-notification-banner--success" role="alert" aria-labelledby="govuk-notification-banner-title" data-module="govuk-notification-banner">
              <div className="govuk-notification-banner__header">
                <h2 className="govuk-notification-banner__title" id="govuk-notification-banner-title">
                  Success
                </h2>
              </div>
              <div className="govuk-notification-banner__content">
                <p className="govuk-notification-banner__heading">
                  Your message has been sent successfully!
                </p>
              </div>
            </div>
          )}

          {/* Contact Form */}
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-two-thirds">
              <form onSubmit={handleSubmit} className="govuk-form">
                <fieldset className="govuk-fieldset">
                  <legend className="govuk-fieldset__legend govuk-fieldset__legend--l">
                    <h2 className="govuk-fieldset__heading">Contact Our Team</h2>
                  </legend>

                  <div className="govuk-form-group">
                    <label className="govuk-label" htmlFor="name">
                      Full name
                    </label>
                    <input
                      className="govuk-input"
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="govuk-form-group">
                    <label className="govuk-label" htmlFor="email">
                      Email address
                    </label>
                    <input
                      className="govuk-input"
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="govuk-form-group">
                    <label className="govuk-label" htmlFor="category">
                      Category
                    </label>
                    <select
                      className="govuk-select"
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                    >
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="sales">Sales</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>

                  <div className="govuk-form-group">
                    <label className="govuk-label" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      className="govuk-textarea"
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="govuk-checkboxes">
                    <div className="govuk-checkboxes__item">
                      <input
                        className="govuk-checkboxes__input"
                        id="newsletter"
                        name="newsletter"
                        type="checkbox"
                        checked={formData.newsletter}
                        onChange={handleInputChange}
                      />
                      <label className="govuk-label govuk-checkboxes__label" htmlFor="newsletter">
                        Subscribe to our newsletter
                      </label>
                    </div>
                  </div>

                  <button type="submit" className="govuk-button" data-module="govuk-button">
                    Send message
                  </button>
                </fieldset>
              </form>
            </div>
          </div>

          {/* Team Table */}
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-full">
              <h2 className="govuk-heading-l">Our Team Directory</h2>
              <table className="govuk-table">
                <thead className="govuk-table__head">
                  <tr className="govuk-table__row">
                    <th scope="col" className="govuk-table__header">Name</th>
                    <th scope="col" className="govuk-table__header">Email</th>
                    <th scope="col" className="govuk-table__header">Department</th>
                    <th scope="col" className="govuk-table__header">Status</th>
                  </tr>
                </thead>
                <tbody className="govuk-table__body">
                  {employeeData.map((employee) => (
                    <tr key={employee.id} className="govuk-table__row">
                      <td className="govuk-table__cell">{employee.name}</td>
                      <td className="govuk-table__cell">{employee.email}</td>
                      <td className="govuk-table__cell">{employee.department}</td>
                      <td className="govuk-table__cell">
                        <strong className={`govuk-tag ${
                          employee.status === 'Active' ? 'govuk-tag--green' : 
                          employee.status === 'On Leave' ? 'govuk-tag--yellow' : 
                          'govuk-tag--red'
                        }`}>
                          {employee.status}
                        </strong>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Statistics */}
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-full">
              <h2 className="govuk-heading-l">Performance Statistics</h2>
              <div className="govuk-grid-row">
                <div className="govuk-grid-column-one-quarter">
                  <div className="govuk-summary-card">
                    <div className="govuk-summary-card__title-wrapper">
                      <h3 className="govuk-summary-card__title">2.4M</h3>
                    </div>
                    <div className="govuk-summary-card__content">
                      <p className="govuk-body">Active Users</p>
                    </div>
                  </div>
                </div>
                <div className="govuk-grid-column-one-quarter">
                  <div className="govuk-summary-card">
                    <div className="govuk-summary-card__title-wrapper">
                      <h3 className="govuk-summary-card__title">$1.2M</h3>
                    </div>
                    <div className="govuk-summary-card__content">
                      <p className="govuk-body">Revenue</p>
                    </div>
                  </div>
                </div>
                <div className="govuk-grid-column-one-quarter">
                  <div className="govuk-summary-card">
                    <div className="govuk-summary-card__title-wrapper">
                      <h3 className="govuk-summary-card__title">127</h3>
                    </div>
                    <div className="govuk-summary-card__content">
                      <p className="govuk-body">Projects</p>
                    </div>
                  </div>
                </div>
                <div className="govuk-grid-column-one-quarter">
                  <div className="govuk-summary-card">
                    <div className="govuk-summary-card__title-wrapper">
                      <h3 className="govuk-summary-card__title">98.5%</h3>
                    </div>
                    <div className="govuk-summary-card__content">
                      <p className="govuk-body">Uptime</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Different Alert Types */}
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-full">
              <h2 className="govuk-heading-l">System Status</h2>
              
              <div className="govuk-notification-banner govuk-notification-banner--success" role="alert">
                <div className="govuk-notification-banner__header">
                  <h2 className="govuk-notification-banner__title">Success</h2>
                </div>
                <div className="govuk-notification-banner__content">
                  <p className="govuk-notification-banner__heading">Operation completed successfully!</p>
                </div>
              </div>

              <div className="govuk-warning-text">
                <span className="govuk-warning-text__icon" aria-hidden="true">!</span>
                <strong className="govuk-warning-text__text">
                  <span className="govuk-warning-text__assistive">Warning</span>
                  Please check your input data.
                </strong>
              </div>

              <div className="govuk-error-summary" role="alert">
                <h2 className="govuk-error-summary__title">Something went wrong. Please try again.</h2>
              </div>

              <div className="govuk-inset-text">
                Here's some helpful information.
              </div>
            </div>
          </div>

          {/* Modal */}
          {showModal && (
            <div className="govuk-modal" style={{ 
              position: 'fixed', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '100%', 
              backgroundColor: 'rgba(0,0,0,0.5)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              zIndex: 1000
            }}>
              <div className="govuk-panel govuk-panel--confirmation" style={{ 
                backgroundColor: 'white', 
                maxWidth: '500px', 
                margin: '20px' 
              }}>
                <h3 className="govuk-panel__title">Modal Title</h3>
                <div className="govuk-panel__body">
                  <p className="govuk-body">This is a modal dialog example using GOV.UK Design System styling.</p>
                  <button 
                    className="govuk-button govuk-button--secondary"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}

          <button 
            className="govuk-button govuk-button--secondary" 
            onClick={() => setShowModal(true)}
          >
            Open Modal
          </button>
        </main>

        {/* Footer */}
        <footer className="govuk-footer" role="contentinfo">
          <div className="govuk-width-container">
            <div className="govuk-footer__meta">
              <div className="govuk-footer__meta-item govuk-footer__meta-item--grow">
                <h2 className="govuk-visually-hidden">Support links</h2>
                <ul className="govuk-footer__inline-list">
                  <li className="govuk-footer__inline-list-item">
                    <a className="govuk-footer__link" href="#">Contact: hello@techcorp.com</a>
                  </li>
                  <li className="govuk-footer__inline-list-item">
                    <a className="govuk-footer__link" href="#">Phone: +1 (555) 123-4567</a>
                  </li>
                  <li className="govuk-footer__inline-list-item">
                    <a className="govuk-footer__link" href="#">Address: San Francisco, CA</a>
                  </li>
                </ul>
              </div>
              <div className="govuk-footer__meta-item">
                <a className="govuk-footer__link govuk-footer__copyright-logo" href="https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/">
                  © Crown copyright
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};